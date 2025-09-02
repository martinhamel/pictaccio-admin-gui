import { Id } from '@pictaccio/shared/src/types/id';

export class DbBaseModel<T extends Id | never> {
    public id?: T;
    [key: `_${string}`]: any;
}
