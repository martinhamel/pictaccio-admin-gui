import { DataviewStoreKey } from '@pictaccio/admin-gui/views/components/widgets/dataview/store_keys';

export type DataviewStoreAfterUpdateEvent = {
    key: DataviewStoreKey;
}

export const DataviewEventDefaultKeys = [
    'dataview-after-update',
    'dataview-before-update',
    'dataview-dirty',
    'dataview-store-after-update'
] as const;

export type DataviewEventKey = (typeof DataviewEventDefaultKeys)[number] & string;

export type DataviewEventKeyValueTypeMapType = { [K in DataviewEventKey]: never };
export type DataviewEventDefaultKeyValueMap = {
    'dataview-after-update': null,
    'dataview-before-update': null,
    'dataview-dirty': null,
    'dataview-store-after-update': DataviewStoreAfterUpdateEvent
};

export type DataviewEventValueTypeMap<Tkey extends DataviewEventKey> = DataviewEventDefaultKeyValueMap[Tkey];

export type DataviewEventListener<Tkey extends DataviewEventKey> = (arg: DataviewEventValueTypeMap<Tkey>) => void;
