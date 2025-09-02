<style>
.separator {
    grid-column: 1 / -1;
}

.hr {

}

.label {

}
</style>

<template>
    <div class="separator">
        <hr class="hr">
        <label v-if="getValue()" class="label">{{ getValue() }}</label>
    </div>
</template>

<script lang="ts">
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Separator Decorator',
    components: {
    }
})
export default class SeparatorDecorator<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;

    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;

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

    /* PRIVATE */
    private getValue(): string {
        return this.dataSource?.getValue().toString();
    }
}
</script>
