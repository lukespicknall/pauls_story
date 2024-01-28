/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

#template-page{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 239, 89);
}

#template-text{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    color: rgb(80, 80, 230);
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#image-section {
    width: 100%;
    height: 454px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#current-image {
    max-width: 100%;
    max-height: 100%;
    opacity: 100;
    transition: ease-in-out 2s;
}

#slide-frame {
    display: flex;
    justify-self: center;
    align-items: center;
    max-width: 75%;
    height: 454px;
    max-height: 454px;
        transform: ease-in-out 2s;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,iBAAiB;QACb,yBAAyB;AACjC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#template-page{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(241, 239, 89);\n}\n\n#template-text{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 50px;\n    color: rgb(80, 80, 230);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#image-section {\n    width: 100%;\n    height: 454px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#current-image {\n    max-width: 100%;\n    max-height: 100%;\n    opacity: 100;\n    transition: ease-in-out 2s;\n}\n\n#slide-frame {\n    display: flex;\n    justify-self: center;\n    align-items: center;\n    max-width: 75%;\n    height: 454px;\n    max-height: 454px;\n        transform: ease-in-out 2s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_dad1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/dad1.jpg */ "./src/images/dad1.jpg");
/* harmony import */ var _images_dad2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/dad2.jpg */ "./src/images/dad2.jpg");
/* harmony import */ var _images_dad3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dad3.jpg */ "./src/images/dad3.jpg");
/* harmony import */ var _images_dad4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dad4.jpg */ "./src/images/dad4.jpg");
/* harmony import */ var _images_dad5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dad5.jpg */ "./src/images/dad5.jpg");
/* harmony import */ var _images_dad6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/dad6.jpg */ "./src/images/dad6.jpg");
/* harmony import */ var _images_dad7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/dad7.jpg */ "./src/images/dad7.jpg");
/* harmony import */ var _images_dad8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/dad8.jpg */ "./src/images/dad8.jpg");
/* harmony import */ var _images_dad9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/dad9.jpg */ "./src/images/dad9.jpg");
/* harmony import */ var _images_dad10_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/dad10.jpg */ "./src/images/dad10.jpg");
/* harmony import */ var _images_dad11_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/dad11.jpg */ "./src/images/dad11.jpg");
/* harmony import */ var _images_dad12_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/dad12.jpg */ "./src/images/dad12.jpg");
/* harmony import */ var _images_dad13_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/dad13.jpg */ "./src/images/dad13.jpg");
/* harmony import */ var _images_dad14_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/dad14.jpg */ "./src/images/dad14.jpg");
/* harmony import */ var _images_dad15_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/dad15.jpg */ "./src/images/dad15.jpg");
/* harmony import */ var _images_dad16_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/dad16.jpg */ "./src/images/dad16.jpg");
/* harmony import */ var _images_dad17_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/dad17.jpg */ "./src/images/dad17.jpg");
/* harmony import */ var _images_dad18_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/dad18.jpg */ "./src/images/dad18.jpg");
/* harmony import */ var _images_dad19_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/dad19.jpg */ "./src/images/dad19.jpg");



















