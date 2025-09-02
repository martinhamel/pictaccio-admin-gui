import { ApiResponseStatus } from '@pictaccio/shared/src/types/responses/api_response_status';

export class ApiResponse {
    status: ApiResponseStatus;
    context: string;
    [key: string]: any;
}
