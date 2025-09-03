<style lang="scss" scoped>
.table-holder {
    --row-controls-offset: -100px;
    --table-holder-vertical-offset: 13rem;
    --table-border-radius: 0 $ruler-border-radius $ruler-border-radius $ruler-border-radius;
    grid-column: 1 / -1;
    position: relative;
    display: flex;
    overflow: auto;
    padding-top: 2.4rem;
    border-radius: var(--table-border-radius);
    height: calc(100svh - 2rem - var(--table-holder-vertical-offset));

    [data-theme-type="block"] & {
        margin-inline: -$grid-gap;
        width: calc(100% + #{$grid-gap * 2});
    }

    // Dont forget to edit Dataview Table Renderer View
    [data-theme-color="dark"] & {
        --color-background-table-header: var(--color-mix-5-6-step-3);
        --color-background-table-body-even: hsla(var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                1);
        --color-background-table-body-odd: hsla(var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-4-6-step-2-l),
                1);
        --color-background-table-body-hover: hsla(var(--color-primary-4-h),
                25%,
                var(--color-primary-5-l),
                1);
        --color-checkbox-table-body-hover: var(--color-mix-5-6-step-3);
        --color-table-column-selection-trigger: var(--color-primary-4);
    }

    [data-theme-color="light"] & {
        --color-background-table-header: var(--color-mix-4-7-step-2);
        --color-checkbox-header: var(--color-mix-7-6-step-2);
        --color-background-table-body-odd: var(--color-primary-2);
        --color-background-table-body-even: hsla(var(--color-mix-4-7-step-1-h),
                var(--color-mix-4-7-step-1-s),
                var(--color-mix-4-7-step-1-l),
                1);
        --color-background-table-body-hover: hsla(var(--color-primary-4-h),
                var(--color-primary-4-s),
                var(--color-primary-3-l),
                1);
        --color-checkbox-background-checked: var(--color-primary-4);
        --color-checkbox-border-checked: var(--color-checkbox-background-checked);
        --color-checkbox-border-focused: var(--color-mix-4-5-step-2);
        --color-checkbox-table-body-hover: var(--color-mix-7-5-step-1);
        --color-table-column-selection-trigger: var(--color-mix-4-5-step-3);
    }

    .settings-box & {
        height: calc((100vh - (var(--dialog-box-inset) * 2vh)) - 2rem - var(--table-holder-vertical-offset));
    }
}

.loading {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .spinner {
        width: 15rem;
    }
}

.column-selector {
    position: sticky;
    top: auto;
    margin-top: 1.8rem;
    margin-left: -4.5rem;
    padding-right: 1rem;
    right: -1rem;
    width: min-content;
    height: min-content;
    background-color: var(--color-background-table-header);
    z-index: 1;

    .column-selector-option {
        padding-block: 0.5rem;
    }

    .table-column-selection-trigger {
        margin: 1rem;
        color: var(--color-table-column-selection-trigger);
    }
}

