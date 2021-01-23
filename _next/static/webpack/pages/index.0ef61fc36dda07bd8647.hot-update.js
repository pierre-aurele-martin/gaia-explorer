webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      viz = _useState[0],\n      setViz = _useState[1];\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n    // viz.createStars();\n    // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN); // Then add some planets\n\n    viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n    viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n    viz.createObject('spaceman', {\n      labelText: '<div onClick=\"clickObject(123)\">Tesla Roadster</div>',\n      // labelUrl: 'https://www.google.com',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        // Where the object is in its orbit.\n        epoch: 2458426.500000000\n      }, 'deg')\n    });\n    viz.stop();\n    setViz(viz);\n  };\n\n  var clickObject = function clickObject(i) {\n    console.log('Click an object ===>', i);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s1 = _useState2[0],\n      setS1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s2 = _useState3[0],\n      setS2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      s3 = _useState4[0],\n      setS3 = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', s1, s2, s3);\n\n    if (s1 && s2 && s3) {\n      initSpaceKit();\n    }\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var cb = [setS1, setS2, setS3];\n    ['https://www.spacereference.org/static/js/lib/three.r98.min.js', 'https://www.spacereference.org/static/js/lib/TrackballControls.js', \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\")].map(function (value, i) {\n      var s = document.createElement('script');\n      s.setAttribute('src', value);\n      s.async = true;\n\n      s.onload = function () {\n        console.log(\"script \".concat(i, \" is loadedd\"));\n        cb[i](true);\n      };\n\n      document.head.appendChild(s);\n    });\n    return function () {\n      console.log('CLEANUP');\n      setViz(null);\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      border: '4px solid green',\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxWidth: false,\n    style: {\n      width: '100%',\n      height: '100%',\n      border: '4px solid red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(IndexPage, \"h0uDo1oIl7GrofT5+UTYFjLEfrg=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJ2aXoiLCJzZXRWaXoiLCJpbml0U3BhY2VLaXQiLCJTcGFjZWtpdCIsIndpbmRvdyIsIlNpbXVsYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzZVBhdGgiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJNRVJDVVJZIiwiVkVOVVMiLCJFQVJUSCIsIk1BUlMiLCJKVVBJVEVSIiwiU0FUVVJOIiwiVVJBTlVTIiwiTkVQVFVORSIsImxhYmVsVGV4dCIsImVwaGVtIiwiRXBoZW0iLCJhIiwiZSIsImkiLCJvbSIsInciLCJtYSIsImVwb2NoIiwic3RvcCIsImNsaWNrT2JqZWN0IiwiY29uc29sZSIsImxvZyIsInMxIiwic2V0UzEiLCJzMiIsInNldFMyIiwiczMiLCJzZXRTMyIsInVzZUVmZmVjdCIsImNiIiwibWFwIiwidmFsdWUiLCJzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFzeW5jIiwib25sb2FkIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FESztBQUlYQyxrQkFBYyxFQUFFO0FBQ2RDLFdBQUssRUFBRSxNQURPO0FBRWRDLFlBQU0sRUFBRSxNQUZNO0FBR2RDLHFCQUFlLEVB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QUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBSUUsTUFBQyxxREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLFVBQU0sRUFBQyxPQUExQjtBQUFrQyxTQUFLLEVBQUU7QUFBQzRELFlBQU0sRUFBRSxpQkFBVDtBQUE0QnpELFdBQUssRUFBRSxPQUFuQztBQUE0Q0MsWUFBTSxFQUFFO0FBQXBELEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsWUFBUSxFQUFFLEtBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEQsV0FBSyxFQUFDLE1BREQ7QUFDU0MsWUFBTSxFQUFFLE1BRGpCO0FBRUx3RCxZQUFNLEVBQUU7QUFGSCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUVyRCxPQUFPLENBQUNMLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURGLENBSkYsQ0FERjtBQWtCRCxDQTNHRDs7R0FBTUksUztVQUNZVCxTOzs7S0FEWlMsUztBQTZHU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgU3BhY2VraXQ6IGFueTsgfVxufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoXG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIHNwYWNlQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICB9XG4gIH0pXG4pKTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT7CoHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFt2aXosIHNldFZpel0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuXG4gIGNvbnN0IGluaXRTcGFjZUtpdCA9ICgpID0+IHtcbiAgICBjb25zdCBTcGFjZWtpdCA9IHdpbmRvdyAmJiB3aW5kb3cuU3BhY2VraXQ7XG4gICAgY29uc3Qgdml6ID0gbmV3IFNwYWNla2l0LlNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyksIHtcbiAgICAgIGJhc2VQYXRoOiAnaHR0cHM6Ly90eXBwby5naXRodWIuaW8vc3BhY2VraXQvc3JjJyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIHNreWJveCB1c2luZyBOQVNBIFRZQ0hPIGFydHdvcmsuXG4gICAgLy8gdml6LmNyZWF0ZVN0YXJzKCk7XG5cbiAgICAvLyBDcmVhdGUgb3VyIGZpcnN0IG9iamVjdCAtIHRoZSBzdW4gLSB1c2luZyBhIHByZXNldCBzcGFjZSBvYmplY3QuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3VuJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTik7XG5cbiAgICAvLyBUaGVuIGFkZCBzb21lIHBsYW5ldHNcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdtZXJjdXJ5JywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1FUkNVUlkpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3ZlbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlZFTlVTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5FQVJUSCk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbWFycycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5NQVJTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdqdXBpdGVyJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkpVUElURVIpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NhdHVybicsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TQVRVUk4pO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3VyYW51cycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5VUkFOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ25lcHR1bmUnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTkVQVFVORSk7XG5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzcGFjZW1hbicsIHtcbiAgICAgIGxhYmVsVGV4dDogJzxkaXYgb25DbGljaz1cImNsaWNrT2JqZWN0KDEyMylcIj5UZXNsYSBSb2Fkc3RlcjwvZGl2PicsXG4gICAgICAvLyBsYWJlbFVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIG9yYml0IHNoYXBlLlxuICAgICAgICBhOiAxLjMyNDg3MDU2NDczMDYwNkUrMDAsXG4gICAgICAgIGU6IDIuNTU3Nzg1OTk1NjY1NjgyRS0wMSxcbiAgICAgICAgaTogMS4wNzc1NTA3MjI4MDQ4NjBFKzAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBvcmJpdC5cbiAgICAgICAgb206IDMuMTcwOTQ2OTY0MzI1NjM4RSswMixcbiAgICAgICAgdzogMS43NzQ4NjU4MjIyNDgzOTVFKzAyLFxuICAgICAgICBtYTogMS43NjQzMDIxOTI0ODc5NTVFKzAyLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hlcmUgdGhlIG9iamVjdCBpcyBpbiBpdHMgb3JiaXQuXG4gICAgICAgIGVwb2NoOiAyNDU4NDI2LjUwMDAwMDAwMCxcbiAgICAgIH0sICdkZWcnKSxcbiAgICB9KTtcblxuICAgIHZpei5zdG9wKCk7XG4gICAgc2V0Vml6KHZpeik7XG4gIH1cblxuICBjb25zdCBjbGlja09iamVjdCA9IChpKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrIGFuIG9iamVjdCA9PT0+JywgaSk7XG4gIH1cblxuICBjb25zdCBbczEsIHNldFMxXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3MyLCBzZXRTMl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzMywgc2V0UzNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICBjb25zb2xlLmxvZygnU0NSSVBUUyBoYXMgY2hhbmdlZCA9PT0+JywgczEsIHMyLCBzMyk7XG4gICAgaWYgKHMxICYmIHMyICYmIHMzKcKge1xuICAgICAgaW5pdFNwYWNlS2l0KCk7XG4gICAgfVxuICB9LCBbczEsIHMyLCBzM10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2IgPSBbc2V0UzEsIHNldFMyLCBzZXRTM107XG4gICAgW1xuICAgICAgJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL3RocmVlLnI5OC5taW4uanMnLFxuICAgICAgJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL1RyYWNrYmFsbENvbnRyb2xzLmpzJyxcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICcnIDogJy9nYWlhLWV4cGxvcmVyJ30vc2NyaXB0cy9zcGFjZWtpdC5qc2BcbiAgICBdLm1hcCgodmFsdWUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZhbHVlKTtcbiAgICAgIHMuYXN5bmMgPSB0cnVlO1xuICAgICAgcy5vbmxvYWQ9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHNjcmlwdCAke2l9IGlzIGxvYWRlZGRgKTtcbiAgICAgICAgY2JbaV0odHJ1ZSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0NMRUFOVVAnKTtcbiAgICAgIHNldFZpeihudWxsKTtcbiAgICB9XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgaGVpZ2h0PVwiMTAwdmhcIiBzdHlsZT17e2JvcmRlcjogJzRweCBzb2xpZCBncmVlbicsIHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPXtmYWxzZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCByZWQnLFxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})