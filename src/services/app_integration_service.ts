import BaseService from '../services/base_service';
import { checkForResponseError, handleResponseError } from '../utils/error';
import { AppIntegrationConfigurations } from '@pictaccio/shared/types/app_integration_configuration';
import { NotAuthenticatedError } from '../errors/not_authenticated_error';
import { globalToast } from '../utils/global_toast';

class AppIntegrationService extends BaseService {
    public async load(): Promise<AppIntegrationConfigurations> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/get-app-integration',
                authenticated: true
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.integrations as AppIntegrationConfigurations;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async save(integrations: AppIntegrationConfigurations): Promise<AppIntegrationConfigurations> {
        const transformedIntegrations = Object.entries(integrations)
            .map(([app, configuration]) => { return { app, configuration } });

        try {
            const response = await this.request({
                method: 'post',
                url: 'store/set-app-integration',
                authenticated: true,
                data: { integrations: transformedIntegrations }
            });
            const data = await response.json();

            checkForResponseError(data);

            const formattedData = {};
            data.appIntegration.map((appIntegration) =>
                formattedData[appIntegration.app] = appIntegration.configuration
            );
            return formattedData;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new AppIntegrationService();
