import { UserName } from '@pictaccio/admin-gui/src/core/types/user_name';
import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';

class UserInfoService extends BaseService {
    public async changeUserName(name: UserName): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'user-info/username/edit',
                data: name
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
        }
    }

    public async readAvatar(): Promise<string> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'user-info/avatar/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.avatarPath;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async readUserName(): Promise<UserName> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'user-info/username/read'
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.name;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async uploadAvatar(image: File): Promise<void> {
        const formData = new FormData();
        formData.append('content', image);

        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'user-info/avatar/update',
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
}

export default new UserInfoService();
