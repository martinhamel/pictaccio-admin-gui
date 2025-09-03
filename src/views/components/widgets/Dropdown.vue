<style lang="scss" scoped>
.dropdown-input,
.dropdown {
    [data-theme-color="dark"] & {
        --color-background-dropdown: var(--color-input-background);
        --color-background-dropdown-border: transparent;
        --color-background-dropdown-border-focus: var(--color-primary-1);
        --color-background-dropdown-item: var(--color-input-background);
        --color-text-dropdown-item: var(--color-text-normal);
        --color-background-dropdown-item-hover: var(--color-mix-1-2-step-1);
        --color-text-dropdown-item-hover: var(--color-mix-5-6-step-3);
        --color-background-dropdown-item-active: var(--color-primary-1);
        --color-text-dropdown-item-active: var(--color-mix-5-6-step-3);
        --color-text-dropdown-handle: var(--color-primary-7);
        --color-text-dropdown-handle-active: var(--color-primary-1);
        --color-background-dropdown-separator: hsl(var(--color-primary-2-h), var(--color-primary-2-s), 25%);
        --color-background-dropdown-link-container: hsla(
                var(--color-primary-8-h),
                var(--color-primary-8-s),
                var(--color-primary-8-l),
                0.3
        );
    }

    [data-theme-color="light"] & {
        --color-background-dropdown: var(--color-input-background);
        --color-background-dropdown-border: transparent;
        --color-background-dropdown-border-focus: var(--color-primary-1);
        --color-background-dropdown-item: var(--color-input-background);
        --color-text-dropdown-item: var(--color-text-normal);
        --color-background-dropdown-item-hover: var(--color-mix-1-2-step-1);
        --color-text-dropdown-item-hover: var(--color-mix-5-6-step-3);
        --color-background-dropdown-item-active: var(--color-primary-1);
        --color-text-dropdown-item-active: var(--color-mix-5-6-step-3);
        --color-text-dropdown-handle: var(--color-primary-5);
        --color-text-dropdown-handle-active: var(--color-primary-1);
        --color-background-dropdown-separator: hsl(var(--color-primary-2-h), var(--color-primary-2-s), 25%);
        --color-background-dropdown-link-container: hsla(
                var(--color-mix-7-5-step-3-h),
                var(--color-mix-7-5-step-3-s),
                var(--color-mix-7-5-step-3-l),
                1
        );
    }
}

.dropdown-input {
    @extend .input-boxes-default;
    width: 100%;
    max-width: $ruler-input-max-width;
    display: flex;
    overflow: clip;
    flex-direction: column;
    padding: 0;
    position: relative;
    z-index: 10;
    margin: 0;

    &.disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.7;
        filter: grayscale(0.5);

        .handle {
            filter: brightness(0.4);

            [data-theme-color="light"] & {
                filter: brightness(2);
            }
        }
    }

    &.selected {
        border-radius: $ruler-border-radius $ruler-border-radius 0 0;
        border-color: var(--color-background-dropdown-border-focus);
        border-bottom-color: transparent;
    }

    .dropdown-initial-input {
        @include visually-hidden();
    }

    .selection:deep(label) {
        font-size: 1.5rem;
        --font-weight: 400 !important;
        position: absolute;
        pointer-events: none;
        left: 1.2rem;
        margin: 0;
    }

    .placeholder {
        font-size: 1.5rem;
        --font-weight: 400 !important;
        position: absolute;
        top: 0.6rem;
        left: 1.2rem;
        pointer-events: none;
        margin: 0;
    }
}

.handle {
    font-size: 1.6rem;
    color: var(--color-text-dropdown-handle);
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    transform-origin: 50% 50%;
    transform: rotate(180deg);
    pointer-events: none;

    &.opened {
        color: var(--color-text-dropdown-handle-active);
        pointer-events: auto;
        cursor: pointer;
    }
}

