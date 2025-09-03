import { PromptButtonType } from '@pictaccio/admin-gui/core/types/prompt_button_type';

export type PromptInfo = {
    buttonType: PromptButtonType,
    icon?: [string, string],
    message: string,
    title: string,
    html?: boolean
}
