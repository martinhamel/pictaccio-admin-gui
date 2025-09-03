<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.pane-status {
    --border-size: 0.3rem;
    --color-pane-status: transparent;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    border: var(--border-size) solid var(--color-pane-status);
    font-size: 2rem;

    .pane-main.activated & {
        &::after,
        &::before {
            content: "";
            background: linear-gradient(to bottom, transparent, var(--color-background-pane-2) 95%);
            position: absolute;
            inset: calc(-1 * var(--border-size));
        }

        &::after {
            left: unset;
            width: var(--border-size);
        }

        &::before {
            right: unset;
            width: var(--border-size);
        }
    }

    &.active {
        --color-pane-status: var(--color-semantic-success);
    }

    &.inactive {
        --color-pane-status: transparent;
    }

    &.error {
        --color-pane-status: var(--color-semantic-error);
    }

    &.warning {
        --color-pane-status: var(--color-semantic-warning);
    }

    .icon {
        position: absolute;
        inset: 0 0 auto auto;
        padding: 0.3rem 0.3rem 0.2rem 0.5rem;
        background-color: var(--color-pane-status);
        border-radius: 0 $ruler-border-radius 0 $ruler-border-radius;

        &:has(.fa-circle-info) {
            opacity: 0;
        }
    }
}

.pane-visual {
    grid-area: image;
    height: 3rem;
    margin-left: auto;
    margin-right: 2rem;

    img {
        height: 100%;
        width: auto;
    }
}

.pane-title.h5 {
    grid-area: title;
    text-align: left;
}

.pane-app-type {
    grid-area: type;
}

.pane-description {
    grid-area: description;
}

.toggle-app-activation {
    margin-right: auto;

    &:not(.disable) {
        &.btn-quaternary:hover {
            background-color: var(--color-button-background-primary);
        }

        &.btn-primary:hover {
            color: var(--color-semantic-destructive);
        }
    }
}

.pane-sub-form {
    grid-column: auto / span 4;

    label {
        margin: 0;

        &:not(:first-child) {
            margin-top: $grid-gap;
        }
    }
}

.overlay-info {
    grid-column: auto / span 4 !important;
}
</style>

