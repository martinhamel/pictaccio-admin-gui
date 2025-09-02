<style lang="scss" scoped>
.instructions {
    font-size: 1.8rem;
    grid-column: 1/-1;
    padding: 2rem 3rem;
    background-color: hsla(0, 0%, 10%, 10%);
    pointer-events: none;
    border-color: var(--color-text-accent-primary);
    border-style: solid;
    border-radius: 0.8rem;
    border-width: 0 0 0 14px;
    transform: translate(0) !important;
    overflow: hidden;

    [data-theme-color="dark"] & {
        --color-background-information-box: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                0.5
        );
    }

    [data-theme-color="light"] & {
        --color-background-information-box: hsla(
                var(--color-mix-5-7-step-1-h),
                var(--color-mix-5-7-step-1-s),
                var(--color-mix-5-7-step-1-l),
                0.5
        );
    }

    svg {
        color: var(--color-text-normal);
        position: absolute;
        right: 0;
        transform: scale(8) translate(-18%, 5%) rotate(15deg);
        opacity: .10;
    }

    :deep(p) {
        max-width: unset !important;
        width: unset;
    }
}
</style>

<template>
    <div class="instructions"
         :style="{
            color: colors?.text ?? 'inherit',
            backgroundColor: colors?.background ?? 'var(--color-background-information-box)',
            borderColor: colors?.border ?? 'var(--color-text-accent-primary)'
    }">
        <font-awesome-icon :icon="icon ?? ['fal', 'info-circle']"/>
        <slot/>
    </div>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

type InfoColor = {
    text?: string,
    background?: string,
    border?: string,
}

@Component({
    name: 'InformationBox',
    components: {
        FontAwesomeIcon
    }
})
export default class InformationBox extends Vue {
    @Prop
    private icon?: [string, string] = ['fal', 'info-circle'];
    @Prop
    private colors?: InfoColor;
}
</script>
