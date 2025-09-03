/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/entry.js":
/*!********************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/entry.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
tslib_1.__exportStar(__webpack_require__(/*! ./errors */ "./node_modules/@loufa/loufairy/dist/src/errors/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./network */ "./node_modules/@loufa/loufairy/dist/src/network/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@loufa/loufairy/dist/src/types/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./utils */ "./node_modules/@loufa/loufairy/dist/src/utils/index.js"), exports);
//# sourceMappingURL=entry.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/errors/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/errors/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
tslib_1.__exportStar(__webpack_require__(/*! ./network_error */ "./node_modules/@loufa/loufairy/dist/src/errors/network_error.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/errors/network_error.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/errors/network_error.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkError = void 0;
class NetworkError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.NetworkError = NetworkError;
//# sourceMappingURL=network_error.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/network/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/network/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
tslib_1.__exportStar(__webpack_require__(/*! ./request */ "./node_modules/@loufa/loufairy/dist/src/network/request.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/network/request.js":
/*!******************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/network/request.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/@loufa/loufairy/dist/src/errors/index.js");
const httpMethods = {
    get(options, signal) {
        const queryParams = options.data
            ? Object.fromEntries(Object.entries(options.data).filter(([, value]) => value))
            : undefined;
        const params = new URLSearchParams(options.data ? queryParams : undefined);
        return fetch(`${options.url}?${params.toString()}`, {
            method: 'GET',
            headers: options.headers,
            mode: 'cors',
            credentials: 'include',
            cache: 'default',
            signal
        });
    },
    post(options, signal) {
        return fetch(options.url, {
            method: 'POST',
            body: options.data instanceof FormData
                ? options.data
                : JSON.stringify(options.data),
            headers: options.headers,
            credentials: 'include',
            mode: 'cors',
            cache: 'default',
            signal
        });
    }
};
function request(options) {
    let abortTimer;
    let abortController;
    let signal;
    if (options.timeout) {
        abortController = new AbortController();
        signal = abortController.signal;
        abortTimer = setTimeout(() => {
            abortController.abort();
        }, options.timeout);
    }
    if (!Object.keys(httpMethods).includes(options.method)) {
        throw new Error(`[loufairy] Network/request: Invalid HTTP method: ${options.method}`);
    }
    if (options.headers === undefined) {
        options.headers = new Headers();
    }
    else if (!(options.headers instanceof Headers)) {
        const headers = new Headers();
        for (const [header, value] of Object.entries(options.headers)) {
            if (value) {
                headers.append(header, value);
            }
        }
        options.headers = headers;
    }
    try {
        return httpMethods[options.method](options, signal)
            .finally(() => {
            if (abortTimer) {
                clearTimeout(abortTimer);
            }
        });
    }
    catch (error) {
        if (['Load failed',
            'NetworkError when attempting to fetch resource',
            'Failed to fetch'].includes(error.message)) {
            throw new errors_1.NetworkError();
        }
        throw error;
    }
}
exports.request = request;
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/types/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/types/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
tslib_1.__exportStar(__webpack_require__(/*! ./one_or_many */ "./node_modules/@loufa/loufairy/dist/src/types/one_or_many.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/types/one_or_many.js":
/*!********************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/types/one_or_many.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=one_or_many.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/deep_compare.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/deep_compare.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deepCompare = void 0;
function deepCompare(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (const key of obj1Keys) {
        if ((typeof obj1[key] === 'object' && obj1[key] !== null) &&
            (typeof obj2[key] === 'object' && obj2[key] !== null)) {
            if (obj1[key] instanceof Date &&
                obj2[key] instanceof Date &&
                obj1[key].getTime() !== obj2[key].getTime()) {
                return false;
            }
            else if (obj1[key] instanceof Date || obj2[key] instanceof Date) {
                return false;
            }
            else if (!deepCompare(obj1[key], obj2[key])) {
                return false;
            }
        }
        else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
exports.deepCompare = deepCompare;
//# sourceMappingURL=deep_compare.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/excel_encoding.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/excel_encoding.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js */ "./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js")["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toExcelUtf8Encoding = exports.fixExcelEncoding = exports.detectExcelEncoding = void 0;
const map1 = {
    '√©': 'é',
    '√°': 'á',
    '√≠': 'í',
    '√≥': 'ó',
    '√∂': 'ö',
    '√º': 'ü',
    '√¥': 'ô',
    '√®': 'è',
    '√ß': 'ç',
    '√±': 'ñ',
    '√∏': 'ø',
    '√´': 'ë',
    '√§': 'ä',
    '√•': 'å',
    '√Å': 'Á',
    '√∫': 'ú',
    '√ª': 'û',
    '√Ø': 'ï',
    '√â': 'É',
    '√†': 'à',
    '√¶': 'æ',
    '√Æ': 'î',
    '√¢': 'â',
    '√£': 'ã',
    '√î': 'Ô',
    '√ü': 'ß',
    '√ì': 'Ó',
    '√≤': 'ò',
    '√Ω': 'ý',
    '√ñ': 'Ö',
    '√™': 'ê',
    '√Ä': 'À',
    '√ò': 'Ø',
    '√Ö': 'Å',
    '√∞': 'ð',
    '√á': 'Ç',
    '√Ç': 'Â',
    '√π': 'ù',
    '√í': 'Ò',
    '√¨': 'ì',
    '√ú': 'Ü',
    '√à': 'È',
    '√û': 'Þ'
};
function detectExcelEncoding(text) {
    return Object.keys(map1).some(artefact => text.includes(artefact));
}
exports.detectExcelEncoding = detectExcelEncoding;
function fixExcelEncoding(text) {
    for (const [artefact, char] of Object.entries(map1)) {
        text = text.replaceAll(artefact, char);
    }
    return text;
}
exports.fixExcelEncoding = fixExcelEncoding;
function toExcelUtf8Encoding(text) {
    const utf8 = new TextEncoder().encode(text);
    return Buffer.from(new Uint8Array([0xEF, 0xBB, 0xBF, ...utf8]));
}
exports.toExcelUtf8Encoding = toExcelUtf8Encoding;
//# sourceMappingURL=excel_encoding.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/generate_iterative_name.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/generate_iterative_name.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateIterativeName = void 0;
const bracketCallbacks = {
    round: iteration => `(${iteration})`,
    square: iteration => `[${iteration}]`,
    curly: iteration => `{${iteration}}`,
    angle: iteration => `<${iteration}>`,
    none: iteration => iteration
};
function formatCallback(name, iteration, separator) {
    return `${name}${separator}${iteration}`;
}
function normalizeOptions(options) {
    return {
        firstIteration: 1,
        formatCallback: formatCallback,
        separator: ' ',
        ...options,
        bracketCallback: typeof options?.bracketCallback === 'function'
            ? options.bracketCallback
            : bracketCallbacks[options?.bracket || 'none']
    };
}
function generateIterativeName(name, existingNames, options) {
    const normalizedOptions = normalizeOptions(options);
    let nameAttempt = name;
    let i = normalizedOptions.firstIteration - 1;
    if (!existingNames.includes(name)) {
        return name;
    }
    do {
        i++;
        nameAttempt = normalizedOptions.formatCallback(name, normalizedOptions.bracketCallback(i, name), normalizedOptions.separator);
    } while (existingNames.includes(nameAttempt));
    return nameAttempt;
}
exports.generateIterativeName = generateIterativeName;
//# sourceMappingURL=generate_iterative_name.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shallowCompare = exports.objectPropertiesIterator = exports.mergeObjects = exports.isObject = exports.isInteger = exports.isEmpty = exports.deepCompare = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
var deep_compare_1 = __webpack_require__(/*! ./deep_compare */ "./node_modules/@loufa/loufairy/dist/src/utils/deep_compare.js");
Object.defineProperty(exports, "deepCompare", ({ enumerable: true, get: function () { return deep_compare_1.deepCompare; } }));
tslib_1.__exportStar(__webpack_require__(/*! ./inflection */ "./node_modules/@loufa/loufairy/dist/src/utils/inflection.js"), exports);
var is_empty_1 = __webpack_require__(/*! ./is_empty */ "./node_modules/@loufa/loufairy/dist/src/utils/is_empty.js");
Object.defineProperty(exports, "isEmpty", ({ enumerable: true, get: function () { return is_empty_1.isEmpty; } }));
var is_integer_1 = __webpack_require__(/*! ./is_integer */ "./node_modules/@loufa/loufairy/dist/src/utils/is_integer.js");
Object.defineProperty(exports, "isInteger", ({ enumerable: true, get: function () { return is_integer_1.isInteger; } }));
var is_object_1 = __webpack_require__(/*! ./is_object */ "./node_modules/@loufa/loufairy/dist/src/utils/is_object.js");
Object.defineProperty(exports, "isObject", ({ enumerable: true, get: function () { return is_object_1.isObject; } }));
var merge_objects_1 = __webpack_require__(/*! ./merge_objects */ "./node_modules/@loufa/loufairy/dist/src/utils/merge_objects.js");
Object.defineProperty(exports, "mergeObjects", ({ enumerable: true, get: function () { return merge_objects_1.mergeObjects; } }));
var object_properties_iterator_1 = __webpack_require__(/*! ./object_properties_iterator */ "./node_modules/@loufa/loufairy/dist/src/utils/object_properties_iterator.js");
Object.defineProperty(exports, "objectPropertiesIterator", ({ enumerable: true, get: function () { return object_properties_iterator_1.objectPropertiesIterator; } }));
var shallow_compare_1 = __webpack_require__(/*! ./shallow_compare */ "./node_modules/@loufa/loufairy/dist/src/utils/shallow_compare.js");
Object.defineProperty(exports, "shallowCompare", ({ enumerable: true, get: function () { return shallow_compare_1.shallowCompare; } }));
tslib_1.__exportStar(__webpack_require__(/*! ./generate_iterative_name */ "./node_modules/@loufa/loufairy/dist/src/utils/generate_iterative_name.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./excel_encoding */ "./node_modules/@loufa/loufairy/dist/src/utils/excel_encoding.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/inflection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/inflection.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.titleCase = exports.capitalize = exports.underscorize = exports.dasherize = exports.camelize = void 0;
const SPLIT_NOT_ALPHANUMERICAL_REGEX = /[^a-z\d]+/i;
const SPLIT_LOWER_UPPER_NUMERICAL_REGEX = /([a-z])([A-Z\d])/g;
const SPLIT_NUMERICAL_ALPHA = /(\d)([a-z])/gi;
function separate(input) {
    return input
        .replaceAll(SPLIT_LOWER_UPPER_NUMERICAL_REGEX, '$1 $2')
        .replaceAll(SPLIT_NUMERICAL_ALPHA, '$1 $2')
        .split(SPLIT_NOT_ALPHANUMERICAL_REGEX);
}
function camelize(input, firstLowerCase = true) {
    const parts = separate(input);
    let output = '';
    for (let i = 0, length = parts.length; i < length; ++i) {
        output += (firstLowerCase && !i ? parts[i][0].toLowerCase() : parts[i][0].toUpperCase()) + parts[i].substr(1).toLowerCase();
    }
    return output;
}
exports.camelize = camelize;
function dasherize(input) {
    const parts = separate(input);
    let output = '';
    for (let i = 0, length = parts.length; i < length; ++i) {
        output += parts[i].toLowerCase() + (i < length - 1 ? '-' : '');
    }
    return output;
}
exports.dasherize = dasherize;
function underscorize(input) {
    const parts = separate(input);
    let output = '';
    for (let i = 0, length = parts.length; i < length; ++i) {
        output += parts[i].toLowerCase() + (i < length - 1 ? '_' : '');
    }
    return output;
}
exports.underscorize = underscorize;
function capitalize(input) {
    if (input.length === 0) {
        return '';
    }
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
}
exports.capitalize = capitalize;
function titleCase(input) {
    if (input.length === 0) {
        return '';
    }
    return input.split(' ').map(capitalize).join(' ');
}
exports.titleCase = titleCase;
//# sourceMappingURL=inflection.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/is_empty.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/is_empty.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmpty = void 0;
function isEmpty(value) {
    if (value === '' || value === undefined || value === null) {
        return true;
    }
    if (value.length !== undefined) {
        return value.length === 0;
    }
    for (const prop in value) {
        return false;
    }
    return typeof value === 'object';
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=is_empty.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/is_integer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/is_integer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isInteger = void 0;
function isInteger(value) {
    const x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}
exports.isInteger = isInteger;
//# sourceMappingURL=is_integer.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/is_object.js":
/*!******************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/is_object.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isObject = void 0;
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
exports.isObject = isObject;
//# sourceMappingURL=is_object.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/merge_objects.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/merge_objects.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeObjects = void 0;
const is_empty_1 = __webpack_require__(/*! ./is_empty */ "./node_modules/@loufa/loufairy/dist/src/utils/is_empty.js");
const DEFAULT_MERGE_RECURSE_LEVEL = 10;
function _merge_recurse(destination, source, recurseLevel) {
    --recurseLevel;
    for (const prop in source) {
        if (typeof source.hasOwnProperty !== 'function' || source.hasOwnProperty(prop)) {
            const sourceProp = source[prop];
            if (sourceProp instanceof Array) {
                _merge_recurse(destination[prop] = [], sourceProp, recurseLevel);
            }
            else if (sourceProp && sourceProp instanceof RegExp) {
                destination[prop] = sourceProp;
            }
            else if (sourceProp && sourceProp instanceof Date) {
                destination[prop] = new Date(sourceProp);
            }
            else if (sourceProp &&
                typeof sourceProp === 'object' && (sourceProp.constructor === undefined || sourceProp.constructor.name === 'Object')) {
                destination[prop] = recurseLevel > 0 ?
                    _merge_recurse(destination[prop] || {}, sourceProp, recurseLevel) :
                    {};
            }
            else {
                destination[prop] = sourceProp;
            }
        }
    }
    return destination;
}
function mergeObjects(...args) {
    const deep = typeof args[0] === 'boolean' && args[0];
    const levelDefined = deep && typeof args[1] === 'number';
    const recurseLevel = +!deep || (levelDefined ? args[1] : DEFAULT_MERGE_RECURSE_LEVEL);
    const objects = Array.prototype.slice.call(args, +deep + +levelDefined);
    const combine = (0, is_empty_1.isEmpty)(objects[0]) ? objects[0] : {};
    for (let i = 0, length = objects.length; i < length; ++i) {
        _merge_recurse(combine, objects[i], recurseLevel);
    }
    return combine;
}
exports.mergeObjects = mergeObjects;
//# sourceMappingURL=merge_objects.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/object_properties_iterator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/object_properties_iterator.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.objectPropertiesIterator = void 0;
const is_object_1 = __webpack_require__(/*! ./is_object */ "./node_modules/@loufa/loufairy/dist/src/utils/is_object.js");
function* objectPropertiesIterator(object, filter = /.*/) {
    if (!(0, is_object_1.isObject)(object)) {
        return;
    }
    for (const prop of Object.keys(object)) {
        if (filter.test(prop)) {
            yield prop;
        }
    }
}
exports.objectPropertiesIterator = objectPropertiesIterator;
//# sourceMappingURL=object_properties_iterator.js.map

/***/ }),

/***/ "./node_modules/@loufa/loufairy/dist/src/utils/shallow_compare.js":
/*!************************************************************************!*\
  !*** ./node_modules/@loufa/loufairy/dist/src/utils/shallow_compare.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shallowCompare = void 0;
function shallowCompare(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (const key of obj1Keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
exports.shallowCompare = shallowCompare;
//# sourceMappingURL=shallow_compare.js.map

/***/ }),

/***/ "./node_modules/assert/build/assert.js":
/*!*********************************************!*\
  !*** ./node_modules/assert/build/assert.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b

// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var _require = __webpack_require__(/*! ./internal/errors */ "./node_modules/assert/build/internal/errors.js"),
  _require$codes = _require.codes,
  ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT,
  ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
  ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE,
  ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE,
  ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = __webpack_require__(/*! ./internal/assert/assertion_error */ "./node_modules/assert/build/internal/assert/assertion_error.js");
var _require2 = __webpack_require__(/*! util/ */ "./node_modules/util/util.js"),
  inspect = _require2.inspect;
var _require$types = (__webpack_require__(/*! util/ */ "./node_modules/util/util.js").types),
  isPromise = _require$types.isPromise,
  isRegExp = _require$types.isRegExp;
var objectAssign = __webpack_require__(/*! object.assign/polyfill */ "./node_modules/object.assign/polyfill.js")();
var objectIs = __webpack_require__(/*! object-is/polyfill */ "./node_modules/object-is/polyfill.js")();
var RegExpPrototypeTest = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js")('RegExp.prototype.test');
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
  var comparison = __webpack_require__(/*! ./internal/util/comparisons */ "./node_modules/assert/build/internal/util/comparisons.js");
  isDeepEqual = comparison.isDeepEqual;
  isDeepStrictEqual = comparison.isDeepStrictEqual;
}

// Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", '\\b', '', '', "\\u000b", '\\f', '', "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"];
var escapeFn = function escapeFn(str) {
  return meta[str.charCodeAt(0)];
};
var warned = false;

// The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {};

// All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function innerFail(obj) {
  if (obj.message instanceof Error) throw obj.message;
  throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
  var argsLen = arguments.length;
  var internalMessage;
  if (argsLen === 0) {
    internalMessage = 'Failed';
  } else if (argsLen === 1) {
    message = actual;
    actual = undefined;
  } else {
    if (warned === false) {
      warned = true;
      var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
      warn('assert.fail() with more than one argument is deprecated. ' + 'Please use assert.strictEqual() instead or only pass a message.', 'DeprecationWarning', 'DEP0094');
    }
    if (argsLen === 2) operator = '!=';
  }
  if (message instanceof Error) throw message;
  var errArgs = {
    actual: actual,
    expected: expected,
    operator: operator === undefined ? 'fail' : operator,
    stackStartFn: stackStartFn || fail
  };
  if (message !== undefined) {
    errArgs.message = message;
  }
  var err = new AssertionError(errArgs);
  if (internalMessage) {
    err.message = internalMessage;
    err.generatedMessage = true;
  }
  throw err;
}
assert.fail = fail;

// The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
  if (!value) {
    var generatedMessage = false;
    if (argLen === 0) {
      generatedMessage = true;
      message = 'No value argument passed to `assert.ok()`';
    } else if (message instanceof Error) {
      throw message;
    }
    var err = new AssertionError({
      actual: value,
      expected: true,
      message: message,
      operator: '==',
      stackStartFn: fn
    });
    err.generatedMessage = generatedMessage;
    throw err;
  }
}

// Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  innerOk.apply(void 0, [ok, args.length].concat(args));
}
assert.ok = ok;

// The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */
assert.equal = function equal(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  // eslint-disable-next-line eqeqeq
  if (actual != expected) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: '==',
      stackStartFn: equal
    });
  }
};

// The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  // eslint-disable-next-line eqeqeq
  if (actual == expected) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: '!=',
      stackStartFn: notEqual
    });
  }
};

// The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  if (isDeepEqual === undefined) lazyLoadComparison();
  if (!isDeepEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'deepEqual',
      stackStartFn: deepEqual
    });
  }
};

// The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  if (isDeepEqual === undefined) lazyLoadComparison();
  if (isDeepEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'notDeepEqual',
      stackStartFn: notDeepEqual
    });
  }
};
/* eslint-enable */

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  if (isDeepEqual === undefined) lazyLoadComparison();
  if (!isDeepStrictEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'deepStrictEqual',
      stackStartFn: deepStrictEqual
    });
  }
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  if (isDeepEqual === undefined) lazyLoadComparison();
  if (isDeepStrictEqual(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'notDeepStrictEqual',
      stackStartFn: notDeepStrictEqual
    });
  }
}
assert.strictEqual = function strictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  if (!objectIs(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'strictEqual',
      stackStartFn: strictEqual
    });
  }
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (arguments.length < 2) {
    throw new ERR_MISSING_ARGS('actual', 'expected');
  }
  if (objectIs(actual, expected)) {
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: 'notStrictEqual',
      stackStartFn: notStrictEqual
    });
  }
};
var Comparison = /*#__PURE__*/_createClass(function Comparison(obj, keys, actual) {
  var _this = this;
  _classCallCheck(this, Comparison);
  keys.forEach(function (key) {
    if (key in obj) {
      if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) {
        _this[key] = actual[key];
      } else {
        _this[key] = obj[key];
      }
    }
  });
});
function compareExceptionKey(actual, expected, key, message, keys, fn) {
  if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
    if (!message) {
      // Create placeholder objects to create a nice output.
      var a = new Comparison(actual, keys);
      var b = new Comparison(expected, keys, actual);
      var err = new AssertionError({
        actual: a,
        expected: b,
        operator: 'deepStrictEqual',
        stackStartFn: fn
      });
      err.actual = actual;
      err.expected = expected;
      err.operator = fn.name;
      throw err;
    }
    innerFail({
      actual: actual,
      expected: expected,
      message: message,
      operator: fn.name,
      stackStartFn: fn
    });
  }
}
function expectedException(actual, expected, msg, fn) {
  if (typeof expected !== 'function') {
    if (isRegExp(expected)) return RegExpPrototypeTest(expected, actual);
    // assert.doesNotThrow does not accept objects.
    if (arguments.length === 2) {
      throw new ERR_INVALID_ARG_TYPE('expected', ['Function', 'RegExp'], expected);
    }

    // Handle primitives properly.
    if (_typeof(actual) !== 'object' || actual === null) {
      var err = new AssertionError({
        actual: actual,
        expected: expected,
        message: msg,
        operator: 'deepStrictEqual',
        stackStartFn: fn
      });
      err.operator = fn.name;
      throw err;
    }
    var keys = Object.keys(expected);
    // Special handle errors to make sure the name and the message are compared
    // as well.
    if (expected instanceof Error) {
      keys.push('name', 'message');
    } else if (keys.length === 0) {
      throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
    }
    if (isDeepEqual === undefined) lazyLoadComparison();
    keys.forEach(function (key) {
      if (typeof actual[key] === 'string' && isRegExp(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) {
        return;
      }
      compareExceptionKey(actual, expected, key, msg, keys, fn);
    });
    return true;
  }
  // Guard instanceof against arrow functions as they don't have a prototype.
  if (expected.prototype !== undefined && actual instanceof expected) {
    return true;
  }
  if (Error.isPrototypeOf(expected)) {
    return false;
  }
  return expected.call({}, actual) === true;
}
function getActual(fn) {
  if (typeof fn !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
  }
  try {
    fn();
  } catch (e) {
    return e;
  }
  return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
  // Accept native ES6 promises and promises that are implemented in a similar
  // way. Do not accept thenables that use a function as `obj` and that have no
  // `catch` handler.

  // TODO: thenables are checked up until they have the correct methods,
  // but according to documentation, the `then` method should receive
  // the `fulfill` and `reject` arguments as well or it may be never resolved.

  return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
function waitForActual(promiseFn) {
  return Promise.resolve().then(function () {
    var resultPromise;
    if (typeof promiseFn === 'function') {
      // Return a rejected promise if `promiseFn` throws synchronously.
      resultPromise = promiseFn();
      // Fail in case no promise is returned.
      if (!checkIsPromise(resultPromise)) {
        throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
      }
    } else if (checkIsPromise(promiseFn)) {
      resultPromise = promiseFn;
    } else {
      throw new ERR_INVALID_ARG_TYPE('promiseFn', ['Function', 'Promise'], promiseFn);
    }
    return Promise.resolve().then(function () {
      return resultPromise;
    }).then(function () {
      return NO_EXCEPTION_SENTINEL;
    }).catch(function (e) {
      return e;
    });
  });
}
function expectsError(stackStartFn, actual, error, message) {
  if (typeof error === 'string') {
    if (arguments.length === 4) {
      throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
    }
    if (_typeof(actual) === 'object' && actual !== null) {
      if (actual.message === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
      }
    } else if (actual === error) {
      throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
    }
    message = error;
    error = undefined;
  } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') {
    throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
  }
  if (actual === NO_EXCEPTION_SENTINEL) {
    var details = '';
    if (error && error.name) {
      details += " (".concat(error.name, ")");
    }
    details += message ? ": ".concat(message) : '.';
    var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
    innerFail({
      actual: undefined,
      expected: error,
      operator: stackStartFn.name,
      message: "Missing expected ".concat(fnType).concat(details),
      stackStartFn: stackStartFn
    });
  }
  if (error && !expectedException(actual, error, message, stackStartFn)) {
    throw actual;
  }
}
function expectsNoError(stackStartFn, actual, error, message) {
  if (actual === NO_EXCEPTION_SENTINEL) return;
  if (typeof error === 'string') {
    message = error;
    error = undefined;
  }
  if (!error || expectedException(actual, error)) {
    var details = message ? ": ".concat(message) : '.';
    var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
    innerFail({
      actual: actual,
      expected: error,
      operator: stackStartFn.name,
      message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
      stackStartFn: stackStartFn
    });
  }
  throw actual;
}
assert.throws = function throws(promiseFn) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
};
assert.rejects = function rejects(promiseFn) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return waitForActual(promiseFn).then(function (result) {
    return expectsError.apply(void 0, [rejects, result].concat(args));
  });
};
assert.doesNotThrow = function doesNotThrow(fn) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }
  expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }
  return waitForActual(fn).then(function (result) {
    return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
  });
};
assert.ifError = function ifError(err) {
  if (err !== null && err !== undefined) {
    var message = 'ifError got unwanted exception: ';
    if (_typeof(err) === 'object' && typeof err.message === 'string') {
      if (err.message.length === 0 && err.constructor) {
        message += err.constructor.name;
      } else {
        message += err.message;
      }
    } else {
      message += inspect(err);
    }
    var newErr = new AssertionError({
      actual: err,
      expected: null,
      operator: 'ifError',
      message: message,
      stackStartFn: ifError
    });

    // Make sure we actually have a stack trace!
    var origStack = err.stack;
    if (typeof origStack === 'string') {
      // This will remove any duplicated frames from the error frames taken
      // from within `ifError` and add the original error frames to the newly
      // created ones.
      var tmp2 = origStack.split('\n');
      tmp2.shift();
      // Filter all frames existing in err.stack.
      var tmp1 = newErr.stack.split('\n');
      for (var i = 0; i < tmp2.length; i++) {
        // Find the first occurrence of the frame.
        var pos = tmp1.indexOf(tmp2[i]);
        if (pos !== -1) {
          // Only keep new frames.
          tmp1 = tmp1.slice(0, pos);
          break;
        }
      }
      newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
    }
    throw newErr;
  }
};

// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a871df3dfb8ea663ef5e1f8f62701ec51384ecb
function internalMatch(string, regexp, message, fn, fnName) {
  if (!isRegExp(regexp)) {
    throw new ERR_INVALID_ARG_TYPE('regexp', 'RegExp', regexp);
  }
  var match = fnName === 'match';
  if (typeof string !== 'string' || RegExpPrototypeTest(regexp, string) !== match) {
    if (message instanceof Error) {
      throw message;
    }
    var generatedMessage = !message;

    // 'The input was expected to not match the regular expression ' +
    message = message || (typeof string !== 'string' ? 'The "string" argument must be of type string. Received type ' + "".concat(_typeof(string), " (").concat(inspect(string), ")") : (match ? 'The input did not match the regular expression ' : 'The input was expected to not match the regular expression ') + "".concat(inspect(regexp), ". Input:\n\n").concat(inspect(string), "\n"));
    var err = new AssertionError({
      actual: string,
      expected: regexp,
      message: message,
      operator: fnName,
      stackStartFn: fn
    });
    err.generatedMessage = generatedMessage;
    throw err;
  }
}
assert.match = function match(string, regexp, message) {
  internalMatch(string, regexp, message, match, 'match');
};
assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
  internalMatch(string, regexp, message, doesNotMatch, 'doesNotMatch');
};

// Expose a strict only variant of assert
function strict() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }
  innerOk.apply(void 0, [strict, args.length].concat(args));
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

/***/ }),

/***/ "./node_modules/assert/build/internal/assert/assertion_error.js":
/*!**********************************************************************!*\
  !*** ./node_modules/assert/build/internal/assert/assertion_error.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _require = __webpack_require__(/*! util/ */ "./node_modules/util/util.js"),
  inspect = _require.inspect;
var _require2 = __webpack_require__(/*! ../errors */ "./node_modules/assert/build/internal/errors.js"),
  ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }
  return str.substring(this_len - search.length, this_len) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
  count = Math.floor(count);
  if (str.length == 0 || count == 0) return '';
  var maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));
  while (count) {
    str += str;
    count--;
  }
  str += str.substring(0, maxCount - str.length);
  return str;
}
var blue = '';
var green = '';
var red = '';
var white = '';
var kReadableOperator = {
  deepStrictEqual: 'Expected values to be strictly deep-equal:',
  strictEqual: 'Expected values to be strictly equal:',
  strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
  deepEqual: 'Expected values to be loosely deep-equal:',
  equal: 'Expected values to be loosely equal:',
  notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
  notStrictEqual: 'Expected "actual" to be strictly unequal to:',
  notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
  notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
  notEqual: 'Expected "actual" to be loosely unequal to:',
  notIdentical: 'Values identical but not reference-equal:'
};

// Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
  var keys = Object.keys(source);
  var target = Object.create(Object.getPrototypeOf(source));
  keys.forEach(function (key) {
    target[key] = source[key];
  });
  Object.defineProperty(target, 'message', {
    value: source.message
  });
  return target;
}
function inspectValue(val) {
  // The util.inspect default values could be changed. This makes sure the
  // error messages contain the necessary information nevertheless.
  return inspect(val, {
    compact: false,
    customInspect: false,
    depth: 1000,
    maxArrayLength: Infinity,
    // Assert compares only enumerable properties (with a few exceptions).
    showHidden: false,
    // Having a long line as error is better than wrapping the line for
    // comparison for now.
    // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
    // have meta information about the inspected properties (i.e., know where
    // in what line the property starts and ends).
    breakLength: Infinity,
    // Assert does not detect proxies currently.
    showProxy: false,
    sorted: true,
    // Inspect getters as we also check them when comparing entries.
    getters: true
  });
}
function createErrDiff(actual, expected, operator) {
  var other = '';
  var res = '';
  var lastPos = 0;
  var end = '';
  var skipped = false;
  var actualInspected = inspectValue(actual);
  var actualLines = actualInspected.split('\n');
  var expectedLines = inspectValue(expected).split('\n');
  var i = 0;
  var indicator = '';

  // In case both values are objects explicitly mark them as not reference equal
  // for the `strictEqual` operator.
  if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) {
    operator = 'strictEqualObject';
  }

  // If "actual" and "expected" fit on a single line and they are not strictly
  // equal, check further special handling.
  if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
    var inputLength = actualLines[0].length + expectedLines[0].length;
    // If the character length of "actual" and "expected" together is less than
    // kMaxShortLength and if neither is an object and at least one of them is
    // not `zero`, use the strict equal comparison to visualize the output.
    if (inputLength <= kMaxShortLength) {
      if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) {
        // -0 === +0
        return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
      }
    } else if (operator !== 'strictEqualObject') {
      // If the stderr is a tty and the input length is lower than the current
      // columns per line, add a mismatch indicator below the output. If it is
      // not a tty, use a default value of 80 characters.
      var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
      if (inputLength < maxLength) {
        while (actualLines[0][i] === expectedLines[0][i]) {
          i++;
        }
        // Ignore the first characters.
        if (i > 2) {
          // Add position indicator for the first mismatch in case it is a
          // single line and the input length is less than the column length.
          indicator = "\n  ".concat(repeat(' ', i), "^");
          i = 0;
        }
      }
    }
  }

  // Remove all ending lines that match (this optimizes the output for
  // readability by reducing the number of total changed lines).
  var a = actualLines[actualLines.length - 1];
  var b = expectedLines[expectedLines.length - 1];
  while (a === b) {
    if (i++ < 2) {
      end = "\n  ".concat(a).concat(end);
    } else {
      other = a;
    }
    actualLines.pop();
    expectedLines.pop();
    if (actualLines.length === 0 || expectedLines.length === 0) break;
    a = actualLines[actualLines.length - 1];
    b = expectedLines[expectedLines.length - 1];
  }
  var maxLines = Math.max(actualLines.length, expectedLines.length);
  // Strict equal with identical objects that are not identical by reference.
  // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
  if (maxLines === 0) {
    // We have to get the result again. The lines were all removed before.
    var _actualLines = actualInspected.split('\n');

    // Only remove lines in case it makes sense to collapse those.
    // TODO: Accept env to always show the full error.
    if (_actualLines.length > 30) {
      _actualLines[26] = "".concat(blue, "...").concat(white);
      while (_actualLines.length > 27) {
        _actualLines.pop();
      }
    }
    return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
  }
  if (i > 3) {
    end = "\n".concat(blue, "...").concat(white).concat(end);
    skipped = true;
  }
  if (other !== '') {
    end = "\n  ".concat(other).concat(end);
    other = '';
  }
  var printedLines = 0;
  var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
  var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
  for (i = 0; i < maxLines; i++) {
    // Only extra expected lines exist
    var cur = i - lastPos;
    if (actualLines.length < i + 1) {
      // If the last diverging line is more than one line above and the
      // current line is at least line three, add some of the former lines and
      // also add dots to indicate skipped entries.
      if (cur > 1 && i > 2) {
        if (cur > 4) {
          res += "\n".concat(blue, "...").concat(white);
          skipped = true;
        } else if (cur > 3) {
          res += "\n  ".concat(expectedLines[i - 2]);
          printedLines++;
        }
        res += "\n  ".concat(expectedLines[i - 1]);
        printedLines++;
      }
      // Mark the current line as the last diverging one.
      lastPos = i;
      // Add the expected line to the cache.
      other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
      printedLines++;
      // Only extra actual lines exist
    } else if (expectedLines.length < i + 1) {
      // If the last diverging line is more than one line above and the
      // current line is at least line three, add some of the former lines and
      // also add dots to indicate skipped entries.
      if (cur > 1 && i > 2) {
        if (cur > 4) {
          res += "\n".concat(blue, "...").concat(white);
          skipped = true;
        } else if (cur > 3) {
          res += "\n  ".concat(actualLines[i - 2]);
          printedLines++;
        }
        res += "\n  ".concat(actualLines[i - 1]);
        printedLines++;
      }
      // Mark the current line as the last diverging one.
      lastPos = i;
      // Add the actual line to the result.
      res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
      printedLines++;
      // Lines diverge
    } else {
      var expectedLine = expectedLines[i];
      var actualLine = actualLines[i];
      // If the lines diverge, specifically check for lines that only diverge by
      // a trailing comma. In that case it is actually identical and we should
      // mark it as such.
      var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine);
      // If the expected line has a trailing comma but is otherwise identical,
      // add a comma at the end of the actual line. Otherwise the output could
      // look weird as in:
      //
      //   [
      //     1         // No comma at the end!
      // +   2
      //   ]
      //
      if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
        divergingLines = false;
        actualLine += ',';
      }
      if (divergingLines) {
        // If the last diverging line is more than one line above and the
        // current line is at least line three, add some of the former lines and
        // also add dots to indicate skipped entries.
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(actualLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(actualLines[i - 1]);
          printedLines++;
        }
        // Mark the current line as the last diverging one.
        lastPos = i;
        // Add the actual line to the result and cache the expected diverging
        // line so consecutive diverging lines show up as +++--- and not +-+-+-.
        res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
        printedLines += 2;
        // Lines are identical
      } else {
        // Add all cached information to the result before adding other things
        // and reset the cache.
        res += other;
        other = '';
        // If the last diverging line is exactly one line above or if it is the
        // very first line, add the line to the result.
        if (cur === 1 || i === 0) {
          res += "\n  ".concat(actualLine);
          printedLines++;
        }
      }
    }
    // Inspected object to big (Show ~20 rows max)
    if (printedLines > 20 && i < maxLines - 2) {
      return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
  }
  return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError = /*#__PURE__*/function (_Error, _inspect$custom) {
  _inherits(AssertionError, _Error);
  var _super = _createSuper(AssertionError);
  function AssertionError(options) {
    var _this;
    _classCallCheck(this, AssertionError);
    if (_typeof(options) !== 'object' || options === null) {
      throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
    }
    var message = options.message,
      operator = options.operator,
      stackStartFn = options.stackStartFn;
    var actual = options.actual,
      expected = options.expected;
    var limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    if (message != null) {
      _this = _super.call(this, String(message));
    } else {
      if (process.stderr && process.stderr.isTTY) {
        // Reset on each call to make sure we handle dynamically set environment
        // variables correct.
        if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
          blue = "\x1B[34m";
          green = "\x1B[32m";
          white = "\x1B[39m";
          red = "\x1B[31m";
        } else {
          blue = '';
          green = '';
          white = '';
          red = '';
        }
      }
      // Prevent the error stack from being visible by duplicating the error
      // in a very close way to the original in case both sides are actually
      // instances of Error.
      if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
        actual = copyError(actual);
        expected = copyError(expected);
      }
      if (operator === 'deepStrictEqual' || operator === 'strictEqual') {
        _this = _super.call(this, createErrDiff(actual, expected, operator));
      } else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
        // In case the objects are equal but the operator requires unequal, show
        // the first object and say A equals B
        var base = kReadableOperator[operator];
        var res = inspectValue(actual).split('\n');

        // In case "actual" is an object, it should not be reference equal.
        if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) {
          base = kReadableOperator.notStrictEqualObject;
        }

        // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (res.length > 30) {
          res[26] = "".concat(blue, "...").concat(white);
          while (res.length > 27) {
            res.pop();
          }
        }

        // Only print a single input.
        if (res.length === 1) {
          _this = _super.call(this, "".concat(base, " ").concat(res[0]));
        } else {
          _this = _super.call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n"));
        }
      } else {
        var _res = inspectValue(actual);
        var other = '';
        var knownOperators = kReadableOperator[operator];
        if (operator === 'notDeepEqual' || operator === 'notEqual') {
          _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
          if (_res.length > 1024) {
            _res = "".concat(_res.slice(0, 1021), "...");
          }
        } else {
          other = "".concat(inspectValue(expected));
          if (_res.length > 512) {
            _res = "".concat(_res.slice(0, 509), "...");
          }
          if (other.length > 512) {
            other = "".concat(other.slice(0, 509), "...");
          }
          if (operator === 'deepEqual' || operator === 'equal') {
            _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
          } else {
            other = " ".concat(operator, " ").concat(other);
          }
        }
        _this = _super.call(this, "".concat(_res).concat(other));
      }
    }
    Error.stackTraceLimit = limit;
    _this.generatedMessage = !message;
    Object.defineProperty(_assertThisInitialized(_this), 'name', {
      value: 'AssertionError [ERR_ASSERTION]',
      enumerable: false,
      writable: true,
      configurable: true
    });
    _this.code = 'ERR_ASSERTION';
    _this.actual = actual;
    _this.expected = expected;
    _this.operator = operator;
    if (Error.captureStackTrace) {
      // eslint-disable-next-line no-restricted-syntax
      Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
    }
    // Create error message including the error code in the name.
    _this.stack;
    // Reset the name.
    _this.name = 'AssertionError';
    return _possibleConstructorReturn(_this);
  }
  _createClass(AssertionError, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
    }
  }, {
    key: _inspect$custom,
    value: function value(recurseTimes, ctx) {
      // This limits the `actual` and `expected` property default inspection to
      // the minimum depth. Otherwise those values would be too verbose compared
      // to the actual error message which contains a combined view of these two
      // input values.
      return inspect(this, _objectSpread(_objectSpread({}, ctx), {}, {
        customInspect: false,
        depth: 0
      }));
    }
  }]);
  return AssertionError;
}( /*#__PURE__*/_wrapNativeSuper(Error), inspect.custom);
module.exports = AssertionError;

/***/ }),

/***/ "./node_modules/assert/build/internal/errors.js":
/*!******************************************************!*\
  !*** ./node_modules/assert/build/internal/errors.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f

/* eslint node-core/documented-errors: "error" */
/* eslint node-core/alphabetize-errors: "error" */
/* eslint node-core/prefer-util-format-errors: "error" */



// The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var codes = {};

// Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }
  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }
  var NodeError = /*#__PURE__*/function (_Base) {
    _inherits(NodeError, _Base);
    var _super = _createSuper(NodeError);
    function NodeError(arg1, arg2, arg3) {
      var _this;
      _classCallCheck(this, NodeError);
      _this = _super.call(this, getMessage(arg1, arg2, arg3));
      _this.code = code;
      return _this;
    }
    return _createClass(NodeError);
  }(Base);
  codes[code] = NodeError;
}

// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });
    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }
  return str.substring(this_len - search.length, this_len) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }
  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}
createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  if (assert === undefined) assert = __webpack_require__(/*! ../assert */ "./node_modules/assert/build/assert.js");
  assert(typeof name === 'string', "'name' must be a string");

  // determiner: 'must be' or 'must not be'
  var determiner;
  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }
  var msg;
  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  // TODO(BridgeAR): Improve the output by showing `null` and similar.
  msg += ". Received type ".concat(_typeof(actual));
  return msg;
}, TypeError);
createErrorType('ERR_INVALID_ARG_VALUE', function (name, value) {
  var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
  if (util === undefined) util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
  var inspected = util.inspect(value);
  if (inspected.length > 128) {
    inspected = "".concat(inspected.slice(0, 128), "...");
  }
  return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType('ERR_INVALID_RETURN_VALUE', function (input, name, value) {
  var type;
  if (value && value.constructor && value.constructor.name) {
    type = "instance of ".concat(value.constructor.name);
  } else {
    type = "type ".concat(_typeof(value));
  }
  return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
}, TypeError);
createErrorType('ERR_MISSING_ARGS', function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (assert === undefined) assert = __webpack_require__(/*! ../assert */ "./node_modules/assert/build/assert.js");
  assert(args.length > 0, 'At least one arg needs to be specified');
  var msg = 'The ';
  var len = args.length;
  args = args.map(function (a) {
    return "\"".concat(a, "\"");
  });
  switch (len) {
    case 1:
      msg += "".concat(args[0], " argument");
      break;
    case 2:
      msg += "".concat(args[0], " and ").concat(args[1], " arguments");
      break;
    default:
      msg += args.slice(0, len - 1).join(', ');
      msg += ", and ".concat(args[len - 1], " arguments");
      break;
  }
  return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

/***/ }),

/***/ "./node_modules/assert/build/internal/util/comparisons.js":
/*!****************************************************************!*\
  !*** ./node_modules/assert/build/internal/util/comparisons.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
  var array = [];
  set.forEach(function (value) {
    return array.push(value);
  });
  return array;
};
var arrayFromMap = function arrayFromMap(map) {
  var array = [];
  map.forEach(function (value, key) {
    return array.push([key, value]);
  });
  return array;
};
var objectIs = Object.is ? Object.is : __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function () {
  return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : __webpack_require__(/*! is-nan */ "./node_modules/is-nan/index.js");
function uncurryThis(f) {
  return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = (__webpack_require__(/*! util/ */ "./node_modules/util/util.js").types),
  isAnyArrayBuffer = _require$types.isAnyArrayBuffer,
  isArrayBufferView = _require$types.isArrayBufferView,
  isDate = _require$types.isDate,
  isMap = _require$types.isMap,
  isRegExp = _require$types.isRegExp,
  isSet = _require$types.isSet,
  isNativeError = _require$types.isNativeError,
  isBoxedPrimitive = _require$types.isBoxedPrimitive,
  isNumberObject = _require$types.isNumberObject,
  isStringObject = _require$types.isStringObject,
  isBooleanObject = _require$types.isBooleanObject,
  isBigIntObject = _require$types.isBigIntObject,
  isSymbolObject = _require$types.isSymbolObject,
  isFloat32Array = _require$types.isFloat32Array,
  isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
  if (key.length === 0 || key.length > 10) return true;
  for (var i = 0; i < key.length; i++) {
    var code = key.charCodeAt(i);
    if (code < 48 || code > 57) return true;
  }
  // The maximum size for an array is 2 ** 32 -1.
  return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
  return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
}

// Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }
  var x = a.length;
  var y = b.length;
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3;

// Check if they have the same source and flags
function areSimilarRegExps(a, b) {
  return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (var offset = 0; offset < a.byteLength; offset++) {
    if (a[offset] !== b[offset]) {
      return false;
    }
  }
  return true;
}
function areSimilarTypedArrays(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
  return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
  if (isNumberObject(val1)) {
    return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
  }
  if (isStringObject(val1)) {
    return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
  }
  if (isBooleanObject(val1)) {
    return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
  }
  if (isBigIntObject(val1)) {
    return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
  }
  return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
}

// Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.

function innerDeepEqual(val1, val2, strict, memos) {
  // All identical values are equivalent, as determined by ===.
  if (val1 === val2) {
    if (val1 !== 0) return true;
    return strict ? objectIs(val1, val2) : true;
  }

  // Check more closely if val1 and val2 are equal.
  if (strict) {
    if (_typeof(val1) !== 'object') {
      return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
    }
    if (_typeof(val2) !== 'object' || val1 === null || val2 === null) {
      return false;
    }
    if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
      return false;
    }
  } else {
    if (val1 === null || _typeof(val1) !== 'object') {
      if (val2 === null || _typeof(val2) !== 'object') {
        // eslint-disable-next-line eqeqeq
        return val1 == val2;
      }
      return false;
    }
    if (val2 === null || _typeof(val2) !== 'object') {
      return false;
    }
  }
  var val1Tag = objectToString(val1);
  var val2Tag = objectToString(val2);
  if (val1Tag !== val2Tag) {
    return false;
  }
  if (Array.isArray(val1)) {
    // Check for sparse arrays and general fast path
    if (val1.length !== val2.length) {
      return false;
    }
    var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
    var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
    if (keys1.length !== keys2.length) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
  }
  // [browserify] This triggers on certain types in IE (Map/Set) so we don't
  // wan't to early return out of the rest of the checks. However we can check
  // if the second value is one of these values and the first isn't.
  if (val1Tag === '[object Object]') {
    // return keyCheck(val1, val2, strict, memos, kNoIterator);
    if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
      return false;
    }
  }
  if (isDate(val1)) {
    if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
      return false;
    }
  } else if (isRegExp(val1)) {
    if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
      return false;
    }
  } else if (isNativeError(val1) || val1 instanceof Error) {
    // Do not compare the stack as it might differ even though the error itself
    // is otherwise identical.
    if (val1.message !== val2.message || val1.name !== val2.name) {
      return false;
    }
  } else if (isArrayBufferView(val1)) {
    if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
      if (!areSimilarFloatArrays(val1, val2)) {
        return false;
      }
    } else if (!areSimilarTypedArrays(val1, val2)) {
      return false;
    }
    // Buffer.compare returns true, so val1.length === val2.length. If they both
    // only contain numeric keys, we don't need to exam further than checking
    // the symbols.
    var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
    var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
    if (_keys.length !== _keys2.length) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
  } else if (isSet(val1)) {
    if (!isSet(val2) || val1.size !== val2.size) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kIsSet);
  } else if (isMap(val1)) {
    if (!isMap(val2) || val1.size !== val2.size) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kIsMap);
  } else if (isAnyArrayBuffer(val1)) {
    if (!areEqualArrayBuffers(val1, val2)) {
      return false;
    }
  } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
    return false;
  }
  return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
  return keys.filter(function (k) {
    return propertyIsEnumerable(val, k);
  });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
  // For all remaining Object pairs, including Array, objects and Maps,
  // equivalence is determined by having:
  // a) The same number of owned enumerable properties
  // b) The same set of keys/indexes (although not necessarily the same order)
  // c) Equivalent values for every corresponding key/index
  // d) For Sets and Maps, equal contents
  // Note: this accounts for both named and indexed properties on Arrays.
  if (arguments.length === 5) {
    aKeys = Object.keys(val1);
    var bKeys = Object.keys(val2);

    // The pair must have the same number of owned properties.
    if (aKeys.length !== bKeys.length) {
      return false;
    }
  }

  // Cheap key test
  var i = 0;
  for (; i < aKeys.length; i++) {
    if (!hasOwnProperty(val2, aKeys[i])) {
      return false;
    }
  }
  if (strict && arguments.length === 5) {
    var symbolKeysA = objectGetOwnPropertySymbols(val1);
    if (symbolKeysA.length !== 0) {
      var count = 0;
      for (i = 0; i < symbolKeysA.length; i++) {
        var key = symbolKeysA[i];
        if (propertyIsEnumerable(val1, key)) {
          if (!propertyIsEnumerable(val2, key)) {
            return false;
          }
          aKeys.push(key);
          count++;
        } else if (propertyIsEnumerable(val2, key)) {
          return false;
        }
      }
      var symbolKeysB = objectGetOwnPropertySymbols(val2);
      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      var _symbolKeysB = objectGetOwnPropertySymbols(val2);
      if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
        return false;
      }
    }
  }
  if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
    return true;
  }

  // Use memos to handle cycles.
  if (memos === undefined) {
    memos = {
      val1: new Map(),
      val2: new Map(),
      position: 0
    };
  } else {
    // We prevent up to two map.has(x) calls by directly retrieving the value
    // and checking for undefined. The map can only contain numbers, so it is
    // safe to check for undefined only.
    var val2MemoA = memos.val1.get(val1);
    if (val2MemoA !== undefined) {
      var val2MemoB = memos.val2.get(val2);
      if (val2MemoB !== undefined) {
        return val2MemoA === val2MemoB;
      }
    }
    memos.position++;
  }
  memos.val1.set(val1, memos.position);
  memos.val2.set(val2, memos.position);
  var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
  memos.val1.delete(val1);
  memos.val2.delete(val2);
  return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
  // Go looking.
  var setValues = arrayFromSet(set);
  for (var i = 0; i < setValues.length; i++) {
    var val2 = setValues[i];
    if (innerDeepEqual(val1, val2, strict, memo)) {
      // Remove the matching element to make sure we do not check that again.
      set.delete(val2);
      return true;
    }
  }
  return false;
}

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
  switch (_typeof(prim)) {
    case 'undefined':
      return null;
    case 'object':
      // Only pass in null as object!
      return undefined;
    case 'symbol':
      return false;
    case 'string':
      prim = +prim;
    // Loose equal entries exist only if the string is possible to convert to
    // a regular number and not NaN.
    // Fall through
    case 'number':
      if (numberIsNaN(prim)) {
        return false;
      }
  }
  return true;
}
function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) return altValue;
  return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }
  var curB = b.get(altValue);
  if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
    return false;
  }
  return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
  // This is a lazily initiated Set of entries which have to be compared
  // pairwise.
  var set = null;
  var aValues = arrayFromSet(a);
  for (var i = 0; i < aValues.length; i++) {
    var val = aValues[i];
    // Note: Checking for the objects first improves the performance for object
    // heavy sets but it is a minor slow down for primitives. As they are fast
    // to check this improves the worst case scenario instead.
    if (_typeof(val) === 'object' && val !== null) {
      if (set === null) {
        set = new Set();
      }
      // If the specified value doesn't exist in the second set its an not null
      // object (or non strict only: a not matching primitive) we'll need to go
      // hunting for something thats deep-(strict-)equal to it. To make this
      // O(n log n) complexity we have to copy these values in a new set first.
      set.add(val);
    } else if (!b.has(val)) {
      if (strict) return false;

      // Fast path to detect missing string, symbol, undefined and null values.
      if (!setMightHaveLoosePrim(a, b, val)) {
        return false;
      }
      if (set === null) {
        set = new Set();
      }
      set.add(val);
    }
  }
  if (set !== null) {
    var bValues = arrayFromSet(b);
    for (var _i = 0; _i < bValues.length; _i++) {
      var _val = bValues[_i];
      // We have to check if a primitive value is already
      // matching and only if it's not, go hunting for it.
      if (_typeof(_val) === 'object' && _val !== null) {
        if (!setHasEqualElement(set, _val, strict, memo)) return false;
      } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
        return false;
      }
    }
    return set.size === 0;
  }
  return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
  // To be able to handle cases like:
  //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
  // ... we need to consider *all* matching keys, not just the first we find.
  var setValues = arrayFromSet(set);
  for (var i = 0; i < setValues.length; i++) {
    var key2 = setValues[i];
    if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
      set.delete(key2);
      return true;
    }
  }
  return false;
}
function mapEquiv(a, b, strict, memo) {
  var set = null;
  var aEntries = arrayFromMap(a);
  for (var i = 0; i < aEntries.length; i++) {
    var _aEntries$i = _slicedToArray(aEntries[i], 2),
      key = _aEntries$i[0],
      item1 = _aEntries$i[1];
    if (_typeof(key) === 'object' && key !== null) {
      if (set === null) {
        set = new Set();
      }
      set.add(key);
    } else {
      // By directly retrieving the value we prevent another b.has(key) check in
      // almost all possible cases.
      var item2 = b.get(key);
      if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
        if (strict) return false;
        // Fast path to detect missing string, symbol, undefined and null
        // keys.
        if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
        if (set === null) {
          set = new Set();
        }
        set.add(key);
      }
    }
  }
  if (set !== null) {
    var bEntries = arrayFromMap(b);
    for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
      var _bEntries$_i = _slicedToArray(bEntries[_i2], 2),
        _key = _bEntries$_i[0],
        item = _bEntries$_i[1];
      if (_typeof(_key) === 'object' && _key !== null) {
        if (!mapHasEqualEntry(set, a, _key, item, strict, memo)) return false;
      } else if (!strict && (!a.has(_key) || !innerDeepEqual(a.get(_key), item, false, memo)) && !mapHasEqualEntry(set, a, _key, item, false, memo)) {
        return false;
      }
    }
    return set.size === 0;
  }
  return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
  // Sets and maps don't have their entries accessible via normal object
  // properties.
  var i = 0;
  if (iterationType === kIsSet) {
    if (!setEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsMap) {
    if (!mapEquiv(a, b, strict, memos)) {
      return false;
    }
  } else if (iterationType === kIsArray) {
    for (; i < a.length; i++) {
      if (hasOwnProperty(a, i)) {
        if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
          return false;
        }
      } else if (hasOwnProperty(b, i)) {
        return false;
      } else {
        // Array is sparse.
        var keysA = Object.keys(a);
        for (; i < keysA.length; i++) {
          var key = keysA[i];
          if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
            return false;
          }
        }
        if (keysA.length !== Object.keys(b).length) {
          return false;
        }
        return true;
      }
    }
  }

  // The pair must have equivalent values for every corresponding key.
  // Possibly expensive deep test:
  for (i = 0; i < keys.length; i++) {
    var _key2 = keys[i];
    if (!innerDeepEqual(a[_key2], b[_key2], strict, memos)) {
      return false;
    }
  }
  return true;
}
function isDeepEqual(val1, val2) {
  return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
  return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
  isDeepEqual: isDeepEqual,
  isDeepStrictEqual: isDeepStrictEqual
};

/***/ }),

/***/ "./node_modules/available-typed-arrays/index.js":
/*!******************************************************!*\
  !*** ./node_modules/available-typed-arrays/index.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var possibleNames = __webpack_require__(/*! possible-typed-array-names */ "./node_modules/possible-typed-array-names/index.js");

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;

/** @type {import('.')} */
module.exports = function availableTypedArrays() {
	var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			// @ts-expect-error
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/actualApply.js":
/*!*************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/actualApply.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var $apply = __webpack_require__(/*! ./functionApply */ "./node_modules/call-bind-apply-helpers/functionApply.js");
var $call = __webpack_require__(/*! ./functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");
var $reflectApply = __webpack_require__(/*! ./reflectApply */ "./node_modules/call-bind-apply-helpers/reflectApply.js");

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);


/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/applyBind.js":
/*!***********************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/applyBind.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $apply = __webpack_require__(/*! ./functionApply */ "./node_modules/call-bind-apply-helpers/functionApply.js");
var actualApply = __webpack_require__(/*! ./actualApply */ "./node_modules/call-bind-apply-helpers/actualApply.js");

/** @type {import('./applyBind')} */
module.exports = function applyBind() {
	return actualApply(bind, $apply, arguments);
};


/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/functionApply.js":
/*!***************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/functionApply.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;


/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/functionCall.js":
/*!**************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/functionCall.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;


/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/index.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

var $call = __webpack_require__(/*! ./functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");
var $actualApply = __webpack_require__(/*! ./actualApply */ "./node_modules/call-bind-apply-helpers/actualApply.js");

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError('a function is required');
	}
	return $actualApply(bind, $call, args);
};


/***/ }),

/***/ "./node_modules/call-bind-apply-helpers/reflectApply.js":
/*!**************************************************************!*\
  !*** ./node_modules/call-bind-apply-helpers/reflectApply.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;


/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var setFunctionLength = __webpack_require__(/*! set-function-length */ "./node_modules/set-function-length/index.js");

var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");

var callBindBasic = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");
var applyBind = __webpack_require__(/*! call-bind-apply-helpers/applyBind */ "./node_modules/call-bind-apply-helpers/applyBind.js");

module.exports = function callBind(originalFunction) {
	var func = callBindBasic(arguments);
	var adjustedLength = originalFunction.length - (arguments.length - 1);
	return setFunctionLength(
		func,
		1 + (adjustedLength > 0 ? adjustedLength : 0),
		true
	);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/call-bound/index.js":
/*!******************************************!*\
  !*** ./node_modules/call-bound/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBindBasic = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");

/** @type {(thisArg: string, searchString: string, position?: number) => number} */
var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

/** @type {import('.')} */
module.exports = function callBoundIntrinsic(name, allowMissing) {
	/* eslint no-extra-parens: 0 */

	var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBindBasic(/** @type {const} */ ([intrinsic]));
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*global window, global*/
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/build/assert.js")
function now() { return new Date().getTime() }

var slice = Array.prototype.slice
var console
var times = {}

if (typeof __webpack_require__.g !== "undefined" && __webpack_require__.g.console) {
    console = __webpack_require__.g.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"],
    [info, "info"],
    [warn, "warn"],
    [error, "error"],
    [time, "time"],
    [timeEnd, "timeEnd"],
    [trace, "trace"],
    [dir, "dir"],
    [consoleAssert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    delete times[label]
    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}


/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-set-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/array-set-length.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iter-result-object.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iter-result-object.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in-accessor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-ins.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-ins.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/environment-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-user-agent.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ "./node_modules/core-js/internals/environment-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-v8-version.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this-clause.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-direct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-direct.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global-this.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/global-this.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "./node_modules/core-js/internals/weak-map-basic-detection.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-null-or-undefined.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close-all.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-create-proxy.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-create-proxy.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorCloseAll = __webpack_require__(/*! ../internals/iterator-close-all */ "./node_modules/core-js/internals/iterator-close-all.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      if (state.inner) try {
        iteratorClose(state.inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (state.openIters) try {
        iteratorCloseAll(state.openIters, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";

// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js ***!
  \******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.45.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-constructor-detection.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/weak-map-basic-detection.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.push.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.push.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "./node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.constructor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.constructor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.every.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.every.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(/*! ../internals/iterator-helper-without-closing-on-early-error */ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");

var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('every', TypeError);

// `Iterator.prototype.every` method
// https://tc39.es/ecma262/#sec-iterator.prototype.every
$({ target: 'Iterator', proto: true, real: true, forced: everyWithoutClosingOnEarlyError }, {
  every: function every(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (everyWithoutClosingOnEarlyError) return call(everyWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect(this);
    var counter = 0;
    return !iterate(record, function (value, stop) {
      if (!predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.map.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__(/*! ../internals/iterator-create-proxy */ "./node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__(/*! ../internals/iterator-helper-throws-on-invalid-iterator */ "./node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(/*! ../internals/iterator-helper-without-closing-on-early-error */ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('map', TypeError);

var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  map: function map(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.reduce.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.reduce.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(/*! ../internals/iterator-helper-without-closing-on-early-error */ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var $TypeError = TypeError;

// https://bugs.webkit.org/show_bug.cgi?id=291651
var FAILS_ON_INITIAL_UNDEFINED = fails(function () {
  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  [].keys().reduce(function () { /* empty */ }, undefined);
});

var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError('reduce', $TypeError);

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    try {
      aCallable(reducer);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    if (reduceWithoutClosingOnEarlyError) {
      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    }
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});


/***/ }),

/***/ "./node_modules/define-data-property/index.js":
/*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");

var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

var gopd = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

/** @type {import('.')} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = __webpack_require__(/*! define-data-property */ "./node_modules/define-data-property/index.js");

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var supportsDescriptors = __webpack_require__(/*! has-property-descriptors */ "./node_modules/has-property-descriptors/index.js")();

var defineProperty = function (object, name, value, predicate) {
	if (name in object) {
		if (predicate === true) {
			if (object[name] === value) {
				return;
			}
		} else if (!isFunction(predicate) || !predicate()) {
			return;
		}
	}

	if (supportsDescriptors) {
		defineDataProperty(object, name, value, true);
	} else {
		defineDataProperty(object, name, value);
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/dunder-proto/get.js":
/*!******************************************!*\
  !*** ./node_modules/dunder-proto/get.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBind = __webpack_require__(/*! call-bind-apply-helpers */ "./node_modules/call-bind-apply-helpers/index.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;


/***/ }),

/***/ "./node_modules/es-define-property/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-define-property/index.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;


/***/ }),

/***/ "./node_modules/es-errors/eval.js":
/*!****************************************!*\
  !*** ./node_modules/es-errors/eval.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;


/***/ }),

/***/ "./node_modules/es-errors/index.js":
/*!*****************************************!*\
  !*** ./node_modules/es-errors/index.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Error;


/***/ }),

/***/ "./node_modules/es-errors/range.js":
/*!*****************************************!*\
  !*** ./node_modules/es-errors/range.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;


/***/ }),

/***/ "./node_modules/es-errors/ref.js":
/*!***************************************!*\
  !*** ./node_modules/es-errors/ref.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;


/***/ }),

/***/ "./node_modules/es-errors/syntax.js":
/*!******************************************!*\
  !*** ./node_modules/es-errors/syntax.js ***!
  \******************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;


/***/ }),

/***/ "./node_modules/es-errors/type.js":
/*!****************************************!*\
  !*** ./node_modules/es-errors/type.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;


/***/ }),

/***/ "./node_modules/es-errors/uri.js":
/*!***************************************!*\
  !*** ./node_modules/es-errors/uri.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;


/***/ }),

/***/ "./node_modules/es-object-atoms/index.js":
/*!***********************************************!*\
  !*** ./node_modules/es-object-atoms/index.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Object;


/***/ }),

/***/ "./node_modules/exifreader/src/byte-order.js":
/*!***************************************************!*\
  !*** ./node_modules/exifreader/src/byte-order.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const LITTLE_ENDIAN = 0x4949;
const BIG_ENDIAN = 0x4d4d;

/* harmony default export */ __webpack_exports__["default"] = ({
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    getByteOrder
});

function getByteOrder(dataView, tiffHeaderOffset) {
    if (dataView.getUint16(tiffHeaderOffset) === LITTLE_ENDIAN) {
        return LITTLE_ENDIAN;
    } else if (dataView.getUint16(tiffHeaderOffset) === BIG_ENDIAN) {
        return BIG_ENDIAN;
    }
    throw new Error('Illegal byte order value. Faulty image.');
}


/***/ }),

/***/ "./node_modules/exifreader/src/canon-tags.js":
/*!***************************************************!*\
  !*** ./node_modules/exifreader/src/canon-tags.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _tags_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-helpers.js */ "./node_modules/exifreader/src/tags-helpers.js");
/* harmony import */ var _tag_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-names.js */ "./node_modules/exifreader/src/tag-names.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Reverse-engineered docs:
// https://exiftool.org/makernote_types.html
// https://exiv2.org/makernote.html
// https://exiv2.org/tags-canon.html
// https://gist.github.com/redaktor/bae0ef2377ab70bc5276
// https://www.ozhiker.com/electronics/pjmt/jpeg_info/canon_mn.html





const SHOT_INFO_AUTO_ROTATE = 27; // First position is size.

/* harmony default export */ __webpack_exports__["default"] = ({
    read,
    SHOT_INFO_AUTO_ROTATE
});

function read(dataView, tiffHeaderOffset, offset, byteOrder, includeUnknown) {
    let tags = (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_1__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_CANON, tiffHeaderOffset, tiffHeaderOffset + offset, byteOrder, includeUnknown);

    if (tags['ShotInfo']) {
        tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, parseShotInfo(tags['ShotInfo'].value));
        delete tags['ShotInfo'];
    }

    return tags;
}

function parseShotInfo(shotInfoData) {
    const tags = {};

    if (shotInfoData[SHOT_INFO_AUTO_ROTATE] !== undefined) {
        tags['AutoRotate'] = {
            value: shotInfoData[SHOT_INFO_AUTO_ROTATE],
            description: getAutoRotateDescription(shotInfoData[SHOT_INFO_AUTO_ROTATE])
        };
    }

    return tags;
}

function getAutoRotateDescription(autoRotate) {
    if (autoRotate === 0) {
        return 'None';
    }
    if (autoRotate === 1) {
        return 'Rotate 90 CW';
    }
    if (autoRotate === 2) {
        return 'Rotate 180';
    }
    if (autoRotate === 3) {
        return 'Rotate 270 CW';
    }
    return 'Unknown';
}


/***/ }),

/***/ "./node_modules/exifreader/src/composite.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/composite.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOCAL_PLANE_RESOLUTION_UNIT: function() { return /* binding */ FOCAL_PLANE_RESOLUTION_UNIT; }
/* harmony export */ });
/* harmony import */ var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-common.js */ "./node_modules/exifreader/src/tag-names-common.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const FOCAL_PLANE_RESOLUTION_UNIT = {
    INCHES: 2,
    CENTIMETERS: 3,
    MILLIMETERS: 4
};

const UNIT_FACTORS = {
    INCHES_TO_MM: 25.4, // 1 inch = 25.4 mm
    CM_TO_MM: 10, // 1 cm = 10 mm
    MM_TO_MM: 1 // Already in mm
};

/* harmony default export */ __webpack_exports__["default"] = ({
    get,
});



function get(tags, expanded) {
    const compositeTags = {};
    let hasCompositeTags = false;

    const focalLength = getTagValue(tags, 'exif', 'FocalLength', expanded);
    const focalPlaneXResolution = getTagValue(tags, 'exif', 'FocalPlaneXResolution', expanded);
    const focalPlaneYResolution = getTagValue(tags, 'exif', 'FocalPlaneYResolution', expanded);
    const focalPlaneResolutionUnit = getTagValue(tags, 'exif', 'FocalPlaneResolutionUnit', expanded);
    const imageWidth = getTagValue(tags, 'file', 'Image Width', expanded);
    const imageHeight = getTagValue(tags, 'file', 'Image Height', expanded);
    const focalLengthIn35mmFilm = getTagValue(tags, 'exif', 'FocalLengthIn35mmFilm', expanded)
        || getFocalLengthIn35mmFilmValue(focalPlaneXResolution, focalPlaneYResolution, focalPlaneResolutionUnit, imageWidth, imageHeight, focalLength);

    if (focalLengthIn35mmFilm) {
        compositeTags.FocalLength35efl = {
            value: focalLengthIn35mmFilm,
            description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].FocalLengthIn35mmFilm(focalLengthIn35mmFilm)
        };
        hasCompositeTags = true;
    }

    const scaleFactorTo35mmEquivalent = getScaleFactorTo35mmEquivalent(focalLength, focalLengthIn35mmFilm);
    if (scaleFactorTo35mmEquivalent) {
        compositeTags.ScaleFactorTo35mmEquivalent = scaleFactorTo35mmEquivalent;
        hasCompositeTags = true;
    }

    const fieldOfView = getFieldOfView(focalLengthIn35mmFilm);
    if (fieldOfView) {
        compositeTags.FieldOfView = fieldOfView;
        hasCompositeTags = true;
    }

    if (hasCompositeTags) {
        return compositeTags;
    }

    return undefined;
}

function getTagValue(tags, group, tagName, expanded) {
    if (expanded && tags[group] && tags[group][tagName]) {
        return tags[group][tagName].value;
    }
    if (!expanded && tags[tagName]) {
        return tags[tagName].value;
    }
    return undefined;
}

/**
 * Calculates the 35mm equivalent focal length from camera sensor data.
 *
 * This function determines how the field of view of a camera's sensor compares to a
 * standard 35mm film frame (36mm × 24mm). The conversion involves:
 *
 * 1. **Sensor dimensions**: Calculated from image pixel count and focal plane
 *    resolution (pixels per unit area)
 * 2. **Crop factor**: The ratio between the sensor diagonal and the standard
 *    35mm diagonal (43.27mm)
 * 3. **Equivalent focal length**: Actual focal length multiplied by the crop factor
 *
 * For example, a 50mm lens on a camera with a 1.5x crop factor gives an equivalent
 * field of view of a 75mm lens on a 35mm camera. This doesn't change the actual
 * focal length or depth of field characteristics, only the angle of view.
 */
function getFocalLengthIn35mmFilmValue(focalPlaneXResolution, focalPlaneYResolution, focalPlaneResolutionUnit, imageWidth, imageHeight, focalLength) {
    // Standard 35mm film diagonal is 43.27mm (calculated from 36mm x 24mm frame)
    const DIAGONAL_35mm = 43.27;

    if (focalPlaneXResolution && focalPlaneYResolution && focalPlaneResolutionUnit && imageWidth && imageHeight && focalLength) {
        try {
            let resolutionUnitFactor;
            switch (focalPlaneResolutionUnit) {
                case FOCAL_PLANE_RESOLUTION_UNIT.INCHES:
                    resolutionUnitFactor = UNIT_FACTORS.INCHES_TO_MM;
                    break;
                case FOCAL_PLANE_RESOLUTION_UNIT.CENTIMETERS:
                    resolutionUnitFactor = UNIT_FACTORS.CM_TO_MM;
                    break;
                case FOCAL_PLANE_RESOLUTION_UNIT.MILLIMETERS:
                    resolutionUnitFactor = UNIT_FACTORS.MM_TO_MM;
                    break;
                default:
                    return undefined;
            }

            const focalPlaneXResolutionMm = focalPlaneXResolution[0] / focalPlaneXResolution[1] * resolutionUnitFactor;
            const focalPlaneYResolutionMm = focalPlaneYResolution[0] / focalPlaneYResolution[1] * resolutionUnitFactor;

            const sensorWidthMm = imageWidth / focalPlaneXResolutionMm;
            const sensorHeightMm = imageHeight / focalPlaneYResolutionMm;

            const sensorDiagonal = Math.sqrt(sensorWidthMm ** 2 + sensorHeightMm ** 2);
            const focalLength35mm = (focalLength[0] / focalLength[1]) * (DIAGONAL_35mm / sensorDiagonal);
            return focalLength35mm;
        } catch (error) {
            // Ignore.
        }
    }
    return undefined;
}

function getScaleFactorTo35mmEquivalent(focalLength, focalLengthIn35mmFilm) {
    if (focalLength && focalLengthIn35mmFilm) {
        try {
            const value = focalLengthIn35mmFilm / (focalLength[0] / focalLength[1]);
            return {
                value,
                description: value.toFixed(1),
            };
        } catch (error) {
            // Ignore.
        }
    }
    return undefined;
}

function getFieldOfView(focalLengthIn35mmFilm) {
    const FULL_FRAME_SENSOR_WIDTH_MM = 36;

    if (focalLengthIn35mmFilm) {
        try {
            const value = 2 * Math.atan(FULL_FRAME_SENSOR_WIDTH_MM / (2 * focalLengthIn35mmFilm)) * (180 / Math.PI);
            return {
                value,
                description: value.toFixed(1) + ' deg',
            };
        } catch (error) {
            // Ignore.
        }
    }
    return undefined;
}


/***/ }),

/***/ "./node_modules/exifreader/src/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/constants.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    USE_FILE: true,
    USE_JFIF: true,
    USE_PNG_FILE: true,
    USE_EXIF: true,
    USE_IPTC: true,
    USE_XMP: true,
    USE_ICC: true,
    USE_MPF: true,
    USE_PHOTOSHOP: true,
    USE_THUMBNAIL: true,
    USE_TIFF: true,
    USE_JPEG: true,
    USE_PNG: true,
    USE_HEIC: true,
    USE_AVIF: true,
    USE_WEBP: true,
    USE_GIF: true,
    USE_MAKER_NOTES: true
});


/***/ }),

/***/ "./node_modules/exifreader/src/dataview.js":
/*!*************************************************!*\
  !*** ./node_modules/exifreader/src/dataview.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DataView; }
/* harmony export */ });
class DataView {
    constructor(buffer) {
        if (bufferTypeIsUnsupported(buffer)) {
            throw new Error('DataView: Passed buffer type is unsupported.');
        }

        this.buffer = buffer;
        this.byteLength = this.buffer.length;
    }

    getUint8(offset) {
        return this.buffer.readUInt8(offset);
    }

    getUint16(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readUInt16LE(offset);
        }
        return this.buffer.readUInt16BE(offset);
    }

    getUint32(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readUInt32LE(offset);
        }
        return this.buffer.readUInt32BE(offset);
    }

    getInt32(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readInt32LE(offset);
        }
        return this.buffer.readInt32BE(offset);
    }
}

function bufferTypeIsUnsupported(buffer) {
    return typeof buffer !== 'object'
        || buffer.length === undefined
        || buffer.readUInt8 === undefined
        || buffer.readUInt16LE === undefined
        || buffer.readUInt16BE === undefined
        || buffer.readUInt32LE === undefined
        || buffer.readUInt32BE === undefined
        || buffer.readInt32LE === undefined
        || buffer.readInt32BE === undefined;
}


/***/ }),

/***/ "./node_modules/exifreader/src/dom-parser.js":
/*!***************************************************!*\
  !*** ./node_modules/exifreader/src/dom-parser.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    get
});

function get(domParser) {
    if (domParser) {
        return domParser;
    }

    if (typeof DOMParser !== 'undefined') {
        return new DOMParser();
    }
    try {
        // eslint-disable-next-line no-undef
        const {DOMParser, onErrorStopParsing} = require('@xmldom/xmldom');
        return new DOMParser({onError: onErrorStopParsing});
    } catch (error) {
        return undefined;
    }
}


/***/ }),

/***/ "./node_modules/exifreader/src/errors.js":
/*!***********************************************!*\
  !*** ./node_modules/exifreader/src/errors.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Thrown when no Exif metadata was found for the given image.
 *
 * @param {string} message The error message.
 */
function MetadataMissingError(message) {
    this.name = 'MetadataMissingError';
    this.message = message || 'No Exif data';
    this.stack = (new Error()).stack;
}

MetadataMissingError.prototype = new Error;

/* harmony default export */ __webpack_exports__["default"] = ({
    MetadataMissingError,
});


/***/ }),

/***/ "./node_modules/exifreader/src/exif-reader.js":
/*!****************************************************!*\
  !*** ./node_modules/exifreader/src/exif-reader.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errors: function() { return /* binding */ errors; },
/* harmony export */   load: function() { return /* binding */ load; },
/* harmony export */   loadView: function() { return /* binding */ loadView; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _dataview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataview.js */ "./node_modules/exifreader/src/dataview.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-names-utils.js */ "./node_modules/exifreader/src/tag-names-utils.js");
/* harmony import */ var _image_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-header.js */ "./node_modules/exifreader/src/image-header.js");
/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags.js */ "./node_modules/exifreader/src/tags.js");
/* harmony import */ var _mpf_tags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mpf-tags.js */ "./node_modules/exifreader/src/mpf-tags.js");
/* harmony import */ var _file_tags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-tags.js */ "./node_modules/exifreader/src/file-tags.js");
/* harmony import */ var _jfif_tags_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jfif-tags.js */ "./node_modules/exifreader/src/jfif-tags.js");
/* harmony import */ var _iptc_tags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./iptc-tags.js */ "./node_modules/exifreader/src/iptc-tags.js");
/* harmony import */ var _xmp_tags_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./xmp-tags.js */ "./node_modules/exifreader/src/xmp-tags.js");
/* harmony import */ var _photoshop_tags_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photoshop-tags.js */ "./node_modules/exifreader/src/photoshop-tags.js");
/* harmony import */ var _icc_tags_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icc-tags.js */ "./node_modules/exifreader/src/icc-tags.js");
/* harmony import */ var _canon_tags_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./canon-tags.js */ "./node_modules/exifreader/src/canon-tags.js");
/* harmony import */ var _pentax_tags_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pentax-tags.js */ "./node_modules/exifreader/src/pentax-tags.js");
/* harmony import */ var _png_file_tags_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./png-file-tags.js */ "./node_modules/exifreader/src/png-file-tags.js");
/* harmony import */ var _png_text_tags_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./png-text-tags.js */ "./node_modules/exifreader/src/png-text-tags.js");
/* harmony import */ var _png_tags_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./png-tags.js */ "./node_modules/exifreader/src/png-tags.js");
/* harmony import */ var _vp8x_tags_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vp8x-tags.js */ "./node_modules/exifreader/src/vp8x-tags.js");
/* harmony import */ var _gif_file_tags_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gif-file-tags.js */ "./node_modules/exifreader/src/gif-file-tags.js");
/* harmony import */ var _thumbnail_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thumbnail.js */ "./node_modules/exifreader/src/thumbnail.js");
/* harmony import */ var _composite_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./composite.js */ "./node_modules/exifreader/src/composite.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./errors.js */ "./node_modules/exifreader/src/errors.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js */ "./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * ExifReader
 * http://github.com/mattiasw/exifreader
 * Copyright (C) 2011-2023  Mattias Wallander <mattias@wallander.eu>
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/* global Buffer, __non_webpack_require__ */


























/* harmony default export */ __webpack_exports__["default"] = ({
    load,
    loadView,
    errors: _errors_js__WEBPACK_IMPORTED_MODULE_22__["default"],
});

const errors = _errors_js__WEBPACK_IMPORTED_MODULE_22__["default"];

function load(data, options = {}) {
    if (isFilePathOrURL(data)) {
        options.async = true;
        return loadFile(data, options).then((fileContents) => loadFromData(fileContents, options));
    }
    if (isBrowserFileObject(data)) {
        options.async = true;
        return loadFileObject(data).then((fileContents) => loadFromData(fileContents, options));
    }
    return loadFromData(data, options);
}

function isFilePathOrURL(data) {
    return typeof data === 'string';
}

function loadFile(filename, options) {
    if (/^\w+:\/\//.test(filename)) {
        if (typeof fetch !== 'undefined') {
            return fetchRemoteFile(filename, options);
        }

        return nodeGetRemoteFile(filename, options);
    }

    if (isDataUri(filename)) {
        return Promise.resolve((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dataUriToBuffer)(filename));
    }

    return loadLocalFile(filename, options);
}

function fetchRemoteFile(url, {length} = {}) {
    const options = {method: 'GET'};
    if (Number.isInteger(length) && length >= 0) {
        options.headers = {
            range: `bytes=0-${length - 1}`,
        };
    }
    return fetch(url, options).then((response) => response.arrayBuffer());
}

function nodeGetRemoteFile(url, {length} = {}) {
    return new Promise((resolve, reject) => {
        const options = {};
        if (Number.isInteger(length) && length >= 0) {
            options.headers = {
                range: `bytes=0-${length - 1}`,
            };
        }

        const get = requireNodeGet(url);
        get(url, options, (response) => {
            if ((response.statusCode >= 200) && (response.statusCode <= 299)) {
                const data = [];
                response.on('data', (chunk) => data.push(Buffer.from(chunk)));
                response.on('error', (error) => reject(error));
                response.on('end', () => resolve(Buffer.concat(data)));
            } else {
                reject(`Could not fetch file: ${response.statusCode} ${response.statusMessage}`);
                response.resume();
            }
        }).on('error', (error) => reject(error));
    });
}

function requireNodeGet(url) {
    if (/^https:\/\//.test(url)) {
        return require('https').get;
    }
    return require('http').get;
}

function isDataUri(filename) {
    return /^data:[^;,]*(;base64)?,/.test(filename);
}

function loadLocalFile(filename, {length} = {}) {
    return new Promise((resolve, reject) => {
        const fs = requireNodeFs();
        fs.open(filename, (error, fd) => {
            if (error) {
                reject(error);
            } else {
                fs.stat(filename, (error, stat) => {
                    if (error) {
                        reject(error);
                    } else {
                        const size = Math.min(stat.size, length !== undefined ? length : stat.size);
                        const buffer = Buffer.alloc(size);
                        const options = {
                            buffer,
                            length: size
                        };
                        fs.read(fd, options, (error) => {
                            if (error) {
                                reject(error);
                            } else {
                                fs.close(fd, (error) => {
                                    if (error) {
                                        console.warn(`Could not close file ${filename}:`, error); // eslint-disable-line no-console
                                    }
                                    resolve(buffer);
                                });
                            }
                        });
                    }
                });
            }
        });
    });
}

function requireNodeFs() {
    try {
        return require('fs');
    } catch (error) {
        return undefined;
    }
}

function isBrowserFileObject(data) {
    return (typeof File !== 'undefined') && (data instanceof File);
}

function loadFileObject(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (readerEvent) => resolve(readerEvent.target.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(file);
    });
}

function loadFromData(data, options) {
    if (isNodeBuffer(data)) {
        // File data read in Node can share the underlying buffer with other
        // data. Therefore it's safest to get a new one to avoid weird bugs.
        data = (new Uint8Array(data)).buffer;
    }
    return loadView(getDataView(data), options);
}

function isNodeBuffer(data) {
    try {
        return Buffer.isBuffer(data);
    } catch (error) {
        return false;
    }
}

function getDataView(data) {
    try {
        return new DataView(data);
    } catch (error) {
        return new _dataview_js__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    }
}

function loadView(
    dataView,
    {
        expanded = false,
        async = false,
        includeUnknown = false,
        domParser = undefined,
    } = {
        expanded: false,
        async: false,
        includeUnknown: false,
        domParser: undefined,
    }
) {
    let foundMetaData = false;
    let tags = {};
    const tagsPromises = [];

    const {
        fileType,
        fileDataOffset,
        jfifDataOffset,
        tiffHeaderOffset,
        iptcDataOffset,
        xmpChunks,
        iccChunks,
        mpfDataOffset,
        pngHeaderOffset,
        pngTextChunks,
        pngChunkOffsets,
        vp8xChunkOffset,
        gifHeaderOffset
    } = _image_header_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseAppMarkers(dataView, async);

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_FILE && hasFileData(fileDataOffset)) {
        foundMetaData = true;
        const readTags = _file_tags_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(dataView, fileDataOffset);
        if (expanded) {
            tags.file = readTags;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JFIF && hasJfifData(jfifDataOffset)) {
        foundMetaData = true;
        const readTags = _jfif_tags_js__WEBPACK_IMPORTED_MODULE_8__["default"].read(dataView, jfifDataOffset);
        if (expanded) {
            tags.jfif = readTags;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_EXIF && hasExifData(tiffHeaderOffset)) {
        foundMetaData = true;
        const {tags: readTags, byteOrder} = _tags_js__WEBPACK_IMPORTED_MODULE_5__["default"].read(dataView, tiffHeaderOffset, includeUnknown);
        if (readTags.Thumbnail) {
            tags.Thumbnail = readTags.Thumbnail;
            delete readTags.Thumbnail;
        }

        if (expanded) {
            tags.exif = readTags;
            addGpsGroup(tags);
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_IPTC && readTags['IPTC-NAA'] && !hasIptcData(iptcDataOffset)) {
            const readIptcTags = _iptc_tags_js__WEBPACK_IMPORTED_MODULE_9__["default"].read(readTags['IPTC-NAA'].value, 0, includeUnknown);
            if (expanded) {
                tags.iptc = readIptcTags;
            } else {
                tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readIptcTags);
            }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_XMP && readTags['ApplicationNotes'] && !hasXmpData(xmpChunks)) {
            const readXmpTags = _xmp_tags_js__WEBPACK_IMPORTED_MODULE_10__["default"].read((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValueFromArray)(readTags['ApplicationNotes'].value), undefined, domParser);
            if (expanded) {
                tags.xmp = readXmpTags;
            } else {
                delete readXmpTags._raw;
                tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readXmpTags);
            }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PHOTOSHOP && readTags['ImageSourceData'] && readTags['PhotoshopSettings']) {
            const readPhotoshopTags = _photoshop_tags_js__WEBPACK_IMPORTED_MODULE_11__["default"].read(readTags['PhotoshopSettings'].value, includeUnknown);
            if (expanded) {
                tags.photoshop = readPhotoshopTags;
            } else {
                tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readPhotoshopTags);
            }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_ICC && readTags['ICC_Profile'] && !hasIccData(iccChunks)) {
            const readIccTags = _icc_tags_js__WEBPACK_IMPORTED_MODULE_12__["default"].read(
                readTags['ICC_Profile'].value,
                [{
                    offset: 0,
                    length: readTags['ICC_Profile'].value.length,
                    chunkNumber: 1,
                    chunksTotal: 1
                }]
            );
            if (expanded) {
                tags.icc = readIccTags;
            } else {
                tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readIccTags);
            }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_MAKER_NOTES && readTags['MakerNote']) {
            if (hasCanonData(readTags)) {
                const readCanonTags = _canon_tags_js__WEBPACK_IMPORTED_MODULE_13__["default"].read(dataView, tiffHeaderOffset, readTags['MakerNote'].__offset, byteOrder, includeUnknown);
                if (expanded) {
                    tags.makerNotes = readCanonTags;
                } else {
                    tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readCanonTags);
                }
            } else if (hasPentaxType1Data(readTags)) {
                const readPentaxTags = _pentax_tags_js__WEBPACK_IMPORTED_MODULE_14__["default"].read(dataView, tiffHeaderOffset, readTags['MakerNote'].__offset, includeUnknown);
                if (expanded) {
                    tags.makerNotes = readPentaxTags;
                } else {
                    tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readPentaxTags);
                }
            }
        }

        if (readTags['MakerNote']) {
            delete readTags['MakerNote'].__offset;
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_IPTC && hasIptcData(iptcDataOffset)) {
        foundMetaData = true;
        const readTags = _iptc_tags_js__WEBPACK_IMPORTED_MODULE_9__["default"].read(dataView, iptcDataOffset, includeUnknown);
        if (expanded) {
            tags.iptc = readTags;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_XMP && hasXmpData(xmpChunks)) {
        foundMetaData = true;
        const readTags = _xmp_tags_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(dataView, xmpChunks, domParser);
        if (expanded) {
            tags.xmp = readTags;
        } else {
            delete readTags._raw;
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if ((_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG || _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP) && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_ICC && hasIccData(iccChunks)) {
        foundMetaData = true;
        const readTags = _icc_tags_js__WEBPACK_IMPORTED_MODULE_12__["default"].read(dataView, iccChunks, async);
        if (readTags instanceof Promise) {
            tagsPromises.push(readTags.then(addIccTags));
        } else {
            addIccTags(readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_MPF && hasMpfData(mpfDataOffset)) {
        foundMetaData = true;
        const readMpfTags = _mpf_tags_js__WEBPACK_IMPORTED_MODULE_6__["default"].read(dataView, mpfDataOffset, includeUnknown);
        if (expanded) {
            tags.mpf = readMpfTags;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readMpfTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG_FILE && hasPngFileData(pngHeaderOffset)) {
        foundMetaData = true;
        const readTags = _png_file_tags_js__WEBPACK_IMPORTED_MODULE_15__["default"].read(dataView, pngHeaderOffset);
        if (expanded) {
            tags.png = !tags.png ? readTags : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.png, readTags);
            tags.pngFile = readTags;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG && hasPngTextData(pngTextChunks)) {
        foundMetaData = true;
        const {readTags, readTagsPromise} = _png_text_tags_js__WEBPACK_IMPORTED_MODULE_16__["default"].read(dataView, pngTextChunks, async, includeUnknown);
        addPngTextTags(readTags);
        if (readTagsPromise) {
            tagsPromises.push(readTagsPromise.then((tagList) => tagList.forEach(addPngTextTags)));
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG && hasPngData(pngChunkOffsets)) {
        foundMetaData = true;
        const readTags = _png_tags_js__WEBPACK_IMPORTED_MODULE_17__["default"].read(dataView, pngChunkOffsets);
        if (expanded) {
            tags.png = !tags.png ? readTags : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.png, readTags);
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP && hasVp8xData(vp8xChunkOffset)) {
        foundMetaData = true;
        const readTags = _vp8x_tags_js__WEBPACK_IMPORTED_MODULE_18__["default"].read(dataView, vp8xChunkOffset);
        if (expanded) {
            tags.riff = !tags.riff ? readTags : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.riff, readTags);
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_GIF && hasGifFileData(gifHeaderOffset)) {
        foundMetaData = true;
        const readTags = _gif_file_tags_js__WEBPACK_IMPORTED_MODULE_19__["default"].read(dataView, gifHeaderOffset);
        if (expanded) {
            tags.gif = !tags.gif ? readTags : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.gif, readTags);
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    const composite = _composite_js__WEBPACK_IMPORTED_MODULE_21__["default"].get(tags, expanded);
    if (composite) {
        if (expanded) {
            tags.composite = composite;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, composite);
        }
    }

    const thumbnail = (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG || _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP)
        && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_EXIF
        && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_THUMBNAIL
        && _thumbnail_js__WEBPACK_IMPORTED_MODULE_20__["default"].get(dataView, tags.Thumbnail, tiffHeaderOffset);
    if (thumbnail) {
        foundMetaData = true;
        tags.Thumbnail = thumbnail;
    } else {
        delete tags.Thumbnail;
    }

    if (fileType) {
        if (expanded) {
            if (!tags.file) {
                tags.file = {};
            }
            tags.file.FileType = fileType;
        } else {
            tags.FileType = fileType;
        }
        foundMetaData = true;
    }

    if (!foundMetaData) {
        throw new _errors_js__WEBPACK_IMPORTED_MODULE_22__["default"].MetadataMissingError();
    }

    if (async) {
        return Promise.all(tagsPromises).then(() => tags);
    }
    return tags;

    function addIccTags(readTags) {
        if (expanded) {
            tags.icc = readTags;
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags, readTags);
        }
    }

    function addPngTextTags(readTags) {
        if (expanded) {
            for (const group of ['exif', 'iptc']) {
                const groupKey = `__${group}`;
                if (readTags[groupKey]) {
                    tags[group] = !tags[group] ? readTags[groupKey] : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.exif, readTags[groupKey]);
                    delete readTags[groupKey];
                }
            }
            tags.png = !tags.png ? readTags : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.png, readTags);
            tags.pngText = !tags.pngText ? readTags : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, tags.png, readTags);
        } else {
            tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(
                {},
                tags,
                readTags.__exif ? readTags.__exif : {},
                readTags.__iptc ? readTags.__iptc : {},
                readTags
            );
            delete tags.__exif;
            delete tags.__iptc;
        }
    }
}

function hasFileData(fileDataOffset) {
    return fileDataOffset !== undefined;
}

function hasJfifData(jfifDataOffset) {
    return jfifDataOffset !== undefined;
}

function hasExifData(tiffHeaderOffset) {
    return tiffHeaderOffset !== undefined;
}

function addGpsGroup(tags) {
    if (tags.exif) {
        if (tags.exif.GPSLatitude && tags.exif.GPSLatitudeRef) {
            try {
                tags.gps = tags.gps || {};
                tags.gps.Latitude = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCalculatedGpsValue)(tags.exif.GPSLatitude.value);
                if (tags.exif.GPSLatitudeRef.value.join('') === 'S') {
                    tags.gps.Latitude = -tags.gps.Latitude;
                }
            } catch (error) {
                // Ignore.
            }
        }

        if (tags.exif.GPSLongitude && tags.exif.GPSLongitudeRef) {
            try {
                tags.gps = tags.gps || {};
                tags.gps.Longitude = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__.getCalculatedGpsValue)(tags.exif.GPSLongitude.value);
                if (tags.exif.GPSLongitudeRef.value.join('') === 'W') {
                    tags.gps.Longitude = -tags.gps.Longitude;
                }
            } catch (error) {
                // Ignore.
            }
        }

        if (tags.exif.GPSAltitude && tags.exif.GPSAltitudeRef) {
            try {
                tags.gps = tags.gps || {};
                tags.gps.Altitude = tags.exif.GPSAltitude.value[0] / tags.exif.GPSAltitude.value[1];
                if (tags.exif.GPSAltitudeRef.value === 1) {
                    tags.gps.Altitude = -tags.gps.Altitude;
                }
            } catch (error) {
                // Ignore.
            }
        }
    }
}

function hasIptcData(iptcDataOffset) {
    return iptcDataOffset !== undefined;
}

function hasXmpData(xmpChunks) {
    return Array.isArray(xmpChunks) && xmpChunks.length > 0;
}

function hasIccData(iccDataOffsets) {
    return Array.isArray(iccDataOffsets) && iccDataOffsets.length > 0;
}

function hasCanonData(tags) {
    return tags['Make'] && tags['Make'].value && Array.isArray(tags['Make'].value) && tags['Make'].value[0] === 'Canon'
        && tags['MakerNote'] && tags['MakerNote'].__offset;
}

function hasPentaxType1Data(tags) {
    const PENTAX_ID_STRING = 'PENTAX ';
    return tags['MakerNote'].value.length > PENTAX_ID_STRING.length
        && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValueFromArray)(tags['MakerNote'].value.slice(0, PENTAX_ID_STRING.length)) === PENTAX_ID_STRING
        && tags['MakerNote'].__offset;
}

function hasMpfData(mpfDataOffset) {
    return mpfDataOffset !== undefined;
}

function hasPngFileData(pngFileDataOffset) {
    return pngFileDataOffset !== undefined;
}

function hasPngTextData(pngTextChunks) {
    return pngTextChunks !== undefined;
}

function hasPngData(pngChunkOffsets) {
    return pngChunkOffsets !== undefined;
}

function hasVp8xData(vp8xChunkOffset) {
    return vp8xChunkOffset !== undefined;
}

function hasGifFileData(gifHeaderOffset) {
    return gifHeaderOffset !== undefined;
}


/***/ }),

/***/ "./node_modules/exifreader/src/file-tags.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/file-tags.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, fileDataOffset) {
    const length = getLength(dataView, fileDataOffset);
    const numberOfColorComponents = getNumberOfColorComponents(dataView, fileDataOffset, length);
    return {
        'Bits Per Sample': getDataPrecision(dataView, fileDataOffset, length),
        'Image Height': getImageHeight(dataView, fileDataOffset, length),
        'Image Width': getImageWidth(dataView, fileDataOffset, length),
        'Color Components': numberOfColorComponents,
        'Subsampling': numberOfColorComponents && getSubsampling(dataView, fileDataOffset, numberOfColorComponents.value, length)
    };
}

function getLength(dataView, fileDataOffset) {
    return _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset);
}

function getDataPrecision(dataView, fileDataOffset, length) {
    const OFFSET = 2;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getImageHeight(dataView, fileDataOffset, length) {
    const OFFSET = 3;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getImageWidth(dataView, fileDataOffset, length) {
    const OFFSET = 5;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getNumberOfColorComponents(dataView, fileDataOffset, length) {
    const OFFSET = 7;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getSubsampling(dataView, fileDataOffset, numberOfColorComponents, length) {
    const OFFSET = 8;
    const SIZE = 3 * numberOfColorComponents;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const components = [];

    for (let i = 0; i < numberOfColorComponents; i++) {
        const componentOffset = fileDataOffset + OFFSET + i * 3;
        components.push([
            _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset),
            _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset + 1),
            _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset + 2)
        ]);
    }

    return {
        value: components,
        description: components.length > 1 ? getComponentIds(components) + getSamplingType(components) : ''
    };
}

function getComponentIds(components) {
    const ids = {
        0x01: 'Y',
        0x02: 'Cb',
        0x03: 'Cr',
        0x04: 'I',
        0x05: 'Q',
    };

    return components.map((compontent) => ids[compontent[0]]).join('');
}

function getSamplingType(components) {
    const types = {
        0x11: '4:4:4 (1 1)',
        0x12: '4:4:0 (1 2)',
        0x14: '4:4:1 (1 4)',
        0x21: '4:2:2 (2 1)',
        0x22: '4:2:0 (2 2)',
        0x24: '4:2:1 (2 4)',
        0x41: '4:1:1 (4 1)',
        0x42: '4:1:0 (4 2)'
    };

    if (components.length === 0 || components[0][1] === undefined || types[components[0][1]] === undefined) {
        return '';
    }

    return types[components[0][1]];
}


/***/ }),

/***/ "./node_modules/exifreader/src/gif-file-tags.js":
/*!******************************************************!*\
  !*** ./node_modules/exifreader/src/gif-file-tags.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// https://www.w3.org/Graphics/GIF/spec-gif87.txt
// https://www.w3.org/Graphics/GIF/spec-gif89a.txt



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView) {
    return {
        'GIF Version': getGifVersion(dataView),
        'Image Width': getImageWidth(dataView),
        'Image Height': getImageHeight(dataView),
        'Global Color Map': getGlobalColorMap(dataView),
        'Bits Per Pixel': getBitDepth(dataView),
        'Color Resolution Depth': getColorResolution(dataView)
    };
}

function getGifVersion(dataView) {
    const OFFSET = 3;
    const SIZE = 3;

    if (OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, OFFSET, SIZE);
    return {
        value,
        description: value
    };
}

function getImageWidth(dataView) {
    const OFFSET = 6;
    const SIZE = 2;

    if (OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = dataView.getUint16(OFFSET, true);
    return {
        value,
        description: `${value}px`
    };
}

function getImageHeight(dataView) {
    const OFFSET = 8;
    const SIZE = 2;

    if (OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = dataView.getUint16(OFFSET, true);
    return {
        value,
        description: `${value}px`
    };
}

function getGlobalColorMap(dataView) {
    const OFFSET = 10;
    const SIZE = 1;

    if (OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const byteValue = dataView.getUint8(OFFSET);
    const value = (byteValue & 0b10000000) >>> 7;
    return {
        value,
        description: value === 1 ? 'Yes' : 'No'
    };
}

function getColorResolution(dataView) {
    const OFFSET = 10;
    const SIZE = 1;

    if (OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const byteValue = dataView.getUint8(OFFSET);
    const value = ((byteValue & 0b01110000) >>> 4) + 1; // Zero-based.
    return {
        value,
        description: `${value} ${value === 1 ? 'bit' : 'bits'}`
    };
}

function getBitDepth(dataView) {
    const OFFSET = 10;
    const SIZE = 1;

    if (OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const byteValue = dataView.getUint8(OFFSET);
    const value = (byteValue & 0b00000111) + 1; // Zero-based.
    return {
        value,
        description: `${value} ${value === 1 ? 'bit' : 'bits'}`
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/icc-tag-names.js":
/*!******************************************************!*\
  !*** ./node_modules/exifreader/src/icc-tag-names.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iccProfile: function() { return /* binding */ iccProfile; },
/* harmony export */   iccTags: function() { return /* binding */ iccTags; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const iccTags = {
    'desc': {
        'name': 'ICC Description',
    },
    'cprt': {
        'name': 'ICC Copyright',
    },
    'dmdd': {
        'name': 'ICC Device Model Description',
    },
    'vued': {
        'name': 'ICC Viewing Conditions Description',
    },
    'dmnd': {
        'name': 'ICC Device Manufacturer for Display',
    },
    'tech': {
        'name': 'Technology',
    },
};

const iccProfile = {
    4: {
        'name': 'Preferred CMM type',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4),
        'description': (value) => value !== null ? toCompany(value) : '',
    },
    8: {
        'name': 'Profile Version',
        'value': (dataView, offset) => {
            return (dataView.getUint8(offset)).toString(10) + '.'
            + (dataView.getUint8(offset + 1) >> 4).toString(10) + '.'
            + (dataView.getUint8(offset + 1) % 16).toString(10);
        }
    },
    12: {
        'name': 'Profile/Device class',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4),
        'description': (value) => {
            switch (value.toLowerCase()) {
                case 'scnr': return 'Input Device profile';
                case 'mntr': return 'Display Device profile';
                case 'prtr': return 'Output Device profile';
                case 'link': return 'DeviceLink profile';
                case 'abst': return 'Abstract profile';
                case 'spac': return 'ColorSpace profile';
                case 'nmcl': return 'NamedColor profile';
                case 'cenc': return 'ColorEncodingSpace profile';
                case 'mid ': return 'MultiplexIdentification profile';
                case 'mlnk': return 'MultiplexLink profile';
                case 'mvis': return 'MultiplexVisualization profile';
                default: return value;
            }
        }
    },
    16: {
        'name': 'Color Space',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4)
    },
    20: {
        'name': 'Connection Space',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4)
    },
    24: {
        'name': 'ICC Profile Date',
        'value': (dataView, offset) => parseDate(dataView, offset).toISOString()
    },
    36: {
        'name': 'ICC Signature',
        'value': (dataView, offset) => sliceToString(dataView.buffer.slice(offset, offset + 4))
    },
    40: {
        'name': 'Primary Platform',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4),
        'description': (value) => toCompany(value)
    },
    48: {
        'name': 'Device Manufacturer',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4),
        'description': (value) => toCompany(value)
    },
    52: {
        'name': 'Device Model Number',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4)
    },
    64: {
        'name': 'Rendering Intent',
        'value': (dataView, offset) => dataView.getUint32(offset),
        'description': (value) => {
            switch (value) {
                case 0: return 'Perceptual';
                case 1: return 'Relative Colorimetric';
                case 2: return 'Saturation';
                case 3: return 'Absolute Colorimetric';
                default: return value;
            }
        }
    },

    80: {
        'name': 'Profile Creator',
        'value': (dataView, offset) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4)
    },
};

function parseDate(dataView, offset) {
    const year = dataView.getUint16(offset);
    const month = dataView.getUint16(offset + 2) - 1;
    const day = dataView.getUint16(offset + 4);
    const hours = dataView.getUint16(offset + 6);
    const minutes = dataView.getUint16(offset + 8);
    const seconds = dataView.getUint16(offset + 10);
    return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
}

function sliceToString(slice) {
    return String.fromCharCode.apply(null, new Uint8Array(slice));
}

function toCompany(value) {
    switch (value.toLowerCase()) {
        case 'appl': return 'Apple';
        case 'adbe': return 'Adobe';
        case 'msft': return 'Microsoft';
        case 'sunw': return 'Sun Microsystems';
        case 'sgi': return 'Silicon Graphics';
        case 'tgnt': return 'Taligent';
        default: return value;
    }
}


/***/ }),

/***/ "./node_modules/exifreader/src/icc-tags.js":
/*!*************************************************!*\
  !*** ./node_modules/exifreader/src/icc-tags.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseTags: function() { return /* binding */ parseTags; }
/* harmony export */ });
/* harmony import */ var _icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icc-tag-names.js */ "./node_modules/exifreader/src/icc-tag-names.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

const PROFILE_HEADER_LENGTH = 84;
const ICC_TAG_COUNT_OFFSET = 128;
const ICC_SIGNATURE = 'acsp';
const TAG_TYPE_DESC = 'desc';
const TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE = 'mluc';
const TAG_TYPE_TEXT = 'text';
const TAG_TYPE_SIGNATURE = 'sig ';
const TAG_TABLE_SINGLE_TAG_DATA = 12;

// ICC profile data can be longer than application segment max length of ~64k.
// so it can be split into multiple APP2 segments. Each segment includes
// total chunk count and chunk number.
// Here we read all chunks into single continuous array of bytes.
// Compressed ICC profile data only has support for a single chunk.
function read(dataView, iccData, async) {
    if (async && iccData[0].compressionMethod !== _utils_js__WEBPACK_IMPORTED_MODULE_1__.COMPRESSION_METHOD_NONE) {
        return readCompressedIcc(dataView, iccData);
    }

    return readIcc(dataView, iccData);
}

function readCompressedIcc(dataView, iccData) {
    if (!compressionMethodIsSupported(iccData[0].compressionMethod)) {
        return {};
    }
    const compressedDataView = new DataView(dataView.buffer.slice(iccData[0].offset, iccData[0].offset + iccData[0].length));
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.decompress)(compressedDataView, iccData[0].compressionMethod, 'utf-8', 'dataview')
        .then(parseTags)
        .catch(() => ({}));
}

function compressionMethodIsSupported(compressionMethod) {
    return compressionMethod === _utils_js__WEBPACK_IMPORTED_MODULE_1__.COMPRESSION_METHOD_DEFLATE;
}

function readIcc(dataView, iccData) {
    try {
        const totalIccProfileLength = iccData.reduce((sum, icc) => sum + icc.length, 0);

        const iccBinaryData = new Uint8Array(totalIccProfileLength);
        let offset = 0;
        const buffer = getBuffer(dataView);

        for (let chunkNumber = 1; chunkNumber <= iccData.length; chunkNumber++) {
            const iccDataChunk = iccData.find((x) => x.chunkNumber === chunkNumber);
            if (!iccDataChunk) {
                throw new Error(`ICC chunk ${chunkNumber} not found`);
            }

            const data = buffer.slice(iccDataChunk.offset, iccDataChunk.offset + iccDataChunk.length);
            const chunkData = new Uint8Array(data);

            iccBinaryData.set(chunkData, offset);
            offset += chunkData.length;
        }

        return parseTags(new DataView(iccBinaryData.buffer));
    } catch (error) {
        return {};
    }
}

function getBuffer(dataView) {
    if (Array.isArray(dataView)) {
        return (new DataView(Uint8Array.from(dataView).buffer)).buffer;
    }
    return dataView.buffer;
}

function iccDoesNotHaveTagCount(buffer) {
    return buffer.length < (ICC_TAG_COUNT_OFFSET + 4);
}

function hasTagsData(buffer, tagHeaderOffset) {
    return buffer.length < tagHeaderOffset + TAG_TABLE_SINGLE_TAG_DATA;
}

function parseTags(dataView) {
    const buffer = dataView.buffer;

    const length = dataView.getUint32();
    if (dataView.byteLength !== length) {
        throw new Error('ICC profile length not matching');
    }

    if (dataView.byteLength < PROFILE_HEADER_LENGTH) {
        throw new Error('ICC profile too short');
    }

    const tags = {};

    const iccProfileKeys = Object.keys(_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__.iccProfile);
    for (let i = 0; i < iccProfileKeys.length; i++) {
        const offset = iccProfileKeys[i];
        const profileEntry = _icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__.iccProfile[offset];
        const value = profileEntry.value(dataView, parseInt(offset, 10));
        let description = value;
        if (profileEntry.description) {
            description = profileEntry.description(value);
        }

        tags[profileEntry.name] = {
            value,
            description
        };
    }

    const signature = sliceToString(buffer.slice(36, 40));
    if (signature !== ICC_SIGNATURE) {
        throw new Error('ICC profile: missing signature');
    }

    /* ICC data is incomplete but we have header parsed so lets return it */
    if (iccDoesNotHaveTagCount(buffer)) {
        return tags;
    }

    const tagCount = dataView.getUint32(128);
    let tagHeaderOffset = 132;

    for (let i = 0; i < tagCount; i++) {
        if (hasTagsData(buffer, tagHeaderOffset)) {
            // Tags are corrupted (offset too far), return what we parsed until now
            return tags;
        }
        const tagSignature = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getStringFromDataView)(dataView, tagHeaderOffset, 4);
        const tagOffset = dataView.getUint32(tagHeaderOffset + 4);
        const tagSize = dataView.getUint32(tagHeaderOffset + 8);

        if (tagOffset > buffer.length) {
            // Tag data is invalid, lets return what we managed to parse
            return tags;
        }
        const tagType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getStringFromDataView)(dataView, tagOffset, 4);

        if (tagType === TAG_TYPE_DESC) {
            const tagValueSize = dataView.getUint32(tagOffset + 8);
            if (tagValueSize > tagSize) {
                // Tag data is invalid, lets return what we managed to parse
                return tags;
            }

            const val = sliceToString(buffer.slice(tagOffset + 12, tagOffset + tagValueSize + 11));
            addTag(tags, tagSignature, val);
        } else if (tagType === TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE) {
            const numRecords = dataView.getUint32(tagOffset + 8);
            const recordSize = dataView.getUint32(tagOffset + 12);
            let offset = tagOffset + 16;
            const val = [];
            for (let recordNum = 0; recordNum < numRecords; recordNum++) {
                const languageCode = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getStringFromDataView)(dataView, offset + 0, 2);
                const countryCode = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getStringFromDataView)(dataView, offset + 2, 2);
                const textLength = dataView.getUint32(offset + 4);
                const textOffset = dataView.getUint32(offset + 8);

                const text = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getUnicodeStringFromDataView)(dataView, tagOffset + textOffset, textLength);
                val.push({languageCode, countryCode, text});
                offset += recordSize;
            }
            if (numRecords === 1) {
                addTag(tags, tagSignature, val[0].text);
            } else {
                const valObj = {};
                for (let valIndex = 0; valIndex < val.length; valIndex++) {
                    valObj[`${val[valIndex].languageCode}-${val[valIndex].countryCode}`] = val[valIndex].text;
                }
                addTag(tags, tagSignature, valObj);
            }
        } else if (tagType === TAG_TYPE_TEXT) {
            const val = sliceToString(buffer.slice(tagOffset + 8, tagOffset + tagSize - 7));
            addTag(tags, tagSignature, val);
        } else if (tagType === TAG_TYPE_SIGNATURE) {
            const val = sliceToString(buffer.slice(tagOffset + 8, tagOffset + 12));
            addTag(tags, tagSignature, val);
        }
        tagHeaderOffset = tagHeaderOffset + 12;
    }

    return tags;
}

function sliceToString(slice) {
    return String.fromCharCode.apply(null, new Uint8Array(slice));
}

function addTag(tags, tagSignature, value) {
    if (_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__.iccTags[tagSignature]) {
        tags[_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__.iccTags[tagSignature].name] = {value, description: value};
    } else {
        tags[tagSignature] = {value, description: value};
    }
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-avif.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-avif.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_header_iso_bmff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-header-iso-bmff.js */ "./node_modules/exifreader/src/image-header-iso-bmff.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Specification:
// https://aomediacodec.github.io/av1-avif



/* harmony default export */ __webpack_exports__["default"] = ({
    isAvifFile,
    findAvifOffsets
});

/**
 * Checks if the provided data view represents an AVIF file.
 *
 * @param {DataView} dataView - The data view to check.
 * @returns {boolean} True if the data view represents an AVIF file, false otherwise.
 */
function isAvifFile(dataView) {
    if (!dataView) {
        return false;
    }

    try {
        const headerBox = (0,_image_header_iso_bmff_js__WEBPACK_IMPORTED_MODULE_0__.parseBox)(dataView, 0);
        return headerBox && headerBox.majorBrand === 'avif';
    } catch (error) {
        return false;
    }
}

/**
 * Finds the offsets of an AVIF file in the provided data view.
 *
 * @param {DataView} dataView - The data view to find offsets in.
 * @returns {Object} An object containing the offsets of the TIFF header, XMP chunks, ICC chunks, and a boolean indicating if any of these exist.
 */
function findAvifOffsets(dataView) {
    return (0,_image_header_iso_bmff_js__WEBPACK_IMPORTED_MODULE_0__.findOffsets)(dataView);
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-gif.js":
/*!*********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-gif.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    isGifFile,
    findOffsets
});

const GIF_SIGNATURE_SIZE = 6;
const GIF_SIGNATURES = ['GIF87a', 'GIF89a'];

function isGifFile(dataView) {
    return !!dataView && GIF_SIGNATURES.includes((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, 0, GIF_SIGNATURE_SIZE));
}

function findOffsets() {
    return {
        gifHeaderOffset: 0
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-heic.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-heic.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_header_iso_bmff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-header-iso-bmff.js */ "./node_modules/exifreader/src/image-header-iso-bmff.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    isHeicFile,
    findHeicOffsets
});

/**
 * Checks if the provided data view represents a HEIC/HEIF file.
 *
 * @param {DataView} dataView - The data view to check.
 * @returns {boolean} True if the data view represents a HEIC/HEIF file, false otherwise.
 */
function isHeicFile(dataView) {
    if (!dataView) {
        return false;
    }

    const HEIC_MAJOR_BRANDS = ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs', 'mif1'];

    try {
        const headerBox = (0,_image_header_iso_bmff_js__WEBPACK_IMPORTED_MODULE_0__.parseBox)(dataView, 0);
        return headerBox && HEIC_MAJOR_BRANDS.indexOf(headerBox.majorBrand) !== -1;
    } catch (error) {
        return false;
    }
}

/**
 * Finds the offsets of a HEIC file in the provided data view.
 *
 * @param {DataView} dataView - The data view to find offsets in.
 * @returns {Object} An object containing the offsets of the TIFF header, XMP chunks, ICC chunks, and a boolean indicating if any of these exist.
 */
function findHeicOffsets(dataView) {
    return (0,_image_header_iso_bmff_js__WEBPACK_IMPORTED_MODULE_0__.findOffsets)(dataView);
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-iso-bmff-iloc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-iso-bmff-iloc.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseItemLocationBox: function() { return /* binding */ parseItemLocationBox; }
/* harmony export */ });
/* harmony import */ var _image_header_iso_bmff_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-header-iso-bmff-utils.js */ "./node_modules/exifreader/src/image-header-iso-bmff-utils.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


function parseItemLocationBox(dataView, version, contentOffset, boxLength) {
    const FLAGS_SIZE = 3;

    const {offsets, sizes} = getItemLocationBoxOffsetsAndSizes(version, contentOffset + FLAGS_SIZE);

    const offsetSize = dataView.getUint8(offsets.offsetSize) >> 4;
    sizes.item.extent.extentOffset = offsetSize;
    const lengthSize = dataView.getUint8(offsets.lengthSize) & 0x0f;
    sizes.item.extent.extentLength = lengthSize;
    const baseOffsetSize = dataView.getUint8(offsets.baseOffsetSize) >> 4;
    sizes.item.baseOffset = baseOffsetSize;
    const indexSize = getIndexSize(dataView, offsets.indexSize, version);
    sizes.item.extent.extentIndex = indexSize !== undefined ? indexSize : 0;
    const itemCount = getItemCount(dataView, offsets.itemCount, version);

    return {
        type: 'iloc',
        items: getItems(dataView, version, offsets, sizes, offsetSize, lengthSize, indexSize, itemCount),
        length: boxLength
    };
}

function getItemLocationBoxOffsetsAndSizes(version, contentOffset) {
    const sizes = {
        item: {
            dataReferenceIndex: 2,
            extentCount: 2,
            extent: {}
        }
    };
    if (version < 2) {
        sizes.itemCount = 2;
        sizes.item.itemId = 2;
    } else if (version === 2) {
        sizes.itemCount = 4;
        sizes.item.itemId = 4;
    }
    if (version === 1 || version === 2) {
        sizes.item.constructionMethod = 2;
    } else {
        sizes.item.constructionMethod = 0;
    }

    const offsets = {
        offsetSize: contentOffset,
        lengthSize: contentOffset,
        baseOffsetSize: contentOffset + 1,
        indexSize: contentOffset + 1
    };
    offsets.itemCount = contentOffset + 2;
    offsets.items = offsets.itemCount + sizes.itemCount;
    offsets.item = {
        itemId: 0
    };
    offsets.item.constructionMethod = offsets.item.itemId + sizes.item.itemId;
    offsets.item.dataReferenceIndex = offsets.item.constructionMethod + sizes.item.constructionMethod;

    return {offsets, sizes};
}

function getIndexSize(dataView, offset, version) {
    if (version === 1 || version === 2) {
        return dataView.getUint8(offset) & 0x0f;
    }
    return undefined;
}

function getItemCount(dataView, offset, version) {
    if (version < 2) {
        return dataView.getUint16(offset);
    } else if (version === 2) {
        return dataView.getUint32(offset);
    }
    return undefined;
}

function getItems(dataView, version, offsets, sizes, offsetSize, lengthSize, indexSize, itemCount) {
    if (itemCount === undefined) {
        return [];
    }

    const items = [];
    let offset = offsets.items;

    for (let i = 0; i < itemCount; i++) {
        const item = {extents: []};
        item.itemId = getItemId(dataView, offset, version);
        offset += sizes.item.itemId;
        item.constructionMethod = (version === 1) || (version === 2) ? dataView.getUint16(offset) & 0x0f : undefined;
        offset += sizes.item.constructionMethod;
        item.dataReferenceIndex = dataView.getUint16(offset);
        offset += sizes.item.dataReferenceIndex;
        item.baseOffset = getVariableSizedValue(dataView, offset, sizes.item.baseOffset);
        offset += sizes.item.baseOffset;
        item.extentCount = dataView.getUint16(offset);
        offset += sizes.item.extentCount;
        for (let j = 0; j < item.extentCount; j++) {
            const extent = {};

            extent.extentIndex = getExtentIndex(dataView, version, offset, indexSize);
            offset += sizes.item.extent.extentIndex;
            extent.extentOffset = getVariableSizedValue(dataView, offset, offsetSize);
            offset += sizes.item.extent.extentOffset;
            extent.extentLength = getVariableSizedValue(dataView, offset, lengthSize);
            offset += sizes.item.extent.extentLength;

            item.extents.push(extent);
        }

        items.push(item);
    }

    return items;
}

function getItemId(dataView, offset, version) {
    if (version < 2) {
        return dataView.getUint16(offset);
    } else if (version === 2) {
        return dataView.getUint32(offset);
    }
    return undefined;
}

function getExtentIndex(dataView, version, offset, indexSize) {
    if ((version === 1 || version === 2) && indexSize > 0) {
        return getVariableSizedValue(dataView, offset, indexSize);
    }
    return undefined;
}

function getVariableSizedValue(dataView, offset, size) {
    if (size === 4) {
        return dataView.getUint32(offset);
    }
    if (size === 8) {
        // eslint-disable-next-line no-console
        console.warn('This file uses an 8-bit offset which is currently not supported by ExifReader. Contact the maintainer to get it fixed.');
        return (0,_image_header_iso_bmff_utils_js__WEBPACK_IMPORTED_MODULE_0__.get64BitValue)(dataView, offset);
    }
    return 0;
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-iso-bmff-utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-iso-bmff-utils.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get64BitValue: function() { return /* binding */ get64BitValue; }
/* harmony export */ });
function get64BitValue(dataView, offset) {
    // It's a bit tricky to handle 64 bit numbers in JavaScript. Let's
    // wait until there are real-world examples where it is necessary.
    return dataView.getUint32(offset + 4);
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-iso-bmff.js":
/*!**************************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-iso-bmff.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ITEM_INFO_TYPE_EXIF: function() { return /* binding */ ITEM_INFO_TYPE_EXIF; },
/* harmony export */   ITEM_INFO_TYPE_MIME: function() { return /* binding */ ITEM_INFO_TYPE_MIME; },
/* harmony export */   findOffsets: function() { return /* binding */ findOffsets; },
/* harmony export */   parseBox: function() { return /* binding */ parseBox; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _image_header_iso_bmff_iloc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-header-iso-bmff-iloc.js */ "./node_modules/exifreader/src/image-header-iso-bmff-iloc.js");


// import {get64BitValue} from './image-header-iso-bmff-utils.js';


// HEIC and AVIF files are based on the ISO-BMFF format. This file format is
// built up by boxes. There are boxes and full boxes. All box types have a
// length (4 or 8 bytes) and a type (4 bytes). Full boxes also have a version
// (1 byte) and flags (3 bytes). The boxes can be nested. Each box type has its
// own structure that can be seen in the specification.
//
// For metadata we are interested in the meta box. The meta box contains sub
// boxes. The sub box type iinf has info about which types of metadata are
// present in the file. The item ID we get from there we then look up in the
// iloc sub box to get the offset to the real location of the metadata.
//
// The ICC profiles is a bit more nested. We have to look in
// meta > iprp > ipco > colr, and then the whole profile is stored there.

// These are actually 32-bit strings, not random IDs, e.g. "ftyp" and "meta".
const TYPE_FTYP = 0x66747970;
const TYPE_IPRP = 0x69707270;
const TYPE_META = 0x6d657461;
const TYPE_ILOC = 0x696c6f63;
const TYPE_IINF = 0x69696e66;
const TYPE_INFE = 0x696e6665;
const TYPE_IPCO = 0x6970636f;
const TYPE_COLR = 0x636f6c72;

// const EXTENSION_TYPE_FDEL = 0x6664656c;

const ITEM_INFO_TYPE_EXIF = 0x45786966;
const ITEM_INFO_TYPE_MIME = 0x6d696d65;
const ITEM_INFO_TYPE_URI = 0x75726920;

/**
 * Parses a ISO-BMFF box from the provided data view starting at the given offset.
 *
 * @param {DataView} dataView - The DataView to parse.
 * @param {number} offset - The offset at which to start parsing.
 * @returns {Object} The parsed box.
 */
function parseBox(dataView, offset) {
    const BOX_TYPE_OFFSET = 4;
    const BOX_MIN_LENGTH = 8;
    const VERSION_SIZE = 1;

    const {length, contentOffset} = getBoxLength(dataView, offset);
    if (length < BOX_MIN_LENGTH) {
        return undefined;
    }

    const type = dataView.getUint32(offset + BOX_TYPE_OFFSET);

    if (type === TYPE_FTYP) {
        return parseFileTypeBox(dataView, contentOffset, length);
    }
    if (type === TYPE_IPRP) {
        return parseItemPropertiesBox(dataView, offset, contentOffset, length);
    }
    if (type === TYPE_IPCO) {
        return parseItemPropertyContainerBox(dataView, offset, contentOffset, length);
    }
    if (type === TYPE_COLR) {
        return parseColorInformationBox(dataView, contentOffset, length);
    }

    // The following are full boxes, also containing version and flags.
    const version = dataView.getUint8(contentOffset);

    if (type === TYPE_META) {
        return parseMetadataBox(dataView, offset, contentOffset + VERSION_SIZE, length);
    }
    if (type === TYPE_ILOC) {
        return (0,_image_header_iso_bmff_iloc_js__WEBPACK_IMPORTED_MODULE_2__.parseItemLocationBox)(dataView, version, contentOffset + VERSION_SIZE, length);
    }
    if (type === TYPE_IINF) {
        return parseItemInformationBox(dataView, offset, version, contentOffset + VERSION_SIZE, length);
    }
    if (type === TYPE_INFE) {
        return parseItemInformationEntryBox(dataView, offset, version, contentOffset + VERSION_SIZE, length);
    }

    return {
        // type: getStringFromDataView(dataView, offset + BOX_TYPE_OFFSET, 4),
        type: undefined,
        length
    };
}

/**
 * @typedef {Object} BoxLength
 * @property {number} length The length of the box including length and type.
 * @property {number} contentOffset
 */

/**
 * @param {DataView} dataView
 * @param {number} offset
 * @returns {BoxLength}
 */
function getBoxLength(dataView, offset) {
    const BOX_LENGTH_SIZE = 4;
    const BOX_TYPE_SIZE = 4;
    const BOX_EXTENDED_SIZE = 8;
    const BOX_EXTENDED_SIZE_LOW_OFFSET = 12;

    const boxLength = dataView.getUint32(offset);
    if (extendsToEndOfFile(boxLength)) {
        return {
            length: dataView.byteLength - offset,
            contentOffset: offset + BOX_LENGTH_SIZE + BOX_TYPE_SIZE,
        };
    }
    if (hasExtendedSize(boxLength)) {
        if (hasEmptyHighBits(dataView, offset)) {
            // It's a bit tricky to handle 64 bit numbers in JavaScript. Let's
            // wait until there are real-world examples where it is necessary.
            return {
                length: dataView.getUint32(offset + BOX_EXTENDED_SIZE_LOW_OFFSET),
                contentOffset: offset + BOX_LENGTH_SIZE + BOX_TYPE_SIZE + BOX_EXTENDED_SIZE,
            };
        }
    }

    return {
        length: boxLength,
        contentOffset: offset + BOX_LENGTH_SIZE + BOX_TYPE_SIZE,
    };
}

function extendsToEndOfFile(boxLength) {
    return boxLength === 0;
}

function hasExtendedSize(boxLength) {
    return boxLength === 1;
}

function hasEmptyHighBits(dataView, offset) {
    const BOX_EXTENDED_SIZE_OFFSET = 8;
    return dataView.getUint32(offset + BOX_EXTENDED_SIZE_OFFSET) === 0;
}

/**
 * @typedef {Object} Offsets
 * @property {number} tiffHeaderOffset
 * @property {Array<Object>} xmpChunks
 * @property {Array<Object>} iccChunks
 * @property {boolean} hasAppMarkers
 */

/**
 * Finds the offsets of ISO-BMFF-structued data in the provided data view.
 *
 * @param {DataView} dataView - The data view to find offsets in.
 * @returns {Offsets} An object containing the offsets of the TIFF header, XMP chunks, ICC chunks, and a boolean indicating if any of these exist.
 */
function findOffsets(dataView) {
    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_EXIF || _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_XMP || _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_ICC) {
        const offsets = {};
        const metaBox = findMetaBox(dataView);

        if (!metaBox) {
            return {hasAppMarkers: false};
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_EXIF) {
            offsets.tiffHeaderOffset = findExifOffset(dataView, metaBox);
        }
        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_XMP) {
            offsets.xmpChunks = findXmpChunks(metaBox);
        }
        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_ICC) {
            offsets.iccChunks = findIccChunks(metaBox);
        }
        offsets.hasAppMarkers = (offsets.tiffHeaderOffset !== undefined) || (offsets.xmpChunks !== undefined) || (offsets.iccChunks !== undefined);
        return offsets;
    }

    return {};
}

function findMetaBox(dataView) {
    const BOX_LENGTH_SIZE = 4;
    const BOX_TYPE_SIZE = 4;

    let offset = 0;

    while (offset + BOX_LENGTH_SIZE + BOX_TYPE_SIZE <= dataView.byteLength) {
        const box = parseBox(dataView, offset);

        if (box === undefined) {
            break;
        }

        if (box.type === 'meta') {
            return box;
        }

        offset += box.length;
    }

    return undefined;
}

function findExifOffset(dataView, metaBox) {
    try {
        const exifItemId = findIinfExifItemId(metaBox).itemId;
        const ilocItem = findIlocItem(metaBox, exifItemId);
        const exifOffset = ilocItem.baseOffset + ilocItem.extents[0].extentOffset;
        return getTiffHeaderOffset(dataView, exifOffset);
    } catch (error) {
        return undefined;
    }
}

function findIinfExifItemId(metaBox) {
    return metaBox.subBoxes.find((box) => box.type === 'iinf').itemInfos.find((itemInfo) => itemInfo.itemType === ITEM_INFO_TYPE_EXIF);
}

function findIlocItem(metaBox, itemId) {
    return metaBox.subBoxes.find((box) => box.type === 'iloc').items.find((item) => item.itemId === itemId);
}

function getTiffHeaderOffset(dataView, exifOffset) {
    // ISO-BMFF formatted files store the Exif data as an "Exif block" where the
    // first 32 bits is the TIFF header offset.
    const TIFF_HEADER_OFFSET_SIZE = 4;
    return exifOffset + TIFF_HEADER_OFFSET_SIZE + dataView.getUint32(exifOffset);
}

function findXmpChunks(metaBox) {
    try {
        const xmpItemId = findIinfXmpItemId(metaBox).itemId;
        const ilocItem = findIlocItem(metaBox, xmpItemId);
        const ilocItemExtent = findIlocItem(metaBox, xmpItemId).extents[0];
        return [
            {
                dataOffset: ilocItem.baseOffset + ilocItemExtent.extentOffset,
                length: ilocItemExtent.extentLength,
            }
        ];
    } catch (error) {
        return undefined;
    }
}

function findIinfXmpItemId(metaBox) {
    return metaBox.subBoxes.find((box) => box.type === 'iinf')
        .itemInfos.find((itemInfo) => itemInfo.itemType === ITEM_INFO_TYPE_MIME && itemInfo.contentType === 'application/rdf+xml');
}

function findIccChunks(metaBox) {
    // This finds the first ICC chunk, but there could be one for each image
    // that is embedded in the file. If it turns out we need to match the ICC
    // chunk to a specific image, we need to check the "ipma" in addition to the
    // "ipco" (currently we only extract the "ipco" so more code would be
    // needed).
    try {
        const icc = metaBox.subBoxes.find((box) => box.type === 'iprp')
            .subBoxes.find((box) => box.type === 'ipco')
            .properties.find((box) => box.type === 'colr')
            .icc;
        if (icc) {
            return [icc];
        }
    } catch (error) {
        // Let it pass through.
    }
    return undefined;
}

function parseFileTypeBox(dataView, contentOffset, boxLength) {
    const MAJOR_BRAND_SIZE = 4;
    const majorBrand = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getStringFromDataView)(dataView, contentOffset, MAJOR_BRAND_SIZE);

    return {
        type: 'ftyp',
        majorBrand,
        length: boxLength
    };
}

function parseItemPropertiesBox(dataView, startOffset, contentOffset, length) {
    return {
        type: 'iprp',
        subBoxes: parseSubBoxes(dataView, contentOffset, length - (contentOffset - startOffset)),
        length,
    };
}

function parseItemPropertyContainerBox(dataView, startOffset, contentOffset, length) {
    return {
        type: 'ipco',
        properties: parseSubBoxes(dataView, contentOffset, length - (contentOffset - startOffset)),
        length,
    };
}

function parseColorInformationBox(dataView, contentOffset, length) {
    return {
        type: 'colr',
        icc: parseIcc(dataView, contentOffset),
        length,
    };
}

function parseIcc(dataView, contentOffset) {
    const COLOR_TYPE_SIZE = 4;

    const colorType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getStringFromDataView)(dataView, contentOffset, COLOR_TYPE_SIZE);
    if (colorType !== 'prof' && colorType !== 'rICC') {
        // Support for nclx would require some restructuring for ICC handling.
        // Probably do it as a separate feature instead of combining with ICC.
        // Exiftool groups it under QuickTime. The test file test.avif has nclx.
        return undefined;
    }

    return {
        offset: contentOffset + COLOR_TYPE_SIZE,
        length: dataView.getUint32(contentOffset + COLOR_TYPE_SIZE),
        chunkNumber: 1,
        chunksTotal: 1
    };
}

function parseMetadataBox(dataView, startOffset, contentOffset, length) {
    const FLAGS_SIZE = 3;

    return {
        type: 'meta',
        subBoxes: parseSubBoxes(dataView, contentOffset + FLAGS_SIZE, length - (contentOffset + FLAGS_SIZE - startOffset)),
        length
    };
}

/**
 * @param {DataView} dataView
 * @param {number} offset The offset to start parsing from.
 * @param {number} length The length of all sub boxes combined.
 * @return {Array<Object>}
 */
function parseSubBoxes(dataView, offset, length) {
    const ACCEPTED_ITEM_INFO_TYPES = [
        ITEM_INFO_TYPE_EXIF,
        ITEM_INFO_TYPE_MIME,
    ];

    const subBoxes = [];
    let currentOffset = offset;
    while (currentOffset < offset + length) {
        const box = parseBox(dataView, currentOffset);
        if (box === undefined) {
            break;
        }
        if (box.type !== undefined && (box.itemType === undefined || ACCEPTED_ITEM_INFO_TYPES.indexOf(box.itemType) !== -1)) {
            subBoxes.push(box);
        }
        currentOffset += box.length;
    }
    return subBoxes;
}

function parseItemInformationBox(dataView, startOffset, version, contentOffset, length) {
    const {offsets} = getItemInformationBoxOffsetsAndSizes(version, contentOffset);

    return {
        type: 'iinf',
        itemInfos: parseSubBoxes(dataView, offsets.itemInfos, length - (offsets.itemInfos - startOffset)),
        length
    };
}

function getItemInformationBoxOffsetsAndSizes(version, contentOffset) {
    const FLAGS_SIZE = 3;

    const offsets = {entryCount: contentOffset + FLAGS_SIZE};
    const sizes = {};

    if (version === 0) {
        sizes.entryCount = 2;
    } else {
        sizes.entryCount = 4;
    }

    offsets.itemInfos = offsets.entryCount + sizes.entryCount;

    return {offsets};
}

function parseItemInformationEntryBox(dataView, startOffset, version, contentOffset, length) {
    const FLAGS_SIZE = 3;

    contentOffset += FLAGS_SIZE;
    const entry = {type: 'infe', length};

    if (version === 0 || version === 1) {
        entry.itemId = dataView.getUint16(contentOffset);
        contentOffset += 2;
        entry.itemProtectionIndex = dataView.getUint16(contentOffset);
        contentOffset += 2;
        entry.itemName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNullTerminatedStringFromDataView)(dataView, contentOffset);
        contentOffset += entry.itemName.length + 1;
        // entry.contentType = getNullTerminatedStringFromDataView(dataView, offset);
        // offset += entry.contentType.length + 1;
        // Since contentEncoding is optional we need to check the offset against length here.
        // entry.contentEncoding = getNullTerminatedStringFromDataView(dataView, offset);
        // offset += entry.contentEncoding.length + 1;
    }
    // The following code should be correct but we currently don't need it.
    // if (version === 1) {
    //     // Everything here is optional, check the offset against length.
    //     entry.extensionType = dataView.getUint32(contentOffset);
    //     contentOffset += 4;
    //     if (entry.extensionType === EXTENSION_TYPE_FDEL) {
    //         entry.contentLocation = getNullTerminatedStringFromDataView(dataView, contentOffset);
    //         contentOffset += entry.contentLocation.length + 1;
    //         entry.contentMd5 = getNullTerminatedStringFromDataView(dataView, contentOffset);
    //         contentOffset += entry.contentMd5.length + 1;
    //         entry.contentLength = get64BitValue(dataView, contentOffset);
    //         contentOffset += 8;
    //         entry.transferLength = get64BitValue(dataView, contentOffset);
    //         contentOffset += 8;
    //         entry.entryCount = dataView.getUint8(contentOffset);
    //         contentOffset += 1;
    //         entry.entries = [];
    //         for (let i = 0; i < entry.entryCount; i++) {
    //             entry.entries.push({groupId: dataView.getUint32(contentOffset)});
    //             contentOffset += 4;
    //         }
    //     }
    // }
    if (version >= 2) {
        if (version === 2) {
            entry.itemId = dataView.getUint16(contentOffset);
            contentOffset += 2;
        } else if (version === 3) {
            entry.itemId = dataView.getUint32(contentOffset);
            contentOffset += 4;
        }
        entry.itemProtectionIndex = dataView.getUint16(contentOffset);
        contentOffset += 2;
        // entry.itemTypeAscii = getStringFromDataView(dataView, offset, 4); // For testing.
        entry.itemType = dataView.getUint32(contentOffset);
        contentOffset += 4;
        entry.itemName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNullTerminatedStringFromDataView)(dataView, contentOffset);
        contentOffset += entry.itemName.length + 1;
        if (entry.itemType === ITEM_INFO_TYPE_MIME) {
            entry.contentType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNullTerminatedStringFromDataView)(dataView, contentOffset);
            contentOffset += entry.contentType.length + 1;
            if (startOffset + length > contentOffset) {
                entry.contentEncoding = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNullTerminatedStringFromDataView)(dataView, contentOffset);
                contentOffset += entry.contentEncoding.length + 1;
            }
        } else if (entry.itemType === ITEM_INFO_TYPE_URI) {
            entry.itemUri = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNullTerminatedStringFromDataView)(dataView, contentOffset);
            contentOffset += entry.itemUri.length + 1;
        }
    }
    return entry;
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-jpeg.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-jpeg.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isJpegFile,
    findJpegOffsets
});

const MIN_JPEG_DATA_BUFFER_LENGTH = 2;
const JPEG_ID = 0xffd8;
const JPEG_ID_SIZE = 2;
const APP_ID_OFFSET = 4;
const APP_MARKER_SIZE = 2;
const JFIF_DATA_OFFSET = 2; // From start of APP0 marker.
const TIFF_HEADER_OFFSET = 10; // From start of APP1 marker.
const IPTC_DATA_OFFSET = 18; // From start of APP13 marker.
const XMP_DATA_OFFSET = 33; // From start of APP1 marker.
const XMP_EXTENDED_DATA_OFFSET = 79; // From start of APP1 marker including GUID, total length, and offset.
const APP2_ICC_DATA_OFFSET = 18; // From start of APP2 marker including marker and chunk/chunk total numbers.
const MPF_DATA_OFFSET = 8;

const APP2_ICC_IDENTIFIER = 'ICC_PROFILE\0';
const ICC_CHUNK_NUMBER_OFFSET = APP_ID_OFFSET + APP2_ICC_IDENTIFIER.length;
const ICC_TOTAL_CHUNKS_OFFSET = ICC_CHUNK_NUMBER_OFFSET + 1;

const APP2_MPF_IDENTIFIER = 'MPF\0';

const SOF0_MARKER = 0xffc0;
const SOF2_MARKER = 0xffc2;
const DHT_MARKER = 0xffc4;
const DQT_MARKER = 0xffdb;
const DRI_MARKER = 0xffdd;
const SOS_MARKER = 0xffda;

const APP0_MARKER = 0xffe0;
const APP1_MARKER = 0xffe1;
const APP2_MARKER = 0xffe2;
const APP13_MARKER = 0xffed;
const APP15_MARKER = 0xffef;
const COMMENT_MARKER = 0xfffe;

// Any number of fill bytes can be placed before an app marker. It's actually the first 0xff that is the
// fill byte and the next 0xff is either another fill byte or the first half of the next app marker.
const FILL_BYTE = 0xffff;

const APP0_JFIF_IDENTIFIER = 'JFIF';
const APP1_EXIF_IDENTIFIER = 'Exif';
const APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/\x00';
const APP1_XMP_EXTENDED_IDENTIFIER = 'http://ns.adobe.com/xmp/extension/\x00';
const APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';

function isJpegFile(dataView) {
    return !!dataView && (dataView.byteLength >= MIN_JPEG_DATA_BUFFER_LENGTH) && (dataView.getUint16(0) === JPEG_ID);
}

function findJpegOffsets(dataView) {
    let appMarkerPosition = JPEG_ID_SIZE;
    let fieldLength;
    let sof0DataOffset;
    let sof2DataOffset;
    let jfifDataOffset;
    let tiffHeaderOffset;
    let iptcDataOffset;
    let xmpChunks;
    let iccChunks;
    let mpfDataOffset;

    while (appMarkerPosition + APP_ID_OFFSET + 5 <= dataView.byteLength) {
        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_FILE && isSOF0Marker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            sof0DataOffset = appMarkerPosition + APP_MARKER_SIZE;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_FILE && isSOF2Marker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            sof2DataOffset = appMarkerPosition + APP_MARKER_SIZE;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_JFIF && isApp0JfifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            jfifDataOffset = appMarkerPosition + JFIF_DATA_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && isApp1ExifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            tiffHeaderOffset = appMarkerPosition + TIFF_HEADER_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isApp1XmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
                xmpChunks = [];
            }
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            xmpChunks.push(getXmpChunkDetails(appMarkerPosition, fieldLength));
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isApp1ExtendedXmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
                xmpChunks = [];
            }
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            xmpChunks.push(getExtendedXmpChunkDetails(appMarkerPosition, fieldLength));
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_IPTC && isApp13PhotoshopMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            iptcDataOffset = appMarkerPosition + IPTC_DATA_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && isApp2ICCMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            const iccDataOffset = appMarkerPosition + APP2_ICC_DATA_OFFSET;
            const iccDataLength = fieldLength - (APP2_ICC_DATA_OFFSET - APP_MARKER_SIZE);

            const iccChunkNumber = dataView.getUint8(appMarkerPosition + ICC_CHUNK_NUMBER_OFFSET);
            const iccChunksTotal = dataView.getUint8(appMarkerPosition + ICC_TOTAL_CHUNKS_OFFSET);
            if (!iccChunks) {
                iccChunks = [];
            }
            iccChunks.push({offset: iccDataOffset, length: iccDataLength, chunkNumber: iccChunkNumber, chunksTotal: iccChunksTotal});
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_MPF && isApp2MPFMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            mpfDataOffset = appMarkerPosition + MPF_DATA_OFFSET;
        } else if (isAppMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
        } else if (isFillByte(dataView, appMarkerPosition)) {
            appMarkerPosition++;
            continue;
        } else {
            break;
        }
        appMarkerPosition += APP_MARKER_SIZE + fieldLength;
    }

    return {
        hasAppMarkers: appMarkerPosition > JPEG_ID_SIZE,
        fileDataOffset: sof0DataOffset || sof2DataOffset,
        jfifDataOffset,
        tiffHeaderOffset,
        iptcDataOffset,
        xmpChunks,
        iccChunks,
        mpfDataOffset
    };
}

function isSOF0Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === SOF0_MARKER);
}

function isSOF2Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === SOF2_MARKER);
}

function isApp2ICCMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP2_ICC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP2_MARKER)
        && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_ICC_IDENTIFIER);
}

function isApp2MPFMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP2_MPF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP2_MARKER)
        && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_MPF_IDENTIFIER);
}

function isApp0JfifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP0_JFIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP0_MARKER)
        && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP0_JFIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isApp1ExifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_EXIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isApp1XmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && isXmpIdentifier(dataView, appMarkerPosition);
}

function isXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_IDENTIFIER.length;
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER;
}

function isApp1ExtendedXmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && isExtendedXmpIdentifier(dataView, appMarkerPosition);
}

function isExtendedXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_EXTENDED_IDENTIFIER.length;
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_EXTENDED_IDENTIFIER;
}

function getXmpChunkDetails(appMarkerPosition, fieldLength) {
    return {
        dataOffset: appMarkerPosition + XMP_DATA_OFFSET,
        length: fieldLength - (XMP_DATA_OFFSET - APP_MARKER_SIZE)
    };
}

function getExtendedXmpChunkDetails(appMarkerPosition, fieldLength) {
    return {
        dataOffset: appMarkerPosition + XMP_EXTENDED_DATA_OFFSET,
        length: fieldLength - (XMP_EXTENDED_DATA_OFFSET - APP_MARKER_SIZE)
    };
}

function isApp13PhotoshopMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP13_IPTC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP13_MARKER)
        && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isAppMarker(dataView, appMarkerPosition) {
    const appMarker = dataView.getUint16(appMarkerPosition);
    return ((appMarker >= APP0_MARKER) && (appMarker <= APP15_MARKER))
        || (appMarker === COMMENT_MARKER)
        || (appMarker === SOF0_MARKER)
        || (appMarker === SOF2_MARKER)
        || (appMarker === DHT_MARKER)
        || (appMarker === DQT_MARKER)
        || (appMarker === DRI_MARKER)
        || (appMarker === SOS_MARKER);
}

function isFillByte(dataView, appMarkerPosition) {
    return dataView.getUint16(appMarkerPosition) === FILL_BYTE;
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-png.js":
/*!*********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-png.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PNG_CHUNK_DATA_OFFSET: function() { return /* binding */ PNG_CHUNK_DATA_OFFSET; },
/* harmony export */   PNG_CHUNK_LENGTH_OFFSET: function() { return /* binding */ PNG_CHUNK_LENGTH_OFFSET; },
/* harmony export */   PNG_CHUNK_TYPE_OFFSET: function() { return /* binding */ PNG_CHUNK_TYPE_OFFSET; },
/* harmony export */   PNG_CHUNK_TYPE_SIZE: function() { return /* binding */ PNG_CHUNK_TYPE_SIZE; },
/* harmony export */   TYPE_EXIF: function() { return /* binding */ TYPE_EXIF; },
/* harmony export */   TYPE_ICCP: function() { return /* binding */ TYPE_ICCP; },
/* harmony export */   TYPE_ITXT: function() { return /* binding */ TYPE_ITXT; },
/* harmony export */   TYPE_PHYS: function() { return /* binding */ TYPE_PHYS; },
/* harmony export */   TYPE_TEXT: function() { return /* binding */ TYPE_TEXT; },
/* harmony export */   TYPE_TIME: function() { return /* binding */ TYPE_TIME; },
/* harmony export */   TYPE_ZTXT: function() { return /* binding */ TYPE_ZTXT; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Specification: http://www.libpng.org/pub/png/spec/1.2/




/* harmony default export */ __webpack_exports__["default"] = ({
    isPngFile,
    findPngOffsets
});

const PNG_ID = '\x89\x50\x4e\x47\x0d\x0a\x1a\x0a';
const PNG_CHUNK_LENGTH_SIZE = 4;
const PNG_CHUNK_TYPE_SIZE = 4;
const PNG_CHUNK_LENGTH_OFFSET = 0;
const PNG_CHUNK_TYPE_OFFSET = PNG_CHUNK_LENGTH_SIZE;
const PNG_CHUNK_DATA_OFFSET = PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE;
const PNG_XMP_PREFIX = 'XML:com.adobe.xmp\x00';
const TYPE_TEXT = 'tEXt';
const TYPE_ITXT = 'iTXt';
const TYPE_ZTXT = 'zTXt';
const TYPE_PHYS = 'pHYs';
const TYPE_TIME = 'tIME';
const TYPE_EXIF = 'eXIf';
const TYPE_ICCP = 'iCCP';

function isPngFile(dataView) {
    return !!dataView && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, 0, PNG_ID.length) === PNG_ID;
}

function findPngOffsets(dataView, async) {
    const PNG_CRC_SIZE = 4;

    const offsets = {
        hasAppMarkers: false
    };

    let offset = PNG_ID.length;

    while (offset + PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE <= dataView.byteLength) {
        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_PNG_FILE && isPngImageHeaderChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.pngHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isPngXmpChunk(dataView, offset)) {
            const dataOffset = getPngXmpDataOffset(dataView, offset);
            if (dataOffset !== undefined) {
                offsets.hasAppMarkers = true;
                offsets.xmpChunks = [{
                    dataOffset,
                    length: dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET) - (dataOffset - (offset + PNG_CHUNK_DATA_OFFSET))
                }];
            }
        } else if (isPngTextChunk(dataView, offset, async)) {
            offsets.hasAppMarkers = true;
            const chunkType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE);
            if (!offsets.pngTextChunks) {
                offsets.pngTextChunks = [];
            }
            offsets.pngTextChunks.push({
                length: dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET),
                type: chunkType,
                offset: offset + PNG_CHUNK_DATA_OFFSET
            });
        } else if (isPngExifChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.tiffHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && async && isPngIccpChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            const chunkDataLength = dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET);
            const iccHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
            const {profileName, compressionMethod, compressedProfileOffset} = parseIccHeader(dataView, iccHeaderOffset);
            if (!offsets.iccChunks) {
                offsets.iccChunks = [];
            }
            offsets.iccChunks.push({
                offset: compressedProfileOffset,
                length: chunkDataLength - (compressedProfileOffset - iccHeaderOffset),
                chunkNumber: 1,
                chunksTotal: 1,
                profileName,
                compressionMethod
            });
        } else if (isPngChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            if (!offsets.pngChunkOffsets) {
                offsets.pngChunkOffsets = [];
            }
            offsets.pngChunkOffsets.push(offset + PNG_CHUNK_LENGTH_OFFSET);
        }

        offset += dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET)
            + PNG_CHUNK_LENGTH_SIZE
            + PNG_CHUNK_TYPE_SIZE
            + PNG_CRC_SIZE;
    }

    return offsets;
}

function isPngImageHeaderChunk(dataView, offset) {
    const PNG_CHUNK_TYPE_IMAGE_HEADER = 'IHDR';
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_IMAGE_HEADER;
}

function isPngXmpChunk(dataView, offset) {
    return ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === TYPE_ITXT)
        && ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_DATA_OFFSET, PNG_XMP_PREFIX.length) === PNG_XMP_PREFIX);
}

function isPngTextChunk(dataView, offset, async) {
    const chunkType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE);
    return chunkType === TYPE_TEXT || chunkType === TYPE_ITXT || (chunkType === TYPE_ZTXT && async);
}

function isPngExifChunk(dataView, offset) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === TYPE_EXIF;
}

function isPngIccpChunk(dataView, offset) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === TYPE_ICCP;
}

function isPngChunk(dataView, offset) {
    const SUPPORTED_PNG_CHUNK_TYPES = [TYPE_PHYS, TYPE_TIME];
    const chunkType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE);
    return SUPPORTED_PNG_CHUNK_TYPES.includes(chunkType);
}

function getPngXmpDataOffset(dataView, offset) {
    const COMPRESSION_FLAG_SIZE = 1;
    const COMPRESSION_METHOD_SIZE = 1;

    offset += PNG_CHUNK_DATA_OFFSET + PNG_XMP_PREFIX.length + COMPRESSION_FLAG_SIZE + COMPRESSION_METHOD_SIZE;

    let numberOfNullSeparators = 0;
    while (numberOfNullSeparators < 2 && offset < dataView.byteLength) {
        if (dataView.getUint8(offset) === 0x00) {
            numberOfNullSeparators++;
        }
        offset++;
    }
    if (numberOfNullSeparators < 2) {
        return undefined;
    }
    return offset;
}

function parseIccHeader(dataView, offset) {
    const NULL_SEPARATOR_SIZE = 1;
    const COMPRESSION_METHOD_SIZE = 1;

    const profileName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getNullTerminatedStringFromDataView)(dataView, offset);
    offset += profileName.length + NULL_SEPARATOR_SIZE;

    const compressionMethod = dataView.getUint8(offset);
    offset += COMPRESSION_METHOD_SIZE;

    return {
        profileName,
        compressionMethod,
        compressedProfileOffset: offset
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-tiff.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-tiff.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-order.js */ "./node_modules/exifreader/src/byte-order.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isTiffFile,
    findTiffOffsets
});

function isTiffFile(dataView) {
    const MIN_TIFF_DATA_BUFFER_LENGTH = 4;

    return !!dataView && (dataView.byteLength >= MIN_TIFF_DATA_BUFFER_LENGTH) && hasTiffMarker(dataView);
}

function hasTiffMarker(dataView) {
    const TIFF_ID = 0x2a;
    const TIFF_ID_OFFSET = 2;

    const littleEndian = dataView.getUint16(0) === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN;
    return dataView.getUint16(TIFF_ID_OFFSET, littleEndian) === TIFF_ID;
}

function findTiffOffsets() {
    const TIFF_FILE_HEADER_OFFSET = 0;

    if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF) {
        return {
            hasAppMarkers: true,
            tiffHeaderOffset: TIFF_FILE_HEADER_OFFSET
        };
    }
    return {};
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header-webp.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/image-header-webp.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isWebpFile,
    findOffsets
});

function isWebpFile(dataView) {
    const RIFF_ID_OFFSET = 0;
    const RIFF_ID = 'RIFF';
    const WEBP_MARKER_OFFSET = 8;
    const WEBP_MARKER = 'WEBP';

    return !!dataView && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, RIFF_ID_OFFSET, RIFF_ID.length) === RIFF_ID
        && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, WEBP_MARKER_OFFSET, WEBP_MARKER.length) === WEBP_MARKER;
}

function findOffsets(dataView) {
    const SUB_CHUNK_START_OFFSET = 12;
    const CHUNK_SIZE_OFFSET = 4;
    const EXIF_IDENTIFIER = 'Exif\x00\x00';
    const CHUNK_HEADER_SIZE = 8;

    let offset = SUB_CHUNK_START_OFFSET;
    let hasAppMarkers = false;
    let tiffHeaderOffset;
    let xmpChunks;
    let iccChunks;
    let vp8xChunkOffset;

    while (offset + CHUNK_HEADER_SIZE < dataView.byteLength) {
        const chunkId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, 4);
        const chunkSize = dataView.getUint32(offset + CHUNK_SIZE_OFFSET, true);

        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && (chunkId === 'EXIF')) {
            hasAppMarkers = true;
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset + CHUNK_HEADER_SIZE, EXIF_IDENTIFIER.length) === EXIF_IDENTIFIER) {
                tiffHeaderOffset = offset + CHUNK_HEADER_SIZE + EXIF_IDENTIFIER.length;
            } else {
                tiffHeaderOffset = offset + CHUNK_HEADER_SIZE;
            }
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && (chunkId === 'XMP ')) {
            hasAppMarkers = true;
            xmpChunks = [{
                dataOffset: offset + CHUNK_HEADER_SIZE,
                length: chunkSize
            }];
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && (chunkId === 'ICCP')) {
            hasAppMarkers = true;
            iccChunks = [{
                offset: offset + CHUNK_HEADER_SIZE,
                length: chunkSize,
                chunkNumber: 1,
                chunksTotal: 1
            }];
        } else if (chunkId === 'VP8X') {
            hasAppMarkers = true;
            vp8xChunkOffset = offset + CHUNK_HEADER_SIZE;
        }

        offset += CHUNK_HEADER_SIZE + (chunkSize % 2 === 0 ? chunkSize : chunkSize + 1);
    }

    return {
        hasAppMarkers,
        tiffHeaderOffset,
        xmpChunks,
        iccChunks,
        vp8xChunkOffset
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/image-header.js":
/*!*****************************************************!*\
  !*** ./node_modules/exifreader/src/image-header.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* harmony import */ var _image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-header-tiff.js */ "./node_modules/exifreader/src/image-header-tiff.js");
/* harmony import */ var _image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-header-jpeg.js */ "./node_modules/exifreader/src/image-header-jpeg.js");
/* harmony import */ var _image_header_png_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-header-png.js */ "./node_modules/exifreader/src/image-header-png.js");
/* harmony import */ var _image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-header-heic.js */ "./node_modules/exifreader/src/image-header-heic.js");
/* harmony import */ var _image_header_avif_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-header-avif.js */ "./node_modules/exifreader/src/image-header-avif.js");
/* harmony import */ var _image_header_webp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-header-webp.js */ "./node_modules/exifreader/src/image-header-webp.js");
/* harmony import */ var _image_header_gif_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-header-gif.js */ "./node_modules/exifreader/src/image-header-gif.js");
/* harmony import */ var _xml_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xml.js */ "./node_modules/exifreader/src/xml.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */












/* harmony default export */ __webpack_exports__["default"] = ({
    parseAppMarkers
});

function parseAppMarkers(dataView, async) {
    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_TIFF && _image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__["default"].isTiffFile(dataView)) {
        return addFileType(_image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__["default"].findTiffOffsets(), 'tiff', 'TIFF');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_JPEG && _image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__["default"].isJpegFile(dataView)) {
        return addFileType(_image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__["default"].findJpegOffsets(dataView), 'jpeg', 'JPEG');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_PNG && _image_header_png_js__WEBPACK_IMPORTED_MODULE_3__["default"].isPngFile(dataView)) {
        return addFileType(_image_header_png_js__WEBPACK_IMPORTED_MODULE_3__["default"].findPngOffsets(dataView, async), 'png', 'PNG');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_HEIC && _image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__["default"].isHeicFile(dataView)) {
        return addFileType(_image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__["default"].findHeicOffsets(dataView), 'heic', 'HEIC');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_AVIF && _image_header_avif_js__WEBPACK_IMPORTED_MODULE_5__["default"].isAvifFile(dataView)) {
        return addFileType(_image_header_avif_js__WEBPACK_IMPORTED_MODULE_5__["default"].findAvifOffsets(dataView), 'avif', 'AVIF');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_WEBP && _image_header_webp_js__WEBPACK_IMPORTED_MODULE_6__["default"].isWebpFile(dataView)) {
        return addFileType(_image_header_webp_js__WEBPACK_IMPORTED_MODULE_6__["default"].findOffsets(dataView), 'webp', 'WebP');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_GIF && _image_header_gif_js__WEBPACK_IMPORTED_MODULE_7__["default"].isGifFile(dataView)) {
        return addFileType(_image_header_gif_js__WEBPACK_IMPORTED_MODULE_7__["default"].findOffsets(dataView), 'gif', 'GIF');
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_XMP && _xml_js__WEBPACK_IMPORTED_MODULE_8__["default"].isXMLFile(dataView)) {
        return addFileType(_xml_js__WEBPACK_IMPORTED_MODULE_8__["default"].findOffsets(dataView), 'xml', 'XML');
    }

    throw new Error('Invalid image format');
}

function addFileType(offsets, fileType, fileTypeDescription) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.objectAssign)({}, offsets, {fileType: {value: fileType, description: fileTypeDescription}});
}


/***/ }),

/***/ "./node_modules/exifreader/src/iptc-tag-names.js":
/*!*******************************************************!*\
  !*** ./node_modules/exifreader/src/iptc-tag-names.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "./node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    'iptc': {
        0x0100: {
            'name': 'Model Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0105: {
            'name': 'Destination',
            'repeatable': true
        },
        0x0114: {
            'name': 'File Format',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0116: {
            'name': 'File Format Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x011e: 'Service Identifier',
        0x0128: 'Envelope Number',
        0x0132: 'Product ID',
        0x013c: 'Envelope Priority',
        0x0146: {
            'name': 'Date Sent',
            'description': getCreationDate
        },
        0x0150: {
            'name': 'Time Sent',
            'description': getCreationTime
        },
        0x015a: {
            'name': 'Coded Character Set',
            'description': getEncodingName,
            'encoding_name': getEncodingName,
        },
        0x0164: 'UNO',
        0x0178: {
            'name': 'ARM Identifier',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x017a: {
            'name': 'ARM Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0200: {
            'name': 'Record Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0203: 'Object Type Reference',
        0x0204: 'Object Attribute Reference',
        0x0205: 'Object Name',
        0x0207: 'Edit Status',
        0x0208: {
            'name': 'Editorial Update',
            'description': (value) => {
                if ((0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value) === '01') {
                    return 'Additional Language';
                }
                return 'Unknown';
            }
        },
        0x020a: 'Urgency',
        0x020c: {
            'name': 'Subject Reference',
            'repeatable': true,
            'description': (value) => {
                const parts = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value).split(':');
                return parts[2] + (parts[3] ? '/' + parts[3] : '') + (parts[4] ? '/' + parts[4] : '');
            }
        },
        0x020f: 'Category',
        0x0214: {
            'name': 'Supplemental Category',
            'repeatable': true
        },
        0x0216: 'Fixture Identifier',
        0x0219: {
            'name': 'Keywords',
            'repeatable': true
        },
        0x021a: {
            'name': 'Content Location Code',
            'repeatable': true
        },
        0x021b: {
            'name': 'Content Location Name',
            'repeatable': true
        },
        0x021e: 'Release Date',
        0x0223: 'Release Time',
        0x0225: 'Expiration Date',
        0x0226: 'Expiration Time',
        0x0228: 'Special Instructions',
        0x022a: {
            'name': 'Action Advised',
            'description': (value) => {
                const string = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
                if (string === '01') {
                    return 'Object Kill';
                } else if (string === '02') {
                    return 'Object Replace';
                } else if (string === '03') {
                    return 'Object Append';
                } else if (string === '04') {
                    return 'Object Reference';
                }
                return 'Unknown';
            }
        },
        0x022d: {
            'name': 'Reference Service',
            'repeatable': true
        },
        0x022f: {
            'name': 'Reference Date',
            'repeatable': true
        },
        0x0232: {
            'name': 'Reference Number',
            'repeatable': true
        },
        0x0237: {
            'name': 'Date Created',
            'description': getCreationDate
        },
        0x023c: {
            'name': 'Time Created',
            'description': getCreationTime
        },
        0x023e: {
            'name': 'Digital Creation Date',
            'description': getCreationDate
        },
        0x023f: {
            'name': 'Digital Creation Time',
            'description': getCreationTime
        },
        0x0241: 'Originating Program',
        0x0246: 'Program Version',
        0x024b: {
            'name': 'Object Cycle',
            'description': (value) => {
                const string = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
                if (string === 'a') {
                    return 'morning';
                } else if (string === 'p') {
                    return 'evening';
                } else if (string === 'b') {
                    return 'both';
                }
                return 'Unknown';
            }
        },
        0x0250: {
            'name': 'By-line',
            'repeatable': true
        },
        0x0255: {
            'name': 'By-line Title',
            'repeatable': true
        },
        0x025a: 'City',
        0x025c: 'Sub-location',
        0x025f: 'Province/State',
        0x0264: 'Country/Primary Location Code',
        0x0265: 'Country/Primary Location Name',
        0x0267: 'Original Transmission Reference',
        0x0269: 'Headline',
        0x026e: 'Credit',
        0x0273: 'Source',
        0x0274: 'Copyright Notice',
        0x0276: {
            'name': 'Contact',
            'repeatable': true
        },
        0x0278: 'Caption/Abstract',
        0x027a: {
            'name': 'Writer/Editor',
            'repeatable': true
        },
        0x027d: {
            'name': 'Rasterized Caption',
            'description': (value) => value
        },
        0x0282: 'Image Type',
        0x0283: {
            'name': 'Image Orientation',
            'description': (value) => {
                const string = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
                if (string === 'P') {
                    return 'Portrait';
                } else if (string === 'L') {
                    return 'Landscape';
                } else if (string === 'S') {
                    return 'Square';
                }
                return 'Unknown';
            }
        },
        0x0287: 'Language Identifier',
        0x0296: {
            'name': 'Audio Type',
            'description': (value) => {
                const stringValue = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
                const character0 = stringValue.charAt(0);
                const character1 = stringValue.charAt(1);
                let description = '';

                if (character0 === '1') {
                    description += 'Mono';
                } else if (character0 === '2') {
                    description += 'Stereo';
                }

                if (character1 === 'A') {
                    description += ', actuality';
                } else if (character1 === 'C') {
                    description += ', question and answer session';
                } else if (character1 === 'M') {
                    description += ', music, transmitted by itself';
                } else if (character1 === 'Q') {
                    description += ', response to a question';
                } else if (character1 === 'R') {
                    description += ', raw sound';
                } else if (character1 === 'S') {
                    description += ', scener';
                } else if (character1 === 'V') {
                    description += ', voicer';
                } else if (character1 === 'W') {
                    description += ', wrap';
                }

                if (description !== '') {
                    return description;
                }
                return stringValue;
            }
        },
        0x0297: {
            'name': 'Audio Sampling Rate',
            'description': (value) => parseInt((0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value), 10) + ' Hz'
        },
        0x0298: {
            'name': 'Audio Sampling Resolution',
            'description': (value) => {
                const bits = parseInt((0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value), 10);
                return bits + (bits === 1 ? ' bit' : ' bits');
            }
        },
        0x0299: {
            'name': 'Audio Duration',
            'description': (value) => {
                const duration = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
                if (duration.length >= 6) {
                    return duration.substr(0, 2) + ':' + duration.substr(2, 2) + ':' + duration.substr(4, 2);
                }
                return duration;
            }
        },
        0x029a: 'Audio Outcue',
        0x02ba: 'Short Document ID',
        0x02bb: 'Unique Document ID',
        0x02bc: 'Owner ID',
        0x02c8: {
            'name': (value) => {
                if (value.length === 2) {
                    return 'ObjectData Preview File Format';
                }
                return 'Record 2 destination';
            },
            'description': (value) => {
                if (value.length === 2) {
                    const intValue = (value[0] << 8) + value[1];
                    if (intValue === 0) {
                        return 'No ObjectData';
                    } else if (intValue === 1) {
                        return 'IPTC-NAA Digital Newsphoto Parameter Record';
                    } else if (intValue === 2) {
                        return 'IPTC7901 Recommended Message Format';
                    } else if (intValue === 3) {
                        return 'Tagged Image File Format (Adobe/Aldus Image data)';
                    } else if (intValue === 4) {
                        return 'Illustrator (Adobe Graphics data)';
                    } else if (intValue === 5) {
                        return 'AppleSingle (Apple Computer Inc)';
                    } else if (intValue === 6) {
                        return 'NAA 89-3 (ANPA 1312)';
                    } else if (intValue === 7) {
                        return 'MacBinary II';
                    } else if (intValue === 8) {
                        return 'IPTC Unstructured Character Oriented File Format (UCOFF)';
                    } else if (intValue === 9) {
                        return 'United Press International ANPA 1312 variant';
                    } else if (intValue === 10) {
                        return 'United Press International Down-Load Message';
                    } else if (intValue === 11) {
                        return 'JPEG File Interchange (JFIF)';
                    } else if (intValue === 12) {
                        return 'Photo-CD Image-Pac (Eastman Kodak)';
                    } else if (intValue === 13) {
                        return 'Microsoft Bit Mapped Graphics File [*.BMP]';
                    } else if (intValue === 14) {
                        return 'Digital Audio File [*.WAV] (Microsoft & Creative Labs)';
                    } else if (intValue === 15) {
                        return 'Audio plus Moving Video [*.AVI] (Microsoft)';
                    } else if (intValue === 16) {
                        return 'PC DOS/Windows Executable Files [*.COM][*.EXE]';
                    } else if (intValue === 17) {
                        return 'Compressed Binary File [*.ZIP] (PKWare Inc)';
                    } else if (intValue === 18) {
                        return 'Audio Interchange File Format AIFF (Apple Computer Inc)';
                    } else if (intValue === 19) {
                        return 'RIFF Wave (Microsoft Corporation)';
                    } else if (intValue === 20) {
                        return 'Freehand (Macromedia/Aldus)';
                    } else if (intValue === 21) {
                        return 'Hypertext Markup Language "HTML" (The Internet Society)';
                    } else if (intValue === 22) {
                        return 'MPEG 2 Audio Layer 2 (Musicom), ISO/IEC';
                    } else if (intValue === 23) {
                        return 'MPEG 2 Audio Layer 3, ISO/IEC';
                    } else if (intValue === 24) {
                        return 'Portable Document File (*.PDF) Adobe';
                    } else if (intValue === 25) {
                        return 'News Industry Text Format (NITF)';
                    } else if (intValue === 26) {
                        return 'Tape Archive (*.TAR)';
                    } else if (intValue === 27) {
                        return 'Tidningarnas Telegrambyrå NITF version (TTNITF DTD)';
                    } else if (intValue === 28) {
                        return 'Ritzaus Bureau NITF version (RBNITF DTD)';
                    } else if (intValue === 29) {
                        return 'Corel Draw [*.CDR]';
                    }
                    return `Unknown format ${intValue}`;
                }
                return (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
            }
        },
        0x02c9: {
            'name': 'ObjectData Preview File Format Version',
            'description': (value, tags) => {
                // Format ID, Version ID, Version Description
                const formatVersions = {
                    '00': {'00': '1'},
                    '01': {'01': '1', '02': '2', '03': '3', '04': '4'},
                    '02': {'04': '4'},
                    '03': {'01': '5.0', '02': '6.0'},
                    '04': {'01': '1.40'},
                    '05': {'01': '2'},
                    '06': {'01': '1'},
                    '11': {'01': '1.02'},
                    '20': {'01': '3.1', '02': '4.0', '03': '5.0', '04': '5.5'},
                    '21': {'02': '2.0'}
                };
                const stringValue = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);

                if (tags['ObjectData Preview File Format']) {
                    const objectDataPreviewFileFormat = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(tags['ObjectData Preview File Format'].value);
                    if (formatVersions[objectDataPreviewFileFormat]
                        && formatVersions[objectDataPreviewFileFormat][stringValue]) {
                        return formatVersions[objectDataPreviewFileFormat][stringValue];
                    }
                }

                return stringValue;
            }
        },
        0x02ca: 'ObjectData Preview Data',
        0x070a: {
            'name': 'Size Mode',
            'description': (value) => {
                return (value[0]).toString();
            }
        },
        0x0714: {
            'name': 'Max Subfile Size',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        },
        0x075a: {
            'name': 'ObjectData Size Announced',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        },
        0x075f: {
            'name': 'Maximum ObjectData Size',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        }
    }
});

function getCreationDate(value) {
    const date = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);

    if (date.length >= 8) {
        return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
    }

    return date;
}

function getCreationTime(value) {
    const time = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
    let parsedTime = time;

    if (time.length >= 6) {
        parsedTime = time.substr(0, 2) + ':' + time.substr(2, 2) + ':' + time.substr(4, 2);
        if (time.length === 11) {
            parsedTime += time.substr(6, 1) + time.substr(7, 2) + ':' + time.substr(9, 2);
        }
    }

    return parsedTime;
}

function getEncodingName(value) {
    const string = (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value);
    if (string === '\x1b%G') {
        return 'UTF-8';
    } else if (string === '\x1b%5') {
        return 'Windows-1252';
    } else if (string === '\x1b%/G') {
        return 'UTF-8 Level 1';
    } else if (string === '\x1b%/H') {
        return 'UTF-8 Level 2';
    } else if (string === '\x1b%/I') {
        return 'UTF-8 Level 3';
    } else if (string === '\x1B/A') {
        return 'ISO-8859-1';
    } else if (string === '\x1B/B') {
        return 'ISO-8859-2';
    } else if (string === '\x1B/C') {
        return 'ISO-8859-3';
    } else if (string === '\x1B/D') {
        return 'ISO-8859-4';
    } else if (string === '\x1B/@') {
        return 'ISO-8859-5';
    } else if (string === '\x1B/G') {
        return 'ISO-8859-6';
    } else if (string === '\x1B/F') {
        return 'ISO-8859-7';
    } else if (string === '\x1B/H') {
        return 'ISO-8859-8';
    }
    return 'Unknown';
}


/***/ }),

/***/ "./node_modules/exifreader/src/iptc-tags.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/iptc-tags.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iptc-tag-names.js */ "./node_modules/exifreader/src/iptc-tag-names.js");
/* harmony import */ var _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-decoder.js */ "./node_modules/exifreader/src/tag-decoder.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




const BYTES_8BIM = 0x3842494d;
const BYTES_8BIM_SIZE = 4;
const RESOURCE_ID_SIZE = 2;
const RESOURCE_NAME_SIZE_SIZE = 1;
const RESOURCE_NAME_MIN_SIZE = 2;
const RESOURCE_SIZE_SIZE = 4;
const RESOURCE_BLOCK_MIN_HEADER_SIZE = BYTES_8BIM_SIZE + RESOURCE_ID_SIZE + RESOURCE_NAME_MIN_SIZE + RESOURCE_SIZE_SIZE;
const NAA_RESOURCE_BLOCK_TYPE = 0x0404; // Sometimes called resource ID.
const TAG_HEADER_SIZE = 5;

/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, dataOffset, includeUnknown) {
    try {
        if (Array.isArray(dataView)) {
            return parseTags(new DataView(Uint8Array.from(dataView).buffer), {size: dataView.length}, 0, includeUnknown);
        }
        const {naaBlock, dataOffset: newDataOffset} = getNaaResourceBlock(dataView, dataOffset);
        return parseTags(dataView, naaBlock, newDataOffset, includeUnknown);
    } catch (error) {
        return {};
    }
}

function getNaaResourceBlock(dataView, dataOffset) {
    while (dataOffset + RESOURCE_BLOCK_MIN_HEADER_SIZE <= dataView.byteLength) {
        const resourceBlock = getResourceBlock(dataView, dataOffset);
        if (isNaaResourceBlock(resourceBlock)) {
            return {naaBlock: resourceBlock, dataOffset: dataOffset + resourceBlock.headerSize};
        }
        dataOffset += resourceBlock.headerSize + resourceBlock.size + getBlockPadding(resourceBlock);
    }
    throw new Error('No IPTC NAA resource block.');
}

function getResourceBlock(dataView, dataOffset) {
    if (dataView.getUint32(dataOffset, false) !== BYTES_8BIM) {
        throw new Error('Not an IPTC resource block.');
    }

    // We currently do not use the resource name for anything, we just need to know the size.
    const resourceNameSize = dataView.getUint8(dataOffset + BYTES_8BIM_SIZE + RESOURCE_ID_SIZE);
    const resourceNameTotalSize = (resourceNameSize % 2 === 0 ? resourceNameSize + 1 : resourceNameSize) + RESOURCE_NAME_SIZE_SIZE;

    return {
        headerSize: BYTES_8BIM_SIZE + RESOURCE_ID_SIZE + resourceNameTotalSize + RESOURCE_SIZE_SIZE,
        type: dataView.getUint16(dataOffset + BYTES_8BIM_SIZE),
        size: dataView.getUint32(dataOffset + BYTES_8BIM_SIZE + RESOURCE_ID_SIZE + resourceNameTotalSize),
    };
}

function isNaaResourceBlock(resourceBlock) {
    return resourceBlock.type === NAA_RESOURCE_BLOCK_TYPE;
}

function getBlockPadding(resourceBlock) {
    if (resourceBlock.size % 2 !== 0) {
        return 1;
    }
    return 0;
}

function parseTags(dataView, naaBlock, dataOffset, includeUnknown) {
    const tags = {};
    let encoding = undefined;

    const endOfBlockOffset = dataOffset + naaBlock['size'];

    while ((dataOffset < endOfBlockOffset) && (dataOffset < dataView.byteLength)) {
        const {tag, tagSize} = readTag(dataView, dataOffset, tags, encoding, includeUnknown);

        if (tag === null) {
            break;
        }

        if (tag) {
            if ('encoding' in tag) {
                encoding = tag.encoding;
            }

            if ((tags[tag.name] === undefined) || (tag['repeatable'] === undefined)) {
                tags[tag.name] = {
                    id: tag.id,
                    value: tag.value,
                    description: tag.description
                };
            } else {
                if (!(tags[tag.name] instanceof Array)) {
                    tags[tag.name] = [{
                        id: tags[tag.name].id,
                        value: tags[tag.name].value,
                        description: tags[tag.name].description
                    }];
                }
                tags[tag.name].push({
                    id: tag.id,
                    value: tag.value,
                    description: tag.description
                });
            }
        }

        dataOffset += TAG_HEADER_SIZE + tagSize;
    }

    return tags;
}

function readTag(dataView, dataOffset, tags, encoding, includeUnknown) {
    const TAG_CODE_OFFSET = 1;
    const TAG_SIZE_OFFSET = 3;

    if (leadByteIsMissing(dataView, dataOffset)) {
        return {tag: null, tagSize: 0};
    }

    const tagCode = dataView.getUint16(dataOffset + TAG_CODE_OFFSET);
    const tagSize = dataView.getUint16(dataOffset + TAG_SIZE_OFFSET);

    if (!includeUnknown && !_iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]) {
        return {tag: undefined, tagSize};
    }

    const tagValue = getTagValue(dataView, dataOffset + TAG_HEADER_SIZE, tagSize);

    const tag = {
        id: tagCode,
        name: getTagName(_iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode], tagCode, tagValue),
        value: tagValue,
        description: getTagDescription(_iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode], tagValue, tags, encoding)
    };
    if (tagIsRepeatable(tagCode)) {
        tag['repeatable'] = true;
    }
    if (tagContainsEncoding(tagCode)) {
        tag['encoding'] = _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]['encoding_name'](tagValue);
    }

    return {tag, tagSize};
}

function leadByteIsMissing(dataView, dataOffset) {
    const TAG_LEAD_BYTE = 0x1c;
    return dataView.getUint8(dataOffset) !== TAG_LEAD_BYTE;
}

function getTagValue(dataView, offset, size) {
    const value = [];

    for (let valueIndex = 0; valueIndex < size; valueIndex++) {
        value.push(dataView.getUint8(offset + valueIndex));
    }

    return value;
}

function getTagName(tag, tagCode, tagValue) {
    if (!tag) {
        return `undefined-${tagCode}`;
    }
    if (tagIsName(tag)) {
        return tag;
    }
    if (hasDynamicName(tag)) {
        return tag['name'](tagValue);
    }
    return tag['name'];
}

function tagIsName(tag) {
    return typeof tag === 'string';
}

function hasDynamicName(tag) {
    return typeof (tag['name']) === 'function';
}

function getTagDescription(tag, tagValue, tags, encoding) {
    if (hasDescriptionProperty(tag)) {
        try {
            return tag['description'](tagValue, tags);
        } catch (error) {
            // Fall through to next handler.
        }
    }
    if (tagValueIsText(tag, tagValue)) {
        return _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__["default"].decode(encoding, tagValue);
    }
    return tagValue;
}

function tagValueIsText(tag, tagValue) {
    return tag && tagValue instanceof Array;
}

function hasDescriptionProperty(tag) {
    return tag && tag['description'] !== undefined;
}

function tagIsRepeatable(tagCode) {
    return _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode] && _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]['repeatable'];
}

function tagContainsEncoding(tagCode) {
    return _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode] && _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]['encoding_name'] !== undefined;
}


/***/ }),

/***/ "./node_modules/exifreader/src/jfif-tags.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/jfif-tags.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, jfifDataOffset) {
    const length = getLength(dataView, jfifDataOffset);
    const thumbnailWidth = getThumbnailWidth(dataView, jfifDataOffset, length);
    const thumbnailHeight = getThumbnailHeight(dataView, jfifDataOffset, length);
    const tags = {
        'JFIF Version': getVersion(dataView, jfifDataOffset, length),
        'Resolution Unit': getResolutionUnit(dataView, jfifDataOffset, length),
        'XResolution': getXResolution(dataView, jfifDataOffset, length),
        'YResolution': getYResolution(dataView, jfifDataOffset, length),
        'JFIF Thumbnail Width': thumbnailWidth,
        'JFIF Thumbnail Height': thumbnailHeight
    };

    if (thumbnailWidth !== undefined && thumbnailHeight !== undefined) {
        const thumbnail = getThumbnail(dataView, jfifDataOffset, 3 * thumbnailWidth.value * thumbnailHeight.value, length);
        if (thumbnail) {
            tags['JFIF Thumbnail'] = thumbnail;
        }
    }

    for (const tagName in tags) {
        if (tags[tagName] === undefined) {
            delete tags[tagName];
        }
    }

    return tags;
}

function getLength(dataView, jfifDataOffset) {
    return _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, jfifDataOffset);
}

function getVersion(dataView, jfifDataOffset, length) {
    const OFFSET = 7;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const majorVersion = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, jfifDataOffset + OFFSET);
    const minorVersion = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, jfifDataOffset + OFFSET + 1);
    return {
        value: majorVersion * 0x100 + minorVersion,
        description: majorVersion + '.' + minorVersion
    };
}

function getResolutionUnit(dataView, jfifDataOffset, length) {
    const OFFSET = 9;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: getResolutionUnitDescription(value)
    };
}

function getResolutionUnitDescription(value) {
    if (value === 0) {
        return 'None';
    }
    if (value === 1) {
        return 'inches';
    }
    if (value === 2) {
        return 'cm';
    }
    return 'Unknown';
}

function getXResolution(dataView, jfifDataOffset, length) {
    const OFFSET = 10;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getYResolution(dataView, jfifDataOffset, length) {
    const OFFSET = 12;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getThumbnailWidth(dataView, jfifDataOffset, length) {
    const OFFSET = 14;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getThumbnailHeight(dataView, jfifDataOffset, length) {
    const OFFSET = 15;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, jfifDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getThumbnail(dataView, jfifDataOffset, thumbnailLength, length) {
    const OFFSET = 16;

    if (thumbnailLength === 0 || OFFSET + thumbnailLength > length) {
        return undefined;
    }

    const value = dataView.buffer.slice(jfifDataOffset + OFFSET, jfifDataOffset + OFFSET + thumbnailLength);
    return {
        value,
        description: '<24-bit RGB pixel data>'
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/mpf-tags.js":
/*!*************************************************!*\
  !*** ./node_modules/exifreader/src/mpf-tags.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-order.js */ "./node_modules/exifreader/src/byte-order.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* harmony import */ var _tag_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-names.js */ "./node_modules/exifreader/src/tag-names.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _tags_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tags-helpers.js */ "./node_modules/exifreader/src/tags-helpers.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */







/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

const ENTRY_SIZE = 16;

function read(dataView, dataOffset, includeUnknown) {
    const byteOrder = _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteOrder(dataView, dataOffset);
    const tags = (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_4__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_MPF, dataOffset, (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_4__.get0thIfdOffset)(dataView, dataOffset, byteOrder), byteOrder, includeUnknown);
    return addMpfImages(dataView, dataOffset, tags, byteOrder);
}

function addMpfImages(dataView, dataOffset, tags, byteOrder) {
    if (!tags['MPEntry']) {
        return tags;
    }

    const images = [];
    for (let i = 0; i < Math.ceil(tags['MPEntry'].value.length / ENTRY_SIZE); i++) {
        images[i] = {};

        const attributes = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE, _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('LONG'), byteOrder);
        images[i]['ImageFlags'] = getImageFlags(attributes);
        images[i]['ImageFormat'] = getImageFormat(attributes);
        images[i]['ImageType'] = getImageType(attributes);

        const imageSize = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 4, _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('LONG'), byteOrder);
        images[i]['ImageSize'] = {
            value: imageSize,
            description: '' + imageSize
        };

        const imageOffset = getImageOffset(i, tags['MPEntry'], byteOrder, dataOffset);
        images[i]['ImageOffset'] = {
            value: imageOffset,
            description: '' + imageOffset
        };

        const dependentImage1EntryNumber =
            getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 12, _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('SHORT'), byteOrder);
        images[i]['DependentImage1EntryNumber'] = {
            value: dependentImage1EntryNumber,
            description: '' + dependentImage1EntryNumber
        };

        const dependentImage2EntryNumber =
            getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 14, _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('SHORT'), byteOrder);
        images[i]['DependentImage2EntryNumber'] = {
            value: dependentImage2EntryNumber,
            description: '' + dependentImage2EntryNumber
        };

        images[i].image = dataView.buffer.slice(imageOffset, imageOffset + imageSize);
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.deferInit)(images[i], 'base64', function () {
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getBase64Image)(this.image);
        });
    }

    tags['Images'] = images;

    return tags;
}

function getImageNumberValue(entries, offset, size, byteOrder) {
    if (byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN) {
        let value = 0;
        for (let i = 0; i < size; i++) {
            value += entries[offset + i] << (8 * i);
        }
        return value;
    }

    let value = 0;
    for (let i = 0; i < size; i++) {
        value += entries[offset + i] << (8 * (size - 1 - i));
    }
    return value;
}

function getImageFlags(attributes) {
    const flags = [
        (attributes >> 31) & 0x1,
        (attributes >> 30) & 0x1,
        (attributes >> 29) & 0x1
    ];

    const flagsDescription = [];

    if (flags[0]) {
        flagsDescription.push('Dependent Parent Image');
    }
    if (flags[1]) {
        flagsDescription.push('Dependent Child Image');
    }
    if (flags[2]) {
        flagsDescription.push('Representative Image');
    }

    return {
        value: flags,
        description: flagsDescription.join(', ') || 'None'
    };
}

function getImageFormat(attributes) {
    const imageFormat = attributes >> 24 & 0x7;
    return {
        value: imageFormat,
        description: imageFormat === 0 ? 'JPEG' : 'Unknown'
    };
}

function getImageType(attributes) {
    const type = attributes & 0xffffff;
    const descriptions = {
        0x30000: 'Baseline MP Primary Image',
        0x10001: 'Large Thumbnail (VGA equivalent)',
        0x10002: 'Large Thumbnail (Full HD equivalent)',
        0x20001: 'Multi-Frame Image (Panorama)',
        0x20002: 'Multi-Frame Image (Disparity)',
        0x20003: 'Multi-Frame Image (Multi-Angle)',
        0x0: 'Undefined',
    };

    return {
        value: type,
        description: descriptions[type] || 'Unknown'
    };
}

function getImageOffset(imageIndex, mpEntry, byteOrder, dataOffset) {
    if (isFirstIndividualImage(imageIndex)) {
        return 0;
    }
    return getImageNumberValue(mpEntry.value, imageIndex * ENTRY_SIZE + 8, _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('LONG'), byteOrder) + dataOffset;
}

function isFirstIndividualImage(imageIndex) {
    return imageIndex === 0;
}


/***/ }),

/***/ "./node_modules/exifreader/src/pentax-tags.js":
/*!****************************************************!*\
  !*** ./node_modules/exifreader/src/pentax-tags.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-order.js */ "./node_modules/exifreader/src/byte-order.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _tags_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags-helpers.js */ "./node_modules/exifreader/src/tags-helpers.js");
/* harmony import */ var _tag_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-names.js */ "./node_modules/exifreader/src/tag-names.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Reverse-engineered docs:
// https://exiftool.org/makernote_types.html
// https://exiv2.org/makernote.html
// https://exiftool.org/TagNames/Pentax.html






const BYTE_ORDER_OFFSET = 8; // Pentax5: https://exiftool.org/makernote_types.html
const PENTAX_IFD_OFFSET = BYTE_ORDER_OFFSET + 2; // https://exiftool.org/makernote_types.html

const MODEL_ID = {
    K3_III: 0x13254,
};
const LIK3III = {
    CAMERA_ORIENTATION: 1,
    ROLL_ANGLE: 3,
    PITCH_ANGLE: 5
};

/* harmony default export */ __webpack_exports__["default"] = ({
    read,
    PENTAX_IFD_OFFSET,
    MODEL_ID,
    LIK3III
});

function read(dataView, tiffHeaderOffset, offset, includeUnknown) {
    // Pentax does not use the standard TIFF header offset as base for tag
    // offsets but instead uses the start of the IFD, i.e. directly after the
    // two byte order bytes. originOffset below is this offset.
    const byteOrder = _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteOrder(dataView, tiffHeaderOffset + offset + BYTE_ORDER_OFFSET);
    const originOffset = tiffHeaderOffset + offset;
    let tags = (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_2__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_3__.IFD_TYPE_PENTAX, originOffset, originOffset + PENTAX_IFD_OFFSET, byteOrder, includeUnknown, true);

    if (hasLevelInfoK3III(tags)) {
        tags = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.objectAssign)({}, tags, parseLevelInfoK3III(dataView, originOffset + tags['LevelInfo'].__offset, byteOrder));
        delete tags['LevelInfo'];
    }

    return tags;
}

function hasLevelInfoK3III(tags) {
    return tags['PentaxModelID'] && tags['PentaxModelID'].value === MODEL_ID.K3_III && tags['LevelInfo'];
}

function parseLevelInfoK3III(dataView, levelInfoOffset, byteOrder) {
    const tags = {};

    if (levelInfoOffset + 7 > dataView.byteLength) {
        return tags;
    }

    const cameraOrientation = dataView.getInt8(levelInfoOffset + LIK3III.CAMERA_ORIENTATION);
    tags['CameraOrientation'] = {
        value: cameraOrientation,
        description: getOrientationDescription(cameraOrientation)
    };

    const rollAngle = dataView.getInt16(levelInfoOffset + LIK3III.ROLL_ANGLE, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
    tags['RollAngle'] = {
        value: rollAngle,
        description: getRollAngleDescription(rollAngle)
    };

    const pitchAngle = dataView.getInt16(levelInfoOffset + LIK3III.PITCH_ANGLE, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
    tags['PitchAngle'] = {
        value: pitchAngle,
        description: getPitchAngleDescription(pitchAngle)
    };

    return tags;
}

function getOrientationDescription(orientation) {
    if (orientation === 0) {
        return 'Horizontal (normal)';
    }
    if (orientation === 1) {
        return 'Rotate 270 CW';
    }
    if (orientation === 2) {
        return 'Rotate 180';
    }
    if (orientation === 3) {
        return 'Rotate 90 CW';
    }
    if (orientation === 4) {
        return 'Upwards';
    }
    if (orientation === 5) {
        return 'Downwards';
    }
    return 'Unknown';
}

function getRollAngleDescription(rollAngle) {
    return '' + (rollAngle * -0.5);
}

function getPitchAngleDescription(pitchAngle) {
    return '' + (pitchAngle * -0.5);
}


/***/ }),

/***/ "./node_modules/exifreader/src/photoshop-tag-names.js":
/*!************************************************************!*\
  !*** ./node_modules/exifreader/src/photoshop-tag-names.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathRecordTypes: function() { return /* binding */ PathRecordTypes; }
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




// export const OsTypeKeys = {
//     OBJC: 'Objc',
//     DOUB: 'doub',
//     UNTF: 'UntF',
//     TEXT: 'TEXT',
//     BOOL: 'bool',
//     ENUM: 'enum',
//     LONG: 'long'
// };

const PathRecordTypes = {
    CLOSED_SUBPATH_LENGTH: 0,
    CLOSED_SUBPATH_BEZIER_LINKED: 1,
    CLOSED_SUBPATH_BEZIER_UNLINKED: 2,
    OPEN_SUBPATH_LENGTH: 3,
    OPEN_SUBPATH_BEZIER_LINKED: 4,
    OPEN_SUBPATH_BEZIER_UNLINKED: 5,
    FILL_RULE: 6,
    CLIPBOARD: 7,
    INITIAL_FILL_RULE: 8
};

const PATH_RECORD_SIZE = 24;

/* harmony default export */ __webpack_exports__["default"] = ({
    // 0x0425: {
    //     name: 'CaptionDigest',
    //     description(dataView) {
    //         let description = '';
    //         for (let i = 0; i < dataView.byteLength; i++) {
    //             const byte = dataView.getUint8(i);
    //             description += padStart(byte.toString(16), 2, '0');
    //         }
    //         return description;
    //     }
    // },
    // Commented out for now to lower bundle size until someone asks for it.
    // 0x043a: {
    //     name: 'PrintInformation',
    //     description: parseDescriptor
    // },
    // 0x043b: {
    //     name: 'PrintStyle',
    //     description: parseDescriptor
    // },
    0x07d0: {
        name: 'PathInformation',
        description: pathResource
    },
    0x0bb7: {
        name: 'ClippingPathName',
        description(dataView) {
            const [, string] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getPascalStringFromDataView)(dataView, 0);
            return string;
        }
    },
});

// function parseDescriptor(dataView) {
//     const DESCRIPTOR_VERSION_SIZE = 4;
//     // This is a unicode string terminated with null. Unsure about the format though since in my example image it starts with 0x0000.
//     const UNCLEAR_CLASS_ID_NAME_PART_SIZE = 6;
//     let offset = 0;
//     offset += DESCRIPTOR_VERSION_SIZE + UNCLEAR_CLASS_ID_NAME_PART_SIZE;
//     const [classId, classIdSize] = getBlockValue(dataView, offset);
//     offset += classIdSize;
//     const numItems = Types.getLongAt(dataView, offset);
//     offset += 4;
//     const descriptor = {[classId]: {}};
//     for (let i = 0; i < numItems; i++) {
//         const [itemKey, itemKeySize] = getBlockValue(dataView, offset);
//         offset += itemKeySize;
//         const osTypeKey = getStringFromDataView(dataView, offset, 4);
//         offset += 4;
//         try {
//             const {itemValue, itemSize} = getItemValue(dataView, offset, osTypeKey);
//             offset += itemSize;
//             descriptor[classId][ITEM_KEY_TERMS[itemKey] || itemKey] = itemValue;
//         } catch (error) {
//             // We can't recover from unknown OS type key since we don't know
//             // where the next one starts.
//             break;
//         }
//     }
//     return JSON.stringify(descriptor);
// }

// function getBlockValue(dataView, offset, unicode = false) {
//     const length = (unicode ? 2 : 1) * Types.getLongAt(dataView, offset) || 4;
//     offset += 4;
//     const value = (unicode ? getUnicodeStringFromDataView : getStringFromDataView)(dataView, offset, length);
//     offset += length;
//     return [value, 4 + length];
// }

// function getItemValue(dataView, offset, osTypeKey) {
//     // Not all OSType keys are implemented yet because they are missing in the example image.
//     if (osTypeKey === OsTypeKeys.OBJC) {
//         const [classIdName, classIdNameSize] = getBlockValue(dataView, offset, true);
//         offset += classIdNameSize;
//         const [classId, classIdSize] = getBlockValue(dataView, offset);
//         offset += classIdSize;
//         const _offset = Types.getLongAt(dataView, offset);
//         return {
//             itemValue: {[classIdName]: {[classId]: _offset}},
//             itemSize: classIdNameSize + classIdSize + 4
//         };
//     }
//     if (osTypeKey === OsTypeKeys.DOUB) {
//         return {
//             itemValue: parseDouble(dataView, offset),
//             itemSize: 8
//         };
//     }
//     if (osTypeKey === OsTypeKeys.UNTF) {
//         const unit = getStringFromDataView(dataView, offset, 4);
//         return {
//             itemValue: {unit, value: parseDouble(dataView, offset + 4)},
//             itemSize: unit.length + 8
//         };
//     }
//     if (osTypeKey === OsTypeKeys.TEXT) {
//         const length = 2 * Types.getLongAt(dataView, offset);
//         offset += 4;
//         const text = getUnicodeStringFromDataView(dataView, offset, length);
//         return {
//             itemValue: text,
//             itemSize: 4 + length
//         };
//     }
//     if (osTypeKey === OsTypeKeys.BOOL) {
//         return {
//             itemValue: Types.getByteAt(dataView, offset) === 1,
//             itemSize: 1
//         };
//     }
//     if (osTypeKey === OsTypeKeys.ENUM) {
//         const [type, typeSize] = getBlockValue(dataView, offset);
//         offset += typeSize;
//         const [enumName, enumSize] = getBlockValue(dataView, offset);
//         return {
//             itemValue: {[type]: enumName},
//             itemSize: typeSize + enumSize
//         };
//     }
//     if (osTypeKey === OsTypeKeys.LONG) {
//         return {
//             itemValue: Types.getLongAt(dataView, offset),
//             itemSize: 4
//         };
//     }
//     throw new Error(`Unknown OS type key: ${osTypeKey}`);
// }

// function parseDouble(dataView, offset) {
//     const BIAS = 1023;
//     const sign = (Types.getByteAt(dataView, offset) & parseInt('10000000', 2)) === 0 ? 1 : -1;
//     const exponent = ((Types.getShortAt(dataView, offset) & parseInt('0111111111110000', 2)) >> 4) - BIAS;
//     const fractionHigh = padStart((Types.getLongAt(dataView, offset) & parseInt('00000000000011111111111111111111', 2)).toString(2), 20, '0');
//     const fractionLow = padStart(Types.getLongAt(dataView, offset + 4).toString(2), 32, '0');
//     const fraction = parseFloatRadix('1.' + fractionHigh + fractionLow, 2);
//     return sign * fraction * Math.pow(2, exponent);
// }

function pathResource(dataView) {
    const TYPE_SIZE = 2;
    const types = {};
    const paths = [];

    for (let offset = 0; offset < dataView.byteLength; offset += TYPE_SIZE + PATH_RECORD_SIZE) {
        const type = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, offset);
        if (PATH_RECORD_TYPES[type]) {
            if (!types[type]) {
                types[type] = PATH_RECORD_TYPES[type].description;
            }
            paths.push({
                type,
                path: PATH_RECORD_TYPES[type].path(dataView, offset + TYPE_SIZE)
            });
        }
    }
    return JSON.stringify({types, paths});
}

const PATH_RECORD_TYPES = {
    [PathRecordTypes.CLOSED_SUBPATH_LENGTH]: {
        description: 'Closed subpath length',
        path: (dataView, offset) => [_types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, offset)]
    },
    [PathRecordTypes.CLOSED_SUBPATH_BEZIER_LINKED]: {
        description: 'Closed subpath Bezier knot, linked',
        path: parseBezierKnot
    },
    [PathRecordTypes.CLOSED_SUBPATH_BEZIER_UNLINKED]: {
        description: 'Closed subpath Bezier knot, unlinked',
        path: parseBezierKnot
    },
    [PathRecordTypes.OPEN_SUBPATH_LENGTH]: {
        description: 'Open subpath length',
        path: (dataView, offset) => [_types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, offset)]
    },
    [PathRecordTypes.OPEN_SUBPATH_BEZIER_LINKED]: {
        description: 'Open subpath Bezier knot, linked',
        path: parseBezierKnot
    },
    [PathRecordTypes.OPEN_SUBPATH_BEZIER_UNLINKED]: {
        description: 'Open subpath Bezier knot, unlinked',
        path: parseBezierKnot
    },
    [PathRecordTypes.FILL_RULE]: {
        description: 'Path fill rule',
        path: () => []
    },
    [PathRecordTypes.INITIAL_FILL_RULE]: {
        description: 'Initial fill rule',
        path: (dataView, offset) => [_types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, offset)]
    },
    [PathRecordTypes.CLIPBOARD]: {
        description: 'Clipboard',
        path: parseClipboard
    }
};

function parseBezierKnot(dataView, offset) {
    const PATH_POINT_SIZE = 8;
    const path = [];
    for (let i = 0; i < PATH_RECORD_SIZE; i += PATH_POINT_SIZE) {
        path.push(parsePathPoint(dataView, offset + i));
    }
    return path;
}

function parsePathPoint(dataView, offset) {
    const vertical = getFixedPointNumber(dataView, offset, 8);
    const horizontal = getFixedPointNumber(dataView, offset + 4, 8);
    return [horizontal, vertical];
}

function parseClipboard(dataView, offset) {
    return [
        [
            getFixedPointNumber(dataView, offset, 8), // Top
            getFixedPointNumber(dataView, offset + 4, 8), // Left
            getFixedPointNumber(dataView, offset + 8, 8), // Botton
            getFixedPointNumber(dataView, offset + 12, 8), // Right
        ],
        getFixedPointNumber(dataView, offset + 16, 8) // Resolution
    ];
}

function getFixedPointNumber(dataView, offset, binaryPoint) {
    const number = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, offset);

    const sign = (number >>> 31) === 0 ? 1 : -1;
    const integer = (number & 0x7f000000) >>> (32 - binaryPoint);
    const fraction = number & parseInt((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.strRepeat)('1', 32 - binaryPoint), 2);

    return sign * (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseFloatRadix)(integer.toString(2) + '.' + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.padStart)(fraction.toString(2), 32 - binaryPoint, '0'), 2);
}

// Item key terminology: https://psd-tools.readthedocs.io/en/latest/reference/psd_tools.terminology.html
// Are these correct? There are collisions that are commented out. A lot of code for little gain?
// const ITEM_KEY_TERMS = {
//     'A   ': 'A',
//     'Adjs': 'Adjustment',
//     'Algd': 'Aligned',
//     'Algn': 'Alignment',
//     'AllE': 'AllExcept',
//     'All ': 'AllPS',
//     'AlTl': 'AllToolOptions',
//     'AChn': 'AlphaChannelOptions',
//     'AlpC': 'AlphaChannels',
//     'AmbB': 'AmbientBrightness',
//     'AmbC': 'AmbientColor',
//     'Amnt': 'Amount',
//     'AmMx': 'AmplitudeMax',
//     'AmMn': 'AmplitudeMin',
//     'Anch': 'Anchor',
//     'Angl': 'Angle',
//     'Ang1': 'Angle1',
//     'Ang2': 'Angle2',
//     'Ang3': 'Angle3',
//     'Ang4': 'Angle4',
//     'AntA': 'AntiAlias',
//     'Appe': 'Append',
//     'Aply': 'Apply',
//     'Ar  ': 'Area',
//     'Arrw': 'Arrowhead',
//     'As  ': 'As',
//     'Asst': 'AssetBin',
//     'AssC': 'AssumedCMYK',
//     'AssG': 'AssumedGray',
//     'AssR': 'AssumedRGB',
//     'At  ': 'At',
//     'Auto': 'Auto',
//     'AuCo': 'AutoContrast',
//     'Atrs': 'AutoErase',
//     'AtKr': 'AutoKern',
//     'AtUp': 'AutoUpdate',
//     'Axis': 'Axis',
//     'B   ': 'B',
//     'Bckg': 'Background',
//     'BckC': 'BackgroundColor',
//     'BckL': 'BackgroundLevel',
//     'Bwd ': 'Backward',
//     'Blnc': 'Balance',
//     'Bsln': 'BaselineShift',
//     'BpWh': 'BeepWhenDone',
//     'BgnR': 'BeginRamp',
//     'BgnS': 'BeginSustain',
//     'bvlD': 'BevelDirection',
//     'ebbl': 'BevelEmboss',
//     'bvlS': 'BevelStyle',
//     'bvlT': 'BevelTechnique',
//     'BgNH': 'BigNudgeH',
//     'BgNV': 'BigNudgeV',
//     'BtDp': 'BitDepth',
//     'Blck': 'Black',
//     'BlcC': 'BlackClip',
//     'Blcn': 'BlackGeneration',
//     'BlcG': 'BlackGenerationCurve',
//     'BlcI': 'BlackIntensity',
//     'BlcL': 'BlackLevel',
//     // 'BlcL': 'BlackLimit',
//     'Bld ': 'Bleed',
//     'Blnd': 'BlendRange',
//     'Bl  ': 'Blue',
//     'BlBl': 'BlueBlackPoint',
//     'blueFloat': 'BlueFloat',
//     'BlGm': 'BlueGamma',
//     'BlWh': 'BlueWhitePoint',
//     'BlX ': 'BlueX',
//     'BlY ': 'BlueY',
//     'blur': 'Blur',
//     'BlrM': 'BlurMethod',
//     'BlrQ': 'BlurQuality',
//     'Bk  ': 'Book',
//     'BrdT': 'BorderThickness',
//     'Btom': 'Bottom',
//     'Brgh': 'Brightness',
//     'BrsD': 'BrushDetail',
//     'BrsS': 'BrushSize',
//     'BrsT': 'BrushType',
//     'Brsh': 'Brushes',
//     'BmpA': 'BumpAmplitude',
//     'BmpC': 'BumpChannel',
//     'By  ': 'By',
//     'Byln': 'Byline',
//     'BylT': 'BylineTitle',
//     'BytO': 'ByteOrder',
//     'CMYS': 'CMYKSetup',
//     'CchP': 'CachePrefs',
//     'Clcl': 'Calculation',
//     'Clbr': 'CalibrationBars',
//     'Cptn': 'Caption',
//     'CptW': 'CaptionWriter',
//     'Ctgr': 'Category',
//     'ClSz': 'CellSize',
//     'Cntr': 'Center',
//     'CntC': 'CenterCropMarks',
//     'ChlA': 'ChalkArea',
//     'Chnl': 'Channel',
//     'ChMx': 'ChannelMatrix',
//     'ChnN': 'ChannelName',
//     'Chns': 'Channels',
//     'ChnI': 'ChannelsInterleaved',
//     'ChAm': 'CharcoalAmount',
//     'ChrA': 'CharcoalArea',
//     'Ckmt': 'ChokeMatte',
//     'ChFX': 'ChromeFX',
//     'City': 'City',
//     'ClrA': 'ClearAmount',
//     'ClPt': 'ClippingPath',
//     'ClpP': 'ClippingPathEPS',
//     'ClpF': 'ClippingPathFlatness',
//     'ClpI': 'ClippingPathIndex',
//     'Clpg': 'ClippingPathInfo',
//     'ClnS': 'CloneSource',
//     'Clsp': 'ClosedSubpath',
//     'Clr ': 'Color',
//     'Clrh': 'ColorChannels',
//     'ClrC': 'ColorCorrection',
//     'ClrI': 'ColorIndicates',
//     'ClMg': 'ColorManagement',
//     'Clrr': 'ColorPickerPrefs',
//     'ClrS': 'ColorSpace',
//     'ClrT': 'ColorTable',
//     'Clrz': 'Colorize',
//     'Clrs': 'Colors',
//     'ClrL': 'ColorsList',
//     'ClmW': 'ColumnWidth',
//     'CmdK': 'CommandKey',
//     'Cmpn': 'Compensation',
//     'Cmpr': 'Compression',
//     'Cncv': 'Concavity',
//     'Cndt': 'Condition',
//     'Cnst': 'Constant',
//     // 'Cnst': 'Constrain',
//     'CnsP': 'ConstrainProportions',
//     'Cfov': 'ConstructionFOV',
//     'Cntg': 'Contiguous',
//     'Cntn': 'Continue',
//     'Cnty': 'Continuity',
//     'ShpC': 'ContourType',
//     // 'Cntr': 'Contrast',
//     'Cnvr': 'Convert',
//     'Cpy ': 'Copy',
//     'Cpyr': 'Copyright',
//     'CprN': 'CopyrightNotice',
//     'CrnC': 'CornerCropMarks',
//     'Cnt ': 'Count',
//     'CntN': 'CountryName',
//     'CrcB': 'CrackBrightness',
//     'CrcD': 'CrackDepth',
//     'CrcS': 'CrackSpacing',
//     'blfl': 'CreateLayersFromLayerFX',
//     'Crdt': 'Credit',
//     'Crss': 'Crossover',
//     'Crnt': 'Current',
//     'CrnH': 'CurrentHistoryState',
//     'CrnL': 'CurrentLight',
//     'CrnT': 'CurrentToolOptions',
//     'Crv ': 'Curve',
//     'CrvF': 'CurveFile',
//     'Cstm': 'Custom',
//     'CstF': 'CustomForced',
//     'CstM': 'CustomMatte',
//     'CstP': 'CustomPalette',
//     'Cyn ': 'Cyan',
//     'DCS ': 'DCS',
//     'DPXf': 'DPXFormat',
//     'DrkI': 'DarkIntensity',
//     'Drkn': 'Darkness',
//     'DtCr': 'DateCreated',
//     'Dt ': 'Datum',
//     'Dfnt': 'Definition',
//     'Dnst': 'Density',
//     'Dpth': 'Depth',
//     'Dstl': 'DestBlackMax',
//     'DstB': 'DestBlackMin',
//     'Dstt': 'DestWhiteMax',
//     'DstW': 'DestWhiteMin',
//     'DstM': 'DestinationMode',
//     'Dtl ': 'Detail',
//     'Dmtr': 'Diameter',
//     'DffD': 'DiffusionDither',
//     'Drct': 'Direction',
//     'DrcB': 'DirectionBalance',
//     'DspF': 'DisplaceFile',
//     'DspM': 'DisplacementMap',
//     'DspP': 'DisplayPrefs',
//     'Dstn': 'Distance',
//     // 'Dstr': 'Distortion',
//     // 'Dstr': 'Distribution',
//     'Dthr': 'Dither',
//     'DthA': 'DitherAmount',
//     'Dthp': 'DitherPreserve',
//     'Dthq': 'DitherQuality',
//     'DocI': 'DocumentID',
//     'DtGn': 'DotGain',
//     'DtGC': 'DotGainCurves',
//     'DrSh': 'DropShadow',
//     'Dplc': 'Duplicate',
//     'DnmC': 'DynamicColorSliders',
//     'Edg ': 'Edge',
//     'EdgB': 'EdgeBrightness',
//     'EdgF': 'EdgeFidelity',
//     'EdgI': 'EdgeIntensity',
//     'EdgS': 'EdgeSimplicity',
//     'EdgT': 'EdgeThickness',
//     'EdgW': 'EdgeWidth',
//     'Effc': 'Effect',
//     'EmbC': 'EmbedCMYK',
//     'EmbG': 'EmbedGray',
//     'EmbL': 'EmbedLab',
//     'EmbP': 'EmbedProfiles',
//     'EmbR': 'EmbedRGB',
//     'EmlD': 'EmulsionDown',
//     'EGst': 'EnableGestures',
//     'enab': 'Enabled',
//     'Encd': 'Encoding',
//     'End ': 'End',
//     'EndA': 'EndArrowhead',
//     'EndR': 'EndRamp',
//     'EndS': 'EndSustain',
//     'Engn': 'Engine',
//     'ErsT': 'EraseToHistory',
//     'ErsK': 'EraserKind',
//     'ExcP': 'ExactPoints',
//     'Expr': 'Export',
//     'ExpC': 'ExportClipboard',
//     'Exps': 'Exposure',
//     'Extd': 'Extend',
//     'EQlt': 'ExtendedQuality',
//     'Extn': 'Extension',
//     'ExtQ': 'ExtensionsQuery',
//     'ExtD': 'ExtrudeDepth',
//     'ExtM': 'ExtrudeMaskIncomplete',
//     'ExtR': 'ExtrudeRandom',
//     'ExtS': 'ExtrudeSize',
//     'ExtF': 'ExtrudeSolidFace',
//     'ExtT': 'ExtrudeType',
//     'EyDr': 'EyeDropperSample',
//     'FxCm': 'FPXCompress',
//     'FxQl': 'FPXQuality',
//     'FxSz': 'FPXSize',
//     'FxVw': 'FPXView',
//     'FdT ': 'FadeTo',
//     'FdtS': 'FadeoutSteps',
//     'FlOf': 'Falloff',
//     'Fthr': 'Feather',
//     'FbrL': 'FiberLength',
//     'File': 'File',
//     'FlCr': 'FileCreator',
//     'FlIn': 'FileInfo',
//     'FilR': 'FileReference',
//     'FlSP': 'FileSavePrefs',
//     'FlTy': 'FileType',
//     'flst': 'FilesList',
//     'Fl  ': 'Fill',
//     'FlCl': 'FillColor',
//     'FlNt': 'FillNeutral',
//     'FlPd': 'FilterLayerPersistentData',
//     'FlRs': 'FilterLayerRandomSeed',
//     'Fngr': 'Fingerpainting',
//     'FlrC': 'FlareCenter',
//     'Fltn': 'Flatness',
//     'Fltt': 'Flatten',
//     'FlpV': 'FlipVertical',
//     'Fcs ': 'Focus',
//     'Fldr': 'Folders',
//     'FntD': 'FontDesignAxes',
//     'FntV': 'FontDesignAxesVectors',
//     'FntN': 'FontName',
//     'Scrp': 'FontScript',
//     'FntS': 'FontStyleName',
//     'FntT': 'FontTechnology',
//     'FrcC': 'ForcedColors',
//     'FrgC': 'ForegroundColor',
//     'FrgL': 'ForegroundLevel',
//     'Fmt ': 'Format',
//     'Fwd ': 'Forward',
//     'FrFX': 'FrameFX',
//     'FrmW': 'FrameWidth',
//     'FTcs': 'FreeTransformCenterState',
//     'Frqn': 'Frequency',
//     'From': 'From',
//     'FrmB': 'FromBuiltin',
//     'FrmM': 'FromMode',
//     'FncK': 'FunctionKey',
//     'Fzns': 'Fuzziness',
//     'GCR ': 'GCR',
//     'GFPT': 'GIFColorFileType',
//     'GFCL': 'GIFColorLimit',
//     'GFEC': 'GIFExportCaption',
//     'GFMI': 'GIFMaskChannelIndex',
//     'GFMV': 'GIFMaskChannelInverted',
//     'GFPF': 'GIFPaletteFile',
//     'GFPL': 'GIFPaletteType',
//     'GFCS': 'GIFRequiredColorSpaceType',
//     'GFIT': 'GIFRowOrderType',
//     'GFTC': 'GIFTransparentColor',
//     'GFTB': 'GIFTransparentIndexBlue',
//     'GFTG': 'GIFTransparentIndexGreen',
//     'GFTR': 'GIFTransparentIndexRed',
//     'GFBM': 'GIFUseBestMatch',
//     'Gmm ': 'Gamma',
//     'GmtW': 'GamutWarning',
//     'GnrP': 'GeneralPrefs',
//     'gblA': 'GlobalAngle',
//     'gagl': 'GlobalLightingAngle',
//     'Glos': 'Gloss',
//     'GlwA': 'GlowAmount',
//     'GlwT': 'GlowTechnique',
//     'Grad': 'Gradient',
//     'Grdf': 'GradientFill',
//     // 'Grn ': 'Grain',
//     'Grnt': 'GrainType',
//     'Grns': 'Graininess',
//     'Gry ': 'Gray',
//     'GrBh': 'GrayBehavior',
//     'GrSt': 'GraySetup',
//     'Grn ': 'Green',
//     'GrnB': 'GreenBlackPoint',
//     'greenFloat': 'GreenFloat',
//     'GrnG': 'GreenGamma',
//     'GrnW': 'GreenWhitePoint',
//     'GrnX': 'GreenX',
//     'GrnY': 'GreenY',
//     'GrdC': 'GridColor',
//     'Grds': 'GridCustomColor',
//     'GrdM': 'GridMajor',
//     'Grdn': 'GridMinor',
//     'GrdS': 'GridStyle',
//     'Grdt': 'GridUnits',
//     'Grup': 'Group',
//     'GrtW': 'GroutWidth',
//     'GrwS': 'GrowSelection',
//     'Gdes': 'Guides',
//     'GdsC': 'GuidesColor',
//     'Gdss': 'GuidesCustomColor',
//     'GdPr': 'GuidesPrefs',
//     'GdsS': 'GuidesStyle',
//     'GttW': 'GutterWidth',
//     'HlfF': 'HalftoneFile',
//     'HlfS': 'HalftoneScreen',
//     'HlSz': 'HalftoneSize',
//     'Hlfp': 'HalftoneSpec',
//     'Hrdn': 'Hardness',
//     'HCdH': 'HasCmdHPreference',
//     'Hdr ': 'Header',
//     'Hdln': 'Headline',
//     'Hght': 'Height',
//     'HghA': 'HighlightArea',
//     'hglC': 'HighlightColor',
//     'HghL': 'HighlightLevels',
//     'hglM': 'HighlightMode',
//     'hglO': 'HighlightOpacity',
//     'HghS': 'HighlightStrength',
//     'HstB': 'HistoryBrushSource',
//     'HstP': 'HistoryPrefs',
//     'HsSS': 'HistoryStateSource',
//     'HsSt': 'HistoryStates',
//     'Hrzn': 'Horizontal',
//     'HrzS': 'HorizontalScale',
//     'HstN': 'HostName',
//     'HstV': 'HostVersion',
//     'H   ': 'Hue',
//     'ICCE': 'ICCEngine',
//     'ICCt': 'ICCSetupName',
//     'Idnt': 'ID',
//     'Idle': 'Idle',
//     'ImgB': 'ImageBalance',
//     'Impr': 'Import',
//     'Imps': 'Impressionist',
//     'In  ': 'In',
//     'c@#^': 'Inherits',
//     'InkC': 'InkColors',
//     'Inks': 'Inks',
//     'IrGl': 'InnerGlow',
//     'glwS': 'InnerGlowSource',
//     'IrSh': 'InnerShadow',
//     'Inpt': 'Input',
//     'kIBP': 'InputBlackPoint',
//     'Inmr': 'InputMapRange',
//     'Inpr': 'InputRange',
//     'kIWP': 'InputWhitePoint',
//     'Intn': 'Intensity',
//     'Inte': 'Intent',
//     'IntH': 'InterfaceBevelHighlight',
//     'Intv': 'InterfaceBevelShadow',
//     'IntB': 'InterfaceBlack',
//     'Intd': 'InterfaceBorder',
//     'Intk': 'InterfaceButtonDarkShadow',
//     'Intt': 'InterfaceButtonDownFill',
//     'InBF': 'InterfaceButtonUpFill',
//     'ICBL': 'InterfaceColorBlue2',
//     'ICBH': 'InterfaceColorBlue32',
//     'ICGL': 'InterfaceColorGreen2',
//     'ICGH': 'InterfaceColorGreen32',
//     'ICRL': 'InterfaceColorRed2',
//     'ICRH': 'InterfaceColorRed32',
//     'IntI': 'InterfaceIconFillActive',
//     'IntF': 'InterfaceIconFillDimmed',
//     'Intc': 'InterfaceIconFillSelected',
//     'Intm': 'InterfaceIconFrameActive',
//     // 'Intr': 'InterfaceIconFrameDimmed',
//     'IntS': 'InterfaceIconFrameSelected',
//     'IntP': 'InterfacePaletteFill',
//     'IntR': 'InterfaceRed',
//     'IntT': 'InterfaceToolTipBackground',
//     'ITTT': 'InterfaceToolTipText',
//     'ITBg': 'InterfaceTransparencyBackground',
//     'ITFg': 'InterfaceTransparencyForeground',
//     'IntW': 'InterfaceWhite',
//     // 'Intr': 'Interlace',
//     'IntC': 'InterlaceCreateType',
//     'IntE': 'InterlaceEliminateType',
//     // 'Intr': 'Interpolation',
//     'IntM': 'InterpolationMethod',
//     'Invr': 'Invert',
//     'InvM': 'InvertMask',
//     'InvS': 'InvertSource2',
//     'InvT': 'InvertTexture',
//     'IsDr': 'IsDirty',
//     'ItmI': 'ItemIndex',
//     'JPEQ': 'JPEGQuality',
//     'Krng': 'Kerning',
//     'Kywd': 'Keywords',
//     'Knd ': 'Kind',
//     'LTnm': 'LUTAnimation',
//     'LZWC': 'LZWCompression',
//     'Lbls': 'Labels',
//     'Lnds': 'Landscape',
//     'LstT': 'LastTransform',
//     'Lyr ': 'Layer',
//     'Lefx': 'LayerEffects',
//     'lfxv': 'LayerFXVisible',
//     'LyrI': 'LayerID',
//     'LyrN': 'LayerName',
//     'Lyrs': 'Layers',
//     'Ldng': 'Leading',
//     'Left': 'Left',
//     'lSNs': 'LegacySerialString',
//     // 'Lngt': 'Length',
//     'Lns ': 'Lens',
//     'Lvl ': 'Level',
//     'Lvls': 'Levels',
//     'LgDr': 'LightDark',
//     'LghD': 'LightDirection',
//     'LghI': 'LightIntensity',
//     'LghP': 'LightPosition',
//     'LghS': 'LightSource',
//     'LghT': 'LightType',
//     'LghG': 'LightenGrout',
//     'Lght': 'Lightness',
//     'Line': 'Line',
//     'lnkE': 'LinkEnable',
//     'LnkL': 'LinkedLayerIDs',
//     'Lald': 'LocalLightingAltitude',
//     'lagl': 'LocalLightingAngle',
//     'LclR': 'LocalRange',
//     'Lctn': 'Location',
//     'Log ': 'Log',
//     'kLog': 'Logarithmic',
//     'LwCs': 'LowerCase',
//     'Lmnc': 'Luminance',
//     'Mgnt': 'Magenta',
//     'MkVs': 'MakeVisible',
//     'Mfov': 'ManipulationFOV',
//     'MpBl': 'MapBlack',
//     'Mpng': 'Mapping',
//     'MpgS': 'MappingShape',
//     'Mtrl': 'Material',
//     'Mtrx': 'Matrix',
//     'MttC': 'MatteColor',
//     'Mxm ': 'Maximum',
//     'MxmS': 'MaximumStates',
//     'MmrU': 'MemoryUsagePercent',
//     'Mrge': 'Merge',
//     'Mrgd': 'Merged',
//     'Msge': 'Message',
//     'Mthd': 'Method',
//     'MztT': 'MezzotintType',
//     'Mdpn': 'Midpoint',
//     'MdtL': 'MidtoneLevels',
//     'Mnm ': 'Minimum',
//     'MsmC': 'MismatchCMYK',
//     'MsmG': 'MismatchGray',
//     'MsmR': 'MismatchRGB',
//     'Md  ': 'Mode',
//     'Mnch': 'Monochromatic',
//     'MvT ': 'MoveTo',
//     'Nm  ': 'Name',
//     'Ngtv': 'Negative',
//     'Nw  ': 'New',
//     'Nose': 'Noise',
//     'NnIm': 'NonImageData',
//     'NnLn': 'NonLinear',
//     'null': 'Null',
//     'Nm L': 'NumLights',
//     'Nmbr': 'Number',
//     'NCch': 'NumberOfCacheLevels',
//     'NC64': 'NumberOfCacheLevels64',
//     'NmbO': 'NumberOfChannels',
//     'NmbC': 'NumberOfChildren',
//     'NmbD': 'NumberOfDocuments',
//     'NmbG': 'NumberOfGenerators',
//     // 'NmbL': 'NumberOfLayers',
//     // 'NmbL': 'NumberOfLevels',
//     'NmbP': 'NumberOfPaths',
//     'NmbR': 'NumberOfRipples',
//     'NmbS': 'NumberOfSiblings',
//     'ObjN': 'ObjectName',
//     'Ofst': 'Offset',
//     'Sftt': 'OldSmallFontType',
//     'On  ': 'On',
//     'Opct': 'Opacity',
//     'Optm': 'Optimized',
//     'Ornt': 'Orientation',
//     'OrgH': 'OriginalHeader',
//     'OrgT': 'OriginalTransmissionReference',
//     'OthC': 'OtherCursors',
//     'OrGl': 'OuterGlow',
//     'Otpt': 'Output',
//     'kOBP': 'OutputBlackPoint',
//     'kOWP': 'OutputWhitePoint',
//     'OvrC': 'OverprintColors',
//     'OvrO': 'OverrideOpen',
//     'ObrP': 'OverridePrinter',
//     'Ovrd': 'OverrideSave',
//     'PNGf': 'PNGFilter',
//     'PGIT': 'PNGInterlaceType',
//     'PMpf': 'PageFormat',
//     'PgNm': 'PageNumber',
//     'PgPs': 'PagePosition',
//     'PgSt': 'PageSetup',
//     'PnCK': 'PaintCursorKind',
//     'PntT': 'PaintType',
//     'PntC': 'PaintingCursors',
//     'Plt ': 'Palette',
//     'PltF': 'PaletteFile',
//     'PprB': 'PaperBrightness',
//     'PrIn': 'ParentIndex',
//     'PrNm': 'ParentName',
//     'Path': 'Path',
//     'PthC': 'PathContents',
//     'PthN': 'PathName',
//     'Pttn': 'Pattern',
//     'Pncl': 'PencilWidth',
//     'Prsp': 'PerspectiveIndex',
//     'Phsp': 'Phosphors',
//     'PckI': 'PickerID',
//     'Pckr': 'PickerKind',
//     'PPSz': 'PixelPaintSize',
//     'Pltf': 'Platform',
//     'PlgF': 'PluginFolder',
//     'PlgP': 'PluginPrefs',
//     'Pts ': 'Points',
//     'Pstn': 'Position',
//     'PstS': 'PostScriptColor',
//     'Pstr': 'Posterization',
//     'PrdC': 'PredefinedColors',
//     'PrfB': 'PreferBuiltin',
//     'Prfr': 'Preferences',
//     'PrsA': 'PreserveAdditional',
//     'PrsL': 'PreserveLuminosity',
//     'PrsT': 'PreserveTransparency',
//     'Prs ': 'Pressure',
//     'Prvw': 'Preview',
//     'PrvK': 'PreviewCMYK',
//     'PrvF': 'PreviewFullSize',
//     'PrvI': 'PreviewIcon',
//     'PrvM': 'PreviewMacThumbnail',
//     'PrvW': 'PreviewWinThumbnail',
//     'PrvQ': 'PreviewsQuery',
//     'PMps': 'PrintSettings',
//     'PrfS': 'ProfileSetup',
//     'PrvS': 'ProvinceState',
//     'Qlty': 'Quality',
//     'QucM': 'QuickMask',
//     'RGBS': 'RGBSetup',
//     'Rds ': 'Radius',
//     'RndS': 'RandomSeed',
//     'Rt  ': 'Ratio',
//     'Rcnf': 'RecentFiles',
//     'Rd  ': 'Red',
//     'RdBl': 'RedBlackPoint',
//     'redFloat': 'RedFloat',
//     'RdGm': 'RedGamma',
//     'RdWh': 'RedWhitePoint',
//     'RdX ': 'RedX',
//     'RdY ': 'RedY',
//     'RgsM': 'RegistrationMarks',
//     'Rltv': 'Relative',
//     'Rlf ': 'Relief',
//     'Rfid': 'RenderFidelity',
//     'Rsmp': 'Resample',
//     'RWOZ': 'ResizeWindowsOnZoom',
//     'Rslt': 'Resolution',
//     'RsrI': 'ResourceID',
//     'Rspn': 'Response',
//     'RtnH': 'RetainHeader',
//     'Rvrs': 'Reverse',
//     'Rght': 'Right',
//     'RplM': 'RippleMagnitude',
//     'RplS': 'RippleSize',
//     'Rtt ': 'Rotate',
//     'Rndn': 'Roundness',
//     'RlrH': 'RulerOriginH',
//     'RlrV': 'RulerOriginV',
//     'RlrU': 'RulerUnits',
//     // 'Strt': 'Saturation',
//     'SvAn': 'SaveAndClose',
//     'SvCm': 'SaveComposite',
//     'PltL': 'SavePaletteLocations',
//     'SvPt': 'SavePaths',
//     'SvPy': 'SavePyramids',
//     'Svng': 'Saving',
//     'Scl ': 'Scale',
//     'SclH': 'ScaleHorizontal',
//     'SclV': 'ScaleVertical',
//     'Scln': 'Scaling',
//     'Scns': 'Scans',
//     'ScrD': 'ScratchDisks',
//     'ScrF': 'ScreenFile',
//     'ScrT': 'ScreenType',
//     'Sprt': 'Separations',
//     'SrlS': 'SerialString',
//     // 'ShdI': 'ShadingIntensity',
//     'ShdN': 'ShadingNoise',
//     'ShdS': 'ShadingShape',
//     'sdwC': 'ShadowColor',
//     // 'ShdI': 'ShadowIntensity',
//     'ShdL': 'ShadowLevels',
//     'sdwM': 'ShadowMode',
//     'sdwO': 'ShadowOpacity',
//     'Shp ': 'Shape',
//     'Shrp': 'Sharpness',
//     'ShrE': 'ShearEd',
//     'ShrP': 'ShearPoints',
//     'ShrS': 'ShearSt',
//     'ShfK': 'ShiftKey',
//     'ShKT': 'ShiftKeyToolSwitch',
//     'ShrN': 'ShortNames',
//     'ShwE': 'ShowEnglishFontNames',
//     'SwMC': 'ShowMenuColors',
//     'ShwT': 'ShowToolTips',
//     'ShTr': 'ShowTransparency',
//     'Sz  ': 'SizeKey',
//     'Skew': 'Skew',
//     'Sfts': 'SmallFontType',
//     'SmBM': 'SmartBlurMode',
//     'SmBQ': 'SmartBlurQuality',
//     'Smoo': 'Smooth',
//     'Smth': 'Smoothness',
//     'SnpI': 'SnapshotInitial',
//     'SfCl': 'SoftClip',
//     'Sftn': 'Softness',
//     'SoFi': 'SolidFill',
//     'Srce': 'Source',
//     'Src2': 'Source2',
//     'SrcM': 'SourceMode',
//     'Spcn': 'Spacing',
//     'SpcI': 'SpecialInstructions',
//     'SphM': 'SpherizeMode',
//     'Spot': 'Spot',
//     'SprR': 'SprayRadius',
//     'SqrS': 'SquareSize',
//     'Srcl': 'SrcBlackMax',
//     'SrcB': 'SrcBlackMin',
//     'Srcm': 'SrcWhiteMax',
//     'SrcW': 'SrcWhiteMin',
//     // 'Strt': 'Start',
//     'StrA': 'StartArrowhead',
//     'Stte': 'State',
//     'srgh': 'Strength',
//     'srgR': 'StrengthRatio',
//     'Strg': 'Strength_PLUGIN',
//     'StDt': 'StrokeDetail',
//     'SDir': 'StrokeDirection',
//     'StrL': 'StrokeLength',
//     'StrP': 'StrokePressure',
//     'StrS': 'StrokeSize',
//     'StrW': 'StrokeWidth',
//     'Styl': 'Style',
//     'Stys': 'Styles',
//     'StlC': 'StylusIsColor',
//     'StlO': 'StylusIsOpacity',
//     'StlP': 'StylusIsPressure',
//     'StlS': 'StylusIsSize',
//     'SbpL': 'SubPathList',
//     'SplC': 'SupplementalCategories',
//     'SstI': 'SystemInfo',
//     'SstP': 'SystemPalette',
//     // 'null': 'Target',
//     'Trgp': 'TargetPath',
//     'TrgP': 'TargetPathIndex',
//     // 'Lngt': 'TermLength',
//     'Txt ': 'Text',
//     // 'TxtC': 'TextClickPoint',
//     'TxtD': 'TextData',
//     'TxtS': 'TextStyle',
//     'Txtt': 'TextStyleRange',
//     'Txtr': 'Texture',
//     // 'TxtC': 'TextureCoverage',
//     'TxtF': 'TextureFile',
//     'TxtT': 'TextureType',
//     'Thsh': 'Threshold',
//     'TlNm': 'TileNumber',
//     'TlOf': 'TileOffset',
//     'TlSz': 'TileSize',
//     'Ttl ': 'Title',
//     'T   ': 'To',
//     'TBl ': 'ToBuiltin',
//     'ToLk': 'ToLinked',
//     'TMd ': 'ToMode',
//     'TglO': 'ToggleOthers',
//     'Tlrn': 'Tolerance',
//     'Top ': 'Top',
//     'TtlL': 'TotalLimit',
//     'Trck': 'Tracking',
//     'TrnF': 'TransferFunction',
//     // 'TrnS': 'TransferSpec',
//     'Trns': 'Transparency',
//     // 'TrnG': 'TransparencyGrid',
//     'TrnC': 'TransparencyGridColors',
//     // 'TrnG': 'TransparencyGridSize',
//     'TrnP': 'TransparencyPrefs',
//     // 'TrnS': 'TransparencyShape',
//     'TrnI': 'TransparentIndex',
//     'TrnW': 'TransparentWhites',
//     'Twst': 'Twist',
//     'Type': 'Type',
//     'UC  ': 'UCA',
//     'URL ': 'URL',
//     'UndA': 'UndefinedArea',
//     'Undl': 'Underline',
//     'UntP': 'UnitsPrefs',
//     'Untl': 'Untitled',
//     'UppY': 'UpperY',
//     'Urgn': 'Urgency',
//     'AcrS': 'UseAccurateScreens',
//     'AdPl': 'UseAdditionalPlugins',
//     'UsCc': 'UseCacheForHistograms',
//     'UsCr': 'UseCurves',
//     'UsDf': 'UseDefault',
//     'uglg': 'UseGlobalAngle',
//     'UsIC': 'UseICCProfile',
//     'UsMs': 'UseMask',
//     'UsrM': 'UserMaskEnabled',
//     'Usrs': 'UserMaskLinked',
//     'Usng': 'Using',
//     'Vl  ': 'Value',
//     'Vrnc': 'Variance',
//     'Vct0': 'Vector0',
//     'Vct1': 'Vector1',
//     'VctC': 'VectorColor',
//     'VrsF': 'VersionFix',
//     'VrsM': 'VersionMajor',
//     'VrsN': 'VersionMinor',
//     'Vrtc': 'Vertical',
//     'VrtS': 'VerticalScale',
//     'Vdlp': 'VideoAlpha',
//     'Vsbl': 'Visible',
//     'WtcS': 'WatchSuspension',
//     'watr': 'Watermark',
//     'Wvtp': 'WaveType',
//     'WLMx': 'WavelengthMax',
//     'WLMn': 'WavelengthMin',
//     'WbdP': 'WebdavPrefs',
//     'Wtdg': 'WetEdges',
//     'What': 'What',
//     'WhtC': 'WhiteClip',
//     'WhtI': 'WhiteIntensity',
//     'WhHi': 'WhiteIsHigh',
//     'WhtL': 'WhiteLevel',
//     'WhtP': 'WhitePoint',
//     'WhPt': 'WholePath',
//     'Wdth': 'Width',
//     'WndM': 'WindMethod',
//     'With': 'With',
//     'WrPt': 'WorkPath',
//     'WrkP': 'WorkPathIndex',
//     'X   ': 'X',
//     'Y   ': 'Y',
//     'Ylw ': 'Yellow',
//     'ZZTy': 'ZigZagType',
//     'Alis': '_3DAntiAlias',
// };


/***/ }),

/***/ "./node_modules/exifreader/src/photoshop-tags.js":
/*!*******************************************************!*\
  !*** ./node_modules/exifreader/src/photoshop-tags.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* harmony import */ var _photoshop_tag_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoshop-tag-names.js */ "./node_modules/exifreader/src/photoshop-tag-names.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Specification: https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/





/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

const SIGNATURE = '8BIM';
const TAG_ID_SIZE = 2;
const RESOURCE_LENGTH_SIZE = 4;

const SIGNATURE_SIZE = SIGNATURE.length;

function read(bytes, includeUnknown) {
    const dataView = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getDataView)(new Uint8Array(bytes).buffer);
    const tags = {};
    let offset = 0;

    while (offset < bytes.length) {
        const signature = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, offset, SIGNATURE_SIZE);
        offset += SIGNATURE_SIZE;
        const tagId = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getShortAt(dataView, offset);
        offset += TAG_ID_SIZE;
        const {tagName, tagNameSize} = getTagName(dataView, offset);
        offset += tagNameSize;
        const resourceSize = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLongAt(dataView, offset);
        offset += RESOURCE_LENGTH_SIZE;
        if (signature === SIGNATURE) {
            const valueDataView = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getDataView)(dataView.buffer, offset, resourceSize);
            const tag = {
                id: tagId,
                value: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(valueDataView, 0, resourceSize),
            };
            if (_photoshop_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][tagId]) {
                try {
                    tag.description = _photoshop_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][tagId].description(valueDataView);
                } catch (error) {
                    tag.description = '<no description formatter>';
                }
                tags[tagName ? tagName : _photoshop_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][tagId].name] = tag;
            } else if (includeUnknown) {
                tags[`undefined-${tagId}`] = tag;
            }
        }
        offset += resourceSize + (resourceSize % 2);
    }

    return tags;
}

function getTagName(dataView, offset) {
    // The name is encoded as a Pascal string (the string is prefixed with one
    // byte containing the length of the string) and everything is padded with a
    // null byte to make the size even.
    const [stringSize, string] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getPascalStringFromDataView)(dataView, offset);
    return {
        tagName: string,
        tagNameSize: 1 + stringSize + (stringSize % 2 === 0 ? 1 : 0)
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/png-file-tags.js":
/*!******************************************************!*\
  !*** ./node_modules/exifreader/src/png-file-tags.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, fileDataOffset) {
    return {
        'Image Width': getImageWidth(dataView, fileDataOffset),
        'Image Height': getImageHeight(dataView, fileDataOffset),
        'Bit Depth': getBitDepth(dataView, fileDataOffset),
        'Color Type': getColorType(dataView, fileDataOffset),
        'Compression': getCompression(dataView, fileDataOffset),
        'Filter': getFilter(dataView, fileDataOffset),
        'Interlace': getInterlace(dataView, fileDataOffset)
    };
}

function getImageWidth(dataView, fileDataOffset) {
    const OFFSET = 0;
    const SIZE = 4;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, fileDataOffset);
    return {
        value,
        description: `${value}px`
    };
}

function getImageHeight(dataView, fileDataOffset) {
    const OFFSET = 4;
    const SIZE = 4;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getBitDepth(dataView, fileDataOffset) {
    const OFFSET = 8;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}`
    };
}

function getColorType(dataView, fileDataOffset) {
    const OFFSET = 9;
    const SIZE = 1;
    const COLOR_TYPES = {
        0: 'Grayscale',
        2: 'RGB',
        3: 'Palette',
        4: 'Grayscale with Alpha',
        6: 'RGB with Alpha'
    };

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: COLOR_TYPES[value] || 'Unknown'
    };
}

function getCompression(dataView, fileDataOffset) {
    const OFFSET = 10;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: value === 0 ? 'Deflate/Inflate' : 'Unknown'
    };
}

function getFilter(dataView, fileDataOffset) {
    const OFFSET = 11;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: value === 0 ? 'Adaptive' : 'Unknown'
    };
}

function getInterlace(dataView, fileDataOffset) {
    const OFFSET = 12;
    const SIZE = 1;
    const INTERLACE_TYPES = {
        0: 'Noninterlaced',
        1: 'Adam7 Interlace'
    };

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: INTERLACE_TYPES[value] || 'Unknown'
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/png-tags.js":
/*!*************************************************!*\
  !*** ./node_modules/exifreader/src/png-tags.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* harmony import */ var _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-header-png.js */ "./node_modules/exifreader/src/image-header-png.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, chunkOffsets) {
    const tags = {};

    for (let i = 0; i < chunkOffsets.length; i++) {
        const chunkLength = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, chunkOffsets[i] + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_LENGTH_OFFSET);
        const chunkType = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStringFromDataView)(dataView, chunkOffsets[i] + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_TYPE_OFFSET, _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_TYPE_SIZE);

        if (chunkType === _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_PHYS) {
            tags['Pixels Per Unit X'] = getPixelsPerUnitX(dataView, chunkOffsets[i], chunkLength);
            tags['Pixels Per Unit Y'] = getPixelsPerUnitY(dataView, chunkOffsets[i], chunkLength);
            tags['Pixel Units'] = getPixelUnits(dataView, chunkOffsets[i], chunkLength);
        } else if (chunkType === _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_TIME) {
            tags['Modify Date'] = getModifyDate(dataView, chunkOffsets[i], chunkLength);
        }
    }

    return tags;
}

function getPixelsPerUnitX(dataView, chunkOffset, chunkLength) {
    const TAG_OFFSET = 0;
    const TAG_SIZE = 4;

    if (!tagFitsInBuffer(dataView, chunkOffset, chunkLength, TAG_OFFSET, TAG_SIZE)) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + TAG_OFFSET);

    return {
        value,
        description: '' + value
    };
}

function getPixelsPerUnitY(dataView, chunkOffset, chunkLength) {
    const TAG_OFFSET = 4;
    const TAG_SIZE = 4;

    if (!tagFitsInBuffer(dataView, chunkOffset, chunkLength, TAG_OFFSET, TAG_SIZE)) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + TAG_OFFSET);

    return {
        value,
        description: '' + value
    };
}

function getPixelUnits(dataView, chunkOffset, chunkLength) {
    const TAG_OFFSET = 8;
    const TAG_SIZE = 1;

    if (!tagFitsInBuffer(dataView, chunkOffset, chunkLength, TAG_OFFSET, TAG_SIZE)) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + TAG_OFFSET);

    return {
        value,
        description: value === 1 ? 'meters' : 'Unknown'
    };
}

function getModifyDate(dataView, chunkOffset, chunkLength) {
    const TIME_TAG_SIZE = 7;

    if (!tagFitsInBuffer(dataView, chunkOffset, chunkLength, 0, TIME_TAG_SIZE)) {
        return undefined;
    }

    const year = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET);
    const month = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + 2);
    const day = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + 3);
    const hours = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + 4);
    const minutes = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + 5);
    const seconds = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + 6);

    return {
        value: [year, month, day, hours, minutes, seconds],
        description: `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)} ${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`
    };
}

function tagFitsInBuffer(dataView, chunkOffset, chunkLength, tagOffset, tagSize) {
    return tagOffset + tagSize <= chunkLength && chunkOffset + _image_header_png_js__WEBPACK_IMPORTED_MODULE_1__.PNG_CHUNK_DATA_OFFSET + tagOffset + tagSize <= dataView.byteLength;
}

function pad(number, size) {
    return `${'0'.repeat(size - ('' + number).length)}${number}`;
}


/***/ }),

/***/ "./node_modules/exifreader/src/png-text-tags.js":
/*!******************************************************!*\
  !*** ./node_modules/exifreader/src/png-text-tags.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-decoder.js */ "./node_modules/exifreader/src/tag-decoder.js");
/* harmony import */ var _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-header-png.js */ "./node_modules/exifreader/src/image-header-png.js");
/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.js */ "./node_modules/exifreader/src/tags.js");
/* harmony import */ var _iptc_tags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iptc-tags.js */ "./node_modules/exifreader/src/iptc-tags.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Specification: http://www.libpng.org/pub/png/spec/1.2/








/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

const STATE_KEYWORD = 'STATE_KEYWORD';
const STATE_COMPRESSION = 'STATE_COMPRESSION';
const STATE_LANG = 'STATE_LANG';
const STATE_TRANSLATED_KEYWORD = 'STATE_TRANSLATED_KEYWORD';
const STATE_TEXT = 'STATE_TEXT';
const COMPRESSION_SECTION_ITXT_EXTRA_BYTE = 1;
const COMPRESSION_FLAG_COMPRESSED = 1;
const EXIF_OFFSET = 6;

function read(dataView, pngTextChunks, async, includeUnknown) {
    const tags = {};
    const tagsPromises = [];
    for (let i = 0; i < pngTextChunks.length; i++) {
        const {offset, length, type} = pngTextChunks[i];
        const nameAndValue = getNameAndValue(dataView, offset, length, type, async);
        if (nameAndValue instanceof Promise) {
            tagsPromises.push(nameAndValue.then(({name, value, description}) => {
                try {
                    if (_constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].USE_EXIF && isExifGroupTag(name, value)) {
                        return {
                            __exif: _tags_js__WEBPACK_IMPORTED_MODULE_3__["default"].read(decodeRawData(value), EXIF_OFFSET, includeUnknown).tags
                        };
                    } else if (_constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].USE_IPTC && isIptcGroupTag(name, value)) {
                        return {
                            __iptc: _iptc_tags_js__WEBPACK_IMPORTED_MODULE_4__["default"].read(decodeRawData(value), 0, includeUnknown)
                        };
                    } else if (name && !isExifGroupTag(name, value) && !isIptcGroupTag(name, value)) {
                        return {
                            [name]: {
                                value,
                                description
                            }
                        };
                    }
                } catch (error) {
                    // Ignore the broken tag.
                }
                return {};
            }));
        } else {
            const {name, value, description} = nameAndValue;
            if (name) {
                tags[name] = {
                    value,
                    description
                };
            }
        }
    }

    return {
        readTags: tags,
        readTagsPromise: tagsPromises.length > 0 ? Promise.all(tagsPromises) : undefined
    };
}

function getNameAndValue(dataView, offset, length, type, async) {
    const keywordChars = [];
    const langChars = [];
    const translatedKeywordChars = [];
    let valueChars;
    let parsingState = STATE_KEYWORD;
    let compressionMethod = _utils_js__WEBPACK_IMPORTED_MODULE_0__.COMPRESSION_METHOD_NONE;

    for (let i = 0; i < length && offset + i < dataView.byteLength; i++) {
        if (parsingState === STATE_COMPRESSION) {
            compressionMethod = getCompressionMethod({type, dataView, offset: offset + i});
            if (type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ITXT) {
                i += COMPRESSION_SECTION_ITXT_EXTRA_BYTE;
            }
            parsingState = moveToNextState(type, parsingState);
            continue;
        } else if (parsingState === STATE_TEXT) {
            valueChars = new DataView(dataView.buffer.slice(offset + i, offset + length));
            break;
        }
        const byte = dataView.getUint8(offset + i);
        if (byte === 0) {
            parsingState = moveToNextState(type, parsingState);
        } else if (parsingState === STATE_KEYWORD) {
            keywordChars.push(byte);
        } else if (parsingState === STATE_LANG) {
            langChars.push(byte);
        } else if (parsingState === STATE_TRANSLATED_KEYWORD) {
            translatedKeywordChars.push(byte);
        }
    }

    if (compressionMethod !== _utils_js__WEBPACK_IMPORTED_MODULE_0__.COMPRESSION_METHOD_NONE && !async) {
        return {};
    }
    const decompressedValueChars = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.decompress)(valueChars, compressionMethod, getEncodingFromType(type));
    if (decompressedValueChars instanceof Promise) {
        return decompressedValueChars
            .then((_decompressedValueChars) => constructTag(_decompressedValueChars, type, langChars, keywordChars))
            .catch(() => constructTag('<text using unknown compression>'.split(''), type, langChars, keywordChars));
    }
    return constructTag(decompressedValueChars, type, langChars, keywordChars);
}

function getCompressionMethod({type, dataView, offset}) {
    if (type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ITXT) {
        if (dataView.getUint8(offset) === COMPRESSION_FLAG_COMPRESSED) {
            return dataView.getUint8(offset + 1);
        }
    } else if (type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ZTXT) {
        return dataView.getUint8(offset);
    }
    return _utils_js__WEBPACK_IMPORTED_MODULE_0__.COMPRESSION_METHOD_NONE;
}

function moveToNextState(type, parsingState) {
    if (parsingState === STATE_KEYWORD && [_image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ITXT, _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ZTXT].includes(type)) {
        return STATE_COMPRESSION;
    }
    if (parsingState === STATE_COMPRESSION) {
        if (type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ITXT) {
            return STATE_LANG;
        }
        return STATE_TEXT;
    }
    if (parsingState === STATE_LANG) {
        return STATE_TRANSLATED_KEYWORD;
    }
    return STATE_TEXT;
}

function getEncodingFromType(type) {
    if (type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_TEXT || type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ZTXT) {
        return 'latin1';
    }
    return 'utf-8';
}

function constructTag(valueChars, type, langChars, keywordChars) {
    const value = getValue(valueChars);
    return {
        name: getName(type, langChars, keywordChars),
        value,
        description: type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_ITXT ? getDescription(valueChars) : value
    };
}

function getName(type, langChars, keywordChars) {
    const name = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValueFromArray)(keywordChars);
    if (type === _image_header_png_js__WEBPACK_IMPORTED_MODULE_2__.TYPE_TEXT || langChars.length === 0) {
        return name;
    }
    const lang = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValueFromArray)(langChars);
    return `${name} (${lang})`;
}

function getValue(valueChars) {
    if (valueChars instanceof DataView) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(valueChars, 0, valueChars.byteLength);
    }
    return valueChars;
}

function getDescription(valueChars) {
    return _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__["default"].decode('UTF-8', valueChars);
}

function isExifGroupTag(name, value) {
    return name.toLowerCase() === 'raw profile type exif' && value.substring(1, 5) === 'exif';
}

function isIptcGroupTag(name, value) {
    return name.toLowerCase() === 'raw profile type iptc' && value.substring(1, 5) === 'iptc';
}

function decodeRawData(value) {
    const parts = value.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/);
    return hexToDataView(parts[2].replace(/\n/g, ''));
}

function hexToDataView(hex) {
    const dataView = new DataView(new ArrayBuffer(hex.length / 2));
    for (let i = 0; i < hex.length; i += 2) {
        dataView.setUint8(i / 2, parseInt(hex.substring(i, i + 2), 16));
    }
    return dataView;
}


/***/ }),

/***/ "./node_modules/exifreader/src/tag-decoder.js":
/*!****************************************************!*\
  !*** ./node_modules/exifreader/src/tag-decoder.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_decoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-decoder.js */ "./node_modules/exifreader/src/text-decoder.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const TAG_HEADER_SIZE = 5;

/* harmony default export */ __webpack_exports__["default"] = ({
    decode,
    TAG_HEADER_SIZE
});

function decode(encoding, tagValue) {
    const Decoder = _text_decoder_js__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    if ((typeof Decoder !== 'undefined') && (encoding !== undefined)) {
        try {
            return new Decoder(encoding).decode(tagValue instanceof DataView ? tagValue.buffer : Uint8Array.from(tagValue));
        } catch (error) {
            // Pass through and fall back to ASCII decoding.
        }
    }

    const stringValue = tagValue.map((charCode) => String.fromCharCode(charCode)).join('');
    return decodeAsciiValue(stringValue);
}

function decodeAsciiValue(asciiValue) {
    try {
        return decodeURIComponent(escape(asciiValue));
    } catch (error) {
        return asciiValue;
    }
}


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-0th-ifd.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-0th-ifd.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-common.js */ "./node_modules/exifreader/src/tag-names-common.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0x000b: 'ProcessingSoftware',
    0x00fe: {
        name: 'SubfileType',
        description: (value) => ({
            0x0: 'Full-resolution image',
            0x1: 'Reduced-resolution image',
            0x2: 'Single page of multi-page image',
            0x3: 'Single page of multi-page reduced-resolution image',
            0x4: 'Transparency mask',
            0x5: 'Transparency mask of reduced-resolution image',
            0x6: 'Transparency mask of multi-page image',
            0x7: 'Transparency mask of reduced-resolution multi-page image',
            0x10001: 'Alternate reduced-resolution image',
            0xffffffff: 'Invalid'
        })[value] || 'Unknown'
    },
    0x00ff: {
        name: 'OldSubfileType',
        description: (value) => ({
            0: 'Full-resolution image',
            1: 'Reduced-resolution image',
            2: 'Single page of multi-page image'
        })[value] || 'Unknown'
    },
    0x0100: 'ImageWidth',
    0x0101: 'ImageLength',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0107: {
        name: 'Thresholding',
        description: (value) => ({
            1: 'No dithering or halftoning',
            2: 'Ordered dither or halfton',
            3: 'Randomized dither'
        })[value] || 'Unknown'
    },
    0x0108: 'CellWidth',
    0x0109: 'CellLength',
    0x010a: {
        name: 'FillOrder',
        description: (value) => ({
            1: 'Normal',
            2: 'Reversed'
        })[value] || 'Unknown'
    },
    0x010d: 'DocumentName',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0111: 'StripOffsets',
    0x0112: {
        name: 'Orientation',
        description: (value) => {
            if (value === 1) {
                return 'top-left';
            }
            if (value === 2) {
                return 'top-right';
            }
            if (value === 3) {
                return 'bottom-right';
            }
            if (value === 4) {
                return 'bottom-left';
            }
            if (value === 5) {
                return 'left-top';
            }
            if (value === 6) {
                return 'right-top';
            }
            if (value === 7) {
                return 'right-bottom';
            }
            if (value === 8) {
                return 'left-bottom';
            }
            return 'Undefined';
        }
    },
    0x0115: 'SamplesPerPixel',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0118: 'MinSampleValue',
    0x0119: 'MaxSampleValue',
    0x011a: {
        'name': 'XResolution',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].XResolution
    },
    0x011b: {
        'name': 'YResolution',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].YResolution
    },
    0x011c: 'PlanarConfiguration',
    0x011d: 'PageName',
    0x011e: {
        'name': 'XPosition',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011f: {
        'name': 'YPosition',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x0122: {
        name: 'GrayResponseUnit',
        description: (value) => ({
            1: '0.1',
            2: '0.001',
            3: '0.0001',
            4: '1e-05',
            5: '1e-06'
        })[value] || 'Unknown'
    },
    0x0128: {
        name: 'ResolutionUnit',
        description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ResolutionUnit
    },
    0x0129: 'PageNumber',
    0x012d: 'TransferFunction',
    0x0131: 'Software',
    0x0132: 'DateTime',
    0x013b: 'Artist',
    0x013c: 'HostComputer',
    0x013d: 'Predictor',
    0x013e: {
        'name': 'WhitePoint',
        'description': (values) => {
            return values.map((value) => `${value[0]}/${value[1]}`).join(', ');
        }
    },
    0x013f: {
        'name': 'PrimaryChromaticities',
        'description': (values) => {
            return values.map((value) => `${value[0]}/${value[1]}`).join(', ');
        }
    },
    0x0141: 'HalftoneHints',
    0x0142: 'TileWidth',
    0x0143: 'TileLength',
    0x014a: 'A100DataOffset',
    0x014c: {
        name: 'InkSet',
        description: (value) => ({
            1: 'CMYK',
            2: 'Not CMYK'
        })[value] || 'Unknown'
    },
    0x0151: 'TargetPrinter',
    0x0152: {
        name: 'ExtraSamples',
        description: (value) => ({
            0: 'Unspecified',
            1: 'Associated Alpha',
            2: 'Unassociated Alpha',
        })[value] || 'Unknown'
    },
    0x0153: {
        name: 'SampleFormat',
        description: (value) => {
            const formats = {
                1: 'Unsigned',
                2: 'Signed',
                3: 'Float',
                4: 'Undefined',
                5: 'Complex int',
                6: 'Complex float',
            };
            if (!Array.isArray(value)) {
                return 'Unknown';
            }
            return value.map((sample) => formats[sample] || 'Unknown').join(', ');
        }
    },
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x0211: {
        'name': 'YCbCrCoefficients',
        'description': (values) => {
            return values.map((value) => '' + value[0] / value[1]).join('/');
        }
    },
    0x0212: 'YCbCrSubSampling',
    0x0213: {
        name: 'YCbCrPositioning',
        description: (value) => {
            if (value === 1) {
                return 'centered';
            }
            if (value === 2) {
                return 'co-sited';
            }
            return 'undefined ' + value;
        }
    },
    0x0214: {
        'name': 'ReferenceBlackWhite',
        'description': (values) => {
            return values.map((value) => '' + value[0] / value[1]).join(', ');
        }
    },
    0x02bc: 'ApplicationNotes',
    0x4746: 'Rating',
    0x4749: 'RatingPercent',
    0x8298: {
        name: 'Copyright',
        description: (value) => value.join('; ')
    },
    0x830e: 'PixelScale',
    0x83bb: 'IPTC-NAA',
    0x8480: 'IntergraphMatrix',
    0x8482: 'ModelTiePoint',
    0x8546: 'SEMInfo',
    0x85d8: 'ModelTransform',
    0x8649: 'PhotoshopSettings',
    0x8769: 'Exif IFD Pointer',
    0x8773: 'ICC_Profile',
    0x87af: 'GeoTiffDirectory',
    0x87b0: 'GeoTiffDoubleParams',
    0x87b1: 'GeoTiffAsciiParams',
    0x8825: 'GPS Info IFD Pointer',
    0x9c9b: {
        name: 'XPTitle',
        description: decodeXPValue,
    },
    0x9c9c: {
        name: 'XPComment',
        description: decodeXPValue
    },
    0x9c9d: {
        name: 'XPAuthor',
        description: decodeXPValue,
    },
    0x9c9e: {
        name: 'XPKeywords',
        description: decodeXPValue,
    },
    0x9c9f: {
        name: 'XPSubject',
        description: decodeXPValue,
    },
    0xa480: 'GDALMetadata',
    0xa481: 'GDALNoData',
    0xc4a5: 'PrintIM',
    0xc613: 'DNGBackwardVersion',
    0xc614: 'UniqueCameraModel',
    0xc615: 'LocalizedCameraModel',
    0xc621: 'ColorMatrix1',
    0xc622: 'ColorMatrix2',
    0xc623: 'CameraCalibration1',
    0xc624: 'CameraCalibration2',
    0xc625: 'ReductionMatrix1',
    0xc626: 'ReductionMatrix2',
    0xc627: 'AnalogBalance',
    0xc628: 'AsShotNeutral',
    0xc629: 'AsShotWhiteXY',
    0xc62a: 'BaselineExposure',
    0xc62b: 'BaselineNoise',
    0xc62c: 'BaselineSharpness',
    0xc62e: 'LinearResponseLimit',
    0xc62f: 'CameraSerialNumber',
    0xc630: 'DNGLensInfo',
    0xc633: 'ShadowScale',
    0xc635: {
        name: 'MakerNoteSafety',
        description: (value) => ({
            0: 'Unsafe',
            1: 'Safe'
        })[value] || 'Unknown'
    },
    0xc65a: {
        name: 'CalibrationIlluminant1',
        description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"]['LightSource']
    },
    0xc65b: {
        name: 'CalibrationIlluminant2',
        description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"]['LightSource']
    },
    0xc65d: 'RawDataUniqueID',
    0xc68b: 'OriginalRawFileName',
    0xc68c: 'OriginalRawFileData',
    0xc68f: 'AsShotICCProfile',
    0xc690: 'AsShotPreProfileMatrix',
    0xc691: 'CurrentICCProfile',
    0xc692: 'CurrentPreProfileMatrix',
    0xc6bf: 'ColorimetricReference',
    0xc6c5: 'SRawType',
    0xc6d2: 'PanasonicTitle',
    0xc6d3: 'PanasonicTitle2',
    0xc6f3: 'CameraCalibrationSig',
    0xc6f4: 'ProfileCalibrationSig',
    0xc6f5: 'ProfileIFD',
    0xc6f6: 'AsShotProfileName',
    0xc6f8: 'ProfileName',
    0xc6f9: 'ProfileHueSatMapDims',
    0xc6fa: 'ProfileHueSatMapData1',
    0xc6fb: 'ProfileHueSatMapData2',
    0xc6fc: 'ProfileToneCurve',
    0xc6fd: {
        name: 'ProfileEmbedPolicy',
        description: (value) => ({
            0: 'Allow Copying',
            1: 'Embed if Used',
            2: 'Never Embed',
            3: 'No Restrictions'
        })[value] || 'Unknown'
    },
    0xc6fe: 'ProfileCopyright',
    0xc714: 'ForwardMatrix1',
    0xc715: 'ForwardMatrix2',
    0xc716: 'PreviewApplicationName',
    0xc717: 'PreviewApplicationVersion',
    0xc718: 'PreviewSettingsName',
    0xc719: 'PreviewSettingsDigest',
    0xc71a: {
        name: 'PreviewColorSpace',
        description: (value) => ({
            1: 'Gray Gamma 2.2',
            2: 'sRGB',
            3: 'Adobe RGB',
            4: 'ProPhoto RGB'
        })[value] || 'Unknown'
    },
    0xc71b: 'PreviewDateTime',
    0xc71c: 'RawImageDigest',
    0xc71d: 'OriginalRawFileDigest',
    0xc725: 'ProfileLookTableDims',
    0xc726: 'ProfileLookTableData',
    0xc763: 'TimeCodes',
    0xc764: 'FrameRate',
    0xc772: 'TStop',
    0xc789: 'ReelName',
    0xc791: 'OriginalDefaultFinalSize',
    0xc792: 'OriginalBestQualitySize',
    0xc793: 'OriginalDefaultCropSize',
    0xc7a1: 'CameraLabel',
    0xc7a3: {
        name: 'ProfileHueSatMapEncoding',
        description: (value) => ({
            0: 'Linear',
            1: 'sRGB'
        })[value] || 'Unknown'
    },
    0xc7a4: {
        name: 'ProfileLookTableEncoding',
        description: (value) => ({
            0: 'Linear',
            1: 'sRGB'
        })[value] || 'Unknown'
    },
    0xc7a5: 'BaselineExposureOffset',
    0xc7a6: {
        name: 'DefaultBlackRender',
        description: (value) => ({
            0: 'Auto',
            1: 'None'
        })[value] || 'Unknown'
    },
    0xc7a7: 'NewRawImageDigest',
    0xc7a8: 'RawToPreviewGain'
});

function decodeXPValue(value) {
    // The XP tags are encoded as UCS-2 which uses two bytes per character but
    // it's close to UTF-16 so we can use that to decode them.
    // https://www.loc.gov/preservation/digital/formats/content/tiff_tags.shtml
    const decodedValue = new TextDecoder('utf-16').decode(new Uint8Array(value));
    // Some softwares pad the string with null characters so we remove them.
    return decodedValue.replace(/\u0000+$/, ''); // eslint-disable-line no-control-regex
}


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-canon-ifd.js":
/*!************************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-canon-ifd.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    0x0004: {
        'name': 'ShotInfo',
        'description': (value) => value
    },
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-common.js":
/*!*********************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-common.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    ApertureValue: (value) => Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2),
    ColorSpace(value) {
        if (value === 1) {
            return 'sRGB';
        } else if (value === 0xffff) {
            return 'Uncalibrated';
        }
        return 'Unknown';
    },
    ComponentsConfiguration(value) {
        return value.map((character) => {
            if (character === 0x31) {
                return 'Y';
            } else if (character === 0x32) {
                return 'Cb';
            } else if (character === 0x33) {
                return 'Cr';
            } else if (character === 0x34) {
                return 'R';
            } else if (character === 0x35) {
                return 'G';
            } else if (character === 0x36) {
                return 'B';
            }
        }).join('');
    },
    Contrast(value) {
        if (value === 0) {
            return 'Normal';
        } else if (value === 1) {
            return 'Soft';
        } else if (value === 2) {
            return 'Hard';
        }
        return 'Unknown';
    },
    CustomRendered(value) {
        if (value === 0) {
            return 'Normal process';
        } else if (value === 1) {
            return 'Custom process';
        }
        return 'Unknown';
    },
    ExposureMode(value) {
        if (value === 0) {
            return 'Auto exposure';
        } else if (value === 1) {
            return 'Manual exposure';
        } else if (value === 2) {
            return 'Auto bracket';
        }
        return 'Unknown';
    },
    ExposureProgram(value) {
        if (value === 0) {
            return 'Undefined';
        } else if (value === 1) {
            return 'Manual';
        } else if (value === 2) {
            return 'Normal program';
        } else if (value === 3) {
            return 'Aperture priority';
        } else if (value === 4) {
            return 'Shutter priority';
        } else if (value === 5) {
            return 'Creative program';
        } else if (value === 6) {
            return 'Action program';
        } else if (value === 7) {
            return 'Portrait mode';
        } else if (value === 8) {
            return 'Landscape mode';
        } else if (value === 9) {
            return 'Bulb';
        }
        return 'Unknown';
    },
    ExposureTime(value) {
        if (value[0] / value[1] > 0.25) {
            const decimal = value[0] / value[1];
            if (Number.isInteger(decimal)) {
                return '' + decimal;
            }
            return decimal.toFixed(1);
        }
        if (value[0] !== 0) {
            return `1/${Math.round(value[1] / value[0])}`;
        }
        return `0/${value[1]}`;
    },
    FNumber: (value) => `f/${Number(value[0] / value[1]).toFixed(1)}`,
    FocalLength: (value) => (value[0] / value[1]) + ' mm',
    FocalPlaneResolutionUnit(value) {
        if (value === 2) {
            return 'inches';
        } else if (value === 3) {
            return 'centimeters';
        } else if (value === 4) {
            return 'millimeters';
        }
        return 'Unknown';
    },
    LightSource: (value) => {
        if (value === 1) {
            return 'Daylight';
        } else if (value === 2) {
            return 'Fluorescent';
        } else if (value === 3) {
            return 'Tungsten (incandescent light)';
        } else if (value === 4) {
            return 'Flash';
        } else if (value === 9) {
            return 'Fine weather';
        } else if (value === 10) {
            return 'Cloudy weather';
        } else if (value === 11) {
            return 'Shade';
        } else if (value === 12) {
            return 'Daylight fluorescent (D 5700 – 7100K)';
        } else if (value === 13) {
            return 'Day white fluorescent (N 4600 – 5400K)';
        } else if (value === 14) {
            return 'Cool white fluorescent (W 3900 – 4500K)';
        } else if (value === 15) {
            return 'White fluorescent (WW 3200 – 3700K)';
        } else if (value === 17) {
            return 'Standard light A';
        } else if (value === 18) {
            return 'Standard light B';
        } else if (value === 19) {
            return 'Standard light C';
        } else if (value === 20) {
            return 'D55';
        } else if (value === 21) {
            return 'D65';
        } else if (value === 22) {
            return 'D75';
        } else if (value === 23) {
            return 'D50';
        } else if (value === 24) {
            return 'ISO studio tungsten';
        } else if (value === 255) {
            return 'Other light source';
        }
        return 'Unknown';
    },
    MeteringMode(value) {
        if (value === 1) {
            return 'Average';
        } else if (value === 2) {
            return 'CenterWeightedAverage';
        } else if (value === 3) {
            return 'Spot';
        } else if (value === 4) {
            return 'MultiSpot';
        } else if (value === 5) {
            return 'Pattern';
        } else if (value === 6) {
            return 'Partial';
        } else if (value === 255) {
            return 'Other';
        }
        return 'Unknown';
    },
    ResolutionUnit(value) {
        if (value === 2) {
            return 'inches';
        }
        if (value === 3) {
            return 'centimeters';
        }
        return 'Unknown';
    },
    Saturation(value) {
        if (value === 0) {
            return 'Normal';
        } else if (value === 1) {
            return 'Low saturation';
        } else if (value === 2) {
            return 'High saturation';
        }
        return 'Unknown';
    },
    FocalLengthIn35mmFilm(value) {
        if (value === 0) {
            return 'Unknown';
        }
        return value + ' mm';
    },
    SceneCaptureType(value) {
        if (value === 0) {
            return 'Standard';
        } else if (value === 1) {
            return 'Landscape';
        } else if (value === 2) {
            return 'Portrait';
        } else if (value === 3) {
            return 'Night scene';
        }
        return 'Unknown';
    },
    Sharpness(value) {
        if (value === 0) {
            return 'Normal';
        } else if (value === 1) {
            return 'Soft';
        } else if (value === 2) {
            return 'Hard';
        }
        return 'Unknown';
    },
    ShutterSpeedValue(value) {
        const denominator = Math.pow(2, value[0] / value[1]);
        if (denominator <= 1) {
            return `${Math.round(1 / denominator)}`;
        }
        return `1/${Math.round(denominator)}`;
    },
    WhiteBalance(value) {
        if (value === 0) {
            return 'Auto white balance';
        } else if (value === 1) {
            return 'Manual white balance';
        }
        return 'Unknown';
    },
    XResolution: (value) => '' + Math.round(value[0] / value[1]),
    YResolution: (value) => '' + Math.round(value[0] / value[1])
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-exif-ifd.js":
/*!***********************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-exif-ifd.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "./node_modules/exifreader/src/tag-names-utils.js");
/* harmony import */ var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-names-common.js */ "./node_modules/exifreader/src/tag-names-common.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    0x829a: {
        'name': 'ExposureTime',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ExposureTime
    },
    0x829d: {
        'name': 'FNumber',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].FNumber
    },
    0x8822: {
        'name': 'ExposureProgram',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ExposureProgram
    },
    0x8824: 'SpectralSensitivity',
    0x8827: 'ISOSpeedRatings',
    0x8828: {
        'name': 'OECF',
        'description': () => '[Raw OECF table data]'
    },
    0x882a: 'TimeZoneOffset',
    0x882b: 'SelfTimerMode',
    0x8830: {
        name: 'SensitivityType',
        description: (value) => ({
            1: 'Standard Output Sensitivity',
            2: 'Recommended Exposure Index',
            3: 'ISO Speed',
            4: 'Standard Output Sensitivity and Recommended Exposure Index',
            5: 'Standard Output Sensitivity and ISO Speed',
            6: 'Recommended Exposure Index and ISO Speed',
            7: 'Standard Output Sensitivity, Recommended Exposure Index and ISO Speed'
        })[value] || 'Unknown'
    },
    0x8831: 'StandardOutputSensitivity',
    0x8832: 'RecommendedExposureIndex',
    0x8833: 'ISOSpeed',
    0x8834: 'ISOSpeedLatitudeyyy',
    0x8835: 'ISOSpeedLatitudezzz',
    0x9000: {
        'name': 'ExifVersion',
        'description': (value) => (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value)
    },
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9009: 'GooglePlusUploadCode',
    0x9010: 'OffsetTime',
    0x9011: 'OffsetTimeOriginal',
    0x9012: 'OffsetTimeDigitized',
    0x9101: {
        'name': 'ComponentsConfiguration',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ComponentsConfiguration
    },
    0x9102: 'CompressedBitsPerPixel',
    0x9201: {
        'name': 'ShutterSpeedValue',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ShutterSpeedValue
    },
    0x9202: {
        'name': 'ApertureValue',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ApertureValue
    },
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBiasValue',
    0x9205: {
        'name': 'MaxApertureValue',
        'description': (value) => {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
        }
    },
    0x9206: {
        'name': 'SubjectDistance',
        'description': (value) => (value[0] / value[1]) + ' m'
    },
    0x9207: {
        'name': 'MeteringMode',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].MeteringMode
    },
    0x9208: {
        'name': 'LightSource',
        description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].LightSource
    },
    0x9209: {
        'name': 'Flash',
        'description': (value) => {
            if (value === 0x00) {
                return 'Flash did not fire';
            } else if (value === 0x01) {
                return 'Flash fired';
            } else if (value === 0x05) {
                return 'Strobe return light not detected';
            } else if (value === 0x07) {
                return 'Strobe return light detected';
            } else if (value === 0x09) {
                return 'Flash fired, compulsory flash mode';
            } else if (value === 0x0d) {
                return 'Flash fired, compulsory flash mode, return light not detected';
            } else if (value === 0x0f) {
                return 'Flash fired, compulsory flash mode, return light detected';
            } else if (value === 0x10) {
                return 'Flash did not fire, compulsory flash mode';
            } else if (value === 0x18) {
                return 'Flash did not fire, auto mode';
            } else if (value === 0x19) {
                return 'Flash fired, auto mode';
            } else if (value === 0x1d) {
                return 'Flash fired, auto mode, return light not detected';
            } else if (value === 0x1f) {
                return 'Flash fired, auto mode, return light detected';
            } else if (value === 0x20) {
                return 'No flash function';
            } else if (value === 0x41) {
                return 'Flash fired, red-eye reduction mode';
            } else if (value === 0x45) {
                return 'Flash fired, red-eye reduction mode, return light not detected';
            } else if (value === 0x47) {
                return 'Flash fired, red-eye reduction mode, return light detected';
            } else if (value === 0x49) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode';
            } else if (value === 0x4d) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected';
            } else if (value === 0x4f) {
                return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected';
            } else if (value === 0x59) {
                return 'Flash fired, auto mode, red-eye reduction mode';
            } else if (value === 0x5d) {
                return 'Flash fired, auto mode, return light not detected, red-eye reduction mode';
            } else if (value === 0x5f) {
                return 'Flash fired, auto mode, return light detected, red-eye reduction mode';
            }
            return 'Unknown';
        }
    },
    0x920a: {
        'name': 'FocalLength',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].FocalLength
    },
    0x9211: 'ImageNumber',
    0x9212: {
        name: 'SecurityClassification',
        description: (value) => ({
            'C': 'Confidential',
            'R': 'Restricted',
            'S': 'Secret',
            'T': 'Top Secret',
            'U': 'Unclassified'
        })[value] || 'Unknown'
    },
    0x9213: 'ImageHistory',
    0x9214: {
        'name': 'SubjectArea',
        'description': (value) => {
            if (value.length === 2) {
                return `Location; X: ${value[0]}, Y: ${value[1]}`;
            } else if (value.length === 3) {
                return `Circle; X: ${value[0]}, Y: ${value[1]}, diameter: ${value[2]}`;
            } else if (value.length === 4) {
                return `Rectangle; X: ${value[0]}, Y: ${value[1]}, width: ${value[2]}, height: ${value[3]}`;
            }
            return 'Unknown';
        }
    },
    0x927c: {
        'name': 'MakerNote',
        'description': () => '[Raw maker note data]'
    },
    0x9286: {
        'name': 'UserComment',
        'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEncodedString
    },
    0x9290: 'SubSecTime',
    0x9291: 'SubSecTimeOriginal',
    0x9292: 'SubSecTimeDigitized',
    0x935c: 'ImageSourceData',
    0x9400: {
        'name': 'AmbientTemperature',
        'description': (value) => (value[0] / value[1]) + ' °C'
    },
    0x9401: {
        'name': 'Humidity',
        'description': (value) => (value[0] / value[1]) + ' %'
    },
    0x9402: {
        'name': 'Pressure',
        'description': (value) => (value[0] / value[1]) + ' hPa'
    },
    0x9403: {
        'name': 'WaterDepth',
        'description': (value) => (value[0] / value[1]) + ' m'
    },
    0x9404: {
        'name': 'Acceleration',
        'description': (value) => (value[0] / value[1]) + ' mGal'
    },
    0x9405: {
        'name': 'CameraElevationAngle',
        'description': (value) => (value[0] / value[1]) + ' °'
    },
    0xa000: {
        'name': 'FlashpixVersion',
        'description': (value) => value.map((charCode) => String.fromCharCode(charCode)).join('')
    },
    0xa001: {
        'name': 'ColorSpace',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ColorSpace
    },
    0xa002: 'PixelXDimension',
    0xa003: 'PixelYDimension',
    0xa004: 'RelatedSoundFile',
    0xa005: 'Interoperability IFD Pointer',
    0xa20b: 'FlashEnergy',
    0xa20c: {
        'name': 'SpatialFrequencyResponse',
        'description': () => '[Raw SFR table data]'
    },
    0xa20e: 'FocalPlaneXResolution',
    0xa20f: 'FocalPlaneYResolution',
    0xa210: {
        'name': 'FocalPlaneResolutionUnit',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].FocalPlaneResolutionUnit
    },
    0xa214: {
        'name': 'SubjectLocation',
        'description': ([x, y]) => `X: ${x}, Y: ${y}`
    },
    0xa215: 'ExposureIndex',
    0xa217: {
        'name': 'SensingMethod',
        'description': (value) => {
            if (value === 1) {
                return 'Undefined';
            } else if (value === 2) {
                return 'One-chip color area sensor';
            } else if (value === 3) {
                return 'Two-chip color area sensor';
            } else if (value === 4) {
                return 'Three-chip color area sensor';
            } else if (value === 5) {
                return 'Color sequential area sensor';
            } else if (value === 7) {
                return 'Trilinear sensor';
            } else if (value === 8) {
                return 'Color sequential linear sensor';
            }
            return 'Unknown';
        }
    },
    0xa300: {
        'name': 'FileSource',
        'description': (value) => {
            if (value === 3) {
                return 'DSC';
            }
            return 'Unknown';
        }
    },
    0xa301: {
        'name': 'SceneType',
        'description': (value) => {
            if (value === 1) {
                return 'A directly photographed image';
            }
            return 'Unknown';
        }
    },
    0xa302: {
        'name': 'CFAPattern',
        'description': () => '[Raw CFA pattern table data]'
    },
    0xa401: {
        'name': 'CustomRendered',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].CustomRendered
    },
    0xa402: {
        'name': 'ExposureMode',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].ExposureMode
    },
    0xa403: {
        'name': 'WhiteBalance',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].WhiteBalance
    },
    0xa404: {
        'name': 'DigitalZoomRatio',
        'description': (value) => {
            if (value[0] === 0) {
                return 'Digital zoom was not used';
            }
            return '' + (value[0] / value[1]);
        }
    },
    0xa405: {
        'name': 'FocalLengthIn35mmFilm', // Sometimes called FocalLengthIn35mmFormat.
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].FocalLengthIn35mmFilm
    },
    0xa406: {
        'name': 'SceneCaptureType',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].SceneCaptureType
    },
    0xa407: {
        'name': 'GainControl',
        'description': (value) => {
            if (value === 0) {
                return 'None';
            } else if (value === 1) {
                return 'Low gain up';
            } else if (value === 2) {
                return 'High gain up';
            } else if (value === 3) {
                return 'Low gain down';
            } else if (value === 4) {
                return 'High gain down';
            }
            return 'Unknown';
        }
    },
    0xa408: {
        'name': 'Contrast',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].Contrast
    },
    0xa409: {
        'name': 'Saturation',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].Saturation
    },
    0xa40a: {
        'name': 'Sharpness',
        'description': _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"].Sharpness
    },
    0xa40b: {
        'name': 'DeviceSettingDescription',
        'description': () => '[Raw device settings table data]'
    },
    0xa40c: {
        'name': 'SubjectDistanceRange',
        'description': (value) => {
            if (value === 1) {
                return 'Macro';
            } else if (value === 2) {
                return 'Close view';
            } else if (value === 3) {
                return 'Distant view';
            }
            return 'Unknown';
        }
    },
    0xa420: 'ImageUniqueID',
    0xa430: 'CameraOwnerName',
    0xa431: 'BodySerialNumber',
    0xa432: {
        'name': 'LensSpecification',
        'description': (value) => {
            const focalLengthFrom = parseFloat((value[0][0] / value[0][1]).toFixed(5));
            const focalLengthTo = parseFloat((value[1][0] / value[1][1]).toFixed(5));
            const focalLengths = `${focalLengthFrom}-${focalLengthTo} mm`;
            if (value[3][1] === 0) {
                return `${focalLengths} f/?`;
            }
            const maxAperture = 1 / ((value[2][1] / value[2][1]) / (value[3][0] / value[3][1]));
            return `${focalLengths} f/${parseFloat(maxAperture.toFixed(5))}`;
        }
    },
    0xa433: 'LensMake',
    0xa434: 'LensModel',
    0xa435: 'LensSerialNumber',
    0xa460: {
        name: 'CompositeImage',
        description: (value) => ({
            1: 'Not a Composite Image',
            2: 'General Composite Image',
            3: 'Composite Image Captured While Shooting',
        })[value] || 'Unknown'
    },
    0xa461: 'SourceImageNumberOfCompositeImage',
    0xa462: 'SourceExposureTimesOfCompositeImage',
    0xa500: 'Gamma',
    0xea1c: 'Padding',
    0xea1d: 'OffsetSchema',
    0xfde8: 'OwnerName',
    0xfde9: 'SerialNumber',
    0xfdea: 'Lens',
    0xfe4c: 'RawFile',
    0xfe4d: 'Converter',
    0xfe4e: 'WhiteBalance',
    0xfe51: 'Exposure',
    0xfe52: 'Shadows',
    0xfe53: 'Brightness',
    0xfe54: 'Contrast',
    0xfe55: 'Saturation',
    0xfe56: 'Sharpness',
    0xfe57: 'Smoothness',
    0xfe58: 'MoireFilter'
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-gps-ifd.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-gps-ifd.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "./node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0x0000: {
        'name': 'GPSVersionID',
        'description': (value) => {
            if (value[0] === 2 && value[1] === 2 && value[2] === 0 && value[3] === 0) {
                return 'Version 2.2';
            }
            return 'Unknown';
        }
    },
    0x0001: {
        'name': 'GPSLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'N') {
                return 'North latitude';
            } else if (ref === 'S') {
                return 'South latitude';
            }
            return 'Unknown';
        }
    },
    0x0002: {
        'name': 'GPSLatitude',
        'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getCalculatedGpsValue
    },
    0x0003: {
        'name': 'GPSLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'E') {
                return 'East longitude';
            } else if (ref === 'W') {
                return 'West longitude';
            }
            return 'Unknown';
        }
    },
    0x0004: {
        'name': 'GPSLongitude',
        'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getCalculatedGpsValue
    },
    0x0005: {
        'name': 'GPSAltitudeRef',
        'description': (value) => {
            if (value === 0) {
                return 'Sea level';
            } else if (value === 1) {
                return 'Sea level reference (negative value)';
            }
            return 'Unknown';
        }
    },
    0x0006: {
        'name': 'GPSAltitude',
        'description': (value) => {
            return (value[0] / value[1]) + ' m';
        }
    },
    0x0007: {
        'name': 'GPSTimeStamp',
        'description': (values) => {
            return values.map(([numerator, denominator]) => {
                const num = numerator / denominator;
                if (/^\d(\.|$)/.test(`${num}`)) {
                    return `0${num}`;
                }
                return num;
            }).join(':');
        }
    },
    0x0008: 'GPSSatellites',
    0x0009: {
        'name': 'GPSStatus',
        'description': (value) => {
            const status = value.join('');
            if (status === 'A') {
                return 'Measurement in progress';
            } else if (status === 'V') {
                return 'Measurement Interoperability';
            }
            return 'Unknown';
        }
    },
    0x000a: {
        'name': 'GPSMeasureMode',
        'description': (value) => {
            const mode = value.join('');
            if (mode === '2') {
                return '2-dimensional measurement';
            } else if (mode === '3') {
                return '3-dimensional measurement';
            }
            return 'Unknown';
        }
    },
    0x000b: 'GPSDOP',
    0x000c: {
        'name': 'GPSSpeedRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'K') {
                return 'Kilometers per hour';
            } else if (ref === 'M') {
                return 'Miles per hour';
            } else if (ref === 'N') {
                return 'Knots';
            }
            return 'Unknown';
        }
    },
    0x000d: 'GPSSpeed',
    0x000e: {
        'name': 'GPSTrackRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x000f: 'GPSTrack',
    0x0010: {
        'name': 'GPSImgDirectionRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: {
        'name': 'GPSDestLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'N') {
                return 'North latitude';
            } else if (ref === 'S') {
                return 'South latitude';
            }
            return 'Unknown';
        }
    },
    0x0014: {
        'name': 'GPSDestLatitude',
        'description': (value) => {
            return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
        }
    },
    0x0015: {
        'name': 'GPSDestLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'E') {
                return 'East longitude';
            } else if (ref === 'W') {
                return 'West longitude';
            }
            return 'Unknown';
        }
    },
    0x0016: {
        'name': 'GPSDestLongitude',
        'description': (value) => {
            return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
        }
    },
    0x0017: {
        'name': 'GPSDestBearingRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'T') {
                return 'True direction';
            } else if (ref === 'M') {
                return 'Magnetic direction';
            }
            return 'Unknown';
        }
    },
    0x0018: 'GPSDestBearing',
    0x0019: {
        'name': 'GPSDestDistanceRef',
        'description': (value) => {
            const ref = value.join('');
            if (ref === 'K') {
                return 'Kilometers';
            } else if (ref === 'M') {
                return 'Miles';
            } else if (ref === 'N') {
                return 'Knots';
            }
            return 'Unknown';
        }
    },
    0x001a: 'GPSDestDistance',
    0x001b: {
        'name': 'GPSProcessingMethod',
        'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEncodedString
    },
    0x001c: {
        'name': 'GPSAreaInformation',
        'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEncodedString
    },
    0x001d: 'GPSDateStamp',
    0x001e: {
        'name': 'GPSDifferential',
        'description': (value) => {
            if (value === 0) {
                return 'Measurement without differential correction';
            } else if (value === 1) {
                return 'Differential correction applied';
            }
            return 'Unknown';
        }
    },
    0x001f: 'GPSHPositioningError'
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-interoperability-ifd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-interoperability-ifd.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "./node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0x0001: 'InteroperabilityIndex',
    0x0002: {
        name: 'InteroperabilityVersion',
        description: (value) => (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value)
    },
    0x1000: 'RelatedImageFileFormat',
    0x1001: 'RelatedImageWidth',
    0x1002: 'RelatedImageHeight'
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-mpf-ifd.js":
/*!**********************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-mpf-ifd.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "./node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0xb000: {
        'name': 'MPFVersion',
        'description': (value) => (0,_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringValue)(value)
    },
    0xb001: 'NumberOfImages',
    0xb002: 'MPEntry',
    0xb003: 'ImageUIDList',
    0xb004: 'TotalFrames'
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-pentax-ifd.js":
/*!*************************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-pentax-ifd.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    0x0000: {
        'name': 'PentaxVersion',
        'description': (value) => value.join('.')
    },
    0x0005: 'PentaxModelID',
    0x022b: 'LevelInfo'
});


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names-utils.js":
/*!********************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names-utils.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCalculatedGpsValue: function() { return /* binding */ getCalculatedGpsValue; },
/* harmony export */   getEncodedString: function() { return /* binding */ getEncodedString; },
/* harmony export */   getStringValue: function() { return /* binding */ getStringValue; }
/* harmony export */ });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringValue(value) {
    return value.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getEncodedString(value) {
    if (value.length >= 8) {
        const encoding = getStringValue(value.slice(0, 8));

        if (encoding === 'ASCII\x00\x00\x00') {
            return getStringValue(value.slice(8));
        } else if (encoding === 'JIS\x00\x00\x00\x00\x00') {
            return '[JIS encoded text]';
        } else if (encoding === 'UNICODE\x00') {
            return '[Unicode encoded text]';
        } else if (encoding === '\x00\x00\x00\x00\x00\x00\x00\x00') {
            return '[Undefined encoding]';
        }
    }

    return 'Undefined';
}

function getCalculatedGpsValue(value) {
    return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
}


/***/ }),

/***/ "./node_modules/exifreader/src/tag-names.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/tag-names.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IFD_TYPE_0TH: function() { return /* binding */ IFD_TYPE_0TH; },
/* harmony export */   IFD_TYPE_1ST: function() { return /* binding */ IFD_TYPE_1ST; },
/* harmony export */   IFD_TYPE_CANON: function() { return /* binding */ IFD_TYPE_CANON; },
/* harmony export */   IFD_TYPE_EXIF: function() { return /* binding */ IFD_TYPE_EXIF; },
/* harmony export */   IFD_TYPE_GPS: function() { return /* binding */ IFD_TYPE_GPS; },
/* harmony export */   IFD_TYPE_INTEROPERABILITY: function() { return /* binding */ IFD_TYPE_INTEROPERABILITY; },
/* harmony export */   IFD_TYPE_MPF: function() { return /* binding */ IFD_TYPE_MPF; },
/* harmony export */   IFD_TYPE_PENTAX: function() { return /* binding */ IFD_TYPE_PENTAX; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* harmony import */ var _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-names-0th-ifd.js */ "./node_modules/exifreader/src/tag-names-0th-ifd.js");
/* harmony import */ var _tag_names_exif_ifd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-names-exif-ifd.js */ "./node_modules/exifreader/src/tag-names-exif-ifd.js");
/* harmony import */ var _tag_names_gps_ifd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag-names-gps-ifd.js */ "./node_modules/exifreader/src/tag-names-gps-ifd.js");
/* harmony import */ var _tag_names_interoperability_ifd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-names-interoperability-ifd.js */ "./node_modules/exifreader/src/tag-names-interoperability-ifd.js");
/* harmony import */ var _tag_names_mpf_ifd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-names-mpf-ifd.js */ "./node_modules/exifreader/src/tag-names-mpf-ifd.js");
/* harmony import */ var _tag_names_canon_ifd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag-names-canon-ifd.js */ "./node_modules/exifreader/src/tag-names-canon-ifd.js");
/* harmony import */ var _tag_names_pentax_ifd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tag-names-pentax-ifd.js */ "./node_modules/exifreader/src/tag-names-pentax-ifd.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */











const tagNames0thExifIfds = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)({}, _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_2__["default"], _tag_names_exif_ifd_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

const IFD_TYPE_0TH = '0th';
const IFD_TYPE_1ST = '1st';
const IFD_TYPE_EXIF = 'exif';
const IFD_TYPE_GPS = 'gps';
const IFD_TYPE_INTEROPERABILITY = 'interoperability';
const IFD_TYPE_MPF = 'mpf';
const IFD_TYPE_CANON = 'canon';
const IFD_TYPE_PENTAX = 'pentax';

/* harmony default export */ __webpack_exports__["default"] = ({
    [IFD_TYPE_0TH]: tagNames0thExifIfds,
    [IFD_TYPE_1ST]: _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    [IFD_TYPE_EXIF]: tagNames0thExifIfds,
    [IFD_TYPE_GPS]: _tag_names_gps_ifd_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    [IFD_TYPE_INTEROPERABILITY]: _tag_names_interoperability_ifd_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    [IFD_TYPE_MPF]: _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_MPF ? _tag_names_mpf_ifd_js__WEBPACK_IMPORTED_MODULE_6__["default"] : {},
    [IFD_TYPE_CANON]: _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_MAKER_NOTES ? _tag_names_canon_ifd_js__WEBPACK_IMPORTED_MODULE_7__["default"] : {},
    [IFD_TYPE_PENTAX]: _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_MAKER_NOTES ? _tag_names_pentax_ifd_js__WEBPACK_IMPORTED_MODULE_8__["default"] : {},
});


/***/ }),

/***/ "./node_modules/exifreader/src/tags-helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/exifreader/src/tags-helpers.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get0thIfdOffset: function() { return /* binding */ get0thIfdOffset; },
/* harmony export */   readIfd: function() { return /* binding */ readIfd; }
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/exifreader/src/constants.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* harmony import */ var _tag_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-names.js */ "./node_modules/exifreader/src/tag-names.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





const getTagValueAt = {
    1: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getByteAt,
    2: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAsciiAt,
    3: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getShortAt,
    4: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLongAt,
    5: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getRationalAt,
    7: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUndefinedAt,
    9: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSlongAt,
    10: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSrationalAt,
    13: _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getIfdPointerAt
};

function get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder) {
    return tiffHeaderOffset + _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLongAt(dataView, tiffHeaderOffset + 4, byteOrder);
}

function readIfd(dataView, ifdType, offsetOrigin, offset, byteOrder, includeUnknown) {
    const FIELD_COUNT_SIZE = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('SHORT');
    const FIELD_SIZE = 12;

    const tags = {};
    const numberOfFields = getNumberOfFields(dataView, offset, byteOrder);

    offset += FIELD_COUNT_SIZE;
    for (let fieldIndex = 0; fieldIndex < numberOfFields; fieldIndex++) {
        if (offset + FIELD_SIZE > dataView.byteLength) {
            break;
        }

        const tag = readTag(dataView, ifdType, offsetOrigin, offset, byteOrder, includeUnknown);
        if (tag !== undefined) {
            tags[tag.name] = {
                'id': tag.id,
                'value': tag.value,
                'description': tag.description
            };
            if (tag.name === 'MakerNote' || (ifdType === _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_PENTAX && tag.name === 'LevelInfo')) {
                tags[tag.name].__offset = tag.__offset;
            }
        }

        offset += FIELD_SIZE;
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_THUMBNAIL && (offset < dataView.byteLength - _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('LONG'))) {
        const nextIfdOffset = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLongAt(dataView, offset, byteOrder);
        if (nextIfdOffset !== 0 && ifdType === _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_0TH) {
            tags['Thumbnail'] = readIfd(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_1ST, offsetOrigin, offsetOrigin + nextIfdOffset, byteOrder, includeUnknown);
        }
    }

    return tags;
}

function getNumberOfFields(dataView, offset, byteOrder) {
    if (offset + _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('SHORT') <= dataView.byteLength) {
        return _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getShortAt(dataView, offset, byteOrder);
    }
    return 0;
}

function readTag(dataView, ifdType, offsetOrigin, offset, byteOrder, includeUnknown) {
    const TAG_CODE_IPTC_NAA = 0x83bb;
    const TAG_TYPE_OFFSET = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('SHORT');
    const TAG_COUNT_OFFSET = TAG_TYPE_OFFSET + _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('SHORT');
    const TAG_VALUE_OFFSET = TAG_COUNT_OFFSET + _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('LONG');

    const tagCode = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getShortAt(dataView, offset, byteOrder);
    const tagType = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getShortAt(dataView, offset + TAG_TYPE_OFFSET, byteOrder);
    const tagCount = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLongAt(dataView, offset + TAG_COUNT_OFFSET, byteOrder);
    let tagValue;
    let tagValueOffset;

    if (_types_js__WEBPACK_IMPORTED_MODULE_1__["default"].typeSizes[tagType] === undefined || (!includeUnknown && _tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode] === undefined)) {
        return undefined;
    }

    if (tagValueFitsInOffsetSlot(tagType, tagCount)) {
        tagValueOffset = offset + TAG_VALUE_OFFSET;
        tagValue = getTagValue(dataView, tagValueOffset, tagType, tagCount, byteOrder);
    } else {
        tagValueOffset = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLongAt(dataView, offset + TAG_VALUE_OFFSET, byteOrder);
        if (tagValueFitsInDataView(dataView, offsetOrigin, tagValueOffset, tagType, tagCount)) {
            const forceByteType = tagCode === TAG_CODE_IPTC_NAA;
            tagValue = getTagValue(dataView, offsetOrigin + tagValueOffset, tagType, tagCount, byteOrder, forceByteType);
        } else {
            tagValue = '<faulty value>';
        }
    }

    if (tagType === _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].tagTypes['ASCII']) {
        tagValue = splitNullSeparatedAsciiString(tagValue);
        tagValue = decodeAsciiValue(tagValue);
    }

    let tagName = `undefined-${tagCode}`;
    let tagDescription = tagValue;

    if (_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode] !== undefined) {
        if ((_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode]['name'] !== undefined) && (_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode]['description'] !== undefined)) {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode]['name'];
            try {
                tagDescription = _tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode]['description'](tagValue);
            } catch (error) {
                tagDescription = getDescriptionFromTagValue(tagValue);
            }
        } else if ((tagType === _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].tagTypes['RATIONAL']) || (tagType === _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].tagTypes['SRATIONAL'])) {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode];
            tagDescription = '' + (tagValue[0] / tagValue[1]);
        } else {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_2__["default"][ifdType][tagCode];
            tagDescription = getDescriptionFromTagValue(tagValue);
        }
    }

    return {
        id: tagCode,
        name: tagName,
        value: tagValue,
        description: tagDescription,
        __offset: tagValueOffset
    };
}

function tagValueFitsInOffsetSlot(tagType, tagCount) {
    return _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].typeSizes[tagType] * tagCount <= _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeSize('LONG');
}

function getTagValue(dataView, offset, type, count, byteOrder, forceByteType = false) {
    let value = [];

    if (forceByteType) {
        count = count * _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].typeSizes[type];
        type = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].tagTypes['BYTE'];
    }
    for (let valueIndex = 0; valueIndex < count; valueIndex++) {
        value.push(getTagValueAt[type](dataView, offset, byteOrder));
        offset += _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].typeSizes[type];
    }

    if (type === _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].tagTypes['ASCII']) {
        value = _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAsciiValue(value);
    } else if (value.length === 1) {
        value = value[0];
    }

    return value;
}

function tagValueFitsInDataView(dataView, offsetOrigin, tagValueOffset, tagType, tagCount) {
    return offsetOrigin + tagValueOffset + _types_js__WEBPACK_IMPORTED_MODULE_1__["default"].typeSizes[tagType] * tagCount <= dataView.byteLength;
}

function splitNullSeparatedAsciiString(string) {
    const tagValue = [];
    let i = 0;

    for (let j = 0; j < string.length; j++) {
        if (string[j] === '\x00') {
            i++;
            continue;
        }
        if (tagValue[i] === undefined) {
            tagValue[i] = '';
        }
        tagValue[i] += string[j];
    }

    return tagValue;
}

function decodeAsciiValue(asciiValue) {
    try {
        return asciiValue.map((value) => decodeURIComponent(escape(value)));
    } catch (error) {
        return asciiValue;
    }
}

function getDescriptionFromTagValue(tagValue) {
    if (tagValue instanceof Array) {
        return tagValue.join(', ');
    }
    return tagValue;
}


/***/ }),

/***/ "./node_modules/exifreader/src/tags.js":
/*!*********************************************!*\
  !*** ./node_modules/exifreader/src/tags.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./byte-order.js */ "./node_modules/exifreader/src/byte-order.js");
/* harmony import */ var _tag_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-names.js */ "./node_modules/exifreader/src/tag-names.js");
/* harmony import */ var _tags_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags-helpers.js */ "./node_modules/exifreader/src/tags-helpers.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */






const EXIF_IFD_POINTER_KEY = 'Exif IFD Pointer';
const GPS_INFO_IFD_POINTER_KEY = 'GPS Info IFD Pointer';
const INTEROPERABILITY_IFD_POINTER_KEY = 'Interoperability IFD Pointer';

/* harmony default export */ __webpack_exports__["default"] = ({
    read,
});

function read(dataView, tiffHeaderOffset, includeUnknown) {
    const byteOrder = _byte_order_js__WEBPACK_IMPORTED_MODULE_1__["default"].getByteOrder(dataView, tiffHeaderOffset);
    let tags = read0thIfd(dataView, tiffHeaderOffset, byteOrder, includeUnknown);
    tags = readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown);
    tags = readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown);
    tags = readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown);

    return {tags, byteOrder};
}

function read0thIfd(dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    return (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_3__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_0TH, tiffHeaderOffset, (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_3__.get0thIfdOffset)(dataView, tiffHeaderOffset, byteOrder), byteOrder, includeUnknown);
}

function readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    if (tags[EXIF_IFD_POINTER_KEY] !== undefined) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tags, (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_3__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_EXIF, tiffHeaderOffset, tiffHeaderOffset + tags[EXIF_IFD_POINTER_KEY].value, byteOrder, includeUnknown));
    }

    return tags;
}

function readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    if (tags[GPS_INFO_IFD_POINTER_KEY] !== undefined) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tags, (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_3__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_GPS, tiffHeaderOffset, tiffHeaderOffset + tags[GPS_INFO_IFD_POINTER_KEY].value, byteOrder, includeUnknown));
    }

    return tags;
}

function readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder, includeUnknown) {
    if (tags[INTEROPERABILITY_IFD_POINTER_KEY] !== undefined) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tags, (0,_tags_helpers_js__WEBPACK_IMPORTED_MODULE_3__.readIfd)(dataView, _tag_names_js__WEBPACK_IMPORTED_MODULE_2__.IFD_TYPE_INTEROPERABILITY, tiffHeaderOffset, tiffHeaderOffset + tags[INTEROPERABILITY_IFD_POINTER_KEY].value, byteOrder, includeUnknown));
    }

    return tags;
}


/***/ }),

/***/ "./node_modules/exifreader/src/text-decoder.js":
/*!*****************************************************!*\
  !*** ./node_modules/exifreader/src/text-decoder.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    get
});

function get() {
    if (typeof TextDecoder !== 'undefined') {
        return TextDecoder;
    }

    return undefined;
}


/***/ }),

/***/ "./node_modules/exifreader/src/thumbnail.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/thumbnail.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



// https://exiftool.org/TagNames/EXIF.html#Compression
const COMPRESSION_JPEG = [6, 7, 99];

/* harmony default export */ __webpack_exports__["default"] = ({
    get,
});

function get(dataView, thumbnailTags, tiffHeaderOffset) {
    if (hasJpegThumbnail(thumbnailTags)) {
        thumbnailTags.type = 'image/jpeg';
        const offset = tiffHeaderOffset + thumbnailTags.JPEGInterchangeFormat.value;
        thumbnailTags.image = dataView.buffer.slice(offset, offset + thumbnailTags.JPEGInterchangeFormatLength.value);
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.deferInit)(thumbnailTags, 'base64', function () {
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getBase64Image)(this.image);
        });
    }

    // There is a small possibility of thumbnails in TIFF format but they are
    // not stored as a self-contained image file and would be much more
    // difficult to extract.
    // https://exiftool.org/forum/index.php?topic=3273.msg14778#msg14778

    return thumbnailTags;
}

function hasJpegThumbnail(tags) {
    return tags && ((tags.Compression === undefined) || (COMPRESSION_JPEG.includes(tags.Compression.value)))
        && tags.JPEGInterchangeFormat && tags.JPEGInterchangeFormat.value
        && tags.JPEGInterchangeFormatLength && tags.JPEGInterchangeFormatLength.value;
}


/***/ }),

/***/ "./node_modules/exifreader/src/types.js":
/*!**********************************************!*\
  !*** ./node_modules/exifreader/src/types.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-order.js */ "./node_modules/exifreader/src/byte-order.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const typeSizes = {
    1: 1, // BYTE
    2: 1, // ASCII
    3: 2, // SHORT
    4: 4, // LONG
    5: 8, // RATIONAL
    7: 1, // UNDEFINED
    9: 4, // SLONG
    10: 8, // SRATIONAL
    13: 4 // IFD
};

const tagTypes = {
    'BYTE': 1,
    'ASCII': 2,
    'SHORT': 3,
    'LONG': 4,
    'RATIONAL': 5,
    'UNDEFINED': 7,
    'SLONG': 9,
    'SRATIONAL': 10,
    'IFD': 13
};

/* harmony default export */ __webpack_exports__["default"] = ({
    getAsciiValue,
    getByteAt,
    getAsciiAt,
    getShortAt,
    getLongAt,
    getRationalAt,
    getUndefinedAt,
    getSlongAt,
    getSrationalAt,
    getIfdPointerAt,
    typeSizes,
    tagTypes,
    getTypeSize
});

function getAsciiValue(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode));
}

function getByteAt(dataView, offset) {
    return dataView.getUint8(offset);
}

function getAsciiAt(dataView, offset) {
    return dataView.getUint8(offset);
}

function getShortAt(dataView, offset, byteOrder) {
    return dataView.getUint16(offset, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
}

function getLongAt(dataView, offset, byteOrder) {
    return dataView.getUint32(offset, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
}

function getRationalAt(dataView, offset, byteOrder) {
    return [getLongAt(dataView, offset, byteOrder), getLongAt(dataView, offset + 4, byteOrder)];
}

function getUndefinedAt(dataView, offset) {
    return getByteAt(dataView, offset);
}

function getSlongAt(dataView, offset, byteOrder) {
    return dataView.getInt32(offset, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
}

function getSrationalAt(dataView, offset, byteOrder) {
    return [getSlongAt(dataView, offset, byteOrder), getSlongAt(dataView, offset + 4, byteOrder)];
}

function getIfdPointerAt(dataView, offset, byteOrder) {
    return getLongAt(dataView, offset, byteOrder);
}

function getTypeSize(typeName) {
    if (tagTypes[typeName] === undefined) {
        throw new Error('No such type found.');
    }

    return typeSizes[tagTypes[typeName]];
}


/***/ }),

/***/ "./node_modules/exifreader/src/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/exifreader/src/utils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPRESSION_METHOD_DEFLATE: function() { return /* binding */ COMPRESSION_METHOD_DEFLATE; },
/* harmony export */   COMPRESSION_METHOD_NONE: function() { return /* binding */ COMPRESSION_METHOD_NONE; },
/* harmony export */   dataUriToBuffer: function() { return /* binding */ dataUriToBuffer; },
/* harmony export */   decompress: function() { return /* binding */ decompress; },
/* harmony export */   deferInit: function() { return /* binding */ deferInit; },
/* harmony export */   getBase64Image: function() { return /* binding */ getBase64Image; },
/* harmony export */   getCharacterArray: function() { return /* binding */ getCharacterArray; },
/* harmony export */   getDataView: function() { return /* binding */ getDataView; },
/* harmony export */   getNullTerminatedStringFromDataView: function() { return /* binding */ getNullTerminatedStringFromDataView; },
/* harmony export */   getPascalStringFromDataView: function() { return /* binding */ getPascalStringFromDataView; },
/* harmony export */   getStringFromDataView: function() { return /* binding */ getStringFromDataView; },
/* harmony export */   getStringValueFromArray: function() { return /* binding */ getStringValueFromArray; },
/* harmony export */   getUnicodeStringFromDataView: function() { return /* binding */ getUnicodeStringFromDataView; },
/* harmony export */   objectAssign: function() { return /* binding */ objectAssign; },
/* harmony export */   padStart: function() { return /* binding */ padStart; },
/* harmony export */   parseFloatRadix: function() { return /* binding */ parseFloatRadix; },
/* harmony export */   strRepeat: function() { return /* binding */ strRepeat; }
/* harmony export */ });
/* harmony import */ var _dataview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataview.js */ "./node_modules/exifreader/src/dataview.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! ./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js */ "./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js")["Buffer"];
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



function getDataView(data, byteOffset, byteLength) {
    try {
        return new DataView(data, byteOffset, byteLength);
    } catch (error) {
        return new _dataview_js__WEBPACK_IMPORTED_MODULE_0__["default"](data, byteOffset, byteLength);
    }
}

function getStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i++) {
        chars.push(dataView.getUint8(offset + i));
    }
    return getStringValueFromArray(chars);
}

function getNullTerminatedStringFromDataView(dataView, offset) {
    const chars = [];
    let i = 0;
    while (offset + i < dataView.byteLength) {
        const char = dataView.getUint8(offset + i);
        if (char === 0) {
            break;
        }
        chars.push(char);
        i++;
    }
    return getStringValueFromArray(chars);
}

function getUnicodeStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i += 2) {
        chars.push(dataView.getUint16(offset + i));
    }
    if (chars[chars.length - 1] === 0) {
        chars.pop();
    }
    return getStringValueFromArray(chars);
}

function getPascalStringFromDataView(dataView, offset) {
    const size = dataView.getUint8(offset);
    const string = getStringFromDataView(dataView, offset + 1, size);
    return [size, string];
}

function getStringValueFromArray(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getCharacterArray(string) {
    return string.split('').map((character) => character.charCodeAt(0));
}

function objectAssign() {
    for (let i = 1; i < arguments.length; i++) {
        for (const property in arguments[i]) {
            arguments[0][property] = arguments[i][property];
        }
    }

    return arguments[0];
}

function deferInit(object, key, initializer) {
    let initialized = false;
    Object.defineProperty(object, key, {
        get() {
            if (!initialized) {
                initialized = true;
                Object.defineProperty(object, key, {
                    configurable: true,
                    enumerable: true,
                    value: initializer.apply(object),
                    writable: true
                });
            }
            return object[key];
        },
        configurable: true,
        enumerable: true
    });
}

function getBase64Image(image) {
    if (typeof btoa !== 'undefined') {
        if (typeof image === 'string') {
            // This only happens during the build tests using Node 16+ (npm run test:build).
            return btoa(image);
        }
        // IE11- does not implement reduce on the Uint8Array prototype.
        return btoa(Array.prototype.reduce.call(new Uint8Array(image), (data, byte) => data + String.fromCharCode(byte), ''));
    }
    if (typeof Buffer === 'undefined') {
        return undefined;
    }
    if (typeof Buffer.from !== 'undefined') { // eslint-disable-line no-undef
        return Buffer.from(image).toString('base64'); // eslint-disable-line no-undef
    }
    return (new Buffer(image)).toString('base64'); // eslint-disable-line no-undef
}

function dataUriToBuffer(dataUri) {
    const data = dataUri.substring(dataUri.indexOf(',') + 1);

    if (dataUri.indexOf(';base64') !== -1) {
        if (typeof atob !== 'undefined') {
            return Uint8Array.from(atob(data), (char) => char.charCodeAt(0)).buffer;
        }
        if (typeof Buffer === 'undefined') {
            return undefined;
        }
        if (typeof Buffer.from !== 'undefined') { // eslint-disable-line no-undef
            return Buffer.from(data, 'base64'); // eslint-disable-line no-undef
        }
        return new Buffer(data, 'base64'); // eslint-disable-line no-undef
    }

    const decodedData = decodeURIComponent(data);
    if (typeof Buffer !== 'undefined') {
        if (typeof Buffer.from !== 'undefined') { // eslint-disable-line no-undef
            return Buffer.from(decodedData); // eslint-disable-line no-undef
        }
        return new Buffer(decodedData); // eslint-disable-line no-undef
    }
    return Uint8Array.from(decodedData, (char) => char.charCodeAt(0)).buffer;
}

function padStart(string, length, character) {
    const padding = strRepeat(character, length - string.length);
    return padding + string;
}

function parseFloatRadix(string, radix) {
    return parseInt(string.replace('.', ''), radix)
        / Math.pow(radix, (string.split('.')[1] || '').length);
}

function strRepeat(string, num) {
    return new Array(num + 1).join(string);
}

const COMPRESSION_METHOD_NONE = undefined;
const COMPRESSION_METHOD_DEFLATE = 0;

function decompress(dataView, compressionMethod, encoding, returnType = 'string') {
    if (compressionMethod === COMPRESSION_METHOD_DEFLATE) {
        if (typeof DecompressionStream === 'function') {
            const decompressionStream = new DecompressionStream('deflate');
            const decompressedStream = new Blob([dataView]).stream().pipeThrough(decompressionStream);
            if (returnType === 'dataview') {
                return new Response(decompressedStream).arrayBuffer().then((arrayBuffer) => new DataView(arrayBuffer));
            }
            return new Response(decompressedStream).arrayBuffer()
                .then((buffer) => new TextDecoder(encoding).decode(buffer));
        }
    }
    if (compressionMethod !== undefined) {
        return Promise.reject(`Unknown compression method ${compressionMethod}.`);
    }
    return dataView;
}


/***/ }),

/***/ "./node_modules/exifreader/src/vp8x-tags.js":
/*!**************************************************!*\
  !*** ./node_modules/exifreader/src/vp8x-tags.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/exifreader/src/types.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

const IMAGE_WIDTH_OFFSET = 4;
const IMAGE_HEIGHT_OFFSET = 7;

// https://developers.google.com/speed/webp/docs/riff_container#extended_file_format
function read(dataView, chunkOffset) {
    const tags = {};

    const flags = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, chunkOffset);

    tags['Alpha'] = getAlpha(flags);
    tags['Animation'] = getAnimation(flags);
    tags['ImageWidth'] = getThreeByteValue(dataView, chunkOffset + IMAGE_WIDTH_OFFSET);
    tags['ImageHeight'] = getThreeByteValue(dataView, chunkOffset + IMAGE_HEIGHT_OFFSET);

    return tags;
}

function getAlpha(flags) {
    const value = flags & 0x10;
    return {
        value: value ? 1 : 0,
        description: value ? 'Yes' : 'No'
    };
}

function getAnimation(flags) {
    const value = flags & 0x02;
    return {
        value: value ? 1 : 0,
        description: value ? 'Yes' : 'No'
    };
}

function getThreeByteValue(dataView, offset) {
    // Values are stored little-endian.
    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, offset)
        + 256 * _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, offset + 1)
        + 256 * 256 * _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, offset + 2)
        + 1; // Value is 1-based, i.e. a value of 7 means 8px.

    return {
        value,
        description: value + 'px'
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/xml.js":
/*!********************************************!*\
  !*** ./node_modules/exifreader/src/xml.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    isXMLFile,
    findOffsets
});

const XML_MARKER_OFFSET = 0;
const XML_MARKER = '<?xpacket begin';

function isXMLFile(dataView) {
    return !!dataView && (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(dataView, XML_MARKER_OFFSET, XML_MARKER.length) === XML_MARKER;
}

function findOffsets(dataView) {
    const xmpChunks = [];
    xmpChunks.push({dataOffset: XML_MARKER_OFFSET, length: dataView.byteLength});
    return {
        xmpChunks,
    };
}


/***/ }),

/***/ "./node_modules/exifreader/src/xmp-namespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/exifreader/src/xmp-namespaces.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMissingNamespaces: function() { return /* binding */ addMissingNamespaces; },
/* harmony export */   isMissingNamespaceError: function() { return /* binding */ isMissingNamespaceError; }
/* harmony export */ });
function isMissingNamespaceError(error) {
    const missingNamespaceStrings = [
        // @xmldom/xmldom
        'prefix is non-null and namespace is null',
        // Firefox
        'prefix not bound to a namespace', // en
        'prefix inte bundet till en namnrymd', // sv
        // Chrome
        /Namespace prefix .+ is not defined/
    ];

    for (let i = 0; i < missingNamespaceStrings.length; i++) {
        const regexp = new RegExp(missingNamespaceStrings[i]);
        if (regexp.test(error.message)) {
            return true;
        }
    }

    return false;
}

// This should fix most missing namespace errors, but it's not a complete solution.
function addMissingNamespaces(xmlString) {
    const rootTagMatch = xmlString.match(/<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/);
    if (!rootTagMatch) {
        return xmlString;
    }
    const rootTagName = rootTagMatch[1];

    const declaredPrefixes = getAllDeclaredNamespacePrefixes(xmlString);
    const usedPrefixes = getUsedNamespacePrefixes(xmlString);
    const missingPrefixes = usedPrefixes.filter((prefix) => declaredPrefixes.indexOf(prefix) === -1);
    if (missingPrefixes.length === 0) {
        return xmlString;
    }

    const namespaceDeclarations = createNamespaceDeclarations(missingPrefixes);
    return insertDeclarationsIntoRoot(xmlString, rootTagName, namespaceDeclarations);
}

function getAllDeclaredNamespacePrefixes(xmlContent) {
    const prefixes = [];
    const namespaceDeclarationRegex = /xmlns:([\w-]+)=["'][^"']+["']/g;
    let match;
    while ((match = namespaceDeclarationRegex.exec(xmlContent)) !== null) {
        if (prefixes.indexOf(match[1]) === -1) {
            prefixes.push(match[1]);
        }
    }
    return prefixes;
}

function getUsedNamespacePrefixes(xmlContent) {
    const prefixes = [];
    const prefixUsageRegex = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
    let match;
    while ((match = prefixUsageRegex.exec(xmlContent)) !== null) {
        const prefix = match[1];
        if (prefix === 'xmlns' || prefix === 'xml') {
            continue;
        }
        if (prefixes.indexOf(prefix) === -1) {
            prefixes.push(prefix);
        }
    }
    return prefixes;
}

const KNOWN_NAMESPACE_URIS = {
    xmp: 'http://ns.adobe.com/xap/1.0/',
    tiff: 'http://ns.adobe.com/tiff/1.0/',
    exif: 'http://ns.adobe.com/exif/1.0/',
    dc: 'http://purl.org/dc/elements/1.1/',
    xmpMM: 'http://ns.adobe.com/xap/1.0/mm/',
    stEvt: 'http://ns.adobe.com/xap/1.0/sType/ResourceEvent#',
    stRef: 'http://ns.adobe.com/xap/1.0/sType/ResourceRef#',
    photoshop: 'http://ns.adobe.com/photoshop/1.0/'
};

function createNamespaceDeclarations(prefixes) {
    const declarations = [];
    for (let i = 0; i < prefixes.length; i++) {
        const prefix = prefixes[i];
        const uri = KNOWN_NAMESPACE_URIS[prefix] || 'http://fallback.namespace/' + prefix;
        declarations.push(' xmlns:' + prefix + '="' + uri + '"');
    }
    return declarations.join('');
}

function insertDeclarationsIntoRoot(xmlString, rootTagName, declarations) {
    const rootTagPattern = new RegExp('<' + rootTagName + '([^>]*)>');
    return xmlString.replace(rootTagPattern, '<' + rootTagName + '$1' + declarations + '>');
}


/***/ }),

/***/ "./node_modules/exifreader/src/xmp-tag-names.js":
/*!******************************************************!*\
  !*** ./node_modules/exifreader/src/xmp-tag-names.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-common.js */ "./node_modules/exifreader/src/tag-names-common.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    'tiff:Orientation'(value) {
        if (value === '1') {
            return 'Horizontal (normal)';
        }
        if (value === '2') {
            return 'Mirror horizontal';
        }
        if (value === '3') {
            return 'Rotate 180';
        }
        if (value === '4') {
            return 'Mirror vertical';
        }
        if (value === '5') {
            return 'Mirror horizontal and rotate 270 CW';
        }
        if (value === '6') {
            return 'Rotate 90 CW';
        }
        if (value === '7') {
            return 'Mirror horizontal and rotate 90 CW';
        }
        if (value === '8') {
            return 'Rotate 270 CW';
        }
        return value;
    },
    'tiff:ResolutionUnit': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ResolutionUnit(parseInt(value, 10)),
    'tiff:XResolution': (value) => fraction(_tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].XResolution, value),
    'tiff:YResolution': (value) => fraction(_tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].YResolution, value),
    'exif:ApertureValue': (value) => fraction(_tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ApertureValue, value),
    'exif:GPSLatitude': calculateGPSValue,
    'exif:GPSLongitude': calculateGPSValue,
    'exif:FNumber': (value) => fraction(_tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].FNumber, value),
    'exif:FocalLength': (value) => fraction(_tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].FocalLength, value),
    'exif:FocalPlaneResolutionUnit': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].FocalPlaneResolutionUnit(parseInt(value, 10)),
    'exif:ColorSpace': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ColorSpace(parseNumber(value)),
    'exif:ComponentsConfiguration'(value, description) {
        if (/^\d, \d, \d, \d$/.test(description)) {
            const numbers = description.split(', ').map((number) => number.charCodeAt(0));
            return _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ComponentsConfiguration(numbers);
        }
        return description;
    },
    'exif:Contrast': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].Contrast(parseInt(value, 10)),
    'exif:CustomRendered': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].CustomRendered(parseInt(value, 10)),
    'exif:ExposureMode': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ExposureMode(parseInt(value, 10)),
    'exif:ExposureProgram': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ExposureProgram(parseInt(value, 10)),
    'exif:ExposureTime'(value) {
        if (isFraction(value)) {
            return _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ExposureTime(value.split('/').map((number) => parseInt(number, 10)));
        }
        return value;
    },
    'exif:MeteringMode': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].MeteringMode(parseInt(value, 10)),
    'exif:Saturation': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].Saturation(parseInt(value, 10)),
    'exif:SceneCaptureType': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].SceneCaptureType(parseInt(value, 10)),
    'exif:Sharpness': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].Sharpness(parseInt(value, 10)),
    'exif:ShutterSpeedValue': (value) => fraction(_tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].ShutterSpeedValue, value),
    'exif:WhiteBalance': (value) => _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"].WhiteBalance(parseInt(value, 10))
});

function fraction(func, value) {
    if (isFraction(value)) {
        return func(value.split('/'));
    }
    return value;
}

function parseNumber(value) {
    if (value.substring(0, 2) === '0x') {
        return parseInt(value.substring(2), 16);
    }
    return parseInt(value, 10);
}

function isFraction(value) {
    return /^-?\d+\/-?\d+$/.test(value);
}

function calculateGPSValue(value) {
    const [degreesString, minutesString] = value.split(',');
    if ((degreesString !== undefined) && (minutesString !== undefined)) {
        const degrees = parseFloat(degreesString);
        const minutes = parseFloat(minutesString);
        const ref = minutesString.charAt(minutesString.length - 1);
        if ((!Number.isNaN(degrees)) && (!Number.isNaN(minutes))) {
            return '' + (degrees + minutes / 60) + ref;
        }
    }
    return value;
}


/***/ }),

/***/ "./node_modules/exifreader/src/xmp-tags.js":
/*!*************************************************!*\
  !*** ./node_modules/exifreader/src/xmp-tags.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/exifreader/src/utils.js");
/* harmony import */ var _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmp-tag-names.js */ "./node_modules/exifreader/src/xmp-tag-names.js");
/* harmony import */ var _dom_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-parser.js */ "./node_modules/exifreader/src/dom-parser.js");
/* harmony import */ var _xmp_namespaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xmp-namespaces.js */ "./node_modules/exifreader/src/xmp-namespaces.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */






/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

class ParseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ParseError';
    }
}

function read(dataView, chunks, domParser) {
    const tags = {};

    if (typeof dataView === 'string') {
        readTags(tags, dataView, domParser);
        return tags;
    }

    const [standardXmp, extendedXmp] = extractCompleteChunks(dataView, chunks);

    const hasStandardTags = readTags(tags, standardXmp, domParser);

    if (extendedXmp) {
        const hasExtendedTags = readTags(tags, extendedXmp, domParser);

        if (!hasStandardTags && !hasExtendedTags) {
            // Some writers are not spec-compliant in that they split an XMP
            // metadata tree over both the standard XMP block and the extended
            // XMP block. If we failed parsing both of the XMPs in the regular
            // way, we try to combine them to see if that works better.
            delete tags._raw;
            readTags(tags, combineChunks(dataView, chunks), domParser);
        }
    }

    return tags;
}

// The first chunk is always the regular XMP document. Then there is something
// called extended XMP. The extended XMP is also a single XMP document but it
// can be divided into multiple chunks that need to be combined into one.
function extractCompleteChunks(dataView, chunks) {
    if (chunks.length === 0) {
        return [];
    }

    const completeChunks = [combineChunks(dataView, chunks.slice(0, 1))];
    if (chunks.length > 1) {
        completeChunks.push(combineChunks(dataView, chunks.slice(1)));
    }

    return completeChunks;
}

function combineChunks(dataView, chunks) {
    const totalLength = chunks.reduce((size, chunk) => size + chunk.length, 0);
    const combinedChunks = new Uint8Array(totalLength);
    let offset = 0;

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const slice = dataView.buffer.slice(chunk.dataOffset, chunk.dataOffset + chunk.length);
        combinedChunks.set(new Uint8Array(slice), offset);
        offset += chunk.length;
    }

    return new DataView(combinedChunks.buffer);
}

function readTags(tags, chunkDataView, domParser) {
    try {
        const {doc, raw} = getDocument(chunkDataView, domParser);
        tags._raw = (tags._raw || '') + raw;
        const rdf = getRDF(doc);

        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tags, parseXMPObject(convertToObject(rdf, true)));
        return true;
    } catch (error) {
        return false;
    }
}

function getDocument(chunkDataView, _domParser) {
    const domParser = _dom_parser_js__WEBPACK_IMPORTED_MODULE_2__["default"].get(_domParser);
    if (!domParser) {
        console.warn('Warning: DOMParser is not available. It is needed to be able to parse XMP tags.'); // eslint-disable-line no-console
        throw new Error();
    }

    const xmlString = typeof chunkDataView === 'string' ? chunkDataView : (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getStringFromDataView)(chunkDataView, 0, chunkDataView.byteLength);
    const doc = parseFromString(domParser, trimXmlSource(xmlString));

    return {
        doc,
        raw: xmlString,
    };
}

function trimXmlSource(xmlSource) {
    return xmlSource.replace(/^.+(<\?xpacket begin)/, '$1').replace(/(<\?xpacket end=".*"\?>).+$/, '$1');
}

function parseFromString(domParser, xmlString, isRetry = false) {
    try {
        const doc = domParser.parseFromString(xmlString, 'application/xml');
        const errors = doc.getElementsByTagName('parsererror');
        if (errors.length > 0) {
            throw new ParseError(errors[0].textContent);
        }
        return doc;
    } catch (error) {
        if (error.name === 'ParseError' && (0,_xmp_namespaces_js__WEBPACK_IMPORTED_MODULE_3__.isMissingNamespaceError)(error) && !isRetry) {
            // Retry once after trying to fix the invalid XML.
            return parseFromString(domParser, (0,_xmp_namespaces_js__WEBPACK_IMPORTED_MODULE_3__.addMissingNamespaces)(xmlString), true);
        }
        throw error;
    }
}

function getRDF(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].tagName === 'x:xmpmeta') {
            return getRDF(node.childNodes[i]);
        }
        if (node.childNodes[i].tagName === 'rdf:RDF') {
            return node.childNodes[i];
        }
    }

    throw new Error();
}

function convertToObject(node, isTopNode = false) {
    const childNodes = getChildNodes(node);

    if (hasTextOnlyContent(childNodes)) {
        if (isTopNode) {
            return {};
        }
        return getTextValue(childNodes[0]);
    }

    return getElementsFromNodes(childNodes);
}

function getChildNodes(node) {
    const elements = [];

    for (let i = 0; i < node.childNodes.length; i++) {
        elements.push(node.childNodes[i]);
    }

    return elements;
}

function hasTextOnlyContent(nodes) {
    return (nodes.length === 1) && (nodes[0].nodeName === '#text');
}

function getTextValue(node) {
    return node.nodeValue;
}

function getElementsFromNodes(nodes) {
    const elements = {};

    nodes.forEach((node) => {
        if (isElement(node)) {
            const nodeElement = getElementFromNode(node);

            if (elements[node.nodeName] !== undefined) {
                if (!Array.isArray(elements[node.nodeName])) {
                    elements[node.nodeName] = [elements[node.nodeName]];
                }
                elements[node.nodeName].push(nodeElement);
            } else {
                elements[node.nodeName] = nodeElement;
            }
        }
    });

    return elements;
}

function isElement(node) {
    return (node.nodeName) && (node.nodeName !== '#text');
}

function getElementFromNode(node) {
    return {
        attributes: getAttributes(node),
        value: convertToObject(node)
    };
}

function getAttributes(element) {
    const attributes = {};

    for (let i = 0; i < element.attributes.length; i++) {
        attributes[element.attributes[i].nodeName] = decodeURIComponent(escape(element.attributes[i].value));
    }

    return attributes;
}

function parseXMPObject(xmpObject) {
    const tags = {};

    if (typeof xmpObject === 'string') {
        return xmpObject;
    }

    for (const nodeName in xmpObject) {
        let nodes = xmpObject[nodeName];

        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        nodes.forEach((node) => {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tags, parseNodeAttributesAsTags(node.attributes));
            if (typeof node.value === 'object') {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tags, parseNodeChildrenAsTags(node.value));
            }
        });
    }

    return tags;
}

function parseNodeAttributesAsTags(attributes) {
    const tags = {};

    for (const name in attributes) {
        try {
            if (isTagAttribute(name)) {
                tags[getLocalName(name)] = {
                    value: attributes[name],
                    attributes: {},
                    description: getDescription(attributes[name], name)
                };
            }
        } catch (error) {
            // Keep going and try to parse the rest of the tags.
        }
    }

    return tags;
}

function isTagAttribute(name) {
    return (name !== 'rdf:parseType') && (!isNamespaceDefinition(name));
}

function isNamespaceDefinition(name) {
    return name.split(':')[0] === 'xmlns';
}

function getLocalName(name) {
    if (/^MicrosoftPhoto(_\d+_)?:Rating$/i.test(name)) {
        return 'RatingPercent';
    }
    return name.split(':')[1];
}

function getDescription(value, name = undefined) {
    if (Array.isArray(value)) {
        const arrayDescription = getDescriptionOfArray(value);
        if ((name) && (typeof _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name] === 'function')) {
            return _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name](value, arrayDescription);
        }
        return arrayDescription;
    }
    if (typeof value === 'object') {
        return getDescriptionOfObject(value);
    }

    try {
        if ((name) && (typeof _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name] === 'function')) {
            return _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name](value);
        }
        return decodeURIComponent(escape(value));
    } catch (error) {
        return value;
    }
}

function getDescriptionOfArray(value) {
    return value.map((item) => {
        if (item.value !== undefined) {
            return getDescription(item.value);
        }
        return getDescription(item);
    }).join(', ');
}

function getDescriptionOfObject(value) {
    const descriptions = [];

    for (const key in value) {
        descriptions.push(`${getClearTextKey(key)}: ${getDescription(value[key].value)}`);
    }

    return descriptions.join('; ');
}

function getClearTextKey(key) {
    if (key === 'CiAdrCity') {
        return 'CreatorCity';
    }
    if (key === 'CiAdrCtry') {
        return 'CreatorCountry';
    }
    if (key === 'CiAdrExtadr') {
        return 'CreatorAddress';
    }
    if (key === 'CiAdrPcode') {
        return 'CreatorPostalCode';
    }
    if (key === 'CiAdrRegion') {
        return 'CreatorRegion';
    }
    if (key === 'CiEmailWork') {
        return 'CreatorWorkEmail';
    }
    if (key === 'CiTelWork') {
        return 'CreatorWorkPhone';
    }
    if (key === 'CiUrlWork') {
        return 'CreatorWorkUrl';
    }
    return key;
}

function parseNodeChildrenAsTags(children) {
    const tags = {};

    for (const name in children) {
        try {
            if (!isNamespaceDefinition(name)) {
                tags[getLocalName(name)] = parseNodeAsTag(children[name], name);
            }
        } catch (error) {
            // Keep going and try to parse the rest of the tags.
        }
    }

    return tags;
}

function parseNodeAsTag(node, name) {
    if (isDuplicateTag(node)) {
        return parseNodeAsDuplicateTag(node, name);
    }
    if (isEmptyResourceTag(node)) {
        return {value: '', attributes: {}, description: ''};
    }
    if (hasNestedSimpleRdfDescription(node)) {
        return parseNodeAsSimpleRdfDescription(node, name);
    }
    if (hasNestedStructureRdfDescription(node)) {
        return parseNodeAsStructureRdfDescription(node, name);
    }
    if (isCompactStructure(node)) {
        return parseNodeAsCompactStructure(node, name);
    }
    if (isArray(node)) {
        return parseNodeAsArray(node, name);
    }
    return parseNodeAsSimpleValue(node, name);
}

function isEmptyResourceTag(node) {
    return (node.attributes['rdf:parseType'] === 'Resource')
        && (typeof node.value === 'string')
        && (node.value.trim() === '');
}

function isDuplicateTag(node) {
    return Array.isArray(node);
}

function parseNodeAsDuplicateTag(node, name) {
    return parseNodeAsSimpleValue(node[node.length - 1], name);
}

function hasNestedSimpleRdfDescription(node) {
    return ((node.attributes['rdf:parseType'] === 'Resource') && (node.value['rdf:value'] !== undefined))
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] !== undefined));
}

function parseNodeAsSimpleRdfDescription(node, name) {
    const attributes = parseNodeAttributes(node);

    if (node.value['rdf:Description'] !== undefined) {
        node = node.value['rdf:Description'];
    }

    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(attributes, parseNodeAttributes(node), parseNodeChildrenAsAttributes(node));

    const value = parseRdfValue(node);

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseNodeAttributes(node) {
    const attributes = {};

    for (const name in node.attributes) {
        if ((name !== 'rdf:parseType') && (name !== 'rdf:resource') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.attributes[name];
        }
    }

    return attributes;
}

function parseNodeChildrenAsAttributes(node) {
    const attributes = {};

    for (const name in node.value) {
        if ((name !== 'rdf:value') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.value[name].value;
        }
    }

    return attributes;
}

function parseRdfValue(node) {
    return getURIValue(node.value['rdf:value']) || node.value['rdf:value'].value;
}

function hasNestedStructureRdfDescription(node) {
    return (node.attributes['rdf:parseType'] === 'Resource')
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] === undefined));
}

function parseNodeAsStructureRdfDescription(node, name) {
    const tag = {
        value: {},
        attributes: {}
    };

    if (node.value['rdf:Description'] !== undefined) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tag.value, parseNodeAttributesAsTags(node.value['rdf:Description'].attributes));
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tag.attributes, parseNodeAttributes(node));
        node = node.value['rdf:Description'];
    }

    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectAssign)(tag.value, parseNodeChildrenAsTags(node.value));

    tag.description = getDescription(tag.value, name);

    return tag;
}

function isCompactStructure(node) {
    return (Object.keys(node.value).length === 0)
        && (node.attributes['xml:lang'] === undefined)
        && (node.attributes['rdf:resource'] === undefined);
}

function parseNodeAsCompactStructure(node, name) {
    const value = parseNodeAttributesAsTags(node.attributes);

    return {
        value,
        attributes: {},
        description: getDescription(value, name)
    };
}

function isArray(node) {
    return getArrayChild(node.value) !== undefined;
}

function getArrayChild(value) {
    return value['rdf:Bag'] || value['rdf:Seq'] || value['rdf:Alt'];
}

function parseNodeAsArray(node, name) {
    let items = getArrayChild(node.value).value['rdf:li'];
    const attributes = parseNodeAttributes(node);
    const value = [];

    if (items === undefined) {
        items = [];
    } else if (!Array.isArray(items)) {
        items = [items];
    }

    items.forEach((item) => {
        value.push(parseArrayValue(item));
    });

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseArrayValue(item) {
    if (hasNestedSimpleRdfDescription(item)) {
        return parseNodeAsSimpleRdfDescription(item);
    }
    if (hasNestedStructureRdfDescription(item)) {
        return parseNodeAsStructureRdfDescription(item).value;
    }
    if (isCompactStructure(item)) {
        return parseNodeAsCompactStructure(item).value;
    }

    return parseNodeAsSimpleValue(item);
}

function parseNodeAsSimpleValue(node, name) {
    const value = getURIValue(node) || parseXMPObject(node.value);

    return {
        value,
        attributes: parseNodeAttributes(node),
        description: getDescription(value, name)
    };
}

function getURIValue(node) {
    return node.attributes && node.attributes['rdf:resource'];
}


/***/ }),

/***/ "./node_modules/for-each/index.js":
/*!****************************************!*\
  !*** ./node_modules/for-each/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isCallable = __webpack_require__(/*! is-callable */ "./node_modules/is-callable/index.js");

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

/** @type {(x: unknown) => x is readonly unknown[]} */
function isArray(x) {
    return toStr.call(x) === '[object Array]';
}

/** @type {import('.')._internal} */
module.exports = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (isArray(list)) {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");

var $Error = __webpack_require__(/*! es-errors */ "./node_modules/es-errors/index.js");
var $EvalError = __webpack_require__(/*! es-errors/eval */ "./node_modules/es-errors/eval.js");
var $RangeError = __webpack_require__(/*! es-errors/range */ "./node_modules/es-errors/range.js");
var $ReferenceError = __webpack_require__(/*! es-errors/ref */ "./node_modules/es-errors/ref.js");
var $SyntaxError = __webpack_require__(/*! es-errors/syntax */ "./node_modules/es-errors/syntax.js");
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var $URIError = __webpack_require__(/*! es-errors/uri */ "./node_modules/es-errors/uri.js");

var abs = __webpack_require__(/*! math-intrinsics/abs */ "./node_modules/math-intrinsics/abs.js");
var floor = __webpack_require__(/*! math-intrinsics/floor */ "./node_modules/math-intrinsics/floor.js");
var max = __webpack_require__(/*! math-intrinsics/max */ "./node_modules/math-intrinsics/max.js");
var min = __webpack_require__(/*! math-intrinsics/min */ "./node_modules/math-intrinsics/min.js");
var pow = __webpack_require__(/*! math-intrinsics/pow */ "./node_modules/math-intrinsics/pow.js");
var round = __webpack_require__(/*! math-intrinsics/round */ "./node_modules/math-intrinsics/round.js");
var sign = __webpack_require__(/*! math-intrinsics/sign */ "./node_modules/math-intrinsics/sign.js");

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");
var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = __webpack_require__(/*! get-proto */ "./node_modules/get-proto/index.js");
var $ObjectGPO = __webpack_require__(/*! get-proto/Object.getPrototypeOf */ "./node_modules/get-proto/Object.getPrototypeOf.js");
var $ReflectGPO = __webpack_require__(/*! get-proto/Reflect.getPrototypeOf */ "./node_modules/get-proto/Reflect.getPrototypeOf.js");

var $apply = __webpack_require__(/*! call-bind-apply-helpers/functionApply */ "./node_modules/call-bind-apply-helpers/functionApply.js");
var $call = __webpack_require__(/*! call-bind-apply-helpers/functionCall */ "./node_modules/call-bind-apply-helpers/functionCall.js");

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/get-proto/Object.getPrototypeOf.js":
/*!*********************************************************!*\
  !*** ./node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;


/***/ }),

/***/ "./node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;


/***/ }),

/***/ "./node_modules/get-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-proto/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ "./node_modules/get-proto/Reflect.getPrototypeOf.js");
var originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ "./node_modules/get-proto/Object.getPrototypeOf.js");

var getDunderProto = __webpack_require__(/*! dunder-proto/get */ "./node_modules/dunder-proto/get.js");

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;


/***/ }),

/***/ "./node_modules/gopd/gOPD.js":
/*!***********************************!*\
  !*** ./node_modules/gopd/gOPD.js ***!
  \***********************************/
/***/ (function(module) {

"use strict";


/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;


/***/ }),

/***/ "./node_modules/gopd/index.js":
/*!************************************!*\
  !*** ./node_modules/gopd/index.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/** @type {import('.')} */
var $gOPD = __webpack_require__(/*! ./gOPD */ "./node_modules/gopd/gOPD.js");

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! es-define-property */ "./node_modules/es-define-property/index.js");

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	return !!$defineProperty;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!$defineProperty) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has-tostringtag/shams.js":
/*!***********************************************!*\
  !*** ./node_modules/has-tostringtag/shams.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js");

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ "./node_modules/hasown/index.js":
/*!**************************************!*\
  !*** ./node_modules/hasown/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ (function(module) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");

var $toString = callBound('Object.prototype.toString');

/** @type {import('.')} */
var isStandardArguments = function isArguments(value) {
	if (
		hasToStringTag
		&& value
		&& typeof value === 'object'
		&& Symbol.toStringTag in value
	) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

/** @type {import('.')} */
var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null
		&& typeof value === 'object'
		&& 'length' in value
		&& typeof value.length === 'number'
		&& value.length >= 0
		&& $toString(value) !== '[object Array]'
		&& 'callee' in value
		&& $toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

// @ts-expect-error TODO make this not error
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

/** @type {import('.')} */
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./node_modules/is-callable/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};


/***/ }),

/***/ "./node_modules/is-generator-function/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/is-generator-function/index.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var safeRegexTest = __webpack_require__(/*! safe-regex-test */ "./node_modules/safe-regex-test/index.js");
var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var getProto = __webpack_require__(/*! get-proto */ "./node_modules/get-proto/index.js");

var toStr = callBound('Object.prototype.toString');
var fnToStr = callBound('Function.prototype.toString');

var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
/** @type {undefined | false | null | GeneratorFunctionConstructor} */
var GeneratorFunction;

/** @type {import('.')} */
module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex(fnToStr(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc
			// eslint-disable-next-line no-extra-parens
			? /** @type {GeneratorFunctionConstructor} */ (getProto(generatorFunc))
			: false;
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),

/***/ "./node_modules/is-nan/implementation.js":
/*!***********************************************!*\
  !*** ./node_modules/is-nan/implementation.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function isNaN(value) {
	return value !== value;
};


/***/ }),

/***/ "./node_modules/is-nan/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-nan/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/is-nan/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/is-nan/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/is-nan/shim.js");

var polyfill = callBind(getPolyfill(), Number);

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/is-nan/polyfill.js":
/*!*****************************************!*\
  !*** ./node_modules/is-nan/polyfill.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/is-nan/implementation.js");

module.exports = function getPolyfill() {
	if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
		return Number.isNaN;
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/is-nan/shim.js":
/*!*************************************!*\
  !*** ./node_modules/is-nan/shim.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/is-nan/polyfill.js");

/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

module.exports = function shimNumberIsNaN() {
	var polyfill = getPolyfill();
	define(Number, { isNaN: polyfill }, {
		isNaN: function testIsNaN() {
			return Number.isNaN !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();
var hasOwn = __webpack_require__(/*! hasown */ "./node_modules/hasown/index.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

/** @type {import('.')} */
var fn;

if (hasToStringTag) {
	/** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
	var $exec = callBound('RegExp.prototype.exec');
	/** @type {object} */
	var isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	/** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
	var badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}

	/** @type {import('.')} */
	// @ts-expect-error TS can't figure out that the $exec call always throws
	// eslint-disable-next-line consistent-return
	fn = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {NonNullable<typeof gOPD>} */ (gOPD)(/** @type {{ lastIndex?: unknown }} */ (value), 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			// eslint-disable-next-line no-extra-parens
			$exec(value, /** @type {string} */ (/** @type {unknown} */ (badStringifier)));
		} catch (e) {
			return e === isRegexMarker;
		}
	};
} else {
	/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
	var $toString = callBound('Object.prototype.toString');
	/** @const @type {'[object RegExp]'} */
	var regexClass = '[object RegExp]';

	/** @type {import('.')} */
	fn = function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};
}

module.exports = fn;


/***/ }),

/***/ "./node_modules/is-typed-array/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-typed-array/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var whichTypedArray = __webpack_require__(/*! which-typed-array */ "./node_modules/which-typed-array/index.js");

/** @type {import('.')} */
module.exports = function isTypedArray(value) {
	return !!whichTypedArray(value);
};


/***/ }),

/***/ "./node_modules/math-intrinsics/abs.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/abs.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./abs')} */
module.exports = Math.abs;


/***/ }),

/***/ "./node_modules/math-intrinsics/floor.js":
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/floor.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./floor')} */
module.exports = Math.floor;


/***/ }),

/***/ "./node_modules/math-intrinsics/isNaN.js":
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/isNaN.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ "./node_modules/math-intrinsics/max.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/max.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./max')} */
module.exports = Math.max;


/***/ }),

/***/ "./node_modules/math-intrinsics/min.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/min.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./min')} */
module.exports = Math.min;


/***/ }),

/***/ "./node_modules/math-intrinsics/pow.js":
/*!*********************************************!*\
  !*** ./node_modules/math-intrinsics/pow.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./pow')} */
module.exports = Math.pow;


/***/ }),

/***/ "./node_modules/math-intrinsics/round.js":
/*!***********************************************!*\
  !*** ./node_modules/math-intrinsics/round.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


/** @type {import('./round')} */
module.exports = Math.round;


/***/ }),

/***/ "./node_modules/math-intrinsics/sign.js":
/*!**********************************************!*\
  !*** ./node_modules/math-intrinsics/sign.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(/*! ./isNaN */ "./node_modules/math-intrinsics/isNaN.js");

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};


/***/ }),

/***/ "./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/node-polyfill-webpack-plugin/node_modules/buffer/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var objectKeys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var $Object = __webpack_require__(/*! es-object-atoms */ "./node_modules/es-object-atoms/index.js");
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? $Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (target == null) { throw new TypeError('target must be an object'); }
	var to = $Object(target); // step 1
	if (arguments.length === 1) {
		return to; // step 2
	}
	for (var s = 1; s < arguments.length; ++s) {
		var from = $Object(arguments[s]); // step 3.a.i

		// step 3.a.ii:
		var keys = objectKeys(from);
		var getSymbols = hasSymbols && ($Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			var syms = getSymbols(from);
			for (var j = 0; j < syms.length; ++j) {
				var key = syms[j];
				if ($propIsEnumerable(from, key)) {
					$push(keys, key);
				}
			}
		}

		// step 3.a.iii:
		for (var i = 0; i < keys.length; ++i) {
			var nextKey = keys[i];
			if ($propIsEnumerable(from, nextKey)) { // step 3.a.iii.2
				var propValue = from[nextKey]; // step 3.a.iii.2.a
				to[nextKey] = propValue; // step 3.a.iii.2.b
			}
		}
	}

	return to; // step 4
};


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/possible-typed-array-names/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/possible-typed-array-names/index.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = [
	'Float16Array',
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/safe-regex-test/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");

var $exec = callBound('RegExp.prototype.exec');
var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");

/** @type {import('.')} */
module.exports = function regexTester(regex) {
	if (!isRegex(regex)) {
		throw new $TypeError('`regex` must be a RegExp');
	}
	return function test(s) {
		return $exec(regex, s) !== null;
	};
};


/***/ }),

/***/ "./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var define = __webpack_require__(/*! define-data-property */ "./node_modules/define-data-property/index.js");
var hasDescriptors = __webpack_require__(/*! has-property-descriptors */ "./node_modules/has-property-descriptors/index.js")();
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");

var $TypeError = __webpack_require__(/*! es-errors/type */ "./node_modules/es-errors/type.js");
var $floor = GetIntrinsic('%Math.floor%');

/** @type {import('.')} */
module.exports = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: function() { return /* binding */ __addDisposableResource; },
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __disposeResources: function() { return /* binding */ __disposeResources; },
/* harmony export */   __esDecorate: function() { return /* binding */ __esDecorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __propKey: function() { return /* binding */ __propKey; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __rewriteRelativeImportExtension: function() { return /* binding */ __rewriteRelativeImportExtension; },
/* harmony export */   __runInitializers: function() { return /* binding */ __runInitializers; },
/* harmony export */   __setFunctionName: function() { return /* binding */ __setFunctionName; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/support/types.js":
/*!********************************************!*\
  !*** ./node_modules/util/support/types.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9



var isArgumentsObject = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var isGeneratorFunction = __webpack_require__(/*! is-generator-function */ "./node_modules/is-generator-function/index.js");
var whichTypedArray = __webpack_require__(/*! which-typed-array */ "./node_modules/which-typed-array/index.js");
var isTypedArray = __webpack_require__(/*! is-typed-array */ "./node_modules/is-typed-array/index.js");

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== 'object') {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch(e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return (
    isTypedArray(value) ||
    isDataView(value)
  );
}
exports.isArrayBufferView = isArrayBufferView;


function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
  typeof Map !== 'undefined' &&
  isMapToString(new Map())
);

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working
    ? isMapToString(value)
    : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
  typeof Set !== 'undefined' &&
  isSetToString(new Set())
);
function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working
    ? isSetToString(value)
    : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
  typeof WeakMap !== 'undefined' &&
  isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working
    ? isWeakMapToString(value)
    : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
  typeof WeakSet !== 'undefined' &&
  isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
  return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working
    ? isArrayBufferToString(value)
    : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  typeof DataView !== 'undefined' &&
  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working
    ? isDataViewToString(value)
    : value instanceof DataView;
}
exports.isDataView = isDataView;

// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working
    ? isSharedArrayBufferToString(value)
    : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return (
    isNumberObject(value) ||
    isStringObject(value) ||
    isBooleanObject(value) ||
    isBigIntObject(value) ||
    isSymbolObject(value)
  );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (
    isArrayBuffer(value) ||
    isSharedArrayBuffer(value)
  );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});


/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnvRegex = /^$/;

if (({"VUE_APP_ROOT_URL_API":"http://localhost:3000/","VUE_APP_ROOT_URL_GUI":"http://localhost:8000/","VUE_APP_BUILD":"dev","VUE_APP_ROOT_URL_PRINT":"http://localhost:4321/","NODE_ENV":"development","BASE_URL":"/"}).NODE_DEBUG) {
  var debugEnv = ({"VUE_APP_ROOT_URL_API":"http://localhost:3000/","VUE_APP_ROOT_URL_GUI":"http://localhost:8000/","VUE_APP_BUILD":"dev","VUE_APP_ROOT_URL_PRINT":"http://localhost:4321/","NODE_ENV":"development","BASE_URL":"/"}).NODE_DEBUG;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/,/g, '$|^')
    .toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}
exports.debuglog = function(set) {
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').slice(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.slice(1, -1);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = __webpack_require__(/*! ./support/types */ "./node_modules/util/support/types.js");

function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)) },
            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./node_modules/which-typed-array/index.js":
/*!*************************************************!*\
  !*** ./node_modules/which-typed-array/index.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(/*! for-each */ "./node_modules/for-each/index.js");
var availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ "./node_modules/available-typed-arrays/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");
var callBound = __webpack_require__(/*! call-bound */ "./node_modules/call-bound/index.js");
var gOPD = __webpack_require__(/*! gopd */ "./node_modules/gopd/index.js");
var getProto = __webpack_require__(/*! get-proto */ "./node_modules/get-proto/index.js");

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ "./node_modules/has-tostringtag/shams.js")();

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');

/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};

/** @typedef {import('./types').Getter} Getter */
/** @type {import('./types').Cache} */
var cache = { __proto__: null };
if (hasToStringTag && gOPD && getProto) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr && getProto) {
			var proto = getProto(arr);
			// @ts-expect-error TS won't narrow inside a closure
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor && proto) {
				var superProto = getProto(proto);
				// @ts-expect-error TS won't narrow inside a closure
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			// @ts-expect-error TODO: fix
			cache['$' + typedArray] = callBind(descriptor.get);
		}
	});
} else {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		var fn = arr.slice || arr.set;
		if (fn) {
			cache[
				/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)
			] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ (
				// @ts-expect-error TODO FIXME
				callBind(fn)
			);
		}
	});
}

/** @type {(value: object) => false | import('.').TypedArrayName} */
var tryTypedArrays = function tryAllTypedArrays(value) {
	/** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
	forEach(
		/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ (cache),
		/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
		function (getter, typedArray) {
			if (!found) {
				try {
					// @ts-expect-error a throw is fine here
					if ('$' + getter(value) === typedArray) {
						found = /** @type {import('.').TypedArrayName} */ ($slice(typedArray, 1));
					}
				} catch (e) { /**/ }
			}
		}
	);
	return found;
};

/** @type {(value: object) => false | import('.').TypedArrayName} */
var trySlices = function tryAllSlices(value) {
	/** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
	forEach(
		/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */(cache),
		/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function (getter, name) {
			if (!found) {
				try {
					// @ts-expect-error a throw is fine here
					getter(value);
					found = /** @type {import('.').TypedArrayName} */ ($slice(name, 1));
				} catch (e) { /**/ }
			}
		}
	);
	return found;
};

/** @type {import('.')} */
module.exports = function whichTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		/** @type {string} */
		var tag = $slice($toString(value), 8, -1);
		if ($indexOf(typedArrays, tag) > -1) {
			return tag;
		}
		if (tag !== 'Object') {
			return false;
		}
		// node < 0.6 hits here on real Typed Arrays
		return trySlices(value);
	}
	if (!gOPD) { return null; } // unknown engine
	return tryTypedArrays(value);
};


/***/ }),

/***/ "./src/jobs/job.ts":
/*!*************************!*\
  !*** ./src/jobs/job.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Job: function() { return /* binding */ Job; }
/* harmony export */ });
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_0__);

const context = self;
class Job {
  constructor() {
    this.registerListeners();
  }
  send(type, data, transferData = null) {
    context.postMessage({
      type,
      data
    }, transferData ? {
      transfer: transferData
    } : null);
  }
  /* PRIVATE */
  registerListeners() {
    context.addEventListener('message', async message => {
      let handlerName = '';
      switch (message.data.type) {
        case '_setAuth_':
          self.localStorage = {
            getItem: () => message.data.authToken,
            length: 0,
            setItem: (key, value) => null,
            clear: () => null,
            removeItem: key => null,
            key: index => null
          };
          break;
        default:
          handlerName = `on${(0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_0__.camelize)(message.data.type, false)}`;
          if (typeof this[handlerName] !== 'function') {
            throw new Error(`Message handler method '${handlerName}' not defined on '${this.constructor.name}'`);
          }
          this[handlerName](message.data.data);
      }
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".worker.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"prepare_session_and_upload.worker": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_pictaccio_admin_gui"] = self["webpackChunk_pictaccio_admin_gui"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./src/jobs/workers/prepare_session_and_upload.worker.ts ***!
  \*******************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.every.js */ "./node_modules/core-js/modules/es.iterator.every.js");
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.reduce.js */ "./node_modules/core-js/modules/es.iterator.reduce.js");
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var exifreader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! exifreader */ "./node_modules/exifreader/src/exif-reader.js");
/* harmony import */ var _pictaccio_admin_gui_jobs_job__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pictaccio/admin-gui/jobs/job */ "./src/jobs/job.ts");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");









const IMAGE_PORTRAIT_SIZE = 2000;
const IMAGE_LANDSCAPE_SIZE = 3000;
class PrepareSessionAndUpload extends _pictaccio_admin_gui_jobs_job__WEBPACK_IMPORTED_MODULE_8__.Job {
  constructor() {
    super();
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "batches", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUpload", 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sessionId", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalUploads", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sessionUploadService", void 0);
  }
  async init() {
    await __webpack_require__.e(/*! import() */ "src_store_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @pictaccio/admin-gui/store */ "./src/store/index.ts"));
    this.sessionUploadService = (await __webpack_require__.e(/*! import() */ "src_store_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @pictaccio/admin-gui/services/session_upload_service */ "./src/services/session_upload_service.ts"))).default;
  }
  /* MESSAGE HANDLERS */
  onAddImages(data) {
    this.batches.push(data);
  }
  async onProcessAndUpload() {
    await this.init();
    if ((0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(this.batches) || this.sessionId === undefined) {
      return;
    }
    await this.processBatches();
  }
  onSetSessionId(id) {
    this.sessionId = id;
  }
  /* PRIVATE */
  async getCanvasAndContext(file, avoidChromeBug, width, height) {
    const bitmap = await createImageBitmap(file, {
      resizeHeight: avoidChromeBug ? width : height,
      resizeWidth: avoidChromeBug ? height : width,
      imageOrientation: 'none'
    });
    const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0);
    return {
      canvas,
      context
    };
  }
  async processFile(file) {
    const {
      'Image Height': exifImageHeight,
      'Image Width': exifImageWidth,
      Orientation: exifOrientation
    } = file['metadata'];
    let height = [6, 8].includes(exifOrientation ? exifOrientation.value : 1) ? exifImageWidth.value : exifImageHeight.value;
    let width = [6, 8].includes(exifOrientation ? exifOrientation.value : 1) ? exifImageHeight.value : exifImageWidth.value;
    const portrait = width < height;
    const ratio = width / height;
    width = Math.min(width, portrait ? IMAGE_PORTRAIT_SIZE : IMAGE_LANDSCAPE_SIZE);
    height = width / ratio;
    const rotation = {
      1: 0,
      3: 180,
      6: 270,
      8: 90
    }[exifOrientation];
    let {
      canvas,
      context
    } = await this.getCanvasAndContext(file, false, width, height);
    const imageData = context.getImageData(0, height - 1, width, 1);
    if (imageData.data.every(subpixel => subpixel === 0)) {
      ({
        canvas,
        context
      } = await this.getCanvasAndContext(file, true, width, height));
    }
    return await canvas.convertToBlob({
      quality: 0.9,
      type: 'image/jpeg'
    });
  }
  processPhoto(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', async () => {
        const metadata = (0,exifreader__WEBPACK_IMPORTED_MODULE_7__.load)(reader.result);
        file['metadata'] = metadata;
        file['bitmap-blob'] = await this.processFile(file);
        resolve(file);
      });
      reader.addEventListener('error', error => {
        console.log('[PrepareSessionAndUpload] Error loading image');
        console.log(error);
        reject(error);
      });
      reader.readAsArrayBuffer(file);
    });
  }
  async processPhotos(photos) {
    return await Promise.all(photos.map(async photo => await this.processPhoto(photo)));
  }
  async processAndUploadGroup(group) {
    const transfer = {
      photoCount: group.photos.length,
      name: group.name
    };
    const photos = (await this.processPhotos(group.photos)).map(file => file['bitmap-blob']);
    let success = false;
    do {
      success = await this.sessionUploadService.uploadGroup(this.sessionId, transfer, photos);
    } while (!success);
  }
  async processAndUploadSubject(subject) {
    const transfer = {
      photoCount: subject.photos.length,
      firstName: subject.firstName,
      lastName: subject.lastName,
      gpi: subject.gpi,
      group: subject.group,
      code: subject.code
    };
    const photos = (await this.processPhotos(subject.photos)).map(file => file['bitmap-blob']);
    let success = false;
    do {
      success = await this.sessionUploadService.uploadSubject(this.sessionId, transfer, photos);
    } while (!success);
  }
  async processBatch(batch) {
    if (batch.groups) {
      for (const group of Object.values(batch.groups)) {
        for (let i = 0; i < 5; i++) {
          try {
            await this.processAndUploadGroup(group);
            break;
          } catch {
            // Pass
          }
        }
        this.processProgress();
      }
    }
    if (batch.subjects) {
      for (const subject of Object.values(batch.subjects)) {
        for (let i = 0; i < 5; i++) {
          try {
            await this.processAndUploadSubject(subject);
            break;
          } catch {
            // Pass
          }
        }
        this.processProgress();
      }
    }
  }
  async processBatches() {
    try {
      this.totalUploads = this.batches.flat().reduce((total, batch) => (Object.values(batch.groups)?.length ?? 0) + (Object.values(batch.subjects)?.length ?? 0) + total, 0);
      for (const batch of this.batches) {
        try {
          await this.processBatch(batch);
        } catch (error) {
          // Pass
        }
      }
    } catch (error) {
      debugger;
    }
  }
  processProgress() {
    this.currentUpload++;
    this.send('progress', {
      percent: Math.round(this.currentUpload / this.totalUploads * 100),
      current: this.currentUpload,
      total: this.totalUploads
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new PrepareSessionAndUpload());
}();
/******/ })()
;
//# sourceMappingURL=prepare_session_and_upload.worker.worker.js.map