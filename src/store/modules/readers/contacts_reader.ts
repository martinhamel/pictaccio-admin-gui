import { ContactInfo } from '@pictaccio/admin-gui/src/models/contact_info';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';

@Module({ namespaced: true })
export default class ContactsReader extends VuexModule {
    private dirty = false;
    private service: DataTableService<ContactInfo, number>;
    private internalContacts: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<ContactInfo, number>({
            readEndpoint: 'contact/read'
        });
    }

    @Mutation
    public commitDirty(value: boolean): void {
        this.dirty = value;
    }

    @Action
    public async makeDirty(): Promise<void> {
        this.context.commit('commitDirty', true);
    }

    public get contacts(): ReaderResponse {
        return this.internalContacts;
    }

    @Action
    public async contactsRead(force = false): Promise<void> {
        if (force || this.dirty || this.internalContacts === undefined) {
            const answer = await this.service.read({});

            this.context.commit('commitDirty', false);
            this.context.commit('commitContacts',
                answer.results.map(i => ({ id: i.id, value: `${i.firstName} ${i.lastName}` })));
        }
    }

    @Mutation
    public commitContacts(contacts: ReaderResponse): void {
        this.internalContacts = contacts;
    }
}
