import { GroupTransfer } from '@pictaccio/admin-gui/core/types/group_transfer';
import { SubjectData } from '@pictaccio/admin-gui/core/types/subject_data';
import { SubjectTransfer } from '@pictaccio/admin-gui/core/types/subject_transfer';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';

class SessionUploadService extends BaseService {
    public async uploadGroup(sessionId: number, transfer: GroupTransfer, files: Blob[]): Promise<boolean> {
        const form = new FormData();
        let count = 0;

        form.append('sessionId', sessionId.toString());
        form.append('data', JSON.stringify(transfer));
        for (const file of files) {
            form.append(`image-${count++}`, file);
        }

        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/group/upload',
                headers: {
                    'Content-Type': undefined
                },
                data: form
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.status === 'great-success';
        } catch (error) {
            handleResponseError(error);

            return false;
        }
    }

    public async uploadSubject(sessionId: number, transfer: SubjectTransfer, files: Blob[]): Promise<boolean> {
        const form = new FormData();
        let count = 0;

        form.append('sessionId', sessionId.toString());
        form.append('data', JSON.stringify(transfer));
        for (const file of files) {
            form.append(`image-${count++}`, file);
        }

        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/subject/upload',
                headers: {
                    'Content-Type': undefined
                },
                data: form
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.status === 'great-success';
        } catch (error) {
            handleResponseError(error);

            return false;
        }
    }

    public async verifySubjectCodes(subjectData: SubjectData[]): Promise<string[]> {
        const codes = subjectData.map(subject => subject.code);
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'subject-code/verify-codes',
                data: codes
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.codesExist as string[];
        } catch (error) {
            handleResponseError(error);
            return [];
        }
    }
}

export default new SessionUploadService();
