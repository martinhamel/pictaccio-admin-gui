<style lang="scss" scoped>
.timeline-form {
    $timeline-arrow-width: 1rem;
    $timeline-form-gap: 1.5rem;
    $timeline-form-gap-h: $timeline-form-gap;
    $timeline-form-gap-v: $timeline-form-gap;
    $timeline-padding: $timeline-form-gap;
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: auto 1fr;
    width: 100%;
    gap: $timeline-form-gap;
    padding: $timeline-padding;
    padding-bottom: calc(#{$timeline-arrow-width} + #{$timeline-form-gap-v} + #{$timeline-padding});

    [data-theme-color="dark"] & {
        --color-timeline-inside-range: var(--color-text-accent-primary);
        --color-timeline-outside-range: var(--color-text-accent-secondary);
        --color-timeline-moment-dot: var(--color-text-normal);
    }

    [data-theme-color="light"] & {
        --color-timeline-inside-range: var(--color-text-accent-primary);
        --color-timeline-outside-range: var(--color-text-accent-secondary);
        --color-timeline-moment-dot: var(--color-text-normal);
    }

    .timeline-arrow-segment {
        width: $timeline-arrow-width;
        height: calc(100% + #{$timeline-arrow-width} + #{$timeline-form-gap-v});
        padding-block: 50%;
        color: var(--color-timeline-inside-range);
        background-color: currentColor;
        border-radius: 99px;
        position: relative;
        transform: translateY(0.6rem);

        &::before,
        &::after {
            content: '';
            position: absolute;
            display: none;
        }

        &::before {
            display: block;
            inset: 0 0 auto 0;
            width: $timeline-arrow-width;
            height: $timeline-arrow-width;
            background-color: var(--color-timeline-moment-dot);
            border-radius: 50%;
        }

        &.start-date-segment,
        &.end-date-segment {
            &:first-of-type,
            &:last-of-type {
                color: var(--color-timeline-outside-range);
            }
        }

        &:last-of-type {
            height: calc(100% + #{$timeline-arrow-width});
            &::after {
                $amplitude: 1.5;
                display: block;
                inset: auto 50% 0 50%;
                color: inherit;
                transform: translate(-50%, 50%);

                border-top: #{$timeline-arrow-width * $amplitude} solid currentcolor;
                border-left: #{$timeline-arrow-width * $amplitude} solid transparent;
                border-right: #{$timeline-arrow-width * $amplitude} solid transparent;
            }
        }
    }

    .timeline-date-section {
        grid-column: 2 / -1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        gap: #{$timeline-form-gap / 1.5};

        .date-field {
            &.empty-date ~ :deep(div) {
                opacity: 0.5;
                pointer-events: none;
            }

            .unexpected {
                border-color: var(--color-semantic-warning);
            }
        }
    }
}
</style>

<template>
    <form name="timeline" class="timeline-form" ref="timeline-form">
        <template v-if="extremityDates.start">
            <i class="timeline-arrow-segment start-date-segment"/>
            <div class="timeline-date-section">
                <div class="date-field">
                    <label>
                        {{ labels.startDate ?? $t('timeline.titles.startDate') }}
                        <tooltip v-if="labels.startDateHelp" :sup="true">
                            <span class="help-text">
                                {{ labels.startDateHelp }}
                            </span>
                        </tooltip>
                    </label>
                    <input type="date"
                           name="date-start"
                           :value="extremityDates.start"
                           disabled>
                </div>
                <slot name="start-date-fields"/>
            </div>
        </template>
        <template v-for="name in dateSegments" :key="name">
            <i class="timeline-arrow-segment"/>
            <div class="timeline-date-section">
                <div class="date-field"
                     :class="dates[name] ? dates[name] : 'empty-date'">
                    <label>
                        {{ labels[`${camelize(trimDateFieldsFromName(name))}Date`] }}
                        <tooltip v-if="labels[`${camelize(trimDateFieldsFromName(name))}DateHelp`]" :sup="true">
                            <span class="help-text">
                                {{ labels[`${camelize(trimDateFieldsFromName(name))}DateHelp`] }}
                            </span>
                        </tooltip>
                    </label>
                    <input type="date"
                           :ref="name"
                           @focusin="toggleBubble(true, name)"
                           @focusout="toggleBubble(false, name)"
                           :name="`${prefix}-${trimDateFieldsFromName(name)}Date`"
                           v-model="dates[name]"
                           @change="dateValidation">
                    <tooltip-bubble :bubbleColor="'var(--color-semantic-warning)'"
                                 v-if="bubbleVisible[name]"
                                 :ref="`infoBubble-${name}`"
                                 @mouseenter="hoverBubble(true, name)"
                                 @mouseleave="hoverBubble(false, name)"
                                 :element="getInfoBubble(name)"
                                 :spacing="{ top: 5 }"
                                 :bubble-style="'padding: 1rem; color: var(--color-text-tertiary)'">
                        <p>{{ $t('timeline.prompt.dateOutsideExpectedMessage') }}</p>
                    </tooltip-bubble>
                </div>
                <slot :name="name"/>
            </div>
        </template>
        <template v-if="extremityDates.end">
            <i class="timeline-arrow-segment end-date-segment"/>
            <div class="timeline-date-section">
                <div class="date-field">
                    <label>
                        {{ labels.endDate ?? $t(`timeline.titles.endDate`) }}
                        <tooltip v-if="labels.endDateHelp" :sup="true">
                            <span class="help-text">
                                {{ labels.endDateHelp }}
                            </span>
                        </tooltip>
                    </label>
                    <input type="date"
                           name="date-end"
                           :value="extremityDates.end"
                           disabled>
                </div>
                <slot name="end-date-fields"/>
            </div>
        </template>
    </form>
</template>

<script lang="ts">
import TooltipBubble from '@pictaccio/admin-gui/src/views/components/widgets/TooltipBubble.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { camelize } from '@loufa/loufairy';
import { DateRange } from '@pictaccio/shared/src/types/date_range';
import { Component, Prop, Vue } from 'vue-facing-decorator';

const TIMING_TIMEOUT = 0;

@Component({
    name: 'Timeline Form',
    emits: [],
    components: {
        TooltipBubble,
        Tooltip,
        FontAwesomeIcon
    },
    expose: [
        'isValid',
        'reset',
        'setExtremityDate'
    ]
})
export default class TimelineForm extends Vue {
    @Prop
    private activity: string;
    @Prop
    private startDate?: string;
    @Prop
    private endDate?: string;

    /**
     * The dates to be displayed in the timeline.
     * format: { '[prefix]-date-{name}-fields': toISODate }
     */
    @Prop
    private dates: Record<string, string>;

    /**
     * The labels to be displayed in the timeline.
     * format: { {name from dates}Date(+Help): string }
     */
    @Prop
    private labels?: Record<string, string>;
    @Prop
    private prefix?: string;

    private extremityDates: DateRange<string>;

    private dateSegments: string[] = [];
    private bubbleVisible: Record<string, boolean> = {};
    private timeoutId: Record<string, any> = {};

    public camelize: (input: string, pascal?: boolean) => string = camelize;

    public reset(): void {
        for (const date of this.dateSegments) {
            this.dates[date] = '';
        }

        Array.from((this.$refs['timeline-form'] as HTMLElement).querySelectorAll('input, select, textarea'))
            .filter(input => !['date-start', 'date-end'].includes((input as HTMLInputElement).name))
            .forEach(input => {
                input.classList.remove('unexpected');
                (input as HTMLInputElement).value = '';
            });
    }

    public setExtremityDate(date: string, extremity: 'start' | 'end'): void {
        if (extremity === 'start') {
            this.extremityDates.start = date;
        } else {
            this.extremityDates.end = date;
        }
    }

    public isValid(): boolean {
        // TODO: make this function work
        return true;
    }

    /* LIFECYCLE */
    public beforeMount(): void {
        this.dateSegments = Object.keys(this.dates).filter(i => i.startsWith(`${this.prefix}-date-`));
        this.extremityDates = {
            preset: 'custom',
            start: this.startDate ?? '',
            end: this.endDate ?? ''
        };
    }

    public mounted(): void {
        for (const field of this.dateSegments) {
            this.bubbleVisible[field] = false;
            this.timeoutId[field] = undefined;
        }
    }

    /* EVENT HANDLER */
    private async dateValidation(): Promise<void> {
        const firstDate = this.extremityDates.start ? new Date(this.extremityDates.start).getTime() : null;
        let previousDate = firstDate ?? new Date().getTime();
        const lastDate = this.extremityDates.end ? new Date(this.extremityDates.end).getTime() : null;
        for (const date of this.dateSegments) {
            if (!this.dates[date]) {
                continue;
            }

            const timeDate = new Date(this.dates[date]).getTime();

            if (!timeDate) {
                continue;
            }

            if ((previousDate <= timeDate) && (lastDate ? (timeDate <= lastDate) : true)) {
                (this.$refs[date] as HTMLInputElement)[0].classList.remove('unexpected');
            } else {
                (this.$refs[date] as HTMLInputElement)[0].classList.add('unexpected');
            }

            previousDate = timeDate;
        }
    }

    private getInfoBubble(name: string): Node {
        return (this.$refs[name] as Node)[0];
    }

    private hoverBubble(visible: boolean, name: string) {
        if (!visible && this.bubbleVisible[name]) {
            clearTimeout(this.timeoutId[name]);
            this.timeoutId[name] = setTimeout(() => {
                this.bubbleVisible[name] = false;
            }, TIMING_TIMEOUT);
        } else if (visible && this.bubbleVisible[name]) {
            clearTimeout(this.timeoutId[name]);
        }
    }

    private toggleBubble(visible: boolean, name: string) {
        if (!(this.$refs[name] as HTMLInputElement)[0].classList.contains('unexpected')) {
            return;
        }
        if (!visible && this.bubbleVisible[name]) {
            clearTimeout(this.timeoutId[name]);
            this.timeoutId[name] = setTimeout(() => {
                this.bubbleVisible[name] = false;
            }, TIMING_TIMEOUT);
        } else if (!visible && !this.bubbleVisible[name]) {
            clearTimeout(this.timeoutId[name]);
        } else {
            clearTimeout(this.timeoutId[name]);
            this.timeoutId[name] = setTimeout(() => {
                const bubble = 'infoBubble-' + name;
                this.bubbleVisible[name] = true;
                this.$nextTick(() => { (this.$refs[bubble] as TooltipBubble)[0].setPosition('top') });
            }, TIMING_TIMEOUT);
        }
    }

    /* PRIVATE */
    private trimDateFieldsFromName(name: string): string {
        if (this.prefix && name.startsWith(this.prefix)) {
            name = name.replace(`${this.prefix + '-'}`, '');
        }
        if (name.startsWith('date-')) {
            name = name.replace('date-', '');
        }

        if (name.endsWith('-fields')) {
            name = name.replace('-fields', '');
        }

        return name;
    }
}
</script>
