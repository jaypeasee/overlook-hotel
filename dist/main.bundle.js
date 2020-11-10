/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  font-family: 'Poppins', sans-serif; }\n\nbody {\n  background: #7e8a97;\n  margin: 0;\n  padding: 0; }\n\nnav {\n  display: flex;\n  flex-direction: column;\n  background-color: #e7dec8; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #cbaf87; }\n\nh1 {\n  color: #30475e;\n  font-size: 2em; }\n\nli {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 2% 10%; }\n\nbutton {\n  cursor: pointer; }\n\n.login-title {\n  align-self: center; }\n\n.guest-nav {\n  display: flex;\n  flex-direction: column; }\n\n.nav-headings {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: .5%;\n  align-items: center; }\n\n.nav-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 2%; }\n\n.nav-booking-form {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  margin-left: 5%;\n  width: 33%; }\n\n.nav-text {\n  color: #30475e;\n  margin: .5% 5%; }\n\n.nav-form-heading {\n  margin-left: 0; }\n\n.date-availability-input {\n  margin: 1.5% 0;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  margin: 1.5% 0; }\n\n.date-availability-button {\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  background-color: #30475e;\n  color: #FFF; }\n  .date-availability-button:hover {\n    opacity: 90%; }\n  .date-availability-button:active {\n    background-color: #7e8a97;\n    opacity: 100%; }\n\n.main-title {\n  margin: 7% 0 0 0; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #cbaf87;\n  color: #30475e;\n  margin: 7%;\n  width: 50%;\n  border-radius: 10px;\n  box-shadow: 3px 4px #00000070;\n  height: 50vh; }\n  .login-form ::-webkit-input-placeholder {\n    text-align: center; }\n\n.reservation-cards {\n  background-color: #cbaf87;\n  color: #30475e;\n  margin: 7%;\n  width: 50%;\n  border-radius: 10px;\n  box-shadow: 3px 4px #00000070;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.room-history-list {\n  list-style: none;\n  padding-left: 0;\n  width: 100%;\n  align-items: flex-start; }\n\n.room-cards {\n  background-color: #cbaf87;\n  color: #30475e;\n  margin: 7%;\n  width: 50%;\n  border-radius: 10px;\n  box-shadow: 3px 4px #00000070;\n  display: flex;\n  flex-direction: column;\n  margin: 2%; }\n\n.room-card-title {\n  align-self: center;\n  margin-bottom: 0; }\n\n.room-list {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  list-style: circle; }\n\n.room-list-item {\n  align-self: flex-start;\n  padding: 1% 5%; }\n\n.book-room-button {\n  background-color: #30475e;\n  color: #FFF;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  margin: 0 8% 8% 8%;\n  align-self: center;\n  width: 50%; }\n  .book-room-button:hover {\n    opacity: 90%; }\n  .book-room-button:active {\n    background-color: #7e8a97;\n    opacity: 100%; }\n\n.room-type-form {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  align-self: center;\n  align-content: center; }\n\n.filter-room-title {\n  color: #30475e;\n  align-self: center;\n  margin: 10% 0 0 0; }\n\n.filter-form-inputs {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: center;\n  width: 100%; }\n\n.room-type-inputs {\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  width: 33%;\n  align-self: center;\n  margin: 5% 3%; }\n\n.room-type-button {\n  background-color: #30475e;\n  color: #FFF;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  margin: 5% 3%;\n  width: 33%;\n  align-self: center; }\n  .room-type-button:hover {\n    opacity: 90%; }\n  .room-type-button:active {\n    background-color: #7e8a97;\n    opacity: 100%; }\n\n.login-input {\n  width: 50%;\n  margin: 2%;\n  height: 30px;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px; }\n\n.login-button {\n  width: 50%;\n  margin: 2%;\n  height: 30px;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  background-color: #30475e;\n  color: #FFF;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px; }\n  .login-button:hover {\n    opacity: 90%; }\n  .login-button:active {\n    background-color: #7e8a97;\n    opacity: 100%; }\n\n.manager-nav {\n  display: flex;\n  flex-direction: column; }\n\n.manager-nav-heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start; }\n\n.manager-nav-title-block {\n  width: 50%; }\n\n.manager-nav-title {\n  margin: 2% 0 0 5%; }\n\n.manager-nav-details-block {\n  display: flex;\n  flex-direction: column;\n  margin: 2% 5%;\n  width: 22%; }\n\n.manager-nav-details {\n  color: #30475e;\n  margin: .5% 0; }\n\n.manager-nav-forms {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 2%; }\n\n.manager-user-form {\n  margin-left: 2%;\n  width: 50%; }\n\n.manager-date-form {\n  width: 27%; }\n\n.manager-nav-button {\n  background-color: #30475e;\n  color: #FFF;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  padding: 0 2% 0 2%; }\n  .manager-nav-button:hover {\n    opacity: 90%; }\n  .manager-nav-button:active {\n    background-color: #7e8a97;\n    opacity: 100%; }\n\n.manager-nav-input {\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  align-self: center;\n  margin-right: 2%; }\n\n.manager-nav-form-title {\n  color: #30475e;\n  margin: 0 0 1% 0; }\n\n.guest-name-input {\n  margin: 1.5% 0;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  width: 50%;\n  align-self: center;\n  margin: 0; }\n\n.manager-book-room-button {\n  background-color: #30475e;\n  color: #FFF;\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  width: 50%;\n  align-self: center;\n  margin: 3% 0 5% 0; }\n  .manager-book-room-button:hover {\n    opacity: 90%; }\n  .manager-book-room-button:active {\n    background-color: #7e8a97;\n    opacity: 100%; }\n\n.customer-info {\n  width: 30%; }\n\n.dashboard-link {\n  margin-top: 5%;\n  text-decoration: underline;\n  cursor: pointer; }\n  .dashboard-link:hover {\n    color: #7e8a97;\n    text-decoration: none; }\n\n.booking-success-message {\n  align-self: center;\n  color: #3a6b35; }\n\n.cancel-confirmation {\n  margin: 0 5%;\n  color: #3a6b35; }\n\n.cancel-room-button {\n  border-radius: 5px;\n  border: black solid .25px;\n  outline: none;\n  padding: 0 2% 0 2%;\n  height: 30px;\n  background-color: #ff3333;\n  margin-left: 10%;\n  width: 25%;\n  color: #FFF; }\n  .cancel-room-button:hover {\n    opacity: 75%; }\n\n.error-message {\n  color: #ff3333;\n  align-self: center;\n  margin: 1%; }\n\n@media only screen and (max-width: 1300px) {\n  .login-form, .reservation-cards, .room-cards {\n    width: 58%; }\n  .manager-nav-details-block {\n    width: 30%; }\n  .manager-date-form {\n    width: 35%; } }\n\n@media only screen and (max-width: 1100px) {\n  .login-form, .reservation-cards, .room-cards {\n    width: 65%; }\n  .manager-nav-details-block {\n    width: 40%; }\n  .manager-date-form {\n    width: 45%; } }\n\n@media only screen and (max-width: 600px) {\n  .login-form {\n    width: 80%;\n    height: 30vh; }\n  .login-title {\n    font-size: 1.25em; }\n  .manager-nav, .nav-headings {\n    display: flex;\n    flex-direction: column; }\n  .manager-nav-heading, .manager-nav-forms {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n  .manager-nav-title-block {\n    width: 90%;\n    display: flex;\n    justify-content: center; }\n  .manager-nav-details-block {\n    width: 90%;\n    margin: 0;\n    align-content: center; }\n  .manager-user-form, .manager-date-form {\n    width: 90%;\n    margin: 5%; }\n  .manager-nav-details {\n    margin: 0;\n    align-self: center; }\n  .manager-nav-title {\n    align-self: center;\n    font-size: 1.75em; }\n  .main-title {\n    text-align: center;\n    font-size: 1.75em; }\n  .reservation-cards, .room-cards {\n    width: 80%; }\n  .cancel-room-button {\n    width: 40%; }\n  .room-type-button {\n    width: 80%; }\n  .nav-details {\n    flex-direction: column-reverse; }\n  .nav-text, .nav-booking-form {\n    align-self: center; }\n  .date-availability-input, .customer-nav-button {\n    width: 150%;\n    align-self: center;\n    margin: 2%; }\n  .nav-form-heading {\n    margin-top: 10%;\n    font-size: 1em; }\n  .manager-nav-input, .manager-nav-button, .room-type-inputs {\n    width: 45%; }\n  .manager-book-room-button, .guest-name-input {\n    width: 75%; }\n  .filter-form-inputs {\n    width: 100%; }\n  .room-type-form {\n    width: 90%; }\n  .error-message {\n    font-size: .9em;\n    text-align: center;\n    margin: 5%; }\n  .booking-success-message {\n    margin: 3%;\n    text-align: center; }\n  .main-title {\n    font-size: 1.25em; }\n  .cancel-confirmation {\n    font-size: .75em; }\n  .customer-info {\n    align-self: center;\n    width: 100%;\n    text-align: center; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Guest.js":
/*!**********************!*\
  !*** ./src/Guest.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Guest extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(username, name) {
    super(username);
    this.name = name;
    this.presentBookings = [];
    this.futureBookings = [];
    this.pastBookings = [];
    this.totalAmountSpent = 0;
  }

  findBookingRecords(allBookings) {
    return allBookings.filter(booking => {
      return booking.userID === this.id;
    })
  }

  calculateTotalSpent(allBookings, hotel) {
    const guestHistory = this.findBookingRecords(allBookings);
    hotel.rooms.forEach(room => {
      guestHistory.forEach(booking => {
        if (booking.roomNumber === room.number) {
          this.totalAmountSpent += room.costPerNight;
        }
      })
      this.totalAmountSpent = Math.round(this.totalAmountSpent * 100) / 100;
    })
  }

  retrieveAllBookings(allBookings) {
    const guestHistory = this.findBookingRecords(allBookings)
    guestHistory.forEach(booking => {
      if (booking.date === this.date) {
        this.presentBookings.push(booking);
      } else if (Date.parse(booking.date) > Date.parse(this.date)) {
        this.futureBookings.push(booking);
      } else {
        this.pastBookings.push(booking);
      }
    })
  }

  sortBookingsByDate(timePeriod) {
    if (this.futureBookings.length > 0 && timePeriod === "future") {
      const sortedFuture = this.futureBookings.sort((futureA, futureB) => {
        return futureA.date > futureB.date ? 1 : -1
      })
    } else if (this.pastBookings.length > 0 && timePeriod === "past") {
      const sortedPast = this.pastBookings.sort((pastA, pastB) => {
        return pastA.date < pastB.date ? 1 : -1;
      })
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Guest);


/***/ }),

