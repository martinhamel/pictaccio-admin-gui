/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbProduct } from '@pictaccio/admin-gui/models/db_product';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';

export class DbProductCatalog extends DbBaseModel<number> {
    public name_locale: LocalizedString;
    public internal_name: string;
    public products?: DbProduct[];
}
