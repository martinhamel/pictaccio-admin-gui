<style lang="scss" scoped>
:deep(.form-validator) {
    $extreme-gaps: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem 0.5rem;
}

.input-section,
:deep(.input-section) {
    position: relative;
    display: grid;
    grid-column: auto / span 1;
    margin-bottom: auto;
    gap: $ruler-input-section-gap-horizontal;

    &.name_locale,
    &.themes,
    &.images,
    &.description_locale,
    &.options:has(.customProduct-options),
    &._restriction_decoration {
        grid-template-columns: 1fr 1fr;
        grid-column: 1 / -1;
        gap: $ruler-input-section-gap-horizontal 0.3rem;
    }

    &.date,
    &.expiration_date {
        gap: $ruler-input-section-gap-horizontal 2.3rem;
    }

    &:has(>label:only-child){
        display: none;
    }

    &:has(>.disabled) {
        .crud-input-label {
            color: var(--color-text-disabled);
        }
    }

    &:has(div.dropdown-input),
    &.options {
        display: block !important;

        div.dropdown-input {
            margin-top: 2px;
        }
    }

    &.customProductOptions {
        grid-column: 1 / -1;
    }

    &.theme_images,
    &.crud_image {
        display: flex;
        flex-direction: column;
        grid-column: 1 / -1;

        &:has(input:only-of-type) {
            display: grid !important;
            grid-column: span 1 / auto;
        }
    }

    &.products:has(.select-container) {
        grid-column: 1 / -1;
    }

    &.session_color {
        order: 18 !important;
    }

    &.digitalOptions {
        order: 19 !important;
    }

    &.shipping_method_options {
        display: contents;
        grid-column: 1 / -1;
    }

    .image-upload-holder {
        width: calc(100% - 2px);
        margin-top: $ruler-input-spacing-above;
        max-width: $ruler-input-max-width;
    }

    > label {
        margin-left: 0;
        &:not(.input-label):not(.dropdown-option):first-child {
            margin: 0 0 -0.7rem 0;
            padding: 0;
            grid-column: 1 / -1;
        }
    }

    .input-label {
        margin: 0;
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
        align-items: center;
    }

    input, textarea {
        margin: 0;
        max-width: $ruler-input-max-width;
    }
}
</style>

<template>
    <div ref="crud-content">
        <FormValidator ref="form" v-if="crudStatus === 'create' || crudStatus === 'update'" class="crud-dialog">
            <template v-for="field in sortedFields()" :key="field">
                <div v-if="field.name !== 'id' || crudStatus === 'update'"
                     class="input-section"
                     :class="field.name"
                     :style="{order: field.orderCrud ?? field.order }">
                    <label :for="field.name" class="crud-input-label">
                        {{ (field.crudLocale ? $t(field.crudLocale) : false) ||
                            (field.locale ? $t(field.locale) : false) ||
                            (!field.name.startsWith('_') ? field.name : '') }}
                        <tooltip v-if="field.help" :sup="true">
                            <span class="help-text">
                                {{ $t(`dataTable.help.${field.help}`) }}
                            </span>
                        </tooltip>
                    </label>
                    <component :ref="`component_${field.name}`"
                               :is="field.componentName"
                               :field-name="field.name"
                               :focused="field.order === 2">
                        <template #[field.name]>
                            <slot :name="field.name"></slot>
                        </template>
                    </component>
                </div>
            </template>
            <slot></slot>
        </FormValidator>
    </div>
    <div v-if="crudStatus === 'delete'">
        <label>{{ $t("generic.confirmDelete") }}</label>
    </div>
</template>

