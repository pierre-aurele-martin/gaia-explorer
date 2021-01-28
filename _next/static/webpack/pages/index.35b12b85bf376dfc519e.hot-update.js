webpackHotUpdate_N_E("pages/index",{

/***/ "./components/algolia/pages.tsx":
/*!**************************************!*\
  !*** ./components/algolia/pages.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ \"./node_modules/react-instantsearch-dom/dist/es/index.js\");\n/* harmony import */ var _css_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/button */ \"./components/css/button.tsx\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/algolia/pages.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Paging = function Paging(_ref) {\n  _s();\n\n  var currentRefinement = _ref.currentRefinement,\n      nbPages = _ref.nbPages,\n      refine = _ref.refine;\n  // hitsPerPAge: 1000, I got 7K+ objects but nbPages is 2 ? Strange...\n  console.log('PAging ===>', currentRefinement, nbPages);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      pages = _useState[0],\n      setPages = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // Algolia should do that alone like a big boy - or I missed something ?\n    if (currentRefinement > nbPages) {\n      return refine(1);\n    }\n\n    var pages = []; // currentRefinement: 96 nbPages: 100\n\n    if (nbPages > 9 && currentRefinement > 5 && currentRefinement + 5 < nbPages) {\n      console.log('PAGE 1');\n\n      for (var i = currentRefinement - 4; i < currentRefinement + 4; i++) {\n        pages.push(i);\n      }\n    } else if (nbPages > 9 && currentRefinement > 5) {\n      console.log('PAGE 2'); // for (i = 100 - 96 - 1); i < 101; i++\n      // i = 4; i< 100; i++\n      // i = 4;\n\n      for (var _i = nbPages - 10; _i <= nbPages; _i++) {\n        pages.push(_i);\n      }\n    } else {\n      console.log('PAGE 3');\n\n      for (var _i2 = 0; _i2 < (nbPages > 9 ? 9 : nbPages); _i2++) {\n        pages.push(_i2 + 1);\n      }\n    }\n\n    setPages(pages);\n  }, [currentRefinement, nbPages]);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ButtonGroup\"], {\n    \"aria-label\": \"paging\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, pages.map(function (page) {\n    return __jsx(_css_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      className: page === currentRefinement ? 'selected' : '',\n      onClick: function onClick(_) {\n        return refine(page);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 16\n      }\n    }, page);\n  }));\n};\n\n_s(Paging, \"OZdSfBS7sFhYlewtmEOlG7gcNNI=\");\n\n_c = Paging;\nvar CustomPaging = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__[\"connectPagination\"])(Paging);\n_c2 = CustomPaging;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomPaging);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Paging\");\n$RefreshReg$(_c2, \"CustomPaging\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbGdvbGlhL3BhZ2VzLnRzeD9lODI2Il0sIm5hbWVzIjpbIlBhZ2luZyIsImN1cnJlbnRSZWZpbmVtZW50IiwibmJQYWdlcyIsInJlZmluZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInBhZ2VzIiwic2V0UGFnZXMiLCJ1c2VFZmZlY3QiLCJpIiwicHVzaCIsIm1hcCIsInBhZ2UiLCJfIiwiQ3VzdG9tUGFnaW5nIiwiY29ubmVjdFBhZ2luYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTBDO0FBQUE7O0FBQUEsTUFBeENDLGlCQUF3QyxRQUF4Q0EsaUJBQXdDO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUN2RDtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSixpQkFBM0IsRUFBOENDLE9BQTlDOztBQUh1RCxrQkFLN0JJLHNEQUFRLENBQVcsRUFBWCxDQUxxQjtBQUFBLE1BS2hEQyxLQUxnRDtBQUFBLE1BS3pDQyxRQUx5Qzs7QUFNdkRDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSVIsaUJBQWlCLEdBQUdDLE9BQXhCLEVBQWlDO0FBQy9CLGFBQU9DLE1BQU0sQ0FBQyxDQUFELENBQWI7QUFDRDs7QUFDRCxRQUFJSSxLQUFLLEdBQUcsRUFBWixDQUxjLENBT2Q7O0FBQ0EsUUFBSUwsT0FBTyxHQUFHLENBQVYsSUFBZUQsaUJBQWlCLEdBQUcsQ0FBbkMsSUFBeUNBLGlCQUFpQixHQUFHLENBQXJCLEdBQTBCQyxPQUF0RSxFQUErRTtBQUM3RUUsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFFQSxXQUFLLElBQUlLLENBQUMsR0FBSVQsaUJBQWlCLEdBQUcsQ0FBbEMsRUFBc0NTLENBQUMsR0FBSVQsaUJBQWlCLEdBQUcsQ0FBL0QsRUFBbUVTLENBQUMsRUFBcEUsRUFBd0U7QUFDdEVILGFBQUssQ0FBQ0ksSUFBTixDQUFXRCxDQUFYO0FBQ0Q7QUFDRixLQU5ELE1BTU8sSUFBR1IsT0FBTyxHQUFHLENBQVYsSUFBZUQsaUJBQWlCLEdBQUcsQ0FBdEMsRUFBeUM7QUFDOUNHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFEOEMsQ0FFOUM7QUFDQTtBQUNBOztBQUNBLFdBQUssSUFBSUssRUFBQyxHQUFJUixPQUFPLEdBQUcsRUFBeEIsRUFBNkJRLEVBQUMsSUFBS1IsT0FBbkMsRUFBNkNRLEVBQUMsRUFBOUMsRUFBa0Q7QUFDaERILGFBQUssQ0FBQ0ksSUFBTixDQUFXRCxFQUFYO0FBQ0Q7QUFDRixLQVJNLE1BUUE7QUFDTE4sYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7QUFDQSxXQUFLLElBQUlLLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLElBQUlSLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsT0FBdEIsQ0FBakIsRUFBaURRLEdBQUMsRUFBbEQsRUFBc0Q7QUFDcERILGFBQUssQ0FBQ0ksSUFBTixDQUFZRCxHQUFDLEdBQUcsQ0FBaEI7QUFDRDtBQUNGOztBQUNERixZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEdBN0JRLEVBNkJOLENBQUNOLGlCQUFELEVBQW9CQyxPQUFwQixDQTdCTSxDQUFUO0FBK0JBLFNBQ0UsTUFBQyw2REFBRDtBQUFhLGtCQUFXLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ssS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLFdBQU8sTUFBQyxtREFBRDtBQUFjLGVBQVMsRUFBRUEsSUFBSSxLQUFLWixpQkFBVCxHQUE2QixVQUE3QixHQUEwQyxFQUFuRTtBQUF1RSxhQUFPLEVBQUUsaUJBQUNhLENBQUQ7QUFBQSxlQUFPWCxNQUFNLENBQUNVLElBQUQsQ0FBYjtBQUFBLE9BQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0dBLElBQXRHLENBQVA7QUFDRCxHQUZBLENBREgsQ0FERjtBQU9ELENBNUNEOztHQUFNYixNOztLQUFBQSxNO0FBOENOLElBQU1lLFlBQVksR0FBR0MsaUZBQWlCLENBQUNoQixNQUFELENBQXRDO01BQU1lLFk7QUFDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2FsZ29saWEvcGFnZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjb25uZWN0UGFnaW5hdGlvbiB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcbmltcG9ydCBTdHlsZWRCdXR0b24gZnJvbSAnLi4vY3NzL2J1dHRvbic7XG5pbXBvcnQgeyBCdXR0b25Hcm91cCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2luZyA9ICh7Y3VycmVudFJlZmluZW1lbnQsIG5iUGFnZXMsIHJlZmluZX0pID0+IHtcbiAgLy8gaGl0c1BlclBBZ2U6IDEwMDAsIEkgZ290IDdLKyBvYmplY3RzIGJ1dCBuYlBhZ2VzIGlzIDIgPyBTdHJhbmdlLi4uXG5cbiAgY29uc29sZS5sb2coJ1BBZ2luZyA9PT0+JywgY3VycmVudFJlZmluZW1lbnQsIG5iUGFnZXMpO1xuICBcbiAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWxnb2xpYSBzaG91bGQgZG8gdGhhdCBhbG9uZSBsaWtlIGEgYmlnIGJveSAtIG9yIEkgbWlzc2VkIHNvbWV0aGluZyA/XG4gICAgaWYgKGN1cnJlbnRSZWZpbmVtZW50ID4gbmJQYWdlcynCoHtcbiAgICAgIHJldHVybiByZWZpbmUoMSk7XG4gICAgfVxuICAgIGxldCBwYWdlcyA9IFtdO1xuXG4gICAgLy8gY3VycmVudFJlZmluZW1lbnQ6IDk2IG5iUGFnZXM6IDEwMFxuICAgIGlmIChuYlBhZ2VzID4gOSAmJiBjdXJyZW50UmVmaW5lbWVudCA+IDUgJiYgKGN1cnJlbnRSZWZpbmVtZW50ICsgNSkgPCBuYlBhZ2VzKcKge1xuICAgICAgY29uc29sZS5sb2coJ1BBR0UgMScpXG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAoY3VycmVudFJlZmluZW1lbnQgLSA0KTsgaSA8IChjdXJyZW50UmVmaW5lbWVudCArIDQpOyBpKyspwqB7XG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKG5iUGFnZXMgPiA5ICYmIGN1cnJlbnRSZWZpbmVtZW50ID4gNSkge1xuICAgICAgY29uc29sZS5sb2coJ1BBR0UgMicpXG4gICAgICAvLyBmb3IgKGkgPSAxMDAgLSA5NiAtIDEpOyBpIDwgMTAxOyBpKytcbiAgICAgIC8vIGkgPSA0OyBpPCAxMDA7IGkrK1xuICAgICAgLy8gaSA9IDQ7XG4gICAgICBmb3IgKGxldCBpID0gKG5iUGFnZXMgLSAxMCk7IGkgPD0gKG5iUGFnZXMpOyBpKyspwqB7XG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQQUdFIDMnKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAobmJQYWdlcyA+IDkgPyA5IDogbmJQYWdlcyk7IGkrKynCoHtcbiAgICAgICAgcGFnZXMucHVzaCgoaSArIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0UGFnZXMocGFnZXMpO1xuICB9LCBbY3VycmVudFJlZmluZW1lbnQsIG5iUGFnZXNdKVxuICBcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXAgYXJpYS1sYWJlbD1cInBhZ2luZ1wiPlxuICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICByZXR1cm4gPFN0eWxlZEJ1dHRvbiBjbGFzc05hbWU9e3BhZ2UgPT09IGN1cnJlbnRSZWZpbmVtZW50ID8gJ3NlbGVjdGVkJyA6ICcnfSBvbkNsaWNrPXsoXykgPT4gcmVmaW5lKHBhZ2UpfT57cGFnZX08L1N0eWxlZEJ1dHRvbj47XG4gICAgICB9KX1cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufVxuXG5jb25zdCBDdXN0b21QYWdpbmcgPSBjb25uZWN0UGFnaW5hdGlvbihQYWdpbmcpO1xuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFnaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/algolia/pages.tsx\n");

/***/ })

})