table {
    position: relative;
    inset: 0;
    display: grid;
    grid-template-rows: min-content;
    min-width: fit-content;
    height: fit-content;
    border-radius: var(--table-border-radius);

    &.no-event {
        tbody {
            cursor: default;
        }
    }

    thead {
        width: 100%;
        display: grid;
        background-color: var(--color-background-table-header);
        color: var(--color-text-normal);
        text-align: left;
        border-radius: 0 $ruler-border-radius 0 0;

        tr {
            @extend P;
            border-bottom: none;
            padding-right: $ruler-scrollbar;
        }

        th {
            display: flex;
            align-items: center;
            justify-items: center;
            font-size: 1.6rem;
            padding-right: 1.7rem;
            height: 6.4rem;
            gap: math.div($grid-gap, 2);

            &.row-selector-column {
                padding-left: 2rem !important;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &:has(.sorter) {
                cursor: pointer;
            }

            span {
                display: flex;
                align-items: center;
                justify-items: center;
                text-align: center;
                //margin-top: auto;
                margin-bottom: -0.1rem;
                //width: min-content;
            }
        }
    }

    tbody {
        overflow-y: auto;
        display: table;
        position: relative;

        [data-theme-type="line"] & {
            border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
        }

        a {
            padding: 0;
            margin: 0;
            color: unset;

            &:hover {
                color: unset;
            }
        }

        a:nth-child(even) tr {
            background-color: var(--color-background-table-body-even);

            .row-control {
                box-shadow: -16px 0 16px var(--color-background-table-body-even);
            }

            .row-selector,
            input[type="checkbox"] {
                @extend .secondary;
            }
        }

        a:nth-child(odd) tr {
            background-color: var(--color-background-table-body-odd);

            .row-control {
                box-shadow: -16px 0 16px var(--color-background-table-body-odd);
            }
        }

        a:last-child tr {
            [data-theme-type="line"] & {
                border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
            }
        }

        tr {
            cursor: pointer;
            overflow: hidden;
            align-items: center;
            padding-right: $ruler-scrollbar;

            &:hover,
            &:focus,
            &:focus-within,
            &:has(td.tutorial-target-focus) {
                box-shadow: var(--color-background-table-body-hover) 0 0 0 100rem inset;

                td.row-control {
                    opacity: 1;
                    box-shadow: -16px 0 16px var(--color-background-table-body-hover);

                    .row-control-inner {
                        opacity: 1;
                        background-color: var(--color-background-table-body-hover);
                    }

                    :deep(.btn) {
                        opacity: 0.6;
                    }
                }

                td.row-selector-column {
                    input:not(:checked) {
                        color: var(--color-checkbox-table-body-hover);
                    }
                }
            }

            td {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 1.4rem;
                padding-right: 1.7rem;
                min-height: 6.4rem;

                &.row-control {
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    padding: 0 4rem 0 0 !important;
                    background-color: inherit;
                    align-items: center;
                    justify-content: flex-end;
                    opacity: 0;

                    transform: translateX(var(--row-controls-offset));

                    &:hover {
                        .row-control-inner {
                            opacity: 1;
                        }

                        &:deep(.btn) {
                            opacity: 0.8;

                            &:hover {
                                opacity: 1;

                                &.btn-icon-only {
                                    filter: saturate(0.7) brightness(1.25);
                                }

                                &.destructive {
                                    color: var(--color-semantic-destructive);
                                }
                            }
                        }
                    }

                    &:deep(.btn) {
                        opacity: 0;
                        transition-property: opacity, color;
                        transition-timing-function: ease-in-out;
                        transition-duration: $animation-transition-duration;
                    }

                    .row-control-inner {
                        position: absolute;
                        inset: 0;
                        opacity: 0;
                    }

                    :deep(.btn.destructive) {
                        filter: saturate(0.4) brightness(1.25);
                        color: var(--color-semantic-delete);
                    }
                }

                &.row-selector-column {
                    .row-selector::after {
                        transform: translate(-60%, -50%);
                    }
                }

                &.name:deep(> div) {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                :deep(img) {
                    max-width: 8rem;
                }
            }
        }
    }

    td,
    th {
        width: auto;
        padding: 2rem 1rem;
        text-align: left;
        position: relative;
    }

    th {
        padding: 0 1rem;
    }

    tr {
        position: relative;
        border-bottom: 2px solid var(--color-background-table-header);
        display: grid;

        .activity-control>& {
            border-bottom: 2px solid var(--color-background-table-header);
        }

        &.wrapped {
            height: $ruler-table-data;
            padding-top: 1rem;
            box-sizing: content-box;

            >td {
                padding-top: 0 !important;
            }

            .wrap-control {
                .svg-inline--fa {
                    transform: rotateZ(-90deg);
                }
            }
        }
    }

    time {
        white-space: nowrap;
    }

    :deep(.selected) {
        padding: 0.3rem 0.7rem;
        border-radius: $ruler-border-radius;
        margin-right: 0.5rem;
        width: fit-content;
        background-color: var(--color-primary-4);
        color: var(--color-text-normal);
    }

    :deep(.row-controls) {
        position: initial;
        width: 100%;
        height: 100%;

        &:disabled {
            pointer-events: all;
            cursor: default !important;

            &::after {
                content: '';
                position: absolute;
                left: -0.5rem;
                right: -0.5rem;
                top: -1rem;
                bottom: -1rem;
            }

            &:hover {
                filter: grayscale(1);
            }
        }
    }
}

.placeholder-container {
    position: relative;
    grid-column: 1 / -1;
    grid-column: 1 / -1;

    .no-result-filter-container {
        position: absolute;
        top: 8rem;
        @include center(x);
        color: var(--color-text-normal);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-background-page-1);
        border-radius: $ruler-border-radius;
        padding: 2.5rem;

        .no-result-filter-icon {
            font-size: 6rem;
        }

        .no-result-filter-message {
            display: inline-block;
            max-width: 50rem;
            text-align: center;
            font-size: 2.2rem;
            font-weight: 400;
        }
    }
}

.wrap-control {
    cursor: pointer;

    svg {
        pointer-events: none;
    }
}

.row-control-ref {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    font-size: 14px;
    height: 88px;
    line-height: 16.1px;
    min-height: 64px;
    opacity: 0;
    padding: 20px 50px 20px 17px;
    position: fixed;
    z-index: -1;
    gap: 10px;
    vertical-align: middle;
    pointer-events: none;
    left: -100%;
    top: -100%;
}

.actions-box {
    grid-column: 2;
    grid-row: 1;
}

.datatable-controls-box {
    grid-column: 1 / -1;
    grid-template-columns: 1fr auto;
    grid-template-rows: $ruler-input-height auto;
    transition: width $animation-transition-duration ease-in-out;
    display: grid;
    gap: $grid-gap;
    position: relative;
    z-index: 30;

    @include breakpoint($medium-down) {
        grid-template-columns: 1fr;
        grid-template-rows: $ruler-input-height 1fr $ruler-input-height;

        >* {
            grid-area: stack;
        }
    }

    .filter-selection-box {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        display: grid;
        grid-template-columns: 1fr;
        gap: $grid-gap;

        &:has(.selection-controls:not(:empty)) {
            grid-template-columns: auto 1fr;
        }

        :deep(.filter-selection-box) {
            place-self: end;
        }

        @include breakpoint($medium-down) {
            grid-column: 1 / -1;
        }
    }

    .context-control {
        grid-column: 2 / -1;
        grid-row: 1 / 3;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: $grid-gap;
        align-items: flex-end;

        @include breakpoint($medium-down) {
            grid-column: 1 / -1;
            grid-row: 1 / 4;
        }
    }

    .selection-controls {
        --selection-controls-width: 0px;
        order: 0;
        border-radius: $ruler-border-radius;
        width: var(--selection-controls-width);
        display: flex;
        background-color: var(--color-primary-4);
        margin-top: auto;
        transition: width $animation-transition-duration ease-in-out;
        overflow: clip;

        &:empty {
            display: none;
        }

        &.no-selection:not(:empty) {
            width: 0;
            transition: width $animation-transition-duration ease-in-out;

            ~ :deep(#filters-box) {
                transition: transform $animation-transition-duration ease-in-out;
                transform: translateX(-#{$grid-gap});
            }
        }
    }
}
</style>

<template>
    <div class="datatable-controls-box">
        <div class="actions-box">
            <slot name="actions" />
        </div>
        <div class="filter-selection-box">
            <div class="selection-controls" ref="selection-controls"
                :class="!tableHasItemSelected ? 'no-selection' : ''">
                <slot name="selection-controls" />
            </div>
            <slot name="filters" />
        </div>
        <div class="context-control">
            <slot name="context-controls"></slot>
            <pagination ref="pagination" @range-selected="rangeSelected" @page-selected="pageSelected" />
        </div>
    </div>
    <div class="placeholder-container" v-show="hasPlaceholder() && sectionedRows().length === 0">
        <slot name="placeholder" v-if="filters.length === 0 && !showLoading"></slot>
        <div v-if="filters.length > 0" class="no-result-filter-container">
            <span class="no-result-filter-icon">
                <font-awesome-icon :icon="['fal', 'empty-set']" />
            </span>
            <p class="no-result-filter-message">
                {{ $t('dataTable.messages.noResultsFilter') }}
            </p>
        </div>
    </div>
    <div v-if="showLoading" class="loading">
        <span class="spinner">
            <spinner />
        </span>
    </div>
    <tutorial-overlay>
        <slot name="tutorial"></slot>
    </tutorial-overlay>
    <div class="table-holder" :ref="`data-table-holder-${datatableName}`" @scroll="tableHolderScroll"
        :style="`--table-holder-vertical-offset: ${dataTableVerticalOffset}px`">
        <sticky-label ref="sticky-label" v-show="sectionedRows().length !== 0"
            :alignments="[['inner', 'top'], ['inner', 'left']]" :sticky-side="'bottom'">
            <span>
                <span v-if="getSelectedRowIds().length > 0">
                    {{ getSelectedRowIds()?.length }}&nbsp;/&nbsp;</span>
                <span v-else>
                    {{ ((currentPage - 1) * range) + 1 }}&nbsp;-&nbsp;{{ currentPage * range }}&nbsp;|&nbsp;</span>
                <span>{{ rowsCount() }}</span>
                <span v-if="getSelectedRowIds().length > 0">
                    &nbsp;{{ $t('generic.ui.selected', getSelectedRowIds()) }}</span>
                <span v-else>&nbsp;{{ $t('generic.ui.item', rowsCount()) }}</span>
            </span>
        </sticky-label>
        <table v-show="!hasPlaceholder() || sectionedRows().length > 0" :class="!rowSelectable ? 'no-event' : ''">
            <thead>
                <tr :style="{ gridTemplateColumns: columnSizes }">
                    <th v-if="rowsSelectable" class="row-selector-column" style="order: 0">
                        <selection-checkbox ref="selection-checkbox" @click="selectionCheckboxClick"
                            :secondary="true" />
                    </th>
                    <th v-if="rowsUnwrap" style="order: 0"></th>
                    <template v-for="header in tableData.headers" :key="header">
                        <th :class="'table-' + header.name" :style="{ order: header.orderTable ?? header.order }"
                            v-show="tableData.visibleHeaders.includes(header.name)" v-if="!header.crudOnly"
                            @click="triggerSorter(header.name)">
                            <span>
                                {{ ((header.locale) ? $t(header.locale) : 'not_localized') || header.name }}
                            </span>
                            <data-column-sorter v-if="!header.renderer ||
                                header.allowRendererSorting ||
                                header.allowLocaleSorting" :column="header.name" @sort-selected="sortSelected"
                                :ref="`data-column-sorter-${header.name}`" />
                        </th>
                    </template>
                    <th style="order: 99"></th>
                </tr>
            </thead>
            <tbody ref="data-table-body">
                <template v-for="row in sectionedRows()" :key="row">
                    <template v-if="row">
                        <a :href="tableData.computeNewTabUrl && tableData.computeNewTabUrl(row.id)" @click="linkClick">
                            <tr :style="{ gridTemplateColumns: columnSizes }" :class="rowsUnwrap ? 'wrapped' : ''">
                                <td v-if="rowsSelectable" class="row-selector-column" style="order: 0">
                                    <input type="checkbox" class="row-selector" :checked="selection.includes(row.id)"
                                        :name="`row-selected-${row.id}`" :data-row-id="row.id"
                                        @click="event => rowSelectedClick(event, row)">
                                </td>
                                <td v-if="rowsUnwrap" @click="wrapRow" class="wrap-control" style="order: 0">
                                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                                </td>
                                <template v-for="col in tableData.headers" :key="col">
                                    <td v-show="tableData.visibleHeaders.includes(col.name)" :class="col.name"
                                        :style="{ order: col.orderTable ?? col.order }" @click="event => {
                                            event.stopPropagation();
                                            event.preventDefault();
                                            cellClick(row, col.name, row['id'], row[col.name], '')
                                        }" v-html="cellRender(row, col, getterValues)" v-if="!col.crudOnly">
                                    </td>
                                </template>
                                <td ref="rows-controls" class="row-control" :style="{ order: 99 }"
                                    :data-width="controlColumnWidth" @click="event => controlClick(event, row)">
                                    <div class="row-control-inner">
                                    </div>
                                    <slot name="rows-controls" />
                                </td>
                            </tr>
                        </a>
                    </template>
                </template>
            </tbody>
        </table>
        <div v-show="!hasPlaceholder() || sectionedRows().length > 0" class="column-selector">
            <inputs-dialog :rightAligned="true">
                <template #trigger>
                    <span class="table-column-selection-trigger">
                        <font-awesome-icon :icon="['far', 'columns']" />
                    </span>
                </template>
                <template #content>
                    <template v-for="column in tableData.headers" :key="column">
                        <label v-if="!column.crudOnly" class="column-selector-option">
                            <input type="checkbox" :value="column.name" :checked="columnIsVisible(column.name)"
                                @click="toggleColumnVisibilityClick(column.name)">
                            {{ $t(column.locale) || column.friendly[$i18n.locale] || column.name }}
                        </label>
                    </template>
                </template>
            </inputs-dialog>
        </div>
    </div>
    <div class="row-control-ref" ref="row-control-ref">
        <slot name="rows-controls" />
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getFormInputValues } from '@loufa/loufairy-client';
import {
    SelectionCheckboxStatus,
    SelectionCheckboxStatusEmit
} from '@pictaccio/admin-gui/core/types/selection_checkbox_status';
import { FilterBuilder } from '@pictaccio/admin-gui/utils/filter_builder';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { getCoords } from '@pictaccio/admin-gui/utils/get_coords';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import LoadingSplash from '@pictaccio/admin-gui/views/App.vue';
import SelectionCheckbox from '@pictaccio/admin-gui/views/components/widgets/SelectionCheckbox.vue';
import Spinner from '@pictaccio/admin-gui/views/components/widgets/Spinner.vue';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import DataColumnSorter from '@pictaccio/admin-gui/views/private/activities/companions/DataColumnSorter.vue';
import InputsDialog from '@pictaccio/admin-gui/views/private/activities/companions/InputsDialog.vue';
import Pagination from '@pictaccio/admin-gui/views/private/activities/companions/Pagination.vue';
import TutorialOverlay from '@pictaccio/admin-gui/views/private/activities/companions/TutorialOverlay.vue';
import { Id } from '@pictaccio/shared/types/id';
import { useSlots } from 'vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

