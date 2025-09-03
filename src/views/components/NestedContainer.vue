<style lang="scss" scoped>
</style>

<template>
    <component ref="current-component"
               :is="currentComponent()">
        <nested-container v-if="remainingComponents().length > 0"
                          ref="next-component"
                          :components="remainingComponents()"/>
    </component>
</template>

<script lang="ts">
import { Nestable, NestedParameter } from '@pictaccio/admin-gui/views/components/nested_container';
import { Component, Prop, Vue, VueCons } from 'vue-facing-decorator';

@Component({
    name: 'NestedContainer',
    emits: [
        'load'
    ],
    expose: [
        'setData'
    ]
})
export default class NestedContainer<Ttype extends string, Tprops> extends Vue {
    @Prop
    private components: VueCons[];

    public setData<T>(value: T): void {
        if (this.$refs['next-component']) {
            (this.$refs['next-component'] as NestedContainer<Ttype, Tprops>).setData(value);
        } else {
            (this.$refs['current-component'] as Nestable).setData(value);
        }
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.$emit('load', this);
    }

    /* PRIVATE */
    private currentComponent(): VueCons {
        return this.components[0];
    }

    private remainingComponents(): VueCons[] {
        return this.components.slice(1);
    }
}
</script>
