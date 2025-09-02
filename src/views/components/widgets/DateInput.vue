<style lang="scss" scoped>

</style>

<template>
    <input type="date" :value="getValue()">
</template>

<script lang="ts">

import { store } from '@pictaccio/admin-gui/src/store';
import { DateTime } from 'luxon';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'DateLabel'
})
export default class DateLabel extends Vue {
    @Prop
    private date!: Date;

    public getValue(): string {
        return DateTime
            .fromJSDate(this.date)
            .setZone(store.getters['UserPreference/timezone'])
            .toFormat('yyyy-MM-dd');
    }
}
</script>
