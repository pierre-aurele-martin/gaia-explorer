webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN); // Then add some planets\n\n    viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n    viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n    viz.createObject('spaceman', {\n      labelText: 'Tesla Roadster',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        // Where the object is in its orbit.\n        epoch: 2458426.500000000\n      }, 'deg')\n    });\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      scripts = _useState[0],\n      setScripts = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', scripts);\n  }, [scripts]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _window;\n\n    console.log('UseEffect window.Spacekit ===>', window.Spacekit);\n\n    if ((_window = window) !== null && _window !== void 0 && _window.Spacekit) {// initSpaceKit();\n    } else if (false) {} else if (!window.Spacekit) {\n      console.log('Spacekit is undefined');\n    }\n\n    var s1 = document.createElement('script');\n    s1.setAttribute('src', 'https://www.spacereference.org/static/js/lib/three.r98.min.js');\n    s1.async = true;\n\n    s1.onload = function () {\n      console.log('ONE SCRIPT IS LOADED');\n      setScripts([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scripts), ['one']));\n    };\n\n    document.head.appendChild(s1);\n    var s2 = document.createElement('script');\n    s2.setAttribute('src', 'https://www.spacereference.org/static/js/lib/TrackballControls.js');\n    s2.async = true;\n\n    s2.onload = function () {\n      console.log('TWO SCRIPT IS LOADED');\n      setScripts([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scripts), ['two']));\n    };\n\n    document.head.appendChild(s2);\n    var s3 = document.createElement('script');\n    s3.setAttribute('src', '/scripts/spacekit.js');\n    s3.async = true;\n\n    s3.onload = function () {\n      console.log('THREE SCRIPT IS LOADED');\n      setScripts([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scripts), ['three']));\n    };\n\n    document.head.appendChild(s3);\n    /* document.getElementById(\"test\").addEventListener('load', () => {\n      console.log('TEST is loaded');\n      initSpaceKit();\n    }); */\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      border: '4px solid green',\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    maxWidth: false,\n    style: {\n      width: '100%',\n      height: '100%',\n      border: '4px solid red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(IndexPage, \"b9TYrIlDKY8B5jfPUqI3qJkmGjs=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJ2aXoiLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlU3RhcnMiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJNRVJDVVJZIiwiVkVOVVMiLCJFQVJUSCIsIk1BUlMiLCJKVVBJVEVSIiwiU0FUVVJOIiwiVVJBTlVTIiwiTkVQVFVORSIsImxhYmVsVGV4dCIsImVwaGVtIiwiRXBoZW0iLCJhIiwiZSIsImkiLCJvbSIsInciLCJtYSIsImVwb2NoIiwidXNlU3RhdGUiLCJzY3JpcHRzIiwic2V0U2NyaXB0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzMSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhc3luYyIsIm9ubG9hZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInMyIiwiczMiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURLO0FBSVhDLGtCQUFjLEVBQUU7QUFDZEMsV0FBSyxFQUFFLE1BRE87QUFFZEMsWUFBTSxFQUFFLE1BRk07QUFHZEMscUJBQWUsRUFBRTtBQUhIO0FBSkwsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1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QSxTQUNFO0FBQUssYUFBUyxFQUFFN0MsT0FBTyxDQUFDUCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsRUFPRSxNQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsVUFBTSxFQUFDLE9BQTFCO0FBQWtDLFNBQUssRUFBRTtBQUFDcUQsWUFBTSxFQUFFLGlCQUFUO0FBQTRCbEQsV0FBSyxFQUFFLE9BQW5DO0FBQTRDQyxZQUFNLEVBQUU7QUFBcEQsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxZQUFRLEVBQUUsS0FEWjtBQUVFLFNBQUssRUFBRTtBQUNMRCxXQUFLLEVBQUMsTUFERDtBQUNTQyxZQUFNLEVBQUUsTUFEakI7QUFFTGlELFlBQU0sRUFBRTtBQUZILEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQXlCLGFBQVMsRUFBRTlDLE9BQU8sQ0FBQ0wsY0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREYsQ0FQRixDQURGO0FBcUJELENBL0dEOztHQUFNSSxTO1VBQ1lULFM7OztLQURaUyxTO0FBaUhTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBTcGFjZWtpdDogYW55OyB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IChcbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG4gICAgc3BhY2VDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgfSlcbikpO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuU1VOKTtcblxuICAgIC8vIFRoZW4gYWRkIHNvbWUgcGxhbmV0c1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ21lcmN1cnknLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTUVSQ1VSWSk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgndmVudXMnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuVkVOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2VhcnRoJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkVBUlRIKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdtYXJzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1BUlMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2p1cGl0ZXInLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuSlVQSVRFUik7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc2F0dXJuJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNBVFVSTik7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgndXJhbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlVSQU5VUyk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbmVwdHVuZScsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5ORVBUVU5FKTtcblxuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NwYWNlbWFuJywge1xuICAgICAgbGFiZWxUZXh0OiAnVGVzbGEgUm9hZHN0ZXInLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIG9yYml0IHNoYXBlLlxuICAgICAgICBhOiAxLjMyNDg3MDU2NDczMDYwNkUrMDAsXG4gICAgICAgIGU6IDIuNTU3Nzg1OTk1NjY1NjgyRS0wMSxcbiAgICAgICAgaTogMS4wNzc1NTA3MjI4MDQ4NjBFKzAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBvcmJpdC5cbiAgICAgICAgb206IDMuMTcwOTQ2OTY0MzI1NjM4RSswMixcbiAgICAgICAgdzogMS43NzQ4NjU4MjIyNDgzOTVFKzAyLFxuICAgICAgICBtYTogMS43NjQzMDIxOTI0ODc5NTVFKzAyLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hlcmUgdGhlIG9iamVjdCBpcyBpbiBpdHMgb3JiaXQuXG4gICAgICAgIGVwb2NoOiAyNDU4NDI2LjUwMDAwMDAwMCxcbiAgICAgIH0sICdkZWcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFtzY3JpcHRzLCBzZXRTY3JpcHRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+e1xuICAgIGNvbnNvbGUubG9nKCdTQ1JJUFRTIGhhcyBjaGFuZ2VkID09PT4nLCBzY3JpcHRzKTtcbiAgfSwgW3NjcmlwdHNdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVXNlRWZmZWN0IHdpbmRvdy5TcGFjZWtpdCA9PT0+Jywgd2luZG93LlNwYWNla2l0KTtcbiAgICBpZiAod2luZG93Py5TcGFjZWtpdCkge1xuICAgICAgLy8gaW5pdFNwYWNlS2l0KCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWQpwqB7XG4gICAgICBjb25zb2xlLmxvZygnd2luZG93IGlzIHVuZGVmaW5lZCcpXG4gICAgfSBlbHNlIGlmICghd2luZG93LlNwYWNla2l0KcKge1xuICAgICAgY29uc29sZS5sb2coJ1NwYWNla2l0IGlzIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICBjb25zdCBzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHMxLnNldEF0dHJpYnV0ZSgnc3JjJywnaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvdGhyZWUucjk4Lm1pbi5qcycpO1xuICAgIHMxLmFzeW5jID0gdHJ1ZTtcbiAgICBzMS5vbmxvYWQ9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdPTkUgU0NSSVBUIElTIExPQURFRCcpO1xuICAgICAgc2V0U2NyaXB0cyhbLi4uc2NyaXB0cywgJ29uZSddKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzMSk7XG5cbiAgICBjb25zdCBzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHMyLnNldEF0dHJpYnV0ZSgnc3JjJywnaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvVHJhY2tiYWxsQ29udHJvbHMuanMnKTtcbiAgICBzMi5hc3luYyA9IHRydWU7XG4gICAgczIub25sb2FkPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVFdPIFNDUklQVCBJUyBMT0FERUQnKTtcbiAgICAgIHNldFNjcmlwdHMoWy4uLnNjcmlwdHMsICd0d28nXSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoczIpO1xuXG4gICAgY29uc3QgczMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzMy5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9zY3JpcHRzL3NwYWNla2l0LmpzJyk7XG4gICAgczMuYXN5bmMgPSB0cnVlO1xuICAgIHMzLm9ubG9hZD0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RIUkVFIFNDUklQVCBJUyBMT0FERUQnKTtcbiAgICAgIHNldFNjcmlwdHMoWy4uLnNjcmlwdHMsICd0aHJlZSddKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzMyk7XG4gICAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVEVTVCBpcyBsb2FkZWQnKTtcbiAgICAgIGluaXRTcGFjZUtpdCgpO1xuICAgIH0pOyAqL1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XG4gICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL3RocmVlLnI5OC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi9UcmFja2JhbGxDb250cm9scy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IGlkPVwidGVzdFwiIHNyYz1cIi9zY3JpcHRzL3NwYWNla2l0LmpzXCI+PC9zY3JpcHQ+ICovfVxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgaGVpZ2h0PVwiMTAwdmhcIiBzdHlsZT17e2JvcmRlcjogJzRweCBzb2xpZCBncmVlbicsIHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPXtmYWxzZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCByZWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})