<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
#filters-box {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: $grid-gap;
    justify-content: end;
    grid-column: 1 / -1;

    [data-theme-color="dark"] & {
        --color-background-more-filter-hover: var(--color-mix-5-6-step-2);
    }
}

.filters-title {
    position: absolute;
    bottom: calc(100% - 0.6rem);
}

.show-filter-btn {
    width: min-content;
    display: flex;
    height: 100%;
    gap: 0.5rem;

    svg {
        transform: translateY(-2px);
    }
}

.filters {
    max-width: unset;
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: #{$grid-gap * 1.5} $grid-gap;

    .more-filters {
        display: flex;
        white-space: nowrap;
    }

    .more-filter {
        display: flex;
        color: var(--color-text-normal);
        padding: 0.5rem 1rem 0.5rem 1.85rem;
        margin: 0;
        min-width: 20rem;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            width: var(--dialog-box-padding);
            background-color: inherit;
            position: absolute;
            top: 0;
            bottom: 0;
        }

        &::after {
            left: 100%;
        }

        &::before {
            right: 100%;
        }

        &:hover {
            background-color: var(--color-background-more-filter-hover);
        }

        &:not(:hover) input:not(:checked) {
            color: var(--color-input-background-contrasted);
        }
        &:not(:hover) input:checked {
            color: var(--color-checkbox-background-checked);
        }
    }
}

.filters-settings {
    grid-column: span 1 / -1;
    font-size: 1.7rem;
}

:deep(.inputs-dialog) {
    width: max-content;
    margin: 0;
}
</style>

<template>
    <div id="filters-box" class="filters-box">
        <form class="filters" ref="filters-form" prevent-submit="true">
            <template v-for="(filter, index) in filters" :key="index">
                <component v-show="filter.visible"
                           :ref="`component_${filter.name}`"
                           :is="filter.component"
                           :name="filter.name"
                           :data-source="filter.datasource"
                           :filters="filter.filters"
                           :style="{order: typeof nonPopularFilterOrder?.indexOf === 'function'
                               ? nonPopularFilterOrder.indexOf(filter.name)
                               : 0}"
                           @search="searchClick">
                </component>
            </template>
            <div class="more-filters" style="order: 99">
                <filter-popup ref="more-filters"
                              v-if="filters.filter(f => !f.pop).length > 0">
                    <template #btn>
                        <div class="btn btn-tertiary show-filter-btn">
                            <span>{{ $t('generic.ui.more') }}</span>
                            <font-awesome-icon :icon="['far', 'plus']"/>
                        </div>
                    </template>
                    <template #body>
                        <label v-for="(filter, index) in filters.filter(f => !f.pop)"
                               :key="index"
                               class="more-filter">
                            <input type="checkbox"
                                   :value="filter.name"
                                   :checked="filter.visible"
                                   @click="toggleFilterPopularityClick(filter.name)">
                            {{ $t(`generic.filter.${filter.name}`) }}
                        </label>
                    </template>
                    <template #footer>
                        <a class="text-large" @click="resetPopularFilters">
                            {{ $t('generic.ui.reset') }}
                        </a>
                    </template>
                </filter-popup>
            </div>
            <button class="btn btn-tertiary" @click="clearFilters" style="order: 100">
                {{ $t(`generic.ui.clear`) }}
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { deepCompare } from '@loufa/loufairy';
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { AllFilterTypes } from '@pictaccio/admin-gui/src/core/types/filters/all_filter_types';
import { SerializedFilterItem, SerializedParams } from '@pictaccio/admin-gui/src/core/types/serialized_params';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import AssigneeFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/AssigneeFilterItem.vue';
import BooleanFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/BooleanFilterItem.vue';
import DateFilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/DateFilterItem.vue';
import FilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/FilterPopup.vue';
import DropdownFilter
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MultiListFilterItem.vue';
import SliderFilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/SliderFilterItem.vue';
import TextFilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/TextFilterItem.vue';
import InputsDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/InputsDialog.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { unref } from 'vue';

/**
 * Display filters parametrically from a selection of available filters and warn the parent when the user wishes to
 * apply new filters.
 *Example format for assignees
 * [
 *     { name: 'String', avatar: 'path/to/file.img'}
 * ]
 *
 * @param allowedFilters An array of strings representing the filters that should be display
 * @event apply-filters Send an array of FilterFunctionInterface representing all the filters and their value to
 * its parent
 */
