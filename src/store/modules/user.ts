import { UserCapabilities } from '@pictaccio/admin-gui/core/types/user_capabilities';
import { UserInfo } from '@pictaccio/admin-gui/core/types/user_info';
import { UserPermissions } from '@pictaccio/admin-gui/core/types/user_permissions';
import { UserRole } from '@pictaccio/admin-gui/core/types/user_role';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import userService from '@pictaccio/admin-gui/services/user_service';

@Module({ namespaced: true })
export default class User extends VuexModule {
    public users: UserInfo[] = [];
    public internalCapabilities: UserCapabilities = {}
    public internalRoles: UserRole[] = [];

    public get usersList(): UserInfo[] {
        return this.users;
    }

    public get capabilities(): UserCapabilities {
        return this.internalCapabilities;
    }

    public get roles(): UserRole[] {
        return this.internalRoles;
    }

    @Action
    public async archive(id: string): Promise<void> {
        await userService.archiveUser(id, true);
        await this.context.dispatch('readUsersList');
    }

    @Mutation
    public commitUserPermissions(permissions: UserPermissions): void {
        if (!permissions) {
            return;
        }

        this.internalCapabilities = permissions.capabilities;
        this.internalRoles = permissions.roles;
    }

    @Mutation
    public commitUsersList(users: UserInfo[]): void {
        this.users = users;
    }

    @Action
    public async delete(id: string): Promise<void> {
        await userService.deleteUser(id);
        await this.context.dispatch('readUsersList');
    }

    @Action
    public async edit(userInfo: UserInfo): Promise<void> {
        await userService.editUser(userInfo.id, userInfo);
        await this.context.dispatch('readUsersList');
    }

    @Action({ commit: 'commitUsersList' })
    public async readUsersList(assignable = false): Promise<UserInfo[]> {
        return await userService.readUsersList(assignable);
    }

    @Action({ commit: 'commitUserPermissions' })
    public async readUserPermissions(): Promise<UserPermissions> {
        return await userService.readUserPermissions();
    }

    @Action
    public async unarchive(id: string): Promise<void> {
        await userService.archiveUser(id, false);
        await this.context.dispatch('readUsersList');
    }
}
