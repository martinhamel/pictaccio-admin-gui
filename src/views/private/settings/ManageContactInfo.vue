<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
.email-info-form,
.phone-info-form,
.update-address-form {
    grid-column: 1 / -1;
    position: relative;
    padding-bottom: 5rem;
    display: contents;

    .info-container {
        display: contents;
    }

    .btn {
        position: absolute;
        left: 50%;
        translate: -50%;
    }

    .is-toll-free {
        grid-column: 2 / -1;
        white-space: nowrap;
        padding: 1rem 1.5rem;
    }

    .address-info,
    .email-info,
    .phone-info {
        grid-column: auto / span 4;

        label {
            order: 0;
            margin: 0;
        }

        input {
            order: 1;
        }

        :deep(> div) {
            order: 2;
        }
    }

    .address-info {
        grid-column: auto / span 4;
    }

    .email-info,
    .phone-info {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: subgrid;

        label {
            grid-column: auto / span 4;
            grid-row-start: 1;
            margin: 0;
        }

        input {
            grid-column: auto / span 4;
            grid-row-start: 2;
        }
    }
}

.btn-icon {
    order: 1;
    margin: 3rem auto 0;
    padding: 0 1rem 0;
    font-size: 2rem;
}

.overlay-info {
    order: 1;
    grid-column: 1/2;
    grid-row: 1/-1;
}

:deep(p) {
    margin: 0;
}

.pane-title.h5 {
    grid-area: title;
    text-align: left;
}

.pane-description {
    grid-area: description;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        margin: 0 0 -1rem;
    }

    p:empty {
        display: none;
    }
}
</style>

<template>
    <div class="activity-control">
        <h2 class="h5">{{ $t(`activities.manageContactInfo.title`) }}</h2>
    </div>
    <information-box :colors="{ border: 'var(--color-semantic-info)' }">
        <span>{{ $t(`activities.manageContactInfo.infos.notice`) }}</span>
    </information-box>
    <pane-container ref="contact-info-pane"
                    @manage-click="manageClick"
                    @pane-cancel="paneCancel"
                    @update-click="updateClick">
        <template #pane-UpdatePhone>
            <main>
                <h2 class="h5 pane-title">{{ $t(`activities.manageContactInfo.updatePhone.title`) }}</h2>
                <div :key="phoneKey" class="pane-description">
                   <template v-for="(phone, index) in $store.getters['StoreConfig/storeConfig'].phones"
                             :key="index">
                       <label>{{ $t(`activities.manageContactInfo.updatePhone.${phone.name}`) }}</label>
                       <p v-html="phone.phone"></p>
                   </template>
                </div>
            </main>
            <sub>
                <form class="phone-info-form" prevent-submit="true">
                    <div class="info-container" ref="phone-numbers">
                        <!-- Do not place any other elements beside phone-info here,
                        as the JS code relies on that fact -->
                        <div class="phone-info" v-for="phone in $store.getters['StoreConfig/storeConfig'].phones"
                             :key="phone">
                            <label>{{ $t('generic.ui.name') }}</label>
                            <input type="text"
                                   name="phone-name"
                                   :data-phone-role="phone.name"
                                   class="pane-input disabled"
                                   disabled
                                   :value="$t(`activities.manageContactInfo.updatePhone.${phone.name}`)">
                            <label>{{ $t('generic.ui.phone') }}</label>
                            <input type="tel" name="phone-number" class="pane-input" :value="phone.phone">
                        </div>
                    </div>
