<style lang="scss" scoped>
.method-option-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.2rem 2.3rem;
}

label {
    padding-top: 0.6rem;
    padding-bottom: 0.3rem;
    height: 2.5rem;
}

.input-section.options {
    margin-top: 0.6rem;
}

.dropdown {
    margin-bottom: 1.5rem;
}
</style>

<template>
    <div class="dropdown">
        <dropdown v-if="visible"
                  ref="method-dropdown"
                  :current-selection="getMethod()"
                  :dropdownName="prop"
                  :parent-element="'undefined'"
                  :disabled="isDisabled()"
                  @change="dropdownChange"
                  :emit-on-mounted="true">
            <label v-for="option in getShippingMethods()"
                   :key="option"
                   :value="option.id"
                   :data-value="option.value">
                <span>{{ $t(`${methodLocalePath}.${camelize(option.value)}`) }}</span>
            </label>
        </dropdown>
    </div>
    <keep-alive v-if="visible" style="padding-top: 0.6rem">
        <component :is="currentMethod"
                   :internalValues="getValues()"
                   ref="method-options-form"
                   class="method-option-form">
        </component>
    </keep-alive>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import { METHODS, METHODS_LOCALE_PATH } from '@pictaccio/admin-gui/core/shipping_method_map';
import { CrudComponentInterface } from '@pictaccio/admin-gui/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/core/types/crud_status';
import { DataSource } from '@pictaccio/admin-gui/core/types/data_source';
import { UpdateState } from '@pictaccio/admin-gui/core/types/update_state';
import { isLocalizedString } from '@pictaccio/shared/utils/guards/is_localized_string';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import {
    CrudComponents
} from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/CrudComponents';
import CanadaPost
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/shipping_method_options/Canadapost.vue';
import PickUp
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/shipping_method_options/PickUp.vue';
import Establishment
    from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/shipping_method_options/Establishment.vue';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'CrudMethodOptions',
    components: {
        Dropdown,
        FontAwesomeIcon,
        CanadaPost,
        Establishment,
        PickUp
    }
})
export default class CrudMethodOptions<Tmodel, Tvalue, ToptionId, ToptionValue>
    extends CrudComponents implements CrudComponentInterface<Tmodel> {
    @Prop
    private fieldName: string;
    private crudStatus: CRUDStatus;
    private dataSource: DataSource<Tmodel, Tvalue, ToptionId, ToptionValue>;
    private item: Tmodel;
    private currentMethod = camelize(METHODS[1]);
    private prop: keyof Tmodel;
    private dropdown: Dropdown;
    private methodLocalePath = METHODS_LOCALE_PATH;
    private visible = false;

    public camelize: (input: string, pascal?: boolean) => string = camelize;

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

    /* LIFECYCLE */
    public mounted(): void {
        this.dropdown = this.$refs['method-dropdown'] as Dropdown;
    }

    /* EVENT HANDLERS */
    private dropdownChange(event): void {
        this.currentMethod = camelize(METHODS[event.selection]);
    }

    private preventUpdate(event: KeyboardEvent): void {
        event.preventDefault()
    }

    /* PRIVATE */
    private getValues(): Record<string, string> {
        return this.dataSource?.getValue() as Record<string, string>;
    }

    private getMethod(): ToptionValue[] {
        try {
            const method = this.dataSource?.getOptions()
                .find(i => i.id === 'method').value;

            if ((typeof method === 'boolean') ||
                !method ||
                (Array.isArray(method) && (typeof method[0] !== 'string' && typeof method[0] !== 'number')) ||
                isLocalizedString(method) ||
                (typeof method === 'object' && !Array.isArray(method))) {
                throw new Error('Unexpected');
            }

            return Array.isArray(method) ? method : [method];
        } catch (e) {
            throw new Error('Unexpected');
        }
    }

    private getShippingMethods(): any {
        try {
            return this.dataSource?.getOptions()
                .find(i => i.id === 'shippingMethods').value;
        } catch {
            //pass
        }
    }

    private isDisabled(): any {
        try {
            return this.dataSource?.getOptions()
                .find(i => i.id === 'disabled').value;
        } catch {
            //pass
        }
    }
}
</script>
