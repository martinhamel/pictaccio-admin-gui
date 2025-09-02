<style lang="scss" scoped>
span {
    width: 100%;
    display: flex;
}
</style>

<template>
    <span :style="{
        alignItems,
        justifyContent,
        alignContent
    }"><slot>{{ data }}</slot></span>
</template>

<script lang="ts">
import {
    DataviewRendererFormatter
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/dataview_renderer_formatter';
import {
    DataviewAlignmentFormatterPropAlignment
} from '@pictaccio/admin-gui/src/views/components/widgets/dataview/renderer/formatter/index';
import { Component, Prop } from 'vue-facing-decorator';

@Component({
    name: 'Dataview Renderer Alignment Formatter'
})
export default class DataviewRendererAlignmentFormatter extends DataviewRendererFormatter {
    @Prop
    private value;
    @Prop
    private alignItems: DataviewAlignmentFormatterPropAlignment = 'center';
    @Prop
    private justifyContent: DataviewAlignmentFormatterPropAlignment = 'center';
    @Prop
    private alignContent: DataviewAlignmentFormatterPropAlignment = 'center';

    /* LIFECYCLE */
    public created(): void {
        if (this.value) {
            this.data = this.value.toString();
        }
    }
}
</script>
