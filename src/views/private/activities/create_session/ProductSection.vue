<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

#session-info.step-interface {
    display: grid;
    grid-auto-flow: column;
    row-gap: 2rem;
    width: 100%;
    max-width: 120rem;
    margin-inline: auto;
    min-height: var(--boxes-min-height);
    max-height: calc(var(--boxes-max-height) + 3.3rem);

    label {
        --font-weight: 400 !important;
    }
}

.input-section,
.touchups-section,
.digitals-section {
    order: 1;
    display: flex;
    flex-direction: column;
    max-width: $ruler-input-max-width;
    width: 100%;

    label {
        margin-block: 0.5rem 0;
    }

    .h4 {
        --font-weight: 400 !important;
        margin: 0 0 1rem;
    }

    &.right {
        margin-left: auto;
    }
}

.digitals-discount-section {
    order: 4;
    grid-row: 4;
}

:deep(.list-interface) {
    order: 0;
    grid-row: 1 / 5;
}

.span-100 {
    grid-column: 1/-1;
    display: contents;
}

.options-section {
    grid-column: 1/-1;
    margin: 1rem 0 0;
}

.advanced-options {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 3rem 1rem 1rem;
    border-radius: $ruler-border-radius;
    height: 100%;
    max-width: $ruler-input-max-width;

    [data-theme-type="block"][data-theme-color="dark"] & {
        border: 2px solid var(--color-mix-5-6-step-3);
    }
    [data-theme-type="block"][data-theme-color="light"] & {
        border: 2px solid var(--color-mix-7-5-step-2);
    }

    [data-theme-type="line"][data-theme-color="dark"] & {
        border: 2px solid var(--color-background-page-2);
    }
    [data-theme-type="line"][data-theme-color="light"] & {
        border: 2px solid var(--color-mix-7-5-step-2);
    }

    > label:first-child {
        position: absolute;
        margin: 0.5rem;
        padding: 0 1rem 0 3rem !important;
        width: min-content;
        white-space: nowrap;
        top: 0;
        transform: translateY(-50%);
        left: 2rem;

        [data-theme-type="block"][data-theme-color="dark"] & {
            background-color: var(--color-background-page-2);
        }
        [data-theme-type="block"][data-theme-color="light"] & {
            background-color: var(--color-background-page-1);
        }

        [data-theme-type="line"] & {
            background-color: var(--color-background-page-1);
        }
    }

    .options-box {
        margin-top: 2rem;

        &.first {
            margin-top: 0;
        }

        > label {
            --font-weight: 400;
        }

        .option-context-box {
            display: block;
            margin-top: 0.7rem;
            margin-bottom: 0.7rem;
            padding: 0;
        }

        .disabled {
            pointer-events: all;
        }
    }
}

.cross-sell-label {
    margin-bottom: 0.4rem !important;

    .h4 {
        margin: 0 !important;
    }
}
</style>

