<style lang="scss" scoped>
.sticky-label {
    position: absolute;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;

    [data-theme-color="dark"] & {
        --color-background-sticky-label: var(--color-mix-5-6-step-3);
        --color-text-sticky-label: var(--color-text-normal);
    }

    [data-theme-color="light"] & {
        --color-background-sticky-label: var(--color-mix-4-7-step-2);
        --color-text-sticky-label: var(--color-text-normal);
    }

    &.top {
        border-radius: 0 0 0.5rem 0.5rem;

        &.sticky {
            top: 0;
        }
    }

    &.bottom {
        border-radius: 0.5rem 0.5rem 0 0;

        &.sticky {
            bottom: 0;
        }
    }

    &.left {
        border-radius: 0 0.5rem 0.5rem 0;

        &.sticky {
            left: 0;
        }
    }

    &.right {
        border-radius: 0.5rem 0 0 0.5rem;

        &.sticky {
            right: 0;
        }
    }

    &.sticky {
        position: fixed;
        z-index: 100;
    }

    &.alignment- {
        &inner- {
            &top {
                top: 0;
            }

            &bottom {
                bottom: 0;
            }

            &left {
                left: 0;
            }

            &right {
                right: 0;
            }
        }

        &outer- {
            &top {
                bottom: 100%;
            }

            &bottom {
                top: 100%;
            }

            &left {
                right: 100%;
            }

            &right {
                left: 100%;
            }
        }
    }
}
</style>

<template>
    <div class="sticky-label" :class="computedClasses" :style="computedStyles">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { markRaw, computed } from 'vue';

type StickyLabelSide = 'top' | 'bottom' | 'left' | 'right' | 'none';

type AlignmentType = 'inner' | 'outer';

type Alignment = [
    AlignmentType,
    StickyLabelSide
];

type Alignments = Alignment[];

type Colors = {
    background: string,
    text: string
};

type StickyLabelOptions = {
    alignments?: Alignments,
    colors?: Colors,
    sticky?: boolean,
    stickySide?: StickyLabelSide
};

@Component({
    name: 'StickyLabel',
    components: {
        FontAwesomeIcon: markRaw(FontAwesomeIcon)
    },
    inheritAttrs: false
})
export default class StickyLabel extends Vue {
    @Prop({ default: () => markRaw([['inner', 'none']]) })
    private readonly alignments: Alignments;
    @Prop({
        default: () => markRaw({
            background: 'var(--color-background-sticky-label)',
            text: 'var(--color-text-sticky-label)'
        })
    })
    private readonly colors: Colors;
    @Prop({ default: false })
    private readonly sticky: boolean;
    @Prop({ default: 'none' })
    private readonly stickySide: StickyLabelSide;

    private get computedClasses() {
        return [
            this.stickySide,
            this.sticky ? 'sticky' : '',
            ...(this.alignments?.map(([a, s]) => `alignment-${a}-${s}`) || [])
        ].filter(Boolean);
    }

    private get computedStyles() {
        return {
            backgroundColor: this.colors?.background,
            color: this.colors?.text
        };
    }
}
</script>
