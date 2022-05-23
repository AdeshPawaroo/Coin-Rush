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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\n\nvar canvas;\nvar background;\nvar player;\nvar model;\nvar keys = [];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n  model = new Image();\n  background = new Image();\n  background.src = \"./src/images/mountain.png\";\n  model.src = \"./src/images/model1.png\";\n  document.getElementById(\"background-btn-1\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/industrial.png\";\n  });\n  document.getElementById(\"background-btn-2\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/urban.png\";\n  });\n  document.getElementById(\"background-btn-3\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/mountain.png\";\n  });\n  animate();\n  window.addEventListener(\"keydown\", function (e) {\n    keys[e.key] = true;\n  });\n  window.addEventListener(\"keyup\", function (e) {\n    delete keys[e.key];\n    player.moving = false;\n  });\n\n  function drawSprite(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {\n    canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);\n  }\n\n  function animate() {\n    canvas.ctx.drawImage(background, 0, 0, 1500, 800);\n    drawSprite(model, player.width * player.fX, player.height * player.fY, player.width, player.height, player.x, player.y, player.width + 50, player.height + 50);\n    player.walkingAnimation();\n    player.move(keys);\n    requestAnimationFrame(animate);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFQLENBQVk5QixJQUFaO0lBRUErQixxQkFBcUIsQ0FBQ3pCLE9BQUQsQ0FBckI7RUFDSDtBQUNKLENBNUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29pblJ1c2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3NjcmlwdHMvcGxheWVyLmpzXCI7XG5cbmxldCBjYW52YXM7IFxubGV0IGJhY2tncm91bmQ7XG5sZXQgcGxheWVyO1xubGV0IG1vZGVsO1xubGV0IGtleXMgPSBbXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgIHBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzKTtcbiAgICBtb2RlbCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW91bnRhaW4ucG5nXCI7XG4gICAgbW9kZWwuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW9kZWwxLnBuZ1wiO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9pbmR1c3RyaWFsLnBuZ1wiO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy91cmJhbi5wbmdcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1idG4tM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW91bnRhaW4ucG5nXCI7XG4gICAgfSk7XG5cbiAgICBhbmltYXRlKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBrZXlzW2Uua2V5XSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZGVsZXRlIGtleXNbZS5rZXldO1xuICAgICAgICBwbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBkcmF3U3ByaXRlKGltYWdlLCBzWCwgc1ksIHNXaWR0aCwgc0hlaWdodCwgZFgsIGRZLCBkV2lkdGgsIGRIZWlnaHQpIHtcbiAgICAgICAgY2FudmFzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHNYLCBzWSwgc1dpZHRoLCBzSGVpZ2h0LCBkWCwgZFksIGRXaWR0aCwgZEhlaWdodCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgY2FudmFzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgMTUwMCwgODAwKTtcbiAgICAgICAgZHJhd1Nwcml0ZShtb2RlbCwgcGxheWVyLndpZHRoICogcGxheWVyLmZYLCBwbGF5ZXIuaGVpZ2h0ICogcGxheWVyLmZZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoICsgNTAsIHBsYXllci5oZWlnaHQgKyA1MCk7XG4gICAgICAgIHBsYXllci53YWxraW5nQW5pbWF0aW9uKCk7XG4gICAgICAgIHBsYXllci5tb3ZlKGtleXMpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICB9XG59KTsiXSwibmFtZXMiOlsiQ2FudmFzIiwiUGxheWVyIiwiY2FudmFzIiwiYmFja2dyb3VuZCIsInBsYXllciIsIm1vZGVsIiwia2V5cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkltYWdlIiwic3JjIiwiZ2V0RWxlbWVudEJ5SWQiLCJhbmltYXRlIiwid2luZG93IiwiZSIsImtleSIsIm1vdmluZyIsImRyYXdTcHJpdGUiLCJpbWFnZSIsInNYIiwic1kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZFgiLCJkWSIsImRXaWR0aCIsImRIZWlnaHQiLCJjdHgiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImZYIiwiaGVpZ2h0IiwiZlkiLCJ4IiwieSIsIndhbGtpbmdBbmltYXRpb24iLCJtb3ZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.x = 0;\n    this.y = 0;\n    this.width = 32;\n    this.height = 48;\n    this.fX = 0;\n    this.fY = 0;\n    this.moving = false;\n  }\n\n  _createClass(Player, [{\n    key: \"move\",\n    value: function move(keys) {\n      if ((keys[\"d\"] || keys[\"ArrowRight\"]) && this.x < 1020) {\n        this.x += 6;\n        this.fY = 2;\n        this.moving = true;\n      }\n\n      if ((keys[\"s\"] || keys[\"ArrowLeft\"]) && this.x > 0) {\n        this.x -= 6;\n        this.fY = 1;\n        this.moving = true;\n      }\n\n      if (keys[\"w\"] && this.y > 12) {\n        this.y -= 6;\n        this.moving = true;\n      }\n\n      if (keys[\"s\"] && this.y < 600) {\n        this.y += 6;\n        this.moving = true;\n      }\n    }\n  }, {\n    key: \"walkingAnimation\",\n    value: function walkingAnimation() {\n      if (this.fX < 3 && this.moving) {\n        this.fX++;\n      } else {\n        this.fX = 0;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7RUFDakIsa0JBQWM7SUFBQTs7SUFDVixLQUFLQyxDQUFMLEdBQVMsQ0FBVDtJQUNBLEtBQUtDLENBQUwsR0FBUyxDQUFUO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEVBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxNQUFMLEdBQWMsS0FBZDtFQUNIOzs7O1dBRUQsY0FBS0MsSUFBTCxFQUFXO01BQ1AsSUFBSSxDQUFDQSxJQUFJLENBQUMsR0FBRCxDQUFKLElBQWFBLElBQUksQ0FBQyxZQUFELENBQWxCLEtBQXFDLEtBQUtQLENBQUwsR0FBUyxJQUFsRCxFQUF3RDtRQUNwRCxLQUFLQSxDQUFMLElBQVUsQ0FBVjtRQUNBLEtBQUtLLEVBQUwsR0FBVSxDQUFWO1FBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7TUFDSDs7TUFDRCxJQUFJLENBQUNDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLFdBQUQsQ0FBbEIsS0FBb0MsS0FBS1AsQ0FBTCxHQUFTLENBQWpELEVBQW9EO1FBQ2hELEtBQUtBLENBQUwsSUFBVSxDQUFWO1FBQ0EsS0FBS0ssRUFBTCxHQUFVLENBQVY7UUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBZDtNQUNIOztNQUNELElBQUlDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYSxLQUFLTixDQUFMLEdBQVMsRUFBMUIsRUFBOEI7UUFDMUIsS0FBS0EsQ0FBTCxJQUFVLENBQVY7UUFDQSxLQUFLSyxNQUFMLEdBQWMsSUFBZDtNQUNIOztNQUNELElBQUlDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYSxLQUFLTixDQUFMLEdBQVMsR0FBMUIsRUFBK0I7UUFDM0IsS0FBS0EsQ0FBTCxJQUFVLENBQVY7UUFDQSxLQUFLSyxNQUFMLEdBQWMsSUFBZDtNQUNIO0lBQ0o7OztXQUdELDRCQUFtQjtNQUNmLElBQUksS0FBS0YsRUFBTCxHQUFVLENBQVYsSUFBZSxLQUFLRSxNQUF4QixFQUFnQztRQUM1QixLQUFLRixFQUFMO01BQ0gsQ0FGRCxNQUVNO1FBQ0YsS0FBS0EsRUFBTCxHQUFVLENBQVY7TUFDSDtJQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29pblJ1c2gvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMzI7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDg7XG4gICAgICAgIHRoaXMuZlggPSAwO1xuICAgICAgICB0aGlzLmZZID0gMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGtleXMpIHtcbiAgICAgICAgaWYgKChrZXlzW1wiZFwiXSB8fCBrZXlzW1wiQXJyb3dSaWdodFwiXSkgJiYgdGhpcy54IDwgMTAyMCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IDY7XG4gICAgICAgICAgICB0aGlzLmZZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGtleXNbXCJzXCJdIHx8IGtleXNbXCJBcnJvd0xlZnRcIl0pICYmIHRoaXMueCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSA2O1xuICAgICAgICAgICAgdGhpcy5mWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleXNbXCJ3XCJdICYmIHRoaXMueSA+IDEyKSB7XG4gICAgICAgICAgICB0aGlzLnkgLT0gNjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzW1wic1wiXSAmJiB0aGlzLnkgPCA2MDApIHtcbiAgICAgICAgICAgIHRoaXMueSArPSA2O1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHdhbGtpbmdBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmZYIDwgMyAmJiB0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5mWCsrO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZYID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUGxheWVyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZYIiwiZlkiLCJtb3ZpbmciLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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