.selection {
    max-width: $ruler-input-max-width;
    cursor: pointer;
    overflow: clip;
    display: flex;
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
    margin-top: $ruler-input-spacing-above  ;

    :deep(*) {
        pointer-events: none;

        input {
            display: none;
        }
    }

    :deep(.dropdown-option) {
        margin: 0;
        padding: 0;
    }

    &.selected {
        border-color: var(--color-text-accent-primary);
        border-bottom-color: var(--color-background-dropdown-separator);
        background-color: var(--color-background-dropdown);
        border-radius: $ruler-border-radius $ruler-border-radius 0 0;
    }

    &.multiple-selection {
        opacity: 0;
    }
}

.badge-container {
    position: absolute;
    inset: -0.2rem 0 auto -0.1rem;
    pointer-events: none;
    overflow: clip;
    border-radius: $ruler-border-radius;


    &.opened {
        border-radius: $ruler-border-radius $ruler-border-radius 0 0;

        :deep(.badge-input-container) {
            border-color: transparent;
            border-radius: $ruler-border-radius $ruler-border-radius 0 0;
        }
    }
}

.dropdown[open] {
    position: fixed;
    z-index: 99;
    display: flex;
    flex-direction: column;
    min-height: $ruler-input-height;
    max-height: 30rem;
    border: 2px solid var(--color-background-dropdown-border-focus);
    background-color: var(--color-background-dropdown);
    margin: 0;
    padding: 0.2rem;
    gap: 0.2rem;
    overflow: clip auto;
    transform: translateY(-0.2rem);
    border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
    border-top-width: 0;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: var(--color-background-dropdown-separator);
        top: 0;
        left: 0;
    }

    :deep(.dropdown-option) {
        position: relative;
        color: var(--color-text-dropdown-item);
        background-color: var(--color-background-dropdown-item);
        padding: 0.2rem 3rem 0.3rem 0.8rem !important;
        min-height: 2.8rem;
        margin: 0;
        cursor: pointer;
        font-size: 1.5rem;
        --font-weight: 400;
        //border-radius: $ruler-border-radius-inner;

        &.selected {
            background-color: var(--color-background-dropdown-item-active);
            color: var(--color-text-dropdown-item-active);

            +.selected {
                &::before {
                    content: '';
                    width: 100%;
                    height: 0.2rem;
                    position: absolute;
                    top: -0.2rem;
                    left: 0;
                    background-color: var(--color-background-dropdown-item-active);
                }
            }
        }

        &.no-event {
            pointer-events: none;
            cursor: default;
        }

        &:hover,
        &:has([data-index]:focus) {
            background-color: var(--color-background-dropdown-item-hover);
            color: var(--color-text-dropdown-item-hover);

            &.selected {
                background-color: var(--color-background-dropdown-item-active);
                filter: brightness(1.15);
            }
        }

        input[data-index]:focus::after {
            content: 'focused correctly';
            position: absolute;
            overflow: visible;
            clip: unset;
            height: unset;
            width: unset;
            margin: 0;
            padding: 0;
            border: 0;
            inset: 0;
        }

        &.link-container {
            @extend .h6;
            margin: 0;
            padding-top: 0.2rem;
            font-size: 1.5rem;
            --font-weight: 600;
            background-color: var(--color-background-dropdown-link-container);
            cursor: default;
            pointer-events: none;

            &:empty {
                display: none;
            }

            a {
                pointer-events: all;
                padding: 0.3rem 2rem 0 0;
                display: block;
                width: 100%;
            }
        }

        &:last-of-type {
            border-radius: 0 0 $ruler-border-radius-inner $ruler-border-radius-inner;

            &:has(~.link-container) {
                border-radius: 0;
            }
        }

        &:not(.placeholder) ~ .message-empty {
            display: none;
        }

        &.message-empty {
            font-size: 1.6rem;
        }


        input[type="checkbox"], input[type="radio"], input[data-index] {
            @include visually-hidden();
        }

        label:not(.clickable) {
            pointer-events: none;
        }
    }
}
</style>

