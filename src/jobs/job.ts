import { camelize } from '@loufa/loufairy';
import { environment } from '@pictaccio/admin-gui/environment';

const context: Worker = self as any;

export class Job {
    constructor() {
        this.registerListeners();
    }

    public send(type: string, data?: any, transferData: Transferable[] = null): void {
        context.postMessage({
            type,
            data
        }, transferData
            ? {
                transfer: transferData
            }
            : null);
    }

    /* PRIVATE */
    private registerListeners(): void {
        context.addEventListener('message', async message => {
            let handlerName = '';

            switch (message.data.type) {
                case '_setAuth_':
                    self.localStorage = {
                        getItem: () => message.data.authToken,
                        length: 0,
                        setItem: (key: string, value: string) => null,
                        clear: () => null,
                        removeItem: (key: string) => null,
                        key: (index: number) => null
                    };
                    break;

                default:
                    handlerName = `on${camelize(message.data.type, false)}`;
                    if (typeof this[handlerName] !== 'function') {
                        throw new Error(`Message handler method '${handlerName}' not defined on '${this.constructor.name}'`);
                    }

                    this[handlerName](message.data.data);
            }
        });
    }
}
