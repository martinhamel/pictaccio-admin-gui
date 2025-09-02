import { Module as Mod } from 'vuex';
import { Module } from 'vuex-module-decorators';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbWorkflow } from '@pictaccio/admin-gui/src/models/db_workflow';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class Workflows extends BaseDataTable<number, DbWorkflow> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbWorkflow, number>({
            createEndpoint: 'workflow/create',
            deleteEndpoint: 'workflow/delete',
            readEndpoint: 'workflow/read',
            updateEndpoint: 'workflow/update'
        });
    }
}