<template>
    <span ref="placeholder">
        <slot name="placeholder">
            {{ $t(`${placeholder}`) }}
        </slot>
    </span>
    <div class="dropdown-input"
         :name="dropdownName"
         :required="required"
         :id="dropdownName"
         :class="[
             isOpen ? 'selected' : '',
             options.disabled ? 'disabled' : ''
         ]"
         ref="dropdown-input"
         @click="openDropdownClick"
         data-list-avoid>
        <input type="text"
               ref="dropdown-initial-input"
               class="dropdown-initial-input"
               :tabindex="options.disabled ? -1 : 0"
               @keydown="dropdownInitialInputKeydown">
        <div class="selection"
             :class="[options.selectMultiple ? 'multiple-selection' : '',
                isOpen ? 'selected' : ''
             ]"
             ref="current-selection">
        </div>
        <div v-if="options.selectMultiple"
             class="badge-container"
             :class="isOpen ? 'opened' : ''">
            <badge-input :ref="'badge-input'"
                         :interactable="false"
                         :badge-color="'var(--color-background-dropdown-item-active)'"/>
        </div>
        <label v-show="showInitialPlaceholder && placeholder !== '' && selection.length === 0"
               class="placeholder">
        </label>
        <font-awesome-icon class="handle"
                           :class="isOpen ? 'opened' : ''"
                           @click="closeDropdownClick(true)"
                           :icon="['fas', 'triangle']"/>
    </div>
    <dialog class="dropdown"
            v-show="!options.disabled"
            :name="dropdownName"
            ref="dropdown"
            @click="openDropdownClick"
            data-list>
        <template v-if="showOptionPlaceholder && placeholder !== '' && !options.selectMultiple">
            <label v-if="options.canUnset"
                   value="no-value"
                   class="dropdown-option placeholder">
            </label>
            <label v-else
                   value="no-value"
                   class="dropdown-option no-event placeholder">
            </label>
        </template>
        <slot></slot>
        <template v-if="!listItemExist()">
            <div class="no-event message-empty">
                <slot name="messageEmpty"></slot>
            </div>
        </template>
        <slot name="add-new-extended"></slot>
        <label v-if="options.allowAddNew" value="add-new" class="dropdown-option add-new"
               @click="openDropdownClick">
            <input type="text" id="add-new" name="add-new" class="ignore" placeholder="add new"
                   @keydown="addNewKeydown">
        </label>
    </dialog>
</template>

<script lang="ts">
import { isEmpty } from '@loufa/loufairy';
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import BadgeInput from '@pictaccio/admin-gui/views/components/widgets/BadgeInput.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getCoords } from '@pictaccio/admin-gui/utils/get_coords';

const CLOSING_TIMEOUT = 300;

/**
 * Construct a dropdown based on the content of <slot>
 * Dropdown must be build like following:
 * <dropdown @param dropdownName="{name attr of the <select> we're replacing}" @param selectMultiple="{optional}">
 *  <label value="{value attr of the <option> we're replacing}" ...>
 *      ...{html}
 *  </label>
 *  ...
 * </dropdown>
 * @param currentSelection HTMLElement as string to display the selected option
 * @param dropdown HTMLElement containing the options
 *
 * One can overwrite the style of the options with scss in the same component as the <dropdown>
 * One can overwrite the style of the selected options with scss in the same component as the <dropdown> with .selected
 * and !important
 */
@Component({
    name: 'Dropdown',
    components: {
        BadgeInput,
        Badge,
        FontAwesomeIcon
    },
    emits: [
        'change',
        'closed',
        'item-added',
        'opened'
    ],
    expose: [
        'getSelection',
        'openDropdown',
        'setDisabled',
        'setSelection'
    ]
})
export default class Dropdown extends Vue {
    @Prop
    private allowAddNew!: boolean;
    @Prop
    private canUnset!: boolean;
    @Prop
    private currentSelection!: string[];
    @Prop
    private disabled: boolean;
    @Prop
    private dropdownName!: string;
    @Prop
    private emitOnMounted!: boolean;
    @Prop
    private parentElement: Element | null | 'undefined';
    @Prop
    private placeholder!: string;
    @Prop
    private position: string;
    @Prop
    private required: boolean;
    @Prop
    private selectMultiple!: boolean;

