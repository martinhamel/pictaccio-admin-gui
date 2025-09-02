<style></style>

<template>
    <span v-if="visible" class="input-boxes-default disabled">{{ getId() }}</span>
    <input type="hidden"
           name="id"
           :value="getId()">
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
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Id',
    components: {
        FontAwesomeIcon
    }
})
export default class Id<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private visible = false;

    public update(state: UpdateState<Tmodel>): void {
        if (state.crudStatus === 'create') {
            this.visible = false;
            return;
        }
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.visible = !!this.getId();
        this.$forceUpdate();
    }

    /* EVENT HANDLERS */
    private preventUpdate(event: KeyboardEvent): void {
        event.preventDefault()
    }

    /* PRIVATE */
    private getId(): string {
        return this.dataSource?.getValue().toString();
    }
}
</script>
