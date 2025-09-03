import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

interface RemoveDirtyOptions {
    element?: string,
    force?: boolean
}

@Module({ namespaced: true })
export default class CrudOverlay extends VuexModule {
    private internalDirty = false;
    private dirtyElement: string[] = [];

    public get dirty(): boolean {
        return this.internalDirty;
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.internalDirty = value;
        if (!value) {
            this.dirtyElement = [];
        }
    }

    @Action
    public async makeDirty(element: string): Promise<void> {
        if (!this.dirtyElement.includes(element)) {
            this.dirtyElement.push(element);
        }
        this.context.commit('commitDirty', true);
    }

    @Action
    public async removeDirty(options: RemoveDirtyOptions): Promise<void> {
        if (options.element && this.dirtyElement.includes(options.element)) {
            const index = this.dirtyElement.indexOf(options.element);
            this.dirtyElement.splice(index, 1);
        }
        if (!this.dirtyElement || options.force) {
            this.context.commit('commitDirty', false);
        }
    }
}

