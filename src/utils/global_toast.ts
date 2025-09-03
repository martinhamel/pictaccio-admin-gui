import { store } from '@pictaccio/admin-gui/store';
import { Bus } from '@pictaccio/admin-gui/utils/bus';

export const GlobalToastLevels = [
    'error',
    'warning',
    'success',
    'info'
] as const;

export type GlobalToastLevel = typeof GlobalToastLevels[number];

export function globalToast(message: string, level: GlobalToastLevel): void {
    if (!store.getters['App/online']) {
        return;
    }

    Bus.emit('global.toast', {
        message,
        level
    });
}
