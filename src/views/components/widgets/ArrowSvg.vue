<style lang="scss" scoped>
.arrow {
    display: block;
    position: absolute;
    z-index: 99;
    font-size: 5rem;
    filter: drop-shadow(1.1rem 1.1rem 0rem var(--color-mix-1-6-step-1));
    transform-origin: 50% 50%;
    color: var(--color-mix-1-4-step-1);

}
#filters {
    display: none;
}
</style>

<template>
    <span class="arrow"
         ref="arrow">
        <font-awesome-icon :icon="['fal', `arrow-turn-${whichArrow}`]"/>
    </span>

</template>

<script lang="ts">
import { Coords, getCoords } from '@pictaccio/admin-gui/utils/get_coords';
import { toRaw } from 'vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export type ArrowOrientation =
    'top-left_up' |
    'top-left_down' |
    'top-right_up' |
    'top-right_down' |
    'bottom-left_up' |
    'bottom-left_down' |
    'bottom-right_up' |
    'bottom-right_down';

type ArrowIcon = 'up' | 'down';

@Component({
    name: 'ArrowSvg',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'arrow-positioned'
    ],
    expose: [
        'setCoords',
        'setOrientation'
    ]
})
export default class ArrowSvg extends Vue {
    private arrowOrientation: ArrowOrientation = 'top-right_up';
    private arrowPointTo: Coords;
    private arrowFrom: Coords;
    private whichArrow: ArrowIcon = 'up';
    private arrowContainer: HTMLElement;

    public getArrowFrom(): Coords {
        return this.arrowFrom;
    }

    public setCoords(coords: Coords): void {
        this.arrowPointTo = coords;
        this.setPosition();
        this.setRotation();
        this.$nextTick(() => {
            this.calculateArrowFrom();
            this.$emit('arrow-positioned', this.getArrowFrom());
        });
    }

    public setOrientation(orientation: ArrowOrientation): void {
        this.arrowOrientation = orientation;
        this.setArrowType();
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.arrowContainer = this.$refs['arrow'] as HTMLElement;
    }
    /* PRIVATE */
    private adjustArrowPosition(): string {
        switch (this.arrowOrientation) {
        case 'top-left_up':
            return 'transform: translate(0%, -50%);';
        case 'top-left_down':
            return 'transform: translate(-50%, 0%);';
        case 'top-right_up':
            return 'transform: translate(-50%, 0%);';
        case 'top-right_down':
            return 'transform: translate(-100%, -50%);';
        case 'bottom-left_up':
            return 'transform: translate(-50%, -100%);';
        case 'bottom-left_down':
            return 'transform: translate(0%, -50%);';
        case 'bottom-right_up':
            return 'transform: translate(-100%, -50%);';
        case 'bottom-right_down':
            return 'transform: translate(-50%, -100%);';
        }
    }
    private calculateArrowFrom(): void {
        let anchor;
        switch (this.arrowOrientation) {
        case 'top-left_up':
            anchor = 'bottom right'
            break;
        case 'top-left_down':
            anchor = 'bottom right'
            break;
        case 'top-right_up':
            anchor = 'bottom left'
            break;
        case 'top-right_down':
            anchor = 'bottom left'
            break;
        case 'bottom-left_up':
            anchor = 'top right'
            break;
        case 'bottom-left_down':
            anchor = 'top right'
            break;
        case 'bottom-right_up':
            anchor = 'top left'
            break;
        case 'bottom-right_down':
            anchor = 'top left'
            break;
        }

        this.arrowFrom = getCoords(this.arrowContainer, anchor);
    }

    private setRotation(): void {
        let rotation;
        switch (this.arrowOrientation) {
        case 'top-left_up':
            rotation = 'transform: rotate(-90deg);';
            break;
        case 'top-left_down':
            rotation = 'transform: rotate(-180deg);';
            break;
        case 'top-right_up':
            rotation = 'transform: rotate(0deg);';
            break;
        case 'top-right_down':
            rotation = 'transform: rotate(-90deg);';
            break;
        case 'bottom-left_up':
            rotation = 'transform: rotate(180deg);';
            break;
        case 'bottom-left_down':
            rotation = 'transform: rotate(90deg);';
            break;
        case 'bottom-right_up':
            rotation = 'transform: rotate(90deg);';
            break;
        case 'bottom-right_down':
            rotation = 'transform: rotate(0deg);';
            break;
        }

        this.arrowContainer.querySelector('.svg-inline--fa').setAttribute('style', rotation);
    }

    private setArrowType(): void {
        this.whichArrow = this.arrowOrientation.endsWith('up') ? 'up' : 'down';
    }

    private setPosition(): void {
        this.arrowContainer.setAttribute('style',
            `left: ${this.arrowPointTo.x}px;` +
            `top: ${this.arrowPointTo.y}px;` +
            this.adjustArrowPosition()
        );
    }
}
</script>
