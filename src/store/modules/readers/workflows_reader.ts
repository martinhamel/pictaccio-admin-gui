import { DbWorkflow } from '@pictaccio/admin-gui/src/models/db_workflow';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbProductCatalog } from '@pictaccio/admin-gui/src/models/db_product_catalog';

@Module({ namespaced: true })
export default class WorkflowsReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbWorkflow, number>;
    private internalWorkflows: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbWorkflow, number>({
            readEndpoint: 'workflow/read'
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

    public get workflows(): ReaderResponse {
        return this.internalWorkflows;
    }

    @Action
    public async workflowsRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalWorkflows === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitWorkflows',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Mutation
    public commitWorkflows(workflows: ReaderResponse): void {
        this.internalWorkflows = workflows;
    }
}
