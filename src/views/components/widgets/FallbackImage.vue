<style lang="scss" scoped>
img {
    width: 100%;
}
.image-container {
    font-size: 2rem;
}
.image-tooltip-container {
    display: contents;

    :deep(.help-container) {
        display: flex;
        margin: auto;

        .info-icon-span {
            margin-left: 0;
        }
    }
}
</style>

<template>
    <span class="image-tooltip-container">
        <tooltip :prevent-tooltip="() => !alt">
            <template #trigger>
                <div class="image-container">
                    <template v-if="!loaded">
                        <img v-if="typeof fallback === 'string'" :src="fallback">
                        <font-awesome-icon v-else :icon="[...fallback]"/>
                    </template>
                    <img v-show="loaded" :src="src" @load="loaded = true">
                </div>
            </template>
            <template #default>
                {{ alt }}
            </template>
        </tooltip>
    </span>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'FallbackImage',
    components: {
        Tooltip,
        FontAwesomeIcon
    }
})
export default class FallbackImage extends Vue {
    @Prop
    private src!: string;
    @Prop
    private fallback!: string | [string, string];
    @Prop
    private alt: string;

    private loaded = false;
}
</script>
