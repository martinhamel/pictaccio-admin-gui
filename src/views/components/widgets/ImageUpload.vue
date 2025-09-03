<style lang="scss" scoped>
.image-upload-holder {
    --color-transparency: 0.8;
    position: relative;
    display: grid;
    min-height: 22rem;
    min-width: 16rem;
    padding: $grid-gap;
    width: auto;
    height: auto;
    border: 1px solid var(--color-border);
    color: var(--color-icon);
    font-size: 7rem;
    border-radius: $ruler-border-radius;
    overflow: auto;
    grid-template-columns: repeat(auto-fill, 16rem);
    gap: $grid-gap;
    grid-auto-flow: dense;
    justify-items: center;
    align-items: center;


    [data-theme-color="dark"] & {
        --color-border: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                var(--color-transparency)
        );
        --color-icon: hsla(
                var(--color-mix-4-7-step-1-h),
                var(--color-mix-4-7-step-1-s),
                var(--color-mix-4-7-step-1-l),
                var(--color-transparency)
        );
        --color-card: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                0.5
        );
    }

    [data-theme-color="light"] & {
        --color-border: hsla(
                var(--color-mix-5-7-step-1-h),
                var(--color-mix-5-7-step-1-s),
                var(--color-mix-5-7-step-1-l),
                var(--color-transparency)
        );
        --color-icon: hsla(
                var(--color-mix-5-7-step-3-h),
                var(--color-mix-5-7-step-3-s),
                var(--color-mix-5-7-step-3-l),
                var(--color-transparency)
        );
        --color-card: hsla(
                var(--color-mix-4-7-step-1-h),
                var(--color-mix-4-7-step-1-s),
                var(--color-mix-4-7-step-1-l),
                var(--color-transparency)
        );
    }

    .small-box & {
        width: min-content;
        margin: auto;
    }
}

.add-file-icon-box {
    margin: 5rem 3rem 3rem;
    display: flex;
    flex-direction: column;
    gap: $grid-gap;
    font-size: 1.6rem;
    text-align: center;
    cursor: pointer;
    color: var(--color-icon);

    &:hover {
        color: var(--color-text-accent-secondary);
    }

    &:first-child {
        grid-column: 1 / -1;
    }
}

.add-file-icon {
    margin: auto 3rem;
    padding-bottom: 3.4rem;
    font-size: 5rem;
    pointer-events: all;
    cursor: pointer;
    color: var(--color-icon);
}

.delete-icon, .toggle-default, .upload-icon {
    cursor: pointer;
}
.delete-icon {
    font-size: 2rem;
    order: 0;
    display: flex;
    position: absolute;
    inset: 1rem 1rem auto auto;
    justify-content: center;
    :hover {
        color: var(--color-semantic-error);
    }
}
.toggle-default {
    font-size: 1.5rem;
    display: inline-flex;
    align-items: center;
    margin: 0;
    :hover {
        filter: brightness(120%);
    }
}
.upload-icon {
    font-size: 2rem;
    order: 0;
    display: flex;
    position: absolute;
    inset: 1rem 4rem auto auto;
    justify-content: center;
    &:hover {
        color: var(--color-semantic-info);
    }
}


.image-container {
    display: flex;
    flex-direction: column;
    min-width: inherit;
    min-height: inherit;
    width: 16rem;
    height: 100%;
    position: relative;
    border-radius: $ruler-border-radius;
    padding: 4rem 0.6rem 0.6rem;
    background-color: var(--color-card);

    &:hover {
        cursor: pointer;

        .add-file-icon {
            color: var(--color-semantic-info);
        }
    }

    .selector {
        @extend .tertiary;
        position: absolute;
        inset: 0.7rem auto auto 0;
    }

    .uploadedImg {
        width: 100%;
        cursor: pointer;
        max-height: 25rem;
    }

    .image-control {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
    }
}

.selection-option-label {
    width: 100%;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: $ruler-border-radius;
    background-color: var(--color-text-accent-primary);
    color: var(--color-text-normal-reversed);
}
</style>

