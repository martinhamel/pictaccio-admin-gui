import { ConstraintBehavior } from '@pictaccio/admin-gui/utils/constraint_behaviors/constraint_behavior';
import { isInputElement } from '@pictaccio/admin-gui/utils/is_input_element';

export class Currency extends ConstraintBehavior {
    private oldValue: string;

    public setTarget(target: HTMLElement | HTMLInputElement) {
        super.setTarget(target);

        if (isInputElement(this.target)) {
            this.target.addEventListener('blur', this.blur.bind(this));
        }

        if (this.constraint.getValue() === '') {
            this.constraint.setConstraint('numeric');
        } else {
            this.applyMask();
        }
    }

    /* EVENT HANDLERS */
    public beforeKeyUp(event: KeyboardEvent): void {
        if (this.oldValue === this.constraint.getValue()) {
            return;
        }
        const isCaretAtEnd = this.constraint.caretPosition(this.target as HTMLInputElement);
        this.applyMask(isCaretAtEnd);
    }

    public beforeKeyDown(event: KeyboardEvent): void {
        const isCaretAtEnd = this.constraint.caretPosition(this.target as HTMLInputElement);
        const mask = this.constraint.getMask();
        if (mask && (!mask.endsWith('.NN') || !isCaretAtEnd)) {
            this.constraint.setConstraint('numeric');
        }
    }

    public blur(): void {
        if (!isInputElement(this.target)) {
            return;
        }
        this.target.value = parseFloat(this.target.value.replaceAll(' ', '')).toFixed(2);

        this.applyMask();
    }

    /* PRIVATE */
    private applyMask(isCaretAtEnd = false): void {
        const digits = this.constraint.getValue()
            .replaceAll(' ', '')
            .split('.');
        const digitCount = digits[0].length;
        const numberOfGroups = Math.floor(digitCount / 3);
        const remainder = digitCount % 3;
        let mask = 'NNN'.slice(0, remainder) + ' NNN'.repeat(numberOfGroups).substring(!remainder ? 1 : 0);

        if (digits[1] !== undefined && digits[1].length >= 0) {
            mask += '.NN';
        }

        if (mask !== '') {
            this.constraint.setMask(mask);
        }

        this.oldValue = this.constraint.getValue();
    }
}
