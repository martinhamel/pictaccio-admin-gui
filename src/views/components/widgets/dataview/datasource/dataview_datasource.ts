import { Datasource } from '@pictaccio/admin-gui/datasources/datasource';
import { DataviewComponent } from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_component';

export interface DataviewDatasource<Tdata, HasStreams extends boolean = false>
    extends Datasource<Tdata, HasStreams>, DataviewComponent<Tdata, HasStreams> { }
