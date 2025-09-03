<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.activity-control {
    grid-column: span 9/auto!important;
}
</style>

<template>
    <div class="activity-control">
        <div class="section-ui top-right">
            <docs-link :activity="'settings/manage-subscription'"/>
        </div>
        <pane-container>
            <template #paneUpdateCc>
                <main>
                    <h2 class="h5">{{ $t(`activities.manageSubscription.updateCC.title`) }}</h2>
                    <span class="text-large">
                        <b>{{ $t(`activities.manageSubscription.updateCC.currentCC`) }}</b>
                        <span>1234</span><!-- inject cc -->
                    </span>
                    <span class="text-large">
                        <b>{{ $t(`activities.manageSubscription.updateCC.expire`) }}</b>
                        <span>soon</span><!-- inject expiration date or state -->
                    </span>
                </main>
                <sub>
                    <form class="update-cc-form" prevent-submit="true">
                        <label for="cc-number">{{ $t(`activities.manageSubscription.updateCC.ui.cardNumber`) }}</label>
                        <input type="text" name="cc-number" id="cc-number" placeholder="**** **** **** 1234" required>
                        <label for="cc-name">{{ $t(`activities.manageSubscription.updateCC.ui.cardName`) }}</label>
                        <input type="text" name="cc-name" id="cc-name" placeholder="Pictaccio" required>
                        <label for="cc-expiration">{{ $t(`activities.manageSubscription.updateCC.ui.cardExpiration`) }}</label>
                        <fused-inputs>
                            <input class="fused-input" type="number" name="cc-expiration-month" id="cc-expiration-month"
                                maxlength="2" min="01" max="12" placeholder="MM" required>
                            <input class="fused-input" type="number" name="cc-expiration-year" id="cc-expiration-year"
                                maxlength="2" min="00" placeholder="YY" required>
                        </fused-inputs>
                        <label for="cc-cvv">{{ $t(`activities.manageSubscription.updateCC.ui.cardCVV`) }}</label>
                        <input type="number" name="cc-cvv" id="cc-cvv" min="0" minlength="3" maxlength="4" required>
                    </form>
                </sub>
            </template>
            <template #paneCancelSubscription>
                <main>
                    <h2 class="h5">{{ $t(`activities.manageSubscription.cancelSubscription.title`) }}</h2>
                    <span class="text-large">{{ $t(`activities.manageSubscription.cancelSubscription.shortNotice`) }}</span>
                </main>
                <sub>
                    <p class="notice">{{ $t(`activities.manageSubscription.cancelSubscription.notice`) }}</p>
                    <textarea name="reason" id="" cols="30" rows="10"
                        :placeholder="$t(`activities.manageSubscription.cancelSubscription.ui.improvement`)"></textarea>
                    <p class="confirm">{{ $t(`activities.manageSubscription.cancelSubscription.confirm`) }}</p>
                    <input class="confirmation" type="text" placeholder="Confirmation">
                </sub>
            </template>
        </pane-container>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import PlanCard from '@pictaccio/admin-gui/views/private/activities/companions/PlanCard.vue';
import PaneContainer from '@pictaccio/admin-gui/views/components/PaneContainer.vue';

@Component({
    name: 'Manage Subscription',
    components: {
        FontAwesomeIcon,
        DocsLink,
        PaneContainer,
        PlanCard
    }
})
export default class ManageSubscription extends AdminActivities {
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

    public camelize: (input: string, pascal: boolean) => string = camelize;

    /* LIFECYCLE */

    /* EVENT HANDLERS */
}
</script>
