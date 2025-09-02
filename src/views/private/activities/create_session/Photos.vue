<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.step-interface {
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr auto !important;

    [data-theme-color="dark"] & {
        --color-text-upload-icon: var(--color-mix-4-6-step-3);
        --color-text-upload-icon-hover: var(--color-primary-4);
    }

    [data-theme-color="light"] & {
        --color-text-upload-icon: var(--color-mix-1-7-step-3);
        --color-text-upload-icon-hover: var(--color-primary-1);
    }
}

.photo-upload-drop {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 35rem;
    cursor: pointer;

    &.drag-over,
    &:not(.has-images),
    &:not(.has-images):hover {
        .upload-label {
            display: flex;
        }
    }

    .upload-label {
        display: none;
        position: absolute;
        inset: 50% auto auto 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        font-size: 1.4rem;
        --font-weight: 500;
        color: var(--color-text-upload-icon);
        transition-duration: 0.3s;
        padding: 1rem;
        cursor: pointer;
        margin: auto;

        &:hover {
            color: var(--color-text-upload-icon-hover);
        }

        .upload-icon {
            font-size: 9rem;
        }
    }
}

.btn-icon {
    @extend .disabled;

    height: $ruler-input-height;
    padding: 0.7rem;
    color: var(--color-text-normal);

    :deep(.spinners-holder) {
        --spinner-size: #{$ruler-input-height - 14px};
        height: var(--spinner-size);
        width: var(--spinner-size);
    }
}
</style>

<template>
    <div class="step-interface" ref="input-container">
        <div class="photo-upload-drop"
             ref="photo-upload-drop"
             @drop="imageDrop"
             @dragover="imageDragOver"
             @dragleave="imageDragLeave"
             @click="imageUploadClick"
             :class="[isDragOver ? 'drag-over' : '',
                hasImages ? 'has-images' : '']">
            <session-preview ref="session-preview"/>
            <label class="upload-label">
                <font-awesome-icon :icon="['far', 'file-upload']" class="upload-icon"/>
                <span>{{ $t('generic.ui.upload.photos') }}</span>
            </label>
        </div>
        <div class="overlay-ui">
            <button class="btn btn-primary back" @click="createSessionsStepSwitch('photos', 'subjects')">
                {{ $t('generic.ui.back') }}
            </button>
            <confirmation-button ref="save-btn"
                                 class="next"
                                 @click="saveSessionClick">
                {{ $t('generic.ui.save') }}
            </confirmation-button>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import storeConfigService from '@pictaccio/admin-gui/src/services/store_config_service';
import ConfirmationButton from '@pictaccio/admin-gui/src/views/components/widgets/ConfirmationButton.vue';
import { toRaw } from 'vue';
import { Component } from 'vue-facing-decorator';
import notificationService from '@pictaccio/admin-gui/src/services/notification_service';
import { store } from '@pictaccio/admin-gui/src/store';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { JobWorker } from '@pictaccio/admin-gui/src/utils/job_worker';
import { PhotoProcessor } from '@pictaccio/admin-gui/src/utils/photo_processor';
import ImageUpload from '@pictaccio/admin-gui/src/views/components/widgets/ImageUpload.vue';
import Spinner from '@pictaccio/admin-gui/src/views/components/widgets/Spinner.vue';
import CreateSessionsSteps from '@pictaccio/admin-gui/src/views/private/activities/create_session/create_sessions_steps';
import ShippingSection from '@pictaccio/admin-gui/src/views/private/activities/create_session/ShippingSection.vue';
import SessionInfo from '@pictaccio/admin-gui/src/views/private/activities/create_session/SessionInfo.vue';
import SessionPreview from '@pictaccio/admin-gui/src/views/private/activities/create_session/SessionPreview.vue';
import PrepareSessionAndUpload from 'worker-loader!@pictaccio/admin-gui/src/jobs/workers/prepare_session_and_upload.worker';

@Component({
    name: 'Photos',
    components: {
        ConfirmationButton,
        Spinner,
        FontAwesomeIcon,
        ImageUpload,
        OptionsSelection: ShippingSection,
        SessionInfo,
        SessionPreview
    }
})
export default class Photos extends CreateSessionsSteps {
    private isDragOver = false;
    private photoProcessor: PhotoProcessor;
    private uploadWorker: JobWorker;
    private imageUploadHolderRef: HTMLElement;
    private hasImages = false;
    private saveClicked = false;

