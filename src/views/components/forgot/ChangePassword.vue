<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/public.scss';
.new-password-label {
    margin: 0 0 -1.4rem !important;
}
</style>

<template>
    <div class="forgot-interface-reset">
        <h1 class="h3">{{ $t('login.changePassword.title') }}</h1>
        <div class="separator"></div>
        <div class="forgot-setup-password">
            <password-form ref="secret" @set-password-step="sendForm">
<!--                <template #before-form>-->
<!--                    <h2 class="h4 new-password-label">{{ $t('login.changePassword.newPassHeader') }}</h2>-->
<!--                </template>-->
            </password-form>
        </div>
    </div>
</template>

<script lang="ts">
import PasswordForm from '@pictaccio/admin-gui/views/components/widgets/PasswordForm.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Vue } from 'vue-facing-decorator';
import PasswordRequirements from '@pictaccio/admin-gui/views/components/PasswordRequirements.vue';

@Component({
    name: 'Forgot Password',
    components: {
        PasswordForm,
        FontAwesomeIcon,
        PasswordRequirements
    },
    emits: ['set-password-step'],
    expose: [
        'getSecret'
    ]
})
export default class ChangePassword extends Vue {
    public getSecret(): string | false {
        return (this.$refs.secret as PasswordForm).getSecret();
    }

    private sendForm(secret: string) {
        this.$emit('set-password-step', secret);
    }
}
</script>
