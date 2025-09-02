import { LocalizedNotificationDescriptor } from '@pictaccio/admin-gui/src/core/types/localized_notification_descriptor';

export type PushNotificationToRoles = {
    descriptor: LocalizedNotificationDescriptor,
    roles: string[]
}
