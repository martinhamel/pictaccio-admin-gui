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
import { DataSourceEventListeners } from '@pictaccio/admin-gui/src/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbWorkflow } from '@pictaccio/admin-gui/src/models/db_workflow';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    WORKFLOWS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/workflows_columns';
import { validateInternalNameCharacters } from '@pictaccio/shared/src/utils/internal_name_constraint';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog workflow',
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
        'updateCrud'
    ]
})
export default class CrudDialogWorkflow extends ActivityCrudDialog<DbWorkflow> {
    private columns = WORKFLOWS_COLUMNS;
    private crudDialog: CrudDialog<DbWorkflow>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteWorkflow;

    public async deleteClick(id?: number, row?: DbWorkflow): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('product:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.internal_name
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.workflows.single')}`
            }) === 'yes') {
            try {
                const { affected } = await this.$store.dispatch('Workflows/delete', {
                    filters: [[{
                        column: 'id',
                        operand: (id ?? this.editId).toString(),
                        operator: '=='
                    }]]
                });

                if (affected === 1) {
                    await this.$store.dispatch('Workflows/invalidateRange', {
                        start: this.editId,
                        end: null
                    });
                    this.$emit('update');
                    await this.$store.dispatch('WorkflowsReader/makeDirty');
                } else {
                    globalToast(this.$t('ERROR_DELETING'), 'error');
                }
            } catch (error) {
                globalToast(this.$t('messages.deleteError'), 'error');
            }
        }
    }

    public getFields(): any {
        return this.crudDialog.getFields();
    }

    public openDialog(rowId?: number, row?: DbWorkflow): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbWorkflow, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbWorkflow>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbWorkflow): Promise<void> {
        const options = [{
            id: 'required',
            value: true
        }];
        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.internalNameBlur(event)
                }
            }, ...options
        ];

        this.crudDialog.setRowSelected(row ?? null);
        this.crudDialog.update({
            internal_name: GenericDataSource.from<
                DbWorkflow,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('Workflows');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbWorkflow>);
        this.crudDialog.setActivity('workflows');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();
        const values: DbWorkflow = {
            internal_name: formValues['internal_name'],
            options: {
                defaultSessionOptions: {
                    // TODO: make fields in overlay
                    touchupsEnable: false,
                    touchupsPrice: [0],
                    touchupsPriceIsScaling: false,
                    digitalEnable: false,
                    digitalAutoSendEnable: false,
                    digitalGroupsEnable: false,
                    digitalPrice: [0],
                    digitalGroupPrice: [0],
                    digitalPriceIsScaling: false,
                    digitalGroupPriceIsScaling: false,
                    discountEnable: false,
                    discountPrices: [],
                    discountGroupPrices: [],
                    discountCatalogId: null
                }
            }
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('Workflows/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('Workflows/update', {
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

        await this.$store.dispatch('WorkflowsReader/workflowsRead', true);
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
