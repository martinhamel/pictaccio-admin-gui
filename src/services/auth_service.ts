import { AccountCreatedDataInterface } from '@pictaccio/admin-gui/core/types/account_created_data_interface';
import { UserName } from '@pictaccio/admin-gui/core/types/user_name';
import { ValidateInviteTokenDataInterface } from '@pictaccio/admin-gui/core/types/validate_invite_token_data_interface';
import { ValidateInviteTokenDataResponse } from '@pictaccio/admin-gui/core/types/validate_invite_token_data_response';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { checkForResponseError, handleResponseError } from '@pictaccio/admin-gui/utils/error';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { CompleteInviteResponse } from '@pictaccio/shared/types/responses/complete_invite_response';
import { CompletePasswordResetResponse } from '@pictaccio/shared/types/responses/complete_password_reset_response';
import { LoginResponse } from '@pictaccio/shared/types/responses/login_response';
import { ResetAuthenticatorResponse } from '@pictaccio/shared/types/responses/reset-authenticator-response';
import { ValidatePasswordResponse } from '@pictaccio/shared/types/responses/validate_password_response';
import {
    ValidateResetPasswordCodeResponse
} from '@pictaccio/shared/types/responses/validate_reset_password_code_response';
import { VerifyAuthenticatorResponse } from '@pictaccio/shared/types/responses/verify_authenticator_response';

