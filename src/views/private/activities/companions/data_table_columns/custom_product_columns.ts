import { i18n } from '@pictaccio/admin-gui/i18n';

export const CUSTOM_PRODUCT_COLUMNS = {
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
            name: 'internal_name',
            componentName: 'TextGeneric',
            help: 'internalNameHelp',
            locale: 'dataTable.headers.internalName.customProduct',
            size: 'minmax(10rem, 2fr)',
            order: 2
        },
        {
            name: 'customProductOptions',
            componentName: 'CustomProductOptions',
            locale: 'dataTable.headers.choices',
            help: 'customProductOptionsHelp',
            crudOnly: true,
            order: 10
        },
        {
            name: 'options',
            locale: 'dataTable.headers.choices',
            size: 'minmax(10rem, 2fr)',
            tableOnly: true,
            renderer: value => {
                let content = `
                        <div style="margin-bottom: 0.3rem; float: left;">
                            <label style="margin: 0; font-size: 1.4rem;">
                                ${i18n.global.t('dataTable.headers.choices')}:
                            </label>
                            <b>${value.choices_count}</b>
                        </div>
                        <div class="option-list">
                            <label style="margin: 0; font-size: 1.4rem;">
                                ${i18n.global.t('dataTable.headers.options')}:
                            </label>
                    `;
                value.choices.forEach(element => {
                    content += `
                            <div style="width: min-content;
                                        white-space: nowrap;
                                        --color-item-border: hsla( 89, 42%, 51%, 0.3);
                                        margin: 0 0 0.5rem 1rem;
                                        border-bottom: 1px solid var(--color-item-border);">
                                ${element}
                            </div>
                        `
                });

                content += `
                        </div>
                    `;
                return content;
            },
            order: 10
        }
    ],
    visibleHeaders: [
        'id',
        'internal_name',
        'options'
    ],
    rows: []
}
