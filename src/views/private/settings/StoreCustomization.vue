<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/activities';

.overlay-ui {
    position: absolute;
    inset: auto 2rem 2rem auto;
    display: flex;
    justify-content: flex-end;
    gap: $grid-gap;

    .btn {
        filter: brightness(1.2);
    }
}

.setup-store-customization {
    grid-column: 1 / -1;
    display: flex;
    gap: $grid-gap;
    flex-direction: column;

    > div {
        padding: $grid-gap;
        position: relative;
        background-color: var(--color-background-page-2);
        border-radius: $ruler-border-radius;

        >.subtitle {
            margin: 0.3rem 0 0.5rem;
            --font-weight: 700 !important;
        }
    }

    .subtitle {
        --font-weight: 400 !important;
        position: relative;
        font-size: 1.8rem;
        margin: 0.3rem 0;
        width: 100%;
        grid-column: 1 / -1;
    }
}

.setup-store-name {
    //
}

.setup-images {
    display: flex;
    gap: 0 $grid-gap;
    flex-wrap: wrap;

    :deep(.image-upload-holder) {
        background-color: var(--color-input-background);
        border: none;
        height: 26rem;
    }

    .setup-logo {
        display: flex;
        flex-direction: column;
        width: min-content;

        .logo-background {
            width: min-content;
        }
    }

    .setup-watermark {
        display: flex;
        flex-direction: column;
        width: min-content;

        .logo-background {
            width: min-content;
        }
    }
}

.setup-color {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

    .color-picker-box {
        padding: 0;
        display: flex;
        flex-direction: column;

        > label {
            margin: 0;
            --font-weight: 400;
        }
    }
}

.setup-urls {
    .urls-box {
        display: grid;
        grid-template-columns: min-content 1fr;
        align-items: center;
        gap: 1rem;

        .url-box {
            display: contents;
            gap: 0.5rem;

            > input {
                margin-left: 0;

                &:invalid {
                    border-color: var(--color-semantic-error);
                }
            }
        }

        label {
            --font-weight: 400;
            margin: 0;
            white-space: nowrap;
        }
    }
}
</style>

<template>
    <div class="activity-control boxes-display">
        <h2 class="h5">{{ $t(`activities.storeCustomization.title`) }}</h2>
        <div class="setup-store-customization">
            <div class="setup-store-name">
                <label class="subtitle">{{ $t(`activities.storeCustomization.setStoreName`) }}</label>
                <form ref="store-name-form" prevent-submit="true">
                    <input type="text" name="store-name" v-model="storeName" @change="inputChange">
                </form>
            </div>
            <div class="setup-color" v-if="colors">
                <label class="subtitle">{{ $t(`activities.storeCustomization.selectColor`) }}</label>
                <div class="color-picker-box"
                     v-for="color in Object.values(colors).filter(color => colorUsedInTransac.includes(color.key))"
                     :key="color">
                    <label>{{ $t(`activities.storeCustomization.color.${color.key}`) }}</label>
                    <fused-inputs :fusedInputName="color.key" @change="inputChange">
                        <input :id="color.key"
                               type="color"
                               v-model="color.value">
                        <input type="text" v-model="color.value">
                    </fused-inputs>
                </div>
            </div>
            <div class="setup-images">
                <label class="subtitle">{{ $t(`activities.storeCustomization.uploadImages`) }}</label>
                <div class="setup-logo">
                    <label class="subtitle">{{ $t(`activities.storeCustomization.uploadLogo`) }}</label>
                    <div class="logo-background">
                        <image-upload :fileLimit="1"
                                      :deletable="false"
                                      selectable="none"
                                      @imageSelected="verifyLogoUpload"
                                      ref="logo-upload"
                                      :multiple="false" />
                    </div>
                </div>
                <div class="setup-watermark">
                    <label class="subtitle">{{ $t(`activities.storeCustomization.uploadWatermark`) }}</label>
                    <div class="logo-background">
                        <image-upload :fileLimit="1"
                                      :deletable="false"
                                      selectable="none"
                                      @imageSelected="verifyWatermarkUpload"
                                      ref="watermark-upload"
                                      :multiple="false" />
                    </div>
                </div>
            </div>
            <div class="setup-urls">
                <label class="subtitle">{{ $t(`activities.storeCustomization.setUrls`) }}</label>
                <form ref="urls-form" class="urls-box" v-if="urls" prevent-submit="true">
                    <div v-for="url in urls" :key="url" class="url-box">
                        <label>{{ $t(`activities.storeCustomization.urls.${url.key}`) }}</label>
                        <input type="url" :name="url.key" v-model="url.value" @change="inputChange"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="overlay-ui" :class="unsavedChange ? '' : 'disabled'">
        <button class="btn btn-quaternary" @click="cancelClick">
            {{ $t(`generic.ui.revert`) }}
        </button>
        <button class="btn btn-primary" @click="saveStoreCustomizationClick">
            {{ $t(`generic.ui.update`) }}
        </button>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { deepCompare } from '@loufa/loufairy';
