<style lang="scss" scoped>
#view-order {
    display: grid;
    grid-auto-rows: 100%;
    overflow: clip auto;
    gap: 2rem;
    padding: .5rem 1rem;
    height: auto;
    max-height: unset;
    max-width: calc(100vw - var(--ruler-sidebar-width));

    [data-theme-color='dark'] & {
        --color-background-order-section: var(--color-mix-5-6-step-3);
        --color-background-order-section-header: var(--color-mix-4-6-step-2);
        --color-separator-order-section: var(--color-mix-5-6-step-2);
        --color-line-order-section-header: var(--color-primary-4);
        --color-text-table-product-price: var(--color-primary-4);
        --color-background-table-body-even: transparent;
        --color-background-table-body-odd: transparent;
        --color-background-table-body-separation: hsla(
                var(--color-mix-5-6-step-3-h),
                var(--color-mix-5-6-step-3-s),
                var(--color-mix-5-6-step-3-l),
                0.8
        );
    }
    [data-theme-color='light'] & {
        --color-background-order-section: var(--color-primary-7);
        --color-background-order-section-header: var(--color-mix-4-7-step-2);
        --color-separator-order-section: var(--color-mix-5-7-step-2);
        --color-line-order-section-header: var(--color-primary-4);
        --color-text-table-product-price: var(--color-primary-4);
        --color-background-table-body-odd: transparent;
        --color-background-table-body-hover: transparent;
    }
}

.title {
    font-size: 3.2rem;
    margin: 0;
}

.sub-title {
    font-size: 2.8rem;
}

