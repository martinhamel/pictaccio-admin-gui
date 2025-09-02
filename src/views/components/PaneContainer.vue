<style lang="scss" scoped>
.activity-control {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    gap: $grid-gap;
    grid-auto-flow: dense;
    background-color: transparent !important;
}
.context-control {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
}
</style>

<template>
    <div class="activity-control" ref="activity-control">
        <div class="context-control">
            <slot name="context-controls"></slot>
        </div>
        <pane v-for="name in slotNames"
              :key="name"
              :ref="name"
              :paneName="name"
              :imagedPane="imagedPane"
              :paneControlDefaults="paneControlDefaults"
              @pane-activate="paneActivate"
              @pane-cancel="paneCancel"
              @manage-click="manageClick(name)"
              @update-click="updateClick">
            <slot :name="name"></slot>
        </pane>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Pane from '@pictaccio/admin-gui/src/views/components/Pane.vue';

@Component({
    name: 'Pane Container',
    components: {
        FontAwesomeIcon,
        Pane
    },
    emits: [
        'manage-click',
        'pane-cancel',
        'update-click'
    ],
    expose: [
        'close',
        'savePane'
    ]
})
export default class PaneContainer extends Vue {
    @Prop
    private imagedPane = false;
    @Prop
    private paneControlDefaults = false;

    private activePane!: string;
    private slotNames: string[] = [];

    public close(): void {
        this.paneActivate('');
    }

    public savePane(paneName: string): void {
        const panes = (this.$refs[paneName] as Pane[]);
        if (!panes || panes.length === 0) {
            return;
        }
        panes[0].savePane();
    }

    /* LIFECYCLE */
    public beforeMount(): void {
        this.slotNames = Object.keys(this.$slots).filter(k => k.startsWith('pane'));
    }

    /* EVENT HANDLERS */
    private manageClick(name: string): void {
        this.$emit('manage-click', name);
    }

    private paneActivate(pane: string): void {
        this.activePane = pane;
        for (const paneName of this.slotNames) {
            (this.$refs[paneName] as Pane[])[0].setPaneActive(paneName === pane);
        }
    }

    private paneCancel(paneName: string): void {
        this.paneActivate('');
        this.$emit('pane-cancel', paneName);
    }

    private updateClick(): void {
        this.$emit('update-click', this.activePane);
    }
}
</script>
