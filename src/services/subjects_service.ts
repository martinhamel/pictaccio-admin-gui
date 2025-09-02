import { SubjectSwapLog } from '@pictaccio/admin-gui/src/core/types/subject_swap_log';
import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { SubjectCodeList } from '@pictaccio/admin-gui/src/types/subject_code_list';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';

class SubjectsService extends BaseService {
    public async addVersion(id: number, original: string, version: File): Promise<void> {
        const formData = new FormData();

        formData.append('itemId', id.toString());
        formData.append('original', original);
        formData.append('versionImage', version);

        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/subject/add-version',
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

    public async applyPhotoSwap(swapLog: SubjectSwapLog): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'subject/swap-photos',
                data: swapLog
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }

        return null;
    }

    public async removeVersion(id: number, original: string, version: string): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/subject/remove-version',
                data: {
                    itemId: id,
                    original,
                    version
                }
            });
            const data = await response.json();

            if (data.status === 'failed' && data.context) {
                globalToast(data.context, 'warning');
            }
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
        }
    }
}

export default new SubjectsService();
