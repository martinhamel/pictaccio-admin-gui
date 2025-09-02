<style lang="scss" scoped>
#error-view {
    width: 100%;
    height: 100vh;
    background-color: var(--color-background-page-1);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    .backlink {
        position: fixed;
        color: var(--color-text-normal);
        top: 50px;
        white-space: nowrap;
    }

    .error-message {
        margin: auto 10vw 50vh;
        color: var(--color-text-accent-secondary);

        h3 {
            color: var(--color-text-normal);
        }

        hr {
            border: 2px solid currentColor;
            background-color: currentColor;
            width: 25rem;
        }

        p {
            color: var(--color-text-normal);
        }
    }
}
</style>

<template>
    <div id="error-view">
        <button type="button"
            @click="backClick()"
            class="btn btn-primary">
            &laquo; {{ $t('generic.ui.back') }}
        </button>
        <div class="error-message">
            <h2>{{ errorCode }}</h2>
            <h3>{{ $t(`errorPage.${errorCode}.title`) }}</h3>
            <hr>
            <p>{{ $t(`errorPage.${errorCode}.message`) }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Error Page',
    emits: [
        'menu-visible'
    ],
    components: {
        FontAwesomeIcon
    }
})
export default class ErrorPage extends Vue {
    @Prop
    public errorCode!: string;

    /* LIFE CYCLE */
    public mounted(): void {
        this.$emit('menu-visible', false);
    }

    /* EVENT HANDLERS */
    private backClick(): void {
        window.history.length > 2 ? this.$router.go(-1) : this.$router.push('/')
    }
}
</script>
