import { Language } from '@pictaccio/admin-gui/core/types/languages';
import configService from '@pictaccio/admin-gui/services/config_service';
import localStorageService from '@pictaccio/admin-gui/services/local_storage_service';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { ClientConfigSchema } from '@pictaccio/shared/types/client_config_schema';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Config extends VuexModule {
    private clientConfig: ClientConfigSchema;
    private apiVersionInternal: string;
    private internalUserLang: Language = localStorageService.get('locale', false) as Language ?? 'en';
    private viewMoreNavigation = (localStorageService.get('viewMore', true) === 'true');
    private shortNavigation = (localStorageService.get('shortNavigation', true) === 'true');

    public get config(): ClientConfigSchema {
        return this.clientConfig;
    }

    public get apiVersion(): string {
        return this.apiVersionInternal;
    }

    public get userLang(): Language {
        return this.internalUserLang;
    }

    public get shortNav(): boolean {
        return this.shortNavigation;
    }

    public get viewMore(): boolean {
        return this.viewMoreNavigation;
    }

    @Mutation
    public commitConfig(config: ClientConfigSchema): void {
        this.clientConfig = config;
    }

    @Mutation
    public commitVersion(version: string): void {
        this.apiVersionInternal = version;
    }

    @Mutation
    public commitUserLang(lang: Language): void {
        this.internalUserLang = lang;
        localStorageService.set('locale', lang, false);
    }

    @Mutation
    public commitShortNav(shortNav: boolean): void {
        this.shortNavigation = shortNav;
        localStorageService.set('shortNavigation', shortNav.toString(), true);
    }

    @Mutation
    public commitViewMore(viewMore: boolean): void {
        this.viewMoreNavigation = viewMore;
        localStorageService.set('viewMore', viewMore.toString(), true);
    }

    @Action({ commit: 'commitConfig' })
    public async retrieveConfig(): Promise<ClientConfigSchema> {
        return await configService.getConfig();
    }

    @Action({ commit: 'commitVersion' })
    public async retrieveVersion(): Promise<string> {
        return await configService.getVersion();
    }
}
