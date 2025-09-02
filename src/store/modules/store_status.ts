import { StoreStatusObject } from '@pictaccio/admin-gui/src/core/types/store_status';
import storeConfigService from '@pictaccio/admin-gui/src/services/store_config_service';
import { StoreConfigurationStatus } from '@pictaccio/shared/src/types/store_status';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class StoreStatus extends VuexModule {
    private internalStoreStatus: StoreStatusObject;
    private internalStoreConfigured: StoreConfigurationStatus = null;

    @Action
    public async changeStoreStatus(data: StoreStatusObject): Promise<void> {
        await storeConfigService.setStoreStatus(data);
    }

    @Action({ commit: 'commitStoreConfigured' })
    public async checkStoreConfigured(): Promise<StoreConfigurationStatus> {
        return await storeConfigService.isStoreConfigured();
    }

    @Action({ commit: 'commitStoreStatus' })
    public async readStoreStatus(): Promise<StoreStatusObject> {
        return storeConfigService.getStoreStatus();
    }

    @Mutation
    public commitStoreConfigured(data: StoreConfigurationStatus) {
        this.internalStoreConfigured = data;
    }

    @Mutation
    public commitStoreStatus(data: StoreStatusObject) {
        this.internalStoreStatus = data;
    }

    public get storeConfigured(): StoreConfigurationStatus {
        return this.internalStoreConfigured;
    }

    public get storeStatus(): StoreStatusObject {
        return this.internalStoreStatus;
    }
}
