<style lang="scss" scoped>

</style>

<template>
    <input type="datetime-local" :value="getValue()">
</template>

<script lang="ts">

import { store } from '@pictaccio/admin-gui/src/store';
import { DateTime } from 'luxon';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'DateLabel'
})
export default class DateTimeLabel extends Vue {
    @Prop
    private date!: Date;

    public getValue(): string {
        return DateTime
            .fromJSDate(this.date)
            .setZone(store.getters['UserPreference/timezone'])
            .toFormat('yyyy-MM-dd hh:mm:ss');
    }
}
</script>
