import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbBackground } from '@pictaccio/admin-gui/models/db_background';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';

@Module({ namespaced: true })
export default class Backgrounds extends BaseDataTable<number, DbBackground> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbBackground, number>({
            createEndpoint: 'background/create',
            deleteEndpoint: 'background/delete',
            readEndpoint: 'background/read',
            updateEndpoint: 'background/update'
        });
    }
}
