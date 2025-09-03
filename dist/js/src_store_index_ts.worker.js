"use strict";
(self["webpackChunk_pictaccio_admin_gui"] = self["webpackChunk_pictaccio_admin_gui"] || []).push([["src_store_index_ts"],{

/***/ "./node_modules/@pictaccio/shared/dist/src/types/app_integration_app.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@pictaccio/shared/dist/src/types/app_integration_app.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppIntegrationApps = void 0;
exports.AppIntegrationApps = [
    'canada-post',
    'elavon',
    'stripe',
    'chase',
    'paypal'
];
//# sourceMappingURL=app_integration_app.js.map

/***/ }),

/***/ "./node_modules/@pictaccio/shared/dist/src/types/custom_external_urls.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@pictaccio/shared/dist/src/types/custom_external_urls.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomExternalUrls = void 0;
class CustomExternalUrls {
    contact;
    root;
    termsAndConditions;
    constructor(externalUrls) {
        this.contact = externalUrls?.contact ?? '';
        this.root = externalUrls?.root ?? '';
        this.termsAndConditions = externalUrls?.termsAndConditions ?? '';
    }
}
exports.CustomExternalUrls = CustomExternalUrls;
//# sourceMappingURL=custom_external_urls.js.map

/***/ }),

/***/ "./node_modules/@pictaccio/shared/dist/src/types/store_customization_colors.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@pictaccio/shared/dist/src/types/store_customization_colors.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreCustomizationColors = void 0;
class StoreCustomizationColors {
    accent;
    constructor(colors) {
        this.accent = colors?.accent ?? '#000000';
    }
}
exports.StoreCustomizationColors = StoreCustomizationColors;
//# sourceMappingURL=store_customization_colors.js.map

/***/ }),

/***/ "./node_modules/@pictaccio/shared/dist/src/utils/diacritics.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@pictaccio/shared/dist/src/utils/diacritics.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeDiacritics = removeDiacritics;
function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//# sourceMappingURL=diacritics.js.map

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOK_PLUGIN_SETTINGS_SET: function() { return /* binding */ HOOK_PLUGIN_SETTINGS_SET; },
/* harmony export */   HOOK_SETUP: function() { return /* binding */ HOOK_SETUP; }
/* harmony export */ });
const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDevtoolsGlobalHook: function() { return /* binding */ getDevtoolsGlobalHook; },
/* harmony export */   getTarget: function() { return /* binding */ getTarget; },
/* harmony export */   isProxyAvailable: function() { return /* binding */ isProxyAvailable; }
/* harmony export */ });
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-expect-error navigator and windows are not available in all environments
    return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : {};
}
const isProxyAvailable = typeof Proxy === 'function';


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPerformanceSupported: function() { return /* reexport safe */ _time_js__WEBPACK_IMPORTED_MODULE_3__.isPerformanceSupported; },
/* harmony export */   now: function() { return /* reexport safe */ _time_js__WEBPACK_IMPORTED_MODULE_3__.now; },
/* harmony export */   setupDevtoolsPlugin: function() { return /* binding */ setupDevtoolsPlugin; }
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./node_modules/@vue/devtools-api/lib/esm/const.js");
/* harmony import */ var _proxy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy.js */ "./node_modules/@vue/devtools-api/lib/esm/proxy.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.js */ "./node_modules/@vue/devtools-api/lib/esm/time.js");






function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = (0,_env_js__WEBPACK_IMPORTED_MODULE_0__.getTarget)();
    const hook = (0,_env_js__WEBPACK_IMPORTED_MODULE_0__.getDevtoolsGlobalHook)();
    const enableProxy = _env_js__WEBPACK_IMPORTED_MODULE_0__.isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(_const_js__WEBPACK_IMPORTED_MODULE_1__.HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new _proxy_js__WEBPACK_IMPORTED_MODULE_2__.ApiProxy(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy,
        });
        if (proxy) {
            setupFn(proxy.proxiedTarget);
        }
    }
}


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/proxy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/proxy.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiProxy: function() { return /* binding */ ApiProxy; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./node_modules/@vue/devtools-api/lib/esm/const.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.js */ "./node_modules/@vue/devtools-api/lib/esm/time.js");


class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
            now() {
                return (0,_time_js__WEBPACK_IMPORTED_MODULE_1__.now)();
            },
        };
        if (hook) {
            hook.on(_const_js__WEBPACK_IMPORTED_MODULE_0__.HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise((resolve) => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}


/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/time.js":
/*!********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/time.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPerformanceSupported: function() { return /* binding */ isPerformanceSupported; },
/* harmony export */   now: function() { return /* binding */ now; }
/* harmony export */ });
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else if (typeof globalThis !== 'undefined' && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = globalThis.perf_hooks.performance;
    }
    else {
        supported = false;
    }
    return supported;
}
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}


/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARRAY_ITERATE_KEY: function() { return /* binding */ ARRAY_ITERATE_KEY; },
/* harmony export */   EffectFlags: function() { return /* binding */ EffectFlags; },
/* harmony export */   EffectScope: function() { return /* binding */ EffectScope; },
/* harmony export */   ITERATE_KEY: function() { return /* binding */ ITERATE_KEY; },
/* harmony export */   MAP_KEY_ITERATE_KEY: function() { return /* binding */ MAP_KEY_ITERATE_KEY; },
/* harmony export */   ReactiveEffect: function() { return /* binding */ ReactiveEffect; },
/* harmony export */   ReactiveFlags: function() { return /* binding */ ReactiveFlags; },
/* harmony export */   TrackOpTypes: function() { return /* binding */ TrackOpTypes; },
/* harmony export */   TriggerOpTypes: function() { return /* binding */ TriggerOpTypes; },
/* harmony export */   WatchErrorCodes: function() { return /* binding */ WatchErrorCodes; },
/* harmony export */   computed: function() { return /* binding */ computed; },
/* harmony export */   customRef: function() { return /* binding */ customRef; },
/* harmony export */   effect: function() { return /* binding */ effect; },
/* harmony export */   effectScope: function() { return /* binding */ effectScope; },
/* harmony export */   enableTracking: function() { return /* binding */ enableTracking; },
/* harmony export */   getCurrentScope: function() { return /* binding */ getCurrentScope; },
/* harmony export */   getCurrentWatcher: function() { return /* binding */ getCurrentWatcher; },
/* harmony export */   isProxy: function() { return /* binding */ isProxy; },
/* harmony export */   isReactive: function() { return /* binding */ isReactive; },
/* harmony export */   isReadonly: function() { return /* binding */ isReadonly; },
/* harmony export */   isRef: function() { return /* binding */ isRef; },
/* harmony export */   isShallow: function() { return /* binding */ isShallow; },
/* harmony export */   markRaw: function() { return /* binding */ markRaw; },
/* harmony export */   onEffectCleanup: function() { return /* binding */ onEffectCleanup; },
/* harmony export */   onScopeDispose: function() { return /* binding */ onScopeDispose; },
/* harmony export */   onWatcherCleanup: function() { return /* binding */ onWatcherCleanup; },
/* harmony export */   pauseTracking: function() { return /* binding */ pauseTracking; },
/* harmony export */   proxyRefs: function() { return /* binding */ proxyRefs; },
/* harmony export */   reactive: function() { return /* binding */ reactive; },
/* harmony export */   reactiveReadArray: function() { return /* binding */ reactiveReadArray; },
/* harmony export */   readonly: function() { return /* binding */ readonly; },
/* harmony export */   ref: function() { return /* binding */ ref; },
/* harmony export */   resetTracking: function() { return /* binding */ resetTracking; },
/* harmony export */   shallowReactive: function() { return /* binding */ shallowReactive; },
/* harmony export */   shallowReadArray: function() { return /* binding */ shallowReadArray; },
/* harmony export */   shallowReadonly: function() { return /* binding */ shallowReadonly; },
/* harmony export */   shallowRef: function() { return /* binding */ shallowRef; },
/* harmony export */   stop: function() { return /* binding */ stop; },
/* harmony export */   toRaw: function() { return /* binding */ toRaw; },
/* harmony export */   toReactive: function() { return /* binding */ toReactive; },
/* harmony export */   toReadonly: function() { return /* binding */ toReadonly; },
/* harmony export */   toRef: function() { return /* binding */ toRef; },
/* harmony export */   toRefs: function() { return /* binding */ toRefs; },
/* harmony export */   toValue: function() { return /* binding */ toValue; },
/* harmony export */   track: function() { return /* binding */ track; },
/* harmony export */   traverse: function() { return /* binding */ traverse; },
/* harmony export */   trigger: function() { return /* binding */ trigger; },
/* harmony export */   triggerRef: function() { return /* binding */ triggerRef; },
/* harmony export */   unref: function() { return /* binding */ unref; },
/* harmony export */   watch: function() { return /* binding */ watch; }
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/


function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    /**
     * @internal
     */
    this._active = true;
    /**
     * @internal track `on` calls, allow `on` call multiple times
     */
    this._on = 0;
    /**
     * @internal
     */
    this.effects = [];
    /**
     * @internal
     */
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (true) {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if ( true && !failSilently) {
    warn(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}

let activeSub;
const EffectFlags = {
  "ACTIVE": 1,
  "1": "ACTIVE",
  "RUNNING": 2,
  "2": "RUNNING",
  "TRACKING": 4,
  "4": "TRACKING",
  "NOTIFIED": 8,
  "8": "NOTIFIED",
  "DIRTY": 16,
  "16": "DIRTY",
  "ALLOW_RECURSE": 32,
  "32": "ALLOW_RECURSE",
  "PAUSED": 64,
  "64": "PAUSED",
  "EVALUATED": 128,
  "128": "EVALUATED"
};
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    /**
     * @internal
     */
    this.deps = void 0;
    /**
     * @internal
     */
    this.depsTail = void 0;
    /**
     * @internal
     */
    this.flags = 1 | 4;
    /**
     * @internal
     */
    this.next = void 0;
    /**
     * @internal
     */
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      if ( true && activeSub !== this) {
        warn(
          "Active effect was not restored correctly - this is likely a Vue internal bug."
        );
      }
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed) {
  if (computed.flags & 4 && !(computed.flags & 16)) {
    return;
  }
  computed.flags &= -17;
  if (computed.globalVersion === globalVersion) {
    return;
  }
  computed.globalVersion = globalVersion;
  if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) {
    return;
  }
  computed.flags |= 2;
  const dep = computed.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed;
  shouldTrack = true;
  try {
    prepareDeps(computed);
    const value = computed.fn(computed._value);
    if (dep.version === 0 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, computed._value)) {
      computed.flags |= 128;
      computed._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed);
    computed.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if ( true && dep.subsHead === link) {
    dep.subsHead = nextSub;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  const e = new ReactiveEffect(fn);
  if (options) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(e, options);
  }
  try {
    e.run();
  } catch (err) {
    e.stop();
    throw err;
  }
  const runner = e.run.bind(e);
  runner.effect = e;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function onEffectCleanup(fn, failSilently = false) {
  if (activeSub instanceof ReactiveEffect) {
    activeSub.cleanup = fn;
  } else if ( true && !failSilently) {
    warn(
      `onEffectCleanup() was called when there was no active effect to associate with.`
    );
  }
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}

let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed) {
    this.computed = computed;
    this.version = 0;
    /**
     * Link between this dep and the current active effect
     */
    this.activeLink = void 0;
    /**
     * Doubly linked list representing the subscribing effects (tail)
     */
    this.subs = void 0;
    /**
     * For object property deps cleanup
     */
    this.map = void 0;
    this.key = void 0;
    /**
     * Subscriber counter
     */
    this.sc = 0;
    /**
     * @internal
     */
    this.__v_skip = true;
    if (true) {
      this.subsHead = void 0;
    }
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    if ( true && activeSub.onTrack) {
      activeSub.onTrack(
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
          {
            effect: activeSub
          },
          debugInfo
        )
      );
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (true) {
        for (let head = this.subsHead; head; head = head.nextSub) {
          if (head.sub.onTrigger && !(head.sub.flags & 8)) {
            head.sub.onTrigger(
              (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
                {
                  effect: head.sub
                },
                debugInfo
              )
            );
          }
        }
      }
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed = link.dep.computed;
    if (computed && !link.dep.subs) {
      computed.flags |= 4 | 16;
      for (let l = computed.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    if ( true && link.dep.subsHead === void 0) {
      link.dep.subsHead = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
   true ? "Object iterate" : 0
);
const MAP_KEY_ITERATE_KEY = Symbol(
   true ? "Map keys iterate" : 0
);
const ARRAY_ITERATE_KEY = Symbol(
   true ? "Array iterate" : 0
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    if (true) {
      dep.track({
        target,
        type,
        key
      });
    } else // removed by dead control flow
{}
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      if (true) {
        dep.trigger({
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        });
      } else // removed by dead control flow
{}
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
    const isArrayIndex = targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}

function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, (v) => v.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self, method, wrapValue) {
  const arr = shallowReadArray(self);
  const iter = arr[method]();
  if (arr !== self && !isShallow(self)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self);
  const needsWrap = arr !== self && !isShallow(self);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toReactive(item), index, self);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
  const arr = shallowReadArray(self);
  let wrappedFn = fn;
  if (arr !== self) {
    if (!isShallow(self)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toReactive(item), index, self);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
  const arr = toRaw(self);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self)[method].apply(self, args);
  endBatch();
  resetTracking();
  return res;
}

const isNonTrackableKeys = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)
);
function hasOwnProperty(key) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? res : res.value;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          if (true) {
            warn(
              `Set operation on key "${String(key)}" failed: target is readonly.`,
              target[key]
            );
          }
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (true) {
      warn(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    if (true) {
      warn(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn(
        `${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly && track(toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
      !readonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(
    instrumentations,
    readonly ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        } else if (true) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        } else if (true) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0,
            oldTarget
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    const type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}

const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1 /* COMMON */;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2 /* COLLECTION */;
    default:
      return 0 /* INVALID */;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */ : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      warn(
        `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
          target
        )}`
      );
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0 /* INVALID */) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(value, "__v_skip") && Object.isExtensible(value)) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;

function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    if (true) {
      this.dep.track({
        target: this,
        type: "get",
        key: "value"
      });
    } else // removed by dead control flow
{}
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      if (true) {
        this.dep.trigger({
          target: this,
          type: "set",
          key: "value",
          newValue,
          oldValue
        });
      } else // removed by dead control flow
{}
    }
  }
}
function triggerRef(ref2) {
  if (ref2.dep) {
    if (true) {
      ref2.dep.trigger({
        target: ref2,
        type: "set",
        key: "value",
        newValue: ref2._value
      });
    } else // removed by dead control flow
{}
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  if ( true && !isProxy(object)) {
    warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
  }
  get value() {
    const val = this._object[this._key];
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source)) {
    return new GetterRefImpl(source);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}

class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    /**
     * @internal
     */
    this._value = void 0;
    /**
     * @internal
     */
    this.dep = new Dep(this);
    /**
     * @internal
     */
    this.__v_isRef = true;
    // TODO isolatedDeclarations "__v_isReadonly"
    // A computed is also a subscriber that tracks other deps
    /**
     * @internal
     */
    this.deps = void 0;
    /**
     * @internal
     */
    this.depsTail = void 0;
    /**
     * @internal
     */
    this.flags = 16;
    /**
     * @internal
     */
    this.globalVersion = globalVersion - 1;
    /**
     * @internal
     */
    this.next = void 0;
    // for backwards compat
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    } else if (true) ;
  }
  get value() {
    const link =  true ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : 0;
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    } else if (true) {
      warn("Write operation failed: computed value is readonly");
    }
  }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  if ( true && debugOptions && !isSSR) {
    cRef.onTrack = debugOptions.onTrack;
    cRef.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}

const TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
const TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
const ReactiveFlags = {
  "SKIP": "__v_skip",
  "IS_REACTIVE": "__v_isReactive",
  "IS_READONLY": "__v_isReadonly",
  "IS_SHALLOW": "__v_isShallow",
  "RAW": "__v_raw",
  "IS_REF": "__v_isRef"
};

const WatchErrorCodes = {
  "WATCH_GETTER": 2,
  "2": "WATCH_GETTER",
  "WATCH_CALLBACK": 3,
  "3": "WATCH_CALLBACK",
  "WATCH_CLEANUP": 4,
  "4": "WATCH_CLEANUP"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
  return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  } else if ( true && !failSilently) {
    warn(
      `onWatcherCleanup() was called when there was no active watcher to associate with.`
    );
  }
}
function watch(source, cb, options = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const warnInvalidSource = (s) => {
    (options.onWarn || warn)(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(s)) {
        return call ? call(s, 2) : s();
      } else {
         true && warnInvalidSource(s);
      }
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP;
     true && warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect.stop();
    if (scope && scope.active) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.remove)(scope.effects, effect);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(v, oldValue[i])) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect = new ReactiveEffect(getter);
  effect.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
  cleanup = effect.onStop = () => {
    const cleanups = cleanupMap.get(effect);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect);
    }
  };
  if (true) {
    effect.onTrack = options.onTrack;
    effect.onTrigger = options.onTrigger;
  }
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect.run();
  }
  watchHandle.pause = effect.pause.bind(effect);
  watchHandle.resume = effect.resume.bind(effect);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}




/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: function() { return /* binding */ BaseTransition; },
/* harmony export */   BaseTransitionPropsValidators: function() { return /* binding */ BaseTransitionPropsValidators; },
/* harmony export */   Comment: function() { return /* binding */ Comment; },
/* harmony export */   DeprecationTypes: function() { return /* binding */ DeprecationTypes; },
/* harmony export */   EffectScope: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope; },
/* harmony export */   ErrorCodes: function() { return /* binding */ ErrorCodes; },
/* harmony export */   ErrorTypeStrings: function() { return /* binding */ ErrorTypeStrings; },
/* harmony export */   Fragment: function() { return /* binding */ Fragment; },
/* harmony export */   KeepAlive: function() { return /* binding */ KeepAlive; },
/* harmony export */   ReactiveEffect: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect; },
/* harmony export */   Static: function() { return /* binding */ Static; },
/* harmony export */   Suspense: function() { return /* binding */ Suspense; },
/* harmony export */   Teleport: function() { return /* binding */ Teleport; },
/* harmony export */   Text: function() { return /* binding */ Text; },
/* harmony export */   TrackOpTypes: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.TrackOpTypes; },
/* harmony export */   TriggerOpTypes: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.TriggerOpTypes; },
/* harmony export */   assertNumber: function() { return /* binding */ assertNumber; },
/* harmony export */   callWithAsyncErrorHandling: function() { return /* binding */ callWithAsyncErrorHandling; },
/* harmony export */   callWithErrorHandling: function() { return /* binding */ callWithErrorHandling; },
/* harmony export */   camelize: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize; },
/* harmony export */   capitalize: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize; },
/* harmony export */   cloneVNode: function() { return /* binding */ cloneVNode; },
/* harmony export */   compatUtils: function() { return /* binding */ compatUtils; },
/* harmony export */   computed: function() { return /* binding */ computed; },
/* harmony export */   createBlock: function() { return /* binding */ createBlock; },
/* harmony export */   createCommentVNode: function() { return /* binding */ createCommentVNode; },
/* harmony export */   createElementBlock: function() { return /* binding */ createElementBlock; },
/* harmony export */   createElementVNode: function() { return /* binding */ createBaseVNode; },
/* harmony export */   createHydrationRenderer: function() { return /* binding */ createHydrationRenderer; },
/* harmony export */   createPropsRestProxy: function() { return /* binding */ createPropsRestProxy; },
/* harmony export */   createRenderer: function() { return /* binding */ createRenderer; },
/* harmony export */   createSlots: function() { return /* binding */ createSlots; },
/* harmony export */   createStaticVNode: function() { return /* binding */ createStaticVNode; },
/* harmony export */   createTextVNode: function() { return /* binding */ createTextVNode; },
/* harmony export */   createVNode: function() { return /* binding */ createVNode; },
/* harmony export */   customRef: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef; },
/* harmony export */   defineAsyncComponent: function() { return /* binding */ defineAsyncComponent; },
/* harmony export */   defineComponent: function() { return /* binding */ defineComponent; },
/* harmony export */   defineEmits: function() { return /* binding */ defineEmits; },
/* harmony export */   defineExpose: function() { return /* binding */ defineExpose; },
/* harmony export */   defineModel: function() { return /* binding */ defineModel; },
/* harmony export */   defineOptions: function() { return /* binding */ defineOptions; },
/* harmony export */   defineProps: function() { return /* binding */ defineProps; },
/* harmony export */   defineSlots: function() { return /* binding */ defineSlots; },
/* harmony export */   devtools: function() { return /* binding */ devtools; },
/* harmony export */   effect: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect; },
/* harmony export */   effectScope: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effectScope; },
/* harmony export */   getCurrentInstance: function() { return /* binding */ getCurrentInstance; },
/* harmony export */   getCurrentScope: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope; },
/* harmony export */   getCurrentWatcher: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentWatcher; },
/* harmony export */   getTransitionRawChildren: function() { return /* binding */ getTransitionRawChildren; },
/* harmony export */   guardReactiveProps: function() { return /* binding */ guardReactiveProps; },
/* harmony export */   h: function() { return /* binding */ h; },
/* harmony export */   handleError: function() { return /* binding */ handleError; },
/* harmony export */   hasInjectionContext: function() { return /* binding */ hasInjectionContext; },
/* harmony export */   hydrateOnIdle: function() { return /* binding */ hydrateOnIdle; },
/* harmony export */   hydrateOnInteraction: function() { return /* binding */ hydrateOnInteraction; },
/* harmony export */   hydrateOnMediaQuery: function() { return /* binding */ hydrateOnMediaQuery; },
/* harmony export */   hydrateOnVisible: function() { return /* binding */ hydrateOnVisible; },
/* harmony export */   initCustomFormatter: function() { return /* binding */ initCustomFormatter; },
/* harmony export */   inject: function() { return /* binding */ inject; },
/* harmony export */   isMemoSame: function() { return /* binding */ isMemoSame; },
/* harmony export */   isProxy: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy; },
/* harmony export */   isReactive: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive; },
/* harmony export */   isReadonly: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly; },
/* harmony export */   isRef: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef; },
/* harmony export */   isRuntimeOnly: function() { return /* binding */ isRuntimeOnly; },
/* harmony export */   isShallow: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow; },
/* harmony export */   isVNode: function() { return /* binding */ isVNode; },
/* harmony export */   markRaw: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw; },
/* harmony export */   mergeDefaults: function() { return /* binding */ mergeDefaults; },
/* harmony export */   mergeModels: function() { return /* binding */ mergeModels; },
/* harmony export */   mergeProps: function() { return /* binding */ mergeProps; },
/* harmony export */   nextTick: function() { return /* binding */ nextTick; },
/* harmony export */   normalizeClass: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass; },
/* harmony export */   normalizeProps: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeProps; },
/* harmony export */   normalizeStyle: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle; },
/* harmony export */   onActivated: function() { return /* binding */ onActivated; },
/* harmony export */   onBeforeMount: function() { return /* binding */ onBeforeMount; },
/* harmony export */   onBeforeUnmount: function() { return /* binding */ onBeforeUnmount; },
/* harmony export */   onBeforeUpdate: function() { return /* binding */ onBeforeUpdate; },
/* harmony export */   onDeactivated: function() { return /* binding */ onDeactivated; },
/* harmony export */   onErrorCaptured: function() { return /* binding */ onErrorCaptured; },
/* harmony export */   onMounted: function() { return /* binding */ onMounted; },
/* harmony export */   onRenderTracked: function() { return /* binding */ onRenderTracked; },
/* harmony export */   onRenderTriggered: function() { return /* binding */ onRenderTriggered; },
/* harmony export */   onScopeDispose: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose; },
/* harmony export */   onServerPrefetch: function() { return /* binding */ onServerPrefetch; },
/* harmony export */   onUnmounted: function() { return /* binding */ onUnmounted; },
/* harmony export */   onUpdated: function() { return /* binding */ onUpdated; },
/* harmony export */   onWatcherCleanup: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.onWatcherCleanup; },
/* harmony export */   openBlock: function() { return /* binding */ openBlock; },
/* harmony export */   popScopeId: function() { return /* binding */ popScopeId; },
/* harmony export */   provide: function() { return /* binding */ provide; },
/* harmony export */   proxyRefs: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs; },
/* harmony export */   pushScopeId: function() { return /* binding */ pushScopeId; },
/* harmony export */   queuePostFlushCb: function() { return /* binding */ queuePostFlushCb; },
/* harmony export */   reactive: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive; },
/* harmony export */   readonly: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly; },
/* harmony export */   ref: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref; },
/* harmony export */   registerRuntimeCompiler: function() { return /* binding */ registerRuntimeCompiler; },
/* harmony export */   renderList: function() { return /* binding */ renderList; },
/* harmony export */   renderSlot: function() { return /* binding */ renderSlot; },
/* harmony export */   resolveComponent: function() { return /* binding */ resolveComponent; },
/* harmony export */   resolveDirective: function() { return /* binding */ resolveDirective; },
/* harmony export */   resolveDynamicComponent: function() { return /* binding */ resolveDynamicComponent; },
/* harmony export */   resolveFilter: function() { return /* binding */ resolveFilter; },
/* harmony export */   resolveTransitionHooks: function() { return /* binding */ resolveTransitionHooks; },
/* harmony export */   setBlockTracking: function() { return /* binding */ setBlockTracking; },
/* harmony export */   setDevtoolsHook: function() { return /* binding */ setDevtoolsHook; },
/* harmony export */   setTransitionHooks: function() { return /* binding */ setTransitionHooks; },
/* harmony export */   shallowReactive: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive; },
/* harmony export */   shallowReadonly: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly; },
/* harmony export */   shallowRef: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef; },
/* harmony export */   ssrContextKey: function() { return /* binding */ ssrContextKey; },
/* harmony export */   ssrUtils: function() { return /* binding */ ssrUtils; },
/* harmony export */   stop: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop; },
/* harmony export */   toDisplayString: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString; },
/* harmony export */   toHandlerKey: function() { return /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey; },
/* harmony export */   toHandlers: function() { return /* binding */ toHandlers; },
/* harmony export */   toRaw: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw; },
/* harmony export */   toRef: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef; },
/* harmony export */   toRefs: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs; },
/* harmony export */   toValue: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toValue; },
/* harmony export */   transformVNodeArgs: function() { return /* binding */ transformVNodeArgs; },
/* harmony export */   triggerRef: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef; },
/* harmony export */   unref: function() { return /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref; },
/* harmony export */   useAttrs: function() { return /* binding */ useAttrs; },
/* harmony export */   useId: function() { return /* binding */ useId; },
/* harmony export */   useModel: function() { return /* binding */ useModel; },
/* harmony export */   useSSRContext: function() { return /* binding */ useSSRContext; },
/* harmony export */   useSlots: function() { return /* binding */ useSlots; },
/* harmony export */   useTemplateRef: function() { return /* binding */ useTemplateRef; },
/* harmony export */   useTransitionState: function() { return /* binding */ useTransitionState; },
/* harmony export */   version: function() { return /* binding */ version; },
/* harmony export */   warn: function() { return /* binding */ warn; },
/* harmony export */   watch: function() { return /* binding */ watch; },
/* harmony export */   watchEffect: function() { return /* binding */ watchEffect; },
/* harmony export */   watchPostEffect: function() { return /* binding */ watchPostEffect; },
/* harmony export */   watchSyncEffect: function() { return /* binding */ watchSyncEffect; },
/* harmony export */   withAsyncContext: function() { return /* binding */ withAsyncContext; },
/* harmony export */   withCtx: function() { return /* binding */ withCtx; },
/* harmony export */   withDefaults: function() { return /* binding */ withDefaults; },
/* harmony export */   withDirectives: function() { return /* binding */ withDirectives; },
/* harmony export */   withMemo: function() { return /* binding */ withMemo; },
/* harmony export */   withScopeId: function() { return /* binding */ withScopeId; }
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/





const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : [`${key}=`, value];
  }
}
function assertNumber(val, type) {
  if (false) // removed by dead control flow
{}
  if (val === void 0) {
    return;
  } else if (typeof val !== "number") {
    warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    warn$1(`${type} is NaN - the duration expression might be incorrect.`);
  }
}

const ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER",
  "COMPONENT_UPDATE": 15,
  "15": "COMPONENT_UPDATE",
  "APP_UNMOUNT_CLEANUP": 16,
  "16": "APP_UNMOUNT_CLEANUP"
};
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else if (true) {
    warn$1(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
    );
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo =  true ? ErrorTypeStrings$1[type] : 0;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (true) {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else // removed by dead control flow
{}
}

const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if ( true && checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if ( true && checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  const check =  true ? (job) => checkRecursiveUpdates(seen, job) : 0;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if ( true && check(job)) {
          continue;
        }
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs(seen);
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  const count = seen.get(fn) || 0;
  if (count > RECURSION_LIMIT) {
    const instance = fn.i;
    const componentName = instance && getComponentName(instance.type);
    handleError(
      `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    );
    return true;
  }
  seen.set(fn, count + 1);
  return false;
}

let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Map();
if (true) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    if (!(instance.job.flags & 8)) {
      instance.update();
    }
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (let i = 0; i < instances.length; i++) {
    const instance = instances[i];
    const oldComp = normalizeClassComponent(instance.type);
    let dirtyInstances = hmrDirtyComponents.get(oldComp);
    if (!dirtyInstances) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
    }
    dirtyInstances.add(instance);
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      dirtyInstances.add(instance);
      instance.ceReload(newComp.styles);
      dirtyInstances.delete(instance);
    } else if (instance.parent) {
      queueJob(() => {
        isHmrUpdating = true;
        instance.parent.update();
        isHmrUpdating = false;
        dirtyInstances.delete(instance);
      });
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
    if (instance.root.ce && instance !== instance.root) {
      instance.root.ce._removeChildStyle(oldComp);
    }
  }
  queuePostFlushCb(() => {
    hmrDirtyComponents.clear();
  });
}
function updateComponentDef(oldComp, newComp) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}

let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version) {
  emit$1("app:init" /* APP_INIT */, app, version, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed" /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit" /* COMPONENT_EMIT */,
    component.appContext.app,
    component,
    event,
    params
  );
}

let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (true) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}

