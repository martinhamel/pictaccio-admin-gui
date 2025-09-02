import { environment } from '@pictaccio/admin-gui/src/environment';
import { localesData } from '@pictaccio/admin-gui/src/utils/datatable_column_renderers/locales_data';

export const BACKGROUND_COLUMNS = {
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
            name: 'production_identifier',
            componentName: 'NumberGeneric',
            locale: 'dataTable.headers.number',
            size: '10rem',
            order: 1
        },
        // {
        //     name: 'tags',
        //     componentName: 'CrudBadgeInput',
        //     locale: 'dataTable.headers.tags',
        //     size: 'minmax(15rem, 2fr)',
        //     renderer: value => value
        //         ? value.map(item => `<span class="selected">${item}</span>`).join('')
        //         : '',
        //     order: 2
        // },
        {
            name: 'name_locale',
            componentName: 'TextLocalizedShort',
            locale: 'dataTable.headers.nameLocale',
            size: '12rem',
            allowLocaleSorting: true,
            renderer: value => localesData(value),
            order: 3
        },
        {
            name: 'categories',
            componentName: 'CrudDropdown',
            locale: 'dataTable.headers.category',
            size: 'minmax(10rem, 1fr)',
            renderer: (value, localizeValue, row, getterValues) => {
                if (!Array.isArray(value) && typeof value === 'string') {
                    return value;
                }
                if (!getterValues || value.some(i => typeof i !== 'string')) {
                    return '';
                }
                return value.map(element =>
                    `<span>${getterValues.find(i => i.id === element).value}</span>`)?.join(' ');
            },
            order: 4
        },
        {
            name: 'featured',
            componentName: 'BooleanGeneric',
            locale: 'dataTable.headers.featured',
            crudOnly: true,
            order: 5
        },
        {
            name: 'image',
            componentName: 'CrudImage',
            locale: 'dataTable.headers.image',
            size: '20rem',
            renderer: (value, _, row) => `
                <div style="width: min-content;
                            position: relative;">      
                    <img style="width: 10rem;" src="${environment.apiUrl + value}">
                    <div style="display: ${row.featured ? 'block' : 'none'};
                                border: solid 0.2rem var(--color-primary-4);
                                box-shadow: inset 0.1rem 0.1rem oklch(from var(--color-primary-5) l c h / 0.8),
                                            inset -0.1rem -0.1rem oklch(from var(--color-primary-5) l c h / 0.8),
                                            -2px -2px 2px var(--color-primary-4), 
                                            2px 2px 2px var(--color-primary-4), 
                                            -2px 2px 2px var(--color-primary-4), 
                                            2px -2px 2px var(--color-primary-4);
                                position: absolute;
                                inset: 0;">
                        <i style="position: absolute;
                                  background-color: var(--color-primary-4);
                                  box-shadow: -0.1rem 0.1rem oklch(from var(--color-primary-5) l c h / 0.8);
                                  top: 0;
                                  right: 0;
                                  padding: 0.4rem 0.1rem 0.4rem 0.3rem;
                                  border-radius: 0 0 0 0.4rem;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="1rem">
                                <path fill="var(--color-primary-7)" 
                                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 
                                      171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 
                                      474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 
                                      5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 
                                      11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                            </svg>
                        </i>          
                    </div>
                </div>
            `,
            order: 6
        }
    ],
    visibleHeaders: [
        'id',
        'production_identifier',
        'name_locale',
        'categories',
        'image'
    ],
    rows: []
}
