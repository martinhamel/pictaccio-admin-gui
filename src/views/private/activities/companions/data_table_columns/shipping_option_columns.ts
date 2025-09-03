import { i18n } from '@pictaccio/admin-gui/i18n';
import { localesData } from '@pictaccio/admin-gui/utils/datatable_column_renderers/locales_data';

const methodLocaleMap = {
    'fixed-rate': 'dataTable.body.method.fixedRate',
    'canada-post': 'dataTable.body.method.canadaPost',
    'pick-up': 'dataTable.body.method.pickUp',
    establishment: 'dataTable.body.method.establishment'
};

export const SHIPPING_OPTION_COLUMNS = {
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
            name: 'name_locale',
            componentName: 'TextLocalizedShort',
            locale: 'dataTable.headers.nameLocale',
            help: 'shippingOptions.nameLocaleHelp',
            size: 'minmax(10rem, 2fr)',
            allowLocaleSorting: true,
            renderer: value => localesData(value),
            order: 1
        },
        {
            name: 'internal_name',
            componentName: 'TextGeneric',
            help: 'internalNameHelp',
            locale: 'dataTable.headers.internalName.shippingOptions',
            size: 'minmax(10rem, 1fr)',
            order: 1
        },
        {
            name: 'shipping_method_options',
            componentName: 'CrudMethodOptions',
            locale: 'dataTable.headers.method',
            help: 'shippingOptions.shippingMethodHelp',
            crudOnly: true,
            order: 6
        },
        {
            name: 'lead_time',
            componentName: 'NumberGeneric',
            locale: 'dataTable.headers.leadTime',
            help: 'shippingOptions.leadTimeHelp',
            size: 'minmax(16rem, 1fr)',
            order: 3
        },
        {
            name: 'base_price',
            componentName: 'NumberDecimal',
            locale: 'dataTable.headers.basePrice',
            help: 'shippingOptions.basePriceHelp',
            size: 'minmax(12rem, 1fr)',
            order: 4
        },
        {
            name: 'method',
            locale: 'dataTable.headers.method',
            size: 'minmax(16rem, 1fr)',
            tableOnly: true,
            renderer: value => i18n.global.t(methodLocaleMap[value]),
            order: 5
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'lead_time',
        'base_price',
        'method'
    ],
    rows: []
}
