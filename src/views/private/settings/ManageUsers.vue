<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.activity-wrapper {
    padding-left: 2rem;
}

input {
    margin: 0 !important;
}

.instructions {
    margin-top: 2rem;
}

.help-box {
    grid-template-columns: 1fr 1fr;
    height: 100%;
    overflow: auto;
}

.user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: transparent;
    gap: 0 2rem;

    label {
        margin: 0.7rem 0 0;
        padding: 0;
    }

    [data-theme-color="dark"] & {
        --color-background-crud-information: var(--color-primary-5);
        --color-icon: var(--color-mix-5-6-step-3);
    }

    [data-theme-color="light"] & {
        --color-background-crud-information: var(--color-primary-3);
        --color-icon: var(--color-mix-7-6-step-3);
    }

    .avatar-container {
        grid-column: 2 / 3;
        grid-row: 1 / 9;
        padding-inline: 5rem;
        padding-top: 2rem;
        font-size: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-icon);

        img {
            width: 20rem;
            height: 20rem;
            object-fit: cover;
            border-radius: 50%;
        }
    }
}

.roles-table {
    tr {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: max-content;
    }

    .activity {
        column-count: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        > div {
            padding: 0.3rem 0.7rem;
            border-radius: $ruler-border-radius;
            background-color: var(--color-background-badge-primary);
            color: var(--color-text-badge-primary);
            white-space: nowrap;
        }
    }
}

.manage-user {
    width: 100%;
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    flex-wrap: wrap;
}

.table-holder:deep(.table-holder) {
    td.roles {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        .role-badge {
            display: block;
            width: 100%;
            white-space: nowrap;
            overflow: clip;
            text-overflow: ellipsis;
        }
    }

    td.createdOn, td.lastLogin {
        white-space: nowrap;
    }
}
</style>

<template>
    <dialog-box v-if="dialogVisible"
                ref="crudDialog"
                @dialog-close="dialogClose('dialogRowSelected')"
                :box-type="'small-box'"
                :title="!dialogRowSelected
                    ? $t(`activities.manageUsers.add.title`)
                    : $t(`activities.manageUsers.edit.title`, {
                        user: guiRows[dialogRowSelected?.rowId]?.name?.firstName
                        ?? $t('activities.manageUsers.single')
                    })"
                :dismiss="true"
                :overlay="true">
        <template #content>
            <form-validator ref="form">
                <fieldset v-if="newUser" class="user">
                    <label for="user-firstname">
                        {{ $t(`activities.manageUsers.edit.firstName`) }}
                    </label>
                    <input id="user-firstname"
                           name="user-firstname"
                           type="text"
                           :value="guiRows[dialogRowSelected?.rowId]?.name?.firstName"
                           required
                           @change="firstNameChange">
                    <label for="user-lastname">
                        {{ $t(`activities.manageUsers.edit.lastName`) }}
                    </label>
                    <input id="user-lastname"
                           name="user-lastname"
                           type="text"
                           :value="guiRows[dialogRowSelected?.rowId]?.name?.lastName"
                           required
                           @change="lastNameChange">
                    <label for="user-email">
                        {{ $t(`activities.manageUsers.edit.email`) }}
                    </label>
                    <input id="user-email"
                           name="user-email"
                           type="email"
                           :value="guiRows[dialogRowSelected?.rowId]?.name?.email"
                           required
                            @change="emailChange">
                    <label for="role-selection">
                        {{ $t(`activities.manageUsers.edit.roles`) }}
                    </label>
                    <dropdown :dropdownName="'role-selection'"
                              :selectMultiple="true"
                              :required="true"
                              :placeholder="$t('activities.manageUsers.edit.placeholderRole')"
                              :parent-element="'undefined'"
                              @change="dropdownChange"
                              :currentSelection="guiRows[dialogRowSelected?.rowId]?.roles">
                        <label v-for="role in roles"
                               :key="role"
                               :value="role.name"
                               :data-value="role.name">
                            {{ $t(role.locale) }}
                        </label>
                    </dropdown>
                    <div class="avatar-container">
                        <img v-if="guiRows[dialogRowSelected?.rowId]?.avatar"
                             :src="this.apiUrl + guiRows[dialogRowSelected?.rowId]?.avatar"/>
                        <font-awesome-icon v-else :icon="['fas', 'user-circle']"/>
                    </div>
                    <information-box :colors="{background: 'var(--color-background-crud-information)'}">
                        {{ $t('activities.manageUsers.edit.inviteExpirationWarning') }}
                    </information-box>
                </fieldset>
            </form-validator>
            </template>
            <template #uiDialog>
                <button v-if="dialogRowSelected" class="btn btn-tertiary">
                    {{ $t(`activities.manageUsers.edit.resetPassword`) }}
                </button>
                <button v-if="dialogRowSelected" class="btn btn-tertiary">
                    {{ $t(`activities.manageUsers.edit.resetTotp`) }}
                </button>