    private showInitialPlaceholder = false;
    private showOptionPlaceholder = false;
    private isOpen = false;
    private isOpening = false;
    private closing = false;
    private accessibilityNavigation = false;
    private selection: string | string[] = '';

    private options = {
        allowAddNew: false,
        canUnset: false,
        currentSelection: [],
        disabled: false,
        emitOnMounted: false,
        parentElement: null,
        placeholder: '',
        position: 'fixed',
        selectMultiple: false
    }

    private dropdown: HTMLDialogElement;

    public get isRequired(): boolean {
        return this.required;
    }

    public getSelection(): string | string[] {
        if (!this.$refs['current-selection'] ||
            (this.$refs['current-selection'] && (this.$refs['current-selection'] as HTMLElement)
                .innerHTML.trim().length === 0)) {
            this.selection = [];

            return this.selection;
        }

        const currentSelection = Array.from((this.$refs['current-selection'] as HTMLElement).children)
            .map(option => option.attributes['value']?.value)
            .filter(value => !['no-value', undefined].includes(value));
        if (currentSelection.length === 0) {
            (this.$refs['current-selection']as HTMLElement).innerHTML = '';
            this.selection = [];

            return this.selection;
        }

        this.selection = this.selectMultiple ? currentSelection : currentSelection[0];
        return this.selection;
    }

    public openDropdown(): void {
        this.isOpening = true;
        this.openDropdownClick();
    }

    public setDisabled(disabled: boolean): void {
        this.options.disabled = disabled;
    }

    public setSelection(newSelection: string[], emit = true): void {
        if (!newSelection) {
            return;
        }

        this.dropdown.querySelectorAll('input[data-option][checked]').forEach(element => {
            element.removeAttribute('checked');
            element.parentElement.classList.remove('selected');
        });

        this.options.currentSelection = newSelection;
        this.fillCurrentSelection();

        if (emit) {
            this.emitChange();
        }
    }

    /* LIFECYCLE */
    public created(): void {
        this.options = Object.assign({}, this.options, Object.fromEntries(Object.entries({
            allowAddNew: this.allowAddNew,
            canUnset: this.canUnset,
            currentSelection: this.currentSelection,
            disabled: this.disabled,
            emitOnMounted: this.emitOnMounted,
            placeholder: this.placeholder,
            position: this.position,
            selectMultiple: this.selectMultiple
        }).filter(([p, v]) => v !== undefined && v !== null)));

        this.options.parentElement = this.parentElement ?? null;

        if (this.options.placeholder !== '' && (this.options.currentSelection.length === 0 || this.options.canUnset)) {
            this.showInitialPlaceholder = true;
        }
        if (this.options.placeholder !== '' && !this.options.selectMultiple && this.options.canUnset) {
            this.showOptionPlaceholder = true;
        }
    }

