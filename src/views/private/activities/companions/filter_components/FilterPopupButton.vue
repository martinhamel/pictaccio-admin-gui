<style lang="scss" scoped>
.btn {
    .value {
        margin-inline: 0.5rem;
        --font-weight: 400;
        text-transform: unset;
    }
}

.svg-inline--fa {
    margin-left: 0.5rem;
    transform: translateY(-2px);
}
</style>

<template>
    <div class="btn" :class="filterOptions.class">
        <slot>
            <b>{{ name }}</b>
        </slot>
        <template v-if="selectionIsNotEmpty()">
            <b>:</b>
            <template v-for="selected in filterOptions.visibleSelection" :key="selected">
                <span class="value">
                    {{ selection[selected - 1] }}
                </span>
                <span v-if="filterOptions.visibleSelection > 1
                    && selected < Math.min(filterOptions.visibleSelection, selection.length)">
                <b>{{ filterOptions.selectionSeparator }}</b>
            </span>
            </template>
            <badge v-if="badgeVisible(selection.length > filterOptions.visibleSelection)" :alone="true">
                <span>+{{ selection.length - filterOptions.visibleSelection }}</span>
            </badge>
        </template>
        <font-awesome-icon v-if="icon" :icon="[iconType(), iconSelected()]"/>
    </div>
</template>


<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import { dasherize, isEmpty } from '@loufa/loufairy';
import { Component, Prop, Vue } from 'vue-facing-decorator';

type FilterPopupOptions = {
    class?: string;
    badgeVisible?: boolean;
    visibleSelection?: number;
    selectionSeparator?: string;
};

@Component({
    name: 'FilterPopupButton',
    components: {
        Badge,
        FontAwesomeIcon
    },
    expose: [
        'setSelection'
    ]
})
export default class FilterPopupButton extends Vue {
    @Prop
    private name: string;
    @Prop
    private options: FilterPopupOptions;
    @Prop
    private icon: string;

    private filterOptions: FilterPopupOptions = {
        class: 'btn-quaternary',
        badgeVisible: false,
        visibleSelection: 1,
        selectionSeparator: ','
    };

    private iconFamily = ['fas', 'far', 'fal', 'fad', 'fab'];
    private selection: string[] = [];

    public setSelection(selection: string[]): void {
        this.selection = selection;
    }

    /* LIFECYCLE */
    public created(): void {
        this.filterOptions = Object.assign({}, this.filterOptions, Object.fromEntries(Object.entries({
            class: this.options.class,
            badgeVisible: this.options.badgeVisible,
            visibleSelection: this.options.visibleSelection,
            selectionSeparator: this.options.selectionSeparator
        }).filter(([p, v]) => v !== undefined && v !== null)));
    }

    /* PRIVATE */
    private badgeVisible(validation: boolean): boolean {
        if (this.options &&
            this.options.badgeVisible === false) {
            return false;
        } else if (this.options &&
            this.options.badgeVisible !== false) {
            return validation;
        } else {
            return validation;
        }
    }

    private iconSelected(): string {
        if (this.icon.startsWith('fas') || this.icon.startsWith(this.iconType())) {
            return dasherize(this.icon.substring(3));
        } else if (this.icon.startsWith('fa')) {
            return dasherize(this.icon.substring(2));
        } else {
            return dasherize(this.icon);
        }
    }

    private iconType(): string {
        if (this.iconFamily.includes(this.icon.substring(0, 3))) {
            return this.icon.substring(0, 3);
        } else {
            return 'fas';
        }
    }

    private selectionIsNotEmpty(): boolean {
        return !isEmpty(this.selection);
    }
}
</script>
