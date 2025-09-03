<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.list-interface {
    --list-top-space: 4.5rem;
    --list-max-height: calc(var(--boxes-max-height) - 1.6rem);
    --list-min-height: calc(var(--boxes-min-height) - var(--list-top-space));
    position: relative;
    max-width: $ruler-input-max-width;
    margin: 0 auto;
    width: 100%;
}

.product-box {
    position: absolute;
    inset: var(--list-top-space) 0 0 0;
    max-height: var(--list-max-height);

    :deep(.list-input) {
        height: 100%;
    }

    :deep(.list-selection) {
        position: absolute;
        inset: 0;
        max-height: unset !important;

        label {
            --font-weight: 400 !important;
        }
    }
}

.overlay-ui {
    max-width: $ruler-input-max-width;
    justify-content: space-between;
    margin-bottom: 1rem;

    label {
        margin: 0.5rem;
    }

    .h4 {
        --font-weight: 400;
        margin: 0 0 1rem;
    }

    .btn-icon {
        width: $ruler-input-height;
    }
}

.spinner {
    position: absolute;
    z-index: 20;
    @include center();
    width: 8rem;
}

.no-list-item {
    width: 100%;
    font-size: 2.3rem;
    justify-content: space-between;

    span {
        text-align: center;
    }
}
</style>

<template>
    <div class="list-interface">
        <crud-dialog-catalog ref="crud-dialog-group"
                             @update="confirmProductCatalog">
            <template #products>
                <button v-if="$validateCapability('product:create')"
                        class="btn btn-icon btn-primary"
                        @click="addProductClick">
                    <font-awesome-icon :icon="['far', 'plus']"/>
                </button>
            </template>
        </crud-dialog-catalog>
        <crud-dialog ref="crud-dialog-product"
                     :permission="'product'"
                     @close="dialogProductClose"
                     @confirm="confirmProduct">
            <template #category>
                <div v-if="$validateCapability('product:create')"
                     class="link-container" >
                    <a @click="addProductCategoryClick">
                        {{ $t('activities.productCategories.addBtn') }}
                    </a>
                </div>
            </template>
            <template #images>
                <div v-if="$validateCapability('product:create')"
                     class="link-container">
                    <a @click="addProductThemeClick">
                        {{ $t('activities.productThemes.addBtn') }}
                    </a>
                </div>
            </template>
            <template #customProduct>
                <div v-if="$validateCapability('product:create')"
                     class="link-container">
                    <a @click="addCustomProductClick">
                        {{ $t('activities.customProduct.addBtn') }}
                    </a>
                </div>
            </template>
        </crud-dialog>
        <crud-dialog ref="crud-dialog-theme"
                     :permission="'product'"
                     @close="dialogThemeClose"
                     @confirm="confirmProductTheme"/>
        <crud-dialog-product-custom ref="crud-dialog-custom-product"
                                    @update="confirmCustomProduct"/>
        <crud-dialog ref="crud-dialog-category"
                     :permission="'product'"
                     @close="dialogCategoryClose"
                     @confirm="confirmProductCategory"/>
        <div class="overlay-ui">
            <label>
                <h4 class="h4">
                    {{ $t('activities.productCatalogs.title') }}
                </h4>
                <tooltip :sup="true">
                    <span class="help-text">
                        {{ $t('activities.createSession.groups.productCatalogsHelper') }}
                    </span>
                </tooltip>
            </label>
            <button v-if="$validateCapability('product:create')"
                    class="btn btn-primary btn-icon"
                    @click="addProductCatalogClick">
                <font-awesome-icon :icon="['far', 'plus']"/>
            </button>
        </div>
        <div class="product-box">
            <list-selector :listName="'selected-catalogs'"
                           :current-selection="currentSelection"
                           v-if="productCatalogListVisible"
                           ref="catalog-list">
                <template v-if="productCatalogList().length > 0" #default>
                    <label v-for="productCatalog in productCatalogList()"
                           :key="productCatalog.id"
                           :value="productCatalog.id">
                        <span>
                            {{ productCatalog.value }}
                        </span>
                    </label>
                </template>
                <template #messageEmpty>
                    <div class="no-list-item" @click="addProductCatalogClick">
                        <span>
                            {{ $t('activities.createSession.groups.emptyList') }}
                        </span>
                        <font-awesome-icon :icon="['fas', 'arrow-up']"/>
                    </div>
                </template>
            </list-selector>
            <div v-if="!productCatalogListVisible" class="spinner">
                <spinner/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isEmpty } from '@loufa/loufairy';
