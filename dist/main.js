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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\n\nvar canvas, background, player, model;\nvar fps, fpsInterval, startTime, now, then, elapsed;\nvar keys = [];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n  model = new Image();\n  background = new Image();\n  background.src = \"./src/images/industrial.png\";\n  model.src = \"./src/images/model1.png\";\n  document.getElementById(\"background-btn-1\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/industrial.png\";\n  });\n  document.getElementById(\"background-btn-2\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/urban.png\";\n  });\n  document.getElementById(\"background-btn-3\").addEventListener(\"click\", function () {\n    background.src = \"./src/images/mountain.png\";\n  });\n  document.getElementById(\"char-btn-1\").addEventListener(\"click\", function () {\n    model.src = \"./src/images/model1.png\";\n  });\n  document.getElementById(\"char-btn-2\").addEventListener(\"click\", function () {\n    model.src = \"./src/images/model2.png\";\n  });\n  document.getElementById(\"char-btn-3\").addEventListener(\"click\", function () {\n    model.src = \"./src/images/model3.png\";\n  }); // animate();\n\n  window.addEventListener(\"keydown\", function (e) {\n    keys[e.key] = true;\n  });\n  window.addEventListener(\"keyup\", function (e) {\n    delete keys[e.key];\n    player.moving = false;\n  });\n\n  function drawSprite(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {\n    canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);\n  }\n\n  function startAnimating(fps) {\n    fpsInterval = 1000 / fps;\n    then = Date.now();\n    startTime = then;\n    animate();\n  }\n\n  function animate() {\n    requestAnimationFrame(animate);\n    now = Date.now();\n    elapsed = now - then;\n\n    if (elapsed > fpsInterval) {\n      then = now - elapsed % fpsInterval;\n      canvas.ctx.drawImage(background, 0, 0, 1100, 600);\n      drawSprite(model, player.width * player.fX, player.height * player.fY, player.width, player.height, player.x, player.y, player.width + 50, player.height + 50);\n      player.walkingAnimation();\n      player.move(keys);\n    }\n  }\n\n  startAnimating(10);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEdBQUcsT0FBT0QsR0FBckI7SUFDQUksSUFBSSxHQUFHeUIsSUFBSSxDQUFDMUIsR0FBTCxFQUFQO0lBQ0FELFNBQVMsR0FBR0UsSUFBWjtJQUNBMEIsT0FBTztFQUNWOztFQUVELFNBQVNBLE9BQVQsR0FBbUI7SUFDZkMscUJBQXFCLENBQUNELE9BQUQsQ0FBckI7SUFDQTNCLEdBQUcsR0FBRzBCLElBQUksQ0FBQzFCLEdBQUwsRUFBTjtJQUNBRSxPQUFPLEdBQUdGLEdBQUcsR0FBR0MsSUFBaEI7O0lBQ0EsSUFBSUMsT0FBTyxHQUFHSixXQUFkLEVBQTJCO01BQ3ZCRyxJQUFJLEdBQUdELEdBQUcsR0FBSUUsT0FBTyxHQUFHSixXQUF4QjtNQUNBTCxNQUFNLENBQUM4QixHQUFQLENBQVdDLFNBQVgsQ0FBcUI5QixVQUFyQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxFQUF1QyxJQUF2QyxFQUE2QyxHQUE3QztNQUNBbUIsVUFBVSxDQUFDakIsS0FBRCxFQUFRRCxNQUFNLENBQUNrQyxLQUFQLEdBQWVsQyxNQUFNLENBQUNtQyxFQUE5QixFQUFrQ25DLE1BQU0sQ0FBQ29DLE1BQVAsR0FBZ0JwQyxNQUFNLENBQUNxQyxFQUF6RCxFQUE2RHJDLE1BQU0sQ0FBQ2tDLEtBQXBFLEVBQTJFbEMsTUFBTSxDQUFDb0MsTUFBbEYsRUFBMEZwQyxNQUFNLENBQUNzQyxDQUFqRyxFQUFvR3RDLE1BQU0sQ0FBQ3VDLENBQTNHLEVBQThHdkMsTUFBTSxDQUFDa0MsS0FBUCxHQUFlLEVBQTdILEVBQWlJbEMsTUFBTSxDQUFDb0MsTUFBUCxHQUFnQixFQUFqSixDQUFWO01BQ0FwQyxNQUFNLENBQUN3QyxnQkFBUDtNQUNBeEMsTUFBTSxDQUFDeUMsSUFBUCxDQUFZakMsSUFBWjtJQUNIO0VBQ0o7O0VBRURzQixjQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0gsQ0FyRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db2luUnVzaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXMuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXIuanNcIjtcblxubGV0IGNhbnZhcywgYmFja2dyb3VuZCwgcGxheWVyLCBtb2RlbDtcbmxldCBmcHMsIGZwc0ludGVydmFsLCBzdGFydFRpbWUsIG5vdywgdGhlbiwgZWxhcHNlZDtcbmxldCBrZXlzID0gW107XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcyk7XG4gICAgbW9kZWwgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5cbiAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2luZHVzdHJpYWwucG5nXCI7XG4gICAgbW9kZWwuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW9kZWwxLnBuZ1wiO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9pbmR1c3RyaWFsLnBuZ1wiO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kLWJ0bi0yXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy91cmJhbi5wbmdcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZC1idG4tM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvbW91bnRhaW4ucG5nXCI7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXItYnRuLTFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDEucG5nXCJcbiAgICB9KTtcblxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXItYnRuLTJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDIucG5nXCJcbiAgICB9KTtcblxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXItYnRuLTNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RlbC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9tb2RlbDMucG5nXCJcbiAgICB9KTtcblxuICAgIC8vIGFuaW1hdGUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBkZWxldGUga2V5c1tlLmtleV07XG4gICAgICAgIHBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGRyYXdTcHJpdGUoaW1hZ2UsIHNYLCBzWSwgc1dpZHRoLCBzSGVpZ2h0LCBkWCwgZFksIGRXaWR0aCwgZEhlaWdodCkge1xuICAgICAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShpbWFnZSwgc1gsIHNZLCBzV2lkdGgsIHNIZWlnaHQsIGRYLCBkWSwgZFdpZHRoLCBkSGVpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgICAgIGZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHN0YXJ0VGltZSA9IHRoZW47XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGVsYXBzZWQgPSBub3cgLSB0aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IGZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBmcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCAxMTAwLCA2MDApO1xuICAgICAgICAgICAgZHJhd1Nwcml0ZShtb2RlbCwgcGxheWVyLndpZHRoICogcGxheWVyLmZYLCBwbGF5ZXIuaGVpZ2h0ICogcGxheWVyLmZZLCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLndpZHRoICsgNTAsIHBsYXllci5oZWlnaHQgKyA1MCk7XG4gICAgICAgICAgICBwbGF5ZXIud2Fsa2luZ0FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcGxheWVyLm1vdmUoa2V5cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEFuaW1hdGluZygxMCk7XG59KTsiXSwibmFtZXMiOlsiQ2FudmFzIiwiUGxheWVyIiwiY2FudmFzIiwiYmFja2dyb3VuZCIsInBsYXllciIsIm1vZGVsIiwiZnBzIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsImtleXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbWFnZSIsInNyYyIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwiZSIsImtleSIsIm1vdmluZyIsImRyYXdTcHJpdGUiLCJpbWFnZSIsInNYIiwic1kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZFgiLCJkWSIsImRXaWR0aCIsImRIZWlnaHQiLCJjdHgiLCJkcmF3SW1hZ2UiLCJzdGFydEFuaW1hdGluZyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2lkdGgiLCJmWCIsImhlaWdodCIsImZZIiwieCIsInkiLCJ3YWxraW5nQW5pbWF0aW9uIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.x = 0;\n    this.y = 12;\n    this.width = 32;\n    this.height = 48;\n    this.fX = 0;\n    this.fY = 0;\n    this.moving = false;\n  }\n\n  _createClass(Player, [{\n    key: \"move\",\n    value: function move(keys) {\n      if ((keys[\"d\"] || keys[\"ArrowRight\"]) && this.x < 1026) {\n        this.x += 6;\n        this.fY = 2;\n        this.moving = true;\n      }\n\n      if ((keys[\"a\"] || keys[\"ArrowLeft\"]) && this.x > 0) {\n        this.x -= 6;\n        this.fY = 1;\n        this.moving = true;\n      }\n\n      if (keys[\"w\"] && this.y > 12) {\n        this.y -= 6;\n        this.fY = 3;\n        this.moving = true;\n      }\n\n      if (keys[\"s\"] && this.y < 498) {\n        this.y += 6;\n        this.fY = 0;\n        this.moving = true;\n      }\n    }\n  }, {\n    key: \"walkingAnimation\",\n    value: function walkingAnimation() {\n      if (this.fX < 3 && this.moving) {\n        this.fX++;\n      } else {\n        this.fX = 0;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7RUFDakIsa0JBQWM7SUFBQTs7SUFDVixLQUFLQyxDQUFMLEdBQVMsQ0FBVDtJQUNBLEtBQUtDLENBQUwsR0FBUyxFQUFUO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEVBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLEVBQUwsR0FBVSxDQUFWO0lBQ0EsS0FBS0MsRUFBTCxHQUFVLENBQVY7SUFDQSxLQUFLQyxNQUFMLEdBQWMsS0FBZDtFQUNIOzs7O1dBRUQsY0FBS0MsSUFBTCxFQUFXO01BQ1AsSUFBSSxDQUFDQSxJQUFJLENBQUMsR0FBRCxDQUFKLElBQWFBLElBQUksQ0FBQyxZQUFELENBQWxCLEtBQXFDLEtBQUtQLENBQUwsR0FBUyxJQUFsRCxFQUF3RDtRQUNwRCxLQUFLQSxDQUFMLElBQVUsQ0FBVjtRQUNBLEtBQUtLLEVBQUwsR0FBVSxDQUFWO1FBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7TUFDSDs7TUFDRCxJQUFJLENBQUNDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLFdBQUQsQ0FBbEIsS0FBb0MsS0FBS1AsQ0FBTCxHQUFTLENBQWpELEVBQW9EO1FBQ2hELEtBQUtBLENBQUwsSUFBVSxDQUFWO1FBQ0EsS0FBS0ssRUFBTCxHQUFVLENBQVY7UUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBZDtNQUNIOztNQUNELElBQUlDLElBQUksQ0FBQyxHQUFELENBQUosSUFBYSxLQUFLTixDQUFMLEdBQVMsRUFBMUIsRUFBOEI7UUFDMUIsS0FBS0EsQ0FBTCxJQUFVLENBQVY7UUFDQSxLQUFLSSxFQUFMLEdBQVUsQ0FBVjtRQUNBLEtBQUtDLE1BQUwsR0FBYyxJQUFkO01BQ0g7O01BQ0QsSUFBSUMsSUFBSSxDQUFDLEdBQUQsQ0FBSixJQUFhLEtBQUtOLENBQUwsR0FBUyxHQUExQixFQUErQjtRQUMzQixLQUFLQSxDQUFMLElBQVUsQ0FBVjtRQUNBLEtBQUtJLEVBQUwsR0FBVSxDQUFWO1FBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQWQ7TUFDSDtJQUNKOzs7V0FFRCw0QkFBbUI7TUFDZixJQUFJLEtBQUtGLEVBQUwsR0FBVSxDQUFWLElBQWUsS0FBS0UsTUFBeEIsRUFBZ0M7UUFDNUIsS0FBS0YsRUFBTDtNQUNILENBRkQsTUFFTTtRQUNGLEtBQUtBLEVBQUwsR0FBVSxDQUFWO01BQ0g7SUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL0NvaW5SdXNoLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMTI7XG4gICAgICAgIHRoaXMud2lkdGggPSAzMjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0ODtcbiAgICAgICAgdGhpcy5mWCA9IDA7XG4gICAgICAgIHRoaXMuZlkgPSAwO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoa2V5cykge1xuICAgICAgICBpZiAoKGtleXNbXCJkXCJdIHx8IGtleXNbXCJBcnJvd1JpZ2h0XCJdKSAmJiB0aGlzLnggPCAxMDI2KSB7XG4gICAgICAgICAgICB0aGlzLnggKz0gNjtcbiAgICAgICAgICAgIHRoaXMuZlkgPSAyO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoa2V5c1tcImFcIl0gfHwga2V5c1tcIkFycm93TGVmdFwiXSkgJiYgdGhpcy54ID4gMCkge1xuICAgICAgICAgICAgdGhpcy54IC09IDY7XG4gICAgICAgICAgICB0aGlzLmZZID0gMTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5c1tcIndcIl0gJiYgdGhpcy55ID4gMTIpIHtcbiAgICAgICAgICAgIHRoaXMueSAtPSA2O1xuICAgICAgICAgICAgdGhpcy5mWSA9IDMgXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5c1tcInNcIl0gJiYgdGhpcy55IDwgNDk4KSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gNjtcbiAgICAgICAgICAgIHRoaXMuZlkgPSAwXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdhbGtpbmdBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmZYIDwgMyAmJiB0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5mWCsrO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZYID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUGxheWVyIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZYIiwiZlkiLCJtb3ZpbmciLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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