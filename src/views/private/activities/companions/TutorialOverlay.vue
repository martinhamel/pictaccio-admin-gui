<style lang="scss" scoped>
.tutorial-overlay {
    font-family: 'Schoolbell', cursive;
    position: fixed;
    z-index: 100;
    inset: 0;
    font-size: 1.8rem;

    pointer-events: none !important;
}
</style>

<template>
    <div v-if="visible"
         ref="tutorial-overlay"
         class="tutorial-overlay">
        <slot />
    </div>
</template>

<script lang="ts">
import { getCoords } from '@pictaccio/admin-gui/src/utils/get_coords';
import TutorialText from '@pictaccio/admin-gui/src/views/private/activities/companions/TutorialText.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import localStorageService from '@pictaccio/admin-gui/src/services/local_storage_service';


@Component({
    name: 'TutorialOverlay',
    components: {
        TutorialText,
        FontAwesomeIcon
    }
})
export default class TutorialOverlay extends Vue {
    private subActivity: string;
    private visible = true;
    private tutorialTexts: TutorialText[];
    private tutorialTextsCopy: TutorialText[];

    public nextClick(source: TutorialText): void {
        source.toggleVisibility(false);
        this.setTutorialState(source.name);
        this.displayNextTutorial();
    }

    public readinessChange(): void {
        this.displayNextTutorial();
    }

    public skipClick(): void {
        for (const tutorialText of this.tutorialTexts) {
            tutorialText.toggleVisibility(false);
            this.setTutorialState(tutorialText.name);
        }
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.subActivity = this.$store.getters['CurrentActivity/currentActivity'];
        const overlay = this.$refs['tutorial-overlay'] as HTMLElement;
        if (overlay.children.length <= 0) {
            this.visible = false;
        }

        this.tutorialTexts = Array.from(this.$el.querySelectorAll('.tutorial-text-component'))
            .map((i: any) => i.__vueParentComponent.ctx);

        this.displayNextTutorial();
    }

    /* EVENT HANDLER */

    /* PRIVATE */
    private displayNextTutorial(): void {
        if (this.tutorialTexts.some(tutorialText => tutorialText.isVisible)) {
            return;
        }

        for (const tutorialText of this.tutorialTexts) {
            if (this.getTutorialState(tutorialText.name)) {
                continue;
            }

            if (tutorialText.isReady()) {
                tutorialText.toggleVisibility(true,
                    !this.tutorialTexts.slice(this.tutorialTexts.indexOf(tutorialText) + 1)
                        .some(i => {
                            return !this.getTutorialState(i.name) || !i.isReady();
                        }));
                return;
            }
        }
    }

    private setTutorialState(nameRef: string): void {
        const tutorials = JSON.parse(localStorageService.get('tutorials') || '{}');
        if (!tutorials[this.subActivity]) {
            tutorials[this.subActivity] = {};
        }
        tutorials[this.subActivity][nameRef] = true;
        localStorageService.set('tutorials', JSON.stringify(tutorials));
    }

    private getTutorialState(nameRef: string): boolean {
        const tutorials = JSON.parse(localStorageService.get('tutorials') || '{}');
        return tutorials[this.subActivity] ? tutorials[this.subActivity][nameRef] : false;
    }
}
</script>
