import { DbBackground } from '@pictaccio/admin-gui/src/models/db_background';
import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { AllProductionIdentifier } from '@pictaccio/shared/src/types/all_production_identifier';
import { Tag } from '@pictaccio/shared/src/types/tags';

class BackgroundService extends BaseService {
    public async getProductionIdentifiers(): Promise<AllProductionIdentifier> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'background/readIdentifiers'
            });
            const data = await response.json();

            checkForResponseError(data);

            return {
                used: data.used,
                unused: data.unused
            };
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getBackgroundTags(): Promise<Tag[]> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'background/tags/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.tags;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getBackgroundWithProductionIdentifier(pid: number): Promise<DbBackground> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: `background/readWithProductionIdentifier?pid=${pid}`
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.background;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new BackgroundService();
