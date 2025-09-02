<style lang="scss" scoped>
$dialog-box-padding: 2rem;
$dialog-box-gap: calc($grid-gap + 0.3rem);
$dialog-box-title: 3.5rem;
$help-box-height: 40vh;
$dialog-box-ui: 2.8rem;
.dialog-box {
    position: fixed;
    outline: transparent;
    z-index: 1000;
    width: 100%;
    max-width: 111.1rem;
    min-width: calc(#{$ruler-input-max-width} + #{$dialog-box-padding * 2});
    max-height: calc(100% - #{$ruler-header-height * 2});
    grid-template-rows: auto 1fr auto;
    background-color: var(--color-background-overlay-2);
    border-radius: $ruler-border-radius;
    padding: $dialog-box-padding;
    grid-auto-rows: auto min-content;
    gap: $dialog-box-gap;
    border: none;
    pointer-events: all;
    color: var(--color-text-normal);
    @include center();

    [data-theme-color="dark"] & {
        --color-background-overlay-1: var(--color-mix-5-6-step-3);
        --color-background-overlay-2: var(--color-mix-7-6-step-1);
    }

    [data-theme-color="light"] & {
        --color-background-overlay-1: var(--color-mix-1-7-step-1);
        --color-background-overlay-2: var(--color-primary-7);
    }

    &[open] {
        display: grid;
    }
    &::backdrop {
        opacity: 0;
        pointer-events: none;
    }

    &.modal::backdrop {
        opacity: 0.5;
        pointer-events: all;
        background-color: var(--color-background-base);
    }

    .title {
        grid-column: 1 / -1;
        height: $dialog-box-title;
    }

    .content {
        padding: 0;
    }

    @include breakpoint($small) {
        inset: 0;
        height: unset;
        max-width: unset;
        width: unset;
    }
}

.help-box {
    width: 100%;
    max-height: $help-box-height;
    height: min-content;
    top: unset;
    bottom: 0;
    grid-template-columns: auto;
    @include center(x);

    .title {
        grid-column: 1 / -1 !important;
    }

    ~.dialog-box {
        top: calc(50% - calc(#{$help-box-height} / 2));
        max-height: calc(100% - #{$help-box-height});

        .content {
            max-height: calc(100vh - calc(#{$help-box-height} +
            #{$dialog-box-padding * 2} + 6rem + #{$grid-gap * 2}));
        }
    }

    .content {
        max-height: calc(#{$help-box-height} - calc(#{$dialog-box-padding * 2} + 6rem + #{$grid-gap}));
    }

    .overlay-ui {
        display: none;
        height: $dialog-box-ui;
    }
}

.settings-box {
    --dialog-box-inset: 7;
    grid-auto-rows: unset;
    grid-template-columns: min-content auto;
    grid-template-rows: unset;
    inset: calc(var(--dialog-box-inset) * 1%);
    max-width: unset;
    max-height: unset;
    transform: none;
    width: unset;
    height: unset;
    padding: 0;
    border: none;
    gap: 0;

    >.title {
        background-color: var(--color-background-overlay-1);
        border-radius: $ruler-border-radius 0 0 $ruler-border-radius;
    }

    > .content {
        background-color: var(--color-background-overlay-2);
        max-height: unset;
        width: 100% !important;
        border-radius: 0 $ruler-border-radius $ruler-border-radius 0;
        margin: 0 !important;

        &:has(.boxes-display) {
            background-color: var(--color-background-overlay-1);
        }

        :deep(.activity-wrapper) {
            background-color: transparent;
            padding: 0 1.6rem 0;
            margin: 0;
            max-width: unset;

            .activity-control {
                background-color: inherit;
                gap: 1.8rem;
                padding: 0;

                &::-webkit-scrollbar-track {
                    margin-top: 4rem;
                }

                >h2 {
                    margin-block: 1.3rem 0;
                }
            }
        }
    }

    >.title {
        height: unset;
        grid-column: unset;
        background-color: var(--color-background-overlay-1);
    }

    @include breakpoint($small) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .content {
            border-radius: 0;
        }
    }
}

.large-box {
    left: 5%;
    right: 5%;
    max-width: unset;
    width: unset;
    border: none;
    @include center(y);
    grid-template-rows: min-content auto min-content;
    background-color: var(--color-background-overlay-2);

    @include breakpoint($small) {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: unset;
        transform: unset;
    }

    .content {
        max-height: unset;
        padding: 0 2rem;
    }
}

.small-box {
    position: fixed;
    width: max-content;
    height: min-content;
    max-height: unset;
    margin: 0;
    @include center();
}

.content {
    overflow: hidden auto;
    padding-top: 1rem;
    height: 100%;
    padding-right: 0.5rem;

    :deep(.crud-dialog) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
        gap: 2.2rem 2.3rem;

        label {
            white-space: nowrap;
        }

        /*[type=text] {
            grid-column: 2 / -1;
        }

        .dropdown-input {
            grid-column: 2 / -1;
        }

        .inputs-collection {
            grid-column: 2/ -1;
        }*/
    }
}

label {
    .name_locale &,
    .description_locale & {
        grid-column: 1/-1;
    }
}

.overlay-ui {
    width: 100%;
    height: fit-content;
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    flex-wrap: wrap;
}

.dialog-backdrop {
    position: fixed;
    z-index: 1000;
    inset: 0;
    background-color: var(--color-primary-6);
    opacity: 0.5;
    pointer-events: all;
    cursor: default;
}
</style>

<template>
    <div v-if="options.overlay && backdropVisible" class="dialog-backdrop" ref="dialog-backdrop"></div>
    <dialog ref="dialogBox" name="dialog-box" class="dialog-box" :class="boxType">
        <div class="title"><slot name="title"><h3 class="h5">{{ title }}</h3></slot></div>
        <div class="content"><slot name="content"><span></span></slot></div>
        <div v-if="options.uiVisible" class="overlay-ui">
            <slot name="uiDialog"><span></span></slot>
            <button v-if="options.dismiss" class="btn btn-quaternary" @click="initiateClose">
                {{ $t(`generic.ui.cancel`) }}
            </button>
        </div>
        <font-awesome-icon v-if="options.dismiss" class="dismiss" :icon="['fal', 'times']" @click="initiateClose"/>
    </dialog>
</template>

<script lang="ts">
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

type BoxType =
    'help-box' |
    'small-box' |
    'default-box' |
    'large-box' |
    'settings-box';

@Component({
    name: 'Dialog Box',
    emits: ['dialog-close'],
    components: {
        FontAwesomeIcon
    }
})
export default class DialogBox extends Vue {
    @Prop
    private title!: string;
    @Prop
    private overlay: boolean;
    @Prop
    private dismiss: boolean;
    @Prop
    private uiVisible: boolean;
    @Prop
    private boxType: BoxType = 'default-box';

    private dialog: HTMLDialogElement;

    private backdropVisible = false;

    private options = {
        overlay: false,
        dismiss: true,
        uiVisible: true
    }

    public openDialog(): void {
        this.dialog.show();
        this.backdropVisible = true;
    }

    public closeDialog(): void {
        this.dialog.close();
        this.backdropVisible = false;
    }
    /* LIFECYCLE */
    public created(): void {
        this.options = Object.assign({}, this.options, Object.fromEntries(Object.entries({
            overlay: this.overlay,
            dismiss: this.dismiss,
            uiVisible: this.uiVisible
        }).filter(([p, v]) => v !== undefined && v !== null)));
    }

    public mounted(): void {
        this.dialog = this.$refs['dialogBox'] as HTMLDialogElement;
    }

    /* PRIVATE */
    private async initiateClose(event): Promise<void> {
        event.preventDefault();
        if (!this.$store.getters['CrudOverlay/dirty'] ||
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.cancel'),
                title: this.$t('generic.prompt.cancelTitle')
            }) === 'yes') {
            await this.$store.dispatch('CrudOverlay/removeDirty', { force: true });
            this.$emit('dialog-close');
        }
    }
}
</script>
