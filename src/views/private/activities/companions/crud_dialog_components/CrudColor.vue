<style lang="scss" scoped>
.color-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>

<template>
    <div v-if="visible" class="color-selector">
        <color-selector ref="color-selector" :colors="getValue()"/>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import { SessionColor } from '@pictaccio/admin-gui/src/models/session_color';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import ColorSelector from '@pictaccio/admin-gui/src/views/private/activities/create_session/widgets/ColorSelector.vue';
import { get } from 'fetch-mock';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Crud Color',
    components: {
        ColorSelector,
        FontAwesomeIcon
    }
})
export default class CrudColor<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private focused: number;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: SessionColor = null;

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

    /* EVENT HANDLERS */
    private async validateChanges(event): Promise<void> {
        if (event.target.value === this.dataSource?.getValue()[event.target.name]) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride = event.target.value;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }
    }

    /* PRIVATE */
    private getValue(): SessionColor {
        return this.valueOverride === null
            ? this.dataSource?.getValue() as unknown as SessionColor
            : this.valueOverride;
    }
}
</script>
