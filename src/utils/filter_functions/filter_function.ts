import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { FilterBuilder } from '@pictaccio/admin-gui/src/utils/filter_builder';

export class FilterFunction<T = any> {
    public readonly column: string;
    public type: FilterType;
    public value: T;

    constructor(value: T, type: FilterType, column: string) {
        this.type = type;
        this.value = value;
        this.column = column;
    }

    public static canHandle(value: any): boolean {
        throw new Error('Not Implemented');
    }

    public createRemoteFilters(builder: FilterBuilder): void {
        throw new Error('Not Implemented');
    }

    public filter(value: any): boolean {
        throw new Error('Not Implemented');
    }
}
