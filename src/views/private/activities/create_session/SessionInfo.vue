<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.step-interface {
    width: 100%;
    max-width: 120rem;
    margin-inline: auto;
}

.input-section {
    display: flex;
    flex-direction: column;

    >label {
        gap: 0.2rem;
    }

    input {
        margin-left: unset;
        margin-bottom: calc(#{$grid-gap} / 2);
        &:last-of-type {
            margin-top: 0;
            margin-bottom: auto;
        }
    }

    .side-label {
        --font-weight: 400 !important;
        white-space: nowrap;
    }

    .color-selector {
        display: flex;
        flex-wrap: wrap;
    }

    .color-title {
        width: 100%;
        grid-column: 1 / -1;
    }
}
</style>

<template>
    <div id="session-info" ref="input-container" class="step-interface">
        <crud-dialog ref="crud-dialog-workflow"
                     :permission="'session'"
                     @close="dialogWorkflowClose"
                     @confirm="confirmWorkflow"/>
        <form-validator ref="form">
            <div class="input-section">
                <label>{{ $t('activities.createSession.sessionInfo.sessionName') }}</label>
                <input-formatter-two-columns>
                    <label for="name" class="side-label">
                        <span>{{ $t('generic.ui.name')}}</span>
                        <input id="name" name="name" type="text" required v-model="sessionName">
                    </label>
                </input-formatter-two-columns>
            </div>
            <div class="input-section">
                <label>{{ $t('activities.createSession.sessionInfo.sessionDates') }}</label>
                <input-formatter-two-columns>
                    <label for="date-shoot" class="side-label">
                        <span>{{ $t('activities.createSession.sessionInfo.sessionDate') }}</span>
                        <input id="date-shoot" type="date" name="publish-date" required v-model="publishDate">
                    </label>
                    <label for="date-expire" class="side-label">
                        <span>{{ $t('activities.createSession.sessionInfo.sessionExpirationDate') }}</span>
                        <input id="date-expire" type="date" name="expiration-date" required v-model="expirationDate">
                    </label>
                </input-formatter-two-columns>
            </div>
            <div class="input-section">
                <div class="color-selector">
                    <label class="color-title">
                        {{ $t('activities.createSession.sessionInfo.colorSelector') }}
                        <tooltip :sup="true">
                            <h4 class="h5">{{ $t('activities.createSession.sessionInfo.colorExplanationTitle') }}</h4>
                            <span class="help-text">
                                {{ $t('activities.createSession.sessionInfo.colorExplanation') }}
                            </span>
                        </tooltip>
                    </label>
                    <color-selector ref="color-selector"/>
                </div>
            </div>
            <div class="input-section">
                <label for="session-workflow">
                    {{ $t('activities.createSession.options.workflow') }}
                    <tooltip :sup="true">
                        <h4 class="h5">{{ $t('activities.createSession.options.workflowExplanationTitle') }}</h4>
                        <span class="help-text">
                            {{ $t('activities.createSession.options.workflowExplanation') }}
                        </span>
                    </tooltip>
                </label>
                <dropdown v-if="dropdownVisible"
                          ref="session-workflow"
                          id="session-workflow"
                          name="session-workflow"
                          :required="true"
                          dropdownName="session-workflow"
                          :can-unset="false"
                          :placeholder="$t('dataTable.placeholder.chooseWorkflow')"
                          :current-selection="workflowSelection">
                    <template v-for="workflow in getWorkflows()" :key="workflow">
                        <label :value="workflow.id"
                               :data-value="workflow.value">
                            <span>{{ workflow.value }}</span>
                        </label>
                    </template>
                    <template #add-new-extended>
                        <div v-if="$validateCapability('session:create')" class="link-container">
                            <a @click="addWorkflowClick">
                                {{ $t('activities.workflows.addBtn') }}
                            </a>
                        </div>
                    </template>
                </dropdown>
            </div>
        </form-validator>
    </div>
    <div class="overlay-ui">
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
import { DbWorkflow } from '@pictaccio/admin-gui/src/models/db_workflow';
import { SessionGeneralInfo } from '@pictaccio/admin-gui/src/models/session_general_info';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import FormValidator from '@pictaccio/admin-gui/src/views/components/widgets/FormValidator.vue';
import InputFormatterTwoColumns from '@pictaccio/admin-gui/src/views/components/widgets/InputFormatterTwoColumns.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import CrudDialog from '@pictaccio/admin-gui/src/views/private/activities/companions/CrudDialog.vue';
import {
    WORKFLOWS_COLUMNS
} from '@pictaccio/admin-gui/src/views/private/activities/companions/data_table_columns/workflows_columns';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import CreateSessionsSteps from '@pictaccio/admin-gui/src/views/private/activities/create_session/create_sessions_steps';
import ColorSelector from '@pictaccio/admin-gui/src/views/private/activities/create_session/widgets/ColorSelector.vue';
import { DateTime } from 'luxon';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Session Info',
    components: {
        ColorSelector,
        CrudDialog,
        InputFormatterTwoColumns,
        FormValidator,
        Tooltip,
        DocsLink,
        FontAwesomeIcon,
        Dropdown
    },
    emits: [
        'step-allowed'
    ]
})
export default class SessionInfo extends CreateSessionsSteps {
    private sessionName = '';
    private publishDate = '';
    private expirationDate = '';
    private dropdownVisible = false;

