<style lang="scss" scoped>
fieldset {
    grid-column: 1 / -1;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr !important;
    gap: 1rem;

    #options {
        margin-top: $ruler-input-spacing-above;
    }

    .choices-count {
        margin-bottom: 0.5rem;
    }

    .option {
        grid-column: 1 / 2;
        display: flex;
        gap: 0.5rem;
        align-items: center;

        .option-label {
            width: auto;
            white-space: nowrap;
            margin: 0;
        }

        .delete-option {
            margin: 0 1rem;
            font-size: 1.6rem;
            cursor: pointer;
        }

        .spacing {
            width: 4.4rem;
        }
    }

    .example {
        --example-offset: 115px;
        --cell-size: 2.5rem;
        grid-column: -2 / -1;
        position: absolute;
        display: grid;
        grid-template-columns: min-content 1fr;
        margin-top: calc(var(--example-offset) * -1);
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: $ruler-border-radius;
        align-self: center;
        justify-self: center;
        background-color: var(--color-background-page-1);

        .example-options,
        .example-choices  {
            display: grid;
            grid-auto-rows: var(--cell-size);

            label {
                font-size: 1.6rem;
                white-space: nowrap;

                &.placeholder {
                    opacity: 0.6;
                }
            }

            .option-header {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0.2rem 0 0 0;
            }

            .option-label {
                margin: 0;
                display: flex;
                align-items: center;
                padding: 0.2rem 0 0 0;
            }

            .option-row-header {
                display: flex;
                justify-content: space-evenly;

                .choices-header {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: var(--cell-size);
                    width: var(--cell-size);

                    &:nth-child(odd) {
                        background-color: var(--color-mix-6-5-step-3);
                    }
                }
            }

            .option-row {
                display: flex;

                .choices {
                    position: relative;
                    height: var(--cell-size);
                    width: var(--cell-size);

                    &:nth-child(odd) {
                        background-color: var(--color-mix-6-5-step-3);
                    }

                    input[type="radio"] {
                        &::after {
                            border-radius: 10rem;
                            background-color: var(--color-mix-7-6-step-3);
                            cursor: default;
                            width: 0.9rem;
                            height: 0.9rem;
                            inset: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }
            }
        }
    }

    .btn {
        grid-column: 1 / 2;
        justify-self: flex-start;
    }
}
</style>

<template>
    <fieldset class="custom-product-options" v-if="visible">
        <div class="choices-count">
            <input type="number"
                   :id="fieldName"
                   ref="choices-count-input"
                   :min="min"
                   :max="max"
                   :required="getRequired()"
                   name="choices_count"
                   @change="choiceUpdate"
                   @keyup="validateChanges"
                   :autofocus="focused === 1">
        </div>
        <div class="option" v-for="(option, index) in options" :key="index">
            <label :for="`choices-${index + 1}`" class="option-label">{{ $t('generic.ui.option') }} {{index + 1}}</label>
            <input type="text"
                   :id="`choices-${index + 1}`"
                   :data-index="index"
                   class="customProduct-choices"
                   :name="`option-${index + 1}`"
                   :value="options[index]"
                   :required="getRequired()"
                   placeholder="3x 8.5&#34; X 11&#34;"
                   @keyup="optionsKeyUp">
            <font-awesome-icon v-if="index > 1"
                               class="delete-option"
                               :icon="['fas', 'trash-alt']"
                               @click="deleteOptionClick(index)"/>
            <span v-else class="spacing">&nbsp;</span>
        </div>
        <div class="example">
            <div class="example-options">
                <label class="option-header">{{ $t('dataTable.headers.choices') }}</label>
                <label v-for="(option, index) in options"
                       :key="option"
                       class="option-label"
                       :class="option !== '' ? '' : 'placeholder'">
                    {{ option !== ''
                    ? option
                    : `${$t('generic.ui.option')} ${index + 1}` }}
                </label>
            </div>
            <div class="example-choices">
                <div class="option-row-header">
                    <template v-for="choice in Number(choices)" :key="choice">
                        <div class="choices-header">#{{ choice }}</div>
                    </template>
                </div>
                <div class="option-row"
                     v-for="(option, index) in options"
                     :key="option">
                    <template v-for="choice in Number(choices)" :key="choice">
                        <span class="choices">
                            <input type="radio" :name="`custom-${choice}`" :value="index" disabled>
                        </span>
                    </template>
                </div>
            </div>
        </div>
        <button class="btn btn-secondary" @click="addOptionClick">{{ $t('generic.ui.add') }}</button>
    </fieldset>
</template>

<script lang="ts">
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';

const MIN = 1;
const MAX = 10;

@Component({
    name: 'CustomProductOptions',
    components: {
        FontAwesomeIcon
    }
})
export default class CustomProductOptions<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private focused: number;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private options = [];
    private choices: number;
    private visible = false;
    private min = MIN;
    private max = MAX;

    public async update(state: UpdateState<Tmodel>): Promise<void> {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.focused = parseInt(state.itemHeader.order, 10);
        this.choices = this.getChoiceCount();
        this.options = this.getChoices();
        await this.$nextTick(() => {
            this.visible = true;
            this.$forceUpdate();
        });
        this.setChoiceValue();
    }

    /* EVENT HANDLERS */
    private addOptionClick(): void {
        this.options.push('');
    }

    private choiceUpdate(event): void {
        const value = event.target.value;
        this.choices = value <= this.min
            ? this.min
            : value >= this.max
                ? this.max
                : value;
        this.$forceUpdate();
        this.setChoiceValue();
    }

    private deleteOptionClick(index): void {
        this.options.splice(index, 1);
    }

    private optionsKeyUp(event: KeyboardEvent): void {
        this.options[
            Number((event.target as HTMLInputElement).getAttribute('name').replace('option-', '')) - 1
        ] = (event.target as HTMLInputElement).value;
        this.validateChanges(event);
    }

    private async validateChanges(event): Promise<void> {
        const valueType = event.target.name;

        if (!this.dataSource.getValue()) {
            return;
        }

        const value = this.dataSource.getValue()[valueType];

        if (valueType === 'choices_count') {
            await this.$store.dispatch(
                `CrudOverlay/${event.target.value === value
                    ? 'removeDirty'
                    : 'makeDirty'}`,
                { element: (this.prop as string) + `-${event.target.name}` });
        } else if (valueType === 'choices') {
            await this.$store.dispatch(
                `CrudOverlay/${event.target.value === value[event.target.getAttribute('data-index')]
                    ? 'removeDirty'
                    : 'makeDirty'}`,
                { element: (this.prop as string) + `-${event.target.name}` });
        }
    }

    /* PRIVATE */
    private getRequired(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const required = options.filter(i => i.id === 'required')
                .map(i => i.value)[0];

            if (typeof required !== 'boolean') {
                return false;
            }

            this.$nextTick(() => {
                this.emitReady();
            });
            return required;
        } catch {
            return false;
        }
    }

    private getChoiceCount(): number {
        if (!this.dataSource || !this.dataSource.getValue()) {
            return 1;
        }

        return parseInt(this.dataSource.getValue()['choices_count'], 10) ?? 1;
    }

    private getChoices(): string[] {
        if (!this.dataSource.getValue()) {
            return ['', ''];
        }

        return (this.dataSource.getValue()['choices'] as string[]).length > 1
            ? this.dataSource.getValue()['choices'] as string[]
            : ['', ''];
    }

    private setChoiceValue(): void {
        (this.$refs['choices-count-input'] as HTMLInputElement).value = this.choices.toString();
    }
}
</script>
