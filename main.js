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

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#image-section {
    /* box-sizing: border-box; */
    width: 100%;
    height: 550px;
    min-width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0 0;

}

#slide-frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* max-width: 75%; */
    height: 550px;
    max-height: 550px;
    transform: ease-in-out 2s;
    /* background-color: aqua; */
}

#current-image {
    max-width: 100%;
    max-height: 550px;
    opacity: 100;
    transition: ease-in-out 2s;
}

#reverse-button {
    border: none;
    background-color: white;
    color: white;
    font-size: 35px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.24);
    padding: 0 8px 0 8px;
}

#advance-button {

    border: none;
    background-color: white;
    color: white;
    font-size: 35px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.322);
    align-self: flex-end;
    padding: 0 8px 0 8px;
}

/* AUDIO SECTION */

#audio-section{
    box-sizing: border-box;
    width: 100%;
    min-width: 375px;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 60px 0;
    /* background-color: rgb(241, 239, 89); */
}

#track-container {
    box-sizing: border-box;
    width: 100%;
    min-width: 365px;
    max-width: 65%;
}

.track {
    margin: 0;
    margin: 0 0 40px 0;
    touch-action: none;
}

.track-title {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

.options-display {
    display: flex;
    align-items: center;
    gap: 20px;
    /* margin: 0 0 40px 0; */
}

.play-btn {
    display: flex;
    align-items: center;
    border-radius: 25px;
    border: none;
    background-color: white;
}

.play-btn:hover {
    background-color: #e8e9e8;
}

.play-img {
    height: 30px;
    width: 30px;
}

.pause-img {
    height: 30px;
    width: 30px;
}

.time-display {
    display: flex;
    gap: 5px;
    font-family: Arial, Helvetica, sans-serif;
}

.current-display {
    margin: 0;
}

.durationDisplay {
    margin: 0;
}

.divider {
    margin: 0;
}

/* OLD CODE STYLE */
/* .audio-unit {
    box-sizing: border-box;
    width: 100%;
    min-width: 365px;
    max-width: 65%;
    margin: 20px 0 20px 0;
}

.audio-player {
    margin: 10px 0 0 0;
    width: 100%;
}

audio::-webkit-media-controls-panel {
    background-color: rgb(202, 231, 192);
}

.audio-unit-label {
    margin: 0 0 20px 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,oBAAoB;IACpB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,sCAAsC;IACtC,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA,kBAAkB;;AAElB;IACI,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,yCAAyC;AAC7C;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,yCAAyC;AAC7C;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;AAEA,mBAAmB;AACnB;;;;;;;;;;;;;;;;;;;;;GAqBG","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#image-section {\n    /* box-sizing: border-box; */\n    width: 100%;\n    height: 550px;\n    min-width: 375px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 40px 0 0 0;\n\n}\n\n#slide-frame {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: center; */\n    /* max-width: 75%; */\n    height: 550px;\n    max-height: 550px;\n    transform: ease-in-out 2s;\n    /* background-color: aqua; */\n}\n\n#current-image {\n    max-width: 100%;\n    max-height: 550px;\n    opacity: 100;\n    transition: ease-in-out 2s;\n}\n\n#reverse-button {\n    border: none;\n    background-color: white;\n    color: white;\n    font-size: 35px;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.24);\n    padding: 0 8px 0 8px;\n}\n\n#advance-button {\n\n    border: none;\n    background-color: white;\n    color: white;\n    font-size: 35px;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.322);\n    align-self: flex-end;\n    padding: 0 8px 0 8px;\n}\n\n/* AUDIO SECTION */\n\n#audio-section{\n    box-sizing: border-box;\n    width: 100%;\n    min-width: 375px;\n    /* height: 100vh; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 40px 0 60px 0;\n    /* background-color: rgb(241, 239, 89); */\n}\n\n#track-container {\n    box-sizing: border-box;\n    width: 100%;\n    min-width: 365px;\n    max-width: 65%;\n}\n\n.track {\n    margin: 0;\n    margin: 0 0 40px 0;\n    touch-action: none;\n}\n\n.track-title {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n}\n\n.options-display {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    /* margin: 0 0 40px 0; */\n}\n\n.play-btn {\n    display: flex;\n    align-items: center;\n    border-radius: 25px;\n    border: none;\n    background-color: white;\n}\n\n.play-btn:hover {\n    background-color: #e8e9e8;\n}\n\n.play-img {\n    height: 30px;\n    width: 30px;\n}\n\n.pause-img {\n    height: 30px;\n    width: 30px;\n}\n\n.time-display {\n    display: flex;\n    gap: 5px;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.current-display {\n    margin: 0;\n}\n\n.durationDisplay {\n    margin: 0;\n}\n\n.divider {\n    margin: 0;\n}\n\n/* OLD CODE STYLE */\n/* .audio-unit {\n    box-sizing: border-box;\n    width: 100%;\n    min-width: 365px;\n    max-width: 65%;\n    margin: 20px 0 20px 0;\n}\n\n.audio-player {\n    margin: 10px 0 0 0;\n    width: 100%;\n}\n\naudio::-webkit-media-controls-panel {\n    background-color: rgb(202, 231, 192);\n}\n\n.audio-unit-label {\n    margin: 0 0 20px 5px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n} */"],"sourceRoot":""}]);
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

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wavesurfermodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wavesurfermodule */ "./src/wavesurfermodule.js");
/* harmony import */ var _audio_01_EarlyLife_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio/01_EarlyLife.mp3 */ "./src/audio/01_EarlyLife.mp3");
/* harmony import */ var _audio_02_MomKidsCarpentry_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/02_MomKidsCarpentry.mp3 */ "./src/audio/02_MomKidsCarpentry.mp3");
/* harmony import */ var _audio_03_Nature_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/03_Nature.mp3 */ "./src/audio/03_Nature.mp3");
/* harmony import */ var _audio_04_Religion_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/04_Religion.mp3 */ "./src/audio/04_Religion.mp3");
/* harmony import */ var _audio_05_AdviceToGrandkids_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/05_AdviceToGrandkids.mp3 */ "./src/audio/05_AdviceToGrandkids.mp3");
/* harmony import */ var _audio_06_AdviceToHisKids_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio/06_AdviceToHisKids.mp3 */ "./src/audio/06_AdviceToHisKids.mp3");
/* harmony import */ var _audio_07_MessageToTheFamily_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/07_MessageToTheFamily.mp3 */ "./src/audio/07_MessageToTheFamily.mp3");
/* harmony import */ var _audio_08_MessageToMom_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio/08_MessageToMom.mp3 */ "./src/audio/08_MessageToMom.mp3");
/* harmony import */ var _audio_09_DadSingsKristofferson_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/09_DadSingsKristofferson.mp3 */ "./src/audio/09_DadSingsKristofferson.mp3");
/* harmony import */ var _icons_play_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/play.svg */ "./src/icons/play.svg");
/* harmony import */ var _icons_pause_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/pause.svg */ "./src/icons/pause.svg");













const loadAudio = () => {
  const tracks = [
    _audio_01_EarlyLife_mp3__WEBPACK_IMPORTED_MODULE_1__,
    _audio_02_MomKidsCarpentry_mp3__WEBPACK_IMPORTED_MODULE_2__,
    _audio_03_Nature_mp3__WEBPACK_IMPORTED_MODULE_3__,
    _audio_04_Religion_mp3__WEBPACK_IMPORTED_MODULE_4__,
    _audio_05_AdviceToGrandkids_mp3__WEBPACK_IMPORTED_MODULE_5__,
    _audio_06_AdviceToHisKids_mp3__WEBPACK_IMPORTED_MODULE_6__,
    _audio_07_MessageToTheFamily_mp3__WEBPACK_IMPORTED_MODULE_7__,
    _audio_08_MessageToMom_mp3__WEBPACK_IMPORTED_MODULE_8__,
    _audio_09_DadSingsKristofferson_mp3__WEBPACK_IMPORTED_MODULE_9__,
  ];

  const titles = [
    'Early life',
    'Mom, kids, carpentry',
    'Nature',
    'Religion',
    'Advice to grandkids',
    'Advice to kids',
    'Message to the family',
    'Message to Mom',
    'Dad sings Kristofferson',
  ];

  // creates a container for the tracks and appends it to DOM
  const trackContainer = document.getElementById('track-container');

  // create wavesurfer players from wavesurfermodule.js with following params
  (0,_wavesurfermodule__WEBPACK_IMPORTED_MODULE_0__["default"])(tracks, titles, trackContainer, _icons_play_svg__WEBPACK_IMPORTED_MODULE_10__, _icons_pause_svg__WEBPACK_IMPORTED_MODULE_11__);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAudio);

// OLD WAY OF LOADING AUDIO PLAYER
// const earlyLife = new Audio(EarlyLife);
// earlyLife.setAttribute('controls', 'true');
// earlyLife.classList.add('audio-player');
// earlyLife.setAttribute('name', 'early-life');
// story1.push(earlyLife);

// const momKidsCarpentry = new Audio(MomKidsCarpentry);
// momKidsCarpentry.setAttribute('controls', 'true');
// momKidsCarpentry.classList.add('audio-player');
// momKidsCarpentry.setAttribute('name', 'mom-kids-carpentry');
// story1.push(momKidsCarpentry);

// const nature = new Audio(Nature);
// nature.setAttribute('controls', 'true');
// nature.classList.add('audio-player');
// nature.setAttribute('name', 'nature');
// story1.push(nature);

// const religion = new Audio(Religion);
// religion.setAttribute('controls', 'true');
// religion.classList.add('audio-player');
// religion.setAttribute('name', 'religion');
// story1.push(religion);

// const adviceToGrandkids = new Audio(AdviceToGrandkids);
// adviceToGrandkids.setAttribute('controls', 'true');
// adviceToGrandkids.classList.add('audio-player');
// adviceToGrandkids.setAttribute('name', 'advice-to-grandkids');
// story1.push(adviceToGrandkids);

// const adviceToHisKids = new Audio(AdviceToHisKids);
// adviceToHisKids.setAttribute('controls', 'true');
// adviceToHisKids.classList.add('audio-player');
// adviceToHisKids.setAttribute('name', 'advice-to-his-kids');
// story1.push(adviceToHisKids);

// const messageToTheFamily = new Audio(MessageToTheFamily);
// messageToTheFamily.setAttribute('controls', 'true');
// messageToTheFamily.classList.add('audio-player');
// messageToTheFamily.setAttribute('name', 'message-to-the-family');
// story1.push(messageToTheFamily);

// const messageToMom = new Audio(MessageToMom);
// messageToMom.setAttribute('controls', 'true');
// messageToMom.classList.add('audio-player');
// messageToMom.setAttribute('name', 'message-to-mom');
// story1.push(messageToMom);

// const dadSingsKristofferson = new Audio(DadSingsKristofferson);
// dadSingsKristofferson.setAttribute('controls', 'true');
// dadSingsKristofferson.classList.add('audio-player');
// dadSingsKristofferson.setAttribute('name', 'dad-sings-kristofferson');
// story1.push(dadSingsKristofferson);

// export default story1;


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
/* harmony import */ var _images_dad20_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/dad20.jpg */ "./src/images/dad20.jpg");
/* harmony import */ var _images_dad21_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/dad21.jpg */ "./src/images/dad21.jpg");
/* harmony import */ var _images_dad22_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/dad22.jpg */ "./src/images/dad22.jpg");
/* harmony import */ var _images_dad23_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/dad23.jpg */ "./src/images/dad23.jpg");
/* harmony import */ var _images_dad24_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/dad24.jpg */ "./src/images/dad24.jpg");
/* harmony import */ var _images_dad25_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/dad25.jpg */ "./src/images/dad25.jpg");
/* harmony import */ var _images_dad26_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/dad26.jpg */ "./src/images/dad26.jpg");
/* harmony import */ var _images_dad27_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/dad27.jpg */ "./src/images/dad27.jpg");
/* harmony import */ var _images_dad28_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/dad28.jpg */ "./src/images/dad28.jpg");
/* harmony import */ var _images_dad29_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/dad29.jpg */ "./src/images/dad29.jpg");
/* harmony import */ var _images_dad30_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/dad30.jpg */ "./src/images/dad30.jpg");
/* harmony import */ var _images_dad31_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/dad31.jpg */ "./src/images/dad31.jpg");
/* harmony import */ var _images_dad32_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/dad32.jpg */ "./src/images/dad32.jpg");
/* harmony import */ var _images_dad33_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/dad33.jpg */ "./src/images/dad33.jpg");
/* harmony import */ var _images_dad34_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/dad34.jpg */ "./src/images/dad34.jpg");
/* harmony import */ var _images_dad35_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/dad35.jpg */ "./src/images/dad35.jpg");
/* harmony import */ var _images_dad36_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/dad36.jpg */ "./src/images/dad36.jpg");
/* harmony import */ var _images_dad37_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/dad37.jpg */ "./src/images/dad37.jpg");
/* harmony import */ var _images_dad38_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/dad38.jpg */ "./src/images/dad38.jpg");
/* harmony import */ var _images_dad39_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/dad39.jpg */ "./src/images/dad39.jpg");
/* harmony import */ var _images_dad40_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/dad40.jpg */ "./src/images/dad40.jpg");
/* harmony import */ var _images_dad41_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/dad41.jpg */ "./src/images/dad41.jpg");
/* harmony import */ var _images_dad42_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/dad42.jpg */ "./src/images/dad42.jpg");
/* harmony import */ var _images_dad43_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/dad43.jpg */ "./src/images/dad43.jpg");
/* harmony import */ var _images_dad44_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/dad44.jpg */ "./src/images/dad44.jpg");
/* harmony import */ var _images_dad45_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/dad45.jpg */ "./src/images/dad45.jpg");
/* harmony import */ var _images_dad46_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/dad46.jpg */ "./src/images/dad46.jpg");
/* harmony import */ var _images_dad47_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/dad47.jpg */ "./src/images/dad47.jpg");
/* harmony import */ var _images_dad48_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/dad48.jpg */ "./src/images/dad48.jpg");
/* harmony import */ var _images_dad49_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/dad49.jpg */ "./src/images/dad49.jpg");
/* harmony import */ var _images_dad50_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/dad50.jpg */ "./src/images/dad50.jpg");
/* harmony import */ var _images_dad51_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./images/dad51.jpg */ "./src/images/dad51.jpg");
/* harmony import */ var _images_dad52_jpg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./images/dad52.jpg */ "./src/images/dad52.jpg");
/* harmony import */ var _images_dad53_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./images/dad53.jpg */ "./src/images/dad53.jpg");
/* harmony import */ var _images_dad54_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./images/dad54.jpg */ "./src/images/dad54.jpg");
/* harmony import */ var _images_dad55_jpg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./images/dad55.jpg */ "./src/images/dad55.jpg");
/* harmony import */ var _images_dad56_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./images/dad56.jpg */ "./src/images/dad56.jpg");
/* harmony import */ var _images_dad57_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./images/dad57.jpg */ "./src/images/dad57.jpg");
/* harmony import */ var _images_dad58_jpg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./images/dad58.jpg */ "./src/images/dad58.jpg");
/* harmony import */ var _images_dad59_jpg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./images/dad59.jpg */ "./src/images/dad59.jpg");
/* harmony import */ var _images_dad60_jpg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./images/dad60.jpg */ "./src/images/dad60.jpg");
/* harmony import */ var _images_dad61_jpg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./images/dad61.jpg */ "./src/images/dad61.jpg");
/* harmony import */ var _images_dad62_jpg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./images/dad62.jpg */ "./src/images/dad62.jpg");
/* harmony import */ var _images_dad63_jpg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./images/dad63.jpg */ "./src/images/dad63.jpg");
/* harmony import */ var _images_dad64_jpg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./images/dad64.jpg */ "./src/images/dad64.jpg");
/* harmony import */ var _images_dad65_jpg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./images/dad65.jpg */ "./src/images/dad65.jpg");
/* harmony import */ var _images_dad66_jpg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./images/dad66.jpg */ "./src/images/dad66.jpg");
/* harmony import */ var _images_dad67_jpg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./images/dad67.jpg */ "./src/images/dad67.jpg");
/* harmony import */ var _images_dad68_jpg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./images/dad68.jpg */ "./src/images/dad68.jpg");
/* harmony import */ var _images_dad69_jpg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./images/dad69.jpg */ "./src/images/dad69.jpg");
/* harmony import */ var _images_dad70_jpg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./images/dad70.jpg */ "./src/images/dad70.jpg");
/* harmony import */ var _images_dad71_jpg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./images/dad71.jpg */ "./src/images/dad71.jpg");
/* harmony import */ var _images_dad72_jpg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./images/dad72.jpg */ "./src/images/dad72.jpg");
/* harmony import */ var _images_dad73_jpg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./images/dad73.jpg */ "./src/images/dad73.jpg");
/* harmony import */ var _images_dad74_jpg__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./images/dad74.jpg */ "./src/images/dad74.jpg");
/* harmony import */ var _images_dad75_jpg__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./images/dad75.jpg */ "./src/images/dad75.jpg");
/* harmony import */ var _images_dad76_jpg__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./images/dad76.jpg */ "./src/images/dad76.jpg");
/* harmony import */ var _images_dad77_jpg__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./images/dad77.jpg */ "./src/images/dad77.jpg");
/* harmony import */ var _images_dad78_jpg__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./images/dad78.jpg */ "./src/images/dad78.jpg");
/* harmony import */ var _images_dad79_jpg__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./images/dad79.jpg */ "./src/images/dad79.jpg");
/* harmony import */ var _images_dad80_jpg__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./images/dad80.jpg */ "./src/images/dad80.jpg");
/* harmony import */ var _images_dad81_jpg__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./images/dad81.jpg */ "./src/images/dad81.jpg");
/* harmony import */ var _images_dad82_jpg__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./images/dad82.jpg */ "./src/images/dad82.jpg");
/* harmony import */ var _images_dad83_jpg__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./images/dad83.jpg */ "./src/images/dad83.jpg");
/* harmony import */ var _images_dad84_jpg__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./images/dad84.jpg */ "./src/images/dad84.jpg");
/* harmony import */ var _images_dad85_jpg__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./images/dad85.jpg */ "./src/images/dad85.jpg");
/* harmony import */ var _images_dad86_jpg__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./images/dad86.jpg */ "./src/images/dad86.jpg");
/* harmony import */ var _images_dad87_jpg__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./images/dad87.jpg */ "./src/images/dad87.jpg");
/* harmony import */ var _images_dad88_jpg__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./images/dad88.jpg */ "./src/images/dad88.jpg");
/* harmony import */ var _images_dad89_jpg__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./images/dad89.jpg */ "./src/images/dad89.jpg");
/* harmony import */ var _images_dad90_jpg__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./images/dad90.jpg */ "./src/images/dad90.jpg");
/* harmony import */ var _images_dad91_jpg__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./images/dad91.jpg */ "./src/images/dad91.jpg");
/* harmony import */ var _images_dad92_jpg__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./images/dad92.jpg */ "./src/images/dad92.jpg");
/* harmony import */ var _images_dad93_jpg__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./images/dad93.jpg */ "./src/images/dad93.jpg");
/* harmony import */ var _images_dad94_jpg__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./images/dad94.jpg */ "./src/images/dad94.jpg");
/* harmony import */ var _images_dad95_jpg__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./images/dad95.jpg */ "./src/images/dad95.jpg");
/* harmony import */ var _images_dad96_jpg__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./images/dad96.jpg */ "./src/images/dad96.jpg");
/* harmony import */ var _images_dad97_jpg__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./images/dad97.jpg */ "./src/images/dad97.jpg");
/* harmony import */ var _images_dad98_jpg__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./images/dad98.jpg */ "./src/images/dad98.jpg");
/* harmony import */ var _images_dad99_jpg__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./images/dad99.jpg */ "./src/images/dad99.jpg");
/* harmony import */ var _images_dad100_jpg__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./images/dad100.jpg */ "./src/images/dad100.jpg");
/* harmony import */ var _images_dad101_jpg__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./images/dad101.jpg */ "./src/images/dad101.jpg");
/* harmony import */ var _images_dad102_jpg__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./images/dad102.jpg */ "./src/images/dad102.jpg");
/* harmony import */ var _images_dad103_jpg__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./images/dad103.jpg */ "./src/images/dad103.jpg");
/* harmony import */ var _images_dad104_jpg__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./images/dad104.jpg */ "./src/images/dad104.jpg");
/* harmony import */ var _images_dad105_jpg__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./images/dad105.jpg */ "./src/images/dad105.jpg");
/* harmony import */ var _images_dad106_jpg__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./images/dad106.jpg */ "./src/images/dad106.jpg");
/* harmony import */ var _images_dad107_jpg__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./images/dad107.jpg */ "./src/images/dad107.jpg");
/* harmony import */ var _images_dad108_jpg__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./images/dad108.jpg */ "./src/images/dad108.jpg");
/* harmony import */ var _images_dad109_jpg__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./images/dad109.jpg */ "./src/images/dad109.jpg");
/* harmony import */ var _images_dad110_jpg__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./images/dad110.jpg */ "./src/images/dad110.jpg");
/* harmony import */ var _images_dad111_jpg__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./images/dad111.jpg */ "./src/images/dad111.jpg");
/* harmony import */ var _images_dad112_jpg__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./images/dad112.jpg */ "./src/images/dad112.jpg");
/* harmony import */ var _images_dad113_jpg__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./images/dad113.jpg */ "./src/images/dad113.jpg");
/* harmony import */ var _images_dad114_jpg__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./images/dad114.jpg */ "./src/images/dad114.jpg");
/* harmony import */ var _images_dad115_jpg__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./images/dad115.jpg */ "./src/images/dad115.jpg");
/* harmony import */ var _images_dad116_jpg__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./images/dad116.jpg */ "./src/images/dad116.jpg");
/* harmony import */ var _images_dad117_jpg__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./images/dad117.jpg */ "./src/images/dad117.jpg");
/* harmony import */ var _images_dad118_jpg__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./images/dad118.jpg */ "./src/images/dad118.jpg");
/* harmony import */ var _images_dad119_jpg__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./images/dad119.jpg */ "./src/images/dad119.jpg");
/* harmony import */ var _images_dad120_jpg__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./images/dad120.jpg */ "./src/images/dad120.jpg");
/* harmony import */ var _images_dad121_jpg__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./images/dad121.jpg */ "./src/images/dad121.jpg");
/* harmony import */ var _images_dad122_jpg__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./images/dad122.jpg */ "./src/images/dad122.jpg");
/* harmony import */ var _images_dad123_jpg__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./images/dad123.jpg */ "./src/images/dad123.jpg");
/* harmony import */ var _images_dad124_jpg__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./images/dad124.jpg */ "./src/images/dad124.jpg");
/* harmony import */ var _images_dad125_jpg__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./images/dad125.jpg */ "./src/images/dad125.jpg");
/* harmony import */ var _images_dad126_jpg__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./images/dad126.jpg */ "./src/images/dad126.jpg");
/* harmony import */ var _images_dad127_jpg__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./images/dad127.jpg */ "./src/images/dad127.jpg");
/* harmony import */ var _images_dad128_jpg__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./images/dad128.jpg */ "./src/images/dad128.jpg");
/* harmony import */ var _images_dad129_jpg__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./images/dad129.jpg */ "./src/images/dad129.jpg");
/* harmony import */ var _images_dad130_jpg__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./images/dad130.jpg */ "./src/images/dad130.jpg");
/* harmony import */ var _images_dad131_jpg__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./images/dad131.jpg */ "./src/images/dad131.jpg");
/* harmony import */ var _images_dad132_jpg__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./images/dad132.jpg */ "./src/images/dad132.jpg");
/* harmony import */ var _images_dad133_jpg__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./images/dad133.jpg */ "./src/images/dad133.jpg");
/* harmony import */ var _images_dad134_jpg__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./images/dad134.jpg */ "./src/images/dad134.jpg");
/* harmony import */ var _images_dad135_jpg__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./images/dad135.jpg */ "./src/images/dad135.jpg");
/* harmony import */ var _images_dad136_jpg__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./images/dad136.jpg */ "./src/images/dad136.jpg");
/* harmony import */ var _images_dad137_jpg__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./images/dad137.jpg */ "./src/images/dad137.jpg");
/* harmony import */ var _images_dad138_jpg__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./images/dad138.jpg */ "./src/images/dad138.jpg");
/* harmony import */ var _images_dad139_jpg__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./images/dad139.jpg */ "./src/images/dad139.jpg");
/* harmony import */ var _images_dad140_jpg__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./images/dad140.jpg */ "./src/images/dad140.jpg");
/* harmony import */ var _images_dad141_jpg__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./images/dad141.jpg */ "./src/images/dad141.jpg");
/* harmony import */ var _images_dad142_jpg__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./images/dad142.jpg */ "./src/images/dad142.jpg");
/* harmony import */ var _images_dad143_jpg__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./images/dad143.jpg */ "./src/images/dad143.jpg");
/* harmony import */ var _images_dad144_jpg__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./images/dad144.jpg */ "./src/images/dad144.jpg");
/* harmony import */ var _images_dad145_jpg__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./images/dad145.jpg */ "./src/images/dad145.jpg");
/* harmony import */ var _images_dad146_jpg__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./images/dad146.jpg */ "./src/images/dad146.jpg");
/* harmony import */ var _images_dad147_jpg__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./images/dad147.jpg */ "./src/images/dad147.jpg");
/* harmony import */ var _images_dad148_jpg__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./images/dad148.jpg */ "./src/images/dad148.jpg");
/* harmony import */ var _images_dad149_jpg__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./images/dad149.jpg */ "./src/images/dad149.jpg");
/* harmony import */ var _images_dad150_jpg__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./images/dad150.jpg */ "./src/images/dad150.jpg");
/* harmony import */ var _images_dad151_jpg__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./images/dad151.jpg */ "./src/images/dad151.jpg");
/* harmony import */ var _images_dad152_jpg__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./images/dad152.jpg */ "./src/images/dad152.jpg");
/* harmony import */ var _images_dad153_jpg__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./images/dad153.jpg */ "./src/images/dad153.jpg");
/* harmony import */ var _images_dad154_jpg__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./images/dad154.jpg */ "./src/images/dad154.jpg");
/* harmony import */ var _images_dad155_jpg__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./images/dad155.jpg */ "./src/images/dad155.jpg");
/* harmony import */ var _images_dad156_jpg__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./images/dad156.jpg */ "./src/images/dad156.jpg");





























































































































































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

const dad20 = new Image();
dad20.src = _images_dad20_jpg__WEBPACK_IMPORTED_MODULE_19__;
images.push(dad20);

const dad21 = new Image();
dad21.src = _images_dad21_jpg__WEBPACK_IMPORTED_MODULE_20__;
images.push(dad21);

const dad22 = new Image();
dad22.src = _images_dad22_jpg__WEBPACK_IMPORTED_MODULE_21__;
images.push(dad22);

const dad23 = new Image();
dad23.src = _images_dad23_jpg__WEBPACK_IMPORTED_MODULE_22__;
images.push(dad23);

const dad24 = new Image();
dad24.src = _images_dad24_jpg__WEBPACK_IMPORTED_MODULE_23__;
images.push(dad24);

const dad25 = new Image();
dad25.src = _images_dad25_jpg__WEBPACK_IMPORTED_MODULE_24__;
images.push(dad25);

const dad26 = new Image();
dad26.src = _images_dad26_jpg__WEBPACK_IMPORTED_MODULE_25__;
images.push(dad26);

const dad27 = new Image();
dad27.src = _images_dad27_jpg__WEBPACK_IMPORTED_MODULE_26__;
images.push(dad27);

const dad28 = new Image();
dad28.src = _images_dad28_jpg__WEBPACK_IMPORTED_MODULE_27__;
images.push(dad28);

const dad29 = new Image();
dad29.src = _images_dad29_jpg__WEBPACK_IMPORTED_MODULE_28__;
images.push(dad29);

const dad30 = new Image();
dad30.src = _images_dad30_jpg__WEBPACK_IMPORTED_MODULE_29__;
images.push(dad30);

const dad31 = new Image();
dad31.src = _images_dad31_jpg__WEBPACK_IMPORTED_MODULE_30__;
images.push(dad31);

const dad32 = new Image();
dad32.src = _images_dad32_jpg__WEBPACK_IMPORTED_MODULE_31__;
images.push(dad32);

const dad33 = new Image();
dad33.src = _images_dad33_jpg__WEBPACK_IMPORTED_MODULE_32__;
images.push(dad33);

const dad34 = new Image();
dad34.src = _images_dad34_jpg__WEBPACK_IMPORTED_MODULE_33__;
images.push(dad34);

const dad35 = new Image();
dad35.src = _images_dad35_jpg__WEBPACK_IMPORTED_MODULE_34__;
images.push(dad35);

const dad36 = new Image();
dad36.src = _images_dad36_jpg__WEBPACK_IMPORTED_MODULE_35__;
images.push(dad36);

const dad37 = new Image();
dad37.src = _images_dad37_jpg__WEBPACK_IMPORTED_MODULE_36__;
images.push(dad37);

const dad38 = new Image();
dad38.src = _images_dad38_jpg__WEBPACK_IMPORTED_MODULE_37__;
images.push(dad38);

const dad39 = new Image();
dad39.src = _images_dad39_jpg__WEBPACK_IMPORTED_MODULE_38__;
images.push(dad39);

const dad40 = new Image();
dad40.src = _images_dad40_jpg__WEBPACK_IMPORTED_MODULE_39__;
images.push(dad40);

const dad41 = new Image();
dad41.src = _images_dad41_jpg__WEBPACK_IMPORTED_MODULE_40__;
images.push(dad41);

const dad42 = new Image();
dad42.src = _images_dad42_jpg__WEBPACK_IMPORTED_MODULE_41__;
images.push(dad42);

const dad43 = new Image();
dad43.src = _images_dad43_jpg__WEBPACK_IMPORTED_MODULE_42__;
images.push(dad43);

const dad44 = new Image();
dad44.src = _images_dad44_jpg__WEBPACK_IMPORTED_MODULE_43__;
images.push(dad44);

const dad45 = new Image();
dad45.src = _images_dad45_jpg__WEBPACK_IMPORTED_MODULE_44__;
images.push(dad45);

const dad46 = new Image();
dad46.src = _images_dad46_jpg__WEBPACK_IMPORTED_MODULE_45__;
images.push(dad46);

const dad47 = new Image();
dad47.src = _images_dad47_jpg__WEBPACK_IMPORTED_MODULE_46__;
images.push(dad47);

const dad48 = new Image();
dad48.src = _images_dad48_jpg__WEBPACK_IMPORTED_MODULE_47__;
images.push(dad48);

const dad49 = new Image();
dad49.src = _images_dad49_jpg__WEBPACK_IMPORTED_MODULE_48__;
images.push(dad49);

const dad50 = new Image();
dad50.src = _images_dad50_jpg__WEBPACK_IMPORTED_MODULE_49__;
images.push(dad50);

const dad51 = new Image();
dad51.src = _images_dad51_jpg__WEBPACK_IMPORTED_MODULE_50__;
images.push(dad51);

const dad52 = new Image();
dad52.src = _images_dad52_jpg__WEBPACK_IMPORTED_MODULE_51__;
images.push(dad52);

const dad53 = new Image();
dad53.src = _images_dad53_jpg__WEBPACK_IMPORTED_MODULE_52__;
images.push(dad53);

const dad54 = new Image();
dad54.src = _images_dad54_jpg__WEBPACK_IMPORTED_MODULE_53__;
images.push(dad54);

const dad55 = new Image();
dad55.src = _images_dad55_jpg__WEBPACK_IMPORTED_MODULE_54__;
images.push(dad55);

const dad56 = new Image();
dad56.src = _images_dad56_jpg__WEBPACK_IMPORTED_MODULE_55__;
images.push(dad56);

const dad57 = new Image();
dad57.src = _images_dad57_jpg__WEBPACK_IMPORTED_MODULE_56__;
images.push(dad57);

const dad58 = new Image();
dad58.src = _images_dad58_jpg__WEBPACK_IMPORTED_MODULE_57__;
images.push(dad58);

const dad59 = new Image();
dad59.src = _images_dad59_jpg__WEBPACK_IMPORTED_MODULE_58__;
images.push(dad59);

const dad60 = new Image();
dad60.src = _images_dad60_jpg__WEBPACK_IMPORTED_MODULE_59__;
images.push(dad60);

const dad61 = new Image();
dad61.src = _images_dad61_jpg__WEBPACK_IMPORTED_MODULE_60__;
images.push(dad61);

const dad62 = new Image();
dad62.src = _images_dad62_jpg__WEBPACK_IMPORTED_MODULE_61__;
images.push(dad62);

const dad63 = new Image();
dad63.src = _images_dad63_jpg__WEBPACK_IMPORTED_MODULE_62__;
images.push(dad63);

const dad64 = new Image();
dad64.src = _images_dad64_jpg__WEBPACK_IMPORTED_MODULE_63__;
images.push(dad64);

const dad65 = new Image();
dad65.src = _images_dad65_jpg__WEBPACK_IMPORTED_MODULE_64__;
images.push(dad65);

const dad66 = new Image();
dad66.src = _images_dad66_jpg__WEBPACK_IMPORTED_MODULE_65__;
images.push(dad66);

const dad67 = new Image();
dad67.src = _images_dad67_jpg__WEBPACK_IMPORTED_MODULE_66__;
images.push(dad67);

const dad68 = new Image();
dad68.src = _images_dad68_jpg__WEBPACK_IMPORTED_MODULE_67__;
images.push(dad68);

const dad69 = new Image();
dad69.src = _images_dad69_jpg__WEBPACK_IMPORTED_MODULE_68__;
images.push(dad69);

const dad70 = new Image();
dad70.src = _images_dad70_jpg__WEBPACK_IMPORTED_MODULE_69__;
images.push(dad70);

const dad71 = new Image();
dad71.src = _images_dad71_jpg__WEBPACK_IMPORTED_MODULE_70__;
images.push(dad71);

