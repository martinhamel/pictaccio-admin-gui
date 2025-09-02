<style lang="scss" scoped>
#version {
    position: absolute;
    inset: auto auto 0.5rem 0.5rem;
    font-size: 1.6rem;
    z-index: 1;
}
</style>

<template>
    <span id="version" class="text-small">
        GUI on {{ guiVersion() }}<br>API on {{ $store.getters['Config/apiVersion'] }}
    </span>
</template>

<script lang="ts">
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Version String',
    components: {
        FontAwesomeIcon
    }
})
export default class VersionString extends Vue {
    /* LIFECYCLE */
    public beforeMount(): void {
        try {
            this.$store.dispatch('Config/retrieveVersion');
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }
    /* PRIVATE */
    private guiVersion(): string {
        return document.querySelector('meta[name="app-build"]').getAttribute('content');
    }
}
</script>