<template>
    <fieldset class="image-upload-holder">
        <template v-for="(restoredFilePath, index) of restoredFilePaths" :key="index">
            <template v-if="!isEmpty(restoredFilePath)">
                <div class="image-container">
                <template v-if="options.selectable !== 'none'">
                    <input v-if="options.selectable === 'many'"
                           type="checkbox"
                           :ref="`selector-${restoredFilePath.tempId}`"
                           class="selector"
                           :name="restoredFilePath.tempId"
                           @click="selectInputClick">
                    <input v-if="options.selectable === 'one'"
                           type="radio"
                           :ref="`selector-${restoredFilePath['tempId']}`"
                           name="default"
                           class="selector"
                           :id="restoredFilePath.tempId"
                           :value="restoredFilePath.fileId"
                           :checked="options.defaultSelection === restoredFilePath.fileId"
                           @click="selectInputClick">
                </template>
                <img :src="apiUrl + restoredFilePath.path"
                     class="uploadedImg"
                     @error="restoredImageError"
                     @dblclick="e => e.preventDefault()"
                     @click="options.allowGetSelection
                        ? selectImageClick(restoredFilePath.tempId)
                        : editRestoredImageClick(restoredFilePath.fileId)">
                <div v-if="(typeof options.deletable === 'function'
                    ? options.deletable(restoredFilePath.path)
                    : options.deletable)
                    && !options.readonly"
                     @click="deleteRestoredImageClick(restoredFilePath.fileId)"
                     class="delete-icon">
                    <font-awesome-icon :icon="['far', 'trash-can']"/>
                </div>
                <div v-if="editable && (options.allowGetSelection && typeof options.deletable === 'function'
                                ? options.deletable(restoredFilePath.path)
                                : options.deletable && !options.readonly)"
                     @dblclick="e => e.preventDefault()"
                     @click="editRestoredImageClick(restoredFilePath.fileId)"
                     class="upload-icon">
                    <font-awesome-icon :icon="['far', 'file-upload']"/>
                </div>
                <div class="image-control">
                    <div v-if="options.hasSelectionRange"
                         class="selection-option-label">
                        {{ getLocaleFromFileId(restoredFilePath.tempId) }}
                    </div>
                </div>
            </div>
            </template>
        </template>
        <template v-for="file of files" :key="file">
            <div v-if="!options.readonly" class="image-container">
                <template v-if="options.selectable !== 'none'">
                    <input v-if="options.selectable === 'many'"
                           type="checkbox"
                           :ref="`selector-${file['tempId']}`"
                           class="selector"
                           :name="file['tempId']"
                           @click="selectInputClick">
                    <input v-if="options.selectable === 'one'"
                           type="radio"
                           :ref="`selector-${file['tempId']}`"
                           name="default"
                           class="selector"
                           :id="file['tempId']"
                           :value="file['fileId']"
                           @click="selectInputClick">
                </template>
                <img :src="file['dataUrl']"
                     class="uploadedImg"
                     @dblclick="e => e.preventDefault()"
                     @click="options.allowGetSelection ? selectImageClick(file['tempId']) : editImageClick(file)">
                <div @click="deleteImageClick(file)"
                     class="delete-icon">
                    <font-awesome-icon :icon="['far', 'trash-can']"/>
                </div>
                <div v-if="options.allowGetSelection && editable"
                     @dblclick="e => e.preventDefault()"
                     @click="editImageClick(file)"
                     class="upload-icon">
                    <font-awesome-icon :icon="['far', 'file-upload']"/>
                </div>
                <div class="image-control">
                    <div v-if="options.hasSelectionRange"
                         class="selection-option-label">
                        {{ getLocaleFromFileId(file['tempId']) }}
                    </div>
                </div>
            </div>
        </template>

        <div class="image-container" v-if="noThemeIconVisible && !options.readonly">
            <font-awesome-icon :icon="['far', 'file-upload']"
                               class="add-file-icon"
                               role="button"
                               @dblclick="e => e.preventDefault()"
                               @click="addImageClick()"/>
            <slot name="upload-instruction"></slot>
        </div>

        <template v-for="option of rangeSelection()" :key="option">
            <div v-if="!specificFileExist(option.id) && !this.options.readonly && editable">
                <font-awesome-icon :icon="['far', 'file-upload']"
                                   :id="option.id"
                                   class="add-file-icon"
                                   role="button"
                                   v-if="files?.length === 0 || options.multiple || options.hasSelectionRange"
                                   @dblclick="e => e.preventDefault()"
                                   @click="addImageClick(option.id)"/>
                <div v-if="options.hasSelectionRange"
                     class="selection-option-label">
                    {{ getLocaleFromOption(option) }}
                </div>
            </div>
        </template>
        <input type="hidden" ref="loufairy-bridge" :name="name" __imageUpload__>
        <span ref="inputs-holder" hidden="true"></span>
    </fieldset>
