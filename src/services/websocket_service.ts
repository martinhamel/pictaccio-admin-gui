import { LocalizedNotificationDescriptor } from '../core/types/localized_notification_descriptor';
import { PushNotificationToRoles } from '../core/types/messages/push_notification_to_roles';
import { PushNotificationToUser } from '../core/types/messages/push_notification_to_user';
import BaseService from '../services/base_service';
import notificationService from '../services/notification_service';
import { store } from '../store';
import { io, Socket } from 'socket.io-client';

class WebsocketService extends BaseService {
    private socket: Socket;

    constructor() {
        super();

        store.watch(() => store.getters['Auth/isLoggedIn'], this.isLoggedInWatcher.bind(this));
        if (store.getters['Auth/isLoggedIn']) {
            this.createSocket();
        }
    }

    public requestPushNotificationToUser(descriptor: LocalizedNotificationDescriptor, userId: string): void {
        const message: PushNotificationToUser = { descriptor, userId };
        this.socket.emit('request-push-notification-to-user', message);
    }

    public requestPushNotificationToRoles(descriptor: LocalizedNotificationDescriptor, roles: string[]): void {
        const message: PushNotificationToRoles = { descriptor, roles };
        this.socket.emit('request-push-notification-to-roles', message);
    }

    /* MESSAGE HANDLER */
    private pushNotification(descriptor: LocalizedNotificationDescriptor): void {
        notificationService.pushNotification({
            ...descriptor,
            title: descriptor.title[store.getters['Config/userLang']],
            message: descriptor.message[store.getters['Config/userLang']],
            linkText: descriptor.linkText
                ? descriptor.linkText[store.getters['Config/userLang']]
                : undefined
        });
    }

    /* WATCHER */
    private isLoggedInWatcher(isLoggedIn: boolean): void {
        if (isLoggedIn) {
            this.createSocket();
        } else {
            this.destroySocket();
        }
    }

    /* PRIVATE */
    private createSocket(): void {
        this.socket = io(this.API_ENDPOINT.slice(0, -1), {
            path: '/channel/',
            auth: {
                token: store.getters['Auth/authToken']
            }
        });

        this.socket.on('push-notification', this.pushNotification.bind(this));
    }

    private destroySocket(): void {
        if (!this.socket) {
            return;
        }
        this.socket.close();
        this.socket = undefined;
    }
}

export default new WebsocketService();
