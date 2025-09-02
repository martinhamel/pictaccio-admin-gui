import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbProduct } from '@pictaccio/admin-gui/src/models/db_product';
import { localesData } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/locales_data';
import { formatPricing } from '@pictaccio/admin-gui/src/utils/pricing_formatter';

export const PRODUCT_COLUMNS = {
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
            size: 'minmax(14rem, 1fr)',
            allowLocaleSorting: true,
            renderer: value => localesData(value),
            order: 3
        },
        {
            name: 'internal_name',
            componentName: 'TextGeneric',
            help: 'internalNameHelp',
            locale: 'dataTable.headers.internalName.products',
            size: 'minmax(14rem, 1fr)',
            order: 1
        },
        {
            name: 'description_locale',
            componentName: 'TextLocalizedLong',
            locale: 'dataTable.headers.descriptionLocale',
            size: 'minmax(20rem, 4fr)',
            allowLocaleSorting: true,
            renderer: value => localesData(value),
            order: 4
        },
        {
            name: 'price',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.price',
            size: '9rem',
            renderer: (value, _, row) => {
                return formatPricing(value, row.options.priceScale, row.options.usePriceScale)
            },
            order: 5
        },
        {
            name: 'scalingPrice',
            componentName: 'BooleanGeneric',
            locale: 'dataTable.headers.scalingPrice',
            help: 'scalingPriceHelp',
            crudOnly: true,
            order: 6
        },
        {
            name: 'weight',
            componentName: 'NumberDecimal',
            locale: 'dataTable.headers.weight',
            size: '10rem',
            order: 7
        },
        {
            name: 'images',
            componentName: 'ThemeImage',
            locale: 'dataTable.headers.themeImages',
            crudLocale: 'dataTable.headers.themes',
            size: 'minmax(20rem, 3fr)',
            renderer: value => value
                ? Object.values(value).map(url => `<img provide-fallback src="${typeof url === 'string'
                    ? environment.apiUrl + url
                    : url['dataUrl']}">`).join('')
                : '--',
            order: 19
        },
        {
            name: 'themes',
            tableOnly: true,
            locale: 'dataTable.headers.themes',
            size: 'minmax(12rem, 1fr)',
            renderer: (value, _, row: DbProduct) => {
                if (!value || row.type !== 'themed' || !row.theme) {
                    return '';
                }

                return `<span>${row.theme.themeSet.internal_name}</span>`;
            },
            order: 20
        },
        {
            name: 'tags',
            componentName: 'CrudBadgeInput',
            locale: 'dataTable.headers.tags',
            size: 'minmax(15rem, 2fr)',
            renderer: value => value
                ? value.map(item => `<span class="selected">${item}</span>`).join('')
                : '',
            order: 2
        },
        {
            name: 'category',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.productCategories',
            help: 'productCategoriesHelp',
            size: '15rem',
            renderer: (value, _, row: DbProduct) => {
                if (!value || !row.category) {
                    return '';
                }

                return `<span>${row.category.internal_name}</span>`;
            },
            order: 8
        },
        {
            name: 'customProduct',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.customProduct',
            help: 'customProductHelp',
            size: '10rem',
            renderer: (value, _, row: DbProduct) => {
                if (!value || row.type !== 'custom' || !row.custom) {
                    return '';
                }

                return `<span>${row.custom.customTemplate.internal_name}</span>`;
            },
            order: 10
        },
        {
            name: 'catalogs',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.productCatalogs',
            help: 'productProductCatalogsHelp',
            crudOnly: true,
            order: 14
        },
        {
            name: 'allowMix',
            componentName: 'BooleanGeneric',
            locale: 'dataTable.headers.allowMix',
            help: 'allowMixHelp',
            crudOnly: true,
            order: 15
        },
        {
            name: 'groupPhotoAllow',
            componentName: 'BooleanGeneric',
            locale: 'dataTable.headers.groupPhotoAllow',
            help: 'groupPhotoAllowHelp',
            crudOnly: true,
            order: 15
        },
        {
            name: 'groupPhotoOnly',
            componentName: 'BooleanGeneric',
            locale: 'dataTable.headers.groupPhotoOnly',
            help: 'groupPhotoOnlyHelp',
            crudOnly: true,
            order: 15
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'price',
        'weight',
        'images',
        'priority'
    ],
    rows: []
}
