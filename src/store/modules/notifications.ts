import { NotificationItem } from '@pictaccio/admin-gui/src/core/types/notification_item';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Notifications extends VuexModule {
    private internalNotifications: NotificationItem[] = [];
    private internalOpenedNotification = false;

    public get notifications(): NotificationItem[] {
        return this.internalNotifications;
    }

    public get openedNotification(): boolean {
        return this.internalOpenedNotification;
    }

    @Mutation
    public addNotification(item: NotificationItem): void {
        this.internalNotifications.push(item);
    }

    @Mutation
    public commitOpenNotification(opened: boolean): void {
        this.internalOpenedNotification = opened;
    }

    @Action({ commit: 'commitOpenNotification' })
    public async openNotification(opened = true): Promise<boolean> {
        return opened
    }

    @Action({ commit: 'addNotification' })
    public async pushNotification(item: NotificationItem): Promise<NotificationItem> {
        return item;
    }

    @Mutation
    public removeNotification(item: NotificationItem): void {
        this.internalNotifications.splice(this.internalNotifications.findIndex(i => i === item), 1);
    }

    @Action({ commit: 'removeNotification' })
    public async unpushNotification(item: NotificationItem): Promise<NotificationItem> {
        return item;
    }
}
