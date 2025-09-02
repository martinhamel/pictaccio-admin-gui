<style>

</style>

<template>
    <div class="input-section">
        <label>
            {{ $t(`activities.shippingOptions.options.${name}`) }}
            <tooltip :sup="true" v-if="help === undefined ? true : help">
                <span class="help-text">
                    {{ $t(`activities.shippingOptions.options.${name}Explanation`) }}
                </span>
            </tooltip>
        </label>
        <dropdown v-if="type === 'dropdown'"
                  :dropdown-name="`${method}-${name}`"
                  :parent-element="'undefined'"
                  :current-selection="setDropdownValue()"
                  :select-multiple="options.multiple">
            <label v-for="option in options.dropdownOptions"
                   :key="option"
                   :value="option.id"
                   :data-value="option.value">
                {{ $t(`${options.localePath}.${option.value}`) }}
            </label>
        </dropdown>
        <span v-else class="unit-input-container">
            <input :type='type' :name='`${method}-${name}`' :value="value">
            <unit-decorator v-if="unit" :unit="$t(`generic.units.${unit}`)"/>
        </span>
    </div>
</template>

<script lang="ts">
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import TimelineForm from '@pictaccio/admin-gui/src/views/components/widgets/TimelineForm.vue';
import UnitDecorator from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecorator.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import { camelize } from 'lib/loufairy';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'MethodOptionInputField',
    components: {
        TimelineForm,
        Tooltip,
        UnitDecorator,
        Dropdown
    }
})
export default class MethodOptionInputField extends CrudComponents {
    @Prop
    private fieldName: string;
    @Prop
    private name: string;
    @Prop
    private type: string;
    @Prop
    private method: string;
    @Prop
    private unit: string;
    @Prop
    private help: boolean;
    @Prop
    private value: string | number | string[];
    @Prop
    private options: Record<string, any>;

    /* PRIVATE */
    private setDropdownValue(): string[] {
        if (this.value === undefined && this.options.default === undefined) {
            return [];
        }

        if (this.value === undefined && this.options.default !== undefined) {
            if (Array.isArray(this.options.default)) {
                return this.options.default;
            } else {
                return [this.options.default];
            }
        }

        if (typeof this.value === 'string' || typeof this.value === 'number') {
            return [this.value.toString()];
        }

        if (Array.isArray(this.value)) {
            return this.value.map(v => v.toString());
        }

        return [];
    }
}

</script>
