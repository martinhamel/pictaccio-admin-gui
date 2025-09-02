import { User } from '@pictaccio/admin-gui/src/models/user';

export interface ValidateInviteTokenDataResponse {
    valid: boolean;
    user: User;
}
