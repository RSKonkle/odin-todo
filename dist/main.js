/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* universal style sheet */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    \r\n    /* establish color variables */\r\n    --frosted-sage: #90a399;\r\n    --dark-frosted-sage: #3c4440;\r\n    --foggy-pearl: #DDE4E1;\r\n}\r\n\r\n#content {\r\n    height: calc(100vh - 70px);\r\n    width: calc(100vw - 300px);\r\n    padding: 20px;\r\n    position: fixed;\r\n    right: 0;\r\n    background-color: var(--foggy-pearl);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#content h2 {\r\n    font-size: 40px;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    color: var(--dark-frosted-sage);\r\n    border-bottom: 1px solid var(--dark-frosted-sage);\r\n}\r\n\r\n#nav {\r\n    height: calc(100vh - 70px);\r\n    width: 300px;\r\n    padding: 20px;\r\n    background: var(--dark-frosted-sage);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#nav button {\r\n    height: 7%;\r\n    width: 60%;\r\n    font-size: 18px;\r\n    letter-spacing: 1px;\r\n    border-radius: 20px;\r\n    border: solid 2px;\r\n    cursor: pointer;\r\n    background-color: var(--frosted-sage);\r\n    color: var(--foggy-pearl);\r\n}\r\n\r\n#title {\r\n    font-size: 40px;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 20%;\r\n    color: var(--foggy-pearl);\r\n}\r\n\r\n#task-list {\r\n    margin-top: 25%;\r\n}\r\n\r\nnav h3 {\r\n    font-size: 20px;\r\n    width: 280px;\r\n    padding-bottom: 5px;\r\n    text-align: center;\r\n    color: var(--foggy-pearl);\r\n    border-bottom: 1px solid var(--foggy-pearl);\r\n}\r\n\r\nul {\r\n    color: var(--foggy-pearl);\r\n    list-style-type: disc;\r\n    padding: 20px 20px;\r\n    font-size: 18px;\r\n    list-style: none;\r\n}\r\n\r\nli {\r\n    cursor: pointer;\r\n    padding: 5px 0;\r\n}\r\n\r\n.list-item-wrap {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin: 15px 0;\r\n}\r\n\r\n.remove-icon {\r\n    cursor: pointer;\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.remove-icon:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.more-icon {\r\n    padding-right: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.more-icon:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nfooter {\r\n    height: 70px;\r\n    width: 100vw;\r\n    font-size: 20px;\r\n    position: fixed;\r\n    bottom: 0;\r\n    background-color: var(--frosted-sage);\r\n    color: var(--dark-frosted-sage);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#task-container {\r\n    width: 40%;\r\n}\r\n\r\n.task-meta {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n.task-meta p {\r\n    margin: 0;\r\n    padding: 5px 0;\r\n}\r\n\r\n\r\n/* TEMP TASK LIST STYLES */\r\n.new-task input,\r\n.new-task select {\r\n    width: 100%;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding: 10px;\r\n    border-bottom: 1px solid #ccc;\r\n    color: var(--dark-frosted-sage);\r\n}\r\n\r\n.task input {\r\n    border: none;\r\n    outline: none;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    background-color: inherit;\r\n}\r\n\r\n.task> {\r\n    background-color: inherit;\r\n}\r\n\r\n.remove-task {\r\n    padding: 4px 10px;\r\n}\r\n\r\n.task-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.task-header h3 {\r\n    margin: 0;\r\n    flex-grow: 1; /* Ensures title takes available space */\r\n}\r\n\r\n.remove-task {\r\n    background: none;\r\n    border: none;\r\n    color: red;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-meta {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n.task-meta p {\r\n    margin: 0;\r\n    padding: 5px 0;\r\n}\r\n\r\n.task-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.task-header input {\r\n    flex-grow: 1;\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\n.edit-task-description {\r\n    width: 100%;\r\n    font-size: 14px;\r\n    padding: 5px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    background-color: inherit;\r\n}\r\n\r\n.task-meta {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 10px;\r\n    font-size: 14px;\r\n}\r\n\r\n.task-meta select, .task-meta input {\r\n    flex: 1;\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    background-color: inherit;\r\n}\r\n\r\nfooter a {\r\n    height: 30px;\r\n    width: 30px;\r\n    margin-left: 10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadNav: () => (/* binding */ loadNav),\n/* harmony export */   refreshLists: () => (/* binding */ refreshLists)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _images_icons8_remove_50_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons8-remove-50.png */ \"./src/images/icons8-remove-50.png\");\n/* harmony import */ var _images_icons8_removeDark_50_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons8-removeDark-50.png */ \"./src/images/icons8-removeDark-50.png\");\n/* harmony import */ var _images_icons8_more_30_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons8-more-30.png */ \"./src/images/icons8-more-30.png\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n// domManager.js - generates landing page content, handles \r\n\r\n\r\n\r\n\r\n\r\n\r\n// Initialize body & content sections\r\nconst content = document.getElementById(\"content\");\r\n\r\n// Load side-nav and refresh content\r\nfunction loadNav() {\r\n    console.log(\"loadNav is running...\");\r\n    // Create left-fixed page nav\r\n    const nav = document.createElement(\"nav\");\r\n    nav.id = \"nav\";\r\n    \r\n    // Create page title at top of nav\r\n    const title = document.createElement(\"h1\");\r\n    title.id = \"title\";\r\n    title.textContent = \"Task Master\";\r\n\r\n    // Create 'Add List' button in nav\r\n    const newListButton = document.createElement(\"button\");\r\n    newListButton.id = \"new-list-btn\";\r\n    newListButton.textContent = \"+ New List\";\r\n\r\n    // Create 'task list' in nav\r\n    const taskListWrap = document.createElement(\"div\");\r\n    taskListWrap.id = \"task-list\";\r\n    const taskListHeader = document.createElement(\"h3\");\r\n    taskListHeader.textContent = \"Your Lists\";\r\n    const taskList = document.createElement(\"ul\");\r\n    const initialList = document.createElement(\"li\");\r\n    initialList.textContent = \"My First List\";\r\n\r\n    // Append children to task list wrap\r\n    taskList.appendChild(initialList);\r\n    taskListWrap.appendChild(taskListHeader);\r\n    taskListWrap.appendChild(taskList);\r\n\r\n    // Append children to nav\r\n    nav.appendChild(title);\r\n    nav.appendChild(newListButton);\r\n    nav.appendChild(taskListWrap);\r\n\r\n    // Append nav to body\r\n    document.body.appendChild(nav);\r\n\r\n    document.addEventListener(\"DOMContentLoaded\", () => {\r\n        console.log(\"Loading stored lists...\")\r\n        refreshLists();\r\n    });\r\n\r\n    console.log(\"loadHome functions successfully.\");\r\n}\r\n\r\n// Create/refresh list items in nav, add even listeners\r\nfunction refreshLists() {\r\n    const taskList = document.querySelector(\"#task-list ul\");\r\n    taskList.innerHTML = \"\";\r\n\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLists)().forEach((list, index) => {\r\n        const listRemove = document.createElement(\"img\");\r\n        listRemove.src = _images_icons8_remove_50_png__WEBPACK_IMPORTED_MODULE_1__;\r\n        listRemove.classList.add(\"remove-icon\");\r\n        listRemove.dataset.index = index;\r\n        listRemove.addEventListener(\"click\", () => {\r\n            const lists = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLists)();\r\n            lists.splice(index, 1);\r\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n            refreshLists();\r\n        });\r\n        const listItem = document.createElement(\"li\");\r\n        listItem.textContent = list.name;\r\n        listItem.dataset.index = index;\r\n        listItem.addEventListener('click', () => loadTaskList(index));\r\n\r\n        const listItemWrap = document.createElement(\"div\");\r\n        listItemWrap.classList.add(\"list-item-wrap\");\r\n        listItemWrap.appendChild(listRemove);\r\n        listItemWrap.appendChild(listItem);\r\n\r\n        taskList.appendChild(listItemWrap);\r\n    });\r\n}\r\n\r\nfunction loadTaskList(index) {\r\n    const lists = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLists)();\r\n    const selectedList = lists[index];\r\n\r\n    content.innerHTML = `<h2>${selectedList.name}</h2>`;\r\n\r\n    const taskContainer = document.createElement(\"div\");\r\n    taskContainer.id = \"task-container\";\r\n\r\n    // Display existing tasks\r\n    selectedList.tasks.forEach((task, taskIndex) => {\r\n        const taskElement = document.createElement(\"div\");\r\n        taskElement.classList.add(\"task\");\r\n\r\n        // Build task meta fields conditionally\r\n        let taskMetaHTML = \"\";\r\n        if (task.dueDate) {\r\n            taskMetaHTML += `<p>Due: ${task.dueDate}</p>`;\r\n        }\r\n        if (task.priority && task.priority !== \"None\") {\r\n            taskMetaHTML += `<p>Priority: ${task.priority}</p>`;\r\n        }\r\n\r\n        taskElement.innerHTML = `\r\n        <div class=\"task-header\">\r\n            <h3>${task.title}</h3>\r\n            <img class='more-icon' src='${_images_icons8_more_30_png__WEBPACK_IMPORTED_MODULE_3__}' data-index=\"${taskIndex}\">\r\n            <img class='remove-icon' src='${_images_icons8_removeDark_50_png__WEBPACK_IMPORTED_MODULE_2__}' data-index=\"${taskIndex}\">\r\n        </div>\r\n        <p>${task.description || \"\"}</p>\r\n        ${taskMetaHTML ? `<div class=\"task-meta\">${taskMetaHTML}</div>` : \"\"}\r\n        `;\r\n\r\n        // Remove Task Event Listener\r\n        taskElement.querySelector(\".remove-icon\").addEventListener(\"click\", () => {\r\n            selectedList.tasks.splice(taskIndex, 1);\r\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n            loadTaskList(index);\r\n        });\r\n\r\n        // Edit Task Event Listener\r\n        taskElement.querySelector(\".more-icon\").addEventListener(\"click\", () => {\r\n            enableTaskEditing(taskElement, selectedList, taskIndex, index);\r\n        });\r\n\r\n        taskContainer.appendChild(taskElement);\r\n    });\r\n\r\n    // **Restore the \"+ add task here...\" input**\r\n    const addTaskInput = document.createElement(\"div\");\r\n    addTaskInput.classList.add(\"task\", \"new-task\");\r\n    addTaskInput.innerHTML = `\r\n        <input type=\"text\" id=\"new-task-title\" placeholder=\"+ add task here...\" />\r\n        <div id=\"task-details\" class=\"hidden\">\r\n            <input type=\"text\" id=\"new-task-description\" placeholder=\"Description (optional)\" />\r\n            <div class=\"task-meta\">\r\n                <input type=\"date\" id=\"new-task-dueDate\" />\r\n                <select id=\"new-task-priority\">\r\n                    <option value=\"\">Select Priority</option>\r\n                    <option value=\"Low\">Low Priority</option>\r\n                    <option value=\"Medium\">Medium Priority</option>\r\n                    <option value=\"High\">High Priority</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n    const titleInput = addTaskInput.querySelector(\"#new-task-title\");\r\n    const detailsSection = addTaskInput.querySelector(\"#task-details\");\r\n\r\n    // Show extra fields when user types in title\r\n    titleInput.addEventListener(\"input\", () => {\r\n        if (titleInput.value.trim().length > 0) {\r\n            detailsSection.classList.remove(\"hidden\");\r\n        } else {\r\n            detailsSection.classList.add(\"hidden\");\r\n        }\r\n    });\r\n\r\n    titleInput.addEventListener(\"keypress\", (event) => {\r\n        if (event.key === \"Enter\") {\r\n            event.preventDefault(); // Prevents accidental form submission\r\n            saveNewTask(index);\r\n        }\r\n    });\r\n\r\n    // Apply blur event to ALL inputs\r\n    [titleInput, \r\n     addTaskInput.querySelector(\"#new-task-description\"), \r\n     addTaskInput.querySelector(\"#new-task-dueDate\"), \r\n     addTaskInput.querySelector(\"#new-task-priority\")\r\n    ].forEach((input) => {\r\n        input.addEventListener(\"blur\", () => {\r\n            setTimeout(() => {\r\n                if (!addTaskInput.contains(document.activeElement)) {\r\n                    saveNewTask(index);\r\n                }\r\n            }, 100);\r\n        });\r\n    });\r\n\r\n    taskContainer.appendChild(addTaskInput);\r\n    content.appendChild(taskContainer);\r\n}\r\n\r\nfunction enableTaskEditing(taskElement, selectedList, taskIndex, listIndex) {\r\n    const task = selectedList.tasks[taskIndex];\r\n\r\n    // Replace static task display with input fields\r\n    taskElement.innerHTML = `\r\n        <div class=\"task-header\">\r\n            <input type=\"text\" class=\"edit-task-title\" value=\"${task.title}\">\r\n            <img class='save-icon' src='${_images_icons8_more_30_png__WEBPACK_IMPORTED_MODULE_3__}'>\r\n            <img class='remove-icon' src='${_images_icons8_removeDark_50_png__WEBPACK_IMPORTED_MODULE_2__}'>\r\n        </div>\r\n        <textarea class=\"edit-task-description\" placeholder=\"Description...\">${task.description || \"\"}</textarea>\r\n        <div class=\"task-meta\">\r\n            <input type=\"date\" class=\"edit-task-dueDate\" value=\"${task.dueDate || \"\"}\">\r\n            <select class=\"edit-task-priority\">\r\n                <option value=\"\">Select Priority</option>\r\n                <option value=\"Low\" ${task.priority === \"Low\" ? \"selected\" : \"\"}>Low</option>\r\n                <option value=\"Medium\" ${task.priority === \"Medium\" ? \"selected\" : \"\"}>Medium</option>\r\n                <option value=\"High\" ${task.priority === \"High\" ? \"selected\" : \"\"}>High</option>\r\n            </select>\r\n        </div>\r\n    `;\r\n\r\n    // Add Save Event Listener\r\n    taskElement.querySelector(\".save-icon\").addEventListener(\"click\", () => {\r\n        saveEditedTask(taskElement, selectedList, taskIndex, listIndex);\r\n    });\r\n\r\n    // Save Task When User Clicks Outside (Blur Event)\r\n    taskElement.addEventListener(\"focusout\", () => {\r\n        setTimeout(() => {\r\n            if (!taskElement.contains(document.activeElement)) {\r\n                saveEditedTask(taskElement, selectedList, taskIndex, listIndex);\r\n            }\r\n        }, 100);\r\n    });\r\n}\r\n\r\nfunction saveNewTask(listIndex) {\r\n    const lists = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLists)();\r\n    const selectedList = lists[listIndex];\r\n\r\n    const titleInput = document.getElementById(\"new-task-title\");\r\n    const title = titleInput.value.trim();\r\n    const description = document.getElementById(\"new-task-description\").value.trim();\r\n    const dueDate = document.getElementById(\"new-task-dueDate\").value;\r\n    const priority = document.getElementById(\"new-task-priority\").value;\r\n\r\n    if (title === \"\") return; // Don't save if empty\r\n\r\n    // Create and add new task\r\n    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](title, description, dueDate, priority);\r\n    selectedList.tasks.push(newTask);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n\r\n    // Clear input fields immediately to prevent duplicate triggers\r\n    titleInput.value = \"\";\r\n    document.getElementById(\"new-task-description\").value = \"\";\r\n    document.getElementById(\"new-task-dueDate\").value = \"\";\r\n    document.getElementById(\"new-task-priority\").value = \"Low\";\r\n\r\n    // Hide task details again\r\n    document.getElementById(\"task-details\").classList.add(\"hidden\");\r\n\r\n    // Reload the list to show the new task\r\n    loadTaskList(listIndex);\r\n}\r\n\r\nfunction saveEditedTask(taskElement, selectedList, taskIndex, listIndex) {\r\n    const task = selectedList.tasks[taskIndex];\r\n\r\n    // Get new values from input fields\r\n    const newTitle = taskElement.querySelector(\".edit-task-title\").value.trim();\r\n    const newDescription = taskElement.querySelector(\".edit-task-description\").value.trim();\r\n    const newDueDate = taskElement.querySelector(\".edit-task-dueDate\").value || null;\r\n    const newPriority = taskElement.querySelector(\".edit-task-priority\").value || null;\r\n\r\n    if (newTitle === \"\") return; // Don't allow empty title\r\n\r\n    // Update the task\r\n    task.title = newTitle;\r\n    task.description = newDescription;\r\n    task.dueDate = newDueDate;\r\n    task.priority = newPriority;\r\n\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();\r\n    loadTaskList(listIndex);\r\n}\r\n\r\n// Function to add a new list dynamically\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    document.getElementById('new-list-btn').addEventListener('click', () => {\r\n        const newListName = prompt('Enter new list name:');\r\n        if (newListName) {\r\n          (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.addNewList)(newListName);\r\n          refreshLists();\r\n        }\r\n\r\n        const lists = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLists)();\r\n        const newIndex = lists.length - 1;\r\n        loadTaskList(newIndex);\r\n      });\r\n      \r\n      document.addEventListener('DOMContentLoaded', refreshLists);\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/domHandler.js?");

