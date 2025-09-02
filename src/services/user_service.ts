import { UserCapabilities } from '@pictaccio/admin-gui/src/core/types/user_capabilities';
import { UserInfo } from '@pictaccio/admin-gui/src/core/types/user_info';
import { UserPermissions } from '@pictaccio/admin-gui/src/core/types/user_permissions';
import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/src/utils/error';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';

class UserService extends BaseService {
    public async archiveUser(id: string, toggle: boolean): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'user/archive',
                data: {
                    id,
                    archive: toggle !== false
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }

    public async deleteUser(id: string): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'user/delete',
                data: {
                    id
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }

    public async editUser(id: string, userInfo: UserInfo): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'user/edit',
                data: {
                    id,
                    info: userInfo
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }

    public async readUsersList(assignable: boolean): Promise<UserInfo[]> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'user/list',
                data: {
                    assignable
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.users?.map(user => ({
                ...user,
                createdOn: new Date(user.createdOn),
                lastLogin: user.lastLogin ? new Date(user.lastLogin) : false
            }));
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async readUserPermissions(): Promise<UserPermissions> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'user/permissions'
            });
            const data = await response.json();

            checkForResponseError(data);

            return {
                roles: data.roles,
                capabilities: data.capabilities
            };
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new UserService();
