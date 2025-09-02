<style scoped>

</style>

<template>
    <information-box v-show="storeConfigured && !storeConfigured.isReady"
                     :icon="['fal', 'exclamation-triangle']">
        <p v-html="$t(`activities.storeStatus.storeAvailability.configuration.description`)"></p>
        <ul class="configuration-checklist">
            <li><b>{{ $t('activities.storeStatus.storeAvailability.configuration.contact')}}</b>:
                {{ storeConfigured && storeConfigured.features.contactConfigured
                    ? $t('activities.storeStatus.storeAvailability.configuration.configured')
                    : $t('activities.storeStatus.storeAvailability.configuration.notConfigured') }}</li>
            <li><b>{{ $t('activities.storeStatus.storeAvailability.configuration.customization')}}</b>:
                {{ storeConfigured && storeConfigured.features.customizationConfigured
                    ? $t('activities.storeStatus.storeAvailability.configuration.configured')
                    : $t('activities.storeStatus.storeAvailability.configuration.notConfigured') }}</li>
            <li><b>{{ $t('activities.storeStatus.storeAvailability.configuration.languages')}}</b>:
                {{ storeConfigured && storeConfigured.features.languageConfigured
                    ? $t('activities.storeStatus.storeAvailability.configuration.configured')
                    : $t('activities.storeStatus.storeAvailability.configuration.notConfigured') }}</li>
            <li><b>{{ $t('activities.storeStatus.storeAvailability.configuration.payment')}}</b>:
                {{ storeConfigured && storeConfigured.features.paymentConfigured
                    ? $t('activities.storeStatus.storeAvailability.configuration.configured')
                    : $t('activities.storeStatus.storeAvailability.configuration.notConfigured') }}</li>
            <li><b>{{ $t('activities.storeStatus.storeAvailability.configuration.taxes')}}</b>:
                {{ storeConfigured && storeConfigured.features.taxesConfigured
                    ? $t('activities.storeStatus.storeAvailability.configuration.configured')
                    : $t('activities.storeStatus.storeAvailability.configuration.notConfigured') }}</li>
        </ul>
    </information-box>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import { StoreConfigurationStatus } from '@pictaccio/shared/src/types/store_status';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'StoreAvailabilityInfo',
    components: {
        InformationBox,
        FontAwesomeIcon
    },
    emits: [
    ],
    expose: [
    ]
})
export default class StoreAvailabilityInfo extends Vue {
    private storeConfigured: StoreConfigurationStatus = null;

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        this.$store.watch(() => this.$store.getters['StoreStatus/storeConfigured'],
            () => {
                this.storeConfigured = this.$store.getters['StoreStatus/storeConfigured'];
            });
        try {
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }
}
</script>