import { createValidator, getFormInputValues } from '@loufa/loufairy-client';
import { i18n } from '@pictaccio/admin-gui/src/i18n';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import { isFile } from '@pictaccio/admin-gui/src/utils/is_file';
import ImageUpload from '@pictaccio/admin-gui/src/views/components/widgets/ImageUpload.vue';
import AdminActivities from '@pictaccio/admin-gui/src/views/private/activities/companions/admin_activities';
import DocsLink from '@pictaccio/admin-gui/src/views/private/activities/companions/DocsLink.vue';
import { CssStyleTransactional } from '@pictaccio/shared/src/types/css_color_descriptor';
import { toRaw } from 'vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'Store Customization',
    components: {
        FontAwesomeIcon,
        ImageUpload,
        DocsLink
    }
})
export default class StoreCustomization extends AdminActivities {
    private storeName = '';
    private colors: Record<string, any> = {};
    private logo = 'logo.png';
    private urls: Record<string, any> = {};
    private watermark = 'watermark.png';

    private colorUsedInTransac = ['accent'];

    public canSafelyExit(): boolean {
        const logo = (this.$refs['logo-upload'] as ImageUpload).getFiles()[0];
        const watermark = (this.$refs['watermark-upload'] as ImageUpload).getFiles()[0];
        const colors = {};
        const urls = {};
        Object.entries(this.$store.getters['StoreCustomization/brandingColorAccents'])
            .map(([key, value]) => colors[key] = { key, value });
        Object.entries(this.$store.getters['StoreCustomization/externalUrls'])
            .map(([key, value]) => urls[key] = { key, value });

        return deepCompare(colors, toRaw(this.colors)) &&
            deepCompare(urls, toRaw(this.urls)) &&
            this.storeName === this.$store.getters['StoreConfig/storeConfig'].storeName &&
            logo['path'] === this.logo &&
            watermark['path'] === this.watermark;
    }

