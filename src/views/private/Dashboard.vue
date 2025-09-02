<style lang="scss" scoped>
#welcome-screen {
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
    grid-auto-rows: min-content;
    grid-auto-flow: dense;
    gap: 3rem;
    padding: 4rem 6rem;
    overflow-y: auto;

    @include breakpoint('small') {
        grid-template-columns: repeat(1, 1fr);
    }

    .welcome-header {
        grid-column: 1 / -1;

        h1 {
            margin: 0 0 3rem;
            float: left;
        }

        .edit-layout-cog {
            float: right;
            font-size: 3rem;
        }
    }
}

.welcome-line {
    font-size: 2.5rem;
    --font-weight: 600;
    grid-column: 1/-1;
}

.store-set-up-list-container {
    position: relative;
    border-radius: $ruler-border-radius;
    background-color: var(--color-background-page-2);
    grid-column: 1/-1;
    [data-theme-color="light"][data-theme-type="line"] & {
        --color-background-page-2: var(--color-mix-2-3-step-3);
    }
    .skip-container {
        width: fit-content;
        border-radius: $ruler-border-radius;
        background-color: var(--color-dismiss-choice-background);
        top: 1rem;
        right: 1rem;
        position: absolute;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        .skip-options {
            font-size: 2rem;
        }
    }
    .store-set-up-list {
        margin: 0;
        li {
            display: flex;
            flex-direction: column;
            font-size: 1.8rem;
            padding: 1rem;
            --font-weight: 400;
            border-bottom: 0.2rem solid hsla(
                    var(--color-mix-6-5-step-3-h),
                    var(--color-mix-6-5-step-3-s),
                    var(--color-mix-6-5-step-3-l),
                    10%
            );
            div {
                display: flex;
            }
            input[type=checkbox] {
                transform: translateY(0.85rem);
                [data-theme-color="light"][data-theme-type="block"] &::after {
                    background-color: var(--color-mix-5-6-step-3);
                    opacity: 75%;
                }
                [data-theme-color="light"][data-theme-type="line"] &::after {
                    background-color: var(--color-mix-5-7-step-3);
                    opacity: 75%;
                }
            }
            a {
                white-space: nowrap;
                text-decoration: underline;
                font-size: 1.6rem;
                [data-theme-color="light"][data-theme-type="line"] & {
                    color: var(--color-mix-5-4-step-1);
                }
            }
            label {
                width: fit-content;
                margin: 0;
                padding-bottom: 0;
            }
            p {
                font-size: 1.3rem;
                margin-left: 6rem;
                color: var(--color-mix-5-7-step-1);
                [data-theme-color="light"][data-theme-type="line"] & {
                    color: var(--color-mix-5-7-step-3);
                    opacity: 75%;
                }
                [data-theme-color="light"][data-theme-type="block"] & {
                    color: var(--color-mix-5-6-step-3);
                    opacity: 75%;
                }
            }
        }
    }
    .dismiss {
        [data-theme-color="light"][data-theme-type="line"] & {
            color: var(--color-mix-5-6-step-2);
        }
        position: relative;
        top: unset;
        right: unset;
        padding-right: 0.5rem;
        font-size: 2rem;
    }
    .store-set-up-top-row {
        padding: 1rem;
        border-bottom: 0.2rem solid hsla(
                var(--color-mix-6-5-step-3-h),
                var(--color-mix-6-5-step-3-s),
                var(--color-mix-6-5-step-3-l),
                10%
            );
        h3 {
            font-size: 2rem;
            --font-weight: 600;
            [data-theme-color="light"][data-theme-type="line"] & {
                color: var(--color-mix-5-6-step-2);
            }
        }
        .progress-ui {
            display: flex;
            width: 100%;
            align-items: center;
            gap: 0.5rem;
            span {
                margin-top: 0.5rem;
                font-size: 1rem;
            }
        }
    }
}

.widgets {
    border: 2px dashed var(--color-text-accent-secondary);
    border-radius: $ruler-border-radius ;
    min-height: 30rem;
    grid-column: span 1 / auto;
}

