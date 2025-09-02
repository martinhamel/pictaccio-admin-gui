import { localesData } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/locales_data';

export const BACKGROUND_CATEGORIES_COLUMNS = {
    headers: [
        {
            name: 'id',
            componentName: 'Id',
            locale: 'dataTable.headers.id',
            size: '6rem',
            tableOnly: true,
            order: 0
        },
        // {
        //     name: 'priority',
        //     help: 'backgroundCategoriesPriorityHelp',
        //     locale: 'dataTable.headers.priority',
        //     size: '6rem'
        // },
        // {
        //     name: 'internal_name',
        //     help: 'internalNameHelp',
        //     locale: 'dataTable.headers.internalName.backgroundCategories',
        //     size: 'minmax(10rem, 2fr)',
        //     order: 1
        // },
        {
            name: 'name_locale',
            componentName: 'TextLocalizedShort',
            locale: 'dataTable.headers.nameLocale',
            size: 'minmax(10rem, 2fr)',
            allowLocaleSorting: true,
            renderer: value => localesData(value),
            order: 2
        }
    ],
    visibleHeaders: [
        'id',
        'priority',
        'internal_name',
        'name_locale'
    ],
    rows: []
}
