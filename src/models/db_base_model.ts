import { Id } from '@pictaccio/shared/types/id';

export class DbBaseModel<T extends Id | never> {
    public id?: T;
    [key: `_${string}`]: any;
}
