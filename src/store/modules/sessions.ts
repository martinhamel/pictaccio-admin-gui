import { DbSession } from '@pictaccio/admin-gui/models/db_session';
import { SessionGeneralInfo } from '@pictaccio/admin-gui/models/session_general_info';
import { SessionOptions } from '@pictaccio/admin-gui/models/session_options';
import { SessionSubjects } from '@pictaccio/admin-gui/models/session_subjects';
import { createDataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import sessionService from '@pictaccio/admin-gui/services/session_service';
import { BaseDataTable } from '@pictaccio/admin-gui/store/modules/base_data_table';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Sessions extends BaseDataTable<number, DbSession> {
    private generalInfoInternal: SessionGeneralInfo;
    private optionsInternal: SessionOptions;
    private productCatalogsInternal: number[];
    private sessionIdInternal: number;
    private shippingGroupsInternal: number[];
    private subjectsInternal: SessionSubjects;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<DbSession, number>({
            createEndpoint: 'photo-session/create',
            deleteEndpoint: 'photo-session/delete',
            readEndpoint: 'photo-session/read',
            updateEndpoint: 'photo-session/update'
        });
    }

    public get generalInfo(): SessionGeneralInfo {
        return this.generalInfoInternal;
    }

    public get options(): SessionOptions {
        return this.optionsInternal;
    }

    public get productCatalogs(): number[] {
        return this.productCatalogsInternal;
    }

    public get shippingGroups(): number[] {
        return this.shippingGroupsInternal;
    }

    public get sessionId(): number {
        return this.sessionIdInternal;
    }

    public get subjects(): SessionSubjects {
        return this.subjectsInternal;
    }

    @Action
    public async archive(sessionId: number): Promise<void> {
        await sessionService.archive(sessionId);
    }

    @Action
    public async clear(): Promise<void> {
        this.context.commit('commitGeneralInfo', {});
        this.context.commit('commitOptions', {});
        this.context.commit('commitProductCatalogs', []);
        this.context.commit('commitShippingGroups', []);
        this.context.commit('commitSubjects', {});
    }

    @Action
    public clearSubjects(): void {
        this.context.commit('commitSubjects', {});
    }

    @Mutation
    public commitGeneralInfo(info: SessionGeneralInfo): void {
        this.generalInfoInternal = info;
    }

    @Mutation
    public commitOptions(options: SessionOptions): void {
        this.optionsInternal = options;
    }

    @Mutation
    public commitProductCatalogs(productCatalogs: number[]): void {
        this.productCatalogsInternal = productCatalogs;
    }

    @Mutation
    public commitShippingGroups(shippingGroups: number[]): void {
        this.shippingGroupsInternal = shippingGroups;
    }

    @Mutation
    public commitSessionId(id: number): void {
        this.sessionIdInternal = id;
    }

    @Mutation
    public commitSubjects(subjects: SessionSubjects): void {
        this.subjectsInternal = subjects;
    }

    @Action({ commit: 'commitSessionId' })
    public async save(): Promise<number> {
        const response = await sessionService.save(
            this.context.getters['generalInfo'],
            this.context.getters['options'],
            {
                productCatalogIds: this.context.getters['productCatalogs'],
                deliveryGroupIds: this.context.getters['shippingGroups']
            },
            this.context.getters['subjects']
        );

        return response.sessionId;
    }

    @Action({ commit: 'commitGeneralInfo' })
    public async saveGeneralInfo(info: SessionGeneralInfo): Promise<SessionGeneralInfo> {
        return info;
    }

    @Action({ commit: 'commitOptions' })
    public async saveOptions(options: SessionOptions): Promise<SessionOptions> {
        return options;
    }

    @Action({ commit: 'commitShippingGroups' })
    public async saveShippingGroups(shippingGroups: number[]): Promise<number[]> {
        return shippingGroups;
    }

    @Action({ commit: 'commitProductCatalogs' })
    public async saveProductCatalogs(productCatalogs: number[]): Promise<number[]> {
        return productCatalogs;
    }

    @Action({ commit: 'commitSubjects' })
    public async saveSubjects(subjects: SessionSubjects): Promise<SessionSubjects> {
        return subjects;
    }
}
