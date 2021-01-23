webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN); // Then add some planets\n\n    viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n    viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n    viz.createObject('spaceman', {\n      labelText: 'Tesla Roadster',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        // Where the object is in its orbit.\n        epoch: 2458426.500000000\n      }, 'deg')\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('UseEffect');\n    document.getElementById(\"test\").addEventListener('load', function () {\n      console.log('TEST is loaded');\n      initSpaceKit();\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"My pagee\"), __jsx(\"script\", {\n    src: \"https://www.spacereference.org/static/js/lib/three.r98.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://www.spacereference.org/static/js/lib/TrackballControls.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    id: \"test\",\n    src: \"/scripts/spacekit.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      border: '4px solid green',\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxWidth: false,\n    style: {\n      width: '100%',\n      height: '100%',\n      border: '4px solid red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(IndexPage, \"OAQf9SHEQQsOOZKjohcuI3tGtQ0=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJ2aXoiLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlU3RhcnMiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJNRVJDVVJZIiwiVkVOVVMiLCJFQVJUSCIsIk1BUlMiLCJKVVBJVEVSIiwiU0FUVVJOIiwiVVJBTlVTIiwiTkVQVFVORSIsImxhYmVsVGV4dCIsImVwaGVtIiwiRXBoZW0iLCJhIiwiZSIsImkiLCJvbSIsInciLCJtYSIsImVwb2NoIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURLO0FBSVhDLGtCQUFjLEVBQUU7QUFDZEMsV0FBSyxFQUFFLE1BRE87QUFFZEMsWUFBTSxFQUFFLE1BRk07QUFHZEMscUJBQWUsRUFBRTtBQUhIO0FBSkwsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFhQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6Qjs7QUFFQSxNQUFNVyxZQUFZLEdBQUcs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBT0UsTUFBQyxxREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLFVBQU0sRUFBQyxPQUExQjtBQUFrQyxTQUFLLEVBQUU7QUFBQzBDLFlBQU0sRUFBRSxpQkFBVDtBQUE0QnZDLFdBQUssRUFBRSxPQUFuQztBQUE0Q0MsWUFBTSxFQUFFO0FBQXBELEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsWUFBUSxFQUFFLEtBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEQsV0FBSyxFQUFDLE1BREQ7QUFDU0MsWUFBTSxFQUFFLE1BRGpCO0FBRUxzQyxZQUFNLEVBQUU7QUFGSCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUVuQyxPQUFPLENBQUNMLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURGLENBUEYsQ0FERjtBQXFCRCxDQXpFRDs7R0FBTUksUztVQUNZVCxTOzs7S0FEWlMsUztBQTJFU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBTcGFjZWtpdDogYW55OyB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IChcbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG4gICAgc3BhY2VDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgfSlcbikpO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuU1VOKTtcblxuICAgIC8vIFRoZW4gYWRkIHNvbWUgcGxhbmV0c1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ21lcmN1cnknLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTUVSQ1VSWSk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgndmVudXMnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuVkVOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2VhcnRoJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkVBUlRIKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdtYXJzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1BUlMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2p1cGl0ZXInLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuSlVQSVRFUik7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc2F0dXJuJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNBVFVSTik7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgndXJhbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlVSQU5VUyk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbmVwdHVuZScsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5ORVBUVU5FKTtcblxuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NwYWNlbWFuJywge1xuICAgICAgbGFiZWxUZXh0OiAnVGVzbGEgUm9hZHN0ZXInLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIG9yYml0IHNoYXBlLlxuICAgICAgICBhOiAxLjMyNDg3MDU2NDczMDYwNkUrMDAsXG4gICAgICAgIGU6IDIuNTU3Nzg1OTk1NjY1NjgyRS0wMSxcbiAgICAgICAgaTogMS4wNzc1NTA3MjI4MDQ4NjBFKzAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBvcmJpdC5cbiAgICAgICAgb206IDMuMTcwOTQ2OTY0MzI1NjM4RSswMixcbiAgICAgICAgdzogMS43NzQ4NjU4MjIyNDgzOTVFKzAyLFxuICAgICAgICBtYTogMS43NjQzMDIxOTI0ODc5NTVFKzAyLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hlcmUgdGhlIG9iamVjdCBpcyBpbiBpdHMgb3JiaXQuXG4gICAgICAgIGVwb2NoOiAyNDU4NDI2LjUwMDAwMDAwMCxcbiAgICAgIH0sICdkZWcnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZUVmZmVjdCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFwiKS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RFU1QgaXMgbG9hZGVkJyk7XG4gICAgICBpbml0U3BhY2VLaXQoKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IHBhZ2VlPC90aXRsZT5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi90aHJlZS5yOTgubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvVHJhY2tiYWxsQ29udHJvbHMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBpZD1cInRlc3RcIiBzcmM9XCIvc2NyaXB0cy9zcGFjZWtpdC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgaGVpZ2h0PVwiMTAwdmhcIiBzdHlsZT17e2JvcmRlcjogJzRweCBzb2xpZCBncmVlbicsIHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPXtmYWxzZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCByZWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})