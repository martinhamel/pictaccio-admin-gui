<style lang="scss" scoped>
.assignee-selection {
    width: 100%;
    height: $ruler-input-height;
    display: flex;
    padding: 0;
    border: 0;

    :deep(.info-icon-span) {
        display: block;
        margin-left: 0;

        &:has(svg) {
             margin-top: 0.5rem;
        }
    }

    .assignee {
        position: relative;
        display: flex;
        align-items: center;

        &:not(:first-child) {
            margin-left: -0.5rem;
        }
    }

    label, input {
        position: relative;
    }

    label {
        z-index: 2;
        margin: 0;
        padding: 0;

        &:hover {
            z-index: 3;
            transform: translateY(-0.1rem) scale(1.1);
        }
    }

    .assignee-icon {
        width: 3rem;
        height: 3rem;
        background-color: var(--color-background-page-2);
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid var(--color-background-page-1);
        box-sizing: content-box;
        display: flex;
        justify-content: center;

        //:deep(.help-container) {
        //    margin: auto;
        //
        //    .info-icon-span {
        //        margin: 0 !important;
        //    }
        //}

        img {
            width: 100%;
        }
    }
    input {
        @extend .hidden;

        &:checked {
            ~ label .assignee-icon {
                border-color: var(--color-text-accent-primary);
                transform: translateZ(0.1rem) scale(1.1);
            }
        }
    }
}
</style>

<template>
    <div class="assignee-selection">
        <div class="assignee" v-for="user in users" :key="user">
            <input type="checkbox"
                   :ref="'assignee'"
                   :id="'assignee-' + user.id"
                   @change="assigneeChange"
                   name="assignee"
                   :value="user.id">
            <label :for="'assignee-' + user.id">
                <div class="assignee-icon">
                    <fallback-image :src="api + user.avatar"
                                    :fallback="['fas', 'user']"
                                    :alt="`${user.info.name.firstName} ${user.info.name.lastName}`"/>
                </div>
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import { UserInfo } from '@pictaccio/admin-gui/src/core/types/user_info';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { globalToast } from '@pictaccio/admin-gui/src/utils/global_toast';
import FallbackImage from '@pictaccio/admin-gui/src/views/components/widgets/FallbackImage.vue';
import { Component, Vue } from 'vue-facing-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import userService from '@pictaccio/admin-gui/src/services/user_service';

@Component({
    name: 'Select Assignee',
    components: {
        FallbackImage,
        FontAwesomeIcon
    },
    emits: [
        'change'
    ],
    expose: [
        'getAssignee',
        'reset',
        'setAssignee'
    ]
})
export default class SelectAssignee extends Vue {
    private assignee: string[];
    private api = environment.apiUrl;
    private users: UserInfo[] = [];

    public getAssignee(): string[] {
        return this.assignee;
    }

    public reset() {
        this.assignee = null;
        this.setCheckboxSelection();
    }

    public setAssignee(userId: string): void {
        this.assignee = userId.split(',');
        this.setCheckboxSelection();
    }

    /* LIFECYCLE */
    public async beforeCreate(): Promise<void> {
        try {
            this.users = await userService.readUsersList(true);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    /* EVENT HANDLER */
    private assigneeChange(): void {
        this.assignee = this.getCheckboxSelection();
        this.$emit('change', {
            userId: this.assignee
        });
    }

    /* PRIVATE */
    private getCheckboxSelection(): string[] {
        return (this.$refs['assignee'] as HTMLInputElement[])
            .filter(input => input.checked)
            .map(input => input.value);
    }

    private setCheckboxSelection(): void {
        (this.$refs['assignee'] as HTMLInputElement[])
            .forEach(input => {
                input.checked = this.assignee
                    ? this.assignee.includes(input.value)
                    : false;
            });
    }
}
</script>
