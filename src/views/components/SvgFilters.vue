<style lang="scss">
#filters {
    position: absolute;
    height: 0;
}
</style>

<template>
    <svg id="filters">
        <filter id="sketchy">
            <feTurbulence id="turbulence" baseFrequency=".06" numOctaves="1" result="noise" seed="0"/>
            <feDisplacementMap id="displacement"
                               in="SourceGraphic"
                               in2="noise"
                               scale="5"
                               xChannelSelector="R"
                               yChannelSelector="G"/>
            <feGaussianBlur id="blur" stdDeviation="0.2"/>
        </filter>
        <filter id="bloby">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
        </filter>
    </svg>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
    name: 'SvgFilters',
    components: {
        FontAwesomeIcon
    }
})
export default class SvgFilters extends Vue {
    public mounted(): void {
        const svg = document.getElementById('filters');
        if (svg) {
            svg.setAttribute('display', 'none');
        }
    }
}
</script>
