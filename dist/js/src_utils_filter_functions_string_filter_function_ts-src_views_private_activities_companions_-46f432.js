"use strict";
(self["webpackChunk_pictaccio_admin_gui"] = self["webpackChunk_pictaccio_admin_gui"] || []).push([["src_utils_filter_functions_string_filter_function_ts-src_views_private_activities_companions_-46f432"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/datasources/generic_data_source */ "./src/datasources/generic_data_source.ts");
/* harmony import */ var _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/environment */ "./src/environment/index.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_prompt */ "./src/utils/global_prompt.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_crud_dialogs_activity_crud_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/crud_dialogs/activity_crud_dialog */ "./src/views/private/activities/companions/crud_dialogs/activity_crud_dialog.ts");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_CrudDialog_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/CrudDialog.vue */ "./src/views/private/activities/companions/CrudDialog.vue");
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_product_themes_columns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_themes_columns */ "./src/views/private/activities/companions/data_table_columns/product_themes_columns.ts");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-facing-decorator */ "./node_modules/vue-facing-decorator/dist/esm/index.js");













let CrudDialogProductTheme = class CrudDialogProductTheme extends _pictaccio_admin_gui_views_private_activities_companions_crud_dialogs_activity_crud_dialog__WEBPACK_IMPORTED_MODULE_9__["default"] {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columns", _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_product_themes_columns__WEBPACK_IMPORTED_MODULE_11__.PRODUCT_THEMES_COLUMNS);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "crudDialog", void 0);
    // Feature flags
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "archiveFeature", _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_6__.environment.features.archiveDeleteProductTheme);
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
      title: `${this.$t('generic.ui.delete')} ${this.$t('activities.productThemes.single')}`
    })) === 'yes') {
      try {
        const {
          affected
        } = await this.$store.dispatch('ProductThemes/delete', {
          filters: [[{
            column: 'id',
            operand: (id ?? this.editId).toString(),
            operator: '=='
          }]]
        });
        if (affected === 1) {
          await this.$store.dispatch('ProductThemes/invalidateRange', {
            start: this.editId,
            end: null
          });
          await this.$refs['product-themes-table'].refresh();
          await this.$store.dispatch('ProductThemesReader/makeDirty');
          this.dialogClose();
        } else {
          (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('ERROR_DELETING'), 'error');
        }
        this.$emit('update');
      } catch (error) {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_8__.globalToast)(this.$t('messages.deleteError'), 'error');
      }
    }
  }
  getFields() {
    return this.crudDialog.getFields();
  }
  openDialog(rowId, row) {
    this.crudDialogStatus = rowId ? 'update' : 'create';
    this.editId = rowId;
    this.rowSelected = row;
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
    this.crudDialog.setRowSelected(row ?? null);
    this.crudDialog.update({
      internal_name: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
      themes: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['themes'] : null, 'themes', options)
    });
  }
  /* LIFECYCLE */
  async mounted() {
    super.mounted('ProductThemes');
    this.crudDialog = this.$refs['crud-dialog'];
    this.crudDialog.setActivity('products');
    this.crudDialog.setColumns(this.columns);
  }
  /* EVENT HANDLER */
  async confirmClick() {
    const form = this.crudDialog;
    const formValues = form.getFields();
    const initialArray = Object.entries(formValues).filter(([k, _]) => k.startsWith('themes_'));
    const themes = {};
    for (const [key, value] of initialArray) {
      const [_, index, lang] = key.split('_');
      if (!themes[index]) {
        themes[index] = {};
      }
      themes[index][lang] = value;
    }
    const values = {
      id: this.editId,
      internal_name: formValues['internal_name'],
      themes: themes,
      scrubFlag: false
    };
    if (await this.internalNameValidation(values.internal_name)) {
      return;
    }
    let result;
    if (this.crudDialogStatus === 'create') {
      try {
        result = await this.$store.dispatch('ProductThemes/add', {
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
        if (_pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_6__.environment.features.scrubProducts) {
          values.scrubFlag = (await (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_7__.globalPrompt)({
            buttonType: 'yes-no',
            icon: ['', ''],
            message: this.$t('activities.productThemes.prompt.update'),
            title: `${this.$t('generic.ui.update')}`
          })) === 'yes';
        } else {
          values.scrubFlag = false;
        }
        result = await this.$store.dispatch('ProductThemes/update', {
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
    await this.$store.dispatch('ProductThemesReader/productThemesRead', true);
    this.$emit('update', {
      id: this.editId ?? result?.createdId
    });
  }
  dialogClose() {
    this.crudDialog.closeDialog();
    this.crudDialogStatus = 'read';
    this.editId = null;
    this.rowSelected = null;
  }
};
CrudDialogProductTheme = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_12__.Component)({
  name: 'Crud dialog product theme',
  components: {
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon,
    CrudDialog: _pictaccio_admin_gui_views_private_activities_companions_CrudDialog_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  emits: ['update'],
  expose: ['deleteClick', 'getFields', 'openDialog', 'refreshField', 'updateCrud']
})], CrudDialogProductTheme);
/* harmony default export */ __webpack_exports__["default"] = (CrudDialogProductTheme);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/utils/filter_functions/string_filter_function.ts":
/*!**************************************************************!*\
  !*** ./src/utils/filter_functions/string_filter_function.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue":
/*!*****************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrudDialogProductTheme_vue_vue_type_template_id_6e386489_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true */ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true");
/* harmony import */ var _CrudDialogProductTheme_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudDialogProductTheme.vue?vue&type=script&lang=ts */ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=script&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CrudDialogProductTheme_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CrudDialogProductTheme_vue_vue_type_template_id_6e386489_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductTheme_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductTheme_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDialogProductTheme.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true":
/*!*******************************************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductTheme_vue_vue_type_template_id_6e386489_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductTheme_vue_vue_type_template_id_6e386489_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductTheme.vue?vue&type=template&id=6e386489&ts=true");


/***/ }),

/***/ "./src/views/private/activities/companions/data_table_columns/product_themes_columns.ts":
/*!**********************************************************************************************!*\
  !*** ./src/views/private/activities/companions/data_table_columns/product_themes_columns.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_THEMES_COLUMNS: function() { return /* binding */ PRODUCT_THEMES_COLUMNS; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/i18n */ "./src/i18n/index.ts");



const PRODUCT_THEMES_COLUMNS = {
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
    locale: 'dataTable.headers.internalName.productThemes',
    size: 'minmax(10rem, 1fr)',
    order: 1
  }, {
    name: 'themes',
    componentName: 'TextLocalizedList',
    help: 'themesHelp',
    locale: 'dataTable.headers.themes',
    size: 'minmax(10rem, 2fr)',
    renderer: value => Object.values(value).map(i => `<div>${i[_pictaccio_admin_gui_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.global.locale]}</div>`).join(''),
    order: 3
  }],
  visibleHeaders: ['id', 'internal_name', 'name_locale'],
  rows: []
};

/***/ })

}]);
//# sourceMappingURL=src_utils_filter_functions_string_filter_function_ts-src_views_private_activities_companions_-46f432.js.map