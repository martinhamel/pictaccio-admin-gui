<style lang="scss" scoped>
#side-bar-nav {
    grid-area:  header-start / nav-start / nav-end / nav-end;
    position: relative;
    display: flex;
    flex-direction: column;
    height: inherit;
    padding: $list-padding .1rem;
    background-color: var(--color-background-sidenav-1);

    [data-theme-color="dark"] & {
        --color-background-sidenav-1: var(--color-primary-5);
        --color-background-sidenav-2: var(--color-background-base);
        --color-background-sidenav-list: transparent;
        --color-text-sidenav-list: var(--color-primary-2);
        --color-background-sidenav-list-hover: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.1
        );
        --color-text-sidenav-list-hover: var(--color-mix-2-7-step-1);
        --color-background-sidenav-list-active: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.3
        );
        --color-text-sidenav-list-active: var(--color-primary-8);
        --color-background-sidenav-handle: var(--color-primary-5);
        --color-border-sidenav-handle: var(--color-mix-5-2-step-3);
        --color-text-sidenav-handle: var(--color-primary-2);
        --color-text-sidenav-see-more: var(--color-primary-1);
    }

    [data-theme-color="light"] & {
        --color-background-sidenav-1: oklch(from var(--color-primary-5) calc(l + 0.12) calc(c + 0.02) h);
        --color-background-sidenav-2: var(--color-background-base);
        --color-background-sidenav-list: transparent;
        --color-text-sidenav-list: var(--color-primary-2);
        --color-background-sidenav-list-hover: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.1
        );
        --color-text-sidenav-list-hover: var(--color-mix-2-7-step-1);
        --color-background-sidenav-list-active: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.3
        );
        --color-text-sidenav-list-active: var(--color-primary-8);
        --color-background-sidenav-handle: var(--color-primary-5);
        --color-border-sidenav-handle: var(--color-mix-5-2-step-3);
        --color-text-sidenav-handle: var(--color-primary-2);
        --color-text-sidenav-see-more: var(--color-primary-1);
    }

    .separator {
        width: calc(100% + #{$list-padding});
        left: -$list-padding;
        color: var(--color-background-sidenav-2);
        background-color: currentColor;
        opacity: 0.3;
        border-style: solid;
    }

    hr {
        @extend .separator;
        position: relative;
        margin-top: 3rem;
    }

    > hr {
        margin-top: 0;
    }

    &:hover {
        .menu-handle {
            opacity: 1;
        }
    }
}

.menu-handle {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--color-background-sidenav-handle);
    border: 3px solid var(--color-border-sidenav-handle);
    border-radius: 3rem;
    padding: unset;
    cursor: pointer;
    right: -1.25rem;
    top: 4.5rem;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    filter: brightness(100%);
    transition: opacity 0.3s linear, filter 0.3s linear;

    &:hover {
        filter: brightness(120%);
    }

    .shorten & {
        transform: rotate(180deg);
        transform-origin: 50% 50%;
        top: 5rem;
    }

    .arrow {
        svg {
            font-size: calc($icon-font-size * 0.7);
            margin-right: -0.2rem;
            color: var(--color-text-sidenav-handle);
            display: flex;
            position: relative;
        }
    }

    @include breakpoint($small) {
        right: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        border: 0px solid transparent;
        overflow: hidden;
        border-radius: $ruler-border-radius;

        &::before,
        &::after {
            content: '';
            background-color: var(--color-text-sidenav-handle);
            position: absolute;
            width: .3rem;
            height: 4rem;
            left: 50%;
            top: 50%;
            transform-origin: 50% 50%;
        }
        &::before {
            transform: translate(-50%, -50%) rotateZ(45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotateZ(-45deg);
        }
    }
}

.logo {
    padding-inline: 1rem;
    padding-bottom: 1rem;

    .shorten & {
        padding-inline: unset;
    }

    a {
        display: flex;
        justify-content: center;

        :deep(svg) {
            width: 100%;
        }
    }
}

li a,
.view-more,
.settings {
    padding-block: 0.7rem;
    padding-inline: $item-expended-padding;
    display: grid;
    grid-template-columns: $icon-pastille-size auto;
    align-items: end;
    gap: $item-padding;
    cursor: pointer;

    .shorten & {
        gap: 0;
        padding: $item-padding;
    }

    label {
        margin: 0;
        opacity: 0.85;
    }

    .h5 {
        margin: 0 0 0.1rem;
    }

    label {
        display: flex;
        width: $icon-pastille-size;
        height: $icon-pastille-size;
        align-items: center;
        justify-content: center;
        color: var(--color-text-sidenav-list);
        padding: 0;

        svg {
            font-size: $icon-font-size;
        }
    }

    .h5 {
        font-size: 2rem;
        --font-weight: 400;
        color: var(--color-text-sidenav-list);
        width: max-content;
        overflow: hidden;

        .shorten & {
            width: 0;
        }
    }
}

