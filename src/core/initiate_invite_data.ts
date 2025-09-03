import { UserName } from '@pictaccio/admin-gui/core/types/user_name';

export interface InitiateInviteData {
    name: UserName;
    email: string;
    roles: string[];
}
