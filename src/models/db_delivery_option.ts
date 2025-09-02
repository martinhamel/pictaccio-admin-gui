/* eslint-disable camelcase */
import { DbBaseModel } from '@pictaccio/admin-gui/src/models/db_base_model';
import { DeliveryMethod } from '@pictaccio/shared/src/types/delivery_method';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';

export type DeliveryOptionExtra = {
    info: { [key: string]: string | number | string[] },
    general: { [key: string]: string | number | string[] }
    // baseInfo: { [key: string]: string | number | string[] }
};

export class DbDeliveryOption extends DbBaseModel<number> {
    public name_locale: LocalizedString;
    public internal_name: string;
    public lead_time: number;
    public base_price: number;
    public method: DeliveryMethod;
    public options?: DeliveryOptionExtra;
}
