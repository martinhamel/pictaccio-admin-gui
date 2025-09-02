<style lang="scss" scoped>
.inputs-dialog {
    position: relative;
    background-color: var(--color-background-input-dialog-trigger);
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;

    [data-theme-color="dark"] & {
        --color-background-input-dialog-trigger: transparent;
        --color-background-input-dialog-content-open: var(--color-mix-5-6-step-2);
        --color-background-input-dialog-trigger-open: var(--color-mix-5-6-step-2);
    }

    [data-theme-color="light"] & {
        --color-background-input-dialog-trigger: transparent;
        --color-background-input-dialog-content-open: var(--color-mix-4-2-step-1);
        --color-background-input-dialog-trigger-open: var(--color-mix-4-2-step-1);
    }

    &:only-child {
        margin: 0;
    }

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    tr & {
        background-color: var(--color-background-primary);
    }

    .trigger {
        width: 100%;
        height: 100%;
        min-height: $ruler-input-height;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $ruler-border-radius;
        background-color: var(--color-background-input-dialog-trigger);

        .overlay-ui & {
            align-items: unset;
            justify-content: unset;
        }

        &.open {
            background-color: var(--color-background-input-dialog-trigger-open);
            pointer-events: none;
            border-radius: $ruler-border-radius $ruler-border-radius 0 0;
        }
    }
}

.inputs-dialog-content-box {
    position: absolute;
    z-index: 500;
    top: 100%;
    left: 0;
    background-color: var(--color-background-input-dialog-content-open);
    width: auto;
    height: 0;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    padding: 0;
    overflow: hidden;
    box-shadow: oklab(from var(--color-primary-6) l a b / 0.5) 0 0 0.5rem;
    border-radius: 0 $ruler-border-radius $ruler-border-radius $ruler-border-radius;

    &.right-aligned {
        right: 0;
        left: unset;
        border-radius: $ruler-border-radius 0 $ruler-border-radius $ruler-border-radius;
    }

    :deep(label) {
        cursor: pointer;
        transform: none !important;
        .overlay-ui & {
            line-height: 3.5rem;
        }
    }

    &.un-wrap {
        height: auto;
        padding: 1.5rem 1.5rem 1rem;
    }
}
</style>

<template>
    <div class="inputs-dialog" ref="inputs-dialog">
        <div id="inputs-dialog-trigger"
             class="trigger"
             @click="toggleDialogClick"
             :class="isOpen ? 'open' : ''"
             :style="`background-color: ${backgroundColors
                ? backgroundColors.trigger
                : ''}`"
        >
            <slot name="trigger"></slot>
        </div>
        <div class="inputs-dialog-content-box"
             ref="inputs-dialog-content-box"
             :class="[
                 isOpen ? 'un-wrap' : '',
                 rightAligned ? 'right-aligned' : ''
             ]"
             :style="`background-color: ${backgroundColors
                ? backgroundColors.content
                : 'var(--color-background-input-dialog-content-open)'}`"
             @click="keepOpenClick">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getCoords } from '@pictaccio/admin-gui/src/utils/get_coords';

export type InputsDialogColors = {
    trigger: string,
    content: string
}

@Component({
    name: 'Inputs Dialog',
    components: {
        FontAwesomeIcon
    }
})
export default class InputsDialog extends Vue {
    @Prop
    private rightAligned = false;
    @Prop
    private backgroundColors: InputsDialogColors;
    private isOpen = false;
    private updatePos = true;
    /* LIFECYCLE */
    // public mounted(): void {}

    /* EVENT HANDLERS */
    /**
     * Make the option list wrap and unwrap on click
     */
    private toggleDialogClick(): void {
        if (!this.isOpen) {
            document.body.addEventListener('click', () => {
                this.toggleDialogClick();
            }, { capture: true, once: true });
        }
        this.isOpen = !this.isOpen;
    }

    private keepOpenClick(): void {
        this.isOpen = false;
        this.toggleDialogClick();
    }

    /* PRIVATE */
}
</script>
