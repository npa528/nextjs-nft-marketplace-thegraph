"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/graphExample";
exports.ids = ["pages/graphExample"];
exports.modules = {

/***/ "./pages/graphExample.js":
/*!*******************************!*\
  !*** ./pages/graphExample.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GraphExample)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GET_ACTIVE_ITEMS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\r\n    {\r\n        activeItems(first: 5, where: { buyer: \"0x0000000000000000000000000000000000000000\" }) {\r\n            id\r\n            buyer\r\n            seller\r\n            nftAddress\r\n            tokenId\r\n            price\r\n        }\r\n    }\r\n`;\nfunction GraphExample() {\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(GET_ACTIVE_ITEMS);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hi\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\pages\\\\graphExample.js\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaEV4YW1wbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QztBQUU5QyxNQUFNRSxtQkFBbUJELCtDQUFHLENBQUM7QUFhN0I7SUFDSSxNQUFNLEVBQUVHLFFBQU8sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR04sU0FBU0U7SUFDMUNLLFFBQVFDLEdBQUc7SUFDWDtrQkFBWTs7Ozs7O0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbmZ0LW1hcmtldHBsYWNlLy4vcGFnZXMvZ3JhcGhFeGFtcGxlLmpzPzk0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcblxyXG5jb25zdCBHRVRfQUNUSVZFX0lURU1TID0gZ3FsYFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUl0ZW1zKGZpcnN0OiA1LCB3aGVyZTogeyBidXllcjogXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIiB9KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGJ1eWVyXHJcbiAgICAgICAgICAgIHNlbGxlclxyXG4gICAgICAgICAgICBuZnRBZGRyZXNzXHJcbiAgICAgICAgICAgIHRva2VuSWRcclxuICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYXBoRXhhbXBsZSgpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9BQ1RJVkVfSVRFTVMpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIDxkaXY+aGk8L2Rpdj5cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJHRVRfQUNUSVZFX0lURU1TIiwiR3JhcGhFeGFtcGxlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/graphExample.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/graphExample.js"));
module.exports = __webpack_exports__;

})();