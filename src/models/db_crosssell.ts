/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbProduct } from '@pictaccio/admin-gui/models/db_product';

export type ProductCrosssellOptions = {
}

export class DbCrosssell extends DbBaseModel<number> {
    public internal_name: string;
    public options: ProductCrosssellOptions;
    public products: DbProduct[];
}
