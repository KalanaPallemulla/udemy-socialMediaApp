/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Common_WelcomeMessage_js";
exports.ids = ["components_Common_WelcomeMessage_js"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderMessage\": function() { return /* binding */ HeaderMessage; },\n/* harmony export */   \"FooterMessage\": function() { return /* binding */ FooterMessage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/macbookair/Documents/Testing/udemy/Course Starter Files/components/Common/WelcomeMessage.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nconst HeaderMessage = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const signupRoute = router.pathname === \"/signup\";\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    color: \"teal\",\n    attached: true,\n    header: signupRoute ? \"Get Started\" : \"Welcome Back\",\n    icon: signupRoute ? \"settings\" : \"privacy\",\n    content: signupRoute ? \"Create New Account\" : \"Login with Email and Password\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  });\n};\nconst FooterMessage = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const signupRoute = router.pathname === \"/signup\";\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    attached: \"bottom\",\n    warning: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    name: \"help\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }), \"Existing User? \", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/login\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 28\n    }\n  }, \"Login Here Instead\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n    hidden: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    attached: \"bottom\",\n    info: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    name: \"lock\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/rest\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Forgot Password?\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n    hidden: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {\n    attached: \"bottom\",\n    warning: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    name: \"help\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }), \"New User? \", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/signup\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 23\n    }\n  }, \"Signup Here\"), \" Instead\", \" \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {\n    hidden: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  })));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZS5qcz9mNDVmIl0sIm5hbWVzIjpbIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixTQUF4QztBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUNFLFNBQUssRUFBQyxNQURSO0FBRUUsWUFBUSxNQUZWO0FBR0UsVUFBTSxFQUFFRCxXQUFXLEdBQUcsYUFBSCxHQUFtQixjQUh4QztBQUlFLFFBQUksRUFBRUEsV0FBVyxHQUFHLFVBQUgsR0FBZ0IsU0FKbkM7QUFLRSxXQUFPLEVBQ0xBLFdBQVcsR0FBRyxvQkFBSCxHQUEwQiwrQkFOekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBV0QsQ0FkTTtBQWdCQSxNQUFNRSxhQUFhLEdBQUcsTUFBTTtBQUNqQyxRQUFNSixNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNHLFFBQVAsS0FBb0IsU0FBeEM7QUFDQSxTQUNFLHFFQUNHRCxXQUFXLEdBQ1YscUVBQ0UsTUFBQyxzREFBRDtBQUFTLFlBQVEsRUFBQyxRQUFsQjtBQUEyQixXQUFPLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLHFCQUVpQixNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGakIsQ0FERixFQUtFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBRFUsR0FTVixxRUFDRSxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFFBQUksTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixDQURGLEVBS0UsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRSxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsZ0JBRVksTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBRSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlosY0FFOEQsR0FGOUQsQ0FQRixFQVdFLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBVkosQ0FERjtBQTJCRCxDQTlCTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbiwgTWVzc2FnZSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJNZXNzYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NpZ251cFwiO1xuICByZXR1cm4gKFxuICAgIDxNZXNzYWdlXG4gICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgYXR0YWNoZWRcbiAgICAgIGhlYWRlcj17c2lnbnVwUm91dGUgPyBcIkdldCBTdGFydGVkXCIgOiBcIldlbGNvbWUgQmFja1wifVxuICAgICAgaWNvbj17c2lnbnVwUm91dGUgPyBcInNldHRpbmdzXCIgOiBcInByaXZhY3lcIn1cbiAgICAgIGNvbnRlbnQ9e1xuICAgICAgICBzaWdudXBSb3V0ZSA/IFwiQ3JlYXRlIE5ldyBBY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggRW1haWwgYW5kIFBhc3N3b3JkXCJcbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lc3NhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaWdudXBSb3V0ZSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XG4gICAgICAgICAgICBFeGlzdGluZyBVc2VyPyA8TGluayBocmVmPXtcIi9sb2dpblwifT5Mb2dpbiBIZXJlIEluc3RlYWQ8L0xpbms+XG4gICAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiBpbmZvPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cImxvY2tcIiAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcmVzdFwifT5Gb3Jnb3QgUGFzc3dvcmQ/PC9MaW5rPlxuICAgICAgICAgIDwvTWVzc2FnZT5cbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cbiAgICAgICAgICAgIE5ldyBVc2VyPyA8TGluayBocmVmPXtcIi9zaWdudXBcIn0+U2lnbnVwIEhlcmU8L0xpbms+IEluc3RlYWR7XCIgXCJ9XG4gICAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/WelcomeMessage.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;