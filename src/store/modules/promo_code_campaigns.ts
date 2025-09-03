import authService from '@pictaccio/admin-gui/services/auth_service';
import { Module as Mod } from 'vuex';
import { Action, Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbPromoCodeCampaign } from '@pictaccio/admin-gui/models/db_promo_code_campaign';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';

@Module({ namespaced: true })
export default class PromoCodeCampaigns extends BaseDataTable<number, DbPromoCodeCampaign> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbPromoCodeCampaign, number>({
            createEndpoint: 'campaign/create',
            deleteEndpoint: 'campaign/delete',
            readEndpoint: 'campaign/read',
            updateEndpoint: 'campaign/update'
        });
    }
}
