<style lang="scss" scoped>
.user-profile-title {
    display: inline-flex;
    gap: 1rem;
}

.user-profile {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;

    @include breakpoint($small) {
        grid-template-columns: 1fr;
        gap: calc(#{$grid-gap} * 2);
    }

    .user-profile-avatar-column {
        margin-inline: 3rem;
    }
}

.user-profile-form {
    display: grid;
    position: relative;
    grid-template-columns: min-content 1fr;
    gap: $grid-gap;
    white-space: nowrap;

    >input {
        grid-column: 2 / 3;
        margin-right: auto !important;
    }

    .relative-time-label {
        grid-column: 1 / -1;

        input[type='checkbox'] {
            margin-right: 0;
        }
    }
}

:deep(.top-spaced),
.top-spaced {
    margin-top: 5rem !important;
}

.dropdown-input {
    margin-left: auto;
    margin-right: auto;
}

.avatar-container {
    width: 21rem;
    aspect-ratio: 1/1;
    background-color: var(--color-background-overlay-1);
    color: var(--color-mix-6-7-step-2);
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20rem;
    overflow: hidden;
    position: relative;

    .legend {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-text-normal);
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    &:hover {
        .legend {
            opacity: 0.6;
        }
    }

    img {
        min-width: 100%;
        min-height: 100%;
        max-width: inherit;
        max-height: inherit;
        object-fit: cover;
    }
}

.more-info {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: $grid-gap;
}

.roles-container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(#{$grid-gap} / 2);

    .role {
        background-color: var(--color-background-badge-primary);
        color: var(--color-text-badge-primary);
        font-size: 1.5rem;
        height: min-content;
        padding: 0.2rem 0.5rem;
        border-radius: $ruler-border-radius;
    }
}

.btn-primary.save {
    order: 11;
}
</style>

<template>
    <dialog-box ref="profile-dialog"
                v-if="dialogVisible"
                @dialog-close="closeDialog"
                :dismiss="true"
                :overlay="true"
                :box-type="'small-box'">
        <template #title>
            <h5 class="h5 user-profile-title">
                <font-awesome-icon :icon="['fas', 'user']"/>
                {{ $t('activities.titles.userProfile') }}
            </h5>
        </template>
        <template #content>
            <div class="user-profile">
                <div>
                    <form class="user-profile-form" ref="user-profile-form" prevent-submit="true">
                        <label for="user-profile-first-name">{{ $t('activities.userProfile.inputFirstName') }}</label>
                        <input type="text"
                               id="user-profile-first-name"
                               name="first-name"
                               v-model="firstName">
                        <label for="user-profile-last-name">{{ $t('activities.userProfile.inputLastName') }}</label>
                        <input type="text"
                               id="user-profile-last-name"
                               name="last-name"
                               v-model="lastName">
                        <label for="user-profile-timezone">{{ $t('activities.userProfile.inputTimeZone') }}</label>
                        <dropdown :dropdownName="'user-profile-timezone'"
                                  :current-selection="[timezone]"
                                  :parent-element="'undefined'"
                                  @change="selectTimeZone">
                            <label value="America/St_Johns">{{ $t('activities.userProfile.cities.saintJohn') }}</label>
                            <label value="America/Halifax">{{ $t('activities.userProfile.cities.halifax') }}</label>
                            <label value="America/Toronto">{{ $t('activities.userProfile.cities.toronto') }}</label>
                            <label value="America/Winnipeg">{{ $t('activities.userProfile.cities.winnipeg') }}</label>
                            <label value="America/Regina">{{ $t('activities.userProfile.cities.regina') }}</label>
                            <label value="America/Edmonton">{{ $t('activities.userProfile.cities.edmonton') }}</label>
                            <label value="America/Vancouver">{{ $t('activities.userProfile.cities.vancouver') }}</label>
                            <label value="America/Iqaluit">{{ $t('activities.userProfile.cities.iqaluit') }}</label>
                            <label value="America/Yellowknife">{{ $t('activities.userProfile.cities.yellowknife') }}</label>
                            <label value="America/Whitehorse">{{ $t('activities.userProfile.cities.whitehorse') }}</label>
                            <label value="America/Montreal">{{ $t('activities.userProfile.cities.montreal') }}</label>
                        </dropdown>
                        <label for="user-profile-time-format">{{ $t('activities.userProfile.inputTimeFormat') }}</label>
                        <dropdown :dropdownName="'user-profile-time-format'"
                                  :current-selection="[timeFormat]"
                                  :parent-element="'undefined'"
                                  @change="selectTimeFormat">
                            <label value="hh:mm a">{{ $t('activities.userProfile.time.hhmma') }}</label>
                            <label value="HH:mm">{{ $t('activities.userProfile.time.HHmm') }}</label>
                        </dropdown>
                        <label for="user-profile-date-format">{{ $t('activities.userProfile.inputDateFormat') }}</label>
                        <dropdown :dropdownName="'user-profile-date-format'"
                                  :current-selection="[dateFormat]"
                                  :parent-element="'undefined'"
                                  @change="selectDateFormat">
                            <label value="yy/MM/dd">{{ $t('activities.userProfile.date.yMD') }}</label>
                            <label value="dd/MM/yy">{{ $t('activities.userProfile.date.dMY') }}</label>
                            <label value="MM/dd/yy">{{ $t('activities.userProfile.date.mDY') }}</label>
                        </dropdown>
                        <label class="relative-time-label">
                            <input type="checkbox"
                                   class="no-spacing"
                                   name="user-profile-relative-timestamp"
                                   v-model="useRelativeTime"
                                   @click="useRelativeTimeClick">
                            {{ $t('activities.userProfile.relativeTimestamps') }}
                        </label>
                    </form>
                </div>
                <div class="user-profile-avatar-column">
                    <div class="avatar-container" @click="changeAvatarClick">
                        <div class="legend h6">
                            {{ $t('generic.ui.edit') }}
                        </div>
                        <img v-if="$store.getters['UserInfo/hasAvatar'] || newAvatar"
                             :src="displayedAvatar"/>
                        <font-awesome-icon v-else :icon="['fas', 'user-circle']"/>
                    </div>
                </div>
            </div>
        </template>
        <template #uiDialog>
            <button @click="changePasswordClick"
                    type="button"
                    class="btn btn-primary">
                {{ $t('generic.ui.changePassword') }}
            </button>
            <button @click="resetTotpClick"
                    type="button"
                    class="btn btn-primary right-spaced">
                {{ $t('generic.ui.resetTotp') }}
            </button>
            <button class="btn btn-primary save" @click="confirmChangeUserProfile">
                {{ $t('generic.ui.save') }}
            </button>
        </template>
    </dialog-box>
    <totp-dialog ref="totp-dialog"/>
    <change-password-dialog ref="password-dialog"/>
    <avatar-dialog ref="avatar-dialog" @avatar-uploaded="avatarChange"/>
</template>

<script lang="ts">
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import DialogBox from '@pictaccio/admin-gui/src/views/components/layout/DialogBox.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import ChangePasswordDialog from '@pictaccio/admin-gui/src/views/private/profile/ChangePasswordDialog.vue';
import TotpDialog from '@pictaccio/admin-gui/src/views/private/profile/TotpDialog.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Vue } from 'vue-facing-decorator';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import ImageUpload from '@pictaccio/admin-gui/src/views/components/widgets/ImageUpload.vue';
import AuthenticatorInput from '@pictaccio/admin-gui/src/views/components/widgets/AuthenticatorInput.vue';
import PasswordRequirements from '@pictaccio/admin-gui/src/views/components/PasswordRequirements.vue';
import Secret from '@pictaccio/admin-gui/src/views/components/widgets/Secret.vue';
import AvatarDialog from '@pictaccio/admin-gui/src/views/private/profile/AvatarDialog.vue';
import { UserInfo } from '@pictaccio/admin-gui/src/core/types/user_info';

@Component({
    name: 'User Profile',
    components: {
        Tooltip,
        ChangePasswordDialog,
        TotpDialog,
        AvatarDialog,
        Secret,
        ImageUpload,
        AuthenticatorInput,
        FontAwesomeIcon,
        Dropdown,
        PasswordRequirements
    }
})
export default class UserProfile extends Vue {
    private dialogVisible = false;
    private userProfileForm: Element;

    private firstName = '';
    private lastName = '';
    private sessionInfo: UserInfo = {};
    // Date Time related variables
    private timeFormat: string;
    private dateFormat: string;
    private timezone: string;
    private useRelativeTime: boolean;
    private dateTimeWasChanged = false;

    // Avatar related variables
    private avatarWasChanged = false;
    private displayedAvatar: string;
    private newAvatar: File;

    public openDialog(): void {
        this.dialogVisible = true;
        this.$nextTick(() => {
            (this.$refs['profile-dialog'] as DialogBox).openDialog();
            this.userProfileForm = this.$refs['user-profile-form'] as Element;
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        try {
            await Promise.all([
                this.$store.dispatch('UserInfo/readUserName'),
                this.$store.dispatch('UserInfo/readAvatarPath'),
                this.$store.dispatch('UserPreference/readUserSession')
            ]);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
            return;
        }

        // Initialize username
        this.firstName = this.$store.getters['UserInfo/userNameInfo']?.firstName;
        this.lastName = this.$store.getters['UserInfo/userNameInfo']?.lastName;
        // Initialize avatar
        this.displayedAvatar = this.$store.getters['UserInfo/userAvatarPath'];
        this.sessionInfo = this.$store.getters['UserPreference/userSession'];
        this.timeFormat = this.$store.getters['UserPreference/timeFormat'];
        this.dateFormat = this.$store.getters['UserPreference/dateFormat'];
        this.timezone = this.$store.getters['UserPreference/timezone'];
        this.useRelativeTime = this.$store.getters['UserPreference/useRelativeTime'];
    }

    /* EVENT HANDLERS */
    private closeDialog(): void {
        (this.$refs['profile-dialog'] as DialogBox).closeDialog();
        this.dialogVisible = false;
    }

    private avatarChange(avatarUrl: string, avatarFile: File): void {
        this.displayedAvatar = avatarUrl;
        this.newAvatar = avatarFile;
        this.avatarWasChanged = true;
    }

    private resetTotpClick(): void {
        (this.$refs['totp-dialog'] as TotpDialog).openDialog();
    }

    // Date Time Functions
    private selectDateFormat(result: {selection: string, target: string}): void {
        this.dateFormat = result.selection;
        this.dateTimeWasChanged = true;
    }
    private selectTimeFormat(result: {selection: string, target: string}): void {
        this.timeFormat = result.selection;
        this.dateTimeWasChanged = true;
    }
    private selectTimeZone(result: {selection: string, target: string}): void {
        this.timezone = result.selection;
        this.dateTimeWasChanged = true;
    }
    private useRelativeTimeClick(event): void {
        this.dateTimeWasChanged = true;
    }

    // Avatar related functions
    private changeAvatarClick(): void {
        (this.$refs['avatar-dialog'] as AvatarDialog).openDialog();
    }

    private changePasswordClick(): void {
        (this.$refs['password-dialog'] as ChangePasswordDialog).openDialog();
    }

    public async confirmChangeUserProfile(): Promise<void> {
        try {
            if (this.dateTimeWasChanged) {
                // save time zone
                await this.$store.dispatch('UserPreference/setDateFormat', this.dateFormat);
                // save time format
                await this.$store.dispatch('UserPreference/setTimeFormat', this.timeFormat);
                // save date format
                await this.$store.dispatch('UserPreference/setTimeZone', this.timezone);
                await this.$store.dispatch('UserPreference/setUseRelativeTime', this.useRelativeTime);
            }
            // save username change
            if (this.firstName !== this.$store.getters['UserInfo/userNameInfo'].firstName ||
                this.lastName !== this.$store.getters['UserInfo/userNameInfo'].lastName) {
                const name = {
                    firstName: this.firstName,
                    lastName: this.lastName
                };
                await this.$store.dispatch('UserInfo/changeUserName', name);
            }
            await this.$store.dispatch('UserInfo/readUserName');

            // save avatar change
            if (this.avatarWasChanged) {
                await this.$store.dispatch('UserInfo/changeAvatarImage', this.newAvatar);
            }
            await this.$store.dispatch('UserInfo/readAvatarPath');

            globalToast(this.$t('messages.saveSuccess'), 'success');

            this.closeDialog();
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }
}
</script>
