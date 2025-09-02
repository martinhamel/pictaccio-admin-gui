<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="campaign"
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
import { DbPromoCodeCampaign } from '@pictaccio/admin-gui/src/models/db_promo_code_campaign';
import PromoCodeCampaigns from '@pictaccio/admin-gui/src/store/modules/promo_code_campaigns';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    CAMPAIGN_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/campaign_columns';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud Dialog Campaign',
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
export default class CrudDialogCampaign extends ActivityCrudDialog<PromoCodeCampaigns> {
    private columns = CAMPAIGN_COLUMNS;
    private crudDialog: CrudDialog<DbPromoCodeCampaign>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteCampaign;

    public async deleteClick(id?: number, row?: DbPromoCodeCampaign): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('campaign:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.internal_name
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.campaign.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('PromoCodeCampaigns/delete', {
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

    public openDialog(rowId?: number, row?: DbPromoCodeCampaign): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbPromoCodeCampaign, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbPromoCodeCampaign>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbPromoCodeCampaign): Promise<void> {
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

        const valueUnit = [
            {
                id: 'unit',
                value: this.$t('generic.units.dollar')
            }, ...options
        ];

        await this.$store.dispatch('SessionsReader/sessionsRead');
        await this.$store.dispatch('WorkflowsReader/workflowsRead');

        const hasWorkflowRestrictions = rowId ? row['workflowRestrictions'].length > 0 : false;
        const hasSessionRestrictions = rowId ? row['sessionRestrictions'].length > 0 : false;
        const sessionOptions = this.prepareSessionOptions(
            this.$store.getters['SessionsReader/sessions'],
            hasWorkflowRestrictions
        );
        const workflowOptions = this.prepareWorkflowOptions(
            this.$store.getters['WorkflowsReader/workflows'],
            hasSessionRestrictions
        );

        this.crudDialog.setRowSelected(row ?? null);
        this.crudDialog.update({
            internal_name: GenericDataSource.from<
                DbPromoCodeCampaign,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            code_prefix: GenericDataSource.from<
                DbPromoCodeCampaign,
                string,
                string,
                boolean
            >(rowId ? row['code_prefix'] : null, 'code_prefix'),
            amount: GenericDataSource.from<
                DbPromoCodeCampaign,
                number,
                string,
                boolean | string
            >(rowId ? row['amount'] : null, 'amount', valueUnit),
            _restriction_decoration: GenericDataSource.from<
                DbPromoCodeCampaign,
                string,
                never,
                never
            >(this.$t('activities.campaign.dialog.restrictionSection'), '_restriction_decoration'),
            workflows: GenericDataSource.from<
                DbPromoCodeCampaign,
                string[],
                string,
                boolean | string | DataSourceOption<string, string>
            >(rowId
                ? row['workflowRestrictions'].map(i => i.id.toString())
                : null, 'workflowRestrictions', workflowOptions),
            sessions: GenericDataSource.from<
                DbPromoCodeCampaign,
                string[],
                string,
                boolean | string | DataSourceOption<string, string>
            >(rowId
                ? row['sessionRestrictions'].map(i => i.id.toString())
                : null, 'sessionRestrictions', sessionOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('PromoCodeCampaigns');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbPromoCodeCampaign>);
        this.crudDialog.setActivity('campaign');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const formValues = this.getFields();
        const values: DbPromoCodeCampaign = {
            internal_name: formValues['internal_name'],
            code_prefix: formValues['code_prefix'],
            amount: formValues['amount'],
            sessionRestrictions: Object.values(formValues['sessions']),
            workflowRestrictions: Object.values(formValues['workflows'])
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('PromoCodeCampaigns/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('PromoCodeCampaigns/update', {
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

    private sessionChange(sessionSelected: boolean): void {
        const workflowOptions = this.prepareWorkflowOptions(
            this.$store.getters['WorkflowsReader/workflows'],
            sessionSelected
        );

        this.crudDialog.refreshField('workflows',
            GenericDataSource.from<
                DbPromoCodeCampaign,
                string[],
                string,
                boolean | string | DataSourceOption<string, string>
            >([], 'workflowRestrictions', workflowOptions));
    }

    private workflowChange(workflowSelected: boolean): void {
        const sessionOptions = this.prepareSessionOptions(
            this.$store.getters['SessionsReader/sessions'],
            workflowSelected
        );

        this.crudDialog.refreshField('sessions',
            GenericDataSource.from<
                DbPromoCodeCampaign,
                string[],
                string,
                boolean | string | DataSourceOption<string, string>
            >([], 'sessionRestrictions', sessionOptions));
    }

    /* PRIVATE */
    private prepareSessionOptions(sessions, enabled: boolean): Iterable<DataSourceOption<string, (
        boolean |
        string |
        DataSourceOption<string, string>
        )>> {
        return [{
            id: 'options',
            value: sessions.map(i => ({ id: i.id, value: i.value }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.noRestriction')
        }, {
            id: 'canUnset',
            value: true
        }, {
            id: 'multiple',
            value: true
        }, {
            id: 'eventListeners',
            value: {
                change: event => this.sessionChange(event)
            }
        }, {
            id: 'disabled',
            value: enabled
        }];
    }

    private prepareWorkflowOptions(workflows, enabled: boolean): Iterable<DataSourceOption<string, (
        boolean |
        string |
        DataSourceOption<string, string>
        )>> {
        return [{
            id: 'options',
            value: workflows.map(i => ({ id: i.id, value: i.value }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.noRestriction')
        }, {
            id: 'canUnset',
            value: true
        }, {
            id: 'multiple',
            value: true
        }, {
            id: 'eventListeners',
            value: {
                change: event => this.workflowChange(event)
            }
        }, {
            id: 'disabled',
            value: enabled
        }];
    }
}
</script>
