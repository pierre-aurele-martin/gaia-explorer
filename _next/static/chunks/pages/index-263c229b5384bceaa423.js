_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,r,t){"use strict";t.r(r);var o=t("rePB"),n=t("q1tI"),p=t.n(n),a=t("wx14"),i=t("RD7I"),c=t("cNwE");var s=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(a.a)({defaultTheme:c.a},r))};var f=t("KQm4"),u=(t("17x9"),t("bv9d"));var l=function(e){var r=function(r){var t=e(r);return r.css?Object(a.a)({},Object(u.a)(t,e(Object(a.a)({theme:r.theme},r.css))),function(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(f.a)(e.filterProps)),r};var m=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(u.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},b=t("LybE");function y(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var d=function(e){var r=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,p=e.themeKey,a=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=y(e.theme,p)||{};return Object(b.a)(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=y(i,e)||e,a&&(r=a(r))),!1===n?r:Object(o.a)({},n,r)}))};return i.propTypes={},i.filterProps=[r],i};function h(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var g=m(d({prop:"border",themeKey:"borders",transform:h}),d({prop:"borderTop",themeKey:"borders",transform:h}),d({prop:"borderRight",themeKey:"borders",transform:h}),d({prop:"borderBottom",themeKey:"borders",transform:h}),d({prop:"borderLeft",themeKey:"borders",transform:h}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"})),j=m(d({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"})),O=m(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"})),v=m(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"})),w=m(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"})),x=m(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),P=d({prop:"boxShadow",themeKey:"shadows"});function S(e){return e<=1?"".concat(100*e,"%"):e}var E=d({prop:"width",transform:S}),T=d({prop:"maxWidth",transform:S}),C=d({prop:"minWidth",transform:S}),A=d({prop:"height",transform:S}),N=d({prop:"maxHeight",transform:S}),k=d({prop:"minHeight",transform:S}),K=(d({prop:"size",cssProperty:"width",transform:S}),d({prop:"size",cssProperty:"height",transform:S}),m(E,T,C,A,N,k,d({prop:"boxSizing"}))),_=t("+Hmc"),R=m(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"})),D=t("Ff2n");function I(e){var r,t,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=I(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}var H=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=I(e))&&(o&&(o+=" "),o+=r);return o},z=t("2mql"),W=t.n(z);function L(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var B=function(e){var r=function(e){return function(r){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.name,c=Object(D.a)(o,["name"]),s=n,f="function"===typeof r?function(e){return{root:function(t){return r(Object(a.a)({theme:e},t))}}}:{root:r},u=Object(i.a)(f,Object(a.a)({Component:e,name:n||e.displayName,classNamePrefix:s},c));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=p.a.forwardRef((function(r,o){var n=r.children,i=r.className,c=r.clone,s=r.component,f=Object(D.a)(r,["children","className","clone","component"]),l=u(r),m=H(l.root,i),b=f;if(t&&(b=L(b,t)),c)return p.a.cloneElement(n,Object(a.a)({className:H(n.props.className,m)},b));if("function"===typeof n)return n(Object(a.a)({className:m},b));var y=s||e;return p.a.createElement(y,Object(a.a)({ref:o,className:m},b),n)}));return W()(l,e),l}}(e);return function(e,t){return r(e,Object(a.a)({defaultTheme:c.a},t))}},G=l(m(g,j,O,v,w,x,P,K,_.b,R)),M=B("div")(G,{name:"MuiBox"}),U=t("g4pe"),F=t.n(U),J=p.a.createElement;function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var X=s((function(){return{root:{flexGrow:1},spaceContainer:{width:"100%",height:"100%",backgroundColor:"black"}}}));r.default=function(){var e=X(),r=Object(n.useState)(null),t=(r[0],r[1]),o=Object(n.useState)(!1),p=o[0],a=o[1],i=Object(n.useState)(!1),c=i[0],s=i[1],f=Object(n.useState)(!1),u=f[0],l=f[1];return Object(n.useEffect)((function(){console.log("SCRIPTS has changed ===>",p,c,u),p&&c&&u&&function(){var e=window&&window.Spacekit,r=new e.Simulation(document.getElementById("main-container"),{basePath:"https://typpo.github.io/spacekit/src"});r.createObject("sun",Q(Q({},e.SpaceObjectPresets.SUN),{},{labelText:"THE SUN"})),r.createObject("earth",Q(Q({},e.SpaceObjectPresets.EARTH),{},{labelText:"THE EARTH"})),r.createObject("1",{scale:[1,1,1],particleSize:58.43208,labelText:"My object",hideOrbit:!1,ephem:new e.Ephem({epoch:135713.53,a:58.348286,e:.6170001,i:-85.316086,om:45.909332,w:106223.05,ma:23.536655},"rad"),ecliptic:{lineColor:13421772,displayLines:!1},theme:{color:16777215,orbitColor:8947848}}),t(r)}()}),[p,c,u]),Object(n.useEffect)((function(){var e=[a,s,l];return["https://www.spacereference.org/static/js/lib/three.r98.min.js","https://www.spacereference.org/static/js/lib/TrackballControls.js","".concat("/gaia-explorer","/scripts/spacekit.js")].map((function(r,t){var o=document.createElement("script");o.setAttribute("src",r),o.async=!0,o.onload=function(){console.log("script ".concat(t," is loadedd")),e[t](!0)},document.head.appendChild(o)})),function(){console.log("CLEANUP"),t(null)}}),[]),J("div",{className:e.root},J(F.a,null,J("title",null,"My page")),J(M,{width:"100vw",height:"100vh",style:{width:"100vw",height:"100vh"}},J("div",{id:"main-container",className:e.spaceContainer})))}},Qetd:function(e,r,t){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},SksO:function(e,r){function t(r,o){return e.exports=t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},t(r,o)}e.exports=t},W8MJ:function(e,r){function t(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}},WkPL:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}},ZhPi:function(e,r,t){var o=t("WkPL");e.exports=function(e,r){if(e){if("string"===typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}},cDf5:function(e,r){function t(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},lwsE:function(e,r){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}}},[["/EDR",0,1,3]]]);