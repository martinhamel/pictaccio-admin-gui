<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: grid;
    background-color: var(--color-background-page-1);
    height: 100%;
    height: 100svh;
    height: 100dvh;
    overflow: clip auto;
    grid-template-columns: min-content auto;
    grid-template-areas:
        'header header'
        'nav main'
    ;
}

#router-view-container {
    grid-area: header-start / main-start / main-end / main-end;
    overflow: auto;
    position: relative;
    order: 1;
    height: inherit;

    &.menu-visible {
        margin-top: $ruler-header-height;
        height: calc(100dvh - $ruler-header-height);
    }
}
</style>

<template>
    <loading-splash/>
    <toast></toast>
    <main id="router-view-container"
          ref="main"
          :class="menuVisible ? 'menu-visible' : ''">
        <router-view v-if="$store.getters['App/contentVisibility']"
                     @menu-visible="showMenu"/>
    </main>
    <prompt></prompt>
    <header-menu v-if="menuVisible"/>
    <side-bar-nav v-if="adminMenuVisible" ref="side-bar-nav"/>
    <offline></offline>
    <svg-filters/>
</template>

<script lang="ts">
import { Theme, ThemeColors } from '@pictaccio/admin-gui/core/types/color_theme';
import { environment } from '@pictaccio/admin-gui/environment';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import SvgFilters from '@pictaccio/admin-gui/views/components/SvgFilters.vue';
import { Component, Vue } from 'vue-facing-decorator';
import LoadingSplash from '@pictaccio/admin-gui/views/components/layout/LoadingSplash.vue';
import Offline from '@pictaccio/admin-gui/views/components/layout/Offline.vue';
import SideBarNav from '@pictaccio/admin-gui/views/components/layout/SideBarNav.vue';
import Toast from '@pictaccio/admin-gui/views/components/Toast.vue';
import HeaderMenu from '@pictaccio/admin-gui/views/components/layout/HeaderMenu.vue';
import Prompt from '@pictaccio/admin-gui/views/components/Prompt.vue';
import appService from '@pictaccio/admin-gui/services/app_service';

@Component({
    name: 'App',
    emits: [
        'app-click'
    ],
    components: {
        SvgFilters,
        Offline,
        LoadingSplash,
        SideBarNav,
        Toast,
        HeaderMenu,
        Prompt
    }
})
export default class App extends Vue {
    private theme: Theme = { color: 'dark', type: 'line' };
    private menuVisible = false;
    private currentActivity: string;
    private sideBarNav: SideBarNav;
    private adminMenuVisible = true;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        appService.startChecks();

        try {
            await Promise.all([
                this.$store.dispatch('Config/retrieveConfig'),
                this.$store.dispatch('StoreConfig/getStoreLanguages')
            ]);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }

        if (localStorage.getItem('theme') &&
            JSON.parse(localStorage.getItem('theme'))['color'] &&
            JSON.parse(localStorage.getItem('theme'))['type']) {
            this.theme = JSON.parse(localStorage.getItem('theme'));
        }

        this.$store.watch(() => this.$store.getters['App/authenticated'], async authenticated => {
            if (!authenticated) {
                this.$store.commit('App/commitLogoutReason', 'unattended');
                this.$router.push('/logout');
            } else {
                try {
                    await this.$store.dispatch('StoreConfig/loadStoreConfig');
                } catch (error) {
                    globalToast(this.$t('messages.loadError'), 'error');
                }
            }
        });
    }

    public async mounted(): Promise<void> {
        document.body.setAttribute('data-theme-color', this.theme.color);
        document.body.setAttribute('data-theme-type', this.theme.type);
        document.body.addEventListener('error', event => {
            const target = event.target as HTMLElement;
            if (target.matches('img[provide-fallback]')) {
                target.setAttribute('src', environment.guiUrl + environment.imageFallbackPath);
            }
        }, true);
        this.sideBarNav = (this.$refs['side-bar-nav'] as SideBarNav);
        this.adminMenuVisible = true;
        this.listenUnload();

        (this.$refs['main'] as HTMLElement).addEventListener('submit', (event) => {
            if (event.target instanceof HTMLFormElement && event.target.getAttribute('prevent-submit') === 'true') {
                event.preventDefault();
            }
        });
    }

    /* EVENT HANDLERS */
    private showMenu(view: boolean): void {
        this.menuVisible = view;
        this.adminMenuVisible = view;
    }

    /* PRIVATE */
    private listenUnload(): void {
        addEventListener('beforeunload', event => {
            if (this.$store.getters['UploadStatus/isUploading']) {
                event.preventDefault();
            }
        });
        addEventListener('pagehide', event => {
            if (this.$store.getters['UploadStatus/isUploading']) {
                event.preventDefault();
            }
        });
        addEventListener('visibilitychange', event => {
            if (this.$store.getters['UploadStatus/isUploading']) {
                event.preventDefault();
            }
        });
    }
}
</script>
