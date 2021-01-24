webpackHotUpdate_N_E(1,{

/***/ "./components/spacekit/planetDialog.tsx":
/*!**********************************************!*\
  !*** ./components/spacekit/planetDialog.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/esm/List/index.js\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"./node_modules/@material-ui/core/esm/DialogTitle/index.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/esm/Dialog/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/spacekit/planetDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({});\n\nvar PlanetDialog = function PlanetDialog(props) {\n  _s();\n\n  var classes = useStyles();\n  var onClose = props.onClose,\n      open = props.open,\n      data = props.data;\n\n  var handleClose = function handleClose() {\n    onClose(null);\n  };\n\n  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    hideBackdrop: true,\n    onClose: handleClose,\n    \"aria-labelledby\": \"simple-dialog-title\",\n    open: open,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    id: \"simple-dialog-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"DIALOG TITLE\"), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dense: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"DIALOG\", JSON.stringify(data), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItemText\"], {\n    primary: \"PRIMARY ROW\",\n    secondary: \"SECONDARY ROW\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(PlanetDialog, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = PlanetDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlanetDialog);\n\nvar _c;\n\n$RefreshReg$(_c, \"PlanetDialog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGFjZWtpdC9wbGFuZXREaWFsb2cudHN4PzEzNTIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIlBsYW5ldERpYWxvZyIsInByb3BzIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvcGVuIiwiZGF0YSIsImhhbmRsZUNsb3NlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxFQUFELENBQTVCOztBQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBOEI7QUFBQTs7QUFDakQsTUFBTUMsT0FBTyxHQUFHSixTQUFTLEVBQXpCO0FBRGlELE1BRXpDSyxPQUZ5QyxHQUVqQkYsS0FGaUIsQ0FFekNFLE9BRnlDO0FBQUEsTUFFaENDLElBRmdDLEdBRWpCSCxLQUZpQixDQUVoQ0csSUFGZ0M7QUFBQSxNQUUxQkMsSUFGMEIsR0FFakJKLEtBRmlCLENBRTFCSSxJQUYwQjs7QUFJakQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkgsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLGdFQUFEO0FBQVEsZ0JBQVksRUFBRSxJQUF0QjtBQUE0QixXQUFPLEVBQUVHLFdBQXJDO0FBQWtELHVCQUFnQixxQkFBbEU7QUFBd0YsUUFBSSxFQUFFRixJQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFhLE1BQUUsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVHRyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixDQUZILEVBR0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFjLFdBQU8sRUFBQyxhQUF0QjtBQUFvQyxhQUFTLEVBQUMsZUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsQ0FGRixDQURGO0FBWUQsQ0FwQkQ7O0dBQU1MLFk7VUFDWUYsUzs7O0tBRFpFLFk7QUFzQlNBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zcGFjZWtpdC9wbGFuZXREaWFsb2cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVEaWFsb2dQcm9wcyB7XG4gIG9wZW46IGJvb2xlYW47XG4gIGRhdGE6IGFueTtcbiAgb25DbG9zZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFBsYW5ldERpYWxvZyA9IChwcm9wczogU2ltcGxlRGlhbG9nUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IG9uQ2xvc2UsIG9wZW4sIGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIGhpZGVCYWNrZHJvcD17dHJ1ZX0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuPXtvcGVufT5cbiAgICAgIDxEaWFsb2dUaXRsZSBpZD1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIj5ESUFMT0cgVElUTEU8L0RpYWxvZ1RpdGxlPlxuICAgICAgPExpc3QgZGVuc2U+XG4gICAgICAgIERJQUxPR1xuICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQUklNQVJZIFJPV1wiIHNlY29uZGFyeT1cIlNFQ09OREFSWSBST1dcIi8+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW5ldERpYWxvZzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/spacekit/planetDialog.tsx\n");

/***/ })

})