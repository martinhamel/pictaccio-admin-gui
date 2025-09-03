<style lang="scss" scoped>
.unit-decorator-wrapper {
    display: flex;
    align-items: center;
    max-width: $ruler-input-max-width;

    &:focus-within {
        .unit-decorator {
            background-color: var(--color-input-border-focused);
        }
    }

    &:deep(input:not(:last-child)) {
        border-radius: $ruler-border-radius 0 0 $ruler-border-radius !important;

        &:disabled,
        &.disabled {
            ~ .unit-decorator {
                opacity: 0.7;
                filter: grayscale(0.5);
                background-color: var(--color-input-background-disabled);

                .unit {
                  filter: brightness(0.4);
                }
            }
        }
    }
}
</style>

<template>
    <span class="unit-decorator-wrapper">
        <slot/>
        <unit-decorator v-if="unit" :unit="unit"></unit-decorator>
    </span>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Unit Decorator Wrapper',
    components: {
        FontAwesomeIcon,
        UnitDecorator
    }
})
export default class UnitDecoratorWrapper extends Vue {
    @Prop
    private unit: string;
}
</script>
