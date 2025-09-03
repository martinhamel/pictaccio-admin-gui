/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbProductCatalog } from '@pictaccio/admin-gui/models/db_product_catalog';
import { DbProductCategory } from '@pictaccio/admin-gui/models/db_product_category';
import { DbProductTypeCustom } from '@pictaccio/admin-gui/models/db_product_type_custom';
import { DbProductTypeTheme } from '@pictaccio/admin-gui/models/db_product_type_theme';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';
import { ProductOptions } from '@pictaccio/shared/types/product_options';
import { ProductType } from '@pictaccio/shared/types/product_type';
import { Tag } from '@pictaccio/shared/types/tags';

export class DbProduct extends DbBaseModel<number> {
    internal_name?: string;
    name_locale?: LocalizedString;
    archived?: boolean;
    description_locale?: LocalizedString;
    images?: { [key: string]: string };
    options?: ProductOptions;
    price?: number;
    priority?: number;
    type?: ProductType;
    weight?: string;
    _tags?: Tag[];
    created_on?: Date;
    modified_on?: Date;
    catalogs: DbProductCatalog[];
    category: DbProductCategory;
    theme?: DbProductTypeTheme;
    custom?: DbProductTypeCustom;
}
