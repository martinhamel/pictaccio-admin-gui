<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';
</style>

<template>
    <section id="categories" class="activity-wrapper">
        <crud-dialog-subject ref="crud-dialog-subject"
                             @update="updateDatatable"/>
        <activities-tabs ref="tabs" :bind="sessionId"/>
        <div class="activity-control table-holder">
            <information-box v-if="isUploading()"
                             :colors="{border: 'hsl(113, 34%, 52%)'}"
                             :icon="['fal', 'check-circle']">
                <p>{{ $t('messages.uploadStarted') }}</p>
            </information-box>
            <photo-swap v-if="photoSwappingStarted && $validateCapability('session:update')"
                        ref="photo-swap"
                        @swap-item-removed="swapItemRemoved"
                        @swap-confirmed="swapConfirmed"
                        @cancel="swapCancel"/>
            <data-table ref="subjects-table"
                        :name="'session-subjects'"
                        :row-selectable="$validateCapability('session:update')"
                        :rows-selectable="true"
                        :tableData="subjects"
                        @row-selected="editRowClick"
                        @control-edit-photo="editRowClick"
                        @control-delete-photo="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selection-changed="applySelectionClick">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="subjects.headers"
                                            :rows="6"
                                            @placeholder-clicked="addSubjectClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('session:create') && archiveSubjectButtons"
                            class="btn btn-primary add"
                            @click="addSubjectClick">
                        {{ $t('activities.subjects.addBtn') }}
                    </button>
                    <inputs-dialog v-if="sessionPhotoSwap"
                                   :right-aligned="true"
                                   :background-colors="{
                        trigger: 'var(--color-accent-primary)',
                        content: 'var(--color-background-tertiary);'
                    }">
                        <template #trigger>
                            <font-awesome-icon :icon="['fas', 'ellipsis-vertical']"/>
                        </template>
                        <template #content>
                            <span v-if="sessionPhotoSwap && $validateCapability('session:update')"
                                  @click="startSwappingClick">
                                {{ $t('activities.subjects.swapSubject') }}
                            </span>
                        </template>
                    </inputs-dialog>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('session:update') && sessionEditItems"
                            class="btn btn-icon-only"
                            name="edit-photo">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('session:delete') && archiveSubjectButtons"
                            class="btn btn-icon-only destructive"
                            name="delete-photo">
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
import { DbSubject } from '@pictaccio/admin-gui/models/db_subject';
import subjectsService from '@pictaccio/admin-gui/services/subjects_service';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/string_filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/views/components/widgets/ActivitiesTabs.vue';
import InformationBox from '@pictaccio/admin-gui/views/components/widgets/InformationBox.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import CrudDialogSubject
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogSubject.vue';
import {
    MANAGE_SUBJECTS_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/manage_subjects_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import InputsDialog from '@pictaccio/admin-gui/views/private/activities/companions/InputsDialog.vue';
import PhotoSwap, {
    SelectionItem,
    SwappingLog
} from '@pictaccio/admin-gui/views/private/activities/companions/PhotoSwap.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import { Component, Hook, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Manage Subjects',
    components: {
        CrudDialogSubject,
        InformationBox,
        PhotoSwap,
        InputsDialog,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class ManageSubjects extends AdminActivities {
    @Prop
    private sessionId: string;
    private sessionTitle: string;
    private photoSwappingStarted = false;
    private crudDialog: CrudDialogSubject;
    private subjects = MANAGE_SUBJECTS_COLUMNS;
    private datatable: DataTable<DbSubject>;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;

    // Feature flags
    private sessionPhotoSwap = environment.features.sessionPhotoSwap;
    private archiveSubjectButtons = environment.features.crudSubjects;
    private archiveFeature = environment.features.archiveDeleteSubject;
    private sessionEditItems = environment.features.sessionEditItems;

    @Hook
    public beforeRouteUpdate(to, from, next): void {
        const tabs = this.$refs['tabs'] as ActivitiesTabs;
        const filtersHolder = this.$refs['filters-holder'] as Filters;

        if (to.name === from.name &&
            !to.params.extra &&
            tabs &&
            filtersHolder) {
            tabs.setBind(this.sessionId);
            filtersHolder.clearFilters();
        }

        next();
    }

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'subjects');
    }

    public async mounted(): Promise<void> {
        super.mounted();
        (this.$refs['tabs'] as ActivitiesTabs).setText(this.$t('activities.subjects.title'));

        this.datatable = this.$refs['subjects-table'] as DataTable<DbSubject>;
        this.datatable.setRemoteStore(
            new RemoteStore<DbSubject>('Subjects'), !shouldExtraSilenceRead(this.extra));
        await this.datatable.applyPermanentFilters([new IdFilterFunction(this.sessionId, 'is', 'session')]);

        await this.$store.dispatch('SessionsReader/sessionsRead');
        this.sessionName();

        this.crudDialog = this.$refs['crud-dialog-subject'] as CrudDialogSubject;
        this.crudDialog.setSessionId(this.sessionId);

        pushBreadcrumb({
            id: 'level2',
            display: this.sessionTitle,
            routerLink: '/activities/subjects/' + this.sessionId
        });
        pushBreadcrumb({
            id: 'level3',
            display: this.$t('activities.tabsTitles.subjects'),
            routerLink: '/activities/subjects/' + this.sessionId
        });
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addSubjectClick(): void {
        if (!this.$validateCapability('session:create')) {
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


        (this.$refs['tabs'] as ActivitiesTabs).setBind(`${this.sessionId}/${extra}`);
        this.datatable.applyFilters(filters);
    }

    private applySelectionClick(status): void {
        if (this.photoSwappingStarted) {
            this.selectionSwapChanged(status);
        }
    }

    private async applySelectionSwapping(): Promise<void> {
        const selectedRowIds = this.datatable.getSelectedRowIds();
        const selectedRows = await this.datatable.query(selectedRowIds);
        const formatedSelection = selectedRows.map(i => {
            const item: SelectionItem = {
                id: i.id.toString(),
                name: i.display_name,
                photos: i.photos
            };
            return item;
        });
        this.$nextTick(() => {
            (this.$refs['photo-swap'] as PhotoSwap).setSelection(formatedSelection);
        });
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
        if (!this.archiveSubjectButtons ||
            this.photoSwappingStarted ||
            !this.$validateCapability('session:update')) {
            return;
        }

        this.crudDialog.openDialog(event.rowId, event.row);
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    private startSwappingClick(): void {
        this.photoSwappingStarted = true;
        this.applySelectionSwapping();
    }

    private swapCancel(): void {
        this.photoSwappingStarted = false;
    }

    private async swapConfirmed(swapLogs: SwappingLog[]): Promise<void> {
        this.photoSwappingStarted = false;

        for (const swapLog of swapLogs) {
            await subjectsService.applyPhotoSwap({
                subjectId1: parseInt(swapLog.idFrom),
                subjectId2: parseInt(swapLog.idTo),
                photoPath: swapLog.photoPath
            })
        }
    }

    private swapItemRemoved(id: string): void {
        this.datatable.unselectRow(id);
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
                    { filterFunction: StringFilterFunction, column: 'display_name' },
                    { filterFunction: StringFilterFunction, column: 'code' },
                    { filterFunction: StringFilterFunction, column: 'unique_code' }
                ]
            }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private isUploading(): boolean {
        return this.$store.getters['UploadStatus/uploads'][this.sessionId]?.progress < 100;
    }

    private selectionSwapChanged(status) {
        const photoSwapper = (this.$refs['photo-swap'] as PhotoSwap);

        if (status.checked) {
            photoSwapper.setSelectionItem({
                id: status.rowId,
                name: status.row.display_name,
                photos: status.row.photos
            });
        } else {
            photoSwapper.removeSelectionItem(status.rowId);
        }
    }

    private sessionName(): void {
        try {
            const session = this.$store.getters['SessionsReader/sessions']
                ?.filter(i => i.id === this.sessionId)[0]
                ?.value;

            this.sessionTitle = session;
            (this.$refs['tabs'] as ActivitiesTabs).setTextAfter(session ?? '');
        } catch (error) {
            // pass
        }
    }

    private async updateDatatable(): Promise<void> {
        await (this.$refs['subjects-table'] as DataTable).refresh();
    }
}
</script>
