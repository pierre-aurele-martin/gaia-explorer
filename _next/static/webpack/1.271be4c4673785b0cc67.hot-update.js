webpackHotUpdate_N_E(1,{

/***/ "./components/spacekit/container.tsx":
/*!*******************************************!*\
  !*** ./components/spacekit/container.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _utils_floatToHex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/floatToHex */ \"./utils/floatToHex.ts\");\n/* harmony import */ var _planetDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planetDialog */ \"./components/spacekit/planetDialog.tsx\");\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/spacekit/container.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar SpaceKitContainer = function SpaceKitContainer() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      viz = _useState[0],\n      setViz = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openPlanetDialog = _useState2[0],\n      setOpenPlanetDialog = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      planetDialog = _useState3[0],\n      setPlanetDialog = _useState3[1];\n\n  var handleClose = function handleClose(value) {\n    setOpenPlanetDialog(false);\n    setPlanetDialog(value);\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = parseInt(\"0x\".concat(Object(_utils_floatToHex__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(1.314)));\n    var planet1Data = {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: '*134221859-000099E',\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    };\n    var planet1 = viz.createObject('1', planet1Data);\n    console.log('PLANET1 ===>', planet1);\n    /* planet1._label.addEventListner('click', (e: HTMLElement) => {\n      console.log('planet 1 click ===>', e, planet1Data);\n      setPlanetDialog(planet1Data);\n      setOpenPlanetDialog(true);\n    }); */\n\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n    setViz(viz);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    initSpaceKit();\n    return function () {\n      // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }), __jsx(_planetDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    open: openPlanetDialog,\n    onClose: handleClose,\n    data: planetDialog,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }));\n};\n\n_s(SpaceKitContainer, \"Lh6ksyj2tK7Q82IN8pDpf+BU0yQ=\", false, function () {\n  return [useStyles];\n});\n\n_c = SpaceKitContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceKitContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpaceKitContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGFjZWtpdC9jb250YWluZXIudHN4PzEyMjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTcGFjZUtpdENvbnRhaW5lciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInZpeiIsInNldFZpeiIsIm9wZW5QbGFuZXREaWFsb2ciLCJzZXRPcGVuUGxhbmV0RGlhbG9nIiwicGxhbmV0RGlhbG9nIiwic2V0UGxhbmV0RGlhbG9nIiwiaGFuZGxlQ2xvc2UiLCJ2YWx1ZSIsImluaXRTcGFjZUtpdCIsIlNwYWNla2l0Iiwid2luZG93IiwiU2ltdWxhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJiYXNlUGF0aCIsImNyZWF0ZVN0YXJzIiwiY3JlYXRlT2JqZWN0IiwiU3BhY2VPYmplY3RQcmVzZXRzIiwiU1VOIiwibGFiZWxUZXh0IiwiRUFSVEgiLCJjb2xvciIsInBhcnNlSW50IiwiZmxvYXRUb0hleCIsInBsYW5ldDFEYXRhIiwicGFydGljbGVTaXplIiwiZXBoZW0iLCJFcGhlbSIsImVwb2NoIiwiYSIsImUiLCJpIiwib20iLCJ3IiwibWEiLCJ0aGVtZSIsIm9yYml0Q29sb3IiLCJwbGFuZXQxIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURLO0FBSVhDLGtCQUFjLEVBQUU7QUFDZEMsV0FBSyxFQUFFLE1BRE87QUFFZEMsWUFBTSxF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VDtBQVNBLFNBQU8sbUVBQ0w7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFFM0MsT0FBTyxDQUFDTCxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFFTCxNQUFDLHFEQUFEO0FBQWMsUUFBSSxFQUFFUyxnQkFBcEI7QUFBc0MsV0FBTyxFQUFFSSxXQUEvQztBQUE0RCxRQUFJLEVBQUVGLFlBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSyxDQUFQO0FBSUQsQ0E1RUQ7O0dBQU1QLGlCO1VBQ1lULFM7OztLQURaUyxpQjtBQThFU0EsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwYWNla2l0L2NvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmbG9hdFRvSGV4IGZyb20gJy4uLy4uL3V0aWxzL2Zsb2F0VG9IZXgnO1xuaW1wb3J0IFBsYW5ldERpYWxvZyBmcm9tICcuL3BsYW5ldERpYWxvZyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IFNwYWNla2l0OiBhbnk7IH1cbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKFxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxXG4gICAgfSxcbiAgICBzcGFjZUNvbnRhaW5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snXG4gICAgfVxuICB9KVxuKSk7XG5cbmNvbnN0IFNwYWNlS2l0Q29udGFpbmVyID0gKCkgPT7CoHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgW3Zpeiwgc2V0Vml6XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtvcGVuUGxhbmV0RGlhbG9nLCBzZXRPcGVuUGxhbmV0RGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BsYW5ldERpYWxvZywgc2V0UGxhbmV0RGlhbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKHZhbHVlOiBhbnkgfMKgbnVsbCkgPT4ge1xuICAgIHNldE9wZW5QbGFuZXREaWFsb2coZmFsc2UpO1xuICAgIHNldFBsYW5ldERpYWxvZyh2YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGluaXRTcGFjZUtpdCA9ICgpID0+IHtcbiAgICBjb25zdCBTcGFjZWtpdCA9IHdpbmRvdyAmJiB3aW5kb3cuU3BhY2VraXQ7XG4gICAgY29uc3Qgdml6ID0gbmV3IFNwYWNla2l0LlNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyksIHtcbiAgICAgIGJhc2VQYXRoOiAnaHR0cHM6Ly90eXBwby5naXRodWIuaW8vc3BhY2VraXQvc3JjJyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIHNreWJveCB1c2luZyBOQVNBIFRZQ0hPIGFydHdvcmsuXG4gICAgdml6LmNyZWF0ZVN0YXJzKCk7XG5cbiAgICAvLyBDcmVhdGUgb3VyIGZpcnN0IG9iamVjdCAtIHRoZSBzdW4gLSB1c2luZyBhIHByZXNldCBzcGFjZSBvYmplY3QuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3VuJywgey4uLlNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TVU4sIGxhYmVsVGV4dDogJ1RIRSBTVU4nfSk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnZWFydGgnLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkVBUlRILCBsYWJlbFRleHQ6ICdUSEUgRUFSVEgnfSk7XG5cbiAgICBjb25zdCBjb2xvciA9IHBhcnNlSW50KGAweCR7ZmxvYXRUb0hleCgxLjMxNCl9YCk7XG4gICAgY29uc3QgcGxhbmV0MURhdGEgPSB7XG4gICAgICAvLyBwb3NpdGlvbjogWzI2OS4wMjU4NDA0NjQ0NzI0LCAtMzAuMjcxMzE3NTAzOTQxNTk2LCA4ODQ3LjgwOF0sIC8vIFtyYSwgZGVjLCBiYXJ5Y2VudHJpY19kaXN0YW5jZV1cbiAgICAgIHBhcnRpY2xlU2l6ZTogKDAuNTg0MzIwOCAqIDEwMCksIC8vIHJhZGl1c1xuICAgICAgbGFiZWxUZXh0OiAnKjEzNDIyMTg1OS0wMDAwOTlFJyxcbiAgICAgIGVwaGVtOiBuZXcgU3BhY2VraXQuRXBoZW0oe1xuICAgICAgICBlcG9jaDogMTM1NzEzLjUzLCAvLyBvcmJpdF9wZXJpb2QgcmFkaWFsX3ZlbG9jaXR5XG4gICAgICAgIGE6IDU4LjM0ODI4NiwgLy8gc2VtaW1ham9yX2F4aXNcbiAgICAgICAgZTogMC42MTcwMDAxLCAvLyBlY2NlbnRyaWNpdHlcbiAgICAgICAgaTogLTg1LjMxNjA4NiwgLy8gaW5jbGluYXRpb25cbiAgICAgICAgb206IDQ1LjkwOTMzMiwgLy8gbG9uZ2l0dWRlX2FzY2VuZGluZ19ub2RlXG4gICAgICAgIHc6IDEwNjIyMy4wNSwgLy8gcGVyaWFzdHJvbl9kYXRlXG4gICAgICAgIG1hOiAyMy41MzY2NTUsIC8vIG1hZ19nXG4gICAgICB9LCAncmFkJyksXG4gICAgICAvLyB0ZXh0dXJlVXJsOiAnL3BhdGgvdG8vc3ByaXRlVGV4dHVyZS5wbmcnLFxuICAgICAgLy8gYmFzZVBhdGg6ICcvYmFzZScsXG4gICAgICB0aGVtZToge1xuICAgICAgICBjb2xvcjogY29sb3IsIC8vIFZfSVxuICAgICAgICBvcmJpdENvbG9yOiBjb2xvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBwbGFuZXQxID0gdml6LmNyZWF0ZU9iamVjdCgnMScsIHBsYW5ldDFEYXRhKVxuXG4gICAgY29uc29sZS5sb2coJ1BMQU5FVDEgPT09PicsIHBsYW5ldDEpO1xuICAgIC8qIHBsYW5ldDEuX2xhYmVsLmFkZEV2ZW50TGlzdG5lcignY2xpY2snLCAoZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGFuZXQgMSBjbGljayA9PT0+JywgZSwgcGxhbmV0MURhdGEpO1xuICAgICAgc2V0UGxhbmV0RGlhbG9nKHBsYW5ldDFEYXRhKTtcbiAgICAgIHNldE9wZW5QbGFuZXREaWFsb2codHJ1ZSk7XG4gICAgfSk7ICovXG4gICBcbiAgICAvKiBjb25zb2xlLmxvZygnc3BhY2VtYW4gPT09PicsIHNwYWNlbWFuKTtcbiAgICBzcGFjZW1hbi5fbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGlja09iamVjdCgnc3BsYWNlbWFuJykpOyAqL1xuICAgIC8vIHNwYWNlbWFuLl9sYWJlbC5vbmNsaWNrKCgpID0+IGNvbnNvbGUubG9nKCdPS09LT0sgY2xpY2sgc3BhY2VtYW4nKSk7XG5cbiAgICAvLyB2aXouc3RvcCgpO1xuICAgIHNldFZpeih2aXopO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0U3BhY2VLaXQoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRpb24gd2l0aCBITVIgYXMgdml6IGFzIG5vIGRlc3Ryb3kgbWV0aG9kIC0gbm8gaW1wYWN0IG90aGVyd2lzZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gPD5cbiAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VDb250YWluZXJ9PjwvZGl2PlxuICAgIDxQbGFuZXREaWFsb2cgb3Blbj17b3BlblBsYW5ldERpYWxvZ30gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGRhdGE9e3BsYW5ldERpYWxvZ30vPlxuICA8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwYWNlS2l0Q29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/spacekit/container.tsx\n");

/***/ })

})