<template>
    <div id="session-info" class="step-interface" ref="input-container">
        <crud-dialog ref="crud-dialog-crosssell"
                     :permission="'product'"
                     @close="dialogCrosssellClose"
                     @confirm="confirmCrosssell"/>
        <div class="input-section">
            <label class="cross-sell-label">
                <h4 class="h4">{{ $t('activities.createSession.options.crosssell') }}</h4>
                <tooltip :sup="true">
                    <h4 class="h5">{{ $t('activities.createSession.options.crosssellExplanationTitle') }}</h4>
                    <span class="help-text">
                        {{ $t('activities.createSession.options.crosssellExplanation') }}
                    </span>
                </tooltip>
            </label>
            <dropdown v-if="dropdownVisible"
                      ref="session-cross-sell"
                      :dropdownName="'session-cross-sell'"
                      :can-unset="true"
                      :placeholder="$t('dataTable.placeholder.noCrosssell')"
                      :current-selection="crosssellSelection">
                <template v-for="crosssell in getCrosssells()" :key="crosssell">
                    <label :value="crosssell.id"
                           :data-value="crosssell.value">
                        <span>{{ crosssell.value }}</span>
                    </label>
                </template>
                <template #add-new-extended>
                    <div v-if="$validateCapability('product:create')" class="link-container">
                        <a @click="addCrosssellClick">
                            {{ $t('activities.crosssells.addBtn') }}
                        </a>
                    </div>
                </template>
            </dropdown>
        </div>
        <div class="touchups-section">
            <virtual-touchup-option ref="options-touchups"/>
        </div>
        <div class="digitals-section">
            <virtual-digital-option ref="options-digitals"
                                    @digitals-enabled="digitalOptionsEnabled"
                                    @group-digitals-enabled="digitalOptionsGroupEnabled"/>
        </div>
        <div class="digitals-discount-section">
            <virtual-digital-discount ref="digitals-discount"/>
        </div>
        <list-product-catalog/>
    </div>
    <div class="overlay-ui">
        <button class="btn btn-primary back" @click="goToStepClick('product-section', 'session-info')">
            {{ $t('generic.ui.back') }}
        </button>
        <button class="btn btn-primary next" @click="nextClick">
            {{ $t('generic.ui.next') }}
        </button>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getFormInputValues } from '@loufa/loufairy-client';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { CRUDStatus } from '@pictaccio/admin-gui/src/core/types/crud_status';
import { GenericDataSource } from '@pictaccio/admin-gui/src/datasources/generic_data_source';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { DbCrosssell } from '@pictaccio/admin-gui/src/models/db_crosssell';
import { SessionOptions } from '@pictaccio/admin-gui/src/models/session_options';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecorator.vue';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    CROSSSELL_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/crosssell_columns';
import CreateSessionsSteps from '@pictaccio/admin-gui/src/views/private/activities/create_session/create_sessions_steps';
import ListProductCatalog from '@pictaccio/admin-gui/src/views/private/activities/create_session/ListProductCatalog.vue';
import VirtualDigitalDiscount, {
    VirtualDigitalDiscountSelection
} from '@pictaccio/admin-gui/src/views/private/activities/create_session/widgets/VirtualDigitalDiscount.vue';
import VirtualDigitalOption, {
    VirtualDigitalOptionSelection
} from '@pictaccio/admin-gui/src/views/private/activities/create_session/widgets/VirtualDigitalOption.vue';
import VirtualTouchupOption
    from '@pictaccio/admin-gui/src/views/private/activities/create_session/widgets/VirtualTouchupOption.vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Session Info',
    components: {
        VirtualDigitalDiscount,
        VirtualDigitalOption,
        VirtualTouchupOption,
        ListProductCatalog,
        CrudDialog,
        UnitDecorator,
        Tooltip,
        FontAwesomeIcon,
        Dropdown
    }
})
export default class ProductSection extends CreateSessionsSteps {
    private touchupsOptions: VirtualTouchupOption;
    private digitalsOptions: VirtualDigitalOption;
    private discountOptions: VirtualDigitalDiscount;
    private dropdownVisible = false;
    private sessionDigitalAutoSend = environment.features.sessionDigitalAutoSend;

    private crudDialogCrosssell: CrudDialog<DbCrosssell>;
    private crosssell = CROSSSELL_COLUMNS;
    private crudDialogCrosssellStatus: CRUDStatus = 'read';
    private crosssellSelection: number[] = [];

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        await this.$store.dispatch('CrosssellsReader/crosssellsRead', true);
        const crosssells = this.getCrosssells();
        this.touchupsOptions = this.$refs['options-touchups'] as VirtualTouchupOption;
        this.digitalsOptions = this.$refs['options-digitals'] as VirtualDigitalOption;
        this.discountOptions = this.$refs['digitals-discount'] as VirtualDigitalDiscount;

