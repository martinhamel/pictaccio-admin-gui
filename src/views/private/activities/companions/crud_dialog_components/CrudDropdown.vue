<style></style>

<template>
    <dropdown v-if="visible"
              ref="dropdown"
              :dropdownName="prop"
              :placeholder="getPlaceholder()"
              :select-multiple="getCanSelectMultiple()"
              :canUnset="getCanUnset()"
              :currentSelection="getValue()"
              :parent-element="'undefined'"
              :disabled="getIsDisabled()"
              :required="getRequired()"
              :data-events="getAddEventListeners()"
              @change="validateChanges">
        <label v-for="option in getOptions()"
               :key="option"
               :value="option.id"
               :data-value="option.value">
            <span>{{ option.value }}</span>
        </label>
        <template #add-new-extended>
            <slot :name="prop"></slot>
        </template>
    </dropdown>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Crud Dropdown',
    components: {
        FontAwesomeIcon,
        Dropdown
    }
})
export default class CrudDropdown<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: string[] = null;
    private changeEventOption = null;

    public update(state: UpdateState<Tmodel>): void {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.$nextTick(() => {
            this.visible = true;
        });
    }

    /* EVENT HANDLER */
    private async validateChanges(event): Promise<void> {
        if (event.selection === this.dataSource?.getValue()) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride = event.selection;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }

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

    private getCanUnset(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return true;
            }
            const canUnset = options.filter(i => i.id === 'canUnset')
                .map(i => i.value)[0];

            if (typeof canUnset !== 'boolean') {
                return false;
            }

            return canUnset;
        } catch {
            return false;
        }
    }

    private getCanSelectMultiple(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const canSelectMultiple = options.filter(i => i.id === 'multiple')
                .map(i => i.value)[0];

            if (typeof canSelectMultiple !== 'boolean') {
                return false;
            }

            return canSelectMultiple;
        } catch {
            return false
        }
    }

    private getIsDisabled(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const isDisabled = options.filter(i => i.id === 'disabled')
                .map(i => i.value)[0];

            if (typeof isDisabled !== 'boolean') {
                return false;
            }

            return isDisabled;
        } catch {
            return false;
        }
    }

    private getOptions(): DataSourceOption<string, string>[] {
        try {
            const options = this.dataSource?.getOptions();

            if (!options) {
                return [];
            }
            const optionsList = options.filter(i => i.id === 'options')
                .map(i => i.value)[0];

            if (!Array.isArray(optionsList)) {
                return [];
            }

            return optionsList;
        } catch {
            return [];
        }
    }

    private getPlaceholder(): string {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return null;
            }
            const placeholder = options.filter(i => i.id === 'placeholder')
                .map(i => i.value)[0];

            if (typeof placeholder !== 'string') {
                return null;
            }

            return placeholder;
        } catch {
            return null;
        }
    }

    private getRequired(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const required = options.filter(i => i.id === 'required')
                .map(i => i.value)[0] || false;

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

    private getValue(): string | string[] {
        return this.valueOverride === null
            ? this.getCanSelectMultiple()
                ? this.dataSource?.getValue() as string[]
                : this.dataSource?.getValue() as string
            : this.valueOverride;
    }
}
</script>
