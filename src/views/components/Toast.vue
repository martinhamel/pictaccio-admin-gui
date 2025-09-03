<style lang="scss" scoped>
.message-wrapper {
    grid-column: 1/-1;
    position: absolute;
    width: 100%;
    z-index: 1500;
    margin: 1rem 0;
    pointer-events: none;

    [data-theme-color="dark"] & {
        --color-background-toast-1: var(--color-mix-5-6-step-1);
    }
    [data-theme-color="light"] & {
        --color-background-toast-1: var(--color-mix-2-7-step-1);
    }

    [data-level = 'success'] {
        color: var(--color-semantic-success);
    }
    [data-level = 'error'] {
        color: var(--color-semantic-error);
    }
    [data-level = 'warning'] {
        color: var(--color-semantic-warning);
        [data-theme-color="light"] & {
            --color-background-toast-1: var(--color-mix-5-7-step-3);
        }
    }
    [data-level = 'info'] {
        color: var(--color-semantic-info);
    }

    .message-box {
        width: 100%;
        max-width: 60rem;
        margin: 0.5rem auto;
        border-radius: $ruler-border-radius;
        padding: 1.5rem;
        display: grid;
        grid-template-columns: 3rem auto 3rem;
        font-size: 1.7rem;
        background-color: var(--color-background-toast-1);
        pointer-events: none;
        border: 2px solid currentColor;
        white-space: pre;
        line-height: 1rem;

        span {
            width: 100%;
            white-space: pre-line;
            line-height: 1.8rem;
        }
    }
}
</style>

<template>
    <div class="message-wrapper" v-if="toasts.length > 0">
        <div class="message-box" v-for="toast in toasts" :key="toast" :data-level="levelString(toast.level)">
            <font-awesome-icon :icon="['fal', toastLevel[levelString(toast.level)].icon]"/>
            <span>
                {{ $te(`toastMessages.${toast.message}`) ?
                    $t(`toastMessages.${toast.message}`) :
                    toast.message }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { environment } from '@pictaccio/admin-gui/environment';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Bus } from '@pictaccio/admin-gui/utils/bus';
import { toastLevelIcon } from '@pictaccio/admin-gui/core/toast_level_icon'
import { GlobalToastLevel, GlobalToastLevels } from '@pictaccio/admin-gui/utils/global_toast';

@Component({
    name: 'Toast',
    components: {
        FontAwesomeIcon
    }
})
export default class Toast extends Vue {
    private toasts = [];

    private toastLevel = toastLevelIcon;

    private levelString(level: GlobalToastLevel): string {
        return GlobalToastLevels.includes(level) ? level : 'info';
    }

    public mounted(): void {
        Bus.on('global.toast', this._globalToast.bind(this));
    }

    /* EVENT HANDLERS */
    private _globalToast(payload: any): void {
        if (!environment.production && (payload.message === '' || payload.message === undefined)) {
            console.error('Global toast payload message is empty', payload);
        }

        this.toasts.push({
            message: payload.message,
            level: payload.level
        })

        setTimeout(() => { this.toasts.shift() }, 6000);
    }
}

</script>
