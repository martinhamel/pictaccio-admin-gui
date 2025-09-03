import { AllFilterTypes } from '@pictaccio/admin-gui/core/types/filters/all_filter_types';

export type SerializedFilterItem<T extends AllFilterTypes> = {
    name: string,
    params: T
}

export type SerializedParams = {
    filters: SerializedFilterItem<AllFilterTypes>[];
    order: string[];
};