</template>

<script lang="ts">
import { fileAsDataURL } from '@pictaccio/admin-gui/core/file_as_data_url';
import { ProductSelectionRangeItem } from '@pictaccio/admin-gui/core/types/product_selection_range_item';
import { generateRandomId } from '@pictaccio/admin-gui/utils/generate_uuid';
import { isEmpty } from '@loufa/loufairy';
import { isFile } from '@pictaccio/admin-gui/utils/is_file';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { environment } from '@pictaccio/admin-gui/environment';

export type SelectRange = 'one' | 'many' | 'none'; // Add number for a max selection range?

type ImageUploadOptions = {
    multiple: boolean,
    selectionRange: ProductSelectionRangeItem[],
    hasSelectionRange: boolean,
    defaultSelection: string,
    idMap: Record<string, string>,
    allowGetSelection: boolean,
    selectable: SelectRange,
    deletable: boolean | ((image: string) => boolean),
    readonly: boolean
}

export type FileMetadata = {
    path?: string,
    fileId: string,
    tempId: string,
    dataUrl?: string
}

export function isSelectRange(value: any): value is SelectRange {
    if (typeof value !== 'string') {
        return false;
    }

    return ['one', 'many', 'none'].includes(value);
}

@Component({
    name: 'Image Upload',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'imageDeleted',
        'imageSelected',
        'imagesSelected',
        'selection'
    ],
    expose: [
        'clearFiles',
        'getFiles',
        'getRestoredFiles',
        'getSelection',
        'setFiles',
        'setIdMap',
        'setSelectionRange',
        'setSelection'
    ]
})
export default class ImageUpload extends Vue {
    @Prop
    private name: string;
    @Prop
    private multiple: boolean;
    @Prop
    private selectionRange: ProductSelectionRangeItem[];
    @Prop
    private defaultSelection: string;
    @Prop
    private idMap: Record<string, string>;
    @Prop
    private allowGetSelection: boolean;
    @Prop
    private selectable: SelectRange;
    @Prop({ default: true })
    private editable: boolean;
    @Prop
    private deletable: boolean | ((image: string) => boolean);
    @Prop
    private readonly: boolean;

    private apiUrl = environment.apiUrl;
    private restoredFilePaths: FileMetadata[] = [];
    private imageUploadHolderRef: HTMLElement;

    private files: File[] = [];

    private changingFile: File | FileMetadata;
    private listLengthBefore: number;
    private initialSetRange = true;
    private noThemeIconVisible = true;

    private options: ImageUploadOptions = {
        multiple: false,
        selectionRange: [],
        hasSelectionRange: false,
        defaultSelection: null,
        idMap: null,
        allowGetSelection: false,
        selectable: 'none',
        deletable: true,
        readonly: false
    }

    private isEmpty = isEmpty;

    public clearFiles(): void {
        this.clearRecord();
    }

    public getFiles(): (FileMetadata | File)[] {
        const restoredFiles = this.getRestoredFiles();
        return [...restoredFiles, ...this.files];
    }

    public getRestoredFiles(): FileMetadata[] {
        return this.restoredFilePaths;
    }

    public getSelection(): string[] {
        if (!this.options.allowGetSelection) {
            throw new Error('ImageUpload: getSelection() called when selectable is false');
        }

        return Object.entries(this.$refs)
            .filter(([name, ref]) => name.startsWith('selector-') && ref[0]['checked'])
            .map(([name, _]) => name.replace('selector-', ''));
    }

    public setFiles(files: string | string[] | Record<string, string>): void {
        this.clearRecord();
        let record: Record<string, string> = {};

        if (typeof files === 'string') {
            files = [files];
        }

        if (Array.isArray(files)) {
            files.forEach(i => { record[generateRandomId()] = i });
        } else {
            record = files;
        }

        this.restoredFilePaths = Object.entries(record).map(([key, path]) => {
            return {
                path,
                fileId: key,
                tempId: this.mappedId(key)
            };
        });

        this.$forceUpdate();
        this.noThemeIconVisibility();
    }

