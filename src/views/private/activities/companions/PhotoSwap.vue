<style lang="scss" scoped>
.photo-swap-pre-container {
    $column-span: 3;
    position: relative;
    order: 1;
    grid-column: span #{$column-span} / -1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.5rem;

    [data-theme-color="dark"] & {
        --color-background-photoswap: var(--color-mix-5-6-step-3);
        --color-background-photoswap-entry: var(--color-mix-5-6-step-2);
        --color-background-photoswap-photo-holder: var(--color-mix-5-6-step-2);
        --color-background-photoswap-photo-holder-hover: hsla(
                var(--color-mix-5-2-step-4-h),
                var(--color-mix-5-2-step-4-s),
                var(--color-mix-5-2-step-4-l),
                0.5
        );
        --color-background-photoswap-handle: transparent;
        --color-background-photoswap-handle-img: var(--color-mix-5-2-step-3);
        --color-text-photoswap-handle-img: var(--color-mix-5-2-step-1);
        --color-background-photoswap-handle-hover: var(--color-mix-5-2-step-3);
    }

    [data-theme-color="light"] & {
        --color-background-photoswap: var(--color-mix-5-6-step-3);
        --color-background-photoswap-entry: var(--color-mix-5-6-step-2);
        --color-background-photoswap-photo-holder: var(--color-mix-5-6-step-2);
        --color-background-photoswap-photo-holder-hover: hsla(
                var(--color-mix-5-2-step-4-h),
                var(--color-mix-5-2-step-4-s),
                var(--color-mix-5-2-step-4-l),
                0.5
        );
        --color-background-photoswap-handle: transparent;
        --color-background-photoswap-handle-img: var(--color-mix-5-2-step-3);
        --color-text-photoswap-handle-img: var(--color-mix-5-2-step-1);
        --color-background-photoswap-handle-hover: var(--color-mix-5-2-step-3);
    }

    [data-theme-type="line"] & {
        background-color: var(--color-background-base);
    }
    [data-theme-type="block"] & {
        background-color: var(--color-background-photoswap);
    }

    ~ :deep(.table-holder) {
        grid-column: 1 / -#{$column-span + 1};
    }

    .item-container {
        padding-bottom: 0;
        min-height: calc(100% - 12.5rem);

        .pre-swap-item {
            position: relative;
            padding: 0.5rem;
            background-color: var(--color-background-photoswap);
            border-radius: $ruler-border-radius;
            margin-bottom: 0.5rem;

            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .remove {
                margin-left: auto;
            }

            .item-photos-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.5rem;

                img {
                    width: 100%;
                }
            }
        }
    }

    .overlay-ui {
        flex-direction: column;
    }
}

.overlay-ui {
    position: sticky;
    z-index: 15;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding: 0.5rem 0 4rem;
    bottom: -3.5rem;
    background-color: inherit;
}

.photo-swap-container {
    position: absolute;
    z-index: 100;
    inset: 0;
    padding: 1rem 2rem;

    [data-theme-type="line"] & {
        background-color: var(--color-background-base);
    }
    [data-theme-type="block"] & {
        background-color: var(--color-background-photoswap);
    }

    ~ :deep(.table-holder) {
        visibility: hidden;
    }

    .photo-swap-item-container {
        width: 100%;
        margin: 2rem;
        padding-right: 2rem;
    }

    .dragging-handle {
        position: absolute;
        pointer-events: all;
        z-index: 10;
        cursor: grab;

         >div {
             position: relative;
             padding: 0.7rem 0.7rem 0.4rem;
             border-radius: $ruler-border-radius;
             font-size: 4rem;
             background-color: var(--color-background-photoswap-handle);
             opacity: 0.1;

         }
    }

    .swap-item {
        pointer-events: none;
        position: relative;
        background-color: var(--color-background-photoswap-entry);
        border-radius: $ruler-border-radius;
        margin-bottom: 1rem;
        padding: 2rem 2rem 3rem 3rem;

        >.dragging-handle {
            padding: 1rem;
            left: 0;
            top: 50%;
            transform: translate(-25%, -50%);

            &:hover {
                >div {
                    left: -1.4rem;
                    background-color: var(--color-background-photoswap-handle-hover);
                    opacity: 1;
                    transition-duration: $animation-transition-duration;
                    transition-property: background-color, opacity, left;
                }
            }

            >div {
                left: 0;
                transition-duration: $animation-transition-duration;
                transition-property: background-color, opacity, left;
            }


        }

        .item-photos-container {
            position: relative;
            display: flex;
            gap: 1rem;
            padding: 1rem;
            border-radius: $ruler-border-radius;
            background-color: var(--color-background-photoswap-photo-holder);

            &.hovered {
                background-color: var(--color-background-photoswap-photo-holder-hover);
            }

            >.dragging-handle {
                left: 50%;
                bottom: 0;
                padding: 1rem 1rem 0;
                transform: translate(-50%, 72%);

                &:hover {
                    >div {
                        bottom: 1.5rem;
                        background-color: var(--color-background-photoswap-handle-hover);
                        opacity: 1;
                        transition-duration: $animation-transition-duration;
                        transition-property: background-color, opacity, bottom;
                    }
                }

                >div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    bottom: 0;
                    width: 5.7rem;
                    height: 3.4rem;
                    transition-duration: $animation-transition-duration;
                    transition-property: background-color, opacity, bottom;
                }
            }

            .image-item {
                position: relative;

                &:hover {
                    >.dragging-handle>div {
                        opacity: 0.7;
                        transition-duration: $animation-transition-duration;
                        transition-property: opacity;
                    }
                }

                >.dragging-handle {
                    inset: 0;

                    >div {
                        color: var(--color-text-photoswap-handle-img);
                        background-color: var(--color-background-photoswap-handle-img);
                        width: min-content;
                        @include center();
                        opacity: 0;
                        transition-duration: $animation-transition-duration;
                        transition-property: opacity;
                    }
                }

                img {
                    height: 18rem;
                }
            }
        }
    }
}
</style>

