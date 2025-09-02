import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbBackgroundCategory } from '@pictaccio/admin-gui/src/models/db_background_category';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class BackgroundCategories extends BaseDataTable<number, DbBackgroundCategory> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbBackgroundCategory, number>({
            createEndpoint: 'background/categories/create',
            deleteEndpoint: 'background/categories/delete',
            readEndpoint: 'background/categories/read',
            updateEndpoint: 'background/categories/update'
        });
    }
}
