"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Wheel.tsx":
/*!**********************************!*\
  !*** ./app/components/Wheel.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_custom_roulette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-roulette */ \"(app-pages-browser)/./node_modules/react-custom-roulette/dist/bundle.js\");\n/* harmony import */ var react_custom_roulette__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_roulette__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_line_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/line.png */ \"(app-pages-browser)/./app/assets/line.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Wheel = ()=>{\n    _s();\n    const [mustSpin, setMustSpin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [prizeNumber, setPrizeNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        {\n            option: \"1\",\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            option: \"2\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"3\",\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            option: \"4\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"5\",\n            style: {\n                backgroundColor: \"#46E2A3\"\n            }\n        },\n        {\n            option: \"6\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"7\",\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            option: \"8\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"9\",\n            style: {\n                backgroundColor: \"#F1BB48\"\n            }\n        },\n        {\n            option: \"10\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"11\",\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            option: \"12\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"13\",\n            style: {\n                backgroundColor: \"#46E2A3\"\n            }\n        },\n        {\n            option: \"14\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"15\",\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            option: \"16\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            option: \"17\",\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            option: \"18\",\n            style: {\n                backgroundColor: \"#46E2A3\"\n            }\n        },\n        {\n            option: \"19\",\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        }\n    ];\n    const handleSpinClick = ()=>{\n        if (!mustSpin) {\n            const newPrizeNumber = Math.floor(Math.random() * data.length);\n            setPrizeNumber(newPrizeNumber);\n            setMustSpin(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"transform rotate-0 scale-[1.4]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_custom_roulette__WEBPACK_IMPORTED_MODULE_2__.Wheel, {\n                    innerRadius: 72,\n                    mustStartSpinning: mustSpin,\n                    prizeNumber: prizeNumber,\n                    data: data,\n                    backgroundColors: [\n                        \"#3e3e3e\",\n                        \"#df3428\"\n                    ],\n                    textColors: [\n                        \"#ffffff\"\n                    ],\n                    onStopSpinning: ()=>{\n                        setMustSpin(false);\n                    },\n                    outerBorderWidth: 0,\n                    radiusLineWidth: 0,\n                    pointerProps: {\n                        src: _assets_line_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].toString(\"base64\"),\n                        style: {\n                            width: \"2px\",\n                            height: \"130px\",\n                            transform: \"\",\n                            rotate: \"0deg\",\n                            top: \"77%\",\n                            right: \"50%\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#171717] py-3 px-7 rounded-xl text-2xl\",\n                        onClick: handleSpinClick,\n                        children: \"SPIN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: prizeNumber\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n        lineNumber: 46,\n        columnNumber: 1\n    }, undefined);\n};\n_s(Wheel, \"58vZrOuB/e+QvyhPdLKQFzmUZcU=\");\n_c = Wheel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wheel);\nvar _c;\n$RefreshReg$(_c, \"Wheel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1doZWVsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDZ0I7QUFDbkI7QUFFckMsTUFBTUUsUUFBUTs7SUFFZCxNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1RLE9BQU87UUFDYjtZQUFFQyxRQUFRO1lBQUtDLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDckQ7WUFBRUYsUUFBUTtZQUFLQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3JEO1lBQUVGLFFBQVE7WUFBS0MsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUNyRDtZQUFFRixRQUFRO1lBQUtDLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDckQ7WUFBRUYsUUFBUTtZQUFLQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3JEO1lBQUVGLFFBQVE7WUFBS0MsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUNyRDtZQUFFRixRQUFRO1lBQUtDLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDckQ7WUFBRUYsUUFBUTtZQUFLQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3JEO1lBQUVGLFFBQVE7WUFBS0MsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUNyRDtZQUFFRixRQUFRO1lBQU1DLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDdEQ7WUFBRUYsUUFBUTtZQUFNQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3REO1lBQUVGLFFBQVE7WUFBTUMsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN0RDtZQUFFRixRQUFRO1lBQU1DLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDdEQ7WUFBRUYsUUFBUTtZQUFNQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3REO1lBQUVGLFFBQVE7WUFBTUMsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN0RDtZQUFFRixRQUFRO1lBQU1DLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDdEQ7WUFBRUYsUUFBUTtZQUFNQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3REO1lBQUVGLFFBQVE7WUFBTUMsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN0RDtZQUFFRixRQUFRO1lBQU1DLE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7S0FHckQ7SUFFRCxNQUFNQyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDUixVQUFVO1lBQ2YsTUFBTVMsaUJBQWlCQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1IsS0FBS1MsTUFBTTtZQUM3RFYsZUFBZU07WUFDZlIsWUFBWTtRQUNaO0lBQ0E7SUFJQSxxQkFDQSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDakIsd0RBQU9BO29CQUFDa0IsYUFBYTtvQkFBSUMsbUJBQW1CakI7b0JBQVVFLGFBQWFBO29CQUFhRSxNQUFNQTtvQkFDbkZjLGtCQUFrQjt3QkFBQzt3QkFBVztxQkFBVztvQkFBRUMsWUFBWTt3QkFBQztxQkFBVTtvQkFBRUMsZ0JBQWdCO3dCQUNwRm5CLFlBQVk7b0JBQ1o7b0JBQ0FvQixrQkFBbUI7b0JBQ25CQyxpQkFBa0I7b0JBR2xCQyxjQUNBO3dCQUFDQyxLQUFLekIsd0RBQUlBLENBQUMwQixRQUFRLENBQUM7d0JBQVduQixPQUFPOzRCQUFDb0IsT0FBTzs0QkFBT0MsUUFBUTs0QkFBU0MsV0FBVzs0QkFBSUMsUUFBUTs0QkFBUUMsS0FDckc7NEJBQU9DLE9BQU87d0JBQUs7b0JBQUM7Ozs7Ozs7Ozs7OzBCQUs1Qiw4REFBQ2pCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2lCO3dCQUFPakIsV0FBVTt3QkFBNkNrQixTQUFTekI7a0NBQWlCOzs7Ozs7a0NBR3pGLDhEQUFDMEI7a0NBQUdoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1o7R0FsRU1MO0tBQUFBO0FBb0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1doZWVsLnRzeD82OGZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgV2hlZWwgYXMgV2hlZWxSb30gZnJvbSBcInJlYWN0LWN1c3RvbS1yb3VsZXR0ZVwiO1xyXG5pbXBvcnQgbGluZSBmcm9tICcuLi9hc3NldHMvbGluZS5wbmcnXHJcblxyXG5jb25zdCBXaGVlbCA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFttdXN0U3Bpbiwgc2V0TXVzdFNwaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbcHJpemVOdW1iZXIsIHNldFByaXplTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxueyBvcHRpb246ICcxJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0REMTg1OCcgfSB9LCAvLyAjQTZBNkE2IC0gd2hpdGUgI0EzMUM0NyAtIHJlZCAjMkVCNDdGIC0gZ3JlZW4gI0YyQTUzRiAtIHllbGxvd1xyXG57IG9wdGlvbjogJzInLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGNkY2JyB9IH0sIC8vICNGNkY2RjYgLSB3aGl0ZSAjREQxODU4IC0gcmVkICM0NkUyQTMgLSBncmVlbiAjRjFCQjQ4IC15ZWxsb3dcclxueyBvcHRpb246ICczJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0REMTg1OCcgfSB9LFxyXG57IG9wdGlvbjogJzQnLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGNkY2JyB9IH0sXHJcbnsgb3B0aW9uOiAnNScsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyM0NkUyQTMnIH0gfSxcclxueyBvcHRpb246ICc2Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IG9wdGlvbjogJzcnLCBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjREQxODU4JyB9IH0sXHJcbnsgb3B0aW9uOiAnOCcsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNGNkY2RjYnIH0gfSxcclxueyBvcHRpb246ICc5Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0YxQkI0OCcgfSB9LFxyXG57IG9wdGlvbjogJzEwJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IG9wdGlvbjogJzExJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0REMTg1OCcgfSB9LFxyXG57IG9wdGlvbjogJzEyJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IG9wdGlvbjogJzEzJywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnIzQ2RTJBMycgfSB9LFxyXG57IG9wdGlvbjogJzE0Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IG9wdGlvbjogJzE1Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0REMTg1OCcgfSB9LFxyXG57IG9wdGlvbjogJzE2Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IG9wdGlvbjogJzE3Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0REMTg1OCcgfSB9LFxyXG57IG9wdGlvbjogJzE4Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnIzQ2RTJBMycgfSB9LFxyXG57IG9wdGlvbjogJzE5Jywgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG5cclxuXHJcbl1cclxuXHJcbmNvbnN0IGhhbmRsZVNwaW5DbGljayA9ICgpID0+IHtcclxuaWYgKCFtdXN0U3Bpbikge1xyXG5jb25zdCBuZXdQcml6ZU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKTtcclxuc2V0UHJpemVOdW1iZXIobmV3UHJpemVOdW1iZXIpO1xyXG5zZXRNdXN0U3Bpbih0cnVlKTtcclxufVxyXG59XHJcblxyXG5cclxuXHJcbnJldHVybiAoXHJcbjxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZm9ybSByb3RhdGUtMCBzY2FsZS1bMS40XVwiPlxyXG4gICAgICAgIDxXaGVlbFJvIGlubmVyUmFkaXVzPXs3Mn0gbXVzdFN0YXJ0U3Bpbm5pbmc9e211c3RTcGlufSBwcml6ZU51bWJlcj17cHJpemVOdW1iZXJ9IGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcnM9e1snIzNlM2UzZScsICcjZGYzNDI4JyBdfSB0ZXh0Q29sb3JzPXtbJyNmZmZmZmYnXX0gb25TdG9wU3Bpbm5pbmc9eygpPT4ge1xyXG4gICAgICAgICAgICBzZXRNdXN0U3BpbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG91dGVyQm9yZGVyV2lkdGg9eyAwIH1cclxuICAgICAgICAgICAgcmFkaXVzTGluZVdpZHRoPXsgMCB9XHJcblxyXG5cclxuICAgICAgICAgICAgcG9pbnRlclByb3BzPXtcclxuICAgICAgICAgICAge3NyYzogbGluZS50b1N0cmluZygnYmFzZTY0JyksIHN0eWxlOiB7d2lkdGg6ICcycHgnLCBoZWlnaHQ6ICcxMzBweCcsIHRyYW5zZm9ybTogJycsIHJvdGF0ZTogJzBkZWcnLCB0b3A6XHJcbiAgICAgICAgICAgICc3NyUnLCByaWdodDogJzUwJSd9fVxyXG4gICAgICAgICAgICAvLyB7c3JjOiBgJHtsaW5lfWB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG10LTIwJz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctWyMxNzE3MTddIHB5LTMgcHgtNyByb3VuZGVkLXhsIHRleHQtMnhsJyBvbkNsaWNrPXtoYW5kbGVTcGluQ2xpY2t9PlxyXG4gICAgICAgICAgICBTUElOXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHA+e3ByaXplTnVtYmVyfTwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGVlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIldoZWVsIiwiV2hlZWxSbyIsImxpbmUiLCJtdXN0U3BpbiIsInNldE11c3RTcGluIiwicHJpemVOdW1iZXIiLCJzZXRQcml6ZU51bWJlciIsImRhdGEiLCJvcHRpb24iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZVNwaW5DbGljayIsIm5ld1ByaXplTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5uZXJSYWRpdXMiLCJtdXN0U3RhcnRTcGlubmluZyIsImJhY2tncm91bmRDb2xvcnMiLCJ0ZXh0Q29sb3JzIiwib25TdG9wU3Bpbm5pbmciLCJvdXRlckJvcmRlcldpZHRoIiwicmFkaXVzTGluZVdpZHRoIiwicG9pbnRlclByb3BzIiwic3JjIiwidG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsInJvdGF0ZSIsInRvcCIsInJpZ2h0IiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Wheel.tsx\n"));

/***/ })

});