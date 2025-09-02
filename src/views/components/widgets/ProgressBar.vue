<style lang="scss" scoped>
.progress {
    $progress-height: .5rem;
    position: relative;
    grid-column: 1 / -1;
    height: $progress-height;
    margin-top:0.5rem;
    overflow: hidden;
    border-radius: $ruler-border-radius;
    background-color: var(--color-background-notification-progression-background);
    --color-animated-background-1: var(--color-background-notification-progression-background);
    --color-animated-background-2: var(--color-background-notification-progression);
    background: linear-gradient(98deg,
        var(--color-animated-background-1) 0%,
        var(--color-animated-background-1) 49%,
        var(--color-animated-background-2) 49%,
        var(--color-animated-background-2) 51%,
        var(--color-animated-background-1) 51%,
        var(--color-animated-background-1) 100%
    );
    background-size: 300%;
    background-repeat: no-repeat;
    border: 2px solid var(--color-background-notification-progression-border);
    box-sizing: content-box;
    padding: 0.3rem;
    animation: animated-background 4s infinite linear;

    @include keyframes(animated-background) {
        0% {
            background-position: 100% 0;
        }
        100% {
            background-position: 0% 0;
        }
    }

    &:has(i.done, i.error) {
        background-color: var(--color-background-notification-progression-done);
        animation: none;
    }

    [data-theme-color="dark"] & {
        --color-background-notification-progression-done: var(--color-mix-4-6-step-3);
        --color-background-notification-progression: var(--color-semantic-info);
        --color-background-notification-progression-background: var(--color-mix-5-6-step-2);
        --color-background-notification-progression-border: var(--color-mix-1-6-step-1);
    }
    [data-theme-color="light"] & {
        --color-background-notification-progression-done: var(--color-mix-4-6-step-3);
        --color-background-notification-progression: var(--color-semantic-info);
        --color-background-notification-progression-background: var(--color-mix-5-6-step-2);
        --color-background-notification-progression-border: var(--color-mix-1-6-step-1);
    }

    span {
        font-size: 1rem;
        position: absolute;
        display: none;
        z-index: 1;
        top: 0.6rem;
        left: 0.5rem;
    }
    i {
        position: absolute;
        height: $progress-height;
        background-color: var(--color-background-notification-progression);
        border-radius: $ruler-border-radius-inner;
        mix-blend-mode: lighten;

        &.done {
            background-color: var(--color-background-notification-progression-done);
        }

        &.error {
            background-color: var(--color-semantic-error);
        }
    }
}
</style>

<template>
    <div class="progress">
        <span>{{ progress }}</span>
        <i :style="`width: calc(${progress} * 1% - 6px)`"
           :class="[
                   progress === 100 ? 'done' : '',
                   status
               ]"></i>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'ProgressBar',
    components: {
        FontAwesomeIcon
    },
    emits: [],
    expose: []
})
export default class ProgressBar extends Vue {
    @Prop
    private progress: number;
    @Prop
    private status: string;
    /* LIFECYCLE */
    public created(): void {
        //
    }

    public mounted(): void {
        //
    }

    /* EVENT HANDLER */
    /* PRIVATE */
}
</script>
