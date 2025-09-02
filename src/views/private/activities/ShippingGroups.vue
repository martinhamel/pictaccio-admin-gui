<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
</style>

<template>
    <section id="shipping-groups" class="activity-wrapper">
        <crud-dialog-delivery-group ref="crud-dialog"
                                    @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="shipping-groups-container" class="activity-control table-holder">
            <data-table ref="shipping-groups-table"
                        :name="'shipping-groups'"
                        :tableData="shippingGroups"
                        :row-selectable="$validateCapability('shipping:update')"
                        @control-edit-shipping="editRowClick"
                        @control-delete-shipping="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selected="editRowClick">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('shipping:create')"-->
<!--                                   :name-ref="'shipping-groups-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.shippingGroups.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="shipping-groups-container-tutorial"-->
<!--                                   :name-ref="'shipping-groups-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-left_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('shipping-groups-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.shippingGroups.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="shippingGroups.headers"
                                            :rows="6"
                                            @placeholder-clicked="addShippingGroupClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('shipping:create')"
                            class="btn btn-primary add"
                            ref="add-btn"
                            @click="addShippingGroupClick">
                        {{ $t('activities.shippingGroups.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('shipping:update')"
                            class="btn btn-icon-only"
                            name="edit-shipping">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('shipping:delete') && archiveFeature"
                            class="btn btn-icon-only destructive" name="delete-shipping">
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
import { DbDeliveryGroup } from '@pictaccio/admin-gui/src/models/db_delivery_group';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogDeliveryGroup
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogDeliveryGroup.vue';
import {
    SHIPPING_GROUP_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/shipping_group_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Shipping Groups',
    components: {
        CrudDialogDeliveryGroup,
        TutorialText,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class ShippingGroups extends AdminActivities {
    private crudDialog: CrudDialogDeliveryGroup;
    private shippingGroups = SHIPPING_GROUP_COLUMNS;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteDeliveryGroup;

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

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'shipping');
    }

    public mounted(): void {
        const dataTable = this.$refs['shipping-groups-table'] as DataTable;

        super.mounted();
        dataTable.setRemoteStore(
            new RemoteStore<DbDeliveryGroup>('ShippingGroups'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialogDeliveryGroup);

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.shippingGroups',
            routerLink: '/activities/shipping-groups'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addShippingGroupClick(): void {
        if (!this.$validateCapability('shipping:create')) {
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
        (this.$refs['shipping-groups-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
        if (!this.$validateCapability('shipping:update')) {
            return;
        }

        this.crudDialog.openDialog(event.rowId, event.row);
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
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
        await (this.$refs['shipping-groups-table'] as DataTable).refresh();
    }
}
</script>
