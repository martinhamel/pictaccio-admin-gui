import {
    DataviewRendererHost
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/dataview_renderer_host';
import {
    DataviewTableRendererColumn
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/table/dataview_table_renderer_column';


export interface DataviewTableRendererHost<Tdata, HasStreams extends boolean = false>
    extends DataviewRendererHost<Tdata, HasStreams> {
    getColumns<Tstream extends keyof Tdata>(stream: Tstream): DataviewTableRendererColumn[];
    getStream(): keyof Tdata;
}
