import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { validateInternalNameCharacters } from '@pictaccio/shared/src/utils/internal_name_constraint';
import { ComponentBase, Vue } from 'vue-facing-decorator';
//TODO: PSFCA-2739 remove duplicate code from files that dose not need it
@ComponentBase({
    components: {},
    emits: [],
    expose: []
})
export default class ActivityCrudDialog<T = unknown> extends Vue {
    public crudDialogStatus: CRUDStatus = 'read';
    public editId: number;
    public rowSelected: any;
    public remote = false;
    public remoteStore: RemoteStore<T>;

    public async internalNameBlur(event): Promise<void> {
        if (!this.remote) {
            return;
        }

        const value = event.target.value;

        if (this.rowSelected && value === this.rowSelected.internal_name) {
            return;
        }

        if (value) {
            if (!validateInternalNameCharacters(value)) {
                globalToast(this.$t('activities.all.internalNameUseWrongCharacters'), 'error');
                event.target.classList.add('error');
                return;
            }

            const result = await this.remoteStore.query([[{
                column: 'internal_name',
                operator: '~~',
                operand: value
            }]]);

            if (!result || result.length === 0) {
                event.target.classList.remove('error');
            } else {
                globalToast(this.$t('activities.all.internalNameExists'), 'error');

                event.target.classList.add('error');
            }
        }
    }

    public async internalNameValidation(name: string): Promise<boolean> {
        const isNotValid = true;

        if (!validateInternalNameCharacters(name)) {
            globalToast(this.$t('activities.all.internalNameUseWrongCharacters'), 'error');
            return isNotValid;
        }

        const internalNameExists = await this.remoteStore.query([[{
            column: 'internal_name',
            operator: '~~',
            operand: name
        }]]);

        if (this.editId && this.rowSelected.internal_name === name) {
            return !isNotValid;
        }

        if (!(!internalNameExists || internalNameExists.length === 0)) {
            globalToast(this.$t('activities.all.internalNameExists'), 'error');
            return isNotValid;
        }

        return !isNotValid;
    }

    /* LIFECYCLE */
    public mounted(activity: string): void {
        this.setRemoteStore(new RemoteStore<T>(activity));
    }

    /* PRIVATE */
    private setRemoteStore(remoteStore: RemoteStore<T>): void {
        this.remote = true;
        this.remoteStore = remoteStore;
    }
}