    public setIdMap(map: Record<string, string>): void {
        this.options.idMap = map;
    }

    public setSelection(selection: string[]): void {
        if (!this.options.allowGetSelection) {
            throw new Error('ImageUpload: setSelection() called when selectable is set to none');
        }

        selection.forEach(i => { if (this.$refs[`selector-${i}`]) this.$refs[`selector-${i}`][0]['checked'] = true; });
    }

    public setSelectionRange(selection: ProductSelectionRangeItem[]): void {
        if (!this.initialSetRange) {
            this.clearRecord();
        }
        this.options.selectionRange = selection;
        // TODO: Commented next line because it prevents reloading the default image selection in the product dialog
        // this.options.defaultSelection = null;
        if (!selection.length) {
            this.options.hasSelectionRange = false;
            this.initialSetRange = false;
            this.noThemeIconVisibility();
            return;
        }
        this.options.hasSelectionRange = true;
        this.initialSetRange = false;
        this.noThemeIconVisibility();
    }

    /* LIFECYCLE */
    public created(): void {
        this.options = Object.assign({}, this.options, Object.fromEntries(Object.entries({
            multiple: this.multiple,
            selectionRange: this.selectionRange,
            hasSelectionRange: this.selectionRange?.length > 0,
            defaultSelection: this.defaultSelection,
            idMap: this.idMap,
            allowGetSelection: this.allowGetSelection,
            selectable: this.selectable,
            deletable: this.deletable,
            readonly: this.readonly
        }).filter(([p, v]) => v !== undefined && v !== null)));

        if (this.options.hasSelectionRange) {
            this.options.multiple = false;
        }

        if (this.options.selectable !== 'none') {
            this.options.allowGetSelection = true;
        }
    }

    public mounted(): void {
        const loufairyBridge = this.$refs['loufairy-bridge'] as HTMLElement;
        loufairyBridge['__loufairyBridge__'] = this;
        this.imageUploadHolderRef = this.$refs['inputs-holder'] as HTMLElement;
        this.noThemeIconVisibility();
    }

    public updated(): void {
        this.imageUploadHolderRef.innerHTML = '';
        if (this.changingFile &&
            !(typeof this.changingFile === 'string') &&
            this.listLengthBefore < this.files.length) {
            this.deleteFile(this.changingFile as File);
        }
        if (this.changingFile &&
            typeof this.changingFile === 'string' &&
            this.listLengthBefore < this.files.length) {
            this.deleteRestoredFile(this.changingFile)
        }
        this.changingFile = null;
        this.listLengthBefore = null;
    }

    /* EVENT HANDLERS */
    private addImageClick(id?: string): void {
        this.selectFile(this.options.hasSelectionRange && id
            ? id
            : null
        );
    }

    private deleteImageClick(file: File): void {
        this.deleteFile(file);
    }

    private deleteRestoredImageClick(path: string): void {
        if (this.options.readonly) {
            return;
        }
        this.deleteRestoredFile(path);
        this.$emit('imageDeleted', {
            imageUploadName: this.name,
            file: path
        });
    }

    private async editImageClick(file: File): Promise<void> {
        this.listLengthBefore = this.files.length;
        this.changingFile = file;
        this.selectFile(file['tempId']);
    }

    private async editRestoredImageClick(fileId: string): Promise<void> {
        if (this.options.readonly) {
            return;
        }
        this.listLengthBefore = this.files.length;
        this.changingFile = this.restoredFilePaths
            .find(i => i.fileId === fileId);
        this.selectFile(this.mappedId(fileId));
    }

    private async imageSelected(event): Promise<void> {
        for (const file of event.target.files) {
            this.$emit('imageSelected', {
                imageUploadName: this.name,
                file
            });
            await this.asDataUrl(file);
            file['fileId'] = (this.changingFile && this.changingFile['fileId'])
                ? this.changingFile['fileId']
                : generateRandomId();
            file['tempId'] = (this.changingFile && this.changingFile['tempId'])
                ? this.changingFile['tempId']
                : event.target.id;
            this.files.push(file);
        }
        this.noThemeIconVisibility();

        if (this.changingFile) {
            if (isFile(this.changingFile)) {
                this.files.splice(this.files.findIndex(f => f === this.changingFile), 1);
            } else {
                this.restoredFilePaths.splice(
                    this.restoredFilePaths.findIndex(i => i.fileId === this.changingFile['fileId']), 1);
                this.$emit('imageDeleted', {
                    imageUploadName: this.name,
                    file: this.changingFile
                });
            }
            this.changingFile = null;
        }
        this.$emit('imagesSelected', this.files);
    }