.view-more {
    color: var(--color-text-sidenav-see-more);

    label {
        background-color: unset;
        color: inherit;
    }

    h5 {
        color: inherit;
    }
}

.navigation-menu {
    position: relative;
    height: auto;
    margin: 0 0 7rem;
    overflow: auto;

    .shipping-icon {
        padding-left: 0.3rem;
    }
    li {
        font-size: 2rem;
        margin-top: 0.5rem;
        overflow: hidden;
        background-color: var(--color-background-sidenav-list);

        &:not(.view-more):hover {
            background-color: var(--color-background-sidenav-list-hover);

            label {
               color: var(--color-text-sidenav-list-hover);
            }
            .h5 {
                color: var(--color-text-sidenav-list-hover);
            }
        }

        &.current {
            background-color: var(--color-background-sidenav-list-active);
            cursor: default;

            &.wrapped {
                height: unset;
                margin-top: initial;
            }

            label {
                color: var(--color-text-sidenav-list-active);
            }
            h5 {
                color: var(--color-text-sidenav-list-active);
            }
        }

        &.wrapped {
            height: 0;
            margin-top: 0;
        }

        &.view-wrapped label {
            transform: rotate(180deg);
        }

        &.hr {
            pointer-events: none;
        }

        .shorten & {
            .page-name {
                display: none;
            }
        }
    }
}

.settings {
    position: absolute;
    font-size: 2.4rem;
    --font-weight: 600;
    inset: auto 0 0;
    margin: $list-padding .1rem;
    background-color: var(--color-background-sidenav-list);
    color: var(--color-text-sidenav-list);

    &:hover {
        background-color: var(--color-background-sidenav-list-hover);
        color: var(--color-text-sidenav-list-hover);
    }

    hr {
        @extend .separator;
        position: absolute !important;
        top: -1rem;
        margin: 0 !important;
    }

    .h5 {
        --font-weight: 600;
    }
}
</style>

<template>
    <setting-dialog ref="setting-dialog"/>
    <nav id="side-bar-nav" ref="side-bar-nav" :class="shortenNav ? 'shorten' : ''">
        <div class="logo">
            <router-link to="/"><logo ref="nav-logo" type="name_green"/></router-link>
        </div>
        <hr>
        <ul ref="navigation-menu" class="navigation-menu">
            <li v-if="featureFlags._debug"
                :class="currentActivity === 'debug' ? 'current' : ''">
                <router-link to="/debug">
                    <label>
                        <font-awesome-icon :icon="['fas', 'bug']"/>
                    </label>
                    <h5 class="h5 page-name">Debug</h5>
                </router-link>
            </li>
            <li :class="currentActivity === 'dashboard' ? 'current' : ''">
                <router-link to="/">
                    <label>
                        <font-awesome-icon :icon="['fas', 'home']"/>
                    </label>
                    <h5 class="h5 page-name">{{ $t('activities.titles.dashboard') }}</h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('order:read')"
                :class="currentActivity === 'orders' ? 'current' : ''">
                <router-link to="/activities/orders">
                    <label>
                        <font-awesome-icon :icon="['fas', 'receipt']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.orders`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('session:read')"
                :class="currentActivity === 'manageSessions' ? 'current' : ''">
                <router-link to="/activities/manage-sessions">
                    <label>
                        <font-awesome-icon :icon="['fas', 'camera']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.manageSessions`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('product:read') && $validateCapability('product:create')"
                :class="[currentActivity === 'products' ? 'current' : '', viewMore ? '' : 'wrapped']">
                <router-link to="/activities/products">
                    <label>
                        <font-awesome-icon :icon="['fas', 'tags']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.products`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('campaign:read') && $validateCapability('campaign:create')"
                :class="[currentActivity === 'campaign' ? 'current' : '', viewMore ? '' : 'wrapped']">
                <router-link to="/activities/campaign">
                    <label>
                        <font-awesome-icon :icon="['fas', 'megaphone']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.campaign`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('shipping:read') && $validateCapability('shipping:create')"
                :class="[currentActivity === 'shipping' ? 'current' : '', viewMore ? '' : 'wrapped']">
                <router-link to="/activities/shipping-options">
                    <label class="shipping-icon">
                        <font-awesome-icon :icon="['fas', 'truck']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.shipping`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('background:read') && $validateCapability('background:create')"
                :class="[currentActivity === 'backgrounds' ? 'current' : '', viewMore ? '' : 'wrapped']">
                <router-link to="/activities/backgrounds">
                    <label>
                        <font-awesome-icon :icon="['fas', 'image']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.backgrounds`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('session:read') && $validateCapability('session:create')"
                :class="[currentActivity === 'workflows' ? 'current' : '', viewMore ? '' : 'wrapped']">
                <router-link to="/activities/workflows">
                    <label>
                        <font-awesome-icon :icon="['fas', 'cabinet-filing']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.workflows`)}}
                    </h5>
                </router-link>
            </li>
            <li v-if="$validateCapability('report:read') && featureFlags.accessReports"
                :class="[currentActivity === 'reports' ? 'current' : '', viewMore ? '' : 'wrapped']">
                <router-link to="/activities/report-sales">
                    <label>
                        <font-awesome-icon :icon="['fas', 'file-chart-column']"/>
                    </label>
                    <h5 class="h5 page-name">
                        {{ $t(`activities.titles.reports`)}}
                    </h5>
                </router-link>
            </li>
            <li class="hr"><hr></li>
            <li v-if="shouldShowViewMore"
                class="view-more"
                :class="viewMore ? 'view-wrapped' : ''"
                @click="viewMoreClick">
                <label>
                    <font-awesome-icon
                        :icon="['fas', 'chevron-down']"/>
                </label>
                <h5 class="h5 page-name">{{ viewMore ? $t('generic.ui.viewLess') : $t('generic.ui.viewMore') }}</h5>
            </li>
        </ul>
        <div v-if="$validateCapability('store-config:read')" class="settings"
             @click="openSettingDialog">
            <hr>
            <label><font-awesome-icon :icon="['fas', 'cog']"/></label>
            <h5 class="h5 page-name">{{ $t('activities.titles.settings') }}</h5>
        </div>
        <i class="menu-handle" @click="toggleMenu">
            <span class="arrow">
                <font-awesome-icon
                    :icon="['fas', 'chevron-left']"/>
            </span>
        </i>
    </nav>