// import Pic20 from './images/dad20.jpg';
// import Pic21 from './images/dad21.jpg';
// import Pic22 from './images/dad22.jpg';
// import Pic23 from './images/dad23.jpg';
// import Pic24 from './images/dad24.jpg';
// import Pic25 from './images/dad25.jpg';
// import Pic26 from './images/dad26.jpg';
// import Pic27 from './images/dad27.jpg';
// import Pic28 from './images/dad28.jpg';
// import Pic29 from './images/dad29.jpg';
// import Pic30 from './images/dad30.jpg';
// import Pic31 from './images/dad31.jpg';
// import Pic32 from './images/dad32.jpg';
// import Pic33 from './images/dad33.jpg';
// import Pic34 from './images/dad34.jpg';
// import Pic35 from './images/dad35.jpg';
// import Pic36 from './images/dad36.jpg';
// import Pic37 from './images/dad37.jpg';
// import Pic38 from './images/dad38.jpg';
// import Pic39 from './images/dad39.jpg';
// import Pic40 from './images/dad40.jpg';
// import Pic41 from './images/dad41.jpg';
// import Pic42 from './images/dad42.jpg';
// import Pic43 from './images/dad43.jpg';
// import Pic44 from './images/dad44.jpg';
// import Pic45 from './images/dad45.jpg';
// import Pic46 from './images/dad46.jpg';
// import Pic47 from './images/dad47.jpg';
// import Pic48 from './images/dad48.jpg';
// import Pic49 from './images/dad49.jpg';
// import Pic50 from './images/dad50.jpg';
// import Pic51 from './images/dad51.jpg';
// import Pic52 from './images/dad52.jpg';
// import Pic53 from './images/dad53.jpg';
// import Pic54 from './images/dad54.jpg';
// import Pic55 from './images/dad55.jpg';
// import Pic56 from './images/dad56.jpg';
// import Pic57 from './images/dad57.jpg';
// import Pic58 from './images/dad58.jpg';
// import Pic59 from './images/dad59.jpg';
// import Pic60 from './images/dad60.jpg';
// import Pic61 from './images/dad61.jpg';
// import Pic62 from './images/dad62.jpg';
// import Pic63 from './images/dad63.jpg';
// import Pic64 from './images/dad64.jpg';
// import Pic65 from './images/dad65.jpg';
// import Pic66 from './images/dad66.jpg';
// import Pic67 from './images/dad67.jpg';
// import Pic68 from './images/dad68.jpg';
// import Pic69 from './images/dad69.jpg';
// import Pic70 from './images/dad70.jpg';
// import Pic71 from './images/dad71.jpg';
// import Pic72 from './images/dad72.jpg';
// import Pic73 from './images/dad73.jpg';
// import Pic74 from './images/dad74.jpg';
// import Pic75 from './images/dad75.jpg';
// import Pic76 from './images/dad76.jpg';
// import Pic77 from './images/dad77.jpg';
// import Pic78 from './images/dad78.jpg';
// import Pic79 from './images/dad79.jpg';
// import Pic80 from './images/dad80.jpg';
// import Pic81 from './images/dad81.jpg';
// import Pic82 from './images/dad82.jpg';
// import Pic83 from './images/dad83.jpg';
// import Pic84 from './images/dad84.jpg';
// import Pic85 from './images/dad85.jpg';
// import Pic86 from './images/dad86.jpg';
// import Pic87 from './images/dad87.jpg';
// import Pic88 from './images/dad88.jpg';
// import Pic89 from './images/dad89.jpg';
// import Pic90 from './images/dad90.jpg';
// import Pic91 from './images/dad91.jpg';
// import Pic92 from './images/dad92.jpg';
// import Pic93 from './images/dad93.jpg';
// import Pic94 from './images/dad94.jpg';
// import Pic95 from './images/dad95.jpg';
// import Pic96 from './images/dad96.jpg';
// import Pic97 from './images/dad97.jpg';
// import Pic98 from './images/dad98.jpg';
// import Pic99 from './images/dad99.jpg';
// import Pic100 from './images/dad100.jpg';
// import Pic101 from './images/dad101.jpg';
// import Pic102 from './images/dad102.jpg';
// import Pic103 from './images/dad103.jpg';
// import Pic104 from './images/dad104.jpg';
// import Pic105 from './images/dad105.jpg';
// import Pic106 from './images/dad106.jpg';
// import Pic107 from './images/dad107.jpg';
// import Pic108 from './images/dad108.jpg';
// import Pic109 from './images/dad109.jpg';
// import Pic110 from './images/dad110.jpg';
// import Pic111 from './images/dad111.jpg';
// import Pic112 from './images/dad112.jpg';
// import Pic113 from './images/dad113.jpg';
// import Pic114 from './images/dad114.jpg';
// import Pic115 from './images/dad115.jpg';
// import Pic116 from './images/dad116.jpg';
// import Pic117 from './images/dad117.jpg';
// import Pic118 from './images/dad118.jpg';
// import Pic119 from './images/dad119.jpg';
// import Pic120 from './images/dad120.jpg';
// import Pic121 from './images/dad121.jpg';
// import Pic122 from './images/dad122.jpg';
// import Pic123 from './images/dad123.jpg';
// import Pic124 from './images/dad124.jpg';
// import Pic125 from './images/dad125.jpg';
// import Pic126 from './images/dad126.jpg';
// import Pic127 from './images/dad127.jpg';
// import Pic128 from './images/dad128.jpg';
// import Pic129 from './images/dad129.jpg';
// import Pic130 from './images/dad130.jpg';
// import Pic131 from './images/dad131.jpg';
// import Pic132 from './images/dad132.jpg';
// import Pic133 from './images/dad133.jpg';
// import Pic134 from './images/dad134.jpg';
// import Pic135 from './images/dad135.jpg';
// import Pic136 from './images/dad136.jpg';
// import Pic137 from './images/dad137.jpg';
// import Pic138 from './images/dad138.jpg';
// import Pic139 from './images/dad139.jpg';
// import Pic140 from './images/dad140.jpg';
// import Pic141 from './images/dad141.jpg';
// import Pic142 from './images/dad142.jpg';
// import Pic143 from './images/dad143.jpg';
// import Pic144 from './images/dad144.jpg';
// import Pic145 from './images/dad145.jpg';
// import Pic146 from './images/dad146.jpg';
// import Pic147 from './images/dad147.jpg';
// import Pic148 from './images/dad148.jpg';
// import Pic149 from './images/dad149.jpg';
// import Pic150 from './images/dad150.jpg';
// import Pic151 from './images/dad151.jpg';
// import Pic152 from './images/dad152.jpg';
// import Pic153 from './images/dad153.jpg';
// import Pic154 from './images/dad154.jpg';
// import Pic155 from './images/dad155.jpg';
// import Pic156 from './images/dad156.jpg';
// import Pic157 from './images/dad157.jpg';
// import Pic158 from './images/dad158.jpg';
// import Pic159 from './images/dad159.jpg';

const images = [];

const dad1 = new Image();
dad1.src = _images_dad1_jpg__WEBPACK_IMPORTED_MODULE_0__;
images.push(dad1);

const dad2 = new Image();
dad2.src = _images_dad2_jpg__WEBPACK_IMPORTED_MODULE_1__;
images.push(dad2);

const dad3 = new Image();
dad3.src = _images_dad3_jpg__WEBPACK_IMPORTED_MODULE_2__;
images.push(dad3);

const dad4 = new Image();
dad4.src = _images_dad4_jpg__WEBPACK_IMPORTED_MODULE_3__;
images.push(dad4);

const dad5 = new Image();
dad5.src = _images_dad5_jpg__WEBPACK_IMPORTED_MODULE_4__;
images.push(dad5);

const dad6 = new Image();
dad6.src = _images_dad6_jpg__WEBPACK_IMPORTED_MODULE_5__;
images.push(dad6);

const dad7 = new Image();
dad7.src = _images_dad7_jpg__WEBPACK_IMPORTED_MODULE_6__;
images.push(dad7);

const dad8 = new Image();
dad8.src = _images_dad8_jpg__WEBPACK_IMPORTED_MODULE_7__;
images.push(dad8);

const dad9 = new Image();
dad9.src = _images_dad9_jpg__WEBPACK_IMPORTED_MODULE_8__;
images.push(dad9);

const dad10 = new Image();
dad10.src = _images_dad10_jpg__WEBPACK_IMPORTED_MODULE_9__;
images.push(dad10);

const dad11 = new Image();
dad11.src = _images_dad11_jpg__WEBPACK_IMPORTED_MODULE_10__;
images.push(dad11);

const dad12 = new Image();
dad12.src = _images_dad12_jpg__WEBPACK_IMPORTED_MODULE_11__;
images.push(dad12);

const dad13 = new Image();
dad13.src = _images_dad13_jpg__WEBPACK_IMPORTED_MODULE_12__;
images.push(dad13);

const dad14 = new Image();
dad14.src = _images_dad14_jpg__WEBPACK_IMPORTED_MODULE_13__;
images.push(dad14);

const dad15 = new Image();
dad15.src = _images_dad15_jpg__WEBPACK_IMPORTED_MODULE_14__;
images.push(dad15);

const dad16 = new Image();
dad16.src = _images_dad16_jpg__WEBPACK_IMPORTED_MODULE_15__;
images.push(dad16);

