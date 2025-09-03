import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbDeliveryOption } from '@pictaccio/admin-gui/models/db_delivery_option';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';

@Module({ namespaced: true })
export default class ShippingOptions extends BaseDataTable<number, DbDeliveryOption> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbDeliveryOption, number>({
            createEndpoint: 'delivery/create',
            deleteEndpoint: 'delivery/delete',
            readEndpoint: 'delivery/read',
            updateEndpoint: 'delivery/update'
        });
    }
}
