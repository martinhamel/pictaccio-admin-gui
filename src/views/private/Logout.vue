<style lang="scss" scoped></style>

<template>
    <section class="logout-screen"></section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Logout',
    emits: [
        'menu-visible'
    ],
    components: {
    }
})
export default class Logout extends Vue {
    @Prop
    public reason: string;

    public mounted(): void {
        this.$emit('menu-visible', false);
        this.$store.dispatch('Auth/logout');
        this.$router.push({ name: 'Login' });
    }
}
</script>
