<style lang="scss" scoped>
.pane-main,
.pane-sub {
    background-color: var(--color-background-pane-1);
    border-radius: calc(#{$ruler-border-radius} * 2);
    padding: 0 2.5rem 2rem 2.5rem;

    [data-theme-color="dark"] .dialog-box & {
        --color-background-pane-1: hsl(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-1-s),
                var(--color-mix-5-6-step-3-l)
        );
        --color-background-pane-2: hsl(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-2-l)
        );
        --color-text-pane-title: var(--color-primary-1);
    }

    [data-theme-color="dark"] & {
        --color-background-pane-1: hsl(
                var(--color-mix-7-6-step-1-h),
                var(--color-mix-7-6-step-2-s),
                var(--color-mix-7-6-step-1-l)
        );
        --color-background-pane-2: hsl(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-4-6-step-2-l)
        );
        --color-text-pane-title: var(--color-primary-1);
    }

    [data-theme-color="light"] & {
        --color-background-pane-1: var(--color-mix-4-7-step-1);
        --color-background-pane-2: var(--color-mix-4-7-step-2);
        --color-text-pane-title: var(--color-mix-5-7-step-3);

        --color-input-background: var(--color-mix-7-5-step-1);
    }

    :deep(.h5) {
        color: var(--color-text-pane-title);
        text-align: center;
        margin: 0 !important;
        width: unset !important;
    }
}

.pane-main {
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-template-rows: min-content min-content 1fr;
    grid-template-areas:
        "title image"
        "type type"
        "description description"
    ;
    grid-column: span 4 / auto;
    margin: 0;
    min-height: 22rem;
    width: 100%;
    position: relative;
    justify-items: center;
    padding-top: 2rem;

    &.activated {
        background-color: var(--color-background-pane-2);
        &::after {
            content: "";
            height: calc((1rem + #{$ruler-border-radius}) * 2.5);
            width: 100%;
            background-color: var(--color-background-pane-2);
            top: calc(100% - #{$ruler-border-radius} * 2);
            position: absolute;
            left: 0;
        }
        :deep(.h5) {
            color: var(--color-text-pane-title);
        }
    }


    .chevron {
        color: var(--color-text-pane-title);
        font-size: 3rem;
        position: absolute;
        z-index: 2;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
    }
}

.pane-sub {
    display: none;
    position: relative;
    padding: 2.5rem 4rem 1rem 3rem;
    &.activated {
        background-color: var(--color-background-pane-2);
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 1/-1;
        gap: 1rem 4rem;
    }
    .overlay-ui {
        grid-column: 1/-1;
        display: flex;
        justify-content: flex-end;
        gap: $grid-gap;
        margin: 0 -3rem 0 -2rem
    }
}
</style>

<template>
    <div ref="slot">
        <slot></slot>
    </div>
    <div class="pane-main" @click="manageClick"
         :class="[
             dasherize(paneName),
             imagedPane ? 'imaged-pane': '',
             paneActive ? 'activated': '']">
        <div ref="main"></div>
        <font-awesome-icon v-if="paneActive" class="chevron" :icon="['fas', 'chevron-down']" />
    </div>
    <div class="pane-sub" :class="[dasherize(paneName), paneActive ? 'activated': '']">
        <font-awesome-icon class="dismiss" :icon="['fal', 'times']" @click="paneClose"/>
        <div ref="sub"></div>
        <div class="overlay-ui">
            <div v-if="extraUi" ref="overlayUi">
            </div>
            <template v-if="defaultUi">
                <button class="btn btn-quaternary" @click="paneClose">
                    {{ $t(`generic.ui.cancel`) }}
                </button>
                <button class="btn btn-primary" @click="updateClick">
                    {{ $t(`generic.ui.update`) }}
                </button>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dasherize } from '@loufa/loufairy';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Pane',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'manage-click',
        'pane-activate',
        'pane-cancel',
        'update-click'
    ],
    expose: [
        'savePane',
        'setPaneActive'
    ]
})
export default class Pane extends Vue {
    @Prop
    private paneName!: string;
    @Prop
    private imagedPane = false;
    @Prop
    private paneControlDefaults: boolean;

    private paneActive = false;
    private defaultUi = true;
    private extraUi = true;

    public dasherize: (input: string) => string = dasherize;

    public savePane(): void {
        this.$emit('update-click');
    }

    public setPaneActive(active: boolean): void {
        this.paneActive = active;
    }

    /* LIFECYCLE */
    public mounted(): void {
        const slotElement = this.$refs.slot as HTMLElement;
        const mainElement = slotElement?.querySelector('main');
        const subElement = slotElement?.querySelector('sub');
        const overlayUiElement = slotElement?.querySelector('controls');

        const mainTargetElement = this.$refs.main as HTMLElement;
        const subTargetElement = this.$refs.sub as HTMLElement;

        for (const child of [...mainElement.children].reverse()) {
            mainTargetElement.parentNode.insertBefore(child, mainTargetElement.nextSibling);
        }
        for (const child of [...subElement.children].reverse()) {
            subTargetElement.parentNode.insertBefore(child, subTargetElement.nextSibling);
        }

        if (overlayUiElement) {
            if (!this.paneControlDefaults) {
                this.defaultUi = false;
            }
            const overlayUiTargetElement = this.$refs.overlayUi as HTMLElement;

            for (const child of [...overlayUiElement.children].reverse()) {
                overlayUiTargetElement.parentNode.insertBefore(child, overlayUiTargetElement.nextSibling);
            }

            overlayUiTargetElement.remove();
        } else {
            this.extraUi = false;
        }

        mainTargetElement.remove();
        subTargetElement.remove();
        slotElement.remove();
    }

    /* EVENT HANDLERS */
    private manageClick(): void {
        this.$emit('manage-click');
        this.paneActivate();
    }

    private paneActivate(): void {
        this.$emit('pane-activate', this.paneName);
    }

    private paneClose(): void {
        this.$emit('pane-cancel', this.paneName);
    }

    private updateClick(): void {
        this.savePane();
    }
}
</script>
