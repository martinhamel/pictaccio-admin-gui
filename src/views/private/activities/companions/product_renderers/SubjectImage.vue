<style lang="scss" scoped>
.photo {
    --product-subject-width: 10rem;
    --product-subject-background-width: calc(var(--product-subject-width) * 0.5);
    --product-subject-background-overlaping: calc(var(--product-subject-width) * 0.33);
    display: flex;
    position: relative;
    width: max-content;

    .subject {
        width: var(--product-subject-width);
    }

    .background-container {
        position: relative;
        margin-left: calc(-1 * var(--product-subject-background-overlaping));
        padding-left: 0.2rem;
        padding-bottom: 0.2rem;
        overflow: clip;

        .background {
            width: var(--product-subject-background-width);
            position: relative;

            &::before {
                content: '';
                position: absolute;
                inset: -0.1rem -0.2rem 0.1rem;
                backdrop-filter: invert(1) grayscale(1) blur(7px) contrast(40);
            }

            img {
                position: relative;
                width: 100%;
                z-index: 2;
            }
        }

        .background-label {
            position: relative;
            z-index: 2;
            border-radius: 0 0 0.5rem 0.5rem;
            margin-top: -0.3rem;
            margin-left: auto;
            width: min-content;

            &::before {
                content: '';
                position: absolute;
                z-index: -1;
                inset: 0.2rem calc(
                        var(--product-subject-background-width) -
                        var(--product-subject-background-overlaping) -
                        -0.2rem
                    ) -0.15rem -0.2rem;
                backdrop-filter: invert(1) grayscale(1) blur(7px) contrast(40);
                border-bottom-left-radius: #{$ruler-border-radius * 0.7};
            }

            label {
                display: block;
                width: min-content;
                font-size: 1.2rem;
                padding: 0.2rem 0.5rem;
                border-radius: inherit;
                background: var(--label-color);
                color: var(--color-primary-6);
            }
        }
    }

    .photo-completion-check {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;

        &::before {
            $ruler-checkbox-offset: 0.1rem;
            content: '';
            position: absolute;
            width: #{$ruler-checkbox-size + ($ruler-checkbox-offset * 2)};
            height: #{$ruler-checkbox-size + ($ruler-checkbox-offset * 2)};
            border-radius: #{$ruler-border-radius * 1.15};
            pointer-events: none;
            translate: -#{$ruler-checkbox-offset} -#{$ruler-checkbox-offset};
            backdrop-filter: invert(1) grayscale(1) blur(7px) contrast(40);
        }
    }
}
</style>

<template>
    <div v-if="this.validatedPhoto" class="photo">
        <input v-show="validatedPhoto.itemType === 'subject'"
               type="checkbox"
               class="photo-completion-check"
               :data-item-id="validatedPhoto.itemId"
               :data-photo-id="validatedPhoto.photoId"
               :data-cart-item-id="cartItemId"
               @change="photoCheckChange">
        <img class="subject" :src="apiUrl + validatedPhoto.photoUrl">
        <div v-if="validatedPhoto.backgroundUrl" class="background-container">
            <div class="background">
                <img :src="apiUrl + validatedPhoto.backgroundUrl">
            </div>
            <div class="background-label">
                <label>{{ validatedPhoto.backgroundProductionIdentifier }}</label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { environment } from '@pictaccio/admin-gui/environment';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import { PhotoSelection } from '@pictaccio/shared/types/photo_selection';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'SubjectImage',
    components: {
        FontAwesomeIcon
    }
})
export default class SubjectImage extends Vue {
    @Prop
    private photo: PhotoSelection;
    @Prop
    private orderId: string;
    @Prop
    private cartItemId: string;

    private validatedPhoto: PhotoSelection;

    private apiUrl = environment.apiUrl;

    /* LIFECYCLE */
    public mounted(): void {
        if (!this.photo) {
            return;
        }
        this.validatedPhoto = this.photo;
    }

    /* EVENT HANDLER */
    private async photoCheckChange(event: MouseEvent): Promise<void> {
        const target = event.target as HTMLInputElement;
        const photoId = target.dataset.photoId;
        const itemId = target.dataset.itemId;
        const cartItemId = target.dataset.cartItemId;
        const orderId = this.orderId;
        const check = target.checked; // Kludge for MVP

        try {
            await this.$store.dispatch('Orders/applyCheck', {
                orderId,
                photoId,
                itemId,
                cartItemId,
                check: target.checked
            });
            target.checked = check; // Kludge for MVP
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }
}
</script>
