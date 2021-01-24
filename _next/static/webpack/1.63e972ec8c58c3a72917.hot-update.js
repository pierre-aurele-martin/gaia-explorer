webpackHotUpdate_N_E(1,{

/***/ "./components/spacekit/container.tsx":
/*!*******************************************!*\
  !*** ./components/spacekit/container.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _utils_floatToHex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/floatToHex */ \"./utils/floatToHex.ts\");\n/* harmony import */ var _fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fab */ \"./components/fab.tsx\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slider */ \"./components/slider.tsx\");\n/* harmony import */ var _planetDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planetDialog */ \"./components/spacekit/planetDialog.tsx\");\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/spacekit/container.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    },\n    \"planet-label-container\": {\n      border: '10px solid red'\n    }\n  });\n});\n\nvar SpaceKitContainer = function SpaceKitContainer() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      viz = _useState[0],\n      setViz = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openPlanetDialog = _useState2[0],\n      setOpenPlanetDialog = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      planetDialog = _useState3[0],\n      setPlanetDialog = _useState3[1];\n\n  var handleClose = function handleClose(value) {\n    setOpenPlanetDialog(false);\n    setPlanetDialog(value);\n    viz.start();\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = parseInt(\"0x\".concat(Object(_utils_floatToHex__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(1.314)));\n    var planet1Data = {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: '<div classes=\"planet-label-container\">*134221859-000099E</div>',\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    };\n    var planet1 = viz.createObject('1', planet1Data);\n\n    planet1._label.addEventListener('click', function (_) {\n      // e could be use to position dynamically the modal but not so easy \n      viz.stop();\n      setPlanetDialog(planet1Data);\n      setOpenPlanetDialog(true);\n    });\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n\n\n    console.log('VIZ ===>', viz); // viz.stop();\n\n    setViz(viz);\n  };\n\n  var resetCamera = function resetCamera() {\n    document.getElementById('main-container').innerHTML = '';\n    initSpaceKit();\n    /* Doesnt work... const camera = viz.getViewer();\n    console.log('Reset Camera ===>', viz, camera);\n    camera._cameraControls.reset(); */\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    initSpaceKit();\n    return function () {\n      // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    defaultValue: 50,\n    step: 50,\n    min: 0,\n    max: 10000,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }), __jsx(_fab__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    reset: resetCamera,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 5\n    }\n  }), __jsx(_planetDialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: openPlanetDialog,\n    onClose: handleClose,\n    data: planetDialog,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 5\n    }\n  }));\n};\n\n_s(SpaceKitContainer, \"Lh6ksyj2tK7Q82IN8pDpf+BU0yQ=\", false, function () {\n  return [useStyles];\n});\n\n_c = SpaceKitContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceKitContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpaceKitContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGFjZWtpdC9jb250YWluZXIudHN4PzEyMjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJTcGFjZUtpdENvbnRhaW5lciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInZpeiIsInNldFZpeiIsIm9wZW5QbGFuZXREaWFsb2ciLCJzZXRPcGVuUGxhbmV0RGlhbG9nIiwicGxhbmV0RGlhbG9nIiwic2V0UGxhbmV0RGlhbG9nIiwiaGFuZGxlQ2xvc2UiLCJ2YWx1ZSIsInN0YXJ0IiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlU3RhcnMiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJsYWJlbFRleHQiLCJFQVJUSCIsImNvbG9yIiwicGFyc2VJbnQiLCJmbG9hdFRvSGV4IiwicGxhbmV0MURhdGEiLCJwYXJ0aWNsZVNpemUiLCJlcGhlbSIsIkVwaGVtIiwiZXBvY2giLCJhIiwiZSIsImkiLCJvbSIsInciLCJtYSIsInRoZW1lIiwib3JiaXRDb2xvciIsInBsYW5ldDEiLCJfbGFiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsInN0b3AiLCJjb25zb2xlIiwibG9nIiwicmVzZXRDYW1lcmEiLCJpbm5lckhUTUwiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJ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SUFOSyxDQUFQO0FBUUQsQ0ExRkQ7O0dBQU1QLGlCO1VBQ1lWLFM7OztLQURaVSxpQjtBQTRGU0EsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NwYWNla2l0L2NvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmbG9hdFRvSGV4IGZyb20gJy4uLy4uL3V0aWxzL2Zsb2F0VG9IZXgnO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbnMgZnJvbSAnLi4vZmFiJztcbmltcG9ydCBEYXRhU2xpZGVyIGZyb20gJy4uL3NsaWRlcic7XG5pbXBvcnQgUGxhbmV0RGlhbG9nIGZyb20gJy4vcGxhbmV0RGlhbG9nJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgU3BhY2VraXQ6IGFueTsgfVxufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoXG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIHNwYWNlQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICB9LFxuICAgIFwicGxhbmV0LWxhYmVsLWNvbnRhaW5lclwiOiB7XG4gICAgICBib3JkZXI6ICcxMHB4IHNvbGlkIHJlZCdcbiAgICB9XG4gIH0pXG4pKTtcblxuY29uc3QgU3BhY2VLaXRDb250YWluZXIgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBbdml6LCBzZXRWaXpdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW29wZW5QbGFuZXREaWFsb2csIHNldE9wZW5QbGFuZXREaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGxhbmV0RGlhbG9nLCBzZXRQbGFuZXREaWFsb2ddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAodmFsdWU6IGFueSB8wqBudWxsKSA9PiB7XG4gICAgc2V0T3BlblBsYW5ldERpYWxvZyhmYWxzZSk7XG4gICAgc2V0UGxhbmV0RGlhbG9nKHZhbHVlKTtcbiAgICB2aXouc3RhcnQoKTtcbiAgfTtcbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTiwgbGFiZWxUZXh0OiAnVEhFIFNVTid9KTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIHsuLi5TcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuRUFSVEgsIGxhYmVsVGV4dDogJ1RIRSBFQVJUSCd9KTtcblxuICAgIGNvbnN0IGNvbG9yID0gcGFyc2VJbnQoYDB4JHtmbG9hdFRvSGV4KDEuMzE0KX1gKTtcbiAgICBjb25zdCBwbGFuZXQxRGF0YSA9IHtcbiAgICAgIC8vIHBvc2l0aW9uOiBbMjY5LjAyNTg0MDQ2NDQ3MjQsIC0zMC4yNzEzMTc1MDM5NDE1OTYsIDg4NDcuODA4XSwgLy8gW3JhLCBkZWMsIGJhcnljZW50cmljX2Rpc3RhbmNlXVxuICAgICAgcGFydGljbGVTaXplOiAoMC41ODQzMjA4ICogMTAwKSwgLy8gcmFkaXVzXG4gICAgICBsYWJlbFRleHQ6ICc8ZGl2IGNsYXNzZXM9XCJwbGFuZXQtbGFiZWwtY29udGFpbmVyXCI+KjEzNDIyMTg1OS0wMDAwOTlFPC9kaXY+JyxcbiAgICAgIGVwaGVtOiBuZXcgU3BhY2VraXQuRXBoZW0oe1xuICAgICAgICBlcG9jaDogMTM1NzEzLjUzLCAvLyBvcmJpdF9wZXJpb2QgcmFkaWFsX3ZlbG9jaXR5XG4gICAgICAgIGE6IDU4LjM0ODI4NiwgLy8gc2VtaW1ham9yX2F4aXNcbiAgICAgICAgZTogMC42MTcwMDAxLCAvLyBlY2NlbnRyaWNpdHlcbiAgICAgICAgaTogLTg1LjMxNjA4NiwgLy8gaW5jbGluYXRpb25cbiAgICAgICAgb206IDQ1LjkwOTMzMiwgLy8gbG9uZ2l0dWRlX2FzY2VuZGluZ19ub2RlXG4gICAgICAgIHc6IDEwNjIyMy4wNSwgLy8gcGVyaWFzdHJvbl9kYXRlXG4gICAgICAgIG1hOiAyMy41MzY2NTUsIC8vIG1hZ19nXG4gICAgICB9LCAncmFkJyksXG4gICAgICAvLyB0ZXh0dXJlVXJsOiAnL3BhdGgvdG8vc3ByaXRlVGV4dHVyZS5wbmcnLFxuICAgICAgLy8gYmFzZVBhdGg6ICcvYmFzZScsXG4gICAgICB0aGVtZToge1xuICAgICAgICBjb2xvcjogY29sb3IsIC8vIFZfSVxuICAgICAgICBvcmJpdENvbG9yOiBjb2xvcixcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBwbGFuZXQxID0gdml6LmNyZWF0ZU9iamVjdCgnMScsIHBsYW5ldDFEYXRhKVxuXG4gICAgcGxhbmV0MS5fbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoXzogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGUgY291bGQgYmUgdXNlIHRvIHBvc2l0aW9uIGR5bmFtaWNhbGx5IHRoZSBtb2RhbCBidXQgbm90IHNvIGVhc3kgXG4gICAgICB2aXouc3RvcCgpO1xuICAgICAgc2V0UGxhbmV0RGlhbG9nKHBsYW5ldDFEYXRhKTtcbiAgICAgIHNldE9wZW5QbGFuZXREaWFsb2codHJ1ZSk7XG4gICAgfSk7XG4gICBcbiAgICAvKiBjb25zb2xlLmxvZygnc3BhY2VtYW4gPT09PicsIHNwYWNlbWFuKTtcbiAgICBzcGFjZW1hbi5fbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGlja09iamVjdCgnc3BsYWNlbWFuJykpOyAqL1xuICAgIC8vIHNwYWNlbWFuLl9sYWJlbC5vbmNsaWNrKCgpID0+IGNvbnNvbGUubG9nKCdPS09LT0sgY2xpY2sgc3BhY2VtYW4nKSk7XG5cbiAgICBjb25zb2xlLmxvZygnVklaID09PT4nLCB2aXopO1xuICAgIC8vIHZpei5zdG9wKCk7XG4gICAgc2V0Vml6KHZpeik7XG4gIH1cblxuICBjb25zdCByZXNldENhbWVyYSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICBpbml0U3BhY2VLaXQoKTtcbiAgICAvKiBEb2VzbnQgd29yay4uLiBjb25zdCBjYW1lcmEgPSB2aXouZ2V0Vmlld2VyKCk7XG4gICAgY29uc29sZS5sb2coJ1Jlc2V0IENhbWVyYSA9PT0+Jywgdml6LCBjYW1lcmEpO1xuICAgIGNhbWVyYS5fY2FtZXJhQ29udHJvbHMucmVzZXQoKTsgKi9cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdFNwYWNlS2l0KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0aW9uIHdpdGggSE1SIGFzIHZpeiBhcyBubyBkZXN0cm95IG1ldGhvZCAtIG5vIGltcGFjdCBvdGhlcndpc2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDw+XG4gICAgPERhdGFTbGlkZXIgZGVmYXVsdFZhbHVlPXs1MH0gc3RlcD17NTB9IG1pbj17MH0gbWF4PXsxMDAwMH0gLz5cbiAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VDb250YWluZXJ9PjwvZGl2PlxuICAgIDxBY3Rpb25CdXR0b25zXG4gICAgICByZXNldD17cmVzZXRDYW1lcmF9XG4gICAgLz5cbiAgICA8UGxhbmV0RGlhbG9nIG9wZW49e29wZW5QbGFuZXREaWFsb2d9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBkYXRhPXtwbGFuZXREaWFsb2d9Lz5cbiAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGFjZUtpdENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/spacekit/container.tsx\n");

/***/ })

})