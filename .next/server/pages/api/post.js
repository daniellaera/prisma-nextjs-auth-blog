/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQVFBLE1BQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCLElBQUlFLHdEQUFKLEVBQWhDO0FBRUEsSUFBSSxNQUF3Q0QsTUFBTSxDQUFDRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUU1QywrREFBZUEsTUFBZiIsImZpbGUiOiIuL2xpYi9wcmlzbWEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCB7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnRcbn1cblxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n\n\nasync function handle(req, res) {\n  const {\n    title,\n    content\n  } = req.body;\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.post.create({\n    data: {\n      title: title,\n      content: content,\n      author: {\n        connect: {\n          email: session === null || session === void 0 ? void 0 : session.user.email\n        }\n      }\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cz9iMzgyIl0sIm5hbWVzIjpbImhhbmRsZSIsInJlcSIsInJlcyIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInJlc3VsdCIsInByaXNtYSIsImRhdGEiLCJhdXRob3IiLCJjb25uZWN0IiwiZW1haWwiLCJ1c2VyIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFFZSxlQUFlQSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQ0MsR0FBM0MsRUFBaUU7QUFDNUUsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBcUJILEdBQUcsQ0FBQ0ksSUFBL0I7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsNERBQVUsQ0FBQztBQUFFTjtBQUFGLEdBQUQsQ0FBaEM7QUFDQSxRQUFNTyxNQUFNLEdBQUcsTUFBTUMsNERBQUEsQ0FBbUI7QUFDcENDLFFBQUksRUFBRTtBQUNGUCxXQUFLLEVBQUVBLEtBREw7QUFFRkMsYUFBTyxFQUFFQSxPQUZQO0FBR0ZPLFlBQU0sRUFBRTtBQUNKQyxlQUFPLEVBQUU7QUFDTEMsZUFBSyxFQUFFUCxPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRVEsSUFBVCxDQUFjRDtBQURoQjtBQURMO0FBSE47QUFEOEIsR0FBbkIsQ0FBckI7QUFXQVgsS0FBRyxDQUFDYSxJQUFKLENBQVNQLE1BQVQ7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb3N0L2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbj8udXNlci5lbWFpbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlcy5qc29uKHJlc3VsdCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/post/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();