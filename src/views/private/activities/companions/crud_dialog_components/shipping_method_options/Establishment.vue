<style scoped lang="scss">

</style>

<template>
    <div class="method-option-container" ref="method-options-form">
        <timeline-form :activity="'shippingOptions'"
                       :start-date="validateDate('start')"
                       :end-date="validateDate('end')"
                       :labels="{
                            startDate: $t('activities.shippingOptions.options.publishDate'),
                            startDateHelp: $t('activities.shippingOptions.options.publishDateHelp'),
                            endDate: $t('activities.shippingOptions.options.expirationDate'),
                            endDateHelp: $t('activities.shippingOptions.options.expirationDateHelp'),
                            increaseDate: $t('activities.shippingOptions.options.increaseDate'),
                            increaseDateHelp: $t('activities.shippingOptions.options.increaseDateHelp'),
                            expireDate: $t('activities.shippingOptions.options.expireDate'),
                            expireDateHelp: $t('activities.shippingOptions.options.expireDateHelp'),
                            etaDate: $t('activities.shippingOptions.options.etaDate'),
                            etaDateHelp: $t('activities.shippingOptions.options.etaDateHelp')
                       }"
                       :prefix="'establishment'"
                       :dates="dates">
            <template #establishment-date-increase-fields>
                <div>
                    <label>
                        {{ $t(`activities.shippingOptions.options.lateFees`) }}
                        <tooltip :sup="true">
                            <span class="help-text">
                                {{ $t(`activities.shippingOptions.options.lateFeesHelp`) }}
                            </span>
                        </tooltip>
                    </label>
                    <span class="unit-input-container">
                        <input type="text"
                               ref="establishment-increasedPrice"
                               name="establishment-increasedPrice"
                               :value="validateValue(values.info, 'increasedPrice')"
                               @change="increasePriceChange">
                        <unit-decorator :unit="$t(`generic.units.dollar`)"/>
                    </span>
                </div>
            </template>
        </timeline-form>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DeliveryOptionExtra } from '@pictaccio/admin-gui/src/models/db_delivery_option';
import TimelineForm from '@pictaccio/admin-gui/src/views/components/widgets/TimelineForm.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecorator.vue';
import MethodOptionInputField
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/MethodOptionInputField.vue';
import ShippingMethod
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/shipping_method_options/shipping_method';
import { DateTime } from 'luxon';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Establishment',
    components: {
        Tooltip,
        UnitDecorator,
        TimelineForm,
        MethodOptionInputField,
        FontAwesomeIcon
    }
})
export default class Establishment extends ShippingMethod {
    @Prop
    private internalValues: DeliveryOptionExtra;
    private values = { info: {}, general: {} };
    private dates = {};

    /* LIFECYCLE */
    public beforeMount(): void {
        (this.internalValues !== null && this.internalValues.info !== null)
            ? this.values.info = this.internalValues.info
            : null;

        (this.internalValues !== null && this.internalValues.general !== null)
            ? this.values.general = this.internalValues.general
            : null;

        this.dates['establishment-date-increase-fields'] = this.validateDate('increase');
        this.dates['establishment-date-expire-fields'] = this.validateDate('expire');
        this.dates['establishment-date-eta-fields'] = this.validateDate('eta');
    }

    /* EVENT HANDLERS */
    private increasePriceChange(event: Event): void {
        this.values.info['increasedPrice'] = (event.target as HTMLInputElement).value;
    }

    /* PRIVATE */
    private validateDate(name: string): string | null {
        if (!this.values ||
            !this.values.info ||
            (!this.values.info[name + 'Year'] ||
            !this.values.info[name + 'Month'] ||
            !this.values.info[name + 'Day'])) {
            return '';
        }

        return DateTime.local(this.values.info[name + 'Year'] as number,
            this.values.info[name + 'Month'] as number,
            this.values.info[name + 'Day'] as number).toISODate();
    }
}
</script>

