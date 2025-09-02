<style lang="scss" scoped>
    .ellipsis-menu {
        display: flex;
        gap: 1rem;

        .popup-trigger {
            display: inline-flex;
            justify-content: center;
            width: 3.5rem;
            padding: 1.5rem;
        }
    }

    .popup-menu-container {
        position: relative;

        &.opened {
            .popup-trigger {
                color: var(--color-text-normal);
                background-color: var(--color-background-lighter);
                border-radius: $ruler-border-radius $ruler-border-radius 0 0;
                border-color: transparent;
            }

            .popup-menu {
                opacity: 1;
                display: block;
                pointer-events: all;
            }
        }

        .popup-menu {
            position: absolute;
            right: 0;
            padding: 1rem 0;
            background-color: var(--color-background-lighter);
            z-index: 1000;
            border-radius: $ruler-border-radius 0 $ruler-border-radius $ruler-border-radius;
            box-shadow: oklab(from var(--color-primary-6) l a b / 0.5) 0 0 0.5rem;
            opacity: 0;
            pointer-events: none;

            transition: opacity $animation-transition-duration, display $animation-transition-duration ease-in-out;
            transition-behavior: allow-discrete;

            button {
                width: 100%;
                padding: 1rem;
                white-space: nowrap;
                border-radius: 0;
                border: none;
                text-transform: none;
                font-weight: normal;
                font-size: 1.6rem;
                color: var(--color-text-primary);

                &:hover {
                    background-color: oklch(from var(--color-background-lighter) calc(l + .05) c h);
                    border: none;
                }
            }
        }
    }
</style>

<style lang="css" scoped>
.opened .popup-menu {
    @starting-style {
        opacity: 0;
        display: none;
    }
}
</style>

<template>
    <div class="ellipsis-menu">
        <button v-for="item in items.slice(0, normalizedOptions.focused)"
                :key="item.id"
                :data-id="item.id"
                class="btn btn-primary"
                @click="popupMenuItemClick">
            {{ $t(item.localeKey) }}
        </button>
        <div v-if="items.length > normalizedOptions.focused"
             class="popup-menu-container"
             :class="showPopupMenu ? 'opened' : ''">
            <button class="btn btn-primary popup-trigger" ref="popup-trigger" @click="popupMenuTriggerClick">
                <font-awesome-icon icon="ellipsis-v"/>
            </button>
            <div class="popup-menu">
                <button v-for="item in items.slice(normalizedOptions.focused)"
                        :key="item.id"
                        :data-id="item.id"
                        class="btn btn-tertiary popup-menu-item"
                        @click="popupMenuItemClick">
                    {{ $t(item.localeKey) }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

export type EllipsisMenuOptions = {
    focused: number;
};

export type MenuItem = {
    id: string;
    localeKey: string;
};

@Component({
    name: 'Ellipsis Menu',
    components: {
        FontAwesomeIcon
    },
    expose: [
        '*Click'
    ]
})
export default class EllipsisMenu extends Vue {
    @Prop
    private items: MenuItem[];
    @Prop
    private options: EllipsisMenuOptions;

    private documentClickBounded = this.documentClick.bind(this);
    private normalizedOptions: EllipsisMenuOptions = {
        focused: 2
    };
    private showPopupMenu = false;

    /* LIFECYCLE */
    public created(): void {
        this.normalizedOptions = {
            ...this.normalizedOptions,
            ...this.options
        };
    }

    /* EVENT HANDLERS */
    private documentClick(event: MouseEvent): void {
        if (event.target === this.$refs['popup-trigger']) {
            return;
        }

        if (this.showPopupMenu) {
            this.showPopupMenu = false;
        }
    }

    private popupMenuItemClick(event: MouseEvent): void {
        const id = (event.target as HTMLElement).getAttribute('data-id');

        this.$emit(`${id}Click`);
    }

    private popupMenuTriggerClick(event: MouseEvent): void {
        if (!this.showPopupMenu) {
            this.$nextTick(() => {
                document.body.addEventListener('click', this.documentClickBounded, { capture: true, once: true });
            });
        } else {
            document.body.removeEventListener('click', this.documentClickBounded);
        }

        this.showPopupMenu = !this.showPopupMenu;
    }
}
</script>
