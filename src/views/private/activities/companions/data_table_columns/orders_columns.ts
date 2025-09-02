import { environment } from '@pictaccio/admin-gui/src/environment';
import { i18n } from '@pictaccio/admin-gui/src/i18n';
import { store } from '@pictaccio/admin-gui/src/store';
import { formatDateForUser } from '@pictaccio/admin-gui/src/utils/user_date';

export const ORDERS_COLUMNS = {
    headers: [
        {
            name: 'id',
            tableOnly: true,
            locale: 'dataTable.headers.id',
            size: '6rem'
        },
        // {
        //     name: 'sessionColor',
        //     tableOnly: true,
        //     locale: 'dataTable.headers.sessionColor',
        //     size: '5rem',
        //     renderer: (value, localizeValue, row) => {
        //         if (!row['session'] && !row['session'].apply.color) {
        //             return '--';
        //         }
        //         const color = row['session'].apply.color;
        //         return `<i class="colored-square ${color.multipleColor ? 'multiple-color' : ''}"
        //                 style="--square-color-1: ${color.color1}; --square-color-2: ${color.color2};"></i>`
        //     }
        // },
        {
            name: 'name',
            tableOnly: true,
            locale: 'dataTable.headers.name',
            size: 'minmax(10rem, 1fr)',
            renderer: (value, localizeValue, row) => {
                return `<span class="no-wrap text-overflow">${row['contact'] ? row['contact'].name : ''}</span>`;
            }
        },
        {
            name: 'subjects',
            tableOnly: true,
            locale: 'dataTable.headers.subjects',
            size: 'minmax(10rem, 1fr)',
            renderer: (value, localizeValue, row) => {
                const subjectCodes = [];
                for (const selection of Object.values(row['photo_selection'])) {
                    if (!selection['image'] &&
                        !selection['image']?.subjectCode &&
                        selection['image']?.subjectCode === undefined) {
                        continue;
                    }
                    if (!subjectCodes.includes(selection['image']['subjectCode'])) {
                        subjectCodes.push(selection['image']['subjectCode']);
                    }
                }
                return subjectCodes.join('<br>');
            }
        },
        {
            name: 'created_on',
            tableOnly: true,
            locale: 'dataTable.headers.date',
            size: 'minmax(10rem, 1fr)',
            allowRendererSorting: true,
            renderer: value => formatDateForUser(new Date(value), 'full')
        },
        {
            name: 'paid',
            tableOnly: true,
            locale: 'dataTable.headers.paid',
            size: '8rem',
            renderer: value => value ? i18n.global.t('generic.ui.yes') : i18n.global.t('generic.ui.no')
        },
        {
            name: 'sale_total',
            tableOnly: true,
            locale: 'dataTable.headers.total',
            size: '8rem',
            renderer: value => value ? `$${value}` : '--'
        },
        {
            name: 'deliveryOption',
            tableOnly: true,
            locale: 'dataTable.headers.method',
            size: 'minmax(14rem, 1fr)',
            renderer: value => {
                if (!value || !Object.keys(value).includes('internal_name')) {
                    return '--';
                }
                return value.internal_name;
            }
        },
        {
            name: 'status',
            tableOnly: true,
            locale: 'dataTable.headers.status',
            size: '10rem',
            allowRendererSorting: true,
            renderer: (value, localizeValue, row) =>
                `<span class="order-status-datatable-badge ${row.productionStatus?.status ?? 'pending'}">` +
                `${i18n.global.t(`order.status.${row.productionStatus?.status ?? 'pending'}`)}</span>`,
            localizeValue: 'rowPath:flags.status'
        },
        {
            name: 'assignee',
            tableOnly: true,
            locale: 'dataTable.headers.assignee',
            size: '12rem',
            allowRendererSorting: true,
            renderer: (value, localizeValue, row) => {
                const debugStore = store;
                const user = debugStore.getters['User/usersList'].find(user => user.id === row.assignment?.user.id);

                return `<span class="assignee">${user
                    ? user.info.name.firstName + ' ' + user.info.name.lastName
                    : i18n.global.t('order.unassigned')}</span>`
            }
        }
    ],
    visibleHeaders: [
        'id',
        'sessionColor',
        'name',
        'subjects',
        'created_on',
        'paid',
        'sale_total',
        'deliveryOption',
        'status',
        'assignee'
    ],
    rows: [],
    computeNewTabUrl: (rowId: string) => {
        return `${environment.guiUrl}activities/orders/${rowId}`;
    }
}