    private crudDialogWorkflow: CrudDialog<DbWorkflow>;
    private workflow = WORKFLOWS_COLUMNS;
    private crudDialogWorkflowStatus: CRUDStatus = 'read';
    private workflowSelection: number[] = [];

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        await this.$store.dispatch('WorkflowsReader/workflowsRead', true);
        const workflows = this.getWorkflows();
        if (workflows) {
            this.$nextTick(() => {
                this.dropdownVisible = true;
            })
        }
    }

    /* EVENT HANDLERS */
    private addWorkflowClick(): void {
        this.crudDialogWorkflow = this.$refs['crud-dialog-workflow'] as CrudDialog<DbWorkflow>;
        this.crudDialogWorkflow.setActivity('workflows');
        this.crudDialogWorkflow.setColumns(this.workflow);
        this.crudDialogWorkflow.setCrudDialogStatus('create');
        this.crudDialogWorkflow.openDialog();
        this.crudDialogWorkflowStatus = 'create';
        this.$nextTick(() => {
            this.updateWorkflowCrud();
        });
    }

    private async confirmWorkflow(): Promise<void> {
        if (this.crudDialogWorkflowStatus !== 'create') {
            return;
        }
        const form = this.crudDialogWorkflow;
        const formValues = form.getFields();

        const values: DbWorkflow = {
            internal_name: formValues['internal_name'],
            options: {
                defaultSessionOptions: {
                    touchupsEnable: false,
                    touchupsPrice: [0],
                    touchupsPriceIsScaling: false,
                    digitalEnable: false,
                    digitalAutoSendEnable: false,
                    digitalGroupsEnable: false,
                    digitalPrice: [0],
                    digitalGroupPrice: [0],
                    digitalPriceIsScaling: false,
                    digitalGroupPriceIsScaling: false,
                    discountEnable: false,
                    discountPrices: [],
                    discountGroupPrices: [],
                    discountCatalogId: null
                }
            }
        };

        const result = await this.$store.dispatch('Workflows/add', { item: values });
        if (result.createdId !== null) {
            this.workflowSelection = [result.createdId];
            await this.$store.dispatch('WorkflowsReader/workflowsRead', true);
            this.dialogWorkflowClose();
            this.$nextTick(() => {
                this.refreshDropdowns();
            });
        }
    }

    private dialogWorkflowClose(): void {
        this.crudDialogWorkflow.closeDialog();
        this.crudDialogWorkflowStatus = 'read';
    }

    private async nextClick(): Promise<void> {
        const inputContainer = this.$refs['input-container'] as HTMLElement;
        const formValues = getFormInputValues(inputContainer);

        const isValid = (this.$refs['form'] as FormValidator).validate();
        if (this.goToStepClick('session-info', 'product-section', isValid)) {
            const colors = (this.$refs['color-selector'] as ColorSelector).getColors();
            const info: SessionGeneralInfo = {
                name: formValues['name'],
                datePublish: DateTime.fromISO(this.publishDate).toJSDate(),
                dateExpire: DateTime.fromISO(this.expirationDate).toJSDate(),
                color: {
                    color1: colors.color1,
                    color2: colors.color2,
                    multipleColors: colors.multipleColors
                },
                workflow: parseInt(formValues['session-workflow'], 10)
            };

            this.$store.dispatch('Sessions/saveGeneralInfo', info);
        }
    }

    /* PRIVATE */
    private getWorkflows(): ReaderResponse {
        return this.$store.getters['WorkflowsReader/workflows'];
    }

    private refreshDropdowns() {
        this.dropdownVisible = false;
        this.$nextTick(() => {
            this.dropdownVisible = true;
        })
    }

    private async updateWorkflowCrud(): Promise<void> {
        const required = [
            {
                id: 'required',
                value: true
            }
        ];

        this.crudDialogWorkflow.update({
            internal_name: GenericDataSource.from<
                DbWorkflow,
                number,
                string,
                boolean
            >(null, 'internal_name', required)
        });
    }
}
</script>
