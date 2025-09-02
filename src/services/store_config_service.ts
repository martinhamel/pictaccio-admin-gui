import { isEmpty } from '@loufa/loufairy';
import { StoreConfig } from '@pictaccio/admin-gui/src/models/store_config';
import { StoreStatus } from '@pictaccio/admin-gui/src/models/store_status';
import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { StoreConfigurationStatus } from '@pictaccio/shared/src/types/store_status';

class StoreConfigService extends BaseService {
    public async load(): Promise<StoreConfig> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/get-config',
                authenticated: true
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.config as StoreConfig;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getAvailableLanguages(): Promise<string[]> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/get-available-languages'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.languages as string[];
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getStoreLanguages(): Promise<StoreLanguageItem[]> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/get-languages'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.languages as StoreLanguageItem[];
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getStoreStatus(): Promise<StoreStatus> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/get-shutdown',
                authenticated: true
            });
            const data = await response.json();

            checkForResponseError(data);

            return { shutdown: data.shutdown, message: data.message };
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async hasWatermark(): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/has-watermark-image',
                authenticated: true
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async isStoreConfigured(): Promise<StoreConfigurationStatus> {
        try {
            const response = await this.request({
                method: 'get',
                url: 'store/is-configured',
                authenticated: true
            });
            const data = await response.json();

            checkForResponseError(data);

            return { isReady: data.isReady, features: data.features } as StoreConfigurationStatus;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async save(config: StoreConfig): Promise<boolean> {
        const localConfig = Object.assign({}, config);

        if (isEmpty(localConfig.address)) {
            localConfig.address = undefined;
        }
        if (localConfig.phones?.length === 0) {
            localConfig.phones = undefined;
        }

        try {
            const response = await this.request({
                method: 'post',
                url: 'store/set-config',
                authenticated: true,
                data: localConfig
            });
            const data = await response?.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async saveWatermark(image: File): Promise<boolean> {
        const formData = new FormData();
        formData.append('watermark-image', image);
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'store/set-watermark-image',
                headers: {
                    'Content-Type': undefined
                },
                data: formData
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async setStoreLanguages(languages: string[]): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                url: 'store/set-languages',
                authenticated: true,
                data: { languages }
            });
            const data = await response?.json();

            checkForResponseError(data);
            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async setStoreStatus(status: StoreStatus): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                url: 'store/set-shutdown',
                authenticated: true,
                data: status
            });
            const data = await response?.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }
}

export default new StoreConfigService();
