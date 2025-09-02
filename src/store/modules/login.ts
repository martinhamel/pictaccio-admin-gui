import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class Login extends VuexModule {
    private _message: string;

    public get message(): string {
        return this._message;
    }

    @Mutation
    public setMessage(message: string): void {
        this._message = message;
    }
}
