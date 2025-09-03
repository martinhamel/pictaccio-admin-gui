<style>
.hidden {
    display: none;
    position: absolute;
}
</style>

<template>
    <unit-decorator-wrapper v-if="visible" :unit="getUnit()">
        <input ref="generic-input"
               type="text"
               inputMode="numeric"
               pattern="[\d.]*"
               :id="fieldName"
               :name="prop"
               :autofocus="focused === 1"
               :required="getRequired()"
               :value="getValue()"
               :data-events="getAddEventListeners()"
               @keyup="validateChanges"
               @change="validateChanges"
               placeholder="0"/>
    </unit-decorator-wrapper>
    <i v-if="visible" class="hidden"></i>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CURRENCY } from '@pictaccio/admin-gui/core/currency';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import { Currency } from '@pictaccio/admin-gui/utils/constraint_behaviors/currency';
import { GenericConstraint } from '@pictaccio/admin-gui/utils/generic_constraint';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import UnitDecoratorWrapper from '@pictaccio/admin-gui/views/components/widgets/UnitDecoratorWrapper.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Number decimal',
    components: {
        UnitDecoratorWrapper,
        UnitDecorator,
        FontAwesomeIcon
    }
})
export default class NumberDecimal<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private focused: number;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: string = null;

    public update(state: UpdateState<Tmodel>): void {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.focused = parseInt(state.itemHeader.order, 10);
        this.$nextTick(() => {
            this.visible = true;
        });

        if (CURRENCY.includes(this.getUnit())) {
            const input = this.$refs['generic-input'] as HTMLInputElement;
            input.type = 'text';
            GenericConstraint.create(input,
                null, null, [Currency]);
        }
    }

    /* EVENT HANDLER */
    private async validateChanges(event): Promise<void> {
        if (event.target.value === this.dataSource?.getValue()) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride = event.target.value;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }
    }

    /* PRIVATE */
    private getAddEventListeners(): boolean {
        try {
            const options = this.dataSource?.getOptions();

            if (!options) {
                return false;
            }

            const eventsListener = options.filter(i => i.id === 'eventListeners')
                .map(i => i.value)[0];

            if (typeof eventsListener !== 'object' || !eventsListener || Object.keys(eventsListener).length === 0) {
                return false;
            }

            this.$nextTick(() => {
                for (const event of Object.entries(eventsListener)) {
                    (this.$refs['generic-input'] as HTMLInputElement).addEventListener(event[0], event[1]);
                }
            });

            return true;
        } catch (e) {
            return false;
        }
    }

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

    private getValue(): string {
        return this.valueOverride === null
            ? this.dataSource?.getValue() as string
            : this.valueOverride;
    }

    private getUnit(): string {
        try {
            const option = this.dataSource?.getOptions();
            if (!option) {
                return null;
            }
            const unit = option.filter(i => i.id === 'unit')
                .map(i => i.value)[0];

            if (typeof unit !== 'string') {
                return null;
            }

            return unit;
        } catch {
            return null;
        }
    }
}
</script>
