<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

$color-highlights:
    hsl(330, 65%, 59%),
    hsl(260, 76%, 75%),
    hsl(206, 86%, 57%),
    hsl(182, 86%, 48%),
    hsl(160, 86%, 57%),
    hsl(121, 77%, 63%),
    hsl(40, 86%, 52%),
    hsl(17, 86%, 60%);

.step-interface {
    display: grid;
    width: 100%;
    max-width: 120rem;
    margin-inline: auto;
    min-height: var(--boxes-min-height);
    max-height: calc(var(--boxes-max-height) + 3.3rem);

    &.one-col {
        grid-template-columns: 1fr;
    }

    label {
        --font-weight: 400 !important;
    }
}

.copy-box {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 1rem;
    max-height: var(--boxes-max-height);

    > .btn {
        align-self: flex-end;
    }

    :deep(.option-highlighter) {
        font-weight: 700;
        @each $color-highlight in $color-highlights {
            $index: index($color-highlights, $color-highlight);
            span:nth-child(#{length($color-highlights)}n - #{$index - 1}) {
                color: $color-highlight;
            }
        }
    }
}

.establishment-creation-box {
    $vertical-offset: 1.5rem;
    order: 9;
    grid-column: 1 / -1;
    position: relative;
    padding: 0 1rem;
    margin-top: $vertical-offset;
    opacity: 0.5;
    border-radius: $ruler-border-radius;
    pointer-events: none;

    &.active {
        opacity: 1;
        pointer-events: all;
    }

    > .h5 {
        --font-weight: 400 !important;
    }

    [data-theme-type="block"][data-theme-color="dark"] & {
        border: 2px solid var(--color-mix-5-6-step-3);
    }
    [data-theme-type="block"][data-theme-color="light"] & {
        border: 2px solid var(--color-mix-7-5-step-2);
    }

    [data-theme-type="line"][data-theme-color="dark"] & {
        border: 2px solid var(--color-background-page-1);
    }
    [data-theme-type="line"][data-theme-color="light"] & {
        border: 2px solid var(--color-mix-7-5-step-2);
    }

    &.active {
        opacity: 1;
        pointer-events: all;
    }

    > .h5 {
        position: absolute;
        top: -$vertical-offset;
        left: 2rem;
        padding: 0 1rem 0 3rem !important;
        width: min-content !important;
        margin: 0 !important;
        white-space: nowrap;

        [data-theme-type="block"][data-theme-color="dark"] & {
            background-color: var(--color-background-page-2);
        }
        [data-theme-type="block"][data-theme-color="light"] & {
            background-color: var(--color-background-page-1);
        }

        [data-theme-type="line"] & {
            background-color: var(--color-background-page-2);
        }
    }
}

.copy-form {
    background-color: var(--color-background-page-2);
    padding: 1.5rem;
    border-radius: $ruler-border-radius;
}

.copy-finish-btn {
    justify-self: self-end;
}
</style>

<template>
    <div class="step-interface" ref="input-container" :class="!showEstablishmentOption ? 'one-col' : ''">
        <list-shipping-group ref="list-shipping-group" @shipping-group-selected-to-copy="shippingGroupSelected"/>
        <form v-show="showEstablishmentOption"
              ref="copy-form"
              action=""
              prevent-submit="true"
              class="copy-form"
              @submit="formSubmit">
            <div class="copy-box">
                <p v-if="shippingGroupToCopy !== null"
                   v-html="$t('activities.createSession.shippingSection.copyLabel', {
                        group: shippingGroupToCopy.value,
                        items: getGroupOptions(),
                        name: generateShippingGroupName()
                    })">
                </p>
                <timeline-form ref="timeline-form"
                               :activity="'shippingOptions'"
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
                               :dates="timelineDates">
                    <template #establishment-date-increase-fields>
                        <div>
                            <label>
                                {{ $t(`activities.shippingOptions.options.lateFees`) }}
                                <tooltip :sup="true">
                                    <span class="help-text">
                                        {{ $t(`activities.shippingOptions.options.lateFeesExplanation`) }}
                                    </span>
                                </tooltip>
                            </label>
                            <span class="unit-input-container">
                                <input type="text" name="establishment-increaseFees">
                                <unit-decorator :unit="$t(`generic.units.dollar`)"/>
                            </span>
                        </div>
                    </template>
                </timeline-form>
                <confirmation-button ref="copy-finish-btn"
                                     class="copy-finish-btn"
                                     @click="confirmShippingGroupCopyClick">
                    {{ $t('activities.createSession.shippingSection.finishCopy') }}
                </confirmation-button>
            </div>
        </form>
    </div>
    <div class="overlay-ui">
        <button class="btn btn-primary back"
                @click="createSessionsStepSwitch('shipping-section', 'product-section')">
            {{ $t('generic.ui.back') }}
        </button>
        <button class="btn btn-primary next"
                @click="nextClick">
            {{ $t('generic.ui.next') }}
        </button>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { generateIterativeName } from '@loufa/loufairy';