function validateDirectiveName(name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBuiltInDirective)(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
     true && warn$1(`withDirectives can only be used inside render functions.`);
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ] = directives[i];
    if (dir) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.traverse)(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn$1(
        `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
      );
      return null;
    } else {
      const target = select(targetSelector);
      if ( true && !target && !isTeleportDisabled(props)) {
        warn$1(
          `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
        );
      }
      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn$1(`Invalid Teleport target: ${targetSelector}`);
    }
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }
    if (n1 == null) {
      const placeholder = n2.el =  true ? createComment("teleport start") : 0;
      const mainAnchor = n2.anchor =  true ? createComment("teleport end") : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          if (parentComponent && parentComponent.isCE) {
            parentComponent.ce._teleportTarget = container2;
          }
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        } else if ( true && !disabled) {
          warn$1(
            "Invalid Teleport target on mount:",
            target,
            `(${typeof target})`
          );
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        n2.el.__isMounted = false;
        queuePostRenderEffect(() => {
          mountToTarget();
          delete n2.el.__isMounted;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, !!!("development" !== "production"));
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          } else if (true) {
            warn$1(
              "Invalid Teleport target on update:",
              target,
              `(${typeof target})`
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const disabled = isTeleportDisabled(vnode.props);
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetStart = targetNode;
        vnode.targetAnchor = targetNode && nextSibling(targetNode);
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}

const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      const { mode } = rawProps;
      if ( true && mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
        warn$1(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    let hasFound = false;
    for (const c of children) {
      if (c.type !== Comment) {
        if ( true && hasFound) {
          warn$1(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        child = c;
        hasFound = true;
        if (false) // removed by dead control flow
{}
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook(hook, args);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove) {
      const key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove();
      }
      callHook(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove();
        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}

/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}

function useId() {
  const i = getCurrentInstance();
  if (i) {
    return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
  } else if (true) {
    warn$1(
      `useId() is called when there is no active component instance to be associated with.`
    );
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}

const knownTemplateRefs = /* @__PURE__ */ new WeakSet();
function useTemplateRef(key) {
  const i = getCurrentInstance();
  const r = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef)(null);
  if (i) {
    const refs = i.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? i.refs = {} : i.refs;
    let desc;
    if ( true && (desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable) {
      warn$1(`useTemplateRef('${key}') already exists.`);
    } else {
      Object.defineProperty(refs, key, {
        enumerable: true,
        get: () => r.value,
        set: (val) => r.value = val
      });
    }
  } else if (true) {
    warn$1(
      `useTemplateRef() is called when there is no active component instance to be associated with.`
    );
  }
  const ret =  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly)(r) : 0;
  if (true) {
    knownTemplateRefs.add(ret);
  }
  return ret;
}

function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref } = rawRef;
  if ( true && !owner) {
    warn$1(
      `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
    );
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState);
  const canSetSetupRef = setupState === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO : (key) => {
    if (true) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawSetupState, key) && !(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(rawSetupState[key])) {
        warn$1(
          `Template ref "${key}" used on a non-ref value. It will not work in the production build.`
        );
      }
      if (knownTemplateRefs.has(rawSetupState[key])) {
        return false;
      }
    }
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawSetupState, key);
  };
  const canSetRef = (ref2) => {
    return  false || !knownTemplateRefs.has(ref2);
  };
  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      if (canSetRef(oldRef)) {
        oldRef.value = null;
      }
      const oldRawRefAtom = oldRawRef;
      if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12, [value, refs]);
  } else {
    const _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref);
    const _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
          if (isUnmount) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(existing, refValue);
          } else {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing)) {
              if (_isString) {
                refs[ref] = [refValue];
                if (canSetSetupRef(ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                const newVal = [refValue];
                if (canSetRef(ref)) {
                  ref.value = newVal;
                }
                if (rawRef.k) refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;
          if (canSetSetupRef(ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          if (canSetRef(ref)) {
            ref.value = value;
          }
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
  }
}

let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
const getContainerType = (container) => {
  if (container.nodeType !== 1) return void 0;
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp,
      createText,
      nextSibling,
      parentNode,
      remove,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      ( true) && warn$1(
        `Attempting to hydrate existing markup but container is empty. Performing full mount instead.`
      );
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (true) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(node, "__vnode", vnode, true);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(node, "__vueParentComponent", parentComponent, true);
    }
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            ( true) && warn$1(
              `Hydration text mismatch in`,
              node.parentNode,
              `
  - rendered on server: ${JSON.stringify(
                node.data
              )}
  - expected on client: ${JSON.stringify(vnode.children)}`
            );
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(
            vnode.el = node.content.firstChild,
            node,
            parentComponent
          );
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            optimized
          );
          if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            getContainerType(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else if (true) {
          warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
    const forcePatch = type === "input" || type === "option";
    if (true) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(
          null,
          // no need check parentSuspense in hydration
          transition
        ) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          const cls = content.getAttribute("class");
          if (cls) content.$cls = cls;
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        let hasWarned = false;
        while (next) {
          if (!isMismatchAllowed(el, 1 /* CHILDREN */)) {
            if (( true) && !hasWarned) {
              warn$1(
                `Hydration children mismatch on`,
                el,
                `
Server rendered element contains more child nodes than client vdom.`
              );
              hasWarned = true;
            }
            logMismatchError();
          }
          const cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8) {
        let clientText = vnode.children;
        if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
          clientText = clientText.slice(1);
        }
        if (el.textContent !== clientText) {
          if (!isMismatchAllowed(el, 0 /* TEXT */)) {
            ( true) && warn$1(
              `Hydration text content mismatch on`,
              el,
              `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`
            );
            logMismatchError();
          }
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if (true) {
          const isCustomElement = el.tagName.includes("-");
          for (const key in props) {
            if (( true) && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(dirs && dirs.some((d) => d.dir.created)) && propHasMismatch(el, key, props[key], vnode, parentComponent)) {
              logMismatchError();
            }
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) || // force hydrate v-bind with .prop modifiers
            key[0] === "." || isCustomElement) {
              patchProp(el, key, null, props[key], void 0, parentComponent);
            }
          }
        } else // removed by dead control flow
{}
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      const isText = vnode.type === Text;
      if (node) {
        if (isText && !optimized) {
          if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
            insert(
              createText(
                node.data.slice(vnode.children.length)
              ),
              container,
              nextSibling(node)
            );
            node.data = vnode.children;
          }
        }
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (isText && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (!isMismatchAllowed(container, 1 /* CHILDREN */)) {
          if (( true) && !hasWarned) {
            warn$1(
              `Hydration children mismatch on`,
              container,
              `
Server rendered element contains fewer child nodes than client vdom.`
            );
            hasWarned = true;
          }
          logMismatchError();
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          getContainerType(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (!isMismatchAllowed(node.parentElement, 1 /* CHILDREN */)) {
      ( true) && warn$1(
        `Hydration node mismatch:
- rendered on server:`,
        node,
        node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``,
        `
- expected on client:`,
        vnode.type
      );
      logMismatchError();
    }
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      getContainerType(container),
      slotScopeIds
    );
    if (parentComponent) {
      parentComponent.vnode.el = vnode.el;
      updateHOCHostEl(parentComponent, vnode.el);
    }
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode = (node) => {
    return node.nodeType === 1 && node.tagName === "TEMPLATE";
  };
  return [hydrate, hydrateNode];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
  let mismatchType;
  let mismatchKey;
  let actual;
  let expected;
  if (key === "class") {
    if (el.$cls) {
      actual = el.$cls;
      delete el.$cls;
    } else {
      actual = el.getAttribute("class");
    }
    expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(clientValue);
    if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
      mismatchType = 2 /* CLASS */;
      mismatchKey = `class`;
    }
  } else if (key === "style") {
    actual = el.getAttribute("style") || "";
    expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(clientValue) ? clientValue : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.stringifyStyle)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(clientValue));
    const actualMap = toStyleMap(actual);
    const expectedMap = toStyleMap(expected);
    if (vnode.dirs) {
      for (const { dir, value } of vnode.dirs) {
        if (dir.name === "show" && !value) {
          expectedMap.set("display", "none");
        }
      }
    }
    if (instance) {
      resolveCssVars(instance, vnode, expectedMap);
    }
    if (!isMapEqual(actualMap, expectedMap)) {
      mismatchType = 3 /* STYLE */;
      mismatchKey = "style";
    }
  } else if (el instanceof SVGElement && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isKnownSvgAttr)(key) || el instanceof HTMLElement && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBooleanAttr)(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isKnownHtmlAttr)(key))) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBooleanAttr)(key)) {
      actual = el.hasAttribute(key);
      expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(clientValue);
    } else if (clientValue == null) {
      actual = el.hasAttribute(key);
      expected = false;
    } else {
      if (el.hasAttribute(key)) {
        actual = el.getAttribute(key);
      } else if (key === "value" && el.tagName === "TEXTAREA") {
        actual = el.value;
      } else {
        actual = false;
      }
      expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isRenderableAttrValue)(clientValue) ? String(clientValue) : false;
    }
    if (actual !== expected) {
      mismatchType = 4 /* ATTRIBUTE */;
      mismatchKey = key;
    }
  }
  if (mismatchType != null && !isMismatchAllowed(el, mismatchType)) {
    const format = (v) => v === false ? `(not rendered)` : `${mismatchKey}="${v}"`;
    const preSegment = `Hydration ${MismatchTypeString[mismatchType]} mismatch on`;
    const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    {
      warn$1(preSegment, el, postSegment);
    }
    return true;
  }
  return false;
}
function toClassSet(str) {
  return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const s of a) {
    if (!b.has(s)) {
      return false;
    }
  }
  return true;
}
function toStyleMap(str) {
  const styleMap = /* @__PURE__ */ new Map();
  for (const item of str.split(";")) {
    let [key, value] = item.split(":");
    key = key.trim();
    value = value && value.trim();
    if (key && value) {
      styleMap.set(key, value);
    }
  }
  return styleMap;
}
function isMapEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const [key, value] of a) {
    if (value !== b.get(key)) {
      return false;
    }
  }
  return true;
}
function resolveCssVars(instance, vnode, expectedMap) {
  const root = instance.subTree;
  if (instance.getCssVars && (vnode === root || root && root.type === Fragment && root.children.includes(vnode))) {
    const cssVars = instance.getCssVars();
    for (const key in cssVars) {
      const value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeCssVarValue)(cssVars[key]);
      expectedMap.set(`--${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getEscapedCssVarName)(key, false)}`, value);
    }
  }
  if (vnode === root && instance.parent) {
    resolveCssVars(instance.parent, instance.vnode, expectedMap);
  }
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
  [0 /* TEXT */]: "text",
  [1 /* CHILDREN */]: "children",
  [2 /* CLASS */]: "class",
  [3 /* STYLE */]: "style",
  [4 /* ATTRIBUTE */]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
  if (allowedType === 0 /* TEXT */ || allowedType === 1 /* CHILDREN */) {
    while (el && !el.hasAttribute(allowMismatchAttr)) {
      el = el.parentElement;
    }
  }
  const allowedAttr = el && el.getAttribute(allowMismatchAttr);
  if (allowedAttr == null) {
    return false;
  } else if (allowedAttr === "") {
    return true;
  } else {
    const list = allowedAttr.split(",");
    if (allowedType === 0 /* TEXT */ && list.includes("children")) {
      return true;
    }
    return list.includes(MismatchTypeString[allowedType]);
  }
}

const requestIdleCallback = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().requestIdleCallback || ((cb) => setTimeout(cb, 1));
const cancelIdleCallback = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().cancelIdleCallback || ((id) => clearTimeout(id));
const hydrateOnIdle = (timeout = 1e4) => (hydrate) => {
  const id = requestIdleCallback(hydrate, { timeout });
  return () => cancelIdleCallback(id);
};
function elementIsVisibleInViewport(el) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
const hydrateOnVisible = (opts) => (hydrate, forEach) => {
  const ob = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      ob.disconnect();
      hydrate();
      break;
    }
  }, opts);
  forEach((el) => {
    if (!(el instanceof Element)) return;
    if (elementIsVisibleInViewport(el)) {
      hydrate();
      ob.disconnect();
      return false;
    }
    ob.observe(el);
  });
  return () => ob.disconnect();
};
const hydrateOnMediaQuery = (query) => (hydrate) => {
  if (query) {
    const mql = matchMedia(query);
    if (mql.matches) {
      hydrate();
    } else {
      mql.addEventListener("change", hydrate, { once: true });
      return () => mql.removeEventListener("change", hydrate);
    }
  }
};
const hydrateOnInteraction = (interactions = []) => (hydrate, forEach) => {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(interactions)) interactions = [interactions];
  let hasHydrated = false;
  const doHydrate = (e) => {
    if (!hasHydrated) {
      hasHydrated = true;
      teardown();
      hydrate();
      e.target.dispatchEvent(new e.constructor(e.type, e));
    }
  };
  const teardown = () => {
    forEach((el) => {
      for (const i of interactions) {
        el.removeEventListener(i, doHydrate);
      }
    });
  };
  forEach((el) => {
    for (const i of interactions) {
      el.addEventListener(i, doHydrate, { once: true });
    }
  });
  return teardown;
};
function forEachElement(node, cb) {
  if (isComment(node) && node.data === "[") {
    let depth = 1;
    let next = node.nextSibling;
    while (next) {
      if (next.nodeType === 1) {
        const result = cb(next);
        if (result === false) {
          break;
        }
      } else if (isComment(next)) {
        if (next.data === "]") {
          if (--depth === 0) break;
        } else if (next.data === "[") {
          depth++;
        }
      }
      next = next.nextSibling;
    }
  } else {
    cb(node);
  }
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    hydrate: hydrateStrategy,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve, reject) => {
          const userRetry = () => resolve(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if ( true && !comp) {
        warn$1(
          `Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`
        );
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error(`Invalid async component load result: ${comp}`);
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    __asyncHydrate(el, instance, hydrate) {
      let patched = false;
      (instance.bu || (instance.bu = [])).push(() => patched = true);
      const performHydrate = () => {
        if (patched) {
          if (true) {
            warn$1(
              `Skipping lazy hydration for component '${getComponentName(resolvedComp) || resolvedComp.__file}': it was updated before lazy hydration performed.`
            );
          }
          return;
        }
        hydrate();
      };
      const doHydrate = hydrateStrategy ? () => {
        const teardown = hydrateStrategy(
          performHydrate,
          (cb) => forEachElement(el, cb)
        );
        if (teardown) {
          (instance.bum || (instance.bum = [])).push(teardown);
        }
      } : performHydrate;
      if (resolvedComp) {
        doHydrate();
      } else {
        load().then(() => !instance.isUnmounted && doHydrate());
      }
    },
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      markAsyncBoundary(instance);
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      const error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      const delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.update();
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    if (true) {
      instance.__v_cache = cache;
    }
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        namespace,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
      if (true) {
        devtoolsComponentAdded(instance2);
      }
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
      if (true) {
        devtoolsComponentAdded(instance2);
      }
      if (true) {
        instance2.__keepAliveStorageContainer = storageContainer;
      }
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type);
        if (name && !filter(name)) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache.get(key);
      if (cached && (!current || !isSameVNodeType(cached, current))) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return current = null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        if (true) {
          warn$1(`KeepAlive should contain exactly one component child.`);
        }
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      if (vnode.type === Comment) {
        current = null;
        return vnode;
      }
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        vnode.shapeFlag &= -257;
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some((p) => matches(p, name));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(",").includes(name);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isRegExp)(pattern)) {
    pattern.lastIndex = 0;
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= -257;
  vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (true) {
    const apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.` )
    );
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}

const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    if ( true && warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else if (true) {
    warn$1(
      `resolve${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1))} can only be used in render() or setup().`
    );
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}

function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  const sourceIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source);
  if (sourceIsArray || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    const sourceIsReactiveArray = sourceIsArray && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(source);
      isReadonlySource = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(source);
      source = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadArray)(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? isReadonlySource ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toReadonly)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toReactive)(source[i])) : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toReactive)(source[i]) : source[i],
        i,
        void 0,
        cached && cached[i]
      );
    }
  } else if (typeof source === "number") {
    if ( true && !Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}

function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}

function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      64
    );
  }
  let slot = slots[name];
  if ( true && slot && slot.length > 1) {
    warn$1(
      `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
    );
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSymbol)(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}

function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn$1(`v-on with no argument expects an object value.`);
    return ret;
  }
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }
  return ret;
}

const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0,
    $attrs: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0,
    $slots: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0,
    $refs: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) =>  true ? resolveMergedOptions(i) : 0,
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) =>  true ? instanceWatch.bind(i) : 0
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && !state.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if ( true && key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1 /* SETUP */:
            return setupState[key];
          case 2 /* DATA */:
            return data[key];
          case 4 /* CONTEXT */:
            return ctx[key];
          case 3 /* PROPS */:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1 /* SETUP */;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 2 /* DATA */;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)
      ) {
        accessCache[key] = 3 /* PROPS */;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 4 /* CONTEXT */;
        return ctx[key];
      } else if ( false || shouldCacheAccess) {
        accessCache[key] = 0 /* OTHER */;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance.attrs, "get", "");
         true && markAttrsAccessed();
      } else if ( true && key === "$slots") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      accessCache[key] = 4 /* CONTEXT */;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && isReservedPrefix(key[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if ( true && setupState.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
      return true;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
       true && warn$1(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions, type }
  }, key) {
    let normalizedProps, cssModules;
    return !!(accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && key[0] !== "$" && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has(_, key) {
    const has = key[0] !== "_" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyAllowed)(key);
    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn$1(
        `Property ${JSON.stringify(
          key
        )} should not start with _ which is a reserved prefix for Vue internals.`
      );
    }
    return has;
  }
});
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    }
  });
}

const warnRuntimeUsage = (method) => warn$1(
  `${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function defineProps() {
  if (true) {
    warnRuntimeUsage(`defineProps`);
  }
  return null;
}
function defineEmits() {
  if (true) {
    warnRuntimeUsage(`defineEmits`);
  }
  return null;
}
function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage(`defineExpose`);
  }
}
function defineOptions(options) {
  if (true) {
    warnRuntimeUsage(`defineOptions`);
  }
}
function defineSlots() {
  if (true) {
    warnRuntimeUsage(`defineSlots`);
  }
  return null;
}
function defineModel() {
  if (true) {
    warnRuntimeUsage("defineModel");
  }
}
function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage(`withDefaults`);
  }
  return null;
}
function useSlots() {
  return getContext("useSlots").slots;
}
function useAttrs() {
  return getContext("useAttrs").attrs;
}
function getContext(calledFunctionName) {
  const i = getCurrentInstance();
  if ( true && !i) {
    warn$1(`${calledFunctionName}() called without active instance.`);
  }
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props.reduce(
    (normalized, p) => (normalized[p] = null, normalized),
    {}
  ) : props;
}
function mergeDefaults(raw, defaults) {
  const props = normalizePropsOrEmits(raw);
  for (const key in defaults) {
    if (key.startsWith("__skip")) continue;
    let opt = props[key];
    if (opt) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)) {
        opt = props[key] = { type: opt, default: defaults[key] };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      opt = props[key] = { default: defaults[key] };
    } else if (true) {
      warn$1(`props default key "${key}" has no corresponding declaration.`);
    }
    if (opt && defaults[`__skip_${key}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b) return a || b;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(a) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(b)) return a.concat(b);
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key in props) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: () => props[key]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  if ( true && !ctx) {
    warn$1(
      `withAsyncContext called without active current instance. This is likely a bug.`
    );
  }
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}

function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties =  true ? createDuplicateChecker() : 0;
  if (true) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props" /* PROPS */, key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        if (true) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else // removed by dead control flow
{}
        if (true) {
          checkDuplicateProperties("Methods" /* METHODS */, key);
        }
      } else if (true) {
        warn$1(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
       true && warn$1(`data() should return an object.`);
    } else {
      instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
      if (true) {
        for (const key in data) {
          checkDuplicateProperties("Data" /* DATA */, key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? () => {
        warn$1(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      } : 0;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (true) {
        checkDuplicateProperties("Computed" /* COMPUTED */, key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (true) {
      checkDuplicateProperties("Inject" /* INJECT */, key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    const handler = ctx[raw];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      {
        watch(getter, handler);
      }
    } else if (true) {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
        watch(getter, handler, raw);
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (true) {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
       true && warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend))(
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to,
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(to) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rootComponent)) {
      rootComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, rootComponent);
    }
    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (true) {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
           true && warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (true) {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin) {
        if (true) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (true) {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        } else // removed by dead control flow
{}
        return app;
      },
      component(name, component) {
        if (true) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if ( true && context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (true) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if ( true && context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if ( true && rootContainer.__vue_app__) {
            warn$1(
              `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
            );
          }
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (true) {
            context.reload = () => {
              const cloned = cloneVNode(vnode);
              cloned.el = null;
              render(cloned, rootContainer, namespace);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getComponentPublicInstance(vnode.component);
        } else if (true) {
          warn$1(
            `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
          );
        }
      },
      onUnmount(cleanupFn) {
        if ( true && typeof cleanupFn !== "function") {
          warn$1(
            `Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`
          );
        }
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render(null, app._container);
          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else if (true) {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if ( true && key in context.provides) {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(context.provides, key)) {
            warn$1(
              `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
            );
          } else {
            warn$1(
              `App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`
            );
          }
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (true) {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else if (true) {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
function hasInjectionContext() {
  return !!(getCurrentInstance() || currentApp);
}

const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;

function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !( true && isInHmrContext(instance)) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance.attrs, "set", "");
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[0 /* shouldCast */]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1 /* shouldCastTrue */] && (value === "" || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache =  true && asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
      cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    }
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? { type: opt } : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(propType) && propType.name === "Boolean";
        }
        prop[0 /* shouldCast */] = shouldCast;
        prop[1 /* shouldCastTrue */] = shouldCastTrue;
        if (shouldCast || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
    return true;
  } else if (true) {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  const options = instance.propsOptions[0];
  const camelizePropsKey = Object.keys(rawProps).map((key) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key));
  for (const key in options) {
    let opt = options[key];
    if (opt == null) continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
       true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(resolvedValues) : 0,
      !camelizePropsKey.includes(key)
    );
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (expectedType === "null") {
    valid = value === null;
  } else if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === "Array") {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}

const isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
const normalizeSlotValue = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if ( true && currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
      warn$1(
        `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
      );
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (true) {
        warn$1(
          `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
        );
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if ( true && !isKeepAlive(instance.vnode) && true) {
    warn$1(
      `Non-function value encountered for default slot. Prefer function slots for better performance.`
    );
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if ( true && isHmrUpdating) {
        assignSlots(slots, children, optimized);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};

let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    const measureName = `<${formatComponentName(instance, instance.type)}> ${type}`;
    perf.mark(endTag);
    perf.measure(measureName, startTag, endTag);
    perf.clearMeasures(measureName);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}

function initFeatureFlags() {
  const needWarn = [];
  if (false) // removed by dead control flow
{}
  if (false) // removed by dead control flow
{}
  if (false) // removed by dead control flow
{}
  if ( true && needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(
      `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}

const queuePostRenderEffect = queueEffectWithSuspense ;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  target.__VUE__ = true;
  if (true) {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized =  true && isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else if (true) {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (true) {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace
      );
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (true) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(el, "__vnode", vnode, true);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(el, "__vueParentComponent", parentComponent, true);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    if (true) {
      el.__vnode = n2;
    }
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if ( true && isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
      if (true) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if ( true && // #5523 dev root fragment may inherit directives
    (isHmrUpdating || patchFlag & 2048)) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        } else // removed by dead control flow
{}
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = (initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    ));
    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }
    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (true) {
        startMeasure(instance, `init`);
      }
      setupComponent(instance, false, optimized);
      if (true) {
        endMeasure(instance, `init`);
      }
    }
    if ( true && isHmrUpdating) initialVNode.el = null;
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
    if (true) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (true) {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        if (true) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (true) {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
            if (true) {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type);
          }
          if (true) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (true) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        if (true) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (true) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        if (true) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (true) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        if (true) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
        if (true) {
          devtoolsComponentUpdated(instance);
        }
        if (true) {
          popWarningContext();
        }
      }
    };
    instance.scope.on();
    const effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect.run.bind(effect);
    const job = instance.job = effect.runIfDirty.bind(effect);
    job.i = instance;
    job.id = instance.uid;
    effect.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    if (true) {
      effect.onTrack = instance.rtc ? (e) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e) : void 0;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    flushPreFlushCbs(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn$1(
              `Duplicate keys found during update:`,
              JSON.stringify(nextChild.key),
              `Make sure keys are unique.`
            );
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, fallback to el placeholder for unresolved async component
          anchorVNode.el || anchorVNode.placeholder
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove2 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          if (el._isLeaving) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          leave(el, () => {
            remove2();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove2, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref != null) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      setRef(ref, null, parentSuspense, vnode, true);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if ( true && vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, job, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
  if (allowed) {
    effect.flags |= 32;
    job.flags |= 4;
  } else {
    effect.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text && // avoid cached text nodes retaining detached dom nodes
      c2.patchFlag !== -1) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
      if (true) {
        c2.el && (c2.el.__vnode = c2);
      }
    }
  }
}
function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}

const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
       true && warn$1(
        `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
      );
    }
    return ctx;
  }
};

function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(
    effect,
    null,
     true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options, { flush: "post" }) : 0
  );
}
function watchSyncEffect(effect, options) {
  return doWatch(
    effect,
    null,
     true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options, { flush: "sync" }) : 0
  );
}
function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  if ( true && !cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const baseWatchOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options);
  if (true) baseWatchOptions.onWarn = warn$1;
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
      watchStopHandle.resume = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
      watchStopHandle.pause = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.watch)(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}

function useModel(props, name, options = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
  const i = getCurrentInstance();
  if ( true && !i) {
    warn$1(`useModel() called without active instance.`);
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
  }
  const camelizedName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name);
  if ( true && !i.propsOptions[0][camelizedName]) {
    warn$1(`useModel() called with prop "${name}" which is not declared.`);
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
  }
  const hyphenatedName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name);
  const modifiers = getModelModifiers(props, camelizedName);
  const res = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef)((track, trigger) => {
    let localValue;
    let prevSetValue = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    let prevEmittedValue;
    watchSyncEffect(() => {
      const propValue = props[camelizedName];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(localValue, propValue)) {
        localValue = propValue;
        trigger();
      }
    });
    return {
      get() {
        track();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const emittedValue = options.set ? options.set(value) : value;
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(emittedValue, localValue) && !(prevSetValue !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(value, prevSetValue))) {
          return;
        }
        const rawProps = i.vnode.props;
        if (!(rawProps && // check if parent has passed v-model
        (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
          localValue = value;
          trigger();
        }
        i.emit(`update:${name}`, emittedValue);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(value, emittedValue) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(value, prevSetValue) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(emittedValue, prevEmittedValue)) {
          trigger();
        }
        prevSetValue = value;
        prevEmittedValue = emittedValue;
      }
    };
  });
  res[Symbol.iterator] = () => {
    let i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return { value: i2++ ? modifiers || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ : res, done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  return res;
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(modelName)}Modifiers`] || props[`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(modelName)}Modifiers`];
};

function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (true) {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event)) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener = event.startsWith("update:");
  const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber);
    }
  }
  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (true) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))];
  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}

let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  if (true) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy =  true && setupState.__isScriptSetup ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render.call(
          thisProxy,
          proxyToUse,
          renderCache,
           true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(props) : 0,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if ( true && attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(
        render2.length > 1 ? render2(
           true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(props) : 0,
           true ? {
            get attrs() {
              markAttrsAccessed();
              return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(attrs);
            },
            slots,
            emit
          } : 0
        ) : render2(
           true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(props) : 0,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if ( true && result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if ( true && !accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(
            `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
          );
        }
        if (eventAttrs.length) {
          warn$1(
            `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
          );
        }
      }
    }
  }
  if (vnode.dirs) {
    if ( true && !isElementRoot(root)) {
      warn$1(
        `Runtime directive used on component with non-element root node. The directives will not function as intended.`
      );
    }
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if ( true && !isElementRoot(root)) {
      warn$1(
        `Component inside <Transition> renders non-element root node that cannot be animated.`
      );
    }
    setTransitionHooks(root, vnode.transition);
  }
  if ( true && setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if ( true && childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
    return getChildRoot(childRoot);
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if ( true && recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}

const isSuspense = (type) => type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    }
  },
  hydrate: hydrateSuspense,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl ;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: { createElement }
  } = rendererInternals;
  const hiddenContainer = createElement("div");
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    container,
    hiddenContainer,
    anchor,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals
  );
  patch(
    null,
    suspense.pendingBranch = vnode.ssContent,
    hiddenContainer,
    null,
    parentComponent,
    suspense,
    namespace,
    slotScopeIds
  );
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      namespace,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(
        pendingBranch,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div");
      if (isInFallback) {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        suspense.resolve(true);
      } else {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(
        activeBranch,
        newBranch,
        container,
        anchor,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(
        null,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  if ( true && !hasWarned) {
    hasWarned = true;
    console[console.info ? "info" : "log"](
      `<Suspense> is an experimental feature and its API will likely change.`
    );
  }
  const {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: { parentNode, remove }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense && parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props.timeout) : void 0;
  if (true) {
    assertNumber(timeout, `Suspense timeout`);
  }
  const initialAnchor = anchor;
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error(
            `suspense.resolve() is called without a pending branch.`
          );
        }
        if (suspense.isUnmounted) {
          throw new Error(
            `suspense.resolve() is called on an already unmounted suspense boundary.`
          );
        }
      }
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      let delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(
                pendingBranch,
                container2,
                anchor === initialAnchor ? next(activeBranch) : anchor,
                0
              );
              queuePostFlushCb(effects);
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) === container2) {
            anchor = next(activeBranch);
          }
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          namespace2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect, optimized2) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        if (true) {
          pushWarningContext(vnode2);
        }
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          namespace,
          optimized2
        );
        if (placeholder) {
          remove(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (true) {
          popWarningContext();
        }
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(
          suspense.activeBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
      if (suspense.pendingBranch) {
        unmount(
          suspense.pendingBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
  );
  const result = hydrateNode(
    node,
    suspense.pendingBranch = vnode.ssContent,
    parentComponent,
    suspense,
    slotScopeIds,
    optimized
  );
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(
    isSlotChildren ? children.default : children
  );
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    const singleChild = filterSingleRoot(s);
    if ( true && !singleChild && s.filter((child) => child !== NULL_DYNAMIC_COMPONENT).length > 0) {
      warn$1(`<Suspense> slots expect a single root node.`);
    }
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c) => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  let el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  const suspensible = vnode.props && vnode.props.suspensible;
  return suspensible != null && suspensible !== false;
}

const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6 && n1.component) {
    const dirtyInstances = hmrDirtyComponents.get(n2.type);
    if (dirtyInstances && dirtyInstances.has(n1.component)) {
      n1.shapeFlag &= -257;
      n2.shapeFlag &= -513;
      return false;
    }
  }
  return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
  );
};
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref,
  ref_key,
  ref_for
}) => {
  if (typeof ref === "number") {
    ref = "" + ref;
  }
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(children) ? 8 : 16;
  }
  if ( true && vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode =  true ? createVNodeWithArgsTransform : 0;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }
      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  }
  const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2 : 0;
  if ( true && shapeFlag & 4 && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn$1(
      `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || isInternalObject(props) ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}

const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else // removed by dead control flow
{}
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  const Component = instance.type;
  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  if (true) {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
         true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0,
        setupContext
      ]
    );
    const isAsyncSetup = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if ( true && !instance.suspense) {
          const name = (_a = Component.name) != null ? _a : "Anonymous";
          warn$1(
            `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
          );
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);
    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template ||  true && resolveMergedOptions(instance).template;
      if (template) {
        if (true) {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
        if (true) {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (true) {
    const reset = setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    try {
      applyOptions(instance);
    } finally {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      reset();
    }
  }
  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    if (!compile && Component.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue.` + (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".` )
      );
    } else {
      warn$1(`Component is missing template or render function: `, Component);
    }
  }
}
const attrsProxyHandlers =  true ? {
  get(target, key) {
    markAttrsAccessed();
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(target, "get", "");
    return target[key];
  },
  set() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  },
  deleteProperty() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  }
} : 0;
function getSlotsProxy(instance) {
  return new Proxy(instance.slots, {
    get(target, key) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", "$slots");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (true) {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(exposed)) {
            exposedType = "array";
          } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  if (true) {
    let attrsProxy;
    let slotsProxy;
    return Object.freeze({
      get attrs() {
        return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
      },
      get slots() {
        return slotsProxy || (slotsProxy = getSlotsProxy(instance));
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else // removed by dead control flow
{}
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && "__vccOpts" in value;
}

const computed = (getterOrOptions, debugOptions) => {
  const c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
  if (true) {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};

function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}

function initCustomFormatter() {
  if ( false || typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#1677ff" };
  const stringStyle = { style: "color:#f5222d" };
  const keywordStyle = { style: "color:#eb2f96" };
  const formatter = {
    __vue_custom_formatter: true,
    header(obj) {
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
        const value = obj.value;
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(value),
          `>`
        ];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? ` (readonly)` : ``}`
        ];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }
    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }
    const computed = extractKeys(instance, "computed");
    if (computed) {
      blocks.push(createInstanceBlock("computed", computed));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ["object", { object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

function withMemo(memo, render, cache, index) {
  const cached = cache[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render();
  ret.memo = memo.slice();
  ret.cacheIndex = index;
  return cache[index] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}

const version = "3.5.20";
const warn =  true ? warn$1 : 0;
const ErrorTypeStrings = ErrorTypeStrings$1 ;
const devtools =  true ? devtools$1 : 0;
const setDevtoolsHook =  true ? setDevtoolsHook$1 : 0;
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode,
  getComponentPublicInstance,
  ensureValidVNode,
  pushWarningContext,
  popWarningContext
};
const ssrUtils = _ssrUtils ;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;




/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition; },
/* harmony export */   BaseTransitionPropsValidators: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators; },
/* harmony export */   Comment: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment; },
/* harmony export */   DeprecationTypes: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.DeprecationTypes; },
/* harmony export */   EffectScope: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.EffectScope; },
/* harmony export */   ErrorCodes: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes; },
/* harmony export */   ErrorTypeStrings: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeStrings; },
/* harmony export */   Fragment: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment; },
/* harmony export */   KeepAlive: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive; },
/* harmony export */   ReactiveEffect: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect; },
/* harmony export */   Static: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static; },
/* harmony export */   Suspense: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense; },
/* harmony export */   Teleport: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport; },
/* harmony export */   Text: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text; },
/* harmony export */   TrackOpTypes: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.TrackOpTypes; },
/* harmony export */   Transition: function() { return /* binding */ Transition; },
/* harmony export */   TransitionGroup: function() { return /* binding */ TransitionGroup; },
/* harmony export */   TriggerOpTypes: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.TriggerOpTypes; },
/* harmony export */   VueElement: function() { return /* binding */ VueElement; },
/* harmony export */   assertNumber: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assertNumber; },
/* harmony export */   callWithAsyncErrorHandling: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling; },
/* harmony export */   callWithErrorHandling: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling; },
/* harmony export */   camelize: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize; },
/* harmony export */   capitalize: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize; },
/* harmony export */   cloneVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode; },
/* harmony export */   compatUtils: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils; },
/* harmony export */   computed: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed; },
/* harmony export */   createApp: function() { return /* binding */ createApp; },
/* harmony export */   createBlock: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock; },
/* harmony export */   createCommentVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode; },
/* harmony export */   createElementBlock: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementBlock; },
/* harmony export */   createElementVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementVNode; },
/* harmony export */   createHydrationRenderer: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer; },
/* harmony export */   createPropsRestProxy: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy; },
/* harmony export */   createRenderer: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer; },
/* harmony export */   createSSRApp: function() { return /* binding */ createSSRApp; },
/* harmony export */   createSlots: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots; },
/* harmony export */   createStaticVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode; },
/* harmony export */   createTextVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode; },
/* harmony export */   createVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode; },
/* harmony export */   customRef: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef; },
/* harmony export */   defineAsyncComponent: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent; },
/* harmony export */   defineComponent: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; },
/* harmony export */   defineEmits: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits; },
/* harmony export */   defineExpose: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose; },
/* harmony export */   defineModel: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineModel; },
/* harmony export */   defineOptions: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineOptions; },
/* harmony export */   defineProps: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps; },
/* harmony export */   defineSSRCustomElement: function() { return /* binding */ defineSSRCustomElement; },
/* harmony export */   defineSlots: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineSlots; },
/* harmony export */   devtools: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools; },
/* harmony export */   effect: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effect; },
/* harmony export */   effectScope: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effectScope; },
/* harmony export */   getCurrentInstance: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance; },
/* harmony export */   getCurrentScope: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope; },
/* harmony export */   getCurrentWatcher: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentWatcher; },
/* harmony export */   getTransitionRawChildren: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren; },
/* harmony export */   guardReactiveProps: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps; },
/* harmony export */   h: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   handleError: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError; },
/* harmony export */   hasInjectionContext: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hasInjectionContext; },
/* harmony export */   hydrate: function() { return /* binding */ hydrate; },
/* harmony export */   hydrateOnIdle: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hydrateOnIdle; },
/* harmony export */   hydrateOnInteraction: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hydrateOnInteraction; },
/* harmony export */   hydrateOnMediaQuery: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hydrateOnMediaQuery; },
/* harmony export */   hydrateOnVisible: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hydrateOnVisible; },
/* harmony export */   initCustomFormatter: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter; },
/* harmony export */   initDirectivesForSSR: function() { return /* binding */ initDirectivesForSSR; },
/* harmony export */   inject: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject; },
/* harmony export */   isMemoSame: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isMemoSame; },
/* harmony export */   isProxy: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy; },
/* harmony export */   isReactive: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive; },
/* harmony export */   isReadonly: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly; },
/* harmony export */   isRef: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef; },
/* harmony export */   isRuntimeOnly: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly; },
/* harmony export */   isShallow: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isShallow; },
/* harmony export */   isVNode: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode; },
/* harmony export */   markRaw: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw; },
/* harmony export */   mergeDefaults: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults; },
/* harmony export */   mergeModels: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeModels; },
/* harmony export */   mergeProps: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps; },
/* harmony export */   nextTick: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick; },
/* harmony export */   normalizeClass: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeClass; },
/* harmony export */   normalizeProps: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProps; },
/* harmony export */   normalizeStyle: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle; },
/* harmony export */   onActivated: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated; },
/* harmony export */   onBeforeMount: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount; },
/* harmony export */   onBeforeUnmount: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount; },
/* harmony export */   onBeforeUpdate: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate; },
/* harmony export */   onDeactivated: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated; },
/* harmony export */   onErrorCaptured: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured; },
/* harmony export */   onMounted: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted; },
/* harmony export */   onRenderTracked: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked; },
/* harmony export */   onRenderTriggered: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered; },
/* harmony export */   onScopeDispose: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose; },
/* harmony export */   onServerPrefetch: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch; },
/* harmony export */   onUnmounted: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted; },
/* harmony export */   onUpdated: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated; },
/* harmony export */   onWatcherCleanup: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onWatcherCleanup; },
/* harmony export */   openBlock: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock; },
/* harmony export */   popScopeId: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId; },
/* harmony export */   provide: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide; },
/* harmony export */   proxyRefs: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs; },
/* harmony export */   pushScopeId: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId; },
/* harmony export */   queuePostFlushCb: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb; },
/* harmony export */   reactive: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive; },
/* harmony export */   readonly: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly; },
/* harmony export */   ref: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref; },
/* harmony export */   registerRuntimeCompiler: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler; },
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   renderList: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList; },
/* harmony export */   renderSlot: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot; },
/* harmony export */   resolveComponent: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent; },
/* harmony export */   resolveDirective: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective; },
/* harmony export */   resolveDynamicComponent: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent; },
/* harmony export */   resolveFilter: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter; },
/* harmony export */   resolveTransitionHooks: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks; },
/* harmony export */   setBlockTracking: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking; },
/* harmony export */   setDevtoolsHook: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook; },
/* harmony export */   setTransitionHooks: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks; },
/* harmony export */   shallowReactive: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive; },
/* harmony export */   shallowReadonly: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly; },
/* harmony export */   shallowRef: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef; },
/* harmony export */   ssrContextKey: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey; },
/* harmony export */   ssrUtils: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils; },
/* harmony export */   stop: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.stop; },
/* harmony export */   toDisplayString: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString; },
/* harmony export */   toHandlerKey: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey; },
/* harmony export */   toHandlers: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers; },
/* harmony export */   toRaw: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw; },
/* harmony export */   toRef: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef; },
/* harmony export */   toRefs: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs; },
/* harmony export */   toValue: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toValue; },
/* harmony export */   transformVNodeArgs: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs; },
/* harmony export */   triggerRef: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef; },
/* harmony export */   unref: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref; },
/* harmony export */   useAttrs: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs; },
/* harmony export */   useCssModule: function() { return /* binding */ useCssModule; },
/* harmony export */   useCssVars: function() { return /* binding */ useCssVars; },
/* harmony export */   useHost: function() { return /* binding */ useHost; },
/* harmony export */   useId: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useId; },
/* harmony export */   useModel: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useModel; },
/* harmony export */   useSSRContext: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext; },
/* harmony export */   useShadowRoot: function() { return /* binding */ useShadowRoot; },
/* harmony export */   useSlots: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots; },
/* harmony export */   useTemplateRef: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTemplateRef; },
/* harmony export */   useTransitionState: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState; },
/* harmony export */   vModelCheckbox: function() { return /* binding */ vModelCheckbox; },
/* harmony export */   vModelDynamic: function() { return /* binding */ vModelDynamic; },
/* harmony export */   vModelRadio: function() { return /* binding */ vModelRadio; },
/* harmony export */   vModelSelect: function() { return /* binding */ vModelSelect; },
/* harmony export */   vModelText: function() { return /* binding */ vModelText; },
/* harmony export */   vShow: function() { return /* binding */ vShow; },
/* harmony export */   version: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version; },
/* harmony export */   warn: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn; },
/* harmony export */   watch: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch; },
/* harmony export */   watchEffect: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect; },
/* harmony export */   watchPostEffect: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect; },
/* harmony export */   watchSyncEffect: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect; },
/* harmony export */   withAsyncContext: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext; },
/* harmony export */   withCtx: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx; },
/* harmony export */   withDefaults: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults; },
/* harmony export */   withDirectives: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives; },
/* harmony export */   withKeys: function() { return /* binding */ withKeys; },
/* harmony export */   withMemo: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withMemo; },
/* harmony export */   withModifiers: function() { return /* binding */ withModifiers; },
/* harmony export */   withScopeId: function() { return /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId; }
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/




let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Error creating trusted types policy: ${e}`);
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};

const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)(
  {},
  _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };
  return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assertNumber)(res, "<transition> explicit duration");
  }
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}

function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}

