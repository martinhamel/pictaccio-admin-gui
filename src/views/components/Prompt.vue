<style lang="scss" scoped>
    .global-prompt {
        position: fixed;
        width: fit-content;
        height: min-content;
        max-height: 100vh;
        z-index: 90000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color-background-overlay-prompt-1);
        border: 2px solid var(--color-border-overlay-prompt);
        padding: 2rem;
        border-radius: $ruler-border-radius;

        [data-theme-color="dark"] & {
            --color-border-overlay-prompt: var(--color-semantic-warning);
            --color-background-overlay-prompt-1: var(--color-mix-5-6-step-2);
            --color-background-overlay-prompt-2: var(--color-mix-6-4-step-3);
        }
        [data-theme-color="light"] & {
            --color-border-overlay-prompt: var(--color-semantic-warning);
            --color-background-overlay-prompt-1: var(--color-mix-7-5-step-1);
            --color-background-overlay-prompt-2: var(--color-mix-7-5-step-2);
        }

        .overlay-ui {
            display: flex;
            justify-content: flex-end;
            margin-top: 1rem;
            gap: 0.5rem;
        }

        .title {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;

            .icon {
                font-size: 4.5rem;
            }
        }

        .body {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 2rem;

            p {
                :deep(.prompt-user-string) {
                    width: 100%;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    background: var(--color-background-overlay-prompt-2);
                    white-space: pre-wrap;
                    margin-block: 1rem;
                    max-height: 30rem;
                    overflow-y: auto;
                }
            }
        }
    }
    .global-prompt-backdrop {
        position: fixed;
        inset: 0;
        z-index: 85000;
        background-color: var(--color-background-overlay-prompt-2);
        opacity: 0.5;
    }
</style>

<template>
    <div v-if="$store.getters['Prompt/visible']" class="global-prompt">
        <h2 class="title">
            {{ $store.getters['Prompt/title'] }}
            <font-awesome-icon v-if="$store.getters['Prompt/icon'] !== undefined"
                               class="icon"
                               :icon="$store.getters['Prompt/icon']"/>
        </h2>
        <div class="body">
            <p v-if="$store.getters['Prompt/html'] === false">{{ $store.getters['Prompt/message'] }}</p>
            <p v-else v-html="$store.getters['Prompt/message']"></p>
        </div>
        <div class="overlay-ui">
            <button v-if="['ok-cancel', 'yes-no-cancel'].includes($store.getters['Prompt/buttonType'])"
                    class="btn btn-quaternary"
                    @click="cancelClick">
                {{ $t('generic.ui.cancel') }}
            </button>
            <button v-if="['ok', 'ok-cancel'].includes($store.getters['Prompt/buttonType'])"
                    class="btn btn-primary"
                    @click="okClick">{{ $t('generic.ui.ok') }}</button>
            <button v-if="['yes-no', 'yes-no-cancel'].includes($store.getters['Prompt/buttonType'])"
                    class="btn btn-secondary"
                    @click="noClick">
                {{ $t('generic.ui.no') }}
            </button>
            <button v-if="['yes-no', 'yes-no-cancel'].includes($store.getters['Prompt/buttonType'])"
                    class="btn btn-primary"
                    @click="yesClick">
                {{ $t('generic.ui.yes') }}
            </button>
        </div>
    </div>
    <div v-if="$store.getters['Prompt/visible']" class="global-prompt-backdrop"></div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Prompt',
    components: {
        FontAwesomeIcon
    }
})
export default class Prompt extends Vue {
    private cancelClick(): void {
        this.$store.dispatch('Prompt/resolve', 'cancel');
    }

    private noClick(): void {
        this.$store.dispatch('Prompt/resolve', 'no');
    }

    private okClick(): void {
        this.$store.dispatch('Prompt/resolve', 'ok');
    }

    private yesClick(): void {
        this.$store.dispatch('Prompt/resolve', 'yes');
    }
}
</script>
