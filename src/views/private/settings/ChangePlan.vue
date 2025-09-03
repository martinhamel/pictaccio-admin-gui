<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.activity-control {
    padding: 10vh 2rem !important;
}

.plan-options {
    grid-column: 1/-1;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.plan-option {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.current {
    border: 2px solid var(--color-text-accent-primary);
    border-radius: $ruler-border-radius;
    overflow: hidden;

    .current-plan {
        color: var(--color-text-normal) !important;
        background-color: var(--color-text-accent-primary);
        width: 200%;
        padding: .7rem;
        margin: 1.5rem 0 -2rem;
        text-align: center;
        @extend .h6;
    }
}
</style>

<template>
    <section id="activity-change-plan" class="activity-wrapper">
        <div class="activity-control">
            <div class="section-ui top-right">
                <docs-link :activity="'settings/change-plan/'"/>
            </div>
            <div class="plan-options">
                <div class="plan-option"
                    v-for="plan in planProps"
                    :key="plan" :class="`${plan.current ? 'current' : ''}`">
                    <plan-card :planProps="plan"/>
                    <button class="btn btn-primary" v-if="!plan.current">
                        {{ $t(`activities.changePlan.choosePlan`) }}
                    </button>
                    <div v-else class="current-plan">
                        {{ $t(`activities.changePlan.currentPlan`) }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import PlanCard from '@pictaccio/admin-gui/views/private/activities/companions/PlanCard.vue';

@Component({
    name: 'Change Plan',
    components: {
        FontAwesomeIcon,
        PlanCard,
        DocsLink
    }
})
export default class ChangePlan extends AdminActivities {
    private planProps = {
        planAProp: {
            name: 'standard',
            price: 44.99,
            included: [
                {
                    id: 'storageValue',
                    value: 500
                },
                {
                    id: 'storageValue',
                    value: 550
                }
            ],
            current: true
        },
        planBProp: {
            name: 'advance',
            price: 64.99,
            included: [
                {
                    id: 'storageValue',
                    value: 1000
                },
                {
                    id: 'storageValue',
                    value: 1050
                }
            ],
            current: false
        },
        planCProp: {
            name: 'pro',
            price: 84.99,
            included: [
                {
                    id: 'storageValue',
                    value: 2500
                },
                {
                    id: 'storageValue',
                    value: 2550
                }
            ],
            current: false
        }
    }

    public camelize: (input: string, pascal: boolean) => string = camelize;

    /* LIFECYCLE */
}
</script>
