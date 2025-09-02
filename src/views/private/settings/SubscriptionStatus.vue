<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.current-subscription {
    grid-column: span 7 / auto;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: auto min-content;
    gap: 0 0.5rem;
}

.billing-payment {
    grid-column: span 6 / auto;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: auto min-content;

    .billing-dates {
        border-left: 0px solid transparent;
    }

    .billing-status {
        @extend .h2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;

        &[data-status = 'success'] {
            color: var(--color-semantic-success);
        }
        &[data-status = 'error'] {
            color: var(--color-semantic-error);
        }
        &[data-status = 'warning'] {
            color: var(--color-semantic-warning);
        }
        &[data-status = 'info'] {
            color: var(--color-semantic-info);
        }
        &[data-status = 'disabled'] {
            color: var(--color-semantic-disabled);
        }

        .message-status {
            @extend .h6;
        }
    }
}

.subscription-dates,
.billing-dates {
    width: min-content;
    height: 100%;
    padding: 0 2.5rem;
    margin: auto 2rem auto 0;
    border-left: 1.5px solid var(--color-input-background);
    display: flex;
    flex-direction: column;
    text-align: center;

    @include breakpoint($small) {
        padding: 0 1rem;
        margin: auto;
    }
}

.h5 {
    grid-column: 1/-1;
}

.h6 {
    white-space: nowrap;
}

</style>

<template>
    <section id="subscription-status" class="activity-wrapper">
        <div class="activity-control">
            <div class="section-ui top-right">
                <docs-link :activity="'settings/subscription-status'"/>
            </div>
            <div class="current-subscription">
                <h2 class="h5">{{ $t(`activities.subscriptionStatus.currentSubscription.title`) }}</h2>
                <plan-card :planProps="planProps.planAProp"/>
                <div class="subscription-dates">
                    <label>
                        <span class="h6">
                            {{ $t(`activities.subscriptionStatus.currentSubscription.memberSince`) }}
                        </span>
                        <p class="text-small">April 2<span class="text-sup">nd</span> 2022</p>
                    </label>
                    <label>
                        <span class="h6">
                            {{ $t(`activities.subscriptionStatus.currentSubscription.renewDate`) }}
                        </span>
                        <p class="text-small">April 2<span class="text-sup">nd</span> 2023</p>
                    </label>
                </div>
                <ul class="edit-links">
                    <li><router-link to="/activities/change-plan">
                        {{ $t(`activities.tabsTitles.changePlan`) }}
                    </router-link></li>
                    <li><router-link to="/activities/manage-subscription">
                        {{ $t(`activities.tabsTitles.deactivateSubscription`) }}
                    </router-link></li>
                </ul>
            </div>
            <div class="billing-payment">
                <h2 class="h5">{{ $t(`activities.subscriptionStatus.billingPayment.title`) }}</h2>
                <div class="billing-dates">
                    <label>
                        <span class="h6">
                            {{ $t(`activities.subscriptionStatus.billingPayment.nextBillingDate`) }}
                        </span>
                        <p class="text-small">May 2<span class="text-sup">nd</span> 2022</p>
                    </label>
                    <label>
                        <span class="h6">
                            {{ $t(`activities.subscriptionStatus.billingPayment.datePaid`) }}
                        </span>
                        <p class="text-small">April 2<span class="text-sup">nd</span> 2022</p>
                    </label>
                </div>
                <div class="billing-status" :data-status="paymentStatus.status">
                    <font-awesome-icon :icon="[billingStatus[paymentStatus.status].type, billingStatus[paymentStatus.status].icon]"/>
                    <div class="message-status">
                        {{ $t(`activities.billingPayment.generic.messages.${paymentStatus.message}`) }}
                    </div>
                </div>
                <ul class="edit-links">
                    <li><router-link to="/activities/change-plan">
                        {{ $t(`activities.tabsTitles.changePlan`) }}
                    </router-link></li>
                    <li><router-link to="/activities/manage-subscription">
                        {{ $t(`activities.tabsTitles.deactivateSubscription`) }}
                    </router-link></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import PlanCard from '@pictaccio/admin-gui/src/views/private/activities/companions/PlanCard.vue';

@Component({
    name: 'Subscription Status',
    components: {
        FontAwesomeIcon,
        DocsLink,
        PlanCard
    }
})
export default class SubscriptionStatus extends AdminActivities {
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
            ]
        }
    }

    public paymentStatus = {
        status: 'success',
        message: 'noProblem'
    }

    private billingStatus = {
        success: {
            type: 'fal',
            icon: 'check-circle'
        },
        error: {
            type: 'fal',
            icon: 'exclamation-triangle'
        },
        warning: {
            type: 'fal',
            icon: 'exclamation-circle'
        },
        info: {
            type: 'fal',
            icon: 'info-circle'
        }
    }

    public camelize: (input: string, pascal: boolean) => string = camelize;

    /* LIFECYCLE */
}
</script>
