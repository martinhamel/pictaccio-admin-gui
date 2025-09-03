<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.step-interface {
    grid-template-columns: 1fr auto !important;

    @include breakpoint($medium-down) {
        grid-template-columns: 1fr !important;
    }
}

.column-attribution {
    order: 1;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: dense;
    grid-auto-rows: min-content;
    gap: #{$grid-gap * 1.2};
    align-items: center;
    overflow: clip;

    label {
        grid-column: 1 / auto;
        margin: 0;
        white-space: nowrap;
    }

    hr {
        width: 150%;
        margin: 0;
        padding: 0;
    }

    .mappings {
        min-width: #{$ruler-input-max-width * 0.6};
        grid-column: 2 / -1;
    }
}

.overlay-ui {
    order: 2;
}

.required-star {
    color: var(--color-semantic-error);
    font-size: 0.5em;
    transform: translate(2px, -3px);
}
</style>

<template>
    <div class="step-interface" ref="input-container">
        <information-box :colors="{border: 'var(--color-semantic-info)'}">
            <p>{{ $t('activities.createSession.importCsv.instructions') }}</p>
        </information-box>
        <information-box v-if="warningMessage"
                         :icon="['fal', 'exclamation-triangle']"
                         :colors="{border: 'var(--color-semantic-error)'}">
            <p>{{ $t(`activities.createSession.importCsv.warnings.${warningMessage}`) }}</p>
        </information-box>
        <fieldset class="column-attribution" ref="column-mappings">
            <template v-for="(subjectColumn, index) in [...requiredColumns, ...optionalColumns]" :key="subjectColumn">
                <label for="csv-input-name" :style="`order: ${index}`">
                    {{ $t(`activities.createSession.importCsv.${camelize(subjectColumn)}`) }}
                    <font-awesome-icon v-if="index <= requiredColumns.length - 1"
                                       class="required-star"
                                       :icon="['fas', 'asterisk']"/>
                </label>
                <div class="mappings" :style="`order: ${index}`">
                    <dropdown v-if="renderComponent"
                              :dropdownName="subjectColumn"
                              :can-unset="false"
                              :placeholder="'--'"
                              :selectMultiple="false"
                              @change="dropdownChange">
                        <template v-if="columns.length > 0">
                            <label v-for="column in columns" :key="column" :value="column" :data-value="column">
                                <span>{{ column }}</span>
                            </label>
                        </template>
                        <template #messageEmpty>
                            <span>{{ $t('activities.createSession.importCsv.emptyDropdown') }}</span>
                        </template>
                    </dropdown>
                </div>

                <hr v-if="index === requiredColumns.length - 1">
            </template>
            <hr>
        </fieldset>
        <!-- Switch to CSV view on file upload-->
        <csv-upload ref="csv-upload" @csv-change="dataChange"/>
        <div class="overlay-ui">
            <button class="btn btn-primary back" @click="createSessionsStepSwitch('subjects', 'options-selection')">
                {{ $t('generic.ui.back') }}
            </button>
            <button class="btn btn-primary next" @click="nextClick">
                {{ $t('generic.ui.next') }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { environment } from '@pictaccio/admin-gui/environment';
import { SubjectInfo } from '@pictaccio/admin-gui/models/subject_info';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import InformationBox from '@pictaccio/admin-gui/views/components/widgets/InformationBox.vue';
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getFormInputValues } from '@loufa/loufairy-client';
import { camelize, isEmpty } from '@loufa/loufairy';
import { SubjectColMappings } from '@pictaccio/admin-gui/core/subject_col_mapping';
import { mapColumns } from '@pictaccio/admin-gui/utils/map_columns';
import CreateSessionsSteps from '@pictaccio/admin-gui/views/private/activities/create_session/create_sessions_steps';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import CsvUpload from '@pictaccio/admin-gui/views/components/widgets/CsvUpload.vue';

@Component({
    name: 'Import Subjects',
    components: {
        InformationBox,
        FontAwesomeIcon,
        CsvUpload,
        Dropdown
    }
})
export default class ImportSubjects extends CreateSessionsSteps {
    private columns: string[] = [];
    private dataUnmapped: Record<string, string>[];
    private renderComponent = true;
    private requiredColumns = [
        'code'
    ];
    private optionalColumns = [
        'firstName',
        'lastName',
        'group',
        'uid'
    ]
    private validCodes = false;
    private warningMessage: string;

