<style lang="scss" scoped>
:deep(.required-marker) {
    color: var(--color-semantic-error);
}

.form-validator {
    display: contents;
    padding-top: 1rem;

    &:not(.valid) {
        :deep(input:required) {
            border-color: var(--color-semantic-error);
            &:not(:invalid) {
                border-color: var(--color-semantic-success);
            }
        }

        :deep(.dropdown-input[required]:not([required="false"])) {
            border-width: 2px;
            border-color: var(--color-semantic-success);

            &:has(.selection:empty) {
                border-color: var(--color-semantic-error);
            }
        }
    }
}

.star {
    font-size: 0.5em;
    transform: translateY(-3px);
}

</style>

<template>
    <form ref="form"
          novalidate
          class="form-validator valid"
          prevent-submit="true">
        <slot></slot>
    </form>
    <font-awesome-icon ref="required-star" class="star" :icon="['fas', 'asterisk']" style="display: none;"/>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createValidator, getFormInputValues } from '@loufa/loufairy-client';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'FormValidator',
    components: {
        FontAwesomeIcon
    },
    emits: [
    ],
    expose: [
        'getFormValues',
        'reviewInputs',
        'validate'
    ]
})
export default class FormValidator extends Vue {
    private requiredFieldsIndex: string[] = [];

    public getFormValues(): any {
        return getFormInputValues(this.$refs['form'] as HTMLElement);
    }

    public reviewInputs(inputComponent: any): void {
        this.initializeValidation();
    }

    public validate(): boolean {
        const validator = createValidator(this.$refs['form'] as Element);
        const valid = validator.validate();

        (this.$refs['form'] as HTMLElement).classList.toggle('valid', valid);

        return valid;
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.initializeValidation();
    }

    /* PRIVATE */
    private initializeValidation(): void {
        const form: HTMLFormElement = this.$refs['form'] as HTMLFormElement;
        const requiredFields: string[] = [];

        if (!form || form.tagName !== 'FORM') {
            throw new Error('Invalid use of FormValidator');
        }

        for (const field of form.querySelectorAll('[required]:not([required="false"])')) {
            this.showStar(this.findLinkedLabel(form, field));
            requiredFields.push(field.getAttribute('name'));
        }

        this.requiredFieldsIndex = requiredFields;
    }

    private findLinkedLabel(form: HTMLFormElement, field: Element): HTMLLabelElement {
        const fieldId = field.id;
        let linkedLabel = form.querySelector(`label[for="${fieldId}"]`) as HTMLLabelElement;

        if (!linkedLabel) {
            linkedLabel = field.closest('label');

            if (!linkedLabel || !form.contains(linkedLabel)) {
                throw new Error('Field has no label');
            }
        }

        return linkedLabel;
    }

    private showStar(label: HTMLLabelElement): void {
        const star = (this.$refs['required-star'] as typeof FontAwesomeIcon).$el.cloneNode(true) as HTMLElement;

        if (label.querySelector('.star')) {
            return
        }
        star.removeAttribute('style')
        label.append(star);
    }
}
</script>
