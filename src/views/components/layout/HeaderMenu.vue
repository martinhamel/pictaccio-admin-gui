<style lang="scss" scoped>
.header {
    grid-area: header;
    display: grid;
    grid-template-columns: subgrid;
    right: $ruler-scrollbar;
    background-color: var(--color-background-header-1);
    height: $ruler-header-height;

    [data-theme-color="dark"] & {
        --color-background-header-1: var(--color-mix-6-5-step-2);
        --color-background-header-2: var(--color-mix-6-5-step-1);
        --color-background-header-list: transparent;
        --color-background-header-list-hover: hsla(
                var(--color-primary-1-h),
                20%,
                var(--color-primary-1-l),
                0.1
        );
    }

    [data-theme-color="light"] & {
        --color-background-header-1: var(--color-background-base);
        --color-background-header-2: var(--color-mix-4-7-step-2);
        --color-background-header-list: transparent;
        --color-background-header-list-hover: hsla(
                var(--color-primary-4-h),
                30%,
                var(--color-primary-4-l),
                0.25
        );
    }
}

.header-space {
    display: flex;
    justify-content: flex-end;
}

.breadcrumbs-box {
    margin-left: 2rem;
    margin-right: auto;
    font-size: 2rem;
}

.user-box {
    position: relative;
    padding: 0;

    .h4 {
        margin: 0;
    }

    .user-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        box-sizing: content-box;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
        }
    }

    li {
        background-color: var(--color-background-header-list);

        &:hover {
            background-color: var(--color-background-header-list-hover);
        }

        >a {
            justify-content: space-between;
            gap: 2rem;
            width: 100%;
            height: max-content;
        }
    }
}

.notification-box {
    @extend .h5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    cursor: pointer;
    position: relative;
}

.header-content-box {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem 1.5rem 2rem;
}

.selected {
    background-color: var(--color-background-header-2);
    //pointer-events: none;
}
.notification-cue {
    position: absolute;
    top: 1.7rem;
    right: 1.3rem;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    font-size: 1rem;
    text-align: center;
    line-height: 1.2rem;
    --font-weight: 600;
    background-color: var(--color-semantic-important-info);
}
</style>

<template>
    <user-profile ref="profile-dialog"/>
    <header class="header">
        <div class="side-nav-space"></div>
        <div class="header-space">
            <div class="breadcrumbs-box"><breadcrumbs store="GlobalBreadcrumb"/></div>
            <div class="notification-box" :class="$store.getters['Notifications/openedNotification'] ? 'selected' : ''">
                <div class="header-content-box" @click="showDropdownClick('notification')">
                    <font-awesome-icon :icon="['fas', 'bell']"/>
                    <i v-if="$store.getters['Notifications/notifications'].length > 0"
                       class="notification-cue">{{ $store.getters['Notifications/notifications'].length }}</i>
                </div>
                <header-dropdown :is-open="dropdownVisible.notification" ref="notification">
                    <notification-container @notification-clicked="showDropdownClick('notification', true)"/>
                </header-dropdown>
            </div>
            <div class="user-box" :class="dropdownVisible.user ? 'selected' : ''">
                <div class="header-content-box" @click="showDropdownClick('user')">
                    <h6 class="h4">
                        {{ $store.getters['UserInfo/userNameInfo']?.firstName }}
                    </h6>
                    <div class="user-icon">
                        <fallback-image :src="$store.getters['UserInfo/userAvatarPath']"
                                        :fallback="['fas', 'user']"/>
                    </div>
                </div>
                <header-dropdown :isOpen="dropdownVisible.user">
                    <li><a @click="openDialog"><span>{{ $t('headerMenu.profile') }}</span></a></li>
                    <li v-if="featureFlags._devThemes"><a @click="themeClick">
                    <span>
                        {{ $t('headerMenu.theme') }}
                    </span>
                        <theme-selector ref="theme-selector"/>
                    </a></li>
                    <li><a @click="localeClick">
                    <span>
                        {{ $t('headerMenu.locale') }}
                    </span>
                        <locale-selector ref="locale-selector" @locale-changed="showDropdownClick('user')"/>
                    </a></li>
                    <li><router-link to="/logout">{{ $t('headerMenu.signOut') }}</router-link></li>
                </header-dropdown>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { environment } from '@pictaccio/admin-gui/src/environment';
