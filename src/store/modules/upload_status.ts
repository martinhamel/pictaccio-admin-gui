import { NotificationItem } from '@pictaccio/admin-gui/core/types/notification_item';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

export type UploadItem = {
    sessionId: number,
    notification: NotificationItem
};

type UploadItems = { [key: number]: NotificationItem };

@Module({ namespaced: true })
export default class UploadStatus extends VuexModule {
    private internalUploads: UploadItems = {};

    @Mutation
    public commitUpload(upload: UploadItem): void {
        this.internalUploads[upload.sessionId] = upload.notification;
    }

    public get isUploading(): boolean {
        return Object.values(this.internalUploads).some(item => item.progress < 100);
    }

    @Action
    public async isSessionUploading(sessionId: number): Promise<boolean> {
        return Promise.resolve(
            this.internalUploads[sessionId]
                ? this.internalUploads[sessionId].progress < 100
                : false
        )
    }

    @Action({ commit: 'commitUpload' })
    public async trackUpload(uploadItem: UploadItem): Promise<UploadItem> {
        return Promise.resolve(uploadItem);
    }

    public get uploads(): UploadItems {
        return this.internalUploads;
    }
}
