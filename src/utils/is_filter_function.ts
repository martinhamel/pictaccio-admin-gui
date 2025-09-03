import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';

export function isFilterFunction(value: any): value is FilterFunction<any> {
    return value &&
        value.column &&
        value.value;
}
