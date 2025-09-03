import { createValidator } from '@loufa/loufairy-client';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import DialogBox from '@pictaccio/admin-gui/views/components/layout/DialogBox.vue';
import { ComponentBase, Vue } from 'vue-facing-decorator';

const SESSION_STEPS = [
    'session-info',
    'product-section',
    'shipping-section',
    'import-subjects',
    'photos'
]

@ComponentBase({
    emits: [
        'go-to-step'
    ]
})
export default class CreateSessionsSteps extends Vue {
    private boundWindowPopState: (event: any) => void;

    public closeDialog(dialog: string): void {
        // @ts-ignore
        (this.$refs[dialog] as DialogBox).closeDialog();
    }

    /**
     * Emit which step has been requested to be displayed
     * @param previousStep
     * @param step string in STEPS_INTERFACE in CreateSession.vue
     */
    public createSessionsStepSwitch(previousStep: string, step: string, skipSave = false): void {
        if (SESSION_STEPS.includes(step)) {
            this.$emit('go-to-step', step);
            if (!skipSave) {
                this.saveState(previousStep, step);
            }
        } else {
            console.warn('Invalid step');
        }
    }

    public goToStepClick(previousStep: string, step: string, validation = true): boolean {
        if (validation) {
            this.$emit('step-allowed', step);

            this.createSessionsStepSwitch(previousStep, step);
        } else {
            switch (step) {
                case 'info':
                    globalToast(this.$t('messages.missingInputs'), 'warning');
                    break;
                case 'options':
                    globalToast(this.$t('messages.missingWorkflow'), 'warning');
                    break;
                default:
                    globalToast(this.$t('messages.missingInputs'), 'warning');
                    break;
            }
            return false;
        }
        return true;
    }

    public openDialog(dialog: string): void {
        // @ts-ignore
        (this.$refs[dialog] as DialogBox).openDialog();
    }

    /* LIFECYCLE */
    public activated(): void {
        this.boundWindowPopState = this.windowPopState.bind(this);
        window.addEventListener('popstate', this.boundWindowPopState);
    }

    public deactivated(): void {
        window.removeEventListener('popstate', this.boundWindowPopState);
    }

    /* EVENT HANDLERS */
    private windowPopState(event): void {
        this.createSessionsStepSwitch(event.state.fromStep, event.state.name, true);
    }

    /* PRIVATE */
    private saveState(fromStep: string, stateName: string): void {
        history.pushState({ name: stateName, fromStep }, stateName, null);
    }
}
