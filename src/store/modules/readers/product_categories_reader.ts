import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { DbProductCategory } from '@pictaccio/admin-gui/src/models/db_product_category';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';

@Module({ namespaced: true })
export default class ProductCategoriesReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbProductCategory, number>;
    private internalProductCategories: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbProductCategory, number>({
            readEndpoint: 'product/categories/read'
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

    public get productCategories(): ReaderResponse {
        return this.internalProductCategories;
    }

    @Action
    public async productCategoriesRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalProductCategories === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitProductCategories',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Mutation
    public commitProductCategories(productCategories: ReaderResponse): void {
        this.internalProductCategories = productCategories;
    }
}
