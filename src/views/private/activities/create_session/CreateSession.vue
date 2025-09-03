<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';
.h3 {
    grid-column: 1/-1;
    padding: 2rem 0 1.5rem;
}

.activity-wrapper {
    padding-inline: 3rem;
    overflow: auto;
}

.breadcrumb {
    grid-column: 1/-1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .step {
        text-align: center;
        @extend .h5;
        white-space: nowrap;
        margin: 0;
        cursor: pointer;
        height: fit-content;
        width: fit-content;

        &.current {
            color: var(--color-text-link-secondary);
            --font-weight: 600;
        }
        &:hover {
            color: var(--color-text-link-hover-secondary);
        }
        &.disabled {
            color: var(--color-text-disabled);
            cursor: default;
        }
    }
    .spacer {
        min-width: 1rem;

        @include breakpoint($small) {
            display: none;
        }

        &.disabled {
            filter: brightness(0.5);
        }
    }
}
.activity-control {
    position: absolute !important;
    inset: 15rem 3rem auto;
    width: unset !important;
    grid-template-rows: 1fr auto;

    [data-theme-type="line"] & {
        inset: 14rem 3rem auto;
        padding-top: 3rem !important;
        padding-inline: 0;
        overflow: visible;
        &::before {
            content: '';
            position: absolute;
            inset: 0 0 auto 0;
            padding-block: 0.3rem;
            border-radius: 10rem;
            background-color: var(--color-primary-4);
        }
    }
}

:deep(.overlay-ui) {
    display: flex;
    grid-column: 1/-1;
    .next {
        order: 10;
        margin-left: auto;
    }
    .back {
        order: 0;
        margin-right: auto;
    }
}
:deep(.step-interface) {
    --boxes-max-height: calc(100vh - 10.5rem - 24.25rem);
    --boxes-min-height: 39rem;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $grid-gap;

    @include breakpoint($small) {
        grid-template-columns: 1fr;
    }
}
</style>

<template>
    <section id="create-sessions" class="activity-wrapper">
        <h1 class="h3">{{ $t(`activities.createSession.title`) }}</h1>
        <div class="breadcrumb">
            <div :class="'session-info' === currentStep ? 'current' : ''" class="step"
                 @click="switchCurrentStep('session-info')">
                {{ $t(`activities.createSession.breadcrumb.sessionInfo`) }}
            </div>
            <div :class="[!allowedSteps.includes('options-selection') ? 'disabled' : '']" class="spacer">
                <hr>
            </div>
            <div :class="['product-section' === currentStep ? 'current' : '',
            !allowedSteps.includes('product-section') ? 'disabled' : '']" class="step"
                 @click="switchCurrentStep('product-section')">
                <disabled-tooltip :tooltipVisible="!allowedSteps.includes('product-section')"
                v-if="showTab">
                {{ $t(`activities.createSession.breadcrumb.productSection`) }}
                </disabled-tooltip>
            </div>
            <div :class="[!allowedSteps.includes('products-shipping') ? 'disabled' : '']" class="spacer">
                <hr>
            </div>
            <div :class="['shipping-section' === currentStep ? 'current' : '',
            !allowedSteps.includes('shipping-section') ? 'disabled' : '']" class="step"
                 @click="switchCurrentStep('shipping-section')">
                <disabled-tooltip :tooltipVisible="!allowedSteps.includes('shipping-section')">
                {{ $t(`activities.createSession.breadcrumb.shippingSection`) }}
                </disabled-tooltip>
            </div>
            <div :class="[!allowedSteps.includes('import-subjects') ? 'disabled' : '']" class="spacer">
                <hr>
            </div>
            <div :class="['import-subjects' === currentStep ? 'current' : '',
            !allowedSteps.includes('import-subjects') ? 'disabled' : '']" class="step"
                 @click="switchCurrentStep('import-subjects')">
                <disabled-tooltip :tooltipVisible="!allowedSteps.includes('import-subjects')">
                {{ $t(`activities.createSession.breadcrumb.subjects`) }}
                </disabled-tooltip>
            </div>
            <div :class="[!allowedSteps.includes('import-subjects') ? 'disabled' : '']" class="spacer">
                <hr>
            </div>
            <div :class="['photos' === currentStep ? 'current' : '',
            !allowedSteps.includes('photos') ? 'disabled' : '']" class="step"
                 @click="switchCurrentStep('photos')">
                <disabled-tooltip :tooltipVisible="!allowedSteps.includes('photos')">
                {{ $t(`activities.createSession.breadcrumb.photos`) }}
                </disabled-tooltip>
            </div>
        </div>
        <div class="activity-control">
            <keep-alive>
                <component @go-to-step="goToStepClick" @step-allowed="stepAllowed"
                        :is="currentStep">
                </component>
            </keep-alive>
        </div>
    </section>
