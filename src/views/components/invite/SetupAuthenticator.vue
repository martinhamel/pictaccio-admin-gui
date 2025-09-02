<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/public.scss';
</style>

<template>
    <div class="invite-interface-totp">
        <h1 class="h3">{{ $t('login.invite.setAuthHeader') }}</h1>
        <div class="separator"></div>
        <div class="info-box-container">
            <information-box :colors="{
                border: 'var(--color-semantic-info)',
            }">
                <p>{{ $t('login.invite.setAuthMessage') }}</p>
                <ul class="set-auth-steps">
                    <li>{{ $t('login.invite.setAuthStep1') }}</li>
                    <li>{{ $t('login.invite.setAuthStep2') }}</li>
                    <li>{{ $t('login.invite.setAuthStep3') }}</li>
                </ul>
                <p>{{ $t('login.invite.setAuthMessage2') }}</p>
            </information-box>
        </div>
        <div class="oauth-container">
            <div class="qrcode-box">
                <div class="qrcode-box-wrapper">
                    <img :src="qrcodeUrl" alt="alt">
                </div>
            </div>
            <form class="oauth-wrapper">
                <authenticator-input ref="otp" @auth-filled="authFilled"/>
                <button class="btn btn-primary" type="submit" @click="submitClick">{{ $t('generic.ui.validateCode') }}</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { ValidateAuthenticatorInterface } from '@pictaccio/admin-gui/src/core/types/validate_authenticator_interface';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import AuthenticatorInput from '@pictaccio/admin-gui/src/views/components/widgets/AuthenticatorInput.vue';

@Component({
    name: 'Setup Authenticator',
    components: {
        InformationBox,
        AuthenticatorInput
    }
})
export default class SetupAuthenticator extends Vue {
    private _authenticatorToken: string;

    @Prop
    public email: string;

    @Prop
    public qrcodeUrl: string;

    /* LIFECYCLE */

    /* EVENT HANDLERS */
    private authFilled(authCode: string): void {
        this._authenticatorToken = authCode;
        this.validateClick();
    }

    private validateClick(): void {
        this.$store.dispatch('Auth/validateAuthenticator', {
            email: this.email,
            authenticatorToken: this._authenticatorToken
        })
            .then<boolean, void>((valid: boolean): boolean => {
                if (valid) {
                    this.$emit('setup-authenticator');
                } else {
                    globalToast(this.$t('login.invite.totpFailed'), 'warning');
                }

                return false;
            })
            .catch((error) => {
                globalToast('UNKNOWN_ERROR', 'error');
                throw error;
            })
    }
}
</script>