<template>
    <div class="activity-control table-holder">
        <h2 class="h5">{{ $t(`activities.appIntegration.title`) }}</h2>
        <information-box :colors="{ border: 'var(--color-semantic-info)' }">
            <span>{{ $t(`activities.appIntegration.description`) }}</span>
        </information-box>
    </div>
    <pane-container ref="app-integrations-pane"
                    :imagedPane="true"
                    :pane-control-defaults="true"
                    @manage-click="manageClick"
                    @update-click="updateClick">
        <template #paneCanadaPost>
            <main>
                <i v-if="rendered"
                   class="pane-status"
                   :class="appStatus('canada-post')">
                    <span class="icon">
                        <font-awesome-icon :icon="['fal', appStatusIcon('canada-post')]"/>
                    </span>
                </i>
                <div class="pane-visual">
                    <img src="../../../assets/cpc-postmark.svg"
                         :alt="$t(`activities.appIntegration.canadaPost.title`)">
                </div>
                <h2 class="h5 pane-title">{{ $t(`activities.appIntegration.canadaPost.title`) }}</h2>
                <h4 class="h6 pane-app-type">
                    <span class="text-small">
                        {{ $t(`activities.appIntegration.appType.shipping`) }}
                    </span>
                </h4>
                <p class="pane-description">{{ $t(`activities.appIntegration.canadaPost.description`) }}</p>
            </main>
            <sub>
                <form ref="app-canada-post-form" class="app-canada-post-form pane-sub-form" prevent-submit="true">
                    <label for="canada-post-api-key">
                        {{ $t(`activities.appIntegration.canadaPost.api.username`) }}
                    </label>
                    <input type="text"
                           name="api-key"
                           id="canada-post-api-key"
                           :value="$store.getters['AppIntegration/appIntegrations']['canada-post']?.username"
                           required>
                    <label for="canada-post-api-password">
                        {{ $t(`activities.appIntegration.canadaPost.api.password`) }}
                    </label>
                    <input type="password"
                           name="api-password"
                           id="canada-post-api-password"
                           :value="$store.getters['AppIntegration/appIntegrations']['canada-post']?.password"
                           required>
                    <label for="canada-post-api-client-id">
                        {{ $t(`activities.appIntegration.canadaPost.api.customerNumber`) }}
                    </label>
                    <input type="text"
                           name="api-client-id"
                           id="canada-post-api-client-id"
                           :value="$store.getters['AppIntegration/appIntegrations']['canada-post']?.customerId"
                           required>
                    <label>
                        <input type="checkbox"
                               name="active"
                               :checked="$store.getters['AppIntegration/appIntegrations']['canada-post']?.active">
                        {{ $t('generic.ui.activate')}}
                    </label>
                </form>
                <div class="overlay-info">
                    <p>{{ $t(`activities.appIntegration.canadaPost.infos.notice`) }}</p>
                    {{ $t(`activities.appIntegration.canadaPost.infos.explanation`) }}
                </div>
            </sub>
            <controls>
            </controls>
        </template>
        <template #paneStripe>
            <main>
                <i v-if="rendered"
                   class="pane-status"
                   :class="appStatus('stripe')">
                    <span class="icon">
                        <font-awesome-icon :icon="['fal', appStatusIcon('stripe')]"/>
                    </span>
                </i>
                <div class="pane-visual">
                    <img src="../../../assets/stripe-logo.svg" alt="Logo Stripe">
                </div>
                <h2 class="h5 pane-title">{{ $t(`activities.appIntegration.stripe.title`) }}</h2>
                <h4 class="h6 pane-app-type">
                    <span class="text-small">
                        {{ $t(`activities.appIntegration.appType.paymentProcessor`) }}
                    </span>
                </h4>
                <p class="pane-description">{{ $t(`activities.appIntegration.stripe.description`) }}</p>
            </main>
            <sub>
                <form ref="app-stripe-form" class="app-stripe-form pane-sub-form" prevent-submit="true">
                    <label for="stripe-publishable-key">
                        {{ $t(`activities.appIntegration.stripe.api.publishableKey`) }}
                    </label>
                    <input type="text"
                           name="stripe-publishable-key"
                           id="stripe-publishable-key"
                           :value="$store.getters['AppIntegration/appIntegrations']?.stripe?.publishableKey"
                           required>
                    <label for="stripe-secret-key">
                        {{ $t(`activities.appIntegration.stripe.api.secretKey`) }}
                    </label>
                    <input type="text"
                           name="stripe-secret-key"
                           id="stripe-secret-key"
                           :value="$store.getters['AppIntegration/appIntegrations']?.stripe?.secretKey"
                           required>
                    <label>
                        <input type="checkbox"
                               name="active"
                               :checked="$store.getters['AppIntegration/appIntegrations']?.stripe?.active">
                        {{ $t('generic.ui.activate')}}
                    </label>
                </form>
                <div class="overlay-info">
                    <p>{{ $t(`activities.appIntegration.stripe.infos.notice`) }}</p>
                    {{ $t(`activities.appIntegration.stripe.infos.explanation`) }}
                </div>
            </sub>
        </template>
        <template #paneElavon>
            <main>
                <i v-if="rendered"
                   class="pane-status"
                   :class="appStatus('elavon')">
                    <span class="icon">
                        <font-awesome-icon :icon="['fal', appStatusIcon('elavon')]"/>
                    </span>
                </i>
                <div class="pane-visual">
                    <img src="../../../assets/elavon-logo.svg" alt="Logo Elavon">
                </div>
                <h2 class="h5 pane-title">{{ $t(`activities.appIntegration.elavon.title`) }}</h2>
                <h4 class="h6 pane-app-type">
                    <span class="text-small">
                        {{ $t(`activities.appIntegration.appType.paymentProcessor`) }}
                    </span>
                </h4>
                <p class="pane-description">{{ $t(`activities.appIntegration.elavon.description`) }}</p>
            </main>
            <sub>
                <form ref="app-elavon-form" class="app-elavon-form pane-sub-form" prevent-submit="true">
                    <label for="elavon-merchant-id">
                        {{ $t(`activities.appIntegration.general.merchantId`) }}
                    </label>
                    <input type="text"
                           name="merchant-id"
                           id="elavon-merchant-id"
                           :value="$store.getters['AppIntegration/appIntegrations']?.elavon?.merchantId"
                           required>
                    <label for="elavon-user-id">
                        {{ $t(`activities.appIntegration.general.userId`) }}
                    </label>
                    <input type="text"
                           name="user-id"
                           id="elavon-user-id"
                           :value="$store.getters['AppIntegration/appIntegrations']?.elavon?.userId"
                           required>
                    <label for="elavon-pin">
                        {{ $t(`activities.appIntegration.general.pin`) }}
                    </label>
                    <input type="text"
                           name="pin"
                           id="elavon-pin"
                           :value="$store.getters['AppIntegration/appIntegrations']?.elavon?.pin"
                           required>
                    <label>
                        <input type="checkbox"
                               name="active"
                               :checked="$store.getters['AppIntegration/appIntegrations']?.elavon?.active">
                        {{ $t('generic.ui.activate')}}
                    </label>
                </form>
                <div class="overlay-info">
                    <p>{{ $t(`activities.appIntegration.elavon.infos.notice`) }}</p>
                    {{ $t(`activities.appIntegration.elavon.infos.explanation`) }}
                </div>
            </sub>
            <controls>
            </controls>
        </template>
        <template #panePaypal>
            <main>
                <i v-if="rendered"
                   class="pane-status"
                   :class="appStatus('paypal')">
                    <span class="icon">
                        <font-awesome-icon :icon="['fal', appStatusIcon('paypal')]"/>
                    </span>
                </i>
                <div class="pane-visual">
                    <img src="../../../assets/paypal-logo.svg" alt="Logo Paypal">
                </div>
                <h2 class="h5 pane-title">{{ $t(`activities.appIntegration.paypal.title`) }}</h2>
                <h4 class="h6 pane-app-type">
                    <span class="text-small">
                        {{ $t(`activities.appIntegration.appType.paymentProcessor`) }}
                    </span>
                </h4>
                <p class="pane-description">{{ $t(`activities.appIntegration.paypal.description`) }}</p>
            </main>
            <sub>
                <form ref="app-paypal-form" class="app-paypal-form pane-sub-form" prevent-submit="true">
                    <label for="paypal-username">
                        {{ $t(`activities.appIntegration.general.username`) }}
                    </label>
                    <input type="text"
                           name="username"
                           id="paypal-username"
                           :value="$store.getters['AppIntegration/appIntegrations']?.paypal?.username"
                           required>
                    <label for="paypal-api-password">
                        {{ $t(`activities.appIntegration.general.apiPassword`) }}
                    </label>
                    <input type="password"
                           name="api-password"
                           id="paypal-api-password"
                           :value="$store.getters['AppIntegration/appIntegrations']?.paypal?.password"
                           required>
                    <label for="paypal-api-signature">
                        {{ $t(`activities.appIntegration.general.signature`) }}
                    </label>
                    <input type="text"
                           name="api-signature"
                           id="paypal-api-signature"
                           :value="$store.getters['AppIntegration/appIntegrations']?.paypal?.signature"
                           required>
                    <label>
                        <input type="checkbox"
                               name="active"
                               :checked="$store.getters['AppIntegration/appIntegrations']?.paypal?.active">
                        {{ $t('generic.ui.activate')}}
                    </label>
                    <template v-if="environment.features._appIntegrationsPaypalSandboxEndpoint">
                        <label>
                            <input type="checkbox"
                                   name="endpoint"
                                   id="paypal-endpoint"
                                   :checked="$store.getters['AppIntegration/appIntegrations']
                                   ?.paypal?.endpoint === 'debug'">
                            {{ $t(`activities.appIntegration.general.debug`) }}
                        </label>
                    </template>
                </form>
                <div class="overlay-info">
                    <p>{{ $t(`activities.appIntegration.paypal.infos.notice`) }}</p>
                    {{ $t(`activities.appIntegration.paypal.infos.explanation`) }}
                </div>
            </sub>
            <controls>
            </controls>
        </template>
    </pane-container>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createValidator, getFormInputValues } from '@loufa/loufairy-client';
