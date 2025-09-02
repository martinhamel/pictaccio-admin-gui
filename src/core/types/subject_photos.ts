import { GroupPhotos } from '@pictaccio/admin-gui/src/core/types/group_photos';

export interface SubjectPhotos {
    firstName: string;
    lastName: string;
    group: string;
    gpi: string;
    code: string;
    photos: File[];
}

