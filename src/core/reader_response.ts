import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';

export type ReaderResponse = {
    id: string | number,
    value: string | LocalizedString
}[];
