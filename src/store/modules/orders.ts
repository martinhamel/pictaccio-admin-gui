import { Order } from '@pictaccio/admin-gui/src/models/order';
import { createDataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';
import orderService from '@pictaccio/admin-gui/src/services/order_service';
import { BaseDataTable } from '@pictaccio/admin-gui/src/store/modules/base_data_table';
import { CartItem } from '@pictaccio/shared/src/types/cart_item';
import { ContactInfo } from '@pictaccio/shared/src/types/contact_info';
import { OrderDeliveryOption } from '@pictaccio/shared/src/types/order_delivery_option';
import { OrderStatus } from '@pictaccio/shared/src/types/order_status';
import { PhotoSelections } from '@pictaccio/shared/src/types/photo_selections';
import { Subject } from '@pictaccio/shared/src/types/subject';
import { Transaction } from '@pictaccio/shared/src/types/transaction';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation } from 'vuex-module-decorators';

export type EditContactInfoResult = {
    success: boolean,
    contactInfo: ContactInfo
}

export type OrderPhotoCheck = {
    cartItemId: string,
    orderId: number,
    itemId: number,
    photoId: string,
    check: boolean
};

export type OrderPhotoCheckResult = {
    cartItemId: string,
    orderId: number,
    itemId: number,
    photoId: string,
    check: boolean,
    success: boolean
};

@Module({ namespaced: true })
export default class Orders extends BaseDataTable<number, Order> {
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.dataTableService = createDataTableService<Order, number>({
            readEndpoint: 'order/read',
            updateEndpoint: 'order/update'
        });
    }
    private internalChecks: OrderPhotoCheck[] = [];
    private internalOrderTemplate: Order = {
        cartItems: [],
        comment: '',
        contact: {
            city: '',
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            postalCode: '',
            region: '',
            streetAddress1: '',
            streetAddress2: '',
            country: '',
            newsletter: null
        },
        id: 0,
        photos: {},
        photoVersions: {},
        deliveryOption: {
            id: '1',
            internalName: '',
            nameLocale: {
                en: '',
                fr: ''
            },
            basePrice: '0',
            leadTime: 0,
            method: 'fixed-rate',
            options: null
        },
        subjects: [],
        subjectGroups: [],
        transaction: {
            subtotal: '0',
            promo: '0',
            shipping: '0',
            taxes: null,
            total: '0',
            transactions: []
        },
        orderStatus: 'pending'
    };
    private internalOrder: Order = this.internalOrderTemplate;

    public get cartItems(): CartItem[] {
        return this.internalOrder.cartItems;
    }

    public get checks(): OrderPhotoCheck[] {
        return this.internalChecks;
    }

    public get order(): Order {
        return this.internalOrder;
    }

    public get comment(): string {
        return this.internalOrder.comment;
    }

    public get status(): OrderStatus {
        return this.internalOrder?.orderStatus ?? 'pending';
    }

    @Mutation
    public commitChecks(checks: OrderPhotoCheck[]): void {
        this.internalChecks = checks;
    }

    @Mutation
    public commitOrderPhotoApplyCheck(checkResult: OrderPhotoCheckResult): void {
        this.internalChecks = this.internalChecks.map(check => {
            if (check.orderId === checkResult.orderId &&
                check.itemId === checkResult.itemId &&
                check.photoId === checkResult.photoId) {
                return { ...check, check: checkResult.check };
            }
            return check;
        });
    }

    @Mutation
    public commitContactInfo(editContactInfo: EditContactInfoResult): void {
        this.internalOrder.contact = editContactInfo.contactInfo;
    }

    @Mutation
    public commitOrder(order: Order): void {
        this.internalOrder = order ?? this.internalOrderTemplate;
    }

    @Mutation
    public commitOrderStatus(status: OrderStatus): void {
        this.internalOrder.orderStatus = status;
    }

    public get contact(): ContactInfo {
        return this.internalOrder.contact;
    }

    @Action({ commit: 'commitOrderPhotoApplyCheck' })
    public async applyCheck(check: OrderPhotoCheck): Promise<OrderPhotoCheckResult> {
        return await orderService.applyCheck(check.orderId, check.cartItemId, check.itemId, check.photoId, check.check);
    }

    @Action({ commit: 'commitContactInfo' })
    public async editContactInfo({ id, contactInfo }: { id: number, contactInfo: ContactInfo })
        : Promise<EditContactInfoResult> {
        const success = await orderService.setContactInfo(id, contactInfo);
        return { success, contactInfo };
    }

    public get photos(): PhotoSelections {
        return this.internalOrder.photos;
    }

    @Action({ commit: 'commitChecks' })
    public async getChecks(orderId: number): Promise<OrderPhotoCheck[]> {
        return await orderService.getChecks(orderId);
    }

    @Action({ commit: 'commitOrderStatus' })
    public async getStatus(id: number): Promise<string> {
        return await orderService.getStatus(id);
    }

    @Action({ commit: 'commitOrder' })
    public async setOrderId(id: number): Promise<Order> {
        return await orderService.getOrderInfo(id);
    }

    public get shipping(): OrderDeliveryOption {
        return this.internalOrder.deliveryOption;
    }

    public get subjects(): Subject[] {
        return this.internalOrder.subjects;
    }

    public get transaction(): Transaction {
        return this.internalOrder.transaction;
    }

    @Action({ commit: 'commitOrderStatus' })
    public async setStatus({ id, status }: { id: number, status: OrderStatus }): Promise<OrderStatus> {
        await orderService.setStatus(id, status);
        return status;
    }
}
