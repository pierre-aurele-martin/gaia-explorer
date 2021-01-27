webpackHotUpdate_N_E("pages/index",{

/***/ "./components/algolia/instantsearch.tsx":
/*!**********************************************!*\
  !*** ./components/algolia/instantsearch.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ \"./node_modules/react-instantsearch-dom/dist/es/index.js\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! algoliasearch/lite */ \"./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js\");\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete */ \"./components/algolia/autocomplete.tsx\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range */ \"./components/algolia/range.tsx\");\n/* harmony import */ var _spacekit_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../spacekit/container */ \"./components/spacekit/container.tsx\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter */ \"./components/algolia/filter.tsx\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clear */ \"./components/algolia/clear.tsx\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../button */ \"./components/button.tsx\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toggle */ \"./components/algolia/toggle.tsx\");\n/* harmony import */ var _hitsslider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hitsslider */ \"./components/algolia/hitsslider.tsx\");\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/algolia/instantsearch.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CustomHits = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"connectHits\"])(_spacekit_container__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n/* const CustomHits = connectHits((props) => {\n  console.log('Hits props ===>', props.hits);\n  return <div style={{position: 'absolute', bottom: 0, right: 0}}>OK</div>\n}); */\n\n_c = CustomHits;\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function () {\n  return {\n    title: {\n      color: 'white'\n    },\n    powered: {\n      backgroundColor: 'white',\n      padding: '10px',\n      borderRadius: '10px',\n      display: 'flex'\n    }\n  };\n}); // I'm hard filtering on purpose - did not find how to get the following Array through API. \n\nvar typeFilters = [{\n  value: \"\",\n  label: \"All\"\n}, {\n  value: \"Stellar\",\n  label: \"Stellar\"\n}, {\n  value: \"Galaxy\",\n  label: \"Galaxy\"\n}, {\n  value: \"Unknow\",\n  label: \"Unknow\"\n}];\n\nvar AlgoliaContainer = function AlgoliaContainer(_ref) {\n  _s();\n\n  var hits = _ref.hits;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      vType = _useState[0],\n      setType = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      filtersToClear = _useState2[0],\n      setFiltersClear = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_spacekit_container__WEBPACK_IMPORTED_MODULE_8__[\"defaultStepValue\"]),\n      hitsPerPage = _useState3[0],\n      setHitsPerPage = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (vType) {\n      setFiltersClear(function () {\n        return function () {\n          setType('');\n        };\n      });\n    } else {\n      setFiltersClear(null);\n    }\n  }, [vType]);\n\n  var searchStateChange = function searchStateChange(searchState) {\n    console.log('SearchStateChange ===>', searchState); // TODO -> dynamic routing so we can share search params\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      drawerOpen = _useState4[0],\n      setDrawerOpen = _useState4[1];\n\n  var toggleDrawer = function toggleDrawer() {\n    return setDrawerOpen(!drawerOpen);\n  };\n\n  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('(min-width:600px)');\n  return __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"InstantSearch\"], {\n    indexName: \"explorer_1\",\n    searchClient: algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()(\"RA6EZMVC9M\", \"363390bf85c521c66031555e1cc355a0\"),\n    onSearchStateChange: searchStateChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"Configure\"], {\n    filters: vType ? \"type:\".concat(vType) : '',\n    hitsPerPage: hitsPerPage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Fade\"], {\n    \"in\": drawerOpen,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n    position: \"absolute\",\n    minWidth: matches ? '400px' : '100%',\n    height: \"100%\",\n    width: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"List\"], {\n    component: \"nav\",\n    \"aria-label\": \"search list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n    className: classes.title,\n    variant: \"h4\",\n    gutterBottom: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, \"Gaia Explorer\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__[\"PoweredBy\"], {\n    className: classes.powered,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(_hitsslider__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    setHitsPerPage: setHitsPerPage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, __jsx(_autocomplete__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }, __jsx(_filter__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    attribute: \"type\",\n    value: vType,\n    setValue: setType,\n    options: typeFilters,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, __jsx(_range__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    attribute: \"mass\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, __jsx(_toggle__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    value: \"unknow\",\n    attribute: \"variability_type\",\n    label: \"Known variability type\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, __jsx(_clear__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    clearsQuery: true,\n    filtersToClear: filtersToClear,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 15\n    }\n  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }))))), __jsx(CustomHits, {\n    staticHits: hits,\n    drawerOpen: drawerOpen,\n    toggleDrawer: toggleDrawer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(AlgoliaContainer, \"IRiJ+q9j8tHGbnhfwOGMImeMAMU=\", false, function () {\n  return [useStyles, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c2 = AlgoliaContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlgoliaContainer);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CustomHits\");\n$RefreshReg$(_c2, \"AlgoliaContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbGdvbGlhL2luc3RhbnRzZWFyY2gudHN4PzVkOGIiXSwibmFtZXMiOlsiQ3VzdG9tSGl0cyIsImNvbm5lY3RIaXRzIiwiU3BhY2VLaXRDb250YWluZXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGl0bGUiLCJjb2xvciIsInBvd2VyZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsInR5cGVGaWx0ZXJzIiwidmFsdWUiLCJsYWJlbCIsIkFsZ29saWFDb250YWluZXIiLCJoaXRzIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwidlR5cGUiLCJzZXRUeXBlIiwiZmlsdGVyc1RvQ2xlYXIiLCJzZXRGaWx0ZXJzQ2xlYXIiLCJkZWZhdWx0U3RlcFZhbHVlIiwiaGl0c1BlclBhZ2UiLCJzZXRIaXRzUGVyUGFnZSIsInVzZUVmZmVjdCIsInNlYXJjaFN0YXRlQ2hhbmdlIiwic2VhcmNoU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJtYXRjaGVzIiwidXNlTWVkaWFRdWVyeSIsInByb2Nlc3MiLCJhbGdvbGlhc2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFXLENBQUNDLDJEQUFELENBQTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBSk1GLFU7QUFLTixJQUFNRyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFBQSxTQUMzQjtBQUNFQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFO0FBREYsS0FEVDtBQUlFQyxXQUFPLEVBQUU7QUFDUEMscUJBQWUsRUFBRSxP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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbEJGLEVBcUJFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBYyxTQUFLLEVBQUUsUUFBckI7QUFBK0IsYUFBUyxFQUFDLGtCQUF6QztBQUE0RCxTQUFLLEVBQUMsd0JBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXJCRixFQXdCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQXdCLGVBQVcsTUFBbkM7QUFBb0Msa0JBQWMsRUFBRVMsY0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBeEJGLEVBMkJFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBM0JGLENBREYsQ0FERixDQVRKLEVBNENJLE1BQUMsVUFBRDtBQUFZLGNBQVUsRUFBRUwsSUFBeEI7QUFBOEIsY0FBVSxFQUFFZSxVQUExQztBQUFzRCxnQkFBWSxFQUFFRSxZQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUNKLENBREY7QUFnREQsQ0F6RUQ7O0dBQU1sQixnQjtVQUNZWixTLEVBc0JBZ0MsdUU7OztNQXZCWnBCLGdCO0FBMkVTQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWxnb2xpYS9pbnN0YW50c2VhcmNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEluc3RhbnRTZWFyY2ggfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XG5pbXBvcnQgeyBJU3BhY2VEYXRhIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zcGFjZSc7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcblxuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcblxuaW1wb3J0IHsgY29ubmVjdEhpdHMgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XG5pbXBvcnQgQ3VzdG9tQXV0b2NvbXBsZXRlIGZyb20gJy4vYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBUeXBvZ3JhcGh5LCBCb3gsIEZhZGV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3VzdG9tUmFuZ2VTbGlkZXIgZnJvbSAnLi9yYW5nZSc7XG5cbmltcG9ydCB7IFBvd2VyZWRCeSB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcbmltcG9ydCB7IENvbmZpZ3VyZSB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcbmltcG9ydCBTcGFjZUtpdENvbnRhaW5lciwgeyBkZWZhdWx0U3RlcFZhbHVlIH0gZnJvbSAnLi4vc3BhY2VraXQvY29udGFpbmVyJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IEN1c3RvbUNsZWFyUmVmaW5lbWVudHMgZnJvbSAnLi9jbGVhcic7XG5pbXBvcnQgR2l0SHViTGluayBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IEN1c3RvbVRvZ2dsZSBmcm9tICcuL3RvZ2dsZSc7XG5pbXBvcnQgSGl0c1NsaWRlciBmcm9tICcuL2hpdHNzbGlkZXInO1xuXG5pbnRlcmZhY2UgSUFsZ29saWFDb250YWluZXJQcm9wcyB7XG4gIGhpdHM6IElTcGFjZURhdGFbXTtcbn1cblxuY29uc3QgQ3VzdG9tSGl0cyA9IGNvbm5lY3RIaXRzKFNwYWNlS2l0Q29udGFpbmVyKTtcbi8qIGNvbnN0IEN1c3RvbUhpdHMgPSBjb25uZWN0SGl0cygocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coJ0hpdHMgcHJvcHMgPT09PicsIHByb3BzLmhpdHMpO1xuICByZXR1cm4gPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDAsIHJpZ2h0OiAwfX0+T0s8L2Rpdj5cbn0pOyAqL1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoXG4gIHtcbiAgICB0aXRsZTrCoHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfSxcbiAgICBwb3dlcmVkOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbiAgfVxuKSk7XG5cbi8vIEknbSBoYXJkIGZpbHRlcmluZyBvbiBwdXJwb3NlIC0gZGlkIG5vdCBmaW5kIGhvdyB0byBnZXQgdGhlIGZvbGxvd2luZyBBcnJheSB0aHJvdWdoIEFQSS4gXG5jb25zdCB0eXBlRmlsdGVycyA9IFtcbiAge3ZhbHVlOiBcIlwiLCBsYWJlbDogXCJBbGxcIn0sXG4gIHt2YWx1ZTogXCJTdGVsbGFyXCIsIGxhYmVsOiBcIlN0ZWxsYXJcIn0sXG4gIHt2YWx1ZTogXCJHYWxheHlcIiwgbGFiZWw6IFwiR2FsYXh5XCJ9LFxuICB7dmFsdWU6IFwiVW5rbm93XCIsIGxhYmVsOiBcIlVua25vd1wifSxcbl07XG5cbmNvbnN0IEFsZ29saWFDb250YWluZXI6IE5leHRQYWdlPElBbGdvbGlhQ29udGFpbmVyUHJvcHM+ID0gKHtoaXRzfSkgPT7CoHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt2VHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2ZpbHRlcnNUb0NsZWFyLCBzZXRGaWx0ZXJzQ2xlYXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2hpdHNQZXJQYWdlLCBzZXRIaXRzUGVyUGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KGRlZmF1bHRTdGVwVmFsdWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZUeXBlKcKge1xuICAgICAgc2V0RmlsdGVyc0NsZWFyKCgpID0+ICgpID0+IHsgc2V0VHlwZSgnJyk7IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcnNDbGVhcihudWxsKTtcbiAgICB9XG4gIH0sIFt2VHlwZV0pO1xuXG4gIGNvbnN0IHNlYXJjaFN0YXRlQ2hhbmdlID0gKHNlYXJjaFN0YXRlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NlYXJjaFN0YXRlQ2hhbmdlID09PT4nLCBzZWFyY2hTdGF0ZSk7XG4gICAgLy8gVE9ETyAtPiBkeW5hbWljIHJvdXRpbmcgc28gd2UgY2FuIHNoYXJlIHNlYXJjaCBwYXJhbXNcbiAgfVxuXG4gIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiBzZXREcmF3ZXJPcGVuKCFkcmF3ZXJPcGVuKTtcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkoJyhtaW4td2lkdGg6NjAwcHgpJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5zdGFudFNlYXJjaFxuICAgICAgaW5kZXhOYW1lPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTEdPTElBX0lOREVYX05BTUV9XG4gICAgICBzZWFyY2hDbGllbnQ9e2FsZ29saWFzZWFyY2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxHT0xJQV9BUFBfSUQsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMR09MSUFfUFVCTElDX0tFWSl9XG4gICAgICBvblNlYXJjaFN0YXRlQ2hhbmdlPXtzZWFyY2hTdGF0ZUNoYW5nZX1cbiAgICA+XG4gICAgICA8Q29uZmlndXJlXG4gICAgICAgIGZpbHRlcnM9e3ZUeXBlID8gYHR5cGU6JHt2VHlwZX1gIDogJyd9XG4gICAgICAgIGhpdHNQZXJQYWdlPXtoaXRzUGVyUGFnZX1cbiAgICAgIC8+XG4gICAgICAgIDxGYWRlIGluPXtkcmF3ZXJPcGVufT5cbiAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBtaW5XaWR0aD17bWF0Y2hlcyA/ICc0MDBweCcgOiAnMTAwJSd9IGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiIGFyaWEtbGFiZWw9XCJzZWFyY2ggbGlzdFwiPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgICBHYWlhIEV4cGxvcmVyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPFBvd2VyZWRCeSBjbGFzc05hbWU9e2NsYXNzZXMucG93ZXJlZH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxIaXRzU2xpZGVyIHNldEhpdHNQZXJQYWdlPXtzZXRIaXRzUGVyUGFnZX0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxDdXN0b21BdXRvY29tcGxldGUgLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXIgYXR0cmlidXRlPVwidHlwZVwiIHZhbHVlPXt2VHlwZX0gc2V0VmFsdWU9e3NldFR5cGV9IG9wdGlvbnM9e3R5cGVGaWx0ZXJzfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbVJhbmdlU2xpZGVyIGF0dHJpYnV0ZT1cIm1hc3NcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPEN1c3RvbVRvZ2dsZSB2YWx1ZT17XCJ1bmtub3dcIn0gYXR0cmlidXRlPVwidmFyaWFiaWxpdHlfdHlwZVwiIGxhYmVsPVwiS25vd24gdmFyaWFiaWxpdHkgdHlwZVwiIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tQ2xlYXJSZWZpbmVtZW50cyBjbGVhcnNRdWVyeSBmaWx0ZXJzVG9DbGVhcj17ZmlsdGVyc1RvQ2xlYXJ9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8R2l0SHViTGluayAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDxDdXN0b21IaXRzIHN0YXRpY0hpdHM9e2hpdHN9IGRyYXdlck9wZW49e2RyYXdlck9wZW59IHRvZ2dsZURyYXdlcj17dG9nZ2xlRHJhd2VyfSAvPlxuICAgIDwvSW5zdGFudFNlYXJjaD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGdvbGlhQ29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/algolia/instantsearch.tsx\n");

/***/ })

})