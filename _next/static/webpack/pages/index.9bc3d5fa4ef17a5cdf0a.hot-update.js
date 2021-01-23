webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN); // Then add some planets\n\n    viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n    viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n    viz.createObject('spaceman', {\n      labelText: 'Tesla Roadster',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        // Where the object is in its orbit.\n        epoch: 2458426.500000000\n      }, 'deg')\n    });\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s1 = _useState[0],\n      setS1 = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s2 = _useState2[0],\n      setS2 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s3 = _useState3[0],\n      setS3 = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', s1, s2, s3);\n\n    if (s1 && s2 && s3) {\n      initSpaceKit();\n    }\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _window;\n\n    console.log('UseEffect window.Spacekit ===>', window.Spacekit);\n\n    if ((_window = window) !== null && _window !== void 0 && _window.Spacekit) {// initSpaceKit();\n    } else if (false) {} else if (!window.Spacekit) {\n      console.log('Spacekit is undefined');\n    }\n\n    var s1 = document.createElement('script');\n    s1.setAttribute('src', 'https://www.spacereference.org/static/js/lib/three.r98.min.js');\n    s1.async = true;\n\n    s1.onload = function () {\n      console.log('ONE SCRIPT IS LOADED');\n      setS1(true);\n    };\n\n    document.head.appendChild(s1);\n    var s2 = document.createElement('script');\n    s2.setAttribute('src', 'https://www.spacereference.org/static/js/lib/TrackballControls.js');\n    s2.async = true;\n\n    s2.onload = function () {\n      console.log('TWO SCRIPT IS LOADED');\n      setS2(true);\n    };\n\n    document.head.appendChild(s2);\n    var s3 = document.createElement('script');\n    s3.setAttribute('src', '/gaia-explorer/scripts/spacekit.js');\n    s3.async = true;\n\n    s3.onload = function () {\n      console.log('THREE SCRIPT IS LOADED');\n      setS3(true);\n    };\n\n    document.head.appendChild(s3);\n    /* document.getElementById(\"test\").addEventListener('load', () => {\n      console.log('TEST is loaded');\n      initSpaceKit();\n    }); */\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      border: '4px solid green',\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxWidth: false,\n    style: {\n      width: '100%',\n      height: '100%',\n      border: '4px solid red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(IndexPage, \"75DHVwATNncBSX4vxdpwplxo20g=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJ2aXoiLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlU3RhcnMiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJNRVJDVVJZIiwiVkVOVVMiLCJFQVJUSCIsIk1BUlMiLCJKVVBJVEVSIiwiU0FUVVJOIiwiVVJBTlVTIiwiTkVQVFVORSIsImxhYmVsVGV4dCIsImVwaGVtIiwiRXBoZW0iLCJhIiwiZSIsImkiLCJvbSIsInciLCJtYSIsImVwb2NoIiwidXNlU3RhdGUiLCJzMSIsInNldFMxIiwiczIiLCJzZXRTMiIsInMzIiwic2V0UzMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFzeW5jIiwib25sb2FkIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FESztBQUlYQyxrQkFBYyxFQUFFO0FBQ2RDLFdBQUssRUFBRSxNQURPO0FBRWRDLFlBQU0sRUFBRSxNQUZNO0FBR2RDLHFCQUFlLEVBQUU7QUFISDtBQUpMLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7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ZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBTcGFjZWtpdDogYW55OyB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IChcbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG4gICAgc3BhY2VDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgfSlcbikpO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuU1VOKTtcblxuICAgIC8vIFRoZW4gYWRkIHNvbWUgcGxhbmV0c1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ21lcmN1cnknLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTUVSQ1VSWSk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgndmVudXMnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuVkVOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2VhcnRoJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkVBUlRIKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdtYXJzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1BUlMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2p1cGl0ZXInLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuSlVQSVRFUik7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc2F0dXJuJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNBVFVSTik7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgndXJhbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlVSQU5VUyk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbmVwdHVuZScsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5ORVBUVU5FKTtcblxuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NwYWNlbWFuJywge1xuICAgICAgbGFiZWxUZXh0OiAnVGVzbGEgUm9hZHN0ZXInLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIG9yYml0IHNoYXBlLlxuICAgICAgICBhOiAxLjMyNDg3MDU2NDczMDYwNkUrMDAsXG4gICAgICAgIGU6IDIuNTU3Nzg1OTk1NjY1NjgyRS0wMSxcbiAgICAgICAgaTogMS4wNzc1NTA3MjI4MDQ4NjBFKzAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBvcmJpdC5cbiAgICAgICAgb206IDMuMTcwOTQ2OTY0MzI1NjM4RSswMixcbiAgICAgICAgdzogMS43NzQ4NjU4MjIyNDgzOTVFKzAyLFxuICAgICAgICBtYTogMS43NjQzMDIxOTI0ODc5NTVFKzAyLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hlcmUgdGhlIG9iamVjdCBpcyBpbiBpdHMgb3JiaXQuXG4gICAgICAgIGVwb2NoOiAyNDU4NDI2LjUwMDAwMDAwMCxcbiAgICAgIH0sICdkZWcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFtzMSwgc2V0UzFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbczIsIHNldFMyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3MzLCBzZXRTM10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+e1xuICAgIGNvbnNvbGUubG9nKCdTQ1JJUFRTIGhhcyBjaGFuZ2VkID09PT4nLCBzMSwgczIsIHMzKTtcbiAgICBpZiAoczEgJiYgczIgJiYgczMpwqB7XG4gICAgICBpbml0U3BhY2VLaXQoKTtcbiAgICB9XG4gIH0sIFtzMSwgczIsIHMzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZUVmZmVjdCB3aW5kb3cuU3BhY2VraXQgPT09PicsIHdpbmRvdy5TcGFjZWtpdCk7XG4gICAgaWYgKHdpbmRvdz8uU3BhY2VraXQpIHtcbiAgICAgIC8vIGluaXRTcGFjZUtpdCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkKcKge1xuICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBpcyB1bmRlZmluZWQnKVxuICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5TcGFjZWtpdCnCoHtcbiAgICAgIGNvbnNvbGUubG9nKCdTcGFjZWtpdCBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgY29uc3QgczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzMS5zZXRBdHRyaWJ1dGUoJ3NyYycsJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL3RocmVlLnI5OC5taW4uanMnKTtcbiAgICBzMS5hc3luYyA9IHRydWU7XG4gICAgczEub25sb2FkPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnT05FIFNDUklQVCBJUyBMT0FERUQnKTtcbiAgICAgIHNldFMxKHRydWUpO1xuICAgIH1cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMxKTtcblxuICAgIGNvbnN0IHMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgczIuc2V0QXR0cmlidXRlKCdzcmMnLCdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi9UcmFja2JhbGxDb250cm9scy5qcycpO1xuICAgIHMyLmFzeW5jID0gdHJ1ZTtcbiAgICBzMi5vbmxvYWQ9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUV08gU0NSSVBUIElTIExPQURFRCcpO1xuICAgICAgc2V0UzIodHJ1ZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoczIpO1xuXG4gICAgY29uc3QgczMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzMy5zZXRBdHRyaWJ1dGUoJ3NyYycsJy9nYWlhLWV4cGxvcmVyL3NjcmlwdHMvc3BhY2VraXQuanMnKTtcbiAgICBzMy5hc3luYyA9IHRydWU7XG4gICAgczMub25sb2FkPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVEhSRUUgU0NSSVBUIElTIExPQURFRCcpO1xuICAgICAgc2V0UzModHJ1ZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoczMpO1xuICAgIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFwiKS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RFU1QgaXMgbG9hZGVkJyk7XG4gICAgICBpbml0U3BhY2VLaXQoKTtcbiAgICB9KTsgKi9cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxuICAgICAgICB7LyogPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi90aHJlZS5yOTgubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvVHJhY2tiYWxsQ29udHJvbHMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBpZD1cInRlc3RcIiBzcmM9XCIvc2NyaXB0cy9zcGFjZWtpdC5qc1wiPjwvc2NyaXB0PiAqL31cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCIgc3R5bGU9e3tib3JkZXI6ICc0cHggc29saWQgZ3JlZW4nLCB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBtYXhXaWR0aD17ZmFsc2V9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgcmVkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VDb250YWluZXJ9PjwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})