<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/filter_popup.scss';
</style>

<template>
    <div class="text-filter">
        <filter-popup name="text"
                      ref="filter"
                      @closed="filterChange"
                      @opened="filterOpen">
            <template #btn>
                <div class="btn btn-quaternary filter-popup-button"
                     :class="lastValue ? 'selection' : ''">
                    <sticky-label ref="sticky-label"
                                  v-if="lastValue"
                                  :alignments="[['outer', 'top'], ['inner', 'left']]"
                                  :sticky-side="'bottom'">
                        <span class="filter-popup-button-text">{{ $t(`generic.filter.${name}`) }}</span>
                    </sticky-label>
                    <b v-else class="filter-popup-button-text">
                        {{ $t(`generic.filter.${name}`) }}
                    </b>
                    <div v-if="lastValue" :style="{minWidth: `${$t(`generic.filter.${name}`).length}ch`}">
                        {{ lastValue }}
                    </div>
                </div>
            </template>
            <template #header>
                <dropdown ref="filter-type" @change="filterTypeChange">
                    <label value="contains">{{ $t('generic.filter.types.contains') }}</label>
                    <label value="contains-not">{{ $t('generic.filter.types.containsNot') }}</label>
                    <label value="is">{{ $t('generic.filter.types.is') }}</label>
                    <label value="is-not">{{ $t('generic.filter.types.isNot') }}</label>
                </dropdown>
            </template>
            <template #body>
                <textarea ref="search"
                          class="search-input"
                          type="search"
                          :placeholder="$t(`generic.filter.placeholder.${name}`)"
                          :name="name"
                          v-model="value"
                          @focus="inputFocused = true"
                          @keydown="searchKeydown"/>
            </template>
            <template #footer>
                <div class="filter-footer-ui">
                    <a @click="reset">
                        {{ $t('generic.ui.clear') }}
                    </a>
                    <button class="btn btn-primary"
                            @click="filterChange">
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
import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { FilterTypeText } from '@pictaccio/admin-gui/core/types/filters/type_text';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopup.vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'TextFilter',
    components: {
        Dropdown,
        FilterPopup,
        StickyLabel,
        FontAwesomeIcon
    }
})
export default class TextFilterItem extends FilterItem<string, FilterTypeText> {
    private value = '';
    private lastValue = '';
    private lastType: FilterType = 'contains';
    private inputFocused = false;
    protected filterType: FilterType = 'contains';

    public isEmpty(): boolean {
        return isEmpty(this.value);
    }

    public getQuery(): string {
        return this.value;
    }

    public getType(): string {
        return this.name;
    }

    public reset() {
        this.value = '';
        this.lastValue = '';
        this.$emit('search');
    }

    public serialize(): SerializedFilterItem<FilterTypeText> {
        return {
            name: this.name,
            params: {
                text: this.value,
                type: this.filterType
            }
        };
    }

    public setQuery(query: string): void {
        this.value = query;
        this.filterChange();
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeText>): void {
        this.value = serialized.params.text;
        this.lastValue = serialized.params.text;
        this.filterType = serialized.params.type;
        this.lastType = null;

        (this.$refs['filter-type'] as Dropdown).setSelection([serialized.params.type]);
    }

    /* LIFECYCLE */

    /* EVENT HANDLER */
    private filterChange(): void {
        const value = this.getQuery().trim();
        if ((value !== '' && this.lastValue !== value) || this.filterType !== this.lastType) {
            this.lastValue = value;
            this.$emit('search');
        }
        this.inputFocused = false;
        (this.$refs['filter'] as FilterPopup).forceCloseDialog();
    }

    private filterOpen(): void {
        setTimeout(() => {
            (this.$refs['search'] as HTMLTextAreaElement).focus();
        }, 0);
    }

    private filterTypeChange(event): void {
        this.filterType = event.selection as FilterType;
    }

    private searchKeydown(event: KeyboardEvent): void {
        const value = this.getQuery();
        if (event.key === 'Enter' && this.lastValue !== value) {
            event.preventDefault();
            this.lastValue = value;
            this.$emit('search');
            this.inputFocused = false;
            (this.$refs['filter'] as FilterPopup).forceCloseDialog();
        }
    }
}
</script>