const dad17 = new Image();
dad17.src = _images_dad17_jpg__WEBPACK_IMPORTED_MODULE_16__;
images.push(dad17);

const dad18 = new Image();
dad18.src = _images_dad18_jpg__WEBPACK_IMPORTED_MODULE_17__;
images.push(dad18);

const dad19 = new Image();
dad19.src = _images_dad19_jpg__WEBPACK_IMPORTED_MODULE_18__;
images.push(dad19);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);


/***/ }),

/***/ "./src/images/dad1.jpg":
/*!*****************************!*\
  !*** ./src/images/dad1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3caad7cfb4ee3e102721.jpg";

/***/ }),

/***/ "./src/images/dad10.jpg":
/*!******************************!*\
  !*** ./src/images/dad10.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99cdeeac57650b9c0902.jpg";

/***/ }),

/***/ "./src/images/dad11.jpg":
/*!******************************!*\
  !*** ./src/images/dad11.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc3b6dfa76c5179402a3.jpg";

/***/ }),

/***/ "./src/images/dad12.jpg":
/*!******************************!*\
  !*** ./src/images/dad12.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78b793ee5da9980512a6.jpg";

/***/ }),

/***/ "./src/images/dad13.jpg":
/*!******************************!*\
  !*** ./src/images/dad13.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ab4204b69bdd5021146.jpg";

/***/ }),

/***/ "./src/images/dad14.jpg":
/*!******************************!*\
  !*** ./src/images/dad14.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b1cf3d28ed769e91b40.jpg";

/***/ }),

/***/ "./src/images/dad15.jpg":
/*!******************************!*\
  !*** ./src/images/dad15.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7221c2612626ac2cf33.jpg";

/***/ }),

/***/ "./src/images/dad16.jpg":
/*!******************************!*\
  !*** ./src/images/dad16.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3c5f1f2f300669fcefe.jpg";

/***/ }),

/***/ "./src/images/dad17.jpg":
/*!******************************!*\
  !*** ./src/images/dad17.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b256bbfa2630e1fa0368.jpg";

/***/ }),

/***/ "./src/images/dad18.jpg":
/*!******************************!*\
  !*** ./src/images/dad18.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a87cfbac5370328361a5.jpg";

/***/ }),

/***/ "./src/images/dad19.jpg":
/*!******************************!*\
  !*** ./src/images/dad19.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8945610be226a566cdc1.jpg";

/***/ }),

/***/ "./src/images/dad2.jpg":
/*!*****************************!*\
  !*** ./src/images/dad2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87ffb5d84ac00e719fa5.jpg";

/***/ }),

/***/ "./src/images/dad3.jpg":
/*!*****************************!*\
  !*** ./src/images/dad3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce1635a356b5ed9d626c.jpg";

/***/ }),

/***/ "./src/images/dad4.jpg":
/*!*****************************!*\
  !*** ./src/images/dad4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d19892c7cd6d628a875.jpg";

/***/ }),

/***/ "./src/images/dad5.jpg":
/*!*****************************!*\
  !*** ./src/images/dad5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "330148553ff60398807c.jpg";

/***/ }),

/***/ "./src/images/dad6.jpg":
/*!*****************************!*\
  !*** ./src/images/dad6.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faa2be8972f2efb09b5d.jpg";

/***/ }),

/***/ "./src/images/dad7.jpg":
/*!*****************************!*\
  !*** ./src/images/dad7.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3f1d7f4fc933676b519.jpg";

/***/ }),

/***/ "./src/images/dad8.jpg":
/*!*****************************!*\
  !*** ./src/images/dad8.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b011e0d0130d508a366.jpg";

/***/ }),

