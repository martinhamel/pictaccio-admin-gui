import { UserInfo } from '@pictaccio/admin-gui/src/core/types/user_info';

export type CommentItemData = {
    id: number;
    message: string;
    edited: boolean;
    user: UserInfo;
    createdOn: string;
    updatedOn: boolean;
}