const dad72 = new Image();
dad72.src = _images_dad72_jpg__WEBPACK_IMPORTED_MODULE_71__;
images.push(dad72);

const dad73 = new Image();
dad73.src = _images_dad73_jpg__WEBPACK_IMPORTED_MODULE_72__;
images.push(dad73);

const dad74 = new Image();
dad74.src = _images_dad74_jpg__WEBPACK_IMPORTED_MODULE_73__;
images.push(dad74);

const dad75 = new Image();
dad75.src = _images_dad75_jpg__WEBPACK_IMPORTED_MODULE_74__;
images.push(dad75);

const dad76 = new Image();
dad76.src = _images_dad76_jpg__WEBPACK_IMPORTED_MODULE_75__;
images.push(dad76);

const dad77 = new Image();
dad77.src = _images_dad77_jpg__WEBPACK_IMPORTED_MODULE_76__;
images.push(dad77);

const dad78 = new Image();
dad78.src = _images_dad78_jpg__WEBPACK_IMPORTED_MODULE_77__;
images.push(dad78);

const dad79 = new Image();
dad79.src = _images_dad79_jpg__WEBPACK_IMPORTED_MODULE_78__;
images.push(dad79);

const dad80 = new Image();
dad80.src = _images_dad80_jpg__WEBPACK_IMPORTED_MODULE_79__;
images.push(dad80);

const dad81 = new Image();
dad81.src = _images_dad81_jpg__WEBPACK_IMPORTED_MODULE_80__;
images.push(dad81);

const dad82 = new Image();
dad82.src = _images_dad82_jpg__WEBPACK_IMPORTED_MODULE_81__;
images.push(dad82);

const dad83 = new Image();
dad83.src = _images_dad83_jpg__WEBPACK_IMPORTED_MODULE_82__;
images.push(dad83);

const dad84 = new Image();
dad84.src = _images_dad84_jpg__WEBPACK_IMPORTED_MODULE_83__;
images.push(dad84);

const dad85 = new Image();
dad85.src = _images_dad85_jpg__WEBPACK_IMPORTED_MODULE_84__;
images.push(dad85);

const dad86 = new Image();
dad86.src = _images_dad86_jpg__WEBPACK_IMPORTED_MODULE_85__;
images.push(dad86);

const dad87 = new Image();
dad87.src = _images_dad87_jpg__WEBPACK_IMPORTED_MODULE_86__;
images.push(dad87);

const dad88 = new Image();
dad88.src = _images_dad88_jpg__WEBPACK_IMPORTED_MODULE_87__;
images.push(dad88);

const dad89 = new Image();
dad89.src = _images_dad89_jpg__WEBPACK_IMPORTED_MODULE_88__;
images.push(dad89);

const dad90 = new Image();
dad90.src = _images_dad90_jpg__WEBPACK_IMPORTED_MODULE_89__;
images.push(dad90);

const dad91 = new Image();
dad91.src = _images_dad91_jpg__WEBPACK_IMPORTED_MODULE_90__;
images.push(dad91);

const dad92 = new Image();
dad92.src = _images_dad92_jpg__WEBPACK_IMPORTED_MODULE_91__;
images.push(dad92);

const dad93 = new Image();
dad93.src = _images_dad93_jpg__WEBPACK_IMPORTED_MODULE_92__;
images.push(dad93);

const dad94 = new Image();
dad94.src = _images_dad94_jpg__WEBPACK_IMPORTED_MODULE_93__;
images.push(dad94);

const dad95 = new Image();
dad95.src = _images_dad95_jpg__WEBPACK_IMPORTED_MODULE_94__;
images.push(dad95);

const dad96 = new Image();
dad96.src = _images_dad96_jpg__WEBPACK_IMPORTED_MODULE_95__;
images.push(dad96);

const dad97 = new Image();
dad97.src = _images_dad97_jpg__WEBPACK_IMPORTED_MODULE_96__;
images.push(dad97);

const dad98 = new Image();
dad98.src = _images_dad98_jpg__WEBPACK_IMPORTED_MODULE_97__;
images.push(dad98);

const dad99 = new Image();
dad99.src = _images_dad99_jpg__WEBPACK_IMPORTED_MODULE_98__;
images.push(dad99);

const dad100 = new Image();
dad100.src = _images_dad100_jpg__WEBPACK_IMPORTED_MODULE_99__;
images.push(dad100);

const dad101 = new Image();
dad101.src = _images_dad101_jpg__WEBPACK_IMPORTED_MODULE_100__;
images.push(dad101);

const dad102 = new Image();
dad102.src = _images_dad102_jpg__WEBPACK_IMPORTED_MODULE_101__;
images.push(dad102);

const dad103 = new Image();
dad103.src = _images_dad103_jpg__WEBPACK_IMPORTED_MODULE_102__;
images.push(dad103);

const dad104 = new Image();
dad104.src = _images_dad104_jpg__WEBPACK_IMPORTED_MODULE_103__;
images.push(dad104);

const dad105 = new Image();
dad105.src = _images_dad105_jpg__WEBPACK_IMPORTED_MODULE_104__;
images.push(dad105);

const dad106 = new Image();
dad106.src = _images_dad106_jpg__WEBPACK_IMPORTED_MODULE_105__;
images.push(dad106);

const dad107 = new Image();
dad107.src = _images_dad107_jpg__WEBPACK_IMPORTED_MODULE_106__;
images.push(dad107);

const dad108 = new Image();
dad108.src = _images_dad108_jpg__WEBPACK_IMPORTED_MODULE_107__;
images.push(dad108);

const dad109 = new Image();
dad109.src = _images_dad109_jpg__WEBPACK_IMPORTED_MODULE_108__;
images.push(dad109);

const dad110 = new Image();
dad110.src = _images_dad110_jpg__WEBPACK_IMPORTED_MODULE_109__;
images.push(dad110);

const dad111 = new Image();
dad111.src = _images_dad111_jpg__WEBPACK_IMPORTED_MODULE_110__;
images.push(dad111);

const dad112 = new Image();
dad112.src = _images_dad112_jpg__WEBPACK_IMPORTED_MODULE_111__;
images.push(dad112);

const dad113 = new Image();
dad113.src = _images_dad113_jpg__WEBPACK_IMPORTED_MODULE_112__;
images.push(dad113);

const dad114 = new Image();
dad114.src = _images_dad114_jpg__WEBPACK_IMPORTED_MODULE_113__;
images.push(dad114);

const dad115 = new Image();
dad115.src = _images_dad115_jpg__WEBPACK_IMPORTED_MODULE_114__;
images.push(dad115);

const dad116 = new Image();
dad116.src = _images_dad116_jpg__WEBPACK_IMPORTED_MODULE_115__;
images.push(dad116);

const dad117 = new Image();
dad117.src = _images_dad117_jpg__WEBPACK_IMPORTED_MODULE_116__;
images.push(dad117);

const dad118 = new Image();
dad118.src = _images_dad118_jpg__WEBPACK_IMPORTED_MODULE_117__;
images.push(dad118);

const dad119 = new Image();
dad119.src = _images_dad119_jpg__WEBPACK_IMPORTED_MODULE_118__;
images.push(dad119);

const dad120 = new Image();
dad120.src = _images_dad120_jpg__WEBPACK_IMPORTED_MODULE_119__;
images.push(dad120);

const dad121 = new Image();
dad121.src = _images_dad121_jpg__WEBPACK_IMPORTED_MODULE_120__;
images.push(dad121);

const dad122 = new Image();
dad122.src = _images_dad122_jpg__WEBPACK_IMPORTED_MODULE_121__;
images.push(dad122);

const dad123 = new Image();
dad123.src = _images_dad123_jpg__WEBPACK_IMPORTED_MODULE_122__;
images.push(dad123);

const dad124 = new Image();
dad124.src = _images_dad124_jpg__WEBPACK_IMPORTED_MODULE_123__;
images.push(dad124);

const dad125 = new Image();
dad125.src = _images_dad125_jpg__WEBPACK_IMPORTED_MODULE_124__;
images.push(dad125);

const dad126 = new Image();
dad126.src = _images_dad126_jpg__WEBPACK_IMPORTED_MODULE_125__;
images.push(dad126);

const dad127 = new Image();
dad127.src = _images_dad127_jpg__WEBPACK_IMPORTED_MODULE_126__;
images.push(dad127);

const dad128 = new Image();
dad128.src = _images_dad128_jpg__WEBPACK_IMPORTED_MODULE_127__;
images.push(dad128);

const dad129 = new Image();
dad129.src = _images_dad129_jpg__WEBPACK_IMPORTED_MODULE_128__;
images.push(dad129);

const dad130 = new Image();
dad130.src = _images_dad130_jpg__WEBPACK_IMPORTED_MODULE_129__;
images.push(dad130);

const dad131 = new Image();
dad131.src = _images_dad131_jpg__WEBPACK_IMPORTED_MODULE_130__;
images.push(dad131);

const dad132 = new Image();
dad132.src = _images_dad132_jpg__WEBPACK_IMPORTED_MODULE_131__;
images.push(dad132);

const dad133 = new Image();
dad133.src = _images_dad133_jpg__WEBPACK_IMPORTED_MODULE_132__;
images.push(dad133);

const dad134 = new Image();
dad134.src = _images_dad134_jpg__WEBPACK_IMPORTED_MODULE_133__;
images.push(dad134);

const dad135 = new Image();
dad135.src = _images_dad135_jpg__WEBPACK_IMPORTED_MODULE_134__;
images.push(dad135);

const dad136 = new Image();
dad136.src = _images_dad136_jpg__WEBPACK_IMPORTED_MODULE_135__;
images.push(dad136);

const dad137 = new Image();
dad137.src = _images_dad137_jpg__WEBPACK_IMPORTED_MODULE_136__;
images.push(dad137);

const dad138 = new Image();
dad138.src = _images_dad138_jpg__WEBPACK_IMPORTED_MODULE_137__;
images.push(dad138);

const dad139 = new Image();
dad139.src = _images_dad139_jpg__WEBPACK_IMPORTED_MODULE_138__;
images.push(dad139);

const dad140 = new Image();
dad140.src = _images_dad140_jpg__WEBPACK_IMPORTED_MODULE_139__;
images.push(dad140);

const dad141 = new Image();
dad141.src = _images_dad141_jpg__WEBPACK_IMPORTED_MODULE_140__;
images.push(dad141);

const dad142 = new Image();
dad142.src = _images_dad142_jpg__WEBPACK_IMPORTED_MODULE_141__;
images.push(dad142);

const dad143 = new Image();
dad143.src = _images_dad143_jpg__WEBPACK_IMPORTED_MODULE_142__;
images.push(dad143);

const dad144 = new Image();
dad144.src = _images_dad144_jpg__WEBPACK_IMPORTED_MODULE_143__;
images.push(dad144);

const dad145 = new Image();
dad145.src = _images_dad145_jpg__WEBPACK_IMPORTED_MODULE_144__;
images.push(dad145);

const dad146 = new Image();
dad146.src = _images_dad146_jpg__WEBPACK_IMPORTED_MODULE_145__;
images.push(dad146);

const dad147 = new Image();
dad147.src = _images_dad147_jpg__WEBPACK_IMPORTED_MODULE_146__;
images.push(dad147);

const dad148 = new Image();
dad148.src = _images_dad148_jpg__WEBPACK_IMPORTED_MODULE_147__;
images.push(dad148);

const dad149 = new Image();
dad149.src = _images_dad149_jpg__WEBPACK_IMPORTED_MODULE_148__;
images.push(dad149);

const dad150 = new Image();
dad150.src = _images_dad150_jpg__WEBPACK_IMPORTED_MODULE_149__;
images.push(dad150);

const dad151 = new Image();
dad151.src = _images_dad151_jpg__WEBPACK_IMPORTED_MODULE_150__;
images.push(dad151);

const dad152 = new Image();
dad152.src = _images_dad152_jpg__WEBPACK_IMPORTED_MODULE_151__;
images.push(dad152);

const dad153 = new Image();
dad153.src = _images_dad153_jpg__WEBPACK_IMPORTED_MODULE_152__;
images.push(dad153);

const dad154 = new Image();
dad154.src = _images_dad154_jpg__WEBPACK_IMPORTED_MODULE_153__;
images.push(dad154);

const dad155 = new Image();
dad155.src = _images_dad155_jpg__WEBPACK_IMPORTED_MODULE_154__;
images.push(dad155);

const dad156 = new Image();
dad156.src = _images_dad156_jpg__WEBPACK_IMPORTED_MODULE_155__;
images.push(dad156);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);


/***/ }),

/***/ "./src/wavesurfermodule.js":
/*!*********************************!*\
  !*** ./src/wavesurfermodule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");
// this module creates wavesurfer audio player instaces by looping over arrays
// as params, the function takes an array of audio files, an array of track titles,
// a target parent DOM element the container full of players will be appened to,
// and images for the play and pause button.
//
// js stlyle is included at end for a default load.
// each DOM element created gets a css selector so
// it is expected that the js style will be commented out and custom css applied



const createPlayer = (
  audioArray,
  trackTitles,
  targetParent,
  playImg,
  pauseImg,
) => {
  // let initiated = false;
  // const updateinitiation = (a) => {
  //   initiated = a;
  // };
  for (let i = 0; i < audioArray.length; i += 1) {
    // create a track div w/ id of track[i], add class, append to targetParent
    const track = document.createElement('div');
    track.id = `track${[i]}`;
    track.classList.add('track');
    targetParent.appendChild(track);

    // create accompanying track title in DOM, assign it from trackTitles[i]
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = trackTitles[i];
    track.appendChild(trackTitle);

    // create wavesurfer instance with options applied, append to the above track div
    const wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_0__["default"].create({
      container: `#track${[i]}`,
      waveColor: '#c4c3c4',
      progressColor: 'rgb(152, 77, 196)',
      height: 85,
      barWidth: 0,
      barRadius: 0,
      cursorWidth: 0,
      autoplay: false,
      dragToSeek: true,
    });

    // load wavesurfer with audio file
    wavesurfer.load(audioArray[i]);

    // optionsDisplay container for play/pause and timeDisplay
    const optionsDisplay = document.createElement('div');
    optionsDisplay.classList.add('options-display');
    track.appendChild(optionsDisplay);

    // create play/pause button
    const playBtn = document.createElement('button');
    playBtn.classList.add('play-btn');

    // create play img
    const play = new Image();
    play.src = playImg;
    play.classList.add('play-img');

    // create pause img
    const pause = new Image();
    pause.src = pauseImg;
    pause.classList.add('pause-img');

    // set play button as default display on load
    playBtn.appendChild(play);

    // on click, playBtn plays or pauses the wavesurfer instance
    playBtn.onclick = () => {
      // const timeHolder = wavesurfer.getCurrentTime();
      // wavesurfer.setTime(timeHolder);
      wavesurfer.playPause();
      // updateinitiation(true);
      // console.log(initiated)
    };

    // when paused, show the play img
    wavesurfer.on('pause', () => {
      playBtn.replaceChild(play, pause);
      // wavesurfer.waveColor = 'blue';
    });

    // when playing, show, the pause img
    wavesurfer.on('play', () => {
      playBtn.replaceChild(pause, play);
    });

    // append optionsdisplay to track
    optionsDisplay.appendChild(playBtn);

    // timeDisplay container, currentTime container and durationTime container and class assignments
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('time-display');

    const currentDisplay = document.createElement('div');
    currentDisplay.classList.add('current-display');

    const durationDisplay = document.createElement('div');
    durationDisplay.classList.add('durationDisplay');

    // divider to sperate displays and its text
    const divider = document.createElement('div');
    divider.classList.add('divider');
    divider.textContent = '/';

    // takes time in miliseconds and formats to a 60base mm:ss display
    const formatTime = (time) => [
      Math.floor((time % 3600) / 60), // minutes
      `00${Math.floor(time % 60)}`.slice(-2), // seconds
    ].join(':');

    // set initial current time to 00:00
    currentDisplay.textContent = '0:00';
    // whenever track time updates, update current time display

    // wavesurfer.on('seeking', () => {
    //   currentDisplay.textContent = formatTime(wavesurfer.getCurrentTime());
    //   const seekUpdate = wavesurfer.getCurrentTime();
    //   wavesurfer.setTime(seekUpdate);
    // console.log(wavesurfer.getCurrentTime());
    // });

    wavesurfer.on('timeupdate', () => {
      currentDisplay.textContent = formatTime(wavesurfer.getCurrentTime());
      // console.log(wavesurfer.getCurrentTime());
    });

    // set intial duration time to 00:00 until ready - just to fill the space
    durationDisplay.textContent = '0:00';
    // when track is decoded and ready to play, display track duration
    wavesurfer.on('ready', () => {
      durationDisplay.textContent = formatTime(wavesurfer.getDuration());
    });

    // THE RATIONALE
    // prevents issue on mobile: audioContext is not started until first user play interaction
    // this means if user seeks ahead before hitting play - track still starts form 00:00,
    // not the new time seeked to, becuase seek occured before audio interaction initiated
    // and then the time display is out of sync and the entire seeking ui is out of sync.

    // THE CODE
    // using.once method, make the first click on the wavesurfer object
    // create a promise that audio is playing.
    // if promise becomes satisfied, immediately mute audio.
    // this initiates audio context w/o user hearing audio, updates time, gets everything in sync
    // we wait for the succesfully returned promise because .play() is a promise
    // we dont want to interrupt its process by muting it before it can complete
    // so we wait for confirmation of completion, then .pause()

    // if (initiated === false) {
    wavesurfer.once('mousedown', () => {
      wavesurfer.play();
      // const playPromise = wavesurfer.play();
      // if (playPromise !== undefined) {
      //   playPromise.then(() => {
      //     console.log('initiated');
      //     wavesurfer.pause();
      //   });
      // .catch((error) => {
      // Auto-play was prevented
      // Show paused UI.
      // });
      // }
    });
    // }

    // if (initiated === true) {

    // }

    // append time elements to timeDisplay
    timeDisplay.appendChild(currentDisplay);
    timeDisplay.appendChild(divider);
    timeDisplay.appendChild(durationDisplay);

    // append timeDisplay to optionsDisplay
    optionsDisplay.appendChild(timeDisplay);

    // js style for default that can be commented
    // DOM elements can be grabbed by assigned css selector
    // trackTitle.style.fontSize = '20px';

    // optionsDisplay.style.display = 'flex';
    // optionsDisplay.style.gap = '20px';
    // optionsDisplay.style.margin = '0 0 40px 0';
    // optionsDisplay.style.alignItems = 'center';

    // playBtn.style.display = 'flex';
    // playBtn.style.alignItems = 'center';
    // playBtn.style.borderRadius = '25px';
    // playBtn.style.border = 'none';
    // playBtn.style.backgroundColor = 'white';

    // play.style.height = '30px';
    // play.style.width = '30px';
    // pause.style.height = '30px';
    // pause.style.width = '30px';

    // timeDisplay.style.display = 'flex';
    // timeDisplay.style.gap = '5px';

    // // playBtn can be grabbed by class and have ::hover applied for better results
    // playBtn.addEventListener('mouseenter', () => {
    //   playBtn.style.backgroundColor = '#c4c3c4';
    // });

    // playBtn.addEventListener('mouseleave', () => {
    //   playBtn.style.backgroundColor = 'white';
    // });
    //   const initiated = false;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);


/***/ }),

/***/ "./src/audio/01_EarlyLife.mp3":
/*!************************************!*\
  !*** ./src/audio/01_EarlyLife.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bda7fd0250c7f24570a4.mp3";

/***/ }),

/***/ "./src/audio/02_MomKidsCarpentry.mp3":
/*!*******************************************!*\
  !*** ./src/audio/02_MomKidsCarpentry.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ef86dd1557d36e69fd7.mp3";

/***/ }),

/***/ "./src/audio/03_Nature.mp3":
/*!*********************************!*\
  !*** ./src/audio/03_Nature.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd17d4ce044b51134396.mp3";

/***/ }),

/***/ "./src/audio/04_Religion.mp3":
/*!***********************************!*\
  !*** ./src/audio/04_Religion.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23d5153cba9a69ef3b29.mp3";

/***/ }),

/***/ "./src/audio/05_AdviceToGrandkids.mp3":
/*!********************************************!*\
  !*** ./src/audio/05_AdviceToGrandkids.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e750cf78bf5f300e7db6.mp3";

/***/ }),

/***/ "./src/audio/06_AdviceToHisKids.mp3":
/*!******************************************!*\
  !*** ./src/audio/06_AdviceToHisKids.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a77f8045dbee3293038.mp3";

/***/ }),

/***/ "./src/audio/07_MessageToTheFamily.mp3":
/*!*********************************************!*\
  !*** ./src/audio/07_MessageToTheFamily.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1765fef31e80a41c2de.mp3";

/***/ }),

/***/ "./src/audio/08_MessageToMom.mp3":
/*!***************************************!*\
  !*** ./src/audio/08_MessageToMom.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3677703f8f08e45a98d7.mp3";

/***/ }),

/***/ "./src/audio/09_DadSingsKristofferson.mp3":
/*!************************************************!*\
  !*** ./src/audio/09_DadSingsKristofferson.mp3 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e847eb14bbc09a3f37f.mp3";

/***/ }),

/***/ "./src/icons/pause.svg":
/*!*****************************!*\
  !*** ./src/icons/pause.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fdfa4a59b3d155367d5.svg";

/***/ }),

/***/ "./src/icons/play.svg":
/*!****************************!*\
  !*** ./src/icons/play.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ee4a23d852217c79e80.svg";

/***/ }),

/***/ "./src/images/dad1.jpg":
/*!*****************************!*\
  !*** ./src/images/dad1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "589964cd9599abde783e.jpg";

/***/ }),

/***/ "./src/images/dad10.jpg":
/*!******************************!*\
  !*** ./src/images/dad10.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18ae848687347da3bf24.jpg";

/***/ }),

/***/ "./src/images/dad100.jpg":
/*!*******************************!*\
  !*** ./src/images/dad100.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ad6444e9998ee7b8465.jpg";

/***/ }),

/***/ "./src/images/dad101.jpg":
/*!*******************************!*\
  !*** ./src/images/dad101.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b1e6738e2a7ee520654.jpg";

/***/ }),

/***/ "./src/images/dad102.jpg":
/*!*******************************!*\
  !*** ./src/images/dad102.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d32c5a6231d5105f930.jpg";

/***/ }),

/***/ "./src/images/dad103.jpg":
/*!*******************************!*\
  !*** ./src/images/dad103.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b172eec1ff28efba728.jpg";

/***/ }),

/***/ "./src/images/dad104.jpg":
/*!*******************************!*\
  !*** ./src/images/dad104.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8d930e9c20298d60130.jpg";

/***/ }),

/***/ "./src/images/dad105.jpg":
/*!*******************************!*\
  !*** ./src/images/dad105.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e43aff33d15aed3ac29d.jpg";

/***/ }),

/***/ "./src/images/dad106.jpg":
/*!*******************************!*\
  !*** ./src/images/dad106.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aec512796c9622cd6300.jpg";

/***/ }),

/***/ "./src/images/dad107.jpg":
/*!*******************************!*\
  !*** ./src/images/dad107.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f72854621464e57633a3.jpg";

/***/ }),

/***/ "./src/images/dad108.jpg":
/*!*******************************!*\
  !*** ./src/images/dad108.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d36ecbc9262e2d1740e0.jpg";

/***/ }),

/***/ "./src/images/dad109.jpg":
/*!*******************************!*\
  !*** ./src/images/dad109.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b7357a416d29ead416b.jpg";

/***/ }),

/***/ "./src/images/dad11.jpg":
/*!******************************!*\
  !*** ./src/images/dad11.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa52c5de07a6f821fb41.jpg";

/***/ }),

/***/ "./src/images/dad110.jpg":
/*!*******************************!*\
  !*** ./src/images/dad110.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3daaed869d7ec0364681.jpg";

/***/ }),

/***/ "./src/images/dad111.jpg":
/*!*******************************!*\
  !*** ./src/images/dad111.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d21632d0c4bafe385fd5.jpg";

/***/ }),

/***/ "./src/images/dad112.jpg":
/*!*******************************!*\
  !*** ./src/images/dad112.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a29130b53310c9482d5a.jpg";

/***/ }),

/***/ "./src/images/dad113.jpg":
/*!*******************************!*\
  !*** ./src/images/dad113.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b1f682eb6d708716535.jpg";

/***/ }),

/***/ "./src/images/dad114.jpg":
/*!*******************************!*\
  !*** ./src/images/dad114.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25cf237e9df684d8fccc.jpg";

/***/ }),

/***/ "./src/images/dad115.jpg":
/*!*******************************!*\
  !*** ./src/images/dad115.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0759c8b5abaae01028f.jpg";

/***/ }),

/***/ "./src/images/dad116.jpg":
/*!*******************************!*\
  !*** ./src/images/dad116.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95d77064710e812f37fc.jpg";

/***/ }),

/***/ "./src/images/dad117.jpg":
/*!*******************************!*\
  !*** ./src/images/dad117.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "692465529be79754bbc2.jpg";

/***/ }),

/***/ "./src/images/dad118.jpg":
/*!*******************************!*\
  !*** ./src/images/dad118.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d50e97bf137d149772a2.jpg";

/***/ }),

/***/ "./src/images/dad119.jpg":
/*!*******************************!*\
  !*** ./src/images/dad119.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e455bb7ce62452397f0.jpg";

/***/ }),

/***/ "./src/images/dad12.jpg":
/*!******************************!*\
  !*** ./src/images/dad12.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e621f8e7bcc9a2a939f9.jpg";

/***/ }),

/***/ "./src/images/dad120.jpg":
/*!*******************************!*\
  !*** ./src/images/dad120.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41c61d4ada7ac1704664.jpg";

/***/ }),

/***/ "./src/images/dad121.jpg":
/*!*******************************!*\
  !*** ./src/images/dad121.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d346dc189d75f86ff01b.jpg";

/***/ }),

/***/ "./src/images/dad122.jpg":
/*!*******************************!*\
  !*** ./src/images/dad122.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6d85db11184a7d10a51.jpg";

/***/ }),

/***/ "./src/images/dad123.jpg":
/*!*******************************!*\
  !*** ./src/images/dad123.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d411885c295b6b290018.jpg";

/***/ }),

/***/ "./src/images/dad124.jpg":
/*!*******************************!*\
  !*** ./src/images/dad124.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "683e1eb3bdca37170126.jpg";

/***/ }),

/***/ "./src/images/dad125.jpg":
/*!*******************************!*\
  !*** ./src/images/dad125.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d41f62a539984d81703.jpg";

/***/ }),

/***/ "./src/images/dad126.jpg":
/*!*******************************!*\
  !*** ./src/images/dad126.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d812845e0a745f0023dc.jpg";

/***/ }),

/***/ "./src/images/dad127.jpg":
/*!*******************************!*\
  !*** ./src/images/dad127.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3646a84b0ae780517d01.jpg";

/***/ }),

/***/ "./src/images/dad128.jpg":
/*!*******************************!*\
  !*** ./src/images/dad128.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e02184561bb37bb9f8e.jpg";

/***/ }),

/***/ "./src/images/dad129.jpg":
/*!*******************************!*\
  !*** ./src/images/dad129.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "851a70084af7c9169c4a.jpg";

/***/ }),

/***/ "./src/images/dad13.jpg":
/*!******************************!*\
  !*** ./src/images/dad13.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1cd99c35894eca7c8bd.jpg";

/***/ }),

/***/ "./src/images/dad130.jpg":
/*!*******************************!*\
  !*** ./src/images/dad130.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3fba84730789c637016.jpg";

/***/ }),

/***/ "./src/images/dad131.jpg":
/*!*******************************!*\
  !*** ./src/images/dad131.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e44c7cada0501a76e489.jpg";

/***/ }),

/***/ "./src/images/dad132.jpg":
/*!*******************************!*\
  !*** ./src/images/dad132.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd3491bf9115a1c2d711.jpg";

/***/ }),

/***/ "./src/images/dad133.jpg":
/*!*******************************!*\
  !*** ./src/images/dad133.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02d257c045deb308c7fb.jpg";

/***/ }),

/***/ "./src/images/dad134.jpg":
/*!*******************************!*\
  !*** ./src/images/dad134.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78acf8013fbd511843ea.jpg";

/***/ }),

/***/ "./src/images/dad135.jpg":
/*!*******************************!*\
  !*** ./src/images/dad135.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb1dd1508d6042c43b9e.jpg";

/***/ }),

/***/ "./src/images/dad136.jpg":
/*!*******************************!*\
  !*** ./src/images/dad136.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00ffb898facb74215339.jpg";

/***/ }),

/***/ "./src/images/dad137.jpg":
/*!*******************************!*\
  !*** ./src/images/dad137.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d0239aa33e3608b811b.jpg";

/***/ }),

/***/ "./src/images/dad138.jpg":
/*!*******************************!*\
  !*** ./src/images/dad138.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21709669e992820c1404.jpg";

/***/ }),

/***/ "./src/images/dad139.jpg":
/*!*******************************!*\
  !*** ./src/images/dad139.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62e959f0e11165d18b7a.jpg";

/***/ }),

/***/ "./src/images/dad14.jpg":
/*!******************************!*\
  !*** ./src/images/dad14.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34a7357bafd9e679ca1c.jpg";

/***/ }),

/***/ "./src/images/dad140.jpg":
/*!*******************************!*\
  !*** ./src/images/dad140.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60747996f5cdd6a91514.jpg";

/***/ }),

/***/ "./src/images/dad141.jpg":
/*!*******************************!*\
  !*** ./src/images/dad141.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d678aa6dfa0ed86cb51e.jpg";

/***/ }),

/***/ "./src/images/dad142.jpg":
/*!*******************************!*\
  !*** ./src/images/dad142.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63a5b92b55e8f63d827a.jpg";

/***/ }),

/***/ "./src/images/dad143.jpg":
/*!*******************************!*\
  !*** ./src/images/dad143.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b6f8688276f7331b8f6.jpg";

/***/ }),

/***/ "./src/images/dad144.jpg":
/*!*******************************!*\
  !*** ./src/images/dad144.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ed55e0e41d0942246a6.jpg";

/***/ }),

/***/ "./src/images/dad145.jpg":
/*!*******************************!*\
  !*** ./src/images/dad145.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "816fda1198742c83ffc0.jpg";

/***/ }),

/***/ "./src/images/dad146.jpg":
/*!*******************************!*\
  !*** ./src/images/dad146.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a7adb9b753947ee05e4.jpg";

/***/ }),

/***/ "./src/images/dad147.jpg":
/*!*******************************!*\
  !*** ./src/images/dad147.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "831996aef0877e1d9222.jpg";

/***/ }),

/***/ "./src/images/dad148.jpg":
/*!*******************************!*\
  !*** ./src/images/dad148.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab0b0bf50ee1021af9b8.jpg";

/***/ }),

/***/ "./src/images/dad149.jpg":
/*!*******************************!*\
  !*** ./src/images/dad149.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "538704e2f068053a5ea6.jpg";

/***/ }),

/***/ "./src/images/dad15.jpg":
/*!******************************!*\
  !*** ./src/images/dad15.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe55f4b0b814fde14bb9.jpg";

/***/ }),

/***/ "./src/images/dad150.jpg":
/*!*******************************!*\
  !*** ./src/images/dad150.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21297abdbf226186182d.jpg";

/***/ }),

/***/ "./src/images/dad151.jpg":
/*!*******************************!*\
  !*** ./src/images/dad151.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08003cdfc9af78730641.jpg";

/***/ }),

/***/ "./src/images/dad152.jpg":
/*!*******************************!*\
  !*** ./src/images/dad152.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7882b66eef839e332c8c.jpg";

/***/ }),

/***/ "./src/images/dad153.jpg":
/*!*******************************!*\
  !*** ./src/images/dad153.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ef3d81759ce5c727295.jpg";

/***/ }),

/***/ "./src/images/dad154.jpg":
/*!*******************************!*\
  !*** ./src/images/dad154.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adac588d9e8a86cb6f0d.jpg";

/***/ }),

/***/ "./src/images/dad155.jpg":
/*!*******************************!*\
  !*** ./src/images/dad155.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d118131addcd5b126d67.jpg";

/***/ }),

/***/ "./src/images/dad156.jpg":
/*!*******************************!*\
  !*** ./src/images/dad156.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee60cde812d386a84584.jpg";

/***/ }),

/***/ "./src/images/dad16.jpg":
/*!******************************!*\
  !*** ./src/images/dad16.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a35803c2679c443b395.jpg";

/***/ }),

/***/ "./src/images/dad17.jpg":
/*!******************************!*\
  !*** ./src/images/dad17.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a1dd6749ffbbeb44e82.jpg";

/***/ }),

/***/ "./src/images/dad18.jpg":
/*!******************************!*\
  !*** ./src/images/dad18.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c4d1c42f0d65d0df81a.jpg";

/***/ }),

/***/ "./src/images/dad19.jpg":
/*!******************************!*\
  !*** ./src/images/dad19.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fa2814cb63e7f9a8fb8.jpg";

/***/ }),

/***/ "./src/images/dad2.jpg":
/*!*****************************!*\
  !*** ./src/images/dad2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "549bbb2f6c0379a68074.jpg";

/***/ }),

/***/ "./src/images/dad20.jpg":
/*!******************************!*\
  !*** ./src/images/dad20.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38bc968b241be3553f37.jpg";

/***/ }),

/***/ "./src/images/dad21.jpg":
/*!******************************!*\
  !*** ./src/images/dad21.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24a9dd517874e7dabac4.jpg";

/***/ }),

/***/ "./src/images/dad22.jpg":
/*!******************************!*\
  !*** ./src/images/dad22.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b9015871361c0838809.jpg";

/***/ }),

/***/ "./src/images/dad23.jpg":
/*!******************************!*\
  !*** ./src/images/dad23.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ac798829bc6842f488f.jpg";

/***/ }),

/***/ "./src/images/dad24.jpg":
/*!******************************!*\
  !*** ./src/images/dad24.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eef131e64ef9a13457a4.jpg";

/***/ }),

