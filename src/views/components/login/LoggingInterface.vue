<style lang="scss" scoped>
.loading-wrapper {
    width: 100%;
    max-width: calc(100vw - #{$ruler-scrollbar});
    height: auto;
    display: flex;
}

:deep(.spinners-holder) {
    color: var(--color-text-normal);
}
</style>

<template>
<div class="loading-wrapper">
    <spinner/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import Spinner from '@pictaccio/admin-gui/src/views/components/widgets/Spinner.vue';

@Component({
    name: 'LoggingInterface',
    components: {
        Spinner
    }
})
export default class LoggingInterface extends Vue {
    /* EVENT HANDLERS */
}
</script>
