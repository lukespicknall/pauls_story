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
  let initiated = false;
  const updateinitiation = (a) => {
    initiated = a;
  };
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
      wavesurfer.playPause();
      updateinitiation(true);
      // console.log(initiated)
    };

    // when paused, show the play img
    wavesurfer.on('pause', () => {
      playBtn.replaceChild(play, pause);
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

    if (initiated === false) {
      wavesurfer.once('seeking', () => {
        const playPromise = wavesurfer.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            console.log('initiated');
            wavesurfer.pause();
          });
        // .catch((error) => {
        // Auto-play was prevented
        // Show paused UI.
        // });
        }
      });
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHcUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV6Qzs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFdBQVcsNkNBQUk7QUFDZjs7QUFFQTtBQUNBLFlBQVksOENBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLFlBQVksK0NBQUs7QUFDakI7O0FBRUE7QUFDQSxZQUFZLCtDQUFLO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjs7QUFFQTtBQUNBLGFBQWEsZ0RBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztBQUVBO0FBQ0EsYUFBYSxpREFBTTtBQUNuQjs7QUFFQTtBQUNBLGFBQWEsaURBQU07QUFDbkI7O0FBRUE7QUFDQSxhQUFhLGlEQUFNO0FBQ25COztB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZONUI7QUFDQTs7QUFFQTtBQUNBOztB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9zcmMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9zcmMvaW1hZ2VzLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5Ly4vc3JjL3dhdmVzdXJmZXJtb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9ub2RlX21vZHVsZXMvd2F2ZXN1cmZlci5qcy9kaXN0L3dhdmVzdXJmZXIuZXNtLmpzIiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BhdWxzX3N0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGF1bHNfc3Rvcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYXVsc19zdG9yeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGF1bHNfc3RvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpbWFnZS1zZWN0aW9uIHtcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgbWluLXdpZHRoOiAzNzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweCAwIDAgMDtcblxufVxuXG4jc2xpZGUtZnJhbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIC8qIG1heC13aWR0aDogNzUlOyAqL1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgbWF4LWhlaWdodDogNTUwcHg7XG4gICAgdHJhbnNmb3JtOiBlYXNlLWluLW91dCAycztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xufVxuXG4jY3VycmVudC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xuICAgIG9wYWNpdHk6IDEwMDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcbn1cblxuI3JldmVyc2UtYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbn1cblxuI2FkdmFuY2UtYnV0dG9uIHtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzIyKTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbn1cblxuLyogQVVESU8gU0VDVElPTiAqL1xuXG4jYXVkaW8tc2VjdGlvbntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzc1cHg7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA0MHB4IDAgNjBweCAwO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzOSwgODkpOyAqL1xufVxuXG4jdHJhY2stY29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzY1cHg7XG4gICAgbWF4LXdpZHRoOiA2NSU7XG59XG5cbi50cmFjayB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbi50cmFjay10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ub3B0aW9ucy1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIC8qIG1hcmdpbjogMCAwIDQwcHggMDsgKi9cbn1cblxuLnBsYXktYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wbGF5LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTllODtcbn1cblxuLnBsYXktaW1nIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG59XG5cbi5wYXVzZS1pbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLnRpbWUtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmN1cnJlbnQtZGlzcGxheSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZHVyYXRpb25EaXNwbGF5IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kaXZpZGVyIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIE9MRCBDT0RFIFNUWUxFICovXG4vKiAuYXVkaW8tdW5pdCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDM2NXB4O1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLmF1ZGlvLXBsYXllciB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5hdWRpbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjMxLCAxOTIpO1xufVxuXG4uYXVkaW8tdW5pdC1sYWJlbCB7XG4gICAgbWFyZ2luOiAwIDAgMjBweCA1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUEsa0JBQWtCOztBQUVsQjtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQSxtQkFBbUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpbWFnZS1zZWN0aW9uIHtcXG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTUwcHg7XFxuICAgIG1pbi13aWR0aDogMzc1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xcblxcbn1cXG5cXG4jc2xpZGUtZnJhbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogbWF4LXdpZHRoOiA3NSU7ICovXFxuICAgIGhlaWdodDogNTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xcbiAgICB0cmFuc2Zvcm06IGVhc2UtaW4tb3V0IDJzO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcbn1cXG5cXG4jY3VycmVudC1pbWFnZSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMnM7XFxufVxcblxcbiNyZXZlcnNlLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbn1cXG5cXG4jYWR2YW5jZS1idXR0b24ge1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzIyKTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbn1cXG5cXG4vKiBBVURJTyBTRUNUSU9OICovXFxuXFxuI2F1ZGlvLXNlY3Rpb257XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDM3NXB4O1xcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA0MHB4IDAgNjBweCAwO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzksIDg5KTsgKi9cXG59XFxuXFxuI3RyYWNrLWNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDM2NXB4O1xcbiAgICBtYXgtd2lkdGg6IDY1JTtcXG59XFxuXFxuLnRyYWNrIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW46IDAgMCA0MHB4IDA7XFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuXFxuLnRyYWNrLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm9wdGlvbnMtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgLyogbWFyZ2luOiAwIDAgNDBweCAwOyAqL1xcbn1cXG5cXG4ucGxheS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOWU4O1xcbn1cXG5cXG4ucGxheS1pbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ucGF1c2UtaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnRpbWUtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmN1cnJlbnQtZGlzcGxheSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmR1cmF0aW9uRGlzcGxheSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIE9MRCBDT0RFIFNUWUxFICovXFxuLyogLmF1ZGlvLXVuaXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzNjVweDtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcXG59XFxuXFxuLmF1ZGlvLXBsYXllciB7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjMxLCAxOTIpO1xcbn1cXG5cXG4uYXVkaW8tdW5pdC1sYWJlbCB7XFxuICAgIG1hcmdpbjogMCAwIDIwcHggNXB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnLi93YXZlc3VyZmVybW9kdWxlJztcbmltcG9ydCBFYXJseUxpZmUgZnJvbSAnLi9hdWRpby8wMV9FYXJseUxpZmUubXAzJztcbmltcG9ydCBNb21LaWRzQ2FycGVudHJ5IGZyb20gJy4vYXVkaW8vMDJfTW9tS2lkc0NhcnBlbnRyeS5tcDMnO1xuaW1wb3J0IE5hdHVyZSBmcm9tICcuL2F1ZGlvLzAzX05hdHVyZS5tcDMnO1xuaW1wb3J0IFJlbGlnaW9uIGZyb20gJy4vYXVkaW8vMDRfUmVsaWdpb24ubXAzJztcbmltcG9ydCBBZHZpY2VUb0dyYW5ka2lkcyBmcm9tICcuL2F1ZGlvLzA1X0FkdmljZVRvR3JhbmRraWRzLm1wMyc7XG5pbXBvcnQgQWR2aWNlVG9IaXNLaWRzIGZyb20gJy4vYXVkaW8vMDZfQWR2aWNlVG9IaXNLaWRzLm1wMyc7XG5pbXBvcnQgTWVzc2FnZVRvVGhlRmFtaWx5IGZyb20gJy4vYXVkaW8vMDdfTWVzc2FnZVRvVGhlRmFtaWx5Lm1wMyc7XG5pbXBvcnQgTWVzc2FnZVRvTW9tIGZyb20gJy4vYXVkaW8vMDhfTWVzc2FnZVRvTW9tLm1wMyc7XG5pbXBvcnQgRGFkU2luZ3NLcmlzdG9mZmVyc29uIGZyb20gJy4vYXVkaW8vMDlfRGFkU2luZ3NLcmlzdG9mZmVyc29uLm1wMyc7XG5pbXBvcnQgUGxheSBmcm9tICcuL2ljb25zL3BsYXkuc3ZnJztcbmltcG9ydCBQYXVzZSBmcm9tICcuL2ljb25zL3BhdXNlLnN2Zyc7XG5cbmNvbnN0IGxvYWRBdWRpbyA9ICgpID0+IHtcbiAgY29uc3QgdHJhY2tzID0gW1xuICAgIEVhcmx5TGlmZSxcbiAgICBNb21LaWRzQ2FycGVudHJ5LFxuICAgIE5hdHVyZSxcbiAgICBSZWxpZ2lvbixcbiAgICBBZHZpY2VUb0dyYW5ka2lkcyxcbiAgICBBZHZpY2VUb0hpc0tpZHMsXG4gICAgTWVzc2FnZVRvVGhlRmFtaWx5LFxuICAgIE1lc3NhZ2VUb01vbSxcbiAgICBEYWRTaW5nc0tyaXN0b2ZmZXJzb24sXG4gIF07XG5cbiAgY29uc3QgdGl0bGVzID0gW1xuICAgICdFYXJseSBsaWZlJyxcbiAgICAnTW9tLCBraWRzLCBjYXJwZW50cnknLFxuICAgICdOYXR1cmUnLFxuICAgICdSZWxpZ2lvbicsXG4gICAgJ0FkdmljZSB0byBncmFuZGtpZHMnLFxuICAgICdBZHZpY2UgdG8ga2lkcycsXG4gICAgJ01lc3NhZ2UgdG8gdGhlIGZhbWlseScsXG4gICAgJ01lc3NhZ2UgdG8gTW9tJyxcbiAgICAnRGFkIHNpbmdzIEtyaXN0b2ZmZXJzb24nLFxuICBdO1xuXG4gIC8vIGNyZWF0ZXMgYSBjb250YWluZXIgZm9yIHRoZSB0cmFja3MgYW5kIGFwcGVuZHMgaXQgdG8gRE9NXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWNrLWNvbnRhaW5lcicpO1xuXG4gIC8vIGNyZWF0ZSB3YXZlc3VyZmVyIHBsYXllcnMgZnJvbSB3YXZlc3VyZmVybW9kdWxlLmpzIHdpdGggZm9sbG93aW5nIHBhcmFtc1xuICBjcmVhdGVQbGF5ZXIodHJhY2tzLCB0aXRsZXMsIHRyYWNrQ29udGFpbmVyLCBQbGF5LCBQYXVzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQXVkaW87XG5cbi8vIE9MRCBXQVkgT0YgTE9BRElORyBBVURJTyBQTEFZRVJcbi8vIGNvbnN0IGVhcmx5TGlmZSA9IG5ldyBBdWRpbyhFYXJseUxpZmUpO1xuLy8gZWFybHlMaWZlLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gZWFybHlMaWZlLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gZWFybHlMaWZlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdlYXJseS1saWZlJyk7XG4vLyBzdG9yeTEucHVzaChlYXJseUxpZmUpO1xuXG4vLyBjb25zdCBtb21LaWRzQ2FycGVudHJ5ID0gbmV3IEF1ZGlvKE1vbUtpZHNDYXJwZW50cnkpO1xuLy8gbW9tS2lkc0NhcnBlbnRyeS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ3RydWUnKTtcbi8vIG1vbUtpZHNDYXJwZW50cnkuY2xhc3NMaXN0LmFkZCgnYXVkaW8tcGxheWVyJyk7XG4vLyBtb21LaWRzQ2FycGVudHJ5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtb20ta2lkcy1jYXJwZW50cnknKTtcbi8vIHN0b3J5MS5wdXNoKG1vbUtpZHNDYXJwZW50cnkpO1xuXG4vLyBjb25zdCBuYXR1cmUgPSBuZXcgQXVkaW8oTmF0dXJlKTtcbi8vIG5hdHVyZS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ3RydWUnKTtcbi8vIG5hdHVyZS5jbGFzc0xpc3QuYWRkKCdhdWRpby1wbGF5ZXInKTtcbi8vIG5hdHVyZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmF0dXJlJyk7XG4vLyBzdG9yeTEucHVzaChuYXR1cmUpO1xuXG4vLyBjb25zdCByZWxpZ2lvbiA9IG5ldyBBdWRpbyhSZWxpZ2lvbik7XG4vLyByZWxpZ2lvbi5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ3RydWUnKTtcbi8vIHJlbGlnaW9uLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gcmVsaWdpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3JlbGlnaW9uJyk7XG4vLyBzdG9yeTEucHVzaChyZWxpZ2lvbik7XG5cbi8vIGNvbnN0IGFkdmljZVRvR3JhbmRraWRzID0gbmV3IEF1ZGlvKEFkdmljZVRvR3JhbmRraWRzKTtcbi8vIGFkdmljZVRvR3JhbmRraWRzLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gYWR2aWNlVG9HcmFuZGtpZHMuY2xhc3NMaXN0LmFkZCgnYXVkaW8tcGxheWVyJyk7XG4vLyBhZHZpY2VUb0dyYW5ka2lkcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWR2aWNlLXRvLWdyYW5ka2lkcycpO1xuLy8gc3RvcnkxLnB1c2goYWR2aWNlVG9HcmFuZGtpZHMpO1xuXG4vLyBjb25zdCBhZHZpY2VUb0hpc0tpZHMgPSBuZXcgQXVkaW8oQWR2aWNlVG9IaXNLaWRzKTtcbi8vIGFkdmljZVRvSGlzS2lkcy5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ3RydWUnKTtcbi8vIGFkdmljZVRvSGlzS2lkcy5jbGFzc0xpc3QuYWRkKCdhdWRpby1wbGF5ZXInKTtcbi8vIGFkdmljZVRvSGlzS2lkcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWR2aWNlLXRvLWhpcy1raWRzJyk7XG4vLyBzdG9yeTEucHVzaChhZHZpY2VUb0hpc0tpZHMpO1xuXG4vLyBjb25zdCBtZXNzYWdlVG9UaGVGYW1pbHkgPSBuZXcgQXVkaW8oTWVzc2FnZVRvVGhlRmFtaWx5KTtcbi8vIG1lc3NhZ2VUb1RoZUZhbWlseS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ3RydWUnKTtcbi8vIG1lc3NhZ2VUb1RoZUZhbWlseS5jbGFzc0xpc3QuYWRkKCdhdWRpby1wbGF5ZXInKTtcbi8vIG1lc3NhZ2VUb1RoZUZhbWlseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZS10by10aGUtZmFtaWx5Jyk7XG4vLyBzdG9yeTEucHVzaChtZXNzYWdlVG9UaGVGYW1pbHkpO1xuXG4vLyBjb25zdCBtZXNzYWdlVG9Nb20gPSBuZXcgQXVkaW8oTWVzc2FnZVRvTW9tKTtcbi8vIG1lc3NhZ2VUb01vbS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ3RydWUnKTtcbi8vIG1lc3NhZ2VUb01vbS5jbGFzc0xpc3QuYWRkKCdhdWRpby1wbGF5ZXInKTtcbi8vIG1lc3NhZ2VUb01vbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZS10by1tb20nKTtcbi8vIHN0b3J5MS5wdXNoKG1lc3NhZ2VUb01vbSk7XG5cbi8vIGNvbnN0IGRhZFNpbmdzS3Jpc3RvZmZlcnNvbiA9IG5ldyBBdWRpbyhEYWRTaW5nc0tyaXN0b2ZmZXJzb24pO1xuLy8gZGFkU2luZ3NLcmlzdG9mZmVyc29uLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAndHJ1ZScpO1xuLy8gZGFkU2luZ3NLcmlzdG9mZmVyc29uLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXBsYXllcicpO1xuLy8gZGFkU2luZ3NLcmlzdG9mZmVyc29uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYWQtc2luZ3Mta3Jpc3RvZmZlcnNvbicpO1xuLy8gc3RvcnkxLnB1c2goZGFkU2luZ3NLcmlzdG9mZmVyc29uKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcnkxO1xuIiwiaW1wb3J0IFBpYzEgZnJvbSAnLi9pbWFnZXMvZGFkMS5qcGcnO1xuaW1wb3J0IFBpYzIgZnJvbSAnLi9pbWFnZXMvZGFkMi5qcGcnO1xuaW1wb3J0IFBpYzMgZnJvbSAnLi9pbWFnZXMvZGFkMy5qcGcnO1xuaW1wb3J0IFBpYzQgZnJvbSAnLi9pbWFnZXMvZGFkNC5qcGcnO1xuaW1wb3J0IFBpYzUgZnJvbSAnLi9pbWFnZXMvZGFkNS5qcGcnO1xuaW1wb3J0IFBpYzYgZnJvbSAnLi9pbWFnZXMvZGFkNi5qcGcnO1xuaW1wb3J0IFBpYzcgZnJvbSAnLi9pbWFnZXMvZGFkNy5qcGcnO1xuaW1wb3J0IFBpYzggZnJvbSAnLi9pbWFnZXMvZGFkOC5qcGcnO1xuaW1wb3J0IFBpYzkgZnJvbSAnLi9pbWFnZXMvZGFkOS5qcGcnO1xuaW1wb3J0IFBpYzEwIGZyb20gJy4vaW1hZ2VzL2RhZDEwLmpwZyc7XG5pbXBvcnQgUGljMTEgZnJvbSAnLi9pbWFnZXMvZGFkMTEuanBnJztcbmltcG9ydCBQaWMxMiBmcm9tICcuL2ltYWdlcy9kYWQxMi5qcGcnO1xuaW1wb3J0IFBpYzEzIGZyb20gJy4vaW1hZ2VzL2RhZDEzLmpwZyc7XG5pbXBvcnQgUGljMTQgZnJvbSAnLi9pbWFnZXMvZGFkMTQuanBnJztcbmltcG9ydCBQaWMxNSBmcm9tICcuL2ltYWdlcy9kYWQxNS5qcGcnO1xuaW1wb3J0IFBpYzE2IGZyb20gJy4vaW1hZ2VzL2RhZDE2LmpwZyc7XG5pbXBvcnQgUGljMTcgZnJvbSAnLi9pbWFnZXMvZGFkMTcuanBnJztcbmltcG9ydCBQaWMxOCBmcm9tICcuL2ltYWdlcy9kYWQxOC5qcGcnO1xuaW1wb3J0IFBpYzE5IGZyb20gJy4vaW1hZ2VzL2RhZDE5LmpwZyc7XG5pbXBvcnQgUGljMjAgZnJvbSAnLi9pbWFnZXMvZGFkMjAuanBnJztcbmltcG9ydCBQaWMyMSBmcm9tICcuL2ltYWdlcy9kYWQyMS5qcGcnO1xuaW1wb3J0IFBpYzIyIGZyb20gJy4vaW1hZ2VzL2RhZDIyLmpwZyc7XG5pbXBvcnQgUGljMjMgZnJvbSAnLi9pbWFnZXMvZGFkMjMuanBnJztcbmltcG9ydCBQaWMyNCBmcm9tICcuL2ltYWdlcy9kYWQyNC5qcGcnO1xuaW1wb3J0IFBpYzI1IGZyb20gJy4vaW1hZ2VzL2RhZDI1LmpwZyc7XG5pbXBvcnQgUGljMjYgZnJvbSAnLi9pbWFnZXMvZGFkMjYuanBnJztcbmltcG9ydCBQaWMyNyBmcm9tICcuL2ltYWdlcy9kYWQyNy5qcGcnO1xuaW1wb3J0IFBpYzI4IGZyb20gJy4vaW1hZ2VzL2RhZDI4LmpwZyc7XG5pbXBvcnQgUGljMjkgZnJvbSAnLi9pbWFnZXMvZGFkMjkuanBnJztcbmltcG9ydCBQaWMzMCBmcm9tICcuL2ltYWdlcy9kYWQzMC5qcGcnO1xuaW1wb3J0IFBpYzMxIGZyb20gJy4vaW1hZ2VzL2RhZDMxLmpwZyc7XG5pbXBvcnQgUGljMzIgZnJvbSAnLi9pbWFnZXMvZGFkMzIuanBnJztcbmltcG9ydCBQaWMzMyBmcm9tICcuL2ltYWdlcy9kYWQzMy5qcGcnO1xuaW1wb3J0IFBpYzM0IGZyb20gJy4vaW1hZ2VzL2RhZDM0LmpwZyc7XG5pbXBvcnQgUGljMzUgZnJvbSAnLi9pbWFnZXMvZGFkMzUuanBnJztcbmltcG9ydCBQaWMzNiBmcm9tICcuL2ltYWdlcy9kYWQzNi5qcGcnO1xuaW1wb3J0IFBpYzM3IGZyb20gJy4vaW1hZ2VzL2RhZDM3LmpwZyc7XG5pbXBvcnQgUGljMzggZnJvbSAnLi9pbWFnZXMvZGFkMzguanBnJztcbmltcG9ydCBQaWMzOSBmcm9tICcuL2ltYWdlcy9kYWQzOS5qcGcnO1xuaW1wb3J0IFBpYzQwIGZyb20gJy4vaW1hZ2VzL2RhZDQwLmpwZyc7XG5pbXBvcnQgUGljNDEgZnJvbSAnLi9pbWFnZXMvZGFkNDEuanBnJztcbmltcG9ydCBQaWM0MiBmcm9tICcuL2ltYWdlcy9kYWQ0Mi5qcGcnO1xuaW1wb3J0IFBpYzQzIGZyb20gJy4vaW1hZ2VzL2RhZDQzLmpwZyc7XG5pbXBvcnQgUGljNDQgZnJvbSAnLi9pbWFnZXMvZGFkNDQuanBnJztcbmltcG9ydCBQaWM0NSBmcm9tICcuL2ltYWdlcy9kYWQ0NS5qcGcnO1xuaW1wb3J0IFBpYzQ2IGZyb20gJy4vaW1hZ2VzL2RhZDQ2LmpwZyc7XG5pbXBvcnQgUGljNDcgZnJvbSAnLi9pbWFnZXMvZGFkNDcuanBnJztcbmltcG9ydCBQaWM0OCBmcm9tICcuL2ltYWdlcy9kYWQ0OC5qcGcnO1xuaW1wb3J0IFBpYzQ5IGZyb20gJy4vaW1hZ2VzL2RhZDQ5LmpwZyc7XG5pbXBvcnQgUGljNTAgZnJvbSAnLi9pbWFnZXMvZGFkNTAuanBnJztcbmltcG9ydCBQaWM1MSBmcm9tICcuL2ltYWdlcy9kYWQ1MS5qcGcnO1xuaW1wb3J0IFBpYzUyIGZyb20gJy4vaW1hZ2VzL2RhZDUyLmpwZyc7XG5pbXBvcnQgUGljNTMgZnJvbSAnLi9pbWFnZXMvZGFkNTMuanBnJztcbmltcG9ydCBQaWM1NCBmcm9tICcuL2ltYWdlcy9kYWQ1NC5qcGcnO1xuaW1wb3J0IFBpYzU1IGZyb20gJy4vaW1hZ2VzL2RhZDU1LmpwZyc7XG5pbXBvcnQgUGljNTYgZnJvbSAnLi9pbWFnZXMvZGFkNTYuanBnJztcbmltcG9ydCBQaWM1NyBmcm9tICcuL2ltYWdlcy9kYWQ1Ny5qcGcnO1xuaW1wb3J0IFBpYzU4IGZyb20gJy4vaW1hZ2VzL2RhZDU4LmpwZyc7XG5pbXBvcnQgUGljNTkgZnJvbSAnLi9pbWFnZXMvZGFkNTkuanBnJztcbmltcG9ydCBQaWM2MCBmcm9tICcuL2ltYWdlcy9kYWQ2MC5qcGcnO1xuaW1wb3J0IFBpYzYxIGZyb20gJy4vaW1hZ2VzL2RhZDYxLmpwZyc7XG5pbXBvcnQgUGljNjIgZnJvbSAnLi9pbWFnZXMvZGFkNjIuanBnJztcbmltcG9ydCBQaWM2MyBmcm9tICcuL2ltYWdlcy9kYWQ2My5qcGcnO1xuaW1wb3J0IFBpYzY0IGZyb20gJy4vaW1hZ2VzL2RhZDY0LmpwZyc7XG5pbXBvcnQgUGljNjUgZnJvbSAnLi9pbWFnZXMvZGFkNjUuanBnJztcbmltcG9ydCBQaWM2NiBmcm9tICcuL2ltYWdlcy9kYWQ2Ni5qcGcnO1xuaW1wb3J0IFBpYzY3IGZyb20gJy4vaW1hZ2VzL2RhZDY3LmpwZyc7XG5pbXBvcnQgUGljNjggZnJvbSAnLi9pbWFnZXMvZGFkNjguanBnJztcbmltcG9ydCBQaWM2OSBmcm9tICcuL2ltYWdlcy9kYWQ2OS5qcGcnO1xuaW1wb3J0IFBpYzcwIGZyb20gJy4vaW1hZ2VzL2RhZDcwLmpwZyc7XG5pbXBvcnQgUGljNzEgZnJvbSAnLi9pbWFnZXMvZGFkNzEuanBnJztcbmltcG9ydCBQaWM3MiBmcm9tICcuL2ltYWdlcy9kYWQ3Mi5qcGcnO1xuaW1wb3J0IFBpYzczIGZyb20gJy4vaW1hZ2VzL2RhZDczLmpwZyc7XG5pbXBvcnQgUGljNzQgZnJvbSAnLi9pbWFnZXMvZGFkNzQuanBnJztcbmltcG9ydCBQaWM3NSBmcm9tICcuL2ltYWdlcy9kYWQ3NS5qcGcnO1xuaW1wb3J0IFBpYzc2IGZyb20gJy4vaW1hZ2VzL2RhZDc2LmpwZyc7XG5pbXBvcnQgUGljNzcgZnJvbSAnLi9pbWFnZXMvZGFkNzcuanBnJztcbmltcG9ydCBQaWM3OCBmcm9tICcuL2ltYWdlcy9kYWQ3OC5qcGcnO1xuaW1wb3J0IFBpYzc5IGZyb20gJy4vaW1hZ2VzL2RhZDc5LmpwZyc7XG5pbXBvcnQgUGljODAgZnJvbSAnLi9pbWFnZXMvZGFkODAuanBnJztcbmltcG9ydCBQaWM4MSBmcm9tICcuL2ltYWdlcy9kYWQ4MS5qcGcnO1xuaW1wb3J0IFBpYzgyIGZyb20gJy4vaW1hZ2VzL2RhZDgyLmpwZyc7XG5pbXBvcnQgUGljODMgZnJvbSAnLi9pbWFnZXMvZGFkODMuanBnJztcbmltcG9ydCBQaWM4NCBmcm9tICcuL2ltYWdlcy9kYWQ4NC5qcGcnO1xuaW1wb3J0IFBpYzg1IGZyb20gJy4vaW1hZ2VzL2RhZDg1LmpwZyc7XG5pbXBvcnQgUGljODYgZnJvbSAnLi9pbWFnZXMvZGFkODYuanBnJztcbmltcG9ydCBQaWM4NyBmcm9tICcuL2ltYWdlcy9kYWQ4Ny5qcGcnO1xuaW1wb3J0IFBpYzg4IGZyb20gJy4vaW1hZ2VzL2RhZDg4LmpwZyc7XG5pbXBvcnQgUGljODkgZnJvbSAnLi9pbWFnZXMvZGFkODkuanBnJztcbmltcG9ydCBQaWM5MCBmcm9tICcuL2ltYWdlcy9kYWQ5MC5qcGcnO1xuaW1wb3J0IFBpYzkxIGZyb20gJy4vaW1hZ2VzL2RhZDkxLmpwZyc7XG5pbXBvcnQgUGljOTIgZnJvbSAnLi9pbWFnZXMvZGFkOTIuanBnJztcbmltcG9ydCBQaWM5MyBmcm9tICcuL2ltYWdlcy9kYWQ5My5qcGcnO1xuaW1wb3J0IFBpYzk0IGZyb20gJy4vaW1hZ2VzL2RhZDk0LmpwZyc7XG5pbXBvcnQgUGljOTUgZnJvbSAnLi9pbWFnZXMvZGFkOTUuanBnJztcbmltcG9ydCBQaWM5NiBmcm9tICcuL2ltYWdlcy9kYWQ5Ni5qcGcnO1xuaW1wb3J0IFBpYzk3IGZyb20gJy4vaW1hZ2VzL2RhZDk3LmpwZyc7XG5pbXBvcnQgUGljOTggZnJvbSAnLi9pbWFnZXMvZGFkOTguanBnJztcbmltcG9ydCBQaWM5OSBmcm9tICcuL2ltYWdlcy9kYWQ5OS5qcGcnO1xuaW1wb3J0IFBpYzEwMCBmcm9tICcuL2ltYWdlcy9kYWQxMDAuanBnJztcbmltcG9ydCBQaWMxMDEgZnJvbSAnLi9pbWFnZXMvZGFkMTAxLmpwZyc7XG5pbXBvcnQgUGljMTAyIGZyb20gJy4vaW1hZ2VzL2RhZDEwMi5qcGcnO1xuaW1wb3J0IFBpYzEwMyBmcm9tICcuL2ltYWdlcy9kYWQxMDMuanBnJztcbmltcG9ydCBQaWMxMDQgZnJvbSAnLi9pbWFnZXMvZGFkMTA0LmpwZyc7XG5pbXBvcnQgUGljMTA1IGZyb20gJy4vaW1hZ2VzL2RhZDEwNS5qcGcnO1xuaW1wb3J0IFBpYzEwNiBmcm9tICcuL2ltYWdlcy9kYWQxMDYuanBnJztcbmltcG9ydCBQaWMxMDcgZnJvbSAnLi9pbWFnZXMvZGFkMTA3LmpwZyc7XG5pbXBvcnQgUGljMTA4IGZyb20gJy4vaW1hZ2VzL2RhZDEwOC5qcGcnO1xuaW1wb3J0IFBpYzEwOSBmcm9tICcuL2ltYWdlcy9kYWQxMDkuanBnJztcbmltcG9ydCBQaWMxMTAgZnJvbSAnLi9pbWFnZXMvZGFkMTEwLmpwZyc7XG5pbXBvcnQgUGljMTExIGZyb20gJy4vaW1hZ2VzL2RhZDExMS5qcGcnO1xuaW1wb3J0IFBpYzExMiBmcm9tICcuL2ltYWdlcy9kYWQxMTIuanBnJztcbmltcG9ydCBQaWMxMTMgZnJvbSAnLi9pbWFnZXMvZGFkMTEzLmpwZyc7XG5pbXBvcnQgUGljMTE0IGZyb20gJy4vaW1hZ2VzL2RhZDExNC5qcGcnO1xuaW1wb3J0IFBpYzExNSBmcm9tICcuL2ltYWdlcy9kYWQxMTUuanBnJztcbmltcG9ydCBQaWMxMTYgZnJvbSAnLi9pbWFnZXMvZGFkMTE2LmpwZyc7XG5pbXBvcnQgUGljMTE3IGZyb20gJy4vaW1hZ2VzL2RhZDExNy5qcGcnO1xuaW1wb3J0IFBpYzExOCBmcm9tICcuL2ltYWdlcy9kYWQxMTguanBnJztcbmltcG9ydCBQaWMxMTkgZnJvbSAnLi9pbWFnZXMvZGFkMTE5LmpwZyc7XG5pbXBvcnQgUGljMTIwIGZyb20gJy4vaW1hZ2VzL2RhZDEyMC5qcGcnO1xuaW1wb3J0IFBpYzEyMSBmcm9tICcuL2ltYWdlcy9kYWQxMjEuanBnJztcbmltcG9ydCBQaWMxMjIgZnJvbSAnLi9pbWFnZXMvZGFkMTIyLmpwZyc7XG5pbXBvcnQgUGljMTIzIGZyb20gJy4vaW1hZ2VzL2RhZDEyMy5qcGcnO1xuaW1wb3J0IFBpYzEyNCBmcm9tICcuL2ltYWdlcy9kYWQxMjQuanBnJztcbmltcG9ydCBQaWMxMjUgZnJvbSAnLi9pbWFnZXMvZGFkMTI1LmpwZyc7XG5pbXBvcnQgUGljMTI2IGZyb20gJy4vaW1hZ2VzL2RhZDEyNi5qcGcnO1xuaW1wb3J0IFBpYzEyNyBmcm9tICcuL2ltYWdlcy9kYWQxMjcuanBnJztcbmltcG9ydCBQaWMxMjggZnJvbSAnLi9pbWFnZXMvZGFkMTI4LmpwZyc7XG5pbXBvcnQgUGljMTI5IGZyb20gJy4vaW1hZ2VzL2RhZDEyOS5qcGcnO1xuaW1wb3J0IFBpYzEzMCBmcm9tICcuL2ltYWdlcy9kYWQxMzAuanBnJztcbmltcG9ydCBQaWMxMzEgZnJvbSAnLi9pbWFnZXMvZGFkMTMxLmpwZyc7XG5pbXBvcnQgUGljMTMyIGZyb20gJy4vaW1hZ2VzL2RhZDEzMi5qcGcnO1xuaW1wb3J0IFBpYzEzMyBmcm9tICcuL2ltYWdlcy9kYWQxMzMuanBnJztcbmltcG9ydCBQaWMxMzQgZnJvbSAnLi9pbWFnZXMvZGFkMTM0LmpwZyc7XG5pbXBvcnQgUGljMTM1IGZyb20gJy4vaW1hZ2VzL2RhZDEzNS5qcGcnO1xuaW1wb3J0IFBpYzEzNiBmcm9tICcuL2ltYWdlcy9kYWQxMzYuanBnJztcbmltcG9ydCBQaWMxMzcgZnJvbSAnLi9pbWFnZXMvZGFkMTM3LmpwZyc7XG5pbXBvcnQgUGljMTM4IGZyb20gJy4vaW1hZ2VzL2RhZDEzOC5qcGcnO1xuaW1wb3J0IFBpYzEzOSBmcm9tICcuL2ltYWdlcy9kYWQxMzkuanBnJztcbmltcG9ydCBQaWMxNDAgZnJvbSAnLi9pbWFnZXMvZGFkMTQwLmpwZyc7XG5pbXBvcnQgUGljMTQxIGZyb20gJy4vaW1hZ2VzL2RhZDE0MS5qcGcnO1xuaW1wb3J0IFBpYzE0MiBmcm9tICcuL2ltYWdlcy9kYWQxNDIuanBnJztcbmltcG9ydCBQaWMxNDMgZnJvbSAnLi9pbWFnZXMvZGFkMTQzLmpwZyc7XG5pbXBvcnQgUGljMTQ0IGZyb20gJy4vaW1hZ2VzL2RhZDE0NC5qcGcnO1xuaW1wb3J0IFBpYzE0NSBmcm9tICcuL2ltYWdlcy9kYWQxNDUuanBnJztcbmltcG9ydCBQaWMxNDYgZnJvbSAnLi9pbWFnZXMvZGFkMTQ2LmpwZyc7XG5pbXBvcnQgUGljMTQ3IGZyb20gJy4vaW1hZ2VzL2RhZDE0Ny5qcGcnO1xuaW1wb3J0IFBpYzE0OCBmcm9tICcuL2ltYWdlcy9kYWQxNDguanBnJztcbmltcG9ydCBQaWMxNDkgZnJvbSAnLi9pbWFnZXMvZGFkMTQ5LmpwZyc7XG5pbXBvcnQgUGljMTUwIGZyb20gJy4vaW1hZ2VzL2RhZDE1MC5qcGcnO1xuaW1wb3J0IFBpYzE1MSBmcm9tICcuL2ltYWdlcy9kYWQxNTEuanBnJztcbmltcG9ydCBQaWMxNTIgZnJvbSAnLi9pbWFnZXMvZGFkMTUyLmpwZyc7XG5pbXBvcnQgUGljMTUzIGZyb20gJy4vaW1hZ2VzL2RhZDE1My5qcGcnO1xuaW1wb3J0IFBpYzE1NCBmcm9tICcuL2ltYWdlcy9kYWQxNTQuanBnJztcbmltcG9ydCBQaWMxNTUgZnJvbSAnLi9pbWFnZXMvZGFkMTU1LmpwZyc7XG5pbXBvcnQgUGljMTU2IGZyb20gJy4vaW1hZ2VzL2RhZDE1Ni5qcGcnO1xuXG5jb25zdCBpbWFnZXMgPSBbXTtcblxuY29uc3QgZGFkMSA9IG5ldyBJbWFnZSgpO1xuZGFkMS5zcmMgPSBQaWMxO1xuaW1hZ2VzLnB1c2goZGFkMSk7XG5cbmNvbnN0IGRhZDIgPSBuZXcgSW1hZ2UoKTtcbmRhZDIuc3JjID0gUGljMjtcbmltYWdlcy5wdXNoKGRhZDIpO1xuXG5jb25zdCBkYWQzID0gbmV3IEltYWdlKCk7XG5kYWQzLnNyYyA9IFBpYzM7XG5pbWFnZXMucHVzaChkYWQzKTtcblxuY29uc3QgZGFkNCA9IG5ldyBJbWFnZSgpO1xuZGFkNC5zcmMgPSBQaWM0O1xuaW1hZ2VzLnB1c2goZGFkNCk7XG5cbmNvbnN0IGRhZDUgPSBuZXcgSW1hZ2UoKTtcbmRhZDUuc3JjID0gUGljNTtcbmltYWdlcy5wdXNoKGRhZDUpO1xuXG5jb25zdCBkYWQ2ID0gbmV3IEltYWdlKCk7XG5kYWQ2LnNyYyA9IFBpYzY7XG5pbWFnZXMucHVzaChkYWQ2KTtcblxuY29uc3QgZGFkNyA9IG5ldyBJbWFnZSgpO1xuZGFkNy5zcmMgPSBQaWM3O1xuaW1hZ2VzLnB1c2goZGFkNyk7XG5cbmNvbnN0IGRhZDggPSBuZXcgSW1hZ2UoKTtcbmRhZDguc3JjID0gUGljODtcbmltYWdlcy5wdXNoKGRhZDgpO1xuXG5jb25zdCBkYWQ5ID0gbmV3IEltYWdlKCk7XG5kYWQ5LnNyYyA9IFBpYzk7XG5pbWFnZXMucHVzaChkYWQ5KTtcblxuY29uc3QgZGFkMTAgPSBuZXcgSW1hZ2UoKTtcbmRhZDEwLnNyYyA9IFBpYzEwO1xuaW1hZ2VzLnB1c2goZGFkMTApO1xuXG5jb25zdCBkYWQxMSA9IG5ldyBJbWFnZSgpO1xuZGFkMTEuc3JjID0gUGljMTE7XG5pbWFnZXMucHVzaChkYWQxMSk7XG5cbmNvbnN0IGRhZDEyID0gbmV3IEltYWdlKCk7XG5kYWQxMi5zcmMgPSBQaWMxMjtcbmltYWdlcy5wdXNoKGRhZDEyKTtcblxuY29uc3QgZGFkMTMgPSBuZXcgSW1hZ2UoKTtcbmRhZDEzLnNyYyA9IFBpYzEzO1xuaW1hZ2VzLnB1c2goZGFkMTMpO1xuXG5jb25zdCBkYWQxNCA9IG5ldyBJbWFnZSgpO1xuZGFkMTQuc3JjID0gUGljMTQ7XG5pbWFnZXMucHVzaChkYWQxNCk7XG5cbmNvbnN0IGRhZDE1ID0gbmV3IEltYWdlKCk7XG5kYWQxNS5zcmMgPSBQaWMxNTtcbmltYWdlcy5wdXNoKGRhZDE1KTtcblxuY29uc3QgZGFkMTYgPSBuZXcgSW1hZ2UoKTtcbmRhZDE2LnNyYyA9IFBpYzE2O1xuaW1hZ2VzLnB1c2goZGFkMTYpO1xuXG5jb25zdCBkYWQxNyA9IG5ldyBJbWFnZSgpO1xuZGFkMTcuc3JjID0gUGljMTc7XG5pbWFnZXMucHVzaChkYWQxNyk7XG5cbmNvbnN0IGRhZDE4ID0gbmV3IEltYWdlKCk7XG5kYWQxOC5zcmMgPSBQaWMxODtcbmltYWdlcy5wdXNoKGRhZDE4KTtcblxuY29uc3QgZGFkMTkgPSBuZXcgSW1hZ2UoKTtcbmRhZDE5LnNyYyA9IFBpYzE5O1xuaW1hZ2VzLnB1c2goZGFkMTkpO1xuXG5jb25zdCBkYWQyMCA9IG5ldyBJbWFnZSgpO1xuZGFkMjAuc3JjID0gUGljMjA7XG5pbWFnZXMucHVzaChkYWQyMCk7XG5cbmNvbnN0IGRhZDIxID0gbmV3IEltYWdlKCk7XG5kYWQyMS5zcmMgPSBQaWMyMTtcbmltYWdlcy5wdXNoKGRhZDIxKTtcblxuY29uc3QgZGFkMjIgPSBuZXcgSW1hZ2UoKTtcbmRhZDIyLnNyYyA9IFBpYzIyO1xuaW1hZ2VzLnB1c2goZGFkMjIpO1xuXG5jb25zdCBkYWQyMyA9IG5ldyBJbWFnZSgpO1xuZGFkMjMuc3JjID0gUGljMjM7XG5pbWFnZXMucHVzaChkYWQyMyk7XG5cbmNvbnN0IGRhZDI0ID0gbmV3IEltYWdlKCk7XG5kYWQyNC5zcmMgPSBQaWMyNDtcbmltYWdlcy5wdXNoKGRhZDI0KTtcblxuY29uc3QgZGFkMjUgPSBuZXcgSW1hZ2UoKTtcbmRhZDI1LnNyYyA9IFBpYzI1O1xuaW1hZ2VzLnB1c2goZGFkMjUpO1xuXG5jb25zdCBkYWQyNiA9IG5ldyBJbWFnZSgpO1xuZGFkMjYuc3JjID0gUGljMjY7XG5pbWFnZXMucHVzaChkYWQyNik7XG5cbmNvbnN0IGRhZDI3ID0gbmV3IEltYWdlKCk7XG5kYWQyNy5zcmMgPSBQaWMyNztcbmltYWdlcy5wdXNoKGRhZDI3KTtcblxuY29uc3QgZGFkMjggPSBuZXcgSW1hZ2UoKTtcbmRhZDI4LnNyYyA9IFBpYzI4O1xuaW1hZ2VzLnB1c2goZGFkMjgpO1xuXG5jb25zdCBkYWQyOSA9IG5ldyBJbWFnZSgpO1xuZGFkMjkuc3JjID0gUGljMjk7XG5pbWFnZXMucHVzaChkYWQyOSk7XG5cbmNvbnN0IGRhZDMwID0gbmV3IEltYWdlKCk7XG5kYWQzMC5zcmMgPSBQaWMzMDtcbmltYWdlcy5wdXNoKGRhZDMwKTtcblxuY29uc3QgZGFkMzEgPSBuZXcgSW1hZ2UoKTtcbmRhZDMxLnNyYyA9IFBpYzMxO1xuaW1hZ2VzLnB1c2goZGFkMzEpO1xuXG5jb25zdCBkYWQzMiA9IG5ldyBJbWFnZSgpO1xuZGFkMzIuc3JjID0gUGljMzI7XG5pbWFnZXMucHVzaChkYWQzMik7XG5cbmNvbnN0IGRhZDMzID0gbmV3IEltYWdlKCk7XG5kYWQzMy5zcmMgPSBQaWMzMztcbmltYWdlcy5wdXNoKGRhZDMzKTtcblxuY29uc3QgZGFkMzQgPSBuZXcgSW1hZ2UoKTtcbmRhZDM0LnNyYyA9IFBpYzM0O1xuaW1hZ2VzLnB1c2goZGFkMzQpO1xuXG5jb25zdCBkYWQzNSA9IG5ldyBJbWFnZSgpO1xuZGFkMzUuc3JjID0gUGljMzU7XG5pbWFnZXMucHVzaChkYWQzNSk7XG5cbmNvbnN0IGRhZDM2ID0gbmV3IEltYWdlKCk7XG5kYWQzNi5zcmMgPSBQaWMzNjtcbmltYWdlcy5wdXNoKGRhZDM2KTtcblxuY29uc3QgZGFkMzcgPSBuZXcgSW1hZ2UoKTtcbmRhZDM3LnNyYyA9IFBpYzM3O1xuaW1hZ2VzLnB1c2goZGFkMzcpO1xuXG5jb25zdCBkYWQzOCA9IG5ldyBJbWFnZSgpO1xuZGFkMzguc3JjID0gUGljMzg7XG5pbWFnZXMucHVzaChkYWQzOCk7XG5cbmNvbnN0IGRhZDM5ID0gbmV3IEltYWdlKCk7XG5kYWQzOS5zcmMgPSBQaWMzOTtcbmltYWdlcy5wdXNoKGRhZDM5KTtcblxuY29uc3QgZGFkNDAgPSBuZXcgSW1hZ2UoKTtcbmRhZDQwLnNyYyA9IFBpYzQwO1xuaW1hZ2VzLnB1c2goZGFkNDApO1xuXG5jb25zdCBkYWQ0MSA9IG5ldyBJbWFnZSgpO1xuZGFkNDEuc3JjID0gUGljNDE7XG5pbWFnZXMucHVzaChkYWQ0MSk7XG5cbmNvbnN0IGRhZDQyID0gbmV3IEltYWdlKCk7XG5kYWQ0Mi5zcmMgPSBQaWM0MjtcbmltYWdlcy5wdXNoKGRhZDQyKTtcblxuY29uc3QgZGFkNDMgPSBuZXcgSW1hZ2UoKTtcbmRhZDQzLnNyYyA9IFBpYzQzO1xuaW1hZ2VzLnB1c2goZGFkNDMpO1xuXG5jb25zdCBkYWQ0NCA9IG5ldyBJbWFnZSgpO1xuZGFkNDQuc3JjID0gUGljNDQ7XG5pbWFnZXMucHVzaChkYWQ0NCk7XG5cbmNvbnN0IGRhZDQ1ID0gbmV3IEltYWdlKCk7XG5kYWQ0NS5zcmMgPSBQaWM0NTtcbmltYWdlcy5wdXNoKGRhZDQ1KTtcblxuY29uc3QgZGFkNDYgPSBuZXcgSW1hZ2UoKTtcbmRhZDQ2LnNyYyA9IFBpYzQ2O1xuaW1hZ2VzLnB1c2goZGFkNDYpO1xuXG5jb25zdCBkYWQ0NyA9IG5ldyBJbWFnZSgpO1xuZGFkNDcuc3JjID0gUGljNDc7XG5pbWFnZXMucHVzaChkYWQ0Nyk7XG5cbmNvbnN0IGRhZDQ4ID0gbmV3IEltYWdlKCk7XG5kYWQ0OC5zcmMgPSBQaWM0ODtcbmltYWdlcy5wdXNoKGRhZDQ4KTtcblxuY29uc3QgZGFkNDkgPSBuZXcgSW1hZ2UoKTtcbmRhZDQ5LnNyYyA9IFBpYzQ5O1xuaW1hZ2VzLnB1c2goZGFkNDkpO1xuXG5jb25zdCBkYWQ1MCA9IG5ldyBJbWFnZSgpO1xuZGFkNTAuc3JjID0gUGljNTA7XG5pbWFnZXMucHVzaChkYWQ1MCk7XG5cbmNvbnN0IGRhZDUxID0gbmV3IEltYWdlKCk7XG5kYWQ1MS5zcmMgPSBQaWM1MTtcbmltYWdlcy5wdXNoKGRhZDUxKTtcblxuY29uc3QgZGFkNTIgPSBuZXcgSW1hZ2UoKTtcbmRhZDUyLnNyYyA9IFBpYzUyO1xuaW1hZ2VzLnB1c2goZGFkNTIpO1xuXG5jb25zdCBkYWQ1MyA9IG5ldyBJbWFnZSgpO1xuZGFkNTMuc3JjID0gUGljNTM7XG5pbWFnZXMucHVzaChkYWQ1Myk7XG5cbmNvbnN0IGRhZDU0ID0gbmV3IEltYWdlKCk7XG5kYWQ1NC5zcmMgPSBQaWM1NDtcbmltYWdlcy5wdXNoKGRhZDU0KTtcblxuY29uc3QgZGFkNTUgPSBuZXcgSW1hZ2UoKTtcbmRhZDU1LnNyYyA9IFBpYzU1O1xuaW1hZ2VzLnB1c2goZGFkNTUpO1xuXG5jb25zdCBkYWQ1NiA9IG5ldyBJbWFnZSgpO1xuZGFkNTYuc3JjID0gUGljNTY7XG5pbWFnZXMucHVzaChkYWQ1Nik7XG5cbmNvbnN0IGRhZDU3ID0gbmV3IEltYWdlKCk7XG5kYWQ1Ny5zcmMgPSBQaWM1NztcbmltYWdlcy5wdXNoKGRhZDU3KTtcblxuY29uc3QgZGFkNTggPSBuZXcgSW1hZ2UoKTtcbmRhZDU4LnNyYyA9IFBpYzU4O1xuaW1hZ2VzLnB1c2goZGFkNTgpO1xuXG5jb25zdCBkYWQ1OSA9IG5ldyBJbWFnZSgpO1xuZGFkNTkuc3JjID0gUGljNTk7XG5pbWFnZXMucHVzaChkYWQ1OSk7XG5cbmNvbnN0IGRhZDYwID0gbmV3IEltYWdlKCk7XG5kYWQ2MC5zcmMgPSBQaWM2MDtcbmltYWdlcy5wdXNoKGRhZDYwKTtcblxuY29uc3QgZGFkNjEgPSBuZXcgSW1hZ2UoKTtcbmRhZDYxLnNyYyA9IFBpYzYxO1xuaW1hZ2VzLnB1c2goZGFkNjEpO1xuXG5jb25zdCBkYWQ2MiA9IG5ldyBJbWFnZSgpO1xuZGFkNjIuc3JjID0gUGljNjI7XG5pbWFnZXMucHVzaChkYWQ2Mik7XG5cbmNvbnN0IGRhZDYzID0gbmV3IEltYWdlKCk7XG5kYWQ2My5zcmMgPSBQaWM2MztcbmltYWdlcy5wdXNoKGRhZDYzKTtcblxuY29uc3QgZGFkNjQgPSBuZXcgSW1hZ2UoKTtcbmRhZDY0LnNyYyA9IFBpYzY0O1xuaW1hZ2VzLnB1c2goZGFkNjQpO1xuXG5jb25zdCBkYWQ2NSA9IG5ldyBJbWFnZSgpO1xuZGFkNjUuc3JjID0gUGljNjU7XG5pbWFnZXMucHVzaChkYWQ2NSk7XG5cbmNvbnN0IGRhZDY2ID0gbmV3IEltYWdlKCk7XG5kYWQ2Ni5zcmMgPSBQaWM2NjtcbmltYWdlcy5wdXNoKGRhZDY2KTtcblxuY29uc3QgZGFkNjcgPSBuZXcgSW1hZ2UoKTtcbmRhZDY3LnNyYyA9IFBpYzY3O1xuaW1hZ2VzLnB1c2goZGFkNjcpO1xuXG5jb25zdCBkYWQ2OCA9IG5ldyBJbWFnZSgpO1xuZGFkNjguc3JjID0gUGljNjg7XG5pbWFnZXMucHVzaChkYWQ2OCk7XG5cbmNvbnN0IGRhZDY5ID0gbmV3IEltYWdlKCk7XG5kYWQ2OS5zcmMgPSBQaWM2OTtcbmltYWdlcy5wdXNoKGRhZDY5KTtcblxuY29uc3QgZGFkNzAgPSBuZXcgSW1hZ2UoKTtcbmRhZDcwLnNyYyA9IFBpYzcwO1xuaW1hZ2VzLnB1c2goZGFkNzApO1xuXG5jb25zdCBkYWQ3MSA9IG5ldyBJbWFnZSgpO1xuZGFkNzEuc3JjID0gUGljNzE7XG5pbWFnZXMucHVzaChkYWQ3MSk7XG5cbmNvbnN0IGRhZDcyID0gbmV3IEltYWdlKCk7XG5kYWQ3Mi5zcmMgPSBQaWM3MjtcbmltYWdlcy5wdXNoKGRhZDcyKTtcblxuY29uc3QgZGFkNzMgPSBuZXcgSW1hZ2UoKTtcbmRhZDczLnNyYyA9IFBpYzczO1xuaW1hZ2VzLnB1c2goZGFkNzMpO1xuXG5jb25zdCBkYWQ3NCA9IG5ldyBJbWFnZSgpO1xuZGFkNzQuc3JjID0gUGljNzQ7XG5pbWFnZXMucHVzaChkYWQ3NCk7XG5cbmNvbnN0IGRhZDc1ID0gbmV3IEltYWdlKCk7XG5kYWQ3NS5zcmMgPSBQaWM3NTtcbmltYWdlcy5wdXNoKGRhZDc1KTtcblxuY29uc3QgZGFkNzYgPSBuZXcgSW1hZ2UoKTtcbmRhZDc2LnNyYyA9IFBpYzc2O1xuaW1hZ2VzLnB1c2goZGFkNzYpO1xuXG5jb25zdCBkYWQ3NyA9IG5ldyBJbWFnZSgpO1xuZGFkNzcuc3JjID0gUGljNzc7XG5pbWFnZXMucHVzaChkYWQ3Nyk7XG5cbmNvbnN0IGRhZDc4ID0gbmV3IEltYWdlKCk7XG5kYWQ3OC5zcmMgPSBQaWM3ODtcbmltYWdlcy5wdXNoKGRhZDc4KTtcblxuY29uc3QgZGFkNzkgPSBuZXcgSW1hZ2UoKTtcbmRhZDc5LnNyYyA9IFBpYzc5O1xuaW1hZ2VzLnB1c2goZGFkNzkpO1xuXG5jb25zdCBkYWQ4MCA9IG5ldyBJbWFnZSgpO1xuZGFkODAuc3JjID0gUGljODA7XG5pbWFnZXMucHVzaChkYWQ4MCk7XG5cbmNvbnN0IGRhZDgxID0gbmV3IEltYWdlKCk7XG5kYWQ4MS5zcmMgPSBQaWM4MTtcbmltYWdlcy5wdXNoKGRhZDgxKTtcblxuY29uc3QgZGFkODIgPSBuZXcgSW1hZ2UoKTtcbmRhZDgyLnNyYyA9IFBpYzgyO1xuaW1hZ2VzLnB1c2goZGFkODIpO1xuXG5jb25zdCBkYWQ4MyA9IG5ldyBJbWFnZSgpO1xuZGFkODMuc3JjID0gUGljODM7XG5pbWFnZXMucHVzaChkYWQ4Myk7XG5cbmNvbnN0IGRhZDg0ID0gbmV3IEltYWdlKCk7XG5kYWQ4NC5zcmMgPSBQaWM4NDtcbmltYWdlcy5wdXNoKGRhZDg0KTtcblxuY29uc3QgZGFkODUgPSBuZXcgSW1hZ2UoKTtcbmRhZDg1LnNyYyA9IFBpYzg1O1xuaW1hZ2VzLnB1c2goZGFkODUpO1xuXG5jb25zdCBkYWQ4NiA9IG5ldyBJbWFnZSgpO1xuZGFkODYuc3JjID0gUGljODY7XG5pbWFnZXMucHVzaChkYWQ4Nik7XG5cbmNvbnN0IGRhZDg3ID0gbmV3IEltYWdlKCk7XG5kYWQ4Ny5zcmMgPSBQaWM4NztcbmltYWdlcy5wdXNoKGRhZDg3KTtcblxuY29uc3QgZGFkODggPSBuZXcgSW1hZ2UoKTtcbmRhZDg4LnNyYyA9IFBpYzg4O1xuaW1hZ2VzLnB1c2goZGFkODgpO1xuXG5jb25zdCBkYWQ4OSA9IG5ldyBJbWFnZSgpO1xuZGFkODkuc3JjID0gUGljODk7XG5pbWFnZXMucHVzaChkYWQ4OSk7XG5cbmNvbnN0IGRhZDkwID0gbmV3IEltYWdlKCk7XG5kYWQ5MC5zcmMgPSBQaWM5MDtcbmltYWdlcy5wdXNoKGRhZDkwKTtcblxuY29uc3QgZGFkOTEgPSBuZXcgSW1hZ2UoKTtcbmRhZDkxLnNyYyA9IFBpYzkxO1xuaW1hZ2VzLnB1c2goZGFkOTEpO1xuXG5jb25zdCBkYWQ5MiA9IG5ldyBJbWFnZSgpO1xuZGFkOTIuc3JjID0gUGljOTI7XG5pbWFnZXMucHVzaChkYWQ5Mik7XG5cbmNvbnN0IGRhZDkzID0gbmV3IEltYWdlKCk7XG5kYWQ5My5zcmMgPSBQaWM5MztcbmltYWdlcy5wdXNoKGRhZDkzKTtcblxuY29uc3QgZGFkOTQgPSBuZXcgSW1hZ2UoKTtcbmRhZDk0LnNyYyA9IFBpYzk0O1xuaW1hZ2VzLnB1c2goZGFkOTQpO1xuXG5jb25zdCBkYWQ5NSA9IG5ldyBJbWFnZSgpO1xuZGFkOTUuc3JjID0gUGljOTU7XG5pbWFnZXMucHVzaChkYWQ5NSk7XG5cbmNvbnN0IGRhZDk2ID0gbmV3IEltYWdlKCk7XG5kYWQ5Ni5zcmMgPSBQaWM5NjtcbmltYWdlcy5wdXNoKGRhZDk2KTtcblxuY29uc3QgZGFkOTcgPSBuZXcgSW1hZ2UoKTtcbmRhZDk3LnNyYyA9IFBpYzk3O1xuaW1hZ2VzLnB1c2goZGFkOTcpO1xuXG5jb25zdCBkYWQ5OCA9IG5ldyBJbWFnZSgpO1xuZGFkOTguc3JjID0gUGljOTg7XG5pbWFnZXMucHVzaChkYWQ5OCk7XG5cbmNvbnN0IGRhZDk5ID0gbmV3IEltYWdlKCk7XG5kYWQ5OS5zcmMgPSBQaWM5OTtcbmltYWdlcy5wdXNoKGRhZDk5KTtcblxuY29uc3QgZGFkMTAwID0gbmV3IEltYWdlKCk7XG5kYWQxMDAuc3JjID0gUGljMTAwO1xuaW1hZ2VzLnB1c2goZGFkMTAwKTtcblxuY29uc3QgZGFkMTAxID0gbmV3IEltYWdlKCk7XG5kYWQxMDEuc3JjID0gUGljMTAxO1xuaW1hZ2VzLnB1c2goZGFkMTAxKTtcblxuY29uc3QgZGFkMTAyID0gbmV3IEltYWdlKCk7XG5kYWQxMDIuc3JjID0gUGljMTAyO1xuaW1hZ2VzLnB1c2goZGFkMTAyKTtcblxuY29uc3QgZGFkMTAzID0gbmV3IEltYWdlKCk7XG5kYWQxMDMuc3JjID0gUGljMTAzO1xuaW1hZ2VzLnB1c2goZGFkMTAzKTtcblxuY29uc3QgZGFkMTA0ID0gbmV3IEltYWdlKCk7XG5kYWQxMDQuc3JjID0gUGljMTA0O1xuaW1hZ2VzLnB1c2goZGFkMTA0KTtcblxuY29uc3QgZGFkMTA1ID0gbmV3IEltYWdlKCk7XG5kYWQxMDUuc3JjID0gUGljMTA1O1xuaW1hZ2VzLnB1c2goZGFkMTA1KTtcblxuY29uc3QgZGFkMTA2ID0gbmV3IEltYWdlKCk7XG5kYWQxMDYuc3JjID0gUGljMTA2O1xuaW1hZ2VzLnB1c2goZGFkMTA2KTtcblxuY29uc3QgZGFkMTA3ID0gbmV3IEltYWdlKCk7XG5kYWQxMDcuc3JjID0gUGljMTA3O1xuaW1hZ2VzLnB1c2goZGFkMTA3KTtcblxuY29uc3QgZGFkMTA4ID0gbmV3IEltYWdlKCk7XG5kYWQxMDguc3JjID0gUGljMTA4O1xuaW1hZ2VzLnB1c2goZGFkMTA4KTtcblxuY29uc3QgZGFkMTA5ID0gbmV3IEltYWdlKCk7XG5kYWQxMDkuc3JjID0gUGljMTA5O1xuaW1hZ2VzLnB1c2goZGFkMTA5KTtcblxuY29uc3QgZGFkMTEwID0gbmV3IEltYWdlKCk7XG5kYWQxMTAuc3JjID0gUGljMTEwO1xuaW1hZ2VzLnB1c2goZGFkMTEwKTtcblxuY29uc3QgZGFkMTExID0gbmV3IEltYWdlKCk7XG5kYWQxMTEuc3JjID0gUGljMTExO1xuaW1hZ2VzLnB1c2goZGFkMTExKTtcblxuY29uc3QgZGFkMTEyID0gbmV3IEltYWdlKCk7XG5kYWQxMTIuc3JjID0gUGljMTEyO1xuaW1hZ2VzLnB1c2goZGFkMTEyKTtcblxuY29uc3QgZGFkMTEzID0gbmV3IEltYWdlKCk7XG5kYWQxMTMuc3JjID0gUGljMTEzO1xuaW1hZ2VzLnB1c2goZGFkMTEzKTtcblxuY29uc3QgZGFkMTE0ID0gbmV3IEltYWdlKCk7XG5kYWQxMTQuc3JjID0gUGljMTE0O1xuaW1hZ2VzLnB1c2goZGFkMTE0KTtcblxuY29uc3QgZGFkMTE1ID0gbmV3IEltYWdlKCk7XG5kYWQxMTUuc3JjID0gUGljMTE1O1xuaW1hZ2VzLnB1c2goZGFkMTE1KTtcblxuY29uc3QgZGFkMTE2ID0gbmV3IEltYWdlKCk7XG5kYWQxMTYuc3JjID0gUGljMTE2O1xuaW1hZ2VzLnB1c2goZGFkMTE2KTtcblxuY29uc3QgZGFkMTE3ID0gbmV3IEltYWdlKCk7XG5kYWQxMTcuc3JjID0gUGljMTE3O1xuaW1hZ2VzLnB1c2goZGFkMTE3KTtcblxuY29uc3QgZGFkMTE4ID0gbmV3IEltYWdlKCk7XG5kYWQxMTguc3JjID0gUGljMTE4O1xuaW1hZ2VzLnB1c2goZGFkMTE4KTtcblxuY29uc3QgZGFkMTE5ID0gbmV3IEltYWdlKCk7XG5kYWQxMTkuc3JjID0gUGljMTE5O1xuaW1hZ2VzLnB1c2goZGFkMTE5KTtcblxuY29uc3QgZGFkMTIwID0gbmV3IEltYWdlKCk7XG5kYWQxMjAuc3JjID0gUGljMTIwO1xuaW1hZ2VzLnB1c2goZGFkMTIwKTtcblxuY29uc3QgZGFkMTIxID0gbmV3IEltYWdlKCk7XG5kYWQxMjEuc3JjID0gUGljMTIxO1xuaW1hZ2VzLnB1c2goZGFkMTIxKTtcblxuY29uc3QgZGFkMTIyID0gbmV3IEltYWdlKCk7XG5kYWQxMjIuc3JjID0gUGljMTIyO1xuaW1hZ2VzLnB1c2goZGFkMTIyKTtcblxuY29uc3QgZGFkMTIzID0gbmV3IEltYWdlKCk7XG5kYWQxMjMuc3JjID0gUGljMTIzO1xuaW1hZ2VzLnB1c2goZGFkMTIzKTtcblxuY29uc3QgZGFkMTI0ID0gbmV3IEltYWdlKCk7XG5kYWQxMjQuc3JjID0gUGljMTI0O1xuaW1hZ2VzLnB1c2goZGFkMTI0KTtcblxuY29uc3QgZGFkMTI1ID0gbmV3IEltYWdlKCk7XG5kYWQxMjUuc3JjID0gUGljMTI1O1xuaW1hZ2VzLnB1c2goZGFkMTI1KTtcblxuY29uc3QgZGFkMTI2ID0gbmV3IEltYWdlKCk7XG5kYWQxMjYuc3JjID0gUGljMTI2O1xuaW1hZ2VzLnB1c2goZGFkMTI2KTtcblxuY29uc3QgZGFkMTI3ID0gbmV3IEltYWdlKCk7XG5kYWQxMjcuc3JjID0gUGljMTI3O1xuaW1hZ2VzLnB1c2goZGFkMTI3KTtcblxuY29uc3QgZGFkMTI4ID0gbmV3IEltYWdlKCk7XG5kYWQxMjguc3JjID0gUGljMTI4O1xuaW1hZ2VzLnB1c2goZGFkMTI4KTtcblxuY29uc3QgZGFkMTI5ID0gbmV3IEltYWdlKCk7XG5kYWQxMjkuc3JjID0gUGljMTI5O1xuaW1hZ2VzLnB1c2goZGFkMTI5KTtcblxuY29uc3QgZGFkMTMwID0gbmV3IEltYWdlKCk7XG5kYWQxMzAuc3JjID0gUGljMTMwO1xuaW1hZ2VzLnB1c2goZGFkMTMwKTtcblxuY29uc3QgZGFkMTMxID0gbmV3IEltYWdlKCk7XG5kYWQxMzEuc3JjID0gUGljMTMxO1xuaW1hZ2VzLnB1c2goZGFkMTMxKTtcblxuY29uc3QgZGFkMTMyID0gbmV3IEltYWdlKCk7XG5kYWQxMzIuc3JjID0gUGljMTMyO1xuaW1hZ2VzLnB1c2goZGFkMTMyKTtcblxuY29uc3QgZGFkMTMzID0gbmV3IEltYWdlKCk7XG5kYWQxMzMuc3JjID0gUGljMTMzO1xuaW1hZ2VzLnB1c2goZGFkMTMzKTtcblxuY29uc3QgZGFkMTM0ID0gbmV3IEltYWdlKCk7XG5kYWQxMzQuc3JjID0gUGljMTM0O1xuaW1hZ2VzLnB1c2goZGFkMTM0KTtcblxuY29uc3QgZGFkMTM1ID0gbmV3IEltYWdlKCk7XG5kYWQxMzUuc3JjID0gUGljMTM1O1xuaW1hZ2VzLnB1c2goZGFkMTM1KTtcblxuY29uc3QgZGFkMTM2ID0gbmV3IEltYWdlKCk7XG5kYWQxMzYuc3JjID0gUGljMTM2O1xuaW1hZ2VzLnB1c2goZGFkMTM2KTtcblxuY29uc3QgZGFkMTM3ID0gbmV3IEltYWdlKCk7XG5kYWQxMzcuc3JjID0gUGljMTM3O1xuaW1hZ2VzLnB1c2goZGFkMTM3KTtcblxuY29uc3QgZGFkMTM4ID0gbmV3IEltYWdlKCk7XG5kYWQxMzguc3JjID0gUGljMTM4O1xuaW1hZ2VzLnB1c2goZGFkMTM4KTtcblxuY29uc3QgZGFkMTM5ID0gbmV3IEltYWdlKCk7XG5kYWQxMzkuc3JjID0gUGljMTM5O1xuaW1hZ2VzLnB1c2goZGFkMTM5KTtcblxuY29uc3QgZGFkMTQwID0gbmV3IEltYWdlKCk7XG5kYWQxNDAuc3JjID0gUGljMTQwO1xuaW1hZ2VzLnB1c2goZGFkMTQwKTtcblxuY29uc3QgZGFkMTQxID0gbmV3IEltYWdlKCk7XG5kYWQxNDEuc3JjID0gUGljMTQxO1xuaW1hZ2VzLnB1c2goZGFkMTQxKTtcblxuY29uc3QgZGFkMTQyID0gbmV3IEltYWdlKCk7XG5kYWQxNDIuc3JjID0gUGljMTQyO1xuaW1hZ2VzLnB1c2goZGFkMTQyKTtcblxuY29uc3QgZGFkMTQzID0gbmV3IEltYWdlKCk7XG5kYWQxNDMuc3JjID0gUGljMTQzO1xuaW1hZ2VzLnB1c2goZGFkMTQzKTtcblxuY29uc3QgZGFkMTQ0ID0gbmV3IEltYWdlKCk7XG5kYWQxNDQuc3JjID0gUGljMTQ0O1xuaW1hZ2VzLnB1c2goZGFkMTQ0KTtcblxuY29uc3QgZGFkMTQ1ID0gbmV3IEltYWdlKCk7XG5kYWQxNDUuc3JjID0gUGljMTQ1O1xuaW1hZ2VzLnB1c2goZGFkMTQ1KTtcblxuY29uc3QgZGFkMTQ2ID0gbmV3IEltYWdlKCk7XG5kYWQxNDYuc3JjID0gUGljMTQ2O1xuaW1hZ2VzLnB1c2goZGFkMTQ2KTtcblxuY29uc3QgZGFkMTQ3ID0gbmV3IEltYWdlKCk7XG5kYWQxNDcuc3JjID0gUGljMTQ3O1xuaW1hZ2VzLnB1c2goZGFkMTQ3KTtcblxuY29uc3QgZGFkMTQ4ID0gbmV3IEltYWdlKCk7XG5kYWQxNDguc3JjID0gUGljMTQ4O1xuaW1hZ2VzLnB1c2goZGFkMTQ4KTtcblxuY29uc3QgZGFkMTQ5ID0gbmV3IEltYWdlKCk7XG5kYWQxNDkuc3JjID0gUGljMTQ5O1xuaW1hZ2VzLnB1c2goZGFkMTQ5KTtcblxuY29uc3QgZGFkMTUwID0gbmV3IEltYWdlKCk7XG5kYWQxNTAuc3JjID0gUGljMTUwO1xuaW1hZ2VzLnB1c2goZGFkMTUwKTtcblxuY29uc3QgZGFkMTUxID0gbmV3IEltYWdlKCk7XG5kYWQxNTEuc3JjID0gUGljMTUxO1xuaW1hZ2VzLnB1c2goZGFkMTUxKTtcblxuY29uc3QgZGFkMTUyID0gbmV3IEltYWdlKCk7XG5kYWQxNTIuc3JjID0gUGljMTUyO1xuaW1hZ2VzLnB1c2goZGFkMTUyKTtcblxuY29uc3QgZGFkMTUzID0gbmV3IEltYWdlKCk7XG5kYWQxNTMuc3JjID0gUGljMTUzO1xuaW1hZ2VzLnB1c2goZGFkMTUzKTtcblxuY29uc3QgZGFkMTU0ID0gbmV3IEltYWdlKCk7XG5kYWQxNTQuc3JjID0gUGljMTU0O1xuaW1hZ2VzLnB1c2goZGFkMTU0KTtcblxuY29uc3QgZGFkMTU1ID0gbmV3IEltYWdlKCk7XG5kYWQxNTUuc3JjID0gUGljMTU1O1xuaW1hZ2VzLnB1c2goZGFkMTU1KTtcblxuY29uc3QgZGFkMTU2ID0gbmV3IEltYWdlKCk7XG5kYWQxNTYuc3JjID0gUGljMTU2O1xuaW1hZ2VzLnB1c2goZGFkMTU2KTtcblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VzO1xuIiwiLy8gdGhpcyBtb2R1bGUgY3JlYXRlcyB3YXZlc3VyZmVyIGF1ZGlvIHBsYXllciBpbnN0YWNlcyBieSBsb29waW5nIG92ZXIgYXJyYXlzXG4vLyBhcyBwYXJhbXMsIHRoZSBmdW5jdGlvbiB0YWtlcyBhbiBhcnJheSBvZiBhdWRpbyBmaWxlcywgYW4gYXJyYXkgb2YgdHJhY2sgdGl0bGVzLFxuLy8gYSB0YXJnZXQgcGFyZW50IERPTSBlbGVtZW50IHRoZSBjb250YWluZXIgZnVsbCBvZiBwbGF5ZXJzIHdpbGwgYmUgYXBwZW5lZCB0byxcbi8vIGFuZCBpbWFnZXMgZm9yIHRoZSBwbGF5IGFuZCBwYXVzZSBidXR0b24uXG4vL1xuLy8ganMgc3RseWxlIGlzIGluY2x1ZGVkIGF0IGVuZCBmb3IgYSBkZWZhdWx0IGxvYWQuXG4vLyBlYWNoIERPTSBlbGVtZW50IGNyZWF0ZWQgZ2V0cyBhIGNzcyBzZWxlY3RvciBzb1xuLy8gaXQgaXMgZXhwZWN0ZWQgdGhhdCB0aGUganMgc3R5bGUgd2lsbCBiZSBjb21tZW50ZWQgb3V0IGFuZCBjdXN0b20gY3NzIGFwcGxpZWRcblxuaW1wb3J0IFdhdmVTdXJmZXIgZnJvbSAnd2F2ZXN1cmZlci5qcyc7XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IChcbiAgYXVkaW9BcnJheSxcbiAgdHJhY2tUaXRsZXMsXG4gIHRhcmdldFBhcmVudCxcbiAgcGxheUltZyxcbiAgcGF1c2VJbWcsXG4pID0+IHtcbiAgbGV0IGluaXRpYXRlZCA9IGZhbHNlO1xuICBjb25zdCB1cGRhdGVpbml0aWF0aW9uID0gKGEpID0+IHtcbiAgICBpbml0aWF0ZWQgPSBhO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGF1ZGlvQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyBjcmVhdGUgYSB0cmFjayBkaXYgdy8gaWQgb2YgdHJhY2tbaV0sIGFkZCBjbGFzcywgYXBwZW5kIHRvIHRhcmdldFBhcmVudFxuICAgIGNvbnN0IHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJhY2suaWQgPSBgdHJhY2ske1tpXX1gO1xuICAgIHRyYWNrLmNsYXNzTGlzdC5hZGQoJ3RyYWNrJyk7XG4gICAgdGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKHRyYWNrKTtcblxuICAgIC8vIGNyZWF0ZSBhY2NvbXBhbnlpbmcgdHJhY2sgdGl0bGUgaW4gRE9NLCBhc3NpZ24gaXQgZnJvbSB0cmFja1RpdGxlc1tpXVxuICAgIGNvbnN0IHRyYWNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFja1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYWNrLXRpdGxlJyk7XG4gICAgdHJhY2tUaXRsZS50ZXh0Q29udGVudCA9IHRyYWNrVGl0bGVzW2ldO1xuICAgIHRyYWNrLmFwcGVuZENoaWxkKHRyYWNrVGl0bGUpO1xuXG4gICAgLy8gY3JlYXRlIHdhdmVzdXJmZXIgaW5zdGFuY2Ugd2l0aCBvcHRpb25zIGFwcGxpZWQsIGFwcGVuZCB0byB0aGUgYWJvdmUgdHJhY2sgZGl2XG4gICAgY29uc3Qgd2F2ZXN1cmZlciA9IFdhdmVTdXJmZXIuY3JlYXRlKHtcbiAgICAgIGNvbnRhaW5lcjogYCN0cmFjayR7W2ldfWAsXG4gICAgICB3YXZlQ29sb3I6ICcjYzRjM2M0JyxcbiAgICAgIHByb2dyZXNzQ29sb3I6ICdyZ2IoMTUyLCA3NywgMTk2KScsXG4gICAgICBoZWlnaHQ6IDg1LFxuICAgICAgYmFyV2lkdGg6IDAsXG4gICAgICBiYXJSYWRpdXM6IDAsXG4gICAgICBjdXJzb3JXaWR0aDogMCxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGRyYWdUb1NlZWs6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBsb2FkIHdhdmVzdXJmZXIgd2l0aCBhdWRpbyBmaWxlXG4gICAgd2F2ZXN1cmZlci5sb2FkKGF1ZGlvQXJyYXlbaV0pO1xuXG4gICAgLy8gb3B0aW9uc0Rpc3BsYXkgY29udGFpbmVyIGZvciBwbGF5L3BhdXNlIGFuZCB0aW1lRGlzcGxheVxuICAgIGNvbnN0IG9wdGlvbnNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uc0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1kaXNwbGF5Jyk7XG4gICAgdHJhY2suYXBwZW5kQ2hpbGQob3B0aW9uc0Rpc3BsYXkpO1xuXG4gICAgLy8gY3JlYXRlIHBsYXkvcGF1c2UgYnV0dG9uXG4gICAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsYXlCdG4uY2xhc3NMaXN0LmFkZCgncGxheS1idG4nKTtcblxuICAgIC8vIGNyZWF0ZSBwbGF5IGltZ1xuICAgIGNvbnN0IHBsYXkgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbGF5LnNyYyA9IHBsYXlJbWc7XG4gICAgcGxheS5jbGFzc0xpc3QuYWRkKCdwbGF5LWltZycpO1xuXG4gICAgLy8gY3JlYXRlIHBhdXNlIGltZ1xuICAgIGNvbnN0IHBhdXNlID0gbmV3IEltYWdlKCk7XG4gICAgcGF1c2Uuc3JjID0gcGF1c2VJbWc7XG4gICAgcGF1c2UuY2xhc3NMaXN0LmFkZCgncGF1c2UtaW1nJyk7XG5cbiAgICAvLyBzZXQgcGxheSBidXR0b24gYXMgZGVmYXVsdCBkaXNwbGF5IG9uIGxvYWRcbiAgICBwbGF5QnRuLmFwcGVuZENoaWxkKHBsYXkpO1xuXG4gICAgLy8gb24gY2xpY2ssIHBsYXlCdG4gcGxheXMgb3IgcGF1c2VzIHRoZSB3YXZlc3VyZmVyIGluc3RhbmNlXG4gICAgcGxheUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgd2F2ZXN1cmZlci5wbGF5UGF1c2UoKTtcbiAgICAgIHVwZGF0ZWluaXRpYXRpb24odHJ1ZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbml0aWF0ZWQpXG4gICAgfTtcblxuICAgIC8vIHdoZW4gcGF1c2VkLCBzaG93IHRoZSBwbGF5IGltZ1xuICAgIHdhdmVzdXJmZXIub24oJ3BhdXNlJywgKCkgPT4ge1xuICAgICAgcGxheUJ0bi5yZXBsYWNlQ2hpbGQocGxheSwgcGF1c2UpO1xuICAgIH0pO1xuXG4gICAgLy8gd2hlbiBwbGF5aW5nLCBzaG93LCB0aGUgcGF1c2UgaW1nXG4gICAgd2F2ZXN1cmZlci5vbigncGxheScsICgpID0+IHtcbiAgICAgIHBsYXlCdG4ucmVwbGFjZUNoaWxkKHBhdXNlLCBwbGF5KTtcbiAgICB9KTtcblxuICAgIC8vIGFwcGVuZCBvcHRpb25zZGlzcGxheSB0byB0cmFja1xuICAgIG9wdGlvbnNEaXNwbGF5LmFwcGVuZENoaWxkKHBsYXlCdG4pO1xuXG4gICAgLy8gdGltZURpc3BsYXkgY29udGFpbmVyLCBjdXJyZW50VGltZSBjb250YWluZXIgYW5kIGR1cmF0aW9uVGltZSBjb250YWluZXIgYW5kIGNsYXNzIGFzc2lnbm1lbnRzXG4gICAgY29uc3QgdGltZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0aW1lLWRpc3BsYXknKTtcblxuICAgIGNvbnN0IGN1cnJlbnREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBkdXJhdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdXJhdGlvbkRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZHVyYXRpb25EaXNwbGF5Jyk7XG5cbiAgICAvLyBkaXZpZGVyIHRvIHNwZXJhdGUgZGlzcGxheXMgYW5kIGl0cyB0ZXh0XG4gICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdmlkZXIuY2xhc3NMaXN0LmFkZCgnZGl2aWRlcicpO1xuICAgIGRpdmlkZXIudGV4dENvbnRlbnQgPSAnLyc7XG5cbiAgICAvLyB0YWtlcyB0aW1lIGluIG1pbGlzZWNvbmRzIGFuZCBmb3JtYXRzIHRvIGEgNjBiYXNlIG1tOnNzIGRpc3BsYXlcbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IFtcbiAgICAgIE1hdGguZmxvb3IoKHRpbWUgJSAzNjAwKSAvIDYwKSwgLy8gbWludXRlc1xuICAgICAgYDAwJHtNYXRoLmZsb29yKHRpbWUgJSA2MCl9YC5zbGljZSgtMiksIC8vIHNlY29uZHNcbiAgICBdLmpvaW4oJzonKTtcblxuICAgIC8vIHNldCBpbml0aWFsIGN1cnJlbnQgdGltZSB0byAwMDowMFxuICAgIGN1cnJlbnREaXNwbGF5LnRleHRDb250ZW50ID0gJzA6MDAnO1xuICAgIC8vIHdoZW5ldmVyIHRyYWNrIHRpbWUgdXBkYXRlcywgdXBkYXRlIGN1cnJlbnQgdGltZSBkaXNwbGF5XG5cbiAgICAvLyB3YXZlc3VyZmVyLm9uKCdzZWVraW5nJywgKCkgPT4ge1xuICAgIC8vICAgY3VycmVudERpc3BsYXkudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHdhdmVzdXJmZXIuZ2V0Q3VycmVudFRpbWUoKSk7XG4gICAgLy8gICBjb25zdCBzZWVrVXBkYXRlID0gd2F2ZXN1cmZlci5nZXRDdXJyZW50VGltZSgpO1xuICAgIC8vICAgd2F2ZXN1cmZlci5zZXRUaW1lKHNlZWtVcGRhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdhdmVzdXJmZXIuZ2V0Q3VycmVudFRpbWUoKSk7XG4gICAgLy8gfSk7XG5cbiAgICB3YXZlc3VyZmVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgY3VycmVudERpc3BsYXkudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHdhdmVzdXJmZXIuZ2V0Q3VycmVudFRpbWUoKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh3YXZlc3VyZmVyLmdldEN1cnJlbnRUaW1lKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGludGlhbCBkdXJhdGlvbiB0aW1lIHRvIDAwOjAwIHVudGlsIHJlYWR5IC0ganVzdCB0byBmaWxsIHRoZSBzcGFjZVxuICAgIGR1cmF0aW9uRGlzcGxheS50ZXh0Q29udGVudCA9ICcwOjAwJztcbiAgICAvLyB3aGVuIHRyYWNrIGlzIGRlY29kZWQgYW5kIHJlYWR5IHRvIHBsYXksIGRpc3BsYXkgdHJhY2sgZHVyYXRpb25cbiAgICB3YXZlc3VyZmVyLm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgIGR1cmF0aW9uRGlzcGxheS50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUod2F2ZXN1cmZlci5nZXREdXJhdGlvbigpKTtcbiAgICB9KTtcblxuICAgIC8vIFRIRSBSQVRJT05BTEVcbiAgICAvLyBwcmV2ZW50cyBpc3N1ZSBvbiBtb2JpbGU6IGF1ZGlvQ29udGV4dCBpcyBub3Qgc3RhcnRlZCB1bnRpbCBmaXJzdCB1c2VyIHBsYXkgaW50ZXJhY3Rpb25cbiAgICAvLyB0aGlzIG1lYW5zIGlmIHVzZXIgc2Vla3MgYWhlYWQgYmVmb3JlIGhpdHRpbmcgcGxheSAtIHRyYWNrIHN0aWxsIHN0YXJ0cyBmb3JtIDAwOjAwLFxuICAgIC8vIG5vdCB0aGUgbmV3IHRpbWUgc2Vla2VkIHRvLCBiZWN1YXNlIHNlZWsgb2NjdXJlZCBiZWZvcmUgYXVkaW8gaW50ZXJhY3Rpb24gaW5pdGlhdGVkXG4gICAgLy8gYW5kIHRoZW4gdGhlIHRpbWUgZGlzcGxheSBpcyBvdXQgb2Ygc3luYyBhbmQgdGhlIGVudGlyZSBzZWVraW5nIHVpIGlzIG91dCBvZiBzeW5jLlxuXG4gICAgLy8gVEhFIENPREVcbiAgICAvLyB1c2luZy5vbmNlIG1ldGhvZCwgbWFrZSB0aGUgZmlyc3QgY2xpY2sgb24gdGhlIHdhdmVzdXJmZXIgb2JqZWN0XG4gICAgLy8gY3JlYXRlIGEgcHJvbWlzZSB0aGF0IGF1ZGlvIGlzIHBsYXlpbmcuXG4gICAgLy8gaWYgcHJvbWlzZSBiZWNvbWVzIHNhdGlzZmllZCwgaW1tZWRpYXRlbHkgbXV0ZSBhdWRpby5cbiAgICAvLyB0aGlzIGluaXRpYXRlcyBhdWRpbyBjb250ZXh0IHcvbyB1c2VyIGhlYXJpbmcgYXVkaW8sIHVwZGF0ZXMgdGltZSwgZ2V0cyBldmVyeXRoaW5nIGluIHN5bmNcbiAgICAvLyB3ZSB3YWl0IGZvciB0aGUgc3VjY2VzZnVsbHkgcmV0dXJuZWQgcHJvbWlzZSBiZWNhdXNlIC5wbGF5KCkgaXMgYSBwcm9taXNlXG4gICAgLy8gd2UgZG9udCB3YW50IHRvIGludGVycnVwdCBpdHMgcHJvY2VzcyBieSBtdXRpbmcgaXQgYmVmb3JlIGl0IGNhbiBjb21wbGV0ZVxuICAgIC8vIHNvIHdlIHdhaXQgZm9yIGNvbmZpcm1hdGlvbiBvZiBjb21wbGV0aW9uLCB0aGVuIC5wYXVzZSgpXG5cbiAgICBpZiAoaW5pdGlhdGVkID09PSBmYWxzZSkge1xuICAgICAgd2F2ZXN1cmZlci5vbmNlKCdzZWVraW5nJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5UHJvbWlzZSA9IHdhdmVzdXJmZXIucGxheSgpO1xuICAgICAgICBpZiAocGxheVByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBsYXlQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luaXRpYXRlZCcpO1xuICAgICAgICAgICAgd2F2ZXN1cmZlci5wYXVzZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIEF1dG8tcGxheSB3YXMgcHJldmVudGVkXG4gICAgICAgIC8vIFNob3cgcGF1c2VkIFVJLlxuICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaWYgKGluaXRpYXRlZCA9PT0gdHJ1ZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gYXBwZW5kIHRpbWUgZWxlbWVudHMgdG8gdGltZURpc3BsYXlcbiAgICB0aW1lRGlzcGxheS5hcHBlbmRDaGlsZChjdXJyZW50RGlzcGxheSk7XG4gICAgdGltZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgdGltZURpc3BsYXkuYXBwZW5kQ2hpbGQoZHVyYXRpb25EaXNwbGF5KTtcblxuICAgIC8vIGFwcGVuZCB0aW1lRGlzcGxheSB0byBvcHRpb25zRGlzcGxheVxuICAgIG9wdGlvbnNEaXNwbGF5LmFwcGVuZENoaWxkKHRpbWVEaXNwbGF5KTtcblxuICAgIC8vIGpzIHN0eWxlIGZvciBkZWZhdWx0IHRoYXQgY2FuIGJlIGNvbW1lbnRlZFxuICAgIC8vIERPTSBlbGVtZW50cyBjYW4gYmUgZ3JhYmJlZCBieSBhc3NpZ25lZCBjc3Mgc2VsZWN0b3JcbiAgICAvLyB0cmFja1RpdGxlLnN0eWxlLmZvbnRTaXplID0gJzIwcHgnO1xuXG4gICAgLy8gb3B0aW9uc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvLyBvcHRpb25zRGlzcGxheS5zdHlsZS5nYXAgPSAnMjBweCc7XG4gICAgLy8gb3B0aW9uc0Rpc3BsYXkuc3R5bGUubWFyZ2luID0gJzAgMCA0MHB4IDAnO1xuICAgIC8vIG9wdGlvbnNEaXNwbGF5LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcblxuICAgIC8vIHBsYXlCdG4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvLyBwbGF5QnRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICAvLyBwbGF5QnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcyNXB4JztcbiAgICAvLyBwbGF5QnRuLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAvLyBwbGF5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG5cbiAgICAvLyBwbGF5LnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICAvLyBwbGF5LnN0eWxlLndpZHRoID0gJzMwcHgnO1xuICAgIC8vIHBhdXNlLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICAvLyBwYXVzZS5zdHlsZS53aWR0aCA9ICczMHB4JztcblxuICAgIC8vIHRpbWVEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy8gdGltZURpc3BsYXkuc3R5bGUuZ2FwID0gJzVweCc7XG5cbiAgICAvLyAvLyBwbGF5QnRuIGNhbiBiZSBncmFiYmVkIGJ5IGNsYXNzIGFuZCBoYXZlIDo6aG92ZXIgYXBwbGllZCBmb3IgYmV0dGVyIHJlc3VsdHNcbiAgICAvLyBwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICBwbGF5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYzRjM2M0JztcbiAgICAvLyB9KTtcblxuICAgIC8vIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAvLyAgIHBsYXlCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAvLyB9KTtcbiAgICAvLyAgIGNvbnN0IGluaXRpYXRlZCA9IGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbmZ1bmN0aW9uIHQodCxlLGkscyl7cmV0dXJuIG5ldyhpfHwoaT1Qcm9taXNlKSkoKGZ1bmN0aW9uKG4scil7ZnVuY3Rpb24gbyh0KXt0cnl7aChzLm5leHQodCkpfWNhdGNoKHQpe3IodCl9fWZ1bmN0aW9uIGEodCl7dHJ5e2gocy50aHJvdyh0KSl9Y2F0Y2godCl7cih0KX19ZnVuY3Rpb24gaCh0KXt2YXIgZTt0LmRvbmU/bih0LnZhbHVlKTooZT10LnZhbHVlLGUgaW5zdGFuY2VvZiBpP2U6bmV3IGkoKGZ1bmN0aW9uKHQpe3QoZSl9KSkpLnRoZW4obyxhKX1oKChzPXMuYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9Y2xhc3MgZXtjb25zdHJ1Y3Rvcigpe3RoaXMubGlzdGVuZXJzPXt9fW9uKHQsZSxpKXtpZih0aGlzLmxpc3RlbmVyc1t0XXx8KHRoaXMubGlzdGVuZXJzW3RdPW5ldyBTZXQpLHRoaXMubGlzdGVuZXJzW3RdLmFkZChlKSxudWxsPT1pP3ZvaWQgMDppLm9uY2Upe2NvbnN0IGk9KCk9Pnt0aGlzLnVuKHQsaSksdGhpcy51bih0LGUpfTtyZXR1cm4gdGhpcy5vbih0LGkpLGl9cmV0dXJuKCk9PnRoaXMudW4odCxlKX11bih0LGUpe3ZhciBpO251bGw9PT0oaT10aGlzLmxpc3RlbmVyc1t0XSl8fHZvaWQgMD09PWl8fGkuZGVsZXRlKGUpfW9uY2UodCxlKXtyZXR1cm4gdGhpcy5vbih0LGUse29uY2U6ITB9KX11bkFsbCgpe3RoaXMubGlzdGVuZXJzPXt9fWVtaXQodCwuLi5lKXt0aGlzLmxpc3RlbmVyc1t0XSYmdGhpcy5saXN0ZW5lcnNbdF0uZm9yRWFjaCgodD0+dCguLi5lKSkpfX1jb25zdCBpPXtkZWNvZGU6ZnVuY3Rpb24oZSxpKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IHQ9bmV3IEF1ZGlvQ29udGV4dCh7c2FtcGxlUmF0ZTppfSk7cmV0dXJuIHQuZGVjb2RlQXVkaW9EYXRhKGUpLmZpbmFsbHkoKCgpPT50LmNsb3NlKCkpKX0pKX0sY3JlYXRlQnVmZmVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHRbMF0mJih0PVt0XSksZnVuY3Rpb24odCl7Y29uc3QgZT10WzBdO2lmKGUuc29tZSgodD0+dD4xfHx0PC0xKSkpe2NvbnN0IGk9ZS5sZW5ndGg7bGV0IHM9MDtmb3IobGV0IHQ9MDt0PGk7dCsrKXtjb25zdCBpPU1hdGguYWJzKGVbdF0pO2k+cyYmKHM9aSl9Zm9yKGNvbnN0IGUgb2YgdClmb3IobGV0IHQ9MDt0PGk7dCsrKWVbdF0vPXN9fSh0KSx7ZHVyYXRpb246ZSxsZW5ndGg6dFswXS5sZW5ndGgsc2FtcGxlUmF0ZTp0WzBdLmxlbmd0aC9lLG51bWJlck9mQ2hhbm5lbHM6dC5sZW5ndGgsZ2V0Q2hhbm5lbERhdGE6ZT0+bnVsbD09dD92b2lkIDA6dFtlXSxjb3B5RnJvbUNoYW5uZWw6QXVkaW9CdWZmZXIucHJvdG90eXBlLmNvcHlGcm9tQ2hhbm5lbCxjb3B5VG9DaGFubmVsOkF1ZGlvQnVmZmVyLnByb3RvdHlwZS5jb3B5VG9DaGFubmVsfX19O2Z1bmN0aW9uIHModCxlKXtjb25zdCBpPWUueG1sbnM/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGUueG1sbnMsdCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtmb3IoY29uc3RbdCxuXW9mIE9iamVjdC5lbnRyaWVzKGUpKWlmKFwiY2hpbGRyZW5cIj09PXQpZm9yKGNvbnN0W3Qsbl1vZiBPYmplY3QuZW50cmllcyhlKSlcInN0cmluZ1wiPT10eXBlb2Ygbj9pLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKTppLmFwcGVuZENoaWxkKHModCxuKSk7ZWxzZVwic3R5bGVcIj09PXQ/T2JqZWN0LmFzc2lnbihpLnN0eWxlLG4pOlwidGV4dENvbnRlbnRcIj09PXQ/aS50ZXh0Q29udGVudD1uOmkuc2V0QXR0cmlidXRlKHQsbi50b1N0cmluZygpKTtyZXR1cm4gaX1mdW5jdGlvbiBuKHQsZSxpKXtjb25zdCBuPXModCxlfHx7fSk7cmV0dXJuIG51bGw9PWl8fGkuYXBwZW5kQ2hpbGQobiksbn12YXIgcj1PYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxjcmVhdGVFbGVtZW50Om4sZGVmYXVsdDpufSk7Y29uc3Qgbz17ZmV0Y2hCbG9iOmZ1bmN0aW9uKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IG49eWllbGQgZmV0Y2goZSxzKTtpZihuLnN0YXR1cz49NDAwKXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoICR7ZX06ICR7bi5zdGF0dXN9ICgke24uc3RhdHVzVGV4dH0pYCk7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKCFlLmJvZHl8fCFlLmhlYWRlcnMpcmV0dXJuO2NvbnN0IHM9ZS5ib2R5LmdldFJlYWRlcigpLG49TnVtYmVyKGUuaGVhZGVycy5nZXQoXCJDb250ZW50LUxlbmd0aFwiKSl8fDA7bGV0IHI9MDtjb25zdCBvPWU9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyKz0obnVsbD09ZT92b2lkIDA6ZS5sZW5ndGgpfHwwO2NvbnN0IHQ9TWF0aC5yb3VuZChyL24qMTAwKTtpKHQpfSkpLGE9KCk9PnQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtsZXQgdDt0cnl7dD15aWVsZCBzLnJlYWQoKX1jYXRjaCh0KXtyZXR1cm59dC5kb25lfHwobyh0LnZhbHVlKSx5aWVsZCBhKCkpfSkpO2EoKX0pKX0obi5jbG9uZSgpLGkpLG4uYmxvYigpfSkpfX07Y2xhc3MgYSBleHRlbmRzIGV7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLmlzRXh0ZXJuYWxNZWRpYT0hMSx0Lm1lZGlhPyh0aGlzLm1lZGlhPXQubWVkaWEsdGhpcy5pc0V4dGVybmFsTWVkaWE9ITApOnRoaXMubWVkaWE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpLHQubWVkaWFDb250cm9scyYmKHRoaXMubWVkaWEuY29udHJvbHM9ITApLHQuYXV0b3BsYXkmJih0aGlzLm1lZGlhLmF1dG9wbGF5PSEwKSxudWxsIT10LnBsYXliYWNrUmF0ZSYmdGhpcy5vbmNlTWVkaWFFdmVudChcImNhbnBsYXlcIiwoKCk9PntudWxsIT10LnBsYXliYWNrUmF0ZSYmKHRoaXMubWVkaWEucGxheWJhY2tSYXRlPXQucGxheWJhY2tSYXRlKX0pKX1vbk1lZGlhRXZlbnQodCxlLGkpe3JldHVybiB0aGlzLm1lZGlhLmFkZEV2ZW50TGlzdGVuZXIodCxlLGkpLCgpPT50aGlzLm1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX1vbmNlTWVkaWFFdmVudCh0LGUpe3JldHVybiB0aGlzLm9uTWVkaWFFdmVudCh0LGUse29uY2U6ITB9KX1nZXRTcmMoKXtyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50U3JjfHx0aGlzLm1lZGlhLnNyY3x8XCJcIn1yZXZva2VTcmMoKXtjb25zdCB0PXRoaXMuZ2V0U3JjKCk7dC5zdGFydHNXaXRoKFwiYmxvYjpcIikmJlVSTC5yZXZva2VPYmplY3RVUkwodCl9Y2FuUGxheVR5cGUodCl7cmV0dXJuXCJcIiE9PXRoaXMubWVkaWEuY2FuUGxheVR5cGUodCl9c2V0U3JjKHQsZSl7aWYodGhpcy5nZXRTcmMoKT09PXQpcmV0dXJuO3RoaXMucmV2b2tlU3JjKCk7Y29uc3QgaT1lIGluc3RhbmNlb2YgQmxvYiYmdGhpcy5jYW5QbGF5VHlwZShlLnR5cGUpP1VSTC5jcmVhdGVPYmplY3RVUkwoZSk6dDt0aGlzLm1lZGlhLnNyYz1pfWRlc3Ryb3koKXt0aGlzLm1lZGlhLnBhdXNlKCksdGhpcy5pc0V4dGVybmFsTWVkaWF8fCh0aGlzLm1lZGlhLnJlbW92ZSgpLHRoaXMucmV2b2tlU3JjKCksdGhpcy5tZWRpYS5zcmM9XCJcIix0aGlzLm1lZGlhLmxvYWQoKSl9c2V0TWVkaWFFbGVtZW50KHQpe3RoaXMubWVkaWE9dH1wbGF5KCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtpZih0aGlzLm1lZGlhLnNyYylyZXR1cm4gdGhpcy5tZWRpYS5wbGF5KCl9KSl9cGF1c2UoKXt0aGlzLm1lZGlhLnBhdXNlKCl9aXNQbGF5aW5nKCl7cmV0dXJuIXRoaXMubWVkaWEucGF1c2VkJiYhdGhpcy5tZWRpYS5lbmRlZH1zZXRUaW1lKHQpe3RoaXMubWVkaWEuY3VycmVudFRpbWU9dH1nZXREdXJhdGlvbigpe3JldHVybiB0aGlzLm1lZGlhLmR1cmF0aW9ufWdldEN1cnJlbnRUaW1lKCl7cmV0dXJuIHRoaXMubWVkaWEuY3VycmVudFRpbWV9Z2V0Vm9sdW1lKCl7cmV0dXJuIHRoaXMubWVkaWEudm9sdW1lfXNldFZvbHVtZSh0KXt0aGlzLm1lZGlhLnZvbHVtZT10fWdldE11dGVkKCl7cmV0dXJuIHRoaXMubWVkaWEubXV0ZWR9c2V0TXV0ZWQodCl7dGhpcy5tZWRpYS5tdXRlZD10fWdldFBsYXliYWNrUmF0ZSgpe3JldHVybiB0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZX1pc1NlZWtpbmcoKXtyZXR1cm4gdGhpcy5tZWRpYS5zZWVraW5nfXNldFBsYXliYWNrUmF0ZSh0LGUpe251bGwhPWUmJih0aGlzLm1lZGlhLnByZXNlcnZlc1BpdGNoPWUpLHRoaXMubWVkaWEucGxheWJhY2tSYXRlPXR9Z2V0TWVkaWFFbGVtZW50KCl7cmV0dXJuIHRoaXMubWVkaWF9c2V0U2lua0lkKHQpe3JldHVybiB0aGlzLm1lZGlhLnNldFNpbmtJZCh0KX19Y2xhc3MgaCBleHRlbmRzIGV7Y29uc3RydWN0b3IodCxlKXtzdXBlcigpLHRoaXMudGltZW91dHM9W10sdGhpcy5pc1Njcm9sbGFibGU9ITEsdGhpcy5hdWRpb0RhdGE9bnVsbCx0aGlzLnJlc2l6ZU9ic2VydmVyPW51bGwsdGhpcy5sYXN0Q29udGFpbmVyV2lkdGg9MCx0aGlzLmlzRHJhZ2dpbmc9ITEsdGhpcy5vcHRpb25zPXQ7Y29uc3QgaT10aGlzLnBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyKHQuY29udGFpbmVyKTt0aGlzLnBhcmVudD1pO2NvbnN0W3Msbl09dGhpcy5pbml0SHRtbCgpO2kuYXBwZW5kQ2hpbGQocyksdGhpcy5jb250YWluZXI9cyx0aGlzLnNjcm9sbENvbnRhaW5lcj1uLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsXCIpLHRoaXMud3JhcHBlcj1uLnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSx0aGlzLmNhbnZhc1dyYXBwZXI9bi5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc2VzXCIpLHRoaXMucHJvZ3Jlc3NXcmFwcGVyPW4ucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc1wiKSx0aGlzLmN1cnNvcj1uLnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yXCIpLGUmJm4uYXBwZW5kQ2hpbGQoZSksdGhpcy5pbml0RXZlbnRzKCl9cGFyZW50RnJvbU9wdGlvbnNDb250YWluZXIodCl7bGV0IGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQ/ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpOnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmKGU9dCksIWUpdGhyb3cgbmV3IEVycm9yKFwiQ29udGFpbmVyIG5vdCBmb3VuZFwiKTtyZXR1cm4gZX1pbml0RXZlbnRzKCl7Y29uc3QgdD10PT57Y29uc3QgZT10aGlzLndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT10LmNsaWVudFgtZS5sZWZ0LHM9dC5jbGllbnRYLWUubGVmdDtyZXR1cm5baS9lLndpZHRoLHMvZS5oZWlnaHRdfTt0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGU9Pntjb25zdFtpLHNdPXQoZSk7dGhpcy5lbWl0KFwiY2xpY2tcIixpLHMpfSkpLHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwoZT0+e2NvbnN0W2ksc109dChlKTt0aGlzLmVtaXQoXCJkYmxjbGlja1wiLGkscyl9KSksdGhpcy5vcHRpb25zLmRyYWdUb1NlZWsmJnRoaXMuaW5pdERyYWcoKSx0aGlzLnNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKCgpPT57Y29uc3R7c2Nyb2xsTGVmdDp0LHNjcm9sbFdpZHRoOmUsY2xpZW50V2lkdGg6aX09dGhpcy5zY3JvbGxDb250YWluZXIscz10L2Usbj0odCtpKS9lO3RoaXMuZW1pdChcInNjcm9sbFwiLHMsbil9KSk7Y29uc3QgZT10aGlzLmNyZWF0ZURlbGF5KDEwMCk7dGhpcy5yZXNpemVPYnNlcnZlcj1uZXcgUmVzaXplT2JzZXJ2ZXIoKCgpPT57ZSgpLnRoZW4oKCgpPT50aGlzLm9uQ29udGFpbmVyUmVzaXplKCkpKS5jYXRjaCgoKCk9Pnt9KSl9KSksdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuc2Nyb2xsQ29udGFpbmVyKX1vbkNvbnRhaW5lclJlc2l6ZSgpe2NvbnN0IHQ9dGhpcy5wYXJlbnQuY2xpZW50V2lkdGg7dD09PXRoaXMubGFzdENvbnRhaW5lcldpZHRoJiZcImF1dG9cIiE9PXRoaXMub3B0aW9ucy5oZWlnaHR8fCh0aGlzLmxhc3RDb250YWluZXJXaWR0aD10LHRoaXMucmVSZW5kZXIoKSl9aW5pdERyYWcoKXshZnVuY3Rpb24odCxlLGkscyxuPTMscj0wKXtpZighdClyZXR1cm4oKT0+e307bGV0IG89KCk9Pnt9O2NvbnN0IGE9YT0+e2lmKGEuYnV0dG9uIT09cilyZXR1cm47YS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCk7bGV0IGg9YS5jbGllbnRYLGw9YS5jbGllbnRZLGQ9ITE7Y29uc3QgYz1zPT57cy5wcmV2ZW50RGVmYXVsdCgpLHMuc3RvcFByb3BhZ2F0aW9uKCk7Y29uc3Qgcj1zLmNsaWVudFgsbz1zLmNsaWVudFksYT1yLWgsYz1vLWw7aWYoZHx8TWF0aC5hYnMoYSk+bnx8TWF0aC5hYnMoYyk+bil7Y29uc3Qgcz10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHtsZWZ0Om4sdG9wOnV9PXM7ZHx8KG51bGw9PWl8fGkoaC1uLGwtdSksZD0hMCksZShhLGMsci1uLG8tdSksaD1yLGw9b319LHU9KCk9PntkJiYobnVsbD09c3x8cygpKSxvKCl9LHA9dD0+e3QucmVsYXRlZFRhcmdldCYmdC5yZWxhdGVkVGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHx1KCl9LG09dD0+e2QmJih0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSl9LGY9dD0+e2QmJnQucHJldmVudERlZmF1bHQoKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIscCksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixwKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZix7cGFzc2l2ZTohMX0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG0se2NhcHR1cmU6ITB9KSxvPSgpPT57ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsYyksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHUpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIscCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixwKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZiksc2V0VGltZW91dCgoKCk9Pntkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixtLHtjYXB0dXJlOiEwfSl9KSwxMCl9fTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLGEpfSh0aGlzLndyYXBwZXIsKCh0LGUsaSk9Pnt0aGlzLmVtaXQoXCJkcmFnXCIsTWF0aC5tYXgoMCxNYXRoLm1pbigxLGkvdGhpcy53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSkpfSksKCgpPT50aGlzLmlzRHJhZ2dpbmc9ITApLCgoKT0+dGhpcy5pc0RyYWdnaW5nPSExKSl9Z2V0SGVpZ2h0KHQpe3JldHVybiBudWxsPT10PzEyODppc05hTihOdW1iZXIodCkpP1wiYXV0b1wiPT09dCYmdGhpcy5wYXJlbnQuY2xpZW50SGVpZ2h0fHwxMjg6TnVtYmVyKHQpfWluaXRIdG1sKCl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9dC5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KTtyZXR1cm4gZS5pbm5lckhUTUw9YFxcbiAgICAgIDxzdHlsZT5cXG4gICAgICAgIDpob3N0IHtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIG1pbi13aWR0aDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgYXVkaW8ge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuc2Nyb2xsIHtcXG4gICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLm5vU2Nyb2xsYmFyIHtcXG4gICAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLm5vU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC53cmFwcGVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIH1cXG4gICAgICAgIDpob3N0IC5jYW52YXNlcyB7XFxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICR7dGhpcy5nZXRIZWlnaHQodGhpcy5vcHRpb25zLmhlaWdodCl9cHg7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCAuY2FudmFzZXMgPiBkaXYge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB9XFxuICAgICAgICA6aG9zdCBjYW52YXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLnByb2dyZXNzIHtcXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLnByb2dyZXNzID4gZGl2IHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgOmhvc3QgLmN1cnNvciB7XFxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICB9XFxuICAgICAgPC9zdHlsZT5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsXCIgcGFydD1cInNjcm9sbFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBwYXJ0PVwid3JhcHBlclwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FudmFzZXNcIj48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgcGFydD1cInByb2dyZXNzXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJzb3JcIiBwYXJ0PVwiY3Vyc29yXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgYCxbdCxlXX1zZXRPcHRpb25zKHQpe2lmKHRoaXMub3B0aW9ucy5jb250YWluZXIhPT10LmNvbnRhaW5lcil7Y29uc3QgZT10aGlzLnBhcmVudEZyb21PcHRpb25zQ29udGFpbmVyKHQuY29udGFpbmVyKTtlLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKSx0aGlzLnBhcmVudD1lfXQuZHJhZ1RvU2VlayYmIXRoaXMub3B0aW9ucy5kcmFnVG9TZWVrJiZ0aGlzLmluaXREcmFnKCksdGhpcy5vcHRpb25zPXQsdGhpcy5yZVJlbmRlcigpfWdldFdyYXBwZXIoKXtyZXR1cm4gdGhpcy53cmFwcGVyfWdldFNjcm9sbCgpe3JldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0fXNldFNjcm9sbCh0KXt0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0PXR9c2V0U2Nyb2xsUGVyY2VudGFnZSh0KXtjb25zdHtzY3JvbGxXaWR0aDplfT10aGlzLnNjcm9sbENvbnRhaW5lcixpPWUqdDt0aGlzLnNldFNjcm9sbChpKX1kZXN0cm95KCl7dmFyIHQ7dGhpcy5jb250YWluZXIucmVtb3ZlKCksbnVsbD09PSh0PXRoaXMucmVzaXplT2JzZXJ2ZXIpfHx2b2lkIDA9PT10fHx0LmRpc2Nvbm5lY3QoKX1jcmVhdGVEZWxheSh0PTEwKXtsZXQgZSxpO2NvbnN0IHM9KCk9PntlJiZjbGVhclRpbWVvdXQoZSksaSYmaSgpfTtyZXR1cm4gdGhpcy50aW1lb3V0cy5wdXNoKHMpLCgpPT5uZXcgUHJvbWlzZSgoKG4scik9PntzKCksaT1yLGU9c2V0VGltZW91dCgoKCk9PntlPXZvaWQgMCxpPXZvaWQgMCxuKCl9KSx0KX0pKX1jb252ZXJ0Q29sb3JWYWx1ZXModCl7aWYoIUFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR8fFwiXCI7aWYodC5sZW5ndGg8MilyZXR1cm4gdFswXXx8XCJcIjtjb25zdCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksaT1lLmdldENvbnRleHQoXCIyZFwiKSxzPWUuaGVpZ2h0Kih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSksbj1pLmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCwwLHMpLHI9MS8odC5sZW5ndGgtMSk7cmV0dXJuIHQuZm9yRWFjaCgoKHQsZSk9Pntjb25zdCBpPWUqcjtuLmFkZENvbG9yU3RvcChpLHQpfSkpLG59cmVuZGVyQmFyV2F2ZWZvcm0odCxlLGkscyl7Y29uc3Qgbj10WzBdLHI9dFsxXXx8dFswXSxvPW4ubGVuZ3RoLHt3aWR0aDphLGhlaWdodDpofT1pLmNhbnZhcyxsPWgvMixkPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLGM9ZS5iYXJXaWR0aD9lLmJhcldpZHRoKmQ6MSx1PWUuYmFyR2FwP2UuYmFyR2FwKmQ6ZS5iYXJXaWR0aD9jLzI6MCxwPWUuYmFyUmFkaXVzfHwwLG09YS8oYyt1KS9vLGY9cCYmXCJyb3VuZFJlY3RcImluIGk/XCJyb3VuZFJlY3RcIjpcInJlY3RcIjtpLmJlZ2luUGF0aCgpO2xldCBnPTAsdj0wLGI9MDtmb3IobGV0IHQ9MDt0PD1vO3QrKyl7Y29uc3Qgbz1NYXRoLnJvdW5kKHQqbSk7aWYobz5nKXtjb25zdCB0PU1hdGgucm91bmQodipsKnMpLG49dCtNYXRoLnJvdW5kKGIqbCpzKXx8MTtsZXQgcj1sLXQ7XCJ0b3BcIj09PWUuYmFyQWxpZ24/cj0wOlwiYm90dG9tXCI9PT1lLmJhckFsaWduJiYocj1oLW4pLGlbZl0oZyooYyt1KSxyLGMsbixwKSxnPW8sdj0wLGI9MH1jb25zdCBhPU1hdGguYWJzKG5bdF18fDApLGQ9TWF0aC5hYnMoclt0XXx8MCk7YT52JiYodj1hKSxkPmImJihiPWQpfWkuZmlsbCgpLGkuY2xvc2VQYXRoKCl9cmVuZGVyTGluZVdhdmVmb3JtKHQsZSxpLHMpe2NvbnN0IG49ZT0+e2NvbnN0IG49dFtlXXx8dFswXSxyPW4ubGVuZ3RoLHtoZWlnaHQ6b309aS5jYW52YXMsYT1vLzIsaD1pLmNhbnZhcy53aWR0aC9yO2kubW92ZVRvKDAsYSk7bGV0IGw9MCxkPTA7Zm9yKGxldCB0PTA7dDw9cjt0Kyspe2NvbnN0IHI9TWF0aC5yb3VuZCh0KmgpO2lmKHI+bCl7Y29uc3QgdD1hKyhNYXRoLnJvdW5kKGQqYSpzKXx8MSkqKDA9PT1lPy0xOjEpO2kubGluZVRvKGwsdCksbD1yLGQ9MH1jb25zdCBvPU1hdGguYWJzKG5bdF18fDApO28+ZCYmKGQ9byl9aS5saW5lVG8obCxhKX07aS5iZWdpblBhdGgoKSxuKDApLG4oMSksaS5maWxsKCksaS5jbG9zZVBhdGgoKX1yZW5kZXJXYXZlZm9ybSh0LGUsaSl7aWYoaS5maWxsU3R5bGU9dGhpcy5jb252ZXJ0Q29sb3JWYWx1ZXMoZS53YXZlQ29sb3IpLGUucmVuZGVyRnVuY3Rpb24pcmV0dXJuIHZvaWQgZS5yZW5kZXJGdW5jdGlvbih0LGkpO2xldCBzPWUuYmFySGVpZ2h0fHwxO2lmKGUubm9ybWFsaXplKXtjb25zdCBlPUFycmF5LmZyb20odFswXSkucmVkdWNlKCgodCxlKT0+TWF0aC5tYXgodCxNYXRoLmFicyhlKSkpLDApO3M9ZT8xL2U6MX1lLmJhcldpZHRofHxlLmJhckdhcHx8ZS5iYXJBbGlnbj90aGlzLnJlbmRlckJhcldhdmVmb3JtKHQsZSxpLHMpOnRoaXMucmVuZGVyTGluZVdhdmVmb3JtKHQsZSxpLHMpfXJlbmRlclNpbmdsZUNhbnZhcyh0LGUsaSxzLG4scixvLGEpe2NvbnN0IGg9d2luZG93LmRldmljZVBpeGVsUmF0aW98fDEsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLGQ9dFswXS5sZW5ndGg7bC53aWR0aD1NYXRoLnJvdW5kKGkqKHItbikvZCksbC5oZWlnaHQ9cypoLGwuc3R5bGUud2lkdGg9YCR7TWF0aC5mbG9vcihsLndpZHRoL2gpfXB4YCxsLnN0eWxlLmhlaWdodD1gJHtzfXB4YCxsLnN0eWxlLmxlZnQ9YCR7TWF0aC5mbG9vcihuKmkvaC9kKX1weGAsby5hcHBlbmRDaGlsZChsKTtjb25zdCBjPWwuZ2V0Q29udGV4dChcIjJkXCIpO2lmKHRoaXMucmVuZGVyV2F2ZWZvcm0odC5tYXAoKHQ9PnQuc2xpY2UobixyKSkpLGUsYyksbC53aWR0aD4wJiZsLmhlaWdodD4wKXtjb25zdCB0PWwuY2xvbmVOb2RlKCksaT10LmdldENvbnRleHQoXCIyZFwiKTtpLmRyYXdJbWFnZShsLDAsMCksaS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJzb3VyY2UtaW5cIixpLmZpbGxTdHlsZT10aGlzLmNvbnZlcnRDb2xvclZhbHVlcyhlLnByb2dyZXNzQ29sb3IpLGkuZmlsbFJlY3QoMCwwLGwud2lkdGgsbC5oZWlnaHQpLGEuYXBwZW5kQ2hpbGQodCl9fXJlbmRlckNoYW5uZWwoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3Qgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5nZXRIZWlnaHQoaS5oZWlnaHQpO24uc3R5bGUuaGVpZ2h0PWAke3J9cHhgLHRoaXMuY2FudmFzV3JhcHBlci5zdHlsZS5taW5IZWlnaHQ9YCR7cn1weGAsdGhpcy5jYW52YXNXcmFwcGVyLmFwcGVuZENoaWxkKG4pO2NvbnN0IG89bi5jbG9uZU5vZGUoKTt0aGlzLnByb2dyZXNzV3JhcHBlci5hcHBlbmRDaGlsZChvKTtjb25zdCBhPWVbMF0ubGVuZ3RoLGw9KHQsaCk9Pnt0aGlzLnJlbmRlclNpbmdsZUNhbnZhcyhlLGkscyxyLE1hdGgubWF4KDAsdCksTWF0aC5taW4oaCxhKSxuLG8pfTtpZighdGhpcy5pc1Njcm9sbGFibGUpcmV0dXJuIHZvaWQgbCgwLGEpO2NvbnN0e3Njcm9sbExlZnQ6ZCxzY3JvbGxXaWR0aDpjLGNsaWVudFdpZHRoOnV9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHA9YS9jO2xldCBtPU1hdGgubWluKGguTUFYX0NBTlZBU19XSURUSCx1KTtpZihpLmJhcldpZHRofHxpLmJhckdhcCl7Y29uc3QgdD1pLmJhcldpZHRofHwuNSxlPXQrKGkuYmFyR2FwfHx0LzIpO20lZSE9MCYmKG09TWF0aC5mbG9vcihtL2UpKmUpfWNvbnN0IGY9TWF0aC5mbG9vcihNYXRoLmFicyhkKSpwKSxnPU1hdGguZmxvb3IoZittKnApLHY9Zy1mO3Y8PTB8fChsKGYsZykseWllbGQgUHJvbWlzZS5hbGwoWygoKT0+dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKDA9PT1mKXJldHVybjtjb25zdCB0PXRoaXMuY3JlYXRlRGVsYXkoKTtmb3IobGV0IGU9ZjtlPj0wO2UtPXYpeWllbGQgdCgpLGwoTWF0aC5tYXgoMCxlLXYpLGUpfSkpKSgpLCgoKT0+dCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKGc9PT1hKXJldHVybjtjb25zdCB0PXRoaXMuY3JlYXRlRGVsYXkoKTtmb3IobGV0IGU9ZztlPGE7ZSs9dil5aWVsZCB0KCksbChlLE1hdGgubWluKGEsZSt2KSl9KSkpKCldKSl9KSl9cmVuZGVyKGUpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7dGhpcy50aW1lb3V0cy5mb3JFYWNoKCh0PT50KCkpKSx0aGlzLnRpbWVvdXRzPVtdLHRoaXMuY2FudmFzV3JhcHBlci5pbm5lckhUTUw9XCJcIix0aGlzLnByb2dyZXNzV3JhcHBlci5pbm5lckhUTUw9XCJcIixudWxsIT10aGlzLm9wdGlvbnMud2lkdGgmJih0aGlzLnNjcm9sbENvbnRhaW5lci5zdHlsZS53aWR0aD1cIm51bWJlclwiPT10eXBlb2YgdGhpcy5vcHRpb25zLndpZHRoP2Ake3RoaXMub3B0aW9ucy53aWR0aH1weGA6dGhpcy5vcHRpb25zLndpZHRoKTtjb25zdCB0PXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxLGk9dGhpcy5zY3JvbGxDb250YWluZXIuY2xpZW50V2lkdGgscz1NYXRoLmNlaWwoZS5kdXJhdGlvbioodGhpcy5vcHRpb25zLm1pblB4UGVyU2VjfHwwKSk7dGhpcy5pc1Njcm9sbGFibGU9cz5pO2NvbnN0IG49dGhpcy5vcHRpb25zLmZpbGxQYXJlbnQmJiF0aGlzLmlzU2Nyb2xsYWJsZSxyPShuP2k6cykqdDt0aGlzLndyYXBwZXIuc3R5bGUud2lkdGg9bj9cIjEwMCVcIjpgJHtzfXB4YCx0aGlzLnNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1g9dGhpcy5pc1Njcm9sbGFibGU/XCJhdXRvXCI6XCJoaWRkZW5cIix0aGlzLnNjcm9sbENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibm9TY3JvbGxiYXJcIiwhIXRoaXMub3B0aW9ucy5oaWRlU2Nyb2xsYmFyKSx0aGlzLmN1cnNvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9YCR7dGhpcy5vcHRpb25zLmN1cnNvckNvbG9yfHx0aGlzLm9wdGlvbnMucHJvZ3Jlc3NDb2xvcn1gLHRoaXMuY3Vyc29yLnN0eWxlLndpZHRoPWAke3RoaXMub3B0aW9ucy5jdXJzb3JXaWR0aH1weGAsdGhpcy5hdWRpb0RhdGE9ZSx0aGlzLmVtaXQoXCJyZW5kZXJcIik7dHJ5e2lmKHRoaXMub3B0aW9ucy5zcGxpdENoYW5uZWxzKXlpZWxkIFByb21pc2UuYWxsKEFycmF5LmZyb20oe2xlbmd0aDplLm51bWJlck9mQ2hhbm5lbHN9KS5tYXAoKCh0LGkpPT57dmFyIHM7Y29uc3Qgbj1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdGhpcy5vcHRpb25zKSxudWxsPT09KHM9dGhpcy5vcHRpb25zLnNwbGl0Q2hhbm5lbHMpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzW2ldKTtyZXR1cm4gdGhpcy5yZW5kZXJDaGFubmVsKFtlLmdldENoYW5uZWxEYXRhKGkpXSxuLHIpfSkpKTtlbHNle2NvbnN0IHQ9W2UuZ2V0Q2hhbm5lbERhdGEoMCldO2UubnVtYmVyT2ZDaGFubmVscz4xJiZ0LnB1c2goZS5nZXRDaGFubmVsRGF0YSgxKSkseWllbGQgdGhpcy5yZW5kZXJDaGFubmVsKHQsdGhpcy5vcHRpb25zLHIpfX1jYXRjaCh0KXtyZXR1cm59dGhpcy5lbWl0KFwicmVuZGVyZWRcIil9KSl9cmVSZW5kZXIoKXtpZighdGhpcy5hdWRpb0RhdGEpcmV0dXJuO2NvbnN0e3Njcm9sbFdpZHRoOnR9PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHtyaWdodDplfT10aGlzLnByb2dyZXNzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZih0aGlzLnJlbmRlcih0aGlzLmF1ZGlvRGF0YSksdGhpcy5pc1Njcm9sbGFibGUmJnQhPT10aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxXaWR0aCl7Y29uc3R7cmlnaHQ6dH09dGhpcy5wcm9ncmVzc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bGV0IGk9dC1lO2kqPTIsaT1pPDA/TWF0aC5mbG9vcihpKTpNYXRoLmNlaWwoaSksaS89Mix0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0Kz1pfX16b29tKHQpe3RoaXMub3B0aW9ucy5taW5QeFBlclNlYz10LHRoaXMucmVSZW5kZXIoKX1zY3JvbGxJbnRvVmlldyh0LGU9ITEpe2NvbnN0e3Njcm9sbExlZnQ6aSxzY3JvbGxXaWR0aDpzLGNsaWVudFdpZHRoOm59PXRoaXMuc2Nyb2xsQ29udGFpbmVyLHI9dCpzLG89aSxhPWkrbixoPW4vMjtpZih0aGlzLmlzRHJhZ2dpbmcpe2NvbnN0IHQ9MzA7cit0PmE/dGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCs9dDpyLXQ8byYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQtPXQpfWVsc2V7KHI8b3x8cj5hKSYmKHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ9ci0odGhpcy5vcHRpb25zLmF1dG9DZW50ZXI/aDowKSk7Y29uc3QgdD1yLWktaDtlJiZ0aGlzLm9wdGlvbnMuYXV0b0NlbnRlciYmdD4wJiYodGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdCs9TWF0aC5taW4odCwxMCkpfXtjb25zdCB0PXRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQsZT10L3MsaT0odCtuKS9zO3RoaXMuZW1pdChcInNjcm9sbFwiLGUsaSl9fXJlbmRlclByb2dyZXNzKHQsZSl7aWYoaXNOYU4odCkpcmV0dXJuO2NvbnN0IGk9MTAwKnQ7dGhpcy5jYW52YXNXcmFwcGVyLnN0eWxlLmNsaXBQYXRoPWBwb2x5Z29uKCR7aX0lIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAke2l9JSAxMDAlKWAsdGhpcy5wcm9ncmVzc1dyYXBwZXIuc3R5bGUud2lkdGg9YCR7aX0lYCx0aGlzLmN1cnNvci5zdHlsZS5sZWZ0PWAke2l9JWAsdGhpcy5jdXJzb3Iuc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGVYKC0kezEwMD09PU1hdGgucm91bmQoaSk/dGhpcy5vcHRpb25zLmN1cnNvcldpZHRoOjB9cHgpYCx0aGlzLmlzU2Nyb2xsYWJsZSYmdGhpcy5vcHRpb25zLmF1dG9TY3JvbGwmJnRoaXMuc2Nyb2xsSW50b1ZpZXcodCxlKX1leHBvcnRJbWFnZShlLGkscyl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtjb25zdCB0PXRoaXMuY2FudmFzV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiY2FudmFzXCIpO2lmKCF0Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJObyB3YXZlZm9ybSBkYXRhXCIpO2lmKFwiZGF0YVVSTFwiPT09cyl7Y29uc3Qgcz1BcnJheS5mcm9tKHQpLm1hcCgodD0+dC50b0RhdGFVUkwoZSxpKSkpO3JldHVybiBQcm9taXNlLnJlc29sdmUocyl9cmV0dXJuIFByb21pc2UuYWxsKEFycmF5LmZyb20odCkubWFwKCh0PT5uZXcgUHJvbWlzZSgoKHMsbik9Pnt0LnRvQmxvYigodD0+e3Q/cyh0KTpuKG5ldyBFcnJvcihcIkNvdWxkIG5vdCBleHBvcnQgaW1hZ2VcIikpfSksZSxpKX0pKSkpKX0pKX19aC5NQVhfQ0FOVkFTX1dJRFRIPTRlMztjbGFzcyBsIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy51bnN1YnNjcmliZT0oKT0+e319c3RhcnQoKXt0aGlzLnVuc3Vic2NyaWJlPXRoaXMub24oXCJ0aWNrXCIsKCgpPT57cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgoKT0+e3RoaXMuZW1pdChcInRpY2tcIil9KSl9KSksdGhpcy5lbWl0KFwidGlja1wiKX1zdG9wKCl7dGhpcy51bnN1YnNjcmliZSgpfWRlc3Ryb3koKXt0aGlzLnVuc3Vic2NyaWJlKCl9fWNsYXNzIGQgZXh0ZW5kcyBle2NvbnN0cnVjdG9yKHQ9bmV3IEF1ZGlvQ29udGV4dCl7c3VwZXIoKSx0aGlzLmJ1ZmZlck5vZGU9bnVsbCx0aGlzLmF1dG9wbGF5PSExLHRoaXMucGxheVN0YXJ0VGltZT0wLHRoaXMucGxheWVkRHVyYXRpb249MCx0aGlzLl9tdXRlZD0hMSx0aGlzLl9wbGF5YmFja1JhdGU9MSx0aGlzLmJ1ZmZlcj1udWxsLHRoaXMuY3VycmVudFNyYz1cIlwiLHRoaXMucGF1c2VkPSEwLHRoaXMuY3Jvc3NPcmlnaW49bnVsbCx0aGlzLnNlZWtpbmc9ITEsdGhpcy5hZGRFdmVudExpc3RlbmVyPXRoaXMub24sdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyPXRoaXMudW4sdGhpcy5hdWRpb0NvbnRleHQ9dCx0aGlzLmdhaW5Ob2RlPXRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSx0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pfWxvYWQoKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe30pKX1nZXQgc3JjKCl7cmV0dXJuIHRoaXMuY3VycmVudFNyY31zZXQgc3JjKHQpe2lmKHRoaXMuY3VycmVudFNyYz10LCF0KXJldHVybiB0aGlzLmJ1ZmZlcj1udWxsLHZvaWQgdGhpcy5lbWl0KFwiZW1wdGllZFwiKTtmZXRjaCh0KS50aGVuKChlPT57aWYoZS5zdGF0dXM+PTQwMCl0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCAke3R9OiAke2Uuc3RhdHVzfSAoJHtlLnN0YXR1c1RleHR9KWApO3JldHVybiBlLmFycmF5QnVmZmVyKCl9KSkudGhlbigoZT0+dGhpcy5jdXJyZW50U3JjIT09dD9udWxsOnRoaXMuYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShlKSkpLnRoZW4oKGU9Pnt0aGlzLmN1cnJlbnRTcmM9PT10JiYodGhpcy5idWZmZXI9ZSx0aGlzLmVtaXQoXCJsb2FkZWRtZXRhZGF0YVwiKSx0aGlzLmVtaXQoXCJjYW5wbGF5XCIpLHRoaXMuYXV0b3BsYXkmJnRoaXMucGxheSgpKX0pKX1fcGxheSgpe3ZhciB0O2lmKCF0aGlzLnBhdXNlZClyZXR1cm47dGhpcy5wYXVzZWQ9ITEsbnVsbD09PSh0PXRoaXMuYnVmZmVyTm9kZSl8fHZvaWQgMD09PXR8fHQuZGlzY29ubmVjdCgpLHRoaXMuYnVmZmVyTm9kZT10aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSx0aGlzLmJ1ZmZlck5vZGUuYnVmZmVyPXRoaXMuYnVmZmVyLHRoaXMuYnVmZmVyTm9kZS5wbGF5YmFja1JhdGUudmFsdWU9dGhpcy5fcGxheWJhY2tSYXRlLHRoaXMuYnVmZmVyTm9kZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO2xldCBlPXRoaXMucGxheWVkRHVyYXRpb24qdGhpcy5fcGxheWJhY2tSYXRlO2U+PXRoaXMuZHVyYXRpb24mJihlPTAsdGhpcy5wbGF5ZWREdXJhdGlvbj0wKSx0aGlzLmJ1ZmZlck5vZGUuc3RhcnQodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsZSksdGhpcy5wbGF5U3RhcnRUaW1lPXRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lLHRoaXMuYnVmZmVyTm9kZS5vbmVuZGVkPSgpPT57dGhpcy5jdXJyZW50VGltZT49dGhpcy5kdXJhdGlvbiYmKHRoaXMucGF1c2UoKSx0aGlzLmVtaXQoXCJlbmRlZFwiKSl9fV9wYXVzZSgpe3ZhciB0O3RoaXMucGF1c2VkPSEwLG51bGw9PT0odD10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT10fHx0LnN0b3AoKSx0aGlzLnBsYXllZER1cmF0aW9uKz10aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZS10aGlzLnBsYXlTdGFydFRpbWV9cGxheSgpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7dGhpcy5wYXVzZWQmJih0aGlzLl9wbGF5KCksdGhpcy5lbWl0KFwicGxheVwiKSl9KSl9cGF1c2UoKXt0aGlzLnBhdXNlZHx8KHRoaXMuX3BhdXNlKCksdGhpcy5lbWl0KFwicGF1c2VcIikpfXN0b3BBdCh0KXt2YXIgZSxpO2NvbnN0IHM9dC10aGlzLmN1cnJlbnRUaW1lO251bGw9PT0oZT10aGlzLmJ1ZmZlck5vZGUpfHx2b2lkIDA9PT1lfHxlLnN0b3AodGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUrcyksbnVsbD09PShpPXRoaXMuYnVmZmVyTm9kZSl8fHZvaWQgMD09PWl8fGkuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsKCgpPT57dGhpcy5idWZmZXJOb2RlPW51bGwsdGhpcy5wYXVzZSgpfSkse29uY2U6ITB9KX1zZXRTaW5rSWQoZSl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyZXR1cm4gdGhpcy5hdWRpb0NvbnRleHQuc2V0U2lua0lkKGUpfSkpfWdldCBwbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlfXNldCBwbGF5YmFja1JhdGUodCl7dGhpcy5fcGxheWJhY2tSYXRlPXQsdGhpcy5idWZmZXJOb2RlJiYodGhpcy5idWZmZXJOb2RlLnBsYXliYWNrUmF0ZS52YWx1ZT10KX1nZXQgY3VycmVudFRpbWUoKXtyZXR1cm4odGhpcy5wYXVzZWQ/dGhpcy5wbGF5ZWREdXJhdGlvbjp0aGlzLnBsYXllZER1cmF0aW9uKyh0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZS10aGlzLnBsYXlTdGFydFRpbWUpKSp0aGlzLl9wbGF5YmFja1JhdGV9c2V0IGN1cnJlbnRUaW1lKHQpe3RoaXMuZW1pdChcInNlZWtpbmdcIik7Y29uc3QgZT0hdGhpcy5wYXVzZWQ7ZSYmdGhpcy5fcGF1c2UoKSx0aGlzLnBsYXllZER1cmF0aW9uPXQvdGhpcy5fcGxheWJhY2tSYXRlLGUmJnRoaXMuX3BsYXkoKSx0aGlzLmVtaXQoXCJ0aW1ldXBkYXRlXCIpfWdldCBkdXJhdGlvbigpe3ZhciB0O3JldHVybihudWxsPT09KHQ9dGhpcy5idWZmZXIpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmR1cmF0aW9uKXx8MH1nZXQgdm9sdW1lKCl7cmV0dXJuIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZX1zZXQgdm9sdW1lKHQpe3RoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZT10LHRoaXMuZW1pdChcInZvbHVtZWNoYW5nZVwiKX1nZXQgbXV0ZWQoKXtyZXR1cm4gdGhpcy5fbXV0ZWR9c2V0IG11dGVkKHQpe3RoaXMuX211dGVkIT09dCYmKHRoaXMuX211dGVkPXQsdGhpcy5fbXV0ZWQ/dGhpcy5nYWluTm9kZS5kaXNjb25uZWN0KCk6dGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKSl9Y2FuUGxheVR5cGUodCl7cmV0dXJuL14oYXVkaW98dmlkZW8pXFwvLy50ZXN0KHQpfWdldEdhaW5Ob2RlKCl7cmV0dXJuIHRoaXMuZ2Fpbk5vZGV9Z2V0Q2hhbm5lbERhdGEoKXtjb25zdCB0PVtdO2lmKCF0aGlzLmJ1ZmZlcilyZXR1cm4gdDtjb25zdCBlPXRoaXMuYnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7Zm9yKGxldCBpPTA7aTxlO2krKyl0LnB1c2godGhpcy5idWZmZXIuZ2V0Q2hhbm5lbERhdGEoaSkpO3JldHVybiB0fX1jb25zdCBjPXt3YXZlQ29sb3I6XCIjOTk5XCIscHJvZ3Jlc3NDb2xvcjpcIiM1NTVcIixjdXJzb3JXaWR0aDoxLG1pblB4UGVyU2VjOjAsZmlsbFBhcmVudDohMCxpbnRlcmFjdDohMCxkcmFnVG9TZWVrOiExLGF1dG9TY3JvbGw6ITAsYXV0b0NlbnRlcjohMCxzYW1wbGVSYXRlOjhlM307Y2xhc3MgdSBleHRlbmRzIGF7c3RhdGljIGNyZWF0ZSh0KXtyZXR1cm4gbmV3IHUodCl9Y29uc3RydWN0b3IodCl7Y29uc3QgZT10Lm1lZGlhfHwoXCJXZWJBdWRpb1wiPT09dC5iYWNrZW5kP25ldyBkOnZvaWQgMCk7c3VwZXIoe21lZGlhOmUsbWVkaWFDb250cm9sczp0Lm1lZGlhQ29udHJvbHMsYXV0b3BsYXk6dC5hdXRvcGxheSxwbGF5YmFja1JhdGU6dC5hdWRpb1JhdGV9KSx0aGlzLnBsdWdpbnM9W10sdGhpcy5kZWNvZGVkRGF0YT1udWxsLHRoaXMuc3Vic2NyaXB0aW9ucz1bXSx0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucz1bXSx0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSxjLHQpLHRoaXMudGltZXI9bmV3IGw7Y29uc3QgaT1lP3ZvaWQgMDp0aGlzLmdldE1lZGlhRWxlbWVudCgpO3RoaXMucmVuZGVyZXI9bmV3IGgodGhpcy5vcHRpb25zLGkpLHRoaXMuaW5pdFBsYXllckV2ZW50cygpLHRoaXMuaW5pdFJlbmRlcmVyRXZlbnRzKCksdGhpcy5pbml0VGltZXJFdmVudHMoKSx0aGlzLmluaXRQbHVnaW5zKCksUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKCk9Pnt0aGlzLmVtaXQoXCJpbml0XCIpO2NvbnN0IHQ9dGhpcy5vcHRpb25zLnVybHx8dGhpcy5nZXRTcmMoKXx8XCJcIjsodHx8dGhpcy5vcHRpb25zLnBlYWtzJiZ0aGlzLm9wdGlvbnMuZHVyYXRpb24pJiZ0aGlzLmxvYWQodCx0aGlzLm9wdGlvbnMucGVha3MsdGhpcy5vcHRpb25zLmR1cmF0aW9uKX0pKX11cGRhdGVQcm9ncmVzcyh0PXRoaXMuZ2V0Q3VycmVudFRpbWUoKSl7cmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyUHJvZ3Jlc3ModC90aGlzLmdldER1cmF0aW9uKCksdGhpcy5pc1BsYXlpbmcoKSksdH1pbml0VGltZXJFdmVudHMoKXt0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRpbWVyLm9uKFwidGlja1wiLCgoKT0+e2lmKCF0aGlzLmlzU2Vla2luZygpKXtjb25zdCB0PXRoaXMudXBkYXRlUHJvZ3Jlc3MoKTt0aGlzLmVtaXQoXCJ0aW1ldXBkYXRlXCIsdCksdGhpcy5lbWl0KFwiYXVkaW9wcm9jZXNzXCIsdCl9fSkpKX1pbml0UGxheWVyRXZlbnRzKCl7dGhpcy5pc1BsYXlpbmcoKSYmKHRoaXMuZW1pdChcInBsYXlcIiksdGhpcy50aW1lci5zdGFydCgpKSx0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMub25NZWRpYUV2ZW50KFwidGltZXVwZGF0ZVwiLCgoKT0+e2NvbnN0IHQ9dGhpcy51cGRhdGVQcm9ncmVzcygpO3RoaXMuZW1pdChcInRpbWV1cGRhdGVcIix0KX0pKSx0aGlzLm9uTWVkaWFFdmVudChcInBsYXlcIiwoKCk9Pnt0aGlzLmVtaXQoXCJwbGF5XCIpLHRoaXMudGltZXIuc3RhcnQoKX0pKSx0aGlzLm9uTWVkaWFFdmVudChcInBhdXNlXCIsKCgpPT57dGhpcy5lbWl0KFwicGF1c2VcIiksdGhpcy50aW1lci5zdG9wKCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJlbXB0aWVkXCIsKCgpPT57dGhpcy50aW1lci5zdG9wKCl9KSksdGhpcy5vbk1lZGlhRXZlbnQoXCJlbmRlZFwiLCgoKT0+e3RoaXMuZW1pdChcImZpbmlzaFwiKX0pKSx0aGlzLm9uTWVkaWFFdmVudChcInNlZWtpbmdcIiwoKCk9Pnt0aGlzLmVtaXQoXCJzZWVraW5nXCIsdGhpcy5nZXRDdXJyZW50VGltZSgpKX0pKSl9aW5pdFJlbmRlcmVyRXZlbnRzKCl7dGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5yZW5kZXJlci5vbihcImNsaWNrXCIsKCh0LGUpPT57dGhpcy5vcHRpb25zLmludGVyYWN0JiYodGhpcy5zZWVrVG8odCksdGhpcy5lbWl0KFwiaW50ZXJhY3Rpb25cIix0KnRoaXMuZ2V0RHVyYXRpb24oKSksdGhpcy5lbWl0KFwiY2xpY2tcIix0LGUpKX0pKSx0aGlzLnJlbmRlcmVyLm9uKFwiZGJsY2xpY2tcIiwoKHQsZSk9Pnt0aGlzLmVtaXQoXCJkYmxjbGlja1wiLHQsZSl9KSksdGhpcy5yZW5kZXJlci5vbihcInNjcm9sbFwiLCgodCxlKT0+e2NvbnN0IGk9dGhpcy5nZXREdXJhdGlvbigpO3RoaXMuZW1pdChcInNjcm9sbFwiLHQqaSxlKmkpfSkpLHRoaXMucmVuZGVyZXIub24oXCJyZW5kZXJcIiwoKCk9Pnt0aGlzLmVtaXQoXCJyZWRyYXdcIil9KSksdGhpcy5yZW5kZXJlci5vbihcInJlbmRlcmVkXCIsKCgpPT57dGhpcy5lbWl0KFwicmVkcmF3Y29tcGxldGVcIil9KSkpO3tsZXQgdDt0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnJlbmRlcmVyLm9uKFwiZHJhZ1wiLChlPT57dGhpcy5vcHRpb25zLmludGVyYWN0JiYodGhpcy5yZW5kZXJlci5yZW5kZXJQcm9ncmVzcyhlKSxjbGVhclRpbWVvdXQodCksdD1zZXRUaW1lb3V0KCgoKT0+e3RoaXMuc2Vla1RvKGUpfSksdGhpcy5pc1BsYXlpbmcoKT8wOjIwMCksdGhpcy5lbWl0KFwiaW50ZXJhY3Rpb25cIixlKnRoaXMuZ2V0RHVyYXRpb24oKSksdGhpcy5lbWl0KFwiZHJhZ1wiLGUpKX0pKSl9fWluaXRQbHVnaW5zKCl7dmFyIHQ7KG51bGw9PT0odD10aGlzLm9wdGlvbnMucGx1Z2lucyl8fHZvaWQgMD09PXQ/dm9pZCAwOnQubGVuZ3RoKSYmdGhpcy5vcHRpb25zLnBsdWdpbnMuZm9yRWFjaCgodD0+e3RoaXMucmVnaXN0ZXJQbHVnaW4odCl9KSl9dW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMoKXt0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCh0PT50KCkpKSx0aGlzLm1lZGlhU3Vic2NyaXB0aW9ucz1bXX1zZXRPcHRpb25zKHQpe3RoaXMub3B0aW9ucz1PYmplY3QuYXNzaWduKHt9LHRoaXMub3B0aW9ucyx0KSx0aGlzLnJlbmRlcmVyLnNldE9wdGlvbnModGhpcy5vcHRpb25zKSx0LmF1ZGlvUmF0ZSYmdGhpcy5zZXRQbGF5YmFja1JhdGUodC5hdWRpb1JhdGUpLG51bGwhPXQubWVkaWFDb250cm9scyYmKHRoaXMuZ2V0TWVkaWFFbGVtZW50KCkuY29udHJvbHM9dC5tZWRpYUNvbnRyb2xzKX1yZWdpc3RlclBsdWdpbih0KXtyZXR1cm4gdC5faW5pdCh0aGlzKSx0aGlzLnBsdWdpbnMucHVzaCh0KSx0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0Lm9uY2UoXCJkZXN0cm95XCIsKCgpPT57dGhpcy5wbHVnaW5zPXRoaXMucGx1Z2lucy5maWx0ZXIoKGU9PmUhPT10KSl9KSkpLHR9Z2V0V3JhcHBlcigpe3JldHVybiB0aGlzLnJlbmRlcmVyLmdldFdyYXBwZXIoKX1nZXRTY3JvbGwoKXtyZXR1cm4gdGhpcy5yZW5kZXJlci5nZXRTY3JvbGwoKX1zZXRTY3JvbGxUaW1lKHQpe2NvbnN0IGU9dC90aGlzLmdldER1cmF0aW9uKCk7dGhpcy5yZW5kZXJlci5zZXRTY3JvbGxQZXJjZW50YWdlKGUpfWdldEFjdGl2ZVBsdWdpbnMoKXtyZXR1cm4gdGhpcy5wbHVnaW5zfWxvYWRBdWRpbyhlLHMsbixyKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2lmKHRoaXMuZW1pdChcImxvYWRcIixlKSwhdGhpcy5vcHRpb25zLm1lZGlhJiZ0aGlzLmlzUGxheWluZygpJiZ0aGlzLnBhdXNlKCksdGhpcy5kZWNvZGVkRGF0YT1udWxsLCFzJiYhbil7Y29uc3QgdD10PT50aGlzLmVtaXQoXCJsb2FkaW5nXCIsdCk7cz15aWVsZCBvLmZldGNoQmxvYihlLHQsdGhpcy5vcHRpb25zLmZldGNoUGFyYW1zKX10aGlzLnNldFNyYyhlLHMpO2NvbnN0IHQ9cnx8dGhpcy5nZXREdXJhdGlvbigpfHwoeWllbGQgbmV3IFByb21pc2UoKHQ9Pnt0aGlzLm9uY2VNZWRpYUV2ZW50KFwibG9hZGVkbWV0YWRhdGFcIiwoKCk9PnQodGhpcy5nZXREdXJhdGlvbigpKSkpfSkpKTtpZihuKXRoaXMuZGVjb2RlZERhdGE9aS5jcmVhdGVCdWZmZXIobix0fHwwKTtlbHNlIGlmKHMpe2NvbnN0IHQ9eWllbGQgcy5hcnJheUJ1ZmZlcigpO3RoaXMuZGVjb2RlZERhdGE9eWllbGQgaS5kZWNvZGUodCx0aGlzLm9wdGlvbnMuc2FtcGxlUmF0ZSl9dGhpcy5kZWNvZGVkRGF0YSYmKHRoaXMuZW1pdChcImRlY29kZVwiLHRoaXMuZ2V0RHVyYXRpb24oKSksdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5kZWNvZGVkRGF0YSkpLHRoaXMuZW1pdChcInJlYWR5XCIsdGhpcy5nZXREdXJhdGlvbigpKX0pKX1sb2FkKGUsaSxzKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3lpZWxkIHRoaXMubG9hZEF1ZGlvKGUsdm9pZCAwLGkscyl9KSl9bG9hZEJsb2IoZSxpLHMpe3JldHVybiB0KHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7eWllbGQgdGhpcy5sb2FkQXVkaW8oXCJibG9iXCIsZSxpLHMpfSkpfXpvb20odCl7aWYoIXRoaXMuZGVjb2RlZERhdGEpdGhyb3cgbmV3IEVycm9yKFwiTm8gYXVkaW8gbG9hZGVkXCIpO3RoaXMucmVuZGVyZXIuem9vbSh0KSx0aGlzLmVtaXQoXCJ6b29tXCIsdCl9Z2V0RGVjb2RlZERhdGEoKXtyZXR1cm4gdGhpcy5kZWNvZGVkRGF0YX1leHBvcnRQZWFrcyh7Y2hhbm5lbHM6dD0yLG1heExlbmd0aDplPThlMyxwcmVjaXNpb246aT0xZTR9PXt9KXtpZighdGhpcy5kZWNvZGVkRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYXVkaW8gaGFzIG5vdCBiZWVuIGRlY29kZWQgeWV0XCIpO2NvbnN0IHM9TWF0aC5taW4odCx0aGlzLmRlY29kZWREYXRhLm51bWJlck9mQ2hhbm5lbHMpLG49W107Zm9yKGxldCB0PTA7dDxzO3QrKyl7Y29uc3Qgcz10aGlzLmRlY29kZWREYXRhLmdldENoYW5uZWxEYXRhKHQpLHI9W10sbz1NYXRoLnJvdW5kKHMubGVuZ3RoL2UpO2ZvcihsZXQgdD0wO3Q8ZTt0Kyspe2NvbnN0IGU9cy5zbGljZSh0Km8sKHQrMSkqbyk7bGV0IG49MDtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoO3QrKyl7Y29uc3QgaT1lW3RdO01hdGguYWJzKGkpPk1hdGguYWJzKG4pJiYobj1pKX1yLnB1c2goTWF0aC5yb3VuZChuKmkpL2kpfW4ucHVzaChyKX1yZXR1cm4gbn1nZXREdXJhdGlvbigpe2xldCB0PXN1cGVyLmdldER1cmF0aW9uKCl8fDA7cmV0dXJuIDAhPT10JiZ0IT09MS8wfHwhdGhpcy5kZWNvZGVkRGF0YXx8KHQ9dGhpcy5kZWNvZGVkRGF0YS5kdXJhdGlvbiksdH10b2dnbGVJbnRlcmFjdGlvbih0KXt0aGlzLm9wdGlvbnMuaW50ZXJhY3Q9dH1zZXRUaW1lKHQpe3N1cGVyLnNldFRpbWUodCksdGhpcy51cGRhdGVQcm9ncmVzcyh0KX1zZWVrVG8odCl7Y29uc3QgZT10aGlzLmdldER1cmF0aW9uKCkqdDt0aGlzLnNldFRpbWUoZSl9cGxheVBhdXNlKCl7cmV0dXJuIHQodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbiooKXtyZXR1cm4gdGhpcy5pc1BsYXlpbmcoKT90aGlzLnBhdXNlKCk6dGhpcy5wbGF5KCl9KSl9c3RvcCgpe3RoaXMucGF1c2UoKSx0aGlzLnNldFRpbWUoMCl9c2tpcCh0KXt0aGlzLnNldFRpbWUodGhpcy5nZXRDdXJyZW50VGltZSgpK3QpfWVtcHR5KCl7dGhpcy5sb2FkKFwiXCIsW1swXV0sLjAwMSl9c2V0TWVkaWFFbGVtZW50KHQpe3RoaXMudW5zdWJzY3JpYmVQbGF5ZXJFdmVudHMoKSxzdXBlci5zZXRNZWRpYUVsZW1lbnQodCksdGhpcy5pbml0UGxheWVyRXZlbnRzKCl9ZXhwb3J0SW1hZ2UoZT1cImltYWdlL3BuZ1wiLGk9MSxzPVwiZGF0YVVSTFwiKXtyZXR1cm4gdCh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe3JldHVybiB0aGlzLnJlbmRlcmVyLmV4cG9ydEltYWdlKGUsaSxzKX0pKX1kZXN0cm95KCl7dGhpcy5lbWl0KFwiZGVzdHJveVwiKSx0aGlzLnBsdWdpbnMuZm9yRWFjaCgodD0+dC5kZXN0cm95KCkpKSx0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodD0+dCgpKSksdGhpcy51bnN1YnNjcmliZVBsYXllckV2ZW50cygpLHRoaXMudGltZXIuZGVzdHJveSgpLHRoaXMucmVuZGVyZXIuZGVzdHJveSgpLHN1cGVyLmRlc3Ryb3koKX19dS5CYXNlUGx1Z2luPWNsYXNzIGV4dGVuZHMgZXtjb25zdHJ1Y3Rvcih0KXtzdXBlcigpLHRoaXMuc3Vic2NyaXB0aW9ucz1bXSx0aGlzLm9wdGlvbnM9dH1vbkluaXQoKXt9X2luaXQodCl7dGhpcy53YXZlc3VyZmVyPXQsdGhpcy5vbkluaXQoKX1kZXN0cm95KCl7dGhpcy5lbWl0KFwiZGVzdHJveVwiKSx0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgodD0+dCgpKSl9fSx1LmRvbT1yO2V4cG9ydHt1IGFzIGRlZmF1bHR9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9pbWFnZXMnO1xuaW1wb3J0IGxvYWRBdWRpbyBmcm9tICcuL2F1ZGlvJztcbi8vIGltcG9ydCB0cmFja0NvbnRhaW5lciBmcm9tICcuL2F1ZGlvJztcbi8vIGltcG9ydCBzdG9yeTEgZnJvbSAnLi9hdWRpbyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyBjcmVhdGUgaW1hZ2VTZWN0aW9uLCBhcHBlbmQgdG8gY29udGVudCBvbiB0ZW1wbGF0ZS5odG1sXG5jb25zdCBpbWFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltYWdlU2VjdGlvbi5pZCA9ICdpbWFnZS1zZWN0aW9uJztcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VTZWN0aW9uKTtcblxuLy8gY3JlYXRlIHNsaWRlRnJhbWUsIGFwcGVuZCB0byBpbWFnZVNlY3Rpb25cbmNvbnN0IHNsaWRlRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNsaWRlRnJhbWUuaWQgPSAnc2xpZGUtZnJhbWUnO1xuaW1hZ2VTZWN0aW9uLmFwcGVuZENoaWxkKHNsaWRlRnJhbWUpO1xuXG4vLyBjdXJyZW50SW1hZ2UgaG9sZHMgdGhlIGltYWdlc1tpXSBwb3NpdGlvblxuLy8gc3RhcnRzIGF0IHJhbmRvbSBiZXR3ZWVuIDAgYW5kIDE1NlxuLy8gaXQgaXNuJ3QgYWN0dWFsbHkgbGlua2VkIHRvIGltYWdlc1tpXSBkYXRhIGluIGFueSB3YXlcbi8vIG90aGVyIHRoYW4gdGhlIGZhY3QgdGhlIGJvdGggc3RhcnQgYXQgMCBhbmQgZ28gdXAgb3IgZG93biBzZXF1ZW50aWFsbHlcbmxldCBjdXJyZW50SW1hZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNTcpO1xuXG4vLyBpbUNvdW50IGhvbGRzIHRoZSB0b3RhbCBudW1iZXIgb2YgaW1hZ2VzXG4vLyBzaW5jZSBhcnJheSBzdGFydHMgYXQgMCwgd2UgZ2V0IHRvdGFsIGNvdW50IGl0IGJ5IHJ1bm5pbmcgbGVuZ3RoIC0gMVxuY29uc3QgaW1hZ2VDb3VudCA9IGltYWdlcy5sZW5ndGggLSAxO1xuXG5jb25zdCByZXZlcnNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5yZXZlcnNlQnV0dG9uLmlkID0gJ3JldmVyc2UtYnV0dG9uJztcbnJldmVyc2VCdXR0b24udGV4dENvbnRlbnQgPSAnPCc7XG5cbmNvbnN0IGFkdmFuY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkdmFuY2VCdXR0b24uaWQgPSAnYWR2YW5jZS1idXR0b24nO1xuYWR2YW5jZUJ1dHRvbi50ZXh0Q29udGVudCA9ICc+JztcblxubGV0IGltYWdlSG9sZGVyID0gaW1hZ2VzW2N1cnJlbnRJbWFnZV07XG5pbWFnZUhvbGRlci5pZCA9ICdjdXJyZW50LWltYWdlJztcbnNsaWRlRnJhbWUuYXBwZW5kQ2hpbGQocmV2ZXJzZUJ1dHRvbik7XG5zbGlkZUZyYW1lLmFwcGVuZENoaWxkKGltYWdlSG9sZGVyKTtcbnNsaWRlRnJhbWUuYXBwZW5kQ2hpbGQoYWR2YW5jZUJ1dHRvbik7XG5cbi8vIGFwcGVuZC9kaXNwbGF5IGN1cnJlbnRJbWFnZVswXSBvbiBpbnRpYWwgcGFnZSBsb2FkXG5cbi8vIGdyYWJzIGFuZCByZW1vdmVzIHJlbW92ZXMgaW1hZ2Ugb24gZGlzcGxheVxuLy8gYXBwZW5kcyB0aGUgbmV3IGN1cnJlbnQgaW1hZ2Vcbi8vIGN1cnJlbnQgaW1hZ2UgaGFzIGp1c3QgYmVlbiB1cGRhdGVkXG4vLyBhcyB1cGRhdGVJbWFnZSBpcyBjYWxsZWQgaW4gYWR2YW5jZUltYWdlKCkgb3IgcmV2ZXJzZW1hZ2UoKVxuY29uc3QgdXBkYXRlSW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGdldEN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1pbWFnZScpO1xuICBzbGlkZUZyYW1lLnJlbW92ZUNoaWxkKGdldEN1cnJlbnQpO1xuICBpbWFnZUhvbGRlciA9IGltYWdlc1tjdXJyZW50SW1hZ2VdO1xuICBpbWFnZUhvbGRlci5pZCA9ICdjdXJyZW50LWltYWdlJztcbiAgc2xpZGVGcmFtZS5hcHBlbmRDaGlsZChyZXZlcnNlQnV0dG9uKTtcbiAgc2xpZGVGcmFtZS5hcHBlbmRDaGlsZChpbWFnZUhvbGRlcik7XG4gIHNsaWRlRnJhbWUuYXBwZW5kQ2hpbGQoYWR2YW5jZUJ1dHRvbik7XG59O1xuXG4vLyBpbmNyZWFzZXMgY3VycmVudEltYWdlIG51bWJlciBzbyBuZXh0IGltYWdlc1tpXSBpcyBjYWxsZWQgb24gdXBkYXRlSW1hZ2UoKVxuLy8gaWYgY3VycmVudEltYWdlIGNvdW50IGlzID49IHRoZSBpbWFnZUNvdW50IHNldCBpdCB0byAwIHRvIGxvb3BcbmNvbnN0IGFkdmFuY2VJbWFnZSA9ICgpID0+IHtcbiAgaWYgKGN1cnJlbnRJbWFnZSA+PSBpbWFnZUNvdW50KSB7XG4gICAgY3VycmVudEltYWdlID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50SW1hZ2UgKz0gMTtcbiAgfVxuICB1cGRhdGVJbWFnZSgpO1xufTtcblxuLy8gc2FtZSBidXQgcmV2ZXJzZSB0byBnbyBiYWNrd2FyZCBpbiBpbWFnZXNbXVxuY29uc3QgcmV2ZXJzZUltYWdlID0gKCkgPT4ge1xuICBpZiAoY3VycmVudEltYWdlIDw9IDApIHtcbiAgICBjdXJyZW50SW1hZ2UgPSBpbWFnZUNvdW50O1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRJbWFnZSAtPSAxO1xuICB9XG4gIHVwZGF0ZUltYWdlKCk7XG59O1xuXG4vLyBwdXQgdGltZXIgaW4gYSB2YXIgc28gaSBjb3VsZCBtZXNzIHdpdGggaXQgaW4gdGhlIGJ1dHRvbnNcbmxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHsgYWR2YW5jZUltYWdlKCk7IH0sIDEwMDAwKTtcblxuYWR2YW5jZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWR2YW5jZUltYWdlKCk7XG4gIC8vIHJlc2V0IHRpbWVyIHRvIHByZXZlbnQgc2hvcnQgYWR2YW5jZXNcbiAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGFkdmFuY2VJbWFnZSgpO1xuICB9LCAxMDAwMCk7XG59KTtcblxucmV2ZXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcmV2ZXJzZUltYWdlKCk7XG4gIC8vIHJlc2V0IHRpbWVyIHRvIHByZXZlbnQgc2hvcnQgYWR2YW5jZXNcbiAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGFkdmFuY2VJbWFnZSgpO1xuICB9LCAxMDAwMCk7XG59KTtcblxuLy8gcnVucyByZXZlcnNlSW1hZ2UoKSBldmVyeSA4IHNlY29uZHMgdG8gYXV0byBhZHZhbmNlXG5cbmNvbnN0IGF1ZGlvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYXVkaW9TZWN0aW9uLmlkID0gJ2F1ZGlvLXNlY3Rpb24nO1xuY29uc3QgdHJhY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRyYWNrQ29udGFpbmVyLmlkID0gJ3RyYWNrLWNvbnRhaW5lcic7XG5cbmF1ZGlvU2VjdGlvbi5hcHBlbmRDaGlsZCh0cmFja0NvbnRhaW5lcik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYXVkaW9TZWN0aW9uKTtcblxubG9hZEF1ZGlvKCk7XG5cbi8vIE9MRCBXQVkgT0YgSEFORExJTkcgQVVESU8gT04gRE9NXG4vLyBjb25zdCBhdWRpb1VuaXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb25zdCBhdWRpb1VuaXQxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuLy8gY29uc3QgZWFybHlMaWZlID0gc3RvcnkxWzBdO1xuLy8gYXVkaW9Vbml0MS5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQxTGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0MUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Vhcmx5LWxpZmUnKTtcbi8vIGF1ZGlvVW5pdDFMYWJlbC50ZXh0Q29udGVudCA9ICdFYXJseSBsaWZlJztcbi8vIGF1ZGlvVW5pdDEuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0MUxhYmVsKTtcbi8vIGF1ZGlvVW5pdDEuYXBwZW5kQ2hpbGQoZWFybHlMaWZlKTtcblxuLy8gY29uc3QgYXVkaW9Vbml0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgYXVkaW9Vbml0MkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbi8vIGNvbnN0IG1vbUtpZHNDYXJwZW50cnkgPSBzdG9yeTFbMV07XG4vLyBhdWRpb1VuaXQyLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQnKTtcbi8vIGF1ZGlvVW5pdDJMYWJlbC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0LWxhYmVsJyk7XG4vLyBhdWRpb1VuaXQyTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbW9tLWtpZHMtY2FycGVudHJ5Jyk7XG4vLyBhdWRpb1VuaXQyTGFiZWwudGV4dENvbnRlbnQgPSAnTW9tLCBraWRzLCBhbmQgY2FycGVudHJ5Jztcbi8vIGF1ZGlvVW5pdDIuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0MkxhYmVsKTtcbi8vIGF1ZGlvVW5pdDIuYXBwZW5kQ2hpbGQobW9tS2lkc0NhcnBlbnRyeSk7XG5cbi8vIGNvbnN0IGF1ZGlvVW5pdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnN0IGF1ZGlvVW5pdDNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4vLyBjb25zdCBuYXR1cmUgPSBzdG9yeTFbMl07XG4vLyBhdWRpb1VuaXQzLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQnKTtcbi8vIGF1ZGlvVW5pdDNMYWJlbC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0LWxhYmVsJyk7XG4vLyBhdWRpb1VuaXQzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmF0dXJlJyk7XG4vLyBhdWRpb1VuaXQzTGFiZWwudGV4dENvbnRlbnQgPSAnTmF0dXJlJztcbi8vIGF1ZGlvVW5pdDMuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0M0xhYmVsKTtcbi8vIGF1ZGlvVW5pdDMuYXBwZW5kQ2hpbGQobmF0dXJlKTtcblxuLy8gY29uc3QgYXVkaW9Vbml0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgYXVkaW9Vbml0NExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbi8vIGNvbnN0IHJlbGlnaW9uID0gc3RvcnkxWzNdO1xuLy8gYXVkaW9Vbml0NC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQ0TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0NExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JlbGlnaW9uJyk7XG4vLyBhdWRpb1VuaXQ0TGFiZWwudGV4dENvbnRlbnQgPSAnUmVsaWdpb24nO1xuLy8gYXVkaW9Vbml0NC5hcHBlbmRDaGlsZChhdWRpb1VuaXQ0TGFiZWwpO1xuLy8gYXVkaW9Vbml0NC5hcHBlbmRDaGlsZChyZWxpZ2lvbik7XG5cbi8vIGNvbnN0IGF1ZGlvVW5pdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnN0IGF1ZGlvVW5pdDVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4vLyBjb25zdCBhZHZpY2VUb0dyYW5ka2lkcyA9IHN0b3J5MVs0XTtcbi8vIGF1ZGlvVW5pdDUuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdCcpO1xuLy8gYXVkaW9Vbml0NUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQtbGFiZWwnKTtcbi8vIGF1ZGlvVW5pdDVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdhZHZpY2UtdG8tZ3JhbmRraWRzJyk7XG4vLyBhdWRpb1VuaXQ1TGFiZWwudGV4dENvbnRlbnQgPSAnQWR2aWNlIHRvIGhpcyBncmFuZGtpZHMnO1xuLy8gYXVkaW9Vbml0NS5hcHBlbmRDaGlsZChhdWRpb1VuaXQ1TGFiZWwpO1xuLy8gYXVkaW9Vbml0NS5hcHBlbmRDaGlsZChhZHZpY2VUb0dyYW5ka2lkcyk7XG5cbi8vIGNvbnN0IGF1ZGlvVW5pdDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnN0IGF1ZGlvVW5pdDZMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4vLyBjb25zdCBhZHZpY2VUb0hpc0tpZHMgPSBzdG9yeTFbNV07XG4vLyBhdWRpb1VuaXQ2LmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQnKTtcbi8vIGF1ZGlvVW5pdDZMYWJlbC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0LWxhYmVsJyk7XG4vLyBhdWRpb1VuaXQ2TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWR2aWNlLXRvLWhpcy1raWRzJyk7XG4vLyBhdWRpb1VuaXQ2TGFiZWwudGV4dENvbnRlbnQgPSAnQWR2aWNlIHRvIGhpcyBraWRzJztcbi8vIGF1ZGlvVW5pdDYuYXBwZW5kQ2hpbGQoYXVkaW9Vbml0NkxhYmVsKTtcbi8vIGF1ZGlvVW5pdDYuYXBwZW5kQ2hpbGQoYWR2aWNlVG9IaXNLaWRzKTtcblxuLy8gY29uc3QgYXVkaW9Vbml0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gY29uc3QgYXVkaW9Vbml0N0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbi8vIGNvbnN0IG1lc3NhZ2VUb1RoZUZhbWlseSA9IHN0b3J5MVs2XTtcbi8vIGF1ZGlvVW5pdDcuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdCcpO1xuLy8gYXVkaW9Vbml0N0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLXVuaXQtbGFiZWwnKTtcbi8vIGF1ZGlvVW5pdDdMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlLXRvLXRoZS1mYW1pbHknKTtcbi8vIGF1ZGlvVW5pdDdMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlIHRvIHRoZSBmYW1pbHknO1xuLy8gYXVkaW9Vbml0Ny5hcHBlbmRDaGlsZChhdWRpb1VuaXQ3TGFiZWwpO1xuLy8gYXVkaW9Vbml0Ny5hcHBlbmRDaGlsZChtZXNzYWdlVG9UaGVGYW1pbHkpO1xuXG4vLyBjb25zdCBhdWRpb1VuaXQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb25zdCBhdWRpb1VuaXQ4TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuLy8gY29uc3QgbWVzc2FnZVRvTW9tID0gc3RvcnkxWzddO1xuLy8gYXVkaW9Vbml0OC5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQ4TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0OExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UtdG8tbW9tJyk7XG4vLyBhdWRpb1VuaXQ4TGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZSB0byBNb20nO1xuLy8gYXVkaW9Vbml0OC5hcHBlbmRDaGlsZChhdWRpb1VuaXQ4TGFiZWwpO1xuLy8gYXVkaW9Vbml0OC5hcHBlbmRDaGlsZChtZXNzYWdlVG9Nb20pO1xuXG4vLyBjb25zdCBhdWRpb1VuaXQ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBjb25zdCBhdWRpb1VuaXQ5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuLy8gY29uc3QgZGFkU2luZ3NLcmlzdG9mZmVyc29uID0gc3RvcnkxWzhdO1xuLy8gYXVkaW9Vbml0OS5jbGFzc0xpc3QuYWRkKCdhdWRpby11bml0Jyk7XG4vLyBhdWRpb1VuaXQ5TGFiZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tdW5pdC1sYWJlbCcpO1xuLy8gYXVkaW9Vbml0OUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhZC1zaW5ncy1rcmlzdG9mZmVyc29uJyk7XG4vLyBhdWRpb1VuaXQ5TGFiZWwudGV4dENvbnRlbnQgPSAnRGFkIHNpbmdzIEtyaXN0b2ZmZXJzb24nO1xuLy8gYXVkaW9Vbml0OS5hcHBlbmRDaGlsZChhdWRpb1VuaXQ5TGFiZWwpO1xuLy8gYXVkaW9Vbml0OS5hcHBlbmRDaGlsZChkYWRTaW5nc0tyaXN0b2ZmZXJzb24pO1xuXG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0MSk7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0Mik7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0Myk7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0NCk7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0NSk7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0Nik7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0Nyk7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0OCk7XG4vLyBhdWRpb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXVkaW9Vbml0OSk7XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9