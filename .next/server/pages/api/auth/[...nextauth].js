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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQVFBLE1BQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFQLElBQWlCLElBQUlFLHdEQUFKLEVBQWhDO0FBRUEsSUFBSSxNQUF3Q0QsTUFBTSxDQUFDRCxNQUFQLEdBQWdCQSxNQUFoQjtBQUU1QywrREFBZUEsTUFBZiIsImZpbGUiOiIuL2xpYi9wcmlzbWEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW50ZXJmYWNlIEN1c3RvbU5vZGVKc0dsb2JhbCB7XG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnRcbn1cblxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/adapters */ \"next-auth/adapters\");\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_adapters__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n\n\n\n\n\nconst authHandler = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authHandler);\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  })],\n  adapter: next_auth_adapters__WEBPACK_IMPORTED_MODULE_1___default().Prisma.Adapter({\n    prisma: _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.default\n  }),\n  secret: process.env.SECRET\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtbmV4dGpzLWJsb2cvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzI4YzIiXSwibmFtZXMiOlsiYXV0aEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJOZXh0QXV0aCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYWRhcHRlciIsIkFkYXB0ZXJzIiwicHJpc21hIiwic2VjcmV0IiwiU0VDUkVUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQTJCLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXRSxPQUFYLENBQTFEOztBQUNBLCtEQUFlSixXQUFmO0FBRUEsTUFBTUksT0FBTyxHQUFHO0FBQ1pDLFdBQVMsRUFBRSxDQUNQQyxpRUFBQSxDQUFpQjtBQUNiQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURUO0FBRWJDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZiLEdBQWpCLENBRE8sQ0FEQztBQU9aQyxTQUFPLEVBQUVDLHdFQUFBLENBQXdCO0FBQUVDLFVBQU1BO0FBQVIsR0FBeEIsQ0FQRztBQVFaQyxRQUFNLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUTtBQVJSLENBQWhCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBBZGFwdGVycyBmcm9tIFwibmV4dC1hdXRoL2FkYXB0ZXJzXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbmNvbnN0IGF1dGhIYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xuZXhwb3J0IGRlZmF1bHQgYXV0aEhhbmRsZXI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBhZGFwdGVyOiBBZGFwdGVycy5QcmlzbWEuQWRhcHRlcih7IHByaXNtYSB9KSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVFxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/adapters":
/*!*************************************!*\
  !*** external "next-auth/adapters" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/adapters");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();