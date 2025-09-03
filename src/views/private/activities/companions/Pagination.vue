<style lang="scss" scoped>
.pagination {
    display: flex;
    gap: $grid-gap;

    [data-theme-color="dark"] & {
        --color-background-pagination-unselected: var(--color-mix-5-6-step-3);
        --color-text-pagination-unselected: var(--color-mix-6-4-step-3);
        --color-background-pagination-selected: var(--color-mix-6-4-step-3);
        --color-text-pagination-selected: var(--color-primary-4);
    }

    [data-theme-color="light"] & {
        --color-background-pagination-unselected: var(--color-mix-5-7-step-1);
        --color-text-pagination-unselected: var(--color-mix-6-4-step-3);
        --color-background-pagination-selected: var(--color-mix-7-4-step-3);
        --color-text-pagination-selected: var(--color-primary-5);
    }

    .label {
        white-space: nowrap;

        &.order {
            order: 1;
        }
    }
}

.end {
    order: 1;
}

.pagination-range {
    width: 8rem;
}

.pagination-navigation-compact,
.pagination-navigation-extended {
    order: 0;
    display: grid;
    align-items: inherit;
    justify-content: end;
}

.pagination-navigation-compact {
    @extend .h6;
    grid-template-columns: 4.5rem min-content 4.5rem;
    background-color: var(--color-background-pagination-selected);
    color: var(--color-text-pagination-selected);
    border-radius: $ruler-border-radius;
    display: none;
    gap: 0.5rem;
    height: $ruler-input-height;
    padding: 0 1rem;
    margin: 0;

    @include breakpoint($medium-down) {
        display: grid;
    }

    input {
        text-align: center;
        padding: 0;
        height: 3rem;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.pagination-navigation-extended {
    display: flex;
    gap: 0.5rem;

    @include breakpoint($medium-down) {
        display: none;
    }

    span,
    .btn {
        @extend .h6;
        display: flex;
        width: $ruler-input-height;
        height: $ruler-input-height;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--color-background-pagination-unselected);
        color: var(--color-text-pagination-unselected);
        padding: 0.7rem;
        margin: 0;
        border-radius: $ruler-border-radius;

        &.current-page {
            background-color: var(--color-background-pagination-selected);
            color: var(--color-text-pagination-selected);
            cursor: initial;
            pointer-events: none;
        }
        &:disabled {
            cursor: initial;
            pointer-events: none;

            [data-theme-color="dark"] & {
                filter: brightness(50%);
            }

            [data-theme-color="light"] & {
                filter: brightness(90%);
            }
        }
    }
}
</style>

<template>
    <div class="pagination" ref="pagination">
        <div class="pagination-range">
            <dropdown ref="pagination-range"
                      v-if="isMounted"
                      :dropdownName="'range'"
                      :current-selection="[range.toString()]"
                      @change="rangeChange"
                      :emitOnMounted="false">
                <label value="10" data-value="10"><span>10</span></label>
                <label value="20" data-value="20"><span>20</span></label>
                <label value="50" data-value="50"><span>50</span></label>
                <label value="100" data-value="100"><span>100</span></label>
            </dropdown>
        </div>
        <div class="pagination-navigation-extended">
            <button type="button" class="btn btn-tertiary" @click="previousPageClick"
                :disabled="currentPage === 1">
                <font-awesome-icon :icon="['fas', 'chevron-left']"/>
            </button>
            <template v-if="paginationChanged">
                <template v-for="(page, index) in Math.ceil(numberOfItemsCheck() / range)" :key="index">
                    <span v-if="pageInRange(page)" class="text-small"
                          :class="currentPage === page ? 'current-page' : ''" @click="pageClick(page)">
                        {{ page }}
                    </span>
                </template>
            </template>
            <button type="button" class="btn btn-tertiary" @click="nextPageClick"
                    :disabled="currentPage >= Math.ceil(numberOfItemsCheck() / range) ">
                <font-awesome-icon :icon="['fas', 'chevron-right']"/>
            </button>
        </div>
        <div class="pagination-navigation-compact">
            <input type="number" min="1" :max="Math.ceil(numberOfItemsCheck() / range)"
                   v-model="currentPage" @change="pageChange">
            <span>/</span>
            <span v-show="numberOfItems !== undefined">{{ Math.ceil(numberOfItemsCheck() / range) }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import localStorageService from '@pictaccio/admin-gui/services/local_storage_service';


@Component({
    name: 'Pagination',
    emits: [
        'range-selected',
        'page-selected'
    ],
    components: {
        FontAwesomeIcon,
        Dropdown
    }
})
export default class Pagination extends Vue {
    private numberOfItems: number;
    private currentPage = 1;
    private range = 10;
    private paginationChanged = true;

    private isMounted = false;

    public setNumberOfItems(itemsCount: number): void {
        if (itemsCount !== undefined) {
            this.numberOfItems = itemsCount;
        }

        this.paginationChanged = false;
        this.$nextTick(() => { this.paginationChanged = true })
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.range = Number(localStorageService.get('pagination-range') ?? 10);
        this.isMounted = true;
        const range = this.range;
        const pageSelected = this.currentPage;

        this.$emit('range-selected', range);
        this.$emit('page-selected', pageSelected);
    }

    /* EVENT HANDLERS */
    private firstPageClick(): void {
        this.currentPage = 1;
        this.pageChange();
    }

    private lastPageClick(): void {
        this.currentPage = Math.ceil(this.numberOfItemsCheck() / this.range);
        this.pageChange();
    }

    private nextPageClick(): void {
        this.currentPage = this.currentPage + 1;

        if (this.currentPage > Math.ceil(this.numberOfItemsCheck() / this.range)) {
            this.currentPage = Math.ceil(this.numberOfItemsCheck() / this.range);
        }
        this.pageChange();
    }

    private pageClick(page: number): void {
        this.currentPage = page;
        this.pageChange();
    }

    private pageChange(): void {
        const pageSelected = this.currentPage;

        if (pageSelected) {
            this.$emit('page-selected', pageSelected);
        }
    }

    private previousPageClick(): void {
        this.currentPage = this.currentPage - 1;

        if (this.currentPage <= 0) {
            this.currentPage = 1;
        }

        this.pageChange();
    }

    private rangeChange(event): void {
        const range: number = event.selection;

        if (event.selection === undefined ||
            event.selection === null) {
            return;
        }

        this.range = Number(range);
        localStorageService.set('pagination-range', String(range));
        this.$emit('range-selected', this.range);

        if (this.currentPage > Math.ceil(this.numberOfItemsCheck() / this.range)) {
            this.currentPage = Math.ceil(this.numberOfItemsCheck() / this.range);
            this.pageChange();
        }
    }

    /* PRIVATE */
    private numberOfItemsCheck(): number {
        return this.numberOfItems > 0 ? this.numberOfItems : 1;
    }

    private pageInRange(page: number): boolean {
        if (!(Math.ceil(this.numberOfItemsCheck() / this.range) > 5)) {
            return true;
        }

        if (this.currentPage + 2 >= page && this.currentPage - 2 <= page) {
            return true;
        }

        if (this.currentPage < 3 && page <= 5) {
            return true;
        }

        if (this.currentPage > Math.ceil(this.numberOfItemsCheck() / this.range) - 3 &&
            page >= Math.ceil(this.numberOfItemsCheck() / this.range) - 4) {
            return true;
        }

        return false;
    }

    private pageSelectionAfter(): boolean {
        if (!(Math.ceil(this.numberOfItemsCheck() / this.range) > 5)) {
            return false;
        }

        if (!(this.currentPage <= (Math.ceil(this.numberOfItemsCheck() / this.range) - 3))) {
            return false;
        }

        return true;
    }

    private pageSelectionBefore():boolean {
        if (!(Math.ceil(this.numberOfItemsCheck() / this.range) > 5)) {
            return false;
        }

        if (this.currentPage < 4) {
            return false;
        }

        return true;
    }
}
</script>
