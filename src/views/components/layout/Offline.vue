<style scoped lang="scss">
    .offline {
        position: absolute;
        inset: 0;
        backdrop-filter: saturate(50%) sepia(15%);
        background-color: var(--color-background-base);
        opacity: .75;
        z-index: 100000000;
    }

    .offline-message {
        position: absolute;
        font-size: 3rem;
        left: 50%;
        top: 7vh;
        padding: 1.5rem;
        translate: -50%;
        background-color: var(--color-semantic-important-info);
        backdrop-filter: blur(10px);
        border-radius: $ruler-border-radius;
        z-index: 100000001;
    }
</style>

<template>
    <template v-if="!$store.getters['App/online']">
        <div class="offline">
        </div>
        <div class="offline-message">
            {{ $t('messages.offline')}}
        </div>
    </template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';

@Component({
    name: 'Offline'
})
export default class Offline extends Vue {

}
</script>