const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}

const CSS_VAR_TEXT = Symbol( true ? "CSS_VAR_TEXT" : 0);
function useCssVars(getter) {
  const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssVars is called without current active component instance.`);
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
    ).forEach((node) => setVarsOnNode(node, vars));
  };
  if (true) {
    instance.getCssVars = () => getter(instance.proxy);
  }
  const setVars = () => {
    const vars = getter(instance.proxy);
    if (instance.ce) {
      setVarsOnNode(instance.ce, vars);
    } else {
      setVarsOnVNode(instance.subTree, vars);
    }
    updateTeleports(vars);
  };
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate)(() => {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb)(setVars);
  });
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch)(setVars, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.NOOP, { flush: "post" });
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    let cssText = "";
    for (const key in vars) {
      const value = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.normalizeCssVarValue)(vars[key]);
      style.setProperty(`--${key}`, value);
      cssText += `--${key}: ${value};`;
    }
    style[CSS_VAR_TEXT] = cssText;
  }
}

const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isString)(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (true) {
      if (semicolonRE.test(val)) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `Unexpected semicolon at the end of '${name}' style value: '${val}'`
        );
      }
    }
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}

const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean ? "" : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSymbol)(value) ? String(value) : value
      );
    }
  }
}

function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if ( true && !needRemove) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
        e
      );
    }
  }
  needRemove && el.removeAttribute(attrName || key);
}

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value =  true ? sanitizeEventValue(nextValue, rawName) : 0;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
         true ? sanitizeEventValue(nextValue, rawName) : 0,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function sanitizeEventValue(value, propName) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) || (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    return value;
  }
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
    `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
  );
  return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.NOOP;
}
function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}

const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    if (!(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isString)(nextValue))
  ) {
    patchDOMProp(el, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.camelize)(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }
  return key in el;
}

const REMOVAL = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
  const Comp = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(options, extraOptions);
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(Comp)) (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)(Comp, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, _createApp);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}

const defineSSRCustomElement = (/* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
  return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
});
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, _createApp = createApp) {
    super();
    this._def = _def;
    this._props = _props;
    this._createApp = _createApp;
    this._isVueCE = true;
    /**
     * @internal
     */
    this._instance = null;
    /**
     * @internal
     */
    this._app = null;
    /**
     * @internal
     */
    this._nonce = this._def.nonce;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    this._styleChildren = /* @__PURE__ */ new WeakSet();
    this._ob = null;
    if (this.shadowRoot && _createApp !== createApp) {
      this._root = this.shadowRoot;
    } else {
      if ( true && this.shadowRoot) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
        );
      }
      if (_def.shadowRoot !== false) {
        this.attachShadow({ mode: "open" });
        this._root = this.shadowRoot;
      } else {
        this._root = this;
      }
    }
  }
  connectedCallback() {
    if (!this.isConnected) return;
    if (!this.shadowRoot && !this._resolved) {
      this._parseSlots();
    }
    this._connected = true;
    let parent = this;
    while (parent = parent && (parent.parentNode || parent.host)) {
      if (parent instanceof VueElement) {
        this._parent = parent;
        break;
      }
    }
    if (!this._instance) {
      if (this._resolved) {
        this._mount(this._def);
      } else {
        if (parent && parent._pendingResolve) {
          this._pendingResolve = parent._pendingResolve.then(() => {
            this._pendingResolve = void 0;
            this._resolveDef();
          });
        } else {
          this._resolveDef();
        }
      }
    }
  }
  _setParent(parent = this._parent) {
    if (parent) {
      this._instance.parent = parent._instance;
      this._inheritParentContext(parent);
    }
  }
  _inheritParentContext(parent = this._parent) {
    if (parent && this._app) {
      Object.setPrototypeOf(
        this._app._context.provides,
        parent._instance.provides
      );
    }
  }
  disconnectedCallback() {
    this._connected = false;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        this._app && this._app.unmount();
        if (this._instance) this._instance.ce = void 0;
        this._app = this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) {
      return;
    }
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver((mutations) => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    });
    this._ob.observe(this, { attributes: true });
    const resolve = (def, isAsync = false) => {
      this._resolved = true;
      this._pendingResolve = void 0;
      const { props, styles } = def;
      let numberProps;
      if (props && !(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.toNumber)(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      this._resolveProps(def);
      if (this.shadowRoot) {
        this._applyStyles(styles);
      } else if ( true && styles) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          "Custom element style injection is not supported when using shadowRoot: false"
        );
      }
      this._mount(def);
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      this._pendingResolve = asyncDef().then((def) => {
        def.configureApp = this._def.configureApp;
        resolve(this._def = def, true);
      });
    } else {
      resolve(this._def);
    }
  }
  _mount(def) {
    if (( true) && !def.name) {
      def.name = "VueElement";
    }
    this._app = this._createApp(def);
    this._inheritParentContext();
    if (def.configureApp) {
      def.configureApp(this._app);
    }
    this._app._ceVNode = this._createVNode();
    this._app.mount(this._root);
    const exposed = this._instance && this._instance.exposed;
    if (!exposed) return;
    for (const key in exposed) {
      if (!(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(this, key)) {
        Object.defineProperty(this, key, {
          // unwrap ref to be consistent with public instance behavior
          get: () => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.unref)(exposed[key])
        });
      } else if (true) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Exposed property "${key}" already exists on custom element.`);
      }
    }
  }
  _resolveProps(def) {
    const { props } = def;
    const declaredPropKeys = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key]);
      }
    }
    for (const key of declaredPropKeys.map(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.camelize)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val, true, true);
        }
      });
    }
  }
  _setAttr(key) {
    if (key.startsWith("data-v-")) return;
    const has = this.hasAttribute(key);
    let value = has ? this.getAttribute(key) : REMOVAL;
    const camelKey = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
    if (has && this._numberProps && this._numberProps[camelKey]) {
      value = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);
    }
    this._setProp(camelKey, value, false, true);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
    if (val !== this._props[key]) {
      if (val === REMOVAL) {
        delete this._props[key];
      } else {
        this._props[key] = val;
        if (key === "key" && this._app) {
          this._app._ceVNode.key = val;
        }
      }
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        const ob = this._ob;
        ob && ob.disconnect();
        if (val === true) {
          this.setAttribute((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), val + "");
        } else if (!val) {
          this.removeAttribute((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key));
        }
        ob && ob.observe(this, { attributes: true });
      }
    }
  }
  _update() {
    const vnode = this._createVNode();
    if (this._app) vnode.appContext = this._app._context;
    render(vnode, this._root);
  }
  _createVNode() {
    const baseProps = {};
    if (!this.shadowRoot) {
      baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
    }
    const vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(this._def, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.ce = this;
        instance.isCE = true;
        if (true) {
          instance.ceReload = (newStyles) => {
            if (this._styles) {
              this._styles.forEach((s) => this._root.removeChild(s));
              this._styles.length = 0;
            }
            this._applyStyles(newStyles);
            this._instance = null;
            this._update();
          };
        }
        const dispatch = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(
              event,
              (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(args[0]) ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)({ detail: args }, args[0]) : { detail: args }
            )
          );
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event) !== event) {
            dispatch((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), args);
          }
        };
        this._setParent();
      };
    }
    return vnode;
  }
  _applyStyles(styles, owner) {
    if (!styles) return;
    if (owner) {
      if (owner === this._def || this._styleChildren.has(owner)) {
        return;
      }
      this._styleChildren.add(owner);
    }
    const nonce = this._nonce;
    for (let i = styles.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (nonce) s.setAttribute("nonce", nonce);
      s.textContent = styles[i];
      this.shadowRoot.prepend(s);
      if (true) {
        if (owner) {
          if (owner.__hmrId) {
            if (!this._childStyles) this._childStyles = /* @__PURE__ */ new Map();
            let entry = this._childStyles.get(owner.__hmrId);
            if (!entry) {
              this._childStyles.set(owner.__hmrId, entry = []);
            }
            entry.push(s);
          }
        } else {
          (this._styles || (this._styles = [])).push(s);
        }
      }
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const slots = this._slots = {};
    let n;
    while (n = this.firstChild) {
      const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (slots[slotName] || (slots[slotName] = [])).push(n);
      this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const outlets = (this._teleportTarget || this).querySelectorAll("slot");
    const scopeId = this._instance.type.__scopeId;
    for (let i = 0; i < outlets.length; i++) {
      const o = outlets[i];
      const slotName = o.getAttribute("name") || "default";
      const content = this._slots[slotName];
      const parent = o.parentNode;
      if (content) {
        for (const n of content) {
          if (scopeId && n.nodeType === 1) {
            const id = scopeId + "-s";
            const walker = document.createTreeWalker(n, 1);
            n.setAttribute(id, "");
            let child;
            while (child = walker.nextNode()) {
              child.setAttribute(id, "");
            }
          }
          parent.insertBefore(n, o);
        }
      } else {
        while (o.firstChild) parent.insertBefore(o.firstChild, o);
      }
      parent.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(comp) {
    this._applyStyles(comp.styles, comp);
  }
  /**
   * @internal
   */
  _removeChildStyle(comp) {
    if (true) {
      this._styleChildren.delete(comp);
      if (this._childStyles && comp.__hmrId) {
        const oldStyles = this._childStyles.get(comp.__hmrId);
        if (oldStyles) {
          oldStyles.forEach((s) => this._root.removeChild(s));
          oldStyles.length = 0;
        }
      }
    }
  }
}
function useHost(caller) {
  const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  const el = instance && instance.ce;
  if (el) {
    return el;
  } else if (true) {
    if (!instance) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `${caller || "useHost"} called without an active component instance.`
      );
    } else {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `${caller || "useHost"} can only be used in components defined via defineCustomElement.`
      );
    }
  }
  return null;
}
function useShadowRoot() {
  const el =  true ? useHost("useShadowRoot") : 0;
  return el && el.shadowRoot;
}

function useCssModule(name = "$style") {
  {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssModule must be called inside setup()`);
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS modules injected.`);
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS module named "${name}".`);
      return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    return mod;
  }
}

const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t) => {
  delete t.props.mode;
  return t;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    let prevChildren;
    let children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        prevChildren = [];
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
      prevChildren = [];
    });
    return () => {
      const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = [];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(
              child,
              (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(
                child,
                cssTransitionProps,
                state,
                instance
              )
            );
            positionMap.set(
              child,
              child.el.getBoundingClientRect()
            );
          }
        }
      }
      children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(
            child,
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance)
          );
        } else if ( true && child.type !== _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<TransitionGroup> children must be keyed.`);
        }
      }
      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}

const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? (value) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el[assignKey];
      if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        const index = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    checked = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(getValue(o)) : getValue(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  if (isMultiple && !isArrayValue && !(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v) => String(v) === String(optionValue));
        } else {
          option.selected = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      if (vnode.props && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}

const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  }));
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
    if (modifiers.some(
      (k) => k === eventKey || keyNames[k] === eventKey
    )) {
      return fn(event);
    }
  }));
};

const rendererOptions = /* @__PURE__ */ (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render = ((...args) => {
  ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
  ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
});
const createSSRApp = ((...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, resolveRootNamespace(container));
    }
  };
  return app;
});
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag) || (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isMathMLTag)(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
        );
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    const res = document.querySelector(container);
    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Failed to mount app: mount target selector "${container}" returned null.`
      );
    }
    return res;
  }
  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
    );
  }
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
} ;




/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_ARR: function() { return /* binding */ EMPTY_ARR; },
/* harmony export */   EMPTY_OBJ: function() { return /* binding */ EMPTY_OBJ; },
/* harmony export */   NO: function() { return /* binding */ NO; },
/* harmony export */   NOOP: function() { return /* binding */ NOOP; },
/* harmony export */   PatchFlagNames: function() { return /* binding */ PatchFlagNames; },
/* harmony export */   PatchFlags: function() { return /* binding */ PatchFlags; },
/* harmony export */   ShapeFlags: function() { return /* binding */ ShapeFlags; },
/* harmony export */   SlotFlags: function() { return /* binding */ SlotFlags; },
/* harmony export */   camelize: function() { return /* binding */ camelize; },
/* harmony export */   capitalize: function() { return /* binding */ capitalize; },
/* harmony export */   cssVarNameEscapeSymbolsRE: function() { return /* binding */ cssVarNameEscapeSymbolsRE; },
/* harmony export */   def: function() { return /* binding */ def; },
/* harmony export */   escapeHtml: function() { return /* binding */ escapeHtml; },
/* harmony export */   escapeHtmlComment: function() { return /* binding */ escapeHtmlComment; },
/* harmony export */   extend: function() { return /* binding */ extend; },
/* harmony export */   genCacheKey: function() { return /* binding */ genCacheKey; },
/* harmony export */   genPropsAccessExp: function() { return /* binding */ genPropsAccessExp; },
/* harmony export */   generateCodeFrame: function() { return /* binding */ generateCodeFrame; },
/* harmony export */   getEscapedCssVarName: function() { return /* binding */ getEscapedCssVarName; },
/* harmony export */   getGlobalThis: function() { return /* binding */ getGlobalThis; },
/* harmony export */   hasChanged: function() { return /* binding */ hasChanged; },
/* harmony export */   hasOwn: function() { return /* binding */ hasOwn; },
/* harmony export */   hyphenate: function() { return /* binding */ hyphenate; },
/* harmony export */   includeBooleanAttr: function() { return /* binding */ includeBooleanAttr; },
/* harmony export */   invokeArrayFns: function() { return /* binding */ invokeArrayFns; },
/* harmony export */   isArray: function() { return /* binding */ isArray; },
/* harmony export */   isBooleanAttr: function() { return /* binding */ isBooleanAttr; },
/* harmony export */   isBuiltInDirective: function() { return /* binding */ isBuiltInDirective; },
/* harmony export */   isDate: function() { return /* binding */ isDate; },
/* harmony export */   isFunction: function() { return /* binding */ isFunction; },
/* harmony export */   isGloballyAllowed: function() { return /* binding */ isGloballyAllowed; },
/* harmony export */   isGloballyWhitelisted: function() { return /* binding */ isGloballyWhitelisted; },
/* harmony export */   isHTMLTag: function() { return /* binding */ isHTMLTag; },
/* harmony export */   isIntegerKey: function() { return /* binding */ isIntegerKey; },
/* harmony export */   isKnownHtmlAttr: function() { return /* binding */ isKnownHtmlAttr; },
/* harmony export */   isKnownMathMLAttr: function() { return /* binding */ isKnownMathMLAttr; },
/* harmony export */   isKnownSvgAttr: function() { return /* binding */ isKnownSvgAttr; },
/* harmony export */   isMap: function() { return /* binding */ isMap; },
/* harmony export */   isMathMLTag: function() { return /* binding */ isMathMLTag; },
/* harmony export */   isModelListener: function() { return /* binding */ isModelListener; },
/* harmony export */   isObject: function() { return /* binding */ isObject; },
/* harmony export */   isOn: function() { return /* binding */ isOn; },
/* harmony export */   isPlainObject: function() { return /* binding */ isPlainObject; },
/* harmony export */   isPromise: function() { return /* binding */ isPromise; },
/* harmony export */   isRegExp: function() { return /* binding */ isRegExp; },
/* harmony export */   isRenderableAttrValue: function() { return /* binding */ isRenderableAttrValue; },
/* harmony export */   isReservedProp: function() { return /* binding */ isReservedProp; },
/* harmony export */   isSSRSafeAttrName: function() { return /* binding */ isSSRSafeAttrName; },
/* harmony export */   isSVGTag: function() { return /* binding */ isSVGTag; },
/* harmony export */   isSet: function() { return /* binding */ isSet; },
/* harmony export */   isSpecialBooleanAttr: function() { return /* binding */ isSpecialBooleanAttr; },
/* harmony export */   isString: function() { return /* binding */ isString; },
/* harmony export */   isSymbol: function() { return /* binding */ isSymbol; },
/* harmony export */   isVoidTag: function() { return /* binding */ isVoidTag; },
/* harmony export */   looseEqual: function() { return /* binding */ looseEqual; },
/* harmony export */   looseIndexOf: function() { return /* binding */ looseIndexOf; },
/* harmony export */   looseToNumber: function() { return /* binding */ looseToNumber; },
/* harmony export */   makeMap: function() { return /* binding */ makeMap; },
/* harmony export */   normalizeClass: function() { return /* binding */ normalizeClass; },
/* harmony export */   normalizeCssVarValue: function() { return /* binding */ normalizeCssVarValue; },
/* harmony export */   normalizeProps: function() { return /* binding */ normalizeProps; },
/* harmony export */   normalizeStyle: function() { return /* binding */ normalizeStyle; },
/* harmony export */   objectToString: function() { return /* binding */ objectToString; },
/* harmony export */   parseStringStyle: function() { return /* binding */ parseStringStyle; },
/* harmony export */   propsToAttrMap: function() { return /* binding */ propsToAttrMap; },
/* harmony export */   remove: function() { return /* binding */ remove; },
/* harmony export */   slotFlagsText: function() { return /* binding */ slotFlagsText; },
/* harmony export */   stringifyStyle: function() { return /* binding */ stringifyStyle; },
/* harmony export */   toDisplayString: function() { return /* binding */ toDisplayString; },
/* harmony export */   toHandlerKey: function() { return /* binding */ toHandlerKey; },
/* harmony export */   toNumber: function() { return /* binding */ toNumber; },
/* harmony export */   toRawType: function() { return /* binding */ toRawType; },
/* harmony export */   toTypeString: function() { return /* binding */ toTypeString; }
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}

const EMPTY_OBJ =  true ? Object.freeze({}) : 0;
const EMPTY_ARR =  true ? Object.freeze([]) : 0;
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return ((str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  });
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
  return source + JSON.stringify(
    options,
    (_, val) => typeof val === "function" ? val.toString() : val
  );
}

const PatchFlags = {
  "TEXT": 1,
  "1": "TEXT",
  "CLASS": 2,
  "2": "CLASS",
  "STYLE": 4,
  "4": "STYLE",
  "PROPS": 8,
  "8": "PROPS",
  "FULL_PROPS": 16,
  "16": "FULL_PROPS",
  "NEED_HYDRATION": 32,
  "32": "NEED_HYDRATION",
  "STABLE_FRAGMENT": 64,
  "64": "STABLE_FRAGMENT",
  "KEYED_FRAGMENT": 128,
  "128": "KEYED_FRAGMENT",
  "UNKEYED_FRAGMENT": 256,
  "256": "UNKEYED_FRAGMENT",
  "NEED_PATCH": 512,
  "512": "NEED_PATCH",
  "DYNAMIC_SLOTS": 1024,
  "1024": "DYNAMIC_SLOTS",
  "DEV_ROOT_FRAGMENT": 2048,
  "2048": "DEV_ROOT_FRAGMENT",
  "CACHED": -1,
  "-1": "CACHED",
  "BAIL": -2,
  "-2": "BAIL"
};
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `NEED_HYDRATION`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `CACHED`,
  [-2]: `BAIL`
};

const ShapeFlags = {
  "ELEMENT": 1,
  "1": "ELEMENT",
  "FUNCTIONAL_COMPONENT": 2,
  "2": "FUNCTIONAL_COMPONENT",
  "STATEFUL_COMPONENT": 4,
  "4": "STATEFUL_COMPONENT",
  "TEXT_CHILDREN": 8,
  "8": "TEXT_CHILDREN",
  "ARRAY_CHILDREN": 16,
  "16": "ARRAY_CHILDREN",
  "SLOTS_CHILDREN": 32,
  "32": "SLOTS_CHILDREN",
  "TELEPORT": 64,
  "64": "TELEPORT",
  "SUSPENSE": 128,
  "128": "SUSPENSE",
  "COMPONENT_SHOULD_KEEP_ALIVE": 256,
  "256": "COMPONENT_SHOULD_KEEP_ALIVE",
  "COMPONENT_KEPT_ALIVE": 512,
  "512": "COMPONENT_KEPT_ALIVE",
  "COMPONENT": 6,
  "6": "COMPONENT"
};

const SlotFlags = {
  "STABLE": 1,
  "1": "STABLE",
  "DYNAMIC": 2,
  "2": "DYNAMIC",
  "FORWARDED": 3,
  "3": "FORWARDED"
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};

const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  start = Math.max(0, Math.min(start, source.length));
  end = Math.max(0, Math.min(end, source.length));
  if (start > end) return "";
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(
          `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
        );
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  if (!styles) return "";
  if (isString(styles)) return styles;
  let ret = "";
  for (const key in styles) {
    const value = styles[key];
    if (isString(value) || typeof value === "number") {
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}

const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);

const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);
const isKnownMathMLAttr = /* @__PURE__ */ makeMap(
  `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
);
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
  return key.replace(
    cssVarNameEscapeSymbolsRE,
    (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
  );
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}

const isRef = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};

function normalizeCssVarValue(value) {
  if (value == null) {
    return "initial";
  }
  if (typeof value === "string") {
    return value === "" ? " " : value;
  }
  if (typeof value !== "number" || !Number.isFinite(value)) {
    if (true) {
      console.warn(
        "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
        value
      );
    }
  }
  return String(value);
}




