<style lang="scss" scoped>
@import "@pictaccio/admin-gui/src/scss/public.scss";

.logout-reason {
    font-size: 1.8rem;
    color: var(--color-semantic-important-info);
}
</style>

<template>
    <section class="login-screen">
        <section class="left-pane">
            <div class="logo-container">
                <logo :type="'signature-horizontal'"/>
            </div>
            <locale-selector/>
            <section class="login-span">
                <div v-if="reason === 'unattended'" class="logout-reason">
                    {{ $t('messages.unattendedLogout') }}
                </div>
                <keep-alive>
                    <component @next-step="loginNextStep"
                               @set-email-secret="loginSetEmailSecret"
                               @set-authenticator-token="loginSetAuthenticator"
                               :email="email"
                               :is="currentStep"
                                ref="loginStep">
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
import { LogoutReason } from '@pictaccio/admin-gui/src/core/types/logout_reason';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Logo from '@pictaccio/admin-gui/src/views/components/Logo.vue';
import LocaleSelector from '@pictaccio/admin-gui/src/views/components/widgets/LocaleSelector.vue';
import LoginInterface from '@pictaccio/admin-gui/src/views/components/login/LoginInterface.vue';
import AuthenticatorInterface from '@pictaccio/admin-gui/src/views/components/login/AuthenticatorInterface.vue';
import LoggingInterface from '@pictaccio/admin-gui/src/views/components/login/LoggingInterface.vue';

const STEPS_INTERFACE: {[key: string]: string} = {
    authenticator: 'authenticator-interface',
    login: 'login-interface',
    logging: 'logging-interface'
};

@Component({
    name: 'Login Screen',
    emits: [
        'menu-visible'
    ],
    components: {
        FontAwesomeIcon,
        Logo,
        LoginInterface,
        AuthenticatorInterface,
        LoggingInterface,
        LocaleSelector
    }
})
export default class Login extends Vue {
    private authenticatorToken: string;
    private currentStep = 'login-interface';
    private email = '';
    // private _loginMessage = '';
    private secret: string;
    private reason: LogoutReason;

    private loginStatus = {
        status: 'error',
        dismissable: false
    };

    /* LIFECYCLE */
    public mounted(): void {
        if (this.$store.getters['Auth/isLoggedIn']) {
            this.$router.push('/');
        }
        this.reason = this.$store.getters['App/logoutReason'];
        this.$store.commit('App/commitLogoutReason', null);

        this.$emit('menu-visible', false);
    }

    /* EVENT HANDLERS */
    private loginNextStep(step: string): void {
        this.reason = null;

        if (STEPS_INTERFACE[step] !== undefined) {
            this.currentStep = STEPS_INTERFACE[step];

            if (step === 'logging') {
                this.doAuthentication();
            }
        } else {
            console.error(`Error State: loginNextStep called with ${step}`);
        }
    }

    private loginSetAuthenticator(info: {authenticatorToken: string}): void {
        this.authenticatorToken = info.authenticatorToken;
    }

    private loginSetEmailSecret(info: {email: string, secret: string}): void {
        this.email = info.email;
        this.secret = info.secret;
    }

    /* PRIVATE */
    private doAuthentication(): void {
        if (!this.email || !this.secret || !this.authenticatorToken) {
            console.error('Error State: _doAuthentication called but critical information is missing');
            return;
        }

        this.$store.dispatch('Auth/login', {
            email: this.email,
            secret: this.secret,
            authenticatorToken: this.authenticatorToken
        })
            .then(async (success: void) => {
                if (success as unknown as boolean) {
                    await this.$store.dispatch('User/readUserPermissions');
                    this.$router.push('/'); // TODO: Redirect user to intended page
                } else {
                    // TODO: Give the user some toast about the rejection
                    // Needs to be replaced with globalFeedback: this.setMessage('Login failed, please verity your email, password and authenticator code');
                    this.currentStep = 'login-interface';
                    this.$nextTick(() => {
                        (this.$refs['loginStep'] as LoginInterface)?.clearSecret();
                    })
                }
            })
            .catch((error) => {
                console.error(`Error State: Login failed, ${error.message}`);
                this.currentStep = 'login-interface';
                this.$nextTick(() => {
                    (this.$refs['loginStep'] as LoginInterface)?.clearSecret();
                })
            });
    }
}
</script>
