import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { FilterOption } from '@pictaccio/admin-gui/services/data_table_service';
import { FilterBuilder } from '@pictaccio/admin-gui/utils/filter_builder';
import { Operator } from '@pictaccio/shared/types/operator';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';

/**
 * Will check if the value in the column 'assignee' is identical to the provided value
 */
export class AssigneeFilterFunction extends FilterFunction<string[]> {
    public column = 'assignee';

    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     */
    constructor(value: string | string[], type: FilterType, column = 'assignee') {
        if (!Array.isArray(value)) {
            value = value.split(',');
        }

        super(value, 'is', column);
    }

    /**
     * Will validate if a value can be handled
     * @param value
     */
    public static canHandle(value: any): boolean {
        return true;
    }

    public createRemoteFilters(builder: FilterBuilder): void {
        builder.addFilter({
            column: this.column,
            operator: '~~ IN' as Operator,
            operand: this.value.map(i => `%${i.trim()}%`)
        }, this.column);
    }

    /**
     * Will check the if the value of the column is identical to the value of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        return this.value.some(v => value.toLowerCase().includes(v.toLowerCase()));
    }
}
