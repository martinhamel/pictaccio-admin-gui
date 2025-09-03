<style scoped lang="scss">
</style>

<template>
    <dropdown ref="province-selector"
              :emit-on-mounted="true"
              :dropdownName="'province-selector'"
              :currentSelection="currentSelection"
              :can-unset="false"
              @closed="closed"
              @opened="opened"
              @change="change">
        <label value="qc" data-value="qc">{{ $t('generic.provinces.qc') }}</label>
        <label value="on" data-value="on">{{ $t('generic.provinces.on') }}</label>
        <label value="nl" data-value="nl">{{ $t('generic.provinces.nl') }}</label>
        <label value="pe" data-value="pe">{{ $t('generic.provinces.pe') }}</label>
        <label value="ns" data-value="ns">{{ $t('generic.provinces.ns') }}</label>
        <label value="nb" data-value="nb">{{ $t('generic.provinces.nb') }}</label>
        <label value="mb" data-value="mb">{{ $t('generic.provinces.mb') }}</label>
        <label value="sk" data-value="sk">{{ $t('generic.provinces.sk') }}</label>
        <label value="ab" data-value="ab">{{ $t('generic.provinces.ab') }}</label>
        <label value="bc" data-value="bc">{{ $t('generic.provinces.bc') }}</label>
        <label value="yt" data-value="yt">{{ $t('generic.provinces.yt') }}</label>
        <label value="nt" data-value="nt">{{ $t('generic.provinces.nt') }}</label>
        <label value="nu" data-value="nu">{{ $t('generic.provinces.nu') }}</label>
    </dropdown>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';

@Component({
    components: {
        Dropdown
    },
    emits: [
        'change',
        'closed',
        'opened'
    ],
    expose: [
        'openDropdown',
        'setSelection'
    ]
})
export default class StateDropdown extends Vue {
    @Prop
    private currentSelection: string[];

    public openDropdown(): void {
        (this.$refs['province-selector'] as Dropdown).openDropdown();
    }

    public setSelection(selection: string): void {
        (this.$refs['province-selector'] as Dropdown).setSelection([selection]);
    }

    /* EVENT HANDLERS */
    private change(event): void {
        this.$emit('change', event);
    }

    private closed(): void {
        this.$emit('closed');
    }

    private opened(): void {
        this.$emit('opened');
    }
}
</script>
