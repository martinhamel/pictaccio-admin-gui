import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { DateRangePreset } from '@pictaccio/shared/types/date_range';

export type FilterTypeDateWithPreset = {
    preset: DateRangePreset;
    start: Date;
    end: Date;
    type: FilterType
}
