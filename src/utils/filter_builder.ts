import { FilterOption } from '@pictaccio/admin-gui/services/data_table_service';

type OrFilters = FilterOption[];
type AndFilters = { [key: string]: OrFilters };

export class FilterBuilder {
    private andFilters: AndFilters = {};

    public addFilter(filterOption: FilterOption, andGroup = 'default'): void {
        if (!this.andFilters[andGroup]) {
            this.andFilters[andGroup] = [];
        }
        this.andFilters[andGroup].push(filterOption);
    }

    public toRemoteFilters(): FilterOption[][] {
        return Object.values(this.andFilters);
    }
}
