<style lang="scss" scoped>
span {
    font-size: 1.4rem;
}
</style>

<template>
    <slot>
        <locale-display v-if="localeOrder.length > 0"
                        ref="locale-display"
                        :collapse-threshold="collapseThreshold"
                        :expandable="expandable"
                        :override-locale-order="localeOrder"
                        :show-label="showLabel"/>
    </slot>
</template>

<script lang="ts">
import {
    DataviewRendererFormatter
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/formatter/dataview_renderer_formatter';
import LocaleDisplay from '@pictaccio/admin-gui/views/components/widgets/LocaleDisplay.vue';
import { LocalizedString } from '@pictaccio/shared/types/localized_string';
import { StoreLanguageItem } from '@pictaccio/shared/types/store_language_item';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Dataview Renderer Locale Formatter',
    components: {
        LocaleDisplay
    }
})
export default class DataviewRendererLocaleFormatter extends DataviewRendererFormatter {
    @Prop({ default: 2 })
    private collapseThreshold: number;
    @Prop({ default: false })
    private expandable: boolean;
    @Prop
    private overrideLocaleOrder: StoreLanguageItem[];
    @Prop({ default: true })
    private showLabel: boolean;

    private localeOrder: StoreLanguageItem[] = [];

    public setData<Ttype>(value: LocalizedString): void {
        super.setData(value);

        (this.$refs['locale-display'] as LocaleDisplay).setData(value);
    }

    /* LIFECYCLE */
    public created(): void {
        this.localeOrder = this.overrideLocaleOrder ?? this.$store.getters['StoreConfig/languagesList'];

        this.$watch(() => this.$store.getters['StoreConfig/languagesList'], () => {
            this.localeOrder = this.overrideLocaleOrder ?? this.$store.getters['StoreConfig/languagesList'];
        })
    }
}
</script>
