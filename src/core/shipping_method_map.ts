import { DeliveryMethod } from '@pictaccio/shared/src/types/delivery_method';

export const METHODS: { [key: number]: DeliveryMethod } = {
    1: 'fixed-rate',
    2: 'canada-post',
    3: 'pick-up',
    4: 'establishment'
}

export const METHODS_LOCALE_PATH = 'generic.shippingMethods';
