import { CustomExternalUrls } from '@pictaccio/shared/types/custom_external_urls';
import { StoreCustomizationColors } from '@pictaccio/shared/types/store_customization_colors';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import storeCustomizationService from '@pictaccio/admin-gui/services/store_customization_service';

@Module({ namespaced: true })
export default class StoreCustomization extends VuexModule {
    private colors: StoreCustomizationColors;
    private urls: CustomExternalUrls;
    private dirty = false;

    public get brandingColorAccents(): StoreCustomizationColors {
        return this.colors || new StoreCustomizationColors();
    }

    @Mutation
    public commitColors(data: StoreCustomizationColors): void {
        this.colors = data;
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Mutation
    public commitUrls(data: CustomExternalUrls): void {
        this.urls = data;
    }

    public get externalUrls(): CustomExternalUrls {
        return this.urls || new CustomExternalUrls();
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }

    @Action
    public async readColors(force = false): Promise<void> {
        if (force || this.colors === undefined) {
            const answer = await storeCustomizationService.readColors();

            this.context.commit('commitDirty', false);
            this.context.commit('commitColors', answer);
        }
    }

    @Action
    public async readCustomization(force = false): Promise<void> {
        await this.context.dispatch('readColors', force);
        await this.context.dispatch('readUrls', force);
    }

    @Action
    public async readUrls(force = false): Promise<void> {
        if (force || this.urls === undefined) {
            const answer = await storeCustomizationService.readUrls();

            this.context.commit('commitDirty', false);
            this.context.commit('commitUrls', answer);
        }
    }

    @Action
    public async saveColors(data: StoreCustomizationColors): Promise<void> {
        if (await storeCustomizationService.saveColors(data)) {
            this.context.commit('commitColors', data);
        }
    }

    @Action
    public async saveLogo(data: File): Promise<void> {
        await storeCustomizationService.saveLogo(data);
    }

    @Action
    public async saveUrls(data: CustomExternalUrls): Promise<void> {
        if (await storeCustomizationService.saveUrls(data)) {
            this.context.commit('commitUrls', data);
        }
    }
}
