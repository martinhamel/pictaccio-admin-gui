import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';

export interface CrudComponentInterface<T> {
    update(state: UpdateState<T>): void;
}
