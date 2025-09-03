import { datatableErrorMap, DatatableErrorType } from '@pictaccio/admin-gui/errors/datatable_error_map';
import { ServerError } from '@pictaccio/admin-gui/errors/server_error';
import { ApiResponse } from '@pictaccio/admin-gui/models/api_response';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { isFile } from '@pictaccio/admin-gui/utils/is_file';
import { Id } from '@pictaccio/shared/types/id';
import { Operator } from '@pictaccio/shared/types/operator';

function checkForResponseError(data: ApiResponse, endpoint: DatatableErrorType) {
    if (data.status === 'error') {
        throw new ServerError(`There was a server error${data.context ? `: ${data.context}` : ''}`);
    } else if (data.status === 'failed') {
        throw new datatableErrorMap[endpoint](`The ${endpoint} operation failed${data.context ? `: ${data.context}` : ''}`);
    }
}

function isUpdateRequest<T>(request: DataTableServiceCreateRequest<T> | DataTableServiceUpdateRequest<T>)
    : request is DataTableServiceUpdateRequest<T> {
    return (request as DataTableServiceUpdateRequest<T>).filters !== undefined;
}

export class CreateResult<Tid extends Id | never> {
    public createdId: Tid;
}

export class DeleteResult {
    public status: 'great-success' | 'failed';
    public affected?: number;
}

export class ReadResult<T> {
    public results: T[];
    public totalResultCount: number;
}

export class UpdateResult {
    public status: 'great-success' | 'failed';
    public affected?: number;
}

export class FilterOption {
    public column: string;
    public operator: Operator;
    public operand: any;
}

export class SortOption {
    public column: string;
    public order: 'ASC' | 'DESC';
}

export class Value<T> {
    public column: string;
    public value: any;
}

export class DataTableServiceConfig {
    public createEndpoint?: string;
    public deleteEndpoint?: string;
    public readEndpoint: string;
    public updateEndpoint?: string;
}

export class DataTableServiceCreateRequest<T> {
    public values: T;
}

export class DatatableServiceDeleteRequest<T> {
    public filters?: FilterOption[][];
}

export class DataTableServiceReadRequest {
    public filters?: FilterOption[][];
    public from?: number;
    public size?: number;
    public sort?: SortOption[];
    public fields?: string[];
}

export class DataTableServiceUpdateRequest<T> {
    public filters?: FilterOption[][];
    public values: T;
}

export class DataTableService<T, Tid extends Id | never> extends BaseService {
    public _config: DataTableServiceConfig;

    constructor(config: DataTableServiceConfig) {
        super();

        this._config = config;
    }

