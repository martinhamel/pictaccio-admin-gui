import { NotificationStatus } from '../../core/types/notification_status';
import { EventEmitter } from 'events';
import { NotificationDescriptor } from '../../core/types/notification_descriptor';
import { store } from '../../store';
import { JobWorker } from '../../utils/job_worker';

export class NotificationItem extends EventEmitter {
    private internalProgress = 0;
    private internalStatus: NotificationStatus = 'great-success';
    constructor(private descriptor: NotificationDescriptor) {
        super();
    }

    public get status(): NotificationStatus {
        return this.internalStatus;
    }

    public set status(status: NotificationStatus) {
        this.internalStatus = status;
    }

    public get animationSource(): HTMLElement {
        return this.descriptor.animationSource;
    }

    public get title(): string {
        return this.descriptor.title;
    }

    public get message(): string {
        return this.descriptor.message;
    }

    public set message(message: string) {
        this.descriptor.message = message;
    }

    public get hasProgress(): boolean {
        return this.descriptor.hasProgress;
    }

    public get linkPath(): string {
        return this.descriptor.linkPath;
    }

    public get linkText(): string {
        return this.descriptor.linkText;
    }

    public get progress(): number {
        return this.internalProgress;
    }

    public set progress(progress: number) {
        if (progress < 0 || progress > 100) {
            throw new Error('Progress is out of the 0 to 100 bound');
        }
        this.internalProgress = progress;
    }

    public progressFrom(job: JobWorker): void {
        job.on('progress', (data: any) => {
            this.progress = data.percent;
        })
    }

    public get hasAnimate(): boolean {
        return this.descriptor.animate;
    }

    public get hasStop(): boolean {
        return this.descriptor.hasStop;
    }

    public get hasClose(): boolean {
        return this.descriptor.hasClose;
    }

    public dismiss(): void {
        store.dispatch('Notifications/unpushNotification', this);
    }

    public stop(): void {
        this.descriptor.hasStop = false;
        this.emit('stop-requested');
    }
}
