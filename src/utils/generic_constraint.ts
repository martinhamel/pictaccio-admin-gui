import { ConstraintBehavior } from '@pictaccio/admin-gui/src/utils/constraint_behaviors/constraint_behavior';
import {
    isKeycodeAlpha,
    isKeycodeAlphaNumeric,
    isKeycodeDigit,
    isKeycodeNumeric
} from '@pictaccio/admin-gui/src/utils/keycode_string_detection';
import { mergeObjects } from '@loufa/loufairy';
import { Event } from '@pictaccio/admin-gui/src/utils/event';

const PREDEFINED_CONSTRAINT = {
    alpha: 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ',
    alphanumeric: 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789.-',
    alphanumericEx: 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789.-, ',
    digits: '0123456789',
    numeric: '0123456789.-',
    numericEx: '0123456789.-, '
};

const PREDEFINED_FORMAT_MASKS = {
    'cc-unknown': 'DDDD DDDD DDDD DDDD',
    'cc-mastercard': 'DDDD DDDD DDDD DDDD',
    'cc-visa': 'DDDD DDDD DDDD DDDD',
    'cc-visa-electron': 'DDDD DDDD DDDD DDDD',
    'cc-discover': 'DDDD DDDD DDDD DDDD',
    'cc-jcb': 'DDDD DDDD DDDD DDDD',
    'cc-amex': 'DDDD DDDDDD DDDDD',
    'cc-diners': 'DDDD DDDD DDDD DD',
    'cc-diners-carteblanche': 'DDDD DDDD DDDD DD',
    'phone-na': 'DDD DDD-DDDD'
};

const MASK_PATTERNS = {
    D: /\d/,
    A: /[a-zA-Z]/,
    X: /[a-zA-Z\-,.]/,
    N: /[\d\-,.]/
};

const MASK_CALLS_TABLE = {
    D: isKeycodeDigit,
    A: isKeycodeAlpha,
    X: isKeycodeAlphaNumeric,
    N: isKeycodeNumeric
};

export class GenericConstraint extends Event {
    private applyMaskToPastedValue = false;
    private target: HTMLElement | HTMLInputElement;
    private constraint: string = PREDEFINED_CONSTRAINT['alphanumericEx'];
    private mask: string = null;
    private previousMask: string = null;
    private behaviors: ConstraintBehavior[] = [];

    public caretPosition(target: HTMLInputElement): boolean {
        if (!target) {
            throw new Error('caretPosition called while no target is defined.');
        }

        return target.selectionStart === target.value.length;
    }

    public static create(target: HTMLElement | HTMLInputElement,
        mask?: string,
        constraint?: string,
        behaviors?: typeof ConstraintBehavior[]): GenericConstraint {
        const genericConstraint = new GenericConstraint();

        genericConstraint.set(target, mask, constraint, behaviors);

        return genericConstraint;
    }

    public getMask(): string {
        return this.mask;
    }

    public getValue(): string {
        if (!this.target) {
            throw new Error('getValue called while no target is defined.');
        }

        return (this.target as HTMLInputElement).value ?? this.target.innerText;
    }

    public set(target: HTMLElement | HTMLInputElement,
        mask?: string,
        constraint?: string,
        behaviors?: typeof ConstraintBehavior[]): void {
        this.setTarget(target);

        if (mask) {
            this.setMask(mask);
        } else if (constraint) {
            this.setConstraint(constraint);
        }
        if (behaviors) {
            this.setBehaviors(behaviors);
        }
    }

    public setBehaviors(behaviors: typeof ConstraintBehavior[]): void {
        this.behaviors = [];

        for (const Behavior of behaviors) {
            const behaviorInstance = new Behavior(this);
            behaviorInstance.setTarget(this.target);
            this.behaviors.push(behaviorInstance);
        }
    }

    public setTarget(target: HTMLElement | HTMLInputElement): void {
        if (!target) {
            return;
        }
        this.target = target;
        this.addEventsOnTarget();
        if (this.target.tagName.toLowerCase() === 'label') {
            // TODO: Add support for label
        }
    }

    public setConstraint(constraint: string): void {
        if (!constraint) {
            return;
        }

        if (PREDEFINED_CONSTRAINT[constraint] !== undefined) {
            this.constraint = PREDEFINED_CONSTRAINT[constraint];
        } else {
            this.constraint = constraint;
        }
    }

