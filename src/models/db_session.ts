/* eslint-disable camelcase */
import { DbCrosssell } from '@pictaccio/admin-gui/src/models/db_crosssell';
import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { DbProductCatalog } from '@pictaccio/admin-gui/src/models/db_product_catalog';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/src/models/db_delivery_group';
import { DbWorkflow } from '@pictaccio/admin-gui/src/models/db_workflow';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { SessionOptions } from '@pictaccio/shared/src/types/session_options';

export class DbSession extends DbBaseModel<number> {
    public internal_name: string;
    public archived: boolean;
    public options: SessionOptions;
    public publish_date: string;
    public expire_date: string;
    public productCrosssell: DbCrosssell;
    public deliveryGroups: DbDeliveryGroup[];
    public productCatalogs: DbProductCatalog[];
    public workflow: DbWorkflow;
}
