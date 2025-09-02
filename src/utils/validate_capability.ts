import { store } from '@pictaccio/admin-gui/src/store';

export function validateCapability(query: string): boolean {
    const [resource, access] = query.split(':');
    const capabilities = store.getters['User/capabilities'];

    return capabilities[resource] &&
        (((capabilities[resource][`${access}:any`] && capabilities[resource][`${access}:any`].length !== 0) &&
            (capabilities[resource][`${access}:any`] && capabilities[resource][`${access}:any`][0] === '*')) ||
            (capabilities[resource][`${access}:own`] && capabilities[resource][`${access}:own`].length !== 0));
}
