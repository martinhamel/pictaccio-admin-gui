<style lang="scss" scoped>

</style>

<template>
    <span>{{ displayValue() }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'CurrencyLabel'
})
export default class CurrencyLabel extends Vue {
    @Prop
    private value!: number;

    /* PRIVATES */
    private displayValue(): string {
        const currencySymbol = '$';
        const value = this.value
            ? parseFloat(this.value.toString())
            : 0;

        return `${currencySymbol}${value.toFixed(2)}`;
    }
}
</script>
