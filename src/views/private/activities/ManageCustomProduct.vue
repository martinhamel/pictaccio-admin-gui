<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

:deep(.list-item) {
    width: min-content;
    white-space: nowrap;
    --color-item-border: hsla(
        var(--color-primary-4-h),
        var(--color-primary-4-s),
        var(--color-primary-4-l),
        0.3);
    margin: 0 0 0.5rem 3.5rem;
    border-bottom: 1px solid var(--color-item-border);
}
</style>

<template>
    <section id="customProducts" class="activity-wrapper">
        <crud-dialog-product-custom ref="crud-dialog"
                                    @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="custom-product-container"
             class="activity-control table-holder">
            <data-table ref="custom-product-table"
                        :name="'customProduct'"
                        :tableData="customProducts"
                        :row-selectable="$validateCapability('background:update')"
                        @control-edit-product="editRowClick"
                        @control-delete-product="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selected="editRowClick">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="customProducts.headers"
                                            :rows="6"
                                            @placeholder-clicked="addCustomProductClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('product:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addCustomProductClick">
                        {{ $t('activities.customProduct.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('product:update')"
                            class="btn btn-icon-only"
                            name="edit-product">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('product:delete') && archiveFeature"
                            class="btn btn-icon-only destructive" name="delete-product">
                        <font-awesome-icon :icon="['far', 'trash-alt']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { FilterDescriptor } from '@pictaccio/admin-gui/core/types/filter_descriptors';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbProductCustomTemplate, CustomProductOptions } from '@pictaccio/admin-gui/models/db_product_custom_template';
import CustomProducts from '@pictaccio/admin-gui/store/modules/custom_products';
import { pushBreadcrumb } from '@pictaccio/admin-gui/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/string_filter_function';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import CrudDialogCatalog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue';
import CrudDialogProductCustom
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogProductCustom.vue';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import CrudDialogContent from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialogContent.vue';
import { CUSTOM_PRODUCT_COLUMNS } from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/custom_product_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import TextFilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/TextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'ManageCustomProduct',
    components: {
        CrudDialogProductCustom,
        CrudDialog,
        TutorialText,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        CrudDialogContent,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class ManageCustomProduct extends AdminActivities {
    private customProducts = CUSTOM_PRODUCT_COLUMNS;
    private crudDialog: CrudDialogProductCustom;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductCustom;

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
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'products');
    }

    public async mounted(): Promise<void> {
        super.mounted();
        (this.$refs['custom-product-table'] as DataTable).setRemoteStore(
            new RemoteStore<DbProductCustomTemplate>('CustomProducts'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialogProductCustom);

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.customProduct',
            routerLink: '/activities/customProduct'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addCustomProductClick(): void {
        if (!this.$validateCapability('product:create')) {
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
        (this.$refs['custom-product-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event) {
        if (!this.$validateCapability('product:update')) {
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
        await (this.$refs['custom-product-table'] as DataTable).refresh();
    }
}
</script>
