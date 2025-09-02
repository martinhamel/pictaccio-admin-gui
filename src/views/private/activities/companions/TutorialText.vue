<style lang="scss" scoped>
.tutorial-text-component {
    --global-offset: 0 0;
    position: fixed;
    inset: 0;
    translate: var(--global-offset);
}

.tutorial-text-box {
    --button-scale-next: 1;
    --button-scale-skip: 1;
    color: var(--color-text-normal);
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    text-align: center;
    aspect-ratio: var(--aspect-ratio);

    [color-theme-dark] & {
        --color-mix-1-4-step-1: var(--color-mix-5-6-step-3);
        --color-mix-1-5-step-2: var(--color-mix-5-6-step-2);
        --color-mix-5-6-step-1: var(--color-mix-1-7-step-1);
    }

    &:hover .button {
        animation-name: none;
    }

    &:has(.skip:hover) {
        .skip {
            scale: 1.1;
        }
    }

    &:has(.next:hover) {
        .next {
            scale: 1.1;
        }
    }

    &:has(.background-container .blob-h-1) {
        padding: 5rem 3rem;
        --aspect-ratio: 182.91 / 126.03;
    }

    &:has(.background-container .blob-h-2) {
        padding: 4rem 2.5rem;
        --aspect-ratio: 181.56 / 121.85;
    }

    &:has(.background-container .blob-h-3) {
        padding: 4rem 2.5rem;
        --aspect-ratio: 187.75 / 127.93;
    }

    &:has(.background-container .blob-h-4) {
        padding: 4rem 2.5rem;
        --aspect-ratio: 176.16 / 97.42;
    }

    p {
        z-index: 3;
        font-family: 'Schoolbell', cursive;
        margin: -1rem 0 0 -1rem;
        font-size: 2rem;
        font-weight: 600;
        width: max-content;
        max-width: 40ch;
        display: flex;
        align-items: center;
        letter-spacing: 0.2rem;
        color: var(--color-mix-1-6-step-1);
    }

    .background-container {
        position: absolute;
        width: 100%;
        inset-block: 0;
        z-index: 0;
        filter: url(#bloby)
                drop-shadow(1.1rem 1.1rem 0rem var(--color-mix-1-6-step-1))
                drop-shadow(-2px -2px 0rem var(--color-mix-1-6-step-1))
                drop-shadow(2px -2px 0rem var(--color-mix-1-6-step-1))
                drop-shadow(-2px 2px 0rem var(--color-mix-1-6-step-1));
        color: var(--color-mix-1-4-step-1);

        .background {
            mask-size: 100%;
            mask-repeat: no-repeat;
            mask-position: center;
            position: absolute;
            height: 100%;
            @include center(x);
            color: inherit;
            aspect-ratio: var(--aspect-ratio);
            background-color: currentColor;

            &.blob-h-1 {
                mask-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.91 126.03"><path d="M182.87,65.22c-.24,5.48-2.11,10.64-3.92,15.6-1.84,5-4.36,9.71-7.33,14.13-20.99,32.5-62.9,35.92-97.19,26.51C45.05,113.55,1.89,95.71.03,60.46c-.42-10.49,3.89-20.88,10.4-28.94C29.87,8.12,62.88-.16,92.17,0c29.82.75,62.15,10.24,80.93,35.01,6.36,8.57,10.28,19.39,9.77,30.21Z"/></svg>');
            }

            &.blob-h-2 {
                mask-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.56 121.85"> <path d="M181.56,60.26c-.34,20.16-15.54,36.32-32.1,46.01-33.48,19.14-80.03,20.82-114.89,4.04-9.87-5.01-19.49-11.54-25.94-20.87C-.38,76.28-2.88,59.17,3.75,44.49,24.41-.99,106.83-9.45,147.8,9.37c10.36,4.89,20.58,11.52,26.9,21.4,5.45,8.66,6.94,19.54,6.86,29.49Z"/></svg>');
            }

            &.blob-h-3 {
                mask-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.75 127.93"><path d="M128.2,124.05c-30.19,6.2-62.63,5.93-90.87-8C17.26,106.31-1.01,87.51.04,63.35,1.76,28.7,37.96,9.98,68.07,4.86c24.88-4.4,51.04-7.93,75.9-.77,23.61,7.47,37.15,19.55,41.79,44.43.8,5.02,1.32,9.82,1.95,14.83,1.34,31.74-31.35,54.7-59.51,60.7Z"/></svg>');
            }

            &.blob-h-4 {
                mask-image: url('data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.16 97.42"><path d="M176.16,45.91c-.39,10.18-3.74,20.58-10.16,28.81-4.28,5.6-10.64,8.86-16.96,11.57-33.91,13.97-70.96,14.43-105.9,3.36-16.1-5.55-34.96-15.33-41.4-33.29C-1.78,46.69.21,34.96,6.08,26.73,15.07,13.84,30.12,7.56,43.74,3.95,77.33-4.07,111.76.67,142.98,13.12c13.52,5.93,32.81,16.02,33.18,32.79Z"/></svg>');
            }
        }

        .ui-background {
            color: inherit;
            filter: url(#bloby);

            .button-background {
                position: absolute;
                border-radius: 50%;
                //background-color: var(--color-mix-1-5-step-2);
                background-color: currentColor;
                color: inherit;
                cursor: pointer;
                text-shadow: unset;
            }
        }
    }

    .ui {
        --ui-offset: 0 0;
        position: absolute;
        z-index: 3;
        inset: auto var(--ui-offset) auto;
    }

    .next {
        --next-offset: 0 0;
        font-size: 3rem;
        margin: 2rem 0;
        padding: 0 2rem;
        inset: auto var(--next-offset) auto;
    }

    .skip {
        --skip-offset: 0 0;
        font-size: 2rem;
        padding: 1.5rem;
        font-weight: 800;
        inset: auto var(--skip-offset) auto;
    }

    .button {
        position: absolute;
        //color: inherit;
        cursor: pointer;
        pointer-events: all;
        white-space: nowrap;
        display: inline-flex;
        gap: 0.5rem;
        color: var(--color-mix-1-6-step-1);
        scale: var(--button-scale);
        transition: scale 0.3s ease-in-out;
        $alert-offset: 6px;
        $alert-rotate: -5deg;

        @include keyframes(hover) {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.1);
            }
        }

        @include animation(alert 10s infinite linear);
        @include keyframes(alert) {
            0%, 93% {
                transform: translateX(0) rotate(0);
            }
            93.5% {
                transform: translateX(-$alert-offset) rotate(-$alert-rotate);
            }
            94% {
                transform: translateX($alert-offset) rotate($alert-rotate);
            }
            95% {
                transform: translateX(-$alert-offset) rotate(-$alert-rotate);
            }
            96% {
                transform: translateX($alert-offset) rotate($alert-rotate);
            }
            97% {
                transform: translateX(-$alert-offset) rotate(-$alert-rotate);
            }
            98% {
                transform: translateX($alert-offset) rotate($alert-rotate);
            }
            98.5% {
                transform: translateX(0) rotate(0);
            }
        }
    }
}
</style>

