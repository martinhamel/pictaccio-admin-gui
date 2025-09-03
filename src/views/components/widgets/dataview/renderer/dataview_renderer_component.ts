import { DataviewRendererHost } from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/dataview_renderer_host';

export interface DataviewRendererComponent<Tdata, HasStreams extends boolean = false> {
    configure(host: DataviewRendererHost<Tdata, HasStreams>): void;
}
