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
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/core/types/data_source';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbSubjectGroup } from '@pictaccio/admin-gui/models/db_group';
import SubjectGroups from '@pictaccio/admin-gui/store/modules/subject_groups';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    MANAGE_SUBJECT_GROUPS_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/manage_subject_groups_columns';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog subject group',
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
export default class CrudDialogSubjectGroup extends ActivityCrudDialog<DbSubjectGroup> {
    private columns = MANAGE_SUBJECT_GROUPS_COLUMNS;
    private crudDialog: CrudDialog<DbSubjectGroup>;
    private sessionId: string;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteSubjectGroup;

    public async deleteClick(id?: number, row?: DbSubjectGroup): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('session:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.group
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.groups.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('SubjectGroups/delete', {
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

    public openDialog(rowId?: number, row?: DbSubjectGroup): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbSubjectGroup, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbSubjectGroup>).refreshField(fieldRef, dataSource);
    }

    public setSessionId(sessionId: string): void {
        this.sessionId = sessionId;
    }

    public async updateCrud(rowId?: number, row?: DbSubjectGroup): Promise<void> {
        await this.$store.dispatch('SessionsReader/sessionsRead', true);
        const options = [{
            id: 'required',
            value: true
        }];
        const sessions = [{
            id: 'options',
            value: this.$store.getters['SessionsReader/sessions']
                .map(i => ({ id: i.id, value: (i.value as string)[this.$i18n.locale] }))
        }, ...options];
        const imageOptions = [{
            id: 'multiple',
            value: true
        }, {
            id: 'readonly',
            value: true
        }, ...options];

        this.crudDialog.setRowSelected(row ?? null);
        this.crudDialog.update({
            session_id: GenericDataSource.from<
                DbSubjectGroup,
                string,
                string,
                boolean | DataSourceOption<string, string>
            >(this.sessionId, 'session_id', sessions),
            group: GenericDataSource.from<
                DbSubjectGroup,
                string,
                string,
                boolean
            >(rowId ? row['group'] : null, 'group', options),
            photos: GenericDataSource.from<
                DbSubjectGroup,
                string[],
                string,
                boolean | DataSourceOption<string, string>
            >(rowId ? row['photos'] : null, 'photos', imageOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('SubjectGroups');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbSubjectGroup>);
        this.crudDialog.setActivity('subjectGroups');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();

        const photos = Object.values(formValues['photos']) as string[];

        const values: DbSubjectGroup = {
            session_id: formValues['session_id'],
            group: formValues['group'],
            photos
        };

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('SubjectGroups/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('SubjectGroups/update', {
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
