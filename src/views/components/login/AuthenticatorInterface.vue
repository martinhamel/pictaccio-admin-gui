<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/public.scss';
</style>

<template>
    <div class="login-interface-auth">
        <h1 class="h3">{{ $t('login.login.auth.title') }}</h1>
        <div class="separator"></div>
        <h2 class="h4">{{ $t('login.login.auth.description') }}</h2>
        <!-- <h3>Instructions for the user to find their code somewhere</h3> -->
        <form class="oauth-wrapper">
            <authenticator-input ref="otp" @auth-filled="authFilled"/>
            <button class="btn btn-primary" type="submit" @click="submitClick">{{ $t('login.login.buttonContinue') }}</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AuthenticatorInput from '@pictaccio/admin-gui/src/views/components/widgets/AuthenticatorInput.vue';

@Component({
    name: 'Authenticator Interface',
    components: {
        FontAwesomeIcon,
        AuthenticatorInput
    },
    emits: [
        'next-step',
        'set-authenticator-token'
    ]
})
export default class AuthenticatorInterface extends Vue {
    private _authenticatorToken: string;

    /* LIFECYCLE */
    public activated(): void {
        this.clearAuth();
    }

    /* EVENT HANDLERS */
    private authFilled(authCode: string): void {
        this._authenticatorToken = authCode;
        this.submitClick();
    }

    private clearAuth(): void {
        (this.$refs['otp'] as AuthenticatorInput).clearInputs();
    }

    private submitClick(): void {
        this.$emit('set-authenticator-token', {
            authenticatorToken: this._authenticatorToken
        });
        this.$emit('next-step', 'logging');
    }
}

</script>
