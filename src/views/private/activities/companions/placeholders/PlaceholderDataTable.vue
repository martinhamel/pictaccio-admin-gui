<style lang="scss" scoped>
table {
    $ruler-separator-height: 6px;
    $ruler-row-min-height: 5rem;
    $ruler-blob-height: 14px;
    $ruler-blob-spacing: 1.25;

    display: grid;
    overflow: auto;
    height: calc(100% + #{$ruler-separator-height});

    [data-theme-color="dark"] & {
        --color-background-table-placeholder-1: var(--color-mix-6-7-step-2);
        --color-background-table-placeholder-2: var(--color-mix-2-5-step-1);
    }

    [data-theme-color="light"] & {
        --color-background-table-placeholder-1: var(--color-mix-3-7-step-3);
        --color-background-table-placeholder-2: var(--color-mix-3-7-step-2);
    }

    tr {
        display: grid;
        position: relative;
        min-height: $ruler-row-min-height;

        &::after {
            content: '';
            position: absolute;
            bottom: -#{$ruler-separator-height / 2};
            padding: #{$ruler-separator-height / 2};
            width: 100%;
            border-radius: 99px;
            background-color: var(--color-background-table-placeholder-1);
        }

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            --font-weight: 700;
            opacity: 0.5;
        }

        .cell {
            display: flex;
            justify-content: center;
            padding-block: $ruler-blob-height;

            i {
                display: block;
                position: relative;
                color: var(--color-background-table-placeholder-2);
                background-color: currentColor;
                width: 80%;
                height: 0;
                padding: #{$ruler-blob-height / 2};
                border-radius: 99px;
            }

            &.sessionColor,
            &.session_color,
            &.priority,
            &.featured,
            &.is_custom_product {
                i {
                    width: 0;
                }
            }
            &.subjects,
            &.name_locale,
            &.description_locale {
                i {
                    margin-bottom: #{$ruler-blob-height * $ruler-blob-spacing * 2};
                    box-shadow:
                        0 #{$ruler-blob-height * $ruler-blob-spacing} currentColor,
                        0 #{$ruler-blob-height * $ruler-blob-spacing * 2} currentColor
                    ;
                }
            }
            &.products,
            &.shipping_options {
                i {
                    $ruler-blob-width: 10rem;
                    width: $ruler-blob-width;

                    margin-bottom: #{$ruler-blob-height * $ruler-blob-spacing * 3};
                    box-shadow:
                        0 #{$ruler-blob-height * $ruler-blob-spacing} currentColor,
                        0 #{$ruler-blob-height * $ruler-blob-spacing * 2} currentColor,
                        0 #{$ruler-blob-height * $ruler-blob-spacing * 3} currentColor
                ;
                }
            }
            &.options {
                i {
                    $ruler-blob-width: 3rem;

                    width: $ruler-blob-width;
                    margin-bottom: #{$ruler-blob-height * $ruler-blob-spacing * 2};
                    margin-left: #{$ruler-blob-width * $ruler-blob-spacing};
                    box-shadow:
                        $ruler-blob-width 0 currentColor,
                        #{$ruler-blob-width / 2} 0 currentColor,
                        0 #{$ruler-blob-height * $ruler-blob-spacing} currentColor,
                        $ruler-blob-width #{$ruler-blob-height * $ruler-blob-spacing} currentColor,
                        #{$ruler-blob-width / 2} #{$ruler-blob-height * $ruler-blob-spacing} currentColor,
                        0 #{$ruler-blob-height * $ruler-blob-spacing * 2} currentColor,
                        $ruler-blob-width #{$ruler-blob-height * $ruler-blob-spacing * 2} currentColor,
                        #{$ruler-blob-width / 2} #{$ruler-blob-height * $ruler-blob-spacing * 2} currentColor,
                        #{$ruler-blob-width * -$ruler-blob-spacing * 1.25} 0 currentColor
                ;
                }
            }
            &.tags {
                i {
                    $ruler-blob-width: 4rem;

                    width: $ruler-blob-width;
                    margin-inline: #{$ruler-blob-width * $ruler-blob-spacing};
                    box-shadow:
                        #{$ruler-blob-width * -$ruler-blob-spacing} 0 currentColor,
                        #{$ruler-blob-width * $ruler-blob-spacing} 0 currentColor
                    ;
                }
            }
            &.theme_images {
                i {
                    height: 8rem;
                    border-radius: $ruler-border-radius;
                }
            }
        }
    }
}

</style>

<template>
    <table @click="placeholderClick">
        <thead>
            <tr :style="{gridTemplateColumns: columnSizes}">
                <template v-for="header in headers" :key="header">
                    <th v-if="!header.crudOnly" class="header">
                        {{ ((header.locale)?$t(header.locale):'not_localized') || header.name }}
                    </th>
                </template>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row" :style="{gridTemplateColumns: columnSizes}">
                <template v-for="header in headers" :key="header">
                    <td v-if="!header.crudOnly" class="cell" :class="header.name">
                        <i/>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'PlaceholderDataTable',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'placeholder-clicked'
    ]
})
export default class PlaceholderDataTable extends Vue {
    @Prop
    private headers;
    @Prop
    private rows: number;

    /* EVENT HANDLER */
    private placeholderClick(): void {
        this.$emit('placeholder-clicked');
    }

    /* PRIVATE */
    private get columnSizes(): string {
        return this.headers
            .map(item => item.size)
            .join(' ');
    }
}
</script>
