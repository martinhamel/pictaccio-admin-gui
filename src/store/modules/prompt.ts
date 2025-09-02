import { PromptButton, PromptButtonType } from '@pictaccio/admin-gui/src/core/types/prompt_button_type';
import { PromptInfo } from '@pictaccio/admin-gui/src/core/types/prompt_info';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Prompt extends VuexModule {
    private internalHtml = false;
    private internalTitle: string;
    private internalMessage: string;
    private internalIcon: [string, string];
    private internalVisible: boolean;
    private internalButtonType: PromptButtonType;
    private internalResolve: (value: PromptButton) => void;

    public get buttonType(): PromptButtonType {
        return this.internalButtonType;
    }

    public get html(): boolean {
        return this.internalHtml;
    }

    public get icon(): [string, string] {
        return this.internalIcon;
    }

    public get message(): string {
        return this.internalMessage;
    }

    public get title(): string {
        return this.internalTitle;
    }

    public get visible(): boolean {
        return this.internalVisible;
    }

    @Mutation
    public commitPromptInfo(promptInfo: PromptInfo): void {
        this.internalButtonType = promptInfo.buttonType;
        this.internalIcon = promptInfo.icon;
        this.internalMessage = promptInfo.message;
        this.internalTitle = promptInfo.title;
        this.internalHtml = promptInfo.html ?? false;
    }

    @Mutation
    public commitPromptVisibility(visible: boolean): void {
        this.internalVisible = visible;
    }

    @Mutation
    public commitResolve(button: PromptButton): void {
        this.internalResolve(button);
    }

    @Mutation
    public commitResolveRef(resolve: (value: PromptButton) => void): void {
        this.internalResolve = resolve;
    }

    @Action
    public show(promptInfo: PromptInfo): Promise<PromptButton> {
        return new Promise((resolve, reject) => {
            this.context.commit('commitResolveRef', resolve);
            this.context.commit('commitPromptInfo', promptInfo);
            this.context.commit('commitPromptVisibility', true);
        });
    }

    @Action
    public async resolve(button: PromptButton): Promise<void> {
        this.context.commit('commitResolve', button);
        this.context.commit('commitPromptVisibility', false);
    }
}
