import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbProductCustomTemplate } from '@pictaccio/admin-gui/src/models/db_product_custom_template';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class CustomProducts extends BaseDataTable<number, DbProductCustomTemplate> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbProductCustomTemplate, number>({
            createEndpoint: 'product/customProduct/create',
            deleteEndpoint: 'product/customProduct/delete',
            readEndpoint: 'product/customProduct/read',
            updateEndpoint: 'product/customProduct/update'
        });
    }
}
