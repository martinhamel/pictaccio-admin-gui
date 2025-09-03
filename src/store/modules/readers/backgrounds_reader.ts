import { DbBackground } from '@pictaccio/admin-gui/models/db_background';
import { KeyValue } from '@pictaccio/shared/types/key_value';
import { Tag } from '@pictaccio/shared/types/tags';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import backgroundService from '@pictaccio/admin-gui/services/background_service';

@Module({ namespaced: true })
export default class BackgroundsReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbBackground, number>;
    private internalBackgrounds: ReaderResponse;
    private internalTags: Tag[] = [];

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbBackground, number>({
            readEndpoint: 'background/read'
        });
    }

    @Mutation
    public commitBackgrounds(backgrounds: ReaderResponse): void {
        this.internalBackgrounds = backgrounds;
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Mutation
    public commitTags(tags: Tag[]): void {
        this.internalTags = tags;
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }

    public get backgroundCategories(): ReaderResponse {
        return this.internalBackgrounds;
    }

    @Action
    public async backgroundCategoriesRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalBackgrounds === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitBackgrounds',
                answer.results.map(i => ({ id: i.id, value: i.name_locale })));
        }
    }

    public get tags(): Tag[] {
        return this.internalTags;
    }

    @Action
    public async tagsRead(force = false): Promise<void> {
        if (force || this.internalTags.length === 0) {
            const tags = await backgroundService.getBackgroundTags();
            this.context.commit('commitTags', tags);
        }
    }
}
