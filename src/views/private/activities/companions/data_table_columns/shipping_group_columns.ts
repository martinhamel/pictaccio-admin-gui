import { i18n } from '@pictaccio/admin-gui/src/i18n';
import { internalName } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/internal_name';

export const SHIPPING_GROUP_COLUMNS = {
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
            locale: 'dataTable.headers.internalName.shippingGroups',
            size: 'minmax(10rem, 1fr)',
            order: 1
        },
        {
            name: 'deliveryOptions',
            componentName: 'CrudList',
            locale: 'dataTable.headers.shippingOptions',
            size: 'minmax(15rem, 2fr)',
            renderer: value => internalName`${value}`,
            order: 2
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'shipping_options'
    ],
    rows: []
}
