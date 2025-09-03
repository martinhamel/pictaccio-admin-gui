import { NotifyCustomerStatus } from '@pictaccio/admin-gui/core/types/notify_customer_status';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { ContactInfo } from '@pictaccio/admin-gui/models/contact_info';
import { Order } from '@pictaccio/admin-gui/models/order';
import { OrderPhotoCheckResult } from '@pictaccio/admin-gui/store/modules/orders';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { Language } from '@pictaccio/shared/types/language';
import { PhotoPublish } from '@pictaccio/shared/types/photo_publish';
import { OrderStatus } from '@pictaccio/shared/types/order_status';
import { SpreadsheetExportFormat } from '@pictaccio/shared/types/spreadsheet_export_type';

class OrderService extends BaseService {
    public async applyCheck(orderId: number,
        cartItemId: string,
        itemId: number,
        photoId: string,
        check: boolean): Promise<OrderPhotoCheckResult> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/apply-check',
                data: {
                    orderId,
                    cartItemId,
                    itemId,
                    photoId,
                    check
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return {
                orderId,
                cartItemId,
                itemId,
                photoId,
                check,
                success: true
            };
        } catch (error) {
            return {
                cartItemId,
                orderId,
                itemId,
                photoId,
                check,
                success: false
            };
        }
    }

    public async assign(orderId: number, userId: string): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/assign',
                data: { orderId, userId }
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async exportContacts(ids: number[], lang: Language, format: SpreadsheetExportFormat): Promise<File> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/export-contacts',
                data: { ids, lang, format }
            });

            const data = await response.json();

            checkForResponseError(data);

            return new File([await response.blob()],
                response.headers.get('Content-Disposition').replace(/^attachment; filename=(.+)$/, '$1'), {
                type: response.headers.get('Content-Type')
            });
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getAssigned(orderId: number): Promise<string> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/get-assigned',
                data: { id: orderId }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.userId as string;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async generatePrintToken(orderIds: number[]): Promise<string> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/generate-print-token',
                data: { id: orderIds.join(',') }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.token;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getChecks(orderId: number): Promise<OrderPhotoCheckResult[]> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/get-checks',
                data: { orderId }
            });
            const data = await response.json();

            checkForResponseError(data);

            return Promise.resolve(data.checks as OrderPhotoCheckResult[]);
        } catch (error) {
            handleResponseError(error);
            return [];
        }
    }

    public async getStatus(id: number): Promise<string> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/get-status',
                data: { id }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.orderStatus ?? 'pending';
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getOrderInfo(id: number): Promise<Order> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/get',
                data: { id }
            });
            const data = await response.json();

            checkForResponseError(data);


            return Promise.resolve(data.orders[0] as Order);
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async getPublishedPhotos(orderId: number): Promise<PhotoPublish[]> {
        try {
            const response = await this.request({
                method: 'get',
                authenticated: true,
                url: 'order/get-published-photos',
                data: { orderId }
            });
            const data = await response.json();

            checkForResponseError(data);

            return Promise.resolve(data.photos as PhotoPublish[]);
        } catch (error) {
            handleResponseError(error);
            return [];
        }
    }

    public async notifyCustomer(orderId: number): Promise<NotifyCustomerStatus> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/notify-customer',
                data: { orderId }
            });
            const data = await response.json();

            checkForResponseError(data);

            return {
                success: data.status === 'great-success',
                updateFound: data.updateFound
            };
        } catch (error) {
            handleResponseError(error);
            return {
                success: false,
                updateFound: false
            };
        }
    }

    public async publishPhotos(photos: PhotoPublish[]): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/publish-photos',
                data: {
                    photos
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

    public async setContactInfo(id: number, contactInfo: ContactInfo): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/edit-contact',
                data: { id, ...contactInfo }
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async unpublishPhotos(photos: PhotoPublish[]): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/unpublish-photos',
                data: {
                    photos
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

    public async setStatus(id: number, status: OrderStatus): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: 'order/set-status',
                data: {
                    id: typeof id === 'string'
                        ? parseInt(id, 10)
                        : id,
                    status
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new OrderService();