/***/ }),

/***/ "./src/images/icons8-more-30.png":
/*!***************************************!*\
  !*** ./src/images/icons8-more-30.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7818e63a2b1160f90a4.png\";\n\n//# sourceURL=webpack:///./src/images/icons8-more-30.png?");

/***/ }),

/***/ "./src/images/icons8-remove-50.png":
/*!*****************************************!*\
  !*** ./src/images/icons8-remove-50.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b8aee3bda6da79e5bb1.png\";\n\n//# sourceURL=webpack:///./src/images/icons8-remove-50.png?");

/***/ }),

/***/ "./src/images/icons8-removeDark-50.png":
/*!*********************************************!*\
  !*** ./src/images/icons8-removeDark-50.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d9358cc44bbdd69bac9.png\";\n\n//# sourceURL=webpack:///./src/images/icons8-removeDark-50.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager.js */ \"./src/taskManager.js\");\n/* harmony import */ var _domHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler.js */ \"./src/domHandler.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// import scripts\r\n\r\n\r\n\r\n\r\n//import styles\r\n\r\n\r\n(0,_domHandler_js__WEBPACK_IMPORTED_MODULE_2__.loadNav)();\r\nconsole.log(\"index.js running successfully.\");\r\n\r\n// consider new font for title\r\n// consider module that creates pop-up introduction for first-time visitors\r\n// consider offering 'choice of nav color' to personalize page\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewList: () => (/* binding */ addNewList),\n/* harmony export */   getLists: () => (/* binding */ getLists),\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager.js */ \"./src/taskManager.js\");\n// storage.js - for handling local storage of lists and tasks\r\n\r\n\r\nlet lists = JSON.parse(localStorage.getItem('taskLists'))?.map(list => new _taskManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](list.name, list.tasks)) || [];\r\n\r\nfunction saveToLocalStorage() {\r\n    localStorage.setItem('taskLists', JSON.stringify(lists));\r\n}\r\n\r\nfunction loadFromLocalStorage() {\r\n    lists = JSON.parse(localStorage.getItem('taskLists'))?.map(list => new _taskManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](list.name, list.tasks)) || [];\r\n    return lists;\r\n}\r\n\r\nfunction addNewList(name) {\r\n    const newList = new _taskManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\r\n    lists.push(newList);\r\n    saveToLocalStorage();\r\n}\r\n\r\nfunction getLists() {\r\n    return lists;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n// task.js - creates Task class for constructing tasks\r\n\r\nclass Task {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n    };\r\n}\r\n\r\nconsole.log(\"task.js running successfully.\")\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n// taskManager.js - for task handling (adding, removing, retrieving, saving)\r\n\r\n\r\nclass TaskList {\r\n    constructor(name, tasks = []) {\r\n        this.name = name;\r\n        this.tasks = tasks.map(task => new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task.title, task.description, task.dueDate, task.priority));\r\n    }\r\n    \r\n    addTask(title, description, dueDate, priority) {\r\n        const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority);\r\n        this.tasks.push(newTask);\r\n        saveToLocalStorage();\r\n    }\r\n\r\n    removeTask(index) {\r\n        this.tasks.splice(index, 1);\r\n        saveToLocalStorage();\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\nconsole.log(\"taskManager.js running successfully.\")\n\n//# sourceURL=webpack:///./src/taskManager.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;