/**
 * Construct a table based on the content received from tableData
 * Example format for tableData
 * {
 *     headers: [
 *         {
 *              name: 'col1',
 *              friendly: { locale:'Friendly Name', ... },
 *              size: '1rem',
 *              renderer?: (value: any) => void
 *         },
 *         ...
 *     ],
 *     visibleHeaders: [
 *         'col1',
 *         ...
 *     ],
 *     rows: [
 *         {
 *             col1: 'string',
 *             ...
 *         },
 *         ...
 *     ]
 * }
 * cellControl array of string to tell if a col need a click event on each cell
 */
@Component({
    name: 'Data Table',
    emits: [
        'control-*',
        'initial-load',
        'reset-filters',
        'row-counted',
        'row-selected',
        'row-selection-changed'
    ],
    components: {
        Spinner,
        LoadingSplash,
        DataColumnSorter,
        FontAwesomeIcon,
        InputsDialog,
        Pagination,
        SelectionCheckbox,
        StickyLabel,
        TutorialOverlay
    },
    expose: [
        'applyFilters',
        'applyGetters',
        'applyPermanentFilters',
        'getCurrentItemCount',
        'getSelectedRows',
        'query',
        'recalculateDatatablePos',
        'refresh',
        'rowSelectionChanged',
        'rowsCount',
        'setBatchSelection',
        'setRemoteStore',
        'unSelectRow'
    ]
})
export default class DataTable<T = unknown> extends Vue {
    @Prop
    private datatableName: string;
    @Prop
    private cellControl: string[] = [];
    @Prop
    private tableData: any = {};
    @Prop
    private rowsUnwrap!: boolean;
    @Prop
    private rowsSelectable?: boolean;
    @Prop
    private rowSelectable: boolean;

