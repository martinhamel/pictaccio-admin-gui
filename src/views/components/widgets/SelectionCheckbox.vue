<style lang="scss" scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
}
.checkbox {
    position: relative;
    display: flex;
    width: $ruler-checkbox-size;
    height: $ruler-checkbox-size;
    border-radius: $ruler-border-radius;
    background-color: var(--color-selection-checkbox-background-unchecked);
    border: 1px solid var(--color-selection-checkbox-border-unchecked);
    cursor: pointer;
    color: var(--color-selection-checkbox-color);
    pointer-events: all;

    [data-theme-color="dark"] & {
        --color-selection-checkbox-background-unchecked: var(--color-checkbox-background-unchecked);
        --color-selection-checkbox-background-unchecked-secondary: var(--color-checkbox-background-unchecked-secondary);
        --color-selection-checkbox-border-unchecked: var(--color-checkbox-border-unchecked);
        --color-selection-checkbox-color: var(--color-text-accent-secondary);
    }

    [data-theme-color="light"] & {
        --color-selection-checkbox-background-unchecked: var(--color-checkbox-background-unchecked);
        --color-selection-checkbox-background-unchecked-secondary: var(--color-checkbox-background-unchecked-secondary);
        --color-selection-checkbox-border-unchecked: var(--color-checkbox-border-unchecked);
        --color-selection-checkbox-color: var(--color-text-accent-secondary);
    }

    &.secondary {
        background-color: var(--color-selection-checkbox-background-unchecked-secondary);
    }

    .btn:focus & {
        border-color: currentColor;
    }

    > i {
        display: none;
        border-radius: $ruler-border-radius-inner;
        color: inherit;
        background-color: currentColor;
        position: absolute;
        inset: 0.2rem;
    }

    &.all {
        > i {
            display: block;
        }
    }

    &.partial {
        > i {
            display: block;
            inset: 35% 0.2rem;
        }
    }

    &.none {
        > i {
            display: none;
        }
    }
}
</style>

<template>
    <button class="btn btn-icon-only selection-checkbox"
            @click="checkboxClick">
        <span class="checkbox"
              :class="[
                  checkedStatus,
                  secondary ? 'secondary' : ''
              ]">
            <i/>
        </span>
    </button>

</template>

<script lang="ts">
import { SelectionCheckboxStatus } from '@pictaccio/admin-gui/src/core/types/selection_checkbox_status';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Selection Checkbox',
    components: {
        FontAwesomeIcon
    },
    expose: [
        'checkboxClick',
        'setCheckedStatus',
        'click'
    ]
})
export default class SelectionCheckbox extends Vue {
    @Prop
    private name: string;
    @Prop
    private secondary: boolean;
    private checkedStatus: SelectionCheckboxStatus = 'none';

    public checkboxClick(): void {
        switch (this.checkedStatus) {
        case 'none':
            this.checkedStatus = 'all';
            break;

        case 'partial':
            this.checkedStatus = 'all';
            break;

        case 'all':
            this.checkedStatus = 'none';
            break;
        }

        this.emitClicked();
    }

    public setCheckedStatus(status: SelectionCheckboxStatus): void {
        this.checkedStatus = status;
    }

    /* PRIVATE */
    private emitClicked(): void {
        this.$emit('click', {
            name: this.name,
            checkedStatus: this.checkedStatus
        });
    }
}
</script>
