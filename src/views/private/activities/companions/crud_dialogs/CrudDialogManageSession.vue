<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="session"
                 :allowArchiveDelete="archiveFeature"
                 :archiveBtn="true"
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
import { DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbSession } from '@pictaccio/admin-gui/src/models/db_session';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    MANAGE_SESSIONS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/manage_sessions_columns';
import { SessionColor } from '@pictaccio/shared/src/types/session_color';
import { SessionOptions } from '@pictaccio/shared/src/types/session_options';
import { DateTime } from 'luxon';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Dialog Manage Session',
    components: {
        FontAwesomeIcon,
        CrudDialog
    },
    emits: [
        'update'
    ],
    expose: [
        'deleteClick',
        'openDialog',
        'refreshField',
        'updateCrud'
    ]
})
export default class CrudDialogManageSession extends ActivityCrudDialog {
    private columns = MANAGE_SESSIONS_COLUMNS;
    private crudDialog: CrudDialog<DbSession>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteSession;

    public async deleteClick(id?: number, row?: DbSession): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('session:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.internal_name
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.manageSession.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('Sessions/archive', {
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

    public openDialog(rowId?: number, row?: DbSession): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public async updateCrud(rowId?: number, row?: DbSession): Promise<void> {
        await this.$store.dispatch('CrosssellsReader/crosssellsRead');
        await this.$store.dispatch('ProductCatalogsReader/productCatalogsRead');
        await this.$store.dispatch('ShippingGroupsReader/shippingGroupsRead');
        await this.$store.dispatch('WorkflowsReader/workflowsRead');

        const options = [{
            id: 'required',
            value: true
        }]
        const crosssell = this.$store.getters['CrosssellsReader/crosssells'];
        const productCatalogs = this.$store.getters['ProductCatalogsReader/productCatalogs']
            .map(i => ({ id: i.id, value: i.value }));
        const shippingGroups = this.$store.getters['ShippingGroupsReader/shippingGroups']
            .map(i => ({ id: i.id, value: i.value }));
        const sessionWorkflows = this.$store.getters['WorkflowsReader/workflows'];

        if (!crosssell || !productCatalogs || !shippingGroups || !sessionWorkflows) {
            globalToast(this.$t('messages.requestError'), 'error');
            return;
        }

        const crosssellOptions = [{
            id: 'options',
            value: crosssell.map(i => ({ id: i.id, value: i.value }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.noCrosssell')
        }, {
            id: 'canUnset',
            value: true
        }];

        const sessionWorkflowsOptions = [{
            id: 'options',
            value: sessionWorkflows.map(i => ({ id: i.id, value: i.value }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.chooseWorkflow')
        }, {
            id: 'canUnset',
            value: false
        }];

        const touchupOptions = [
            { id: 'enableTouchups', value: row.options.touchupsEnable },
            { id: 'touchupsPrice', value: row.options.touchupsPrice }
        ];

        const digitalOptions = [
            { id: 'enableDigitals', value: row.options.digitalEnable },
            { id: 'enableGroupDigitals', value: row.options.digitalGroupsEnable },
            { id: 'enableAutoSendDigital', value: row.options.digitalAutoSendEnable },
            { id: 'digitalPrice', value: row.options.digitalPrice },
            { id: 'digitalGroupPrice', value: row.options.digitalGroupPrice }
        ];

        if (rowId) {
            this.crudDialog.setRowSelected(row);
            this.crudDialog.update({
                session_color: GenericDataSource.from<
                    DbSession,
                    SessionColor,
                    never,
                    never
                >(row.options.color, 'options'),
                workflow: GenericDataSource.from<
                    DbSession,
                    number,
                    string,
                    boolean | string | DataSourceOption<string, string>
                >(row['workflow'].id, 'workflow', sessionWorkflowsOptions),
                productCrosssell: GenericDataSource.from<
                    DbSession,
                    number,
                    string,
                    boolean | string | DataSourceOption<string, string>
                >(row.productCrosssell?.id ?? null, 'productCrosssell', crosssellOptions),
                productCatalogs: GenericDataSource.from<
                    DbSession,
                    number[],
                    string,
                    DataSourceOption<string, string>
                >(row.productCatalogs.map(i => i.id), 'options', productCatalogs),
                deliveryGroups: GenericDataSource.from<
                    DbSession,
                    number[],
                    string,
                    DataSourceOption<string, string>
                >(row.deliveryGroups.map(i => i.id), 'options', shippingGroups),
                internal_name: GenericDataSource.from<
                    DbSession,
                    string,
                    string,
                    boolean
                >(row['internal_name'], 'internal_name', options),
                publish_date: GenericDataSource.from<
                    DbSession,
                    string,
                    never,
                    never
                >(row['publish_date'], 'publish_date'),
                expire_date: GenericDataSource.from<
                    DbSession,
                    string,
                    never,
                    never
                >(row['expire_date'], 'publish_date'),
                touchupOptions: GenericDataSource.from<
                    DbSession,
                    string,
                    string,
                    boolean | number[]
                >(null, 'options', touchupOptions),
                digitalOptions: GenericDataSource.from<
                    DbSession,
                    string,
                    string,
                    boolean | number[]
                >(null, 'options', digitalOptions)
            });
        }
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbSession>);
        this.crudDialog.setActivity('manageSessions');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();

        // color1 and color2 has [0] because it's fused-inputs returning an array of 1
        const values: DbSession = {
            id: this.editId,
            workflow: formValues['category_id'],
            internal_name: formValues['internal_name'],
            options: {
                color: {
                    color1: formValues['session-color-1'][0],
                    color2: formValues['session-color-2']
                        ? formValues['session-color-2'][0]
                        : formValues['session-color-1'][0],
                    multipleColors: formValues['session-color-multiple']
                },
                touchupsEnable: formValues['virtual-touchup-option'].enableTouchups,
                touchupsPrice: formValues['virtual-touchup-option'].touchupsPrice,
                touchupsPriceIsScaling: formValues['virtual-touchup-option'].touchupsPrice.lenght > 1,
                digitalEnable: formValues['virtual-digital-option'].enableDigitals,
                digitalAutoSendEnable: formValues['virtual-digital-option'].enableAutoSendDigitals,
                digitalGroupsEnable: formValues['virtual-digital-option'].enableGroupDigitals,
                digitalPrice: formValues['virtual-digital-option'].digitalsPrice,
                digitalGroupPrice: formValues['virtual-digital-option'].groupDigitalsPrice,
                digitalPriceIsScaling: formValues['virtual-digital-option'].digitalsPrice.lenght > 1,
                digitalGroupPriceIsScaling: formValues['virtual-digital-option'].groupDigitalsPrice.lenght > 1
            } as SessionOptions,
            productCatalogs: formValues['productCatalogs'],
            deliveryGroups: formValues['deliveryGroups'],
            publish_date: DateTime.fromISO(formValues['publish_date']).setZone('UTC').toISO(),
            expire_date: DateTime.fromISO(formValues['expire_date']).setZone('UTC').toISO(),
            productCrosssell: formValues['productCrosssell'],
            archived: false
        };

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('Sessions/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('Sessions/update', {
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
        this.$emit('update', { id: formValues['id'] ?? result?.createdId });
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
