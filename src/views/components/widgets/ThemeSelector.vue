<style lang="scss" scoped>
.theme-container {
    --option-size: #{$ruler-input-height / 1.2};
    height: var(--option-size);
    display: flex;
    width: auto;
    gap: 0.5rem;

    [data-theme-color="dark"] & {
        --color-line: var(--color-primary-4);
        --color-block: var(--color-mix-5-6-step-3);
    }

    [data-theme-color="light"] & {
        --color-line: var(--color-primary-4);
        --color-block: var(--color-mix-7-4-step-1);
    }

    &.dark-line > .dark-line,
    &.light-line > .light-line,
    &.dark-block > .dark-block,
    &.light-block > .light-block {
        filter: grayscale(0);
    }

    .option {
        height: var(--option-size);
        width: var(--option-size);
        filter: grayscale(1) brightness(0.8);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
            content: '';
            position: absolute;
            border-radius: $ruler-border-radius;
            z-index: -1;
        }

        &.dark-line,
        &.light-line {
            &::before {
                background-color: var(--color-line);
                inset: 0 0 auto 0;
                padding: 0.2rem;
            }
        }
        &.dark-block,
        &.light-block {
            &::before {
                background-color: var(--color-block);
                inset: 0;
            }
        }
        &.dark-line,
        &.dark-block {
            color: var(--color-text-accent-secondary);
        }
        &.light-line,
        &.light-block {
            color: var(--color-text-accent-primary);
        }

        &:hover {
            filter: grayscale(0);
        }
    }
}
</style>

<template>
    <div v-if="featureFlags._devThemes" class="theme-container" :class="`${theme.color}-${theme.type}`">
        <div class="option dark-line" @click="selectTheme('dark', 'line')">
            <font-awesome-icon :icon="['fas', 'moon']"/>
        </div>
        <div v-if="featureFlags._devThemes" class="option dark-block" @click="selectTheme('dark', 'block')">
            <font-awesome-icon :icon="['fas', 'moon']"/>
        </div>
        <div class="option light-line" @click="selectTheme('light', 'line')">
            <font-awesome-icon :icon="['fas', 'sun-bright']"/>
        </div>
        <div v-if="featureFlags._devThemes" class="option light-block" @click="selectTheme('light', 'block')">
            <font-awesome-icon :icon="['fas', 'sun-bright']"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Theme, ThemeColors, ThemeTypes } from '@pictaccio/admin-gui/core/types/color_theme';
import { environment } from '@pictaccio/admin-gui/environment/environment';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Theme Selector',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'theme-changed'
    ]
})
export default class ThemeSelector extends Vue {
    private theme: Theme = { color: 'dark', type: 'line' };
    private featureFlags = environment.features;

    /* LIFECYCLE */
    public mounted(): void {
        this.theme = {
            color: (document.body.getAttribute('data-theme-color') ?? 'dark') as ThemeColors,
            type: (document.body.getAttribute('data-theme-type') ?? 'line') as ThemeTypes
        };
    }

    /* EVENT HANDLERS */
    private selectTheme(color: ThemeColors, type: ThemeTypes): void {
        this.theme = { color, type };
        document.body.setAttribute('data-theme-color', this.theme.color);
        document.body.setAttribute('data-theme-type', this.theme.type);
        localStorage.setItem('theme', JSON.stringify(this.theme));
    }
}
</script>
