import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import { VirtualProduct } from '@pictaccio/shared/types/virtual_product';


export default class BaseOrder extends AdminActivities {
    /* PRIVATE */
    private priceCompileHiddenCartItem(context: VirtualProduct): number {
        return this.$store.getters['Orders/cartItems']
            .filter(i => i.productName === context)
            .reduce((total, item) => total + item.subtotal, 0);
    }

    private cartHasHiddenItem(context: VirtualProduct): boolean {
        return this.$store.getters['Orders/cartItems']
            .filter(i => i.productName === context).length === 0;
    }
}
