import { environment } from '@pictaccio/admin-gui/src/environment';

export const MANAGE_SUBJECTS_COLUMNS = {
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
            name: 'code',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.code',
            help: 'subjectCodeHelp',
            size: '8rem',
            order: 3
        },
        {
            name: 'display_name',
            locale: 'dataTable.headers.name',
            size: 'minmax(12rem, 1fr)',
            tableOnly: true,
            order: 4
        },
        {
            name: 'first_name',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.firstName',
            crudOnly: true,
            order: 4
        },
        {
            name: 'last_name',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.lastName',
            crudOnly: true,
            order: 4
        },
        {
            name: 'group',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.group',
            size: 'minmax(6rem, 1fr)',
            renderer: (value, _, row) => row['subject'][row['mappings']?.group] ?? '',
            order: 5
        },
        {
            name: 'unique_id',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.uniqueCode',
            size: '8rem',
            order: 3
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
        'code',
        'display_name',
        'photos'
    ],
    rows: []
}
