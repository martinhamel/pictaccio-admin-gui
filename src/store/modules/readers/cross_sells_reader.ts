import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbCrosssell } from '@pictaccio/admin-gui/src/models/db_crosssell';

@Module({ namespaced: true })
export default class CrosssellsReader extends VuexModule {
    private service: DataTableService<DbCrosssell, number>;
    private internalCrosssells: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbCrosssell, number>({
            readEndpoint: 'product/cross-sell/read'
        });
    }

    public get crosssells(): ReaderResponse {
        return this.internalCrosssells;
    }

    @Action
    public async crosssellsRead(force = false): Promise<void> {
        if (force || this.internalCrosssells === undefined) {
            const answer = await this.service.read({});
            this.context.commit('commitCrosssells',
                answer.results.map(i => ({ id: i.id, value: i.internal_name }))
            );
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
    public commitCrosssells(crosssells: ReaderResponse): void {
        this.internalCrosssells = crosssells;
    }
}
