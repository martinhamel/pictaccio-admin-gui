/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';

export class ShippingMethod extends DbBaseModel<number> {
    public internal_name: string;
}
