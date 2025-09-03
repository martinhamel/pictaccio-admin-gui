<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/activities';

.overlay-ui {
    position: absolute;
    inset: auto 2rem 2rem auto;
    display: flex;
    justify-content: flex-end;
    gap: $grid-gap;

    .btn {
        filter: brightness(1.2);
    }
}

.configuration-checklist {
    margin-bottom: 0;
}

.public-infos {
    display: flex;
    flex-direction: column;
    grid-column: 1/-1;
    gap: 1rem;

    &.disabled {
        opacity: 0.7;
        pointer-events: none;
    }

    .phone-number {
        display: grid;
        grid-template-columns: min-content auto;
        gap: 1rem;

        .h6 {
            grid-column: 1/-1;
        }

        >span {
            white-space: nowrap;
            display: contents;

            b, span {
                grid-column: span 1 / auto;
            }
        }
    }

    .ui-control {
        display: flex;
        gap: 1rem;
    }
}
</style>

<template>
    <div class="activity-control">
        <h2 class="h5">{{ $t(`activities.storeStatus.storeAvailability.title`) }}</h2>
        <store-availability-info/>
        <div class="public-infos" :class="[!storeConfigured || !storeConfigured.isReady ? 'disabled' : '']">
            <div>
                <h3 class="h6">
                    {{ $t(`activities.storeStatus.storeAvailability.label`) }}:
                    <span>
                        <span v-if="!storeStatus.shutdown && storeConfigured && storeConfigured.isReady">
                            {{ $t(`activities.storeStatus.storeAvailability.status.open`) }}
                        </span>
                        <span v-else>
                            {{ $t(`activities.storeStatus.storeAvailability.status.closed`) }}
                        </span>
                    </span>
                </h3>
                <div class="ui-control">
                    <button class="btn text-large"
                            :class="!storeStatus.shutdown && storeConfigured && storeConfigured.isReady
                                ? 'btn-secondary' : 'btn-primary destructive'"
                            @click="changeStoreAvailability">
                        <span v-if="!storeStatus.shutdown && storeConfigured && storeConfigured.isReady">
                            {{ $t('activities.storeStatus.storeAvailability.button.close') }}
                        </span>
                        <span v-else>
                            {{ $t('activities.storeStatus.storeAvailability.button.open') }}
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <textarea ref="shutdown-message"
                          name="shutdown-message"
                          cols="60"
                          rows="10"
                          @keyup="shutdownMessageKeyup"></textarea>
            </div>
        </div>
    </div>
    <div class="overlay-ui" :class="unsavedChange ? '' : 'disabled'">
        <button class="btn btn-quaternary" @click="cancelClick">
            {{ $t(`generic.ui.revert`) }}
        </button>
        <button class="btn btn-primary" @click="saveStoreMessage">
            {{ $t(`generic.ui.update`) }}
        </button>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { StoreStatusObject } from '@pictaccio/admin-gui/core/types/store_status';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import InformationBox from '@pictaccio/admin-gui/views/components/widgets/InformationBox.vue';
import StoreAvailabilityInfo from '@pictaccio/admin-gui/views/components/widgets/StoreAvailabilityInfo.vue';
import AdminActivities from '@pictaccio/admin-gui/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import { StoreConfigurationStatus } from '@pictaccio/shared/types/store_status';
import { escapeString } from '@pictaccio/shared/utils/escape_string';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Store Status',
    components: {
        StoreAvailabilityInfo,
        InformationBox,
        FontAwesomeIcon,
        DocsLink
    }
})
export default class StoreStatus extends AdminActivities {
    private storeConfigured: StoreConfigurationStatus = null;
    private storeStatus: StoreStatusObject = {
        shutdown: false,
        message: ''
    }

    /* LIFECYCLE */
    public beforeMount(): void {
        this.checkStoreConfigured();
        this.updateStatus();
    }

    /* PRIVATE */
    private cancelClick(): void {
        this.updateStatus();
        this.unsavedChange = false;
    }

    private async changeStoreAvailability(): Promise<void> {
        const message = (this.$refs['shutdown-message'] as HTMLTextAreaElement).value;
        if (this.$validateCapability('store-config:delete') &&
            await globalPrompt({
                buttonType: 'yes-no',
                icon: ['', ''],
                message: this.$t('activities.storeStatus.storeAvailability.prompt.message', {
                    action: this.storeStatus.shutdown
                        ? this.$t('activities.storeStatus.storeAvailability.button.open')
                        : this.$t('activities.storeStatus.storeAvailability.button.close'),
                    showMessage: !this.storeStatus.shutdown
                        ? this.$t('activities.storeStatus.storeAvailability.prompt.shutdownMessage', {
                            message: escapeString(message)
                        })
                        : '',
                    interpolation: {
                        escapeValue: false
                    }
                }),
                title: this.$t('activities.storeStatus.storeAvailability.prompt.title', {
                    action: this.storeStatus.shutdown
                        ? this.$t('activities.storeStatus.storeAvailability.button.open')
                        : this.$t('activities.storeStatus.storeAvailability.button.close')
                }),
                html: true
            }) === 'yes') {
            try {
                await this.$store.dispatch('StoreStatus/changeStoreStatus', {
                    shutdown: !this.storeStatus.shutdown,
                    message: message
                });
                await this.updateStatus();
                globalToast(this.$t('messages.saveSuccess'), 'success');
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error')
            }
        }
    }

    private saveStoreMessage(): void {
        const message = (this.$refs['shutdown-message'] as HTMLTextAreaElement).value;
        try {
            this.$store.dispatch('StoreStatus/changeStoreStatus', {
                shutdown: this.storeStatus.shutdown,
                message: message
            });
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    private shutdownMessageKeyup(event: KeyboardEvent): void {
        (event.target as HTMLTextAreaElement).value !== this.storeStatus.message
            ? this.unsavedChange = true
            : this.unsavedChange = false;
    }

    /* PRIVATE */
    private async checkStoreConfigured(): Promise<void> {
        try {
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');
            this.storeConfigured = this.$store.getters['StoreStatus/storeConfigured'];
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async updateStatus(): Promise<void> {
        try {
            await this.$store.dispatch('StoreStatus/readStoreStatus');
            this.storeStatus = this.$store.getters['StoreStatus/storeStatus'];
            (this.$refs['shutdown-message'] as HTMLTextAreaElement).value = this.storeStatus.message;
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }
}
</script>
