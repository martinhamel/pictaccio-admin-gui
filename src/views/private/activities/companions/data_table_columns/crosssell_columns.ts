import { localesData } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/locales_data';

export const CROSSSELL_COLUMNS = {
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
            locale: 'dataTable.headers.internalName.crosssells',
            size: 'minmax(10rem, 2fr)',
            order: 1
        },
        {
            name: 'products',
            componentName: 'CrudList',
            locale: 'dataTable.headers.products',
            help: 'productCatalogsProductHelp',
            size: 'minmax(15rem, 2fr)',
            renderer: (value) => {
                if (!value || !Array.isArray(value)) {
                    return '';
                }

                return value.map(product =>
                    `<span>${product.internal_name}</span>`)
                    ?.join(' ');
            },
            order: 3
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'products'
    ],
    rows: []
}
