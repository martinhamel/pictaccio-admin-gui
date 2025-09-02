<style lang="scss" scoped>
.info-bubble {
    --color-background-transform: oklab(from var(--background-color) calc(l + var(--lightness-offset)) a b);
    pointer-events: all;

    [data-theme-color="dark"] & {
        --color-background-overlay-bubble-1: var(--color-mix-6-4-step-2);
        --lightness-offset: -0.1;
    }

    [data-theme-color="light"] & {
        --color-background-overlay-bubble-1: var(--color-mix-7-4-step-1);
        --lightness-offset: 0.2;
    }
}

.bubble {
    color: inherit;
    background-color: var(--color-background-transform);
    text-align: justify;
    font-size: 1.4rem;
    --font-weight: 300;
    width: max-content;
    max-width: 50rem;
    white-space: normal;
    height: max-content;
    border-radius: $ruler-border-radius;
    padding: 1.5rem 2rem;
    position: fixed;
    top: -5rem;
    z-index: 1100;

    :deep(> *) {
        padding: 0;
        margin: 0;
    }

    :deep(hr) {
        margin-block: 1rem;

        &:has(+h1, +h2, +h3, +h4, +h5, +h6) {
            margin-bottom: 0.8rem;
        }
    }

    :deep(.h5) {
        margin: 0;
    }
}

.coloringMask {
    color: var(--color-background-overlay-bubble-1);
}

.arrow {
    --arrow-size: 0px;
    --arrow-amp: 0;

    color: var(--color-background-transform);
    box-sizing: border-box;
    position: absolute;
    pointer-events: none;
    border-top: var(--arrow-size) solid currentColor !important;
    z-index: 1100;

    &.top, &.bottom {
        border-left: calc(var(--arrow-size) * var(--arrow-amp)) solid transparent !important;
        border-right: calc(var(--arrow-size) * var(--arrow-amp)) solid transparent !important;
    }

    &.right, &.left {
        border-left: calc(var(--arrow-size) * (var(--arrow-amp) / 2)) solid transparent !important;
        border-right: calc(var(--arrow-size) * (var(--arrow-amp) / 2)) solid transparent !important;
    }

    &.top {
        transform: translate(-50%, -108%) rotate(0deg) ;
    }

    &.right {
        transform: translate(0, -50%) rotate(90deg);
    }

    &.bottom {
        transform: translate(-50%, 0) rotate(180deg);
    }

    &.left {
        transform: translate(-100%, -50%) rotate(-90deg);
    }
}
</style>

<template>
   <Teleport to="body">
       <div class="info-bubble"
            :style="bubbleColor
            ? `--background-color: ${bubbleColor}`
            : `--background-color: var(--color-background-overlay-bubble-1)`"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave">
            <div class="bubble" ref="bubble" :style="[bubbleStyle]">
                <slot></slot>
            </div>
            <div class="arrow" :class="position" ref="arrow"/>
       </div>
   </Teleport>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Coords, getCoords } from '@pictaccio/admin-gui/src/utils/get_coords';

const ARROW_SIZE = 12;
const ARROW_AMP = 1.2;
type WhiteSpace = { top: number, right?: number, bottom?: number, left?: number }

@Component({
    name: 'TooltipBubble',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'mouseenter',
        'mouseleave'
    ]
})
export default class TooltipBubble extends Vue {
    @Prop
    private element: Node | string;
    @Prop
    private spacing: WhiteSpace;
    @Prop
    private bubbleColor: string;
    @Prop
    private hasSideMenu: boolean;
    @Prop
    private bubbleStyle: string;
    private position: 'top' | 'left' | 'right' | 'bottom' = 'top';
    private targetElement: Element;
    private checkSideMenu = true;

    public setPosition(position: 'top' | 'left' | 'right' | 'bottom'): void {
        this.position = position;
        this.positionBubble();
    }

    /* LIFECYCLE */
    public beforeMount(): void {
        if (this.hasSideMenu !== undefined) {
            this.checkSideMenu = this.hasSideMenu;
        }
    }

    public mounted(): void {
        this.targetElement = this.findElement();
        (this.$refs['arrow'] as HTMLElement).style.setProperty('--arrow-size', `${ARROW_SIZE}px`);
        (this.$refs['arrow'] as HTMLElement).style.setProperty('--arrow-amp', `${ARROW_AMP}`);
        this.positionBubble();
    }

    /* EVENT HANDLER */
    private mouseenter(event): void {
        this.$emit('mouseenter', event);
    }

    private mouseleave(event): void {
        this.$emit('mouseleave', event);
    }

    /* PRIVATE */
    private calculateBubblePosition(coords: Coords, spacing: WhiteSpace): Coords {
        const bubble = this.$refs['bubble'] as HTMLElement;
        let x: number;
        let y: number;

        switch (this.position) {
        case 'top':
            x = coords.x - bubble.offsetWidth / 2;
            y = coords.y - bubble.offsetHeight - ARROW_SIZE - spacing.top;
            break;
        case 'right':
            x = coords.x + ARROW_SIZE + spacing.right;
            y = coords.y - bubble.offsetHeight / 2;
            break;
        case 'bottom':
            x = coords.x - bubble.offsetWidth / 2;
            y = coords.y + ARROW_SIZE + spacing.bottom;
            break;
        case 'left':
            x = coords.x - bubble.offsetWidth - ARROW_SIZE - spacing.left;
            y = coords.y - bubble.offsetHeight / 2;
            break;
        }
        bubble.style.setProperty('transform', 'translateX(0)');
        return { x, y };
    }