class AuthService extends BaseService {
    public async changePassword(secret: string): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'auth/change-password',
                data: {
                    secret
                }
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    /**
     * Send a request to create a new user
     * @param email
     * @param secret
     * @param roles
     */
    public async createAccount(email: string, secret: string, roles: string[]): Promise<AccountCreatedDataInterface> {
        try {
            const response = await this.request({
                method: 'post',
                url: 'auth/create-account',
                authenticated: true,
                data: {
                    email,
                    secret,
                    roles
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    /**
     * Send a complete invite request with the chosen secret
     * @param inviteToken
     * @param email
     * @param secret
     */
    public async completeInvite(inviteToken: string, email: string, secret: string): Promise<string> {
        try {
            const response = await this.request({
                method: 'post',
                url: this.API_ENDPOINT + 'auth/complete-invite',
                data: {
                    inviteToken,
                    email,
                    secret
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return data.otpUri;
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    /**
     * Complete the password reset
     * @param email
     * @param code
     * @param resetToken
     * @param secret
     */
    public async completePasswordReset(email: string,
        code: string,
        resetToken: string,
        secret: string): Promise<boolean> {
        try {
            const response = await this.request({
                method: 'post',
                url: this.API_ENDPOINT + 'auth/complete-password-reset',
                data: {
                    email,
                    code,
                    resetToken,
                    secret
                }
            });
            const data = await response.json();

            checkForResponseError(data);

            return true;
        } catch (error) {
            handleResponseError(error);
            return false;
        }
    }

    public async confirmResetAuthenticator(): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'auth/confirm-reset-authenticator'
            });
            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
            return null;
        }
    }

    public async finishInvite(email: string, inviteToken: string): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                url: this.API_ENDPOINT + 'auth/finish-invite',
                data: {
                    email,
                    inviteToken
                }
            });

            const data = await response.json();

            checkForResponseError(data);
        } catch (error) {
            handleResponseError(error);
        }
    }

    // /**
    //  * Get the invitee info for a given email address
    //  * @param inviteEmail
    //  */
    // public async getInviteeInfo(inviteToken: string, email: string): Promise<User> {
    //     try {
    //         const response = await this.request({
    //             method: 'get',
    //             url: this.API_ENDPOINT + 'auth/get-invitee-info',
    //             data: {
    //                 inviteToken,
    //                 email
    //             }
    //         });
    //         const data = await response.json();
    //
    //         return data.status === 'great-success'
    //             ? data
    //             : null;
    //     } catch (e) {
    //         globalToast('UNKNOWN_ERROR', 'error');
    //         return null;
    //     }
    // }

    /**
     * Send a request to initiate a user invite
     * @param name
     * @param email
     * @param roles
     */
    public async initiateInvite(name: UserName, email: string, roles: string[]): Promise<void> {
        try {
            const response = await this.request({
                method: 'post',
                url: 'auth/initiate-invite',
                authenticated: true,
                data: {
                    name,
                    email,
                    roles
                }
            });
            const data = await response.json();

            return data.status === 'great-success'
                ? data
                : null;
        } catch (error) {
            globalToast('UNKNOWN_ERROR', 'error');
        }
    }

    /**
     * Initiate a password reset request. This result in the user receiving a password reset code at their email address
     * The process is in 3 steps:
     * 1) First a call to auth/initiate-password-reset to initiate the request, this step sends the reset code
     * 2) Then a call to auth/validate-reset-password-code. This validates the code and returns the reset token needed
     *    for the call in the 3rd step
     * 3) Finally a call to auth/complete-password-reset to perform the password reset
     * @param email The email address to send the reset code to
     */
    public async initiatePasswordReset(email: string): Promise<void> {
        try {
            await this.request({
                method: 'get',
                url: this.API_ENDPOINT + 'auth/initiate-password-reset',
                data: {
                    email
                }
            });
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
        }
    }

    /**
     * Send a login request to the backend
     * @param email
     * @param secret
     * @param authenticatorToken
     */
    public async login(email: string, secret: string, authenticatorToken: string): Promise<LoginResponse> {
        try {
            const response = await this.request({
                method: 'post',
                url: this.API_ENDPOINT + 'auth/login',
                data: {
                    email,
                    secret,
                    token: authenticatorToken
                }
            });
            return await response.json();
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
        }

        return null;
    }

    public async resetAuthenticator(): Promise<ResetAuthenticatorResponse> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'auth/initialize-reset-authenticator'
            });
            return await response.json();
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
            return null;
        }
    }

    /**
     * Validate an authenticator token against an email address
     * @param email
     * @param authenticatorToken
     */
    public async validateAuthenticator(email: string,
        authenticatorToken: string): Promise<VerifyAuthenticatorResponse> {
        try {
            const response = await this.request({
                method: 'get',
                url: this.API_ENDPOINT + 'auth/verify-authenticator',
                data: {
                    email,
                    token: authenticatorToken
                }
            });
            return await response.json();
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
            return null;
        }
    }

    public async validateInviteToken(dataRequest: ValidateInviteTokenDataInterface)
        : Promise<ValidateInviteTokenDataResponse> {
        try {
            const response = await this.request({
                method: 'get',
                url: this.API_ENDPOINT + 'auth/validate-invite-token',
                data: dataRequest
            });
            const data = await response.json();

            if (data.status === 'great-success') {
                return {
                    valid: true,
                    user: data.user
                };
            } else {
                return {
                    valid: false,
                    user: null
                };
            }
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
            return {
                valid: false,
                user: null
            };
        }
    }

    public async validatePassword(secret: string): Promise<ValidatePasswordResponse> {
        try {
            const response = await this.request({
                method: 'post',
                authenticated: true,
                url: this.API_ENDPOINT + 'auth/validate-password',
                data: {
                    secret
                }
            });
            return await response.json();
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
            return null;
        }
    }

    /**
     * Validate a password reset code for a given an email address and return the reset token
     * @param email
     * @param code
     */
    public async validatePasswordResetCode(email: string,
        code: string): Promise<ValidateResetPasswordCodeResponse> {
        try {
            const response = await this.request({
                method: 'get',
                url: this.API_ENDPOINT + 'auth/validate-reset-password-code',
                data: {
                    email,
                    code
                }
            });
            return await response.json();
        } catch (e) {
            globalToast('UNKNOWN_ERROR', 'error');
            return null;
        }
    }
}

export default new AuthService();
