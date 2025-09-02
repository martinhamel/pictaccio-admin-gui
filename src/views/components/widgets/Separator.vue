<style lang="scss" scoped>
.separator {
    --separator-height: 2px;
    height: calc(var(--separator-height) * 2);
    width: 100%;
    padding-inline: var(--padding-inline);

    svg {
        width: 100%;
        height: 100%;
        translate: 0 -0.6rem;

        .separator-line {
            stroke-width: var(--separator-height);
            stroke: oklab(from var(--color-text-normal) l a b / 0.05);
            stroke-dasharray: 8px;
            stroke-linecap: round;
            translate: 0 var(--separator-height);
        }
    }
}
</style>

<template>
    <div class="separator" :style="{
        '--padding-inline': paddingInline || '0',
    }">
        <svg>
            <line class="separator-line" x1="0" y1="0" x2="100%" y2="0"/>
        </svg>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Separator',
    components: {
        FontAwesomeIcon
    }
})
export default class Separator extends Vue {
    @Prop
    private paddingInline: string;
}
</script>
