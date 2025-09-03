import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';

export type SliderMode = 'single' | 'range';

export type FilterTypeSlider = {
    mode: SliderMode;
    value: number;
    min: number;
    max: number;
    type: FilterType;
}
