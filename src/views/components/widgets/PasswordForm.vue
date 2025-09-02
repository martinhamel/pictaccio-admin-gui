<style lang="scss" scoped>
.reset-password {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;

    .secret-container {
        text-align: left;
        order: -1;

        :deep(input) {
            margin: 0;
            height: 3rem;
            width: 100%;
        }
    }

    button {
        max-width: 15rem;
        justify-content: center;
    }

    &:deep(.password-requirements) {
        margin: 0 0 0 0;

        li {
            order: 0;
            font-size: 1.2rem;
            text-align: left;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>

<template>
    <information-box>
        <password-requirements ref="requirements" :secret="secret" @requirements-met="requirementsMet"/>
    </information-box>
    <slot name="before-form"/>
    <form class="reset-password">
        <secret @change="secretChange"
                ref="secretPassword"
                :autofocus="true"/>
        <secret @change="confirmSecretChange"
                :can-be-viewed="false"
                :confirm="true"
                @keyup="inputKeyup"
                ref="secretConfirmPassword"/>
        <button class="btn btn-primary btn-submit"
                type="submit"
                id="submit"
                @click="submitClick"
                tabindex="1"
                :disabled="buttonDisabled">
            {{ $t('generic.ui.submit') }}
        </button>
    </form>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import { Component, Vue } from 'vue-facing-decorator';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import PasswordRequirements from '@pictaccio/admin-gui/src/views/components/PasswordRequirements.vue';
import Secret from '@pictaccio/admin-gui/src/views/components/widgets/Secret.vue';

@Component({
    name: 'Forgot Password',
    components: {
        InformationBox,
        FontAwesomeIcon,
        PasswordRequirements,
        Secret
    },
    emits: [
        'set-password-step'
    ],
    expose: [
        'getSecret'
    ]
})
export default class PasswordForm extends Vue {
    private passwordRequirementsMet = false;
    private secret = '';
    private secretConfirm = '';
    private buttonDisabled = true;

    public getSecret(): string | false {
        const secret: Secret = this.$refs.secretPassword as Secret;
        const secretConfirm: Secret = this.$refs.secretConfirmPassword as Secret;

        return secret.getSecret().length > 0 && secret.getSecret() === secretConfirm.getSecret()
            ? secret.getSecret()
            : false;
    }

    /* LIFECYCLE */
    public update(): void {
        this.buttonDisabled = !(this.passwordRequirementsMet && this.secret === this.secretConfirm);
    }

    /* EVENT HANDLERS */
    private confirmSecretChange(value: string): void {
        this.secretConfirm = value;
        this.checkSame();
        this.update();
    }

    private secretChange(value: string): void {
        this.secret = value;
        this.checkSame();
        this.update();
    }

    private inputKeyup(event: KeyboardEvent): void {
        if (event.code === 'Enter' && this.secret && this.secretConfirm) {
            this.submitClick(event as unknown as MouseEvent);
        }
    }

    private requirementsMet(isMet: boolean): void {
        this.passwordRequirementsMet = isMet;
    }

    private submitClick(event: MouseEvent): boolean {
        if (!this.passwordRequirementsMet) {
            event.preventDefault();
            return false;
        }

        if (this.secret === undefined) {
            globalToast(this.$t('login.changePassword.emptyPassword'), 'warning');
            event.preventDefault();
            return false;
        }

        if (this.secret.length < 12) {
            globalToast(this.$t('login.changePassword.shortPassword', { min: 12 }), 'warning');
            event.preventDefault();
            return false;
        }

        if (this.secret !== this.secretConfirm) {
            globalToast(this.$t('login.changePassword.passwordConfirmFailed'), 'warning');
            event.preventDefault();
            return false;
        }

        this.$emit('set-password-step', this.secret);

        event.preventDefault();
        return false;
    }

    /* PRIVATE */
    private checkSame(): void {
        const requirements = this.$refs.requirements as PasswordRequirements;

        if (requirements) {
            requirements.setMatch(this.secret === this.secretConfirm && this.secret.length > 0);
        }
    }
}
</script>
