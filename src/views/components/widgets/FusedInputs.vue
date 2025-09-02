<style lang="scss" scoped>
.fused-inputs {
    display: flex;
    width: 100%;
    max-width: $ruler-input-max-width;
    border: 2px solid var(--color-input-border);
    border-radius: $ruler-border-radius;

    [data-theme-color="dark"] & {
        --color-input-separator: var(--color-mix-5-6-step-2);
    }

    &:focus-within {
        border-color: var(--color-input-border-focused);
    }
}

:deep(input) {
    border-width: 0;
    text-align: center;
    border-left: 1px solid var(--color-input-separator);
    border-block: 3px solid transparent;

    &:first-child {
        border-radius: $ruler-border-radius 0 0 $ruler-border-radius !important;
        border-left-width: 0 !important;
    }
    &:last-child {
        border-radius: 0 $ruler-border-radius $ruler-border-radius 0 !important;
        border-right-width: 0 !important;
    }

    &[type=date] {
        padding-right: 1.3rem;
        padding-left: .2rem;
    }
    &:focus,
    &:focus-within {
        border-block-color: transparent !important;
        border-inline-color: var(--color-input-separator) !important;
    }
}

:deep(.dropdown-input) {
    &:first-child {
        .selection {
            border-radius: $ruler-border-radius 0 0 $ruler-border-radius;

            &.selected {
                border-left-color: var(--color-input-border-focused);
            }
        }
    }

    &:last-child {
        .selection {
            border-radius: 0 $ruler-border-radius $ruler-border-radius 0;

            &.selected {
                border-right-color: var(--color-input-border-focused);
            }
        }
    }

    .selection {
        .selected {
            border-left-color: transparent;
            border-right-color: transparent;
            border-radius: 0;
        }
    }
}
</style>

<template>
    <div ref="fused-inputs"
         class="fused-inputs"
         :class="extraClass"
         :name="fusedInputName"
         @change="valueChanged"
         data-fused>
        <slot/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Fused Inputs',
    emits: [
        'change'
    ],
    components: {
        FontAwesomeIcon
    }
})
export default class FusedInputs extends Vue {
    @Prop
    private extraClass: string;
    @Prop
    private fusedInputName: string;
    private timeout = null;

    /* LIFECYCLE */

    /* EVENT HANDLERS */
    private emitChange(values): void {
        this.$emit('change', values);
        this.timeout = null;
    }

    private valueChanged(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        const inputs = (this.$refs['fused-inputs'] as HTMLElement).querySelectorAll('input');
        const values = [];
        for (const input of inputs) {
            values.push(input.value);
        }
        this.timeout = setTimeout(() => {
            this.emitChange(values);
        }, 10);
    }
}
</script>
