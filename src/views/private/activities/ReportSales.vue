<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
.filter-container {
    padding: 1rem 0 0 0;
    grid-column: 1 / -1;
}
</style>

<template>
    <section id="reports-sales" class="activity-wrapper">
        <activities-tabs ref="tabs"/>
        <div ref="filter-container" class="filter-container"></div>
        <button class="btn btn-primary" @click="downloadClick">{{ $t('generic.ui.download') }}</button>
        <dataview ref="dataview" />
    </section>
</template>

<script lang="ts">
import { SalesReportStreams } from '@pictaccio/admin-gui/src/core/types/report';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import {
    DataviewReportDatasource
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/datasource/dataview_report_datasource';
import Dataview from '@pictaccio/admin-gui/src/views/components/widgets/dataview/Dataview.vue';
import {
    DataviewComponent,
    DataviewComponentConfiguration
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_component';
import { DataviewHost } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_host';
import {
    DataviewFiltersHolderParams
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/params/dataview_filtersholder_params';
import {
    DataviewTableRenderer
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/table/dataview_table_renderer';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import { filters, salesColumns } from '@pictaccio/admin-gui/src/views/private/activities/companions/definitions/report';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Sales',
    components: {
        Dataview
    }
})
export default class Sales extends AdminActivities {
    private dataview: Dataview<SalesReportStreams, true>;
    private dataviewHost: DataviewHost<SalesReportStreams, true>;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'reports');
    }

    public mounted(): void {
        super.mounted();

        this.dataview = this.$refs['dataview'] as Dataview<SalesReportStreams, true>;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.reportSales',
            routerLink: '/activities/report-sales'
        });

        this.createDataview();
    }

    /* EVENT HANDLERS */
    private downloadClick(): void {
        this.dataviewHost.setDataDefinition('reportParams', 'renderer', { renderer: 'csv' } as any);
        this.dataviewHost.getData('salesSeries');
        this.dataviewHost.setDataDefinition('reportParams', 'renderer', { renderer: 'json' } as any);
    }

    /* PRIVATE */
    private createDataview(): void {
        const datasource = new DataviewReportDatasource<SalesReportStreams>();
        const filter = new DataviewFiltersHolderParams<SalesReportStreams, true>();
        const tableRenderer = new DataviewTableRenderer<SalesReportStreams, true>(true);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _this = this;

        const download: DataviewComponent<SalesReportStreams, true> = {
            configure(host: DataviewHost<SalesReportStreams, true>): DataviewComponentConfiguration {
                _this.dataviewHost = host;

                return {
                    name: 'download',
                    type: 'params'
                };
            }
        }

        datasource.setReport('sales');
        filter.render(this.$refs['filter-container'] as HTMLElement, filters)
        tableRenderer.setStream('salesSeries');
        tableRenderer.defineColumns(salesColumns, 'salesSeries');

        this.dataview.addComponents([
            datasource,
            filter,
            download,
            tableRenderer
        ]);
        this.dataview.showRenderer('table-renderer', 'default');
    }
}
</script>
