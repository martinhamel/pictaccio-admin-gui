import { i18n } from '@pictaccio/admin-gui/i18n';

export const PROMO_CODES_COLUMNS = {
    headers: [
        {
            name: 'id',
            tableOnly: true,
            locale: 'dataTable.headers.id',
            size: '6rem'
        },
        {
            name: 'campaign',
            tableOnly: true,
            locale: 'dataTable.headers.campaign',
            size: 'minmax(10rem, 1fr)'
        },
        {
            name: 'code',
            tableOnly: true,
            locale: 'dataTable.headers.code',
            size: 'minmax(10rem, 1fr)'
        },
        {
            name: 'used',
            tableOnly: true,
            locale: 'dataTable.headers.used',
            size: 'minmax(4rem, 0.2fr)',
            renderer: value => value
                ? i18n.global.t('generic.ui.yes')
                : i18n.global.t('generic.ui.no')
        },
        {
            name: 'order',
            tableOnly: true,
            locale: 'dataTable.headers.order',
            size: 'minmax(10rem, 1fr)'
        }
    ],
    visibleHeaders: [
        'code',
        'used',
        'id'
    ],
    rows: []
}
