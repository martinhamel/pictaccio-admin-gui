<style lang="scss" scoped>
</style>
<template>
    <crud-dialog ref="crud-dialog"
                 permission="shipping"
                 :allowArchiveDelete="archiveFeature"
                 @close="dialogClose"
                 @confirm="confirmClick"
                 @delete="deleteClick">
        <template v-for="field in columns.headers.filter(header => !header['tableOnly'])"
                  :key="field"
                  #[field.name]>
            <slot :name="field.name"></slot>
        </template>
    </crud-dialog>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { METHODS } from '@pictaccio/admin-gui/src/core/shipping_method_map';
import { DataSource, DataSourceOption } from '@pictaccio/admin-gui/src/core/types/data_source';
import { DataSourceEventListeners } from '@pictaccio/admin-gui/src/core/types/data_source_event_listeners';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbDeliveryOption, DeliveryOptionExtra } from '@pictaccio/admin-gui/src/models/db_delivery_option';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import ActivityCrudDialog
    from '@pictaccio/admin-gui/src/views/private/activities/companions/crud_dialogs/activity_crud_dialog';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    SHIPPING_OPTION_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/shipping_option_columns';
import { DeliveryMethod } from '@pictaccio/shared/src/types/delivery_method';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { camelize } from '@loufa/loufairy';
import { DateTime } from 'luxon';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Crud dialog delivery option',
    components: {
        FontAwesomeIcon,
        CrudDialog
    },
    emits: [
        'update'
    ],
    expose: [
        'deleteClick',
        'getFields',
        'openDialog',
        'refreshField',
        'updateCrud'
    ]
})
export default class CrudDialogDeliveryOption extends ActivityCrudDialog<DbDeliveryOption> {
    private columns = SHIPPING_OPTION_COLUMNS;
    private crudDialog: CrudDialog<DbDeliveryOption>;

    // Feature flags
    private archiveFeature = environment.features.archiveDeleteDeliveryOption;

