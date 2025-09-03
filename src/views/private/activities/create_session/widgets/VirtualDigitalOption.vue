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
         name="virtual-digital-option"
         :class="enableDigitals ? '' : 'disabled'"
         data-option-block>
        <option-block>
            <template #title>
                <input type="checkbox"
                       name="digitals"
                       class="no-spacing section-input"
                       @click="enableDigitalsClick">
                <h4 class="h4 title">
                    {{ $t('activities.createSession.options.digitals') }}
                </h4>
                <tooltip :sup="true">
                    <h4 class="h5">{{ $t('activities.createSession.options.digitalsExplanationTitle') }}</h4>
                    <span class="help-text">
                        {{ $t('activities.createSession.options.digitalsExplanation') }}
                    </span>
                    <hr>
                    <h4 class="h5">
                        {{ $t('activities.createSession.options.digitalsAllowGroupsExplanationTitle') }}
                    </h4>
                    <span class="help-text">
                        {{ $t('activities.createSession.options.digitalsAllowGroupsExplanation') }}
                    </span>
                    <template v-if="sessionDigitalAutoSend">
                        <hr>
                        <h4 class="h5">
                            {{ $t('activities.createSession.options.digitalsAutoSendingExplanationTitle') }}
                        </h4>
                        <span class="help-text">
                            {{ $t('activities.createSession.options.digitalsAutoSendingExplanation') }}
                        </span>
                    </template>
                </tooltip>
            </template>
            <template #option-price-digital>
                <label for="price-digitals" class="titles">
                    {{ $t('activities.createSession.options.digitalsPrice') }}
                </label>
                <unit-decorator-wrapper :unit="$t('generic.units.dollar')">
                    <input type="text"
                           ref="price-digitals"
                           name="price-digitals"
                           v-model="digitalsPrice"
                           @keyup="digitalsPriceKeyup">
                </unit-decorator-wrapper>
            </template>
            <template #option-group-digital>
                <label>
                    <input type="checkbox"
                           ref="group-digitals"
                           name="group-digitals"
                           class="no-spacing"
                           @click="enableGroupDigitalsClick">
                    <span class="titles">
                        {{ $t('activities.createSession.options.groupDigitals') }}
                    </span>
                </label>
                <label for="group-price-digitals"
                       class="option-context-box titles">
                    {{ $t('activities.createSession.options.digitalGroupsPrice') }}
                </label>
                <unit-decorator-wrapper :unit="$t('generic.units.dollar')">
                    <input type="text"
                           ref="price-group-digitals"
                           name="group-price-digitals"
                           v-model="groupDigitalsPrice"
                           @keyup="groupDigitalsPriceKeyup">
                </unit-decorator-wrapper>
            </template>
            <template v-if="sessionDigitalAutoSend" #option-auto-send-digital>
                <label>
                    <input type="checkbox"
                           name="auto-send-digitals"
                           class="no-spacing"
                           v-model="enableAutoSendDigitals"
                           @click="enableAutoDigitalsClick">
                    <span>{{ $t('activities.createSession.options.autoSendDigitals') }}</span>
                </label>
            </template>
        </option-block>
    </div>
</template>

<script lang="ts">
import { environment } from '@pictaccio/admin-gui/environment';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import OptionBlock from '@pictaccio/admin-gui/views/components/widgets/OptionBlock.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import UnitDecoratorWrapper from '@pictaccio/admin-gui/views/components/widgets/UnitDecoratorWrapper.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

export type VirtualDigitalOptionSelection = {
    enableDigitals: boolean;
    enableGroupDigitals: boolean;
    digitalsPrice: number[];
    groupDigitalsPrice: number[];
    enableAutoSendDigitals: boolean;
};

@Component({
    name: 'VirtualDigitalOption',
    components: {
        UnitDecoratorWrapper,
        OptionBlock,
        UnitDecorator,
        Tooltip
    },
    expose: [
        'getEnableDigitals',
        'getEnableGroupDigitals',
        'getDigitalPrice',
        'getDigitalGroupPrice',
        'getEnableAutoSendDigitals',
        'setEnableDigitals',
        'setEnableGroupDigitals',
        'setDigitalPrice',
        'setGroupDigitalPrice',
        'setEnableAutoSendDigitals'
    ],
    emits: [
        'digitals-enabled',
        'group-digitals-enabled'
    ]
})
export default class VirtualDigitalOption extends Vue {
    private enableDigitals = false;
    private enableGroupDigitals = false;
    private enableAutoSendDigitals = false;
    private digitalsPrice = '';
    private groupDigitalsPrice = '';
    private sessionDigitalAutoSend = environment.features.sessionDigitalAutoSend;
    private optionBlock: HTMLElement;

