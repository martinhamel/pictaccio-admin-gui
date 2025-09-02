import { i18n } from '@pictaccio/admin-gui/src/i18n';
import { localesData } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/locales_data';

export const PRODUCT_THEMES_COLUMNS = {
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
            name: 'internal_name',
            componentName: 'TextGeneric',
            help: 'internalNameHelp',
            locale: 'dataTable.headers.internalName.productThemes',
            size: 'minmax(10rem, 1fr)',
            order: 1
        },
        {
            name: 'themes',
            componentName: 'TextLocalizedList',
            help: 'themesHelp',
            locale: 'dataTable.headers.themes',
            size: 'minmax(10rem, 2fr)',
            renderer: value => Object.values(value).map(i => `<div>${i[i18n.global.locale]}</div>`).join(''),
            order: 3
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'name_locale'
    ],
    rows: []
}
