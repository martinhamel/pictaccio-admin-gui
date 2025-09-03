<style lang="scss" scoped>
.notification {
    width: 100%;
    display: grid;
    position: relative;
    padding: 1rem;
    grid-template-columns: auto min-content;
    grid-template-areas:
        "title control"
        "message control"
        "action action";
    background-color: var(--color-background-notification-1);
    border-radius: 0;
    overflow: visible;

    [data-theme-color="dark"] & {
        --color-background-notification-1: transparent;
        --color-border-notification-1: var(--color-mix-1-4-step-3);
        --color-background-notification-btn: var(--color-mix-2-1-step-1);
        --color-background-notification-btn-hover: var(--color-mix-2-1-step-3);
    }
    [data-theme-color="light"] & {
        --color-background-notification-1: transparent;
        --color-border-notification-1: var(--color-mix-1-4-step-3);
        --color-background-notification-btn: var(--color-mix-2-1-step-1);
        --color-background-notification-btn-hover: var(--color-mix-2-1-step-3);
    }

    &:not(:first-child) {
        border-top: 2px solid var(--color-border-notification-1);
    }

    &::after {
        display: none;
        content: '';
        position: fixed;
        border-radius: $ruler-border-radius;
        border: 3px solid var(--color-text-accent-primary);
        background-color: var(--color-background-notification-1);
        pointer-events: none;
        transform-origin: 100% 50%;
        right: 1.5rem;

        animation-fill-mode: forwards;
        animation-play-state: paused;
        animation-timing-function: ease-in;
        animation-duration: .5s;
        animation-direction: normal;
        animation-name: animated;

        @keyframes animated {
            0% {
                opacity: 1;
                left: var(--notification-item-animation-source-x);
                top: var(--notification-item-animation-source-y);
                width: var(--notification-item-animation-source-cx);
                height: var(--notification-item-animation-source-cy);
            }
            99% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                left: var(--notification-item-animation-dest-x);
                top: var(--notification-item-animation-dest-y);
                width: var(--notification-item-animation-dest-cx);
                height: var(--notification-item-animation-dest-cy);
            }
        }
    }

    &.animate {
        &::after {
            display: block;
            animation-play-state: running;
        }
    }

    .title {
        grid-area: title;
    }

    .message {
        @extend P;
        grid-area: message;
    }

    .action {
        grid-area: action;
        display: grid;
        grid-template-columns: min-content min-content auto;
        grid-template-areas: "link control2 progress";

        &:empty {
            display: none;
        }

        > *:not(:last-child) {
            margin-right: 0.5rem;
        }
    }

    .link {
        @extend P;
        grid-area: link;
        padding: 0.5rem 0;

        .link-text {

        }
    }

    .progress {
        grid-area: progress;
    }

    .dismiss {
        position: relative;
        grid-area: control;
        top: 0;
        right: 0;
    }

    .control {
        grid-area: control2;

        [data-theme-color="dark"] & {
            --color-background-notification-control: var(--color-mix-4-6-step-1);
            --color-background-notification-control-hover: var(--color-mix-4-6-step-2);
            --color-background-notification-control-icon: var(--color-mix-4-7-step-3);
            --color-background-notification-control-icon-hover: var(--color-mix-4-7-step-2);
        }
        [data-theme-color="light"] & {
            --color-background-notification-control: var(--color-mix-4-6-step-3);
            --color-background-notification-control-icon: var(--color-mix-4-6-step-3);
        }

        .btn {
            background-color: var(--color-background-notification-control);
            border-radius: 50%;
            width: 3.5rem;
            aspect-ratio: 1;
            display: flex;
            padding: 0;
            justify-content: center;
            align-items: center;
            margin-top: 0.5rem;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                padding: 0.7rem;
                border-radius: #{$ruler-border-radius / 2};
                background-color: var(--color-background-notification-control-icon);
                //filter: grayscale(50%) brightness(120%);
            }

            &:hover {
                background-color: var(--color-background-notification-control-hover);
                transform: scale(1.2);

                &::after {
                    background-color: var(--color-background-notification-control-icon-hover);
                    //filter: grayscale(0%) brightness(100%);
                }
            }
        }
    }
}
</style>

<template>
    <div class="notification"
         ref="notification"
         id="test">
        <font-awesome-icon v-if="notification.hasClose"
                           class="dismiss"
                           :icon="['fal', 'times']"
                           @click="notification.dismiss()"/>
        <span class="title">{{ notification.title }}</span>
        <span class="message">{{ notification.message }}</span>
        <div class="action">
            <router-link v-if="notification.linkPath && notification.linkText"
                         class="link"
                         :to="notification.linkPath">
                <span class="link-text">{{ notification.linkText }}</span>
            </router-link>
            <div class="control" v-if="notification.hasStop">
                <button class="btn" @click="notification.stop()"></button>
            </div>
            <div class="progress">
                <progress-bar ref="progress-bar"
                              v-if="notification.hasProgress"
                              :progress="notification.progress"
                              :status="notification.status"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ProgressBar from '@pictaccio/admin-gui/views/components/widgets/ProgressBar.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { NotificationItem as Item } from '@pictaccio/admin-gui/core/types/notification_item';

@Component({
    name: 'Notification item',
    components: {
        ProgressBar,
        FontAwesomeIcon
    }
})
export default class NotificationItem extends Vue {
    @Prop
    private notification: Item;
    private progressBar: ProgressBar;

    private document = document;

    /* LIFECYCLE */
    public mounted(): void {
        this.progressBar = this.$refs['progress-bar'] as ProgressBar;
        if (this.notification.hasAnimate) {
            const notification = this.$refs['notification'] as HTMLElement;
            const sourceCoords = this.notification?.animationSource?.getBoundingClientRect();
            const destCoords = notification.getBoundingClientRect();

            notification.addEventListener('animationend', () => notification.classList.remove('animate'));

            notification.style.setProperty('--notification-item-animation-source-x',
                sourceCoords.x + 'px');
            notification.style.setProperty('--notification-item-animation-source-y',
                sourceCoords.y + 'px');
            notification.style.setProperty('--notification-item-animation-source-cx',
                sourceCoords.width + 'px');
            notification.style.setProperty('--notification-item-animation-source-cy',
                sourceCoords.height + 'px');
            notification.style.setProperty('--notification-item-animation-dest-x',
                destCoords.x + 'px');
            notification.style.setProperty('--notification-item-animation-dest-y',
                destCoords.y + 'px');
            notification.style.setProperty('--notification-item-animation-dest-cx',
                destCoords.width + 'px');
            notification.style.setProperty('--notification-item-animation-dest-cy',
                destCoords.height + 'px');

            this.$nextTick(() => {
                notification.classList.add('animate');
            });
        }
    }

    /* EVENT HANDLERS */
    /* PRIVATE */
}
</script>
