<style lang="scss" scoped>
.badge-input-container {
    @extend .input-boxes-default;
    max-width: $ruler-input-max-width;
    height: auto;
    min-height: $ruler-input-height;
    padding: 0 0.1rem;
    margin-left: -0.5px;
    cursor: text;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .input {
        --input-padding-length: calc(var(--input-padding-inline) * 1.5);
        padding-left: calc(var(--input-padding-inline) * 0.5);
        margin: 0;
        border-width: 0px;
        height: #{$ruler-input-height - 4};
        min-width: unset;
        flex-grow: 99;
    }
}
</style>

<template>
    <div ref="badge-input-container"
         class="badge-input-container"
         :class="inputLines ? 'multiline' : ''"
         @click="containerClick"
         :name="badgeName"
         data-list>
        <template v-for="badge of badges" :key="badge">
            <badge :ref="`badge-${badge}`"
                   :badge-name="`badge-${badge}`"
                   :can-delete="isDeletable"
                   :interactable="isInteractable"
                   :badge-color="badgeColor"
                   @deleted="deleteBadge"
                   @arrow-pressed="badgeArrowPressed"
                   @inform-exist="containBadgeInfoExist">
                {{ badge }}
            </badge>
        </template>
        <input ref="badge-input"
               v-if="isInteractable"
               type="text"
               class="input"
               :placeholder="badgeInputPlaceholder"
               v-model="badgeInputValue"
               :style="{
                   width: `calc(${badgeInputValue.length}ch + var(--input-padding-length))`
               }"
               @click="badgeInputClick"
               @keydown="badgeInputKeydown"
               @keyup="badgeInputKeyup"
               @blur="badgeInputBlur">
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getCoords, TwoPointCoords } from '@pictaccio/admin-gui/utils/get_coords';
import Badge, { BadgeEmitExist, BadgeEmitOptions } from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

type BadgeCoords = {
    key: string,
    x1: TwoPointCoords['x1'],
    y1: TwoPointCoords['y1'],
    x2: TwoPointCoords['x2'],
    y2: TwoPointCoords['y2'],
};

@Component({
    name: 'Badge Input',
    components: {
        Badge,
        FontAwesomeIcon
    },
    emits: [
        'changed'
    ],
    expose: [
        'getSelection',
        'setSelection'
    ]
})
export default class BadgeInput extends Vue {
    @Prop
    private badgeInputPlaceholder: string;
    @Prop
    private savedBadges: string[];
    @Prop
    private badgeName: string;
    @Prop
    private badgeColor: string;
    @Prop
    private interactable: boolean;
    private badgeInputContainer: HTMLElement;
    private badgeInputValue = '';
    private badges: string[] = [];
    private caretPosition = 0;
    private inputLines = false;
    private badgeInfoExist: string[] = [];
    private isInteractable = true;

    public getSelection(): string[] {
        return this.badges;
    }

    public setSelection(badges: string[]): void {
        this.badges = badges;
    }

    /* LIFECYCLE */
    public created(): void {
        if (this.savedBadges) {
            this.badges = this.savedBadges;
        }

        if (this.interactable !== undefined) {
            this.isInteractable = this.interactable;
        }
    }

    public mounted(): void {
        this.badgeInputContainer = this.$refs['badge-input-container'] as HTMLElement;
        this.badgeInputContainer['__loufairyBridge__'] = this;
        this.$nextTick(() => {
            this.updateBadgeInput();
        });
    }

    /* EVENT HANDLER */
    private badgeArrowPressed(badgeEmit: BadgeEmitOptions): void {
        const index = this.badges.findIndex(i => i === badgeEmit.badge);
        this.focusBadge(badgeEmit.keyPressed === 'ArrowLeft' ? index - 1 : index + 1);
    }

    private badgeInputBlur(): void {
        this.createBadge(this.badgeInputValue);
    }

    private badgeInputClick(event): void {
        this.caretPosition = event.target.selectionStart;
    }

    private badgeInputKeydown(event): void {
        this.badgeInputKeydownCreate(event);
    }

    private badgeInputKeydownCreate(event): void {
        if (this.badgeInfoExist.length > 0) {
            for (const badge of this.badgeInfoExist) {
                (this.$refs[badge][0] as Badge).removeExistInfo();
            }
        }
        switch (event.code) {
        case 'Space':
            this.createBadge(event.target.value);
            break;
        case 'ArrowLeft':
            if (this.caretPosition === 0 || this.badgeInputValue.length === 0) {
                event.preventDefault();
                this.focusBadge();
            }
            break;
        case 'Backspace':
            if (this.caretPosition === 0 || this.badgeInputValue.length === 0) {
                this.badges.pop();
                this.$nextTick(() => {
                    this.updateBadgeInput();
                });
            }
            break;
        }
    }

