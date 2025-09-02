import { createI18n } from 'vue-i18n';
import { en } from './en';
import { fr } from './fr';

export const i18n = createI18n({
    legacy: true,
    locale: 'en',
    modifiers: {
        title: str => str.toString().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    },
    messages: {
        en: {
            ...en
        },
        fr: {
            ...fr
        }
    }
});


