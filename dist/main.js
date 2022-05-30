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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/coin */ \"./src/scripts/coin.js\");\n\n\n\nvar canvas, background, player, model, coin, coinImg;\nvar fps, fpsInterval, startTime, now, then, elapsed;\nvar keys = [];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n  model = new Image();\n  background = new Image();\n  coin = new _scripts_coin__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  coinImg = new Image();\n  background.src = \"./src/images/industrial.png\";\n  model.src = \"./src/images/model1.png\";\n  coinImg.src = \"./src/images/coin.png\";\n  document.getElementById(\"background-btn-1\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/industrial.png\";\n  });\n  document.getElementById(\"background-btn-2\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/urban.png\";\n  });\n  document.getElementById(\"background-btn-3\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/mountain.png\";\n  });\n  document.getElementById(\"char-btn-1\").addEventListener(\"click\", function () {\n    model.src = \"./src/images/model1.png\";\n  });\n  document.getElementById(\"char-btn-2\").addEventListener(\"click\", function () {\n    model.src = \"./src/images/model2.png\";\n  });\n  document.getElementById(\"char-btn-3\").addEventListener(\"click\", function () {\n    model.src = \"./src/images/model3.png\";\n  }); // animate();\n\n  window.addEventListener(\"keydown\", function (e) {\n    keys[e.key] = true;\n  });\n  window.addEventListener(\"keyup\", function (e) {\n    delete keys[e.key];\n    player.moving = false;\n  });\n\n  function drawSprite(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {\n    canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);\n  }\n\n  function drawCoin(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {\n    canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);\n  }\n\n  function startAnimating(fps) {\n    // fpsInterval = 1000 / fps;\n    fpsInterval = 800 / fps;\n    then = Date.now();\n    startTime = then;\n    animate();\n  }\n\n  function animate() {\n    requestAnimationFrame(animate);\n    now = Date.now();\n    elapsed = now - then;\n\n    if (elapsed > fpsInterval) {\n      then = now - elapsed % fpsInterval;\n      canvas.ctx.drawImage(background, 0, 0, 1120, 600);\n      drawSprite(model, player.width * player.fX, player.height * player.fY, player.width, player.height, player.x, player.y, player.width + 50, player.height + 50);\n      player.walkingAnimation();\n      player.move(keys);\n      drawCoin(coinImg, coin.width * coin.fX, coin.height * coin.fY, coin.width, coin.height, coin.x, coin.y, coin.width + 30, coin.height + 30);\n      coin.spinningAnimation();\n      coin.collected(player);\n    }\n  }\n\n  startAnimating(10);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0MsRUFBOUIsRUFBa0N0QyxNQUFNLENBQUN1QyxNQUFQLEdBQWdCdkMsTUFBTSxDQUFDd0MsRUFBekQsRUFBNkR4QyxNQUFNLENBQUNxQyxLQUFwRSxFQUEyRXJDLE1BQU0sQ0FBQ3VDLE1BQWxGLEVBQTBGdkMsTUFBTSxDQUFDeUMsQ0FBakcsRUFBb0d6QyxNQUFNLENBQUMwQyxDQUEzRyxFQUE4RzFDLE1BQU0sQ0FBQ3FDLEtBQVAsR0FBZSxFQUE3SCxFQUFpSXJDLE1BQU0sQ0FBQ3VDLE1BQVAsR0FBZ0IsRUFBakosQ0FBVjtNQUNBdkMsTUFBTSxDQUFDMkMsZ0JBQVA7TUFDQTNDLE1BQU0sQ0FBQzRDLElBQVAsQ0FBWWxDLElBQVo7TUFDQXNCLFFBQVEsQ0FBQzdCLE9BQUQsRUFBVUQsSUFBSSxDQUFDbUMsS0FBTCxHQUFhbkMsSUFBSSxDQUFDb0MsRUFBNUIsRUFBZ0NwQyxJQUFJLENBQUNxQyxNQUFMLEdBQWNyQyxJQUFJLENBQUNzQyxFQUFuRCxFQUF1RHRDLElBQUksQ0FBQ21DLEtBQTVELEVBQW1FbkMsSUFBSSxDQUFDcUMsTUFBeEUsRUFBZ0ZyQyxJQUFJLENBQUN1QyxDQUFyRixFQUF3RnZDLElBQUksQ0FBQ3dDLENBQTdGLEVBQWdHeEMsSUFBSSxDQUFDbUMsS0FBTCxHQUFhLEVBQTdHLEVBQWlIbkMsSUFBSSxDQUFDcUMsTUFBTCxHQUFjLEVBQS9ILENBQVI7TUFDQXJDLElBQUksQ0FBQzJDLGlCQUFMO01BQ0EzQyxJQUFJLENBQUM0QyxTQUFMLENBQWU5QyxNQUFmO0lBQ0g7RUFDSjs7RUFFRGlDLGNBQWMsQ0FBQyxFQUFELENBQWQ7QUFDSCxDQWhGRCIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhcy5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllci5qc1wiO1xuaW1wb3J0IENvaW4gZnJvbSBcIi4vc2NyaXB0cy9jb2luXCI7XG5cbmxldCBjYW52YXMsIGJhY2tncm91bmQsIHBsYXllciwgbW9kZWwsIGNvaW4sIGNvaW5JbWc7XG5sZXQgZnBzLCBmcHNJbnRlcnZhbCwgc3RhcnRUaW1lLCBub3csIHRoZW4sIGVsYXBzZWQ7XG5sZXQga2V5cyA9IFtdO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG4gICAgcGxheWVyID0gbmV3IFBsYXllcihjYW52YXMpO1xuICAgIG1vZGVsID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGNvaW4gPSBuZXcgQ29pbigpO1xuICAgIGNvaW5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvaW5kdXN0cmlhbC5wbmdcIjtcbiAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDEucG5nXCI7XG4gICAgY29pbkltZy5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jb2luLnBuZ1wiO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9pbmR1c3RyaWFsLnBuZ1wiO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy91cmJhbi5wbmdcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1idG4tM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW91bnRhaW4ucG5nXCI7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXItYnRuLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDEucG5nXCJcbiAgICB9KTtcblxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXItYnRuLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDIucG5nXCJcbiAgICB9KTtcblxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXItYnRuLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDMucG5nXCJcbiAgICB9KTtcblxuICAgIC8vIGFuaW1hdGUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBkZWxldGUga2V5c1tlLmtleV07XG4gICAgICAgIHBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGRyYXdTcHJpdGUoaW1hZ2UsIHNYLCBzWSwgc1dpZHRoLCBzSGVpZ2h0LCBkWCwgZFksIGRXaWR0aCwgZEhlaWdodCkge1xuICAgICAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgc1gsIHNZLCBzV2lkdGgsIHNIZWlnaHQsIGRYLCBkWSwgZFdpZHRoLCBkSGVpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZHJhd0NvaW4oaW1hZ2UsIHNYLCBzWSwgc1dpZHRoLCBzSGVpZ2h0LCBkWCwgZFksIGRXaWR0aCwgZEhlaWdodCkge1xuICAgICAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgc1gsIHNZLCBzV2lkdGgsIHNIZWlnaHQsIGRYLCBkWSwgZFdpZHRoLCBkSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgLy8gZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICBmcHNJbnRlcnZhbCA9IDgwMCAvIGZwcztcbiAgICAgICAgdGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHN0YXJ0VGltZSA9IHRoZW47XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGVsYXBzZWQgPSBub3cgLSB0aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBmcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCAxMTIwLCA2MDApO1xuICAgICAgICAgICAgZHJhd1Nwcml0ZShtb2RlbCwgcGxheWVyLndpZHRoICogcGxheWVyLmZYLCBwbGF5ZXIuaGVpZ2h0ICogcGxheWVyLmZZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoICsgNTAsIHBsYXllci5oZWlnaHQgKyA1MCk7XG4gICAgICAgICAgICBwbGF5ZXIud2Fsa2luZ0FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcGxheWVyLm1vdmUoa2V5cyk7XG4gICAgICAgICAgICBkcmF3Q29pbihjb2luSW1nLCBjb2luLndpZHRoICogY29pbi5mWCwgY29pbi5oZWlnaHQgKiBjb2luLmZZLCBjb2luLndpZHRoLCBjb2luLmhlaWdodCwgY29pbi54LCBjb2luLnksIGNvaW4ud2lkdGggKyAzMCwgY29pbi5oZWlnaHQgKyAzMCk7XG4gICAgICAgICAgICBjb2luLnNwaW5uaW5nQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBjb2luLmNvbGxlY3RlZChwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRpbmcoMTApO1xufSk7Il0sIm5hbWVzIjpbIkNhbnZhcyIsIlBsYXllciIsIkNvaW4iLCJjYW52YXMiLCJiYWNrZ3JvdW5kIiwicGxheWVyIiwibW9kZWwiLCJjb2luIiwiY29pbkltZyIsImZwcyIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJrZXlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW1hZ2UiLCJzcmMiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImUiLCJrZXkiLCJtb3ZpbmciLCJkcmF3U3ByaXRlIiwiaW1hZ2UiLCJzWCIsInNZIiwic1dpZHRoIiwic0hlaWdodCIsImRYIiwiZFkiLCJkV2lkdGgiLCJkSGVpZ2h0IiwiY3R4IiwiZHJhd0ltYWdlIiwiZHJhd0NvaW4iLCJzdGFydEFuaW1hdGluZyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2lkdGgiLCJmWCIsImhlaWdodCIsImZZIiwieCIsInkiLCJ3YWxraW5nQW5pbWF0aW9uIiwibW92ZSIsInNwaW5uaW5nQW5pbWF0aW9uIiwiY29sbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Canvas; }\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Canvas = /*#__PURE__*/_createClass(function Canvas() {\n  _classCallCheck(this, Canvas);\n\n  this.canvas = document.getElementById(\"game-canvas\");\n  this.ctx = this.canvas.getContext(\"2d\");\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUF5QkEsbUNBQ3JCLGtCQUFjO0VBQUE7O0VBQ1YsS0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZDtFQUNBLEtBQUtDLEdBQUwsR0FBVyxLQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ29pblJ1c2gvLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkNhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/coin.js":
/*!*****************************!*\
  !*** ./src/scripts/coin.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Coin; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Coin = /*#__PURE__*/function () {\n  function Coin() {\n    _classCallCheck(this, Coin);\n\n    this.x = 60;\n    this.y = 60;\n    this.fX = 0;\n    this.fY = 0;\n    this.width = 16;\n    this.height = 16;\n    this.positions = [[60, 60], [280, 60], [500, 60], [720, 60], [940, 60], [60, 280], [280, 280], [500, 280], [720, 280], [940, 280], [60, 500], [280, 500], [500, 500], [720, 500], [940, 500]];\n  }\n\n  _createClass(Coin, [{\n    key: \"generatePos\",\n    value: function generatePos() {\n      var currentPos;\n      var newPos;\n      newPos = this.positions[Math.floor(Math.random() * this.positions.length)];\n\n      while (newPos === currentPos) {\n        newPos = this.positions[Math.floor(Math.random() * this.positions.length)];\n      }\n\n      this.x = newPos[0];\n      this.y = newPos[1];\n      this.score++;\n    }\n  }, {\n    key: \"collected\",\n    value: function collected(player) {\n      console.log(player.x, player.y, \"player x y\");\n      console.log(this.x, this.y, \"this x y\");\n\n      if ((player.x === this.x || this.x - 20 === player.x || this.x - 40 === player.x) && (player.y === this.y || this.y - player.y === -20 || this.y - player.y === 20 || this.y - player.y === 40 || this.y - player.y === 60 || this.y - player.y === 80)) {\n        this.generatePos();\n      } else if (false) {}\n    }\n  }, {\n    key: \"spinningAnimation\",\n    value: function spinningAnimation() {\n      if (this.fX < 3) {\n        this.fX++;\n      } else {\n        this.fX = 0;\n      }\n    }\n  }]);\n\n  return Coin;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtnQixXQUFMO01BQ0gsQ0FGRCxNQUVNLElBQUksS0FBSixFQUFZLEVBRWpCO0lBQ0o7OztXQUVELDZCQUFvQjtNQUNoQixJQUFJLEtBQUtmLEVBQUwsR0FBVSxDQUFkLEVBQWlCO1FBQ2IsS0FBS0EsRUFBTDtNQUNILENBRkQsTUFFTTtRQUNGLEtBQUtBLEVBQUwsR0FBVSxDQUFWO01BQ0g7SUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL3NjcmlwdHMvY29pbi5qcz8xODU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSA2MDtcbiAgICAgICAgdGhpcy55ID0gNjA7XG4gICAgICAgIHRoaXMuZlggPSAwO1xuICAgICAgICB0aGlzLmZZID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE2O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDE2O1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtcbiAgICAgICAgICAgIFs2MCwgNjBdLFxuICAgICAgICAgICAgWzI4MCwgNjBdLFxuICAgICAgICAgICAgWzUwMCwgNjBdLFxuICAgICAgICAgICAgWzcyMCwgNjBdLFxuICAgICAgICAgICAgWzk0MCwgNjBdLFxuXG4gICAgICAgICAgICBbNjAsIDI4MF0sXG4gICAgICAgICAgICBbMjgwLCAyODBdLFxuICAgICAgICAgICAgWzUwMCwgMjgwXSxcbiAgICAgICAgICAgIFs3MjAsIDI4MF0sXG4gICAgICAgICAgICBbOTQwLCAyODBdLFxuXG4gICAgICAgICAgICBbNjAsIDUwMF0sXG4gICAgICAgICAgICBbMjgwLCA1MDBdLFxuICAgICAgICAgICAgWzUwMCwgNTAwXSxcbiAgICAgICAgICAgIFs3MjAsIDUwMF0sXG4gICAgICAgICAgICBbOTQwLCA1MDBdLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgICBnZW5lcmF0ZVBvcygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3M7XG4gICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgIG5ld1BvcyA9IHRoaXMucG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zaXRpb25zLmxlbmd0aCldO1xuICAgICAgICB3aGlsZSAobmV3UG9zID09PSBjdXJyZW50UG9zKSB7XG4gICAgICAgICAgICBuZXdQb3MgPSB0aGlzLnBvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBvc2l0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnggPSBuZXdQb3NbMF07XG4gICAgICAgIHRoaXMueSA9IG5ld1Bvc1sxXTtcbiAgICAgICAgdGhpcy5zY29yZSsrO1xuICAgIH1cblxuICAgIGNvbGxlY3RlZCAocGxheWVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci54LCBwbGF5ZXIueSwgXCJwbGF5ZXIgeCB5XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLngsIHRoaXMueSwgXCJ0aGlzIHggeVwiKTtcbiAgICAgICAgaWYgKChwbGF5ZXIueCA9PT0gdGhpcy54IHx8IHRoaXMueCAtIDIwID09PSBwbGF5ZXIueCB8fCB0aGlzLnggLSA0MCA9PT0gcGxheWVyLngpICYmIChwbGF5ZXIueSA9PT0gdGhpcy55IHx8IHRoaXMueSAtIHBsYXllci55ID09PSAtMjAgfHwgdGhpcy55IC0gcGxheWVyLnkgPT09IDIwIHx8IHRoaXMueSAtIHBsYXllci55ID09PSA0MCB8fCB0aGlzLnkgLSBwbGF5ZXIueSA9PT0gNjAgfHx0aGlzLnkgLSBwbGF5ZXIueSA9PT0gODApKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUG9zKCk7XG4gICAgICAgIH1lbHNlIGlmICgxICE9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVQb3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzcGlubmluZ0FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZlggPCAzKSB7XG4gICAgICAgICAgICB0aGlzLmZYKys7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZlggPSAwO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJDb2luIiwieCIsInkiLCJmWCIsImZZIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbnMiLCJjdXJyZW50UG9zIiwibmV3UG9zIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2NvcmUiLCJwbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2VuZXJhdGVQb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/coin.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/scripts/canvas.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.x = 0;\n    this.y = 0;\n    this.width = 32;\n    this.height = 48;\n    this.fX = 0;\n    this.fY = 0;\n    this.moving = false;\n    this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  } //0, 12\n\n\n  _createClass(Player, [{\n    key: \"move\",\n    value: function move(keys) {\n      if ((keys[\"d\"] || keys[\"ArrowRight\"]) && this.x < 1040) {\n        this.x += 20;\n        this.fY = 2;\n        this.moving = true;\n      }\n\n      if ((keys[\"a\"] || keys[\"ArrowLeft\"]) && this.x > 0) {\n        this.x -= 20;\n        this.fY = 1;\n        this.moving = true;\n      }\n\n      if (keys[\"w\"] && this.y > 12) {\n        this.y -= 20;\n        this.fY = 3;\n        this.moving = true;\n      } //498\n\n\n      if (keys[\"s\"] && this.y < 500) {\n        this.y += 20;\n        this.fY = 0;\n        this.moving = true;\n      }\n    }\n  }, {\n    key: \"walkingAnimation\",\n    value: function walkingAnimation() {\n      if (this.fX < 3 && this.moving) {\n        this.fX++;\n      } else {\n        this.fX = 0;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJDO0VBQ2pCLGtCQUFjO0lBQUE7O0lBQ1YsS0FBS0MsQ0FBTCxHQUFTLENBQVQ7SUFDQSxLQUFLQyxDQUFMLEdBQVMsQ0FBVDtJQUNBLEtBQUtDLEtBQUwsR0FBYSxFQUFiO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLEVBQWQ7SUFDQSxLQUFLQyxFQUFMLEdBQVUsQ0FBVjtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLEtBQWQ7SUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBSVQsK0NBQUosRUFBZDtFQUNILEVBRUQ7Ozs7O1dBRUEsY0FBS1UsSUFBTCxFQUFXO01BQ1AsSUFBSSxDQUFDQSxJQUFJLENBQUMsR0FBRCxDQUFKLElBQWFBLElBQUksQ0FBQyxZQUFELENBQWxCLEtBQXFDLEtBQUtSLENBQUwsR0FBUyxJQUFsRCxFQUF3RDtRQUNwRCxLQUFLQSxDQUFMLElBQVUsRUFBVjtRQUNBLEtBQUtLLEVBQUwsR0FBVSxDQUFWO1FBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7TUFDSDs7TUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLFdBQUQsQ0FBbEIsS0FBb0MsS0FBS1IsQ0FBTCxHQUFTLENBQWpELEVBQW9EO1FBQ2hELEtBQUtBLENBQUwsSUFBVSxFQUFWO1FBQ0EsS0FBS0ssRUFBTCxHQUFVLENBQVY7UUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBZDtNQUNIOztNQUNELElBQUlFLElBQUksQ0FBQyxHQUFELENBQUosSUFBYSxLQUFLUCxDQUFMLEdBQVMsRUFBMUIsRUFBOEI7UUFDMUIsS0FBS0EsQ0FBTCxJQUFVLEVBQVY7UUFDQSxLQUFLSSxFQUFMLEdBQVUsQ0FBVjtRQUNBLEtBQUtDLE1BQUwsR0FBYyxJQUFkO01BQ0gsQ0FmTSxDQWdCUDs7O01BQ0EsSUFBSUUsSUFBSSxDQUFDLEdBQUQsQ0FBSixJQUFhLEtBQUtQLENBQUwsR0FBUyxHQUExQixFQUErQjtRQUMzQixLQUFLQSxDQUFMLElBQVUsRUFBVjtRQUNBLEtBQUtJLEVBQUwsR0FBVSxDQUFWO1FBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7TUFDSDtJQUNKOzs7V0FFRCw0QkFBbUI7TUFDZixJQUFJLEtBQUtGLEVBQUwsR0FBVSxDQUFWLElBQWUsS0FBS0UsTUFBeEIsRUFBZ0M7UUFDNUIsS0FBS0YsRUFBTDtNQUNILENBRkQsTUFFTTtRQUNGLEtBQUtBLEVBQUwsR0FBVSxDQUFWO01BQ0g7SUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9jYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDMyO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ4O1xuICAgICAgICB0aGlzLmZYID0gMDtcbiAgICAgICAgdGhpcy5mWSA9IDA7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgIH1cblxuICAgIC8vMCwgMTJcblxuICAgIG1vdmUoa2V5cykge1xuICAgICAgICBpZiAoKGtleXNbXCJkXCJdIHx8IGtleXNbXCJBcnJvd1JpZ2h0XCJdKSAmJiB0aGlzLnggPCAxMDQwKSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gMjA7XG4gICAgICAgICAgICB0aGlzLmZZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGtleXNbXCJhXCJdIHx8IGtleXNbXCJBcnJvd0xlZnRcIl0pICYmIHRoaXMueCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAtPSAyMDtcbiAgICAgICAgICAgIHRoaXMuZlkgPSAxO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzW1wid1wiXSAmJiB0aGlzLnkgPiAxMikge1xuICAgICAgICAgICAgdGhpcy55IC09IDIwO1xuICAgICAgICAgICAgdGhpcy5mWSA9IDMgXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLzQ5OFxuICAgICAgICBpZiAoa2V5c1tcInNcIl0gJiYgdGhpcy55IDwgNTAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMjA7XG4gICAgICAgICAgICB0aGlzLmZZID0gMFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3YWxraW5nQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5mWCA8IDMgJiYgdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZlgrKztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mWCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkNhbnZhcyIsIlBsYXllciIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmWCIsImZZIiwibW92aW5nIiwiY2FudmFzIiwia2V5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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