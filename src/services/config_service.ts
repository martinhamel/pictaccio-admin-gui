import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { ClientConfigSchema } from '@pictaccio/shared/src/types/client_config_schema';

class ConfigService extends BaseService {
    /**
     * Retrieve the client configuration from the server
     */
    public async getConfig(): Promise<ClientConfigSchema> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'data/config.json'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.config;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getVersion(): Promise<string> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'data/version',
                authenticated: true
            });

            return response.text();
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new ConfigService();
