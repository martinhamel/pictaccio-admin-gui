import { Language } from '@pictaccio/admin-gui/core/types/languages';

export type LocalizedString = {
    [key in Language]: string;
}
