(self["webpackChunk_pictaccio_admin_gui"] = self["webpackChunk_pictaccio_admin_gui"] || []).push([["src_views_private_activities_Orders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-facing-decorator */ "./node_modules/vue-facing-decorator/dist/esm/index.js");




let EllipsisMenu = class EllipsisMenu extends vue_facing_decorator__WEBPACK_IMPORTED_MODULE_3__.Vue {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "items", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "documentClickBounded", this.documentClick.bind(this));
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "normalizedOptions", {
      focused: 2
    });
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showPopupMenu", false);
  }
  /* LIFECYCLE */
  created() {
    this.normalizedOptions = {
      ...this.normalizedOptions,
      ...this.options
    };
  }
  /* EVENT HANDLERS */
  documentClick(event) {
    if (event.target === this.$refs['popup-trigger']) {
      return;
    }
    if (this.showPopupMenu) {
      this.showPopupMenu = false;
    }
  }
  popupMenuItemClick(event) {
    const id = event.target.getAttribute('data-id');
    this.$emit(`${id}Click`);
  }
  popupMenuTriggerClick(event) {
    if (!this.showPopupMenu) {
      this.$nextTick(() => {
        document.body.addEventListener('click', this.documentClickBounded, {
          capture: true,
          once: true
        });
      });
    } else {
      document.body.removeEventListener('click', this.documentClickBounded);
    }
    this.showPopupMenu = !this.showPopupMenu;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vue_facing_decorator__WEBPACK_IMPORTED_MODULE_3__.Prop], EllipsisMenu.prototype, "items", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vue_facing_decorator__WEBPACK_IMPORTED_MODULE_3__.Prop], EllipsisMenu.prototype, "options", void 0);
EllipsisMenu = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_3__.Component)({
  name: 'Ellipsis Menu',
  components: {
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon
  },
  expose: ['*Click']
})], EllipsisMenu);
/* harmony default export */ __webpack_exports__["default"] = (EllipsisMenu);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pictaccio/admin-gui/datasources/generic_data_source */ "./src/datasources/generic_data_source.ts");
/* harmony import */ var _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pictaccio/admin-gui/environment */ "./src/environment/index.ts");
/* harmony import */ var _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pictaccio/admin-gui/services/order_service */ "./src/services/order_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_boolean_filter_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/boolean_filter_function */ "./src/utils/filter_functions/boolean_filter_function.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_date_filter_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/date_filter_function */ "./src/utils/filter_functions/date_filter_function.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_id_filter_function__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/id_filter_function */ "./src/utils/filter_functions/id_filter_function.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_string_filter_function__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/string_filter_function */ "./src/utils/filter_functions/string_filter_function.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_uuid_filter_function__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/uuid_filter_function */ "./src/utils/filter_functions/uuid_filter_function.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_prompt */ "./src/utils/global_prompt.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_remote_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/remote_store */ "./src/utils/remote_store.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_route_extra__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/route_extra */ "./src/utils/route_extra.ts");
/* harmony import */ var _pictaccio_admin_gui_views_components_widgets_EllipsisMenu_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @pictaccio/admin-gui/views/components/widgets/EllipsisMenu.vue */ "./src/views/components/widgets/EllipsisMenu.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_admin_activities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/admin_activities */ "./src/views/private/activities/companions/admin_activities.ts");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_orders_columns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/data_table_columns/orders_columns */ "./src/views/private/activities/companions/data_table_columns/orders_columns.ts");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_DataTable_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/DataTable.vue */ "./src/views/private/activities/companions/DataTable.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_DocsLink_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/DocsLink.vue */ "./src/views/private/activities/companions/DocsLink.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_filter_components_AssigneeFilterItem_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/filter_components/AssigneeFilterItem.vue */ "./src/views/private/activities/companions/filter_components/AssigneeFilterItem.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_filter_components_BooleanFilterItem_vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/filter_components/BooleanFilterItem.vue */ "./src/views/private/activities/companions/filter_components/BooleanFilterItem.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_filter_components_DateFilterItem_vue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/filter_components/DateFilterItem.vue */ "./src/views/private/activities/companions/filter_components/DateFilterItem.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_filter_components_MultiListFilterItem_vue__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/filter_components/MultiListFilterItem.vue */ "./src/views/private/activities/companions/filter_components/MultiListFilterItem.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_filter_components_TextFilterItem_vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/filter_components/TextFilterItem.vue */ "./src/views/private/activities/companions/filter_components/TextFilterItem.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_Filters_vue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/Filters.vue */ "./src/views/private/activities/companions/Filters.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_placeholders_PlaceholderDataTable_vue__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/placeholders/PlaceholderDataTable.vue */ "./src/views/private/activities/companions/placeholders/PlaceholderDataTable.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_SelectAssignee_vue__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/SelectAssignee.vue */ "./src/views/private/activities/companions/SelectAssignee.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_TutorialText_vue__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/TutorialText.vue */ "./src/views/private/activities/companions/TutorialText.vue");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! vue-facing-decorator */ "./node_modules/vue-facing-decorator/dist/esm/index.js");




































/**
 * Upon receiving the @event apply-filters from Filters, will call the function applyFilters in the table
 * ref as 'order-table' with the FilterFunctionInterface[] from the event as parameter.
 */
