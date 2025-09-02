<style lang="scss" scoped>
.option-block {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 2.2rem 1rem 1rem;
    border-radius: $ruler-border-radius;
    height: 100%;
    max-width: $ruler-input-max-width;
    border: 2px solid var(--option-block-border-color);

    [data-theme-color="dark"] & {
        --option-block-border-color: var(--color-background-overlay-1, var(--color-background-page-2));
        --option-block-title-color: var(--color-background-overlay-2, var(--color-background-page-1));
    }

    [data-theme-color="light"] & {
        --option-block-border-color: var(--color-background-overlay-1, var(--color-mix-7-5-step-2));
        --option-block-title-color: var(--color-background-overlay-2, var(--color-background-page-1));
    }

    .title {
        position: absolute;
        margin: 0.5rem;
        padding: 0 1rem 0 3rem !important;
        width: min-content;
        white-space: nowrap;
        top: 0;
        transform: translateY(-50%);
        left: 2rem;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--option-block-title-color);

        input[type="checkbox"] {
            //
        }
    }

    .options-box {
        margin-top: 2rem;

        &:first-of-type {
            margin-top: 0;
        }

        :deep(> label) {
            --font-weight: 400;
        }

        :deep(.option-context-box) {
            display: block;
            margin-top: 0.7rem;
            margin-bottom: 0.7rem;
            padding: 0;
        }

        :deep(.disabled) {
            pointer-events: all;
        }
    }
}
</style>

<template>
    <div class="option-block" ref="option-block">
        <label class="title override">
            <slot name="title"/>
        </label>
        <div v-for="name in slotNames"
             :key="name"
             :ref="name"
             class="options-box">
            <slot :name="name"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'OptionBlock'
})
export default class OptionBlock extends Vue {
    private slotNames: string[] = [];

    /* LIFECYCLE */
    public beforeMount(): void {
        this.slotNames = Object.keys(this.$slots).filter(k => k.startsWith('option'));
    }

    /* PRIVATES */
}
</script>
