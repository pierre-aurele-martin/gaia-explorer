webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles(); // @ts-ignore\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _viz = _useState[0],\n      setViz = _useState[1];\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n    // viz.createStars();\n    // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.SUN), {}, {\n      labelText: 'THE SUN'\n    }));\n    viz.createObject('earth', _objectSpread(_objectSpread({}, Spacekit.SpaceObjectPresets.EARTH), {}, {\n      labelText: 'THE EARTH'\n    })); // Then add some planets\n\n    /* viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH); */\n\n    /*\n    ephem: Ephem\n      _attrs:\n      GM: 132712440041939390000\n      L: 1.7534375570727851\n      a: 1.00000261\n      e: 0.01671123\n      epoch: 2451545\n      i:\n      -2.6720990848033185\n      e-7\n      ma: -0.043163916976385774\n      n: 0.01720203160400233\n      om: 0\n      period: 365.25832830801806\n      q: 0.9832913363836896\n      w: 1.796601474049171\n      wBar: 1.796601474049171\n      textureUrl: \"{{assets}}/sprites/smallparticle.png\"\n      theme: {color: 39629}\n    */\n\n    /* viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE); */\n\n    viz.createObject('1', {\n      // position: [269.0258404644724, -30.271317503941596, 8847.808], // [ra, dec, barycentric_distance]\n      scale: [1, 1, 1],\n      particleSize: 0.5843208 * 100,\n      // radius\n      labelText: 'My object',\n      hideOrbit: false,\n      ephem: new Spacekit.Ephem({\n        epoch: 135713.53,\n        // orbit_period radial_velocity\n        a: 58.348286,\n        // semimajor_axis\n        e: 0.6170001,\n        // eccentricity\n        i: -85.316086,\n        // inclination\n        om: 45.909332,\n        // longitude_ascending_node\n        w: 106223.05,\n        // periastron_date\n        ma: 23.536655 // mag_g\n\n      }, 'rad'),\n      // textureUrl: '/path/to/spriteTexture.png',\n      // basePath: '/base',\n      ecliptic: {\n        lineColor: 0xCCCCCC,\n        displayLines: false\n      },\n      theme: {\n        color: 0xFFFFFF,\n        orbitColor: 0x888888\n      }\n    });\n    /* const spaceman = viz.createObject('spaceman', {\n      labelText: '<div>Tesla Roadster</div>',\n      // labelUrl: 'https://www.google.com',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        \n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        \n        // Where the object is in its orbit.\n        epoch: 2458426.500000000,\n      }, 'deg'),\n    }); */\n\n    /* console.log('spaceman ===>', spaceman);\n    spaceman._label.addEventListener('click', () => clickObject('splaceman')); */\n    // spaceman._label.onclick(() => console.log('OKOKOK click spaceman'));\n    // viz.stop();\n\n    setViz(viz);\n  };\n  /* const clickObject = (i) => {\n    console.log('Click an object ===>', i);\n  } */\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s1 = _useState2[0],\n      setS1 = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s2 = _useState3[0],\n      setS2 = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      s3 = _useState4[0],\n      setS3 = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', s1, s2, s3);\n\n    if (s1 && s2 && s3) {\n      initSpaceKit();\n    }\n  }, [s1, s2, s3]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var scripts = [{\n      src: 'https://www.spacereference.org/static/js/lib/three.r98.min.js',\n      onLoad: setS1\n    }, {\n      src: 'https://www.spacereference.org/static/js/lib/TrackballControls.js',\n      onLoad: setS2\n    }, {\n      src: \"\".concat(true ? '' : undefined, \"/scripts/spacekit.js\"),\n      onLoad: setS3\n    }];\n\n    var _loop = function _loop() {\n      var _scripts$_i = _scripts[_i],\n          src = _scripts$_i.src,\n          onLoad = _scripts$_i.onLoad;\n      var s = document.createElement('script');\n      s.setAttribute('src', src);\n      s.async = true;\n\n      s.onload = function () {\n        console.log(\"script \".concat(src, \" is loadedd\"));\n        onLoad(true);\n      };\n\n      document.head.appendChild(s);\n    };\n\n    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {\n      _loop();\n    }\n\n    return function () {\n      console.log('CLEANUP TEST', document.getElementById('main-container'));\n      document.getElementById('main-container')[0].innerHTML('');\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(IndexPage, \"hvZIlZHfFwOf+mvKiojdMYifZiA=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJfdml6Iiwic2V0Vml6IiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJ2aXoiLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlT2JqZWN0IiwiU3BhY2VPYmplY3RQcmVzZXRzIiwiU1VOIiwibGFiZWxUZXh0IiwiRUFSVEgiLCJzY2FsZSIsInBhcnRpY2xlU2l6ZSIsImhpZGVPcmJpdCIsImVwaGVtIiwiRXBoZW0iLCJlcG9jaCIsImEiLCJlIiwiaSIsIm9tIiwidyIsIm1hIiwiZWNsaXB0aWMiLCJsaW5lQ29sb3IiLCJkaXNwbGF5TGluZXMiLCJ0aGVtZSIsImNvbG9yIiwib3JiaXRDb2xvciIsInMxIiwic2V0UzEiLCJzMiIsInNldFMyIiwiczMiLCJzZXRTMyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzY3JpcHRzIiwic3JjIiwib25Mb2FkIiwicyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhc3luYyIsIm9ubG9hZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FESztBQUlYQyxrQkFBYyxFQUFFO0FBQ2RDLFdBQUssRUFB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Q0MsR0FBUixDQUFZLGNBQVosRUFBNEJsQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQTVCO0FBQ0FELGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEMsQ0FBMUMsRUFBNkM0QyxTQUE3QyxDQUF1RCxFQUF2RDtBQUNELEtBSEQ7QUFLRCxHQXRCUSxFQXNCTixFQXRCTSxDQUFUO0FBd0JBLFNBQ0U7QUFBSyxhQUFTLEVBQUV0RCxPQUFPLENBQUNQLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQUlFLE1BQUMscURBQUQ7QUFBSyxTQUFLLEVBQUMsT0FBWDtBQUFtQixVQUFNLEVBQUMsT0FBMUI7QUFBa0MsU0FBSyxFQUFFO0FBQUNHLFdBQUssRUFBRSxPQUFSO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLGdCQUFSO0FBQXlCLGFBQVMsRUFBRUcsT0FBTyxDQUFDTCxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQsQ0F2SkQ7O0dBQU1JLFM7VUFDWVQsUzs7O0tBRFpTLFM7QUF5SlNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBTcGFjZWtpdDogYW55OyB9XG59XG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+IChcbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sXG4gICAgc3BhY2VDb250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgIH1cbiAgfSlcbikpO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PsKge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBbX3Zpeiwgc2V0Vml6XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgY29uc3QgaW5pdFNwYWNlS2l0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFNwYWNla2l0ID0gd2luZG93ICYmIHdpbmRvdy5TcGFjZWtpdDtcbiAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgYmFzZVBhdGg6ICdodHRwczovL3R5cHBvLmdpdGh1Yi5pby9zcGFjZWtpdC9zcmMnLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2t5Ym94IHVzaW5nIE5BU0EgVFlDSE8gYXJ0d29yay5cbiAgICAvLyB2aXouY3JlYXRlU3RhcnMoKTtcblxuICAgIC8vIENyZWF0ZSBvdXIgZmlyc3Qgb2JqZWN0IC0gdGhlIHN1biAtIHVzaW5nIGEgcHJlc2V0IHNwYWNlIG9iamVjdC5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzdW4nLCB7Li4uU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTiwgbGFiZWxUZXh0OiAnVEhFIFNVTid9KTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIHsuLi5TcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuRUFSVEgsIGxhYmVsVGV4dDogJ1RIRSBFQVJUSCd9KTtcbiAgICAvLyBUaGVuIGFkZCBzb21lIHBsYW5ldHNcbiAgICAvKiB2aXouY3JlYXRlT2JqZWN0KCdtZXJjdXJ5JywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1FUkNVUlkpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3ZlbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlZFTlVTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5FQVJUSCk7ICovXG4gICAgLypcbiAgICBlcGhlbTogRXBoZW1cbiAgICAgIF9hdHRyczpcbiAgICAgIEdNOiAxMzI3MTI0NDAwNDE5MzkzOTAwMDBcbiAgICAgIEw6IDEuNzUzNDM3NTU3MDcyNzg1MVxuICAgICAgYTogMS4wMDAwMDI2MVxuICAgICAgZTogMC4wMTY3MTEyM1xuICAgICAgZXBvY2g6IDI0NTE1NDVcbiAgICAgIGk6XG4gICAgICAtMi42NzIwOTkwODQ4MDMzMTg1XG4gICAgICBlLTdcbiAgICAgIG1hOiAtMC4wNDMxNjM5MTY5NzYzODU3NzRcbiAgICAgIG46IDAuMDE3MjAyMDMxNjA0MDAyMzNcbiAgICAgIG9tOiAwXG4gICAgICBwZXJpb2Q6IDM2NS4yNTgzMjgzMDgwMTgwNlxuICAgICAgcTogMC45ODMyOTEzMzYzODM2ODk2XG4gICAgICB3OiAxLjc5NjYwMTQ3NDA0OTE3MVxuICAgICAgd0JhcjogMS43OTY2MDE0NzQwNDkxNzFcbiAgICAgIHRleHR1cmVVcmw6IFwie3thc3NldHN9fS9zcHJpdGVzL3NtYWxscGFydGljbGUucG5nXCJcbiAgICAgIHRoZW1lOiB7Y29sb3I6IDM5NjI5fVxuICAgICovXG4gICAgLyogdml6LmNyZWF0ZU9iamVjdCgnbWFycycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5NQVJTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdqdXBpdGVyJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkpVUElURVIpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NhdHVybicsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TQVRVUk4pO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3VyYW51cycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5VUkFOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ25lcHR1bmUnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTkVQVFVORSk7ICovXG5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCcxJywge1xuICAgICAgLy8gcG9zaXRpb246IFsyNjkuMDI1ODQwNDY0NDcyNCwgLTMwLjI3MTMxNzUwMzk0MTU5NiwgODg0Ny44MDhdLCAvLyBbcmEsIGRlYywgYmFyeWNlbnRyaWNfZGlzdGFuY2VdXG4gICAgICBzY2FsZTogWzEsIDEsIDFdLFxuICAgICAgcGFydGljbGVTaXplOiAoMC41ODQzMjA4ICogMTAwKSwgLy8gcmFkaXVzXG4gICAgICBsYWJlbFRleHQ6ICdNeSBvYmplY3QnLFxuICAgICAgaGlkZU9yYml0OiBmYWxzZSxcbiAgICAgIGVwaGVtOiBuZXcgU3BhY2VraXQuRXBoZW0oe1xuICAgICAgICBlcG9jaDogMTM1NzEzLjUzLCAvLyBvcmJpdF9wZXJpb2QgcmFkaWFsX3ZlbG9jaXR5XG4gICAgICAgIGE6IDU4LjM0ODI4NiwgLy8gc2VtaW1ham9yX2F4aXNcbiAgICAgICAgZTogMC42MTcwMDAxLCAvLyBlY2NlbnRyaWNpdHlcbiAgICAgICAgaTogLTg1LjMxNjA4NiwgLy8gaW5jbGluYXRpb25cbiAgICAgICAgb206IDQ1LjkwOTMzMiwgLy8gbG9uZ2l0dWRlX2FzY2VuZGluZ19ub2RlXG4gICAgICAgIHc6IDEwNjIyMy4wNSwgLy8gcGVyaWFzdHJvbl9kYXRlXG4gICAgICAgIG1hOiAyMy41MzY2NTUsIC8vIG1hZ19nXG4gICAgICB9LCAncmFkJyksXG4gICAgICAvLyB0ZXh0dXJlVXJsOiAnL3BhdGgvdG8vc3ByaXRlVGV4dHVyZS5wbmcnLFxuICAgICAgLy8gYmFzZVBhdGg6ICcvYmFzZScsXG4gICAgICBlY2xpcHRpYzoge1xuICAgICAgICBsaW5lQ29sb3I6IDB4Q0NDQ0NDLFxuICAgICAgICBkaXNwbGF5TGluZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIGNvbG9yOiAweEZGRkZGRixcbiAgICAgICAgb3JiaXRDb2xvcjogMHg4ODg4ODgsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLyogY29uc3Qgc3BhY2VtYW4gPSB2aXouY3JlYXRlT2JqZWN0KCdzcGFjZW1hbicsIHtcbiAgICAgIGxhYmVsVGV4dDogJzxkaXY+VGVzbGEgUm9hZHN0ZXI8L2Rpdj4nLFxuICAgICAgLy8gbGFiZWxVcmw6ICdodHRwczovL3d3dy5nb29nbGUuY29tJyxcbiAgICAgIGVwaGVtOiBuZXcgU3BhY2VraXQuRXBoZW0oe1xuICAgICAgICAvLyBUaGVzZSBwYXJhbWV0ZXJzIGRlZmluZSBvcmJpdCBzaGFwZS5cbiAgICAgICAgYTogMS4zMjQ4NzA1NjQ3MzA2MDZFKzAwLFxuICAgICAgICBlOiAyLjU1Nzc4NTk5NTY2NTY4MkUtMDEsXG4gICAgICAgIGk6IDEuMDc3NTUwNzIyODA0ODYwRSswMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgb3JiaXQuXG4gICAgICAgIG9tOiAzLjE3MDk0Njk2NDMyNTYzOEUrMDIsXG4gICAgICAgIHc6IDEuNzc0ODY1ODIyMjQ4Mzk1RSswMixcbiAgICAgICAgbWE6IDEuNzY0MzAyMTkyNDg3OTU1RSswMixcbiAgICAgICAgXG4gICAgICAgIC8vIFdoZXJlIHRoZSBvYmplY3QgaXMgaW4gaXRzIG9yYml0LlxuICAgICAgICBlcG9jaDogMjQ1ODQyNi41MDAwMDAwMDAsXG4gICAgICB9LCAnZGVnJyksXG4gICAgfSk7ICovXG5cbiAgICAvKiBjb25zb2xlLmxvZygnc3BhY2VtYW4gPT09PicsIHNwYWNlbWFuKTtcbiAgICBzcGFjZW1hbi5fbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGlja09iamVjdCgnc3BsYWNlbWFuJykpOyAqL1xuICAgIC8vIHNwYWNlbWFuLl9sYWJlbC5vbmNsaWNrKCgpID0+IGNvbnNvbGUubG9nKCdPS09LT0sgY2xpY2sgc3BhY2VtYW4nKSk7XG5cbiAgICAvLyB2aXouc3RvcCgpO1xuICAgIHNldFZpeih2aXopO1xuICB9XG5cbiAgLyogY29uc3QgY2xpY2tPYmplY3QgPSAoaSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDbGljayBhbiBvYmplY3QgPT09PicsIGkpO1xuICB9ICovXG5cbiAgY29uc3QgW3MxLCBzZXRTMV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzMiwgc2V0UzJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbczMsIHNldFMzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT57XG4gICAgY29uc29sZS5sb2coJ1NDUklQVFMgaGFzIGNoYW5nZWQgPT09PicsIHMxLCBzMiwgczMpO1xuICAgIGlmIChzMSAmJiBzMiAmJiBzMynCoHtcbiAgICAgIGluaXRTcGFjZUtpdCgpO1xuICAgIH1cbiAgfSwgW3MxLCBzMiwgczNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdHMgPSBbXG4gICAgICB7c3JjOiAnaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvdGhyZWUucjk4Lm1pbi5qcycsIG9uTG9hZDogc2V0UzF9LFxuICAgICAge3NyYzogJ2h0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL1RyYWNrYmFsbENvbnRyb2xzLmpzJywgb25Mb2FkOiBzZXRTMn0sXG4gICAgICB7c3JjOiBgJHtwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnJyA6ICcvZ2FpYS1leHBsb3Jlcid9L3NjcmlwdHMvc3BhY2VraXQuanNgLCBvbkxvYWQ6IHNldFMzfVxuICAgIF1cbiAgICBmb3IgKGxldCB7c3JjLCBvbkxvYWR9IG9mIHNjcmlwdHMpIHtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICBzLmFzeW5jID0gdHJ1ZTtcbiAgICAgIHMub25sb2FkPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzY3JpcHQgJHtzcmN9IGlzIGxvYWRlZGRgKTtcbiAgICAgICAgb25Mb2FkKHRydWUpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0NMRUFOVVAgVEVTVCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpWzBdLmlubmVySFRNTCgnJyk7XG4gICAgfVxuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCIgc3R5bGU9e3t3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})