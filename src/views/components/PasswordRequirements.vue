<style lang="scss" scoped>
.password-requirements {
    max-width: $ruler-input-max-width;
    width: auto;
    text-align: left;
    margin: 0 0 0 0;

    li {
        font-size: 1.6rem;

        .fa-xmark {
            color: var(--color-semantic-error);
        }
        .fa-check {
            color: var(--color-semantic-success);
        }
    }
}
</style>

<template>
    <ul class="password-requirements" v-if="isMounted && passwordRequirement">
        <li>
            <font-awesome-icon :icon="['fas', checkComplexity('minLength') ? 'check' : 'times']"/>
            {{ $t('login.password.minLength', {length: passwordRequirement.minLength}) }}
        </li>
        <li v-show="$store.getters['Config/config'].app.password.policy.lowercase !== 0">
            <font-awesome-icon :icon="['fas', checkComplexity('lowercase') ? 'check' : 'times']"/>
            {{ $t('login.password.lowerCase', {number: passwordRequirement.lowercase}) }}
        </li>
        <li v-show="$store.getters['Config/config'].app.password.policy.uppercase !== 0">
            <font-awesome-icon :icon="['fas', checkComplexity('uppercase') ? 'check' : 'times']"/>
            {{ $t('login.password.upperCase', {number: passwordRequirement.uppercase}) }}
        </li>
        <li v-show="$store.getters['Config/config'].app.password.policy.numbers !== 0">
            <font-awesome-icon :icon="['fas', checkComplexity('numbers') ? 'check' : 'times']"/>
            {{ $t('login.password.numbers', {number: passwordRequirement.numbers}) }}
        </li>
        <li v-show="$store.getters['Config/config'].app.password.policy.symbols !== 0">
            <font-awesome-icon :icon="['fas', checkComplexity('symbols') ? 'check' : 'times']"/>
            {{ $t('login.password.symbols', {number: passwordRequirement.symbols}) }}
        </li>
        <li>
            <font-awesome-icon :icon="['fas', match ? 'check' : 'times']"/>
            {{ $t('login.password.match', {match: match}) }}
        </li>
    </ul>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ClientConfigSchema } from '@pictaccio/shared/src/types/client_config_schema';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Password Requirements',
    emits: [
        'requirements-met'
    ],
    components: {
        FontAwesomeIcon
    },
    expose: [
        'setMatch'
    ]
})

/**
 * In parent
 * public updated(): void {
        if (this.requirementsMet && this.secret === this.secretConfirm) {
            ...
        } else {
            ...
        }
    }
 * private requirementsMet(isMet: boolean) {
        return isMet;
    }
 */
export default class PasswordRequirements extends Vue {
    @Prop
    private secret!: string;
    private passwordRequirement: ClientConfigSchema['app']['password']['policy'];
    private match = false;
    private isMounted = false;

    public setMatch(match: boolean): void {
        this.match = match;
    }

    /* LIFECYCLE */
    public beforeCreate(): void {
        this.$store.watch(
            () => this.$store.getters['Config/config'],
            () => {
                this.passwordRequirement = this.$store.getters['Config/config']?.app?.password?.policy;
            }
        );
    }

    public mounted(): void {
        this.$nextTick(() => {
            this.isMounted = true;
            this.passwordRequirement = this.$store.getters['Config/config']?.app?.password?.policy;
        });
    }

    public updated(): void {
        if (
            this.isMounted &&
            this.checkComplexity('minLength') &&
            this.checkComplexity('lowercase') &&
            this.checkComplexity('uppercase') &&
            this.checkComplexity('numbers') &&
            this.checkComplexity('symbols')
        ) {
            this.$emit('requirements-met', true);
        } else {
            this.$emit('requirements-met', false);
        }
    }

    /* PRIVATE */
    private checkComplexity(check: any): boolean {
        if (!this.secret || !this.passwordRequirement) {
            return false;
        }

        switch (check) {
        case 'minLength':
            if (this.secret.length >= this.passwordRequirement.minLength) {
                return true;
            }
            break;
        case 'lowercase':
            if (this.secret.match(/[a-z]/g)?.length >=
                this.passwordRequirement.lowercase) {
                return true;
            }
            break;
        case 'uppercase':
            if (this.secret.match(/[A-Z]/g)?.length >=
                this.passwordRequirement.uppercase) {
                return true;
            }
            break;
        case 'numbers':
            if (this.secret.match(/\d/g)?.length >= this.passwordRequirement.numbers) {
                return true;
            }
            break;
        case 'symbols':
            if (this.secret.match(/\W/g)?.length >= this.passwordRequirement.symbols) {
                return true;
            }
            break;
        default:
            console.warn(`Trying to check ${check} complexity but case do not exist.`);
        }
        return false;
    }
}
</script>
