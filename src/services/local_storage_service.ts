import { USER_LOCAL_STORAGE_KEY } from '../core/user_local_storage_key';
import { User } from '../models/user';

const USER_SCOPE = '__user-storage__';

class LocalStorageService {
    public get(key: string, userScope = true): string {
        const user: User = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY) ?? '{}').user;

        if (!user && !user?.id && userScope) {
            return undefined;
        }

        return userScope
            ? (JSON.parse(localStorage.getItem(USER_SCOPE) ?? '{}')[user.id] ?? {})[key] ?? undefined
            : localStorage.getItem(key);
    }

    public has(key: string, userScope = true): boolean {
        return this.get(key, userScope) !== undefined;
    }

    public removeCurrentUser(): void {
        localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }

    public set(key: string, value: string, userScope = true): void {
        const user: User = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY) ?? '{}').user;
        const storage = JSON.parse(localStorage.getItem(USER_SCOPE) ?? '{}');

        if (userScope && !user && !user?.id) {
            throw new Error('Attempting to write to user scope but no user is logged in');
        }

        if (userScope) {
            storage[user.id] = Object.assign(storage[user.id] ?? {}, { [key]: value });
            localStorage.setItem(USER_SCOPE, JSON.stringify(storage));
        } else {
            localStorage.setItem(key, value);
        }
    }
}

export default new LocalStorageService();
