import { isInteger } from '@loufa/loufairy';
import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { FilterOption } from '@pictaccio/admin-gui/src/services/data_table_service';
import { FilterBuilder } from '@pictaccio/admin-gui/src/utils/filter_builder';
import { Operator } from '@pictaccio/shared/src/types/operator';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';

function isIdable(value: string | number): boolean {
    value = value.toString();
    return isInteger(value) || (value.replace(/[^-]/g, '').length === 1 && isInteger(value.replace(/[-\s]/g, '')));
}

/**
 * Will check if the value in the column 'id' is identical to the provided value
 */
export class IdFilterFunction extends FilterFunction<string[]> {
    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     * @param type defines whether the filter is inclusive or exclusive
     * @param column is the column of the table
     */
    constructor(value: string | number | number[] | string[], type: FilterType, column = 'id') {
        if (!Array.isArray(value) && typeof value === 'string') {
            value = value.split(',');
        }

        if (!Array.isArray(value) && typeof value === 'number') {
            value = [value];
        }

        if (Array.isArray(value) && value.some(i => isIdable(i))) {
            // @ts-ignore
            value = value.filter(i => isIdable(i)).map(i => i.toString());
        }

        // @ts-ignore
        if (Array.isArray(value) && value.every(i => isIdable(i))) {
            super([...value] as string[], type, column);
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
        if (this.value.length === 0) {
            return;
        }

        const ids = this.value.filter(i => !i.includes('-')).map(i => parseInt(i, 10));
        const ranges = this.value.filter(i => i.includes('-')).map(i => i.trim());

        if (ids.length > 0) {
            builder.addFilter({
                column: this.column,
                operator: (this.type === 'is' || this.type === 'contains') ? 'IN' : 'NOT IN' as Operator,
                operand: [ids]
            });
        }

        if (ranges.length > 0) {
            for (const range of ranges) {
                if (range.startsWith('-')) {
                    builder.addFilter({
                        column: this.column,
                        operator: (this.type === 'is' || this.type === 'contains')
                            ? '<=' as Operator
                            : '>' as Operator,
                        operand: parseInt(range.substring(1).trim(), 10)
                    });
                } else if (range.endsWith('-')) {
                    builder.addFilter({
                        column: this.column,
                        operator: this.type
                            ? '>=' as Operator
                            : '<' as Operator,
                        operand: parseInt(range.substring(0, range.length - 1).trim(), 10)
                    });
                } else {
                    const [start, end] = range.split('-');

                    builder.addFilter({
                        column: this.column,
                        operator: this.type
                            ? '<=>' as Operator
                            : '><' as Operator,
                        operand: [parseInt(start.trim(), 10), parseInt(end.trim(), 10)]
                    });
                }
            }
        }
    }

    /**
     * Will check the if the value of the column contain to the value of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        return this.value.some(i => value.includes(i));
    }
}
