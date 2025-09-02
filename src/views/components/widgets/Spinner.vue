<style lang="scss" scoped>
    .spinners-holder {
        aspect-ratio: 1;
    }
    #spinner-camera {
        $spinner-time: 3.5s;
        $spinner-delay: 0.5s;
        color: inherit;

        .cls-1,
        .cls-2 {
            fill: none;
            color: inherit;
            stroke: currentColor;
            stroke-linejoin: round;
            stroke-linecap: round;
        }

        .cls-1 {
            stroke-width: 6px;
        }

        .cls-2 {
            stroke-width: 3px;
        }

        .frame {
            stroke-dasharray: 205;
            stroke-dashoffset: 205;
            animation: frame-spin $spinner-time ease-in-out;
            animation-iteration-count: infinite;

            @include simple-keyframes(frame-spin) {
                0% { stroke-dashoffset: 205; opacity: 0;}
                4% { opacity: 1;}
                30% { stroke-dashoffset: 0; }
                40% { stroke-dashoffset: 0; }
                66% { opacity: 1; }
                70% { stroke-dashoffset: -205; opacity: 0; }
                100% { stroke-dashoffset: -205; animation-delay: $spinner-delay;}
            }

            @include exclusive(Safari) {
                @include simple-keyframes(frame-spin) {
                    0% { stroke-dashoffset: 205; opacity: 0;}
                    4% { opacity: 1;}
                    30% { stroke-dashoffset: 0; }
                    40% { stroke-dashoffset: 0; }
                    66% { opacity: 1; }
                    70% { stroke-dashoffset: 205; opacity: 0; }
                    100% { stroke-dashoffset: 205; animation-delay: $spinner-delay;}
                }
            }
        }
        .lense {
            stroke-dasharray: 80;
            stroke-dashoffset: -80;
            animation: lense-spin $spinner-time cubic-bezier(.39, .62, .52, .98);
            animation-iteration-count: infinite;

            @include simple-keyframes(lense-spin) {
                0% { stroke-dashoffset: -80; opacity: 0;}
                4% { opacity: 1;}
                30% { stroke-dashoffset: 0;}
                40% { stroke-dashoffset: 0;}
                66% { opacity: 1; }
                70% { stroke-dashoffset: 80; opacity: 0;}
                100% { stroke-dashoffset: 80; opacity: 0; animation-delay: $spinner-delay;}
            }

            @include exclusive(Safari) {
                @include simple-keyframes(lense-spin) {
                    0% { stroke-dashoffset: 80; opacity: 0;}
                    4% { opacity: 1;}
                    30% { stroke-dashoffset: 0;}
                    40% { stroke-dashoffset: 0;}
                    66% { opacity: 1; }
                    70% { stroke-dashoffset: 80; opacity: 0;}
                    100% { stroke-dashoffset: 80; opacity: 0; animation-delay: $spinner-delay;}
                }
            }
        }

        .reflect {
            stroke-dasharray: 7 30;
            stroke-dashoffset: 7;
            animation: reflect-spin $spinner-time cubic-bezier(.08, .1, .18, 1);
            animation-iteration-count: infinite;

            @include simple-keyframes(reflect-spin) {
                0% { stroke-dashoffset: 7;}
                20% { stroke-dashoffset: 7; stroke-dasharray: 7 30;}
                60% { stroke-dashoffset: -16; stroke-dasharray: 7 30; opacity: 1;}
                95% { stroke-dashoffset: -30; stroke-dasharray: 10 33; opacity: 0;}
                100% { stroke-dashoffset: -30; stroke-dasharray: 7 30; }
            }
        }
    }
</style>

<template>
    <div class="spinners-holder">
        <svg id="spinner-camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 56">
            <path class="cls-1 frame" d="M57.17,53H6.83A3.82,3.82,0,0,1,3,49.17V14.83A3.82,3.82,0,0,1,6.83,11H19l3-8H42l3,8H57.17A3.82,3.82,0,0,1,61,14.83V49.17A3.82,3.82,0,0,1,57.17,53Z"/>
            <circle class="cls-1 lense" cx="32" cy="32" r="12.5"/>
            <circle class="cls-2 reflect" cx="32" cy="32" r="4.5"/>
        </svg>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Spinner',
    components: {
        FontAwesomeIcon
    }
})
export default class Spinner extends Vue {
}
</script>
