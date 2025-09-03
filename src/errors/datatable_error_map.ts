import { DatatableCreateError } from '@pictaccio/admin-gui/errors/datatable_create_error';
import { DatatableDeleteError } from '@pictaccio/admin-gui/errors/datatable_delete_error';
import { DatatableEndpointNotFoundError } from '@pictaccio/admin-gui/errors/datatable_endpoint_not_found_error';
import { DatatableReadError } from '@pictaccio/admin-gui/errors/datatable_read_error';
import { DatatableUpdateError } from '@pictaccio/admin-gui/errors/datatable_update_error';

export const datatableErrorMap = {
    create: DatatableCreateError,
    delete: DatatableDeleteError,
    read: DatatableReadError,
    update: DatatableUpdateError,
    notFound: DatatableEndpointNotFoundError
}

export type DatatableErrorType = keyof typeof datatableErrorMap;