let Orders = class Orders extends _pictaccio_admin_gui_views_private_activities_companions_admin_activities__WEBPACK_IMPORTED_MODULE_22__["default"] {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "orders", _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_orders_columns__WEBPACK_IMPORTED_MODULE_23__.ORDERS_COLUMNS);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dialogRowSelected", null);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filters", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filtersHolderVisible", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userListReady", false);
  }
  beforeRouteUpdate(to, from, next) {
    const tabs = this.$refs['tabs'];
    const filtersHolder = this.$refs['filters-holder'];
    if (to.name === from.name && !to.params.extra && tabs && filtersHolder) {
      tabs.setBind('');
      filtersHolder.clearFilters();
    }
    next();
  }
  /* LIFECYCLE */
  async beforeCreate() {
    await Promise.all([this.$store.dispatch('SessionsReader/sessionsRead'), this.$store.dispatch('ShippingOptionsReader/shippingOptionsRead')]);
    this.createFilters();
  }
  async beforeMount() {
    await this.$store.dispatch('CurrentActivity/setCurrentActivity', 'orders');
  }
  async mounted() {
    super.mounted();
    this.$store.watch(() => this.$store.getters['User/usersList'], () => {
      this.userListReady = true;
      this.$nextTick(() => {
        this.$refs['orders-table'].setRemoteStore(new _pictaccio_admin_gui_utils_remote_store__WEBPACK_IMPORTED_MODULE_19__.RemoteStore('Orders'), !(0,_pictaccio_admin_gui_utils_route_extra__WEBPACK_IMPORTED_MODULE_20__.shouldExtraSilenceRead)(this.extra));
        if (this.$route.query && this.$route.query['filter-id'] && !Array.isArray(this.$route.query['filter-id'])) {
          const ids = this.$route.query['filter-id'].split(',');
          this.applyFilters([new _pictaccio_admin_gui_utils_filter_functions_id_filter_function__WEBPACK_IMPORTED_MODULE_14__.IdFilterFunction(ids, 'is', 'id')]);
          this.$nextTick(() => {
            this.$refs['filters-holder'].setSearchFilters(this.$route.query['filter-id'].toString());
          });
        }
      });
    });
    try {
      this.$store.dispatch('User/readUsersList', true);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_18__.globalToast)(this.$t('messages.loadError'), 'error');
    }
  }
  /* EVENT HANDLERS */
  applyFilters(filters) {
    const extra = this.updateUrlExtra();
    this.$refs['tabs'].setBind(extra);
    this.$refs['orders-table'].applyFilters(filters);
  }
  async bulkPrintLabel() {
    const selection = Object.values(this.$refs['orders-table'].getSelectedRows()).map(i => parseInt(i, 10));
    if (selection.length === 0) {
      (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_17__.globalPrompt)({
        title: this.$t('activities.orders.bulkPrintLabelNoSelectionTitle'),
        message: this.$t('activities.orders.bulkPrintLabelNoSelectionMessage'),
        buttonType: 'ok'
      });
      return;
    }
    try {
      const token = await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_11__["default"].generatePrintToken(selection);
      document.cookie = `printToken=${token}; path=/;Max-Age=120${_pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_10__.environment.production ? '; secure' : ''}`;
      window.open(this.navigatePrint('shipping-labels', selection), '_blank').focus();
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_18__.globalToast)(this.$t('messages.loadError'), 'error');
    }
  }
  async bulkPrintOrder() {
    const selection = Object.values(this.$refs['orders-table'].getSelectedRows()).map(i => parseInt(i, 10));
    if (selection.length === 0) {
      (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_17__.globalPrompt)({
        title: this.$t('activities.orders.bulkPrintOrderNoSelectionTitle'),
        message: this.$t('activities.orders.bulkPrintOrderNoSelectionMessage'),
        buttonType: 'ok'
      });
      return;
    }
    try {
      const token = await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_11__["default"].generatePrintToken(selection);
      document.cookie = `printToken=${token}; path=/;Max-Age=120${_pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_10__.environment.production ? '; secure' : ''}`;
      window.open(this.navigatePrint('orders', selection), '_blank').focus();
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_18__.globalToast)(this.$t('messages.loadError'), 'error');
    }
  }
  dialogClose() {
    this.closeDialog('crudDialog');
    this.dialogRowSelected = null;
    this.$forceUpdate();
  }
  exportContactsNormal() {
    this.exportContacts('csv-normal');
  }
  exportContactsExcel() {
    this.exportContacts('csv-excel');
  }
  navigatePrint(path, selection) {
    return `${_pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_10__.environment.printServiceUrl}${path}?q=${selection.join(',')}&l=${this.$i18n.locale}`;
  }
  resetFilters() {
    this.$refs['filters-holder'].resetPopularFilters();
  }
  rowSelected(event) {
    this.$router.push({
      name: 'View Order',
      params: {
        orderId: event.rowId
      }
    });
  }
  /* PRIVATE */
  createFilters() {
    this.filters = [
    // {
    //     pop: true,
    //     component: MainTextFilterItem,
    //     name: 'search',
    //     filters: [
    //         { filterFunction: IdFilterFunction, column: 'id' }
    //     ]
    // },
    {
      pop: false,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_TextFilterItem_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
      name: 'searchSubjectName',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_string_filter_function__WEBPACK_IMPORTED_MODULE_15__.StringFilterFunction,
        column: '_subject-name'
      }]
    }, {
      pop: false,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_TextFilterItem_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
      name: 'searchContactName',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_string_filter_function__WEBPACK_IMPORTED_MODULE_15__.StringFilterFunction,
        column: '_contact-name'
      }]
    }, {
      pop: false,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_TextFilterItem_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
      name: 'searchContactPhone',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_string_filter_function__WEBPACK_IMPORTED_MODULE_15__.StringFilterFunction,
        column: '_contact-phone'
      }]
    }, {
      pop: false,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_TextFilterItem_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
      name: 'searchContactEmail',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_string_filter_function__WEBPACK_IMPORTED_MODULE_15__.StringFilterFunction,
        column: '_contact-email'
      }]
    }, {
      pop: true,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_MultiListFilterItem_vue__WEBPACK_IMPORTED_MODULE_29__["default"],
      datasource: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_9__.GenericDataSource.from(null, 'session', [{
        id: 'options',
        value: this.$store.getters['SessionsReader/sessions'].map(session => ({
          id: session.id,
          value: session.value
        }))
      }]),
      name: 'session',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_id_filter_function__WEBPACK_IMPORTED_MODULE_14__.IdFilterFunction,
        column: '_session-id'
      }]
    }, {
      pop: true,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_MultiListFilterItem_vue__WEBPACK_IMPORTED_MODULE_29__["default"],
      datasource: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_9__.GenericDataSource.from(null, 'deliveryOption', [{
        id: 'options',
        value: this.$store.getters['ShippingOptionsReader/shippingOptions'].map(option => ({
          id: option.id,
          value: option.value
        }))
      }]),
      name: 'deliveryOption',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_id_filter_function__WEBPACK_IMPORTED_MODULE_14__.IdFilterFunction,
        column: '_delivery-option-id'
      }]
    }, {
      pop: true,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_DateFilterItem_vue__WEBPACK_IMPORTED_MODULE_28__["default"],
      name: 'date',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_date_filter_function__WEBPACK_IMPORTED_MODULE_13__.DateFilterFunction,
        column: 'created_on'
      }]
    }, {
      pop: true,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_TextFilterItem_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
      name: 'group',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_string_filter_function__WEBPACK_IMPORTED_MODULE_15__.StringFilterFunction,
        column: '_subject-group'
      }]
    }, {
      pop: true,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_AssigneeFilterItem_vue__WEBPACK_IMPORTED_MODULE_26__["default"],
      name: 'assignee',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_uuid_filter_function__WEBPACK_IMPORTED_MODULE_16__.UuidFilterFunction,
        column: '_admin-assignee'
      }]
    }, {
      pop: false,
      component: _pictaccio_admin_gui_views_private_activities_companions_filter_components_BooleanFilterItem_vue__WEBPACK_IMPORTED_MODULE_27__["default"],
      name: 'paid',
      filters: [{
        filterFunction: _pictaccio_admin_gui_utils_filter_functions_boolean_filter_function__WEBPACK_IMPORTED_MODULE_12__.BooleanFilterFunction,
        column: 'paid'
      }]
    }];
    this.filtersHolderVisible = true;
    this.checkAndReloadFilters();
  }
  async exportContacts(format) {
    const selection = this.$refs['orders-table'].getSelectedRows();
    if (selection.length === 0) {
      await (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_17__.globalPrompt)({
        title: this.$t('activities.orders.exportContactsNoSelectionTitle'),
        message: this.$t('activities.orders.exportContactsNoSelectionMessage'),
        buttonType: 'ok'
      });
      return;
    }
    try {
      const csvFile = await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_11__["default"].exportContacts(selection, this.$i18n.locale, format);
      const a = document.createElement('a');
      const url = URL.createObjectURL(csvFile);
      a.setAttribute('href', url);
      a.setAttribute('download', csvFile.name);
      a.click();
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_18__.globalToast)(this.$t('messages.loadError'), 'error');
    }
  }
  recalculateDatatablePos() {
    this.$nextTick(() => {
      this.$refs['orders-table'].recalculateDatatablePos();
    });
  }
  updateUrlExtra() {
    const filter = this.$refs['filters-holder'].serializeFilters();
    const extra = (0,_pictaccio_admin_gui_utils_route_extra__WEBPACK_IMPORTED_MODULE_20__.formatExtraKey)(this.extra, 'filters', filter);
    this.$router.replace({
      params: {
        extra
      }
    });
    return extra;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([vue_facing_decorator__WEBPACK_IMPORTED_MODULE_35__.Hook], Orders.prototype, "beforeRouteUpdate", null);
Orders = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_35__.Component)({
  name: 'Orders',
  components: {
    EllipsisMenu: _pictaccio_admin_gui_views_components_widgets_EllipsisMenu_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    TutorialText: _pictaccio_admin_gui_views_private_activities_companions_TutorialText_vue__WEBPACK_IMPORTED_MODULE_34__["default"],
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon,
    FiltersHolder: _pictaccio_admin_gui_views_private_activities_companions_Filters_vue__WEBPACK_IMPORTED_MODULE_31__["default"],
    DataTable: _pictaccio_admin_gui_views_private_activities_companions_DataTable_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
    SelectAssignee: _pictaccio_admin_gui_views_private_activities_companions_SelectAssignee_vue__WEBPACK_IMPORTED_MODULE_33__["default"],
    DocsLink: _pictaccio_admin_gui_views_private_activities_companions_DocsLink_vue__WEBPACK_IMPORTED_MODULE_25__["default"],
    PlaceholderDataTable: _pictaccio_admin_gui_views_private_activities_companions_placeholders_PlaceholderDataTable_vue__WEBPACK_IMPORTED_MODULE_32__["default"]
  }
})], Orders);
/* harmony default export */ __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "ellipsis-menu"
};
const _hoisted_2 = ["data-id"];
const _hoisted_3 = {
  class: "popup-menu"
};
const _hoisted_4 = ["data-id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.items.slice(0, _ctx.normalizedOptions.focused), item => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: item.id,
      "data-id": item.id,
      class: "btn btn-primary",
      onClick: _cache[0] || (_cache[0] =
      //@ts-ignore
      (...args) => _ctx.popupMenuItemClick && _ctx.popupMenuItemClick(...args))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(item.localeKey)), 9 /* TEXT, PROPS */, _hoisted_2);
  }), 128 /* KEYED_FRAGMENT */)), _ctx.items.length > _ctx.normalizedOptions.focused ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["popup-menu-container", _ctx.showPopupMenu ? 'opened' : ''])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "btn btn-primary popup-trigger",
    ref: "popup-trigger",
    onClick: _cache[1] || (_cache[1] =
    //@ts-ignore
    (...args) => _ctx.popupMenuTriggerClick && _ctx.popupMenuTriggerClick(...args))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
    icon: "ellipsis-v"
  })], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.items.slice(_ctx.normalizedOptions.focused), item => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: item.id,
      "data-id": item.id,
      class: "btn btn-tertiary popup-menu-item",
      onClick: _cache[2] || (_cache[2] =
      //@ts-ignore
      (...args) => _ctx.popupMenuItemClick && _ctx.popupMenuItemClick(...args))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(item.localeKey)), 9 /* TEXT, PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */))])], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  id: "orders-list",
  class: "activity-wrapper"
};
const _hoisted_2 = {
  key: 0,
  class: "assign"
};
const _hoisted_3 = {
  name: "internal-step",
  id: "assign-internal-step"
};
const _hoisted_4 = {
  value: "toDo",
  class: "to-do"
};
const _hoisted_5 = {
  value: "touchups",
  class: "touchups"
};
const _hoisted_6 = {
  value: "production",
  class: "production"
};
const _hoisted_7 = {
  value: "packaging",
  class: "packaging"
};
const _hoisted_8 = {
  value: "shippingReady",
  class: "shipping-ready"
};
const _hoisted_9 = {
  value: "error",
  class: "error"
};
const _hoisted_10 = {
  class: "btn btn-primary"
};
const _hoisted_11 = {
  key: 0,
  ref: "order-container",
  class: "activity-control table-holder"
};
const _hoisted_12 = {
  class: "actions-box"
};
const _hoisted_13 = {
  key: 0,
  class: "btn btn-icon-only",
  name: "view-order"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_select_assignee = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("select-assignee");
  const _component_dialog_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dialog-box");
  const _component_activities_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("activities-tabs");
  const _component_ellipsis_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ellipsis-menu");
  const _component_filters_holder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("filters-holder");
  const _component_placeholder_data_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("placeholder-data-table");
  const _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");
  const _component_data_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("data-table");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dialog_box, {
    ref: "crudDialog",
    onDialogClose: _ctx.dialogClose,
    title: _ctx.$t(`activities.orders.title`) + ' #' + _ctx.dialogRowSelected?.rowId,
    dismiss: true,
    overlay: true
  }, {
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.dialogRowSelected?.colName === 'assignee' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_select_assignee), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`activities.orders.status.toDo`)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`activities.orders.status.touchups`)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`activities.orders.status.production`)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`activities.orders.status.packaging`)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`activities.orders.status.shippingReady`)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`activities.orders.status.error`)), 1 /* TEXT */)]), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
      name: "assign-instructions",
      id: "assign-instructions"
    }, null, -1 /* CACHED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    uiDialog: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(`generic.ui.confirm`)), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onDialogClose", "title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_activities_tabs, {
    ref: "tabs"
  }, null, 512 /* NEED_PATCH */), _ctx.userListReady ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_data_table, {
    ref: "orders-table",
    name: 'orders',
    tableData: _ctx.orders,
    "rows-selectable": _ctx.$validateCapability('order:read'),
    onControlViewOrder: _ctx.rowSelected,
    onResetFilters: _ctx.resetFilters,
    onRowSelected: _ctx.rowSelected
  }, {
    "context-controls": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ellipsis_menu, {
      items: [{
        id: 'bulkPrintOrder',
        localeKey: 'activities.orders.bulkPrintOrder'
      }, {
        id: 'bulkPrintLabel',
        localeKey: 'activities.orders.bulkPrintLabel'
      }, {
        id: 'exportContactsNormal',
        localeKey: 'activities.orders.exportContactsNormal'
      }, {
        id: 'exportContactsExcel',
        localeKey: 'activities.orders.exportContactsExcel'
      }],
      options: {
        focused: 0
      },
      onBulkPrintOrderClick: _ctx.bulkPrintOrder,
      onBulkPrintLabelClick: _ctx.bulkPrintLabel,
      onExportContactsNormalClick: _ctx.exportContactsNormal,
      onExportContactsExcelClick: _ctx.exportContactsExcel
    }, null, 8 /* PROPS */, ["onBulkPrintOrderClick", "onBulkPrintLabelClick", "onExportContactsNormalClick", "onExportContactsExcelClick"])])]),
    filters: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.filtersHolderVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_filters_holder, {
      key: 0,
      ref: "filters-holder",
      allowedFilters: _ctx.filters,
      onFiltersVisibilityChanged: _ctx.recalculateDatatablePos,
      onApplyFilters: _ctx.applyFilters
    }, null, 8 /* PROPS */, ["allowedFilters", "onFiltersVisibilityChanged", "onApplyFilters"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    tutorial: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <tutorial-text ref=\"order-container-table-tutorial\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   :name-ref=\"'order-container-table-tutorial'\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   :background-shape=\"'blob-h-1'\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   :ui-offset=\"{ ui: '0 -1rem', next: '1rem 1rem', skip: '5.5rem -1.5rem' }\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   :orientation=\"'bottom-right_down'\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   @mounted=\"getTutorialTargetPosition('order-container',"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                   '.table-holder, .placeholder-container', 'table')\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        {{ $t('activities.manageSessions.tutorial.whatIs') }}"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    </tutorial-text>")]),
    placeholder: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_placeholder_data_table, {
      headers: _ctx.orders.headers,
      rows: 6
    }, null, 8 /* PROPS */, ["headers"])]),
    "rows-controls": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.$validateCapability('order:read') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
      icon: ['far', 'eye']
    })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["tableData", "rows-selectable", "onControlViewOrder", "onResetFilters", "onRowSelected"])], 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.delete.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.delete.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var dindex = 0;
    var found = false;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index++];
      if (found || entry.key === key) {
        found = true;
        $delete(this, entry.key);
      } else dindex++;
    }
    while (dindex < entriesLength) {
      entry = entries[dindex++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.has.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.has.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
var $has = uncurryThis(URLSearchParamsPrototype.has);
var params = new $URLSearchParams('a=1');

// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
if (params.has('a', 2) || !params.has('a', undefined)) {
  defineBuiltIn(URLSearchParamsPrototype, 'has', function has(name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $has(this, name);
    var values = getAll(this, name); // also validates `this`
    validateArgumentsLength(length, 1);
    var value = toString($value);
    var index = 0;
    while (index < values.length) {
      if (values[index++] === value) return true;
    } return false;
  }, { enumerable: true, unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.size.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.size.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");

var URLSearchParamsPrototype = URLSearchParams.prototype;
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
  defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
    get: function size() {
      var count = 0;
      forEach(this, function () { count++; });
      return count;
    },
    configurable: true,
    enumerable: true
  });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.opened .popup-menu[data-v-2558d202] {\n@starting-style {\n        opacity: 0;\n        display: none;\n}\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght@8..144,-10..0,25..151,100..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Schoolbell&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght@8..144,-10..0,25..151,100..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Schoolbell&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* START VARIABLES */\n[data-v-2558d202]:root {\n  --font-weight: 400;\n  --font-width: 100;\n  --font-slant: 0;\n  --font-variation-settings:\n          \"slnt\" var(--font-slant),\n          \"wdth\" var(--font-width),\n          \"GRAD\" 0,\n          \"XTRA\" 468,\n          \"YOPQ\" 79,\n          \"YTAS\" 750,\n          \"YTDE\" -203,\n          \"YTFI\" 738,\n          \"YTLC\" 514,\n          \"YTUC\" 712;\n  font-size: 62.5%;\n  font-family: \"Roboto Flex\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: var(--font-weight);\n  font-style: normal;\n  font-variation-settings: var(--font-variation-settings);\n}\n[data-v-2558d202]:root {\n  --color-primary-1: hsl(32, 85%, 63%);\n  --color-primary-1-h: 32;\n  --color-primary-1-s: 85%;\n  --color-primary-1-l: 63%;\n  --color-mix-1-2-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-1-2-step-1-h: 33.25;\n  --color-mix-1-2-step-1-s: 83.75%;\n  --color-mix-1-2-step-1-l: 71.25%;\n  --color-mix-1-2-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-1-2-step-2-h: 34.5;\n  --color-mix-1-2-step-2-s: 82.5%;\n  --color-mix-1-2-step-2-l: 79.5%;\n  --color-mix-1-2-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-1-2-step-3-h: 35.75;\n  --color-mix-1-2-step-3-s: 81.25%;\n  --color-mix-1-2-step-3-l: 87.75%;\n  --color-mix-1-3-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-1-3-step-1-h: 33.25;\n  --color-mix-1-3-step-1-s: 75.5%;\n  --color-mix-1-3-step-1-l: 68.5%;\n  --color-mix-1-3-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-1-3-step-2-h: 34.5;\n  --color-mix-1-3-step-2-s: 66%;\n  --color-mix-1-3-step-2-l: 74%;\n  --color-mix-1-3-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-1-3-step-3-h: 35.75;\n  --color-mix-1-3-step-3-s: 56.5%;\n  --color-mix-1-3-step-3-l: 79.5%;\n  --color-mix-1-4-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-1-4-step-1-h: 46.25;\n  --color-mix-1-4-step-1-s: 74.25%;\n  --color-mix-1-4-step-1-l: 60%;\n  --color-mix-1-4-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-1-4-step-2-h: 60.5;\n  --color-mix-1-4-step-2-s: 63.5%;\n  --color-mix-1-4-step-2-l: 57%;\n  --color-mix-1-4-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-1-4-step-3-h: 74.75;\n  --color-mix-1-4-step-3-s: 52.75%;\n  --color-mix-1-4-step-3-l: 54%;\n  --color-mix-1-5-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-1-5-step-1-h: 56.5;\n  --color-mix-1-5-step-1-s: 65%;\n  --color-mix-1-5-step-1-l: 53.75%;\n  --color-mix-1-5-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-1-5-step-2-h: 81;\n  --color-mix-1-5-step-2-s: 45%;\n  --color-mix-1-5-step-2-l: 44.5%;\n  --color-mix-1-5-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-1-5-step-3-h: 105.5;\n  --color-mix-1-5-step-3-s: 25%;\n  --color-mix-1-5-step-3-l: 35.25%;\n  --color-mix-1-6-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-1-6-step-1-h: 32;\n  --color-mix-1-6-step-1-s: 21.25%;\n  --color-mix-1-6-step-1-l: 15.75%;\n  --color-mix-1-6-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-1-6-step-2-h: 32;\n  --color-mix-1-6-step-2-s: 42.5%;\n  --color-mix-1-6-step-2-l: 31.5%;\n  --color-mix-1-6-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-1-6-step-3-h: 32;\n  --color-mix-1-6-step-3-s: 63.75%;\n  --color-mix-1-6-step-3-l: 47.25%;\n  --color-mix-1-7-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-1-7-step-1-h: 32;\n  --color-mix-1-7-step-1-s: 21.25%;\n  --color-mix-1-7-step-1-l: 90.75%;\n  --color-mix-1-7-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-1-7-step-2-h: 32;\n  --color-mix-1-7-step-2-s: 42.5%;\n  --color-mix-1-7-step-2-l: 81.5%;\n  --color-mix-1-7-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-1-7-step-3-h: 32;\n  --color-mix-1-7-step-3-s: 63.75%;\n  --color-mix-1-7-step-3-l: 72.25%;\n  --color-primary-2: hsl(37, 80%, 96%);\n  --color-primary-2-h: 37;\n  --color-primary-2-s: 80%;\n  --color-primary-2-l: 96%;\n  --color-mix-2-1-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-2-1-step-1-h: 33.25;\n  --color-mix-2-1-step-1-s: 83.75%;\n  --color-mix-2-1-step-1-l: 71.25%;\n  --color-mix-2-1-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-2-1-step-2-h: 34.5;\n  --color-mix-2-1-step-2-s: 82.5%;\n  --color-mix-2-1-step-2-l: 79.5%;\n  --color-mix-2-1-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-2-1-step-3-h: 35.75;\n  --color-mix-2-1-step-3-s: 81.25%;\n  --color-mix-2-1-step-3-l: 87.75%;\n  --color-mix-2-3-step-1: hsl(37, 55.25%, 87.75%);\n  --color-mix-2-3-step-1-h: 37;\n  --color-mix-2-3-step-1-s: 55.25%;\n  --color-mix-2-3-step-1-l: 87.75%;\n  --color-mix-2-3-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-2-3-step-2-h: 37;\n  --color-mix-2-3-step-2-s: 63.5%;\n  --color-mix-2-3-step-2-l: 90.5%;\n  --color-mix-2-3-step-3: hsl(37, 71.75%, 93.25%);\n  --color-mix-2-3-step-3-h: 37;\n  --color-mix-2-3-step-3-s: 71.75%;\n  --color-mix-2-3-step-3-l: 93.25%;\n  --color-mix-2-4-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-2-4-step-1-h: 50;\n  --color-mix-2-4-step-1-s: 70.5%;\n  --color-mix-2-4-step-1-l: 84.75%;\n  --color-mix-2-4-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-2-4-step-2-h: 63;\n  --color-mix-2-4-step-2-s: 61%;\n  --color-mix-2-4-step-2-l: 73.5%;\n  --color-mix-2-4-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-2-4-step-3-h: 76;\n  --color-mix-2-4-step-3-s: 51.5%;\n  --color-mix-2-4-step-3-l: 62.25%;\n  --color-mix-2-5-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-2-5-step-1-h: 60.25;\n  --color-mix-2-5-step-1-s: 61.25%;\n  --color-mix-2-5-step-1-l: 78.5%;\n  --color-mix-2-5-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-2-5-step-2-h: 83.5;\n  --color-mix-2-5-step-2-s: 42.5%;\n  --color-mix-2-5-step-2-l: 61%;\n  --color-mix-2-5-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-2-5-step-3-h: 106.75;\n  --color-mix-2-5-step-3-s: 23.75%;\n  --color-mix-2-5-step-3-l: 43.5%;\n  --color-mix-2-6-step-1: hsl(37, 20%, 24%);\n  --color-mix-2-6-step-1-h: 37;\n  --color-mix-2-6-step-1-s: 20%;\n  --color-mix-2-6-step-1-l: 24%;\n  --color-mix-2-6-step-2: hsl(37, 40%, 48%);\n  --color-mix-2-6-step-2-h: 37;\n  --color-mix-2-6-step-2-s: 40%;\n  --color-mix-2-6-step-2-l: 48%;\n  --color-mix-2-6-step-3: hsl(37, 60%, 72%);\n  --color-mix-2-6-step-3-h: 37;\n  --color-mix-2-6-step-3-s: 60%;\n  --color-mix-2-6-step-3-l: 72%;\n  --color-mix-2-7-step-1: hsl(37, 20%, 99%);\n  --color-mix-2-7-step-1-h: 37;\n  --color-mix-2-7-step-1-s: 20%;\n  --color-mix-2-7-step-1-l: 99%;\n  --color-mix-2-7-step-2: hsl(37, 40%, 98%);\n  --color-mix-2-7-step-2-h: 37;\n  --color-mix-2-7-step-2-s: 40%;\n  --color-mix-2-7-step-2-l: 98%;\n  --color-mix-2-7-step-3: hsl(37, 60%, 97%);\n  --color-mix-2-7-step-3-h: 37;\n  --color-mix-2-7-step-3-s: 60%;\n  --color-mix-2-7-step-3-l: 97%;\n  --color-primary-3: hsl(37, 47%, 85%);\n  --color-primary-3-h: 37;\n  --color-primary-3-s: 47%;\n  --color-primary-3-l: 85%;\n  --color-mix-3-1-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-3-1-step-1-h: 33.25;\n  --color-mix-3-1-step-1-s: 75.5%;\n  --color-mix-3-1-step-1-l: 68.5%;\n  --color-mix-3-1-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-3-1-step-2-h: 34.5;\n  --color-mix-3-1-step-2-s: 66%;\n  --color-mix-3-1-step-2-l: 74%;\n  --color-mix-3-1-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-3-1-step-3-h: 35.75;\n  --color-mix-3-1-step-3-s: 56.5%;\n  --color-mix-3-1-step-3-l: 79.5%;\n  --color-mix-3-2-step-1: hsl(37, 71.75%, 93.25%);\n  --color-mix-3-2-step-1-h: 37;\n  --color-mix-3-2-step-1-s: 71.75%;\n  --color-mix-3-2-step-1-l: 93.25%;\n  --color-mix-3-2-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-3-2-step-2-h: 37;\n  --color-mix-3-2-step-2-s: 63.5%;\n  --color-mix-3-2-step-2-l: 90.5%;\n  --color-mix-3-2-step-3: hsl(37, 55.25%, 87.75%);\n  --color-mix-3-2-step-3-h: 37;\n  --color-mix-3-2-step-3-s: 55.25%;\n  --color-mix-3-2-step-3-l: 87.75%;\n  --color-mix-3-4-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-3-4-step-1-h: 50;\n  --color-mix-3-4-step-1-s: 45.75%;\n  --color-mix-3-4-step-1-l: 76.5%;\n  --color-mix-3-4-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-3-4-step-2-h: 63;\n  --color-mix-3-4-step-2-s: 44.5%;\n  --color-mix-3-4-step-2-l: 68%;\n  --color-mix-3-4-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-3-4-step-3-h: 76;\n  --color-mix-3-4-step-3-s: 43.25%;\n  --color-mix-3-4-step-3-l: 59.5%;\n  --color-mix-3-5-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-3-5-step-1-h: 60.25;\n  --color-mix-3-5-step-1-s: 36.5%;\n  --color-mix-3-5-step-1-l: 70.25%;\n  --color-mix-3-5-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-3-5-step-2-h: 83.5;\n  --color-mix-3-5-step-2-s: 26%;\n  --color-mix-3-5-step-2-l: 55.5%;\n  --color-mix-3-5-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-3-5-step-3-h: 106.75;\n  --color-mix-3-5-step-3-s: 15.5%;\n  --color-mix-3-5-step-3-l: 40.75%;\n  --color-mix-3-6-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-3-6-step-1-h: 37;\n  --color-mix-3-6-step-1-s: 11.75%;\n  --color-mix-3-6-step-1-l: 21.25%;\n  --color-mix-3-6-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-3-6-step-2-h: 37;\n  --color-mix-3-6-step-2-s: 23.5%;\n  --color-mix-3-6-step-2-l: 42.5%;\n  --color-mix-3-6-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-3-6-step-3-h: 37;\n  --color-mix-3-6-step-3-s: 35.25%;\n  --color-mix-3-6-step-3-l: 63.75%;\n  --color-mix-3-7-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-3-7-step-1-h: 37;\n  --color-mix-3-7-step-1-s: 11.75%;\n  --color-mix-3-7-step-1-l: 96.25%;\n  --color-mix-3-7-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-3-7-step-2-h: 37;\n  --color-mix-3-7-step-2-s: 23.5%;\n  --color-mix-3-7-step-2-l: 92.5%;\n  --color-mix-3-7-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-3-7-step-3-h: 37;\n  --color-mix-3-7-step-3-s: 35.25%;\n  --color-mix-3-7-step-3-l: 88.75%;\n  --color-primary-4: hsl(89, 42%, 51%);\n  --color-primary-4-h: 89;\n  --color-primary-4-s: 42%;\n  --color-primary-4-l: 51%;\n  --color-mix-4-1-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-4-1-step-1-h: 46.25;\n  --color-mix-4-1-step-1-s: 74.25%;\n  --color-mix-4-1-step-1-l: 60%;\n  --color-mix-4-1-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-4-1-step-2-h: 60.5;\n  --color-mix-4-1-step-2-s: 63.5%;\n  --color-mix-4-1-step-2-l: 57%;\n  --color-mix-4-1-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-4-1-step-3-h: 74.75;\n  --color-mix-4-1-step-3-s: 52.75%;\n  --color-mix-4-1-step-3-l: 54%;\n  --color-mix-4-2-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-4-2-step-1-h: 50;\n  --color-mix-4-2-step-1-s: 70.5%;\n  --color-mix-4-2-step-1-l: 84.75%;\n  --color-mix-4-2-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-4-2-step-2-h: 63;\n  --color-mix-4-2-step-2-s: 61%;\n  --color-mix-4-2-step-2-l: 73.5%;\n  --color-mix-4-2-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-4-2-step-3-h: 76;\n  --color-mix-4-2-step-3-s: 51.5%;\n  --color-mix-4-2-step-3-l: 62.25%;\n  --color-mix-4-3-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-4-3-step-1-h: 50;\n  --color-mix-4-3-step-1-s: 45.75%;\n  --color-mix-4-3-step-1-l: 76.5%;\n  --color-mix-4-3-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-4-3-step-2-h: 63;\n  --color-mix-4-3-step-2-s: 44.5%;\n  --color-mix-4-3-step-2-l: 68%;\n  --color-mix-4-3-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-4-3-step-3-h: 76;\n  --color-mix-4-3-step-3-s: 43.25%;\n  --color-mix-4-3-step-3-l: 59.5%;\n  --color-mix-4-5-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-4-5-step-1-h: 99.25;\n  --color-mix-4-5-step-1-s: 32.75%;\n  --color-mix-4-5-step-1-l: 44.75%;\n  --color-mix-4-5-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-4-5-step-2-h: 109.5;\n  --color-mix-4-5-step-2-s: 23.5%;\n  --color-mix-4-5-step-2-l: 38.5%;\n  --color-mix-4-5-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-4-5-step-3-h: 119.75;\n  --color-mix-4-5-step-3-s: 14.25%;\n  --color-mix-4-5-step-3-l: 32.25%;\n  --color-mix-4-6-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-4-6-step-1-h: 89;\n  --color-mix-4-6-step-1-s: 10.5%;\n  --color-mix-4-6-step-1-l: 12.75%;\n  --color-mix-4-6-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-4-6-step-2-h: 89;\n  --color-mix-4-6-step-2-s: 21%;\n  --color-mix-4-6-step-2-l: 25.5%;\n  --color-mix-4-6-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-4-6-step-3-h: 89;\n  --color-mix-4-6-step-3-s: 31.5%;\n  --color-mix-4-6-step-3-l: 38.25%;\n  --color-mix-4-7-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-4-7-step-1-h: 89;\n  --color-mix-4-7-step-1-s: 10.5%;\n  --color-mix-4-7-step-1-l: 87.75%;\n  --color-mix-4-7-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-4-7-step-2-h: 89;\n  --color-mix-4-7-step-2-s: 21%;\n  --color-mix-4-7-step-2-l: 75.5%;\n  --color-mix-4-7-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-4-7-step-3-h: 89;\n  --color-mix-4-7-step-3-s: 31.5%;\n  --color-mix-4-7-step-3-l: 63.25%;\n  --color-primary-5: hsl(130, 5%, 26%);\n  --color-primary-5-h: 130;\n  --color-primary-5-s: 5%;\n  --color-primary-5-l: 26%;\n  --color-mix-5-1-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-5-1-step-1-h: 56.5;\n  --color-mix-5-1-step-1-s: 65%;\n  --color-mix-5-1-step-1-l: 53.75%;\n  --color-mix-5-1-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-5-1-step-2-h: 81;\n  --color-mix-5-1-step-2-s: 45%;\n  --color-mix-5-1-step-2-l: 44.5%;\n  --color-mix-5-1-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-5-1-step-3-h: 105.5;\n  --color-mix-5-1-step-3-s: 25%;\n  --color-mix-5-1-step-3-l: 35.25%;\n  --color-mix-5-2-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-5-2-step-1-h: 60.25;\n  --color-mix-5-2-step-1-s: 61.25%;\n  --color-mix-5-2-step-1-l: 78.5%;\n  --color-mix-5-2-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-5-2-step-2-h: 83.5;\n  --color-mix-5-2-step-2-s: 42.5%;\n  --color-mix-5-2-step-2-l: 61%;\n  --color-mix-5-2-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-5-2-step-3-h: 106.75;\n  --color-mix-5-2-step-3-s: 23.75%;\n  --color-mix-5-2-step-3-l: 43.5%;\n  --color-mix-5-3-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-5-3-step-1-h: 60.25;\n  --color-mix-5-3-step-1-s: 36.5%;\n  --color-mix-5-3-step-1-l: 70.25%;\n  --color-mix-5-3-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-5-3-step-2-h: 83.5;\n  --color-mix-5-3-step-2-s: 26%;\n  --color-mix-5-3-step-2-l: 55.5%;\n  --color-mix-5-3-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-5-3-step-3-h: 106.75;\n  --color-mix-5-3-step-3-s: 15.5%;\n  --color-mix-5-3-step-3-l: 40.75%;\n  --color-mix-5-4-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-5-4-step-1-h: 99.25;\n  --color-mix-5-4-step-1-s: 32.75%;\n  --color-mix-5-4-step-1-l: 44.75%;\n  --color-mix-5-4-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-5-4-step-2-h: 109.5;\n  --color-mix-5-4-step-2-s: 23.5%;\n  --color-mix-5-4-step-2-l: 38.5%;\n  --color-mix-5-4-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-5-4-step-3-h: 119.75;\n  --color-mix-5-4-step-3-s: 14.25%;\n  --color-mix-5-4-step-3-l: 32.25%;\n  --color-mix-5-6-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-5-6-step-1-h: 130;\n  --color-mix-5-6-step-1-s: 1.25%;\n  --color-mix-5-6-step-1-l: 6.5%;\n  --color-mix-5-6-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-5-6-step-2-h: 130;\n  --color-mix-5-6-step-2-s: 2.5%;\n  --color-mix-5-6-step-2-l: 13%;\n  --color-mix-5-6-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-5-6-step-3-h: 130;\n  --color-mix-5-6-step-3-s: 3.75%;\n  --color-mix-5-6-step-3-l: 19.5%;\n  --color-mix-5-7-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-5-7-step-1-h: 130;\n  --color-mix-5-7-step-1-s: 1.25%;\n  --color-mix-5-7-step-1-l: 81.5%;\n  --color-mix-5-7-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-5-7-step-2-h: 130;\n  --color-mix-5-7-step-2-s: 2.5%;\n  --color-mix-5-7-step-2-l: 63%;\n  --color-mix-5-7-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-5-7-step-3-h: 130;\n  --color-mix-5-7-step-3-s: 3.75%;\n  --color-mix-5-7-step-3-l: 44.5%;\n  --color-primary-6: hsl(0, 0%, 0%);\n  --color-primary-6-h: 0;\n  --color-primary-6-s: 0%;\n  --color-primary-6-l: 0%;\n  --color-mix-6-1-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-6-1-step-1-h: 32;\n  --color-mix-6-1-step-1-s: 21.25%;\n  --color-mix-6-1-step-1-l: 15.75%;\n  --color-mix-6-1-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-6-1-step-2-h: 32;\n  --color-mix-6-1-step-2-s: 42.5%;\n  --color-mix-6-1-step-2-l: 31.5%;\n  --color-mix-6-1-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-6-1-step-3-h: 32;\n  --color-mix-6-1-step-3-s: 63.75%;\n  --color-mix-6-1-step-3-l: 47.25%;\n  --color-mix-6-2-step-1: hsl(37, 20%, 24%);\n  --color-mix-6-2-step-1-h: 37;\n  --color-mix-6-2-step-1-s: 20%;\n  --color-mix-6-2-step-1-l: 24%;\n  --color-mix-6-2-step-2: hsl(37, 40%, 48%);\n  --color-mix-6-2-step-2-h: 37;\n  --color-mix-6-2-step-2-s: 40%;\n  --color-mix-6-2-step-2-l: 48%;\n  --color-mix-6-2-step-3: hsl(37, 60%, 72%);\n  --color-mix-6-2-step-3-h: 37;\n  --color-mix-6-2-step-3-s: 60%;\n  --color-mix-6-2-step-3-l: 72%;\n  --color-mix-6-3-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-6-3-step-1-h: 37;\n  --color-mix-6-3-step-1-s: 11.75%;\n  --color-mix-6-3-step-1-l: 21.25%;\n  --color-mix-6-3-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-6-3-step-2-h: 37;\n  --color-mix-6-3-step-2-s: 23.5%;\n  --color-mix-6-3-step-2-l: 42.5%;\n  --color-mix-6-3-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-6-3-step-3-h: 37;\n  --color-mix-6-3-step-3-s: 35.25%;\n  --color-mix-6-3-step-3-l: 63.75%;\n  --color-mix-6-4-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-6-4-step-1-h: 89;\n  --color-mix-6-4-step-1-s: 10.5%;\n  --color-mix-6-4-step-1-l: 12.75%;\n  --color-mix-6-4-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-6-4-step-2-h: 89;\n  --color-mix-6-4-step-2-s: 21%;\n  --color-mix-6-4-step-2-l: 25.5%;\n  --color-mix-6-4-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-6-4-step-3-h: 89;\n  --color-mix-6-4-step-3-s: 31.5%;\n  --color-mix-6-4-step-3-l: 38.25%;\n  --color-mix-6-5-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-6-5-step-1-h: 130;\n  --color-mix-6-5-step-1-s: 1.25%;\n  --color-mix-6-5-step-1-l: 6.5%;\n  --color-mix-6-5-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-6-5-step-2-h: 130;\n  --color-mix-6-5-step-2-s: 2.5%;\n  --color-mix-6-5-step-2-l: 13%;\n  --color-mix-6-5-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-6-5-step-3-h: 130;\n  --color-mix-6-5-step-3-s: 3.75%;\n  --color-mix-6-5-step-3-l: 19.5%;\n  --color-mix-6-7-step-1: hsl(0, 0%, 75%);\n  --color-mix-6-7-step-1-h: 0;\n  --color-mix-6-7-step-1-s: 0%;\n  --color-mix-6-7-step-1-l: 75%;\n  --color-mix-6-7-step-2: hsl(0, 0%, 50%);\n  --color-mix-6-7-step-2-h: 0;\n  --color-mix-6-7-step-2-s: 0%;\n  --color-mix-6-7-step-2-l: 50%;\n  --color-mix-6-7-step-3: hsl(0, 0%, 25%);\n  --color-mix-6-7-step-3-h: 0;\n  --color-mix-6-7-step-3-s: 0%;\n  --color-mix-6-7-step-3-l: 25%;\n  --color-primary-7: hsl(0, 0%, 100%);\n  --color-primary-7-h: 0;\n  --color-primary-7-s: 0%;\n  --color-primary-7-l: 100%;\n  --color-mix-7-1-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-7-1-step-1-h: 32;\n  --color-mix-7-1-step-1-s: 21.25%;\n  --color-mix-7-1-step-1-l: 90.75%;\n  --color-mix-7-1-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-7-1-step-2-h: 32;\n  --color-mix-7-1-step-2-s: 42.5%;\n  --color-mix-7-1-step-2-l: 81.5%;\n  --color-mix-7-1-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-7-1-step-3-h: 32;\n  --color-mix-7-1-step-3-s: 63.75%;\n  --color-mix-7-1-step-3-l: 72.25%;\n  --color-mix-7-2-step-1: hsl(37, 20%, 99%);\n  --color-mix-7-2-step-1-h: 37;\n  --color-mix-7-2-step-1-s: 20%;\n  --color-mix-7-2-step-1-l: 99%;\n  --color-mix-7-2-step-2: hsl(37, 40%, 98%);\n  --color-mix-7-2-step-2-h: 37;\n  --color-mix-7-2-step-2-s: 40%;\n  --color-mix-7-2-step-2-l: 98%;\n  --color-mix-7-2-step-3: hsl(37, 60%, 97%);\n  --color-mix-7-2-step-3-h: 37;\n  --color-mix-7-2-step-3-s: 60%;\n  --color-mix-7-2-step-3-l: 97%;\n  --color-mix-7-3-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-7-3-step-1-h: 37;\n  --color-mix-7-3-step-1-s: 11.75%;\n  --color-mix-7-3-step-1-l: 96.25%;\n  --color-mix-7-3-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-7-3-step-2-h: 37;\n  --color-mix-7-3-step-2-s: 23.5%;\n  --color-mix-7-3-step-2-l: 92.5%;\n  --color-mix-7-3-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-7-3-step-3-h: 37;\n  --color-mix-7-3-step-3-s: 35.25%;\n  --color-mix-7-3-step-3-l: 88.75%;\n  --color-mix-7-4-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-7-4-step-1-h: 89;\n  --color-mix-7-4-step-1-s: 10.5%;\n  --color-mix-7-4-step-1-l: 87.75%;\n  --color-mix-7-4-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-7-4-step-2-h: 89;\n  --color-mix-7-4-step-2-s: 21%;\n  --color-mix-7-4-step-2-l: 75.5%;\n  --color-mix-7-4-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-7-4-step-3-h: 89;\n  --color-mix-7-4-step-3-s: 31.5%;\n  --color-mix-7-4-step-3-l: 63.25%;\n  --color-mix-7-5-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-7-5-step-1-h: 130;\n  --color-mix-7-5-step-1-s: 1.25%;\n  --color-mix-7-5-step-1-l: 81.5%;\n  --color-mix-7-5-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-7-5-step-2-h: 130;\n  --color-mix-7-5-step-2-s: 2.5%;\n  --color-mix-7-5-step-2-l: 63%;\n  --color-mix-7-5-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-7-5-step-3-h: 130;\n  --color-mix-7-5-step-3-s: 3.75%;\n  --color-mix-7-5-step-3-l: 44.5%;\n  --color-mix-7-6-step-1: hsl(0, 0%, 25%);\n  --color-mix-7-6-step-1-h: 0;\n  --color-mix-7-6-step-1-s: 0%;\n  --color-mix-7-6-step-1-l: 25%;\n  --color-mix-7-6-step-2: hsl(0, 0%, 50%);\n  --color-mix-7-6-step-2-h: 0;\n  --color-mix-7-6-step-2-s: 0%;\n  --color-mix-7-6-step-2-l: 50%;\n  --color-mix-7-6-step-3: hsl(0, 0%, 75%);\n  --color-mix-7-6-step-3-h: 0;\n  --color-mix-7-6-step-3-s: 0%;\n  --color-mix-7-6-step-3-l: 75%;\n  --color-primary-8: hsl(46, 70%, 64%);\n  --color-primary-8-h: 46;\n  --color-primary-8-s: 70%;\n  --color-primary-8-l: 64%;\n}\n[data-theme-color=light][data-v-2558d202] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(36, 14%, 79%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-7-h),\n                  0%,\n                  var(--color-primary-7-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-5);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-5);\n  --color-background-page-1: var(--color-primary-7);\n  --color-background-page-2: var(--color-mix-7-3-step-1);\n  --color-background-page-3: var(--color-primary-7);\n  --color-text-normal: var(--color-mix-7-6-step-1);\n  --color-text-normal-reversed: var(--color-primary-2);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-5-7-step-3);\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-text-highlight: var(--color-primary-2);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=light] input[data-v-2558d202] {\n  color-scheme: light;\n}\n[data-theme-color=light][data-theme-type=line][data-v-2558d202] {\n  --color-background-base: var(--color-primary-7);\n}\n[data-theme-color=light][data-theme-type=block][data-v-2558d202] {\n  --color-background-base: var(--color-mix-2-3-step-3);\n}\n[data-theme-color=dark][data-v-2558d202] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(138, 8%, 49%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-base: var(--color-mix-6-5-step-2);\n  --color-background-lighter: var(--color-primary-5);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-2-h),\n                  0%,\n                  var(--color-primary-2-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-2);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-2);\n  --color-background-page-1: var(--color-mix-6-5-step-2);\n  --color-background-page-2: var(--color-mix-7-6-step-1);\n  --color-background-page-3: var(--color-mix-5-6-step-3);\n  --color-text-normal: var(--color-primary-2);\n  --color-text-normal-reversed: var(--color-primary-5);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-6-7-step-2);\n  --color-text-highlight: var(--color-primary-5);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=dark] input[data-v-2558d202] {\n  color-scheme: dark;\n}\n\n/* END VARIABLES */\n/*============================================================================\n  line-height: line-height(28, 18)\n  Expected arguments are px values and unitless.\n\n  Make each line the desired height(1st arg) base on the current font size(2nd arg)\n==============================================================================*/\n/* START VARIABLES */\n[data-v-2558d202]:root {\n  --font-weight: 400;\n  --font-width: 100;\n  --font-slant: 0;\n  --font-variation-settings:\n          \"slnt\" var(--font-slant),\n          \"wdth\" var(--font-width),\n          \"GRAD\" 0,\n          \"XTRA\" 468,\n          \"YOPQ\" 79,\n          \"YTAS\" 750,\n          \"YTDE\" -203,\n          \"YTFI\" 738,\n          \"YTLC\" 514,\n          \"YTUC\" 712;\n  font-size: 62.5%;\n  font-family: \"Roboto Flex\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: var(--font-weight);\n  font-style: normal;\n  font-variation-settings: var(--font-variation-settings);\n}\n[data-v-2558d202]:root {\n  --color-primary-1: hsl(32, 85%, 63%);\n  --color-primary-1-h: 32;\n  --color-primary-1-s: 85%;\n  --color-primary-1-l: 63%;\n  --color-mix-1-2-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-1-2-step-1-h: 33.25;\n  --color-mix-1-2-step-1-s: 83.75%;\n  --color-mix-1-2-step-1-l: 71.25%;\n  --color-mix-1-2-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-1-2-step-2-h: 34.5;\n  --color-mix-1-2-step-2-s: 82.5%;\n  --color-mix-1-2-step-2-l: 79.5%;\n  --color-mix-1-2-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-1-2-step-3-h: 35.75;\n  --color-mix-1-2-step-3-s: 81.25%;\n  --color-mix-1-2-step-3-l: 87.75%;\n  --color-mix-1-3-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-1-3-step-1-h: 33.25;\n  --color-mix-1-3-step-1-s: 75.5%;\n  --color-mix-1-3-step-1-l: 68.5%;\n  --color-mix-1-3-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-1-3-step-2-h: 34.5;\n  --color-mix-1-3-step-2-s: 66%;\n  --color-mix-1-3-step-2-l: 74%;\n  --color-mix-1-3-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-1-3-step-3-h: 35.75;\n  --color-mix-1-3-step-3-s: 56.5%;\n  --color-mix-1-3-step-3-l: 79.5%;\n  --color-mix-1-4-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-1-4-step-1-h: 46.25;\n  --color-mix-1-4-step-1-s: 74.25%;\n  --color-mix-1-4-step-1-l: 60%;\n  --color-mix-1-4-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-1-4-step-2-h: 60.5;\n  --color-mix-1-4-step-2-s: 63.5%;\n  --color-mix-1-4-step-2-l: 57%;\n  --color-mix-1-4-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-1-4-step-3-h: 74.75;\n  --color-mix-1-4-step-3-s: 52.75%;\n  --color-mix-1-4-step-3-l: 54%;\n  --color-mix-1-5-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-1-5-step-1-h: 56.5;\n  --color-mix-1-5-step-1-s: 65%;\n  --color-mix-1-5-step-1-l: 53.75%;\n  --color-mix-1-5-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-1-5-step-2-h: 81;\n  --color-mix-1-5-step-2-s: 45%;\n  --color-mix-1-5-step-2-l: 44.5%;\n  --color-mix-1-5-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-1-5-step-3-h: 105.5;\n  --color-mix-1-5-step-3-s: 25%;\n  --color-mix-1-5-step-3-l: 35.25%;\n  --color-mix-1-6-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-1-6-step-1-h: 32;\n  --color-mix-1-6-step-1-s: 21.25%;\n  --color-mix-1-6-step-1-l: 15.75%;\n  --color-mix-1-6-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-1-6-step-2-h: 32;\n  --color-mix-1-6-step-2-s: 42.5%;\n  --color-mix-1-6-step-2-l: 31.5%;\n  --color-mix-1-6-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-1-6-step-3-h: 32;\n  --color-mix-1-6-step-3-s: 63.75%;\n  --color-mix-1-6-step-3-l: 47.25%;\n  --color-mix-1-7-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-1-7-step-1-h: 32;\n  --color-mix-1-7-step-1-s: 21.25%;\n  --color-mix-1-7-step-1-l: 90.75%;\n  --color-mix-1-7-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-1-7-step-2-h: 32;\n  --color-mix-1-7-step-2-s: 42.5%;\n  --color-mix-1-7-step-2-l: 81.5%;\n  --color-mix-1-7-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-1-7-step-3-h: 32;\n  --color-mix-1-7-step-3-s: 63.75%;\n  --color-mix-1-7-step-3-l: 72.25%;\n  --color-primary-2: hsl(37, 80%, 96%);\n  --color-primary-2-h: 37;\n  --color-primary-2-s: 80%;\n  --color-primary-2-l: 96%;\n  --color-mix-2-1-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-2-1-step-1-h: 33.25;\n  --color-mix-2-1-step-1-s: 83.75%;\n  --color-mix-2-1-step-1-l: 71.25%;\n  --color-mix-2-1-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-2-1-step-2-h: 34.5;\n  --color-mix-2-1-step-2-s: 82.5%;\n  --color-mix-2-1-step-2-l: 79.5%;\n  --color-mix-2-1-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-2-1-step-3-h: 35.75;\n  --color-mix-2-1-step-3-s: 81.25%;\n  --color-mix-2-1-step-3-l: 87.75%;\n  --color-mix-2-3-step-1: hsl(37, 55.25%, 87.75%);\n  --color-mix-2-3-step-1-h: 37;\n  --color-mix-2-3-step-1-s: 55.25%;\n  --color-mix-2-3-step-1-l: 87.75%;\n  --color-mix-2-3-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-2-3-step-2-h: 37;\n  --color-mix-2-3-step-2-s: 63.5%;\n  --color-mix-2-3-step-2-l: 90.5%;\n  --color-mix-2-3-step-3: hsl(37, 71.75%, 93.25%);\n  --color-mix-2-3-step-3-h: 37;\n  --color-mix-2-3-step-3-s: 71.75%;\n  --color-mix-2-3-step-3-l: 93.25%;\n  --color-mix-2-4-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-2-4-step-1-h: 50;\n  --color-mix-2-4-step-1-s: 70.5%;\n  --color-mix-2-4-step-1-l: 84.75%;\n  --color-mix-2-4-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-2-4-step-2-h: 63;\n  --color-mix-2-4-step-2-s: 61%;\n  --color-mix-2-4-step-2-l: 73.5%;\n  --color-mix-2-4-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-2-4-step-3-h: 76;\n  --color-mix-2-4-step-3-s: 51.5%;\n  --color-mix-2-4-step-3-l: 62.25%;\n  --color-mix-2-5-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-2-5-step-1-h: 60.25;\n  --color-mix-2-5-step-1-s: 61.25%;\n  --color-mix-2-5-step-1-l: 78.5%;\n  --color-mix-2-5-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-2-5-step-2-h: 83.5;\n  --color-mix-2-5-step-2-s: 42.5%;\n  --color-mix-2-5-step-2-l: 61%;\n  --color-mix-2-5-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-2-5-step-3-h: 106.75;\n  --color-mix-2-5-step-3-s: 23.75%;\n  --color-mix-2-5-step-3-l: 43.5%;\n  --color-mix-2-6-step-1: hsl(37, 20%, 24%);\n  --color-mix-2-6-step-1-h: 37;\n  --color-mix-2-6-step-1-s: 20%;\n  --color-mix-2-6-step-1-l: 24%;\n  --color-mix-2-6-step-2: hsl(37, 40%, 48%);\n  --color-mix-2-6-step-2-h: 37;\n  --color-mix-2-6-step-2-s: 40%;\n  --color-mix-2-6-step-2-l: 48%;\n  --color-mix-2-6-step-3: hsl(37, 60%, 72%);\n  --color-mix-2-6-step-3-h: 37;\n  --color-mix-2-6-step-3-s: 60%;\n  --color-mix-2-6-step-3-l: 72%;\n  --color-mix-2-7-step-1: hsl(37, 20%, 99%);\n  --color-mix-2-7-step-1-h: 37;\n  --color-mix-2-7-step-1-s: 20%;\n  --color-mix-2-7-step-1-l: 99%;\n  --color-mix-2-7-step-2: hsl(37, 40%, 98%);\n  --color-mix-2-7-step-2-h: 37;\n  --color-mix-2-7-step-2-s: 40%;\n  --color-mix-2-7-step-2-l: 98%;\n  --color-mix-2-7-step-3: hsl(37, 60%, 97%);\n  --color-mix-2-7-step-3-h: 37;\n  --color-mix-2-7-step-3-s: 60%;\n  --color-mix-2-7-step-3-l: 97%;\n  --color-primary-3: hsl(37, 47%, 85%);\n  --color-primary-3-h: 37;\n  --color-primary-3-s: 47%;\n  --color-primary-3-l: 85%;\n  --color-mix-3-1-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-3-1-step-1-h: 33.25;\n  --color-mix-3-1-step-1-s: 75.5%;\n  --color-mix-3-1-step-1-l: 68.5%;\n  --color-mix-3-1-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-3-1-step-2-h: 34.5;\n  --color-mix-3-1-step-2-s: 66%;\n  --color-mix-3-1-step-2-l: 74%;\n  --color-mix-3-1-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-3-1-step-3-h: 35.75;\n  --color-mix-3-1-step-3-s: 56.5%;\n  --color-mix-3-1-step-3-l: 79.5%;\n  --color-mix-3-2-step-1: hsl(37, 71.75%, 93.25%);\n  --color-mix-3-2-step-1-h: 37;\n  --color-mix-3-2-step-1-s: 71.75%;\n  --color-mix-3-2-step-1-l: 93.25%;\n  --color-mix-3-2-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-3-2-step-2-h: 37;\n  --color-mix-3-2-step-2-s: 63.5%;\n  --color-mix-3-2-step-2-l: 90.5%;\n  --color-mix-3-2-step-3: hsl(37, 55.25%, 87.75%);\n  --color-mix-3-2-step-3-h: 37;\n  --color-mix-3-2-step-3-s: 55.25%;\n  --color-mix-3-2-step-3-l: 87.75%;\n  --color-mix-3-4-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-3-4-step-1-h: 50;\n  --color-mix-3-4-step-1-s: 45.75%;\n  --color-mix-3-4-step-1-l: 76.5%;\n  --color-mix-3-4-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-3-4-step-2-h: 63;\n  --color-mix-3-4-step-2-s: 44.5%;\n  --color-mix-3-4-step-2-l: 68%;\n  --color-mix-3-4-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-3-4-step-3-h: 76;\n  --color-mix-3-4-step-3-s: 43.25%;\n  --color-mix-3-4-step-3-l: 59.5%;\n  --color-mix-3-5-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-3-5-step-1-h: 60.25;\n  --color-mix-3-5-step-1-s: 36.5%;\n  --color-mix-3-5-step-1-l: 70.25%;\n  --color-mix-3-5-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-3-5-step-2-h: 83.5;\n  --color-mix-3-5-step-2-s: 26%;\n  --color-mix-3-5-step-2-l: 55.5%;\n  --color-mix-3-5-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-3-5-step-3-h: 106.75;\n  --color-mix-3-5-step-3-s: 15.5%;\n  --color-mix-3-5-step-3-l: 40.75%;\n  --color-mix-3-6-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-3-6-step-1-h: 37;\n  --color-mix-3-6-step-1-s: 11.75%;\n  --color-mix-3-6-step-1-l: 21.25%;\n  --color-mix-3-6-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-3-6-step-2-h: 37;\n  --color-mix-3-6-step-2-s: 23.5%;\n  --color-mix-3-6-step-2-l: 42.5%;\n  --color-mix-3-6-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-3-6-step-3-h: 37;\n  --color-mix-3-6-step-3-s: 35.25%;\n  --color-mix-3-6-step-3-l: 63.75%;\n  --color-mix-3-7-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-3-7-step-1-h: 37;\n  --color-mix-3-7-step-1-s: 11.75%;\n  --color-mix-3-7-step-1-l: 96.25%;\n  --color-mix-3-7-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-3-7-step-2-h: 37;\n  --color-mix-3-7-step-2-s: 23.5%;\n  --color-mix-3-7-step-2-l: 92.5%;\n  --color-mix-3-7-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-3-7-step-3-h: 37;\n  --color-mix-3-7-step-3-s: 35.25%;\n  --color-mix-3-7-step-3-l: 88.75%;\n  --color-primary-4: hsl(89, 42%, 51%);\n  --color-primary-4-h: 89;\n  --color-primary-4-s: 42%;\n  --color-primary-4-l: 51%;\n  --color-mix-4-1-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-4-1-step-1-h: 46.25;\n  --color-mix-4-1-step-1-s: 74.25%;\n  --color-mix-4-1-step-1-l: 60%;\n  --color-mix-4-1-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-4-1-step-2-h: 60.5;\n  --color-mix-4-1-step-2-s: 63.5%;\n  --color-mix-4-1-step-2-l: 57%;\n  --color-mix-4-1-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-4-1-step-3-h: 74.75;\n  --color-mix-4-1-step-3-s: 52.75%;\n  --color-mix-4-1-step-3-l: 54%;\n  --color-mix-4-2-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-4-2-step-1-h: 50;\n  --color-mix-4-2-step-1-s: 70.5%;\n  --color-mix-4-2-step-1-l: 84.75%;\n  --color-mix-4-2-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-4-2-step-2-h: 63;\n  --color-mix-4-2-step-2-s: 61%;\n  --color-mix-4-2-step-2-l: 73.5%;\n  --color-mix-4-2-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-4-2-step-3-h: 76;\n  --color-mix-4-2-step-3-s: 51.5%;\n  --color-mix-4-2-step-3-l: 62.25%;\n  --color-mix-4-3-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-4-3-step-1-h: 50;\n  --color-mix-4-3-step-1-s: 45.75%;\n  --color-mix-4-3-step-1-l: 76.5%;\n  --color-mix-4-3-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-4-3-step-2-h: 63;\n  --color-mix-4-3-step-2-s: 44.5%;\n  --color-mix-4-3-step-2-l: 68%;\n  --color-mix-4-3-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-4-3-step-3-h: 76;\n  --color-mix-4-3-step-3-s: 43.25%;\n  --color-mix-4-3-step-3-l: 59.5%;\n  --color-mix-4-5-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-4-5-step-1-h: 99.25;\n  --color-mix-4-5-step-1-s: 32.75%;\n  --color-mix-4-5-step-1-l: 44.75%;\n  --color-mix-4-5-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-4-5-step-2-h: 109.5;\n  --color-mix-4-5-step-2-s: 23.5%;\n  --color-mix-4-5-step-2-l: 38.5%;\n  --color-mix-4-5-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-4-5-step-3-h: 119.75;\n  --color-mix-4-5-step-3-s: 14.25%;\n  --color-mix-4-5-step-3-l: 32.25%;\n  --color-mix-4-6-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-4-6-step-1-h: 89;\n  --color-mix-4-6-step-1-s: 10.5%;\n  --color-mix-4-6-step-1-l: 12.75%;\n  --color-mix-4-6-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-4-6-step-2-h: 89;\n  --color-mix-4-6-step-2-s: 21%;\n  --color-mix-4-6-step-2-l: 25.5%;\n  --color-mix-4-6-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-4-6-step-3-h: 89;\n  --color-mix-4-6-step-3-s: 31.5%;\n  --color-mix-4-6-step-3-l: 38.25%;\n  --color-mix-4-7-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-4-7-step-1-h: 89;\n  --color-mix-4-7-step-1-s: 10.5%;\n  --color-mix-4-7-step-1-l: 87.75%;\n  --color-mix-4-7-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-4-7-step-2-h: 89;\n  --color-mix-4-7-step-2-s: 21%;\n  --color-mix-4-7-step-2-l: 75.5%;\n  --color-mix-4-7-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-4-7-step-3-h: 89;\n  --color-mix-4-7-step-3-s: 31.5%;\n  --color-mix-4-7-step-3-l: 63.25%;\n  --color-primary-5: hsl(130, 5%, 26%);\n  --color-primary-5-h: 130;\n  --color-primary-5-s: 5%;\n  --color-primary-5-l: 26%;\n  --color-mix-5-1-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-5-1-step-1-h: 56.5;\n  --color-mix-5-1-step-1-s: 65%;\n  --color-mix-5-1-step-1-l: 53.75%;\n  --color-mix-5-1-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-5-1-step-2-h: 81;\n  --color-mix-5-1-step-2-s: 45%;\n  --color-mix-5-1-step-2-l: 44.5%;\n  --color-mix-5-1-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-5-1-step-3-h: 105.5;\n  --color-mix-5-1-step-3-s: 25%;\n  --color-mix-5-1-step-3-l: 35.25%;\n  --color-mix-5-2-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-5-2-step-1-h: 60.25;\n  --color-mix-5-2-step-1-s: 61.25%;\n  --color-mix-5-2-step-1-l: 78.5%;\n  --color-mix-5-2-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-5-2-step-2-h: 83.5;\n  --color-mix-5-2-step-2-s: 42.5%;\n  --color-mix-5-2-step-2-l: 61%;\n  --color-mix-5-2-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-5-2-step-3-h: 106.75;\n  --color-mix-5-2-step-3-s: 23.75%;\n  --color-mix-5-2-step-3-l: 43.5%;\n  --color-mix-5-3-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-5-3-step-1-h: 60.25;\n  --color-mix-5-3-step-1-s: 36.5%;\n  --color-mix-5-3-step-1-l: 70.25%;\n  --color-mix-5-3-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-5-3-step-2-h: 83.5;\n  --color-mix-5-3-step-2-s: 26%;\n  --color-mix-5-3-step-2-l: 55.5%;\n  --color-mix-5-3-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-5-3-step-3-h: 106.75;\n  --color-mix-5-3-step-3-s: 15.5%;\n  --color-mix-5-3-step-3-l: 40.75%;\n  --color-mix-5-4-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-5-4-step-1-h: 99.25;\n  --color-mix-5-4-step-1-s: 32.75%;\n  --color-mix-5-4-step-1-l: 44.75%;\n  --color-mix-5-4-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-5-4-step-2-h: 109.5;\n  --color-mix-5-4-step-2-s: 23.5%;\n  --color-mix-5-4-step-2-l: 38.5%;\n  --color-mix-5-4-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-5-4-step-3-h: 119.75;\n  --color-mix-5-4-step-3-s: 14.25%;\n  --color-mix-5-4-step-3-l: 32.25%;\n  --color-mix-5-6-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-5-6-step-1-h: 130;\n  --color-mix-5-6-step-1-s: 1.25%;\n  --color-mix-5-6-step-1-l: 6.5%;\n  --color-mix-5-6-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-5-6-step-2-h: 130;\n  --color-mix-5-6-step-2-s: 2.5%;\n  --color-mix-5-6-step-2-l: 13%;\n  --color-mix-5-6-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-5-6-step-3-h: 130;\n  --color-mix-5-6-step-3-s: 3.75%;\n  --color-mix-5-6-step-3-l: 19.5%;\n  --color-mix-5-7-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-5-7-step-1-h: 130;\n  --color-mix-5-7-step-1-s: 1.25%;\n  --color-mix-5-7-step-1-l: 81.5%;\n  --color-mix-5-7-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-5-7-step-2-h: 130;\n  --color-mix-5-7-step-2-s: 2.5%;\n  --color-mix-5-7-step-2-l: 63%;\n  --color-mix-5-7-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-5-7-step-3-h: 130;\n  --color-mix-5-7-step-3-s: 3.75%;\n  --color-mix-5-7-step-3-l: 44.5%;\n  --color-primary-6: hsl(0, 0%, 0%);\n  --color-primary-6-h: 0;\n  --color-primary-6-s: 0%;\n  --color-primary-6-l: 0%;\n  --color-mix-6-1-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-6-1-step-1-h: 32;\n  --color-mix-6-1-step-1-s: 21.25%;\n  --color-mix-6-1-step-1-l: 15.75%;\n  --color-mix-6-1-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-6-1-step-2-h: 32;\n  --color-mix-6-1-step-2-s: 42.5%;\n  --color-mix-6-1-step-2-l: 31.5%;\n  --color-mix-6-1-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-6-1-step-3-h: 32;\n  --color-mix-6-1-step-3-s: 63.75%;\n  --color-mix-6-1-step-3-l: 47.25%;\n  --color-mix-6-2-step-1: hsl(37, 20%, 24%);\n  --color-mix-6-2-step-1-h: 37;\n  --color-mix-6-2-step-1-s: 20%;\n  --color-mix-6-2-step-1-l: 24%;\n  --color-mix-6-2-step-2: hsl(37, 40%, 48%);\n  --color-mix-6-2-step-2-h: 37;\n  --color-mix-6-2-step-2-s: 40%;\n  --color-mix-6-2-step-2-l: 48%;\n  --color-mix-6-2-step-3: hsl(37, 60%, 72%);\n  --color-mix-6-2-step-3-h: 37;\n  --color-mix-6-2-step-3-s: 60%;\n  --color-mix-6-2-step-3-l: 72%;\n  --color-mix-6-3-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-6-3-step-1-h: 37;\n  --color-mix-6-3-step-1-s: 11.75%;\n  --color-mix-6-3-step-1-l: 21.25%;\n  --color-mix-6-3-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-6-3-step-2-h: 37;\n  --color-mix-6-3-step-2-s: 23.5%;\n  --color-mix-6-3-step-2-l: 42.5%;\n  --color-mix-6-3-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-6-3-step-3-h: 37;\n  --color-mix-6-3-step-3-s: 35.25%;\n  --color-mix-6-3-step-3-l: 63.75%;\n  --color-mix-6-4-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-6-4-step-1-h: 89;\n  --color-mix-6-4-step-1-s: 10.5%;\n  --color-mix-6-4-step-1-l: 12.75%;\n  --color-mix-6-4-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-6-4-step-2-h: 89;\n  --color-mix-6-4-step-2-s: 21%;\n  --color-mix-6-4-step-2-l: 25.5%;\n  --color-mix-6-4-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-6-4-step-3-h: 89;\n  --color-mix-6-4-step-3-s: 31.5%;\n  --color-mix-6-4-step-3-l: 38.25%;\n  --color-mix-6-5-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-6-5-step-1-h: 130;\n  --color-mix-6-5-step-1-s: 1.25%;\n  --color-mix-6-5-step-1-l: 6.5%;\n  --color-mix-6-5-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-6-5-step-2-h: 130;\n  --color-mix-6-5-step-2-s: 2.5%;\n  --color-mix-6-5-step-2-l: 13%;\n  --color-mix-6-5-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-6-5-step-3-h: 130;\n  --color-mix-6-5-step-3-s: 3.75%;\n  --color-mix-6-5-step-3-l: 19.5%;\n  --color-mix-6-7-step-1: hsl(0, 0%, 75%);\n  --color-mix-6-7-step-1-h: 0;\n  --color-mix-6-7-step-1-s: 0%;\n  --color-mix-6-7-step-1-l: 75%;\n  --color-mix-6-7-step-2: hsl(0, 0%, 50%);\n  --color-mix-6-7-step-2-h: 0;\n  --color-mix-6-7-step-2-s: 0%;\n  --color-mix-6-7-step-2-l: 50%;\n  --color-mix-6-7-step-3: hsl(0, 0%, 25%);\n  --color-mix-6-7-step-3-h: 0;\n  --color-mix-6-7-step-3-s: 0%;\n  --color-mix-6-7-step-3-l: 25%;\n  --color-primary-7: hsl(0, 0%, 100%);\n  --color-primary-7-h: 0;\n  --color-primary-7-s: 0%;\n  --color-primary-7-l: 100%;\n  --color-mix-7-1-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-7-1-step-1-h: 32;\n  --color-mix-7-1-step-1-s: 21.25%;\n  --color-mix-7-1-step-1-l: 90.75%;\n  --color-mix-7-1-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-7-1-step-2-h: 32;\n  --color-mix-7-1-step-2-s: 42.5%;\n  --color-mix-7-1-step-2-l: 81.5%;\n  --color-mix-7-1-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-7-1-step-3-h: 32;\n  --color-mix-7-1-step-3-s: 63.75%;\n  --color-mix-7-1-step-3-l: 72.25%;\n  --color-mix-7-2-step-1: hsl(37, 20%, 99%);\n  --color-mix-7-2-step-1-h: 37;\n  --color-mix-7-2-step-1-s: 20%;\n  --color-mix-7-2-step-1-l: 99%;\n  --color-mix-7-2-step-2: hsl(37, 40%, 98%);\n  --color-mix-7-2-step-2-h: 37;\n  --color-mix-7-2-step-2-s: 40%;\n  --color-mix-7-2-step-2-l: 98%;\n  --color-mix-7-2-step-3: hsl(37, 60%, 97%);\n  --color-mix-7-2-step-3-h: 37;\n  --color-mix-7-2-step-3-s: 60%;\n  --color-mix-7-2-step-3-l: 97%;\n  --color-mix-7-3-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-7-3-step-1-h: 37;\n  --color-mix-7-3-step-1-s: 11.75%;\n  --color-mix-7-3-step-1-l: 96.25%;\n  --color-mix-7-3-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-7-3-step-2-h: 37;\n  --color-mix-7-3-step-2-s: 23.5%;\n  --color-mix-7-3-step-2-l: 92.5%;\n  --color-mix-7-3-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-7-3-step-3-h: 37;\n  --color-mix-7-3-step-3-s: 35.25%;\n  --color-mix-7-3-step-3-l: 88.75%;\n  --color-mix-7-4-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-7-4-step-1-h: 89;\n  --color-mix-7-4-step-1-s: 10.5%;\n  --color-mix-7-4-step-1-l: 87.75%;\n  --color-mix-7-4-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-7-4-step-2-h: 89;\n  --color-mix-7-4-step-2-s: 21%;\n  --color-mix-7-4-step-2-l: 75.5%;\n  --color-mix-7-4-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-7-4-step-3-h: 89;\n  --color-mix-7-4-step-3-s: 31.5%;\n  --color-mix-7-4-step-3-l: 63.25%;\n  --color-mix-7-5-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-7-5-step-1-h: 130;\n  --color-mix-7-5-step-1-s: 1.25%;\n  --color-mix-7-5-step-1-l: 81.5%;\n  --color-mix-7-5-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-7-5-step-2-h: 130;\n  --color-mix-7-5-step-2-s: 2.5%;\n  --color-mix-7-5-step-2-l: 63%;\n  --color-mix-7-5-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-7-5-step-3-h: 130;\n  --color-mix-7-5-step-3-s: 3.75%;\n  --color-mix-7-5-step-3-l: 44.5%;\n  --color-mix-7-6-step-1: hsl(0, 0%, 25%);\n  --color-mix-7-6-step-1-h: 0;\n  --color-mix-7-6-step-1-s: 0%;\n  --color-mix-7-6-step-1-l: 25%;\n  --color-mix-7-6-step-2: hsl(0, 0%, 50%);\n  --color-mix-7-6-step-2-h: 0;\n  --color-mix-7-6-step-2-s: 0%;\n  --color-mix-7-6-step-2-l: 50%;\n  --color-mix-7-6-step-3: hsl(0, 0%, 75%);\n  --color-mix-7-6-step-3-h: 0;\n  --color-mix-7-6-step-3-s: 0%;\n  --color-mix-7-6-step-3-l: 75%;\n  --color-primary-8: hsl(46, 70%, 64%);\n  --color-primary-8-h: 46;\n  --color-primary-8-s: 70%;\n  --color-primary-8-l: 64%;\n}\n[data-theme-color=light][data-v-2558d202] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(36, 14%, 79%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-7-h),\n                  0%,\n                  var(--color-primary-7-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-5);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-5);\n  --color-background-page-1: var(--color-primary-7);\n  --color-background-page-2: var(--color-mix-7-3-step-1);\n  --color-background-page-3: var(--color-primary-7);\n  --color-text-normal: var(--color-mix-7-6-step-1);\n  --color-text-normal-reversed: var(--color-primary-2);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-5-7-step-3);\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-text-highlight: var(--color-primary-2);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=light] input[data-v-2558d202] {\n  color-scheme: light;\n}\n[data-theme-color=light][data-theme-type=line][data-v-2558d202] {\n  --color-background-base: var(--color-primary-7);\n}\n[data-theme-color=light][data-theme-type=block][data-v-2558d202] {\n  --color-background-base: var(--color-mix-2-3-step-3);\n}\n[data-theme-color=dark][data-v-2558d202] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(138, 8%, 49%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-base: var(--color-mix-6-5-step-2);\n  --color-background-lighter: var(--color-primary-5);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-2-h),\n                  0%,\n                  var(--color-primary-2-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-2);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-2);\n  --color-background-page-1: var(--color-mix-6-5-step-2);\n  --color-background-page-2: var(--color-mix-7-6-step-1);\n  --color-background-page-3: var(--color-mix-5-6-step-3);\n  --color-text-normal: var(--color-primary-2);\n  --color-text-normal-reversed: var(--color-primary-5);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-6-7-step-2);\n  --color-text-highlight: var(--color-primary-5);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=dark] input[data-v-2558d202] {\n  color-scheme: dark;\n}\n\n/* END VARIABLES */\n/*============================================================================\n  line-height: line-height(28, 18)\n  Expected arguments are px values and unitless.\n\n  Make each line the desired height(1st arg) base on the current font size(2nd arg)\n==============================================================================*/\nbutton[data-v-2558d202]::-moz-focus-inner,\n[type=button][data-v-2558d202]::-moz-focus-inner,\n[type=reset][data-v-2558d202]::-moz-focus-inner,\n[type=submit][data-v-2558d202]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton[data-v-2558d202]:-moz-focusring,\n[type=button][data-v-2558d202]:-moz-focusring,\n[type=reset][data-v-2558d202]:-moz-focusring,\n[type=submit][data-v-2558d202]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\ninput[type=search][data-v-2558d202], input[type=number][data-v-2558d202], input[type=email][data-v-2558d202], input[type=password][data-v-2558d202] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ntable[data-v-2558d202] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd[data-v-2558d202],\nth[data-v-2558d202] {\n  padding: 0;\n}\ntextarea[data-v-2558d202] {\n  overflow: auto;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\nbody[data-v-2558d202] {\n  overflow: hidden;\n  color: var(--color-text-normal);\n}\n[data-v-2558d202] {\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n}\n[data-v-2558d202]::before,[data-v-2558d202]::after {\n  box-sizing: border-box;\n}\n[data-v-2558d202]::-moz-selection {\n  color: var(--color-text-highlight);\n  background-color: var(--color-background-highlight);\n}\n[data-v-2558d202]::selection,[data-v-2558d202]::-moz-selection {\n  color: var(--color-text-highlight);\n  background-color: var(--color-background-highlight);\n}\n#app[data-v-2558d202] {\n  background-color: var(--color-background-base);\n}\n[data-v-2558d202]::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n[data-v-2558d202]::-webkit-scrollbar-track {\n  background: var(--color-scrollbar-track);\n  border-radius: 8rem;\n}\n[data-v-2558d202]::-webkit-scrollbar-thumb {\n  background: var(--color-background-scrollbar-thumb);\n  border-radius: 8rem;\n}\n[data-v-2558d202]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-background-scrollbar-thumb-hover);\n}\nh1[data-v-2558d202], .h1[data-v-2558d202],\nh2[data-v-2558d202],\n.h2[data-v-2558d202],\nh3[data-v-2558d202],\n.h3[data-v-2558d202],\nh4[data-v-2558d202],\n.h4[data-v-2558d202],\nh5[data-v-2558d202],\n.h5[data-v-2558d202],\nh6[data-v-2558d202],\n.h6[data-v-2558d202],\nfieldset legend[data-v-2558d202],\nlabel[data-v-2558d202] {\n  margin: 0 0 1rem;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\n@media only screen and (max-width: 749px) {\nh1[data-v-2558d202], .h1[data-v-2558d202] {\n    font-size: 3.4rem;\n    line-height: 1.2352941176;\n}\n}\n@media only screen and (min-width: 750px) {\nh1[data-v-2558d202], .h1[data-v-2558d202] {\n    font-size: 6rem;\n    line-height: 1.2;\n}\n}\n@media only screen and (max-width: 749px) {\nh2[data-v-2558d202], .h2[data-v-2558d202] {\n    font-size: 3rem;\n    line-height: 1.2666666667;\n}\n}\n@media only screen and (min-width: 750px) {\nh2[data-v-2558d202], .h2[data-v-2558d202] {\n    font-size: 3.6rem;\n    line-height: 1.3611111111;\n}\n}\n@media only screen and (max-width: 749px) {\nh3[data-v-2558d202], .h3[data-v-2558d202] {\n    font-size: 2.8rem;\n    line-height: 1.5;\n}\n}\n@media only screen and (min-width: 750px) {\nh3[data-v-2558d202], .h3[data-v-2558d202] {\n    font-size: 3.2rem;\n    line-height: 1.125;\n}\n}\n@media only screen and (max-width: 749px) {\nh4[data-v-2558d202], .h4[data-v-2558d202] {\n    font-size: 2.2rem;\n    line-height: 1.4545454545;\n}\n}\n@media only screen and (min-width: 750px) {\nh4[data-v-2558d202], .h4[data-v-2558d202] {\n    font-size: 2.4rem;\n    line-height: 1.5;\n}\n}\n@media only screen and (max-width: 749px) {\nh5[data-v-2558d202], .h5[data-v-2558d202] {\n    font-size: 2rem;\n    line-height: 1.3;\n}\n}\n@media only screen and (min-width: 750px) {\nh5[data-v-2558d202], .h5[data-v-2558d202] {\n    font-size: 2.2rem;\n}\n}\n@media only screen and (max-width: 749px) {\nh6[data-v-2558d202], .h6[data-v-2558d202], fieldset legend[data-v-2558d202], label[data-v-2558d202] {\n    font-size: 1.6rem;\n    line-height: 1.375;\n}\n}\n@media only screen and (min-width: 750px) {\nh6[data-v-2558d202], .h6[data-v-2558d202], fieldset legend[data-v-2558d202], label[data-v-2558d202] {\n    font-size: 1.8rem;\n}\n}\nP[data-v-2558d202] {\n  margin: 0;\n  padding: 0;\n  font-size: 1.7rem;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\na[data-v-2558d202] {\n  color: var(--color-text-link-primary);\n  text-decoration: none;\n  font-weight: inherit;\n  cursor: pointer;\n  transition-duration: 0.3s;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\na[data-v-2558d202]:not(.btn):hover {\n  color: var(--color-text-link-hover-primary);\n}\na[data-v-2558d202]::-moz-selection {\n  color: var(--color-text-link-highlight);\n}\na[data-v-2558d202]::selection, a[data-v-2558d202]::-moz-selection {\n  color: var(--color-text-link-highlight);\n}\n.text-small[data-v-2558d202] {\n  font-size: 0.82em;\n}\n.text-large[data-v-2558d202] {\n  font-size: 1.25em;\n}\n.text-sup[data-v-2558d202] {\n  position: relative;\n  font-size: 50%;\n  top: -0.4em;\n}\n.text-sub[data-v-2558d202] {\n  position: relative;\n  font-size: 55%;\n  bottom: -0.25rem;\n}\nb[data-v-2558d202],\nstrong[data-v-2558d202] {\n  --font-weight: 600;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\nlabel[data-v-2558d202] {\n  padding-bottom: 0.3rem;\n  display: inline-flex;\n}\nlabel[data-v-2558d202]:has(input:not([type=checkbox])):has(input:not([type=radio])):not(.override) {\n  --input-width: 100%;\n  height: auto;\n  align-items: center;\n  gap: 0.3rem;\n}\nlabel input[data-v-2558d202]:not([type=checkbox]):not([type=radio]) {\n  order: 1;\n  width: 100%;\n  max-width: var(--input-width);\n  margin: 0;\n  margin-left: auto;\n}\n:root [data-theme-color=dark][data-v-2558d202] {\n  --color-input-background: var(--color-mix-5-6-step-3);\n  --color-input-background-contrasted: var(--color-mix-5-6-step-2);\n  --color-input-background-focused: var(--color-mix-5-6-step-3);\n  --color-input-background-disabled: hsla(\n                  var(--color-mix-5-6-step-3-h),\n                  var(--color-mix-5-6-step-3-s),\n                  22%,\n                  1\n  );\n  --color-input-text-disabled: var(--color-mix-5-7-step-3);\n  --color-input-border: transparent;\n  --color-input-border-focused: var(--color-primary-1);\n  --color-input-border-disabled: hsla(\n                  var(--color-mix-5-6-step-3-h),\n                  var(--color-mix-5-6-step-3-s),\n                  22%,\n                  1\n  );\n  --color-input-placeholder: var(--color-mix-5-7-step-3);\n  --color-dismiss-choice-background: var(--color-mix-5-6-step-3);\n  --color-checkbox-background-unchecked: var(--color-mix-5-6-step-3);\n  --color-checkbox-background-unchecked-secondary: var(--color-mix-5-6-step-2);\n  --color-checkbox-background-unchecked-tertiary: var(--color-mix-5-7-step-2);\n  --color-checkbox-background-checked: var(--color-primary-1);\n  --color-checkbox-background-focused: var(--color-checkbox-background-unchecked);\n  --color-checkbox-background-disabled: var(--color-mix-5-6-step-1);\n  --color-checkbox-border-unchecked: transparent;\n  --color-checkbox-border-checked: var(--color-checkbox-background-checked);\n  --color-checkbox-border-focused: var(--color-primary-4);\n  --color-checkbox-border-disabled: transparent;\n}\n:root [data-theme-color=dark] [checked][data-v-2558d202] {\n  --color-checkbox-background-focused: var(--color-checkbox-background-checked);\n}\n:root [data-theme-color=light][data-v-2558d202] {\n  --color-input-background: var(--color-mix-7-4-step-1);\n  --color-input-background-contrasted: var(--color-mix-7-4-step-2);\n  --color-input-background-focused: var(--color-mix-7-4-step-1);\n  --color-input-background-disabled: var(--color-mix-7-4-step-1);\n  --color-input-text-disabled: var(--color-mix-5-7-step-3);\n  --color-input-border: transparent;\n  --color-input-border-focused: var(--color-primary-1);\n  --color-input-border-disabled: var(--color-mix-7-4-step-1);\n  --color-input-placeholder: var(--color-mix-5-7-step-3);\n  --color-checkbox-background-unchecked: var(--color-mix-7-4-step-1);\n  --color-checkbox-background-unchecked-secondary: var(--color-mix-7-5-step-1);\n  --color-checkbox-background-unchecked-tertiary: var(--color-mix-7-5-step-3);\n  --color-checkbox-background-checked: var(--color-primary-1);\n  --color-checkbox-background-focused: var(--color-checkbox-background-unchecked);\n  --color-checkbox-background-disabled: var(--color-mix-7-4-step-1);\n  --color-checkbox-border-unchecked: transparent;\n  --color-checkbox-border-checked: var(--color-checkbox-background-checked);\n  --color-checkbox-border-focused: var(--color-primary-4);\n  --color-checkbox-border-disabled: transparent;\n}\n:root [data-theme-color=light] [checked][data-v-2558d202] {\n  --color-checkbox-background-focused: var(--color-checkbox-background-checked);\n}\n.input-boxes-default[data-v-2558d202], textarea[data-v-2558d202], select[data-v-2558d202],\noption[data-v-2558d202], input[type=text][data-v-2558d202], input[type=email][data-v-2558d202], input[type=tel][data-v-2558d202], input[type=number][data-v-2558d202], input[type=password][data-v-2558d202], input[type=search][data-v-2558d202], input[type=date][data-v-2558d202], input[type=datetime-local][data-v-2558d202], input[type=month][data-v-2558d202], input[type=time][data-v-2558d202], input[type=url][data-v-2558d202], input[type=week][data-v-2558d202] {\n  --input-padding-block: .7rem;\n  --input-padding-inline: 1rem;\n  height: 34px;\n  width: 100%;\n  border-radius: 0.8rem;\n  font-size: 1.5rem;\n  border-color: var(--color-input-border);\n  border-style: solid;\n  border-width: 2px;\n  padding: var(--input-padding-block) var(--input-padding-inline);\n  margin: auto;\n  background-color: var(--color-input-background);\n  color: var(--color-text-normal);\n}\n.input-boxes-default[data-v-2558d202]::-moz-placeholder, textarea[data-v-2558d202]::-moz-placeholder, select[data-v-2558d202]::-moz-placeholder,\noption[data-v-2558d202]::-moz-placeholder, input[type=text][data-v-2558d202]::-moz-placeholder, input[type=email][data-v-2558d202]::-moz-placeholder, input[type=tel][data-v-2558d202]::-moz-placeholder, input[type=number][data-v-2558d202]::-moz-placeholder, input[type=password][data-v-2558d202]::-moz-placeholder, input[type=search][data-v-2558d202]::-moz-placeholder, input[type=date][data-v-2558d202]::-moz-placeholder, input[type=datetime-local][data-v-2558d202]::-moz-placeholder, input[type=month][data-v-2558d202]::-moz-placeholder, input[type=time][data-v-2558d202]::-moz-placeholder, input[type=url][data-v-2558d202]::-moz-placeholder, input[type=week][data-v-2558d202]::-moz-placeholder {\n  color: var(--color-input-placeholder);\n  opacity: 1;\n}\n.input-boxes-default[data-v-2558d202]::-moz-placeholder, textarea[data-v-2558d202]::-moz-placeholder, select[data-v-2558d202]::-moz-placeholder, option[data-v-2558d202]::-moz-placeholder, input[type=text][data-v-2558d202]::-moz-placeholder, input[type=email][data-v-2558d202]::-moz-placeholder, input[type=tel][data-v-2558d202]::-moz-placeholder, input[type=number][data-v-2558d202]::-moz-placeholder, input[type=password][data-v-2558d202]::-moz-placeholder, input[type=search][data-v-2558d202]::-moz-placeholder, input[type=date][data-v-2558d202]::-moz-placeholder, input[type=datetime-local][data-v-2558d202]::-moz-placeholder, input[type=month][data-v-2558d202]::-moz-placeholder, input[type=time][data-v-2558d202]::-moz-placeholder, input[type=url][data-v-2558d202]::-moz-placeholder, input[type=week][data-v-2558d202]::-moz-placeholder {\n  color: var(--color-input-placeholder);\n  opacity: 1;\n}\n.input-boxes-default[data-v-2558d202]::placeholder, textarea[data-v-2558d202]::placeholder, select[data-v-2558d202]::placeholder,\noption[data-v-2558d202]::placeholder, input[type=text][data-v-2558d202]::placeholder, input[type=email][data-v-2558d202]::placeholder, input[type=tel][data-v-2558d202]::placeholder, input[type=number][data-v-2558d202]::placeholder, input[type=password][data-v-2558d202]::placeholder, input[type=search][data-v-2558d202]::placeholder, input[type=date][data-v-2558d202]::placeholder, input[type=datetime-local][data-v-2558d202]::placeholder, input[type=month][data-v-2558d202]::placeholder, input[type=time][data-v-2558d202]::placeholder, input[type=url][data-v-2558d202]::placeholder, input[type=week][data-v-2558d202]::placeholder {\n  color: var(--color-input-placeholder);\n  opacity: 1;\n}\n.input-boxes-default[data-v-2558d202]:disabled, textarea[data-v-2558d202]:disabled, select[data-v-2558d202]:disabled,\noption[data-v-2558d202]:disabled, input[type=text][data-v-2558d202]:disabled, input[type=email][data-v-2558d202]:disabled, input[type=tel][data-v-2558d202]:disabled, input[type=number][data-v-2558d202]:disabled, input[type=password][data-v-2558d202]:disabled, input[type=search][data-v-2558d202]:disabled, input[type=date][data-v-2558d202]:disabled, input[type=datetime-local][data-v-2558d202]:disabled, input[type=month][data-v-2558d202]:disabled, input[type=time][data-v-2558d202]:disabled, input[type=url][data-v-2558d202]:disabled, input[type=week][data-v-2558d202]:disabled, .input-boxes-default.disabled[data-v-2558d202], textarea.disabled[data-v-2558d202], select.disabled[data-v-2558d202],\noption.disabled[data-v-2558d202], input.disabled[type=text][data-v-2558d202], input.disabled[type=email][data-v-2558d202], input.disabled[type=tel][data-v-2558d202], input.disabled[type=number][data-v-2558d202], input.disabled[type=password][data-v-2558d202], input.disabled[type=search][data-v-2558d202], input.disabled[type=date][data-v-2558d202], input.disabled[type=datetime-local][data-v-2558d202], input.disabled[type=month][data-v-2558d202], input.disabled[type=time][data-v-2558d202], input.disabled[type=url][data-v-2558d202], input.disabled[type=week][data-v-2558d202] {\n  pointer-events: none;\n  cursor: default;\n  background-color: var(--color-input-background-disabled);\n  color: var(--color-text-disabled);\n  border-color: var(--color-input-border-disabled);\n  opacity: 0.7;\n  filter: grayscale(0.5);\n}\n.input-boxes-default.gray[data-v-2558d202], textarea.gray[data-v-2558d202], select.gray[data-v-2558d202],\noption.gray[data-v-2558d202], input.gray[type=text][data-v-2558d202], input.gray[type=email][data-v-2558d202], input.gray[type=tel][data-v-2558d202], input.gray[type=number][data-v-2558d202], input.gray[type=password][data-v-2558d202], input.gray[type=search][data-v-2558d202], input.gray[type=date][data-v-2558d202], input.gray[type=datetime-local][data-v-2558d202], input.gray[type=month][data-v-2558d202], input.gray[type=time][data-v-2558d202], input.gray[type=url][data-v-2558d202], input.gray[type=week][data-v-2558d202] {\n  background-color: var(--color-input-backgroud-disabled);\n  color: var(--color-input-text-disabled);\n}\n.input-boxes-default.error[data-v-2558d202], textarea.error[data-v-2558d202], select.error[data-v-2558d202],\noption.error[data-v-2558d202], input.error[type=text][data-v-2558d202], input.error[type=email][data-v-2558d202], input.error[type=tel][data-v-2558d202], input.error[type=number][data-v-2558d202], input.error[type=password][data-v-2558d202], input.error[type=search][data-v-2558d202], input.error[type=date][data-v-2558d202], input.error[type=datetime-local][data-v-2558d202], input.error[type=month][data-v-2558d202], input.error[type=time][data-v-2558d202], input.error[type=url][data-v-2558d202], input.error[type=week][data-v-2558d202] {\n  border-color: var(--color-semantic-error);\n}\n.input-boxes-default[data-v-2558d202]:focus, textarea[data-v-2558d202]:focus, select[data-v-2558d202]:focus,\noption[data-v-2558d202]:focus, input[type=text][data-v-2558d202]:focus, input[type=email][data-v-2558d202]:focus, input[type=tel][data-v-2558d202]:focus, input[type=number][data-v-2558d202]:focus, input[type=password][data-v-2558d202]:focus, input[type=search][data-v-2558d202]:focus, input[type=date][data-v-2558d202]:focus, input[type=datetime-local][data-v-2558d202]:focus, input[type=month][data-v-2558d202]:focus, input[type=time][data-v-2558d202]:focus, input[type=url][data-v-2558d202]:focus, input[type=week][data-v-2558d202]:focus, .input-boxes-default[data-v-2558d202]:focus-visible, textarea[data-v-2558d202]:focus-visible, select[data-v-2558d202]:focus-visible,\noption[data-v-2558d202]:focus-visible, input[type=text][data-v-2558d202]:focus-visible, input[type=email][data-v-2558d202]:focus-visible, input[type=tel][data-v-2558d202]:focus-visible, input[type=number][data-v-2558d202]:focus-visible, input[type=password][data-v-2558d202]:focus-visible, input[type=search][data-v-2558d202]:focus-visible, input[type=date][data-v-2558d202]:focus-visible, input[type=datetime-local][data-v-2558d202]:focus-visible, input[type=month][data-v-2558d202]:focus-visible, input[type=time][data-v-2558d202]:focus-visible, input[type=url][data-v-2558d202]:focus-visible, input[type=week][data-v-2558d202]:focus-visible, .input-boxes-default[data-v-2558d202]:focus-within, textarea[data-v-2558d202]:focus-within, select[data-v-2558d202]:focus-within,\noption[data-v-2558d202]:focus-within, input[type=text][data-v-2558d202]:focus-within, input[type=email][data-v-2558d202]:focus-within, input[type=tel][data-v-2558d202]:focus-within, input[type=number][data-v-2558d202]:focus-within, input[type=password][data-v-2558d202]:focus-within, input[type=search][data-v-2558d202]:focus-within, input[type=date][data-v-2558d202]:focus-within, input[type=datetime-local][data-v-2558d202]:focus-within, input[type=month][data-v-2558d202]:focus-within, input[type=time][data-v-2558d202]:focus-within, input[type=url][data-v-2558d202]:focus-within, input[type=week][data-v-2558d202]:focus-within, .input-boxes-default[data-v-2558d202]:active, textarea[data-v-2558d202]:active, select[data-v-2558d202]:active,\noption[data-v-2558d202]:active, input[type=text][data-v-2558d202]:active, input[type=email][data-v-2558d202]:active, input[type=tel][data-v-2558d202]:active, input[type=number][data-v-2558d202]:active, input[type=password][data-v-2558d202]:active, input[type=search][data-v-2558d202]:active, input[type=date][data-v-2558d202]:active, input[type=datetime-local][data-v-2558d202]:active, input[type=month][data-v-2558d202]:active, input[type=time][data-v-2558d202]:active, input[type=url][data-v-2558d202]:active, input[type=week][data-v-2558d202]:active {\n  background-color: var(--color-input-background-focused);\n  border-color: var(--color-input-border-focused);\n}\ninput[data-v-2558d202]::-webkit-outer-spin-button, input[data-v-2558d202]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=checkbox][data-v-2558d202], input[type=radio][data-v-2558d202] {\n  width: 0;\n  height: 0;\n  color: var(--color-checkbox-background-unchecked);\n}\ninput[type=checkbox][data-v-2558d202]::after, input[type=radio][data-v-2558d202]::after {\n  content: \"\";\n  position: absolute;\n  width: 2.2rem;\n  height: 2.2rem;\n  border-radius: 0.8rem;\n  color: inherit;\n  background-color: currentColor;\n  border: 1px solid var(--color-checkbox-border-unchecked);\n  cursor: pointer;\n  pointer-events: all;\n}\ninput[type=checkbox].secondary[data-v-2558d202], input[type=radio].secondary[data-v-2558d202] {\n  color: var(--color-checkbox-background-unchecked-secondary);\n}\ninput[type=checkbox].tertiary[data-v-2558d202], input[type=radio].tertiary[data-v-2558d202] {\n  color: var(--color-checkbox-background-unchecked-tertiary);\n}\ninput[type=checkbox][data-v-2558d202]:checked, input[type=radio][data-v-2558d202]:checked {\n  color: var(--color-checkbox-background-checked) !important;\n}\ninput[type=checkbox][data-v-2558d202]:checked::after, input[type=radio][data-v-2558d202]:checked::after {\n  border: 2px solid var(--color-checkbox-border-checked);\n}\ninput[type=checkbox][data-v-2558d202]:focus::after, input[type=checkbox][data-v-2558d202]:checked:focus::after, input[type=radio][data-v-2558d202]:focus::after, input[type=radio][data-v-2558d202]:checked:focus::after {\n  border: 2px solid var(--color-checkbox-border-focused);\n}\n@supports (grid: subgrid/subgrid) {\ninput[type=checkbox][data-v-2558d202], input[type=radio][data-v-2558d202] {\n    -webkit-appearance: initial;\n}\n}\ninput[type=radio][data-v-2558d202]::after {\n  border-radius: 100px;\n}\n@-moz-document url-prefix() {}\ninput[type=text][data-v-2558d202], input[type=email][data-v-2558d202], input[type=tel][data-v-2558d202], input[type=number][data-v-2558d202], input[type=password][data-v-2558d202], input[type=search][data-v-2558d202], input[type=date][data-v-2558d202], input[type=datetime-local][data-v-2558d202], input[type=month][data-v-2558d202], input[type=time][data-v-2558d202], input[type=url][data-v-2558d202], input[type=week][data-v-2558d202] {\n  cursor: text;\n  max-width: 514px;\n}\ninput[type=text][data-v-2558d202] ::-moz-placeholder, input[type=email][data-v-2558d202] ::-moz-placeholder, input[type=tel][data-v-2558d202] ::-moz-placeholder, input[type=number][data-v-2558d202] ::-moz-placeholder, input[type=password][data-v-2558d202] ::-moz-placeholder, input[type=search][data-v-2558d202] ::-moz-placeholder, input[type=date][data-v-2558d202] ::-moz-placeholder, input[type=datetime-local][data-v-2558d202] ::-moz-placeholder, input[type=month][data-v-2558d202] ::-moz-placeholder, input[type=time][data-v-2558d202] ::-moz-placeholder, input[type=url][data-v-2558d202] ::-moz-placeholder, input[type=week][data-v-2558d202] ::-moz-placeholder {\n  overflow: visible;\n  color: var(--color-input-placeholder);\n}\ninput[type=text][data-v-2558d202] ::placeholder, input[type=email][data-v-2558d202] ::placeholder, input[type=tel][data-v-2558d202] ::placeholder, input[type=number][data-v-2558d202] ::placeholder, input[type=password][data-v-2558d202] ::placeholder, input[type=search][data-v-2558d202] ::placeholder, input[type=date][data-v-2558d202] ::placeholder, input[type=datetime-local][data-v-2558d202] ::placeholder, input[type=month][data-v-2558d202] ::placeholder, input[type=time][data-v-2558d202] ::placeholder, input[type=url][data-v-2558d202] ::placeholder, input[type=week][data-v-2558d202] ::placeholder {\n  overflow: visible;\n  color: var(--color-input-placeholder);\n}\ninput[type=number][data-v-2558d202] {\n  -moz-appearance: textfield;\n}\ninput[type=file][data-v-2558d202] {\n  position: absolute !important;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n}\ninput[type=color][data-v-2558d202] {\n  width: 34px;\n  height: 34px;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 0.8rem;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\ninput[type=color][data-v-2558d202]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\ninput[type=color][data-v-2558d202]::-webkit-color-swatch {\n  border: none;\n}\ninput[data-v-2558d202]:focus, input[data-v-2558d202]:focus-visible, input[data-v-2558d202]:focus-within {\n  border-color: var(--color-input-border-focused);\n  outline: transparent;\n}\nselect[data-v-2558d202],\noption[data-v-2558d202] {\n  cursor: pointer;\n  max-width: 514px;\n  border: 2px solid var(--color-input-border);\n  padding: 0.3rem 1rem 0.6rem !important;\n  margin: auto;\n  box-sizing: border-box;\n}\nselect[data-v-2558d202]:focus, select[data-v-2558d202]:focus-visible, select[data-v-2558d202]:focus-within,\noption[data-v-2558d202]:focus,\noption[data-v-2558d202]:focus-visible,\noption[data-v-2558d202]:focus-within {\n  border-color: var(--color-input-border-focused) !important;\n  outline: transparent;\n}\nfieldset[data-v-2558d202] {\n  border: transparent;\n}\nfieldset legend[data-v-2558d202] {\n  margin: 0 0 0 1rem;\n}\ntextarea[data-v-2558d202] {\n  cursor: text;\n  min-height: 7.2rem;\n  resize: none;\n}\ntextarea[data-v-2558d202]:focus, textarea[data-v-2558d202]:focus-visible, textarea[data-v-2558d202]:focus-within {\n  border-color: var(--color-input-border-focused);\n  outline: transparent;\n}\nbutton[data-v-2558d202],\ninput[data-v-2558d202],\nselect[data-v-2558d202],\noption[data-v-2558d202],\na[data-v-2558d202] {\n  border: transparent;\n  padding: 0.2rem 0.5rem;\n}\nbutton[data-v-2558d202]:disabled, button.disabled[data-v-2558d202],\ninput[data-v-2558d202]:disabled,\ninput.disabled[data-v-2558d202],\nselect[data-v-2558d202]:disabled,\nselect.disabled[data-v-2558d202],\noption[data-v-2558d202]:disabled,\noption.disabled[data-v-2558d202],\na[data-v-2558d202]:disabled,\na.disabled[data-v-2558d202] {\n  pointer-events: none;\n  cursor: default;\n}\nlabel[data-v-2558d202]:has([type=checkbox]:first-child):not(.override) {\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\nlabel:has([type=checkbox]:first-child):has(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, label, fieldset legend) input[data-v-2558d202] {\n  margin-bottom: 1rem;\n}\nlabel[data-v-2558d202]:has([type=checkbox]) {\n  padding-left: 2rem;\n}\nlabel:has([type=checkbox]) [type=checkbox][data-v-2558d202]:first-child::after {\n  transform: translate(-2.4rem, -50%);\n}\n.unit-input-container[data-v-2558d202] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0;\n  max-width: 514px;\n}\n.unit-input-container input:disabled + .unit-decorator[data-v-2558d202],\n.unit-input-container input.disabled + .unit-decorator[data-v-2558d202] {\n  background-color: var(--color-input-border-disabled);\n  color: var(--color-text-disabled);\n}\n.unit-input-container:focus-within .unit-decorator[data-v-2558d202],\n.unit-input-container:focus-within input:disabled + .unit-decorator[data-v-2558d202],\n.unit-input-container:focus-within input.disabled + .unit-decorator[data-v-2558d202] {\n  background-color: var(--color-input-border-focused);\n}\n.btn[data-v-2558d202] {\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  --font-weight: 700;\n  border: 2px solid transparent;\n  padding: 0.9rem 2rem 0.7rem;\n  text-align: center;\n  max-width: 514px;\n  border-radius: 0.8rem;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.btn[data-v-2558d202]:focus-visible {\n  outline: none;\n}\n.btn[data-v-2558d202]:focus:not(.focus-visible) {\n  border-color: transparent;\n}\n.btn[data-v-2558d202]:focus, .btn[data-v-2558d202]:focus-within {\n  border: 2px solid var(--color-primary-1);\n}\n[data-theme-color=dark] .btn[data-v-2558d202] {\n  --color-button-background-primary: var(--color-primary-4);\n  --color-button-text-primary: var(--color-text-normal-reversed);\n  --color-button-background-primary-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-l) * 1.15)\n  );\n  --color-button-background-secondary: var(--color-primary-1);\n  --color-button-text-secondary: var(--color-text-normal-reversed);\n  --color-button-background-secondary-hover: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  calc(var(--color-primary-1-l) * 1.15)\n  );\n  --color-button-background-quaternary: var(--color-mix-5-6-step-3);\n  --color-button-text-quaternary: var(--color-text-normal);\n  --color-button-background-quaternary-hover: hsl(\n                  var(--color-mix-6-7-step-3-h),\n                  var(--color-mix-6-7-step-3-s),\n                  calc(var(--color-mix-6-7-step-3-l) * 1.15)\n  );\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-button-background-disabled: var(--color-mix-5-6-step-3);\n}\n[data-theme-color=light] .btn[data-v-2558d202] {\n  --color-button-background-primary: var(--color-primary-4);\n  --color-button-text-primary: var(--color-text-normal);\n  --color-button-background-primary-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-l) * 1.15)\n  );\n  --color-button-background-secondary: var(--color-primary-1);\n  --color-button-text-secondary: var(--color-text-normal);\n  --color-button-background-secondary-hover: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  calc(var(--color-primary-1-l) * 1.15)\n  );\n  --color-button-background-quaternary: var(--color-mix-6-7-step-2);\n  --color-button-text-quaternary: var(--color-text-normal);\n  --color-button-background-quaternary-hover: hsl(\n                  var(--color-mix-6-7-step-2-h),\n                  var(--color-mix-6-7-step-2-s),\n                  calc(var(--color-mix-6-7-step-2-l) * 1.15)\n  );\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-button-background-disabled: var(--color-mix-7-4-step-1);\n}\n.btn.disabled[data-v-2558d202], .btn[disabled][data-v-2558d202], .btn[data-v-2558d202]:disabled, .disabled .btn[data-v-2558d202] {\n  background-color: var(--color-button-background-disabled);\n  color: var(--color-text-disabled);\n  pointer-events: none;\n}\n.btn.disabled[data-v-2558d202]:hover, .btn[disabled][data-v-2558d202]:hover, .btn[data-v-2558d202]:disabled:hover, .disabled .btn[data-v-2558d202]:hover {\n  background-color: var(--color-button-background-disabled);\n}\n.btn.destructive[data-v-2558d202]:hover {\n  color: var(--color-semantic-destructive);\n}\n.btn-primary[data-v-2558d202] {\n  height: 34px;\n  color: var(--color-button-text-primary);\n  background-color: var(--color-button-background-primary);\n}\n.btn-primary[disabled][data-v-2558d202] {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-primary[disabled][data-v-2558d202]:hover {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-primary[data-v-2558d202]:hover {\n  background-color: var(--color-button-background-primary-hover);\n}\n.btn-secondary[data-v-2558d202] {\n  height: 34px;\n  color: var(--color-button-text-secondary);\n  background-color: var(--color-button-background-secondary);\n}\n.btn-secondary[disabled][data-v-2558d202] {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-secondary[disabled][data-v-2558d202]:hover {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-secondary[data-v-2558d202]:hover {\n  background-color: var(--color-button-background-secondary-hover);\n}\n.btn-tertiary[data-v-2558d202] {\n  background-color: transparent;\n  padding: 0 1rem;\n  color: var(--color-text-button);\n}\n.btn-tertiary[data-v-2558d202]:hover {\n  color: var(--color-text-button-hover);\n}\n.btn-tertiary.edit[data-v-2558d202], .btn-tertiary.view[data-v-2558d202] {\n  margin-bottom: 1rem;\n}\n.btn-tertiary.delete[data-v-2558d202] {\n  color: var(--color-semantic-destructive);\n}\n.btn-tertiary[disabled][data-v-2558d202] {\n  color: var(--color-text-disabled);\n}\n.btn-quaternary[data-v-2558d202] {\n  height: 34px;\n  color: var(--color-button-text-quaternary);\n  background-color: var(--color-button-background-quaternary);\n}\n.btn-quaternary[disabled][data-v-2558d202] {\n  filter: brightness(0.5);\n}\n.btn-quaternary[data-v-2558d202]:hover {\n  background-color: var(--color-button-background-quaternary-hover);\n}\n.btn-icon[data-v-2558d202] {\n  width: -moz-min-content;\n  width: min-content;\n  aspect-ratio: 1/1;\n  margin: 0;\n  padding: 0.75rem;\n  justify-content: center;\n}\n.btn-icon-only[data-v-2558d202] {\n  background-color: transparent;\n  font-size: 1.5em;\n  aspect-ratio: 1;\n  height: calc(2em + 0.6rem);\n  max-height: 34px;\n  color: inherit;\n  padding: 0.3rem;\n  justify-content: center;\n}\n.btn-icon-only.destructive[data-v-2558d202]:hover {\n  color: var(--color-semantic-destructive);\n}\n.btn svg[data-v-2558d202] {\n  pointer-events: none;\n}\n.dismiss[data-v-2558d202] {\n  font-size: 2.5rem;\n  cursor: pointer;\n  position: absolute;\n  top: 1.3rem;\n  right: 1.3rem;\n  border: inherit solid 0.1rem;\n  stroke-width: 2.5rem;\n  stroke: currentColor;\n}\n@media only screen and (max-width: 749px) {\n.dismiss[data-v-2558d202] {\n    font-size: 3rem;\n    top: 0.5rem;\n    right: 1rem;\n}\n}\nul li[data-v-2558d202],\nol li[data-v-2558d202] {\n  list-style: none;\n}\ntable .unwrap-data-item[data-v-2558d202] {\n  height: 20px;\n}\ntable .colored-square[data-v-2558d202] {\n  --square-color-1: #fff;\n  --square-color-2: #fff;\n  --square-size: 2rem;\n  width: var(--square-size);\n  height: var(--square-size);\n  border-radius: 0.4444444444rem;\n  display: inline-block;\n  background-color: var(--square-color-1);\n  overflow: hidden;\n  margin: auto;\n}\ntable .colored-square.multiple-color[data-v-2558d202] {\n  display: flex;\n  position: relative;\n  background-color: transparent;\n  align-items: center;\n}\ntable .colored-square.multiple-color[data-v-2558d202]::before, table .colored-square.multiple-color[data-v-2558d202]::after {\n  content: \"\";\n  position: absolute;\n}\ntable .colored-square.multiple-color[data-v-2558d202]::before {\n  border-left: calc(var(--square-size) / 1.1) solid var(--square-color-1);\n  border-bottom: calc(var(--square-size) / 0.8) solid transparent;\n}\ntable .colored-square.multiple-color[data-v-2558d202]::after {\n  right: 0;\n  border-top: calc(var(--square-size) / 0.8) solid transparent;\n  border-right: calc(var(--square-size) / 1.1) solid var(--square-color-2);\n}\ntable .order-status-datatable-badge[data-v-2558d202] {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  text-align: center;\n}\ntable .order-status-datatable-badge.pending[data-v-2558d202] {\n  background: var(--color-semantic-untouched);\n}\ntable .order-status-datatable-badge.touchups[data-v-2558d202], table .order-status-datatable-badge.photo-processing[data-v-2558d202], table .order-status-datatable-badge.ready-to-print[data-v-2558d202], table .order-status-datatable-badge.printing-packaging[data-v-2558d202] {\n  background: var(--color-semantic-progress);\n}\ntable .order-status-datatable-badge.ready-to-ship[data-v-2558d202] {\n  background: var(--color-semantic-waiting);\n  color: var(--color-text-normal-reversed);\n}\ntable .order-status-datatable-badge.completed[data-v-2558d202] {\n  background: var(--color-semantic-success);\n}\ntable .order-status-datatable-badge.error[data-v-2558d202], table .order-status-datatable-badge.cancelled[data-v-2558d202], table .order-status-datatable-badge.correction-requested[data-v-2558d202] {\n  background: var(--color-semantic-error);\n}\n.hidden[data-v-2558d202] {\n  position: absolute !important;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n}\n.help[data-v-2558d202], .help-text[data-v-2558d202] {\n  display: inline;\n  height: inherit;\n  font-size: 1.6rem;\n  --font-weight: 300;\n  white-space: pre-wrap;\n  margin: 1.2rem 0 1.8rem;\n}\n.help-bubble[data-v-2558d202] {\n  background-color: var(--color-semantic-info) !important;\n}\n.top-spaced[data-v-2558d202] {\n  margin-top: auto;\n}\n.right-spaced[data-v-2558d202] {\n  margin-right: auto;\n}\n.bottom-spaced[data-v-2558d202] {\n  margin-bottom: auto;\n}\n.left-spaced[data-v-2558d202] {\n  margin-left: auto;\n}\n.no-wrap[data-v-2558d202] {\n  white-space: nowrap;\n}\n.text-overflow[data-v-2558d202] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ellipsis-menu[data-v-2558d202] {\n  display: flex;\n  gap: 1rem;\n}\n.ellipsis-menu .popup-trigger[data-v-2558d202] {\n  display: inline-flex;\n  justify-content: center;\n  width: 3.5rem;\n  padding: 1.5rem;\n}\n.popup-menu-container[data-v-2558d202] {\n  position: relative;\n}\n.popup-menu-container.opened .popup-trigger[data-v-2558d202] {\n  color: var(--color-text-normal);\n  background-color: var(--color-background-lighter);\n  border-radius: 0.8rem 0.8rem 0 0;\n  border-color: transparent;\n}\n.popup-menu-container.opened .popup-menu[data-v-2558d202] {\n  opacity: 1;\n  display: block;\n  pointer-events: all;\n}\n.popup-menu-container .popup-menu[data-v-2558d202] {\n  position: absolute;\n  right: 0;\n  padding: 1rem 0;\n  background-color: var(--color-background-lighter);\n  z-index: 1000;\n  border-radius: 0.8rem 0 0.8rem 0.8rem;\n  box-shadow: oklab(from var(--color-primary-6) l a b/0.5) 0 0 0.5rem;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s, display 0.3s ease-in-out;\n  transition-behavior: allow-discrete;\n}\n.popup-menu-container .popup-menu button[data-v-2558d202] {\n  width: 100%;\n  padding: 1rem;\n  white-space: nowrap;\n  border-radius: 0;\n  border: none;\n  text-transform: none;\n  font-weight: normal;\n  font-size: 1.6rem;\n  color: var(--color-text-primary);\n}\n.popup-menu-container .popup-menu button[data-v-2558d202]:hover {\n  background-color: oklch(from var(--color-background-lighter) calc(l + 0.05) c h);\n  border: none;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght@8..144,-10..0,25..151,100..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Schoolbell&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght@8..144,-10..0,25..151,100..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Schoolbell&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* START VARIABLES */\n[data-v-42b083b1]:root {\n  --font-weight: 400;\n  --font-width: 100;\n  --font-slant: 0;\n  --font-variation-settings:\n          \"slnt\" var(--font-slant),\n          \"wdth\" var(--font-width),\n          \"GRAD\" 0,\n          \"XTRA\" 468,\n          \"YOPQ\" 79,\n          \"YTAS\" 750,\n          \"YTDE\" -203,\n          \"YTFI\" 738,\n          \"YTLC\" 514,\n          \"YTUC\" 712;\n  font-size: 62.5%;\n  font-family: \"Roboto Flex\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: var(--font-weight);\n  font-style: normal;\n  font-variation-settings: var(--font-variation-settings);\n}\n[data-v-42b083b1]:root {\n  --color-primary-1: hsl(32, 85%, 63%);\n  --color-primary-1-h: 32;\n  --color-primary-1-s: 85%;\n  --color-primary-1-l: 63%;\n  --color-mix-1-2-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-1-2-step-1-h: 33.25;\n  --color-mix-1-2-step-1-s: 83.75%;\n  --color-mix-1-2-step-1-l: 71.25%;\n  --color-mix-1-2-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-1-2-step-2-h: 34.5;\n  --color-mix-1-2-step-2-s: 82.5%;\n  --color-mix-1-2-step-2-l: 79.5%;\n  --color-mix-1-2-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-1-2-step-3-h: 35.75;\n  --color-mix-1-2-step-3-s: 81.25%;\n  --color-mix-1-2-step-3-l: 87.75%;\n  --color-mix-1-3-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-1-3-step-1-h: 33.25;\n  --color-mix-1-3-step-1-s: 75.5%;\n  --color-mix-1-3-step-1-l: 68.5%;\n  --color-mix-1-3-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-1-3-step-2-h: 34.5;\n  --color-mix-1-3-step-2-s: 66%;\n  --color-mix-1-3-step-2-l: 74%;\n  --color-mix-1-3-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-1-3-step-3-h: 35.75;\n  --color-mix-1-3-step-3-s: 56.5%;\n  --color-mix-1-3-step-3-l: 79.5%;\n  --color-mix-1-4-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-1-4-step-1-h: 46.25;\n  --color-mix-1-4-step-1-s: 74.25%;\n  --color-mix-1-4-step-1-l: 60%;\n  --color-mix-1-4-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-1-4-step-2-h: 60.5;\n  --color-mix-1-4-step-2-s: 63.5%;\n  --color-mix-1-4-step-2-l: 57%;\n  --color-mix-1-4-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-1-4-step-3-h: 74.75;\n  --color-mix-1-4-step-3-s: 52.75%;\n  --color-mix-1-4-step-3-l: 54%;\n  --color-mix-1-5-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-1-5-step-1-h: 56.5;\n  --color-mix-1-5-step-1-s: 65%;\n  --color-mix-1-5-step-1-l: 53.75%;\n  --color-mix-1-5-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-1-5-step-2-h: 81;\n  --color-mix-1-5-step-2-s: 45%;\n  --color-mix-1-5-step-2-l: 44.5%;\n  --color-mix-1-5-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-1-5-step-3-h: 105.5;\n  --color-mix-1-5-step-3-s: 25%;\n  --color-mix-1-5-step-3-l: 35.25%;\n  --color-mix-1-6-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-1-6-step-1-h: 32;\n  --color-mix-1-6-step-1-s: 21.25%;\n  --color-mix-1-6-step-1-l: 15.75%;\n  --color-mix-1-6-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-1-6-step-2-h: 32;\n  --color-mix-1-6-step-2-s: 42.5%;\n  --color-mix-1-6-step-2-l: 31.5%;\n  --color-mix-1-6-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-1-6-step-3-h: 32;\n  --color-mix-1-6-step-3-s: 63.75%;\n  --color-mix-1-6-step-3-l: 47.25%;\n  --color-mix-1-7-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-1-7-step-1-h: 32;\n  --color-mix-1-7-step-1-s: 21.25%;\n  --color-mix-1-7-step-1-l: 90.75%;\n  --color-mix-1-7-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-1-7-step-2-h: 32;\n  --color-mix-1-7-step-2-s: 42.5%;\n  --color-mix-1-7-step-2-l: 81.5%;\n  --color-mix-1-7-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-1-7-step-3-h: 32;\n  --color-mix-1-7-step-3-s: 63.75%;\n  --color-mix-1-7-step-3-l: 72.25%;\n  --color-primary-2: hsl(37, 80%, 96%);\n  --color-primary-2-h: 37;\n  --color-primary-2-s: 80%;\n  --color-primary-2-l: 96%;\n  --color-mix-2-1-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-2-1-step-1-h: 33.25;\n  --color-mix-2-1-step-1-s: 83.75%;\n  --color-mix-2-1-step-1-l: 71.25%;\n  --color-mix-2-1-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-2-1-step-2-h: 34.5;\n  --color-mix-2-1-step-2-s: 82.5%;\n  --color-mix-2-1-step-2-l: 79.5%;\n  --color-mix-2-1-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-2-1-step-3-h: 35.75;\n  --color-mix-2-1-step-3-s: 81.25%;\n  --color-mix-2-1-step-3-l: 87.75%;\n  --color-mix-2-3-step-1: hsl(37, 55.25%, 87.75%);\n  --color-mix-2-3-step-1-h: 37;\n  --color-mix-2-3-step-1-s: 55.25%;\n  --color-mix-2-3-step-1-l: 87.75%;\n  --color-mix-2-3-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-2-3-step-2-h: 37;\n  --color-mix-2-3-step-2-s: 63.5%;\n  --color-mix-2-3-step-2-l: 90.5%;\n  --color-mix-2-3-step-3: hsl(37, 71.75%, 93.25%);\n  --color-mix-2-3-step-3-h: 37;\n  --color-mix-2-3-step-3-s: 71.75%;\n  --color-mix-2-3-step-3-l: 93.25%;\n  --color-mix-2-4-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-2-4-step-1-h: 50;\n  --color-mix-2-4-step-1-s: 70.5%;\n  --color-mix-2-4-step-1-l: 84.75%;\n  --color-mix-2-4-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-2-4-step-2-h: 63;\n  --color-mix-2-4-step-2-s: 61%;\n  --color-mix-2-4-step-2-l: 73.5%;\n  --color-mix-2-4-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-2-4-step-3-h: 76;\n  --color-mix-2-4-step-3-s: 51.5%;\n  --color-mix-2-4-step-3-l: 62.25%;\n  --color-mix-2-5-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-2-5-step-1-h: 60.25;\n  --color-mix-2-5-step-1-s: 61.25%;\n  --color-mix-2-5-step-1-l: 78.5%;\n  --color-mix-2-5-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-2-5-step-2-h: 83.5;\n  --color-mix-2-5-step-2-s: 42.5%;\n  --color-mix-2-5-step-2-l: 61%;\n  --color-mix-2-5-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-2-5-step-3-h: 106.75;\n  --color-mix-2-5-step-3-s: 23.75%;\n  --color-mix-2-5-step-3-l: 43.5%;\n  --color-mix-2-6-step-1: hsl(37, 20%, 24%);\n  --color-mix-2-6-step-1-h: 37;\n  --color-mix-2-6-step-1-s: 20%;\n  --color-mix-2-6-step-1-l: 24%;\n  --color-mix-2-6-step-2: hsl(37, 40%, 48%);\n  --color-mix-2-6-step-2-h: 37;\n  --color-mix-2-6-step-2-s: 40%;\n  --color-mix-2-6-step-2-l: 48%;\n  --color-mix-2-6-step-3: hsl(37, 60%, 72%);\n  --color-mix-2-6-step-3-h: 37;\n  --color-mix-2-6-step-3-s: 60%;\n  --color-mix-2-6-step-3-l: 72%;\n  --color-mix-2-7-step-1: hsl(37, 20%, 99%);\n  --color-mix-2-7-step-1-h: 37;\n  --color-mix-2-7-step-1-s: 20%;\n  --color-mix-2-7-step-1-l: 99%;\n  --color-mix-2-7-step-2: hsl(37, 40%, 98%);\n  --color-mix-2-7-step-2-h: 37;\n  --color-mix-2-7-step-2-s: 40%;\n  --color-mix-2-7-step-2-l: 98%;\n  --color-mix-2-7-step-3: hsl(37, 60%, 97%);\n  --color-mix-2-7-step-3-h: 37;\n  --color-mix-2-7-step-3-s: 60%;\n  --color-mix-2-7-step-3-l: 97%;\n  --color-primary-3: hsl(37, 47%, 85%);\n  --color-primary-3-h: 37;\n  --color-primary-3-s: 47%;\n  --color-primary-3-l: 85%;\n  --color-mix-3-1-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-3-1-step-1-h: 33.25;\n  --color-mix-3-1-step-1-s: 75.5%;\n  --color-mix-3-1-step-1-l: 68.5%;\n  --color-mix-3-1-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-3-1-step-2-h: 34.5;\n  --color-mix-3-1-step-2-s: 66%;\n  --color-mix-3-1-step-2-l: 74%;\n  --color-mix-3-1-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-3-1-step-3-h: 35.75;\n  --color-mix-3-1-step-3-s: 56.5%;\n  --color-mix-3-1-step-3-l: 79.5%;\n  --color-mix-3-2-step-1: hsl(37, 71.75%, 93.25%);\n  --color-mix-3-2-step-1-h: 37;\n  --color-mix-3-2-step-1-s: 71.75%;\n  --color-mix-3-2-step-1-l: 93.25%;\n  --color-mix-3-2-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-3-2-step-2-h: 37;\n  --color-mix-3-2-step-2-s: 63.5%;\n  --color-mix-3-2-step-2-l: 90.5%;\n  --color-mix-3-2-step-3: hsl(37, 55.25%, 87.75%);\n  --color-mix-3-2-step-3-h: 37;\n  --color-mix-3-2-step-3-s: 55.25%;\n  --color-mix-3-2-step-3-l: 87.75%;\n  --color-mix-3-4-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-3-4-step-1-h: 50;\n  --color-mix-3-4-step-1-s: 45.75%;\n  --color-mix-3-4-step-1-l: 76.5%;\n  --color-mix-3-4-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-3-4-step-2-h: 63;\n  --color-mix-3-4-step-2-s: 44.5%;\n  --color-mix-3-4-step-2-l: 68%;\n  --color-mix-3-4-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-3-4-step-3-h: 76;\n  --color-mix-3-4-step-3-s: 43.25%;\n  --color-mix-3-4-step-3-l: 59.5%;\n  --color-mix-3-5-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-3-5-step-1-h: 60.25;\n  --color-mix-3-5-step-1-s: 36.5%;\n  --color-mix-3-5-step-1-l: 70.25%;\n  --color-mix-3-5-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-3-5-step-2-h: 83.5;\n  --color-mix-3-5-step-2-s: 26%;\n  --color-mix-3-5-step-2-l: 55.5%;\n  --color-mix-3-5-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-3-5-step-3-h: 106.75;\n  --color-mix-3-5-step-3-s: 15.5%;\n  --color-mix-3-5-step-3-l: 40.75%;\n  --color-mix-3-6-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-3-6-step-1-h: 37;\n  --color-mix-3-6-step-1-s: 11.75%;\n  --color-mix-3-6-step-1-l: 21.25%;\n  --color-mix-3-6-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-3-6-step-2-h: 37;\n  --color-mix-3-6-step-2-s: 23.5%;\n  --color-mix-3-6-step-2-l: 42.5%;\n  --color-mix-3-6-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-3-6-step-3-h: 37;\n  --color-mix-3-6-step-3-s: 35.25%;\n  --color-mix-3-6-step-3-l: 63.75%;\n  --color-mix-3-7-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-3-7-step-1-h: 37;\n  --color-mix-3-7-step-1-s: 11.75%;\n  --color-mix-3-7-step-1-l: 96.25%;\n  --color-mix-3-7-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-3-7-step-2-h: 37;\n  --color-mix-3-7-step-2-s: 23.5%;\n  --color-mix-3-7-step-2-l: 92.5%;\n  --color-mix-3-7-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-3-7-step-3-h: 37;\n  --color-mix-3-7-step-3-s: 35.25%;\n  --color-mix-3-7-step-3-l: 88.75%;\n  --color-primary-4: hsl(89, 42%, 51%);\n  --color-primary-4-h: 89;\n  --color-primary-4-s: 42%;\n  --color-primary-4-l: 51%;\n  --color-mix-4-1-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-4-1-step-1-h: 46.25;\n  --color-mix-4-1-step-1-s: 74.25%;\n  --color-mix-4-1-step-1-l: 60%;\n  --color-mix-4-1-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-4-1-step-2-h: 60.5;\n  --color-mix-4-1-step-2-s: 63.5%;\n  --color-mix-4-1-step-2-l: 57%;\n  --color-mix-4-1-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-4-1-step-3-h: 74.75;\n  --color-mix-4-1-step-3-s: 52.75%;\n  --color-mix-4-1-step-3-l: 54%;\n  --color-mix-4-2-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-4-2-step-1-h: 50;\n  --color-mix-4-2-step-1-s: 70.5%;\n  --color-mix-4-2-step-1-l: 84.75%;\n  --color-mix-4-2-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-4-2-step-2-h: 63;\n  --color-mix-4-2-step-2-s: 61%;\n  --color-mix-4-2-step-2-l: 73.5%;\n  --color-mix-4-2-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-4-2-step-3-h: 76;\n  --color-mix-4-2-step-3-s: 51.5%;\n  --color-mix-4-2-step-3-l: 62.25%;\n  --color-mix-4-3-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-4-3-step-1-h: 50;\n  --color-mix-4-3-step-1-s: 45.75%;\n  --color-mix-4-3-step-1-l: 76.5%;\n  --color-mix-4-3-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-4-3-step-2-h: 63;\n  --color-mix-4-3-step-2-s: 44.5%;\n  --color-mix-4-3-step-2-l: 68%;\n  --color-mix-4-3-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-4-3-step-3-h: 76;\n  --color-mix-4-3-step-3-s: 43.25%;\n  --color-mix-4-3-step-3-l: 59.5%;\n  --color-mix-4-5-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-4-5-step-1-h: 99.25;\n  --color-mix-4-5-step-1-s: 32.75%;\n  --color-mix-4-5-step-1-l: 44.75%;\n  --color-mix-4-5-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-4-5-step-2-h: 109.5;\n  --color-mix-4-5-step-2-s: 23.5%;\n  --color-mix-4-5-step-2-l: 38.5%;\n  --color-mix-4-5-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-4-5-step-3-h: 119.75;\n  --color-mix-4-5-step-3-s: 14.25%;\n  --color-mix-4-5-step-3-l: 32.25%;\n  --color-mix-4-6-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-4-6-step-1-h: 89;\n  --color-mix-4-6-step-1-s: 10.5%;\n  --color-mix-4-6-step-1-l: 12.75%;\n  --color-mix-4-6-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-4-6-step-2-h: 89;\n  --color-mix-4-6-step-2-s: 21%;\n  --color-mix-4-6-step-2-l: 25.5%;\n  --color-mix-4-6-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-4-6-step-3-h: 89;\n  --color-mix-4-6-step-3-s: 31.5%;\n  --color-mix-4-6-step-3-l: 38.25%;\n  --color-mix-4-7-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-4-7-step-1-h: 89;\n  --color-mix-4-7-step-1-s: 10.5%;\n  --color-mix-4-7-step-1-l: 87.75%;\n  --color-mix-4-7-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-4-7-step-2-h: 89;\n  --color-mix-4-7-step-2-s: 21%;\n  --color-mix-4-7-step-2-l: 75.5%;\n  --color-mix-4-7-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-4-7-step-3-h: 89;\n  --color-mix-4-7-step-3-s: 31.5%;\n  --color-mix-4-7-step-3-l: 63.25%;\n  --color-primary-5: hsl(130, 5%, 26%);\n  --color-primary-5-h: 130;\n  --color-primary-5-s: 5%;\n  --color-primary-5-l: 26%;\n  --color-mix-5-1-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-5-1-step-1-h: 56.5;\n  --color-mix-5-1-step-1-s: 65%;\n  --color-mix-5-1-step-1-l: 53.75%;\n  --color-mix-5-1-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-5-1-step-2-h: 81;\n  --color-mix-5-1-step-2-s: 45%;\n  --color-mix-5-1-step-2-l: 44.5%;\n  --color-mix-5-1-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-5-1-step-3-h: 105.5;\n  --color-mix-5-1-step-3-s: 25%;\n  --color-mix-5-1-step-3-l: 35.25%;\n  --color-mix-5-2-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-5-2-step-1-h: 60.25;\n  --color-mix-5-2-step-1-s: 61.25%;\n  --color-mix-5-2-step-1-l: 78.5%;\n  --color-mix-5-2-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-5-2-step-2-h: 83.5;\n  --color-mix-5-2-step-2-s: 42.5%;\n  --color-mix-5-2-step-2-l: 61%;\n  --color-mix-5-2-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-5-2-step-3-h: 106.75;\n  --color-mix-5-2-step-3-s: 23.75%;\n  --color-mix-5-2-step-3-l: 43.5%;\n  --color-mix-5-3-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-5-3-step-1-h: 60.25;\n  --color-mix-5-3-step-1-s: 36.5%;\n  --color-mix-5-3-step-1-l: 70.25%;\n  --color-mix-5-3-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-5-3-step-2-h: 83.5;\n  --color-mix-5-3-step-2-s: 26%;\n  --color-mix-5-3-step-2-l: 55.5%;\n  --color-mix-5-3-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-5-3-step-3-h: 106.75;\n  --color-mix-5-3-step-3-s: 15.5%;\n  --color-mix-5-3-step-3-l: 40.75%;\n  --color-mix-5-4-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-5-4-step-1-h: 99.25;\n  --color-mix-5-4-step-1-s: 32.75%;\n  --color-mix-5-4-step-1-l: 44.75%;\n  --color-mix-5-4-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-5-4-step-2-h: 109.5;\n  --color-mix-5-4-step-2-s: 23.5%;\n  --color-mix-5-4-step-2-l: 38.5%;\n  --color-mix-5-4-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-5-4-step-3-h: 119.75;\n  --color-mix-5-4-step-3-s: 14.25%;\n  --color-mix-5-4-step-3-l: 32.25%;\n  --color-mix-5-6-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-5-6-step-1-h: 130;\n  --color-mix-5-6-step-1-s: 1.25%;\n  --color-mix-5-6-step-1-l: 6.5%;\n  --color-mix-5-6-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-5-6-step-2-h: 130;\n  --color-mix-5-6-step-2-s: 2.5%;\n  --color-mix-5-6-step-2-l: 13%;\n  --color-mix-5-6-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-5-6-step-3-h: 130;\n  --color-mix-5-6-step-3-s: 3.75%;\n  --color-mix-5-6-step-3-l: 19.5%;\n  --color-mix-5-7-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-5-7-step-1-h: 130;\n  --color-mix-5-7-step-1-s: 1.25%;\n  --color-mix-5-7-step-1-l: 81.5%;\n  --color-mix-5-7-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-5-7-step-2-h: 130;\n  --color-mix-5-7-step-2-s: 2.5%;\n  --color-mix-5-7-step-2-l: 63%;\n  --color-mix-5-7-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-5-7-step-3-h: 130;\n  --color-mix-5-7-step-3-s: 3.75%;\n  --color-mix-5-7-step-3-l: 44.5%;\n  --color-primary-6: hsl(0, 0%, 0%);\n  --color-primary-6-h: 0;\n  --color-primary-6-s: 0%;\n  --color-primary-6-l: 0%;\n  --color-mix-6-1-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-6-1-step-1-h: 32;\n  --color-mix-6-1-step-1-s: 21.25%;\n  --color-mix-6-1-step-1-l: 15.75%;\n  --color-mix-6-1-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-6-1-step-2-h: 32;\n  --color-mix-6-1-step-2-s: 42.5%;\n  --color-mix-6-1-step-2-l: 31.5%;\n  --color-mix-6-1-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-6-1-step-3-h: 32;\n  --color-mix-6-1-step-3-s: 63.75%;\n  --color-mix-6-1-step-3-l: 47.25%;\n  --color-mix-6-2-step-1: hsl(37, 20%, 24%);\n  --color-mix-6-2-step-1-h: 37;\n  --color-mix-6-2-step-1-s: 20%;\n  --color-mix-6-2-step-1-l: 24%;\n  --color-mix-6-2-step-2: hsl(37, 40%, 48%);\n  --color-mix-6-2-step-2-h: 37;\n  --color-mix-6-2-step-2-s: 40%;\n  --color-mix-6-2-step-2-l: 48%;\n  --color-mix-6-2-step-3: hsl(37, 60%, 72%);\n  --color-mix-6-2-step-3-h: 37;\n  --color-mix-6-2-step-3-s: 60%;\n  --color-mix-6-2-step-3-l: 72%;\n  --color-mix-6-3-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-6-3-step-1-h: 37;\n  --color-mix-6-3-step-1-s: 11.75%;\n  --color-mix-6-3-step-1-l: 21.25%;\n  --color-mix-6-3-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-6-3-step-2-h: 37;\n  --color-mix-6-3-step-2-s: 23.5%;\n  --color-mix-6-3-step-2-l: 42.5%;\n  --color-mix-6-3-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-6-3-step-3-h: 37;\n  --color-mix-6-3-step-3-s: 35.25%;\n  --color-mix-6-3-step-3-l: 63.75%;\n  --color-mix-6-4-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-6-4-step-1-h: 89;\n  --color-mix-6-4-step-1-s: 10.5%;\n  --color-mix-6-4-step-1-l: 12.75%;\n  --color-mix-6-4-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-6-4-step-2-h: 89;\n  --color-mix-6-4-step-2-s: 21%;\n  --color-mix-6-4-step-2-l: 25.5%;\n  --color-mix-6-4-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-6-4-step-3-h: 89;\n  --color-mix-6-4-step-3-s: 31.5%;\n  --color-mix-6-4-step-3-l: 38.25%;\n  --color-mix-6-5-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-6-5-step-1-h: 130;\n  --color-mix-6-5-step-1-s: 1.25%;\n  --color-mix-6-5-step-1-l: 6.5%;\n  --color-mix-6-5-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-6-5-step-2-h: 130;\n  --color-mix-6-5-step-2-s: 2.5%;\n  --color-mix-6-5-step-2-l: 13%;\n  --color-mix-6-5-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-6-5-step-3-h: 130;\n  --color-mix-6-5-step-3-s: 3.75%;\n  --color-mix-6-5-step-3-l: 19.5%;\n  --color-mix-6-7-step-1: hsl(0, 0%, 75%);\n  --color-mix-6-7-step-1-h: 0;\n  --color-mix-6-7-step-1-s: 0%;\n  --color-mix-6-7-step-1-l: 75%;\n  --color-mix-6-7-step-2: hsl(0, 0%, 50%);\n  --color-mix-6-7-step-2-h: 0;\n  --color-mix-6-7-step-2-s: 0%;\n  --color-mix-6-7-step-2-l: 50%;\n  --color-mix-6-7-step-3: hsl(0, 0%, 25%);\n  --color-mix-6-7-step-3-h: 0;\n  --color-mix-6-7-step-3-s: 0%;\n  --color-mix-6-7-step-3-l: 25%;\n  --color-primary-7: hsl(0, 0%, 100%);\n  --color-primary-7-h: 0;\n  --color-primary-7-s: 0%;\n  --color-primary-7-l: 100%;\n  --color-mix-7-1-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-7-1-step-1-h: 32;\n  --color-mix-7-1-step-1-s: 21.25%;\n  --color-mix-7-1-step-1-l: 90.75%;\n  --color-mix-7-1-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-7-1-step-2-h: 32;\n  --color-mix-7-1-step-2-s: 42.5%;\n  --color-mix-7-1-step-2-l: 81.5%;\n  --color-mix-7-1-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-7-1-step-3-h: 32;\n  --color-mix-7-1-step-3-s: 63.75%;\n  --color-mix-7-1-step-3-l: 72.25%;\n  --color-mix-7-2-step-1: hsl(37, 20%, 99%);\n  --color-mix-7-2-step-1-h: 37;\n  --color-mix-7-2-step-1-s: 20%;\n  --color-mix-7-2-step-1-l: 99%;\n  --color-mix-7-2-step-2: hsl(37, 40%, 98%);\n  --color-mix-7-2-step-2-h: 37;\n  --color-mix-7-2-step-2-s: 40%;\n  --color-mix-7-2-step-2-l: 98%;\n  --color-mix-7-2-step-3: hsl(37, 60%, 97%);\n  --color-mix-7-2-step-3-h: 37;\n  --color-mix-7-2-step-3-s: 60%;\n  --color-mix-7-2-step-3-l: 97%;\n  --color-mix-7-3-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-7-3-step-1-h: 37;\n  --color-mix-7-3-step-1-s: 11.75%;\n  --color-mix-7-3-step-1-l: 96.25%;\n  --color-mix-7-3-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-7-3-step-2-h: 37;\n  --color-mix-7-3-step-2-s: 23.5%;\n  --color-mix-7-3-step-2-l: 92.5%;\n  --color-mix-7-3-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-7-3-step-3-h: 37;\n  --color-mix-7-3-step-3-s: 35.25%;\n  --color-mix-7-3-step-3-l: 88.75%;\n  --color-mix-7-4-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-7-4-step-1-h: 89;\n  --color-mix-7-4-step-1-s: 10.5%;\n  --color-mix-7-4-step-1-l: 87.75%;\n  --color-mix-7-4-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-7-4-step-2-h: 89;\n  --color-mix-7-4-step-2-s: 21%;\n  --color-mix-7-4-step-2-l: 75.5%;\n  --color-mix-7-4-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-7-4-step-3-h: 89;\n  --color-mix-7-4-step-3-s: 31.5%;\n  --color-mix-7-4-step-3-l: 63.25%;\n  --color-mix-7-5-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-7-5-step-1-h: 130;\n  --color-mix-7-5-step-1-s: 1.25%;\n  --color-mix-7-5-step-1-l: 81.5%;\n  --color-mix-7-5-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-7-5-step-2-h: 130;\n  --color-mix-7-5-step-2-s: 2.5%;\n  --color-mix-7-5-step-2-l: 63%;\n  --color-mix-7-5-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-7-5-step-3-h: 130;\n  --color-mix-7-5-step-3-s: 3.75%;\n  --color-mix-7-5-step-3-l: 44.5%;\n  --color-mix-7-6-step-1: hsl(0, 0%, 25%);\n  --color-mix-7-6-step-1-h: 0;\n  --color-mix-7-6-step-1-s: 0%;\n  --color-mix-7-6-step-1-l: 25%;\n  --color-mix-7-6-step-2: hsl(0, 0%, 50%);\n  --color-mix-7-6-step-2-h: 0;\n  --color-mix-7-6-step-2-s: 0%;\n  --color-mix-7-6-step-2-l: 50%;\n  --color-mix-7-6-step-3: hsl(0, 0%, 75%);\n  --color-mix-7-6-step-3-h: 0;\n  --color-mix-7-6-step-3-s: 0%;\n  --color-mix-7-6-step-3-l: 75%;\n  --color-primary-8: hsl(46, 70%, 64%);\n  --color-primary-8-h: 46;\n  --color-primary-8-s: 70%;\n  --color-primary-8-l: 64%;\n}\n[data-theme-color=light][data-v-42b083b1] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(36, 14%, 79%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-7-h),\n                  0%,\n                  var(--color-primary-7-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-5);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-5);\n  --color-background-page-1: var(--color-primary-7);\n  --color-background-page-2: var(--color-mix-7-3-step-1);\n  --color-background-page-3: var(--color-primary-7);\n  --color-text-normal: var(--color-mix-7-6-step-1);\n  --color-text-normal-reversed: var(--color-primary-2);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-5-7-step-3);\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-text-highlight: var(--color-primary-2);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=light] input[data-v-42b083b1] {\n  color-scheme: light;\n}\n[data-theme-color=light][data-theme-type=line][data-v-42b083b1] {\n  --color-background-base: var(--color-primary-7);\n}\n[data-theme-color=light][data-theme-type=block][data-v-42b083b1] {\n  --color-background-base: var(--color-mix-2-3-step-3);\n}\n[data-theme-color=dark][data-v-42b083b1] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(138, 8%, 49%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-base: var(--color-mix-6-5-step-2);\n  --color-background-lighter: var(--color-primary-5);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-2-h),\n                  0%,\n                  var(--color-primary-2-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-2);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-2);\n  --color-background-page-1: var(--color-mix-6-5-step-2);\n  --color-background-page-2: var(--color-mix-7-6-step-1);\n  --color-background-page-3: var(--color-mix-5-6-step-3);\n  --color-text-normal: var(--color-primary-2);\n  --color-text-normal-reversed: var(--color-primary-5);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-6-7-step-2);\n  --color-text-highlight: var(--color-primary-5);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=dark] input[data-v-42b083b1] {\n  color-scheme: dark;\n}\n\n/* END VARIABLES */\n/*============================================================================\n  line-height: line-height(28, 18)\n  Expected arguments are px values and unitless.\n\n  Make each line the desired height(1st arg) base on the current font size(2nd arg)\n==============================================================================*/\n/* START VARIABLES */\n[data-v-42b083b1]:root {\n  --font-weight: 400;\n  --font-width: 100;\n  --font-slant: 0;\n  --font-variation-settings:\n          \"slnt\" var(--font-slant),\n          \"wdth\" var(--font-width),\n          \"GRAD\" 0,\n          \"XTRA\" 468,\n          \"YOPQ\" 79,\n          \"YTAS\" 750,\n          \"YTDE\" -203,\n          \"YTFI\" 738,\n          \"YTLC\" 514,\n          \"YTUC\" 712;\n  font-size: 62.5%;\n  font-family: \"Roboto Flex\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: var(--font-weight);\n  font-style: normal;\n  font-variation-settings: var(--font-variation-settings);\n}\n[data-v-42b083b1]:root {\n  --color-primary-1: hsl(32, 85%, 63%);\n  --color-primary-1-h: 32;\n  --color-primary-1-s: 85%;\n  --color-primary-1-l: 63%;\n  --color-mix-1-2-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-1-2-step-1-h: 33.25;\n  --color-mix-1-2-step-1-s: 83.75%;\n  --color-mix-1-2-step-1-l: 71.25%;\n  --color-mix-1-2-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-1-2-step-2-h: 34.5;\n  --color-mix-1-2-step-2-s: 82.5%;\n  --color-mix-1-2-step-2-l: 79.5%;\n  --color-mix-1-2-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-1-2-step-3-h: 35.75;\n  --color-mix-1-2-step-3-s: 81.25%;\n  --color-mix-1-2-step-3-l: 87.75%;\n  --color-mix-1-3-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-1-3-step-1-h: 33.25;\n  --color-mix-1-3-step-1-s: 75.5%;\n  --color-mix-1-3-step-1-l: 68.5%;\n  --color-mix-1-3-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-1-3-step-2-h: 34.5;\n  --color-mix-1-3-step-2-s: 66%;\n  --color-mix-1-3-step-2-l: 74%;\n  --color-mix-1-3-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-1-3-step-3-h: 35.75;\n  --color-mix-1-3-step-3-s: 56.5%;\n  --color-mix-1-3-step-3-l: 79.5%;\n  --color-mix-1-4-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-1-4-step-1-h: 46.25;\n  --color-mix-1-4-step-1-s: 74.25%;\n  --color-mix-1-4-step-1-l: 60%;\n  --color-mix-1-4-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-1-4-step-2-h: 60.5;\n  --color-mix-1-4-step-2-s: 63.5%;\n  --color-mix-1-4-step-2-l: 57%;\n  --color-mix-1-4-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-1-4-step-3-h: 74.75;\n  --color-mix-1-4-step-3-s: 52.75%;\n  --color-mix-1-4-step-3-l: 54%;\n  --color-mix-1-5-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-1-5-step-1-h: 56.5;\n  --color-mix-1-5-step-1-s: 65%;\n  --color-mix-1-5-step-1-l: 53.75%;\n  --color-mix-1-5-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-1-5-step-2-h: 81;\n  --color-mix-1-5-step-2-s: 45%;\n  --color-mix-1-5-step-2-l: 44.5%;\n  --color-mix-1-5-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-1-5-step-3-h: 105.5;\n  --color-mix-1-5-step-3-s: 25%;\n  --color-mix-1-5-step-3-l: 35.25%;\n  --color-mix-1-6-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-1-6-step-1-h: 32;\n  --color-mix-1-6-step-1-s: 21.25%;\n  --color-mix-1-6-step-1-l: 15.75%;\n  --color-mix-1-6-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-1-6-step-2-h: 32;\n  --color-mix-1-6-step-2-s: 42.5%;\n  --color-mix-1-6-step-2-l: 31.5%;\n  --color-mix-1-6-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-1-6-step-3-h: 32;\n  --color-mix-1-6-step-3-s: 63.75%;\n  --color-mix-1-6-step-3-l: 47.25%;\n  --color-mix-1-7-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-1-7-step-1-h: 32;\n  --color-mix-1-7-step-1-s: 21.25%;\n  --color-mix-1-7-step-1-l: 90.75%;\n  --color-mix-1-7-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-1-7-step-2-h: 32;\n  --color-mix-1-7-step-2-s: 42.5%;\n  --color-mix-1-7-step-2-l: 81.5%;\n  --color-mix-1-7-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-1-7-step-3-h: 32;\n  --color-mix-1-7-step-3-s: 63.75%;\n  --color-mix-1-7-step-3-l: 72.25%;\n  --color-primary-2: hsl(37, 80%, 96%);\n  --color-primary-2-h: 37;\n  --color-primary-2-s: 80%;\n  --color-primary-2-l: 96%;\n  --color-mix-2-1-step-1: hsl(33.25, 83.75%, 71.25%);\n  --color-mix-2-1-step-1-h: 33.25;\n  --color-mix-2-1-step-1-s: 83.75%;\n  --color-mix-2-1-step-1-l: 71.25%;\n  --color-mix-2-1-step-2: hsl(34.5, 82.5%, 79.5%);\n  --color-mix-2-1-step-2-h: 34.5;\n  --color-mix-2-1-step-2-s: 82.5%;\n  --color-mix-2-1-step-2-l: 79.5%;\n  --color-mix-2-1-step-3: hsl(35.75, 81.25%, 87.75%);\n  --color-mix-2-1-step-3-h: 35.75;\n  --color-mix-2-1-step-3-s: 81.25%;\n  --color-mix-2-1-step-3-l: 87.75%;\n  --color-mix-2-3-step-1: hsl(37, 55.25%, 87.75%);\n  --color-mix-2-3-step-1-h: 37;\n  --color-mix-2-3-step-1-s: 55.25%;\n  --color-mix-2-3-step-1-l: 87.75%;\n  --color-mix-2-3-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-2-3-step-2-h: 37;\n  --color-mix-2-3-step-2-s: 63.5%;\n  --color-mix-2-3-step-2-l: 90.5%;\n  --color-mix-2-3-step-3: hsl(37, 71.75%, 93.25%);\n  --color-mix-2-3-step-3-h: 37;\n  --color-mix-2-3-step-3-s: 71.75%;\n  --color-mix-2-3-step-3-l: 93.25%;\n  --color-mix-2-4-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-2-4-step-1-h: 50;\n  --color-mix-2-4-step-1-s: 70.5%;\n  --color-mix-2-4-step-1-l: 84.75%;\n  --color-mix-2-4-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-2-4-step-2-h: 63;\n  --color-mix-2-4-step-2-s: 61%;\n  --color-mix-2-4-step-2-l: 73.5%;\n  --color-mix-2-4-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-2-4-step-3-h: 76;\n  --color-mix-2-4-step-3-s: 51.5%;\n  --color-mix-2-4-step-3-l: 62.25%;\n  --color-mix-2-5-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-2-5-step-1-h: 60.25;\n  --color-mix-2-5-step-1-s: 61.25%;\n  --color-mix-2-5-step-1-l: 78.5%;\n  --color-mix-2-5-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-2-5-step-2-h: 83.5;\n  --color-mix-2-5-step-2-s: 42.5%;\n  --color-mix-2-5-step-2-l: 61%;\n  --color-mix-2-5-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-2-5-step-3-h: 106.75;\n  --color-mix-2-5-step-3-s: 23.75%;\n  --color-mix-2-5-step-3-l: 43.5%;\n  --color-mix-2-6-step-1: hsl(37, 20%, 24%);\n  --color-mix-2-6-step-1-h: 37;\n  --color-mix-2-6-step-1-s: 20%;\n  --color-mix-2-6-step-1-l: 24%;\n  --color-mix-2-6-step-2: hsl(37, 40%, 48%);\n  --color-mix-2-6-step-2-h: 37;\n  --color-mix-2-6-step-2-s: 40%;\n  --color-mix-2-6-step-2-l: 48%;\n  --color-mix-2-6-step-3: hsl(37, 60%, 72%);\n  --color-mix-2-6-step-3-h: 37;\n  --color-mix-2-6-step-3-s: 60%;\n  --color-mix-2-6-step-3-l: 72%;\n  --color-mix-2-7-step-1: hsl(37, 20%, 99%);\n  --color-mix-2-7-step-1-h: 37;\n  --color-mix-2-7-step-1-s: 20%;\n  --color-mix-2-7-step-1-l: 99%;\n  --color-mix-2-7-step-2: hsl(37, 40%, 98%);\n  --color-mix-2-7-step-2-h: 37;\n  --color-mix-2-7-step-2-s: 40%;\n  --color-mix-2-7-step-2-l: 98%;\n  --color-mix-2-7-step-3: hsl(37, 60%, 97%);\n  --color-mix-2-7-step-3-h: 37;\n  --color-mix-2-7-step-3-s: 60%;\n  --color-mix-2-7-step-3-l: 97%;\n  --color-primary-3: hsl(37, 47%, 85%);\n  --color-primary-3-h: 37;\n  --color-primary-3-s: 47%;\n  --color-primary-3-l: 85%;\n  --color-mix-3-1-step-1: hsl(33.25, 75.5%, 68.5%);\n  --color-mix-3-1-step-1-h: 33.25;\n  --color-mix-3-1-step-1-s: 75.5%;\n  --color-mix-3-1-step-1-l: 68.5%;\n  --color-mix-3-1-step-2: hsl(34.5, 66%, 74%);\n  --color-mix-3-1-step-2-h: 34.5;\n  --color-mix-3-1-step-2-s: 66%;\n  --color-mix-3-1-step-2-l: 74%;\n  --color-mix-3-1-step-3: hsl(35.75, 56.5%, 79.5%);\n  --color-mix-3-1-step-3-h: 35.75;\n  --color-mix-3-1-step-3-s: 56.5%;\n  --color-mix-3-1-step-3-l: 79.5%;\n  --color-mix-3-2-step-1: hsl(37, 71.75%, 93.25%);\n  --color-mix-3-2-step-1-h: 37;\n  --color-mix-3-2-step-1-s: 71.75%;\n  --color-mix-3-2-step-1-l: 93.25%;\n  --color-mix-3-2-step-2: hsl(37, 63.5%, 90.5%);\n  --color-mix-3-2-step-2-h: 37;\n  --color-mix-3-2-step-2-s: 63.5%;\n  --color-mix-3-2-step-2-l: 90.5%;\n  --color-mix-3-2-step-3: hsl(37, 55.25%, 87.75%);\n  --color-mix-3-2-step-3-h: 37;\n  --color-mix-3-2-step-3-s: 55.25%;\n  --color-mix-3-2-step-3-l: 87.75%;\n  --color-mix-3-4-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-3-4-step-1-h: 50;\n  --color-mix-3-4-step-1-s: 45.75%;\n  --color-mix-3-4-step-1-l: 76.5%;\n  --color-mix-3-4-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-3-4-step-2-h: 63;\n  --color-mix-3-4-step-2-s: 44.5%;\n  --color-mix-3-4-step-2-l: 68%;\n  --color-mix-3-4-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-3-4-step-3-h: 76;\n  --color-mix-3-4-step-3-s: 43.25%;\n  --color-mix-3-4-step-3-l: 59.5%;\n  --color-mix-3-5-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-3-5-step-1-h: 60.25;\n  --color-mix-3-5-step-1-s: 36.5%;\n  --color-mix-3-5-step-1-l: 70.25%;\n  --color-mix-3-5-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-3-5-step-2-h: 83.5;\n  --color-mix-3-5-step-2-s: 26%;\n  --color-mix-3-5-step-2-l: 55.5%;\n  --color-mix-3-5-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-3-5-step-3-h: 106.75;\n  --color-mix-3-5-step-3-s: 15.5%;\n  --color-mix-3-5-step-3-l: 40.75%;\n  --color-mix-3-6-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-3-6-step-1-h: 37;\n  --color-mix-3-6-step-1-s: 11.75%;\n  --color-mix-3-6-step-1-l: 21.25%;\n  --color-mix-3-6-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-3-6-step-2-h: 37;\n  --color-mix-3-6-step-2-s: 23.5%;\n  --color-mix-3-6-step-2-l: 42.5%;\n  --color-mix-3-6-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-3-6-step-3-h: 37;\n  --color-mix-3-6-step-3-s: 35.25%;\n  --color-mix-3-6-step-3-l: 63.75%;\n  --color-mix-3-7-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-3-7-step-1-h: 37;\n  --color-mix-3-7-step-1-s: 11.75%;\n  --color-mix-3-7-step-1-l: 96.25%;\n  --color-mix-3-7-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-3-7-step-2-h: 37;\n  --color-mix-3-7-step-2-s: 23.5%;\n  --color-mix-3-7-step-2-l: 92.5%;\n  --color-mix-3-7-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-3-7-step-3-h: 37;\n  --color-mix-3-7-step-3-s: 35.25%;\n  --color-mix-3-7-step-3-l: 88.75%;\n  --color-primary-4: hsl(89, 42%, 51%);\n  --color-primary-4-h: 89;\n  --color-primary-4-s: 42%;\n  --color-primary-4-l: 51%;\n  --color-mix-4-1-step-1: hsl(46.25, 74.25%, 60%);\n  --color-mix-4-1-step-1-h: 46.25;\n  --color-mix-4-1-step-1-s: 74.25%;\n  --color-mix-4-1-step-1-l: 60%;\n  --color-mix-4-1-step-2: hsl(60.5, 63.5%, 57%);\n  --color-mix-4-1-step-2-h: 60.5;\n  --color-mix-4-1-step-2-s: 63.5%;\n  --color-mix-4-1-step-2-l: 57%;\n  --color-mix-4-1-step-3: hsl(74.75, 52.75%, 54%);\n  --color-mix-4-1-step-3-h: 74.75;\n  --color-mix-4-1-step-3-s: 52.75%;\n  --color-mix-4-1-step-3-l: 54%;\n  --color-mix-4-2-step-1: hsl(50, 70.5%, 84.75%);\n  --color-mix-4-2-step-1-h: 50;\n  --color-mix-4-2-step-1-s: 70.5%;\n  --color-mix-4-2-step-1-l: 84.75%;\n  --color-mix-4-2-step-2: hsl(63, 61%, 73.5%);\n  --color-mix-4-2-step-2-h: 63;\n  --color-mix-4-2-step-2-s: 61%;\n  --color-mix-4-2-step-2-l: 73.5%;\n  --color-mix-4-2-step-3: hsl(76, 51.5%, 62.25%);\n  --color-mix-4-2-step-3-h: 76;\n  --color-mix-4-2-step-3-s: 51.5%;\n  --color-mix-4-2-step-3-l: 62.25%;\n  --color-mix-4-3-step-1: hsl(50, 45.75%, 76.5%);\n  --color-mix-4-3-step-1-h: 50;\n  --color-mix-4-3-step-1-s: 45.75%;\n  --color-mix-4-3-step-1-l: 76.5%;\n  --color-mix-4-3-step-2: hsl(63, 44.5%, 68%);\n  --color-mix-4-3-step-2-h: 63;\n  --color-mix-4-3-step-2-s: 44.5%;\n  --color-mix-4-3-step-2-l: 68%;\n  --color-mix-4-3-step-3: hsl(76, 43.25%, 59.5%);\n  --color-mix-4-3-step-3-h: 76;\n  --color-mix-4-3-step-3-s: 43.25%;\n  --color-mix-4-3-step-3-l: 59.5%;\n  --color-mix-4-5-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-4-5-step-1-h: 99.25;\n  --color-mix-4-5-step-1-s: 32.75%;\n  --color-mix-4-5-step-1-l: 44.75%;\n  --color-mix-4-5-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-4-5-step-2-h: 109.5;\n  --color-mix-4-5-step-2-s: 23.5%;\n  --color-mix-4-5-step-2-l: 38.5%;\n  --color-mix-4-5-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-4-5-step-3-h: 119.75;\n  --color-mix-4-5-step-3-s: 14.25%;\n  --color-mix-4-5-step-3-l: 32.25%;\n  --color-mix-4-6-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-4-6-step-1-h: 89;\n  --color-mix-4-6-step-1-s: 10.5%;\n  --color-mix-4-6-step-1-l: 12.75%;\n  --color-mix-4-6-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-4-6-step-2-h: 89;\n  --color-mix-4-6-step-2-s: 21%;\n  --color-mix-4-6-step-2-l: 25.5%;\n  --color-mix-4-6-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-4-6-step-3-h: 89;\n  --color-mix-4-6-step-3-s: 31.5%;\n  --color-mix-4-6-step-3-l: 38.25%;\n  --color-mix-4-7-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-4-7-step-1-h: 89;\n  --color-mix-4-7-step-1-s: 10.5%;\n  --color-mix-4-7-step-1-l: 87.75%;\n  --color-mix-4-7-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-4-7-step-2-h: 89;\n  --color-mix-4-7-step-2-s: 21%;\n  --color-mix-4-7-step-2-l: 75.5%;\n  --color-mix-4-7-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-4-7-step-3-h: 89;\n  --color-mix-4-7-step-3-s: 31.5%;\n  --color-mix-4-7-step-3-l: 63.25%;\n  --color-primary-5: hsl(130, 5%, 26%);\n  --color-primary-5-h: 130;\n  --color-primary-5-s: 5%;\n  --color-primary-5-l: 26%;\n  --color-mix-5-1-step-1: hsl(56.5, 65%, 53.75%);\n  --color-mix-5-1-step-1-h: 56.5;\n  --color-mix-5-1-step-1-s: 65%;\n  --color-mix-5-1-step-1-l: 53.75%;\n  --color-mix-5-1-step-2: hsl(81, 45%, 44.5%);\n  --color-mix-5-1-step-2-h: 81;\n  --color-mix-5-1-step-2-s: 45%;\n  --color-mix-5-1-step-2-l: 44.5%;\n  --color-mix-5-1-step-3: hsl(105.5, 25%, 35.25%);\n  --color-mix-5-1-step-3-h: 105.5;\n  --color-mix-5-1-step-3-s: 25%;\n  --color-mix-5-1-step-3-l: 35.25%;\n  --color-mix-5-2-step-1: hsl(60.25, 61.25%, 78.5%);\n  --color-mix-5-2-step-1-h: 60.25;\n  --color-mix-5-2-step-1-s: 61.25%;\n  --color-mix-5-2-step-1-l: 78.5%;\n  --color-mix-5-2-step-2: hsl(83.5, 42.5%, 61%);\n  --color-mix-5-2-step-2-h: 83.5;\n  --color-mix-5-2-step-2-s: 42.5%;\n  --color-mix-5-2-step-2-l: 61%;\n  --color-mix-5-2-step-3: hsl(106.75, 23.75%, 43.5%);\n  --color-mix-5-2-step-3-h: 106.75;\n  --color-mix-5-2-step-3-s: 23.75%;\n  --color-mix-5-2-step-3-l: 43.5%;\n  --color-mix-5-3-step-1: hsl(60.25, 36.5%, 70.25%);\n  --color-mix-5-3-step-1-h: 60.25;\n  --color-mix-5-3-step-1-s: 36.5%;\n  --color-mix-5-3-step-1-l: 70.25%;\n  --color-mix-5-3-step-2: hsl(83.5, 26%, 55.5%);\n  --color-mix-5-3-step-2-h: 83.5;\n  --color-mix-5-3-step-2-s: 26%;\n  --color-mix-5-3-step-2-l: 55.5%;\n  --color-mix-5-3-step-3: hsl(106.75, 15.5%, 40.75%);\n  --color-mix-5-3-step-3-h: 106.75;\n  --color-mix-5-3-step-3-s: 15.5%;\n  --color-mix-5-3-step-3-l: 40.75%;\n  --color-mix-5-4-step-1: hsl(99.25, 32.75%, 44.75%);\n  --color-mix-5-4-step-1-h: 99.25;\n  --color-mix-5-4-step-1-s: 32.75%;\n  --color-mix-5-4-step-1-l: 44.75%;\n  --color-mix-5-4-step-2: hsl(109.5, 23.5%, 38.5%);\n  --color-mix-5-4-step-2-h: 109.5;\n  --color-mix-5-4-step-2-s: 23.5%;\n  --color-mix-5-4-step-2-l: 38.5%;\n  --color-mix-5-4-step-3: hsl(119.75, 14.25%, 32.25%);\n  --color-mix-5-4-step-3-h: 119.75;\n  --color-mix-5-4-step-3-s: 14.25%;\n  --color-mix-5-4-step-3-l: 32.25%;\n  --color-mix-5-6-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-5-6-step-1-h: 130;\n  --color-mix-5-6-step-1-s: 1.25%;\n  --color-mix-5-6-step-1-l: 6.5%;\n  --color-mix-5-6-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-5-6-step-2-h: 130;\n  --color-mix-5-6-step-2-s: 2.5%;\n  --color-mix-5-6-step-2-l: 13%;\n  --color-mix-5-6-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-5-6-step-3-h: 130;\n  --color-mix-5-6-step-3-s: 3.75%;\n  --color-mix-5-6-step-3-l: 19.5%;\n  --color-mix-5-7-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-5-7-step-1-h: 130;\n  --color-mix-5-7-step-1-s: 1.25%;\n  --color-mix-5-7-step-1-l: 81.5%;\n  --color-mix-5-7-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-5-7-step-2-h: 130;\n  --color-mix-5-7-step-2-s: 2.5%;\n  --color-mix-5-7-step-2-l: 63%;\n  --color-mix-5-7-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-5-7-step-3-h: 130;\n  --color-mix-5-7-step-3-s: 3.75%;\n  --color-mix-5-7-step-3-l: 44.5%;\n  --color-primary-6: hsl(0, 0%, 0%);\n  --color-primary-6-h: 0;\n  --color-primary-6-s: 0%;\n  --color-primary-6-l: 0%;\n  --color-mix-6-1-step-1: hsl(32, 21.25%, 15.75%);\n  --color-mix-6-1-step-1-h: 32;\n  --color-mix-6-1-step-1-s: 21.25%;\n  --color-mix-6-1-step-1-l: 15.75%;\n  --color-mix-6-1-step-2: hsl(32, 42.5%, 31.5%);\n  --color-mix-6-1-step-2-h: 32;\n  --color-mix-6-1-step-2-s: 42.5%;\n  --color-mix-6-1-step-2-l: 31.5%;\n  --color-mix-6-1-step-3: hsl(32, 63.75%, 47.25%);\n  --color-mix-6-1-step-3-h: 32;\n  --color-mix-6-1-step-3-s: 63.75%;\n  --color-mix-6-1-step-3-l: 47.25%;\n  --color-mix-6-2-step-1: hsl(37, 20%, 24%);\n  --color-mix-6-2-step-1-h: 37;\n  --color-mix-6-2-step-1-s: 20%;\n  --color-mix-6-2-step-1-l: 24%;\n  --color-mix-6-2-step-2: hsl(37, 40%, 48%);\n  --color-mix-6-2-step-2-h: 37;\n  --color-mix-6-2-step-2-s: 40%;\n  --color-mix-6-2-step-2-l: 48%;\n  --color-mix-6-2-step-3: hsl(37, 60%, 72%);\n  --color-mix-6-2-step-3-h: 37;\n  --color-mix-6-2-step-3-s: 60%;\n  --color-mix-6-2-step-3-l: 72%;\n  --color-mix-6-3-step-1: hsl(37, 11.75%, 21.25%);\n  --color-mix-6-3-step-1-h: 37;\n  --color-mix-6-3-step-1-s: 11.75%;\n  --color-mix-6-3-step-1-l: 21.25%;\n  --color-mix-6-3-step-2: hsl(37, 23.5%, 42.5%);\n  --color-mix-6-3-step-2-h: 37;\n  --color-mix-6-3-step-2-s: 23.5%;\n  --color-mix-6-3-step-2-l: 42.5%;\n  --color-mix-6-3-step-3: hsl(37, 35.25%, 63.75%);\n  --color-mix-6-3-step-3-h: 37;\n  --color-mix-6-3-step-3-s: 35.25%;\n  --color-mix-6-3-step-3-l: 63.75%;\n  --color-mix-6-4-step-1: hsl(89, 10.5%, 12.75%);\n  --color-mix-6-4-step-1-h: 89;\n  --color-mix-6-4-step-1-s: 10.5%;\n  --color-mix-6-4-step-1-l: 12.75%;\n  --color-mix-6-4-step-2: hsl(89, 21%, 25.5%);\n  --color-mix-6-4-step-2-h: 89;\n  --color-mix-6-4-step-2-s: 21%;\n  --color-mix-6-4-step-2-l: 25.5%;\n  --color-mix-6-4-step-3: hsl(89, 31.5%, 38.25%);\n  --color-mix-6-4-step-3-h: 89;\n  --color-mix-6-4-step-3-s: 31.5%;\n  --color-mix-6-4-step-3-l: 38.25%;\n  --color-mix-6-5-step-1: hsl(130, 1.25%, 6.5%);\n  --color-mix-6-5-step-1-h: 130;\n  --color-mix-6-5-step-1-s: 1.25%;\n  --color-mix-6-5-step-1-l: 6.5%;\n  --color-mix-6-5-step-2: hsl(130, 2.5%, 13%);\n  --color-mix-6-5-step-2-h: 130;\n  --color-mix-6-5-step-2-s: 2.5%;\n  --color-mix-6-5-step-2-l: 13%;\n  --color-mix-6-5-step-3: hsl(130, 3.75%, 19.5%);\n  --color-mix-6-5-step-3-h: 130;\n  --color-mix-6-5-step-3-s: 3.75%;\n  --color-mix-6-5-step-3-l: 19.5%;\n  --color-mix-6-7-step-1: hsl(0, 0%, 75%);\n  --color-mix-6-7-step-1-h: 0;\n  --color-mix-6-7-step-1-s: 0%;\n  --color-mix-6-7-step-1-l: 75%;\n  --color-mix-6-7-step-2: hsl(0, 0%, 50%);\n  --color-mix-6-7-step-2-h: 0;\n  --color-mix-6-7-step-2-s: 0%;\n  --color-mix-6-7-step-2-l: 50%;\n  --color-mix-6-7-step-3: hsl(0, 0%, 25%);\n  --color-mix-6-7-step-3-h: 0;\n  --color-mix-6-7-step-3-s: 0%;\n  --color-mix-6-7-step-3-l: 25%;\n  --color-primary-7: hsl(0, 0%, 100%);\n  --color-primary-7-h: 0;\n  --color-primary-7-s: 0%;\n  --color-primary-7-l: 100%;\n  --color-mix-7-1-step-1: hsl(32, 21.25%, 90.75%);\n  --color-mix-7-1-step-1-h: 32;\n  --color-mix-7-1-step-1-s: 21.25%;\n  --color-mix-7-1-step-1-l: 90.75%;\n  --color-mix-7-1-step-2: hsl(32, 42.5%, 81.5%);\n  --color-mix-7-1-step-2-h: 32;\n  --color-mix-7-1-step-2-s: 42.5%;\n  --color-mix-7-1-step-2-l: 81.5%;\n  --color-mix-7-1-step-3: hsl(32, 63.75%, 72.25%);\n  --color-mix-7-1-step-3-h: 32;\n  --color-mix-7-1-step-3-s: 63.75%;\n  --color-mix-7-1-step-3-l: 72.25%;\n  --color-mix-7-2-step-1: hsl(37, 20%, 99%);\n  --color-mix-7-2-step-1-h: 37;\n  --color-mix-7-2-step-1-s: 20%;\n  --color-mix-7-2-step-1-l: 99%;\n  --color-mix-7-2-step-2: hsl(37, 40%, 98%);\n  --color-mix-7-2-step-2-h: 37;\n  --color-mix-7-2-step-2-s: 40%;\n  --color-mix-7-2-step-2-l: 98%;\n  --color-mix-7-2-step-3: hsl(37, 60%, 97%);\n  --color-mix-7-2-step-3-h: 37;\n  --color-mix-7-2-step-3-s: 60%;\n  --color-mix-7-2-step-3-l: 97%;\n  --color-mix-7-3-step-1: hsl(37, 11.75%, 96.25%);\n  --color-mix-7-3-step-1-h: 37;\n  --color-mix-7-3-step-1-s: 11.75%;\n  --color-mix-7-3-step-1-l: 96.25%;\n  --color-mix-7-3-step-2: hsl(37, 23.5%, 92.5%);\n  --color-mix-7-3-step-2-h: 37;\n  --color-mix-7-3-step-2-s: 23.5%;\n  --color-mix-7-3-step-2-l: 92.5%;\n  --color-mix-7-3-step-3: hsl(37, 35.25%, 88.75%);\n  --color-mix-7-3-step-3-h: 37;\n  --color-mix-7-3-step-3-s: 35.25%;\n  --color-mix-7-3-step-3-l: 88.75%;\n  --color-mix-7-4-step-1: hsl(89, 10.5%, 87.75%);\n  --color-mix-7-4-step-1-h: 89;\n  --color-mix-7-4-step-1-s: 10.5%;\n  --color-mix-7-4-step-1-l: 87.75%;\n  --color-mix-7-4-step-2: hsl(89, 21%, 75.5%);\n  --color-mix-7-4-step-2-h: 89;\n  --color-mix-7-4-step-2-s: 21%;\n  --color-mix-7-4-step-2-l: 75.5%;\n  --color-mix-7-4-step-3: hsl(89, 31.5%, 63.25%);\n  --color-mix-7-4-step-3-h: 89;\n  --color-mix-7-4-step-3-s: 31.5%;\n  --color-mix-7-4-step-3-l: 63.25%;\n  --color-mix-7-5-step-1: hsl(130, 1.25%, 81.5%);\n  --color-mix-7-5-step-1-h: 130;\n  --color-mix-7-5-step-1-s: 1.25%;\n  --color-mix-7-5-step-1-l: 81.5%;\n  --color-mix-7-5-step-2: hsl(130, 2.5%, 63%);\n  --color-mix-7-5-step-2-h: 130;\n  --color-mix-7-5-step-2-s: 2.5%;\n  --color-mix-7-5-step-2-l: 63%;\n  --color-mix-7-5-step-3: hsl(130, 3.75%, 44.5%);\n  --color-mix-7-5-step-3-h: 130;\n  --color-mix-7-5-step-3-s: 3.75%;\n  --color-mix-7-5-step-3-l: 44.5%;\n  --color-mix-7-6-step-1: hsl(0, 0%, 25%);\n  --color-mix-7-6-step-1-h: 0;\n  --color-mix-7-6-step-1-s: 0%;\n  --color-mix-7-6-step-1-l: 25%;\n  --color-mix-7-6-step-2: hsl(0, 0%, 50%);\n  --color-mix-7-6-step-2-h: 0;\n  --color-mix-7-6-step-2-s: 0%;\n  --color-mix-7-6-step-2-l: 50%;\n  --color-mix-7-6-step-3: hsl(0, 0%, 75%);\n  --color-mix-7-6-step-3-h: 0;\n  --color-mix-7-6-step-3-s: 0%;\n  --color-mix-7-6-step-3-l: 75%;\n  --color-primary-8: hsl(46, 70%, 64%);\n  --color-primary-8-h: 46;\n  --color-primary-8-s: 70%;\n  --color-primary-8-l: 64%;\n}\n[data-theme-color=light][data-v-42b083b1] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(36, 14%, 79%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-7-h),\n                  0%,\n                  var(--color-primary-7-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-5);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-5);\n  --color-background-page-1: var(--color-primary-7);\n  --color-background-page-2: var(--color-mix-7-3-step-1);\n  --color-background-page-3: var(--color-primary-7);\n  --color-text-normal: var(--color-mix-7-6-step-1);\n  --color-text-normal-reversed: var(--color-primary-2);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-5-7-step-3);\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-text-highlight: var(--color-primary-2);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=light] input[data-v-42b083b1] {\n  color-scheme: light;\n}\n[data-theme-color=light][data-theme-type=line][data-v-42b083b1] {\n  --color-background-base: var(--color-primary-7);\n}\n[data-theme-color=light][data-theme-type=block][data-v-42b083b1] {\n  --color-background-base: var(--color-mix-2-3-step-3);\n}\n[data-theme-color=dark][data-v-42b083b1] {\n  --color-semantic-success: hsl(90, 34%, 54%);\n  --color-semantic-error: hsl(355, 51%, 49%);\n  --color-semantic-warning: hsl(42, 61%, 65%);\n  --color-semantic-info: hsl(178, 25%, 49%);\n  --color-semantic-important-info: var(--color-semantic-error);\n  --color-semantic-disabled: hsl(138, 8%, 49%);\n  --color-semantic-destructive: var(--color-semantic-error);\n  --color-semantic-untouched: var(--color-semantic-disabled);\n  --color-semantic-progress: var(--color-semantic-info);\n  --color-semantic-waiting: var(--color-semantic-warning);\n  --color-background-base: var(--color-mix-6-5-step-2);\n  --color-background-lighter: var(--color-primary-5);\n  --color-background-highlight: var(--color-primary-4);\n  --color-background-scrollbar-track: transparent;\n  --color-background-scrollbar-thumb: hsl(\n                  var(--color-primary-2-h),\n                  0%,\n                  var(--color-primary-2-l)\n  );\n  --color-background-scrollbar-thumb-hover: var(--color-primary-2);\n  --color-background-badge-primary: var(--color-primary-4);\n  --color-text-badge-primary: var(--color-primary-2);\n  --color-background-badge-secondary: var(--color-primary-1);\n  --color-text-badge-secondary: var(--color-primary-2);\n  --color-background-page-1: var(--color-mix-6-5-step-2);\n  --color-background-page-2: var(--color-mix-7-6-step-1);\n  --color-background-page-3: var(--color-mix-5-6-step-3);\n  --color-text-normal: var(--color-primary-2);\n  --color-text-normal-reversed: var(--color-primary-5);\n  --color-text-accent-primary: var(--color-primary-1);\n  --color-text-accent-secondary: var(--color-primary-4);\n  --color-text-disabled: var(--color-mix-6-7-step-2);\n  --color-text-highlight: var(--color-primary-5);\n  --color-text-link-highlight: var(--color-mix-1-4-step-1);\n  --color-text-link-primary: var(--color-primary-1);\n  --color-text-link-hover-primary: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  76%\n  );\n  --color-text-link-secondary: var(--color-primary-4);\n  --color-text-link-hover-secondary: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  76%\n  );\n}\n[data-theme-color=dark] input[data-v-42b083b1] {\n  color-scheme: dark;\n}\n\n/* END VARIABLES */\n/*============================================================================\n  line-height: line-height(28, 18)\n  Expected arguments are px values and unitless.\n\n  Make each line the desired height(1st arg) base on the current font size(2nd arg)\n==============================================================================*/\nbutton[data-v-42b083b1]::-moz-focus-inner,\n[type=button][data-v-42b083b1]::-moz-focus-inner,\n[type=reset][data-v-42b083b1]::-moz-focus-inner,\n[type=submit][data-v-42b083b1]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton[data-v-42b083b1]:-moz-focusring,\n[type=button][data-v-42b083b1]:-moz-focusring,\n[type=reset][data-v-42b083b1]:-moz-focusring,\n[type=submit][data-v-42b083b1]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\ninput[type=search][data-v-42b083b1], input[type=number][data-v-42b083b1], input[type=email][data-v-42b083b1], input[type=password][data-v-42b083b1] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\ntable[data-v-42b083b1] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd[data-v-42b083b1],\nth[data-v-42b083b1] {\n  padding: 0;\n}\ntextarea[data-v-42b083b1] {\n  overflow: auto;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\nbody[data-v-42b083b1] {\n  overflow: hidden;\n  color: var(--color-text-normal);\n}\n[data-v-42b083b1] {\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n}\n[data-v-42b083b1]::before,[data-v-42b083b1]::after {\n  box-sizing: border-box;\n}\n[data-v-42b083b1]::-moz-selection {\n  color: var(--color-text-highlight);\n  background-color: var(--color-background-highlight);\n}\n[data-v-42b083b1]::selection,[data-v-42b083b1]::-moz-selection {\n  color: var(--color-text-highlight);\n  background-color: var(--color-background-highlight);\n}\n#app[data-v-42b083b1] {\n  background-color: var(--color-background-base);\n}\n[data-v-42b083b1]::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n[data-v-42b083b1]::-webkit-scrollbar-track {\n  background: var(--color-scrollbar-track);\n  border-radius: 8rem;\n}\n[data-v-42b083b1]::-webkit-scrollbar-thumb {\n  background: var(--color-background-scrollbar-thumb);\n  border-radius: 8rem;\n}\n[data-v-42b083b1]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-background-scrollbar-thumb-hover);\n}\nh1[data-v-42b083b1], .h1[data-v-42b083b1],\nh2[data-v-42b083b1],\n.h2[data-v-42b083b1],\nh3[data-v-42b083b1],\n.h3[data-v-42b083b1],\nh4[data-v-42b083b1],\n.h4[data-v-42b083b1],\nh5[data-v-42b083b1],\n.h5[data-v-42b083b1],\nh6[data-v-42b083b1],\n.h6[data-v-42b083b1],\nfieldset legend[data-v-42b083b1],\nlabel[data-v-42b083b1] {\n  margin: 0 0 1rem;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\n@media only screen and (max-width: 749px) {\nh1[data-v-42b083b1], .h1[data-v-42b083b1] {\n    font-size: 3.4rem;\n    line-height: 1.2352941176;\n}\n}\n@media only screen and (min-width: 750px) {\nh1[data-v-42b083b1], .h1[data-v-42b083b1] {\n    font-size: 6rem;\n    line-height: 1.2;\n}\n}\n@media only screen and (max-width: 749px) {\nh2[data-v-42b083b1], .h2[data-v-42b083b1] {\n    font-size: 3rem;\n    line-height: 1.2666666667;\n}\n}\n@media only screen and (min-width: 750px) {\nh2[data-v-42b083b1], .h2[data-v-42b083b1] {\n    font-size: 3.6rem;\n    line-height: 1.3611111111;\n}\n}\n@media only screen and (max-width: 749px) {\nh3[data-v-42b083b1], .h3[data-v-42b083b1] {\n    font-size: 2.8rem;\n    line-height: 1.5;\n}\n}\n@media only screen and (min-width: 750px) {\nh3[data-v-42b083b1], .h3[data-v-42b083b1] {\n    font-size: 3.2rem;\n    line-height: 1.125;\n}\n}\n@media only screen and (max-width: 749px) {\nh4[data-v-42b083b1], .h4[data-v-42b083b1] {\n    font-size: 2.2rem;\n    line-height: 1.4545454545;\n}\n}\n@media only screen and (min-width: 750px) {\nh4[data-v-42b083b1], .h4[data-v-42b083b1] {\n    font-size: 2.4rem;\n    line-height: 1.5;\n}\n}\n@media only screen and (max-width: 749px) {\nh5[data-v-42b083b1], .h5[data-v-42b083b1] {\n    font-size: 2rem;\n    line-height: 1.3;\n}\n}\n@media only screen and (min-width: 750px) {\nh5[data-v-42b083b1], .h5[data-v-42b083b1] {\n    font-size: 2.2rem;\n}\n}\n@media only screen and (max-width: 749px) {\nh6[data-v-42b083b1], .h6[data-v-42b083b1], fieldset legend[data-v-42b083b1], label[data-v-42b083b1] {\n    font-size: 1.6rem;\n    line-height: 1.375;\n}\n}\n@media only screen and (min-width: 750px) {\nh6[data-v-42b083b1], .h6[data-v-42b083b1], fieldset legend[data-v-42b083b1], label[data-v-42b083b1] {\n    font-size: 1.8rem;\n}\n}\nP[data-v-42b083b1] {\n  margin: 0;\n  padding: 0;\n  font-size: 1.7rem;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\na[data-v-42b083b1] {\n  color: var(--color-text-link-primary);\n  text-decoration: none;\n  font-weight: inherit;\n  cursor: pointer;\n  transition-duration: 0.3s;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\na[data-v-42b083b1]:not(.btn):hover {\n  color: var(--color-text-link-hover-primary);\n}\na[data-v-42b083b1]::-moz-selection {\n  color: var(--color-text-link-highlight);\n}\na[data-v-42b083b1]::selection, a[data-v-42b083b1]::-moz-selection {\n  color: var(--color-text-link-highlight);\n}\n.text-small[data-v-42b083b1] {\n  font-size: 0.82em;\n}\n.text-large[data-v-42b083b1] {\n  font-size: 1.25em;\n}\n.text-sup[data-v-42b083b1] {\n  position: relative;\n  font-size: 50%;\n  top: -0.4em;\n}\n.text-sub[data-v-42b083b1] {\n  position: relative;\n  font-size: 55%;\n  bottom: -0.25rem;\n}\nb[data-v-42b083b1],\nstrong[data-v-42b083b1] {\n  --font-weight: 600;\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n}\nlabel[data-v-42b083b1] {\n  padding-bottom: 0.3rem;\n  display: inline-flex;\n}\nlabel[data-v-42b083b1]:has(input:not([type=checkbox])):has(input:not([type=radio])):not(.override) {\n  --input-width: 100%;\n  height: auto;\n  align-items: center;\n  gap: 0.3rem;\n}\nlabel input[data-v-42b083b1]:not([type=checkbox]):not([type=radio]) {\n  order: 1;\n  width: 100%;\n  max-width: var(--input-width);\n  margin: 0;\n  margin-left: auto;\n}\n:root [data-theme-color=dark][data-v-42b083b1] {\n  --color-input-background: var(--color-mix-5-6-step-3);\n  --color-input-background-contrasted: var(--color-mix-5-6-step-2);\n  --color-input-background-focused: var(--color-mix-5-6-step-3);\n  --color-input-background-disabled: hsla(\n                  var(--color-mix-5-6-step-3-h),\n                  var(--color-mix-5-6-step-3-s),\n                  22%,\n                  1\n  );\n  --color-input-text-disabled: var(--color-mix-5-7-step-3);\n  --color-input-border: transparent;\n  --color-input-border-focused: var(--color-primary-1);\n  --color-input-border-disabled: hsla(\n                  var(--color-mix-5-6-step-3-h),\n                  var(--color-mix-5-6-step-3-s),\n                  22%,\n                  1\n  );\n  --color-input-placeholder: var(--color-mix-5-7-step-3);\n  --color-dismiss-choice-background: var(--color-mix-5-6-step-3);\n  --color-checkbox-background-unchecked: var(--color-mix-5-6-step-3);\n  --color-checkbox-background-unchecked-secondary: var(--color-mix-5-6-step-2);\n  --color-checkbox-background-unchecked-tertiary: var(--color-mix-5-7-step-2);\n  --color-checkbox-background-checked: var(--color-primary-1);\n  --color-checkbox-background-focused: var(--color-checkbox-background-unchecked);\n  --color-checkbox-background-disabled: var(--color-mix-5-6-step-1);\n  --color-checkbox-border-unchecked: transparent;\n  --color-checkbox-border-checked: var(--color-checkbox-background-checked);\n  --color-checkbox-border-focused: var(--color-primary-4);\n  --color-checkbox-border-disabled: transparent;\n}\n:root [data-theme-color=dark] [checked][data-v-42b083b1] {\n  --color-checkbox-background-focused: var(--color-checkbox-background-checked);\n}\n:root [data-theme-color=light][data-v-42b083b1] {\n  --color-input-background: var(--color-mix-7-4-step-1);\n  --color-input-background-contrasted: var(--color-mix-7-4-step-2);\n  --color-input-background-focused: var(--color-mix-7-4-step-1);\n  --color-input-background-disabled: var(--color-mix-7-4-step-1);\n  --color-input-text-disabled: var(--color-mix-5-7-step-3);\n  --color-input-border: transparent;\n  --color-input-border-focused: var(--color-primary-1);\n  --color-input-border-disabled: var(--color-mix-7-4-step-1);\n  --color-input-placeholder: var(--color-mix-5-7-step-3);\n  --color-checkbox-background-unchecked: var(--color-mix-7-4-step-1);\n  --color-checkbox-background-unchecked-secondary: var(--color-mix-7-5-step-1);\n  --color-checkbox-background-unchecked-tertiary: var(--color-mix-7-5-step-3);\n  --color-checkbox-background-checked: var(--color-primary-1);\n  --color-checkbox-background-focused: var(--color-checkbox-background-unchecked);\n  --color-checkbox-background-disabled: var(--color-mix-7-4-step-1);\n  --color-checkbox-border-unchecked: transparent;\n  --color-checkbox-border-checked: var(--color-checkbox-background-checked);\n  --color-checkbox-border-focused: var(--color-primary-4);\n  --color-checkbox-border-disabled: transparent;\n}\n:root [data-theme-color=light] [checked][data-v-42b083b1] {\n  --color-checkbox-background-focused: var(--color-checkbox-background-checked);\n}\n.input-boxes-default[data-v-42b083b1], textarea[data-v-42b083b1], select[data-v-42b083b1],\noption[data-v-42b083b1], input[type=text][data-v-42b083b1], input[type=email][data-v-42b083b1], input[type=tel][data-v-42b083b1], input[type=number][data-v-42b083b1], input[type=password][data-v-42b083b1], input[type=search][data-v-42b083b1], input[type=date][data-v-42b083b1], input[type=datetime-local][data-v-42b083b1], input[type=month][data-v-42b083b1], input[type=time][data-v-42b083b1], input[type=url][data-v-42b083b1], input[type=week][data-v-42b083b1] {\n  --input-padding-block: .7rem;\n  --input-padding-inline: 1rem;\n  height: 34px;\n  width: 100%;\n  border-radius: 0.8rem;\n  font-size: 1.5rem;\n  border-color: var(--color-input-border);\n  border-style: solid;\n  border-width: 2px;\n  padding: var(--input-padding-block) var(--input-padding-inline);\n  margin: auto;\n  background-color: var(--color-input-background);\n  color: var(--color-text-normal);\n}\n.input-boxes-default[data-v-42b083b1]::-moz-placeholder, textarea[data-v-42b083b1]::-moz-placeholder, select[data-v-42b083b1]::-moz-placeholder,\noption[data-v-42b083b1]::-moz-placeholder, input[type=text][data-v-42b083b1]::-moz-placeholder, input[type=email][data-v-42b083b1]::-moz-placeholder, input[type=tel][data-v-42b083b1]::-moz-placeholder, input[type=number][data-v-42b083b1]::-moz-placeholder, input[type=password][data-v-42b083b1]::-moz-placeholder, input[type=search][data-v-42b083b1]::-moz-placeholder, input[type=date][data-v-42b083b1]::-moz-placeholder, input[type=datetime-local][data-v-42b083b1]::-moz-placeholder, input[type=month][data-v-42b083b1]::-moz-placeholder, input[type=time][data-v-42b083b1]::-moz-placeholder, input[type=url][data-v-42b083b1]::-moz-placeholder, input[type=week][data-v-42b083b1]::-moz-placeholder {\n  color: var(--color-input-placeholder);\n  opacity: 1;\n}\n.input-boxes-default[data-v-42b083b1]::-moz-placeholder, textarea[data-v-42b083b1]::-moz-placeholder, select[data-v-42b083b1]::-moz-placeholder, option[data-v-42b083b1]::-moz-placeholder, input[type=text][data-v-42b083b1]::-moz-placeholder, input[type=email][data-v-42b083b1]::-moz-placeholder, input[type=tel][data-v-42b083b1]::-moz-placeholder, input[type=number][data-v-42b083b1]::-moz-placeholder, input[type=password][data-v-42b083b1]::-moz-placeholder, input[type=search][data-v-42b083b1]::-moz-placeholder, input[type=date][data-v-42b083b1]::-moz-placeholder, input[type=datetime-local][data-v-42b083b1]::-moz-placeholder, input[type=month][data-v-42b083b1]::-moz-placeholder, input[type=time][data-v-42b083b1]::-moz-placeholder, input[type=url][data-v-42b083b1]::-moz-placeholder, input[type=week][data-v-42b083b1]::-moz-placeholder {\n  color: var(--color-input-placeholder);\n  opacity: 1;\n}\n.input-boxes-default[data-v-42b083b1]::placeholder, textarea[data-v-42b083b1]::placeholder, select[data-v-42b083b1]::placeholder,\noption[data-v-42b083b1]::placeholder, input[type=text][data-v-42b083b1]::placeholder, input[type=email][data-v-42b083b1]::placeholder, input[type=tel][data-v-42b083b1]::placeholder, input[type=number][data-v-42b083b1]::placeholder, input[type=password][data-v-42b083b1]::placeholder, input[type=search][data-v-42b083b1]::placeholder, input[type=date][data-v-42b083b1]::placeholder, input[type=datetime-local][data-v-42b083b1]::placeholder, input[type=month][data-v-42b083b1]::placeholder, input[type=time][data-v-42b083b1]::placeholder, input[type=url][data-v-42b083b1]::placeholder, input[type=week][data-v-42b083b1]::placeholder {\n  color: var(--color-input-placeholder);\n  opacity: 1;\n}\n.input-boxes-default[data-v-42b083b1]:disabled, textarea[data-v-42b083b1]:disabled, select[data-v-42b083b1]:disabled,\noption[data-v-42b083b1]:disabled, input[type=text][data-v-42b083b1]:disabled, input[type=email][data-v-42b083b1]:disabled, input[type=tel][data-v-42b083b1]:disabled, input[type=number][data-v-42b083b1]:disabled, input[type=password][data-v-42b083b1]:disabled, input[type=search][data-v-42b083b1]:disabled, input[type=date][data-v-42b083b1]:disabled, input[type=datetime-local][data-v-42b083b1]:disabled, input[type=month][data-v-42b083b1]:disabled, input[type=time][data-v-42b083b1]:disabled, input[type=url][data-v-42b083b1]:disabled, input[type=week][data-v-42b083b1]:disabled, .input-boxes-default.disabled[data-v-42b083b1], textarea.disabled[data-v-42b083b1], select.disabled[data-v-42b083b1],\noption.disabled[data-v-42b083b1], input.disabled[type=text][data-v-42b083b1], input.disabled[type=email][data-v-42b083b1], input.disabled[type=tel][data-v-42b083b1], input.disabled[type=number][data-v-42b083b1], input.disabled[type=password][data-v-42b083b1], input.disabled[type=search][data-v-42b083b1], input.disabled[type=date][data-v-42b083b1], input.disabled[type=datetime-local][data-v-42b083b1], input.disabled[type=month][data-v-42b083b1], input.disabled[type=time][data-v-42b083b1], input.disabled[type=url][data-v-42b083b1], input.disabled[type=week][data-v-42b083b1] {\n  pointer-events: none;\n  cursor: default;\n  background-color: var(--color-input-background-disabled);\n  color: var(--color-text-disabled);\n  border-color: var(--color-input-border-disabled);\n  opacity: 0.7;\n  filter: grayscale(0.5);\n}\n.input-boxes-default.gray[data-v-42b083b1], textarea.gray[data-v-42b083b1], select.gray[data-v-42b083b1],\noption.gray[data-v-42b083b1], input.gray[type=text][data-v-42b083b1], input.gray[type=email][data-v-42b083b1], input.gray[type=tel][data-v-42b083b1], input.gray[type=number][data-v-42b083b1], input.gray[type=password][data-v-42b083b1], input.gray[type=search][data-v-42b083b1], input.gray[type=date][data-v-42b083b1], input.gray[type=datetime-local][data-v-42b083b1], input.gray[type=month][data-v-42b083b1], input.gray[type=time][data-v-42b083b1], input.gray[type=url][data-v-42b083b1], input.gray[type=week][data-v-42b083b1] {\n  background-color: var(--color-input-backgroud-disabled);\n  color: var(--color-input-text-disabled);\n}\n.input-boxes-default.error[data-v-42b083b1], textarea.error[data-v-42b083b1], select.error[data-v-42b083b1],\noption.error[data-v-42b083b1], input.error[type=text][data-v-42b083b1], input.error[type=email][data-v-42b083b1], input.error[type=tel][data-v-42b083b1], input.error[type=number][data-v-42b083b1], input.error[type=password][data-v-42b083b1], input.error[type=search][data-v-42b083b1], input.error[type=date][data-v-42b083b1], input.error[type=datetime-local][data-v-42b083b1], input.error[type=month][data-v-42b083b1], input.error[type=time][data-v-42b083b1], input.error[type=url][data-v-42b083b1], input.error[type=week][data-v-42b083b1] {\n  border-color: var(--color-semantic-error);\n}\n.input-boxes-default[data-v-42b083b1]:focus, textarea[data-v-42b083b1]:focus, select[data-v-42b083b1]:focus,\noption[data-v-42b083b1]:focus, input[type=text][data-v-42b083b1]:focus, input[type=email][data-v-42b083b1]:focus, input[type=tel][data-v-42b083b1]:focus, input[type=number][data-v-42b083b1]:focus, input[type=password][data-v-42b083b1]:focus, input[type=search][data-v-42b083b1]:focus, input[type=date][data-v-42b083b1]:focus, input[type=datetime-local][data-v-42b083b1]:focus, input[type=month][data-v-42b083b1]:focus, input[type=time][data-v-42b083b1]:focus, input[type=url][data-v-42b083b1]:focus, input[type=week][data-v-42b083b1]:focus, .input-boxes-default[data-v-42b083b1]:focus-visible, textarea[data-v-42b083b1]:focus-visible, select[data-v-42b083b1]:focus-visible,\noption[data-v-42b083b1]:focus-visible, input[type=text][data-v-42b083b1]:focus-visible, input[type=email][data-v-42b083b1]:focus-visible, input[type=tel][data-v-42b083b1]:focus-visible, input[type=number][data-v-42b083b1]:focus-visible, input[type=password][data-v-42b083b1]:focus-visible, input[type=search][data-v-42b083b1]:focus-visible, input[type=date][data-v-42b083b1]:focus-visible, input[type=datetime-local][data-v-42b083b1]:focus-visible, input[type=month][data-v-42b083b1]:focus-visible, input[type=time][data-v-42b083b1]:focus-visible, input[type=url][data-v-42b083b1]:focus-visible, input[type=week][data-v-42b083b1]:focus-visible, .input-boxes-default[data-v-42b083b1]:focus-within, textarea[data-v-42b083b1]:focus-within, select[data-v-42b083b1]:focus-within,\noption[data-v-42b083b1]:focus-within, input[type=text][data-v-42b083b1]:focus-within, input[type=email][data-v-42b083b1]:focus-within, input[type=tel][data-v-42b083b1]:focus-within, input[type=number][data-v-42b083b1]:focus-within, input[type=password][data-v-42b083b1]:focus-within, input[type=search][data-v-42b083b1]:focus-within, input[type=date][data-v-42b083b1]:focus-within, input[type=datetime-local][data-v-42b083b1]:focus-within, input[type=month][data-v-42b083b1]:focus-within, input[type=time][data-v-42b083b1]:focus-within, input[type=url][data-v-42b083b1]:focus-within, input[type=week][data-v-42b083b1]:focus-within, .input-boxes-default[data-v-42b083b1]:active, textarea[data-v-42b083b1]:active, select[data-v-42b083b1]:active,\noption[data-v-42b083b1]:active, input[type=text][data-v-42b083b1]:active, input[type=email][data-v-42b083b1]:active, input[type=tel][data-v-42b083b1]:active, input[type=number][data-v-42b083b1]:active, input[type=password][data-v-42b083b1]:active, input[type=search][data-v-42b083b1]:active, input[type=date][data-v-42b083b1]:active, input[type=datetime-local][data-v-42b083b1]:active, input[type=month][data-v-42b083b1]:active, input[type=time][data-v-42b083b1]:active, input[type=url][data-v-42b083b1]:active, input[type=week][data-v-42b083b1]:active {\n  background-color: var(--color-input-background-focused);\n  border-color: var(--color-input-border-focused);\n}\ninput[data-v-42b083b1]::-webkit-outer-spin-button, input[data-v-42b083b1]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=checkbox][data-v-42b083b1], input[type=radio][data-v-42b083b1] {\n  width: 0;\n  height: 0;\n  color: var(--color-checkbox-background-unchecked);\n}\ninput[type=checkbox][data-v-42b083b1]::after, input[type=radio][data-v-42b083b1]::after {\n  content: \"\";\n  position: absolute;\n  width: 2.2rem;\n  height: 2.2rem;\n  border-radius: 0.8rem;\n  color: inherit;\n  background-color: currentColor;\n  border: 1px solid var(--color-checkbox-border-unchecked);\n  cursor: pointer;\n  pointer-events: all;\n}\ninput[type=checkbox].secondary[data-v-42b083b1], input[type=radio].secondary[data-v-42b083b1] {\n  color: var(--color-checkbox-background-unchecked-secondary);\n}\ninput[type=checkbox].tertiary[data-v-42b083b1], input[type=radio].tertiary[data-v-42b083b1] {\n  color: var(--color-checkbox-background-unchecked-tertiary);\n}\ninput[type=checkbox][data-v-42b083b1]:checked, input[type=radio][data-v-42b083b1]:checked {\n  color: var(--color-checkbox-background-checked) !important;\n}\ninput[type=checkbox][data-v-42b083b1]:checked::after, input[type=radio][data-v-42b083b1]:checked::after {\n  border: 2px solid var(--color-checkbox-border-checked);\n}\ninput[type=checkbox][data-v-42b083b1]:focus::after, input[type=checkbox][data-v-42b083b1]:checked:focus::after, input[type=radio][data-v-42b083b1]:focus::after, input[type=radio][data-v-42b083b1]:checked:focus::after {\n  border: 2px solid var(--color-checkbox-border-focused);\n}\n@supports (grid: subgrid/subgrid) {\ninput[type=checkbox][data-v-42b083b1], input[type=radio][data-v-42b083b1] {\n    -webkit-appearance: initial;\n}\n}\ninput[type=radio][data-v-42b083b1]::after {\n  border-radius: 100px;\n}\n@-moz-document url-prefix() {}\ninput[type=text][data-v-42b083b1], input[type=email][data-v-42b083b1], input[type=tel][data-v-42b083b1], input[type=number][data-v-42b083b1], input[type=password][data-v-42b083b1], input[type=search][data-v-42b083b1], input[type=date][data-v-42b083b1], input[type=datetime-local][data-v-42b083b1], input[type=month][data-v-42b083b1], input[type=time][data-v-42b083b1], input[type=url][data-v-42b083b1], input[type=week][data-v-42b083b1] {\n  cursor: text;\n  max-width: 514px;\n}\ninput[type=text][data-v-42b083b1] ::-moz-placeholder, input[type=email][data-v-42b083b1] ::-moz-placeholder, input[type=tel][data-v-42b083b1] ::-moz-placeholder, input[type=number][data-v-42b083b1] ::-moz-placeholder, input[type=password][data-v-42b083b1] ::-moz-placeholder, input[type=search][data-v-42b083b1] ::-moz-placeholder, input[type=date][data-v-42b083b1] ::-moz-placeholder, input[type=datetime-local][data-v-42b083b1] ::-moz-placeholder, input[type=month][data-v-42b083b1] ::-moz-placeholder, input[type=time][data-v-42b083b1] ::-moz-placeholder, input[type=url][data-v-42b083b1] ::-moz-placeholder, input[type=week][data-v-42b083b1] ::-moz-placeholder {\n  overflow: visible;\n  color: var(--color-input-placeholder);\n}\ninput[type=text][data-v-42b083b1] ::placeholder, input[type=email][data-v-42b083b1] ::placeholder, input[type=tel][data-v-42b083b1] ::placeholder, input[type=number][data-v-42b083b1] ::placeholder, input[type=password][data-v-42b083b1] ::placeholder, input[type=search][data-v-42b083b1] ::placeholder, input[type=date][data-v-42b083b1] ::placeholder, input[type=datetime-local][data-v-42b083b1] ::placeholder, input[type=month][data-v-42b083b1] ::placeholder, input[type=time][data-v-42b083b1] ::placeholder, input[type=url][data-v-42b083b1] ::placeholder, input[type=week][data-v-42b083b1] ::placeholder {\n  overflow: visible;\n  color: var(--color-input-placeholder);\n}\ninput[type=number][data-v-42b083b1] {\n  -moz-appearance: textfield;\n}\ninput[type=file][data-v-42b083b1] {\n  position: absolute !important;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n}\ninput[type=color][data-v-42b083b1] {\n  width: 34px;\n  height: 34px;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 0.8rem;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\ninput[type=color][data-v-42b083b1]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\ninput[type=color][data-v-42b083b1]::-webkit-color-swatch {\n  border: none;\n}\ninput[data-v-42b083b1]:focus, input[data-v-42b083b1]:focus-visible, input[data-v-42b083b1]:focus-within {\n  border-color: var(--color-input-border-focused);\n  outline: transparent;\n}\nselect[data-v-42b083b1],\noption[data-v-42b083b1] {\n  cursor: pointer;\n  max-width: 514px;\n  border: 2px solid var(--color-input-border);\n  padding: 0.3rem 1rem 0.6rem !important;\n  margin: auto;\n  box-sizing: border-box;\n}\nselect[data-v-42b083b1]:focus, select[data-v-42b083b1]:focus-visible, select[data-v-42b083b1]:focus-within,\noption[data-v-42b083b1]:focus,\noption[data-v-42b083b1]:focus-visible,\noption[data-v-42b083b1]:focus-within {\n  border-color: var(--color-input-border-focused) !important;\n  outline: transparent;\n}\nfieldset[data-v-42b083b1] {\n  border: transparent;\n}\nfieldset legend[data-v-42b083b1] {\n  margin: 0 0 0 1rem;\n}\ntextarea[data-v-42b083b1] {\n  cursor: text;\n  min-height: 7.2rem;\n  resize: none;\n}\ntextarea[data-v-42b083b1]:focus, textarea[data-v-42b083b1]:focus-visible, textarea[data-v-42b083b1]:focus-within {\n  border-color: var(--color-input-border-focused);\n  outline: transparent;\n}\nbutton[data-v-42b083b1],\ninput[data-v-42b083b1],\nselect[data-v-42b083b1],\noption[data-v-42b083b1],\na[data-v-42b083b1] {\n  border: transparent;\n  padding: 0.2rem 0.5rem;\n}\nbutton[data-v-42b083b1]:disabled, button.disabled[data-v-42b083b1],\ninput[data-v-42b083b1]:disabled,\ninput.disabled[data-v-42b083b1],\nselect[data-v-42b083b1]:disabled,\nselect.disabled[data-v-42b083b1],\noption[data-v-42b083b1]:disabled,\noption.disabled[data-v-42b083b1],\na[data-v-42b083b1]:disabled,\na.disabled[data-v-42b083b1] {\n  pointer-events: none;\n  cursor: default;\n}\nlabel[data-v-42b083b1]:has([type=checkbox]:first-child):not(.override) {\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\nlabel:has([type=checkbox]:first-child):has(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, label, fieldset legend) input[data-v-42b083b1] {\n  margin-bottom: 1rem;\n}\nlabel[data-v-42b083b1]:has([type=checkbox]) {\n  padding-left: 2rem;\n}\nlabel:has([type=checkbox]) [type=checkbox][data-v-42b083b1]:first-child::after {\n  transform: translate(-2.4rem, -50%);\n}\n.unit-input-container[data-v-42b083b1] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 0;\n  max-width: 514px;\n}\n.unit-input-container input:disabled + .unit-decorator[data-v-42b083b1],\n.unit-input-container input.disabled + .unit-decorator[data-v-42b083b1] {\n  background-color: var(--color-input-border-disabled);\n  color: var(--color-text-disabled);\n}\n.unit-input-container:focus-within .unit-decorator[data-v-42b083b1],\n.unit-input-container:focus-within input:disabled + .unit-decorator[data-v-42b083b1],\n.unit-input-container:focus-within input.disabled + .unit-decorator[data-v-42b083b1] {\n  background-color: var(--color-input-border-focused);\n}\n.btn[data-v-42b083b1] {\n  font-weight: var(--font-weight);\n  font-variation-settings: var(--font-variation-settings);\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  --font-weight: 700;\n  border: 2px solid transparent;\n  padding: 0.9rem 2rem 0.7rem;\n  text-align: center;\n  max-width: 514px;\n  border-radius: 0.8rem;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.btn[data-v-42b083b1]:focus-visible {\n  outline: none;\n}\n.btn[data-v-42b083b1]:focus:not(.focus-visible) {\n  border-color: transparent;\n}\n.btn[data-v-42b083b1]:focus, .btn[data-v-42b083b1]:focus-within {\n  border: 2px solid var(--color-primary-1);\n}\n[data-theme-color=dark] .btn[data-v-42b083b1] {\n  --color-button-background-primary: var(--color-primary-4);\n  --color-button-text-primary: var(--color-text-normal-reversed);\n  --color-button-background-primary-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-l) * 1.15)\n  );\n  --color-button-background-secondary: var(--color-primary-1);\n  --color-button-text-secondary: var(--color-text-normal-reversed);\n  --color-button-background-secondary-hover: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  calc(var(--color-primary-1-l) * 1.15)\n  );\n  --color-button-background-quaternary: var(--color-mix-5-6-step-3);\n  --color-button-text-quaternary: var(--color-text-normal);\n  --color-button-background-quaternary-hover: hsl(\n                  var(--color-mix-6-7-step-3-h),\n                  var(--color-mix-6-7-step-3-s),\n                  calc(var(--color-mix-6-7-step-3-l) * 1.15)\n  );\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-button-background-disabled: var(--color-mix-5-6-step-3);\n}\n[data-theme-color=light] .btn[data-v-42b083b1] {\n  --color-button-background-primary: var(--color-primary-4);\n  --color-button-text-primary: var(--color-text-normal);\n  --color-button-background-primary-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-l) * 1.15)\n  );\n  --color-button-background-secondary: var(--color-primary-1);\n  --color-button-text-secondary: var(--color-text-normal);\n  --color-button-background-secondary-hover: hsl(\n                  var(--color-primary-1-h),\n                  var(--color-primary-1-s),\n                  calc(var(--color-primary-1-l) * 1.15)\n  );\n  --color-button-background-quaternary: var(--color-mix-6-7-step-2);\n  --color-button-text-quaternary: var(--color-text-normal);\n  --color-button-background-quaternary-hover: hsl(\n                  var(--color-mix-6-7-step-2-h),\n                  var(--color-mix-6-7-step-2-s),\n                  calc(var(--color-mix-6-7-step-2-l) * 1.15)\n  );\n  --color-text-button: var(--color-primary-4);\n  --color-text-button-hover: hsl(\n                  var(--color-primary-4-h),\n                  var(--color-primary-4-s),\n                  calc(var(--color-primary-4-s) * 1.15)\n  );\n  --color-button-background-disabled: var(--color-mix-7-4-step-1);\n}\n.btn.disabled[data-v-42b083b1], .btn[disabled][data-v-42b083b1], .btn[data-v-42b083b1]:disabled, .disabled .btn[data-v-42b083b1] {\n  background-color: var(--color-button-background-disabled);\n  color: var(--color-text-disabled);\n  pointer-events: none;\n}\n.btn.disabled[data-v-42b083b1]:hover, .btn[disabled][data-v-42b083b1]:hover, .btn[data-v-42b083b1]:disabled:hover, .disabled .btn[data-v-42b083b1]:hover {\n  background-color: var(--color-button-background-disabled);\n}\n.btn.destructive[data-v-42b083b1]:hover {\n  color: var(--color-semantic-destructive);\n}\n.btn-primary[data-v-42b083b1] {\n  height: 34px;\n  color: var(--color-button-text-primary);\n  background-color: var(--color-button-background-primary);\n}\n.btn-primary[disabled][data-v-42b083b1] {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-primary[disabled][data-v-42b083b1]:hover {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-primary[data-v-42b083b1]:hover {\n  background-color: var(--color-button-background-primary-hover);\n}\n.btn-secondary[data-v-42b083b1] {\n  height: 34px;\n  color: var(--color-button-text-secondary);\n  background-color: var(--color-button-background-secondary);\n}\n.btn-secondary[disabled][data-v-42b083b1] {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-secondary[disabled][data-v-42b083b1]:hover {\n  background-color: var(--color-button-background-disabled);\n}\n.btn-secondary[data-v-42b083b1]:hover {\n  background-color: var(--color-button-background-secondary-hover);\n}\n.btn-tertiary[data-v-42b083b1] {\n  background-color: transparent;\n  padding: 0 1rem;\n  color: var(--color-text-button);\n}\n.btn-tertiary[data-v-42b083b1]:hover {\n  color: var(--color-text-button-hover);\n}\n.btn-tertiary.edit[data-v-42b083b1], .btn-tertiary.view[data-v-42b083b1] {\n  margin-bottom: 1rem;\n}\n.btn-tertiary.delete[data-v-42b083b1] {\n  color: var(--color-semantic-destructive);\n}\n.btn-tertiary[disabled][data-v-42b083b1] {\n  color: var(--color-text-disabled);\n}\n.btn-quaternary[data-v-42b083b1] {\n  height: 34px;\n  color: var(--color-button-text-quaternary);\n  background-color: var(--color-button-background-quaternary);\n}\n.btn-quaternary[disabled][data-v-42b083b1] {\n  filter: brightness(0.5);\n}\n.btn-quaternary[data-v-42b083b1]:hover {\n  background-color: var(--color-button-background-quaternary-hover);\n}\n.btn-icon[data-v-42b083b1] {\n  width: -moz-min-content;\n  width: min-content;\n  aspect-ratio: 1/1;\n  margin: 0;\n  padding: 0.75rem;\n  justify-content: center;\n}\n.btn-icon-only[data-v-42b083b1] {\n  background-color: transparent;\n  font-size: 1.5em;\n  aspect-ratio: 1;\n  height: calc(2em + 0.6rem);\n  max-height: 34px;\n  color: inherit;\n  padding: 0.3rem;\n  justify-content: center;\n}\n.btn-icon-only.destructive[data-v-42b083b1]:hover {\n  color: var(--color-semantic-destructive);\n}\n.btn svg[data-v-42b083b1] {\n  pointer-events: none;\n}\n.dismiss[data-v-42b083b1] {\n  font-size: 2.5rem;\n  cursor: pointer;\n  position: absolute;\n  top: 1.3rem;\n  right: 1.3rem;\n  border: inherit solid 0.1rem;\n  stroke-width: 2.5rem;\n  stroke: currentColor;\n}\n@media only screen and (max-width: 749px) {\n.dismiss[data-v-42b083b1] {\n    font-size: 3rem;\n    top: 0.5rem;\n    right: 1rem;\n}\n}\nul li[data-v-42b083b1],\nol li[data-v-42b083b1] {\n  list-style: none;\n}\ntable .unwrap-data-item[data-v-42b083b1] {\n  height: 20px;\n}\ntable .colored-square[data-v-42b083b1] {\n  --square-color-1: #fff;\n  --square-color-2: #fff;\n  --square-size: 2rem;\n  width: var(--square-size);\n  height: var(--square-size);\n  border-radius: 0.4444444444rem;\n  display: inline-block;\n  background-color: var(--square-color-1);\n  overflow: hidden;\n  margin: auto;\n}\ntable .colored-square.multiple-color[data-v-42b083b1] {\n  display: flex;\n  position: relative;\n  background-color: transparent;\n  align-items: center;\n}\ntable .colored-square.multiple-color[data-v-42b083b1]::before, table .colored-square.multiple-color[data-v-42b083b1]::after {\n  content: \"\";\n  position: absolute;\n}\ntable .colored-square.multiple-color[data-v-42b083b1]::before {\n  border-left: calc(var(--square-size) / 1.1) solid var(--square-color-1);\n  border-bottom: calc(var(--square-size) / 0.8) solid transparent;\n}\ntable .colored-square.multiple-color[data-v-42b083b1]::after {\n  right: 0;\n  border-top: calc(var(--square-size) / 0.8) solid transparent;\n  border-right: calc(var(--square-size) / 1.1) solid var(--square-color-2);\n}\ntable .order-status-datatable-badge[data-v-42b083b1] {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  text-align: center;\n}\ntable .order-status-datatable-badge.pending[data-v-42b083b1] {\n  background: var(--color-semantic-untouched);\n}\ntable .order-status-datatable-badge.touchups[data-v-42b083b1], table .order-status-datatable-badge.photo-processing[data-v-42b083b1], table .order-status-datatable-badge.ready-to-print[data-v-42b083b1], table .order-status-datatable-badge.printing-packaging[data-v-42b083b1] {\n  background: var(--color-semantic-progress);\n}\ntable .order-status-datatable-badge.ready-to-ship[data-v-42b083b1] {\n  background: var(--color-semantic-waiting);\n  color: var(--color-text-normal-reversed);\n}\ntable .order-status-datatable-badge.completed[data-v-42b083b1] {\n  background: var(--color-semantic-success);\n}\ntable .order-status-datatable-badge.error[data-v-42b083b1], table .order-status-datatable-badge.cancelled[data-v-42b083b1], table .order-status-datatable-badge.correction-requested[data-v-42b083b1] {\n  background: var(--color-semantic-error);\n}\n.hidden[data-v-42b083b1] {\n  position: absolute !important;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n}\n.help[data-v-42b083b1], .help-text[data-v-42b083b1] {\n  display: inline;\n  height: inherit;\n  font-size: 1.6rem;\n  --font-weight: 300;\n  white-space: pre-wrap;\n  margin: 1.2rem 0 1.8rem;\n}\n.help-bubble[data-v-42b083b1] {\n  background-color: var(--color-semantic-info) !important;\n}\n.top-spaced[data-v-42b083b1] {\n  margin-top: auto;\n}\n.right-spaced[data-v-42b083b1] {\n  margin-right: auto;\n}\n.bottom-spaced[data-v-42b083b1] {\n  margin-bottom: auto;\n}\n.left-spaced[data-v-42b083b1] {\n  margin-left: auto;\n}\n.no-wrap[data-v-42b083b1] {\n  white-space: nowrap;\n}\n.text-overflow[data-v-42b083b1] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.activity-wrapper[data-v-42b083b1] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  background-color: transparent;\n  display: grid;\n  padding: 0 2rem 4rem;\n  gap: 1.5rem;\n  grid-template-columns: repeat(6, 1fr);\n  grid-auto-rows: min-content;\n  grid-auto-flow: dense;\n  transition-duration: 0.3s;\n  pointer-events: none;\n}\n@media only screen and (max-width: 989px) {\n.activity-wrapper[data-v-42b083b1] {\n    padding: 0 1rem 4rem;\n}\n}\n.activity-wrapper[data-v-42b083b1] > *,\n.activity-wrapper[data-v-42b083b1] > * {\n  pointer-events: all;\n}\n.activity-wrapper .activity-instructions[data-v-42b083b1] {\n  width: 100%;\n  color: currentColor;\n}\n.activity-wrapper .activity-instructions .sub-text[data-v-42b083b1] {\n  color: currentColor;\n  filter: hue-rotate(-35deg);\n}\n.activity-wrapper .activity-control[data-v-42b083b1] {\n  position: relative;\n  grid-column: span 6/auto;\n  width: 100%;\n  overflow: auto;\n  max-height: 100svh;\n  background-color: var(--color-background-secondary);\n  border-radius: 0.8rem;\n  padding: 1.5rem;\n  gap: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));\n  grid-auto-flow: dense;\n  pointer-events: none;\n}\n[data-theme-type=line] .activity-wrapper .activity-control[data-v-42b083b1] {\n  background-color: transparent;\n  border-radius: 0;\n  padding: 2.25rem 0 1.5rem 0;\n}\n[data-theme-type=line] .activity-wrapper .activity-control[data-v-42b083b1]::-webkit-scrollbar-track {\n  margin-top: 0.9rem;\n}\n[data-theme-type=block] .activity-wrapper .activity-control[data-v-42b083b1] {\n  background-color: var(--color-background-page-2);\n}\n.settings-box .activity-wrapper .activity-control[data-v-42b083b1] {\n  max-height: calc(100vh - var(--dialog-box-inset) * 2vh);\n}\n.activity-wrapper .activity-control[data-v-42b083b1] > *,\n.activity-wrapper .activity-control[data-v-42b083b1] > * {\n  pointer-events: all;\n}\n.activity-wrapper .activity-control.fit-sides[data-v-42b083b1] {\n  padding: 1.5rem 0 0;\n}\n@media only screen and (max-width: 749px) {\n.activity-wrapper .activity-control[data-v-42b083b1] {\n    grid-template-columns: 1fr;\n}\n.activity-wrapper .activity-control > div[data-v-42b083b1] {\n    grid-column: 1/-1;\n}\n}\n.activity-wrapper .activity-control > .h5[data-v-42b083b1] {\n  white-space: nowrap;\n  width: -moz-min-content;\n  width: min-content;\n  height: -moz-min-content;\n  height: min-content;\n  margin-right: auto;\n  grid-column: 1/-1;\n  margin-top: 1.3rem;\n  --font-weight: 700;\n}\n.activity-wrapper .activity-control .h6[data-v-42b083b1], .activity-wrapper .activity-control label[data-v-42b083b1], .activity-wrapper .activity-control fieldset legend[data-v-42b083b1], fieldset .activity-wrapper .activity-control legend[data-v-42b083b1] {\n  --font-weight: 700;\n}\n.activity-wrapper .activity-control p[data-v-42b083b1] {\n  max-width: 80ch;\n}\n.activity-wrapper .activity-control > div[data-v-42b083b1] {\n  grid-row: span 1/auto;\n  height: 100%;\n  border-radius: 0.8rem;\n}\n.activity-wrapper .activity-control > div .overlay-info[data-v-42b083b1] {\n  grid-column: 1/span 1;\n  grid-row: 1/span 1;\n  order: 0;\n}\n@media only screen and (max-width: 749px) {\n.activity-wrapper .activity-control > div .overlay-info[data-v-42b083b1] {\n    order: -1;\n    grid-column: 1/-1;\n}\n}\n.activity-wrapper .activity-control .settings-line[data-v-42b083b1] {\n  grid-column: 1/-1;\n  margin: 0;\n  border-bottom: 2px solid var(--color-text-disabled);\n  margin-bottom: 0.3rem;\n}\n.activity-wrapper .span-100[data-v-42b083b1] {\n  grid-column: 1/-1;\n  display: contents;\n}\n.activity-wrapper .span-100[data-v-42b083b1]:is(hr) {\n  display: block;\n  width: 100%;\n}\n.activity-wrapper .span-100 > .h5[data-v-42b083b1] {\n  grid-column: 1/-1;\n  margin: 0 !important;\n}\n.section-ui[data-v-42b083b1] {\n  height: auto !important;\n  display: flex;\n  gap: 0.5rem;\n}\n@media only screen and (max-width: 749px) {\n.section-ui[data-v-42b083b1] {\n    position: relative !important;\n    top: 0 !important;\n    right: 0 !important;\n    margin-left: auto;\n}\n}\n.section-ui.top-right[data-v-42b083b1] {\n  position: absolute;\n  top: 1rem;\n  right: 1.5rem;\n  padding: 1rem 0 1rem 1rem;\n}\n.section-ui.top-right.sessions[data-v-42b083b1] {\n  transform: translate(-1.8rem);\n}\n.activity-wrapper > .section-ui.top-right[data-v-42b083b1] {\n  z-index: 100;\n  border-radius: 0.8rem;\n  background-color: unset;\n  padding: 1rem;\n  grid-row: 3/4;\n  top: unset;\n  right: unset;\n  justify-self: end;\n  transform: translate(-5.4rem, 1rem);\n}\n@media only screen and (max-width: 749px) {\n.activity-wrapper > .section-ui.top-right[data-v-42b083b1] {\n    position: absolute !important;\n    top: unset !important;\n    right: unset !important;\n    margin-left: unset !important;\n    transform: translate(-4.6rem, 1rem);\n}\n}\n.pane-sub .section-ui.top-right[data-v-42b083b1] {\n  right: 2.5rem;\n}\n.table-holder[data-v-42b083b1] {\n  width: 100%;\n}\n[data-theme-type=block] .table-holder > .h5[data-v-42b083b1], [data-theme-type=block] .table-holder .h6[data-v-42b083b1], [data-theme-type=block] .table-holder label[data-v-42b083b1], [data-theme-type=block] .table-holder fieldset legend[data-v-42b083b1], fieldset [data-theme-type=block] .table-holder legend[data-v-42b083b1] {\n  transform: translateX(-2rem);\n}\n.settings-box [data-theme-type=block] .table-holder > .h5[data-v-42b083b1], .settings-box [data-theme-type=block] .table-holder .h6[data-v-42b083b1], .settings-box [data-theme-type=block] .table-holder label[data-v-42b083b1], .settings-box [data-theme-type=block] .table-holder fieldset legend[data-v-42b083b1], fieldset .settings-box [data-theme-type=block] .table-holder legend[data-v-42b083b1] {\n  transform: translateX(0);\n}\n.table-holder .filter-container[data-v-42b083b1] {\n  display: contents;\n}\n.session-color[data-v-42b083b1] {\n  margin-top: -0.5rem;\n}\n.assign[data-v-42b083b1] {\n  display: flex;\n  flex-direction: column;\n  gap: calc(1.5rem / 2);\n}\n.actions-box[data-v-42b083b1] {\n  display: flex;\n  flex-direction: row-reverse;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("3e786474", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("29bbb3d1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("e64c42a4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ }),

/***/ "./src/datasources/generic_data_source.ts":
/*!************************************************!*\
  !*** ./src/datasources/generic_data_source.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericDataSource: function() { return /* binding */ GenericDataSource; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class GenericDataSource {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "name", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
  }
  static from(value, name, options) {
    const dataSource = new GenericDataSource();
    dataSource.value = value;
    dataSource.name = name;
    dataSource.options = options;
    return dataSource;
  }
  getName() {
    return this.name;
  }
  getOptions() {
    if (!this.options) {
      throw new Error('JsonDataSource getOptions method was called but there is no options');
    }
    return Array.from(this.options);
  }
  getValue() {
    return this.value;
  }
}

/***/ }),

/***/ "./src/utils/filter_functions/boolean_filter_function.ts":
/*!***************************************************************!*\
  !*** ./src/utils/filter_functions/boolean_filter_function.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanFilterFunction: function() { return /* binding */ BooleanFilterFunction; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/filter_function */ "./src/utils/filter_functions/filter_function.ts");

/**
 * Will check if the value in the column 'category' is identical to the provided value
 */
class BooleanFilterFunction extends _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_0__.FilterFunction {
  /**
   * Receive the value of the filter
   * @param value is the value of the filter
   * @param column is the column of the table
   */
  constructor(value, type, column) {
    super(value, 'is', column);
  }
  /**
   * Will validate if a value can be handled
   * @param value
   */
  static canHandle(value) {
    return ['true', 'false', 'unset'].includes(value);
  }
  createRemoteFilters(builder) {
    builder.addFilter({
      column: this.column,
      operator: '==',
      operand: this.value
    }, this.column);
  }
  /**
   * Will check the if the value of the column is identical to the value of the filter
   * @param value is the value of the column in the table
   */
  filter(value) {
    return this.value === value;
  }
}

/***/ }),