    public camelize: (input: string, pascal?: boolean) => string = camelize;

    /* LIFECYCLE */

    /* EVENT HANDLERS */
    private async dataChange(data: Record<string, string>[]): Promise<void> {
        await this.$store.dispatch('Sessions/clearSubjects');
        this.warningMessage = null;
        this.columns = Object.keys(data[0]);
        this.dataUnmapped = data;
        this.forceRerender();
    }

    private dropdownChange(): void {
        this.setDataWhenReady(this.dataUnmapped);
    }

    /* EVENT HANDLERS */
    private async nextClick(): Promise<void> {
        if (this.checkForInvalidColumns()) {
            this.warningMessage = 'invalidColumns';
            await globalPrompt({
                buttonType: 'ok',
                icon: ['', ''],
                message: this.$t('activities.createSession.importCsv.prompts.invalidColumns'),
                title: this.$t('activities.createSession.importCsv.prompts.invalidColumnsTitle')
            });
        } else if (this.warningMessage === 'existingCodes') {
            if (await globalPrompt({
                buttonType: environment.production ? 'ok' : 'ok-cancel',
                icon: ['', ''],
                message: `${this.$t('activities.createSession.importCsv.prompts.existingCodes')}
                ${(!environment.production && environment.features.allowUsedCodes)
                    ? ' ; CANCEL to to continue'
                    : ''}`,
                title: this.$t('activities.createSession.importCsv.prompts.existingCodesTitle')
            }) === 'ok') {
                // pass
            } else {
                this.createSessionsStepSwitch('subjects', 'photos');
            }
        } else if (this.dataUnmapped === undefined || this.dataUnmapped.length === 0) {
            this.warningMessage = 'noData';
            await globalPrompt({
                buttonType: 'ok',
                icon: ['', ''],
                message: this.$t('activities.createSession.importCsv.prompts.noData'),
                title: this.$t('activities.createSession.importCsv.prompts.noDataTitle')
            });
        } else if (!this.validCodes) {
            this.warningMessage = 'invalidCodes';
            await globalPrompt({
                buttonType: 'ok',
                icon: ['', ''],
                message: this.$t('activities.createSession.importCsv.prompts.invalidCodes'),
                title: this.$t('activities.createSession.importCsv.prompts.invalidCodesTitle')
            });
        } else {
            this.warningMessage = null;
            this.createSessionsStepSwitch('subjects', 'photos');
        }
    }

    /* PRIVATE */
    private checkForInvalidColumns(): boolean {
        const mappings = getFormInputValues(this.$refs['column-mappings'] as HTMLElement);
        const requiredMappings = Object.fromEntries(
            Object.entries(mappings).filter(([k, v]) => this.requiredColumns.includes(k)));
        const optionalMappings = Object.fromEntries(
            Object.entries(mappings).filter(([k, v]) => !this.requiredColumns.includes(k)));
        const usedMappings = [];

        if (isEmpty(mappings)) {
            return true;
        }

        if (Object.values(requiredMappings).some(i => { return i === undefined || isEmpty(i); })) {
            return true;
        }

        if (Object.values(mappings).some(i => (usedMappings.includes(i)
            ? true
            : usedMappings.push(i), false))
        ) {
            return true;
        }

        for (const value of Object.values(optionalMappings)) {
            if (value !== undefined && !isEmpty(value)) {
                usedMappings.push(value);
            }
        }

        return !(Object.values(usedMappings).length >= this.requiredColumns.length);
    }

    private forceRerender(): void {
        this.renderComponent = false;
        this.$nextTick(() => {
            this.renderComponent = true;
        });
    }

    private async setDataWhenReady(data: Record<string, string>[]): Promise<void> {
        if (this.checkForInvalidColumns()) {
            return;
        }
        const mappings = getFormInputValues(this.$refs['column-mappings'] as HTMLElement);
        const subjects: SubjectInfo[] = mapColumns(data, mappings as SubjectColMappings);

        try {
            await this.$store.dispatch('Sessions/saveSubjects', { mappings, subjects });
            await this.$store.dispatch('SessionSubjectData/setSubjectData', subjects);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
            return;
        }

        this.validCodes = true;
    }
}
</script>