.activity-control {
    height: 100%;
    max-height: unset;
    background-color: var(--color-background-page-1);

    [data-theme-type='line'] & {
        --color-separator-order-section: var(--color-mix-5-6-step-3);
    }

    .activity-control-header {
        position: relative;
        display: flex;
        padding: 1rem 1.5rem;
        align-items: center;
        justify-content: space-between;

        [data-theme-type='block'] & {
            background-color: var(--color-background-order-section-header);
            border-radius: $ruler-border-radius $ruler-border-radius 0 0;
        }
        [data-theme-type='line'] & {
            background-color: var(--color-background-page-1);

            &::after {
                content: '';
                position: absolute;
                inset: auto 0 0 0;
                padding: 0.2rem;
                border-radius: 100px;
                background-color: var(--color-line-order-section-header);
            }
        }

        .title {
            display: inline-flex;
            align-items: center;
            gap: 1.5rem;
        }

        .h4 {
            margin: 0;
        }

        .section-ui {
            display: flex;
            gap: 1rem;
        }

        .print-product-tag-button {
            margin-top: 1rem;
            display: block;
            width: min-content;
            align-self: center;
        }

        .print-product-tag-label {
            padding-right: 1rem;
            padding-bottom: 0.5rem;
        }
    }

    .order-viewer {
        padding: 1.5rem;
        display: grid;
        grid-auto-flow: dense;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 1fr;
        gap: 2rem;
        margin-bottom: 2rem;

        [data-theme-type='block'] & {
            background-color: var(--color-background-order-section);
            border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
        }

        .transaction-info {
            position: relative;
            grid-column: 2 / -1;
            grid-row: 1 / 3;
            display: grid;
            gap: 0.5rem 1rem;
            grid-template-columns: min-content minmax(auto, 24rem);
            padding-left: 1rem;
            margin-bottom: auto;

            &::after {
                content: '';
                position: absolute;
                height: calc(100% - 1rem);
                left: -1rem;
                top: 1rem;
                padding: 0.1rem;
                background-color: var(--color-separator-order-section);
            }

            .transaction-info-box {
                position: relative;
                display: contents;

                &.production {
                    display: grid;
                    grid-column: 1 / -1;
                    grid-template-columns: auto 1fr;
                    gap: 0 .5rem;
                }

                &.transaction-info-box-title .h4 {
                    margin-top: 0;
                }

                .info *,
                .info :deep(*),
                .headers *,
                .headers :deep(*) {
                    font-size: 1.4rem;
                }

                .headers {
                    b,
                    :deep(b) {
                        @extend .h6;
                        font-size: 1.4rem;
                        margin: 0;
                        white-space: nowrap;
                    }
                }

                .info {
                    min-width: 20ch;
                }

                &:hover .control {
                    opacity: 1;
                }

                .h4,
                .comment {
                    grid-column: 1 / -1;
                    margin: 1.5rem 0 0;
                }

                .transaction-info-box-title {
                    grid-column: 1 / -1;
                }

                .control {
                    margin: 0;
                    height: 100%;
                    opacity: 0;
                    transition-property: opacity;
                    transition-duration: 0.3s;
                    display: flex;
                    align-items: flex-end;
                }

                .headers,
                .info {
                    display: grid;
                    grid-auto-rows: #{$ruler-input-height - 5px};
                    align-items: center;
                    gap: 0.75rem;

                    label,
                    :deep(label) {
                        margin: 0;
                        padding: 0;
                    }
                }
            }

            .transaction-info-box-title {
                display: flex;
                justify-content: space-between;
            }
        }
        .photo-collection {
            position: relative;
            display: grid;
            grid-template-columns: min-content auto;
            gap: 2rem;

            &::after {
                content: '';
                position: absolute;
                right: -1rem;
                left: 0;
                bottom: -1rem;
                padding: 0.1rem;
                background-color: var(--color-separator-order-section);
            }

            .options-header {
                display: flex;
                flex-direction: column;
                width: min-content;
                justify-content: flex-end;

                .options {
                    text-align: right;
                }
            }

            .photos-used {
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;

                .image-holder {
                    width: 12rem;
                    min-height: 12rem;
                    padding: 1rem;

                    img {
                        width: 100%;
                    }
                }
            }

            .options {
                @extend .h6;
                height: min-content;
                white-space: nowrap;
                text-align: center;
            }
        }
        .product-info {
            .product-table {
                tr {
                    height: 100%;
                    min-height: 12rem;
                    border-bottom: 1px dashed var(--color-background-table-body-separation);

                    &:nth-child(odd) {
                        background-color: var(--color-background-table-body-odd);
                    }
                    &:nth-child(even) {
                        background-color: var(--color-background-table-body-even);
                    }
                }
                .product-info {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;

                    .product-name {
                        @extend .h6;
                    }

                    .product-price {
                        @extend .h6;
                        color: var(--color-text-table-product-price);
                        text-align: right;
                    }

                    .product-quantity {
                        &.bold {
                            @extend .text-large;
                            --font-weight: 600;
                            color: var(--color-primary-1);
                        }
                    }
                }
                .product-image {
                    width: 12rem;
                    min-height: 12rem;
                    padding: 1rem;

                    img {
                        width: 100%;
                    }
                }
                .images-in-product {
                    min-height: 12rem;
                    padding: 1rem;
                    display: flex;
                    gap: $grid-gap;

                    div {
                        position: relative;

                        input {
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 1;
                        }

                        img {
                            width: 12rem;
                        }
                    }
                }
                .hidden-product-icon {
                    font-size: 3rem;
                }
            }
        }
    }

    .order-photo-version-box {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        padding: 1.5rem;
        margin-bottom: 2rem;

        [data-theme-type='block'] & {
            background-color: var(--color-background-order-section);
            border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
        }

        .sub-title {
            margin: 1rem 0 0;
        }

        .pane-status {
            --border-size: 0.3rem;
            --color-pane-status: transparent;
            position: absolute;
            inset: 0;
            border-radius: inherit;
            pointer-events: none;
            font-size: 2rem;
            z-index: 1;

            &.active {
                --color-pane-status: var(--color-semantic-success);
            }

            &.inactive {
                --color-pane-status: transparent;
            }

            &.error {
                --color-pane-status: var(--color-semantic-error);
            }

            &.warning {
                --color-pane-status: var(--color-semantic-warning);
            }

            .icon {
                position: absolute;
                inset: 0 0 auto auto;
                padding: 0.6rem 0.6rem 0.2rem 0.5rem;
                background-color: var(--color-pane-status);
                border-radius: 0 $ruler-border-radius 0 $ruler-border-radius;

                &:has(.fa-circle-info) {
                    opacity: 0;
                }

                .version-published-icon-check {
                    position: absolute;
                    top: .2rem;
                    left: .5rem;
                    font-size: 1.2rem;

                }
            }
        }

        :deep(.pane-main) {
            .image-container {
                cursor: pointer;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow: clip;

                img {
                    width: 100%;
                    height: 100%;
                    border: 2px solid transparent;
                    object-fit: contain;
                }
            }

            .version-badge-container {
                position: absolute;
                bottom: 2.6rem;
                display: flex;
                justify-content: center;
                width: calc(100% - 5rem);
                font-size: 1.6rem;
            }
        }

        :deep(.pane-sub) {
            .image-upload-holder {
                grid-column: 1 / -1;
                border-width: 0;
            }
        }
    }

    .order-comments-box {
        --avatar-size: 3rem;
        --avatar-column-size: calc(var(--avatar-size) + 3rem);
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        gap: 2rem;

        [data-theme-type='block'] & {
            background-color: var(--color-background-order-section);
            border-radius: 0 0 $ruler-border-radius $ruler-border-radius;
        }

        .write-comment-box {
            display: grid;
            grid-template-columns: var(--avatar-column-size) 1fr;
            gap: 1rem;

            .user-avatar-container {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding-top: 1rem;

                .user-avatar-holder {
                    display: flex;
                    width: var(--avatar-size);
                    height: var(--avatar-size);
                    border-radius: 50%;
                    overflow: clip;
                }
            }

            textarea {
                padding: 1rem;
                border: 1px solid var(--color-separator-order-section);
                border-radius: $ruler-border-radius;
                resize: none;
            }

            .comment-actions {
                grid-column: 2 / -1;
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: flex-end;

                label {
                    margin: 0;
                }

                button {
                    margin-left: auto;
                }
            }
        }
    }
}
</style>

