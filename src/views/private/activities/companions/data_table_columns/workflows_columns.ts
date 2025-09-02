export const WORKFLOWS_COLUMNS = {
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
            locale: 'dataTable.headers.internalName.workflows',
            size: 'minmax(10rem, 2fr)',
            order: 1
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name'
    ],
    rows: []
}
