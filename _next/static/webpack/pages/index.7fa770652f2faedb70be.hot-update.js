webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _viz = _useState[0],\n      setViz = _useState[1];\n\n  var floatToHex = function floatToHex(_float) {\n    var result;\n\n    var getHex = function getHex(i) {\n      return ('00' + i.toString(16)).slice(-2);\n    };\n\n    var view = new DataView(new ArrayBuffer(4));\n    view.setFloat32(0, _float);\n    result = Array.apply(null, {\n      length: 4\n    }).map(function (_, i) {\n      return getHex(view.getUint8(i));\n    }).join('');\n    return result;\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n    // viz.createStars();\n    // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = parseInt(\"0x\".concat(floatToHex(1.314)));\n    viz.createObject('1', {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      scale: [1, 1, 1],\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: 'My object',\n      hideOrbit: false,\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    });\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n    setViz(viz);\n  };\n  /* const clickObject = (i) => {\n    console.log('Click an object ===>', i);\n  } */\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s1 = _useState2[0],\n      setS1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s2 = _useState3[0],\n      setS2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s3 = _useState4[0],\n      setS3 = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return s1 && s2 && s3 ? initSpaceKit() : null;\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var scripts = [{\n      src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js',\n      onLoad: setS1\n    }, {\n      src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js',\n      onLoad: setS2\n    }, {\n      src: \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\"),\n      onLoad: setS3\n    }];\n\n    var _loop = function _loop() {\n      var _scripts$_i = _scripts[_i],\n          src = _scripts$_i.src,\n          onLoad = _scripts$_i.onLoad;\n      var s = document.createElement('script');\n      s.setAttribute('src', src);\n      s.async = true;\n\n      s.onload = function () {\n        console.log(\"script \".concat(src, \" is loadedd\"), onLoad);\n        return onLoad(true);\n      };\n\n      document.head.appendChild(s);\n    };\n\n    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {\n      _loop();\n    }\n\n    return function () {\n      console.log('CLEANUP TEST', document.getElementById('main-container')); // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"hvZIlZHfFwOf+mvKiojdMYifZiA=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJfdml6Iiwic2V0Vml6IiwiZmxvYXRUb0hleCIsImZsb2F0IiwicmVzdWx0IiwiZ2V0SGV4IiwiaSIsInRvU3RyaW5nIiwic2xpY2UiLCJ2aWV3IiwiRGF0YVZpZXciLCJBcnJheUJ1ZmZlciIsInNldEZsb2F0MzIiLCJBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwibWFwIiwiXyIsImdldFVpbnQ4Iiwiam9pbiIsImluaXRTcGFjZUtpdCIsIlNwYWNla2l0Iiwid2luZG93Iiwidml6IiwiU2ltdWxhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJiYXNlUGF0aCIsImNyZWF0ZU9iamVjdCIsIlNwYWNlT2JqZWN0UHJlc2V0cyIsIlNVTiIsImxhYmVsVGV4dCIsIkVBUlRIIiwiY29sb3IiLCJwYXJzZUludCIsInNjYWxlIiwicGFydGljbGVTaXplIiwiaGlkZU9yYml0IiwiZXBoZW0iLCJFcGhlbSIsImVwb2NoIiwiYSIsImUiLCJvbSIsInciLCJtYSIsInRoZW1lIiwib3JiaXRDb2xvciIsInMxIiwic2V0UzEiLCJzMiIsInNldFMyIiwiczMiLCJzZXRTMyIsInVzZUVmZmVjdCIsInNjcmlwdHMiLCJzcmMiLCJvbkxvYWQiLCJzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFzeW5jIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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QUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFFRyxPQUFPLENBQUNMLGNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREY7QUFVRCxDQTVHRDs7R0FBTUksUztVQUNZVCxTOzs7S0FEWlMsUztBQThHU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IFNwYWNla2l0OiBhbnk7IH1cbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKFxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxXG4gICAgfSxcbiAgICBzcGFjZUNvbnRhaW5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snXG4gICAgfVxuICB9KVxuKSk7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+wqB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IFtfdml6LCBzZXRWaXpdID0gdXNlU3RhdGU8YW55PihudWxsKTtcblxuICBjb25zdCBmbG9hdFRvSGV4ID0gKGZsb2F0OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgY29uc3QgZ2V0SGV4ID0gKGkpID0+ICgnMDAnICsgaS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcig0KSk7XG4gICAgdmlldy5zZXRGbG9hdDMyKDAsIGZsb2F0KTtcbiAgICBcbiAgICByZXN1bHQgPSBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogNCB9KS5tYXAoKF8sIGkpID0+IGdldEhleCh2aWV3LmdldFVpbnQ4KGkpKSkuam9pbignJyk7XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBpbml0U3BhY2VLaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgU3BhY2VraXQgPSB3aW5kb3cgJiYgd2luZG93LlNwYWNla2l0O1xuICAgIGNvbnN0IHZpeiA9IG5ldyBTcGFjZWtpdC5TaW11bGF0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpLCB7XG4gICAgICBiYXNlUGF0aDogJ2h0dHBzOi8vdHlwcG8uZ2l0aHViLmlvL3NwYWNla2l0L3NyYycsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYSBza3lib3ggdXNpbmcgTkFTQSBUWUNITyBhcnR3b3JrLlxuICAgIC8vIHZpei5jcmVhdGVTdGFycygpO1xuXG4gICAgLy8gQ3JlYXRlIG91ciBmaXJzdCBvYmplY3QgLSB0aGUgc3VuIC0gdXNpbmcgYSBwcmVzZXQgc3BhY2Ugb2JqZWN0LlxuICAgIHZpei5jcmVhdGVPYmplY3QoJ3N1bicsIHsuLi5TcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuU1VOLCBsYWJlbFRleHQ6ICdUSEUgU1VOJ30pO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ2VhcnRoJywgey4uLlNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5FQVJUSCwgbGFiZWxUZXh0OiAnVEhFIEVBUlRIJ30pO1xuXG4gICAgY29uc3QgY29sb3IgPSBwYXJzZUludChgMHgke2Zsb2F0VG9IZXgoMS4zMTQpfWApO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJzEnLCB7XG4gICAgICAvLyBwb3NpdGlvbjogWzI2OS4wMjU4NDA0NjQ0NzI0LCAtMzAuMjcxMzE3NTAzOTQxNTk2LCA4ODQ3LjgwOF0sIC8vIFtyYSwgZGVjLCBiYXJ5Y2VudHJpY19kaXN0YW5jZV1cbiAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXG4gICAgICBwYXJ0aWNsZVNpemU6ICgwLjU4NDMyMDggKiAxMDApLCAvLyByYWRpdXNcbiAgICAgIGxhYmVsVGV4dDogJ015IG9iamVjdCcsXG4gICAgICBoaWRlT3JiaXQ6IGZhbHNlLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIGVwb2NoOiAxMzU3MTMuNTMsIC8vIG9yYml0X3BlcmlvZCByYWRpYWxfdmVsb2NpdHlcbiAgICAgICAgYTogNTguMzQ4Mjg2LCAvLyBzZW1pbWFqb3JfYXhpc1xuICAgICAgICBlOiAwLjYxNzAwMDEsIC8vIGVjY2VudHJpY2l0eVxuICAgICAgICBpOiAtODUuMzE2MDg2LCAvLyBpbmNsaW5hdGlvblxuICAgICAgICBvbTogNDUuOTA5MzMyLCAvLyBsb25naXR1ZGVfYXNjZW5kaW5nX25vZGVcbiAgICAgICAgdzogMTA2MjIzLjA1LCAvLyBwZXJpYXN0cm9uX2RhdGVcbiAgICAgICAgbWE6IDIzLjUzNjY1NSwgLy8gbWFnX2dcbiAgICAgIH0sICdyYWQnKSxcbiAgICAgIC8vIHRleHR1cmVVcmw6ICcvcGF0aC90by9zcHJpdGVUZXh0dXJlLnBuZycsXG4gICAgICAvLyBiYXNlUGF0aDogJy9iYXNlJyxcbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvciwgLy8gVl9JXG4gICAgICAgIG9yYml0Q29sb3I6IGNvbG9yLFxuICAgICAgfSxcbiAgICB9KVxuICAgXG4gICAgLyogY29uc29sZS5sb2coJ3NwYWNlbWFuID09PT4nLCBzcGFjZW1hbik7XG4gICAgc3BhY2VtYW4uX2xhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xpY2tPYmplY3QoJ3NwbGFjZW1hbicpKTsgKi9cbiAgICAvLyBzcGFjZW1hbi5fbGFiZWwub25jbGljaygoKSA9PiBjb25zb2xlLmxvZygnT0tPS09LIGNsaWNrIHNwYWNlbWFuJykpO1xuXG4gICAgLy8gdml6LnN0b3AoKTtcbiAgICBzZXRWaXoodml6KTtcbiAgfVxuXG4gIC8qIGNvbnN0IGNsaWNrT2JqZWN0ID0gKGkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2sgYW4gb2JqZWN0ID09PT4nLCBpKTtcbiAgfSAqL1xuXG4gIGNvbnN0IFtzMSwgc2V0UzFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbczIsIHNldFMyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3MzLCBzZXRTM10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IChzMSAmJiBzMiAmJiBzMyA/IGluaXRTcGFjZUtpdCgpIDogbnVsbCksIFtzMSwgczIsIHMzXSlcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHRzID0gW1xuICAgICAge3NyYzogJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL3RocmVlLnI5OC5taW4uanMnLCBvbkxvYWQ6IHNldFMxfSxcbiAgICAgIHtzcmM6ICdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi9UcmFja2JhbGxDb250cm9scy5qcycsIG9uTG9hZDogc2V0UzJ9LFxuICAgICAge3NyYzogYCR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogJy9nYWlhLWV4cGxvcmVyJ30vc2NyaXB0cy9zcGFjZWtpdC5qc2AsIG9uTG9hZDogc2V0UzN9XG4gICAgXVxuICAgIGZvciAobGV0IHtzcmMsIG9uTG9hZH0gb2Ygc2NyaXB0cykge1xuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgIHMuYXN5bmMgPSB0cnVlO1xuICAgICAgcy5vbmxvYWQ9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHNjcmlwdCAke3NyY30gaXMgbG9hZGVkZGAsIG9uTG9hZCk7XG4gICAgICAgIHJldHVybiBvbkxvYWQodHJ1ZSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQ0xFQU5VUCBURVNUJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykpO1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRpb24gd2l0aCBITVIgYXMgdml6IGFzIG5vIGRlc3Ryb3kgbWV0aG9kIC0gbm8gaW1wYWN0IG90aGVyd2lzZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCIgc3R5bGU9e3t3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})