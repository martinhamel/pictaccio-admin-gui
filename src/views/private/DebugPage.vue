<style lang="scss" scoped>
#debug {
    width: 100%;
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    padding: 3rem 6rem;
    gap: 1rem;
}
.testing-area {
    width: 100%;
    grid-column: 1 / -1;
    background-color: var(--color-background-page-2);
    padding: 1rem;
    border-radius: $ruler-border-radius;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;

    &.span-all {
        grid-column: 1 / -1;
    }

    @for $i from 1 through 10 {
        &.span-#{$i} {
            grid-column: span $i / auto;
        }
    }

    &.short {
        grid-row: span 1 / auto;
    }
    &.medium {
        grid-row: span 2 / auto;
    }
    &.long {
        grid-row: span 3 / auto;
    }

    &.color-test {
        position: relative;
        order: 10;
        background-color: black;
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        padding-top: 5rem;
        gap: 2rem;

        h3 {
            position: absolute;
            top: 1rem;
        }
    }

    h3 {
        width: 100%;
    }

    h4 {
        margin: 0;
    }
}
</style>

<template>
    <div id="debug">
        <div class="testing-area span-4 short" ref="notification-container">
            <h3>Notification Service</h3>
            <button class="btn btn-primary" @click="notificationServiceTestBase">Base</button>
            <button class="btn btn-primary" @click="notificationServiceTestProgress">Progress</button>
            <button class="btn btn-primary" @click="notificationServiceTestProgressError">Progress Error</button>
            <button class="btn btn-primary" @click="notificationServiceTestAutoDismiss">Auto dismiss</button>
            <button class="btn btn-primary" @click="notificationServiceTestHasStop">Has stop</button>
            <button class="btn btn-primary" @click="notificationServiceTestHasStopDismiss">Has stop & dismiss</button>
            <button class="btn btn-primary" @click="notificationServiceTestHasAnimate">Has animate</button>
        </div>
        <div class="testing-area span-4 short">
            <h3>Feedback messages</h3>
            <button class="btn btn-primary" @click="showFeedbackClick('warning')">warning</button>
            <button class="btn btn-primary" @click="showFeedbackClick('info')">info</button>
            <button class="btn btn-primary" @click="showFeedbackClick('success')">success</button>
            <button class="btn btn-primary" @click="showFeedbackClick('error')">error</button>
        </div>
        <div class="testing-area span-4 long">
            <h3>Dropdowns</h3>
            <h4>normal</h4>
            <dropdown ref="dropdown-normal"
                      :dropdownName="'normal'"
                      :placeholder="'normal'"
                      @change="displayDropdownInfo">
                <template v-for="option in dropdownTest" :key="option">
                    <label :value="option.value" :data-value="option.name">
                        <span>{{ option.name }}</span>
                    </label>
                </template>
            </dropdown>
            <h4>allowAddNew</h4>
            <dropdown ref="dropdown-allowAddNew"
                      :dropdownName="'allowAddNew'"
                      :allow-add-new="true"
                      :placeholder="'allow add new'"
                      @change="displayDropdownInfo">
                <template v-for="option in dropdownTest" :key="option">
                    <label :value="option.value" :data-value="option.name">
                        <span>{{ option.name }}</span>
                    </label>
                </template>
            </dropdown>
            <h4>noPlaceholder</h4>
            <dropdown ref="dropdown-noPlaceholder"
                      :dropdownName="'noPlaceholder'"
                      @change="displayDropdownInfo">
                <template v-for="option in dropdownTest" :key="option">
                    <label :value="option.value" :data-value="option.name">
                        <span>{{ option.name }}</span>
                    </label>
                </template>
            </dropdown>
            <h4>currentSelection</h4>
            <dropdown ref="dropdown-currentSelection"
                      :dropdownName="'currentSelection'"
                      :current-selection="['test-3']"
                      :placeholder="'current Selection'"
                      @change="displayDropdownInfo">
                <template v-for="option in dropdownTest" :key="option">
                    <label :value="option.value" :data-value="option.name">
                        <span>{{ option.name }}</span>
                    </label>
                </template>
            </dropdown>
            <h4>selectMultiple</h4>
            <dropdown ref="dropdown-selectMultiple"
                      :dropdownName="'selectMultiple'"
                      :current-selection="['test-1', 'test-3']"
                      :select-multiple="true"
                      :placeholder="'select Multiple'"
                      @change="displayDropdownInfo">
                <template v-for="option in dropdownTest" :key="option">
                    <label :value="option.value" :data-value="option.name">
                        <span>{{ option.name }}</span>
                    </label>
                </template>
            </dropdown>
            <button class="btn btn-primary" @click="getDropdownValues">Get dropdown values</button>
        </div>
        <div class="testing-area span-4 short">
            <h3>Background jobs</h3>
            <button class="btn btn-primary" @click="launchSessionJob">Launch Session Job</button>
        </div>
        <div class="testing-area span-2 short">
            <h3>Reset tutorials</h3>
            <button class="btn btn-primary" @click="resetTutorialsClick">Reset</button>
        </div>
        <div class="testing-area span-2 short">
            <h3>Global prompt</h3>
            <button class="btn btn-primary" @click="showPrompt">Show Prompt</button>
        </div>
        <div class="testing-area span-2 short">
            <h3>Color Distance</h3>
            <div :style="{backgroundColor: colorDistanceInput1, padding: '1rem 2rem'}">
                <span :style="{
                    color: colorDistanceInput2,
                    backgroundColor: this.colorDistance() < 20 ? 'var(--color-text-normal-reversed)' : 'transparent',
                }">{{ this.colorDistance() }}</span>
            </div>
            <br>
            <span>
                <input type="color" id="color-distance-input-1" v-model="colorDistanceInput1">
                <input type="color" id="color-distance-input-2" v-model="colorDistanceInput2">
            </span>
        </div>
        <div class="testing-area span-4 short">
            <h3>API Push Notification</h3>
            <button class="btn btn-primary" @click="pushNotificationToUser">Push to Current User</button>
            <button class="btn btn-primary" @click="pushNotificationToAdmins">Push to Admins</button>
            <button class="btn btn-primary" @click="pushNotificationWithProductLink">Push with product link</button>
        </div>
        <div class="testing-area span-2 short">
            <h3>Test un-authenticated</h3>
            <button class="btn btn-primary" @click="pretendUnauthenticated">Test</button>
        </div>
        <div class="testing-area span-6 short">
            <h3>Badge Input</h3>
            <badge-input :badge-input-placeholder="'Enter tags here'"/>
        </div>
