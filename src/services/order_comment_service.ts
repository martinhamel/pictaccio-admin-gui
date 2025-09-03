import { CommentItemData } from '@pictaccio/admin-gui/core/types/comment_item_data';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';

class OrderCommentService extends BaseService {
    public async addComment(orderId: number, comment: string): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/comment/add',
                data: {
                    orderId,
                    comment
                }
            });

            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async deleteComment(commentId: number): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/comment/delete',
                data: {
                    commentId
                }
            });

            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async editComment(commentId: number, message: string): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/comment/edit',
                data: {
                    commentId,
                    message
                }
            });

            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async getComments(orderId: number): Promise<CommentItemData[]> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/comment/get',
                data: {
                    orderId
                }
            });

            const data = await response.json();

            checkForResponseError(data);

            return Array.isArray(data.comments)
                ? data.comments
                : [];
        } catch (error) {
            handleResponseError(error);
            return [];
        }
    }
}

export default new OrderCommentService();
