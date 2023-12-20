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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_custom_roulette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-roulette */ \"(app-pages-browser)/./node_modules/react-custom-roulette/dist/bundle.js\");\n/* harmony import */ var react_custom_roulette__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_roulette__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_line_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/line.png */ \"(app-pages-browser)/./app/assets/line.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Wheel = ()=>{\n    _s();\n    const [mustSpin, setMustSpin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [prizeNumber, setPrizeNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        {\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#46E2A3\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F1BB48\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#46E2A3\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#DD1858\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#46E2A3\"\n            }\n        },\n        {\n            style: {\n                backgroundColor: \"#F6F6F6\"\n            }\n        }\n    ];\n    const handleSpinClick = ()=>{\n        if (!mustSpin) {\n            const newPrizeNumber = Math.floor(Math.random() * data.length);\n            setPrizeNumber(newPrizeNumber);\n            setMustSpin(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"transform rotate-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_custom_roulette__WEBPACK_IMPORTED_MODULE_2__.Wheel, {\n                    innerRadius: 72,\n                    mustStartSpinning: mustSpin,\n                    prizeNumber: prizeNumber,\n                    data: data,\n                    backgroundColors: [\n                        \"#3e3e3e\",\n                        \"#df3428\"\n                    ],\n                    textColors: [\n                        \"#ffffff\"\n                    ],\n                    onStopSpinning: ()=>{\n                        setMustSpin(false);\n                    },\n                    outerBorderWidth: 0,\n                    radiusLineWidth: 0,\n                    pointerProps: {\n                        src: _assets_line_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].toString(\"base64\"),\n                        style: {\n                            width: \"2px\",\n                            height: \"130px\",\n                            transform: \"\",\n                            rotate: \"0deg\",\n                            top: \"77%\",\n                            right: \"50%\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-[#171717] py-3 px-7 rounded-xl\",\n                    onClick: handleSpinClick,\n                    children: \"SPIN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\servet_test-main\\\\app\\\\components\\\\Wheel.tsx\",\n        lineNumber: 46,\n        columnNumber: 1\n    }, undefined);\n};\n_s(Wheel, \"58vZrOuB/e+QvyhPdLKQFzmUZcU=\");\n_c = Wheel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wheel);\nvar _c;\n$RefreshReg$(_c, \"Wheel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1doZWVsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDZ0I7QUFDbkI7QUFFckMsTUFBTUUsUUFBUTs7SUFFZCxNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1RLE9BQU87UUFDYjtZQUFFQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3hDO1lBQUVELE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDeEM7WUFBRUQsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN4QztZQUFFRCxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3hDO1lBQUVELE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDeEM7WUFBRUQsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN4QztZQUFFRCxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3hDO1lBQUVELE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDeEM7WUFBRUQsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN4QztZQUFFRCxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3hDO1lBQUVELE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDeEM7WUFBRUQsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN4QztZQUFFRCxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3hDO1lBQUVELE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDeEM7WUFBRUQsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN4QztZQUFFRCxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO1FBQ3hDO1lBQUVELE9BQU87Z0JBQUVDLGlCQUFpQjtZQUFVO1FBQUU7UUFDeEM7WUFBRUQsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVU7UUFBRTtRQUN4QztZQUFFRCxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBVTtRQUFFO0tBR3ZDO0lBRUQsTUFBTUMsa0JBQWtCO1FBQ3hCLElBQUksQ0FBQ1AsVUFBVTtZQUNmLE1BQU1RLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtQLEtBQUtRLE1BQU07WUFDN0RULGVBQWVLO1lBQ2ZQLFlBQVk7UUFDWjtJQUNBO0lBSUEscUJBQ0EsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ2hCLHdEQUFPQTtvQkFBQ2lCLGFBQWE7b0JBQUlDLG1CQUFtQmhCO29CQUFVRSxhQUFhQTtvQkFBYUUsTUFBTUE7b0JBQ25GYSxrQkFBa0I7d0JBQUM7d0JBQVc7cUJBQVc7b0JBQUVDLFlBQVk7d0JBQUM7cUJBQVU7b0JBQUVDLGdCQUFnQjt3QkFDcEZsQixZQUFZO29CQUNaO29CQUNBbUIsa0JBQW1CO29CQUNuQkMsaUJBQWtCO29CQUdsQkMsY0FDQTt3QkFBQ0MsS0FBS3hCLHdEQUFJQSxDQUFDeUIsUUFBUSxDQUFDO3dCQUFXbkIsT0FBTzs0QkFBQ29CLE9BQU87NEJBQU9DLFFBQVE7NEJBQVNDLFdBQVc7NEJBQUlDLFFBQVE7NEJBQVFDLEtBQ3JHOzRCQUFPQyxPQUFPO3dCQUFLO29CQUFDOzs7Ozs7Ozs7OzswQkFLNUIsOERBQUNqQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ2lCO29CQUFPakIsV0FBVTtvQkFBb0NrQixTQUFTekI7OEJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU94RjtHQWpFTVY7S0FBQUE7QUFtRU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvV2hlZWwudHN4PzY4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBXaGVlbCBhcyBXaGVlbFJvfSBmcm9tIFwicmVhY3QtY3VzdG9tLXJvdWxldHRlXCI7XHJcbmltcG9ydCBsaW5lIGZyb20gJy4uL2Fzc2V0cy9saW5lLnBuZydcclxuXHJcbmNvbnN0IFdoZWVsID0gKCkgPT4ge1xyXG5cclxuY29uc3QgW211c3RTcGluLCBzZXRNdXN0U3Bpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmNvbnN0IFtwcml6ZU51bWJlciwgc2V0UHJpemVOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG57IHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNERDE4NTgnIH0gfSwgLy8gI0E2QTZBNiAtIHdoaXRlICNBMzFDNDcgLSByZWQgIzJFQjQ3RiAtIGdyZWVuICNGMkE1M0YgLSB5ZWxsb3dcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGNkY2JyB9IH0sIC8vICNGNkY2RjYgLSB3aGl0ZSAjREQxODU4IC0gcmVkICM0NkUyQTMgLSBncmVlbiAjRjFCQjQ4IC15ZWxsb3dcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjREQxODU4JyB9IH0sXHJcbnsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyM0NkUyQTMnIH0gfSxcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGNkY2JyB9IH0sXHJcbnsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0REMTg1OCcgfSB9LFxyXG57IHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNGNkY2RjYnIH0gfSxcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjFCQjQ4JyB9IH0sXHJcbnsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNERDE4NTgnIH0gfSxcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGNkY2JyB9IH0sXHJcbnsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnIzQ2RTJBMycgfSB9LFxyXG57IHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNGNkY2RjYnIH0gfSxcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjREQxODU4JyB9IH0sXHJcbnsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG57IHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNERDE4NTgnIH0gfSxcclxueyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDZFMkEzJyB9IH0sXHJcbnsgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicgfSB9LFxyXG5cclxuXHJcbl1cclxuXHJcbmNvbnN0IGhhbmRsZVNwaW5DbGljayA9ICgpID0+IHtcclxuaWYgKCFtdXN0U3Bpbikge1xyXG5jb25zdCBuZXdQcml6ZU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKTtcclxuc2V0UHJpemVOdW1iZXIobmV3UHJpemVOdW1iZXIpO1xyXG5zZXRNdXN0U3Bpbih0cnVlKTtcclxufVxyXG59XHJcblxyXG5cclxuXHJcbnJldHVybiAoXHJcbjxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZm9ybSByb3RhdGUtMFwiPlxyXG4gICAgICAgIDxXaGVlbFJvIGlubmVyUmFkaXVzPXs3Mn0gbXVzdFN0YXJ0U3Bpbm5pbmc9e211c3RTcGlufSBwcml6ZU51bWJlcj17cHJpemVOdW1iZXJ9IGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcnM9e1snIzNlM2UzZScsICcjZGYzNDI4JyBdfSB0ZXh0Q29sb3JzPXtbJyNmZmZmZmYnXX0gb25TdG9wU3Bpbm5pbmc9eygpPT4ge1xyXG4gICAgICAgICAgICBzZXRNdXN0U3BpbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG91dGVyQm9yZGVyV2lkdGg9eyAwIH1cclxuICAgICAgICAgICAgcmFkaXVzTGluZVdpZHRoPXsgMCB9XHJcblxyXG5cclxuICAgICAgICAgICAgcG9pbnRlclByb3BzPXtcclxuICAgICAgICAgICAge3NyYzogbGluZS50b1N0cmluZygnYmFzZTY0JyksIHN0eWxlOiB7d2lkdGg6ICcycHgnLCBoZWlnaHQ6ICcxMzBweCcsIHRyYW5zZm9ybTogJycsIHJvdGF0ZTogJzBkZWcnLCB0b3A6XHJcbiAgICAgICAgICAgICc3NyUnLCByaWdodDogJzUwJSd9fVxyXG4gICAgICAgICAgICAvLyB7c3JjOiBgJHtsaW5lfWB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyAnPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1bIzE3MTcxN10gcHktMyBweC03IHJvdW5kZWQteGwnIG9uQ2xpY2s9e2hhbmRsZVNwaW5DbGlja30+XHJcbiAgICAgICAgICAgIFNQSU5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGVlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIldoZWVsIiwiV2hlZWxSbyIsImxpbmUiLCJtdXN0U3BpbiIsInNldE11c3RTcGluIiwicHJpemVOdW1iZXIiLCJzZXRQcml6ZU51bWJlciIsImRhdGEiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhhbmRsZVNwaW5DbGljayIsIm5ld1ByaXplTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5uZXJSYWRpdXMiLCJtdXN0U3RhcnRTcGlubmluZyIsImJhY2tncm91bmRDb2xvcnMiLCJ0ZXh0Q29sb3JzIiwib25TdG9wU3Bpbm5pbmciLCJvdXRlckJvcmRlcldpZHRoIiwicmFkaXVzTGluZVdpZHRoIiwicG9pbnRlclByb3BzIiwic3JjIiwidG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsInJvdGF0ZSIsInRvcCIsInJpZ2h0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Wheel.tsx\n"));

/***/ })

});