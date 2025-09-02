import { DatatableDatasource } from '@pictaccio/admin-gui/src/datasources/datatable_datasource';
import {
    DataviewComponent,
    DataviewComponentConfiguration
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_component';
import { DataviewHost } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_host';

export class DataviewDatatableDatasource<Tdata>
    extends DatatableDatasource<Tdata, false>
    implements DataviewComponent<Tdata, false> {
    private host: DataviewHost<Tdata, false>;

    /* DATAVIEW_COMPONENT INTERFACE */
    public configure(host: DataviewHost<Tdata, false>): DataviewComponentConfiguration {
        this.host = host;

        return {
            name: 'datatable-datasource',
            type: 'datasource'
        }
    }
}
