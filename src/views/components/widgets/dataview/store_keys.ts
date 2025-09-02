export const DataviewDefaultStoreKeys = [
    'components'
] as const;

export type DataviewStoreKey = typeof DataviewDefaultStoreKeys[number];

type DataviewValueBaseStoreValueType = string | string[] | number | boolean | Date;
export type DataviewStoreValueType = DataviewValueBaseStoreValueType | Record<string, DataviewValueBaseStoreValueType>;

export type DataviewStoreKeyValueTypeMapType = {[K in DataviewStoreKey]: DataviewStoreValueType};
export type DataviewStoreKeyValueTypeMap = {
    components: string[];
};
export type DataviewStoreValueTypeTypes = DataviewStoreKeyValueTypeMap[keyof DataviewStoreKeyValueTypeMap];

export type DataviewStoreValueTypeMap<Tkey extends DataviewStoreKey> = DataviewStoreKeyValueTypeMap[Tkey];
