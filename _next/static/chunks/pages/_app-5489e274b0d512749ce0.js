_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var f=d[c];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=a.props[f],p=r[f]||new Set;"name"===f&&u||!p.has(l)?(p.add(l),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),u=n.n(o),i=n("wx14"),c=(n("17x9"),n("OKji")),s=n("aXM8"),f=n("hfi/");var l=function(e){var t=e.children,n=e.theme,r=Object(s.a)(),o=a.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(i.a)({},e,t)}(r,n);return null!=e&&(e[f.a]=null!==r),e}),[n,r]);return a.a.createElement(c.a.Provider,{value:o},t)},d=n("H2TA"),p={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},h=function(e){return Object(i.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var m=Object(d.a)((function(e){return{"@global":{html:p,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(i.a)({margin:0},h(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)})),v=n("viY9"),y=Object(v.a)({palette:{background:{default:"#000"},primary:{light:"#666",main:"#FFF",dark:"#333",contrastText:"#666"}}}),b=a.a.createElement;function g(e){var t=e.Component,n=e.pageProps;return a.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),b(a.a.Fragment,null,b(u.a,null,b("title",null,"Gaia Explorer"),b("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})),b(l,{theme:y},b(m,null),b(t,n)))}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[[0,0,1,2,3]]]);