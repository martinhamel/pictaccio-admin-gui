import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbProduct } from '@pictaccio/admin-gui/src/models/db_product';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class Products extends BaseDataTable<number, DbProduct> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbProduct, number>({
            createEndpoint: 'product/create',
            deleteEndpoint: 'product/delete',
            readEndpoint: 'product/read',
            updateEndpoint: 'product/update'
        });
    }
}