/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.filter.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.filter.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var createIteratorProxy = __webpack_require__(/*! ../internals/iterator-create-proxy */ "./node_modules/core-js/internals/iterator-create-proxy.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperThrowsOnInvalidIterator = __webpack_require__(/*! ../internals/iterator-helper-throws-on-invalid-iterator */ "./node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(/*! ../internals/iterator-helper-without-closing-on-early-error */ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.find.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.find.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(/*! ../internals/iterator-helper-without-closing-on-early-error */ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");

var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('find', TypeError);

// `Iterator.prototype.find` method
// https://tc39.es/ecma262/#sec-iterator.prototype.find
$({ target: 'Iterator', proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
  find: function find(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.iterator.some.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.iterator.some.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorDirect = __webpack_require__(/*! ../internals/get-iterator-direct */ "./node_modules/core-js/internals/get-iterator-direct.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");
var iteratorHelperWithoutClosingOnEarlyError = __webpack_require__(/*! ../internals/iterator-helper-without-closing-on-early-error */ "./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js");

var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('some', TypeError);

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$({ target: 'Iterator', proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
  some: function some(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.mjs":
/*!*****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}}
//# sourceMappingURL=mitt.mjs.map


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm-bundler.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm-bundler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.BaseTransition; },
/* harmony export */   BaseTransitionPropsValidators: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.BaseTransitionPropsValidators; },
/* harmony export */   Comment: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Comment; },
/* harmony export */   DeprecationTypes: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.DeprecationTypes; },
/* harmony export */   EffectScope: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.EffectScope; },
/* harmony export */   ErrorCodes: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.ErrorCodes; },
/* harmony export */   ErrorTypeStrings: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.ErrorTypeStrings; },
/* harmony export */   Fragment: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Fragment; },
/* harmony export */   KeepAlive: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.KeepAlive; },
/* harmony export */   ReactiveEffect: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.ReactiveEffect; },
/* harmony export */   Static: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Static; },
/* harmony export */   Suspense: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Suspense; },
/* harmony export */   Teleport: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Teleport; },
/* harmony export */   Text: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Text; },
/* harmony export */   TrackOpTypes: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.TrackOpTypes; },
/* harmony export */   Transition: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.Transition; },
/* harmony export */   TransitionGroup: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup; },
/* harmony export */   TriggerOpTypes: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.TriggerOpTypes; },
/* harmony export */   VueElement: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.VueElement; },
/* harmony export */   assertNumber: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.assertNumber; },
/* harmony export */   callWithAsyncErrorHandling: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.callWithAsyncErrorHandling; },
/* harmony export */   callWithErrorHandling: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.callWithErrorHandling; },
/* harmony export */   camelize: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.camelize; },
/* harmony export */   capitalize: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.capitalize; },
/* harmony export */   cloneVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.cloneVNode; },
/* harmony export */   compatUtils: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.compatUtils; },
/* harmony export */   compile: function() { return /* binding */ compile; },
/* harmony export */   computed: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.computed; },
/* harmony export */   createApp: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createApp; },
/* harmony export */   createBlock: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createBlock; },
/* harmony export */   createCommentVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode; },
/* harmony export */   createElementBlock: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createElementBlock; },
/* harmony export */   createElementVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createElementVNode; },
/* harmony export */   createHydrationRenderer: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createHydrationRenderer; },
/* harmony export */   createPropsRestProxy: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createPropsRestProxy; },
/* harmony export */   createRenderer: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createRenderer; },
/* harmony export */   createSSRApp: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createSSRApp; },
/* harmony export */   createSlots: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createSlots; },
/* harmony export */   createStaticVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createStaticVNode; },
/* harmony export */   createTextVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createTextVNode; },
/* harmony export */   createVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.createVNode; },
/* harmony export */   customRef: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.customRef; },
/* harmony export */   defineAsyncComponent: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent; },
/* harmony export */   defineComponent: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineComponent; },
/* harmony export */   defineCustomElement: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineCustomElement; },
/* harmony export */   defineEmits: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineEmits; },
/* harmony export */   defineExpose: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineExpose; },
/* harmony export */   defineModel: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineModel; },
/* harmony export */   defineOptions: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineOptions; },
/* harmony export */   defineProps: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineProps; },
/* harmony export */   defineSSRCustomElement: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineSSRCustomElement; },
/* harmony export */   defineSlots: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.defineSlots; },
/* harmony export */   devtools: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.devtools; },
/* harmony export */   effect: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.effect; },
/* harmony export */   effectScope: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.effectScope; },
/* harmony export */   getCurrentInstance: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance; },
/* harmony export */   getCurrentScope: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.getCurrentScope; },
/* harmony export */   getCurrentWatcher: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.getCurrentWatcher; },
/* harmony export */   getTransitionRawChildren: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.getTransitionRawChildren; },
/* harmony export */   guardReactiveProps: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.guardReactiveProps; },
/* harmony export */   h: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.h; },
/* harmony export */   handleError: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.handleError; },
/* harmony export */   hasInjectionContext: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.hasInjectionContext; },
/* harmony export */   hydrate: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate; },
/* harmony export */   hydrateOnIdle: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.hydrateOnIdle; },
/* harmony export */   hydrateOnInteraction: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.hydrateOnInteraction; },
/* harmony export */   hydrateOnMediaQuery: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.hydrateOnMediaQuery; },
/* harmony export */   hydrateOnVisible: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.hydrateOnVisible; },
/* harmony export */   initCustomFormatter: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter; },
/* harmony export */   initDirectivesForSSR: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initDirectivesForSSR; },
/* harmony export */   inject: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.inject; },
/* harmony export */   isMemoSame: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isMemoSame; },
/* harmony export */   isProxy: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isProxy; },
/* harmony export */   isReactive: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isReactive; },
/* harmony export */   isReadonly: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isReadonly; },
/* harmony export */   isRef: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isRef; },
/* harmony export */   isRuntimeOnly: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isRuntimeOnly; },
/* harmony export */   isShallow: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isShallow; },
/* harmony export */   isVNode: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.isVNode; },
/* harmony export */   markRaw: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.markRaw; },
/* harmony export */   mergeDefaults: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.mergeDefaults; },
/* harmony export */   mergeModels: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.mergeModels; },
/* harmony export */   mergeProps: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.mergeProps; },
/* harmony export */   nextTick: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.nextTick; },
/* harmony export */   normalizeClass: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.normalizeClass; },
/* harmony export */   normalizeProps: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.normalizeProps; },
/* harmony export */   normalizeStyle: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle; },
/* harmony export */   onActivated: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onActivated; },
/* harmony export */   onBeforeMount: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onBeforeMount; },
/* harmony export */   onBeforeUnmount: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onBeforeUnmount; },
/* harmony export */   onBeforeUpdate: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onBeforeUpdate; },
/* harmony export */   onDeactivated: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onDeactivated; },
/* harmony export */   onErrorCaptured: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onErrorCaptured; },
/* harmony export */   onMounted: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onMounted; },
/* harmony export */   onRenderTracked: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onRenderTracked; },
/* harmony export */   onRenderTriggered: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onRenderTriggered; },
/* harmony export */   onScopeDispose: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onScopeDispose; },
/* harmony export */   onServerPrefetch: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onServerPrefetch; },
/* harmony export */   onUnmounted: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onUnmounted; },
/* harmony export */   onUpdated: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onUpdated; },
/* harmony export */   onWatcherCleanup: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.onWatcherCleanup; },
/* harmony export */   openBlock: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.openBlock; },
/* harmony export */   popScopeId: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.popScopeId; },
/* harmony export */   provide: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.provide; },
/* harmony export */   proxyRefs: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.proxyRefs; },
/* harmony export */   pushScopeId: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.pushScopeId; },
/* harmony export */   queuePostFlushCb: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.queuePostFlushCb; },
/* harmony export */   reactive: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.reactive; },
/* harmony export */   readonly: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.readonly; },
/* harmony export */   ref: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.ref; },
/* harmony export */   registerRuntimeCompiler: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.registerRuntimeCompiler; },
/* harmony export */   render: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.render; },
/* harmony export */   renderList: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.renderList; },
/* harmony export */   renderSlot: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.renderSlot; },
/* harmony export */   resolveComponent: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.resolveComponent; },
/* harmony export */   resolveDirective: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.resolveDirective; },
/* harmony export */   resolveDynamicComponent: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.resolveDynamicComponent; },
/* harmony export */   resolveFilter: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.resolveFilter; },
/* harmony export */   resolveTransitionHooks: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.resolveTransitionHooks; },
/* harmony export */   setBlockTracking: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.setBlockTracking; },
/* harmony export */   setDevtoolsHook: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.setDevtoolsHook; },
/* harmony export */   setTransitionHooks: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.setTransitionHooks; },
/* harmony export */   shallowReactive: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.shallowReactive; },
/* harmony export */   shallowReadonly: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.shallowReadonly; },
/* harmony export */   shallowRef: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.shallowRef; },
/* harmony export */   ssrContextKey: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.ssrContextKey; },
/* harmony export */   ssrUtils: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.ssrUtils; },
/* harmony export */   stop: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.stop; },
/* harmony export */   toDisplayString: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toDisplayString; },
/* harmony export */   toHandlerKey: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey; },
/* harmony export */   toHandlers: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toHandlers; },
/* harmony export */   toRaw: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toRaw; },
/* harmony export */   toRef: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toRef; },
/* harmony export */   toRefs: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toRefs; },
/* harmony export */   toValue: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.toValue; },
/* harmony export */   transformVNodeArgs: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.transformVNodeArgs; },
/* harmony export */   triggerRef: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.triggerRef; },
/* harmony export */   unref: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.unref; },
/* harmony export */   useAttrs: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useAttrs; },
/* harmony export */   useCssModule: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useCssModule; },
/* harmony export */   useCssVars: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useCssVars; },
/* harmony export */   useHost: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useHost; },
/* harmony export */   useId: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useId; },
/* harmony export */   useModel: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useModel; },
/* harmony export */   useSSRContext: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useSSRContext; },
/* harmony export */   useShadowRoot: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useShadowRoot; },
/* harmony export */   useSlots: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useSlots; },
/* harmony export */   useTemplateRef: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useTemplateRef; },
/* harmony export */   useTransitionState: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.useTransitionState; },
/* harmony export */   vModelCheckbox: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.vModelCheckbox; },
/* harmony export */   vModelDynamic: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.vModelDynamic; },
/* harmony export */   vModelRadio: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.vModelRadio; },
/* harmony export */   vModelSelect: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.vModelSelect; },
/* harmony export */   vModelText: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.vModelText; },
/* harmony export */   vShow: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.vShow; },
/* harmony export */   version: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.version; },
/* harmony export */   warn: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn; },
/* harmony export */   watch: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.watch; },
/* harmony export */   watchEffect: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.watchEffect; },
/* harmony export */   watchPostEffect: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.watchPostEffect; },
/* harmony export */   watchSyncEffect: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.watchSyncEffect; },
/* harmony export */   withAsyncContext: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withAsyncContext; },
/* harmony export */   withCtx: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withCtx; },
/* harmony export */   withDefaults: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withDefaults; },
/* harmony export */   withDirectives: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withDirectives; },
/* harmony export */   withKeys: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withKeys; },
/* harmony export */   withMemo: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withMemo; },
/* harmony export */   withModifiers: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withModifiers; },
/* harmony export */   withScopeId: function() { return /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.withScopeId; }
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/**
* vue v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/



function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter)();
  }
}

if (true) {
  initDev();
}
const compile = () => {
  if (true) {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `Runtime compilation is not supported in this build of Vue.` + (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".` )
    );
  }
};




/***/ }),

/***/ "./node_modules/vuex-module-decorators/dist/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuex-module-decorators/dist/esm/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: function() { return /* binding */ Action; },
/* harmony export */   Module: function() { return /* binding */ Module; },
/* harmony export */   Mutation: function() { return /* binding */ Mutation; },
/* harmony export */   MutationAction: function() { return /* binding */ MutationAction; },
/* harmony export */   VuexModule: function() { return /* binding */ VuexModule; },
/* harmony export */   config: function() { return /* binding */ config; },
/* harmony export */   getModule: function() { return /* binding */ getModule; }
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * Takes the properties on object from parameter source and adds them to the object
 * parameter target
 * @param {object} target  Object to have properties copied onto from y
 * @param {object} source  Object with properties to be copied to x
 */
function addPropertiesToObject(target, source) {
    for (let k of Object.keys(source || {})) {
        Object.defineProperty(target, k, {
            get: () => source[k]
        });
    }
}
/**
 * Returns a namespaced name of the module to be used as a store getter
 * @param module
 */
function getModuleName(module) {
    if (!module._vmdModuleName) {
        throw new Error(`ERR_GET_MODULE_NAME : Could not get module accessor.
      Make sure your module has name, we can't make accessors for unnamed modules
      i.e. @Module({ name: 'something' })`);
    }
    return `vuexModuleDecorators/${module._vmdModuleName}`;
}

class VuexModule {
    constructor(module) {
        this.actions = module.actions;
        this.mutations = module.mutations;
        this.state = module.state;
        this.getters = module.getters;
        this.namespaced = module.namespaced;
        this.modules = module.modules;
    }
}
function getModule(moduleClass, store) {
    const moduleName = getModuleName(moduleClass);
    if (store && store.getters[moduleName]) {
        return store.getters[moduleName];
    }
    else if (moduleClass._statics) {
        return moduleClass._statics;
    }
    const genStatic = moduleClass._genStatic;
    if (!genStatic) {
        throw new Error(`ERR_GET_MODULE_NO_STATICS : Could not get module accessor.
      Make sure your module has name, we can't make accessors for unnamed modules
      i.e. @Module({ name: 'something' })`);
    }
    const storeModule = genStatic(store);
    if (store) {
        store.getters[moduleName] = storeModule;
    }
    else {
        moduleClass._statics = storeModule;
    }
    return storeModule;
}

const reservedKeys = ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit'];
function stateFactory(module) {
    const state = new module.prototype.constructor({});
    const s = {};
    Object.keys(state).forEach((key) => {
        if (reservedKeys.indexOf(key) !== -1) {
            if (typeof state[key] !== 'undefined') {
                throw new Error(`ERR_RESERVED_STATE_KEY_USED: You cannot use the following
        ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit']
        as fields in your module. These are reserved as they have special purpose in Vuex`);
            }
            return;
        }
        if (state.hasOwnProperty(key)) {
            if (typeof state[key] !== 'function') {
                s[key] = state[key];
            }
        }
    });
    return s;
}

function staticStateGenerator(module, modOpt, statics) {
    const state = modOpt.stateFactory ? module.state() : module.state;
    Object.keys(state).forEach((key) => {
        if (state.hasOwnProperty(key)) {
            // If not undefined or function means it is a state value
            if (['undefined', 'function'].indexOf(typeof state[key]) === -1) {
                Object.defineProperty(statics, key, {
                    get() {
                        const path = modOpt.name.split('/');
                        let data = statics.store.state;
                        for (let segment of path) {
                            data = data[segment];
                        }
                        return data[key];
                    }
                });
            }
        }
    });
}
function staticGetterGenerator(module, modOpt, statics) {
    Object.keys(module.getters).forEach((key) => {
        if (module.namespaced) {
            Object.defineProperty(statics, key, {
                get() {
                    return statics.store.getters[`${modOpt.name}/${key}`];
                }
            });
        }
        else {
            Object.defineProperty(statics, key, {
                get() {
                    return statics.store.getters[key];
                }
            });
        }
    });
}
function staticMutationGenerator(module, modOpt, statics) {
    Object.keys(module.mutations).forEach((key) => {
        if (module.namespaced) {
            statics[key] = function (...args) {
                statics.store.commit(`${modOpt.name}/${key}`, ...args);
            };
        }
        else {
            statics[key] = function (...args) {
                statics.store.commit(key, ...args);
            };
        }
    });
}
function staticActionGenerators(module, modOpt, statics) {
    Object.keys(module.actions).forEach((key) => {
        if (module.namespaced) {
            statics[key] = async function (...args) {
                return statics.store.dispatch(`${modOpt.name}/${key}`, ...args);
            };
        }
        else {
            statics[key] = async function (...args) {
                return statics.store.dispatch(key, ...args);
            };
        }
    });
}

function registerDynamicModule(module, modOpt) {
    if (!modOpt.name) {
        throw new Error('Name of module not provided in decorator options');
    }
    if (!modOpt.store) {
        throw new Error('Store not provided in decorator options when using dynamic option');
    }
    modOpt.store.registerModule(modOpt.name, // TODO: Handle nested modules too in future
    module, { preserveState: modOpt.preserveState || false });
}
function addGettersToModule(targetModule, srcModule) {
    Object.getOwnPropertyNames(srcModule.prototype).forEach((funcName) => {
        const descriptor = Object.getOwnPropertyDescriptor(srcModule.prototype, funcName);
        if (descriptor.get && targetModule.getters) {
            targetModule.getters[funcName] = function (state, getters, rootState, rootGetters) {
                const thisObj = { context: { state, getters, rootState, rootGetters } };
                addPropertiesToObject(thisObj, state);
                addPropertiesToObject(thisObj, getters);
                const got = descriptor.get.call(thisObj);
                return got;
            };
        }
    });
}
function moduleDecoratorFactory(moduleOptions) {
    return function (constructor) {
        const module = constructor;
        const stateFactory$1 = () => stateFactory(module);
        if (!module.state) {
            module.state = moduleOptions && moduleOptions.stateFactory ? stateFactory$1 : stateFactory$1();
        }
        if (!module.getters) {
            module.getters = {};
        }
        if (!module.namespaced) {
            module.namespaced = moduleOptions && moduleOptions.namespaced;
        }
        let parentModule = Object.getPrototypeOf(module);
        while (parentModule.name !== 'VuexModule' && parentModule.name !== '') {
            addGettersToModule(module, parentModule);
            parentModule = Object.getPrototypeOf(parentModule);
        }
        addGettersToModule(module, module);
        const modOpt = moduleOptions;
        if (modOpt.name) {
            Object.defineProperty(constructor, '_genStatic', {
                value: (store) => {
                    let statics = { store: store || modOpt.store };
                    if (!statics.store) {
                        throw new Error(`ERR_STORE_NOT_PROVIDED: To use getModule(), either the module
            should be decorated with store in decorator, i.e. @Module({store: store}) or
            store should be passed when calling getModule(), i.e. getModule(MyModule, this.$store)`);
                    }
                    // ===========  For statics ==============
                    // ------ state -------
                    staticStateGenerator(module, modOpt, statics);
                    // ------- getters -------
                    if (module.getters) {
                        staticGetterGenerator(module, modOpt, statics);
                    }
                    // -------- mutations --------
                    if (module.mutations) {
                        staticMutationGenerator(module, modOpt, statics);
                    }
                    // -------- actions ---------
                    if (module.actions) {
                        staticActionGenerators(module, modOpt, statics);
                    }
                    return statics;
                }
            });
            Object.defineProperty(constructor, '_vmdModuleName', {
                value: modOpt.name
            });
        }
        if (modOpt.dynamic) {
            registerDynamicModule(module, modOpt);
        }
        return constructor;
    };
}
function Module(modOrOpt) {
    if (typeof modOrOpt === 'function') {
        /*
         * @Module decorator called without options (directly on the class definition)
         */
        moduleDecoratorFactory({})(modOrOpt);
    }
    else {
        /*
         * @Module({...}) decorator called with options
         */
        return moduleDecoratorFactory(modOrOpt);
    }
}

const config = {};

function actionDecoratorFactory(params) {
    const { commit = undefined, rawError = !!config.rawError, root = false } = params || {};
    return function (target, key, descriptor) {
        const module = target.constructor;
        if (!module.hasOwnProperty('actions')) {
            module.actions = Object.assign({}, module.actions);
        }
        const actionFunction = descriptor.value;
        const action = async function (context, payload) {
            try {
                let actionPayload = null;
                if (module._genStatic) {
                    const moduleName = getModuleName(module);
                    const moduleAccessor = context.rootGetters[moduleName]
                        ? context.rootGetters[moduleName]
                        : getModule(module);
                    moduleAccessor.context = context;
                    actionPayload = await actionFunction.call(moduleAccessor, payload);
                }
                else {
                    const thisObj = { context };
                    addPropertiesToObject(thisObj, context.state);
                    addPropertiesToObject(thisObj, context.getters);
                    actionPayload = await actionFunction.call(thisObj, payload);
                }
                if (commit) {
                    context.commit(commit, actionPayload);
                }
                return actionPayload;
            }
            catch (e) {
                throw rawError
                    ? e
                    : new Error('ERR_ACTION_ACCESS_UNDEFINED: Are you trying to access ' +
                        'this.someMutation() or this.someGetter inside an @Action? \n' +
                        'That works only in dynamic modules. \n' +
                        'If not dynamic use this.context.commit("mutationName", payload) ' +
                        'and this.context.getters["getterName"]' +
                        '\n' +
                        new Error(`Could not perform action ${key.toString()}`).stack +
                        '\n' +
                        e.stack);
            }
        };
        module.actions[key] = root ? { root, handler: action } : action;
    };
}
/**
 * The @Action decorator turns an async function into an Vuex action
 *
 * @param targetOrParams the module class
 * @param key name of the action
 * @param descriptor the action function descriptor
 * @constructor
 */
function Action(targetOrParams, key, descriptor) {
    if (!key && !descriptor) {
        /*
         * This is the case when `targetOrParams` is params.
         * i.e. when used as -
         * <pre>
            @Action({commit: 'incrCount'})
            async getCountDelta() {
              return 5
            }
         * </pre>
         */
        return actionDecoratorFactory(targetOrParams);
    }
    else {
        /*
         * This is the case when @Action is called on action function
         * without any params
         * <pre>
         *   @Action
         *   async doSomething() {
         *    ...
         *   }
         * </pre>
         */
        actionDecoratorFactory()(targetOrParams, key, descriptor);
    }
}

function Mutation(target, key, descriptor) {
    const module = target.constructor;
    if (!module.hasOwnProperty('mutations')) {
        module.mutations = Object.assign({}, module.mutations);
    }
    const mutationFunction = descriptor.value;
    const mutation = function (state, payload) {
        mutationFunction.call(state, payload);
    };
    module.mutations[key] = mutation;
}

function mutationActionDecoratorFactory(params) {
    return function (target, key, descriptor) {
        const module = target.constructor;
        if (!module.hasOwnProperty('mutations')) {
            module.mutations = Object.assign({}, module.mutations);
        }
        if (!module.hasOwnProperty('actions')) {
            module.actions = Object.assign({}, module.actions);
        }
        const mutactFunction = descriptor.value;
        const action = async function (context, payload) {
            try {
                const thisObj = { context };
                addPropertiesToObject(thisObj, context.state);
                addPropertiesToObject(thisObj, context.getters);
                const actionPayload = await mutactFunction.call(thisObj, payload);
                if (actionPayload === undefined)
                    return;
                context.commit(key, actionPayload);
            }
            catch (e) {
                if (params.rawError) {
                    throw e;
                }
                else {
                    console.error('Could not perform action ' + key.toString());
                    console.error(e);
                    return Promise.reject(e);
                }
            }
        };
        const mutation = function (state, payload) {
            if (!params.mutate) {
                params.mutate = Object.keys(payload);
            }
            for (let stateItem of params.mutate) {
                if (state.hasOwnProperty(stateItem) && payload.hasOwnProperty(stateItem)) {
                    state[stateItem] = payload[stateItem];
                }
                else {
                    throw new Error(`ERR_MUTATE_PARAMS_NOT_IN_PAYLOAD
          In @MutationAction, mutate: ['a', 'b', ...] array keys must
          match with return type = {a: {}, b: {}, ...} and must
          also be in state.`);
                }
            }
        };
        module.actions[key] = params.root ? { root: true, handler: action } : action;
        module.mutations[key] = mutation;
    };
}
/**
 * The @MutationAction decorator turns this into an action that further calls a mutation
 * Both the action and the mutation are generated for you
 *
 * @param paramsOrTarget the params or the target class
 * @param key the name of the function
 * @param descriptor the function body
 * @constructor
 */
function MutationAction(paramsOrTarget, key, descriptor) {
    if (!key && !descriptor) {
        /*
         * This is the case when `paramsOrTarget` is params.
         * i.e. when used as -
         * <pre>
            @MutationAction({mutate: ['incrCount']})
            async getCountDelta() {
              return {incrCount: 5}
            }
         * </pre>
         */
        return mutationActionDecoratorFactory(paramsOrTarget);
    }
    else {
        /*
         * This is the case when `paramsOrTarget` is target.
         * i.e. when used as -
         * <pre>
            @MutationAction
            async getCountDelta() {
              return {incrCount: 5}
            }
         * </pre>
         */
        mutationActionDecoratorFactory({})(paramsOrTarget, key, descriptor);
    }
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm-bundler.js":
/*!****************************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm-bundler.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: function() { return /* binding */ Store; },
/* harmony export */   createLogger: function() { return /* binding */ createLogger; },
/* harmony export */   createNamespacedHelpers: function() { return /* binding */ createNamespacedHelpers; },
/* harmony export */   createStore: function() { return /* binding */ createStore; },
/* harmony export */   mapActions: function() { return /* binding */ mapActions; },
/* harmony export */   mapGetters: function() { return /* binding */ mapGetters; },
/* harmony export */   mapMutations: function() { return /* binding */ mapMutations; },
/* harmony export */   mapState: function() { return /* binding */ mapState; },
/* harmony export */   storeKey: function() { return /* binding */ storeKey; },
/* harmony export */   useStore: function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */



var storeKey = 'store';

function useStore (key) {
  if ( key === void 0 ) key = null;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(key !== null ? key : storeKey)
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset state
  resetStoreState(store, state, hot);
}

function resetStoreState (store, state, hot) {
  var oldState = store._state;
  var oldScope = store._scope;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computedObj = {};
  var computedCache = {};

  // create a new effect scope and create computed object inside it to avoid
  // getters (computed) getting destroyed on component unmount.
  var scope = (0,vue__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);

  scope.run(function () {
    forEachValue(wrappedGetters, function (fn, key) {
      // use computed to leverage its lazy-caching mechanism
      // direct inline function use will lead to closure preserving oldState.
      // using partial to return function with only arguments preserved in closure environment.
      computedObj[key] = partial(fn, store);
      computedCache[key] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () { return computedObj[key](); });
      Object.defineProperty(store.getters, key, {
        get: function () { return computedCache[key].value; },
        enumerable: true // for local getters
      });
    });
  });

  store._state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    data: state
  });

  // register the newly created effect scope to the store so that we can
  // dispose the effects when this method runs again in the future.
  store._scope = scope;

  // enable strict mode for new state
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldState) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldState.data = null;
      });
    }
  }

  // dispose previously registered effect scope if there is one.
  if (oldScope) {
    oldScope.stop();
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      parentState[moduleName] = module.state;
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by state update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () { return store._state.data; }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, flush: 'sync' });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

var LABEL_VUEX_BINDINGS = 'vuex bindings';
var MUTATIONS_LAYER_ID = 'vuex:mutations';
var ACTIONS_LAYER_ID = 'vuex:actions';
var INSPECTOR_ID = 'vuex';

var actionId = 0;

function addDevtools (app, store) {
  (0,_vue_devtools_api__WEBPACK_IMPORTED_MODULE_1__.setupDevtoolsPlugin)(
    {
      id: 'org.vuejs.vuex',
      app: app,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    },
    function (api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: 'Vuex Mutations',
        color: COLOR_LIME_500
      });

      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: 'Vuex Actions',
        color: COLOR_LIME_500
      });

      api.addInspector({
        id: INSPECTOR_ID,
        label: 'Vuex',
        icon: 'storage',
        treeFilterPlaceholder: 'Filter stores...'
      });

      api.on.getInspectorTree(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store._modules.root, '')
            ];
          }
        }
      });

      api.on.getInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store, modulePath);
          payload.state = formatStoreForInspectorState(
            getStoreModule(store._modules, modulePath),
            modulePath === 'root' ? store.getters : store._makeLocalGettersCache,
            modulePath
          );
        }
      });

      api.on.editInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== 'root') {
            path = modulePath.split('/').filter(Boolean).concat( path);
          }
          store._withCommit(function () {
            payload.set(store._state.data, path, payload.state.value);
          });
        }
      });

      store.subscribe(function (mutation, state) {
        var data = {};

        if (mutation.payload) {
          data.payload = mutation.payload;
        }

        data.state = state;

        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);

        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data: data
          }
        });
      });

      store.subscribeAction({
        before: function (action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: 'start',
              data: data
            }
          });
        },
        after: function (action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: 'duration',
              display: (duration + "ms"),
              tooltip: 'Action duration',
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: 'end',
              data: data
            }
          });
        }
      });
    }
  );
}

// extracted from tailwind palette
var COLOR_LIME_500 = 0x84cc16;
var COLOR_DARK = 0x666666;
var COLOR_WHITE = 0xffffff;

var TAG_NAMESPACED = {
  label: 'namespaced',
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};

/**
 * @param {string} path
 */
function extractNameFromPath (path) {
  return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root'
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */
function formatStoreForInspectorTree (module, path) {
  return {
    id: path || 'root',
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function (moduleName) { return formatStoreForInspectorTree(
        module._children[moduleName],
        path + moduleName + '/'
      ); }
    )
  }
}

/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */
function flattenStoreForInspectorTree (result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || 'root',
      label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function (moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
  });
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */
function formatStoreForInspectorState (module, getters, path) {
  getters = path === 'root' ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function (key) { return ({
      key: key,
      editable: true,
      value: module.state[key]
    }); })
  };

  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function (key) { return ({
      key: key.endsWith('/') ? extractNameFromPath(key) : key,
      editable: false,
      value: canThrow(function () { return tree[key]; })
    }); });
  }

  return storeState
}

function transformPathsToObjectTree (getters) {
  var result = {};
  Object.keys(getters).forEach(function (key) {
    var path = key.split('/');
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function (p) {
        if (!target[p]) {
          target[p] = {
            _custom: {
              value: {},
              display: p,
              tooltip: 'Module',
              abstract: true
            }
          };
        }
        target = target[p]._custom.value;
      });
      target[leafKey] = canThrow(function () { return getters[key]; });
    } else {
      result[key] = canThrow(function () { return getters[key]; });
    }
  });
  return result
}

function getStoreModule (moduleMap, path) {
  var names = path.split('/').filter(function (n) { return n; });
  return names.reduce(
    function (module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error(("Missing module \"" + moduleName + "\" for path \"" + path + "\"."))
      }
      return i === names.length - 1 ? child : child._children
    },
    path === 'root' ? moduleMap : moduleMap.root._children
  )
}

function canThrow (cb) {
  try {
    return cb()
  } catch (e) {
    return e
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

function createStore (options) {
  return new Store(options)
}

var Store = function Store (options) {
  var this$1$1 = this;
  if ( options === void 0 ) options = {};

  if ((true)) {
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;
  var devtools = options.devtools;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = Object.create(null);

  // EffectScope instance. when registering new getters, we wrap them inside
  // EffectScope so that getters (computed) would not be destroyed on
  // component unmount.
  this._scope = null;

  this._devtools = devtools;

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store state, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreState(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1$1); });
};

var prototypeAccessors = { state: { configurable: true } };

Store.prototype.install = function install (app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;

  var useDevtools = this._devtools !== undefined
    ? this._devtools
    : ( true) || 0;

  if (useDevtools) {
    addDevtools(app, this);
  }
};

prototypeAccessors.state.get = function () {
  return this._state.data
};

prototypeAccessors.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch$1 (getter, cb, options) {
    var this$1$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () { return getter(this$1$1.state, this$1$1.getters); }, cb, Object.assign({}, options))
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1$1 = this;

  this._withCommit(function () {
    this$1$1._state.data = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreState(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  version: '4.1.0',
  Store: Store,
  storeKey: storeKey,
  createStore: createStore,
  useStore: useStore,
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./src/core/user_local_storage_key.ts":
/*!********************************************!*\
  !*** ./src/core/user_local_storage_key.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_LOCAL_STORAGE_KEY: function() { return /* binding */ USER_LOCAL_STORAGE_KEY; }
/* harmony export */ });
const USER_LOCAL_STORAGE_KEY = 'current-user';

/***/ }),

/***/ "./src/environment/environment.ts":
/*!****************************************!*\
  !*** ./src/environment/environment.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: "http://localhost:3000/" || 0,
  guiUrl: "http://localhost:8000/" || 0,
  printServiceUrl: "http://localhost:4321/" || 0,
  imageFallbackPath: 'img/no-image.jpg',
  features: {
    _appIntegrationsPaypalSandboxEndpoint: true,
    _debug: true,
    _devThemes: false,
    accessReports: true,
    allowUsedCodes: true,
    archiveDeleteBackground: true,
    archiveDeleteBackgroundCategory: true,
    archiveDeleteCampaign: true,
    archiveDeleteCrosssell: true,
    archiveDeleteDeliveryGroup: true,
    archiveDeleteDeliveryOption: true,
    archiveDeleteOrder: true,
    archiveDeleteOrderComment: true,
    archiveDeleteProduct: true,
    archiveDeleteProductCatalog: true,
    archiveDeleteProductCategory: true,
    archiveDeleteProductCustom: true,
    archiveDeleteProductTheme: true,
    archiveDeleteSession: true,
    archiveDeleteSubject: true,
    archiveDeleteSubjectGroup: true,
    archiveDeleteWorkflow: true,
    crudSubjects: true,
    scrubProducts: false,
    sessionDigitalAutoSend: false,
    sessionPhotoSwap: false,
    sessionEditItems: false
  }
};

/***/ }),

/***/ "./src/environment/index.ts":
/*!**********************************!*\
  !*** ./src/environment/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: function() { return /* reexport safe */ _environment__WEBPACK_IMPORTED_MODULE_0__.environment; }
/* harmony export */ });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./src/environment/environment.ts");


/***/ }),

/***/ "./src/errors/datatable_create_error.ts":
/*!**********************************************!*\
  !*** ./src/errors/datatable_create_error.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatatableCreateError: function() { return /* binding */ DatatableCreateError; }
/* harmony export */ });
class DatatableCreateError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/datatable_delete_error.ts":
/*!**********************************************!*\
  !*** ./src/errors/datatable_delete_error.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatatableDeleteError: function() { return /* binding */ DatatableDeleteError; }
/* harmony export */ });
class DatatableDeleteError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/datatable_endpoint_not_found_error.ts":
/*!**********************************************************!*\
  !*** ./src/errors/datatable_endpoint_not_found_error.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatatableEndpointNotFoundError: function() { return /* binding */ DatatableEndpointNotFoundError; }
/* harmony export */ });
class DatatableEndpointNotFoundError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/datatable_error_map.ts":
/*!*******************************************!*\
  !*** ./src/errors/datatable_error_map.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datatableErrorMap: function() { return /* binding */ datatableErrorMap; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_create_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_create_error */ "./src/errors/datatable_create_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_delete_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_delete_error */ "./src/errors/datatable_delete_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_endpoint_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_endpoint_not_found_error */ "./src/errors/datatable_endpoint_not_found_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_read_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_read_error */ "./src/errors/datatable_read_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_update_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_update_error */ "./src/errors/datatable_update_error.ts");





const datatableErrorMap = {
  create: _pictaccio_admin_gui_errors_datatable_create_error__WEBPACK_IMPORTED_MODULE_0__.DatatableCreateError,
  delete: _pictaccio_admin_gui_errors_datatable_delete_error__WEBPACK_IMPORTED_MODULE_1__.DatatableDeleteError,
  read: _pictaccio_admin_gui_errors_datatable_read_error__WEBPACK_IMPORTED_MODULE_3__.DatatableReadError,
  update: _pictaccio_admin_gui_errors_datatable_update_error__WEBPACK_IMPORTED_MODULE_4__.DatatableUpdateError,
  notFound: _pictaccio_admin_gui_errors_datatable_endpoint_not_found_error__WEBPACK_IMPORTED_MODULE_2__.DatatableEndpointNotFoundError
};

/***/ }),

/***/ "./src/errors/datatable_read_error.ts":
/*!********************************************!*\
  !*** ./src/errors/datatable_read_error.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatatableReadError: function() { return /* binding */ DatatableReadError; }
/* harmony export */ });
class DatatableReadError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/datatable_update_error.ts":
/*!**********************************************!*\
  !*** ./src/errors/datatable_update_error.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatatableUpdateError: function() { return /* binding */ DatatableUpdateError; }
/* harmony export */ });
class DatatableUpdateError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/load_error.ts":
/*!**********************************!*\
  !*** ./src/errors/load_error.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadError: function() { return /* binding */ LoadError; }
/* harmony export */ });
class LoadError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/not_authenticated_error.ts":
/*!***********************************************!*\
  !*** ./src/errors/not_authenticated_error.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotAuthenticatedError: function() { return /* binding */ NotAuthenticatedError; }
/* harmony export */ });
class NotAuthenticatedError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/save_error.ts":
/*!**********************************!*\
  !*** ./src/errors/save_error.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveError: function() { return /* binding */ SaveError; }
/* harmony export */ });
class SaveError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/errors/server_error.ts":
/*!************************************!*\
  !*** ./src/errors/server_error.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerError: function() { return /* binding */ ServerError; }
/* harmony export */ });
class ServerError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/***/ }),

/***/ "./src/models/address.ts":
/*!*******************************!*\
  !*** ./src/models/address.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: function() { return /* binding */ Address; },
/* harmony export */   AddressUnitType: function() { return /* binding */ AddressUnitType; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var AddressUnitType;
(function (AddressUnitType) {
  AddressUnitType["Apartment"] = "apartment";
  AddressUnitType["Suite"] = "suite";
  AddressUnitType["Office"] = "office";
})(AddressUnitType || (AddressUnitType = {}));
class Address {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addressLine1", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addressLine2", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "city", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "province", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "country", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "postalCode", void 0);
  }
}

/***/ }),

/***/ "./src/models/store_config.ts":
/*!************************************!*\
  !*** ./src/models/store_config.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreConfig: function() { return /* binding */ StoreConfig; },
/* harmony export */   TaxLocality: function() { return /* binding */ TaxLocality; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _pictaccio_admin_gui_models_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/models/address */ "./src/models/address.ts");


var TaxLocality;
(function (TaxLocality) {
  TaxLocality["Quebec"] = "ca-qc";
  TaxLocality["Ontario"] = "ca-on";
  TaxLocality["NewfoundlandAndLabrador"] = "ca-nl";
  TaxLocality["PrinceEdwardIsland"] = "ca-pe";
  TaxLocality["NovaScotia"] = "ca-ns";
  TaxLocality["NewBrunswick"] = "ca-nb";
  TaxLocality["Manitoba"] = "ca-mb";
  TaxLocality["Saskatchewan"] = "ca-sk";
  TaxLocality["Alberta"] = "ca-ab";
  TaxLocality["BritishColumbia"] = "ca-bc";
  TaxLocality["Yukon"] = "ca-yt";
  TaxLocality["NorthwestTerritories"] = "ca-nt";
  TaxLocality["Nunavut"] = "ca-nu";
})(TaxLocality || (TaxLocality = {}));
class StoreConfig {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "storeName", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "storeAccentColor", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "storeLogo", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "address", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emailAddresses", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "phones", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxLocality", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxRateHst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxRateGst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxRateQst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxRatePst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxIdHst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxIdGst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxIdQst", undefined);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "taxIdPst", undefined);
    this.address = new _pictaccio_admin_gui_models_address__WEBPACK_IMPORTED_MODULE_1__.Address();
    this.phones = [{
      name: '_main',
      phone: ''
    }];
    this.emailAddresses = [{
      name: '_customer-service',
      email: ''
    }, {
      name: '_notifications',
      email: ''
    }];
  }
}