    private boundTableHolderPositionRowControls: () => void;
    private dataTableVerticalOffset: number;
    private getterValues: Record<string, any>;
    private controlColumnWidth = ' auto';
    private tableHasItemSelected = false;
    private localSelection: Id[] = [];
    private showLoading = false;
    private silenceRead = false;

    private firstGetPage = true;
    // Filters
    private filters: FilterFunction[] = [];
    private permanentFilters: FilterFunction[] = [];
    // Pagination
    private pagination: Pagination;
    private currentPage!: number;
    private range!: number;
    // Remote
    private remote = false;
    private remoteStore: RemoteStore<T>;
    // Sorters
    private selectedSorterInfo: any;
    // Columns visibility
    private visibleHeaders: string[] = [];
    // Teleports
    private isMounting = false;

    public rowsCount(): number {
        let count = 0;

        if (this.remote) {
            count = this.remoteStore.getItemsCount;
        } else {
            count = this.filteredRows().length;
        }

        this.$emit('row-counted', count);
        return count;
    }

    /**
     * Populates the filters with the FilterFunctionInterface[] receive from its parent.
     */
    public async applyFilters(filters: FilterFunction[]): Promise<void> {
        if (this.remote) {
            this.filters = filters;
            await this.applyRemoteFilters(filters);
        } else {
            this.filters = [...filters, ...this.permanentFilters];
        }
    }

