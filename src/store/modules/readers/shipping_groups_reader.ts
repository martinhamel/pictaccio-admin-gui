import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/src/models/db_delivery_group';

@Module({ namespaced: true })
export default class ShippingGroupsReader extends VuexModule {
    private service: DataTableService<DbDeliveryGroup, number>;
    private internalShippingGroups: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbDeliveryGroup, number>({
            readEndpoint: 'delivery/groups/read'
        });
    }

    public get shippingGroups(): ReaderResponse {
        return this.internalShippingGroups;
    }

    @Action
    public async shippingGroupsRead(force = false): Promise<void> {
        if (force || this.internalShippingGroups === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitShippingGroups',
                answer.results.map(i => ({
                    id: i.id,
                    value: i.internal_name,
                    deliveryOptions: i.deliveryOptions
                }))
            );
        }
    }

    @Mutation
    public commitShippingGroups(shippingGroups: ReaderResponse): void {
        this.internalShippingGroups = shippingGroups;
    }
}
