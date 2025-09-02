<style lang="scss" scoped>
.comment {
    display: grid;
    grid-template-columns: var(--avatar-column-size) 1fr;
    margin-top: 1rem;
    justify-content: center;
    pointer-events: all;

    &:hover,
    &:focus-within {
        .comment-content .comment-controls .comment-actions {
            opacity: 1;
            pointer-events: all;
        }
    }

    &:last-child {
        .separator {
            display: none;
        }
    }

    .separator {
        grid-column: 1 / -1;
    }

    .user-avatar-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 1rem;

        .user-avatar-holder {
            width: var(--avatar-size);
            height: var(--avatar-size);
            border-radius: 50%;
            overflow: clip;
        }
    }

    .comment-content {
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: $grid-gap;
        padding: 1rem;

        .comment-header {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: $grid-gap;

            .comment-user {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                .comment-user-name {
                    font-size: 1.5rem;
                    --font-weight: 600;
                    white-space: nowrap;
                }

                .comment-user-email {
                    white-space: nowrap;
                    font-size: 1.2rem;
                    --font-weight: 400;
                }
            }

            .comment-date {
                display: flex;
                justify-content: center;
                align-items: center;

                .comment-date-time {
                    white-space: nowrap;
                    font-size: 1.2rem;
                    line-height: 1.75rem;
                    --font-weight: 400;
                }
            }

            .comment-edited {
                --fa-primary-color: var(--color-primary-1);
                --fa-secondary-color: var(--color-primary-4);

                width: 100%;
                font-size: 1.5rem;
                translate: 0 -0.2rem;

                [data-theme-color="light"] & {
                    --fa-primary-color: oklch(from var(--color-primary-1) calc(l - 0.2) calc(c + 0.07) h);
                    --fa-secondary-color: oklch(from var(--color-primary-4) calc(l - 0.3) calc(c + 0.1) h);
                }
            }
        }

        .comment-body {
            display: flex;
            position: relative;
            justify-content: flex-start;
            align-items: center;
            margin-left: -1rem;

            .comment-text {
                max-width: unset !important;
                font-size: 1.4rem;
                padding-inline: 1rem 1.5rem;
                --font-weight: 400;
                white-space: pre-wrap;
            }

            textarea {
                resize: vertical;
                min-height: var(--text-height, 10rem) !important;
                padding: 1rem !important;
                margin-top: -1.2rem;
                margin-left: -0.2rem;
                margin-bottom: -1.3rem;
            }
        }

        .comment-controls {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .comment-actions {
                opacity: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                pointer-events: all;
                gap: $grid-gap;
                transition: opacity $animation-transition-duration ease-in-out;

                &.comment-edited {
                    opacity: 1;
                }

                &.editing {
                    opacity: 1;
                }

                .comment-action-button {
                    cursor: pointer !important;
                    padding: 0;
                }
            }
        }
    }
}
</style>

<template>
    <div class="comment">
        <div class="user-avatar-container">
            <div class="user-avatar-holder">
                <fallback-image :src="apiUrl + avatar"
                                :fallback="['fas', 'user']" />
            </div>
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <div class="comment-user">
                    <span class="comment-user-name">{{ name }}</span>
                    <span class="comment-user-email">{{ email }}</span>
                </div>
                <div class="comment-date">
                    <span class="comment-date-time">{{ printDate() }}</span>
                </div>
                <div class="comment-edited">
                    <font-awesome-icon v-if="data.edited" :icon="['fad', 'pen-field']"/>
                </div>
                <div class="comment-controls">
                    <div v-if="isOwnedOrAdmin() &&
                           ($validateCapability('order-comment:update:own') ||
                           $validateCapability('order-comment:update:any') ||
                           $validateCapability('order-comment:delete:own') ||
                           $validateCapability('order-comment:delete:any'))"
                         class="comment-actions"
                         :class="[
                                commentTextChanged ? 'comment-edited' : '',
                                editingInProcess ? 'editing' : ''
                             ]">
                        <button v-if="!editingInProcess && (
                                  $validateCapability('order-comment:update:own') ||
                                  $validateCapability('order-comment:update:any'))"
                                class="btn btn-tertiary comment-action-button"
                                @click="editButtonClick">
                            <font-awesome-icon :icon="['far', 'edit']"/>
                        </button>
                        <button v-if="editingInProcess && (
                                  $validateCapability('order-comment:update:own') ||
                                  $validateCapability('order-comment:update:any'))"
                                class="btn btn-tertiary comment-action-button"
                                @click="updateButtonClick">
                            <font-awesome-icon :icon="['fas', 'check']"/>
                        </button>
                        <button v-if="editingInProcess"
                                class="btn btn-tertiary comment-action-button"
                                @click="cancelButtonClick">
                            <font-awesome-icon :icon="['fas', 'times']"/>
                        </button>
                        <button v-if="($validateCapability('order-comment:delete:own') ||
                                  $validateCapability('order-comment:delete:any')) &&
                                  archiveFeature"
                                class="btn btn-tertiary comment-action-button"
                                @click="deleteButtonClick">
                            <font-awesome-icon :icon="['fas', 'trash-can']"/>
                        </button>
                    </div>
                </div>
            </div>
            <div ref="comment-body" class="comment-body">
                <textarea v-if="editingInProcess"
                          v-model="comment"
                          class="comment-text"
                          @keydown="commentTextKeydown"/>
                <span v-else ref="comment-text" class="comment-text">{{ comment }}</span>
            </div>
        </div>
        <separator :padding-inline="'var(--product-column-2-width) calc(var(--product-column-2-width) - 3.5rem)'"/>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { CommentItemData } from '@pictaccio/admin-gui/src/core/types/comment_item_data';
