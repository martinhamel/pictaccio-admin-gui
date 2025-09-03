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
import { DbProductCategory } from '@pictaccio/admin-gui/models/db_product_category';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    PRODUCT_CATEGORIES_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_categories_columns';
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
export default class CrudDialogProductCategory extends ActivityCrudDialog<DbProductCategory> {
    private columns = PRODUCT_CATEGORIES_COLUMNS;
    private crudDialog: CrudDialog<DbProductCategory>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductCategory;

    public async deleteClick(id?: number, row?: DbProductCategory): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('product:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.name_locale[this.$i18n.locale]
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.productCategories.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('ProductCategories/delete', {
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

    public openDialog(rowId?: number, row?: DbProductCategory): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbProductCategory, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbProductCategory>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbProductCategory): Promise<void> {
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
            priority: GenericDataSource.from<
                DbProductCategory,
                number,
                never,
                never
            >(rowId ? row['priority'] : null, 'priority'),
            internal_name: GenericDataSource.from<
                DbProductCategory,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            name_locale: GenericDataSource.from<
                DbProductCategory,
                LocalizedString,
                string,
                boolean
            >(rowId ? row['name_locale'] : null, 'name_locale', options)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('ProductCategories');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbProductCategory>);
        this.crudDialog.setActivity('productCategories');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();
        const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['name_locale_' + i.locale]
        ]));
        const values: DbProductCategory = {
            internal_name: formValues['internal_name'],
            priority: typeof formValues['priority'] === 'number'
                ? formValues['priority']
                : 0,
            name_locale: nameLocale
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('ProductCategories/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('ProductCategories/update', {
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

        await this.$store.dispatch('ProductCategoriesReader/productCategoriesRead', true);
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
