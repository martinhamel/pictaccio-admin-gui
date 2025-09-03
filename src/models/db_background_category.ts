/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';

export class DbBackgroundCategory extends DbBaseModel<number> {
    public name_locale: LocalizedString;
}
