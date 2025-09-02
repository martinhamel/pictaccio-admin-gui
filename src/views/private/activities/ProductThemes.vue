<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

:deep(td.table-variant) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 10.5rem;
}
</style>

<template>
    <section id="product-themes" class="activity-wrapper">
        <crud-dialog-product-theme ref="crud-dialog-product-themes"
                                   @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="product-themes-container" class="activity-control table-holder">
            <data-table ref="product-themes-table"
                        :name="'product-themes'"
                        :tableData="productThemes"
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
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('product:create')"-->
<!--                                   :name-ref="'product-themes-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.productThemes.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="product-themes-container-tutorial"-->
<!--                                   :name-ref="'product-themes-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-left_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('product-themes-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.productThemes.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="productThemes.headers"
                                            :rows="6"
                                            @placeholder-clicked="addProductThemeClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('product:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addProductThemeClick">
                        {{ $t('activities.productThemes.addBtn') }}
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
import { DbProductThemeSet } from '@pictaccio/admin-gui/src/models/db_product_theme_set';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogProductTheme
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import CrudDialogContent from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialogContent.vue';
import {
    PRODUCT_THEMES_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/product_themes_columns';
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
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'ProductThemes',
    components: {
        CrudDialogProductTheme,
        TutorialText,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        CrudDialogContent,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class ProductThemes extends AdminActivities {
    private crudDialog: CrudDialogProductTheme;
    private productThemes = PRODUCT_THEMES_COLUMNS;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductTheme;

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
        const dataTable = this.$refs['product-themes-table'] as DataTable;

        super.mounted();
        dataTable.setRemoteStore(
            new RemoteStore<DbProductThemeSet>('ProductThemes'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = this.$refs['crud-dialog-product-themes'] as CrudDialogProductTheme;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.productThemes',
            routerLink: '/activities/product-themes'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addProductThemeClick(): void {
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
        (this.$refs['product-themes-table'] as DataTable).applyFilters(filters);
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
        await (this.$refs['product-themes-table'] as DataTable).refresh();
    }
}
</script>