/***/ "./src/Hotel.js":
/*!**********************!*\
  !*** ./src/Hotel.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hotel {
  constructor(rooms) {
    this.rooms = rooms;
    this.date = undefined;
  }

  retrieveAvailableRooms(allBookings) {
    const takenRoomNumbers = allBookings.reduce((roomNumbers, booking) => {
      if (booking.date === this.date) {
        roomNumbers.push(booking.roomNumber);
      }
      return roomNumbers;
    }, [])
    const availableRooms = this.rooms.filter(room => {
      return !takenRoomNumbers.includes(room.number);
    })
      return availableRooms;
  }

  filterRoomsByType(allBookings, roomType) {
    const matchedRooms = this.retrieveAvailableRooms(allBookings);
    if (roomType === "all rooms") {
      return matchedRooms;
    }
    const roomsByType = matchedRooms.filter(room => {
      return room.roomType === roomType;
    })
    return roomsByType;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hotel);


/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _Guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guest */ "./src/Guest.js");



class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(username) {
    super(username)
  }

  searchForGuest(guestName, allGuests) {
    const searchedGuest = allGuests.find(guest => {
      return guestName === guest.name;
    })
    if (searchedGuest) {
      const guestProfile = new _Guest__WEBPACK_IMPORTED_MODULE_1__["default"](`customer${searchedGuest.id}`, searchedGuest.name);
      guestProfile.id = searchedGuest.id;
      return guestProfile;
    }
    return "error";
  }

  filterTodaysBookings(allBookings) {
    return allBookings.filter(booking => {
      return booking.date === this.date;
    })
  }

  calculateOccupancyToday(allBookings, totalNumberOfRooms) {
    const bookedRooms = this.filterTodaysBookings(allBookings);
    const percentOccupancy = Math.round(bookedRooms.length / totalNumberOfRooms * 100);
    return `${percentOccupancy}%`;
  }

  calculateRevenueToday(allBookings, hotel) {
    const bookedRooms = this.filterTodaysBookings(allBookings);
    return hotel.rooms.reduce((totalRevenue, room) => {
      bookedRooms.forEach(booking => {
        if (room.number === booking.roomNumber) {
          totalRevenue += room.costPerNight;
        }
      })
      return totalRevenue;
    }, 0)
    return totalRevenue;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Manager);


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(username) {
    this.username = username;
    this.password = "overlook2020";
    this.id = username.includes('customer') ? parseInt(username.slice(8)) : 0
    this.date = new Date().toISOString().split('T')[0]
  }

  validateUser(enteredPW) {
    if (this.username === "manager" && enteredPW === this.password) {
      return "manager";
    } else if (this.username.includes("customer") && this.id < 51 && enteredPW === this.password) {
      return "guest";
    } else {
      return "Please enter a valid username and password.";
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: apiCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCalls", function() { return apiCalls; });
let apiCalls = {
  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => console.log(error.message));
  },

  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error.message));
  },

  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log(error.message));
  },

  postNewBooking(bookingToPost) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
  	        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingToPost),
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))
  },

  deleteBooking(bookingToDelete) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
  	        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingToDelete)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
  }
}


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/turing-logo.png":
/*!************************************!*\
  !*** ./src/images/turing-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/turing-logo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _Guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Guest */ "./src/Guest.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");








//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const mainSection = document.querySelector('main');
const navSection = document.querySelector('nav');
const loginForm = document.querySelector('.login-form');
let currentUser;
let currentGuest;
let currentManager;
let currentHotel;
let bookingData;
let userData;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", getApiData);
loginForm.addEventListener("click", handleLoginClick);
navSection.addEventListener("click", handleNavClick);
mainSection.addEventListener("click", handleMainSectionClick)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getApiData() {
  const bookings = _apiCalls__WEBPACK_IMPORTED_MODULE_6__["apiCalls"].getBookingData();
  const users  = _apiCalls__WEBPACK_IMPORTED_MODULE_6__["apiCalls"].getUserData();
  const rooms = _apiCalls__WEBPACK_IMPORTED_MODULE_6__["apiCalls"].getRoomData();
  Promise.all([bookings, users, rooms]).then(data => {
    defineApiData(data[0], data[1], data[2]);
  })
}

