<style lang="scss" scoped>
span {
    font-size: 1.4rem;
}
</style>

<template>
    <span><slot>{{ formatDataToCurrency(data) }}</slot></span>
</template>

<script lang="ts">
import {
    DataviewRendererFormatter
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/formatter/dataview_renderer_formatter';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Dataview Renderer Currency Formatter'
})
export default class DataviewRendererCurrencyFormatter extends DataviewRendererFormatter {
    /* PRIVATE */
    private formatDataToCurrency(data): string {
        if (typeof data !== 'string') {
            return '--';
        }

        return this.$t('generic.ui.currency', {
            amount: parseFloat(data).toFixed(2),
            unit: this.$t('generic.units.dollar')
        })
    }
}
</script>
