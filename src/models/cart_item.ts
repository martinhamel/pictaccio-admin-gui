import { ProductPhoto } from '@pictaccio/admin-gui/src/models/product_photo';
import { VirtualProduct } from '@pictaccio/shared/src/types/virtual_product';

export class CartItem {
    public cartItemId?: string;
    public productId?: string;
    public quantity?: number;
    public customProductSelection?: string[];
    public comment?: string;
    public photos?: string[];
    public productName?: string | VirtualProduct;
    public productPhoto?: ProductPhoto;
    public productPrice?: number;
    public subtotal?: number;
    public theme?: string;
    public theme_names?: string[];
}
