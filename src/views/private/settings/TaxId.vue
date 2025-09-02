<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.overlay-ui {
    position: absolute;
    inset: auto 2rem 2rem auto;
    display: flex;
    justify-content: flex-end;
    gap: $grid-gap;
}

.tax-id-container {
    grid-column: 1/-1;
}

.tax-value-form {
    margin-top: $grid-gap;
    display: flex;
    flex-direction: column;
    gap: #{$grid-gap * 2};

    .province-label {
        margin: 0;
    }

    .tax-id-fieldset {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: $grid-gap;
        align-items: center;
        max-width: $ruler-input-max-width;
        padding-left: 2rem;

        > legend {
            grid-column: 1/-1;
            margin: 0 0 1rem;
        }

        > span {
            display: contents;

            input {
                margin: 0;
            }

            label {
                margin: 0;
                padding: 0;
                --font-weight: 400;
            }
        }

        .tax-rate {
            input {
                width: 10rem;
            }
        }
    }
}
</style>

<template>
    <div class="activity-control">
        <h2 class="h5">{{ $t(`activities.taxId.title`) }}</h2>
        <div class="tax-id-container">
            <information-box :colors="{border: 'var(--color-semantic-info)'}">
                {{ $t(`activities.taxId.manage.infos.explanation`) }}
            </information-box>
            <form class="tax-value-form" prevent-submit="true">
                <div>
                    <label class="province-label">{{ $t('generic.province') }}</label>
                    <StateDropdown ref="province-tax-select" @change="provinceChange"/>
                </div>
                <fieldset class="tax-id-fieldset">
                    <legend>{{ $t(`activities.taxId.manage.ui.legendFederal`) }} ({{ taxLevel1Name }})</legend>
                    <span class="tax-rate">
                        <label for="tax-rate-level1">{{ $t('activities.taxId.manage.ui.taxValue') }}</label>
                        <unit-decorator-wrapper :unit="'%'">
                            <input class="fused-input"
                                   type="text"
                                   ref="tax-rate-level1"
                                   id="tax-rate-level1"
                                   @change="taxRateLevel1Change">
                        </unit-decorator-wrapper>
                    </span>
                    <span>
                        <label for="tax-id-level1">{{ $t('activities.taxId.manage.ui.taxId') }}</label>
                        <input type="text"
                               ref="tax-id-level1"
                               id="tax-id-level1"
                               @change="taxIdLevel1Change">
                    </span>
                </fieldset>
                <fieldset v-show="isTaxLevel2Visible" class="tax-id-fieldset">
                    <legend>
                        {{ $t(`activities.taxId.manage.ui.legendProvincial`) }} ({{ taxLevel2Name }})
                    </legend>
                    <span class="tax-rate">
                        <label for="tax-rate-level2">{{ $t('activities.taxId.manage.ui.taxValue') }}</label>
                        <unit-decorator-wrapper :unit="'%'">
                            <input class="fused-input"
                                   type="text"
                                   ref="tax-rate-level2"
                                   id="tax-rate-level2"
                                   @change="taxRateLevel2Change">
                        </unit-decorator-wrapper>
                    </span>
                    <span>
                        <label for="tax-id-level2">{{ $t('activities.taxId.manage.ui.taxId') }}</label>
                        <input type="text"
                               ref="tax-id-level2"
                               id="tax-id-level2"
                               @change="taxIdLevel2Change">
                    </span>
                </fieldset>
            </form>
        </div>
    </div>
    <div class="overlay-ui" :class="unsavedChange ? '' : 'disabled'">
        <button class="btn btn-quaternary" @click="cancelClick">
            {{ $t(`generic.ui.revert`) }}
        </button>
        <button class="btn btn-primary" @click="saveTaxIdClick">
            {{ $t(`generic.ui.update`) }}
        </button>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import StateDropdown from '@pictaccio/admin-gui/src/views/components/widgets/StateDropdown.vue';
import UnitDecorator from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecorator.vue';
import UnitDecoratorWrapper from '@pictaccio/admin-gui/src/views/components/widgets/UnitDecoratorWrapper.vue';
import { bignumber, multiply } from 'mathjs';
import { Component } from 'vue-facing-decorator';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import PaneContainer from '@pictaccio/admin-gui/src/views/components/PaneContainer.vue';
import { TaxLocality } from '@pictaccio/admin-gui/src/models/store_config';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';

