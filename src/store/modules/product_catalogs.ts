import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbProductCatalog } from '@pictaccio/admin-gui/models/db_product_catalog';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';

@Module({ namespaced: true })
export default class ProductCatalogs extends BaseDataTable<number, DbProductCatalog> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbProductCatalog, number>({
            createEndpoint: 'product/catalog/create',
            deleteEndpoint: 'product/catalog/delete',
            readEndpoint: 'product/catalog/read',
            updateEndpoint: 'product/catalog/update'
        });
    }
}
