<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

:deep(td.table-variant) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 10.5rem;
}
</style>

<template>
    <section id="products" class="activity-wrapper">
        <crud-dialog-product ref="crud-dialog-product"
                             @update="updateDatatable">
            <template #category>
                <div v-if="$validateCapability('product:create')" class="link-container">
                    <a @click="addProductCategoryClick">
                        {{ $t('activities.productCategories.addBtn') }}
                    </a>
                </div>
            </template>
            <template #images>
                <div v-if="$validateCapability('product:create')" class="link-container">
                    <a @click="addProductThemeClick">
                        {{ $t('activities.productThemes.addBtn') }}
                    </a>
                </div>
            </template>
            <template #customProduct>
                <div v-if="$validateCapability('product:create')" class="link-container">
<!--                    <a @click="addProductCustomProductClick">TODO: PSFCA-3074-->
<!--                        {{ $t('activities.customProduct.addBtn') }}-->
<!--                    </a>-->
                </div>
            </template>
            <template #catalogs>
                <div v-if="$validateCapability('product:create')" class="link-container">
                    <a @click="addProductCatalogClick">
                        {{ $t('activities.productCatalogs.addBtn') }}
                    </a>
                </div>
            </template>
        </crud-dialog-product>
        <crud-dialog-product-custom ref="crud-dialog-custom-product"
                                    @update="confirmProductCustomProduct"/>
        <crud-dialog-product-theme ref="crud-dialog-theme"
                                   @update="confirmProductTheme"/>
        <crud-dialog-product-category ref="crud-dialog-category"
                                      @update="confirmProductCategory"/>
        <crud-dialog-catalog ref="crud-dialog-catalog"
                             @update="confirmProductCatalog"/>
        <activities-tabs ref="tabs"/>
        <div ref="products-container" class="activity-control table-holder">
            <data-table ref="products-table"
                        :datatableName="'products'"
                        :tableData="products"
                        :row-selectable="$validateCapability('product:update')"
                        @control-edit-product="editRowClick"
                        @control-archive-product="deleteRowClick"
                        @reset-filters="resetFilters"
                        @row-selected="editRowClick">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('product:create')"-->