        // TODO: PSFCA-2710 GenericConstraint dont behave as expected, need to be fixed before uncommenting
        // GenericConstraint.create(this.$refs['price-touchups'] as HTMLInputElement,
        //     null, null, [Currency]);
        // GenericConstraint.create(this.$refs['price-digitals'] as HTMLInputElement,
        //     null, null, [Currency]);
        // GenericConstraint.create(this.$refs['price-group-digitals'] as HTMLInputElement,
        //     null, null, [Currency]);

        if (crosssells) {
            this.$nextTick(() => {
                this.dropdownVisible = true;
            })
        }
    }

    /* EVENT HANDLERS */
    private addCrosssellClick(): void {
        this.crudDialogCrosssell = this.$refs['crud-dialog-crosssell'] as CrudDialog<DbCrosssell>;
        this.crudDialogCrosssell.setActivity('crosssells');
        this.crudDialogCrosssell.setColumns(this.crosssell);
        this.crudDialogCrosssell.setCrudDialogStatus('create');
        this.crudDialogCrosssell.openDialog();
        this.crudDialogCrosssellStatus = 'create';
        this.$nextTick(() => {
            this.updateCrosssellCrud();
        });
    }

    private async confirmCrosssell(): Promise<void> {
        if (this.crudDialogCrosssellStatus !== 'create') {
            return;
        }
        const form = this.crudDialogCrosssell;
        const formValues = form.getFields();
        const options = {};
        const values: DbCrosssell = {
            internal_name: formValues['internal_name'],
            options,
            products: formValues['products']
        };

        const result = await this.$store.dispatch('Crosssells/add', { item: values });
        if (result.createdId !== null) {
            this.crosssellSelection = [result.createdId];
            await this.$store.dispatch('CrosssellsReader/crosssellRead', true);
            this.dialogCrosssellClose();
            this.$nextTick(() => {
                this.refreshDropdowns();
            });
        }
    }

    private dialogCrosssellClose(): void {
        this.crudDialogCrosssell.closeDialog();
        this.crudDialogCrosssellStatus = 'read';
    }

    private digitalOptionsEnabled(enabled: boolean): void {
        (this.$refs['digitals-discount'] as VirtualDigitalDiscount).setDigitalDiscountEnabled(enabled);
    }

    private digitalOptionsGroupEnabled(enabled: boolean): void {
        (this.$refs['digitals-discount'] as VirtualDigitalDiscount).setGroupDiscountEnabled(enabled);
    }

    private nextClick(): void {
        const formValues = getFormInputValues(this.$refs['input-container'] as HTMLElement);
        const discountOptions = this.discountOptions.getSelection();
        const digitalsOptions = formValues['virtual-digital-option'] as unknown as VirtualDigitalOptionSelection;
        if (digitalsOptions.enableDigitals && (digitalsOptions.digitalsPrice.length === 0)) {
            globalPrompt({
                title: this.$t('messages.digitalOptionsErrorTitle'),
                message: this.$t('messages.digitalOptionsErrorMessage'),
                buttonType: 'ok',
                icon: ['far', 'faExclamationTriangle']
            });
            return;
        }
        if (digitalsOptions.enableDigitals && digitalsOptions.enableGroupDigitals &&
            digitalsOptions.groupDigitalsPrice.length === 0) {
            globalPrompt({
                title: this.$t('messages.digitalOptionsErrorTitle'),
                message: this.$t('messages.digitalOptionsErrorMessage'),
                buttonType: 'ok',
                icon: ['far', 'faExclamationTriangle']
            });
            return;
        }

        if (digitalsOptions.enableDigitals && discountOptions.enableDiscount &&
            discountOptions.discountCatalog === null) {
            globalPrompt({
                title: this.$t('messages.discountErrorTitle'),
                message: this.$t('messages.discountErrorMessage'),
                buttonType: 'ok',
                icon: ['far', 'faExclamationTriangle']
            });
            return;
        }
        const emptyDiscountPrice = (discountOptions.digitalsDiscount?.length === 0 ||
            discountOptions.digitalsDiscount === null);
        const emptyGroupDiscountPrice = (discountOptions.groupDigitalsDiscount?.length === 0 ||
            discountOptions.groupDigitalsDiscount === null);
        if (digitalsOptions.enableDigitals && discountOptions.enableDiscount &&
            (emptyDiscountPrice && emptyGroupDiscountPrice)) {
            globalPrompt({
                title: this.$t('messages.discountErrorTitle'),
                message: this.$t('messages.discountErrorMessage'),
                buttonType: 'ok',
                icon: ['far', 'faExclamationTriangle']
            });
            return;
        }

        if (this.goToStepClick('product-section', 'shipping-section')) {
            const options: SessionOptions = {
                crosssellId: parseInt(formValues['session-cross-sell'], 10),
                touchupsEnable: this.touchupsOptions.getEnableTouchups(),
                touchupsPrice: this.touchupsOptions.getTouchupsPrice(),
                touchupsPriceIsScaling: this.touchupsOptions.getTouchupsPrice().length > 1,
                digitalEnable: this.digitalsOptions.getEnableDigitals(),
                digitalAutoSendEnable: this.digitalsOptions.getEnableAutoSendDigitals(),
                digitalGroupsEnable: this.digitalsOptions.getEnableGroupDigitals() &&
                    this.digitalsOptions.getDigitalGroupPrice().length > 0,
                digitalPrice: this.digitalsOptions.getDigitalPrice(),
                digitalGroupPrice: this.digitalsOptions.getDigitalGroupPrice(),
                digitalPriceIsScaling: this.digitalsOptions.getDigitalPrice().length > 1,
                digitalGroupPriceIsScaling: this.digitalsOptions.getDigitalGroupPrice().length > 1,
                discountEnable: discountOptions.enableDiscount,
                discountCatalogId: discountOptions.discountCatalog,
                discountPrices: discountOptions.digitalsDiscount,
                discountGroupPrices: discountOptions.groupDigitalsDiscount
            };

            this.$store.dispatch('Sessions/saveOptions', options);
            this.$store.dispatch('Sessions/saveProductCatalogs',
                formValues['selected-catalogs'].map(i => parseInt(i, 10)));
        } else {
            globalToast(this.$t('messages.missingInputs'), 'warning');
        }
    }

    /* PRIVATE */
    private getCrosssells(): ReaderResponse {
        return this.$store.getters['CrosssellsReader/crosssells'];
    }

    private refreshDropdowns() {
        this.dropdownVisible = false;
        this.$nextTick(() => {
            this.dropdownVisible = true;
        })
    }

    private async updateCrosssellCrud(): Promise<void> {
        await this.$store.dispatch('ProductsReader/productsRead');
        const products = this.$store.getters['ProductsReader/products']
            .map(i => ({ id: i.id, value: i.value }));

        const required = [
            {
                id: 'required',
                value: true
            }
        ];

        this.crudDialogCrosssell.update({
            internal_name: GenericDataSource.from<
                DbCrosssell,
                string,
                string,
                boolean
            >(null, 'internal_name', required),
            products: GenericDataSource.from<
                DbCrosssell,
                number[],
                string,
                boolean
            >(null, 'products', products)
        });
    }

    private validateDiscounts(formValues: Record<string, string>): boolean {
        const digitalsOptions = formValues['virtual-digital-option'] as unknown as VirtualDigitalOptionSelection;
        const digitalsDiscount = formValues['virtual-digital-discount'] as unknown as VirtualDigitalDiscountSelection;

        if (!digitalsDiscount.enableDiscount) {
            return true;
        }

        return digitalsOptions.digitalsPrice.length === digitalsDiscount.digitalsDiscount.length &&
            ((digitalsOptions.enableGroupDigitals &&
            digitalsOptions.groupDigitalsPrice.length === digitalsDiscount.groupDigitalsDiscount.length) ||
            !digitalsOptions.enableGroupDigitals);
    }
}
</script>
