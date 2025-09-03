<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    .dropdown-input {
        grid-column: 1 / 2;
    }

    .images-container,
    .image-theme-container {
        grid-column: 2 / -1;
    }

    .image-title {
        position: absolute;
        left: calc(50% + #{math.div(2.3rem, 2)});
        top: 0;
    }
}
.images-container {
    position: relative;
    overflow-x: auto;

    .image-upload-holder {
        min-width: calc(100% - 2px);
        width: auto !important;
    }
    .theme-option-container {
        position: absolute;
        height: 100%;
        width: 100%;
        white-space: nowrap;
        padding: 0.5rem 0.3rem 1rem;
        top: 0;

        .option-item {
            display: inline-flex;
            width: 20rem;
            height: 100%;
            margin: 0.5rem;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            input[name=main-image] {
                margin: 0.5rem;
            }
        }
    }
}

.image-theme-container {
    max-width: 100%;
    border: darkslategray 2px solid;

    img {
        max-width: 100%;
        max-height: 100px;
    }
}
</style>

<template>
    <div class="container" :class="getIsDisabled('theme') ? 'disabled' : ''">
        <dropdown v-if="visible"
                  ref="theme-dropdown"
                  :current-selection="getTheme()"
                  :can-unset="getCanUnset()"
                  :placeholder="getCanUnset() ? $t('dataTable.placeholder.noTheme') : null"
                  :dropdown-name="'theme-id'"
                  :parent-element="'undefined'"
                  :disabled="getIsDisabled('theme')"
                  :data-events="getAddEventListeners()"
                  @change="dropdownChange"
                  :emit-on-mounted="true">
            <template #default>
                <label v-for="theme in getThemes()"
                       :key="theme"
                       :value="theme.id"
                       :data-value="theme.value">
                    {{ theme.value }}
                </label>
            </template>
            <template #add-new-extended>
                <slot :name="prop"></slot>
            </template>
        </dropdown>
        <label class="image-title" :class="getIsDisabled('images') ? 'disabled' : ''">
            {{ $t('dataTable.headers.image') }}
        </label>
        <image-upload ref="image-upload"
                      v-if="visible"
                      :multiple="false"
                      :id="fieldName"
                      :required="isRequired()"
                      :selectable="isSelectable()"
                      :name="prop"
                      :disabled="getIsDisabled('images')"
                      :idMap="getThemeMap()"
                      :defaultSelection="getDefault()"/>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { ProductSelectionRangeItem } from '@pictaccio/admin-gui/core/types/product_selection_range_item';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import ImageUpload, { isSelectRange, SelectRange } from '@pictaccio/admin-gui/views/components/widgets/ImageUpload.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { isLocalizedString } from '@pictaccio/shared/utils/guards/is_localized_string';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Text localized long',
    components: {
        FontAwesomeIcon,
        ImageUpload,
        Dropdown
    }
})
export default class ThemeImage<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private themes: ProductSelectionRangeItem[] = [];
    private visible = false;
    private changeEventOption = null;

    /* LIFECYCLE */
    public async update(state: UpdateState<Tmodel>): Promise<void> {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        await this.$nextTick(() => {
            this.visible = true;
        });
        this.setThemeMap();
        this.setFiles();
    }

    /* EVENT HANDLER */
    private async dropdownChange(event): Promise<void> {
        let selection = event.selection;
        if (!selection) {
            (this.$refs['image-upload'] as ImageUpload).setSelectionRange([]);
            return;
        }

        if (Array.isArray(selection)) {
            selection = selection[0]
        }

        await this.$store.dispatch('ProductThemesReader/productThemeRead', selection);
        let themes = this.$store.getters['ProductThemesReader/productTheme'];

        if (!themes) {
            themes = [];
        }

        this.themes = themes.map(i => ({ id: i.id, locale: i.value }));
        (this.$refs['image-upload'] as ImageUpload).setSelectionRange(this.themes);

        if (this.changeEventOption) {
            this.changeEventOption(event.selection.length > 0);
        }
    }

    /* PRIVATE */
    private getAddEventListeners(): boolean {
        try {
            const options = this.dataSource?.getOptions();

            if (!options) {
                return false;
            }

            const eventsListener = options.find(i => i.id === 'eventListeners').value;

            if (typeof eventsListener !== 'object' || !eventsListener || Object.keys(eventsListener).length === 0) {
                return false;
            }

            this.$nextTick(() => {
                for (const event of Object.entries(eventsListener)) {
                    if (event[0] === 'change') {
                        this.changeEventOption = event[1];
                    }
                }
            });

            return true;
        } catch (e) {
            return false;
        }
    }

    private getDefault(): string {
        try {
            const defaultTheme = this.dataSource && Array.isArray(this.dataSource.getOptions())
                ? this.dataSource?.getOptions().find(i => i.id === 'defaultTheme')?.value
                : null;

            if (typeof defaultTheme !== 'string') {
                return null;
            }

            return defaultTheme;
        } catch {
            return null;
        }
    }

    private getIsDisabled(context: 'theme' | 'images'): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const disabled = options.find(i => i.id === 'disabled')?.value;

            if (typeof disabled !== 'object' &&
                !disabled &&
                disabled[context] === undefined) {
                return false;
            }

            this.$nextTick(() => {
                this.emitReady();
            });
            return disabled[context];
        } catch {
            return false;
        }
    }

    private getCanUnset(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return true;
            }
            const unset = options.find(i => i.id === 'canUnset')?.value;

            if (typeof unset !== 'boolean') {
                return true;
            }

            return unset;
        } catch {
            return true;
        }
    }

    private getThemeMap(): ToptionValue {
        try {
            const themesMap = this.dataSource?.getOptions()
                .find(i => i.id === 'themesMap')
                .value;

            if (themesMap === null || themesMap === undefined) {
                return {} as ToptionValue;
            }

            if ((typeof themesMap === 'boolean') ||
                Array.isArray(themesMap) ||
                typeof themesMap !== 'object' ||
                isLocalizedString(themesMap)) {
                throw new Error('Unexpected');
            }

            return themesMap;
        } catch {
            return {} as ToptionValue;
        }
    }

    private getTheme(): string[] {
        try {
            const theme = this.dataSource?.getOptions()
                .filter(i => i.id === 'selectedTheme')
                .map(i => i.value)[0][0];

            if (theme === null || theme === undefined) {
                return [];
            }

            if ((typeof theme === 'boolean') ||
                isLocalizedString(theme) ||
                (!Array.isArray(theme) &&
                    typeof theme === 'object')) {
                throw new Error('Unexpected');
            }

            return [theme];
        } catch {
            return [];
        }
    }

    private getThemes(): ToptionValue {
        try {
            return this.dataSource?.getOptions().find(i => i.id === 'themes').value;
        } catch {
            return null;
        }
    }

    private getValue(): string[] {
        return this.dataSource?.getValue() as string[];
    }

    private isRequired(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const required = options.filter(i => i.id === 'required')
                .map(i => i.value)[0];

            if (typeof required !== 'boolean') {
                return false;
            }

            this.$nextTick(() => {
                this.emitReady();
            });
            return required;
        } catch {
            return false;
        }
    }

    private isSelectable(): SelectRange {
        try {
            const selectable = this.dataSource?.getOptions()
                .filter(i => i.id === 'selectable')
                .map(i => i.value)[0];

            if (!isSelectRange(selectable)) {
                return 'none';
            }

            return selectable;
        } catch {
            return 'none';
        }
    }

    private setFiles(): void {
        if (this.crudStatus !== 'update') {
            return;
        }

        (this.$refs['image-upload'] as ImageUpload).setFiles(this.getValue());
    }

    private setThemeMap(): void {
        if (this.crudStatus !== 'update') {
            return;
        }

        (this.$refs['image-upload'] as ImageUpload).setIdMap(this.getThemeMap() as Record<string, string>);
    }
}
</script>