/***/ }),

/***/ "./src/services/app_integration_service.ts":
/*!*************************************************!*\
  !*** ./src/services/app_integration_service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/error */ "./src/utils/error.ts");




class AppIntegrationService extends _services_base_service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  async load() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/get-app-integration',
        authenticated: true
      });
      const data = await response.json();
      (0,_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      return data.integrations;
    } catch (error) {
      (0,_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return null;
    }
  }
  async save(integrations) {
    const transformedIntegrations = Object.entries(integrations).map(([app, configuration]) => {
      return {
        app,
        configuration
      };
    });
    try {
      const response = await this.request({
        method: 'post',
        url: 'store/set-app-integration',
        authenticated: true,
        data: {
          integrations: transformedIntegrations
        }
      });
      const data = await response.json();
      (0,_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      const formattedData = {};
      data.appIntegration.map(appIntegration => formattedData[appIntegration.app] = appIntegration.configuration);
      return formattedData;
    } catch (error) {
      (0,_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new AppIntegrationService());

/***/ }),

/***/ "./src/services/auth_service.ts":
/*!**************************************!*\
  !*** ./src/services/auth_service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");



class AuthService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async changePassword(secret) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'auth/change-password',
        data: {
          secret
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  /**
   * Send a request to create a new user
   * @param email
   * @param secret
   * @param roles
   */
  async createAccount(email, secret, roles) {
    try {
      const response = await this.request({
        method: 'post',
        url: 'auth/create-account',
        authenticated: true,
        data: {
          email,
          secret,
          roles
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  /**
   * Send a complete invite request with the chosen secret
   * @param inviteToken
   * @param email
   * @param secret
   */
  async completeInvite(inviteToken, email, secret) {
    try {
      const response = await this.request({
        method: 'post',
        url: this.API_ENDPOINT + 'auth/complete-invite',
        data: {
          inviteToken,
          email,
          secret
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.otpUri;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  /**
   * Complete the password reset
   * @param email
   * @param code
   * @param resetToken
   * @param secret
   */
  async completePasswordReset(email, code, resetToken, secret) {
    try {
      const response = await this.request({
        method: 'post',
        url: this.API_ENDPOINT + 'auth/complete-password-reset',
        data: {
          email,
          code,
          resetToken,
          secret
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async confirmResetAuthenticator() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'auth/confirm-reset-authenticator'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async finishInvite(email, inviteToken) {
    try {
      const response = await this.request({
        method: 'post',
        url: this.API_ENDPOINT + 'auth/finish-invite',
        data: {
          email,
          inviteToken
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
  }
  // /**
  //  * Get the invitee info for a given email address
  //  * @param inviteEmail
  //  */
  // public async getInviteeInfo(inviteToken: string, email: string): Promise<User> {
  //     try {
  //         const response = await this.request({
  //             method: 'get',
  //             url: this.API_ENDPOINT + 'auth/get-invitee-info',
  //             data: {
  //                 inviteToken,
  //                 email
  //             }
  //         });
  //         const data = await response.json();
  //
  //         return data.status === 'great-success'
  //             ? data
  //             : null;
  //     } catch (e) {
  //         globalToast('UNKNOWN_ERROR', 'error');
  //         return null;
  //     }
  // }
  /**
   * Send a request to initiate a user invite
   * @param name
   * @param email
   * @param roles
   */
  async initiateInvite(name, email, roles) {
    try {
      const response = await this.request({
        method: 'post',
        url: 'auth/initiate-invite',
        authenticated: true,
        data: {
          name,
          email,
          roles
        }
      });
      const data = await response.json();
      return data.status === 'great-success' ? data : null;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
    }
  }
  /**
   * Initiate a password reset request. This result in the user receiving a password reset code at their email address
   * The process is in 3 steps:
   * 1) First a call to auth/initiate-password-reset to initiate the request, this step sends the reset code
   * 2) Then a call to auth/validate-reset-password-code. This validates the code and returns the reset token needed
   *    for the call in the 3rd step
   * 3) Finally a call to auth/complete-password-reset to perform the password reset
   * @param email The email address to send the reset code to
   */
  async initiatePasswordReset(email) {
    try {
      await this.request({
        method: 'get',
        url: this.API_ENDPOINT + 'auth/initiate-password-reset',
        data: {
          email
        }
      });
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
    }
  }
  /**
   * Send a login request to the backend
   * @param email
   * @param secret
   * @param authenticatorToken
   */
  async login(email, secret, authenticatorToken) {
    try {
      const response = await this.request({
        method: 'post',
        url: this.API_ENDPOINT + 'auth/login',
        data: {
          email,
          secret,
          token: authenticatorToken
        }
      });
      return await response.json();
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
    }
    return null;
  }
  async resetAuthenticator() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'auth/initialize-reset-authenticator'
      });
      return await response.json();
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
      return null;
    }
  }
  /**
   * Validate an authenticator token against an email address
   * @param email
   * @param authenticatorToken
   */
  async validateAuthenticator(email, authenticatorToken) {
    try {
      const response = await this.request({
        method: 'get',
        url: this.API_ENDPOINT + 'auth/verify-authenticator',
        data: {
          email,
          token: authenticatorToken
        }
      });
      return await response.json();
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
      return null;
    }
  }
  async validateInviteToken(dataRequest) {
    try {
      const response = await this.request({
        method: 'get',
        url: this.API_ENDPOINT + 'auth/validate-invite-token',
        data: dataRequest
      });
      const data = await response.json();
      if (data.status === 'great-success') {
        return {
          valid: true,
          user: data.user
        };
      } else {
        return {
          valid: false,
          user: null
        };
      }
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
      return {
        valid: false,
        user: null
      };
    }
  }
  async validatePassword(secret) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'auth/validate-password',
        data: {
          secret
        }
      });
      return await response.json();
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
      return null;
    }
  }
  /**
   * Validate a password reset code for a given an email address and return the reset token
   * @param email
   * @param code
   */
  async validatePasswordResetCode(email, code) {
    try {
      const response = await this.request({
        method: 'get',
        url: this.API_ENDPOINT + 'auth/validate-reset-password-code',
        data: {
          email,
          code
        }
      });
      return await response.json();
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

/***/ }),

/***/ "./src/services/background_service.ts":
/*!********************************************!*\
  !*** ./src/services/background_service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class BackgroundService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async getProductionIdentifiers() {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'background/readIdentifiers'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return {
        used: data.used,
        unused: data.unused
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getBackgroundTags() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'background/tags/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.tags;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getBackgroundWithProductionIdentifier(pid) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: `background/readWithProductionIdentifier?pid=${pid}`
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.background;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new BackgroundService());

/***/ }),

/***/ "./src/services/base_service.ts":
/*!**************************************!*\
  !*** ./src/services/base_service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BaseService; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors_not_authenticated_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/not_authenticated_error */ "./src/errors/not_authenticated_error.ts");
/* harmony import */ var _utils_global_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/global_toast */ "./src/utils/global_toast.ts");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environment */ "./src/environment/index.ts");






class BaseService {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "API_ENDPOINT", _environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl);
  }
  // Must end with '/'
  /**
   * Same as loufairy's request but automatically adds the Authorization header for authenticated request. Also adds
   * the API_ENDPOINT in front of the url if not present already
   * @param options Same as loufairy's request with the addition of the authenticated property. Set to true to have
   *                the Authorization header set.
   * @protected
   */
  async request(options) {
    const authToken = _store__WEBPACK_IMPORTED_MODULE_1__.store.getters['Auth/authToken'];
    options.headers = options.headers || new Headers();
    if (options.authenticated || options.tryAuthenticated) {
      if (!authToken && !options.tryAuthenticated) {
        (0,_utils_global_toast__WEBPACK_IMPORTED_MODULE_4__.globalToast)('NOT_AUTHENTICATED_ERROR', 'error');
        throw new _errors_not_authenticated_error__WEBPACK_IMPORTED_MODULE_3__.NotAuthenticatedError('An authenticated request was attempted but no auth key was set');
      }
      if (options.headers instanceof Headers) {
        options.headers.append('Authorization', `Bearer ${authToken}`);
      } else {
        options.headers['Authorization'] = `Bearer ${authToken}`;
      }
    }
    if (options.headers instanceof Headers && !options.headers.has('Content-Type')) {
      options.headers.append('Content-Type', 'application/json');
    } else if (options.headers === undefined || options.headers && !Object.prototype.hasOwnProperty.call(options.headers, 'Content-Type')) {
      options.headers = options.headers || {};
      options.headers['Content-Type'] = 'application/json';
    }
    if (!options.url.startsWith(this.API_ENDPOINT)) {
      options.url = this.API_ENDPOINT + options.url;
    }
    try {
      const response = await (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__.request)(options);
      if (response.status === 401) {
        _store__WEBPACK_IMPORTED_MODULE_1__.store.commit('App/commitAuthenticated', false);
      }
      return response;
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error;
      }
      if (_store__WEBPACK_IMPORTED_MODULE_1__.store.getters['App/online'] === true && (error instanceof _loufa_loufairy__WEBPACK_IMPORTED_MODULE_2__.NetworkError || ['Load failed', 'NetworkError when attempting to fetch resource', 'Failed to fetch'].includes(error.message))) {
        if (BaseService.failedCounter === 0) {
          BaseService.failedCounter = 3;
        }
        if (--BaseService.failedCounter === 0) {
          _store__WEBPACK_IMPORTED_MODULE_1__.store.commit('App/commitOnline', false);
        }
        return null;
      }
      throw error;
    }
  }
}
(0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseService, "failedCounter", 0);

/***/ }),

/***/ "./src/services/config_service.ts":
/*!****************************************!*\
  !*** ./src/services/config_service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class ConfigService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Retrieve the client configuration from the server
   */
  async getConfig() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'data/config.json'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.config;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getVersion() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'data/version',
        authenticated: true
      });
      return response.text();
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new ConfigService());

/***/ }),

/***/ "./src/services/data_table_service.ts":
/*!********************************************!*\
  !*** ./src/services/data_table_service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateResult: function() { return /* binding */ CreateResult; },
/* harmony export */   DataTableService: function() { return /* binding */ DataTableService; },
/* harmony export */   DataTableServiceConfig: function() { return /* binding */ DataTableServiceConfig; },
/* harmony export */   DataTableServiceCreateRequest: function() { return /* binding */ DataTableServiceCreateRequest; },
/* harmony export */   DataTableServiceReadRequest: function() { return /* binding */ DataTableServiceReadRequest; },
/* harmony export */   DataTableServiceUpdateRequest: function() { return /* binding */ DataTableServiceUpdateRequest; },
/* harmony export */   DatatableServiceDeleteRequest: function() { return /* binding */ DatatableServiceDeleteRequest; },
/* harmony export */   DeleteResult: function() { return /* binding */ DeleteResult; },
/* harmony export */   FilterOption: function() { return /* binding */ FilterOption; },
/* harmony export */   ReadResult: function() { return /* binding */ ReadResult; },
/* harmony export */   SortOption: function() { return /* binding */ SortOption; },
/* harmony export */   UpdateResult: function() { return /* binding */ UpdateResult; },
/* harmony export */   Value: function() { return /* binding */ Value; },
/* harmony export */   createDataTableService: function() { return /* binding */ createDataTableService; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.reduce.js */ "./node_modules/core-js/modules/es.iterator.reduce.js");
/* harmony import */ var core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_error_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_error_map */ "./src/errors/datatable_error_map.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_server_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/server_error */ "./src/errors/server_error.ts");
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/is_file */ "./src/utils/is_file.ts");











function checkForResponseError(data, endpoint) {
  if (data.status === 'error') {
    throw new _pictaccio_admin_gui_errors_server_error__WEBPACK_IMPORTED_MODULE_7__.ServerError(`There was a server error${data.context ? `: ${data.context}` : ''}`);
  } else if (data.status === 'failed') {
    throw new _pictaccio_admin_gui_errors_datatable_error_map__WEBPACK_IMPORTED_MODULE_6__.datatableErrorMap[endpoint](`The ${endpoint} operation failed${data.context ? `: ${data.context}` : ''}`);
  }
}
function isUpdateRequest(request) {
  return request.filters !== undefined;
}
class CreateResult {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "createdId", void 0);
  }
}
class DeleteResult {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "status", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "affected", void 0);
  }
}
class ReadResult {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "results", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalResultCount", void 0);
  }
}
class UpdateResult {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "status", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "affected", void 0);
  }
}
class FilterOption {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "column", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "operator", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "operand", void 0);
  }
}
class SortOption {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "column", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "order", void 0);
  }
}
class Value {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "column", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "value", void 0);
  }
}
class DataTableServiceConfig {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "createEndpoint", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteEndpoint", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "readEndpoint", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "updateEndpoint", void 0);
  }
}
class DataTableServiceCreateRequest {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "values", void 0);
  }
}
class DatatableServiceDeleteRequest {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filters", void 0);
  }
}
class DataTableServiceReadRequest {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filters", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "from", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "size", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sort", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fields", void 0);
  }
}
class DataTableServiceUpdateRequest {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filters", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "values", void 0);
  }
}
class DataTableService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_8__["default"] {
  constructor(config) {
    super();
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_config", void 0);
    this._config = config;
  }
  async create(request) {
    try {
      const {
        formData,
        hasFiles
      } = this.createFormData(request);
      const response = await this.request({
        method: 'post',
        url: this._config.createEndpoint,
        authenticated: true,
        headers: {
          'Content-Type': hasFiles ? undefined : 'application/json'
        },
        data: hasFiles ? formData : {
          values: this.toValuesArray(request.values)
        }
      });
      const data = await response.json();
      checkForResponseError(data, 'create');
      return {
        createdId: data.createdId
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_9__.handleResponseError)(error);
      return null;
    }
  }
  async delete(request) {
    try {
      const response = await this.request({
        method: 'post',
        url: this._config.deleteEndpoint,
        authenticated: true,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          filters: request.filters
        }
      });
      const data = await response.json();
      checkForResponseError(data, 'delete');
      return {
        status: data.status,
        affected: data.affected
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_9__.handleResponseError)(error);
      return null;
    }
  }
  async read(request) {
    try {
      const response = await this.request({
        method: 'post',
        url: this._config.readEndpoint,
        authenticated: true,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          filters: request.filters,
          from: request.from,
          to: request.from + request.size,
          sort: request.sort,
          fields: request.fields
        }
      });
      const data = await response.json();
      checkForResponseError(data, 'read');
      return data.status === 'great-success' ? {
        results: data.results,
        totalResultCount: data.resultTotal
      } : null;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_9__.handleResponseError)(error);
      return null;
    }
  }
  async update(request) {
    try {
      const {
        formData,
        hasFiles
      } = this.createFormData(request);
      const response = await this.request({
        method: 'post',
        url: this._config.updateEndpoint,
        authenticated: true,
        headers: {
          'Content-Type': hasFiles ? undefined : 'application/json'
        },
        data: hasFiles ? formData : {
          filters: request.filters,
          values: this.toValuesArray(request.values)
        }
      });
      const data = await response.json();
      checkForResponseError(data, 'update');
      return {
        status: data.status,
        affected: data.status === 'great-success' ? data.affected : 0
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_9__.handleResponseError)(error);
      return null;
    }
  }
  /* PRIVATE */
  // TODO: set a proper return type
  extractFilesFromRequest(values) {
    let countFiles = 0;
    let countRequest = 0;
    return {
      files: Object.fromEntries([...Object.values(values).filter(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i) || Array.isArray(i) && i.some(f => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(f))).flat().filter(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i)).map(i => [`___DT_FILE___(${countFiles++})`, i]), ...Object.values(values).filter(i => !Array.isArray(i) && i !== null && typeof i === 'object' && Object.values(i).some(f => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(f))).reduce((files, value) => [...files, Object.values(value).filter(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i)).map(i => [`___DT_FILE___(${countFiles++})`, i])], []).flat()]),
      requestValues: Object.fromEntries([...Object.entries(values).map(([p, i]) => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i) ? [p, `___DT_FILE___(${countRequest++})`] : Array.isArray(i) && i.some(f => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(f)) ? [p, i.map(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i) ? `___DT_FILE___(${countRequest++})` : i).flat()] : [p, i]), ...Object.entries(values).filter(([p, i]) => !Array.isArray(i) && i !== null && typeof i === 'object' && !(0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i)).reduce((entries, [p, v]) => [...entries, [p, Object.fromEntries(Object.keys(v).map(p => [p, (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(v[p]) ? `___DT_FILE___(${countRequest++})` : v[p]]))]], [])])
    };
  }
  createFormData(request) {
    const formData = new FormData();
    const hasFiles = this.hasFiles(request.values);
    if (hasFiles) {
      const {
        files,
        requestValues
      } = this.extractFilesFromRequest(request.values);
      const formDataObject = {
        values: Object.entries(requestValues).map(([column, value]) => {
          return {
            column,
            value
          };
        }),
        filters: undefined
      };
      if (isUpdateRequest(request)) {
        formDataObject.filters = request.filters;
      }
      for (const [prop, value] of Object.entries(formDataObject)) {
        formData.append(prop, JSON.stringify(value));
      }
      for (const [fileRef, file] of Object.entries(files)) {
        formData.append(fileRef, file);
      }
    }
    return {
      formData,
      hasFiles
    };
  }
  hasFiles(item) {
    return Object.values(item).some(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i) || Array.isArray(i) && i.some(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i)) || typeof i === 'object' && Object.values(i).some(i => (0,_pictaccio_admin_gui_utils_is_file__WEBPACK_IMPORTED_MODULE_10__.isFile)(i)));
  }
  toValuesArray(values) {
    return Object.entries(values).filter(([column, _]) => !Object.keys(values).includes(column + '_json')).map(([column, value]) => ({
      column,
      value: column.endsWith('_json') && typeof value === 'object' ? JSON.stringify(value) : value
    }));
  }
}
function createDataTableService(config) {
  return new DataTableService(config);
}

/***/ }),

/***/ "./src/services/local_storage_service.ts":
/*!***********************************************!*\
  !*** ./src/services/local_storage_service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/user_local_storage_key */ "./src/core/user_local_storage_key.ts");

const USER_SCOPE = '__user-storage__';
class LocalStorageService {
  get(key, userScope = true) {
    const user = JSON.parse(localStorage.getItem(_core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_0__.USER_LOCAL_STORAGE_KEY) ?? '{}').user;
    if (!user && !user?.id && userScope) {
      return undefined;
    }
    return userScope ? (JSON.parse(localStorage.getItem(USER_SCOPE) ?? '{}')[user.id] ?? {})[key] ?? undefined : localStorage.getItem(key);
  }
  has(key, userScope = true) {
    return this.get(key, userScope) !== undefined;
  }
  removeCurrentUser() {
    localStorage.removeItem(_core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_0__.USER_LOCAL_STORAGE_KEY);
  }
  set(key, value, userScope = true) {
    const user = JSON.parse(localStorage.getItem(_core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_0__.USER_LOCAL_STORAGE_KEY) ?? '{}').user;
    const storage = JSON.parse(localStorage.getItem(USER_SCOPE) ?? '{}');
    if (userScope && !user && !user?.id) {
      throw new Error('Attempting to write to user scope but no user is logged in');
    }
    if (userScope) {
      storage[user.id] = Object.assign(storage[user.id] ?? {}, {
        [key]: value
      });
      localStorage.setItem(USER_SCOPE, JSON.stringify(storage));
    } else {
      localStorage.setItem(key, value);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new LocalStorageService());

/***/ }),

/***/ "./src/services/order_service.ts":
/*!***************************************!*\
  !*** ./src/services/order_service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class OrderService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async applyCheck(orderId, cartItemId, itemId, photoId, check) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/apply-check',
        data: {
          orderId,
          cartItemId,
          itemId,
          photoId,
          check
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return {
        orderId,
        cartItemId,
        itemId,
        photoId,
        check,
        success: true
      };
    } catch (error) {
      return {
        cartItemId,
        orderId,
        itemId,
        photoId,
        check,
        success: false
      };
    }
  }
  async assign(orderId, userId) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/assign',
        data: {
          orderId,
          userId
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async exportContacts(ids, lang, format) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/export-contacts',
        data: {
          ids,
          lang,
          format
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return new File([await response.blob()], response.headers.get('Content-Disposition').replace(/^attachment; filename=(.+)$/, '$1'), {
        type: response.headers.get('Content-Type')
      });
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getAssigned(orderId) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/get-assigned',
        data: {
          id: orderId
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.userId;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async generatePrintToken(orderIds) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/generate-print-token',
        data: {
          id: orderIds.join(',')
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.token;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getChecks(orderId) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/get-checks',
        data: {
          orderId
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return Promise.resolve(data.checks);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return [];
    }
  }
  async getStatus(id) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/get-status',
        data: {
          id
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.orderStatus ?? 'pending';
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getOrderInfo(id) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/get',
        data: {
          id
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return Promise.resolve(data.orders[0]);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async getPublishedPhotos(orderId) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'order/get-published-photos',
        data: {
          orderId
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return Promise.resolve(data.photos);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return [];
    }
  }
  async notifyCustomer(orderId) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/notify-customer',
        data: {
          orderId
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return {
        success: data.status === 'great-success',
        updateFound: data.updateFound
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return {
        success: false,
        updateFound: false
      };
    }
  }
  async publishPhotos(photos) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/publish-photos',
        data: {
          photos
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async setContactInfo(id, contactInfo) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/edit-contact',
        data: {
          id,
          ...contactInfo
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async unpublishPhotos(photos) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/unpublish-photos',
        data: {
          photos
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async setStatus(id, status) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'order/set-status',
        data: {
          id: typeof id === 'string' ? parseInt(id, 10) : id,
          status
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new OrderService());

/***/ }),

/***/ "./src/services/product_service.ts":
/*!*****************************************!*\
  !*** ./src/services/product_service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class ProductService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async getProductTags() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'product/tags/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.tags;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new ProductService());

/***/ }),

/***/ "./src/services/session_service.ts":
/*!*****************************************!*\
  !*** ./src/services/session_service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");
/* harmony import */ var _pictaccio_shared_utils_diacritics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/shared/utils/diacritics */ "./node_modules/@pictaccio/shared/dist/src/utils/diacritics.js");



class SessionService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async archive(sessionId) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/archive',
        data: {
          sessionId
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async save(info, options, productAndShippingGroups, subjects) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/create-session',
        data: {
          internalName: (0,_pictaccio_shared_utils_diacritics__WEBPACK_IMPORTED_MODULE_2__.removeDiacritics)(info.name),
          datePublish: info.datePublish,
          dateExpire: info.dateExpire,
          workflowId: info.workflow,
          options: {
            color: info.color,
            touchupsEnable: options.touchupsEnable,
            touchupsPrice: options.touchupsPrice,
            touchupsPriceIsScaling: options.touchupsPriceIsScaling,
            digitalEnable: options.digitalEnable,
            digitalAutoSendEnable: options.digitalAutoSendEnable,
            digitalGroupsEnable: options.digitalGroupsEnable,
            digitalGroupPrice: options.digitalGroupPrice,
            digitalPrice: options.digitalPrice,
            digitalGroupPriceIsScaling: options.digitalGroupPriceIsScaling,
            digitalPriceIsScaling: options.digitalPriceIsScaling,
            discountEnable: options.discountEnable,
            discountCatalogId: options.discountCatalogId,
            discountPrices: options.discountPrices,
            discountGroupPrices: options.discountGroupPrices
          },
          crosssellId: options.crosssellId,
          productCatalogs: productAndShippingGroups.productCatalogIds,
          deliveryGroups: productAndShippingGroups.deliveryGroupIds,
          subjects: subjects.subjects,
          mappings: subjects.mappings
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new SessionService());

/***/ }),

/***/ "./src/services/session_upload_service.ts":
/*!************************************************!*\
  !*** ./src/services/session_upload_service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");




class SessionUploadService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  async uploadGroup(sessionId, transfer, files) {
    const form = new FormData();
    let count = 0;
    form.append('sessionId', sessionId.toString());
    form.append('data', JSON.stringify(transfer));
    for (const file of files) {
      form.append(`image-${count++}`, file);
    }
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/group/upload',
        headers: {
          'Content-Type': undefined
        },
        data: form
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      return data.status === 'great-success';
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return false;
    }
  }
  async uploadSubject(sessionId, transfer, files) {
    const form = new FormData();
    let count = 0;
    form.append('sessionId', sessionId.toString());
    form.append('data', JSON.stringify(transfer));
    for (const file of files) {
      form.append(`image-${count++}`, file);
    }
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/subject/upload',
        headers: {
          'Content-Type': undefined
        },
        data: form
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      return data.status === 'great-success';
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return false;
    }
  }
  async verifySubjectCodes(subjectData) {
    const codes = subjectData.map(subject => subject.code);
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'subject-code/verify-codes',
        data: codes
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      return data.codesExist;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return [];
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new SessionUploadService());

/***/ }),

/***/ "./src/services/shipping_promo_service.ts":
/*!************************************************!*\
  !*** ./src/services/shipping_promo_service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");



class ShippingPromoService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async readShippingPromo() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'shipping-promo/read-shipping-promo'
      });
      const data = await response.json();
      if (data.status === 'failed' && data.context) {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)(data.context, 'warning');
      }
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.promo;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async updateShippingPromo(object) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'shipping-promo/update-shipping-promo',
        data: object
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new ShippingPromoService());

/***/ }),

/***/ "./src/services/store_config_service.ts":
/*!**********************************************!*\
  !*** ./src/services/store_config_service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");



class StoreConfigService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_1__["default"] {
  async load() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/get-config',
        authenticated: true
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return data.config;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return null;
    }
  }
  async getAvailableLanguages() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/get-available-languages'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return data.languages;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return null;
    }
  }
  async getStoreLanguages() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/get-languages'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return data.languages;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return null;
    }
  }
  async getStoreStatus() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/get-shutdown',
        authenticated: true
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return {
        shutdown: data.shutdown,
        message: data.message
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return null;
    }
  }
  async hasWatermark() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/has-watermark-image',
        authenticated: true
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return false;
    }
  }
  async isStoreConfigured() {
    try {
      const response = await this.request({
        method: 'get',
        url: 'store/is-configured',
        authenticated: true
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return {
        isReady: data.isReady,
        features: data.features
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return null;
    }
  }
  async save(config) {
    const localConfig = Object.assign({}, config);
    if ((0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(localConfig.address)) {
      localConfig.address = undefined;
    }
    if (localConfig.phones?.length === 0) {
      localConfig.phones = undefined;
    }
    try {
      const response = await this.request({
        method: 'post',
        url: 'store/set-config',
        authenticated: true,
        data: localConfig
      });
      const data = await response?.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return false;
    }
  }
  async saveWatermark(image) {
    const formData = new FormData();
    formData.append('watermark-image', image);
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'store/set-watermark-image',
        headers: {
          'Content-Type': undefined
        },
        data: formData
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return false;
    }
  }
  async setStoreLanguages(languages) {
    try {
      const response = await this.request({
        method: 'post',
        url: 'store/set-languages',
        authenticated: true,
        data: {
          languages
        }
      });
      const data = await response?.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return false;
    }
  }
  async setStoreStatus(status) {
    try {
      const response = await this.request({
        method: 'post',
        url: 'store/set-shutdown',
        authenticated: true,
        data: status
      });
      const data = await response?.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_2__.handleResponseError)(error);
      return false;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new StoreConfigService());

/***/ }),

/***/ "./src/services/store_customization_service.ts":
/*!*****************************************************!*\
  !*** ./src/services/store_customization_service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class StoreCustomizationService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async readColors() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'branding/colors/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.colors;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async readUrls() {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'branding/urls/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.content;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async saveColors(colors) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'branding/colors/edit',
        data: colors
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async saveLogo(image) {
    const formData = new FormData();
    formData.append('logo-image', image);
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'branding/logo/edit',
        headers: {
          'Content-Type': undefined
        },
        data: formData
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
  async saveUrls(urls) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'branding/urls/edit',
        data: {
          content: urls
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return true;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return false;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new StoreCustomizationService());

/***/ }),

/***/ "./src/services/subject_code_service.ts":
/*!**********************************************!*\
  !*** ./src/services/subject_code_service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class SubjectCodeService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async createBulkSubjectCodes(subjectCodeQuery) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: this.API_ENDPOINT + 'subject-code/generate',
        data: subjectCodeQuery
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.codes;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new SubjectCodeService());

/***/ }),

/***/ "./src/services/subject_groups_service.ts":
/*!************************************************!*\
  !*** ./src/services/subject_groups_service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class SubjectGroupsService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async addVersion(id, original, version) {
    const formData = new FormData();
    formData.append('itemId', id.toString());
    formData.append('original', original);
    formData.append('versionImage', version);
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/group/add-version',
        headers: {
          'Content-Type': undefined
        },
        data: formData
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
  }
  async removeVersion(id, original, version) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/group/remove-version',
        data: {
          itemId: id,
          original,
          version
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new SubjectGroupsService());

/***/ }),

/***/ "./src/services/subjects_service.ts":
/*!******************************************!*\
  !*** ./src/services/subjects_service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");



class SubjectsService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async addVersion(id, original, version) {
    const formData = new FormData();
    formData.append('itemId', id.toString());
    formData.append('original', original);
    formData.append('versionImage', version);
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/subject/add-version',
        headers: {
          'Content-Type': undefined
        },
        data: formData
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
  }
  async applyPhotoSwap(swapLog) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'subject/swap-photos',
        data: swapLog
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
    return null;
  }
  async removeVersion(id, original, version) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: this.API_ENDPOINT + 'photo-session/subject/remove-version',
        data: {
          itemId: id,
          original,
          version
        }
      });
      const data = await response.json();
      if (data.status === 'failed' && data.context) {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)(data.context, 'warning');
      }
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new SubjectsService());

/***/ }),

/***/ "./src/services/user_info_service.ts":
/*!*******************************************!*\
  !*** ./src/services/user_info_service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");



class UserInfoService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async changeUserName(name) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'user-info/username/edit',
        data: name
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (e) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_2__.globalToast)('UNKNOWN_ERROR', 'error');
    }
  }
  async readAvatar() {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'user-info/avatar/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.avatarPath;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async readUserName() {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'user-info/username/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.name;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
  async uploadAvatar(image) {
    const formData = new FormData();
    formData.append('content', image);
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'user-info/avatar/update',
        headers: {
          'Content-Type': undefined
        },
        data: formData
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new UserInfoService());

/***/ }),

/***/ "./src/services/user_service.ts":
/*!**************************************!*\
  !*** ./src/services/user_service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");




class UserService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_2__["default"] {
  async archiveUser(id, toggle) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'user/archive',
        data: {
          id,
          archive: toggle !== false
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
    }
  }
  async deleteUser(id) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'user/delete',
        data: {
          id
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
    }
  }
  async editUser(id, userInfo) {
    try {
      const response = await this.request({
        method: 'post',
        authenticated: true,
        url: 'user/edit',
        data: {
          id,
          info: userInfo
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
    }
  }
  async readUsersList(assignable) {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'user/list',
        data: {
          assignable
        }
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      return data.users?.map(user => ({
        ...user,
        createdOn: new Date(user.createdOn),
        lastLogin: user.lastLogin ? new Date(user.lastLogin) : false
      }));
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return null;
    }
  }
  async readUserPermissions() {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'user/permissions'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.checkForResponseError)(data);
      return {
        roles: data.roles,
        capabilities: data.capabilities
      };
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_3__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new UserService());

/***/ }),

/***/ "./src/services/user_sessions_service.ts":
/*!***********************************************!*\
  !*** ./src/services/user_sessions_service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/services/base_service */ "./src/services/base_service.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/error */ "./src/utils/error.ts");


class UserSessionsService extends _pictaccio_admin_gui_services_base_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  async readUserSessions() {
    try {
      const response = await this.request({
        method: 'get',
        authenticated: true,
        url: 'user-info/read'
      });
      const data = await response.json();
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.checkForResponseError)(data);
      return data.info;
    } catch (error) {
      (0,_pictaccio_admin_gui_utils_error__WEBPACK_IMPORTED_MODULE_1__.handleResponseError)(error);
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new UserSessionsService());

/***/ }),