    public applyGetters(getterValues: Record<string, any>) {
        this.getterValues = getterValues;
        //this.refresh();
    }

    /**
     * Apply permanent filters that can't be changed by the users. Use this to create partial views of a table
     * @param filters
     */
    public async applyPermanentFilters(filters: FilterFunction[], initial?: boolean): Promise<void> {
        this.permanentFilters = filters;

        if (this.remote) {
            await this.applyRemoteFilters(filters, initial);
        } else {
            this.filters = this.permanentFilters;
            this.$emit('reset-filters');
        }
    }

    public getCurrentItemCount(): number {
        if (this.remote) {
            return this.remoteStore.getItemsCount;
        } else {
            return this.filteredRows().length;
        }
    }

    public getSelectedRows(): any[] {
        const table = this.$refs['data-table-body'] as HTMLElement;
        const tableValue = Object.entries(getFormInputValues(table));

        const allRows = this.remote
            ? this.remoteStore.getSelection
            : this.filteredRows();

        if (this.remote) {
            return allRows;
        }

        return allRows.filter(i => Object.keys(
            Object.fromEntries(
                tableValue.filter(
                    ([k, v]) => (k.startsWith('row-selected-') && v))
            )).map(i => i.replace('row-selected-', ''))
            .includes(i.id));
    }

    public getSelectedRowIds(): Id[] {
        return this.remote
            ? this.remoteStore.getSelection
            : this.localSelection;
    }

    public async query(ids: Id[]): Promise<T[]> {
        if (!this.remote) {
            throw new Error('Query is only available in remote mode');
        }

        return this.remoteStore.query([
            [{ column: 'id', operator: 'IN', operand: ids }]
        ]);
    }

    public recalculateDatatablePos(): void {
        this.setDataTableVerticalOffset();
    }

    /**
     * Force a remote reload when in remote mode, otherwise do nothing
     */
    public async refresh(): Promise<void> {
        const start = (this.currentPage - 1) * this.range;
        await this.remoteStore.invalidateRange({ start, end: start + this.range });
        await this.awaitGetPage();
    }

    public get selection(): Id[] {
        if (this.remote) {
            return this.remoteStore.getSelection;
        } else {
            return this.localSelection;
        }
    }

    /**
     * Set to remote mode
     */
    public setRemoteStore(remoteStore: RemoteStore<T>, initialRead = true): void {
        this.silenceRead = !initialRead;

        this.remote = true;
        this.remoteStore = remoteStore;
        this.targetSorter('id').setSort('ascending');

        if (this.selection.length) {
            this.updateSelectionCheckboxStatus();
        }
    }

