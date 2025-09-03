<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/filter_popup.scss';
.date-range-selector {
    margin-top: 1.5rem;
}
</style>

<template>
    <div class="date-range-selector">
        <filter-popup name="date"
                      ref="filter"
                      @closed="dateSelected">
            <template #btn>
                <div class="btn btn-quaternary filter-popup-button"
                     :class="selection.length > 0 ? 'selection' : ''">
                    <sticky-label ref="sticky-label"
                                  v-if="selection.length > 0"
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
                <dropdown ref="date-preset"
                          :can-unset="false"
                          :current-selection="'custom'"
                          :select-multiple="false"
                          @change="dateRangePresetChange">
                    <label v-for="preset in dateRangePresets"
                           :key="preset"
                           :value="preset">
                        <span>{{ $t(`generic.filter.datePreset.${camelize(preset)}`) }}</span>
                    </label>
                </dropdown>
                <fused-inputs :fusedInputName="'date'" @change="dateRangeInputsChange">
                    <input ref="date-start" class="fused-input" type="date" value="" name="date-start">
                    <input ref="date-end" class="fused-input" type="date" value="" name="date-end">
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
import { FilterTypeDateWithPreset } from '@pictaccio/admin-gui/core/types/filters/type_date_with_preset';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import { jsDateFromUserInput, jsDateToUserInput } from '@pictaccio/admin-gui/utils/user_date';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopup.vue';
import FilterPopupButton
    from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopupButton.vue';
import { DateRange, DateRangePreset, DateRangePresets } from '@pictaccio/shared/types/date_range';
import { resolveDateRange } from '@pictaccio/shared/utils/date';
import { camelize } from '@loufa/loufairy';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'DateRangeWithPresetFilterItem',
    components: {
        Dropdown,
        StickyLabel,
        FilterPopupButton,
        FilterPopup,
        FontAwesomeIcon
    },
    emits: [
        'search'
    ]
})
export default class DateRangeWithPresetFilterItem extends FilterItem<DateRange, FilterTypeDateWithPreset> {
    private selection: string[] = [];
    private dateRangePresets = DateRangePresets;

    public camelize: (input: string, pascal: boolean) => string = camelize;

    public isEmpty(): boolean {
        const query = this.getQuery()
        return query.start === null && query.end === null;
    }

    public getQuery(): DateRange {
        const presetElement = this.$refs['date-preset'] as Dropdown;
        const fromElement = this.$refs['date-start'] as HTMLInputElement;
        const toElement = this.$refs['date-end'] as HTMLInputElement;

        return {
            preset: Array.isArray(presetElement.getSelection())
                ? presetElement.getSelection()[0] as DateRangePreset
                : presetElement.getSelection() as DateRangePreset,
            start: fromElement && fromElement.value
                ? jsDateFromUserInput(fromElement.value)
                : null,
            end: toElement && toElement.value
                ? jsDateFromUserInput(toElement.value)
                : null
        };
    }

    public getType(): string {
        return 'date';
    }

    public reset() {
        (this.$refs['date-preset'] as Dropdown).setSelection(['custom']);
        (this.$refs['date-start'] as HTMLInputElement).value = '';
        (this.$refs['date-end'] as HTMLInputElement).value = '';
        this.selection = [];
    }

    public serialize(): SerializedFilterItem<FilterTypeDateWithPreset> {
        const query = this.getQuery();

        return {
            name: this.name,
            params: {
                preset: query.preset,
                start: query.start,
                end: query.end,
                type: this.filterType
            }
        };
    }

    public setQuery(query: DateRange): void {
        if (query.preset) {
            (this.$refs['date-preset'] as Dropdown)
                .setSelection([query.preset]);
        }

        (this.$refs['date-start'] as HTMLInputElement)
            .setAttribute('value', query.start ? jsDateToUserInput(query.start) : '');
        (this.$refs['date-end'] as HTMLInputElement)
            .setAttribute('value', query.end ? jsDateToUserInput(query.end) : '');
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeDateWithPreset>): void {
        this.setQuery({
            preset: serialized.params.preset,
            start: serialized.params.start,
            end: serialized.params.end
        });

        this.filterType = serialized.params.type;
    }

    /* LIFECYCLE */
    /* EVENT HANDLER */
    private dateRangeInputsChange(): void {
        (this.$refs['date-preset'] as Dropdown).setSelection(['custom']);
    }

    private dateRangePresetChange(event): void {
        const preset = event.selection;

        if (preset === 'custom') {
            return;
        }

        const dates = resolveDateRange({
            preset
        });

        this.setQuery({
            start: dates.start,
            end: dates.end
        })
    }

    private dateSelected(): void {
        if (this.isEmpty()) {
            this.selection = [];
        } else {
            this.selection = [];
            const query = this.getQuery();

            if (query.start) {
                this.selection.push(jsDateToUserInput(query.start));
            }

            if (query.end) {
                this.selection.push(jsDateToUserInput(query.end));
            }
        }

        this.$emit('search');
        (this.$refs['filter'] as FilterPopup).forceCloseDialog();
    }

    /* PRIVATE */
}
</script>