/***/ "./src/store/apply_config.ts":
/*!***********************************!*\
  !*** ./src/store/apply_config.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");

vuex_module_decorators__WEBPACK_IMPORTED_MODULE_0__.config.rawError = true;

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _store_apply_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/apply_config */ "./src/store/apply_config.ts");
/* harmony import */ var _store_modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/modules/app */ "./src/store/modules/app.ts");
/* harmony import */ var _store_modules_app_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/modules/app_integration */ "./src/store/modules/app_integration.ts");
/* harmony import */ var _store_modules_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/modules/auth */ "./src/store/modules/auth.ts");
/* harmony import */ var _store_modules_background_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/modules/background_categories */ "./src/store/modules/background_categories.ts");
/* harmony import */ var _store_modules_backgrounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/modules/backgrounds */ "./src/store/modules/backgrounds.ts");
/* harmony import */ var _store_modules_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/modules/config */ "./src/store/modules/config.ts");
/* harmony import */ var _store_modules_cross_sells__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/modules/cross_sells */ "./src/store/modules/cross_sells.ts");
/* harmony import */ var _store_modules_crud_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/modules/crud_overlay */ "./src/store/modules/crud_overlay.ts");
/* harmony import */ var _store_modules_current_activity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/modules/current_activity */ "./src/store/modules/current_activity.ts");
/* harmony import */ var _store_modules_custom_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/modules/custom_products */ "./src/store/modules/custom_products.ts");
/* harmony import */ var _store_modules_form_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/modules/form_validator */ "./src/store/modules/form_validator.ts");
/* harmony import */ var _store_modules_global_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/modules/global_breadcrumb */ "./src/store/modules/global_breadcrumb.ts");
/* harmony import */ var _store_modules_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/modules/notifications */ "./src/store/modules/notifications.ts");
/* harmony import */ var _store_modules_orders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/modules/orders */ "./src/store/modules/orders.ts");
/* harmony import */ var _store_modules_product_catalogs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/modules/product_catalogs */ "./src/store/modules/product_catalogs.ts");
/* harmony import */ var _store_modules_product_categories__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/modules/product_categories */ "./src/store/modules/product_categories.ts");
/* harmony import */ var _store_modules_product_themes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/modules/product_themes */ "./src/store/modules/product_themes.ts");
/* harmony import */ var _store_modules_products__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/modules/products */ "./src/store/modules/products.ts");
/* harmony import */ var _store_modules_promo_code_campaigns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../store/modules/promo_code_campaigns */ "./src/store/modules/promo_code_campaigns.ts");
/* harmony import */ var _store_modules_promo_codes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../store/modules/promo_codes */ "./src/store/modules/promo_codes.ts");
/* harmony import */ var _store_modules_promo_free_shippings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../store/modules/promo_free_shippings */ "./src/store/modules/promo_free_shippings.ts");
/* harmony import */ var _store_modules_prompt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../store/modules/prompt */ "./src/store/modules/prompt.ts");
/* harmony import */ var _store_modules_readers_background_categories_reader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../store/modules/readers/background_categories_reader */ "./src/store/modules/readers/background_categories_reader.ts");
/* harmony import */ var _store_modules_readers_backgrounds_reader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../store/modules/readers/backgrounds_reader */ "./src/store/modules/readers/backgrounds_reader.ts");
/* harmony import */ var _store_modules_readers_cross_sells_reader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../store/modules/readers/cross_sells_reader */ "./src/store/modules/readers/cross_sells_reader.ts");
/* harmony import */ var _store_modules_readers_custom_products_reader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../store/modules/readers/custom_products_reader */ "./src/store/modules/readers/custom_products_reader.ts");
/* harmony import */ var _store_modules_readers_product_catalogs_reader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../store/modules/readers/product_catalogs_reader */ "./src/store/modules/readers/product_catalogs_reader.ts");
/* harmony import */ var _store_modules_readers_product_categories_reader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../store/modules/readers/product_categories_reader */ "./src/store/modules/readers/product_categories_reader.ts");
/* harmony import */ var _store_modules_readers_product_themes_reader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../store/modules/readers/product_themes_reader */ "./src/store/modules/readers/product_themes_reader.ts");
/* harmony import */ var _store_modules_readers_products_reader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../store/modules/readers/products_reader */ "./src/store/modules/readers/products_reader.ts");
/* harmony import */ var _store_modules_readers_promo_code_campaigns_reader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../store/modules/readers/promo_code_campaigns_reader */ "./src/store/modules/readers/promo_code_campaigns_reader.ts");
/* harmony import */ var _store_modules_readers_sessions_reader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../store/modules/readers/sessions_reader */ "./src/store/modules/readers/sessions_reader.ts");
/* harmony import */ var _store_modules_readers_shipping_groups_reader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../store/modules/readers/shipping_groups_reader */ "./src/store/modules/readers/shipping_groups_reader.ts");
/* harmony import */ var _store_modules_readers_shipping_methods_reader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../store/modules/readers/shipping_methods_reader */ "./src/store/modules/readers/shipping_methods_reader.ts");
/* harmony import */ var _store_modules_readers_shipping_options_reader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../store/modules/readers/shipping_options_reader */ "./src/store/modules/readers/shipping_options_reader.ts");
/* harmony import */ var _store_modules_readers_workflows_reader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../store/modules/readers/workflows_reader */ "./src/store/modules/readers/workflows_reader.ts");
/* harmony import */ var _store_modules_session_subject_data__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../store/modules/session_subject_data */ "./src/store/modules/session_subject_data.ts");
/* harmony import */ var _store_modules_sessions__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../store/modules/sessions */ "./src/store/modules/sessions.ts");
/* harmony import */ var _store_modules_shipping_groups__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../store/modules/shipping_groups */ "./src/store/modules/shipping_groups.ts");
/* harmony import */ var _store_modules_shipping_options__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../store/modules/shipping_options */ "./src/store/modules/shipping_options.ts");
/* harmony import */ var _store_modules_store_config__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../store/modules/store_config */ "./src/store/modules/store_config.ts");
/* harmony import */ var _store_modules_store_customization__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../store/modules/store_customization */ "./src/store/modules/store_customization.ts");
/* harmony import */ var _store_modules_store_status__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../store/modules/store_status */ "./src/store/modules/store_status.ts");
/* harmony import */ var _store_modules_subject_codes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../store/modules/subject_codes */ "./src/store/modules/subject_codes.ts");
/* harmony import */ var _store_modules_subject_groups__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../store/modules/subject_groups */ "./src/store/modules/subject_groups.ts");
/* harmony import */ var _store_modules_subjects__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../store/modules/subjects */ "./src/store/modules/subjects.ts");
/* harmony import */ var _store_modules_upload_status__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../store/modules/upload_status */ "./src/store/modules/upload_status.ts");
/* harmony import */ var _store_modules_user__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../store/modules/user */ "./src/store/modules/user.ts");
/* harmony import */ var _store_modules_user_info__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../store/modules/user_info */ "./src/store/modules/user_info.ts");
/* harmony import */ var _store_modules_user_preference__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../store/modules/user_preference */ "./src/store/modules/user_preference.ts");
/* harmony import */ var _store_modules_workflows__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../store/modules/workflows */ "./src/store/modules/workflows.ts");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");





















































const store = (0,vuex__WEBPACK_IMPORTED_MODULE_52__.createStore)({
  modules: {
    App: _store_modules_app__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppIntegration: _store_modules_app_integration__WEBPACK_IMPORTED_MODULE_2__["default"],
    Auth: _store_modules_auth__WEBPACK_IMPORTED_MODULE_3__["default"],
    BackgroundCategories: _store_modules_background_categories__WEBPACK_IMPORTED_MODULE_4__["default"],
    BackgroundCategoriesReader: _store_modules_readers_background_categories_reader__WEBPACK_IMPORTED_MODULE_23__["default"],
    Backgrounds: _store_modules_backgrounds__WEBPACK_IMPORTED_MODULE_5__["default"],
    BackgroundsReader: _store_modules_readers_backgrounds_reader__WEBPACK_IMPORTED_MODULE_24__["default"],
    Config: _store_modules_config__WEBPACK_IMPORTED_MODULE_6__["default"],
    Crosssells: _store_modules_cross_sells__WEBPACK_IMPORTED_MODULE_7__["default"],
    CrosssellsReader: _store_modules_readers_cross_sells_reader__WEBPACK_IMPORTED_MODULE_25__["default"],
    CrudOverlay: _store_modules_crud_overlay__WEBPACK_IMPORTED_MODULE_8__["default"],
    CurrentActivity: _store_modules_current_activity__WEBPACK_IMPORTED_MODULE_9__["default"],
    CustomProducts: _store_modules_custom_products__WEBPACK_IMPORTED_MODULE_10__["default"],
    CustomProductsReader: _store_modules_readers_custom_products_reader__WEBPACK_IMPORTED_MODULE_26__["default"],
    FormValidator: _store_modules_form_validator__WEBPACK_IMPORTED_MODULE_11__["default"],
    GlobalBreadcrumb: _store_modules_global_breadcrumb__WEBPACK_IMPORTED_MODULE_12__["default"],
    Notifications: _store_modules_notifications__WEBPACK_IMPORTED_MODULE_13__["default"],
    Orders: _store_modules_orders__WEBPACK_IMPORTED_MODULE_14__["default"],
    ProductCatalogs: _store_modules_product_catalogs__WEBPACK_IMPORTED_MODULE_15__["default"],
    ProductCatalogsReader: _store_modules_readers_product_catalogs_reader__WEBPACK_IMPORTED_MODULE_27__["default"],
    ProductCategories: _store_modules_product_categories__WEBPACK_IMPORTED_MODULE_16__["default"],
    ProductCategoriesReader: _store_modules_readers_product_categories_reader__WEBPACK_IMPORTED_MODULE_28__["default"],
    ProductThemes: _store_modules_product_themes__WEBPACK_IMPORTED_MODULE_17__["default"],
    ProductThemesReader: _store_modules_readers_product_themes_reader__WEBPACK_IMPORTED_MODULE_29__["default"],
    Products: _store_modules_products__WEBPACK_IMPORTED_MODULE_18__["default"],
    ProductsReader: _store_modules_readers_products_reader__WEBPACK_IMPORTED_MODULE_30__["default"],
    PromoCodeCampaigns: _store_modules_promo_code_campaigns__WEBPACK_IMPORTED_MODULE_19__["default"],
    PromoCodeCampaignsReader: _store_modules_readers_promo_code_campaigns_reader__WEBPACK_IMPORTED_MODULE_31__["default"],
    PromoCodes: _store_modules_promo_codes__WEBPACK_IMPORTED_MODULE_20__["default"],
    Prompt: _store_modules_prompt__WEBPACK_IMPORTED_MODULE_22__["default"],
    SessionSubjectData: _store_modules_session_subject_data__WEBPACK_IMPORTED_MODULE_37__["default"],
    Sessions: _store_modules_sessions__WEBPACK_IMPORTED_MODULE_38__["default"],
    SessionsReader: _store_modules_readers_sessions_reader__WEBPACK_IMPORTED_MODULE_32__["default"],
    ShippingGroups: _store_modules_shipping_groups__WEBPACK_IMPORTED_MODULE_39__["default"],
    ShippingGroupsReader: _store_modules_readers_shipping_groups_reader__WEBPACK_IMPORTED_MODULE_33__["default"],
    ShippingMethodsReader: _store_modules_readers_shipping_methods_reader__WEBPACK_IMPORTED_MODULE_34__["default"],
    ShippingOptions: _store_modules_shipping_options__WEBPACK_IMPORTED_MODULE_40__["default"],
    ShippingOptionsReader: _store_modules_readers_shipping_options_reader__WEBPACK_IMPORTED_MODULE_35__["default"],
    ShippingPromo: _store_modules_promo_free_shippings__WEBPACK_IMPORTED_MODULE_21__["default"],
    StoreConfig: _store_modules_store_config__WEBPACK_IMPORTED_MODULE_41__["default"],
    StoreCustomization: _store_modules_store_customization__WEBPACK_IMPORTED_MODULE_42__["default"],
    StoreStatus: _store_modules_store_status__WEBPACK_IMPORTED_MODULE_43__["default"],
    SubjectCodes: _store_modules_subject_codes__WEBPACK_IMPORTED_MODULE_44__["default"],
    SubjectGroups: _store_modules_subject_groups__WEBPACK_IMPORTED_MODULE_45__["default"],
    Subjects: _store_modules_subjects__WEBPACK_IMPORTED_MODULE_46__["default"],
    UploadStatus: _store_modules_upload_status__WEBPACK_IMPORTED_MODULE_47__["default"],
    User: _store_modules_user__WEBPACK_IMPORTED_MODULE_48__["default"],
    UserInfo: _store_modules_user_info__WEBPACK_IMPORTED_MODULE_49__["default"],
    UserPreference: _store_modules_user_preference__WEBPACK_IMPORTED_MODULE_50__["default"],
    Workflows: _store_modules_workflows__WEBPACK_IMPORTED_MODULE_51__["default"],
    WorkflowsReader: _store_modules_readers_workflows_reader__WEBPACK_IMPORTED_MODULE_36__["default"]
  }
});

/***/ }),

/***/ "./src/store/modules/app.ts":
/*!**********************************!*\
  !*** ./src/store/modules/app.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");



let App = class App extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalAuthenticated", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalLoading", true);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalContentVisibility", true);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalLogoutReason", null);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalOnline", true);
  }
  get loading() {
    return this.internalLoading;
  }
  get contentVisibility() {
    return this.internalContentVisibility;
  }
  get authenticated() {
    return this.internalAuthenticated;
  }
  get logoutReason() {
    return this.internalLogoutReason;
  }
  get online() {
    return this.internalOnline;
  }
  commitAuthenticated(authenticated) {
    this.internalAuthenticated = authenticated;
  }
  commitLoading(loading) {
    this.internalLoading = loading;
  }
  commitContentVisibility(isVisible) {
    this.internalContentVisibility = isVisible;
  }
  commitLogoutReason(reason) {
    this.internalLogoutReason = reason;
  }
  commitOnline(online) {
    this.internalOnline = online;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], App.prototype, "commitAuthenticated", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], App.prototype, "commitLoading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], App.prototype, "commitContentVisibility", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], App.prototype, "commitLogoutReason", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], App.prototype, "commitOnline", null);
App = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], App);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/store/modules/app_integration.ts":
/*!**********************************************!*\
  !*** ./src/store/modules/app_integration.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_shared_types_app_integration_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/shared/types/app_integration_app */ "./node_modules/@pictaccio/shared/dist/src/types/app_integration_app.js");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _errors_save_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/save_error */ "./src/errors/save_error.ts");
/* harmony import */ var _errors_load_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/load_error */ "./src/errors/load_error.ts");
/* harmony import */ var _services_app_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/app_integration_service */ "./src/services/app_integration_service.ts");









let AppIntegration = class AppIntegration extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "uncommittedConfig", {});
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "runningConfig", {});
  }
  get appIntegrations() {
    return this.runningConfig;
  }
  commit(response) {
    this.runningConfig = Object.assign(this.runningConfig, response ?? this.uncommittedConfig);
  }
  async commitAppIntegrations() {
    const appIntegrationResponse = await _services_app_integration_service__WEBPACK_IMPORTED_MODULE_8__["default"].save(this.uncommittedConfig);
    if (appIntegrationResponse !== null) {
      this.context.commit('commit', appIntegrationResponse);
    } else {
      throw new _errors_save_error__WEBPACK_IMPORTED_MODULE_6__.SaveError('Unable to save app integrations');
    }
  }
  create() {
    this.uncommittedConfig = {};
  }
  createAppIntegrations() {
    // Empty
  }
  load(appIntegrations) {
    this.runningConfig = appIntegrations;
  }
  async loadAppIntegrations() {
    const appIntegrations = await _services_app_integration_service__WEBPACK_IMPORTED_MODULE_8__["default"].load();
    if (!appIntegrations) {
      throw new _errors_load_error__WEBPACK_IMPORTED_MODULE_7__.LoadError('Unable to load app integrations');
    }
    return appIntegrations;
  }
  set(appIntegrations) {
    this.uncommittedConfig = Object.assign({}, this.uncommittedConfig, Object.fromEntries(Object.entries(appIntegrations).filter(([_, config]) => config !== undefined)));
  }
  async setAppIntegration({
    app,
    configuration
  }) {
    const appIntegrations = {
      [app]: configuration
    };
    if (!_pictaccio_shared_types_app_integration_app__WEBPACK_IMPORTED_MODULE_4__.AppIntegrationApps.includes(app)) {
      throw new Error(`Invalid store-config key '${app}'`);
    }
    return appIntegrations;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], AppIntegration.prototype, "commit", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action], AppIntegration.prototype, "commitAppIntegrations", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], AppIntegration.prototype, "create", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'create'
})], AppIntegration.prototype, "createAppIntegrations", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], AppIntegration.prototype, "load", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'load'
})], AppIntegration.prototype, "loadAppIntegrations", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], AppIntegration.prototype, "set", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'set'
})], AppIntegration.prototype, "setAppIntegration", null);
AppIntegration = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Module)({
  namespaced: true
})], AppIntegration);
/* harmony default export */ __webpack_exports__["default"] = (AppIntegration);

/***/ }),

/***/ "./src/store/modules/auth.ts":
/*!***********************************!*\
  !*** ./src/store/modules/auth.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/core/user_local_storage_key */ "./src/core/user_local_storage_key.ts");
/* harmony import */ var _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/auth_service */ "./src/services/auth_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/services/local_storage_service */ "./src/services/local_storage_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/store */ "./src/store/index.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");








let Auth = class Auth extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.VuexModule {
  /**
   * Reconfigure BaseService's authToken if available
   * @param module
   */
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "resetToken", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "status", JSON.parse(_pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["default"].get(_pictaccio_admin_gui_core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_2__.USER_LOCAL_STORAGE_KEY, false)) || {
      loggedIn: undefined,
      user: undefined
    });
  }
  get authToken() {
    return this.status?.user?.authorizationToken;
  }
  get isLoggedIn() {
    return this.status?.loggedIn;
  }
  get user() {
    return this.status?.user;
  }
  // Never used?
  async changePassword(secret) {
    await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].changePassword(secret);
  }
  // Never used?
  async createAccount(data) {
    return await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].createAccount(data.email, data.secret, data.roles);
  }
  async completeInvite(data) {
    return await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].completeInvite(data.inviteToken, data.email, data.secret);
  }
  async completePasswordReset(data) {
    if (!this.resetToken) {
      throw new Error('Runtime error: completePasswordReset called but reset token not set');
    }
    return await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].completePasswordReset(data.email, data.code, this.resetToken, data.secret);
  }
  async finishInvite(data) {
    await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].finishInvite(data.email, data.inviteToken);
  }
  async resetAuthenticator() {
    const response = await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].resetAuthenticator();
    if (!response) {
      return null;
    }
    if (response.status === 'failed' && response.context) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_6__.globalToast)(response.context, 'warning');
    }
    return response.status === 'great-success' ? response.uri : null;
  }
  async confirmResetAuthenticator() {
    await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].confirmResetAuthenticator();
  }
  loginResult(user) {
    _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_5__.store.commit('UserPreference/commitReload');
    this.status.loggedIn = user !== null;
    this.status.user = user;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["default"].set(_pictaccio_admin_gui_core_user_local_storage_key__WEBPACK_IMPORTED_MODULE_2__.USER_LOCAL_STORAGE_KEY, JSON.stringify(this.status), false);
  }
  saveInvitee(user) {
    this.status.loggedIn = false;
    this.status.user = user;
  }
  logoutResult() {
    this.status.loggedIn = false;
    this.status.user = null;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["default"].removeCurrentUser();
  }
  async initiateInvite(data) {
    await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].initiateInvite(data.name, data.email, data.roles);
  }
  async initiatePasswordReset(data) {
    await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].initiatePasswordReset(data.email);
  }
  async login(data) {
    const response = await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].login(data.email, data.secret, data.authenticatorToken);
    if (!response) {
      return false;
    }
    if (response.status === 'failed' && response.context) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_6__.globalToast)(response.context, 'warning');
    }
    const user = response.status === 'great-success' ? {
      id: response.id,
      email: data.email,
      authorizationToken: response.token
    } : null;
    this.context.commit('loginResult', user);
    return user !== null;
  }
  logout() {
    this.context.commit('logoutResult');
  }
  saveResetToken(resetToken) {
    this.resetToken = resetToken;
  }
  async validateAuthenticator(data) {
    const response = await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].validateAuthenticator(data.email, data.authenticatorToken);
    if (!response) {
      return false;
    }
    if (response.status === 'failed' && response.context) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_6__.globalToast)(response.context, 'warning');
    }
    return response.status === 'great-success';
  }
  async validateInviteToken(data) {
    const response = await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].validateInviteToken(data);
    this.context.commit('saveInvitee', response.user);
    return response.valid;
  }
  async validatePassword(secret) {
    const response = await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].validatePassword(secret);
    if (!response) {
      return false;
    }
    if (response.status === 'failed' && response.context) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_6__.globalToast)(response.context, 'warning');
    }
    return response.status === 'great-success' ? response.valid : false;
  }
  async validatePasswordResetCode(data) {
    const response = await _pictaccio_admin_gui_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].validatePasswordResetCode(data.email, data.code);
    if (!response) {
      return false;
    }
    if (response.status === 'failed' && response.context) {
      (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_6__.globalToast)(response.context, 'warning');
    }
    this.context.commit('saveResetToken', response.resetToken);
    return response.status === 'great-success';
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "changePassword", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "createAccount", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "completeInvite", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "completePasswordReset", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "finishInvite", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "resetAuthenticator", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "confirmResetAuthenticator", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Auth.prototype, "loginResult", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Auth.prototype, "saveInvitee", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Auth.prototype, "logoutResult", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "initiateInvite", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "initiatePasswordReset", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "login", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "logout", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Auth.prototype, "saveResetToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "validateAuthenticator", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "validateInviteToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "validatePassword", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], Auth.prototype, "validatePasswordResetCode", null);
Auth = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Module)({
  namespaced: true
})], Auth);
/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./src/store/modules/background_categories.ts":
/*!****************************************************!*\
  !*** ./src/store/modules/background_categories.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let BackgroundCategories = class BackgroundCategories extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'background/categories/create',
      deleteEndpoint: 'background/categories/delete',
      readEndpoint: 'background/categories/read',
      updateEndpoint: 'background/categories/update'
    });
  }
};
BackgroundCategories = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], BackgroundCategories);
/* harmony default export */ __webpack_exports__["default"] = (BackgroundCategories);

/***/ }),

/***/ "./src/store/modules/backgrounds.ts":
/*!******************************************!*\
  !*** ./src/store/modules/backgrounds.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let Backgrounds = class Backgrounds extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'background/create',
      deleteEndpoint: 'background/delete',
      readEndpoint: 'background/read',
      updateEndpoint: 'background/update'
    });
  }
};
Backgrounds = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], Backgrounds);
/* harmony default export */ __webpack_exports__["default"] = (Backgrounds);

/***/ }),

/***/ "./src/store/modules/base_data_table.ts":
/*!**********************************************!*\
  !*** ./src/store/modules/base_data_table.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddResult: function() { return /* binding */ AddResult; },
/* harmony export */   BaseDataTable: function() { return /* binding */ BaseDataTable; },
/* harmony export */   CommitDelete: function() { return /* binding */ CommitDelete; },
/* harmony export */   CommitUpdate: function() { return /* binding */ CommitUpdate; },
/* harmony export */   Page: function() { return /* binding */ Page; },
/* harmony export */   Range: function() { return /* binding */ Range; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");






function findHoles(internalItems, from, size) {
  const holes = [];
  let inHole = false;
  let holeStart;
  for (let i = from, to = from + size; i <= to; ++i) {
    if (inHole) {
      if (Object.prototype.hasOwnProperty.call(internalItems, i) || i === to || i === to && i >= internalItems.length) {
        inHole = false;
        holes.push({
          start: holeStart,
          end: i
        });
      }
    } else {
      if (!Object.prototype.hasOwnProperty.call(internalItems, i)) {
        holeStart = i;
        inHole = true;
      }
    }
  }
  return holes;
}
function requestHoles(service, internalItems, filters, sort, from, size) {
  const promises = [];
  const holes = findHoles(internalItems, from, size);
  for (const hole of holes) {
    promises.push(service.read({
      filters,
      from: hole.start,
      size: hole.end - hole.start,
      sort
    }));
  }
  return {
    holes,
    promises
  };
}
class Range {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "start", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "end", void 0);
  }
}
class Page {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "from", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "items", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "size", void 0);
  }
}
class AddResult {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "createdId", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "item", void 0);
  }
}
class CommitDelete {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "affected", void 0);
  }
}
class CommitPage {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalResultCount", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pages", void 0);
  }
}
class CommitUpdate {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "affected", void 0);
  }
}
class BaseDataTable extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filters", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalItems", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalItemsCount", 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalSelection", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sort", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clearInternalItems", false);
  }
  set dataTableService(service) {
    this.service = service;
  }
  get items() {
    return this.internalItems;
  }
  get itemsCount() {
    return this.internalItemsCount;
  }
  get selection() {
    return this.internalSelection;
  }
  get filtersValue() {
    return this.filters;
  }
  get sortOptions() {
    return this.sort;
  }
  async add({
    item
  }) {
    const result = await this.service.create({
      values: item
    });
    return {
      createdId: result.createdId,
      item
    };
  }
  commitAdd(result) {
    if (result.item.id === undefined) {
      result.item.id = result.createdId;
    }
    // this.internalItems.push(result.item);
  }
  commitSelectAll(ids) {
    this.internalSelection = ids;
  }
  commitSelectAddId(id) {
    if (!this.internalSelection.includes(id)) {
      const index = this.internalItems.map(i => i.id.toString()).indexOf(id.toString());
      this.internalSelection[index] = id;
    }
  }
  commitSelectNone() {
    this.internalSelection = [];
  }
  commitSelectRemoveId(id) {
    const index = this.internalSelection.indexOf(id);
    if (index !== -1) {
      this.internalSelection.splice(index, 1);
    }
  }
  commitClearInternalItems() {
    this.internalItems = [];
    this.clearInternalItems = false;
  }
  commitClearInternalItemsNext() {
    this.clearInternalItems = true;
  }
  commitDelete(commit) {
    // Nothing
  }
  commitFilters(filters) {
    this.filters = filters;
    this.clearInternalItems = true;
  }
  commitInvalidation(range) {
    this.internalItems.splice(range.start, range.end - range.start);
  }
  commitSort(sort) {
    this.sort = sort;
    this.clearInternalItems = true;
  }
  commitReSortSelection() {
    const newSelection = [];
    for (const item of this.internalItems) {
      if (this.internalSelection.includes(item.id)) {
        newSelection.push(item.id);
      }
    }
    this.internalSelection = newSelection;
  }
  commitPages(commitPages) {
    this.internalItemsCount = commitPages.totalResultCount;
    for (const page of commitPages.pages) {
      let i = page.from;
      if (page.items) {
        for (const item of page.items) {
          this.internalItems[i++] = item;
        }
      }
    }
  }
  commitUpdate(commit) {
    // Do nothing
  }
  async delete({
    filters
  }) {
    const result = await this.service.delete({
      filters
    });
    return {
      affected: result.affected
    };
  }
  async getPage({
    from,
    size
  }) {
    const {
      holes,
      promises
    } = requestHoles(this.service, this.clearInternalItems ? [] : this.internalItems, this.filters, this.sort, from, size);
    const results = await Promise.all(promises);
    const pages = [];
    if (this.clearInternalItems) {
      this.context.commit('commitClearInternalItems');
    }
    for (let i = 0, length = holes.length; i < length; ++i) {
      if (results[i]) {
        pages.push({
          from: holes[i].start,
          items: results[i].results,
          size
        });
      }
    }
    this.context.commit('commitPages', {
      totalResultCount: results[0]?.totalResultCount,
      pages
    });
    this.context.commit('commitReSortSelection');
  }
  invalidateRange({
    start,
    end
  }) {
    end = end || this.internalItems.length;
    return {
      start,
      end
    };
  }
  async query(filters) {
    return (await this.service.read({
      filters,
      sort: [{
        column: 'id',
        order: 'ASC'
      }]
    })).results;
  }
  async selectAll() {
    try {
      const response = await this.service.read({
        filters: this.filters,
        sort: this.sort,
        fields: ['id']
      });
      return response.results.map(item => item.id);
    } catch (error) {
      return [];
    }
  }
  selectAddId(id) {
    return id;
  }
  async selectNone() {
    // Pass
  }
  selectRemoveId(id) {
    return id;
  }
  setFilter(filters) {
    return filters;
  }
  setSort(sort) {
    return sort;
  }
  async update({
    filters,
    values
  }) {
    const result = await this.service.update({
      filters,
      values
    });
    return {
      affected: result.affected
    };
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitAdd'
})], BaseDataTable.prototype, "add", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitAdd", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitSelectAll", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitSelectAddId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitSelectNone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitSelectRemoveId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitClearInternalItems", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitClearInternalItemsNext", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitDelete", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitFilters", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitInvalidation", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitSort", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitReSortSelection", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitPages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], BaseDataTable.prototype, "commitUpdate", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitDelete'
})], BaseDataTable.prototype, "delete", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action], BaseDataTable.prototype, "getPage", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitInvalidation'
})], BaseDataTable.prototype, "invalidateRange", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action], BaseDataTable.prototype, "query", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSelectAll'
})], BaseDataTable.prototype, "selectAll", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSelectAddId'
})], BaseDataTable.prototype, "selectAddId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSelectNone'
})], BaseDataTable.prototype, "selectNone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSelectRemoveId'
})], BaseDataTable.prototype, "selectRemoveId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitFilters'
})], BaseDataTable.prototype, "setFilter", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSort'
})], BaseDataTable.prototype, "setSort", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitUpdate'
})], BaseDataTable.prototype, "update", null);

/***/ }),

/***/ "./src/store/modules/config.ts":
/*!*************************************!*\
  !*** ./src/store/modules/config.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/config_service */ "./src/services/config_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/local_storage_service */ "./src/services/local_storage_service.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");





let Config = class Config extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clientConfig", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiVersionInternal", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalUserLang", _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["default"].get('locale', false) ?? 'en');
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "viewMoreNavigation", _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["default"].get('viewMore', true) === 'true');
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shortNavigation", _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["default"].get('shortNavigation', true) === 'true');
  }
  get config() {
    return this.clientConfig;
  }
  get apiVersion() {
    return this.apiVersionInternal;
  }
  get userLang() {
    return this.internalUserLang;
  }
  get shortNav() {
    return this.shortNavigation;
  }
  get viewMore() {
    return this.viewMoreNavigation;
  }
  commitConfig(config) {
    this.clientConfig = config;
  }
  commitVersion(version) {
    this.apiVersionInternal = version;
  }
  commitUserLang(lang) {
    this.internalUserLang = lang;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["default"].set('locale', lang, false);
  }
  commitShortNav(shortNav) {
    this.shortNavigation = shortNav;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["default"].set('shortNavigation', shortNav.toString(), true);
  }
  commitViewMore(viewMore) {
    this.viewMoreNavigation = viewMore;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["default"].set('viewMore', viewMore.toString(), true);
  }
  async retrieveConfig() {
    return await _pictaccio_admin_gui_services_config_service__WEBPACK_IMPORTED_MODULE_2__["default"].getConfig();
  }
  async retrieveVersion() {
    return await _pictaccio_admin_gui_services_config_service__WEBPACK_IMPORTED_MODULE_2__["default"].getVersion();
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], Config.prototype, "commitConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], Config.prototype, "commitVersion", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], Config.prototype, "commitUserLang", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], Config.prototype, "commitShortNav", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], Config.prototype, "commitViewMore", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitConfig'
})], Config.prototype, "retrieveConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitVersion'
})], Config.prototype, "retrieveVersion", null);
Config = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], Config);
/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./src/store/modules/cross_sells.ts":
/*!******************************************!*\
  !*** ./src/store/modules/cross_sells.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let Crosssells = class Crosssells extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'product/cross-sell/create',
      deleteEndpoint: 'product/cross-sell/delete',
      readEndpoint: 'product/cross-sell/read',
      updateEndpoint: 'product/cross-sell/update'
    });
  }
};
Crosssells = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], Crosssells);
/* harmony default export */ __webpack_exports__["default"] = (Crosssells);

/***/ }),

/***/ "./src/store/modules/crud_overlay.ts":
/*!*******************************************!*\
  !*** ./src/store/modules/crud_overlay.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");




let CrudOverlay = class CrudOverlay extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalDirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirtyElement", []);
  }
  get dirty() {
    return this.internalDirty;
  }
  commitDirty(value) {
    this.internalDirty = value;
    if (!value) {
      this.dirtyElement = [];
    }
  }
  async makeDirty(element) {
    if (!this.dirtyElement.includes(element)) {
      this.dirtyElement.push(element);
    }
    this.context.commit('commitDirty', true);
  }
  async removeDirty(options) {
    if (options.element && this.dirtyElement.includes(options.element)) {
      const index = this.dirtyElement.indexOf(options.element);
      this.dirtyElement.splice(index, 1);
    }
    if (!this.dirtyElement || options.force) {
      this.context.commit('commitDirty', false);
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], CrudOverlay.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action], CrudOverlay.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action], CrudOverlay.prototype, "removeDirty", null);
CrudOverlay = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Module)({
  namespaced: true
})], CrudOverlay);
/* harmony default export */ __webpack_exports__["default"] = (CrudOverlay);

/***/ }),

/***/ "./src/store/modules/current_activity.ts":
/*!***********************************************!*\
  !*** ./src/store/modules/current_activity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");



let CurrentActivity = class CurrentActivity extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalCurrentActivity", void 0);
  }
  get currentActivity() {
    return this.internalCurrentActivity;
  }
  async setCurrentActivity(activity) {
    this.context.commit('commitCurrentActivity', activity);
  }
  commitCurrentActivity(activity) {
    this.internalCurrentActivity = activity;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], CurrentActivity.prototype, "setCurrentActivity", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], CurrentActivity.prototype, "commitCurrentActivity", null);
CurrentActivity = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], CurrentActivity);
/* harmony default export */ __webpack_exports__["default"] = (CurrentActivity);

