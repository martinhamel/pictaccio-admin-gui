import { globalToast } from '../../utils/global_toast';
import { AppIntegrationApp, AppIntegrationApps } from '@pictaccio/shared/src/types/app_integration_app';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { SaveError } from '../../errors/save_error';
import { LoadError } from '../../errors/load_error';
import appIntegrationService from '../../services/app_integration_service';
import {
    AppIntegrationConfiguration,
    AppIntegrationConfigurations
} from '@pictaccio/shared/src/types/app_integration_configuration';

@Module({ namespaced: true })
export default class AppIntegration extends VuexModule {
    private uncommittedConfig: AppIntegrationConfigurations = {};
    private runningConfig: AppIntegrationConfigurations = {};

    public get appIntegrations(): AppIntegrationConfigurations {
        return this.runningConfig;
    }

    @Mutation
    public commit(response?: any): void {
        this.runningConfig = Object.assign(this.runningConfig, response ?? this.uncommittedConfig);
    }

    @Action
    public async commitAppIntegrations(): Promise<void> {
        const appIntegrationResponse = await appIntegrationService.save(this.uncommittedConfig);
        if (appIntegrationResponse !== null) {
            this.context.commit('commit', appIntegrationResponse);
        } else {
            throw new SaveError('Unable to save app integrations');
        }
    }

    @Mutation
    public create(): void {
        this.uncommittedConfig = {};
    }

    @Action({ commit: 'create' })
    public createAppIntegrations(): void {
        // Empty
    }

    @Mutation
    public load(appIntegrations: AppIntegrationConfigurations): void {
        this.runningConfig = appIntegrations;
    }

    @Action({ commit: 'load' })
    public async loadAppIntegrations(): Promise<AppIntegrationConfigurations> {
        const appIntegrations: AppIntegrationConfigurations = await appIntegrationService.load();

        if (!appIntegrations) {
            throw new LoadError('Unable to load app integrations');
        }

        return appIntegrations;
    }

    @Mutation
    public set(appIntegrations: AppIntegrationConfigurations): void {
        this.uncommittedConfig = Object.assign({}, this.uncommittedConfig,
            Object.fromEntries(Object.entries(appIntegrations).filter(([_, config]) => config !== undefined)));
    }

    @Action({ commit: 'set' })
    public async setAppIntegration({ app, configuration }: AppIntegrationConfiguration): Promise<AppIntegrationConfigurations> {
        const appIntegrations: AppIntegrationConfigurations = {
            [app]: configuration
        };

        if (!AppIntegrationApps.includes(app)) {
            throw new Error(`Invalid store-config key '${app}'`)
        }

        return appIntegrations;
    }
}
