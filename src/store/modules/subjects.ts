import { DbSubject } from '@pictaccio/admin-gui/models/db_subject';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import subjectsService from '@pictaccio/admin-gui/services/subjects_service';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';
import { AddVersionRequest, RemoveVersionRequest } from '@pictaccio/shared/types/request/version_request';
import { Module as Mod } from 'vuex';
import { Action, Module } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Subjects extends BaseDataTable<number, DbSubject> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbSubject, number>({
            createEndpoint: 'photo-session/subject/create',
            deleteEndpoint: 'photo-session/subject/delete',
            readEndpoint: 'photo-session/subject/read',
            updateEndpoint: 'photo-session/subject/update'
        });
    }

    @Action
    public async addVersion(data: AddVersionRequest): Promise<void> {
        await subjectsService.addVersion(data.id, data.original, data.version);
    }

    @Action
    public async removeVersion(data: RemoveVersionRequest): Promise<void> {
        await subjectsService.removeVersion(data.id, data.original, data.version);
    }
}
