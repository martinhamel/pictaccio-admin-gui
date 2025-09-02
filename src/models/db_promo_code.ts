/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { Order } from '@pictaccio/admin-gui/src/models/order';
import { DbPromoCodeCampaign } from '@pictaccio/admin-gui/src/models/db_promo_code_campaign';

export class DbPromoCode extends DbBaseModel<number> {
    public campaign: DbPromoCodeCampaign;
    public order?: Order;
    public code?: string;
    public used?: boolean;
    public created?: Date;
    public modified?: Date;
}