    public async create(request: DataTableServiceCreateRequest<T>): Promise<CreateResult<Tid>> {
        try {
            const { formData, hasFiles } = this.createFormData(request);
            const response = await this.request({
                method: 'post',
                url: this._config.createEndpoint,
                authenticated: true,
                headers: {
                    'Content-Type': hasFiles ? undefined : 'application/json'
                },
                data: (hasFiles
                    ? formData
                    : {
                        values: this.toValuesArray(request.values)
                    })
            });
            const data = await response.json();

            checkForResponseError(data, 'create');

            return {
                createdId: data.createdId
            };
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async delete(request: DatatableServiceDeleteRequest<T>): Promise<DeleteResult> {
        try {
            const response = await this.request({
                method: 'post',
                url: this._config.deleteEndpoint,
                authenticated: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    filters: request.filters
                }
            });
            const data = await response.json();

            checkForResponseError(data, 'delete');

            return {
                status: data.status,
                affected: data.affected
            }
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async read(request: DataTableServiceReadRequest): Promise<ReadResult<T>> {
        try {
            const response = await this.request({
                method: 'post',
                url: this._config.readEndpoint,
                authenticated: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    filters: request.filters,
                    from: request.from,
                    to: request.from + request.size,
                    sort: request.sort,
                    fields: request.fields
                }
            });
            const data = await response.json();

            checkForResponseError(data, 'read');

            return data.status === 'great-success'
                ? { results: data.results, totalResultCount: data.resultTotal }
                : null;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async update(request: DataTableServiceUpdateRequest<T>): Promise<UpdateResult> {
        try {
            const { formData, hasFiles } = this.createFormData(request);

            const response = await this.request({
                method: 'post',
                url: this._config.updateEndpoint,
                authenticated: true,
                headers: {
                    'Content-Type': hasFiles ? undefined : 'application/json'
                },
                data: hasFiles
                    ? formData
                    : {
                        filters: request.filters,
                        values: this.toValuesArray(request.values)
                    }
            });
            const data = await response.json();

            checkForResponseError(data, 'update');

            return {
                status: data.status,
                affected: data.status === 'great-success'
                    ? data.affected
                    : 0
            }
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    /* PRIVATE */
    // TODO: set a proper return type
    private extractFilesFromRequest(values: T) {
        let countFiles = 0;
        let countRequest = 0;

        return {
            files: Object.fromEntries([
                ...Object.values(values)
                    .filter(i => isFile(i) || (Array.isArray(i) && i.some(f => isFile(f))))
                    .flat()
                    .filter(i => isFile(i))
                    .map(i => [`___DT_FILE___(${countFiles++})`, i]),
                ...Object.values(values)
                    .filter(i => !Array.isArray(i) &&
                        i !== null &&
                        typeof i === 'object' &&
                        Object.values(i).some(f => isFile(f)))
                    .reduce((files, value) => [
                        ...files,
                        Object.values(value).filter(i =>
                            isFile(i)).map(i => [`___DT_FILE___(${countFiles++})`, i])
                    ], []).flat()
            ]),
            requestValues: Object.fromEntries([
                ...Object.entries(values)
                    .map(([p, i]) => isFile(i)
                        ? [p, `___DT_FILE___(${countRequest++})`]
                        : (Array.isArray(i) && i.some(f => isFile(f)))
                            ? [p, i.map(i => isFile(i) ? `___DT_FILE___(${countRequest++})` : i).flat()]
                            : [p, i]
                    ),
                ...Object.entries(values)
                    .filter(([p, i]) => !Array.isArray(i) &&
                        i !== null &&
                        typeof i === 'object' &&
                        !isFile(i))
                    .reduce((entries, [p, v]) => [
                        ...entries,
                        [
                            p,
                            Object.fromEntries(Object.keys(v)
                                .map(p => [p, isFile(v[p]) ? `___DT_FILE___(${countRequest++})` : v[p]]))
                        ]
                    ], [])
            ])
        };
    }

    private createFormData(request: DataTableServiceCreateRequest<T> | DataTableServiceUpdateRequest<T>)
        : { formData: FormData, hasFiles: boolean } {
        const formData = new FormData();
        const hasFiles = this.hasFiles(request.values);

        if (hasFiles) {
            const { files, requestValues } = this.extractFilesFromRequest(request.values);
            const formDataObject = {
                values: Object.entries(requestValues).map(([column, value]) => {
                    return { column, value }
                }),
                filters: undefined
            }

            if (isUpdateRequest(request)) {
                formDataObject.filters = request.filters;
            }

            for (const [prop, value] of Object.entries(formDataObject)) {
                formData.append(prop, JSON.stringify(value));
            }

            for (const [fileRef, file] of Object.entries(files)) {
                formData.append(fileRef, file);
            }
        }

        return { formData, hasFiles };
    }

    private hasFiles(item: T): boolean {
        return Object.values(item).some(i => isFile(i) ||
            (Array.isArray(i) && i.some(i => isFile(i))) ||
            (typeof i === 'object' && Object.values(i).some(i => isFile(i)))
        );
    }

    private toValuesArray(values: T): Value<T>[] {
        return Object.entries(values)
            .filter(([column, _]) => !Object.keys(values).includes(column + '_json'))
            .map(([column, value]) => ({
                column,
                value: column.endsWith('_json') && typeof value === 'object'
                    ? JSON.stringify(value)
                    : value
            }));
    }
}

export function createDataTableService<T, Tid extends Id | never>(
    config: DataTableServiceConfig): DataTableService<T, Tid> {
    return new DataTableService<T, Tid>(config);
}
