webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    }\n  });\n});\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/spacekit/container */ \"./components/spacekit/container.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/spacekit/container */ \"./components/spacekit/container.tsx\")];\n    },\n    modules: ['../components/spacekit/container']\n  }\n});\n_c2 = DynamicComponent;\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s1 = _useState[0],\n      setS1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s2 = _useState2[0],\n      setS2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s3 = _useState3[0],\n      setS3 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      ready = _useState4[0],\n      setReady = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    s1 && s2 && s3 ? setReady(true) : null;\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var scripts = [{\n      src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js',\n      onLoad: setS1\n    }, {\n      src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js',\n      onLoad: setS2\n    }, {\n      src: \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\"),\n      onLoad: setS3\n    }];\n\n    var _loop = function _loop() {\n      var _scripts$_i = _scripts[_i],\n          src = _scripts$_i.src,\n          onLoad = _scripts$_i.onLoad;\n      var s = document.createElement('script');\n      s.setAttribute('src', src);\n      s.async = true;\n\n      s.onload = function () {\n        return onLoad(true);\n      };\n\n      document.head.appendChild(s);\n    };\n\n    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {\n      _loop();\n    }\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, ready ? __jsx(DynamicComponent, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 18\n    }\n  }) : 'LOADING'));\n};\n\n_s(IndexPage, \"tbo7Rz06MK78ezRI3uMAplgejnc=\", false, function () {\n  return [useStyles];\n});\n\n_c3 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DynamicComponent$dynamic\");\n$RefreshReg$(_c2, \"DynamicComponent\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsIkR5bmFtaWNDb21wb25lbnQiLCJkeW5hbWljIiwiSW5kZXhQYWdlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiczEiLCJzZXRTMSIsInMyIiwic2V0UzIiLCJzMyIsInNldFMzIiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZUVmZmVjdCIsInNjcmlwdHMiLCJzcmMiLCJvbkxvYWQiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXN5bmMiLCJvbmxvYWQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE47QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBUUEsSUFBTUMsZ0JBQWdCLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDRKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyw2RUFBZDtBQUFBO0FBQUEsY0FBYyxrQ0FBZDtBQUFBO0FBQUEsRUFBaEM7TUFBTUQsZ0I7O0FBRU4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7O0FBRHNCLGtCQUdGUyxzREFBUSxDQUFVLEtBQVYsQ0FITjtBQUFBLE1BR2ZDLEVBSGU7QUFBQSxNQUdYQyxLQUhXOztBQUFBLG1CQUlGRixzREFBUSxDQUFVLEtBQVYsQ0FKTjtBQUFBLE1BSWZHLEVBSmU7QUFBQSxNQUlYQyxLQUpXOztBQUFBLG1CQUtGSixzREFBUSxDQUFVLEtBQVYsQ0FMTjtBQUFBLE1BS2ZLLEVBTGU7QUFBQSxNQUtYQyxLQUxXOztBQUFBLG1CQU1JTixzREFBUSxDQUFVLEtBQVYsQ0FOWjtBQUFBLE1BTWZPLEtBTmU7QUFBQSxNQU1SQyxRQU5ROztBQVF0QkMseURBQVMsQ0FBQyxZQUFNO0FBQUVSLE1BQUUsSUFBSUUsRUFBTixJQUFZRSxFQUFaLEdBQWlCRyxRQUFRLENBQUMsSUFBRCxDQUF6QixHQUFrQyxJQUFuQztBQUF5QyxHQUFqRCxFQUFtRCxDQUFDUCxFQUFELEVBQUtFLEVBQUwsRUFBU0UsRUFBVCxDQUFuRCxDQUFUO0FBRUFJLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE9BQU8sR0FBRyxDQUNkO0FBQUNDLFNBQUcsRUFBRSwrREFBTjtBQUF1RUMsWUFBTSxFQUFFVjtBQUEvRSxLQURjLEVBRWQ7QUFBQ1MsU0FBRyxFQUFFLG1FQUFOO0FBQTJFQyxZQUFNLEVBQUVSO0FBQW5GLEtBRmMsRUFHZDtBQUFDTyxTQUFHLFlBQUssT0FBd0MsRUFBeEMsR0FBNkMsU0FBbEQseUJBQUo7QUFBOEZDLFlBQU0sRUFBRU47QUFBdEcsS0FIYyxDQUFoQjs7QUFEYztBQUFBO0FBQUEsVUFNSkssR0FOSSxlQU1KQSxHQU5JO0FBQUEsVUFNQ0MsTUFORCxlQU1DQSxNQU5EO0FBT1osVUFBTUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVjtBQUNBRixPQUFDLENBQUNHLFlBQUYsQ0FBZSxLQUFmLEVBQXNCTCxHQUF0QjtBQUNBRSxPQUFDLENBQUNJLEtBQUYsR0FBVSxJQUFWOztBQUNBSixPQUFDLENBQUNLLE1BQUYsR0FBVztBQUFBLGVBQU1OLE1BQU0sQ0FBQyxJQUFELENBQVo7QUFBQSxPQUFYOztBQUNBRSxjQUFRLENBQUNLLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlAsQ0FBMUI7QUFYWTs7QUFNZCxnQ0FBMEJILE9BQTFCLDhCQUFtQztBQUFBO0FBTWxDO0FBQ0YsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVYLE9BQU8sQ0FBQ0wsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBSUUsTUFBQyxxREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLFVBQU0sRUFBQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dhLEtBQUssR0FBRyxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSCxHQUEwQixTQURsQyxDQUpGLENBREY7QUFVRCxDQW5DRDs7R0FBTVQsUztVQUNZUCxTOzs7TUFEWk8sUztBQXFDU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKFxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxXG4gICAgfVxuICB9KVxuKSk7XG5cbmNvbnN0IER5bmFtaWNDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9zcGFjZWtpdC9jb250YWluZXInKSk7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+wqB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbczEsIHNldFMxXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3MyLCBzZXRTMl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzMywgc2V0UzNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4geyhzMSAmJiBzMiAmJiBzMyA/IHNldFJlYWR5KHRydWUpIDogbnVsbCl9LCBbczEsIHMyLCBzM10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHRzID0gW1xuICAgICAge3NyYzogJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL3RocmVlLnI5OC5taW4uanMnLCBvbkxvYWQ6IHNldFMxfSxcbiAgICAgIHtzcmM6ICdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi9UcmFja2JhbGxDb250cm9scy5qcycsIG9uTG9hZDogc2V0UzJ9LFxuICAgICAge3NyYzogYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogJy9nYWlhLWV4cGxvcmVyJ30vc2NyaXB0cy9zcGFjZWtpdC5qc2AsIG9uTG9hZDogc2V0UzN9XG4gICAgXVxuICAgIGZvciAobGV0IHtzcmMsIG9uTG9hZH0gb2Ygc2NyaXB0cykge1xuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgIHMuYXN5bmMgPSB0cnVlO1xuICAgICAgcy5vbmxvYWQgPSAoKSA9PiBvbkxvYWQodHJ1ZSk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgaGVpZ2h0PVwiMTAwdmhcIj5cbiAgICAgICAge3JlYWR5ID8gPER5bmFtaWNDb21wb25lbnQgLz4gOiAnTE9BRElORyd9XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})