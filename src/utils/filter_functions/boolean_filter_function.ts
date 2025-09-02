import { BooleanValue } from '@pictaccio/admin-gui/src/core/types/filters/boolean_value';
import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { FilterBuilder } from '@pictaccio/admin-gui/src/utils/filter_builder';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { Operator } from '@pictaccio/shared/src/types/operator';

/**
 * Will check if the value in the column 'category' is identical to the provided value
 */
export class BooleanFilterFunction extends FilterFunction<BooleanValue> {
    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     * @param column is the column of the table
     */
    constructor(value: BooleanValue, type: FilterType, column: string) {
        super(value, 'is', column);
    }

    /**
     * Will validate if a value can be handled
     * @param value
     */
    public static canHandle(value: any): boolean {
        return ['true', 'false', 'unset'].includes(value);
    }

    public createRemoteFilters(builder: FilterBuilder): void {
        builder.addFilter({ column: this.column, operator: '==' as Operator, operand: this.value }, this.column);
    }

    /**
     * Will check the if the value of the column is identical to the value of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        return this.value === value;
    }
}
