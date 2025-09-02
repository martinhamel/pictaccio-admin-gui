import subjectGroupsService from '@pictaccio/admin-gui/src/services/subject_groups_service';
import { AddVersionRequest, RemoveVersionRequest } from '@pictaccio/shared/src/types/request/version_request';
import { Module as Mod } from 'vuex';
import { Action, Module } from 'vuex-module-decorators';
import { DbSubjectGroup } from '@pictaccio/admin-gui/src/models/db_group';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';

@Module({ namespaced: true })
export default class SubjectGroups extends BaseDataTable<number, DbSubjectGroup> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbSubjectGroup, number>({
            createEndpoint: 'photo-session/group/create',
            deleteEndpoint: 'photo-session/group/delete',
            readEndpoint: 'photo-session/group/read',
            updateEndpoint: 'photo-session/group/update'
        });
    }

    @Action
    public async addVersion(data: AddVersionRequest): Promise<void> {
        await subjectGroupsService.addVersion(data.id, data.original, data.version);
    }

    @Action
    public async removeVersion(data: RemoveVersionRequest): Promise<void> {
        await subjectGroupsService.removeVersion(data.id, data.original, data.version);
    }
}
