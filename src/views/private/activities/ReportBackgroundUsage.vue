<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

</style>

<template>
    <section id="reports-background" class="activity-wrapper">
        <activities-tabs ref="tabs"/>
        <div ref="filter-container" class="filter-container"></div>
        <dataview ref="dataview" />
    </section>
</template>

<script lang="ts">
import { DbBackground } from '@pictaccio/admin-gui/models/db_background';
import { pushBreadcrumb } from '@pictaccio/admin-gui/utils/global_breadcrumb';
import {
    DataviewDatatableDatasource
} from '@pictaccio/admin-gui/views/components/widgets/dataview/datasource/dataview_datatable_datasource';
import Dataview from '@pictaccio/admin-gui/views/components/widgets/dataview/Dataview.vue';
import {
    DataviewFiltersHolderParams
} from '@pictaccio/admin-gui/views/components/widgets/dataview/params/dataview_filtersholder_params';
import {
    DataviewTableRenderer
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/table/dataview_table_renderer';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import { columns, filters } from '@pictaccio/admin-gui/views/private/activities/companions/definitions/background';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Report Background Usage',
    components: {
        Dataview
    }
})
export default class ReportBackgroundUsage extends AdminActivities {
    private dataview!: Dataview<DbBackground>;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'reports');
    }

    public mounted(): void {
        super.mounted();

        this.dataview = this.$refs['dataview'] as Dataview<DbBackground>;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.reportBackgroundUsage',
            routerLink: '/activities/report-background-usage'
        });

        const datasource = new DataviewDatatableDatasource<DbBackground>();
        const filter = new DataviewFiltersHolderParams<DbBackground>();
        const tableRenderer = new DataviewTableRenderer(false);

        datasource.setRemoteStore('Backgrounds');
        filter.render(this.$refs['filter-container'] as HTMLElement, filters);
        tableRenderer.defineColumns(columns);

        this.dataview.addComponents([
            datasource,
            filter,
            tableRenderer
        ]);
        this.dataview.showRenderer('table-renderer', 'default');
    }

    /* EVENT HANDLERS */
    /* PRIVATE */
}
</script>
