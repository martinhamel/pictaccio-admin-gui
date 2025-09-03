import {
    DatasourceDefinitionType,
    DatasourceDefinitionValueSubType, DataType
} from '@pictaccio/admin-gui/datasources/data_definitions';

export type NewDataCallback = () => void;

export interface Datasource<T, HasStreams extends boolean = false> {
    getData<Tstream extends keyof T>(stream?: Tstream): Promise<DataType<T, HasStreams, Tstream>[]>;
    getTotalCount(): number;
    setDataDefinition<Ttype extends DatasourceDefinitionType>(
        type: Ttype,
        name: string,
        definition: DatasourceDefinitionValueSubType<Ttype>): void;
    setNewDataCallback(callback: NewDataCallback): void;
}
