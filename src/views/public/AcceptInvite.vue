<style lang="scss" scoped>
@import "@pictaccio/admin-gui/src/scss/public.scss";
</style>

<template>
    <section class="accept-invitation-screen">
        <section class="left-pane">
            <div class="logo-container">
                <logo :type="'signature-horizontal'"/>
            </div>
            <locale-selector/>
            <section class="login-span">
                <div class="accept-invite-message" v-if="inviteeInfo && currentStep === 'complete-invite'">
                    <h2>{{ $t('login.invite.welcomeUser', {name: inviteeInfo.info.name.firstName}) }}</h2>
                </div>
                <keep-alive>
                    <component @complete-invite="subCompleteInvite"
                               @setup-authenticator="setupAuthenticator"
                               :email="email"
                               :qrcodeUrl="authenticatorQRCode"
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import CompleteInvite from '@pictaccio/admin-gui/src/views/components/invite/CompleteInvite.vue';
import SetupAuthenticator from '@pictaccio/admin-gui/src/views/components/invite/SetupAuthenticator.vue';
import Welcome from '@pictaccio/admin-gui/src/views/components/invite/Welcome.vue';
import Working from '@pictaccio/admin-gui/src/views/components/invite/Working.vue';
import Logo from '@pictaccio/admin-gui/src/views/components/Logo.vue';
import LocaleSelector from '@pictaccio/admin-gui/src/views/components/widgets/LocaleSelector.vue';
import { User } from '@pictaccio/shared/src/types/user';
import QRCode from 'qrcode';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Accept Invite',
    emits: [
        'menu-visible'
    ],
    components: {
        FontAwesomeIcon,
        Logo,
        CompleteInvite,
        LocaleSelector,
        Working,
        SetupAuthenticator,
        Welcome
    }
})
export default class AcceptInvite extends Vue {
    private currentStep: 'complete-invite' | 'working' | 'setup-authenticator' | 'welcome' = 'complete-invite';
    private authenticatorQRCode: string;
    private inviteeInfo: User = null;

    @Prop
    public email: string;

    @Prop
    public token: string;

    /* LIFECYCLE */
    public async beforeCreate(): Promise<void> {
        const valid = await this.$store.dispatch('Auth/validateInviteToken', {
            token: this.token,
            email: this.email
        });
        this.inviteeInfo = this.$store.getters['Auth/user'];

        if (!valid) {
            this.$router.replace({ name: 'Not Found' });
        }
    }

    public mounted(): void {
        this.$emit('menu-visible', false);
    }

    /* EVENT HANDLERS */
    private subCompleteInvite(info: {email: string, secret: string}): void {
        this.currentStep = 'working';

        this.$store.dispatch('Auth/completeInvite', {
            inviteToken: this.token,
            email: info.email,
            secret: info.secret
        })
            .then<string>((otpUri: string): any => {
                if (otpUri) {
                    return QRCode.toDataURL(otpUri);
                } else {
                    globalToast(this.$t('login.invite.credentialsInvalid'), 'warning');
                    this.currentStep = 'complete-invite';
                    return Promise.resolve(false);
                }
            })
            .then<string>((dataUrl): any => {
                if (dataUrl) {
                    this.authenticatorQRCode = dataUrl;
                    this.currentStep = 'setup-authenticator';
                }
            })
            .catch((error) => {
                this.currentStep = 'complete-invite';
                console.error(`Error State: Login failed, ${error.message}`);
                globalToast(this.$t('messages.requestError'), 'error');
            });
    }

    private setupAuthenticator(): void {
        this.currentStep = 'welcome';

        try {
            this.$store.dispatch('Auth/finishInvite', {
                inviteToken: this.token,
                email: this.email
            });
        } catch (error) {
            globalToast(this.$t('messages.requestError'), 'error');
        }
    }
}
</script>