</template>

<script lang="ts">
import router from '@pictaccio/admin-gui/router';
import storeConfigService from '@pictaccio/admin-gui/services/store_config_service';
import { store } from '@pictaccio/admin-gui/store';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { Component, Hook } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import DisabledTooltip from '@pictaccio/admin-gui/views/components/widgets/DisabledTooltip.vue';
import ProductSection from '@pictaccio/admin-gui/views/private/activities/create_session/ProductSection.vue';
import Photos from '@pictaccio/admin-gui/views/private/activities/create_session/Photos.vue';
import ShippingSection from '@pictaccio/admin-gui/views/private/activities/create_session/ShippingSection.vue';
import SessionInfo from '@pictaccio/admin-gui/views/private/activities/create_session/SessionInfo.vue';
import ImportSubjects from '@pictaccio/admin-gui/views/private/activities/create_session/ImportSubjects.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import { onBeforeRouteLeave } from 'vue-router';

const STEPS_INTERFACE: string[] = ['session-info', 'product-section', 'shipping-section', 'import-subjects', 'photos'];

@Component({
    name: 'Create Sessions',
    components: {
        DisabledTooltip,
        FontAwesomeIcon,
        SessionInfo,
        ProductSection,
        ShippingSection,
        ImportSubjects,
        Photos,
        DocsLink
    }
})
export default class CreateSession extends AdminActivities {
    private allowedSteps: string[] = ['session-info'];
    private currentStep = 'session-info';
    private showTab = true;

    /* LIFECYCLE */
    @Hook
    public async beforeRouteEnter(to, from, next): Promise<void> {
        const storeConfigured = await storeConfigService.isStoreConfigured();

        if (storeConfigured && storeConfigured.isReady) {
            next();
        } else {
            next((vm) => {
                vm.$router.replace({ name: 'Manage Sessions' });
            });
        }
    }

    @Hook
    public async beforeRouteLeave(to, from, next): Promise<void> {
        if (from.meta['canSafelyExit'] || await globalPrompt({
            buttonType: 'yes-no',
            icon: ['', ''],
            message: this.$t('generic.prompt.leavingWarningMessage'),
            title: this.$t('generic.prompt.warningTitle')
        }) === 'yes') {
            next();
        }
    }

    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'sessions');
        await this.$store.dispatch('Sessions/clear');
    }

    public mounted(): void {
        super.mounted();
        this.switchCurrentStep('session-info');
    }

    /* EVENT HANDLERS */
    private goToStepClick(step: string): void {
        if (STEPS_INTERFACE.includes(step)) {
            this.$route.meta['canSafelyExit'] = false;
            this.currentStep = step;
        }
    }

    private stepAllowed(step: string): void {
        if (!this.allowedSteps.includes(step)) {
            this.allowedSteps.push(step);
        }
    }

    private switchCurrentStep(step: string): void {
        if (this.allowedSteps.includes(step)) {
            this.currentStep = step;
            this.showTab = false;
            this.$nextTick(() => { this.showTab = true })
        }
    }

    /* PRIVATE */
}
</script>
