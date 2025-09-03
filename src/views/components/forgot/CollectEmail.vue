<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/public.scss';
</style>

<template>
    <div class="forgot-interface-email">
        <h1 class="h3">{{ $t('login.changePassword.title') }}</h1>
        <div class="separator"></div>
        <h2 class="h4">{{ $t('login.changePassword.emailHeader') }}</h2>
        <form class="collect-email">
            <input type="email"
                   v-model="email"
                   @keyup="inputKeyup"
                   :placeholder="$t('login.changePassword.placeholder.email')"
                   autofocus
                   tabindex="1">
            <button class="btn btn-primary" type="submit" @click="submitClick" tabindex="1">{{ $t('generic.ui.submit') }}</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'CollectEmail',
    components: {
        FontAwesomeIcon
    }
})
export default class CollectEmail extends Vue {
    private email: string;

    /* LIFECYCLE */

    /* EVENT HANDLERS */
    private inputKeyup(event: KeyboardEvent): void {
        if (event.code === 'Enter') {
            this.submitClick();
        }
    }

    private submitClick(): void {
        this.$emit('set-email-step', {
            email: this.email
        });
    }
}
</script>
