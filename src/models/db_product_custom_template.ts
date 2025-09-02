/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';

export class CustomProductOptions {
    public choices: string[];
    public choices_count: number;
}

export class DbProductCustomTemplate extends DbBaseModel<number> {
    public internal_name: string;
    public options: CustomProductOptions;
    public created?: Date;
    public modified?: Date;
}