/***/ "./src/utils/filter_functions/date_filter_function.ts":
/*!************************************************************!*\
  !*** ./src/utils/filter_functions/date_filter_function.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFilterFunction: function() { return /* binding */ DateFilterFunction; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/filter_function */ "./src/utils/filter_functions/filter_function.ts");

/**
 * Will check if the value in the column 'date' is identical to the provided value
 */
class DateFilterFunction extends _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_0__.FilterFunction {
  /**
   * Receive the value of the filter
   * @param value is the value of the filter
   * @param type
   * @param column is the column of the table
   */
  constructor(value, type, column = 'created') {
    super(value, 'is', column);
  }
  /**
   * Will validate if a value can be handled
   * @param value
   */
  static canHandle(value) {
    return true;
  }
  createRemoteFilters(builder) {
    if (!isNaN(this.value.start?.getDate())) {
      builder.addFilter({
        column: this.column,
        operator: '>=',
        operand: this.value.start
      }, this.column + 'From');
    }
    if (!isNaN(this.value.end?.getDate())) {
      builder.addFilter({
        column: this.column,
        operator: '<=',
        operand: this.value.end
      }, this.column + 'To');
    }
  }
  /**
   * Will check the if the value of the column is between the values of the filter
   * @param value is the value of the column in the table
   */
  filter(value) {
    let dateStart = this.value[0].replace(/-/g, '');
    let dateEnd = this.value[1].replace(/-/g, '');
    const dateValue = value.replace(/-/g, '');
    if (dateStart === '') {
      dateStart = 0;
    }
    if (dateEnd === '') {
      dateEnd = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    }
    if (dateStart >= dateEnd) {
      const tempDate = dateStart;
      dateStart = dateEnd;
      dateEnd = tempDate;
    }
    return dateStart - dateValue <= 0 && dateEnd - dateValue >= 0;
  }
}

