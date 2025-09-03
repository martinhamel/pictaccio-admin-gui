import { UserInfo } from '@pictaccio/admin-gui/core/types/user_info';
import localStorageService from '@pictaccio/admin-gui/services/local_storage_service';
import userSessionService from '@pictaccio/admin-gui/services/user_sessions_service';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

const STORAGE_DATETIME_KEY = 'date-time-info';
const DEFAULT_PREFERENCES = {
    dateFormat: 'yy/MM/dd',
    timeFormat: 'HH:mm',
    timezone: 'America/St_Johns',
    useRelativeTime: false
};

@Module({ namespaced: true })
export default class UserPreference extends VuexModule {
    private dateTimeInfo = localStorageService.has(STORAGE_DATETIME_KEY)
        ? JSON.parse(localStorageService.get(STORAGE_DATETIME_KEY) ?? '{}')
        : DEFAULT_PREFERENCES;

    private userSessionInfo: UserInfo = {};

    public get dateFormat(): string {
        return this.dateTimeInfo.dateFormat;
    }

    public get timeFormat(): string {
        return this.dateTimeInfo.timeFormat;
    }

    public get timezone(): string {
        return this.dateTimeInfo.timezone;
    }

    public get useRelativeTime(): boolean {
        return this.dateTimeInfo.useRelativeTime;
    }

    @Mutation
    public commitDateFormat(format: string): void {
        if (format === undefined) {
            return;
        }
        this.dateTimeInfo.dateFormat = format;
        localStorageService.set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
    }

    @Mutation
    public commitReload(): void {
        this.dateTimeInfo = JSON.parse(
            localStorageService.get(STORAGE_DATETIME_KEY) ?? JSON.stringify(DEFAULT_PREFERENCES));
    }

    @Mutation
    public commitTimeFormat(format: string): void {
        if (format === undefined) {
            return;
        }
        this.dateTimeInfo.timeFormat = format;
        localStorageService.set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
    }

    @Mutation
    public commitTimeZone(zone: string): void {
        if (zone === undefined) {
            return;
        }
        this.dateTimeInfo.timezone = zone;
        localStorageService.set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
    }

    @Mutation
    public commitUseRelativeTime(useRelativeTime: boolean): void {
        if (useRelativeTime === undefined) {
            return;
        }
        this.dateTimeInfo.useRelativeTime = useRelativeTime;
        localStorageService.set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
    }

    @Action({ commit: 'commitUserSession' })
    public async readUserSession(): Promise<UserInfo> {
        return await userSessionService.readUserSessions();
    }

    @Mutation
    public commitUserSession(data: UserInfo): void {
        this.userSessionInfo = data;
    }

    public get userSession(): UserInfo {
        return this.userSessionInfo;
    }

    @Action({ commit: 'commitTimeFormat' })
    public async setTimeFormat(format: string): Promise<string> {
        return format;
    }

    @Action({ commit: 'commitDateFormat' })
    public async setDateFormat(format: string): Promise<string> {
        return format;
    }

    @Action({ commit: 'commitTimeZone' })
    public async setTimeZone(zone: string): Promise<string> {
        return zone;
    }

    @Action({ commit: 'commitUseRelativeTime' })
    public async setUseRelativeTime(useRelativeTime: boolean): Promise<boolean> {
        return useRelativeTime;
    }
}
