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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LibreBaskerville-Regular.ttf */ "./src/fonts/LibreBaskerville-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NunitoSans-Regular.ttf */ "./src/fonts/NunitoSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Libre-Baskerville';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-family: 'Nunito-Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: whitesmoke;\n    color: darkslategray;\n    height: 100vh;\n    font-family: 'Nunito-Sans';\n}\n\n/* .content {\n    height: 100vh;\n    display: grid;\n} */\n\nmain {\n    /* height: 100vh; */\n    display: grid;\n    justify-content: center;\n    background: linear-gradient(to bottom, darkslategray 50vh, whitesmoke 50vh);\n}\n\nheader {\n    /* height: 10vh; */\n    width: 85vw;\n    display: grid;\n    justify-items: end;\n}\n\nheader h2 {\n    font-size: 3rem;\n}\n\n.nav {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    /* margin-bottom: .5rem; */\n    line-height: 2rem;\n}\n\n.nav-li {\n    list-style: none;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-inline: 15px;\n    padding-top: 5px;\n}\n\n.nav-li:hover, .nav-li:active {\n    background-color: rgb(47, 79, 79, .3);\n    color: whitesmoke;\n    cursor: pointer;\n}\n\n#home {\n    text-align: center;\n    width: 85vw;\n}\n\n.home-title, .menu-title, .about-title {\n    display: grid;\n    position: relative;\n    text-align: center;\n    justify-items: center;\n}\n\n#menu {\n    text-align: center;\n    width: 85vw;\n\n}\n\n#about {\n    text-align: center;\n    width: 85vw;\n\n}\n\n#hero-img, #menu-img, #about-img {\n    height: 50vh;\n    width: 85vw;\n    object-fit: fill;\n}\n\nh1 {\n    color: whitesmoke;\n    position: absolute;\n    bottom: 0;\n    z-index: 1;\n    margin-bottom: 20px;\n    font-size: 5rem;\n    font-family: 'Libre-Baskerville';\n    text-shadow: 5px 5px 6px darkslategray;\n}\n\np {\n    margin-block: 3rem;\n    font-size: 1.3rem;\n}\n\n.menu-items {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    gap: 2rem;\n    text-align: left;\n    margin-inline: auto;\n    width: max-content;\n}\n\n.menu-items p {\n    margin-top: .3rem;\n}\n\n.menu-items-img {\n    margin-inline: 25px;\n    height: 200px;\n    width: 200px;\n    border-radius: 10px;\n}\n\n.menu-coffee, .menu-milkshake, .menu-snacks {\n    width: 250px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,+DAAmE;IACnE,0BAA0B;IAC1B,+DAA6D;AACjE;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;IACpB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;;;GAGG;;AAEH;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,2EAA2E;AAC/E;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;IACI,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,eAAe;IACf,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'Libre-Baskerville';\n    src: url('./fonts/LibreBaskerville-Regular.ttf') format('truetype');\n    font-family: 'Nunito-Sans';\n    src: url('./fonts/NunitoSans-Regular.ttf') format('truetype');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: whitesmoke;\n    color: darkslategray;\n    height: 100vh;\n    font-family: 'Nunito-Sans';\n}\n\n/* .content {\n    height: 100vh;\n    display: grid;\n} */\n\nmain {\n    /* height: 100vh; */\n    display: grid;\n    justify-content: center;\n    background: linear-gradient(to bottom, darkslategray 50vh, whitesmoke 50vh);\n}\n\nheader {\n    /* height: 10vh; */\n    width: 85vw;\n    display: grid;\n    justify-items: end;\n}\n\nheader h2 {\n    font-size: 3rem;\n}\n\n.nav {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    /* margin-bottom: .5rem; */\n    line-height: 2rem;\n}\n\n.nav-li {\n    list-style: none;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-inline: 15px;\n    padding-top: 5px;\n}\n\n.nav-li:hover, .nav-li:active {\n    background-color: rgb(47, 79, 79, .3);\n    color: whitesmoke;\n    cursor: pointer;\n}\n\n#home {\n    text-align: center;\n    width: 85vw;\n}\n\n.home-title, .menu-title, .about-title {\n    display: grid;\n    position: relative;\n    text-align: center;\n    justify-items: center;\n}\n\n#menu {\n    text-align: center;\n    width: 85vw;\n\n}\n\n#about {\n    text-align: center;\n    width: 85vw;\n\n}\n\n#hero-img, #menu-img, #about-img {\n    height: 50vh;\n    width: 85vw;\n    object-fit: fill;\n}\n\nh1 {\n    color: whitesmoke;\n    position: absolute;\n    bottom: 0;\n    z-index: 1;\n    margin-bottom: 20px;\n    font-size: 5rem;\n    font-family: 'Libre-Baskerville';\n    text-shadow: 5px 5px 6px darkslategray;\n}\n\np {\n    margin-block: 3rem;\n    font-size: 1.3rem;\n}\n\n.menu-items {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    gap: 2rem;\n    text-align: left;\n    margin-inline: auto;\n    width: max-content;\n}\n\n.menu-items p {\n    margin-top: .3rem;\n}\n\n.menu-items-img {\n    margin-inline: 25px;\n    height: 200px;\n    width: 200px;\n    border-radius: 10px;\n}\n\n.menu-coffee, .menu-milkshake, .menu-snacks {\n    width: 250px;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/about.jpg */ "./src/img/about.jpg");