    public setLocalBatchSelection(selection: SelectionCheckboxStatus): void {
        const table = this.$refs['data-table-body'] as HTMLElement;
        switch (selection) {
            case 'all':
                for (const row of this.tableData.rows) {
                    const rowId = row.id;
                    const checkbox = table.querySelector(`input[name=row-selected-${rowId}]`) as HTMLInputElement;

                    if (this.localSelection.includes(rowId)) {
                        continue;
                    }

                    if (checkbox) {
                        checkbox.checked = true;
                    }

                    this.localSelection.push(rowId);
                }
                this.tableHasItemSelected = true;
                break;
            case 'none':
                for (const row of this.tableData.rows) {
                    const rowId = row.id;
                    const checkbox = table.querySelector(`input[name=row-selected-${rowId}]`) as HTMLInputElement;

                    if (!this.localSelection.includes(rowId)) {
                        continue;
                    }

                    if (checkbox) {
                        checkbox.checked = false;
                    }

                    const index = this.localSelection.indexOf(rowId);
                    this.localSelection.splice(index, 1);
                }
                this.tableHasItemSelected = false;
                break;
            case 'partial':
                this.tableHasItemSelected = true;
                break;
        }
    }

    public setRemoteBatchSelection(selection: SelectionCheckboxStatus): void {
        switch (selection) {
            case 'all':
                this.remoteStore.selectAll();
                this.tableHasItemSelected = true;
                break;
            case 'none':
                this.remoteStore.selectNone();
                this.tableHasItemSelected = false;
                break;
            case 'partial':
                this.tableHasItemSelected = true;
                break;
        }
    }

    public unselectRow(id: string): void {
        const table = this.$refs['data-table-body'] as HTMLElement;

        (table.querySelector(`input[name=row-selected-${id}]`) as HTMLInputElement).checked = false;
    }

    public unsilenceRead(): void {
        this.silenceRead = false;
    }

    /* LIFECYCLE */
    public update(): void {
        this.$nextTick(() => {
            this.tableHolderPositionRowControls();
            this.setDataTableVerticalOffset();
        });
    }

    public mounted(): void {
        this.pagination = this.$refs['pagination'] as Pagination;
        this.visibleHeaders = this.tableData.visibleHeaders;
        this.isMounting = true;
        this.$watch(() => this.tableData.rows, this.localDataUpdate.bind(this));
        this.boundTableHolderPositionRowControls = this.tableHolderPositionRowControls.bind(this);
        window.addEventListener('resize', this.boundTableHolderPositionRowControls);
        this.$nextTick(() => {
            this.calculateControlColumnWidth();
            this.setDataTableVerticalOffset();
            this.calculateSelectionControlsWidth();
        });
    }

    public unmounted(): void {
        window.removeEventListener('resize', this.boundTableHolderPositionRowControls);
    }

    /* EVENT LISTENERS */
    /**
     * @event row-selected pass to its parent information about the clicked cell
     */
    private cellClick(row: any, colName: string, rowId: number, cellValue: any, renderedValue: string): void {
        if (!this.rowSelectable) {
            return;
        }

        const event = {
            row,
            rowId,
            colName,
            cellValue,
            renderedValue
        };
        this.$emit('row-selected', event);
    }

    private controlClick(event, row: any): void {
        const controlName = event.target.getAttribute('name');

        if (!controlName) {
            return;
        }

        this.$emit(`control-${controlName}`, { rowId: row['id'], row });
    }

    private linkClick(event: Event): void {
        event.preventDefault();
    }

    private async pageSelected(pageSelected: number): Promise<void> {
        this.currentPage = pageSelected;
        await this.awaitGetPage();
        this.$forceUpdate();
    }

    private async rangeSelected(range: number): Promise<void> {
        this.range = range;

        if (this.remote) {
            this.remoteStore.clear();
        }

        await this.awaitGetPage();
        this.$forceUpdate();
    }

    private recalculateDatatablePosToggle(): void {
        this.setDataTableVerticalOffset();
    }

    private tableHolderScroll(): void {
        this.tableHolderPositionRowControls();
    }

    private async rowSelectedClick(event: MouseEvent, row: any): Promise<void> {
        event.stopPropagation();
        const status = {
            checked: (event.target as HTMLInputElement).checked,
            rowId: row.id,
            row
        };

        if (this.remote) {
            if (status.checked) {
                await this.remoteStore.selectAddId(row.id);
            } else {
                await this.remoteStore.selectRemoveId(row.id);
            }
        } else {
            if (status.checked) {
                this.localSelection.push(row.id);
            } else {
                const index = this.localSelection.indexOf(row.id);
                this.localSelection.splice(index, 1);
            }
        }

        this.updateSelectionCheckboxStatus();

        this.$emit('row-selection-changed', status);
    }

    private selectionCheckboxClick(selection: SelectionCheckboxStatusEmit): void {
        if (this.remote) {
            this.setRemoteBatchSelection(selection.checkedStatus);
        } else {
            this.setLocalBatchSelection(selection.checkedStatus);
        }
    }

