/* eslint-disable camelcase */

import { LocalizedString } from '@pictaccio/admin-gui/core/types/localized_string';
import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbDeliveryOption } from '@pictaccio/admin-gui/models/db_delivery_option';

export class DbDeliveryGroup extends DbBaseModel<number> {
    public internal_name: string;
    public deliveryOptions?: DbDeliveryOption[];
}
