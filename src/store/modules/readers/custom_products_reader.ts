import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbProductCustomTemplate } from '@pictaccio/admin-gui/src/models/db_product_custom_template';

@Module({ namespaced: true })
export default class CustomProductsReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbProductCustomTemplate, number>;
    private internalCustomProducts: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbProductCustomTemplate, number>({
            readEndpoint: 'product/customProduct/read'
        });
    }

    public get customProducts(): ReaderResponse {
        return this.internalCustomProducts;
    }

    @Action
    public async customProductsRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalCustomProducts === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitCustomProducts',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Mutation
    public commitCustomProducts(customProducts: ReaderResponse): void {
        this.internalCustomProducts = customProducts;
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }
}
