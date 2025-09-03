<style lang="scss" scoped>
.help-container {
    display: inline;
    cursor: pointer;
    order: 1;
    align-self: flex-start;

    [data-theme-color="dark"] & {
        --color-background-bubble: hsl(
                var(--color-primary-4-h),
                calc(var(--color-primary-4-s) - 25%),
                calc(var(--color-primary-4-l) - 5%)
        );
    }

    [data-theme-color="light"] & {
        --color-background-bubble: hsl(
                var(--color-primary-4-h),
                calc(var(--color-primary-4-s) - 15%),
                calc(var(--color-primary-4-l) + 15%)
        );
    }

    .help {
        font-size: 1.2rem;
        width: max-content;
        &:hover {
            text-decoration-line: underline;
        }
    }

    .info-icon-span {
        pointer-events: all;
        margin-left: 0.5rem;
        display: flex;
    }

    .info-icon {
        height: 1.3rem;
        fill: var(--color-text-normal);
        transform: translateY(0.5rem);
        cursor: pointer;
        &:hover {
        }
    }
}
</style>

<template>
    <div class="help-container" :class="[
            sup ? 'text-sup' : ''
        ]">
        <span ref="info-icon"
              class="info-icon-span"
              @mouseenter="toggleBubble(true)"
              @mouseleave="toggleBubble(false)">
            <slot name="trigger">
                <font-awesome-icon :icon="['far', 'circle-info']"
                                   class="info-icon text-sup"/>
            </slot>
        </span>
        <tooltip-bubble :bubbleColor="'hsl(var(--color-primary-4-h),' +
                                   ' calc(var(--color-primary-4-s) - 25%),' +
                                   ' calc(var(--color-primary-4-l) - 5%))'"
                     v-if="bubbleVisible"
                     ref="infoBubble"
                     @mouseenter="hoverBubble(true)"
                     @mouseleave="hoverBubble(false)"
                     @hasSideMenu="hasSideMenu"
                     :element="infoBubble"
                     :spacing="{ top: 5 }">
            <slot></slot>
        </tooltip-bubble>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TooltipBubble from '@pictaccio/admin-gui/views/components/widgets/TooltipBubble.vue';

const TIMING_TIMEOUT = 700;

@Component({
    name: 'Tooltip',
    components: {
        FontAwesomeIcon,
        TooltipBubble
    }
})
export default class Tooltip extends Vue {
    @Prop
    private text: string;
    @Prop
    private hasSideMenu = true;
    @Prop
    private sup = false;
    @Prop
    private preventTooltip: () => boolean;
    private infoBubble: Node;
    private bubbleVisible = false;
    private timeoutId = undefined;

    /* LIFECYCLE */
    public mounted(): void {
        this.infoBubble = this.$refs['info-icon'] as Node;
    }

    /* EVENT HANDLERS */
    private hoverBubble(visible: boolean) {
        if (!visible && this.bubbleVisible) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.bubbleVisible = false;
            }, TIMING_TIMEOUT);
        } else if (visible && this.bubbleVisible) {
            clearTimeout(this.timeoutId);
        }
    }

    private toggleBubble(visible: boolean) {
        if (typeof this.preventTooltip === 'function' && this.preventTooltip()) {
            return;
        }

        if (!visible && this.bubbleVisible) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.bubbleVisible = false;
            }, TIMING_TIMEOUT);
        } else if (!visible && !this.bubbleVisible) {
            clearTimeout(this.timeoutId);
        } else {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.bubbleVisible = true;
                this.$nextTick(() => { (this.$refs['infoBubble'] as TooltipBubble).setPosition('top') });
            }, TIMING_TIMEOUT);
        }
    }
}
</script>
