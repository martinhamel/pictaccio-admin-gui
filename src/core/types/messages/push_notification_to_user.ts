import { LocalizedNotificationDescriptor } from '@pictaccio/admin-gui/src/core/types/localized_notification_descriptor';

export type PushNotificationToUser = {
    descriptor: LocalizedNotificationDescriptor,
    userId: string
}