<template>
    <section id="view-order" class="activity-wrapper">
        <div class="activity-control" v-if="isLoaded">
            <div class="activity-control-header">
                <h2 class="title">
                    {{ $t(`activities.viewOrder.orderWithId`, {id: orderId}) }}
                    <badge :alone="true"
                           ref="status-badge">
                        <label>
                            {{ $t(`order.status.${productionStatus}`) }}
                        </label>
                    </badge>
                </h2>
                <div class="section-ui">
                    <a class="btn btn-primary"
                       @click="printOrderClick">
                        {{ $t('generic.ui.print') }}
                    </a>
                    <a class="btn btn-primary"
                       @click="printShippingLabelClick">
                        {{ $t('generic.ui.printLabel') }}
                    </a>
                    <inputs-dialog :right-aligned="true"
                                   :background-colors="{ content: 'var(--color-background-page-3)' }">
                        <template #trigger>
                            <button class="btn btn-primary">
                                {{ $t('generic.ui.printProductTag') }}
                            </button>
                        </template>
                        <template #content>
                            <template v-for="product in uniqueProducts()"
                                      :key="product">
                                <label class="print-product-tag-label">
                                    <input ref="print-product-tag-input"
                                           type="checkbox"
                                           class="secondary"
                                           @click="navigateProductTagPrint"
                                           :value="product.productId">
                                    {{ product.productName }}
                                </label>
                            </template>
                            <a class="btn btn-secondary print-product-tag-button"
                               @click="printProductLabelClick">
                                {{ $t('generic.ui.print') }}
                            </a>
                        </template>
                    </inputs-dialog>
                </div>
            </div>
            <div class="order-viewer">
                <div class="transaction-info">
                    <div class="transaction-info-box transaction-info-box-title">
                        <h3 class="h4">{{ $t('activities.viewOrder.production.title') }}</h3>
                    </div>
                    <div class="transaction-info-box production">
                        <div class="headers">
                            <b>{{ $t('generic.ui.status') }}:</b>
                            <b>{{ $t('generic.ui.assignee') }}:</b>
                        </div>
                        <div class="info">
                            <order-status-label ref="status"
                                                @change="statusChange"/>
                            <assignee-dropdown ref="order-assignee"
                                               @change="orderAssigneeChange"/>
                        </div>
                    </div>
                    <div class="transaction-info-box" id="customer-box">
                        <div class="transaction-info-box-title">
                            <h3 class="h4">{{ $t('activities.viewOrder.customer.title') }}</h3>
                            <div class="control">
                                <button class="btn btn-primary copy" @click="copyContactClick">
                                    {{ $t('generic.ui.copy') }}
                                </button>
                            </div>
                        </div>

                        <div class="headers">
                            <b>{{ $t('activities.viewOrder.customer.firstName') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.lastName') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.email') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.phone') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.streetAddress1') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.streetAddress2') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.city') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.region') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.postalCode') }}:</b>
                            <b>{{ $t('activities.viewOrder.customer.country') }}:</b>
                        </div>
                        <div class="info" ref="contact-info">
                            <editable-label
                                ref="first-name"
                                inputName="first-name"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="last-name"
                                inputName="last-name"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="email"
                                inputName="email"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="phone"
                                inputName="phone"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="street-address-1"
                                inputName="street-address-1"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="street-address-2"
                                inputName="street-address-2"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="city"
                                inputName="city"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="region"
                                inputName="region"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="postal-code"
                                inputName="postal-code"
                                permission="order"
                                @update-value="updateContact"
                            />
                            <editable-label
                                ref="country"
                                inputName="country"
                                permission="order"
                                @update-value="updateContact"
                            />
                        </div>
                    </div>
                    <div class="transaction-info-box" id="bill-box">
                        <h3 class="h4">{{ $t('activities.viewOrder.transaction.title') }}</h3>
                        <div class="headers">
                            <b>{{ $t('activities.viewOrder.transaction.productTotal') }}: </b>
                            <b>{{ $t('activities.viewOrder.transaction.shipping') }}: </b>
                            <b>{{ $t('activities.viewOrder.transaction.promo') }}: </b>
                            <order-taxes :header="true" :taxes="order.transaction.taxes"></order-taxes>
                            <b>{{ $t('activities.viewOrder.transaction.total') }}: </b>
                        </div>
                        <div class="info">
                            <label><currency-label :value="order.transaction.subtotal"/></label>
                            <label><currency-label :value="order.transaction.shipping"/></label>
                            <label><currency-label :value="order.transaction.promo"/></label>
                            <order-taxes :header="false" :taxes="order.transaction.taxes"></order-taxes>
                            <label><currency-label :value="order.transaction.total"/></label>
                        </div>
                    </div>
                    <div class="transaction-info-box" id="shipping-box">
                        <h3 class="h4">{{ $t('activities.viewOrder.shipping.title') }}</h3>
                        <div class="headers">
                            <b>{{ $t('activities.viewOrder.shipping.option') }}: </b>
                            <b v-if="false">{{ $t('activities.viewOrder.shipping.instruction') }}: </b>
                        </div>
                        <div class="info">
                            <label>{{ order.deliveryOption.id ? order.deliveryOption.nameLocale[$i18n.locale] : '--' }}</label>
                            <p v-if="false" class="comment">{{ order.deliveryOption.comment ?? '--' }}</p>
                        </div>
                    </div>
                    <div class="transaction-info-box transaction-info-box-comment" id="comment-box">
                        <h3 class="h4">{{ $t('activities.viewOrder.comment') }}</h3>
                        <p class="comment">{{ order.comment }}</p>
                    </div>
                </div>
                <div class="product-info table-holder">
                    <h3 class="sub-title">{{ $t(`activities.viewOrder.productInfoTitle`) }}</h3>
                    <render-products :products="order.cartItems"
                                     :selection="order.photos"
                                     :order-id="orderId"/>
                </div>
            </div>
            <div class="activity-control-header">
                <h2 class="title">{{ $t(`activities.viewOrder.versioning.title`) }}</h2>
                <div class="section-ui">
                    <button class="btn btn-primary" @click="notifyCustomerClick">
                        {{ $t('activities.viewOrder.versioning.updateCustomer') }}
                    </button>
                </div>
            </div>
            <div class="order-photo-version-box">
                <template v-for="subject in subjectsWithPhotos()" :key="subject">
                    <h3 class="sub-title">{{ subject.name }} ({{ subject.code }})</h3>
                    <pane-container ref="pane-container"
                                    @manage-click="openVersioningPane"
                                    @close-click="paneContainerCloseClick"
                                    @update-click="paneContainerUpdateClick">
                        <template v-for="(photo, index) in versioningPhotosUsedInOrder(subject)"
                                  :key="index"
                                  #[`pane-subject-${subject.id}-${photo.original.photoId}`]>
                            <main>
                                <i class="pane-status active">
                                    <span class="icon"
                                          :style="{ visibility: (photoPublishCount[photo.original.photoId] ?? 0) > 0
                                            ? 'visible'
                                            : 'hidden' }">
                                        <font-awesome-icon :icon="['fas', 'paper-plane']"/>
                                        <font-awesome-icon class="version-published-icon-check"
                                                           :icon="['fas', 'check']"/>
                                    </span>
                                </i>
                                <div class="image-container" :class="versionPhotoMainPaneClass()">
                                    <img :src="api + photo.original.photoUrl">
                                </div>
                                <div class="version-badge-container">
                                    <badge :interactable="false"
                                           :badge-colors="{
                                        background: 'var(--color-semantic-info)',
                                        text: 'var(--color-mix-6-5-step-3)' }">
                                        {{ $tc('activities.viewOrder.versioning.badges.versions',
                                            photo.versions
                                                ? photo.versions.length + 1
                                                : 1, {
                                            count: photo.versions
                                                ? photo.versions.length + 1
                                                : 1
                                        }) }}
                                    </badge>
                                    <badge :interactable="false" :badge-colors="{
                                        background: 'var(--color-semantic-info)',
                                        text: 'var(--color-mix-6-5-step-3)' }">
                                        {{ $t('activities.viewOrder.versioning.badges.published', {
                                            count: photoPublishCount[photo.original.photoId] ?? 0
                                        }) }}
                                    </badge>
                                </div>
                            </main>
                            <sub>
                                <image-upload :ref="`photo-upload-subject-${subject.id}-${photo.original.photoId}`"
                                              :multiple="true"
                                              :editable="false"
                                              :deletable="imageIsDeletable"
                                              selectable="many"
                                              :allow-get-selection="true"
                                              @selection="imageSelected"
                                              @image-selected="prepareAddVersion"
                                              @image-deleted="prepareDeleteVersion"
                                              :name="`photo-upload-subject-${subject.id}-${photo.original.photoId}`"
                                />
                            </sub>
                        </template>
                    </pane-container>
                </template>
                <Separator/>
                <template v-for="subjectGroup in order.subjectGroups" :key="subjectGroup">
                    <h3 class="sub-title">{{ subjectGroup.name }}</h3>
                    <pane-container ref="pane-container"
                                    @manage-click="openVersioningPane"
                                    @close-click="paneContainerCloseClick"
                                    @update-click="paneContainerUpdateClick">
                        <template v-for="(photo, index) in versioningPhotosUsedInOrder(subjectGroup)"
                                  :key="index"
                                  #[`pane-group-`+subjectGroup.id+`-`+photo.original.photoId]>
                            <main>
                                <i class="pane-status active">
                                    <span class="icon"
                                          :style="{ visibility: (photoPublishCount[photo.original.photoId] ?? 0) > 0
                                            ? 'visible'
                                            : 'hidden' }">
                                        <font-awesome-icon :icon="['fas', 'paper-plane']"/>
                                        <font-awesome-icon class="version-published-icon-check"
                                                           :icon="['fas', 'check']"/>
                                    </span>
                                </i>
                                <div class="image-container" :class="versionPhotoMainPaneClass()">
                                    <img :src="api + photo.original.photoUrl">
                                </div>
                                <div class="version-badge-container">
                                    <badge :interactable="false"
                                           :badge-colors="{
                                        background: 'var(--color-semantic-info)',
                                        text: 'var(--color-mix-6-5-step-3)' }">
                                        {{ $tc('activities.viewOrder.versioning.badges.versions',
                                        photo.versions
                                            ? photo.versions.length + 1
                                            : 1, {
                                            count: photo.versions
                                                ? photo.versions.length + 1
                                                : 1
                                        }) }}
                                    </badge>
                                    <badge :interactable="false" :badge-colors="{
                                        background: 'var(--color-semantic-info)',
                                        text: 'var(--color-mix-6-5-step-3)' }">
                                        {{ $t('activities.viewOrder.versioning.badges.published', {
                                        count: photoPublishCount[photo.original.photoId] ?? 0
                                    }) }}
                                    </badge>
                                </div>
                            </main>
                            <sub>
                                <image-upload :ref="`photo-upload-group-${subjectGroup.id}-${photo.original.photoId}`"
                                              :multiple="true"
                                              :editable="false"
                                              :deletable="imageIsDeletable"
                                              selectable="many"
                                              :allow-get-selection="true"
                                              @selection="imageSelected"
                                              @image-selected="prepareAddVersion"
                                              @image-deleted="prepareDeleteVersion"
                                              :name="`photo-upload-group-${subjectGroup.id}-${photo.original.photoId}`"
                                />
                            </sub>
                        </template>
                    </pane-container>
                </template>
            </div>
            <div class="activity-control-header">
                <h2 class="title">{{ $t(`activities.viewOrder.comments.title`) }}</h2>
            </div>
            <div class="order-comments-box">
                <div v-if="$validateCapability('order-comment:create')"
                     class="write-comment-box">
                    <div class="user-avatar-container">
                        <div class="user-avatar-holder">
                            <fallback-image :src="$store.getters['UserInfo/userAvatarPath']"
                                            :fallback="['fas', 'user']" />
                        </div>
                    </div>
                    <textarea ref="new-comment-box"
                              :placeholder="$t('generic.ui.placeholders.comment')"
                              @keydown="commentTextareaKeydown"></textarea>
                    <div class="comment-actions">
                        <button class="btn btn-primary"
                                @click="sendCommentButtonClick">
                            {{ $t('generic.ui.send') }}
                        </button>
                    </div>
                </div>
                <div v-if="$validateCapability('order-comment:read')"
                     class="read-order-box">
                    <template v-for="comment in comments" :key="comment">
                        <comment-item ref="comment-item"
                                      :data="comment"
                                      @editing="commentItemEditing"
                                      @commentDelete="commentDelete"
                                      @commentEdit="commentEdit"/>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dasherize } from '@loufa/loufairy';
