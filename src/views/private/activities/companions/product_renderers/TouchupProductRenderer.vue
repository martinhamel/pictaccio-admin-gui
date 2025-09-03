<style lang="scss">
@import '@pictaccio/admin-gui/scss/product_renderer.scss';

.touchup-comment {
    font-size: 1.2rem;
    width: 100%;
    max-width: 60ch;
    padding: 1rem;
}
</style>

<template>
    <div class="product-renderer touchups-product">
        <multi-columns :noStretch="true">
            <template #column-1>
                <h3 class="product-title">
                    <span class="product-title-name">
                        {{product.productNameLocale[$i18n.locale]}}
                    </span>
                </h3>
                <div class="product-image">
                    <img src="@/assets/touchups.webp" alt="Product Image">
                </div>
            </template>
            <template #column-2>
                <div class="product-info">
                    <multi-columns :no-stretch="true">
                        <template #column-1>
                            <ul>
                                <li>{{ $t('activities.viewOrder.productList.subtotal') }}</li>
                                <li :style="!product.comment ? 'visibility: hidden' : ''"
                                    class="comment-label">
                                    {{ $t('activities.viewOrder.productList.comment') }}
                                </li>
                            </ul>
                        </template>
                        <template #column-2>
                            <ul>
                                <li>
                                    <currency-label :value="product.subtotal"/>
                                </li>
                            </ul>
                        </template>
                    </multi-columns>
                    <div v-if="product.comment" class="comment">{{ product.comment }}</div>
                </div>
            </template>
            <template #column-3>
                <multi-columns :noStretch="true" :wrap="true">
                    <template #column-1>
                        <subject-image :photo="selection[product.photos[0]]"
                                       :order-id="orderId"
                                       :cart-item-id="product.cartItemId"/>
                    </template>
                </multi-columns>
            </template>
        </multi-columns>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { environment } from '@pictaccio/admin-gui/environment';
import CurrencyLabel from '@pictaccio/admin-gui/views/components/widgets/CurrencyLabel.vue';
import MultiColumns from '@pictaccio/admin-gui/views/components/widgets/MultiColumns.vue';
import SubjectImage from '@pictaccio/admin-gui/views/private/activities/companions/product_renderers/SubjectImage.vue';
import { CartItem } from '@pictaccio/shared/types/cart_item';
import { PhotoSelections } from '@pictaccio/shared/types/photo_selections';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'TouchupProductRenderer',
    components: {
        CurrencyLabel,
        MultiColumns,
        SubjectImage,
        FontAwesomeIcon
    }
})
export default class TouchupProductRenderer extends Vue {
    @Prop
    private product: CartItem;
    @Prop
    private selection: PhotoSelections;
    @Prop
    private orderId: string;

    private apiUrl = environment.apiUrl;

    /* LIFECYCLE */
}
</script>
