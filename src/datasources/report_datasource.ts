import { CommonDatasource } from '@pictaccio/admin-gui/src/datasources/common_datasource';
import { DatasourceReportParamsDefinition, DataType } from '@pictaccio/admin-gui/src/datasources/data_definitions';
import { Datasource, NewDataCallback } from '@pictaccio/admin-gui/src/datasources/datasource';
import reportService from '@pictaccio/admin-gui/src/services/report_service';
import { ReportType } from '@pictaccio/shared/src/types/report';

export class ReportDatasource<Tdata, HasStreams extends boolean = false>
    extends CommonDatasource<Tdata, HasStreams>
    implements Datasource<Tdata, HasStreams> {
    private report: ReportType;

    public setReport(report: ReportType): void {
        this.report = report;
    }

    /* DATASOURCE INTERFACE */
    public async getData<Tstream extends keyof Tdata>(stream: Tstream)
        : Promise<DataType<Tdata, HasStreams, Tstream>[]> {
        const report = await reportService.queryJson(this.report, {
            view: 'table',
            renderer: (this.dataDefinitions?.reportParams as DatasourceReportParamsDefinition)?.renderer ?? 'json',
            dateRange: (this.dataDefinitions?.reportParams as DatasourceReportParamsDefinition)?.dateRange ?? {
                preset: 'this-year',
                start: null,
                end: null
            }
        });

        return report[this.report][stream];
    }

    public getTotalCount(): number {
        return 0;
    }

    public setNewDataCallback(callback: NewDataCallback): void {
        throw new Error('Method not implemented.');
    }
}
