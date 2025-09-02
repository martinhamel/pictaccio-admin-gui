<style lang="scss" scoped>
.sorter {
    position: relative;
    margin: inherit;
    width: min-content;
    height: 100%;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.4rem;
    flex-direction: column;
    justify-content: center;

    [data-theme-color="dark"] & {
        --color-data-column-sorter-up: var(--color-text-accent-secondary);
        --color-data-column-sorter-down: var(--color-text-accent-secondary);
    }

    [data-theme-color="light"] & {
        --color-data-column-sorter-up: var(--color-text-accent-secondary);
        --color-data-column-sorter-down: var(--color-text-accent-secondary);
    }

    .caret-up {
        color: var(--color-data-column-sorter-up);

        &.default {
            color: transparent;
        }

        &.descending {
            rotate: 180deg;
        }

        &.ascending {
            rotate: 0;
        }
    }
}
</style>

<template>
    <span class="sorter">
        <font-awesome-icon :class="state" :icon="['fas', 'caret-up']"
            class="caret-up"/>
    </span>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Data Column Sorter',
    emits: ['sort-selected'],
    components: {
        FontAwesomeIcon
    },
    expose: [
        'setSort',
        'sortClick',
        'stateSet'
    ]
})
export default class DataColumnSorter extends Vue {
    @Prop
    private column!: string;

    public state = 'default';

    public setSort(state: 'ascending' | 'descending' | 'default'): void {
        this.state = state;
        this.$emit('sort-selected', this.column, this.state);
    }

    public sortClick(): void {
        switch (this.state) {
        case 'default':
            this.state = 'ascending';
            this.$emit('sort-selected', this.column, this.state);
            break;

        case 'ascending':
            this.state = 'descending';
            this.$emit('sort-selected', this.column, this.state);
            break;

        case 'descending':
            this.state = 'ascending';
            this.$emit('sort-selected', this.column, this.state);
            break;
        }
    }

    public stateSet(state: string): void {
        this.state = state;
    }

    /* LIFECYCLE */

    /* EVENT HANDLERS */
}
</script>
