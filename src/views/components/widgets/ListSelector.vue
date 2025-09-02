<style lang="scss" scoped>
.list-input{
    [data-theme-color="dark"] & {
        --color-background-list: var(--color-input-background);
        --color-background-list-border: transparent;
        --color-background-list-border-focus: var(--color-primary-1);
        --color-background-list-item: var(--color-input-background);
        --color-text-list-item: var(--color-text-normal);
        --color-background-list-item-hover: var(--color-mix-1-2-step-2);
        --color-text-list-item-hover: var(--color-mix-5-6-step-3);
        --color-background-list-item-active: var(--color-primary-1);
        --color-text-list-item-active: var(--color-mix-5-6-step-3);
        --color-text-list-handle: var(--color-primary-7);
        --color-text-list-handle-active: var(--color-primary-1);
        --color-background-list-separator: hsl(var(--color-primary-2-h), var(--color-primary-2-s), 25%);
        --color-background-list-link-container: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.3
        );
        --color-checkbox-list-background: transparent;
        --color-checkbox-list-border: var(--color-mix-6-4-step-3);
        --color-checkbox-list-background-checked: var(--color-primary-1);
        --color-checkbox-list-border-checked: transparent;
        --color-drag-indicator: var(--color-primary-1);
    }

    [data-theme-color="light"] & {
        --color-background-list: var(--color-input-background);
        --color-background-list-border: transparent;
        --color-background-list-border-focus: var(--color-primary-1);
        --color-background-list-item: var(--color-input-background);
        --color-text-list-item: var(--color-text-normal);
        --color-background-list-item-hover: var(--color-mix-1-2-step-1);
        --color-text-list-item-hover: var(--color-mix-5-6-step-3);
        --color-background-list-item-active: var(--color-primary-1);
        --color-text-list-item-active: var(--color-mix-5-6-step-3);
        --color-text-list-handle: var(--color-primary-5);
        --color-text-list-handle-active: var(--color-primary-1);
        --color-background-list-separator: hsl(var(--color-primary-2-h), var(--color-primary-2-s), 25%);
        --color-background-list-link-container: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.3
        );
        --color-checkbox-list-background: transparent;
        --color-checkbox-list-border: var(--color-mix-6-4-step-3);
        --color-checkbox-list-background-checked: var(--color-primary-1);
        --color-checkbox-list-border-checked: transparent;
        --color-drag-indicator: var(--color-primary-1);
    }
}
.list-input {
    width: 100%;
    max-width: $ruler-input-max-width;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
    min-height: #{$ruler-input-height * 5};
    box-sizing: border-box;

    .add-item {
        position: absolute;
        bottom: calc(100% + 0.2rem);
        right: 0;
        transform-origin: 100% 50%;
        transform: scale(0.7);
    }
}

.list-selection {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    height: auto;
    min-height: inherit;
    max-height: $ruler-list-component-height;
    padding: 0.2rem;
    gap: 0.2rem;
    border: 2px solid var(--color-background-list-border);
    background-color: var(--color-background-list);
    border-radius: $ruler-border-radius;

    &:hover,
    &:focus-within {
        border-color: var(--color-background-list-border-focus);
    }

    &.checkbox-visible {
        &:hover,
        &:focus-within {
            border-color: transparent;
        }
        :deep(.list-option) {
            padding-left: 3.4rem !important;

            &::after {
                content: '';
                width: 2.2rem;
                height: 2.2rem;
                position: absolute;
                top: 0.5rem;
                left: 0.5rem;
                background-color: var(--color-checkbox-list-background);
                border: 2px solid var(--color-checkbox-list-border);
                border-radius: $ruler-border-radius;
            }

            &.selected {
                color: var(--color-text-list-item);
                background-color: var(--color-background-list-item);

                &::after {
                    background-color: var(--color-checkbox-list-background-checked);
                    border-color: var(--color-checkbox-list-border-checked);
                }

                &.input-disabled {
                    &::after {
                        background-color: var(--color-semantic-disabled);
                        border-color: oklch(from var(--color-semantic-disabled) calc(l - 0.1) c h);
                    }
                }

                &::before {
                    display: none;
                }
            }

            &:hover {
                background-color: var(--color-background-list-item);
                color: var(--color-text-list-item);

                &.selected {
                    background-color: var(--color-background-list-item);
                }
            }
        }
    }

    :deep(.list-option) {
        position: relative;
        min-height: $ruler-input-height !important;
        height: auto !important;
        color: var(--color-text-list-item);
        background-color: var(--color-background-list-item);
        display: flex;
        align-items: center;
        padding: .7rem 1rem;
        cursor: pointer;
        margin: 0;

        &:first-child {
            border-radius: $ruler-border-radius-inner $ruler-border-radius-inner 0 0;

            &:last-child {
                border-radius: $ruler-border-radius-inner;
            }
        }

        &:last-child {
            border-radius: 0 0 $ruler-border-radius-inner $ruler-border-radius-inner;
        }

        &.selected {
            background-color: var(--color-background-list-item-active);
            color: var(--color-text-list-item-active);

            +.selected {
                &::before {
                    content: '';
                    width: 100%;
                    height: 0.4rem;
                    position: absolute;
                    top: -0.3rem;
                    left: 0;
                    background-color: var(--color-background-list-item-active);
                }
            }
        }

        &.no-event {
            pointer-events: none;
            cursor: default;
        }

        &:hover {
            background-color: var(--color-background-list-item-hover);
            color: var(--color-text-list-item-hover);

            &.selected {
                background-color: var(--color-background-list-item-active);
                filter: brightness(1.15);
            }
        }

        input {
            @include visually-hidden();
        }
    }
}

