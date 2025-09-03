<style lang="scss" scoped>
#loading-splash {
    --transition-delay: 1s;
    --transition-duration: 1s;
    z-index: 1000;
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background-base);

    &.gone {
        transition-delay: var(--transition-delay);
        transition-duration: var(--transition-duration);
        transition-property: background-color;
        background-color: transparent;
        pointer-events: none;
    }
}
.spinner-container {
    position: relative;
    z-index: 50;
    width: 8%;

    .gone & {
        opacity: 0;
        transition-delay: var(--transition-delay);
        transition-duration: var(--transition-duration);
        transition-property: opacity;
    }
}
.image-container {
    max-width: 40rem;
    padding-bottom: 20rem;

    .gone & {
        opacity: 0;
        transition-delay: var(--transition-delay);
        transition-duration: var(--transition-duration);
        transition-property: opacity;
    }
}
</style>

<template>
    <div id="loading-splash" :class="$store.getters['App/loading'] ? 'visible' : 'gone'">
        <div class="image-container">
            <logo type="signature-vertical"/>
        </div>
    </div>
</template>

<script lang="ts">
import Logo from '@pictaccio/admin-gui/views/components/Logo.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Spinner from '@pictaccio/admin-gui/views/components/widgets/Spinner.vue';

@Component({
    name: 'Loading Splash',
    components: {
        Logo,
        Spinner,
        FontAwesomeIcon
    }
})
export default class LoadingSplash extends Vue {
    /* LIFECYCLE */
    public mounted(): void {
        document.getElementById('_index-loading-splash').style.display = 'none';
    }
}
</script>
