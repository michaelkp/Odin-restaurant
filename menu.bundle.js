/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/coffee.jpg":
/*!****************************!*\
  !*** ./src/img/coffee.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coffee.jpg";

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDQztBQUNNO0FBQ047O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbWVudUltZyBmcm9tICcuL2ltZy9tZW51LmpwZydcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi9pbWcvY29mZmVlLmpwZydcbmltcG9ydCBtaWxrc2hha2UgZnJvbSAnLi9pbWcvbWlsa3NoYWtlLmpwZydcbmltcG9ydCBzbmFja3MgZnJvbSAnLi9pbWcvc25hY2tzLmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLScpO1xuICAgIGNvbnNvbGUubG9nKCdNRU5VJyk7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBtZW51U2VjdGlvbi5pZCA9ICdtZW51J1xuICAgIG1lbnVBcnRpY2xlKG1lbnVTZWN0aW9uKVxuICAgIHJldHVybiBtZW51U2VjdGlvblxufVxuXG5mdW5jdGlvbiBtZW51QXJ0aWNsZShtZW51U2VjdGlvbikge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tJyk7XG4gICAgY29uc29sZS5sb2coJ21lbnUgYXJ0aWNsZScpO1xuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJylcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVRpdGxlKVxuICAgIGNvbnN0IG1lbnVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgbWVudUgxLnRleHRDb250ZW50ID0gJ091ciBNZW51IGF0IE9kaW4gQ29mZmVlJ1xuICAgICAgICBtZW51VGl0bGUuYXBwZW5kQ2hpbGQobWVudUgxKVxuICAgIGNvbnN0IG1lbnVIZXJvID0gbmV3IEltYWdlKClcbiAgICAgICAgbWVudUhlcm8uc3JjID0gbWVudUltZ1xuICAgICAgICBtZW51SGVyby5hbHQgPSAnbWVudSBPZGluIENvZmZlZSBTaG9wJ1xuICAgICAgICBtZW51SGVyby5pZCA9ICdtZW51LWltZydcbiAgICAgICAgbWVudVRpdGxlLmFwcGVuZENoaWxkKG1lbnVIZXJvKVxuICAgIGNvbnN0IG1lbnVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIG1lbnVQLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gT2RpbiBDb2ZmZWUuIFdlIGFyZSBjb2ZmZWUgbG92ZXJzIHdpdGggeWVhcnMgb2YgZXhwZXJpZW5jZSB3b3JraW5nIHdpdGggdGhlIGJlc3QgYmVhbnMsIGFuZCBlcXVpcG1lbnQgYXZhaWxpYmxlLidcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudVApXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJylcbiAgICAgICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW1zKVxuICAgIGNvbnN0IG1lbnVDb2ZmZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51Q29mZmVlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29mZmVlJylcbiAgICBjb25zdCBtZW51Q29mZmVlSW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgbWVudUNvZmZlZUltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zLWltZycpXG4gICAgICAgIG1lbnVDb2ZmZWVJbWcuc3JjID0gY29mZmVlXG4gICAgICAgIG1lbnVDb2ZmZWVJbWcuaWQgPSAnbWVudS1jb2ZmZWUnXG4gICAgICAgIG1lbnVDb2ZmZWVJbWcuYWx0ID0gJ0NvZmZlZSBmcm9tIHRoZSBPZGluIENvZmZlZSBtZW51LidcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVDb2ZmZWUpXG4gICAgICAgIG1lbnVDb2ZmZWUuYXBwZW5kQ2hpbGQobWVudUNvZmZlZUltZylcbiAgICBjb25zdCBtZW51Q29mZmVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtZW51Q29mZmVlVGV4dC50ZXh0Q29udGVudCA9IGBPZGluIENvZmZlZSBwcmVzZW50cyBvbmx5IHRoZSBmaW5lc3QgYmVhbnMgZnJvbSBhcm91bmQgdGhlIHdvcmxkIWBcbiAgICAgICAgbWVudUNvZmZlZS5hcHBlbmRDaGlsZChtZW51Q29mZmVlVGV4dClcbiAgICBjb25zdCBtZW51TWlsa3NoYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudU1pbGtzaGFrZS5jbGFzc0xpc3QuYWRkKCdtZW51LW1pbGtzaGFrZScpXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51TWlsa3NoYWtlKVxuICAgIGNvbnN0IG1lbnVNaWxrc2hha2VJbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBtZW51TWlsa3NoYWtlSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMtaW1nJylcbiAgICAgICAgbWVudU1pbGtzaGFrZUltZy5zcmMgPSBtaWxrc2hha2VcbiAgICAgICAgbWVudU1pbGtzaGFrZUltZy5pZCA9ICdtZW51LW1pbGtzaGFrZSdcbiAgICAgICAgbWVudU1pbGtzaGFrZUltZy5hbHQgPSAnQSBtaWxrc2hha2UgZnJvbSB0aGUgT2RpbiBDb2ZmZWUgbWVudS4nXG4gICAgICAgIG1lbnVNaWxrc2hha2UuYXBwZW5kQ2hpbGQobWVudU1pbGtzaGFrZUltZylcbiAgICBjb25zdCBtZW51TWlsa3NoYWtlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtZW51TWlsa3NoYWtlVGV4dC50ZXh0Q29udGVudCA9IGBPZGluIENvZmZlZSBhbHNvIG9mZmVycyB3b25kZXJmdWwgbWlsa3NoYWtlcyBmb3Igb3VyIGZyaWVuZHMgdGhhdCBkb24ndCBkcmluayBjb2ZmZWUuYFxuICAgICAgICBtZW51TWlsa3NoYWtlLmFwcGVuZENoaWxkKG1lbnVNaWxrc2hha2VUZXh0KVxuICAgIGNvbnN0IG1lbnVTbmFja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51U25hY2tzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc25hY2tzJylcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVTbmFja3MpXG4gICAgY29uc3QgbWVudVNuYWNrc0ltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgIG1lbnVTbmFja3NJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcy1pbWcnKVxuICAgICAgICBtZW51U25hY2tzSW1nLnNyYyA9IHNuYWNrc1xuICAgICAgICBtZW51U25hY2tzSW1nLmlkID0gJ21lbnUtc25hY2tzJ1xuICAgICAgICBtZW51U25hY2tzSW1nLmFsdCA9ICdEZWxpY2lvdXMgc25hY2tzIGZyb20gdGhlIE9kaW4gQ29mZmVlIGJha2VyeS4nXG4gICAgICAgIG1lbnVTbmFja3MuYXBwZW5kQ2hpbGQobWVudVNuYWNrc0ltZylcbiAgICBjb25zdCBtZW51U25hY2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtZW51U25hY2tzVGV4dC50ZXh0Q29udGVudCA9IGBHZXQgZGVsaWNpb3VzIHNuYWNrcyBmcm9tIG91ciBiYWtlcnkhYFxuICAgICAgICBtZW51U25hY2tzLmFwcGVuZENoaWxkKG1lbnVTbmFja3NUZXh0KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==