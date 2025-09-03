"use strict";
(self["webpackChunk_pictaccio_admin_gui"] = self["webpackChunk_pictaccio_admin_gui"] || []).push([["src_views_private_activities_companions_crud_dialogs_CrudDialogCatalog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/datasources/generic_data_source */ "./src/datasources/generic_data_source.ts");
/* harmony import */ var _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/environment */ "./src/environment/index.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_prompt */ "./src/utils/global_prompt.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_crud_dialogs_activity_crud_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog */ "./src/views/private/activities/companions/crud_dialogs/activity_crud_dialog.ts");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_CrudDialog_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue */ "./src/views/private/activities/companions/CrudDialog.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_product_catalog_columns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_catalog_columns */ "./src/views/private/activities/companions/data_table_columns/product_catalog_columns.ts");
/* harmony import */ var _pictaccio_shared_utils_internal_name_constraint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pictaccio/shared/utils/internal_name_constraint */ "./node_modules/@pictaccio/shared/dist/src/utils/internal_name_constraint.js");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-facing-decorator */ "./node_modules/vue-facing-decorator/dist/esm/index.js");














let CrudDialogCatalog = class CrudDialogCatalog extends _pictaccio_admin_gui_views_private_activities_companions_crud_dialogs_activity_crud_dialog__WEBPACK_IMPORTED_MODULE_9__["default"] {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columns", _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_product_catalog_columns__WEBPACK_IMPORTED_MODULE_11__.PRODUCT_CATALOG_COLUMNS);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "crudDialog", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "originalRow", void 0);
    // Feature flags
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "archiveFeature", _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_6__.environment.features.archiveDeleteProductCatalog);
  }
  getFields() {
    return this.crudDialog.getFields();
  }
  openDialog(rowId, row) {
    this.crudDialogStatus = rowId ? 'update' : 'create';
    this.editId = rowId;
    this.rowSelected = row;
    this.originalRow = row;
    this.crudDialog.setCrudDialogStatus(this.crudDialogStatus);
    this.crudDialog.openDialog();
    this.$nextTick(() => {
      this.updateCrud(rowId, row);
    });
  }
  refreshField(fieldRef, dataSource) {
    this.$refs['crud-dialog'].refreshField(fieldRef, dataSource);
  }
  async updateCrud(rowId, row) {
    await this.$store.dispatch('ProductsReader/productsRead');
    const options = [{
      id: 'required',
      value: true
    }];
    const internalNameOptions = [{
      id: 'eventListeners',
      value: {
        blur: event => this.internalNameBlur(event)
      }
    }, ...options];
    const products = this.$store.getters['ProductsReader/products'].map(i => ({
      id: i.id,
      value: i.value
    }));
    this.crudDialog.setRowSelected(row);
    this.crudDialog.update({
      internal_name: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
      products: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['products'].map(product => product.id.toString()) : null, 'products', products)
    });
  }
  /* LIFECYCLE */
  async mounted() {
    super.mounted('ProductCatalogs');
    this.crudDialog = this.$refs['crud-dialog'];
    this.crudDialog.setActivity('productCatalogs');
    this.crudDialog.setColumns(this.columns);
  }
  /* EVENT HANDLER */
  async confirmClick() {
    const formValues = this.getFields();
    if (!formValues['internal_name']) {
      await (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_7__.globalPrompt)({
        buttonType: 'ok',
        icon: ['', ''],
        message: this.$t('activities.productCatalogs.prompts.missingValueMessage'),
        title: this.$t('activities.productCatalogs.prompts.missingValueTitle')
      });
      return;
    }
    const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [i.locale, formValues['internal_name']]));
    const products = formValues['products'].sort((a, b) => a.order - b.order).map(item => parseInt(item.optionId, 10));
    const values = {
      name_locale: nameLocale,
      internal_name: formValues['internal_name'],
      products
    };
    if (!(0,_pictaccio_shared_utils_internal_name_constraint__WEBPACK_IMPORTED_MODULE_12__.validateInternalNameCharacters)(values.internal_name)) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('activities.all.internalNameUseWrongCharacters'), 'error');
      return;
    }
    const internalNameExists = await this.$store.dispatch('ProductCatalogs/query', [[{
      column: 'internal_name',
      operator: '~~',
      operand: values.internal_name
    }]]);
    if (!(!internalNameExists || internalNameExists.length === 0) && values.internal_name !== this.originalRow.internal_name && this.crudDialogStatus === 'update') {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('activities.all.internalNameExists'), 'error');
      return;
    }
    let result;
    if (this.crudDialogStatus === 'create') {
      try {
        result = await this.$store.dispatch('ProductCatalogs/add', {
          item: values
        });
        if (result.createdId !== null) {
          this.dialogClose();
        }
      } catch (error) {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('messages.createError'), 'error');
      }
    } else {
      try {
        result = await this.$store.dispatch('ProductCatalogs/update', {
          filters: [[{
            column: 'id',
            operator: '==',
            operand: this.editId
          }]],
          values
        });
        await this.$store.dispatch('CrudOverlay/removeDirty', {
          force: true
        });
        this.dialogClose();
      } catch (error) {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('messages.saveError'), 'error');
      }
    }
    await this.$store.dispatch('ProductCatalogsReader/productCatalogsRead', true);
    this.$emit('update', {
      id: this.editId ?? result?.createdId
    });
  }
  async deleteClick(id, row) {
    if (!this.archiveFeature) {
      return;
    }
    if (this.$validateCapability('product:delete') && (await (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_7__.globalPrompt)({
      buttonType: 'yes-no',
      icon: ['', ''],
      message: this.$t('generic.prompt.destructive', {
        item: row.internal_name
      }),
      title: `${this.$t('generic.ui.delete')} ${this.$t('activities.productCatalogs.single')}`
    })) === 'yes') {
      try {
        await this.$store.dispatch('ProductCatalogs/delete', {
          filters: [[{
            column: 'id',
            operand: (id ?? this.editId).toString(),
            operator: '=='
          }]]
        });
        this.$emit('update');
      } catch (error) {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('messages.deleteError'), 'error');
      }
    }
  }
  dialogClose() {
    this.crudDialog.closeDialog();
    this.crudDialogStatus = 'read';
    this.editId = null;
    this.rowSelected = null;
  }
};
CrudDialogCatalog = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_13__.Component)({
  name: 'Product Categories',
  components: {
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon,
    CrudDialog: _pictaccio_admin_gui_views_private_activities_companions_CrudDialog_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  emits: ['update'],
  expose: ['deleteClick', 'getFields', 'openDialog', 'refreshField', 'updateCrud']
})], CrudDialogCatalog);
/* harmony default export */ __webpack_exports__["default"] = (CrudDialogCatalog);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");



