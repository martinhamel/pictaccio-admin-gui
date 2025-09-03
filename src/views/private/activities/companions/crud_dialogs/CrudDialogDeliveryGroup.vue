<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="shipping"
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
import { DataSourceEventListeners } from '@pictaccio/admin-gui/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/models/db_delivery_group';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    SHIPPING_GROUP_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/shipping_group_columns';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';
import { validateInternalNameCharacters } from '@pictaccio/shared/utils/internal_name_constraint';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog product category',
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
export default class CrudDialogDeliveryGroup extends ActivityCrudDialog<DbDeliveryGroup> {
    private columns = SHIPPING_GROUP_COLUMNS;
    private crudDialog: CrudDialog<DbDeliveryGroup>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteDeliveryGroup;

    public async deleteClick(id?: number, row?: DbDeliveryGroup): Promise<void> {
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
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.shippingGroups.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('ShippingGroups/delete', {
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

    public openDialog(rowId?: number, row?: DbDeliveryGroup): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbDeliveryGroup, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbDeliveryGroup>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbDeliveryGroup): Promise<void> {
        await this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead');
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
        const shippingOptions = this.$store.getters['ShippingOptionsReader/shippingOptions']
            .map(i => ({ id: i.id, value: i.value }));

        if (!shippingOptions) {
            globalToast(this.$t('messages.requestError'), 'error');
            return;
        }

        this.crudDialog.setRowSelected(row);
        this.crudDialog.update({
            internal_name: GenericDataSource.from<
                DbDeliveryGroup,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            deliveryOptions: GenericDataSource.from<
                DbDeliveryGroup,
                number[],
                string,
                boolean
            >(rowId ? row['deliveryOptions'].map(option => option.id) : null, 'deliveryOptions', shippingOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('ShippingGroups');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbDeliveryGroup>);
        this.crudDialog.setActivity('shippingGroups');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();
        const values: DbDeliveryGroup = {
            internal_name: formValues['internal_name'],
            deliveryOptions: formValues['deliveryOptions']
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('ShippingGroups/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('ShippingGroups/update', {
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

        await this.$store.dispatch('ShippingGroupsReader/shippingGroupsRead', true);
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
