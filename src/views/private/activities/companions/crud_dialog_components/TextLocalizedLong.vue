<style></style>

<template>
    <template v-for="lang in this.$store.getters['StoreConfig/languagesList']" :key="lang.locale">
        <textarea v-if="visible"
                  type="text"
                  :style="{ order: lang.order }"
                  :placeholder="$t(`langName.${lang.locale}`)"
                  :name="`${prop}_${lang.locale}`"
                  :id="fieldName"
                  :data-locale="lang.locale"
                  :required="getRequired()"
                  :autofocus="focused === 1"
                  :value="getValue(lang.locale)"
                  @blur="textLocalizedLongBlur"/>
    </template>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Text localized long',
    components: {
        FontAwesomeIcon
    }
})
export default class TextLocalizedLong<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private focused: number;
    private crudStatus: CRUDStatus;
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: LocalizedString = { fr: null, en: null };

    private memory: any = {};

    /* LIFECYCLE */
    public update(state: UpdateState<Tmodel>): void {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.focused = parseInt(state.itemHeader.order, 10);
        this.$nextTick(() => {
            this.visible = true;
        });
    }

    /* EVENT HANDLER */
    private async textLocalizedLongBlur(event): Promise<void> {
        this.memory[event.target.getAttribute('data-locale')] = event.target.value;
        if (!this.dataSource?.getValue()) {
            return;
        }
        if (event.target.value === this.dataSource?.getValue()[event.target.getAttribute('data-locale')]) {
            this.valueOverride[event.target.getAttribute('data-locale')] = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride[event.target.getAttribute('data-locale')] = event.target.value;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }
    }

    /* PRIVATE */
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

    private getValue(locale: string): string {
        if (this.memory[locale]) {
            return this.memory[locale];
        }

        return this.valueOverride[locale] === null
            ? this.dataSource?.getValue()
                ? this.dataSource?.getValue()[locale]
                : ''
            : this.valueOverride[locale];
    }
}
</script>
