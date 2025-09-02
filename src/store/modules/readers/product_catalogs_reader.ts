import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbProductCatalog } from '@pictaccio/admin-gui/src/models/db_product_catalog';

@Module({ namespaced: true })
export default class ProductCatalogsReader extends VuexModule {
    private service: DataTableService<DbProductCatalog, number>;
    private internalProductCatalogs: ReaderResponse;
    private internalProductCatalogsById: number[];

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbProductCatalog, number>({
            readEndpoint: 'product/catalog/read'
        });
    }

    public get productCatalogs(): ReaderResponse {
        return this.internalProductCatalogs;
    }

    public get productCatalogsById(): number[] {
        return this.internalProductCatalogsById;
    }

    @Action
    public async productCatalogsRead(force = false): Promise<void> {
        if (force || this.internalProductCatalogs === undefined) {
            const answer = await this.service.read({});
            this.context.commit('commitProductCatalogs',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Action
    public async productCatalogsByIdRead(id: number): Promise<void> {
        if (id) {
            const answer = await this.service.read({
                filters: [[{
                    column: '_product_id',
                    operator: '==',
                    operand: `${id}`
                }]]
            });
            this.context.commit('commitProductCatalogsById', answer.results.map(i => i.id));
        }
    }

    @Mutation
    public commitProductCatalogs(productCatalogs: ReaderResponse): void {
        this.internalProductCatalogs = productCatalogs;
    }

    @Mutation
    public commitProductCatalogsById(productCatalogIds: number[]): void {
        this.internalProductCatalogsById = productCatalogIds;
    }
}
