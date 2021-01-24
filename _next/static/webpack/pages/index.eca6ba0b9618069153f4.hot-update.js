webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _viz = _useState[0],\n      setViz = _useState[1];\n\n  var floatToHex = function floatToHex(_float) {\n    var result;\n\n    var getHex = function getHex(i) {\n      return ('00' + i.toString(16)).slice(-2);\n    };\n\n    var view = new DataView(new ArrayBuffer(4));\n    view.setFloat32(0, _float);\n    result = Array.apply(null, {\n      length: 4\n    }).map(function (_, i) {\n      return getHex(view.getUint8(i));\n    }).join('');\n    return result;\n  };\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n    // viz.createStars();\n    // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    }));\n    var color = parseInt(\"0x\".concat(floatToHex(1.314)));\n    viz.createObject('1', {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: '*134221859-000099E',\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      theme: {\n        color: color,\n        // V_I\n        orbitColor: color\n      }\n    });\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n    setViz(viz);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s1 = _useState2[0],\n      setS1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s2 = _useState3[0],\n      setS2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s3 = _useState4[0],\n      setS3 = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return s1 && s2 && s3 ? initSpaceKit() : null;\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var scripts = [{\n      src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js',\n      onLoad: setS1\n    }, {\n      src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js',\n      onLoad: setS2\n    }, {\n      src: \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\"),\n      onLoad: setS3\n    }];\n\n    var _loop = function _loop() {\n      var _scripts$_i = _scripts[_i],\n          src = _scripts$_i.src,\n          onLoad = _scripts$_i.onLoad;\n      var s = document.createElement('script');\n      s.setAttribute('src', src);\n      s.async = true;\n\n      s.onload = function () {\n        return onLoad(true);\n      };\n\n      document.head.appendChild(s);\n    };\n\n    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {\n      _loop();\n    }\n\n    return function () {\n      // Avoid duplication with HMR as viz as no destroy method - no impact otherwise\n      document.getElementById('main-container').innerHTML = '';\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"hvZIlZHfFwOf+mvKiojdMYifZiA=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJfdml6Iiwic2V0Vml6IiwiZmxvYXRUb0hleCIsImZsb2F0IiwicmVzdWx0IiwiZ2V0SGV4IiwiaSIsInRvU3RyaW5nIiwic2xpY2UiLCJ2aWV3IiwiRGF0YVZpZXciLCJBcnJheUJ1ZmZlciIsInNldEZsb2F0MzIiLCJBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwibWFwIiwiXyIsImdldFVpbnQ4Iiwiam9pbiIsImluaXRTcGFjZUtpdCIsIlNwYWNla2l0Iiwid2luZG93Iiwidml6IiwiU2ltdWxhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJiYXNlUGF0aCIsImNyZWF0ZU9iamVjdCIsIlNwYWNlT2JqZWN0UHJlc2V0cyIsIlNVTiIsImxhYmVsVGV4dCIsIkVBUlRIIiwiY29sb3IiLCJwYXJzZUludCIsInBhcnRpY2xlU2l6ZSIsImVwaGVtIiwiRXBoZW0iLCJlcG9jaCIsImEiLCJlIiwib20iLCJ3IiwibWEiLCJ0aGVtZSIsIm9yYml0Q29sb3IiLCJzMSIsInNldFMxIiwiczIiLCJzZXRTMiIsInMzIiwic2V0UzMiLCJ1c2VFZmZlY3QiLCJzY3JpcHRzIiwic3JjIiwib25Mb2FkIiwicyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhc3luYyIsIm9ubG9hZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFB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QUNHLEtBQUYsR0FBVSxJQUFWOztBQUM1QkgsT0FBQyxDQUFDSSxNQUFGLEdBQVc7QUFBQSxlQUFNTCxNQUFNLENBQUMsSUFBRCxDQUFaO0FBQUEsT0FBWDs7QUFDQTlCLGNBQVEsQ0FBQ29DLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sQ0FBMUI7QUFWWTs7QUFNZCxnQ0FBMEJILE9BQTFCLDhCQUFtQztBQUFBO0FBS2xDOztBQUVELFdBQU8sWUFBTTtBQUNYO0FBQ0E1QixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDcUMsU0FBMUMsR0FBc0QsRUFBdEQ7QUFDRCxLQUhEO0FBS0QsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDtBQW9CQSxTQUNFO0FBQUssYUFBUyxFQUFFakUsT0FBTyxDQUFDUCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsRUFJRSxNQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsVUFBTSxFQUFDLE9BQTFCO0FBQWtDLFNBQUssRUFBRTtBQUFDRyxXQUFLLEVBQUUsT0FBUjtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUVHLE9BQU8sQ0FBQ0wsY0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERjtBQVVELENBL0ZEOztHQUFNSSxTO1VBQ1lULFM7OztLQURaUyxTO0FBaUdTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgU3BhY2VraXQ6IGFueTsgfVxufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoXG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIHNwYWNlQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICB9XG4gIH0pXG4pKTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT7CoHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgW192aXosIHNldFZpel0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuXG4gIGNvbnN0IGZsb2F0VG9IZXggPSAoZmxvYXQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCBnZXRIZXggPSAoaSkgPT4gKCcwMCcgKyBpLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDQpKTtcbiAgICB2aWV3LnNldEZsb2F0MzIoMCwgZmxvYXQpO1xuICAgIFxuICAgIHJlc3VsdCA9IEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiA0IH0pLm1hcCgoXywgaSkgPT4gZ2V0SGV4KHZpZXcuZ2V0VWludDgoaSkpKS5qb2luKCcnKTtcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IGluaXRTcGFjZUtpdCA9ICgpID0+IHtcbiAgICBjb25zdCBTcGFjZWtpdCA9IHdpbmRvdyAmJiB3aW5kb3cuU3BhY2VraXQ7XG4gICAgY29uc3Qgdml6ID0gbmV3IFNwYWNla2l0LlNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyksIHtcbiAgICAgIGJhc2VQYXRoOiAnaHR0cHM6Ly90eXBwby5naXRodWIuaW8vc3BhY2VraXQvc3JjJyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIHNreWJveCB1c2luZyBOQVNBIFRZQ0hPIGFydHdvcmsuXG4gICAgLy8gdml6LmNyZWF0ZVN0YXJzKCk7XG5cbiAgICAvLyBDcmVhdGUgb3VyIGZpcnN0IG9iamVjdCAtIHRoZSBzdW4gLSB1c2luZyBhIHByZXNldCBzcGFjZSBvYmplY3QuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3VuJywgey4uLlNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TVU4sIGxhYmVsVGV4dDogJ1RIRSBTVU4nfSk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnZWFydGgnLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkVBUlRILCBsYWJlbFRleHQ6ICdUSEUgRUFSVEgnfSk7XG5cbiAgICBjb25zdCBjb2xvciA9IHBhcnNlSW50KGAweCR7ZmxvYXRUb0hleCgxLjMxNCl9YCk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnMScsIHtcbiAgICAgIC8vIHBvc2l0aW9uOiBbMjY5LjAyNTg0MDQ2NDQ3MjQsIC0zMC4yNzEzMTc1MDM5NDE1OTYsIDg4NDcuODA4XSwgLy8gW3JhLCBkZWMsIGJhcnljZW50cmljX2Rpc3RhbmNlXVxuICAgICAgcGFydGljbGVTaXplOiAoMC41ODQzMjA4ICogMTAwKSwgLy8gcmFkaXVzXG4gICAgICBsYWJlbFRleHQ6ICcqMTM0MjIxODU5LTAwMDA5OUUnLFxuICAgICAgXG4gICAgICBlcGhlbTogbmV3IFNwYWNla2l0LkVwaGVtKHtcbiAgICAgICAgZXBvY2g6IDEzNTcxMy41MywgLy8gb3JiaXRfcGVyaW9kIHJhZGlhbF92ZWxvY2l0eVxuICAgICAgICBhOiA1OC4zNDgyODYsIC8vIHNlbWltYWpvcl9heGlzXG4gICAgICAgIGU6IDAuNjE3MDAwMSwgLy8gZWNjZW50cmljaXR5XG4gICAgICAgIGk6IC04NS4zMTYwODYsIC8vIGluY2xpbmF0aW9uXG4gICAgICAgIG9tOiA0NS45MDkzMzIsIC8vIGxvbmdpdHVkZV9hc2NlbmRpbmdfbm9kZVxuICAgICAgICB3OiAxMDYyMjMuMDUsIC8vIHBlcmlhc3Ryb25fZGF0ZVxuICAgICAgICBtYTogMjMuNTM2NjU1LCAvLyBtYWdfZ1xuICAgICAgfSwgJ3JhZCcpLFxuICAgICAgdGhlbWU6IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLCAvLyBWX0lcbiAgICAgICAgb3JiaXRDb2xvcjogY29sb3IsXG4gICAgICB9LFxuICAgIH0pXG4gICBcbiAgICAvKiBjb25zb2xlLmxvZygnc3BhY2VtYW4gPT09PicsIHNwYWNlbWFuKTtcbiAgICBzcGFjZW1hbi5fbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGlja09iamVjdCgnc3BsYWNlbWFuJykpOyAqL1xuICAgIC8vIHNwYWNlbWFuLl9sYWJlbC5vbmNsaWNrKCgpID0+IGNvbnNvbGUubG9nKCdPS09LT0sgY2xpY2sgc3BhY2VtYW4nKSk7XG5cbiAgICAvLyB2aXouc3RvcCgpO1xuICAgIHNldFZpeih2aXopO1xuICB9XG5cbiAgY29uc3QgW3MxLCBzZXRTMV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzMiwgc2V0UzJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbczMsIHNldFMzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gKHMxICYmIHMyICYmIHMzID8gaW5pdFNwYWNlS2l0KCkgOiBudWxsKSwgW3MxLCBzMiwgczNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0cyA9IFtcbiAgICAgIHtzcmM6ICdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi90aHJlZS5yOTgubWluLmpzJywgb25Mb2FkOiBzZXRTMX0sXG4gICAgICB7c3JjOiAnaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvVHJhY2tiYWxsQ29udHJvbHMuanMnLCBvbkxvYWQ6IHNldFMyfSxcbiAgICAgIHtzcmM6IGAke3Byb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6ICcvZ2FpYS1leHBsb3Jlcid9L3NjcmlwdHMvc3BhY2VraXQuanNgLCBvbkxvYWQ6IHNldFMzfVxuICAgIF1cbiAgICBmb3IgKGxldCB7c3JjLCBvbkxvYWR9IG9mIHNjcmlwdHMpIHtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7IHMuYXN5bmMgPSB0cnVlO1xuICAgICAgcy5vbmxvYWQgPSAoKSA9PiBvbkxvYWQodHJ1ZSk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGlvbiB3aXRoIEhNUiBhcyB2aXogYXMgbm8gZGVzdHJveSBtZXRob2QgLSBubyBpbXBhY3Qgb3RoZXJ3aXNlXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJveCB3aWR0aD1cIjEwMHZ3XCIgaGVpZ2h0PVwiMTAwdmhcIiBzdHlsZT17e3dpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlQ29udGFpbmVyfT48L2Rpdj5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})