/***/ "./src/images/dad25.jpg":
/*!******************************!*\
  !*** ./src/images/dad25.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a4d61aca3eafe358ff.jpg";

/***/ }),

/***/ "./src/images/dad26.jpg":
/*!******************************!*\
  !*** ./src/images/dad26.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95dc138d82bcb0547bbc.jpg";

/***/ }),

/***/ "./src/images/dad27.jpg":
/*!******************************!*\
  !*** ./src/images/dad27.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df128a65c04fd128b51e.jpg";

/***/ }),

/***/ "./src/images/dad28.jpg":
/*!******************************!*\
  !*** ./src/images/dad28.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abe292fd96916e7beb35.jpg";

/***/ }),

/***/ "./src/images/dad29.jpg":
/*!******************************!*\
  !*** ./src/images/dad29.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c73b103b86087009cc2a.jpg";

/***/ }),

/***/ "./src/images/dad3.jpg":
/*!*****************************!*\
  !*** ./src/images/dad3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7256d58c83a48c39169a.jpg";

/***/ }),

/***/ "./src/images/dad30.jpg":
/*!******************************!*\
  !*** ./src/images/dad30.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93325fc5fb9306779d17.jpg";

/***/ }),

/***/ "./src/images/dad31.jpg":
/*!******************************!*\
  !*** ./src/images/dad31.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9a5d7b83ed7540aa3c8.jpg";

/***/ }),

/***/ "./src/images/dad32.jpg":
/*!******************************!*\
  !*** ./src/images/dad32.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76e4493703ee3c5b789f.jpg";

/***/ }),

/***/ "./src/images/dad33.jpg":
/*!******************************!*\
  !*** ./src/images/dad33.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cf7f14216b44b4de28d.jpg";

/***/ }),

/***/ "./src/images/dad34.jpg":
/*!******************************!*\
  !*** ./src/images/dad34.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c20b64ee5a866080281.jpg";

/***/ }),

/***/ "./src/images/dad35.jpg":
/*!******************************!*\
  !*** ./src/images/dad35.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df0508750c1682cfeaa2.jpg";

/***/ }),

/***/ "./src/images/dad36.jpg":
/*!******************************!*\
  !*** ./src/images/dad36.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e81a40c4e5cf366d5cb.jpg";

/***/ }),

/***/ "./src/images/dad37.jpg":
/*!******************************!*\
  !*** ./src/images/dad37.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0360c1c31cc94c8a807.jpg";

/***/ }),

/***/ "./src/images/dad38.jpg":
/*!******************************!*\
  !*** ./src/images/dad38.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "754a618adb0af75a357c.jpg";

/***/ }),

/***/ "./src/images/dad39.jpg":
/*!******************************!*\
  !*** ./src/images/dad39.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbdb511c87acb326aa85.jpg";

/***/ }),

/***/ "./src/images/dad4.jpg":
/*!*****************************!*\
  !*** ./src/images/dad4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba9fae426644d78dd916.jpg";

/***/ }),

/***/ "./src/images/dad40.jpg":
/*!******************************!*\
  !*** ./src/images/dad40.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f2c22c162104040e52d.jpg";

/***/ }),

/***/ "./src/images/dad41.jpg":
/*!******************************!*\
  !*** ./src/images/dad41.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0992bf89e2e59da672ad.jpg";

/***/ }),

/***/ "./src/images/dad42.jpg":
/*!******************************!*\
  !*** ./src/images/dad42.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0da84c1b8bd13e23f23.jpg";

/***/ }),

/***/ "./src/images/dad43.jpg":
/*!******************************!*\
  !*** ./src/images/dad43.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a7f5c0f6acf94bef3e3.jpg";

/***/ }),

/***/ "./src/images/dad44.jpg":
/*!******************************!*\
  !*** ./src/images/dad44.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38f861c973c56cc4f957.jpg";

/***/ }),

/***/ "./src/images/dad45.jpg":
/*!******************************!*\
  !*** ./src/images/dad45.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9304d120ef2b1197668.jpg";

/***/ }),

/***/ "./src/images/dad46.jpg":
/*!******************************!*\
  !*** ./src/images/dad46.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1376ef617b2dacdbecf.jpg";

/***/ }),

/***/ "./src/images/dad47.jpg":
/*!******************************!*\
  !*** ./src/images/dad47.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af9c8ae6f77033cdc7dc.jpg";

/***/ }),

/***/ "./src/images/dad48.jpg":
/*!******************************!*\
  !*** ./src/images/dad48.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ac2fa737ce004078ea5.jpg";

/***/ }),

/***/ "./src/images/dad49.jpg":
/*!******************************!*\
  !*** ./src/images/dad49.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92eea5ede75dd9852d08.jpg";

/***/ }),

/***/ "./src/images/dad5.jpg":
/*!*****************************!*\
  !*** ./src/images/dad5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30bdb7567b27b6226697.jpg";

/***/ }),

/***/ "./src/images/dad50.jpg":
/*!******************************!*\
  !*** ./src/images/dad50.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4db80091cc877082deee.jpg";

/***/ }),

/***/ "./src/images/dad51.jpg":
/*!******************************!*\
  !*** ./src/images/dad51.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57aef80078f3d8453d9b.jpg";

/***/ }),

/***/ "./src/images/dad52.jpg":
/*!******************************!*\
  !*** ./src/images/dad52.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e3eba8a2a11ada5abfd.jpg";

/***/ }),

/***/ "./src/images/dad53.jpg":
/*!******************************!*\
  !*** ./src/images/dad53.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23ed4af639508cdae093.jpg";

/***/ }),

/***/ "./src/images/dad54.jpg":
/*!******************************!*\
  !*** ./src/images/dad54.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfe47f77227f81187ef7.jpg";

/***/ }),

/***/ "./src/images/dad55.jpg":
/*!******************************!*\
  !*** ./src/images/dad55.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5199f6dce377f141733d.jpg";

/***/ }),

/***/ "./src/images/dad56.jpg":
/*!******************************!*\
  !*** ./src/images/dad56.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f423d8c313bee03bb90.jpg";

/***/ }),

/***/ "./src/images/dad57.jpg":
/*!******************************!*\
  !*** ./src/images/dad57.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "786816a14e397d98ad2a.jpg";

/***/ }),

/***/ "./src/images/dad58.jpg":
/*!******************************!*\
  !*** ./src/images/dad58.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "942941d50152091b02c6.jpg";

/***/ }),

/***/ "./src/images/dad59.jpg":
/*!******************************!*\
  !*** ./src/images/dad59.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee60cde812d386a84584.jpg";

/***/ }),

/***/ "./src/images/dad6.jpg":
/*!*****************************!*\
  !*** ./src/images/dad6.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc00f6a761d0a5ae37cf.jpg";

/***/ }),

/***/ "./src/images/dad60.jpg":
/*!******************************!*\
  !*** ./src/images/dad60.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8825a4a91f3de4c8ff2.jpg";

/***/ }),

/***/ "./src/images/dad61.jpg":
/*!******************************!*\
  !*** ./src/images/dad61.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "621907547d81210d3fb2.jpg";

/***/ }),

/***/ "./src/images/dad62.jpg":
/*!******************************!*\
  !*** ./src/images/dad62.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a168ccf4db61d8d8f38.jpg";

/***/ }),

/***/ "./src/images/dad63.jpg":
/*!******************************!*\
  !*** ./src/images/dad63.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bb19b353f91db2def3a.jpg";

/***/ }),

/***/ "./src/images/dad64.jpg":
/*!******************************!*\
  !*** ./src/images/dad64.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e7732458d312442e9b8.jpg";

/***/ }),

/***/ "./src/images/dad65.jpg":
/*!******************************!*\
  !*** ./src/images/dad65.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21228714292c4b0d6d15.jpg";

/***/ }),

/***/ "./src/images/dad66.jpg":
/*!******************************!*\
  !*** ./src/images/dad66.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbbb90e378748aeefa05.jpg";

/***/ }),

/***/ "./src/images/dad67.jpg":
/*!******************************!*\
  !*** ./src/images/dad67.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a395d17a7dcb07e3e2f.jpg";

/***/ }),

/***/ "./src/images/dad68.jpg":
/*!******************************!*\
  !*** ./src/images/dad68.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84c056f98ea569d93226.jpg";

/***/ }),

/***/ "./src/images/dad69.jpg":
/*!******************************!*\
  !*** ./src/images/dad69.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd495646d8a9df0564a7.jpg";

/***/ }),

/***/ "./src/images/dad7.jpg":
/*!*****************************!*\
  !*** ./src/images/dad7.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40716e1192bf1df0a11b.jpg";

/***/ }),

/***/ "./src/images/dad70.jpg":
/*!******************************!*\
  !*** ./src/images/dad70.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a954c71e0ba63dc22ec.jpg";

/***/ }),

/***/ "./src/images/dad71.jpg":
/*!******************************!*\
  !*** ./src/images/dad71.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62edd1934599889dd2b6.jpg";

/***/ }),

/***/ "./src/images/dad72.jpg":
/*!******************************!*\
  !*** ./src/images/dad72.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9fd0f3e4df8261b2c2c.jpg";

/***/ }),

/***/ "./src/images/dad73.jpg":
/*!******************************!*\
  !*** ./src/images/dad73.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fe0d83fb3948c8f9195.jpg";

/***/ }),

/***/ "./src/images/dad74.jpg":
/*!******************************!*\
  !*** ./src/images/dad74.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a925fa9485a45c6c11f0.jpg";

/***/ }),

/***/ "./src/images/dad75.jpg":
/*!******************************!*\
  !*** ./src/images/dad75.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c94c1d6b88b7bbdfd304.jpg";

/***/ }),

/***/ "./src/images/dad76.jpg":
/*!******************************!*\
  !*** ./src/images/dad76.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9806f1cdaae95d13599e.jpg";

/***/ }),

/***/ "./src/images/dad77.jpg":
/*!******************************!*\
  !*** ./src/images/dad77.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86df7001ed647518f349.jpg";

/***/ }),

/***/ "./src/images/dad78.jpg":
/*!******************************!*\
  !*** ./src/images/dad78.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92654417496f40613bfa.jpg";

/***/ }),

/***/ "./src/images/dad79.jpg":
/*!******************************!*\
  !*** ./src/images/dad79.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7892d1b1c2a4516ac2d0.jpg";

/***/ }),

/***/ "./src/images/dad8.jpg":
/*!*****************************!*\
  !*** ./src/images/dad8.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5663782629f4a55fb91.jpg";

/***/ }),

/***/ "./src/images/dad80.jpg":
/*!******************************!*\
  !*** ./src/images/dad80.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66a57ef88c3de5cbadcb.jpg";

/***/ }),

/***/ "./src/images/dad81.jpg":
/*!******************************!*\
  !*** ./src/images/dad81.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c56b53341ca8d5692a8d.jpg";

/***/ }),

/***/ "./src/images/dad82.jpg":
/*!******************************!*\
  !*** ./src/images/dad82.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e85a64eceb130643b4b.jpg";

/***/ }),

/***/ "./src/images/dad83.jpg":
/*!******************************!*\
  !*** ./src/images/dad83.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4988e79c0139c936d28.jpg";

/***/ }),

/***/ "./src/images/dad84.jpg":
/*!******************************!*\
  !*** ./src/images/dad84.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eacaa9a539cb5f1e5792.jpg";

/***/ }),

/***/ "./src/images/dad85.jpg":
/*!******************************!*\
  !*** ./src/images/dad85.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "250f5e950607728fa4f4.jpg";

/***/ }),

/***/ "./src/images/dad86.jpg":
/*!******************************!*\
  !*** ./src/images/dad86.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6b67a77af8eef0b73fd.jpg";

/***/ }),

/***/ "./src/images/dad87.jpg":
/*!******************************!*\
  !*** ./src/images/dad87.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06eee4e7787aa06b774d.jpg";

/***/ }),

/***/ "./src/images/dad88.jpg":
/*!******************************!*\
  !*** ./src/images/dad88.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aed8c335b1016ce439aa.jpg";

/***/ }),

/***/ "./src/images/dad89.jpg":
/*!******************************!*\
  !*** ./src/images/dad89.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d4562270d3e07c8e654.jpg";

/***/ }),

/***/ "./src/images/dad9.jpg":
/*!*****************************!*\
  !*** ./src/images/dad9.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab3d46394c0cd9b58b49.jpg";

/***/ }),

/***/ "./src/images/dad90.jpg":
/*!******************************!*\
  !*** ./src/images/dad90.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebcd365c977756385635.jpg";

/***/ }),

/***/ "./src/images/dad91.jpg":
/*!******************************!*\
  !*** ./src/images/dad91.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31fbdb642f9d2e4d4160.jpg";

/***/ }),

/***/ "./src/images/dad92.jpg":
/*!******************************!*\
  !*** ./src/images/dad92.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "089a7ea3b2a26da968dc.jpg";

/***/ }),

/***/ "./src/images/dad93.jpg":
/*!******************************!*\
  !*** ./src/images/dad93.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59cc7cf132f9b84a55e0.jpg";

/***/ }),

/***/ "./src/images/dad94.jpg":
/*!******************************!*\
  !*** ./src/images/dad94.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c6b9897038ef1bf96a5.jpg";

/***/ }),

/***/ "./src/images/dad95.jpg":
/*!******************************!*\
  !*** ./src/images/dad95.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e48eb6bf9d02fc0d3903.jpg";

/***/ }),

/***/ "./src/images/dad96.jpg":
/*!******************************!*\
  !*** ./src/images/dad96.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca975356e36d144e0b17.jpg";

/***/ }),

/***/ "./src/images/dad97.jpg":
/*!******************************!*\
  !*** ./src/images/dad97.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d75a618dbe82f8abf97e.jpg";

/***/ }),

/***/ "./src/images/dad98.jpg":
/*!******************************!*\
  !*** ./src/images/dad98.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abcc9be4e3e3d8f1c525.jpg";

/***/ }),

/***/ "./src/images/dad99.jpg":
/*!******************************!*\
  !*** ./src/images/dad99.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a49c5afe0a4b4d0c323.jpg";

/***/ }),

