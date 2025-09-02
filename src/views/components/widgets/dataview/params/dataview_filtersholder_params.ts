import { SerializedParams } from '@pictaccio/admin-gui/src/core/types/serialized_params';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { renderVueNode } from '@pictaccio/admin-gui/src/utils/render_vue_node';
import {
    DataviewComponentConfiguration
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_component';
import { DataviewHost } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/dataview_host';
import { DataviewParams } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/params/dataview_params';
import FilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/filter_item';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import { createVNode } from 'vue';

export type FilterFunctionDefinition = {
    filterFunction: typeof FilterFunction<any>;
    column: string;
}

export type FilterDefinition = {
    pop: boolean;
    component: typeof FilterItem<any>;
    name: string;
    filters: FilterFunctionDefinition[];
}

export class DataviewFiltersHolderParams<Tdata, HasStreams extends boolean = false>
    implements DataviewParams<Tdata, HasStreams> {
    private host: DataviewHost<Tdata, HasStreams>;

    public render(container: HTMLElement, filters: FilterDefinition[]): void {
        renderVueNode(createVNode(Filters, {
            allowedFilters: filters,
            onApplyFilters: this.filtersApply.bind(this)
        }), container);
    }

    /* DATAVIEW_FILTER INTERFACE */
    public configure(host: DataviewHost<Tdata, HasStreams>): DataviewComponentConfiguration {
        this.host = host;

        return {
            name: 'filterholder-filter',
            type: 'params'
        };
    }

    public deserialize(filters: SerializedParams): void {
        // Pass
    }

    public serialize(): SerializedParams {
        return null;
    }

    /* EVENT LISTENERS */
    public filtersApply(filters: FilterFunction[]): void {
        for (const filter of filters) {
            if (filter.column === 'dateRange') {
                this.host.setDataDefinition('reportParams', 'dateRange', {
                    dateRange: {
                        preset: 'custom',
                        start: filter.value.start ?? new Date(),
                        end: filter.value.end ?? new Date()
                    },
                    renderer: 'json'
                });
            }
        }

        this.host.setDirty();
    }
}
