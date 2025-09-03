import { DataviewHost } from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_host';

export const DataviewComponentTypes = [
    'datasource',
    'params',
    'transformer',
    'renderer'
] as const;

export type DataviewComponentType = typeof DataviewComponentTypes[number];

export type DataviewComponentConfiguration = {
    name: string;
    type: DataviewComponentType;
}

export interface DataviewComponent<Tdata, HasStreams extends boolean = false> {
    configure(host: DataviewHost<Tdata, HasStreams>): DataviewComponentConfiguration;
}
