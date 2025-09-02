<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';
.categories-infos {
    grid-template-columns: 1fr 1fr !important;

    [type=text] {
        grid-column: unset !important;
    }

    .image-label,
    .image-input {
        grid-column: 2 / -1 !important;
    }

    .image-label {
        grid-row: 1 / 2;
    }

    .image-input {
        grid-row: 2 / 7;
    }
}
</style>

<template>
    <section id="backgrounds" class="activity-wrapper">
        <crud-dialog-background ref="crud-dialog-background"
                                @update="updateDatatable"/>
        <activities-tabs ref="tabs"/>
        <div ref="backgrounds-container" class="activity-control table-holder">
            <data-table :tableData="backgrounds"
                        :name="'backgrounds'"
                        ref="backgrounds-table"
                        :row-selectable="$validateCapability('background:update')"
                        @row-selected="controlsActivated"
                        @reset-filters="resetFilters"
                        @control-edit-background="editRowClick"
                        @control-archive-background="deleteRowClick"
                        @control-feature-background="toggleFeaturedClick"
                        :cellControl="['featured']">
                <template #filters>
                    <filters-holder ref="filters-holder"
                                    v-if="filtersHolderVisible"
                                    :allowed-filters="filters"
                                    @apply-filters="applyFilters" />
                </template>
                <template #tutorial>
<!--                    <tutorial-text ref="add-btn-tutorial"-->
<!--                                   v-if="$validateCapability('background:create')"-->
<!--                                   :name-ref="'backgrounds-add-btn-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'top-right_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('add-btn')">-->
<!--                        {{ $t('activities.backgrounds.tutorial.addBtn') }}-->
<!--                    </tutorial-text>-->
<!--                    <tutorial-text ref="backgrounds-container-tutorial"-->
<!--                                   :name-ref="'backgrounds-container-tutorial'"-->
<!--                                   :background-shape="'blob-h-1'"-->
<!--                                   :ui-offset="{ ui: '0 0', next: '1rem 1rem', skip: '5.5rem -1.5rem' }"-->
<!--                                   :orientation="'bottom-left_up'"-->
<!--                                   @mounted="getTutorialTargetPosition('backgrounds-container',-->
<!--                                   '.table-holder, .placeholder-container')">-->
<!--                        {{ $t('activities.backgrounds.tutorial.whatIs') }}-->
<!--                    </tutorial-text>-->
                </template>
                <template #placeholder>
                    <placeholder-data-table :headers="backgrounds.headers"
                                            :rows="6"
                                            @placeholder-clicked="addBackgroundClick"/>
                </template>
                <template #context-controls>
                    <button ref="add-btn"
                            v-if="$validateCapability('background:create')"
                            class="btn btn-primary add"
                            @click="addBackgroundClick">
                        {{ $t('activities.backgrounds.addBtn') }}
                    </button>
                </template>
                <template #rows-controls>
                    <button v-if="$validateCapability('background:update')"
                            class="btn btn-icon-only"
                            name="feature-background">
                        <font-awesome-icon :icon="['far', 'star']"/>
                    </button>
                    <button v-if="$validateCapability('background:update')"
                            class="btn btn-icon-only"
                            name="edit-background">
                        <font-awesome-icon :icon="['far', 'pen-to-square']"/>
                    </button>
                    <button v-if="$validateCapability('background:delete') && archiveFeature"
                            class="btn btn-icon-only destructive" name="archive-background">
                        <font-awesome-icon :icon="['far', 'box-archive']"/>
                    </button>
                </template>
            </data-table>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { FilterDescriptor } from '@pictaccio/admin-gui/src/core/types/filter_descriptors';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbBackground } from '@pictaccio/admin-gui/src/models/db_background';
import { BooleanFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/boolean_filter_function';
import { FilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/filter_function';
import { IdFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/id_filter_function';
import { StringFilterFunction } from '@pictaccio/admin-gui/src/utils/filter_functions/string_filter_function';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { RemoteStore } from '@pictaccio/admin-gui/src/utils/remote_store';
import { formatExtraKey, shouldExtraSilenceRead } from '@pictaccio/admin-gui/src/utils/route_extra';
import ActivitiesTabs from '@pictaccio/admin-gui/src/views/components/widgets/ActivitiesTabs.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import CrudDialogBackground
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/CrudDialogBackground.vue';
import {
    BACKGROUND_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/background_columns';
import DataTable from '@pictaccio/admin-gui/src/views/private/activities/companions/DataTable.vue';
import BooleanFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/BooleanFilterItem.vue';
import MainTextFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MainTextFilterItem.vue';
import MultiListFilterItem
    from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/MultiListFilterItem.vue';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import PlaceholderDataTable
    from '@pictaccio/admin-gui/src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Hook } from 'vue-facing-decorator';

@Component({
    name: 'Backgrounds',
    components: {
        CrudDialogBackground,
        Tooltip,
        TutorialText,
        FontAwesomeIcon,
        DataTable,
        FiltersHolder: Filters,
        PlaceholderDataTable
    }
})
export default class Backgrounds extends AdminActivities {
    private backgrounds = BACKGROUND_COLUMNS;
    private crudDialog: CrudDialogBackground;

    private filters: FilterDescriptor[];
    private filtersHolderVisible = false;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteBackground;

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
    public async beforeCreate(): Promise<void> {
        try {
            await Promise.all([
                this.$store.dispatch('BackgroundCategoriesReader/backgroundCategoriesRead'),
                this.$store.dispatch('BackgroundsReader/tagsRead')
            ]);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }

        this.createFilters();
    }

    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'backgrounds');
    }

    public async mounted(): Promise<void> {
        const dataTable = this.$refs['backgrounds-table'] as DataTable;

        super.mounted();
        dataTable.setRemoteStore(
            new RemoteStore<DbBackground>('Backgrounds'), !shouldExtraSilenceRead(this.extra));
        await dataTable.applyPermanentFilters([new BooleanFilterFunction('false', 'is', 'archived')]);
        dataTable.applyGetters({
            categories: this.$store.getters['BackgroundCategoriesReader/backgroundCategories']
                .map(i => ({ id: i.id, value: i.value[this.$i18n.locale] }))
        });

        this.crudDialog = this.$refs['crud-dialog-background'] as CrudDialogBackground;
        this.createFilters();
    }

    /* EVENT HANDLERS */
    private addBackgroundClick(): void {
        if (!this.$validateCapability('background:create')) {
            return;
        }
        this.crudDialog.openDialog();
    }

    private applyFilters(filters: FilterFunction[]): void {
        const filter = (this.$refs['filters-holder'] as Filters).serializeFilters();
        const extra = formatExtraKey(this.extra, 'filters', filter);

        this.$router.replace({
            params: { extra }
        });

        (this.$refs['tabs'] as ActivitiesTabs).setBind(extra);
        (this.$refs['backgrounds-table'] as DataTable).applyFilters(filters);
    }

    private async deleteRowClick(event): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        await this.crudDialog.deleteClick(event.rowId, event.row);
    }

    private editRowClick(event): void {
        if (!this.$validateCapability('background:update')) {
            return;
        }

        this.crudDialog.openDialog(event.rowId, event.row);
    }

    private resetFilters(): void {
        (this.$refs['filters-holder'] as Filters).resetPopularFilters();
    }

    /* PRIVATE */
    private controlsActivated(event: any): void {
        if (!this.$validateCapability('background:update')) {
            return;
        }

        switch (event.colName) {
        case 'featured':
            this.toggleFeaturedClick(event);
            break;
        default:
            this.editRowClick(event);
            break;
        }
    }

    private createFilters(): void {
        this.filters = [
            // {
            //     pop: true,
            //     component: MainTextFilterItem,
            //     name: 'search',
            //     filters: [
            //         { filterFunction: IdFilterFunction, column: 'id' },
            //         { filterFunction: StringFilterFunction, column: 'internal_name' },
            //         { filterFunction: StringFilterFunction, column: 'production_identifier' }
            //     ]
            // },
            {
                pop: true,
                component: BooleanFilterItem,
                name: 'featured',
                filters: [
                    { filterFunction: BooleanFilterFunction, column: 'featured' }
                ]
            }//,
            // {
            //     pop: true,
            //     component: MultiListFilterItem,
            //     datasource: GenericDataSource.from<
            //         never,
            //         null,
            //         string,
            //         DataSourceOption<string, string>
            //     >(null, 'categories', [{
            //         id: 'options',
            //         value: this.$store.getters['BackgroundCategoriesReader/backgroundCategories'].map(category => ({
            //             id: category.id,
            //             value: category.value[this.$i18n.locale]
            //         }))
            //     }]),
            //     name: 'categories',
            //     filters: [
            //         { filterFunction: IdFilterFunction, column: 'category_id' }
            //     ]
            // },
            // {
            //     pop: true,
            //     component: MultiListFilterItem,
            //     datasource: GenericDataSource.from<
            //         never,
            //         null,
            //         string,
            //         DataSourceOption<string, string>
            //     >(null, '_tags', [{
            //         id: 'options',
            //         value: this.$store.getters['BackgroundsReader/tags'].map(tag => ({
            //             id: tag.id,
            //             value: tag.text
            //         }))
            //     }]),
            //     name: 'tags',
            //     filters: [
            //         { filterFunction: IdFilterFunction, column: '_tags' }
            //     ]
            // }
        ];

        this.filtersHolderVisible = true;

        this.checkAndReloadFilters();
    }

    private async toggleFeaturedClick(event): Promise<void> {
        const values: DbBackground = {
            featured: !event.row.featured
        };

        try {
            const result = await this.$store.dispatch('Backgrounds/update', {
                filters: [[{
                    column: 'id',
                    operator: '==',
                    operand: event.rowId
                }]],
                values
            });

            await (this.$refs['backgrounds-table'] as DataTable).refresh();
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
        await this.updateDatatable();
    }

    private async updateDatatable(): Promise<void> {
        await (this.$refs['backgrounds-table'] as DataTable).refresh();
    }
}
</script>
