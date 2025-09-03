import { User } from '@pictaccio/admin-gui/models/user';

export interface ValidateInviteTokenDataResponse {
    valid: boolean;
    user: User;
}
