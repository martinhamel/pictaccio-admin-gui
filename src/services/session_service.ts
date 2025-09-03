import { SessionGeneralInfo } from '@pictaccio/admin-gui/models/session_general_info';
import { SessionOptions } from '@pictaccio/admin-gui/models/session_options';
import { SessionProductAndShipping } from '@pictaccio/admin-gui/models/session_product_and_shipping';
import { SessionSubjects } from '@pictaccio/admin-gui/models/session_subjects';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { CreateSessionResponse } from '@pictaccio/shared/types/responses/create_session_response';
import { removeDiacritics } from '@pictaccio/shared/utils/diacritics';

class SessionService extends BaseService {
    public async archive(sessionId: number): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/archive',
                data: {
                    sessionId
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async save(info: SessionGeneralInfo,
        options: SessionOptions,
        productAndShippingGroups: SessionProductAndShipping,
        subjects: SessionSubjects): Promise<CreateSessionResponse> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'photo-session/create-session',
                data: {
                    internalName: removeDiacritics(info.name),
                    datePublish: info.datePublish,
                    dateExpire: info.dateExpire,
                    workflowId: info.workflow,
                    options: {
                        color: info.color,
                        touchupsEnable: options.touchupsEnable,
                        touchupsPrice: options.touchupsPrice,
                        touchupsPriceIsScaling: options.touchupsPriceIsScaling,
                        digitalEnable: options.digitalEnable,
                        digitalAutoSendEnable: options.digitalAutoSendEnable,
                        digitalGroupsEnable: options.digitalGroupsEnable,
                        digitalGroupPrice: options.digitalGroupPrice,
                        digitalPrice: options.digitalPrice,
                        digitalGroupPriceIsScaling: options.digitalGroupPriceIsScaling,
                        digitalPriceIsScaling: options.digitalPriceIsScaling,
                        discountEnable: options.discountEnable,
                        discountCatalogId: options.discountCatalogId,
                        discountPrices: options.discountPrices,
                        discountGroupPrices: options.discountGroupPrices
                    },
                    crosssellId: options.crosssellId,
                    productCatalogs: productAndShippingGroups.productCatalogIds,
                    deliveryGroups: productAndShippingGroups.deliveryGroupIds,
                    subjects: subjects.subjects,
                    mappings: subjects.mappings
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }
}

export default new SessionService();
