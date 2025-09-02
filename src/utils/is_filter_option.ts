import { FilterOption } from '@pictaccio/admin-gui/src/services/data_table_service';
import { Operators } from '@pictaccio/shared/src/types/operator';

export function isFilterOption(value: any): value is FilterOption {
    return value && value.column && value.operator && Operators.includes(value.operator) && value.operand;
}
