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
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbProductCatalog } from '@pictaccio/admin-gui/models/db_product_catalog';
import ProductCatalogs from '@pictaccio/admin-gui/store/modules/product_catalogs';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    PRODUCT_CATALOG_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_catalog_columns';
import { validateInternalNameCharacters } from '@pictaccio/shared/utils/internal_name_constraint';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Product Categories',
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
export default class CrudDialogCatalog extends ActivityCrudDialog<ProductCatalogs> {
    private columns = PRODUCT_CATALOG_COLUMNS;
    private crudDialog: CrudDialog<DbProductCatalog>;
    private originalRow: DbProductCatalog;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductCatalog;

    public getFields(): any {
        return this.crudDialog.getFields();
    }

    public openDialog(rowId?: number, row?: DbProductCatalog): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.originalRow = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbProductCatalog, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbProductCatalog>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbProductCatalog): Promise<void> {
        await this.$store.dispatch('ProductsReader/productsRead');
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
        const products = this.$store.getters['ProductsReader/products']
            .map(i => ({ id: i.id, value: i.value }));

        this.crudDialog.setRowSelected(row);
        this.crudDialog.update({
            internal_name: GenericDataSource.from<
                DbProductCatalog,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            products: GenericDataSource.from<
                DbProductCatalog,
                string[],
                string,
                DataSourceOption<string, string>
            >(rowId ? row['products'].map(product => product.id.toString()) : null, 'products', products)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('ProductCatalogs');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbProductCatalog>);
        this.crudDialog.setActivity('productCatalogs');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const formValues = this.getFields();

        if (!formValues['internal_name']) {
            await globalPrompt({
                buttonType: 'ok',
                icon: ['', ''],
                message: this.$t('activities.productCatalogs.prompts.missingValueMessage'),
                title: this.$t('activities.productCatalogs.prompts.missingValueTitle')
            });
            return;
        }
        const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['internal_name']
        ]));
        const products = formValues['products']
            .sort((a, b) => a.order - b.order)
            .map(item => parseInt(item.optionId, 10));
        const values: DbProductCatalog = {
            name_locale: nameLocale,
            internal_name: formValues['internal_name'],
            products
        };
        if (!validateInternalNameCharacters(values.internal_name)) {
            globalToast(this.$t('activities.all.internalNameUseWrongCharacters'), 'error');
            return;
        }

        const internalNameExists = await this.$store.dispatch('ProductCatalogs/query', [[{
            column: 'internal_name',
            operator: '~~',
            operand: values.internal_name
        }]]);
        if (!(!internalNameExists || internalNameExists.length === 0) &&
                (values.internal_name !== this.originalRow.internal_name && this.crudDialogStatus === 'update')) {
            globalToast(this.$t('activities.all.internalNameExists'), 'error');
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('ProductCatalogs/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('ProductCatalogs/update', {
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

        await this.$store.dispatch('ProductCatalogsReader/productCatalogsRead', true);
        this.$emit('update', { id: this.editId ?? result?.createdId });
    }

    public async deleteClick(id?: number, row?: DbProductCatalog): Promise<void> {
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
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.productCatalogs.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('ProductCatalogs/delete', {
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

    private dialogClose(): void {
        this.crudDialog.closeDialog();
        this.crudDialogStatus = 'read';
        this.editId = null;
        this.rowSelected = null;
    }

    /* PRIVATE */
}
</script>