function about() {
    console.log('-------');
    console.log('ABOUT');
    const aboutSection = document.createElement('section')
    aboutSection.id = 'about'
    aboutArticle(aboutSection)
    return aboutSection
}

function aboutArticle(aboutSection) {
    console.log('----------');
    console.log('about article');
    const aboutTitle = document.createElement('div')
        aboutTitle.classList.add('about-title')
        aboutSection.appendChild(aboutTitle)
    const aboutH1 = document.createElement('h1')
        aboutH1.textContent = 'The Odin Coffee Story'
        aboutTitle.appendChild(aboutH1)
    const aboutHero = new Image()
        aboutHero.src = _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__
        aboutHero.alt = 'About Odin Coffee Shop'
        aboutHero.id = 'about-img'
        aboutTitle.appendChild(aboutHero)
    const aboutP = document.createElement('p')
        aboutP.textContent = 'Welcome to Odin Coffee. We are coffee lovers with years of experience working with the best beans, and equipment availible.'
        aboutSection.appendChild(aboutP)
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hero.jpg */ "./src/img/hero.jpg");


function home() {
    console.log('-------');
    console.log('HOME');
    const homeSection = document.createElement('section')
    // homeSection.textContent = 'Home text'
    homeSection.id = 'home'
    homeArticle(homeSection)
    return homeSection
}

function homeArticle(homeSection) {
    console.log('----------');
    console.log('HOME article');
    const homeTitle = document.createElement('div')
        homeTitle.classList.add('home-title')
        homeSection.appendChild(homeTitle)
    const homeH1 = document.createElement('h1')
        homeH1.textContent = 'Wecome to Odin Coffee'
        homeTitle.appendChild(homeH1)
    const homeHero = new Image()
        homeHero.src = _img_hero_jpg__WEBPACK_IMPORTED_MODULE_0__
        homeHero.alt = 'Odin Coffee Shop'
        homeHero.id = 'hero-img'
        homeTitle.appendChild(homeHero)
    const homeP = document.createElement('p')
        homeP.textContent = 'Home of the finest coffee from around the world!'
        homeSection.appendChild(homeP)
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu.jpg */ "./src/img/menu.jpg");
/* harmony import */ var _img_coffee_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/coffee.jpg */ "./src/img/coffee.jpg");
/* harmony import */ var _img_milkshake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/milkshake.jpg */ "./src/img/milkshake.jpg");
/* harmony import */ var _img_snacks_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/snacks.jpg */ "./src/img/snacks.jpg");





function menu() {
    console.log('-------');
    console.log('MENU');
    const menuSection = document.createElement('section')
    menuSection.id = 'menu'
    menuArticle(menuSection)
    return menuSection
}

