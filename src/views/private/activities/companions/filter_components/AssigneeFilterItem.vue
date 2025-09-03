<style lang="scss" scoped>
@import '@pictaccio/admin-gui/scss/filter_popup.scss';

.dropdown-assignee {
    position: relative;

    &:has(.sticky-label) {
        :deep(.dropdown-input),
        :deep(.selection),
        :deep(.badge-container),
        :deep(.badge-input-container) {
            border-top-left-radius: 0 !important;
        }
    }

    :deep(.sticky-label) {
        padding: 0.4rem 1.25rem 0.25rem;
        transform: translateY(0.3rem);
        border-width: 2px 2px 0 2px;
        border-style: solid;
        border-color: transparent;
        z-index: 11;

        &::after {
            content: '';
            position: absolute;
            top: calc(100% - 0.1rem);
            left: calc(100% - 1rem);
            right: -2px;
            bottom: 0;
            background-color: inherit;
        }
    }

    &:has(.selection.selected) {
        :deep(.sticky-label) {
            border-color: var(--color-primary-1) var(--color-primary-1) transparent var(--color-primary-1);
        }
    }

    .dropdown-selector-option {
        white-space: nowrap;
    }
}
</style>

<template>
    <div class="assignee-selector"
         :class="users.length <= 5 ? 'select-assignee' : 'dropdown-assignee'">
        <select-assignee ref="select-assignee"
                         @change="assigneeChange"
                         v-if="users.length <= 5"/>
        <template v-else>
            <filter-popup ref="filter"
                          name="assignee"
                          @closed="assigneeChange">
                <template #btn>
                    <div class="btn btn-quaternary filter-popup-button"
                         :class="(assignees.length > 0) ? 'selection' : ''">
                        <sticky-label ref="sticky-label"
                                      v-if="(assignees.length > 0)"
                                      :alignments="[['outer', 'top'], ['inner', 'left']]"
                                      :sticky-side="'bottom'">
                            <span class="filter-popup-button-text">{{ $t(`generic.filter.${name}`) }}</span>
                        </sticky-label>
                        <b v-else class="filter-popup-button-text">
                            {{ $t(`generic.filter.${name}`) }}
                        </b>
                        <span v-if="(assignees.length > 0)"
                              class="text-small"
                              :style="{minWidth: `${$t(`generic.filter.${name}`).length}ch`}">
                            <span class="assignee-name">{{ `${users.find(u => u.id === assignees[0]).info.name.firstName}&nbsp;
                                      ${users.find(u => u.id === assignees[0]).info.name.lastName}` }}</span>
                            <badge :alone="true" v-if="(assignees.length > 1)">
                                +{{ assignees.length - 1 }}
                            </badge>
                        </span>
                    </div>
                </template>
                <template #body>
                    <assignee-dropdown ref="dropdown-assignee"
                                       :display-list="true"/>
                </template>
                <template #footer>
                    <div class="filter-footer-ui">
                        <a @click="reset">
                            {{ $t('generic.ui.clear') }}
                        </a>
                        <button class="btn btn-primary"
                                @click="assigneeChange">
                            {{ $t('generic.ui.apply') }}
                        </button>
                    </div>
                </template>
            </filter-popup>
        </template>
    </div>
</template>
<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { isEmpty } from '@loufa/loufairy';
import { FilterTypeAssignee } from '@pictaccio/admin-gui/core/types/filters/type_assignee';
import { SerializedFilterItem } from '@pictaccio/admin-gui/core/types/serialized_params';
import { UserInfo } from '@pictaccio/admin-gui/core/types/user_info';
import userService from '@pictaccio/admin-gui/services/user_service';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import StickyLabel from '@pictaccio/admin-gui/views/components/widgets/StickyLabel.vue';
import AssigneeDropdown from '@pictaccio/admin-gui/views/private/activities/companions/AssigneeDropdown.vue';
import FilterItem from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/filter_item';
import FilterPopup from '@pictaccio/admin-gui/views/private/activities/companions/filter_components/FilterPopup.vue';
import SelectAssignee from '@pictaccio/admin-gui/views/private/activities/companions/SelectAssignee.vue';
import { Component } from 'vue-facing-decorator';

@Component({
    name: 'AssigneeFilter',
    components: {
        Badge,
        FilterPopup,
        StickyLabel,
        AssigneeDropdown,
        FontAwesomeIcon,
        SelectAssignee
    },
    emits: [
        'search'
    ]
})
export default class AssigneeFilterItem extends FilterItem<string, FilterTypeAssignee> {
    private assignees: string[] = [];
    private users: UserInfo[] = [];

    public isEmpty(): boolean {
        return isEmpty(this.assignees);
    }

    public getQuery(): string {
        return typeof this.assignees === 'string'
            ? this.assignees
            : this.assignees.join(',');
    }

    public getType(): string {
        return this.name;
    }

    public reset() {
        if (this.users.length <= 5) {
            (this.$refs['select-assignee'] as SelectAssignee).reset();
        } else {
            (this.$refs['dropdown-assignee'] as AssigneeDropdown).reset();
        }

        this.assigneeChange();
    }

    public serialize(): SerializedFilterItem<FilterTypeAssignee> {
        return {
            name: this.name,
            params: {
                assignees: this.assignees
            }
        };
    }

    public setQuery(query: string): void {
        if (this.users.length <= 5) {
            (this.$refs['select-assignee'] as SelectAssignee).setAssignee(query);
        } else {
            (this.$refs['dropdown-assignee'] as AssigneeDropdown).setAssignee(query, true);
        }
    }

    public unserialize(serialized: SerializedFilterItem<FilterTypeAssignee>): void {
        this.assignees = serialized.params.assignees;
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
        if (this.users.length <= 5) {
            this.assignees = (this.$refs['select-assignee'] as SelectAssignee).getAssignee();
        } else {
            this.assignees = (this.$refs['dropdown-assignee'] as AssigneeDropdown).getAssignee();
        }

        this.$emit('search');

        if (this.users.length > 5) {
            (this.$refs['filter'] as FilterPopup).forceCloseDialog();
        }
    }
}
</script>
