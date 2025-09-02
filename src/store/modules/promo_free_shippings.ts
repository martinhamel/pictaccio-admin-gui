import { ShippingPromoDescriptor } from '@pictaccio/shared/src/types/shipping_promo_descriptor';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import shippingPromoService from '@pictaccio/admin-gui/src/services/shipping_promo_service';

@Module({ namespaced: true })
export default class ShippingPromo extends VuexModule {
    private internalFreeShipping: ShippingPromoDescriptor = {
        enabled: false,
        threshold: 0
    };

    @Action
    public async updateShippingPromo(data: ShippingPromoDescriptor): Promise<void> {
        await shippingPromoService.updateShippingPromo(data);
    }

    @Action({ commit: 'commitFreeShipping' })
    public async readShippingPromo(): Promise<ShippingPromoDescriptor> {
        return await shippingPromoService.readShippingPromo();
    }

    @Mutation
    public commitFreeShipping(data: ShippingPromoDescriptor): void {
        if (data === null) {
            return;
        }
        this.internalFreeShipping = data;
    }

    public get freeShipping(): ShippingPromoDescriptor {
        return this.internalFreeShipping;
    }
}
