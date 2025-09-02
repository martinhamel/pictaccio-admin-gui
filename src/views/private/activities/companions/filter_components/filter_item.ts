import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { FilterFunctionDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { AllFilterTypes } from '@pictaccio/admin-gui/src/core/types/filters/all_filter_types';
import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { SerializedFilterItem } from '@pictaccio/admin-gui/src/core/types/serialized_params';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import FilterPopup from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/FilterPopup.vue';
import { ComponentBase, Prop, Vue } from 'vue-facing-decorator';

export type FiltersOption = {
    name: string,
    pop?: boolean
}

@ComponentBase({
    components: [
    ],
    expose: [
        'isEmpty',
        'getFilterFunctions',
        'getQuery',
        'getType',
        'open',
        'reset',
        'serialize',
        'setQuery',
        'unserialize'
    ],
    emits: [
        'search'
    ]
})
export default class FilterItem<Tvalue = any, Tfilter extends AllFilterTypes = AllFilterTypes> extends Vue {
    @Prop
    protected filters: FilterFunctionDescriptor[] = [];
    @Prop
    protected name: string;
    @Prop
    protected dataSource: DataSource<never, any, any, any>;

    protected filterType: FilterType = 'is';

    public isEmpty(): boolean {
        throw new Error('Not implemented');
    }

    public getFilterFunctions(): FilterFunction[] {
        // eslint-disable-next-line new-cap
        return this.filters.map(filter => new filter.filterFunction(this.getQuery(), this.filterType, filter.column));
    }

    public getQuery(): Tvalue {
        throw new Error('Not implemented');
    }

    public getType(): string {
        throw new Error('Not implemented');
    }

    public open(): void {
        // @ts-ignore
        const filterPopup = this.$refs['filter'] as FilterPopup;
        if (filterPopup) {
            filterPopup.openDialog();
        }
    }

    public reset(): void {
        throw new Error('Not implemented');
    }

    // TODO: PSFCA-2847 Create types for the filters
    public serialize(): SerializedFilterItem<Tfilter> {
        throw new Error('Not implemented');
    }

    public setQuery(query: Tvalue): void {
        throw new Error('Not implemented');
    }

    // TODO: PSFCA-2847 Create types for the filters
    public unserialize(serialized: any): void {
        throw new Error('Not implemented');
    }

    /* LIFECYCLE */
    public mounted(): void {
        // THIS IS A COMMENT
    }

    /* EVENT HANDLERS */
}
