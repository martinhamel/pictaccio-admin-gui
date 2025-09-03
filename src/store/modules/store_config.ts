import { mergeObjects } from '@loufa/loufairy';
import { LoadError } from '@pictaccio/admin-gui/errors/load_error';
import { SaveError } from '@pictaccio/admin-gui/errors/save_error';
import { StoreConfig as StoreConfigModel } from '@pictaccio/admin-gui/models/store_config';
import storeConfigService from '@pictaccio/admin-gui/services/store_config_service';
import { StoreLanguageItem } from '@pictaccio/shared/types/store_language_item';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

function filterUndefined(obj: any): any {
    const newObj = Array.isArray(obj) ? [] : {};

    if (Array.isArray(newObj)) {
        for (const i of obj) {
            if (i !== null && typeof i === 'object') {
                newObj.push(filterUndefined(i));
            } else if (i !== undefined) {
                newObj.push(i);
            }
        }
    } else {
        for (const [key, value] of Object.entries(obj)) {
            if (value !== null && typeof value === 'object') {
                newObj[key] = filterUndefined(value);
            } else if (value !== undefined) {
                newObj[key] = value;
            }
        }
    }

    return newObj;
}

@Module({ namespaced: true })
export default class StoreConfig extends VuexModule {
    private availableLanguages: string[] = [];
    private languages: StoreLanguageItem[] = [];
    private uncommittedConfig: StoreConfigModel = {};
    private runningConfig: StoreConfigModel = new StoreConfigModel();
    private internalHasWatermark = false;

    public get availableLanguagesList(): string[] {
        return this.availableLanguages;
    }

    public get languagesList(): StoreLanguageItem[] {
        return this.languages;
    }

    public get storeConfig(): StoreConfigModel {
        return this.runningConfig;
    }

    public get hasWatermark(): boolean {
        return this.internalHasWatermark;
    }

    @Mutation
    public commit(): void {
        this.runningConfig = this.uncommittedConfig;
    }

    @Mutation
    public commitAvailableLanguages(languages: string[]): void {
        this.availableLanguages = languages;
    }

    @Mutation
    public commitHasWatermark(hasWatermark: boolean): void {
        this.internalHasWatermark = hasWatermark;
    }

    @Action
    public async commitStoreConfig(): Promise<void> {
        if (await storeConfigService.save(this.uncommittedConfig)) {
            this.context.commit('commit');
        } else {
            throw new SaveError('Unable to save store configuration');
        }
    }

    @Mutation
    public commitStoreLanguages(languages: StoreLanguageItem[]): void {
        this.languages = languages;
    }

    @Action({ commit: 'create' })
    public createStoreConfig(): void {
        // Empty
    }

    @Mutation
    public create(): void {
        this.uncommittedConfig = {};
    }

    @Mutation
    public load(storeConfig: StoreConfigModel): void {
        if (!storeConfig.phones) {
            storeConfig.phones = [];
        }

        if (!storeConfig.emailAddresses) {
            storeConfig.emailAddresses = [];
        }

        if (!storeConfig.phones.find(i => i.name === '_main')) {
            storeConfig.phones.push(this.runningConfig.phones
                .find(i => i.name === '_main'));
        }

        if (!storeConfig.emailAddresses.find(i => i.name === '_customer-service')) {
            storeConfig.emailAddresses.push(this.runningConfig.emailAddresses
                .find(i => i.name === '_customer-service'));
        }

        if (!storeConfig.emailAddresses.find(i => i.name === '_notifications')) {
            storeConfig.emailAddresses.push(this.runningConfig.emailAddresses
                .find(i => i.name === '_notifications'));
        }
        this.runningConfig = storeConfig;
    }

    @Action({ commit: 'load' })
    public async loadStoreConfig(): Promise<StoreConfigModel> {
        const storeConfig: StoreConfigModel = await storeConfigService.load();

        if (!storeConfig) {
            throw new LoadError('Unable to load store configuration');
        }

        return storeConfig;
    }

    @Action({ commit: 'commitHasWatermark' })
    public async loadHasWatermark(): Promise<boolean> {
        return await storeConfigService.hasWatermark();
    }

    @Action({ commit: 'commitAvailableLanguages' })
    public async getAvailableLanguages(): Promise<string[]> {
        return await storeConfigService.getAvailableLanguages();
    }

    @Action
    public async getStoreLanguages(force = false): Promise<void> {
        if (force || this.languages.length === 0) {
            const languages = await storeConfigService.getStoreLanguages();

            if (!languages) {
                throw new LoadError('Unable to load store languages');
            }

            this.context.commit('commitStoreLanguages', languages);
        }
    }

    @Action
    public async saveWatermark(data: File): Promise<void> {
        await storeConfigService.saveWatermark(data);
    }

    @Action({ commit: 'set' })
    public async setStoreConfig({ key, value }: { key: string, value: any }): Promise<StoreConfigModel> {
        const storeConfig = new StoreConfigModel();

        if (!Object.keys(storeConfig).includes(key)) {
            throw new Error(`Invalid store-config key '${key}'`);
        }

        return { [key]: value };
    }

    @Action({ commit: 'commitStoreLanguages' })
    public async setStoreLanguages(languages: string[]): Promise<string[]> {
        if (await storeConfigService.setStoreLanguages(languages)) {
            return languages;
        } else {
            throw new SaveError('Unable to save store languages');
        }
    }

    @Mutation
    public set(storeConfig: StoreConfigModel): void {
        this.uncommittedConfig = mergeObjects(true,
            this.runningConfig,
            filterUndefined(this.uncommittedConfig),
            Object.fromEntries(Object.entries(storeConfig).filter(([_, config]) =>
            (config !== undefined &&
                ((typeof config === 'object' &&
                    Object.values(config).length &&
                    Object.values(config).every(i => i !== undefined)) ||
                    (typeof config !== 'object'))))));
    }
}
