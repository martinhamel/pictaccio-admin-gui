<style lang="scss" scoped>
.badge {
    --badge-exist-duration: 0;
    --badge-height: #{$ruler-input-height - 8px};
    position: relative;
    padding: 0.2rem 0.5rem;
    display: inline-flex;
    gap: 0.5rem;
    background-color: var(--color-primary-4);
    color: var(--color-primary-5);
    border-radius: 0;
    height: var(--badge-height);
    min-width: var(--badge-height);
    margin: 0.2rem 0.1rem 0 0.1rem;
    align-items: center;
    justify-content: center;
    max-width: calc(100% - 0.2rem);
    transition-property: background-color;
    transition-duration: 0.3s;

    &.exist {
        transition-duration: 0.3s;
        background-color: var(--color-primary-1);
        @include animation(badgeExist var(--badge-exist-duration) ease-in 0.3s 1 normal forwards);
        @include keyframes(badgeExist) {
            0% {
                background-color: var(--color-primary-1);
            }
            30% {
                background-color: var(--color-mix-1-4-step-1);
            }
            80% {
                background-color: var(--color-mix-1-4-step-1);
            }
            100% {
                background-color: var(--color-primary-4);
            }
        }
    }

    &:first-of-type {
        border-radius: $ruler-border-radius-inner 0 0 $ruler-border-radius-inner;

        .multiline & {
            border-radius: $ruler-border-radius-inner 0 0 0;
        }
    }

    &:last-of-type {
        border-radius: 0 $ruler-border-radius-inner $ruler-border-radius-inner 0;

        .multiline & {
            border-radius: 0 0 $ruler-border-radius-inner 0;

            &.bottom-left {
                border-radius: 0 0 $ruler-border-radius-inner $ruler-border-radius-inner;
            }
        }
    }

    &:only-of-type,
    &.alone{
        border-radius: $ruler-border-radius-inner;
    }

    &.alone {
        margin: 0;
        .btn & {
            margin: -2px 0 0 0;
        }
    }

    .multiline & {
        flex-grow: 1;
    }

    .multiline &.top-right {
        border-radius: 0 $ruler-border-radius-inner 0 0;
    }

    .multiline &.bottom-left {
        border-radius: 0 0 0 $ruler-border-radius-inner;
    }

    &:focus-within {
        background-color: var(--color-primary-1);
    }

    &:hover,
    &:focus-within {
        .fa-xmark {
            color: var(--color-semantic-destructive);
        }
    }

    .content {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        z-index: 2;
    }

    .fa-xmark {
        cursor: pointer;
        position: relative;
        z-index: 2;

        &:hover {
            filter: brightness(120%);
        }
    }

    .hidden {
        @include visually-hidden;
    }
}
</style>

<template>
    <span ref="badge"
          class="badge"
          :class="[multilineClass, alone ? 'alone' : '']"
          :name="badgeName ?? ''"
          @click="badgeClick"
          :style="{
              '--badge-exist-duration': `${badgeExistDuration - 300}ms`,
              backgroundColor: options.badgeColors.background,
              color: options.badgeColors.text,
              cursor: options.interactable ? 'pointer' : 'default'
          }">
        <input v-if="options.interactable"
               type="text"
               class="hidden"
               ref="badge-input"
               @keydown="badgeInputKeydown">
        <span class="content">
            <slot/>
        </span>
        <font-awesome-icon v-if="options.canDelete"
                           :icon="['fas', 'times']"
                           @click="deleteClick"/>
    </span>
</template>

<script lang="ts">
import { ColorObject } from '@pictaccio/admin-gui/src/core/types/color_object';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export type BadgeEmitOptions = {
    wasFocused?: boolean,
    keyPressed?: string,
    badge?: string
}

export type BadgeEmitExist = {
    name: string,
    exist: boolean
}

@Component({
    name: 'Badge',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'badgeClick',
        'deleted',
        'arrowPressed',
        'informExist'
    ],
    expose: [
        'informExist',
        'focus',
        'extraClass',
        'removeExistInfo',
        'setBadgeColors'
    ]
})
export default class Badge extends Vue {
    @Prop
    private canDelete: boolean;
    @Prop
    private badgeName: string;
    @Prop
    private badgeColors: ColorObject;
    @Prop
    private alone: boolean;
    @Prop
    private interactable: boolean;
    private multilineClass = '';
    private badge: HTMLElement;
    private badgeExistDuration = 5000;

    private options = {
        canDelete: false,
        interactable: true,
        badgeColors: {
            background: '',
            text: ''
        }
    }

    public extraClass(extraClass: string): void {
        this.multilineClass = extraClass;
    }

    public focus(): void {
        (this.$refs['badge-input'] as HTMLInputElement).focus();
    }

    public informExist(): void {
        this.badge.classList.add('exist');
        this.$emit('informExist', { name: this.badgeName, exist: true });
        setTimeout(this.removeExistInfo, this.badgeExistDuration);
    }

    public removeExistInfo(): void {
        this.badge.classList.remove('exist');
        this.$emit('informExist', { name: this.badgeName, exist: false });
    }

    public setBadgeColors(colors: ColorObject): void {
        this.options.badgeColors = colors;
    }

    /* LIFECYCLE */
    public created(): void {
        this.options = Object.assign({}, this.options, Object.fromEntries(Object.entries({
            canDelete: this.canDelete,
            interactable: this.interactable,
            internalBadgeColors: this.badgeColors
        }).filter(([p, v]) => v !== undefined && v !== null)));
    }

    public mounted(): void {
        this.badge = this.$refs['badge'] as HTMLElement;
    }

    /* EVENT HANDLER */
    private badgeClick(): void {
        if (this.options.interactable) {
            this.$emit('badgeClick');
        }
    }

    private badgeInputKeydown(event): void {
        if (event.code === 'Backspace' && this.options.canDelete) {
            this.deleteClick({ wasFocused: true });
        } else if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
            this.arrowPressed({ wasFocused: true, keyPressed: event.code });
        }
    }

    private deleteClick(options?: BadgeEmitOptions): void {
        this.$emit('deleted', {
            ...options,
            badge: this.$slots.default()[0].children
        });
    }

    /* PRIVATE */
    private arrowPressed(options: BadgeEmitOptions): void {
        this.$emit('arrowPressed', {
            ...options,
            badge: this.$slots.default()[0].children
        });
    }
}
</script>
