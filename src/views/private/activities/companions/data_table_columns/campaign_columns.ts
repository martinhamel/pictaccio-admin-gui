export const CAMPAIGN_COLUMNS = {
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
            locale: 'dataTable.headers.internalName.campaign',
            help: 'internalNameHelp',
            size: 'minmax(10rem, 2fr)',
            order: 1
        },
        {
            name: 'amount',
            componentName: 'NumberDecimal',
            locale: 'dataTable.headers.amount',
            help: 'campaignValueHelp',
            size: '8rem',
            renderer: value => { return '$' + value; },
            order: 2
        },
        {
            name: 'code_prefix',
            componentName: 'TextGeneric',
            locale: 'dataTable.headers.codePrefix',
            help: 'campaignCodePrefixHelp',
            size: '6rem',
            order: 3
        },
        {
            name: '_restriction_decoration',
            componentName: 'SeparatorDecorator',
            crudOnly: true,
            order: 4
        },
        {
            name: 'workflows',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.workflows',
            help: 'campaignWorkflowsRestrictionHelp',
            crudOnly: true,
            order: 5
        },
        {
            name: 'sessions',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.sessions',
            help: 'campaignSessionsRestrictionHelp',
            crudOnly: true,
            order: 6
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'code_prefix',
        'amount'
    ],
    rows: []
}
