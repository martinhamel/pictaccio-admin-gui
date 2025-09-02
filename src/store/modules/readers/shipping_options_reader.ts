import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { DbDeliveryOption } from '@pictaccio/admin-gui/src/models/db_delivery_option';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';

@Module({ namespaced: true })
export default class ShippingOptionsReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbDeliveryOption, number>;
    private internalShippingOptions: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbDeliveryOption, number>({
            readEndpoint: 'delivery/options/read'
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

    @Mutation
    public commitShippingOptions(shippingOptions: ReaderResponse): void {
        this.internalShippingOptions = shippingOptions;
    }

    public get shippingOptions(): ReaderResponse {
        return this.internalShippingOptions;
    }

    @Action
    public async shippingOptionsRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalShippingOptions === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitShippingOptions',
                answer.results.map(i => ({ id: i.id, value: i.internal_name }))
            );
        }
    }
}
