<style lang="scss" scoped>

</style>

<template>
    <label>{{getDate()}}</label>
</template>

<script lang="ts">

import { DatePart, formatDateForUser } from '@pictaccio/admin-gui/src/utils/user_date';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'DateLabel'
})
export default class DateLabel extends Vue {
    @Prop
    private date!: Date;
    @Prop
    private part!: DatePart;

    public getDate(): string {
        return formatDateForUser(this.date, this.part);
    }
}
</script>