    private restoredImageError(): void {
        this.clearRecord();
    }

    private selectDefault(id: string): void {
        this.options.defaultSelection = id;
    }

    private selectImageClick(id: string): void {
        if (this.options.readonly) {
            return;
        }
        (this.$refs[`selector-${id}`][0] as HTMLInputElement).click();
    }

    private selectInputClick(event): void {
        // debugger;
        if (this.options.selectable === 'one') {
            this.selectDefault(event.target.value);
        }
        if (this.options.selectable === 'many') {
            // event.target.checked = !event.target.checked;
        }

        this.$nextTick(() => {
            this.emitSelection(event.target.name);
        });
    }

    /* PRIVATE */
    private async asDataUrl(file: File): Promise<void> {
        file['dataUrl'] = await fileAsDataURL(file).promise;
    }

    private clearRecord(): void {
        this.files = [];
        this.restoredFilePaths = [];
        this.noThemeIconVisible = true;
    }

    private deleteFile(file: File): void {
        this.files.splice(this.files.findIndex(f => f === file), 1);
        this.noThemeIconVisibility();
    }

    private deleteRestoredFile(id: string): void {
        this.restoredFilePaths.splice(
            this.restoredFilePaths.findIndex(i => i.fileId === id), 1);
        this.noThemeIconVisibility();
    }

    private emitSelection(selectedItem): void {
        const selection = this.getSelection();

        this.$emit('selection', {
            selectedItem,
            selection,
            allSelected: selection.length === (this.files.length + Object.values(this.restoredFilePaths).length),
            imageUploadName: this.name
        });
    }

    private getLocaleFromFileId(id: string): string {
        if (this.restoredFilePaths[id] === null) {
            return '';
        }
        let mappedId;
        if (this.options.idMap) {
            mappedId = Object.entries(this.options.idMap).find(i => i.includes(id));
        }

        const selectedId = mappedId
            ? mappedId[0]
            : id;

        const locale = this.rangeSelection().find(i => i.id.toString() === selectedId).locale;
        return typeof locale === 'string'
            ? locale
            : locale[this.$i18n.locale];
    }

    private getLocaleFromOption(option: ProductSelectionRangeItem): string {
        return typeof option.locale === 'string'
            ? option.locale
            : option.locale[this.$i18n.locale];
    }

    private mappedId(id: string): string {
        return this.options.idMap && !isEmpty(this.options.idMap)
            ? Object.entries(this.options.idMap).find(i => i.includes(id))[0]
            : id;
    }

    private noThemeIconVisibility(): void {
        this.noThemeIconVisible = !this.options.hasSelectionRange &&
            (this.options.multiple ||
                (!this.files.length && !this.restoredFilePaths.length));
    }

    private rangeSelection(): ProductSelectionRangeItem[] {
        return this.options.hasSelectionRange
            ? [...this.options.selectionRange]
            : []
    }

    private selectFile(id?: string): void {
        const tempId = (id ?? generateRandomId());
        const input = document.createElement('input');

        input.type = 'file';
        input.id = tempId;
        if (this.options.multiple) {
            input.multiple = true;
        }
        input.addEventListener('change', this.imageSelected, { once: true });

        this.imageUploadHolderRef.appendChild(input);
        (this.imageUploadHolderRef.querySelector(`input[id="${tempId}"]`) as HTMLInputElement).click();
    }

    private specificFileExist(id: string): boolean {
        let mappedId;
        if (this.options.idMap) {
            mappedId = Object.entries(this.options.idMap).find(i => i.includes(id)) !== undefined;
        }
        const restoredId = mappedId
            ? Object.keys(this.options.idMap)
            : Object.keys(this.restoredFilePaths);
        return (this.files.find(i => i['tempId'] === id) !== undefined ||
            restoredId.find(i => i === id) !== undefined);
    }
}
</script>
