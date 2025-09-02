<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.upload-notice {
    grid-column: 1 / -1;
    padding: 2rem 3rem;
    margin-inline: 2rem;
    background-color: var(--color-background-page-3);
    pointer-events: none;
    border: 2px solid currentColor;
    border-radius: $ruler-border-radius;
    color: var(--color-semantic-info);
    transform: translate(0) !important;
}
</style>

<template>
    <section id="session-group-photos" class="activity-wrapper">
        <crud-dialog-subject-group ref="crud-dialog-subject-group"
                                   @update="updateDatatable"/>
        <activities-tabs ref="tabs" :bind="sessionId"/>
        <div ref="groups-container" class="activity-control table-holder">
            <information-box v-if="isUploading()"
                             :colors="{border: 'hsl(113, 34%, 52%)'}"
                             :icon="['fal', 'check-circle']">
                <p>{{ $t('messages.uploadStarted') }}</p>
            </information-box>
            <data-table ref="groups-table"
                        :name="'session-groups'"
                        :row-selectable="$validateCapability('session:update')"
                        :rows-selectable="true"
                        :tableData="groups"
                        @row-selected="editRowClick"
                        @control-edit-photo="editRowClick"
                        @control-delete-photo="deleteRowClick"
                        @reset-filters="resetFilters">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('session:create')"-->
<!--                                   :name-ref="'groups-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.subjectGroups.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="groups-container-tutorial"-->
<!--                                   :name-ref="'groups-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-right_down'"-->
<!--                                   @mounted="getTutorialTargetPosition('groups-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.subjectGroups.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="groups.headers"
                                            :rows="6"
                                            @placeholder-clicked="addSubjectClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('session:create') && archiveSubjectButtons"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addSubjectClick">
                        {{ $t('activities.subjectGroups.addBtn') }}
                    </button>
                    <inputs-dialog v-if="false"
                                   :right-aligned="true"
                                   :background-colors="{
                        trigger: 'var(--color-accent-primary)',
                        content: 'var(--color-background-tertiary)'
                    }">
                        <template #trigger>
                            <font-awesome-icon :icon="['fas', 'ellipsis-vertical']"/>
                        </template>
                        <template #content>
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
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbSubjectGroup } from '@pictaccio/admin-gui/src/models/db_group';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogSubjectGroup
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogSubjectGroup.vue';
import CrudDialogContent from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialogContent.vue';
import {
    MANAGE_SUBJECT_GROUPS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/manage_subject_groups_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import InputsDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/InputsDialog.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Hook, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Manage Subject Groups',
    components: {
        CrudDialogSubjectGroup,
        TutorialText,
        InformationBox,
        InputsDialog,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        CrudDialogContent,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class ManageSubjectGroups extends AdminActivities {
    @Prop
    private sessionId: string;
    private sessionTitle: string;
    private groups = MANAGE_SUBJECT_GROUPS_COLUMNS;
    private crudDialog: CrudDialogSubjectGroup;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;

    // Feature flags
    private archiveSubjectButtons = environment.features.crudSubjects;
    private archiveFeature = environment.features.archiveDeleteSubjectGroup;
    private sessionEditItems = environment.features.sessionEditItems;

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
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'subjects');
    }

    public async mounted(): Promise<void> {
        super.mounted();
        (this.$refs['tabs'] as ActivitiesTabs).setText(this.$t('activities.subjectGroups.title'));

        const table: DataTable = this.$refs['groups-table'] as DataTable;
        table.setRemoteStore(
            new RemoteStore<DbSubjectGroup>('SubjectGroups'), !shouldExtraSilenceRead(this.extra));
        await table.applyPermanentFilters([new IdFilterFunction(this.sessionId, 'is', 'session')]);

        await this.$store.dispatch('SessionsReader/sessionsRead');
        this.sessionName();

        this.crudDialog = this.$refs['crud-dialog-subject-group'] as CrudDialogSubjectGroup;
        this.crudDialog.setSessionId(this.sessionId);

        pushBreadcrumb({
            id: 'level2',
            display: this.sessionTitle,
            routerLink: '/activities/subjects/' + this.sessionId
        });
        pushBreadcrumb({
            id: 'level3',
            display: this.$t('activities.tabsTitles.subjectGroups'),
            routerLink: '/activities/subject-groups/' + this.sessionId
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
        (this.$refs['groups-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
        if (!this.$validateCapability('session:update') || !this.archiveSubjectButtons) {
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
                    { filterFunction: StringFilterFunction, column: 'group' }
                ]
            }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private isUploading(): boolean {
        return this.$store.getters['UploadStatus/uploads'][this.sessionId]?.progress < 100;
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
        await (this.$refs['groups-table'] as DataTable).refresh();
    }
}
</script>