<!--        <div class="testing-area span-6 long">-->
<!--            <h3>Test Timeline</h3>-->
<!--            <button class="btn"-->
<!--                    :class="timelineDates['start-date'] ? 'btn-primary' : 'btn-secondary'"-->
<!--                    @click="timelineToggleStartDate">Start</button>-->
<!--            <button class="btn"-->
<!--                    :class="timelineDates['end-date'] ? 'btn-primary' : 'btn-secondary'"-->
<!--                    @click="timelineToggleEndDate">End</button>-->
<!--            <timeline-form activity="shippingOptions"-->
<!--                           :start-date="timelineDates['start-date']"-->
<!--                           :end-date="timelineDates['end-date']"-->
<!--                           prefix="establishment"-->
<!--                           :dates="timelineDates">-->
<!--                <template #establishment-date-late-fields>-->
<!--                    <div>-->
<!--                        <label>-->
<!--                            {{ $t(`activities.shippingOptions.options.lateFees`) }}-->
<!--                            <tooltip :sup="true">-->
<!--                                <span class="help-text">-->
<!--                                    {{ $t(`activities.shippingOptions.options.lateFeesExplanation`) }}-->
<!--                                </span>-->
<!--                            </tooltip>-->
<!--                        </label>-->
<!--                        <span class="unit-input-container">-->
<!--                            <input type="text"-->
<!--                                   name="late-fee">-->
<!--                            <unit-decorator :unit="$t(`generic.units.dollar`)"/>-->
<!--                        </span>-->
<!--                    </div>-->
<!--                </template>-->
<!--            </timeline-form>-->
<!--        </div>-->
        <div class="testing-area span-2 short">
            <h3>Input Constraint</h3>
            <label for="input-constrain-tel">Telephone</label>
            <input type="tel" id="input-constrain-tel" ref="input-constrain-tel"/>
            <label for="input-constrain-constrain">Constrain</label>
            <input type="text" id="input-constrain-constrain" ref="input-constrain-constrain"/>
            <label for="input-constrain-tel">Price</label>
            <input type="tel" id="input-constrain-price" ref="input-constrain-price"/>
        </div>
        <div class="testing-area span-2 short">
            <h3>Regional Date</h3>
            <date-label :date="new Date(1707388138000)" part="full"></date-label>
            <date-input :date="new Date(1707388138000)"></date-input>
            <date-time-input :date="new Date(1707388138000)"></date-time-input>
        </div>
        <div class="testing-area span-all long color-test">
            <h3>Test color</h3>
            <ul style="max-height: 50rem; overflow: auto;">
                <template v-for="color in getRootCSSVariables()" :key="color">
                    <li style="display: flex; padding: 1rem; gap: 1rem; font-size: 1.6rem; cursor: pointer; color: white"
                        :style="`border: 2px solid ${color === variableColor ? 'white' : 'transparent'}`"
                        @click="selectVariableColor(color)">
                        <div :style="`background-color: var(${color})`"
                             style="width: 2rem; height: 2rem;"></div>
                        <span>{{ color }}</span>
                    </li>
                </template>
            </ul>
            <div>
                <div style="width: 20rem; height: 10rem;" :style="`background-color: var(${variableColor})`"></div>
                <label style="width: 20rem; height: 10rem; display: block"
                       :style="`background-color: ${colorPickerColor}`" for="color-picker"></label>
                <input type="color"
                       class="btn"
                       style="opacity: 0"
                       id="color-picker"
                       v-model="colorPickerColor">
            </div>
        </div>
        <div class="testing-area span-2 short">
            <p>{{ $tc('test.plural', 0)}}</p>
            <p>{{ $tc('test.plural', 1)}}</p>
            <p>{{ $tc('test.plural', 10, {count: 10})}}</p>
        </div>
        <div class="testing-area span-4 short">
            <h3>Run server background jobs</h3>
            <button v-for="job in jobs" :key="job" class="btn btn-primary" @click="runJobClick(job)">
                {{ job }}
            </button>
        </div>
        <div class="testing-area span-2 short">
            <h3>Get DB Queries</h3>
            <button class="btn btn-primary" @click="getDbQueries">Get Queries</button>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import appService from '@pictaccio/admin-gui/services/app_service';