<script lang="ts">
import { DataSource } from '@pictaccio/admin-gui/src/core/types/data_source';
import CrudBadgeInput from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudBadgeInput.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CrudListSelect
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudListSelect.vue';
import SeparatorDecorator
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/SeparatorDecorator.vue';
import VirtualDigitalOptions
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/VirtualDigitalOptions.vue';
import VirtualTouchupOptions
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/VirtualTouchupOptions.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { CrudComponentInterface } from '@pictaccio/admin-gui/src/core/types/crud_component_interface';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import CrudDropdown from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudDropdown.vue';
import Id from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/Id.vue';
import CampaignOptions from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CampaignOptions.vue';
import TextLocalizedList from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/TextLocalizedList.vue';
import TextLocalizedLong from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/TextLocalizedLong.vue';
import CrudMethodOptions from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudMethodOptions.vue';
import TextGeneric from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/TextGeneric.vue';
import TextLocalizedShort from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/TextLocalizedShort.vue';
import NumberDecimal from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/NumberDecimal.vue';
import NumberGeneric from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/NumberGeneric.vue';
import CrudImage from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudImage.vue';
import CrudList from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudList.vue';
import CustomProductOptions from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CustomProductOptions.vue';
import BooleanGeneric from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/BooleanGeneric.vue';
import { DataSourceMap } from '@pictaccio/admin-gui/src/core/types/data_source_map';
import ThemeImage from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/ThemeImage.vue';
import CrudColor from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/CrudColor.vue';
import DateGeneric from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialog_components/DateGeneric.vue';
import FormValidator from '@pictaccio/admin-gui/src/views/components/widgets/FormValidator.vue';

@Component({
    name: 'CRUD Dialog Content',
    components: {
        FormValidator,
        Tooltip,
        FontAwesomeIcon,
        CustomProductOptions,
        BooleanGeneric,
        CampaignOptions,
        CrudBadgeInput,
        CrudDropdown,
        CrudList,
        CrudListSelect,
        Id,
        NumberDecimal,
        NumberGeneric,
        TextLocalizedList,
        TextLocalizedShort,
        TextLocalizedLong,
        TextGeneric,
        ThemeImage,
        CrudImage,
        CrudColor,
        DateGeneric,
        CrudMethodOptions,
        VirtualTouchupOptions,
        VirtualDigitalOptions,
        SeparatorDecorator
    },
    expose: [
        'getFields',
        'refreshField',
        'update',
        'validate'
    ]
})
export default class CrudDialogContent<T> extends Vue {
    @Prop
    private fields: any = {};
    @Prop
    private crudStatus!: CRUDStatus;
    private dataSourceMap: DataSourceMap<T, any, any, any>;
    /**
     * Get the fields values
     */
    public getFields(): any {
        return (this.$refs['form'] as FormValidator).getFormValues();
    }

    public refreshField(fieldRef: string, datasource: DataSource<T, any, any, any>) {
        this.updateComponent(fieldRef, datasource);
    }

    /**
     * Set edit item data before opening in editing mode
     * @param dataSourceMap
     */
    public update(dataSourceMap: DataSourceMap<T, any, any, any>): void {
        this.dataSourceMap = dataSourceMap;
        this.updateComponents();
    }

    public validate(): boolean {
        return (this.$refs['form'] as FormValidator).validate();
    }

    /* LIFECYCLE */
    /* EVENT HANDLERS */
    /* PRIVATE */
    // this.fields is of type any
    private sortedFields(): any {
        return this.fields.filter(header => !header.tableOnly).sort(
            (a, b) => a.order > b.order
                ? 1
                : a.order < b.order
                    ? -1
                    : 0);
    }

    private updateComponent(fieldRef: string, dataSource: DataSource<T, any, any, any>): void {
        const dataSourceName = fieldRef;
        this.dataSourceMap[dataSourceName] = dataSource;

        this.$nextTick(() => {
            if (this.$refs['component_' + fieldRef]) {
                const component = this.$refs['component_' + fieldRef][0] as CrudComponentInterface<T>;
                component.update({
                    itemHeader: this.fields.find(i => i.name === dataSourceName),
                    prop: dataSourceName as keyof T,
                    crudStatus: this.crudStatus,
                    dataSource
                });
            }
        });
    }

    private async updateComponents(): Promise<void> {
        for (const name of Object.keys(this.$refs)) {
            const dataSourceName = name.slice(10);
            const dataSource = this.dataSourceMap[dataSourceName];

            await this.$nextTick(() => {
                if (name.startsWith('component_')) {
                    const component = this.$refs[name][0] as CrudComponentInterface<T>;
                    component.update({
                        itemHeader: this.fields.find(i => i.name === dataSourceName),
                        prop: dataSourceName as keyof T,
                        crudStatus: this.crudStatus,
                        dataSource
                    });
                }
            });
        }

        await this.$nextTick(() => {
            ((this.$refs['crud-content'] as HTMLElement).querySelector('[autofocus]') as HTMLInputElement)?.focus();
        });
    }
}
</script>
