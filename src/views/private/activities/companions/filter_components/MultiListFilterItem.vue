<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/filter_popup.scss';

.multi-list-filter {
    :deep(.dropdown-selector-option) {
        white-space: nowrap;
    }

    :deep(.dropdown-input:not(.selected):focus-within) {
        border-color: transparent;
    }
}
</style>

<template>
    <div class="multi-list-filter">
        <filter-popup ref="filter" name="multiList" @closed="selectionChange">
            <template #btn>
                <div class="btn btn-quaternary filter-popup-button" :class="(selection.length > 0) ? 'selection' : ''">
                    <sticky-label ref="sticky-label" v-if="(selection.length > 0)"
                        :alignments="[['outer', 'top'], ['inner', 'left']]" :sticky-side="'bottom'">
                        <span class="filter-popup-button-text">{{ $t(`generic.filter.${name}`, 0) }}</span>
                    </sticky-label>
                    <b v-else class="filter-popup-button-text">
                        {{ $t(`generic.filter.${name}`, 0) }}
                    </b>
                    <span v-if="(selection.length > 0)" class="text-small"
                        :style="{ minWidth: `${$t(`generic.filter.${name}`).length}ch` }">
                        <span>
                            {{getOptions().find(option => option.id === selection[0]).value}}
                        </span>
                        <badge :alone="true" v-if="selection.length > 1">
                            <span class="badge">+{{ selection.length - 1 }}</span>
                        </badge>
                    </span>
                </div>
            </template>
            <template #header>
                <dropdown ref="filter-type" @change="filterTypeChange">
                    <label value="is">{{ $t('generic.filter.types.is') }}</label>
                    <label value="is-not">{{ $t('generic.filter.types.isNot') }}</label>
                </dropdown>
            </template>
            <template #body>
                <list-selector ref="dropdown" :listName="name">
                    <label v-for="(option, index) in getOptions()" :key="index" class="dropdown-selector-option"
                        :value="option.id" :data-value="option.value">
                        <span>{{ option.value }}</span>
                    </label>
                </list-selector>
            </template>
            <template #footer>
                <div class="filter-footer-ui">
                    <a @click="reset">
                        {{ $t('generic.ui.clear') }}
                    </a>
                    <button class="btn btn-primary" @click="selectionChange">
                        {{ $t('generic.ui.apply') }}
                    </button>
                </div>
            </template>
        </filter-popup>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isEmpty } from '@loufa/loufairy';
import { DataSourceOption } from '@pictaccio/admin-gui/core/types/data_source';
import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { FilterTypeMultiList } from '@pictaccio/admin-gui/core/types/filters/type_multi_list';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import ListSelector from '@pictaccio/admin-gui/views/components/widgets/ListSelector.vue';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopup.vue';
import { unref } from 'vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'MultiListFilter',
    components: {
        Badge,
        ListSelector,
        FilterPopup,
        StickyLabel,
        Dropdown,
        FontAwesomeIcon
    }
})
export default class MultiListFilterItem extends FilterItem<string[]> {
    private selection: string[] = [];

    public isEmpty(): boolean {
        return isEmpty((this.$refs['dropdown'] as ListSelector).getSelection());
    }

    public getQuery(): string[] {
        const selection = (this.$refs['dropdown'] as ListSelector).getSelection();
        return Array.isArray(selection)
            ? selection
            : [selection];
    }

    public getType(): string {
        return this.name;
    }

    public reset() {
        (this.$refs['dropdown'] as ListSelector).setSelection([]);
        this.selectionChange();
    }

    public serialize(): SerializedFilterItem<FilterTypeMultiList> {
        return {
            name: this.name,
            params: {
                values: unref(this.selection),
                type: this.filterType
            }
        };
    }

    public setQuery(query: string[]): void {
        (this.$refs['dropdown'] as ListSelector).setSelection(query);
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeMultiList>): void {
        this.selection = serialized.params.values;
        this.filterType = serialized.params.type;

        (this.$refs['dropdown'] as ListSelector).setSelection(serialized.params.values);
        (this.$refs['filter-type'] as Dropdown).setSelection([serialized.params.type]);
    }

    /* LIFECYCLE */

    /* EVENT HANDLER */
    private filterTypeChange(event: any): void {
        this.filterType = event.selection as FilterType;
    }

    private selectionChange(): void {
        this.selection = (this.$refs['dropdown'] as ListSelector).getSelection();

        this.$emit('search');
        (this.$refs['filter'] as FilterPopup).forceCloseDialog();
    }

    /* PRIVATE */
    private getOptions(): DataSourceOption<string, string>[] {
        try {
            const options = this.dataSource?.getOptions();

            if (!options) {
                return [];
            }
            const optionsList = options.find(i => i.id === 'options').value;

            if (!Array.isArray(optionsList)) {
                return [];
            }

            return optionsList;
        } catch {
            return [];
        }
    }
}
</script>
