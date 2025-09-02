/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';

export class DbSubject extends DbBaseModel<number> {
    public session_id: number;
    public code: string;
    public display_name: string;
    public info: { [key: string]: string };
    public unique_id: string;
    public photos: string[];
    public hidden: boolean;
    public mappings: { [key: string]: string };
}
