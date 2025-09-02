<style lang="scss" scoped>
.theme-option {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 3rem;
    font-size: 2rem;

    label {
        font-size: inherit;
        display: block;
        margin: 0;
        padding: 0;
        order: 0;
    }

    .delete-option {
        order: 3;
    }
}

.btn {
    justify-self: flex-start;
}
</style>

<template>
    <template v-if="visible">
        <div v-for="([key, theme], index) in Object.entries(themesList)"
             :key="theme"
             class="theme-option">
            <label>{{ index + 1 }}</label>
            <input v-for="(lang, index) in $store.getters['StoreConfig/languagesList']"
                   :id="fieldName"
                   :key="lang.locale"
                   :data-locale="lang.locale"
                   :style="{order: lang.order}"
                   type="text"
                   :required="getRequired()"
                   :placeholder="$t(`langName.${lang.locale}`)"
                   :name="`${prop}_${key}_${lang.locale}`"
                   :autofocus="index === 0"
                   v-model="themesList[key][lang.locale]"
                   @keyup="validateChanges"/>
            <font-awesome-icon class="delete-option"
                               :icon="['fas', 'trash-alt']"
                               @click="deleteOptionClick(key)"/>
        </div>
        <button class="btn btn-secondary" @click="addThemeClick">{{ $t('generic.ui.add') }}</button>
    </template>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import { generateRandomId } from '@pictaccio/admin-gui/src/utils/generate_uuid';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Text localized short',
    components: {
        FontAwesomeIcon
    }
})
export default class TextLocalizedList<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private themesList: Record<string, LocalizedString> = {};
    private visible = false;
    private valueOverride: Record<string, LocalizedString> = null;

    public update(state: UpdateState<Tmodel>): void {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.themesList = this.getValue() ?? {};

        if (!this.getValue()) {
            this.$nextTick(() => {
                this.addThemeClick();
                this.addThemeClick();
            });
        }
        this.$nextTick(() => {
            this.visible = true;
        });
    }

    /* EVENT HANDLER */
    private async validateChanges(event): Promise<void> {
        if (!this.dataSource?.getValue()) {
            return;
        }
        if (event.target.value === this.dataSource?.getValue()[event.target.getAttribute('data-locale')]) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride = event.target.value;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }
    }

    private addThemeClick(): void {
        if (!Array.isArray(this.$store.getters['StoreConfig/languagesList'])) {
            return;
        }
        const id = generateRandomId();
        this.themesList[id] = Object.fromEntries(
            this.$store.getters['StoreConfig/languagesList']
                .map(i => [i.locale, ''])
        ) as LocalizedString;
    }

    private deleteOptionClick(index: string): void {
        delete this.themesList[index];
    }

    /* PRIVATE */
    private getValue(): Record<string, LocalizedString> {
        return this.valueOverride === null
            ? this.dataSource?.getValue() as Record<string, LocalizedString>
            : this.valueOverride;
    }

    private getRequired(): boolean {
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
}
</script>
