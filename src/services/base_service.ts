import { store } from '../store';
import { NetworkError, request, RequestOptions as loufairyRequestOptions } from '@loufa/loufairy';
import { NotAuthenticatedError } from '../errors/not_authenticated_error';
import { globalToast } from '../utils/global_toast';
import { environment } from '../environment';

export interface RequestOptions extends loufairyRequestOptions {
    authenticated?: boolean;
    tryAuthenticated?: boolean;
    url: string;
    method: 'get' | 'post' | 'delete' | 'put' | 'patch';
    data?: any;
    headers?: {
        [index: string]: string;
    } | Headers;
}

export default class BaseService {
    private static failedCounter = 0;

    protected API_ENDPOINT = environment.apiUrl; // Must end with '/'

    /**
     * Same as loufairy's request but automatically adds the Authorization header for authenticated request. Also adds
     * the API_ENDPOINT in front of the url if not present already
     * @param options Same as loufairy's request with the addition of the authenticated property. Set to true to have
     *                the Authorization header set.
     * @protected
     */
    protected async request(options: RequestOptions): Promise<Response> {
        const authToken = store.getters['Auth/authToken'];
        options.headers = options.headers || new Headers();

        if (options.authenticated || options.tryAuthenticated) {
            if (!authToken && !options.tryAuthenticated) {
                globalToast('NOT_AUTHENTICATED_ERROR', 'error');
                throw new NotAuthenticatedError('An authenticated request was attempted but no auth key was set');
            }

            if (options.headers instanceof Headers) {
                options.headers.append('Authorization', `Bearer ${authToken}`);
            } else {
                options.headers['Authorization'] = `Bearer ${authToken}`;
            }
        }

        if (options.headers instanceof Headers && !options.headers.has('Content-Type')) {
            options.headers.append('Content-Type', 'application/json');
        } else if (options.headers === undefined ||
            (options.headers && !Object.prototype.hasOwnProperty.call(options.headers, 'Content-Type'))) {
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/json';
        }

        if (!options.url.startsWith(this.API_ENDPOINT)) {
            options.url = this.API_ENDPOINT + options.url;
        }

        try {
            const response = await request(options);

            if (response.status === 401) {
                store.commit('App/commitAuthenticated', false);
            }

            return response;
        } catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }

            if (store.getters['App/online'] === true &&
                (error instanceof NetworkError ||
                    ['Load failed',
                        'NetworkError when attempting to fetch resource',
                        'Failed to fetch'].includes(error.message))) {
                if (BaseService.failedCounter === 0) {
                    BaseService.failedCounter = 3;
                }
                if (--BaseService.failedCounter === 0) {
                    store.commit('App/commitOnline', false);
                }
                return null;
            }

            throw error;
        }
    }
}
