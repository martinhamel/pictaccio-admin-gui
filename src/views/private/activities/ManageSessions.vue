<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.session-color {
    div {
        width: 2rem;
        height: 2rem;
        background-color: currentColor;
        margin: auto;
    }
}

.subjects {
    order: -1 !important;
    margin-right: auto;
}

:deep(.instructions) {
    margin-top: 2rem;
}
</style>

<template>
    <section id="manage-sessions" class="activity-wrapper">
        <crud-dialog-manage-session ref="crud-dialog"
                                    @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <store-availability-info/>
        <div ref="sessions-container" class="activity-control table-holder">
            <data-table :tableData="sessions"
                        :name="'sessions'"
                        ref="sessions-table"
                        :row-selectable="$validateCapability('session:update')"
                        @row-counted="checkIfTableHasRow"
                        @row-selected="editRowClick"
                        @reset-filters="resetFilters"
                        @control-view-session="viewSessionClick"
                        @control-edit-session="editRow">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowedFilters="filters"
                                    @apply-filters="applyFilters"/>
                </template>
                <template #tutorial>
                    <tutorial-text ref="btn-start-create-session-tutorial"
                                   :name-ref="'btn-start-create-session-tutorial'"
                                   :background-shape="'blob-h-1'"
                                   :orientation="'top-right_up'"
                                   :ui-offset="{ global: '-55px 0' }"
                                   :readiness-condition="() => $validateCapability('session:create') &&
                                   $store.getters['StoreConfig/hasWatermark']"
                                   :targetQuery="'.btn.btn-primary.btn-start-create-session'">
                        {{ $t('activities.manageSessions.tutorial.addBtn') }}
                    </tutorial-text>
                    <tutorial-text ref="btn-start-create-session-no-watermark-tutorial"
                                   :name-ref="'btn-start-create-session-no-watermark-tutorial'"
                                   :background-shape="'blob-h-3'"
                                   :orientation="'top-right_up'"
                                   :ui-offset="{ global: '-55px 0' }"
                                   :readiness-condition="() => $validateCapability('session:create') &&
                                   !$store.getters['StoreConfig/hasWatermark']"
                                   :targetQuery="'.btn.btn-primary.btn-start-create-session'">
                        <span v-html="$t('activities.manageSessions.tutorial.addBtnNoWatermark')"></span>
                    </tutorial-text>
                    <tutorial-text ref="settings-watermark-tutorial"
                                   :name-ref="'settings-watermark-tutorial'"
                                   :background-shape="'blob-h-2'"
                                   :orientation="'bottom-left_down'"
                                   :readiness-condition="() => !$store.getters['StoreConfig/hasWatermark']"
                                   :targetQuery="'#side-bar-nav .settings'">
                        {{ $t('activities.manageSessions.tutorial.settingsNoWatermark') }}
                    </tutorial-text>
                    <tutorial-text ref="sessions-container-table-tutorial"
                                   :name-ref="'sessions-container-table-tutorial'"
                                   :background-shape="'blob-h-1'"
                                   :orientation="'bottom-right_down'"
                                   :readiness-condition="() => $store.getters['StoreConfig/hasWatermark']"
                                   :targetQuery="'.table-holder .table-holder'">
                        {{ $t('activities.manageSessions.tutorial.whatIs') }}
                    </tutorial-text>
                    <tutorial-text ref="sessions-container-table-controller-tutorial"
                                   :name-ref="'sessions-container-table-controller-tutorial'"
                                   :background-shape="'blob-h-1'"
                                   :orientation="'top-right_down'"
                                   :readiness-condition="() => tableHasRows &&
                                   $store.getters['StoreConfig/hasWatermark']"
                                   :target-focus="true"
                                   :ui-offset="{ global: '-15px 2px' }"
                                   :targetQuery="'.table-holder .row-control'">
                        {{ $t('activities.manageSessions.tutorial.seeSubject') }}
                    </tutorial-text>
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="sessions.headers"
                                            :rows="6"
                                            @placeholder-clicked="startCreateSession"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('session:create')"
                            class="btn btn-primary btn-start-create-session"
                            ref="btn-start-create-session"
                            :disabled="!storeConfigured || !storeConfigured.isReady"
                            @click="startCreateSession">
                            {{ $t('activities.manageSessions.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('session:read')"
                            class="btn btn-icon-only"
                            name="view-session">
                        <font-awesome-icon :icon="['far', 'eye']"/>
                    </button>
                    <button v-if="$validateCapability('session:update')"
                            class="btn btn-icon-only"
                            name="edit-session">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DataSourceOption } from '@pictaccio/admin-gui/core/types/data_source';
import { FilterDescriptor } from '@pictaccio/admin-gui/core/types/filter_descriptors';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { DbSession } from '@pictaccio/admin-gui/models/db_session';
import router from '@pictaccio/admin-gui/router';
import { BooleanFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/boolean_filter_function';
import { DateFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/date_filter_function';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/id_filter_function';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/views/components/widgets/ActivitiesTabs.vue';
import StoreAvailabilityInfo from '@pictaccio/admin-gui/views/components/widgets/StoreAvailabilityInfo.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import TooltipBubble from '@pictaccio/admin-gui/views/components/widgets/TooltipBubble.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import CrudDialogManageSession
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogManageSession.vue';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import CrudDialogContent from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialogContent.vue';
import {
    MANAGE_SESSIONS_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/manage_sessions_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import BooleanFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/BooleanFilterItem.vue';
import DateFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/DateFilterItem.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import MultiListFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MultiListFilterItem.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/views/private/activities/companions/TutorialText.vue';
import { StoreConfigurationStatus } from '@pictaccio/shared/types/store_status';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Manage Sessions',
    components: {
        StoreAvailabilityInfo,
        CrudDialogManageSession,
        CrudDialog,
        TutorialText,
        TooltipBubble,
        Tooltip,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        CrudDialogContent,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class ManageSessions extends AdminActivities {
    private editId: number;
    private sessions = MANAGE_SESSIONS_COLUMNS;
    private crudDialog: CrudDialogManageSession;
    private hints: Record<string, boolean> = {
        btnStartCreateSession: false
    }

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    private storeConfigured: StoreConfigurationStatus = null;

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
        await Promise.all([
            this.$store.dispatch('WorkflowsReader/workflowsRead')
        ]);

        this.createFilters();
    }

    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'manageSessions');
    }

    public async mounted(): Promise<void> {
        const dataTable: DataTable<DbSession> = this.$refs['sessions-table'] as DataTable<DbSession>;

        super.mounted();
        dataTable.setRemoteStore(
            new RemoteStore<DbSession>('Sessions'), !shouldExtraSilenceRead(this.extra));
        await dataTable.applyPermanentFilters([new BooleanFilterFunction('false', 'is', 'archived')], true);

        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialogManageSession);

        this.$store.watch(() => this.$store.getters['StoreStatus/storeConfigured'],
            () => {
                this.storeConfigured = this.$store.getters['StoreStatus/storeConfigured'];
            });
        await this.$store.dispatch('StoreStatus/checkStoreConfigured');
    }

    /* EVENT HANDLERS */
    private applyFilters(filters: FilterFunction[]): void {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        (this.$refs['tabs'] as ActivitiesTabs).setBind(extra);
        (this.$refs['sessions-table'] as DataTable).applyFilters(filters);
    }

    private async archiveClick(event): Promise<void> {
        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRow(event): void {
        if (!this.$validateCapability('session:update')) {
            return;
        }

        this.crudDialog.openDialog(event.rowId, event.row);
    }

    private editRowClick(event): void {
        switch (event.colName) {
        case 'controls':
            this.editId = event.rowId;
            break;
        default:
            this.editRow(event);
            break;
        }
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    private seeSubjectsClick(): void {
        router.push(`/activities/subjects/${this.editId}`);
    }

    private startCreateSession(): void {
        if (this.$validateCapability('session:create')) {
            router.push('/activities/create-session');
        }
    }

    private viewSessionClick(event): void {
        router.push(`/activities/subjects/${event.rowId}`);
    }

    /* PRIVATE */
    private anchor(ref: string): Node {
        return this.$refs[ref] as Node;
    }

    private createFilters(): void {
        this.filters = [
            // {
            //     pop: true,
            //     component: MainTextFilterItem,
            //     name: 'search',
            //     filters: [
            //         { filterFunction: IdFilterFunction, column: 'id' }
            //     ]
            // },
            {
                pop: true,
                component: DateFilterItem,
                name: 'publishDate',
                filters: [
                    { filterFunction: DateFilterFunction, column: 'publish_date' }
                ]
            },
            {
                pop: true,
                component: DateFilterItem,
                name: 'expireDate',
                filters: [
                    { filterFunction: DateFilterFunction, column: 'expire_date' }
                ]
            },
            // {
            //     pop: false,
            //     component: BooleanFilterItem,
            //     name: 'archived',
            //     filters: [
            //         { filterFunction: BooleanFilterFunction, column: 'archived' }
            //     ]
            // },
            {
                pop: true,
                component: MultiListFilterItem,
                datasource: GenericDataSource.from<
                    never,
                    null,
                    string,
                    DataSourceOption<string, string>
                >(null, 'workflow_id', [{
                    id: 'options',
                    value: this.$store.getters['WorkflowsReader/workflows'].map(category => ({
                        id: category.id,
                        value: category.value
                    }))
                }]),
                name: 'workflow',
                filters: [
                    { filterFunction: IdFilterFunction, column: '_workflow_id' }
                ]
            }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private async updateDatatable(): Promise<void> {
        await (this.$refs['sessions-table'] as DataTable).refresh();
    }
}
</script>
