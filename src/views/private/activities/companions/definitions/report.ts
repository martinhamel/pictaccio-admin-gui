import { DateFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/date_filter_function';
import {
    FilterDefinition
} from '@pictaccio/admin-gui/views/components/widgets/dataview/params/dataview_filtersholder_params';
import { createFormatter } from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/formatter';
import {
    DataviewTableRendererColumn
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/table/dataview_table_renderer_column';
import DateRangeWithPresetFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/DateRangeWithPresetFilterItem.vue';

export const salesColumns: DataviewTableRendererColumn[] = [
    {
        targetName: 'orderId',
        columnNameLocale: 'activities.reports.sales.series.sales.orderId',
        defaultSize: 120,
        defaultOrder: 1,
        defaultVisible: true
    },
    {
        targetName: 'sessionId',
        columnNameLocale: 'activities.reports.sales.series.sales.sessionId',
        defaultSize: 120,
        defaultOrder: 2,
        defaultVisible: true
    }, {
        targetName: 'date',
        columnNameLocale: 'activities.reports.sales.series.sales.date',
        defaultSize: 160,
        defaultOrder: 3,
        defaultVisible: true
    }, {
        targetName: 'numberOfSubjects',
        columnNameLocale: 'activities.reports.sales.series.sales.numberOfSubjects',
        defaultSize: 140,
        defaultOrder: 4,
        defaultVisible: true
    }, {
        targetName: 'subtotal',
        columnNameLocale: 'activities.reports.sales.series.sales.subtotal',
        defaultSize: 100,
        defaultOrder: 5,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }, {
        targetName: 'shipping',
        columnNameLocale: 'activities.reports.sales.series.sales.shipping',
        defaultSize: 100,
        defaultOrder: 6,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }, {
        targetName: 'promoRebate',
        columnNameLocale: 'activities.reports.sales.series.sales.promoRebate',
        defaultSize: 100,
        defaultOrder: 7,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }, {
        targetName: 'taxes',
        columnNameLocale: 'activities.reports.sales.series.sales.taxes',
        defaultSize: 100,
        defaultOrder: 8,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }, {
        targetName: 'returns',
        columnNameLocale: 'activities.reports.sales.series.sales.returns',
        defaultSize: 100,
        defaultOrder: 9,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }, {
        targetName: 'returnFees',
        columnNameLocale: 'activities.reports.sales.series.sales.returnFees',
        defaultSize: 100,
        defaultOrder: 10,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }, {
        targetName: 'total',
        columnNameLocale: 'activities.reports.sales.series.sales.total',
        defaultSize: 100,
        defaultOrder: 11,
        defaultVisible: true,
        formatters: [
            createFormatter('alignment', { justifyContent: 'flex-end' }),
            createFormatter('currency')
        ]
    }
];

const crudComponents = [

];

export const filters: FilterDefinition[] = [
    {
        pop: true,
        component: DateRangeWithPresetFilterItem,
        name: 'date',
        filters: [
            { filterFunction: DateFilterFunction, column: 'dateRange' }
        ]
    }
];
