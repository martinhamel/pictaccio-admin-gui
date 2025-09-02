import { localesData } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/locales_data';

export const PRODUCT_CATEGORIES_COLUMNS = {
    headers: [
        {
            name: 'id',
            componentName: 'Id',
            locale: 'dataTable.headers.id',
            size: '6rem',
            tableOnly: true,
            order: 0
        },
        {
            name: 'priority',
            componentName: 'NumberGeneric',
            help: 'productCategoriesPriorityHelp',
            locale: 'dataTable.headers.priority',
            size: 'minmax(6rem, 1fr)',
            order: 3
        },
        {
            name: 'internal_name',
            componentName: 'TextGeneric',
            help: 'internalNameHelp',
            locale: 'dataTable.headers.internalName.productCategories',
            size: 'minmax(10rem, 2fr)',
            order: 2
        },
        {
            name: 'name_locale',
            componentName: 'TextLocalizedShort',
            locale: 'dataTable.headers.nameLocale',
            size: 'minmax(10rem, 2fr)',
            help: 'productCategoriesNamesHelp',
            allowLocaleSorting: true,
            renderer: value => localesData(value),
            order: 1
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
