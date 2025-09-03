import { SubjectCodeGenerateQuery } from '@pictaccio/admin-gui/models/subject_code_generate_query';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { SubjectCodeList } from '@pictaccio/admin-gui/types/subject_code_list';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';

class SubjectCodeService extends BaseService {
    public async createBulkSubjectCodes(subjectCodeQuery: SubjectCodeGenerateQuery): Promise<SubjectCodeList> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: this.API_ENDPOINT + 'subject-code/generate',
                data: subjectCodeQuery
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.codes;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new SubjectCodeService();
