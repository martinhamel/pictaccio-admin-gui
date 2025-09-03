import { LocalizedString } from '@pictaccio/admin-gui/core/types/localized_string';
import { SessionColor } from '@pictaccio/admin-gui/models/session_color';

export class SessionGeneralInfo {
    public workflow: number;
    public name: string;
    public datePublish: Date;
    public dateExpire: Date;
    public color: SessionColor;
}
