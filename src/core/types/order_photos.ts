import { LocalizedString } from '@pictaccio/admin-gui/core/types/localized_string';

export type OrderPhotoItem = {
    image: {
        url: string,
        subjectCode: string,
        group: string
    },
    background: {
        number: string,
        url: string,
        locales: LocalizedString
    }
    basenameUrl: string,
    creation: Date
}

export type OrderPhotos = {
    [key: string]: OrderPhotoItem
}
