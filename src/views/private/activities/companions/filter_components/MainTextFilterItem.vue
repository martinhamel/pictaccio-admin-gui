<style lang="scss" scoped>
.search-bar {
    position: relative;

    &:has(.sticky-label) {
        .search-input {
            border-top-left-radius: 0 !important;
        }
    }

    :deep(.sticky-label) {
        padding: 0.4rem 1.25rem 0.25rem;
        transform: translateY(0.3rem);
        border-width: 2px 2px 0 2px;
        border-style: solid;
        border-color: transparent;
        z-index: 11;

        &::after {
            content: '';
            position: absolute;
            top: calc(100% - 0.1rem);
            left: calc(100% - 1rem);
            right: -2px;
            bottom: 0;
            background-color: inherit;
        }
    }

    &:focus-within {
        :deep(.sticky-label) {
            border-color: var(--color-primary-1) var(--color-primary-1) transparent var(--color-primary-1);
        }
    }
}

.search-input {
    min-width: 21rem;
}
</style>
<template>
    <div class="search-bar">
        <sticky-label ref="sticky-label"
                      v-if="value || inputFocused"
                      :alignments="[['outer', 'top'], ['inner', 'left']]"
                      :sticky-side="'bottom'">
            <span class="filter-popup-button-text">{{ $t(`generic.filter.${name}`) }}</span>
        </sticky-label>
        <input ref="search"
               class="search-input"
               type="search"
               :placeholder="$t(`generic.filter.placeholder.${name}`)"
               :name="name"
               v-model="value"
               @focus="inputFocused = true"
               @blur="searchBlur"
               @keydown="searchKeydown">
    </div>
</template>
<script lang="ts">
import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { FilterTypeMainText } from '@pictaccio/admin-gui/core/types/filters/type_main_text';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import { Component, Prop } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import { isEmpty } from '@loufa/loufairy';

@Component({
    name: 'MainTextFilter',
    components: {
        StickyLabel,
        FontAwesomeIcon
    }
})
export default class MainTextFilterItem extends FilterItem<string, FilterTypeMainText> {
    private value = '';
    private lastValue = '';
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
    }

    public serialize(): SerializedFilterItem<FilterTypeMainText> {
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
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeMainText>): void {
        this.value = serialized.params.text;
        this.lastValue = serialized.params.text;
        this.filterType = serialized.params.type;
    }

    /* LIFECYCLE */

    /* EVENT HANDLER */
    private searchBlur(event: FocusEvent): void {
        const value = this.getQuery();
        if (this.lastValue !== value) {
            this.lastValue = value;
            this.$emit('search');
        }
        this.inputFocused = false;
    }

    private searchKeydown(event: KeyboardEvent): void {
        const value = this.getQuery();
        if (event.key === 'Enter' && this.lastValue !== value) {
            event.preventDefault();
            this.lastValue = value;
            this.$emit('search');
            this.inputFocused = false;
        }
    }
}
</script>
