<style lang="scss" scoped>
.breadcrumbs {
    display: inline-flex;

    .breadcrumb {
        &:not(:last-child) {
            &::after {
                content: '❯';
                margin: 0 0.3em;
                font-size: 0.85em;
            }
        }
    }
}
</style>

<template>
    <ul class="breadcrumbs">
        <li v-for="item in $store.getters[`${store}/breadcrumbs`]"
            :key="item.id"
            class="breadcrumb">
            <router-link :to="item.routerLink">
                {{ $te(item.display) ? $t(item.display) : item.display }}
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Breadcrumbs',
    components: {
        FontAwesomeIcon
    }
})
export default class Breadcrumbs extends Vue {
    @Prop
    private store: string;
}
</script>
