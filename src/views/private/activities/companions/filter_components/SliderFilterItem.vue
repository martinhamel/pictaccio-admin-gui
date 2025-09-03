<style></style>
<template>
    <div class="slider-bar">
        <input ref="range" type="range" :name="name" id="slider">
    </div>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isEmpty } from '@loufa/loufairy';
import { FilterType } from '@pictaccio/admin-gui/core/types/filters/filter_type';
import { FilterTypeSlider, SliderMode } from '@pictaccio/admin-gui/core/types/filters/type_slider';
import { FilterTypeText } from '@pictaccio/admin-gui/core/types/filters/type_text';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'SliderFilter',
    components: {
        FontAwesomeIcon
    }
})
export default class SliderFilterItem extends FilterItem<string, FilterTypeSlider> {
    public isEmpty(): boolean {
        return isEmpty((this.$refs['range'] as HTMLInputElement).value);
    }

    public getQuery(): string {
        return (this.$refs['range'] as HTMLInputElement).value;
    }

    public getType(): string {
        return this.name;
    }

    public reset() {
        (this.$refs['range'] as HTMLInputElement).value = '';
    }

    public serialize(): SerializedFilterItem<FilterTypeSlider> {
        return {
            name: this.name,
            params: {
                mode: 'single',
                value: 0,
                min: 0,
                max: 0,
                type: 'is'
            }
        };
    }

    public setQuery(query: string): void {
        (this.$refs['range'] as HTMLInputElement).setAttribute('value', query);
    }
    /* LIFECYCLE */
}
</script>