    private async sortSelected(column: string, sort: string): Promise<void> {
        const selectedSorter: DataColumnSorter = this.targetSorter(column);

        for (const header of this.tableData.headers) {
            if (!header.crudOnly || !header.renderer || header.allowRendererSorting || header.allowLocaleSorting) {
                const sorter: DataColumnSorter = this.targetSorter(header.name);

                if (sorter && sorter !== selectedSorter) {
                    sorter.stateSet('default');
                }
            }
        }

        if (this.tableData.headers.find(header => header.name === column).localizeValue) {
            await this.sortRowsLocale(column, sort);
        } else {
            await this.sortRows(column, sort);
        }

        await this.awaitGetPage();
    }

    private toggleColumnVisibilityClick(column: string): void {
        if (this.visibleHeaders.includes(column)) {
            const index = this.visibleHeaders.indexOf(column);
            this.visibleHeaders.splice(index, 1);
        } else {
            this.visibleHeaders.push(column);
        }

        this.tableData.visibleHeaders = this.visibleHeaders;
    }

    private triggerSorter(name: string): void {
        const sorterRef = this.$refs[`data-column-sorter-${name}`];

        if (!sorterRef) {
            return null;
        }

        (sorterRef[0] as DataColumnSorter).sortClick();
    }

    /* PRIVATE */
    private async applyRemoteFilters(filters: FilterFunction[], initial?: boolean): Promise<void> {
        const builder = new FilterBuilder();

        for (const filter of filters) {
            filter.createRemoteFilters(builder);
        }

        for (const filter of this.permanentFilters) {
            filter.createRemoteFilters(builder);
        }

        if (initial && this.silenceRead) {
            return;
        }

        await this.remoteStore.setFilter(builder.toRemoteFilters());
        this.unsilenceRead();
        await this.awaitGetPage();
    }

    private async awaitGetPage(): Promise<void> {
        if (this.remote && !this.silenceRead) {
            this.showLoading = true;
            await this.getPage();
            this.showLoading = false;
        }
    }

    private calculateSelectionControlsWidth() {
        const selectionControls = this.$refs['selection-controls'] as HTMLElement;
        let width = 0;

        for (const child of selectionControls.children) {
            width += child.clientWidth;
        }

        selectionControls.style.setProperty('--selection-controls-width', width + 'px');
    }

    private cellRender(row: any, col: any, getterValues?: Record<string, any>) {
        if (row) {
            let localizeValue;
            let getterValue;
            let value = row[col.name];

            if (col.localizeValue && typeof col.localizeValue === 'boolean') {
                localizeValue = this.$t(`dataTable.body.${col.name}.${value}`);
            } else if (col.localizeValue &&
                typeof col.localizeValue === 'string' &&
                !col.localizeValue.startsWith('rowPath:') &&
                this.$te(`dataTable.body.${col.name}.${col.localizeValue}`)) {
                localizeValue = this.$t(`dataTable.body.${col.name}.${col.localizeValue}`);
            } else if (col.localizeValue &&
                typeof col.localizeValue === 'string' &&
                col.localizeValue.startsWith('rowPath:')) {
                const path = col.localizeValue.slice(8).split('.');
                value = path.reduce((row, key) => {
                    if (!row || !key || row[key] === undefined) {
                        return '';
                    }
                    return row[key]
                }, row);
                localizeValue = this.$t(`dataTable.body.${col.name}.${value}`);
            }

            if (getterValues && getterValues[col.name]) {
                getterValue = getterValues[col.name];
            }

            try {
                return typeof col.renderer === 'function'
                    ? col.renderer(value, localizeValue, row, getterValue)
                    : value;
            } catch (e) {
                return value;
            }
        }
    }

    private columnIsVisible(column: string): boolean {
        return this.visibleHeaders.includes(column);
    }

    /**
     * takes the size value of the visible headers in tableData.headers[x].size and join them to
     * dynamically adjust the sizes of the column inline.
     */
    private get columnSizes(): string {
        let columns = this.tableData.headers
            ? this.tableData.headers
                .filter(item => this.tableData.visibleHeaders.includes(item.name))
                .map(item => `[${item.name}-start] ${item.size}`)
                .join(' ')
            : '';
        if (this.rowsUnwrap) {
            columns = '[row-unwrap-start] 3rem ' + columns;
        }
        if (this.rowsSelectable) {
            columns = '[row-selectable-start] 3rem ' + columns;
        }
        columns = columns + `[row-control-start] ${this.controlColumnWidth}`;

        return columns;
    }

    private calculateControlColumnWidth(): void {
        const element = (this.$refs['row-control-ref'] as Element);
        if (!element) {
            return;
        }
        this.$nextTick(() => {
            this.controlColumnWidth = ` ${element.clientWidth}px`;
        });
    }

    /**
     * Determines if a row need to be visible base on the filtered value.
     */
    private filteredRows() {
        return this.tableData.rows
            ? this.tableData.rows.filter(
                row => this.filters[0]
                    ? this.filters.flat().reduce(
                        // @ts-ignore
                        (visible, filter) => visible && filter.filter(row[filter.column]),
                        true)
                    : row)
            : [];
    }

