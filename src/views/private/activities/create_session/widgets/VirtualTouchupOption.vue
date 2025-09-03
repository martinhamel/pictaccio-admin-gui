<style lang="scss" scoped>
.virtual-option-block {
    display: contents;

    &.disabled {
        pointer-events: none !important;
        cursor: default !important;

        .titles {
            opacity: 0.75;
        }
    }

    .titles,
    .title {
        margin: 0.5rem 0 0 0;

        &.h4 {
            margin: 0;
            transform: translateY(-0.5rem);
        }
    }

    :deep(.highlight) {
        border-color: var(--color-semantic-error);
    }
}
</style>

<template>
    <div class="virtual-option-block"
         ref="option-block"
         :class="enableTouchups ? '' : 'disabled'"
         name="virtual-touchup-option"
         data-option-block>
        <option-block>
            <template #title>
                <input type="checkbox"
                       name="touchups"
                       class="no-spacing"
                       v-model="enableTouchups"
                       @click="enableTouchupsClick">
                <h4 class="h4 title">{{ $t('activities.createSession.options.touchups') }}</h4>
                <tooltip :sup="true" :align="'right'">
                    <h4 class="h5">{{ $t('activities.createSession.options.touchupsExplanationTitle') }}</h4>
                    <span class="help-text">
                        {{ $t('activities.createSession.options.touchupsExplanation') }}
                    </span>
                </tooltip>
            </template>
            <template #option-price-touchup>
                <label for="price-touchups" class="titles">
                    {{ $t('activities.createSession.options.touchupsPrice') }}
                </label>
                <unit-decorator-wrapper :unit="$t('generic.units.dollar')">
                    <input type="text"
                           ref="price-touchups"
                           :class="enableTouchups ? '' : 'disabled'"
                           name="price-touchups"
                           v-model="touchupsPrice"
                           @keyup="touchupsPriceChange">
                </unit-decorator-wrapper>
            </template>
        </option-block>
    </div>
</template>

<script lang="ts">
import OptionBlock from '@pictaccio/admin-gui/views/components/widgets/OptionBlock.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import UnitDecoratorWrapper from '@pictaccio/admin-gui/views/components/widgets/UnitDecoratorWrapper.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

export type VirtualTouchupOptionSelection = {
    enableTouchups: boolean;
    touchupsPrice: number[];
};

@Component({
    name: 'VirtualTouchupOption',
    components: {
        UnitDecoratorWrapper,
        OptionBlock,
        UnitDecorator,
        Tooltip
    },
    expose: [
        'getTouchupsPrice',
        'getEnableTouchups',
        'setEnableTouchups',
        'setTouchupsPrice'
    ]
})
export default class VirtualTouchupOption extends Vue {
    private enableTouchups = false;
    private touchupsPrice = '';
    private optionBlock: HTMLElement;

    public getEnableTouchups(): boolean {
        return this.enableTouchups;
    }

    public getTouchupsPrice(): number[] {
        return this.touchupsPrice !== ''
            ? this.touchupsPrice.split(',').map(i => parseFloat(i))
            : [];
    }

    public getSelection(): VirtualTouchupOptionSelection {
        return {
            enableTouchups: this.getEnableTouchups(),
            touchupsPrice: this.getTouchupsPrice()
        };
    }

    public setEnableTouchups(value: boolean): void {
        this.enableTouchups = value;
    }

    public setTouchupsPrice(price: number[]): void {
        this.touchupsPrice = price.join(',');
    }

    public setSelection(selection: VirtualTouchupOptionSelection): void {
        this.setEnableTouchups(selection.enableTouchups);
        this.setTouchupsPrice(selection.touchupsPrice);
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.optionBlock = this.$refs['option-block'] as HTMLElement;
        this.optionBlock['__loufairyBridge__'] = this;
    }

    /* PRIVATES */
    private enableTouchupsClick(): void {
        this.enableTouchups = !this.enableTouchups;
    }

    private touchupsPriceChange(): void {
        this.enableTouchups = this.touchupsPrice !== '';
    }
}
</script>
