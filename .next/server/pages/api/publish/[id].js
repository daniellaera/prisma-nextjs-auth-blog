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
exports.id = "pages/api/publish/[id]";
exports.ids = ["pages/api/publish/[id]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQVFBLE1BQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCLElBQUlFLHdEQUFKLEVBQWhDO0FBRUEsSUFBSSxNQUF3Q0QsTUFBTSxDQUFDRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUU1QywrREFBZUEsTUFBZiIsImZpbGUiOiIuL2xpYi9wcmlzbWEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCB7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnRcbn1cblxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/publish/[id].tsx":
/*!************************************!*\
  !*** ./pages/api/publish/[id].tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n// PUT /api/publish/:id\n\nasync function handle(req, res) {\n  const postId = req.query.id;\n  const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.update({\n    where: {\n      id: Number(postId)\n    },\n    data: {\n      published: true\n    }\n  });\n  res.json(post);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzeD83ZmFhIl0sIm5hbWVzIjpbImhhbmRsZSIsInJlcSIsInJlcyIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJwb3N0IiwicHJpc21hIiwid2hlcmUiLCJOdW1iZXIiLCJkYXRhIiwicHVibGlzaGVkIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUlBO0FBRWUsZUFBZUEsTUFBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLEVBQXpCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLDREQUFBLENBQW1CO0FBQ3BDQyxTQUFLLEVBQUU7QUFBRUgsUUFBRSxFQUFFSSxNQUFNLENBQUNOLE1BQUQ7QUFBWixLQUQ2QjtBQUVwQ08sUUFBSSxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiO0FBRjhCLEdBQW5CLENBQW5CO0FBSUFULEtBQUcsQ0FBQ1UsSUFBSixDQUFTTixJQUFUO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBVVCAvYXBpL3B1Ymxpc2gvOmlkXG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnkuaWQ7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC51cGRhdGUoe1xuICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgIGRhdGE6IHsgcHVibGlzaGVkOiB0cnVlIH0sXG4gIH0pO1xuICByZXMuanNvbihwb3N0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/publish/[id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/publish/[id].tsx"));
module.exports = __webpack_exports__;

})();