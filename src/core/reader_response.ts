import { LocalizedString } from '@pictaccio/admin-gui/core/types/localized_string';

export type ReaderResponse = {
    id: string | number,
    value: string | LocalizedString
}[];
