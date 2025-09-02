<style lang="scss" scoped>
.label {
    position: relative;
    margin: 0;

    .value {
        display: block;
        width: 100%;
        white-space: nowrap;
        cursor: pointer;
        pointer-events: all;

        &:empty {
            &:before {
                content: '—';
            }
        }
    }

    .input {
        position: absolute;
        width: unset !important;
        z-index: 99;
        inset: 0 0 0 -1.5rem;
    }
}
.debug {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    padding: 0.5rem;
    z-index: 100;
}
</style>

<template>
    <label ref="state-label" class="label">
        <span class="value" @click="editLabel">
            {{ $t(`generic.provinces.${value}`) }}
        </span>
        <span class="input" v-show="dropdownVisible" ref="input">
            <state-dropdown ref="state-dropdown"
                            @closed="dropdownClosed"
                            @change="confirmClick"/>
        </span>
    </label>
</template>

<script lang="ts">
import StateDropdown from '@pictaccio/admin-gui/src/views/components/widgets/StateDropdown.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'State Selector',
    emits: [
        'update-value'
    ],
    components: {
        StateDropdown,
        FontAwesomeIcon
    }
})
export default class StateSelector extends Vue {
    @Prop
    private inputName: string;
    @Prop
    private permission?: string;
    private value = '';
    private dropdownVisible = false;
    private settingValue = true;

    public setValue(value: string): void {
        this.value = value;
        (this.$refs['state-dropdown'] as StateDropdown).setSelection(this.value);
    }

    /* LIFECYCLE */
    /* EVENT HANDLERS */
    private confirmClick(event): void {
        if (this.settingValue) {
            return;
        }
        this.value = event.selection;
        this.$emit('update-value', this.value);
        this.dropdownVisible = false;
    }

    private editLabel(): void {
        this.dropdownVisible = true;
        this.$nextTick(() => {
            (this.$refs['state-dropdown'] as StateDropdown).openDropdown();
        });
    }

    private dropdownClosed(): void {
        this.dropdownVisible = false;
    }
}
</script>
