<style lang="scss" scoped>
.disabled-container {
    display: flex;
    position: relative;
    justify-content: center;
    height: 2.2rem;

    .disabled {
        font-size: small;
        width: max-content;
    }
}
</style>

<template>
    <div>
        <span class="disabled-container"
              ref="container"
              @mouseover="toggleBubble(true)"
              @mouseout="toggleBubble(false)">
            <slot></slot>
        </span>
        <tooltip-bubble v-if="tooltipVisible && bubbleVisible"
                     ref="disabledBubble"
                     :element="infoBubble"
                     :spacing="{ top:5 }">
            <span class="disabled">
                {{ $t('generic.ui.fieldMissing') }}
            </span>
        </tooltip-bubble>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TooltipBubble from '@pictaccio/admin-gui/views/components/widgets/TooltipBubble.vue';

@Component({
    name: 'Disabled Tooltip',
    components: {
        FontAwesomeIcon,
        TooltipBubble
    }
})

export default class DisabledTooltip extends Vue {
    @Prop
    private activity: string;
    private infoBubble: Node;
    private bubbleVisible = false;
    @Prop
    private tooltipVisible: boolean;

    /* LIFECYCLE */
    public mounted(): void {
        this.infoBubble = this.$refs['container'] as Node;
    }

    /* EVENT HANDLERS */

    private toggleBubble(visible: boolean): void {
        if (this.tooltipVisible) { this.bubbleVisible = visible; }
        if (this.bubbleVisible) {
            this.$nextTick(() => { (this.$refs['disabledBubble'] as TooltipBubble).setPosition('top') });
        }
    }
}
</script>
