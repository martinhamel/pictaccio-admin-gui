<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.session-color {
    margin-top: -0.5rem;
}

.assign {
    display: flex;
    flex-direction: column;
    gap: calc(#{$grid-gap} / 2);
}

.actions-box {
    display: flex;
    flex-direction: row-reverse;
}
</style>

<template>
    <section id="orders-list" class="activity-wrapper">
        <dialog-box ref="crudDialog" @dialog-close="dialogClose"
            :title="$t(`activities.orders.title`) + ' #' + dialogRowSelected?.rowId"
            :dismiss="true" :overlay="true">
            <template #content>
                <div v-if="dialogRowSelected?.colName === 'assignee'" class="assign">
                    <select-assignee/>
                    <select name="internal-step" id="assign-internal-step">
                        <option value="toDo" class="to-do">
                            {{ $t(`activities.orders.status.toDo`) }}
                        </option>
                        <option value="touchups" class="touchups">{{ $t(`activities.orders.status.touchups`) }}</option>
                        <option value="production" class="production">{{
                                $t(`activities.orders.status.production`)
                            }}
                        </option>
                        <option value="packaging" class="packaging">{{
                                $t(`activities.orders.status.packaging`)
                            }}
                        </option>
                        <option value="shippingReady" class="shipping-ready">
                            {{ $t(`activities.orders.status.shippingReady`) }}
                        </option>
                        <option value="error" class="error">{{ $t(`activities.orders.status.error`) }}</option>
                    </select>
                    <textarea name="assign-instructions" id="assign-instructions"></textarea>
                </div>
            </template>
            <template #uiDialog>
                <button class="btn btn-primary">
                    {{ $t(`generic.ui.confirm`) }}
                </button>
            </template>
        </dialog-box>
        <activities-tabs ref="tabs"/>
        <div v-if="userListReady" ref="order-container" class="activity-control table-holder">
            <data-table ref="orders-table"
                        :name="'orders'"
                        :tableData="orders"
                        :rows-selectable="$validateCapability('order:read')"
                        @control-view-order="rowSelected"
                        @reset-filters="resetFilters"
                        @row-selected="rowSelected">
                <template #context-controls>
                    <div class="actions-box">
                        <ellipsis-menu :items="[
                                { id: 'bulkPrintOrder', localeKey: 'activities.orders.bulkPrintOrder' },
                                { id: 'bulkPrintLabel', localeKey: 'activities.orders.bulkPrintLabel' },
                                { id: 'exportContactsNormal', localeKey: 'activities.orders.exportContactsNormal' },
                                { id: 'exportContactsExcel', localeKey: 'activities.orders.exportContactsExcel' }
                            ]"
                           :options="{ focused: 0 }"
                           @bulkPrintOrderClick="bulkPrintOrder"
                           @bulkPrintLabelClick="bulkPrintLabel"
                           @exportContactsNormalClick="exportContactsNormal"
                           @exportContactsExcelClick="exportContactsExcel"/>
                    </div>
                </template>
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowedFilters="filters"
                                    @filters-visibility-changed="recalculateDatatablePos"
                                    @apply-filters="applyFilters"/>
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="order-container-table-tutorial"-->
<!--                                   :name-ref="'order-container-table-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 -1rem', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-right_down'"-->
<!--                                   @mounted="getTutorialTargetPosition('order-container',-->
<!--                                   '.table-holder, .placeholder-container', 'table')">-->
<!--                        {{ $t('activities.manageSessions.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="orders.headers"
                                            :rows="6"/>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('order:read')"
                            class="btn btn-icon-only"
                            name="view-order">
                        <font-awesome-icon :icon="['far', 'eye']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import orderService from '@pictaccio/admin-gui/src/services/order_service';
import { BooleanFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/boolean_filter_function';
import { DateFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/date_filter_function';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { UuidFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/uuid_filter_function';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import EllipsisMenu from '@pictaccio/admin-gui/src/views/components/widgets/EllipsisMenu.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import {
    ORDERS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/orders_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import AssigneeFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/AssigneeFilterItem.vue';
import BooleanFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/BooleanFilterItem.vue';
import DateFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/DateFilterItem.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import MultiListFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MultiListFilterItem.vue';
import TextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/TextFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import SelectAssignee from '@pictaccio/admin-gui/src/views/private/activities/companions/SelectAssignee.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Language } from '@pictaccio/shared/src/types/language';
import { SpreadsheetExportFormat } from '@pictaccio/shared/src/types/spreadsheet_export_type';
import { Component, Hook } from 'vue-facing-decorator';

/**
 * Upon receiving the @event apply-filters from Filters, will call the function applyFilters in the table
 * ref as 'order-table' with the FilterFunctionInterface[] from the event as parameter.
 */
@Component({
    name: 'Orders',
    components: {
        EllipsisMenu,
        TutorialText,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        SelectAssignee,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class Orders extends AdminActivities {
    private orders = ORDERS_COLUMNS;
    private dialogRowSelected: any = null;
    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;
    private userListReady = false;

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
            this.$store.dispatch('SessionsReader/sessionsRead'),
            this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead')
        ]);

        this.createFilters();
    }

    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'orders');
    }

    public async mounted(): Promise<void> {
        super.mounted();

        this.$store.watch(() => this.$store.getters['User/usersList'], () => {
            this.userListReady = true;

            this.$nextTick(() => {
                (this.$refs['orders-table'] as DataTable).setRemoteStore(
                    new RemoteStore('Orders'), !shouldExtraSilenceRead(this.extra));

                if (this.$route.query && this.$route.query['filter-id'] &&
                        !Array.isArray(this.$route.query['filter-id'])) {
                    const ids = this.$route.query['filter-id'].split(',');
                    this.applyFilters([new IdFilterFunction(ids, 'is', 'id')]);
                    this.$nextTick(() => {
                        (this.$refs['filters-holder'] as Filters)
                            .setSearchFilters(this.$route.query['filter-id'].toString());
                    });
                }
            });
        });

        try {
            this.$store.dispatch('User/readUsersList', true);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    /* EVENT HANDLERS */
    private applyFilters(filters: FilterFunction[]): void {
        const extra = this.updateUrlExtra();

        (this.$refs['tabs'] as ActivitiesTabs).setBind(extra);
        (this.$refs['orders-table'] as DataTable).applyFilters(filters);
    }

    private async bulkPrintLabel(): Promise<void> {
        const selection = Object.values((this.$refs['orders-table'] as DataTable).getSelectedRows())
            .map(i => parseInt(i, 10));

        if (selection.length === 0) {
            globalPrompt({
                title: this.$t('activities.orders.bulkPrintLabelNoSelectionTitle'),
                message: this.$t('activities.orders.bulkPrintLabelNoSelectionMessage'),
                buttonType: 'ok'
            });
            return;
        }

        try {
            const token = await orderService.generatePrintToken(selection);
            document.cookie = `printToken=${token}; path=/;Max-Age=120${environment.production ? '; secure' : ''}`;
            window.open(this.navigatePrint('shipping-labels', selection), '_blank').focus();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async bulkPrintOrder(): Promise<void> {
        const selection = Object.values((this.$refs['orders-table'] as DataTable).getSelectedRows())
            .map(i => parseInt(i, 10));

        if (selection.length === 0) {
            globalPrompt({
                title: this.$t('activities.orders.bulkPrintOrderNoSelectionTitle'),
                message: this.$t('activities.orders.bulkPrintOrderNoSelectionMessage'),
                buttonType: 'ok'
            });
            return;
        }

        try {
            const token = await orderService.generatePrintToken(selection);
            document.cookie = `printToken=${token}; path=/;Max-Age=120${environment.production ? '; secure' : ''}`;
            window.open(this.navigatePrint('orders', selection), '_blank').focus();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private dialogClose(): void {
        this.closeDialog('crudDialog');
        this.dialogRowSelected = null;
        this.$forceUpdate();
    }

    private exportContactsNormal(): void {
        this.exportContacts('csv-normal');
    }

    private exportContactsExcel(): void {
        this.exportContacts('csv-excel');
    }

    private navigatePrint(path: string, selection: number[]): string {
        return `${environment.printServiceUrl}${path}?q=${selection.join(',')}&l=${this.$i18n.locale}`;
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    private rowSelected(event: any): void {
        this.$router.push({
            name: 'View Order',
            params: { orderId: event.rowId }
        });
    }

    /* PRIVATE */
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
                pop: false,
                component: TextFilterItem,
                name: 'searchSubjectName',
                filters: [
                    { filterFunction: StringFilterFunction, column: '_subject-name' }
                ]
            },
            {
                pop: false,
                component: TextFilterItem,
                name: 'searchContactName',
                filters: [
                    { filterFunction: StringFilterFunction, column: '_contact-name' }
                ]
            },
            {
                pop: false,
                component: TextFilterItem,
                name: 'searchContactPhone',
                filters: [
                    { filterFunction: StringFilterFunction, column: '_contact-phone' }
                ]
            },
            {
                pop: false,
                component: TextFilterItem,
                name: 'searchContactEmail',
                filters: [
                    { filterFunction: StringFilterFunction, column: '_contact-email' }
                ]
            },
            {
                pop: true,
                component: MultiListFilterItem,
                datasource: GenericDataSource.from<
                    never,
                    null,
                    string,
                    DataSourceOption<string, string>
                >(null, 'session', [{
                    id: 'options',
                    value: this.$store.getters['SessionsReader/sessions'].map(session => ({
                        id: session.id,
                        value: session.value
                    }))
                }]),
                name: 'session',
                filters: [
                    { filterFunction: IdFilterFunction, column: '_session-id' }
                ]
            },
            {
                pop: true,
                component: MultiListFilterItem,
                datasource: GenericDataSource.from<
                    never,
                    null,
                    string,
                    DataSourceOption<string, string>
                >(null, 'deliveryOption', [{
                    id: 'options',
                    value: this.$store.getters['ShippingOptionsReader/shippingOptions'].map(option => ({
                        id: option.id,
                        value: option.value
                    }))
                }]),
                name: 'deliveryOption',
                filters: [
                    { filterFunction: IdFilterFunction, column: '_delivery-option-id' }
                ]
            },
            {
                pop: true,
                component: DateFilterItem,
                name: 'date',
                filters: [
                    { filterFunction: DateFilterFunction, column: 'created_on' }
                ]
            },
            {
                pop: true,
                component: TextFilterItem,
                name: 'group',
                filters: [
                    { filterFunction: StringFilterFunction, column: '_subject-group' }
                ]
            },
            {
                pop: true,
                component: AssigneeFilterItem,
                name: 'assignee',
                filters: [
                    { filterFunction: UuidFilterFunction, column: '_admin-assignee' }
                ]
            },
            {
                pop: false,
                component: BooleanFilterItem,
                name: 'paid',
                filters: [
                    { filterFunction: BooleanFilterFunction, column: 'paid' }
                ]
            }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private async exportContacts(format: SpreadsheetExportFormat): Promise<void> {
        const selection = (this.$refs['orders-table'] as DataTable).getSelectedRows();

        if (selection.length === 0) {
            await globalPrompt({
                title: this.$t('activities.orders.exportContactsNoSelectionTitle'),
                message: this.$t('activities.orders.exportContactsNoSelectionMessage'),
                buttonType: 'ok'
            });
            return;
        }

        try {
            const csvFile = await orderService.exportContacts(selection, this.$i18n.locale as Language, format);
            const a = document.createElement('a');
            const url = URL.createObjectURL(csvFile);
            a.setAttribute('href', url);
            a.setAttribute('download', csvFile.name);
            a.click();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private recalculateDatatablePos(): void {
        this.$nextTick(() => {
            (this.$refs['orders-table'] as DataTable).recalculateDatatablePos()
        });
    }

    private updateUrlExtra(): string {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        return extra;
    }
}
</script>
