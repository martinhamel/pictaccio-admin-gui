<style lang="scss" scoped>
.multi-columns {
    display: flex;
    gap: 1rem;
    flex-wrap: var(--wrap);
    .multi-columns &:has(.column) {
        width: min-content;
    }
    .multi-columns &:not(&:has(.column)),
    .multi-columns[noStretch='true'] &[wrap='true'][noStretch='true'] {
        width: 100%;
        flex: initial;
        flex-wrap: var(--wrap);
    }
    .column {
        flex: var(--noStretch);

        &:has(.multi-columns[wrap='true']) {
            width: 100%;
            flex: 1;
            display: flex;
        }

        &:has(p) {
            flex: 1;
        }
    }
}
</style>

<template>
    <div class="multi-columns"
         :style="{
            '--wrap': wrap ? 'wrap' : 'nowrap',
            '--noStretch': noStretch ? '0' : '1'
         }"
         :noStretch="noStretch"
         :wrap="wrap">
        <template v-for="name in slotNames" :key="name">
            <div class="column">
                <slot :name="name"></slot>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'MultiColumns',
    components: {
        FontAwesomeIcon
    }
})
export default class MultiColumns extends Vue {
    @Prop
    private wrap: boolean;
    @Prop
    private noStretch: boolean;
    private slotNames: string[] = [];

    /* LIFECYCLE */
    public beforeMount(): void {
        this.slotNames = Object.keys(this.$slots).filter(k => k.startsWith('column-'));
    }
}
</script>
