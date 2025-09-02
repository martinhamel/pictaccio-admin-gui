import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { SubjectCodeGenerateQuery } from '@pictaccio/admin-gui/src/models/subject_code_generate_query';
import { SubjectCodeList } from '@pictaccio/admin-gui/src/types/subject_code_list';
import subjectCodeService from '@pictaccio/admin-gui/src/services/subject_code_service';

@Module({ namespaced: true })
export default class SubjectCodes extends VuexModule {
    private internalSubjectCodes: SubjectCodeList = [];

    @Mutation
    public commitSubjectCodes(subjectCodes: SubjectCodeList): void {
        this.internalSubjectCodes = subjectCodes;
    }

    @Action({ commit: 'commitSubjectCodes' })
    public async generateCodes(subjectCodesQuery: SubjectCodeGenerateQuery): Promise<SubjectCodeList> {
        return await subjectCodeService.createBulkSubjectCodes(subjectCodesQuery);
    }

    public get codes(): SubjectCodeList {
        return this.internalSubjectCodes;
    }
}
