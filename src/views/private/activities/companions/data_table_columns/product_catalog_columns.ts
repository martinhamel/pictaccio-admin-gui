export const PRODUCT_CATALOG_COLUMNS = {
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
            locale: 'dataTable.headers.internalName.catalogs',
            size: 'minmax(14rem, 1fr)',
            order: 1
        },
        {
            name: 'products',
            componentName: 'CrudListSelect',
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
