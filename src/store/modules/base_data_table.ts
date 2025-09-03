import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';
import {
    DataTableService,
    FilterOption,
    ReadResult,
    SortOption
} from '@pictaccio/admin-gui/services/data_table_service';
import { Id } from '@pictaccio/shared/types/id';
import { Action, Mutation, VuexModule } from 'vuex-module-decorators';

function findHoles<T>(internalItems: T[], from: number, size: number): Range[] {
    const holes: Range[] = [];
    let inHole = false;
    let holeStart: number;

    for (let i = from, to = from + size; i <= to; ++i) {
        if (inHole) {
            if (Object.prototype.hasOwnProperty.call(internalItems, i) ||
                i === to ||
                (i === to && i >= internalItems.length)) {
                inHole = false;
                holes.push({
                    start: holeStart,
                    end: i
                });
            }
        } else {
            if (!Object.prototype.hasOwnProperty.call(internalItems, i)) {
                holeStart = i;
                inHole = true;
            }
        }
    }

    return holes;
}

function requestHoles<T, Tid extends Id | never>(service: DataTableService<T, Tid>,
    internalItems: T[],
    filters: FilterOption[][],
    sort: SortOption[],
    from: number, size: number): { holes: Range[], promises: Promise<ReadResult<T>>[] } {
    const promises: Promise<ReadResult<T>>[] = [];
    const holes = findHoles(internalItems, from, size);

    for (const hole of holes) {
        promises.push(service.read({
            filters,
            from: hole.start,
            size: hole.end - hole.start,
            sort
        }));
    }

    return { holes, promises };
}

export class Range {
    public start: number;
    public end: number;
}

export class Page<T> {
    public from: number;
    public items: T[];
    public size: number;
}

export class AddResult<T, Tid extends Id | never> {
    public createdId: Tid;
    public item: T;
}

export class CommitDelete {
    public affected: number;
}

class CommitPage<T> {
    public totalResultCount: number;
    public pages: Page<T>[];
}

export class CommitUpdate {
    public affected: number;
}

export class BaseDataTable<Tid extends Id | never, T extends DbBaseModel<Tid>> extends VuexModule {
    private filters: FilterOption[][];
    private internalItems: T[] = [];
    private internalItemsCount = 0;
    private internalSelection: Id[] = [];
    private service: DataTableService<T, Tid>;
    private sort: SortOption[];
    private clearInternalItems = false;

    public set dataTableService(service: DataTableService<T, Tid>) {
        this.service = service;
    }

    public get items(): T[] {
        return this.internalItems;
    }

    public get itemsCount(): number {
        return this.internalItemsCount;
    }

    public get selection(): Id[] {
        return this.internalSelection;
    }

    public get filtersValue(): FilterOption[][] {
        return this.filters;
    }

    public get sortOptions(): SortOption[] {
        return this.sort;
    }

    @Action({ commit: 'commitAdd' })
    public async add({ item }: { item: T }): Promise<AddResult<T, Tid>> {
        const result = await this.service.create({
            values: item
        });

        return {
            createdId: result.createdId,
            item
        };
    }

    @Mutation
    public commitAdd(result: AddResult<T, Tid>): void {
        if (result.item.id === undefined) {
            result.item.id = result.createdId;
        }

        // this.internalItems.push(result.item);
    }

    @Mutation
    public commitSelectAll(ids: Id[]): void {
        this.internalSelection = ids;
    }

    @Mutation
    public commitSelectAddId(id: Id): void {
        if (!this.internalSelection.includes(id)) {
            const index = this.internalItems.map(i => i.id.toString()).indexOf(id.toString());
            this.internalSelection[index] = id;
        }
    }

    @Mutation
    public commitSelectNone(): void {
        this.internalSelection = [];
    }

    @Mutation
    public commitSelectRemoveId(id: Id): void {
        const index = this.internalSelection.indexOf(id);

        if (index !== -1) {
            this.internalSelection.splice(index, 1);
        }
    }

