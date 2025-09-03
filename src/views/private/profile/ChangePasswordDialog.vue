<style lang="scss" scoped>
.reset-password-container {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: auto;

    .change-password-messages {
        width: 60ch;
    }

    >:deep(div) {
        width: 100%;
    }

    :deep(.btn) {
        display: none;
    }

    :deep(h1) {
        @extend .h6;
        text-align: left;
    }

    :deep(.forgot-interface-reset) {

        h3,
        .separator {
            display: none;
        }

        .forgot-setup-password {
            width: 100%;
        }
    }

    :deep(.forgot-interface-code) {

        h3,
        .separator {
            display: none;
        }

        .reset-code,
        .info-box-container {
            width: 100%;
        }

    }
}

.btn-primary {
    order: 11;
}
</style>

<template>
    <dialog-box ref="password-dialog" @dialog-close="closeDialog" :dismiss="true" :overlay="true"
        :box-type="'small-box'">
        <template #title>
            <h5 class="h4">
                <font-awesome-icon :icon="['fas', 'user-circle']" />
                {{ $t('generic.ui.changePassword') }}
            </h5>
        </template>
        <template #content>
            <div class="reset-password-container">
                <p v-if="currentStep === ''" class="change-password-messages">
                    {{ $t('login.changePassword.instructions') }}
                </p>
                <keep-alive>
                    <component ref="component" @set-password-step="setPasswordStep" :email="email" :is="currentStep">
                    </component>
                </keep-alive>
            </div>
        </template>
        <template #uiDialog>
            <button v-if="currentStep === ''" class="btn btn-primary" @click="startResetPasswordClick">
                {{ $t('login.changePassword.sendCode') }}
            </button>
            <button v-if="currentStep === 'validate-code'" class="btn btn-primary" @click="setValidateCodeStep">
                {{ $t('generic.ui.submit') }}
            </button>
            <button v-if="currentStep === 'change-password'" class="btn btn-primary" @click="setPasswordStep">
                {{ $t('generic.ui.submit') }}
            </button>
        </template>
    </dialog-box>
</template>

<script lang="ts">
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ChangePassword from '@pictaccio/admin-gui/views/components/forgot/ChangePassword.vue';
import CollectEmail from '@pictaccio/admin-gui/views/components/forgot/CollectEmail.vue';
import ValidateCode from '@pictaccio/admin-gui/views/components/forgot/ValidateCode.vue';
import DialogBox from '@pictaccio/admin-gui/views/components/layout/DialogBox.vue';
import PasswordRequirements from '@pictaccio/admin-gui/views/components/PasswordRequirements.vue';
import Secret from '@pictaccio/admin-gui/views/components/widgets/Secret.vue';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Change password dialog',
    components: {
        Secret,
        PasswordRequirements,
        CollectEmail,
        ValidateCode,
        ChangePassword
    }
})
export default class ChangePasswordDialog extends Vue {
    private currentStep = '';
    private code: string;
    private email: string;
    private forgotMessage = '';

    public openDialog(): void {
        const data = this.$store.getters['UserPreference/userSession'];
        this.email = data?.email;
        (this.$refs['password-dialog'] as DialogBox).openDialog();
    }

    /* EVENT HANDLERS */
    private closeDialog(): void {
        this.currentStep = '';
        (this.$refs['password-dialog'] as DialogBox).closeDialog();
    }

    private setEmailStep(): void {
        this.$store.dispatch('Auth/initiatePasswordReset', {
            email: this.email
        });
        this.currentStep = 'validate-code';
    }

    private async setPasswordStep(secret: string | false): Promise<void> {
        if (typeof this.$t !== 'function') {
            return;
        }

        secret = typeof secret !== 'string'
            ? (this.$refs['component'] as ChangePassword).getSecret()
            : secret;

        if (secret === false) {
            globalToast(this.$t('messages.passwordsDoNotMatch'), 'warning');
            return;
        }

        const success = await this.$store.dispatch('Auth/completePasswordReset', {
            email: this.email,
            code: this.code,
            secret
        });

        if (typeof this.$t !== 'function') {
            return;
        }

        if (success) {
            globalToast(this.$t('messages.passwordChanged'), 'success');
            this.$router.push('/logout');
        } else {
            globalToast(this.$t('messages.passwordChangedError'), 'error');
        }
    }

    private async setValidateCodeStep(data: { code: string }): Promise<void> {
        this.code = (this.$refs['component'] as ValidateCode).getCode();

        try {
            const valid = await this.$store.dispatch('Auth/validatePasswordResetCode', {
                email: this.email,
                code: this.code
            });
            if (valid) {
                this.currentStep = 'change-password';
            } else {
                globalToast(this.$t('login.changePassword.invalidCode'), 'warning');
            }
        } catch (error) {
            this.currentStep = 'validate-code';
        }
    }

    private startResetPasswordClick(): void {
        this.setEmailStep();
    }
}
</script>
