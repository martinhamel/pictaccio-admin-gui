import { ColorObject } from '@pictaccio/admin-gui/src/core/types/color_object';

export const ORDER_STATUS_COLORS: Record<string, ColorObject> = {
    pending: {
        background: 'var(--color-semantic-untouched)',
        text: 'var(--color-text-normal)'
    },
    'photo-processing': {
        background: 'var(--color-semantic-progress)',
        text: 'var(--color-text-normal)'
    },
    'ready-to-print': {
        background: 'var(--color-semantic-progress)',
        text: 'var(--color-text-normal)'
    },
    'printing-packaging': {
        background: 'var(--color-semantic-progress)',
        text: 'var(--color-text-normal)'
    },
    'ready-to-ship': {
        background: 'var(--color-semantic-waiting)',
        text: 'var(--color-text-normal-reversed)'
    },
    completed: {
        background: 'var(--color-semantic-success)',
        text: 'var(--color-text-normal)'
    },
    'correction-requested': {
        background: 'var(--color-semantic-error)',
        text: 'var(--color-text-normal)'
    },
    cancelled: {
        background: 'var(--color-semantic-error)',
        text: 'var(--color-text-normal)'
    }
};