    @Mutation
    public commitClearInternalItems(): void {
        this.internalItems = [];
        this.clearInternalItems = false;
    }

    @Mutation
    public commitClearInternalItemsNext(): void {
        this.clearInternalItems = true;
    }

    @Mutation
    public commitDelete(commit: CommitDelete): void {
        // Nothing
    }

    @Mutation
    public commitFilters(filters: FilterOption[][]): void {
        this.filters = filters;
        this.clearInternalItems = true;
    }

    @Mutation
    public commitInvalidation(range: Range): void {
        this.internalItems.splice(range.start, range.end - range.start);
    }

    @Mutation
    public commitSort(sort: SortOption[]): void {
        this.sort = sort;
        this.clearInternalItems = true;
    }

    @Mutation
    public commitReSortSelection(): void {
        const newSelection = [];
        for (const item of this.internalItems) {
            if (this.internalSelection.includes(item.id)) {
                newSelection.push(item.id);
            }
        }
        this.internalSelection = newSelection;
    }

    @Mutation
    public commitPages(commitPages: CommitPage<T>): void {
        this.internalItemsCount = commitPages.totalResultCount;

        for (const page of commitPages.pages) {
            let i = page.from;

            if (page.items) {
                for (const item of page.items) {
                    this.internalItems[i++] = item;
                }
            }
        }
    }

    @Mutation
    public commitUpdate(commit: CommitUpdate): void {
        // Do nothing
    }

    @Action({ commit: 'commitDelete' })
    public async delete({ filters }: { filters: FilterOption[][] }): Promise<CommitDelete> {
        const result = await this.service.delete({ filters });

        return {
            affected: result.affected
        };
    }

    @Action
    public async getPage({ from, size }: { from: number, size: number }): Promise<void> {
        const { holes, promises } = requestHoles(this.service,
            this.clearInternalItems
                ? []
                : this.internalItems, this.filters, this.sort, from, size);
        const results: ReadResult<T>[] = await Promise.all(promises);
        const pages: Page<T>[] = [];

        if (this.clearInternalItems) {
            this.context.commit('commitClearInternalItems');
        }

        for (let i = 0, length = holes.length; i < length; ++i) {
            if (results[i]) {
                pages.push({
                    from: holes[i].start,
                    items: results[i].results,
                    size
                });
            }
        }

        this.context.commit('commitPages', {
            totalResultCount: results[0]?.totalResultCount,
            pages
        });

        this.context.commit('commitReSortSelection');
    }

    @Action({ commit: 'commitInvalidation' })
    public invalidateRange({ start, end }: { start: number, end: number }): Range {
        end = end || this.internalItems.length;
        return { start, end };
    }

    @Action
    public async query(filters: FilterOption[][]): Promise<T[]> {
        return (await this.service.read({
            filters,
            sort: [{ column: 'id', order: 'ASC' }]
        })).results;
    }

    @Action({ commit: 'commitSelectAll' })
    public async selectAll(): Promise<Id[]> {
        try {
            const response = await this.service.read({
                filters: this.filters,
                sort: this.sort,
                fields: ['id']
            });

            return response.results.map((item: T) => item.id);
        } catch (error) {
            return [];
        }
    }

    @Action({ commit: 'commitSelectAddId' })
    public selectAddId(id: Id): Id {
        return id;
    }

    @Action({ commit: 'commitSelectNone' })
    public async selectNone(): Promise<void> {
        // Pass
    }

    @Action({ commit: 'commitSelectRemoveId' })
    public selectRemoveId(id: Id): Id {
        return id;
    }

    @Action({ commit: 'commitFilters' })
    public setFilter(filters: FilterOption[]): FilterOption[] {
        return filters;
    }

    @Action({ commit: 'commitSort' })
    public setSort(sort: SortOption[]): SortOption[] {
        return sort;
    }

    @Action({ commit: 'commitUpdate' })
    public async update({ filters, values }: { filters: FilterOption[][], values: T }): Promise<CommitUpdate> {
        const result = await this.service.update({ filters, values });

        return {
            affected: result.affected
        };
    }
}
