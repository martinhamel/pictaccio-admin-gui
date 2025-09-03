<style lang="scss" scoped>
.product-table {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .product-info {
        font-size: 1.4rem;

        h3 {
            @extend .h4;
        }
    }

    .separator:last-child {
        display: none;
    }
}

</style>

<template>
    <section v-if="validatedProducts && validatedSelection" class="product-table">
        <template v-for="product of validatedProducts" :key="product">
            <component :is="productRenderer(product)"
                       :product="product"
                       :order-id="orderId"
                       :selection="validatedSelection"/>
            <separator />
        </template>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Separator from '@pictaccio/admin-gui/views/components/widgets/Separator.vue';
import CustomProductRenderer
    from '@pictaccio/admin-gui/views/private/activities/companions/product_renderers/CustomProductRenderer.vue';
import DigitalProductRenderer
    from '@pictaccio/admin-gui/views/private/activities/companions/product_renderers/DigitalProductRenderer.vue';
import NormalProductRenderer
    from '@pictaccio/admin-gui/views/private/activities/companions/product_renderers/NormalProductRenderer.vue';
import ThemedProductRenderer
    from '@pictaccio/admin-gui/views/private/activities/companions/product_renderers/ThemedProductRenderer.vue';
import TouchupProductRenderer
    from '@pictaccio/admin-gui/views/private/activities/companions/product_renderers/TouchupProductRenderer.vue';
import { CartItem } from '@pictaccio/shared/types/cart_item';
import { PhotoSelections } from '@pictaccio/shared/types/photo_selections';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'RenderProducts',
    components: {
        Separator,
        FontAwesomeIcon,
        DigitalProductRenderer,
        TouchupProductRenderer,
        CustomProductRenderer,
        ThemedProductRenderer,
        NormalProductRenderer
    }
})
export default class RenderProducts extends Vue {
    @Prop
    private products: CartItem[];
    @Prop
    private selection: PhotoSelections;
    @Prop
    private orderId: string;

    private validatedProducts: CartItem[];
    private validatedSelection: PhotoSelections;

    private productTypeMap = {
        digital: 'DigitalProductRenderer',
        touchup: 'TouchupProductRenderer',
        custom: 'CustomProductRenderer',
        themed: 'ThemedProductRenderer',
        normal: 'NormalProductRenderer'
    };

    /* LIFECYCLE */
    private mounted(): void {
        if (!this.products || !this.selection) {
            return;
        }

        this.validatedProducts = this.products;
        this.validatedSelection = this.selection;
    }

    /* PRIVATE */
    private productRenderer(product: CartItem): string {
        return this.productTypeMap[product.productType];
    }
}
</script>
