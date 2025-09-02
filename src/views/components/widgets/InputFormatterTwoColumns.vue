<style lang="scss" scoped>
.label-formatter {
    --max-width: 100%;
    :deep(label) {
        --text-width: 0;
        --star-width: calc(var(--max-width) - var(--text-width));
        display: grid;
        grid-template-columns: var(--text-width) var(--star-width) auto;
        width: 100%;

        :first-child {
            grid-column: 1 / 2;
        }

        input {
            width: 100%;
            order: 10;
            grid-column: 3 / -1;
        }
    }
}
</style>

<template>
    <div ref="input-block" class="label-formatter">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'InputFormatterTwoColumns',
    components: {
        FontAwesomeIcon
    },
    emits: [
    ]
})
export default class InputFormatterTwoColumns extends Vue {
    public mounted() {
        this.$watch(() => this.$i18n.locale, () => {
            this.$nextTick(() => this.formatLabels());
        });

        this.formatLabels();
    }

    private formatLabels() {
        const inputBlock: HTMLElement = this.$refs['input-block'] as HTMLElement;
        const labelCollection = inputBlock
            .querySelectorAll('label:has(input:not([type="checkbox"])):has(input:not([type="radio"]))');

        let largerLabelWidth = 0;

        for (const label of labelCollection) {
            const labelFont = window.getComputedStyle(label).getPropertyValue('font-size') + ' ' +
                window.getComputedStyle(label).getPropertyValue('font-family');
            const labelWidth = this.calculateTextWidth(label.textContent, labelFont);
            largerLabelWidth = (largerLabelWidth > labelWidth) ? largerLabelWidth : labelWidth;

            label.setAttribute('style', `--text-width: ${labelWidth}px`);
        }

        inputBlock.setAttribute('style', `--max-width: calc(${largerLabelWidth}px + 20px)`);
    }

    private calculateTextWidth(text: string, font: string): number {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
    }
}
</script>