function defineApiData(bookings, users, rooms) {
  bookingData = bookings;
  userData = users;
  currentHotel = new _Hotel__WEBPACK_IMPORTED_MODULE_5__["default"](rooms);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleLoginClick(event) {
  const usernameInput = document.querySelector('.login-username-input');
  const passwordInput = document.querySelector('.login-password-input');
  if (event.target.className === "login-button") {
    createUser(usernameInput.value, passwordInput.value);
    clearForm(usernameInput, passwordInput);
  }
}

function createUser(enteredUsername, enteredPassword) {
  currentUser = new _User__WEBPACK_IMPORTED_MODULE_2__["default"](enteredUsername);
  const userType = currentUser.validateUser(enteredPassword);
  clearLoginError();
  if (userType === "guest") {
    createGuest(currentUser);
  } else if (userType === "manager") {
    createManager(currentUser);
  } else {
    displayLoginError(userType);
  }
}

function clearForm(usernameInput, passwordInput) {
  usernameInput.value = "";
  passwordInput.value = "";
}

function createGuest(currentUser) {
  const matchedGuest = userData.find(user => {
    return user.id === currentUser.id;
  })
  currentGuest = new _Guest__WEBPACK_IMPORTED_MODULE_3__["default"](`customer${matchedGuest.id}`, matchedGuest.name);
  runGuestMethods()
  displayGuestHome();
}

function runGuestMethods() {
  currentGuest.calculateTotalSpent(bookingData, currentHotel);
  currentGuest.retrieveAllBookings(bookingData);
  currentGuest.sortBookingsByDate("future");
  currentGuest.sortBookingsByDate("past");
}

function displayGuestHome() {
  clearHome();
  displayGuestNav();
  displayHeading("Your Reservations");
  handleBookingsDisplay(currentGuest)
}

function displayGuestNav() {
  const navBlock =
    `<div class="guest-nav">
      <div class="nav-headings">
        <h2 class="nav-text">Welcome ${currentGuest.name}!</h2>
        <h3 class="nav-text">Today's Date: ${formatDateForDisplay(currentGuest.date)}</h3>
      </div>
      <div class="nav-details">
        <article class="nav-booking-form">
          <h3 class="nav-form-heading nav-text">Book A Room</h3>
          <input aria-label="date-input" type="date" class="date-availability-input">
          <button class="customer-nav-button date-availability-button">CHECK AVAILABILITY!</button>
        </article>
        <div class="customer-info">
          <h4 class="nav-text">Total Amount Spent on Rooms: $${currentGuest.totalAmountSpent.toFixed(2)}</h4>
          <h4 class="dashboard-link nav-text">VIEW YOUR DASHBOARD</h4>
        </div>
      </div>
    </div>`
  navSection.insertAdjacentHTML('afterbegin', navBlock);
}

function formatDateForDisplay(originalFormat) {
  const date = new Date(originalFormat);
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
}

function displayHeading(sectionHeading) {
  const headingBlock =
  `<h1 class="main-title">${sectionHeading}</h1>`;
  mainSection.insertAdjacentHTML('afterbegin', headingBlock);
}

function handleBookingsDisplay(guestProfile) {
  if (guestProfile.presentBookings.length > 0) {
    displayBookings('Current Bookings', guestProfile.presentBookings, guestProfile);
  }
  if (guestProfile.futureBookings.length > 0) {
    displayBookings('Future Bookings', guestProfile.futureBookings, guestProfile);
  }
  if (guestProfile.pastBookings.length > 0) {
    displayBookings('Past Bookings', guestProfile.pastBookings, guestProfile);
  }
}

function displayBookings(cardTitle, bookings, guestProfile) {
  const bookingBlock =
    `<article class="reservation-cards">
      <h2>${cardTitle}</h2>
      <ul class="room-history-list">
      </ul>
    </article>`
  mainSection.insertAdjacentHTML('beforeend', bookingBlock);
  handleBookingsList(bookings, guestProfile)
}

function handleBookingsList(bookings, guestProfile) {
  const listBlock = mainSection.lastChild.children[1];
  if (bookings === guestProfile.futureBookings && guestProfile !== currentGuest) {
    displayRemovableGuestBookings(bookings, listBlock)
  } else {
    displayBookingsList(bookings, listBlock)
  }
}

function displayBookingsList(bookings, listBlock) {
  bookings.forEach(booking => {
    const listItem =
    `<li>Room ${booking.roomNumber} on ${formatDateForDisplay(booking.date)}</li>`;
    listBlock.insertAdjacentHTML('beforeend', listItem);
  })
}

function displayRemovableGuestBookings(bookings, listBlock) {
  bookings.forEach(booking => {
    const listItem =
    `<li data-id='${booking.id}'>Room ${booking.roomNumber} on ${formatDateForDisplay(booking.date)}
     <button class="cancel-room-button">CANCEL</button>
     </li>`;
    listBlock.insertAdjacentHTML('beforeend', listItem);
  })
}

function createManager(currentUser) {
  currentManager = new _Manager__WEBPACK_IMPORTED_MODULE_4__["default"](currentUser.username);
  runManagerMethods();
}

function clearHome() {
  mainSection.innerHTML = "";
  navSection.innerHTML = "";
}

function runManagerMethods() {
  const hotelOccupancy = currentManager.calculateOccupancyToday(bookingData, currentHotel.rooms.length);
  const todaysRevenue = currentManager.calculateRevenueToday(bookingData, currentHotel);
  const availableRooms = currentHotel.retrieveAvailableRooms(bookingData)
  displayManagerHomeView(hotelOccupancy, todaysRevenue, availableRooms)
}

function displayManagerHomeView(hotelOccupancy, todaysRevenue, availableRooms) {
  clearHome();
  displayManagerNav(hotelOccupancy, todaysRevenue, availableRooms);
}

function displayManagerNav(hotelOccupancy, todaysRevenue, availableRooms) {
  const navBlock =
  `<nav class="manager-nav">
    <div class="manager-nav-heading">
      <div class="manager-nav-title-block">
        <h1 class="manager-nav-title">Welcome Manager!</h1>
      </div>
      <div class="manager-nav-details-block">
        <h2 class="manager-nav-details">Today's Date: ${formatDateForDisplay(currentManager.date)}</h2>
        <h3 class="manager-nav-details">Available Rooms: ${availableRooms.length}</h3>
        <h3 class="manager-nav-details">Occupancy: ${hotelOccupancy}</h3>
        <h3 class="manager-nav-details">Total Revenue Today: $${todaysRevenue.toFixed(2)}</h3>
      </div>
    </div>
    <div class="manager-nav-forms">
      <article class="manager-user-form">
        <h4 class="manager-nav-form-title">Look Up A Guest</h3>
        <input type="text" placeholder="Guest Name" aria-label="guest-name-input" class="manager-nav-input">
        <button class="manager-nav-button search-user-button">SEARCH GUEST</button>
      </article>
      <article class="manager-date-form">
        <h4 class="manager-nav-form-title">Search Availability By Date</h3>
        <input type="date" aria-label="date-input" class="manager-nav-input">
        <button class="manager-nav-button date-availability-button">SEARCH ROOMS</button>
      </article>
    </div>
  </nav>`;
  navSection.insertAdjacentHTML('afterbegin', navBlock);
}


function clearLoginError() {
  if (loginForm.children[4]) {
    loginForm.children[4].remove();
  }
}

function displayLoginError(errorMessage) {
  const messageBlock =
  `<h4 class="error-message">${errorMessage}</h4>`;
  loginForm.insertAdjacentHTML('beforeend', messageBlock);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleNavClick(event) {
  if (event.target.classList.contains("date-availability-button")) {
    handleAvailableRoomsDisplay(event, currentUser.id)
  } else if (event.target.classList.contains("search-user-button")) {
    findGuestProfile(event)
  } else if (event.target.classList.contains("dashboard-link")) {
    displayGuestHome();
  }
}

function handleAvailableRoomsDisplay(event, userID) {
  const dateInput = event.target.previousElementSibling;
  if (currentUser.date <= dateInput.value) {
    displayFilteredRoomsByDate(dateInput, event, userID)
  } else {
    displayNavFormError(event, "date");
  }
}

function displayFilteredRoomsByDate(dateInput, event, userID) {
  RemoveErrorMessage(event);
  mainSection.innerHTML = "";
  displayHeading(`Available Rooms For ${formatDateForDisplay(dateInput.value)}`);
  displayRoomTypeForm(userID)
  findOpenRooms(dateInput.value, userID);
}

function RemoveErrorMessage(event) {
  if (event.target.nextElementSibling) {
    event.target.nextElementSibling.remove();
  }
}

function displayRoomTypeForm(userID) {
  const roomTypeForm =
  `<article class="room-type-form">
    <h2 class="filter-room-title">Filter These Rooms By Type</h2>
    <div class="filter-form-inputs">
      <select name="room-types" id="room-types" class="room-type-inputs">
        <option value="all rooms">all rooms</option>
        <option value="residential suite">residential suite</option>
        <option value="suite">suite</option>
        <option value="junior suite">junior suite</option>
        <option value="single room">single room</option>
      </select>
      <button class="room-type-button">FILTER YOUR SEARCH</button>
    </div>
  </article>`;
  if (userID > 0) {
    mainSection.insertAdjacentHTML('beforeend', roomTypeForm)
  }
}

function findOpenRooms(datePicked, userID) {
  currentHotel.date = datePicked.replace('-', '/').replace('-', '/')
  const availableRooms = currentHotel.retrieveAvailableRooms(bookingData);
  if (availableRooms.length > 0) {
    determineUserView(availableRooms, userID)
  } else {
    displayNoVacancyMessage()
  }
}

function determineUserView(availableRooms, userID) {
  if (userID > 0) {
    displayAvailableRoomsForGuest(availableRooms);
  } else {
    displayAvailableRoomsForManager();
  }
}

function displayAvailableRoomsForGuest(availableRooms, userID) {
  availableRooms.forEach(room => {
    const roomBlock =
    `<article class="room-cards">
      <h2 class="room-card-title">Room ${room.number}</h2>
      <ul class="room-list">
        <li class="room-list-item"><h3>${room.roomType}</h3></li>
        <li class="room-list-item">${room.numBeds} ${room.bedSize} size beds</li>
        <li class="room-list-item">Cost Per Night: $${room.costPerNight}</li>
        <li class="room-list-item">Bidet?: ${room.bidet}</li>
      </ul>
      <button class="book-room-button">BOOK THIS ROOM</button>
    </article>`
    mainSection.insertAdjacentHTML('beforeend', roomBlock)
  })
}

function displayAvailableRoomsForManager() {
  const availableRooms = currentHotel.retrieveAvailableRooms(bookingData)
  availableRooms.forEach(room => {
    const roomBlock =
    `<article class="room-cards">
      <h2 class="room-card-title">Room ${room.number}</h2>
      <ul class="room-list">
        <li class="room-list-item"><h3>${room.roomType}</h3></li>
        <li class="room-list-item">${room.numBeds} ${room.bedSize} size beds</li>
        <li class="room-list-item">Cost Per Night: $${room.costPerNight}</li>
        <li class="room-list-item">Bidet?: ${room.bidet}</li>
      </ul>
      <input type="text" aria-label="customer-name-input" placeholder="Enter The Guest Name" class= "guest-name-input">
      <button class="manager-book-room-button">BOOK ROOM FOR GUEST</button>
    </article>`
    mainSection.insertAdjacentHTML('beforeend', roomBlock);
  });
}

function displayNoVacancyMessage() {
  const apologyBlock =
  `<h3 class="error-message">There are vacancies for ${formatDateForDisplay(currentHotel.date)}. Please choose a different date.</h3>`;
  mainSection.insertAdjacentHTML('beforeend', apologyBlock);
}

function displayNavFormError(event, errorType) {
  RemoveErrorMessage(event);
  const dateButton = event.target;
  const errorBlock =
  `<p class="error-message">Please enter a valid ${errorType}<p>`
  dateButton.insertAdjacentHTML('afterend', errorBlock);
}

function findGuestProfile(event) {
  const nameEntered = event.target.previousElementSibling
  const guestProfile = currentManager.searchForGuest(nameEntered.value, userData)
  if (guestProfile === "error") {
    displayNavFormError(event, "guest name")
  } else {
    displayGuestProfile(guestProfile);
  }
  nameEntered.value = "";
}

function displayGuestProfile(guestProfile) {
  RemoveErrorMessage(event);
  mainSection.innerHTML = "";
  guestProfile.retrieveAllBookings(bookingData);
  guestProfile.sortBookingsByDate('future');
  guestProfile.sortBookingsByDate('past');
  displayHeading(`All Bookings for ${guestProfile.name}`);
  handleBookingsDisplay(guestProfile);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleMainSectionClick(event) {
  const nameEntered = event.target.previousElementSibling;
  if (event.target.className === 'room-type-button') {
    handleRoomTypeFilter(event);
  } else if (event.target.className === 'book-room-button') {
    handleRoomBooking(event, nameEntered, currentGuest);
  } else if (event.target.className === 'manager-book-room-button') {
    const guestProfile = currentManager.searchForGuest(nameEntered.value, userData);
    handleRoomBooking(event, nameEntered, guestProfile);
  } else if (event.target.className === "cancel-room-button") {
    handleBookingCancellation(event);
  }
}

function handleRoomTypeFilter(event) {
  const selectedType = event.target.previousElementSibling
  const filteredRooms = currentHotel.filterRoomsByType(bookingData, selectedType.value);
  mainSection.innerHTML = "";
  if (filteredRooms.length > 0) {
    displayRoomTypeFilter(selectedType.value, filteredRooms);
  } else {
    displayNoVacancyMessage();
  }
}

function displayRoomTypeFilter(selectedType, filteredRooms) {
  displayHeading(`Available ${selectedType}s For ${formatDateForDisplay(currentHotel.date)}`);
  displayRoomTypeForm(currentGuest.id)
  displayAvailableRoomsForGuest(filteredRooms);
}

function handleRoomBooking(event, nameEntered, guestProfile) {
  const roomName = event.target.parentNode.children[0].innerText;
  RemoveErrorMessage(event)
  if (guestProfile === "error") {
    displayNavFormError(event, "guest name");
  } else {
    bookNewRoom(roomName, guestProfile, event)
  }
  nameEntered.value = "";
}

function bookNewRoom(roomName, guestProfile, event) {
  const bookingFormat = createBookingObject(roomName.slice(5), guestProfile.id, currentHotel.date);
  const newBooking = _apiCalls__WEBPACK_IMPORTED_MODULE_6__["apiCalls"].postNewBooking(bookingFormat)
  newBooking
    .then(() => displaySuccessfulBooking(event, roomName, currentHotel.date))
    .then(() => updateBookingData(newBooking))
}

function createBookingObject(roomNumber, guestID, datePicked) {
  return {
    userID: guestID,
    date: datePicked,
    roomNumber: parseInt(roomNumber)
  };
}

function updateBookingData(bookingChange) {
  bookingChange
    .then(() => _apiCalls__WEBPACK_IMPORTED_MODULE_6__["apiCalls"].getBookingData())
    .then(response => bookingData = response)
    .catch(error => console.log(error.message));
}

function displaySuccessfulBooking(event, roomName, datePicked) {
  const submitButton = event.target;
  const bookingBlock =
  `<p class="booking-success-message">${roomName} is now booked for ${formatDateForDisplay(datePicked)}</p>`;
  submitButton.insertAdjacentHTML('afterend', bookingBlock);
  submitButton.remove();
}

function handleBookingCancellation(event) {
  const cancelButton = event.target;
  const bookingToCancel = cancelButton.parentNode;
  const cancellationObject = { id: parseInt(bookingToCancel.dataset.id) };
  const newCancellation = _apiCalls__WEBPACK_IMPORTED_MODULE_6__["apiCalls"].deleteBooking(cancellationObject);
  newCancellation
    .then(() => displayCancellation(cancelButton))
    .then(() => updateBookingData(newCancellation));
}

function displayCancellation (cancelButton) {
  const cancelBlock =
  `<p class="cancel-confirmation">You have cancelled this reservation</p>`;
  cancelButton.insertAdjacentHTML('afterend', cancelBlock);
  cancelButton.remove();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR3Vlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7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Q0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JE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QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwwQkFBMEIsa0RBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzdlOGE5NztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkZWM4OyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjY2JhZjg3OyB9XFxuXFxuaDEge1xcbiAgY29sb3I6ICMzMDQ3NWU7XFxuICBmb250LXNpemU6IDJlbTsgfVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyJSAxMCU7IH1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmxvZ2luLXRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5ndWVzdC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4ubmF2LWhlYWRpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogLjUlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5uYXYtZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDIlOyB9XFxuXFxuLm5hdi1ib29raW5nLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgd2lkdGg6IDMzJTsgfVxcblxcbi5uYXYtdGV4dCB7XFxuICBjb2xvcjogIzMwNDc1ZTtcXG4gIG1hcmdpbjogLjUlIDUlOyB9XFxuXFxuLm5hdi1mb3JtLWhlYWRpbmcge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uZGF0ZS1hdmFpbGFiaWxpdHktaW5wdXQge1xcbiAgbWFyZ2luOiAxLjUlIDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIC4yNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMS41JSAwOyB9XFxuXFxuLmRhdGUtYXZhaWxhYmlsaXR5LWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIC4yNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQ3NWU7XFxuICBjb2xvcjogI0ZGRjsgfVxcbiAgLmRhdGUtYXZhaWxhYmlsaXR5LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDkwJTsgfVxcbiAgLmRhdGUtYXZhaWxhYmlsaXR5LWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4YTk3O1xcbiAgICBvcGFjaXR5OiAxMDAlOyB9XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgbWFyZ2luOiA3JSAwIDAgMDsgfVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiYWY4NztcXG4gIGNvbG9yOiAjMzA0NzVlO1xcbiAgbWFyZ2luOiA3JTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDRweCAjMDAwMDAwNzA7XFxuICBoZWlnaHQ6IDUwdmg7IH1cXG4gIC5sb2dpbi1mb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5yZXNlcnZhdGlvbi1jYXJkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JhZjg3O1xcbiAgY29sb3I6ICMzMDQ3NWU7XFxuICBtYXJnaW46IDclO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAzcHggNHB4ICMwMDAwMDA3MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5yb29tLWhpc3RvcnktbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblxcbi5yb29tLWNhcmRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmFmODc7XFxuICBjb2xvcjogIzMwNDc1ZTtcXG4gIG1hcmdpbjogNyU7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDNweCA0cHggIzAwMDAwMDcwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDIlOyB9XFxuXFxuLnJvb20tY2FyZC10aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLnJvb20tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7IH1cXG5cXG4ucm9vbS1saXN0LWl0ZW0ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDElIDUlOyB9XFxuXFxuLmJvb2stcm9vbS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDc1ZTtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAuMjVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDAgOCUgOCUgOCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlOyB9XFxuICAuYm9vay1yb29tLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDkwJTsgfVxcbiAgLmJvb2stcm9vbS1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlOGE5NztcXG4gICAgb3BhY2l0eTogMTAwJTsgfVxcblxcbi5yb29tLXR5cGUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uZmlsdGVyLXJvb20tdGl0bGUge1xcbiAgY29sb3I6ICMzMDQ3NWU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwJSAwIDAgMDsgfVxcblxcbi5maWx0ZXItZm9ybS1pbnB1dHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJvb20tdHlwZS1pbnB1dHMge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAuMjVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzMlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiA1JSAzJTsgfVxcblxcbi5yb29tLXR5cGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQ3NWU7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogYmxhY2sgc29saWQgLjI1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiA1JSAzJTtcXG4gIHdpZHRoOiAzMyU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gIC5yb29tLXR5cGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogOTAlOyB9XFxuICAucm9vbS10eXBlLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4YTk3O1xcbiAgICBvcGFjaXR5OiAxMDAlOyB9XFxuXFxuLmxvZ2luLWlucHV0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDIlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAuMjVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIC4yNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGhlaWdodDogMzBweDsgfVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMiU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIC4yNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDQ3NWU7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogYmxhY2sgc29saWQgLjI1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgaGVpZ2h0OiAzMHB4OyB9XFxuICAubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogOTAlOyB9XFxuICAubG9naW4tYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZThhOTc7XFxuICAgIG9wYWNpdHk6IDEwMCU7IH1cXG5cXG4ubWFuYWdlci1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4ubWFuYWdlci1uYXYtaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLm1hbmFnZXItbmF2LXRpdGxlLWJsb2NrIHtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4ubWFuYWdlci1uYXYtdGl0bGUge1xcbiAgbWFyZ2luOiAyJSAwIDAgNSU7IH1cXG5cXG4ubWFuYWdlci1uYXYtZGV0YWlscy1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMiUgNSU7XFxuICB3aWR0aDogMjIlOyB9XFxuXFxuLm1hbmFnZXItbmF2LWRldGFpbHMge1xcbiAgY29sb3I6ICMzMDQ3NWU7XFxuICBtYXJnaW46IC41JSAwOyB9XFxuXFxuLm1hbmFnZXItbmF2LWZvcm1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7IH1cXG5cXG4ubWFuYWdlci11c2VyLWZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgd2lkdGg6IDUwJTsgfVxcblxcbi5tYW5hZ2VyLWRhdGUtZm9ybSB7XFxuICB3aWR0aDogMjclOyB9XFxuXFxuLm1hbmFnZXItbmF2LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0NzVlO1xcbiAgY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIC4yNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTsgfVxcbiAgLm1hbmFnZXItbmF2LWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDkwJTsgfVxcbiAgLm1hbmFnZXItbmF2LWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4YTk3O1xcbiAgICBvcGFjaXR5OiAxMDAlOyB9XFxuXFxuLm1hbmFnZXItbmF2LWlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogYmxhY2sgc29saWQgLjI1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbi5tYW5hZ2VyLW5hdi1mb3JtLXRpdGxlIHtcXG4gIGNvbG9yOiAjMzA0NzVlO1xcbiAgbWFyZ2luOiAwIDAgMSUgMDsgfVxcblxcbi5ndWVzdC1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbjogMS41JSAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAuMjVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDIlIDAgMiU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm1hbmFnZXItYm9vay1yb29tLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0NzVlO1xcbiAgY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIC4yNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDMlIDAgNSUgMDsgfVxcbiAgLm1hbmFnZXItYm9vay1yb29tLWJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDkwJTsgfVxcbiAgLm1hbmFnZXItYm9vay1yb29tLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4YTk3O1xcbiAgICBvcGFjaXR5OiAxMDAlOyB9XFxuXFxuLmN1c3RvbWVyLWluZm8ge1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbi5kYXNoYm9hcmQtbGluayB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZGFzaGJvYXJkLWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogIzdlOGE5NztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLmJvb2tpbmctc3VjY2Vzcy1tZXNzYWdlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAjM2E2YjM1OyB9XFxuXFxuLmNhbmNlbC1jb25maXJtYXRpb24ge1xcbiAgbWFyZ2luOiAwIDUlO1xcbiAgY29sb3I6ICMzYTZiMzU7IH1cXG5cXG4uY2FuY2VsLXJvb20tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogYmxhY2sgc29saWQgLjI1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzMzMztcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICB3aWR0aDogMjUlO1xcbiAgY29sb3I6ICNGRkY7IH1cXG4gIC5jYW5jZWwtcm9vbS1idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiA3NSU7IH1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogI2ZmMzMzMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMSU7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xcbiAgLmxvZ2luLWZvcm0sIC5yZXNlcnZhdGlvbi1jYXJkcywgLnJvb20tY2FyZHMge1xcbiAgICB3aWR0aDogNTglOyB9XFxuICAubWFuYWdlci1uYXYtZGV0YWlscy1ibG9jayB7XFxuICAgIHdpZHRoOiAzMCU7IH1cXG4gIC5tYW5hZ2VyLWRhdGUtZm9ybSB7XFxuICAgIHdpZHRoOiAzNSU7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAubG9naW4tZm9ybSwgLnJlc2VydmF0aW9uLWNhcmRzLCAucm9vbS1jYXJkcyB7XFxuICAgIHdpZHRoOiA2NSU7IH1cXG4gIC5tYW5hZ2VyLW5hdi1kZXRhaWxzLWJsb2NrIHtcXG4gICAgd2lkdGg6IDQwJTsgfVxcbiAgLm1hbmFnZXItZGF0ZS1mb3JtIHtcXG4gICAgd2lkdGg6IDQ1JTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDMwdmg7IH1cXG4gIC5sb2dpbi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtOyB9XFxuICAubWFuYWdlci1uYXYsIC5uYXYtaGVhZGluZ3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAubWFuYWdlci1uYXYtaGVhZGluZywgLm1hbmFnZXItbmF2LWZvcm1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5tYW5hZ2VyLW5hdi10aXRsZS1ibG9jayB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAubWFuYWdlci1uYXYtZGV0YWlscy1ibG9jayB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuICAubWFuYWdlci11c2VyLWZvcm0sIC5tYW5hZ2VyLWRhdGUtZm9ybSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogNSU7IH1cXG4gIC5tYW5hZ2VyLW5hdi1kZXRhaWxzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gIC5tYW5hZ2VyLW5hdi10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjc1ZW07IH1cXG4gIC5tYWluLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNzVlbTsgfVxcbiAgLnJlc2VydmF0aW9uLWNhcmRzLCAucm9vbS1jYXJkcyB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jYW5jZWwtcm9vbS1idXR0b24ge1xcbiAgICB3aWR0aDogNDAlOyB9XFxuICAucm9vbS10eXBlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5uYXYtZGV0YWlscyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTsgfVxcbiAgLm5hdi10ZXh0LCAubmF2LWJvb2tpbmctZm9ybSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgLmRhdGUtYXZhaWxhYmlsaXR5LWlucHV0LCAuY3VzdG9tZXItbmF2LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMiU7IH1cXG4gIC5uYXYtZm9ybS1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBmb250LXNpemU6IDFlbTsgfVxcbiAgLm1hbmFnZXItbmF2LWlucHV0LCAubWFuYWdlci1uYXYtYnV0dG9uLCAucm9vbS10eXBlLWlucHV0cyB7XFxuICAgIHdpZHRoOiA0NSU7IH1cXG4gIC5tYW5hZ2VyLWJvb2stcm9vbS1idXR0b24sIC5ndWVzdC1uYW1lLWlucHV0IHtcXG4gICAgd2lkdGg6IDc1JTsgfVxcbiAgLmZpbHRlci1mb3JtLWlucHV0cyB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAucm9vbS10eXBlLWZvcm0ge1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAuZXJyb3ItbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogLjllbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDUlOyB9XFxuICAuYm9va2luZy1zdWNjZXNzLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW46IDMlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5tYWluLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07IH1cXG4gIC5jYW5jZWwtY29uZmlybWF0aW9uIHtcXG4gICAgZm9udC1zaXplOiAuNzVlbTsgfVxcbiAgLmN1c3RvbWVyLWluZm8ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInXG5cbmNsYXNzIEd1ZXN0IGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBuYW1lKSB7XG4gICAgc3VwZXIodXNlcm5hbWUpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVzZW50Qm9va2luZ3MgPSBbXTtcbiAgICB0aGlzLmZ1dHVyZUJvb2tpbmdzID0gW107XG4gICAgdGhpcy5wYXN0Qm9va2luZ3MgPSBbXTtcbiAgICB0aGlzLnRvdGFsQW1vdW50U3BlbnQgPSAwO1xuICB9XG5cbiAgZmluZEJvb2tpbmdSZWNvcmRzKGFsbEJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIGFsbEJvb2tpbmdzLmZpbHRlcihib29raW5nID0+IHtcbiAgICAgIHJldHVybiBib29raW5nLnVzZXJJRCA9PT0gdGhpcy5pZDtcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxTcGVudChhbGxCb29raW5ncywgaG90ZWwpIHtcbiAgICBjb25zdCBndWVzdEhpc3RvcnkgPSB0aGlzLmZpbmRCb29raW5nUmVjb3JkcyhhbGxCb29raW5ncyk7XG4gICAgaG90ZWwucm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgIGd1ZXN0SGlzdG9yeS5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgICBpZiAoYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHRoaXMudG90YWxBbW91bnRTcGVudCArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMudG90YWxBbW91bnRTcGVudCA9IE1hdGgucm91bmQodGhpcy50b3RhbEFtb3VudFNwZW50ICogMTAwKSAvIDEwMDtcbiAgICB9KVxuICB9XG5cbiAgcmV0cmlldmVBbGxCb29raW5ncyhhbGxCb29raW5ncykge1xuICAgIGNvbnN0IGd1ZXN0SGlzdG9yeSA9IHRoaXMuZmluZEJvb2tpbmdSZWNvcmRzKGFsbEJvb2tpbmdzKVxuICAgIGd1ZXN0SGlzdG9yeS5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcuZGF0ZSA9PT0gdGhpcy5kYXRlKSB7XG4gICAgICAgIHRoaXMucHJlc2VudEJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9IGVsc2UgaWYgKERhdGUucGFyc2UoYm9va2luZy5kYXRlKSA+IERhdGUucGFyc2UodGhpcy5kYXRlKSkge1xuICAgICAgICB0aGlzLmZ1dHVyZUJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhc3RCb29raW5ncy5wdXNoKGJvb2tpbmcpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzb3J0Qm9va2luZ3NCeURhdGUodGltZVBlcmlvZCkge1xuICAgIGlmICh0aGlzLmZ1dHVyZUJvb2tpbmdzLmxlbmd0aCA+IDAgJiYgdGltZVBlcmlvZCA9PT0gXCJmdXR1cmVcIikge1xuICAgICAgY29uc3Qgc29ydGVkRnV0dXJlID0gdGhpcy5mdXR1cmVCb29raW5ncy5zb3J0KChmdXR1cmVBLCBmdXR1cmVCKSA9PiB7XG4gICAgICAgIHJldHVybiBmdXR1cmVBLmRhdGUgPiBmdXR1cmVCLmRhdGUgPyAxIDogLTFcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnBhc3RCb29raW5ncy5sZW5ndGggPiAwICYmIHRpbWVQZXJpb2QgPT09IFwicGFzdFwiKSB7XG4gICAgICBjb25zdCBzb3J0ZWRQYXN0ID0gdGhpcy5wYXN0Qm9va2luZ3Muc29ydCgocGFzdEEsIHBhc3RCKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXN0QS5kYXRlIDwgcGFzdEIuZGF0ZSA/IDEgOiAtMTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEd1ZXN0O1xuIiwiY2xhc3MgSG90ZWwge1xuICBjb25zdHJ1Y3Rvcihyb29tcykge1xuICAgIHRoaXMucm9vbXMgPSByb29tcztcbiAgICB0aGlzLmRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXRyaWV2ZUF2YWlsYWJsZVJvb21zKGFsbEJvb2tpbmdzKSB7XG4gICAgY29uc3QgdGFrZW5Sb29tTnVtYmVycyA9IGFsbEJvb2tpbmdzLnJlZHVjZSgocm9vbU51bWJlcnMsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IHRoaXMuZGF0ZSkge1xuICAgICAgICByb29tTnVtYmVycy5wdXNoKGJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vbU51bWJlcnM7XG4gICAgfSwgW10pXG4gICAgY29uc3QgYXZhaWxhYmxlUm9vbXMgPSB0aGlzLnJvb21zLmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiAhdGFrZW5Sb29tTnVtYmVycy5pbmNsdWRlcyhyb29tLm51bWJlcik7XG4gICAgfSlcbiAgICAgIHJldHVybiBhdmFpbGFibGVSb29tcztcbiAgfVxuXG4gIGZpbHRlclJvb21zQnlUeXBlKGFsbEJvb2tpbmdzLCByb29tVHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZWRSb29tcyA9IHRoaXMucmV0cmlldmVBdmFpbGFibGVSb29tcyhhbGxCb29raW5ncyk7XG4gICAgaWYgKHJvb21UeXBlID09PSBcImFsbCByb29tc1wiKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZFJvb21zO1xuICAgIH1cbiAgICBjb25zdCByb29tc0J5VHlwZSA9IG1hdGNoZWRSb29tcy5maWx0ZXIocm9vbSA9PiB7XG4gICAgICByZXR1cm4gcm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGU7XG4gICAgfSlcbiAgICByZXR1cm4gcm9vbXNCeVR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90ZWw7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IEd1ZXN0IGZyb20gJy4vR3Vlc3QnO1xuXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJuYW1lKSB7XG4gICAgc3VwZXIodXNlcm5hbWUpXG4gIH1cblxuICBzZWFyY2hGb3JHdWVzdChndWVzdE5hbWUsIGFsbEd1ZXN0cykge1xuICAgIGNvbnN0IHNlYXJjaGVkR3Vlc3QgPSBhbGxHdWVzdHMuZmluZChndWVzdCA9PiB7XG4gICAgICByZXR1cm4gZ3Vlc3ROYW1lID09PSBndWVzdC5uYW1lO1xuICAgIH0pXG4gICAgaWYgKHNlYXJjaGVkR3Vlc3QpIHtcbiAgICAgIGNvbnN0IGd1ZXN0UHJvZmlsZSA9IG5ldyBHdWVzdChgY3VzdG9tZXIke3NlYXJjaGVkR3Vlc3QuaWR9YCwgc2VhcmNoZWRHdWVzdC5uYW1lKTtcbiAgICAgIGd1ZXN0UHJvZmlsZS5pZCA9IHNlYXJjaGVkR3Vlc3QuaWQ7XG4gICAgICByZXR1cm4gZ3Vlc3RQcm9maWxlO1xuICAgIH1cbiAgICByZXR1cm4gXCJlcnJvclwiO1xuICB9XG5cbiAgZmlsdGVyVG9kYXlzQm9va2luZ3MoYWxsQm9va2luZ3MpIHtcbiAgICByZXR1cm4gYWxsQm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT4ge1xuICAgICAgcmV0dXJuIGJvb2tpbmcuZGF0ZSA9PT0gdGhpcy5kYXRlO1xuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVPY2N1cGFuY3lUb2RheShhbGxCb29raW5ncywgdG90YWxOdW1iZXJPZlJvb21zKSB7XG4gICAgY29uc3QgYm9va2VkUm9vbXMgPSB0aGlzLmZpbHRlclRvZGF5c0Jvb2tpbmdzKGFsbEJvb2tpbmdzKTtcbiAgICBjb25zdCBwZXJjZW50T2NjdXBhbmN5ID0gTWF0aC5yb3VuZChib29rZWRSb29tcy5sZW5ndGggLyB0b3RhbE51bWJlck9mUm9vbXMgKiAxMDApO1xuICAgIHJldHVybiBgJHtwZXJjZW50T2NjdXBhbmN5fSVgO1xuICB9XG5cbiAgY2FsY3VsYXRlUmV2ZW51ZVRvZGF5KGFsbEJvb2tpbmdzLCBob3RlbCkge1xuICAgIGNvbnN0IGJvb2tlZFJvb21zID0gdGhpcy5maWx0ZXJUb2RheXNCb29raW5ncyhhbGxCb29raW5ncyk7XG4gICAgcmV0dXJuIGhvdGVsLnJvb21zLnJlZHVjZSgodG90YWxSZXZlbnVlLCByb29tKSA9PiB7XG4gICAgICBib29rZWRSb29tcy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgICBpZiAocm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcikge1xuICAgICAgICAgIHRvdGFsUmV2ZW51ZSArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b3RhbFJldmVudWU7XG4gICAgfSwgMClcbiAgICByZXR1cm4gdG90YWxSZXZlbnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XG4iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlcm5hbWUpIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy5wYXNzd29yZCA9IFwib3Zlcmxvb2syMDIwXCI7XG4gICAgdGhpcy5pZCA9IHVzZXJuYW1lLmluY2x1ZGVzKCdjdXN0b21lcicpID8gcGFyc2VJbnQodXNlcm5hbWUuc2xpY2UoOCkpIDogMFxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gIH1cblxuICB2YWxpZGF0ZVVzZXIoZW50ZXJlZFBXKSB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWUgPT09IFwibWFuYWdlclwiICYmIGVudGVyZWRQVyA9PT0gdGhpcy5wYXNzd29yZCkge1xuICAgICAgcmV0dXJuIFwibWFuYWdlclwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy51c2VybmFtZS5pbmNsdWRlcyhcImN1c3RvbWVyXCIpICYmIHRoaXMuaWQgPCA1MSAmJiBlbnRlcmVkUFcgPT09IHRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiBcImd1ZXN0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cIjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImV4cG9ydCBsZXQgYXBpQ2FsbHMgPSB7XG4gIGdldEJvb2tpbmdEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmJvb2tpbmdzKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgfSxcblxuICBnZXRVc2VyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS51c2VycylcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG4gIH0sXG5cbiAgZ2V0Um9vbURhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEucm9vbXMpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICB9LFxuXG4gIHBvc3ROZXdCb29raW5nKGJvb2tpbmdUb1Bvc3QpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gIFx0ICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZ1RvUG9zdCksXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuICB9LFxuXG4gIGRlbGV0ZUJvb2tpbmcoYm9va2luZ1RvRGVsZXRlKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7XG4gIFx0ICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZ1RvRGVsZXRlKVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3R1cmluZy1sb2dvLnBuZ1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBHdWVzdCBmcm9tICcuL0d1ZXN0JztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9Ib3RlbCc7XG5pbXBvcnQgeyBhcGlDYWxscyB9IGZyb20gJy4vYXBpQ2FsbHMnXG5cbi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG5jb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IG5hdlNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtJyk7XG5sZXQgY3VycmVudFVzZXI7XG5sZXQgY3VycmVudEd1ZXN0O1xubGV0IGN1cnJlbnRNYW5hZ2VyO1xubGV0IGN1cnJlbnRIb3RlbDtcbmxldCBib29raW5nRGF0YTtcbmxldCB1c2VyRGF0YTtcblxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnZXRBcGlEYXRhKTtcbmxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTG9naW5DbGljayk7XG5uYXZTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOYXZDbGljayk7XG5tYWluU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTWFpblNlY3Rpb25DbGljaylcblxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbmZ1bmN0aW9uIGdldEFwaURhdGEoKSB7XG4gIGNvbnN0IGJvb2tpbmdzID0gYXBpQ2FsbHMuZ2V0Qm9va2luZ0RhdGEoKTtcbiAgY29uc3QgdXNlcnMgID0gYXBpQ2FsbHMuZ2V0VXNlckRhdGEoKTtcbiAgY29uc3Qgcm9vbXMgPSBhcGlDYWxscy5nZXRSb29tRGF0YSgpO1xuICBQcm9taXNlLmFsbChbYm9va2luZ3MsIHVzZXJzLCByb29tc10pLnRoZW4oZGF0YSA9PiB7XG4gICAgZGVmaW5lQXBpRGF0YShkYXRhWzBdLCBkYXRhWzFdLCBkYXRhWzJdKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGVmaW5lQXBpRGF0YShib29raW5ncywgdXNlcnMsIHJvb21zKSB7XG4gIGJvb2tpbmdEYXRhID0gYm9va2luZ3M7XG4gIHVzZXJEYXRhID0gdXNlcnM7XG4gIGN1cnJlbnRIb3RlbCA9IG5ldyBIb3RlbChyb29tcyk7XG59XG5cbi8vfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG5mdW5jdGlvbiBoYW5kbGVMb2dpbkNsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tdXNlcm5hbWUtaW5wdXQnKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1wYXNzd29yZC1pbnB1dCcpO1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJsb2dpbi1idXR0b25cIikge1xuICAgIGNyZWF0ZVVzZXIodXNlcm5hbWVJbnB1dC52YWx1ZSwgcGFzc3dvcmRJbnB1dC52YWx1ZSk7XG4gICAgY2xlYXJGb3JtKHVzZXJuYW1lSW5wdXQsIHBhc3N3b3JkSW5wdXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW50ZXJlZFVzZXJuYW1lLCBlbnRlcmVkUGFzc3dvcmQpIHtcbiAgY3VycmVudFVzZXIgPSBuZXcgVXNlcihlbnRlcmVkVXNlcm5hbWUpO1xuICBjb25zdCB1c2VyVHlwZSA9IGN1cnJlbnRVc2VyLnZhbGlkYXRlVXNlcihlbnRlcmVkUGFzc3dvcmQpO1xuICBjbGVhckxvZ2luRXJyb3IoKTtcbiAgaWYgKHVzZXJUeXBlID09PSBcImd1ZXN0XCIpIHtcbiAgICBjcmVhdGVHdWVzdChjdXJyZW50VXNlcik7XG4gIH0gZWxzZSBpZiAodXNlclR5cGUgPT09IFwibWFuYWdlclwiKSB7XG4gICAgY3JlYXRlTWFuYWdlcihjdXJyZW50VXNlcik7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUxvZ2luRXJyb3IodXNlclR5cGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSh1c2VybmFtZUlucHV0LCBwYXNzd29yZElucHV0KSB7XG4gIHVzZXJuYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwYXNzd29yZElucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3Vlc3QoY3VycmVudFVzZXIpIHtcbiAgY29uc3QgbWF0Y2hlZEd1ZXN0ID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHtcbiAgICByZXR1cm4gdXNlci5pZCA9PT0gY3VycmVudFVzZXIuaWQ7XG4gIH0pXG4gIGN1cnJlbnRHdWVzdCA9IG5ldyBHdWVzdChgY3VzdG9tZXIke21hdGNoZWRHdWVzdC5pZH1gLCBtYXRjaGVkR3Vlc3QubmFtZSk7XG4gIHJ1bkd1ZXN0TWV0aG9kcygpXG4gIGRpc3BsYXlHdWVzdEhvbWUoKTtcbn1cblxuZnVuY3Rpb24gcnVuR3Vlc3RNZXRob2RzKCkge1xuICBjdXJyZW50R3Vlc3QuY2FsY3VsYXRlVG90YWxTcGVudChib29raW5nRGF0YSwgY3VycmVudEhvdGVsKTtcbiAgY3VycmVudEd1ZXN0LnJldHJpZXZlQWxsQm9va2luZ3MoYm9va2luZ0RhdGEpO1xuICBjdXJyZW50R3Vlc3Quc29ydEJvb2tpbmdzQnlEYXRlKFwiZnV0dXJlXCIpO1xuICBjdXJyZW50R3Vlc3Quc29ydEJvb2tpbmdzQnlEYXRlKFwicGFzdFwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUd1ZXN0SG9tZSgpIHtcbiAgY2xlYXJIb21lKCk7XG4gIGRpc3BsYXlHdWVzdE5hdigpO1xuICBkaXNwbGF5SGVhZGluZyhcIllvdXIgUmVzZXJ2YXRpb25zXCIpO1xuICBoYW5kbGVCb29raW5nc0Rpc3BsYXkoY3VycmVudEd1ZXN0KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3ROYXYoKSB7XG4gIGNvbnN0IG5hdkJsb2NrID1cbiAgICBgPGRpdiBjbGFzcz1cImd1ZXN0LW5hdlwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5hdi1oZWFkaW5nc1wiPlxuICAgICAgICA8aDIgY2xhc3M9XCJuYXYtdGV4dFwiPldlbGNvbWUgJHtjdXJyZW50R3Vlc3QubmFtZX0hPC9oMj5cbiAgICAgICAgPGgzIGNsYXNzPVwibmF2LXRleHRcIj5Ub2RheSdzIERhdGU6ICR7Zm9ybWF0RGF0ZUZvckRpc3BsYXkoY3VycmVudEd1ZXN0LmRhdGUpfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtZGV0YWlsc1wiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm5hdi1ib29raW5nLWZvcm1cIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJuYXYtZm9ybS1oZWFkaW5nIG5hdi10ZXh0XCI+Qm9vayBBIFJvb208L2gzPlxuICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwiZGF0ZS1pbnB1dFwiIHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkYXRlLWF2YWlsYWJpbGl0eS1pbnB1dFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjdXN0b21lci1uYXYtYnV0dG9uIGRhdGUtYXZhaWxhYmlsaXR5LWJ1dHRvblwiPkNIRUNLIEFWQUlMQUJJTElUWSE8L2J1dHRvbj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tZXItaW5mb1wiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cIm5hdi10ZXh0XCI+VG90YWwgQW1vdW50IFNwZW50IG9uIFJvb21zOiAkJHtjdXJyZW50R3Vlc3QudG90YWxBbW91bnRTcGVudC50b0ZpeGVkKDIpfTwvaDQ+XG4gICAgICAgICAgPGg0IGNsYXNzPVwiZGFzaGJvYXJkLWxpbmsgbmF2LXRleHRcIj5WSUVXIFlPVVIgREFTSEJPQVJEPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG4gIG5hdlNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbmF2QmxvY2spO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlRm9yRGlzcGxheShvcmlnaW5hbEZvcm1hdCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUob3JpZ2luYWxGb3JtYXQpO1xuICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMSArICcvJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SGVhZGluZyhzZWN0aW9uSGVhZGluZykge1xuICBjb25zdCBoZWFkaW5nQmxvY2sgPVxuICBgPGgxIGNsYXNzPVwibWFpbi10aXRsZVwiPiR7c2VjdGlvbkhlYWRpbmd9PC9oMT5gO1xuICBtYWluU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBoZWFkaW5nQmxvY2spO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCb29raW5nc0Rpc3BsYXkoZ3Vlc3RQcm9maWxlKSB7XG4gIGlmIChndWVzdFByb2ZpbGUucHJlc2VudEJvb2tpbmdzLmxlbmd0aCA+IDApIHtcbiAgICBkaXNwbGF5Qm9va2luZ3MoJ0N1cnJlbnQgQm9va2luZ3MnLCBndWVzdFByb2ZpbGUucHJlc2VudEJvb2tpbmdzLCBndWVzdFByb2ZpbGUpO1xuICB9XG4gIGlmIChndWVzdFByb2ZpbGUuZnV0dXJlQm9va2luZ3MubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlCb29raW5ncygnRnV0dXJlIEJvb2tpbmdzJywgZ3Vlc3RQcm9maWxlLmZ1dHVyZUJvb2tpbmdzLCBndWVzdFByb2ZpbGUpO1xuICB9XG4gIGlmIChndWVzdFByb2ZpbGUucGFzdEJvb2tpbmdzLmxlbmd0aCA+IDApIHtcbiAgICBkaXNwbGF5Qm9va2luZ3MoJ1Bhc3QgQm9va2luZ3MnLCBndWVzdFByb2ZpbGUucGFzdEJvb2tpbmdzLCBndWVzdFByb2ZpbGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29raW5ncyhjYXJkVGl0bGUsIGJvb2tpbmdzLCBndWVzdFByb2ZpbGUpIHtcbiAgY29uc3QgYm9va2luZ0Jsb2NrID1cbiAgICBgPGFydGljbGUgY2xhc3M9XCJyZXNlcnZhdGlvbi1jYXJkc1wiPlxuICAgICAgPGgyPiR7Y2FyZFRpdGxlfTwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJyb29tLWhpc3RvcnktbGlzdFwiPlxuICAgICAgPC91bD5cbiAgICA8L2FydGljbGU+YFxuICBtYWluU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGJvb2tpbmdCbG9jayk7XG4gIGhhbmRsZUJvb2tpbmdzTGlzdChib29raW5ncywgZ3Vlc3RQcm9maWxlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVCb29raW5nc0xpc3QoYm9va2luZ3MsIGd1ZXN0UHJvZmlsZSkge1xuICBjb25zdCBsaXN0QmxvY2sgPSBtYWluU2VjdGlvbi5sYXN0Q2hpbGQuY2hpbGRyZW5bMV07XG4gIGlmIChib29raW5ncyA9PT0gZ3Vlc3RQcm9maWxlLmZ1dHVyZUJvb2tpbmdzICYmIGd1ZXN0UHJvZmlsZSAhPT0gY3VycmVudEd1ZXN0KSB7XG4gICAgZGlzcGxheVJlbW92YWJsZUd1ZXN0Qm9va2luZ3MoYm9va2luZ3MsIGxpc3RCbG9jaylcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Qm9va2luZ3NMaXN0KGJvb2tpbmdzLCBsaXN0QmxvY2spXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUJvb2tpbmdzTGlzdChib29raW5ncywgbGlzdEJsb2NrKSB7XG4gIGJvb2tpbmdzLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPVxuICAgIGA8bGk+Um9vbSAke2Jvb2tpbmcucm9vbU51bWJlcn0gb24gJHtmb3JtYXREYXRlRm9yRGlzcGxheShib29raW5nLmRhdGUpfTwvbGk+YDtcbiAgICBsaXN0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsaXN0SXRlbSk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZW1vdmFibGVHdWVzdEJvb2tpbmdzKGJvb2tpbmdzLCBsaXN0QmxvY2spIHtcbiAgYm9va2luZ3MuZm9yRWFjaChib29raW5nID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9XG4gICAgYDxsaSBkYXRhLWlkPScke2Jvb2tpbmcuaWR9Jz5Sb29tICR7Ym9va2luZy5yb29tTnVtYmVyfSBvbiAke2Zvcm1hdERhdGVGb3JEaXNwbGF5KGJvb2tpbmcuZGF0ZSl9XG4gICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtcm9vbS1idXR0b25cIj5DQU5DRUw8L2J1dHRvbj5cbiAgICAgPC9saT5gO1xuICAgIGxpc3RCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxpc3RJdGVtKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFuYWdlcihjdXJyZW50VXNlcikge1xuICBjdXJyZW50TWFuYWdlciA9IG5ldyBNYW5hZ2VyKGN1cnJlbnRVc2VyLnVzZXJuYW1lKTtcbiAgcnVuTWFuYWdlck1ldGhvZHMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJIb21lKCkge1xuICBtYWluU2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuICBuYXZTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHJ1bk1hbmFnZXJNZXRob2RzKCkge1xuICBjb25zdCBob3RlbE9jY3VwYW5jeSA9IGN1cnJlbnRNYW5hZ2VyLmNhbGN1bGF0ZU9jY3VwYW5jeVRvZGF5KGJvb2tpbmdEYXRhLCBjdXJyZW50SG90ZWwucm9vbXMubGVuZ3RoKTtcbiAgY29uc3QgdG9kYXlzUmV2ZW51ZSA9IGN1cnJlbnRNYW5hZ2VyLmNhbGN1bGF0ZVJldmVudWVUb2RheShib29raW5nRGF0YSwgY3VycmVudEhvdGVsKTtcbiAgY29uc3QgYXZhaWxhYmxlUm9vbXMgPSBjdXJyZW50SG90ZWwucmV0cmlldmVBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSlcbiAgZGlzcGxheU1hbmFnZXJIb21lVmlldyhob3RlbE9jY3VwYW5jeSwgdG9kYXlzUmV2ZW51ZSwgYXZhaWxhYmxlUm9vbXMpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VySG9tZVZpZXcoaG90ZWxPY2N1cGFuY3ksIHRvZGF5c1JldmVudWUsIGF2YWlsYWJsZVJvb21zKSB7XG4gIGNsZWFySG9tZSgpO1xuICBkaXNwbGF5TWFuYWdlck5hdihob3RlbE9jY3VwYW5jeSwgdG9kYXlzUmV2ZW51ZSwgYXZhaWxhYmxlUm9vbXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlck5hdihob3RlbE9jY3VwYW5jeSwgdG9kYXlzUmV2ZW51ZSwgYXZhaWxhYmxlUm9vbXMpIHtcbiAgY29uc3QgbmF2QmxvY2sgPVxuICBgPG5hdiBjbGFzcz1cIm1hbmFnZXItbmF2XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1hbmFnZXItbmF2LWhlYWRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYW5hZ2VyLW5hdi10aXRsZS1ibG9ja1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJtYW5hZ2VyLW5hdi10aXRsZVwiPldlbGNvbWUgTWFuYWdlciE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFuYWdlci1uYXYtZGV0YWlscy1ibG9ja1wiPlxuICAgICAgICA8aDIgY2xhc3M9XCJtYW5hZ2VyLW5hdi1kZXRhaWxzXCI+VG9kYXkncyBEYXRlOiAke2Zvcm1hdERhdGVGb3JEaXNwbGF5KGN1cnJlbnRNYW5hZ2VyLmRhdGUpfTwvaDI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm1hbmFnZXItbmF2LWRldGFpbHNcIj5BdmFpbGFibGUgUm9vbXM6ICR7YXZhaWxhYmxlUm9vbXMubGVuZ3RofTwvaDM+XG4gICAgICAgIDxoMyBjbGFzcz1cIm1hbmFnZXItbmF2LWRldGFpbHNcIj5PY2N1cGFuY3k6ICR7aG90ZWxPY2N1cGFuY3l9PC9oMz5cbiAgICAgICAgPGgzIGNsYXNzPVwibWFuYWdlci1uYXYtZGV0YWlsc1wiPlRvdGFsIFJldmVudWUgVG9kYXk6ICQke3RvZGF5c1JldmVudWUudG9GaXhlZCgyKX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1hbmFnZXItbmF2LWZvcm1zXCI+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1hbmFnZXItdXNlci1mb3JtXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cIm1hbmFnZXItbmF2LWZvcm0tdGl0bGVcIj5Mb29rIFVwIEEgR3Vlc3Q8L2gzPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkd1ZXN0IE5hbWVcIiBhcmlhLWxhYmVsPVwiZ3Vlc3QtbmFtZS1pbnB1dFwiIGNsYXNzPVwibWFuYWdlci1uYXYtaW5wdXRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1hbmFnZXItbmF2LWJ1dHRvbiBzZWFyY2gtdXNlci1idXR0b25cIj5TRUFSQ0ggR1VFU1Q8L2J1dHRvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWFuYWdlci1kYXRlLWZvcm1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwibWFuYWdlci1uYXYtZm9ybS10aXRsZVwiPlNlYXJjaCBBdmFpbGFiaWxpdHkgQnkgRGF0ZTwvaDM+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGFyaWEtbGFiZWw9XCJkYXRlLWlucHV0XCIgY2xhc3M9XCJtYW5hZ2VyLW5hdi1pbnB1dFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWFuYWdlci1uYXYtYnV0dG9uIGRhdGUtYXZhaWxhYmlsaXR5LWJ1dHRvblwiPlNFQVJDSCBST09NUzwvYnV0dG9uPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuICA8L25hdj5gO1xuICBuYXZTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG5hdkJsb2NrKTtcbn1cblxuXG5mdW5jdGlvbiBjbGVhckxvZ2luRXJyb3IoKSB7XG4gIGlmIChsb2dpbkZvcm0uY2hpbGRyZW5bNF0pIHtcbiAgICBsb2dpbkZvcm0uY2hpbGRyZW5bNF0ucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvZ2luRXJyb3IoZXJyb3JNZXNzYWdlKSB7XG4gIGNvbnN0IG1lc3NhZ2VCbG9jayA9XG4gIGA8aDQgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+JHtlcnJvck1lc3NhZ2V9PC9oND5gO1xuICBsb2dpbkZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtZXNzYWdlQmxvY2spO1xufVxuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXRlLWF2YWlsYWJpbGl0eS1idXR0b25cIikpIHtcbiAgICBoYW5kbGVBdmFpbGFibGVSb29tc0Rpc3BsYXkoZXZlbnQsIGN1cnJlbnRVc2VyLmlkKVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2gtdXNlci1idXR0b25cIikpIHtcbiAgICBmaW5kR3Vlc3RQcm9maWxlKGV2ZW50KVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXNoYm9hcmQtbGlua1wiKSkge1xuICAgIGRpc3BsYXlHdWVzdEhvbWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBdmFpbGFibGVSb29tc0Rpc3BsYXkoZXZlbnQsIHVzZXJJRCkge1xuICBjb25zdCBkYXRlSW5wdXQgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgaWYgKGN1cnJlbnRVc2VyLmRhdGUgPD0gZGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgZGlzcGxheUZpbHRlcmVkUm9vbXNCeURhdGUoZGF0ZUlucHV0LCBldmVudCwgdXNlcklEKVxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlOYXZGb3JtRXJyb3IoZXZlbnQsIFwiZGF0ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmlsdGVyZWRSb29tc0J5RGF0ZShkYXRlSW5wdXQsIGV2ZW50LCB1c2VySUQpIHtcbiAgUmVtb3ZlRXJyb3JNZXNzYWdlKGV2ZW50KTtcbiAgbWFpblNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcbiAgZGlzcGxheUhlYWRpbmcoYEF2YWlsYWJsZSBSb29tcyBGb3IgJHtmb3JtYXREYXRlRm9yRGlzcGxheShkYXRlSW5wdXQudmFsdWUpfWApO1xuICBkaXNwbGF5Um9vbVR5cGVGb3JtKHVzZXJJRClcbiAgZmluZE9wZW5Sb29tcyhkYXRlSW5wdXQudmFsdWUsIHVzZXJJRCk7XG59XG5cbmZ1bmN0aW9uIFJlbW92ZUVycm9yTWVzc2FnZShldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJvb21UeXBlRm9ybSh1c2VySUQpIHtcbiAgY29uc3Qgcm9vbVR5cGVGb3JtID1cbiAgYDxhcnRpY2xlIGNsYXNzPVwicm9vbS10eXBlLWZvcm1cIj5cbiAgICA8aDIgY2xhc3M9XCJmaWx0ZXItcm9vbS10aXRsZVwiPkZpbHRlciBUaGVzZSBSb29tcyBCeSBUeXBlPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWZvcm0taW5wdXRzXCI+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJyb29tLXR5cGVzXCIgaWQ9XCJyb29tLXR5cGVzXCIgY2xhc3M9XCJyb29tLXR5cGUtaW5wdXRzXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGwgcm9vbXNcIj5hbGwgcm9vbXM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlc2lkZW50aWFsIHN1aXRlXCI+cmVzaWRlbnRpYWwgc3VpdGU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN1aXRlXCI+c3VpdGU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImp1bmlvciBzdWl0ZVwiPmp1bmlvciBzdWl0ZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2luZ2xlIHJvb21cIj5zaW5nbGUgcm9vbTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicm9vbS10eXBlLWJ1dHRvblwiPkZJTFRFUiBZT1VSIFNFQVJDSDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2FydGljbGU+YDtcbiAgaWYgKHVzZXJJRCA+IDApIHtcbiAgICBtYWluU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21UeXBlRm9ybSlcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kT3BlblJvb21zKGRhdGVQaWNrZWQsIHVzZXJJRCkge1xuICBjdXJyZW50SG90ZWwuZGF0ZSA9IGRhdGVQaWNrZWQucmVwbGFjZSgnLScsICcvJykucmVwbGFjZSgnLScsICcvJylcbiAgY29uc3QgYXZhaWxhYmxlUm9vbXMgPSBjdXJyZW50SG90ZWwucmV0cmlldmVBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSk7XG4gIGlmIChhdmFpbGFibGVSb29tcy5sZW5ndGggPiAwKSB7XG4gICAgZGV0ZXJtaW5lVXNlclZpZXcoYXZhaWxhYmxlUm9vbXMsIHVzZXJJRClcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Tm9WYWNhbmN5TWVzc2FnZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lVXNlclZpZXcoYXZhaWxhYmxlUm9vbXMsIHVzZXJJRCkge1xuICBpZiAodXNlcklEID4gMCkge1xuICAgIGRpc3BsYXlBdmFpbGFibGVSb29tc0Zvckd1ZXN0KGF2YWlsYWJsZVJvb21zKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5QXZhaWxhYmxlUm9vbXNGb3JNYW5hZ2VyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zRm9yR3Vlc3QoYXZhaWxhYmxlUm9vbXMsIHVzZXJJRCkge1xuICBhdmFpbGFibGVSb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgIGNvbnN0IHJvb21CbG9jayA9XG4gICAgYDxhcnRpY2xlIGNsYXNzPVwicm9vbS1jYXJkc1wiPlxuICAgICAgPGgyIGNsYXNzPVwicm9vbS1jYXJkLXRpdGxlXCI+Um9vbSAke3Jvb20ubnVtYmVyfTwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJyb29tLWxpc3RcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicm9vbS1saXN0LWl0ZW1cIj48aDM+JHtyb29tLnJvb21UeXBlfTwvaDM+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwicm9vbS1saXN0LWl0ZW1cIj4ke3Jvb20ubnVtQmVkc30gJHtyb29tLmJlZFNpemV9IHNpemUgYmVkczwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInJvb20tbGlzdC1pdGVtXCI+Q29zdCBQZXIgTmlnaHQ6ICQke3Jvb20uY29zdFBlck5pZ2h0fTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInJvb20tbGlzdC1pdGVtXCI+QmlkZXQ/OiAke3Jvb20uYmlkZXR9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay1yb29tLWJ1dHRvblwiPkJPT0sgVEhJUyBST09NPC9idXR0b24+XG4gICAgPC9hcnRpY2xlPmBcbiAgICBtYWluU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21CbG9jaylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zRm9yTWFuYWdlcigpIHtcbiAgY29uc3QgYXZhaWxhYmxlUm9vbXMgPSBjdXJyZW50SG90ZWwucmV0cmlldmVBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSlcbiAgYXZhaWxhYmxlUm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICBjb25zdCByb29tQmxvY2sgPVxuICAgIGA8YXJ0aWNsZSBjbGFzcz1cInJvb20tY2FyZHNcIj5cbiAgICAgIDxoMiBjbGFzcz1cInJvb20tY2FyZC10aXRsZVwiPlJvb20gJHtyb29tLm51bWJlcn08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwicm9vbS1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInJvb20tbGlzdC1pdGVtXCI+PGgzPiR7cm9vbS5yb29tVHlwZX08L2gzPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInJvb20tbGlzdC1pdGVtXCI+JHtyb29tLm51bUJlZHN9ICR7cm9vbS5iZWRTaXplfSBzaXplIGJlZHM8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJyb29tLWxpc3QtaXRlbVwiPkNvc3QgUGVyIE5pZ2h0OiAkJHtyb29tLmNvc3RQZXJOaWdodH08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJyb29tLWxpc3QtaXRlbVwiPkJpZGV0PzogJHtyb29tLmJpZGV0fTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cImN1c3RvbWVyLW5hbWUtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFRoZSBHdWVzdCBOYW1lXCIgY2xhc3M9IFwiZ3Vlc3QtbmFtZS1pbnB1dFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1hbmFnZXItYm9vay1yb29tLWJ1dHRvblwiPkJPT0sgUk9PTSBGT1IgR1VFU1Q8L2J1dHRvbj5cbiAgICA8L2FydGljbGU+YFxuICAgIG1haW5TZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcm9vbUJsb2NrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOb1ZhY2FuY3lNZXNzYWdlKCkge1xuICBjb25zdCBhcG9sb2d5QmxvY2sgPVxuICBgPGgzIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPlRoZXJlIGFyZSB2YWNhbmNpZXMgZm9yICR7Zm9ybWF0RGF0ZUZvckRpc3BsYXkoY3VycmVudEhvdGVsLmRhdGUpfS4gUGxlYXNlIGNob29zZSBhIGRpZmZlcmVudCBkYXRlLjwvaDM+YDtcbiAgbWFpblNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBhcG9sb2d5QmxvY2spO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmF2Rm9ybUVycm9yKGV2ZW50LCBlcnJvclR5cGUpIHtcbiAgUmVtb3ZlRXJyb3JNZXNzYWdlKGV2ZW50KTtcbiAgY29uc3QgZGF0ZUJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgZXJyb3JCbG9jayA9XG4gIGA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCAke2Vycm9yVHlwZX08cD5gXG4gIGRhdGVCdXR0b24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVycm9yQmxvY2spO1xufVxuXG5mdW5jdGlvbiBmaW5kR3Vlc3RQcm9maWxlKGV2ZW50KSB7XG4gIGNvbnN0IG5hbWVFbnRlcmVkID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgY29uc3QgZ3Vlc3RQcm9maWxlID0gY3VycmVudE1hbmFnZXIuc2VhcmNoRm9yR3Vlc3QobmFtZUVudGVyZWQudmFsdWUsIHVzZXJEYXRhKVxuICBpZiAoZ3Vlc3RQcm9maWxlID09PSBcImVycm9yXCIpIHtcbiAgICBkaXNwbGF5TmF2Rm9ybUVycm9yKGV2ZW50LCBcImd1ZXN0IG5hbWVcIilcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5R3Vlc3RQcm9maWxlKGd1ZXN0UHJvZmlsZSk7XG4gIH1cbiAgbmFtZUVudGVyZWQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3RQcm9maWxlKGd1ZXN0UHJvZmlsZSkge1xuICBSZW1vdmVFcnJvck1lc3NhZ2UoZXZlbnQpO1xuICBtYWluU2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuICBndWVzdFByb2ZpbGUucmV0cmlldmVBbGxCb29raW5ncyhib29raW5nRGF0YSk7XG4gIGd1ZXN0UHJvZmlsZS5zb3J0Qm9va2luZ3NCeURhdGUoJ2Z1dHVyZScpO1xuICBndWVzdFByb2ZpbGUuc29ydEJvb2tpbmdzQnlEYXRlKCdwYXN0Jyk7XG4gIGRpc3BsYXlIZWFkaW5nKGBBbGwgQm9va2luZ3MgZm9yICR7Z3Vlc3RQcm9maWxlLm5hbWV9YCk7XG4gIGhhbmRsZUJvb2tpbmdzRGlzcGxheShndWVzdFByb2ZpbGUpO1xufVxuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuZnVuY3Rpb24gaGFuZGxlTWFpblNlY3Rpb25DbGljayhldmVudCkge1xuICBjb25zdCBuYW1lRW50ZXJlZCA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Jvb20tdHlwZS1idXR0b24nKSB7XG4gICAgaGFuZGxlUm9vbVR5cGVGaWx0ZXIoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdib29rLXJvb20tYnV0dG9uJykge1xuICAgIGhhbmRsZVJvb21Cb29raW5nKGV2ZW50LCBuYW1lRW50ZXJlZCwgY3VycmVudEd1ZXN0KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnbWFuYWdlci1ib29rLXJvb20tYnV0dG9uJykge1xuICAgIGNvbnN0IGd1ZXN0UHJvZmlsZSA9IGN1cnJlbnRNYW5hZ2VyLnNlYXJjaEZvckd1ZXN0KG5hbWVFbnRlcmVkLnZhbHVlLCB1c2VyRGF0YSk7XG4gICAgaGFuZGxlUm9vbUJvb2tpbmcoZXZlbnQsIG5hbWVFbnRlcmVkLCBndWVzdFByb2ZpbGUpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2FuY2VsLXJvb20tYnV0dG9uXCIpIHtcbiAgICBoYW5kbGVCb29raW5nQ2FuY2VsbGF0aW9uKGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSb29tVHlwZUZpbHRlcihldmVudCkge1xuICBjb25zdCBzZWxlY3RlZFR5cGUgPSBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBjb25zdCBmaWx0ZXJlZFJvb21zID0gY3VycmVudEhvdGVsLmZpbHRlclJvb21zQnlUeXBlKGJvb2tpbmdEYXRhLCBzZWxlY3RlZFR5cGUudmFsdWUpO1xuICBtYWluU2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuICBpZiAoZmlsdGVyZWRSb29tcy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheVJvb21UeXBlRmlsdGVyKHNlbGVjdGVkVHlwZS52YWx1ZSwgZmlsdGVyZWRSb29tcyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheU5vVmFjYW5jeU1lc3NhZ2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Um9vbVR5cGVGaWx0ZXIoc2VsZWN0ZWRUeXBlLCBmaWx0ZXJlZFJvb21zKSB7XG4gIGRpc3BsYXlIZWFkaW5nKGBBdmFpbGFibGUgJHtzZWxlY3RlZFR5cGV9cyBGb3IgJHtmb3JtYXREYXRlRm9yRGlzcGxheShjdXJyZW50SG90ZWwuZGF0ZSl9YCk7XG4gIGRpc3BsYXlSb29tVHlwZUZvcm0oY3VycmVudEd1ZXN0LmlkKVxuICBkaXNwbGF5QXZhaWxhYmxlUm9vbXNGb3JHdWVzdChmaWx0ZXJlZFJvb21zKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUm9vbUJvb2tpbmcoZXZlbnQsIG5hbWVFbnRlcmVkLCBndWVzdFByb2ZpbGUpIHtcbiAgY29uc3Qgcm9vbU5hbWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gIFJlbW92ZUVycm9yTWVzc2FnZShldmVudClcbiAgaWYgKGd1ZXN0UHJvZmlsZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgZGlzcGxheU5hdkZvcm1FcnJvcihldmVudCwgXCJndWVzdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGJvb2tOZXdSb29tKHJvb21OYW1lLCBndWVzdFByb2ZpbGUsIGV2ZW50KVxuICB9XG4gIG5hbWVFbnRlcmVkLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gYm9va05ld1Jvb20ocm9vbU5hbWUsIGd1ZXN0UHJvZmlsZSwgZXZlbnQpIHtcbiAgY29uc3QgYm9va2luZ0Zvcm1hdCA9IGNyZWF0ZUJvb2tpbmdPYmplY3Qocm9vbU5hbWUuc2xpY2UoNSksIGd1ZXN0UHJvZmlsZS5pZCwgY3VycmVudEhvdGVsLmRhdGUpO1xuICBjb25zdCBuZXdCb29raW5nID0gYXBpQ2FsbHMucG9zdE5ld0Jvb2tpbmcoYm9va2luZ0Zvcm1hdClcbiAgbmV3Qm9va2luZ1xuICAgIC50aGVuKCgpID0+IGRpc3BsYXlTdWNjZXNzZnVsQm9va2luZyhldmVudCwgcm9vbU5hbWUsIGN1cnJlbnRIb3RlbC5kYXRlKSlcbiAgICAudGhlbigoKSA9PiB1cGRhdGVCb29raW5nRGF0YShuZXdCb29raW5nKSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ09iamVjdChyb29tTnVtYmVyLCBndWVzdElELCBkYXRlUGlja2VkKSB7XG4gIHJldHVybiB7XG4gICAgdXNlcklEOiBndWVzdElELFxuICAgIGRhdGU6IGRhdGVQaWNrZWQsXG4gICAgcm9vbU51bWJlcjogcGFyc2VJbnQocm9vbU51bWJlcilcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9va2luZ0RhdGEoYm9va2luZ0NoYW5nZSkge1xuICBib29raW5nQ2hhbmdlXG4gICAgLnRoZW4oKCkgPT4gYXBpQ2FsbHMuZ2V0Qm9va2luZ0RhdGEoKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiBib29raW5nRGF0YSA9IHJlc3BvbnNlKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdWNjZXNzZnVsQm9va2luZyhldmVudCwgcm9vbU5hbWUsIGRhdGVQaWNrZWQpIHtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBib29raW5nQmxvY2sgPVxuICBgPHAgY2xhc3M9XCJib29raW5nLXN1Y2Nlc3MtbWVzc2FnZVwiPiR7cm9vbU5hbWV9IGlzIG5vdyBib29rZWQgZm9yICR7Zm9ybWF0RGF0ZUZvckRpc3BsYXkoZGF0ZVBpY2tlZCl9PC9wPmA7XG4gIHN1Ym1pdEJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYm9va2luZ0Jsb2NrKTtcbiAgc3VibWl0QnV0dG9uLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCb29raW5nQ2FuY2VsbGF0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgYm9va2luZ1RvQ2FuY2VsID0gY2FuY2VsQnV0dG9uLnBhcmVudE5vZGU7XG4gIGNvbnN0IGNhbmNlbGxhdGlvbk9iamVjdCA9IHsgaWQ6IHBhcnNlSW50KGJvb2tpbmdUb0NhbmNlbC5kYXRhc2V0LmlkKSB9O1xuICBjb25zdCBuZXdDYW5jZWxsYXRpb24gPSBhcGlDYWxscy5kZWxldGVCb29raW5nKGNhbmNlbGxhdGlvbk9iamVjdCk7XG4gIG5ld0NhbmNlbGxhdGlvblxuICAgIC50aGVuKCgpID0+IGRpc3BsYXlDYW5jZWxsYXRpb24oY2FuY2VsQnV0dG9uKSlcbiAgICAudGhlbigoKSA9PiB1cGRhdGVCb29raW5nRGF0YShuZXdDYW5jZWxsYXRpb24pKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhbmNlbGxhdGlvbiAoY2FuY2VsQnV0dG9uKSB7XG4gIGNvbnN0IGNhbmNlbEJsb2NrID1cbiAgYDxwIGNsYXNzPVwiY2FuY2VsLWNvbmZpcm1hdGlvblwiPllvdSBoYXZlIGNhbmNlbGxlZCB0aGlzIHJlc2VydmF0aW9uPC9wPmA7XG4gIGNhbmNlbEJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgY2FuY2VsQmxvY2spO1xuICBjYW5jZWxCdXR0b24ucmVtb3ZlKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9