.drag-indicator {
    position: relative;
    width: 100%;
    height: 0.2rem;
    background-color: var(--color-drag-indicator);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>

<template>
    <div class="list-input">
        <div class="add-item" ref="add-item">
            <slot name="add-item"></slot>
        </div>
        <div class="list-selection"
             :class="checkboxVisible ? 'checkbox-visible' : ''"
             :name="listName"
             ref="list"
             data-list>
            <slot/>
            <template v-if="!listItemExist()">
                <slot name="messageEmpty"></slot>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { useSlots } from 'vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/**
 * Construct a list based on the content of <slot>
 * list must be build like following:
 * <list-selector @param listName="{name attr of the <select> we're replacing}">
 *  <label value="{value attr of the <option> we're replacing}" ...>
 *      ...{html}
 *  </label>
 *  ...
 * </list-selector>
 * @param currentSelection HTMLElement as string to display the selected option
 * @param list HTMLElement containing the options
 *
 * One can overwrite the style of the options with scss in the same component as the <list-selector>
 * One can overwrite the style of the selected options with scss in the same component as the <list-selector>
 *     with .selected and !important
 */
@Component({
    name: 'List Selector',
    components: {
        FontAwesomeIcon
    },
    emits: [
        'change',
        'reordered',
        'reordering'
    ],
    expose: [
        'getItems',
        'getSelection',
        'requestUpdate',
        'setSelection',
        'toggleCheckboxChecked',
        'toggleCheckboxEnabled'
    ]
})
export default class ListSelector extends Vue {
    @Prop({ default: false })
    private allowReorder: boolean;
    @Prop
    private checkboxVisible: boolean;
    @Prop
    private currentSelection!: string[];
    @Prop
    private listName!: string;
    @Prop({ default: true })
    private selectable = true;

    private boundItemDragEnd = this.itemDragEnd.bind(this);
    private boundItemDragOver = this.itemDragOver.bind(this);
    private boundItemDragStart = this.itemDragStart.bind(this);
    private boundItemDrop = this.itemDrop.bind(this);
    private boundOptionChange = this.optionChange.bind(this);
    private draggedItem: HTMLElement;
    private dragIndicator: HTMLElement;

    private options = {
        currentSelection: []
    }
    private skipNextChange = false;

    private list: HTMLElement;

    public getItems(): string[] {
        return Array.from(this.list.querySelectorAll('input'))
            .map(element => element.name);
    }

    public getSelection(): string[] {
        return Array.from(this.list.querySelectorAll('input'))
            .filter(element => element.checked)
            .map(element => element.name);
    }

    public requestUpdate(): void {
        this.updateList();
    }

    public setSelection(newSelection: string[], emit = false): void {
        if (!newSelection && !this.selectable) {
            return;
        }

        this.options.currentSelection = newSelection;
        this.fillCurrentSelection();

        if (emit) {
            this.$emit('change', {
                lastSelected: null,
                selection: newSelection,
                target: this
            });
        }
    }

    public toggleCheckboxChecked(item: string, checked: boolean): void {
        const input: HTMLInputElement = this.list.querySelector(`input[name="${item}"]`);
        const label: HTMLElement = this.list.querySelector(`[value="${item}"]`);

        if (!label || !input) {
            return;
        }

        label.classList.add('selected');
        input.checked = checked;
    }

    public toggleCheckboxEnabled(item: string, enable: boolean): void {
        const input: HTMLInputElement = this.list.querySelector(`input[name="${item}"]`);
        const label: HTMLElement = this.list.querySelector(`[value="${item}"]`);

        if (!label || !input) {
            return;
        }

        if (enable) {
            input.removeAttribute('disabled');
            label.classList.remove('input-disabled');
        } else {
            input.setAttribute('disabled', 'disabled');
            label.classList.add('input-disabled');
        }
    }

    /* LIFECYCLE */
    public created(): void {
        this.options = Object.assign({}, this.options, Object.fromEntries(Object.entries({
            currentSelection: this.currentSelection
        }).filter(([p, v]) => v !== undefined && v !== null)));
    }

    /**
     * Get the HTMLElement containing the options
     * For each option, create an input inside based on which type of selection we need
     */
    public mounted(): void {
        this.list = this.$refs.list as HTMLElement;
        this.list['__loufairyBridge__'] = this;

        this.updateList();

        if (this.allowReorder) {
            this.list.addEventListener('dragend', this.boundItemDragEnd);
            this.list.addEventListener('dragover', this.boundItemDragOver);
            this.list.addEventListener('dragstart', this.boundItemDragStart);
            this.list.addEventListener('drop', this.boundItemDrop);
        }
    }

    public beforeUnmount(): void {
        for (const option of this.list.children) {
            const input = option.querySelector('input');
            if (!input) {
                continue;
            }
            input.removeEventListener('change', this.boundOptionChange);
        }

        if (this.allowReorder) {
            this.list.removeEventListener('dragstart', this.boundItemDragStart);
        }
    }

    /* EVENT HANDLERS */
    private itemDragEnd(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();

        this.draggedItem = null;
        this.$emit('reordered', {
            target: this
        });
    }

    private itemDragOver(event: DragEvent): void {
        const target: HTMLElement = event.target as HTMLElement;

        event.preventDefault();

        event.dataTransfer.dropEffect = 'move';
        if (target && target !== this.draggedItem && this.isImmediateChild(target)) {
            const rect = target.getBoundingClientRect();
            const next = (event.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;

            this.list.insertBefore(this.dragIndicator, next ? target.nextSibling : target);
        }
    }

    private itemDragStart(event: DragEvent): void {
        const target: HTMLElement = event.target as HTMLElement;

        if (!this.isImmediateChild(target)) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        this.draggedItem = target;
        this.dragIndicator = this.createDragIndicator();
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', target.outerHTML);

        this.$emit('reordering', {
            target: this
        });
    }

    private itemDrop(event: DragEvent): void {
        const target: HTMLElement = event.target as HTMLElement;

        if (this.draggedItem && target && this.isImmediateChild(target)) {
            const rect = target.getBoundingClientRect();
            const next = (event.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;

            this.list.insertBefore(this.draggedItem, next ? target.nextSibling : target);

            this.draggedItem = null;
        }

        if (this.dragIndicator) {
            this.dragIndicator.remove();
            this.dragIndicator = null;
        }

        event.preventDefault();
        event.stopPropagation();
    }

    /**
     * Replace @param currentSelection to display all selected option
     */
    private optionChange(event): void {
        if (this.skipNextChange) {
            this.skipNextChange = false;
            return;
        }

        const selectedOptionId = this.getSelection();

        if (!this.selectable) {
            (event.target as HTMLInputElement).checked = false;

            this.$emit('click', {
                targetOptionId: event.target.name
            });

            return;
        }

        this.$emit('change', {
            lastSelected: event.target.name,
            selection: selectedOptionId,
            target: this
        });

        if (event.target.checked) {
            event.target.parentElement.classList.add('selected');
        } else {
            event.target.parentElement.classList.remove('selected');
        }
    }

    /* PRIVATE */
    private createDragIndicator(): HTMLElement {
        const indicator: HTMLElement = this.list.nodeName === 'UL'
            ? document.createElement('li')
            : document.createElement('div');

        indicator.setAttribute(this.$options.__scopeId, '');
        indicator.classList.add('drag-indicator');

        return indicator;
    }

    private isImmediateChild(element: HTMLElement): boolean {
        return element.parentElement === this.list;
    }

    private listItemExist(): boolean {
        return Boolean(useSlots()['default']);
    }

    private fillCurrentSelection(): void {
        if (!this.options.currentSelection && !this.selectable) {
            return;
        }

        for (const oldSelected of this.list.querySelectorAll('.selected')) {
            oldSelected.classList.remove('selected');
            oldSelected.querySelector('input').checked = false;
        }

        for (const selected of this.options.currentSelection) {
            const item = this.list.querySelector(`[value='${selected}']`);

            if (!item) {
                continue;
            }
            const input = item.querySelector('input');

            if (!input) {
                throw new Error(`No input found in ${this.listName} in option`);
            }

            input.checked = true;
            item.classList.add('selected');

            this.skipNextChange = true;
        }
        setTimeout(() => this.skipNextChange = false, 10);
    }

    private updateList(): void {
        for (const option of this.list.children) {
            if (option.querySelector('input')) {
                continue;
            }

            const input = document.createElement('input');
            const previousInput = option.querySelector('input');

            if (!option.getAttribute('data-value')) {
                option.setAttribute('data-value', option.getAttribute('value'));
            }

            if (previousInput) {
                previousInput.removeEventListener('change', this.boundOptionChange);
                previousInput.remove();
            }

            option.classList.add('list-option');
            option.setAttribute('id', 'option-' + option.getAttribute('value'));

            input.setAttribute('type', 'checkbox');
            input.setAttribute('name', option.getAttribute('value'));
            input.setAttribute('id', option.getAttribute('data-value'));
            input.classList.add('no-spacing');
            input.addEventListener('change', this.boundOptionChange);


            if (this.allowReorder) {
                option.setAttribute('draggable', 'true');
            }

            option.appendChild(input);
        }

        this.fillCurrentSelection();
    }
}
</script>
