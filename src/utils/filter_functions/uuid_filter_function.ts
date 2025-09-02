import { isInteger } from '@loufa/loufairy';
import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { FilterOption } from '@pictaccio/admin-gui/src/services/data_table_service';
import { FilterBuilder } from '@pictaccio/admin-gui/src/utils/filter_builder';
import { Operator } from '@pictaccio/shared/src/types/operator';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';

/**
 * Will check if the value in the column 'id' is identical to the provided value
 */
export class UuidFilterFunction extends FilterFunction<string[]> {
    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     * @param column is the column of the table
     */
    constructor(value: string | string[], type: FilterType, column = 'id') {
        if (!Array.isArray(value) && typeof value === 'string') {
            value = value.split(',');
        }

        if (Array.isArray(value) && value.every(i => typeof i === 'string')) {
            super([...value], type, column);
        } else {
            super([], type, column);
        }
    }

    /**
     * Will validate if a value can be handled
     * @param value
     */
    public static canHandle(value: any): boolean {
        return isInteger(value) || value.split(',').every(value => isInteger(value));
    }

    public createRemoteFilters(builder: FilterBuilder): void {
        builder.addFilter({ column: this.column, operator: 'IN' as Operator, operand: this.value });
    }

    /**
     * Will check the if the value of the column contain to the value of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        return this.value.some(i => value.includes(i));
    }
}
