import { DataType } from '@pictaccio/admin-gui/datasources/data_definitions';
import {
    DataviewEventKey,
    DataviewEventListener
} from '@pictaccio/admin-gui/views/components/widgets/dataview/event_types';

export interface DataviewRendererHost<Tdata, HasStreams extends boolean = false> {
    getData<Tstream extends keyof Tdata | undefined>(stream?: Tstream): Promise<DataType<Tdata, HasStreams, Tstream>[]>;
    on<Tkey extends DataviewEventKey>(event: Tkey, listener: DataviewEventListener<Tkey>): void;
}