import { getFormInputValues } from '@loufa/loufairy-client';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/src/models/db_delivery_group';
import { DbDeliveryOption } from '@pictaccio/admin-gui/src/models/db_delivery_option';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ConfirmationButton from '@pictaccio/admin-gui/src/views/components/widgets/ConfirmationButton.vue';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import ListSelector from '@pictaccio/admin-gui/src/views/components/widgets/ListSelector.vue';
import TimelineForm from '@pictaccio/admin-gui/src/views/components/widgets/TimelineForm.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecorator.vue';
import Establishment
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/shipping_method_options/Establishment.vue';
import CreateSessionsSteps from '@pictaccio/admin-gui/src/views/private/activities/create_session/create_sessions_steps';
import ListShippingGroup from '@pictaccio/admin-gui/src/views/private/activities/create_session/ListShippingGroup.vue';
import { removeDiacritics } from '@pictaccio/shared/src/utils/diacritics';
import { DateTime } from 'luxon';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Products Shipping',
    components: {
        ConfirmationButton,
        TimelineForm,
        Establishment,
        UnitDecorator,
        Dropdown,
        Tooltip,
        FontAwesomeIcon,
        ListSelector,
        ListShippingGroup
    }
})
export default class ShippingSection extends CreateSessionsSteps {
    private shippingGroups = [0];
    private timelineDates = {
        'establishment-date-increase-fields': null,
        'establishment-date-expire-fields': null,
        'establishment-date-eta-fields': null
    };
    private showTimeline = false;
    private shippingGroupToCopy = null;
    private showEstablishmentOption = false;

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        const timeline = (this.$refs['timeline-form'] as TimelineForm);
        const infos = this.$store.getters['Sessions/generalInfo'];

        await this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead', true);

