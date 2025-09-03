<style lang="scss" scoped>
.select-assignee-user-item {
    --avatar-size: 2.3rem;
    display: grid;
    gap: 1rem !important;
    grid-template-columns: var(--avatar-size) 1fr;
    align-items: center;
    margin: 0;
    white-space: nowrap;
    border-top: 1px solid oklab(from var(--color-primary-1) l a b / 0.1);

    .selection &,
    &:first-child {
        border-top: none;
    }

    .user-avatar-container-assignee {
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: 50%;
        overflow: clip;
        display: flex;
        justify-content: center !important;
        align-items: center;

        :deep(.info-icon-span) {
            display: contents;
        }

        picture {
            width: 100%;
            height: 100%;

            source {
                display: block;
                height: 100%;
                object-fit: contain;
            }
        }

        .selection & {
            margin-top: -0.3rem;
        }
    }

    .user-info-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        :empty {
            display: none;
        }

        .name {
            width: 25ch;
            overflow: clip;
            text-overflow: ellipsis;
        }

        .email {
            font-size: 1.2rem;
        }

        .selection &,
        .badge-container & {
            .email {
                display: none;
            }
        }

        .user-info-placeholder {
            font-size: 1.5rem;
        }
    }
}
</style>

<template>
    <template v-if="users.length > 0">
        <dropdown v-if="!displayList"
            ref="dropdown"
            :select-multiple="multiple"
            :can-unset="true"
            :current-selection="assignee ? [assignee] : []"
            :placeholder="'t'"
            :dropdown-name="'select-assignee'"
            @change="assigneeChange">
            <template #placeholder>
                <label class="select-assignee-user-item">
                    <span class="user-avatar-container-assignee">
                        <font-awesome-icon :icon="['fas', 'user']"/>
                    </span>
                        <span class="user-info-container">
                        <span class="user-info-placeholder">
                            {{ $t('generic.ui.placeholders.noAssignee') }}
                        </span>
                        <span></span>
                    </span>
                </label>
            </template>
            <template v-for="user in users" :key="user">
                <label :value="user.id"
                       :data-value="user.id"
                       :data-display-value="user.info?.name.firstName + ' ' + user.info?.name.lastName"
                       class="select-assignee-user-item">
                    <span class="user-avatar-container-assignee">
                        <fallback-image :src="api + user.avatar" :fallback="['fas', 'user']" />
                    </span>
                    <span class="user-info-container">
                        <span class="name">
                            {{ user.info?.name.firstName }} {{ user.info?.name.lastName }}
                        </span>
                        <span class="email">{{ user.email }}</span>
                    </span>
                </label>
            </template>
        </dropdown>
        <list-selector v-else
            ref="list"
            :list-name="'assignee'"
            :current-selection="assignee ? [assignee] : []"
            @change="assigneeChange">
            <label v-for="user in users"
                   :key="user.id"
                   class="select-assignee-user-item"
                   :data-value="user.id"
                   :data-display-value="user.info?.name.firstName + ' ' + user.info?.name.lastName"
                   :value="user.id">
                <span class="user-avatar-container-assignee">
                    <fallback-image :src="api + user.avatar" :fallback="['fas', 'user']" />
                </span>
                <span class="user-info-container">
                    <span class="name">
                        {{ user.info?.name.firstName }} {{ user.info?.name.lastName }}
                    </span>
                    <span class="email">{{ user.email }}</span>
                </span>
            </label>
        </list-selector>
    </template>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { UserInfo } from '@pictaccio/admin-gui/core/types/user_info';
import { environment } from '@pictaccio/admin-gui/environment';
import userService from '@pictaccio/admin-gui/services/user_service';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import FallbackImage from '@pictaccio/admin-gui/views/components/widgets/FallbackImage.vue';
import ListSelector from '@pictaccio/admin-gui/views/components/widgets/ListSelector.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'Assignee Dropdown',
    components: {
        ListSelector,
        FallbackImage,
        Dropdown,
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
export default class AssigneeDropdown extends Vue {
    @Prop
    private assignee: string[];
    @Prop
    private multiple: boolean;
    @Prop
    private displayList: boolean;
    private api = environment.apiUrl;
    private users: UserInfo[] = [];

    public getAssignee(): string[] {
        if (this.displayList) {
            return [...(this.$refs['list'] as ListSelector).getSelection()];
        } else {
            return [...(this.$refs['dropdown'] as Dropdown).getSelection()];
        }
    }

    public async reset(): Promise<void> {
        if (this.displayList) {
            (this.$refs['list'] as ListSelector).setSelection([], true);
        } else {
            (this.$refs['dropdown'] as Dropdown).setSelection([], true);
        }
    }

    public async setAssignee(userId: string, emit = false): Promise<void> {
        if (!userId) {
            return;
        }
        const users = userId
            ? (userId.includes(',')
                ? userId.split(',')
                : [userId])
            : [];
        // TODO: Investigate how to make util function for this pattern
        if (this.$refs['dropdown']) {
            (this.$refs['dropdown'] as Dropdown).setSelection(users, emit);
        } else {
            this.$watch(() => this.$refs['dropdown'], () => {
                (this.$refs['dropdown'] as Dropdown).setSelection(users, emit);
            });
        }
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
    private assigneeChange(event): void {
        this.$emit('change', {
            userId: event.selection
        });
    }
}
</script>
