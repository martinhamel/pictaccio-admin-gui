<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="session"
                 :allowArchiveDelete="archiveFeature"
                 @close="dialogClose"
                 @confirm="confirmClick"
                 @delete="deleteClick">
        <template v-for="field in columns.headers.filter(header => !header['tableOnly'])"
                  :key="field"
                  #[field.name]>
            <slot :name="field.name"></slot>
        </template>
    </crud-dialog>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbSubject } from '@pictaccio/admin-gui/src/models/db_subject';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    MANAGE_SUBJECTS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/manage_subjects_columns';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog subject',
    components: {
        FontAwesomeIcon,
        CrudDialog
    },
    emits: [
        'update'
    ],
    expose: [
        'deleteClick',
        'getFields',
        'openDialog',
        'refreshField',
        'setSessionId',
        'updateCrud'
    ]
})
export default class CrudDialogSubject extends ActivityCrudDialog<DbSubject> {
    private columns = MANAGE_SUBJECTS_COLUMNS;
    private crudDialog: CrudDialog<DbSubject>;
    private sessionId: string;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteSubject;

    public async deleteClick(id?: number, row?: DbSubject): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('session:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.display_name
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.subjects.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('Subjects/delete', {
                    filters: [[{
                        column: 'id',
                        operand: (id ?? this.editId).toString(),
                        operator: '=='
                    }]]
                });
                this.$emit('update');
            } catch (error) {
                globalToast(this.$t('messages.deleteError'), 'error');
            }
        }
    }

    public getFields(): any {
        return this.crudDialog.getFields();
    }

    public openDialog(rowId?: number, row?: DbSubject): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbSubject, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbSubject>).refreshField(fieldRef, dataSource);
    }

    public setSessionId(sessionId: string): void {
        this.sessionId = sessionId;
    }

    public async updateCrud(rowId?: number, row?: DbSubject): Promise<void> {
        await this.$store.dispatch('SessionsReader/sessionsRead', true);
        const sessions = this.$store.getters['SessionsReader/sessions'];

        if (!sessions) {
            globalToast(this.$t('messages.requestError'), 'error');
            return;
        }

        const options = [{
            id: 'required',
            value: true
        }]

        const imageOptions = [{
            id: 'multiple',
            value: true
        }, {
            id: 'readonly',
            value: !!rowId
        }, ...options
        ];

        const sessionOptions = [{
            id: 'options',
            value: sessions.map(i => ({ id: i.id, value: (i.value as string)[this.$i18n.locale] }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.chooseSession')
        }, {
            id: 'canUnset',
            value: false
        }, ...options
        ];

        this.crudDialog.setRowSelected(row ?? null);
        this.crudDialog.update({
            session_id: GenericDataSource.from<
                DbSubject,
                string,
                string,
                boolean | DataSourceOption<string, string>
            >(this.sessionId, 'session_id', sessionOptions),
            code: GenericDataSource.from<
                DbSubject,
                string,
                string,
                boolean
            >(rowId ? row['code'] : null, 'code', options),
            first_name: GenericDataSource.from<
                DbSubject,
                string,
                string,
                boolean
            >(rowId ? row.info.firstName : null, 'info', options),
            last_name: GenericDataSource.from<
                DbSubject,
                string,
                string,
                boolean
            >(rowId ? row.info.lastName : null, 'info', options),
            group: GenericDataSource.from<
                DbSubject,
                string,
                never,
                never
            >(rowId ? row.info.group : null, 'info'),
            unique_id: GenericDataSource.from<
                DbSubject,
                string,
                string,
                boolean
            >(rowId ? row['unique_id'] : null, 'unique_id'),
            photos: GenericDataSource.from<
                DbSubject,
                string[],
                string,
                boolean | DataSourceOption<string, string>
            >(rowId ? row['photos'] : null, 'photos', imageOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('Subjects');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbSubject>);
        this.crudDialog.setActivity('subjects');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();

        const photos = Object.values(formValues['photos']) as string[];

        const values: DbSubject = {
            session_id: formValues['session_id'],
            code: formValues['code'],
            display_name: `${formValues['first_name']} ${formValues['last_name']}`,
            info: {
                lastName: formValues['last_name'],
                firstName: formValues['first_name'],
                group: formValues['group'],
                uid: formValues['unique_code']
            },
            unique_id: formValues['unique_code'],
            photos,
            hidden: false,
            mappings: {}
        };

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('Subjects/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('Subjects/update', {
                    filters: [[{
                        column: 'id',
                        operator: '==',
                        operand: this.editId
                    }]],
                    values
                });

                await this.$store.dispatch('CrudOverlay/removeDirty', { force: true });
                this.dialogClose();
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        }

        this.$emit('update', { id: this.editId ?? result?.createdId });
    }

    private dialogClose(): void {
        this.crudDialog.closeDialog();
        this.crudDialogStatus = 'read';
        this.editId = null;
        this.rowSelected = null;
    }

    /* PRIVATE */
}
</script>
