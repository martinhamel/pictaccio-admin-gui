import { LogoutReason } from '../../core/types/logout_reason';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class App extends VuexModule {
    private internalAuthenticated = false;
    private internalLoading = true;
    private internalContentVisibility = true;
    private internalLogoutReason: LogoutReason = null;
    private internalOnline = true;

    public get loading(): boolean {
        return this.internalLoading;
    }

    public get contentVisibility(): boolean {
        return this.internalContentVisibility;
    }

    public get authenticated(): boolean {
        return this.internalAuthenticated;
    }

    public get logoutReason(): LogoutReason {
        return this.internalLogoutReason;
    }

    public get online(): boolean {
        return this.internalOnline;
    }

    @Mutation
    public commitAuthenticated(authenticated: boolean): void {
        this.internalAuthenticated = authenticated;
    }

    @Mutation
    public commitLoading(loading: boolean): void {
        this.internalLoading = loading;
    }

    @Mutation
    public commitContentVisibility(isVisible: boolean): void {
        this.internalContentVisibility = isVisible;
    }

    @Mutation
    public commitLogoutReason(reason: LogoutReason): void {
        this.internalLogoutReason = reason;
    }

    @Mutation
    public commitOnline(online: boolean): void {
        this.internalOnline = online;
    }
}
