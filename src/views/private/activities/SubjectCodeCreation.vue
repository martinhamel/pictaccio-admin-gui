<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.activity-control {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr)) !important;
}

.content {
    grid-column: 1 / -2;
    //background-color: var(--color-background-page-3);
    padding: 1.5rem $activity-control-padding-side;
    display: inherit;
    gap: inherit;
    grid-template-columns: inherit;
}
.content-section {
    display: grid;
    grid-column: 1 / 3;
    grid-template-columns: inherit;
    gap: inherit;
    grid-auto-flow: dense;

    .h6 {
        margin: 0;
        &:first-child {
            grid-column: 1 / -1;
        }
    }

    .group {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        max-width: $ruler-input-max-width;
        gap: math.div($grid-gap, 2);
        padding-bottom: 1.5rem;

        > span {
            white-space: nowrap;
            display: inline-flex;
        }

        input {
            margin: 0;
        }

        .preview-label {
            display: block;
            min-height: $ruler-input-height;
            white-space: normal;
            padding: 0.7rem 1rem;
            border: 2px solid var(--color-input-background);
            border-radius: $ruler-border-radius;
            font-size: 1.5rem;
            font-weight: 400;
        }
    }

    .btn {
        justify-self: baseline;
    }
}

.unused-code-list-box {
    grid-column: -2 / -1;
    position: relative;
    border-radius: $ruler-border-radius;
    overflow: clip;

    .unused-code-list {
        position: absolute;
        inset: 0;
        overflow: clip auto;

        :deep(.code-snippet-container) {
            height: 100%;
            border-width: 0;
            border-color: transparent;
            border-style: none;

            .code-snippet {
                height: 100%;
                margin-top: 0;
                line-height: 1.6rem;
                padding: 0.7rem 1rem;
                font-size: 1.2rem
            }
        }
    }
}
</style>

<template>
    <section id="store-status" class="activity-wrapper">
        <activities-tabs ref="tabs"/>
        <div class="activity-control fit-sides">
            <information-box :colors="{ border: 'var(--color-semantic-info)' }">
                <p>{{ $t('activities.subjectCodeCreation.toolDescription') }}</p>
            </information-box>
            <div class="content">
                <div class="content-section">
                    <div class="group">
                        <span>
                            <h3 class="h6">{{ $t('activities.subjectCodeCreation.characterSet.title') }}</h3>
                            <tooltip :sup="true">
                                <span class="help-text">
                                    {{ $t('activities.subjectCodeCreation.characterSet.description') }}
                                </span>
                            </tooltip>
                        </span>
                        <dropdown :dropdown-name="'character-set'"
                                  @change="characterSetChanged">
                            <label value="alphaNumeric">
                                {{ $t('activities.subjectCodeCreation.characterSet.alphaNumeric') }}
                            </label>
                            <label value="alphaNumericAlikeless">
                                {{ $t('activities.subjectCodeCreation.characterSet.alphaNumericAlikeless') }}
                            </label>
                            <label value="numerical">
                                {{ $t('activities.subjectCodeCreation.characterSet.numeric') }}
                            </label>
                            <label value="custom">
                                {{ $t('activities.subjectCodeCreation.characterSet.custom') }}
                            </label>
                        </dropdown>
                    </div>
                    <div class="group">
                        <h3 class="h6">{{ !characterSetIsCustom
                            ? $t('activities.subjectCodeCreation.characterSet.preview')
                            : $t('activities.subjectCodeCreation.characterSet.customPreview')
                            }}</h3>
                        <label class="preview-label" v-if="!characterSetIsCustom">
                            {{ subjectCodeRequest.characterSet }}
                        </label>
                        <input v-else type="text" v-model="characterSetMap.custom">
                    </div>
                </div>
                <div class="content-section">
                    <div class="group">
                        <span>
                            <h3 class="h6">{{ $t('activities.subjectCodeCreation.prefix.title') }}</h3>
                            <tooltip :sup="true">
                                <span class="help-text">
                                    {{ $t('activities.subjectCodeCreation.prefix.description') }}
                                </span>
                            </tooltip>
                        </span>
                        <input type="text" v-model="subjectCodeRequest.prefix">
                    </div>
                    <div class="group">
                        <h3 class="h6">{{ $t('activities.subjectCodeCreation.length.title') }}</h3>
                        <input type="number" v-model="subjectCodeRequest.length">
                    </div>
                </div>
                <div class="content-section">
                    <div class="group">
                        <h3 class="h6">{{ $t('activities.subjectCodeCreation.numberToGenerate.title') }}</h3>
                        <input type="number"
                               min="1"
                               :max="maxCount"
                               v-model="subjectCodeRequest.count"
                               @change="numberToGenerateChanged">
                    </div>
                </div>
                <div class="content-section">
                    <button class="btn btn-primary" @click="generateCodesClick">
                        {{ $t('activities.subjectCodeCreation.btn') }}
                    </button>
                </div>
            </div>
            <div class="unused-code-list-box">
                <div class="unused-code-list">
                    <code-snippet ref="unused-code-text-area">
                        {{ codes.join('\n') }}
                    </code-snippet>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { SubjectCodeList } from '@pictaccio/admin-gui/src/types/subject_code_list';
