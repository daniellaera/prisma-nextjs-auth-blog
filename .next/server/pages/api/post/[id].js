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
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQVFBLE1BQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCLElBQUlFLHdEQUFKLEVBQWhDO0FBRUEsSUFBSSxNQUF3Q0QsTUFBTSxDQUFDRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUU1QywrREFBZUEsTUFBZiIsImZpbGUiOiIuL2xpYi9wcmlzbWEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCB7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnRcbn1cblxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n// DELETE /api/post/:id\n\nasync function handle(req, res) {\n  const postId = req.query.id;\n\n  if (req.method === \"DELETE\") {\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.delete({\n      where: {\n        id: Number(postId)\n      }\n    });\n    res.json(post);\n  } else {\n    throw new Error(`The HTTP ${req.method} method is not supported at this route`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzPzRhODUiXSwibmFtZXMiOlsiaGFuZGxlIiwicmVxIiwicmVzIiwicG9zdElkIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsInBvc3QiLCJwcmlzbWEiLCJ3aGVyZSIsIk51bWJlciIsImpzb24iLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdBO0FBRWUsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkNDLEdBQTNDLEVBQWlFO0FBQzVFLFFBQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLEVBQXpCOztBQUNBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLFVBQU1DLElBQUksR0FBRyxNQUFNQyw0REFBQSxDQUFtQjtBQUNsQ0MsV0FBSyxFQUFFO0FBQUVKLFVBQUUsRUFBRUssTUFBTSxDQUFDUCxNQUFEO0FBQVo7QUFEMkIsS0FBbkIsQ0FBbkI7QUFHQUQsT0FBRyxDQUFDUyxJQUFKLENBQVNKLElBQVQ7QUFDSCxHQUxELE1BS087QUFDSCxVQUFNLElBQUlLLEtBQUosQ0FDRCxZQUFXWCxHQUFHLENBQUNLLE1BQU8sd0NBRHJCLENBQU47QUFHSDtBQUNKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Bvc3QvW2lkXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERFTEVURSAvYXBpL3Bvc3QvOmlkXG5cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnkuaWQ7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LmRlbGV0ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLmpzb24ocG9zdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBIVFRQICR7cmVxLm1ldGhvZH0gbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhpcyByb3V0ZWBcbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/post/[id].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();