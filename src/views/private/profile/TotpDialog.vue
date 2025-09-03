<style lang="scss" scoped>
.totp-container {
    display: flex;
    flex-direction: row;
    gap: $grid-gap;

    .authenticator-input {
        display: flex;
        flex-direction: column;
        width: 80ch;
        gap: #{$grid-gap * 3};
    }

    .qrcode-box {
        width: 22rem;
        height: 22rem;
    }
}

.btn.confirm {
    order: 11;
}
</style>

<template>
    <dialog-box ref="totp-dialog" @dialog-close="closeDialog"
                :dismiss="true" :overlay="true" :box-type="'small-box'">
        <template #title>
            <h5 class="h4">
                <font-awesome-icon :icon="['fas', 'user']"/>
                {{ $t('generic.ui.resetTotp') }}
            </h5>
        </template>
        <template #content>
            <div class="totp-container">
                <div class="authenticator-input">
                    <p>{{ $t('login.resetTotp.instructions') }}</p>
                    <authenticator-input ref="otp"/>
                </div>
                <div class="qrcode-box">
                    <img :src="authenticatorQRCode" alt="" ref="qrCode">
                </div>
            </div>
        </template>
        <template #uiDialog>
            <button class="btn btn-primary confirm" @click="authFilled">
                {{ $t('generic.ui.confirm') }}
            </button>
        </template>
    </dialog-box>
</template>

<script lang="ts">
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import DialogBox from '@pictaccio/admin-gui/views/components/layout/DialogBox.vue';
import QRCode from 'qrcode';
import { Component, Vue } from 'vue-facing-decorator';
import AuthenticatorInput from '@pictaccio/admin-gui/views/components/widgets/AuthenticatorInput.vue';

@Component({
    name: 'Totp dialog',
    components: {
        AuthenticatorInput
    }
})
export default class TotpDialog extends Vue {
    private authenticatorQRCode: string;

    public openDialog(): void {
        this.subResetTotp();
        (this.$refs['totp-dialog'] as DialogBox).openDialog()
    }

    /* EVENT HANDLERS */
    private async authFilled(): Promise<void> {
        const authCode = (this.$refs['otp'] as AuthenticatorInput).getAuthCode();
        try {
            const valid = await this.$store.dispatch('Auth/validateAuthenticator', {
                email: this.$store.getters['UserPreference/userSession'].email,
                authenticatorToken: authCode
            });
            if (valid) {
                await this.confirmResetTotp();
            } else {
                globalToast(this.$t('activities.userProfile.messages.validateResetTotpFailed'),
                    'warning');
                (this.$refs['otp'] as AuthenticatorInput).clearInputs();
            }
        } catch (error) {
            globalToast('UNKNOWN_ERROR', 'error');
            throw error;
        }
    }

    private closeDialog(): void {
        (this.$refs['totp-dialog'] as DialogBox).closeDialog();
    }

    /* PRIVATE */
    private async confirmResetTotp(): Promise<void> {
        try {
            await this.$store.dispatch('Auth/confirmResetAuthenticator');
            this.closeDialog();
        } catch (error) {
            globalToast(this.$t('messages.requestError'), 'error');
        }
    }

    private subResetTotp(): void {
        this.$store.dispatch('Auth/resetAuthenticator')
            .then<string>((otpUri: string): any => {
                if (otpUri) {
                    return QRCode.toDataURL(otpUri);
                } else {
                    globalToast(this.$t('activities.userProfile.messages.validateResetTotpFailed'), 'warning');
                    return Promise.resolve(false);
                }
            })
            .then<string>((dataUrl): any => {
                if (dataUrl) {
                    (this.$refs['qrCode'] as HTMLElement).setAttribute('src', dataUrl);
                    this.authenticatorQRCode = dataUrl;
                }
            })
            .catch((error) => {
                console.error(`Error State: Reset Totp failed, ${error.message}`);
            });
    }
}
</script>
