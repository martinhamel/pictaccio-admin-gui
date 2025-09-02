<style lang="scss" scoped>
.auth-wrapper {
    display: flex;
    width: 100%;
    max-width: $ruler-input-max-width;
    margin: 0;
}

.auth-input {
    height: calc(#{$ruler-input-height} * 1.3) !important;
    width: calc(#{$ruler-input-height} * 1.2) !important;
    margin: 0.5rem !important;
    font-size: 2.5rem !important;
    text-align: center;
}
</style>

<template>
    <form class="auth-wrapper" ref="auth-inputs">
        <input class="auth-input"
               :class="`auth-input-${authInput}`"
               type="number"
               :id="`auth-${authInput}`"
               v-for="authInput in authLength"
               :key="authInput"
               :name="`auth-${authInput}`"
               autocomplete="off"
               @keydown="authInputKeydown"
               maxlength="1"
               min="0"
               max="9">
    </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getFormInputValues } from '@loufa/loufairy-client';

@Component({
    name: 'Authenticator Input',
    emits: [
        'auth-filled'
    ],
    components: {
        FontAwesomeIcon
    },
    expose: [
        'clearInputs',
        'getAuthCode'
    ]
})
export default class AuthenticatorInput extends Vue {
    private authLength = 6;

    public clearInputs(): void {
        const children = (this.$refs['auth-inputs'] as HTMLElement).children;

        for (const child of children) {
            (child as HTMLInputElement).value = null;
        }
        this.focusOnFirst();
    }

    public getAuthCode(): string {
        const authValues = getFormInputValues(this.$refs['auth-inputs'] as HTMLElement);
        let authCode = '';
        for (const inputValue in authValues) {
            authCode += authValues[inputValue];
        }
        return authCode;
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.focusOnFirst();
    }

    /* EVENT HANDLERS */
    private async authInputKeydown(event: KeyboardEvent): Promise<void> {
        let eventKey: string;
        let pastedCode = '';

        if ((event.ctrlKey || event.metaKey) && event.code === 'KeyV') {
            event.preventDefault()
            eventKey = 'Paste';
            pastedCode = await this.getClipboard();
            pastedCode = pastedCode.trim();

            if (/[^0-9]/.test(pastedCode)) {
                return;
            }

            this.keyDownBehavior(eventKey, event, pastedCode);
        } else if (/[0-9]/.test(event.key) && event.key.length === 1) {
            eventKey = 'Common';
            this.keyDownBehavior(eventKey, event);
        } else if (event.key === 'Backspace' || event.code === 'Delete') {
            this.keyDownBehavior('Delete', event);
        }
        event.preventDefault();
    }

    /* PRIVATE */
    private authFilled(): void {
        const authCode = this.getAuthCode();
        if (authCode.length === this.authLength) {
            this.$emit('auth-filled', authCode);
        }
    }

    private focusOnFirst(): void {
        ((this.$refs['auth-inputs'] as HTMLElement).children[0] as HTMLElement).focus();
    }

    private keyDownBehavior(eventKey: string, event: KeyboardEvent, pastedCode?: string): void {
        switch (eventKey) {
        case 'Paste' :
            if (pastedCode.length === this.authLength) {
                for (let inputBox = 0; inputBox < this.authLength; inputBox++) {
                    document.getElementById(`auth-${inputBox + 1}`).setAttribute('value', pastedCode[inputBox]);
                }
            } else {
                // Could say the pasted text is not valid
            }
            break;
        case 'Common':
            event.preventDefault();
            (event.target as HTMLInputElement).value = event.key;
            ((event.target as HTMLElement).nextElementSibling as HTMLElement)?.focus();
            break;
        case 'Delete':
            event.preventDefault();
            if ((event.target as HTMLInputElement).value === '') {
                ((event.target as HTMLElement).previousElementSibling as HTMLElement)?.focus();
                (event.target as HTMLInputElement).value = '';
            } else {
                (event.target as HTMLInputElement).value = '';
            }
            break;
        default:
            // (event.target as Element).setAttribute('value', eventKey);
            break;
        }
        this.authFilled();
    }

    private async getClipboard(): Promise<string> {
        return await navigator.clipboard.readText();
    }
}
</script>