/***/ }),

/***/ "./src/utils/filter_functions/filter_function.ts":
/*!*******************************************************!*\
  !*** ./src/utils/filter_functions/filter_function.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterFunction: function() { return /* binding */ FilterFunction; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class FilterFunction {
  constructor(value, type, column) {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "column", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
    this.type = type;
    this.value = value;
    this.column = column;
  }
  static canHandle(value) {
    throw new Error('Not Implemented');
  }
  createRemoteFilters(builder) {
    throw new Error('Not Implemented');
  }
  filter(value) {
    throw new Error('Not Implemented');
  }
}

/***/ }),

/***/ "./src/utils/filter_functions/id_filter_function.ts":
/*!**********************************************************!*\
  !*** ./src/utils/filter_functions/id_filter_function.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdFilterFunction: function() { return /* binding */ IdFilterFunction; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.every.js */ "./node_modules/core-js/modules/es.iterator.every.js");
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/filter_function */ "./src/utils/filter_functions/filter_function.ts");







function isIdable(value) {
  value = value.toString();
  return (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__.isInteger)(value) || value.replace(/[^-]/g, '').length === 1 && (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__.isInteger)(value.replace(/[-\s]/g, ''));
}
/**
 * Will check if the value in the column 'id' is identical to the provided value
 */
