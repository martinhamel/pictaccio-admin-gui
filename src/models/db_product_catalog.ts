/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { DbProduct } from '@pictaccio/admin-gui/src/models/db_product';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';

export class DbProductCatalog extends DbBaseModel<number> {
    public name_locale: LocalizedString;
    public internal_name: string;
    public products?: DbProduct[];
}