/***/ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/wavesurfer.js/dist/wavesurfer.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/*! *****************************************************************************
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
function t(t,e,i,s){return new(i||(i=Promise))((function(n,r){function o(t){try{h(s.next(t))}catch(t){r(t)}}function a(t){try{h(s.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}h((s=s.apply(t,e||[])).next())}))}class e{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==i?void 0:i.once){const i=()=>{this.un(t,i),this.un(t,e)};return this.on(t,i),i}return()=>this.un(t,e)}un(t,e){var i;null===(i=this.listeners[t])||void 0===i||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((t=>t(...e)))}}const i={decode:function(e,i){return t(this,void 0,void 0,(function*(){const t=new AudioContext({sampleRate:i});return t.decodeAudioData(e).finally((()=>t.close()))}))},createBuffer:function(t,e){return"number"==typeof t[0]&&(t=[t]),function(t){const e=t[0];if(e.some((t=>t>1||t<-1))){const i=e.length;let s=0;for(let t=0;t<i;t++){const i=Math.abs(e[t]);i>s&&(s=i)}for(const e of t)for(let t=0;t<i;t++)e[t]/=s}}(t),{duration:e,length:t[0].length,sampleRate:t[0].length/e,numberOfChannels:t.length,getChannelData:e=>null==t?void 0:t[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function s(t,e){const i=e.xmlns?document.createElementNS(e.xmlns,t):document.createElement(t);for(const[t,n]of Object.entries(e))if("children"===t)for(const[t,n]of Object.entries(e))"string"==typeof n?i.appendChild(document.createTextNode(n)):i.appendChild(s(t,n));else"style"===t?Object.assign(i.style,n):"textContent"===t?i.textContent=n:i.setAttribute(t,n.toString());return i}function n(t,e,i){const n=s(t,e||{});return null==i||i.appendChild(n),n}var r=Object.freeze({__proto__:null,createElement:n,default:n});const o={fetchBlob:function(e,i,s){return t(this,void 0,void 0,(function*(){const n=yield fetch(e,s);if(n.status>=400)throw new Error(`Failed to fetch ${e}: ${n.status} (${n.statusText})`);return function(e,i){t(this,void 0,void 0,(function*(){if(!e.body||!e.headers)return;const s=e.body.getReader(),n=Number(e.headers.get("Content-Length"))||0;let r=0;const o=e=>t(this,void 0,void 0,(function*(){r+=(null==e?void 0:e.length)||0;const t=Math.round(r/n*100);i(t)})),a=()=>t(this,void 0,void 0,(function*(){let t;try{t=yield s.read()}catch(t){return}t.done||(o(t.value),yield a())}));a()}))}(n.clone(),i),n.blob()}))}};class a extends e{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),null!=t.playbackRate&&this.onceMediaEvent("canplay",(()=>{null!=t.playbackRate&&(this.media.playbackRate=t.playbackRate)}))}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e)}onceMediaEvent(t,e){return this.onMediaEvent(t,e,{once:!0})}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return""!==this.media.canPlayType(t)}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();const i=e instanceof Blob&&this.canPlayType(e.type)?URL.createObjectURL(e):t;this.media.src=i}destroy(){this.media.pause(),this.isExternalMedia||(this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return t(this,void 0,void 0,(function*(){if(this.media.src)return this.media.play()}))}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){null!=e&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class h extends e{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[s,n]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=n.querySelector(".scroll"),this.wrapper=n.querySelector(".wrapper"),this.canvasWrapper=n.querySelector(".canvases"),this.progressWrapper=n.querySelector(".progress"),this.cursor=n.querySelector(".cursor"),e&&n.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=t=>{const e=this.wrapper.getBoundingClientRect(),i=t.clientX-e.left,s=t.clientX-e.left;return[i/e.width,s/e.height]};this.wrapper.addEventListener("click",(e=>{const[i,s]=t(e);this.emit("click",i,s)})),this.wrapper.addEventListener("dblclick",(e=>{const[i,s]=t(e);this.emit("dblclick",i,s)})),this.options.dragToSeek&&this.initDrag(),this.scrollContainer.addEventListener("scroll",(()=>{const{scrollLeft:t,scrollWidth:e,clientWidth:i}=this.scrollContainer,s=t/e,n=(t+i)/e;this.emit("scroll",s,n)}));const e=this.createDelay(100);this.resizeObserver=new ResizeObserver((()=>{e().then((()=>this.onContainerResize())).catch((()=>{}))})),this.resizeObserver.observe(this.scrollContainer)}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&"auto"!==this.options.height||(this.lastContainerWidth=t,this.reRender())}initDrag(){!function(t,e,i,s,n=3,r=0){if(!t)return()=>{};let o=()=>{};const a=a=>{if(a.button!==r)return;a.preventDefault(),a.stopPropagation();let h=a.clientX,l=a.clientY,d=!1;const c=s=>{s.preventDefault(),s.stopPropagation();const r=s.clientX,o=s.clientY,a=r-h,c=o-l;if(d||Math.abs(a)>n||Math.abs(c)>n){const s=t.getBoundingClientRect(),{left:n,top:u}=s;d||(null==i||i(h-n,l-u),d=!0),e(a,c,r-n,o-u),h=r,l=o}},u=()=>{d&&(null==s||s()),o()},p=t=>{t.relatedTarget&&t.relatedTarget!==document.documentElement||u()},m=t=>{d&&(t.stopPropagation(),t.preventDefault())},f=t=>{d&&t.preventDefault()};document.addEventListener("pointermove",c),document.addEventListener("pointerup",u),document.addEventListener("pointerout",p),document.addEventListener("pointercancel",p),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("click",m,{capture:!0}),o=()=>{document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",u),document.removeEventListener("pointerout",p),document.removeEventListener("pointercancel",p),document.removeEventListener("touchmove",f),setTimeout((()=>{document.removeEventListener("click",m,{capture:!0})}),10)}};t.addEventListener("pointerdown",a)}(this.wrapper,((t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))}),(()=>this.isDragging=!0),(()=>this.isDragging=!1))}getHeight(t){return null==t?128:isNaN(Number(t))?"auto"===t&&this.parent.clientHeight||128:Number(t)}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`\n      <style>\n        :host {\n          user-select: none;\n          min-width: 1px;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ${this.getHeight(this.options.height)}px;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek&&!this.options.dragToSeek&&this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:e}=this.scrollContainer,i=e*t;this.setScroll(i)}destroy(){var t;this.container.remove(),null===(t=this.resizeObserver)||void 0===t||t.disconnect()}createDelay(t=10){let e,i;const s=()=>{e&&clearTimeout(e),i&&i()};return this.timeouts.push(s),()=>new Promise(((n,r)=>{s(),i=r,e=setTimeout((()=>{e=void 0,i=void 0,n()}),t)}))}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),i=e.getContext("2d"),s=e.height*(window.devicePixelRatio||1),n=i.createLinearGradient(0,0,0,s),r=1/(t.length-1);return t.forEach(((t,e)=>{const i=e*r;n.addColorStop(i,t)})),n}renderBarWaveform(t,e,i,s){const n=t[0],r=t[1]||t[0],o=n.length,{width:a,height:h}=i.canvas,l=h/2,d=window.devicePixelRatio||1,c=e.barWidth?e.barWidth*d:1,u=e.barGap?e.barGap*d:e.barWidth?c/2:0,p=e.barRadius||0,m=a/(c+u)/o,f=p&&"roundRect"in i?"roundRect":"rect";i.beginPath();let g=0,v=0,b=0;for(let t=0;t<=o;t++){const o=Math.round(t*m);if(o>g){const t=Math.round(v*l*s),n=t+Math.round(b*l*s)||1;let r=l-t;"top"===e.barAlign?r=0:"bottom"===e.barAlign&&(r=h-n),i[f](g*(c+u),r,c,n,p),g=o,v=0,b=0}const a=Math.abs(n[t]||0),d=Math.abs(r[t]||0);a>v&&(v=a),d>b&&(b=d)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,s){const n=e=>{const n=t[e]||t[0],r=n.length,{height:o}=i.canvas,a=o/2,h=i.canvas.width/r;i.moveTo(0,a);let l=0,d=0;for(let t=0;t<=r;t++){const r=Math.round(t*h);if(r>l){const t=a+(Math.round(d*a*s)||1)*(0===e?-1:1);i.lineTo(l,t),l=r,d=0}const o=Math.abs(n[t]||0);o>d&&(d=o)}i.lineTo(l,a)};i.beginPath(),n(0),n(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,i);let s=e.barHeight||1;if(e.normalize){const e=Array.from(t[0]).reduce(((t,e)=>Math.max(t,Math.abs(e))),0);s=e?1/e:1}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,i,s):this.renderLineWaveform(t,e,i,s)}renderSingleCanvas(t,e,i,s,n,r,o,a){const h=window.devicePixelRatio||1,l=document.createElement("canvas"),d=t[0].length;l.width=Math.round(i*(r-n)/d),l.height=s*h,l.style.width=`${Math.floor(l.width/h)}px`,l.style.height=`${s}px`,l.style.left=`${Math.floor(n*i/h/d)}px`,o.appendChild(l);const c=l.getContext("2d");if(this.renderWaveform(t.map((t=>t.slice(n,r))),e,c),l.width>0&&l.height>0){const t=l.cloneNode(),i=t.getContext("2d");i.drawImage(l,0,0),i.globalCompositeOperation="source-in",i.fillStyle=this.convertColorValues(e.progressColor),i.fillRect(0,0,l.width,l.height),a.appendChild(t)}}renderChannel(e,i,s){return t(this,void 0,void 0,(function*(){const n=document.createElement("div"),r=this.getHeight(i.height);n.style.height=`${r}px`,this.canvasWrapper.style.minHeight=`${r}px`,this.canvasWrapper.appendChild(n);const o=n.cloneNode();this.progressWrapper.appendChild(o);const a=e[0].length,l=(t,h)=>{this.renderSingleCanvas(e,i,s,r,Math.max(0,t),Math.min(h,a),n,o)};if(!this.isScrollable)return void l(0,a);const{scrollLeft:d,scrollWidth:c,clientWidth:u}=this.scrollContainer,p=a/c;let m=Math.min(h.MAX_CANVAS_WIDTH,u);if(i.barWidth||i.barGap){const t=i.barWidth||.5,e=t+(i.barGap||t/2);m%e!=0&&(m=Math.floor(m/e)*e)}const f=Math.floor(Math.abs(d)*p),g=Math.floor(f+m*p),v=g-f;v<=0||(l(f,g),yield Promise.all([(()=>t(this,void 0,void 0,(function*(){if(0===f)return;const t=this.createDelay();for(let e=f;e>=0;e-=v)yield t(),l(Math.max(0,e-v),e)})))(),(()=>t(this,void 0,void 0,(function*(){if(g===a)return;const t=this.createDelay();for(let e=g;e<a;e+=v)yield t(),l(e,Math.min(a,e+v))})))()]))}))}render(e){return t(this,void 0,void 0,(function*(){this.timeouts.forEach((t=>t())),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",null!=this.options.width&&(this.scrollContainer.style.width="number"==typeof this.options.width?`${this.options.width}px`:this.options.width);const t=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,s=Math.ceil(e.duration*(this.options.minPxPerSec||0));this.isScrollable=s>i;const n=this.options.fillParent&&!this.isScrollable,r=(n?i:s)*t;this.wrapper.style.width=n?"100%":`${s}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=e,this.emit("render");try{if(this.options.splitChannels)yield Promise.all(Array.from({length:e.numberOfChannels}).map(((t,i)=>{var s;const n=Object.assign(Object.assign({},this.options),null===(s=this.options.splitChannels)||void 0===s?void 0:s[i]);return this.renderChannel([e.getChannelData(i)],n,r)})));else{const t=[e.getChannelData(0)];e.numberOfChannels>1&&t.push(e.getChannelData(1)),yield this.renderChannel(t,this.options,r)}}catch(t){return}this.emit("rendered")}))}reRender(){if(!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:e}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:t}=this.progressWrapper.getBoundingClientRect();let i=t-e;i*=2,i=i<0?Math.floor(i):Math.ceil(i),i/=2,this.scrollContainer.scrollLeft+=i}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,r=t*s,o=i,a=i+n,h=n/2;if(this.isDragging){const t=30;r+t>a?this.scrollContainer.scrollLeft+=t:r-t<o&&(this.scrollContainer.scrollLeft-=t)}else{(r<o||r>a)&&(this.scrollContainer.scrollLeft=r-(this.options.autoCenter?h:0));const t=r-i-h;e&&this.options.autoCenter&&t>0&&(this.scrollContainer.scrollLeft+=Math.min(t,10))}{const t=this.scrollContainer.scrollLeft,e=t/s,i=(t+n)/s;this.emit("scroll",e,i)}}renderProgress(t,e){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${100===Math.round(i)?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(e,i,s){return t(this,void 0,void 0,(function*(){const t=this.canvasWrapper.querySelectorAll("canvas");if(!t.length)throw new Error("No waveform data");if("dataURL"===s){const s=Array.from(t).map((t=>t.toDataURL(e,i)));return Promise.resolve(s)}return Promise.all(Array.from(t).map((t=>new Promise(((s,n)=>{t.toBlob((t=>{t?s(t):n(new Error("Could not export image"))}),e,i)})))))}))}}h.MAX_CANVAS_WIDTH=4e3;class l extends e{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",(()=>{requestAnimationFrame((()=>{this.emit("tick")}))})),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class d extends e{constructor(t=new AudioContext){super(),this.bufferNode=null,this.autoplay=!1,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return t(this,void 0,void 0,(function*(){}))}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then((e=>{if(e.status>=400)throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);return e.arrayBuffer()})).then((e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e))).then((e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())}))}_play(){var t;if(!this.paused)return;this.paused=!1,null===(t=this.bufferNode)||void 0===t||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.bufferNode.buffer=this.buffer,this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let e=this.playedDuration*this._playbackRate;e>=this.duration&&(e=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,e),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,null===(t=this.bufferNode)||void 0===t||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return t(this,void 0,void 0,(function*(){this.paused&&(this._play(),this.emit("play"))}))}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){var e,i;const s=t-this.currentTime;null===(e=this.bufferNode)||void 0===e||e.stop(this.audioContext.currentTime+s),null===(i=this.bufferNode)||void 0===i||i.addEventListener("ended",(()=>{this.bufferNode=null,this.pause()}),{once:!0})}setSinkId(e){return t(this,void 0,void 0,(function*(){return this.audioContext.setSinkId(e)}))}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){this.emit("seeking");const e=!this.paused;e&&this._pause(),this.playedDuration=t/this._playbackRate,e&&this._play(),this.emit("timeupdate")}get duration(){var t;return(null===(t=this.buffer)||void 0===t?void 0:t.duration)||0}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}}const c={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class u extends a{static create(t){return new u(t)}constructor(t){const e=t.media||("WebAudio"===t.backend?new d:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.mediaSubscriptions=[],this.options=Object.assign({},c,t),this.timer=new l;const i=e?void 0:this.getMediaElement();this.renderer=new h(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins(),Promise.resolve().then((()=>{this.emit("init");const t=this.options.url||this.getSrc()||"";(t||this.options.peaks&&this.options.duration)&&this.load(t,this.options.peaks,this.options.duration)}))}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",(()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t)}})))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",(()=>{const t=this.updateProgress();this.emit("timeupdate",t)})),this.onMediaEvent("play",(()=>{this.emit("play"),this.timer.start()})),this.onMediaEvent("pause",(()=>{this.emit("pause"),this.timer.stop()})),this.onMediaEvent("emptied",(()=>{this.timer.stop()})),this.onMediaEvent("ended",(()=>{this.emit("finish")})),this.onMediaEvent("seeking",(()=>{this.emit("seeking",this.getCurrentTime())})))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",((t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))})),this.renderer.on("dblclick",((t,e)=>{this.emit("dblclick",t,e)})),this.renderer.on("scroll",((t,e)=>{const i=this.getDuration();this.emit("scroll",t*i,e*i)})),this.renderer.on("render",(()=>{this.emit("redraw")})),this.renderer.on("rendered",(()=>{this.emit("redrawcomplete")})));{let t;this.subscriptions.push(this.renderer.on("drag",(e=>{this.options.interact&&(this.renderer.renderProgress(e),clearTimeout(t),t=setTimeout((()=>{this.seekTo(e)}),this.isPlaying()?0:200),this.emit("interaction",e*this.getDuration()),this.emit("drag",e))})))}}initPlugins(){var t;(null===(t=this.options.plugins)||void 0===t?void 0:t.length)&&this.options.plugins.forEach((t=>{this.registerPlugin(t)}))}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach((t=>t())),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),null!=t.mediaControls&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",(()=>{this.plugins=this.plugins.filter((e=>e!==t))}))),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}setScrollTime(t){const e=t/this.getDuration();this.renderer.setScrollPercentage(e)}getActivePlugins(){return this.plugins}loadAudio(e,s,n,r){return t(this,void 0,void 0,(function*(){if(this.emit("load",e),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,!s&&!n){const t=t=>this.emit("loading",t);s=yield o.fetchBlob(e,t,this.options.fetchParams)}this.setSrc(e,s);const t=r||this.getDuration()||(yield new Promise((t=>{this.onceMediaEvent("loadedmetadata",(()=>t(this.getDuration())))})));if(n)this.decodedData=i.createBuffer(n,t||0);else if(s){const t=yield s.arrayBuffer();this.decodedData=yield i.decode(t,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())}))}load(e,i,s){return t(this,void 0,void 0,(function*(){yield this.loadAudio(e,void 0,i,s)}))}loadBlob(e,i,s){return t(this,void 0,void 0,(function*(){yield this.loadAudio("blob",e,i,s)}))}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(t,this.decodedData.numberOfChannels),n=[];for(let t=0;t<s;t++){const s=this.decodedData.getChannelData(t),r=[],o=Math.round(s.length/e);for(let t=0;t<e;t++){const e=s.slice(t*o,(t+1)*o);let n=0;for(let t=0;t<e.length;t++){const i=e[t];Math.abs(i)>Math.abs(n)&&(n=i)}r.push(Math.round(n*i)/i)}n.push(r)}return n}getDuration(){let t=super.getDuration()||0;return 0!==t&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){super.setTime(t),this.updateProgress(t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}playPause(){return t(this,void 0,void 0,(function*(){return this.isPlaying()?this.pause():this.play()}))}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(e="image/png",i=1,s="dataURL"){return t(this,void 0,void 0,(function*(){return this.renderer.exportImage(e,i,s)}))}destroy(){this.emit("destroy"),this.plugins.forEach((t=>t.destroy())),this.subscriptions.forEach((t=>t())),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}u.BasePlugin=class extends e{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t()))}},u.dom=r;


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
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ "./src/audio.js");



// import trackContainer from './audio';
// import story1 from './audio';

const content = document.getElementById('content');

// create imageSection, append to content on template.html
const imageSection = document.createElement('div');
imageSection.id = 'image-section';
content.appendChild(imageSection);

// create slideFrame, append to imageSection
const slideFrame = document.createElement('div');
slideFrame.id = 'slide-frame';
imageSection.appendChild(slideFrame);

// currentImage holds the images[i] position
// starts at random between 0 and 156
// it isn't actually linked to images[i] data in any way
// other than the fact the both start at 0 and go up or down sequentially
let currentImage = Math.floor(Math.random() * 157);

// imCount holds the total number of images
// since array starts at 0, we get total count it by running length - 1
const imageCount = _images__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1;

const reverseButton = document.createElement('button');
reverseButton.id = 'reverse-button';
reverseButton.textContent = '<';

const advanceButton = document.createElement('button');
advanceButton.id = 'advance-button';
advanceButton.textContent = '>';

let imageHolder = _images__WEBPACK_IMPORTED_MODULE_1__["default"][currentImage];
imageHolder.id = 'current-image';
slideFrame.appendChild(reverseButton);
slideFrame.appendChild(imageHolder);
slideFrame.appendChild(advanceButton);

// append/display currentImage[0] on intial page load

// grabs and removes removes image on display
// appends the new current image
// current image has just been updated
// as updateImage is called in advanceImage() or reversemage()
const updateImage = () => {
  const getCurrent = document.getElementById('current-image');
  slideFrame.removeChild(getCurrent);
  imageHolder = _images__WEBPACK_IMPORTED_MODULE_1__["default"][currentImage];
  imageHolder.id = 'current-image';
  slideFrame.appendChild(reverseButton);
  slideFrame.appendChild(imageHolder);
  slideFrame.appendChild(advanceButton);
};

// increases currentImage number so next images[i] is called on updateImage()
// if currentImage count is >= the imageCount set it to 0 to loop
const advanceImage = () => {
  if (currentImage >= imageCount) {
    currentImage = 0;
  } else {
    currentImage += 1;
  }
  updateImage();
};

// same but reverse to go backward in images[]
const reverseImage = () => {
  if (currentImage <= 0) {
    currentImage = imageCount;
  } else {
    currentImage -= 1;
  }
  updateImage();
};

// put timer in a var so i could mess with it in the buttons
let timer = setInterval(() => { advanceImage(); }, 10000);

advanceButton.addEventListener('click', () => {
  advanceImage();
  // reset timer to prevent short advances
  clearInterval(timer);
  timer = setInterval(() => {
    advanceImage();
  }, 10000);
});

reverseButton.addEventListener('click', () => {
  reverseImage();
  // reset timer to prevent short advances
  clearInterval(timer);
  timer = setInterval(() => {
    advanceImage();
  }, 10000);
});

// runs reverseImage() every 8 seconds to auto advance

const audioSection = document.createElement('div');
audioSection.id = 'audio-section';
const trackContainer = document.createElement('div');
trackContainer.id = 'track-container';

audioSection.appendChild(trackContainer);

content.appendChild(audioSection);

(0,_audio__WEBPACK_IMPORTED_MODULE_2__["default"])();

// OLD WAY OF HANDLING AUDIO ON DOM
// const audioUnit1 = document.createElement('div');
// const audioUnit1Label = document.createElement('label');
// const earlyLife = story1[0];
// audioUnit1.classList.add('audio-unit');
// audioUnit1Label.classList.add('audio-unit-label');
// audioUnit1Label.setAttribute('for', 'early-life');
// audioUnit1Label.textContent = 'Early life';
// audioUnit1.appendChild(audioUnit1Label);
// audioUnit1.appendChild(earlyLife);

// const audioUnit2 = document.createElement('div');
// const audioUnit2Label = document.createElement('label');
// const momKidsCarpentry = story1[1];
// audioUnit2.classList.add('audio-unit');
// audioUnit2Label.classList.add('audio-unit-label');
// audioUnit2Label.setAttribute('for', 'mom-kids-carpentry');
// audioUnit2Label.textContent = 'Mom, kids, and carpentry';
// audioUnit2.appendChild(audioUnit2Label);
// audioUnit2.appendChild(momKidsCarpentry);

// const audioUnit3 = document.createElement('div');
// const audioUnit3Label = document.createElement('label');
// const nature = story1[2];
// audioUnit3.classList.add('audio-unit');
// audioUnit3Label.classList.add('audio-unit-label');
// audioUnit3Label.setAttribute('for', 'nature');
// audioUnit3Label.textContent = 'Nature';
// audioUnit3.appendChild(audioUnit3Label);
// audioUnit3.appendChild(nature);

// const audioUnit4 = document.createElement('div');
// const audioUnit4Label = document.createElement('label');
// const religion = story1[3];
// audioUnit4.classList.add('audio-unit');
// audioUnit4Label.classList.add('audio-unit-label');
// audioUnit4Label.setAttribute('for', 'religion');
// audioUnit4Label.textContent = 'Religion';
// audioUnit4.appendChild(audioUnit4Label);
// audioUnit4.appendChild(religion);

// const audioUnit5 = document.createElement('div');
// const audioUnit5Label = document.createElement('label');
// const adviceToGrandkids = story1[4];
// audioUnit5.classList.add('audio-unit');
// audioUnit5Label.classList.add('audio-unit-label');
// audioUnit5Label.setAttribute('for', 'advice-to-grandkids');
// audioUnit5Label.textContent = 'Advice to his grandkids';
// audioUnit5.appendChild(audioUnit5Label);
// audioUnit5.appendChild(adviceToGrandkids);

// const audioUnit6 = document.createElement('div');
// const audioUnit6Label = document.createElement('label');
// const adviceToHisKids = story1[5];
// audioUnit6.classList.add('audio-unit');
// audioUnit6Label.classList.add('audio-unit-label');
// audioUnit6Label.setAttribute('for', 'advice-to-his-kids');
// audioUnit6Label.textContent = 'Advice to his kids';
// audioUnit6.appendChild(audioUnit6Label);
// audioUnit6.appendChild(adviceToHisKids);

// const audioUnit7 = document.createElement('div');
// const audioUnit7Label = document.createElement('label');
// const messageToTheFamily = story1[6];
// audioUnit7.classList.add('audio-unit');
// audioUnit7Label.classList.add('audio-unit-label');
// audioUnit7Label.setAttribute('for', 'message-to-the-family');
// audioUnit7Label.textContent = 'Message to the family';
// audioUnit7.appendChild(audioUnit7Label);
// audioUnit7.appendChild(messageToTheFamily);

// const audioUnit8 = document.createElement('div');
// const audioUnit8Label = document.createElement('label');
// const messageToMom = story1[7];
// audioUnit8.classList.add('audio-unit');
// audioUnit8Label.classList.add('audio-unit-label');
// audioUnit8Label.setAttribute('for', 'message-to-mom');
// audioUnit8Label.textContent = 'Message to Mom';
// audioUnit8.appendChild(audioUnit8Label);
// audioUnit8.appendChild(messageToMom);

// const audioUnit9 = document.createElement('div');
// const audioUnit9Label = document.createElement('label');
// const dadSingsKristofferson = story1[8];
// audioUnit9.classList.add('audio-unit');
// audioUnit9Label.classList.add('audio-unit-label');
// audioUnit9Label.setAttribute('for', 'dad-sings-kristofferson');
// audioUnit9Label.textContent = 'Dad sings Kristofferson';
// audioUnit9.appendChild(audioUnit9Label);
// audioUnit9.appendChild(dadSingsKristofferson);

// audioSection.appendChild(audioUnit1);
// audioSection.appendChild(audioUnit2);
// audioSection.appendChild(audioUnit3);
// audioSection.appendChild(audioUnit4);
// audioSection.appendChild(audioUnit5);
// audioSection.appendChild(audioUnit6);
// audioSection.appendChild(audioUnit7);
// audioSection.appendChild(audioUnit8);
// audioSection.appendChild(audioUnit9);
//

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHcUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV6Qzs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFlBQVksOENBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLGFBQWEsZ0RBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM041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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL3NyYy9hdWRpby5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL3NyYy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9zcmMvd2F2ZXN1cmZlcm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL25vZGVfbW9kdWxlcy93YXZlc3VyZmVyLmpzL2Rpc3Qvd2F2ZXN1cmZlci5lc20uanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3Rvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGF1bHNfc3Rvcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGF1bHNfc3Rvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGF1bHNfc3Rvcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2ltYWdlLXNlY3Rpb24ge1xuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICBtaW4td2lkdGg6IDM3NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xuXG59XG5cbiNzbGlkZS1mcmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgLyogbWF4LXdpZHRoOiA3NSU7ICovXG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgICB0cmFuc2Zvcm06IGVhc2UtaW4tb3V0IDJzO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG59XG5cbiNjdXJyZW50LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNTUwcHg7XG4gICAgb3BhY2l0eTogMTAwO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDJzO1xufVxuXG4jcmV2ZXJzZS1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xufVxuXG4jYWR2YW5jZS1idXR0b24ge1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xufVxuXG4vKiBBVURJTyBTRUNUSU9OICovXG5cbiNhdWRpby1zZWN0aW9ue1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzNzVweDtcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDQwcHggMCA2MHB4IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM5LCA4OSk7ICovXG59XG5cbiN0cmFjay1jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzNjVweDtcbiAgICBtYXgtd2lkdGg6IDY1JTtcbn1cblxuLnRyYWNrIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luOiAwIDAgNDBweCAwO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLnRyYWNrLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcHRpb25zLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgLyogbWFyZ2luOiAwIDAgNDBweCAwOyAqL1xufVxuXG4ucGxheS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYXktYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOWU4O1xufVxuXG4ucGxheS1pbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLnBhdXNlLWltZyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uY3VycmVudC1kaXNwbGF5IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kdXJhdGlvbkRpc3BsYXkge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmRpdmlkZXIge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogT0xEIENPREUgU1RZTEUgKi9cbi8qIC5hdWRpby11bml0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzY1cHg7XG4gICAgbWF4LXdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4uYXVkaW8tcGxheWVyIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMzEsIDE5Mik7XG59XG5cbi5hdWRpby11bml0LWxhYmVsIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDVweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBLG1CQUFtQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2ltYWdlLXNlY3Rpb24ge1xcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgbWluLXdpZHRoOiAzNzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQwcHggMCAwIDA7XFxuXFxufVxcblxcbiNzbGlkZS1mcmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBtYXgtd2lkdGg6IDc1JTsgKi9cXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxuICAgIHRyYW5zZm9ybTogZWFzZS1pbi1vdXQgMnM7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxufVxcblxcbiNjdXJyZW50LWltYWdlIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXG4gICAgb3BhY2l0eTogMTAwO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcXG59XFxuXFxuI3JldmVyc2UtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxufVxcblxcbiNhZHZhbmNlLWJ1dHRvbiB7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxufVxcblxcbi8qIEFVRElPIFNFQ1RJT04gKi9cXG5cXG4jYXVkaW8tc2VjdGlvbntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzc1cHg7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDQwcHggMCA2MHB4IDA7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzOSwgODkpOyAqL1xcbn1cXG5cXG4jdHJhY2stY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzY1cHg7XFxuICAgIG1heC13aWR0aDogNjUlO1xcbn1cXG5cXG4udHJhY2sge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbjogMCAwIDQwcHggMDtcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4udHJhY2stdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ub3B0aW9ucy1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICAvKiBtYXJnaW46IDAgMCA0MHB4IDA7ICovXFxufVxcblxcbi5wbGF5LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGF5LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU5ZTg7XFxufVxcblxcbi5wbGF5LWltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5wYXVzZS1pbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udGltZS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY3VycmVudC1kaXNwbGF5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZHVyYXRpb25EaXNwbGF5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogT0xEIENPREUgU1RZTEUgKi9cXG4vKiAuYXVkaW8tdW5pdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDM2NXB4O1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xcbn1cXG5cXG4uYXVkaW8tcGxheWVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYXVkaW86Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGFuZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMzEsIDE5Mik7XFxufVxcblxcbi5hdWRpby11bml0LWxhYmVsIHtcXG4gICAgbWFyZ2luOiAwIDAgMjBweCA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3dhdmVzdXJmZXJtb2R1bGUnO1xuaW1wb3J0IEVhcmx5TGlmZSBmcm9tICcuL2F1ZGlvLzAxX0Vhcmx5TGlmZS5tcDMnO1xuaW1wb3J0IE1vbUtpZHNDYXJwZW50cnkgZnJvbSAnLi9hdWRpby8wMl9Nb21LaWRzQ2FycGVudHJ5Lm1wMyc7XG5pbXBvcnQgTmF0dXJlIGZyb20gJy4vYXVkaW8vMDNfTmF0dXJlLm1wMyc7XG5pbXBvcnQgUmVsaWdpb24gZnJvbSAnLi9hdWRpby8wNF9SZWxpZ2lvbi5tcDMnO1xuaW1wb3J0IEFkdmljZVRvR3JhbmRraWRzIGZyb20gJy4vYXVkaW8vMDVfQWR2aWNlVG9HcmFuZGtpZHMubXAzJztcbmltcG9ydCBBZHZpY2VUb0hpc0tpZHMgZnJvbSAnLi9hdWRpby8wNl9BZHZpY2VUb0hpc0tpZHMubXAzJztcbmltcG9ydCBNZXNzYWdlVG9UaGVGYW1pbHkgZnJvbSAnLi9hdWRpby8wN19NZXNzYWdlVG9UaGVGYW1pbHkubXAzJztcbmltcG9ydCBNZXNzYWdlVG9Nb20gZnJvbSAnLi9hdWRpby8wOF9NZXNzYWdlVG9Nb20ubXAzJztcbmltcG9ydCBEYWRTaW5nc0tyaXN0b2ZmZXJzb24gZnJvbSAnLi9hdWRpby8wOV9EYWRTaW5nc0tyaXN0b2ZmZXJzb24ubXAzJztcbmltcG9ydCBQbGF5IGZyb20gJy4vaWNvbnMvcGxheS5zdmcnO1xuaW1wb3J0IFBhdXNlIGZyb20gJy4vaWNvbnMvcGF1c2Uuc3ZnJztcblxuY29uc3QgbG9hZEF1ZGlvID0gKCkgPT4ge1xuICBjb25zdCB0cmFja3MgPSBbXG4gICAgRWFybHlMaWZlLFxuICAgIE1vbUtpZHNDYXJwZW50cnksXG4gICAgTmF0dXJlLFxuICAgIFJlbGlnaW9uLFxuICAgIEFkdmljZVRvR3JhbmRraWRzLFxuICAgIEFkdmljZVRvSGlzS2lkcyxcbiAgICBNZXNzYWdlVG9UaGVGYW1pbHksXG4gICAgTWVzc2FnZVRvTW9tLFxuICAgIERhZFNpbmdzS3Jpc3RvZmZlcnNvbixcbiAgXTtcblxuICBjb25zdCB0aXRsZXMgPSBbXG4gICAgJ0Vhcmx5IGxpZmUnLFxuICAgICdNb20sIGtpZHMsIGNhcnBlbnRyeScsXG4gICAgJ05hdHVyZScsXG4gICAgJ1JlbGlnaW9uJyxcbiAgICAnQWR2aWNlIHRvIGdyYW5ka2lkcycsXG4gICAgJ0FkdmljZSB0byBraWRzJyxcbiAgICAnTWVzc2FnZSB0byB0aGUgZmFtaWx5JyxcbiAgICAnTWVzc2FnZSB0byBNb20nLFxuICAgICdEYWQgc2luZ3MgS3Jpc3RvZmZlcnNvbicsXG4gIF07XG5cbiAgLy8gY3JlYXRlcyBhIGNvbnRhaW5lciBmb3IgdGhlIHRyYWNrcyBhbmQgYXBwZW5kcyBpdCB0byBET01cbiAgY29uc3QgdHJhY2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhY2stY29udGFpbmVyJyk7XG5cbiAgLy8gY3JlYXRlIHdhdmVzdXJmZXIgcGxheWVycyBmcm9tIHdhdmVzdXJmZXJtb2R1bGUuanMgd2l0aCBmb2xsb3dpbmcgcGFyYW1zXG4gIGNyZWF0ZVBsYXllcih0cmFja3MsIHRpdGxlcywgdHJhY2tDb250YWluZXIsIFBsYXksIFBhdXNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBdWRpbztcblxuLy8gT0xEIFdBWSBPRiBMT0FESU5HIEFVRElPIFBMQVlFUlxuLy8gY29uc3QgZWFybHlMaWZlID0gbmV3IEF1ZGlvKEVhcmx5TGlmZSk7XG4vLyBlYXJseUxpZmUuc2V0QXR0cmlidXRlKCdjb250cm9scycsICd0cnVlJyk7XG4vLyBlYXJseUxpZmUuY2xhc3NMaXN0LmFkZCgnYXVkaW8tcGxheWVyJyk7XG4vLyBlYXJseUxpZmUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Vhcmx5LWxpZmUnKTtcbi8vIHN0b3J5MS5wdXNoKGVhcmx5TGlmZSk7XG5cbi8vIGNvbnN0IG1vbUtpZHNDYXJwZW50cnkgPSBuZXcgQXVkaW8oTW9tS2lkc0NhcnBlbnRyeSk7XG4vLyBtb21LaWRzQ2FycGVudHJ5LnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gbW9tS2lkc0NhcnBlbnRyeS5jbGFzc0xpc3QuYWRkKCdhdWRpby1wbGF5ZXInKTtcbi8vIG1vbUtpZHNDYXJwZW50cnkuc2V0QXR0cmlidXRlKCduYW1lJywgJ21vbS1raWRzLWNhcnBlbnRyeScpO1xuLy8gc3RvcnkxLnB1c2gobW9tS2lkc0NhcnBlbnRyeSk7XG5cbi8vIGNvbnN0IG5hdHVyZSA9IG5ldyBBdWRpbyhOYXR1cmUpO1xuLy8gbmF0dXJlLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gbmF0dXJlLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gbmF0dXJlLnNldEF0dHJpYnV0ZSgnbmFtZScsICduYXR1cmUnKTtcbi8vIHN0b3J5MS5wdXNoKG5hdHVyZSk7XG5cbi8vIGNvbnN0IHJlbGlnaW9uID0gbmV3IEF1ZGlvKFJlbGlnaW9uKTtcbi8vIHJlbGlnaW9uLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gcmVsaWdpb24uY2xhc3NMaXN0LmFkZCgnYXVkaW8tcGxheWVyJyk7XG4vLyByZWxpZ2lvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmVsaWdpb24nKTtcbi8vIHN0b3J5MS5wdXNoKHJlbGlnaW9uKTtcblxuLy8gY29uc3QgYWR2aWNlVG9HcmFuZGtpZHMgPSBuZXcgQXVkaW8oQWR2aWNlVG9HcmFuZGtpZHMpO1xuLy8gYWR2aWNlVG9HcmFuZGtpZHMuc2V0QXR0cmlidXRlKCdjb250cm9scycsICd0cnVlJyk7XG4vLyBhZHZpY2VUb0dyYW5ka2lkcy5jbGFzc0xpc3QuYWRkKCdhdWRpby1wbGF5ZXInKTtcbi8vIGFkdmljZVRvR3JhbmRraWRzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdhZHZpY2UtdG8tZ3JhbmRraWRzJyk7XG4vLyBzdG9yeTEucHVzaChhZHZpY2VUb0dyYW5ka2lkcyk7XG5cbi8vIGNvbnN0IGFkdmljZVRvSGlzS2lkcyA9IG5ldyBBdWRpbyhBZHZpY2VUb0hpc0tpZHMpO1xuLy8gYWR2aWNlVG9IaXNLaWRzLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gYWR2aWNlVG9IaXNLaWRzLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gYWR2aWNlVG9IaXNLaWRzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdhZHZpY2UtdG8taGlzLWtpZHMnKTtcbi8vIHN0b3J5MS5wdXNoKGFkdmljZVRvSGlzS2lkcyk7XG5cbi8vIGNvbnN0IG1lc3NhZ2VUb1RoZUZhbWlseSA9IG5ldyBBdWRpbyhNZXNzYWdlVG9UaGVGYW1pbHkpO1xuLy8gbWVzc2FnZVRvVGhlRmFtaWx5LnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gbWVzc2FnZVRvVGhlRmFtaWx5LmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gbWVzc2FnZVRvVGhlRmFtaWx5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlLXRvLXRoZS1mYW1pbHknKTtcbi8vIHN0b3J5MS5wdXNoKG1lc3NhZ2VUb1RoZUZhbWlseSk7XG5cbi8vIGNvbnN0IG1lc3NhZ2VUb01vbSA9IG5ldyBBdWRpbyhNZXNzYWdlVG9Nb20pO1xuLy8gbWVzc2FnZVRvTW9tLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gbWVzc2FnZVRvTW9tLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gbWVzc2FnZVRvTW9tLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlLXRvLW1vbScpO1xuLy8gc3RvcnkxLnB1c2gobWVzc2FnZVRvTW9tKTtcblxuLy8gY29uc3QgZGFkU2luZ3NLcmlzdG9mZmVyc29uID0gbmV3IEF1ZGlvKERhZFNpbmdzS3Jpc3RvZmZlcnNvbik7XG4vLyBkYWRTaW5nc0tyaXN0b2ZmZXJzb24uc2V0QXR0cmlidXRlKCdjb250cm9scycsICd0cnVlJyk7XG4vLyBkYWRTaW5nc0tyaXN0b2ZmZXJzb24uY2xhc3NMaXN0LmFkZCgnYXVkaW8tcGxheWVyJyk7XG4vLyBkYWRTaW5nc0tyaXN0b2ZmZXJzb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhZC1zaW5ncy1rcmlzdG9mZmVyc29uJyk7XG4vLyBzdG9yeTEucHVzaChkYWRTaW5nc0tyaXN0b2ZmZXJzb24pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBzdG9yeTE7XG4iLCJpbXBvcnQgUGljMSBmcm9tICcuL2ltYWdlcy9kYWQxLmpwZyc7XG5pbXBvcnQgUGljMiBmcm9tICcuL2ltYWdlcy9kYWQyLmpwZyc7XG5pbXBvcnQgUGljMyBmcm9tICcuL2ltYWdlcy9kYWQzLmpwZyc7XG5pbXBvcnQgUGljNCBmcm9tICcuL2ltYWdlcy9kYWQ0LmpwZyc7XG5pbXBvcnQgUGljNSBmcm9tICcuL2ltYWdlcy9kYWQ1LmpwZyc7XG5pbXBvcnQgUGljNiBmcm9tICcuL2ltYWdlcy9kYWQ2LmpwZyc7XG5pbXBvcnQgUGljNyBmcm9tICcuL2ltYWdlcy9kYWQ3LmpwZyc7XG5pbXBvcnQgUGljOCBmcm9tICcuL2ltYWdlcy9kYWQ4LmpwZyc7XG5pbXBvcnQgUGljOSBmcm9tICcuL2ltYWdlcy9kYWQ5LmpwZyc7XG5pbXBvcnQgUGljMTAgZnJvbSAnLi9pbWFnZXMvZGFkMTAuanBnJztcbmltcG9ydCBQaWMxMSBmcm9tICcuL2ltYWdlcy9kYWQxMS5qcGcnO1xuaW1wb3J0IFBpYzEyIGZyb20gJy4vaW1hZ2VzL2RhZDEyLmpwZyc7XG5pbXBvcnQgUGljMTMgZnJvbSAnLi9pbWFnZXMvZGFkMTMuanBnJztcbmltcG9ydCBQaWMxNCBmcm9tICcuL2ltYWdlcy9kYWQxNC5qcGcnO1xuaW1wb3J0IFBpYzE1IGZyb20gJy4vaW1hZ2VzL2RhZDE1LmpwZyc7XG5pbXBvcnQgUGljMTYgZnJvbSAnLi9pbWFnZXMvZGFkMTYuanBnJztcbmltcG9ydCBQaWMxNyBmcm9tICcuL2ltYWdlcy9kYWQxNy5qcGcnO1xuaW1wb3J0IFBpYzE4IGZyb20gJy4vaW1hZ2VzL2RhZDE4LmpwZyc7XG5pbXBvcnQgUGljMTkgZnJvbSAnLi9pbWFnZXMvZGFkMTkuanBnJztcbmltcG9ydCBQaWMyMCBmcm9tICcuL2ltYWdlcy9kYWQyMC5qcGcnO1xuaW1wb3J0IFBpYzIxIGZyb20gJy4vaW1hZ2VzL2RhZDIxLmpwZyc7XG5pbXBvcnQgUGljMjIgZnJvbSAnLi9pbWFnZXMvZGFkMjIuanBnJztcbmltcG9ydCBQaWMyMyBmcm9tICcuL2ltYWdlcy9kYWQyMy5qcGcnO1xuaW1wb3J0IFBpYzI0IGZyb20gJy4vaW1hZ2VzL2RhZDI0LmpwZyc7XG5pbXBvcnQgUGljMjUgZnJvbSAnLi9pbWFnZXMvZGFkMjUuanBnJztcbmltcG9ydCBQaWMyNiBmcm9tICcuL2ltYWdlcy9kYWQyNi5qcGcnO1xuaW1wb3J0IFBpYzI3IGZyb20gJy4vaW1hZ2VzL2RhZDI3LmpwZyc7XG5pbXBvcnQgUGljMjggZnJvbSAnLi9pbWFnZXMvZGFkMjguanBnJztcbmltcG9ydCBQaWMyOSBmcm9tICcuL2ltYWdlcy9kYWQyOS5qcGcnO1xuaW1wb3J0IFBpYzMwIGZyb20gJy4vaW1hZ2VzL2RhZDMwLmpwZyc7XG5pbXBvcnQgUGljMzEgZnJvbSAnLi9pbWFnZXMvZGFkMzEuanBnJztcbmltcG9ydCBQaWMzMiBmcm9tICcuL2ltYWdlcy9kYWQzMi5qcGcnO1xuaW1wb3J0IFBpYzMzIGZyb20gJy4vaW1hZ2VzL2RhZDMzLmpwZyc7XG5pbXBvcnQgUGljMzQgZnJvbSAnLi9pbWFnZXMvZGFkMzQuanBnJztcbmltcG9ydCBQaWMzNSBmcm9tICcuL2ltYWdlcy9kYWQzNS5qcGcnO1xuaW1wb3J0IFBpYzM2IGZyb20gJy4vaW1hZ2VzL2RhZDM2LmpwZyc7XG5pbXBvcnQgUGljMzcgZnJvbSAnLi9pbWFnZXMvZGFkMzcuanBnJztcbmltcG9ydCBQaWMzOCBmcm9tICcuL2ltYWdlcy9kYWQzOC5qcGcnO1xuaW1wb3J0IFBpYzM5IGZyb20gJy4vaW1hZ2VzL2RhZDM5LmpwZyc7XG5pbXBvcnQgUGljNDAgZnJvbSAnLi9pbWFnZXMvZGFkNDAuanBnJztcbmltcG9ydCBQaWM0MSBmcm9tICcuL2ltYWdlcy9kYWQ0MS5qcGcnO1xuaW1wb3J0IFBpYzQyIGZyb20gJy4vaW1hZ2VzL2RhZDQyLmpwZyc7XG5pbXBvcnQgUGljNDMgZnJvbSAnLi9pbWFnZXMvZGFkNDMuanBnJztcbmltcG9ydCBQaWM0NCBmcm9tICcuL2ltYWdlcy9kYWQ0NC5qcGcnO1xuaW1wb3J0IFBpYzQ1IGZyb20gJy4vaW1hZ2VzL2RhZDQ1LmpwZyc7XG5pbXBvcnQgUGljNDYgZnJvbSAnLi9pbWFnZXMvZGFkNDYuanBnJztcbmltcG9ydCBQaWM0NyBmcm9tICcuL2ltYWdlcy9kYWQ0Ny5qcGcnO1xuaW1wb3J0IFBpYzQ4IGZyb20gJy4vaW1hZ2VzL2RhZDQ4LmpwZyc7XG5pbXBvcnQgUGljNDkgZnJvbSAnLi9pbWFnZXMvZGFkNDkuanBnJztcbmltcG9ydCBQaWM1MCBmcm9tICcuL2ltYWdlcy9kYWQ1MC5qcGcnO1xuaW1wb3J0IFBpYzUxIGZyb20gJy4vaW1hZ2VzL2RhZDUxLmpwZyc7XG5pbXBvcnQgUGljNTIgZnJvbSAnLi9pbWFnZXMvZGFkNTIuanBnJztcbmltcG9ydCBQaWM1MyBmcm9tICcuL2ltYWdlcy9kYWQ1My5qcGcnO1xuaW1wb3J0IFBpYzU0IGZyb20gJy4vaW1hZ2VzL2RhZDU0LmpwZyc7XG5pbXBvcnQgUGljNTUgZnJvbSAnLi9pbWFnZXMvZGFkNTUuanBnJztcbmltcG9ydCBQaWM1NiBmcm9tICcuL2ltYWdlcy9kYWQ1Ni5qcGcnO1xuaW1wb3J0IFBpYzU3IGZyb20gJy4vaW1hZ2VzL2RhZDU3LmpwZyc7XG5pbXBvcnQgUGljNTggZnJvbSAnLi9pbWFnZXMvZGFkNTguanBnJztcbmltcG9ydCBQaWM1OSBmcm9tICcuL2ltYWdlcy9kYWQ1OS5qcGcnO1xuaW1wb3J0IFBpYzYwIGZyb20gJy4vaW1hZ2VzL2RhZDYwLmpwZyc7XG5pbXBvcnQgUGljNjEgZnJvbSAnLi9pbWFnZXMvZGFkNjEuanBnJztcbmltcG9ydCBQaWM2MiBmcm9tICcuL2ltYWdlcy9kYWQ2Mi5qcGcnO1xuaW1wb3J0IFBpYzYzIGZyb20gJy4vaW1hZ2VzL2RhZDYzLmpwZyc7XG5pbXBvcnQgUGljNjQgZnJvbSAnLi9pbWFnZXMvZGFkNjQuanBnJztcbmltcG9ydCBQaWM2NSBmcm9tICcuL2ltYWdlcy9kYWQ2NS5qcGcnO1xuaW1wb3J0IFBpYzY2IGZyb20gJy4vaW1hZ2VzL2RhZDY2LmpwZyc7XG5pbXBvcnQgUGljNjcgZnJvbSAnLi9pbWFnZXMvZGFkNjcuanBnJztcbmltcG9ydCBQaWM2OCBmcm9tICcuL2ltYWdlcy9kYWQ2OC5qcGcnO1xuaW1wb3J0IFBpYzY5IGZyb20gJy4vaW1hZ2VzL2RhZDY5LmpwZyc7XG5pbXBvcnQgUGljNzAgZnJvbSAnLi9pbWFnZXMvZGFkNzAuanBnJztcbmltcG9ydCBQaWM3MSBmcm9tICcuL2ltYWdlcy9kYWQ3MS5qcGcnO1xuaW1wb3J0IFBpYzcyIGZyb20gJy4vaW1hZ2VzL2RhZDcyLmpwZyc7XG5pbXBvcnQgUGljNzMgZnJvbSAnLi9pbWFnZXMvZGFkNzMuanBnJztcbmltcG9ydCBQaWM3NCBmcm9tICcuL2ltYWdlcy9kYWQ3NC5qcGcnO1xuaW1wb3J0IFBpYzc1IGZyb20gJy4vaW1hZ2VzL2RhZDc1LmpwZyc7XG5pbXBvcnQgUGljNzYgZnJvbSAnLi9pbWFnZXMvZGFkNzYuanBnJztcbmltcG9ydCBQaWM3NyBmcm9tICcuL2ltYWdlcy9kYWQ3Ny5qcGcnO1xuaW1wb3J0IFBpYzc4IGZyb20gJy4vaW1hZ2VzL2RhZDc4LmpwZyc7XG5pbXBvcnQgUGljNzkgZnJvbSAnLi9pbWFnZXMvZGFkNzkuanBnJztcbmltcG9ydCBQaWM4MCBmcm9tICcuL2ltYWdlcy9kYWQ4MC5qcGcnO1xuaW1wb3J0IFBpYzgxIGZyb20gJy4vaW1hZ2VzL2RhZDgxLmpwZyc7XG5pbXBvcnQgUGljODIgZnJvbSAnLi9pbWFnZXMvZGFkODIuanBnJztcbmltcG9ydCBQaWM4MyBmcm9tICcuL2ltYWdlcy9kYWQ4My5qcGcnO1xuaW1wb3J0IFBpYzg0IGZyb20gJy4vaW1hZ2VzL2RhZDg0LmpwZyc7XG5pbXBvcnQgUGljODUgZnJvbSAnLi9pbWFnZXMvZGFkODUuanBnJztcbmltcG9ydCBQaWM4NiBmcm9tICcuL2ltYWdlcy9kYWQ4Ni5qcGcnO1xuaW1wb3J0IFBpYzg3IGZyb20gJy4vaW1hZ2VzL2RhZDg3LmpwZyc7XG5pbXBvcnQgUGljODggZnJvbSAnLi9pbWFnZXMvZGFkODguanBnJztcbmltcG9ydCBQaWM4OSBmcm9tICcuL2ltYWdlcy9kYWQ4OS5qcGcnO1xuaW1wb3J0IFBpYzkwIGZyb20gJy4vaW1hZ2VzL2RhZDkwLmpwZyc7XG5pbXBvcnQgUGljOTEgZnJvbSAnLi9pbWFnZXMvZGFkOTEuanBnJztcbmltcG9ydCBQaWM5MiBmcm9tICcuL2ltYWdlcy9kYWQ5Mi5qcGcnO1xuaW1wb3J0IFBpYzkzIGZyb20gJy4vaW1hZ2VzL2RhZDkzLmpwZyc7XG5pbXBvcnQgUGljOTQgZnJvbSAnLi9pbWFnZXMvZGFkOTQuanBnJztcbmltcG9ydCBQaWM5NSBmcm9tICcuL2ltYWdlcy9kYWQ5NS5qcGcnO1xuaW1wb3J0IFBpYzk2IGZyb20gJy4vaW1hZ2VzL2RhZDk2LmpwZyc7XG5pbXBvcnQgUGljOTcgZnJvbSAnLi9pbWFnZXMvZGFkOTcuanBnJztcbmltcG9ydCBQaWM5OCBmcm9tICcuL2ltYWdlcy9kYWQ5OC5qcGcnO1xuaW1wb3J0IFBpYzk5IGZyb20gJy4vaW1hZ2VzL2RhZDk5LmpwZyc7XG5pbXBvcnQgUGljMTAwIGZyb20gJy4vaW1hZ2VzL2RhZDEwMC5qcGcnO1xuaW1wb3J0IFBpYzEwMSBmcm9tICcuL2ltYWdlcy9kYWQxMDEuanBnJztcbmltcG9ydCBQaWMxMDIgZnJvbSAnLi9pbWFnZXMvZGFkMTAyLmpwZyc7XG5pbXBvcnQgUGljMTAzIGZyb20gJy4vaW1hZ2VzL2RhZDEwMy5qcGcnO1xuaW1wb3J0IFBpYzEwNCBmcm9tICcuL2ltYWdlcy9kYWQxMDQuanBnJztcbmltcG9ydCBQaWMxMDUgZnJvbSAnLi9pbWFnZXMvZGFkMTA1LmpwZyc7XG5pbXBvcnQgUGljMTA2IGZyb20gJy4vaW1hZ2VzL2RhZDEwNi5qcGcnO1xuaW1wb3J0IFBpYzEwNyBmcm9tICcuL2ltYWdlcy9kYWQxMDcuanBnJztcbmltcG9ydCBQaWMxMDggZnJvbSAnLi9pbWFnZXMvZGFkMTA4LmpwZyc7XG5pbXBvcnQgUGljMTA5IGZyb20gJy4vaW1hZ2VzL2RhZDEwOS5qcGcnO1xuaW1wb3J0IFBpYzExMCBmcm9tICcuL2ltYWdlcy9kYWQxMTAuanBnJztcbmltcG9ydCBQaWMxMTEgZnJvbSAnLi9pbWFnZXMvZGFkMTExLmpwZyc7XG5pbXBvcnQgUGljMTEyIGZyb20gJy4vaW1hZ2VzL2RhZDExMi5qcGcnO1xuaW1wb3J0IFBpYzExMyBmcm9tICcuL2ltYWdlcy9kYWQxMTMuanBnJztcbmltcG9ydCBQaWMxMTQgZnJvbSAnLi9pbWFnZXMvZGFkMTE0LmpwZyc7XG5pbXBvcnQgUGljMTE1IGZyb20gJy4vaW1hZ2VzL2RhZDExNS5qcGcnO1xuaW1wb3J0IFBpYzExNiBmcm9tICcuL2ltYWdlcy9kYWQxMTYuanBnJztcbmltcG9ydCBQaWMxMTcgZnJvbSAnLi9pbWFnZXMvZGFkMTE3LmpwZyc7XG5pbXBvcnQgUGljMTE4IGZyb20gJy4vaW1hZ2VzL2RhZDExOC5qcGcnO1xuaW1wb3J0IFBpYzExOSBmcm9tICcuL2ltYWdlcy9kYWQxMTkuanBnJztcbmltcG9ydCBQaWMxMjAgZnJvbSAnLi9pbWFnZXMvZGFkMTIwLmpwZyc7XG5pbXBvcnQgUGljMTIxIGZyb20gJy4vaW1hZ2VzL2RhZDEyMS5qcGcnO1xuaW1wb3J0IFBpYzEyMiBmcm9tICcuL2ltYWdlcy9kYWQxMjIuanBnJztcbmltcG9ydCBQaWMxMjMgZnJvbSAnLi9pbWFnZXMvZGFkMTIzLmpwZyc7XG5pbXBvcnQgUGljMTI0IGZyb20gJy4vaW1hZ2VzL2RhZDEyNC5qcGcnO1xuaW1wb3J0IFBpYzEyNSBmcm9tICcuL2ltYWdlcy9kYWQxMjUuanBnJztcbmltcG9ydCBQaWMxMjYgZnJvbSAnLi9pbWFnZXMvZGFkMTI2LmpwZyc7XG5pbXBvcnQgUGljMTI3IGZyb20gJy4vaW1hZ2VzL2RhZDEyNy5qcGcnO1xuaW1wb3J0IFBpYzEyOCBmcm9tICcuL2ltYWdlcy9kYWQxMjguanBnJztcbmltcG9ydCBQaWMxMjkgZnJvbSAnLi9pbWFnZXMvZGFkMTI5LmpwZyc7XG5pbXBvcnQgUGljMTMwIGZyb20gJy4vaW1hZ2VzL2RhZDEzMC5qcGcnO1xuaW1wb3J0IFBpYzEzMSBmcm9tICcuL2ltYWdlcy9kYWQxMzEuanBnJztcbmltcG9ydCBQaWMxMzIgZnJvbSAnLi9pbWFnZXMvZGFkMTMyLmpwZyc7XG5pbXBvcnQgUGljMTMzIGZyb20gJy4vaW1hZ2VzL2RhZDEzMy5qcGcnO1xuaW1wb3J0IFBpYzEzNCBmcm9tICcuL2ltYWdlcy9kYWQxMzQuanBnJztcbmltcG9ydCBQaWMxMzUgZnJvbSAnLi9pbWFnZXMvZGFkMTM1LmpwZyc7XG5pbXBvcnQgUGljMTM2IGZyb20gJy4vaW1hZ2VzL2RhZDEzNi5qcGcnO1xuaW1wb3J0IFBpYzEzNyBmcm9tICcuL2ltYWdlcy9kYWQxMzcuanBnJztcbmltcG9ydCBQaWMxMzggZnJvbSAnLi9pbWFnZXMvZGFkMTM4LmpwZyc7XG5pbXBvcnQgUGljMTM5IGZyb20gJy4vaW1hZ2VzL2RhZDEzOS5qcGcnO1xuaW1wb3J0IFBpYzE0MCBmcm9tICcuL2ltYWdlcy9kYWQxNDAuanBnJztcbmltcG9ydCBQaWMxNDEgZnJvbSAnLi9pbWFnZXMvZGFkMTQxLmpwZyc7XG5pbXBvcnQgUGljMTQyIGZyb20gJy4vaW1hZ2VzL2RhZDE0Mi5qcGcnO1xuaW1wb3J0IFBpYzE0MyBmcm9tICcuL2ltYWdlcy9kYWQxNDMuanBnJztcbmltcG9ydCBQaWMxNDQgZnJvbSAnLi9pbWFnZXMvZGFkMTQ0LmpwZyc7XG5pbXBvcnQgUGljMTQ1IGZyb20gJy4vaW1hZ2VzL2RhZDE0NS5qcGcnO1xuaW1wb3J0IFBpYzE0NiBmcm9tICcuL2ltYWdlcy9kYWQxNDYuanBnJztcbmltcG9ydCBQaWMxNDcgZnJvbSAnLi9pbWFnZXMvZGFkMTQ3LmpwZyc7XG5pbXBvcnQgUGljMTQ4IGZyb20gJy4vaW1hZ2VzL2RhZDE0OC5qcGcnO1xuaW1wb3J0IFBpYzE0OSBmcm9tICcuL2ltYWdlcy9kYWQxNDkuanBnJztcbmltcG9ydCBQaWMxNTAgZnJvbSAnLi9pbWFnZXMvZGFkMTUwLmpwZyc7XG5pbXBvcnQgUGljMTUxIGZyb20gJy4vaW1hZ2VzL2RhZDE1MS5qcGcnO1xuaW1wb3J0IFBpYzE1MiBmcm9tICcuL2ltYWdlcy9kYWQxNTIuanBnJztcbmltcG9ydCBQaWMxNTMgZnJvbSAnLi9pbWFnZXMvZGFkMTUzLmpwZyc7XG5pbXBvcnQgUGljMTU0IGZyb20gJy4vaW1hZ2VzL2RhZDE1NC5qcGcnO1xuaW1wb3J0IFBpYzE1NSBmcm9tICcuL2ltYWdlcy9kYWQxNTUuanBnJztcbmltcG9ydCBQaWMxNTYgZnJvbSAnLi9pbWFnZXMvZGFkMTU2LmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtdO1xuXG5jb25zdCBkYWQxID0gbmV3IEltYWdlKCk7XG5kYWQxLnNyYyA9IFBpYzE7XG5pbWFnZXMucHVzaChkYWQxKTtcblxuY29uc3QgZGFkMiA9IG5ldyBJbWFnZSgpO1xuZGFkMi5zcmMgPSBQaWMyO1xuaW1hZ2VzLnB1c2goZGFkMik7XG5cbmNvbnN0IGRhZDMgPSBuZXcgSW1hZ2UoKTtcbmRhZDMuc3JjID0gUGljMztcbmltYWdlcy5wdXNoKGRhZDMpO1xuXG5jb25zdCBkYWQ0ID0gbmV3IEltYWdlKCk7XG5kYWQ0LnNyYyA9IFBpYzQ7XG5pbWFnZXMucHVzaChkYWQ0KTtcblxuY29uc3QgZGFkNSA9IG5ldyBJbWFnZSgpO1xuZGFkNS5zcmMgPSBQaWM1O1xuaW1hZ2VzLnB1c2goZGFkNSk7XG5cbmNvbnN0IGRhZDYgPSBuZXcgSW1hZ2UoKTtcbmRhZDYuc3JjID0gUGljNjtcbmltYWdlcy5wdXNoKGRhZDYpO1xuXG5jb25zdCBkYWQ3ID0gbmV3IEltYWdlKCk7XG5kYWQ3LnNyYyA9IFBpYzc7XG5pbWFnZXMucHVzaChkYWQ3KTtcblxuY29uc3QgZGFkOCA9IG5ldyBJbWFnZSgpO1xuZGFkOC5zcmMgPSBQaWM4O1xuaW1hZ2VzLnB1c2goZGFkOCk7XG5cbmNvbnN0IGRhZDkgPSBuZXcgSW1hZ2UoKTtcbmRhZDkuc3JjID0gUGljOTtcbmltYWdlcy5wdXNoKGRhZDkpO1xuXG5jb25zdCBkYWQxMCA9IG5ldyBJbWFnZSgpO1xuZGFkMTAuc3JjID0gUGljMTA7XG5pbWFnZXMucHVzaChkYWQxMCk7XG5cbmNvbnN0IGRhZDExID0gbmV3IEltYWdlKCk7XG5kYWQxMS5zcmMgPSBQaWMxMTtcbmltYWdlcy5wdXNoKGRhZDExKTtcblxuY29uc3QgZGFkMTIgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyLnNyYyA9IFBpYzEyO1xuaW1hZ2VzLnB1c2goZGFkMTIpO1xuXG5jb25zdCBkYWQxMyA9IG5ldyBJbWFnZSgpO1xuZGFkMTMuc3JjID0gUGljMTM7XG5pbWFnZXMucHVzaChkYWQxMyk7XG5cbmNvbnN0IGRhZDE0ID0gbmV3IEltYWdlKCk7XG5kYWQxNC5zcmMgPSBQaWMxNDtcbmltYWdlcy5wdXNoKGRhZDE0KTtcblxuY29uc3QgZGFkMTUgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1LnNyYyA9IFBpYzE1O1xuaW1hZ2VzLnB1c2goZGFkMTUpO1xuXG5jb25zdCBkYWQxNiA9IG5ldyBJbWFnZSgpO1xuZGFkMTYuc3JjID0gUGljMTY7XG5pbWFnZXMucHVzaChkYWQxNik7XG5cbmNvbnN0IGRhZDE3ID0gbmV3IEltYWdlKCk7XG5kYWQxNy5zcmMgPSBQaWMxNztcbmltYWdlcy5wdXNoKGRhZDE3KTtcblxuY29uc3QgZGFkMTggPSBuZXcgSW1hZ2UoKTtcbmRhZDE4LnNyYyA9IFBpYzE4O1xuaW1hZ2VzLnB1c2goZGFkMTgpO1xuXG5jb25zdCBkYWQxOSA9IG5ldyBJbWFnZSgpO1xuZGFkMTkuc3JjID0gUGljMTk7XG5pbWFnZXMucHVzaChkYWQxOSk7XG5cbmNvbnN0IGRhZDIwID0gbmV3IEltYWdlKCk7XG5kYWQyMC5zcmMgPSBQaWMyMDtcbmltYWdlcy5wdXNoKGRhZDIwKTtcblxuY29uc3QgZGFkMjEgPSBuZXcgSW1hZ2UoKTtcbmRhZDIxLnNyYyA9IFBpYzIxO1xuaW1hZ2VzLnB1c2goZGFkMjEpO1xuXG5jb25zdCBkYWQyMiA9IG5ldyBJbWFnZSgpO1xuZGFkMjIuc3JjID0gUGljMjI7XG5pbWFnZXMucHVzaChkYWQyMik7XG5cbmNvbnN0IGRhZDIzID0gbmV3IEltYWdlKCk7XG5kYWQyMy5zcmMgPSBQaWMyMztcbmltYWdlcy5wdXNoKGRhZDIzKTtcblxuY29uc3QgZGFkMjQgPSBuZXcgSW1hZ2UoKTtcbmRhZDI0LnNyYyA9IFBpYzI0O1xuaW1hZ2VzLnB1c2goZGFkMjQpO1xuXG5jb25zdCBkYWQyNSA9IG5ldyBJbWFnZSgpO1xuZGFkMjUuc3JjID0gUGljMjU7XG5pbWFnZXMucHVzaChkYWQyNSk7XG5cbmNvbnN0IGRhZDI2ID0gbmV3IEltYWdlKCk7XG5kYWQyNi5zcmMgPSBQaWMyNjtcbmltYWdlcy5wdXNoKGRhZDI2KTtcblxuY29uc3QgZGFkMjcgPSBuZXcgSW1hZ2UoKTtcbmRhZDI3LnNyYyA9IFBpYzI3O1xuaW1hZ2VzLnB1c2goZGFkMjcpO1xuXG5jb25zdCBkYWQyOCA9IG5ldyBJbWFnZSgpO1xuZGFkMjguc3JjID0gUGljMjg7XG5pbWFnZXMucHVzaChkYWQyOCk7XG5cbmNvbnN0IGRhZDI5ID0gbmV3IEltYWdlKCk7XG5kYWQyOS5zcmMgPSBQaWMyOTtcbmltYWdlcy5wdXNoKGRhZDI5KTtcblxuY29uc3QgZGFkMzAgPSBuZXcgSW1hZ2UoKTtcbmRhZDMwLnNyYyA9IFBpYzMwO1xuaW1hZ2VzLnB1c2goZGFkMzApO1xuXG5jb25zdCBkYWQzMSA9IG5ldyBJbWFnZSgpO1xuZGFkMzEuc3JjID0gUGljMzE7XG5pbWFnZXMucHVzaChkYWQzMSk7XG5cbmNvbnN0IGRhZDMyID0gbmV3IEltYWdlKCk7XG5kYWQzMi5zcmMgPSBQaWMzMjtcbmltYWdlcy5wdXNoKGRhZDMyKTtcblxuY29uc3QgZGFkMzMgPSBuZXcgSW1hZ2UoKTtcbmRhZDMzLnNyYyA9IFBpYzMzO1xuaW1hZ2VzLnB1c2goZGFkMzMpO1xuXG5jb25zdCBkYWQzNCA9IG5ldyBJbWFnZSgpO1xuZGFkMzQuc3JjID0gUGljMzQ7XG5pbWFnZXMucHVzaChkYWQzNCk7XG5cbmNvbnN0IGRhZDM1ID0gbmV3IEltYWdlKCk7XG5kYWQzNS5zcmMgPSBQaWMzNTtcbmltYWdlcy5wdXNoKGRhZDM1KTtcblxuY29uc3QgZGFkMzYgPSBuZXcgSW1hZ2UoKTtcbmRhZDM2LnNyYyA9IFBpYzM2O1xuaW1hZ2VzLnB1c2goZGFkMzYpO1xuXG5jb25zdCBkYWQzNyA9IG5ldyBJbWFnZSgpO1xuZGFkMzcuc3JjID0gUGljMzc7XG5pbWFnZXMucHVzaChkYWQzNyk7XG5cbmNvbnN0IGRhZDM4ID0gbmV3IEltYWdlKCk7XG5kYWQzOC5zcmMgPSBQaWMzODtcbmltYWdlcy5wdXNoKGRhZDM4KTtcblxuY29uc3QgZGFkMzkgPSBuZXcgSW1hZ2UoKTtcbmRhZDM5LnNyYyA9IFBpYzM5O1xuaW1hZ2VzLnB1c2goZGFkMzkpO1xuXG5jb25zdCBkYWQ0MCA9IG5ldyBJbWFnZSgpO1xuZGFkNDAuc3JjID0gUGljNDA7XG5pbWFnZXMucHVzaChkYWQ0MCk7XG5cbmNvbnN0IGRhZDQxID0gbmV3IEltYWdlKCk7XG5kYWQ0MS5zcmMgPSBQaWM0MTtcbmltYWdlcy5wdXNoKGRhZDQxKTtcblxuY29uc3QgZGFkNDIgPSBuZXcgSW1hZ2UoKTtcbmRhZDQyLnNyYyA9IFBpYzQyO1xuaW1hZ2VzLnB1c2goZGFkNDIpO1xuXG5jb25zdCBkYWQ0MyA9IG5ldyBJbWFnZSgpO1xuZGFkNDMuc3JjID0gUGljNDM7XG5pbWFnZXMucHVzaChkYWQ0Myk7XG5cbmNvbnN0IGRhZDQ0ID0gbmV3IEltYWdlKCk7XG5kYWQ0NC5zcmMgPSBQaWM0NDtcbmltYWdlcy5wdXNoKGRhZDQ0KTtcblxuY29uc3QgZGFkNDUgPSBuZXcgSW1hZ2UoKTtcbmRhZDQ1LnNyYyA9IFBpYzQ1O1xuaW1hZ2VzLnB1c2goZGFkNDUpO1xuXG5jb25zdCBkYWQ0NiA9IG5ldyBJbWFnZSgpO1xuZGFkNDYuc3JjID0gUGljNDY7XG5pbWFnZXMucHVzaChkYWQ0Nik7XG5cbmNvbnN0IGRhZDQ3ID0gbmV3IEltYWdlKCk7XG5kYWQ0Ny5zcmMgPSBQaWM0NztcbmltYWdlcy5wdXNoKGRhZDQ3KTtcblxuY29uc3QgZGFkNDggPSBuZXcgSW1hZ2UoKTtcbmRhZDQ4LnNyYyA9IFBpYzQ4O1xuaW1hZ2VzLnB1c2goZGFkNDgpO1xuXG5jb25zdCBkYWQ0OSA9IG5ldyBJbWFnZSgpO1xuZGFkNDkuc3JjID0gUGljNDk7XG5pbWFnZXMucHVzaChkYWQ0OSk7XG5cbmNvbnN0IGRhZDUwID0gbmV3IEltYWdlKCk7XG5kYWQ1MC5zcmMgPSBQaWM1MDtcbmltYWdlcy5wdXNoKGRhZDUwKTtcblxuY29uc3QgZGFkNTEgPSBuZXcgSW1hZ2UoKTtcbmRhZDUxLnNyYyA9IFBpYzUxO1xuaW1hZ2VzLnB1c2goZGFkNTEpO1xuXG5jb25zdCBkYWQ1MiA9IG5ldyBJbWFnZSgpO1xuZGFkNTIuc3JjID0gUGljNTI7XG5pbWFnZXMucHVzaChkYWQ1Mik7XG5cbmNvbnN0IGRhZDUzID0gbmV3IEltYWdlKCk7XG5kYWQ1My5zcmMgPSBQaWM1MztcbmltYWdlcy5wdXNoKGRhZDUzKTtcblxuY29uc3QgZGFkNTQgPSBuZXcgSW1hZ2UoKTtcbmRhZDU0LnNyYyA9IFBpYzU0O1xuaW1hZ2VzLnB1c2goZGFkNTQpO1xuXG5jb25zdCBkYWQ1NSA9IG5ldyBJbWFnZSgpO1xuZGFkNTUuc3JjID0gUGljNTU7XG5pbWFnZXMucHVzaChkYWQ1NSk7XG5cbmNvbnN0IGRhZDU2ID0gbmV3IEltYWdlKCk7XG5kYWQ1Ni5zcmMgPSBQaWM1NjtcbmltYWdlcy5wdXNoKGRhZDU2KTtcblxuY29uc3QgZGFkNTcgPSBuZXcgSW1hZ2UoKTtcbmRhZDU3LnNyYyA9IFBpYzU3O1xuaW1hZ2VzLnB1c2goZGFkNTcpO1xuXG5jb25zdCBkYWQ1OCA9IG5ldyBJbWFnZSgpO1xuZGFkNTguc3JjID0gUGljNTg7XG5pbWFnZXMucHVzaChkYWQ1OCk7XG5cbmNvbnN0IGRhZDU5ID0gbmV3IEltYWdlKCk7XG5kYWQ1OS5zcmMgPSBQaWM1OTtcbmltYWdlcy5wdXNoKGRhZDU5KTtcblxuY29uc3QgZGFkNjAgPSBuZXcgSW1hZ2UoKTtcbmRhZDYwLnNyYyA9IFBpYzYwO1xuaW1hZ2VzLnB1c2goZGFkNjApO1xuXG5jb25zdCBkYWQ2MSA9IG5ldyBJbWFnZSgpO1xuZGFkNjEuc3JjID0gUGljNjE7XG5pbWFnZXMucHVzaChkYWQ2MSk7XG5cbmNvbnN0IGRhZDYyID0gbmV3IEltYWdlKCk7XG5kYWQ2Mi5zcmMgPSBQaWM2MjtcbmltYWdlcy5wdXNoKGRhZDYyKTtcblxuY29uc3QgZGFkNjMgPSBuZXcgSW1hZ2UoKTtcbmRhZDYzLnNyYyA9IFBpYzYzO1xuaW1hZ2VzLnB1c2goZGFkNjMpO1xuXG5jb25zdCBkYWQ2NCA9IG5ldyBJbWFnZSgpO1xuZGFkNjQuc3JjID0gUGljNjQ7XG5pbWFnZXMucHVzaChkYWQ2NCk7XG5cbmNvbnN0IGRhZDY1ID0gbmV3IEltYWdlKCk7XG5kYWQ2NS5zcmMgPSBQaWM2NTtcbmltYWdlcy5wdXNoKGRhZDY1KTtcblxuY29uc3QgZGFkNjYgPSBuZXcgSW1hZ2UoKTtcbmRhZDY2LnNyYyA9IFBpYzY2O1xuaW1hZ2VzLnB1c2goZGFkNjYpO1xuXG5jb25zdCBkYWQ2NyA9IG5ldyBJbWFnZSgpO1xuZGFkNjcuc3JjID0gUGljNjc7XG5pbWFnZXMucHVzaChkYWQ2Nyk7XG5cbmNvbnN0IGRhZDY4ID0gbmV3IEltYWdlKCk7XG5kYWQ2OC5zcmMgPSBQaWM2ODtcbmltYWdlcy5wdXNoKGRhZDY4KTtcblxuY29uc3QgZGFkNjkgPSBuZXcgSW1hZ2UoKTtcbmRhZDY5LnNyYyA9IFBpYzY5O1xuaW1hZ2VzLnB1c2goZGFkNjkpO1xuXG5jb25zdCBkYWQ3MCA9IG5ldyBJbWFnZSgpO1xuZGFkNzAuc3JjID0gUGljNzA7XG5pbWFnZXMucHVzaChkYWQ3MCk7XG5cbmNvbnN0IGRhZDcxID0gbmV3IEltYWdlKCk7XG5kYWQ3MS5zcmMgPSBQaWM3MTtcbmltYWdlcy5wdXNoKGRhZDcxKTtcblxuY29uc3QgZGFkNzIgPSBuZXcgSW1hZ2UoKTtcbmRhZDcyLnNyYyA9IFBpYzcyO1xuaW1hZ2VzLnB1c2goZGFkNzIpO1xuXG5jb25zdCBkYWQ3MyA9IG5ldyBJbWFnZSgpO1xuZGFkNzMuc3JjID0gUGljNzM7XG5pbWFnZXMucHVzaChkYWQ3Myk7XG5cbmNvbnN0IGRhZDc0ID0gbmV3IEltYWdlKCk7XG5kYWQ3NC5zcmMgPSBQaWM3NDtcbmltYWdlcy5wdXNoKGRhZDc0KTtcblxuY29uc3QgZGFkNzUgPSBuZXcgSW1hZ2UoKTtcbmRhZDc1LnNyYyA9IFBpYzc1O1xuaW1hZ2VzLnB1c2goZGFkNzUpO1xuXG5jb25zdCBkYWQ3NiA9IG5ldyBJbWFnZSgpO1xuZGFkNzYuc3JjID0gUGljNzY7XG5pbWFnZXMucHVzaChkYWQ3Nik7XG5cbmNvbnN0IGRhZDc3ID0gbmV3IEltYWdlKCk7XG5kYWQ3Ny5zcmMgPSBQaWM3NztcbmltYWdlcy5wdXNoKGRhZDc3KTtcblxuY29uc3QgZGFkNzggPSBuZXcgSW1hZ2UoKTtcbmRhZDc4LnNyYyA9IFBpYzc4O1xuaW1hZ2VzLnB1c2goZGFkNzgpO1xuXG5jb25zdCBkYWQ3OSA9IG5ldyBJbWFnZSgpO1xuZGFkNzkuc3JjID0gUGljNzk7XG5pbWFnZXMucHVzaChkYWQ3OSk7XG5cbmNvbnN0IGRhZDgwID0gbmV3IEltYWdlKCk7XG5kYWQ4MC5zcmMgPSBQaWM4MDtcbmltYWdlcy5wdXNoKGRhZDgwKTtcblxuY29uc3QgZGFkODEgPSBuZXcgSW1hZ2UoKTtcbmRhZDgxLnNyYyA9IFBpYzgxO1xuaW1hZ2VzLnB1c2goZGFkODEpO1xuXG5jb25zdCBkYWQ4MiA9IG5ldyBJbWFnZSgpO1xuZGFkODIuc3JjID0gUGljODI7XG5pbWFnZXMucHVzaChkYWQ4Mik7XG5cbmNvbnN0IGRhZDgzID0gbmV3IEltYWdlKCk7XG5kYWQ4My5zcmMgPSBQaWM4MztcbmltYWdlcy5wdXNoKGRhZDgzKTtcblxuY29uc3QgZGFkODQgPSBuZXcgSW1hZ2UoKTtcbmRhZDg0LnNyYyA9IFBpYzg0O1xuaW1hZ2VzLnB1c2goZGFkODQpO1xuXG5jb25zdCBkYWQ4NSA9IG5ldyBJbWFnZSgpO1xuZGFkODUuc3JjID0gUGljODU7XG5pbWFnZXMucHVzaChkYWQ4NSk7XG5cbmNvbnN0IGRhZDg2ID0gbmV3IEltYWdlKCk7XG5kYWQ4Ni5zcmMgPSBQaWM4NjtcbmltYWdlcy5wdXNoKGRhZDg2KTtcblxuY29uc3QgZGFkODcgPSBuZXcgSW1hZ2UoKTtcbmRhZDg3LnNyYyA9IFBpYzg3O1xuaW1hZ2VzLnB1c2goZGFkODcpO1xuXG5jb25zdCBkYWQ4OCA9IG5ldyBJbWFnZSgpO1xuZGFkODguc3JjID0gUGljODg7XG5pbWFnZXMucHVzaChkYWQ4OCk7XG5cbmNvbnN0IGRhZDg5ID0gbmV3IEltYWdlKCk7XG5kYWQ4OS5zcmMgPSBQaWM4OTtcbmltYWdlcy5wdXNoKGRhZDg5KTtcblxuY29uc3QgZGFkOTAgPSBuZXcgSW1hZ2UoKTtcbmRhZDkwLnNyYyA9IFBpYzkwO1xuaW1hZ2VzLnB1c2goZGFkOTApO1xuXG5jb25zdCBkYWQ5MSA9IG5ldyBJbWFnZSgpO1xuZGFkOTEuc3JjID0gUGljOTE7XG5pbWFnZXMucHVzaChkYWQ5MSk7XG5cbmNvbnN0IGRhZDkyID0gbmV3IEltYWdlKCk7XG5kYWQ5Mi5zcmMgPSBQaWM5MjtcbmltYWdlcy5wdXNoKGRhZDkyKTtcblxuY29uc3QgZGFkOTMgPSBuZXcgSW1hZ2UoKTtcbmRhZDkzLnNyYyA9IFBpYzkzO1xuaW1hZ2VzLnB1c2goZGFkOTMpO1xuXG5jb25zdCBkYWQ5NCA9IG5ldyBJbWFnZSgpO1xuZGFkOTQuc3JjID0gUGljOTQ7XG5pbWFnZXMucHVzaChkYWQ5NCk7XG5cbmNvbnN0IGRhZDk1ID0gbmV3IEltYWdlKCk7XG5kYWQ5NS5zcmMgPSBQaWM5NTtcbmltYWdlcy5wdXNoKGRhZDk1KTtcblxuY29uc3QgZGFkOTYgPSBuZXcgSW1hZ2UoKTtcbmRhZDk2LnNyYyA9IFBpYzk2O1xuaW1hZ2VzLnB1c2goZGFkOTYpO1xuXG5jb25zdCBkYWQ5NyA9IG5ldyBJbWFnZSgpO1xuZGFkOTcuc3JjID0gUGljOTc7XG5pbWFnZXMucHVzaChkYWQ5Nyk7XG5cbmNvbnN0IGRhZDk4ID0gbmV3IEltYWdlKCk7XG5kYWQ5OC5zcmMgPSBQaWM5ODtcbmltYWdlcy5wdXNoKGRhZDk4KTtcblxuY29uc3QgZGFkOTkgPSBuZXcgSW1hZ2UoKTtcbmRhZDk5LnNyYyA9IFBpYzk5O1xuaW1hZ2VzLnB1c2goZGFkOTkpO1xuXG5jb25zdCBkYWQxMDAgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwMC5zcmMgPSBQaWMxMDA7XG5pbWFnZXMucHVzaChkYWQxMDApO1xuXG5jb25zdCBkYWQxMDEgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwMS5zcmMgPSBQaWMxMDE7XG5pbWFnZXMucHVzaChkYWQxMDEpO1xuXG5jb25zdCBkYWQxMDIgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwMi5zcmMgPSBQaWMxMDI7XG5pbWFnZXMucHVzaChkYWQxMDIpO1xuXG5jb25zdCBkYWQxMDMgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwMy5zcmMgPSBQaWMxMDM7XG5pbWFnZXMucHVzaChkYWQxMDMpO1xuXG5jb25zdCBkYWQxMDQgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwNC5zcmMgPSBQaWMxMDQ7XG5pbWFnZXMucHVzaChkYWQxMDQpO1xuXG5jb25zdCBkYWQxMDUgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwNS5zcmMgPSBQaWMxMDU7XG5pbWFnZXMucHVzaChkYWQxMDUpO1xuXG5jb25zdCBkYWQxMDYgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwNi5zcmMgPSBQaWMxMDY7XG5pbWFnZXMucHVzaChkYWQxMDYpO1xuXG5jb25zdCBkYWQxMDcgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwNy5zcmMgPSBQaWMxMDc7XG5pbWFnZXMucHVzaChkYWQxMDcpO1xuXG5jb25zdCBkYWQxMDggPSBuZXcgSW1hZ2UoKTtcbmRhZDEwOC5zcmMgPSBQaWMxMDg7XG5pbWFnZXMucHVzaChkYWQxMDgpO1xuXG5jb25zdCBkYWQxMDkgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwOS5zcmMgPSBQaWMxMDk7XG5pbWFnZXMucHVzaChkYWQxMDkpO1xuXG5jb25zdCBkYWQxMTAgPSBuZXcgSW1hZ2UoKTtcbmRhZDExMC5zcmMgPSBQaWMxMTA7XG5pbWFnZXMucHVzaChkYWQxMTApO1xuXG5jb25zdCBkYWQxMTEgPSBuZXcgSW1hZ2UoKTtcbmRhZDExMS5zcmMgPSBQaWMxMTE7XG5pbWFnZXMucHVzaChkYWQxMTEpO1xuXG5jb25zdCBkYWQxMTIgPSBuZXcgSW1hZ2UoKTtcbmRhZDExMi5zcmMgPSBQaWMxMTI7XG5pbWFnZXMucHVzaChkYWQxMTIpO1xuXG5jb25zdCBkYWQxMTMgPSBuZXcgSW1hZ2UoKTtcbmRhZDExMy5zcmMgPSBQaWMxMTM7XG5pbWFnZXMucHVzaChkYWQxMTMpO1xuXG5jb25zdCBkYWQxMTQgPSBuZXcgSW1hZ2UoKTtcbmRhZDExNC5zcmMgPSBQaWMxMTQ7XG5pbWFnZXMucHVzaChkYWQxMTQpO1xuXG5jb25zdCBkYWQxMTUgPSBuZXcgSW1hZ2UoKTtcbmRhZDExNS5zcmMgPSBQaWMxMTU7XG5pbWFnZXMucHVzaChkYWQxMTUpO1xuXG5jb25zdCBkYWQxMTYgPSBuZXcgSW1hZ2UoKTtcbmRhZDExNi5zcmMgPSBQaWMxMTY7XG5pbWFnZXMucHVzaChkYWQxMTYpO1xuXG5jb25zdCBkYWQxMTcgPSBuZXcgSW1hZ2UoKTtcbmRhZDExNy5zcmMgPSBQaWMxMTc7XG5pbWFnZXMucHVzaChkYWQxMTcpO1xuXG5jb25zdCBkYWQxMTggPSBuZXcgSW1hZ2UoKTtcbmRhZDExOC5zcmMgPSBQaWMxMTg7XG5pbWFnZXMucHVzaChkYWQxMTgpO1xuXG5jb25zdCBkYWQxMTkgPSBuZXcgSW1hZ2UoKTtcbmRhZDExOS5zcmMgPSBQaWMxMTk7XG5pbWFnZXMucHVzaChkYWQxMTkpO1xuXG5jb25zdCBkYWQxMjAgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyMC5zcmMgPSBQaWMxMjA7XG5pbWFnZXMucHVzaChkYWQxMjApO1xuXG5jb25zdCBkYWQxMjEgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyMS5zcmMgPSBQaWMxMjE7XG5pbWFnZXMucHVzaChkYWQxMjEpO1xuXG5jb25zdCBkYWQxMjIgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyMi5zcmMgPSBQaWMxMjI7XG5pbWFnZXMucHVzaChkYWQxMjIpO1xuXG5jb25zdCBkYWQxMjMgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyMy5zcmMgPSBQaWMxMjM7XG5pbWFnZXMucHVzaChkYWQxMjMpO1xuXG5jb25zdCBkYWQxMjQgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyNC5zcmMgPSBQaWMxMjQ7XG5pbWFnZXMucHVzaChkYWQxMjQpO1xuXG5jb25zdCBkYWQxMjUgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyNS5zcmMgPSBQaWMxMjU7XG5pbWFnZXMucHVzaChkYWQxMjUpO1xuXG5jb25zdCBkYWQxMjYgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyNi5zcmMgPSBQaWMxMjY7XG5pbWFnZXMucHVzaChkYWQxMjYpO1xuXG5jb25zdCBkYWQxMjcgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyNy5zcmMgPSBQaWMxMjc7XG5pbWFnZXMucHVzaChkYWQxMjcpO1xuXG5jb25zdCBkYWQxMjggPSBuZXcgSW1hZ2UoKTtcbmRhZDEyOC5zcmMgPSBQaWMxMjg7XG5pbWFnZXMucHVzaChkYWQxMjgpO1xuXG5jb25zdCBkYWQxMjkgPSBuZXcgSW1hZ2UoKTtcbmRhZDEyOS5zcmMgPSBQaWMxMjk7XG5pbWFnZXMucHVzaChkYWQxMjkpO1xuXG5jb25zdCBkYWQxMzAgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzMC5zcmMgPSBQaWMxMzA7XG5pbWFnZXMucHVzaChkYWQxMzApO1xuXG5jb25zdCBkYWQxMzEgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzMS5zcmMgPSBQaWMxMzE7XG5pbWFnZXMucHVzaChkYWQxMzEpO1xuXG5jb25zdCBkYWQxMzIgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzMi5zcmMgPSBQaWMxMzI7XG5pbWFnZXMucHVzaChkYWQxMzIpO1xuXG5jb25zdCBkYWQxMzMgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzMy5zcmMgPSBQaWMxMzM7XG5pbWFnZXMucHVzaChkYWQxMzMpO1xuXG5jb25zdCBkYWQxMzQgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzNC5zcmMgPSBQaWMxMzQ7XG5pbWFnZXMucHVzaChkYWQxMzQpO1xuXG5jb25zdCBkYWQxMzUgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzNS5zcmMgPSBQaWMxMzU7XG5pbWFnZXMucHVzaChkYWQxMzUpO1xuXG5jb25zdCBkYWQxMzYgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzNi5zcmMgPSBQaWMxMzY7XG5pbWFnZXMucHVzaChkYWQxMzYpO1xuXG5jb25zdCBkYWQxMzcgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzNy5zcmMgPSBQaWMxMzc7XG5pbWFnZXMucHVzaChkYWQxMzcpO1xuXG5jb25zdCBkYWQxMzggPSBuZXcgSW1hZ2UoKTtcbmRhZDEzOC5zcmMgPSBQaWMxMzg7XG5pbWFnZXMucHVzaChkYWQxMzgpO1xuXG5jb25zdCBkYWQxMzkgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzOS5zcmMgPSBQaWMxMzk7XG5pbWFnZXMucHVzaChkYWQxMzkpO1xuXG5jb25zdCBkYWQxNDAgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0MC5zcmMgPSBQaWMxNDA7XG5pbWFnZXMucHVzaChkYWQxNDApO1xuXG5jb25zdCBkYWQxNDEgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0MS5zcmMgPSBQaWMxNDE7XG5pbWFnZXMucHVzaChkYWQxNDEpO1xuXG5jb25zdCBkYWQxNDIgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0Mi5zcmMgPSBQaWMxNDI7XG5pbWFnZXMucHVzaChkYWQxNDIpO1xuXG5jb25zdCBkYWQxNDMgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0My5zcmMgPSBQaWMxNDM7XG5pbWFnZXMucHVzaChkYWQxNDMpO1xuXG5jb25zdCBkYWQxNDQgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0NC5zcmMgPSBQaWMxNDQ7XG5pbWFnZXMucHVzaChkYWQxNDQpO1xuXG5jb25zdCBkYWQxNDUgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0NS5zcmMgPSBQaWMxNDU7XG5pbWFnZXMucHVzaChkYWQxNDUpO1xuXG5jb25zdCBkYWQxNDYgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0Ni5zcmMgPSBQaWMxNDY7XG5pbWFnZXMucHVzaChkYWQxNDYpO1xuXG5jb25zdCBkYWQxNDcgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0Ny5zcmMgPSBQaWMxNDc7XG5pbWFnZXMucHVzaChkYWQxNDcpO1xuXG5jb25zdCBkYWQxNDggPSBuZXcgSW1hZ2UoKTtcbmRhZDE0OC5zcmMgPSBQaWMxNDg7XG5pbWFnZXMucHVzaChkYWQxNDgpO1xuXG5jb25zdCBkYWQxNDkgPSBuZXcgSW1hZ2UoKTtcbmRhZDE0OS5zcmMgPSBQaWMxNDk7XG5pbWFnZXMucHVzaChkYWQxNDkpO1xuXG5jb25zdCBkYWQxNTAgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1MC5zcmMgPSBQaWMxNTA7XG5pbWFnZXMucHVzaChkYWQxNTApO1xuXG5jb25zdCBkYWQxNTEgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1MS5zcmMgPSBQaWMxNTE7XG5pbWFnZXMucHVzaChkYWQxNTEpO1xuXG5jb25zdCBkYWQxNTIgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1Mi5zcmMgPSBQaWMxNTI7XG5pbWFnZXMucHVzaChkYWQxNTIpO1xuXG5jb25zdCBkYWQxNTMgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1My5zcmMgPSBQaWMxNTM7XG5pbWFnZXMucHVzaChkYWQxNTMpO1xuXG5jb25zdCBkYWQxNTQgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1NC5zcmMgPSBQaWMxNTQ7XG5pbWFnZXMucHVzaChkYWQxNTQpO1xuXG5jb25zdCBkYWQxNTUgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1NS5zcmMgPSBQaWMxNTU7XG5pbWFnZXMucHVzaChkYWQxNTUpO1xuXG5jb25zdCBkYWQxNTYgPSBuZXcgSW1hZ2UoKTtcbmRhZDE1Ni5zcmMgPSBQaWMxNTY7XG5pbWFnZXMucHVzaChkYWQxNTYpO1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZXM7XG4iLCIvLyB0aGlzIG1vZHVsZSBjcmVhdGVzIHdhdmVzdXJmZXIgYXVkaW8gcGxheWVyIGluc3RhY2VzIGJ5IGxvb3Bpbmcgb3ZlciBhcnJheXNcbi8vIGFzIHBhcmFtcywgdGhlIGZ1bmN0aW9uIHRha2VzIGFuIGFycmF5IG9mIGF1ZGlvIGZpbGVzLCBhbiBhcnJheSBvZiB0cmFjayB0aXRsZXMsXG4vLyBhIHRhcmdldCBwYXJlbnQgRE9NIGVsZW1lbnQgdGhlIGNvbnRhaW5lciBmdWxsIG9mIHBsYXllcnMgd2lsbCBiZSBhcHBlbmVkIHRvLFxuLy8gYW5kIGltYWdlcyBmb3IgdGhlIHBsYXkgYW5kIHBhdXNlIGJ1dHRvbi5cbi8vXG4vLyBqcyBzdGx5bGUgaXMgaW5jbHVkZWQgYXQgZW5kIGZvciBhIGRlZmF1bHQgbG9hZC5cbi8vIGVhY2ggRE9NIGVsZW1lbnQgY3JlYXRlZCBnZXRzIGEgY3NzIHNlbGVjdG9yIHNvXG4vLyBpdCBpcyBleHBlY3RlZCB0aGF0IHRoZSBqcyBzdHlsZSB3aWxsIGJlIGNvbW1lbnRlZCBvdXQgYW5kIGN1c3RvbSBjc3MgYXBwbGllZFxuXG5pbXBvcnQgV2F2ZVN1cmZlciBmcm9tICd3YXZlc3VyZmVyLmpzJztcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKFxuICBhdWRpb0FycmF5LFxuICB0cmFja1RpdGxlcyxcbiAgdGFyZ2V0UGFyZW50LFxuICBwbGF5SW1nLFxuICBwYXVzZUltZyxcbikgPT4ge1xuICAvLyBsZXQgaW5pdGlhdGVkID0gZmFsc2U7XG4gIC8vIGNvbnN0IHVwZGF0ZWluaXRpYXRpb24gPSAoYSkgPT4ge1xuICAvLyAgIGluaXRpYXRlZCA9IGE7XG4gIC8vIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXVkaW9BcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIGNyZWF0ZSBhIHRyYWNrIGRpdiB3LyBpZCBvZiB0cmFja1tpXSwgYWRkIGNsYXNzLCBhcHBlbmQgdG8gdGFyZ2V0UGFyZW50XG4gICAgY29uc3QgdHJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFjay5pZCA9IGB0cmFjayR7W2ldfWA7XG4gICAgdHJhY2suY2xhc3NMaXN0LmFkZCgndHJhY2snKTtcbiAgICB0YXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQodHJhY2spO1xuXG4gICAgLy8gY3JlYXRlIGFjY29tcGFueWluZyB0cmFjayB0aXRsZSBpbiBET00sIGFzc2lnbiBpdCBmcm9tIHRyYWNrVGl0bGVzW2ldXG4gICAgY29uc3QgdHJhY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYWNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhY2stdGl0bGUnKTtcbiAgICB0cmFja1RpdGxlLnRleHRDb250ZW50ID0gdHJhY2tUaXRsZXNbaV07XG4gICAgdHJhY2suYXBwZW5kQ2hpbGQodHJhY2tUaXRsZSk7XG5cbiAgICAvLyBjcmVhdGUgd2F2ZXN1cmZlciBpbnN0YW5jZSB3aXRoIG9wdGlvbnMgYXBwbGllZCwgYXBwZW5kIHRvIHRoZSBhYm92ZSB0cmFjayBkaXZcbiAgICBjb25zdCB3YXZlc3VyZmVyID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xuICAgICAgY29udGFpbmVyOiBgI3RyYWNrJHtbaV19YCxcbiAgICAgIHdhdmVDb2xvcjogJyNjNGMzYzQnLFxuICAgICAgcHJvZ3Jlc3NDb2xvcjogJ3JnYigxNTIsIDc3LCAxOTYpJyxcbiAgICAgIGhlaWdodDogODUsXG4gICAgICBiYXJXaWR0aDogMCxcbiAgICAgIGJhclJhZGl1czogMCxcbiAgICAgIGN1cnNvcldpZHRoOiAwLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgZHJhZ1RvU2VlazogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vIGxvYWQgd2F2ZXN1cmZlciB3aXRoIGF1ZGlvIGZpbGVcbiAgICB3YXZlc3VyZmVyLmxvYWQoYXVkaW9BcnJheVtpXSk7XG5cbiAgICAvLyBvcHRpb25zRGlzcGxheSBjb250YWluZXIgZm9yIHBsYXkvcGF1c2UgYW5kIHRpbWVEaXNwbGF5XG4gICAgY29uc3Qgb3B0aW9uc0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLWRpc3BsYXknKTtcbiAgICB0cmFjay5hcHBlbmRDaGlsZChvcHRpb25zRGlzcGxheSk7XG5cbiAgICAvLyBjcmVhdGUgcGxheS9wYXVzZSBidXR0b25cbiAgICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKCdwbGF5LWJ0bicpO1xuXG4gICAgLy8gY3JlYXRlIHBsYXkgaW1nXG4gICAgY29uc3QgcGxheSA9IG5ldyBJbWFnZSgpO1xuICAgIHBsYXkuc3JjID0gcGxheUltZztcbiAgICBwbGF5LmNsYXNzTGlzdC5hZGQoJ3BsYXktaW1nJyk7XG5cbiAgICAvLyBjcmVhdGUgcGF1c2UgaW1nXG4gICAgY29uc3QgcGF1c2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYXVzZS5zcmMgPSBwYXVzZUltZztcbiAgICBwYXVzZS5jbGFzc0xpc3QuYWRkKCdwYXVzZS1pbWcnKTtcblxuICAgIC8vIHNldCBwbGF5IGJ1dHRvbiBhcyBkZWZhdWx0IGRpc3BsYXkgb24gbG9hZFxuICAgIHBsYXlCdG4uYXBwZW5kQ2hpbGQocGxheSk7XG5cbiAgICAvLyBvbiBjbGljaywgcGxheUJ0biBwbGF5cyBvciBwYXVzZXMgdGhlIHdhdmVzdXJmZXIgaW5zdGFuY2VcbiAgICBwbGF5QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAvLyBjb25zdCB0aW1lSG9sZGVyID0gd2F2ZXN1cmZlci5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgLy8gd2F2ZXN1cmZlci5zZXRUaW1lKHRpbWVIb2xkZXIpO1xuICAgICAgd2F2ZXN1cmZlci5wbGF5UGF1c2UoKTtcbiAgICAgIC8vIHVwZGF0ZWluaXRpYXRpb24odHJ1ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbml0aWF0ZWQpXG4gICAgfTtcblxuICAgIC8vIHdoZW4gcGF1c2VkLCBzaG93IHRoZSBwbGF5IGltZ1xuICAgIHdhdmVzdXJmZXIub24oJ3BhdXNlJywgKCkgPT4ge1xuICAgICAgcGxheUJ0bi5yZXBsYWNlQ2hpbGQocGxheSwgcGF1c2UpO1xuICAgICAgLy8gd2F2ZXN1cmZlci53YXZlQ29sb3IgPSAnYmx1ZSc7XG4gICAgfSk7XG5cbiAgICAvLyB3aGVuIHBsYXlpbmcsIHNob3csIHRoZSBwYXVzZSBpbWdcbiAgICB3YXZlc3VyZmVyLm9uKCdwbGF5JywgKCkgPT4ge1xuICAgICAgcGxheUJ0bi5yZXBsYWNlQ2hpbGQocGF1c2UsIHBsYXkpO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwZW5kIG9wdGlvbnNkaXNwbGF5IHRvIHRyYWNrXG4gICAgb3B0aW9uc0Rpc3BsYXkuYXBwZW5kQ2hpbGQocGxheUJ0bik7XG5cbiAgICAvLyB0aW1lRGlzcGxheSBjb250YWluZXIsIGN1cnJlbnRUaW1lIGNvbnRhaW5lciBhbmQgZHVyYXRpb25UaW1lIGNvbnRhaW5lciBhbmQgY2xhc3MgYXNzaWdubWVudHNcbiAgICBjb25zdCB0aW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3RpbWUtZGlzcGxheScpO1xuXG4gICAgY29uc3QgY3VycmVudERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyZW50RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWRpc3BsYXknKTtcblxuICAgIGNvbnN0IGR1cmF0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1cmF0aW9uRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkdXJhdGlvbkRpc3BsYXknKTtcblxuICAgIC8vIGRpdmlkZXIgdG8gc3BlcmF0ZSBkaXNwbGF5cyBhbmQgaXRzIHRleHRcbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdkaXZpZGVyJyk7XG4gICAgZGl2aWRlci50ZXh0Q29udGVudCA9ICcvJztcblxuICAgIC8vIHRha2VzIHRpbWUgaW4gbWlsaXNlY29uZHMgYW5kIGZvcm1hdHMgdG8gYSA2MGJhc2UgbW06c3MgZGlzcGxheVxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4gW1xuICAgICAgTWF0aC5mbG9vcigodGltZSAlIDM2MDApIC8gNjApLCAvLyBtaW51dGVzXG4gICAgICBgMDAke01hdGguZmxvb3IodGltZSAlIDYwKX1gLnNsaWNlKC0yKSwgLy8gc2Vjb25kc1xuICAgIF0uam9pbignOicpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgY3VycmVudCB0aW1lIHRvIDAwOjAwXG4gICAgY3VycmVudERpc3BsYXkudGV4dENvbnRlbnQgPSAnMDowMCc7XG4gICAgLy8gd2hlbmV2ZXIgdHJhY2sgdGltZSB1cGRhdGVzLCB1cGRhdGUgY3VycmVudCB0aW1lIGRpc3BsYXlcblxuICAgIC8vIHdhdmVzdXJmZXIub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG4gICAgLy8gICBjdXJyZW50RGlzcGxheS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUod2F2ZXN1cmZlci5nZXRDdXJyZW50VGltZSgpKTtcbiAgICAvLyAgIGNvbnN0IHNlZWtVcGRhdGUgPSB3YXZlc3VyZmVyLmdldEN1cnJlbnRUaW1lKCk7XG4gICAgLy8gICB3YXZlc3VyZmVyLnNldFRpbWUoc2Vla1VwZGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2cod2F2ZXN1cmZlci5nZXRDdXJyZW50VGltZSgpKTtcbiAgICAvLyB9KTtcblxuICAgIHdhdmVzdXJmZXIub24oJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4gICAgICBjdXJyZW50RGlzcGxheS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUod2F2ZXN1cmZlci5nZXRDdXJyZW50VGltZSgpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHdhdmVzdXJmZXIuZ2V0Q3VycmVudFRpbWUoKSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgaW50aWFsIGR1cmF0aW9uIHRpbWUgdG8gMDA6MDAgdW50aWwgcmVhZHkgLSBqdXN0IHRvIGZpbGwgdGhlIHNwYWNlXG4gICAgZHVyYXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gJzA6MDAnO1xuICAgIC8vIHdoZW4gdHJhY2sgaXMgZGVjb2RlZCBhbmQgcmVhZHkgdG8gcGxheSwgZGlzcGxheSB0cmFjayBkdXJhdGlvblxuICAgIHdhdmVzdXJmZXIub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgZHVyYXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gZm9ybWF0VGltZSh3YXZlc3VyZmVyLmdldER1cmF0aW9uKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gVEhFIFJBVElPTkFMRVxuICAgIC8vIHByZXZlbnRzIGlzc3VlIG9uIG1vYmlsZTogYXVkaW9Db250ZXh0IGlzIG5vdCBzdGFydGVkIHVudGlsIGZpcnN0IHVzZXIgcGxheSBpbnRlcmFjdGlvblxuICAgIC8vIHRoaXMgbWVhbnMgaWYgdXNlciBzZWVrcyBhaGVhZCBiZWZvcmUgaGl0dGluZyBwbGF5IC0gdHJhY2sgc3RpbGwgc3RhcnRzIGZvcm0gMDA6MDAsXG4gICAgLy8gbm90IHRoZSBuZXcgdGltZSBzZWVrZWQgdG8sIGJlY3Vhc2Ugc2VlayBvY2N1cmVkIGJlZm9yZSBhdWRpbyBpbnRlcmFjdGlvbiBpbml0aWF0ZWRcbiAgICAvLyBhbmQgdGhlbiB0aGUgdGltZSBkaXNwbGF5IGlzIG91dCBvZiBzeW5jIGFuZCB0aGUgZW50aXJlIHNlZWtpbmcgdWkgaXMgb3V0IG9mIHN5bmMuXG5cbiAgICAvLyBUSEUgQ09ERVxuICAgIC8vIHVzaW5nLm9uY2UgbWV0aG9kLCBtYWtlIHRoZSBmaXJzdCBjbGljayBvbiB0aGUgd2F2ZXN1cmZlciBvYmplY3RcbiAgICAvLyBjcmVhdGUgYSBwcm9taXNlIHRoYXQgYXVkaW8gaXMgcGxheWluZy5cbiAgICAvLyBpZiBwcm9taXNlIGJlY29tZXMgc2F0aXNmaWVkLCBpbW1lZGlhdGVseSBtdXRlIGF1ZGlvLlxuICAgIC8vIHRoaXMgaW5pdGlhdGVzIGF1ZGlvIGNvbnRleHQgdy9vIHVzZXIgaGVhcmluZyBhdWRpbywgdXBkYXRlcyB0aW1lLCBnZXRzIGV2ZXJ5dGhpbmcgaW4gc3luY1xuICAgIC8vIHdlIHdhaXQgZm9yIHRoZSBzdWNjZXNmdWxseSByZXR1cm5lZCBwcm9taXNlIGJlY2F1c2UgLnBsYXkoKSBpcyBhIHByb21pc2VcbiAgICAvLyB3ZSBkb250IHdhbnQgdG8gaW50ZXJydXB0IGl0cyBwcm9jZXNzIGJ5IG11dGluZyBpdCBiZWZvcmUgaXQgY2FuIGNvbXBsZXRlXG4gICAgLy8gc28gd2Ugd2FpdCBmb3IgY29uZmlybWF0aW9uIG9mIGNvbXBsZXRpb24sIHRoZW4gLnBhdXNlKClcblxuICAgIC8vIGlmIChpbml0aWF0ZWQgPT09IGZhbHNlKSB7XG4gICAgd2F2ZXN1cmZlci5vbmNlKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICB3YXZlc3VyZmVyLnBsYXkoKTtcbiAgICAgIC8vIGNvbnN0IHBsYXlQcm9taXNlID0gd2F2ZXN1cmZlci5wbGF5KCk7XG4gICAgICAvLyBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gICBwbGF5UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnaW5pdGlhdGVkJyk7XG4gICAgICAvLyAgICAgd2F2ZXN1cmZlci5wYXVzZSgpO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEF1dG8tcGxheSB3YXMgcHJldmVudGVkXG4gICAgICAvLyBTaG93IHBhdXNlZCBVSS5cbiAgICAgIC8vIH0pO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGlmIChpbml0aWF0ZWQgPT09IHRydWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGFwcGVuZCB0aW1lIGVsZW1lbnRzIHRvIHRpbWVEaXNwbGF5XG4gICAgdGltZURpc3BsYXkuYXBwZW5kQ2hpbGQoY3VycmVudERpc3BsYXkpO1xuICAgIHRpbWVEaXNwbGF5LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuICAgIHRpbWVEaXNwbGF5LmFwcGVuZENoaWxkKGR1cmF0aW9uRGlzcGxheSk7XG5cbiAgICAvLyBhcHBlbmQgdGltZURpc3BsYXkgdG8gb3B0aW9uc0Rpc3BsYXlcbiAgICBvcHRpb25zRGlzcGxheS5hcHBlbmRDaGlsZCh0aW1lRGlzcGxheSk7XG5cbiAgICAvLyBqcyBzdHlsZSBmb3IgZGVmYXVsdCB0aGF0IGNhbiBiZSBjb21tZW50ZWRcbiAgICAvLyBET00gZWxlbWVudHMgY2FuIGJlIGdyYWJiZWQgYnkgYXNzaWduZWQgY3NzIHNlbGVjdG9yXG4gICAgLy8gdHJhY2tUaXRsZS5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcblxuICAgIC8vIG9wdGlvbnNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy8gb3B0aW9uc0Rpc3BsYXkuc3R5bGUuZ2FwID0gJzIwcHgnO1xuICAgIC8vIG9wdGlvbnNEaXNwbGF5LnN0eWxlLm1hcmdpbiA9ICcwIDAgNDBweCAwJztcbiAgICAvLyBvcHRpb25zRGlzcGxheS5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5cbiAgICAvLyBwbGF5QnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy8gcGxheUJ0bi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgLy8gcGxheUJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMjVweCc7XG4gICAgLy8gcGxheUJ0bi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgLy8gcGxheUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuXG4gICAgLy8gcGxheS5zdHlsZS5oZWlnaHQgPSAnMzBweCc7XG4gICAgLy8gcGxheS5zdHlsZS53aWR0aCA9ICczMHB4JztcbiAgICAvLyBwYXVzZS5zdHlsZS5oZWlnaHQgPSAnMzBweCc7XG4gICAgLy8gcGF1c2Uuc3R5bGUud2lkdGggPSAnMzBweCc7XG5cbiAgICAvLyB0aW1lRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIC8vIHRpbWVEaXNwbGF5LnN0eWxlLmdhcCA9ICc1cHgnO1xuXG4gICAgLy8gLy8gcGxheUJ0biBjYW4gYmUgZ3JhYmJlZCBieSBjbGFzcyBhbmQgaGF2ZSA6OmhvdmVyIGFwcGxpZWQgZm9yIGJldHRlciByZXN1bHRzXG4gICAgLy8gcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIC8vICAgcGxheUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M0YzNjNCc7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICBwbGF5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgLy8gfSk7XG4gICAgLy8gICBjb25zdCBpbml0aWF0ZWQgPSBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KHQsZSxpLHMpe3JldHVybiBuZXcoaXx8KGk9UHJvbWlzZSkpKChmdW5jdGlvbihuLHIpe2Z1bmN0aW9uIG8odCl7dHJ5e2gocy5uZXh0KHQpKX1jYXRjaCh0KXtyKHQpfX1mdW5jdGlvbiBhKHQpe3RyeXtoKHMudGhyb3codCkpfWNhdGNoKHQpe3IodCl9fWZ1bmN0aW9uIGgodCl7dmFyIGU7dC5kb25lP24odC52YWx1ZSk6KGU9dC52YWx1ZSxlIGluc3RhbmNlb2YgaT9lOm5ldyBpKChmdW5jdGlvbih0KXt0KGUpfSkpKS50aGVuKG8sYSl9aCgocz1zLmFwcGx5KHQsZXx8W10pKS5uZXh0KCkpfSkpfWNsYXNzIGV7Y29uc3RydWN0b3IoKXt0aGlzLmxpc3RlbmVycz17fX1vbih0LGUsaSl7aWYodGhpcy5saXN0ZW5lcnNbdF18fCh0aGlzLmxpc3RlbmVyc1t0XT1uZXcgU2V0KSx0aGlzLmxpc3RlbmVyc1t0XS5hZGQoZSksbnVsbD09aT92b2lkIDA6aS5vbmNlKXtjb25zdCBpPSgpPT57dGhpcy51bih0LGkpLHRoaXMudW4odCxlKX07cmV0dXJuIHRoaXMub24odCxpKSxpfXJldHVybigpPT50aGlzLnVuKHQsZSl9dW4odCxlKXt2YXIgaTtudWxsPT09KGk9dGhpcy5saXN0ZW5lcnNbdF0pfHx2b2lkIDA9PT1pfHxpLmRlbGV0ZShlKX1vbmNlKHQsZSl7cmV0dXJuIHRoaXMub24odCxlLHtvbmNlOiEwfSl9dW5BbGwoKXt0aGlzLmxpc3RlbmVycz17fX1lbWl0KHQsLi4uZSl7dGhpcy5saXN0ZW5lcnNbdF0mJnRoaXMubGlzdGVuZXJzW3RdLmZvckVhY2goKHQ9PnQoLi4uZSkpKX19Y29uc3QgaT17ZGVjb2RlOmZ1bmN0aW9uKGUsaSl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCB0PW5ldyBBdWRpb0NvbnRleHQoe3NhbXBsZVJhdGU6aX0pO3JldHVybiB0LmRlY29kZUF1ZGlvRGF0YShlKS5maW5hbGx5KCgoKT0+dC5jbG9zZSgpKSl9KSl9LGNyZWF0ZUJ1ZmZlcjpmdW5jdGlvbih0LGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0WzBdJiYodD1bdF0pLGZ1bmN0aW9uKHQpe2NvbnN0IGU9dFswXTtpZihlLnNvbWUoKHQ9PnQ+MXx8dDwtMSkpKXtjb25zdCBpPWUubGVuZ3RoO2xldCBzPTA7Zm9yKGxldCB0PTA7dDxpO3QrKyl7Y29uc3QgaT1NYXRoLmFicyhlW3RdKTtpPnMmJihzPWkpfWZvcihjb25zdCBlIG9mIHQpZm9yKGxldCB0PTA7dDxpO3QrKyllW3RdLz1zfX0odCkse2R1cmF0aW9uOmUsbGVuZ3RoOnRbMF0ubGVuZ3RoLHNhbXBsZVJhdGU6dFswXS5sZW5ndGgvZSxudW1iZXJPZkNoYW5uZWxzOnQubGVuZ3RoLGdldENoYW5uZWxEYXRhOmU9Pm51bGw9PXQ/dm9pZCAwOnRbZV0sY29weUZyb21DaGFubmVsOkF1ZGlvQnVmZmVyLnByb3RvdHlwZS5jb3B5RnJvbUNoYW5uZWwsY29weVRvQ2hhbm5lbDpBdWRpb0J1ZmZlci5wcm90b3R5cGUuY29weVRvQ2hhbm5lbH19fTtmdW5jdGlvbiBzKHQsZSl7Y29uc3QgaT1lLnhtbG5zP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhlLnhtbG5zLHQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7Zm9yKGNvbnN0W3Qsbl1vZiBPYmplY3QuZW50cmllcyhlKSlpZihcImNoaWxkcmVuXCI9PT10KWZvcihjb25zdFt0LG5db2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIG4/aS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSk6aS5hcHBlbmRDaGlsZChzKHQsbikpO2Vsc2VcInN0eWxlXCI9PT10P09iamVjdC5hc3NpZ24oaS5zdHlsZSxuKTpcInRleHRDb250ZW50XCI9PT10P2kudGV4dENvbnRlbnQ9bjppLnNldEF0dHJpYnV0ZSh0LG4udG9TdHJpbmcoKSk7cmV0dXJuIGl9ZnVuY3Rpb24gbih0LGUsaSl7Y29uc3Qgbj1zKHQsZXx8e30pO3JldHVybiBudWxsPT1pfHxpLmFwcGVuZENoaWxkKG4pLG59dmFyIHI9T2JqZWN0LmZyZWV6ZSh7X19wcm90b19fOm51bGwsY3JlYXRlRWxlbWVudDpuLGRlZmF1bHQ6bn0pO2NvbnN0IG89e2ZldGNoQmxvYjpmdW5jdGlvbihlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCBuPXlpZWxkIGZldGNoKGUscyk7aWYobi5zdGF0dXM+PTQwMCl0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCAke2V9OiAke24uc3RhdHVzfSAoJHtuLnN0YXR1c1RleHR9KWApO3JldHVybiBmdW5jdGlvbihlLGkpe3QodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZighZS5ib2R5fHwhZS5oZWFkZXJzKXJldHVybjtjb25zdCBzPWUuYm9keS5nZXRSZWFkZXIoKSxuPU51bWJlcihlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1MZW5ndGhcIikpfHwwO2xldCByPTA7Y29uc3Qgbz1lPT50KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cis9KG51bGw9PWU/dm9pZCAwOmUubGVuZ3RoKXx8MDtjb25zdCB0PU1hdGgucm91bmQoci9uKjEwMCk7aSh0KX0pKSxhPSgpPT50KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7bGV0IHQ7dHJ5e3Q9eWllbGQgcy5yZWFkKCl9Y2F0Y2godCl7cmV0dXJufXQuZG9uZXx8KG8odC52YWx1ZSkseWllbGQgYSgpKX0pKTthKCl9KSl9KG4uY2xvbmUoKSxpKSxuLmJsb2IoKX0pKX19O2NsYXNzIGEgZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQpe3N1cGVyKCksdGhpcy5pc0V4dGVybmFsTWVkaWE9ITEsdC5tZWRpYT8odGhpcy5tZWRpYT10Lm1lZGlhLHRoaXMuaXNFeHRlcm5hbE1lZGlhPSEwKTp0aGlzLm1lZGlhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKSx0Lm1lZGlhQ29udHJvbHMmJih0aGlzLm1lZGlhLmNvbnRyb2xzPSEwKSx0LmF1dG9wbGF5JiYodGhpcy5tZWRpYS5hdXRvcGxheT0hMCksbnVsbCE9dC5wbGF5YmFja1JhdGUmJnRoaXMub25jZU1lZGlhRXZlbnQoXCJjYW5wbGF5XCIsKCgpPT57bnVsbCE9dC5wbGF5YmFja1JhdGUmJih0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZT10LnBsYXliYWNrUmF0ZSl9KSl9b25NZWRpYUV2ZW50KHQsZSxpKXtyZXR1cm4gdGhpcy5tZWRpYS5hZGRFdmVudExpc3RlbmVyKHQsZSxpKSwoKT0+dGhpcy5tZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKHQsZSl9b25jZU1lZGlhRXZlbnQodCxlKXtyZXR1cm4gdGhpcy5vbk1lZGlhRXZlbnQodCxlLHtvbmNlOiEwfSl9Z2V0U3JjKCl7cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFNyY3x8dGhpcy5tZWRpYS5zcmN8fFwiXCJ9cmV2b2tlU3JjKCl7Y29uc3QgdD10aGlzLmdldFNyYygpO3Quc3RhcnRzV2l0aChcImJsb2I6XCIpJiZVUkwucmV2b2tlT2JqZWN0VVJMKHQpfWNhblBsYXlUeXBlKHQpe3JldHVyblwiXCIhPT10aGlzLm1lZGlhLmNhblBsYXlUeXBlKHQpfXNldFNyYyh0LGUpe2lmKHRoaXMuZ2V0U3JjKCk9PT10KXJldHVybjt0aGlzLnJldm9rZVNyYygpO2NvbnN0IGk9ZSBpbnN0YW5jZW9mIEJsb2ImJnRoaXMuY2FuUGxheVR5cGUoZS50eXBlKT9VUkwuY3JlYXRlT2JqZWN0VVJMKGUpOnQ7dGhpcy5tZWRpYS5zcmM9aX1kZXN0cm95KCl7dGhpcy5tZWRpYS5wYXVzZSgpLHRoaXMuaXNFeHRlcm5hbE1lZGlhfHwodGhpcy5tZWRpYS5yZW1vdmUoKSx0aGlzLnJldm9rZVNyYygpLHRoaXMubWVkaWEuc3JjPVwiXCIsdGhpcy5tZWRpYS5sb2FkKCkpfXNldE1lZGlhRWxlbWVudCh0KXt0aGlzLm1lZGlhPXR9cGxheSgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7aWYodGhpcy5tZWRpYS5zcmMpcmV0dXJuIHRoaXMubWVkaWEucGxheSgpfSkpfXBhdXNlKCl7dGhpcy5tZWRpYS5wYXVzZSgpfWlzUGxheWluZygpe3JldHVybiF0aGlzLm1lZGlhLnBhdXNlZCYmIXRoaXMubWVkaWEuZW5kZWR9c2V0VGltZSh0KXt0aGlzLm1lZGlhLmN1cnJlbnRUaW1lPXR9Z2V0RHVyYXRpb24oKXtyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbn1nZXRDdXJyZW50VGltZSgpe3JldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRUaW1lfWdldFZvbHVtZSgpe3JldHVybiB0aGlzLm1lZGlhLnZvbHVtZX1zZXRWb2x1bWUodCl7dGhpcy5tZWRpYS52b2x1bWU9dH1nZXRNdXRlZCgpe3JldHVybiB0aGlzLm1lZGlhLm11dGVkfXNldE11dGVkKHQpe3RoaXMubWVkaWEubXV0ZWQ9dH1nZXRQbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5tZWRpYS5wbGF5YmFja1JhdGV9aXNTZWVraW5nKCl7cmV0dXJuIHRoaXMubWVkaWEuc2Vla2luZ31zZXRQbGF5YmFja1JhdGUodCxlKXtudWxsIT1lJiYodGhpcy5tZWRpYS5wcmVzZXJ2ZXNQaXRjaD1lKSx0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZT10fWdldE1lZGlhRWxlbWVudCgpe3JldHVybiB0aGlzLm1lZGlhfXNldFNpbmtJZCh0KXtyZXR1cm4gdGhpcy5tZWRpYS5zZXRTaW5rSWQodCl9fWNsYXNzIGggZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLnRpbWVvdXRzPVtdLHRoaXMuaXNTY3JvbGxhYmxlPSExLHRoaXMuYXVkaW9EYXRhPW51bGwsdGhpcy5yZXNpemVPYnNlcnZlcj1udWxsLHRoaXMubGFzdENvbnRhaW5lcldpZHRoPTAsdGhpcy5pc0RyYWdnaW5nPSExLHRoaXMub3B0aW9ucz10O2NvbnN0IGk9dGhpcy5wYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lcih0LmNvbnRhaW5lcik7dGhpcy5wYXJlbnQ9aTtjb25zdFtzLG5dPXRoaXMuaW5pdEh0bWwoKTtpLmFwcGVuZENoaWxkKHMpLHRoaXMuY29udGFpbmVyPXMsdGhpcy5zY3JvbGxDb250YWluZXI9bi5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbFwiKSx0aGlzLndyYXBwZXI9bi5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksdGhpcy5jYW52YXNXcmFwcGVyPW4ucXVlcnlTZWxlY3RvcihcIi5jYW52YXNlc1wiKSx0aGlzLnByb2dyZXNzV3JhcHBlcj1uLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIiksdGhpcy5jdXJzb3I9bi5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvclwiKSxlJiZuLmFwcGVuZENoaWxkKGUpLHRoaXMuaW5pdEV2ZW50cygpfXBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyKHQpe2xldCBlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0P2U9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTp0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJihlPXQpLCFlKXRocm93IG5ldyBFcnJvcihcIkNvbnRhaW5lciBub3QgZm91bmRcIik7cmV0dXJuIGV9aW5pdEV2ZW50cygpe2NvbnN0IHQ9dD0+e2NvbnN0IGU9dGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9dC5jbGllbnRYLWUubGVmdCxzPXQuY2xpZW50WC1lLmxlZnQ7cmV0dXJuW2kvZS53aWR0aCxzL2UuaGVpZ2h0XX07dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlPT57Y29uc3RbaSxzXT10KGUpO3RoaXMuZW1pdChcImNsaWNrXCIsaSxzKX0pKSx0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsKGU9Pntjb25zdFtpLHNdPXQoZSk7dGhpcy5lbWl0KFwiZGJsY2xpY2tcIixpLHMpfSkpLHRoaXMub3B0aW9ucy5kcmFnVG9TZWVrJiZ0aGlzLmluaXREcmFnKCksdGhpcy5zY3JvbGxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgoKT0+e2NvbnN0e3Njcm9sbExlZnQ6dCxzY3JvbGxXaWR0aDplLGNsaWVudFdpZHRoOml9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHM9dC9lLG49KHQraSkvZTt0aGlzLmVtaXQoXCJzY3JvbGxcIixzLG4pfSkpO2NvbnN0IGU9dGhpcy5jcmVhdGVEZWxheSgxMDApO3RoaXMucmVzaXplT2JzZXJ2ZXI9bmV3IFJlc2l6ZU9ic2VydmVyKCgoKT0+e2UoKS50aGVuKCgoKT0+dGhpcy5vbkNvbnRhaW5lclJlc2l6ZSgpKSkuY2F0Y2goKCgpPT57fSkpfSkpLHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNjcm9sbENvbnRhaW5lcil9b25Db250YWluZXJSZXNpemUoKXtjb25zdCB0PXRoaXMucGFyZW50LmNsaWVudFdpZHRoO3Q9PT10aGlzLmxhc3RDb250YWluZXJXaWR0aCYmXCJhdXRvXCIhPT10aGlzLm9wdGlvbnMuaGVpZ2h0fHwodGhpcy5sYXN0Q29udGFpbmVyV2lkdGg9dCx0aGlzLnJlUmVuZGVyKCkpfWluaXREcmFnKCl7IWZ1bmN0aW9uKHQsZSxpLHMsbj0zLHI9MCl7aWYoIXQpcmV0dXJuKCk9Pnt9O2xldCBvPSgpPT57fTtjb25zdCBhPWE9PntpZihhLmJ1dHRvbiE9PXIpcmV0dXJuO2EucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpO2xldCBoPWEuY2xpZW50WCxsPWEuY2xpZW50WSxkPSExO2NvbnN0IGM9cz0+e3MucHJldmVudERlZmF1bHQoKSxzLnN0b3BQcm9wYWdhdGlvbigpO2NvbnN0IHI9cy5jbGllbnRYLG89cy5jbGllbnRZLGE9ci1oLGM9by1sO2lmKGR8fE1hdGguYWJzKGEpPm58fE1hdGguYWJzKGMpPm4pe2NvbnN0IHM9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx7bGVmdDpuLHRvcDp1fT1zO2R8fChudWxsPT1pfHxpKGgtbixsLXUpLGQ9ITApLGUoYSxjLHItbixvLXUpLGg9cixsPW99fSx1PSgpPT57ZCYmKG51bGw9PXN8fHMoKSksbygpfSxwPXQ9Pnt0LnJlbGF0ZWRUYXJnZXQmJnQucmVsYXRlZFRhcmdldCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudHx8dSgpfSxtPXQ9PntkJiYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCkpfSxmPXQ9PntkJiZ0LnByZXZlbnREZWZhdWx0KCl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLGMpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLHApLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIscCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGYse3Bhc3NpdmU6ITF9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixtLHtjYXB0dXJlOiEwfSksbz0oKT0+e2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLGMpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIix1KSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm91dFwiLHApLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIscCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGYpLHNldFRpbWVvdXQoKCgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbSx7Y2FwdHVyZTohMH0pfSksMTApfX07dC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIixhKX0odGhpcy53cmFwcGVyLCgodCxlLGkpPT57dGhpcy5lbWl0KFwiZHJhZ1wiLE1hdGgubWF4KDAsTWF0aC5taW4oMSxpL3RoaXMud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCkpKX0pLCgoKT0+dGhpcy5pc0RyYWdnaW5nPSEwKSwoKCk9PnRoaXMuaXNEcmFnZ2luZz0hMSkpfWdldEhlaWdodCh0KXtyZXR1cm4gbnVsbD09dD8xMjg6aXNOYU4oTnVtYmVyKHQpKT9cImF1dG9cIj09PXQmJnRoaXMucGFyZW50LmNsaWVudEhlaWdodHx8MTI4Ok51bWJlcih0KX1pbml0SHRtbCgpe2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPXQuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSk7cmV0dXJuIGUuaW5uZXJIVE1MPWBcXG4gICAgICA8c3R5bGU+XFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICBtaW4td2lkdGg6IDFweDtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IGF1ZGlvIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLnNjcm9sbCB7XFxuICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5ub1Njcm9sbGJhciB7XFxuICAgICAgICAgIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5ub1Njcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAud3JhcHBlciB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuY2FudmFzZXMge1xcbiAgICAgICAgICBtaW4taGVpZ2h0OiAke3RoaXMuZ2V0SGVpZ2h0KHRoaXMub3B0aW9ucy5oZWlnaHQpfXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLmNhbnZhc2VzID4gZGl2IHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgY2FudmFzIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5wcm9ncmVzcyB7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5wcm9ncmVzcyA+IGRpdiB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5jdXJzb3Ige1xcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgfVxcbiAgICAgIDwvc3R5bGU+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbFwiIHBhcnQ9XCJzY3JvbGxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgcGFydD1cIndyYXBwZXJcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhbnZhc2VzXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHBhcnQ9XCJwcm9ncmVzc1wiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3Vyc29yXCIgcGFydD1cImN1cnNvclwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIGAsW3QsZV19c2V0T3B0aW9ucyh0KXtpZih0aGlzLm9wdGlvbnMuY29udGFpbmVyIT09dC5jb250YWluZXIpe2NvbnN0IGU9dGhpcy5wYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lcih0LmNvbnRhaW5lcik7ZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lciksdGhpcy5wYXJlbnQ9ZX10LmRyYWdUb1NlZWsmJiF0aGlzLm9wdGlvbnMuZHJhZ1RvU2VlayYmdGhpcy5pbml0RHJhZygpLHRoaXMub3B0aW9ucz10LHRoaXMucmVSZW5kZXIoKX1nZXRXcmFwcGVyKCl7cmV0dXJuIHRoaXMud3JhcHBlcn1nZXRTY3JvbGwoKXtyZXR1cm4gdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdH1zZXRTY3JvbGwodCl7dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdD10fXNldFNjcm9sbFBlcmNlbnRhZ2UodCl7Y29uc3R7c2Nyb2xsV2lkdGg6ZX09dGhpcy5zY3JvbGxDb250YWluZXIsaT1lKnQ7dGhpcy5zZXRTY3JvbGwoaSl9ZGVzdHJveSgpe3ZhciB0O3RoaXMuY29udGFpbmVyLnJlbW92ZSgpLG51bGw9PT0odD10aGlzLnJlc2l6ZU9ic2VydmVyKXx8dm9pZCAwPT09dHx8dC5kaXNjb25uZWN0KCl9Y3JlYXRlRGVsYXkodD0xMCl7bGV0IGUsaTtjb25zdCBzPSgpPT57ZSYmY2xlYXJUaW1lb3V0KGUpLGkmJmkoKX07cmV0dXJuIHRoaXMudGltZW91dHMucHVzaChzKSwoKT0+bmV3IFByb21pc2UoKChuLHIpPT57cygpLGk9cixlPXNldFRpbWVvdXQoKCgpPT57ZT12b2lkIDAsaT12b2lkIDAsbigpfSksdCl9KSl9Y29udmVydENvbG9yVmFsdWVzKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fHxcIlwiO2lmKHQubGVuZ3RoPDIpcmV0dXJuIHRbMF18fFwiXCI7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGk9ZS5nZXRDb250ZXh0KFwiMmRcIikscz1lLmhlaWdodCood2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpLG49aS5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsMCxzKSxyPTEvKHQubGVuZ3RoLTEpO3JldHVybiB0LmZvckVhY2goKCh0LGUpPT57Y29uc3QgaT1lKnI7bi5hZGRDb2xvclN0b3AoaSx0KX0pKSxufXJlbmRlckJhcldhdmVmb3JtKHQsZSxpLHMpe2NvbnN0IG49dFswXSxyPXRbMV18fHRbMF0sbz1uLmxlbmd0aCx7d2lkdGg6YSxoZWlnaHQ6aH09aS5jYW52YXMsbD1oLzIsZD13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSxjPWUuYmFyV2lkdGg/ZS5iYXJXaWR0aCpkOjEsdT1lLmJhckdhcD9lLmJhckdhcCpkOmUuYmFyV2lkdGg/Yy8yOjAscD1lLmJhclJhZGl1c3x8MCxtPWEvKGMrdSkvbyxmPXAmJlwicm91bmRSZWN0XCJpbiBpP1wicm91bmRSZWN0XCI6XCJyZWN0XCI7aS5iZWdpblBhdGgoKTtsZXQgZz0wLHY9MCxiPTA7Zm9yKGxldCB0PTA7dDw9bzt0Kyspe2NvbnN0IG89TWF0aC5yb3VuZCh0Km0pO2lmKG8+Zyl7Y29uc3QgdD1NYXRoLnJvdW5kKHYqbCpzKSxuPXQrTWF0aC5yb3VuZChiKmwqcyl8fDE7bGV0IHI9bC10O1widG9wXCI9PT1lLmJhckFsaWduP3I9MDpcImJvdHRvbVwiPT09ZS5iYXJBbGlnbiYmKHI9aC1uKSxpW2ZdKGcqKGMrdSkscixjLG4scCksZz1vLHY9MCxiPTB9Y29uc3QgYT1NYXRoLmFicyhuW3RdfHwwKSxkPU1hdGguYWJzKHJbdF18fDApO2E+diYmKHY9YSksZD5iJiYoYj1kKX1pLmZpbGwoKSxpLmNsb3NlUGF0aCgpfXJlbmRlckxpbmVXYXZlZm9ybSh0LGUsaSxzKXtjb25zdCBuPWU9Pntjb25zdCBuPXRbZV18fHRbMF0scj1uLmxlbmd0aCx7aGVpZ2h0Om99PWkuY2FudmFzLGE9by8yLGg9aS5jYW52YXMud2lkdGgvcjtpLm1vdmVUbygwLGEpO2xldCBsPTAsZD0wO2ZvcihsZXQgdD0wO3Q8PXI7dCsrKXtjb25zdCByPU1hdGgucm91bmQodCpoKTtpZihyPmwpe2NvbnN0IHQ9YSsoTWF0aC5yb3VuZChkKmEqcyl8fDEpKigwPT09ZT8tMToxKTtpLmxpbmVUbyhsLHQpLGw9cixkPTB9Y29uc3Qgbz1NYXRoLmFicyhuW3RdfHwwKTtvPmQmJihkPW8pfWkubGluZVRvKGwsYSl9O2kuYmVnaW5QYXRoKCksbigwKSxuKDEpLGkuZmlsbCgpLGkuY2xvc2VQYXRoKCl9cmVuZGVyV2F2ZWZvcm0odCxlLGkpe2lmKGkuZmlsbFN0eWxlPXRoaXMuY29udmVydENvbG9yVmFsdWVzKGUud2F2ZUNvbG9yKSxlLnJlbmRlckZ1bmN0aW9uKXJldHVybiB2b2lkIGUucmVuZGVyRnVuY3Rpb24odCxpKTtsZXQgcz1lLmJhckhlaWdodHx8MTtpZihlLm5vcm1hbGl6ZSl7Y29uc3QgZT1BcnJheS5mcm9tKHRbMF0pLnJlZHVjZSgoKHQsZSk9Pk1hdGgubWF4KHQsTWF0aC5hYnMoZSkpKSwwKTtzPWU/MS9lOjF9ZS5iYXJXaWR0aHx8ZS5iYXJHYXB8fGUuYmFyQWxpZ24/dGhpcy5yZW5kZXJCYXJXYXZlZm9ybSh0LGUsaSxzKTp0aGlzLnJlbmRlckxpbmVXYXZlZm9ybSh0LGUsaSxzKX1yZW5kZXJTaW5nbGVDYW52YXModCxlLGkscyxuLHIsbyxhKXtjb25zdCBoPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSxkPXRbMF0ubGVuZ3RoO2wud2lkdGg9TWF0aC5yb3VuZChpKihyLW4pL2QpLGwuaGVpZ2h0PXMqaCxsLnN0eWxlLndpZHRoPWAke01hdGguZmxvb3IobC53aWR0aC9oKX1weGAsbC5zdHlsZS5oZWlnaHQ9YCR7c31weGAsbC5zdHlsZS5sZWZ0PWAke01hdGguZmxvb3IobippL2gvZCl9cHhgLG8uYXBwZW5kQ2hpbGQobCk7Y29uc3QgYz1sLmdldENvbnRleHQoXCIyZFwiKTtpZih0aGlzLnJlbmRlcldhdmVmb3JtKHQubWFwKCh0PT50LnNsaWNlKG4scikpKSxlLGMpLGwud2lkdGg+MCYmbC5oZWlnaHQ+MCl7Y29uc3QgdD1sLmNsb25lTm9kZSgpLGk9dC5nZXRDb250ZXh0KFwiMmRcIik7aS5kcmF3SW1hZ2UobCwwLDApLGkuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwic291cmNlLWluXCIsaS5maWxsU3R5bGU9dGhpcy5jb252ZXJ0Q29sb3JWYWx1ZXMoZS5wcm9ncmVzc0NvbG9yKSxpLmZpbGxSZWN0KDAsMCxsLndpZHRoLGwuaGVpZ2h0KSxhLmFwcGVuZENoaWxkKHQpfX1yZW5kZXJDaGFubmVsKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuZ2V0SGVpZ2h0KGkuaGVpZ2h0KTtuLnN0eWxlLmhlaWdodD1gJHtyfXB4YCx0aGlzLmNhbnZhc1dyYXBwZXIuc3R5bGUubWluSGVpZ2h0PWAke3J9cHhgLHRoaXMuY2FudmFzV3JhcHBlci5hcHBlbmRDaGlsZChuKTtjb25zdCBvPW4uY2xvbmVOb2RlKCk7dGhpcy5wcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQobyk7Y29uc3QgYT1lWzBdLmxlbmd0aCxsPSh0LGgpPT57dGhpcy5yZW5kZXJTaW5nbGVDYW52YXMoZSxpLHMscixNYXRoLm1heCgwLHQpLE1hdGgubWluKGgsYSksbixvKX07aWYoIXRoaXMuaXNTY3JvbGxhYmxlKXJldHVybiB2b2lkIGwoMCxhKTtjb25zdHtzY3JvbGxMZWZ0OmQsc2Nyb2xsV2lkdGg6YyxjbGllbnRXaWR0aDp1fT10aGlzLnNjcm9sbENvbnRhaW5lcixwPWEvYztsZXQgbT1NYXRoLm1pbihoLk1BWF9DQU5WQVNfV0lEVEgsdSk7aWYoaS5iYXJXaWR0aHx8aS5iYXJHYXApe2NvbnN0IHQ9aS5iYXJXaWR0aHx8LjUsZT10KyhpLmJhckdhcHx8dC8yKTttJWUhPTAmJihtPU1hdGguZmxvb3IobS9lKSplKX1jb25zdCBmPU1hdGguZmxvb3IoTWF0aC5hYnMoZCkqcCksZz1NYXRoLmZsb29yKGYrbSpwKSx2PWctZjt2PD0wfHwobChmLGcpLHlpZWxkIFByb21pc2UuYWxsKFsoKCk9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZigwPT09ZilyZXR1cm47Y29uc3QgdD10aGlzLmNyZWF0ZURlbGF5KCk7Zm9yKGxldCBlPWY7ZT49MDtlLT12KXlpZWxkIHQoKSxsKE1hdGgubWF4KDAsZS12KSxlKX0pKSkoKSwoKCk9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZihnPT09YSlyZXR1cm47Y29uc3QgdD10aGlzLmNyZWF0ZURlbGF5KCk7Zm9yKGxldCBlPWc7ZTxhO2UrPXYpeWllbGQgdCgpLGwoZSxNYXRoLm1pbihhLGUrdikpfSkpKSgpXSkpfSkpfXJlbmRlcihlKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3RoaXMudGltZW91dHMuZm9yRWFjaCgodD0+dCgpKSksdGhpcy50aW1lb3V0cz1bXSx0aGlzLmNhbnZhc1dyYXBwZXIuaW5uZXJIVE1MPVwiXCIsdGhpcy5wcm9ncmVzc1dyYXBwZXIuaW5uZXJIVE1MPVwiXCIsbnVsbCE9dGhpcy5vcHRpb25zLndpZHRoJiYodGhpcy5zY3JvbGxDb250YWluZXIuc3R5bGUud2lkdGg9XCJudW1iZXJcIj09dHlwZW9mIHRoaXMub3B0aW9ucy53aWR0aD9gJHt0aGlzLm9wdGlvbnMud2lkdGh9cHhgOnRoaXMub3B0aW9ucy53aWR0aCk7Y29uc3QgdD13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSxpPXRoaXMuc2Nyb2xsQ29udGFpbmVyLmNsaWVudFdpZHRoLHM9TWF0aC5jZWlsKGUuZHVyYXRpb24qKHRoaXMub3B0aW9ucy5taW5QeFBlclNlY3x8MCkpO3RoaXMuaXNTY3JvbGxhYmxlPXM+aTtjb25zdCBuPXRoaXMub3B0aW9ucy5maWxsUGFyZW50JiYhdGhpcy5pc1Njcm9sbGFibGUscj0obj9pOnMpKnQ7dGhpcy53cmFwcGVyLnN0eWxlLndpZHRoPW4/XCIxMDAlXCI6YCR7c31weGAsdGhpcy5zY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3dYPXRoaXMuaXNTY3JvbGxhYmxlP1wiYXV0b1wiOlwiaGlkZGVuXCIsdGhpcy5zY3JvbGxDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm5vU2Nyb2xsYmFyXCIsISF0aGlzLm9wdGlvbnMuaGlkZVNjcm9sbGJhciksdGhpcy5jdXJzb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yPWAke3RoaXMub3B0aW9ucy5jdXJzb3JDb2xvcnx8dGhpcy5vcHRpb25zLnByb2dyZXNzQ29sb3J9YCx0aGlzLmN1cnNvci5zdHlsZS53aWR0aD1gJHt0aGlzLm9wdGlvbnMuY3Vyc29yV2lkdGh9cHhgLHRoaXMuYXVkaW9EYXRhPWUsdGhpcy5lbWl0KFwicmVuZGVyXCIpO3RyeXtpZih0aGlzLm9wdGlvbnMuc3BsaXRDaGFubmVscyl5aWVsZCBQcm9taXNlLmFsbChBcnJheS5mcm9tKHtsZW5ndGg6ZS5udW1iZXJPZkNoYW5uZWxzfSkubWFwKCgodCxpKT0+e3ZhciBzO2NvbnN0IG49T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHRoaXMub3B0aW9ucyksbnVsbD09PShzPXRoaXMub3B0aW9ucy5zcGxpdENoYW5uZWxzKXx8dm9pZCAwPT09cz92b2lkIDA6c1tpXSk7cmV0dXJuIHRoaXMucmVuZGVyQ2hhbm5lbChbZS5nZXRDaGFubmVsRGF0YShpKV0sbixyKX0pKSk7ZWxzZXtjb25zdCB0PVtlLmdldENoYW5uZWxEYXRhKDApXTtlLm51bWJlck9mQ2hhbm5lbHM+MSYmdC5wdXNoKGUuZ2V0Q2hhbm5lbERhdGEoMSkpLHlpZWxkIHRoaXMucmVuZGVyQ2hhbm5lbCh0LHRoaXMub3B0aW9ucyxyKX19Y2F0Y2godCl7cmV0dXJufXRoaXMuZW1pdChcInJlbmRlcmVkXCIpfSkpfXJlUmVuZGVyKCl7aWYoIXRoaXMuYXVkaW9EYXRhKXJldHVybjtjb25zdHtzY3JvbGxXaWR0aDp0fT10aGlzLnNjcm9sbENvbnRhaW5lcix7cmlnaHQ6ZX09dGhpcy5wcm9ncmVzc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYodGhpcy5yZW5kZXIodGhpcy5hdWRpb0RhdGEpLHRoaXMuaXNTY3JvbGxhYmxlJiZ0IT09dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsV2lkdGgpe2NvbnN0e3JpZ2h0OnR9PXRoaXMucHJvZ3Jlc3NXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2xldCBpPXQtZTtpKj0yLGk9aTwwP01hdGguZmxvb3IoaSk6TWF0aC5jZWlsKGkpLGkvPTIsdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCs9aX19em9vbSh0KXt0aGlzLm9wdGlvbnMubWluUHhQZXJTZWM9dCx0aGlzLnJlUmVuZGVyKCl9c2Nyb2xsSW50b1ZpZXcodCxlPSExKXtjb25zdHtzY3JvbGxMZWZ0Omksc2Nyb2xsV2lkdGg6cyxjbGllbnRXaWR0aDpufT10aGlzLnNjcm9sbENvbnRhaW5lcixyPXQqcyxvPWksYT1pK24saD1uLzI7aWYodGhpcy5pc0RyYWdnaW5nKXtjb25zdCB0PTMwO3IrdD5hP3RoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQrPXQ6ci10PG8mJih0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0LT10KX1lbHNleyhyPG98fHI+YSkmJih0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0PXItKHRoaXMub3B0aW9ucy5hdXRvQ2VudGVyP2g6MCkpO2NvbnN0IHQ9ci1pLWg7ZSYmdGhpcy5vcHRpb25zLmF1dG9DZW50ZXImJnQ+MCYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQrPU1hdGgubWluKHQsMTApKX17Y29uc3QgdD10aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0LGU9dC9zLGk9KHQrbikvczt0aGlzLmVtaXQoXCJzY3JvbGxcIixlLGkpfX1yZW5kZXJQcm9ncmVzcyh0LGUpe2lmKGlzTmFOKHQpKXJldHVybjtjb25zdCBpPTEwMCp0O3RoaXMuY2FudmFzV3JhcHBlci5zdHlsZS5jbGlwUGF0aD1gcG9seWdvbigke2l9JSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgJHtpfSUgMTAwJSlgLHRoaXMucHJvZ3Jlc3NXcmFwcGVyLnN0eWxlLndpZHRoPWAke2l9JWAsdGhpcy5jdXJzb3Iuc3R5bGUubGVmdD1gJHtpfSVgLHRoaXMuY3Vyc29yLnN0eWxlLnRyYW5zZm9ybT1gdHJhbnNsYXRlWCgtJHsxMDA9PT1NYXRoLnJvdW5kKGkpP3RoaXMub3B0aW9ucy5jdXJzb3JXaWR0aDowfXB4KWAsdGhpcy5pc1Njcm9sbGFibGUmJnRoaXMub3B0aW9ucy5hdXRvU2Nyb2xsJiZ0aGlzLnNjcm9sbEludG9WaWV3KHQsZSl9ZXhwb3J0SW1hZ2UoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3QgdD10aGlzLmNhbnZhc1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcImNhbnZhc1wiKTtpZighdC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiTm8gd2F2ZWZvcm0gZGF0YVwiKTtpZihcImRhdGFVUkxcIj09PXMpe2NvbnN0IHM9QXJyYXkuZnJvbSh0KS5tYXAoKHQ9PnQudG9EYXRhVVJMKGUsaSkpKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMpfXJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKHQpLm1hcCgodD0+bmV3IFByb21pc2UoKChzLG4pPT57dC50b0Jsb2IoKHQ9Pnt0P3ModCk6bihuZXcgRXJyb3IoXCJDb3VsZCBub3QgZXhwb3J0IGltYWdlXCIpKX0pLGUsaSl9KSkpKSl9KSl9fWguTUFYX0NBTlZBU19XSURUSD00ZTM7Y2xhc3MgbCBleHRlbmRzIGV7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudW5zdWJzY3JpYmU9KCk9Pnt9fXN0YXJ0KCl7dGhpcy51bnN1YnNjcmliZT10aGlzLm9uKFwidGlja1wiLCgoKT0+e3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9Pnt0aGlzLmVtaXQoXCJ0aWNrXCIpfSkpfSkpLHRoaXMuZW1pdChcInRpY2tcIil9c3RvcCgpe3RoaXMudW5zdWJzY3JpYmUoKX1kZXN0cm95KCl7dGhpcy51bnN1YnNjcmliZSgpfX1jbGFzcyBkIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcih0PW5ldyBBdWRpb0NvbnRleHQpe3N1cGVyKCksdGhpcy5idWZmZXJOb2RlPW51bGwsdGhpcy5hdXRvcGxheT0hMSx0aGlzLnBsYXlTdGFydFRpbWU9MCx0aGlzLnBsYXllZER1cmF0aW9uPTAsdGhpcy5fbXV0ZWQ9ITEsdGhpcy5fcGxheWJhY2tSYXRlPTEsdGhpcy5idWZmZXI9bnVsbCx0aGlzLmN1cnJlbnRTcmM9XCJcIix0aGlzLnBhdXNlZD0hMCx0aGlzLmNyb3NzT3JpZ2luPW51bGwsdGhpcy5zZWVraW5nPSExLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcj10aGlzLm9uLHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcj10aGlzLnVuLHRoaXMuYXVkaW9Db250ZXh0PXQsdGhpcy5nYWluTm9kZT10aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKX1sb2FkKCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt9KSl9Z2V0IHNyYygpe3JldHVybiB0aGlzLmN1cnJlbnRTcmN9c2V0IHNyYyh0KXtpZih0aGlzLmN1cnJlbnRTcmM9dCwhdClyZXR1cm4gdGhpcy5idWZmZXI9bnVsbCx2b2lkIHRoaXMuZW1pdChcImVtcHRpZWRcIik7ZmV0Y2godCkudGhlbigoZT0+e2lmKGUuc3RhdHVzPj00MDApdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggJHt0fTogJHtlLnN0YXR1c30gKCR7ZS5zdGF0dXNUZXh0fSlgKTtyZXR1cm4gZS5hcnJheUJ1ZmZlcigpfSkpLnRoZW4oKGU9PnRoaXMuY3VycmVudFNyYyE9PXQ/bnVsbDp0aGlzLmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoZSkpKS50aGVuKChlPT57dGhpcy5jdXJyZW50U3JjPT09dCYmKHRoaXMuYnVmZmVyPWUsdGhpcy5lbWl0KFwibG9hZGVkbWV0YWRhdGFcIiksdGhpcy5lbWl0KFwiY2FucGxheVwiKSx0aGlzLmF1dG9wbGF5JiZ0aGlzLnBsYXkoKSl9KSl9X3BsYXkoKXt2YXIgdDtpZighdGhpcy5wYXVzZWQpcmV0dXJuO3RoaXMucGF1c2VkPSExLG51bGw9PT0odD10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT10fHx0LmRpc2Nvbm5lY3QoKSx0aGlzLmJ1ZmZlck5vZGU9dGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCksdGhpcy5idWZmZXJOb2RlLmJ1ZmZlcj10aGlzLmJ1ZmZlcix0aGlzLmJ1ZmZlck5vZGUucGxheWJhY2tSYXRlLnZhbHVlPXRoaXMuX3BsYXliYWNrUmF0ZSx0aGlzLmJ1ZmZlck5vZGUuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtsZXQgZT10aGlzLnBsYXllZER1cmF0aW9uKnRoaXMuX3BsYXliYWNrUmF0ZTtlPj10aGlzLmR1cmF0aW9uJiYoZT0wLHRoaXMucGxheWVkRHVyYXRpb249MCksdGhpcy5idWZmZXJOb2RlLnN0YXJ0KHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLGUpLHRoaXMucGxheVN0YXJ0VGltZT10aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSx0aGlzLmJ1ZmZlck5vZGUub25lbmRlZD0oKT0+e3RoaXMuY3VycmVudFRpbWU+PXRoaXMuZHVyYXRpb24mJih0aGlzLnBhdXNlKCksdGhpcy5lbWl0KFwiZW5kZWRcIikpfX1fcGF1c2UoKXt2YXIgdDt0aGlzLnBhdXNlZD0hMCxudWxsPT09KHQ9dGhpcy5idWZmZXJOb2RlKXx8dm9pZCAwPT09dHx8dC5zdG9wKCksdGhpcy5wbGF5ZWREdXJhdGlvbis9dGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUtdGhpcy5wbGF5U3RhcnRUaW1lfXBsYXkoKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3RoaXMucGF1c2VkJiYodGhpcy5fcGxheSgpLHRoaXMuZW1pdChcInBsYXlcIikpfSkpfXBhdXNlKCl7dGhpcy5wYXVzZWR8fCh0aGlzLl9wYXVzZSgpLHRoaXMuZW1pdChcInBhdXNlXCIpKX1zdG9wQXQodCl7dmFyIGUsaTtjb25zdCBzPXQtdGhpcy5jdXJyZW50VGltZTtudWxsPT09KGU9dGhpcy5idWZmZXJOb2RlKXx8dm9pZCAwPT09ZXx8ZS5zdG9wKHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lK3MpLG51bGw9PT0oaT10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT1pfHxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCgoKT0+e3RoaXMuYnVmZmVyTm9kZT1udWxsLHRoaXMucGF1c2UoKX0pLHtvbmNlOiEwfSl9c2V0U2lua0lkKGUpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LnNldFNpbmtJZChlKX0pKX1nZXQgcGxheWJhY2tSYXRlKCl7cmV0dXJuIHRoaXMuX3BsYXliYWNrUmF0ZX1zZXQgcGxheWJhY2tSYXRlKHQpe3RoaXMuX3BsYXliYWNrUmF0ZT10LHRoaXMuYnVmZmVyTm9kZSYmKHRoaXMuYnVmZmVyTm9kZS5wbGF5YmFja1JhdGUudmFsdWU9dCl9Z2V0IGN1cnJlbnRUaW1lKCl7cmV0dXJuKHRoaXMucGF1c2VkP3RoaXMucGxheWVkRHVyYXRpb246dGhpcy5wbGF5ZWREdXJhdGlvbisodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUtdGhpcy5wbGF5U3RhcnRUaW1lKSkqdGhpcy5fcGxheWJhY2tSYXRlfXNldCBjdXJyZW50VGltZSh0KXt0aGlzLmVtaXQoXCJzZWVraW5nXCIpO2NvbnN0IGU9IXRoaXMucGF1c2VkO2UmJnRoaXMuX3BhdXNlKCksdGhpcy5wbGF5ZWREdXJhdGlvbj10L3RoaXMuX3BsYXliYWNrUmF0ZSxlJiZ0aGlzLl9wbGF5KCksdGhpcy5lbWl0KFwidGltZXVwZGF0ZVwiKX1nZXQgZHVyYXRpb24oKXt2YXIgdDtyZXR1cm4obnVsbD09PSh0PXRoaXMuYnVmZmVyKXx8dm9pZCAwPT09dD92b2lkIDA6dC5kdXJhdGlvbil8fDB9Z2V0IHZvbHVtZSgpe3JldHVybiB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWV9c2V0IHZvbHVtZSh0KXt0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWU9dCx0aGlzLmVtaXQoXCJ2b2x1bWVjaGFuZ2VcIil9Z2V0IG11dGVkKCl7cmV0dXJuIHRoaXMuX211dGVkfXNldCBtdXRlZCh0KXt0aGlzLl9tdXRlZCE9PXQmJih0aGlzLl9tdXRlZD10LHRoaXMuX211dGVkP3RoaXMuZ2Fpbk5vZGUuZGlzY29ubmVjdCgpOnRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbikpfWNhblBsYXlUeXBlKHQpe3JldHVybi9eKGF1ZGlvfHZpZGVvKVxcLy8udGVzdCh0KX1nZXRHYWluTm9kZSgpe3JldHVybiB0aGlzLmdhaW5Ob2RlfWdldENoYW5uZWxEYXRhKCl7Y29uc3QgdD1bXTtpZighdGhpcy5idWZmZXIpcmV0dXJuIHQ7Y29uc3QgZT10aGlzLmJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzO2ZvcihsZXQgaT0wO2k8ZTtpKyspdC5wdXNoKHRoaXMuYnVmZmVyLmdldENoYW5uZWxEYXRhKGkpKTtyZXR1cm4gdH19Y29uc3QgYz17d2F2ZUNvbG9yOlwiIzk5OVwiLHByb2dyZXNzQ29sb3I6XCIjNTU1XCIsY3Vyc29yV2lkdGg6MSxtaW5QeFBlclNlYzowLGZpbGxQYXJlbnQ6ITAsaW50ZXJhY3Q6ITAsZHJhZ1RvU2VlazohMSxhdXRvU2Nyb2xsOiEwLGF1dG9DZW50ZXI6ITAsc2FtcGxlUmF0ZTo4ZTN9O2NsYXNzIHUgZXh0ZW5kcyBhe3N0YXRpYyBjcmVhdGUodCl7cmV0dXJuIG5ldyB1KHQpfWNvbnN0cnVjdG9yKHQpe2NvbnN0IGU9dC5tZWRpYXx8KFwiV2ViQXVkaW9cIj09PXQuYmFja2VuZD9uZXcgZDp2b2lkIDApO3N1cGVyKHttZWRpYTplLG1lZGlhQ29udHJvbHM6dC5tZWRpYUNvbnRyb2xzLGF1dG9wbGF5OnQuYXV0b3BsYXkscGxheWJhY2tSYXRlOnQuYXVkaW9SYXRlfSksdGhpcy5wbHVnaW5zPVtdLHRoaXMuZGVjb2RlZERhdGE9bnVsbCx0aGlzLnN1YnNjcmlwdGlvbnM9W10sdGhpcy5tZWRpYVN1YnNjcmlwdGlvbnM9W10sdGhpcy5vcHRpb25zPU9iamVjdC5hc3NpZ24oe30sYyx0KSx0aGlzLnRpbWVyPW5ldyBsO2NvbnN0IGk9ZT92b2lkIDA6dGhpcy5nZXRNZWRpYUVsZW1lbnQoKTt0aGlzLnJlbmRlcmVyPW5ldyBoKHRoaXMub3B0aW9ucyxpKSx0aGlzLmluaXRQbGF5ZXJFdmVudHMoKSx0aGlzLmluaXRSZW5kZXJlckV2ZW50cygpLHRoaXMuaW5pdFRpbWVyRXZlbnRzKCksdGhpcy5pbml0UGx1Z2lucygpLFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCgpPT57dGhpcy5lbWl0KFwiaW5pdFwiKTtjb25zdCB0PXRoaXMub3B0aW9ucy51cmx8fHRoaXMuZ2V0U3JjKCl8fFwiXCI7KHR8fHRoaXMub3B0aW9ucy5wZWFrcyYmdGhpcy5vcHRpb25zLmR1cmF0aW9uKSYmdGhpcy5sb2FkKHQsdGhpcy5vcHRpb25zLnBlYWtzLHRoaXMub3B0aW9ucy5kdXJhdGlvbil9KSl9dXBkYXRlUHJvZ3Jlc3ModD10aGlzLmdldEN1cnJlbnRUaW1lKCkpe3JldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlclByb2dyZXNzKHQvdGhpcy5nZXREdXJhdGlvbigpLHRoaXMuaXNQbGF5aW5nKCkpLHR9aW5pdFRpbWVyRXZlbnRzKCl7dGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50aW1lci5vbihcInRpY2tcIiwoKCk9PntpZighdGhpcy5pc1NlZWtpbmcoKSl7Y29uc3QgdD10aGlzLnVwZGF0ZVByb2dyZXNzKCk7dGhpcy5lbWl0KFwidGltZXVwZGF0ZVwiLHQpLHRoaXMuZW1pdChcImF1ZGlvcHJvY2Vzc1wiLHQpfX0pKSl9aW5pdFBsYXllckV2ZW50cygpe3RoaXMuaXNQbGF5aW5nKCkmJih0aGlzLmVtaXQoXCJwbGF5XCIpLHRoaXMudGltZXIuc3RhcnQoKSksdGhpcy5tZWRpYVN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm9uTWVkaWFFdmVudChcInRpbWV1cGRhdGVcIiwoKCk9Pntjb25zdCB0PXRoaXMudXBkYXRlUHJvZ3Jlc3MoKTt0aGlzLmVtaXQoXCJ0aW1ldXBkYXRlXCIsdCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJwbGF5XCIsKCgpPT57dGhpcy5lbWl0KFwicGxheVwiKSx0aGlzLnRpbWVyLnN0YXJ0KCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJwYXVzZVwiLCgoKT0+e3RoaXMuZW1pdChcInBhdXNlXCIpLHRoaXMudGltZXIuc3RvcCgpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwiZW1wdGllZFwiLCgoKT0+e3RoaXMudGltZXIuc3RvcCgpfSkpLHRoaXMub25NZWRpYUV2ZW50KFwiZW5kZWRcIiwoKCk9Pnt0aGlzLmVtaXQoXCJmaW5pc2hcIil9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJzZWVraW5nXCIsKCgpPT57dGhpcy5lbWl0KFwic2Vla2luZ1wiLHRoaXMuZ2V0Q3VycmVudFRpbWUoKSl9KSkpfWluaXRSZW5kZXJlckV2ZW50cygpe3RoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMucmVuZGVyZXIub24oXCJjbGlja1wiLCgodCxlKT0+e3RoaXMub3B0aW9ucy5pbnRlcmFjdCYmKHRoaXMuc2Vla1RvKHQpLHRoaXMuZW1pdChcImludGVyYWN0aW9uXCIsdCp0aGlzLmdldER1cmF0aW9uKCkpLHRoaXMuZW1pdChcImNsaWNrXCIsdCxlKSl9KSksdGhpcy5yZW5kZXJlci5vbihcImRibGNsaWNrXCIsKCh0LGUpPT57dGhpcy5lbWl0KFwiZGJsY2xpY2tcIix0LGUpfSkpLHRoaXMucmVuZGVyZXIub24oXCJzY3JvbGxcIiwoKHQsZSk9Pntjb25zdCBpPXRoaXMuZ2V0RHVyYXRpb24oKTt0aGlzLmVtaXQoXCJzY3JvbGxcIix0KmksZSppKX0pKSx0aGlzLnJlbmRlcmVyLm9uKFwicmVuZGVyXCIsKCgpPT57dGhpcy5lbWl0KFwicmVkcmF3XCIpfSkpLHRoaXMucmVuZGVyZXIub24oXCJyZW5kZXJlZFwiLCgoKT0+e3RoaXMuZW1pdChcInJlZHJhd2NvbXBsZXRlXCIpfSkpKTt7bGV0IHQ7dGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5yZW5kZXJlci5vbihcImRyYWdcIiwoZT0+e3RoaXMub3B0aW9ucy5pbnRlcmFjdCYmKHRoaXMucmVuZGVyZXIucmVuZGVyUHJvZ3Jlc3MoZSksY2xlYXJUaW1lb3V0KHQpLHQ9c2V0VGltZW91dCgoKCk9Pnt0aGlzLnNlZWtUbyhlKX0pLHRoaXMuaXNQbGF5aW5nKCk/MDoyMDApLHRoaXMuZW1pdChcImludGVyYWN0aW9uXCIsZSp0aGlzLmdldER1cmF0aW9uKCkpLHRoaXMuZW1pdChcImRyYWdcIixlKSl9KSkpfX1pbml0UGx1Z2lucygpe3ZhciB0OyhudWxsPT09KHQ9dGhpcy5vcHRpb25zLnBsdWdpbnMpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lmxlbmd0aCkmJnRoaXMub3B0aW9ucy5wbHVnaW5zLmZvckVhY2goKHQ9Pnt0aGlzLnJlZ2lzdGVyUGx1Z2luKHQpfSkpfXVuc3Vic2NyaWJlUGxheWVyRXZlbnRzKCl7dGhpcy5tZWRpYVN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodD0+dCgpKSksdGhpcy5tZWRpYVN1YnNjcmlwdGlvbnM9W119c2V0T3B0aW9ucyh0KXt0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSx0aGlzLm9wdGlvbnMsdCksdGhpcy5yZW5kZXJlci5zZXRPcHRpb25zKHRoaXMub3B0aW9ucyksdC5hdWRpb1JhdGUmJnRoaXMuc2V0UGxheWJhY2tSYXRlKHQuYXVkaW9SYXRlKSxudWxsIT10Lm1lZGlhQ29udHJvbHMmJih0aGlzLmdldE1lZGlhRWxlbWVudCgpLmNvbnRyb2xzPXQubWVkaWFDb250cm9scyl9cmVnaXN0ZXJQbHVnaW4odCl7cmV0dXJuIHQuX2luaXQodGhpcyksdGhpcy5wbHVnaW5zLnB1c2godCksdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godC5vbmNlKFwiZGVzdHJveVwiLCgoKT0+e3RoaXMucGx1Z2lucz10aGlzLnBsdWdpbnMuZmlsdGVyKChlPT5lIT09dCkpfSkpKSx0fWdldFdyYXBwZXIoKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5nZXRXcmFwcGVyKCl9Z2V0U2Nyb2xsKCl7cmV0dXJuIHRoaXMucmVuZGVyZXIuZ2V0U2Nyb2xsKCl9c2V0U2Nyb2xsVGltZSh0KXtjb25zdCBlPXQvdGhpcy5nZXREdXJhdGlvbigpO3RoaXMucmVuZGVyZXIuc2V0U2Nyb2xsUGVyY2VudGFnZShlKX1nZXRBY3RpdmVQbHVnaW5zKCl7cmV0dXJuIHRoaXMucGx1Z2luc31sb2FkQXVkaW8oZSxzLG4scil7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZih0aGlzLmVtaXQoXCJsb2FkXCIsZSksIXRoaXMub3B0aW9ucy5tZWRpYSYmdGhpcy5pc1BsYXlpbmcoKSYmdGhpcy5wYXVzZSgpLHRoaXMuZGVjb2RlZERhdGE9bnVsbCwhcyYmIW4pe2NvbnN0IHQ9dD0+dGhpcy5lbWl0KFwibG9hZGluZ1wiLHQpO3M9eWllbGQgby5mZXRjaEJsb2IoZSx0LHRoaXMub3B0aW9ucy5mZXRjaFBhcmFtcyl9dGhpcy5zZXRTcmMoZSxzKTtjb25zdCB0PXJ8fHRoaXMuZ2V0RHVyYXRpb24oKXx8KHlpZWxkIG5ldyBQcm9taXNlKCh0PT57dGhpcy5vbmNlTWVkaWFFdmVudChcImxvYWRlZG1ldGFkYXRhXCIsKCgpPT50KHRoaXMuZ2V0RHVyYXRpb24oKSkpKX0pKSk7aWYobil0aGlzLmRlY29kZWREYXRhPWkuY3JlYXRlQnVmZmVyKG4sdHx8MCk7ZWxzZSBpZihzKXtjb25zdCB0PXlpZWxkIHMuYXJyYXlCdWZmZXIoKTt0aGlzLmRlY29kZWREYXRhPXlpZWxkIGkuZGVjb2RlKHQsdGhpcy5vcHRpb25zLnNhbXBsZVJhdGUpfXRoaXMuZGVjb2RlZERhdGEmJih0aGlzLmVtaXQoXCJkZWNvZGVcIix0aGlzLmdldER1cmF0aW9uKCkpLHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuZGVjb2RlZERhdGEpKSx0aGlzLmVtaXQoXCJyZWFkeVwiLHRoaXMuZ2V0RHVyYXRpb24oKSl9KSl9bG9hZChlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXt5aWVsZCB0aGlzLmxvYWRBdWRpbyhlLHZvaWQgMCxpLHMpfSkpfWxvYWRCbG9iKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3lpZWxkIHRoaXMubG9hZEF1ZGlvKFwiYmxvYlwiLGUsaSxzKX0pKX16b29tKHQpe2lmKCF0aGlzLmRlY29kZWREYXRhKXRocm93IG5ldyBFcnJvcihcIk5vIGF1ZGlvIGxvYWRlZFwiKTt0aGlzLnJlbmRlcmVyLnpvb20odCksdGhpcy5lbWl0KFwiem9vbVwiLHQpfWdldERlY29kZWREYXRhKCl7cmV0dXJuIHRoaXMuZGVjb2RlZERhdGF9ZXhwb3J0UGVha3Moe2NoYW5uZWxzOnQ9MixtYXhMZW5ndGg6ZT04ZTMscHJlY2lzaW9uOmk9MWU0fT17fSl7aWYoIXRoaXMuZGVjb2RlZERhdGEpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGF1ZGlvIGhhcyBub3QgYmVlbiBkZWNvZGVkIHlldFwiKTtjb25zdCBzPU1hdGgubWluKHQsdGhpcy5kZWNvZGVkRGF0YS5udW1iZXJPZkNoYW5uZWxzKSxuPVtdO2ZvcihsZXQgdD0wO3Q8czt0Kyspe2NvbnN0IHM9dGhpcy5kZWNvZGVkRGF0YS5nZXRDaGFubmVsRGF0YSh0KSxyPVtdLG89TWF0aC5yb3VuZChzLmxlbmd0aC9lKTtmb3IobGV0IHQ9MDt0PGU7dCsrKXtjb25zdCBlPXMuc2xpY2UodCpvLCh0KzEpKm8pO2xldCBuPTA7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDt0Kyspe2NvbnN0IGk9ZVt0XTtNYXRoLmFicyhpKT5NYXRoLmFicyhuKSYmKG49aSl9ci5wdXNoKE1hdGgucm91bmQobippKS9pKX1uLnB1c2gocil9cmV0dXJuIG59Z2V0RHVyYXRpb24oKXtsZXQgdD1zdXBlci5nZXREdXJhdGlvbigpfHwwO3JldHVybiAwIT09dCYmdCE9PTEvMHx8IXRoaXMuZGVjb2RlZERhdGF8fCh0PXRoaXMuZGVjb2RlZERhdGEuZHVyYXRpb24pLHR9dG9nZ2xlSW50ZXJhY3Rpb24odCl7dGhpcy5vcHRpb25zLmludGVyYWN0PXR9c2V0VGltZSh0KXtzdXBlci5zZXRUaW1lKHQpLHRoaXMudXBkYXRlUHJvZ3Jlc3ModCl9c2Vla1RvKHQpe2NvbnN0IGU9dGhpcy5nZXREdXJhdGlvbigpKnQ7dGhpcy5zZXRUaW1lKGUpfXBsYXlQYXVzZSgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7cmV0dXJuIHRoaXMuaXNQbGF5aW5nKCk/dGhpcy5wYXVzZSgpOnRoaXMucGxheSgpfSkpfXN0b3AoKXt0aGlzLnBhdXNlKCksdGhpcy5zZXRUaW1lKDApfXNraXAodCl7dGhpcy5zZXRUaW1lKHRoaXMuZ2V0Q3VycmVudFRpbWUoKSt0KX1lbXB0eSgpe3RoaXMubG9hZChcIlwiLFtbMF1dLC4wMDEpfXNldE1lZGlhRWxlbWVudCh0KXt0aGlzLnVuc3Vic2NyaWJlUGxheWVyRXZlbnRzKCksc3VwZXIuc2V0TWVkaWFFbGVtZW50KHQpLHRoaXMuaW5pdFBsYXllckV2ZW50cygpfWV4cG9ydEltYWdlKGU9XCJpbWFnZS9wbmdcIixpPTEscz1cImRhdGFVUkxcIil7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5leHBvcnRJbWFnZShlLGkscyl9KSl9ZGVzdHJveSgpe3RoaXMuZW1pdChcImRlc3Ryb3lcIiksdGhpcy5wbHVnaW5zLmZvckVhY2goKHQ9PnQuZGVzdHJveSgpKSksdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHQ9PnQoKSkpLHRoaXMudW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMoKSx0aGlzLnRpbWVyLmRlc3Ryb3koKSx0aGlzLnJlbmRlcmVyLmRlc3Ryb3koKSxzdXBlci5kZXN0cm95KCl9fXUuQmFzZVBsdWdpbj1jbGFzcyBleHRlbmRzIGV7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLnN1YnNjcmlwdGlvbnM9W10sdGhpcy5vcHRpb25zPXR9b25Jbml0KCl7fV9pbml0KHQpe3RoaXMud2F2ZXN1cmZlcj10LHRoaXMub25Jbml0KCl9ZGVzdHJveSgpe3RoaXMuZW1pdChcImRlc3Ryb3lcIiksdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHQ9PnQoKSkpfX0sdS5kb209cjtleHBvcnR7dSBhcyBkZWZhdWx0fTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW1hZ2VzIGZyb20gJy4vaW1hZ2VzJztcbmltcG9ydCBsb2FkQXVkaW8gZnJvbSAnLi9hdWRpbyc7XG4vLyBpbXBvcnQgdHJhY2tDb250YWluZXIgZnJvbSAnLi9hdWRpbyc7XG4vLyBpbXBvcnQgc3RvcnkxIGZyb20gJy4vYXVkaW8nO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy8gY3JlYXRlIGltYWdlU2VjdGlvbiwgYXBwZW5kIHRvIGNvbnRlbnQgb24gdGVtcGxhdGUuaHRtbFxuY29uc3QgaW1hZ2VTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWFnZVNlY3Rpb24uaWQgPSAnaW1hZ2Utc2VjdGlvbic7XG5jb250ZW50LmFwcGVuZENoaWxkKGltYWdlU2VjdGlvbik7XG5cbi8vIGNyZWF0ZSBzbGlkZUZyYW1lLCBhcHBlbmQgdG8gaW1hZ2VTZWN0aW9uXG5jb25zdCBzbGlkZUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zbGlkZUZyYW1lLmlkID0gJ3NsaWRlLWZyYW1lJztcbmltYWdlU2VjdGlvbi5hcHBlbmRDaGlsZChzbGlkZUZyYW1lKTtcblxuLy8gY3VycmVudEltYWdlIGhvbGRzIHRoZSBpbWFnZXNbaV0gcG9zaXRpb25cbi8vIHN0YXJ0cyBhdCByYW5kb20gYmV0d2VlbiAwIGFuZCAxNTZcbi8vIGl0IGlzbid0IGFjdHVhbGx5IGxpbmtlZCB0byBpbWFnZXNbaV0gZGF0YSBpbiBhbnkgd2F5XG4vLyBvdGhlciB0aGFuIHRoZSBmYWN0IHRoZSBib3RoIHN0YXJ0IGF0IDAgYW5kIGdvIHVwIG9yIGRvd24gc2VxdWVudGlhbGx5XG5sZXQgY3VycmVudEltYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTU3KTtcblxuLy8gaW1Db3VudCBob2xkcyB0aGUgdG90YWwgbnVtYmVyIG9mIGltYWdlc1xuLy8gc2luY2UgYXJyYXkgc3RhcnRzIGF0IDAsIHdlIGdldCB0b3RhbCBjb3VudCBpdCBieSBydW5uaW5nIGxlbmd0aCAtIDFcbmNvbnN0IGltYWdlQ291bnQgPSBpbWFnZXMubGVuZ3RoIC0gMTtcblxuY29uc3QgcmV2ZXJzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xucmV2ZXJzZUJ1dHRvbi5pZCA9ICdyZXZlcnNlLWJ1dHRvbic7XG5yZXZlcnNlQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuXG5jb25zdCBhZHZhbmNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZHZhbmNlQnV0dG9uLmlkID0gJ2FkdmFuY2UtYnV0dG9uJztcbmFkdmFuY2VCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG5cbmxldCBpbWFnZUhvbGRlciA9IGltYWdlc1tjdXJyZW50SW1hZ2VdO1xuaW1hZ2VIb2xkZXIuaWQgPSAnY3VycmVudC1pbWFnZSc7XG5zbGlkZUZyYW1lLmFwcGVuZENoaWxkKHJldmVyc2VCdXR0b24pO1xuc2xpZGVGcmFtZS5hcHBlbmRDaGlsZChpbWFnZUhvbGRlcik7XG5zbGlkZUZyYW1lLmFwcGVuZENoaWxkKGFkdmFuY2VCdXR0b24pO1xuXG4vLyBhcHBlbmQvZGlzcGxheSBjdXJyZW50SW1hZ2VbMF0gb24gaW50aWFsIHBhZ2UgbG9hZFxuXG4vLyBncmFicyBhbmQgcmVtb3ZlcyByZW1vdmVzIGltYWdlIG9uIGRpc3BsYXlcbi8vIGFwcGVuZHMgdGhlIG5ldyBjdXJyZW50IGltYWdlXG4vLyBjdXJyZW50IGltYWdlIGhhcyBqdXN0IGJlZW4gdXBkYXRlZFxuLy8gYXMgdXBkYXRlSW1hZ2UgaXMgY2FsbGVkIGluIGFkdmFuY2VJbWFnZSgpIG9yIHJldmVyc2VtYWdlKClcbmNvbnN0IHVwZGF0ZUltYWdlID0gKCkgPT4ge1xuICBjb25zdCBnZXRDdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtaW1hZ2UnKTtcbiAgc2xpZGVGcmFtZS5yZW1vdmVDaGlsZChnZXRDdXJyZW50KTtcbiAgaW1hZ2VIb2xkZXIgPSBpbWFnZXNbY3VycmVudEltYWdlXTtcbiAgaW1hZ2VIb2xkZXIuaWQgPSAnY3VycmVudC1pbWFnZSc7XG4gIHNsaWRlRnJhbWUuYXBwZW5kQ2hpbGQocmV2ZXJzZUJ1dHRvbik7XG4gIHNsaWRlRnJhbWUuYXBwZW5kQ2hpbGQoaW1hZ2VIb2xkZXIpO1xuICBzbGlkZUZyYW1lLmFwcGVuZENoaWxkKGFkdmFuY2VCdXR0b24pO1xufTtcblxuLy8gaW5jcmVhc2VzIGN1cnJlbnRJbWFnZSBudW1iZXIgc28gbmV4dCBpbWFnZXNbaV0gaXMgY2FsbGVkIG9uIHVwZGF0ZUltYWdlKClcbi8vIGlmIGN1cnJlbnRJbWFnZSBjb3VudCBpcyA+PSB0aGUgaW1hZ2VDb3VudCBzZXQgaXQgdG8gMCB0byBsb29wXG5jb25zdCBhZHZhbmNlSW1hZ2UgPSAoKSA9PiB7XG4gIGlmIChjdXJyZW50SW1hZ2UgPj0gaW1hZ2VDb3VudCkge1xuICAgIGN1cnJlbnRJbWFnZSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEltYWdlICs9IDE7XG4gIH1cbiAgdXBkYXRlSW1hZ2UoKTtcbn07XG5cbi8vIHNhbWUgYnV0IHJldmVyc2UgdG8gZ28gYmFja3dhcmQgaW4gaW1hZ2VzW11cbmNvbnN0IHJldmVyc2VJbWFnZSA9ICgpID0+IHtcbiAgaWYgKGN1cnJlbnRJbWFnZSA8PSAwKSB7XG4gICAgY3VycmVudEltYWdlID0gaW1hZ2VDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SW1hZ2UgLT0gMTtcbiAgfVxuICB1cGRhdGVJbWFnZSgpO1xufTtcblxuLy8gcHV0IHRpbWVyIGluIGEgdmFyIHNvIGkgY291bGQgbWVzcyB3aXRoIGl0IGluIHRoZSBidXR0b25zXG5sZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IGFkdmFuY2VJbWFnZSgpOyB9LCAxMDAwMCk7XG5cbmFkdmFuY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFkdmFuY2VJbWFnZSgpO1xuICAvLyByZXNldCB0aW1lciB0byBwcmV2ZW50IHNob3J0IGFkdmFuY2VzXG4gIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBhZHZhbmNlSW1hZ2UoKTtcbiAgfSwgMTAwMDApO1xufSk7XG5cbnJldmVyc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJldmVyc2VJbWFnZSgpO1xuICAvLyByZXNldCB0aW1lciB0byBwcmV2ZW50IHNob3J0IGFkdmFuY2VzXG4gIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBhZHZhbmNlSW1hZ2UoKTtcbiAgfSwgMTAwMDApO1xufSk7XG5cbi8vIHJ1bnMgcmV2ZXJzZUltYWdlKCkgZXZlcnkgOCBzZWNvbmRzIHRvIGF1dG8gYWR2YW5jZVxuXG5jb25zdCBhdWRpb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmF1ZGlvU2VjdGlvbi5pZCA9ICdhdWRpby1zZWN0aW9uJztcbmNvbnN0IHRyYWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50cmFja0NvbnRhaW5lci5pZCA9ICd0cmFjay1jb250YWluZXInO1xuXG5hdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQodHJhY2tDb250YWluZXIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGF1ZGlvU2VjdGlvbik7XG5cbmxvYWRBdWRpbygpO1xuXG4vLyBPTEQgV0FZIE9GIEhBTkRMSU5HIEFVRElPIE9OIERPTVxuLy8gY29uc3QgYXVkaW9Vbml0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgYXVkaW9Vbml0MUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbi8vIGNvbnN0IGVhcmx5TGlmZSA9IHN0b3J5MVswXTtcbi8vIGF1ZGlvVW5pdDEuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdCcpO1xuLy8gYXVkaW9Vbml0MUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQtbGFiZWwnKTtcbi8vIGF1ZGlvVW5pdDFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlYXJseS1saWZlJyk7XG4vLyBhdWRpb1VuaXQxTGFiZWwudGV4dENvbnRlbnQgPSAnRWFybHkgbGlmZSc7XG4vLyBhdWRpb1VuaXQxLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDFMYWJlbCk7XG4vLyBhdWRpb1VuaXQxLmFwcGVuZENoaWxkKGVhcmx5TGlmZSk7XG5cbi8vIGNvbnN0IGF1ZGlvVW5pdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnN0IGF1ZGlvVW5pdDJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4vLyBjb25zdCBtb21LaWRzQ2FycGVudHJ5ID0gc3RvcnkxWzFdO1xuLy8gYXVkaW9Vbml0Mi5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQyTGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0MkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21vbS1raWRzLWNhcnBlbnRyeScpO1xuLy8gYXVkaW9Vbml0MkxhYmVsLnRleHRDb250ZW50ID0gJ01vbSwga2lkcywgYW5kIGNhcnBlbnRyeSc7XG4vLyBhdWRpb1VuaXQyLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDJMYWJlbCk7XG4vLyBhdWRpb1VuaXQyLmFwcGVuZENoaWxkKG1vbUtpZHNDYXJwZW50cnkpO1xuXG4vLyBjb25zdCBhdWRpb1VuaXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb25zdCBhdWRpb1VuaXQzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuLy8gY29uc3QgbmF0dXJlID0gc3RvcnkxWzJdO1xuLy8gYXVkaW9Vbml0My5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQzTGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0M0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hdHVyZScpO1xuLy8gYXVkaW9Vbml0M0xhYmVsLnRleHRDb250ZW50ID0gJ05hdHVyZSc7XG4vLyBhdWRpb1VuaXQzLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDNMYWJlbCk7XG4vLyBhdWRpb1VuaXQzLmFwcGVuZENoaWxkKG5hdHVyZSk7XG5cbi8vIGNvbnN0IGF1ZGlvVW5pdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnN0IGF1ZGlvVW5pdDRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4vLyBjb25zdCByZWxpZ2lvbiA9IHN0b3J5MVszXTtcbi8vIGF1ZGlvVW5pdDQuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdCcpO1xuLy8gYXVkaW9Vbml0NExhYmVsLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQtbGFiZWwnKTtcbi8vIGF1ZGlvVW5pdDRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyZWxpZ2lvbicpO1xuLy8gYXVkaW9Vbml0NExhYmVsLnRleHRDb250ZW50ID0gJ1JlbGlnaW9uJztcbi8vIGF1ZGlvVW5pdDQuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0NExhYmVsKTtcbi8vIGF1ZGlvVW5pdDQuYXBwZW5kQ2hpbGQocmVsaWdpb24pO1xuXG4vLyBjb25zdCBhdWRpb1VuaXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb25zdCBhdWRpb1VuaXQ1TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuLy8gY29uc3QgYWR2aWNlVG9HcmFuZGtpZHMgPSBzdG9yeTFbNF07XG4vLyBhdWRpb1VuaXQ1LmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQnKTtcbi8vIGF1ZGlvVW5pdDVMYWJlbC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0LWxhYmVsJyk7XG4vLyBhdWRpb1VuaXQ1TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWR2aWNlLXRvLWdyYW5ka2lkcycpO1xuLy8gYXVkaW9Vbml0NUxhYmVsLnRleHRDb250ZW50ID0gJ0FkdmljZSB0byBoaXMgZ3JhbmRraWRzJztcbi8vIGF1ZGlvVW5pdDUuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0NUxhYmVsKTtcbi8vIGF1ZGlvVW5pdDUuYXBwZW5kQ2hpbGQoYWR2aWNlVG9HcmFuZGtpZHMpO1xuXG4vLyBjb25zdCBhdWRpb1VuaXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb25zdCBhdWRpb1VuaXQ2TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuLy8gY29uc3QgYWR2aWNlVG9IaXNLaWRzID0gc3RvcnkxWzVdO1xuLy8gYXVkaW9Vbml0Ni5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQ2TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0NkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FkdmljZS10by1oaXMta2lkcycpO1xuLy8gYXVkaW9Vbml0NkxhYmVsLnRleHRDb250ZW50ID0gJ0FkdmljZSB0byBoaXMga2lkcyc7XG4vLyBhdWRpb1VuaXQ2LmFwcGVuZENoaWxkKGF1ZGlvVW5pdDZMYWJlbCk7XG4vLyBhdWRpb1VuaXQ2LmFwcGVuZENoaWxkKGFkdmljZVRvSGlzS2lkcyk7XG5cbi8vIGNvbnN0IGF1ZGlvVW5pdDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnN0IGF1ZGlvVW5pdDdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4vLyBjb25zdCBtZXNzYWdlVG9UaGVGYW1pbHkgPSBzdG9yeTFbNl07XG4vLyBhdWRpb1VuaXQ3LmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQnKTtcbi8vIGF1ZGlvVW5pdDdMYWJlbC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0LWxhYmVsJyk7XG4vLyBhdWRpb1VuaXQ3TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZS10by10aGUtZmFtaWx5Jyk7XG4vLyBhdWRpb1VuaXQ3TGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZSB0byB0aGUgZmFtaWx5Jztcbi8vIGF1ZGlvVW5pdDcuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0N0xhYmVsKTtcbi8vIGF1ZGlvVW5pdDcuYXBwZW5kQ2hpbGQobWVzc2FnZVRvVGhlRmFtaWx5KTtcblxuLy8gY29uc3QgYXVkaW9Vbml0OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgYXVkaW9Vbml0OExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbi8vIGNvbnN0IG1lc3NhZ2VUb01vbSA9IHN0b3J5MVs3XTtcbi8vIGF1ZGlvVW5pdDguY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdCcpO1xuLy8gYXVkaW9Vbml0OExhYmVsLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQtbGFiZWwnKTtcbi8vIGF1ZGlvVW5pdDhMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlLXRvLW1vbScpO1xuLy8gYXVkaW9Vbml0OExhYmVsLnRleHRDb250ZW50ID0gJ01lc3NhZ2UgdG8gTW9tJztcbi8vIGF1ZGlvVW5pdDguYXBwZW5kQ2hpbGQoYXVkaW9Vbml0OExhYmVsKTtcbi8vIGF1ZGlvVW5pdDguYXBwZW5kQ2hpbGQobWVzc2FnZVRvTW9tKTtcblxuLy8gY29uc3QgYXVkaW9Vbml0OSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgYXVkaW9Vbml0OUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbi8vIGNvbnN0IGRhZFNpbmdzS3Jpc3RvZmZlcnNvbiA9IHN0b3J5MVs4XTtcbi8vIGF1ZGlvVW5pdDkuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdCcpO1xuLy8gYXVkaW9Vbml0OUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQtbGFiZWwnKTtcbi8vIGF1ZGlvVW5pdDlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYWQtc2luZ3Mta3Jpc3RvZmZlcnNvbicpO1xuLy8gYXVkaW9Vbml0OUxhYmVsLnRleHRDb250ZW50ID0gJ0RhZCBzaW5ncyBLcmlzdG9mZmVyc29uJztcbi8vIGF1ZGlvVW5pdDkuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0OUxhYmVsKTtcbi8vIGF1ZGlvVW5pdDkuYXBwZW5kQ2hpbGQoZGFkU2luZ3NLcmlzdG9mZmVyc29uKTtcblxuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDEpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDIpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDMpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDQpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDUpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDYpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDcpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDgpO1xuLy8gYXVkaW9TZWN0aW9uLmFwcGVuZENoaWxkKGF1ZGlvVW5pdDkpO1xuLy9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==