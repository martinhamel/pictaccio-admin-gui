<style></style>

<template>
    <list-selector v-if="visible"
                   :listName="prop"
                   :currentSelection="getValue()"
                   @change="validateChanges">
        <label v-for="option in dataSource?.getOptions()"
               :key="option"
               :value="option.id"
               :data-value="option.value">
            {{ option.value }}
        </label>
        <template #add-item>
            <slot :name="prop"></slot>
        </template>
    </list-selector>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import ListSelector from '@pictaccio/admin-gui/views/components/widgets/ListSelector.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Crud List',
    components: {
        ListSelector,
        FontAwesomeIcon
    }
})
export default class CrudList<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: string[] = null;

    public update(state: UpdateState<Tmodel>): void {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        this.$nextTick(() => {
            this.visible = true;
        });
    }

    /* EVENT HANDLER */
    private async validateChanges(event): Promise<void> {
        if (!this.dataSource?.getValue()) {
            return;
        }
        if (event.selection === this.dataSource?.getValue()) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride = event.selection;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }
    }

    /* PRIVATE */
    private getValue(): string[] {
        return this.valueOverride === null
            ? this.dataSource?.getValue() as string[]
            : this.valueOverride;
    }
}
</script>
