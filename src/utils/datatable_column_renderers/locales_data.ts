import { LocalizedString } from '@pictaccio/admin-gui/core/types/localized_string';
import { isEmpty } from '@loufa/loufairy';

/**
 * Will display all locales at the same time
 * @param value is an object: {locale1: 'value', ...}
 */
export function localesData(value: LocalizedString): string {
    if (isEmpty(value)) {
        return '';
    }
    return Object.entries(value).map(([locale, value]) =>
        `<div style="display: grid; grid-template-columns: 4ch 1fr;">
            <b>${locale}: </b><span>${value}</span>
        </div>`
    ).join('');
}
