import { BooleanFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/boolean_filter_function';
import { Operator } from '@pictaccio/shared/types/operator';
import { Tag } from '@pictaccio/shared/types/tags';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbProduct } from '@pictaccio/admin-gui/models/db_product';
import productService from '@pictaccio/admin-gui/services/product_service';

@Module({ namespaced: true })
export default class ProductsReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbProduct, number>;
    private internalProducts: ReaderResponse;
    private internalTags: Tag[] = [];

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbProduct, number>({
            readEndpoint: 'product/read'
        });
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Mutation
    public commitProducts(products: ReaderResponse): void {
        this.internalProducts = products;
    }

    @Mutation
    public commitTags(tags: Tag[]): void {
        this.internalTags = tags;
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }

    public get products(): ReaderResponse {
        return this.internalProducts;
    }

    @Action
    public async productsRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalProducts === undefined) {
            const answer = await this.service.read({
                filters: [[{
                    column: 'archived',
                    operator: '==',
                    operand: false
                }]]
            });

            this.context.commit('commitDirty', false);
            this.context.commit('commitProducts',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    public get tags(): Tag[] {
        return this.internalTags;
    }

    @Action
    public async tagsRead(force = false): Promise<void> {
        if (force || this.internalTags.length === 0) {
            const tags = await productService.getProductTags();
            this.context.commit('commitTags', tags);
        }
    }
}
