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
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbCrosssell } from '@pictaccio/admin-gui/models/db_crosssell';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    CROSSSELL_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/crosssell_columns';
import { validateInternalNameCharacters } from '@pictaccio/shared/utils/internal_name_constraint';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog crosssell',
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
export default class CrudDialogCrosssell extends ActivityCrudDialog<DbCrosssell> {
    private columns = CROSSSELL_COLUMNS;
    private crudDialog: CrudDialog<DbCrosssell>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteCrosssell;

    public async deleteClick(id?: number, row?: DbCrosssell): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('background:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.internal_name
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.crosssells.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('Crossells/delete', {
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

    public openDialog(rowId?: number, row?: DbCrosssell): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbCrosssell, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbCrosssell>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbCrosssell): Promise<void> {
        await this.$store.dispatch('ProductsReader/productsRead');
        const products = this.$store.getters['ProductsReader/products']
            .map(i => ({ id: i.id, value: i.value }));

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
                DbCrosssell,
                string,
                string,
                any
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            products: GenericDataSource.from<
                DbCrosssell,
                string[],
                string,
                boolean
            >(rowId ? row['products'].map(product => product.id.toString()) : null, 'products', products)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('Crosssells');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbCrosssell>);
        this.crudDialog.setActivity('crosssells');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();

        const options = {}

        const values: DbCrosssell = {
            internal_name: formValues['internal_name'],
            options,
            products: formValues['products']
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('Crosssells/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('Crosssells/update', {
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

        await this.$store.dispatch('CrossellsReader/crossellsRead', true);
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
