import { UserName } from '@pictaccio/admin-gui/src/core/types/user_name';

export interface InitiateInviteData {
    name: UserName;
    email: string;
    roles: string[];
}
