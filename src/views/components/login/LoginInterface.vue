<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/public.scss';
</style>

<template>
    <div class="login-interface-login">
        <h1 class="h3">{{ $t('login.login.header') }}</h1>
        <div class="separator"></div>
        <form class="login-credentials" @keyup="inputKeyup">
            <input type="email" v-model.trim="email" placeholder="Email" autofocus tabindex="1">
            <secret @change="secretChange" ref="secretPassword"></secret>
        </form>
        <a class="forgot-pass" href="/forgot-password" tabindex="2">{{ $t('login.login.linkForgotPassword') }}</a>
        <button class="btn btn-primary" type="submit" @click="submitClick" tabindex="1">{{ $t('login.login.button') }}</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Secret from '@pictaccio/admin-gui/src/views/components/widgets/Secret.vue';

@Component({
    name: 'Login Interface',
    components: {
        Secret,
        FontAwesomeIcon
    }
})
export default class LoginInterface extends Vue {
    private email = '';
    private secret = '';

    /* EVENT HANDLERS */
    private inputKeyup(event: KeyboardEvent): void {
        if (event.key === 'Enter' &&
            this.email && this.secret) {
            this.submitClick();
        }
    }

    private submitClick(): void {
        this.$emit('set-email-secret', {
            email: this.email,
            secret: this.secret
        });
        this.$emit('next-step', 'authenticator');
    }

    private secretChange(value: string): void {
        this.secret = value;
    }

    public clearSecret(): void {
        (this.$refs['secretPassword'] as Secret)?.resetSecret();
    }
}

</script>
