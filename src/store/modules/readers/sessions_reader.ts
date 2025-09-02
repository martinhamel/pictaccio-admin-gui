import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { DbSession } from '@pictaccio/admin-gui/src/models/db_session';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';

@Module({ namespaced: true })
export default class SessionsReader extends VuexModule {
    private service: DataTableService<DbSession, number>;
    private internalSessions: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbSession, number>({
            readEndpoint: 'photo-session/read'
        });
    }

    public get sessions(): ReaderResponse {
        return this.internalSessions;
    }

    @Action
    public async sessionsRead(force = false): Promise<void> {
        if (force || this.internalSessions === undefined) {
            const answer = await this.service.read({});
            this.context.commit('commitSessions',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Mutation
    public commitSessions(sessions: ReaderResponse): void {
        this.internalSessions = sessions;
    }
}
