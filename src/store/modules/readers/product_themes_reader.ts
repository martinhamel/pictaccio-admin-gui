import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/services/data_table_service';
import { DbProductThemeSet } from '@pictaccio/admin-gui/models/db_product_theme_set';


@Module({ namespaced: true })
export default class ProductThemesReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<DbProductThemeSet, number>;
    private internalProductTheme: ReaderResponse;
    private internalProductThemes: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbProductThemeSet, number>({
            readEndpoint: 'product/theme/read'
        });
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }

    public get productTheme(): ReaderResponse {
        return this.internalProductTheme;
    }

    public get productThemes(): ReaderResponse {
        return this.internalProductThemes;
    }

    @Action
    public async productThemeRead(id: number | string): Promise<void> {
        if (!id) {
            this.context.commit('commitProductTheme', []);
            return;
        }
        const answer = await this.service.read({
            filters: [[{
                column: 'id',
                operator: '==',
                operand: id.toString()
            }]]
        });
        const productTheme = Object.entries(answer.results[0]['themes'])
            .map(([id, value]) => ({ id, value }));
        this.context.commit('commitProductTheme', productTheme);
    }

    @Action
    public async productThemesRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalProductThemes === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitProductThemes',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Mutation
    public commitProductTheme(productTheme: ReaderResponse): void {
        this.internalProductTheme = productTheme;
    }

    @Mutation
    public commitProductThemes(productThemes: ReaderResponse): void {
        this.internalProductThemes = productThemes;
    }
}
