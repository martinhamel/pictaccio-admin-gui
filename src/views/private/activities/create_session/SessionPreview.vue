<style lang="scss" scoped>
.session-preview {
    position: relative;
    background-color: var(--color-background-page-3);
    border-radius: $ruler-border-radius;
    overflow: hidden;

    [data-theme-type="block"] & {
        border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
    }

    [data-theme-color="dark"] & {
        --color-background-unmatch-report: var(--color-primary-5);
        --color-background-unmatch-report-border: var(--color-mix-6-5-step-2);
        --color-background-unmatch-report-background: var(--color-mix-7-6-step-1);
        --color-background-session-preview: var(--color-mix-6-5-step-1);
    }

    [data-theme-color="light"] & {
        --color-background-unmatch-report: var(--color-mix-1-3-step-2);
        --color-background-unmatch-report-border: var(--color-mix-7-1-step-1);
        --color-background-unmatch-report-background: var(--color-mix-7-1-step-2);
        --color-background-session-preview: var(--color-mix-7-1-step-1);
    }
}

.outer-container {
    --img-size: 0;
    --title-1: 0;
    --title-2: 0;
    --gap: 0;
    --toast-size: 0;
    position: relative;
    overflow: hidden auto;
    inset: 0;
    height: 60vh;
    border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
    padding-top: 2rem;
    background-color: var(--color-background-session-preview);

    &::-webkit-scrollbar-track {
        margin-top: var(--toast-size);
    }

    .inner-container {
        position: relative;
        width: auto;
        margin: 2.5rem 1.5rem;

        :deep(.title) {
            position: absolute;

            &.h1 {
                font-size: var(--title-1);
            }

            &.h2 {
                font-size: var(--title-2);
            }
        }

        :deep(.image-container) {
            position: absolute;
            width: var(--img-size);
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-items: center;

            .spinner {
                border-radius: 50%;
                aspect-ratio: 1 / 1;
                width: calc(var(--img-size) / 3);
                border: 4px solid transparent;
                border-top: 4px solid hsla(var(--color-primary-4-h),
                        var(--color-primary-4-s),
                        var(--color-primary-4-l),
                        35%);
                margin: auto;

                @include animation(spin 2s cubic-bezier(.39, .62, .52, .98) infinite);

                @include keyframes(spin) {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }
            }

            img {
                width: 100%;
                aspect-ratio: 1 / 1;
                object-fit: contain;
            }
        }
    }
}

