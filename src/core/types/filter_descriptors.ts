import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';

export type FilterDescriptor = {
    pop: boolean,
    component: typeof FilterItem<any>,
    datasource?: DataSource<any, any, any, any>,
    name: string,
    filters: FilterFunctionDescriptor[]
}

export type FilterFunctionDescriptor = {
    filterFunction: typeof FilterFunction<any>,
    column: string
}
