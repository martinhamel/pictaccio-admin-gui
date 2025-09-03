"use strict";
(self["webpackChunk_pictaccio_admin_gui"] = self["webpackChunk_pictaccio_admin_gui"] || []).push([["src_views_private_activities_companions_crud_dialogs_CrudDialogProductCategory_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_product_categories_columns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pictaccio/admin-gui/views/private/activities/companions/data_table_columns/product_categories_columns */ "./src/views/private/activities/companions/data_table_columns/product_categories_columns.ts");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-facing-decorator */ "./node_modules/vue-facing-decorator/dist/esm/index.js");













let CrudDialogProductCategory = class CrudDialogProductCategory extends _pictaccio_admin_gui_views_private_activities_companions_crud_dialogs_activity_crud_dialog__WEBPACK_IMPORTED_MODULE_9__["default"] {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "columns", _pictaccio_admin_gui_views_private_activities_companions_data_table_columns_product_categories_columns__WEBPACK_IMPORTED_MODULE_11__.PRODUCT_CATEGORIES_COLUMNS);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "crudDialog", void 0);
    // Feature flags
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "archiveFeature", _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_6__.environment.features.archiveDeleteProductCategory);
  }
  async deleteClick(id, row) {
    if (!this.archiveFeature) {
      return;
    }
    if (this.$validateCapability('product:delete') && (await (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_7__.globalPrompt)({
      buttonType: 'yes-no',
      icon: ['', ''],
      message: this.$t('generic.prompt.destructive', {
        item: row.name_locale[this.$i18n.locale]
      }),
      title: `${this.$t('generic.ui.delete')} ${this.$t('activities.productCategories.single')}`
    })) === 'yes') {
      try {
        await this.$store.dispatch('ProductCategories/delete', {
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
      priority: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['priority'] : null, 'priority'),
      internal_name: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['internal_name'] : null, 'internal_name', internalNameOptions),
      name_locale: _pictaccio_admin_gui_datasources_generic_data_source__WEBPACK_IMPORTED_MODULE_5__.GenericDataSource.from(rowId ? row['name_locale'] : null, 'name_locale', options)
    });
  }
  /* LIFECYCLE */
  async mounted() {
    super.mounted('ProductCategories');
    this.crudDialog = this.$refs['crud-dialog'];
    this.crudDialog.setActivity('productCategories');
    this.crudDialog.setColumns(this.columns);
  }
  /* EVENT HANDLER */
  async confirmClick() {
    const form = this.crudDialog;
    const formValues = form.getFields();
    const nameLocale = Object.fromEntries(this.$store.getters['StoreConfig/languagesList'].map(i => [i.locale, formValues['name_locale_' + i.locale]]));
    const values = {
      internal_name: formValues['internal_name'],
      priority: typeof formValues['priority'] === 'number' ? formValues['priority'] : 0,
      name_locale: nameLocale
    };
    if (await this.internalNameValidation(values.internal_name)) {
      return;
    }
    let result;
    if (this.crudDialogStatus === 'create') {
      try {
        result = await this.$store.dispatch('ProductCategories/add', {
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
        result = await this.$store.dispatch('ProductCategories/update', {
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
    await this.$store.dispatch('ProductCategoriesReader/productCategoriesRead', true);
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
CrudDialogProductCategory = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_12__.Component)({
  name: 'Crud dialog product category',
  components: {
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon,
    CrudDialog: _pictaccio_admin_gui_views_private_activities_companions_CrudDialog_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  emits: ['update'],
  expose: ['deleteClick', 'getFields', 'openDialog', 'refreshField', 'updateCrud']
})], CrudDialogProductCategory);
/* harmony default export */ __webpack_exports__["default"] = (CrudDialogProductCategory);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/utils/datatable_column_renderers/locales_data.ts":
/*!**************************************************************!*\
  !*** ./src/utils/datatable_column_renderers/locales_data.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localesData: function() { return /* binding */ localesData; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Will display all locales at the same time
 * @param value is an object: {locale1: 'value', ...}
 */
function localesData(value) {
  if ((0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(value)) {
    return '';
  }
  return Object.entries(value).map(([locale, value]) => `<div style="display: grid; grid-template-columns: 4ch 1fr;">
            <b>${locale}: </b><span>${value}</span>
        </div>`).join('');
}

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue":
/*!********************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrudDialogProductCategory_vue_vue_type_template_id_75c45224_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true */ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true");
/* harmony import */ var _CrudDialogProductCategory_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrudDialogProductCategory.vue?vue&type=script&lang=ts */ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=script&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CrudDialogProductCategory_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CrudDialogProductCategory_vue_vue_type_template_id_75c45224_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductCategory_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductCategory_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDialogProductCategory.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true":
/*!**********************************************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductCategory_vue_vue_type_template_id_75c45224_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CrudDialogProductCategory_vue_vue_type_template_id_75c45224_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/private/activities/companions/crud_dialogs/CrudDialogProductCategory.vue?vue&type=template&id=75c45224&ts=true");


/***/ }),

/***/ "./src/views/private/activities/companions/data_table_columns/product_categories_columns.ts":
/*!**************************************************************************************************!*\
  !*** ./src/views/private/activities/companions/data_table_columns/product_categories_columns.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_CATEGORIES_COLUMNS: function() { return /* binding */ PRODUCT_CATEGORIES_COLUMNS; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_utils_datatable_column_renderers_locales_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/datatable_column_renderers/locales_data */ "./src/utils/datatable_column_renderers/locales_data.ts");

const PRODUCT_CATEGORIES_COLUMNS = {
  headers: [{
    name: 'id',
    componentName: 'Id',
    locale: 'dataTable.headers.id',
    size: '6rem',
    tableOnly: true,
    order: 0
  }, {
    name: 'priority',
    componentName: 'NumberGeneric',
    help: 'productCategoriesPriorityHelp',
    locale: 'dataTable.headers.priority',
    size: 'minmax(6rem, 1fr)',
    order: 3
  }, {
    name: 'internal_name',
    componentName: 'TextGeneric',
    help: 'internalNameHelp',
    locale: 'dataTable.headers.internalName.productCategories',
    size: 'minmax(10rem, 2fr)',
    order: 2
  }, {
    name: 'name_locale',
    componentName: 'TextLocalizedShort',
    locale: 'dataTable.headers.nameLocale',
    size: 'minmax(10rem, 2fr)',
    help: 'productCategoriesNamesHelp',
    allowLocaleSorting: true,
    renderer: value => (0,_pictaccio_admin_gui_utils_datatable_column_renderers_locales_data__WEBPACK_IMPORTED_MODULE_0__.localesData)(value),
    order: 1
  }],
  visibleHeaders: ['id', 'priority', 'internal_name', 'name_locale'],
  rows: []
};

/***/ })

}]);
//# sourceMappingURL=src_views_private_activities_companions_crud_dialogs_CrudDialogProductCategory_vue.js.map