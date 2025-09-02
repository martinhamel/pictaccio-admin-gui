import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class CurrentActivity extends VuexModule {
    private internalCurrentActivity: string;

    public get currentActivity(): string {
        return this.internalCurrentActivity;
    }

    @Action
    public async setCurrentActivity(activity: string): Promise<void> {
        this.context.commit('commitCurrentActivity', activity);
    }

    @Mutation
    public commitCurrentActivity(activity: string): void {
        this.internalCurrentActivity = activity;
    }
}