    /* LIFECYCLE */
    public async created(): Promise<void> {
        try {
            await this.$store.dispatch('StoreCustomization/readCustomization');
            await this.$store.dispatch('StoreConfig/loadStoreConfig');
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    public async mounted(): Promise<void> {
        try {
            await this.$store.dispatch('StoreConfig/loadStoreConfig');
            this.setInternalValues(true);
            this.applyLogo();
            this.applyWatermark();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    /* EVENT HANDLERS */
    private async cancelClick(): Promise<void> {
        try {
            await this.$store.dispatch('StoreCustomization/readCustomization');
            await this.$store.dispatch('StoreConfig/loadStoreConfig');
            this.setInternalValues(true);
            this.applyLogo();
            this.applyWatermark();
            this.unsavedChange = false;
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async saveStoreCustomizationClick(): Promise<void> {
        try {
            await Promise.all([
                this.saveStoreConfig(),
                this.saveColor(),
                this.saveLogo(),
                this.saveUrls(),
                this.saveWatermark()
            ]);

            await this.$store.dispatch('StoreConfig/commitStoreConfig');
            await this.$store.dispatch('StoreStatus/checkStoreConfigured');

            globalToast(i18n.global.t('toastGuiMessages.successUpdate'), 'success');
            this.unsavedChange = false;

            this.applyLogo();
            this.applyWatermark();
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    /* PRIVATE */
    private applyLogo(): void {
        if (typeof this.logo !== 'string') {
            return;
        }
        (this.$refs['logo-upload'] as ImageUpload).setFiles([this.logo]);
    }

    private applyWatermark(): void {
        if (typeof this.watermark !== 'string') {
            return;
        }
        (this.$refs['watermark-upload'] as ImageUpload).setFiles([this.watermark]);
    }

    private async saveColor(): Promise<void> {
        const colors = CssStyleTransactional;

        Object.entries(this.colors)
            .map(([key, value]) => colors[key] = value.value);

        await this.$store.dispatch('StoreCustomization/saveColors', colors);
    }

    private async saveLogo(): Promise<void> {
        const images = (this.$refs['logo-upload'] as ImageUpload).getFiles();
        let image;

        if (Array.isArray(images)) {
            image = images[0];
        } else {
            image = images;
        }

        if (!image || !isFile(image)) {
            return;
        }

        const type = (image as File).type;
        if (!['image/png', 'image/jpeg', 'image/svg+xml'].includes(type)) {
            globalToast(this.$t('activities.branding.uploadLogoError'), 'warning');
            (this.$refs['logo-upload'] as ImageUpload).setFiles([]);
            return;
        }
        await this.$store.dispatch('StoreCustomization/saveLogo', image);
    }

    private async saveStoreConfig(): Promise<void> {
        await this.$store.dispatch('StoreConfig/setStoreConfig', {
            key: 'storeName',
            value: this.storeName
        });
    }

    private async saveUrls(): Promise<void> {
        const form = this.$refs['urls-form'] as Element;
        const validator = createValidator(form);
        if (validator.validate()) {
            await this.$store.dispatch('StoreCustomization/saveUrls', getFormInputValues(form as HTMLElement));
        } else {
            globalToast(this.$t('activities.storeCustomization.invalidUrl'), 'warning');
        }
    }

    private async saveWatermark(): Promise<void> {
        const images = (this.$refs['watermark-upload'] as ImageUpload).getFiles();
        let image;

        if (Array.isArray(images)) {
            image = images[0];
        } else {
            image = images;
        }

        if (!image || !isFile(image)) {
            return;
        }

        const type = (image as File).type;
        if (!['image/png', 'image/jpeg', 'image/svg+xml'].includes(type)) {
            globalToast(this.$t('activities.branding.uploadLogoError'), 'warning');
            (this.$refs['watermark-upload'] as ImageUpload).setFiles([]);
            return;
        }

        try {
            await this.$store.dispatch('StoreConfig/saveWatermark', image);
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }

        try {
            await this.$store.dispatch('StoreConfig/loadHasWatermark');
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private setInternalColors(): void {
        Object.entries(this.$store.getters['StoreCustomization/brandingColorAccents'])
            .map(([key, value]) => this.colors[key] = { key, value });
    }

    private setInternalUrls(): void {
        Object.entries(this.$store.getters['StoreCustomization/externalUrls'])
            .map(([key, value]) => this.urls[key] = { key, value });
    }

    private setInternalValues(mounting = false): void {
        this.storeName = this.$store.getters['StoreConfig/storeConfig'].storeName;
        this.setInternalColors();
        this.setInternalUrls();

        if (mounting) {
            this.$store.watch(
                () => this.$store.getters['StoreCustomization/brandingColorAccents'],
                () => this.setInternalColors()
            );
            this.$store.watch(
                () => this.$store.getters['StoreCustomization/externalUrls'],
                () => this.setInternalUrls()
            );
        }
    }

    private verifyLogoUpload(data): void {
        const image = data.file;

        if (!isFile(image)) {
            return;
        }

        const type = image.type;

        if (!['image/png', 'image/jpeg', 'image/svg+xml'].includes(type)) {
            globalToast(this.$t('activities.branding.uploadLogoError'), 'warning');
            (this.$refs['logo-upload'] as ImageUpload).setFiles([]);
        }

        this.unsavedChange = true;
    }

    private verifyWatermarkUpload(data): void {
        const image = data.file;

        if (!isFile(image)) {
            return;
        }

        const type = image.type;

        if (!['image/png', 'image/jpeg', 'image/svg+xml'].includes(type)) {
            globalToast(this.$t('activities.branding.uploadLogoError'), 'warning');
            (this.$refs['watermark-upload'] as ImageUpload).setFiles([]);
        }

        this.unsavedChange = true;
    }
}
</script>
