import { CartItem } from '@pictaccio/shared/src/types/cart_item';
import { ContactInfo } from '@pictaccio/shared/src/types/contact_info';
import { PhotoSelections } from '@pictaccio/shared/src/types/photo_selections';
import { PhotoVersionCollection } from '@pictaccio/shared/src/types/photo_version_collection';
import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { OrderDeliveryOption } from '@pictaccio/shared/src/types/order_delivery_option';
import { Subject } from '@pictaccio/shared/src/types/subject';
import { OrderStatus } from '@pictaccio/shared/src/types/order_status';
import { SubjectGroup } from '@pictaccio/shared/src/types/subject_group';
import { Transaction } from '@pictaccio/shared/src/types/transaction';

export class Order extends DbBaseModel<number> {
    public cartItems: CartItem[];
    public comment: string;
    public contact: ContactInfo;
    public photos: PhotoSelections;
    public photoVersions: PhotoVersionCollection;
    public deliveryOption: OrderDeliveryOption;
    public subjects: Subject[];
    public subjectGroups: SubjectGroup[];
    public transaction: Transaction;
    public orderStatus: OrderStatus;
}
