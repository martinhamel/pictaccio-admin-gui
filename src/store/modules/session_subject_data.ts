import SessionUploadService from '@pictaccio/admin-gui/services/session_upload_service';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { SubjectData } from '@pictaccio/admin-gui/core/types/subject_data';

@Module({ namespaced: true })
export default class SessionSubjectData extends VuexModule {
    private data: SubjectData[];
    private internalUsedSubjectCodes: string[];

    @Mutation
    public commitSubjectData(data: SubjectData[]): void {
        this.data = data;
    }

    @Mutation
    public commitUsedSubjectCodes(existingCodes: string[]): void {
        this.internalUsedSubjectCodes = existingCodes;
    }

    public get subjectData(): SubjectData[] {
        return this.data;
    }

    public get usedSubjectCodes(): string[] {
        return this.internalUsedSubjectCodes;
    }

    @Action
    public async setSubjectData(data: SubjectData[]): Promise<void> {
        const existingCode = await SessionUploadService.verifySubjectCodes(data);
        if (existingCode.length > 0) {
            this.context.commit('commitUsedSubjectCodes', existingCode);
        }
        this.context.commit('commitSubjectData', data);
    }
}
