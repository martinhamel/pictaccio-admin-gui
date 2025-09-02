<style lang="scss" scoped>
.locale-switch {
    display: flex;
    gap: 0.5rem;
    font-size: 1.6rem;

    a.locale-switch-link {
        font-size: inherit;
        padding: 0;
        text-transform: uppercase;
        border-radius: $ruler-border-radius-inner;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.8rem;
        height: 2.8rem;
        background-color: oklch(from var(--color-background-page-1) l c h / 1);

        &:hover {
            color: oklch(from var(--color-text-link-primary) l c h / 1);
            background-color: var(--color-background-page-2);
        }

        &.current {
            color: var(--color-text-link-secondary);
            border: 1px solid oklch(from var(--color-background-page-2) l c h / 0.5);
            --font-weight: 600;
        }
    }
}
</style>

<template>
    <div class="locale-switch">
        <span v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`">
            <a href="javascript:"
               @click="localeClick(locale)"
               class="locale-switch-link"
               :class="$i18n.locale === locale ? 'current' : ''">
                {{ $t(`lang.${locale}`) }}
            </a>
        </span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { i18n } from '@pictaccio/admin-gui/src/i18n';
import { Language, Languages } from '@pictaccio/admin-gui/src/core/types/languages'

@Component({
    name: 'Locale Selector',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'locale-changed'
    ]
})
export default class LocaleSelector extends Vue {
    /* LIFECYCLE */
    public mounted(): void {
        const locale = this.$store.getters['Config/userLang'];
        this.$i18n.locale = locale;
    }

    /* EVENT HANDLERS */
    private localeClick(locale: Language): void {
        this.$i18n.locale = locale;
        this.$store.commit('Config/commitUserLang', locale);
        this.$emit('locale-changed');
    }
}
</script>
