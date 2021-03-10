/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknew_fb_ui"] = self["webpackChunknew_fb_ui"] || []).push([["src_common_userAPI_js"],{

/***/ "./src/common/userAPI.js":
/*!*******************************!*\
  !*** ./src/common/userAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nvar ENDPOINT = \"https://jsonplaceholder.typicode.com/users/\";\nfunction getUsers() {\n  return fetch(ENDPOINT).then(function (Response) {\n    if (!Response.ok) throw Error(Response.statusText);\n    return Response.json();\n  }).then(function (json) {\n    return json;\n  });\n}\n\n//# sourceURL=webpack://new_fb_ui/./src/common/userAPI.js?");

/***/ })

}]);