    /* LIFECYCLE */
    public created(): void {
        this.photoProcessor = new PhotoProcessor();
        this.uploadWorker = new JobWorker(new PrepareSessionAndUpload());

        this.$store.watch(
            () => this.$store.getters['Sessions/subjects'],
            () => {
                this.photoProcessor.clear();
                this.hasImages = false;
                (this.$refs['session-preview'] as SessionPreview).clear();
            }
        );
    }

    public mounted(): void {
        this.imageUploadHolderRef = this.$refs['input-container'] as HTMLElement;
    }

    /* EVENT HANDLERS */
    private verifyInfo(): boolean {
        if (this.$refs['validateSessionInfo'] && this.$refs['validateProductCatalogs'] &&
            this.$refs['validateShippingGroups']) {
            return true;
        } else {
            throw new Error('Some inputs were not filled. Please go back and complete the forms to proceed.')
        }
    }

    private imageDragLeave(event): void {
        this.isDragOver = false;
    }

    private imageDragOver(event): void {
        event.preventDefault();
        this.isDragOver = true;
    }

    private imageDrop(event): void {
        event.preventDefault();
        this.photoProcessor.process(event.dataTransfer.files);
        this.isDragOver = false;
        (this.$refs['session-preview'] as SessionPreview)
            .update(this.photoProcessor.photos, this.photoProcessor.unmatchedReport, this.photoProcessor.totalReport);
        this.hasImages = true;
    }

    private imageSelected(event): void {
        this.photoProcessor.process(event.target.files);
        (this.$refs['session-preview'] as SessionPreview)
            .update(this.photoProcessor.photos, this.photoProcessor.unmatchedReport, this.photoProcessor.totalReport);
        this.imageUploadHolderRef.querySelector('input[id="upload-photo-input"]').remove();
        this.hasImages = true;
    }

    private imageUploadClick(): void {
        const input = document.createElement('input');

        input.type = 'file';
        input.id = 'upload-photo-input'
        input.multiple = true;
        input.addEventListener('change', this.imageSelected);

        this.imageUploadHolderRef.appendChild(input);
        (this.imageUploadHolderRef.querySelector('input[id="upload-photo-input"]') as HTMLInputElement).click();
    }

    private async saveSessionClick(event): Promise<void> {
        this.saveClicked = true;
        const storeConfigured = await storeConfigService.isStoreConfigured();

        if (!storeConfigured || !storeConfigured.isReady) {
            globalToast(this.$t('messages.storeNotConfigured'), 'error');
            this.$router.push({ name: 'Manage Sessions' });
        }

        try {
            await this.$store.dispatch('Sessions/save');

            const sessionId = this.$store.getters['Sessions/sessionId'];

            if (!sessionId) {
                this.saveClicked = false;
                (this.$refs['save-btn'] as ConfirmationButton)?.setProcessing(false);
                globalToast(this.$t('messages.requestError'), 'error');
                return;
            }

            this.uploadWorker.send('set-session-id', sessionId);
            this.uploadWorker.send('add-images', toRaw(this.photoProcessor.photos));
            this.uploadWorker.send('process-and-upload');

            const notification = notificationService.pushNotification({
                title: this.$t('activities.createSession.notification.title'),
                message: this.$store.getters['Sessions/generalInfo'].name[this.$i18n.locale],
                hasProgress: true,
                hasStop: false,
                hasClose: false,
                animate: true,
                animationSource: this.$refs['input-container'] as HTMLElement
            });
            notification.progressFrom(this.uploadWorker);
            await store.dispatch('Notifications/openNotification');
            await this.$store.dispatch('UploadStatus/trackUpload', { sessionId, notification });

            globalToast(this.$t('messages.uploadStarted'), 'info');

            this.$route.meta['canSafelyExit'] = true;
            this.$nextTick(() => this.$router.push({
                name: 'View subjects',
                params: { sessionId }
            }));
        } catch (e) {
            this.saveClicked = false;
            (this.$refs['save-btn'] as ConfirmationButton)?.setProcessing(false);
            globalToast(this.$t('messages.requestError'), 'error');
        }
    }

    /* PRIVATE */
}
</script>
