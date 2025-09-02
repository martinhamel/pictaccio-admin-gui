<style lang="scss" scoped>
.settings-header {
    min-width: 25rem;
    display: grid;
    grid-template-columns: 3rem auto;
    gap: 1rem;
    padding: 3rem 3rem 2rem;
    color: var(--color-text-settigs-header);

    [data-theme-color="dark"] & {
        --color-text-settigs-header: var(--color-mix-5-7-step-1);
    }

    [data-theme-color="light"] & {
        --color-text-settigs-header: var(--color-mix-5-7-step-3);
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        svg {
            font-size: 2.4rem;
        }
    }

    .h3 {
        margin: 0;
        font-size: 2.5rem;
        --font-weight: 500;
    }
}

.settings-list {
    overflow: clip;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    [data-theme-color="dark"] & {
        --color-text-settings-sidenav-title: var(--color-primary-4);
        --color-background-settings-sidenav-list: transparent;
        --color-text-settings-sidenav-list: var(--color-mix-5-7-step-1);
        --color-background-settings-sidenav-list-hover: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.1
        );
        --color-text-settings-sidenav-list-hover: var(--color-primary-7);
        --color-background-settings-sidenav-list-active: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.3
        );
        --color-text-settings-sidenav-list-active: var(--color-primary-8);
    }

    [data-theme-color="light"] & {
        --color-text-settings-sidenav-title: var(--color-primary-4);
        --color-background-settings-sidenav-list: transparent;
        --color-text-settings-sidenav-list: var(--color-mix-5-7-step-3);
        --color-background-settings-sidenav-list-hover: hsla(
                var(--color-primary-4-h),
                var(--color-primary-4-s),
                var(--color-primary-4-l),
                0.1
        );
        --color-text-settings-sidenav-list-hover: var(--color-mix-4-6-step-1);
        --color-background-settings-sidenav-list-active: hsla(
                var(--color-primary-4-h),
                var(--color-primary-4-s),
                var(--color-primary-4-l),
                0.3
        );
        --color-text-settings-sidenav-list-active: var(--color-mix-4-6-step-3);
    }

    li {
        cursor: pointer;
        margin-inline: .1rem;
        background-color: var(--color-background-settings-sidenav-list);
        color: var(--color-text-settings-sidenav-title);

        &:not(.main-activity) {
            color: var(--color-text-settings-sidenav-list);
            padding: 0.5rem 1rem 0.1rem calc(#{$item-expended-padding} * 1.3);
        }

        &.current {
            background-color: var(--color-background-settings-sidenav-list-active);
            color: var(--color-text-settings-sidenav-list-active);
        }
        &:hover {
            background-color: var(--color-background-settings-sidenav-list-hover);
            color: var(--color-text-settings-sidenav-list-hover);
        }

        .h6,.h4 {
            margin-bottom: .4rem;
        }

        .h6 {
            --font-weight: 500;
        }

        .h6 {
            --font-weight: 400;
        }
    }
}

.main-activity {
    position: relative;
    padding: 1rem $item-expended-padding 0;
    margin-top: 0.5rem;

    &::before {
        content: '';
        position: absolute;
        height: 1px;
        top: -0.5rem;
        left: -$item-expended-padding;
        width: calc(100% + #{$item-expended-padding} * 2);
        color: var(--color-text-disabled);
        background-color: currentColor;
        opacity: 0.3;
    }

    &:not(:first-child) {
        margin-top: 2.5rem;
    }

    &.no-event {
        pointer-events: none;
        cursor: default;
    }

    .h4 {
        margin: 0;
    }
}

.activity-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;

    :deep(.activity-control:has(~.overlay-ui)) {
        padding-bottom: 7rem !important;
    }

    :deep(.table-holder) {
        >.h5 {
            --font-weight: 500;
        }
    }
}
</style>

