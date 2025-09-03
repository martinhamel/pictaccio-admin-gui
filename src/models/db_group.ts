/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';

export class DbSubjectGroup extends DbBaseModel<number> {
    public session_id: number;
    public group: string;
    public photos: string[];
}