class IdFilterFunction extends _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_6__.FilterFunction {
  /**
   * Receive the value of the filter
   * @param value is the value of the filter
   * @param type defines whether the filter is inclusive or exclusive
   * @param column is the column of the table
   */
  constructor(value, type, column = 'id') {
    if (!Array.isArray(value) && typeof value === 'string') {
      value = value.split(',');
    }
    if (!Array.isArray(value) && typeof value === 'number') {
      value = [value];
    }
    if (Array.isArray(value) && value.some(i => isIdable(i))) {
      // @ts-ignore
      value = value.filter(i => isIdable(i)).map(i => i.toString());
    }
    // @ts-ignore
    if (Array.isArray(value) && value.every(i => isIdable(i))) {
      super([...value], type, column);
    } else {
      super([], type, column);
    }
  }
  /**
   * Will validate if a value can be handled
   * @param value
   */
  static canHandle(value) {
    return (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__.isInteger)(value) || value.split(',').every(value => (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__.isInteger)(value));
  }
  createRemoteFilters(builder) {
    if (this.value.length === 0) {
      return;
    }
    const ids = this.value.filter(i => !i.includes('-')).map(i => parseInt(i, 10));
    const ranges = this.value.filter(i => i.includes('-')).map(i => i.trim());
    if (ids.length > 0) {
      builder.addFilter({
        column: this.column,
        operator: this.type === 'is' || this.type === 'contains' ? 'IN' : 'NOT IN',
        operand: [ids]
      });
    }
    if (ranges.length > 0) {
      for (const range of ranges) {
        if (range.startsWith('-')) {
          builder.addFilter({
            column: this.column,
            operator: this.type === 'is' || this.type === 'contains' ? '<=' : '>',
            operand: parseInt(range.substring(1).trim(), 10)
          });
        } else if (range.endsWith('-')) {
          builder.addFilter({
            column: this.column,
            operator: this.type ? '>=' : '<',
            operand: parseInt(range.substring(0, range.length - 1).trim(), 10)
          });
        } else {
          const [start, end] = range.split('-');
          builder.addFilter({
            column: this.column,
            operator: this.type ? '<=>' : '><',
            operand: [parseInt(start.trim(), 10), parseInt(end.trim(), 10)]
          });
        }
      }
    }
  }
  /**
   * Will check the if the value of the column contain to the value of the filter
   * @param value is the value of the column in the table
   */
  filter(value) {
    return this.value.some(i => value.includes(i));
  }
}

