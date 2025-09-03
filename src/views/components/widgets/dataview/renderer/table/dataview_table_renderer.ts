import { DataType } from '@pictaccio/admin-gui/datasources/data_definitions';
import {
    DataviewComponentConfiguration
} from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_component';
import { DataviewHost } from '@pictaccio/admin-gui/views/components/widgets/dataview/dataview_host';
import {
    DataviewEventKey,
    DataviewEventListener
} from '@pictaccio/admin-gui/views/components/widgets/dataview/event_types';
import { DataviewRenderer } from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/dataview_renderer';
import {
    DataviewTableRendererColumn, DataviewTableRendererColumnType
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/table/dataview_table_renderer_column';
import {
    DataviewTableRendererHost
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/table/dataview_table_renderer_host';
import DataviewTableRendererView
    from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/table/DataviewTableRendererView.vue';
import { createVNode, VNode } from 'vue';

export class DataviewTableRenderer<Tdata, HasStreams extends boolean = false>
    implements DataviewRenderer<Tdata, HasStreams>, DataviewTableRendererHost<Tdata, HasStreams> {
    private columns: DataviewTableRendererColumnType<Tdata, HasStreams>;
    private hasStreams: HasStreams;
    private host: DataviewHost<Tdata, HasStreams>;
    private stream: keyof Tdata;

    constructor(hasStreams: HasStreams) {
        this.hasStreams = hasStreams;

        if (hasStreams) {
            this.columns = {} as DataviewTableRendererColumnType<Tdata, HasStreams>;
        } else {
            this.columns = [] as DataviewTableRendererColumnType<Tdata, HasStreams>;
        }
    }

    public addComponents(components: string | string[]): void {
        // Pass
    }

    public defineColumns(columns: DataviewTableRendererColumn[]): void;
    public defineColumns(columns: DataviewTableRendererColumn[],
        stream: HasStreams extends true ? keyof Tdata : never): void;
    public defineColumns(columns: DataviewTableRendererColumn[],
        stream?: HasStreams extends true ? keyof Tdata : never): void {
        if (this.hasStreams) {
            (this.columns as Record<keyof Tdata, DataviewTableRendererColumn[]>)[stream as keyof Tdata] = columns;
        } else {
            (this.columns as DataviewTableRendererColumn[]) = columns;
        }
    }

    public setStream(stream: keyof Tdata): void {
        this.stream = stream;
    }

    /* DATAVIEW_RENDERER INTERFACE */
    public configure(host: DataviewHost<Tdata, HasStreams>): DataviewComponentConfiguration {
        this.host = host;

        return {
            name: 'table-renderer',
            type: 'renderer'
        };
    }

    public render(): VNode {
        return createVNode(DataviewTableRendererView, { host: this });
    }

    /* DATAVIEW_TABLE_RENDERER_HOST INTERFACE */
    public getColumns<Tstream extends keyof Tdata>(stream?: Tstream)
        : DataviewTableRendererColumn[] {
        return this.hasStreams
            ? (this.columns as Record<keyof Tdata, DataviewTableRendererColumn[]>)[stream]
            : this.columns as DataviewTableRendererColumn[];
    }

    public getData<Tstream extends keyof Tdata | undefined>(stream?: Tstream)
        : Promise<DataType<Tdata, HasStreams, Tstream>[]> {
        return this.host.getData(stream);
    }

    public getStream(): keyof Tdata {
        return this.stream;
    }

    public on<Tkey extends DataviewEventKey>(event: Tkey, listener: DataviewEventListener<Tkey>): void {
        this.host.on(event, listener);
    }
}
