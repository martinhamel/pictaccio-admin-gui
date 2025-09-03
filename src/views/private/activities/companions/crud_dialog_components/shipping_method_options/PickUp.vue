<style scoped lang="scss">

</style>

<template>
    <div class="method-option-container">
        <method-option-input-field
            v-for="obj in this.fields"
            method="pick-up"
            :type="obj.type"
            :name="obj.name"
            :unit="obj.unit"
            :help="obj.help"
            :key="obj"
            :value="validateValue(internalValues?.info, obj.name)"
            :options="obj.options">
        </method-option-input-field>
    </div>
</template>

<script lang="ts">
import { DAYS_OF_WEEK, DAYS_OF_WEEK_LOCALE_PATH } from '@pictaccio/admin-gui/core/days_of_week';
import { DeliveryOptionExtra } from '@pictaccio/admin-gui/models/db_delivery_option';
import MethodOptionInputField
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/MethodOptionInputField.vue';
import ShippingMethod
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/shipping_method_options/shipping_method';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Pick Up',
    components: {
        MethodOptionInputField,
        FontAwesomeIcon
    }
})
export default class PickUp extends ShippingMethod {
    @Prop
    private internalValues: DeliveryOptionExtra;
    private daysAvailableOptions = {
        multiple: true,
        dropdownOptions: DAYS_OF_WEEK,
        localePath: DAYS_OF_WEEK_LOCALE_PATH,
        default: ['1', '2', '3', '4', '5']
    }
    private fields = [
        { type: 'dropdown', name: 'daysAvailable', options: this.daysAvailableOptions, unit: null, help: false },
        { type: 'text', name: 'contactPhone', unit: null, help: false },
        { type: 'text', name: 'contactAddress', unit: null, help: false }
    ];
}
</script>

