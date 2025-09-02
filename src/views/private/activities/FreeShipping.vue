<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.content {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: $ruler-input-max-width;
    margin: 0 auto;
    gap: $grid-gap;

    .content-section {
        > span {
            white-space: nowrap;
            display: inline-flex;
        }
    }

    .checkbox-section {
        @extend .content-section;
    }

    .threshold-section {
        @extend .content-section;

        display: flex;
        flex-direction: column;
    }

    .ui-controls {
        display: flex;
        justify-content: flex-end;
        gap: $grid-gap;
    }
}
</style>

<template>
    <section id="store-status" class="activity-wrapper">
        <activities-tabs ref="tabs"/>
        <div class="activity-control" ref="free-shipping-container">
            <information-box :colors="{
                border: this.$store.getters['ShippingPromo/freeShipping'].enabled
                    ? 'var(--color-semantic-success)'
                    : 'var(--color-semantic-info)'
            }">
                <p v-html="$t('activities.freeShipping.description', {
                            promoStatus: this.$store.getters['ShippingPromo/freeShipping'].enabled
                                ? $t('generic.ui.enabled')
                                : $t('generic.ui.disabled'),
                            promoStatusColor: this.$store.getters['ShippingPromo/freeShipping'].enabled
                                ? 'var(--color-semantic-success)'
                                : 'var(--color-semantic-info)',
                        })"></p>
            </information-box>
            <div class="content">
                <div class="checkbox-section">
                    <label>
                        <input ref="free-shipping-enabled"
                               type="checkbox"
                               class="no-spacing"
                               @click="enableFreeShippingClick">
                        <h3 class="h6">{{ $t('activities.freeShipping.enable') }}</h3>
                    </label>
                </div>
                <div class="threshold-section">
                    <span>
                        <h3 class="h6">{{ $t('activities.freeShipping.threshold') }}</h3>
                    </span>
                    <input ref="free-shipping-threshold"
                           id="threshold-free-shipping"
                           :class="!enabled ? 'disabled' : ''"
                           type="number"
                           v-model="threshold"
                           min="0">
                </div>
                <div class="ui-controls">
                    <button class="btn btn-secondary"
                            @click="cancelClick">
                        {{ $t('generic.ui.cancel') }}
                    </button>
                    <button class="btn btn-primary"
                            @click="confirmClick">
                        {{ $t('generic.ui.save') }}
                    </button>
                </div>
            </div>
            <tutorial-overlay>
<!--                <tutorial-text ref="free-shipping-container-tutorial"-->
<!--                               :name-ref="'free-shipping-container-tutorial'"-->
<!--                               :background-shape="'blob-h-1'"-->
<!--                               :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                               :orientation="'bottom-left_down'"-->
<!--                               @mounted="getTutorialTargetPosition('free-shipping-container',-->
<!--                                   '.pane-main')">-->
<!--                    {{ $t('activities.freeShipping.tutorial.whatIs') }}-->
<!--                </tutorial-text>-->
            </tutorial-overlay>
        </div>
    </section>
</template>

<script lang="ts">
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import TutorialOverlay from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialOverlay.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import PaneContainer from '@pictaccio/admin-gui/src/views/components/PaneContainer.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';

@Component({
    name: 'Free Shipping',
    components: {
        InformationBox,
        TutorialText,
        TutorialOverlay,
        Tooltip,
        Dropdown,
        FontAwesomeIcon,
        PaneContainer,
        DocsLink
    }
})
export default class FreeShipping extends AdminActivities {
    private threshold = 0;
    private enabled = false;
    private checkbox: HTMLInputElement

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'campaign');
    }

    @Hook
    public beforeRouteUpdate(to, from, next): void {
        const tabs = this.$refs['tabs'] as ActivitiesTabs;
        const filtersHolder = this.$refs['filters-holder'] as Filters;

        if (to.name === from.name &&
            !to.params.extra &&
            tabs &&
            filtersHolder) {
            tabs.setBind('');
            filtersHolder.clearFilters();
        }

        next();
    }

    public mounted(): void {
        super.mounted();
        this.checkbox = this.$refs['free-shipping-enabled'] as HTMLInputElement;
        this.getFreeShipping();

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.freeShipping.title',
            routerLink: 'activities/free-shipping'
        })
    }

    /* EVENT HANDLERS */
    private cancelClick(): void {
        this.getFreeShipping();
    }

    private async confirmClick(): Promise<void> {
        if (await globalPrompt({
            buttonType: 'yes-no',
            icon: ['', ''],
            message: this.$t('activities.freeShipping.confirmMessage'),
            title: this.$t('activities.freeShipping.confirmTitle')
        }) === 'yes') {
            this.modifyFreeShipping();
        }
    }

    private enableFreeShippingClick(): void {
        this.enabled = this.checkbox.checked;
    }

    private async getFreeShipping(): Promise<void> {
        try {
            await this.$store.dispatch('ShippingPromo/readShippingPromo');
            this.threshold = this.$store.getters['ShippingPromo/freeShipping'].threshold;
            this.enabled = this.$store.getters['ShippingPromo/freeShipping'].enabled;
            this.checkbox.checked = this.enabled;
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async modifyFreeShipping(): Promise<void> {
        try {
            await this.$store.dispatch('ShippingPromo/updateShippingPromo', {
                threshold: this.threshold,
                enabled: this.checkbox.checked
            });
            await this.getFreeShipping();
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    /* PRIVATE */
}
</script>