/***/ }),

/***/ "./src/utils/filter_functions/string_filter_function.ts":
/*!**************************************************************!*\
  !*** ./src/utils/filter_functions/string_filter_function.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringFilterFunction: function() { return /* binding */ StringFilterFunction; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/filter_function */ "./src/utils/filter_functions/filter_function.ts");




/**
 * Will check if the value in the column 'name' is identical to the provided value
 */
class StringFilterFunction extends _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_3__.FilterFunction {
  /**
   * Receive the value of the filter
   * @param value is the value of the filter
   * @param column is the column of the table
   */
  constructor(value, type, column = 'internal_name') {
    if (!Array.isArray(value)) {
      value = value.split(',');
    }
    super(value, type, column);
  }
  /**
   * Will validate if a value can be handled
   * @param value
   */
  static canHandle(value) {
    return true;
  }
  createRemoteFilters(builder) {
    const wildcard = ['contains', 'contains-not'].includes(this.type) ? '%' : '';
    builder.addFilter({
      column: this.column,
      operator: ['is-not', 'contains-not'].includes(this.type) ? '~~ NOT IN' : '~~ IN',
      operand: [this.value.map(i => `${wildcard}${i.trim()}${wildcard}`)]
    });
  }
  /**
   * Will check the if the value of the column contain to the value of the filter
   * @param value is the value of the column in the table
   */
  filter(value) {
    return this.value.some(v => value.toLowerCase().includes(v.toLowerCase()));
  }
}

