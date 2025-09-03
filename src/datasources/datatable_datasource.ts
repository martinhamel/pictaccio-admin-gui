import { CommonDatasource } from '@pictaccio/admin-gui/datasources/common_datasource';
import { DataType } from '@pictaccio/admin-gui/datasources/data_definitions';
import { Datasource, NewDataCallback } from '@pictaccio/admin-gui/datasources/datasource';
import { store } from '@pictaccio/admin-gui/store';

export class DatatableDatasource<Tdata, HasStreams extends false = false>
    extends CommonDatasource<Tdata>
    implements Datasource<Tdata, HasStreams> {
    private storeNamespace: string;

    public setRemoteStore(name: string): void {
        this.storeNamespace = name;
    }

    /* DATASOURCE INTERFACE */
    public async getData<Tstream extends keyof Tdata | undefined>(stream?: Tstream)
        : Promise<DataType<Tdata, HasStreams, Tstream>[]> {
        await store.dispatch(`${this.storeNamespace}/getPage`, { from: 0, size: 1000 });

        return store.getters[`${this.storeNamespace}/items`];
    }

    public getTotalCount(): number {
        return store.getters[`${this.storeNamespace}/itemsCount`];
    }

    public setNewDataCallback(callback: NewDataCallback): void {
        throw new Error('Method not implemented.');
    }
}
