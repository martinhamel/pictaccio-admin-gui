<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="background"
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
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbBackgroundCategory } from '@pictaccio/admin-gui/src/models/db_background_category';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    BACKGROUND_CATEGORIES_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/background_categories_columns';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog background category',
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
export default class CrudDialogBackgroundCategory extends ActivityCrudDialog<DbBackgroundCategory> {
    private columns = BACKGROUND_CATEGORIES_COLUMNS;
    private crudDialog: CrudDialog<DbBackgroundCategory>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteBackgroundCategory;

    public async deleteClick(id?: number, row?: DbBackgroundCategory): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('background:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.name_locale[this.$i18n.locale]
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.backgroundCategories.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('BackgroundCategories/delete', {
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

    public openDialog(rowId?: number, row?: DbBackgroundCategory): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbBackgroundCategory, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbBackgroundCategory>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbBackgroundCategory): Promise<void> {
        const localeOptions = [{ id: 'required', value: true }];

        this.crudDialog.setRowSelected(row ?? null);
        this.crudDialog.update({
            name_locale: GenericDataSource.from<
                DbBackgroundCategory,
                LocalizedString,
                string,
                boolean
            >(rowId ? row['name_locale'] : null, 'name_locale', localeOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('BackgroundCategories');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbBackgroundCategory>);
        this.crudDialog.setActivity('backgroundCategories');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const formValues = this.getFields();

        const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['name_locale_' + i.locale]
        ]));
        const values: DbBackgroundCategory = {
            name_locale: nameLocale
        };
        let result;


        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('BackgroundCategories/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('BackgroundCategories/update', {
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

        await this.$store.dispatch('BackgroundCategoriesReader/backgroundCategoriesRead', true);
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