</template>

<script lang="ts">
import { environment } from '@pictaccio/admin-gui/environment/environment';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Logo from '@pictaccio/admin-gui/views/components/Logo.vue';
import SettingDialog from '@pictaccio/admin-gui/views/components/layout/SettingDialog.vue';

@Component({
    name: 'Side Bar Nav',
    components: {
        SettingDialog,
        FontAwesomeIcon,
        Logo
    },
    expose: [
        'width'
    ]
})
export default class SideBarNav extends Vue {
    private currentActivity = '';
    private viewMore = false;
    private shortenNav = false;
    private featureFlags = environment.features;
    private shouldShowViewMore = false;

    public get width(): number {
        return this.$refs['side-bar-nav']
            ? (this.$refs['side-bar-nav'] as HTMLElement).offsetWidth
            : 0;
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.$store.watch(() => this.$store.getters['CurrentActivity/currentActivity'],
            () => this.currentActivity = this.$store.getters['CurrentActivity/currentActivity']);
        this.currentActivity = this.$store.getters['CurrentActivity/currentActivity'];
        // this.observeResize();
        this.viewMore = this.$store.getters['Config/viewMore'];
        this.shortenNav = this.$store.getters['Config/shortNav'];
        (this.$refs['nav-logo'] as Logo).setType(this.shortenNav ? 'icon_green' : 'name_green');

        const menu: HTMLUListElement = this.$refs['navigation-menu'] as HTMLUListElement;

        this.shouldShowViewMore = menu.querySelectorAll('li.wrapped').length !== 0;
    }

    /* EVENT HANDLERS */
    private openSettingDialog(): void {
        (this.$refs['setting-dialog'] as SettingDialog).openSettingDialog();
    }

    private toggleMenu(): void {
        this.shortenNav = !this.shortenNav;
        this.$store.commit('Config/commitShortNav', this.shortenNav);
        (this.$refs['nav-logo'] as Logo).setType(this.shortenNav ? 'icon_green' : 'name_green');
    }

    // private observeResize(): void {
    //     const observer = new ResizeObserver(() => {
    //         this.$nextTick(() => {
    //             document.body.style.setProperty('--nav-width', `${this.width}px`);
    //         });
    //     });
    //
    //     observer.observe(this.$refs['side-bar-nav'] as HTMLElement);
    // }

    private viewMoreClick(): void {
        this.viewMore = !this.viewMore;
        this.$store.commit('Config/commitViewMore', this.viewMore);
    }
}

</script>
