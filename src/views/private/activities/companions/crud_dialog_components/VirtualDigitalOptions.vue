<style>
.virtual-digital-option {
    padding-top: 1rem !important;
}
</style>

<template>
    <div class="virtual-digital-option">
        <virtual-digital-option ref="digital-option"/>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import VirtualDigitalOption
    from '@pictaccio/admin-gui/views/private/activities/create_session/widgets/VirtualDigitalOption.vue';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'VirtualDigitalOptions',
    components: {
        VirtualDigitalOption,
        FontAwesomeIcon
    }
})
export default class VirtualDigitalOptions<Tmodel, Tvalue, ToptionId, ToptionValue>
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

        const digitalOption = this.$refs['digital-option'] as VirtualDigitalOption;
        const enableDigitals = option.filter(i => i.id === 'enableDigitals').map(i => i.value)[0];
        const enableGroupDigitals = option.filter(i => i.id === 'enableGroupDigitals').map(i => i.value)[0];
        const digitalPrice = option.filter(i => i.id === 'digitalPrice').map(i => i.value)[0];
        const digitalGroupPrice = option.filter(i => i.id === 'digitalGroupPrice').map(i => i.value)[0];
        const enableAutoSendDigital = option.filter(i => i.id === 'enableAutoSendDigital').map(i => i.value)[0];

        digitalOption.setEnableDigitals(enableDigitals as boolean ?? false);
        digitalOption.setEnableGroupDigitals(enableGroupDigitals as boolean ?? false);
        digitalOption.setEnableAutoSendDigitals(enableAutoSendDigital as boolean ?? false);
        digitalOption.setDigitalPrice(digitalPrice as number[] ?? []);
        digitalOption.setGroupDigitalPrice(digitalGroupPrice as number[] ?? []);
    }
}
</script>
