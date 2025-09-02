<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.list-interface {
    --list-top-space: 4.5rem;
    --list-max-height: calc(var(--boxes-max-height) - 1.6rem);
    --list-min-height: calc(var(--boxes-min-height) - var(--list-top-space));
    position: relative;
    max-width: $ruler-input-max-width;
    margin: 0 auto;
    width: 100%;
}
.shipping-box {
    position: absolute;
    inset: var(--list-top-space) 0 0 0;
    max-height: var(--list-max-height);

    :deep(.list-input) {
        height: 100%;
    }
    :deep(.list-selection) {
        position: absolute;
        inset: 0;
        max-height: unset !important;

        label {
            --font-weight: 400 !important;
        }
    }

    .list-option {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem 0.5rem 1rem;
        min-height: 4.5rem !important;
        width: 100%;
    }
}

.overlay-ui {
    max-width: $ruler-input-max-width;
    justify-content: space-between;
    margin-bottom: 1rem;

    label {
        margin: 0.5rem;
    }

    .h4 {
        --font-weight: 400;
        margin: 0 0.5rem 1rem;
    }

    .btn-icon {
        width: $ruler-input-height;
    }
}

.spinner {
    position: absolute;
    z-index: 20;
    @include center();
    width: 8rem;
}

.no-list-item {
    width: 100%;
    font-size: 2.3rem;
    justify-content: space-between;

    span {
        text-align: center;
    }
}

.select-group-copy {
    margin-left: auto;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: all;
    padding: 0.7rem;
    background-color: var(--color-button-background-primary);

    &:hover {
        background-color: var(--color-button-background-primary-hover);
    }

    :deep(.list-option:hover) & {
        opacity: 1;
    }
}
</style>

