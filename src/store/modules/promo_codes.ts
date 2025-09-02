import promoService from '@pictaccio/admin-gui/src/services/promo_service';
import { Module as Mod } from 'vuex';
import { Action, Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbPromoCode } from '@pictaccio/admin-gui/src/models/db_promo_code';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class PromoCodes extends BaseDataTable<number, DbPromoCode> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbPromoCode, number>({
            createEndpoint: 'campaign/promo-code/create',
            deleteEndpoint: 'campaign/promo-code/delete',
            readEndpoint: 'campaign/promo-code/read',
            updateEndpoint: 'campaign/promo-code/update'
        });
    }
}
