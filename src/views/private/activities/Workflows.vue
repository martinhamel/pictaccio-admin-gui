<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
.workflows-infos {
    grid-template-columns: 1fr 1fr !important;

    [type=text] {
        grid-column: unset !important;
    }

    .image-label,
    .image-input {
        grid-column: 2 / -1 !important;
    }

    .image-label {
        grid-row: 1 / 2;
    }

    .image-input {
        grid-row: 2 / 7;
    }
}
</style>

<template>
    <section id="categories" class="activity-wrapper">
        <crud-dialog-workflow ref="crud-dialog-workflows"
                              @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="workflows-container" class="activity-control table-holder">
            <data-table :tableData="workflows"
                        :name="'workflows'"
                        ref="workflows-table"
                        :row-selectable="$validateCapability('session:update')"
                        @control-edit-session="editRowClick"
                        @control-delete-session="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selected="controlsActivated">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('session:create')"-->
<!--                                   :name-ref="'categories-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.categories.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="workflows-container-tutorial"-->
<!--                                   :name-ref="'workflows-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-right_down'"-->
<!--                                   @mounted="getTutorialTargetPosition('workflows-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.categories.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="workflows.headers"
                                            :rows="6"
                                            @placeholder-clicked="addWorkflowClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('session:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addWorkflowClick">
                        {{ $t('activities.workflows.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('session:update')"
                            class="btn btn-icon-only"
                            name="edit-session">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('session:delete') && archiveFeature"
                            class="btn btn-icon-only destructive" name="delete-session">
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
import { DbWorkflow } from '@pictaccio/admin-gui/src/models/db_workflow';
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
import CrudDialogWorkflow
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogWorkflow.vue';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import CrudDialogContent from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialogContent.vue';
import {
    WORKFLOWS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/workflows_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import TextFilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/TextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Workflows',
    components: {
        CrudDialogWorkflow,
        CrudDialog,
        TutorialText,
        FontAwesomeIcon,
        DataTable,
        DocsLink,
        FiltersHolder: Filters,
        PlaceholderDataTable,
        CrudDialogContent
    }
})
export default class Workflows extends AdminActivities {
    private crudDialog: CrudDialogWorkflow
    private workflows = WORKFLOWS_COLUMNS;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteWorkflow;

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
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'workflows');
    }

    public mounted(): void {
        const dataTable = this.$refs['workflows-table'] as DataTable;

        super.mounted();
        dataTable.setRemoteStore(
            new RemoteStore<DbWorkflow>('Workflows'), !shouldExtraSilenceRead(this.extra));
        this.crudDialog = this.$refs['crud-dialog-workflows'] as CrudDialogWorkflow;
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addWorkflowClick() {
        if (!this.$validateCapability('session:create')) {
            return;
        }
        this.crudDialog.openDialog();
    }

    private applyFilters(filters: FilterFunction[]) {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        (this.$refs['tabs'] as ActivitiesTabs).setBind(extra);
        (this.$refs['workflows-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event) {
        if (!this.$validateCapability('session:update')) {
            return;
        }

        this.crudDialog.openDialog(event.rowId, event.row);
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    /* PRIVATE */
    private controlsActivated(event: any) {
        if (!this.$validateCapability('session:update')) {
            return;
        }
        this.editRowClick(event);
    }

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
        await (this.$refs['workflows-table'] as DataTable).refresh();
    }
}
</script>
