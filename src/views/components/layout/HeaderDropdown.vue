<style lang="scss" scoped>
.header-dropdown {
    --header-dropdown-max-height: 40rem;
    --header-dropdown-padding: 0.5rem;
    position: absolute;
    z-index: 1000;
    top: 100%;
    right: 0;
    height: 0;
    width: auto;
    border-radius: $ruler-border-radius 0 $ruler-border-radius $ruler-border-radius;
    background-color: var(--color-background-dropdown-header-1);
    overflow: clip;
    max-height: var(--header-dropdown-max-height);
    margin: 0;
    padding: 0;
    pointer-events: all;

    [data-theme-color="dark"] & {
        --color-background-dropdown-header-1: var(--color-mix-6-5-step-1);
    }

    [data-theme-color="light"] & {
        --color-background-dropdown-header-1: var(--color-mix-4-7-step-2);
    }

    .header-dropdown-container {
        width: max-content;
        overflow-y: auto;
        max-height: calc(var(--header-dropdown-max-height) - (2 * var(--header-dropdown-padding)));
        padding: 0;
        padding-right: var(--header-dropdown-padding);
        margin: 0;
    }

    &.un-wrap {
        height: auto;
        padding: var(--header-dropdown-padding);
    }

    :deep(li) {
        padding: 0;
        margin: 0;

        &:first-child {
            border-radius: $ruler-border-radius-inner 0 0 0;
        }

        &:last-child {
            border-radius: 0 0 $ruler-border-radius-inner $ruler-border-radius-inner;
        }

        a {
            @extend .h6;
            padding: 0.5rem 1rem;
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--color-text-normal);
            border-radius: 0;
            height: 4rem;
            width: 100%;

            &:hover {
                color: var(--color-text-link-primary);
            }

            span {
                display: inline-flex;
                align-items: center;
            }
        }
    }
}
</style>

<template>
    <div class="header-dropdown" :class="isOpen ? 'un-wrap' : ''">
        <ul class="header-dropdown-container">
            <slot/>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Header Dropdown',
    components: {
        FontAwesomeIcon
    }
})
export default class HeaderDropdown extends Vue {
    @Prop
    private isOpen = false;

    /* LIFECYCLE */

    /* EVENT HANDLERS */

    /* PRIVATE */
}
</script>
