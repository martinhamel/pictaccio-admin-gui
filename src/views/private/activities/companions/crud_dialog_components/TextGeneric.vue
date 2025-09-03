<style></style>

<template>
    <unit-decorator-wrapper v-if="visible" :unit="getUnit()">
        <input ref="generic-input"
               :id="fieldName"
               type="text"
               :name="prop"
               :autofocus="focused === 1"
               :required="getRequired()"
               :value="getValue()"
               :data-events="getAddEventListeners()"
               @keyup="validateChanges"/>
    </unit-decorator-wrapper>
</template>

<script lang="ts">
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import UnitDecoratorWrapper from '@pictaccio/admin-gui/views/components/widgets/UnitDecoratorWrapper.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Text generic',
    components: {
        UnitDecoratorWrapper,
        UnitDecorator
    }
})
export default class TextGeneric<Tmodel, Tvalue, ToptionId, ToptionValue>
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

        // TODO: PSFCA-2710 GenericConstraint is broken
        // if (CURRENCY.includes(this.getUnit())) {
        //     const input = this.$refs['generic-input'] as HTMLInputElement;
        //     GenericConstraint.create(input,
        //         null, null, [Currency]);
        // }
    }

    /* EVENT HANDLER */
    private async validateChanges(event): Promise<void> {
        if (!this.dataSource?.getValue()) {
            return;
        }
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

            const eventsListener = options.find(i => i.id === 'eventListeners').value;

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
