<style lang="scss" scoped>
span {
    font-size: 1.4rem;
}
</style>

<template>
    <span><slot>{{ data }}</slot></span>
</template>

<script lang="ts">
import {
    DataviewRendererFormatter
} from '@pictaccio/admin-gui/views/components/widgets/dataview/renderer/formatter/dataview_renderer_formatter';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Dataview Renderer String Formatter'
})
export default class DataviewRendererStringFormatter extends DataviewRendererFormatter {
}
</script>