        timeline.setExtremityDate(
            DateTime.fromJSDate(infos.datePublish).toFormat('yyyy-LL-dd'), 'start');
        timeline.setExtremityDate(
            DateTime.fromJSDate(infos.dateExpire).toFormat('yyyy-LL-dd'), 'end');
    }

    /* EVENT HANDLERS */
    private enableEstablishmentOptionClick(): void {
        this.showTimeline = !this.showTimeline;
    }

    private formSubmit(event: MouseEvent): void {
        event.preventDefault();
    }

    private nextClick(): void {
        if (this.goToStepClick('shipping-section', 'import-subjects')) {
            const formValues = getFormInputValues(this.$refs['input-container'] as HTMLElement);

            this.$store.dispatch('Sessions/saveShippingGroups',
                formValues['shipping-groups'].map(i => parseInt(i, 10)));
        }
    }

    private async confirmShippingGroupCopyClick(): Promise<void> {
        const id = await this.copyShippingGroup(true);

        if (!id) {
            globalToast(this.$t('toastMessages.SERVER_ERROR_CREATE'), 'error');
            (this.$refs['copy-finish-btn'] as ConfirmationButton)?.setProcessing(false);
            return;
        }

        await this.$store.dispatch('ShippingGroupsReader/shippingGroupsRead', true);
        await this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead', true);

        this.$nextTick(async () => {
            await (this.$refs['list-shipping-group'] as ListShippingGroup).updateList(id, true);
            (this.$refs['copy-finish-btn'] as ConfirmationButton)?.setProcessing(false);
            this.showEstablishmentOption = false;
        });
    }

    private shippingGroupSelected(shippingGroup: number): void {
        if (!shippingGroup) {
            this.shippingGroupToCopy = null;
            this.showEstablishmentOption = false;
            return;
        }

        this.shippingGroupToCopy = this.$store.getters['ShippingGroupsReader/shippingGroups']
            .filter(group => group.id === shippingGroup)[0];
        this.showEstablishmentOption = true;

        this.$nextTick(() => {
            (this.$refs['timeline-form'] as TimelineForm).reset();
        });
    }

    /* PRIVATE */
    private async copyShippingGroup(establishment: boolean): Promise<number> {
        const groups = this.$store.getters['ShippingGroupsReader/shippingGroups'];
        const groupOptions = groups.filter(group => group.id === this.shippingGroupToCopy.id)[0]['deliveryOptions']
            .map(option => option.id);
        const infos = this.$store.getters['Sessions/generalInfo'];

        if (establishment) {
            groupOptions.push(await this.createReturnShipping());
        }

        const values: DbDeliveryGroup = {
            internal_name: removeDiacritics(this.generateShippingGroupName()),
            deliveryOptions: groupOptions
        };
        const result = await this.$store.dispatch('ShippingGroups/add', { item: values });

        return result
            ? result.createdId
            : null;
    }

    private async createReturnShipping(): Promise<number> {
        const fields = getFormInputValues(this.$refs['copy-form'] as HTMLFormElement);
        const infos = this.$store.getters['Sessions/generalInfo'];
        const prefix = 'establishment';
        const baseInfo = Object.entries(fields)
            .filter(([k, _]) => k.startsWith(prefix));

        const info = {};
        Object.fromEntries(baseInfo.map(([k, v]) => {
            if (k.endsWith('Date')) {
                info[k.slice(prefix.length + 1, k.length - 4) + 'Year'] = DateTime.fromSQL(v).year;
                info[k.slice(prefix.length + 1, k.length - 4) + 'Month'] = DateTime.fromSQL(v).month;
                info[k.slice(prefix.length + 1, k.length - 4) + 'Day'] = DateTime.fromSQL(v).day;
            }
            return [k.substring(prefix.length + 1), v];
        }));

        const general = {
            name_locale_en: this.$t('activities.createSession.shippingSection.copyOptionSuffix', 'en', {
                establishment: infos.name
            }),
            name_locale_fr: this.$t('activities.createSession.shippingSection.copyOptionSuffix', 'fr', {
                establishment: infos.name
            }),
            internal_name: removeDiacritics(this.generateShippingOptionName()),
            lead_time: 0,
            base_price: 0
        };

        const optionObj = {
            info,
            general
            // baseInfo: Object.fromEntries(baseInfo.map(([k, v]) => [k.substring(prefix.length + 1), v]))
        };
        const values: DbDeliveryOption = {
            name_locale: {
                en: general.name_locale_en,
                fr: general.name_locale_fr
            },
            internal_name: general.internal_name,
            lead_time: 0,
            base_price: 0,
            method: 'establishment',
            options: optionObj
        };
        const result = await this.$store.dispatch('ShippingOptions/add', { item: values });

        return result.createdId;
    }

    private getGroupOptions(): string {
        const infos = this.$store.getters['Sessions/generalInfo'];
        return `<span class="option-highlighter">${this.shippingGroupToCopy['deliveryOptions']
            .map(option => `<span>${option.name_locale[this.$i18n.locale]}</span>`)
            .join(', ')}, <span>(${this.$t('generic.ui.new', { gender: 'f' })}:
            ${this.generateShippingOptionName()})</span></span>`;
    }

    private generateShippingGroupName(): string {
        const name = this.$store.getters['Sessions/generalInfo'].name;
        const names = this.$store.getters['ShippingGroupsReader/shippingGroups']
            .map(group => group.value);

        return generateIterativeName(removeDiacritics(name), names, {
            firstIteration: 2
        });
    }

    private generateShippingOptionName(): string {
        const name = this.$t('activities.createSession.shippingSection.copyOptionSuffix', {
            establishment: this.$store.getters['Sessions/generalInfo'].name
        });
        const names = this.$store.getters['ShippingOptionsReader/shippingOptions']
            .map(option => option.value);

        const newName = generateIterativeName(removeDiacritics(name), names, {
            firstIteration: 2
        });

        return newName;
    }
}
</script>
