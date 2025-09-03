<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/public.scss';
</style>

<template>
    <div class="invite-interface-accept">
        <h1 class="h3">{{ $t('login.invite.acceptInviteHeader') }}</h1>
        <div class="separator"></div>
        <div class="invite-setup-password">
            <password-form @set-password-step="sendInfo"/>
        </div>
    </div>
</template>

<script lang="ts">
import PasswordForm from '@pictaccio/admin-gui/views/components/widgets/PasswordForm.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import PasswordRequirements from '@pictaccio/admin-gui/views/components/PasswordRequirements.vue';

@Component({
    name: 'CompleteInvite',
    components: {
        PasswordForm,
        FontAwesomeIcon,
        PasswordRequirements
    },
    emits: ['complete-invite']
})
export default class CompleteInvite extends Vue {
    @Prop
    public email: string;

    /* LIFECYCLE */
    public mounted(): void {
        const element: HTMLInputElement = document.querySelector('.auth-interface [name="email"]');
        if (element) {
            element.value = this.email;
        }
    }

    /* EVENT HANDLERS */
    private sendInfo(secret: string): void {
        this.$emit('complete-invite', {
            email: this.email,
            secret
        });
    }
}
</script>
