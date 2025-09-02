import { FilterType } from '@pictaccio/admin-gui/src/core/types/filters/filter_type';
import { DateRangePreset } from '@pictaccio/shared/src/types/date_range';

export type FilterTypeDateWithPreset = {
    preset: DateRangePreset;
    start: Date;
    end: Date;
    type: FilterType
}