<template>
    <div v-show="visible && targetElement"
         class="tutorial-text-component"
         :style="`--global-offset: ${uiOffsetInternal.global}`">
        <div ref="tutorial-text-box"
             class="tutorial-text-box"
             :class="orientation"
             :style="[
             getTextAdjustedPosition(),
             `left: ${arrowFrom.x}`,
             `top: ${arrowFrom.y}`
         ]">
            <p>
                <slot/>
            </p>
            <div class="ui" :style="`--ui-offset: ${uiOffsetInternal.ui}`">
                <div v-if="!last"
                     class="skip button"
                     :style="`--skip-offset: ${uiOffsetInternal.skip}`" @click="skipClick">
                    {{ $t('generic.ui.close') }} <font-awesome-icon :icon="['fas', 'chevron-double-right']"/>
                </div>
                <div class="next button" :style="`--next-offset: ${uiOffsetInternal.next}`" @click="nextClick">
                    {{ !last ? $t('generic.ui.next') : $t('generic.ui.finish') }}
                    <font-awesome-icon v-if="!last" :icon="['fas', 'chevron-right']"/>
                </div>
            </div>
            <div class="background-container">
                <div class="background" :class="backgroundShape">
                </div>
                <div class="ui ui-background" :style="`--ui-offset: ${uiOffsetInternal.ui}`">
                    <div v-if="!last"
                         class="skip button button-background"
                         :style="`--skip-offset: ${uiOffsetInternal.skip}`">
                        {{ $t('generic.ui.close') }} <font-awesome-icon :icon="['fas', 'chevron-double-right']"/>
                    </div>
                    <div class="next button button-background"
                         :style="`--next-offset: ${uiOffsetInternal.next}`">
                        {{ !last ? $t('generic.ui.next') : $t('generic.ui.finish') }}
                        <font-awesome-icon v-if="!last" :icon="['fas', 'chevron-right']"/>
                    </div>
                </div>
            </div>
        </div>
        <arrow-svg ref="arrow" @arrow-positioned="setArrowFrom"/>
    </div>
