import { USER_LOCAL_STORAGE_KEY } from '@pictaccio/admin-gui/src/core/user_local_storage_key';
import localStorageService from '@pictaccio/admin-gui/src/services/local_storage_service';
import { store } from '@pictaccio/admin-gui/src/store';

export type JobWorkerCallback = (...args: any[]) => void;
type EventListeners = { [key: string]: JobWorkerCallback[] };

export class JobWorker {
    private eventListeners = {};

    constructor(private job: Worker) {
        if (store.getters['Auth/isLoggedIn']) {
            this.job.postMessage({
                type: '_setAuth_',
                authToken: localStorageService.get(USER_LOCAL_STORAGE_KEY, false)
            });
        }

        this.listen();
    }

    public send(type: string, data?: any, transferData: Transferable[] = null): void {
        this.job.postMessage({
            type,
            data
        }, transferData
            ? {
                transfer: transferData
            }
            : null);
    }

    public on(event: string, callback: JobWorkerCallback): void {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }

        this.eventListeners[event].push(callback);
    }

    /* PRIVATE */
    private listen(): void {
        this.job.addEventListener('message', (event: any) => {
            if (!this.eventListeners[event.data.type]) {
                return;
            }

            for (const callback of this.eventListeners[event.data.type]) {
                callback(event.data.data);
            }
        });
    }
}
