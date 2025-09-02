import { PromptButton } from '@pictaccio/admin-gui/src/core/types/prompt_button_type';
import { PromptInfo } from '@pictaccio/admin-gui/src/core/types/prompt_info';
import { store } from '@pictaccio/admin-gui/src/store';

export function globalPrompt(promptInfo: PromptInfo): Promise<PromptButton> {
    return store.dispatch('Prompt/show', promptInfo);
}
