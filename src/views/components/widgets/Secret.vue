<style scoped>
.secret-container {
    text-align: center;
    vertical-align: middle;

    body:has(com-1password-button) &:focus-within {
        span {
            transform: translateX(-2.5rem);
        }
    }
}

.secret-container span {
    position: absolute;
    height: 35px;
    width: 35px;
    margin-left: -35px;
    cursor: pointer;
    font-size: 2rem;
    text-align: center;
    vertical-align: middle;
}

.secret-toggle {
    -ms-transform: translateY(25%);
    transform: translateY(25%);
}
</style>

<template>
    <div class="secret-container">
        <input
            type="password"
            v-model="secret"
            :placeholder="$t(`activities.userProfile.inputPassword${confirm ? 'Confirm' : ''}`)"
            tabindex="1"
            id="secret-field"
            ref="secret-field"
            :autofocus="autofocus"
            @focus="buttonIsVisible = true"
            @blur="deselectField"
            @input="inputUpdate">
        <span @mousedown="showSecretMousedown" v-if="buttonCanBeViewed && buttonIsVisible && canSeeSecret">
            <font-awesome-icon
                :icon="['fas', 'eye']"
                class="secret-toggle"
                v-if="buttonIsVisible && !buttonIsActive" />
            <font-awesome-icon
                :icon="['fas', 'eye-slash']"
                class="secret-toggle"
                v-if="buttonIsVisible && buttonIsActive" />
        </span>
    </div>

</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Secret',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'change'
    ],
    expose: [
        'getSecret',
        'resetSecret'
    ]
})
export default class Secret extends Vue {
    @Prop
    private canBeViewed: boolean;
    @Prop
    private autofocus: boolean;
    @Prop
    private confirm: boolean;

    private secret = '';
    private buttonIsSelected = false;
    private buttonIsVisible = false;
    private buttonIsActive = false;

    private buttonCanBeViewed = true;

    private lastUpdated: any;
    private canSeeSecret = true;

    public getSecret(): string {
        return this.secret;
    }

    /* LIFECYCLE */
    public mounted(): void {
        if (this.canBeViewed !== undefined) {
            this.buttonCanBeViewed = this.canBeViewed;
        }
    }

    /* EVENT HANDLERS */
    private showSecretMousedown(): void {
        this.buttonIsSelected = true;
    }

    private deselectField(): void {
        const secret = (this.$refs['secret-field'] as HTMLInputElement);
        if (this.buttonIsSelected) {
            const type = secret.getAttribute('type') === 'password' ? 'text' : 'password';
            secret.setAttribute('type', type);
            this.buttonIsActive = !this.buttonIsActive;
            (secret as HTMLInputElement).focus();
            this.buttonIsSelected = false;
        } else if (secret) {
            this.buttonIsVisible = false;
            this.buttonIsActive = false;
            secret.setAttribute('type', 'password');
        }
        this.$emit('change', this.secret);
    }

    private inputUpdate(event: KeyboardEvent): void {
        this.$emit('change', this.secret);
        if (this.secret === '') {
            this.canSeeSecret = true;
        }
        this.clearAfterTime();
    }

    private async clearAfterTime(): Promise<void> {
        const timeToWait = 60;
        // Set date of last change
        this.lastUpdated = new Date();
        // Wait some time
        setTimeout(() => {
            const currentTime = new Date();
            const seconds = (currentTime.getTime() - this.lastUpdated.getTime()) / 1000;
            // Check if too much time as passed since last update
            if (seconds > timeToWait - 1) {
                // Make the password invisible
                this.canSeeSecret = false;
                this.buttonIsActive = false;
                const field = this.$refs['secret-field'] as HTMLInputElement;
                if (!field) {
                    return;
                }
                field.setAttribute('type', 'password');
            }
        }, timeToWait * 1000);
    }

    public resetSecret(): void {
        this.secret = '';
        this.buttonIsSelected = false;
        this.buttonIsActive = false;
        this.canSeeSecret = true;
        (this.$refs['secret-field'] as HTMLInputElement).setAttribute('type', 'password');
        this.$emit('change', this.secret);
    }
}
</script>
