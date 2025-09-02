<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="product"
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
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/src/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { CustomProductOptions, DbProductCustomTemplate } from '@pictaccio/admin-gui/src/models/db_product_custom_template';
import CustomProducts from '@pictaccio/admin-gui/src/store/modules/custom_products';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    CUSTOM_PRODUCT_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/custom_product_columns';
import { validateInternalNameCharacters } from '@pictaccio/shared/src/utils/internal_name_constraint';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'CrudDialogProductCustom',
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
export default class CrudDialogProductCustom extends ActivityCrudDialog<CustomProducts> {
    private columns = CUSTOM_PRODUCT_COLUMNS;
    private crudDialog: CrudDialog<DbProductCustomTemplate>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductCustom;

    public async deleteClick(id?: number, row?: DbProductCustomTemplate): Promise<void> {
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
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.customProduct.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('CustomProducts/delete', {
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

    public openDialog(rowId?: number, row?: DbProductCustomTemplate): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbProductCustomTemplate, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbProductCustomTemplate>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbProductCustomTemplate): Promise<void> {
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
                DbProductCustomTemplate,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            customProductOptions: GenericDataSource.from<
                DbProductCustomTemplate,
                CustomProductOptions,
                string,
                boolean
            >(rowId ? row['options'] : null, 'options', options)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('CustomProducts');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbProductCustomTemplate>);
        this.crudDialog.setActivity('customProduct');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const formValues = this.getFields();
        const values: DbProductCustomTemplate = {
            id: this.editId,
            internal_name: formValues['internal_name'],
            options: {
                choices: Object.entries(formValues)
                    .filter(([key, value]) => key.startsWith('option-'))
                    .map(([key, value]) => value.toString()),
                choices_count: formValues['choices_count']
            }
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('CustomProducts/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('CustomProducts/update', {
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

        await this.$store.dispatch('CustomProductsReader/customProductsRead', true);
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
