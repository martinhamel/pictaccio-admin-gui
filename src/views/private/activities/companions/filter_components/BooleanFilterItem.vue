<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/filter_popup.scss';
</style>

<template>
    <div class="boolean-filter">
        <filter-popup name="boolean" ref="filter" @closed="filterChange">
            <template #btn>
                <div class="btn btn-quaternary filter-popup-button" :class="(checked !== null) ? 'selection' : ''">
                    <sticky-label ref="sticky-label" v-if="(checked !== null)"
                        :alignments="[['outer', 'top'], ['inner', 'left']]" :sticky-side="'bottom'">
                        <span class="filter-popup-button-text">{{ $t(`generic.filter.${name}`, 0) }}</span>
                    </sticky-label>
                    <b v-else class="filter-popup-button-text">
                        {{ $t(`generic.filter.${name}`) }}
                    </b>
                    <span v-if="(checked !== null && checked !== undefined)" class="text-small">
                        <span>
                            {{ $t(`generic.filter.${name}`) }}
                        </span>
                        <badge :alone="true">
                            <span class="badge">
                                {{ $t(`generic.filter.boolean.${checked}`) }}
                            </span>
                        </badge>
                    </span>
                </div>
            </template>
            <template #body>
                <dropdown ref="dropdown" :select-multiple="false" :listName="name">
                    <label class="dropdown-selector-option" value="unset">
                        <span>{{ $t('generic.filter.boolean.unset') }}</span>
                    </label>
                    <label class="dropdown-selector-option" value="true">
                        <span>{{ $t('generic.filter.boolean.true') }}</span>
                    </label>
                    <label class="dropdown-selector-option" value="false">
                        <span>{{ $t('generic.filter.boolean.false') }}</span>
                    </label>
                </dropdown>
            </template>
            <template #footer>
                <div class="filter-footer-ui">
                    <a @click="reset">
                        {{ $t('generic.ui.clear') }}
                    </a>
                    <button class="btn btn-primary" @click="filterChange">
                        {{ $t('generic.ui.apply') }}
                    </button>
                </div>
            </template>
        </filter-popup>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BooleanValue } from '@pictaccio/admin-gui/src/core/types/filters/boolean_value';
import { FilterTypeBoolean } from '@pictaccio/admin-gui/src/core/types/filters/type_boolean';
import { SerializedFilterItem } from '@pictaccio/admin-gui/src/core/types/serialized_params';
import Badge from '@pictaccio/admin-gui/src/views/components/widgets/Badge.vue';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import StickyLabel from '@pictaccio/admin-gui/src/views/components/widgets/StickyLabel.vue';
import FilterItem from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/src/views/private/activities/companions/filter_components/FilterPopup.vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'BooleanFilter',
    components: {
        StickyLabel,
        Badge,
        Dropdown,
        FilterPopup,
        FontAwesomeIcon
    },
    emits: [
        'search'
    ]
})
export default class BooleanFilterItem extends FilterItem<BooleanValue, FilterTypeBoolean> {
    private checked: BooleanValue | null = null;

    public isEmpty(): boolean {
        return this.checked === null || this.checked === undefined;
    }

    public getQuery(): BooleanValue {
        return this.checked;
    }

    public getType(): string {
        return this.name;
    }

    public reset() {
        this.checked = 'unset';
        (this.$refs['dropdown'] as Dropdown).setSelection([]);
    }

    // TODO: PSFCA-2847 Create types for the filters
    public serialize(): SerializedFilterItem<FilterTypeBoolean> {
        return {
            name: this.name,
            params: {
                value: this.checked ?? 'false'
            }
        };
    }

    public setQuery(query: BooleanValue): void {
        (this.$refs['dropdown'] as Dropdown).setSelection([query.toString()]);
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeBoolean>): void {
        this.checked = serialized.params.value;
        this.setQuery(serialized.params.value);
    }

    /* LIFECYCLE */
    /* EVENT HANDLER */
    private filterChange(): void {
        const selection = (this.$refs['dropdown'] as Dropdown).getSelection();

        this.checked = selection as BooleanValue;

        this.$emit('search');
        (this.$refs['filter'] as FilterPopup).forceCloseDialog();
    }
}
</script>
