webpackHotUpdate_N_E(1,{

/***/ "./components/spacekit/container.tsx":
/*!*******************************************!*\
  !*** ./components/spacekit/container.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _utils_floatToHex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/floatToHex */ \"./utils/floatToHex.ts\");\n/* harmony import */ var _planetDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planetDialog */ \"./components/spacekit/planetDialog.tsx\");\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/components/spacekit/container.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar SpaceKitContainer = function SpaceKitContainer() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      viz = _useState[0],\n      setViz = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      openPlanetDialog = _useState2[0],\n      setOpenPlanetDialog = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      planetDialog = _useState3[0],\n      setPlanetDialog = _useState3[1];\n\n  var handleClose = function handleClose(value) {\n    setOpenPlanetDialog(false);\n    setPlanetDialog(value);\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = parseInt(\"0x\".concat(Object(_utils_floatToHex__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(1.314)));\n    var planet1Data = {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: '*134221859-000099E',\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    };\n    var planet1 = viz.createObject('1', planet1Data);\n    console.log('PLANET1 ===>', planet1);\n\n    planet1._label.addEventListner('click', function (e) {\n      console.log('planet 1 click ===>', e, planet1Data);\n      setPlanetDialog(planet1Data);\n      setOpenPlanetDialog(true);\n    });\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n\n    setViz(viz);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    initSpaceKit();\n    return function () {\n      // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }), __jsx(_planetDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    open: openPlanetDialog,\n    onClose: handleClose,\n    data: planetDialog,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }));\n};\n\n_s(SpaceKitContainer, \"Lh6ksyj2tK7Q82IN8pDpf+BU0yQ=\", false, function () {\n  return [useStyles];\n});\n\n_c = SpaceKitContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceKitContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpaceKitContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGFjZWtpdC9jb250YWluZXIudHN4PzEyMjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJTcGFjZUtpdENvbnRhaW5lciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInZpeiIsInNldFZpeiIsIm9wZW5QbGFuZXREaWFsb2ciLCJzZXRPcGVuUGxhbmV0RGlhbG9nIiwicGxhbmV0RGlhbG9nIiwic2V0UGxhbmV0RGlhbG9nIiwiaGFuZGxlQ2xvc2UiLCJ2YWx1ZSIsImluaXRTcGFjZUtpdCIsIlNwYWNla2l0Iiwid2luZG93IiwiU2ltdWxhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJiYXNlUGF0aCIsImNyZWF0ZVN0YXJzIiwiY3JlYXRlT2JqZWN0IiwiU3BhY2VPYmplY3RQcmVzZXRzIiwiU1VOIiwibGFiZWxUZXh0IiwiRUFSVEgiLCJjb2xvciIsInBhcnNlSW50IiwiZmxvYXRUb0hleCIsInBsYW5ldDFEYXRhIiwicGFydGljbGVTaXplIiwiZXBoZW0iLCJFcGhlbSIsImVwb2NoIiwiYSIsImUiLCJpIiwib20iLCJ3IiwibWEiLCJ0aGVtZSIsIm9yYml0Q29sb3IiLCJwbGFuZXQxIiwiY29uc29sZSIsImxvZyIsIl9sYWJlbCIsImFkZEV2ZW50TGlzdG5lciIsInVzZUVmZmVjdCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURLO0FBSVhDLGtCQUFjLEVBQUU7QUFDZEMs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Q0k7QUFFQTs7O0FBQ0FGLFVBQU0sQ0FBQ0QsR0FBRCxDQUFOO0FBQ0QsR0FqREQ7O0FBbURBMEMseURBQVMsQ0FBQyxZQUFNO0FBQ2RsQyxnQkFBWTtBQUNaLFdBQU8sWUFBTTtBQUNYO0FBQ0FJLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEM4QixTQUExQyxHQUFzRCxFQUF0RDtBQUNELEtBSEQ7QUFLRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FBTyxtRUFDTDtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUU3QyxPQUFPLENBQUNMLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVMLE1BQUMscURBQUQ7QUFBYyxRQUFJLEVBQUVTLGdCQUFwQjtBQUFzQyxXQUFPLEVBQUVJLFdBQS9DO0FBQTRELFFBQUksRUFBRUYsWUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLENBQVA7QUFJRCxDQTVFRDs7R0FBTVAsaUI7VUFDWVQsUzs7O0tBRFpTLGlCO0FBOEVTQSxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BhY2VraXQvY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZsb2F0VG9IZXggZnJvbSAnLi4vLi4vdXRpbHMvZmxvYXRUb0hleCc7XG5pbXBvcnQgUGxhbmV0RGlhbG9nIGZyb20gJy4vcGxhbmV0RGlhbG9nJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgU3BhY2VraXQ6IGFueTsgfVxufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoXG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIHNwYWNlQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICB9XG4gIH0pXG4pKTtcblxuY29uc3QgU3BhY2VLaXRDb250YWluZXIgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBbdml6LCBzZXRWaXpdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgY29uc3QgW29wZW5QbGFuZXREaWFsb2csIHNldE9wZW5QbGFuZXREaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGxhbmV0RGlhbG9nLCBzZXRQbGFuZXREaWFsb2ddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAodmFsdWU6IGFueSB8wqBudWxsKSA9PiB7XG4gICAgc2V0T3BlblBsYW5ldERpYWxvZyhmYWxzZSk7XG4gICAgc2V0UGxhbmV0RGlhbG9nKHZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTiwgbGFiZWxUZXh0OiAnVEhFIFNVTid9KTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIHsuLi5TcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuRUFSVEgsIGxhYmVsVGV4dDogJ1RIRSBFQVJUSCd9KTtcblxuICAgIGNvbnN0IGNvbG9yID0gcGFyc2VJbnQoYDB4JHtmbG9hdFRvSGV4KDEuMzE0KX1gKTtcbiAgICBjb25zdCBwbGFuZXQxRGF0YSA9IHtcbiAgICAgIC8vIHBvc2l0aW9uOiBbMjY5LjAyNTg0MDQ2NDQ3MjQsIC0zMC4yNzEzMTc1MDM5NDE1OTYsIDg4NDcuODA4XSwgLy8gW3JhLCBkZWMsIGJhcnljZW50cmljX2Rpc3RhbmNlXVxuICAgICAgcGFydGljbGVTaXplOiAoMC41ODQzMjA4ICogMTAwKSwgLy8gcmFkaXVzXG4gICAgICBsYWJlbFRleHQ6ICcqMTM0MjIxODU5LTAwMDA5OUUnLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIGVwb2NoOiAxMzU3MTMuNTMsIC8vIG9yYml0X3BlcmlvZCByYWRpYWxfdmVsb2NpdHlcbiAgICAgICAgYTogNTguMzQ4Mjg2LCAvLyBzZW1pbWFqb3JfYXhpc1xuICAgICAgICBlOiAwLjYxNzAwMDEsIC8vIGVjY2VudHJpY2l0eVxuICAgICAgICBpOiAtODUuMzE2MDg2LCAvLyBpbmNsaW5hdGlvblxuICAgICAgICBvbTogNDUuOTA5MzMyLCAvLyBsb25naXR1ZGVfYXNjZW5kaW5nX25vZGVcbiAgICAgICAgdzogMTA2MjIzLjA1LCAvLyBwZXJpYXN0cm9uX2RhdGVcbiAgICAgICAgbWE6IDIzLjUzNjY1NSwgLy8gbWFnX2dcbiAgICAgIH0sICdyYWQnKSxcbiAgICAgIC8vIHRleHR1cmVVcmw6ICcvcGF0aC90by9zcHJpdGVUZXh0dXJlLnBuZycsXG4gICAgICAvLyBiYXNlUGF0aDogJy9iYXNlJyxcbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvciwgLy8gVl9JXG4gICAgICAgIG9yYml0Q29sb3I6IGNvbG9yLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHBsYW5ldDEgPSB2aXouY3JlYXRlT2JqZWN0KCcxJywgcGxhbmV0MURhdGEpXG5cbiAgICBjb25zb2xlLmxvZygnUExBTkVUMSA9PT0+JywgcGxhbmV0MSk7XG4gICAgcGxhbmV0MS5fbGFiZWwuYWRkRXZlbnRMaXN0bmVyKCdjbGljaycsIChlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3BsYW5ldCAxIGNsaWNrID09PT4nLCBlLCBwbGFuZXQxRGF0YSk7XG4gICAgICBzZXRQbGFuZXREaWFsb2cocGxhbmV0MURhdGEpO1xuICAgICAgc2V0T3BlblBsYW5ldERpYWxvZyh0cnVlKTtcbiAgICB9KTtcbiAgIFxuICAgIC8qIGNvbnNvbGUubG9nKCdzcGFjZW1hbiA9PT0+Jywgc3BhY2VtYW4pO1xuICAgIHNwYWNlbWFuLl9sYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsaWNrT2JqZWN0KCdzcGxhY2VtYW4nKSk7ICovXG4gICAgLy8gc3BhY2VtYW4uX2xhYmVsLm9uY2xpY2soKCkgPT4gY29uc29sZS5sb2coJ09LT0tPSyBjbGljayBzcGFjZW1hbicpKTtcblxuICAgIC8vIHZpei5zdG9wKCk7XG4gICAgc2V0Vml6KHZpeik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRTcGFjZUtpdCgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGlvbiB3aXRoIEhNUiBhcyB2aXogYXMgbm8gZGVzdHJveSBtZXRob2QgLSBubyBpbXBhY3Qgb3RoZXJ3aXNlXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiA8PlxuICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgPFBsYW5ldERpYWxvZyBvcGVuPXtvcGVuUGxhbmV0RGlhbG9nfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gZGF0YT17cGxhbmV0RGlhbG9nfS8+XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BhY2VLaXRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/spacekit/container.tsx\n");

/***/ })

})