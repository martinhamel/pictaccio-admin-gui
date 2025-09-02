import { FilterOption, SortOption } from '@pictaccio/admin-gui/src/services/data_table_service';
import { store } from '@pictaccio/admin-gui/src/store';
import { Page } from '@pictaccio/admin-gui/src/store/modules/base_data_table';
import { Id } from '@pictaccio/shared/src/types/id';

export class RemoteStore<T> {
    constructor(private storeNamespace: string) {
    }

    public clear(): void {
        store.commit(`${this.storeNamespace}/commitClearInternalItemsNext`);
    }

    public getPage(payload: { from: number, size: number }): Promise<Page<T>[]> {
        return store.dispatch(`${this.storeNamespace}/getPage`, payload);
    }

    public get getItems(): T[] {
        return store.getters[`${this.storeNamespace}/items`];
    }

    public get getItemsCount(): number {
        return store.getters[`${this.storeNamespace}/itemsCount`];
    }

    public get getSelection(): Id[] {
        return store.getters[`${this.storeNamespace}/selection`];
    }

    public get getFilters(): FilterOption[][] {
        return store.getters[`${this.storeNamespace}/filtersValue`];
    }

    public get getSort(): SortOption[] {
        return store.getters[`${this.storeNamespace}/sortOptions`];
    }

    public query(filters: FilterOption[][]): Promise<T[]> {
        return store.dispatch(`${this.storeNamespace}/query`, filters);
    }

    public selectAll(): Promise<void> {
        return store.dispatch(`${this.storeNamespace}/selectAll`);
    }

    public selectAddId(id: Id): Promise<void> {
        return store.dispatch(`${this.storeNamespace}/selectAddId`, id);
    }

    public selectNone(): Promise<void> {
        return store.dispatch(`${this.storeNamespace}/selectNone`);
    }

    public selectRemoveId(id: Id): Promise<void> {
        return store.dispatch(`${this.storeNamespace}/selectRemoveId`, id);
    }

    public setFilter(filters: FilterOption[][]): Promise<FilterOption[]> {
        return store.dispatch(`${this.storeNamespace}/setFilter`, filters);
    }

    public setSort(sort: SortOption[]): Promise<SortOption[]> {
        return store.dispatch(`${this.storeNamespace}/setSort`, sort);
    }

    public invalidateRange(payload: { start: number, end: number }): Promise<Range> {
        return store.dispatch(`${this.storeNamespace}/invalidateRange`, payload);
    }
}
