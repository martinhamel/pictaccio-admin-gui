import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/src/models/db_delivery_group';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class ShippingGroups extends BaseDataTable<number, DbDeliveryGroup> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbDeliveryGroup, number>({
            createEndpoint: 'delivery/groups/create',
            deleteEndpoint: 'delivery/groups/delete',
            readEndpoint: 'delivery/groups/read',
            updateEndpoint: 'delivery/groups/update'
        });
    }
}
