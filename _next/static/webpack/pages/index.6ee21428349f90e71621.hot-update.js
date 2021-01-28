webpackHotUpdate_N_E("pages/index",{

/***/ "./components/algolia/pages.tsx":
/*!**************************************!*\
  !*** ./components/algolia/pages.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ \"./node_modules/react-instantsearch-dom/dist/es/index.js\");\n/* harmony import */ var _css_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/button */ \"./components/css/button.tsx\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/algolia/pages.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Paging = function Paging(_ref) {\n  _s();\n\n  var currentRefinement = _ref.currentRefinement,\n      nbPages = _ref.nbPages,\n      refine = _ref.refine;\n  // hitsPerPAge: 1000, I got 7K+ objects but nbPages is 2 ? Strange...\n  console.log('PAging ===>', currentRefinement, nbPages);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      pages = _useState[0],\n      setPages = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // Algolia should do that alone like a big boy - or I missed something ?\n    if (currentRefinement > nbPages) {\n      return refine(1);\n    }\n\n    var pages = [];\n\n    if (nbPages > 9 && currentRefinement > 5 && currentRefinement + 5 < nbPages) {\n      console.log('PAGE 1'); // currentRefinement: 96\n\n      for (var i = currentRefinement - 4; i < currentRefinement + 4; i++) {\n        pages.push(i);\n      }\n    } else if (nbPages > 9 && currentRefinement > 5) {\n      console.log('PAGE 2');\n\n      for (var _i = nbPages - currentRefinement - 1; _i < nbPages; _i++) {\n        pages.push(_i);\n      }\n    } else {\n      console.log('PAGE 3');\n\n      for (var _i2 = 0; _i2 < (nbPages > 9 ? 9 : nbPages); _i2++) {\n        pages.push(_i2 + 1);\n      }\n    }\n\n    setPages(pages);\n  }, [currentRefinement, nbPages]);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ButtonGroup\"], {\n    \"aria-label\": \"paging\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, pages.map(function (page) {\n    return __jsx(_css_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      className: page === currentRefinement ? 'selected' : '',\n      onClick: function onClick(_) {\n        return refine(page);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 16\n      }\n    }, page);\n  }));\n};\n\n_s(Paging, \"OZdSfBS7sFhYlewtmEOlG7gcNNI=\");\n\n_c = Paging;\nvar CustomPaging = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__[\"connectPagination\"])(Paging);\n_c2 = CustomPaging;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomPaging);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Paging\");\n$RefreshReg$(_c2, \"CustomPaging\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbGdvbGlhL3BhZ2VzLnRzeD9lODI2Il0sIm5hbWVzIjpbIlBhZ2luZyIsImN1cnJlbnRSZWZpbmVtZW50IiwibmJQYWdlcyIsInJlZmluZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInBhZ2VzIiwic2V0UGFnZXMiLCJ1c2VFZmZlY3QiLCJpIiwicHVzaCIsIm1hcCIsInBhZ2UiLCJfIiwiQ3VzdG9tUGFnaW5nIiwiY29ubmVjdFBhZ2luYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTBDO0FBQUE7O0FBQUEsTUFBeENDLGlCQUF3QyxRQUF4Q0EsaUJBQXdDO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUN2RDtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSixpQkFBM0IsRUFBOENDLE9BQTlDOztBQUh1RCxrQkFLN0JJLHNEQUFRLENBQVcsRUFBWCxDQUxxQjtBQUFBLE1BS2hEQyxLQUxnRDtBQUFBLE1BS3pDQyxRQUx5Qzs7QUFNdkRDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSVIsaUJBQWlCLEdBQUdDLE9BQXhCLEVBQWlDO0FBQy9CLGFBQU9DLE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDRDs7QUFDRCxRQUFJSSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxRQUFJTCxPQUFPLEdBQUcsQ0FBVixJQUFlRCxpQkFBaUIsR0FBRyxDQUFuQyxJQUF5Q0EsaUJBQWlCLEdBQUcsQ0FBckIsR0FBMEJDLE9BQXRFLEVBQStFO0FBQzdFRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBRDZFLENBRTdFOztBQUNBLFdBQUssSUFBSUssQ0FBQyxHQUFJVCxpQkFBaUIsR0FBRyxDQUFsQyxFQUFzQ1MsQ0FBQyxHQUFJVCxpQkFBaUIsR0FBRyxDQUEvRCxFQUFtRVMsQ0FBQyxFQUFwRSxFQUF3RTtBQUN0RUgsYUFBSyxDQUFDSSxJQUFOLENBQVdELENBQVg7QUFDRDtBQUNGLEtBTkQsTUFNTyxJQUFHUixPQUFPLEdBQUcsQ0FBVixJQUFlRCxpQkFBaUIsR0FBRyxDQUF0QyxFQUF5QztBQUM5Q0csYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFDQSxXQUFLLElBQUlLLEVBQUMsR0FBSVIsT0FBTyxHQUFHRCxpQkFBVixHQUE4QixDQUE1QyxFQUFnRFMsRUFBQyxHQUFJUixPQUFyRCxFQUErRFEsRUFBQyxFQUFoRSxFQUFvRTtBQUNsRUgsYUFBSyxDQUFDSSxJQUFOLENBQVdELEVBQVg7QUFDRDtBQUNGLEtBTE0sTUFLQTtBQUNMTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLFdBQUssSUFBSUssR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsSUFBSVIsT0FBTyxHQUFHLENBQVYsR0FBYyxDQUFkLEdBQWtCQSxPQUF0QixDQUFqQixFQUFpRFEsR0FBQyxFQUFsRCxFQUFzRDtBQUNwREgsYUFBSyxDQUFDSSxJQUFOLENBQVlELEdBQUMsR0FBRyxDQUFoQjtBQUNEO0FBQ0Y7O0FBQ0RGLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0QsR0F4QlEsRUF3Qk4sQ0FBQ04saUJBQUQsRUFBb0JDLE9BQXBCLENBeEJNLENBQVQ7QUEwQkEsU0FDRSxNQUFDLDZEQUFEO0FBQWEsa0JBQVcsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSyxLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsV0FBTyxNQUFDLG1EQUFEO0FBQWMsZUFBUyxFQUFFQSxJQUFJLEtBQUtaLGlCQUFULEdBQTZCLFVBQTdCLEdBQTBDLEVBQW5FO0FBQXVFLGFBQU8sRUFBRSxpQkFBQ2EsQ0FBRDtBQUFBLGVBQU9YLE1BQU0sQ0FBQ1UsSUFBRCxDQUFiO0FBQUEsT0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzR0EsSUFBdEcsQ0FBUDtBQUNELEdBRkEsQ0FESCxDQURGO0FBT0QsQ0F2Q0Q7O0dBQU1iLE07O0tBQUFBLE07QUF5Q04sSUFBTWUsWUFBWSxHQUFHQyxpRkFBaUIsQ0FBQ2hCLE1BQUQsQ0FBdEM7TUFBTWUsWTtBQUNTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWxnb2xpYS9wYWdlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNvbm5lY3RQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xuaW1wb3J0IFN0eWxlZEJ1dHRvbiBmcm9tICcuLi9jc3MvYnV0dG9uJztcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGFnaW5nID0gKHtjdXJyZW50UmVmaW5lbWVudCwgbmJQYWdlcywgcmVmaW5lfSkgPT4ge1xuICAvLyBoaXRzUGVyUEFnZTogMTAwMCwgSSBnb3QgN0srIG9iamVjdHMgYnV0IG5iUGFnZXMgaXMgMiA/IFN0cmFuZ2UuLi5cblxuICBjb25zb2xlLmxvZygnUEFnaW5nID09PT4nLCBjdXJyZW50UmVmaW5lbWVudCwgbmJQYWdlcyk7XG4gIFxuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBbGdvbGlhIHNob3VsZCBkbyB0aGF0IGFsb25lIGxpa2UgYSBiaWcgYm95IC0gb3IgSSBtaXNzZWQgc29tZXRoaW5nID9cbiAgICBpZiAoY3VycmVudFJlZmluZW1lbnQgPiBuYlBhZ2VzKcKge1xuICAgICAgcmV0dXJuIHJlZmluZSgxKTtcbiAgICB9XG4gICAgbGV0IHBhZ2VzID0gW107XG4gICAgaWYgKG5iUGFnZXMgPiA5ICYmIGN1cnJlbnRSZWZpbmVtZW50ID4gNSAmJiAoY3VycmVudFJlZmluZW1lbnQgKyA1KSA8IG5iUGFnZXMpwqB7XG4gICAgICBjb25zb2xlLmxvZygnUEFHRSAxJylcbiAgICAgIC8vIGN1cnJlbnRSZWZpbmVtZW50OiA5NlxuICAgICAgZm9yIChsZXQgaSA9IChjdXJyZW50UmVmaW5lbWVudCAtIDQpOyBpIDwgKGN1cnJlbnRSZWZpbmVtZW50ICsgNCk7IGkrKynCoHtcbiAgICAgICAgcGFnZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobmJQYWdlcyA+IDkgJiYgY3VycmVudFJlZmluZW1lbnQgPiA1KSB7XG4gICAgICBjb25zb2xlLmxvZygnUEFHRSAyJylcbiAgICAgIGZvciAobGV0IGkgPSAobmJQYWdlcyAtIGN1cnJlbnRSZWZpbmVtZW50IC0gMSk7IGkgPCAobmJQYWdlcyk7IGkrKynCoHtcbiAgICAgICAgcGFnZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1BBR0UgMycpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChuYlBhZ2VzID4gOSA/IDkgOiBuYlBhZ2VzKTsgaSsrKcKge1xuICAgICAgICBwYWdlcy5wdXNoKChpICsgMSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRQYWdlcyhwYWdlcyk7XG4gIH0sIFtjdXJyZW50UmVmaW5lbWVudCwgbmJQYWdlc10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cCBhcmlhLWxhYmVsPVwicGFnaW5nXCI+XG4gICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiB7XG4gICAgICAgIHJldHVybiA8U3R5bGVkQnV0dG9uIGNsYXNzTmFtZT17cGFnZSA9PT0gY3VycmVudFJlZmluZW1lbnQgPyAnc2VsZWN0ZWQnIDogJyd9IG9uQ2xpY2s9eyhfKSA9PiByZWZpbmUocGFnZSl9PntwYWdlfTwvU3R5bGVkQnV0dG9uPjtcbiAgICAgIH0pfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gICk7XG59XG5cbmNvbnN0IEN1c3RvbVBhZ2luZyA9IGNvbm5lY3RQYWdpbmF0aW9uKFBhZ2luZyk7XG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWdpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/algolia/pages.tsx\n");

/***/ })

})