import { environment } from '@pictaccio/admin-gui/environment';
import { NotAuthenticatedError } from '@pictaccio/admin-gui/errors/not_authenticated_error';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import PaneContainer from '@pictaccio/admin-gui/views/components/PaneContainer.vue';
import InformationBox from '@pictaccio/admin-gui/views/components/widgets/InformationBox.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import TutorialOverlay from '@pictaccio/admin-gui/views/private/activities/companions/TutorialOverlay.vue';
import TutorialText from '@pictaccio/admin-gui/views/private/activities/companions/TutorialText.vue';
import { AppIntegrationApp } from '@pictaccio/shared/types/app_integration_app';
import { AppIntegrationCategories } from '@pictaccio/shared/types/app_integration_categories';
import {
    AppIntegrationConfigurationCanadaPost,
    AppIntegrationConfigurationElavon,
    AppIntegrationConfigurationPaypal, AppIntegrationConfigurations, AppIntegrationSharedConfiguration
} from '@pictaccio/shared/types/app_integration_configuration';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'App Integration',
    components: {
        InformationBox,
        Tooltip,
        TutorialText,
        TutorialOverlay,
        FontAwesomeIcon,
        PaneContainer,
        DocsLink
    }
})
export default class AppIntegration extends AdminActivities {
    private activeCCProcessor: AppIntegrationApp | null = null;
    private environment = environment;
    private rendered = true;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        try {
            await this.$store.dispatch('AppIntegration/loadAppIntegrations');
        } catch (error) {
            if (!(error instanceof NotAuthenticatedError)) {
                globalToast(this.$t('messages.loadError'), 'error');
            }
            return;
        }
        this.activeCCProcessor = this.getActiveCCProcessor();
    }

    /* EVENT HANDLERS */
    private async manageClick(): Promise<void> {
        await this.$store.dispatch('AppIntegration/createAppIntegrations');
    }

    private updateClick(activePane: string): void {
        switch (activePane) {
        case 'paneCanadaPost':
            this.updateCanadaPost();
            break;

        case 'paneElavon':
            this.updateElavon();
            break;

        case 'panePaypal':
            this.updatePaypal();
            break;

        case 'paneStripe':
            this.updateStripe();
            break;
        }
    }

    /* PRIVATE */
    private appStatus(app: string): string {
        if (this.$store.getters['AppIntegration/appIntegrations']?.[app]?.active) {
            return 'active';
        } else {
            return 'inactive';
        }
    }

    private appStatusIcon(app: string): string {
        if (this.$store.getters['AppIntegration/appIntegrations']?.[app]?.active) {
            return 'check-circle';
        } else {
            return 'info-circle';
        }
    }

    private async checkForUniqueCCProcessor(app: AppIntegrationApp): Promise<boolean> {
        if (app === this.activeCCProcessor ||
            this.activeCCProcessor === null ||
            AppIntegrationCategories[app] !== 'cc-payment-processor') {
            return false;
        }

        if (await globalPrompt({
            title: this.$t('messages.uniqueCCPaymentProcessorErrorTitle'),
            message: this.$t('messages.uniqueCCPaymentProcessorErrorMessage', {
                app: this.$t(`activities.appIntegration.apps.${this.activeCCProcessor}`),
                newApp: this.$t(`activities.appIntegration.apps.${app}`)
            }),
            buttonType: 'yes-no',
            icon: ['fal', 'exclamation-triangle']
        }) === 'yes') {
            const app = this.$store.getters['AppIntegration/appIntegrations'][this.activeCCProcessor];

            app.active = false;
            try {
                await this.$store.dispatch('AppIntegration/setAppIntegration', {
                    app: this.activeCCProcessor,
                    configuration: app
                });
                await this.$store.dispatch('AppIntegration/commitAppIntegrations');
                globalToast(this.$t('messages.saveSuccess'), 'success');
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }

            return false;
        }

        return true;
    }

    private getActiveCCProcessor(): AppIntegrationApp | null {
        const apps: AppIntegrationConfigurations = this.$store.getters['AppIntegration/appIntegrations'];
        const activeCCApp = Object.entries(apps)
            .find(([name, app]) =>
                app.active && AppIntegrationCategories[name] === 'cc-payment-processor');

        return activeCCApp
            ? activeCCApp[0] as AppIntegrationApp
            : null;
    }

    private async updateCanadaPost(): Promise<void> {
        const validator = createValidator(this.$refs['app-canada-post-form'] as Element);

        if (validator.validate()) {
            const fields = getFormInputValues(this.$refs['app-canada-post-form'] as HTMLElement);
            const canadaPost: AppIntegrationConfigurationCanadaPost = {
                username: fields['api-key'],
                password: fields['api-password'],
                customerId: fields['api-client-id'],
                active: fields['active']
            };

            await this.$store.dispatch('AppIntegration/setAppIntegration', {
                app: 'canada-post',
                configuration: canadaPost
            });

            try {
                await this.$store.dispatch('AppIntegration/commitAppIntegrations');
                globalToast(this.$t('messages.saveSuccess'), 'success');
                (this.$refs['app-integrations-pane'] as PaneContainer).close();
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        }

        await this.shippingMethodUpdated();
    }

    private async updateElavon(): Promise<void> {
        const validator = createValidator(this.$refs['app-elavon-form'] as Element);

        if (validator.validate()) {
            const fields = getFormInputValues(this.$refs['app-elavon-form'] as HTMLElement);
            const elavon: AppIntegrationConfigurationElavon = {
                userId: fields['user-id'],
                pin: fields['pin'],
                merchantId: fields['merchant-id'],
                active: fields['active']
            };

            if (await this.checkForUniqueCCProcessor('elavon')) {
                return;
            }

            await this.$store.dispatch('AppIntegration/setAppIntegration', {
                app: 'elavon',
                configuration: elavon
            });

            try {
                await this.$store.dispatch('AppIntegration/commitAppIntegrations');
                await this.$store.dispatch('StoreStatus/checkStoreConfigured');
                globalToast(this.$t('messages.saveSuccess'), 'success');
                (this.$refs['app-integrations-pane'] as PaneContainer).close();
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        }

        this.updateRendered();
    }

    private async updatePaypal(): Promise<void> {
        const validator = createValidator(this.$refs['app-paypal-form'] as Element);

        if (validator.validate()) {
            const fields = getFormInputValues(this.$refs['app-paypal-form'] as HTMLElement);
            const paypal: AppIntegrationConfigurationPaypal = {
                username: fields['username'],
                password: fields['api-password'],
                signature: fields['api-signature'],
                endpoint: fields['endpoint'] ? 'debug' : 'production',
                active: fields['active']
            };

            await this.$store.dispatch('AppIntegration/setAppIntegration', {
                app: 'paypal',
                configuration: paypal
            });

            try {
                await this.$store.dispatch('AppIntegration/commitAppIntegrations');
                await this.$store.dispatch('StoreStatus/checkStoreConfigured');
                globalToast(this.$t('messages.saveSuccess'), 'success');
                (this.$refs['app-integrations-pane'] as PaneContainer).close();
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        }

        this.updateRendered();
    }

    private async updateStripe(): Promise<void> {
        const validator = createValidator(this.$refs['app-stripe-form'] as Element);

        if (validator.validate()) {
            const fields = getFormInputValues(this.$refs['app-stripe-form'] as HTMLElement);
            const stripe = {
                publishableKey: fields['stripe-publishable-key'],
                secretKey: fields['stripe-secret-key'],
                active: fields['active']
            };

            if (await this.checkForUniqueCCProcessor('stripe')) {
                return;
            }

            await this.$store.dispatch('AppIntegration/setAppIntegration', {
                app: 'stripe',
                configuration: stripe
            });

            try {
                await this.$store.dispatch('AppIntegration/commitAppIntegrations');
                await this.$store.dispatch('StoreStatus/checkStoreConfigured');
                globalToast(this.$t('messages.saveSuccess'), 'success');
                (this.$refs['app-integrations-pane'] as PaneContainer).close();
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        }

        this.updateRendered();
    }

    private async shippingMethodUpdated(): Promise<void> {
        await this.$store.dispatch('ShippingMethodsReader/shippingMethodsRead', true);
        this.updateRendered();
    }

    private updateRendered(): void {
        this.rendered = false;
        this.$nextTick(() => {
            this.rendered = true;
        });
    }
}
</script>
