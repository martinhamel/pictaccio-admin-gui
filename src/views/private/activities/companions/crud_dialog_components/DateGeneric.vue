<style></style>

<template>
    <input v-if="visible"
           type="date"
           :id="fieldName"
           :name="prop"
           :autofocus="focused === 1"
           :required="getRequired()"
           :value="getValue()"
           @keyup="validateChanges"
           @change="validateChanges">
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { DateTime } from 'luxon';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Date Generic',
    components: {
        FontAwesomeIcon
    }
})
export default class DateGeneric<Tmodel, Tvalue, ToptionId, ToptionValue>
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
            ? DateTime.fromISO(this.dataSource?.getValue().toString()).toISODate()
            : this.valueOverride;
    }
}
</script>