import { ReaderResponse } from '@pictaccio/admin-gui/core/reader_response';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSourceOption } from '@pictaccio/admin-gui/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { DbProduct } from '@pictaccio/admin-gui/models/db_product';
import { DbProductCatalog } from '@pictaccio/admin-gui/models/db_product_catalog';
import { DbProductCategory } from '@pictaccio/admin-gui/models/db_product_category';
import { DbProductThemeSet } from '@pictaccio/admin-gui/models/db_product_theme_set';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import ListSelector from '@pictaccio/admin-gui/views/components/widgets/ListSelector.vue';
import Spinner from '@pictaccio/admin-gui/views/components/widgets/Spinner.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import CrudDialogCatalog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue';
import CrudDialogProductCustom
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogProductCustom.vue';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    PRODUCT_CATEGORIES_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_categories_columns';
import {
    PRODUCT_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_columns';
import {
    PRODUCT_THEMES_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_themes_columns';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import CreateSessionsSteps from '@pictaccio/admin-gui/views/private/activities/create_session/create_sessions_steps';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';
import { ProductOptions } from '@pictaccio/shared/types/product_options';
import { ProductType } from '@pictaccio/shared/types/product_type';
import { StoreLanguageItem } from '@pictaccio/shared/types/store_language_item';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'List Product Catalog',
    components: {
        CrudDialogCatalog,
        CrudDialogProductCustom,
        Tooltip,
        Spinner,
        FontAwesomeIcon,
        ListSelector,
        FiltersHolder: Filters,
        CrudDialog
    }
})
export default class ListProductCatalog extends CreateSessionsSteps {
    private rowSelected: any;
    private crudDialogGroupStatus: CRUDStatus = 'read';
    private crudDialogProductStatus: CRUDStatus = 'read';
    private crudDialogThemeStatus: CRUDStatus = 'read';
    private crudDialogCategoryStatus: CRUDStatus = 'read';
    private products = PRODUCT_COLUMNS;
    private productThemes = PRODUCT_THEMES_COLUMNS;
    private categories = PRODUCT_CATEGORIES_COLUMNS;
    private crudDialogCatalog: CrudDialogCatalog;
    private crudDialogProduct: CrudDialog<DbProduct>;
    private crudDialogTheme: CrudDialog<DbProductThemeSet>;
    private crudDialogCategory: CrudDialog<DbProductCategory>;
    private crudDialogCustomProduct: CrudDialogProductCustom;

    private productCatalogListVisible = false;
    private currentSelection: string[] = [];
    private crudDialogUpdateOptions = [{
        id: 'required',
        value: true
    }];
    private newProductCatalogName = 'unnamed';

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        await this.$store.dispatch('ProductCatalogsReader/productCatalogsRead', true);
        await this.$nextTick(() => { this.productCatalogListVisible = true });

