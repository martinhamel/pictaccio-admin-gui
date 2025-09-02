import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';

export class UpdateState<T> {
    public item?: T;
    public itemHeader?: Record<string, string>;
    public prop: keyof T;
    public dataSource: DataSource<T, any, any, any>;
    public crudStatus: CRUDStatus;
}