import { getFormInputValues } from '@loufa/loufairy-client';
import { ORDER_STATUS_COLORS } from '@pictaccio/admin-gui/core/order_status';
import { CommentItemData } from '@pictaccio/admin-gui/core/types/comment_item_data';
import { PhotoPublishCount } from '@pictaccio/admin-gui/core/types/photo_publish_count';
import { environment } from '@pictaccio/admin-gui/environment';
import { CartItem } from '@pictaccio/admin-gui/models/cart_item';
import { ContactInfo } from '@pictaccio/admin-gui/models/contact_info';
import { Order } from '@pictaccio/admin-gui/models/order';
import { PhotoSelection } from '@pictaccio/admin-gui/models/photo_selection';
import orderCommentService from '@pictaccio/admin-gui/services/order_comment_service';
import orderService from '@pictaccio/admin-gui/services/order_service';
import { pushBreadcrumb } from '@pictaccio/admin-gui/utils/global_breadcrumb';
import { globalPrompt } from '@pictaccio/admin-gui/utils/global_prompt';
import { globalToast } from '@pictaccio/admin-gui/utils/global_toast';
import PaneContainer from '@pictaccio/admin-gui/views/components/PaneContainer.vue';
import Badge from '@pictaccio/admin-gui/views/components/widgets/Badge.vue';
import CommentItem from '@pictaccio/admin-gui/views/components/widgets/CommentItem.vue';
import CurrencyLabel from '@pictaccio/admin-gui/views/components/widgets/CurrencyLabel.vue';
import Dropdown from '@pictaccio/admin-gui/views/components/widgets/Dropdown.vue';
import EditableLabel from '@pictaccio/admin-gui/views/components/widgets/EditableLabel.vue';
import FallbackImage from '@pictaccio/admin-gui/views/components/widgets/FallbackImage.vue';
import ImageUpload from '@pictaccio/admin-gui/views/components/widgets/ImageUpload.vue';
import OrderStatusLabel from '@pictaccio/admin-gui/views/components/widgets/OrderStatusLabel.vue';
import SelectionCheckbox from '@pictaccio/admin-gui/views/components/widgets/SelectionCheckbox.vue';
import Separator from '@pictaccio/admin-gui/views/components/widgets/Separator.vue';
import StateSelector from '@pictaccio/admin-gui/views/components/widgets/StateSelector.vue';
import AssigneeDropdown from '@pictaccio/admin-gui/views/private/activities/companions/AssigneeDropdown.vue';
import BaseOrder from '@pictaccio/admin-gui/views/private/activities/companions/base_order';
import DataTable from '@pictaccio/admin-gui/views/private/activities/companions/DataTable.vue';
import DocsLink from '@pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue';
import InputsDialog from '@pictaccio/admin-gui/views/private/activities/companions/InputsDialog.vue';
import OrderTaxes from '@pictaccio/admin-gui/views/private/activities/companions/OrderTaxes.vue';
import RenderProducts from '@pictaccio/admin-gui/views/private/activities/companions/RenderProducts.vue';
import { OrderStatus } from '@pictaccio/shared/types/order_status';
import { PhotoPublish } from '@pictaccio/shared/types/photo_publish';
import { PhotoVersion } from '@pictaccio/shared/types/photo_version';
import { Subject } from '@pictaccio/shared/types/subject';
import { SubjectGroup } from '@pictaccio/shared/types/subject_group';
import { Component, Prop } from 'vue-facing-decorator';

