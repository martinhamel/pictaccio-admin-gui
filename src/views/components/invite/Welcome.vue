<style lang="scss" scoped>
.welcome-prompt {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 3.6rem;
    --font-weight: 600;
    color: var(--color-text-normal);
    background-color: var(--color-background-page-1);

    .logo-container {
        position: relative;
        top: -33%;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: min-content;
        min-width: 30vw;

        .welcome-span {
            --welcome-padding: 19rem;
            display: block;
            width: 100%;
            text-align: center;
        }

        :deep(#logo) {
            position: relative !important;
            transform: none;
            max-width: unset;
            min-width: 30rem;
        }
    }
}
</style>

<template>
    <section class="welcome-prompt">
        <div class="logo-container">
            <span class="welcome-span">{{ $t('login.invite.welcome') }}</span>
            <logo type="signature-horizontal"/>
        </div>
    </section>
</template>

<script lang="ts">
import Logo from '@pictaccio/admin-gui/src/views/components/Logo.vue';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Welcome',
    components: {
        Logo
    }
})
export default class Welcome extends Vue {
    /* LIFECYCLE */
    public mounted(): void {
        setTimeout(() => {
            this.$store.commit('UserPreference/commitReload');
            this.$store.dispatch('Auth/logout');
            this.$router.push({ name: 'Login' });
        }, 4000);
    }

    /* EVENT HANDLERS */
}
</script>

