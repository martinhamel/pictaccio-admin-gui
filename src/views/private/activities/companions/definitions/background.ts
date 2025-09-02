import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import {
    FilterDefinition
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/params/dataview_filtersholder_params';
import { createFormatter } from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter';
import {
    DataviewTableRendererColumn
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/table/dataview_table_renderer_column';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';

export const columns: DataviewTableRendererColumn[] = [
    {
        targetName: 'id',
        columnNameLocale: 'dataTable.headers.id',
        defaultSize: 150,
        defaultOrder: 1,
        defaultVisible: true
    },
    {
        targetName: 'production_identifier',
        columnNameLocale: 'dataTable.headers.number',
        defaultSize: 200,
        defaultOrder: 2,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('string', null)
        ]
    },
    {
        targetName: 'tags',
        columnNameLocale: 'dataTable.headers.tags',
        defaultSize: 250,
        defaultOrder: 3,
        defaultVisible: true
    },
    {
        targetName: 'name_locale',
        columnNameLocale: 'dataTable.headers.nameLocale',
        defaultSize: 320,
        defaultOrder: 4,
        defaultVisible: true,
        formatters: [
            createFormatter('locale', { expandable: true })
        ]
    },
    {
        targetName: 'categories',
        columnNameLocale: 'dataTable.headers.category',
        defaultSize: 300,
        defaultOrder: 5,
        defaultVisible: true
    },
    {
        targetName: 'image',
        columnNameLocale: 'dataTable.headers.image',
        defaultSize: 400,
        defaultOrder: 6,
        defaultVisible: true
    }
];

const crudComponents = [

];

export const filters: FilterDefinition[] = [
    {
        pop: true,
        component: MainTextFilterItem,
        name: 'search',
        filters: [
            { filterFunction: IdFilterFunction, column: 'id' }
        ]
    }
];

