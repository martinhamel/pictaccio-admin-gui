import { BreadcrumbItem } from '@pictaccio/admin-gui/src/core/types/breadcrumb_item';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class GlobalBreadcrumb extends VuexModule {
    private internalBreadcrumb: BreadcrumbItem[] = [];

    public get breadcrumbs(): BreadcrumbItem[] {
        return this.internalBreadcrumb;
    }

    @Mutation
    public clearBreadcrumb(): void {
        this.internalBreadcrumb = [];
    }

    @Mutation
    public pushBreadcrumb(breadcrumb: BreadcrumbItem): void {
        this.internalBreadcrumb.push(breadcrumb);
    }

    @Mutation
    public popBreadcrumb(): void {
        this.internalBreadcrumb.pop();
    }

    @Mutation
    public updateBreadcrumb(breadcrumb: BreadcrumbItem): void {
        const index = this.internalBreadcrumb.findIndex((item) => item.id === breadcrumb.id);

        if (index === -1) {
            throw new Error(`Breadcrumb with id ${breadcrumb.id} not found`);
        }

        this.internalBreadcrumb[index] = breadcrumb;
    }
}
