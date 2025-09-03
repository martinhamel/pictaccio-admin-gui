import { SubjectSwapLog } from '@pictaccio/admin-gui/core/types/subject_swap_log';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { SubjectCodeList } from '@pictaccio/admin-gui/types/subject_code_list';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';

class SubjectGroupsService extends BaseService {
    public async addVersion(id: number, original: string, version: File): Promise<void> {
        const formData = new FormData();

        formData.append('itemId', id.toString());
        formData.append('original', original);
        formData.append('versionImage', version);

        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/group/add-version',
                headers: {
                    'Content-Type': undefined
                },
                data: formData
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }

    public async removeVersion(id: number, original: string, version: string): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/group/remove-version',
                data: {
                    itemId: id,
                    original,
                    version
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }
}

export default new SubjectGroupsService();
