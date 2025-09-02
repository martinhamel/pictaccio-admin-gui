import { GenericConstraint } from '@pictaccio/admin-gui/src/utils/generic_constraint';

export class ConstraintBehavior {
    protected target: HTMLElement | HTMLInputElement;

    constructor(protected constraint: GenericConstraint) { }

    public afterKeyDown(event: KeyboardEvent): void {
        // Pass
    }

    public afterKeyUp(event: KeyboardEvent): void {
        // Pass
    }

    public beforeKeyDown(event: KeyboardEvent): void {
        // Pass
    }

    public beforeKeyUp(event: KeyboardEvent): void {
        // Pass
    }

    public setTarget(target: HTMLElement | HTMLInputElement): void {
        this.target = target;
    }
}
