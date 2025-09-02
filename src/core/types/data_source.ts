import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';

export type ValueKeyOf<Tvalue> = Tvalue extends object ? keyof Tvalue : never;

export type DataSourceOption<Tid, Tvalue> = {
    id: Tid;
    value: Tvalue;
}

export interface DataSource<Tmodel, Tvalue, ToptionId, ToptionValue> {
    getName(): keyof Tmodel;
    getOptions(): DataSourceOption<ToptionId, ToptionValue>[];
    getValue(): Tvalue;
}