<template>
    <dialog-box ref="settingsDialog"
                v-if="dialogVisible"
                :box-type="'settings-box'"
                :ui-visible="false"
                :overlay="true"
                @dialog-close="closeDialog"
                class="settings-box">
        <template #title>
            <div class="settings-header" @click="closeDialog">
                <label><font-awesome-icon :icon="['fas', 'cog']"/></label>
                <h4 class="h3">{{ $t('activities.titles.settings') }}</h4>
            </div>
            <ul class="settings-list">
                <li v-if="$validateCapability('account:read')"
                    class="main-activity no-event">
                    <h5 class="h4">
                        {{ $t(`activities.titles.management`)}}
                    </h5>
                </li>
                <li v-if="$validateCapability('account:read')"
                    @click="goToActivityClick('manageUsers')"
                    :class="currentStep === 'manageUsers' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.titles.users`)}}
                    </h5>
                </li>
                <li class="main-activity no-event">
                    <h5 class="h4">
                        {{ $t(`activities.titles.configureStore`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('storeCustomization')"
                    :class="currentStep === 'storeCustomization' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.storeCustomization`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('storeLanguages')"
                    :class="currentStep === 'storeLanguages' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.storeLanguages`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('manageContactInfo')"
                    :class="currentStep === 'manageContactInfo' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.manageContactInfo`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('storeStatus')"
                    :class="currentStep === 'storeStatus' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.storeStatus`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('taxId')"
                    :class="currentStep === 'taxId' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.taxId`)}}
                    </h5>
                </li>
                <li v-if="$validateCapability('account:read')"
                    class="main-activity no-event">
                    <h5 class="h4">
                        {{ $t(`activities.titles.integration`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('appIntegration')"
                    :class="currentStep === 'appIntegration' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.appIntegration`)}}
                    </h5>
                </li>
                <li @click="goToActivityClick('exposeCodeSnippet')"
                    :class="currentStep === 'exposeCodeSnippet' ? 'current' : ''">
                    <h5 class="h6">
                        {{ $t(`activities.tabsTitles.exposeCodeSnippet`)}}
                    </h5>
                </li>
            </ul>
            <version-string/>
        </template>
        <template #content>
            <section class="activity-wrapper">
                <component ref="current-activity" :is="currentStep">
                </component>
            </section>
        </template>
    </dialog-box>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import DialogBox from '@pictaccio/admin-gui/src/views/components/layout/DialogBox.vue';
import VersionString from '@pictaccio/admin-gui/src/views/components/VersionString.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import AppIntegration from '@pictaccio/admin-gui/src/views/private/settings/AppIntegration.vue';
import ExposeCodeSnippet from '@pictaccio/admin-gui/src/views/private/settings/ExposeCodeSnippet.vue';
import ManageContactInfo from '@pictaccio/admin-gui/src/views/private/settings/ManageContactInfo.vue';
import ManageUsers from '@pictaccio/admin-gui/src/views/private/settings/ManageUsers.vue';
import StoreCustomization from '@pictaccio/admin-gui/src/views/private/settings/StoreCustomization.vue';
import StoreLanguages from '@pictaccio/admin-gui/src/views/private/settings/StoreLanguages.vue';
import StoreStatus from '@pictaccio/admin-gui/src/views/private/settings/StoreStatus.vue';
import TaxId from '@pictaccio/admin-gui/src/views/private/settings/TaxId.vue';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Setting Dialog',
    components: {
        AppIntegration,
        StoreCustomization,
        StoreLanguages,
        ExposeCodeSnippet,
        FontAwesomeIcon,
        ManageContactInfo,
        ManageUsers,
        StoreStatus,
        TaxId,
        VersionString
    },
    expose: [
        'openSettingDialog'
    ]
})
export default class SettingDialog extends Vue {
    private currentStep;
    private dialogVisible = false;

    public openSettingDialog(): void {
        this.dialogVisible = true;
        this.$nextTick(() => {
            (this.$refs.settingsDialog as DialogBox).openDialog();
        })
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.currentStep = this.$validateCapability('account:read')
            ? 'manageUsers'
            : 'appIntegration';
    }

    /* EVENT HANDLERS */
    private async closeDialog(): Promise<void> {
        const currentActivity = this.$refs['current-activity'] as AdminActivities;
        if (currentActivity.canSafelyExit() || await globalPrompt({
            buttonType: 'yes-no',
            icon: ['', ''],
            message: this.$t('generic.prompt.leavingWarningMessage'),
            title: this.$t('generic.prompt.warningTitle')
        }) === 'yes') {
            (this.$refs.settingsDialog as DialogBox).closeDialog();
            this.dialogVisible = false;
        }
    }

    private async goToActivityClick(activity: string): Promise<void> {
        const currentActivity = this.$refs['current-activity'] as AdminActivities;
        const canSafelyExit = currentActivity.canSafelyExit();

        currentActivity.unsavedChange = !canSafelyExit;

        if (canSafelyExit || await globalPrompt({
            buttonType: 'yes-no',
            icon: ['', ''],
            message: this.$t('generic.prompt.leavingWarningMessage'),
            title: this.$t('generic.prompt.warningTitle')
        }) === 'yes') {
            this.currentStep = activity;
        }
    }
}
</script>
