<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
</style>

<template>
    <section id="categories" class="activity-wrapper">
        <crud-dialog-product-category ref="crud-dialog-product-categories"
                                      @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="product-category-container" class="activity-control table-holder">
            <data-table ref="product-category-table"
                        :name="'product-categories'"
                        :tableData="categories"
                        :row-selectable="$validateCapability('product:update')"
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
                    <tutorial-text ref="add-btn-tutorial"
                                   v-if="$validateCapability('product:create')"
                                   :name-ref="'product-category-add-btn-tutorial'"
                                   :background-shape="'blob-h-1'"
                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"
                                   :orientation="'top-right_up'"
                                   @mounted="getTutorialTargetPosition('add-btn')"
                                   :targetQuery="'.btn.btn-primary.add'">
                        {{ $t('activities.productCategories.tutorial.addBtn') }}
                    </tutorial-text>
                    <tutorial-text ref="product-category-container-tutorial"
                                   :name-ref="'product-category-container-tutorial'"
                                   :background-shape="'blob-h-1'"
                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"
                                   :orientation="'bottom-left_up'"
                                   @mounted="getTutorialTargetPosition('product-category-container',
                                   '.table-holder, .placeholder-container')"
                                   :targetQuery="'.table-holder .table-holder'">
                        {{ $t('activities.productCategories.tutorial.whatIs') }}
                    </tutorial-text>
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="categories.headers"
                                            :rows="6"
                                            @placeholder-clicked="addProductCategoryClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('product:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addProductCategoryClick">
                        {{ $t('activities.productCategories.addBtn') }}
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
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/src/core/types/data_source_event_listeners';
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbProductCategory } from '@pictaccio/admin-gui/src/models/db_product_category';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogProductCategory
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import CrudDialogContent from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialogContent.vue';
import {
    PRODUCT_CATEGORIES_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/product_categories_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import TextFilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/TextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Product Categories',
    components: {
        CrudDialogProductCategory,
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
export default class ProductCategories extends AdminActivities {
    private crudDialog: CrudDialogProductCategory;
    private categories = PRODUCT_CATEGORIES_COLUMNS;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductCategory;

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

    public mounted(): void {
        const dataTable = this.$refs['product-category-table'] as DataTable;

        super.mounted();
        dataTable.setRemoteStore(
            new RemoteStore<DbProductCategory>('ProductCategories'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = this.$refs['crud-dialog-product-categories'] as CrudDialogProductCategory;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.productCategories',
            routerLink: '/activities/product-categories'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addProductCategoryClick(): void {
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
        (this.$refs['product-category-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
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
        await (this.$refs['product-category-table'] as DataTable).refresh();
    }
}
</script>
