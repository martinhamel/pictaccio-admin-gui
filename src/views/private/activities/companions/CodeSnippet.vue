<style lang="scss" scoped>
.code-snippet-container {
    position: relative;
    margin: 0;

    &:hover {
        .copy {
            opacity: 1;
        }
    }
}

.code-snippet {
    width: 100%;
    max-height: $ruler-input-max-width;
    min-height: calc(#{$ruler-input-height} + 1rem);
    border-radius: $ruler-border-radius;
    background-color: var(--color-input-background);
    color: var(--color-text-normal);
    padding: 0.5rem 0 1rem 2rem;
    overflow: auto;
    border-style: solid;
    border-width: 3px;
    border-color: var(--color-input-border);
}

.copy {
    position: absolute;
    opacity: 0;
    right: 0.5rem;
    top: 0.5rem;
    transition-duration: 0.3s;
    transition-property: opacity;
}
</style>

<template>
    <div class="code-snippet-container">
        <pre class="code-snippet" ref="code-snippet"><slot/></pre>
        <button class="btn btn-primary copy"
                @click="copyText($refs['code-snippet'])">
            {{ $t(`generic.ui.copy`) }}
        </button>
    </div>
</template>

<script lang="ts">
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import TextGeneric from '@pictaccio/admin-gui/views/private/activities/companions/crud_dialog_components/TextGeneric.vue';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Code Snippet',
    components: {
        TextGeneric,
        FontAwesomeIcon
    }
})
export default class CodeSnippet extends Vue {
    /* LIFECYCLE */
    /* PRIVATE */
    /* EVENT HANDLER */
    private copyText(element): void {
        const range = document.createRange();
        range.selectNodeContents(element);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        navigator.clipboard.writeText(range.toString())
            .then(() => globalToast(this.$t('generic.ui.textCopied'), 'success'))
            .catch(() => globalToast(this.$t('generic.ui.textFailedCopy'), 'warning'));
        selection.removeAllRanges();
    }
}
</script>
