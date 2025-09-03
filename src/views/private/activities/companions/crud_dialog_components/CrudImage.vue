<style></style>

<template>
    <div v-if="visible" class="images-container">
        <image-upload ref="image-upload"
                      :id="fieldName"
                      :selectable="!isSelectable()"
                      :readonly="isReadonly()"
                      :multiple="isMultiple()"
                      :required="isRequired()"
                      :name="prop"/>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import ImageUpload, { isSelectRange, SelectRange } from '@pictaccio/admin-gui/views/components/widgets/ImageUpload.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Image',
    components: {
        FontAwesomeIcon,
        ImageUpload
    }
})
export default class CrudImage<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private prop: keyof Tmodel;
    private visible = false;

    public async update(state: UpdateState<Tmodel>): Promise<void> {
        this.visible = false;
        this.item = state.item;
        this.dataSource = state.dataSource;
        this.crudStatus = state.crudStatus;
        this.prop = state.prop;
        await this.$nextTick(() => {
            this.visible = true;
        });
        this.setImage();
    }

    /* PRIVATE */
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

    private isMultiple(): boolean {
        try {
            const multiple = this.dataSource?.getOptions()
                .filter(i => i.id === 'multiple')
                .map(i => i.value)[0];

            if (typeof multiple !== 'boolean') {
                return false;
            }

            return multiple;
        } catch {
            return false;
        }
    }

    private isReadonly(): boolean {
        try {
            const readonly = this.dataSource?.getOptions()
                .filter(i => i.id === 'readonly')
                .map(i => i.value)[0];

            if (typeof readonly !== 'boolean') {
                return false;
            }

            return readonly;
        } catch {
            return false;
        }
    }

    private isRequired(): boolean {
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

    private isSelectable(): SelectRange {
        try {
            const selectable = this.dataSource?.getOptions()
                .filter(i => i.id === 'selectable')
                .map(i => i.value)[0];

            if (!isSelectRange(selectable)) {
                return 'none';
            }

            return selectable;
        } catch {
            return 'none';
        }
    }

    private setImage(): void {
        if (!this.dataSource?.getValue()) {
            return;
        }
        (this.$refs['image-upload'] as ImageUpload).setFiles(this.dataSource?.getValue() as string[]);
    }
}
</script>

