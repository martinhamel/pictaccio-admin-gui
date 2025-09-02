import { UserName } from '@pictaccio/admin-gui/src/core/types/user_name';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import userInfoService from '@pictaccio/admin-gui/src/services/user_info_service';

@Module({ namespaced: true })
export default class UserInfo extends VuexModule {
    private userAvatar: string;
    private userName: UserName = {
        firstName: '',
        lastName: ''
    };

    @Action
    public async changeAvatarImage(image: File): Promise<void> {
        await userInfoService.uploadAvatar(image);
    }

    @Action
    public async changeUserName(name: { firstName: string, lastName: string }): Promise<void> {
        await userInfoService.changeUserName(name);
    }

    @Mutation
    public async commitReadAvatar(data: string): Promise<void> {
        if (data) {
            this.userAvatar = environment.apiUrl + data;
        }
    }

    @Mutation
    public commitUserName(data: { firstName: string, lastName: string }): void {
        if (data !== null) {
            this.userName = data;
        } else {
            this.userName = { firstName: '', lastName: '' };
        }
    }

    public get hasAvatar(): boolean {
        return this.userAvatar !== undefined;
    }

    @Action({ commit: 'commitUserName' })
    public async readUserName(): Promise<{ firstName: string, lastName: string }> {
        return await userInfoService.readUserName();
    }

    public get userNameInfo(): { firstName: string, lastName: string } {
        return this.userName;
    }

    @Action({ commit: 'commitReadAvatar' })
    public async readAvatarPath(): Promise<string> {
        return await userInfoService.readAvatar();
    }

    public get userAvatarPath(): string {
        return this.userAvatar;
    }
}
