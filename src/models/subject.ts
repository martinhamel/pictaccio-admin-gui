/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';

export class Subject extends DbBaseModel<number> {
    public sessionId: string;
    public code: string;
    public photos: string[];
    public gpi: string;
    public name: string;
    public group: string;
}
