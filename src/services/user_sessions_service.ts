import { UserInfo } from '@pictaccio/admin-gui/src/core/types/user_info';
import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';

class UserSessionsService extends BaseService {
    public async readUserSessions(): Promise<UserInfo> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'user-info/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.info;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new UserSessionsService();
