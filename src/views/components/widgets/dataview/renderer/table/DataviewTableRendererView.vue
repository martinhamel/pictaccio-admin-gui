<style lang="scss" scoped>
.table-renderer-container {
    --table-container-vertical-offset: 13rem;
    border-radius: $ruler-border-radius;
    max-height: calc(100svh - 2rem - var(--table-container-vertical-offset));
    overflow: auto;
    position: relative;
}

.table-renderer {
    border-collapse: collapse;
    position: relative;
    width: 100%;

    [data-theme-color="dark"] & {
        --color-background-table-header: var(--color-mix-5-6-step-3);
        --color-background-table-body-even: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                1
        );
        --color-background-table-body-odd: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-4-6-step-2-l),
                1
        );
        --color-background-table-body-hover: hsla(
                var(--color-primary-4-h),
                25%,
                var(--color-primary-5-l),
                1
        );
    }

    [data-theme-color="light"] & {
        --color-background-table-header: var(--color-mix-4-7-step-2);
        --color-background-table-body-odd: var(--color-primary-2);
        --color-background-table-body-even: hsla(
                var(--color-mix-4-7-step-1-h),
                var(--color-mix-4-7-step-1-s),
                var(--color-mix-4-7-step-1-l),
                1
        );
        --color-background-table-body-hover: hsla(
                var(--color-primary-4-h),
                var(--color-primary-4-s),
                var(--color-primary-3-l),
                1
        );
    }

    th, td {
        padding: 2.5rem 1.7rem 2.5rem 0;
    }

    tr {
        padding-inline: $ruler-scrollbar;
    }

    thead {
        background-color: var(--color-background-table-header);
        color: var(--color-text-normal);
        position: sticky;
        text-align: left;
        top: 0;
        white-space: nowrap;
        z-index: 1;

        tr {
            border-bottom: none;
            display: flex;
        }

        th.thead-cell {
            @extend P;
            align-items: center;
            display: flex;
            height: 6.4rem;
        }
    }

    tbody {
        display: table;
        overflow-y: auto;
        position: relative;
        width: 100%;

        tr {
            cursor: pointer;
            display: flex;
            overflow: clip;

            &:nth-child(odd) {
                background-color: var(--color-background-table-body-odd);
            }

            &:nth-child(even) {
                background-color: var(--color-background-table-body-even);
            }

            &:hover,
            &:focus,
            &:focus-within {
                box-shadow: var(--color-background-table-body-hover) 0 0 0 100rem inset;
            }

            td {
                display: flex;
                min-height: 6.4rem;
            }
        }
    }
}
</style>

<template>
    <div ref="table-renderer-container"
         class="table-renderer-container"
         :style="{'--table-container-vertical-offset': `${tableVerticalOffset + 'px'}`}">
        <table class="table-renderer">
            <thead>
                <tr>
                    <th v-for="column in columns"
                        v-show="column.visible"
                        :key="column.name"
                        :style="{
                            width: column.size + 'px',
                            order: column.order
                        }"
                        class="thead-cell">
                        <span class="column-name">
                            {{ $t(column.columnNameLocale) }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in data"
                    :key="row.id">
                    <td v-for="column in columns"
                        v-show="column.visible"
                        :key="column.name"
                        :style="{
                            width: column.size + 'px',
                            order: column.order
                        }"
                        class="tbody-cell">
                        <nested-container :components="column.formatters"
                                          @load="(nested) => { nested.setData(row[column.targetName]) }"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { DataType } from '@pictaccio/admin-gui/src/datasources/data_definitions';
import { getCoords } from '@pictaccio/admin-gui/src/utils/get_coords';
import NestedContainer from '@pictaccio/admin-gui/src/views/components/NestedContainer.vue';
import { createFormatter } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter';
import DataviewRendererStringFormatter
    from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/DataviewRendererStringFormatter.vue';
import {
    DataviewTableRendererColumn
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/table/dataview_table_renderer_column';
import {
    DataviewTableRendererHost
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/table/dataview_table_renderer_host';
import { Component, Prop, Vue } from 'vue-facing-decorator';

export type DataviewTableRendererColumnMeta = DataviewTableRendererColumn & {
    size: number;
    order: number;
    visible: boolean;
}

@Component({
    name: 'Dataview Table Renderer (view)',
    components: {
        NestedContainer,
        DataviewTableRendererNestedFormatters: NestedContainer
    },
    emits: [
    ],
    expose: [
        'recalculateTablePos'
    ]
})
export default class DataviewTableRendererView<Tdata, HasStreams extends boolean = false> extends Vue {
    @Prop
    private host: DataviewTableRendererHost<Tdata, HasStreams>;
    private columns: DataviewTableRendererColumnMeta[] = [];
    private data: DataType<Tdata, HasStreams, any>[] = [];
    private tableVerticalOffset = 0;

    public recalculateTablePos(): void {
        this.setTableVerticalOffset();
    }

    /* LIFECYCLE */
    private created(): void {
        this.initColumns();
    }

    private mounted(): void {
        this.host.on('dataview-dirty', this.dataviewDirty);
        this.dataviewDirty();
    }

    /* EVENT HANDLER */
    private dataviewDirty(): void {
        this.host.getData(this.host.getStream())
            .then(data => {
                this.data = data;
                this.setTableVerticalOffset()
            });
    }

    /* PRIVATE */
    private initColumns(): void {
        this.columns = this.host.getColumns(this.host.getStream()).map(column => ({
            formatters: column.formatters ?? [
                createFormatter('string', null)
            ],
            size: column.defaultSize,
            order: column.defaultOrder,
            visible: column.defaultVisible,
            ...column
        }));
    }

    private setTableVerticalOffset(): void {
        const element = this.$refs['table-renderer-container'] as Element;
        if (!element) {
            return;
        }
        this.tableVerticalOffset = getCoords(element, 'top left').y;
    }
}
</script>