</template>

<script lang="ts">
import { Coords, getCoords } from '@pictaccio/admin-gui/src/utils/get_coords';
import ArrowSvg, { ArrowOrientation } from '@pictaccio/admin-gui/src/views/components/widgets/ArrowSvg.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export type TargetPosition = {
    coords1: Coords;
    coords2: Coords;
}

const UI_OFFSET = {
    ui: '0 0',
    next: '0.2rem 1rem',
    skip: '5.5rem -1.5rem',
    global: '0 0'
};

@Component({
    name: 'TutorialText',
    components: {
        ArrowSvg,
        FontAwesomeIcon
    },
    emits: [
        'mounted',
        'next-click',
        'skip-click'
    ],
    expose: [
        'isReady',
        'setTargetPosition'
    ]
})
export default class TutorialText extends Vue {
    @Prop
    private orientation: ArrowOrientation;
    @Prop
    private nameRef: string;
    @Prop
    private backgroundShape: string;
    @Prop
    private uiOffset: {
        ui?: string,
        next?: string,
        skip?: string,
        global?: string
    };
    @Prop
    private readinessCondition: () => boolean;
    @Prop
    private targetQuery: string;
    @Prop
    private targetFocus = false;

    private uiOffsetInternal = UI_OFFSET;

    private last = false;
    private target: TargetPosition;
    private targetElement: HTMLElement;
    private arrow: ArrowSvg;
    private arrowPointTo: Coords = { x: 0, y: 0 };
    private arrowFrom: Coords = { x: 0, y: 0 };
    private observer = new IntersectionObserver(this.targetMove.bind(this), {
        root: document
    });
    private boundResizeListener = this.documentResize.bind(this);

    private visible = false;
    private tutorials: Record<string, any> = {};

    public get isVisible(): boolean {
        return this.visible;
    }

    public get name(): string {
        return this.nameRef;
    }

    public isReady(): boolean {
        if (typeof this.readinessCondition !== 'function') {
            return true;
        }

        return this.readinessCondition();
    }

    public toggleVisibility(visible: boolean, last = false): void {
        this.visible = visible;
        this.last = last;

        if (visible) {
            this.refresh();
        }
    }

    public setTargetPosition(target: TargetPosition) {
        this.target = target;
        this.initializeTutorial();
    }

    /* LIFECYCLE */
    public beforeMount(): void {
        if (this.$parent.$.type.name !== 'TutorialOverlay') {
            throw new Error('TutorialText must be a child of TutorialOverlay');
        }

        if (!this.targetQuery) {
            throw new Error('TutorialText must have a targetQuery');
        }

        this.uiOffsetInternal = {
            ...UI_OFFSET,
            ...this.uiOffset
        };
    }

    public mounted(): void {
        if (this.readinessCondition) {
            this.$watch(this.readinessCondition, () => {
                this.$parent['readinessChange']();
            });
        }

        window.addEventListener('resize', this.boundResizeListener);

        this.initializeTutorialText();
        this.captureTarget();
    }

    public beforeUnmount(): void {
        this.observer.disconnect();
        window.removeEventListener('resize', this.boundResizeListener);
        if (this.targetElement) {
            this.targetElement.classList.remove('tutorial-target-focus');
        }
    }

    /* EVENT HANDLER */
    private documentResize(): void {
        this.refresh();
    }

    private skipClick(): void {
        this.$parent['skipClick']();
        this.targetElement.classList.remove('tutorial-target-focus');
    }

