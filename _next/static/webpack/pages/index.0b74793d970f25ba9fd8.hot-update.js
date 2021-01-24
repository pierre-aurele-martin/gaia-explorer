webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _viz = _useState[0],\n      setViz = _useState[1];\n\n  var floatToHex = function floatToHex(_float) {\n    var getHex = function getHex(i) {\n      return ('00' + i.toString(16)).slice(-2);\n    };\n\n    var view = new DataView(new ArrayBuffer(4));\n    var result;\n    view.setFloat32(0, _float);\n    result = Array.apply(null, {\n      length: 4\n    }).map(function (_, i) {\n      return getHex(view.getUint8(i));\n    }).join('');\n    console.log(result, typeof result);\n    return result;\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n    // viz.createStars();\n    // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = parseInt(\"0x\".concat(floatToHex(1.314)));\n    console.log('COLOR ===>', color);\n    viz.createObject('1', {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      scale: [1, 1, 1],\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: 'My object',\n      hideOrbit: false,\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    });\n    /* const spaceman = viz.createObject('spaceman', {\n      labelText: '<div>Tesla Roadster</div>',\n      // labelUrl: 'https://www.google.com',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        \n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        \n        // Where the object is in its orbit.\n        epoch: 2458426.500000000,\n      }, 'deg'),\n    }); */\n\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n    setViz(viz);\n  };\n  /* const clickObject = (i) => {\n    console.log('Click an object ===>', i);\n  } */\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s1 = _useState2[0],\n      setS1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s2 = _useState3[0],\n      setS2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s3 = _useState4[0],\n      setS3 = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', s1, s2, s3);\n\n    if (s1 && s2 && s3) {\n      initSpaceKit();\n    }\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var scripts = [{\n      src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js',\n      onLoad: setS1\n    }, {\n      src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js',\n      onLoad: setS2\n    }, {\n      src: \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\"),\n      onLoad: setS3\n    }];\n\n    var _loop = function _loop() {\n      var _scripts$_i = _scripts[_i],\n          src = _scripts$_i.src,\n          onLoad = _scripts$_i.onLoad;\n      var s = document.createElement('script');\n      s.setAttribute('src', src);\n      s.async = true;\n\n      s.onload = function () {\n        console.log(\"script \".concat(src, \" is loadedd\"));\n        onLoad(true);\n      };\n\n      document.head.appendChild(s);\n    };\n\n    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {\n      _loop();\n    }\n\n    return function () {\n      console.log('CLEANUP TEST', document.getElementById('main-container')); // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"hvZIlZHfFwOf+mvKiojdMYifZiA=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJfdml6Iiwic2V0Vml6IiwiZmxvYXRUb0hleCIsImZsb2F0IiwiZ2V0SGV4IiwiaSIsInRvU3RyaW5nIiwic2xpY2UiLCJ2aWV3IiwiRGF0YVZpZXciLCJBcnJheUJ1ZmZlciIsInJlc3VsdCIsInNldEZsb2F0MzIiLCJBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwibWFwIiwiXyIsImdldFVpbnQ4Iiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJpbml0U3BhY2VLaXQiLCJTcGFjZWtpdCIsIndpbmRvdyIsInZpeiIsIlNpbXVsYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzZVBhdGgiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJsYWJlbFRleHQiLCJFQVJUSCIsImNvbG9yIiwicGFyc2VJbnQiLCJzY2FsZSIsInBhcnRpY2xlU2l6ZSIsImhpZGVPcmJpdCIsImVwaGVtIiwiRXBoZW0iLCJlcG9jaCIsImEiLCJlIiwib20iLCJ3IiwibWEiLCJ0aGVtZSIsIm9yYml0Q29sb3IiLCJzMSIsInNldFMxIiwiczIiLCJzZXRTMiIsInMzIiwic2V0UzMiLCJ1c2VFZmZlY3QiLCJzY3JpcHRzIiwic3JjIiwib25Mb2FkIiwicyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhc3luYyIsIm9ubG9hZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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QUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQUlFLE1BQUMscURBQUQ7QUFBSyxTQUFLLEVBQUMsT0FBWDtBQUFtQixVQUFNLEVBQUMsT0FBMUI7QUFBa0MsU0FBSyxFQUFFO0FBQUNHLFdBQUssRUFBRSxPQUFSO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQXlCLGFBQVMsRUFBRUcsT0FBTyxDQUFDTCxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQsQ0FySUQ7O0dBQU1JLFM7VUFDWVQsUzs7O0tBRFpTLFM7QUF1SVNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBTcGFjZWtpdDogYW55OyB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IChcbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG4gICAgc3BhY2VDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgfSlcbikpO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBbX3Zpeiwgc2V0Vml6XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgY29uc3QgZmxvYXRUb0hleCA9IChmbG9hdDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBnZXRIZXggPSAoaSkgPT4gKCcwMCcgKyBpLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDQpKTtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgdmlldy5zZXRGbG9hdDMyKDAsIGZsb2F0KTtcblxuICAgIHJlc3VsdCA9IEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiA0IH0pLm1hcCgoXywgaSkgPT4gZ2V0SGV4KHZpZXcuZ2V0VWludDgoaSkpKS5qb2luKCcnKTtcblxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgdHlwZW9mIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICAvLyB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTiwgbGFiZWxUZXh0OiAnVEhFIFNVTid9KTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIHsuLi5TcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuRUFSVEgsIGxhYmVsVGV4dDogJ1RIRSBFQVJUSCd9KTtcblxuICAgIGNvbnN0IGNvbG9yID0gcGFyc2VJbnQoYDB4JHtmbG9hdFRvSGV4KDEuMzE0KX1gKTtcbiAgICBjb25zb2xlLmxvZygnQ09MT1IgPT09PicsIGNvbG9yKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCcxJywge1xuICAgICAgLy8gcG9zaXRpb246IFsyNjkuMDI1ODQwNDY0NDcyNCwgLTMwLjI3MTMxNzUwMzk0MTU5NiwgODg0Ny44MDhdLCAvLyBbcmEsIGRlYywgYmFyeWNlbnRyaWNfZGlzdGFuY2VdXG4gICAgICBzY2FsZTogWzEsIDEsIDFdLFxuICAgICAgcGFydGljbGVTaXplOiAoMC41ODQzMjA4ICogMTAwKSwgLy8gcmFkaXVzXG4gICAgICBsYWJlbFRleHQ6ICdNeSBvYmplY3QnLFxuICAgICAgaGlkZU9yYml0OiBmYWxzZSxcbiAgICAgIGVwaGVtOiBuZXcgU3BhY2VraXQuRXBoZW0oe1xuICAgICAgICBlcG9jaDogMTM1NzEzLjUzLCAvLyBvcmJpdF9wZXJpb2QgcmFkaWFsX3ZlbG9jaXR5XG4gICAgICAgIGE6IDU4LjM0ODI4NiwgLy8gc2VtaW1ham9yX2F4aXNcbiAgICAgICAgZTogMC42MTcwMDAxLCAvLyBlY2NlbnRyaWNpdHlcbiAgICAgICAgaTogLTg1LjMxNjA4NiwgLy8gaW5jbGluYXRpb25cbiAgICAgICAgb206IDQ1LjkwOTMzMiwgLy8gbG9uZ2l0dWRlX2FzY2VuZGluZ19ub2RlXG4gICAgICAgIHc6IDEwNjIyMy4wNSwgLy8gcGVyaWFzdHJvbl9kYXRlXG4gICAgICAgIG1hOiAyMy41MzY2NTUsIC8vIG1hZ19nXG4gICAgICB9LCAncmFkJyksXG4gICAgICAvLyB0ZXh0dXJlVXJsOiAnL3BhdGgvdG8vc3ByaXRlVGV4dHVyZS5wbmcnLFxuICAgICAgLy8gYmFzZVBhdGg6ICcvYmFzZScsXG4gICAgICB0aGVtZToge1xuICAgICAgICBjb2xvcjogY29sb3IsIC8vIFZfSVxuICAgICAgICBvcmJpdENvbG9yOiBjb2xvcixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAvKiBjb25zdCBzcGFjZW1hbiA9IHZpei5jcmVhdGVPYmplY3QoJ3NwYWNlbWFuJywge1xuICAgICAgbGFiZWxUZXh0OiAnPGRpdj5UZXNsYSBSb2Fkc3RlcjwvZGl2PicsXG4gICAgICAvLyBsYWJlbFVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIG9yYml0IHNoYXBlLlxuICAgICAgICBhOiAxLjMyNDg3MDU2NDczMDYwNkUrMDAsXG4gICAgICAgIGU6IDIuNTU3Nzg1OTk1NjY1NjgyRS0wMSxcbiAgICAgICAgaTogMS4wNzc1NTA3MjI4MDQ4NjBFKzAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBvcmJpdC5cbiAgICAgICAgb206IDMuMTcwOTQ2OTY0MzI1NjM4RSswMixcbiAgICAgICAgdzogMS43NzQ4NjU4MjIyNDgzOTVFKzAyLFxuICAgICAgICBtYTogMS43NjQzMDIxOTI0ODc5NTVFKzAyLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hlcmUgdGhlIG9iamVjdCBpcyBpbiBpdHMgb3JiaXQuXG4gICAgICAgIGVwb2NoOiAyNDU4NDI2LjUwMDAwMDAwMCxcbiAgICAgIH0sICdkZWcnKSxcbiAgICB9KTsgKi9cblxuICAgIC8qIGNvbnNvbGUubG9nKCdzcGFjZW1hbiA9PT0+Jywgc3BhY2VtYW4pO1xuICAgIHNwYWNlbWFuLl9sYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsaWNrT2JqZWN0KCdzcGxhY2VtYW4nKSk7ICovXG4gICAgLy8gc3BhY2VtYW4uX2xhYmVsLm9uY2xpY2soKCkgPT4gY29uc29sZS5sb2coJ09LT0tPSyBjbGljayBzcGFjZW1hbicpKTtcblxuICAgIC8vIHZpei5zdG9wKCk7XG4gICAgc2V0Vml6KHZpeik7XG4gIH1cblxuICAvKiBjb25zdCBjbGlja09iamVjdCA9IChpKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrIGFuIG9iamVjdCA9PT0+JywgaSk7XG4gIH0gKi9cblxuICBjb25zdCBbczEsIHNldFMxXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3MyLCBzZXRTMl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzMywgc2V0UzNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICBjb25zb2xlLmxvZygnU0NSSVBUUyBoYXMgY2hhbmdlZCA9PT0+JywgczEsIHMyLCBzMyk7XG4gICAgaWYgKHMxICYmIHMyICYmIHMzKcKge1xuICAgICAgaW5pdFNwYWNlS2l0KCk7XG4gICAgfVxuICB9LCBbczEsIHMyLCBzM10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0cyA9IFtcbiAgICAgIHtzcmM6ICdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi90aHJlZS5yOTgubWluLmpzJywgb25Mb2FkOiBzZXRTMX0sXG4gICAgICB7c3JjOiAnaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvVHJhY2tiYWxsQ29udHJvbHMuanMnLCBvbkxvYWQ6IHNldFMyfSxcbiAgICAgIHtzcmM6IGAke3Byb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6ICcvZ2FpYS1leHBsb3Jlcid9L3NjcmlwdHMvc3BhY2VraXQuanNgLCBvbkxvYWQ6IHNldFMzfVxuICAgIF1cbiAgICBmb3IgKGxldCB7c3JjLCBvbkxvYWR9IG9mIHNjcmlwdHMpIHtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICBzLmFzeW5jID0gdHJ1ZTtcbiAgICAgIHMub25sb2FkPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzY3JpcHQgJHtzcmN9IGlzIGxvYWRlZGRgKTtcbiAgICAgICAgb25Mb2FkKHRydWUpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0NMRUFOVVAgVEVTVCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpKTtcbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0aW9uIHdpdGggSE1SIGFzIHZpeiBhcyBubyBkZXN0cm95IG1ldGhvZCAtIG5vIGltcGFjdCBvdGhlcndpc2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Qm94IHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiIHN0eWxlPXt7d2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJ319PlxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VDb250YWluZXJ9PjwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})