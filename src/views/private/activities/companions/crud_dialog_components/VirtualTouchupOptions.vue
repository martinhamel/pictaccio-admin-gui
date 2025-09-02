<style>
.virtual-touchup-option {
    padding-top: 1rem !important;
}
</style>

<template>
    <div class="virtual-touchup-option">
        <virtual-touchup-option ref="touchup-option"/>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CURRENCY } from '@pictaccio/admin-gui/src/core/currency';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import { Currency } from '@pictaccio/admin-gui/src/utils/constraint_behaviors/currency';
import { GenericConstraint } from '@pictaccio/admin-gui/src/utils/generic_constraint';
import UnitDecorator from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecorator.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import VirtualTouchupOption
    from '@pictaccio/admin-gui/src/views/private/activities/create_session/widgets/VirtualTouchupOption.vue';
import { types } from 'sass';
import { Component, Prop } from 'vue-facing-decorator';
import Boolean = types.Boolean;

@Component({
    name: 'VirtualTouchupOptions',
    components: {
        VirtualTouchupOption,
        FontAwesomeIcon
    }
})
export default class VirtualTouchupOptions<Tmodel, Tvalue, ToptionId, ToptionValue>
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
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.focused = parseInt(state.itemHeader.order, 10);
        this.$nextTick(() => {
            this.setValues();
        });
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
    private getValue(): void {
        this.dataSource?.getValue()
    }

    private setValues(): void {
        const option = this.dataSource?.getOptions();

        if (!option) {
            return null;
        }

        const touchupOption = this.$refs['touchup-option'] as VirtualTouchupOption;
        const enableTouchups = option.filter(i => i.id === 'enableTouchups')
            .map(i => i.value)[0];
        const touchupsPrice = option.filter(i => i.id === 'touchupsPrice')
            .map(i => i.value)[0];


        touchupOption.setEnableTouchups(enableTouchups as boolean ?? false);
        touchupOption.setTouchupsPrice(touchupsPrice as number[] ?? []);
    }
}
</script>
