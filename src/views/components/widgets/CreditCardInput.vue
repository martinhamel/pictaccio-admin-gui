<style lang="scss" scoped>
</style>

<template>
    <div class="secret-container">
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'CreditCardInput',
    components: {
        FontAwesomeIcon
    }
})
export default class CreditCardInput extends Vue {

}
</script>
