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
import { DbProduct } from '@pictaccio/admin-gui/models/db_product';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    PRODUCT_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_columns';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';
import { ProductOptions } from '@pictaccio/shared/types/product_options';
import { ProductType } from '@pictaccio/shared/types/product_type';
import { Tag } from '@pictaccio/shared/types/tags';
import { isEmpty } from '@loufa/loufairy';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog product',
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
        'updateCrud',
        'prepareCatalogsOptions',
        'prepareCategoriesOptions',
        'prepareCustomProductsOptions',
        'prepareImagesOptions'
    ]
})
export default class CrudDialogProduct extends ActivityCrudDialog<DbProduct> {
    private columns = PRODUCT_COLUMNS;
    private crudDialog: CrudDialog<DbProduct>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteBackground;

    private crudDialogUpdateOptions = [{
        id: 'required',
        value: true
    }];

    public async deleteClick(id?: number, row?: DbProduct): Promise<void> {
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
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.products.single')}`
            }) === 'yes') {
            try {
                const { affected } = await this.$store.dispatch('Products/delete', {
                    filters: [[{
                        column: 'id',
                        operand: (id ?? this.editId).toString(),
                        operator: '=='
                    }]]
                });

                if (affected === 1) {
                    await this.$store.dispatch('Products/invalidateRange', {
                        start: this.editId,
                        end: null
                    });
                    await this.$store.dispatch('ProductsReader/makeDirty');
                    this.$emit('update');
                } else {
                    globalToast(this.$t('ERROR_DELETING'), 'error');
                }
            } catch (error) {
                globalToast(this.$t('messages.deleteError'), 'error');
            }
        }
    }

    public getFields(): any {
        return this.crudDialog.getFields();
    }

    public openDialog(rowId?: number, row?: DbProduct): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public prepareAllowMixOptions()
        : Iterable<DataSourceOption<string, (
        string |
        DataSourceEventListeners
        )>> {
        return [
            ...this.prepareBooleanOptions(),
            {
                id: 'eventListeners',
                value: {
                    click: event => this.productAllowMixClick(event)
                }
            }
        ];
    }

    public prepareBooleanOptions(): Iterable<DataSourceOption<string, string>> {
        return [{
            id: 'context',
            value: this.$t('generic.ui.enabled')
        }];
    }

    public prepareCatalogsOptions(catalogs)
        : Iterable<DataSourceOption<string, (
        boolean |
        string |
        DataSourceOption<string, string>
        )>> {
        return [{
            id: 'options',
            value: catalogs.map(i => ({ id: i.id, value: i.value }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.notInCatalog')
        }, {
            id: 'canUnset',
            value: true
        }, {
            id: 'multiple',
            value: true
        }];
    }

    public prepareCategoriesOptions(categories)
        : Iterable<DataSourceOption<string, (
        boolean |
        string |
        DataSourceOption<string, string>
        )>> {
        return [
            {
                id: 'options',
                value: categories.map(i => ({ id: i.id, value: i.value }))
            }, {
                id: 'placeholder',
                value: this.$t('dataTable.placeholder.chooseCategory')
            }, {
                id: 'canUnset',
                value: false
            }, ...this.crudDialogUpdateOptions
        ];
    }

    public prepareCustomProductsOptions(customProducts, rowId?: number, row?: DbProduct)
        : Iterable<DataSourceOption<string, (
        boolean |
        string |
        DataSourceOption<string, string> |
        DataSourceEventListeners
        )>> {
        rowId = rowId || this.editId;
        row = row || this.rowSelected;

        return [{
            id: 'options',
            value: customProducts.map(i => ({ id: i.id, value: (i.value as string) }))
        }, {
            id: 'placeholder',
            value: !(rowId && row['type'] === 'custom') ? this.$t('dataTable.placeholder.notCustomProduct') : null
        }, {
            id: 'canUnset',
            value: !(rowId && row['type'] === 'custom')
        }, {
            id: 'eventListeners',
            value: {
                change: event => this.productCustomProductChange(event)
            }
        }];
    }

    public prepareImagesOptions(themes, rowId?: number, row?: DbProduct, newThemeId?: number)
        : Iterable<DataSourceOption<string, (
        string |
        number |
        DataSourceOption<string, string> |
        { [key: string]: string } |
        DataSourceEventListeners
        )>> {
        return [{
            id: 'themes',
            value: themes.map(i => ({ id: i.id, value: (i.value as string) }))
        }, {
            id: 'selectedTheme',
            value: [rowId && row['type'] === 'themed' && row['theme']['themeSet']
                ? row['theme']['themeSet'].id
                : (newThemeId ?? null)]
        }, {
            id: 'defaultTheme',
            value: rowId && row['type'] === 'themed' && row['options']['defaultImage']
                ? row['options']['defaultImage']
                : null
        }, {
            id: 'themesMap',
            value: rowId && row['type'] === 'themed' && row['theme']['themes_map']
                ? row['theme']['themes_map']
                : null
        }, {
            id: 'selectable',
            value: 'one'
        }, {
            id: 'canUnset',
            value: !(rowId && row['type'] === 'themed')
        }, {
            id: 'eventListeners',
            value: {
                change: event => this.productThemeChange(event)
            }
        }];
    }

    public prepareScalingPriceOptions()
        : Iterable<DataSourceOption<string, (
        boolean |
        string |
        DataSourceEventListeners
        )>> {
        return [
            ...this.prepareBooleanOptions(),
            {
                id: 'eventListeners',
                value: {
                    click: event => this.productScalingPriceClick(event)
                }
            }
        ];
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbProduct, any, any, any>) {
        this.$nextTick(() => {
            (this.$refs['crud-dialog'] as CrudDialog<DbProduct>).refreshField(fieldRef, dataSource);
        });
    }

    public async updateCrud(rowId?: number, row?: DbProduct): Promise<void> {
        await Promise.all([
            this.$store.dispatch('CustomProductsReader/customProductsRead'),
            this.$store.dispatch('ProductThemesReader/productThemesRead'),
            this.$store.dispatch('ProductCategoriesReader/productCategoriesRead'),
            this.$store.dispatch('ProductCatalogsReader/productCatalogsRead')
        ]);

        const customProducts = this.$store.getters['CustomProductsReader/customProducts'];
        const themes = this.$store.getters['ProductThemesReader/productThemes'];
        const categories = this.$store.getters['ProductCategoriesReader/productCategories'];
        const catalogs = this.$store.getters['ProductCatalogsReader/productCatalogs'];

        if (!customProducts || !themes || !categories || !catalogs) {
            globalToast(this.$t('messages.requestError'), 'error');
            return;
        }
        let price: string;
        let tags: Tag[] = [];

        if (rowId) {
            price = row['options']['usePriceScale']
                ? row['options']['priceScale'].join(', ')
                : row['price'].toString()
            tags = row['_tags'] ?? [];
        }

        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.internalNameBlur(event)
                }
            }, ...this.crudDialogUpdateOptions
        ];
        const imagesOptions = [...this.prepareImagesOptions(themes, rowId, row), ...this.crudDialogUpdateOptions];
        const priceOptions = [
            {
                id: 'unit',
                value: this.$t('generic.units.dollar')
            }, {
                id: 'scalingPrice',
                value: row && row['options']['usePriceScale'] ? row['options']['usePriceScale'] as boolean : false
            }, ...this.crudDialogUpdateOptions
        ];
        const weightUnit = [
            {
                id: 'unit',
                value: this.$t('generic.units.grams')
            }, ...this.crudDialogUpdateOptions
        ];
        const customProductOptions = this.prepareCustomProductsOptions(customProducts, rowId, row);
        const categoryOptions = this.prepareCategoriesOptions(categories);
        const catalogOptions = this.prepareCatalogsOptions(catalogs);
        const tagOptions = [
            {
                id: 'placeholder',
                value: this.$t('dataTable.placeholder.createTags')
            }
        ];
        const booleanOptions = this.prepareBooleanOptions();
        const scalingPriceOptions = this.prepareScalingPriceOptions();
        const allowMixOptions = this.prepareAllowMixOptions();

        this.crudDialog.setRowSelected(row);
        this.crudDialog.update({
            priority: GenericDataSource.from<
                DbProduct,
                number,
                string,
                boolean
            >(rowId ? row['priority'] : null, 'priority'),
            internal_name: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            description_locale: GenericDataSource.from<
                DbProduct,
                LocalizedString,
                string,
                boolean
            >(rowId ? row['description_locale'] : null, 'description_locale'),
            name_locale: GenericDataSource.from<
                DbProduct,
                LocalizedString,
                string,
                boolean
            >(rowId ? row['name_locale'] : null, 'name_locale', this.crudDialogUpdateOptions),
            price: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string
            >(rowId ? price : null, 'price', priceOptions),
            weight: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string
            >(rowId ? row['weight'] : null, 'weight', weightUnit),
            images: GenericDataSource.from<
                DbProduct,
                Record<string, string>,
                string,
                boolean | string | number |
                DataSourceOption<string, string> | Record<string, string | boolean> | DataSourceEventListeners
            >(rowId ? row['images'] : null, 'images', [
                ...imagesOptions,
                {
                    id: 'disabled',
                    value: {
                        theme: rowId && row['type'] === 'custom',
                        images: false
                    }
                }
            ]),
            category: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string | DataSourceOption<string, string>
            >(rowId ? row['category'].id.toString() : null, 'options', categoryOptions),
            customProduct: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string | DataSourceOption<string, string> | DataSourceEventListeners
            >(rowId && row['custom'] ? row['custom'].customTemplate.id.toString() : null, 'custom', [
                ...customProductOptions,
                {
                    id: 'disabled',
                    value: rowId &&
                        (row['type'] === 'themed' || row['options']['usePriceScale'] || row['options']['allowMix'])
                }
            ]),
            tags: GenericDataSource.from<
                DbProduct,
                Tag[],
                string,
                boolean | string | DataSourceOption<string, string>
            >(rowId ? row['tags'].map(i => i.text) : null, '_tags', tagOptions),
            catalogs: GenericDataSource.from<
                DbProduct,
                string[],
                string,
                boolean | string | DataSourceOption<string, string>
            >(rowId ? row['catalogs'].map(i => i.id.toString()) : null, 'options', catalogOptions),
            scalingPrice: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string | boolean | DataSourceEventListeners
            >(rowId ? row['options']['usePriceScale'] : false, 'options', [
                ...scalingPriceOptions,
                {
                    id: 'disabled',
                    value: rowId && row['type'] === 'custom'
                }
            ]),
            allowMix: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string | boolean | DataSourceEventListeners
            >(rowId ? row['options']['allowMix'] : false, 'options', [
                ...allowMixOptions,
                {
                    id: 'disabled',
                    value: rowId && row['type'] === 'custom'
                }
            ]),
            groupPhotoAllow: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string
            >(rowId ? row['options']['groupPhotoAllow'] : false, 'options', booleanOptions),
            groupPhotoOnly: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string
            >(rowId ? row['options']['groupPictureOnly'] : false, 'options', booleanOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('Products');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbProduct>);
        this.crudDialog.setActivity('products');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();
        const price = parseFloat(formValues['price'].split(',')[0]);
        const options: ProductOptions = {
            defaultImage: formValues['default'],
            usePriceScale: formValues['scalingPrice'],
            priceScale: formValues['price'].split(',').map(price => price.trim()) || [0],
            allowMix: formValues['allowMix'],
            groupPhotoAllow: formValues['groupPhotoAllow'],
            groupPictureOnly: formValues['groupPhotoOnly']
        };
        const hasTheme = formValues['theme-id'].length === 1;
        const hasCustom = !isEmpty(formValues['customProduct']);
        let productType: ProductType = 'normal';

        const images = formValues['images'].reduce((imagesList, file) => {
            imagesList[file['fileId']] = file;
            return imagesList;
        }, {});

        for (const [key, image] of Object.entries(images)) {
            if (!(image instanceof File)) {
                // @ts-ignore
                images[key] = image.path;
            }
        }

        if (hasCustom) {
            productType = 'custom';
        } else if (hasTheme) {
            productType = 'themed';
        }

        const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['name_locale_' + i.locale]
        ]));
        const descriptionLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['description_locale_' + i.locale]
        ]));

        let values: DbProduct = {
            id: this.editId,
            internal_name: formValues['internal_name'],
            name_locale: nameLocale,
            archived: false,
            description_locale: descriptionLocale,
            images,
            options,
            price,
            priority: typeof formValues['priority'] === 'number'
                ? formValues['priority']
                : 0,
            type: productType,
            weight: formValues['weight'],
            _tags: formValues['tags'].map(i => ({ scope: 'product', text: i })),
            catalogs: formValues['catalogs'],
            category: formValues['category']
        };

        const themeSetId = formValues['theme-id'][0];
        let themesMap = {};
        let themes = {};

        switch (productType) {
        case 'themed':
            await this.$store.dispatch('ProductThemesReader/productThemeRead', themeSetId);
            themesMap = Object.entries(images)
                .reduce((themesMap, [p, v]) => {
                    themesMap[v['tempId']] = p;
                    return themesMap;
                }, {});
            themes = this.$store.getters['ProductThemesReader/productTheme']
                .map(i => i)
                .filter(i => themesMap[i.id])
                .reduce((themesList, theme) => {
                    themesList[theme.id] = theme.value;
                    return themesList
                }, {});

            values = {
                ...values,
                _default_theme: formValues['default_theme'],
                _themes: themes,
                _themes_map: themesMap,
                _themeSet: themeSetId,
                images: Object.fromEntries(
                    Object.entries(images).map(([k, v]) => [k, v as string])
                )
            };
            break;
        case 'custom':
            values = {
                ...values,
                _customTemplate: formValues['customProduct']
            };
            break;
        case 'normal':
        default:
            break;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('Products/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('Products/update', {
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

        await this.$store.dispatch('ProductsReader/productsRead', true);
        this.$emit('update', { id: this.editId ?? result?.createdId });
    }

    private dialogClose(): void {
        this.crudDialog.closeDialog();
        this.crudDialogStatus = 'read';
        this.editId = null;
        this.rowSelected = null;
    }

    /* PRIVATE */
    private productAllowMixClick(event): void {
        const allowMixSelected = event.target.checked;
        this.productCustomProductDisabledStatus(allowMixSelected);
    }

    private productCustomProductChange(customProductSelected: boolean): void {
        if (this.editId) {
            return;
        }

        // Scaling Price
        this.crudDialog.refreshField('scalingPrice',
            GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                boolean | string | DataSourceEventListeners
            >(!customProductSelected && this.rowSelected
                ? this.rowSelected['options']['usePriceScale']
                : false, 'options', [
                ...this.prepareScalingPriceOptions(),
                {
                    id: 'disabled',
                    value: customProductSelected
                }
            ]));

        // Images
        const themes = this.$store.getters['ProductThemesReader/productThemes'];

        this.crudDialog.refreshField('images',
            GenericDataSource.from<
                DbProduct,
                Record<string, string>,
                string,
                boolean | string | number |
                DataSourceOption<string, string> | Record<string, string | boolean> | DataSourceEventListeners
            >(null, 'images', [
                ...this.prepareImagesOptions(themes, this.editId, this.rowSelected),
                ...this.crudDialogUpdateOptions,
                {
                    id: 'disabled',
                    value: {
                        theme: customProductSelected,
                        images: false
                    }
                }
            ]));

        // Allow multiple subjects
        this.crudDialog.refreshField('allowMix',
            GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                boolean | string | DataSourceEventListeners
            >(customProductSelected && this.rowSelected
                ? this.rowSelected['options']['allowMix']
                : false, 'options', [
                ...this.prepareAllowMixOptions(),
                {
                    id: 'disabled',
                    value: customProductSelected
                }
            ]));
    }

    private productCustomProductDisabledStatus(shouldDisabled: boolean): void {
        const row = this.rowSelected;
        const rowId = this.editId;

        if (rowId && row['type'] === 'custom') {
            return;
        }

        this.crudDialog.refreshField('customProduct',
            GenericDataSource.from<
                DbProduct,
                number,
                string,
                boolean | string | DataSourceOption<string, string> | DataSourceEventListeners
            >(null, 'custom', [
                ...this.prepareCustomProductsOptions(this.$store.getters['CustomProductsReader/customProducts']),
                {
                    id: 'disabled',
                    value: shouldDisabled || (rowId &&
                        (row['type'] === 'themed' || row['options']['usePriceScale'] || row['options']['allowMix']))
                }
            ]));
    }

    private productScalingPriceClick(event): void {
        const scalingPriceSelected = event.target.checked;
        this.productCustomProductDisabledStatus(scalingPriceSelected);
    }

    private productThemeChange(themeSelected: boolean): void {
        this.productCustomProductDisabledStatus(themeSelected);
    }
}
</script>