    private badgeInputKeyup(event): void {
        this.badgeInputValue = this.badgeInputValue.trim();
        this.caretPosition = event.target.selectionStart;
    }

    private containBadgeInfoExist(badge: BadgeEmitExist): void {
        if (badge.exist) {
            this.badgeInfoExist.push(badge.name);
        } else if (badge.name && this.badgeInfoExist.includes(badge.name)) {
            this.badgeInfoExist = this.badgeInfoExist.filter(i => i !== badge.name);
        }
    }

    private containerClick(): void {
        if (this.isInteractable) {
            (this.$refs['badge-input'] as HTMLInputElement).focus();
        }
    }

    private deleteBadge(badgeEmit: BadgeEmitOptions): void {
        const selection = this.badges.findIndex(i => i === badgeEmit.badge);
        this.badges = this.badges.filter(i => i !== badgeEmit.badge);
        if (badgeEmit.wasFocused) {
            this.focusBadge(selection > 0 ? selection - 1 : 0);
        }
        this.$nextTick(() => {
            this.updateBadgeInput();
        });
    }

    /* PRIVATE */
    private calculateBadgesPos(): BadgeCoords[] {
        const badgesPos: BadgeCoords[] = [];
        const badges = this.badgeInputContainer.querySelectorAll('.badge');
        for (const badge of badges) {
            const name = badge.getAttribute('name');
            const pos1 = getCoords(badge, 'top left');
            const pos2 = getCoords(badge, 'bottom right');

            badgesPos.push({
                key: name,
                x1: pos1.x,
                y1: pos1.y,
                x2: pos2.x,
                y2: pos2.y
            })
        }

        return badgesPos;
    }

    private createBadge(value): void {
        if (value.trim() !== '' &&
            !this.badges.includes(this.badgeInputValue.trim())) {
            this.badges.push(this.badgeInputValue.trim());
            this.$emit('changed', this.badges);
        } else if (this.badges.includes(this.badgeInputValue.trim())) {
            (this.$refs[`badge-${this.badgeInputValue.trim()}`][0] as Badge).informExist();
        }
        this.badgeInputValue = '';
        this.$nextTick(() => {
            this.updateBadgeInput();
        });
    }

    private focusBadge(index?: number): void {
        const badgeIndex = index ?? this.badges.length - 1;
        if (this.badges.length === 0 || badgeIndex >= this.badges.length) {
            this.containerClick();
            return;
        }
        const ref = `badge-${this.badges[badgeIndex < 0 ? 0 : badgeIndex]}`;
        (this.$refs[ref] as Badge)[0].focus();
    }

    private updateBadgeInput(): void {
        if (this.badges.length === 0) {
            return;
        }

        const badgesPos = this.calculateBadgesPos();

        badgesPos.every(i => i.y1 === badgesPos[0].y1) ? this.inputLines = false : this.inputLines = true;

        if (!this.inputLines) {
            return;
        }

        let tempPos = { x: badgesPos[0].x1, y: badgesPos[0].y2, name: badgesPos[0].key };
        badgesPos.map(i => {
            if (i.x1 >= tempPos.x && i.y2 <= tempPos.y) {
                tempPos.x = i.x1;
                tempPos.y = i.y2;
                tempPos.name = i.key;
            }
            return i;
        });
        const BadgeTopRight = tempPos.name;

        tempPos = { x: badgesPos[0].x1, y: badgesPos[0].y2, name: badgesPos[0].key };
        badgesPos.map(i => {
            if (i.x1 <= tempPos.x && i.y1 >= tempPos.y) {
                tempPos.x = i.x1;
                tempPos.y = i.y1;
                tempPos.name = i.key;
            }
            return i;
        });
        const BadgeBottomLeft = tempPos.name;

        this.updateBadges(BadgeTopRight, BadgeBottomLeft);
    }

    private updateBadges(topRight: string, bottomLeft: string): void {
        for (const badge of this.badges) {
            if ('badge-' + badge === topRight) {
                (this.$refs[`badge-${badge}`][0] as Badge).extraClass('top-right');
            } else if ('badge-' + badge === bottomLeft) {
                (this.$refs[`badge-${badge}`][0] as Badge).extraClass('bottom-left');
            } else {
                (this.$refs[`badge-${badge}`][0] as Badge).extraClass('');
            }
        }
    }
}
</script>
