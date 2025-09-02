import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';

class PromoService extends BaseService {
    public async createBulkCode(campaignId: number, count: number): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'campaign/bulk-code-creation',
                data: {
                    campaignId: parseInt(campaignId.toString(), 10),
                    count
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }
}

export default new PromoService();
