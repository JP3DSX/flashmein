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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [questionData, setQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"Apfel\",\n        \"Bananen\",\n        \"Citrone\"\n    ]);\n    const [answerData, setAnswerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"りんご\",\n        \"バナナ\",\n        \"レモン\"\n    ]);\n    const [flipState, setFlipState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [questionNum, setQuestionNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cardText, setCardText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getQuestionNum = ()=>{\n        setQuestionNum(Math.trunc(Math.random() * questionData.length));\n    };\n    /*  const setCardTextByFlip = () => {\n    if(flipState){\n      setCardText(questionData[questionNum]);\n    }else{\n      setCardText(answerData[questionNum]);\n    }\n  };*/ const initialize = ()=>{\n        setFlipState(true);\n        getQuestionNum();\n    //   setCardTextByFlip();\n    };\n    const flipCard = ()=>{\n        setFlipState(!flipState);\n    };\n    const setNextQuestion = ()=>{\n        getQuestionNum();\n        setFlipState(true);\n    //   setCardTextByFlip();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (flipState) {\n            setCardText(questionData[questionNum]);\n        } else {\n            setCardText(answerData[questionNum]);\n        }\n    }, [\n        flipState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initialize();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"head\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Flashmein!\"\n                }, void 0, false, {\n                    fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-skin\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-text\",\n                        children: cardText\n                    }, void 0, false, {\n                        fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            visibility: flipState ? \"hidden\" : \"visible\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn midleftbtn okbtn\",\n                                onClick: ()=>{\n                                    setNextQuestion();\n                                },\n                                children: \"OK\"\n                            }, void 0, false, {\n                                fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn midrightbtn ngbtn\",\n                                onClick: ()=>{\n                                    setNextQuestion();\n                                },\n                                children: \"NG\"\n                            }, void 0, false, {\n                                fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn rightbtn flipbtn\",\n                        onClick: ()=>{\n                            flipCard();\n                        },\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"posi-centerdiv\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn midbtn flipbtn\",\n                    children: \"Add Question\"\n                }, void 0, false, {\n                    fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jp3dsx/Programming/ReactJS/flashmein/app/page.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"/1ZAdpiJoNq8Czl5WaHX0onct1M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUQ7QUFFcEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBRUMsY0FBY0MsZ0JBQWlCLEdBQUdKLCtDQUFRQSxDQUFXO1FBQUM7UUFBUTtRQUFVO0tBQVU7SUFDMUYsTUFBTSxDQUFFSyxZQUFZQyxjQUFlLEdBQUdOLCtDQUFRQSxDQUFXO1FBQUM7UUFBTTtRQUFNO0tBQU07SUFDNUUsTUFBTSxDQUFFTyxXQUFXQyxhQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBRVMsYUFBYUMsZUFBZ0IsR0FBR1YsK0NBQVFBLENBQVM7SUFDekQsTUFBTSxDQUFFVyxNQUFNQyxRQUFTLEdBQUdaLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBRWEsVUFBVUMsWUFBYSxHQUFHZCwrQ0FBUUE7SUFFMUMsTUFBTWUsaUJBQWlCO1FBQ3JCTCxlQUFlTSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS2YsYUFBYWdCLE1BQU07SUFDL0Q7SUFFRjs7Ozs7O0lBTUksR0FFRixNQUFNQyxhQUFhO1FBQ2pCWixhQUFhO1FBQ2JPO0lBQ0gseUJBQXlCO0lBQ3hCO0lBRUEsTUFBTU0sV0FBVztRQUNmYixhQUFhLENBQUNEO0lBQ2hCO0lBRUEsTUFBTWUsa0JBQWtCO1FBQ3RCUDtRQUNBUCxhQUFhO0lBQ2hCLHlCQUF5QjtJQUN4QjtJQUVBUCxnREFBU0EsQ0FBQztRQUNSLElBQUdNLFdBQVU7WUFDWE8sWUFBWVgsWUFBWSxDQUFDTSxZQUFZO1FBQ3ZDLE9BQUs7WUFDSEssWUFBWVQsVUFBVSxDQUFDSSxZQUFZO1FBQ3JDO0lBQ0YsR0FBRztRQUFDRjtLQUFVO0lBRWROLGdEQUFTQSxDQUFDO1FBQ1JtQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pYOzs7Ozs7a0NBRUgsOERBQUNVO3dCQUFJRyxPQUFPOzRCQUFFQyxZQUFZcEIsWUFBWSxXQUFXO3dCQUFTOzswQ0FDeEQsOERBQUNxQjtnQ0FBT0osV0FBVTtnQ0FDVkssU0FBUztvQ0FDUFA7Z0NBQ1Y7MENBQUc7Ozs7OzswQ0FDSCw4REFBQ007Z0NBQU9KLFdBQVU7Z0NBQ1ZLLFNBQVM7b0NBQ1BQO2dDQUNWOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBRUwsOERBQUNNO3dCQUNDSixXQUFVO3dCQUNWSyxTQUFTOzRCQUNQUjt3QkFDRjtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUVQLDhEQUFDRTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0k7b0JBQU9KLFdBQVU7OEJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztHQS9Fd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbIHF1ZXN0aW9uRGF0YSwgc2V0UXVlc3Rpb25EYXRhIF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1wiQXBmZWxcIixcIkJhbmFuZW5cIixcIkNpdHJvbmVcIl0pO1xuICBjb25zdCBbIGFuc3dlckRhdGEsIHNldEFuc3dlckRhdGEgXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXCLjgorjgpPjgZRcIixcIuODkOODiuODilwiLFwi44Os44Oi44OzXCJdKTtcbiAgY29uc3QgWyBmbGlwU3RhdGUsIHNldEZsaXBTdGF0ZSBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFsgcXVlc3Rpb25OdW0sIHNldFF1ZXN0aW9uTnVtIF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbIG1vZGUsIHNldE1vZGUgXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFsgY2FyZFRleHQsIHNldENhcmRUZXh0IF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgZ2V0UXVlc3Rpb25OdW0gPSAoKSA9PiB7XG4gICAgc2V0UXVlc3Rpb25OdW0oTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25EYXRhLmxlbmd0aCkpO1xuICB9O1xuXG4vKiAgY29uc3Qgc2V0Q2FyZFRleHRCeUZsaXAgPSAoKSA9PiB7XG4gICAgaWYoZmxpcFN0YXRlKXtcbiAgICAgIHNldENhcmRUZXh0KHF1ZXN0aW9uRGF0YVtxdWVzdGlvbk51bV0pO1xuICAgIH1lbHNle1xuICAgICAgc2V0Q2FyZFRleHQoYW5zd2VyRGF0YVtxdWVzdGlvbk51bV0pO1xuICAgIH1cbiAgfTsqL1xuXG4gIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgc2V0RmxpcFN0YXRlKHRydWUpO1xuICAgIGdldFF1ZXN0aW9uTnVtKCk7XG4gLy8gICBzZXRDYXJkVGV4dEJ5RmxpcCgpO1xuICB9O1xuXG4gIGNvbnN0IGZsaXBDYXJkID0gKCkgPT4ge1xuICAgIHNldEZsaXBTdGF0ZSghZmxpcFN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBzZXROZXh0UXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgZ2V0UXVlc3Rpb25OdW0oKTtcbiAgICBzZXRGbGlwU3RhdGUodHJ1ZSk7XG4gLy8gICBzZXRDYXJkVGV4dEJ5RmxpcCgpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihmbGlwU3RhdGUpe1xuICAgICAgc2V0Q2FyZFRleHQocXVlc3Rpb25EYXRhW3F1ZXN0aW9uTnVtXSk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRDYXJkVGV4dChhbnN3ZXJEYXRhW3F1ZXN0aW9uTnVtXSk7XG4gICAgfVxuICB9LCBbZmxpcFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0aWFsaXplKCk7XG4gIH0sIFtdKTsgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgIDxoMT5GbGFzaG1laW4hPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXNraW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICB7Y2FyZFRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHZpc2liaWxpdHk6IGZsaXBTdGF0ZSA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIn19PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG1pZGxlZnRidG4gb2tidG5cIiBcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXROZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgICB9fT5PSzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG1pZHJpZ2h0YnRuIG5nYnRuXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXROZXh0UXVlc3Rpb24oKTtcbiAgICAgICAgICB9fT5ORzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gcmlnaHRidG4gZmxpcGJ0blwiIFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGZsaXBDYXJkKCk7XG4gICAgICAgICAgfX0+RmxpcDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2ktY2VudGVyZGl2XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIG1pZGJ0biBmbGlwYnRuXCI+QWRkIFF1ZXN0aW9uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInF1ZXN0aW9uRGF0YSIsInNldFF1ZXN0aW9uRGF0YSIsImFuc3dlckRhdGEiLCJzZXRBbnN3ZXJEYXRhIiwiZmxpcFN0YXRlIiwic2V0RmxpcFN0YXRlIiwicXVlc3Rpb25OdW0iLCJzZXRRdWVzdGlvbk51bSIsIm1vZGUiLCJzZXRNb2RlIiwiY2FyZFRleHQiLCJzZXRDYXJkVGV4dCIsImdldFF1ZXN0aW9uTnVtIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZSIsImZsaXBDYXJkIiwic2V0TmV4dFF1ZXN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});