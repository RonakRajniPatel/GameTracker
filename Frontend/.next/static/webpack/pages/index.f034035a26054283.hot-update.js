"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game_status.js":
/*!***********************************!*\
  !*** ./components/game_status.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameStatusSelection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst [selectedStatus, switchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\nfunction GameStatus(param) {\n    let { status } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: [\n            status,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"radio\",\n                name: \"status\",\n                value: status,\n                checked: true\n            }, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = GameStatus;\nfunction GameStatusSelection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameStatus, {\n                status: \"Want to play\"\n            }, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameStatus, {\n                status: \"Are playing\"\n            }, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameStatus, {\n                status: \"Have played\"\n            }, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameStatus, {\n                status: \"Have dropped\"\n            }, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ronakpatel/Code/GameTracker/GameTracker/Frontend/components/game_status.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c1 = GameStatusSelection;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameStatus\");\n$RefreshReg$(_c1, \"GameStatusSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWVfc3RhdHVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNqQyxNQUFNLENBQUNDLGdCQUFnQkMsYUFBYSxHQUFHRiwrQ0FBUUEsQ0FBQztBQUVoRCxTQUFTRyxXQUFZLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUNqQixxQkFDQSw4REFBQ0M7O1lBQ0lEOzBCQUNELDhEQUFDRTtnQkFBTUMsTUFBSztnQkFBUUMsTUFBSztnQkFBU0MsT0FBT0w7Z0JBQVFNLE9BQU87Ozs7Ozs7Ozs7OztBQUdoRTtLQVBTUDtBQVNNLFNBQVNRO0lBQ3BCLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNUO2dCQUFXQyxRQUFTOzs7Ozs7MEJBQ3JCLDhEQUFDUzs7Ozs7MEJBQ0QsOERBQUNWO2dCQUFXQyxRQUFTOzs7Ozs7MEJBQ3JCLDhEQUFDUzs7Ozs7MEJBQ0QsOERBQUNWO2dCQUFXQyxRQUFTOzs7Ozs7MEJBQ3JCLDhEQUFDUzs7Ozs7MEJBQ0QsOERBQUNWO2dCQUFXQyxRQUFTOzs7Ozs7MEJBQ3JCLDhEQUFDUzs7Ozs7Ozs7Ozs7QUFHYjtNQWJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lX3N0YXR1cy5qcz85N2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgW3NlbGVjdGVkU3RhdHVzLCBzd2l0Y2hTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIEdhbWVTdGF0dXMoIHsgc3RhdHVzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgIDxsYWJlbD5cbiAgICAgICAge3N0YXR1c31cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzdGF0dXNcIiB2YWx1ZT17c3RhdHVzfSBjaGVja2VkPjwvaW5wdXQ+XG4gICAgPC9sYWJlbD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lU3RhdHVzU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8R2FtZVN0YXR1cyBzdGF0dXMgPSBcIldhbnQgdG8gcGxheVwiLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPEdhbWVTdGF0dXMgc3RhdHVzID0gXCJBcmUgcGxheWluZ1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPEdhbWVTdGF0dXMgc3RhdHVzID0gXCJIYXZlIHBsYXllZFwiLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPEdhbWVTdGF0dXMgc3RhdHVzID0gXCJIYXZlIGRyb3BwZWRcIi8+ICAgICAgXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzZWxlY3RlZFN0YXR1cyIsInN3aXRjaFN0YXR1cyIsIkdhbWVTdGF0dXMiLCJzdGF0dXMiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJHYW1lU3RhdHVzU2VsZWN0aW9uIiwiZGl2IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game_status.js\n"));

/***/ })

});