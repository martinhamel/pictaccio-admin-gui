/* eslint-disable camelcase */

import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { DbSession } from '@pictaccio/admin-gui/models/db_session';
import { DbWorkflow } from '@pictaccio/admin-gui/models/db_workflow';

export class CampaignOptions {
}

export class DbPromoCodeCampaign extends DbBaseModel<number> {
    public internal_name: string;
    public amount: number;
    public code_prefix: string;
    public options?: CampaignOptions;
    public sessionRestrictions: DbSession[];
    public workflowRestrictions: DbWorkflow[];
    public _restriction_decoration?: never;
}