/***/ }),

/***/ "./src/utils/filter_functions/uuid_filter_function.ts":
/*!************************************************************!*\
  !*** ./src/utils/filter_functions/uuid_filter_function.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UuidFilterFunction: function() { return /* binding */ UuidFilterFunction; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.every.js */ "./node_modules/core-js/modules/es.iterator.every.js");
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/filter_functions/filter_function */ "./src/utils/filter_functions/filter_function.ts");





/**
 * Will check if the value in the column 'id' is identical to the provided value
 */
class UuidFilterFunction extends _pictaccio_admin_gui_utils_filter_functions_filter_function__WEBPACK_IMPORTED_MODULE_4__.FilterFunction {
  /**
   * Receive the value of the filter
   * @param value is the value of the filter
   * @param column is the column of the table
   */
  constructor(value, type, column = 'id') {
    if (!Array.isArray(value) && typeof value === 'string') {
      value = value.split(',');
    }
    if (Array.isArray(value) && value.every(i => typeof i === 'string')) {
      super([...value], type, column);
    } else {
      super([], type, column);
    }
  }
  /**
   * Will validate if a value can be handled
   * @param value
   */
  static canHandle(value) {
    return (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_3__.isInteger)(value) || value.split(',').every(value => (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_3__.isInteger)(value));
  }
  createRemoteFilters(builder) {
    builder.addFilter({
      column: this.column,
      operator: 'IN',
      operand: this.value
    });
  }
  /**
   * Will check the if the value of the column contain to the value of the filter
   * @param value is the value of the column in the table
   */
  filter(value) {
    return this.value.some(i => value.includes(i));
  }
}