type VersioningPhotos = {
    original: PhotoSelection;
    versions: PhotoVersion[];
}

type VersioningPhotosUsedInOrder = {
    [key: string]: VersioningPhotos;
}

@Component({
    name: 'View Order',
    components: {
        OrderTaxes,
        Separator,
        FallbackImage,
        CurrencyLabel,
        InputsDialog,
        RenderProducts,
        OrderStatusLabel,
        AssigneeDropdown,
        Dropdown,
        CommentItem,
        Badge,
        ImageUpload,
        SelectionCheckbox,
        PaneContainer,
        StateSelector,
        FontAwesomeIcon,
        DataTable,
        DocsLink,
        EditableLabel
    }
})
export default class ViewOrder extends BaseOrder {
    @Prop
    private orderId: string;
    private order: Order;
    private photoPublishCount: PhotoPublishCount = {};
    private api = environment.apiUrl;
    private updateVersionActions: (() => Promise<void>)[] = [];
    private publishVersionUpdates: PhotoPublish[] = [];
    private hrefProductTagPrint: string;
    private isMounted = false;
    private isLoaded = false;
    private openedPane: string = null;
    private comments: CommentItemData[] = [];
    private productionStatus: OrderStatus = 'pending';
    private statusColors = ORDER_STATUS_COLORS;

