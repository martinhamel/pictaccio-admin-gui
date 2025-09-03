<style></style>

<template>
    <span class="unit-input-container">
        <input type="text"
               :id="fieldName"
               name="amount"
               :required="getRequired()"
               :value="getAmount()"
               @keyup="validateChanges">
        <unit-decorator v-if="getUnit()" :unit="getUnit()"/>
    </span>
<!--    <dropdown v-if="dataSource?.isVisible(crudStatus)" :dropdownName="'category_id'"-->
<!--              :allowAddNew="true" :item-added="">-->
<!--        <label v-for="option in dataSource?.getOptions()" :key="option" :value="option">-->
<!--            <span>{{ option }}</span>-->
<!--        </label>-->
<!--    </dropdown>-->
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Id',
    components: {
        UnitDecorator,
        FontAwesomeIcon,
        Dropdown
    }
})
export default class CampaignOptions<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;

    public update(state: UpdateState<Tmodel>): void {
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.$forceUpdate();
    }

    /* EVENT HANDLER */
    private async validateChanges(event): Promise<void> {
        if (event.target.value === this.getAmount()) {
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
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

    private getAmount(): string {
        return this.dataSource?.getValue()['amount'].toString();
    }

    private getCategoryId(): string {
        return this.dataSource?.getValue()['category_id'].toString();
    }

    private getUnit(): string {
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
    }
}
</script>
