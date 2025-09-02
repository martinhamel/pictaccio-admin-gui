<style lang="scss" scoped>
.help-container {
    display: flex;
    justify-content: center;

    .info-icon {
        padding: .7rem 2rem;
        cursor: pointer;
        color: var(--color-text-normal);

        &:hover {
        }

        > svg {
            margin-left: 0.3rem;
        }
    }
}

.docs-text {
    font-size: 1.5rem;
    width: max-content;
    display: block;
    &:hover {
        text-decoration-line: underline;
    }
}
</style>

<template>
    <div class="help-container">
        <span ref="info-icon"
              class="btn btn-tertiary info-icon"
              @click="helpClick()"
              @mouseover="toggleBubble(true)"
              @mouseout="toggleBubble(false)">
            {{ $t('generic.ui.help') }}
            <font-awesome-icon :icon="['far', 'circle-info']"
                               class="text-sup"/>
        </span>
        <tooltip-bubble v-if="bubbleVisible"
                     :hasSideMenu="true"
                     ref="infoBubble"
                     :element="infoBubble"
                     :spacing="{ top:5 }">
            <span class="docs-text">
                {{ $t('generic.ui.documentation') }}
            </span>
        </tooltip-bubble>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TooltipBubble from '@pictaccio/admin-gui/src/views/components/widgets/TooltipBubble.vue';

@Component({
    name: 'Docs link',
    components: {
        FontAwesomeIcon,
        TooltipBubble
    }
})

export default class DocsLink extends Vue {
    private path = location.pathname;
    private directories = this.path.split('/');
    @Prop
    private activity: string;
    private infoBubble: Node;
    private bubbleVisible = false;

    /* LIFECYCLE */
    public mounted(): void {
        this.infoBubble = this.$refs['info-icon'] as Node;
    }

    /* EVENT HANDLERS */
    private helpClick(): void {
        //toDo replace www.pictaccio-app.com by ${this.config.environment}
        window.open(`https://www.pictaccio-app.com/${this.$i18n.locale}/docs/${this.activity}`, '_blank');
    }

    private toggleBubble(visible: boolean): void {
        this.bubbleVisible = visible;
        if (this.bubbleVisible) {
            this.$nextTick(() => { (this.$refs['infoBubble'] as TooltipBubble).setPosition('top') });
        }
    }
}
</script>