@Component({
    name: 'FiltersHolder',
    components: {
        FilterPopup,
        AssigneeFilter: AssigneeFilterItem,
        BooleanFilter: BooleanFilterItem,
        DateFilter: DateFilterItem,
        DropdownFilter,
        FontAwesomeIcon,
        InputsDialog,
        SliderFilter: SliderFilterItem,
        TextFilter: TextFilterItem
    },
    emits: [
        'apply-filters',
        'filters-visibility-changed'
    ],
    expose: [
        'applyFilters',
        'clearFilters',
        'serializeFilters',
        'setSearchFilters',
        'unserializeFilters'
    ]
})
export default class Filters extends Vue {
    @Prop
    private allowedFilters: FilterDescriptor[] = [];
    @Prop
    private restoreFilters = false;

    private filters: (FilterDescriptor & { visible: boolean, ref?: FilterItem })[] = [];
    private previousFilters: FilterFunction[] = [];

    private nonPopularFilterOrder: string[] = [];
    private loadedPromise: Promise<void>;
    private loadedPromiseResolve: () => void;

    public applyFilters(): void {
        this.searchClick(true);
    }

    public clearFilters(): void {
        this.nonPopularFilterOrder = [];

        for (const filter of this.filters) {
            filter.ref?.reset();
        }

        this.searchClick();
    }

    public resetPopularFilters(): void {
        const filters = this.filters.filter(filter => !filter.pop);

        for (const filter of filters) {
            filter.ref.reset();
            filter.visible = false;
        }

        this.nonPopularFilterOrder = [];

        this.searchClick();
    }

    public serializeFilters(): SerializedParams {
        return {
            filters: this.prepareFiltersToSerialize(),
            order: unref(this.nonPopularFilterOrder) ?? []
        };
    }

    private prepareFiltersToSerialize(): SerializedFilterItem<AllFilterTypes>[] {
        return this.filters
            .filter(filter => !filter.ref.isEmpty())
            .map(filter => ({
                name: filter.name,
                params: filter.ref.serialize() as unknown as AllFilterTypes // TODO: Fix this (unknown)
            }));
    }

    public setSearchFilters(query: string): void {
        if (this.$refs['component_search']) {
            (this.$refs['component_search'] as TextFilterItem)[0].setQuery(query);
        }
    }

    public async unserializeFilters(serialized: SerializedParams): Promise<void> {
        await this.loadedPromise;

        try {
            this.nonPopularFilterOrder = serialized.order;
            for (const filter of serialized.filters) {
                const filterComponent = this.filters.find(f => f.name === filter.name);
                if (filterComponent) {
                    filterComponent.ref.unserialize(filter.params);
                    filterComponent.visible = true;
                }
            }

            this.searchClick(true);
        } catch {
            this.clearFilters();
        }
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.filters = this.allowedFilters.map(filter => ({
            ...filter,
            visible: filter.pop
        }));

        this.loadedPromise = new Promise(resolve => this.loadedPromiseResolve = resolve);

        this.$nextTick(() => {
            this.filters = this.filters.map(filter => ({
                ...filter,
                ref: this.$refs[`component_${filter.name}`][0]
            }));

            this.loadedPromiseResolve();
        });
    }

    /* EVENT LISTENERS */
    /**
     * Compiles values of all inputs and create the filterFunctions from them.
     * @event apply-filters Send an array of FilterFunctionInterface representing all the filters and their value to
     * its parent
     */
    private searchClick(force = false): void {
        const filters = this.filters
            .filter(filter => filter.visible && !filter?.ref?.isEmpty())
            .map(filter => filter.ref.getFilterFunctions())
            .flat()
            .filter(filterFunction => filterFunction)
        const filtersChanged = !deepCompare(this.previousFilters, filters);

        if (filtersChanged || force) {
            this.previousFilters = filters;
        } else {
            return;
        }

        this.$emit('apply-filters',
            filters
        );
    }

    /* EVENT HANDLERS */
    private toggleFilterPopularityClick(name: string): void {
        const filter = this.filters.find(filter => filter.name === name);
        filter.visible = !filter.visible;

        if (!Array.isArray(this.nonPopularFilterOrder)) {
            this.nonPopularFilterOrder = [];
        }

        if (filter.visible) {
            this.nonPopularFilterOrder.push(name);
        } else {
            this.nonPopularFilterOrder = this.nonPopularFilterOrder.filter(filterName => filterName !== name);
        }

        this.$forceUpdate();
        this.updateFilterVisibility();
        (this.$refs['more-filters'] as FilterPopup).forceCloseDialog();
        this.$refs[`component_${name}`][0].open();
    }

    private updateFilterVisibility(): void {
        this.$emit('filters-visibility-changed');
    }

    /* PRIVATE */
}
</script>