    /**
     * Get the HTMLElement containing the options
     * If the dropdown is single select then add the first element as default selection
     * For each option, create an input inside based on which type of selection we need
     */
    public mounted(): void {
        this.dropdown = this.$refs['dropdown'] as HTMLDialogElement;
        this.dropdown['__loufairyBridge__'] = this;

        if (this.$refs['placeholder']) {
            (this.$refs['dropdown-input'] as HTMLElement).querySelectorAll('.placeholder').forEach(element => {
                element.appendChild((this.$refs['placeholder'] as HTMLElement).cloneNode(true));
            });
            this.dropdown.querySelectorAll('.placeholder').forEach(element => {
                element.appendChild((this.$refs['placeholder'] as HTMLElement).cloneNode(true));
            });
        }

        (this.$refs['placeholder'] as HTMLElement).remove();

        let index = 0;

        for (const option of this.dropdown.children) {
            if (option.classList.contains('link-container')) {
                option.classList.add('dropdown-option');
                continue;
            }

            if (option.getAttribute('value') === 'add-new') {
                option.removeAttribute('value');
                continue;
            }

            if (!option.getAttribute('data-value')) {
                option.setAttribute('data-value', option.getAttribute('value'));
            }

            option.classList.add('dropdown-option');
            option.setAttribute('id', 'option-' + option.getAttribute('value'));

            const input = document.createElement('input');
            const inputAccessibility = document.createElement('input');

            if (this.options.selectMultiple) {
                input.setAttribute('type', 'checkbox');
                input.setAttribute('id', option.getAttribute('value'));
                input.setAttribute('name', option.getAttribute('data-value'));
            } else {
                input.setAttribute('type', 'radio');
                input.setAttribute('name', this.dropdownName);
                input.setAttribute('id', option.getAttribute('value'));
                input.setAttribute('value', option.getAttribute('value'));
            }
            input.setAttribute('data-option', '');

            inputAccessibility.setAttribute('type', 'text');
            inputAccessibility.setAttribute('data-index', index.toString());
            index++;

            if ((Array.isArray(this.options.currentSelection) &&
                    this.options.currentSelection.includes(option.getAttribute('value'))) ||
                (!Array.isArray(this.options.currentSelection) &&
                    `${this.options.currentSelection}` === option.getAttribute('value'))) {
                option.classList.add('selected');
                input.setAttribute('checked', 'true');
            }

            inputAccessibility.addEventListener('keydown',
                (event: KeyboardEvent) => this.dropdownOpenedInputKeydown(event));
            input.addEventListener('click', (event) => this.optionChange(event));

            option.appendChild(input);
            option.appendChild(inputAccessibility);
        }

        if (this.options.currentSelection.length > 0) {
            this.$nextTick(() => this.fillCurrentSelection());
        } else if (!this.options.canUnset && !this.showInitialPlaceholder) {
            this.$nextTick(() => {
                const firstOption = this.dropdown.children[0];

                if (!firstOption) {
                    return;
                }

                firstOption.classList.add('selected');
                const input = firstOption.querySelector('input[data-option]');

                if (!input) {
                    throw new Error(`No input found in ${this.dropdownName} in option`);
                }
                input.setAttribute('checked', 'true');
                this.fillCurrentSelection();
            });
        } else {
            this.fillCurrentSelection();
        }

        if (this.options.emitOnMounted) {
            this.$nextTick(() => this.emitChange());
        }

        if (this.required) {
            this.$nextTick(() => this.emitReady());
        }
    }

    public updated(): void {
        this.updateNewElement()
    }

    /* EVENT HANDLERS */
    private addNewKeydown(event: KeyboardEvent): void {
        if (event.code === 'Enter') {
            const target = (event.target as HTMLInputElement);
            const value = target.value;
            this.$emit('item-added', value);
            target.setAttribute('value', '');
        }
    }

    private dropdownInitialInputKeydown(event: KeyboardEvent): void {
        if (this.options.disabled) {
            return;
        }

        if (event.code === 'ArrowDown' ||
            event.code === 'ArrowUp' ||
            event.code === 'Enter' ||
            event.code === 'Space') {
            this.accessibilityNavigation = true;
            this.openDropdownClick();
        }
    }

    private dropdownOpenedInputKeydown(event: KeyboardEvent): void {
        let nextIndex: string;
        let nextOption: Element;
        event.preventDefault();

        this.accessibilityNavigation = true;

        switch (event.code) {
        case 'ArrowDown':
            nextIndex = (parseInt((event.target as HTMLInputElement)
                .getAttribute('data-index')) + 1).toString();
            nextOption = this.dropdown.querySelector(`[data-index="${nextIndex}"]`);

            if (nextOption) {
                (nextOption as HTMLInputElement).focus();
            }
            break;
        case 'ArrowUp':
            nextIndex = (parseInt((event.target as HTMLInputElement)
                .getAttribute('data-index')) - 1).toString();
            nextOption = this.dropdown.querySelector(`[data-index="${nextIndex}"]`);

            if (nextOption) {
                (nextOption as HTMLInputElement).focus();
            }
            break;
        case 'Enter':
            this.accessibilityNavigation = false;
            this.optionChange(event);
            break;
        case 'Space':
            this.accessibilityNavigation = false;
            this.optionChange(event);
            break;
        case 'Tab':
            this.accessibilityNavigation = false;
            this.closeDropdownClick();
            break;
        case 'Escape':
            this.accessibilityNavigation = false;
            this.closeDropdownClick();
            break;
        }
    }