<!--                <button v-if="dialogRowSelected"-->
<!--                        class="btn btn-secondary destructive"-->
<!--                        @click="archiveUserClick">-->
<!--                    {{ $t('generic.ui.archive') }}&nbsp;-->
<!--                    <font-awesome-icon :icon="['fas', 'box-archive']"/>-->
<!--                </button>-->
                <button class="btn btn-primary left-spaced" @click="saveUserClick" style="order: 2; margin-left: 0">
                    {{ !dialogRowSelected ? $t('generic.ui.send') : $t('generic.ui.save') }}
                </button>
<!--                <button class="btn btn-primary" @click="openDialog('helpDialog')">-->
<!--                    <font-awesome-icon :icon="['fas', 'question']"/>-->
<!--                </button>-->
        </template>
    </dialog-box>
    <dialog-box ref="helpDialog" @dialog-close="dialogClose('helpRequested')"
        :title="$t(`activities.manageUsers.help.title`)"
        :dismiss="true" :box-type="'help-box'">
        <template #content>
            <div class="help-box">
                <table class="roles-table">
                    <thead>
                        <tr>
                            <th>{{ $t(`activities.manageUsers.headers.roles`) }}</th>
                            <th>{{ $t(`activities.manageUsers.headers.access`) }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="role in roles" :key="role">
                            <td>{{ $t(role.locale) }}</td>
                            <td class="activity">
                                <template v-for="activity in activities" :key="activity">
                                    <div v-if="activity.access.includes(role.name)">
                                        {{ $t(activity.locale) }}
                                    </div>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </dialog-box>
    <div class="activity-control table-holder">
        <h2 class="h5">{{ $t(`activities.manageUsers.title`) }}</h2>
        <data-table ref="users-table"
                    :datatableName="'users'"
                    :table-data="users"
                    :rows-selectable="true"
                    :set-teleport-pagination="false"
                    :set-teleport-advance="false"
                    @row-selected="rowSelected"
                    @control-edit-user="rowSelected"
                    @control-archive-user="archiveRowClick"
                    @row-selection-changed="usersTableRowSelectionChanged">
            <template v-if="false" #filters>
                <filters-holder
                    :allowedFilters="[{name:'search', pop:true}, {name:'date', pop:false}, {name:'role', pop:true}]"
                    @apply-filters="applyFilters"
                    @filters-visibility-changed="recalculateDatatablePos"/>
            </template>
            <template #context-controls>
                <button class="btn btn-primary" @click="inviteUserClick">
                    {{ $t('activities.manageUsers.addBtn')}}
                </button>
            </template>
            <template #selection-controls>
                <button ref="deactivate-btn"
                        class="btn btn-icon-only"
                        @click="batchDeactivateClick">
                    <tooltip>
                        <template #trigger>
                            <font-awesome-icon :icon="['far', 'box-archive']"/>
                        </template>
                        <template #default>
                            <label>
                                {{ $t(`generic.ui.archive`) }}
                            </label>
                        </template>
                    </tooltip>
                </button>
            </template>
            <template #rows-controls>
                <button class="btn btn-icon-only" name="edit-user">
                    <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                </button>
                <button class="btn btn-icon-only destructive" name="archive-user">
                    <font-awesome-icon :icon="['far', 'box-archive']"/>
                </button>
            </template>
        </data-table>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import { UserInfo } from '@pictaccio/admin-gui/core/types/user_info';
import { UserStatus } from '@pictaccio/admin-gui/core/types/user_status';
import { environment } from '@pictaccio/admin-gui/environment';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { formatDateForUser } from '@pictaccio/admin-gui/utils/user_date';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import FormValidator from '@pictaccio/admin-gui/views/components/widgets/FormValidator.vue';
import InformationBox from '@pictaccio/admin-gui/views/components/widgets/InformationBox.vue';
import SelectionCheckbox from '@pictaccio/admin-gui/views/components/widgets/SelectionCheckbox.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import TooltipBubble from '@pictaccio/admin-gui/views/components/widgets/TooltipBubble.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import InputsDialog from '@pictaccio/admin-gui/views/private/activities/companions/InputsDialog.vue';
import { Component } from 'vue-facing-decorator';

interface Role {
    name: string;
    locale: string;
}

interface GUIUserName {
    firstName: string;
    lastName: string;
    email: string;
}

interface GUIUser {
    id: string;
    name: GUIUserName;
    roles?: string[],
    status?: UserStatus,
    avatar?: string,
    createdOn?: Date,
    lastLogin?: Date
}

type GUIUsers = {[key: string]: GUIUser};
type BatchDeactivateIcon = 'users-slash' | 'users'

@Component({
    name: 'Manage Users',
    components: {
        FormValidator,
        Tooltip,
        TooltipBubble,
        InformationBox,
        SelectionCheckbox,
        InputsDialog,
        FontAwesomeIcon,
        DataTable,
        FiltersHolder: Filters,
        Dropdown,
        DocsLink
    }
})
export default class ManageUsers extends AdminActivities {
    private apiUrl = environment.apiUrl;
    private users = {
        headers: [
            {
                name: 'id',
                locale: 'ID',
                crudOnly: true
            },
            {
                name: 'name',
                locale: 'activities.manageUsers.headers.name',
                size: 'minmax(10rem, 1fr)',
                renderer: value => `
                    <div class="h6">${value.firstName} ${value.lastName}</div>
                    <div>${value.email}</div>
                `
            },
            {
                name: 'roles',
                locale: 'activities.manageUsers.headers.roles',
                size: 'minmax(10rem, 1fr)',
                renderer: value => value.map(item => `<span class="selected role-badge">${item}</span>`).join('')
            },
            {
                name: 'status',
                locale: 'activities.manageUsers.headers.status',
                size: 'minmax(4rem, 1fr)'
            },
            {
                name: 'createdOn',
                locale: 'commonHeaders.created',
                size: 'minmax(10rem, 1fr)',
                renderer: value => formatDateForUser(value)
            },
            {
                name: 'lastLogin',
                locale: 'commonHeaders.lastLogin',
                size: 'minmax(10rem, 1fr)',
                localizeValue: 'na',
                renderer: (value, localizedValue) => {
                    if (!value) {
                        return localizedValue;
                    } else {
                        return formatDateForUser(value);
                    }
                }
            }
        ],
        visibleHeaders: [
            'name',
            'roles',
            'status',
            'createdOn',
            'lastLogin'
        ],
        rows: []
    };
    private roles: Role[];
    private guiRows: GUIUsers;

    private batchDeactivateIcon: BatchDeactivateIcon = 'users-slash';

    private activities = [
        { name: 'seePromoCode', locale: 'activities.manageUsers.activities.seePromoCode', access: ['admin', 'developer'] },
        { name: 'createPromoCode', locale: 'activities.manageUsers.activities.createPromoCode', access: ['admin', 'developer', 'graphicDesigner'] },
        { name: 'editOrders', locale: 'activities.manageUsers.activities.editOrders', access: ['admin', 'developer', 'graphicDesigner'] },
        { name: 'deleteOrders', locale: 'activities.manageUsers.activities.deleteOrders', access: ['admin', 'QALead', 'graphicDesigner'] },
        { name: 'createSessions', locale: 'activities.manageUsers.activities.createSessions', access: ['admin', 'developer'] },
        { name: 'seeSessions', locale: 'activities.manageUsers.activities.seeSessions', access: ['admin', 'developer', 'QALead'] },
        { name: 'deleteSessions', locale: 'activities.manageUsers.activities.deleteSessions', access: ['admin', 'QALead', 'graphicDesigner'] },
        { name: 'editStore', locale: 'activities.manageUsers.activities.editStore', access: ['admin'] }
    ]
    private dialogRowSelected: any = null;
    private newUser: UserInfo = null;

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted();
        this.roles = this.$store.getters['Config/config']?.app?.availableRoles?.map(role => ({
            name: role,
            locale: `activities.manageUsers.roles.${camelize(role)}`
        }));
        try {
            await this.$store.dispatch('User/readUsersList');
            this.guiRows = this.convertToGUI(this.$store.getters['User/usersList']);
            this.users.rows = Object.values(this.guiRows);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    /* EVENT HANDLERS */
    private inviteUserClick(): void {
        this.newUser = {
            info: {
                name: {
                    firstName: '',
                    lastName: ''
                }
            },
            email: '',
            roles: []
        };
        this.openDialog('crudDialog');
    }

    private archiveRowClick(event): void {
        this.dialogRowSelected = event.row;
        this.archiveUserClick();
    }

    private async archiveUserClick(): Promise<void> {
        if (this.$validateCapability('account:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.archive', { item: this.rowSelected.name }),
                title: `${this.$t('generic.ui.archive')} ${this.$t('activities.manageUsers.single')}`
            }) === 'yes' && this.dialogRowSelected) {
            try {
                await this.$store.dispatch('User/archive', this.dialogRowSelected.id);

                this.dialogClose('dialogRowSelected');

                await this.refreshUsers();
            } catch (error) {
                globalToast(this.$t('messages.archiveError'), 'error');
            }
        }
    }

    private dialogClose(dialogClose): void {
        switch (dialogClose) {
        case 'dialogRowSelected':
            this.closeDialog('crudDialog');
            this.newUser = null;
            this.dialogRowSelected = null;
            break;

        case 'helpRequested':
            this.closeDialog('helpDialog');
            break;
        }
        this.$forceUpdate();
    }

    private dropdownChange(event: {selection: string[]}): void {
        if (this.newUser) {
            this.newUser.roles = Array.isArray(event.selection)
                ? event.selection
                : [event.selection];
        }
    }

    public emailChange(event): void {
        if (this.newUser) {
            this.newUser.email = event.target.value;
        }
    }

    public firstNameChange(event): void {
        if (this.newUser) {
            this.newUser.info.name.firstName = event.target.value;
        }
    }

    public lastNameChange(event): void {
        if (this.newUser) {
            this.newUser.info.name.lastName = event.target.value;
        }
    }

    private batchDeactivateClick(): void {
        //
    }

    private async batchDeleteClick(): Promise<void> {
        if (this.$validateCapability('account:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('activities.manageUsers.prompt.destructive',
                    {
                        item: `${(this.$refs['users-table'] as DataTable).getSelectedRows().length.toString()}`
                    }),
                title: `${this.$t('generic.ui.archive')} ${this.$t('activities.manageUsers.multiple')}`
            }) === 'yes') {
            (this.$refs['users-table'] as DataTable).getSelectedRows().forEach(row => {
                this.dialogRowSelected = row;
                this.archiveUserClick();
            })
        }
    }

    private recalculateDatatablePos(): void {
        this.$nextTick(() => {
            (this.$refs['users-table'] as DataTable).recalculateDatatablePos()
        });
    }

    private rowSelected(event: any): void {
        this.newUser = {
            info: {
                name: {
                    firstName: event.row.name.firstName,
                    lastName: event.row.name.lastName
                }
            },
            email: event.row.name.email,
            roles: event.row.roles
        };
        this.dialogRowSelected = event;
        this.$nextTick(() => {
            this.openDialog('crudDialog');
            this.$forceUpdate();
        });
    }

    private async saveUserClick(event: MouseEvent): Promise<void> {
        if (!(this.$refs['form'] as FormValidator).validate()) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        try {
            if (this.dialogRowSelected) {
                await this.$store.dispatch('User/edit', {
                    id: this.dialogRowSelected.rowId,
                    name: {
                        firstName: this.newUser.info.name.firstName,
                        lastName: this.newUser.info.name.lastName
                    },
                    email: this.newUser.email,
                    roles: this.newUser.roles
                });

                globalToast(this.$t('activities.manageUsers.toast.editSuccess'), 'success');
            } else if (this.newUser) {
                await this.$store.dispatch('Auth/initiateInvite', {
                    name: {
                        firstName: this.newUser.info.name.firstName,
                        lastName: this.newUser.info.name.lastName
                    },
                    email: this.newUser.email,
                    roles: this.newUser.roles
                });

                globalToast(this.$t('activities.manageUsers.toast.inviteSuccess'), 'success');

                await this.$store.dispatch('User/readUsersList');
            }
        } catch {
            globalToast(this.$t('activities.manageUsers.toast.error'), 'error');
        }

        this.dialogClose('dialogRowSelected');

        await this.refreshUsers();
    }

    private usersTableRowSelectionChanged(): void {
        const selection = (this.$refs['users-table'] as DataTable).getSelectedRows();

        selection.every(i => i['status'] === 'disabled')
            ? this.batchDeactivateIcon = 'users-slash'
            : this.batchDeactivateIcon = 'users';
    }

    /* PRIVATE */
    private convertToGUI(users: UserInfo[]): GUIUsers {
        const guiUser: GUIUsers = {};

        for (const user of users) {
            guiUser[user.id] = {
                id: user.id,
                name: {
                    firstName: user.info?.name?.firstName,
                    lastName: user.info?.name?.lastName,
                    email: user.email
                },
                status: user.status,
                roles: user.roles,
                avatar: user.avatar,
                createdOn: user.createdOn,
                lastLogin: user.lastLogin
            };
        }

        return guiUser;
    }

    private async refreshUsers(): Promise<void> {
        this.guiRows = this.convertToGUI(this.$store.getters['User/usersList']);
        this.users.rows = Object.values(this.guiRows);
        this.$forceUpdate();
    }
}
</script>
