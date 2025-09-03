import { i18n } from '@pictaccio/admin-gui/i18n';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { StoreCustomizationColors } from '@pictaccio/shared/types/store_customization_colors';

class StoreCustomizationService extends BaseService {
    public async readColors(): Promise<{ [key: string]: string }> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'branding/colors/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.colors;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async readUrls(): Promise<{ [key: string]: string }> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'branding/urls/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.content;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async saveColors(colors: StoreCustomizationColors): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'branding/colors/edit',
                data: colors
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async saveLogo(image: File): Promise<boolean> {
        const formData = new FormData();
        formData.append('logo-image', image);
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'branding/logo/edit',
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

    public async saveUrls(urls: any): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'branding/urls/edit',
                data: {
                    content: urls
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }
}

export default new StoreCustomizationService();
