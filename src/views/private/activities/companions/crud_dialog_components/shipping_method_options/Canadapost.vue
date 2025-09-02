<style scoped lang="scss">

</style>

<template>
    <div class="method-option-container">
        <method-option-input-field
            v-for="obj in this.fields"
            :method="'canada-post'"
            :type="obj.type"
            :name="obj.name"
            :unit="obj.unit"
            :help="obj.help"
            :key="obj"
            :options="obj.option"
            :value="validateValue(internalValues?.info, obj.name)">
        </method-option-input-field>
    </div>
</template>

<script lang="ts">
import { DeliveryOptionExtra } from '@pictaccio/admin-gui/src/models/db_delivery_option';
import MethodOptionInputField
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/MethodOptionInputField.vue';
import ShippingMethod
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/shipping_method_options/shipping_method';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Canada Post',
    components: {
        MethodOptionInputField,
        FontAwesomeIcon
    }
})
export default class CanadaPost extends ShippingMethod {
    @Prop
    private internalValues: DeliveryOptionExtra;
    private fields = [
        { type: 'text', name: 'originPostalCode', unit: null, help: false },
        {
            type: 'dropdown',
            name: 'productCode',
            dropdownName: 'productCode',
            option: {
                dropdownOptions: [
                    { id: 'DOM.XP', value: 'xpressPost' },
                    { id: 'DOM.RP', value: 'regular' },
                    { id: 'DOM.PC', value: 'priority' },
                    { id: 'DOM.EP', value: 'expedited' }
                ],
                localePath: 'activities.shippingOptions.options.canadaPost',
                default: ['DOM.XP']
            },
            unit: null
        },
        { type: 'number', name: 'parcelThreshold', unit: 'grams' },
        { type: 'number', name: 'envelopePrice', unit: 'dollar' },
        { type: 'number', name: 'envelopeEta', unit: 'days' }
    ];
}
</script>

