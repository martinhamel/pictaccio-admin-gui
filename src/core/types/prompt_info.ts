import { PromptButtonType } from '@pictaccio/admin-gui/src/core/types/prompt_button_type';

export type PromptInfo = {
    buttonType: PromptButtonType,
    icon?: [string, string],
    message: string,
    title: string,
    html?: boolean
}
