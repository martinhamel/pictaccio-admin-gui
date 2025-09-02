import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbCrosssell } from '@pictaccio/admin-gui/src/models/db_crosssell';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class Crosssells extends BaseDataTable<number, DbCrosssell> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbCrosssell, number>({
            createEndpoint: 'product/cross-sell/create',
            deleteEndpoint: 'product/cross-sell/delete',
            readEndpoint: 'product/cross-sell/read',
            updateEndpoint: 'product/cross-sell/update'
        });
    }
}
