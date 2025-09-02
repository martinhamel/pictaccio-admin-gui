/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { Tag } from '@pictaccio/shared/src/types/tags';

export class DbBackground extends DbBaseModel<number> {
    public production_identifier?: number
    public _tags?: Tag[];
    public name_locale?: LocalizedString;
    public categories?: number[];
    public image?: string;
    public archived?: boolean;
    public featured?: boolean;
}
