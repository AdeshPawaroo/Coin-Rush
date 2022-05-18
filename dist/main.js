/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n\nvar canvas;\nvar background;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  background = new Image();\n  background.src = \"./src/images/mountain.png\";\n  document.getElementById(\"background-btn-1\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/industrial.png\";\n  });\n  document.getElementById(\"background-btn-2\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/urban.png\";\n  });\n  document.getElementById(\"background-btn-3\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/mountain.png\";\n  });\n  animate();\n\n  function animate() {\n    canvas.ctx.drawImage(background, 0, 0, 1500, 800);\n    requestAnimationFrame(animate);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLElBQUlDLE1BQUo7QUFDQSxJQUFJQyxVQUFKO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7RUFDckRILE1BQU0sR0FBRyxJQUFJRCwwREFBSixFQUFUO0VBRUFFLFVBQVUsR0FBRyxJQUFJRyxLQUFKLEVBQWI7RUFDQUgsVUFBVSxDQUFDSSxHQUFYLEdBQWlCLDJCQUFqQjtFQUVBSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDSCxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBVztJQUM3RUYsVUFBVSxDQUFDSSxHQUFYLEdBQWlCLDZCQUFqQjtFQUNILENBRkQ7RUFJQUgsUUFBUSxDQUFDSSxjQUFULENBQXdCLGtCQUF4QixFQUE0Q0gsZ0JBQTVDLENBQTZELE9BQTdELEVBQXNFLFlBQVc7SUFDN0VGLFVBQVUsQ0FBQ0ksR0FBWCxHQUFpQix3QkFBakI7RUFDSCxDQUZEO0VBSUFILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixrQkFBeEIsRUFBNENILGdCQUE1QyxDQUE2RCxPQUE3RCxFQUFzRSxZQUFXO0lBQzdFRixVQUFVLENBQUNJLEdBQVgsR0FBaUIsMkJBQWpCO0VBQ0gsQ0FGRDtFQUlBRSxPQUFPOztFQUVQLFNBQVNBLE9BQVQsR0FBbUI7SUFDZlAsTUFBTSxDQUFDUSxHQUFQLENBQVdDLFNBQVgsQ0FBcUJSLFVBQXJCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLElBQXZDLEVBQTZDLEdBQTdDO0lBRUFTLHFCQUFxQixDQUFDSCxPQUFELENBQXJCO0VBQ0g7QUFDSixDQXpCRCIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhcy5qc1wiO1xuXG5sZXQgY2FudmFzOyBcbmxldCBiYWNrZ3JvdW5kO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb3VudGFpbi5wbmdcIjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1idG4tMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvaW5kdXN0cmlhbC5wbmdcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1idG4tMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvdXJiYW4ucG5nXCI7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtYnRuLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL21vdW50YWluLnBuZ1wiO1xuICAgIH0pO1xuXG4gICAgYW5pbWF0ZSgpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgY2FudmFzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgMTUwMCwgODAwKTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbIkNhbnZhcyIsImNhbnZhcyIsImJhY2tncm91bmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbWFnZSIsInNyYyIsImdldEVsZW1lbnRCeUlkIiwiYW5pbWF0ZSIsImN0eCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Canvas; }\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Canvas = /*#__PURE__*/_createClass(function Canvas() {\n  _classCallCheck(this, Canvas);\n\n  this.canvas = document.getElementsByClassName(\"game-canvas\");\n  this.ctx = this.canvas.getContext(\"2d\");\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsbUNBQ2pCLGtCQUFjO0VBQUE7O0VBQ1YsS0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLGFBQWhDLENBQWQ7RUFDQSxLQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQ2FudmFzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3R4IiwiZ2V0Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db2luUnVzaC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;