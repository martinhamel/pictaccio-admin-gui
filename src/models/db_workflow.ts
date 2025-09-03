/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import { WorkflowOptions } from '@pictaccio/shared/types/workflow_options';

export class DbWorkflow extends DbBaseModel<number> {
    public internal_name: string;
    public options: WorkflowOptions;
}
