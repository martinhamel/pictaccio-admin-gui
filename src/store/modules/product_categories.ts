import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbProductCategory } from '@pictaccio/admin-gui/models/db_product_category';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';

@Module({ namespaced: true })
export default class ProductCategories extends BaseDataTable<number, DbProductCategory> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbProductCategory, number>({
            createEndpoint: 'product/categories/create',
            deleteEndpoint: 'product/categories/delete',
            readEndpoint: 'product/categories/read',
            updateEndpoint: 'product/categories/update'
        });
    }
}
