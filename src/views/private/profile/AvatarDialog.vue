<style lang="scss" scoped>
.upload-instruction {
    position: absolute;
    bottom: 2rem;
    text-align: center;
    font-size: 1.8rem;
}
</style>

<template>
    <dialog-box ref="avatar-dialog"
                @dialog-close="closeDialog"
                :dismiss="true"
                :overlay="true"
                :box-type="'small-box'">
        <template #title>
            <h5 class="h4">
                <font-awesome-icon :icon="['fas', 'user']"/>
                {{ $t('generic.ui.changeAvatar') }}
            </h5>
        </template>
        <template #content>
            <image-upload ref="image-upload"
                          :multiple="false"
                          selectable="none"
                          :name="'changeAvatarInput'"
                          @imagesSelected="setChangeAvatarSave">
                <template #upload-instruction>
                    <span class="upload-instruction">
                        {{ $t('generic.ui.dropFile') }}
                    </span>
                </template>
            </image-upload>
        </template>
        <template #uiDialog>
        </template>
    </dialog-box>
</template>

<script lang="ts">
import { isFile } from '@pictaccio/admin-gui/src/utils/is_file';
import DialogBox from '@pictaccio/admin-gui/src/views/components/layout/DialogBox.vue';
import { Component, Vue } from 'vue-facing-decorator';
import ImageUpload from '@pictaccio/admin-gui/src/views/components/widgets/ImageUpload.vue';

@Component({
    name: 'Avatar dialog',
    components: {
        ImageUpload
    },
    emits: [
        'avatar-uploaded'
    ]
})
export default class AvatarDialog extends Vue {
    private newAvatar: File | string;
    private avatarWasChanged = false;

    public openDialog(): void {
        (this.$refs['avatar-dialog'] as DialogBox).openDialog()
    }

    private closeDialog(): void {
        (this.$refs['avatar-dialog'] as DialogBox).closeDialog();
    }

    private setChangeAvatarSave(imageSelected: File[]): void {
        const file = imageSelected[0];

        if (!isFile(file)) {
            return;
        }
        if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
            return;
        }
        this.newAvatar = file;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.$emit('avatar-uploaded', reader.result as string, file);
            this.closeDialog();
        };
    }
}
</script>
