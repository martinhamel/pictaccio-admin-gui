import { ApiResponseStatus } from '@pictaccio/shared/types/responses/api_response_status';

export class ApiResponse {
    status: ApiResponseStatus;
    context: string;
    [key: string]: any;
}