    public getEnableDigitals(): boolean {
        return this.enableDigitals;
    }

    public getEnableGroupDigitals(): boolean {
        return this.enableGroupDigitals;
    }

    public getDigitalPrice(): number[] {
        return this.digitalsPrice !== ''
            ? this.digitalsPrice.split(',').map(i => parseFloat(i))
            : [];
    }

    public getDigitalGroupPrice(): number[] {
        return this.groupDigitalsPrice !== ''
            ? this.groupDigitalsPrice.split(',').map(i => parseFloat(i))
            : [];
    }

    public getEnableAutoSendDigitals(): boolean {
        return this.enableAutoSendDigitals;
    }

    public getSelection(): VirtualDigitalOptionSelection {
        return {
            enableDigitals: this.getEnableDigitals(),
            enableGroupDigitals: this.getEnableGroupDigitals(),
            digitalsPrice: this.getDigitalPrice(),
            groupDigitalsPrice: this.getDigitalGroupPrice(),
            enableAutoSendDigitals: this.getEnableAutoSendDigitals()
        };
    }

    public setEnableDigitals(enabled: boolean): void {
        this.enableDigitals = enabled;

        if (this.enableGroupDigitals && !enabled) {
            this.enableGroupDigitalsClick();
        }

        if (!enabled) {
            this.enableGroupDigitals = false;
            this.digitalsPrice = '';
            this.groupDigitalsPrice = '';
        }

        this.optionBlock.querySelectorAll('input:not(.section-input)').forEach((input) => {
            if (!this.enableDigitals) {
                input.setAttribute('disabled', 'disabled');
            } else {
                input.removeAttribute('disabled');
            }
        });

        (this.$refs['price-group-digitals'] as HTMLInputElement).disabled = !this.enableGroupDigitals;
    }

    public setEnableGroupDigitals(enabled: boolean): void {
        this.enableGroupDigitals = enabled;

        if (!enabled) {
            this.groupDigitalsPrice = '';
        }

        (this.$refs['price-group-digitals'] as HTMLInputElement).disabled = !enabled;
    }

    public setDigitalPrice(price: number[]): void {
        this.digitalsPrice = price.join(',');
    }

    public setGroupDigitalPrice(price: number[]): void {
        this.groupDigitalsPrice = price.join(',');
    }

    public setEnableAutoSendDigitals(value: boolean): void {
        this.enableAutoSendDigitals = value;
    }

    public setSelection(data: VirtualDigitalOptionSelection): void {
        this.setEnableDigitals(data.enableDigitals);
        this.setEnableGroupDigitals(data.enableGroupDigitals);
        this.setDigitalPrice(data.digitalsPrice);
        this.setGroupDigitalPrice(data.groupDigitalsPrice);
        this.setEnableAutoSendDigitals(data.enableAutoSendDigitals);
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.optionBlock = this.$refs['option-block'] as HTMLElement;
        this.optionBlock['__loufairyBridge__'] = this;

        this.setEnableDigitals(false);
        this.setEnableGroupDigitals(false);
    }

    /* EVENT HANDLERS */
    private enableDigitalsClick(): void {
        this.enableDigitals = !this.enableDigitals;

        this.setEnableDigitals(this.enableDigitals);

        this.$emit('digitals-enabled', this.enableDigitals);
    }

    private enableGroupDigitalsClick(): void {
        if (!this.enableDigitals) {
            (this.$refs['group-digitals'] as HTMLInputElement).checked = false;
            return;
        }

        this.enableGroupDigitals = !this.enableGroupDigitals;

        this.setEnableGroupDigitals(this.enableGroupDigitals);

        this.$emit('group-digitals-enabled', this.enableGroupDigitals);
    }

    private digitalsPriceKeyup(): void {
        this.enableDigitals = this.digitalsPrice !== '';
        this.$emit('digitals-enabled', this.enableDigitals);
    }

    private groupDigitalsPriceKeyup(): void {
        this.enableGroupDigitals = this.groupDigitalsPrice !== '';
        this.$emit('group-digitals-enabled', this.enableGroupDigitals);
    }

    private enableAutoDigitalsClick(): void {
        this.enableAutoSendDigitals = !this.enableAutoSendDigitals;

        if (this.enableAutoSendDigitals) {
            this.enableDigitals = true;
        }
    }
}
</script>