import localStorageService from '@pictaccio/admin-gui/services/local_storage_service';
import notificationService from '@pictaccio/admin-gui/services/notification_service';
import websocketService from '@pictaccio/admin-gui/services/websocket_service';
import { store } from '@pictaccio/admin-gui/store';
import { Currency } from '@pictaccio/admin-gui/utils/constraint_behaviors/currency';
import { GenericConstraint } from '@pictaccio/admin-gui/utils/generic_constraint';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { JobWorker } from '@pictaccio/admin-gui/utils/job_worker';
import BadgeInput from '@pictaccio/admin-gui/views/components/widgets/BadgeInput.vue';
import DateInput from '@pictaccio/admin-gui/views/components/widgets/DateInput.vue';
import DateLabel from '@pictaccio/admin-gui/views/components/widgets/DateLabel.vue';
import DateTimeInput from '@pictaccio/admin-gui/views/components/widgets/DateTimeInput.vue';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import TimelineForm from '@pictaccio/admin-gui/views/components/widgets/TimelineForm.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import UnitDecorator from '@pictaccio/admin-gui/views/components/widgets/UnitDecorator.vue';
import Color from 'colorjs.io';
import { Component, Vue } from 'vue-facing-decorator';
import PrepareSessionAndUpload from 'worker-loader!@pictaccio/admin-gui/jobs/workers/prepare_session_and_upload.worker';

