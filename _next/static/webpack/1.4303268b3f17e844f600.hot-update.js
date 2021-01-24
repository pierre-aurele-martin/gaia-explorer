webpackHotUpdate_N_E(1,{

/***/ "./components/slider.tsx":
/*!*******************************!*\
  !*** ./components/slider.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Slider */ \"./node_modules/@material-ui/core/esm/Slider/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/slider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    width: '100%'\n  },\n  container: {\n    paddingTop: '15px'\n  },\n  typography: {\n    color: '#FFF'\n  }\n});\n\nvar valuetext = function valuetext(value) {\n  return \"\".concat(value);\n};\n\nvar DataSlider = function DataSlider(props) {\n  _s();\n\n  var defaultValue = props.defaultValue,\n      step = props.step,\n      min = props.min,\n      max = props.max;\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    className: classes.container,\n    fixed: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: classes.typography,\n    id: \"continuous-slider\",\n    gutterBottom: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Elements displayed:\"), __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    defaultValue: defaultValue,\n    getAriaValueText: valuetext,\n    \"aria-labelledby\": \"number-elements-to-display\",\n    step: step,\n    marks: true,\n    min: min,\n    max: max,\n    valueLabelDisplay: \"auto\",\n    onChange: function onChange(value) {\n      return console.log('value');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(DataSlider, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = DataSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataSlider);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataSlider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXIudHN4P2YxNjUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImNvbnRhaW5lciIsInBhZGRpbmdUb3AiLCJ0eXBvZ3JhcGh5IiwiY29sb3IiLCJ2YWx1ZXRleHQiLCJ2YWx1ZSIsIkRhdGFTbGlkZXIiLCJwcm9wcyIsImRlZmF1bHRWYWx1ZSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxVQUROO0FBRUpDLE9BQUcsRUFBRSxDQUZEO0FBR0pDLFFBQUksRUFBRSxDQUhGO0FBSUpDLFNBQUssRUFBRTtBQUpILEdBRHFCO0FBTzNCQyxXQUFTLEVBQUU7QUFDVEMsY0FBVSxFQUFFO0FBREgsR0FQZ0I7QUFVM0JDLFlBQVUsRUFBRTtBQUNWQyxTQUFLLEVBQUU7QUFERztBQVZlLENBQUQsQ0FBNUI7O0FBc0JBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBbUI7QUFDbkMsbUJBQVVBLEtBQVY7QUFDRCxDQUZEOztBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBNEI7QUFBQTs7QUFBQSxNQUN0Q0MsWUFEc0MsR0FDTkQsS0FETSxDQUN0Q0MsWUFEc0M7QUFBQSxNQUN4QkMsSUFEd0IsR0FDTkYsS0FETSxDQUN4QkUsSUFEd0I7QUFBQSxNQUNsQkMsR0FEa0IsR0FDTkgsS0FETSxDQUNsQkcsR0FEa0I7QUFBQSxNQUNiQyxHQURhLEdBQ05KLEtBRE0sQ0FDYkksR0FEYTtBQUU3QyxNQUFNQyxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ2pCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsYUFBUyxFQUFFaUIsT0FBTyxDQUFDWixTQUE5QjtBQUF5QyxTQUFLLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksYUFBUyxFQUFFWSxPQUFPLENBQUNWLFVBQS9CO0FBQTJDLE1BQUUsRUFBQyxtQkFBOUM7QUFBa0UsZ0JBQVksTUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUlFLE1BQUMsZ0VBQUQ7QUFDSSxnQkFBWSxFQUFFTSxZQURsQjtBQUVJLG9CQUFnQixFQUFFSixTQUZ0QjtBQUdJLHVCQUFnQiw0QkFIcEI7QUFJSSxRQUFJLEVBQUVLLElBSlY7QUFLSSxTQUFLLE1BTFQ7QUFNSSxPQUFHLEVBQUVDLEdBTlQ7QUFPSSxPQUFHLEVBQUVDLEdBUFQ7QUFRSSxxQkFBaUIsRUFBQyxNQVJ0QjtBQVNJLFlBQVEsRUFBRSxrQkFBQ04sS0FBRDtBQUFBLGFBQVdRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FBWDtBQUFBLEtBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0FERjtBQW9CRCxDQXhCRDs7R0FBTVIsVTtVQUVZYixTOzs7S0FGWmEsVTtBQTBCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NsaWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBjb250YWluZXI6wqB7XG4gICAgcGFkZGluZ1RvcDogJzE1cHgnXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBjb2xvcjogJyNGRkYnXG4gIH1cbn0pO1xuXG5pbnRlcmZhY2UgRGF0YVNsaWRlclByb3BzIHtcbiAgZGVmYXVsdFZhbHVlOiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xufVxuXG5jb25zdCB2YWx1ZXRleHQgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICByZXR1cm4gYCR7dmFsdWV9YDtcbn1cblxuY29uc3QgRGF0YVNsaWRlciA9IChwcm9wczogRGF0YVNsaWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHtkZWZhdWx0VmFsdWUsIHN0ZXAsIG1pbiwgbWF4fSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gZml4ZWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fSBpZD1cImNvbnRpbnVvdXMtc2xpZGVyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIEVsZW1lbnRzIGRpc3BsYXllZDogXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICBnZXRBcmlhVmFsdWVUZXh0PXt2YWx1ZXRleHR9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJudW1iZXItZWxlbWVudHMtdG8tZGlzcGxheVwiXG4gICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgbWFya3NcbiAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT1cImF1dG9cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gY29uc29sZS5sb2coJ3ZhbHVlJyl9XG4gICAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhU2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/slider.tsx\n");

/***/ })

})