import Breadcrumbs from '@pictaccio/admin-gui/src/views/components/widgets/Breadcrumbs.vue';
import FallbackImage from '@pictaccio/admin-gui/src/views/components/widgets/FallbackImage.vue';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HeaderDropdown from '@pictaccio/admin-gui/src/views/components/layout/HeaderDropdown.vue';
import LocaleSelector from '@pictaccio/admin-gui/src/views/components/widgets/LocaleSelector.vue';
import NotificationContainer from '@pictaccio/admin-gui/src/views/components/NotificationContainer.vue';
import ThemeSelector from '@pictaccio/admin-gui/src/views/components/widgets/ThemeSelector.vue';
import UserProfile from '@pictaccio/admin-gui/src/views/private/profile/UserProfile.vue';

const CLOSING_TIMEOUT = 300;

@Component({
    name: 'HeaderMenu',
    components: {
        FallbackImage,
        Breadcrumbs,
        FontAwesomeIcon,
        HeaderDropdown,
        ThemeSelector,
        LocaleSelector,
        NotificationContainer,
        UserProfile
    }
})
export default class HeaderMenu extends Vue {
    private dropdownVisible = {
        user: false,
        notification: false
    };
    private userProfileComponent: string;

    private hasChanges = false;
    private secretsAreValid = true;
    private closing = {
        user: false,
        notification: false
    };

    private featureFlags = environment.features;

    /* LIFECYCLE */
    public mounted(): void {
        try {
            Promise.all([
                this.$store.dispatch('UserInfo/readUserName'),
                this.$store.dispatch('UserInfo/readAvatarPath')
            ]);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }

        this.$store.watch(() => this.$store.getters['Notifications/openedNotification'], (show) => {
            if (show && !this.dropdownVisible.notification) {
                this.closing.notification = false;
                this.showDropdownClick('notification');
            }
        })
    }

    /* EVENT HANDLERS */
    public openDialog(): void {
        (this.$refs['profile-dialog'] as UserProfile).openDialog();
    }

    private localeClick(): void {
        this.closing.user = false;
        this.$nextTick(() => this.showDropdownClick('user'));
    }

    private showDropdownClick(dropdown: string, fromNotification = false): void {
        if (this.closing[dropdown]) {
            return;
        }

        if (dropdown === 'notification') {
            if (this.dropdownVisible.notification && fromNotification) {
                return;
            }
            this.$store.dispatch('Notifications/openNotification', !this.dropdownVisible.notification);
        }
        if (!this.dropdownVisible[dropdown]) {
            const listenOnce = () => document.body.addEventListener('click', handler, {
                capture: true,
                once: true
            });
            const handler = (event) => {
                const notification = this.$refs['notification'] as HeaderDropdown;
                if (notification && notification.$el.contains(event.target)) {
                    listenOnce();
                    return;
                }

                this.closeMenu(dropdown);
            };

            for (const item in this.dropdownVisible) {
                this.dropdownVisible[item] = false;
            }
            this.dropdownVisible[dropdown] = true;
            listenOnce();
        } else {
            this.dropdownVisible[dropdown] = false;
        }
    }

    private themeClick(): void {
        this.closing.user = false;
        this.$nextTick(() => this.showDropdownClick('user'));
    }

    /* PRIVATE */
    private closeMenu(dropdown: string) {
        this.closing[dropdown] = true;
        this.dropdownVisible.user = false;
        this.dropdownVisible.notification = false;
        this.$store.dispatch('Notifications/openNotification', false);

        setTimeout(() => this.closing[dropdown] = false, CLOSING_TIMEOUT);
    }
}
</script>
