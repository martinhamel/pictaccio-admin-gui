<style lang="scss" scoped>
.btn {
    position: relative;

    .text {
        display: block;
    }

    .spinner {
        display: none;
        inset: 0;
        justify-content: center;
        position: absolute;
    }

    &.processing {
        @extend .disabled;

        .text {
            opacity: 0;
        }

        .spinner {
            display: flex;
        }
    }
}
</style>

<template>
    <button class="btn"
            :class="[buttonClass, processing ? 'processing' : '']"
            @click="buttonClick">
        <span class="text"><slot/></span>
        <span class="spinner"><spinner/></span>
    </button>
</template>

<script lang="ts">
import Spinner from '@pictaccio/admin-gui/src/views/components/widgets/Spinner.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

type ButtonClass = 'btn-primary' | 'btn-secondary';

@Component({
    name: 'ConfirmationButton',
    components: {
        Spinner
    },
    emits: ['click'],
    expose: ['setProcessing']
})
export default class ConfirmationButton extends Vue {
    @Prop({ default: 'btn-primary' })
    private buttonClass: ButtonClass;
    private processing = false;

    public setProcessing(value: boolean): void {
        this.processing = value;
    }

    /* PRIVATES */
    private buttonClick(): void {
        this.setProcessing(true);
        this.$emit('click');
    }
}
</script>
