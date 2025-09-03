import BaseService from '@pictaccio/admin-gui/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { Tag } from '@pictaccio/shared/types/tags';

class ProductService extends BaseService {
    public async getProductTags(): Promise<Tag[]> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'product/tags/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.tags;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new ProductService();