    private checkVisibility(element: Element): void {
        const mainWidth = document.getElementById('router-view-container').clientWidth;
        const menuWidth = this.checkSideMenu ? document.getElementById('side-bar-nav').clientWidth : 0;
        let inDialog = false;
        let transformation = 0;
        let parentElement = this.targetElement.parentElement;

        while (parentElement.parentElement) {
            if (parentElement.parentElement.getAttribute('name') === 'dialog-box') {
                inDialog = true;
                break;
            }
            parentElement = parentElement.parentElement;
        }

        switch (this.position) {
        case 'top':
            if (getCoords(element, 'top right', null).x > mainWidth + menuWidth) {
                transformation = getCoords(element, 'top right', null).x - (mainWidth + menuWidth);
                (element as HTMLElement).style.setProperty('transform', `translateX(-${transformation}px)`);
            } else if (getCoords(element, 'top left', null).x < (inDialog ? 0 : menuWidth)) {
                transformation = (getCoords(element, 'top left', null).x - (inDialog ? 0 : menuWidth)) * -1;
                (element as HTMLElement).style.setProperty('transform', `translateX(${transformation}px)`);
            }
            if (getCoords(element, 'top center', null).y < 0) {
                this.position = 'bottom';
                this.positionBubble();
            }
            break;
        case 'right':
            if (element.clientWidth > mainWidth / 2) {
                this.position = 'bottom';
                (element as HTMLElement).style.setProperty('width', `${mainWidth * 0.95}px`);
                this.positionBubble();
            } else if (getCoords(element, 'center right', null).x > menuWidth + mainWidth) {
                this.position = 'left';
                this.positionBubble();
            }
            break;
        case 'bottom':
            if (getCoords(element, 'bottom right', null).x > mainWidth + menuWidth) {
                transformation = getCoords(element, 'bottom right', null).x - (mainWidth + menuWidth);
                (element as HTMLElement).style.setProperty('transform', `translateX(-${transformation}px)`);
            } else if (getCoords(element, 'bottom left', null).x < (inDialog ? 0 : menuWidth)) {
                transformation = (getCoords(element, 'bottom left', null).x - (inDialog ? 0 : menuWidth)) * -1;
                (element as HTMLElement).style.setProperty('transform', `translateX(${transformation}px)`);
            }
            if (getCoords(element, 'bottom center', null).y > window.innerHeight) {
                this.position = 'top';
                this.positionBubble();
            }
            break;
        case 'left':
            if (element.clientWidth > mainWidth / 2) {
                this.position = 'bottom';
                (element as HTMLElement).style.setProperty('width', `${mainWidth * 0.95}px`);
                this.positionBubble();
            } else if (getCoords(element, 'center left', null).x < (inDialog ? 0 : menuWidth)) {
                this.position = 'right';
                this.positionBubble();
            }
            break;
        }
    }

    private defineSpacing(): WhiteSpace {
        const spacing = this.spacing;
        !spacing.right ? spacing.right = spacing.top : null;
        !spacing.bottom ? spacing.bottom = spacing.top : null;
        !spacing.left ? spacing.left = spacing.right : null;
        return spacing;
    }

    private findElement(): Element {
        let element: Element;

        if (typeof this.element === 'string') {
            element = document.querySelector(this.element);
        } else {
            element = this.element as Element;
        }
        if (element === null) {
            throw new Error('[InfoBubble] element was not found');
        }
        return element;
    }

    private findTargetPosition(): Coords {
        if (this.position === 'top' || this.position === 'bottom') {
            return getCoords(this.targetElement, this.position + ' center', null);
        } else if (this.position === 'right' || this.position === 'left') {
            return getCoords(this.targetElement, 'center ' + this.position, null);
        } else {
            return { x: 0, y: 0 }
        }
    }

    private positionBubble(): void {
        const spacing = this.defineSpacing();
        const targetPosition = this.findTargetPosition();
        const bubblePosition = this.calculateBubblePosition(targetPosition, spacing);

        (this.$refs['bubble'] as HTMLElement).style
            .setProperty('inset', `${bubblePosition.y}px auto auto ${bubblePosition.x}px`);
        (this.$refs['arrow'] as HTMLElement).style
            .setProperty('inset',
                /*eslint-disable indent */
                `${targetPosition.y + (this.position === 'left' || this.position === 'right'
                    ? 0
                    : spacing[this.position]
                ) * (this.position === 'top' ? -1 : 1)}px auto auto
                ${targetPosition.x + (this.position === 'top' || this.position === 'bottom'
                    ? 0
                    : spacing[this.position]
                ) * (this.position === 'left' ? -1 : 1)}px`
                /*eslint-disable indent */
            );

        this.checkVisibility(this.$refs['bubble'] as Element);
    }
}

</script>
