import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';
import { SessionColor } from '@pictaccio/admin-gui/src/models/session_color';

export class SessionGeneralInfo {
    public workflow: number;
    public name: string;
    public datePublish: Date;
    public dateExpire: Date;
    public color: SessionColor;
}