<template>
    <div class="photo-swap-pre-container">
        <div class="item-container">
        <template v-for="item in selection" :key="item">
            <div :id="`item-${item.id}`" class="pre-swap-item">
                <h6 class="item-header">
                    <span>{{ item.name }}</span>
                    <font-awesome-icon class="remove"
                                       :icon="['fal', 'times']"
                                       @click="removeItem(item.id)"/>
                </h6>
                <div class="item-photos-container">
                    <img v-for="img in item.photos"
                         :key="img"
                         :src="apiUrl + img">
                </div>
            </div>
        </template>
        </div>
        <div class="overlay-ui">
            <button class="btn btn-quaternary" @click="cancelSwapClick">
                {{ $t('generic.ui.cancel') }}
            </button>
            <button class="btn btn-primary" @click="proceedSwapClick">
                {{ $t('generic.ui.swap') }}
            </button>
        </div>
    </div>
    <div v-if="swapOverlayVisible" class="photo-swap-container">
        <h4>{{ $t('photoSwap.dragSwapInstruction') }}</h4>
        <div class="photo-swap-item-container" ref="photo-swap-item-container">
            <div class="item-separator"
                 @drop="changeItemOrder"
                 @dragover="showPreviewPlacement"
                 @dragleave="HidePreviewPlacement"
                 :data-order="0"></div>
            <template v-for="(item, index) in selection" :key="item">
                <div :id="`item-${item.id}`"
                     :ref="`item-${item.id}`"
                     :data-order="index"
                     class="swap-item"
                     draggable="true">
                    <div class="dragging-handle"
                         @click="enableItemDragging(item.id)">
                        <div>
                            <font-awesome-icon class="remove"
                                               :icon="['fas', 'grip-dots-vertical']"/>
                        </div>
                    </div>
                    <h6 class="item-header">
                        <span>{{ item.name }}</span>
                    </h6>
                    <div class="item-photos-container"
                         @dragover="highlightContainer"
                         @dragleave="unHighlightContainer"
                         @drop="moveImage(item.id)"
                         draggable="true">
                        <div class="dragging-handle"
                             @mousedown="enableImagesDragging(item.id, item.photos)"
                             @dragend="resetImageDragging()">
                            <div>
                                <font-awesome-icon :icon="['fas', 'grip-dots']"/>
                            </div>
                        </div>
                        <template v-for="(img, index) in item.photos" :key="img">
                            <div class="image-item"
                                 :data-order="index"
                                 draggable="true">
                                <div class="dragging-handle"
                                     @mousedown="enableImageDragging(item.id, img)"
                                     @dragend="resetImageDragging()">
                                    <div>
                                        <font-awesome-icon :icon="['fas', 'grip-dots-vertical']"/>
                                    </div>
                                </div>
                                <img :src="apiUrl + img">
                            </div>
                        </template>
                    </div>
                </div>
                <div class="item-separator"
                     @drop="changeItemOrder"
                     @dragover="previewPlacement"
                     :data-order="index + 1"></div>
            </template>
        </div>
        <div class="overlay-ui">
            <button class="btn btn-quaternary" @click="cancelSwapClick">
                {{ $t('generic.ui.cancel') }}
            </button>
            <button class="btn btn-primary" @click="confirmSwapClick">
                {{ $t('generic.ui.swap') }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { LocalizedString } from '@pictaccio/admin-gui/src/core/types/localized_string';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export type SelectionItem = {
    id: string,
    name: string | LocalizedString,
    photos: string[] | Record<string, string>
}

export type SwappingLog = {
    idFrom: string,
    idTo: string,
    photoPath: string
}

@Component({
    name: 'Photo Swap',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'cancel',
        'swapConfirmed',
        'swapItemRemoved'
    ],
    expose: [
        'setSelection',
        'setSelectionItem',
        'removeSelectionItem',
        'clearSelection'
    ]
})
export default class PhotoSwap extends Vue {
    private selection: SelectionItem[] = [];
    private apiUrl = environment.apiUrl;
    private swapOverlayVisible = false;