@Component({
    name: 'DebugPage',
    components: {
        DateTimeInput,
        DateInput,
        DateLabel,
        BadgeInput,
        TimelineForm,
        UnitDecorator,
        Tooltip,
        FontAwesomeIcon,
        Dropdown
    }
})
export default class DebugPage extends Vue {
    private dropdownTest = [
        { name: 'Test 1', value: 'test-1' },
        { name: 'Test 2', value: 'test-2' },
        { name: 'Test 3', value: 'test-3' },
        { name: 'Test 4', value: 'test-4' }
    ];
    private jobs: string[];

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'debug');
        this.jobs = await appService.debugGetJobs();
    }

    public mounted(): void {
        this.$emit('menu-visible', true);
        this.$emit('current-activity', 'debug');

        // Function needing initialization
        this.inputConstraint();
    }

    /* EVENTS HANDLERS */
    /* Notification Service */
    private notificationServiceTestAutoDismiss(): void {
        const notification = notificationService.pushNotification({
            title: 'Auto dismiss',
            message: 'Removed after some time',
            hasProgress: false,
            hasStop: false,
            hasClose: false
        });
        setTimeout(() => notification.dismiss(), Math.floor(5000 + Math.random() * 5000));
    }
    private notificationServiceTestBase(): void {
        notificationService.pushNotification({
            title: 'Base',
            message: 'Basic notification',
            hasProgress: false,
            hasStop: false,
            hasClose: true
        });
    }

    private async notificationServiceTestHasAnimate(): Promise<void> {
        await store.dispatch('Notifications/openNotification');
        notificationService.pushNotification({
            title: 'Base',
            message: 'Basic notification',
            hasProgress: false,
            hasStop: false,
            hasClose: true,
            animate: true,
            animationSource: this.$refs['notification-container'] as HTMLElement
        });
    }

    private notificationServiceTestHasStop(): void {
        const notification = notificationService.pushNotification({
            title: 'Has Stop',
            message: 'Can be stopped',
            hasProgress: false,
            hasStop: true,
            hasClose: false
        });
        notification.on('stop-requested', () => globalToast('Stop has been requested', 'info'));
    }

    private notificationServiceTestHasStopDismiss(): void {
        const notification = notificationService.pushNotification({
            title: 'Has Stop & Dismiss',
            message: 'Can be stopped',
            hasProgress: false,
            hasStop: true,
            hasClose: true
        });
        notification.on('stop-requested', () => globalToast('Stop has been requested', 'info'));
    }

    private notificationServiceTestProgress(): void {
        const progression = () => {
            notification.progress += 5;
            if (notification.progress < 100) {
                setTimeout(progression, 2000);
            }
        };
        const notification = notificationService.pushNotification({
            title: 'Progress',
            message: 'Notification with artificial progress',
            hasProgress: true,
            hasStop: false,
            hasClose: false
        });
        setTimeout(progression, 2000);
    }

    private notificationServiceTestProgressError(): void {
        const progression = () => {
            notification.progress += 5;
            if (notification.progress < 15) {
                setTimeout(progression, 2000);
            } else {
                notification.status = 'error';
                notification.message = 'Error';
            }
        };
        const notification = notificationService.pushNotification({
            title: 'Progress',
            message: 'Notification with artificial progress',
            hasProgress: true,
            hasStop: false,
            hasClose: false
        });
        setTimeout(progression, 2000);
    }

    /* Feedback messages */
    private showFeedbackClick(level): void {
        switch (level) {
        case 'success':
            globalToast('Success', 'success');
            break;
        case 'error':
            globalToast('Error', 'error');
            break;
        case 'info':
            globalToast('Info', 'info');
            break;
        case 'warning':
            globalToast('Warning', 'warning');
            break;
        }
    }

    /* Background jobs */
    private launchSessionJob(): void {
        const test = new JobWorker(new PrepareSessionAndUpload());
        test.send('test', { data: 'test' });
    }

    /* Dropdown info */
    private displayDropdownInfo(event): void {
        const name = event.target.dropdownName;
        const text = event.selection?.toString();
        globalToast(`Dropdown ${name} = ${text}`, 'info');
    }

    private getDropdownValues(): void {
        globalToast(
            `Dropdowns
            \n normal: ${(this.$refs['dropdown-normal'] as Dropdown).getSelection()}
            \n allowAddNew: ${(this.$refs['dropdown-allowAddNew'] as Dropdown).getSelection()}
            \n noPlaceholder: ${(this.$refs['dropdown-noPlaceholder'] as Dropdown).getSelection()}
            \n currentSelection: ${(this.$refs['dropdown-currentSelection'] as Dropdown).getSelection()}
            \n selectMultiple: ${(this.$refs['dropdown-selectMultiple'] as Dropdown).getSelection()}
            `, 'info');
    }

    /* Global Prompt */
    private async showPrompt(): Promise<void> {
        globalToast(await globalPrompt({
            buttonType: 'ok',
            icon: ['fal', 'times'],
            message: 'Message ok prompt',
            title: 'Title ok'
        }), 'info');
        globalToast(await globalPrompt({
            buttonType: 'ok-cancel',
            icon: ['fal', 'times'],
            message: 'Message ok-cancel prompt',
            title: 'Title ok-cancel'
        }), 'info');
        globalToast(await globalPrompt({
            buttonType: 'yes-no',
            icon: ['fal', 'times'],
            message: 'Message yes-no prompt',
            title: 'Title yes-no'
        }), 'info');
    }

    /* API Push Notification */
    private pushNotificationToAdmins(): void {
        websocketService.requestPushNotificationToRoles({
            title: { en: 'Test Push To Admins', fr: 'Test Push To Admins' },
            message: { en: 'Only admins see this', fr: 'Only admins see this' },
            hasProgress: false,
            hasStop: false,
            hasClose: true
        }, ['admin', 'super-admin']);
    }

    private pushNotificationToUser(): void {
        websocketService.requestPushNotificationToUser({
            title: { en: 'Test Push To Current User', fr: 'Test Push To Current User' },
            message: { en: 'Only Current User can see this', fr: 'Only Current User can see this' },
            hasProgress: false,
            hasStop: false,
            hasClose: true
        }, store.getters['Auth/user'].id);
    }

    private pushNotificationWithProductLink(): void {
        websocketService.requestPushNotificationToUser({
            title: { en: 'Test push products', fr: 'Test push products' },
            message: {
                en: 'Test push products id list and link to product page with filters',
                fr: 'Test push products id list and link to product page with filters'
            },
            hasProgress: false,
            hasStop: false,
            hasClose: true,
            linkPath: '/activities/products?filter-id=58,66',
            linkText: { en: 'Click', fr: 'Click' }
        }, store.getters['Auth/user'].id);
    }

    /* Test Unauthenticated */
    private pretendUnauthenticated(): void {
        this.$store.commit('App/commitAuthenticated', false);
    }

    /* Timeline */
    private timelineDates = {
        'start-date': '2022-12-17',
        'establishment-date-late-fields': '2023-03-17',
        'establishment-date-expire-fields': '2023-06-17',
        'establishment-date-eta-fields': '2023-07-17',
        'end-date': '2024-12-17'
    };

    private timelineToggleStartDate(): void {
        if (!this.timelineDates['start-date']) {
            this.timelineDates['start-date'] = '2022-12-17';
        } else {
            this.timelineDates['start-date'] = null;
        }
    }

    private timelineToggleEndDate(): void {
        if (!this.timelineDates['end-date']) {
            this.timelineDates['end-date'] = '2024-12-17';
        } else {
            this.timelineDates['end-date'] = null;
        }
    }

    /* Colors */
    private variableColor = '--color-primary-1';
    private colorPickerColor: string;

    private getRootCSSVariables(): string[] {
        const cssVariables = [];
        const styles = Array.from(document.styleSheets)
            .map(i => Array.from(i.cssRules))
            .flat()
            .filter(i => i['selectorText']?.startsWith(':root'))
            .map(i => i['style'])
            .map(i => Object.values(i))
            .flat()
            .filter(i => {
                const vcss = i.toString();
                return (vcss.startsWith('--color-primary-') || vcss.startsWith('--color-mix-')) &&
                    (!vcss.endsWith('h') && !vcss.endsWith('s') && !vcss.endsWith('l'));
            })
            .map(i => !cssVariables.includes(i) ? cssVariables.push(i) : '');

        return cssVariables;
    }
    private selectVariableColor(color: string) {
        this.variableColor = color;
    }

    /* Reset Tutorials */
    private resetTutorialsClick(): void {
        localStorageService.set('tutorials', JSON.stringify({}));
    }

    /* Input constraint */
    private inputConstraint(): void {
        GenericConstraint.create(this.$refs['input-constrain-tel'] as HTMLInputElement, 'phone-na');
        GenericConstraint.create(this.$refs['input-constrain-price'] as HTMLInputElement,
            null, null, [Currency]);
        GenericConstraint.create(this.$refs['input-constrain-constrain'] as HTMLInputElement, null, 'alphanumericEx');
    }

    /* Color Distance */
    private colorDistanceInput1 = '#000000';
    private colorDistanceInput2 = '#ffffff';

    private colorDistance(): number {
        const color1 = new Color(this.colorDistanceInput1);
        const color2 = new Color(this.colorDistanceInput2);
        // return distance(color1, color2);
        return color1.contrast(color2, 'APCA');
    }

    /* Jobs */
    private runJobClick(job: string): void {
        appService.debugRunJob(job);
    }

    /* Get DB Queries */
    private async getDbQueries(): Promise<void> {
        const queries = await appService.debugGetDbQueries();
        console.log(queries.reduce((grouped, query) => {
            const timestamp = new Date((query.triggerType === 'http-request' ||
                    query.triggerType === 'internal-request')
                ? query.httpRequestTrigger.timestamp
                : query.triggerType === 'socket-request'
                    ? query.socketRequestTrigger.startTime
                    : query.triggerType === 'pubsub'
                        ? query.pubsubContextTrigger.startTime
                        : query.jobContextTrigger.startTime).getTime();
            const key = (query.triggerType === 'http-request' || query.triggerType === 'internal-request')
                ? `${timestamp} ${query.triggerType === 'http-request' ? 'http' : 'http-internal'} ` +
                    `${query.httpRequestTrigger.method} ` +
                    `${query.httpRequestTrigger.url} ${query.httpRequestTrigger.correlationId ?? ''}`.trim()
                : query.triggerType === 'socket-request'
                    ? `${timestamp} socketio ${query.socketRequestTrigger.id}`
                    : query.triggerType === 'pubsub'
                        ? `${timestamp} pubsub ${query.pubsubContextTrigger.channel}`
                        : `${timestamp} job ${query.jobContextTrigger.jobName} ${query.jobContextTrigger.jobId}`;

            if (!grouped[key]) {
                grouped[key] = [];
            }

            grouped[key].push(query);
            return grouped;
        }, {}));
    }
}
</script>
