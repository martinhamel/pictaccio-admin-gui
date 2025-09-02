<style lang="scss" scoped>
</style>

<template>
    <template v-if="display && header">
        <b v-for="tax in displayTaxes" :key="tax.name">
            {{ tax.name }}
        </b>
    </template>

    <template v-if="display && !header">
        <label v-for="tax in displayTaxes" :key="tax.name">
            ${{ tax.value }}
        </label>
    </template>
</template>

<script lang="ts">
import { SaleTaxes } from '@pictaccio/shared/src/types/sale_taxes';
import { getTaxesForLocality } from '@pictaccio/shared/src/utils/taxes';
import { Component, Prop, Vue } from 'vue-facing-decorator';

type DisplayTax = {
    name: string;
    value: number;
}

@Component({
    name: 'Order Taxes',
    components: {
    }
})
export default class DocsLink extends Vue {
    @Prop
    private readonly header: boolean;
    @Prop
    private readonly taxes: SaleTaxes;

    private display = false;
    private displayTaxes: DisplayTax[] = [];

    /* LIFECYCLE */
    public mounted(): void {
        if (!this.taxes || typeof this.taxes !== 'object') {
            return;
        }

        this.display = true;

        const taxesForLocality = getTaxesForLocality(this.taxes.locality);
        switch (this.taxes.locality.substring(0, 2)) {
        case 'ca':
            for (const tax of taxesForLocality) {
                this.displayTaxes.push({
                    name: this.$t(`activities.viewOrder.taxes.canadian.${tax}`),
                    value: this.taxes.canadian[tax]
                });
            }
            break;
        }
    }

    /* EVENT HANDLERS */
}
</script>
