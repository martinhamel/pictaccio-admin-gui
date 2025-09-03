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
import { DataSourceEventListeners } from '@pictaccio/admin-gui/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbProductThemeSet } from '@pictaccio/admin-gui/models/db_product_theme_set';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    PRODUCT_THEMES_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_themes_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog product theme',
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
export default class CrudDialogProductTheme extends ActivityCrudDialog<DbProductThemeSet> {
    private columns = PRODUCT_THEMES_COLUMNS;
    private crudDialog: CrudDialog<DbProductThemeSet>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProductTheme;

    public async deleteClick(id?: number, row?: DbProductThemeSet): Promise<void> {
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
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.productThemes.single')}`
            }) === 'yes') {
            try {
                const { affected } = await this.$store.dispatch('ProductThemes/delete', {
                    filters: [[{
                        column: 'id',
                        operand: (id ?? this.editId).toString(),
                        operator: '=='
                    }]]
                });

                if (affected === 1) {
                    await this.$store.dispatch('ProductThemes/invalidateRange', {
                        start: this.editId,
                        end: null
                    });
                    await (this.$refs['product-themes-table'] as DataTable).refresh();
                    await this.$store.dispatch('ProductThemesReader/makeDirty');
                    this.dialogClose();
                } else {
                    globalToast(this.$t('ERROR_DELETING'), 'error');
                }

                this.$emit('update');
            } catch (error) {
                globalToast(this.$t('messages.deleteError'), 'error');
            }
        }
    }

    public getFields(): any {
        return this.crudDialog.getFields();
    }

    public openDialog(rowId?: number, row?: DbProductThemeSet): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbProductThemeSet, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbProductThemeSet>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbProductThemeSet): Promise<void> {
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
                DbProductThemeSet,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            themes: GenericDataSource.from<
                DbProductThemeSet,
                { [key: string]: LocalizedString },
                string,
                boolean
            >(rowId ? row['themes'] : null, 'themes', options)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('ProductThemes');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbProductThemeSet>);
        this.crudDialog.setActivity('products');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();
        const initialArray = Object.entries(formValues)
            .filter(([k, _]) => k.startsWith('themes_'));
        const themes = {};

        for (const [key, value] of initialArray) {
            const [_, index, lang] = key.split('_');

            if (!themes[index]) {
                themes[index] = {};
            }

            themes[index][lang] = value;
        }

        const values: DbProductThemeSet = {
            id: this.editId,
            internal_name: formValues['internal_name'],
            themes: themes,
            scrubFlag: false
        };

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('ProductThemes/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                if (environment.features.scrubProducts) {
                    values.scrubFlag = await globalPrompt({
                        buttonType: 'yes-no',
                        icon: ['', ''],
                        message: this.$t('activities.productThemes.prompt.update'),
                        title: `${this.$t('generic.ui.update')}`
                    }) === 'yes';
                } else {
                    values.scrubFlag = false;
                }

                result = await this.$store.dispatch('ProductThemes/update', {
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

        await this.$store.dispatch('ProductThemesReader/productThemesRead', true);
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
