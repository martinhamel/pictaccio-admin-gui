<style lang="scss" scoped>
.filter-widget {
    position: relative;
    display: flex;

    [data-theme-color="dark"] & {
        --color-background-dialog: var(--color-mix-5-6-step-3);
        --color-border-dialog: var(--color-mix-5-6-step-2);
    }
    [data-theme-color="light"] & {
        --color-background-dialog: var(--color-mix-7-4-step-1);
        --color-border-dialog: var(--color-mix-7-4-step-2);
    }
}

.filter-popup-btn {
    :deep(.sticky-label) {
        padding: 0.4rem 1.25rem 0.25rem;
        transform: translateY(0.3rem);
        //z-index: -1;
    }

    &:hover :deep(.sticky-label) {
        background-color: inherit !important;
    }
}

.filter-dialog[open] {
    --dialog-box-padding: 1rem;
    position: absolute;
    z-index: 99;
    display: grid;
    top: calc(100% + 0.5rem);
    background-color: var(--color-background-dialog);
    border-radius: $ruler-border-radius;
    border: 2px solid var(--color-border-dialog);
    left: -2px;
    pointer-events: all;

    .filter-dialog-header {
        padding: 1rem;
        border-bottom: 1px solid var(--color-border-dialog);
        order: 1;

        &:empty {
            display: none;
        }
    }
    .filter-dialog-body {
        padding: var(--dialog-box-padding);
        border-bottom: 1px solid var(--color-border-dialog);
        order: 2;
    }
    .filter-dialog-footer {
        padding: 1rem;
        order: 3;

        &:empty {
            display: none;
        }
    }
}
</style>

<template>
    <div class="filter-widget">
        <div class="filter-popup-btn" @click="openDialog">
            <slot name="btn"/>
        </div>
        <dialog ref="dialog"
                class="filter-dialog"
                @click="openDialog">
            <div class="filter-dialog-header">
                <slot name="header"></slot>
            </div>
            <div class="filter-dialog-footer">
                <slot name="footer"></slot>
            </div>
            <div class="filter-dialog-body">
                <slot name="body"></slot>
            </div>
        </dialog>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'FilterPopup',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'closed',
        'opened'
    ],
    expose: [
        'closeDialog',
        'forceCloseDialog',
        'openDialog'
    ]
})
export default class FilterPopup extends Vue {
    @Prop
    private name: string;

    private dialog: HTMLDialogElement;
    private isOpen = false;

    public closeDialog(): void {
        if (!this.isOpen) {
            return;
        }

        this.isOpen = false;
        this.$emit('closed');
        this.dialog.close();
        this.removeCloseListener();
    }

    public forceCloseDialog(): void {
        setTimeout(() => {
            this.closeDialog();
        }, 0);
    }

    public openDialog(): void {
        this.isOpen = true;
        this.dialog.show();
        this.$emit('opened');

        this.$nextTick(() => {
            this.addCloseListener();
        });
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.dialog = this.$refs['dialog'] as HTMLDialogElement;
    }

    public beforeUnmount(): void {
        this.removeCloseListener();
    }

    /* PRIVATE */
    private addCloseListener(): void {
        document.body.addEventListener('click', (event) => {
            if (this.isOpen && !this.dialog.contains(event.target as Node)) {
                this.closeDialog();
            }
        }, {
            capture: true,
            once: true
        });
    }

    private removeCloseListener(): void {
        document.body.removeEventListener('click', () => {
            this.closeDialog();
        });
    }
}
</script>
