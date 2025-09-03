import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';

export class SubjectCodeGenerateQuery extends DbBaseModel<number> {
    characterSet: string;
    prefix: string;
    length: number;
    count: number;
}
