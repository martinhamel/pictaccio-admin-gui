export interface NotificationDescriptor {
    title: string;
    message: string;
    hasProgress: boolean;
    hasStop: boolean;
    hasClose: boolean;
    animate?: boolean;
    animationSource?: HTMLElement;
    linkPath?: string;
    linkText?: string;
}
