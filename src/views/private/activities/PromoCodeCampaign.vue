<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

</style>

<template>
    <section id="campaigns" ref="campaign-container" class="activity-wrapper">
        <crud-dialog-campaign ref="crud-dialog-promo-code-campaign"
                              @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="campaign-container"
             class="activity-control table-holder">
            <data-table ref="promo-code-campaigns-table"
                        name="promo-code-campaigns"
                        :tableData="promoCodeCampaigns"
                        :row-selectable="$validateCapability('campaign:update')"
                        @control-view-promo-codes="viewPromoCodesClick"
                        @control-edit-campaign="editRowClick"
                        @control-delete-campaign="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selected="editRowClick">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="promoCodeCampaigns.headers"
                                            :rows="6"
                                            @placeholder-clicked="addPromoCodeCampaignClick"/>
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
                            @click="addPromoCodeCampaignClick">
                        {{ $t('activities.campaign.addBtn')}}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('campaign:read')"
                            class="btn btn-icon-only"
                            name="view-promo-codes">
                        <font-awesome-icon :icon="['far', 'eye']"/>
                    </button>
                    <button v-if="$validateCapability('campaign:update')"
                            class="btn btn-icon-only"
                            name="edit-campaign">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('campaign:delete') && archiveFeature"
                            class="btn btn-icon-only"
                            name="delete-campaign">
                        <font-awesome-icon :icon="['far', 'trash-alt']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbPromoCodeCampaign } from '@pictaccio/admin-gui/src/models/db_promo_code_campaign';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogCampaign
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogCampaign.vue';
import {
    CAMPAIGN_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/campaign_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialOverlay from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialOverlay.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Campaign',
    components: {
        TutorialText,
        TutorialOverlay,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        CrudDialogCampaign,
        PlaceholderDataTable
    }
})
export default class PromoCodeCampaign extends AdminActivities {
    private promoCodeCampaigns = CAMPAIGN_COLUMNS;
    private crudDialog: CrudDialogCampaign;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteCampaign;

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
        (this.$refs['promo-code-campaigns-table'] as DataTable).setRemoteStore(
            new RemoteStore<DbPromoCodeCampaign>('PromoCodeCampaigns'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = this.$refs['crud-dialog-promo-code-campaign'] as CrudDialogCampaign;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.campaign',
            routerLink: '/activities/campaign'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addPromoCodeCampaignClick(): void {
        if (!this.$validateCapability('campaign:create')) {
            return;
        }
        this.crudDialog.openDialog();
    }

    private applyFilters(filters: FilterFunction[]): void {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        (this.$refs['tabs'] as ActivitiesTabs).setBind(extra);
        (this.$refs['promo-code-campaigns-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
        if (!this.$validateCapability('campaign:update')) {
            return;
        }

        this.crudDialog.openDialog(event.rowId, event.row);
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    private viewPromoCodesClick(event): void {
        this.$router.push(`/activities/code-promo/${event.rowId}`);
    }

    /* PRIVATE */
    private createFilters(): void {
        this.filters = [
            {
                pop: true,
                component: MainTextFilterItem,
                name: 'search',
                filters: [
                    { filterFunction: IdFilterFunction, column: 'id' },
                    { filterFunction: StringFilterFunction, column: 'internal_name' }
                ]
            }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private async updateDatatable(): Promise<void> {
        await (this.$refs['promo-code-campaigns-table'] as DataTable).refresh();
    }
}
</script>
