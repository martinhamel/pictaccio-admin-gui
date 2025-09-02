<style lang="scss" scoped>
#notification-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 40rem;

    .empty {
        width: 100%;
        height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

<template>
    <div id="notification-container" @click="notificationClicked">
        <template v-for="notification in $store.getters['Notifications/notifications'].reverse()" :key="notification">
            <notification-item :notification="notification"/>
        </template>
        <div v-if="$store.getters['Notifications/notifications'].length === 0" class="empty">
            {{ $t('headerMenu.empty') }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { NotificationItem } from '@pictaccio/admin-gui/src/core/types/notification_item';
import NotificationItemComponent from '@pictaccio/admin-gui/src/views/components/NotificationItem.vue';

@Component({
    name: 'Notification Container',
    components: {
        NotificationItem: NotificationItemComponent,
        FontAwesomeIcon
    },
    emits: [
        'notification-clicked'
    ]
})
export default class NotificationContainer extends Vue {
    /* LIFECYCLE */
    public mounted(): void {
        //
    }

    /* EVENT HANDLERS */
    private notificationClicked() {
        this.$emit('notification-clicked')
    }
}
</script>