    /**
     * Make the option list wrap and unwrap on click
     */
    private openDropdownClick(): void {
        if (this.closing || this.options.disabled) {
            return;
        }

        this.isOpen = true;
        this.dropdown.show();

        if (this.accessibilityNavigation) {
            ((this.dropdown as HTMLElement)
                .querySelector('input[data-index]') as HTMLInputElement)?.focus();
        } else {
            (this.$refs['dropdown-initial-input'] as HTMLInputElement).focus();
        }

        this.setDropdownPosition();
        document.body.addEventListener('click', () => {
            this.closeDropdownClick();
        }, {
            capture: true,
            once: true
        });
    }

    private closeDropdownClick(force = false): void {
        if (this.isOpening) {
            this.isOpening = false;
            return;
        }
        if (this.accessibilityNavigation) {
            document.body.addEventListener('click', () => {
                this.closeDropdownClick();
            }, {
                capture: true,
                once: true
            });
            this.accessibilityNavigation = false;
            return;
        }
        if (!this.options.selectMultiple || force) {
            this.closing = true;
        }
        this.isOpen = false;
        this.dropdown.close();
        setTimeout(() => this.closing = false, CLOSING_TIMEOUT);
    }

    /**
     * Replace currentSelection to display all selected option
     */
    private optionChange(event: any): void {
        if (event.code && event.code !== 'Enter' && event.code !== 'Space') {
            return;
        }
        (this.$refs['current-selection'] as HTMLElement).innerHTML = '';
        if ((this.$refs['current-selection'] as HTMLElement).firstChild) {
            (this.$refs['current-selection'] as HTMLElement)
                ?.removeChild((this.$refs['current-selection'] as HTMLElement).firstChild);
        }

        if (!this.options.selectMultiple) {
            this.dropdown.querySelectorAll('.selected').forEach(element => element.classList.remove('selected'));

            const selectedOption = event.target.parentNode.cloneNode(true);
            event.target.parentNode.classList.add('selected');

            (this.$refs['current-selection'] as HTMLElement).appendChild(selectedOption);

            this.emitChange();

            this.showInitialPlaceholder = isEmpty(this.getSelection()) && this.options.placeholder !== '';

            if (!this.options.canUnset) {
                this.showOptionPlaceholder = false;
            }

            this.isOpen = false;
            this.dropdown.close();
        } else {
            this.openDropdownClick();

            const selection: HTMLElement[] = [];

            const selectedOption = event.target.parentNode;
            selectedOption.classList.toggle('selected');
            selectedOption.querySelector('input[data-option]').toggleAttribute('checked');

            const optionSelection = Array.from(this.dropdown.querySelectorAll('input[data-option][checked]'));

            for (const selected of optionSelection) {
                (this.$refs['current-selection'] as HTMLElement).appendChild(selected.parentElement.cloneNode(true));
                selection.push(selected.parentElement as HTMLElement);
            }

            this.emitChange();

            (this.$refs['badge-input'] as BadgeInput)
                .setSelection(selection.map(i => i.getAttribute('data-display-value') ?? i.textContent.trim()));
            event.target.focus();

            this.showInitialPlaceholder = isEmpty(this.getSelection()) && this.options.placeholder !== '';
            this.showOptionPlaceholder = false;
        }
    }

