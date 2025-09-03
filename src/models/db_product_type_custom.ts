import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbProductCustomTemplate } from '@pictaccio/admin-gui/models/db_product_custom_template';
import { DbProductThemeSet } from '@pictaccio/admin-gui/models/db_product_theme_set';

export class DbProductTypeCustom extends DbBaseModel<number> {
    customTemplate: DbProductCustomTemplate;
}