@Component({
    name: 'TaxId',
    components: {
        UnitDecoratorWrapper,
        UnitDecorator,
        InformationBox,
        StateDropdown,
        FontAwesomeIcon,
        PaneContainer,
        DocsLink
    }
})
export default class TaxIdActivity extends AdminActivities {
    private taxData = {
        GST: {
            rate: 'taxRateGst',
            id: 'taxIdGst'
        },
        PST: {
            rate: 'taxRatePst',
            id: 'taxIdPst'
        },
        HST: {
            rate: 'taxRateHst',
            id: 'taxIdHst'
        },
        QST: {
            rate: 'taxRateQst',
            id: 'taxIdQst'
        },
        ab: {
            level1: 'GST',
            level2: false,
            locality: TaxLocality.Alberta
        },
        bc: {
            level1: 'GST',
            level2: 'PST',
            locality: TaxLocality.BritishColumbia
        },
        mb: {
            level1: 'GST',
            level2: 'PST',
            locality: TaxLocality.Manitoba
        },
        nb: {
            level1: 'HST',
            level2: false,
            locality: TaxLocality.NewBrunswick
        },
        nl: {
            level1: 'HST',
            level2: false,
            locality: TaxLocality.NewfoundlandAndLabrador
        },
        nt: {
            level1: 'GST',
            level2: false,
            locality: TaxLocality.NorthwestTerritories
        },
        ns: {
            level1: 'HST',
            level2: false,
            locality: TaxLocality.NovaScotia
        },
        nu: {
            level1: 'GST',
            level2: false,
            locality: TaxLocality.Nunavut
        },
        on: {
            level1: 'HST',
            level2: false,
            locality: TaxLocality.Ontario
        },
        pe: {
            level1: 'HST',
            level2: false,
            locality: TaxLocality.PrinceEdwardIsland
        },
        qc: {
            level1: 'GST',
            level2: 'QST',
            locality: TaxLocality.Quebec
        },
        sk: {
            level1: 'GST',
            level2: 'PST',
            locality: TaxLocality.Saskatchewan
        },
        yt: {
            level1: 'GST',
            level2: false,
            locality: TaxLocality.Yukon
        }
    }
    private storeConfigWatcher: () => void;
    private taxLocality: string;

    public canSafelyExit(): boolean {
        const taxRateLevel1 = this.$refs['tax-rate-level1'] as HTMLInputElement;
        const taxRateLevel2 = this.$refs['tax-rate-level2'] as HTMLInputElement;
        const taxIdLevel1 = this.$refs['tax-id-level1'] as HTMLInputElement;
        const taxIdLevel2 = this.$refs['tax-id-level2'] as HTMLInputElement;

        return this.storeConfigTaxLevel1Rate === taxRateLevel1.value &&
            this.storeConfigTaxLevel2Rate === taxRateLevel2.value &&
            this.storeConfigTaxLevel1Id === taxIdLevel1.value &&
            this.storeConfigTaxLevel2Id === taxIdLevel2.value &&
            this.taxLocality === this.$store.getters['StoreConfig/storeConfig']?.taxLocality?.toString()?.substring(3);
    }

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('StoreConfig/createStoreConfig');
        this.taxLocality =
            this.$store.getters['StoreConfig/storeConfig']?.taxLocality?.toString()?.substring(3);
        this.resetFields();

        this.storeConfigWatcher =
            this.$store.watch(() => this.$store.getters['StoreConfig/storeConfig'], () => {
                this.taxLocality =
                    this.$store.getters['StoreConfig/storeConfig']?.taxLocality?.toString()?.substring(3);
                this.resetFields();
            });