/***/ }),

/***/ "./src/store/modules/custom_products.ts":
/*!**********************************************!*\
  !*** ./src/store/modules/custom_products.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let CustomProducts = class CustomProducts extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'product/customProduct/create',
      deleteEndpoint: 'product/customProduct/delete',
      readEndpoint: 'product/customProduct/read',
      updateEndpoint: 'product/customProduct/update'
    });
  }
};
CustomProducts = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], CustomProducts);
/* harmony default export */ __webpack_exports__["default"] = (CustomProducts);

/***/ }),

/***/ "./src/store/modules/form_validator.ts":
/*!*********************************************!*\
  !*** ./src/store/modules/form_validator.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.every.js */ "./node_modules/core-js/modules/es.iterator.every.js");
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_prompt */ "./src/utils/global_prompt.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");








class FormValidatorItem {
  constructor() {
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "requiredField", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "emptyFields", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isValidated", true);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "forValidatorName", void 0);
  }
}
let FormValidator = class FormValidator extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalRequiredField", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalEmptyFields", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalIsValidated", true);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalPrompt", {
      title: '',
      message: ''
    });
  }
  get emptyFields() {
    return this.internalEmptyFields;
  }
  get isValidated() {
    return this.internalIsValidated;
  }
  commitRequiredField(value) {
    this.internalRequiredField = value;
  }
  commitInternalEmptyFields(value) {
    this.internalEmptyFields = value;
  }
  commitInternalPrompt(value) {
    this.internalPrompt.title = value.title;
    this.internalPrompt.message = value.message;
  }
  commitIsValidated(value) {
    this.internalIsValidated = value;
  }
  async indexRequiredFields(requiredField) {
    if (!requiredField) {
      this.context.commit('commitIsValidated', true);
    }
    this.context.commit('commitRequiredField', requiredField);
  }
  async setInternalPrompt(value) {
    this.context.commit('commitInternalPrompt', value);
  }
  async validateRequiredFields(formValues) {
    const emptyFields = [];
    for (const requiredField of this.internalRequiredField) {
      if (!formValues[requiredField] || typeof formValues[requiredField] === 'string' && formValues[requiredField].trim() === '' || Array.isArray(formValues[requiredField]) && (!formValues[requiredField].every(i => typeof i === 'string') || formValues[requiredField].some(i => i.trim() === '')) && !formValues[requiredField].every(i => typeof i === 'number')) {
        emptyFields.push(requiredField);
      }
    }
    if (emptyFields.length > 0) {
      this.context.commit('commitIsValidated', false);
      this.context.commit('commitInternalEmptyFields', emptyFields);
      await (0,_pictaccio_admin_gui_utils_global_prompt__WEBPACK_IMPORTED_MODULE_6__.globalPrompt)({
        buttonType: 'ok',
        icon: ['', ''],
        message: this.internalPrompt.message,
        title: this.internalPrompt.title
      });
    } else {
      this.context.commit('commitIsValidated', true);
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], FormValidator.prototype, "commitRequiredField", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], FormValidator.prototype, "commitInternalEmptyFields", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], FormValidator.prototype, "commitInternalPrompt", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], FormValidator.prototype, "commitIsValidated", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], FormValidator.prototype, "indexRequiredFields", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], FormValidator.prototype, "setInternalPrompt", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action], FormValidator.prototype, "validateRequiredFields", null);
FormValidator = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Module)({
  namespaced: true
})], FormValidator);
/* harmony default export */ __webpack_exports__["default"] = (FormValidator);

/***/ }),

/***/ "./src/store/modules/global_breadcrumb.ts":
/*!************************************************!*\
  !*** ./src/store/modules/global_breadcrumb.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");




let GlobalBreadcrumb = class GlobalBreadcrumb extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalBreadcrumb", []);
  }
  get breadcrumbs() {
    return this.internalBreadcrumb;
  }
  clearBreadcrumb() {
    this.internalBreadcrumb = [];
  }
  pushBreadcrumb(breadcrumb) {
    this.internalBreadcrumb.push(breadcrumb);
  }
  popBreadcrumb() {
    this.internalBreadcrumb.pop();
  }
  updateBreadcrumb(breadcrumb) {
    const index = this.internalBreadcrumb.findIndex(item => item.id === breadcrumb.id);
    if (index === -1) {
      throw new Error(`Breadcrumb with id ${breadcrumb.id} not found`);
    }
    this.internalBreadcrumb[index] = breadcrumb;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], GlobalBreadcrumb.prototype, "clearBreadcrumb", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], GlobalBreadcrumb.prototype, "pushBreadcrumb", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], GlobalBreadcrumb.prototype, "popBreadcrumb", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], GlobalBreadcrumb.prototype, "updateBreadcrumb", null);
GlobalBreadcrumb = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Module)({
  namespaced: true
})], GlobalBreadcrumb);
/* harmony default export */ __webpack_exports__["default"] = (GlobalBreadcrumb);

/***/ }),

/***/ "./src/store/modules/notifications.ts":
/*!********************************************!*\
  !*** ./src/store/modules/notifications.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");




let Notifications = class Notifications extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalNotifications", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalOpenedNotification", false);
  }
  get notifications() {
    return this.internalNotifications;
  }
  get openedNotification() {
    return this.internalOpenedNotification;
  }
  addNotification(item) {
    this.internalNotifications.push(item);
  }
  commitOpenNotification(opened) {
    this.internalOpenedNotification = opened;
  }
  async openNotification(opened = true) {
    return opened;
  }
  async pushNotification(item) {
    return item;
  }
  removeNotification(item) {
    this.internalNotifications.splice(this.internalNotifications.findIndex(i => i === item), 1);
  }
  async unpushNotification(item) {
    return item;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], Notifications.prototype, "addNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], Notifications.prototype, "commitOpenNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'commitOpenNotification'
})], Notifications.prototype, "openNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'addNotification'
})], Notifications.prototype, "pushNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], Notifications.prototype, "removeNotification", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'removeNotification'
})], Notifications.prototype, "unpushNotification", null);
Notifications = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Module)({
  namespaced: true
})], Notifications);
/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/store/modules/orders.ts":
/*!*************************************!*\
  !*** ./src/store/modules/orders.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/order_service */ "./src/services/order_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");








let Orders = class Orders extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_6__.BaseDataTable {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalChecks", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalOrderTemplate", {
      cartItems: [],
      comment: '',
      contact: {
        city: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        postalCode: '',
        region: '',
        streetAddress1: '',
        streetAddress2: '',
        country: '',
        newsletter: null
      },
      id: 0,
      photos: {},
      photoVersions: {},
      deliveryOption: {
        id: '1',
        internalName: '',
        nameLocale: {
          en: '',
          fr: ''
        },
        basePrice: '0',
        leadTime: 0,
        method: 'fixed-rate',
        options: null
      },
      subjects: [],
      subjectGroups: [],
      transaction: {
        subtotal: '0',
        promo: '0',
        shipping: '0',
        taxes: null,
        total: '0',
        transactions: []
      },
      orderStatus: 'pending'
    });
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalOrder", this.internalOrderTemplate);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_4__.createDataTableService)({
      readEndpoint: 'order/read',
      updateEndpoint: 'order/update'
    });
  }
  get cartItems() {
    return this.internalOrder.cartItems;
  }
  get checks() {
    return this.internalChecks;
  }
  get order() {
    return this.internalOrder;
  }
  get comment() {
    return this.internalOrder.comment;
  }
  get status() {
    return this.internalOrder?.orderStatus ?? 'pending';
  }
  commitChecks(checks) {
    this.internalChecks = checks;
  }
  commitOrderPhotoApplyCheck(checkResult) {
    this.internalChecks = this.internalChecks.map(check => {
      if (check.orderId === checkResult.orderId && check.itemId === checkResult.itemId && check.photoId === checkResult.photoId) {
        return {
          ...check,
          check: checkResult.check
        };
      }
      return check;
    });
  }
  commitContactInfo(editContactInfo) {
    this.internalOrder.contact = editContactInfo.contactInfo;
  }
  commitOrder(order) {
    this.internalOrder = order ?? this.internalOrderTemplate;
  }
  commitOrderStatus(status) {
    this.internalOrder.orderStatus = status;
  }
  get contact() {
    return this.internalOrder.contact;
  }
  async applyCheck(check) {
    return await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__["default"].applyCheck(check.orderId, check.cartItemId, check.itemId, check.photoId, check.check);
  }
  async editContactInfo({
    id,
    contactInfo
  }) {
    const success = await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__["default"].setContactInfo(id, contactInfo);
    return {
      success,
      contactInfo
    };
  }
  get photos() {
    return this.internalOrder.photos;
  }
  async getChecks(orderId) {
    return await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__["default"].getChecks(orderId);
  }
  async getStatus(id) {
    return await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__["default"].getStatus(id);
  }
  async setOrderId(id) {
    return await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__["default"].getOrderInfo(id);
  }
  get shipping() {
    return this.internalOrder.deliveryOption;
  }
  get subjects() {
    return this.internalOrder.subjects;
  }
  get transaction() {
    return this.internalOrder.transaction;
  }
  async setStatus({
    id,
    status
  }) {
    await _pictaccio_admin_gui_services_order_service__WEBPACK_IMPORTED_MODULE_5__["default"].setStatus(id, status);
    return status;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Orders.prototype, "commitChecks", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Orders.prototype, "commitOrderPhotoApplyCheck", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Orders.prototype, "commitContactInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Orders.prototype, "commitOrder", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Mutation], Orders.prototype, "commitOrderStatus", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action)({
  commit: 'commitOrderPhotoApplyCheck'
})], Orders.prototype, "applyCheck", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action)({
  commit: 'commitContactInfo'
})], Orders.prototype, "editContactInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action)({
  commit: 'commitChecks'
})], Orders.prototype, "getChecks", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action)({
  commit: 'commitOrderStatus'
})], Orders.prototype, "getStatus", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action)({
  commit: 'commitOrder'
})], Orders.prototype, "setOrderId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Action)({
  commit: 'commitOrderStatus'
})], Orders.prototype, "setStatus", null);
Orders = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_7__.Module)({
  namespaced: true
})], Orders);
/* harmony default export */ __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "./src/store/modules/product_catalogs.ts":
/*!***********************************************!*\
  !*** ./src/store/modules/product_catalogs.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let ProductCatalogs = class ProductCatalogs extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'product/catalog/create',
      deleteEndpoint: 'product/catalog/delete',
      readEndpoint: 'product/catalog/read',
      updateEndpoint: 'product/catalog/update'
    });
  }
};
ProductCatalogs = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], ProductCatalogs);
/* harmony default export */ __webpack_exports__["default"] = (ProductCatalogs);

/***/ }),

/***/ "./src/store/modules/product_categories.ts":
/*!*************************************************!*\
  !*** ./src/store/modules/product_categories.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let ProductCategories = class ProductCategories extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'product/categories/create',
      deleteEndpoint: 'product/categories/delete',
      readEndpoint: 'product/categories/read',
      updateEndpoint: 'product/categories/update'
    });
  }
};
ProductCategories = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], ProductCategories);
/* harmony default export */ __webpack_exports__["default"] = (ProductCategories);

/***/ }),

/***/ "./src/store/modules/product_themes.ts":
/*!*********************************************!*\
  !*** ./src/store/modules/product_themes.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let ProductThemes = class ProductThemes extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'product/theme/create',
      deleteEndpoint: 'product/theme/delete',
      readEndpoint: 'product/theme/read',
      updateEndpoint: 'product/theme/update'
    });
  }
};
ProductThemes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], ProductThemes);
/* harmony default export */ __webpack_exports__["default"] = (ProductThemes);

/***/ }),

/***/ "./src/store/modules/products.ts":
/*!***************************************!*\
  !*** ./src/store/modules/products.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let Products = class Products extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'product/create',
      deleteEndpoint: 'product/delete',
      readEndpoint: 'product/read',
      updateEndpoint: 'product/update'
    });
  }
};
Products = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], Products);
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/store/modules/promo_code_campaigns.ts":
/*!***************************************************!*\
  !*** ./src/store/modules/promo_code_campaigns.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let PromoCodeCampaigns = class PromoCodeCampaigns extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'campaign/create',
      deleteEndpoint: 'campaign/delete',
      readEndpoint: 'campaign/read',
      updateEndpoint: 'campaign/update'
    });
  }
};
PromoCodeCampaigns = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], PromoCodeCampaigns);
/* harmony default export */ __webpack_exports__["default"] = (PromoCodeCampaigns);

/***/ }),

/***/ "./src/store/modules/promo_codes.ts":
/*!******************************************!*\
  !*** ./src/store/modules/promo_codes.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let PromoCodes = class PromoCodes extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'campaign/promo-code/create',
      deleteEndpoint: 'campaign/promo-code/delete',
      readEndpoint: 'campaign/promo-code/read',
      updateEndpoint: 'campaign/promo-code/update'
    });
  }
};
PromoCodes = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], PromoCodes);
/* harmony default export */ __webpack_exports__["default"] = (PromoCodes);

/***/ }),

/***/ "./src/store/modules/promo_free_shippings.ts":
/*!***************************************************!*\
  !*** ./src/store/modules/promo_free_shippings.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_shipping_promo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/shipping_promo_service */ "./src/services/shipping_promo_service.ts");




let ShippingPromo = class ShippingPromo extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalFreeShipping", {
      enabled: false,
      threshold: 0
    });
  }
  async updateShippingPromo(data) {
    await _pictaccio_admin_gui_services_shipping_promo_service__WEBPACK_IMPORTED_MODULE_3__["default"].updateShippingPromo(data);
  }
  async readShippingPromo() {
    return await _pictaccio_admin_gui_services_shipping_promo_service__WEBPACK_IMPORTED_MODULE_3__["default"].readShippingPromo();
  }
  commitFreeShipping(data) {
    if (data === null) {
      return;
    }
    this.internalFreeShipping = data;
  }
  get freeShipping() {
    return this.internalFreeShipping;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], ShippingPromo.prototype, "updateShippingPromo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action)({
  commit: 'commitFreeShipping'
})], ShippingPromo.prototype, "readShippingPromo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], ShippingPromo.prototype, "commitFreeShipping", null);
ShippingPromo = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], ShippingPromo);
/* harmony default export */ __webpack_exports__["default"] = (ShippingPromo);

/***/ }),

/***/ "./src/store/modules/prompt.ts":
/*!*************************************!*\
  !*** ./src/store/modules/prompt.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");



let Prompt = class Prompt extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalHtml", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalTitle", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalMessage", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalIcon", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalVisible", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalButtonType", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalResolve", void 0);
  }
  get buttonType() {
    return this.internalButtonType;
  }
  get html() {
    return this.internalHtml;
  }
  get icon() {
    return this.internalIcon;
  }
  get message() {
    return this.internalMessage;
  }
  get title() {
    return this.internalTitle;
  }
  get visible() {
    return this.internalVisible;
  }
  commitPromptInfo(promptInfo) {
    this.internalButtonType = promptInfo.buttonType;
    this.internalIcon = promptInfo.icon;
    this.internalMessage = promptInfo.message;
    this.internalTitle = promptInfo.title;
    this.internalHtml = promptInfo.html ?? false;
  }
  commitPromptVisibility(visible) {
    this.internalVisible = visible;
  }
  commitResolve(button) {
    this.internalResolve(button);
  }
  commitResolveRef(resolve) {
    this.internalResolve = resolve;
  }
  show(promptInfo) {
    return new Promise((resolve, reject) => {
      this.context.commit('commitResolveRef', resolve);
      this.context.commit('commitPromptInfo', promptInfo);
      this.context.commit('commitPromptVisibility', true);
    });
  }
  async resolve(button) {
    this.context.commit('commitResolve', button);
    this.context.commit('commitPromptVisibility', false);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], Prompt.prototype, "commitPromptInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], Prompt.prototype, "commitPromptVisibility", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], Prompt.prototype, "commitResolve", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], Prompt.prototype, "commitResolveRef", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], Prompt.prototype, "show", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], Prompt.prototype, "resolve", null);
Prompt = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], Prompt);
/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ }),

/***/ "./src/store/modules/readers/background_categories_reader.ts":
/*!*******************************************************************!*\
  !*** ./src/store/modules/readers/background_categories_reader.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let BackgroundCategoriesReader = class BackgroundCategoriesReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalBackgroundCategories", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'background/categories/read'
    });
  }
  commitDirty(value) {
    this.dirty = value;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  get backgroundCategories() {
    return this.internalBackgroundCategories;
  }
  async backgroundCategoriesRead(force = false) {
    if (force || this.dirty || this.internalBackgroundCategories === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitBackgroundCategories', answer.results.map(i => ({
        id: i.id,
        value: i.name_locale
      })));
    }
  }
  commitBackgroundCategories(backgroundCategories) {
    this.internalBackgroundCategories = backgroundCategories;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], BackgroundCategoriesReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], BackgroundCategoriesReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], BackgroundCategoriesReader.prototype, "backgroundCategoriesRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], BackgroundCategoriesReader.prototype, "commitBackgroundCategories", null);
BackgroundCategoriesReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], BackgroundCategoriesReader);
/* harmony default export */ __webpack_exports__["default"] = (BackgroundCategoriesReader);

/***/ }),

/***/ "./src/store/modules/readers/backgrounds_reader.ts":
/*!*********************************************************!*\
  !*** ./src/store/modules/readers/backgrounds_reader.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_background_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/services/background_service */ "./src/services/background_service.ts");







let BackgroundsReader = class BackgroundsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalBackgrounds", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalTags", []);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'background/read'
    });
  }
  commitBackgrounds(backgrounds) {
    this.internalBackgrounds = backgrounds;
  }
  commitDirty(value) {
    this.dirty = value;
  }
  commitTags(tags) {
    this.internalTags = tags;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  get backgroundCategories() {
    return this.internalBackgrounds;
  }
  async backgroundCategoriesRead(force = false) {
    if (force || this.dirty || this.internalBackgrounds === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitBackgrounds', answer.results.map(i => ({
        id: i.id,
        value: i.name_locale
      })));
    }
  }
  get tags() {
    return this.internalTags;
  }
  async tagsRead(force = false) {
    if (force || this.internalTags.length === 0) {
      const tags = await _pictaccio_admin_gui_services_background_service__WEBPACK_IMPORTED_MODULE_6__["default"].getBackgroundTags();
      this.context.commit('commitTags', tags);
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], BackgroundsReader.prototype, "commitBackgrounds", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], BackgroundsReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], BackgroundsReader.prototype, "commitTags", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], BackgroundsReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], BackgroundsReader.prototype, "backgroundCategoriesRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], BackgroundsReader.prototype, "tagsRead", null);
BackgroundsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], BackgroundsReader);
/* harmony default export */ __webpack_exports__["default"] = (BackgroundsReader);

/***/ }),

/***/ "./src/store/modules/readers/cross_sells_reader.ts":
/*!*********************************************************!*\
  !*** ./src/store/modules/readers/cross_sells_reader.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let CrosssellsReader = class CrosssellsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalCrosssells", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'product/cross-sell/read'
    });
  }
  get crosssells() {
    return this.internalCrosssells;
  }
  async crosssellsRead(force = false) {
    if (force || this.internalCrosssells === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitCrosssells', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  async productCatalogsByIdRead(id) {
    if (id) {
      const answer = await this.service.read({
        filters: [[{
          column: '_product_id',
          operator: '==',
          operand: `${id}`
        }]]
      });
      this.context.commit('commitProductCatalogsById', answer.results.map(i => i.id));
    }
  }
  commitCrosssells(crosssells) {
    this.internalCrosssells = crosssells;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], CrosssellsReader.prototype, "crosssellsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], CrosssellsReader.prototype, "productCatalogsByIdRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], CrosssellsReader.prototype, "commitCrosssells", null);
CrosssellsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], CrosssellsReader);
/* harmony default export */ __webpack_exports__["default"] = (CrosssellsReader);

/***/ }),

/***/ "./src/store/modules/readers/custom_products_reader.ts":
/*!*************************************************************!*\
  !*** ./src/store/modules/readers/custom_products_reader.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let CustomProductsReader = class CustomProductsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalCustomProducts", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'product/customProduct/read'
    });
  }
  get customProducts() {
    return this.internalCustomProducts;
  }
  async customProductsRead(force = false) {
    if (force || this.dirty || this.internalCustomProducts === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitCustomProducts', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  commitCustomProducts(customProducts) {
    this.internalCustomProducts = customProducts;
  }
  commitDirty(value) {
    this.dirty = value;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], CustomProductsReader.prototype, "customProductsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], CustomProductsReader.prototype, "commitCustomProducts", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], CustomProductsReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], CustomProductsReader.prototype, "makeDirty", null);
CustomProductsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], CustomProductsReader);
/* harmony default export */ __webpack_exports__["default"] = (CustomProductsReader);

/***/ }),

/***/ "./src/store/modules/readers/product_catalogs_reader.ts":
/*!**************************************************************!*\
  !*** ./src/store/modules/readers/product_catalogs_reader.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let ProductCatalogsReader = class ProductCatalogsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalProductCatalogs", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalProductCatalogsById", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'product/catalog/read'
    });
  }
  get productCatalogs() {
    return this.internalProductCatalogs;
  }
  get productCatalogsById() {
    return this.internalProductCatalogsById;
  }
  async productCatalogsRead(force = false) {
    if (force || this.internalProductCatalogs === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitProductCatalogs', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  async productCatalogsByIdRead(id) {
    if (id) {
      const answer = await this.service.read({
        filters: [[{
          column: '_product_id',
          operator: '==',
          operand: `${id}`
        }]]
      });
      this.context.commit('commitProductCatalogsById', answer.results.map(i => i.id));
    }
  }
  commitProductCatalogs(productCatalogs) {
    this.internalProductCatalogs = productCatalogs;
  }
  commitProductCatalogsById(productCatalogIds) {
    this.internalProductCatalogsById = productCatalogIds;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductCatalogsReader.prototype, "productCatalogsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductCatalogsReader.prototype, "productCatalogsByIdRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductCatalogsReader.prototype, "commitProductCatalogs", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductCatalogsReader.prototype, "commitProductCatalogsById", null);
ProductCatalogsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], ProductCatalogsReader);
/* harmony default export */ __webpack_exports__["default"] = (ProductCatalogsReader);

/***/ }),

/***/ "./src/store/modules/readers/product_categories_reader.ts":
/*!****************************************************************!*\
  !*** ./src/store/modules/readers/product_categories_reader.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let ProductCategoriesReader = class ProductCategoriesReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalProductCategories", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'product/categories/read'
    });
  }
  commitDirty(value) {
    this.dirty = value;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  get productCategories() {
    return this.internalProductCategories;
  }
  async productCategoriesRead(force = false) {
    if (force || this.dirty || this.internalProductCategories === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitProductCategories', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  commitProductCategories(productCategories) {
    this.internalProductCategories = productCategories;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductCategoriesReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductCategoriesReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductCategoriesReader.prototype, "productCategoriesRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductCategoriesReader.prototype, "commitProductCategories", null);
ProductCategoriesReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], ProductCategoriesReader);
/* harmony default export */ __webpack_exports__["default"] = (ProductCategoriesReader);

/***/ }),

/***/ "./src/store/modules/readers/product_themes_reader.ts":
/*!************************************************************!*\
  !*** ./src/store/modules/readers/product_themes_reader.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let ProductThemesReader = class ProductThemesReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalProductTheme", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalProductThemes", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'product/theme/read'
    });
  }
  commitDirty(value) {
    this.dirty = value;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  get productTheme() {
    return this.internalProductTheme;
  }
  get productThemes() {
    return this.internalProductThemes;
  }
  async productThemeRead(id) {
    if (!id) {
      this.context.commit('commitProductTheme', []);
      return;
    }
    const answer = await this.service.read({
      filters: [[{
        column: 'id',
        operator: '==',
        operand: id.toString()
      }]]
    });
    const productTheme = Object.entries(answer.results[0]['themes']).map(([id, value]) => ({
      id,
      value
    }));
    this.context.commit('commitProductTheme', productTheme);
  }
  async productThemesRead(force = false) {
    if (force || this.dirty || this.internalProductThemes === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitProductThemes', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  commitProductTheme(productTheme) {
    this.internalProductTheme = productTheme;
  }
  commitProductThemes(productThemes) {
    this.internalProductThemes = productThemes;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductThemesReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductThemesReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductThemesReader.prototype, "productThemeRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductThemesReader.prototype, "productThemesRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductThemesReader.prototype, "commitProductTheme", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductThemesReader.prototype, "commitProductThemes", null);
ProductThemesReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], ProductThemesReader);
/* harmony default export */ __webpack_exports__["default"] = (ProductThemesReader);

/***/ }),

/***/ "./src/store/modules/readers/products_reader.ts":
/*!******************************************************!*\
  !*** ./src/store/modules/readers/products_reader.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pictaccio/admin-gui/services/product_service */ "./src/services/product_service.ts");







let ProductsReader = class ProductsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalProducts", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalTags", []);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'product/read'
    });
  }
  commitDirty(value) {
    this.dirty = value;
  }
  commitProducts(products) {
    this.internalProducts = products;
  }
  commitTags(tags) {
    this.internalTags = tags;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  get products() {
    return this.internalProducts;
  }
  async productsRead(force = false) {
    if (force || this.dirty || this.internalProducts === undefined) {
      const answer = await this.service.read({
        filters: [[{
          column: 'archived',
          operator: '==',
          operand: false
        }]]
      });
      this.context.commit('commitDirty', false);
      this.context.commit('commitProducts', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  get tags() {
    return this.internalTags;
  }
  async tagsRead(force = false) {
    if (force || this.internalTags.length === 0) {
      const tags = await _pictaccio_admin_gui_services_product_service__WEBPACK_IMPORTED_MODULE_6__["default"].getProductTags();
      this.context.commit('commitTags', tags);
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductsReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductsReader.prototype, "commitProducts", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ProductsReader.prototype, "commitTags", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductsReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductsReader.prototype, "productsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ProductsReader.prototype, "tagsRead", null);
ProductsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], ProductsReader);
/* harmony default export */ __webpack_exports__["default"] = (ProductsReader);

/***/ }),

/***/ "./src/store/modules/readers/promo_code_campaigns_reader.ts":
/*!******************************************************************!*\
  !*** ./src/store/modules/readers/promo_code_campaigns_reader.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let PromoCodeCampaignsReader = class PromoCodeCampaignsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalPromoCodeCampaign", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'campaign/read'
    });
  }
  get promoCodeCampaigns() {
    return this.internalPromoCodeCampaign;
  }
  async promoCodeCampaignsRead(force = false) {
    if (force || this.internalPromoCodeCampaign === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitPromoCodeCampaigns', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  commitPromoCodeCampaigns(promoCodeCampaign) {
    this.internalPromoCodeCampaign = promoCodeCampaign;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], PromoCodeCampaignsReader.prototype, "promoCodeCampaignsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], PromoCodeCampaignsReader.prototype, "commitPromoCodeCampaigns", null);
PromoCodeCampaignsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], PromoCodeCampaignsReader);
/* harmony default export */ __webpack_exports__["default"] = (PromoCodeCampaignsReader);

/***/ }),

/***/ "./src/store/modules/readers/sessions_reader.ts":
/*!******************************************************!*\
  !*** ./src/store/modules/readers/sessions_reader.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let SessionsReader = class SessionsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalSessions", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'photo-session/read'
    });
  }
  get sessions() {
    return this.internalSessions;
  }
  async sessionsRead(force = false) {
    if (force || this.internalSessions === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitSessions', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  commitSessions(sessions) {
    this.internalSessions = sessions;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], SessionsReader.prototype, "sessionsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], SessionsReader.prototype, "commitSessions", null);
SessionsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], SessionsReader);
/* harmony default export */ __webpack_exports__["default"] = (SessionsReader);

/***/ }),

/***/ "./src/store/modules/readers/shipping_groups_reader.ts":
/*!*************************************************************!*\
  !*** ./src/store/modules/readers/shipping_groups_reader.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let ShippingGroupsReader = class ShippingGroupsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalShippingGroups", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'delivery/groups/read'
    });
  }
  get shippingGroups() {
    return this.internalShippingGroups;
  }
  async shippingGroupsRead(force = false) {
    if (force || this.internalShippingGroups === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitShippingGroups', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name,
        deliveryOptions: i.deliveryOptions
      })));
    }
  }
  commitShippingGroups(shippingGroups) {
    this.internalShippingGroups = shippingGroups;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ShippingGroupsReader.prototype, "shippingGroupsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ShippingGroupsReader.prototype, "commitShippingGroups", null);
ShippingGroupsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], ShippingGroupsReader);
/* harmony default export */ __webpack_exports__["default"] = (ShippingGroupsReader);

/***/ }),

/***/ "./src/store/modules/readers/shipping_methods_reader.ts":
/*!**************************************************************!*\
  !*** ./src/store/modules/readers/shipping_methods_reader.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/global_toast */ "./src/utils/global_toast.ts");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");








let ShippingMethodsReader = class ShippingMethodsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_6__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalShippingMethods", []);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_7__.createDataTableService)({
      readEndpoint: 'delivery/methods/read'
    });
  }
  get shippingMethods() {
    return this.internalShippingMethods;
  }
  async shippingMethodsRead(force = false) {
    if (force || (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(this.internalShippingMethods)) {
      const answer = await this.service.read({});
      if (answer) {
        this.context.commit('commitShippingMethods', answer.results.map(i => ({
          id: i.id,
          value: i.internal_name
        }))
        //Keep this comment for later Upgrades
        /*[
            { id: 1, value: 'fixed-rate' },
            { id: 2, value: 'canada-post' },
            { id: 3, value: 'pick-up' },
            { id: 4, value: 'establishment' }
        ]*/);
      } else {
        (0,_pictaccio_admin_gui_utils_global_toast__WEBPACK_IMPORTED_MODULE_4__.globalToast)('SERVER_READER_ERROR_READ', 'error');
      }
    }
  }
  commitShippingMethods(shippingMethods) {
    this.internalShippingMethods = shippingMethods;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_6__.Action], ShippingMethodsReader.prototype, "shippingMethodsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_6__.Mutation], ShippingMethodsReader.prototype, "commitShippingMethods", null);
ShippingMethodsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_6__.Module)({
  namespaced: true
})], ShippingMethodsReader);
/* harmony default export */ __webpack_exports__["default"] = (ShippingMethodsReader);

/***/ }),

/***/ "./src/store/modules/readers/shipping_options_reader.ts":
/*!**************************************************************!*\
  !*** ./src/store/modules/readers/shipping_options_reader.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let ShippingOptionsReader = class ShippingOptionsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalShippingOptions", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'delivery/options/read'
    });
  }
  commitDirty(value) {
    this.dirty = value;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  commitShippingOptions(shippingOptions) {
    this.internalShippingOptions = shippingOptions;
  }
  get shippingOptions() {
    return this.internalShippingOptions;
  }
  async shippingOptionsRead(force = false) {
    if (force || this.dirty || this.internalShippingOptions === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitShippingOptions', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ShippingOptionsReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ShippingOptionsReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], ShippingOptionsReader.prototype, "commitShippingOptions", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], ShippingOptionsReader.prototype, "shippingOptionsRead", null);
ShippingOptionsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], ShippingOptionsReader);
/* harmony default export */ __webpack_exports__["default"] = (ShippingOptionsReader);

/***/ }),

/***/ "./src/store/modules/readers/workflows_reader.ts":
/*!*******************************************************!*\
  !*** ./src/store/modules/readers/workflows_reader.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.map.js */ "./node_modules/core-js/modules/es.iterator.map.js");
/* harmony import */ var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");






let WorkflowsReader = class WorkflowsReader extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalWorkflows", void 0);
    this.service = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_5__.createDataTableService)({
      readEndpoint: 'workflow/read'
    });
  }
  commitDirty(value) {
    this.dirty = value;
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  get workflows() {
    return this.internalWorkflows;
  }
  async workflowsRead(force = false) {
    if (force || this.dirty || this.internalWorkflows === undefined) {
      const answer = await this.service.read({});
      this.context.commit('commitDirty', false);
      this.context.commit('commitWorkflows', answer.results.map(i => ({
        id: i.id,
        value: i.internal_name
      })));
    }
  }
  commitWorkflows(workflows) {
    this.internalWorkflows = workflows;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], WorkflowsReader.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], WorkflowsReader.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], WorkflowsReader.prototype, "workflowsRead", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], WorkflowsReader.prototype, "commitWorkflows", null);
WorkflowsReader = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], WorkflowsReader);
/* harmony default export */ __webpack_exports__["default"] = (WorkflowsReader);

/***/ }),

/***/ "./src/store/modules/session_subject_data.ts":
/*!***************************************************!*\
  !*** ./src/store/modules/session_subject_data.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_session_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/session_upload_service */ "./src/services/session_upload_service.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");