.toast-banner {
    position: absolute;
    z-index: 4;
    width: 100%;
    backdrop-filter: blur(20px);
    border: 1px solid var(--color-background-session-preview);
    border-bottom-width: 0;
    overflow: hidden;

    .background {
        position: absolute;
        inset: 0;
        background-color: var(--color-background-unmatch-report-background);
        border-radius: 0;
        opacity: 85%;

        [data-theme-type="line"] & {
            border-radius: $ruler-border-radius $ruler-border-radius 0 0;
        }
    }

    .content {
        @extend P;
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        position: relative;
        z-index: 1;
        overflow: hidden;

        .header-text {
            display: inline-flex;
            align-items: center;
        }
    }

    .unmatched-report {
        margin: 0;
        display: flex;

        .unmatched-images,
        .unmatched-subjects,
        .unmatched-groups {
            display: flex;
            gap: calc(#{$grid-gap} / 2);
            align-items: center;
        }
    }
}

.tooltips {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>

<template>
    <div class="session-preview">
        <div class="toast-banner" ref="toast-banner">
            <div class="background"></div>
            <div class="content">
                <span v-html="$t('activities.createSession.importPhotos.callToAction')" class="header-text">
                </span>
                <div class="unmatched-report" ref="unmatched-report" @mouseenter="toggleBubble(true)"
                    @mouseleave="toggleBubble(false)">
                    <badge :badgeColor="checkReportResult('images')">
                        <span class="unmatched-images">
                            <font-awesome-icon :icon="['fas', 'image-portrait']" />
                            <span>{{ unmatchedReport.unmatchedImages.length }}</span>
                        </span>
                    </badge>
                    <badge :badgeColor="checkReportResult('subjects')">
                        <span class="unmatched-subjects">
                            <font-awesome-icon :icon="['fas', 'user']" />
                            <span>{{ unmatchedReport.unmatchedSubjects.length }}</span>
                        </span>
                    </badge>
                    <badge :badgeColor="checkReportResult('groups')">
                        <span class="unmatched-groups">
                            <font-awesome-icon :icon="['fas', 'users']" />
                            <span>{{ unmatchedReport.unmatchedGroups.length }}</span>
                        </span>
                    </badge>
                    <tooltip-bubble v-if="bubbleVisible" ref="infoBubble" @mouseenter="hoverBubble(true)"
                        @mouseleave="hoverBubble(false)" :element="infoBubble" :spacing="{ top: 5 }">
                        <ul class="tooltips">
                            <li :class="checkReportResult('images')">
                                <p>{{ $t('activities.createSession.importPhotos.unmatchedImages',
                                    unmatchedReport.unmatchedImages.length, {
                                    n: unmatchedReport.unmatchedImages.length,
                                    total: totalReport.totalImages.length
                                }) }}</p>
                            </li>
                            <li :class="checkReportResult('subjects')">
                                <p>{{ $t('activities.createSession.importPhotos.unmatchedSubjects',
                                    unmatchedReport.unmatchedSubjects.length, {
                                    n: unmatchedReport.unmatchedSubjects.length,
                                    total: totalReport.totalSubjects.length
                                }) }}</p>
                            </li>
                            <li :class="checkReportResult('groups')">
                                <p>{{ $t('activities.createSession.importPhotos.unmatchedGroups',
                                    unmatchedReport.unmatchedGroups.length, {
                                    n: unmatchedReport.unmatchedGroups.length,
                                    total: totalReport.totalGroups.length
                                }) }}</p>
                            </li>
                        </ul>
                    </tooltip-bubble>
                </div>
            </div>
        </div>
        <div class="outer-container" ref="outer-container" @scroll="previewScroll">
            <div class="inner-container" ref="inner-container">

            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { TotalReports } from '@pictaccio/admin-gui/core/types/total_reports';
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import TooltipBubble from '@pictaccio/admin-gui/views/components/widgets/TooltipBubble.vue';
import { Vue, Component } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { renderHtml } from '@loufa/loufairy-client';
import { GroupPhotos } from '@pictaccio/admin-gui/core/types/group_photos';
import { ProcessedPhotos } from '@pictaccio/admin-gui/core/types/processed_photos';
import { SubjectPhotos } from '@pictaccio/admin-gui/core/types/subject_photos';
import { UnmatchedReports } from '@pictaccio/admin-gui/core/types/unmatched_reports';
import { fileAsDataURL, FileLoader } from '@pictaccio/admin-gui/core/file_as_data_url';

const IMG_SIZE = 14;
const GAP = 1;
const TITLE_1 = 3;
const TITLE_2 = 1.7;
const REM_SIZE = 10;

enum RenderItemType {
    TitleH1,
    TitleH2,
    GroupPhotoSet,
    SubjectPhotoSet
}

interface Future {
    loader: FileLoader,
    top: number
}

interface TitleCard {
    text: string;
}

interface RenderImg {
    placeholders: string;
    futures: FileLoader[];
}

const RENDERERS = {
    [RenderItemType.TitleH1]: (ref: TitleCard, y: number) =>
        `<h1 class="title h1" style="inset: ${y}rem auto auto 0">${ref.text}</h1>`,
    [RenderItemType.TitleH2]: (ref: TitleCard, y: number) =>
        `<h2 class="title h2" style="inset: ${y}rem auto auto 0">${ref.text}</h2>`,
    [RenderItemType.GroupPhotoSet]: (ref: GroupPhotos, imgByRow: number, y: number): RenderImg => ({
        placeholders: ref.photos.map((i, index) =>
            `<div style="inset: ${y + (Math.floor(index / imgByRow) * (IMG_SIZE + GAP))}rem
                auto auto ${(IMG_SIZE + GAP) *
            ((((index + 1) % imgByRow) - 1) === -1
                ? imgByRow - 1
                : (((index + 1) % imgByRow) - 1)
            )}rem"
                class="image-container">
                    <div class="spinner" style="animation-delay: ${(Math.random() + 0.01) / 2}s"></div>
                </div>`).join(''),
        futures: ref.photos.map(i => fileAsDataURL(i))
    }),
    [RenderItemType.SubjectPhotoSet]: (ref: SubjectPhotos, imgByRow: number, y: number) => ({
        placeholders: ref.photos.map((i, index) =>
            `<div style="inset: ${y + (Math.floor(index / imgByRow) * (IMG_SIZE + GAP))}rem
                auto auto ${(IMG_SIZE + GAP) *
            ((((index + 1) % imgByRow) - 1) === -1
                ? imgByRow - 1
                : (((index + 1) % imgByRow) - 1)
            )}rem"
                class="image-container">
                    <div class="spinner" style="animation-delay: ${(Math.random() + 0.01) / 2}s"></div>
                </div>`).join(''),
        futures: ref.photos.map(i => fileAsDataURL(i))
    })
};

interface RenderItem {
    type: RenderItemType;
    top: number;
    render: (ref: GroupPhotos | SubjectPhotos | TitleCard, imgByRow: number, y: number) => string | RenderImg;
    abortRef?: { abort: () => void }[];
}

type RenderList = { [key: number]: RenderItem };

const TIMING_TIMEOUT = 700;

@Component({
    name: 'Session Preview',
    components: {
        Badge,
        TooltipBubble,
        FontAwesomeIcon
    },
    expose: [
        'clear',
        'update'
    ]
})
export default class SessionPreview extends Vue {
    private renderList: RenderList;
    private unmatchedReport: UnmatchedReports = {
        unmatchedImages: [],
        unmatchedSubjects: [],
        unmatchedGroups: []
    };
    private totalReport: TotalReports = {
        totalImages: [],
        totalSubjects: [],
        totalGroups: []
    };
    private infoBubble: Node;
    private bubbleVisible = false;
    private timeoutId = undefined;

    public clear(): void {
        (this.$refs['inner-container'] as HTMLElement).innerHTML = '';
        this.unmatchedReport = {
            unmatchedImages: [],
            unmatchedSubjects: [],
            unmatchedGroups: []
        };
        this.totalReport = {
            totalImages: [],
            totalSubjects: [],
            totalGroups: []
        };
    }

    public update(processedPhotos: ProcessedPhotos, unmatchedReport: UnmatchedReports, totalReport: TotalReports): void {
        this.calculateViewHeightAndPrepareRenderList(processedPhotos);
        this.renderViewport(0, (this.$refs['outer-container'] as HTMLElement).clientHeight / REM_SIZE);
        this.unmatchedReport = unmatchedReport;
        this.totalReport = totalReport;
    }

    /* LIFECYCLE */
    public mounted(): void {
        this.infoBubble = this.$refs['unmatched-report'] as Node;
        (this.$refs['outer-container'] as HTMLElement).style.setProperty('--img-size', `${IMG_SIZE}rem`);
        (this.$refs['outer-container'] as HTMLElement).style.setProperty('--title-1', `${TITLE_1}rem`);
        (this.$refs['outer-container'] as HTMLElement).style.setProperty('--title-2', `${TITLE_2}rem`);
        (this.$refs['outer-container'] as HTMLElement).style.setProperty('--gap', `${GAP}rem`);
        this.calculateFeedbackBannerHeight();
    }

    /* EVENT HANDLERS */
    private hoverBubble(visible: boolean) {
        if (!visible && this.bubbleVisible) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.bubbleVisible = false;
            }, TIMING_TIMEOUT);
        } else if (visible && this.bubbleVisible) {
            clearTimeout(this.timeoutId);
        }
    }

    private toggleBubble(visible: boolean) {
        if (!visible && this.bubbleVisible) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.bubbleVisible = false;
            }, TIMING_TIMEOUT);
        } else if (!visible && !this.bubbleVisible) {
            clearTimeout(this.timeoutId);
        } else {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.bubbleVisible = true;
                this.$nextTick(() => { (this.$refs['infoBubble'] as TooltipBubble).setPosition('top') });
            }, TIMING_TIMEOUT);
        }
    }

    private previewScroll(event): void {
        this.renderViewport((event.target.scrollTop / REM_SIZE),
            ((event.target.scrollTop + event.target.clientHeight) / REM_SIZE));
    }

    /* PRIVATE */
    private calculateFeedbackBannerHeight(): void {
        const bannerHeight = (this.$refs['toast-banner'] as HTMLElement).clientHeight;

        (this.$refs['outer-container'] as HTMLElement).style.setProperty('--toast-size',
            `${bannerHeight}px`)
    }

    private calculateViewHeightAndPrepareRenderList(processedPhotos: ProcessedPhotos): void {
        const renderList: RenderList = {};
        const containerWidth = (this.$refs['outer-container'] as HTMLElement).clientWidth / REM_SIZE;
        const innerContainer = (this.$refs['inner-container'] as HTMLElement);
        const imgPerRow = Math.floor(containerWidth / (IMG_SIZE + GAP));
        let height = TITLE_1 + GAP;

        innerContainer.innerHTML = '';

        renderList[0] = {
            type: RenderItemType.TitleH1,
            top: 0,
            render: RENDERERS[RenderItemType.TitleH1].bind(null,
                { text: this.$t('activities.createSession.preview.groupTitle') }, 0)
        }

        for (const group of Object.values(processedPhotos.groups)) {
            renderList[Math.floor(height)] = {
                type: RenderItemType.TitleH2,
                top: height,
                render: RENDERERS[RenderItemType.TitleH2].bind(null,
                    { text: group.name }, height)
            }
            height += TITLE_2 + GAP;
            const imgCount = group.photos.length;
            renderList[Math.floor(height)] = {
                type: RenderItemType.GroupPhotoSet,
                top: height,
                render: RENDERERS[RenderItemType.GroupPhotoSet].bind(null, group, imgPerRow, height)
            }
            height += Math.ceil(imgCount / imgPerRow) * (IMG_SIZE + GAP);
        }

        renderList[Math.floor(height)] = {
            type: RenderItemType.TitleH1,
            top: height,
            render: RENDERERS[RenderItemType.TitleH1].bind(null,
                { text: this.$t('activities.createSession.preview.subjectTitle') }, height)
        }
        height += TITLE_1 + GAP;

        for (const subject of Object.values(processedPhotos.subjects)) {
            renderList[Math.floor(height)] = {
                type: RenderItemType.TitleH2,
                top: height,
                render: RENDERERS[RenderItemType.TitleH2].bind(null,
                    { text: this.makeName(subject.firstName, subject.lastName) }, height)
            }
            height += TITLE_2 + GAP;
            const imgCount = subject.photos.length;
            renderList[Math.floor(height)] = {
                type: RenderItemType.SubjectPhotoSet,
                top: height,
                render: RENDERERS[RenderItemType.SubjectPhotoSet].bind(null, subject, imgPerRow, height)
            }
            height += Math.ceil(imgCount / imgPerRow) * (IMG_SIZE + GAP);
        }

        innerContainer.style.height = `${height}rem`;
        this.renderList = renderList;
    }

    private checkReportResult(report: string): string {
        switch (report) {
            case 'images':
                return this.checkReportResultClass(
                    this.unmatchedReport.unmatchedImages.length,
                    this.totalReport.totalImages.length)
            case 'subjects':
                return this.checkReportResultClass(
                    this.unmatchedReport.unmatchedSubjects.length,
                    this.totalReport.totalSubjects.length)
            case 'groups':
                return this.checkReportResultClass(
                    this.unmatchedReport.unmatchedGroups.length,
                    this.totalReport.totalGroups.length)
            default:
                return null;
        }
    }

    private checkReportResultClass(unmatch: number, total: number): string {
        const percent = unmatch / total * 100;
        if (percent === 0) {
            return 'var(--color-semantic-success)';
        } else if (percent < 5) {
            return 'var(--color-semantic-warning)';
        } else if (percent > 5) {
            return 'var(--color-semantic-error)';
        } else {
            return '';
        }
    }

    private findTopItem(top: number): number {
        const searchDomain: number[] = Object.keys(this.renderList).map(i => Number(i));
        let min = 0;
        let max = searchDomain.length - 1;
        let iteration = 0;

        while (min !== max) {
            const index = Math.floor((min + max) / 2);

            if (iteration > 3) {
                break;
            } else if (searchDomain[index] < top) {
                min = index;
            } else {
                max = index - 1;
            }

            ++iteration;
        }

        if (searchDomain[min] === top) {
            return searchDomain[min];
        } else if (searchDomain[max] > top) {
            while (searchDomain[max] > top) {
                --max;
            }
        }
        return searchDomain[max];
    }

    private makeName(first: string, last: string): string {
        return last && first
            ? `${last}, ${first}`
            : !last && first
                ? first
                : last && !first
                    ? last
                    : this.$t('activities.createSession.preview.unknownName');
    }

    private renderViewport(top: number, bottom: number): void {
        const num = this.findTopItem(top);
        const culled = Object.keys(this.renderList);
        const renderCandidates = culled.splice(culled.findIndex(i => Number(i) === num));
        const innerContainer = (this.$refs['inner-container'] as HTMLElement);
        let unrenderCandidates: string[] = [];

        for (const top of culled) {
            if (Array.isArray(this.renderList[top].abortRef)) {
                for (const abortRef of this.renderList[top].abortRef) {
                    if (typeof abortRef.abort === 'function') {
                        abortRef.abort();
                    }
                }
            }
            innerContainer.querySelectorAll(`[hash="${top}"]`).forEach(i => i.remove());
        }

        for (const key of renderCandidates) {
            const item = this.renderList[key];
            if (Number(key) > bottom) {
                unrenderCandidates = renderCandidates.splice(renderCandidates.findIndex(i => i === key));
                break;
            }

            if (innerContainer.querySelector(`[hash="${Math.floor(Number(item.top))}"]`)) {
                continue;
            }

            const itemRender: string | RenderImg = item.render();

            if (typeof itemRender !== 'string') {
                item.abortRef = itemRender.futures.map(f => f.abortRef);
            }

            const node = typeof itemRender === 'string'
                ? renderHtml(itemRender)

                : (this.$nextTick(() => itemRender.futures.forEach((imgPromise, index) =>
                    imgPromise.promise.then(imgUrl => {
                        // eslint-disable-next-line no-return-assign
                        return (node[index].innerHTML = `<img src="${imgUrl}">`)
                    })
                )),
                    Array.from(renderHtml(itemRender.placeholders)));

            if (Array.isArray(node)) {
                const length = node.length;
                for (const [index, img] of Array.from(node).reverse().entries()) {
                    img.setAttribute('hash', Math.floor(Number(item.top)).toString());
                    node[length - index - 1] = innerContainer.appendChild(img);
                }
            } else {
                node[0].setAttribute('hash', Math.floor(Number(item.top)).toString());
                innerContainer.appendChild(node[0]);
            }
        }

        for (const top of unrenderCandidates) {
            if (Array.isArray(this.renderList[top].abortRef)) {
                for (const abortRef of this.renderList[top].abortRef) {
                    if (typeof abortRef.abort === 'function') {
                        abortRef.abort();
                    }
                }
            }
            innerContainer.querySelectorAll(`[hash="${top}"]`).forEach(i => i.remove());
        }
    }
}
</script>