/***/ }),

/***/ "./src/views/components/widgets/EllipsisMenu.vue":
/*!*******************************************************!*\
  !*** ./src/views/components/widgets/EllipsisMenu.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EllipsisMenu_vue_vue_type_template_id_2558d202_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true */ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true");
/* harmony import */ var _EllipsisMenu_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EllipsisMenu.vue?vue&type=script&lang=ts */ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=script&lang=ts");
/* harmony import */ var _EllipsisMenu_vue_vue_type_style_index_0_id_2558d202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true */ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true");
/* harmony import */ var _EllipsisMenu_vue_vue_type_style_index_1_id_2558d202_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true */ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_EllipsisMenu_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EllipsisMenu_vue_vue_type_template_id_2558d202_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2558d202"],['__file',"src/views/components/widgets/EllipsisMenu.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=script&lang=ts":
/*!*******************************************************************************!*\
  !*** ./src/views/components/widgets/EllipsisMenu.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EllipsisMenu.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_0_id_2558d202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=0&id=2558d202&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_0_id_2558d202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_0_id_2558d202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_0_id_2558d202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_0_id_2558d202_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_1_id_2558d202_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=style&index=1&id=2558d202&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_1_id_2558d202_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_1_id_2558d202_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_1_id_2558d202_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_style_index_1_id_2558d202_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/components/widgets/EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true":
/*!*********************************************************************************************************!*\
  !*** ./src/views/components/widgets/EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_template_id_2558d202_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EllipsisMenu_vue_vue_type_template_id_2558d202_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/components/widgets/EllipsisMenu.vue?vue&type=template&id=2558d202&scoped=true&ts=true");


/***/ }),

/***/ "./src/views/private/activities/Orders.vue":
/*!*************************************************!*\
  !*** ./src/views/private/activities/Orders.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_42b083b1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true */ "./src/views/private/activities/Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true");
/* harmony import */ var _Orders_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=ts */ "./src/views/private/activities/Orders.vue?vue&type=script&lang=ts");
/* harmony import */ var _Orders_vue_vue_type_style_index_0_id_42b083b1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true */ "./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Orders_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Orders_vue_vue_type_template_id_42b083b1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-42b083b1"],['__file',"src/views/private/activities/Orders.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/private/activities/Orders.vue?vue&type=script&lang=ts":
/*!*************************************************************************!*\
  !*** ./src/views/private/activities/Orders.vue?vue&type=script&lang=ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Orders.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_style_index_0_id_42b083b1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=style&index=0&id=42b083b1&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_style_index_0_id_42b083b1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_style_index_0_id_42b083b1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_style_index_0_id_42b083b1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_style_index_0_id_42b083b1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/private/activities/Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true":
/*!***************************************************************************************************!*\
  !*** ./src/views/private/activities/Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_template_id_42b083b1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Orders_vue_vue_type_template_id_42b083b1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/Orders.vue?vue&type=template&id=42b083b1&scoped=true&ts=true");


/***/ }),

/***/ "./src/views/private/activities/companions/data_table_columns/orders_columns.ts":
/*!**************************************************************************************!*\
  !*** ./src/views/private/activities/companions/data_table_columns/orders_columns.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ORDERS_COLUMNS: function() { return /* binding */ ORDERS_COLUMNS; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.find.js */ "./node_modules/core-js/modules/es.iterator.find.js");
/* harmony import */ var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/environment */ "./src/environment/index.ts");
/* harmony import */ var _pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/i18n */ "./src/i18n/index.ts");
/* harmony import */ var _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/store */ "./src/store/index.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_user_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/user_date */ "./src/utils/user_date.ts");







const ORDERS_COLUMNS = {
  headers: [{
    name: 'id',
    tableOnly: true,
    locale: 'dataTable.headers.id',
    size: '6rem'
  },
  // {
  //     name: 'sessionColor',
  //     tableOnly: true,
  //     locale: 'dataTable.headers.sessionColor',
  //     size: '5rem',
  //     renderer: (value, localizeValue, row) => {
  //         if (!row['session'] && !row['session'].apply.color) {
  //             return '--';
  //         }
  //         const color = row['session'].apply.color;
  //         return `<i class="colored-square ${color.multipleColor ? 'multiple-color' : ''}"
  //                 style="--square-color-1: ${color.color1}; --square-color-2: ${color.color2};"></i>`
  //     }
  // },
  {
    name: 'name',
    tableOnly: true,
    locale: 'dataTable.headers.name',
    size: 'minmax(10rem, 1fr)',
    renderer: (value, localizeValue, row) => {
      return `<span class="no-wrap text-overflow">${row['contact'] ? row['contact'].name : ''}</span>`;
    }
  }, {
    name: 'subjects',
    tableOnly: true,
    locale: 'dataTable.headers.subjects',
    size: 'minmax(10rem, 1fr)',
    renderer: (value, localizeValue, row) => {
      const subjectCodes = [];
      for (const selection of Object.values(row['photo_selection'])) {
        if (!selection['image'] && !selection['image']?.subjectCode && selection['image']?.subjectCode === undefined) {
          continue;
        }
        if (!subjectCodes.includes(selection['image']['subjectCode'])) {
          subjectCodes.push(selection['image']['subjectCode']);
        }
      }
      return subjectCodes.join('<br>');
    }
  }, {
    name: 'created_on',
    tableOnly: true,
    locale: 'dataTable.headers.date',
    size: 'minmax(10rem, 1fr)',
    allowRendererSorting: true,
    renderer: value => (0,_pictaccio_admin_gui_utils_user_date__WEBPACK_IMPORTED_MODULE_6__.formatDateForUser)(new Date(value), 'full')
  }, {
    name: 'paid',
    tableOnly: true,
    locale: 'dataTable.headers.paid',
    size: '8rem',
    renderer: value => value ? _pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.global.t('generic.ui.yes') : _pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.global.t('generic.ui.no')
  }, {
    name: 'sale_total',
    tableOnly: true,
    locale: 'dataTable.headers.total',
    size: '8rem',
    renderer: value => value ? `$${value}` : '--'
  }, {
    name: 'deliveryOption',
    tableOnly: true,
    locale: 'dataTable.headers.method',
    size: 'minmax(14rem, 1fr)',
    renderer: value => {
      if (!value || !Object.keys(value).includes('internal_name')) {
        return '--';
      }
      return value.internal_name;
    }
  }, {
    name: 'status',
    tableOnly: true,
    locale: 'dataTable.headers.status',
    size: '10rem',
    allowRendererSorting: true,
    renderer: (value, localizeValue, row) => `<span class="order-status-datatable-badge ${row.productionStatus?.status ?? 'pending'}">` + `${_pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.global.t(`order.status.${row.productionStatus?.status ?? 'pending'}`)}</span>`,
    localizeValue: 'rowPath:flags.status'
  }, {
    name: 'assignee',
    tableOnly: true,
    locale: 'dataTable.headers.assignee',
    size: '12rem',
    allowRendererSorting: true,
    renderer: (value, localizeValue, row) => {
      const debugStore = _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_5__.store;
      const user = debugStore.getters['User/usersList'].find(user => user.id === row.assignment?.user.id);
      return `<span class="assignee">${user ? user.info.name.firstName + ' ' + user.info.name.lastName : _pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.global.t('order.unassigned')}</span>`;
    }
  }],
  visibleHeaders: ['id', 'sessionColor', 'name', 'subjects', 'created_on', 'paid', 'sale_total', 'deliveryOption', 'status', 'assignee'],
  rows: [],
  computeNewTabUrl: rowId => {
    return `${_pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_3__.environment.guiUrl}activities/orders/${rowId}`;
  }
};

/***/ })

}]);
//# sourceMappingURL=src_views_private_activities_Orders_vue.js.map