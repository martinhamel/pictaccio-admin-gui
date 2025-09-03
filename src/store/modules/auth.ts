import { InitiateInviteData } from '@pictaccio/admin-gui/core/initiate_invite_data';
import { AccountCreatedDataInterface } from '@pictaccio/admin-gui/core/types/account_created_data_interface';
import { CompleteInviteDataInterface } from '@pictaccio/admin-gui/core/types/complete_invite_data_interface';
import {
    CompletePasswordResetDataInterface
} from '@pictaccio/admin-gui/core/types/complete_password_reset_data_interface';
import { CreateAccountDataInterface } from '@pictaccio/admin-gui/core/types/create_account_data_interface';
import { FinishInviteDataInterface } from '@pictaccio/admin-gui/core/types/finish_invite_data_interface';
import {
    InitiatePasswordResetDataInterface
} from '@pictaccio/admin-gui/core/types/initiate_password_reset_data_interface';
import { LoginDataInterface } from '@pictaccio/admin-gui/core/types/login_data_interface';
import { ValidateInviteTokenDataInterface } from '@pictaccio/admin-gui/core/types/validate_invite_token_data_interface';
import {
    ValidatePasswordResetCodeDataInterface
} from '@pictaccio/admin-gui/core/types/validate_password_reset_code_data_interface';
import { USER_LOCAL_STORAGE_KEY } from '@pictaccio/admin-gui/core/user_local_storage_key';
import { User } from '@pictaccio/admin-gui/models/user';
import authService from '@pictaccio/admin-gui/services/auth_service';
import localStorageService from '@pictaccio/admin-gui/services/local_storage_service';
import { store } from '@pictaccio/admin-gui/store';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Auth extends VuexModule {
    private resetToken: string;
    private status: {
        loggedIn: boolean,
        user: User
    } = JSON.parse(localStorageService.get(USER_LOCAL_STORAGE_KEY, false)) || {
        loggedIn: undefined,
        user: undefined
    };

    /**
     * Reconfigure BaseService's authToken if available
     * @param module
     */
    constructor(module: Mod<ThisType<any>, any>) {
        super(module);
    }

    public get authToken(): string {
        return this.status?.user?.authorizationToken;
    }

    public get isLoggedIn(): boolean {
        return this.status?.loggedIn;
    }

    public get user(): User {
        return this.status?.user;
    }

    // Never used?
    @Action
    public async changePassword(secret: string): Promise<void> {
        await authService.changePassword(secret);
    }

    // Never used?
    @Action
    public async createAccount(data: CreateAccountDataInterface): Promise<AccountCreatedDataInterface> {
        return await authService.createAccount(data.email, data.secret, data.roles);
    }

    @Action
    public async completeInvite(data: CompleteInviteDataInterface): Promise<string> {
        return await authService.completeInvite(data.inviteToken, data.email, data.secret);
    }

    @Action
    public async completePasswordReset(data: CompletePasswordResetDataInterface): Promise<boolean> {
        if (!this.resetToken) {
            throw new Error('Runtime error: completePasswordReset called but reset token not set');
        }

        return await authService.completePasswordReset(data.email, data.code, this.resetToken, data.secret);
    }

    @Action
    public async finishInvite(data: FinishInviteDataInterface): Promise<void> {
        await authService.finishInvite(data.email, data.inviteToken);
    }

    @Action
    public async resetAuthenticator(): Promise<string> {
        const response = await authService.resetAuthenticator();

        if (!response) {
            return null;
        }

        if (response.status === 'failed' && response.context) {
            globalToast(response.context, 'warning');
        }

        return response.status === 'great-success'
            ? response.uri
            : null;
    }

    @Action
    public async confirmResetAuthenticator(): Promise<void> {
        await authService.confirmResetAuthenticator();
    }

    @Mutation
    public loginResult(user: User): void {
        store.commit('UserPreference/commitReload');
        this.status.loggedIn = user !== null;
        this.status.user = user;
        localStorageService.set(USER_LOCAL_STORAGE_KEY, JSON.stringify(this.status), false);
    }

    @Mutation
    public saveInvitee(user: User): void {
        this.status.loggedIn = false;
        this.status.user = user;
    }

    @Mutation
    public logoutResult(): void {
        this.status.loggedIn = false;
        this.status.user = null;
        localStorageService.removeCurrentUser();
    }

    @Action
    async initiateInvite(data: InitiateInviteData): Promise<void> {
        await authService.initiateInvite(data.name, data.email, data.roles);
    }

    @Action
    public async initiatePasswordReset(data: InitiatePasswordResetDataInterface): Promise<void> {
        await authService.initiatePasswordReset(data.email);
    }

    @Action
    public async login(data: LoginDataInterface): Promise<boolean> {
        const response = await authService.login(data.email, data.secret, data.authenticatorToken);

        if (!response) {
            return false;
        }

        if (response.status === 'failed' && response.context) {
            globalToast(response.context, 'warning');
        }

        const user = response.status === 'great-success'
            ? {
                id: response.id,
                email: data.email,
                authorizationToken: response.token
            }
            : null;

        this.context.commit('loginResult', user);
        return user !== null;
    }

    @Action
    public logout(): void {
        this.context.commit('logoutResult');
    }

    @Mutation
    public saveResetToken(resetToken: string): void {
        this.resetToken = resetToken;
    }

    @Action
    public async validateAuthenticator(data: LoginDataInterface): Promise<boolean> {
        const response = await authService.validateAuthenticator(data.email, data.authenticatorToken);

        if (!response) {
            return false;
        }

        if (response.status === 'failed' && response.context) {
            globalToast(response.context, 'warning');
        }

        return response.status === 'great-success';
    }

    @Action
    public async validateInviteToken(data: ValidateInviteTokenDataInterface): Promise<boolean> {
        const response = await authService.validateInviteToken(data);

        this.context.commit('saveInvitee', response.user);
        return response.valid;
    }

    @Action
    public async validatePassword(secret: string): Promise<boolean> {
        const response = await authService.validatePassword(secret);

        if (!response) {
            return false;
        }

        if (response.status === 'failed' && response.context) {
            globalToast(response.context, 'warning');
        }

        return response.status === 'great-success'
            ? response.valid
            : false;
    }

    @Action
    public async validatePasswordResetCode(data: ValidatePasswordResetCodeDataInterface): Promise<boolean> {
        const response = await authService.validatePasswordResetCode(data.email, data.code);

        if (!response) {
            return false;
        }

        if (response.status === 'failed' && response.context) {
            globalToast(response.context, 'warning');
        }

        this.context.commit('saveResetToken', response.resetToken);

        return response.status === 'great-success';
    }
}