import { environment } from '@pictaccio/admin-gui/src/environment';
import { globalPrompt } from '@pictaccio/admin-gui/src/utils/global_prompt';
import { formatDateForUser, jsDateFromUserInput } from '@pictaccio/admin-gui/src/utils/user_date';
import Badge from '@pictaccio/admin-gui/src/views/components/widgets/Badge.vue';
import FallbackImage from '@pictaccio/admin-gui/src/views/components/widgets/FallbackImage.vue';
import Separator from '@pictaccio/admin-gui/src/views/components/widgets/Separator.vue';
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
    name: 'CommentItem',
    components: {
        Separator,
        FallbackImage,
        Badge,
        FontAwesomeIcon
    },
    emits: [
        'commentEdit',
        'commentDelete',
        'editing'
    ],
    expose: [
        'cancelEditing'
    ]
})
export default class CommentItem extends Vue {
    @Prop
    private data: CommentItemData;

    private apiUrl = environment.apiUrl;

    private editingInProcess = false;
    private commentTextChanged = false;

    private comment: string;
    private name: string;
    private email: string;
    private avatar: string;
    // Feature flags
    private archiveFeature = environment.features.archiveDeleteOrderComment;

    public cancelEditing() {
        this.editingInProcess = false;
        this.comment = this.data.message;
    }

    /* LIFECYCLE */
    public created(): void {
        this.comment = this.data.message;
        this.name = this.data.user.info.name.firstName + ' ' + this.data.user.info.name.lastName;
        this.email = this.data.user.email;
        this.avatar = this.data.user.avatar;
    }

    /* EVENT HANDLERS */
    private cancelButtonClick() {
        this.cancelEditing()
    }

    private commentTextKeydown(event: KeyboardEvent) {
        if (this.isCommentTextChanged() && event.key === 'Enter' && !event.ctrlKey) {
            this.saveComment();
        }
    }

    private async deleteButtonClick() {
        const result = await globalPrompt({
            title: this.$t('activities.viewOrder.comments.deleteConfirmTitle'),
            message: this.$t('activities.viewOrder.comments.deleteConfirmMessage'),
            buttonType: 'yes-no',
            icon: ['fas', 'trash-can']
        });

        if (result === 'yes') {
            this.$emit('commentDelete', this.data.id);
        }
    }

    private editButtonClick() {
        this.initiateEditing();
    }

    private updateButtonClick() {
        this.saveComment();
    }

    /* PRIVATES */
    private initiateEditing() {
        const textHeight = (this.$refs['comment-text'] as HTMLElement).getBoundingClientRect().height;

        (this.$refs['comment-body'] as HTMLElement).style.setProperty('--text-height', `${textHeight + 25}px`);
        this.$emit('editing');
        this.editingInProcess = true;
    }

    private isCommentTextChanged() {
        this.commentTextChanged = this.comment !== this.data.message;
        return this.commentTextChanged;
    }

    private isOwnedOrAdmin(): boolean {
        const user = this.$store.getters['Auth/user'];
        const roles = this.$store.getters['User/roles'];

        return user.id === this.data.user.id || roles.some(role => role.includes('admin'));
    }

    private printDate() {
        return formatDateForUser(jsDateFromUserInput(this.data.createdOn), 'full');
    }

    private saveComment() {
        this.editingInProcess = false;
        this.$emit('commentEdit', this.data.id, this.comment);
    }
}
</script>
