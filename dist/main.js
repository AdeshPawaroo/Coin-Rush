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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\n\nvar canvas;\nvar background;\nvar player;\nvar model;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n  model = new Image();\n  background = new Image();\n  background.src = \"./src/images/mountain.png\";\n  document.getElementById(\"background-btn-1\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/industrial.png\";\n  });\n  document.getElementById(\"background-btn-2\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/urban.png\";\n  });\n  document.getElementById(\"background-btn-3\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/mountain.png\";\n  });\n  animate();\n\n  function animate() {\n    canvas.ctx.drawImage(background, 0, 0, 1500, 800);\n    requestAnimationFrame(animate);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBLElBQUlFLE1BQUo7QUFDQSxJQUFJQyxVQUFKO0FBQ0EsSUFBSUMsTUFBSjtBQUNBLElBQUlDLEtBQUo7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztFQUNyREwsTUFBTSxHQUFHLElBQUlGLDBEQUFKLEVBQVQ7RUFDQUksTUFBTSxHQUFHLElBQUlILDBEQUFKLENBQVdDLE1BQVgsQ0FBVDtFQUNBRyxLQUFLLEdBQUcsSUFBSUcsS0FBSixFQUFSO0VBRUFMLFVBQVUsR0FBRyxJQUFJSyxLQUFKLEVBQWI7RUFDQUwsVUFBVSxDQUFDTSxHQUFYLEdBQWlCLDJCQUFqQjtFQUVBSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDSCxnQkFBNUMsQ0FBNkQsT0FBN0QsRUFBc0UsWUFBVztJQUM3RUosVUFBVSxDQUFDTSxHQUFYLEdBQWlCLDZCQUFqQjtFQUNILENBRkQ7RUFJQUgsUUFBUSxDQUFDSSxjQUFULENBQXdCLGtCQUF4QixFQUE0Q0gsZ0JBQTVDLENBQTZELE9BQTdELEVBQXNFLFlBQVc7SUFDN0VKLFVBQVUsQ0FBQ00sR0FBWCxHQUFpQix3QkFBakI7RUFDSCxDQUZEO0VBSUFILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixrQkFBeEIsRUFBNENILGdCQUE1QyxDQUE2RCxPQUE3RCxFQUFzRSxZQUFXO0lBQzdFSixVQUFVLENBQUNNLEdBQVgsR0FBaUIsMkJBQWpCO0VBQ0gsQ0FGRDtFQUlBRSxPQUFPOztFQUVQLFNBQVNBLE9BQVQsR0FBbUI7SUFDZlQsTUFBTSxDQUFDVSxHQUFQLENBQVdDLFNBQVgsQ0FBcUJWLFVBQXJCLEVBQWlDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLElBQXZDLEVBQTZDLEdBQTdDO0lBRUFXLHFCQUFxQixDQUFDSCxPQUFELENBQXJCO0VBQ0g7QUFDSixDQTNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhcy5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllci5qc1wiO1xuXG5sZXQgY2FudmFzOyBcbmxldCBiYWNrZ3JvdW5kO1xubGV0IHBsYXllcjtcbmxldCBtb2RlbDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgIHBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzKTtcbiAgICBtb2RlbCA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW91bnRhaW4ucG5nXCI7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtYnRuLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2luZHVzdHJpYWwucG5nXCI7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmQtYnRuLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3VyYmFuLnBuZ1wiO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0zXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb3VudGFpbi5wbmdcIjtcbiAgICB9KTtcblxuICAgIGFuaW1hdGUoKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIGNhbnZhcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIDE1MDAsIDgwMCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cbn0pOyJdLCJuYW1lcyI6WyJDYW52YXMiLCJQbGF5ZXIiLCJjYW52YXMiLCJiYWNrZ3JvdW5kIiwicGxheWVyIiwibW9kZWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbWFnZSIsInNyYyIsImdldEVsZW1lbnRCeUlkIiwiYW5pbWF0ZSIsImN0eCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Canvas; }\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Canvas = /*#__PURE__*/_createClass(function Canvas() {\n  _classCallCheck(this, Canvas);\n\n  this.canvas = document.getElementById(\"game-canvas\");\n  this.ctx = this.canvas.getContext(\"2d\");\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsbUNBQ2pCLGtCQUFjO0VBQUE7O0VBQ1YsS0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZDtFQUNBLEtBQUtDLEdBQUwsR0FBVyxLQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29pblJ1c2gvLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQ2FudmFzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.x = 0;\n    this.y = 0;\n    this.width = 32;\n    this.height = 48;\n    this.fX = 0;\n    this.fY = 0;\n    this.moving = false;\n  }\n\n  _createClass(Player, [{\n    key: \"move\",\n    value: function move(keys) {\n      if ((keys[\"d\"] || keys[\"ArrowRight\"]) && this.x < 1320) {\n        this.x += 6;\n        this.fY = 2;\n        this.moving = true;\n      }\n\n      if ((keys[\"s\"] || keys[\"ArrowLeft\"]) && this.x > 0) {\n        this.x -= 6;\n        this.fY = 1;\n        this.moving = true;\n      }\n\n      if (keys[\"w\"] && this.y > 12) {\n        this.y -= 6;\n        this.moving = true;\n      }\n\n      if (keys[\"s\"] && this.y < 600) {\n        this.y += 6;\n        this.moving = true;\n      }\n    }\n  }, {\n    key: \"walkingAnimation\",\n    value: function walkingAnimation() {\n      if (this.fX < 3 && this.moving) {\n        this.fX++;\n      } else {\n        this.fX = 0;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7RUFDakIsa0JBQWM7SUFBQTs7SUFDVixLQUFLQyxDQUFMLEdBQVMsQ0FBVDtJQUNBLEtBQUtDLENBQUwsR0FBUyxDQUFUO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEVBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxNQUFMLEdBQWMsS0FBZDtFQUNIOzs7O1dBRUQsY0FBS0MsSUFBTCxFQUFXO01BQ1AsSUFBSSxDQUFDQSxJQUFJLENBQUMsR0FBRCxDQUFKLElBQWFBLElBQUksQ0FBQyxZQUFELENBQWxCLEtBQXFDLEtBQUtQLENBQUwsR0FBUyxJQUFsRCxFQUF3RDtRQUNwRCxLQUFLQSxDQUFMLElBQVUsQ0FBVjtRQUNBLEtBQUtLLEVBQUwsR0FBVSxDQUFWO1FBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7TUFDSDs7TUFDRCxJQUFJLENBQUNDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLFdBQUQsQ0FBbEIsS0FBb0MsS0FBS1AsQ0FBTCxHQUFTLENBQWpELEVBQW9EO1FBQ2hELEtBQUtBLENBQUwsSUFBVSxDQUFWO1FBQ0EsS0FBS0ssRUFBTCxHQUFVLENBQVY7UUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBZDtNQUNIOztNQUNELElBQUlDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYSxLQUFLTixDQUFMLEdBQVMsRUFBMUIsRUFBOEI7UUFDMUIsS0FBS0EsQ0FBTCxJQUFVLENBQVY7UUFDQSxLQUFLSyxNQUFMLEdBQWMsSUFBZDtNQUNIOztNQUNELElBQUlDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYSxLQUFLTixDQUFMLEdBQVMsR0FBMUIsRUFBK0I7UUFDM0IsS0FBS0EsQ0FBTCxJQUFVLENBQVY7UUFDQSxLQUFLSyxNQUFMLEdBQWMsSUFBZDtNQUNIO0lBQ0o7OztXQUdELDRCQUFtQjtNQUNmLElBQUksS0FBS0YsRUFBTCxHQUFVLENBQVYsSUFBZSxLQUFLRSxNQUF4QixFQUFnQztRQUM1QixLQUFLRixFQUFMO01BQ0gsQ0FGRCxNQUVNO1FBQ0YsS0FBS0EsRUFBTCxHQUFVLENBQVY7TUFDSDtJQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29pblJ1c2gvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDg7XG4gICAgICAgIHRoaXMuZlggPSAwO1xuICAgICAgICB0aGlzLmZZID0gMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGtleXMpIHtcbiAgICAgICAgaWYgKChrZXlzW1wiZFwiXSB8fCBrZXlzW1wiQXJyb3dSaWdodFwiXSkgJiYgdGhpcy54IDwgMTMyMCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IDY7XG4gICAgICAgICAgICB0aGlzLmZZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGtleXNbXCJzXCJdIHx8IGtleXNbXCJBcnJvd0xlZnRcIl0pICYmIHRoaXMueCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSA2O1xuICAgICAgICAgICAgdGhpcy5mWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleXNbXCJ3XCJdICYmIHRoaXMueSA+IDEyKSB7XG4gICAgICAgICAgICB0aGlzLnkgLT0gNjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzW1wic1wiXSAmJiB0aGlzLnkgPCA2MDApIHtcbiAgICAgICAgICAgIHRoaXMueSArPSA2O1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHdhbGtpbmdBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmZYIDwgMyAmJiB0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5mWCsrO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZYID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUGxheWVyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZYIiwiZlkiLCJtb3ZpbmciLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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