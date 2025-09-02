import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbBackgroundCategory } from '@pictaccio/admin-gui/src/models/db_background_category';

@Module({ namespaced: true })
export default class BackgroundCategoriesReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbBackgroundCategory, number>;
    private internalBackgroundCategories: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbBackgroundCategory, number>({
            readEndpoint: 'background/categories/read'
        });
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }

    public get backgroundCategories(): ReaderResponse {
        return this.internalBackgroundCategories;
    }

    @Action
    public async backgroundCategoriesRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalBackgroundCategories === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitBackgroundCategories',
                answer.results.map(i => ({ id: i.id, value: i.name_locale })));
        }
    }

    @Mutation
    public commitBackgroundCategories(backgroundCategories: ReaderResponse): void {
        this.internalBackgroundCategories = backgroundCategories;
    }
}
