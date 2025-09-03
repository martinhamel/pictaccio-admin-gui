import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { isEmpty } from '@loufa/loufairy';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { ShippingMethod } from '@pictaccio/admin-gui/models/shipping_method';

@Module({ namespaced: true })
export default class ShippingMethodsReader extends VuexModule {
    private service: DataTableService<ShippingMethod, number>;
    private internalShippingMethods: ReaderResponse = [];

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<ShippingMethod, number>({
            readEndpoint: 'delivery/methods/read'
        });
    }

    public get shippingMethods(): ReaderResponse {
        return this.internalShippingMethods;
    }

    @Action
    public async shippingMethodsRead(force = false): Promise<void> {
        if (force || isEmpty(this.internalShippingMethods)) {
            const answer = await this.service.read({});
            if (answer) {
                this.context.commit('commitShippingMethods',
                    answer.results.map(i => ({
                        id: i.id,
                        value: i.internal_name
                    }))
                    //Keep this comment for later Upgrades
                    /*[
                        { id: 1, value: 'fixed-rate' },
                        { id: 2, value: 'canada-post' },
                        { id: 3, value: 'pick-up' },
                        { id: 4, value: 'establishment' }
                    ]*/
                );
            } else {
                globalToast('SERVER_READER_ERROR_READ', 'error');
            }
        }
    }

    @Mutation
    public commitShippingMethods(shippingMethods: ReaderResponse): void {
        this.internalShippingMethods = shippingMethods;
    }
}
