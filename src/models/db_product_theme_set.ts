/* eslint-disable camelcase */

import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';
import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';

export class DbProductThemeSet extends DbBaseModel<number> {
    internal_name: string;
    themes: Record<string, LocalizedString>;
    scrubFlag: boolean;
}
