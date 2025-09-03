import { DbCrosssell } from '@pictaccio/admin-gui/models/db_crosssell';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/models/db_delivery_group';
import { DbProductCatalog } from '@pictaccio/admin-gui/models/db_product_catalog';
import { DbWorkflow } from '@pictaccio/admin-gui/models/db_workflow';
import { internalName } from '@pictaccio/admin-gui/utils/datatable_column_renderers/internal_name';
import { formatDateForUser } from '@pictaccio/admin-gui/utils/user_date';
import { localesData } from '@pictaccio/admin-gui/utils/datatable_column_renderers/locales_data';

export const MANAGE_SESSIONS_COLUMNS = {
    headers: [
        {
            name: 'id',
            componentName: 'Id',
            locale: 'dataTable.headers.id',
            size: '6rem',
            tableOnly: true,
            order: 1
        },
        {
            name: 'session_color',
            componentName: 'CrudColor',
            locale: 'dataTable.headers.sessionColor',
            size: '8rem',
            renderer: (value, _1, row, _2) => {
                if (!row.options.color) {
                    return '--';
                }
                const color = row.options.color;
                return `<i class="colored-square ${color.multipleColors ? 'multiple-color' : ''}"
                        style="--square-color-1: ${color.color1}; --square-color-2: ${color.color2};"></i>`
            },
            order: 1
        },
        {
            name: 'internal_name',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.internalName.sessions',
            size: 'minmax(15rem, 2fr)',
            order: 2
        },
        {
            name: 'publish_date',
            componentName: 'DateGeneric',
            locale: 'dataTable.headers.publishDate',
            size: 'minmax(10rem, 1fr)',
            help: 'dateHelp',
            allowRendererSorting: true,
            renderer: value => formatDateForUser(new Date(value), 'date'),
            order: 3
        },
        {
            name: 'expire_date',
            componentName: 'DateGeneric',
            locale: 'dataTable.headers.expireDate',
            size: 'minmax(10rem, 1fr)',
            help: 'expirationDateHelp',
            allowRendererSorting: true,
            renderer: value => formatDateForUser(new Date(value), 'date'),
            order: 3
        },
        {
            name: 'workflow',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.workflow',
            size: 'minmax(10rem, 1fr)',
            help: 'workflowsHelp',
            renderer: (value) => {
                if (!value) {
                    return '';
                }

                return internalName<DbWorkflow>`${value}`;
            },
            order: 4
        },
        {
            name: 'productCrosssell',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.crosssell',
            help: 'crosssellHelp',
            size: 'minmax(10rem, 1fr)',
            renderer: (value) => {
                if (!value) {
                    return '';
                }

                return internalName<DbCrosssell>`${value}`;
            },
            order: 5
        },
        {
            name: 'productCatalogs',
            componentName: 'CrudList',
            locale: 'dataTable.headers.productCatalogs',
            help: 'productCatalogsHelp',
            size: 'minmax(14rem, 1fr)',
            renderer: (value) => {
                if (!value) {
                    return '';
                }

                return internalName<DbProductCatalog>`${value}`;
            },
            order: 8
        },
        {
            name: 'deliveryGroups',
            componentName: 'CrudList',
            locale: 'dataTable.headers.shippingGroups',
            help: ' shippingGroupsHelp',
            size: 'minmax(14rem, 1fr)',
            renderer: (value) => {
                if (!value) {
                    return '';
                }

                return internalName<DbDeliveryGroup>`${value}`;
            },
            order: 9
        },
        {
            name: 'touchupOptions',
            componentName: 'VirtualTouchupOptions',
            locale: 'generic.blank',
            crudOnly: true,
            order: 10
        },
        {
            name: 'digitalOptions',
            componentName: 'VirtualDigitalOptions',
            locale: 'generic.blank',
            crudOnly: true,
            order: 11
        }
    ],
    visibleHeaders: [
        'id',
        'session_color',
        'internal_name',
        'date',
        'category_id',
        'crosssell',
        'productCatalogs',
        'shipping'
    ],
    rows: []
}