    /* LIFECYCLE */
    public async beforeMount(): Promise<void> {
        await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'orders');
    }

    public async mounted(): Promise<void> {
        super.mounted();

        this.$store.watch(() => this.$store.getters['Orders/order'], order => {
            this.order = order;
            if (!this.order) {
                return;
            }

            this.isLoaded = true;
            this.$nextTick(() => {
                this.getOrderAssignment();
                this.getComments();
                this.updatePhotoPublishCount();
                this.fillEditableLabels();
                this.isMounted = true;
            });
        });

        // TODO: Make this function mind its own business (use vuex to transfer data to SubjectImage.vue)
        this.$store.watch(() => this.$store.getters['Orders/checks'], checks => {
            if (!this.isMounted) {
                return;
            }

            for (const check of checks) {
                const checkElement: HTMLInputElement =
                    this.$el.querySelector(
                        `[data-item-id="${check.itemId}"][data-photo-id="${check.photoId}"]` +
                        `[data-cart-item-id="${check.cartItemId}"]`);

                if (checkElement) {
                    checkElement.checked = check.check;
                }
            }
        });
        this.$store.watch(() => this.$store.getters['Orders/status'], status => {
            if (!this.isMounted) {
                return;
            }

            (this.$refs['status'] as OrderStatusLabel).setStatus(status);
            (this.$refs['status-badge'] as Badge).setBadgeColors(this.statusColors[status]);
            this.productionStatus = status;
        });

        try {
            await this.$store.dispatch('Orders/setOrderId', this.orderId)
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.messages.orderLoadError'), 'error');
        }

        (this.$refs['status-badge'] as Badge).setBadgeColors(this.statusColors[this.productionStatus]);

        try {
            await Promise.all([
                this.$store.dispatch('Orders/getChecks', this.orderId),
                this.$store.dispatch('Orders/getStatus', this.orderId)
            ]);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }

        pushBreadcrumb({
            id: 'level2',
            display: this.orderId,
            routerLink: '/activities/view-order/' + this.orderId
        });
    }

    /* EVENT HANDLERS */
    private async commentDelete(commentId: number): Promise<void> {
        try {
            await orderCommentService.deleteComment(commentId);
            await this.getComments();
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.comments.deleteFailedToast'), 'error');
        }
    }

    private async commentEdit(commentId: number, message: string): Promise<void> {
        try {
            await orderCommentService.editComment(commentId, message);
            await this.getComments();
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.comments.editFailedToast'), 'error');
        }
    }

    private commentItemEditing(): void {
        (this.$refs['comment-item'] as CommentItem[]).forEach((commentItem: CommentItem) => {
            commentItem.cancelEditing();
        });
    }

    private commentTextareaKeydown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !event.ctrlKey) {
            this.saveComment();
        }
    }

    private copyContactClick(): void {
        const contactInfoBox = this.$refs['contact-info'] as HTMLElement;
        const fields = getFormInputValues(contactInfoBox);
        const values = Object.values(fields);

        values.splice(4, 0, '');

        navigator.clipboard.writeText(values.join('\n'))
            .then(() => globalToast(this.$t('generic.ui.textCopied'), 'success'))
            .catch(() => globalToast(this.$t('generic.ui.textFailedCopy'), 'warning'));
    }

    private imageSelected(event): void {
        const [_1, _2, _3, itemId, photoId] = event.imageUploadName.split('-');
        const photo = Object.values(this.order.photos).find(photo => photo.photoId === photoId);
        const photoVersion = this.order.photoVersions[photo.itemId] ?? {};
        const version = photoVersion[photo.photoUrl]
            ? this.order.photoVersions[photo.itemId][photo.photoUrl]
                .find(version => version.version === event.selectedItem)
            : null;
        const orderId = parseInt(this.orderId, 10);
        const originalPath = photo.photoUrl;
        const versionPath = version?.version;
        const exist = this.publishVersionUpdates.findIndex(item => item.orderId === orderId &&
                                                           item.itemId === itemId &&
                                                           item.originalPath === originalPath &&
                                                           item.versionPath === versionPath);
        const publishing = event.selection.includes(event.selectedItem);

        if (exist !== -1) {
            this.publishVersionUpdates.splice(exist, 1);
        } else {
            this.publishVersionUpdates.push({
                orderId,
                itemId,
                originalPath,
                versionPath,
                published: publishing
            });
        }
    }

    private navigatePrint(path: string): string {
        return `${environment.printServiceUrl}${path}?q=${this.orderId}&l=${this.$i18n.locale}`;
    }

    private navigateProductTagPrint(): void {
        const productTags = (this.$refs['print-product-tag-input'] as HTMLInputElement[]).filter(i => i.checked)
            .map(i => i.value)
            .join(',');
        this.hrefProductTagPrint =
            `${environment.printServiceUrl}product-tags?q=${this.orderId}&l=${this.$i18n.locale}&pt=${productTags}`;
    }

    private async notifyCustomerClick(): Promise<void> {
        let result = 'no';

        if (this.openedPane !== null) {
            result = await globalPrompt({
                buttonType: 'yes-no-cancel',
                icon: ['fal', 'exclamation-triangle'],
                message: this.$t('activities.viewOrder.versioning.prompts.notifyCustomerWithOpenPane'),
                title: this.$t('activities.viewOrder.versioning.prompts.notifyCustomerWithOpenPaneTitle')
            });
        }

        switch (result) {
        case 'yes':
            (this.$refs['pane-container'] as PaneContainer[]).forEach(paneContainer =>
                paneContainer.savePane(this.openedPane));
            break;

        case 'cancel':
            return;
        }

        try {
            const status = await orderService.notifyCustomer(parseInt(this.orderId, 10));

            if (status.updateFound) {
                globalToast(this.$t('activities.viewOrder.messages.notifyCustomerSuccess'), 'success');
            } else {
                globalToast(this.$t('activities.viewOrder.messages.notifyCustomerNoUpdate'), 'info');
            }
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.messages.notifyCustomerFailed'), 'error');
        }
    }

    private async orderAssigneeChange(event): Promise<void> {
        try {
            await orderService.assign(parseInt(this.orderId, 10), event.userId);
            globalToast(this.$t('activities.viewOrder.commands.assignSuccessToast'), 'success');
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.commands.assignFailedToast'), 'error');
        }
    }

    private async openVersioningPane(paneName: string): Promise<void> {
        let publishedPhotos;
        try {
            publishedPhotos = await orderService.getPublishedPhotos(parseInt(this.orderId, 10));
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.messages.loadPublishedPhotosError'), 'error');
            return;
        }
        const ids = paneName.replace('pane-', '').split('-');
        const item = ids[0] === 'subject'
            ? this.order.subjects.find(i => i.id.toString() === ids[1])
            : this.order.subjectGroups.find(i => i.id.toString() === ids[1]);
        const photoId = Object.values(this.order.photos).find(i => i.photoId === ids[2]).photoId;
        const imageUpload: ImageUpload = this.$refs[`photo-upload-${ids[0]}-${ids[1]}-${ids[2]}`][0];
        const imageUrls = {};

        imageUrls[photoId] =
            Object.values(this.order.photos).find(i => photoId === i.photoId).photoUrl;

        if (this.order.photoVersions[item.id] &&
            this.order.photoVersions[item.id][imageUrls[photoId]]) {
            for (const version of Object.values<PhotoVersion>(this.order.photoVersions[item.id][imageUrls[photoId]])) {
                imageUrls[version.version] = version.version;
            }
        }

        this.openedPane = paneName;

        (this.$refs[`photo-upload-${ids[0]}-${ids[1]}-${ids[2]}`][0] as ImageUpload).setFiles(imageUrls);

        imageUpload.setFiles(imageUrls);

        this.$nextTick(() => {
            imageUpload.setSelection(publishedPhotos
                .filter(photo => Object.values(this.order.photos)
                    .find(photo => photo.photoId === photoId)?.photoUrl === photo.originalPath && photo.published)
                .map(photo => photo.versionPath
                    ? photo.versionPath
                    : photoId));
        });
    }

    private paneContainerCloseClick(): void {
        this.openedPane = null;
    }

    private async paneContainerUpdateClick(): Promise<void> {
        const publishList: PhotoPublish[] = [];
        const unpublishList: PhotoPublish[] = [];

        for await (const action of this.updateVersionActions) {
            await action();
        }

        for await (const publish of this.publishVersionUpdates) {
            if (publish.published) {
                publishList.push(publish);
            } else {
                unpublishList.push(publish);
            }
        }
        this.publishVersionUpdates = [];

        try {
            if (publishList.length > 0) {
                await orderService.publishPhotos(publishList);
            }
            if (unpublishList.length > 0) {
                await orderService.unpublishPhotos(unpublishList);
            }
            await this.updatePhotoPublishCount();
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.messages.updateVersionError'), 'error');
        }

        this.updateVersionActions = [];

        Object.entries(this.$refs)
            .filter(i => i[0].startsWith('photo-upload-'))
            .map(i => (i[1][0] as ImageUpload).clearFiles());

        try {
            await this.$store.dispatch('Orders/setOrderId', this.orderId);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }

        this.openedPane = null;
    }

    private prepareAddVersion(data: { imageUploadName: string, file: File}): void {
        this.updateVersionActions.push(async () => {
            const ids = data.imageUploadName.replace('photo-upload-', '').split('-');
            const item = ids[0] === 'subject'
                ? this.order.subjects.find(i => i.id.toString() === ids[1])
                : this.order.subjectGroups.find(i => i.id.toString() === ids[1]);
            const photoId = ids[2];

            try {
                if (ids[0] === 'subject') {
                    await this.$store.dispatch('Subjects/addVersion', {
                        id: item.id,
                        original: this.versioningPhotosUsedInOrder(item)[photoId].original.photoUrl,
                        version: data.file
                    });
                } else {
                    await this.$store.dispatch('SubjectGroups/addVersion', {
                        id: item.id,
                        original: this.versioningPhotosUsedInOrder(item)[photoId].original.photoUrl,
                        version: data.file
                    });
                }
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error');
            }
        });
    }

    private prepareDeleteVersion(data: { imageUploadName: string, file: string}): void {
        this.updateVersionActions.push(async () => {
            const ids = data.imageUploadName.replace('photo-upload-', '').split('-');
            const item = ids[0] === 'subject'
                ? this.order.subjects.find(i => i.id.toString() === ids[1])
                : this.order.subjectGroups.find(i => i.id.toString() === ids[1]);
            const photoId = ids[2];

            try {
                if (ids[0] === 'subject') {
                    await this.$store.dispatch('Subjects/removeVersion', {
                        id: item.id,
                        original: this.versioningPhotosUsedInOrder(item)[photoId].original.photoUrl,
                        version: data.file
                    });
                } else {
                    await this.$store.dispatch('SubjectGroups/removeVersion', {
                        id: item.id,
                        original: this.versioningPhotosUsedInOrder(item)[photoId].original.photoUrl,
                        version: data.file
                    });
                }
            } catch (error) {
                globalToast(this.$t('messages.saveError'), 'error')
            }
        });
    }

    private async printOrderClick(event: MouseEvent): Promise<void> {
        event.preventDefault();
        event.stopPropagation();

        try {
            const token = await orderService.generatePrintToken([parseInt(this.orderId, 10)]);
            document.cookie = `printToken=${token}; path=/;Max-Age=86400${environment.production ? '; secure' : ''}`;
            window.open(this.navigatePrint('orders'), '_blank').focus();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async printProductLabelClick(event: MouseEvent): Promise<void> {
        event.preventDefault();
        event.stopPropagation();

        try {
            const token = await orderService.generatePrintToken([parseInt(this.orderId, 10)]);
            document.cookie = `printToken=${token}; path=/;Max-Age=86400${environment.production ? '; secure' : ''}`;
            window.open(this.hrefProductTagPrint, '_blank').focus();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async printShippingLabelClick(event: MouseEvent): Promise<void> {
        event.preventDefault();
        event.stopPropagation();

        try {
            const token = await orderService.generatePrintToken([parseInt(this.orderId, 10)]);
            document.cookie = `printToken=${token}; path=/;Max-Age=86400${environment.production ? '; secure' : ''}`;
            window.open(this.navigatePrint('shipping-labels'), '_blank').focus();
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private sendCommentButtonClick(): void {
        this.saveComment();
    }

    private async statusChange(status: OrderStatus): Promise<void> {
        try {
            await this.$store.dispatch('Orders/setStatus', {
                id: this.orderId,
                status
            });

            globalToast(this.$t('activities.viewOrder.messages.statusChangeSuccess'), 'success');
            this.productionStatus = status;
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.messages.statusChangeError'), 'error');
        }
    }

    private async updateContact(): Promise<void> {
        if (!this.isMounted) {
            return null;
        }
        const contactInfoBox = this.$refs['contact-info'] as HTMLElement;
        const fields = getFormInputValues(contactInfoBox);
        const values: ContactInfo = {
            firstName: fields['first-name'],
            lastName: fields['last-name'],
            email: fields['email'],
            phone: fields['phone'],
            city: fields['city'],
            country: fields['country'],
            postalCode: fields['postal-code'],
            region: fields['region'],
            streetAddress1: fields['street-address-1'],
            streetAddress2: fields['street-address-2']
        };
        try {
            const result = await this.$store.dispatch('Orders/editContactInfo', {
                id: parseInt(this.orderId, 10),
                contactInfo: values
            });

            if (result) {
                this.fillEditableLabels();
            }
        } catch (error) {
            globalToast(this.$t('messages.saveError'), 'error');
        }
    }

    /* PRIVATE */
    private fillEditableLabels(): void {
        for (const key of Object.keys(this.order.contact)) {
            if (!this.$refs[dasherize(key)]) {
                continue;
            }

            (this.$refs[dasherize(key)] as EditableLabel).setValue(this.order.contact[key]);
        }
    }

    private async getOrderAssignment(): Promise<void> {
        try {
            const assignee = await orderService.getAssigned(parseInt(this.orderId, 10));
            await (this.$refs['order-assignee'] as AssigneeDropdown).setAssignee(assignee ?? null);
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private async getComments(): Promise<void> {
        try {
            this.comments = await orderCommentService.getComments(parseInt(this.orderId, 10));
        } catch (error) {
            globalToast(this.$t('messages.loadError'), 'error');
        }
    }

    private imageIsDeletable(image: string): boolean {
        return !Object.values(this.order.photos).map(i => i.photoUrl).includes(image);
    }

    private versioningPhotosUsedInOrder(item: Subject | SubjectGroup): VersioningPhotosUsedInOrder {
        const usedPhotoUrls = this.order.cartItems
            .map(item => item.photos)
            .flat()
            .map(photoId => Object.values(this.order.photos)
                .filter(photo => photo.photoId === photoId)
                .map(photo => photo.photoUrl))
            .flat();

        return Object.values(this.order.photos)
            .filter(photoSelection => item.photos.includes(photoSelection.photoUrl))
            .filter(photoSelection => usedPhotoUrls.includes(photoSelection.photoUrl))
            .reduce((photosByItem, original) => {
                photosByItem[original.photoId] = {
                    original,
                    versions: this.order.photoVersions[item.id]
                        ? this.order.photoVersions[item.id][original.photoUrl]
                        : []
                };
                return photosByItem;
            }, {});
    }

    private async saveComment(): Promise<void> {
        const commentBox = this.$refs['new-comment-box'] as HTMLTextAreaElement;
        const comment = commentBox.value;

        if (comment.trim() === '') {
            return;
        }

        try {
            const result = await orderCommentService.addComment(parseInt(this.orderId, 10), comment);

            if (!result) {
                throw new Error('Failed to add comment');
            }

            commentBox.value = '';
            await this.getComments();
        } catch (error) {
            globalToast(this.$t('activities.viewOrder.messages.addCommentError'), 'error');
        }
    }

    private subjectsWithPhotos(): Subject[] {
        const usedPhotoUrls = this.order.cartItems
            .map(item => item.photos)
            .flat()
            .map(photoId => Object.values(this.order.photos)
                .filter(photo => photo.photoId === photoId)
                .map(photo => photo.photoUrl))
            .flat();
        return this.order.subjects
            .filter(subject =>
                subject.photos.some(photoId =>
                    usedPhotoUrls.includes(photoId)
                )
            );
    }

    private uniqueProducts(): CartItem[] {
        return this.order.cartItems
            .filter((item, index, self) => self.findIndex(i => i.productName === item.productName) === index);
    }

    private async updatePhotoPublishCount(): Promise<void> {
        const publishedPhotos = await orderService.getPublishedPhotos(parseInt(this.orderId, 10));

        if (publishedPhotos) {
            this.photoPublishCount = publishedPhotos
                .filter(photo => photo.published)
                .reduce((count, photo) => {
                    const photoId = Object.values(this.order.photos)
                        .find(i => i.photoUrl === photo.originalPath)?.photoId;

                    if (!count[photoId]) {
                        count[photoId] = 0;
                    }

                    count[photoId]++;
                    return count;
                }, {});
        }
    }

    private versionPhotoMainPaneClass(): string {
        return 'original';
    }
}
</script>
