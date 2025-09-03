import { NamedGroupPhotos } from '@pictaccio/admin-gui/core/types/named_group_photos';
import { NamedSubjectPhotos } from '@pictaccio/admin-gui/core/types/named_subject_photos';

export interface ProcessedPhotos {
    groups: NamedGroupPhotos;
    subjects: NamedSubjectPhotos;
}
