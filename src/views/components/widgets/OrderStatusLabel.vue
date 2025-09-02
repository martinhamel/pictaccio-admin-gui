<style lang="scss" scoped>

</style>

<template>
    <dropdown ref="status-dropdown"
              :dropdown-name="'order-status'"
              :current-selection="['pending']"
              @change="statusChange">
        <template v-for="status of statuses" :key="status">
            <label :value="status">{{ $t(`order.status.${status}`) }}</label>
        </template>
    </dropdown>
</template>

<script lang="ts">
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import { OrderStatus, OrderStatuses } from '@pictaccio/shared/src/types/order_status';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Order Status',
    components: {
        Dropdown
    },
    emits: [
        'change'
    ],
    expose: [
        'setStatus'
    ]
})
export default class OrderStatusLabel extends Vue {
    private statuses = OrderStatuses;

    public setStatus(status: OrderStatus): void {
        (this.$refs['status-dropdown'] as Dropdown).setSelection([status], false);
    }

    /* EVENT HANDLERS */
    private statusChange(selection): void {
        this.$emit('change', selection.selection);
    }

    /* PRIVATE */
}
</script>
