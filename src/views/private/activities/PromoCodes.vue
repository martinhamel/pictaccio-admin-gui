<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';
.form-group {
    label {
        margin: 0;
    }
}
.confirm {
    order: 99;
}
</style>

<template>
    <section id="code-promo" class="activity-wrapper">
        <dialog-box ref="dialog"
                    box-type="small-box"
                    :dismiss="true"
                    :overlay="true"
                    :title="$t('activities.promoCodes.addBtn')"
                    @dialog-close="dialogClose">
            <template #content>
                <div class="form-group">
                    <label for="promo-codes-quantity">
                        {{ $t('generic.ui.quantity') }}
                    </label>
                    <input type="number"
                           min="0"
                           name="promo-codes-quantity"
                           ref="promo-codes-quantity">
                </div>
            </template>
            <template #uiDialog>
                <button class="btn btn-primary confirm"
                        @click="generatePromoCodeClick">
                    {{ $t(`generic.ui.confirm`) }}
                </button>
            </template>
        </dialog-box>
        <activities-tabs ref="tabs" :bind="campaignId"/>
<!--        <div class="section-ui top-right">-->
<!--            <input v-if="$validateCapability('campaign:create') && $validateCapability('campaign:update')"-->
<!--                   type="number"-->
<!--                   min="0"-->
<!--                   name="promo-codes-quantity"-->
<!--                   ref="promo-codes-quantity">-->
<!--            <button v-if="$validateCapability('campaign:create') && $validateCapability('campaign:update')"-->
<!--                    class="btn btn-primary add"-->
<!--                    @click="addPromoCodeClick">-->
<!--                {{ $t('generic.ui.add')  + ' ' + $t('activities.codePromo.title')}}-->
<!--            </button>-->
<!--            <button class="btn btn-primary copy">-->
<!--                {{ $t('generic.ui.copy')}}-->
<!--            </button>-->
<!--            <button v-if="$validateCapability('campaign:delete')"-->
<!--                    class="btn btn-secondary destructive"-->
<!--                    @click="deleteSeriesClick">-->
<!--                {{ $t('generic.ui.delete')}}-->
<!--            </button>-->
<!--        </div>-->
        <div ref="promo-code-container"
             class="activity-control table-holder">
            <data-table ref="promo-codes-table"
                        name="promo-codes"
                        :tableData="promoCodes"
                        :row-selectable="false">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="promoCodes.headers"
                                            :rows="6"
                                            @placeholder-clicked="addPromoCodeClick"/>
                </template>
                <template #tutorial>
                    <!--                    <tutorial-text ref="add-btn-tutorial"-->
                    <!--                                   v-if="$validateCapability('campaign:create')"-->
                    <!--                                   :name-ref="'campaign-add-btn-tutorial'"-->
                    <!--                                   :background-shape="'blob-h-1'"-->
                    <!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
                    <!--                                   :orientation="'top-right_up'"-->
                    <!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
                    <!--                        {{ $t('activities.campaign.tutorial.addBtn') }}-->
                    <!--                    </tutorial-text>-->
                    <!--                    <tutorial-text ref="campaign-container-tutorial"-->
                    <!--                                   :name-ref="'campaign-container-tutorial'"-->
                    <!--                                   :background-shape="'blob-h-1'"-->
                    <!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
                    <!--                                   :orientation="'bottom-right_down'"-->
                    <!--                                   @mounted="getTutorialTargetPosition('campaign-container',-->
                    <!--                                           '.activity-control, .placeholder-container')">-->
                    <!--                        {{ $t('activities.campaign.tutorial.whatIs') }}-->
                    <!--                    </tutorial-text>-->
                </template>
                <template #context-controls>
                    <button ref="add-btn"
                            v-if="$validateCapability('campaign:create')"
                            class="btn btn-primary add"
                            @click="addPromoCodeClick">
                        {{ $t('activities.promoCodes.addBtn')}}
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FilterDescriptor } from '@pictaccio/admin-gui/core/types/filter_descriptors';
import { DbPromoCode } from '@pictaccio/admin-gui/models/db_promo_code';
import promoService from '@pictaccio/admin-gui/services/promo_service';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/id_filter_function';
import { updateBreadcrumb } from '@pictaccio/admin-gui/utils/global_breadcrumb';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/utils/route_extra';
import DialogBox from '@pictaccio/admin-gui/views/components/layout/DialogBox.vue';
import PaneContainer from '@pictaccio/admin-gui/views/components/PaneContainer.vue';
import ActivitiesTabs from '@pictaccio/admin-gui/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import {
    PROMO_CODES_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/promo_codes_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import { Component, Hook, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Promo Code',
    components: {
        DialogBox,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        PaneContainer,
        PlaceholderDataTable
    }
})
export default class PromoCodes extends AdminActivities {
    @Prop
    private campaignId: string;
    private dialog: DialogBox;
    private datatable: DataTable;
    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    private promoCodes = PROMO_CODES_COLUMNS;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'codePromo');
    }

    @Hook
    public beforeRouteUpdate(to, from, next): void {
        const tabs = this.$refs['tabs'] as ActivitiesTabs;
        const filtersHolder = this.$refs['filters-holder'] as Filters;

        if (to.name === from.name &&
            !to.params.extra &&
            tabs &&
            filtersHolder) {
            tabs.setBind(this.campaignId);
            filtersHolder.clearFilters();
        }

        next();
    }

    public async mounted(): Promise<void> {
        this.datatable = this.$refs['promo-codes-table'] as DataTable;
        this.dialog = this.$refs['dialog'] as DialogBox;

        this.datatable.setRemoteStore(
            new RemoteStore<DbPromoCode>('PromoCodes'), !shouldExtraSilenceRead(this.extra)
        );
        await this.datatable.applyPermanentFilters([new IdFilterFunction(this.campaignId, 'is', 'campaign')]);

        updateBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.campaign',
            routerLink: '/activities/campaign'
        });

        this.$store.watch(
            () => this.$store.getters['PromoCodeCampaignsReader/promoCodeCampaigns'],
            promoCodeCampaigns => {
                if (!promoCodeCampaigns) {
                    return;
                }

                const campaign = promoCodeCampaigns.find(
                    campaign => campaign.id === this.campaignId
                );

                if (!campaign) {
                    return;
                }

                updateBreadcrumb({
                    id: 'level3',
                    display: campaign.value,
                    routerLink: `/activities/code-promo/${this.campaignId}`
                });
            }
        );

        await this.$store.dispatch('PromoCodeCampaignsReader/promoCodeCampaignsRead', true);

        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addPromoCodeClick(): void {
        this.dialog.openDialog();
    }

    private applyFilters(filters: FilterFunction[]): void {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        (this.$refs['tabs'] as ActivitiesTabs).setBind(`${this.campaignId}/${extra}`);
        (this.$refs['promo-codes-table'] as DataTable).applyFilters(filters);
    }

    private async deleteSeriesClick(): Promise<void> {
        try {
            await this.$store.dispatch('PromoCodes/delete', {
                filters: [[{
                    column: 'campaign',
                    operand: this.campaignId,
                    operator: '=='
                }]]
            });
            await (this.$refs['promo-codes-table'] as DataTable).refresh();
        } catch (error) {
            globalToast(this.$t('messages.deleteError'), 'error');
        }
    }

    private dialogClose(): void {
        this.dialog.closeDialog();
    }

    private async generatePromoCodeClick(): Promise<void> {
        const codeCount = Number((this.$refs['promo-codes-quantity'] as HTMLInputElement).value);
        const values = {
            campaignId: parseInt(this.campaignId, 10),
            count: codeCount
        };

        try {
            await promoService.createBulkCode(values.campaignId, values.count);
            await (this.$refs['promo-codes-table'] as DataTable).refresh();
            this.dialog.closeDialog();
        } catch (error) {
            globalToast(this.$t('activities.promoCodes.messages.codeCreationFailed'), 'error');
        }
    }

    /* PRIVATE */
    private createFilters(): void {
        this.filters = [];
        this.filtersHolderVisible = false;

        this.checkAndReloadFilters();
    }
}
</script>
