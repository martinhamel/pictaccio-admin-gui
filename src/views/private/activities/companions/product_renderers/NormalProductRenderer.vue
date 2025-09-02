<style lang="scss" scoped>
@import '@pictaccio/admin-gui/src/scss/product_renderer.scss';
</style>

<template>
    <div class="product-renderer normal-product">
        <multi-columns :noStretch="true">
            <template #column-1>
                <h3 class="product-title">
                    <span class="product-title-name">
                        {{product.productNameLocale[$i18n.locale]}}
                    </span>
                    <span v-if="product.quantity > 1"
                          class="product-title-quantity"> x&thinsp;{{ product.quantity }}</span>
                </h3>
                <div class="product-image">
                    <img :src="apiUrl + product.productPhoto.url" alt="Product Image">
                </div>
            </template>
            <template #column-2>
                <div class="product-info">
                    <multi-columns :no-stretch="true">
                        <template #column-1>
                            <ul>
                                <li>{{ $t('activities.viewOrder.productList.quantity') }}</li>
                                <li>{{ calculatePriceByQuantity(
                                            product.subtotal,
                                            (product.quantity * product.photos.length)
                                        ) !== product.productPrice
                                    ? $t('generic.ui.scaledPrice')
                                    : $t('activities.viewOrder.productList.productPrice') }}</li>
                                <li>{{ $t('activities.viewOrder.productList.subtotal') }}</li>
                                <li :style="!product.comment ? 'visibility: hidden' : ''"
                                    class="comment-label">
                                    {{ $t('activities.viewOrder.productList.comment') }}
                                </li>
                            </ul>
                        </template>
                        <template #column-2>
                            <ul>
                                <li>{{ product.quantity }}</li>
                                <li>
                                    <currency-label :value="calculatePriceByQuantity(
                                        product.subtotal,
                                        (product.quantity * product.photos.length)
                                    )"/>
                                </li>
                                <li><currency-label :value="product.subtotal"/></li>
                            </ul>
                        </template>
                    </multi-columns>
                    <div v-if="product.comment" class="comment">{{ product.comment }}</div>
                </div>
            </template>
            <template #column-3>
                    <multi-columns :noStretch="true" :wrap="true">
                        <template v-for="(photo, index) in product.photos"
                                  :key="photo" #[`column-`+index]>
                            <subject-image :photo="selection[photo]"
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
import { environment } from '@pictaccio/admin-gui/src/environment';
import CurrencyLabel from '@pictaccio/admin-gui/src/views/components/widgets/CurrencyLabel.vue';
import MultiColumns from '@pictaccio/admin-gui/src/views/components/widgets/MultiColumns.vue';
import SubjectImage from '@pictaccio/admin-gui/src/views/private/activities/companions/product_renderers/SubjectImage.vue';
import { CartItem } from '@pictaccio/shared/src/types/cart_item';
import { PhotoSelections } from '@pictaccio/shared/src/types/photo_selections';
import { calculatePriceByQuantity } from '@pictaccio/shared/src/utils/price_calculator';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'NormalProductRenderer',
    components: {
        CurrencyLabel,
        SubjectImage,
        MultiColumns,
        FontAwesomeIcon
    }
})
export default class NormalProductRenderer extends Vue {
    @Prop
    private product: CartItem;
    @Prop
    private selection: PhotoSelections;
    @Prop
    private orderId: string;

    private apiUrl = environment.apiUrl;
    private calculatePriceByQuantity = calculatePriceByQuantity;

    /* LIFECYCLE */
}
</script>
