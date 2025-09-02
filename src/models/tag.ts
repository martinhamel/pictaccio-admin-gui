/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { DbProduct } from '@pictaccio/admin-gui/src/models/db_product';
import { TagScope } from '@pictaccio/shared/src/types/tags';

export class Tag extends DbBaseModel<number> {
    public scope: TagScope;
    public text: string;
}
