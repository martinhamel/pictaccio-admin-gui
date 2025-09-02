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
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/src/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbBackground } from '@pictaccio/admin-gui/src/models/db_background';
import backgroundService from '@pictaccio/admin-gui/src/services/background_service';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    BACKGROUND_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/background_columns';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { Tag } from '@pictaccio/shared/src/types/tags';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog background',
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
export default class CrudDialogBackground extends ActivityCrudDialog<DbBackground> {
    private columns = BACKGROUND_COLUMNS;
    private crudDialog: CrudDialog<DbBackground>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteBackground;

    public async deleteClick(id?: number, row?: DbBackground): Promise<void> {
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
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.backgrounds.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('Backgrounds/delete', {
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

    public openDialog(rowId?: number, row?: DbBackground): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbBackground, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbBackground>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbBackground): Promise<void> {
        await this.$store.dispatch('BackgroundCategoriesReader/backgroundCategoriesRead');
        const backgroundCategories = this.$store.getters['BackgroundCategoriesReader/backgroundCategories'];

        if (!backgroundCategories) {
            globalToast(this.$t('messages.requestError'), 'error');
            return;
        }

        let tags: Tag[] = [];

        if (rowId) {
            tags = row['_tags'] ?? [];
        }

        const options = [{
            id: 'required',
            value: true
        }];

        const tagOptions = [
            {
                id: 'placeholder',
                value: this.$t('dataTable.placeholder.createTags')
            }
        ];

        const productionIdentifierOptions = [{
            id: 'eventListeners',
            value: {
                blur: event => this.productionIdentifierBlur(event)
            }
        }, ...options
        ];

        const imageOptions = [{
            id: 'multiple',
            value: false
        }, {
            id: 'selectable',
            value: false
        }, ...options
        ];

        const backgroundCategoriesOptions = [{
            id: 'options',
            value: backgroundCategories.map(i => ({ id: i.id, value: i.value[this.$i18n.locale] }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.selectCategories')
        }, {
            id: 'multiple',
            value: true
        }, ...options
        ];

        const booleanOptions = [
            {
                id: 'context',
                value: this.$t('generic.ui.enabled')
            }
        ];

        this.crudDialog.setRowSelected(row ?? null);
        this.crudDialog.update({
            production_identifier: GenericDataSource.from<
                DbBackground,
                number,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['production_identifier'] : null, 'production_identifier', productionIdentifierOptions),
            tags: GenericDataSource.from<
                DbBackground,
                Tag[],
                string,
                boolean | string | DataSourceOption<string, string>
            >(rowId ? row['tags'].map(i => i.text) : null, '_tags', tagOptions),
            name_locale: GenericDataSource.from<
                DbBackground,
                LocalizedString,
                string,
                boolean
            >(rowId ? row['name_locale'] : null, 'name_locale', options),
            image: GenericDataSource.from<
                DbBackground,
                string,
                string,
                boolean
            >(rowId ? row['image'] : null, 'image', imageOptions),
            categories: GenericDataSource.from<
                DbBackground,
                number[],
                string,
                boolean | DataSourceOption<string, string>
            >(rowId ? row['categories'] : null, 'categories', backgroundCategoriesOptions),
            featured: GenericDataSource.from<
                DbBackground,
                boolean,
                string,
                string
            >(rowId ? row['featured'] : null, 'featured', booleanOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('Backgrounds');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbBackground>);
        this.crudDialog.setActivity('backgrounds');
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
        const values: DbBackground = {
            id: this.editId,
            production_identifier: formValues['production_identifier'],
            name_locale: nameLocale,
            image: formValues['image'][0] instanceof File
                ? formValues['image'][0]
                : formValues['image'][0]['path'],
            archived: false,
            categories: formValues['categories'],
            featured: formValues['featured']
        };

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('Backgrounds/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('Backgrounds/update', {
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

        await this.$store.dispatch('BackgroundsReader/backgroundsRead', true);
        this.$emit('update', { id: this.editId ?? result?.createdId });
    }

    private dialogClose(): void {
        this.crudDialog.closeDialog();
        this.crudDialogStatus = 'read';
        this.editId = null;
        this.rowSelected = null;
    }

    /* PRIVATE */
    private async productionIdentifierBlur(event): Promise<void> {
        const value = event.target.value;

        if (this.editId && this.rowSelected.production_identifier === parseInt(value, 10)) {
            event.target.classList.remove('error');
            return;
        }

        if (value) {
            try {
                const productionIdentifiers = await backgroundService.getProductionIdentifiers();
                const result = await backgroundService.getBackgroundWithProductionIdentifier(value);

                if (!result) {
                    event.target.classList.remove('error');
                    return;
                }

                if (productionIdentifiers.unused.length === 0) {
                    globalToast(this.$t('activities.backgrounds.productionIdentifierNoUnused'), 'error');
                    event.target.classList.add('error');
                } else if (result) {
                    const proposed = [];

                    for (let loop = 0; loop < 5; loop++) {
                        proposed.push(productionIdentifiers.unused
                            .filter(i => !proposed.includes(i))
                            .find(i => i.toString().startsWith(value[0])));
                    }

                    globalToast(this.$t('activities.backgrounds.productionIdentifierExists', {
                        proposed: proposed.join(', ') + '...'
                    }), 'error');

                    event.target.classList.add('error');
                }
            } catch (error) {
                globalToast(this.$t('messages.requestError'), 'error');
            }
        }
    }
}
</script>
