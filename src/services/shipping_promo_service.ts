import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { ShippingPromoDescriptor } from '@pictaccio/shared/src/types/shipping_promo_descriptor';

class ShippingPromoService extends BaseService {
    public async readShippingPromo(): Promise<ShippingPromoDescriptor> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'shipping-promo/read-shipping-promo'
            });
            const data = await response.json();

            if (data.status === 'failed' && data.context) {
                globalToast(data.context, 'warning');
            }

            checkForResponseError(data);

            return data.promo;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async updateShippingPromo(object: ShippingPromoDescriptor): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'shipping-promo/update-shipping-promo',
                data: object
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }
}

export default new ShippingPromoService();
