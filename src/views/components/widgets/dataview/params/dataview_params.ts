import { SerializedParams } from '@pictaccio/admin-gui/src/core/types/serialized_params';
import { DataviewComponent } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_component';

export interface DataviewParams<Tdata, HasStreams extends boolean = false>
    extends DataviewComponent<Tdata, HasStreams> {
    deserialize(filters: SerializedParams): void;
    serialize(): SerializedParams;
}