    private async getPage(): Promise<void> {
        await this.remoteStore.getPage({
            from: (this.currentPage - 1) * this.range,
            size: this.range
        });

        if (this.firstGetPage) {
            this.$emit('initial-load');
            this.firstGetPage = false;
        }

        await this.$nextTick(() => {
            this.tableHolderPositionRowControls();
        });

        this.pagination.setNumberOfItems(this.rowsCount());
    }

    private hasContextControls(): boolean {
        return Boolean(useSlots()['context-controls']);
    }

    private hasPlaceholder(): boolean {
        return Boolean(useSlots()['placeholder']);
    }

    private localDataUpdate(): void {
        this.tableHolderPositionRowControls();
        this.pagination.setNumberOfItems(this.rowsCount());
    }

    private rowsInRange(key: number) {
        return key >= ((this.currentPage - 1) * this.range) && key <= ((this.currentPage * this.range) - 1)
    }

    private sectionedRows() {
        const allRows = this.remote
            ? this.remoteStore.getItems
            : this.filteredRows();

        this.$nextTick(() => { this.setDataTableVerticalOffset() });

        return Array.isArray(allRows)
            ? allRows.slice(this.range * (this.currentPage - 1),
                Math.min((this.range * this.currentPage), allRows.length))
            : [];
    }

    private setDataTableVerticalOffset(): void {
        const element = this.$refs[`data-table-holder-${this.datatableName}`] as Element;
        if (!element) {
            return;
        }
        this.dataTableVerticalOffset = getCoords(element, 'top left').y;
    }

    private async sortRows(column: string, sort: string): Promise<void> {
        switch (sort) {
            case 'ascending':
                if (this.remote) {
                    await this.remoteStore.setSort([{
                        column,
                        order: 'ASC'
                    }]);
                } else {
                    this.tableData.rows.sort((a, b) => {
                        if (a[column] < b[column]) {
                            return -1;
                        }
                        if (a[column] > b[column]) {
                            return 1;
                        }
                        return 0;
                    });
                }
                break;

            case 'descending':
                if (this.remote) {
                    await this.remoteStore.setSort([{
                        column,
                        order: 'DESC'
                    }]);
                } else {
                    this.tableData.rows.sort((a, b) => {
                        if (a[column] > b[column]) {
                            return -1;
                        }
                        if (a[column] < b[column]) {
                            return 1;
                        }
                        return 0;
                    });
                }
                break;
        }
    }

    private async sortRowsLocale(column: string, sort: string): Promise<void> {
        const language = this.$i18n.locale;
        switch (sort) {
            case 'ascending':
                if (this.remote) {
                    column += '_json ::json ->> \'' + language + '\'';
                    await this.remoteStore.setSort([{
                        column,
                        order: 'ASC'
                    }])
                } else {
                    this.tableData.rows.sort((a, b) => {
                        return a[column][language].localeCompare(b[column][language]);
                    });
                }
                break;

            case 'descending':
                if (this.remote) {
                    column += '_json ::json ->> \'' + language + '\'';
                    await this.remoteStore.setSort([{
                        column,
                        order: 'DESC'
                    }]);
                } else {
                    this.tableData.rows.sort((a, b) => {
                        return b[column][language].localeCompare(a[column][language]);
                    });
                }
                break;
        }
    }

    private tableHolderPositionRowControls(): void {
        const target = this.$refs[`data-table-holder-${this.datatableName}`] as HTMLElement;

        if (!target) {
            return;
        }

        const tableHolderWidth = target.clientWidth;
        const tableHolderScrollWidth = target.scrollWidth;
        const scrollOffset = target.scrollLeft;

        const transform = (tableHolderScrollWidth - tableHolderWidth - scrollOffset - 45) * -1;
        target.style.setProperty('--row-controls-offset', transform + 'px');
    }

    private targetSorter(name: string): DataColumnSorter {
        const sorterRef = this.$refs[`data-column-sorter-${name}`];

        if (!sorterRef) {
            return null;
        }

        return sorterRef[0] as DataColumnSorter;
    }

    private updateSelectionCheckboxStatus(): void {
        const selection = this.getSelectedRowIds();
        const itemCount = this.getCurrentItemCount();
        const selectionCheckbox = this.$refs['selection-checkbox'] as SelectionCheckbox;

        if (selection.length === itemCount) {
            selectionCheckbox.setCheckedStatus('all');
            this.tableHasItemSelected = true;
        } else if (selection.length === 0) {
            selectionCheckbox.setCheckedStatus('none');
            this.tableHasItemSelected = false;
        } else {
            selectionCheckbox.setCheckedStatus('partial');
            this.tableHasItemSelected = true;
        }
    }

    private wrapRow(event) {
        event.target.parentNode.classList.toggle('wrapped');
    }
}
</script>