<!--                    <button type="button" class="btn btn-quaternary btn-icon" @click="addPhoneNumberClick">
                        <font-awesome-icon :icon="['far', 'plus']"/>
                    </button>-->
                </form>
            </sub>
        </template>
        <!---------------------------------------------------------------------------------------------------->
        <template #pane-UpdateEmailAddress>
            <main>
                <h2 class="h5 pane-title">{{ $t(`activities.manageContactInfo.updateEmail.title`) }}</h2>
                <div class="pane-description">
                    <template  v-for="(email, index) in $store.getters['StoreConfig/storeConfig'].emailAddresses"
                               :key="index">
                        <label>{{ $t(`activities.manageContactInfo.updateEmail.${email.name}`) }}</label>
                        <p v-html="email.email"></p>
                    </template>
                </div>
            </main>
            <sub>
                <form class="email-info-form" prevent-submit="true">
                    <div class="info-container" ref="email-addresses">
                        <div class="email-info"
                             v-for="email in $store.getters['StoreConfig/storeConfig'].emailAddresses"
                             :key="email">
                            <label>{{ $t(`activities.manageContactInfo.updateEmail.${email.name}`) }}</label>
                            <input type="text"
                                   name="email-name"
                                   :data-email-role="email.name"
                                   class="pane-input disabled"
                                   :value="$t(`activities.manageContactInfo.updateEmail.${email.name}`)"
                                   disabled>
                            <label>{{ $t('generic.ui.email') }}</label>
                            <input type="email"
                                   name="email-address"
                                   class="pane-input"
                                   :value="email.email">
                        </div>
                    </div>
<!--                    <button type="button" class="btn btn-quaternary btn-icon" @click="addEmailAddressClick">
                        <font-awesome-icon :icon="['far', 'plus']"/>
                    </button>-->
                </form>
            </sub>
        </template>
        <!---------------------------------------------------------------------------------------------------->
        <template #pane-UpdateAddress>
            <main>
                <h2 class="h5 pane-title">{{ $t(`activities.manageContactInfo.updateAddress.title`) }}</h2>
                <div v-if="addressKey" class="pane-description">
                    <p>{{ $store.getters['StoreConfig/storeConfig'].address.addressLine1 }}</p>
                    <p>{{ $store.getters['StoreConfig/storeConfig'].address.addressLine2 }}</p>
                    <p>
                        {{ $store.getters['StoreConfig/storeConfig'].address.city }}
                        &nbsp;{{ $store.getters['StoreConfig/storeConfig'].address.province
                    && ($te(`generic.provinces.${$store.getters['StoreConfig/storeConfig'].address.province}`)
                        ? $t(`generic.provinces.${$store.getters['StoreConfig/storeConfig'].address.province}`)
                        : '') }}
                        <span style="text-transform: uppercase;">
                            &nbsp;{{ $store.getters['StoreConfig/storeConfig'].address.postalCode }}
                        </span>
                    </p>
                    <p style="text-transform: capitalize;">
                        {{ $store.getters['StoreConfig/storeConfig'].address.country }}
                    </p>
                </div>
            </main>
            <sub>
                <form-validator ref="form">
                    <form class="update-address-form" ref="store-address" prevent-submit="true">
                        <div class="address-info">
                            <label for="address-line1">
                                {{ $t(`activities.manageContactInfo.updateAddress.ui.addressLine1`) }}
                            </label>
                            <input type="text" name="address-line1" id="address-line1" class="pane-input"
                                   :value="$store.getters['StoreConfig/storeConfig'].address.addressLine1" required>
                        </div>
                        <div class="address-info">
                            <label for="address-line2">
                                {{ $t(`activities.manageContactInfo.updateAddress.ui.addressLine2`) }}
                            </label>
                            <input type="text" name="address-line2" id="address-line2" class="pane-input"
                                   :value="$store.getters['StoreConfig/storeConfig'].address.addressLine2">
                        </div>
                        <div class="address-info">
                            <label for="address-city">
                                {{ $t(`activities.manageContactInfo.updateAddress.ui.addressCity`) }}
                            </label>
                            <input type="text"
                                   name="address-city"
                                   id="address-city"
                                   class="pane-input"
                                   :value="$store.getters['StoreConfig/storeConfig'].address?.city"
                                   required>
                        </div>
                        <div class="address-info">
                            <label for="address-province">
                                {{ $t(`activities.manageContactInfo.updateAddress.ui.addressProvince`) }}
                            </label>
                            <state-dropdown ref="address-province"
                                            id="'address-province'"
                                            :current-selection="
                                            [$store.getters['StoreConfig/storeConfig'].address.province ?? 'qc']"/>
                        </div>
                        <div class="address-info">
                            <label for="address-postal-code">
                                {{ $t(`activities.manageContactInfo.updateAddress.ui.addressPostalCode`) }}
                            </label>
                            <input type="text"
                                   name="address-postal-code"
                                   id="address-postal-code"
                                   class="pane-input"
                                   :value="$store.getters['StoreConfig/storeConfig'].address?.postalCode"
                                   required>
                        </div>
                        <div class="address-info">
                            <label for="address-country">
                                {{ $t(`activities.manageContactInfo.updateAddress.ui.addressCountry`) }}
                            </label>
                            <select name="address-country" id="address-country" class="pane-input" required disabled>
                                <option value="canada">Canada</option> <!-- inject valid countries -->
                            </select>
                        </div>
                    </form>
                </form-validator>
            </sub>
        </template>
    </pane-container>