function menuArticle(menuSection) {
    console.log('----------');
    console.log('menu article');
    const menuTitle = document.createElement('div')
        menuTitle.classList.add('menu-title')
        menuSection.appendChild(menuTitle)
    const menuH1 = document.createElement('h1')
        menuH1.textContent = 'Our Menu at Odin Coffee'
        menuTitle.appendChild(menuH1)
    const menuHero = new Image()
        menuHero.src = _img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__
        menuHero.alt = 'menu Odin Coffee Shop'
        menuHero.id = 'menu-img'
        menuTitle.appendChild(menuHero)
    const menuP = document.createElement('p')
        menuP.textContent = 'Welcome to Odin Coffee. We are coffee lovers with years of experience working with the best beans, and equipment availible.'
        menuSection.appendChild(menuP)
    const menuItems = document.createElement('section')
        menuItems.classList.add('menu-items')
        menuSection.appendChild(menuItems)
    const menuCoffee = document.createElement('div')
        menuCoffee.classList.add('menu-coffee')
    const menuCoffeeImg = new Image()
        menuCoffeeImg.classList.add('menu-items-img')
        menuCoffeeImg.src = _img_coffee_jpg__WEBPACK_IMPORTED_MODULE_1__
        menuCoffeeImg.id = 'menu-coffee'
        menuCoffeeImg.alt = 'Coffee from the Odin Coffee menu.'
        menuItems.appendChild(menuCoffee)
        menuCoffee.appendChild(menuCoffeeImg)
    const menuCoffeeText = document.createElement('p')
        menuCoffeeText.textContent = `Odin Coffee presents only the finest beans from around the world!`
        menuCoffee.appendChild(menuCoffeeText)
    const menuMilkshake = document.createElement('div')
        menuMilkshake.classList.add('menu-milkshake')
        menuItems.appendChild(menuMilkshake)
    const menuMilkshakeImg = new Image()
        menuMilkshakeImg.classList.add('menu-items-img')
        menuMilkshakeImg.src = _img_milkshake_jpg__WEBPACK_IMPORTED_MODULE_2__
        menuMilkshakeImg.id = 'menu-milkshake'
        menuMilkshakeImg.alt = 'A milkshake from the Odin Coffee menu.'
        menuMilkshake.appendChild(menuMilkshakeImg)
    const menuMilkshakeText = document.createElement('p')
        menuMilkshakeText.textContent = `Odin Coffee also offers wonderful milkshakes for our friends that don't drink coffee.`
        menuMilkshake.appendChild(menuMilkshakeText)
    const menuSnacks = document.createElement('div')
        menuSnacks.classList.add('menu-snacks')
        menuItems.appendChild(menuSnacks)
    const menuSnacksImg = new Image()
        menuSnacksImg.classList.add('menu-items-img')
        menuSnacksImg.src = _img_snacks_jpg__WEBPACK_IMPORTED_MODULE_3__
        menuSnacksImg.id = 'menu-snacks'
        menuSnacksImg.alt = 'Delicious snacks from the Odin Coffee bakery.'
        menuSnacks.appendChild(menuSnacksImg)
    const menuSnacksText = document.createElement('p')
        menuSnacksText.textContent = `Get delicious snacks from our bakery!`
        menuSnacks.appendChild(menuSnacksText)
}

/***/ }),

/***/ "./src/fonts/LibreBaskerville-Regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/LibreBaskerville-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "LibreBaskerville-Regular.ttf";

/***/ }),

/***/ "./src/fonts/NunitoSans-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/NunitoSans-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "NunitoSans-Regular.ttf";

/***/ }),

/***/ "./src/img/about.jpg":
/*!***************************!*\
  !*** ./src/img/about.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "about.jpg";

/***/ }),

/***/ "./src/img/coffee.jpg":
/*!****************************!*\
  !*** ./src/img/coffee.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee.jpg";

/***/ }),

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.jpg";

/***/ }),

/***/ "./src/img/menu.jpg":
/*!**************************!*\
  !*** ./src/img/menu.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.jpg";

/***/ }),

