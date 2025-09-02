import { reactive, UnwrapNestedRefs } from 'vue';
import { NotificationDescriptor } from '../core/types/notification_descriptor';
import { NotificationItem } from '../core/types/notification_item';
import { store } from '../store/index';

class NotificationService {
    public pushNotification(descriptor: NotificationDescriptor): UnwrapNestedRefs<NotificationItem> {
        const item = reactive(new NotificationItem(descriptor));
        store.dispatch('Notifications/pushNotification', item);
        return item;
    }
}

export default new NotificationService();
