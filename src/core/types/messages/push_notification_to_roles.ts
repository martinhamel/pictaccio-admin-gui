import { LocalizedNotificationDescriptor } from '@pictaccio/admin-gui/core/types/localized_notification_descriptor';

export type PushNotificationToRoles = {
    descriptor: LocalizedNotificationDescriptor,
    roles: string[]
}
