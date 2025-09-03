<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/public.scss';
</style>

<template>
    <div class="forgot-interface-code">
        <h1 class="h3">{{ $t('login.changePassword.title') }}</h1>
        <div class="separator"></div>
        <div class="info-box-container">
            <information-box :colors="{
                border: 'var(--color-semantic-info)',
            }">
                <p>{{ $t('login.changePassword.codeMessage') }}</p>
            </information-box>
        </div>
        <form class="reset-code">
            <input type="text"
                   autocomplete="off"
                   v-model="resetCode"
                   @keyup="inputKeyup">
            <button class="btn btn-primary" type="submit" @click="submitClick">{{ $t('generic.ui.submit') }}</button>
        </form>
    </div>
</template>

<script lang="ts">
import InformationBox from '@pictaccio/admin-gui/views/components/widgets/InformationBox.vue';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Forgot Password',
    components: {
        InformationBox,
        FontAwesomeIcon
    },
    expose: [
        'getCode'
    ]
})
export default class ValidateCode extends Vue {
    private resetCode: string;

    public getCode(): string {
        return this.resetCode;
    }

    /* LIFECYCLE */

    /* EVENT HANDLERS */
    private inputKeyup(event: KeyboardEvent): void {
        if (event.code === 'Enter') {
            this.submitClick(event as unknown as MouseEvent);
        }
    }

    submitClick(event: MouseEvent): boolean {
        event.preventDefault();
        this.$emit('set-code-validate-step', {
            code: this.resetCode
        });

        return false;
    }
}
</script>