        this.crudDialogCatalog = this.$refs['crud-dialog-group'] as CrudDialogCatalog;
        this.crudDialogProduct = this.$refs['crud-dialog-product'] as CrudDialog<DbProduct>;
        this.crudDialogTheme = this.$refs['crud-dialog-theme'] as CrudDialog<DbProductThemeSet>;
        this.crudDialogCategory = this.$refs['crud-dialog-category'] as CrudDialog<DbProductCategory>;
        this.crudDialogCustomProduct = this.$refs['crud-dialog-custom-product'] as CrudDialogProductCustom;
    }

    /* EVENT HANDLERS */
    private addProductClick(): void {
        this.crudDialogProduct.setActivity('products');
        this.crudDialogProduct.setColumns(this.products);
        this.crudDialogProduct.setCrudDialogStatus('create');
        this.crudDialogProduct.openDialog();
        this.crudDialogProductStatus = 'create';

        const formValues = this.crudDialogCatalog.getFields();

        if (formValues['internal_name']) {
            this.newProductCatalogName = formValues['internal_name'];
        }

        this.$nextTick(() => {
            this.updateProductCrud();
        });
    }

    private addCustomProductClick(): void {
        if (!this.$validateCapability('product:create')) {
            return;
        }
        this.crudDialogCustomProduct.openDialog();
    }

    private addProductCatalogClick(): void {
        if (!this.$validateCapability('product:create')) {
            return;
        }
        this.crudDialogCatalog.openDialog();
    }

    private addProductThemeClick(): void {
        this.crudDialogTheme.setActivity('productThemes');
        this.crudDialogTheme.setColumns(this.productThemes);
        this.crudDialogTheme.setCrudDialogStatus('create');
        this.crudDialogTheme.openDialog();
        this.crudDialogThemeStatus = 'create';

        this.$nextTick(() => {
            this.updateProductThemeCrud();
        });
    }

    private addProductCategoryClick(): void {
        this.crudDialogCategory.setActivity('productCategories');
        this.crudDialogCategory.setColumns(this.categories);
        this.crudDialogCategory.setCrudDialogStatus('create');
        this.crudDialogCategory.openDialog();
        this.crudDialogCategoryStatus = 'create';

        this.$nextTick(() => {
            this.updateProductCategoryCrud();
        });
    }

    private dialogProductClose(): void {
        this.crudDialogProduct.closeDialog();
        this.crudDialogProductStatus = 'read';
        this.rowSelected = null;
    }

    private dialogThemeClose(): void {
        this.crudDialogTheme.closeDialog();
        this.crudDialogThemeStatus = 'read';
        this.rowSelected = null;
    }

    private dialogCategoryClose(): void {
        this.crudDialogCategory.closeDialog();
        this.crudDialogCategoryStatus = 'read';
        this.rowSelected = null;
    }

    /* PRIVATE */
    private async confirmProduct(): Promise<void> {
        if (this.crudDialogProductStatus !== 'create') {
            return;
        }
        const form = this.crudDialogProduct;
        const formValues = form.getFields();

        const price = parseFloat(formValues['price'].split(',')[0]);
        const options: ProductOptions = {
            defaultImage: formValues['default'],
            usePriceScale: formValues['scalingPrice'],
            priceScale: formValues['price'].split(',') || [0],
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
                images[key] = image['path'];
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
            id: formValues['id'],
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
            catalogs: [],
            category: formValues['category']
        };

        if (productType === 'themed') {
            const themeSetId = formValues['theme-id'][0];
            let themesMap = {};
            let themes = {};

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
                _themeSet: themeSetId
            };
        }

        if (productType === 'custom') {
            values = {
                ...values,
                _customTemplate: formValues['customProduct']
            };
        }

        try {
            const result = await this.$store.dispatch('Products/add', { item: values });

            if (result.createdId !== null) {
                await this.$store.dispatch('ProductsReader/makeDirty');
                await this.$store.dispatch('ProductsReader/productsRead');
                const products = this.getProductList();
                const formValues = this.crudDialogCatalog.getFields();
                const productCatalogsProductsSelection = formValues['products'] ?? [];

                this.dialogProductClose();
                this.$nextTick(() => {
                    this.crudDialogCatalog.refreshField('products',
                        GenericDataSource.from<
                            DbProductCatalog,
                            string[],
                            string,
                            DataSourceOption<string, string>
                        >([...productCatalogsProductsSelection, result.createdId], 'products', products));
                });
            }
        } catch (error) {
            globalToast(this.$t('messages.createError'), 'error');
        }
    }

    private async confirmProductCatalog(event): Promise<void> {
        await this.updateList(event.id);
    }

    private async confirmProductTheme(): Promise<void> {
        if (this.crudDialogThemeStatus !== 'create') {
            return;
        }
        const form = this.crudDialogTheme;
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
            id: formValues['id'],
            internal_name: formValues['internal_name'],
            themes: themes,
            scrubFlag: false
        };

        try {
            const result = await this.$store.dispatch('ProductThemes/add', { item: values });

            if (result.createdId !== null) {
                await this.$store.dispatch('ProductThemesReader/makeDirty');
                await this.$store.dispatch('ProductThemesReader/productThemesRead');
                const themes = this.$store.getters['ProductThemesReader/productThemes'];

                this.dialogThemeClose()
                this.$nextTick(() => {
                    this.crudDialogProduct.refreshField('images',
                        GenericDataSource.from<
                            DbProduct,
                            Record<string, string>,
                            string,
                            boolean | string | number | DataSourceOption<string, string> | Record<string, string>
                        >(null, 'images', this.getImagesOptions(themes, result.createdId)));
                });
            }
        } catch (error) {
            globalToast(this.$t('messages.createError'), 'error');
        }
    }

    private async confirmProductCategory(): Promise<void> {
        if (this.crudDialogCategoryStatus !== 'create') {
            return;
        }
        const form = this.crudDialogCategory;
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

        try {
            const result = await this.$store.dispatch('ProductCategories/add', { item: values });

            if (result.createdId !== null) {
                await this.$store.dispatch('ProductCategoriesReader/makeDirty');
                await this.$store.dispatch('ProductCategoriesReader/productCategoriesRead');
                const categories = this.$store.getters['ProductCategoriesReader/productCategories'];

                this.dialogCategoryClose();
                this.$nextTick(() => {
                    this.crudDialogProduct.refreshField('category',
                        GenericDataSource.from<
                            DbProduct,
                            number,
                            string,
                            boolean | string | DataSourceOption<string, string>
                        >(result.createdId, 'options', this.getCategoriesOptions(categories)));
                });
            }
        } catch (error) {
            globalToast(this.$t('messages.createError'), 'error');
        }
    }

    private async confirmCustomProduct(event): Promise<void> {
        const customProducts = this.$store.getters['CustomProductsReader/customProducts'];

        this.$nextTick(() => {
            this.crudDialogProduct.refreshField('customProduct',
                GenericDataSource.from<
                    DbProduct,
                    number,
                    string,
                    boolean | string | DataSourceOption<string, string>
                >(event.id, 'options', this.getCustomProductsOptions(customProducts)));
        });
    }

    private getCustomProductsOptions(customProducts)
            : Iterable<DataSourceOption<string, (
                boolean |
                string |
                DataSourceOption<string, string>
            )>> {
        return [{
            id: 'options',
            value: customProducts.map(i => ({ id: i.id, value: (i.value as string) }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.notCustomProduct')
        }, {
            id: 'canUnset',
            value: true
        }];
    }

    private getCategoriesOptions(categories)
            : Iterable<DataSourceOption<string, (
                boolean |
                string |
                DataSourceOption<string, string>
            )>> {
        return [{
            id: 'options',
            value: categories.map(i => ({ id: i.id, value: i.value }))
        }, {
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.chooseCategory')
        }, {
            id: 'canUnset',
            value: false
        }, ...this.crudDialogUpdateOptions];
    }

    private getImagesOptions(themes, selected?: string[])
            : Iterable<DataSourceOption<string, (
                number |
                DataSourceOption<string, string>
            )>> {
        return [{
            id: 'themes',
            value: themes.map(i => ({ id: i.id, value: (i.value as string) }))
        }, {
            id: 'selectedTheme',
            value: selected ?? null
        }, {
            id: 'defaultTheme',
            value: null
        }, {
            id: 'themesMap',
            value: null
        }, {
            id: 'selectable',
            value: 'one'
        }];
    }

    private getTagOptions(): Iterable<DataSourceOption<string, string>> {
        return [{
            id: 'placeholder',
            value: this.$t('dataTable.placeholder.createTags')
        }];
    }

    private getProductList(): Iterable<DataSourceOption<string, DataSourceOption<string, string>>> {
        return this.$store.getters['ProductsReader/products']
            .map(i => ({ id: i.id, value: i.value }));
    }

    private productCatalogList(): ReaderResponse {
        return this.$store.getters['ProductCatalogsReader/productCatalogs'];
    }

    private async updateList(id?: number): Promise<void> {
        this.currentSelection = (this.$refs['catalog-list'] as ListSelector).getSelection();
        await this.$store.dispatch('ProductCatalogsReader/productCatalogsRead', true);
        this.productCatalogListVisible = false;
        if (id) {
            this.currentSelection.push(id.toString());
        }
        this.$nextTick(() => {
            this.productCatalogListVisible = true
        });
    }

    // PSFCA-2739 Not dry bc gonna be yeet once the new crud dialog is applyed
    private async productionNameCategoryBlur(event): Promise<void> {
        const value = event.target.value;

        if (value) {
            const result = await this.$store.dispatch('ProductCategories/query', [[{
                column: 'internal_name',
                operator: '==',
                operand: value
            }]]);

            if (!result || result.length === 0) {
                event.target.classList.remove('error');
            } else {
                globalToast(this.$t('activities.all.productionNameExists'), 'error');

                event.target.classList.add('error');
            }
        }
    }

    private async updateProductCategoryCrud(): Promise<void> {
        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.productionNameCategoryBlur(event)
                }
            }, ...this.crudDialogUpdateOptions
        ];

        this.crudDialogCategory.update({
            priority: GenericDataSource.from<
                DbProductCategory,
                number,
                never,
                never
            >(null, 'priority'),
            internal_name: GenericDataSource.from<
                DbProductCategory,
                string,
                string,
                boolean | DataSourceEventListeners
            >(null, 'internal_name', internalNameOptions),
            name_locale: GenericDataSource.from<
                DbProductCategory,
                LocalizedString,
                string,
                boolean
            >(null, 'name_locale', this.crudDialogUpdateOptions)
        });
    }

    // PSFCA-2739 Not dry bc gonna be yeet once the new crud dialog is applyed
    private async productionNameProductBlur(event): Promise<void> {
        const value = event.target.value;

        if (value) {
            const result = await this.$store.dispatch('Products/query', [[{
                column: 'internal_name',
                operator: '==',
                operand: value
            }]]);

            if (!result || result.length === 0) {
                event.target.classList.remove('error');
            } else {
                globalToast(this.$t('activities.all.productionNameExists'), 'error');

                event.target.classList.add('error');
            }
        }
    }

    private async updateProductCrud(): Promise<void> {
        await this.$store.dispatch('CustomProductsReader/customProductsRead');
        await this.$store.dispatch('ProductThemesReader/productThemesRead');
        await this.$store.dispatch('ProductCategoriesReader/productCategoriesRead');

        const customProducts = this.$store.getters['CustomProductsReader/customProducts'];
        const themes = this.$store.getters['ProductThemesReader/productThemes'];
        const categories = this.$store.getters['ProductCategoriesReader/productCategories'];

        if (!customProducts || !themes || !categories) {
            globalToast(this.$t('messages.requestError'), 'error');
            return;
        }

        const priceUnit = [
            {
                id: 'unit',
                value: this.$t('generic.units.dollar')
            }, ...this.crudDialogUpdateOptions
        ];

        const weightUnit = [
            {
                id: 'unit',
                value: this.$t('generic.units.grams')
            }, ...this.crudDialogUpdateOptions
        ];

        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.productionNameProductBlur(event)
                }
            }, ...this.crudDialogUpdateOptions
        ];

        const imagesOptions = [...this.getImagesOptions(themes), ...this.crudDialogUpdateOptions];

        const customProductOptions = this.getCustomProductsOptions(customProducts);

        const categoryOptions = [...this.getCategoriesOptions(categories), ...this.crudDialogUpdateOptions];

        const tagOptions = this.getTagOptions();

        const catalogOptions = [{
            id: 'options',
            value: [{
                id: 'unnamed',
                value: `${this.$t('generic.ui.unnamedYet')}`
            }, {
                id: this.newProductCatalogName,
                value: `${this.newProductCatalogName} (${this.$t('generic.ui.new', { gender: 'm' })})`
            }]
        }, {
            id: 'disabled',
            value: true
        }, {
            id: 'canUnset',
            value: true
        }, {
            id: 'multiple',
            value: true
        }];

        const booleanOptions = [
            {
                id: 'context',
                value: this.$t('generic.ui.enabled')
            }
        ];

        this.crudDialogProduct.update({
            priority: GenericDataSource.from<
                DbProduct,
                number,
                string,
                boolean
            >(null, 'priority'),
            internal_name: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | DataSourceEventListeners
            >(null, 'internal_name', internalNameOptions),
            description_locale: GenericDataSource.from<
                DbProduct,
                LocalizedString,
                string,
                boolean
            >(null, 'description_locale'),
            name_locale: GenericDataSource.from<
                DbProduct,
                LocalizedString,
                string,
                boolean
            >(null, 'name_locale', this.crudDialogUpdateOptions),
            price: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string
            >(null, 'price', priceUnit),
            weight: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string
            >(null, 'weight', weightUnit),
            images: GenericDataSource.from<
                DbProduct,
                { [key: string]: string },
                string,
                boolean | string | number | DataSourceOption<string, string> | Record<string, string>
            >(null, 'images', imagesOptions),
            tags: GenericDataSource.from<
                DbProduct,
                string[],
                string,
                boolean | string | DataSourceOption<string, string>
            >(null, 'options', tagOptions),
            category: GenericDataSource.from<
                DbProduct,
                string,
                string,
                boolean | string | DataSourceOption<string, string>
            >(null, 'options', categoryOptions),
            customProduct: GenericDataSource.from<
                DbProduct,
                number,
                string,
                boolean | string | DataSourceOption<string, string>
            >(null, 'options', customProductOptions),
            catalogs: GenericDataSource.from<
                DbProduct,
                string[],
                string,
                boolean | DataSourceOption<string, string>[]
            >([this.newProductCatalogName], 'options', catalogOptions),
            scalingPrice: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string
            >(false, 'options', booleanOptions),
            allowMix: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string
            >(false, 'options', booleanOptions),
            groupPhotoAllow: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string
            >(false, 'options', booleanOptions),
            groupPhotoOnly: GenericDataSource.from<
                DbProduct,
                boolean,
                string,
                string
            >(false, 'options', booleanOptions)
        });
    }

    // PSFCA-2739 Not dry bc gonna be yeet once the new crud dialog is applyed
    private async productionNameThemeBlur(event): Promise<void> {
        const value = event.target.value;

        if (value) {
            const result = await this.$store.dispatch('ProductThemes/query', [[{
                column: 'internal_name',
                operator: '==',
                operand: value
            }]]);

            if (!result || result.length === 0) {
                event.target.classList.remove('error');
            } else {
                globalToast(this.$t('activities.all.productionNameExists'), 'error');

                event.target.classList.add('error');
            }
        }
    }

    private async updateProductThemeCrud(): Promise<void> {
        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.productionNameThemeBlur(event)
                }
            }, ...this.crudDialogUpdateOptions
        ];

        this.crudDialogTheme.update({
            internal_name: GenericDataSource.from<
                DbProductThemeSet,
                string,
                string,
                boolean | DataSourceEventListeners
            >(null, 'internal_name', internalNameOptions),
            themes: GenericDataSource.from<
                DbProductThemeSet,
                Record<string, LocalizedString>,
                string,
                boolean
            >(null, 'themes', this.crudDialogUpdateOptions)
        });
    }
}
</script>