/***/ "./src/img/milkshake.jpg":
/*!*******************************!*\
  !*** ./src/img/milkshake.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "milkshake.jpg";

/***/ }),

/***/ "./src/img/snacks.jpg":
/*!****************************!*\
  !*** ./src/img/snacks.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snacks.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
console.log('test');






const content = document.querySelector('.content')

const header = document.createElement('header')
const headerText = document.createElement('h2')
    headerText.textContent = `Odin Coffee`
    content.appendChild(header)
    header.appendChild(headerText)
    
const main = document.createElement('main')
    content.appendChild(main)

const nav = document.createElement('ul')
    nav.classList.add('nav')
    header.appendChild(nav)

main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])())

let navList = ['Home', 'Menu', 'About']
    navList.forEach((item) => {
        const navListItem = document.createElement('li')
            navListItem.classList.add('nav-li')
            navListItem.id = item
            navListItem.textContent = item
            nav.appendChild(navListItem)
            console.log(item);
        
            navListItem.addEventListener('pointerup', (item) => {
                console.log('event test ------------');
                const tabList = document.querySelectorAll('section')
                if(navListItem.id === 'Home') {
                    main.replaceChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), ...tabList)
                }
                if(navListItem.id === 'Menu') {
                    main.replaceChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), ...tabList)
                }
                if(navListItem.id === 'About') {
                    main.replaceChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])(), ...tabList)
                }
            })
    })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9OdW5pdG9TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xpYnJlLUJhc2tlcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tU2Fucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tU2Fucyc7XFxufVxcblxcbi8qIC5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59ICovXFxuXFxubWFpbiB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrc2xhdGVncmF5IDUwdmgsIHdoaXRlc21va2UgNTB2aCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIC8qIGhlaWdodDogMTB2aDsgKi9cXG4gICAgd2lkdGg6IDg1dnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuaGVhZGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogLjVyZW07ICovXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubmF2LWxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5uYXYtbGk6aG92ZXIsIC5uYXYtbGk6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA3OSwgNzksIC4zKTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbn1cXG5cXG4uaG9tZS10aXRsZSwgLm1lbnUtdGl0bGUsIC5hYm91dC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODV2dztcXG5cXG59XFxuXFxuI2Fib3V0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODV2dztcXG5cXG59XFxuXFxuI2hlcm8taW1nLCAjbWVudS1pbWcsICNhYm91dC1pbWcge1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xpYnJlLUJhc2tlcnZpbGxlJztcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggNnB4IGRhcmtzbGF0ZWdyYXk7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tYmxvY2s6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW1zIHAge1xcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbXMtaW1nIHtcXG4gICAgbWFyZ2luLWlubGluZTogMjVweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1jb2ZmZWUsIC5tZW51LW1pbGtzaGFrZSwgLm1lbnUtc25hY2tzIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLCtEQUFtRTtJQUNuRSwwQkFBMEI7SUFDMUIsK0RBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMkVBQTJFO0FBQy9FOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xpYnJlLUJhc2tlcnZpbGxlJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL051bml0b1NhbnMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tU2Fucyc7XFxufVxcblxcbi8qIC5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59ICovXFxuXFxubWFpbiB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrc2xhdGVncmF5IDUwdmgsIHdoaXRlc21va2UgNTB2aCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIC8qIGhlaWdodDogMTB2aDsgKi9cXG4gICAgd2lkdGg6IDg1dnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuaGVhZGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogLjVyZW07ICovXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ubmF2LWxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5uYXYtbGk6aG92ZXIsIC5uYXYtbGk6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA3OSwgNzksIC4zKTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbn1cXG5cXG4uaG9tZS10aXRsZSwgLm1lbnUtdGl0bGUsIC5hYm91dC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODV2dztcXG5cXG59XFxuXFxuI2Fib3V0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODV2dztcXG5cXG59XFxuXFxuI2hlcm8taW1nLCAjbWVudS1pbWcsICNhYm91dC1pbWcge1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA4NXZ3O1xcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xpYnJlLUJhc2tlcnZpbGxlJztcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggNnB4IGRhcmtzbGF0ZWdyYXk7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tYmxvY2s6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWl0ZW1zIHAge1xcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbXMtaW1nIHtcXG4gICAgbWFyZ2luLWlubGluZTogMjVweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1jb2ZmZWUsIC5tZW51LW1pbGtzaGFrZSwgLm1lbnUtc25hY2tzIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFib3V0SW1nIGZyb20gJy4vaW1nL2Fib3V0LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0nKTtcbiAgICBjb25zb2xlLmxvZygnQUJPVVQnKTtcbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBhYm91dFNlY3Rpb24uaWQgPSAnYWJvdXQnXG4gICAgYWJvdXRBcnRpY2xlKGFib3V0U2VjdGlvbilcbiAgICByZXR1cm4gYWJvdXRTZWN0aW9uXG59XG5cbmZ1bmN0aW9uIGFib3V0QXJ0aWNsZShhYm91dFNlY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCdhYm91dCBhcnRpY2xlJyk7XG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGFib3V0VGl0bGUuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGl0bGUnKVxuICAgICAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSlcbiAgICBjb25zdCBhYm91dEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICBhYm91dEgxLnRleHRDb250ZW50ID0gJ1RoZSBPZGluIENvZmZlZSBTdG9yeSdcbiAgICAgICAgYWJvdXRUaXRsZS5hcHBlbmRDaGlsZChhYm91dEgxKVxuICAgIGNvbnN0IGFib3V0SGVybyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGFib3V0SGVyby5zcmMgPSBhYm91dEltZ1xuICAgICAgICBhYm91dEhlcm8uYWx0ID0gJ0Fib3V0IE9kaW4gQ29mZmVlIFNob3AnXG4gICAgICAgIGFib3V0SGVyby5pZCA9ICdhYm91dC1pbWcnXG4gICAgICAgIGFib3V0VGl0bGUuYXBwZW5kQ2hpbGQoYWJvdXRIZXJvKVxuICAgIGNvbnN0IGFib3V0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBhYm91dFAudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBPZGluIENvZmZlZS4gV2UgYXJlIGNvZmZlZSBsb3ZlcnMgd2l0aCB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgd2l0aCB0aGUgYmVzdCBiZWFucywgYW5kIGVxdWlwbWVudCBhdmFpbGlibGUuJ1xuICAgICAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRQKVxufSIsImltcG9ydCBoZXJvIGZyb20gJy4vaW1nL2hlcm8uanBnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ0hPTUUnKTtcbiAgICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIC8vIGhvbWVTZWN0aW9uLnRleHRDb250ZW50ID0gJ0hvbWUgdGV4dCdcbiAgICBob21lU2VjdGlvbi5pZCA9ICdob21lJ1xuICAgIGhvbWVBcnRpY2xlKGhvbWVTZWN0aW9uKVxuICAgIHJldHVybiBob21lU2VjdGlvblxufVxuXG5mdW5jdGlvbiBob21lQXJ0aWNsZShob21lU2VjdGlvbikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ0hPTUUgYXJ0aWNsZScpO1xuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdob21lLXRpdGxlJylcbiAgICAgICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKVxuICAgIGNvbnN0IGhvbWVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgaG9tZUgxLnRleHRDb250ZW50ID0gJ1dlY29tZSB0byBPZGluIENvZmZlZSdcbiAgICAgICAgaG9tZVRpdGxlLmFwcGVuZENoaWxkKGhvbWVIMSlcbiAgICBjb25zdCBob21lSGVybyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGhvbWVIZXJvLnNyYyA9IGhlcm9cbiAgICAgICAgaG9tZUhlcm8uYWx0ID0gJ09kaW4gQ29mZmVlIFNob3AnXG4gICAgICAgIGhvbWVIZXJvLmlkID0gJ2hlcm8taW1nJ1xuICAgICAgICBob21lVGl0bGUuYXBwZW5kQ2hpbGQoaG9tZUhlcm8pXG4gICAgY29uc3QgaG9tZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgaG9tZVAudGV4dENvbnRlbnQgPSAnSG9tZSBvZiB0aGUgZmluZXN0IGNvZmZlZSBmcm9tIGFyb3VuZCB0aGUgd29ybGQhJ1xuICAgICAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChob21lUClcbn0iLCJpbXBvcnQgbWVudUltZyBmcm9tICcuL2ltZy9tZW51LmpwZydcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi9pbWcvY29mZmVlLmpwZydcbmltcG9ydCBtaWxrc2hha2UgZnJvbSAnLi9pbWcvbWlsa3NoYWtlLmpwZydcbmltcG9ydCBzbmFja3MgZnJvbSAnLi9pbWcvc25hY2tzLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCdNRU5VJyk7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBtZW51U2VjdGlvbi5pZCA9ICdtZW51J1xuICAgIG1lbnVBcnRpY2xlKG1lbnVTZWN0aW9uKVxuICAgIHJldHVybiBtZW51U2VjdGlvblxufVxuXG5mdW5jdGlvbiBtZW51QXJ0aWNsZShtZW51U2VjdGlvbikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ21lbnUgYXJ0aWNsZScpO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJylcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxuICAgIGNvbnN0IG1lbnVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgbWVudUgxLnRleHRDb250ZW50ID0gJ091ciBNZW51IGF0IE9kaW4gQ29mZmVlJ1xuICAgICAgICBtZW51VGl0bGUuYXBwZW5kQ2hpbGQobWVudUgxKVxuICAgIGNvbnN0IG1lbnVIZXJvID0gbmV3IEltYWdlKClcbiAgICAgICAgbWVudUhlcm8uc3JjID0gbWVudUltZ1xuICAgICAgICBtZW51SGVyby5hbHQgPSAnbWVudSBPZGluIENvZmZlZSBTaG9wJ1xuICAgICAgICBtZW51SGVyby5pZCA9ICdtZW51LWltZydcbiAgICAgICAgbWVudVRpdGxlLmFwcGVuZENoaWxkKG1lbnVIZXJvKVxuICAgIGNvbnN0IG1lbnVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIG1lbnVQLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gT2RpbiBDb2ZmZWUuIFdlIGFyZSBjb2ZmZWUgbG92ZXJzIHdpdGggeWVhcnMgb2YgZXhwZXJpZW5jZSB3b3JraW5nIHdpdGggdGhlIGJlc3QgYmVhbnMsIGFuZCBlcXVpcG1lbnQgYXZhaWxpYmxlLidcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVApXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJylcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW1zKVxuICAgIGNvbnN0IG1lbnVDb2ZmZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51Q29mZmVlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29mZmVlJylcbiAgICBjb25zdCBtZW51Q29mZmVlSW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgbWVudUNvZmZlZUltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zLWltZycpXG4gICAgICAgIG1lbnVDb2ZmZWVJbWcuc3JjID0gY29mZmVlXG4gICAgICAgIG1lbnVDb2ZmZWVJbWcuaWQgPSAnbWVudS1jb2ZmZWUnXG4gICAgICAgIG1lbnVDb2ZmZWVJbWcuYWx0ID0gJ0NvZmZlZSBmcm9tIHRoZSBPZGluIENvZmZlZSBtZW51LidcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVDb2ZmZWUpXG4gICAgICAgIG1lbnVDb2ZmZWUuYXBwZW5kQ2hpbGQobWVudUNvZmZlZUltZylcbiAgICBjb25zdCBtZW51Q29mZmVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtZW51Q29mZmVlVGV4dC50ZXh0Q29udGVudCA9IGBPZGluIENvZmZlZSBwcmVzZW50cyBvbmx5IHRoZSBmaW5lc3QgYmVhbnMgZnJvbSBhcm91bmQgdGhlIHdvcmxkIWBcbiAgICAgICAgbWVudUNvZmZlZS5hcHBlbmRDaGlsZChtZW51Q29mZmVlVGV4dClcbiAgICBjb25zdCBtZW51TWlsa3NoYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudU1pbGtzaGFrZS5jbGFzc0xpc3QuYWRkKCdtZW51LW1pbGtzaGFrZScpXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51TWlsa3NoYWtlKVxuICAgIGNvbnN0IG1lbnVNaWxrc2hha2VJbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBtZW51TWlsa3NoYWtlSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMtaW1nJylcbiAgICAgICAgbWVudU1pbGtzaGFrZUltZy5zcmMgPSBtaWxrc2hha2VcbiAgICAgICAgbWVudU1pbGtzaGFrZUltZy5pZCA9ICdtZW51LW1pbGtzaGFrZSdcbiAgICAgICAgbWVudU1pbGtzaGFrZUltZy5hbHQgPSAnQSBtaWxrc2hha2UgZnJvbSB0aGUgT2RpbiBDb2ZmZWUgbWVudS4nXG4gICAgICAgIG1lbnVNaWxrc2hha2UuYXBwZW5kQ2hpbGQobWVudU1pbGtzaGFrZUltZylcbiAgICBjb25zdCBtZW51TWlsa3NoYWtlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtZW51TWlsa3NoYWtlVGV4dC50ZXh0Q29udGVudCA9IGBPZGluIENvZmZlZSBhbHNvIG9mZmVycyB3b25kZXJmdWwgbWlsa3NoYWtlcyBmb3Igb3VyIGZyaWVuZHMgdGhhdCBkb24ndCBkcmluayBjb2ZmZWUuYFxuICAgICAgICBtZW51TWlsa3NoYWtlLmFwcGVuZENoaWxkKG1lbnVNaWxrc2hha2VUZXh0KVxuICAgIGNvbnN0IG1lbnVTbmFja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51U25hY2tzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc25hY2tzJylcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVTbmFja3MpXG4gICAgY29uc3QgbWVudVNuYWNrc0ltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIG1lbnVTbmFja3NJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcy1pbWcnKVxuICAgICAgICBtZW51U25hY2tzSW1nLnNyYyA9IHNuYWNrc1xuICAgICAgICBtZW51U25hY2tzSW1nLmlkID0gJ21lbnUtc25hY2tzJ1xuICAgICAgICBtZW51U25hY2tzSW1nLmFsdCA9ICdEZWxpY2lvdXMgc25hY2tzIGZyb20gdGhlIE9kaW4gQ29mZmVlIGJha2VyeS4nXG4gICAgICAgIG1lbnVTbmFja3MuYXBwZW5kQ2hpbGQobWVudVNuYWNrc0ltZylcbiAgICBjb25zdCBtZW51U25hY2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtZW51U25hY2tzVGV4dC50ZXh0Q29udGVudCA9IGBHZXQgZGVsaWNpb3VzIHNuYWNrcyBmcm9tIG91ciBiYWtlcnkhYFxuICAgICAgICBtZW51U25hY2tzLmFwcGVuZENoaWxkKG1lbnVTbmFja3NUZXh0KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc29sZS5sb2coJ3Rlc3QnKTtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gYE9kaW4gQ29mZmVlYFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KVxuICAgIFxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG5cbm1haW4uYXBwZW5kQ2hpbGQoaG9tZSgpKVxuXG5sZXQgbmF2TGlzdCA9IFsnSG9tZScsICdNZW51JywgJ0Fib3V0J11cbiAgICBuYXZMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmF2TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBuYXZMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtbGknKVxuICAgICAgICAgICAgbmF2TGlzdEl0ZW0uaWQgPSBpdGVtXG4gICAgICAgICAgICBuYXZMaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW1cbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0SXRlbSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICBcbiAgICAgICAgICAgIG5hdkxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50IHRlc3QgLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKVxuICAgICAgICAgICAgICAgIGlmKG5hdkxpc3RJdGVtLmlkID09PSAnSG9tZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGQoaG9tZSgpLCAuLi50YWJMaXN0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihuYXZMaXN0SXRlbS5pZCA9PT0gJ01lbnUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW4ucmVwbGFjZUNoaWxkKG1lbnUoKSwgLi4udGFiTGlzdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobmF2TGlzdEl0ZW0uaWQgPT09ICdBYm91dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGQoYWJvdXQoKSwgLi4udGFiTGlzdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=