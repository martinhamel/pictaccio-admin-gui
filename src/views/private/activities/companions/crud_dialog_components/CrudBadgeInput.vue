<style></style>

<template>
    <badge-input v-if="visible"
                 :badge-name="prop"
                 :id="fieldName"
                 :saved-badges="getValue()"
                 :badge-input-placeholder="getPlaceholder()"
                 @changed="validateChanges">
    </badge-input>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import BadgeInput from '@pictaccio/admin-gui/views/components/widgets/BadgeInput.vue';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Crud Dropdown',
    components: {
        BadgeInput,
        FontAwesomeIcon,
        Dropdown
    }
})
export default class CrudDropdown<Tmodel, Tvalue, ToptionId, ToptionValue>
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
        if (event.selection === this.dataSource?.getValue()) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop as string });
        } else {
            this.valueOverride = event.selection;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });
        }
    }

    /* PRIVATE */
    private getPlaceholder(): string {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return null;
            }
            const placeholder = options.filter(i => i.id === 'placeholder')
                .map(i => i.value)[0];

            if (typeof placeholder !== 'string') {
                return null;
            }

            return placeholder;
        } catch {
            return null;
        }
    }

    private getRequired(): boolean {
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
    }

    private getValue(): string[] {
        return this.valueOverride === null
            ? this.dataSource?.getValue() as string[]
            : this.valueOverride;
    }
}
</script>
