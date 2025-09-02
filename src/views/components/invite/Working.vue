<style lang="scss" scoped>
.loading-wrapper {
    position: relative;
    top: 14rem;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    height: 50px;
    border: 3px solid hsla(var(--color-text-normal),.3);
    border-radius: 50%;
    border-top-color: var(--color-text-normal);
}

:deep(.spinners-holder) {
    color: var(--color-text-normal);
}
</style>

<template>
<div class="loading-wrapper">
    <spinner/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import Spinner from '@pictaccio/admin-gui/src/views/components/widgets/Spinner.vue';

@Component({
    name: 'Working',
    components: {
        Spinner
    }
})
export default class LoginScreen extends Vue {
    /* EVENT HANDLERS */
}
</script>