    private swappingLog: SwappingLog[] = [];

    private currentId: string;
    private currentImages: string[] | Record<string, string>;
    private currentImage: string;

    public setSelection(selection: SelectionItem[]): void {
        this.selection = selection;
    }

    public setSelectionItem(selectionItem: SelectionItem): void {
        this.selection.push(selectionItem);
    }

    public removeSelectionItem(selectionItemId: string) {
        this.selection = this.selection.filter(i => i.id !== selectionItemId);
    }

    public clearSelection(): void {
        this.selection = [];
    }
    /* LIFECYCLE */
    // public mounted(): void {}

    /* EVENT HANDLERS */
    private cancelSwapClick(): void {
        this.clearSelection();
        this.$emit('cancel');
    }

    private confirmSwapClick(): void {
        this.$emit('swapConfirmed', this.swappingLog);
    }

    private moveImage(id: string): void {
        if (this.currentId === id) {
            return;
        }
        this.unHighlightContainerDrop(id);
        if (this.currentImage) {
            this.moveOneImage(this.currentId, id, this.currentImage);
        } else if (this.currentImages) {
            this.swapAllImages(this.currentId, id, this.currentImages);
        }
    }

    private enableImageDragging(id: string, img: string): void {
        this.pointerEventsOnItemPhotosContainer('all');
        this.currentId = id;
        this.currentImage = img;
    }

    private enableImagesDragging(id: string, img: string[] | Record<string, string>): void {
        this.pointerEventsOnItemPhotosContainer('all');
        this.currentId = id;
        this.currentImages = img;
    }

    private highlightContainer(event): void {
        event.preventDefault();
        event.target.classList.add('hovered');
    }

    private proceedSwapClick(): void {
        this.swapOverlayVisible = true;
    }

    private removeItem(id: string): void {
        this.selection = this.selection.filter(i => i.id !== id);

        this.$emit('swapItemRemoved', id);
    }

    private resetImageDragging(): void {
        this.$nextTick(() => {
            this.pointerEventsOnItemPhotosContainer('none');
        });
    }

    private unHighlightContainer(event): void {
        event.target.classList.remove('hovered');
    }

    /* PRIVATE */
    private moveOneImage(currentId: string, newId: string, img: string): void {
        const oldItem = this.selection.find(i => i.id === currentId);
        const newItem = this.selection.find(i => i.id === newId);
        if (Array.isArray(newItem.photos) && Array.isArray(oldItem.photos)) {
            newItem.photos.push(img);
            oldItem.photos.splice(oldItem.photos.indexOf(img), 1);
        } else if (typeof newItem.photos === typeof oldItem.photos &&
            typeof newItem.photos === 'object' &&
            (!Array.isArray(newItem.photos) && !Array.isArray(oldItem.photos))) {
            const oldImgId = Object.entries(oldItem.photos).find(([k, v]) => v === img)[0];
            newItem.photos[oldImgId] = img;
            delete oldItem.photos[oldImgId];
        }

        this.swappingLog.push({
            idFrom: currentId,
            idTo: newId,
            photoPath: img
        });

        this.currentId = null;
        this.currentImage = null;
        this.currentImages = null;

        this.$forceUpdate();
    }

    private pointerEventsOnItemPhotosContainer(pointer: string): void {
        Array.from((this.$refs['photo-swap-item-container'] as HTMLElement)
            .querySelectorAll('.item-photos-container'))
            .forEach(i => { (i as HTMLElement).style.pointerEvents = pointer });
    }

    private swapAllImages(currentId: string, newId: string, img: string[] | Record<string, string>): void {
        const oldItem = this.selection.find(i => i.id === currentId);
        const newItem = this.selection.find(i => i.id === newId);
        if (Array.isArray(newItem.photos) && Array.isArray(oldItem.photos)) {
            oldItem.photos = newItem.photos;
            newItem.photos = img;
        }

        Object.values(oldItem.photos).map(i => this.swappingLog.push({
            idFrom: newId,
            idTo: currentId,
            photoPath: i
        } as SwappingLog));

        Object.values(newItem.photos).map(i => this.swappingLog.push({
            idFrom: currentId,
            idTo: newId,
            photoPath: i
        } as SwappingLog));

        this.currentId = null;
        this.currentImage = null;
        this.currentImages = null;
    }

    private unHighlightContainerDrop(id: string): void {
        const itemPhotosContainers = (this.$refs['photo-swap-item-container'] as HTMLElement)
            .querySelectorAll('.item-photos-container');
        itemPhotosContainers.forEach(i => {
            (i as HTMLElement).classList.remove('hovered');
            (i as HTMLElement).style.pointerEvents = 'none';
        });
    }
}
</script>
