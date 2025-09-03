import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';

export type DataSourceMap<Tmodel, Tvalue, ToptionId, ToptionValue> =
    { [key: string]: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue> };
