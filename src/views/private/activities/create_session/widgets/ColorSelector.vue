<style lang="scss" scoped>
.color-thumbnail {
    height: $ruler-input-height;
    position: relative;
    padding: 0;
    margin: 0 1rem 0 0;
    overflow: hidden;
    border-radius: $ruler-border-radius;
}

.color-selection-box {
    display: flex;
    flex-direction: column;
    gap: calc(#{$grid-gap} / 2);

    :deep(.fused-inputs) {
        border-width: 0 !important;
    }

    .color-selection-multiple-box {
        display: grid;
        gap: calc(#{$grid-gap} / 2);
        grid-template-columns: $ruler-input-height 1fr;

        label:first-child {
            grid-column: 2 / -1;
            --font-weight: 400 !important;
        }
    }

    .session-color-input {
        box-sizing: border-box;

        &.contrasted {
            border: 1px solid var(--color-text-normal) !important;
            border-right-width: 0 !important;
        }
    }
}
.color-suggestion {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
}
.color-tile {
    height: $ruler-input-height !important;
    width: $ruler-input-height;
    border-radius: $ruler-border-radius;
    margin: 0;
    cursor: pointer;
}
</style>

<template>
    <label class="color-thumbnail"
           v-if="multipleColors || color2 !== color1"
           :class="!multipleColors ? 'single' : ''"
           :style="{
                backgroundColor: color1 === color2 ?
                    color1 :
                    '#ffffff00',
                color: color1
           }">
            <svg id="session_2_color" width="34px" viewBox="0 0 34 34">
                <path id="color_2"
                      :class="!multipleColors ? 'hidden' : ''"
                      :style="{fill: color2}"
                      d="M34,0h-8.88c-.7,0-1.32.47-1.51,1.15l-8.3,30.88c-.27.99.48,1.96,1.51,1.96h17.18V0Z"/>
                <path id="color_1"
                      :style="{fill: color1}"
                      d="M17.18,0H0v34h8.88c.7,0,1.32-.47,1.51-1.15L18.69,1.96c.27-.99-.48-1.96-1.51-1.96Z"/>
            </svg>
    </label>
    <div class="color-selection-box">
        <fused-inputs :fusedInputName="'session-color-1'" @change="color1Change">
            <input id="session-color-1"
                   class="session-color-input"
                   :class="needContrast(color1) ? 'contrasted' : ''"
                   type="color"
                   v-model="color1">
            <input type="text" v-model="color1">
        </fused-inputs>
        <fused-inputs v-if="multipleColors || color2 !== color1" :fusedInputName="'session-color-2'">
            <input id="session-color-2"
                   class="session-color-input"
                   :class="needContrast(color2) ? 'contrasted' : ''"
                   type="color"
                   v-model="color2">
            <input type="text" v-model="color2">
        </fused-inputs>
        <div class="color-selection-multiple-box">
            <label>
                <input type="checkbox"
                       class="no-spacing"
                       name="session-color-multiple"
                       ref="session-color-multiple"
                       v-model="multipleColors"
                       @click="selectMultipleColor">
                {{ $t('activities.createSession.sessionInfo.multipleColor') }}
            </label>
        </div>
    </div>
</template>


<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { SessionColor } from '@pictaccio/admin-gui/models/session_color';
import Color from 'colorjs.io';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Color Selector',
    components: {
        FontAwesomeIcon
    },
    expose: [
        'getColors',
        'setColors'
    ]
})
export default class ColorSelector extends Vue {
    @Prop()
    private colors: SessionColor;

    private color1 = '';
    private color2 = '';
    private multipleColors = false;

    public getColors(): SessionColor {
        return {
            color1: this.color1,
            color2: this.color2,
            multipleColors: this.multipleColors
        };
    }

    public setColors(colors: SessionColor): void {
        this.color1 = colors.color1;
        this.color2 = colors.color2;
        this.multipleColors = colors.multipleColors;

        if (colors.multipleColors || this.color2 !== this.color1) {
            (this.$refs['session-color-multiple'] as HTMLInputElement).setAttribute('checked', 'checked');
        }
    }

    /* LIFECYCLE */
    public async mounted(): Promise<void> {
        if (!this.colors) {
            const randomColor = this.randomColor();
            this.color1 = randomColor;
            this.color2 = randomColor;
        } else {
            this.color1 = this.colors.color1;
            this.color2 = this.colors.color2;
            this.multipleColors = this.colors.multipleColors;
        }

        if (this.multipleColors || this.color2 !== this.color1) {
            (this.$refs['session-color-multiple'] as HTMLInputElement).setAttribute('checked', 'checked');
        }
    }

    /* EVENT HANDLERS */
    private color1Change(): void {
        if (!this.multipleColors) {
            this.color2 = this.color1;
        }
    }

    private selectMultipleColor(): void {
        if (!this.multipleColors) {
            this.color2 = this.randomColor();
        } else {
            this.color2 = this.color1;
        }
    }

    /* PRIVATE */
    private needContrast(color: string): boolean {
        if (!color) {
            return false;
        }
        const color1 = new Color(color);
        const color2 = new Color(getComputedStyle(document.body).getPropertyValue('--color-background-base'));

        return Math.abs(color1.contrast(color2, 'APCA')) < 15;
    }

    private randomColor(): string {
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    }
}

</script>
