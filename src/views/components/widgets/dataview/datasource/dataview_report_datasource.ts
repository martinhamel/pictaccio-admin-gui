import { ReportDatasource } from '@pictaccio/admin-gui/src/datasources/report_datasource';
import {
    DataviewComponent,
    DataviewComponentConfiguration
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_component';
import { DataviewHost } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_host';

export class DataviewReportDatasource<Tdata>
    extends ReportDatasource<Tdata, true>
    implements DataviewComponent<Tdata, true> {
    private host: DataviewHost<Tdata, true>;

    /* DATAVIEW_COMPONENT INTERFACE */
    public configure(host: DataviewHost<Tdata, true>): DataviewComponentConfiguration {
        this.host = host;

        return {
            name: 'datatable-datasource',
            type: 'datasource'
        }
    }
}
