import { UserAdditionalInfo } from '@pictaccio/admin-gui/src/core/types/user_additional_info';
import { UserStatus } from '@pictaccio/admin-gui/src/core/types/user_status';

export interface UserInfo {
    id?: string;
    info?: UserAdditionalInfo;
    email?: string,
    roles?: string[],
    status?: UserStatus,
    avatar?: string,
    createdOn?: Date,
    lastLogin?: Date
}
