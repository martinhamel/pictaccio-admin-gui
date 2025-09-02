<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.overlay-ui {
    position: absolute;
    inset: auto 2rem 2rem auto;
    display: flex;
    justify-content: flex-end;
    gap: $grid-gap;
}

.setup-store-languages {
    display: flex;
    flex-direction: column;
    grid-column: 1/-1;
    gap: 1rem;

    .setup-available-languages {
        display: flex;
        flex-direction: column;
        gap: $grid-gap;

        .info-text {
            font-size: 1.8rem;
        }
    }
}

.primary {
    display: inline-block;
    margin-left: 1rem;
    font-size: 0.8em;
    font-weight: 300;
    color: var(--color-semantic-untouched);
}
</style>

<template>
    <div class="activity-control">
        <h2 class="h5">{{ $t(`activities.storeLanguages.title`) }}</h2>
        <div class="setup-store-languages">
            <div class="setup-available-languages">
                <information-box :colors="{border: 'var(--color-semantic-info)'}">
                    <span class="info-text">{{ $t(`activities.storeLanguages.availableLanguagesDescription`) }}</span>
                </information-box>
                <list-selector v-if="availableLanguages && $store.getters['StoreConfig/languagesList'] && listVisible"
                               ref="available-languages"
                               :checkbox-visible="true"
                               :current-selection="$store.getters['StoreConfig/languagesList'].map(language =>
                                    language.locale
                               )"
                               listName="available-languages"
                               :allow-reorder="true"
                               @change="inputChange"
                               @reordered="languageReordered"
                               @reordering="languageReordering">
                    <label v-for="language in getLanguages()" :key="language" :value="language">
                        {{ $t(`langName.${language}`) }}
                    </label>
                </list-selector>
            </div>
        </div>
    </div>
    <div class="overlay-ui" :class="unsavedChange ? '' : 'disabled'">
        <button class="btn btn-quaternary" @click="cancelClick">
            {{ $t(`generic.ui.revert`) }}
        </button>
        <button class="btn btn-primary" @click="saveLanguagesClick">
            {{ $t(`generic.ui.update`) }}
        </button>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { shallowCompare } from '@loufa/loufairy';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import InformationBox from '@pictaccio/admin-gui/src/views/components/widgets/InformationBox.vue';
import ListSelector from '@pictaccio/admin-gui/src/views/components/widgets/ListSelector.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import { Language } from '@pictaccio/shared/src/types/language';
import { StoreLanguageItem } from '@pictaccio/shared/src/types/store_language_item';
import { toRaw } from 'vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Store Languages',
    components: {
        InformationBox,
        ListSelector,
        FontAwesomeIcon,
        DocsLink
    }
})
export default class StoreLanguages extends AdminActivities {
    private availableLanguages: Language[];
    private languagesList: ListSelector;
    private listVisible = true;
    private primaryLabel: HTMLElement | null = null;

    public canSafelyExit(): boolean {
        const selection = (this.$refs['available-languages'] as ListSelector).getSelection();
        const storeLanguageItem = selection.map(locale => ({
            primary: selection.indexOf(locale) === 0,
            order: selection.indexOf(locale),
            locale
        }));
        let canExit = true;

        if (storeLanguageItem.length !== this.$store.getters['StoreConfig/languagesList'].length) {
            return false;
        }

        for (const language of storeLanguageItem) {
            const index = storeLanguageItem.indexOf(language);
            canExit = canExit && shallowCompare(this.$store.getters['StoreConfig/languagesList'][index], language);
        }

        return canExit;
    }

    /* LIFECYCLE */
    public async created(): Promise<void> {
        await super.created();
        this.$store.watch(() => this.$store.getters['StoreConfig/availableLanguagesList'],
            () => {
                this.availableLanguages = this.$store.getters['StoreConfig/availableLanguagesList'];
                this.initPrimaryLabel();
            }
        );

        try {
            await this.$store.dispatch('StoreConfig/getAvailableLanguages');
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    /* EVENT HANDLERS */
    private async cancelClick(): Promise<void> {
        this.listVisible = false;
        globalToast(this.$t('toastGuiMessages.successCancel'), 'info');
        this.$nextTick(() => this.listVisible = true);
    }

    private async languageReordered(): Promise<void> {
        this.inputChange();
        this.addPrimaryLabel();
    }

    private async languageReordering(): Promise<void> {
        this.removePrimaryLabel();
    }

    private async saveLanguagesClick(): Promise<void> {
        try {
            await this.saveLanguages();
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');
            this.unsavedChange = false;
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    /* PRIVATE */
    private addPrimaryLabel(): void {
        const primaryLanguage = this.languagesList.$el.querySelector('label');

        this.removePrimaryLabel();

        this.primaryLabel = document.createElement('span');
        this.primaryLabel.classList.add('primary');
        this.primaryLabel.setAttribute(this.$options.__scopeId, '');
        this.primaryLabel.textContent = `(${this.$t('generic.ui.primary')})`;

        primaryLanguage.append(this.primaryLabel);

        for (const language of this.availableLanguages) {
            this.languagesList.toggleCheckboxEnabled(language, true);
        }
        this.languagesList.toggleCheckboxChecked(primaryLanguage.getAttribute('value'), true);
        this.languagesList.toggleCheckboxEnabled(primaryLanguage.getAttribute('value'), false);
    }

    private getLanguages(): string[] {
        const activeLanguages = this.$store.getters['StoreConfig/languagesList']
            .sort((a, b) => a.order - b.order)
            .map(language => language.locale);
        const otherLanguages = this.availableLanguages.filter(language => !activeLanguages.includes(language));

        return [...activeLanguages, ...otherLanguages];
    }

    private initPrimaryLabel(): void {
        this.$nextTick(() => {
            if (!this.$refs['available-languages']) {
                return;
            }

            this.languagesList = this.$refs['available-languages'] as ListSelector;
            this.addPrimaryLabel();
        });
    }

    private async saveLanguages(): Promise<void> {
        const selectedLanguages = (this.$refs['available-languages'] as ListSelector).getSelection();
        const languageElements = this.languagesList.$el.querySelectorAll('label');
        const languageItems: StoreLanguageItem[] = [];
        let index = 0;

        for (const element of languageElements) {
            const language = element.getAttribute('value');

            if (!selectedLanguages.includes(language)) {
                continue;
            }

            languageItems.push({
                primary: index === 0,
                order: index++,
                locale: language
            });
        }

        try {
            await this.$store.dispatch('StoreConfig/setStoreLanguages', languageItems);
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    private removePrimaryLabel(): void {
        if (this.primaryLabel) {
            this.primaryLabel.remove();
            this.primaryLabel = null;
        }
    }
}
</script>