        try {
            await this.$store.dispatch('StoreConfig/loadStoreConfig');
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    public async beforeUnmount(): Promise<void> {
        this.storeConfigWatcher();
    }

    /* EVENT HANDLERS */
    private async cancelClick(): Promise<void> {
        this.$store.dispatch('StoreConfig/createStoreConfig');
        this.resetFields();
    }

    private async saveTaxIdClick(): Promise<void> {
        try {
            await this.$store.dispatch('StoreConfig/commitStoreConfig');
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    private async provinceChange(state): Promise<void> {
        this.taxLocality = state.selection;
        if (this.taxData[this.taxLocality]) {
            await this.$store.dispatch('StoreConfig/setStoreConfig',
                { key: 'taxLocality', value: this.taxData[this.taxLocality].locality });
            this.updateFields();
        }
        this.inputChange();
    }

    private async taxRateLevel1Change(): Promise<void> {
        const taxLevel1 = this.taxData[this.taxLocality]?.level1;
        const value = multiply(bignumber((this.$refs['tax-rate-level1'] as HTMLInputElement).value), 0.01).toString();
        this.inputChange();
        await this.$store.dispatch('StoreConfig/setStoreConfig', { key: this.taxData[taxLevel1].rate, value });
    }

    private async taxRateLevel2Change(): Promise<void> {
        const taxLevel2 = this.taxData[this.taxLocality]?.level2;
        const value = multiply(bignumber((this.$refs['tax-rate-level2'] as HTMLInputElement).value), 0.01).toString();
        this.inputChange();
        await this.$store.dispatch('StoreConfig/setStoreConfig', { key: this.taxData[taxLevel2].rate, value });
    }

    private async taxIdLevel1Change(): Promise<void> {
        const taxLevel1 = this.taxData[this.taxLocality]?.level1;
        const value = (this.$refs['tax-id-level1'] as HTMLInputElement).value;
        this.inputChange();
        await this.$store.dispatch('StoreConfig/setStoreConfig', { key: this.taxData[taxLevel1].id, value });
    }

    private async taxIdLevel2Change(): Promise<void> {
        const taxLevel2 = this.taxData[this.taxLocality]?.level2;
        const value = (this.$refs['tax-id-level2'] as HTMLInputElement).value;
        this.inputChange();
        await this.$store.dispatch('StoreConfig/setStoreConfig', { key: this.taxData[taxLevel2].id, value });
    }

    private async updateClick(): Promise<void> {
        try {
            await this.$store.dispatch('StoreConfig/commitStoreConfig');
            globalToast(this.$t('messages.saveSuccess'), 'success');
            (this.$refs['tax-id-pane'] as PaneContainer).close();
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    /* PRIVATE */
    private get isTaxLevel2Visible(): boolean {
        return this.taxData[this.taxLocality]?.level2 !== false;
    }

    private get isStoreConfigTaxLevel2Visible(): boolean {
        return this.taxData[this.taxLocality]?.level2 !== false;
    }

    private get storeConfigTaxLevel1Id(): string {
        return this.$store.getters['StoreConfig/storeConfig'][
            this.taxData[
                this.taxData[this.taxLocality]?.level1
            ]?.id
        ] || '';
    }

    private get storeConfigTaxLevel2Id(): string {
        return this.$store.getters['StoreConfig/storeConfig'][
            this.taxData[
                this.taxData[this.taxLocality]?.level2
            ]?.id
        ] || '';
    }

    private get storeConfigTaxLevel1Name(): string {
        return this.taxData[this.taxLocality]?.level1 || '';
    }

    private get storeConfigTaxLevel2Name(): string {
        return this.taxData[this.taxLocality]?.level2 || '';
    }

    private get storeConfigTaxLevel1Rate(): string {
        const rate = parseFloat(this.$store.getters['StoreConfig/storeConfig'][
            this.taxData[
                this.taxData[this.taxLocality]?.level1
            ]?.rate
        ]);

        if (!rate) {
            return '';
        }

        return multiply(bignumber(rate), 100).toString();
    }

    private get storeConfigTaxLevel2Rate(): string {
        const rate = parseFloat(this.$store.getters['StoreConfig/storeConfig'][
            this.taxData[
                this.taxData[this.taxLocality]?.level2
            ]?.rate
        ]);

        if (!rate) {
            return '';
        }

        return multiply(bignumber(rate), 100).toString();
    }

    private get taxLevel1Id(): string {
        return this.storeConfigTaxLevel1Id;
    }

    private get taxLevel2Id(): string {
        return this.storeConfigTaxLevel2Id;
    }

    private get taxLevel1Name(): string {
        return this.taxData[this.taxLocality]?.level1 || '';
    }

    private get taxLevel2Name(): string {
        return this.taxData[this.taxLocality]?.level2 || '';
    }

    private get taxLevel1Rate(): string {
        return this.storeConfigTaxLevel1Rate;
    }

    private get taxLevel2Rate(): string {
        return this.storeConfigTaxLevel2Rate;
    }

    /* PRIVATE */
    private resetFields(): void {
        const provinceSelectElement = this.$refs['province-tax-select'] as StateDropdown;
        let provinceSelected = this.taxLocality;

        if (!provinceSelected) {
            provinceSelected = 'qc';
        }

        provinceSelectElement.setSelection(provinceSelected);

        this.updateFields();
    }

    private updateFields(): void {
        const taxRateLevel1 = this.$refs['tax-rate-level1'] as HTMLInputElement;
        const taxRateLevel2 = this.$refs['tax-rate-level2'] as HTMLInputElement;
        const taxIdLevel1 = this.$refs['tax-id-level1'] as HTMLInputElement;
        const taxIdLevel2 = this.$refs['tax-id-level2'] as HTMLInputElement;

        taxRateLevel1.value = this.storeConfigTaxLevel1Rate;
        taxRateLevel2.value = this.storeConfigTaxLevel2Rate;
        taxIdLevel1.value = this.storeConfigTaxLevel1Id;
        taxIdLevel2.value = this.storeConfigTaxLevel2Id;

        this.inputChange();
    }
}
</script>