/***/ "./src/images/dad9.jpg":
/*!*****************************!*\
  !*** ./src/images/dad9.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eec9f3389fbb0e38c7e.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/images.js");



const content = document.getElementById('content');

const imageSection = document.createElement('div');
imageSection.id = 'image-section';
content.appendChild(imageSection);

const slideFrame = document.createElement('div');
slideFrame.id = 'slide-frame';
imageSection.appendChild(slideFrame);

let currentImage = 0;

const imageCount = _images__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1;

if (currentImage === 0) {
  const imageHolder = _images__WEBPACK_IMPORTED_MODULE_1__["default"][currentImage];
  slideFrame.appendChild(imageHolder);
  imageHolder.id = 'current-image';
}

const updateImage = () => {
  const getCurrent = document.getElementById('current-image');
  slideFrame.removeChild(getCurrent);
  const imageHolder = _images__WEBPACK_IMPORTED_MODULE_1__["default"][currentImage];
  imageHolder.id = 'current-image';
  slideFrame.appendChild(imageHolder);
};

updateImage();

const advanceImage = () => {
  if (currentImage >= imageCount) {
    currentImage = 0;
  } else {
    currentImage += 1;
  }
  updateImage();
};

const reverseImage = () => {
  if (currentImage <= 0) {
    currentImage = imageCount;
  } else {
    currentImage -= 1;
  }
  updateImage();
};

slideFrame.addEventListener('click', () => {
  advanceImage();
  // reverseImage();
});

setInterval(() => {
  // advanceImage();
  reverseImage();
}, 2000);

const templatePage = document.createElement('div');
templatePage.id = 'template-page';

const templateText = document.createElement('div');
templateText.id = 'template-text';
templateText.textContent = 'TEMPLATE';

templatePage.appendChild(templateText);
content.appendChild(templatePage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxXQUFXLDZDQUFJO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZLDhDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5T3RCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNTOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQiwrQ0FBTTs7QUFFekI7QUFDQSxzQkFBc0IsK0NBQU07QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlX3dlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiN0ZW1wbGF0ZS1wYWdle1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzksIDg5KTtcbn1cblxuI3RlbXBsYXRlLXRleHR7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiByZ2IoODAsIDgwLCAyMzApO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpbWFnZS1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2N1cnJlbnQtaW1hZ2Uge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDEwMDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcbn1cblxuI3NsaWRlLWZyYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiA0NTRweDtcbiAgICBtYXgtaGVpZ2h0OiA0NTRweDtcbiAgICAgICAgdHJhbnNmb3JtOiBlYXNlLWluLW91dCAycztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO1FBQ2IseUJBQXlCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiN0ZW1wbGF0ZS1wYWdle1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzksIDg5KTtcXG59XFxuXFxuI3RlbXBsYXRlLXRleHR7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiByZ2IoODAsIDgwLCAyMzApO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbWFnZS1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDU0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY3VycmVudC1pbWFnZSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcXG59XFxuXFxuI3NsaWRlLWZyYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDQ1NHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0NTRweDtcXG4gICAgICAgIHRyYW5zZm9ybTogZWFzZS1pbi1vdXQgMnM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGljMSBmcm9tICcuL2ltYWdlcy9kYWQxLmpwZyc7XG5pbXBvcnQgUGljMiBmcm9tICcuL2ltYWdlcy9kYWQyLmpwZyc7XG5pbXBvcnQgUGljMyBmcm9tICcuL2ltYWdlcy9kYWQzLmpwZyc7XG5pbXBvcnQgUGljNCBmcm9tICcuL2ltYWdlcy9kYWQ0LmpwZyc7XG5pbXBvcnQgUGljNSBmcm9tICcuL2ltYWdlcy9kYWQ1LmpwZyc7XG5pbXBvcnQgUGljNiBmcm9tICcuL2ltYWdlcy9kYWQ2LmpwZyc7XG5pbXBvcnQgUGljNyBmcm9tICcuL2ltYWdlcy9kYWQ3LmpwZyc7XG5pbXBvcnQgUGljOCBmcm9tICcuL2ltYWdlcy9kYWQ4LmpwZyc7XG5pbXBvcnQgUGljOSBmcm9tICcuL2ltYWdlcy9kYWQ5LmpwZyc7XG5pbXBvcnQgUGljMTAgZnJvbSAnLi9pbWFnZXMvZGFkMTAuanBnJztcbmltcG9ydCBQaWMxMSBmcm9tICcuL2ltYWdlcy9kYWQxMS5qcGcnO1xuaW1wb3J0IFBpYzEyIGZyb20gJy4vaW1hZ2VzL2RhZDEyLmpwZyc7XG5pbXBvcnQgUGljMTMgZnJvbSAnLi9pbWFnZXMvZGFkMTMuanBnJztcbmltcG9ydCBQaWMxNCBmcm9tICcuL2ltYWdlcy9kYWQxNC5qcGcnO1xuaW1wb3J0IFBpYzE1IGZyb20gJy4vaW1hZ2VzL2RhZDE1LmpwZyc7XG5pbXBvcnQgUGljMTYgZnJvbSAnLi9pbWFnZXMvZGFkMTYuanBnJztcbmltcG9ydCBQaWMxNyBmcm9tICcuL2ltYWdlcy9kYWQxNy5qcGcnO1xuaW1wb3J0IFBpYzE4IGZyb20gJy4vaW1hZ2VzL2RhZDE4LmpwZyc7XG5pbXBvcnQgUGljMTkgZnJvbSAnLi9pbWFnZXMvZGFkMTkuanBnJztcbi8vIGltcG9ydCBQaWMyMCBmcm9tICcuL2ltYWdlcy9kYWQyMC5qcGcnO1xuLy8gaW1wb3J0IFBpYzIxIGZyb20gJy4vaW1hZ2VzL2RhZDIxLmpwZyc7XG4vLyBpbXBvcnQgUGljMjIgZnJvbSAnLi9pbWFnZXMvZGFkMjIuanBnJztcbi8vIGltcG9ydCBQaWMyMyBmcm9tICcuL2ltYWdlcy9kYWQyMy5qcGcnO1xuLy8gaW1wb3J0IFBpYzI0IGZyb20gJy4vaW1hZ2VzL2RhZDI0LmpwZyc7XG4vLyBpbXBvcnQgUGljMjUgZnJvbSAnLi9pbWFnZXMvZGFkMjUuanBnJztcbi8vIGltcG9ydCBQaWMyNiBmcm9tICcuL2ltYWdlcy9kYWQyNi5qcGcnO1xuLy8gaW1wb3J0IFBpYzI3IGZyb20gJy4vaW1hZ2VzL2RhZDI3LmpwZyc7XG4vLyBpbXBvcnQgUGljMjggZnJvbSAnLi9pbWFnZXMvZGFkMjguanBnJztcbi8vIGltcG9ydCBQaWMyOSBmcm9tICcuL2ltYWdlcy9kYWQyOS5qcGcnO1xuLy8gaW1wb3J0IFBpYzMwIGZyb20gJy4vaW1hZ2VzL2RhZDMwLmpwZyc7XG4vLyBpbXBvcnQgUGljMzEgZnJvbSAnLi9pbWFnZXMvZGFkMzEuanBnJztcbi8vIGltcG9ydCBQaWMzMiBmcm9tICcuL2ltYWdlcy9kYWQzMi5qcGcnO1xuLy8gaW1wb3J0IFBpYzMzIGZyb20gJy4vaW1hZ2VzL2RhZDMzLmpwZyc7XG4vLyBpbXBvcnQgUGljMzQgZnJvbSAnLi9pbWFnZXMvZGFkMzQuanBnJztcbi8vIGltcG9ydCBQaWMzNSBmcm9tICcuL2ltYWdlcy9kYWQzNS5qcGcnO1xuLy8gaW1wb3J0IFBpYzM2IGZyb20gJy4vaW1hZ2VzL2RhZDM2LmpwZyc7XG4vLyBpbXBvcnQgUGljMzcgZnJvbSAnLi9pbWFnZXMvZGFkMzcuanBnJztcbi8vIGltcG9ydCBQaWMzOCBmcm9tICcuL2ltYWdlcy9kYWQzOC5qcGcnO1xuLy8gaW1wb3J0IFBpYzM5IGZyb20gJy4vaW1hZ2VzL2RhZDM5LmpwZyc7XG4vLyBpbXBvcnQgUGljNDAgZnJvbSAnLi9pbWFnZXMvZGFkNDAuanBnJztcbi8vIGltcG9ydCBQaWM0MSBmcm9tICcuL2ltYWdlcy9kYWQ0MS5qcGcnO1xuLy8gaW1wb3J0IFBpYzQyIGZyb20gJy4vaW1hZ2VzL2RhZDQyLmpwZyc7XG4vLyBpbXBvcnQgUGljNDMgZnJvbSAnLi9pbWFnZXMvZGFkNDMuanBnJztcbi8vIGltcG9ydCBQaWM0NCBmcm9tICcuL2ltYWdlcy9kYWQ0NC5qcGcnO1xuLy8gaW1wb3J0IFBpYzQ1IGZyb20gJy4vaW1hZ2VzL2RhZDQ1LmpwZyc7XG4vLyBpbXBvcnQgUGljNDYgZnJvbSAnLi9pbWFnZXMvZGFkNDYuanBnJztcbi8vIGltcG9ydCBQaWM0NyBmcm9tICcuL2ltYWdlcy9kYWQ0Ny5qcGcnO1xuLy8gaW1wb3J0IFBpYzQ4IGZyb20gJy4vaW1hZ2VzL2RhZDQ4LmpwZyc7XG4vLyBpbXBvcnQgUGljNDkgZnJvbSAnLi9pbWFnZXMvZGFkNDkuanBnJztcbi8vIGltcG9ydCBQaWM1MCBmcm9tICcuL2ltYWdlcy9kYWQ1MC5qcGcnO1xuLy8gaW1wb3J0IFBpYzUxIGZyb20gJy4vaW1hZ2VzL2RhZDUxLmpwZyc7XG4vLyBpbXBvcnQgUGljNTIgZnJvbSAnLi9pbWFnZXMvZGFkNTIuanBnJztcbi8vIGltcG9ydCBQaWM1MyBmcm9tICcuL2ltYWdlcy9kYWQ1My5qcGcnO1xuLy8gaW1wb3J0IFBpYzU0IGZyb20gJy4vaW1hZ2VzL2RhZDU0LmpwZyc7XG4vLyBpbXBvcnQgUGljNTUgZnJvbSAnLi9pbWFnZXMvZGFkNTUuanBnJztcbi8vIGltcG9ydCBQaWM1NiBmcm9tICcuL2ltYWdlcy9kYWQ1Ni5qcGcnO1xuLy8gaW1wb3J0IFBpYzU3IGZyb20gJy4vaW1hZ2VzL2RhZDU3LmpwZyc7XG4vLyBpbXBvcnQgUGljNTggZnJvbSAnLi9pbWFnZXMvZGFkNTguanBnJztcbi8vIGltcG9ydCBQaWM1OSBmcm9tICcuL2ltYWdlcy9kYWQ1OS5qcGcnO1xuLy8gaW1wb3J0IFBpYzYwIGZyb20gJy4vaW1hZ2VzL2RhZDYwLmpwZyc7XG4vLyBpbXBvcnQgUGljNjEgZnJvbSAnLi9pbWFnZXMvZGFkNjEuanBnJztcbi8vIGltcG9ydCBQaWM2MiBmcm9tICcuL2ltYWdlcy9kYWQ2Mi5qcGcnO1xuLy8gaW1wb3J0IFBpYzYzIGZyb20gJy4vaW1hZ2VzL2RhZDYzLmpwZyc7XG4vLyBpbXBvcnQgUGljNjQgZnJvbSAnLi9pbWFnZXMvZGFkNjQuanBnJztcbi8vIGltcG9ydCBQaWM2NSBmcm9tICcuL2ltYWdlcy9kYWQ2NS5qcGcnO1xuLy8gaW1wb3J0IFBpYzY2IGZyb20gJy4vaW1hZ2VzL2RhZDY2LmpwZyc7XG4vLyBpbXBvcnQgUGljNjcgZnJvbSAnLi9pbWFnZXMvZGFkNjcuanBnJztcbi8vIGltcG9ydCBQaWM2OCBmcm9tICcuL2ltYWdlcy9kYWQ2OC5qcGcnO1xuLy8gaW1wb3J0IFBpYzY5IGZyb20gJy4vaW1hZ2VzL2RhZDY5LmpwZyc7XG4vLyBpbXBvcnQgUGljNzAgZnJvbSAnLi9pbWFnZXMvZGFkNzAuanBnJztcbi8vIGltcG9ydCBQaWM3MSBmcm9tICcuL2ltYWdlcy9kYWQ3MS5qcGcnO1xuLy8gaW1wb3J0IFBpYzcyIGZyb20gJy4vaW1hZ2VzL2RhZDcyLmpwZyc7XG4vLyBpbXBvcnQgUGljNzMgZnJvbSAnLi9pbWFnZXMvZGFkNzMuanBnJztcbi8vIGltcG9ydCBQaWM3NCBmcm9tICcuL2ltYWdlcy9kYWQ3NC5qcGcnO1xuLy8gaW1wb3J0IFBpYzc1IGZyb20gJy4vaW1hZ2VzL2RhZDc1LmpwZyc7XG4vLyBpbXBvcnQgUGljNzYgZnJvbSAnLi9pbWFnZXMvZGFkNzYuanBnJztcbi8vIGltcG9ydCBQaWM3NyBmcm9tICcuL2ltYWdlcy9kYWQ3Ny5qcGcnO1xuLy8gaW1wb3J0IFBpYzc4IGZyb20gJy4vaW1hZ2VzL2RhZDc4LmpwZyc7XG4vLyBpbXBvcnQgUGljNzkgZnJvbSAnLi9pbWFnZXMvZGFkNzkuanBnJztcbi8vIGltcG9ydCBQaWM4MCBmcm9tICcuL2ltYWdlcy9kYWQ4MC5qcGcnO1xuLy8gaW1wb3J0IFBpYzgxIGZyb20gJy4vaW1hZ2VzL2RhZDgxLmpwZyc7XG4vLyBpbXBvcnQgUGljODIgZnJvbSAnLi9pbWFnZXMvZGFkODIuanBnJztcbi8vIGltcG9ydCBQaWM4MyBmcm9tICcuL2ltYWdlcy9kYWQ4My5qcGcnO1xuLy8gaW1wb3J0IFBpYzg0IGZyb20gJy4vaW1hZ2VzL2RhZDg0LmpwZyc7XG4vLyBpbXBvcnQgUGljODUgZnJvbSAnLi9pbWFnZXMvZGFkODUuanBnJztcbi8vIGltcG9ydCBQaWM4NiBmcm9tICcuL2ltYWdlcy9kYWQ4Ni5qcGcnO1xuLy8gaW1wb3J0IFBpYzg3IGZyb20gJy4vaW1hZ2VzL2RhZDg3LmpwZyc7XG4vLyBpbXBvcnQgUGljODggZnJvbSAnLi9pbWFnZXMvZGFkODguanBnJztcbi8vIGltcG9ydCBQaWM4OSBmcm9tICcuL2ltYWdlcy9kYWQ4OS5qcGcnO1xuLy8gaW1wb3J0IFBpYzkwIGZyb20gJy4vaW1hZ2VzL2RhZDkwLmpwZyc7XG4vLyBpbXBvcnQgUGljOTEgZnJvbSAnLi9pbWFnZXMvZGFkOTEuanBnJztcbi8vIGltcG9ydCBQaWM5MiBmcm9tICcuL2ltYWdlcy9kYWQ5Mi5qcGcnO1xuLy8gaW1wb3J0IFBpYzkzIGZyb20gJy4vaW1hZ2VzL2RhZDkzLmpwZyc7XG4vLyBpbXBvcnQgUGljOTQgZnJvbSAnLi9pbWFnZXMvZGFkOTQuanBnJztcbi8vIGltcG9ydCBQaWM5NSBmcm9tICcuL2ltYWdlcy9kYWQ5NS5qcGcnO1xuLy8gaW1wb3J0IFBpYzk2IGZyb20gJy4vaW1hZ2VzL2RhZDk2LmpwZyc7XG4vLyBpbXBvcnQgUGljOTcgZnJvbSAnLi9pbWFnZXMvZGFkOTcuanBnJztcbi8vIGltcG9ydCBQaWM5OCBmcm9tICcuL2ltYWdlcy9kYWQ5OC5qcGcnO1xuLy8gaW1wb3J0IFBpYzk5IGZyb20gJy4vaW1hZ2VzL2RhZDk5LmpwZyc7XG4vLyBpbXBvcnQgUGljMTAwIGZyb20gJy4vaW1hZ2VzL2RhZDEwMC5qcGcnO1xuLy8gaW1wb3J0IFBpYzEwMSBmcm9tICcuL2ltYWdlcy9kYWQxMDEuanBnJztcbi8vIGltcG9ydCBQaWMxMDIgZnJvbSAnLi9pbWFnZXMvZGFkMTAyLmpwZyc7XG4vLyBpbXBvcnQgUGljMTAzIGZyb20gJy4vaW1hZ2VzL2RhZDEwMy5qcGcnO1xuLy8gaW1wb3J0IFBpYzEwNCBmcm9tICcuL2ltYWdlcy9kYWQxMDQuanBnJztcbi8vIGltcG9ydCBQaWMxMDUgZnJvbSAnLi9pbWFnZXMvZGFkMTA1LmpwZyc7XG4vLyBpbXBvcnQgUGljMTA2IGZyb20gJy4vaW1hZ2VzL2RhZDEwNi5qcGcnO1xuLy8gaW1wb3J0IFBpYzEwNyBmcm9tICcuL2ltYWdlcy9kYWQxMDcuanBnJztcbi8vIGltcG9ydCBQaWMxMDggZnJvbSAnLi9pbWFnZXMvZGFkMTA4LmpwZyc7XG4vLyBpbXBvcnQgUGljMTA5IGZyb20gJy4vaW1hZ2VzL2RhZDEwOS5qcGcnO1xuLy8gaW1wb3J0IFBpYzExMCBmcm9tICcuL2ltYWdlcy9kYWQxMTAuanBnJztcbi8vIGltcG9ydCBQaWMxMTEgZnJvbSAnLi9pbWFnZXMvZGFkMTExLmpwZyc7XG4vLyBpbXBvcnQgUGljMTEyIGZyb20gJy4vaW1hZ2VzL2RhZDExMi5qcGcnO1xuLy8gaW1wb3J0IFBpYzExMyBmcm9tICcuL2ltYWdlcy9kYWQxMTMuanBnJztcbi8vIGltcG9ydCBQaWMxMTQgZnJvbSAnLi9pbWFnZXMvZGFkMTE0LmpwZyc7XG4vLyBpbXBvcnQgUGljMTE1IGZyb20gJy4vaW1hZ2VzL2RhZDExNS5qcGcnO1xuLy8gaW1wb3J0IFBpYzExNiBmcm9tICcuL2ltYWdlcy9kYWQxMTYuanBnJztcbi8vIGltcG9ydCBQaWMxMTcgZnJvbSAnLi9pbWFnZXMvZGFkMTE3LmpwZyc7XG4vLyBpbXBvcnQgUGljMTE4IGZyb20gJy4vaW1hZ2VzL2RhZDExOC5qcGcnO1xuLy8gaW1wb3J0IFBpYzExOSBmcm9tICcuL2ltYWdlcy9kYWQxMTkuanBnJztcbi8vIGltcG9ydCBQaWMxMjAgZnJvbSAnLi9pbWFnZXMvZGFkMTIwLmpwZyc7XG4vLyBpbXBvcnQgUGljMTIxIGZyb20gJy4vaW1hZ2VzL2RhZDEyMS5qcGcnO1xuLy8gaW1wb3J0IFBpYzEyMiBmcm9tICcuL2ltYWdlcy9kYWQxMjIuanBnJztcbi8vIGltcG9ydCBQaWMxMjMgZnJvbSAnLi9pbWFnZXMvZGFkMTIzLmpwZyc7XG4vLyBpbXBvcnQgUGljMTI0IGZyb20gJy4vaW1hZ2VzL2RhZDEyNC5qcGcnO1xuLy8gaW1wb3J0IFBpYzEyNSBmcm9tICcuL2ltYWdlcy9kYWQxMjUuanBnJztcbi8vIGltcG9ydCBQaWMxMjYgZnJvbSAnLi9pbWFnZXMvZGFkMTI2LmpwZyc7XG4vLyBpbXBvcnQgUGljMTI3IGZyb20gJy4vaW1hZ2VzL2RhZDEyNy5qcGcnO1xuLy8gaW1wb3J0IFBpYzEyOCBmcm9tICcuL2ltYWdlcy9kYWQxMjguanBnJztcbi8vIGltcG9ydCBQaWMxMjkgZnJvbSAnLi9pbWFnZXMvZGFkMTI5LmpwZyc7XG4vLyBpbXBvcnQgUGljMTMwIGZyb20gJy4vaW1hZ2VzL2RhZDEzMC5qcGcnO1xuLy8gaW1wb3J0IFBpYzEzMSBmcm9tICcuL2ltYWdlcy9kYWQxMzEuanBnJztcbi8vIGltcG9ydCBQaWMxMzIgZnJvbSAnLi9pbWFnZXMvZGFkMTMyLmpwZyc7XG4vLyBpbXBvcnQgUGljMTMzIGZyb20gJy4vaW1hZ2VzL2RhZDEzMy5qcGcnO1xuLy8gaW1wb3J0IFBpYzEzNCBmcm9tICcuL2ltYWdlcy9kYWQxMzQuanBnJztcbi8vIGltcG9ydCBQaWMxMzUgZnJvbSAnLi9pbWFnZXMvZGFkMTM1LmpwZyc7XG4vLyBpbXBvcnQgUGljMTM2IGZyb20gJy4vaW1hZ2VzL2RhZDEzNi5qcGcnO1xuLy8gaW1wb3J0IFBpYzEzNyBmcm9tICcuL2ltYWdlcy9kYWQxMzcuanBnJztcbi8vIGltcG9ydCBQaWMxMzggZnJvbSAnLi9pbWFnZXMvZGFkMTM4LmpwZyc7XG4vLyBpbXBvcnQgUGljMTM5IGZyb20gJy4vaW1hZ2VzL2RhZDEzOS5qcGcnO1xuLy8gaW1wb3J0IFBpYzE0MCBmcm9tICcuL2ltYWdlcy9kYWQxNDAuanBnJztcbi8vIGltcG9ydCBQaWMxNDEgZnJvbSAnLi9pbWFnZXMvZGFkMTQxLmpwZyc7XG4vLyBpbXBvcnQgUGljMTQyIGZyb20gJy4vaW1hZ2VzL2RhZDE0Mi5qcGcnO1xuLy8gaW1wb3J0IFBpYzE0MyBmcm9tICcuL2ltYWdlcy9kYWQxNDMuanBnJztcbi8vIGltcG9ydCBQaWMxNDQgZnJvbSAnLi9pbWFnZXMvZGFkMTQ0LmpwZyc7XG4vLyBpbXBvcnQgUGljMTQ1IGZyb20gJy4vaW1hZ2VzL2RhZDE0NS5qcGcnO1xuLy8gaW1wb3J0IFBpYzE0NiBmcm9tICcuL2ltYWdlcy9kYWQxNDYuanBnJztcbi8vIGltcG9ydCBQaWMxNDcgZnJvbSAnLi9pbWFnZXMvZGFkMTQ3LmpwZyc7XG4vLyBpbXBvcnQgUGljMTQ4IGZyb20gJy4vaW1hZ2VzL2RhZDE0OC5qcGcnO1xuLy8gaW1wb3J0IFBpYzE0OSBmcm9tICcuL2ltYWdlcy9kYWQxNDkuanBnJztcbi8vIGltcG9ydCBQaWMxNTAgZnJvbSAnLi9pbWFnZXMvZGFkMTUwLmpwZyc7XG4vLyBpbXBvcnQgUGljMTUxIGZyb20gJy4vaW1hZ2VzL2RhZDE1MS5qcGcnO1xuLy8gaW1wb3J0IFBpYzE1MiBmcm9tICcuL2ltYWdlcy9kYWQxNTIuanBnJztcbi8vIGltcG9ydCBQaWMxNTMgZnJvbSAnLi9pbWFnZXMvZGFkMTUzLmpwZyc7XG4vLyBpbXBvcnQgUGljMTU0IGZyb20gJy4vaW1hZ2VzL2RhZDE1NC5qcGcnO1xuLy8gaW1wb3J0IFBpYzE1NSBmcm9tICcuL2ltYWdlcy9kYWQxNTUuanBnJztcbi8vIGltcG9ydCBQaWMxNTYgZnJvbSAnLi9pbWFnZXMvZGFkMTU2LmpwZyc7XG4vLyBpbXBvcnQgUGljMTU3IGZyb20gJy4vaW1hZ2VzL2RhZDE1Ny5qcGcnO1xuLy8gaW1wb3J0IFBpYzE1OCBmcm9tICcuL2ltYWdlcy9kYWQxNTguanBnJztcbi8vIGltcG9ydCBQaWMxNTkgZnJvbSAnLi9pbWFnZXMvZGFkMTU5LmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtdO1xuXG5jb25zdCBkYWQxID0gbmV3IEltYWdlKCk7XG5kYWQxLnNyYyA9IFBpYzE7XG5pbWFnZXMucHVzaChkYWQxKTtcblxuY29uc3QgZGFkMiA9IG5ldyBJbWFnZSgpO1xuZGFkMi5zcmMgPSBQaWMyO1xuaW1hZ2VzLnB1c2goZGFkMik7XG5cbmNvbnN0IGRhZDMgPSBuZXcgSW1hZ2UoKTtcbmRhZDMuc3JjID0gUGljMztcbmltYWdlcy5wdXNoKGRhZDMpO1xuXG5jb25zdCBkYWQ0ID0gbmV3IEltYWdlKCk7XG5kYWQ0LnNyYyA9IFBpYzQ7XG5pbWFnZXMucHVzaChkYWQ0KTtcblxuY29uc3QgZGFkNSA9IG5ldyBJbWFnZSgpO1xuZGFkNS5zcmMgPSBQaWM1O1xuaW1hZ2VzLnB1c2goZGFkNSk7XG5cbmNvbnN0IGRhZDYgPSBuZXcgSW1hZ2UoKTtcbmRhZDYuc3JjID0gUGljNjtcbmltYWdlcy5wdXNoKGRhZDYpO1xuXG5jb25zdCBkYWQ3ID0gbmV3IEltYWdlKCk7XG5kYWQ3LnNyYyA9IFBpYzc7XG5pbWFnZXMucHVzaChkYWQ3KTtcblxuY29uc3QgZGFkOCA9IG5ldyBJbWFnZSgpO1xuZGFkOC5zcmMgPSBQaWM4O1xuaW1hZ2VzLnB1c2goZGFkOCk7XG5cbmNvbnN0IGRhZDkgPSBuZXcgSW1hZ2UoKTtcbmRhZDkuc3JjID0gUGljOTtcbmltYWdlcy5wdXNoKGRhZDkpO1xuXG5jb25zdCBkYWQxMCA9IG5ldyBJbWFnZSgpO1xuZGFkMTAuc3JjID0gUGljMTA7XG5pbWFnZXMucHVzaChkYWQxMCk7XG5cbmNvbnN0IGRhZDExID0gbmV3IEltYWdlKCk7XG5kYWQxMS5zcmMgPSBQaWMxMTtcbmltYWdlcy5wdXNoKGRhZDExKTtcblxuY29uc3QgZGFkMTIgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyLnNyYyA9IFBpYzEyO1xuaW1hZ2VzLnB1c2goZGFkMTIpO1xuXG5jb25zdCBkYWQxMyA9IG5ldyBJbWFnZSgpO1xuZGFkMTMuc3JjID0gUGljMTM7XG5pbWFnZXMucHVzaChkYWQxMyk7XG5cbmNvbnN0IGRhZDE0ID0gbmV3IEltYWdlKCk7XG5kYWQxNC5zcmMgPSBQaWMxNDtcbmltYWdlcy5wdXNoKGRhZDE0KTtcblxuY29uc3QgZGFkMTUgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1LnNyYyA9IFBpYzE1O1xuaW1hZ2VzLnB1c2goZGFkMTUpO1xuXG5jb25zdCBkYWQxNiA9IG5ldyBJbWFnZSgpO1xuZGFkMTYuc3JjID0gUGljMTY7XG5pbWFnZXMucHVzaChkYWQxNik7XG5cbmNvbnN0IGRhZDE3ID0gbmV3IEltYWdlKCk7XG5kYWQxNy5zcmMgPSBQaWMxNztcbmltYWdlcy5wdXNoKGRhZDE3KTtcblxuY29uc3QgZGFkMTggPSBuZXcgSW1hZ2UoKTtcbmRhZDE4LnNyYyA9IFBpYzE4O1xuaW1hZ2VzLnB1c2goZGFkMTgpO1xuXG5jb25zdCBkYWQxOSA9IG5ldyBJbWFnZSgpO1xuZGFkMTkuc3JjID0gUGljMTk7XG5pbWFnZXMucHVzaChkYWQxOSk7XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW1hZ2VzIGZyb20gJy4vaW1hZ2VzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGltYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW1hZ2VTZWN0aW9uLmlkID0gJ2ltYWdlLXNlY3Rpb24nO1xuY29udGVudC5hcHBlbmRDaGlsZChpbWFnZVNlY3Rpb24pO1xuXG5jb25zdCBzbGlkZUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zbGlkZUZyYW1lLmlkID0gJ3NsaWRlLWZyYW1lJztcbmltYWdlU2VjdGlvbi5hcHBlbmRDaGlsZChzbGlkZUZyYW1lKTtcblxubGV0IGN1cnJlbnRJbWFnZSA9IDA7XG5cbmNvbnN0IGltYWdlQ291bnQgPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuaWYgKGN1cnJlbnRJbWFnZSA9PT0gMCkge1xuICBjb25zdCBpbWFnZUhvbGRlciA9IGltYWdlc1tjdXJyZW50SW1hZ2VdO1xuICBzbGlkZUZyYW1lLmFwcGVuZENoaWxkKGltYWdlSG9sZGVyKTtcbiAgaW1hZ2VIb2xkZXIuaWQgPSAnY3VycmVudC1pbWFnZSc7XG59XG5cbmNvbnN0IHVwZGF0ZUltYWdlID0gKCkgPT4ge1xuICBjb25zdCBnZXRDdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtaW1hZ2UnKTtcbiAgc2xpZGVGcmFtZS5yZW1vdmVDaGlsZChnZXRDdXJyZW50KTtcbiAgY29uc3QgaW1hZ2VIb2xkZXIgPSBpbWFnZXNbY3VycmVudEltYWdlXTtcbiAgaW1hZ2VIb2xkZXIuaWQgPSAnY3VycmVudC1pbWFnZSc7XG4gIHNsaWRlRnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2VIb2xkZXIpO1xufTtcblxudXBkYXRlSW1hZ2UoKTtcblxuY29uc3QgYWR2YW5jZUltYWdlID0gKCkgPT4ge1xuICBpZiAoY3VycmVudEltYWdlID49IGltYWdlQ291bnQpIHtcbiAgICBjdXJyZW50SW1hZ2UgPSAwO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRJbWFnZSArPSAxO1xuICB9XG4gIHVwZGF0ZUltYWdlKCk7XG59O1xuXG5jb25zdCByZXZlcnNlSW1hZ2UgPSAoKSA9PiB7XG4gIGlmIChjdXJyZW50SW1hZ2UgPD0gMCkge1xuICAgIGN1cnJlbnRJbWFnZSA9IGltYWdlQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEltYWdlIC09IDE7XG4gIH1cbiAgdXBkYXRlSW1hZ2UoKTtcbn07XG5cbnNsaWRlRnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFkdmFuY2VJbWFnZSgpO1xuICAvLyByZXZlcnNlSW1hZ2UoKTtcbn0pO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vIGFkdmFuY2VJbWFnZSgpO1xuICByZXZlcnNlSW1hZ2UoKTtcbn0sIDIwMDApO1xuXG5jb25zdCB0ZW1wbGF0ZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRlbXBsYXRlUGFnZS5pZCA9ICd0ZW1wbGF0ZS1wYWdlJztcblxuY29uc3QgdGVtcGxhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZW1wbGF0ZVRleHQuaWQgPSAndGVtcGxhdGUtdGV4dCc7XG50ZW1wbGF0ZVRleHQudGV4dENvbnRlbnQgPSAnVEVNUExBVEUnO1xuXG50ZW1wbGF0ZVBhZ2UuYXBwZW5kQ2hpbGQodGVtcGxhdGVUZXh0KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGVtcGxhdGVQYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==