let SessionSubjectData = class SessionSubjectData extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalUsedSubjectCodes", void 0);
  }
  commitSubjectData(data) {
    this.data = data;
  }
  commitUsedSubjectCodes(existingCodes) {
    this.internalUsedSubjectCodes = existingCodes;
  }
  get subjectData() {
    return this.data;
  }
  get usedSubjectCodes() {
    return this.internalUsedSubjectCodes;
  }
  async setSubjectData(data) {
    const existingCode = await _pictaccio_admin_gui_services_session_upload_service__WEBPACK_IMPORTED_MODULE_2__["default"].verifySubjectCodes(data);
    if (existingCode.length > 0) {
      this.context.commit('commitUsedSubjectCodes', existingCode);
    }
    this.context.commit('commitSubjectData', data);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], SessionSubjectData.prototype, "commitSubjectData", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], SessionSubjectData.prototype, "commitUsedSubjectCodes", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action], SessionSubjectData.prototype, "setSubjectData", null);
SessionSubjectData = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Module)({
  namespaced: true
})], SessionSubjectData);
/* harmony default export */ __webpack_exports__["default"] = (SessionSubjectData);

/***/ }),

/***/ "./src/store/modules/sessions.ts":
/*!***************************************!*\
  !*** ./src/store/modules/sessions.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/session_service */ "./src/services/session_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");






let Sessions = class Sessions extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_4__.BaseDataTable {
  constructor(module) {
    super(module);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "generalInfoInternal", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "optionsInternal", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "productCatalogsInternal", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sessionIdInternal", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "shippingGroupsInternal", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subjectsInternal", void 0);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'photo-session/create',
      deleteEndpoint: 'photo-session/delete',
      readEndpoint: 'photo-session/read',
      updateEndpoint: 'photo-session/update'
    });
  }
  get generalInfo() {
    return this.generalInfoInternal;
  }
  get options() {
    return this.optionsInternal;
  }
  get productCatalogs() {
    return this.productCatalogsInternal;
  }
  get shippingGroups() {
    return this.shippingGroupsInternal;
  }
  get sessionId() {
    return this.sessionIdInternal;
  }
  get subjects() {
    return this.subjectsInternal;
  }
  async archive(sessionId) {
    await _pictaccio_admin_gui_services_session_service__WEBPACK_IMPORTED_MODULE_3__["default"].archive(sessionId);
  }
  async clear() {
    this.context.commit('commitGeneralInfo', {});
    this.context.commit('commitOptions', {});
    this.context.commit('commitProductCatalogs', []);
    this.context.commit('commitShippingGroups', []);
    this.context.commit('commitSubjects', {});
  }
  clearSubjects() {
    this.context.commit('commitSubjects', {});
  }
  commitGeneralInfo(info) {
    this.generalInfoInternal = info;
  }
  commitOptions(options) {
    this.optionsInternal = options;
  }
  commitProductCatalogs(productCatalogs) {
    this.productCatalogsInternal = productCatalogs;
  }
  commitShippingGroups(shippingGroups) {
    this.shippingGroupsInternal = shippingGroups;
  }
  commitSessionId(id) {
    this.sessionIdInternal = id;
  }
  commitSubjects(subjects) {
    this.subjectsInternal = subjects;
  }
  async save() {
    const response = await _pictaccio_admin_gui_services_session_service__WEBPACK_IMPORTED_MODULE_3__["default"].save(this.context.getters['generalInfo'], this.context.getters['options'], {
      productCatalogIds: this.context.getters['productCatalogs'],
      deliveryGroupIds: this.context.getters['shippingGroups']
    }, this.context.getters['subjects']);
    return response.sessionId;
  }
  async saveGeneralInfo(info) {
    return info;
  }
  async saveOptions(options) {
    return options;
  }
  async saveShippingGroups(shippingGroups) {
    return shippingGroups;
  }
  async saveProductCatalogs(productCatalogs) {
    return productCatalogs;
  }
  async saveSubjects(subjects) {
    return subjects;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action], Sessions.prototype, "archive", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action], Sessions.prototype, "clear", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action], Sessions.prototype, "clearSubjects", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], Sessions.prototype, "commitGeneralInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], Sessions.prototype, "commitOptions", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], Sessions.prototype, "commitProductCatalogs", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], Sessions.prototype, "commitShippingGroups", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], Sessions.prototype, "commitSessionId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Mutation], Sessions.prototype, "commitSubjects", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSessionId'
})], Sessions.prototype, "save", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitGeneralInfo'
})], Sessions.prototype, "saveGeneralInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitOptions'
})], Sessions.prototype, "saveOptions", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitShippingGroups'
})], Sessions.prototype, "saveShippingGroups", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitProductCatalogs'
})], Sessions.prototype, "saveProductCatalogs", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Action)({
  commit: 'commitSubjects'
})], Sessions.prototype, "saveSubjects", null);
Sessions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_5__.Module)({
  namespaced: true
})], Sessions);
/* harmony default export */ __webpack_exports__["default"] = (Sessions);

/***/ }),

/***/ "./src/store/modules/shipping_groups.ts":
/*!**********************************************!*\
  !*** ./src/store/modules/shipping_groups.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let ShippingGroups = class ShippingGroups extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'delivery/groups/create',
      deleteEndpoint: 'delivery/groups/delete',
      readEndpoint: 'delivery/groups/read',
      updateEndpoint: 'delivery/groups/update'
    });
  }
};
ShippingGroups = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], ShippingGroups);
/* harmony default export */ __webpack_exports__["default"] = (ShippingGroups);

/***/ }),

/***/ "./src/store/modules/shipping_options.ts":
/*!***********************************************!*\
  !*** ./src/store/modules/shipping_options.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let ShippingOptions = class ShippingOptions extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'delivery/create',
      deleteEndpoint: 'delivery/delete',
      readEndpoint: 'delivery/read',
      updateEndpoint: 'delivery/update'
    });
  }
};
ShippingOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], ShippingOptions);
/* harmony default export */ __webpack_exports__["default"] = (ShippingOptions);

/***/ }),

/***/ "./src/store/modules/store_config.ts":
/*!*******************************************!*\
  !*** ./src/store/modules/store_config.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.iterator.every.js */ "./node_modules/core-js/modules/es.iterator.every.js");
/* harmony import */ var core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.iterator.filter.js */ "./node_modules/core-js/modules/es.iterator.filter.js");
/* harmony import */ var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.iterator.find.js */ "./node_modules/core-js/modules/es.iterator.find.js");
/* harmony import */ var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loufa/loufairy */ "./node_modules/@loufa/loufairy/dist/src/entry.js");
/* harmony import */ var _loufa_loufairy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loufa_loufairy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pictaccio_admin_gui_errors_load_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/load_error */ "./src/errors/load_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_save_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/save_error */ "./src/errors/save_error.ts");
/* harmony import */ var _pictaccio_admin_gui_models_store_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pictaccio/admin-gui/models/store_config */ "./src/models/store_config.ts");
/* harmony import */ var _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pictaccio/admin-gui/services/store_config_service */ "./src/services/store_config_service.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");













function filterUndefined(obj) {
  const newObj = Array.isArray(obj) ? [] : {};
  if (Array.isArray(newObj)) {
    for (const i of obj) {
      if (i !== null && typeof i === 'object') {
        newObj.push(filterUndefined(i));
      } else if (i !== undefined) {
        newObj.push(i);
      }
    }
  } else {
    for (const [key, value] of Object.entries(obj)) {
      if (value !== null && typeof value === 'object') {
        newObj[key] = filterUndefined(value);
      } else if (value !== undefined) {
        newObj[key] = value;
      }
    }
  }
  return newObj;
}
let StoreConfig = class StoreConfig extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "availableLanguages", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "languages", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "uncommittedConfig", {});
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "runningConfig", new _pictaccio_admin_gui_models_store_config__WEBPACK_IMPORTED_MODULE_10__.StoreConfig());
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalHasWatermark", false);
  }
  get availableLanguagesList() {
    return this.availableLanguages;
  }
  get languagesList() {
    return this.languages;
  }
  get storeConfig() {
    return this.runningConfig;
  }
  get hasWatermark() {
    return this.internalHasWatermark;
  }
  commit() {
    this.runningConfig = this.uncommittedConfig;
  }
  commitAvailableLanguages(languages) {
    this.availableLanguages = languages;
  }
  commitHasWatermark(hasWatermark) {
    this.internalHasWatermark = hasWatermark;
  }
  async commitStoreConfig() {
    if (await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].save(this.uncommittedConfig)) {
      this.context.commit('commit');
    } else {
      throw new _pictaccio_admin_gui_errors_save_error__WEBPACK_IMPORTED_MODULE_9__.SaveError('Unable to save store configuration');
    }
  }
  commitStoreLanguages(languages) {
    this.languages = languages;
  }
  createStoreConfig() {
    // Empty
  }
  create() {
    this.uncommittedConfig = {};
  }
  load(storeConfig) {
    if (!storeConfig.phones) {
      storeConfig.phones = [];
    }
    if (!storeConfig.emailAddresses) {
      storeConfig.emailAddresses = [];
    }
    if (!storeConfig.phones.find(i => i.name === '_main')) {
      storeConfig.phones.push(this.runningConfig.phones.find(i => i.name === '_main'));
    }
    if (!storeConfig.emailAddresses.find(i => i.name === '_customer-service')) {
      storeConfig.emailAddresses.push(this.runningConfig.emailAddresses.find(i => i.name === '_customer-service'));
    }
    if (!storeConfig.emailAddresses.find(i => i.name === '_notifications')) {
      storeConfig.emailAddresses.push(this.runningConfig.emailAddresses.find(i => i.name === '_notifications'));
    }
    this.runningConfig = storeConfig;
  }
  async loadStoreConfig() {
    const storeConfig = await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].load();
    if (!storeConfig) {
      throw new _pictaccio_admin_gui_errors_load_error__WEBPACK_IMPORTED_MODULE_8__.LoadError('Unable to load store configuration');
    }
    return storeConfig;
  }
  async loadHasWatermark() {
    return await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].hasWatermark();
  }
  async getAvailableLanguages() {
    return await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].getAvailableLanguages();
  }
  async getStoreLanguages(force = false) {
    if (force || this.languages.length === 0) {
      const languages = await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].getStoreLanguages();
      if (!languages) {
        throw new _pictaccio_admin_gui_errors_load_error__WEBPACK_IMPORTED_MODULE_8__.LoadError('Unable to load store languages');
      }
      this.context.commit('commitStoreLanguages', languages);
    }
  }
  async saveWatermark(data) {
    await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].saveWatermark(data);
  }
  async setStoreConfig({
    key,
    value
  }) {
    const storeConfig = new _pictaccio_admin_gui_models_store_config__WEBPACK_IMPORTED_MODULE_10__.StoreConfig();
    if (!Object.keys(storeConfig).includes(key)) {
      throw new Error(`Invalid store-config key '${key}'`);
    }
    return {
      [key]: value
    };
  }
  async setStoreLanguages(languages) {
    if (await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_11__["default"].setStoreLanguages(languages)) {
      return languages;
    } else {
      throw new _pictaccio_admin_gui_errors_save_error__WEBPACK_IMPORTED_MODULE_9__.SaveError('Unable to save store languages');
    }
  }
  set(storeConfig) {
    this.uncommittedConfig = (0,_loufa_loufairy__WEBPACK_IMPORTED_MODULE_7__.mergeObjects)(true, this.runningConfig, filterUndefined(this.uncommittedConfig), Object.fromEntries(Object.entries(storeConfig).filter(([_, config]) => config !== undefined && (typeof config === 'object' && Object.values(config).length && Object.values(config).every(i => i !== undefined) || typeof config !== 'object'))));
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "commit", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "commitAvailableLanguages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "commitHasWatermark", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action], StoreConfig.prototype, "commitStoreConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "commitStoreLanguages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action)({
  commit: 'create'
})], StoreConfig.prototype, "createStoreConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "create", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "load", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action)({
  commit: 'load'
})], StoreConfig.prototype, "loadStoreConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action)({
  commit: 'commitHasWatermark'
})], StoreConfig.prototype, "loadHasWatermark", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action)({
  commit: 'commitAvailableLanguages'
})], StoreConfig.prototype, "getAvailableLanguages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action], StoreConfig.prototype, "getStoreLanguages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action], StoreConfig.prototype, "saveWatermark", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action)({
  commit: 'set'
})], StoreConfig.prototype, "setStoreConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Action)({
  commit: 'commitStoreLanguages'
})], StoreConfig.prototype, "setStoreLanguages", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Mutation], StoreConfig.prototype, "set", null);
StoreConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_12__.Module)({
  namespaced: true
})], StoreConfig);
/* harmony default export */ __webpack_exports__["default"] = (StoreConfig);

/***/ }),

/***/ "./src/store/modules/store_customization.ts":
/*!**************************************************!*\
  !*** ./src/store/modules/store_customization.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_shared_types_custom_external_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/shared/types/custom_external_urls */ "./node_modules/@pictaccio/shared/dist/src/types/custom_external_urls.js");
/* harmony import */ var _pictaccio_shared_types_store_customization_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/shared/types/store_customization_colors */ "./node_modules/@pictaccio/shared/dist/src/types/store_customization_colors.js");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_store_customization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/services/store_customization_service */ "./src/services/store_customization_service.ts");






let StoreCustomization = class StoreCustomization extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "colors", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "urls", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dirty", false);
  }
  get brandingColorAccents() {
    return this.colors || new _pictaccio_shared_types_store_customization_colors__WEBPACK_IMPORTED_MODULE_3__.StoreCustomizationColors();
  }
  commitColors(data) {
    this.colors = data;
  }
  commitDirty(value) {
    this.dirty = value;
  }
  commitUrls(data) {
    this.urls = data;
  }
  get externalUrls() {
    return this.urls || new _pictaccio_shared_types_custom_external_urls__WEBPACK_IMPORTED_MODULE_2__.CustomExternalUrls();
  }
  async makeDirty() {
    this.context.commit('commitDirty', true);
  }
  async readColors(force = false) {
    if (force || this.colors === undefined) {
      const answer = await _pictaccio_admin_gui_services_store_customization_service__WEBPACK_IMPORTED_MODULE_5__["default"].readColors();
      this.context.commit('commitDirty', false);
      this.context.commit('commitColors', answer);
    }
  }
  async readCustomization(force = false) {
    await this.context.dispatch('readColors', force);
    await this.context.dispatch('readUrls', force);
  }
  async readUrls(force = false) {
    if (force || this.urls === undefined) {
      const answer = await _pictaccio_admin_gui_services_store_customization_service__WEBPACK_IMPORTED_MODULE_5__["default"].readUrls();
      this.context.commit('commitDirty', false);
      this.context.commit('commitUrls', answer);
    }
  }
  async saveColors(data) {
    if (await _pictaccio_admin_gui_services_store_customization_service__WEBPACK_IMPORTED_MODULE_5__["default"].saveColors(data)) {
      this.context.commit('commitColors', data);
    }
  }
  async saveLogo(data) {
    await _pictaccio_admin_gui_services_store_customization_service__WEBPACK_IMPORTED_MODULE_5__["default"].saveLogo(data);
  }
  async saveUrls(data) {
    if (await _pictaccio_admin_gui_services_store_customization_service__WEBPACK_IMPORTED_MODULE_5__["default"].saveUrls(data)) {
      this.context.commit('commitUrls', data);
    }
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], StoreCustomization.prototype, "commitColors", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], StoreCustomization.prototype, "commitDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], StoreCustomization.prototype, "commitUrls", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "makeDirty", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "readColors", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "readCustomization", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "readUrls", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "saveColors", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "saveLogo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], StoreCustomization.prototype, "saveUrls", null);
StoreCustomization = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], StoreCustomization);
/* harmony default export */ __webpack_exports__["default"] = (StoreCustomization);

/***/ }),

/***/ "./src/store/modules/store_status.ts":
/*!*******************************************!*\
  !*** ./src/store/modules/store_status.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/store_config_service */ "./src/services/store_config_service.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");




let StoreStatus = class StoreStatus extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalStoreStatus", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalStoreConfigured", null);
  }
  async changeStoreStatus(data) {
    await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_2__["default"].setStoreStatus(data);
  }
  async checkStoreConfigured() {
    return await _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_2__["default"].isStoreConfigured();
  }
  async readStoreStatus() {
    return _pictaccio_admin_gui_services_store_config_service__WEBPACK_IMPORTED_MODULE_2__["default"].getStoreStatus();
  }
  commitStoreConfigured(data) {
    this.internalStoreConfigured = data;
  }
  commitStoreStatus(data) {
    this.internalStoreStatus = data;
  }
  get storeConfigured() {
    return this.internalStoreConfigured;
  }
  get storeStatus() {
    return this.internalStoreStatus;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action], StoreStatus.prototype, "changeStoreStatus", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'commitStoreConfigured'
})], StoreStatus.prototype, "checkStoreConfigured", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'commitStoreStatus'
})], StoreStatus.prototype, "readStoreStatus", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], StoreStatus.prototype, "commitStoreConfigured", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], StoreStatus.prototype, "commitStoreStatus", null);
StoreStatus = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Module)({
  namespaced: true
})], StoreStatus);
/* harmony default export */ __webpack_exports__["default"] = (StoreStatus);

/***/ }),

/***/ "./src/store/modules/subject_codes.ts":
/*!********************************************!*\
  !*** ./src/store/modules/subject_codes.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_subject_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/subject_code_service */ "./src/services/subject_code_service.ts");




let SubjectCodes = class SubjectCodes extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalSubjectCodes", []);
  }
  commitSubjectCodes(subjectCodes) {
    this.internalSubjectCodes = subjectCodes;
  }
  async generateCodes(subjectCodesQuery) {
    return await _pictaccio_admin_gui_services_subject_code_service__WEBPACK_IMPORTED_MODULE_3__["default"].createBulkSubjectCodes(subjectCodesQuery);
  }
  get codes() {
    return this.internalSubjectCodes;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], SubjectCodes.prototype, "commitSubjectCodes", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action)({
  commit: 'commitSubjectCodes'
})], SubjectCodes.prototype, "generateCodes", null);
SubjectCodes = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], SubjectCodes);
/* harmony default export */ __webpack_exports__["default"] = (SubjectCodes);

/***/ }),

/***/ "./src/store/modules/subject_groups.ts":
/*!*********************************************!*\
  !*** ./src/store/modules/subject_groups.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_subject_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/services/subject_groups_service */ "./src/services/subject_groups_service.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");





let SubjectGroups = class SubjectGroups extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_4__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_3__.createDataTableService)({
      createEndpoint: 'photo-session/group/create',
      deleteEndpoint: 'photo-session/group/delete',
      readEndpoint: 'photo-session/group/read',
      updateEndpoint: 'photo-session/group/update'
    });
  }
  async addVersion(data) {
    await _pictaccio_admin_gui_services_subject_groups_service__WEBPACK_IMPORTED_MODULE_1__["default"].addVersion(data.id, data.original, data.version);
  }
  async removeVersion(data) {
    await _pictaccio_admin_gui_services_subject_groups_service__WEBPACK_IMPORTED_MODULE_1__["default"].removeVersion(data.id, data.original, data.version);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], SubjectGroups.prototype, "addVersion", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], SubjectGroups.prototype, "removeVersion", null);
SubjectGroups = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], SubjectGroups);
/* harmony default export */ __webpack_exports__["default"] = (SubjectGroups);

/***/ }),

/***/ "./src/store/modules/subjects.ts":
/*!***************************************!*\
  !*** ./src/store/modules/subjects.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/subjects_service */ "./src/services/subjects_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");





let Subjects = class Subjects extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_1__.createDataTableService)({
      createEndpoint: 'photo-session/subject/create',
      deleteEndpoint: 'photo-session/subject/delete',
      readEndpoint: 'photo-session/subject/read',
      updateEndpoint: 'photo-session/subject/update'
    });
  }
  async addVersion(data) {
    await _pictaccio_admin_gui_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__["default"].addVersion(data.id, data.original, data.version);
  }
  async removeVersion(data) {
    await _pictaccio_admin_gui_services_subjects_service__WEBPACK_IMPORTED_MODULE_2__["default"].removeVersion(data.id, data.original, data.version);
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], Subjects.prototype, "addVersion", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], Subjects.prototype, "removeVersion", null);
Subjects = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], Subjects);
/* harmony default export */ __webpack_exports__["default"] = (Subjects);

/***/ }),

/***/ "./src/store/modules/upload_status.ts":
/*!********************************************!*\
  !*** ./src/store/modules/upload_status.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");





let UploadStatus = class UploadStatus extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalUploads", {});
  }
  commitUpload(upload) {
    this.internalUploads[upload.sessionId] = upload.notification;
  }
  get isUploading() {
    return Object.values(this.internalUploads).some(item => item.progress < 100);
  }
  async isSessionUploading(sessionId) {
    return Promise.resolve(this.internalUploads[sessionId] ? this.internalUploads[sessionId].progress < 100 : false);
  }
  async trackUpload(uploadItem) {
    return Promise.resolve(uploadItem);
  }
  get uploads() {
    return this.internalUploads;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UploadStatus.prototype, "commitUpload", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action], UploadStatus.prototype, "isSessionUploading", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitUpload'
})], UploadStatus.prototype, "trackUpload", null);
UploadStatus = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], UploadStatus);
/* harmony default export */ __webpack_exports__["default"] = (UploadStatus);

/***/ }),

/***/ "./src/store/modules/user.ts":
/*!***********************************!*\
  !*** ./src/store/modules/user.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/user_service */ "./src/services/user_service.ts");




let User = class User extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "users", []);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalCapabilities", {});
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "internalRoles", []);
  }
  get usersList() {
    return this.users;
  }
  get capabilities() {
    return this.internalCapabilities;
  }
  get roles() {
    return this.internalRoles;
  }
  async archive(id) {
    await _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"].archiveUser(id, true);
    await this.context.dispatch('readUsersList');
  }
  commitUserPermissions(permissions) {
    if (!permissions) {
      return;
    }
    this.internalCapabilities = permissions.capabilities;
    this.internalRoles = permissions.roles;
  }
  commitUsersList(users) {
    this.users = users;
  }
  async delete(id) {
    await _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"].deleteUser(id);
    await this.context.dispatch('readUsersList');
  }
  async edit(userInfo) {
    await _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"].editUser(userInfo.id, userInfo);
    await this.context.dispatch('readUsersList');
  }
  async readUsersList(assignable = false) {
    return await _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"].readUsersList(assignable);
  }
  async readUserPermissions() {
    return await _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"].readUserPermissions();
  }
  async unarchive(id) {
    await _pictaccio_admin_gui_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"].archiveUser(id, false);
    await this.context.dispatch('readUsersList');
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], User.prototype, "archive", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], User.prototype, "commitUserPermissions", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Mutation], User.prototype, "commitUsersList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], User.prototype, "delete", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], User.prototype, "edit", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action)({
  commit: 'commitUsersList'
})], User.prototype, "readUsersList", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action)({
  commit: 'commitUserPermissions'
})], User.prototype, "readUserPermissions", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Action], User.prototype, "unarchive", null);
User = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_2__.Module)({
  namespaced: true
})], User);
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/store/modules/user_info.ts":
/*!****************************************!*\
  !*** ./src/store/modules/user_info.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/environment */ "./src/environment/index.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/services/user_info_service */ "./src/services/user_info_service.ts");





let UserInfo = class UserInfo extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userAvatar", void 0);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userName", {
      firstName: '',
      lastName: ''
    });
  }
  async changeAvatarImage(image) {
    await _pictaccio_admin_gui_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["default"].uploadAvatar(image);
  }
  async changeUserName(name) {
    await _pictaccio_admin_gui_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["default"].changeUserName(name);
  }
  async commitReadAvatar(data) {
    if (data) {
      this.userAvatar = _pictaccio_admin_gui_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + data;
    }
  }
  commitUserName(data) {
    if (data !== null) {
      this.userName = data;
    } else {
      this.userName = {
        firstName: '',
        lastName: ''
      };
    }
  }
  get hasAvatar() {
    return this.userAvatar !== undefined;
  }
  async readUserName() {
    return await _pictaccio_admin_gui_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["default"].readUserName();
  }
  get userNameInfo() {
    return this.userName;
  }
  async readAvatarPath() {
    return await _pictaccio_admin_gui_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["default"].readAvatar();
  }
  get userAvatarPath() {
    return this.userAvatar;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action], UserInfo.prototype, "changeAvatarImage", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action], UserInfo.prototype, "changeUserName", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], UserInfo.prototype, "commitReadAvatar", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Mutation], UserInfo.prototype, "commitUserName", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'commitUserName'
})], UserInfo.prototype, "readUserName", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Action)({
  commit: 'commitReadAvatar'
})], UserInfo.prototype, "readAvatarPath", null);
UserInfo = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_3__.Module)({
  namespaced: true
})], UserInfo);
/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./src/store/modules/user_preference.ts":
/*!**********************************************!*\
  !*** ./src/store/modules/user_preference.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/local_storage_service */ "./src/services/local_storage_service.ts");
/* harmony import */ var _pictaccio_admin_gui_services_user_sessions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/services/user_sessions_service */ "./src/services/user_sessions_service.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");





const STORAGE_DATETIME_KEY = 'date-time-info';
const DEFAULT_PREFERENCES = {
  dateFormat: 'yy/MM/dd',
  timeFormat: 'HH:mm',
  timezone: 'America/St_Johns',
  useRelativeTime: false
};
let UserPreference = class UserPreference extends vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.VuexModule {
  constructor(...args) {
    super(...args);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dateTimeInfo", _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].has(STORAGE_DATETIME_KEY) ? JSON.parse(_pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].get(STORAGE_DATETIME_KEY) ?? '{}') : DEFAULT_PREFERENCES);
    (0,_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userSessionInfo", {});
  }
  get dateFormat() {
    return this.dateTimeInfo.dateFormat;
  }
  get timeFormat() {
    return this.dateTimeInfo.timeFormat;
  }
  get timezone() {
    return this.dateTimeInfo.timezone;
  }
  get useRelativeTime() {
    return this.dateTimeInfo.useRelativeTime;
  }
  commitDateFormat(format) {
    if (format === undefined) {
      return;
    }
    this.dateTimeInfo.dateFormat = format;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
  }
  commitReload() {
    this.dateTimeInfo = JSON.parse(_pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].get(STORAGE_DATETIME_KEY) ?? JSON.stringify(DEFAULT_PREFERENCES));
  }
  commitTimeFormat(format) {
    if (format === undefined) {
      return;
    }
    this.dateTimeInfo.timeFormat = format;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
  }
  commitTimeZone(zone) {
    if (zone === undefined) {
      return;
    }
    this.dateTimeInfo.timezone = zone;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
  }
  commitUseRelativeTime(useRelativeTime) {
    if (useRelativeTime === undefined) {
      return;
    }
    this.dateTimeInfo.useRelativeTime = useRelativeTime;
    _pictaccio_admin_gui_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["default"].set(STORAGE_DATETIME_KEY, JSON.stringify(this.dateTimeInfo));
  }
  async readUserSession() {
    return await _pictaccio_admin_gui_services_user_sessions_service__WEBPACK_IMPORTED_MODULE_3__["default"].readUserSessions();
  }
  commitUserSession(data) {
    this.userSessionInfo = data;
  }
  get userSession() {
    return this.userSessionInfo;
  }
  async setTimeFormat(format) {
    return format;
  }
  async setDateFormat(format) {
    return format;
  }
  async setTimeZone(zone) {
    return zone;
  }
  async setUseRelativeTime(useRelativeTime) {
    return useRelativeTime;
  }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UserPreference.prototype, "commitDateFormat", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UserPreference.prototype, "commitReload", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UserPreference.prototype, "commitTimeFormat", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UserPreference.prototype, "commitTimeZone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UserPreference.prototype, "commitUseRelativeTime", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitUserSession'
})], UserPreference.prototype, "readUserSession", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Mutation], UserPreference.prototype, "commitUserSession", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitTimeFormat'
})], UserPreference.prototype, "setTimeFormat", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitDateFormat'
})], UserPreference.prototype, "setDateFormat", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitTimeZone'
})], UserPreference.prototype, "setTimeZone", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Action)({
  commit: 'commitUseRelativeTime'
})], UserPreference.prototype, "setUseRelativeTime", null);
UserPreference = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_4__.Module)({
  namespaced: true
})], UserPreference);
/* harmony default export */ __webpack_exports__["default"] = (UserPreference);

/***/ }),

/***/ "./src/store/modules/workflows.ts":
/*!****************************************!*\
  !*** ./src/store/modules/workflows.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/services/data_table_service */ "./src/services/data_table_service.ts");
/* harmony import */ var _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/store/modules/base_data_table */ "./src/store/modules/base_data_table.ts");




let Workflows = class Workflows extends _pictaccio_admin_gui_store_modules_base_data_table__WEBPACK_IMPORTED_MODULE_3__.BaseDataTable {
  constructor(module) {
    super(module);
    this.dataTableService = (0,_pictaccio_admin_gui_services_data_table_service__WEBPACK_IMPORTED_MODULE_2__.createDataTableService)({
      createEndpoint: 'workflow/create',
      deleteEndpoint: 'workflow/delete',
      readEndpoint: 'workflow/read',
      updateEndpoint: 'workflow/update'
    });
  }
};
Workflows = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__.Module)({
  namespaced: true
})], Workflows);
/* harmony default export */ __webpack_exports__["default"] = (Workflows);

/***/ }),

/***/ "./src/utils/bus.ts":
/*!**************************!*\
  !*** ./src/utils/bus.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bus: function() { return /* binding */ Bus; }
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.mjs");

const Bus = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/utils/error.ts":
/*!****************************!*\
  !*** ./src/utils/error.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForResponseError: function() { return /* binding */ checkForResponseError; },
/* harmony export */   handleResponseError: function() { return /* binding */ handleResponseError; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_create_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_create_error */ "./src/errors/datatable_create_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_delete_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_delete_error */ "./src/errors/datatable_delete_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_endpoint_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_endpoint_not_found_error */ "./src/errors/datatable_endpoint_not_found_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_read_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_read_error */ "./src/errors/datatable_read_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_datatable_update_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/datatable_update_error */ "./src/errors/datatable_update_error.ts");
/* harmony import */ var _pictaccio_admin_gui_errors_server_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pictaccio/admin-gui/errors/server_error */ "./src/errors/server_error.ts");






function checkForResponseError(data) {
  if (data.status === 'error') {
    throw new _pictaccio_admin_gui_errors_server_error__WEBPACK_IMPORTED_MODULE_5__.ServerError(`There was a server error${data.context ? `: ${data.context}` : ''}`);
  } else if (data.status === 'failed') {
    throw new Error(`The operation failed${data.context ? `: ${data.context}` : ''}`);
  } else if (data.status !== 'great-success') {
    throw new Error(`There was an unexpected response status: ${data.status}`);
  }
}
function handleResponseError(error) {
  if (error.constructor === _pictaccio_admin_gui_errors_server_error__WEBPACK_IMPORTED_MODULE_5__.ServerError || error.constructor === _pictaccio_admin_gui_errors_datatable_create_error__WEBPACK_IMPORTED_MODULE_0__.DatatableCreateError || error.constructor === _pictaccio_admin_gui_errors_datatable_update_error__WEBPACK_IMPORTED_MODULE_4__.DatatableUpdateError || error.constructor === _pictaccio_admin_gui_errors_datatable_delete_error__WEBPACK_IMPORTED_MODULE_1__.DatatableDeleteError || error.constructor === _pictaccio_admin_gui_errors_datatable_read_error__WEBPACK_IMPORTED_MODULE_3__.DatatableReadError || error.constructor === _pictaccio_admin_gui_errors_datatable_endpoint_not_found_error__WEBPACK_IMPORTED_MODULE_2__.DatatableEndpointNotFoundError) {
    throw error;
  } else if (error.message === 'SyntaxError: Unexpected end of JSON input') {
    throw new _pictaccio_admin_gui_errors_server_error__WEBPACK_IMPORTED_MODULE_5__.ServerError('The server did not return a valid response');
  }
  throw error;
}

/***/ }),

/***/ "./src/utils/global_prompt.ts":
/*!************************************!*\
  !*** ./src/utils/global_prompt.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalPrompt: function() { return /* binding */ globalPrompt; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/store */ "./src/store/index.ts");

function globalPrompt(promptInfo) {
  return _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_0__.store.dispatch('Prompt/show', promptInfo);
}

/***/ }),

/***/ "./src/utils/global_toast.ts":
/*!***********************************!*\
  !*** ./src/utils/global_toast.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalToastLevels: function() { return /* binding */ GlobalToastLevels; },
/* harmony export */   globalToast: function() { return /* binding */ globalToast; }
/* harmony export */ });
/* harmony import */ var _pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pictaccio/admin-gui/store */ "./src/store/index.ts");
/* harmony import */ var _pictaccio_admin_gui_utils_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pictaccio/admin-gui/utils/bus */ "./src/utils/bus.ts");


const GlobalToastLevels = ['error', 'warning', 'success', 'info'];
function globalToast(message, level) {
  if (!_pictaccio_admin_gui_store__WEBPACK_IMPORTED_MODULE_0__.store.getters['App/online']) {
    return;
  }
  _pictaccio_admin_gui_utils_bus__WEBPACK_IMPORTED_MODULE_1__.Bus.emit('global.toast', {
    message,
    level
  });
}

/***/ }),

/***/ "./src/utils/is_file.ts":
/*!******************************!*\
  !*** ./src/utils/is_file.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFile: function() { return /* binding */ isFile; }
/* harmony export */ });
function isFile(object) {
  return object instanceof File;
}

/***/ })

}]);
//# sourceMappingURL=src_store_index_ts.worker.js.map