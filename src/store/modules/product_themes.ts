import promoService from '@pictaccio/admin-gui/src/services/promo_service';
import { Module as Mod } from 'vuex';
import { Action, Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbProductThemeSet } from '@pictaccio/admin-gui/src/models/db_product_theme_set';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class ProductThemes extends BaseDataTable<number, DbProductThemeSet> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbProductThemeSet, number>({
            createEndpoint: 'product/theme/create',
            deleteEndpoint: 'product/theme/delete',
            readEndpoint: 'product/theme/read',
            updateEndpoint: 'product/theme/update'
        });
    }
}
