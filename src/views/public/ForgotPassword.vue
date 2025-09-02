<style lang="scss" scoped>
@import "../../scss/public.scss";
</style>

<template>
    <section class="forgot-password-screen">
        <section class="left-pane">
            <div class="logo-container">
                <logo :type="'signature-horizontal'"/>
            </div>
            <locale-selector/>
            <section class="login-span">
                <div class="forgot-message" v-if="forgotMessage !== ''">
                </div>
                <keep-alive>
                    <component @set-email-step="setEmailStep"
                               @set-code-validate-step="setValidateCodeStep"
                               @set-password-step="setPasswordStep"
                               :email="email"
                               :is="currentStep">
                    </component>
                </keep-alive>
            </section>
        </section>
        <section class="right-pane">
            <div class="side-image">
                <div class="image-container">
                </div>
            </div>
        </section>
    </section>
</template>

<script lang="ts">
import Logo from '../../views/components/Logo.vue';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CollectEmail from '../../views/components/forgot/CollectEmail.vue';
import ValidateCode from '../../views/components/forgot/ValidateCode.vue';
import ChangePassword from '../../views/components/forgot/ChangePassword.vue';
import LocaleSelector from '../../views/components/widgets/LocaleSelector.vue';
import { globalToast } from '../../utils/global_toast';

@Component({
    name: 'Forgot Password',
    emits: [
        'menu-visible'
    ],
    components: {
        Logo,
        FontAwesomeIcon,
        CollectEmail,
        ValidateCode,
        ChangePassword,
        LocaleSelector
    }
})
export default class ForgotPassword extends Vue {
    private currentStep = 'collect-email';
    private code: string;
    private email: string;
    private forgotMessage = '';

    /* LIFECYCLE */
    public mounted(): void {
        this.$emit('menu-visible', false);
    }

    /* EVENT HANDLERS */
    private setEmailStep(data: {email: string}): void {
        this.email = data.email;
        this.$store.dispatch('Auth/initiatePasswordReset', {
            email: data.email
        });
        this.currentStep = 'validate-code';
    }

    private setPasswordStep(secret: string): void {
        try {
            const success = this.$store.dispatch('Auth/completePasswordReset', {
                email: this.email,
                code: this.code,
                secret
            });

            if (success) {
                globalToast(this.$t('messages.passwordChanged'), 'success');
                this.$router.push('login');
            } else {
                globalToast(this.$t('messages.passwordChangedError'), 'error');
            }
        } catch (error) {
            globalToast(this.$t('messages.passwordChangedError'), 'error');
        }
    }

    private setValidateCodeStep(data: {code: string}): void {
        this.code = data.code;

        this.$store.dispatch('Auth/validatePasswordResetCode', {
            email: this.email,
            code: this.code
        })
            .then((valid: boolean) => {
                if (valid) {
                    this.currentStep = 'change-password';
                } else {
                    globalToast(this.$t('login.changePassword.invalidCode'), 'warning');
                }
            })
            .catch((error) => {
                this.currentStep = 'validate-code';
                console.log(error);
            });
    }
}
</script>
