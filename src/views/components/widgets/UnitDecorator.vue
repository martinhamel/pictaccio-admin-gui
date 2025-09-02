<style lang="scss" scoped>
.unit-decorator {
    order: 10;
    display: flex;
    justify-content: center;
    order: 99;
    padding: 0.5rem 1.5rem;
    font-size: 1.6rem;
    align-items: center;
    height: $ruler-input-height;
    width: fit-content;
    background-color: var(--color-input-background);
    border-radius: 0 $ruler-border-radius $ruler-border-radius 0;
    margin-left: 0;
    min-width: $ruler-input-height;
}
</style>

<template>
    <span class="unit-decorator">
        <span class="unit">{{ unit }}</span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Unit Decorator',
    components: {
        FontAwesomeIcon
    }
})
export default class UnitDecorator extends Vue {
    @Prop
    private unit: string;
}
</script>
