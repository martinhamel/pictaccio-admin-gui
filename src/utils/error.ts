import { DatatableCreateError } from '@pictaccio/admin-gui/src/errors/datatable_create_error';
import { DatatableDeleteError } from '@pictaccio/admin-gui/src/errors/datatable_delete_error';
import { DatatableEndpointNotFoundError } from '@pictaccio/admin-gui/src/errors/datatable_endpoint_not_found_error';
import { DatatableReadError } from '@pictaccio/admin-gui/src/errors/datatable_read_error';
import { DatatableUpdateError } from '@pictaccio/admin-gui/src/errors/datatable_update_error';
import { NotAuthenticatedError } from '@pictaccio/admin-gui/src/errors/not_authenticated_error';
import { ServerError } from '@pictaccio/admin-gui/src/errors/server_error';
import { i18n } from '@pictaccio/admin-gui/src/i18n';
import { ApiResponse } from '@pictaccio/admin-gui/src/models/api_response';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';

export function checkForResponseError(data: ApiResponse) {
    if (data.status === 'error') {
        throw new ServerError(`There was a server error${data.context ? `: ${data.context}` : ''}`);
    } else if (data.status === 'failed') {
        throw new Error(`The operation failed${data.context ? `: ${data.context}` : ''}`);
    } else if (data.status !== 'great-success') {
        throw new Error(`There was an unexpected response status: ${data.status}`);
    }
}

export function handleResponseError(error: any) {
    if (error.constructor === ServerError ||
        error.constructor === DatatableCreateError ||
        error.constructor === DatatableUpdateError ||
        error.constructor === DatatableDeleteError ||
        error.constructor === DatatableReadError ||
        error.constructor === DatatableEndpointNotFoundError) {
        throw error;
    } else if (error.message === 'SyntaxError: Unexpected end of JSON input') {
        throw new ServerError('The server did not return a valid response');
    }

    throw error;
}
