<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
.explanation {
    grid-column: 1/-1;
    font-size: 1.5rem;
}
</style>

<template>
    <section id="crosssells" class="activity-wrapper">
        <crud-dialog-crosssell ref="crud-dialog-cross-sells"
                               @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="cross-sell-container" class="activity-control table-holder">
            <data-table ref="cross-sell-table"
                        :name="'cross-sell'"
                        :tableData="crosssells"
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
<!--                                   :name-ref="'cross-sell-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.crosssells.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="cross-sell-container-tutorial"-->
<!--                                   :name-ref="'cross-sell-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_down'"-->
<!--                                   @mounted="getTutorialTargetPosition('cross-sell-container',-->
<!--                                   '.table-products, .placeholder-container')">-->
<!--                        {{ $t('activities.crosssells.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="crosssells.headers"
                                            :rows="6"
                                            @placeholder-clicked="addCrosssellClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('product:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addCrosssellClick">
                        {{ $t('activities.crosssells.addBtn') }}
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
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbCrosssell } from '@pictaccio/admin-gui/src/models/db_crosssell';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogCrosssell
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogCrosssell.vue';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import CrudDialogContent from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialogContent.vue';
import {
    CROSSSELL_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/crosssell_columns';
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
    name: 'Cross sells',
    components: {
        CrudDialogCrosssell,
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
export default class Crosssells extends AdminActivities {
    private crosssells = CROSSSELL_COLUMNS;
    private crudDialog: CrudDialogCrosssell;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteCrosssell;

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
    public async beforeCreate(): Promise<void> {
        await this.$store.dispatch('ProductsReader/productsRead');
    }

    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'campaign');
    }

    public async mounted(): Promise<void> {
        super.mounted();
        (this.$refs['cross-sell-table'] as DataTable).setRemoteStore(
            new RemoteStore<DbCrosssell>('Crosssells'), !shouldExtraSilenceRead(this.extra));

        this.crudDialog = this.$refs['crud-dialog-cross-sells'] as CrudDialogCrosssell;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.crosssells',
            routerLink: '/activities/crosssells'
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addCrosssellClick(): void {
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
        (this.$refs['cross-sell-table'] as DataTable).applyFilters(filters);
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
        await (this.$refs['cross-sell-table'] as DataTable).refresh();
    }
}
</script>
