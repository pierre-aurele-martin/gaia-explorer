webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _viz = _useState[0],\n      setViz = _useState[1];\n\n  var floatToHex = function floatToHex(_float) {\n    var view = new DataView(new ArrayBuffer(4));\n    var result;\n    view.setFloat32(0, _float);\n    result = Array.apply(null, {\n      length: 4\n    }).map(function (_, i) {\n      return ('00' + i.toString(16)).slice(-2);\n    }).join('');\n    console.log(result, typeof result);\n    return result;\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n    // viz.createStars();\n    // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = floatToHex(1.314);\n    console.log('COLOR ===>', color);\n    viz.createObject('1', {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      scale: [1, 1, 1],\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: 'My object',\n      hideOrbit: false,\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    });\n    /* const spaceman = viz.createObject('spaceman', {\n      labelText: '<div>Tesla Roadster</div>',\n      // labelUrl: 'https://www.google.com',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        \n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        \n        // Where the object is in its orbit.\n        epoch: 2458426.500000000,\n      }, 'deg'),\n    }); */\n\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n    setViz(viz);\n  };\n  /* const clickObject = (i) => {\n    console.log('Click an object ===>', i);\n  } */\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s1 = _useState2[0],\n      setS1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s2 = _useState3[0],\n      setS2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s3 = _useState4[0],\n      setS3 = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', s1, s2, s3);\n\n    if (s1 && s2 && s3) {\n      initSpaceKit();\n    }\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var scripts = [{\n      src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js',\n      onLoad: setS1\n    }, {\n      src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js',\n      onLoad: setS2\n    }, {\n      src: \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\"),\n      onLoad: setS3\n    }];\n\n    var _loop = function _loop() {\n      var _scripts$_i = _scripts[_i],\n          src = _scripts$_i.src,\n          onLoad = _scripts$_i.onLoad;\n      var s = document.createElement('script');\n      s.setAttribute('src', src);\n      s.async = true;\n\n      s.onload = function () {\n        console.log(\"script \".concat(src, \" is loadedd\"));\n        onLoad(true);\n      };\n\n      document.head.appendChild(s);\n    };\n\n    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {\n      _loop();\n    }\n\n    return function () {\n      console.log('CLEANUP TEST', document.getElementById('main-container')); // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"hvZIlZHfFwOf+mvKiojdMYifZiA=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJfdml6Iiwic2V0Vml6IiwiZmxvYXRUb0hleCIsImZsb2F0IiwidmlldyIsIkRhdGFWaWV3IiwiQXJyYXlCdWZmZXIiLCJyZXN1bHQiLCJzZXRGbG9hdDMyIiwiQXJyYXkiLCJhcHBseSIsImxlbmd0aCIsIm1hcCIsIl8iLCJpIiwidG9TdHJpbmciLCJzbGljZSIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJ2aXoiLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlT2JqZWN0IiwiU3BhY2VPYmplY3RQcmVzZXRzIiwiU1VOIiwibGFiZWxUZXh0IiwiRUFSVEgiLCJjb2xvciIsInNjYWxlIiwicGFydGljbGVTaXplIiwiaGlkZU9yYml0IiwiZXBoZW0iLCJFcGhlbSIsImVwb2NoIiwiYSIsImUiLCJvbSIsInciLCJtYSIsInRoZW1lIiwib3JiaXRDb2xvciIsInMxIiwic2V0UzEiLCJzMiIsInNldFMyIiwiczMiLCJzZXRTMyIsInVzZUVmZmVjdCIsInNjcmlwdHMiLCJzcmMiLCJvbkxvYWQiLCJzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFzeW5jIiwib25sb2FkIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FB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SyxFQUFFO0FBQUNHLFdBQUssRUFBRSxPQUFSO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQXlCLGFBQVMsRUFBRUcsT0FBTyxDQUFDTCxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQsQ0FySUQ7O0dBQU1JLFM7VUFDWVQsUzs7O0tBRFpTLFM7QUF1SVNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBTcGFjZWtpdDogYW55OyB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IChcbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG4gICAgc3BhY2VDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgfSlcbikpO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBbX3Zpeiwgc2V0Vml6XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgY29uc3QgZmxvYXRUb0hleCA9IChmbG9hdDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcig0KSk7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHZpZXcuc2V0RmxvYXQzMigwLCBmbG9hdCk7XG5cbiAgICByZXN1bHQgPSBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogNCB9KS5tYXAoKF8sIGkpID0+ICgnMDAnICsgaS50b1N0cmluZygxNikpLnNsaWNlKC0yKSkuam9pbignJyk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQsIHR5cGVvZiByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IGluaXRTcGFjZUtpdCA9ICgpID0+IHtcbiAgICBjb25zdCBTcGFjZWtpdCA9IHdpbmRvdyAmJiB3aW5kb3cuU3BhY2VraXQ7XG4gICAgY29uc3Qgdml6ID0gbmV3IFNwYWNla2l0LlNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyksIHtcbiAgICAgIGJhc2VQYXRoOiAnaHR0cHM6Ly90eXBwby5naXRodWIuaW8vc3BhY2VraXQvc3JjJyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIHNreWJveCB1c2luZyBOQVNBIFRZQ0hPIGFydHdvcmsuXG4gICAgLy8gdml6LmNyZWF0ZVN0YXJzKCk7XG5cbiAgICAvLyBDcmVhdGUgb3VyIGZpcnN0IG9iamVjdCAtIHRoZSBzdW4gLSB1c2luZyBhIHByZXNldCBzcGFjZSBvYmplY3QuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3VuJywgey4uLlNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TVU4sIGxhYmVsVGV4dDogJ1RIRSBTVU4nfSk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnZWFydGgnLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkVBUlRILCBsYWJlbFRleHQ6ICdUSEUgRUFSVEgnfSk7XG5cbiAgICBjb25zdCBjb2xvciA9IGZsb2F0VG9IZXgoMS4zMTQpO1xuICAgIGNvbnNvbGUubG9nKCdDT0xPUiA9PT0+JywgY29sb3IpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJzEnLCB7XG4gICAgICAvLyBwb3NpdGlvbjogWzI2OS4wMjU4NDA0NjQ0NzI0LCAtMzAuMjcxMzE3NTAzOTQxNTk2LCA4ODQ3LjgwOF0sIC8vIFtyYSwgZGVjLCBiYXJ5Y2VudHJpY19kaXN0YW5jZV1cbiAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXG4gICAgICBwYXJ0aWNsZVNpemU6ICgwLjU4NDMyMDggKiAxMDApLCAvLyByYWRpdXNcbiAgICAgIGxhYmVsVGV4dDogJ015IG9iamVjdCcsXG4gICAgICBoaWRlT3JiaXQ6IGZhbHNlLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIGVwb2NoOiAxMzU3MTMuNTMsIC8vIG9yYml0X3BlcmlvZCByYWRpYWxfdmVsb2NpdHlcbiAgICAgICAgYTogNTguMzQ4Mjg2LCAvLyBzZW1pbWFqb3JfYXhpc1xuICAgICAgICBlOiAwLjYxNzAwMDEsIC8vIGVjY2VudHJpY2l0eVxuICAgICAgICBpOiAtODUuMzE2MDg2LCAvLyBpbmNsaW5hdGlvblxuICAgICAgICBvbTogNDUuOTA5MzMyLCAvLyBsb25naXR1ZGVfYXNjZW5kaW5nX25vZGVcbiAgICAgICAgdzogMTA2MjIzLjA1LCAvLyBwZXJpYXN0cm9uX2RhdGVcbiAgICAgICAgbWE6IDIzLjUzNjY1NSwgLy8gbWFnX2dcbiAgICAgIH0sICdyYWQnKSxcbiAgICAgIC8vIHRleHR1cmVVcmw6ICcvcGF0aC90by9zcHJpdGVUZXh0dXJlLnBuZycsXG4gICAgICAvLyBiYXNlUGF0aDogJy9iYXNlJyxcbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvciwgLy8gVl9JXG4gICAgICAgIG9yYml0Q29sb3I6IGNvbG9yLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC8qIGNvbnN0IHNwYWNlbWFuID0gdml6LmNyZWF0ZU9iamVjdCgnc3BhY2VtYW4nLCB7XG4gICAgICBsYWJlbFRleHQ6ICc8ZGl2PlRlc2xhIFJvYWRzdGVyPC9kaXY+JyxcbiAgICAgIC8vIGxhYmVsVXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbScsXG4gICAgICBlcGhlbTogbmV3IFNwYWNla2l0LkVwaGVtKHtcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgb3JiaXQgc2hhcGUuXG4gICAgICAgIGE6IDEuMzI0ODcwNTY0NzMwNjA2RSswMCxcbiAgICAgICAgZTogMi41NTc3ODU5OTU2NjU2ODJFLTAxLFxuICAgICAgICBpOiAxLjA3NzU1MDcyMjgwNDg2MEUrMDAsXG4gICAgICAgIFxuICAgICAgICAvLyBUaGVzZSBwYXJhbWV0ZXJzIGRlZmluZSB0aGUgb3JpZW50YXRpb24gb2YgdGhlIG9yYml0LlxuICAgICAgICBvbTogMy4xNzA5NDY5NjQzMjU2MzhFKzAyLFxuICAgICAgICB3OiAxLjc3NDg2NTgyMjI0ODM5NUUrMDIsXG4gICAgICAgIG1hOiAxLjc2NDMwMjE5MjQ4Nzk1NUUrMDIsXG4gICAgICAgIFxuICAgICAgICAvLyBXaGVyZSB0aGUgb2JqZWN0IGlzIGluIGl0cyBvcmJpdC5cbiAgICAgICAgZXBvY2g6IDI0NTg0MjYuNTAwMDAwMDAwLFxuICAgICAgfSwgJ2RlZycpLFxuICAgIH0pOyAqL1xuXG4gICAgLyogY29uc29sZS5sb2coJ3NwYWNlbWFuID09PT4nLCBzcGFjZW1hbik7XG4gICAgc3BhY2VtYW4uX2xhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xpY2tPYmplY3QoJ3NwbGFjZW1hbicpKTsgKi9cbiAgICAvLyBzcGFjZW1hbi5fbGFiZWwub25jbGljaygoKSA9PiBjb25zb2xlLmxvZygnT0tPS09LIGNsaWNrIHNwYWNlbWFuJykpO1xuXG4gICAgLy8gdml6LnN0b3AoKTtcbiAgICBzZXRWaXoodml6KTtcbiAgfVxuXG4gIC8qIGNvbnN0IGNsaWNrT2JqZWN0ID0gKGkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2sgYW4gb2JqZWN0ID09PT4nLCBpKTtcbiAgfSAqL1xuXG4gIGNvbnN0IFtzMSwgc2V0UzFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbczIsIHNldFMyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3MzLCBzZXRTM10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+e1xuICAgIGNvbnNvbGUubG9nKCdTQ1JJUFRTIGhhcyBjaGFuZ2VkID09PT4nLCBzMSwgczIsIHMzKTtcbiAgICBpZiAoczEgJiYgczIgJiYgczMpwqB7XG4gICAgICBpbml0U3BhY2VLaXQoKTtcbiAgICB9XG4gIH0sIFtzMSwgczIsIHMzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHRzID0gW1xuICAgICAge3NyYzogJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL3RocmVlLnI5OC5taW4uanMnLCBvbkxvYWQ6IHNldFMxfSxcbiAgICAgIHtzcmM6ICdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi9UcmFja2JhbGxDb250cm9scy5qcycsIG9uTG9hZDogc2V0UzJ9LFxuICAgICAge3NyYzogYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogJy9nYWlhLWV4cGxvcmVyJ30vc2NyaXB0cy9zcGFjZWtpdC5qc2AsIG9uTG9hZDogc2V0UzN9XG4gICAgXVxuICAgIGZvciAobGV0IHtzcmMsIG9uTG9hZH0gb2Ygc2NyaXB0cykge1xuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgIHMuYXN5bmMgPSB0cnVlO1xuICAgICAgcy5vbmxvYWQ9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHNjcmlwdCAke3NyY30gaXMgbG9hZGVkZGApO1xuICAgICAgICBvbkxvYWQodHJ1ZSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ0xFQU5VUCBURVNUJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykpO1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRpb24gd2l0aCBITVIgYXMgdml6IGFzIG5vIGRlc3Ryb3kgbWV0aG9kIC0gbm8gaW1wYWN0IG90aGVyd2lzZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCIgc3R5bGU9e3t3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})