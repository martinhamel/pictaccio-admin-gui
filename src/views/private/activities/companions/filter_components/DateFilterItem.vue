<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/filter_popup.scss';
</style>

<template>
    <div class="date-range-selector">
        <filter-popup name="date"
                      ref="filter"
                      @closed="dateSelected">
            <template #btn>
                <div class="btn btn-quaternary filter-popup-button"
                     :class="(selection.length === 2 && selection.some(date => date !== '')) ? 'selection' : ''">
                    <sticky-label ref="sticky-label"
                                  v-if="(selection.length === 2 && selection.some(date => date !== ''))"
                                  :alignments="[['outer', 'top'], ['inner', 'left']]"
                                  :sticky-side="'bottom'">
                        <span class="filter-popup-button-text">{{ $t(`generic.filter.${name}`) }}</span>
                    </sticky-label>
                    <b v-else class="filter-popup-button-text">
                        {{ $t(`generic.filter.${name}`) }}
                    </b>
                    <span v-if="(selection.length === 2 && selection.some(date => date !== ''))"
                          class="text-small"
                          :style="{minWidth: `${$t(`generic.filter.${name}`).length}ch`}">
                        <b v-if="selection[0] !== ''">{{ $t('generic.ui.dateFrom') }}:&nbsp;</b>
                        <span class="value">{{ selection[0] }}</span>
                        <span v-if="selection[0] !== '' && selection[1] !== ''">&nbsp;</span>
                        <b v-if="selection[1] !== ''">{{ $t('generic.ui.dateTo') }}:&nbsp;</b>
                        <span class="value">{{ selection[1] }}</span>
                    </span>
                </div>
            </template>
            <template #body>
                <fused-inputs :fusedInputName="'date'">
                    <input ref="date-from" class="fused-input" type="date" value="" name="date-from">
                    <input ref="date-to" class="fused-input" type="date" value="" name="date-to">
                </fused-inputs>
            </template>
            <template #footer>
                <div class="filter-footer-ui">
                    <a @click="reset">
                        {{ $t('generic.ui.clear') }}
                    </a>
                    <button class="btn btn-primary"
                            @click="dateSelected">
                        {{ $t('generic.ui.apply') }}
                    </button>
                </div>
            </template>
        </filter-popup>
    </div>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FilterTypeDate } from '@pictaccio/admin-gui/core/types/filters/type_date';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import { DateRange } from '@pictaccio/admin-gui/models/date_range';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopup.vue';
import FilterPopupButton
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopupButton.vue';
import { DateTime } from 'luxon';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'DateFilter',
    components: {
        StickyLabel,
        FilterPopupButton,
        FilterPopup,
        FontAwesomeIcon
    },
    emits: [
        'search'
    ]
})
export default class DateFilterItem extends FilterItem<DateRange, FilterTypeDate> {
    private selection: string[] = [];

    public isEmpty(): boolean {
        return Object.values(this.getQuery()).every(i => (i === null || isNaN(i.getTime())));
    }

    public getQuery(): DateRange {
        const fromElement = this.$refs['date-from'] as HTMLInputElement;
        const toElement = this.$refs['date-to'] as HTMLInputElement;

        return {
            start: fromElement && fromElement.value
                ? DateTime.fromISO(fromElement.value).startOf('day').toJSDate()
                : null,
            end: toElement && toElement.value
                ? DateTime.fromISO(toElement.value).endOf('day').toJSDate()
                : null
        };
    }

    public getType(): string {
        return 'date';
    }

    public reset() {
        (this.$refs['date-from'] as HTMLInputElement).value = '';
        (this.$refs['date-to'] as HTMLInputElement).value = '';
        this.selection = [];
    }

    public serialize(): SerializedFilterItem<FilterTypeDate> {
        const query = this.getQuery();

        return {
            name: this.name,
            params: {
                start: (query.start ?? new Date()).toISOString(),
                end: (query.end ?? new Date()).toISOString(),
                type: this.filterType
            }
        };
    }

    public setQuery(query: DateRange): void {
        (this.$refs['date-from'] as HTMLInputElement)
            .setAttribute('value', query.start ? DateTime.fromJSDate(query.start).toISO() : '');
        (this.$refs['date-to'] as HTMLInputElement)
            .setAttribute('value', query.end ? DateTime.fromJSDate(query.end).toISO() : '');
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeDate>): void {
        this.setQuery({
            start: DateTime.fromISO(serialized.params.start).toJSDate(),
            end: DateTime.fromISO(serialized.params.end).toJSDate()
        });

        this.filterType = serialized.params.type;
    }

    /* LIFECYCLE */
    /* EVENT HANDLER */
    private dateSelected(): void {
        if (this.isEmpty()) {
            this.selection = [];
        } else {
            this.selection = Object.values(this.getQuery()).map(date => {
                if (date === null) {
                    return '';
                }

                // debugger;
                return DateTime.fromJSDate(date).toISODate();
            });
        }

        this.$emit('search');
        (this.$refs['filter'] as FilterPopup).forceCloseDialog();
    }

    /* PRIVATE */
}
</script>