    private nextClick(): void {
        this.$parent['nextClick'](this);
        this.targetElement.classList.remove('tutorial-target-focus');
    }

    private targetMove(entries: IntersectionObserverEntry[]): void {
        this.refresh();
    }

    /* PRIVATE */
    private captureTarget(): void {
        this.targetElement = document.querySelector(this.targetQuery) as HTMLElement;

        if (!this.targetElement) {
            const timerCallback = () => {
                this.targetElement = document.querySelector(this.targetQuery) as HTMLElement;

                if (this.targetElement) {
                    this.observer.observe(this.targetElement);
                } else {
                    setTimeout(timerCallback, 1000);
                }
            };

            setTimeout(timerCallback, 1000);
        } else {
            this.observer.observe(this.targetElement);
        }
    }

    private initializeTutorialText(): void {
        this.arrow = this.$refs['arrow'] as ArrowSvg;
        this.arrow.setOrientation(this.orientation);
        (this.$refs['arrow'] as ArrowSvg).setCoords({ x: -1000, y: -1000 });
    }

    private refresh(): void {
        if (!this.visible || !this.targetElement) {
            return;
        }

        if (this.targetFocus) {
            this.targetElement.classList.add('tutorial-target-focus');
        }

        this.$nextTick(() => {
            this.setTargetPosition({
                coords1: getCoords(this.targetElement, 'top left', null),
                coords2: getCoords(this.targetElement, 'bottom right', null)
            });
        });
    }

    private initializeTutorial(): void {
        this.getTargetPos();
        this.arrow.setCoords(this.arrowPointTo);
    }

    private getTargetPos(): void {
        if (!this.target) {
            return;
        }

        this.arrowPointTo = this.getArrowCoordsPosition();
    }

    private getArrowCoordsPosition(): Coords {
        const targetWidth = this.target.coords2.x - this.target.coords1.x;
        const targetHeight = this.target.coords2.y - this.target.coords1.y;

        switch (this.orientation) {
        case 'top-left_up':
            return {
                x: this.target.coords2.x,
                y: (this.target.coords1.y + (targetHeight / 2))
            };
        case 'top-left_down':
            return {
                x: (this.target.coords1.x + (targetWidth / 2)),
                y: this.target.coords2.y
            };
        case 'top-right_up':
            return {
                x: (this.target.coords1.x + (targetWidth / 2)),
                y: this.target.coords2.y
            };
        case 'top-right_down':
            return {
                x: this.target.coords1.x,
                y: (this.target.coords1.y + (targetHeight / 2))
            };
        case 'bottom-left_up':
            return {
                x: (this.target.coords1.x + (targetWidth / 2)),
                y: this.target.coords1.y
            };
        case 'bottom-left_down':
            return {
                x: this.target.coords2.x,
                y: (this.target.coords1.y + (targetHeight / 2))
            };
        case 'bottom-right_up':
            return {
                x: this.target.coords1.x,
                y: (this.target.coords1.y + (targetHeight / 2))
            };
        case 'bottom-right_down':
            return {
                x: (this.target.coords1.x + (targetWidth / 2)),
                y: this.target.coords1.y
            };
        }
    }

    private getTextAdjustedPosition(): string {
        switch (this.orientation) {
        case 'top-left_up':
            return 'transform: translate(-25%, 0%);';
        case 'top-left_down':
            return 'transform: translate(0%, -50%);';
        case 'top-right_up':
            return 'transform: translate(-100%, -50%);';
        case 'top-right_down':
            return 'transform: translate(-50%, 0%);';
        case 'bottom-left_up':
            return 'transform: translate(0%, -50%);';
        case 'bottom-left_down':
            return 'transform: translate(-50%, -100%);';
        case 'bottom-right_up':
            return 'transform: translate(-50%, -100%);';
        case 'bottom-right_down':
            return 'transform: translate(-100%, -50%);';
        }
    }

    private setArrowFrom(coords: Coords): void {
        this.arrowFrom = coords;
        (this.$refs['tutorial-text-box'] as HTMLElement)
            .setAttribute('style',
                this.getTextAdjustedPosition() +
                `left: ${this.arrowFrom.x}px;` +
                `top: ${this.arrowFrom.y}px;`);
    }
}
</script>
