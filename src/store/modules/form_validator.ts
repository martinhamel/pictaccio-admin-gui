import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

type FormValues = Record<string, string | number | string[] | number[]>;
type FormValidatorPrompt = { title: string, message: string };
class FormValidatorItem {
    requiredField: string[] = [];
    emptyFields: string[] = [];
    isValidated = true;
    forValidatorName: string;
}

@Module({ namespaced: true })
export default class FormValidator extends VuexModule {
    private internalRequiredField: string[] = [];
    private internalEmptyFields: string[] = [];
    private internalIsValidated = true;
    private internalPrompt: FormValidatorPrompt = {
        title: '',
        message: ''
    };

    public get emptyFields(): string[] {
        return this.internalEmptyFields;
    }

    public get isValidated(): boolean {
        return this.internalIsValidated;
    }

    @Mutation
    public commitRequiredField(value: string[]): void {
        this.internalRequiredField = value;
    }

    @Mutation
    public commitInternalEmptyFields(value: string[]): void {
        this.internalEmptyFields = value;
    }

    @Mutation
    public commitInternalPrompt(value: FormValidatorPrompt): void {
        this.internalPrompt.title = value.title;
        this.internalPrompt.message = value.message;
    }

    @Mutation
    public commitIsValidated(value: boolean): void {
        this.internalIsValidated = value;
    }

    @Action
    public async indexRequiredFields(requiredField: string[]): Promise<void> {
        if (!requiredField) {
            this.context.commit('commitIsValidated', true);
        }
        this.context.commit('commitRequiredField', requiredField);
    }

    @Action
    public async setInternalPrompt(value: FormValidatorPrompt): Promise<void> {
        this.context.commit('commitInternalPrompt', value);
    }

    @Action
    public async validateRequiredFields(formValues: FormValues): Promise<void> {
        const emptyFields = [];
        for (const requiredField of this.internalRequiredField) {
            if (
                !formValues[requiredField] ||
                (
                    typeof formValues[requiredField] === 'string' &&
                    (formValues[requiredField] as string).trim() === ''
                ) ||
                (
                    Array.isArray(formValues[requiredField]) &&
                    (
                        !(formValues[requiredField] as Array<string | number>)
                            .every(i => typeof i === 'string') ||
                        (formValues[requiredField] as Array<string>)
                            .some(i => i.trim() === '')
                    ) &&
                    !(formValues[requiredField] as Array<string | number>)
                        .every(i => typeof i === 'number')

                )
            ) {
                emptyFields.push(requiredField);
            }
        }

        if (emptyFields.length > 0) {
            this.context.commit('commitIsValidated', false);
            this.context.commit('commitInternalEmptyFields', emptyFields);
            await globalPrompt({
                buttonType: 'ok',
                icon: ['', ''],
                message: this.internalPrompt.message,
                title: this.internalPrompt.title
            });
        } else {
            this.context.commit('commitIsValidated', true);
        }
    }
}