import { pushBreadcrumb } from '@pictaccio/admin-gui/src/utils/global_breadcrumb';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import CodeSnippet from '@pictaccio/admin-gui/src/views/private/activities/companions/CodeSnippet.vue';
import Tooltip from '@pictaccio/admin-gui/src/views/components/widgets/Tooltip.vue';
import { Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Dropdown from '@pictaccio/admin-gui/src/views/components/widgets/Dropdown.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import { SubjectCodeGenerateQuery } from '@pictaccio/admin-gui/src/models/subject_code_generate_query';

@Component({
    name: 'Free Shipping',
    components: {
        CodeSnippet,
        InformationBox,
        Tooltip,
        FontAwesomeIcon,
        Dropdown,
        DocsLink
    }
})
export default class SubjectCodeCreation extends AdminActivities {
    private subjectCodeRequest: SubjectCodeGenerateQuery = new SubjectCodeGenerateQuery();
    private characterSetMap = {
        alphaNumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        alphaNumericAlikeless: 'ABCDEFGHJKPQRSTUXYZ23456789',
        numerical: '0123456789',
        custom: null
    }
    private characterSetIsCustom = false;
    private codes: SubjectCodeList = [];
    private maxCount = 100000;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'manageSessions');
    }

    public async mounted(): Promise<void> {
        await super.mounted();
        this.subjectCodeRequest.characterSet = this.characterSetMap.alphaNumeric;

        pushBreadcrumb({
            id: 'level2',
            display: 'activities.tabsTitles.subjectCodeCreation',
            routerLink: '/activities/subject-code-creation'
        });
    }

    /* EVENT HANDLERS */
    private characterSetChanged(event): void {
        this.characterSetIsCustom = event.selection === 'custom';

        if (this.characterSetIsCustom) {
            this.characterSetMap.custom = this.characterSetMap.custom ?? this.subjectCodeRequest.characterSet;
        } else {
            this.subjectCodeRequest.characterSet = this.characterSetMap[event.selection];
        }

        this.calculateMaxCount();
    }

    private async generateCodesClick(): Promise<void> {
        this.calculateMaxCount();

        if (this.subjectCodeRequest.count > this.maxCount) {
            globalToast(this.$t('activities.subjectCodeCreation.numberToGenerate.maxCountExceeded'),
                'warning');
            return;
        }

        try {
            await this.$store.dispatch('SubjectCodes/generateCodes', this.subjectCodeRequest);
        } catch (error) {
            globalToast(this.$t('messages.createError'), 'error');
        }

        const codes: SubjectCodeList = this.$store.getters['SubjectCodes/codes'];

        if (!codes) {
            globalToast(this.$t('messages.requestError'), 'warning');
            return;
        }

        this.codes = [...this.codes, ...codes];

        try {
            await navigator.clipboard.writeText(codes.join('\n'));
            globalToast(this.$t('generic.ui.textCopied'), 'success');
        } catch (e) {
            globalToast(this.$t('generic.ui.textFailedCopy'), 'warning');
        }
    }

    private numberToGenerateChanged(): void {
        this.calculateMaxCount();
    }

    /* PRIVATE */
    private calculateMaxCount(): void {
        this.maxCount = Math.min(
            Math.pow(this.subjectCodeRequest.characterSet.length, this.subjectCodeRequest.length),
            100000
        );
    }
}
</script>
