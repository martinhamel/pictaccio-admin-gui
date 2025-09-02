<style lang="scss" scoped>
.locales-display-container {
    display: grid;
    grid-template-columns: 5ch 1fr;
    gap: 0.5rem;

    .locale-display-container {
        display: contents;

        .locale-label {
            font-size: 1.6rem;
            font-weight: bold;
            margin: 0;
            padding: 0;
        }

        .locale-text {
            font-size: 1.4rem;
        }
    }
}
</style>

<template>
    <div class="locales-display-container">
        <template v-for="lang in localeOrder"
                  :key="lang.locale">
            <div class="locale-display-container"
                 v-if="data[lang.locale]"
                 :style="{ order: lang.order }">
                <label class="locale-label">
                    {{ $t(`lang.${lang.locale}`) }}:
                </label>
                <p class="locale-text">{{ data[lang.locale] }}</p>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'LocaleDisplay',
    components: {
        FontAwesomeIcon
    },
    expose: [
        'setData'
    ]
})
export default class LocaleDisplay extends Vue {
    @Prop({ default: 2 })
    private collapseThreshold: number;
    @Prop({ default: false })
    private expandable: boolean;
    @Prop
    private overrideLocaleOrder: StoreLanguageItem[];
    @Prop({ default: true })
    private showLabel: boolean;
    @Prop({ default: { fr: null, en: null } })
    private value: LocalizedString;

    private data: LocalizedString;
    private localeOrder: StoreLanguageItem[] = [];

    public setData(data: LocalizedString): void {
        this.data = { ...this.data, ...data };
    }

    /* LIFECYCLE */
    private created(): void {
        this.data = this.value;
        this.localeOrder = this.overrideLocaleOrder ?? this.$store.getters['StoreConfig/languagesList'];

        this.$watch(() => this.$store.getters['StoreConfig/languagesList'], () => {
            this.localeOrder = this.overrideLocaleOrder ?? this.$store.getters['StoreConfig/languagesList'];
        })
    }
}
</script>