<!--                                   :name-ref="'products-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.products.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="products-container-tutorial"-->
<!--                                   :name-ref="'products-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-left_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('products-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.products.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="products.headers"
                                            :rows="6"
                                            @placeholder-clicked="addProductClick"/>
                </template>
                <template #context-controls>
                    <button v-if="$validateCapability('product:create')"
                            ref="add-btn"
                            class="btn btn-primary add"
                            @click="addProductClick">
                        {{ $t('activities.products.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('product:update')"
                            class="btn btn-icon-only"
                            name="edit-product">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('product:delete') && archiveFeature"
                            class="btn btn-icon-only destructive" name="archive-product">
                        <font-awesome-icon :icon="['far', 'box-archive']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DataSourceOption } from '@pictaccio/admin-gui/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/core/types/data_source_event_listeners';
import { FilterDescriptor } from '@pictaccio/admin-gui/core/types/filter_descriptors';
import { GenericDataSource } from '@pictaccio/admin-gui/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/environment';
import { DbProduct } from '@pictaccio/admin-gui/models/db_product';
import { BooleanFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/boolean_filter_function';
import { FilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/utils/filter_functions/string_filter_function';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { RemoteStore } from '@pictaccio/admin-gui/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/views/components/widgets/ActivitiesTabs.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import CrudDialogCatalog
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue';
import CrudDialogProduct
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogProduct.vue';
import CrudDialogProductCategory
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue';
import CrudDialogProductCustom
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogProductCustom.vue';
import CrudDialogProductTheme
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue';
import CrudDialog from '@pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue';
import {
    PRODUCT_COLUMNS
} from '@pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_columns';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import MultiListFilterItem
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/MultiListFilterItem.vue';
import Filters from '@pictaccio/admin-gui/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Products',
    components: {
        CrudDialogProduct,
        CrudDialogProductCategory,
        CrudDialogProductTheme,
        CrudDialogCatalog,
        CrudDialogProductCustom,
        TutorialText,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        DataTable,
        CrudDialog,
        DocsLink,
        PlaceholderDataTable
    }
})
export default class Products extends AdminActivities {
    private products = PRODUCT_COLUMNS;
    private crudDialogProduct: CrudDialogProduct;
    private crudDialogTheme: CrudDialogProductTheme;
    private crudDialogCategory: CrudDialogProductCategory;
    private crudDialogCustomProduct: CrudDialogProductCustom;
    private crudDialogCatalog: CrudDialogCatalog;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteProduct;

    @Hook
    public beforeRouteUpdate(to, from, next): void {
        const tabs = this.$refs['tabs'] as ActivitiesTabs;
        const filtersHolder = this.$refs['filters-holder'] as Filters;

        if (to.name === from.name &&
            !to.params.extra &&
            tabs &&
            filtersHolder) {
            tabs.setBind('');
            filtersHolder.clearFilters();
        }

        next();
    }

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'products');
    }

    public async mounted(): Promise<void> {
        const dataTable = this.$refs['products-table'] as DataTable;

        super.mounted();

        try {
            await Promise.all([
                this.$store.dispatch('SessionsReader/sessionsRead'),
                this.$store.dispatch('ProductsReader/tagsRead')
            ]);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }

        dataTable.setRemoteStore(
            new RemoteStore<DbProduct>('Products'), !shouldExtraSilenceRead(this.extra));
        await dataTable.applyPermanentFilters([new BooleanFilterFunction('false', 'is', 'archived')], true);

        this.crudDialogProduct = this.$refs['crud-dialog-product'] as CrudDialogProduct;
        this.crudDialogTheme = this.$refs['crud-dialog-theme'] as CrudDialogProductTheme;
        this.crudDialogCategory = this.$refs['crud-dialog-category'] as CrudDialogProductCategory;
        this.crudDialogCustomProduct = this.$refs['crud-dialog-custom-product'] as CrudDialogProductCustom;
        this.crudDialogCatalog = this.$refs['crud-dialog-catalog'] as CrudDialogCatalog;

        if (this.$route.query && this.$route.query['filter-id'] && !Array.isArray(this.$route.query['filter-id'])) {
            const ids = this.$route.query['filter-id'].split(',');
            this.applyFilters([new IdFilterFunction(ids, 'is', 'id')]);
            this.$nextTick(() => {
                (this.$refs['filters-holder'] as Filters)
                    .setSearchFilters(this.$route.query['filter-id'].toString());
            });
        }

        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addProductCustomProductClick(): void {
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

    private addProductClick(): void {
        if (!this.$validateCapability('product:create')) {
            return;
        }

        this.crudDialogProduct.openDialog();
    }

    private addProductCategoryClick(): void {
        if (!this.$validateCapability('product:create')) {
            return;
        }

        this.crudDialogCategory.openDialog();
    }

    private addProductThemeClick(): void {
        if (!this.$validateCapability('product:create')) {
            return;
        }

        this.crudDialogTheme.openDialog();
    }

    private applyFilters(filters: FilterFunction[]): void {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        (this.$refs['tabs'] as ActivitiesTabs).setBind(extra);
        (this.$refs['products-table'] as DataTable).applyFilters(filters);
    }

    private async confirmProductCategory(event): Promise<void> {
        const categories = this.$store.getters['ProductCategoriesReader/productCategories'];

        this.crudDialogProduct.refreshField('category',
            GenericDataSource.from<
                DbProduct,
                number[],
                string,
                boolean | string | DataSourceOption<string, string>
            >([parseInt(event.id)], 'options', this.crudDialogProduct.prepareCategoriesOptions(categories)));
    }

    private async confirmProductTheme(event): Promise<void> {
        const productThemes = await this.$store.getters['ProductThemesReader/productThemes'];

        this.crudDialogProduct.refreshField('images',
            GenericDataSource.from<
                DbProduct,
                string[],
                string,
                string | number |
                DataSourceOption<string, string> | { [key: string]: string } | DataSourceEventListeners
            >([event.id], 'images', this.crudDialogProduct.prepareImagesOptions(productThemes, null, null, event.id)));
    }

    private async confirmProductCustomProduct(event): Promise<void> {
        const customProducts = this.$store.getters['CustomProductsReader/customProducts'];

        this.crudDialogProduct.refreshField('customProduct',
            GenericDataSource.from<
                DbProduct,
                number[],
                string,
                boolean | string | DataSourceOption<string, string> | DataSourceEventListeners
            >([parseInt(event.id)], 'options', this.crudDialogProduct.prepareCustomProductsOptions(customProducts)));
    }

    private async confirmProductCatalog(event): Promise<void> {
        const catalog = this.$store.getters['ProductCatalogsReader/productCatalogs'];

        this.crudDialogProduct.refreshField('catalogs',
            GenericDataSource.from<
                DbProduct,
                number[],
                string,
                boolean | string | DataSourceOption<string, string>
            >([parseInt(event.id)], 'options', this.crudDialogProduct.prepareCatalogsOptions(catalog)));
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialogProduct.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
        if (!this.$validateCapability('product:update')) {
            return;
        }

        this.crudDialogProduct.openDialog(event.rowId, event.row);
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    /* PRIVATE */
    private createFilters(): void {
        this.filters = [
            {
                pop: true,
                component: MainTextFilterItem,
                name: 'search',
                filters: [
                    { filterFunction: IdFilterFunction, column: 'id' },
                    { filterFunction: StringFilterFunction, column: 'internal_name' }
                ]
            },
            {
                pop: true,
                component: MultiListFilterItem,
                datasource: GenericDataSource.from<
                    never,
                    null,
                    string,
                    DataSourceOption<string, string>
                >(null, '_tags', [{
                    id: 'options',
                    value: this.$store.getters['ProductsReader/tags']?.map(tag => ({
                        id: tag.id,
                        value: tag.text
                    }))
                }]),
                name: 'tags',
                filters: [
                    { filterFunction: IdFilterFunction, column: '_tags' }
                ]
            }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private async updateDatatable(): Promise<void> {
        await (this.$refs['products-table'] as DataTable).refresh();
    }
}
</script>
