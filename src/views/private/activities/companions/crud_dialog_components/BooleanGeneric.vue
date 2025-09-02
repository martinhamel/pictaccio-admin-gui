<style lang="scss" scoped>
.label {
    display: flex !important;
    height: $ruler-input-height;
    pointer-events: none;

    > input {
        margin: 0 !important;

        &:disabled ~ .context {
            color: var(--color-text-disabled);
        }
    }
}
.context {
    text-transform: capitalize;
    pointer-events: all;
    margin: 0;
    padding: 0;
}
</style>
<template>
    <label v-if="visible" class="label" :class="getIsDisabled() ? 'disabled' : ''">
        <input :id="fieldName"
               ref="checkbox-input"
               type="checkbox"
               class="no-spacing"
               :name="prop"
               :disabled="getIsDisabled()"
               :required="getRequired()"
               :checked="getValue()"
               :autofocus="focused === 1"
               :data-events="getAddEventListeners()"
                @click="validateChanges"/>
        <label class="context" :for="prop">{{ getContext() }}</label>
    </label>
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
    name: 'Boolean generic',
    components: {
        FontAwesomeIcon
    }
})
export default class BooleanGeneric<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private focused: number;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: boolean = null;
    private clickEventOption = null;

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
        if (!this.dataSource) {
            return;
        }
        if (event.target.checked === this.dataSource?.getValue()) {
            this.valueOverride = null;
            await this.$store.dispatch('CrudOverlay/removeDirty', { element: this.prop });
        } else {
            this.valueOverride = event.target.checked;
            await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop });
        }

        if (this.clickEventOption) {
            this.clickEventOption(event);
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
                    switch (event[0]) {
                    case 'click':
                        this.clickEventOption = event[1];
                        break;
                    default:
                        (this.$refs['checkbox-input'] as HTMLInputElement).addEventListener(event[0], event[1]);
                    }
                }
            });

            return true;
        } catch (e) {
            return false;
        }
    }
    private getContext(): string {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return this.prop as string;
            }
            const context = options.find(i => i.id === 'context')?.value;

            if (typeof context !== 'string') {
                return this.prop as string;
            }

            this.$nextTick(() => {
                this.emitReady();
            });
            return context;
        } catch {
            return this.prop as string;
        }
    }

    private getIsDisabled(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const disabled = options.find(i => i.id === 'disabled')?.value;

            if (typeof disabled !== 'boolean') {
                return false;
            }

            this.$nextTick(() => {
                this.emitReady();
            });
            return disabled;
        } catch {
            return false;
        }
    }

    private getRequired(): boolean {
        try {
            const options = this.dataSource?.getOptions();
            if (!options) {
                return false;
            }
            const required = options.find(i => i.id === 'required')?.value;

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

    private getValue(): boolean {
        return this.valueOverride === null
            ? this.dataSource?.getValue() as boolean
            : this.valueOverride;
    }
}
</script>
