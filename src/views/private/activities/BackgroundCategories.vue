<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';
</style>

<template>
    <section id="categories" class="activity-wrapper">
        <crud-dialog-background-category ref="crud-dialog-background-category"
                                         @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="background-categories-container"
             class="activity-control table-holder">
            <data-table ref="background-category-table"
                        :name="'background-category'"
                        :tableData="backgroundCategories"
                        :row-selectable="$validateCapability('background:update')"
                        @control-edit-background="editRowClick"
                        @control-delete-background="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selected="editRowClick">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    v-show="false"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('background:create')"-->
<!--                                   :name-ref="'background-categories-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.backgroundCategories.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="background-categories-container-tutorial"-->
<!--                                   :name-ref="'background-categories-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-right_down'"-->
<!--                                   @mounted="getTutorialTargetPosition('background-categories-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.backgroundCategories.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="backgroundCategories.headers"
                                            :rows="6"
                                            @placeholder-clicked="addBackgroundCategoryClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('background:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addBackgroundCategoryClick">
                        {{ $t('activities.backgroundCategories.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('background:update')"
                            class="btn btn-icon-only"
                            name="edit-background">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('background:delete') && archiveFeature"
                            class="btn btn-icon-only destructive" name="delete-background">
                        <font-awesome-icon :icon="['far', 'trash-alt']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FilterDescriptor } from '@pictaccio/admin-gui/core/types/filter_descriptors';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbBackgroundCategory } from '@pictaccio/admin-gui/models/db_background_category';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/utils/global_breadcrumb';
import { IdFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/string_filter_function';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import CrudDialogBackgroundCategory
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogBackgroundCategory.vue';
import {
    BACKGROUND_CATEGORIES_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/background_categories_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Background Categories',
    components: {
        CrudDialogBackgroundCategory,
        TutorialText,
        FontAwesomeIcon,
        DataTable,
        DocsLink,
        FiltersHolder: Filters,
        PlaceholderDataTable
    }
})
export default class BackgroundCategories extends AdminActivities {
    private backgroundCategories = BACKGROUND_CATEGORIES_COLUMNS;
    private crudDialog: CrudDialogBackgroundCategory;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteBackgroundCategory;

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
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'backgrounds');
    }

    public mounted(): void {
        super.mounted();
        (this.$refs['background-category-table'] as DataTable).setRemoteStore(
            new RemoteStore<DbBackgroundCategory>('BackgroundCategories'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = this.$refs['crud-dialog-background-category'] as CrudDialogBackgroundCategory;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.backgroundCategories',
            routerLink: '/activities/background-categories'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addBackgroundCategoryClick(): void {
        if (!this.$validateCapability('background:create')) {
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
        (this.$refs['background-category-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event) {
        if (!this.$validateCapability('background:update')) {
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
            // {
            //     pop: true,
            //     component: MainTextFilterItem,
            //     name: 'search',
            //     filters: [
            //         { filterFunction: IdFilterFunction, column: 'id' },
            //         { filterFunction: StringFilterFunction, column: 'internal_name' }
            //     ]
            // }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private async updateDatatable(): Promise<void> {
        await (this.$refs['background-category-table'] as DataTable).refresh();
    }
}
</script>