    /* PRIVATE */
    private emitChange(): void {
        this.$emit('change', {
            selection: this.getSelection(),
            target: this
        });
    }

    private emitReady(parent = this.$parent): void {
        if (typeof parent['reviewInputs'] !== 'function') {
            this.emitReady(parent.$parent);
        } else {
            parent['reviewInputs'](this)
        }
    }

    private fillCurrentSelection(): void {
        const selection: Node[] = [];
        this.options.currentSelection = Array.isArray(this.options.currentSelection)
            ? this.options.currentSelection.filter(value => value)
            : this.options.currentSelection;

        for (const child of Array.from((this.$refs['current-selection'] as HTMLElement).children).reverse()) {
            (this.$refs['current-selection'] as HTMLElement).removeChild(child);
        }

        if (this.options.currentSelection.length > 0) {
            if (!this.options.selectMultiple) {
                const item = this.dropdown.querySelector(`[value='${this.options.currentSelection[0]}']`);

                if (!item) {
                    return;
                }

                const input = item.querySelector('input[data-option]');

                if (!input) {
                    throw new Error(`No input found in ${this.dropdownName} in option`);
                }
                input.setAttribute('checked', 'true');
                selection.push(item);
            } else {
                for (const selected of this.options.currentSelection) {
                    const item = this.dropdown.querySelector(`[value='${selected}']`);

                    if (!item) {
                        continue;
                    }
                    const input = item.querySelector('input[data-option]');

                    if (!input) {
                        throw new Error(`No input found in ${this.dropdownName} in option`);
                    }
                    input.setAttribute('checked', 'true');
                    selection.push(this.dropdown.querySelector(`[value='${selected}']`));
                }
            }
        } else if (this.options.placeholder !== '') {
            // pass
        } else if (this.dropdown.children[0]) {
            const item = this.dropdown.children[0];

            if (!item) {
                return;
            }
            const input = item.querySelector('input[data-option]');

            if (!input) {
                throw new Error(`No input found in ${this.dropdownName} in option`);
            }
            input.setAttribute('checked', 'true');
            selection.push(this.dropdown.children[0]);
        }

        if (this.options.selectMultiple) {
            (this.$refs['badge-input'] as BadgeInput)
                .setSelection(selection.map(i => i.textContent.trim()));
        }

        for (const selected of selection) {
            (this.$refs['current-selection'] as HTMLElement).appendChild(selected.cloneNode(true));
        }

        this.showInitialPlaceholder = isEmpty(this.getSelection()) && this.options.placeholder !== '';
    }

    private listItemExist(): boolean {
        return this.$slots['default'].length > 0;
    }

    private setDropdownPosition() {
        const width = (this.$refs['dropdown-input'] as HTMLElement).offsetWidth;
        const coords = getCoords((this.$refs['dropdown-input'] as HTMLElement),
            'bottom left', this.options.parentElement === 'undefined' ? undefined : this.options.parentElement);

        this.dropdown.style.width = width + 'px';
        this.dropdown.style.top = coords.y + 'px';
        this.dropdown.style.left = coords.x + 'px';
    }

    private updateNewElement(): void {
        const newElements = this.dropdown.querySelectorAll(':scope > label:not(.dropdown-option)');

        for (const element of newElements) {
            element.classList.add('dropdown-option');
            element.setAttribute('id', 'option-' + element.getAttribute('value'));

            const input = document.createElement('input');

            if (this.options.selectMultiple) {
                input.setAttribute('type', 'checkbox');
                input.setAttribute('id', element.getAttribute('value'));
                input.setAttribute('name', element.getAttribute('value'));
            } else {
                input.setAttribute('type', 'radio');
                input.setAttribute('name', this.dropdownName);
                input.setAttribute('id', element.getAttribute('value'));
                input.setAttribute('value', element.getAttribute('value'));
            }

            element.appendChild(input);

            if (!this.options.selectMultiple) {
                (this.$refs['current-selection'] as HTMLElement).appendChild(element);
            }
        }
    }
}
</script>
