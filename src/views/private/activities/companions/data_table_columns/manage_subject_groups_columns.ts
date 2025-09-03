import { environment } from '@pictaccio/admin-gui/environment';

export const MANAGE_SUBJECT_GROUPS_COLUMNS = {
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
            name: 'session_id',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.session',
            crudOnly: true,
            order: 1
        },
        {
            name: 'group',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.name',
            size: 'minmax(12rem, 1fr)',
            order: 4
        },
        {
            name: 'photos',
            componentName: 'CrudImage',
            locale: 'dataTable.headers.photos',
            size: 'minmax(10rem, 1fr)',
            renderer: value => value
                ? Object.values(value).map(url => `<img src="${typeof url === 'string'
                    ? environment.apiUrl + url
                    : url['dataUrl']}">`).join('')
                : '--',
            order: 6
        }
    ],
    visibleHeaders: [
        'id',
        'group',
        'photos'
    ],
    rows: []
}