</template>

<script lang="ts">
import { filterThirdPartyElements } from '@pictaccio/admin-gui/src/utils/filter_trash';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import FormValidator from '@pictaccio/admin-gui/src/views/components/widgets/FormValidator.vue';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import StateDropdown from '@pictaccio/admin-gui/src/views/components/widgets/StateDropdown.vue';
import StateSelector from '@pictaccio/admin-gui/src/views/components/widgets/StateSelector.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createValidator, getFormInputValues, parseHtml } from '@loufa/loufairy-client';
import { Component } from 'vue-facing-decorator';
import { Address } from '@pictaccio/admin-gui/src/models/address';
import { NamedEmail } from '@pictaccio/admin-gui/src/models/named_email';
import { NamedPhone } from '@pictaccio/admin-gui/src/models/named_phone';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import PaneContainer from '@pictaccio/admin-gui/src/views/components/PaneContainer.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';

@Component({
    name: 'Manage Contact Info',
    components: {
        FormValidator,
        InformationBox,
        StateDropdown,
        StateSelector,
        Dropdown,
        DocsLink,
        FontAwesomeIcon,
        PaneContainer
    }
})
export default class ManageContactInfo extends AdminActivities {
    private phoneFields: Element[] = [];
    private emailFields: Element[] = [];
    private phoneKey = 0;
    private addressKey = true;

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted();
        try {
            await this.$store.dispatch('StoreConfig/loadStoreConfig');
            await this.$nextTick(() => {
                this.phoneKey += 1;
            });
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    /* EVENT HANDLERS */
    private addPhoneNumberClick(): void {
        const element = parseHtml(
            `<div ${this.$options.__scopeId} class="phone-info">` +
            `   <label ${this.$options.__scopeId}>${this.$t('generic.ui.name')}</label>` +
            `   <input ${this.$options.__scopeId} type="text" class="pane-input" name="phone-name">` +
            `   <label ${this.$options.__scopeId}>${this.$t('generic.ui.phone')}</label>` +
            `   <input ${this.$options.__scopeId} type="tel" class="pane-input" name="phone-number">` +
            '</div>'
        );

        if (Array.isArray(element)) {
            return;
        }

        this.phoneFields.push(element);
        (this.$refs['phone-numbers'] as Element).appendChild(element);
    }

    private addEmailAddressClick(): void {
        const element = parseHtml(
            `<div ${this.$options.__scopeId} class="email-info">` +
            `   <label ${this.$options.__scopeId}>${this.$t('generic.ui.name')}</label>` +
            `   <input ${this.$options.__scopeId} type="text" class="pane-input" name="email-name">` +
            `   <label ${this.$options.__scopeId}>${this.$t('generic.ui.email')}</label>` +
            `   <input ${this.$options.__scopeId} type="email" class="pane-input" name="email-address">` +
            '</div>'
        );

        if (Array.isArray(element)) {
            return;
        }

        this.emailFields.push(element);
        (this.$refs['email-addresses'] as Element).appendChild(element);
    }

    private manageClick(): void {
        this.$store.dispatch('StoreConfig/createStoreConfig');
    }

    private paneCancel(paneName: string): void {
        switch (paneName) {
        case 'pane-UpdatePhone':
            this.clearPhoneFields();
            break;
        case 'pane-UpdateEmailAddress':
            this.clearEmailFields();
            break;
        case 'pane-UpdateAddress':
            this.clearAddressFields();
            break;
        }
    }

    private updateClick(activePane: string): void {
        switch (activePane) {
        case 'pane-UpdatePhone':
            this.updatePhones();
            break;

        case 'pane-UpdateEmailAddress':
            this.updateEmails();
            break;

        case 'pane-UpdateAddress':
            this.updateStoreAddress();
            break;
        }
    }

    /* PRIVATE */
    private clearPhoneFields(): void {
        for (const element of this.phoneFields) {
            element.remove()
        }
        this.phoneFields = [];
    }

    private clearEmailFields(): void {
        for (const element of this.emailFields) {
            element.remove()
        }
        this.emailFields = [];
    }

    private clearAddressFields(): void {
        const fields = getFormInputValues(this.$refs['store-address'] as HTMLElement);
        const address = this.$store.getters['StoreConfig/storeConfig'].address;

        for (const key in fields) {
            if (fields[key] !== address[key]) {
                fields[key] = address[key];
            }
            if (key === 'address-unit') {
                (this.$refs['address-unit-dropdown'] as Dropdown).setSelection([address.unitType]);
            } else if (key === 'province-selector') {
                (this.$refs['address-province'] as StateDropdown).setSelection(address.province);
            }
        }
    }

    private async updatePhones(): Promise<void> {
        const phoneElement = this.$refs['phone-numbers'] as Element;
        const phones: NamedPhone[] = [];

        for (const child of filterThirdPartyElements(phoneElement.children)) {
            const name = (child.querySelector('[name="phone-name"]') as HTMLInputElement).dataset.phoneRole;
            const phone = (child.querySelector('[name="phone-number"]') as HTMLInputElement).value;

            if (name && phone && name !== '' && phone !== '') {
                phones.push({
                    name,
                    phone
                });
            }
        }

        await this.$store.dispatch('StoreConfig/setStoreConfig', { key: 'phones', value: phones });

        try {
            await this.$store.dispatch('StoreConfig/commitStoreConfig');
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');
            globalToast(this.$t('messages.saveSuccess'), 'success');
            (this.$refs['contact-info-pane'] as PaneContainer).close();

            for (const element of this.phoneFields) {
                element.remove()
            }
            this.phoneFields = [];
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    private async updateEmails(): Promise<void> {
        const emailElement = this.$refs['email-addresses'] as Element;
        const emails: NamedEmail[] = [];

        for (const child of filterThirdPartyElements(emailElement.children)) {
            const name = (child.querySelector('[name="email-name"]') as HTMLInputElement).dataset.emailRole;
            const email = (child.querySelector('[name="email-address"]') as HTMLInputElement).value;

            if (name && email && name !== '' && email !== '') {
                emails.push({
                    name,
                    email
                });
            }
        }

        await this.$store.dispatch('StoreConfig/setStoreConfig', { key: 'emailAddresses', value: emails });

        try {
            await this.$store.dispatch('StoreConfig/commitStoreConfig');
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');
            globalToast(this.$t('messages.saveSuccess'), 'success');
            (this.$refs['contact-info-pane'] as PaneContainer).close();

            for (const element of this.emailFields) {
                element.remove()
            }
            this.emailFields = [];
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    private async updateStoreAddress(): Promise<void> {
        const validator = createValidator(this.$refs['store-address'] as Element);

        if (validator.validate()) {
            const fields = getFormInputValues(this.$refs['store-address'] as HTMLElement);
            const address = new Address();

            address.addressLine1 = fields['address-line1'];
            address.addressLine2 = fields['address-line2'];
            address.postalCode = fields['address-postal-code'];
            address.city = fields['address-city'];
            address.province = fields['province-selector'];
            address.country = fields['address-country'];

            await this.$store.dispatch('StoreConfig/setStoreConfig', { key: 'address', value: address });

            try {
                await this.$store.dispatch('StoreConfig/commitStoreConfig');
                await this.$store.dispatch('StoreStatus/checkStoreConfigured');
                globalToast(this.$t('messages.saveSuccess'), 'success');
                this.addressKey = false;
                (this.$refs['contact-info-pane'] as PaneContainer).close();
                await this.$nextTick(() => {
                    this.addressKey = true;
                })
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        } else {
            globalToast(this.$t('messages.invalidFields'), 'warning');
        }
    }
}
</script>
