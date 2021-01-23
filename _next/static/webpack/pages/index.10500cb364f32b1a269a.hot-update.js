webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Spacekit is laoded');\n    setTimeout(function () {\n      var Spacekit = window && window.Spacekit;\n      var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n        basePath: 'https://typpo.github.io/spacekit/src'\n      }); // Create a skybox using NASA TYCHO artwork.\n\n      viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n      viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN); // Then add some planets\n\n      viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n      viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n      viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n      viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n      viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n      viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n      viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n      viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n      viz.createObject('spaceman', {\n        labelText: 'Tesla Roadster',\n        ephem: new Spacekit.Ephem({\n          // These parameters define orbit shape.\n          a: 1.324870564730606E+00,\n          e: 2.557785995665682E-01,\n          i: 1.077550722804860E+00,\n          // These parameters define the orientation of the orbit.\n          om: 3.170946964325638E+02,\n          w: 1.774865822248395E+02,\n          ma: 1.764302192487955E+02,\n          // Where the object is in its orbit.\n          epoch: 2458426.500000000\n        }, 'deg')\n      });\n    }, 0);\n  }, []);\n  /* useEffect(() => {\n    const viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/',\n    });\n     // Create a skybox using NASA TYCHO artwork.\n    viz.createStars();\n     // Create our first object - the sun - using a preset space object.\n    viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);\n     // Then add some planets\n    viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n    viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n     const roadster = viz.createObject('spaceman', {\n      labelText: 'Tesla Roadster',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        \n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        \n        // Where the object is in its orbit.\n        epoch: 2458426.500000000,\n      }, 'deg'),\n    });\n   }, [Spacekit]) */\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, \"My page\"), __jsx(\"script\", {\n    src: \"https://www.spacereference.org/static/js/lib/three.r98.min.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://www.spacereference.org/static/js/lib/TrackballControls.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"/scripts/spacekit.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      border: '4px solid green',\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxWidth: false,\n    style: {\n      width: '100%',\n      height: '100%',\n      border: '4px solid red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(IndexPage, \"OAQf9SHEQQsOOZKjohcuI3tGtQ0=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJTcGFjZWtpdCIsIndpbmRvdyIsInZpeiIsIlNpbXVsYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYmFzZVBhdGgiLCJjcmVhdGVTdGFycyIsImNyZWF0ZU9iamVjdCIsIlNwYWNlT2JqZWN0UHJlc2V0cyIsIlNVTiIsIk1FUkNVUlkiLCJWRU5VUyIsIkVBUlRIIiwiTUFSUyIsIkpVUElURVIiLCJTQVRVUk4iLCJVUkFOVVMiLCJORVBUVU5FIiwibGFiZWxUZXh0IiwiZXBoZW0iLCJFcGhlbSIsImEiLCJlIiwiaSIsIm9tIiwidyIsIm1hIiwiZXBvY2giLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUFBLFNBQzNCQyw2RUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURLO0FBSVhDLGtCQUFjLEVBQUU7QUFDZEMsV0FBSyxFQUFFLE1BRE87QUFFZEMsWUFBTSxFQUFFLE1BRk07QUFHZEMscUJBQWUsRUFBRTtBQUhIO0FBSkwsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFhQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUVBVyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFS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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixFQU9FLE1BQUMscURBQUQ7QUFBSyxTQUFLLEVBQUMsT0FBWDtBQUFtQixVQUFNLEVBQUMsT0FBMUI7QUFBa0MsU0FBSyxFQUFFO0FBQUN5QyxZQUFNLEVBQUUsaUJBQVQ7QUFBNEJ0QyxXQUFLLEVBQUUsT0FBbkM7QUFBNENDLFlBQU0sRUFBRTtBQUFwRCxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFlBQVEsRUFBRSxLQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xELFdBQUssRUFBQyxNQUREO0FBQ1NDLFlBQU0sRUFBRSxNQURqQjtBQUVMcUMsWUFBTSxFQUFFO0FBRkgsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0k7QUFBSyxNQUFFLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFFbEMsT0FBTyxDQUFDTCxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FERixDQVBGLENBREY7QUFxQkQsQ0E3R0Q7O0dBQU1JLFM7VUFDWVQsUzs7O0tBRFpTLFM7QUErR1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgU3BhY2VraXQ6IGFueTsgfVxufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoXG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuICAgIHNwYWNlQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICB9XG4gIH0pXG4pKTtcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT7CoHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NwYWNla2l0IGlzIGxhb2RlZCcpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBTcGFjZWtpdCA9IHdpbmRvdyAmJiB3aW5kb3cuU3BhY2VraXQ7XG4gICAgICBjb25zdCB2aXogPSBuZXcgU3BhY2VraXQuU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKSwge1xuICAgICAgICBiYXNlUGF0aDogJ2h0dHBzOi8vdHlwcG8uZ2l0aHViLmlvL3NwYWNla2l0L3NyYycsXG4gICAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIHNreWJveCB1c2luZyBOQVNBIFRZQ0hPIGFydHdvcmsuXG4gICAgdml6LmNyZWF0ZVN0YXJzKCk7XG5cbiAgICAvLyBDcmVhdGUgb3VyIGZpcnN0IG9iamVjdCAtIHRoZSBzdW4gLSB1c2luZyBhIHByZXNldCBzcGFjZSBvYmplY3QuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3VuJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTik7XG5cbiAgICAvLyBUaGVuIGFkZCBzb21lIHBsYW5ldHNcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdtZXJjdXJ5JywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1FUkNVUlkpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3ZlbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlZFTlVTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5FQVJUSCk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbWFycycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5NQVJTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdqdXBpdGVyJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkpVUElURVIpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NhdHVybicsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TQVRVUk4pO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3VyYW51cycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5VUkFOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ25lcHR1bmUnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTkVQVFVORSk7XG5cbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzcGFjZW1hbicsIHtcbiAgICAgIGxhYmVsVGV4dDogJ1Rlc2xhIFJvYWRzdGVyJyxcbiAgICAgIGVwaGVtOiBuZXcgU3BhY2VraXQuRXBoZW0oe1xuICAgICAgICAvLyBUaGVzZSBwYXJhbWV0ZXJzIGRlZmluZSBvcmJpdCBzaGFwZS5cbiAgICAgICAgYTogMS4zMjQ4NzA1NjQ3MzA2MDZFKzAwLFxuICAgICAgICBlOiAyLjU1Nzc4NTk5NTY2NTY4MkUtMDEsXG4gICAgICAgIGk6IDEuMDc3NTUwNzIyODA0ODYwRSswMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgb3JiaXQuXG4gICAgICAgIG9tOiAzLjE3MDk0Njk2NDMyNTYzOEUrMDIsXG4gICAgICAgIHc6IDEuNzc0ODY1ODIyMjQ4Mzk1RSswMixcbiAgICAgICAgbWE6IDEuNzY0MzAyMTkyNDg3OTU1RSswMixcbiAgICAgICAgXG4gICAgICAgIC8vIFdoZXJlIHRoZSBvYmplY3QgaXMgaW4gaXRzIG9yYml0LlxuICAgICAgICBlcG9jaDogMjQ1ODQyNi41MDAwMDAwMDAsXG4gICAgICB9LCAnZGVnJyksXG4gICAgfSk7XG4gICAgfSwgMCk7XG4gIH0sIFtdKVxuXG4gIC8qIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgdml6ID0gbmV3IFNwYWNla2l0LlNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyksIHtcbiAgICAgIGJhc2VQYXRoOiAnaHR0cHM6Ly90eXBwby5naXRodWIuaW8vc3BhY2VraXQvJyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIHNreWJveCB1c2luZyBOQVNBIFRZQ0hPIGFydHdvcmsuXG4gICAgdml6LmNyZWF0ZVN0YXJzKCk7XG5cbiAgICAvLyBDcmVhdGUgb3VyIGZpcnN0IG9iamVjdCAtIHRoZSBzdW4gLSB1c2luZyBhIHByZXNldCBzcGFjZSBvYmplY3QuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3VuJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlNVTik7XG5cbiAgICAvLyBUaGVuIGFkZCBzb21lIHBsYW5ldHNcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdtZXJjdXJ5JywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk1FUkNVUlkpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3ZlbnVzJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLlZFTlVTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdlYXJ0aCcsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5FQVJUSCk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbWFycycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5NQVJTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdqdXBpdGVyJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLkpVUElURVIpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3NhdHVybicsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TQVRVUk4pO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ3VyYW51cycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5VUkFOVVMpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ25lcHR1bmUnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTkVQVFVORSk7XG5cbiAgICBjb25zdCByb2Fkc3RlciA9IHZpei5jcmVhdGVPYmplY3QoJ3NwYWNlbWFuJywge1xuICAgICAgbGFiZWxUZXh0OiAnVGVzbGEgUm9hZHN0ZXInLFxuICAgICAgZXBoZW06IG5ldyBTcGFjZWtpdC5FcGhlbSh7XG4gICAgICAgIC8vIFRoZXNlIHBhcmFtZXRlcnMgZGVmaW5lIG9yYml0IHNoYXBlLlxuICAgICAgICBhOiAxLjMyNDg3MDU2NDczMDYwNkUrMDAsXG4gICAgICAgIGU6IDIuNTU3Nzg1OTk1NjY1NjgyRS0wMSxcbiAgICAgICAgaTogMS4wNzc1NTA3MjI4MDQ4NjBFKzAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBvcmJpdC5cbiAgICAgICAgb206IDMuMTcwOTQ2OTY0MzI1NjM4RSswMixcbiAgICAgICAgdzogMS43NzQ4NjU4MjIyNDgzOTVFKzAyLFxuICAgICAgICBtYTogMS43NjQzMDIxOTI0ODc5NTVFKzAyLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hlcmUgdGhlIG9iamVjdCBpcyBpbiBpdHMgb3JiaXQuXG4gICAgICAgIGVwb2NoOiAyNDU4NDI2LjUwMDAwMDAwMCxcbiAgICAgIH0sICdkZWcnKSxcbiAgICB9KTtcblxuICB9LCBbU3BhY2VraXRdKSAqL1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvdGhyZWUucjk4Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL1RyYWNrYmFsbENvbnRyb2xzLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3NjcmlwdHMvc3BhY2VraXQuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiIGhlaWdodD1cIjEwMHZoXCIgc3R5bGU9e3tib3JkZXI6ICc0cHggc29saWQgZ3JlZW4nLCB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBtYXhXaWR0aD17ZmFsc2V9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBib3JkZXI6ICc0cHggc29saWQgcmVkJyxcbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2VDb250YWluZXJ9PjwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})