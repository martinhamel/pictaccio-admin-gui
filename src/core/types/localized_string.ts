import { Language } from '@pictaccio/admin-gui/src/core/types/languages';

export type LocalizedString = {
    [key in Language]: string;
}
