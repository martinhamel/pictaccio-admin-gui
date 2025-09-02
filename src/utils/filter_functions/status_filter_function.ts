import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { FilterBuilder } from '@pictaccio/admin-gui/src/utils/filter_builder';
import { OrderStatus } from '@pictaccio/shared/src/types/order_status';
import { isOrderStatus } from '@pictaccio/shared/src/utils/guards/is_order_status';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';

/**
 * Will check if the value in the column 'status' is identical to the provided value
 */
export class StatusFilterFunction extends FilterFunction<OrderStatus[]> {
    /**
     * Receive the value of the filter
     * @param value is the value of the filter
     * @param column is the column of the table
     */
    constructor(value: OrderStatus | OrderStatus[], type: FilterType, column = 'status') {
        if (!Array.isArray(value)) {
            value = value.split(',').filter(isOrderStatus);
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
        builder.addFilter({
            column: this.column,
            operator: '~~ IN',
            operand: this.value.map(i => `%${i.trim()}%`)
        }, this.column);
    }

    /**
     * Will check the if the value of the column is identical to the value of the filter
     * @param value is the value of the column in the table
     */
    public filter(value: any): boolean {
        return value === this.value;
    }
}
