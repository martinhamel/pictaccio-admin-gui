import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbProductThemeSet } from '@pictaccio/admin-gui/models/db_product_theme_set';

export class DbProductTypeTheme extends DbBaseModel<number> {
    default_theme?: string;
    themes_map?: { [key: string]: string };
    themeSet: DbProductThemeSet;
}
