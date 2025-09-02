import {
    DatasourceDefinitionType,
    DatasourceDefinitionValueSubType, DataType
} from '@pictaccio/admin-gui/src/datasources/data_definitions';
import {
    DataviewEventKey,
    DataviewEventListener,
    DataviewEventValueTypeMap
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/event_types';
import {
    DataviewStoreKey,
    DataviewStoreValueTypeMap
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/store_keys';

export interface DataviewHost<Tdata, HasStreams extends boolean = false> {
    emit<Tkey extends DataviewEventKey>(event: Tkey, arg: DataviewEventValueTypeMap<Tkey>): void;
    hasStoreValue<Tkey extends DataviewStoreKey>(key: Tkey): boolean;
    getData<Tstream extends keyof Tdata>(stream?: Tstream): Promise<DataType<Tdata, HasStreams, Tstream>[]>;
    getStoreValue<Tkey extends DataviewStoreKey>(key: Tkey): DataviewStoreValueTypeMap<Tkey>;
    on<Tkey extends DataviewEventKey>(event: Tkey, listener: DataviewEventListener<Tkey>): void;
    setDataDefinition<Ttype extends DatasourceDefinitionType>(
        type: DatasourceDefinitionType,
        name: string,
        definition: DatasourceDefinitionValueSubType<Ttype>): void;
    setDirty(): void;
    setStoreValue<Tkey extends DataviewStoreKey>(key: Tkey, value: DataviewStoreValueTypeMap<Tkey>): void;
}
