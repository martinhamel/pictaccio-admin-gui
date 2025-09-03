<style lang="scss" scoped>
.label {
    position: relative;
    margin: 0;
    padding: 0;

    .value {
        display: block;
        width: 100%;
        max-width: var(--value-max-length);
        white-space: nowrap;
        cursor: pointer;
        pointer-events: all;
        overflow: clip;
        text-overflow: ellipsis;

        &:empty {
            &:before {
                content: '—';
            }
        }

        &.no-tooltip {
            pointer-events: none;
        }
    }
}

.controls {
    position: absolute;
    top: calc(#{$ruler-input-height} - 0.8rem);
    right: 0;
    transform-origin: 100% 0;
    display: none;
    z-index: 99;
    padding: 0.3rem 0.7rem;

    svg {
        pointer-events: none;
    }
}

.input {
    position: absolute;
    width: unset !important;
    z-index: 99;
    inset: 0 0 0 -1.5rem;

    &[type="text"] {
        & ~ .controls {
            display: block;
        }
    }
}

.icon-times,
.icon-check {
    translate: 0 1px;
}
</style>

<template>
    <label class="label" :style="`--value-max-length: ${valueMaxLength}ch;`">
        <tooltip ref="editablelabel-tooltip" :prevent-tooltip="() => value.length <= valueMaxLength">
            <template #trigger>
                <span class="value" @click="editLabel">
                    {{ value }}
                </span>
            </template>
            {{ value }}
        </tooltip>
        <input class="input"
               :name="inputName"
               type="hidden"
               ref="editablelabel-input"
               v-model="value"
               @keydown="inputKeydown">
        <div ref="editablelabel-controls" class="controls">
            <badge ref="editablelabel-cancel"
                   :interactable="true"
                   :badge-colors="{
                      background: 'var(--color-primary-1)',
                      text: 'var(--color-text-normal-reversed)'
                   }"
                   @badge-click="cancelClick">
                <font-awesome-icon :icon="['fas', 'times']" class="icon-times"/>
            </badge>
            <badge ref="editablelabel-confirm"
                   :interactable="true"
                   @badge-click="confirmClick">
                <font-awesome-icon :icon="['fas', 'check']" class="icon-check"/>
            </badge>
        </div>
    </label>
</template>

<script lang="ts">
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import Tooltip from '@pictaccio/admin-gui/views/components/widgets/Tooltip.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
    name: 'Editable Label',
    emits: [
        'click',
        'update-value'
    ],
    components: {
        Tooltip,
        Badge,
        FontAwesomeIcon
    },
    expose: [
        'setValue'
    ]
})
export default class EditableLabel extends Vue {
    @Prop
    private inputName: string;
    @Prop
    private permission?: string;
    private value = '';
    private initialValue = '';
    private input: HTMLInputElement;
    private valueMaxLength = 30;

    public setValue(value: string | number): void {
        if (!value) {
            return;
        }
        this.value = value.toString();
        this.initialValue = this.value;
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.input = this.$refs['editablelabel-input'] as HTMLInputElement;
    }

    /* EVENT HANDLERS */
    private cancelClick(): void {
        this.finishEdit();
        this.value = this.initialValue;
    }

    private confirmClick(): void {
        this.finishEdit();
        this.initialValue = this.value;
        this.$emit('update-value', this.value);
    }

    private editLabel(): void {
        if (!this.$validateCapability(`${this.permission}:update`)) {
            return;
        }
        document.body.addEventListener('click', (event) => {
            this.bodyClick(event);
        }, {
            capture: true
        });
        this.input.setAttribute('type', 'text');
    }

    private inputKeydown(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.confirmClick();
        }
        if (event.key === 'Escape') {
            this.cancelClick();
        }
    }

    private bodyClick(event): void {
        const target = event.target?.__vnode?.props?.ref;
        if (!target || !Object.keys(this.$refs).includes(target)) {
            this.finishEdit();
        }
    }

    /* PRIVATE */
    private finishEdit(): void {
        this.input.setAttribute('type', 'hidden');
        document.body.removeEventListener('click', this.bodyClick, {
            capture: true
        });
    }
}
</script>