function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_crud_dialog = (0,vue__WEBPACK_IMPORTED_MODULE_2__.resolveComponent)("crud-dialog");
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)(_component_crud_dialog, {
    ref: "crud-dialog",
    permission: "product",
    allowArchiveDelete: _ctx.archiveFeature,
    onClose: _ctx.dialogClose,
    onConfirm: _ctx.confirmClick,
    onDelete: _ctx.deleteClick
  }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.createSlots)({
    _: 2 /* DYNAMIC */
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)(_ctx.columns.headers.filter(header => !header['tableOnly']), field => {
    return {
      name: field.name,
      fn: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, field.name)])
    };
  })]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["allowArchiveDelete", "onClose", "onConfirm", "onDelete"]);
}

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue":
/*!************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrudDialogCatalog_vue_vue_type_template_id_20141afa_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true */ "./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true");
/* harmony import */ var _CrudDialogCatalog_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudDialogCatalog.vue?vue&type=script&lang=ts */ "./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=script&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CrudDialogCatalog_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CrudDialogCatalog_vue_vue_type_template_id_20141afa_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogCatalog_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogCatalog_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDialogCatalog.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogCatalog_vue_vue_type_template_id_20141afa_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogCatalog_vue_vue_type_template_id_20141afa_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogCatalog.vue?vue&type=template&id=20141afa&ts=true");


/***/ }),

/***/ "./src/views/private/activities/companions/data_table_columns/product_catalog_columns.ts":
/*!***********************************************************************************************!*\
  !*** ./src/views/private/activities/companions/data_table_columns/product_catalog_columns.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_CATALOG_COLUMNS: function() { return /* binding */ PRODUCT_CATALOG_COLUMNS; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);


const PRODUCT_CATALOG_COLUMNS = {
  headers: [{
    name: 'id',
    componentName: 'Id',
    locale: 'dataTable.headers.id',
    size: '6rem',
    tableOnly: true,
    order: 0
  }, {
    name: 'internal_name',
    componentName: 'TextGeneric',
    help: 'internalNameHelp',
    locale: 'dataTable.headers.internalName.catalogs',
    size: 'minmax(14rem, 1fr)',
    order: 1
  }, {
    name: 'products',
    componentName: 'CrudListSelect',
    locale: 'dataTable.headers.products',
    help: 'productCatalogsProductHelp',
    size: 'minmax(15rem, 2fr)',
    renderer: value => {
      if (!value || !Array.isArray(value)) {
        return '';
      }
      return value.map(product => `<span>${product.internal_name}</span>`)?.join(' ');
    },
    order: 3
  }],
  visibleHeaders: ['id', 'internal_name', 'products'],
  rows: []
};

/***/ })

}]);
//# sourceMappingURL=src_views_private_activities_companions_crud_dialogs_CrudDialogCatalog_vue.js.map