.progress {
    max-width: 15rem;
    width: 100%;
    $progress-height: .5rem;
    position: relative;
    grid-column: 1 / -1;
    height: $progress-height;
    margin-top: 0.5rem;
    overflow: hidden;
    border-radius: $ruler-border-radius;
    background-color: var(--color-background-notification-progression-background);
    border: 2px solid var(--color-background-notification-progression-border);
    box-sizing: content-box;
    padding: 0.3rem;

    [data-theme-color="dark"] & {
        --color-background-notification-progression-done: var(--color-mix-4-6-step-3);
        --color-background-notification-progression: var(--color-semantic-info);
        --color-background-notification-progression-background: var(--color-mix-5-6-step-2);
        --color-background-notification-progression-border: var(--color-mix-1-6-step-1);
    }

    [data-theme-color="light"] & {
        --color-background-notification-progression-done: var(--color-mix-4-6-step-3);
        --color-background-notification-progression: var(--color-semantic-info);
        --color-background-notification-progression-background: var(--color-mix-5-6-step-2);
        --color-background-notification-progression-border: var(--color-mix-1-6-step-1);
    }

    span {
        font-size: 1rem;
        position: absolute;
        display: none;
        z-index: 1;
        top: 0.6rem;
        left: 0.5rem;
    }

    i {
        position: absolute;
        height: $progress-height;
        background-color: var(--color-background-notification-progression);
        border-radius: $ruler-border-radius-inner;

        &.done {
            background-color: var(--color-background-notification-progression-done);
        }

        &.error {
            background-color: var(--color-semantic-error);
        }
    }
}

</style>

<template>
    <div id="welcome-screen">
        <h2 class="welcome-line">
            {{ $t('activities.dashboard.welcome', { name: $store.getters['UserInfo/userNameInfo']?.firstName }) }}
        </h2>
        <div class="store-set-up-list-container">
            <div class="skip-container" ref="skip-container">
                <span class="skip-options">
                    <a class="skip-forever">{{ $t(`activities.dashboard.storeSetup.skipForever`) }}</a>
                    <a class="skip-for-now">{{ $t(`activities.dashboard.storeSetup.skipForNow`) }}</a>
                </span>
                <!-- <font-awesome-icon class="dismiss" :icon="['fal', 'times']" @click="dismissClick"/> -->
            </div>

            <div class="store-set-up-top-row">
                <h3>{{ $t(`activities.dashboard.storeSetup.title`) }}</h3>
                <progress-bar :progress="43" />
            </div>
            <ul class="store-set-up-list">
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.appIntegration.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.appIntegration.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.appIntegration.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.customizeStore.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.customizeStore.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.customizeStore.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.languages.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.languages.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.languages.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.contact.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.contact.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.contact.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.taxId.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.taxId.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.taxId.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.inviteUsers.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.inviteUsers.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.inviteUsers.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.integration.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.integration.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.integration.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.products.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.products.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.products.description`) }}</p>
                </li>
                <li>
                    <div>
                        <label>
                            <input type="checkbox">
                            <span>{{ $t(`activities.dashboard.storeSetup.steps.sessions.name`) }}</span>
                        </label>
                        <a>{{ $t(`activities.dashboard.storeSetup.steps.sessions.link`) }}</a>
                    </div>
                    <p>{{ $t(`activities.dashboard.storeSetup.steps.sessions.description`) }}</p>
                </li>
            </ul>
        </div>
        <div v-for="widget in widgets" :key="widget" :class="widget" class="widgets"></div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dasherize } from '@loufa/loufairy';
import { resetBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import ProgressBar from '@pictaccio/admin-gui/src/views/components/widgets/ProgressBar.vue';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Dashboard',
    emits: [
        'current-activity',
        'menu-visible'
    ],
    components: {
        ProgressBar,
        FontAwesomeIcon
    }
})
export default class Dashboard extends Vue {
    private widgets = [
        'test-A',
        'test-B',
        'test-D',
        'test-F',
        'test-G',
        'test-H',
        'test-L'
    ]
    private dropdownTest = [
        { name: 'Test 1', value: 'test-1' },
        { name: 'Test 2', value: 'test-2' },
        { name: 'Test 3', value: 'test-3' },
        { name: 'Test 4', value: 'test-4' }
    ]

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'dashboard');
    }

    public mounted(): void {
        this.$emit('menu-visible', true);
        this.$emit('current-activity', 'dashboard');

        resetBreadcrumb();
    }
}
</script>