    public setMask(mask: string): void {
        this.constraint = 'mask';

        this.previousMask = this.mask;

        if (PREDEFINED_FORMAT_MASKS[mask] === undefined) {
            this.mask = mask;
        } else {
            this.mask = PREDEFINED_FORMAT_MASKS[mask];
        }

        this.reflow();
    }

    public isValid(): boolean {
        if (!this.target) {
            throw new Error('isValid called while no target is defined.');
        }
        const android = navigator.userAgent.toLowerCase().includes('android');
        const value = this.target.getAttribute('value') ?? this.target.innerHTML;

        for (let i = 0, j = 0, length = this.mask.length; i <= length; ++i, ++j) {
            if (this.mask[i] !== ' ' && !MASK_PATTERNS[this.mask[i]]) {
                throw new Error(`Invalid pattern in mask: ${this.mask[i]} do not exist in MASK_PATTERNS`);
            }
            if (this.mask[i] !== ' ' && !MASK_PATTERNS[this.mask[i]].test(value[j])) {
                return false;
            }
            if (this.mask[i] === ' ' && value[j] !== ' ') {
                if (android) {
                    --j;
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    /* EVENT HANDLER */
    private keyDown(event: KeyboardEvent): void {
        const keyCode = event.code;

        if (!keyCode) {
            return;
        }

        for (const behavior of this.behaviors) {
            behavior.beforeKeyDown(event);
        }

        if (isKeycodeAlphaNumeric(keyCode) ||
            ['Delete', 'Backspace', 'Tab',
                'ArrowLeft', 'ArrowRight'].includes(keyCode)) {
            if ((event.metaKey || event.ctrlKey) && keyCode === 'KeyV') {
                // Pasting?
                setTimeout(() =>
                    this.applyMaskToPastedValue = true
                    , 0);
            } else if (['Tab', 'ArrowLeft', 'ArrowRight'].includes(keyCode)) {
                // Tabbing, moving caret with arrows?
                // Pass
            } else if (this.constraint === 'mask') {
                // Anything else
                const inputElement = event.target as HTMLInputElement;
                const rangeStart = inputElement.selectionStart
                const rangeEnd = inputElement.selectionEnd;
                const normalizedRangeStart = Math.min(rangeStart, rangeEnd);
                const normalizedRangeEnd = Math.max(rangeStart, rangeEnd);
                const hasSelection = normalizedRangeStart !== normalizedRangeEnd;
                const mask = this.mask;
                let caret = rangeStart;
                let value = inputElement.value;

                event.preventDefault();

                if (isKeycodeAlphaNumeric(keyCode)) {
                    if (MASK_CALLS_TABLE[mask[caret]] === undefined) {
                        value = this.format(value, caret, mask).str;
                        caret += 1;
                    }
                    if (MASK_CALLS_TABLE[mask[caret]] !== undefined) {
                        if (MASK_CALLS_TABLE[mask[caret]](keyCode)) {
                            value = value.slice(0, normalizedRangeStart) +
                                event.key +
                                value.slice(normalizedRangeEnd);

                            const formatResult = this.format(value, caret + 1, mask);

                            inputElement.value = formatResult.str;
                            caret += formatResult.caretHasDecoration ? 2 : 1;
                            inputElement.setSelectionRange(caret, caret);
                        }
                    }
                }

                if (keyCode === 'Backspace') {
                    const back = (hasSelection ? 0 : (this.isDecorationCharacterAt(caret - 1, mask) ? 2 : 1));
                    value = value.slice(0, normalizedRangeStart - back) + value.slice(normalizedRangeEnd);
                    caret = normalizedRangeStart - back;

                    if (this.isDecorationCharacterAt(caret - 1, mask)) {
                        value = value.slice(0, caret - 1) + value.slice(caret);
                        caret -= 1;
                    }

                    inputElement.value = this.format(value, caret, mask, { skipDecorationAtCaret: true }).str;
                    inputElement.setSelectionRange(caret, caret);
                }

                if (keyCode === 'Delete') {
                    const forward = (hasSelection ? 0 : (this.isDecorationCharacterAt(caret + 1, mask) ? 2 : 1));
                    value = value.slice(0, normalizedRangeStart) + value.slice(normalizedRangeEnd + forward);
                    caret = normalizedRangeEnd + Math.max(forward - 1, 0);

                    if (this.isDecorationCharacterAt(caret + 1, mask)) {
                        value = value.slice(0, caret) + value.slice(caret + 1);
                        if (value[caret + 1] !== undefined) {
                            caret += 1;
                        }
                    }

                    inputElement.value = this.format(value, caret, mask).str;
                    inputElement.setSelectionRange(caret, caret);
                }

                setImmediate(() => this.emitMaskKeydown(event, value));
            } else if (this.constraint !== undefined) {
                if (this.constraint.indexOf(event.key) === -1 &&
                    !['Delete', 'Backspace'].includes(keyCode)) {
                    event.preventDefault();
                }
            }
        } else {
            event.preventDefault();
        }

        for (const behavior of this.behaviors) {
            behavior.afterKeyDown(event);
        }
    }

    private keyUp(event: KeyboardEvent): void {
        for (const behavior of this.behaviors) {
            behavior.beforeKeyUp(event);
        }
        if (this.applyMaskToPastedValue) {
            this.formatAll();
        }
        for (const behavior of this.behaviors) {
            behavior.afterKeyUp(event);
        }
    }

    private input(event: KeyboardEvent): void {
        const targetNode = event.target as HTMLInputElement;
        if (targetNode['_input_constraint_input_seen'] === undefined) {
            if (targetNode.value.length > 1) {
                this.formatAll();
            }

            targetNode['_input_constraint_input_seen'] = true;
        }
    }

    /* PRIVATE */
    private addEventsOnTarget(): void {
        this.target.addEventListener('keyup', this.keyUp.bind(this) as EventListener);
        this.target.addEventListener('input', this.input.bind(this) as EventListener);
        this.target.addEventListener('keydown', this.keyDown.bind(this) as EventListener);
    }

    private emitMaskKeydown(event, newValue) {
        this.emit('masked-keydown', mergeObjects(true, event, { newValue: newValue }));
    }

    private format(str: string, caret: number, mask: string, options?: any) {
        const strLength = str.length;
        let formatted = '';
        let cursor = 0;
        let caretHasDecoration = false;

        options = options || {
            skipDecorationAtCaret: false
        };

        for (let i = 0, length = mask.length; i < length; ++i) {
            if (i > formatted.length) {
                break;
            }

            if (MASK_PATTERNS[mask[i]] !== undefined) {
                if (cursor >= strLength) {
                    break;
                }

                while (!MASK_CALLS_TABLE[mask[i]](str[cursor])) {
                    ++cursor;
                    if (cursor >= strLength) {
                        break;
                    }
                }
                if (str[cursor] !== undefined) {
                    formatted += str[cursor++];
                }
            } else {
                if (!(options.skipDecorationAtCaret === true && i === caret)) {
                    formatted += mask[i];
                }
                if (mask[i] === str[cursor]) {
                    cursor++;
                }
                if (i === caret) {
                    caretHasDecoration = true;
                }
            }
        }

        return {
            caretHasDecoration: caretHasDecoration,
            str: formatted
        };
    }

    private formatAll() {
        const constraint = this.target.getAttribute('data-constraint');

        if (constraint === 'mask') {
            const inputElement = this.target as HTMLInputElement;
            const caret = inputElement.selectionStart;
            const mask = this.target.getAttribute('data-mask');
            let value = inputElement.value;

            inputElement.value = value = this.format(value, caret, mask).str;
            inputElement.setSelectionRange(value.length, value.length);
        }
    }

    private isDecorationCharacterAt(pos, mask) {
        return MASK_CALLS_TABLE[mask[pos]] === undefined;
    }

    private reflow(): void {
        if (this.target.tagName.toLowerCase() !== 'input') {
            return;
        }

        const caretIsAtEnd = this.caretPosition(this.target as HTMLInputElement);

        let diffDecorators = 0;

        if (this.previousMask && this.mask) {
            const diffRegex = new RegExp(`[${Object.keys(MASK_PATTERNS).join('')}]`, 'g');
            const oldMask = this.previousMask.replaceAll(diffRegex, '').length;
            const newMask = this.mask.replaceAll(diffRegex, '').length;
            diffDecorators = newMask - oldMask;
        }

        const input = (this.target as HTMLInputElement);
        const caret = Math.min(
            input.selectionStart, input.selectionEnd
        );

        setImmediate(() => {
            const format = this.format(input.value, caret + 1, this.mask);
            let caretMove: number;
            if (caretIsAtEnd) {
                caretMove = input.selectionEnd;
            } else {
                caretMove = format.caretHasDecoration ? diffDecorators + 1 : diffDecorators;
            }
            input.value = format.str;
            input.setSelectionRange(caret + caretMove, caret + caretMove);
        });
    }
}
