import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { FilterOption } from '@pictaccio/admin-gui/src/services/data_table_service';
import { FilterBuilder } from '@pictaccio/admin-gui/src/utils/filter_builder';
import { Operator } from '@pictaccio/shared/src/types/operator';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';

/**
 * Will check if the value in the column 'name' is identical to the provided value
 */
export class StringFilterFunction extends FilterFunction<string[]> {
    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     * @param column is the column of the table
     */
    constructor(value: string | string[], type: FilterType, column = 'internal_name') {
        if (!Array.isArray(value)) {
            value = value.split(',');
        }

        super(value, type, column);
    }

    /**
     * Will validate if a value can be handled
     * @param value
     */
    public static canHandle(value: any): boolean {
        return true;
    }

    public createRemoteFilters(builder: FilterBuilder): void {
        const wildcard = ['contains', 'contains-not'].includes(this.type)
            ? '%'
            : '';

        builder.addFilter({
            column: this.column,
            operator: ['is-not', 'contains-not'].includes(this.type)
                ? '~~ NOT IN' as Operator
                : '~~ IN' as Operator,
            operand: [this.value.map(i => `${wildcard}${i.trim()}${wildcard}`)]
        });
    }

    /**
     * Will check the if the value of the column contain to the value of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        return this.value.some(v => value.toLowerCase().includes(v.toLowerCase()));
    }
}
