import { BreadcrumbItem } from '@pictaccio/admin-gui/core/types/breadcrumb_item';
import { store } from '@pictaccio/admin-gui/store';

export function pushBreadcrumb(breadcrumb: BreadcrumbItem): void {
    const breadcrumbs: BreadcrumbItem[] = store.getters['GlobalBreadcrumb/breadcrumbs'];

    if (breadcrumbs.find(b => b.id === breadcrumb.id)) {
        throw new Error('Breadcrumb already exists');
    }

    store.commit('GlobalBreadcrumb/pushBreadcrumb', breadcrumb);
}

export function resetBreadcrumb(breadcrumb?: BreadcrumbItem): void {
    store.commit('GlobalBreadcrumb/clearBreadcrumb');
    if (breadcrumb) {
        store.commit('GlobalBreadcrumb/pushBreadcrumb', breadcrumb);
    }
}

export function updateBreadcrumb(breadcrumb: BreadcrumbItem): void {
    const breadcrumbs: BreadcrumbItem[] = store.getters['GlobalBreadcrumb/breadcrumbs'];

    if (breadcrumbs.find(b => b.id === breadcrumb.id)) {
        store.commit('GlobalBreadcrumb/updateBreadcrumb', breadcrumb);
    } else {
        store.commit('GlobalBreadcrumb/pushBreadcrumb', breadcrumb);
    }
}
