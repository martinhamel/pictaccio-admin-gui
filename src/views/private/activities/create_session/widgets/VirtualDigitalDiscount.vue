<style lang="scss" scoped>
.virtual-discount-block {
    display: contents;

    &.disabled {
        pointer-events: none !important;
        cursor: default !important;

        .titles {
            opacity: 0.75;
        }
    }

    .title {
        &.disabled {
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
    <div class="virtual-discount-block disabled"
         ref="option-block"
         name="virtual-digital-discount"
         data-option-block>
        <option-block>
            <template #title>
                <input type="checkbox"
                       ref="digital-discount"
                       name="digital-discount"
                       class="no-spacing section-input"
                       :class="disabled ? 'disabled' : ''"
                       @click="enableDiscountClick">
                <h4 class="h4 title" :class="disabled ? 'disabled' : ''">
                    {{ $t('activities.createSession.options.discount') }}
                </h4>
                <tooltip :sup="true">
                    <h4 class="h5">{{ $t('activities.createSession.options.discountExplanationTitle') }}</h4>
                    <span class="help-text">
                        {{ $t('activities.createSession.options.discountExplanation') }}
                    </span>
                </tooltip>
            </template>
            <template #option-discount>
                <label for="discount-catalog" class="titles">
                    {{ $t('activities.createSession.options.discountCatalog') }}
                </label>
                <dropdown v-if="productCatalogVisible"
                          ref="discount-catalog"
                          name="discount-catalog"
                          dropdownName="discount-catalog"
                          :disabled="disabled || !enableDiscount"
                          :placeholder="$t('activities.createSession.options.discountCatalogPlaceholder')"
                          @change="discountCatalogChange">
                    <template v-for="productCatalog in productCatalogList()"
                           :key="productCatalog.id">
                        <label :value="productCatalog.id">
                            <span>
                                {{ productCatalog.value }}
                            </span>
                        </label>
                    </template>
                </dropdown>
                <label for="price-digitals" class="titles">
                    {{ $t('activities.createSession.options.digitalsDiscount') }}
                </label>
                <unit-decorator-wrapper :unit="$t('generic.units.dollar')">
                    <input type="text"
                           ref="digitals-discount"
                           name="digitals-discount"
                           v-model="digitalsDiscount"
                           @keyup="digitalsDiscountKeyup">
                </unit-decorator-wrapper>
                <label for="price-digitals" class="titles">
                    {{ $t('activities.createSession.options.groupDigitalsDiscount') }}
                </label>
                <unit-decorator-wrapper :unit="$t('generic.units.dollar')">
                    <input type="text"
                           ref="group-digitals-discount"
                           name="group-digitals-discount"
                           v-model="groupDigitalsDiscount"
                           @keyup="groupDigitalsDiscountKeyup"
                           disabled="disabled">
                </unit-decorator-wrapper>
            </template>
        </option-block>
    </div>
</template>

<script lang="ts">
import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import OptionBlock from '@pictaccio/admin-gui/views/components/widgets/OptionBlock.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import UnitDecoratorWrapper from '@pictaccio/admin-gui/views/components/widgets/UnitDecoratorWrapper.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

export type VirtualDigitalDiscountSelection = {
    enableDiscount: boolean;
    discountCatalog: number;
    digitalsDiscount: number[];
    groupDigitalsDiscount: number[];
};

@Component({
    name: 'VirtualDigitalDiscount',
    components: {
        UnitDecoratorWrapper,
        Dropdown,
        OptionBlock,
        UnitDecorator,
        Tooltip
    },
    expose: [
        'getSelection',
        'setDigitalDiscountEnabled',
        'setDigitalsDiscountHighlight',
        'setGroupDiscountEnabled',
        'setGroupDiscountHighlight'
    ]
})
export default class VirtualDigitalDiscount extends Vue {
    private digitalsDiscount = '';
    private enableDiscount = false;
    private groupDigitalsDiscount = '';
    private optionBlock: HTMLElement;
    private productCatalogVisible = false;
    private disabled = true;

    public getSelection(): VirtualDigitalDiscountSelection {
        const discountCatalog = (this.$refs['discount-catalog'] as Dropdown).getSelection();

        return {
            enableDiscount: this.enableDiscount,
            discountCatalog: Array.isArray(discountCatalog)
                ? null
                : parseInt(discountCatalog),
            digitalsDiscount: this.getDigitalsDiscount(),
            groupDigitalsDiscount: this.getGroupDigitalsDiscount()
        };
    }

    public setDigitalDiscountEnabled(enabled: boolean): void {
        this.disabled = !enabled;

        if (this.enableDiscount && !enabled) {
            this.enableDiscountClick();
        }

        if (!enabled) {
            this.enableDiscount = false;
            this.digitalsDiscount = '';
            this.groupDigitalsDiscount = '';
        }

        if (this.$refs['discount-catalog']) {
            (this.$refs['discount-catalog'] as Dropdown).setDisabled(this.disabled || !this.enableDiscount);
        }

        if (this.disabled || !this.enableDiscount) {
            this.optionBlock.classList.add('disabled');
        } else {
            this.optionBlock.classList.remove('disabled');
        }

        this.optionBlock.querySelectorAll('input:not(.section-input)').forEach((input) => {
            if (this.disabled || !this.enableDiscount) {
                input.setAttribute('disabled', 'disabled');
            } else {
                input.removeAttribute('disabled');
            }
        });
    }

    public setDigitalsDiscountHighlight(highlight: boolean): void {
        (this.$refs['digitals-discount'] as HTMLInputElement).classList.toggle('highlight', highlight);
    }

    public setGroupDiscountEnabled(enabled: boolean): void {
        (this.$refs['group-digitals-discount'] as HTMLInputElement).disabled = !enabled;
    }

    public setGroupDiscountHighlight(highlight: boolean): void {
        (this.$refs['group-digitals-discount'] as HTMLInputElement).classList.toggle('highlight', highlight);
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.optionBlock = this.$refs['option-block'] as HTMLElement;
        this.optionBlock['__loufairyBridge__'] = this;

        if (this.$store.getters['ProductCatalogsReader/productCatalogs'] &&
            this.$store.getters['ProductCatalogsReader/productCatalogs'].length !== 0) {
            this.productCatalogVisible = true;
        } else {
            this.$store.watch(() => this.$store.getters['ProductCatalogsReader/productCatalogs'], () => {
                this.productCatalogVisible = true;
            });
        }

        this.setDigitalDiscountEnabled(false);
    }

    /* EVENT HANDLERS */
    private digitalsDiscountKeyup(event): void {
        this.enableDiscount = true;
    }

    private discountCatalogChange(event): void {
        this.enableDiscount = true;
    }

    private enableDiscountClick(): void {
        if (this.disabled) {
            (this.$refs['digital-discount'] as HTMLInputElement).checked = false;
            return;
        }

        this.enableDiscount = !this.enableDiscount;
        this.setDigitalDiscountEnabled(true);
    }

    private getDigitalsDiscount(): number[] {
        return this.digitalsDiscount !== ''
            ? this.digitalsDiscount.split(',').map((price) => parseFloat(price))
            : null;
    }

    private getGroupDigitalsDiscount(): number[] {
        return this.groupDigitalsDiscount !== ''
            ? this.groupDigitalsDiscount.split(',').map((price) => parseFloat(price))
            : null;
    }

    private groupDigitalsDiscountKeyup(event): void {
        this.enableDiscount = true;
    }

    /* PRIVATE */
    private productCatalogList(): ReaderResponse {
        return this.$store.getters['ProductCatalogsReader/productCatalogs'];
    }
}
</script>