<template>
    <div class="list-interface">
        <crud-dialog ref="crud-dialog-group"
                     :permission="'shipping'"
                     @close="dialogGroupClose"
                     @confirm="confirmShippingGroup">
            <template #deliveryOptions>
                <button v-if="$validateCapability('shipping:create')"
                        class="btn btn-icon btn-primary"
                        @click="addShippingOptionClick">
                    <font-awesome-icon :icon="['far', 'plus']"/>
                </button>
            </template>
        </crud-dialog>
        <crud-dialog ref="crud-dialog-option"
                     :permission="'shipping'"
                     @close="dialogOptionClose"
                     @confirm="confirmShippingOption"/>
        <div class="overlay-ui">
            <label>
                <h2 class="h4">
                    {{ $t('activities.shippingGroups.title') }}
                </h2>
                <tooltip :sup="true">
                    <span class="help-text">
                        {{ $t('activities.createSession.groups.shippingGroupsHelper') }}
                    </span>
                </tooltip>
            </label>
            <button v-if="$validateCapability('shipping:create')"
                    class="btn btn-primary btn-icon"
                    @click="addShippingGroupClick">
                <font-awesome-icon :icon="['far', 'plus']"/>
            </button>
        </div>
        <div class="shipping-box">
            <list-selector :listName="'shipping-groups'"
                           :current-selection="currentSelection"
                           v-if="shippingGroupListVisible"
                           @change="selectLastGroup"
                           ref="shipping-group-list">
                <template v-if="shippingGroupList().length > 0" #default>
                    <label v-for="shippingGroup in shippingGroupList()"
                           :key="shippingGroup"
                           class="list-option"
                           :value="shippingGroup.id">
                        {{ shippingGroup.value }}
                        <span class="btn btn-icon select-group-copy" @click="selectGroup">
                            <font-awesome-icon :icon="['far', 'clone']"/>
                        </span>
                    </label>
                </template>
                <template #messageEmpty>
                    <div class="no-list-item" @click="addShippingGroupClick">
                        <span>
                            {{ $t('activities.createSession.groups.emptyList') }}
                        </span>
                        <font-awesome-icon :icon="['fas', 'arrow-up']"/>
                    </div>
                </template>
            </list-selector>
            <div v-if="!shippingGroupListVisible" class="spinner">
                <spinner/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/src/core/types/data_source_event_listeners';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import Spinner from '@pictaccio/admin-gui/src/views/components/widgets/Spinner.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { DateTime } from 'luxon';
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { METHODS } from '@pictaccio/admin-gui/src/core/shipping_method_map';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { DbDeliveryGroup } from '@pictaccio/admin-gui/src/models/db_delivery_group';
import { DbDeliveryOption, DeliveryOptionExtra } from '@pictaccio/admin-gui/src/models/db_delivery_option';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    SHIPPING_GROUP_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/shipping_group_columns';
import {
    SHIPPING_OPTION_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/shipping_option_columns';
import Filters from '@pictaccio/admin-gui/src/views/private/activities/companions/Filters.vue';
import CreateSessionsSteps from '@pictaccio/admin-gui/src/views/private/activities/create_session/create_sessions_steps';
import ListSelector from '@pictaccio/admin-gui/src/views/components/widgets/ListSelector.vue';

@Component({
    name: 'List Shipping Group',
    components: {
        Tooltip,
        Spinner,
        CrudDialog,
        FontAwesomeIcon,
        FiltersHolder: Filters,
        ListSelector
    },
    emits: [
        'shipping-group-selected-to-copy'
    ],
    expose: [
        'updateList'
    ]
})
export default class ListShippingGroup extends CreateSessionsSteps {
    private rowSelected: any;
    private crudDialogOptionStatus: CRUDStatus = 'read';
    private crudDialogGroupStatus: CRUDStatus = 'read';
    private shippingGroups = SHIPPING_GROUP_COLUMNS;
    private shippingOptions = SHIPPING_OPTION_COLUMNS;
    private crudDialogGroup: CrudDialog<DbDeliveryGroup>;
    private crudDialogOption: CrudDialog<DbDeliveryOption>;

    private shippingGroupListVisible = false;
    private currentSelection: string[] = [];
    private groupTitleToCopy: string = null;
    private crudDialogUpdateOptions = [{
        id: 'required',
        value: true
    }];

    public async updateList(id?: number, resetSelection = false): Promise<void> {
        const listSelector = this.$refs['shipping-group-list'] as ListSelector;
        this.currentSelection = listSelector.getSelection();
        await this.$store.dispatch('ShippingGroupsReader/shippingGroupsRead', true);

        if (id && resetSelection) {
            listSelector.setSelection([id.toString()]);
        } else {
            listSelector.setSelection([...this.currentSelection, id.toString()]);
        }
    }

    /* LIFECYCLE */
    public async created(): Promise<void> {
        this.$store.watch(() => this.$store.getters['ShippingGroupsReader/shippingGroups'], () => {
            this.shippingGroupListVisible = true;

            this.$nextTick(() => {
                (this.$refs['shipping-group-list'] as ListSelector).requestUpdate();
            });
        });
        await this.$store.dispatch('ShippingGroupsReader/shippingGroupsRead', true);
    }

    public async mounted(): Promise<void> {
        //
    }

    /* EVENT HANDLERS */
    private addShippingGroupClick(): void {
        this.crudDialogGroup = this.$refs['crud-dialog-group'] as CrudDialog<DbDeliveryGroup>;
        this.crudDialogGroup.setActivity('shippingGroups');
        this.crudDialogGroup.setColumns(this.shippingGroups);
        this.crudDialogGroup.setCrudDialogStatus('create');
        this.crudDialogGroup.openDialog();
        this.crudDialogGroupStatus = 'create';
        this.$nextTick(() => {
            this.updateShippingGroupCrud();
        });
    }

    private addShippingOptionClick(): void {
        this.crudDialogOption = this.$refs['crud-dialog-option'] as CrudDialog<DbDeliveryOption>;
        this.crudDialogOption.setActivity('shippingOptions');
        this.crudDialogOption.setColumns(this.shippingOptions);
        this.crudDialogOption.setCrudDialogStatus('create');
        this.crudDialogOption.openDialog();
        this.crudDialogOptionStatus = 'create';

        this.$nextTick(() => {
            this.updateShippingOptionCrud();
        });
    }

    private dialogGroupClose(): void {
        this.crudDialogGroup.closeDialog();
        this.crudDialogGroupStatus = 'read';
        this.rowSelected = null;
    }

    private dialogOptionClose(): void {
        this.crudDialogOption.closeDialog();
        this.crudDialogOptionStatus = 'read';
        this.rowSelected = null;
    }

    private selectGroup(event: PointerEvent): void {
        const target = event.target as HTMLElement;
        this.groupTitleToCopy = target.parentElement.getAttribute('data-value');
        this.emitShippingGroupSelectedToCopy();

        (this.$refs['shipping-group-list'] as ListSelector)
            .setSelection([target.parentElement.getAttribute('data-value')]);

        event.stopPropagation();
    }

    private selectLastGroup(event): void {
        // Pass
    }

    /* PRIVATE */
    private async confirmShippingGroup(): Promise<void> {
        if (this.crudDialogGroupStatus !== 'create') {
            return;
        }

        const form = this.crudDialogGroup;
        const formValues = form.getFields();
        const values: DbDeliveryGroup = {
            internal_name: formValues['internal_name'],
            deliveryOptions: formValues['deliveryOptions']
        };
        const result = await this.$store.dispatch('ShippingGroups/add', { item: values });

        if (result.createdId !== null) {
            this.dialogGroupClose();
        }
        await this.updateList(result.createdId);
    }

    private async confirmShippingOption(): Promise<void> {
        if (this.crudDialogOptionStatus !== 'create') {
            return;
        }
        const form = this.crudDialogOption;
        const formValues = form.getFields() as Record<string, string>;
        const prefix = METHODS[formValues['shipping_method_options']];

        const baseInfo = Object.entries(formValues)
            .filter(([k, _]) => k.startsWith(prefix));

        let info = {};
        if (prefix === 'establishment') {
            Object.fromEntries(baseInfo.map(([k, v]) => {
                if (k.endsWith('Date')) {
                    info[k.slice(prefix.length + 1, k.length - 4) + 'Year'] = DateTime.fromSQL(v).year;
                    info[k.slice(prefix.length + 1, k.length - 4) + 'Month'] = DateTime.fromSQL(v).month;
                    info[k.slice(prefix.length + 1, k.length - 4) + 'Day'] = DateTime.fromSQL(v).day;
                }
                return [k.substring(prefix.length + 1), v];
            }));
        } else if (prefix === 'pick-up') {
            //
        } else {
            info = Object.fromEntries(baseInfo.map(([k, v]) => [k.substring(prefix.length + 1), v]));
        }

        const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['name_locale_' + i.locale]
        ]));

        const general = {
            id: '',
            ...Object.fromEntries(Object.entries(nameLocale).map(([k, v]) => [`name_locale_${k}`, v])),
            internal_name: formValues['internal_name'],
            lead_time: formValues['lead_time'],
            base_price: formValues['base_price']
        };

        const optionObj = {
            info,
            general
            // baseInfo: Object.fromEntries(baseInfo.map(([k, v]) => [k.substring(prefix.length + 1), v]))
        };

        const values: DbDeliveryOption = {
            name_locale: nameLocale,
            internal_name: formValues['internal_name'],
            lead_time: Number(formValues['lead_time']),
            base_price: Number(formValues['base_price']),
            method: prefix,
            options: optionObj
        };
        const result = await this.$store.dispatch('ShippingOptions/add',
            { item: values });

        if (result.createdId !== null) {
            await this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead', true);
            const options = this.$store.getters['ShippingOptionsReader/shippingOptions']
                .map(i => ({ id: i.id, value: i.value }));

            this.dialogOptionClose()
            this.$nextTick(() => {
                this.crudDialogGroup.refreshField('deliveryOptions',
                    GenericDataSource.from<
                        DbDeliveryGroup,
                        number,
                        string,
                        DataSourceOption<string, string>
                            >(result.createdId, 'deliveryOptions', options));
            });
        }
    }

    private emitShippingGroupSelectedToCopy(): void {
        this.$emit('shipping-group-selected-to-copy',
            this.groupTitleToCopy ? this.groupTitleToCopy : null);
    }

    private shippingGroupList(): ReaderResponse {
        return this.$store.getters['ShippingGroupsReader/shippingGroups'];
    }

    // PSFCA-2739 Not dry bc gonna be yeet once the new crud dialog is applyed
    private async productionNameGroupBlur(event): Promise<void> {
        const value = event.target.value;

        if (value) {
            const result = await this.$store.dispatch('ShippingGroups/query', [[{
                column: 'internal_name',
                operator: '==',
                operand: value
            }]]);

            if (!result || result.length === 0) {
                event.target.classList.remove('error');
            } else {
                globalToast(this.$t('activities.all.productionNameExists'), 'error');

                event.target.classList.add('error');
            }
        }
    }

    private async updateShippingGroupCrud(): Promise<void> {
        await this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead');
        const shippingOptions = this.$store.getters['ShippingOptionsReader/shippingOptions']
            .map(i => ({ id: i.id, value: i.value }));

        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.productionNameGroupBlur(event)
                }
            }, ...this.crudDialogUpdateOptions
        ];

        this.crudDialogGroup.update({
            internal_name: GenericDataSource.from<
                DbDeliveryGroup,
                string,
                string,
                boolean | DataSourceEventListeners
            >(null, 'internal_name', internalNameOptions),
            deliveryOptions: GenericDataSource.from<
                DbDeliveryGroup,
                string[],
                string,
                DataSourceOption<string, string>
            >(null, 'deliveryOptions', shippingOptions)
        });
    }

    // PSFCA-2739 Not dry bc gonna be yeet once the new crud dialog is applyed
    private async productionNameOptionBlur(event): Promise<void> {
        const value = event.target.value;

        if (value) {
            const result = await this.$store.dispatch('ShippingOptions/query', [[{
                column: 'internal_name',
                operator: '==',
                operand: value
            }]]);

            if (!result || result.length === 0) {
                event.target.classList.remove('error');
            } else {
                globalToast(this.$t('activities.all.productionNameExists'), 'error');

                event.target.classList.add('error');
            }
        }
    }

    private async updateShippingOptionCrud(): Promise<void> {
        await this.$store.dispatch('ShippingMethodsReader/shippingMethodsRead');
        const shippingMethods = this.$store.getters['ShippingMethodsReader/shippingMethods']
            .map(i => ({ id: i.id, value: i.value }));
        const methodOptions = [{
            id: 'shippingMethods',
            value: shippingMethods
        }, {
            id: 'method',
            value: 1
        }];
        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.productionNameOptionBlur(event)
                }
            }, ...this.crudDialogUpdateOptions
        ];
        const priceUnit = [{
            id: 'unit',
            value: this.$t('generic.units.dollar')
        }, ...this.crudDialogUpdateOptions
        ];

        const leadTimeOptions = [{
            id: 'unit',
            value: this.$t('generic.units.days')
        }, ...this.crudDialogUpdateOptions
        ];

        const sessionDates: DeliveryOptionExtra = {
            info: {
                startYear: DateTime.fromJSDate(this.$store.getters['Sessions/generalInfo']['shootDate']).year,
                startMonth: DateTime.fromJSDate(this.$store.getters['Sessions/generalInfo']['shootDate']).month,
                startDay: DateTime.fromJSDate(this.$store.getters['Sessions/generalInfo']['shootDate']).day,
                endYear: DateTime.fromJSDate(this.$store.getters['Sessions/generalInfo']['expirationDate']).year,
                endMonth: DateTime.fromJSDate(this.$store.getters['Sessions/generalInfo']['expirationDate']).month,
                endDay: DateTime.fromJSDate(this.$store.getters['Sessions/generalInfo']['expirationDate']).day
            },
            general: {}
        };

        this.crudDialogOption.update({
            name_locale: GenericDataSource.from<
                DbDeliveryOption,
                LocalizedString,
                string,
                boolean
            >(null, 'name_locale', this.crudDialogUpdateOptions),
            internal_name: GenericDataSource.from<
                DbDeliveryOption,
                string,
                string,
                boolean | DataSourceEventListeners
            >(null, 'internal_name', internalNameOptions),
            lead_time: GenericDataSource.from<
                DbDeliveryOption,
                number,
                string,
                boolean | string
            >(null, 'lead_time', leadTimeOptions),
            base_price: GenericDataSource.from<
                DbDeliveryOption,
                number,
                string,
                boolean | string
            >(null, 'base_price', priceUnit),
            shipping_method_options: GenericDataSource.from<
                DbDeliveryOption,
                DeliveryOptionExtra,
                string,
                number | DataSourceOption<string, string>
            >(sessionDates, 'options', methodOptions)
        });
    }
}
</script>
