<style>
    .select-container {
        display: flex;
        justify-content: space-between;
    }

    .container {
        flex: 1;
        position: relative;

        >label {
            margin: 0;
            font-size: 1.6rem;
            text-transform: capitalize;
        }

        :deep(.list-selection) {
            position: absolute;
            inset: 0;
        }
    }
</style>

<template>
    <div v-if="visible" class="select-container" :name="fieldName" ref="list" data-list>
        <div class="container">
            <label>{{ $t('generic.ui.selected') }}</label>
            <list-selector ref="selected"
                           :allow-reorder="true"
                           :selectable="false"
                           :listName="`${prop}-selected`"
                           @click="selectedClick">
                <label v-for="option in dataSource?.getOptions().filter(product => getValue().includes(product.id))"
                       :key="option"
                       :value="option.id"
                       :data-value="option.value">
                    {{ option.value }}
                </label>
                <template #add-item>
                    <slot :name="`${prop}-selected`"></slot>
                </template>
            </list-selector>
        </div>
        <div class="container">
            <label>{{ $t('generic.ui.available')}}</label>
            <list-selector ref="available"
                           :selectable="false"
                           :listName="`${prop}-available`"
                           @click="availableClick">
                <label v-for="option in dataSource?.getOptions().filter(product => !getValue().includes(product.id))"
                       :key="option"
                       :value="option.id"
                       :data-value="option.value">
                    {{ option.value }}
                </label>
                <template #add-item>
                    <slot :name="`${prop}-available`"></slot>
                </template>
            </list-selector>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/src/core/types/update_state';
import ListSelector from '@pictaccio/admin-gui/src/views/components/widgets/ListSelector.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

export type SelectedItem = {
    order: number;
    optionId: string;
}

@Component({
    name: 'Crud List Select',
    components: {
        ListSelector,
        FontAwesomeIcon
    }
})
export default class CrudListSelect<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private list: HTMLElement;
    private listAvailable: ListSelector;
    private listSelected: ListSelector;
    private prop: keyof Tmodel;
    private visible = false;
    private valueOverride: string[] = null;

    public getSelection(): SelectedItem[] {
        return this.listSelected.getItems().map((optionId, index) => {
            return {
                order: index,
                optionId
            };
        });
    }

    public update(state: UpdateState<Tmodel>): void {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;

        if (Array.isArray(state.dataSource.getValue())) {
            this.valueOverride = state.dataSource.getValue() as string[];
        }

        this.$nextTick(() => {
            this.visible = true;

            this.$nextTick(() => {
                this.list = this.$refs.list as HTMLElement;
                this.list['__loufairyBridge__'] = this;

                this.listAvailable = this.$refs.available as ListSelector;
                this.listSelected = this.$refs.selected as ListSelector;
            });
        });
    }

    /* EVENT HANDLER */
    private async availableClick(event): Promise<void> {
        await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });

        if (!this.valueOverride) {
            this.valueOverride = [];
        }

        if (event.targetOptionId === undefined) {
            return;
        }

        this.valueOverride.push(event.targetOptionId);
        this.$nextTick(() => {
            this.listAvailable.requestUpdate();
            this.listSelected.requestUpdate();
        });
    }

    private async selectedClick(event): Promise<void> {
        await this.$store.dispatch('CrudOverlay/makeDirty', { element: this.prop as string });

        if (!this.valueOverride) {
            this.valueOverride = [];
        }

        this.valueOverride = this.valueOverride.filter(id => id !== event.targetOptionId && id !== undefined);
        this.$nextTick(() => {
            this.listAvailable.requestUpdate();
            this.listSelected.requestUpdate();
        });
    }

    /* PRIVATE */
    private getValue(): string[] {
        return this.valueOverride === null
            ? this.dataSource.getValue() as string[] ?? []
            : this.valueOverride;
    }
}
</script>
