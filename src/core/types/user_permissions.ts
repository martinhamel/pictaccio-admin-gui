import { UserCapabilities } from '@pictaccio/admin-gui/core/types/user_capabilities';
import { UserRole } from '@pictaccio/admin-gui/core/types/user_role';

export type UserPermissions = {
    roles: UserRole[];
    capabilities: UserCapabilities
}
