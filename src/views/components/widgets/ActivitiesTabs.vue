<style lang="scss" scoped>
.title {
    grid-column: 1/-1;
    color: var(--color-text-disabled);
    margin: 0;
    font-size: 3rem;
    --font-weight: 500;
    @include font-parameter;
}
.top-tabs,
.bottom-tabs {
    display: flex;
    width: 100%;
    grid-column: 1 / -1;

    [data-theme-color="dark"] & {
        --color-background-tab-unselected: hsla(
                var(--color-mix-4-5-step-3-h),
                var(--color-mix-4-5-step-3-s),
                var(--color-mix-4-5-step-3-l),
                0.2
        );
        --color-text-tab-unselected: var(--color-mix-5-4-step-1);
        --color-line-tab-selected: var(--color-primary-4);
    }
    [data-theme-color="dark"][data-theme-type="line"] & {
        --color-background-tab-selected: var(--color-primary-4);
        --color-text-tab-selected: var(--color-mix-6-5-step-3);
    }
    [data-theme-color="dark"][data-theme-type="block"] & {
        --color-background-tab-selected: var(--color-background-page-2);
        --color-text-tab-selected: var(--color-primary-4);
    }
    [data-theme-color="light"] & {
        --color-background-tab-unselected: hsla(
                var(--color-primary-4-h),
                var(--color-primary-4-s),
                var(--color-primary-4-l),
                0.4
        );
        --color-text-tab-unselected: var(--color-mix-5-4-step-1);
        --color-line-tab-selected: var(--color-primary-4);
    }
    [data-theme-color="light"][data-theme-type="block"] & {
        --color-background-tab-selected: var(--color-background-page-2);
        --color-text-tab-selected: var(--color-primary-5);
    }
    [data-theme-color="light"][data-theme-type="line"] & {
        --color-background-tab-selected: var(--color-primary-4);
        --color-text-tab-selected: var(--color-mix-5-4-step-3);
    }
}

.top-tabs {
    margin-top: 3rem;
    .context {
        display: flex;
        gap: 1rem;
        margin-left: auto;

        #activity-controls-advance-toggle-holder,
        #activity-controls-pagination-holder,
        #activity-controls-context-holder {
            display: flex;

            :deep(.btn) {
                height: 3.6rem;
            }
        }
    }
}

.bottom-tabs {
    position: relative;
    overflow: hidden;

    [data-theme-type="line"] & {
        margin-bottom: -1.7rem;

        &::after {
            content: '';
            position: absolute;
            inset: auto 0 0 0;
            padding: 0.2rem;
            border-radius: 100px;
            background-color: var(--color-line-tab-selected);
        }
    }
    [data-theme-type="block"] & {
        margin-bottom: -2.5rem;
    }

    .activity-tabs {
        display: flex;
        width: 100%;
        margin: auto 0 0;
        gap: 0.5rem;
        overflow: auto;

        [data-theme-type="line"] & {
            margin-inline: 1rem;
        }

        > a {
            padding: 0;
        }
    }
}

.activity-tabs, .activity-tab {
    transform: rotateX(180deg);
}

.activity-tab {
    @extend .h6;
    background-color: var(--color-background-tab-unselected);
    color: var(--color-text-tab-unselected);
    white-space: nowrap;
    border-radius: $ruler-border-radius $ruler-border-radius 0 0;
    --font-weight: 500;
    @include font-parameter;

    [data-theme-type="line"] & {
        padding: 1.2rem 2rem 1.2rem;
    }
    [data-theme-type="block"] & {
        padding: 1.2rem 2rem 1.7rem;
    }

    .router-link-active & {
        background-color: var(--color-background-tab-selected);
        color: var(--color-text-tab-selected);
    }
}
</style>

<template>
    <div v-if="ready" class="bottom-tabs">
        <ul class="activity-tabs">
            <router-link v-for="subs in activities[currentActivity].subs"
                         :key="subs"
                         :to="`/activities/${dasherize(subs)}${internalBind ? ('/' + internalBind) : ''}`">
                <li class="activity-tab">
                    {{ $t(`activities.tabsTitles.${camelize(subs)}`) }}
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize, dasherize } from '@loufa/loufairy';
import { activitiesTabs } from '@pictaccio/admin-gui/src/core/activities_tabs';

@Component({
    name: 'Activities Tabs',
    components: {
        FontAwesomeIcon
    },
    expose: [
        'setBind',
        'setTextAfter',
        'setTextBefore',
        'setText'
    ]
})
export default class ActivitiesTabs extends Vue {
    private currentActivity = '';
    @Prop
    private bind: string = null;
    private textBefore: string;
    private textAfter: string;
    private text: string;
    private ready = false;
    private internalBind: string = null;
    private activities = activitiesTabs;

    public camelize: (input: string, pascal?: boolean) => string = camelize;
    public dasherize: (input: string) => string = dasherize;

    public setBind(bind: string): void {
        this.internalBind = bind;
    }

    public setTextAfter(text: string): void {
        this.textAfter = text;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public setTextBefore(text: string): void {
        this.textBefore = text;
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.currentActivity = this.$store.getters['CurrentActivity/currentActivity'];
        if (!this.currentActivity || this.currentActivity === '') {
            return;
        }

        if (this.bind) {
            this.internalBind = this.bind;
        }

        this.$nextTick(() => {
            this.ready = true;
        });
    }
}
</script>
