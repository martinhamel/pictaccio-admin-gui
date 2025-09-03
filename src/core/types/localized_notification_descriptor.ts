import { LocalizedString } from '@pictaccio/admin-gui/core/types/localized_string';

export interface LocalizedNotificationDescriptor {
    title: LocalizedString;
    message: LocalizedString;
    hasProgress: boolean;
    hasStop: boolean;
    hasClose: boolean;
    animate?: boolean;
    animationSource?: HTMLElement;
    linkPath?: string;
    linkText?: LocalizedString;
}