    public async deleteClick(id?: number, row?: DbDeliveryOption): Promise<void> {
        if (!this.archiveFeature) {
            return;
        }

        if (this.$validateCapability('shipping:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('generic.prompt.destructive', {
                    item: row.name_locale[this.$i18n.locale]
                }),
                title: `${this.$t('generic.ui.delete')} ${this.$t('activities.shippingOptions.single')}`
            }) === 'yes') {
            try {
                await this.$store.dispatch('ShippingOptions/delete', {
                    filters: [[{
                        column: 'id',
                        operand: (id ?? this.editId).toString(),
                        operator: '=='
                    }]]
                });
                this.$emit('update');
            } catch (error) {
                globalToast(this.$t('messages.deleteError'), 'error');
            }
        }
    }

    public getFields(): any {
        return this.crudDialog.getFields();
    }

    public openDialog(rowId?: number, row?: DbDeliveryOption): void {
        this.crudDialogStatus = rowId ? 'update' : 'create';
        this.editId = rowId;
        this.rowSelected = row;
        this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
        this.crudDialog.openDialog();
        this.$nextTick(() => {
            this.updateCrud(rowId, row);
        });
    }

    public refreshField(fieldRef: string, dataSource: DataSource<DbDeliveryOption, any, any, any>) {
        (this.$refs['crud-dialog'] as CrudDialog<DbDeliveryOption>).refreshField(fieldRef, dataSource);
    }

    public async updateCrud(rowId?: number, row?: DbDeliveryOption): Promise<void> {
        await this.$store.dispatch('ShippingMethodsReader/shippingMethodsRead');
        const shippingMethods = this.$store.getters['ShippingMethodsReader/shippingMethods']
            .map(i => ({ id: i.id, value: camelize(i.value) }));
        const options = [{
            id: 'required',
            value: true
        }];
        const internalNameOptions = [
            {
                id: 'eventListeners',
                value: {
                    blur: event => this.internalNameBlur(event)
                }
            }, ...options
        ];
        const methodOptions = [
            {
                id: 'shippingMethods',
                value: shippingMethods
            }, {
                id: 'method',
                value: [rowId ? Object.entries(METHODS).find(([k, v]) => v === row['method'])[0][0] : 1]
            }, {
                id: 'disabled',
                value: Boolean(rowId)
            }
        ];
        const priceUnit = [
            {
                id: 'unit',
                value: this.$t('generic.units.dollar')
            }, ...options
        ];
        const leadTimeOptions = [
            {
                id: 'unit',
                value: this.$t('generic.units.days')
            }, ...options
        ];

        this.crudDialog.setRowSelected(row);
        this.crudDialog.update({
            name_locale: GenericDataSource.from<
                DbDeliveryOption,
                LocalizedString,
                string,
                boolean
            >(rowId ? row['name_locale'] : null, 'name_locale', options),
            internal_name: GenericDataSource.from<
                DbDeliveryOption,
                string,
                string,
                boolean | DataSourceEventListeners
            >(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
            lead_time: GenericDataSource.from<
                DbDeliveryOption,
                number,
                string,
                boolean | string
            >(rowId ? row['lead_time'] : null, 'lead_time', leadTimeOptions),
            base_price: GenericDataSource.from<
                DbDeliveryOption,
                number,
                string,
                boolean | string
            >(rowId ? row['base_price'] : null, 'base_price', priceUnit),
            shipping_method_options: GenericDataSource.from<
                DbDeliveryOption,
                DeliveryOptionExtra,
                string,
                boolean | number | DataSourceOption<string, string>
            >(rowId ? row['options'] : null, 'options', methodOptions)
        });
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        super.mounted('ShippingOptions');
        this.crudDialog = (this.$refs['crud-dialog'] as CrudDialog<DbDeliveryOption>);
        this.crudDialog.setActivity('shippingOptions');
        this.crudDialog.setColumns(this.columns);
    }

    /* EVENT HANDLER */
    private async confirmClick(): Promise<void> {
        const form = this.crudDialog;
        const formValues = form.getFields();
        const prefix: DeliveryMethod = METHODS[formValues['shipping_method_options']];

        const baseInfo = Object.entries<string | number | string[] | number[]>(formValues)
            .filter(([k, _]) => k.startsWith(prefix));

        let info = {};
        switch (prefix) {
        case 'establishment':
            Object.fromEntries(baseInfo.map(([k, v]) => {
                if (k.endsWith('Date')) {
                    info[k.slice(prefix.length + 1, k.length - 4) + 'Year'] = DateTime.fromSQL(v as string).year;
                    info[k.slice(prefix.length + 1, k.length - 4) + 'Month'] = DateTime.fromSQL(v as string).month;
                    info[k.slice(prefix.length + 1, k.length - 4) + 'Day'] = DateTime.fromSQL(v as string).day;
                }
                if (k.endsWith('Price')) {
                    info[k.slice(prefix.length + 1, k.length - 5) + 'Price'] = v;
                }
                return [k.substring(prefix.length + 1), v];
            }));
            break;
        case 'pick-up':
            info = {
                ...info,
                ...Object.fromEntries(baseInfo.map(([k, v]) => {
                    if (k.endsWith('daysAvailable')) {
                        const value: (string | number)[] = !Array.isArray(v)
                            ? [v]
                            : v;
                        return [k.substring(prefix.length + 1), value.join(', ')];
                    }
                    return [k.substring(prefix.length + 1), v];
                })),
                contactName: ''
            };
            break;
        default:
            info = {
                ...info,
                ...Object.fromEntries(baseInfo.map(([k, v]) => [k.substring(prefix.length + 1), v]))
            };
            break;
        }
        const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [
            i.locale,
            formValues['name_locale_' + i.locale]
        ]));
        const general = {
            id: '',
            ...Object.fromEntries(Object.entries(nameLocale).map(([k, v]) => [`name_locale_${k}`, v])),
            name: formValues['internal_name'],
            leadTime: formValues['lead_time'],
            basePrice: formValues['base_price']
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

        if (await this.internalNameValidation(values.internal_name)) {
            return;
        }

        let result;

        if (this.crudDialogStatus === 'create') {
            try {
                result = await this.$store.dispatch('ShippingOptions/add', { item: values });

                if (result.createdId !== null) {
                    this.dialogClose();
                }
            } catch (error) {
                globalToast(this.$t('messages.createError'), 'error');
            }
        } else {
            try {
                result = await this.$store.dispatch('ShippingOptions/update', {
                    filters: [[{
                        column: 'id',
                        operator: '==',
                        operand: this.editId
                    }]],
                    values
                });

                await this.$store.dispatch('CrudOverlay/removeDirty', { force: true });
                this.dialogClose();
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        }

        await this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead', true);
        this.$emit('update', { id: this.editId ?? result?.createdId });
    }

    private dialogClose(): void {
        this.crudDialog.closeDialog();
        this.crudDialogStatus = 'read';
        this.editId = null;
        this.rowSelected = null;
    }

    /* PRIVATE */
}
</script>
