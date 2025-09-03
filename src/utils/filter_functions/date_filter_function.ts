import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { FilterBuilder } from '@pictaccio/admin-gui/utils/filter_builder';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { DateRange } from '@pictaccio/shared/types/date_range';

/**
 * Will check if the value in the column 'date' is identical to the provided value
 */
export class DateFilterFunction extends FilterFunction<DateRange> {
    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     * @param type
     * @param column is the column of the table
     */
    constructor(value: DateRange, type: FilterType, column = 'created') {
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
        if (!isNaN(this.value.start?.getDate())) {
            builder.addFilter({ column: this.column, operator: '>=', operand: this.value.start }, this.column + 'From');
        }

        if (!isNaN(this.value.end?.getDate())) {
            builder.addFilter({ column: this.column, operator: '<=', operand: this.value.end }, this.column + 'To');
        }
    }

    /**
     * Will check the if the value of the column is between the values of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        let dateStart = this.value[0].replace(/-/g, '');
        let dateEnd = this.value[1].replace(/-/g, '');
        const dateValue = value.replace(/-/g, '');

        if (dateStart === '') {
            dateStart = 0;
        }
        if (dateEnd === '') {
            dateEnd = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        }
        if (dateStart >= dateEnd) {
            const tempDate = dateStart;
            dateStart = dateEnd;
            dateEnd = tempDate;
        }
        return (dateStart - dateValue <= 0) && (dateEnd - dateValue >= 0);
    }
}
