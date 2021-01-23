webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/pam-saszoks/gaia-explorer/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function () {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    spaceContainer: {\n      width: '100%',\n      height: '100%',\n      backgroundColor: 'black'\n    }\n  });\n});\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var classes = useStyles();\n\n  var initSpaceKit = function initSpaceKit() {\n    var Spacekit = window && window.Spacekit;\n    var viz = new Spacekit.Simulation(document.getElementById('main-container'), {\n      basePath: 'https://typpo.github.io/spacekit/src'\n    }); // Create a skybox using NASA TYCHO artwork.\n\n    viz.createStars(); // Create our first object - the sun - using a preset space object.\n\n    viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN); // Then add some planets\n\n    viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);\n    viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);\n    viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);\n    viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);\n    viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);\n    viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);\n    viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);\n    viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);\n    viz.createObject('spaceman', {\n      labelText: 'Tesla Roadster',\n      ephem: new Spacekit.Ephem({\n        // These parameters define orbit shape.\n        a: 1.324870564730606E+00,\n        e: 2.557785995665682E-01,\n        i: 1.077550722804860E+00,\n        // These parameters define the orientation of the orbit.\n        om: 3.170946964325638E+02,\n        w: 1.774865822248395E+02,\n        ma: 1.764302192487955E+02,\n        // Where the object is in its orbit.\n        epoch: 2458426.500000000\n      }, 'deg')\n    });\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      scripts = _useState.scripts,\n      setScripts = _useState.setScripts;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('SCRIPTS has changed ===>', scripts);\n  }, [scripts]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _window;\n\n    console.log('UseEffect window.Spacekit ===>', window.Spacekit);\n\n    if ((_window = window) !== null && _window !== void 0 && _window.Spacekit) {\n      initSpaceKit();\n    } else if (false) {} else if (!window.Spacekit) {\n      console.log('Spacekit is undefined');\n    }\n\n    var s1 = document.createElement('script');\n    s1.setAttribute('src', 'https://www.spacereference.org/static/js/lib/three.r98.min.js');\n    s1.async = true;\n\n    s1.onload = function () {\n      console.log('ONE SCRIPT IS LOADED');\n      setScripts([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scripts), ['one']));\n    };\n\n    document.head.appendChild(s1);\n    /* document.getElementById(\"test\").addEventListener('load', () => {\n      console.log('TEST is loaded');\n      initSpaceKit();\n    }); */\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, \"My page\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: \"100vw\",\n    height: \"100vh\",\n    style: {\n      border: '4px solid green',\n      width: '100vw',\n      height: '100vh'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    maxWidth: false,\n    style: {\n      width: '100%',\n      height: '100%',\n      border: '4px solid red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"main-container\",\n    className: classes.spaceContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(IndexPage, \"znsTXML8frBVAduytu20WhDZcIU=\", false, function () {\n  return [useStyles];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInNwYWNlQ29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjbGFzc2VzIiwiaW5pdFNwYWNlS2l0IiwiU3BhY2VraXQiLCJ3aW5kb3ciLCJ2aXoiLCJTaW11bGF0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJhc2VQYXRoIiwiY3JlYXRlU3RhcnMiLCJjcmVhdGVPYmplY3QiLCJTcGFjZU9iamVjdFByZXNldHMiLCJTVU4iLCJNRVJDVVJZIiwiVkVOVVMiLCJFQVJUSCIsIk1BUlMiLCJKVVBJVEVSIiwiU0FUVVJOIiwiVVJBTlVTIiwiTkVQVFVORSIsImxhYmVsVGV4dCIsImVwaGVtIiwiRXBoZW0iLCJhIiwiZSIsImkiLCJvbSIsInciLCJtYSIsImVwb2NoIiwidXNlU3RhdGUiLCJzY3JpcHRzIiwic2V0U2NyaXB0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzMSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhc3luYyIsIm9ubG9hZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBREs7QUFJWEMsa0JBQWMsRUFBRTtBQUNkQyxXQUFLLEVBQUUsTUFETztBQUVkQyxZQUFNLEVBQUUsTUFGTTtBQUdkQyxxQkFBZSxFQUFFO0FBSEg7QUFKTCxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQWFBLElB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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FERixDQVBGLENBREY7QUFxQkQsQ0E3RkQ7O0dBQU1JLFM7VUFDWVQsUzs7O0tBRFpTLFM7QUErRlNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IFNwYWNla2l0OiBhbnk7IH1cbn1cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKFxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxXG4gICAgfSxcbiAgICBzcGFjZUNvbnRhaW5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snXG4gICAgfVxuICB9KVxuKSk7XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+wqB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBpbml0U3BhY2VLaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgU3BhY2VraXQgPSB3aW5kb3cgJiYgd2luZG93LlNwYWNla2l0O1xuICAgIGNvbnN0IHZpeiA9IG5ldyBTcGFjZWtpdC5TaW11bGF0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpLCB7XG4gICAgICBiYXNlUGF0aDogJ2h0dHBzOi8vdHlwcG8uZ2l0aHViLmlvL3NwYWNla2l0L3NyYycsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYSBza3lib3ggdXNpbmcgTkFTQSBUWUNITyBhcnR3b3JrLlxuICAgIHZpei5jcmVhdGVTdGFycygpO1xuXG4gICAgLy8gQ3JlYXRlIG91ciBmaXJzdCBvYmplY3QgLSB0aGUgc3VuIC0gdXNpbmcgYSBwcmVzZXQgc3BhY2Ugb2JqZWN0LlxuICAgIHZpei5jcmVhdGVPYmplY3QoJ3N1bicsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5TVU4pO1xuXG4gICAgLy8gVGhlbiBhZGQgc29tZSBwbGFuZXRzXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnbWVyY3VyeScsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5NRVJDVVJZKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCd2ZW51cycsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5WRU5VUyk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnZWFydGgnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuRUFSVEgpO1xuICAgIHZpei5jcmVhdGVPYmplY3QoJ21hcnMnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuTUFSUyk7XG4gICAgdml6LmNyZWF0ZU9iamVjdCgnanVwaXRlcicsIFNwYWNla2l0LlNwYWNlT2JqZWN0UHJlc2V0cy5KVVBJVEVSKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCdzYXR1cm4nLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuU0FUVVJOKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCd1cmFudXMnLCBTcGFjZWtpdC5TcGFjZU9iamVjdFByZXNldHMuVVJBTlVTKTtcbiAgICB2aXouY3JlYXRlT2JqZWN0KCduZXB0dW5lJywgU3BhY2VraXQuU3BhY2VPYmplY3RQcmVzZXRzLk5FUFRVTkUpO1xuXG4gICAgdml6LmNyZWF0ZU9iamVjdCgnc3BhY2VtYW4nLCB7XG4gICAgICBsYWJlbFRleHQ6ICdUZXNsYSBSb2Fkc3RlcicsXG4gICAgICBlcGhlbTogbmV3IFNwYWNla2l0LkVwaGVtKHtcbiAgICAgICAgLy8gVGhlc2UgcGFyYW1ldGVycyBkZWZpbmUgb3JiaXQgc2hhcGUuXG4gICAgICAgIGE6IDEuMzI0ODcwNTY0NzMwNjA2RSswMCxcbiAgICAgICAgZTogMi41NTc3ODU5OTU2NjU2ODJFLTAxLFxuICAgICAgICBpOiAxLjA3NzU1MDcyMjgwNDg2MEUrMDAsXG4gICAgICAgIFxuICAgICAgICAvLyBUaGVzZSBwYXJhbWV0ZXJzIGRlZmluZSB0aGUgb3JpZW50YXRpb24gb2YgdGhlIG9yYml0LlxuICAgICAgICBvbTogMy4xNzA5NDY5NjQzMjU2MzhFKzAyLFxuICAgICAgICB3OiAxLjc3NDg2NTgyMjI0ODM5NUUrMDIsXG4gICAgICAgIG1hOiAxLjc2NDMwMjE5MjQ4Nzk1NUUrMDIsXG4gICAgICAgIFxuICAgICAgICAvLyBXaGVyZSB0aGUgb2JqZWN0IGlzIGluIGl0cyBvcmJpdC5cbiAgICAgICAgZXBvY2g6IDI0NTg0MjYuNTAwMDAwMDAwLFxuICAgICAgfSwgJ2RlZycpLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qge3NjcmlwdHMsIHNldFNjcmlwdHN9ID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICBjb25zb2xlLmxvZygnU0NSSVBUUyBoYXMgY2hhbmdlZCA9PT0+Jywgc2NyaXB0cyk7XG4gIH0sIFtzY3JpcHRzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VzZUVmZmVjdCB3aW5kb3cuU3BhY2VraXQgPT09PicsIHdpbmRvdy5TcGFjZWtpdCk7XG4gICAgaWYgKHdpbmRvdz8uU3BhY2VraXQpIHtcbiAgICAgIGluaXRTcGFjZUtpdCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkKcKge1xuICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBpcyB1bmRlZmluZWQnKVxuICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5TcGFjZWtpdCnCoHtcbiAgICAgIGNvbnNvbGUubG9nKCdTcGFjZWtpdCBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgczEuc2V0QXR0cmlidXRlKCdzcmMnLCdodHRwczovL3d3dy5zcGFjZXJlZmVyZW5jZS5vcmcvc3RhdGljL2pzL2xpYi90aHJlZS5yOTgubWluLmpzJyk7XG4gICAgczEuYXN5bmMgPSB0cnVlO1xuICAgIHMxLm9ubG9hZD0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ09ORSBTQ1JJUFQgSVMgTE9BREVEJyk7XG4gICAgICBzZXRTY3JpcHRzKFsuLi5zY3JpcHRzLCAnb25lJ10pO1xuICAgIH1cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMxKTtcbiAgICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIikuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdURVNUIGlzIGxvYWRlZCcpO1xuICAgICAgaW5pdFNwYWNlS2l0KCk7XG4gICAgfSk7ICovXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgICAgey8qIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuc3BhY2VyZWZlcmVuY2Uub3JnL3N0YXRpYy9qcy9saWIvdGhyZWUucjk4Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LnNwYWNlcmVmZXJlbmNlLm9yZy9zdGF0aWMvanMvbGliL1RyYWNrYmFsbENvbnRyb2xzLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgaWQ9XCJ0ZXN0XCIgc3JjPVwiL3NjcmlwdHMvc3BhY2VraXQuanNcIj48L3NjcmlwdD4gKi99XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Qm94IHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiIHN0eWxlPXt7Ym9yZGVyOiAnNHB4IHNvbGlkIGdyZWVuJywgd2lkdGg6ICcxMDB2dycsIGhlaWdodDogJzEwMHZoJ319PlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbWF4V2lkdGg9e2ZhbHNlfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkIHJlZCcsXG4gICAgICAgICAgfVxuICAgICAgICB9PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlQ29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})