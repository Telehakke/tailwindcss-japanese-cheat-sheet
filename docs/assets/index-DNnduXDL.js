var Ps=Object.defineProperty;var Ls=(r,o,e)=>o in r?Ps(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e;var br=(r,o,e)=>Ls(r,typeof o!="symbol"?o+"":o,e);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();var td={exports:{}},sn={},nd={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Bs=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),Os=Symbol.for("react.provider"),Ds=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),$s=Symbol.for("react.suspense"),Ws=Symbol.for("react.memo"),Hs=Symbol.for("react.lazy"),Va=Symbol.iterator;function Vs(r){return r===null||typeof r!="object"?null:(r=Va&&r[Va]||r["@@iterator"],typeof r=="function"?r:null)}var id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,ld={};function ce(r,o,e){this.props=r,this.context=o,this.refs=ld,this.updater=e||id}ce.prototype.isReactComponent={};ce.prototype.setState=function(r,o){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,o,"setState")};ce.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function dd(){}dd.prototype=ce.prototype;function Gi(r,o,e){this.props=r,this.context=o,this.refs=ld,this.updater=e||id}var Ki=Gi.prototype=new dd;Ki.constructor=Gi;ad(Ki,ce.prototype);Ki.isPureReactComponent=!0;var Ya=Array.isArray,sd=Object.prototype.hasOwnProperty,Ji={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function gd(r,o,e){var t,i={},a=null,l=null;if(o!=null)for(t in o.ref!==void 0&&(l=o.ref),o.key!==void 0&&(a=""+o.key),o)sd.call(o,t)&&!cd.hasOwnProperty(t)&&(i[t]=o[t]);var d=arguments.length-2;if(d===1)i.children=e;else if(1<d){for(var s=Array(d),g=0;g<d;g++)s[g]=arguments[g+2];i.children=s}if(r&&r.defaultProps)for(t in d=r.defaultProps,d)i[t]===void 0&&(i[t]=d[t]);return{$$typeof:rt,type:r,key:a,ref:l,props:i,_owner:Ji.current}}function Ys(r,o){return{$$typeof:rt,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}}function Zi(r){return typeof r=="object"&&r!==null&&r.$$typeof===rt}function Xs(r){var o={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(e){return o[e]})}var Xa=/\/+/g;function An(r,o){return typeof r=="object"&&r!==null&&r.key!=null?Xs(""+r.key):o.toString(36)}function zt(r,o,e,t,i){var a=typeof r;(a==="undefined"||a==="boolean")&&(r=null);var l=!1;if(r===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(r.$$typeof){case rt:case Rs:l=!0}}if(l)return l=r,i=i(l),r=t===""?"."+An(l,0):t,Ya(i)?(e="",r!=null&&(e=r.replace(Xa,"$&/")+"/"),zt(i,o,e,"",function(g){return g})):i!=null&&(Zi(i)&&(i=Ys(i,e+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Xa,"$&/")+"/")+r)),o.push(i)),1;if(l=0,t=t===""?".":t+":",Ya(r))for(var d=0;d<r.length;d++){a=r[d];var s=t+An(a,d);l+=zt(a,o,e,s,i)}else if(s=Vs(r),typeof s=="function")for(r=s.call(r),d=0;!(a=r.next()).done;)a=a.value,s=t+An(a,d++),l+=zt(a,o,e,s,i);else if(a==="object")throw o=String(r),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return l}function lt(r,o,e){if(r==null)return r;var t=[],i=0;return zt(r,t,"","",function(a){return o.call(e,a,i++)}),t}function Qs(r){if(r._status===-1){var o=r._result;o=o(),o.then(function(e){(r._status===0||r._status===-1)&&(r._status=1,r._result=e)},function(e){(r._status===0||r._status===-1)&&(r._status=2,r._result=e)}),r._status===-1&&(r._status=0,r._result=o)}if(r._status===1)return r._result.default;throw r._result}var cr={current:null},St={transition:null},Gs={ReactCurrentDispatcher:cr,ReactCurrentBatchConfig:St,ReactCurrentOwner:Ji};function bd(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:lt,forEach:function(r,o,e){lt(r,function(){o.apply(this,arguments)},e)},count:function(r){var o=0;return lt(r,function(){o++}),o},toArray:function(r){return lt(r,function(o){return o})||[]},only:function(r){if(!Zi(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};U.Component=ce;U.Fragment=Fs;U.Profiler=Ms;U.PureComponent=Gi;U.StrictMode=Bs;U.Suspense=$s;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gs;U.act=bd;U.cloneElement=function(r,o,e){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var t=ad({},r.props),i=r.key,a=r.ref,l=r._owner;if(o!=null){if(o.ref!==void 0&&(a=o.ref,l=Ji.current),o.key!==void 0&&(i=""+o.key),r.type&&r.type.defaultProps)var d=r.type.defaultProps;for(s in o)sd.call(o,s)&&!cd.hasOwnProperty(s)&&(t[s]=o[s]===void 0&&d!==void 0?d[s]:o[s])}var s=arguments.length-2;if(s===1)t.children=e;else if(1<s){d=Array(s);for(var g=0;g<s;g++)d[g]=arguments[g+2];t.children=d}return{$$typeof:rt,type:r.type,key:i,ref:a,props:t,_owner:l}};U.createContext=function(r){return r={$$typeof:Ds,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:Os,_context:r},r.Consumer=r};U.createElement=gd;U.createFactory=function(r){var o=gd.bind(null,r);return o.type=r,o};U.createRef=function(){return{current:null}};U.forwardRef=function(r){return{$$typeof:Is,render:r}};U.isValidElement=Zi;U.lazy=function(r){return{$$typeof:Hs,_payload:{_status:-1,_result:r},_init:Qs}};U.memo=function(r,o){return{$$typeof:Ws,type:r,compare:o===void 0?null:o}};U.startTransition=function(r){var o=St.transition;St.transition={};try{r()}finally{St.transition=o}};U.unstable_act=bd;U.useCallback=function(r,o){return cr.current.useCallback(r,o)};U.useContext=function(r){return cr.current.useContext(r)};U.useDebugValue=function(){};U.useDeferredValue=function(r){return cr.current.useDeferredValue(r)};U.useEffect=function(r,o){return cr.current.useEffect(r,o)};U.useId=function(){return cr.current.useId()};U.useImperativeHandle=function(r,o,e){return cr.current.useImperativeHandle(r,o,e)};U.useInsertionEffect=function(r,o){return cr.current.useInsertionEffect(r,o)};U.useLayoutEffect=function(r,o){return cr.current.useLayoutEffect(r,o)};U.useMemo=function(r,o){return cr.current.useMemo(r,o)};U.useReducer=function(r,o,e){return cr.current.useReducer(r,o,e)};U.useRef=function(r){return cr.current.useRef(r)};U.useState=function(r){return cr.current.useState(r)};U.useSyncExternalStore=function(r,o,e){return cr.current.useSyncExternalStore(r,o,e)};U.useTransition=function(){return cr.current.useTransition()};U.version="18.3.1";nd.exports=U;var R=nd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=R,Js=Symbol.for("react.element"),Zs=Symbol.for("react.fragment"),qs=Object.prototype.hasOwnProperty,rc=Ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oc={key:!0,ref:!0,__self:!0,__source:!0};function pd(r,o,e){var t,i={},a=null,l=null;e!==void 0&&(a=""+e),o.key!==void 0&&(a=""+o.key),o.ref!==void 0&&(l=o.ref);for(t in o)qs.call(o,t)&&!oc.hasOwnProperty(t)&&(i[t]=o[t]);if(r&&r.defaultProps)for(t in o=r.defaultProps,o)i[t]===void 0&&(i[t]=o[t]);return{$$typeof:Js,type:r,key:a,ref:l,props:i,_owner:rc.current}}sn.Fragment=Zs;sn.jsx=pd;sn.jsxs=pd;td.exports=sn;var n=td.exports,md={exports:{}},kr={},fd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function o(z,T){var _=z.length;z.push(T);r:for(;0<_;){var X=_-1>>>1,Z=z[X];if(0<i(Z,T))z[X]=T,z[_]=Z,_=X;else break r}}function e(z){return z.length===0?null:z[0]}function t(z){if(z.length===0)return null;var T=z[0],_=z.pop();if(_!==T){z[0]=_;r:for(var X=0,Z=z.length,it=Z>>>1;X<it;){var yo=2*(X+1)-1,Cn=z[yo],ko=yo+1,at=z[ko];if(0>i(Cn,_))ko<Z&&0>i(at,Cn)?(z[X]=at,z[ko]=_,X=ko):(z[X]=Cn,z[yo]=_,X=yo);else if(ko<Z&&0>i(at,_))z[X]=at,z[ko]=_,X=ko;else break r}}return T}function i(z,T){var _=z.sortIndex-T.sortIndex;return _!==0?_:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var l=Date,d=l.now();r.unstable_now=function(){return l.now()-d}}var s=[],g=[],u=1,w=null,m=3,y=!1,v=!1,k=!1,B=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var T=e(g);T!==null;){if(T.callback===null)t(g);else if(T.startTime<=z)t(g),T.sortIndex=T.expirationTime,o(s,T);else break;T=e(g)}}function x(z){if(k=!1,p(z),!v)if(e(s)!==null)v=!0,zn(N);else{var T=e(g);T!==null&&Sn(x,T.startTime-z)}}function N(z,T){v=!1,k&&(k=!1,b(A),A=-1),y=!0;var _=m;try{for(p(T),w=e(s);w!==null&&(!(w.expirationTime>T)||z&&!Tr());){var X=w.callback;if(typeof X=="function"){w.callback=null,m=w.priorityLevel;var Z=X(w.expirationTime<=T);T=r.unstable_now(),typeof Z=="function"?w.callback=Z:w===e(s)&&t(s),p(T)}else t(s);w=e(s)}if(w!==null)var it=!0;else{var yo=e(g);yo!==null&&Sn(x,yo.startTime-T),it=!1}return it}finally{w=null,m=_,y=!1}}var S=!1,C=null,A=-1,Y=5,P=-1;function Tr(){return!(r.unstable_now()-P<Y)}function pe(){if(C!==null){var z=r.unstable_now();P=z;var T=!0;try{T=C(!0,z)}finally{T?me():(S=!1,C=null)}}else S=!1}var me;if(typeof c=="function")me=function(){c(pe)};else if(typeof MessageChannel<"u"){var Ha=new MessageChannel,Us=Ha.port2;Ha.port1.onmessage=pe,me=function(){Us.postMessage(null)}}else me=function(){B(pe,0)};function zn(z){C=z,S||(S=!0,me())}function Sn(z,T){A=B(function(){z(r.unstable_now())},T)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){v||y||(v=!0,zn(N))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return e(s)},r.unstable_next=function(z){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var _=m;m=T;try{return z()}finally{m=_}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=m;m=z;try{return T()}finally{m=_}},r.unstable_scheduleCallback=function(z,T,_){var X=r.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?X+_:X):_=X,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,z={id:u++,callback:T,priorityLevel:z,startTime:_,expirationTime:Z,sortIndex:-1},_>X?(z.sortIndex=_,o(g,z),e(s)===null&&z===e(g)&&(k?(b(A),A=-1):k=!0,Sn(x,_-X))):(z.sortIndex=Z,o(s,z),v||y||(v=!0,zn(N))),z},r.unstable_shouldYield=Tr,r.unstable_wrapCallback=function(z){var T=m;return function(){var _=m;m=T;try{return z.apply(this,arguments)}finally{m=_}}}})(wd);fd.exports=wd;var ec=fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc=R,yr=ec;function h(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,e=1;e<arguments.length;e++)o+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,Be={};function Ro(r,o){te(r,o),te(r+"Capture",o)}function te(r,o){for(Be[r]=o,r=0;r<o.length;r++)ud.add(o[r])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qa={},Ga={};function ic(r){return oi.call(Ga,r)?!0:oi.call(Qa,r)?!1:nc.test(r)?Ga[r]=!0:(Qa[r]=!0,!1)}function ac(r,o,e,t){if(e!==null&&e.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return t?!1:e!==null?!e.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function lc(r,o,e,t){if(o===null||typeof o>"u"||ac(r,o,e,t))return!0;if(t)return!1;if(e!==null)switch(e.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function gr(r,o,e,t,i,a,l){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=e,this.propertyName=r,this.type=o,this.sanitizeURL=a,this.removeEmptyString=l}var tr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){tr[r]=new gr(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];tr[o]=new gr(o,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){tr[r]=new gr(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){tr[r]=new gr(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){tr[r]=new gr(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){tr[r]=new gr(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){tr[r]=new gr(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){tr[r]=new gr(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){tr[r]=new gr(r,5,!1,r.toLowerCase(),null,!1,!1)});var qi=/[\-:]([a-z])/g;function ra(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(qi,ra);tr[o]=new gr(o,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(qi,ra);tr[o]=new gr(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(qi,ra);tr[o]=new gr(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){tr[r]=new gr(r,1,!1,r.toLowerCase(),null,!1,!1)});tr.xlinkHref=new gr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){tr[r]=new gr(r,1,!1,r.toLowerCase(),null,!0,!0)});function oa(r,o,e,t){var i=tr.hasOwnProperty(o)?tr[o]:null;(i!==null?i.type!==0:t||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(lc(o,e,i,t)&&(e=null),t||i===null?ic(o)&&(e===null?r.removeAttribute(o):r.setAttribute(o,""+e)):i.mustUseProperty?r[i.propertyName]=e===null?i.type===3?!1:"":e:(o=i.attributeName,t=i.attributeNamespace,e===null?r.removeAttribute(o):(i=i.type,e=i===3||i===4&&e===!0?"":""+e,t?r.setAttributeNS(t,o,e):r.setAttribute(o,e))))}var Zr=tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dt=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),Oo=Symbol.for("react.fragment"),ea=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),hd=Symbol.for("react.context"),ta=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),na=Symbol.for("react.memo"),ro=Symbol.for("react.lazy"),vd=Symbol.for("react.offscreen"),Ka=Symbol.iterator;function fe(r){return r===null||typeof r!="object"?null:(r=Ka&&r[Ka]||r["@@iterator"],typeof r=="function"?r:null)}var H=Object.assign,En;function je(r){if(En===void 0)try{throw Error()}catch(e){var o=e.stack.trim().match(/\n( *(at )?)/);En=o&&o[1]||""}return`
`+En+r}var Tn=!1;function _n(r,o){if(!r||Tn)return"";Tn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(g){var t=g}Reflect.construct(r,[],o)}else{try{o.call()}catch(g){t=g}r.call(o.prototype)}else{try{throw Error()}catch(g){t=g}r()}}catch(g){if(g&&t&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),a=t.stack.split(`
`),l=i.length-1,d=a.length-1;1<=l&&0<=d&&i[l]!==a[d];)d--;for(;1<=l&&0<=d;l--,d--)if(i[l]!==a[d]){if(l!==1||d!==1)do if(l--,d--,0>d||i[l]!==a[d]){var s=`
`+i[l].replace(" at new "," at ");return r.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",r.displayName)),s}while(1<=l&&0<=d);break}}}finally{Tn=!1,Error.prepareStackTrace=e}return(r=r?r.displayName||r.name:"")?je(r):""}function dc(r){switch(r.tag){case 5:return je(r.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 2:case 15:return r=_n(r.type,!1),r;case 11:return r=_n(r.type.render,!1),r;case 1:return r=_n(r.type,!0),r;default:return""}}function ii(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Oo:return"Fragment";case Mo:return"Portal";case ei:return"Profiler";case ea:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case hd:return(r.displayName||"Context")+".Consumer";case xd:return(r._context.displayName||"Context")+".Provider";case ta:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case na:return o=r.displayName||null,o!==null?o:ii(r.type)||"Memo";case ro:o=r._payload,r=r._init;try{return ii(r(o))}catch{}}return null}function sc(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(o);case 8:return o===ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function wo(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function yd(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function cc(r){var o=yd(r)?"checked":"value",e=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),t=""+r[o];if(!r.hasOwnProperty(o)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,a=e.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return i.call(this)},set:function(l){t=""+l,a.call(this,l)}}),Object.defineProperty(r,o,{enumerable:e.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function st(r){r._valueTracker||(r._valueTracker=cc(r))}function kd(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var e=o.getValue(),t="";return r&&(t=yd(r)?r.checked?"true":"false":r.value),r=t,r!==e?(o.setValue(r),!0):!1}function Bt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ai(r,o){var e=o.checked;return H({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??r._wrapperState.initialChecked})}function Ja(r,o){var e=o.defaultValue==null?"":o.defaultValue,t=o.checked!=null?o.checked:o.defaultChecked;e=wo(o.value!=null?o.value:e),r._wrapperState={initialChecked:t,initialValue:e,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function jd(r,o){o=o.checked,o!=null&&oa(r,"checked",o,!1)}function li(r,o){jd(r,o);var e=wo(o.value),t=o.type;if(e!=null)t==="number"?(e===0&&r.value===""||r.value!=e)&&(r.value=""+e):r.value!==""+e&&(r.value=""+e);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?di(r,o.type,e):o.hasOwnProperty("defaultValue")&&di(r,o.type,wo(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function Za(r,o,e){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var t=o.type;if(!(t!=="submit"&&t!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,e||o===r.value||(r.value=o),r.defaultValue=o}e=r.name,e!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,e!==""&&(r.name=e)}function di(r,o,e){(o!=="number"||Bt(r.ownerDocument)!==r)&&(e==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+e&&(r.defaultValue=""+e))}var Ne=Array.isArray;function Jo(r,o,e,t){if(r=r.options,o){o={};for(var i=0;i<e.length;i++)o["$"+e[i]]=!0;for(e=0;e<r.length;e++)i=o.hasOwnProperty("$"+r[e].value),r[e].selected!==i&&(r[e].selected=i),i&&t&&(r[e].defaultSelected=!0)}else{for(e=""+wo(e),o=null,i=0;i<r.length;i++){if(r[i].value===e){r[i].selected=!0,t&&(r[i].defaultSelected=!0);return}o!==null||r[i].disabled||(o=r[i])}o!==null&&(o.selected=!0)}}function si(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(h(91));return H({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function qa(r,o){var e=o.value;if(e==null){if(e=o.children,o=o.defaultValue,e!=null){if(o!=null)throw Error(h(92));if(Ne(e)){if(1<e.length)throw Error(h(93));e=e[0]}o=e}o==null&&(o=""),e=o}r._wrapperState={initialValue:wo(e)}}function Nd(r,o){var e=wo(o.value),t=wo(o.defaultValue);e!=null&&(e=""+e,e!==r.value&&(r.value=e),o.defaultValue==null&&r.defaultValue!==e&&(r.defaultValue=e)),t!=null&&(r.defaultValue=""+t)}function rl(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function zd(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?zd(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ct,Sd=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,e,t,i){MSApp.execUnsafeLocalFunction(function(){return r(o,e,t,i)})}:r}(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(ct=ct||document.createElement("div"),ct.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=ct.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function Me(r,o){if(o){var e=r.firstChild;if(e&&e===r.lastChild&&e.nodeType===3){e.nodeValue=o;return}}r.textContent=o}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gc=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(r){gc.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),Ce[o]=Ce[r]})});function Cd(r,o,e){return o==null||typeof o=="boolean"||o===""?"":e||typeof o!="number"||o===0||Ce.hasOwnProperty(r)&&Ce[r]?(""+o).trim():o+"px"}function Ad(r,o){r=r.style;for(var e in o)if(o.hasOwnProperty(e)){var t=e.indexOf("--")===0,i=Cd(e,o[e],t);e==="float"&&(e="cssFloat"),t?r.setProperty(e,i):r[e]=i}}var bc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(r,o){if(o){if(bc[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(h(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(h(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(h(61))}if(o.style!=null&&typeof o.style!="object")throw Error(h(62))}}function bi(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function ia(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var mi=null,Zo=null,qo=null;function ol(r){if(r=tt(r)){if(typeof mi!="function")throw Error(h(280));var o=r.stateNode;o&&(o=mn(o),mi(r.stateNode,r.type,o))}}function Ed(r){Zo?qo?qo.push(r):qo=[r]:Zo=r}function Td(){if(Zo){var r=Zo,o=qo;if(qo=Zo=null,ol(r),o)for(r=0;r<o.length;r++)ol(o[r])}}function _d(r,o){return r(o)}function Ud(){}var Un=!1;function Pd(r,o,e){if(Un)return r(o,e);Un=!0;try{return _d(r,o,e)}finally{Un=!1,(Zo!==null||qo!==null)&&(Ud(),Td())}}function Oe(r,o){var e=r.stateNode;if(e===null)return null;var t=mn(e);if(t===null)return null;e=t[o];r:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break r;default:r=!1}if(r)return null;if(e&&typeof e!="function")throw Error(h(231,o,typeof e));return e}var fi=!1;if(Qr)try{var we={};Object.defineProperty(we,"passive",{get:function(){fi=!0}}),window.addEventListener("test",we,we),window.removeEventListener("test",we,we)}catch{fi=!1}function pc(r,o,e,t,i,a,l,d,s){var g=Array.prototype.slice.call(arguments,3);try{o.apply(e,g)}catch(u){this.onError(u)}}var Ae=!1,Mt=null,Ot=!1,wi=null,mc={onError:function(r){Ae=!0,Mt=r}};function fc(r,o,e,t,i,a,l,d,s){Ae=!1,Mt=null,pc.apply(mc,arguments)}function wc(r,o,e,t,i,a,l,d,s){if(fc.apply(this,arguments),Ae){if(Ae){var g=Mt;Ae=!1,Mt=null}else throw Error(h(198));Ot||(Ot=!0,wi=g)}}function Fo(r){var o=r,e=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,o.flags&4098&&(e=o.return),r=o.return;while(r)}return o.tag===3?e:null}function Ld(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function el(r){if(Fo(r)!==r)throw Error(h(188))}function uc(r){var o=r.alternate;if(!o){if(o=Fo(r),o===null)throw Error(h(188));return o!==r?null:r}for(var e=r,t=o;;){var i=e.return;if(i===null)break;var a=i.alternate;if(a===null){if(t=i.return,t!==null){e=t;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===e)return el(i),r;if(a===t)return el(i),o;a=a.sibling}throw Error(h(188))}if(e.return!==t.return)e=i,t=a;else{for(var l=!1,d=i.child;d;){if(d===e){l=!0,e=i,t=a;break}if(d===t){l=!0,t=i,e=a;break}d=d.sibling}if(!l){for(d=a.child;d;){if(d===e){l=!0,e=a,t=i;break}if(d===t){l=!0,t=a,e=i;break}d=d.sibling}if(!l)throw Error(h(189))}}if(e.alternate!==t)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?r:o}function Rd(r){return r=uc(r),r!==null?Fd(r):null}function Fd(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=Fd(r);if(o!==null)return o;r=r.sibling}return null}var Bd=yr.unstable_scheduleCallback,tl=yr.unstable_cancelCallback,xc=yr.unstable_shouldYield,hc=yr.unstable_requestPaint,Q=yr.unstable_now,vc=yr.unstable_getCurrentPriorityLevel,aa=yr.unstable_ImmediatePriority,Md=yr.unstable_UserBlockingPriority,Dt=yr.unstable_NormalPriority,yc=yr.unstable_LowPriority,Od=yr.unstable_IdlePriority,cn=null,Ir=null;function kc(r){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(cn,r,void 0,(r.current.flags&128)===128)}catch{}}var Rr=Math.clz32?Math.clz32:zc,jc=Math.log,Nc=Math.LN2;function zc(r){return r>>>=0,r===0?32:31-(jc(r)/Nc|0)|0}var gt=64,bt=4194304;function ze(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function It(r,o){var e=r.pendingLanes;if(e===0)return 0;var t=0,i=r.suspendedLanes,a=r.pingedLanes,l=e&268435455;if(l!==0){var d=l&~i;d!==0?t=ze(d):(a&=l,a!==0&&(t=ze(a)))}else l=e&~i,l!==0?t=ze(l):a!==0&&(t=ze(a));if(t===0)return 0;if(o!==0&&o!==t&&!(o&i)&&(i=t&-t,a=o&-o,i>=a||i===16&&(a&4194240)!==0))return o;if(t&4&&(t|=e&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=t;0<o;)e=31-Rr(o),i=1<<e,t|=r[e],o&=~i;return t}function Sc(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cc(r,o){for(var e=r.suspendedLanes,t=r.pingedLanes,i=r.expirationTimes,a=r.pendingLanes;0<a;){var l=31-Rr(a),d=1<<l,s=i[l];s===-1?(!(d&e)||d&t)&&(i[l]=Sc(d,o)):s<=o&&(r.expiredLanes|=d),a&=~d}}function ui(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Dd(){var r=gt;return gt<<=1,!(gt&4194240)&&(gt=64),r}function Pn(r){for(var o=[],e=0;31>e;e++)o.push(r);return o}function ot(r,o,e){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-Rr(o),r[o]=e}function Ac(r,o){var e=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<e;){var i=31-Rr(e),a=1<<i;o[i]=0,t[i]=-1,r[i]=-1,e&=~a}}function la(r,o){var e=r.entangledLanes|=o;for(r=r.entanglements;e;){var t=31-Rr(e),i=1<<t;i&o|r[t]&o&&(r[t]|=o),e&=~i}}var F=0;function Id(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var $d,da,Wd,Hd,Vd,xi=!1,pt=[],lo=null,so=null,co=null,De=new Map,Ie=new Map,eo=[],Ec="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nl(r,o){switch(r){case"focusin":case"focusout":lo=null;break;case"dragenter":case"dragleave":so=null;break;case"mouseover":case"mouseout":co=null;break;case"pointerover":case"pointerout":De.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ie.delete(o.pointerId)}}function ue(r,o,e,t,i,a){return r===null||r.nativeEvent!==a?(r={blockedOn:o,domEventName:e,eventSystemFlags:t,nativeEvent:a,targetContainers:[i]},o!==null&&(o=tt(o),o!==null&&da(o)),r):(r.eventSystemFlags|=t,o=r.targetContainers,i!==null&&o.indexOf(i)===-1&&o.push(i),r)}function Tc(r,o,e,t,i){switch(o){case"focusin":return lo=ue(lo,r,o,e,t,i),!0;case"dragenter":return so=ue(so,r,o,e,t,i),!0;case"mouseover":return co=ue(co,r,o,e,t,i),!0;case"pointerover":var a=i.pointerId;return De.set(a,ue(De.get(a)||null,r,o,e,t,i)),!0;case"gotpointercapture":return a=i.pointerId,Ie.set(a,ue(Ie.get(a)||null,r,o,e,t,i)),!0}return!1}function Yd(r){var o=zo(r.target);if(o!==null){var e=Fo(o);if(e!==null){if(o=e.tag,o===13){if(o=Ld(e),o!==null){r.blockedOn=o,Vd(r.priority,function(){Wd(e)});return}}else if(o===3&&e.stateNode.current.memoizedState.isDehydrated){r.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ct(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var e=hi(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(e===null){e=r.nativeEvent;var t=new e.constructor(e.type,e);pi=t,e.target.dispatchEvent(t),pi=null}else return o=tt(e),o!==null&&da(o),r.blockedOn=e,!1;o.shift()}return!0}function il(r,o,e){Ct(r)&&e.delete(o)}function _c(){xi=!1,lo!==null&&Ct(lo)&&(lo=null),so!==null&&Ct(so)&&(so=null),co!==null&&Ct(co)&&(co=null),De.forEach(il),Ie.forEach(il)}function xe(r,o){r.blockedOn===o&&(r.blockedOn=null,xi||(xi=!0,yr.unstable_scheduleCallback(yr.unstable_NormalPriority,_c)))}function $e(r){function o(i){return xe(i,r)}if(0<pt.length){xe(pt[0],r);for(var e=1;e<pt.length;e++){var t=pt[e];t.blockedOn===r&&(t.blockedOn=null)}}for(lo!==null&&xe(lo,r),so!==null&&xe(so,r),co!==null&&xe(co,r),De.forEach(o),Ie.forEach(o),e=0;e<eo.length;e++)t=eo[e],t.blockedOn===r&&(t.blockedOn=null);for(;0<eo.length&&(e=eo[0],e.blockedOn===null);)Yd(e),e.blockedOn===null&&eo.shift()}var re=Zr.ReactCurrentBatchConfig,$t=!0;function Uc(r,o,e,t){var i=F,a=re.transition;re.transition=null;try{F=1,sa(r,o,e,t)}finally{F=i,re.transition=a}}function Pc(r,o,e,t){var i=F,a=re.transition;re.transition=null;try{F=4,sa(r,o,e,t)}finally{F=i,re.transition=a}}function sa(r,o,e,t){if($t){var i=hi(r,o,e,t);if(i===null)Wn(r,o,t,Wt,e),nl(r,t);else if(Tc(i,r,o,e,t))t.stopPropagation();else if(nl(r,t),o&4&&-1<Ec.indexOf(r)){for(;i!==null;){var a=tt(i);if(a!==null&&$d(a),a=hi(r,o,e,t),a===null&&Wn(r,o,t,Wt,e),a===i)break;i=a}i!==null&&t.stopPropagation()}else Wn(r,o,t,null,e)}}var Wt=null;function hi(r,o,e,t){if(Wt=null,r=ia(t),r=zo(r),r!==null)if(o=Fo(r),o===null)r=null;else if(e=o.tag,e===13){if(r=Ld(o),r!==null)return r;r=null}else if(e===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Wt=r,null}function Xd(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vc()){case aa:return 1;case Md:return 4;case Dt:case yc:return 16;case Od:return 536870912;default:return 16}default:return 16}}var no=null,ca=null,At=null;function Qd(){if(At)return At;var r,o=ca,e=o.length,t,i="value"in no?no.value:no.textContent,a=i.length;for(r=0;r<e&&o[r]===i[r];r++);var l=e-r;for(t=1;t<=l&&o[e-t]===i[a-t];t++);return At=i.slice(r,1<t?1-t:void 0)}function Et(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function mt(){return!0}function al(){return!1}function jr(r){function o(e,t,i,a,l){this._reactName=e,this._targetInst=i,this.type=t,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var d in r)r.hasOwnProperty(d)&&(e=r[d],this[d]=e?e(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?mt:al,this.isPropagationStopped=al,this}return H(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=mt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=mt)},persist:function(){},isPersistent:mt}),o}var ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ga=jr(ge),et=H({},ge,{view:0,detail:0}),Lc=jr(et),Ln,Rn,he,gn=H({},et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==he&&(he&&r.type==="mousemove"?(Ln=r.screenX-he.screenX,Rn=r.screenY-he.screenY):Rn=Ln=0,he=r),Ln)},movementY:function(r){return"movementY"in r?r.movementY:Rn}}),ll=jr(gn),Rc=H({},gn,{dataTransfer:0}),Fc=jr(Rc),Bc=H({},et,{relatedTarget:0}),Fn=jr(Bc),Mc=H({},ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Oc=jr(Mc),Dc=H({},ge,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ic=jr(Dc),$c=H({},ge,{data:0}),dl=jr($c),Wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=Vc[r])?!!o[r]:!1}function ba(){return Yc}var Xc=H({},et,{key:function(r){if(r.key){var o=Wc[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Et(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Hc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(r){return r.type==="keypress"?Et(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Et(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Qc=jr(Xc),Gc=H({},gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=jr(Gc),Kc=H({},et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),Jc=jr(Kc),Zc=H({},ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),qc=jr(Zc),rg=H({},gn,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),og=jr(rg),eg=[9,13,27,32],pa=Qr&&"CompositionEvent"in window,Ee=null;Qr&&"documentMode"in document&&(Ee=document.documentMode);var tg=Qr&&"TextEvent"in window&&!Ee,Gd=Qr&&(!pa||Ee&&8<Ee&&11>=Ee),cl=" ",gl=!1;function Kd(r,o){switch(r){case"keyup":return eg.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Do=!1;function ng(r,o){switch(r){case"compositionend":return Jd(o);case"keypress":return o.which!==32?null:(gl=!0,cl);case"textInput":return r=o.data,r===cl&&gl?null:r;default:return null}}function ig(r,o){if(Do)return r==="compositionend"||!pa&&Kd(r,o)?(r=Qd(),At=ca=no=null,Do=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Gd&&o.locale!=="ko"?null:o.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bl(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!ag[r.type]:o==="textarea"}function Zd(r,o,e,t){Ed(t),o=Ht(o,"onChange"),0<o.length&&(e=new ga("onChange","change",null,e,t),r.push({event:e,listeners:o}))}var Te=null,We=null;function lg(r){s0(r,0)}function bn(r){var o=Wo(r);if(kd(o))return r}function dg(r,o){if(r==="change")return o}var qd=!1;if(Qr){var Bn;if(Qr){var Mn="oninput"in document;if(!Mn){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),Mn=typeof pl.oninput=="function"}Bn=Mn}else Bn=!1;qd=Bn&&(!document.documentMode||9<document.documentMode)}function ml(){Te&&(Te.detachEvent("onpropertychange",r0),We=Te=null)}function r0(r){if(r.propertyName==="value"&&bn(We)){var o=[];Zd(o,We,r,ia(r)),Pd(lg,o)}}function sg(r,o,e){r==="focusin"?(ml(),Te=o,We=e,Te.attachEvent("onpropertychange",r0)):r==="focusout"&&ml()}function cg(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return bn(We)}function gg(r,o){if(r==="click")return bn(o)}function bg(r,o){if(r==="input"||r==="change")return bn(o)}function pg(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Br=typeof Object.is=="function"?Object.is:pg;function He(r,o){if(Br(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var e=Object.keys(r),t=Object.keys(o);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var i=e[t];if(!oi.call(o,i)||!Br(r[i],o[i]))return!1}return!0}function fl(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function wl(r,o){var e=fl(r);r=0;for(var t;e;){if(e.nodeType===3){if(t=r+e.textContent.length,r<=o&&t>=o)return{node:e,offset:o-r};r=t}r:{for(;e;){if(e.nextSibling){e=e.nextSibling;break r}e=e.parentNode}e=void 0}e=fl(e)}}function o0(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?o0(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function e0(){for(var r=window,o=Bt();o instanceof r.HTMLIFrameElement;){try{var e=typeof o.contentWindow.location.href=="string"}catch{e=!1}if(e)r=o.contentWindow;else break;o=Bt(r.document)}return o}function ma(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function mg(r){var o=e0(),e=r.focusedElem,t=r.selectionRange;if(o!==e&&e&&e.ownerDocument&&o0(e.ownerDocument.documentElement,e)){if(t!==null&&ma(e)){if(o=t.start,r=t.end,r===void 0&&(r=o),"selectionStart"in e)e.selectionStart=o,e.selectionEnd=Math.min(r,e.value.length);else if(r=(o=e.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var i=e.textContent.length,a=Math.min(t.start,i);t=t.end===void 0?a:Math.min(t.end,i),!r.extend&&a>t&&(i=t,t=a,a=i),i=wl(e,a);var l=wl(e,t);i&&l&&(r.rangeCount!==1||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==l.node||r.focusOffset!==l.offset)&&(o=o.createRange(),o.setStart(i.node,i.offset),r.removeAllRanges(),a>t?(r.addRange(o),r.extend(l.node,l.offset)):(o.setEnd(l.node,l.offset),r.addRange(o)))}}for(o=[],r=e;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<o.length;e++)r=o[e],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var fg=Qr&&"documentMode"in document&&11>=document.documentMode,Io=null,vi=null,_e=null,yi=!1;function ul(r,o,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;yi||Io==null||Io!==Bt(t)||(t=Io,"selectionStart"in t&&ma(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),_e&&He(_e,t)||(_e=t,t=Ht(vi,"onSelect"),0<t.length&&(o=new ga("onSelect","select",null,o,e),r.push({event:o,listeners:t}),o.target=Io)))}function ft(r,o){var e={};return e[r.toLowerCase()]=o.toLowerCase(),e["Webkit"+r]="webkit"+o,e["Moz"+r]="moz"+o,e}var $o={animationend:ft("Animation","AnimationEnd"),animationiteration:ft("Animation","AnimationIteration"),animationstart:ft("Animation","AnimationStart"),transitionend:ft("Transition","TransitionEnd")},On={},t0={};Qr&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function pn(r){if(On[r])return On[r];if(!$o[r])return r;var o=$o[r],e;for(e in o)if(o.hasOwnProperty(e)&&e in t0)return On[r]=o[e];return r}var n0=pn("animationend"),i0=pn("animationiteration"),a0=pn("animationstart"),l0=pn("transitionend"),d0=new Map,xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xo(r,o){d0.set(r,o),Ro(o,[r])}for(var Dn=0;Dn<xl.length;Dn++){var In=xl[Dn],wg=In.toLowerCase(),ug=In[0].toUpperCase()+In.slice(1);xo(wg,"on"+ug)}xo(n0,"onAnimationEnd");xo(i0,"onAnimationIteration");xo(a0,"onAnimationStart");xo("dblclick","onDoubleClick");xo("focusin","onFocus");xo("focusout","onBlur");xo(l0,"onTransitionEnd");te("onMouseEnter",["mouseout","mouseover"]);te("onMouseLeave",["mouseout","mouseover"]);te("onPointerEnter",["pointerout","pointerover"]);te("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Se="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Se));function hl(r,o,e){var t=r.type||"unknown-event";r.currentTarget=e,wc(t,o,void 0,r),r.currentTarget=null}function s0(r,o){o=(o&4)!==0;for(var e=0;e<r.length;e++){var t=r[e],i=t.event;t=t.listeners;r:{var a=void 0;if(o)for(var l=t.length-1;0<=l;l--){var d=t[l],s=d.instance,g=d.currentTarget;if(d=d.listener,s!==a&&i.isPropagationStopped())break r;hl(i,d,g),a=s}else for(l=0;l<t.length;l++){if(d=t[l],s=d.instance,g=d.currentTarget,d=d.listener,s!==a&&i.isPropagationStopped())break r;hl(i,d,g),a=s}}}if(Ot)throw r=wi,Ot=!1,wi=null,r}function O(r,o){var e=o[Si];e===void 0&&(e=o[Si]=new Set);var t=r+"__bubble";e.has(t)||(c0(o,r,2,!1),e.add(t))}function $n(r,o,e){var t=0;o&&(t|=4),c0(e,r,t,o)}var wt="_reactListening"+Math.random().toString(36).slice(2);function Ve(r){if(!r[wt]){r[wt]=!0,ud.forEach(function(e){e!=="selectionchange"&&(xg.has(e)||$n(e,!1,r),$n(e,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[wt]||(o[wt]=!0,$n("selectionchange",!1,o))}}function c0(r,o,e,t){switch(Xd(o)){case 1:var i=Uc;break;case 4:i=Pc;break;default:i=sa}e=i.bind(null,o,e,r),i=void 0,!fi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(i=!0),t?i!==void 0?r.addEventListener(o,e,{capture:!0,passive:i}):r.addEventListener(o,e,!0):i!==void 0?r.addEventListener(o,e,{passive:i}):r.addEventListener(o,e,!1)}function Wn(r,o,e,t,i){var a=t;if(!(o&1)&&!(o&2)&&t!==null)r:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var d=t.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(l===4)for(l=t.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;d!==null;){if(l=zo(d),l===null)return;if(s=l.tag,s===5||s===6){t=a=l;continue r}d=d.parentNode}}t=t.return}Pd(function(){var g=a,u=ia(e),w=[];r:{var m=d0.get(r);if(m!==void 0){var y=ga,v=r;switch(r){case"keypress":if(Et(e)===0)break r;case"keydown":case"keyup":y=Qc;break;case"focusin":v="focus",y=Fn;break;case"focusout":v="blur",y=Fn;break;case"beforeblur":case"afterblur":y=Fn;break;case"click":if(e.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Fc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Jc;break;case n0:case i0:case a0:y=Oc;break;case l0:y=qc;break;case"scroll":y=Lc;break;case"wheel":y=og;break;case"copy":case"cut":case"paste":y=Ic;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sl}var k=(o&4)!==0,B=!k&&r==="scroll",b=k?m!==null?m+"Capture":null:m;k=[];for(var c=g,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,b!==null&&(x=Oe(c,b),x!=null&&k.push(Ye(c,x,p)))),B)break;c=c.return}0<k.length&&(m=new y(m,v,null,e,u),w.push({event:m,listeners:k}))}}if(!(o&7)){r:{if(m=r==="mouseover"||r==="pointerover",y=r==="mouseout"||r==="pointerout",m&&e!==pi&&(v=e.relatedTarget||e.fromElement)&&(zo(v)||v[Gr]))break r;if((y||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=e.relatedTarget||e.toElement,y=g,v=v?zo(v):null,v!==null&&(B=Fo(v),v!==B||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=g),y!==v)){if(k=ll,x="onMouseLeave",b="onMouseEnter",c="mouse",(r==="pointerout"||r==="pointerover")&&(k=sl,x="onPointerLeave",b="onPointerEnter",c="pointer"),B=y==null?m:Wo(y),p=v==null?m:Wo(v),m=new k(x,c+"leave",y,e,u),m.target=B,m.relatedTarget=p,x=null,zo(u)===g&&(k=new k(b,c+"enter",v,e,u),k.target=p,k.relatedTarget=B,x=k),B=x,y&&v)o:{for(k=y,b=v,c=0,p=k;p;p=Bo(p))c++;for(p=0,x=b;x;x=Bo(x))p++;for(;0<c-p;)k=Bo(k),c--;for(;0<p-c;)b=Bo(b),p--;for(;c--;){if(k===b||b!==null&&k===b.alternate)break o;k=Bo(k),b=Bo(b)}k=null}else k=null;y!==null&&vl(w,m,y,k,!1),v!==null&&B!==null&&vl(w,B,v,k,!0)}}r:{if(m=g?Wo(g):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var N=dg;else if(bl(m))if(qd)N=bg;else{N=cg;var S=sg}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=gg);if(N&&(N=N(r,g))){Zd(w,N,e,u);break r}S&&S(r,m,g),r==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&di(m,"number",m.value)}switch(S=g?Wo(g):window,r){case"focusin":(bl(S)||S.contentEditable==="true")&&(Io=S,vi=g,_e=null);break;case"focusout":_e=vi=Io=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,ul(w,e,u);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":ul(w,e,u)}var C;if(pa)r:{switch(r){case"compositionstart":var A="onCompositionStart";break r;case"compositionend":A="onCompositionEnd";break r;case"compositionupdate":A="onCompositionUpdate";break r}A=void 0}else Do?Kd(r,e)&&(A="onCompositionEnd"):r==="keydown"&&e.keyCode===229&&(A="onCompositionStart");A&&(Gd&&e.locale!=="ko"&&(Do||A!=="onCompositionStart"?A==="onCompositionEnd"&&Do&&(C=Qd()):(no=u,ca="value"in no?no.value:no.textContent,Do=!0)),S=Ht(g,A),0<S.length&&(A=new dl(A,r,null,e,u),w.push({event:A,listeners:S}),C?A.data=C:(C=Jd(e),C!==null&&(A.data=C)))),(C=tg?ng(r,e):ig(r,e))&&(g=Ht(g,"onBeforeInput"),0<g.length&&(u=new dl("onBeforeInput","beforeinput",null,e,u),w.push({event:u,listeners:g}),u.data=C))}s0(w,o)})}function Ye(r,o,e){return{instance:r,listener:o,currentTarget:e}}function Ht(r,o){for(var e=o+"Capture",t=[];r!==null;){var i=r,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Oe(r,e),a!=null&&t.unshift(Ye(r,a,i)),a=Oe(r,o),a!=null&&t.push(Ye(r,a,i))),r=r.return}return t}function Bo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function vl(r,o,e,t,i){for(var a=o._reactName,l=[];e!==null&&e!==t;){var d=e,s=d.alternate,g=d.stateNode;if(s!==null&&s===t)break;d.tag===5&&g!==null&&(d=g,i?(s=Oe(e,a),s!=null&&l.unshift(Ye(e,s,d))):i||(s=Oe(e,a),s!=null&&l.push(Ye(e,s,d)))),e=e.return}l.length!==0&&r.push({event:o,listeners:l})}var hg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function yl(r){return(typeof r=="string"?r:""+r).replace(hg,`
`).replace(vg,"")}function ut(r,o,e){if(o=yl(o),yl(r)!==o&&e)throw Error(h(425))}function Vt(){}var ki=null,ji=null;function Ni(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,kl=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof kl<"u"?function(r){return kl.resolve(null).then(r).catch(jg)}:zi;function jg(r){setTimeout(function(){throw r})}function Hn(r,o){var e=o,t=0;do{var i=e.nextSibling;if(r.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(t===0){r.removeChild(i),$e(o);return}t--}else e!=="$"&&e!=="$?"&&e!=="$!"||t++;e=i}while(e);$e(o)}function go(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function jl(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var e=r.data;if(e==="$"||e==="$!"||e==="$?"){if(o===0)return r;o--}else e==="/$"&&o++}r=r.previousSibling}return null}var be=Math.random().toString(36).slice(2),Dr="__reactFiber$"+be,Xe="__reactProps$"+be,Gr="__reactContainer$"+be,Si="__reactEvents$"+be,Ng="__reactListeners$"+be,zg="__reactHandles$"+be;function zo(r){var o=r[Dr];if(o)return o;for(var e=r.parentNode;e;){if(o=e[Gr]||e[Dr]){if(e=o.alternate,o.child!==null||e!==null&&e.child!==null)for(r=jl(r);r!==null;){if(e=r[Dr])return e;r=jl(r)}return o}r=e,e=r.parentNode}return null}function tt(r){return r=r[Dr]||r[Gr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Wo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(h(33))}function mn(r){return r[Xe]||null}var Ci=[],Ho=-1;function ho(r){return{current:r}}function D(r){0>Ho||(r.current=Ci[Ho],Ci[Ho]=null,Ho--)}function M(r,o){Ho++,Ci[Ho]=r.current,r.current=o}var uo={},lr=ho(uo),fr=ho(!1),To=uo;function ne(r,o){var e=r.type.contextTypes;if(!e)return uo;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===o)return t.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in e)i[a]=o[a];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=i),i}function wr(r){return r=r.childContextTypes,r!=null}function Yt(){D(fr),D(lr)}function Nl(r,o,e){if(lr.current!==uo)throw Error(h(168));M(lr,o),M(fr,e)}function g0(r,o,e){var t=r.stateNode;if(o=o.childContextTypes,typeof t.getChildContext!="function")return e;t=t.getChildContext();for(var i in t)if(!(i in o))throw Error(h(108,sc(r)||"Unknown",i));return H({},e,t)}function Xt(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||uo,To=lr.current,M(lr,r),M(fr,fr.current),!0}function zl(r,o,e){var t=r.stateNode;if(!t)throw Error(h(169));e?(r=g0(r,o,To),t.__reactInternalMemoizedMergedChildContext=r,D(fr),D(lr),M(lr,r)):D(fr),M(fr,e)}var Hr=null,fn=!1,Vn=!1;function b0(r){Hr===null?Hr=[r]:Hr.push(r)}function Sg(r){fn=!0,b0(r)}function vo(){if(!Vn&&Hr!==null){Vn=!0;var r=0,o=F;try{var e=Hr;for(F=1;r<e.length;r++){var t=e[r];do t=t(!0);while(t!==null)}Hr=null,fn=!1}catch(i){throw Hr!==null&&(Hr=Hr.slice(r+1)),Bd(aa,vo),i}finally{F=o,Vn=!1}}return null}var Vo=[],Yo=0,Qt=null,Gt=0,Nr=[],zr=0,_o=null,Vr=1,Yr="";function jo(r,o){Vo[Yo++]=Gt,Vo[Yo++]=Qt,Qt=r,Gt=o}function p0(r,o,e){Nr[zr++]=Vr,Nr[zr++]=Yr,Nr[zr++]=_o,_o=r;var t=Vr;r=Yr;var i=32-Rr(t)-1;t&=~(1<<i),e+=1;var a=32-Rr(o)+i;if(30<a){var l=i-i%5;a=(t&(1<<l)-1).toString(32),t>>=l,i-=l,Vr=1<<32-Rr(o)+i|e<<i|t,Yr=a+r}else Vr=1<<a|e<<i|t,Yr=r}function fa(r){r.return!==null&&(jo(r,1),p0(r,1,0))}function wa(r){for(;r===Qt;)Qt=Vo[--Yo],Vo[Yo]=null,Gt=Vo[--Yo],Vo[Yo]=null;for(;r===_o;)_o=Nr[--zr],Nr[zr]=null,Yr=Nr[--zr],Nr[zr]=null,Vr=Nr[--zr],Nr[zr]=null}var vr=null,hr=null,I=!1,Lr=null;function m0(r,o){var e=Sr(5,null,null,0);e.elementType="DELETED",e.stateNode=o,e.return=r,o=r.deletions,o===null?(r.deletions=[e],r.flags|=16):o.push(e)}function Sl(r,o){switch(r.tag){case 5:var e=r.type;return o=o.nodeType!==1||e.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,vr=r,hr=go(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,vr=r,hr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(e=_o!==null?{id:Vr,overflow:Yr}:null,r.memoizedState={dehydrated:o,treeContext:e,retryLane:1073741824},e=Sr(18,null,null,0),e.stateNode=o,e.return=r,r.child=e,vr=r,hr=null,!0):!1;default:return!1}}function Ai(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ei(r){if(I){var o=hr;if(o){var e=o;if(!Sl(r,o)){if(Ai(r))throw Error(h(418));o=go(e.nextSibling);var t=vr;o&&Sl(r,o)?m0(t,e):(r.flags=r.flags&-4097|2,I=!1,vr=r)}}else{if(Ai(r))throw Error(h(418));r.flags=r.flags&-4097|2,I=!1,vr=r}}}function Cl(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;vr=r}function xt(r){if(r!==vr)return!1;if(!I)return Cl(r),I=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!Ni(r.type,r.memoizedProps)),o&&(o=hr)){if(Ai(r))throw f0(),Error(h(418));for(;o;)m0(r,o),o=go(o.nextSibling)}if(Cl(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(h(317));r:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var e=r.data;if(e==="/$"){if(o===0){hr=go(r.nextSibling);break r}o--}else e!=="$"&&e!=="$!"&&e!=="$?"||o++}r=r.nextSibling}hr=null}}else hr=vr?go(r.stateNode.nextSibling):null;return!0}function f0(){for(var r=hr;r;)r=go(r.nextSibling)}function ie(){hr=vr=null,I=!1}function ua(r){Lr===null?Lr=[r]:Lr.push(r)}var Cg=Zr.ReactCurrentBatchConfig;function ve(r,o,e){if(r=e.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(h(309));var t=e.stateNode}if(!t)throw Error(h(147,r));var i=t,a=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===a?o.ref:(o=function(l){var d=i.refs;l===null?delete d[a]:d[a]=l},o._stringRef=a,o)}if(typeof r!="string")throw Error(h(284));if(!e._owner)throw Error(h(290,r))}return r}function ht(r,o){throw r=Object.prototype.toString.call(o),Error(h(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function Al(r){var o=r._init;return o(r._payload)}function w0(r){function o(b,c){if(r){var p=b.deletions;p===null?(b.deletions=[c],b.flags|=16):p.push(c)}}function e(b,c){if(!r)return null;for(;c!==null;)o(b,c),c=c.sibling;return null}function t(b,c){for(b=new Map;c!==null;)c.key!==null?b.set(c.key,c):b.set(c.index,c),c=c.sibling;return b}function i(b,c){return b=fo(b,c),b.index=0,b.sibling=null,b}function a(b,c,p){return b.index=p,r?(p=b.alternate,p!==null?(p=p.index,p<c?(b.flags|=2,c):p):(b.flags|=2,c)):(b.flags|=1048576,c)}function l(b){return r&&b.alternate===null&&(b.flags|=2),b}function d(b,c,p,x){return c===null||c.tag!==6?(c=Zn(p,b.mode,x),c.return=b,c):(c=i(c,p),c.return=b,c)}function s(b,c,p,x){var N=p.type;return N===Oo?u(b,c,p.props.children,x,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ro&&Al(N)===c.type)?(x=i(c,p.props),x.ref=ve(b,c,p),x.return=b,x):(x=Ft(p.type,p.key,p.props,null,b.mode,x),x.ref=ve(b,c,p),x.return=b,x)}function g(b,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=qn(p,b.mode,x),c.return=b,c):(c=i(c,p.children||[]),c.return=b,c)}function u(b,c,p,x,N){return c===null||c.tag!==7?(c=Eo(p,b.mode,x,N),c.return=b,c):(c=i(c,p),c.return=b,c)}function w(b,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zn(""+c,b.mode,p),c.return=b,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case dt:return p=Ft(c.type,c.key,c.props,null,b.mode,p),p.ref=ve(b,null,c),p.return=b,p;case Mo:return c=qn(c,b.mode,p),c.return=b,c;case ro:var x=c._init;return w(b,x(c._payload),p)}if(Ne(c)||fe(c))return c=Eo(c,b.mode,p,null),c.return=b,c;ht(b,c)}return null}function m(b,c,p,x){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:d(b,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case dt:return p.key===N?s(b,c,p,x):null;case Mo:return p.key===N?g(b,c,p,x):null;case ro:return N=p._init,m(b,c,N(p._payload),x)}if(Ne(p)||fe(p))return N!==null?null:u(b,c,p,x,null);ht(b,p)}return null}function y(b,c,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return b=b.get(p)||null,d(c,b,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case dt:return b=b.get(x.key===null?p:x.key)||null,s(c,b,x,N);case Mo:return b=b.get(x.key===null?p:x.key)||null,g(c,b,x,N);case ro:var S=x._init;return y(b,c,p,S(x._payload),N)}if(Ne(x)||fe(x))return b=b.get(p)||null,u(c,b,x,N,null);ht(c,x)}return null}function v(b,c,p,x){for(var N=null,S=null,C=c,A=c=0,Y=null;C!==null&&A<p.length;A++){C.index>A?(Y=C,C=null):Y=C.sibling;var P=m(b,C,p[A],x);if(P===null){C===null&&(C=Y);break}r&&C&&P.alternate===null&&o(b,C),c=a(P,c,A),S===null?N=P:S.sibling=P,S=P,C=Y}if(A===p.length)return e(b,C),I&&jo(b,A),N;if(C===null){for(;A<p.length;A++)C=w(b,p[A],x),C!==null&&(c=a(C,c,A),S===null?N=C:S.sibling=C,S=C);return I&&jo(b,A),N}for(C=t(b,C);A<p.length;A++)Y=y(C,b,A,p[A],x),Y!==null&&(r&&Y.alternate!==null&&C.delete(Y.key===null?A:Y.key),c=a(Y,c,A),S===null?N=Y:S.sibling=Y,S=Y);return r&&C.forEach(function(Tr){return o(b,Tr)}),I&&jo(b,A),N}function k(b,c,p,x){var N=fe(p);if(typeof N!="function")throw Error(h(150));if(p=N.call(p),p==null)throw Error(h(151));for(var S=N=null,C=c,A=c=0,Y=null,P=p.next();C!==null&&!P.done;A++,P=p.next()){C.index>A?(Y=C,C=null):Y=C.sibling;var Tr=m(b,C,P.value,x);if(Tr===null){C===null&&(C=Y);break}r&&C&&Tr.alternate===null&&o(b,C),c=a(Tr,c,A),S===null?N=Tr:S.sibling=Tr,S=Tr,C=Y}if(P.done)return e(b,C),I&&jo(b,A),N;if(C===null){for(;!P.done;A++,P=p.next())P=w(b,P.value,x),P!==null&&(c=a(P,c,A),S===null?N=P:S.sibling=P,S=P);return I&&jo(b,A),N}for(C=t(b,C);!P.done;A++,P=p.next())P=y(C,b,A,P.value,x),P!==null&&(r&&P.alternate!==null&&C.delete(P.key===null?A:P.key),c=a(P,c,A),S===null?N=P:S.sibling=P,S=P);return r&&C.forEach(function(pe){return o(b,pe)}),I&&jo(b,A),N}function B(b,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Oo&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case dt:r:{for(var N=p.key,S=c;S!==null;){if(S.key===N){if(N=p.type,N===Oo){if(S.tag===7){e(b,S.sibling),c=i(S,p.props.children),c.return=b,b=c;break r}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ro&&Al(N)===S.type){e(b,S.sibling),c=i(S,p.props),c.ref=ve(b,S,p),c.return=b,b=c;break r}e(b,S);break}else o(b,S);S=S.sibling}p.type===Oo?(c=Eo(p.props.children,b.mode,x,p.key),c.return=b,b=c):(x=Ft(p.type,p.key,p.props,null,b.mode,x),x.ref=ve(b,c,p),x.return=b,b=x)}return l(b);case Mo:r:{for(S=p.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){e(b,c.sibling),c=i(c,p.children||[]),c.return=b,b=c;break r}else{e(b,c);break}else o(b,c);c=c.sibling}c=qn(p,b.mode,x),c.return=b,b=c}return l(b);case ro:return S=p._init,B(b,c,S(p._payload),x)}if(Ne(p))return v(b,c,p,x);if(fe(p))return k(b,c,p,x);ht(b,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(e(b,c.sibling),c=i(c,p),c.return=b,b=c):(e(b,c),c=Zn(p,b.mode,x),c.return=b,b=c),l(b)):e(b,c)}return B}var ae=w0(!0),u0=w0(!1),Kt=ho(null),Jt=null,Xo=null,xa=null;function ha(){xa=Xo=Jt=null}function va(r){var o=Kt.current;D(Kt),r._currentValue=o}function Ti(r,o,e){for(;r!==null;){var t=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,t!==null&&(t.childLanes|=o)):t!==null&&(t.childLanes&o)!==o&&(t.childLanes|=o),r===e)break;r=r.return}}function oe(r,o){Jt=r,xa=Xo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&o&&(mr=!0),r.firstContext=null)}function Ar(r){var o=r._currentValue;if(xa!==r)if(r={context:r,memoizedValue:o,next:null},Xo===null){if(Jt===null)throw Error(h(308));Xo=r,Jt.dependencies={lanes:0,firstContext:r}}else Xo=Xo.next=r;return o}var So=null;function ya(r){So===null?So=[r]:So.push(r)}function x0(r,o,e,t){var i=o.interleaved;return i===null?(e.next=e,ya(o)):(e.next=i.next,i.next=e),o.interleaved=e,Kr(r,t)}function Kr(r,o){r.lanes|=o;var e=r.alternate;for(e!==null&&(e.lanes|=o),e=r,r=r.return;r!==null;)r.childLanes|=o,e=r.alternate,e!==null&&(e.childLanes|=o),e=r,r=r.return;return e.tag===3?e.stateNode:null}var oo=!1;function ka(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Xr(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function bo(r,o,e){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,L&2){var i=t.pending;return i===null?o.next=o:(o.next=i.next,i.next=o),t.pending=o,Kr(r,e)}return i=t.interleaved,i===null?(o.next=o,ya(t)):(o.next=i.next,i.next=o),t.interleaved=o,Kr(r,e)}function Tt(r,o,e){if(o=o.updateQueue,o!==null&&(o=o.shared,(e&4194240)!==0)){var t=o.lanes;t&=r.pendingLanes,e|=t,o.lanes=e,la(r,e)}}function El(r,o){var e=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var i=null,a=null;if(e=e.firstBaseUpdate,e!==null){do{var l={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};a===null?i=a=l:a=a.next=l,e=e.next}while(e!==null);a===null?i=a=o:a=a.next=o}else i=a=o;e={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:t.shared,effects:t.effects},r.updateQueue=e;return}r=e.lastBaseUpdate,r===null?e.firstBaseUpdate=o:r.next=o,e.lastBaseUpdate=o}function Zt(r,o,e,t){var i=r.updateQueue;oo=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var s=d,g=s.next;s.next=null,l===null?a=g:l.next=g,l=s;var u=r.alternate;u!==null&&(u=u.updateQueue,d=u.lastBaseUpdate,d!==l&&(d===null?u.firstBaseUpdate=g:d.next=g,u.lastBaseUpdate=s))}if(a!==null){var w=i.baseState;l=0,u=g=s=null,d=a;do{var m=d.lane,y=d.eventTime;if((t&m)===m){u!==null&&(u=u.next={eventTime:y,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});r:{var v=r,k=d;switch(m=o,y=e,k.tag){case 1:if(v=k.payload,typeof v=="function"){w=v.call(y,w,m);break r}w=v;break r;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(y,w,m):v,m==null)break r;w=H({},w,m);break r;case 2:oo=!0}}d.callback!==null&&d.lane!==0&&(r.flags|=64,m=i.effects,m===null?i.effects=[d]:m.push(d))}else y={eventTime:y,lane:m,tag:d.tag,payload:d.payload,callback:d.callback,next:null},u===null?(g=u=y,s=w):u=u.next=y,l|=m;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;m=d,d=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(u===null&&(s=w),i.baseState=s,i.firstBaseUpdate=g,i.lastBaseUpdate=u,o=i.shared.interleaved,o!==null){i=o;do l|=i.lane,i=i.next;while(i!==o)}else a===null&&(i.shared.lanes=0);Po|=l,r.lanes=l,r.memoizedState=w}}function Tl(r,o,e){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var t=r[o],i=t.callback;if(i!==null){if(t.callback=null,t=e,typeof i!="function")throw Error(h(191,i));i.call(t)}}}var nt={},$r=ho(nt),Qe=ho(nt),Ge=ho(nt);function Co(r){if(r===nt)throw Error(h(174));return r}function ja(r,o){switch(M(Ge,o),M(Qe,r),M($r,nt),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ci(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=ci(o,r)}D($r),M($r,o)}function le(){D($r),D(Qe),D(Ge)}function v0(r){Co(Ge.current);var o=Co($r.current),e=ci(o,r.type);o!==e&&(M(Qe,r),M($r,e))}function Na(r){Qe.current===r&&(D($r),D(Qe))}var $=ho(0);function qt(r){for(var o=r;o!==null;){if(o.tag===13){var e=o.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Yn=[];function za(){for(var r=0;r<Yn.length;r++)Yn[r]._workInProgressVersionPrimary=null;Yn.length=0}var _t=Zr.ReactCurrentDispatcher,Xn=Zr.ReactCurrentBatchConfig,Uo=0,W=null,K=null,q=null,rn=!1,Ue=!1,Ke=0,Ag=0;function nr(){throw Error(h(321))}function Sa(r,o){if(o===null)return!1;for(var e=0;e<o.length&&e<r.length;e++)if(!Br(r[e],o[e]))return!1;return!0}function Ca(r,o,e,t,i,a){if(Uo=a,W=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,_t.current=r===null||r.memoizedState===null?Ug:Pg,r=e(t,i),Ue){a=0;do{if(Ue=!1,Ke=0,25<=a)throw Error(h(301));a+=1,q=K=null,o.updateQueue=null,_t.current=Lg,r=e(t,i)}while(Ue)}if(_t.current=on,o=K!==null&&K.next!==null,Uo=0,q=K=W=null,rn=!1,o)throw Error(h(300));return r}function Aa(){var r=Ke!==0;return Ke=0,r}function Or(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=r:q=q.next=r,q}function Er(){if(K===null){var r=W.alternate;r=r!==null?r.memoizedState:null}else r=K.next;var o=q===null?W.memoizedState:q.next;if(o!==null)q=o,K=r;else{if(r===null)throw Error(h(310));K=r,r={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},q===null?W.memoizedState=q=r:q=q.next=r}return q}function Je(r,o){return typeof o=="function"?o(r):o}function Qn(r){var o=Er(),e=o.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=r;var t=K,i=t.baseQueue,a=e.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}t.baseQueue=i=a,e.pending=null}if(i!==null){a=i.next,t=t.baseState;var d=l=null,s=null,g=a;do{var u=g.lane;if((Uo&u)===u)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),t=g.hasEagerState?g.eagerState:r(t,g.action);else{var w={lane:u,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(d=s=w,l=t):s=s.next=w,W.lanes|=u,Po|=u}g=g.next}while(g!==null&&g!==a);s===null?l=t:s.next=d,Br(t,o.memoizedState)||(mr=!0),o.memoizedState=t,o.baseState=l,o.baseQueue=s,e.lastRenderedState=t}if(r=e.interleaved,r!==null){i=r;do a=i.lane,W.lanes|=a,Po|=a,i=i.next;while(i!==r)}else i===null&&(e.lanes=0);return[o.memoizedState,e.dispatch]}function Gn(r){var o=Er(),e=o.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=r;var t=e.dispatch,i=e.pending,a=o.memoizedState;if(i!==null){e.pending=null;var l=i=i.next;do a=r(a,l.action),l=l.next;while(l!==i);Br(a,o.memoizedState)||(mr=!0),o.memoizedState=a,o.baseQueue===null&&(o.baseState=a),e.lastRenderedState=a}return[a,t]}function y0(){}function k0(r,o){var e=W,t=Er(),i=o(),a=!Br(t.memoizedState,i);if(a&&(t.memoizedState=i,mr=!0),t=t.queue,Ea(z0.bind(null,e,t,r),[r]),t.getSnapshot!==o||a||q!==null&&q.memoizedState.tag&1){if(e.flags|=2048,Ze(9,N0.bind(null,e,t,i,o),void 0,null),rr===null)throw Error(h(349));Uo&30||j0(e,o,i)}return i}function j0(r,o,e){r.flags|=16384,r={getSnapshot:o,value:e},o=W.updateQueue,o===null?(o={lastEffect:null,stores:null},W.updateQueue=o,o.stores=[r]):(e=o.stores,e===null?o.stores=[r]:e.push(r))}function N0(r,o,e,t){o.value=e,o.getSnapshot=t,S0(o)&&C0(r)}function z0(r,o,e){return e(function(){S0(o)&&C0(r)})}function S0(r){var o=r.getSnapshot;r=r.value;try{var e=o();return!Br(r,e)}catch{return!0}}function C0(r){var o=Kr(r,1);o!==null&&Fr(o,r,1,-1)}function _l(r){var o=Or();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:r},o.queue=r,r=r.dispatch=_g.bind(null,W,r),[o.memoizedState,r]}function Ze(r,o,e,t){return r={tag:r,create:o,destroy:e,deps:t,next:null},o=W.updateQueue,o===null?(o={lastEffect:null,stores:null},W.updateQueue=o,o.lastEffect=r.next=r):(e=o.lastEffect,e===null?o.lastEffect=r.next=r:(t=e.next,e.next=r,r.next=t,o.lastEffect=r)),r}function A0(){return Er().memoizedState}function Ut(r,o,e,t){var i=Or();W.flags|=r,i.memoizedState=Ze(1|o,e,void 0,t===void 0?null:t)}function wn(r,o,e,t){var i=Er();t=t===void 0?null:t;var a=void 0;if(K!==null){var l=K.memoizedState;if(a=l.destroy,t!==null&&Sa(t,l.deps)){i.memoizedState=Ze(o,e,a,t);return}}W.flags|=r,i.memoizedState=Ze(1|o,e,a,t)}function Ul(r,o){return Ut(8390656,8,r,o)}function Ea(r,o){return wn(2048,8,r,o)}function E0(r,o){return wn(4,2,r,o)}function T0(r,o){return wn(4,4,r,o)}function _0(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function U0(r,o,e){return e=e!=null?e.concat([r]):null,wn(4,4,_0.bind(null,o,r),e)}function Ta(){}function P0(r,o){var e=Er();o=o===void 0?null:o;var t=e.memoizedState;return t!==null&&o!==null&&Sa(o,t[1])?t[0]:(e.memoizedState=[r,o],r)}function L0(r,o){var e=Er();o=o===void 0?null:o;var t=e.memoizedState;return t!==null&&o!==null&&Sa(o,t[1])?t[0]:(r=r(),e.memoizedState=[r,o],r)}function R0(r,o,e){return Uo&21?(Br(e,o)||(e=Dd(),W.lanes|=e,Po|=e,r.baseState=!0),o):(r.baseState&&(r.baseState=!1,mr=!0),r.memoizedState=e)}function Eg(r,o){var e=F;F=e!==0&&4>e?e:4,r(!0);var t=Xn.transition;Xn.transition={};try{r(!1),o()}finally{F=e,Xn.transition=t}}function F0(){return Er().memoizedState}function Tg(r,o,e){var t=mo(r);if(e={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null},B0(r))M0(o,e);else if(e=x0(r,o,e,t),e!==null){var i=sr();Fr(e,r,t,i),O0(e,o,t)}}function _g(r,o,e){var t=mo(r),i={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null};if(B0(r))M0(o,i);else{var a=r.alternate;if(r.lanes===0&&(a===null||a.lanes===0)&&(a=o.lastRenderedReducer,a!==null))try{var l=o.lastRenderedState,d=a(l,e);if(i.hasEagerState=!0,i.eagerState=d,Br(d,l)){var s=o.interleaved;s===null?(i.next=i,ya(o)):(i.next=s.next,s.next=i),o.interleaved=i;return}}catch{}finally{}e=x0(r,o,i,t),e!==null&&(i=sr(),Fr(e,r,t,i),O0(e,o,t))}}function B0(r){var o=r.alternate;return r===W||o!==null&&o===W}function M0(r,o){Ue=rn=!0;var e=r.pending;e===null?o.next=o:(o.next=e.next,e.next=o),r.pending=o}function O0(r,o,e){if(e&4194240){var t=o.lanes;t&=r.pendingLanes,e|=t,o.lanes=e,la(r,e)}}var on={readContext:Ar,useCallback:nr,useContext:nr,useEffect:nr,useImperativeHandle:nr,useInsertionEffect:nr,useLayoutEffect:nr,useMemo:nr,useReducer:nr,useRef:nr,useState:nr,useDebugValue:nr,useDeferredValue:nr,useTransition:nr,useMutableSource:nr,useSyncExternalStore:nr,useId:nr,unstable_isNewReconciler:!1},Ug={readContext:Ar,useCallback:function(r,o){return Or().memoizedState=[r,o===void 0?null:o],r},useContext:Ar,useEffect:Ul,useImperativeHandle:function(r,o,e){return e=e!=null?e.concat([r]):null,Ut(4194308,4,_0.bind(null,o,r),e)},useLayoutEffect:function(r,o){return Ut(4194308,4,r,o)},useInsertionEffect:function(r,o){return Ut(4,2,r,o)},useMemo:function(r,o){var e=Or();return o=o===void 0?null:o,r=r(),e.memoizedState=[r,o],r},useReducer:function(r,o,e){var t=Or();return o=e!==void 0?e(o):o,t.memoizedState=t.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},t.queue=r,r=r.dispatch=Tg.bind(null,W,r),[t.memoizedState,r]},useRef:function(r){var o=Or();return r={current:r},o.memoizedState=r},useState:_l,useDebugValue:Ta,useDeferredValue:function(r){return Or().memoizedState=r},useTransition:function(){var r=_l(!1),o=r[0];return r=Eg.bind(null,r[1]),Or().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,e){var t=W,i=Or();if(I){if(e===void 0)throw Error(h(407));e=e()}else{if(e=o(),rr===null)throw Error(h(349));Uo&30||j0(t,o,e)}i.memoizedState=e;var a={value:e,getSnapshot:o};return i.queue=a,Ul(z0.bind(null,t,a,r),[r]),t.flags|=2048,Ze(9,N0.bind(null,t,a,e,o),void 0,null),e},useId:function(){var r=Or(),o=rr.identifierPrefix;if(I){var e=Yr,t=Vr;e=(t&~(1<<32-Rr(t)-1)).toString(32)+e,o=":"+o+"R"+e,e=Ke++,0<e&&(o+="H"+e.toString(32)),o+=":"}else e=Ag++,o=":"+o+"r"+e.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},Pg={readContext:Ar,useCallback:P0,useContext:Ar,useEffect:Ea,useImperativeHandle:U0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:L0,useReducer:Qn,useRef:A0,useState:function(){return Qn(Je)},useDebugValue:Ta,useDeferredValue:function(r){var o=Er();return R0(o,K.memoizedState,r)},useTransition:function(){var r=Qn(Je)[0],o=Er().memoizedState;return[r,o]},useMutableSource:y0,useSyncExternalStore:k0,useId:F0,unstable_isNewReconciler:!1},Lg={readContext:Ar,useCallback:P0,useContext:Ar,useEffect:Ea,useImperativeHandle:U0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:L0,useReducer:Gn,useRef:A0,useState:function(){return Gn(Je)},useDebugValue:Ta,useDeferredValue:function(r){var o=Er();return K===null?o.memoizedState=r:R0(o,K.memoizedState,r)},useTransition:function(){var r=Gn(Je)[0],o=Er().memoizedState;return[r,o]},useMutableSource:y0,useSyncExternalStore:k0,useId:F0,unstable_isNewReconciler:!1};function Ur(r,o){if(r&&r.defaultProps){o=H({},o),r=r.defaultProps;for(var e in r)o[e]===void 0&&(o[e]=r[e]);return o}return o}function _i(r,o,e,t){o=r.memoizedState,e=e(t,o),e=e==null?o:H({},o,e),r.memoizedState=e,r.lanes===0&&(r.updateQueue.baseState=e)}var un={isMounted:function(r){return(r=r._reactInternals)?Fo(r)===r:!1},enqueueSetState:function(r,o,e){r=r._reactInternals;var t=sr(),i=mo(r),a=Xr(t,i);a.payload=o,e!=null&&(a.callback=e),o=bo(r,a,i),o!==null&&(Fr(o,r,i,t),Tt(o,r,i))},enqueueReplaceState:function(r,o,e){r=r._reactInternals;var t=sr(),i=mo(r),a=Xr(t,i);a.tag=1,a.payload=o,e!=null&&(a.callback=e),o=bo(r,a,i),o!==null&&(Fr(o,r,i,t),Tt(o,r,i))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var e=sr(),t=mo(r),i=Xr(e,t);i.tag=2,o!=null&&(i.callback=o),o=bo(r,i,t),o!==null&&(Fr(o,r,t,e),Tt(o,r,t))}};function Pl(r,o,e,t,i,a,l){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,a,l):o.prototype&&o.prototype.isPureReactComponent?!He(e,t)||!He(i,a):!0}function D0(r,o,e){var t=!1,i=uo,a=o.contextType;return typeof a=="object"&&a!==null?a=Ar(a):(i=wr(o)?To:lr.current,t=o.contextTypes,a=(t=t!=null)?ne(r,i):uo),o=new o(e,a),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=un,r.stateNode=o,o._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=a),o}function Ll(r,o,e,t){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(e,t),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(e,t),o.state!==r&&un.enqueueReplaceState(o,o.state,null)}function Ui(r,o,e,t){var i=r.stateNode;i.props=e,i.state=r.memoizedState,i.refs={},ka(r);var a=o.contextType;typeof a=="object"&&a!==null?i.context=Ar(a):(a=wr(o)?To:lr.current,i.context=ne(r,a)),i.state=r.memoizedState,a=o.getDerivedStateFromProps,typeof a=="function"&&(_i(r,o,a,e),i.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&un.enqueueReplaceState(i,i.state,null),Zt(r,e,i,t),i.state=r.memoizedState),typeof i.componentDidMount=="function"&&(r.flags|=4194308)}function de(r,o){try{var e="",t=o;do e+=dc(t),t=t.return;while(t);var i=e}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:r,source:o,stack:i,digest:null}}function Kn(r,o,e){return{value:r,source:null,stack:e??null,digest:o??null}}function Pi(r,o){try{console.error(o.value)}catch(e){setTimeout(function(){throw e})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function I0(r,o,e){e=Xr(-1,e),e.tag=3,e.payload={element:null};var t=o.value;return e.callback=function(){tn||(tn=!0,Wi=t),Pi(r,o)},e}function $0(r,o,e){e=Xr(-1,e),e.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var i=o.value;e.payload=function(){return t(i)},e.callback=function(){Pi(r,o)}}var a=r.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Pi(r,o),typeof t!="function"&&(po===null?po=new Set([this]):po.add(this));var l=o.stack;this.componentDidCatch(o.value,{componentStack:l!==null?l:""})}),e}function Rl(r,o,e){var t=r.pingCache;if(t===null){t=r.pingCache=new Rg;var i=new Set;t.set(o,i)}else i=t.get(o),i===void 0&&(i=new Set,t.set(o,i));i.has(e)||(i.add(e),r=Gg.bind(null,r,o,e),o.then(r,r))}function Fl(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function Bl(r,o,e,t,i){return r.mode&1?(r.flags|=65536,r.lanes=i,r):(r===o?r.flags|=65536:(r.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(o=Xr(-1,1),o.tag=2,bo(e,o,1))),e.lanes|=1),r)}var Fg=Zr.ReactCurrentOwner,mr=!1;function dr(r,o,e,t){o.child=r===null?u0(o,null,e,t):ae(o,r.child,e,t)}function Ml(r,o,e,t,i){e=e.render;var a=o.ref;return oe(o,i),t=Ca(r,o,e,t,a,i),e=Aa(),r!==null&&!mr?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~i,Jr(r,o,i)):(I&&e&&fa(o),o.flags|=1,dr(r,o,t,i),o.child)}function Ol(r,o,e,t,i){if(r===null){var a=e.type;return typeof a=="function"&&!Ma(a)&&a.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(o.tag=15,o.type=a,W0(r,o,a,t,i)):(r=Ft(e.type,null,t,o,o.mode,i),r.ref=o.ref,r.return=o,o.child=r)}if(a=r.child,!(r.lanes&i)){var l=a.memoizedProps;if(e=e.compare,e=e!==null?e:He,e(l,t)&&r.ref===o.ref)return Jr(r,o,i)}return o.flags|=1,r=fo(a,t),r.ref=o.ref,r.return=o,o.child=r}function W0(r,o,e,t,i){if(r!==null){var a=r.memoizedProps;if(He(a,t)&&r.ref===o.ref)if(mr=!1,o.pendingProps=t=a,(r.lanes&i)!==0)r.flags&131072&&(mr=!0);else return o.lanes=r.lanes,Jr(r,o,i)}return Li(r,o,e,t,i)}function H0(r,o,e){var t=o.pendingProps,i=t.children,a=r!==null?r.memoizedState:null;if(t.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Go,xr),xr|=e;else{if(!(e&1073741824))return r=a!==null?a.baseLanes|e:e,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,M(Go,xr),xr|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=a!==null?a.baseLanes:e,M(Go,xr),xr|=t}else a!==null?(t=a.baseLanes|e,o.memoizedState=null):t=e,M(Go,xr),xr|=t;return dr(r,o,i,e),o.child}function V0(r,o){var e=o.ref;(r===null&&e!==null||r!==null&&r.ref!==e)&&(o.flags|=512,o.flags|=2097152)}function Li(r,o,e,t,i){var a=wr(e)?To:lr.current;return a=ne(o,a),oe(o,i),e=Ca(r,o,e,t,a,i),t=Aa(),r!==null&&!mr?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~i,Jr(r,o,i)):(I&&t&&fa(o),o.flags|=1,dr(r,o,e,i),o.child)}function Dl(r,o,e,t,i){if(wr(e)){var a=!0;Xt(o)}else a=!1;if(oe(o,i),o.stateNode===null)Pt(r,o),D0(o,e,t),Ui(o,e,t,i),t=!0;else if(r===null){var l=o.stateNode,d=o.memoizedProps;l.props=d;var s=l.context,g=e.contextType;typeof g=="object"&&g!==null?g=Ar(g):(g=wr(e)?To:lr.current,g=ne(o,g));var u=e.getDerivedStateFromProps,w=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==t||s!==g)&&Ll(o,l,t,g),oo=!1;var m=o.memoizedState;l.state=m,Zt(o,t,l,i),s=o.memoizedState,d!==t||m!==s||fr.current||oo?(typeof u=="function"&&(_i(o,e,u,t),s=o.memoizedState),(d=oo||Pl(o,e,d,t,m,s,g))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(o.flags|=4194308)):(typeof l.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=t,o.memoizedState=s),l.props=t,l.state=s,l.context=g,t=d):(typeof l.componentDidMount=="function"&&(o.flags|=4194308),t=!1)}else{l=o.stateNode,h0(r,o),d=o.memoizedProps,g=o.type===o.elementType?d:Ur(o.type,d),l.props=g,w=o.pendingProps,m=l.context,s=e.contextType,typeof s=="object"&&s!==null?s=Ar(s):(s=wr(e)?To:lr.current,s=ne(o,s));var y=e.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==w||m!==s)&&Ll(o,l,t,s),oo=!1,m=o.memoizedState,l.state=m,Zt(o,t,l,i);var v=o.memoizedState;d!==w||m!==v||fr.current||oo?(typeof y=="function"&&(_i(o,e,y,t),v=o.memoizedState),(g=oo||Pl(o,e,g,t,m,v,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,v,s)),typeof l.componentDidUpdate=="function"&&(o.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof l.componentDidUpdate!="function"||d===r.memoizedProps&&m===r.memoizedState||(o.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===r.memoizedProps&&m===r.memoizedState||(o.flags|=1024),o.memoizedProps=t,o.memoizedState=v),l.props=t,l.state=v,l.context=s,t=g):(typeof l.componentDidUpdate!="function"||d===r.memoizedProps&&m===r.memoizedState||(o.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===r.memoizedProps&&m===r.memoizedState||(o.flags|=1024),t=!1)}return Ri(r,o,e,t,a,i)}function Ri(r,o,e,t,i,a){V0(r,o);var l=(o.flags&128)!==0;if(!t&&!l)return i&&zl(o,e,!1),Jr(r,o,a);t=o.stateNode,Fg.current=o;var d=l&&typeof e.getDerivedStateFromError!="function"?null:t.render();return o.flags|=1,r!==null&&l?(o.child=ae(o,r.child,null,a),o.child=ae(o,null,d,a)):dr(r,o,d,a),o.memoizedState=t.state,i&&zl(o,e,!0),o.child}function Y0(r){var o=r.stateNode;o.pendingContext?Nl(r,o.pendingContext,o.pendingContext!==o.context):o.context&&Nl(r,o.context,!1),ja(r,o.containerInfo)}function Il(r,o,e,t,i){return ie(),ua(i),o.flags|=256,dr(r,o,e,t),o.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Bi(r){return{baseLanes:r,cachePool:null,transitions:null}}function X0(r,o,e){var t=o.pendingProps,i=$.current,a=!1,l=(o.flags&128)!==0,d;if((d=l)||(d=r!==null&&r.memoizedState===null?!1:(i&2)!==0),d?(a=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(i|=1),M($,i&1),r===null)return Ei(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(o.mode&1?r.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(l=t.children,r=t.fallback,a?(t=o.mode,a=o.child,l={mode:"hidden",children:l},!(t&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=vn(l,t,0,null),r=Eo(r,t,e,null),a.return=o,r.return=o,a.sibling=r,o.child=a,o.child.memoizedState=Bi(e),o.memoizedState=Fi,r):_a(o,l));if(i=r.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Bg(r,o,l,t,d,i,e);if(a){a=t.fallback,l=o.mode,i=r.child,d=i.sibling;var s={mode:"hidden",children:t.children};return!(l&1)&&o.child!==i?(t=o.child,t.childLanes=0,t.pendingProps=s,o.deletions=null):(t=fo(i,s),t.subtreeFlags=i.subtreeFlags&14680064),d!==null?a=fo(d,a):(a=Eo(a,l,e,null),a.flags|=2),a.return=o,t.return=o,t.sibling=a,o.child=t,t=a,a=o.child,l=r.child.memoizedState,l=l===null?Bi(e):{baseLanes:l.baseLanes|e,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=r.childLanes&~e,o.memoizedState=Fi,t}return a=r.child,r=a.sibling,t=fo(a,{mode:"visible",children:t.children}),!(o.mode&1)&&(t.lanes=e),t.return=o,t.sibling=null,r!==null&&(e=o.deletions,e===null?(o.deletions=[r],o.flags|=16):e.push(r)),o.child=t,o.memoizedState=null,t}function _a(r,o){return o=vn({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function vt(r,o,e,t){return t!==null&&ua(t),ae(o,r.child,null,e),r=_a(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function Bg(r,o,e,t,i,a,l){if(e)return o.flags&256?(o.flags&=-257,t=Kn(Error(h(422))),vt(r,o,l,t)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(a=t.fallback,i=o.mode,t=vn({mode:"visible",children:t.children},i,0,null),a=Eo(a,i,l,null),a.flags|=2,t.return=o,a.return=o,t.sibling=a,o.child=t,o.mode&1&&ae(o,r.child,null,l),o.child.memoizedState=Bi(l),o.memoizedState=Fi,a);if(!(o.mode&1))return vt(r,o,l,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var d=t.dgst;return t=d,a=Error(h(419)),t=Kn(a,t,void 0),vt(r,o,l,t)}if(d=(l&r.childLanes)!==0,mr||d){if(t=rr,t!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(t.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Kr(r,i),Fr(t,r,i,-1))}return Ba(),t=Kn(Error(h(421))),vt(r,o,l,t)}return i.data==="$?"?(o.flags|=128,o.child=r.child,o=Kg.bind(null,r),i._reactRetry=o,null):(r=a.treeContext,hr=go(i.nextSibling),vr=o,I=!0,Lr=null,r!==null&&(Nr[zr++]=Vr,Nr[zr++]=Yr,Nr[zr++]=_o,Vr=r.id,Yr=r.overflow,_o=o),o=_a(o,t.children),o.flags|=4096,o)}function $l(r,o,e){r.lanes|=o;var t=r.alternate;t!==null&&(t.lanes|=o),Ti(r.return,o,e)}function Jn(r,o,e,t,i){var a=r.memoizedState;a===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:i}:(a.isBackwards=o,a.rendering=null,a.renderingStartTime=0,a.last=t,a.tail=e,a.tailMode=i)}function Q0(r,o,e){var t=o.pendingProps,i=t.revealOrder,a=t.tail;if(dr(r,o,t.children,e),t=$.current,t&2)t=t&1|2,o.flags|=128;else{if(r!==null&&r.flags&128)r:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&$l(r,e,o);else if(r.tag===19)$l(r,e,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break r;for(;r.sibling===null;){if(r.return===null||r.return===o)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(M($,t),!(o.mode&1))o.memoizedState=null;else switch(i){case"forwards":for(e=o.child,i=null;e!==null;)r=e.alternate,r!==null&&qt(r)===null&&(i=e),e=e.sibling;e=i,e===null?(i=o.child,o.child=null):(i=e.sibling,e.sibling=null),Jn(o,!1,i,e,a);break;case"backwards":for(e=null,i=o.child,o.child=null;i!==null;){if(r=i.alternate,r!==null&&qt(r)===null){o.child=i;break}r=i.sibling,i.sibling=e,e=i,i=r}Jn(o,!0,e,null,a);break;case"together":Jn(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Pt(r,o){!(o.mode&1)&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Jr(r,o,e){if(r!==null&&(o.dependencies=r.dependencies),Po|=o.lanes,!(e&o.childLanes))return null;if(r!==null&&o.child!==r.child)throw Error(h(153));if(o.child!==null){for(r=o.child,e=fo(r,r.pendingProps),o.child=e,e.return=o;r.sibling!==null;)r=r.sibling,e=e.sibling=fo(r,r.pendingProps),e.return=o;e.sibling=null}return o.child}function Mg(r,o,e){switch(o.tag){case 3:Y0(o),ie();break;case 5:v0(o);break;case 1:wr(o.type)&&Xt(o);break;case 4:ja(o,o.stateNode.containerInfo);break;case 10:var t=o.type._context,i=o.memoizedProps.value;M(Kt,t._currentValue),t._currentValue=i;break;case 13:if(t=o.memoizedState,t!==null)return t.dehydrated!==null?(M($,$.current&1),o.flags|=128,null):e&o.child.childLanes?X0(r,o,e):(M($,$.current&1),r=Jr(r,o,e),r!==null?r.sibling:null);M($,$.current&1);break;case 19:if(t=(e&o.childLanes)!==0,r.flags&128){if(t)return Q0(r,o,e);o.flags|=128}if(i=o.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M($,$.current),t)break;return null;case 22:case 23:return o.lanes=0,H0(r,o,e)}return Jr(r,o,e)}var G0,Mi,K0,J0;G0=function(r,o){for(var e=o.child;e!==null;){if(e.tag===5||e.tag===6)r.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break;for(;e.sibling===null;){if(e.return===null||e.return===o)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Mi=function(){};K0=function(r,o,e,t){var i=r.memoizedProps;if(i!==t){r=o.stateNode,Co($r.current);var a=null;switch(e){case"input":i=ai(r,i),t=ai(r,t),a=[];break;case"select":i=H({},i,{value:void 0}),t=H({},t,{value:void 0}),a=[];break;case"textarea":i=si(r,i),t=si(r,t),a=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=Vt)}gi(e,t);var l;e=null;for(g in i)if(!t.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var d=i[g];for(l in d)d.hasOwnProperty(l)&&(e||(e={}),e[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Be.hasOwnProperty(g)?a||(a=[]):(a=a||[]).push(g,null));for(g in t){var s=t[g];if(d=i!=null?i[g]:void 0,t.hasOwnProperty(g)&&s!==d&&(s!=null||d!=null))if(g==="style")if(d){for(l in d)!d.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(e||(e={}),e[l]="");for(l in s)s.hasOwnProperty(l)&&d[l]!==s[l]&&(e||(e={}),e[l]=s[l])}else e||(a||(a=[]),a.push(g,e)),e=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,d=d?d.__html:void 0,s!=null&&d!==s&&(a=a||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Be.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&O("scroll",r),a||d===s||(a=[])):(a=a||[]).push(g,s))}e&&(a=a||[]).push("style",e);var g=a;(o.updateQueue=g)&&(o.flags|=4)}};J0=function(r,o,e,t){e!==t&&(o.flags|=4)};function ye(r,o){if(!I)switch(r.tailMode){case"hidden":o=r.tail;for(var e=null;o!==null;)o.alternate!==null&&(e=o),o=o.sibling;e===null?r.tail=null:e.sibling=null;break;case"collapsed":e=r.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function ir(r){var o=r.alternate!==null&&r.alternate.child===r.child,e=0,t=0;if(o)for(var i=r.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=r,i=i.sibling;else for(i=r.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=r,i=i.sibling;return r.subtreeFlags|=t,r.childLanes=e,o}function Og(r,o,e){var t=o.pendingProps;switch(wa(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ir(o),null;case 1:return wr(o.type)&&Yt(),ir(o),null;case 3:return t=o.stateNode,le(),D(fr),D(lr),za(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(xt(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,Lr!==null&&(Yi(Lr),Lr=null))),Mi(r,o),ir(o),null;case 5:Na(o);var i=Co(Ge.current);if(e=o.type,r!==null&&o.stateNode!=null)K0(r,o,e,t,i),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!t){if(o.stateNode===null)throw Error(h(166));return ir(o),null}if(r=Co($r.current),xt(o)){t=o.stateNode,e=o.type;var a=o.memoizedProps;switch(t[Dr]=o,t[Xe]=a,r=(o.mode&1)!==0,e){case"dialog":O("cancel",t),O("close",t);break;case"iframe":case"object":case"embed":O("load",t);break;case"video":case"audio":for(i=0;i<Se.length;i++)O(Se[i],t);break;case"source":O("error",t);break;case"img":case"image":case"link":O("error",t),O("load",t);break;case"details":O("toggle",t);break;case"input":Ja(t,a),O("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!a.multiple},O("invalid",t);break;case"textarea":qa(t,a),O("invalid",t)}gi(e,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var d=a[l];l==="children"?typeof d=="string"?t.textContent!==d&&(a.suppressHydrationWarning!==!0&&ut(t.textContent,d,r),i=["children",d]):typeof d=="number"&&t.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&ut(t.textContent,d,r),i=["children",""+d]):Be.hasOwnProperty(l)&&d!=null&&l==="onScroll"&&O("scroll",t)}switch(e){case"input":st(t),Za(t,a,!0);break;case"textarea":st(t),rl(t);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(t.onclick=Vt)}t=i,o.updateQueue=t,t!==null&&(o.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=zd(e)),r==="http://www.w3.org/1999/xhtml"?e==="script"?(r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=l.createElement(e,{is:t.is}):(r=l.createElement(e),e==="select"&&(l=r,t.multiple?l.multiple=!0:t.size&&(l.size=t.size))):r=l.createElementNS(r,e),r[Dr]=o,r[Xe]=t,G0(r,o,!1,!1),o.stateNode=r;r:{switch(l=bi(e,t),e){case"dialog":O("cancel",r),O("close",r),i=t;break;case"iframe":case"object":case"embed":O("load",r),i=t;break;case"video":case"audio":for(i=0;i<Se.length;i++)O(Se[i],r);i=t;break;case"source":O("error",r),i=t;break;case"img":case"image":case"link":O("error",r),O("load",r),i=t;break;case"details":O("toggle",r),i=t;break;case"input":Ja(r,t),i=ai(r,t),O("invalid",r);break;case"option":i=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},i=H({},t,{value:void 0}),O("invalid",r);break;case"textarea":qa(r,t),i=si(r,t),O("invalid",r);break;default:i=t}gi(e,i),d=i;for(a in d)if(d.hasOwnProperty(a)){var s=d[a];a==="style"?Ad(r,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sd(r,s)):a==="children"?typeof s=="string"?(e!=="textarea"||s!=="")&&Me(r,s):typeof s=="number"&&Me(r,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Be.hasOwnProperty(a)?s!=null&&a==="onScroll"&&O("scroll",r):s!=null&&oa(r,a,s,l))}switch(e){case"input":st(r),Za(r,t,!1);break;case"textarea":st(r),rl(r);break;case"option":t.value!=null&&r.setAttribute("value",""+wo(t.value));break;case"select":r.multiple=!!t.multiple,a=t.value,a!=null?Jo(r,!!t.multiple,a,!1):t.defaultValue!=null&&Jo(r,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(r.onclick=Vt)}switch(e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break r;case"img":t=!0;break r;default:t=!1}}t&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return ir(o),null;case 6:if(r&&o.stateNode!=null)J0(r,o,r.memoizedProps,t);else{if(typeof t!="string"&&o.stateNode===null)throw Error(h(166));if(e=Co(Ge.current),Co($r.current),xt(o)){if(t=o.stateNode,e=o.memoizedProps,t[Dr]=o,(a=t.nodeValue!==e)&&(r=vr,r!==null))switch(r.tag){case 3:ut(t.nodeValue,e,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ut(t.nodeValue,e,(r.mode&1)!==0)}a&&(o.flags|=4)}else t=(e.nodeType===9?e:e.ownerDocument).createTextNode(t),t[Dr]=o,o.stateNode=t}return ir(o),null;case 13:if(D($),t=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(I&&hr!==null&&o.mode&1&&!(o.flags&128))f0(),ie(),o.flags|=98560,a=!1;else if(a=xt(o),t!==null&&t.dehydrated!==null){if(r===null){if(!a)throw Error(h(318));if(a=o.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Dr]=o}else ie(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;ir(o),a=!1}else Lr!==null&&(Yi(Lr),Lr=null),a=!0;if(!a)return o.flags&65536?o:null}return o.flags&128?(o.lanes=e,o):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(o.child.flags|=8192,o.mode&1&&(r===null||$.current&1?J===0&&(J=3):Ba())),o.updateQueue!==null&&(o.flags|=4),ir(o),null);case 4:return le(),Mi(r,o),r===null&&Ve(o.stateNode.containerInfo),ir(o),null;case 10:return va(o.type._context),ir(o),null;case 17:return wr(o.type)&&Yt(),ir(o),null;case 19:if(D($),a=o.memoizedState,a===null)return ir(o),null;if(t=(o.flags&128)!==0,l=a.rendering,l===null)if(t)ye(a,!1);else{if(J!==0||r!==null&&r.flags&128)for(r=o.child;r!==null;){if(l=qt(r),l!==null){for(o.flags|=128,ye(a,!1),t=l.updateQueue,t!==null&&(o.updateQueue=t,o.flags|=4),o.subtreeFlags=0,t=e,e=o.child;e!==null;)a=e,r=t,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=r,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,r=l.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e=e.sibling;return M($,$.current&1|2),o.child}r=r.sibling}a.tail!==null&&Q()>se&&(o.flags|=128,t=!0,ye(a,!1),o.lanes=4194304)}else{if(!t)if(r=qt(l),r!==null){if(o.flags|=128,t=!0,e=r.updateQueue,e!==null&&(o.updateQueue=e,o.flags|=4),ye(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!I)return ir(o),null}else 2*Q()-a.renderingStartTime>se&&e!==1073741824&&(o.flags|=128,t=!0,ye(a,!1),o.lanes=4194304);a.isBackwards?(l.sibling=o.child,o.child=l):(e=a.last,e!==null?e.sibling=l:o.child=l,a.last=l)}return a.tail!==null?(o=a.tail,a.rendering=o,a.tail=o.sibling,a.renderingStartTime=Q(),o.sibling=null,e=$.current,M($,t?e&1|2:e&1),o):(ir(o),null);case 22:case 23:return Fa(),t=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(o.flags|=8192),t&&o.mode&1?xr&1073741824&&(ir(o),o.subtreeFlags&6&&(o.flags|=8192)):ir(o),null;case 24:return null;case 25:return null}throw Error(h(156,o.tag))}function Dg(r,o){switch(wa(o),o.tag){case 1:return wr(o.type)&&Yt(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return le(),D(fr),D(lr),za(),r=o.flags,r&65536&&!(r&128)?(o.flags=r&-65537|128,o):null;case 5:return Na(o),null;case 13:if(D($),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(h(340));ie()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return D($),null;case 4:return le(),null;case 10:return va(o.type._context),null;case 22:case 23:return Fa(),null;case 24:return null;default:return null}}var yt=!1,ar=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,j=null;function Qo(r,o){var e=r.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){V(r,o,t)}else e.current=null}function Oi(r,o,e){try{e()}catch(t){V(r,o,t)}}var Wl=!1;function $g(r,o){if(ki=$t,r=e0(),ma(r)){if("selectionStart"in r)var e={start:r.selectionStart,end:r.selectionEnd};else r:{e=(e=r.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var i=t.anchorOffset,a=t.focusNode;t=t.focusOffset;try{e.nodeType,a.nodeType}catch{e=null;break r}var l=0,d=-1,s=-1,g=0,u=0,w=r,m=null;o:for(;;){for(var y;w!==e||i!==0&&w.nodeType!==3||(d=l+i),w!==a||t!==0&&w.nodeType!==3||(s=l+t),w.nodeType===3&&(l+=w.nodeValue.length),(y=w.firstChild)!==null;)m=w,w=y;for(;;){if(w===r)break o;if(m===e&&++g===i&&(d=l),m===a&&++u===t&&(s=l),(y=w.nextSibling)!==null)break;w=m,m=w.parentNode}w=y}e=d===-1||s===-1?null:{start:d,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(ji={focusedElem:r,selectionRange:e},$t=!1,j=o;j!==null;)if(o=j,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,j=r;else for(;j!==null;){o=j;try{var v=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,B=v.memoizedState,b=o.stateNode,c=b.getSnapshotBeforeUpdate(o.elementType===o.type?k:Ur(o.type,k),B);b.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=o.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(x){V(o,o.return,x)}if(r=o.sibling,r!==null){r.return=o.return,j=r;break}j=o.return}return v=Wl,Wl=!1,v}function Pe(r,o,e){var t=o.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&r)===r){var a=i.destroy;i.destroy=void 0,a!==void 0&&Oi(o,e,a)}i=i.next}while(i!==t)}}function xn(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var e=o=o.next;do{if((e.tag&r)===r){var t=e.create;e.destroy=t()}e=e.next}while(e!==o)}}function Di(r){var o=r.ref;if(o!==null){var e=r.stateNode;switch(r.tag){case 5:r=e;break;default:r=e}typeof o=="function"?o(r):o.current=r}}function Z0(r){var o=r.alternate;o!==null&&(r.alternate=null,Z0(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Dr],delete o[Xe],delete o[Si],delete o[Ng],delete o[zg])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function q0(r){return r.tag===5||r.tag===3||r.tag===4}function Hl(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||q0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue r;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ii(r,o,e){var t=r.tag;if(t===5||t===6)r=r.stateNode,o?e.nodeType===8?e.parentNode.insertBefore(r,o):e.insertBefore(r,o):(e.nodeType===8?(o=e.parentNode,o.insertBefore(r,e)):(o=e,o.appendChild(r)),e=e._reactRootContainer,e!=null||o.onclick!==null||(o.onclick=Vt));else if(t!==4&&(r=r.child,r!==null))for(Ii(r,o,e),r=r.sibling;r!==null;)Ii(r,o,e),r=r.sibling}function $i(r,o,e){var t=r.tag;if(t===5||t===6)r=r.stateNode,o?e.insertBefore(r,o):e.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for($i(r,o,e),r=r.sibling;r!==null;)$i(r,o,e),r=r.sibling}var or=null,Pr=!1;function qr(r,o,e){for(e=e.child;e!==null;)rs(r,o,e),e=e.sibling}function rs(r,o,e){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(cn,e)}catch{}switch(e.tag){case 5:ar||Qo(e,o);case 6:var t=or,i=Pr;or=null,qr(r,o,e),or=t,Pr=i,or!==null&&(Pr?(r=or,e=e.stateNode,r.nodeType===8?r.parentNode.removeChild(e):r.removeChild(e)):or.removeChild(e.stateNode));break;case 18:or!==null&&(Pr?(r=or,e=e.stateNode,r.nodeType===8?Hn(r.parentNode,e):r.nodeType===1&&Hn(r,e),$e(r)):Hn(or,e.stateNode));break;case 4:t=or,i=Pr,or=e.stateNode.containerInfo,Pr=!0,qr(r,o,e),or=t,Pr=i;break;case 0:case 11:case 14:case 15:if(!ar&&(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Oi(e,o,l),i=i.next}while(i!==t)}qr(r,o,e);break;case 1:if(!ar&&(Qo(e,o),t=e.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(d){V(e,o,d)}qr(r,o,e);break;case 21:qr(r,o,e);break;case 22:e.mode&1?(ar=(t=ar)||e.memoizedState!==null,qr(r,o,e),ar=t):qr(r,o,e);break;default:qr(r,o,e)}}function Vl(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var e=r.stateNode;e===null&&(e=r.stateNode=new Ig),o.forEach(function(t){var i=Jg.bind(null,r,t);e.has(t)||(e.add(t),t.then(i,i))})}}function _r(r,o){var e=o.deletions;if(e!==null)for(var t=0;t<e.length;t++){var i=e[t];try{var a=r,l=o,d=l;r:for(;d!==null;){switch(d.tag){case 5:or=d.stateNode,Pr=!1;break r;case 3:or=d.stateNode.containerInfo,Pr=!0;break r;case 4:or=d.stateNode.containerInfo,Pr=!0;break r}d=d.return}if(or===null)throw Error(h(160));rs(a,l,i),or=null,Pr=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(g){V(i,o,g)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)os(o,r),o=o.sibling}function os(r,o){var e=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(_r(o,r),Mr(r),t&4){try{Pe(3,r,r.return),xn(3,r)}catch(k){V(r,r.return,k)}try{Pe(5,r,r.return)}catch(k){V(r,r.return,k)}}break;case 1:_r(o,r),Mr(r),t&512&&e!==null&&Qo(e,e.return);break;case 5:if(_r(o,r),Mr(r),t&512&&e!==null&&Qo(e,e.return),r.flags&32){var i=r.stateNode;try{Me(i,"")}catch(k){V(r,r.return,k)}}if(t&4&&(i=r.stateNode,i!=null)){var a=r.memoizedProps,l=e!==null?e.memoizedProps:a,d=r.type,s=r.updateQueue;if(r.updateQueue=null,s!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&jd(i,a),bi(d,l);var g=bi(d,a);for(l=0;l<s.length;l+=2){var u=s[l],w=s[l+1];u==="style"?Ad(i,w):u==="dangerouslySetInnerHTML"?Sd(i,w):u==="children"?Me(i,w):oa(i,u,w,g)}switch(d){case"input":li(i,a);break;case"textarea":Nd(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Jo(i,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?Jo(i,!!a.multiple,a.defaultValue,!0):Jo(i,!!a.multiple,a.multiple?[]:"",!1))}i[Xe]=a}catch(k){V(r,r.return,k)}}break;case 6:if(_r(o,r),Mr(r),t&4){if(r.stateNode===null)throw Error(h(162));i=r.stateNode,a=r.memoizedProps;try{i.nodeValue=a}catch(k){V(r,r.return,k)}}break;case 3:if(_r(o,r),Mr(r),t&4&&e!==null&&e.memoizedState.isDehydrated)try{$e(o.containerInfo)}catch(k){V(r,r.return,k)}break;case 4:_r(o,r),Mr(r);break;case 13:_r(o,r),Mr(r),i=r.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(La=Q())),t&4&&Vl(r);break;case 22:if(u=e!==null&&e.memoizedState!==null,r.mode&1?(ar=(g=ar)||u,_r(o,r),ar=g):_r(o,r),Mr(r),t&8192){if(g=r.memoizedState!==null,(r.stateNode.isHidden=g)&&!u&&r.mode&1)for(j=r,u=r.child;u!==null;){for(w=j=u;j!==null;){switch(m=j,y=m.child,m.tag){case 0:case 11:case 14:case 15:Pe(4,m,m.return);break;case 1:Qo(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){t=m,e=m.return;try{o=t,v.props=o.memoizedProps,v.state=o.memoizedState,v.componentWillUnmount()}catch(k){V(t,e,k)}}break;case 5:Qo(m,m.return);break;case 22:if(m.memoizedState!==null){Xl(w);continue}}y!==null?(y.return=m,j=y):Xl(w)}u=u.sibling}r:for(u=null,w=r;;){if(w.tag===5){if(u===null){u=w;try{i=w.stateNode,g?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=w.stateNode,s=w.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,d.style.display=Cd("display",l))}catch(k){V(r,r.return,k)}}}else if(w.tag===6){if(u===null)try{w.stateNode.nodeValue=g?"":w.memoizedProps}catch(k){V(r,r.return,k)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===r)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===r)break r;for(;w.sibling===null;){if(w.return===null||w.return===r)break r;u===w&&(u=null),w=w.return}u===w&&(u=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:_r(o,r),Mr(r),t&4&&Vl(r);break;case 21:break;default:_r(o,r),Mr(r)}}function Mr(r){var o=r.flags;if(o&2){try{r:{for(var e=r.return;e!==null;){if(q0(e)){var t=e;break r}e=e.return}throw Error(h(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(Me(i,""),t.flags&=-33);var a=Hl(r);$i(r,a,i);break;case 3:case 4:var l=t.stateNode.containerInfo,d=Hl(r);Ii(r,d,l);break;default:throw Error(h(161))}}catch(s){V(r,r.return,s)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function Wg(r,o,e){j=r,es(r)}function es(r,o,e){for(var t=(r.mode&1)!==0;j!==null;){var i=j,a=i.child;if(i.tag===22&&t){var l=i.memoizedState!==null||yt;if(!l){var d=i.alternate,s=d!==null&&d.memoizedState!==null||ar;d=yt;var g=ar;if(yt=l,(ar=s)&&!g)for(j=i;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Ql(i):s!==null?(s.return=l,j=s):Ql(i);for(;a!==null;)j=a,es(a),a=a.sibling;j=i,yt=d,ar=g}Yl(r)}else i.subtreeFlags&8772&&a!==null?(a.return=i,j=a):Yl(r)}}function Yl(r){for(;j!==null;){var o=j;if(o.flags&8772){var e=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:ar||xn(5,o);break;case 1:var t=o.stateNode;if(o.flags&4&&!ar)if(e===null)t.componentDidMount();else{var i=o.elementType===o.type?e.memoizedProps:Ur(o.type,e.memoizedProps);t.componentDidUpdate(i,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var a=o.updateQueue;a!==null&&Tl(o,a,t);break;case 3:var l=o.updateQueue;if(l!==null){if(e=null,o.child!==null)switch(o.child.tag){case 5:e=o.child.stateNode;break;case 1:e=o.child.stateNode}Tl(o,l,e)}break;case 5:var d=o.stateNode;if(e===null&&o.flags&4){e=d;var s=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&e.focus();break;case"img":s.src&&(e.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var g=o.alternate;if(g!==null){var u=g.memoizedState;if(u!==null){var w=u.dehydrated;w!==null&&$e(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ar||o.flags&512&&Di(o)}catch(m){V(o,o.return,m)}}if(o===r){j=null;break}if(e=o.sibling,e!==null){e.return=o.return,j=e;break}j=o.return}}function Xl(r){for(;j!==null;){var o=j;if(o===r){j=null;break}var e=o.sibling;if(e!==null){e.return=o.return,j=e;break}j=o.return}}function Ql(r){for(;j!==null;){var o=j;try{switch(o.tag){case 0:case 11:case 15:var e=o.return;try{xn(4,o)}catch(s){V(o,e,s)}break;case 1:var t=o.stateNode;if(typeof t.componentDidMount=="function"){var i=o.return;try{t.componentDidMount()}catch(s){V(o,i,s)}}var a=o.return;try{Di(o)}catch(s){V(o,a,s)}break;case 5:var l=o.return;try{Di(o)}catch(s){V(o,l,s)}}}catch(s){V(o,o.return,s)}if(o===r){j=null;break}var d=o.sibling;if(d!==null){d.return=o.return,j=d;break}j=o.return}}var Hg=Math.ceil,en=Zr.ReactCurrentDispatcher,Ua=Zr.ReactCurrentOwner,Cr=Zr.ReactCurrentBatchConfig,L=0,rr=null,G=null,er=0,xr=0,Go=ho(0),J=0,qe=null,Po=0,hn=0,Pa=0,Le=null,pr=null,La=0,se=1/0,Wr=null,tn=!1,Wi=null,po=null,kt=!1,io=null,nn=0,Re=0,Hi=null,Lt=-1,Rt=0;function sr(){return L&6?Q():Lt!==-1?Lt:Lt=Q()}function mo(r){return r.mode&1?L&2&&er!==0?er&-er:Cg.transition!==null?(Rt===0&&(Rt=Dd()),Rt):(r=F,r!==0||(r=window.event,r=r===void 0?16:Xd(r.type)),r):1}function Fr(r,o,e,t){if(50<Re)throw Re=0,Hi=null,Error(h(185));ot(r,e,t),(!(L&2)||r!==rr)&&(r===rr&&(!(L&2)&&(hn|=e),J===4&&to(r,er)),ur(r,t),e===1&&L===0&&!(o.mode&1)&&(se=Q()+500,fn&&vo()))}function ur(r,o){var e=r.callbackNode;Cc(r,o);var t=It(r,r===rr?er:0);if(t===0)e!==null&&tl(e),r.callbackNode=null,r.callbackPriority=0;else if(o=t&-t,r.callbackPriority!==o){if(e!=null&&tl(e),o===1)r.tag===0?Sg(Gl.bind(null,r)):b0(Gl.bind(null,r)),kg(function(){!(L&6)&&vo()}),e=null;else{switch(Id(t)){case 1:e=aa;break;case 4:e=Md;break;case 16:e=Dt;break;case 536870912:e=Od;break;default:e=Dt}e=cs(e,ts.bind(null,r))}r.callbackPriority=o,r.callbackNode=e}}function ts(r,o){if(Lt=-1,Rt=0,L&6)throw Error(h(327));var e=r.callbackNode;if(ee()&&r.callbackNode!==e)return null;var t=It(r,r===rr?er:0);if(t===0)return null;if(t&30||t&r.expiredLanes||o)o=an(r,t);else{o=t;var i=L;L|=2;var a=is();(rr!==r||er!==o)&&(Wr=null,se=Q()+500,Ao(r,o));do try{Xg();break}catch(d){ns(r,d)}while(!0);ha(),en.current=a,L=i,G!==null?o=0:(rr=null,er=0,o=J)}if(o!==0){if(o===2&&(i=ui(r),i!==0&&(t=i,o=Vi(r,i))),o===1)throw e=qe,Ao(r,0),to(r,t),ur(r,Q()),e;if(o===6)to(r,t);else{if(i=r.current.alternate,!(t&30)&&!Vg(i)&&(o=an(r,t),o===2&&(a=ui(r),a!==0&&(t=a,o=Vi(r,a))),o===1))throw e=qe,Ao(r,0),to(r,t),ur(r,Q()),e;switch(r.finishedWork=i,r.finishedLanes=t,o){case 0:case 1:throw Error(h(345));case 2:No(r,pr,Wr);break;case 3:if(to(r,t),(t&130023424)===t&&(o=La+500-Q(),10<o)){if(It(r,0)!==0)break;if(i=r.suspendedLanes,(i&t)!==t){sr(),r.pingedLanes|=r.suspendedLanes&i;break}r.timeoutHandle=zi(No.bind(null,r,pr,Wr),o);break}No(r,pr,Wr);break;case 4:if(to(r,t),(t&4194240)===t)break;for(o=r.eventTimes,i=-1;0<t;){var l=31-Rr(t);a=1<<l,l=o[l],l>i&&(i=l),t&=~a}if(t=i,t=Q()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Hg(t/1960))-t,10<t){r.timeoutHandle=zi(No.bind(null,r,pr,Wr),t);break}No(r,pr,Wr);break;case 5:No(r,pr,Wr);break;default:throw Error(h(329))}}}return ur(r,Q()),r.callbackNode===e?ts.bind(null,r):null}function Vi(r,o){var e=Le;return r.current.memoizedState.isDehydrated&&(Ao(r,o).flags|=256),r=an(r,o),r!==2&&(o=pr,pr=e,o!==null&&Yi(o)),r}function Yi(r){pr===null?pr=r:pr.push.apply(pr,r)}function Vg(r){for(var o=r;;){if(o.flags&16384){var e=o.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var t=0;t<e.length;t++){var i=e[t],a=i.getSnapshot;i=i.value;try{if(!Br(a(),i))return!1}catch{return!1}}}if(e=o.child,o.subtreeFlags&16384&&e!==null)e.return=o,o=e;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function to(r,o){for(o&=~Pa,o&=~hn,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var e=31-Rr(o),t=1<<e;r[e]=-1,o&=~t}}function Gl(r){if(L&6)throw Error(h(327));ee();var o=It(r,0);if(!(o&1))return ur(r,Q()),null;var e=an(r,o);if(r.tag!==0&&e===2){var t=ui(r);t!==0&&(o=t,e=Vi(r,t))}if(e===1)throw e=qe,Ao(r,0),to(r,o),ur(r,Q()),e;if(e===6)throw Error(h(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,No(r,pr,Wr),ur(r,Q()),null}function Ra(r,o){var e=L;L|=1;try{return r(o)}finally{L=e,L===0&&(se=Q()+500,fn&&vo())}}function Lo(r){io!==null&&io.tag===0&&!(L&6)&&ee();var o=L;L|=1;var e=Cr.transition,t=F;try{if(Cr.transition=null,F=1,r)return r()}finally{F=t,Cr.transition=e,L=o,!(L&6)&&vo()}}function Fa(){xr=Go.current,D(Go)}function Ao(r,o){r.finishedWork=null,r.finishedLanes=0;var e=r.timeoutHandle;if(e!==-1&&(r.timeoutHandle=-1,yg(e)),G!==null)for(e=G.return;e!==null;){var t=e;switch(wa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Yt();break;case 3:le(),D(fr),D(lr),za();break;case 5:Na(t);break;case 4:le();break;case 13:D($);break;case 19:D($);break;case 10:va(t.type._context);break;case 22:case 23:Fa()}e=e.return}if(rr=r,G=r=fo(r.current,null),er=xr=o,J=0,qe=null,Pa=hn=Po=0,pr=Le=null,So!==null){for(o=0;o<So.length;o++)if(e=So[o],t=e.interleaved,t!==null){e.interleaved=null;var i=t.next,a=e.pending;if(a!==null){var l=a.next;a.next=i,t.next=l}e.pending=t}So=null}return r}function ns(r,o){do{var e=G;try{if(ha(),_t.current=on,rn){for(var t=W.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}rn=!1}if(Uo=0,q=K=W=null,Ue=!1,Ke=0,Ua.current=null,e===null||e.return===null){J=1,qe=o,G=null;break}r:{var a=r,l=e.return,d=e,s=o;if(o=er,d.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,u=d,w=u.tag;if(!(u.mode&1)&&(w===0||w===11||w===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Fl(l);if(y!==null){y.flags&=-257,Bl(y,l,d,a,o),y.mode&1&&Rl(a,g,o),o=y,s=g;var v=o.updateQueue;if(v===null){var k=new Set;k.add(s),o.updateQueue=k}else v.add(s);break r}else{if(!(o&1)){Rl(a,g,o),Ba();break r}s=Error(h(426))}}else if(I&&d.mode&1){var B=Fl(l);if(B!==null){!(B.flags&65536)&&(B.flags|=256),Bl(B,l,d,a,o),ua(de(s,d));break r}}a=s=de(s,d),J!==4&&(J=2),Le===null?Le=[a]:Le.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,o&=-o,a.lanes|=o;var b=I0(a,s,o);El(a,b);break r;case 1:d=s;var c=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(po===null||!po.has(p)))){a.flags|=65536,o&=-o,a.lanes|=o;var x=$0(a,d,o);El(a,x);break r}}a=a.return}while(a!==null)}ls(e)}catch(N){o=N,G===e&&e!==null&&(G=e=e.return);continue}break}while(!0)}function is(){var r=en.current;return en.current=on,r===null?on:r}function Ba(){(J===0||J===3||J===2)&&(J=4),rr===null||!(Po&268435455)&&!(hn&268435455)||to(rr,er)}function an(r,o){var e=L;L|=2;var t=is();(rr!==r||er!==o)&&(Wr=null,Ao(r,o));do try{Yg();break}catch(i){ns(r,i)}while(!0);if(ha(),L=e,en.current=t,G!==null)throw Error(h(261));return rr=null,er=0,J}function Yg(){for(;G!==null;)as(G)}function Xg(){for(;G!==null&&!xc();)as(G)}function as(r){var o=ss(r.alternate,r,xr);r.memoizedProps=r.pendingProps,o===null?ls(r):G=o,Ua.current=null}function ls(r){var o=r;do{var e=o.alternate;if(r=o.return,o.flags&32768){if(e=Dg(e,o),e!==null){e.flags&=32767,G=e;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{J=6,G=null;return}}else if(e=Og(e,o,xr),e!==null){G=e;return}if(o=o.sibling,o!==null){G=o;return}G=o=r}while(o!==null);J===0&&(J=5)}function No(r,o,e){var t=F,i=Cr.transition;try{Cr.transition=null,F=1,Qg(r,o,e,t)}finally{Cr.transition=i,F=t}return null}function Qg(r,o,e,t){do ee();while(io!==null);if(L&6)throw Error(h(327));e=r.finishedWork;var i=r.finishedLanes;if(e===null)return null;if(r.finishedWork=null,r.finishedLanes=0,e===r.current)throw Error(h(177));r.callbackNode=null,r.callbackPriority=0;var a=e.lanes|e.childLanes;if(Ac(r,a),r===rr&&(G=rr=null,er=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||kt||(kt=!0,cs(Dt,function(){return ee(),null})),a=(e.flags&15990)!==0,e.subtreeFlags&15990||a){a=Cr.transition,Cr.transition=null;var l=F;F=1;var d=L;L|=4,Ua.current=null,$g(r,e),os(e,r),mg(ji),$t=!!ki,ji=ki=null,r.current=e,Wg(e),hc(),L=d,F=l,Cr.transition=a}else r.current=e;if(kt&&(kt=!1,io=r,nn=i),a=r.pendingLanes,a===0&&(po=null),kc(e.stateNode),ur(r,Q()),o!==null)for(t=r.onRecoverableError,e=0;e<o.length;e++)i=o[e],t(i.value,{componentStack:i.stack,digest:i.digest});if(tn)throw tn=!1,r=Wi,Wi=null,r;return nn&1&&r.tag!==0&&ee(),a=r.pendingLanes,a&1?r===Hi?Re++:(Re=0,Hi=r):Re=0,vo(),null}function ee(){if(io!==null){var r=Id(nn),o=Cr.transition,e=F;try{if(Cr.transition=null,F=16>r?16:r,io===null)var t=!1;else{if(r=io,io=null,nn=0,L&6)throw Error(h(331));var i=L;for(L|=4,j=r.current;j!==null;){var a=j,l=a.child;if(j.flags&16){var d=a.deletions;if(d!==null){for(var s=0;s<d.length;s++){var g=d[s];for(j=g;j!==null;){var u=j;switch(u.tag){case 0:case 11:case 15:Pe(8,u,a)}var w=u.child;if(w!==null)w.return=u,j=w;else for(;j!==null;){u=j;var m=u.sibling,y=u.return;if(Z0(u),u===g){j=null;break}if(m!==null){m.return=y,j=m;break}j=y}}}var v=a.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var B=k.sibling;k.sibling=null,k=B}while(k!==null)}}j=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,j=l;else r:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Pe(9,a,a.return)}var b=a.sibling;if(b!==null){b.return=a.return,j=b;break r}j=a.return}}var c=r.current;for(j=c;j!==null;){l=j;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,j=p;else r:for(l=c;j!==null;){if(d=j,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:xn(9,d)}}catch(N){V(d,d.return,N)}if(d===l){j=null;break r}var x=d.sibling;if(x!==null){x.return=d.return,j=x;break r}j=d.return}}if(L=i,vo(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(cn,r)}catch{}t=!0}return t}finally{F=e,Cr.transition=o}}return!1}function Kl(r,o,e){o=de(e,o),o=I0(r,o,1),r=bo(r,o,1),o=sr(),r!==null&&(ot(r,1,o),ur(r,o))}function V(r,o,e){if(r.tag===3)Kl(r,r,e);else for(;o!==null;){if(o.tag===3){Kl(o,r,e);break}else if(o.tag===1){var t=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(po===null||!po.has(t))){r=de(e,r),r=$0(o,r,1),o=bo(o,r,1),r=sr(),o!==null&&(ot(o,1,r),ur(o,r));break}}o=o.return}}function Gg(r,o,e){var t=r.pingCache;t!==null&&t.delete(o),o=sr(),r.pingedLanes|=r.suspendedLanes&e,rr===r&&(er&e)===e&&(J===4||J===3&&(er&130023424)===er&&500>Q()-La?Ao(r,0):Pa|=e),ur(r,o)}function ds(r,o){o===0&&(r.mode&1?(o=bt,bt<<=1,!(bt&130023424)&&(bt=4194304)):o=1);var e=sr();r=Kr(r,o),r!==null&&(ot(r,o,e),ur(r,e))}function Kg(r){var o=r.memoizedState,e=0;o!==null&&(e=o.retryLane),ds(r,e)}function Jg(r,o){var e=0;switch(r.tag){case 13:var t=r.stateNode,i=r.memoizedState;i!==null&&(e=i.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(h(314))}t!==null&&t.delete(o),ds(r,e)}var ss;ss=function(r,o,e){if(r!==null)if(r.memoizedProps!==o.pendingProps||fr.current)mr=!0;else{if(!(r.lanes&e)&&!(o.flags&128))return mr=!1,Mg(r,o,e);mr=!!(r.flags&131072)}else mr=!1,I&&o.flags&1048576&&p0(o,Gt,o.index);switch(o.lanes=0,o.tag){case 2:var t=o.type;Pt(r,o),r=o.pendingProps;var i=ne(o,lr.current);oe(o,e),i=Ca(null,o,t,r,i,e);var a=Aa();return o.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,wr(t)?(a=!0,Xt(o)):a=!1,o.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ka(o),i.updater=un,o.stateNode=i,i._reactInternals=o,Ui(o,t,r,e),o=Ri(null,o,t,!0,a,e)):(o.tag=0,I&&a&&fa(o),dr(null,o,i,e),o=o.child),o;case 16:t=o.elementType;r:{switch(Pt(r,o),r=o.pendingProps,i=t._init,t=i(t._payload),o.type=t,i=o.tag=qg(t),r=Ur(t,r),i){case 0:o=Li(null,o,t,r,e);break r;case 1:o=Dl(null,o,t,r,e);break r;case 11:o=Ml(null,o,t,r,e);break r;case 14:o=Ol(null,o,t,Ur(t.type,r),e);break r}throw Error(h(306,t,""))}return o;case 0:return t=o.type,i=o.pendingProps,i=o.elementType===t?i:Ur(t,i),Li(r,o,t,i,e);case 1:return t=o.type,i=o.pendingProps,i=o.elementType===t?i:Ur(t,i),Dl(r,o,t,i,e);case 3:r:{if(Y0(o),r===null)throw Error(h(387));t=o.pendingProps,a=o.memoizedState,i=a.element,h0(r,o),Zt(o,t,null,e);var l=o.memoizedState;if(t=l.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},o.updateQueue.baseState=a,o.memoizedState=a,o.flags&256){i=de(Error(h(423)),o),o=Il(r,o,t,e,i);break r}else if(t!==i){i=de(Error(h(424)),o),o=Il(r,o,t,e,i);break r}else for(hr=go(o.stateNode.containerInfo.firstChild),vr=o,I=!0,Lr=null,e=u0(o,null,t,e),o.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(ie(),t===i){o=Jr(r,o,e);break r}dr(r,o,t,e)}o=o.child}return o;case 5:return v0(o),r===null&&Ei(o),t=o.type,i=o.pendingProps,a=r!==null?r.memoizedProps:null,l=i.children,Ni(t,i)?l=null:a!==null&&Ni(t,a)&&(o.flags|=32),V0(r,o),dr(r,o,l,e),o.child;case 6:return r===null&&Ei(o),null;case 13:return X0(r,o,e);case 4:return ja(o,o.stateNode.containerInfo),t=o.pendingProps,r===null?o.child=ae(o,null,t,e):dr(r,o,t,e),o.child;case 11:return t=o.type,i=o.pendingProps,i=o.elementType===t?i:Ur(t,i),Ml(r,o,t,i,e);case 7:return dr(r,o,o.pendingProps,e),o.child;case 8:return dr(r,o,o.pendingProps.children,e),o.child;case 12:return dr(r,o,o.pendingProps.children,e),o.child;case 10:r:{if(t=o.type._context,i=o.pendingProps,a=o.memoizedProps,l=i.value,M(Kt,t._currentValue),t._currentValue=l,a!==null)if(Br(a.value,l)){if(a.children===i.children&&!fr.current){o=Jr(r,o,e);break r}}else for(a=o.child,a!==null&&(a.return=o);a!==null;){var d=a.dependencies;if(d!==null){l=a.child;for(var s=d.firstContext;s!==null;){if(s.context===t){if(a.tag===1){s=Xr(-1,e&-e),s.tag=2;var g=a.updateQueue;if(g!==null){g=g.shared;var u=g.pending;u===null?s.next=s:(s.next=u.next,u.next=s),g.pending=s}}a.lanes|=e,s=a.alternate,s!==null&&(s.lanes|=e),Ti(a.return,e,o),d.lanes|=e;break}s=s.next}}else if(a.tag===10)l=a.type===o.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(h(341));l.lanes|=e,d=l.alternate,d!==null&&(d.lanes|=e),Ti(l,e,o),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===o){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}dr(r,o,i.children,e),o=o.child}return o;case 9:return i=o.type,t=o.pendingProps.children,oe(o,e),i=Ar(i),t=t(i),o.flags|=1,dr(r,o,t,e),o.child;case 14:return t=o.type,i=Ur(t,o.pendingProps),i=Ur(t.type,i),Ol(r,o,t,i,e);case 15:return W0(r,o,o.type,o.pendingProps,e);case 17:return t=o.type,i=o.pendingProps,i=o.elementType===t?i:Ur(t,i),Pt(r,o),o.tag=1,wr(t)?(r=!0,Xt(o)):r=!1,oe(o,e),D0(o,t,i),Ui(o,t,i,e),Ri(null,o,t,!0,r,e);case 19:return Q0(r,o,e);case 22:return H0(r,o,e)}throw Error(h(156,o.tag))};function cs(r,o){return Bd(r,o)}function Zg(r,o,e,t){this.tag=r,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(r,o,e,t){return new Zg(r,o,e,t)}function Ma(r){return r=r.prototype,!(!r||!r.isReactComponent)}function qg(r){if(typeof r=="function")return Ma(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ta)return 11;if(r===na)return 14}return 2}function fo(r,o){var e=r.alternate;return e===null?(e=Sr(r.tag,o,r.key,r.mode),e.elementType=r.elementType,e.type=r.type,e.stateNode=r.stateNode,e.alternate=r,r.alternate=e):(e.pendingProps=o,e.type=r.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=r.flags&14680064,e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,o=r.dependencies,e.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},e.sibling=r.sibling,e.index=r.index,e.ref=r.ref,e}function Ft(r,o,e,t,i,a){var l=2;if(t=r,typeof r=="function")Ma(r)&&(l=1);else if(typeof r=="string")l=5;else r:switch(r){case Oo:return Eo(e.children,i,a,o);case ea:l=8,i|=8;break;case ei:return r=Sr(12,e,o,i|2),r.elementType=ei,r.lanes=a,r;case ti:return r=Sr(13,e,o,i),r.elementType=ti,r.lanes=a,r;case ni:return r=Sr(19,e,o,i),r.elementType=ni,r.lanes=a,r;case vd:return vn(e,i,a,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case xd:l=10;break r;case hd:l=9;break r;case ta:l=11;break r;case na:l=14;break r;case ro:l=16,t=null;break r}throw Error(h(130,r==null?r:typeof r,""))}return o=Sr(l,e,o,i),o.elementType=r,o.type=t,o.lanes=a,o}function Eo(r,o,e,t){return r=Sr(7,r,t,o),r.lanes=e,r}function vn(r,o,e,t){return r=Sr(22,r,t,o),r.elementType=vd,r.lanes=e,r.stateNode={isHidden:!1},r}function Zn(r,o,e){return r=Sr(6,r,null,o),r.lanes=e,r}function qn(r,o,e){return o=Sr(4,r.children!==null?r.children:[],r.key,o),o.lanes=e,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function rb(r,o,e,t,i){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pn(0),this.expirationTimes=Pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oa(r,o,e,t,i,a,l,d,s){return r=new rb(r,o,e,d,s),o===1?(o=1,a===!0&&(o|=8)):o=0,a=Sr(3,null,null,o),r.current=a,a.stateNode=r,a.memoizedState={element:t,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},ka(a),r}function ob(r,o,e){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:t==null?null:""+t,children:r,containerInfo:o,implementation:e}}function gs(r){if(!r)return uo;r=r._reactInternals;r:{if(Fo(r)!==r||r.tag!==1)throw Error(h(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break r;case 1:if(wr(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break r}}o=o.return}while(o!==null);throw Error(h(171))}if(r.tag===1){var e=r.type;if(wr(e))return g0(r,e,o)}return o}function bs(r,o,e,t,i,a,l,d,s){return r=Oa(e,t,!0,r,i,a,l,d,s),r.context=gs(null),e=r.current,t=sr(),i=mo(e),a=Xr(t,i),a.callback=o??null,bo(e,a,i),r.current.lanes=i,ot(r,i,t),ur(r,t),r}function yn(r,o,e,t){var i=o.current,a=sr(),l=mo(i);return e=gs(e),o.context===null?o.context=e:o.pendingContext=e,o=Xr(a,l),o.payload={element:r},t=t===void 0?null:t,t!==null&&(o.callback=t),r=bo(i,o,l),r!==null&&(Fr(r,i,l,a),Tt(r,i,l)),l}function ln(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Jl(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var e=r.retryLane;r.retryLane=e!==0&&e<o?e:o}}function Da(r,o){Jl(r,o),(r=r.alternate)&&Jl(r,o)}function eb(){return null}var ps=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ia(r){this._internalRoot=r}kn.prototype.render=Ia.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(h(409));yn(r,o,null,null)};kn.prototype.unmount=Ia.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Lo(function(){yn(null,r,null,null)}),o[Gr]=null}};function kn(r){this._internalRoot=r}kn.prototype.unstable_scheduleHydration=function(r){if(r){var o=Hd();r={blockedOn:null,target:r,priority:o};for(var e=0;e<eo.length&&o!==0&&o<eo[e].priority;e++);eo.splice(e,0,r),e===0&&Yd(r)}};function $a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function jn(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Zl(){}function tb(r,o,e,t,i){if(i){if(typeof t=="function"){var a=t;t=function(){var g=ln(l);a.call(g)}}var l=bs(o,t,r,0,null,!1,!1,"",Zl);return r._reactRootContainer=l,r[Gr]=l.current,Ve(r.nodeType===8?r.parentNode:r),Lo(),l}for(;i=r.lastChild;)r.removeChild(i);if(typeof t=="function"){var d=t;t=function(){var g=ln(s);d.call(g)}}var s=Oa(r,0,!1,null,null,!1,!1,"",Zl);return r._reactRootContainer=s,r[Gr]=s.current,Ve(r.nodeType===8?r.parentNode:r),Lo(function(){yn(o,s,e,t)}),s}function Nn(r,o,e,t,i){var a=e._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var d=i;i=function(){var s=ln(l);d.call(s)}}yn(o,l,r,i)}else l=tb(e,o,r,i,t);return ln(l)}$d=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var e=ze(o.pendingLanes);e!==0&&(la(o,e|1),ur(o,Q()),!(L&6)&&(se=Q()+500,vo()))}break;case 13:Lo(function(){var t=Kr(r,1);if(t!==null){var i=sr();Fr(t,r,1,i)}}),Da(r,1)}};da=function(r){if(r.tag===13){var o=Kr(r,134217728);if(o!==null){var e=sr();Fr(o,r,134217728,e)}Da(r,134217728)}};Wd=function(r){if(r.tag===13){var o=mo(r),e=Kr(r,o);if(e!==null){var t=sr();Fr(e,r,o,t)}Da(r,o)}};Hd=function(){return F};Vd=function(r,o){var e=F;try{return F=r,o()}finally{F=e}};mi=function(r,o,e){switch(o){case"input":if(li(r,e),o=e.name,e.type==="radio"&&o!=null){for(e=r;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<e.length;o++){var t=e[o];if(t!==r&&t.form===r.form){var i=mn(t);if(!i)throw Error(h(90));kd(t),li(t,i)}}}break;case"textarea":Nd(r,e);break;case"select":o=e.value,o!=null&&Jo(r,!!e.multiple,o,!1)}};_d=Ra;Ud=Lo;var nb={usingClientEntryPoint:!1,Events:[tt,Wo,mn,Ed,Td,Ra]},ke={findFiberByHostInstance:zo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ib={bundleType:ke.bundleType,version:ke.version,rendererPackageName:ke.rendererPackageName,rendererConfig:ke.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Rd(r),r===null?null:r.stateNode},findFiberByHostInstance:ke.findFiberByHostInstance||eb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jt.isDisabled&&jt.supportsFiber)try{cn=jt.inject(ib),Ir=jt}catch{}}kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nb;kr.createPortal=function(r,o){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$a(o))throw Error(h(200));return ob(r,o,null,e)};kr.createRoot=function(r,o){if(!$a(r))throw Error(h(299));var e=!1,t="",i=ps;return o!=null&&(o.unstable_strictMode===!0&&(e=!0),o.identifierPrefix!==void 0&&(t=o.identifierPrefix),o.onRecoverableError!==void 0&&(i=o.onRecoverableError)),o=Oa(r,1,!1,null,null,e,!1,t,i),r[Gr]=o.current,Ve(r.nodeType===8?r.parentNode:r),new Ia(o)};kr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(h(188)):(r=Object.keys(r).join(","),Error(h(268,r)));return r=Rd(o),r=r===null?null:r.stateNode,r};kr.flushSync=function(r){return Lo(r)};kr.hydrate=function(r,o,e){if(!jn(o))throw Error(h(200));return Nn(null,r,o,!0,e)};kr.hydrateRoot=function(r,o,e){if(!$a(r))throw Error(h(405));var t=e!=null&&e.hydratedSources||null,i=!1,a="",l=ps;if(e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),o=bs(o,null,r,1,e??null,i,!1,a,l),r[Gr]=o.current,Ve(r),t)for(r=0;r<t.length;r++)e=t[r],i=e._getVersion,i=i(e._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[e,i]:o.mutableSourceEagerHydrationData.push(e,i);return new kn(o)};kr.render=function(r,o,e){if(!jn(o))throw Error(h(200));return Nn(null,r,o,!1,e)};kr.unmountComponentAtNode=function(r){if(!jn(r))throw Error(h(40));return r._reactRootContainer?(Lo(function(){Nn(null,null,r,!1,function(){r._reactRootContainer=null,r[Gr]=null})}),!0):!1};kr.unstable_batchedUpdates=Ra;kr.unstable_renderSubtreeIntoContainer=function(r,o,e,t){if(!jn(e))throw Error(h(200));if(r==null||r._reactInternals===void 0)throw Error(h(38));return Nn(r,o,e,!1,t)};kr.version="18.3.1-next-f1338f8080-20240426";function ms(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ms)}catch(r){console.error(r)}}ms(),md.exports=kr;var ab=md.exports,fs,ql=ab;fs=ql.createRoot,ql.hydrateRoot;const Wa=R.createContext({}),lb=({children:r})=>{const[o,e]=R.useState(!1);return n.jsx(Wa.Provider,{value:{shouldExpandAll:o,setShouldExpandAll:e},children:r})},db=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"})}),sb=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"})}),cb=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"})}),gb=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"m356-160-56-56 180-180 180 180-56 56-124-124-124 124Zm124-404L300-744l56-56 124 124 124-124 56 56-180 180Z"})}),bb=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"})}),pb=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"})}),mb=({className:r})=>n.jsx("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",children:n.jsx("path",{d:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"})}),Xi=({className:r,Icon:o,text:e,onClick:t})=>n.jsxs("button",{className:`flex justify-center rounded-full border-2 border-neutral-500 bg-neutral-50 transition hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 ${r??""}`,onClick:t,children:[o,n.jsx("p",{children:e})]}),Nt=({category:r,detailedDocumentations:o})=>n.jsxs(fb,{children:[n.jsx(wb,{category:r}),o.map(e=>n.jsx(ub,{detailedDocumentation:e},e.entry))]}),fb=({children:r})=>n.jsx("div",{className:"mb-8 rounded-xl bg-neutral-50 shadow-md shadow-neutral-400 dark:bg-neutral-700 dark:shadow-neutral-950",children:r}),wb=({category:r})=>n.jsx("h2",{className:"whitespace-pre-line break-keep p-2 text-center text-xl font-bold text-orange-500",children:r}),ub=({detailedDocumentation:r})=>{const[o,e]=R.useState(!1),{shouldExpandAll:t,setShouldExpandAll:i}=R.useContext(Wa);R.useEffect(()=>{t!=null&&e(t)},[t]);const a=()=>{e(!o),i(null)};return n.jsxs("div",{className:"space-y-2 px-2 pb-2",children:[n.jsx(xb,{detailedDocumentation:r,handleEntryClick:a}),n.jsx(vb,{detailedDocumentation:r}),n.jsx("div",{className:`${o?"":"hidden"}`,children:r.detail}),n.jsx(yb,{detailedDocumentation:r,outerShouldExpand:o})]})},xb=({detailedDocumentation:r,handleEntryClick:o})=>n.jsx("div",{className:"-mx-2 flex cursor-pointer justify-between whitespace-pre-line border-t-2 border-neutral-500 bg-neutral-200 p-2 transition hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-600",onClick:o,children:n.jsx(hb,{detailedDocumentation:r})}),hb=R.memo(({detailedDocumentation:r})=>n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:r.entry}),n.jsx("a",{className:"my-auto w-10 content-center rounded-full fill-neutral-500 hover:bg-neutral-200 hover:fill-sky-400 dark:hover:bg-neutral-500",href:r.url,target:"_blank","aria-label":"公式ドキュメントに移動して詳細を確認する",onClick:o=>{o.stopPropagation()},children:n.jsx(bb,{className:"mx-auto"})})]})),vb=R.memo(({detailedDocumentation:r})=>n.jsx("p",{className:"whitespace-pre-line text-sm",children:r.description})),yb=({detailedDocumentation:r,outerShouldExpand:o})=>{const[e,t]=R.useState(!1),[i,a]=R.useState(!1),l=R.useRef(null);return R.useLayoutEffect(()=>{var s;if(!o){t(!1),a(!1);return}const d=(s=l.current)==null?void 0:s.getBoundingClientRect().height;d!=null&&d>144&&a(!0)},[o]),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:`overflow-clip ${e?"":"max-h-[144px]"} ${o?"":"hidden"}`,children:n.jsx("table",{className:"w-full table-fixed border-collapse overflow-clip whitespace-pre-line rounded-lg outline outline-2 -outline-offset-2 outline-stone-400 dark:outline-stone-500",ref:l,children:r.entry.includes("Container")?n.jsx(jb,{documentation:r}):n.jsx(kb,{documentation:r,shouldExpand:e})})}),n.jsx(Xi,{className:`w-full ${i?"":"hidden"}`,Icon:e?n.jsx(db,{className:"fill-neutral-500"}):n.jsx(sb,{className:"fill-neutral-500"}),text:"",onClick:()=>t(!e)})]})},kb=R.memo(({documentation:r,shouldExpand:o})=>n.jsx("tbody",{children:r.parameters.filter((e,t)=>o?!0:t<7).map((e,t)=>n.jsx("tr",{className:"odd:bg-stone-100 even:bg-stone-200 dark:odd:bg-stone-700 dark:even:bg-stone-800",children:e.map(i=>n.jsx("td",{className:"px-2 py-1 text-xs text-neutral-700 first:text-blue-700 last:text-green-700 dark:text-neutral-300 dark:first:text-blue-300 dark:last:text-green-300",children:i},i))},t))})),jb=R.memo(({documentation:r})=>n.jsx("tbody",{children:r.parameters.map((o,e)=>n.jsx("tr",{className:"odd:bg-neutral-100 even:bg-stone-200 dark:odd:bg-stone-700 dark:even:bg-stone-800",children:o.map((t,i)=>n.jsx("td",{className:`px-2 py-1 text-xs text-neutral-700 last:text-green-700 dark:text-neutral-300 dark:last:text-green-300 ${e===0?"first:text-blue-700 dark:first:text-blue-300":""}`,rowSpan:e===0&&i===0?6:void 0,children:t},t))},e))})),Nb="v3.4.13",ws=[{url:"https://tailwindcss.com/docs/aspect-ratio",entry:"Aspect Ratio",description:"Utilities for controlling the aspect ratio of an element.",parameters:[["aspect-auto",`aspect-ratio: auto;
`],["aspect-square",`aspect-ratio: 1 / 1;
`],["aspect-video",`aspect-ratio: 16 / 9;
`]]},{url:"https://tailwindcss.com/docs/container",entry:"Container",description:"A component for fixing an element's width to the current breakpoint.",parameters:[["container","None","width: 100%;"],["sm (640px)","max-width: 640px;"],["md (768px)","max-width: 768px;"],["lg (1024px)","max-width: 1024px;"],["xl (1280px)","max-width: 1280px;"],["2xl (1536px)","max-width: 1536px;"]]},{url:"https://tailwindcss.com/docs/columns",entry:"Columns",description:"Utilities for controlling the number of columns within an element.",parameters:[["columns-1",`columns: 1;
`],["columns-2",`columns: 2;
`],["columns-3",`columns: 3;
`],["columns-4",`columns: 4;
`],["columns-5",`columns: 5;
`],["columns-6",`columns: 6;
`],["columns-7",`columns: 7;
`],["columns-8",`columns: 8;
`],["columns-9",`columns: 9;
`],["columns-10",`columns: 10;
`],["columns-11",`columns: 11;
`],["columns-12",`columns: 12;
`],["columns-auto",`columns: auto;
`],["columns-3xs",`columns: 16rem; /* 256px */
`],["columns-2xs",`columns: 18rem; /* 288px */
`],["columns-xs",`columns: 20rem; /* 320px */
`],["columns-sm",`columns: 24rem; /* 384px */
`],["columns-md",`columns: 28rem; /* 448px */
`],["columns-lg",`columns: 32rem; /* 512px */
`],["columns-xl",`columns: 36rem; /* 576px */
`],["columns-2xl",`columns: 42rem; /* 672px */
`],["columns-3xl",`columns: 48rem; /* 768px */
`],["columns-4xl",`columns: 56rem; /* 896px */
`],["columns-5xl",`columns: 64rem; /* 1024px */
`],["columns-6xl",`columns: 72rem; /* 1152px */
`],["columns-7xl",`columns: 80rem; /* 1280px */
`]]},{url:"https://tailwindcss.com/docs/break-after",entry:"Break After",description:"Utilities for controlling how a column or page should break after an element.",parameters:[["break-after-auto",`break-after: auto;
`],["break-after-avoid",`break-after: avoid;
`],["break-after-all",`break-after: all;
`],["break-after-avoid-page",`break-after: avoid-page;
`],["break-after-page",`break-after: page;
`],["break-after-left",`break-after: left;
`],["break-after-right",`break-after: right;
`],["break-after-column",`break-after: column;
`]]},{url:"https://tailwindcss.com/docs/break-before",entry:"Break Before",description:"Utilities for controlling how a column or page should break before an element.",parameters:[["break-before-auto",`break-before: auto;
`],["break-before-avoid",`break-before: avoid;
`],["break-before-all",`break-before: all;
`],["break-before-avoid-page",`break-before: avoid-page;
`],["break-before-page",`break-before: page;
`],["break-before-left",`break-before: left;
`],["break-before-right",`break-before: right;
`],["break-before-column",`break-before: column;
`]]},{url:"https://tailwindcss.com/docs/break-inside",entry:"Break Inside",description:"Utilities for controlling how a column or page should break within an element.",parameters:[["break-inside-auto",`break-inside: auto;
`],["break-inside-avoid",`break-inside: avoid;
`],["break-inside-avoid-page",`break-inside: avoid-page;
`],["break-inside-avoid-column",`break-inside: avoid-column;
`]]},{url:"https://tailwindcss.com/docs/box-decoration-break",entry:"Box Decoration Break",description:"Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.",parameters:[["box-decoration-clone",`box-decoration-break: clone;
`],["box-decoration-slice",`box-decoration-break: slice;
`]]},{url:"https://tailwindcss.com/docs/box-sizing",entry:"Box Sizing",description:"Utilities for controlling how the browser should calculate an element's total size.",parameters:[["box-border",`box-sizing: border-box;
`],["box-content",`box-sizing: content-box;
`]]},{url:"https://tailwindcss.com/docs/display",entry:"Display",description:"Utilities for controlling the display box type of an element.",parameters:[["block",`display: block;
`],["inline-block",`display: inline-block;
`],["inline",`display: inline;
`],["flex",`display: flex;
`],["inline-flex",`display: inline-flex;
`],["table",`display: table;
`],["inline-table",`display: inline-table;
`],["table-caption",`display: table-caption;
`],["table-cell",`display: table-cell;
`],["table-column",`display: table-column;
`],["table-column-group",`display: table-column-group;
`],["table-footer-group",`display: table-footer-group;
`],["table-header-group",`display: table-header-group;
`],["table-row-group",`display: table-row-group;
`],["table-row",`display: table-row;
`],["flow-root",`display: flow-root;
`],["grid",`display: grid;
`],["inline-grid",`display: inline-grid;
`],["contents",`display: contents;
`],["list-item",`display: list-item;
`],["hidden",`display: none;
`]]},{url:"https://tailwindcss.com/docs/float",entry:"Floats",description:"Utilities for controlling the wrapping of content around an element.",parameters:[["float-start",`float: inline-start;
`],["float-end",`float: inline-end;
`],["float-right",`float: right;
`],["float-left",`float: left;
`],["float-none",`float: none;
`]]},{url:"https://tailwindcss.com/docs/clear",entry:"Clear",description:"Utilities for controlling the wrapping of content around an element.",parameters:[["clear-start",`clear: inline-start;
`],["clear-end",`clear: inline-end;
`],["clear-left",`clear: left;
`],["clear-right",`clear: right;
`],["clear-both",`clear: both;
`],["clear-none",`clear: none;
`]]},{url:"https://tailwindcss.com/docs/isolation",entry:"Isolation",description:"Utilities for controlling whether an element should explicitly create a new stacking context.",parameters:[["isolate",`isolation: isolate;
`],["isolation-auto",`isolation: auto;
`]]},{url:"https://tailwindcss.com/docs/object-fit",entry:"Object Fit",description:"Utilities for controlling how a replaced element's content should be resized.",parameters:[["object-contain",`object-fit: contain;
`],["object-cover",`object-fit: cover;
`],["object-fill",`object-fit: fill;
`],["object-none",`object-fit: none;
`],["object-scale-down",`object-fit: scale-down;
`]]},{url:"https://tailwindcss.com/docs/object-position",entry:"Object Position",description:"Utilities for controlling how a replaced element's content should be positioned within its container.",parameters:[["object-bottom",`object-position: bottom;
`],["object-center",`object-position: center;
`],["object-left",`object-position: left;
`],["object-left-bottom",`object-position: left bottom;
`],["object-left-top",`object-position: left top;
`],["object-right",`object-position: right;
`],["object-right-bottom",`object-position: right bottom;
`],["object-right-top",`object-position: right top;
`],["object-top",`object-position: top;
`]]},{url:"https://tailwindcss.com/docs/overflow",entry:"Overflow",description:"Utilities for controlling how an element handles content that is too large for the container.",parameters:[["overflow-auto",`overflow: auto;
`],["overflow-hidden",`overflow: hidden;
`],["overflow-clip",`overflow: clip;
`],["overflow-visible",`overflow: visible;
`],["overflow-scroll",`overflow: scroll;
`],["overflow-x-auto",`overflow-x: auto;
`],["overflow-y-auto",`overflow-y: auto;
`],["overflow-x-hidden",`overflow-x: hidden;
`],["overflow-y-hidden",`overflow-y: hidden;
`],["overflow-x-clip",`overflow-x: clip;
`],["overflow-y-clip",`overflow-y: clip;
`],["overflow-x-visible",`overflow-x: visible;
`],["overflow-y-visible",`overflow-y: visible;
`],["overflow-x-scroll",`overflow-x: scroll;
`],["overflow-y-scroll",`overflow-y: scroll;
`]]},{url:"https://tailwindcss.com/docs/overscroll-behavior",entry:"Overscroll Behavior",description:"Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.",parameters:[["overscroll-auto",`overscroll-behavior: auto;
`],["overscroll-contain",`overscroll-behavior: contain;
`],["overscroll-none",`overscroll-behavior: none;
`],["overscroll-y-auto",`overscroll-behavior-y: auto;
`],["overscroll-y-contain",`overscroll-behavior-y: contain;
`],["overscroll-y-none",`overscroll-behavior-y: none;
`],["overscroll-x-auto",`overscroll-behavior-x: auto;
`],["overscroll-x-contain",`overscroll-behavior-x: contain;
`],["overscroll-x-none",`overscroll-behavior-x: none;
`]]},{url:"https://tailwindcss.com/docs/position",entry:"Position",description:"Utilities for controlling how an element is positioned in the DOM.",parameters:[["static",`position: static;
`],["fixed",`position: fixed;
`],["absolute",`position: absolute;
`],["relative",`position: relative;
`],["sticky",`position: sticky;
`]]},{url:"https://tailwindcss.com/docs/top-right-bottom-left",entry:"Top / Right / Bottom / Left",description:"Utilities for controlling the placement of positioned elements.",parameters:[["inset-0",`inset: 0px;
`],["inset-x-0",`left: 0px;
right: 0px;
`],["inset-y-0",`top: 0px;
bottom: 0px;
`],["start-0",`inset-inline-start: 0px;
`],["end-0",`inset-inline-end: 0px;
`],["top-0",`top: 0px;
`],["right-0",`right: 0px;
`],["bottom-0",`bottom: 0px;
`],["left-0",`left: 0px;
`],["inset-px",`inset: 1px;
`],["inset-x-px",`left: 1px;
right: 1px;
`],["inset-y-px",`top: 1px;
bottom: 1px;
`],["start-px",`inset-inline-start: 1px;
`],["end-px",`inset-inline-end: 1px;
`],["top-px",`top: 1px;
`],["right-px",`right: 1px;
`],["bottom-px",`bottom: 1px;
`],["left-px",`left: 1px;
`],["inset-0.5",`inset: 0.125rem; /* 2px */
`],["inset-x-0.5",`left: 0.125rem; /* 2px */
right: 0.125rem; /* 2px */
`],["inset-y-0.5",`top: 0.125rem; /* 2px */
bottom: 0.125rem; /* 2px */
`],["start-0.5",`inset-inline-start: 0.125rem; /* 2px */
`],["end-0.5",`inset-inline-end: 0.125rem; /* 2px */
`],["top-0.5",`top: 0.125rem; /* 2px */
`],["right-0.5",`right: 0.125rem; /* 2px */
`],["bottom-0.5",`bottom: 0.125rem; /* 2px */
`],["left-0.5",`left: 0.125rem; /* 2px */
`],["inset-1",`inset: 0.25rem; /* 4px */
`],["inset-x-1",`left: 0.25rem; /* 4px */
right: 0.25rem; /* 4px */
`],["inset-y-1",`top: 0.25rem; /* 4px */
bottom: 0.25rem; /* 4px */
`],["start-1",`inset-inline-start: 0.25rem; /* 4px */
`],["end-1",`inset-inline-end: 0.25rem; /* 4px */
`],["top-1",`top: 0.25rem; /* 4px */
`],["right-1",`right: 0.25rem; /* 4px */
`],["bottom-1",`bottom: 0.25rem; /* 4px */
`],["left-1",`left: 0.25rem; /* 4px */
`],["inset-1.5",`inset: 0.375rem; /* 6px */
`],["inset-x-1.5",`left: 0.375rem; /* 6px */
right: 0.375rem; /* 6px */
`],["inset-y-1.5",`top: 0.375rem; /* 6px */
bottom: 0.375rem; /* 6px */
`],["start-1.5",`inset-inline-start: 0.375rem; /* 6px */
`],["end-1.5",`inset-inline-end: 0.375rem; /* 6px */
`],["top-1.5",`top: 0.375rem; /* 6px */
`],["right-1.5",`right: 0.375rem; /* 6px */
`],["bottom-1.5",`bottom: 0.375rem; /* 6px */
`],["left-1.5",`left: 0.375rem; /* 6px */
`],["inset-2",`inset: 0.5rem; /* 8px */
`],["inset-x-2",`left: 0.5rem; /* 8px */
right: 0.5rem; /* 8px */
`],["inset-y-2",`top: 0.5rem; /* 8px */
bottom: 0.5rem; /* 8px */
`],["start-2",`inset-inline-start: 0.5rem; /* 8px */
`],["end-2",`inset-inline-end: 0.5rem; /* 8px */
`],["top-2",`top: 0.5rem; /* 8px */
`],["right-2",`right: 0.5rem; /* 8px */
`],["bottom-2",`bottom: 0.5rem; /* 8px */
`],["left-2",`left: 0.5rem; /* 8px */
`],["inset-2.5",`inset: 0.625rem; /* 10px */
`],["inset-x-2.5",`left: 0.625rem; /* 10px */
right: 0.625rem; /* 10px */
`],["inset-y-2.5",`top: 0.625rem; /* 10px */
bottom: 0.625rem; /* 10px */
`],["start-2.5",`inset-inline-start: 0.625rem; /* 10px */
`],["end-2.5",`inset-inline-end: 0.625rem; /* 10px */
`],["top-2.5",`top: 0.625rem; /* 10px */
`],["right-2.5",`right: 0.625rem; /* 10px */
`],["bottom-2.5",`bottom: 0.625rem; /* 10px */
`],["left-2.5",`left: 0.625rem; /* 10px */
`],["inset-3",`inset: 0.75rem; /* 12px */
`],["inset-x-3",`left: 0.75rem; /* 12px */
right: 0.75rem; /* 12px */
`],["inset-y-3",`top: 0.75rem; /* 12px */
bottom: 0.75rem; /* 12px */
`],["start-3",`inset-inline-start: 0.75rem; /* 12px */
`],["end-3",`inset-inline-end: 0.75rem; /* 12px */
`],["top-3",`top: 0.75rem; /* 12px */
`],["right-3",`right: 0.75rem; /* 12px */
`],["bottom-3",`bottom: 0.75rem; /* 12px */
`],["left-3",`left: 0.75rem; /* 12px */
`],["inset-3.5",`inset: 0.875rem; /* 14px */
`],["inset-x-3.5",`left: 0.875rem; /* 14px */
right: 0.875rem; /* 14px */
`],["inset-y-3.5",`top: 0.875rem; /* 14px */
bottom: 0.875rem; /* 14px */
`],["start-3.5",`inset-inline-start: 0.875rem; /* 14px */
`],["end-3.5",`inset-inline-end: 0.875rem; /* 14px */
`],["top-3.5",`top: 0.875rem; /* 14px */
`],["right-3.5",`right: 0.875rem; /* 14px */
`],["bottom-3.5",`bottom: 0.875rem; /* 14px */
`],["left-3.5",`left: 0.875rem; /* 14px */
`],["inset-4",`inset: 1rem; /* 16px */
`],["inset-x-4",`left: 1rem; /* 16px */
right: 1rem; /* 16px */
`],["inset-y-4",`top: 1rem; /* 16px */
bottom: 1rem; /* 16px */
`],["start-4",`inset-inline-start: 1rem; /* 16px */
`],["end-4",`inset-inline-end: 1rem; /* 16px */
`],["top-4",`top: 1rem; /* 16px */
`],["right-4",`right: 1rem; /* 16px */
`],["bottom-4",`bottom: 1rem; /* 16px */
`],["left-4",`left: 1rem; /* 16px */
`],["inset-5",`inset: 1.25rem; /* 20px */
`],["inset-x-5",`left: 1.25rem; /* 20px */
right: 1.25rem; /* 20px */
`],["inset-y-5",`top: 1.25rem; /* 20px */
bottom: 1.25rem; /* 20px */
`],["start-5",`inset-inline-start: 1.25rem; /* 20px */
`],["end-5",`inset-inline-end: 1.25rem; /* 20px */
`],["top-5",`top: 1.25rem; /* 20px */
`],["right-5",`right: 1.25rem; /* 20px */
`],["bottom-5",`bottom: 1.25rem; /* 20px */
`],["left-5",`left: 1.25rem; /* 20px */
`],["inset-6",`inset: 1.5rem; /* 24px */
`],["inset-x-6",`left: 1.5rem; /* 24px */
right: 1.5rem; /* 24px */
`],["inset-y-6",`top: 1.5rem; /* 24px */
bottom: 1.5rem; /* 24px */
`],["start-6",`inset-inline-start: 1.5rem; /* 24px */
`],["end-6",`inset-inline-end: 1.5rem; /* 24px */
`],["top-6",`top: 1.5rem; /* 24px */
`],["right-6",`right: 1.5rem; /* 24px */
`],["bottom-6",`bottom: 1.5rem; /* 24px */
`],["left-6",`left: 1.5rem; /* 24px */
`],["inset-7",`inset: 1.75rem; /* 28px */
`],["inset-x-7",`left: 1.75rem; /* 28px */
right: 1.75rem; /* 28px */
`],["inset-y-7",`top: 1.75rem; /* 28px */
bottom: 1.75rem; /* 28px */
`],["start-7",`inset-inline-start: 1.75rem; /* 28px */
`],["end-7",`inset-inline-end: 1.75rem; /* 28px */
`],["top-7",`top: 1.75rem; /* 28px */
`],["right-7",`right: 1.75rem; /* 28px */
`],["bottom-7",`bottom: 1.75rem; /* 28px */
`],["left-7",`left: 1.75rem; /* 28px */
`],["inset-8",`inset: 2rem; /* 32px */
`],["inset-x-8",`left: 2rem; /* 32px */
right: 2rem; /* 32px */
`],["inset-y-8",`top: 2rem; /* 32px */
bottom: 2rem; /* 32px */
`],["start-8",`inset-inline-start: 2rem; /* 32px */
`],["end-8",`inset-inline-end: 2rem; /* 32px */
`],["top-8",`top: 2rem; /* 32px */
`],["right-8",`right: 2rem; /* 32px */
`],["bottom-8",`bottom: 2rem; /* 32px */
`],["left-8",`left: 2rem; /* 32px */
`],["inset-9",`inset: 2.25rem; /* 36px */
`],["inset-x-9",`left: 2.25rem; /* 36px */
right: 2.25rem; /* 36px */
`],["inset-y-9",`top: 2.25rem; /* 36px */
bottom: 2.25rem; /* 36px */
`],["start-9",`inset-inline-start: 2.25rem; /* 36px */
`],["end-9",`inset-inline-end: 2.25rem; /* 36px */
`],["top-9",`top: 2.25rem; /* 36px */
`],["right-9",`right: 2.25rem; /* 36px */
`],["bottom-9",`bottom: 2.25rem; /* 36px */
`],["left-9",`left: 2.25rem; /* 36px */
`],["inset-10",`inset: 2.5rem; /* 40px */
`],["inset-x-10",`left: 2.5rem; /* 40px */
right: 2.5rem; /* 40px */
`],["inset-y-10",`top: 2.5rem; /* 40px */
bottom: 2.5rem; /* 40px */
`],["start-10",`inset-inline-start: 2.5rem; /* 40px */
`],["end-10",`inset-inline-end: 2.5rem; /* 40px */
`],["top-10",`top: 2.5rem; /* 40px */
`],["right-10",`right: 2.5rem; /* 40px */
`],["bottom-10",`bottom: 2.5rem; /* 40px */
`],["left-10",`left: 2.5rem; /* 40px */
`],["inset-11",`inset: 2.75rem; /* 44px */
`],["inset-x-11",`left: 2.75rem; /* 44px */
right: 2.75rem; /* 44px */
`],["inset-y-11",`top: 2.75rem; /* 44px */
bottom: 2.75rem; /* 44px */
`],["start-11",`inset-inline-start: 2.75rem; /* 44px */
`],["end-11",`inset-inline-end: 2.75rem; /* 44px */
`],["top-11",`top: 2.75rem; /* 44px */
`],["right-11",`right: 2.75rem; /* 44px */
`],["bottom-11",`bottom: 2.75rem; /* 44px */
`],["left-11",`left: 2.75rem; /* 44px */
`],["inset-12",`inset: 3rem; /* 48px */
`],["inset-x-12",`left: 3rem; /* 48px */
right: 3rem; /* 48px */
`],["inset-y-12",`top: 3rem; /* 48px */
bottom: 3rem; /* 48px */
`],["start-12",`inset-inline-start: 3rem; /* 48px */
`],["end-12",`inset-inline-end: 3rem; /* 48px */
`],["top-12",`top: 3rem; /* 48px */
`],["right-12",`right: 3rem; /* 48px */
`],["bottom-12",`bottom: 3rem; /* 48px */
`],["left-12",`left: 3rem; /* 48px */
`],["inset-14",`inset: 3.5rem; /* 56px */
`],["inset-x-14",`left: 3.5rem; /* 56px */
right: 3.5rem; /* 56px */
`],["inset-y-14",`top: 3.5rem; /* 56px */
bottom: 3.5rem; /* 56px */
`],["start-14",`inset-inline-start: 3.5rem; /* 56px */
`],["end-14",`inset-inline-end: 3.5rem; /* 56px */
`],["top-14",`top: 3.5rem; /* 56px */
`],["right-14",`right: 3.5rem; /* 56px */
`],["bottom-14",`bottom: 3.5rem; /* 56px */
`],["left-14",`left: 3.5rem; /* 56px */
`],["inset-16",`inset: 4rem; /* 64px */
`],["inset-x-16",`left: 4rem; /* 64px */
right: 4rem; /* 64px */
`],["inset-y-16",`top: 4rem; /* 64px */
bottom: 4rem; /* 64px */
`],["start-16",`inset-inline-start: 4rem; /* 64px */
`],["end-16",`inset-inline-end: 4rem; /* 64px */
`],["top-16",`top: 4rem; /* 64px */
`],["right-16",`right: 4rem; /* 64px */
`],["bottom-16",`bottom: 4rem; /* 64px */
`],["left-16",`left: 4rem; /* 64px */
`],["inset-20",`inset: 5rem; /* 80px */
`],["inset-x-20",`left: 5rem; /* 80px */
right: 5rem; /* 80px */
`],["inset-y-20",`top: 5rem; /* 80px */
bottom: 5rem; /* 80px */
`],["start-20",`inset-inline-start: 5rem; /* 80px */
`],["end-20",`inset-inline-end: 5rem; /* 80px */
`],["top-20",`top: 5rem; /* 80px */
`],["right-20",`right: 5rem; /* 80px */
`],["bottom-20",`bottom: 5rem; /* 80px */
`],["left-20",`left: 5rem; /* 80px */
`],["inset-24",`inset: 6rem; /* 96px */
`],["inset-x-24",`left: 6rem; /* 96px */
right: 6rem; /* 96px */
`],["inset-y-24",`top: 6rem; /* 96px */
bottom: 6rem; /* 96px */
`],["start-24",`inset-inline-start: 6rem; /* 96px */
`],["end-24",`inset-inline-end: 6rem; /* 96px */
`],["top-24",`top: 6rem; /* 96px */
`],["right-24",`right: 6rem; /* 96px */
`],["bottom-24",`bottom: 6rem; /* 96px */
`],["left-24",`left: 6rem; /* 96px */
`],["inset-28",`inset: 7rem; /* 112px */
`],["inset-x-28",`left: 7rem; /* 112px */
right: 7rem; /* 112px */
`],["inset-y-28",`top: 7rem; /* 112px */
bottom: 7rem; /* 112px */
`],["start-28",`inset-inline-start: 7rem; /* 112px */
`],["end-28",`inset-inline-end: 7rem; /* 112px */
`],["top-28",`top: 7rem; /* 112px */
`],["right-28",`right: 7rem; /* 112px */
`],["bottom-28",`bottom: 7rem; /* 112px */
`],["left-28",`left: 7rem; /* 112px */
`],["inset-32",`inset: 8rem; /* 128px */
`],["inset-x-32",`left: 8rem; /* 128px */
right: 8rem; /* 128px */
`],["inset-y-32",`top: 8rem; /* 128px */
bottom: 8rem; /* 128px */
`],["start-32",`inset-inline-start: 8rem; /* 128px */
`],["end-32",`inset-inline-end: 8rem; /* 128px */
`],["top-32",`top: 8rem; /* 128px */
`],["right-32",`right: 8rem; /* 128px */
`],["bottom-32",`bottom: 8rem; /* 128px */
`],["left-32",`left: 8rem; /* 128px */
`],["inset-36",`inset: 9rem; /* 144px */
`],["inset-x-36",`left: 9rem; /* 144px */
right: 9rem; /* 144px */
`],["inset-y-36",`top: 9rem; /* 144px */
bottom: 9rem; /* 144px */
`],["start-36",`inset-inline-start: 9rem; /* 144px */
`],["end-36",`inset-inline-end: 9rem; /* 144px */
`],["top-36",`top: 9rem; /* 144px */
`],["right-36",`right: 9rem; /* 144px */
`],["bottom-36",`bottom: 9rem; /* 144px */
`],["left-36",`left: 9rem; /* 144px */
`],["inset-40",`inset: 10rem; /* 160px */
`],["inset-x-40",`left: 10rem; /* 160px */
right: 10rem; /* 160px */
`],["inset-y-40",`top: 10rem; /* 160px */
bottom: 10rem; /* 160px */
`],["start-40",`inset-inline-start: 10rem; /* 160px */
`],["end-40",`inset-inline-end: 10rem; /* 160px */
`],["top-40",`top: 10rem; /* 160px */
`],["right-40",`right: 10rem; /* 160px */
`],["bottom-40",`bottom: 10rem; /* 160px */
`],["left-40",`left: 10rem; /* 160px */
`],["inset-44",`inset: 11rem; /* 176px */
`],["inset-x-44",`left: 11rem; /* 176px */
right: 11rem; /* 176px */
`],["inset-y-44",`top: 11rem; /* 176px */
bottom: 11rem; /* 176px */
`],["start-44",`inset-inline-start: 11rem; /* 176px */
`],["end-44",`inset-inline-end: 11rem; /* 176px */
`],["top-44",`top: 11rem; /* 176px */
`],["right-44",`right: 11rem; /* 176px */
`],["bottom-44",`bottom: 11rem; /* 176px */
`],["left-44",`left: 11rem; /* 176px */
`],["inset-48",`inset: 12rem; /* 192px */
`],["inset-x-48",`left: 12rem; /* 192px */
right: 12rem; /* 192px */
`],["inset-y-48",`top: 12rem; /* 192px */
bottom: 12rem; /* 192px */
`],["start-48",`inset-inline-start: 12rem; /* 192px */
`],["end-48",`inset-inline-end: 12rem; /* 192px */
`],["top-48",`top: 12rem; /* 192px */
`],["right-48",`right: 12rem; /* 192px */
`],["bottom-48",`bottom: 12rem; /* 192px */
`],["left-48",`left: 12rem; /* 192px */
`],["inset-52",`inset: 13rem; /* 208px */
`],["inset-x-52",`left: 13rem; /* 208px */
right: 13rem; /* 208px */
`],["inset-y-52",`top: 13rem; /* 208px */
bottom: 13rem; /* 208px */
`],["start-52",`inset-inline-start: 13rem; /* 208px */
`],["end-52",`inset-inline-end: 13rem; /* 208px */
`],["top-52",`top: 13rem; /* 208px */
`],["right-52",`right: 13rem; /* 208px */
`],["bottom-52",`bottom: 13rem; /* 208px */
`],["left-52",`left: 13rem; /* 208px */
`],["inset-56",`inset: 14rem; /* 224px */
`],["inset-x-56",`left: 14rem; /* 224px */
right: 14rem; /* 224px */
`],["inset-y-56",`top: 14rem; /* 224px */
bottom: 14rem; /* 224px */
`],["start-56",`inset-inline-start: 14rem; /* 224px */
`],["end-56",`inset-inline-end: 14rem; /* 224px */
`],["top-56",`top: 14rem; /* 224px */
`],["right-56",`right: 14rem; /* 224px */
`],["bottom-56",`bottom: 14rem; /* 224px */
`],["left-56",`left: 14rem; /* 224px */
`],["inset-60",`inset: 15rem; /* 240px */
`],["inset-x-60",`left: 15rem; /* 240px */
right: 15rem; /* 240px */
`],["inset-y-60",`top: 15rem; /* 240px */
bottom: 15rem; /* 240px */
`],["start-60",`inset-inline-start: 15rem; /* 240px */
`],["end-60",`inset-inline-end: 15rem; /* 240px */
`],["top-60",`top: 15rem; /* 240px */
`],["right-60",`right: 15rem; /* 240px */
`],["bottom-60",`bottom: 15rem; /* 240px */
`],["left-60",`left: 15rem; /* 240px */
`],["inset-64",`inset: 16rem; /* 256px */
`],["inset-x-64",`left: 16rem; /* 256px */
right: 16rem; /* 256px */
`],["inset-y-64",`top: 16rem; /* 256px */
bottom: 16rem; /* 256px */
`],["start-64",`inset-inline-start: 16rem; /* 256px */
`],["end-64",`inset-inline-end: 16rem; /* 256px */
`],["top-64",`top: 16rem; /* 256px */
`],["right-64",`right: 16rem; /* 256px */
`],["bottom-64",`bottom: 16rem; /* 256px */
`],["left-64",`left: 16rem; /* 256px */
`],["inset-72",`inset: 18rem; /* 288px */
`],["inset-x-72",`left: 18rem; /* 288px */
right: 18rem; /* 288px */
`],["inset-y-72",`top: 18rem; /* 288px */
bottom: 18rem; /* 288px */
`],["start-72",`inset-inline-start: 18rem; /* 288px */
`],["end-72",`inset-inline-end: 18rem; /* 288px */
`],["top-72",`top: 18rem; /* 288px */
`],["right-72",`right: 18rem; /* 288px */
`],["bottom-72",`bottom: 18rem; /* 288px */
`],["left-72",`left: 18rem; /* 288px */
`],["inset-80",`inset: 20rem; /* 320px */
`],["inset-x-80",`left: 20rem; /* 320px */
right: 20rem; /* 320px */
`],["inset-y-80",`top: 20rem; /* 320px */
bottom: 20rem; /* 320px */
`],["start-80",`inset-inline-start: 20rem; /* 320px */
`],["end-80",`inset-inline-end: 20rem; /* 320px */
`],["top-80",`top: 20rem; /* 320px */
`],["right-80",`right: 20rem; /* 320px */
`],["bottom-80",`bottom: 20rem; /* 320px */
`],["left-80",`left: 20rem; /* 320px */
`],["inset-96",`inset: 24rem; /* 384px */
`],["inset-x-96",`left: 24rem; /* 384px */
right: 24rem; /* 384px */
`],["inset-y-96",`top: 24rem; /* 384px */
bottom: 24rem; /* 384px */
`],["start-96",`inset-inline-start: 24rem; /* 384px */
`],["end-96",`inset-inline-end: 24rem; /* 384px */
`],["top-96",`top: 24rem; /* 384px */
`],["right-96",`right: 24rem; /* 384px */
`],["bottom-96",`bottom: 24rem; /* 384px */
`],["left-96",`left: 24rem; /* 384px */
`],["inset-auto",`inset: auto;
`],["inset-1/2",`inset: 50%;
`],["inset-1/3",`inset: 33.333333%;
`],["inset-2/3",`inset: 66.666667%;
`],["inset-1/4",`inset: 25%;
`],["inset-2/4",`inset: 50%;
`],["inset-3/4",`inset: 75%;
`],["inset-full",`inset: 100%;
`],["inset-x-auto",`left: auto;
right: auto;
`],["inset-x-1/2",`left: 50%;
right: 50%;
`],["inset-x-1/3",`left: 33.333333%;
right: 33.333333%;
`],["inset-x-2/3",`left: 66.666667%;
right: 66.666667%;
`],["inset-x-1/4",`left: 25%;
right: 25%;
`],["inset-x-2/4",`left: 50%;
right: 50%;
`],["inset-x-3/4",`left: 75%;
right: 75%;
`],["inset-x-full",`left: 100%;
right: 100%;
`],["inset-y-auto",`top: auto;
bottom: auto;
`],["inset-y-1/2",`top: 50%;
bottom: 50%;
`],["inset-y-1/3",`top: 33.333333%;
bottom: 33.333333%;
`],["inset-y-2/3",`top: 66.666667%;
bottom: 66.666667%;
`],["inset-y-1/4",`top: 25%;
bottom: 25%;
`],["inset-y-2/4",`top: 50%;
bottom: 50%;
`],["inset-y-3/4",`top: 75%;
bottom: 75%;
`],["inset-y-full",`top: 100%;
bottom: 100%;
`],["start-auto",`inset-inline-start: auto;
`],["start-1/2",`inset-inline-start: 50%;
`],["start-1/3",`inset-inline-start: 33.333333%;
`],["start-2/3",`inset-inline-start: 66.666667%;
`],["start-1/4",`inset-inline-start: 25%;
`],["start-2/4",`inset-inline-start: 50%;
`],["start-3/4",`inset-inline-start: 75%;
`],["start-full",`inset-inline-start: 100%;
`],["end-auto",`inset-inline-end: auto;
`],["end-1/2",`inset-inline-end: 50%;
`],["end-1/3",`inset-inline-end: 33.333333%;
`],["end-2/3",`inset-inline-end: 66.666667%;
`],["end-1/4",`inset-inline-end: 25%;
`],["end-2/4",`inset-inline-end: 50%;
`],["end-3/4",`inset-inline-end: 75%;
`],["end-full",`inset-inline-end: 100%;
`],["top-auto",`top: auto;
`],["top-1/2",`top: 50%;
`],["top-1/3",`top: 33.333333%;
`],["top-2/3",`top: 66.666667%;
`],["top-1/4",`top: 25%;
`],["top-2/4",`top: 50%;
`],["top-3/4",`top: 75%;
`],["top-full",`top: 100%;
`],["right-auto",`right: auto;
`],["right-1/2",`right: 50%;
`],["right-1/3",`right: 33.333333%;
`],["right-2/3",`right: 66.666667%;
`],["right-1/4",`right: 25%;
`],["right-2/4",`right: 50%;
`],["right-3/4",`right: 75%;
`],["right-full",`right: 100%;
`],["bottom-auto",`bottom: auto;
`],["bottom-1/2",`bottom: 50%;
`],["bottom-1/3",`bottom: 33.333333%;
`],["bottom-2/3",`bottom: 66.666667%;
`],["bottom-1/4",`bottom: 25%;
`],["bottom-2/4",`bottom: 50%;
`],["bottom-3/4",`bottom: 75%;
`],["bottom-full",`bottom: 100%;
`],["left-auto",`left: auto;
`],["left-1/2",`left: 50%;
`],["left-1/3",`left: 33.333333%;
`],["left-2/3",`left: 66.666667%;
`],["left-1/4",`left: 25%;
`],["left-2/4",`left: 50%;
`],["left-3/4",`left: 75%;
`],["left-full",`left: 100%;
`]]},{url:"https://tailwindcss.com/docs/visibility",entry:"Visibility",description:"Utilities for controlling the visibility of an element.",parameters:[["visible",`visibility: visible;
`],["invisible",`visibility: hidden;
`],["collapse",`visibility: collapse;
`]]},{url:"https://tailwindcss.com/docs/z-index",entry:"Z-Index",description:"Utilities for controlling the stack order of an element.",parameters:[["z-0",`z-index: 0;
`],["z-10",`z-index: 10;
`],["z-20",`z-index: 20;
`],["z-30",`z-index: 30;
`],["z-40",`z-index: 40;
`],["z-50",`z-index: 50;
`],["z-auto",`z-index: auto;
`]]}],E={Layout:"Layout",FlexboxAndGrid:"Flexbox & Grid",Spacing:"Spacing",Sizing:"Sizing",Typography:"Typography",Backgrounds:"Backgrounds",Borders:"Borders",Effects:"Effects",Filters:"Filters",Tables:"Tables",TransitionsAndAnimation:"Transitions & Animation",Transforms:"Transforms",Interactivity:"Interactivity",SVG:"SVG",Accessibility:"Accessibility"},us=[{url:"https://tailwindcss.com/docs/flex-basis",entry:"Flex Basis",description:"Utilities for controlling the initial size of flex items.",parameters:[["basis-0",`flex-basis: 0px;
`],["basis-1",`flex-basis: 0.25rem; /* 4px */
`],["basis-2",`flex-basis: 0.5rem; /* 8px */
`],["basis-3",`flex-basis: 0.75rem; /* 12px */
`],["basis-4",`flex-basis: 1rem; /* 16px */
`],["basis-5",`flex-basis: 1.25rem; /* 20px */
`],["basis-6",`flex-basis: 1.5rem; /* 24px */
`],["basis-7",`flex-basis: 1.75rem; /* 28px */
`],["basis-8",`flex-basis: 2rem; /* 32px */
`],["basis-9",`flex-basis: 2.25rem; /* 36px */
`],["basis-10",`flex-basis: 2.5rem; /* 40px */
`],["basis-11",`flex-basis: 2.75rem; /* 44px */
`],["basis-12",`flex-basis: 3rem; /* 48px */
`],["basis-14",`flex-basis: 3.5rem; /* 56px */
`],["basis-16",`flex-basis: 4rem; /* 64px */
`],["basis-20",`flex-basis: 5rem; /* 80px */
`],["basis-24",`flex-basis: 6rem; /* 96px */
`],["basis-28",`flex-basis: 7rem; /* 112px */
`],["basis-32",`flex-basis: 8rem; /* 128px */
`],["basis-36",`flex-basis: 9rem; /* 144px */
`],["basis-40",`flex-basis: 10rem; /* 160px */
`],["basis-44",`flex-basis: 11rem; /* 176px */
`],["basis-48",`flex-basis: 12rem; /* 192px */
`],["basis-52",`flex-basis: 13rem; /* 208px */
`],["basis-56",`flex-basis: 14rem; /* 224px */
`],["basis-60",`flex-basis: 15rem; /* 240px */
`],["basis-64",`flex-basis: 16rem; /* 256px */
`],["basis-72",`flex-basis: 18rem; /* 288px */
`],["basis-80",`flex-basis: 20rem; /* 320px */
`],["basis-96",`flex-basis: 24rem; /* 384px */
`],["basis-auto",`flex-basis: auto;
`],["basis-px",`flex-basis: 1px;
`],["basis-0.5",`flex-basis: 0.125rem; /* 2px */
`],["basis-1.5",`flex-basis: 0.375rem; /* 6px */
`],["basis-2.5",`flex-basis: 0.625rem; /* 10px */
`],["basis-3.5",`flex-basis: 0.875rem; /* 14px */
`],["basis-1/2",`flex-basis: 50%;
`],["basis-1/3",`flex-basis: 33.333333%;
`],["basis-2/3",`flex-basis: 66.666667%;
`],["basis-1/4",`flex-basis: 25%;
`],["basis-2/4",`flex-basis: 50%;
`],["basis-3/4",`flex-basis: 75%;
`],["basis-1/5",`flex-basis: 20%;
`],["basis-2/5",`flex-basis: 40%;
`],["basis-3/5",`flex-basis: 60%;
`],["basis-4/5",`flex-basis: 80%;
`],["basis-1/6",`flex-basis: 16.666667%;
`],["basis-2/6",`flex-basis: 33.333333%;
`],["basis-3/6",`flex-basis: 50%;
`],["basis-4/6",`flex-basis: 66.666667%;
`],["basis-5/6",`flex-basis: 83.333333%;
`],["basis-1/12",`flex-basis: 8.333333%;
`],["basis-2/12",`flex-basis: 16.666667%;
`],["basis-3/12",`flex-basis: 25%;
`],["basis-4/12",`flex-basis: 33.333333%;
`],["basis-5/12",`flex-basis: 41.666667%;
`],["basis-6/12",`flex-basis: 50%;
`],["basis-7/12",`flex-basis: 58.333333%;
`],["basis-8/12",`flex-basis: 66.666667%;
`],["basis-9/12",`flex-basis: 75%;
`],["basis-10/12",`flex-basis: 83.333333%;
`],["basis-11/12",`flex-basis: 91.666667%;
`],["basis-full",`flex-basis: 100%;
`]]},{url:"https://tailwindcss.com/docs/flex-direction",entry:"Flex Direction",description:"Utilities for controlling the direction of flex items.",parameters:[["flex-row",`flex-direction: row;
`],["flex-row-reverse",`flex-direction: row-reverse;
`],["flex-col",`flex-direction: column;
`],["flex-col-reverse",`flex-direction: column-reverse;
`]]},{url:"https://tailwindcss.com/docs/flex-wrap",entry:"Flex Wrap",description:"Utilities for controlling how flex items wrap.",parameters:[["flex-wrap",`flex-wrap: wrap;
`],["flex-wrap-reverse",`flex-wrap: wrap-reverse;
`],["flex-nowrap",`flex-wrap: nowrap;
`]]},{url:"https://tailwindcss.com/docs/flex",entry:"Flex",description:"Utilities for controlling how flex items both grow and shrink.",parameters:[["flex-1",`flex: 1 1 0%;
`],["flex-auto",`flex: 1 1 auto;
`],["flex-initial",`flex: 0 1 auto;
`],["flex-none",`flex: none;
`]]},{url:"https://tailwindcss.com/docs/flex-grow",entry:"Flex Grow",description:"Utilities for controlling how flex items grow.",parameters:[["grow",`flex-grow: 1;
`],["grow-0",`flex-grow: 0;
`]]},{url:"https://tailwindcss.com/docs/flex-shrink",entry:"Flex Shrink",description:"Utilities for controlling how flex items shrink.",parameters:[["shrink",`flex-shrink: 1;
`],["shrink-0",`flex-shrink: 0;
`]]},{url:"https://tailwindcss.com/docs/order",entry:"Order",description:"Utilities for controlling the order of flex and grid items.",parameters:[["order-1",`order: 1;
`],["order-2",`order: 2;
`],["order-3",`order: 3;
`],["order-4",`order: 4;
`],["order-5",`order: 5;
`],["order-6",`order: 6;
`],["order-7",`order: 7;
`],["order-8",`order: 8;
`],["order-9",`order: 9;
`],["order-10",`order: 10;
`],["order-11",`order: 11;
`],["order-12",`order: 12;
`],["order-first",`order: -9999;
`],["order-last",`order: 9999;
`],["order-none",`order: 0;
`]]},{url:"https://tailwindcss.com/docs/grid-template-columns",entry:"Grid Template Columns",description:"Utilities for specifying the columns in a grid layout.",parameters:[["grid-cols-1",`grid-template-columns: repeat(1, minmax(0, 1fr));
`],["grid-cols-2",`grid-template-columns: repeat(2, minmax(0, 1fr));
`],["grid-cols-3",`grid-template-columns: repeat(3, minmax(0, 1fr));
`],["grid-cols-4",`grid-template-columns: repeat(4, minmax(0, 1fr));
`],["grid-cols-5",`grid-template-columns: repeat(5, minmax(0, 1fr));
`],["grid-cols-6",`grid-template-columns: repeat(6, minmax(0, 1fr));
`],["grid-cols-7",`grid-template-columns: repeat(7, minmax(0, 1fr));
`],["grid-cols-8",`grid-template-columns: repeat(8, minmax(0, 1fr));
`],["grid-cols-9",`grid-template-columns: repeat(9, minmax(0, 1fr));
`],["grid-cols-10",`grid-template-columns: repeat(10, minmax(0, 1fr));
`],["grid-cols-11",`grid-template-columns: repeat(11, minmax(0, 1fr));
`],["grid-cols-12",`grid-template-columns: repeat(12, minmax(0, 1fr));
`],["grid-cols-none",`grid-template-columns: none;
`],["grid-cols-subgrid",`grid-template-columns: subgrid;
`]]},{url:"https://tailwindcss.com/docs/grid-column",entry:"Grid Column Start / End",description:"Utilities for controlling how elements are sized and placed across grid columns.",parameters:[["col-auto",`grid-column: auto;
`],["col-span-1",`grid-column: span 1 / span 1;
`],["col-span-2",`grid-column: span 2 / span 2;
`],["col-span-3",`grid-column: span 3 / span 3;
`],["col-span-4",`grid-column: span 4 / span 4;
`],["col-span-5",`grid-column: span 5 / span 5;
`],["col-span-6",`grid-column: span 6 / span 6;
`],["col-span-7",`grid-column: span 7 / span 7;
`],["col-span-8",`grid-column: span 8 / span 8;
`],["col-span-9",`grid-column: span 9 / span 9;
`],["col-span-10",`grid-column: span 10 / span 10;
`],["col-span-11",`grid-column: span 11 / span 11;
`],["col-span-12",`grid-column: span 12 / span 12;
`],["col-span-full",`grid-column: 1 / -1;
`],["col-start-1",`grid-column-start: 1;
`],["col-start-2",`grid-column-start: 2;
`],["col-start-3",`grid-column-start: 3;
`],["col-start-4",`grid-column-start: 4;
`],["col-start-5",`grid-column-start: 5;
`],["col-start-6",`grid-column-start: 6;
`],["col-start-7",`grid-column-start: 7;
`],["col-start-8",`grid-column-start: 8;
`],["col-start-9",`grid-column-start: 9;
`],["col-start-10",`grid-column-start: 10;
`],["col-start-11",`grid-column-start: 11;
`],["col-start-12",`grid-column-start: 12;
`],["col-start-13",`grid-column-start: 13;
`],["col-start-auto",`grid-column-start: auto;
`],["col-end-1",`grid-column-end: 1;
`],["col-end-2",`grid-column-end: 2;
`],["col-end-3",`grid-column-end: 3;
`],["col-end-4",`grid-column-end: 4;
`],["col-end-5",`grid-column-end: 5;
`],["col-end-6",`grid-column-end: 6;
`],["col-end-7",`grid-column-end: 7;
`],["col-end-8",`grid-column-end: 8;
`],["col-end-9",`grid-column-end: 9;
`],["col-end-10",`grid-column-end: 10;
`],["col-end-11",`grid-column-end: 11;
`],["col-end-12",`grid-column-end: 12;
`],["col-end-13",`grid-column-end: 13;
`],["col-end-auto",`grid-column-end: auto;
`]]},{url:"https://tailwindcss.com/docs/grid-template-rows",entry:"Grid Template Rows",description:"Utilities for specifying the rows in a grid layout.",parameters:[["grid-rows-1",`grid-template-rows: repeat(1, minmax(0, 1fr));
`],["grid-rows-2",`grid-template-rows: repeat(2, minmax(0, 1fr));
`],["grid-rows-3",`grid-template-rows: repeat(3, minmax(0, 1fr));
`],["grid-rows-4",`grid-template-rows: repeat(4, minmax(0, 1fr));
`],["grid-rows-5",`grid-template-rows: repeat(5, minmax(0, 1fr));
`],["grid-rows-6",`grid-template-rows: repeat(6, minmax(0, 1fr));
`],["grid-rows-7",`grid-template-rows: repeat(7, minmax(0, 1fr));
`],["grid-rows-8",`grid-template-rows: repeat(8, minmax(0, 1fr));
`],["grid-rows-9",`grid-template-rows: repeat(9, minmax(0, 1fr));
`],["grid-rows-10",`grid-template-rows: repeat(10, minmax(0, 1fr));
`],["grid-rows-11",`grid-template-rows: repeat(11, minmax(0, 1fr));
`],["grid-rows-12",`grid-template-rows: repeat(12, minmax(0, 1fr));
`],["grid-rows-none",`grid-template-rows: none;
`],["grid-rows-subgrid",`grid-template-rows: subgrid;
`]]},{url:"https://tailwindcss.com/docs/grid-row",entry:"Grid Row Start / End",description:"Utilities for controlling how elements are sized and placed across grid rows.",parameters:[["row-auto",`grid-row: auto;
`],["row-span-1",`grid-row: span 1 / span 1;
`],["row-span-2",`grid-row: span 2 / span 2;
`],["row-span-3",`grid-row: span 3 / span 3;
`],["row-span-4",`grid-row: span 4 / span 4;
`],["row-span-5",`grid-row: span 5 / span 5;
`],["row-span-6",`grid-row: span 6 / span 6;
`],["row-span-7",`grid-row: span 7 / span 7;
`],["row-span-8",`grid-row: span 8 / span 8;
`],["row-span-9",`grid-row: span 9 / span 9;
`],["row-span-10",`grid-row: span 10 / span 10;
`],["row-span-11",`grid-row: span 11 / span 11;
`],["row-span-12",`grid-row: span 12 / span 12;
`],["row-span-full",`grid-row: 1 / -1;
`],["row-start-1",`grid-row-start: 1;
`],["row-start-2",`grid-row-start: 2;
`],["row-start-3",`grid-row-start: 3;
`],["row-start-4",`grid-row-start: 4;
`],["row-start-5",`grid-row-start: 5;
`],["row-start-6",`grid-row-start: 6;
`],["row-start-7",`grid-row-start: 7;
`],["row-start-8",`grid-row-start: 8;
`],["row-start-9",`grid-row-start: 9;
`],["row-start-10",`grid-row-start: 10;
`],["row-start-11",`grid-row-start: 11;
`],["row-start-12",`grid-row-start: 12;
`],["row-start-13",`grid-row-start: 13;
`],["row-start-auto",`grid-row-start: auto;
`],["row-end-1",`grid-row-end: 1;
`],["row-end-2",`grid-row-end: 2;
`],["row-end-3",`grid-row-end: 3;
`],["row-end-4",`grid-row-end: 4;
`],["row-end-5",`grid-row-end: 5;
`],["row-end-6",`grid-row-end: 6;
`],["row-end-7",`grid-row-end: 7;
`],["row-end-8",`grid-row-end: 8;
`],["row-end-9",`grid-row-end: 9;
`],["row-end-10",`grid-row-end: 10;
`],["row-end-11",`grid-row-end: 11;
`],["row-end-12",`grid-row-end: 12;
`],["row-end-13",`grid-row-end: 13;
`],["row-end-auto",`grid-row-end: auto;
`]]},{url:"https://tailwindcss.com/docs/grid-auto-flow",entry:"Grid Auto Flow",description:"Utilities for controlling how elements in a grid are auto-placed.",parameters:[["grid-flow-row",`grid-auto-flow: row;
`],["grid-flow-col",`grid-auto-flow: column;
`],["grid-flow-dense",`grid-auto-flow: dense;
`],["grid-flow-row-dense",`grid-auto-flow: row dense;
`],["grid-flow-col-dense",`grid-auto-flow: column dense;
`]]},{url:"https://tailwindcss.com/docs/grid-auto-columns",entry:"Grid Auto Columns",description:"Utilities for controlling the size of implicitly-created grid columns.",parameters:[["auto-cols-auto",`grid-auto-columns: auto;
`],["auto-cols-min",`grid-auto-columns: min-content;
`],["auto-cols-max",`grid-auto-columns: max-content;
`],["auto-cols-fr",`grid-auto-columns: minmax(0, 1fr);
`]]},{url:"https://tailwindcss.com/docs/grid-auto-rows",entry:"Grid Auto Rows",description:"Utilities for controlling the size of implicitly-created grid rows.",parameters:[["auto-rows-auto",`grid-auto-rows: auto;
`],["auto-rows-min",`grid-auto-rows: min-content;
`],["auto-rows-max",`grid-auto-rows: max-content;
`],["auto-rows-fr",`grid-auto-rows: minmax(0, 1fr);
`]]},{url:"https://tailwindcss.com/docs/gap",entry:"Gap",description:"Utilities for controlling gutters between grid and flexbox items.",parameters:[["gap-0",`gap: 0px;
`],["gap-x-0",`column-gap: 0px;
`],["gap-y-0",`row-gap: 0px;
`],["gap-px",`gap: 1px;
`],["gap-x-px",`column-gap: 1px;
`],["gap-y-px",`row-gap: 1px;
`],["gap-0.5",`gap: 0.125rem; /* 2px */
`],["gap-x-0.5",`column-gap: 0.125rem; /* 2px */
`],["gap-y-0.5",`row-gap: 0.125rem; /* 2px */
`],["gap-1",`gap: 0.25rem; /* 4px */
`],["gap-x-1",`column-gap: 0.25rem; /* 4px */
`],["gap-y-1",`row-gap: 0.25rem; /* 4px */
`],["gap-1.5",`gap: 0.375rem; /* 6px */
`],["gap-x-1.5",`column-gap: 0.375rem; /* 6px */
`],["gap-y-1.5",`row-gap: 0.375rem; /* 6px */
`],["gap-2",`gap: 0.5rem; /* 8px */
`],["gap-x-2",`column-gap: 0.5rem; /* 8px */
`],["gap-y-2",`row-gap: 0.5rem; /* 8px */
`],["gap-2.5",`gap: 0.625rem; /* 10px */
`],["gap-x-2.5",`column-gap: 0.625rem; /* 10px */
`],["gap-y-2.5",`row-gap: 0.625rem; /* 10px */
`],["gap-3",`gap: 0.75rem; /* 12px */
`],["gap-x-3",`column-gap: 0.75rem; /* 12px */
`],["gap-y-3",`row-gap: 0.75rem; /* 12px */
`],["gap-3.5",`gap: 0.875rem; /* 14px */
`],["gap-x-3.5",`column-gap: 0.875rem; /* 14px */
`],["gap-y-3.5",`row-gap: 0.875rem; /* 14px */
`],["gap-4",`gap: 1rem; /* 16px */
`],["gap-x-4",`column-gap: 1rem; /* 16px */
`],["gap-y-4",`row-gap: 1rem; /* 16px */
`],["gap-5",`gap: 1.25rem; /* 20px */
`],["gap-x-5",`column-gap: 1.25rem; /* 20px */
`],["gap-y-5",`row-gap: 1.25rem; /* 20px */
`],["gap-6",`gap: 1.5rem; /* 24px */
`],["gap-x-6",`column-gap: 1.5rem; /* 24px */
`],["gap-y-6",`row-gap: 1.5rem; /* 24px */
`],["gap-7",`gap: 1.75rem; /* 28px */
`],["gap-x-7",`column-gap: 1.75rem; /* 28px */
`],["gap-y-7",`row-gap: 1.75rem; /* 28px */
`],["gap-8",`gap: 2rem; /* 32px */
`],["gap-x-8",`column-gap: 2rem; /* 32px */
`],["gap-y-8",`row-gap: 2rem; /* 32px */
`],["gap-9",`gap: 2.25rem; /* 36px */
`],["gap-x-9",`column-gap: 2.25rem; /* 36px */
`],["gap-y-9",`row-gap: 2.25rem; /* 36px */
`],["gap-10",`gap: 2.5rem; /* 40px */
`],["gap-x-10",`column-gap: 2.5rem; /* 40px */
`],["gap-y-10",`row-gap: 2.5rem; /* 40px */
`],["gap-11",`gap: 2.75rem; /* 44px */
`],["gap-x-11",`column-gap: 2.75rem; /* 44px */
`],["gap-y-11",`row-gap: 2.75rem; /* 44px */
`],["gap-12",`gap: 3rem; /* 48px */
`],["gap-x-12",`column-gap: 3rem; /* 48px */
`],["gap-y-12",`row-gap: 3rem; /* 48px */
`],["gap-14",`gap: 3.5rem; /* 56px */
`],["gap-x-14",`column-gap: 3.5rem; /* 56px */
`],["gap-y-14",`row-gap: 3.5rem; /* 56px */
`],["gap-16",`gap: 4rem; /* 64px */
`],["gap-x-16",`column-gap: 4rem; /* 64px */
`],["gap-y-16",`row-gap: 4rem; /* 64px */
`],["gap-20",`gap: 5rem; /* 80px */
`],["gap-x-20",`column-gap: 5rem; /* 80px */
`],["gap-y-20",`row-gap: 5rem; /* 80px */
`],["gap-24",`gap: 6rem; /* 96px */
`],["gap-x-24",`column-gap: 6rem; /* 96px */
`],["gap-y-24",`row-gap: 6rem; /* 96px */
`],["gap-28",`gap: 7rem; /* 112px */
`],["gap-x-28",`column-gap: 7rem; /* 112px */
`],["gap-y-28",`row-gap: 7rem; /* 112px */
`],["gap-32",`gap: 8rem; /* 128px */
`],["gap-x-32",`column-gap: 8rem; /* 128px */
`],["gap-y-32",`row-gap: 8rem; /* 128px */
`],["gap-36",`gap: 9rem; /* 144px */
`],["gap-x-36",`column-gap: 9rem; /* 144px */
`],["gap-y-36",`row-gap: 9rem; /* 144px */
`],["gap-40",`gap: 10rem; /* 160px */
`],["gap-x-40",`column-gap: 10rem; /* 160px */
`],["gap-y-40",`row-gap: 10rem; /* 160px */
`],["gap-44",`gap: 11rem; /* 176px */
`],["gap-x-44",`column-gap: 11rem; /* 176px */
`],["gap-y-44",`row-gap: 11rem; /* 176px */
`],["gap-48",`gap: 12rem; /* 192px */
`],["gap-x-48",`column-gap: 12rem; /* 192px */
`],["gap-y-48",`row-gap: 12rem; /* 192px */
`],["gap-52",`gap: 13rem; /* 208px */
`],["gap-x-52",`column-gap: 13rem; /* 208px */
`],["gap-y-52",`row-gap: 13rem; /* 208px */
`],["gap-56",`gap: 14rem; /* 224px */
`],["gap-x-56",`column-gap: 14rem; /* 224px */
`],["gap-y-56",`row-gap: 14rem; /* 224px */
`],["gap-60",`gap: 15rem; /* 240px */
`],["gap-x-60",`column-gap: 15rem; /* 240px */
`],["gap-y-60",`row-gap: 15rem; /* 240px */
`],["gap-64",`gap: 16rem; /* 256px */
`],["gap-x-64",`column-gap: 16rem; /* 256px */
`],["gap-y-64",`row-gap: 16rem; /* 256px */
`],["gap-72",`gap: 18rem; /* 288px */
`],["gap-x-72",`column-gap: 18rem; /* 288px */
`],["gap-y-72",`row-gap: 18rem; /* 288px */
`],["gap-80",`gap: 20rem; /* 320px */
`],["gap-x-80",`column-gap: 20rem; /* 320px */
`],["gap-y-80",`row-gap: 20rem; /* 320px */
`],["gap-96",`gap: 24rem; /* 384px */
`],["gap-x-96",`column-gap: 24rem; /* 384px */
`],["gap-y-96",`row-gap: 24rem; /* 384px */
`]]},{url:"https://tailwindcss.com/docs/justify-content",entry:"Justify Content",description:"Utilities for controlling how flex and grid items are positioned along a container's main axis.",parameters:[["justify-normal",`justify-content: normal;
`],["justify-start",`justify-content: flex-start;
`],["justify-end",`justify-content: flex-end;
`],["justify-center",`justify-content: center;
`],["justify-between",`justify-content: space-between;
`],["justify-around",`justify-content: space-around;
`],["justify-evenly",`justify-content: space-evenly;
`],["justify-stretch",`justify-content: stretch;
`]]},{url:"https://tailwindcss.com/docs/justify-items",entry:"Justify Items",description:"Utilities for controlling how grid items are aligned along their inline axis.",parameters:[["justify-items-start",`justify-items: start;
`],["justify-items-end",`justify-items: end;
`],["justify-items-center",`justify-items: center;
`],["justify-items-stretch",`justify-items: stretch;
`]]},{url:"https://tailwindcss.com/docs/justify-self",entry:"Justify Self",description:"Utilities for controlling how an individual grid item is aligned along its inline axis.",parameters:[["justify-self-auto",`justify-self: auto;
`],["justify-self-start",`justify-self: start;
`],["justify-self-end",`justify-self: end;
`],["justify-self-center",`justify-self: center;
`],["justify-self-stretch",`justify-self: stretch;
`]]},{url:"https://tailwindcss.com/docs/align-content",entry:"Align Content",description:"Utilities for controlling how rows are positioned in multi-row flex and grid containers.",parameters:[["content-normal",`align-content: normal;
`],["content-center",`align-content: center;
`],["content-start",`align-content: flex-start;
`],["content-end",`align-content: flex-end;
`],["content-between",`align-content: space-between;
`],["content-around",`align-content: space-around;
`],["content-evenly",`align-content: space-evenly;
`],["content-baseline",`align-content: baseline;
`],["content-stretch",`align-content: stretch;
`]]},{url:"https://tailwindcss.com/docs/align-items",entry:"Align Items",description:"Utilities for controlling how flex and grid items are positioned along a container's cross axis.",parameters:[["items-start",`align-items: flex-start;
`],["items-end",`align-items: flex-end;
`],["items-center",`align-items: center;
`],["items-baseline",`align-items: baseline;
`],["items-stretch",`align-items: stretch;
`]]},{url:"https://tailwindcss.com/docs/align-self",entry:"Align Self",description:"Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.",parameters:[["self-auto",`align-self: auto;
`],["self-start",`align-self: flex-start;
`],["self-end",`align-self: flex-end;
`],["self-center",`align-self: center;
`],["self-stretch",`align-self: stretch;
`],["self-baseline",`align-self: baseline;
`]]},{url:"https://tailwindcss.com/docs/place-content",entry:"Place Content",description:"Utilities for controlling how content is justified and aligned at the same time.",parameters:[["place-content-center",`place-content: center;
`],["place-content-start",`place-content: start;
`],["place-content-end",`place-content: end;
`],["place-content-between",`place-content: space-between;
`],["place-content-around",`place-content: space-around;
`],["place-content-evenly",`place-content: space-evenly;
`],["place-content-baseline",`place-content: baseline;
`],["place-content-stretch",`place-content: stretch;
`]]},{url:"https://tailwindcss.com/docs/place-items",entry:"Place Items",description:"Utilities for controlling how items are justified and aligned at the same time.",parameters:[["place-items-start",`place-items: start;
`],["place-items-end",`place-items: end;
`],["place-items-center",`place-items: center;
`],["place-items-baseline",`place-items: baseline;
`],["place-items-stretch",`place-items: stretch;
`]]},{url:"https://tailwindcss.com/docs/place-self",entry:"Place Self",description:"Utilities for controlling how an individual item is justified and aligned at the same time.",parameters:[["place-self-auto",`place-self: auto;
`],["place-self-start",`place-self: start;
`],["place-self-end",`place-self: end;
`],["place-self-center",`place-self: center;
`],["place-self-stretch",`place-self: stretch;
`]]}],xs=[{url:"https://tailwindcss.com/docs/padding",entry:"Padding",description:"Utilities for controlling an element's padding.",parameters:[["p-0",`padding: 0px;
`],["px-0",`padding-left: 0px;
padding-right: 0px;
`],["py-0",`padding-top: 0px;
padding-bottom: 0px;
`],["ps-0",`padding-inline-start: 0px;
`],["pe-0",`padding-inline-end: 0px;
`],["pt-0",`padding-top: 0px;
`],["pr-0",`padding-right: 0px;
`],["pb-0",`padding-bottom: 0px;
`],["pl-0",`padding-left: 0px;
`],["p-px",`padding: 1px;
`],["px-px",`padding-left: 1px;
padding-right: 1px;
`],["py-px",`padding-top: 1px;
padding-bottom: 1px;
`],["ps-px",`padding-inline-start: 1px;
`],["pe-px",`padding-inline-end: 1px;
`],["pt-px",`padding-top: 1px;
`],["pr-px",`padding-right: 1px;
`],["pb-px",`padding-bottom: 1px;
`],["pl-px",`padding-left: 1px;
`],["p-0.5",`padding: 0.125rem; /* 2px */
`],["px-0.5",`padding-left: 0.125rem; /* 2px */
padding-right: 0.125rem; /* 2px */
`],["py-0.5",`padding-top: 0.125rem; /* 2px */
padding-bottom: 0.125rem; /* 2px */
`],["ps-0.5",`padding-inline-start: 0.125rem; /* 2px */
`],["pe-0.5",`padding-inline-end: 0.125rem; /* 2px */
`],["pt-0.5",`padding-top: 0.125rem; /* 2px */
`],["pr-0.5",`padding-right: 0.125rem; /* 2px */
`],["pb-0.5",`padding-bottom: 0.125rem; /* 2px */
`],["pl-0.5",`padding-left: 0.125rem; /* 2px */
`],["p-1",`padding: 0.25rem; /* 4px */
`],["px-1",`padding-left: 0.25rem; /* 4px */
padding-right: 0.25rem; /* 4px */
`],["py-1",`padding-top: 0.25rem; /* 4px */
padding-bottom: 0.25rem; /* 4px */
`],["ps-1",`padding-inline-start: 0.25rem; /* 4px */
`],["pe-1",`padding-inline-end: 0.25rem; /* 4px */
`],["pt-1",`padding-top: 0.25rem; /* 4px */
`],["pr-1",`padding-right: 0.25rem; /* 4px */
`],["pb-1",`padding-bottom: 0.25rem; /* 4px */
`],["pl-1",`padding-left: 0.25rem; /* 4px */
`],["p-1.5",`padding: 0.375rem; /* 6px */
`],["px-1.5",`padding-left: 0.375rem; /* 6px */
padding-right: 0.375rem; /* 6px */
`],["py-1.5",`padding-top: 0.375rem; /* 6px */
padding-bottom: 0.375rem; /* 6px */
`],["ps-1.5",`padding-inline-start: 0.375rem; /* 6px */
`],["pe-1.5",`padding-inline-end: 0.375rem; /* 6px */
`],["pt-1.5",`padding-top: 0.375rem; /* 6px */
`],["pr-1.5",`padding-right: 0.375rem; /* 6px */
`],["pb-1.5",`padding-bottom: 0.375rem; /* 6px */
`],["pl-1.5",`padding-left: 0.375rem; /* 6px */
`],["p-2",`padding: 0.5rem; /* 8px */
`],["px-2",`padding-left: 0.5rem; /* 8px */
padding-right: 0.5rem; /* 8px */
`],["py-2",`padding-top: 0.5rem; /* 8px */
padding-bottom: 0.5rem; /* 8px */
`],["ps-2",`padding-inline-start: 0.5rem; /* 8px */
`],["pe-2",`padding-inline-end: 0.5rem; /* 8px */
`],["pt-2",`padding-top: 0.5rem; /* 8px */
`],["pr-2",`padding-right: 0.5rem; /* 8px */
`],["pb-2",`padding-bottom: 0.5rem; /* 8px */
`],["pl-2",`padding-left: 0.5rem; /* 8px */
`],["p-2.5",`padding: 0.625rem; /* 10px */
`],["px-2.5",`padding-left: 0.625rem; /* 10px */
padding-right: 0.625rem; /* 10px */
`],["py-2.5",`padding-top: 0.625rem; /* 10px */
padding-bottom: 0.625rem; /* 10px */
`],["ps-2.5",`padding-inline-start: 0.625rem; /* 10px */
`],["pe-2.5",`padding-inline-end: 0.625rem; /* 10px */
`],["pt-2.5",`padding-top: 0.625rem; /* 10px */
`],["pr-2.5",`padding-right: 0.625rem; /* 10px */
`],["pb-2.5",`padding-bottom: 0.625rem; /* 10px */
`],["pl-2.5",`padding-left: 0.625rem; /* 10px */
`],["p-3",`padding: 0.75rem; /* 12px */
`],["px-3",`padding-left: 0.75rem; /* 12px */
padding-right: 0.75rem; /* 12px */
`],["py-3",`padding-top: 0.75rem; /* 12px */
padding-bottom: 0.75rem; /* 12px */
`],["ps-3",`padding-inline-start: 0.75rem; /* 12px */
`],["pe-3",`padding-inline-end: 0.75rem; /* 12px */
`],["pt-3",`padding-top: 0.75rem; /* 12px */
`],["pr-3",`padding-right: 0.75rem; /* 12px */
`],["pb-3",`padding-bottom: 0.75rem; /* 12px */
`],["pl-3",`padding-left: 0.75rem; /* 12px */
`],["p-3.5",`padding: 0.875rem; /* 14px */
`],["px-3.5",`padding-left: 0.875rem; /* 14px */
padding-right: 0.875rem; /* 14px */
`],["py-3.5",`padding-top: 0.875rem; /* 14px */
padding-bottom: 0.875rem; /* 14px */
`],["ps-3.5",`padding-inline-start: 0.875rem; /* 14px */
`],["pe-3.5",`padding-inline-end: 0.875rem; /* 14px */
`],["pt-3.5",`padding-top: 0.875rem; /* 14px */
`],["pr-3.5",`padding-right: 0.875rem; /* 14px */
`],["pb-3.5",`padding-bottom: 0.875rem; /* 14px */
`],["pl-3.5",`padding-left: 0.875rem; /* 14px */
`],["p-4",`padding: 1rem; /* 16px */
`],["px-4",`padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
`],["py-4",`padding-top: 1rem; /* 16px */
padding-bottom: 1rem; /* 16px */
`],["ps-4",`padding-inline-start: 1rem; /* 16px */
`],["pe-4",`padding-inline-end: 1rem; /* 16px */
`],["pt-4",`padding-top: 1rem; /* 16px */
`],["pr-4",`padding-right: 1rem; /* 16px */
`],["pb-4",`padding-bottom: 1rem; /* 16px */
`],["pl-4",`padding-left: 1rem; /* 16px */
`],["p-5",`padding: 1.25rem; /* 20px */
`],["px-5",`padding-left: 1.25rem; /* 20px */
padding-right: 1.25rem; /* 20px */
`],["py-5",`padding-top: 1.25rem; /* 20px */
padding-bottom: 1.25rem; /* 20px */
`],["ps-5",`padding-inline-start: 1.25rem; /* 20px */
`],["pe-5",`padding-inline-end: 1.25rem; /* 20px */
`],["pt-5",`padding-top: 1.25rem; /* 20px */
`],["pr-5",`padding-right: 1.25rem; /* 20px */
`],["pb-5",`padding-bottom: 1.25rem; /* 20px */
`],["pl-5",`padding-left: 1.25rem; /* 20px */
`],["p-6",`padding: 1.5rem; /* 24px */
`],["px-6",`padding-left: 1.5rem; /* 24px */
padding-right: 1.5rem; /* 24px */
`],["py-6",`padding-top: 1.5rem; /* 24px */
padding-bottom: 1.5rem; /* 24px */
`],["ps-6",`padding-inline-start: 1.5rem; /* 24px */
`],["pe-6",`padding-inline-end: 1.5rem; /* 24px */
`],["pt-6",`padding-top: 1.5rem; /* 24px */
`],["pr-6",`padding-right: 1.5rem; /* 24px */
`],["pb-6",`padding-bottom: 1.5rem; /* 24px */
`],["pl-6",`padding-left: 1.5rem; /* 24px */
`],["p-7",`padding: 1.75rem; /* 28px */
`],["px-7",`padding-left: 1.75rem; /* 28px */
padding-right: 1.75rem; /* 28px */
`],["py-7",`padding-top: 1.75rem; /* 28px */
padding-bottom: 1.75rem; /* 28px */
`],["ps-7",`padding-inline-start: 1.75rem; /* 28px */
`],["pe-7",`padding-inline-end: 1.75rem; /* 28px */
`],["pt-7",`padding-top: 1.75rem; /* 28px */
`],["pr-7",`padding-right: 1.75rem; /* 28px */
`],["pb-7",`padding-bottom: 1.75rem; /* 28px */
`],["pl-7",`padding-left: 1.75rem; /* 28px */
`],["p-8",`padding: 2rem; /* 32px */
`],["px-8",`padding-left: 2rem; /* 32px */
padding-right: 2rem; /* 32px */
`],["py-8",`padding-top: 2rem; /* 32px */
padding-bottom: 2rem; /* 32px */
`],["ps-8",`padding-inline-start: 2rem; /* 32px */
`],["pe-8",`padding-inline-end: 2rem; /* 32px */
`],["pt-8",`padding-top: 2rem; /* 32px */
`],["pr-8",`padding-right: 2rem; /* 32px */
`],["pb-8",`padding-bottom: 2rem; /* 32px */
`],["pl-8",`padding-left: 2rem; /* 32px */
`],["p-9",`padding: 2.25rem; /* 36px */
`],["px-9",`padding-left: 2.25rem; /* 36px */
padding-right: 2.25rem; /* 36px */
`],["py-9",`padding-top: 2.25rem; /* 36px */
padding-bottom: 2.25rem; /* 36px */
`],["ps-9",`padding-inline-start: 2.25rem; /* 36px */
`],["pe-9",`padding-inline-end: 2.25rem; /* 36px */
`],["pt-9",`padding-top: 2.25rem; /* 36px */
`],["pr-9",`padding-right: 2.25rem; /* 36px */
`],["pb-9",`padding-bottom: 2.25rem; /* 36px */
`],["pl-9",`padding-left: 2.25rem; /* 36px */
`],["p-10",`padding: 2.5rem; /* 40px */
`],["px-10",`padding-left: 2.5rem; /* 40px */
padding-right: 2.5rem; /* 40px */
`],["py-10",`padding-top: 2.5rem; /* 40px */
padding-bottom: 2.5rem; /* 40px */
`],["ps-10",`padding-inline-start: 2.5rem; /* 40px */
`],["pe-10",`padding-inline-end: 2.5rem; /* 40px */
`],["pt-10",`padding-top: 2.5rem; /* 40px */
`],["pr-10",`padding-right: 2.5rem; /* 40px */
`],["pb-10",`padding-bottom: 2.5rem; /* 40px */
`],["pl-10",`padding-left: 2.5rem; /* 40px */
`],["p-11",`padding: 2.75rem; /* 44px */
`],["px-11",`padding-left: 2.75rem; /* 44px */
padding-right: 2.75rem; /* 44px */
`],["py-11",`padding-top: 2.75rem; /* 44px */
padding-bottom: 2.75rem; /* 44px */
`],["ps-11",`padding-inline-start: 2.75rem; /* 44px */
`],["pe-11",`padding-inline-end: 2.75rem; /* 44px */
`],["pt-11",`padding-top: 2.75rem; /* 44px */
`],["pr-11",`padding-right: 2.75rem; /* 44px */
`],["pb-11",`padding-bottom: 2.75rem; /* 44px */
`],["pl-11",`padding-left: 2.75rem; /* 44px */
`],["p-12",`padding: 3rem; /* 48px */
`],["px-12",`padding-left: 3rem; /* 48px */
padding-right: 3rem; /* 48px */
`],["py-12",`padding-top: 3rem; /* 48px */
padding-bottom: 3rem; /* 48px */
`],["ps-12",`padding-inline-start: 3rem; /* 48px */
`],["pe-12",`padding-inline-end: 3rem; /* 48px */
`],["pt-12",`padding-top: 3rem; /* 48px */
`],["pr-12",`padding-right: 3rem; /* 48px */
`],["pb-12",`padding-bottom: 3rem; /* 48px */
`],["pl-12",`padding-left: 3rem; /* 48px */
`],["p-14",`padding: 3.5rem; /* 56px */
`],["px-14",`padding-left: 3.5rem; /* 56px */
padding-right: 3.5rem; /* 56px */
`],["py-14",`padding-top: 3.5rem; /* 56px */
padding-bottom: 3.5rem; /* 56px */
`],["ps-14",`padding-inline-start: 3.5rem; /* 56px */
`],["pe-14",`padding-inline-end: 3.5rem; /* 56px */
`],["pt-14",`padding-top: 3.5rem; /* 56px */
`],["pr-14",`padding-right: 3.5rem; /* 56px */
`],["pb-14",`padding-bottom: 3.5rem; /* 56px */
`],["pl-14",`padding-left: 3.5rem; /* 56px */
`],["p-16",`padding: 4rem; /* 64px */
`],["px-16",`padding-left: 4rem; /* 64px */
padding-right: 4rem; /* 64px */
`],["py-16",`padding-top: 4rem; /* 64px */
padding-bottom: 4rem; /* 64px */
`],["ps-16",`padding-inline-start: 4rem; /* 64px */
`],["pe-16",`padding-inline-end: 4rem; /* 64px */
`],["pt-16",`padding-top: 4rem; /* 64px */
`],["pr-16",`padding-right: 4rem; /* 64px */
`],["pb-16",`padding-bottom: 4rem; /* 64px */
`],["pl-16",`padding-left: 4rem; /* 64px */
`],["p-20",`padding: 5rem; /* 80px */
`],["px-20",`padding-left: 5rem; /* 80px */
padding-right: 5rem; /* 80px */
`],["py-20",`padding-top: 5rem; /* 80px */
padding-bottom: 5rem; /* 80px */
`],["ps-20",`padding-inline-start: 5rem; /* 80px */
`],["pe-20",`padding-inline-end: 5rem; /* 80px */
`],["pt-20",`padding-top: 5rem; /* 80px */
`],["pr-20",`padding-right: 5rem; /* 80px */
`],["pb-20",`padding-bottom: 5rem; /* 80px */
`],["pl-20",`padding-left: 5rem; /* 80px */
`],["p-24",`padding: 6rem; /* 96px */
`],["px-24",`padding-left: 6rem; /* 96px */
padding-right: 6rem; /* 96px */
`],["py-24",`padding-top: 6rem; /* 96px */
padding-bottom: 6rem; /* 96px */
`],["ps-24",`padding-inline-start: 6rem; /* 96px */
`],["pe-24",`padding-inline-end: 6rem; /* 96px */
`],["pt-24",`padding-top: 6rem; /* 96px */
`],["pr-24",`padding-right: 6rem; /* 96px */
`],["pb-24",`padding-bottom: 6rem; /* 96px */
`],["pl-24",`padding-left: 6rem; /* 96px */
`],["p-28",`padding: 7rem; /* 112px */
`],["px-28",`padding-left: 7rem; /* 112px */
padding-right: 7rem; /* 112px */
`],["py-28",`padding-top: 7rem; /* 112px */
padding-bottom: 7rem; /* 112px */
`],["ps-28",`padding-inline-start: 7rem; /* 112px */
`],["pe-28",`padding-inline-end: 7rem; /* 112px */
`],["pt-28",`padding-top: 7rem; /* 112px */
`],["pr-28",`padding-right: 7rem; /* 112px */
`],["pb-28",`padding-bottom: 7rem; /* 112px */
`],["pl-28",`padding-left: 7rem; /* 112px */
`],["p-32",`padding: 8rem; /* 128px */
`],["px-32",`padding-left: 8rem; /* 128px */
padding-right: 8rem; /* 128px */
`],["py-32",`padding-top: 8rem; /* 128px */
padding-bottom: 8rem; /* 128px */
`],["ps-32",`padding-inline-start: 8rem; /* 128px */
`],["pe-32",`padding-inline-end: 8rem; /* 128px */
`],["pt-32",`padding-top: 8rem; /* 128px */
`],["pr-32",`padding-right: 8rem; /* 128px */
`],["pb-32",`padding-bottom: 8rem; /* 128px */
`],["pl-32",`padding-left: 8rem; /* 128px */
`],["p-36",`padding: 9rem; /* 144px */
`],["px-36",`padding-left: 9rem; /* 144px */
padding-right: 9rem; /* 144px */
`],["py-36",`padding-top: 9rem; /* 144px */
padding-bottom: 9rem; /* 144px */
`],["ps-36",`padding-inline-start: 9rem; /* 144px */
`],["pe-36",`padding-inline-end: 9rem; /* 144px */
`],["pt-36",`padding-top: 9rem; /* 144px */
`],["pr-36",`padding-right: 9rem; /* 144px */
`],["pb-36",`padding-bottom: 9rem; /* 144px */
`],["pl-36",`padding-left: 9rem; /* 144px */
`],["p-40",`padding: 10rem; /* 160px */
`],["px-40",`padding-left: 10rem; /* 160px */
padding-right: 10rem; /* 160px */
`],["py-40",`padding-top: 10rem; /* 160px */
padding-bottom: 10rem; /* 160px */
`],["ps-40",`padding-inline-start: 10rem; /* 160px */
`],["pe-40",`padding-inline-end: 10rem; /* 160px */
`],["pt-40",`padding-top: 10rem; /* 160px */
`],["pr-40",`padding-right: 10rem; /* 160px */
`],["pb-40",`padding-bottom: 10rem; /* 160px */
`],["pl-40",`padding-left: 10rem; /* 160px */
`],["p-44",`padding: 11rem; /* 176px */
`],["px-44",`padding-left: 11rem; /* 176px */
padding-right: 11rem; /* 176px */
`],["py-44",`padding-top: 11rem; /* 176px */
padding-bottom: 11rem; /* 176px */
`],["ps-44",`padding-inline-start: 11rem; /* 176px */
`],["pe-44",`padding-inline-end: 11rem; /* 176px */
`],["pt-44",`padding-top: 11rem; /* 176px */
`],["pr-44",`padding-right: 11rem; /* 176px */
`],["pb-44",`padding-bottom: 11rem; /* 176px */
`],["pl-44",`padding-left: 11rem; /* 176px */
`],["p-48",`padding: 12rem; /* 192px */
`],["px-48",`padding-left: 12rem; /* 192px */
padding-right: 12rem; /* 192px */
`],["py-48",`padding-top: 12rem; /* 192px */
padding-bottom: 12rem; /* 192px */
`],["ps-48",`padding-inline-start: 12rem; /* 192px */
`],["pe-48",`padding-inline-end: 12rem; /* 192px */
`],["pt-48",`padding-top: 12rem; /* 192px */
`],["pr-48",`padding-right: 12rem; /* 192px */
`],["pb-48",`padding-bottom: 12rem; /* 192px */
`],["pl-48",`padding-left: 12rem; /* 192px */
`],["p-52",`padding: 13rem; /* 208px */
`],["px-52",`padding-left: 13rem; /* 208px */
padding-right: 13rem; /* 208px */
`],["py-52",`padding-top: 13rem; /* 208px */
padding-bottom: 13rem; /* 208px */
`],["ps-52",`padding-inline-start: 13rem; /* 208px */
`],["pe-52",`padding-inline-end: 13rem; /* 208px */
`],["pt-52",`padding-top: 13rem; /* 208px */
`],["pr-52",`padding-right: 13rem; /* 208px */
`],["pb-52",`padding-bottom: 13rem; /* 208px */
`],["pl-52",`padding-left: 13rem; /* 208px */
`],["p-56",`padding: 14rem; /* 224px */
`],["px-56",`padding-left: 14rem; /* 224px */
padding-right: 14rem; /* 224px */
`],["py-56",`padding-top: 14rem; /* 224px */
padding-bottom: 14rem; /* 224px */
`],["ps-56",`padding-inline-start: 14rem; /* 224px */
`],["pe-56",`padding-inline-end: 14rem; /* 224px */
`],["pt-56",`padding-top: 14rem; /* 224px */
`],["pr-56",`padding-right: 14rem; /* 224px */
`],["pb-56",`padding-bottom: 14rem; /* 224px */
`],["pl-56",`padding-left: 14rem; /* 224px */
`],["p-60",`padding: 15rem; /* 240px */
`],["px-60",`padding-left: 15rem; /* 240px */
padding-right: 15rem; /* 240px */
`],["py-60",`padding-top: 15rem; /* 240px */
padding-bottom: 15rem; /* 240px */
`],["ps-60",`padding-inline-start: 15rem; /* 240px */
`],["pe-60",`padding-inline-end: 15rem; /* 240px */
`],["pt-60",`padding-top: 15rem; /* 240px */
`],["pr-60",`padding-right: 15rem; /* 240px */
`],["pb-60",`padding-bottom: 15rem; /* 240px */
`],["pl-60",`padding-left: 15rem; /* 240px */
`],["p-64",`padding: 16rem; /* 256px */
`],["px-64",`padding-left: 16rem; /* 256px */
padding-right: 16rem; /* 256px */
`],["py-64",`padding-top: 16rem; /* 256px */
padding-bottom: 16rem; /* 256px */
`],["ps-64",`padding-inline-start: 16rem; /* 256px */
`],["pe-64",`padding-inline-end: 16rem; /* 256px */
`],["pt-64",`padding-top: 16rem; /* 256px */
`],["pr-64",`padding-right: 16rem; /* 256px */
`],["pb-64",`padding-bottom: 16rem; /* 256px */
`],["pl-64",`padding-left: 16rem; /* 256px */
`],["p-72",`padding: 18rem; /* 288px */
`],["px-72",`padding-left: 18rem; /* 288px */
padding-right: 18rem; /* 288px */
`],["py-72",`padding-top: 18rem; /* 288px */
padding-bottom: 18rem; /* 288px */
`],["ps-72",`padding-inline-start: 18rem; /* 288px */
`],["pe-72",`padding-inline-end: 18rem; /* 288px */
`],["pt-72",`padding-top: 18rem; /* 288px */
`],["pr-72",`padding-right: 18rem; /* 288px */
`],["pb-72",`padding-bottom: 18rem; /* 288px */
`],["pl-72",`padding-left: 18rem; /* 288px */
`],["p-80",`padding: 20rem; /* 320px */
`],["px-80",`padding-left: 20rem; /* 320px */
padding-right: 20rem; /* 320px */
`],["py-80",`padding-top: 20rem; /* 320px */
padding-bottom: 20rem; /* 320px */
`],["ps-80",`padding-inline-start: 20rem; /* 320px */
`],["pe-80",`padding-inline-end: 20rem; /* 320px */
`],["pt-80",`padding-top: 20rem; /* 320px */
`],["pr-80",`padding-right: 20rem; /* 320px */
`],["pb-80",`padding-bottom: 20rem; /* 320px */
`],["pl-80",`padding-left: 20rem; /* 320px */
`],["p-96",`padding: 24rem; /* 384px */
`],["px-96",`padding-left: 24rem; /* 384px */
padding-right: 24rem; /* 384px */
`],["py-96",`padding-top: 24rem; /* 384px */
padding-bottom: 24rem; /* 384px */
`],["ps-96",`padding-inline-start: 24rem; /* 384px */
`],["pe-96",`padding-inline-end: 24rem; /* 384px */
`],["pt-96",`padding-top: 24rem; /* 384px */
`],["pr-96",`padding-right: 24rem; /* 384px */
`],["pb-96",`padding-bottom: 24rem; /* 384px */
`],["pl-96",`padding-left: 24rem; /* 384px */
`]]},{url:"https://tailwindcss.com/docs/margin",entry:"Margin",description:"Utilities for controlling an element's margin.",parameters:[["m-0",`margin: 0px;
`],["mx-0",`margin-left: 0px;
margin-right: 0px;
`],["my-0",`margin-top: 0px;
margin-bottom: 0px;
`],["ms-0",`margin-inline-start: 0px;
`],["me-0",`margin-inline-end: 0px;
`],["mt-0",`margin-top: 0px;
`],["mr-0",`margin-right: 0px;
`],["mb-0",`margin-bottom: 0px;
`],["ml-0",`margin-left: 0px;
`],["m-px",`margin: 1px;
`],["mx-px",`margin-left: 1px;
margin-right: 1px;
`],["my-px",`margin-top: 1px;
margin-bottom: 1px;
`],["ms-px",`margin-inline-start: 1px;
`],["me-px",`margin-inline-end: 1px;
`],["mt-px",`margin-top: 1px;
`],["mr-px",`margin-right: 1px;
`],["mb-px",`margin-bottom: 1px;
`],["ml-px",`margin-left: 1px;
`],["m-0.5",`margin: 0.125rem; /* 2px */
`],["mx-0.5",`margin-left: 0.125rem; /* 2px */
margin-right: 0.125rem; /* 2px */
`],["my-0.5",`margin-top: 0.125rem; /* 2px */
margin-bottom: 0.125rem; /* 2px */
`],["ms-0.5",`margin-inline-start: 0.125rem; /* 2px */
`],["me-0.5",`margin-inline-end: 0.125rem; /* 2px */
`],["mt-0.5",`margin-top: 0.125rem; /* 2px */
`],["mr-0.5",`margin-right: 0.125rem; /* 2px */
`],["mb-0.5",`margin-bottom: 0.125rem; /* 2px */
`],["ml-0.5",`margin-left: 0.125rem; /* 2px */
`],["m-1",`margin: 0.25rem; /* 4px */
`],["mx-1",`margin-left: 0.25rem; /* 4px */
margin-right: 0.25rem; /* 4px */
`],["my-1",`margin-top: 0.25rem; /* 4px */
margin-bottom: 0.25rem; /* 4px */
`],["ms-1",`margin-inline-start: 0.25rem; /* 4px */
`],["me-1",`margin-inline-end: 0.25rem; /* 4px */
`],["mt-1",`margin-top: 0.25rem; /* 4px */
`],["mr-1",`margin-right: 0.25rem; /* 4px */
`],["mb-1",`margin-bottom: 0.25rem; /* 4px */
`],["ml-1",`margin-left: 0.25rem; /* 4px */
`],["m-1.5",`margin: 0.375rem; /* 6px */
`],["mx-1.5",`margin-left: 0.375rem; /* 6px */
margin-right: 0.375rem; /* 6px */
`],["my-1.5",`margin-top: 0.375rem; /* 6px */
margin-bottom: 0.375rem; /* 6px */
`],["ms-1.5",`margin-inline-start: 0.375rem; /* 6px */
`],["me-1.5",`margin-inline-end: 0.375rem; /* 6px */
`],["mt-1.5",`margin-top: 0.375rem; /* 6px */
`],["mr-1.5",`margin-right: 0.375rem; /* 6px */
`],["mb-1.5",`margin-bottom: 0.375rem; /* 6px */
`],["ml-1.5",`margin-left: 0.375rem; /* 6px */
`],["m-2",`margin: 0.5rem; /* 8px */
`],["mx-2",`margin-left: 0.5rem; /* 8px */
margin-right: 0.5rem; /* 8px */
`],["my-2",`margin-top: 0.5rem; /* 8px */
margin-bottom: 0.5rem; /* 8px */
`],["ms-2",`margin-inline-start: 0.5rem; /* 8px */
`],["me-2",`margin-inline-end: 0.5rem; /* 8px */
`],["mt-2",`margin-top: 0.5rem; /* 8px */
`],["mr-2",`margin-right: 0.5rem; /* 8px */
`],["mb-2",`margin-bottom: 0.5rem; /* 8px */
`],["ml-2",`margin-left: 0.5rem; /* 8px */
`],["m-2.5",`margin: 0.625rem; /* 10px */
`],["mx-2.5",`margin-left: 0.625rem; /* 10px */
margin-right: 0.625rem; /* 10px */
`],["my-2.5",`margin-top: 0.625rem; /* 10px */
margin-bottom: 0.625rem; /* 10px */
`],["ms-2.5",`margin-inline-start: 0.625rem; /* 10px */
`],["me-2.5",`margin-inline-end: 0.625rem; /* 10px */
`],["mt-2.5",`margin-top: 0.625rem; /* 10px */
`],["mr-2.5",`margin-right: 0.625rem; /* 10px */
`],["mb-2.5",`margin-bottom: 0.625rem; /* 10px */
`],["ml-2.5",`margin-left: 0.625rem; /* 10px */
`],["m-3",`margin: 0.75rem; /* 12px */
`],["mx-3",`margin-left: 0.75rem; /* 12px */
margin-right: 0.75rem; /* 12px */
`],["my-3",`margin-top: 0.75rem; /* 12px */
margin-bottom: 0.75rem; /* 12px */
`],["ms-3",`margin-inline-start: 0.75rem; /* 12px */
`],["me-3",`margin-inline-end: 0.75rem; /* 12px */
`],["mt-3",`margin-top: 0.75rem; /* 12px */
`],["mr-3",`margin-right: 0.75rem; /* 12px */
`],["mb-3",`margin-bottom: 0.75rem; /* 12px */
`],["ml-3",`margin-left: 0.75rem; /* 12px */
`],["m-3.5",`margin: 0.875rem; /* 14px */
`],["mx-3.5",`margin-left: 0.875rem; /* 14px */
margin-right: 0.875rem; /* 14px */
`],["my-3.5",`margin-top: 0.875rem; /* 14px */
margin-bottom: 0.875rem; /* 14px */
`],["ms-3.5",`margin-inline-start: 0.875rem; /* 14px */
`],["me-3.5",`margin-inline-end: 0.875rem; /* 14px */
`],["mt-3.5",`margin-top: 0.875rem; /* 14px */
`],["mr-3.5",`margin-right: 0.875rem; /* 14px */
`],["mb-3.5",`margin-bottom: 0.875rem; /* 14px */
`],["ml-3.5",`margin-left: 0.875rem; /* 14px */
`],["m-4",`margin: 1rem; /* 16px */
`],["mx-4",`margin-left: 1rem; /* 16px */
margin-right: 1rem; /* 16px */
`],["my-4",`margin-top: 1rem; /* 16px */
margin-bottom: 1rem; /* 16px */
`],["ms-4",`margin-inline-start: 1rem; /* 16px */
`],["me-4",`margin-inline-end: 1rem; /* 16px */
`],["mt-4",`margin-top: 1rem; /* 16px */
`],["mr-4",`margin-right: 1rem; /* 16px */
`],["mb-4",`margin-bottom: 1rem; /* 16px */
`],["ml-4",`margin-left: 1rem; /* 16px */
`],["m-5",`margin: 1.25rem; /* 20px */
`],["mx-5",`margin-left: 1.25rem; /* 20px */
margin-right: 1.25rem; /* 20px */
`],["my-5",`margin-top: 1.25rem; /* 20px */
margin-bottom: 1.25rem; /* 20px */
`],["ms-5",`margin-inline-start: 1.25rem; /* 20px */
`],["me-5",`margin-inline-end: 1.25rem; /* 20px */
`],["mt-5",`margin-top: 1.25rem; /* 20px */
`],["mr-5",`margin-right: 1.25rem; /* 20px */
`],["mb-5",`margin-bottom: 1.25rem; /* 20px */
`],["ml-5",`margin-left: 1.25rem; /* 20px */
`],["m-6",`margin: 1.5rem; /* 24px */
`],["mx-6",`margin-left: 1.5rem; /* 24px */
margin-right: 1.5rem; /* 24px */
`],["my-6",`margin-top: 1.5rem; /* 24px */
margin-bottom: 1.5rem; /* 24px */
`],["ms-6",`margin-inline-start: 1.5rem; /* 24px */
`],["me-6",`margin-inline-end: 1.5rem; /* 24px */
`],["mt-6",`margin-top: 1.5rem; /* 24px */
`],["mr-6",`margin-right: 1.5rem; /* 24px */
`],["mb-6",`margin-bottom: 1.5rem; /* 24px */
`],["ml-6",`margin-left: 1.5rem; /* 24px */
`],["m-7",`margin: 1.75rem; /* 28px */
`],["mx-7",`margin-left: 1.75rem; /* 28px */
margin-right: 1.75rem; /* 28px */
`],["my-7",`margin-top: 1.75rem; /* 28px */
margin-bottom: 1.75rem; /* 28px */
`],["ms-7",`margin-inline-start: 1.75rem; /* 28px */
`],["me-7",`margin-inline-end: 1.75rem; /* 28px */
`],["mt-7",`margin-top: 1.75rem; /* 28px */
`],["mr-7",`margin-right: 1.75rem; /* 28px */
`],["mb-7",`margin-bottom: 1.75rem; /* 28px */
`],["ml-7",`margin-left: 1.75rem; /* 28px */
`],["m-8",`margin: 2rem; /* 32px */
`],["mx-8",`margin-left: 2rem; /* 32px */
margin-right: 2rem; /* 32px */
`],["my-8",`margin-top: 2rem; /* 32px */
margin-bottom: 2rem; /* 32px */
`],["ms-8",`margin-inline-start: 2rem; /* 32px */
`],["me-8",`margin-inline-end: 2rem; /* 32px */
`],["mt-8",`margin-top: 2rem; /* 32px */
`],["mr-8",`margin-right: 2rem; /* 32px */
`],["mb-8",`margin-bottom: 2rem; /* 32px */
`],["ml-8",`margin-left: 2rem; /* 32px */
`],["m-9",`margin: 2.25rem; /* 36px */
`],["mx-9",`margin-left: 2.25rem; /* 36px */
margin-right: 2.25rem; /* 36px */
`],["my-9",`margin-top: 2.25rem; /* 36px */
margin-bottom: 2.25rem; /* 36px */
`],["ms-9",`margin-inline-start: 2.25rem; /* 36px */
`],["me-9",`margin-inline-end: 2.25rem; /* 36px */
`],["mt-9",`margin-top: 2.25rem; /* 36px */
`],["mr-9",`margin-right: 2.25rem; /* 36px */
`],["mb-9",`margin-bottom: 2.25rem; /* 36px */
`],["ml-9",`margin-left: 2.25rem; /* 36px */
`],["m-10",`margin: 2.5rem; /* 40px */
`],["mx-10",`margin-left: 2.5rem; /* 40px */
margin-right: 2.5rem; /* 40px */
`],["my-10",`margin-top: 2.5rem; /* 40px */
margin-bottom: 2.5rem; /* 40px */
`],["ms-10",`margin-inline-start: 2.5rem; /* 40px */
`],["me-10",`margin-inline-end: 2.5rem; /* 40px */
`],["mt-10",`margin-top: 2.5rem; /* 40px */
`],["mr-10",`margin-right: 2.5rem; /* 40px */
`],["mb-10",`margin-bottom: 2.5rem; /* 40px */
`],["ml-10",`margin-left: 2.5rem; /* 40px */
`],["m-11",`margin: 2.75rem; /* 44px */
`],["mx-11",`margin-left: 2.75rem; /* 44px */
margin-right: 2.75rem; /* 44px */
`],["my-11",`margin-top: 2.75rem; /* 44px */
margin-bottom: 2.75rem; /* 44px */
`],["ms-11",`margin-inline-start: 2.75rem; /* 44px */
`],["me-11",`margin-inline-end: 2.75rem; /* 44px */
`],["mt-11",`margin-top: 2.75rem; /* 44px */
`],["mr-11",`margin-right: 2.75rem; /* 44px */
`],["mb-11",`margin-bottom: 2.75rem; /* 44px */
`],["ml-11",`margin-left: 2.75rem; /* 44px */
`],["m-12",`margin: 3rem; /* 48px */
`],["mx-12",`margin-left: 3rem; /* 48px */
margin-right: 3rem; /* 48px */
`],["my-12",`margin-top: 3rem; /* 48px */
margin-bottom: 3rem; /* 48px */
`],["ms-12",`margin-inline-start: 3rem; /* 48px */
`],["me-12",`margin-inline-end: 3rem; /* 48px */
`],["mt-12",`margin-top: 3rem; /* 48px */
`],["mr-12",`margin-right: 3rem; /* 48px */
`],["mb-12",`margin-bottom: 3rem; /* 48px */
`],["ml-12",`margin-left: 3rem; /* 48px */
`],["m-14",`margin: 3.5rem; /* 56px */
`],["mx-14",`margin-left: 3.5rem; /* 56px */
margin-right: 3.5rem; /* 56px */
`],["my-14",`margin-top: 3.5rem; /* 56px */
margin-bottom: 3.5rem; /* 56px */
`],["ms-14",`margin-inline-start: 3.5rem; /* 56px */
`],["me-14",`margin-inline-end: 3.5rem; /* 56px */
`],["mt-14",`margin-top: 3.5rem; /* 56px */
`],["mr-14",`margin-right: 3.5rem; /* 56px */
`],["mb-14",`margin-bottom: 3.5rem; /* 56px */
`],["ml-14",`margin-left: 3.5rem; /* 56px */
`],["m-16",`margin: 4rem; /* 64px */
`],["mx-16",`margin-left: 4rem; /* 64px */
margin-right: 4rem; /* 64px */
`],["my-16",`margin-top: 4rem; /* 64px */
margin-bottom: 4rem; /* 64px */
`],["ms-16",`margin-inline-start: 4rem; /* 64px */
`],["me-16",`margin-inline-end: 4rem; /* 64px */
`],["mt-16",`margin-top: 4rem; /* 64px */
`],["mr-16",`margin-right: 4rem; /* 64px */
`],["mb-16",`margin-bottom: 4rem; /* 64px */
`],["ml-16",`margin-left: 4rem; /* 64px */
`],["m-20",`margin: 5rem; /* 80px */
`],["mx-20",`margin-left: 5rem; /* 80px */
margin-right: 5rem; /* 80px */
`],["my-20",`margin-top: 5rem; /* 80px */
margin-bottom: 5rem; /* 80px */
`],["ms-20",`margin-inline-start: 5rem; /* 80px */
`],["me-20",`margin-inline-end: 5rem; /* 80px */
`],["mt-20",`margin-top: 5rem; /* 80px */
`],["mr-20",`margin-right: 5rem; /* 80px */
`],["mb-20",`margin-bottom: 5rem; /* 80px */
`],["ml-20",`margin-left: 5rem; /* 80px */
`],["m-24",`margin: 6rem; /* 96px */
`],["mx-24",`margin-left: 6rem; /* 96px */
margin-right: 6rem; /* 96px */
`],["my-24",`margin-top: 6rem; /* 96px */
margin-bottom: 6rem; /* 96px */
`],["ms-24",`margin-inline-start: 6rem; /* 96px */
`],["me-24",`margin-inline-end: 6rem; /* 96px */
`],["mt-24",`margin-top: 6rem; /* 96px */
`],["mr-24",`margin-right: 6rem; /* 96px */
`],["mb-24",`margin-bottom: 6rem; /* 96px */
`],["ml-24",`margin-left: 6rem; /* 96px */
`],["m-28",`margin: 7rem; /* 112px */
`],["mx-28",`margin-left: 7rem; /* 112px */
margin-right: 7rem; /* 112px */
`],["my-28",`margin-top: 7rem; /* 112px */
margin-bottom: 7rem; /* 112px */
`],["ms-28",`margin-inline-start: 7rem; /* 112px */
`],["me-28",`margin-inline-end: 7rem; /* 112px */
`],["mt-28",`margin-top: 7rem; /* 112px */
`],["mr-28",`margin-right: 7rem; /* 112px */
`],["mb-28",`margin-bottom: 7rem; /* 112px */
`],["ml-28",`margin-left: 7rem; /* 112px */
`],["m-32",`margin: 8rem; /* 128px */
`],["mx-32",`margin-left: 8rem; /* 128px */
margin-right: 8rem; /* 128px */
`],["my-32",`margin-top: 8rem; /* 128px */
margin-bottom: 8rem; /* 128px */
`],["ms-32",`margin-inline-start: 8rem; /* 128px */
`],["me-32",`margin-inline-end: 8rem; /* 128px */
`],["mt-32",`margin-top: 8rem; /* 128px */
`],["mr-32",`margin-right: 8rem; /* 128px */
`],["mb-32",`margin-bottom: 8rem; /* 128px */
`],["ml-32",`margin-left: 8rem; /* 128px */
`],["m-36",`margin: 9rem; /* 144px */
`],["mx-36",`margin-left: 9rem; /* 144px */
margin-right: 9rem; /* 144px */
`],["my-36",`margin-top: 9rem; /* 144px */
margin-bottom: 9rem; /* 144px */
`],["ms-36",`margin-inline-start: 9rem; /* 144px */
`],["me-36",`margin-inline-end: 9rem; /* 144px */
`],["mt-36",`margin-top: 9rem; /* 144px */
`],["mr-36",`margin-right: 9rem; /* 144px */
`],["mb-36",`margin-bottom: 9rem; /* 144px */
`],["ml-36",`margin-left: 9rem; /* 144px */
`],["m-40",`margin: 10rem; /* 160px */
`],["mx-40",`margin-left: 10rem; /* 160px */
margin-right: 10rem; /* 160px */
`],["my-40",`margin-top: 10rem; /* 160px */
margin-bottom: 10rem; /* 160px */
`],["ms-40",`margin-inline-start: 10rem; /* 160px */
`],["me-40",`margin-inline-end: 10rem; /* 160px */
`],["mt-40",`margin-top: 10rem; /* 160px */
`],["mr-40",`margin-right: 10rem; /* 160px */
`],["mb-40",`margin-bottom: 10rem; /* 160px */
`],["ml-40",`margin-left: 10rem; /* 160px */
`],["m-44",`margin: 11rem; /* 176px */
`],["mx-44",`margin-left: 11rem; /* 176px */
margin-right: 11rem; /* 176px */
`],["my-44",`margin-top: 11rem; /* 176px */
margin-bottom: 11rem; /* 176px */
`],["ms-44",`margin-inline-start: 11rem; /* 176px */
`],["me-44",`margin-inline-end: 11rem; /* 176px */
`],["mt-44",`margin-top: 11rem; /* 176px */
`],["mr-44",`margin-right: 11rem; /* 176px */
`],["mb-44",`margin-bottom: 11rem; /* 176px */
`],["ml-44",`margin-left: 11rem; /* 176px */
`],["m-48",`margin: 12rem; /* 192px */
`],["mx-48",`margin-left: 12rem; /* 192px */
margin-right: 12rem; /* 192px */
`],["my-48",`margin-top: 12rem; /* 192px */
margin-bottom: 12rem; /* 192px */
`],["ms-48",`margin-inline-start: 12rem; /* 192px */
`],["me-48",`margin-inline-end: 12rem; /* 192px */
`],["mt-48",`margin-top: 12rem; /* 192px */
`],["mr-48",`margin-right: 12rem; /* 192px */
`],["mb-48",`margin-bottom: 12rem; /* 192px */
`],["ml-48",`margin-left: 12rem; /* 192px */
`],["m-52",`margin: 13rem; /* 208px */
`],["mx-52",`margin-left: 13rem; /* 208px */
margin-right: 13rem; /* 208px */
`],["my-52",`margin-top: 13rem; /* 208px */
margin-bottom: 13rem; /* 208px */
`],["ms-52",`margin-inline-start: 13rem; /* 208px */
`],["me-52",`margin-inline-end: 13rem; /* 208px */
`],["mt-52",`margin-top: 13rem; /* 208px */
`],["mr-52",`margin-right: 13rem; /* 208px */
`],["mb-52",`margin-bottom: 13rem; /* 208px */
`],["ml-52",`margin-left: 13rem; /* 208px */
`],["m-56",`margin: 14rem; /* 224px */
`],["mx-56",`margin-left: 14rem; /* 224px */
margin-right: 14rem; /* 224px */
`],["my-56",`margin-top: 14rem; /* 224px */
margin-bottom: 14rem; /* 224px */
`],["ms-56",`margin-inline-start: 14rem; /* 224px */
`],["me-56",`margin-inline-end: 14rem; /* 224px */
`],["mt-56",`margin-top: 14rem; /* 224px */
`],["mr-56",`margin-right: 14rem; /* 224px */
`],["mb-56",`margin-bottom: 14rem; /* 224px */
`],["ml-56",`margin-left: 14rem; /* 224px */
`],["m-60",`margin: 15rem; /* 240px */
`],["mx-60",`margin-left: 15rem; /* 240px */
margin-right: 15rem; /* 240px */
`],["my-60",`margin-top: 15rem; /* 240px */
margin-bottom: 15rem; /* 240px */
`],["ms-60",`margin-inline-start: 15rem; /* 240px */
`],["me-60",`margin-inline-end: 15rem; /* 240px */
`],["mt-60",`margin-top: 15rem; /* 240px */
`],["mr-60",`margin-right: 15rem; /* 240px */
`],["mb-60",`margin-bottom: 15rem; /* 240px */
`],["ml-60",`margin-left: 15rem; /* 240px */
`],["m-64",`margin: 16rem; /* 256px */
`],["mx-64",`margin-left: 16rem; /* 256px */
margin-right: 16rem; /* 256px */
`],["my-64",`margin-top: 16rem; /* 256px */
margin-bottom: 16rem; /* 256px */
`],["ms-64",`margin-inline-start: 16rem; /* 256px */
`],["me-64",`margin-inline-end: 16rem; /* 256px */
`],["mt-64",`margin-top: 16rem; /* 256px */
`],["mr-64",`margin-right: 16rem; /* 256px */
`],["mb-64",`margin-bottom: 16rem; /* 256px */
`],["ml-64",`margin-left: 16rem; /* 256px */
`],["m-72",`margin: 18rem; /* 288px */
`],["mx-72",`margin-left: 18rem; /* 288px */
margin-right: 18rem; /* 288px */
`],["my-72",`margin-top: 18rem; /* 288px */
margin-bottom: 18rem; /* 288px */
`],["ms-72",`margin-inline-start: 18rem; /* 288px */
`],["me-72",`margin-inline-end: 18rem; /* 288px */
`],["mt-72",`margin-top: 18rem; /* 288px */
`],["mr-72",`margin-right: 18rem; /* 288px */
`],["mb-72",`margin-bottom: 18rem; /* 288px */
`],["ml-72",`margin-left: 18rem; /* 288px */
`],["m-80",`margin: 20rem; /* 320px */
`],["mx-80",`margin-left: 20rem; /* 320px */
margin-right: 20rem; /* 320px */
`],["my-80",`margin-top: 20rem; /* 320px */
margin-bottom: 20rem; /* 320px */
`],["ms-80",`margin-inline-start: 20rem; /* 320px */
`],["me-80",`margin-inline-end: 20rem; /* 320px */
`],["mt-80",`margin-top: 20rem; /* 320px */
`],["mr-80",`margin-right: 20rem; /* 320px */
`],["mb-80",`margin-bottom: 20rem; /* 320px */
`],["ml-80",`margin-left: 20rem; /* 320px */
`],["m-96",`margin: 24rem; /* 384px */
`],["mx-96",`margin-left: 24rem; /* 384px */
margin-right: 24rem; /* 384px */
`],["my-96",`margin-top: 24rem; /* 384px */
margin-bottom: 24rem; /* 384px */
`],["ms-96",`margin-inline-start: 24rem; /* 384px */
`],["me-96",`margin-inline-end: 24rem; /* 384px */
`],["mt-96",`margin-top: 24rem; /* 384px */
`],["mr-96",`margin-right: 24rem; /* 384px */
`],["mb-96",`margin-bottom: 24rem; /* 384px */
`],["ml-96",`margin-left: 24rem; /* 384px */
`],["m-auto",`margin: auto;
`],["mx-auto",`margin-left: auto;
margin-right: auto;
`],["my-auto",`margin-top: auto;
margin-bottom: auto;
`],["ms-auto",`margin-inline-start: auto;
`],["me-auto",`margin-inline-end: auto;
`],["mt-auto",`margin-top: auto;
`],["mr-auto",`margin-right: auto;
`],["mb-auto",`margin-bottom: auto;
`],["ml-auto",`margin-left: auto;
`]]},{url:"https://tailwindcss.com/docs/space",entry:"Space Between",description:"Utilities for controlling the space between child elements.",parameters:[["space-x-0 > * + *",`margin-left: 0px;
`],["space-y-0 > * + *",`margin-top: 0px;
`],["space-x-0.5 > * + *",`margin-left: 0.125rem; /* 2px */
`],["space-y-0.5 > * + *",`margin-top: 0.125rem; /* 2px */
`],["space-x-1 > * + *",`margin-left: 0.25rem; /* 4px */
`],["space-y-1 > * + *",`margin-top: 0.25rem; /* 4px */
`],["space-x-1.5 > * + *",`margin-left: 0.375rem; /* 6px */
`],["space-y-1.5 > * + *",`margin-top: 0.375rem; /* 6px */
`],["space-x-2 > * + *",`margin-left: 0.5rem; /* 8px */
`],["space-y-2 > * + *",`margin-top: 0.5rem; /* 8px */
`],["space-x-2.5 > * + *",`margin-left: 0.625rem; /* 10px */
`],["space-y-2.5 > * + *",`margin-top: 0.625rem; /* 10px */
`],["space-x-3 > * + *",`margin-left: 0.75rem; /* 12px */
`],["space-y-3 > * + *",`margin-top: 0.75rem; /* 12px */
`],["space-x-3.5 > * + *",`margin-left: 0.875rem; /* 14px */
`],["space-y-3.5 > * + *",`margin-top: 0.875rem; /* 14px */
`],["space-x-4 > * + *",`margin-left: 1rem; /* 16px */
`],["space-y-4 > * + *",`margin-top: 1rem; /* 16px */
`],["space-x-5 > * + *",`margin-left: 1.25rem; /* 20px */
`],["space-y-5 > * + *",`margin-top: 1.25rem; /* 20px */
`],["space-x-6 > * + *",`margin-left: 1.5rem; /* 24px */
`],["space-y-6 > * + *",`margin-top: 1.5rem; /* 24px */
`],["space-x-7 > * + *",`margin-left: 1.75rem; /* 28px */
`],["space-y-7 > * + *",`margin-top: 1.75rem; /* 28px */
`],["space-x-8 > * + *",`margin-left: 2rem; /* 32px */
`],["space-y-8 > * + *",`margin-top: 2rem; /* 32px */
`],["space-x-9 > * + *",`margin-left: 2.25rem; /* 36px */
`],["space-y-9 > * + *",`margin-top: 2.25rem; /* 36px */
`],["space-x-10 > * + *",`margin-left: 2.5rem; /* 40px */
`],["space-y-10 > * + *",`margin-top: 2.5rem; /* 40px */
`],["space-x-11 > * + *",`margin-left: 2.75rem; /* 44px */
`],["space-y-11 > * + *",`margin-top: 2.75rem; /* 44px */
`],["space-x-12 > * + *",`margin-left: 3rem; /* 48px */
`],["space-y-12 > * + *",`margin-top: 3rem; /* 48px */
`],["space-x-14 > * + *",`margin-left: 3.5rem; /* 56px */
`],["space-y-14 > * + *",`margin-top: 3.5rem; /* 56px */
`],["space-x-16 > * + *",`margin-left: 4rem; /* 64px */
`],["space-y-16 > * + *",`margin-top: 4rem; /* 64px */
`],["space-x-20 > * + *",`margin-left: 5rem; /* 80px */
`],["space-y-20 > * + *",`margin-top: 5rem; /* 80px */
`],["space-x-24 > * + *",`margin-left: 6rem; /* 96px */
`],["space-y-24 > * + *",`margin-top: 6rem; /* 96px */
`],["space-x-28 > * + *",`margin-left: 7rem; /* 112px */
`],["space-y-28 > * + *",`margin-top: 7rem; /* 112px */
`],["space-x-32 > * + *",`margin-left: 8rem; /* 128px */
`],["space-y-32 > * + *",`margin-top: 8rem; /* 128px */
`],["space-x-36 > * + *",`margin-left: 9rem; /* 144px */
`],["space-y-36 > * + *",`margin-top: 9rem; /* 144px */
`],["space-x-40 > * + *",`margin-left: 10rem; /* 160px */
`],["space-y-40 > * + *",`margin-top: 10rem; /* 160px */
`],["space-x-44 > * + *",`margin-left: 11rem; /* 176px */
`],["space-y-44 > * + *",`margin-top: 11rem; /* 176px */
`],["space-x-48 > * + *",`margin-left: 12rem; /* 192px */
`],["space-y-48 > * + *",`margin-top: 12rem; /* 192px */
`],["space-x-52 > * + *",`margin-left: 13rem; /* 208px */
`],["space-y-52 > * + *",`margin-top: 13rem; /* 208px */
`],["space-x-56 > * + *",`margin-left: 14rem; /* 224px */
`],["space-y-56 > * + *",`margin-top: 14rem; /* 224px */
`],["space-x-60 > * + *",`margin-left: 15rem; /* 240px */
`],["space-y-60 > * + *",`margin-top: 15rem; /* 240px */
`],["space-x-64 > * + *",`margin-left: 16rem; /* 256px */
`],["space-y-64 > * + *",`margin-top: 16rem; /* 256px */
`],["space-x-72 > * + *",`margin-left: 18rem; /* 288px */
`],["space-y-72 > * + *",`margin-top: 18rem; /* 288px */
`],["space-x-80 > * + *",`margin-left: 20rem; /* 320px */
`],["space-y-80 > * + *",`margin-top: 20rem; /* 320px */
`],["space-x-96 > * + *",`margin-left: 24rem; /* 384px */
`],["space-y-96 > * + *",`margin-top: 24rem; /* 384px */
`],["space-x-px > * + *",`margin-left: 1px;
`],["space-y-px > * + *",`margin-top: 1px;
`],["space-y-reverse > * + *",`--tw-space-y-reverse: 1;
`],["space-x-reverse > * + *",`--tw-space-x-reverse: 1;
`]]}],hs=[{url:"https://tailwindcss.com/docs/width",entry:"Width",description:"Utilities for setting the width of an element.",parameters:[["w-0",`width: 0px;
`],["w-px",`width: 1px;
`],["w-0.5",`width: 0.125rem; /* 2px */
`],["w-1",`width: 0.25rem; /* 4px */
`],["w-1.5",`width: 0.375rem; /* 6px */
`],["w-2",`width: 0.5rem; /* 8px */
`],["w-2.5",`width: 0.625rem; /* 10px */
`],["w-3",`width: 0.75rem; /* 12px */
`],["w-3.5",`width: 0.875rem; /* 14px */
`],["w-4",`width: 1rem; /* 16px */
`],["w-5",`width: 1.25rem; /* 20px */
`],["w-6",`width: 1.5rem; /* 24px */
`],["w-7",`width: 1.75rem; /* 28px */
`],["w-8",`width: 2rem; /* 32px */
`],["w-9",`width: 2.25rem; /* 36px */
`],["w-10",`width: 2.5rem; /* 40px */
`],["w-11",`width: 2.75rem; /* 44px */
`],["w-12",`width: 3rem; /* 48px */
`],["w-14",`width: 3.5rem; /* 56px */
`],["w-16",`width: 4rem; /* 64px */
`],["w-20",`width: 5rem; /* 80px */
`],["w-24",`width: 6rem; /* 96px */
`],["w-28",`width: 7rem; /* 112px */
`],["w-32",`width: 8rem; /* 128px */
`],["w-36",`width: 9rem; /* 144px */
`],["w-40",`width: 10rem; /* 160px */
`],["w-44",`width: 11rem; /* 176px */
`],["w-48",`width: 12rem; /* 192px */
`],["w-52",`width: 13rem; /* 208px */
`],["w-56",`width: 14rem; /* 224px */
`],["w-60",`width: 15rem; /* 240px */
`],["w-64",`width: 16rem; /* 256px */
`],["w-72",`width: 18rem; /* 288px */
`],["w-80",`width: 20rem; /* 320px */
`],["w-96",`width: 24rem; /* 384px */
`],["w-auto",`width: auto;
`],["w-1/2",`width: 50%;
`],["w-1/3",`width: 33.333333%;
`],["w-2/3",`width: 66.666667%;
`],["w-1/4",`width: 25%;
`],["w-2/4",`width: 50%;
`],["w-3/4",`width: 75%;
`],["w-1/5",`width: 20%;
`],["w-2/5",`width: 40%;
`],["w-3/5",`width: 60%;
`],["w-4/5",`width: 80%;
`],["w-1/6",`width: 16.666667%;
`],["w-2/6",`width: 33.333333%;
`],["w-3/6",`width: 50%;
`],["w-4/6",`width: 66.666667%;
`],["w-5/6",`width: 83.333333%;
`],["w-1/12",`width: 8.333333%;
`],["w-2/12",`width: 16.666667%;
`],["w-3/12",`width: 25%;
`],["w-4/12",`width: 33.333333%;
`],["w-5/12",`width: 41.666667%;
`],["w-6/12",`width: 50%;
`],["w-7/12",`width: 58.333333%;
`],["w-8/12",`width: 66.666667%;
`],["w-9/12",`width: 75%;
`],["w-10/12",`width: 83.333333%;
`],["w-11/12",`width: 91.666667%;
`],["w-full",`width: 100%;
`],["w-screen",`width: 100vw;
`],["w-svw",`width: 100svw;
`],["w-lvw",`width: 100lvw;
`],["w-dvw",`width: 100dvw;
`],["w-min",`width: min-content;
`],["w-max",`width: max-content;
`],["w-fit",`width: fit-content;
`]]},{url:"https://tailwindcss.com/docs/min-width",entry:"Min-Width",description:"Utilities for setting the minimum width of an element.",parameters:[["min-w-0",`min-width: 0px;
`],["min-w-1",`min-width: 0.25rem; /* 4px */
`],["min-w-2",`min-width: 0.5rem; /* 8px */
`],["min-w-3",`min-width: 0.75rem; /* 12px */
`],["min-w-4",`min-width: 1rem; /* 16px */
`],["min-w-5",`min-width: 1.25rem; /* 20px */
`],["min-w-6",`min-width: 1.5rem; /* 24px */
`],["min-w-7",`min-width: 1.75rem; /* 28px */
`],["min-w-8",`min-width: 2rem; /* 32px */
`],["min-w-9",`min-width: 2.25rem; /* 36px */
`],["min-w-10",`min-width: 2.5rem; /* 40px */
`],["min-w-11",`min-width: 2.75rem; /* 44px */
`],["min-w-12",`min-width: 3rem; /* 48px */
`],["min-w-14",`min-width: 3.5rem; /* 56px */
`],["min-w-16",`min-width: 4rem; /* 64px */
`],["min-w-20",`min-width: 5rem; /* 80px */
`],["min-w-24",`min-width: 6rem; /* 96px */
`],["min-w-28",`min-width: 7rem; /* 112px */
`],["min-w-32",`min-width: 8rem; /* 128px */
`],["min-w-36",`min-width: 9rem; /* 144px */
`],["min-w-40",`min-width: 10rem; /* 160px */
`],["min-w-44",`min-width: 11rem; /* 176px */
`],["min-w-48",`min-width: 12rem; /* 192px */
`],["min-w-52",`min-width: 13rem; /* 208px */
`],["min-w-56",`min-width: 14rem; /* 224px */
`],["min-w-60",`min-width: 15rem; /* 240px */
`],["min-w-64",`min-width: 16rem; /* 256px */
`],["min-w-72",`min-width: 18rem; /* 288px */
`],["min-w-80",`min-width: 20rem; /* 320px */
`],["min-w-96",`min-width: 24rem; /* 384px */
`],["min-w-px",`min-width: 1px;
`],["min-w-0.5",`min-width: 0.125rem; /* 2px */
`],["min-w-1.5",`min-width: 0.375rem; /* 6px */
`],["min-w-2.5",`min-width: 0.625rem; /* 10px */
`],["min-w-3.5",`min-width: 0.875rem; /* 14px */
`],["min-w-full",`min-width: 100%;
`],["min-w-min",`min-width: min-content;
`],["min-w-max",`min-width: max-content;
`],["min-w-fit",`min-width: fit-content;
`]]},{url:"https://tailwindcss.com/docs/max-width",entry:"Max-Width",description:"Utilities for setting the maximum width of an element.",parameters:[["max-w-0",`max-width: 0px;
`],["max-w-px",`max-width: 1px;
`],["max-w-0.5",`max-width: 0.125rem; /* 2px */
`],["max-w-1",`max-width: 0.25rem; /* 4px */
`],["max-w-1.5",`max-width: 0.375rem; /* 6px */
`],["max-w-2",`max-width: 0.5rem; /* 8px */
`],["max-w-2.5",`max-width: 0.625rem; /* 10px */
`],["max-w-3",`max-width: 0.75rem; /* 12px */
`],["max-w-3.5",`max-width: 0.875rem; /* 14px */
`],["max-w-4",`max-width: 1rem; /* 16px */
`],["max-w-5",`max-width: 1.25rem; /* 20px */
`],["max-w-6",`max-width: 1.5rem; /* 24px */
`],["max-w-7",`max-width: 1.75rem; /* 28px */
`],["max-w-8",`max-width: 2rem; /* 32px */
`],["max-w-9",`max-width: 2.25rem; /* 36px */
`],["max-w-10",`max-width: 2.5rem; /* 40px */
`],["max-w-11",`max-width: 2.75rem; /* 44px */
`],["max-w-12",`max-width: 3rem; /* 48px */
`],["max-w-14",`max-width: 3.5rem; /* 56px */
`],["max-w-16",`max-width: 4rem; /* 64px */
`],["max-w-20",`max-width: 5rem; /* 80px */
`],["max-w-24",`max-width: 6rem; /* 96px */
`],["max-w-28",`max-width: 7rem; /* 112px */
`],["max-w-32",`max-width: 8rem; /* 128px */
`],["max-w-36",`max-width: 9rem; /* 144px */
`],["max-w-40",`max-width: 10rem; /* 160px */
`],["max-w-44",`max-width: 11rem; /* 176px */
`],["max-w-48",`max-width: 12rem; /* 192px */
`],["max-w-52",`max-width: 13rem; /* 208px */
`],["max-w-56",`max-width: 14rem; /* 224px */
`],["max-w-60",`max-width: 15rem; /* 240px */
`],["max-w-64",`max-width: 16rem; /* 256px */
`],["max-w-72",`max-width: 18rem; /* 288px */
`],["max-w-80",`max-width: 20rem; /* 320px */
`],["max-w-96",`max-width: 24rem; /* 384px */
`],["max-w-none",`max-width: none;
`],["max-w-xs",`max-width: 20rem; /* 320px */
`],["max-w-sm",`max-width: 24rem; /* 384px */
`],["max-w-md",`max-width: 28rem; /* 448px */
`],["max-w-lg",`max-width: 32rem; /* 512px */
`],["max-w-xl",`max-width: 36rem; /* 576px */
`],["max-w-2xl",`max-width: 42rem; /* 672px */
`],["max-w-3xl",`max-width: 48rem; /* 768px */
`],["max-w-4xl",`max-width: 56rem; /* 896px */
`],["max-w-5xl",`max-width: 64rem; /* 1024px */
`],["max-w-6xl",`max-width: 72rem; /* 1152px */
`],["max-w-7xl",`max-width: 80rem; /* 1280px */
`],["max-w-full",`max-width: 100%;
`],["max-w-min",`max-width: min-content;
`],["max-w-max",`max-width: max-content;
`],["max-w-fit",`max-width: fit-content;
`],["max-w-prose",`max-width: 65ch;
`],["max-w-screen-sm",`max-width: 640px;
`],["max-w-screen-md",`max-width: 768px;
`],["max-w-screen-lg",`max-width: 1024px;
`],["max-w-screen-xl",`max-width: 1280px;
`],["max-w-screen-2xl",`max-width: 1536px;
`]]},{url:"https://tailwindcss.com/docs/height",entry:"Height",description:"Utilities for setting the height of an element.",parameters:[["h-0",`height: 0px;
`],["h-px",`height: 1px;
`],["h-0.5",`height: 0.125rem; /* 2px */
`],["h-1",`height: 0.25rem; /* 4px */
`],["h-1.5",`height: 0.375rem; /* 6px */
`],["h-2",`height: 0.5rem; /* 8px */
`],["h-2.5",`height: 0.625rem; /* 10px */
`],["h-3",`height: 0.75rem; /* 12px */
`],["h-3.5",`height: 0.875rem; /* 14px */
`],["h-4",`height: 1rem; /* 16px */
`],["h-5",`height: 1.25rem; /* 20px */
`],["h-6",`height: 1.5rem; /* 24px */
`],["h-7",`height: 1.75rem; /* 28px */
`],["h-8",`height: 2rem; /* 32px */
`],["h-9",`height: 2.25rem; /* 36px */
`],["h-10",`height: 2.5rem; /* 40px */
`],["h-11",`height: 2.75rem; /* 44px */
`],["h-12",`height: 3rem; /* 48px */
`],["h-14",`height: 3.5rem; /* 56px */
`],["h-16",`height: 4rem; /* 64px */
`],["h-20",`height: 5rem; /* 80px */
`],["h-24",`height: 6rem; /* 96px */
`],["h-28",`height: 7rem; /* 112px */
`],["h-32",`height: 8rem; /* 128px */
`],["h-36",`height: 9rem; /* 144px */
`],["h-40",`height: 10rem; /* 160px */
`],["h-44",`height: 11rem; /* 176px */
`],["h-48",`height: 12rem; /* 192px */
`],["h-52",`height: 13rem; /* 208px */
`],["h-56",`height: 14rem; /* 224px */
`],["h-60",`height: 15rem; /* 240px */
`],["h-64",`height: 16rem; /* 256px */
`],["h-72",`height: 18rem; /* 288px */
`],["h-80",`height: 20rem; /* 320px */
`],["h-96",`height: 24rem; /* 384px */
`],["h-auto",`height: auto;
`],["h-1/2",`height: 50%;
`],["h-1/3",`height: 33.333333%;
`],["h-2/3",`height: 66.666667%;
`],["h-1/4",`height: 25%;
`],["h-2/4",`height: 50%;
`],["h-3/4",`height: 75%;
`],["h-1/5",`height: 20%;
`],["h-2/5",`height: 40%;
`],["h-3/5",`height: 60%;
`],["h-4/5",`height: 80%;
`],["h-1/6",`height: 16.666667%;
`],["h-2/6",`height: 33.333333%;
`],["h-3/6",`height: 50%;
`],["h-4/6",`height: 66.666667%;
`],["h-5/6",`height: 83.333333%;
`],["h-full",`height: 100%;
`],["h-screen",`height: 100vh;
`],["h-svh",`height: 100svh;
`],["h-lvh",`height: 100lvh;
`],["h-dvh",`height: 100dvh;
`],["h-min",`height: min-content;
`],["h-max",`height: max-content;
`],["h-fit",`height: fit-content;
`]]},{url:"https://tailwindcss.com/docs/min-height",entry:"Min-Height",description:"Utilities for setting the minimum height of an element.",parameters:[["min-h-0",`min-height: 0px;
`],["min-h-1",`min-height: 0.25rem; /* 4px */
`],["min-h-2",`min-height: 0.5rem; /* 8px */
`],["min-h-3",`min-height: 0.75rem; /* 12px */
`],["min-h-4",`min-height: 1rem; /* 16px */
`],["min-h-5",`min-height: 1.25rem; /* 20px */
`],["min-h-6",`min-height: 1.5rem; /* 24px */
`],["min-h-7",`min-height: 1.75rem; /* 28px */
`],["min-h-8",`min-height: 2rem; /* 32px */
`],["min-h-9",`min-height: 2.25rem; /* 36px */
`],["min-h-10",`min-height: 2.5rem; /* 40px */
`],["min-h-11",`min-height: 2.75rem; /* 44px */
`],["min-h-12",`min-height: 3rem; /* 48px */
`],["min-h-14",`min-height: 3.5rem; /* 56px */
`],["min-h-16",`min-height: 4rem; /* 64px */
`],["min-h-20",`min-height: 5rem; /* 80px */
`],["min-h-24",`min-height: 6rem; /* 96px */
`],["min-h-28",`min-height: 7rem; /* 112px */
`],["min-h-32",`min-height: 8rem; /* 128px */
`],["min-h-36",`min-height: 9rem; /* 144px */
`],["min-h-40",`min-height: 10rem; /* 160px */
`],["min-h-44",`min-height: 11rem; /* 176px */
`],["min-h-48",`min-height: 12rem; /* 192px */
`],["min-h-52",`min-height: 13rem; /* 208px */
`],["min-h-56",`min-height: 14rem; /* 224px */
`],["min-h-60",`min-height: 15rem; /* 240px */
`],["min-h-64",`min-height: 16rem; /* 256px */
`],["min-h-72",`min-height: 18rem; /* 288px */
`],["min-h-80",`min-height: 20rem; /* 320px */
`],["min-h-96",`min-height: 24rem; /* 384px */
`],["min-h-px",`min-height: 1px;
`],["min-h-0.5",`min-height: 0.125rem; /* 2px */
`],["min-h-1.5",`min-height: 0.375rem; /* 6px */
`],["min-h-2.5",`min-height: 0.625rem; /* 10px */
`],["min-h-3.5",`min-height: 0.875rem; /* 14px */
`],["min-h-full",`min-height: 100%;
`],["min-h-screen",`min-height: 100vh;
`],["min-h-svh",`min-height: 100svh;
`],["min-h-lvh",`min-height: 100lvh;
`],["min-h-dvh",`min-height: 100dvh;
`],["min-h-min",`min-height: min-content;
`],["min-h-max",`min-height: max-content;
`],["min-h-fit",`min-height: fit-content;
`]]},{url:"https://tailwindcss.com/docs/max-height",entry:"Max-Height",description:"Utilities for setting the maximum height of an element.",parameters:[["max-h-0",`max-height: 0px;
`],["max-h-px",`max-height: 1px;
`],["max-h-0.5",`max-height: 0.125rem; /* 2px */
`],["max-h-1",`max-height: 0.25rem; /* 4px */
`],["max-h-1.5",`max-height: 0.375rem; /* 6px */
`],["max-h-2",`max-height: 0.5rem; /* 8px */
`],["max-h-2.5",`max-height: 0.625rem; /* 10px */
`],["max-h-3",`max-height: 0.75rem; /* 12px */
`],["max-h-3.5",`max-height: 0.875rem; /* 14px */
`],["max-h-4",`max-height: 1rem; /* 16px */
`],["max-h-5",`max-height: 1.25rem; /* 20px */
`],["max-h-6",`max-height: 1.5rem; /* 24px */
`],["max-h-7",`max-height: 1.75rem; /* 28px */
`],["max-h-8",`max-height: 2rem; /* 32px */
`],["max-h-9",`max-height: 2.25rem; /* 36px */
`],["max-h-10",`max-height: 2.5rem; /* 40px */
`],["max-h-11",`max-height: 2.75rem; /* 44px */
`],["max-h-12",`max-height: 3rem; /* 48px */
`],["max-h-14",`max-height: 3.5rem; /* 56px */
`],["max-h-16",`max-height: 4rem; /* 64px */
`],["max-h-20",`max-height: 5rem; /* 80px */
`],["max-h-24",`max-height: 6rem; /* 96px */
`],["max-h-28",`max-height: 7rem; /* 112px */
`],["max-h-32",`max-height: 8rem; /* 128px */
`],["max-h-36",`max-height: 9rem; /* 144px */
`],["max-h-40",`max-height: 10rem; /* 160px */
`],["max-h-44",`max-height: 11rem; /* 176px */
`],["max-h-48",`max-height: 12rem; /* 192px */
`],["max-h-52",`max-height: 13rem; /* 208px */
`],["max-h-56",`max-height: 14rem; /* 224px */
`],["max-h-60",`max-height: 15rem; /* 240px */
`],["max-h-64",`max-height: 16rem; /* 256px */
`],["max-h-72",`max-height: 18rem; /* 288px */
`],["max-h-80",`max-height: 20rem; /* 320px */
`],["max-h-96",`max-height: 24rem; /* 384px */
`],["max-h-none",`max-height: none;
`],["max-h-full",`max-height: 100%;
`],["max-h-screen",`max-height: 100vh;
`],["max-h-svh",`max-height: 100svh;
`],["max-h-lvh",`max-height: 100lvh;
`],["max-h-dvh",`max-height: 100dvh;
`],["max-h-min",`max-height: min-content;
`],["max-h-max",`max-height: max-content;
`],["max-h-fit",`max-height: fit-content;
`]]},{url:"https://tailwindcss.com/docs/size",entry:"Size",description:"Utilities for setting the width and height of an element at the same time.",parameters:[["size-0",`width: 0px;
height: 0px;
`],["size-px",`width: 1px;
height: 1px;
`],["size-0.5",`width: 0.125rem; /* 2px */
height: 0.125rem; /* 2px */
`],["size-1",`width: 0.25rem; /* 4px */
height: 0.25rem; /* 4px */
`],["size-1.5",`width: 0.375rem; /* 6px */
height: 0.375rem; /* 6px */
`],["size-2",`width: 0.5rem; /* 8px */
height: 0.5rem; /* 8px */
`],["size-2.5",`width: 0.625rem; /* 10px */
height: 0.625rem; /* 10px */
`],["size-3",`width: 0.75rem; /* 12px */
height: 0.75rem; /* 12px */
`],["size-3.5",`width: 0.875rem; /* 14px */
height: 0.875rem; /* 14px */
`],["size-4",`width: 1rem; /* 16px */
height: 1rem; /* 16px */
`],["size-5",`width: 1.25rem; /* 20px */
height: 1.25rem; /* 20px */
`],["size-6",`width: 1.5rem; /* 24px */
height: 1.5rem; /* 24px */
`],["size-7",`width: 1.75rem; /* 28px */
height: 1.75rem; /* 28px */
`],["size-8",`width: 2rem; /* 32px */
height: 2rem; /* 32px */
`],["size-9",`width: 2.25rem; /* 36px */
height: 2.25rem; /* 36px */
`],["size-10",`width: 2.5rem; /* 40px */
height: 2.5rem; /* 40px */
`],["size-11",`width: 2.75rem; /* 44px */
height: 2.75rem; /* 44px */
`],["size-12",`width: 3rem; /* 48px */
height: 3rem; /* 48px */
`],["size-14",`width: 3.5rem; /* 56px */
height: 3.5rem; /* 56px */
`],["size-16",`width: 4rem; /* 64px */
height: 4rem; /* 64px */
`],["size-20",`width: 5rem; /* 80px */
height: 5rem; /* 80px */
`],["size-24",`width: 6rem; /* 96px */
height: 6rem; /* 96px */
`],["size-28",`width: 7rem; /* 112px */
height: 7rem; /* 112px */
`],["size-32",`width: 8rem; /* 128px */
height: 8rem; /* 128px */
`],["size-36",`width: 9rem; /* 144px */
height: 9rem; /* 144px */
`],["size-40",`width: 10rem; /* 160px */
height: 10rem; /* 160px */
`],["size-44",`width: 11rem; /* 176px */
height: 11rem; /* 176px */
`],["size-48",`width: 12rem; /* 192px */
height: 12rem; /* 192px */
`],["size-52",`width: 13rem; /* 208px */
height: 13rem; /* 208px */
`],["size-56",`width: 14rem; /* 224px */
height: 14rem; /* 224px */
`],["size-60",`width: 15rem; /* 240px */
height: 15rem; /* 240px */
`],["size-64",`width: 16rem; /* 256px */
height: 16rem; /* 256px */
`],["size-72",`width: 18rem; /* 288px */
height: 18rem; /* 288px */
`],["size-80",`width: 20rem; /* 320px */
height: 20rem; /* 320px */
`],["size-96",`width: 24rem; /* 384px */
height: 24rem; /* 384px */
`],["size-auto",`width: auto;
height: auto;
`],["size-1/2",`width: 50%;
height: 50%;
`],["size-1/3",`width: 33.333333%;
height: 33.333333%;
`],["size-2/3",`width: 66.666667%;
height: 66.666667%;
`],["size-1/4",`width: 25%;
height: 25%;
`],["size-2/4",`width: 50%;
height: 50%;
`],["size-3/4",`width: 75%;
height: 75%;
`],["size-1/5",`width: 20%;
height: 20%;
`],["size-2/5",`width: 40%;
height: 40%;
`],["size-3/5",`width: 60%;
height: 60%;
`],["size-4/5",`width: 80%;
height: 80%;
`],["size-1/6",`width: 16.666667%;
height: 16.666667%;
`],["size-2/6",`width: 33.333333%;
height: 33.333333%;
`],["size-3/6",`width: 50%;
height: 50%;
`],["size-4/6",`width: 66.666667%;
height: 66.666667%;
`],["size-5/6",`width: 83.333333%;
height: 83.333333%;
`],["size-1/12",`width: 8.333333%;
height: 8.333333%;
`],["size-2/12",`width: 16.666667%;
height: 16.666667%;
`],["size-3/12",`width: 25%;
height: 25%;
`],["size-4/12",`width: 33.333333%;
height: 33.333333%;
`],["size-5/12",`width: 41.666667%;
height: 41.666667%;
`],["size-6/12",`width: 50%;
height: 50%;
`],["size-7/12",`width: 58.333333%;
height: 58.333333%;
`],["size-8/12",`width: 66.666667%;
height: 66.666667%;
`],["size-9/12",`width: 75%;
height: 75%;
`],["size-10/12",`width: 83.333333%;
height: 83.333333%;
`],["size-11/12",`width: 91.666667%;
height: 91.666667%;
`],["size-full",`width: 100%;
height: 100%;
`],["size-min",`width: min-content;
height: min-content;
`],["size-max",`width: max-content;
height: max-content;
`],["size-fit",`width: fit-content;
height: fit-content;
`]]}],vs=[{url:"https://tailwindcss.com/docs/font-family",entry:"Font Family",description:"Utilities for controlling the font family of an element.",parameters:[["font-sans",`font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`],["font-serif",`font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
`],["font-mono",`font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`]]},{url:"https://tailwindcss.com/docs/font-size",entry:"Font Size",description:"Utilities for controlling the font size of an element.",parameters:[["text-xs",`font-size: 0.75rem; /* 12px */
line-height: 1rem; /* 16px */
`],["text-sm",`font-size: 0.875rem; /* 14px */
line-height: 1.25rem; /* 20px */
`],["text-base",`font-size: 1rem; /* 16px */
line-height: 1.5rem; /* 24px */
`],["text-lg",`font-size: 1.125rem; /* 18px */
line-height: 1.75rem; /* 28px */
`],["text-xl",`font-size: 1.25rem; /* 20px */
line-height: 1.75rem; /* 28px */
`],["text-2xl",`font-size: 1.5rem; /* 24px */
line-height: 2rem; /* 32px */
`],["text-3xl",`font-size: 1.875rem; /* 30px */
line-height: 2.25rem; /* 36px */
`],["text-4xl",`font-size: 2.25rem; /* 36px */
line-height: 2.5rem; /* 40px */
`],["text-5xl",`font-size: 3rem; /* 48px */
line-height: 1;
`],["text-6xl",`font-size: 3.75rem; /* 60px */
line-height: 1;
`],["text-7xl",`font-size: 4.5rem; /* 72px */
line-height: 1;
`],["text-8xl",`font-size: 6rem; /* 96px */
line-height: 1;
`],["text-9xl",`font-size: 8rem; /* 128px */
line-height: 1;
`]]},{url:"https://tailwindcss.com/docs/font-smoothing",entry:"Font Smoothing",description:"Utilities for controlling the font smoothing of an element.",parameters:[["antialiased",`-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`],["subpixel-antialiased",`-webkit-font-smoothing: auto;
-moz-osx-font-smoothing: auto;
`]]},{url:"https://tailwindcss.com/docs/font-style",entry:"Font Style",description:"Utilities for controlling the style of text.",parameters:[["italic",`font-style: italic;
`],["not-italic",`font-style: normal;
`]]},{url:"https://tailwindcss.com/docs/font-weight",entry:"Font Weight",description:"Utilities for controlling the font weight of an element.",parameters:[["font-thin",`font-weight: 100;
`],["font-extralight",`font-weight: 200;
`],["font-light",`font-weight: 300;
`],["font-normal",`font-weight: 400;
`],["font-medium",`font-weight: 500;
`],["font-semibold",`font-weight: 600;
`],["font-bold",`font-weight: 700;
`],["font-extrabold",`font-weight: 800;
`],["font-black",`font-weight: 900;
`]]},{url:"https://tailwindcss.com/docs/font-variant-numeric",entry:"Font Variant Numeric",description:"Utilities for controlling the variant of numbers.",parameters:[["normal-nums",`font-variant-numeric: normal;
`],["ordinal",`font-variant-numeric: ordinal;
`],["slashed-zero",`font-variant-numeric: slashed-zero;
`],["lining-nums",`font-variant-numeric: lining-nums;
`],["oldstyle-nums",`font-variant-numeric: oldstyle-nums;
`],["proportional-nums",`font-variant-numeric: proportional-nums;
`],["tabular-nums",`font-variant-numeric: tabular-nums;
`],["diagonal-fractions",`font-variant-numeric: diagonal-fractions;
`],["stacked-fractions",`font-variant-numeric: stacked-fractions;
`]]},{url:"https://tailwindcss.com/docs/letter-spacing",entry:"Letter Spacing",description:"Utilities for controlling the tracking (letter spacing) of an element.",parameters:[["tracking-tighter",`letter-spacing: -0.05em;
`],["tracking-tight",`letter-spacing: -0.025em;
`],["tracking-normal",`letter-spacing: 0em;
`],["tracking-wide",`letter-spacing: 0.025em;
`],["tracking-wider",`letter-spacing: 0.05em;
`],["tracking-widest",`letter-spacing: 0.1em;
`]]},{url:"https://tailwindcss.com/docs/line-clamp",entry:"Line Clamp",description:"Utilities for clamping text to a specific number of lines.",parameters:[["line-clamp-1",`overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
`],["line-clamp-2",`overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
`],["line-clamp-3",`overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
`],["line-clamp-4",`overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
`],["line-clamp-5",`overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 5;
`],["line-clamp-6",`overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 6;
`],["line-clamp-none",`overflow: visible;
display: block;
-webkit-box-orient: horizontal;
-webkit-line-clamp: none;
`]]},{url:"https://tailwindcss.com/docs/line-height",entry:"Line Height",description:"Utilities for controlling the leading (line height) of an element.",parameters:[["leading-3",`line-height: .75rem; /* 12px */
`],["leading-4",`line-height: 1rem; /* 16px */
`],["leading-5",`line-height: 1.25rem; /* 20px */
`],["leading-6",`line-height: 1.5rem; /* 24px */
`],["leading-7",`line-height: 1.75rem; /* 28px */
`],["leading-8",`line-height: 2rem; /* 32px */
`],["leading-9",`line-height: 2.25rem; /* 36px */
`],["leading-10",`line-height: 2.5rem; /* 40px */
`],["leading-none",`line-height: 1;
`],["leading-tight",`line-height: 1.25;
`],["leading-snug",`line-height: 1.375;
`],["leading-normal",`line-height: 1.5;
`],["leading-relaxed",`line-height: 1.625;
`],["leading-loose",`line-height: 2;
`]]},{url:"https://tailwindcss.com/docs/list-style-image",entry:"List Style Image",description:"Utilities for controlling the marker images for list items.",parameters:[["list-image-none",`list-style-image: none;
`]]},{url:"https://tailwindcss.com/docs/list-style-position",entry:"List Style Position",description:"Utilities for controlling the position of bullets/numbers in lists.",parameters:[["list-inside",`list-style-position: inside;
`],["list-outside",`list-style-position: outside;
`]]},{url:"https://tailwindcss.com/docs/list-style-type",entry:"List Style Type",description:"Utilities for controlling the bullet/number style of a list.",parameters:[["list-none",`list-style-type: none;
`],["list-disc",`list-style-type: disc;
`],["list-decimal",`list-style-type: decimal;
`]]},{url:"https://tailwindcss.com/docs/text-align",entry:"Text Align",description:"Utilities for controlling the alignment of text.",parameters:[["text-left",`text-align: left;
`],["text-center",`text-align: center;
`],["text-right",`text-align: right;
`],["text-justify",`text-align: justify;
`],["text-start",`text-align: start;
`],["text-end",`text-align: end;
`]]},{url:"https://tailwindcss.com/docs/text-color",entry:"Text Color",description:"Utilities for controlling the text color of an element.",parameters:[["text-inherit",`color: inherit;
`,"Aa"],["text-current",`color: currentColor;
`,"Aa"],["text-transparent",`color: transparent;
`,"Aa"],["text-black",`color: rgb(0 0 0);
`,"Aa"],["text-white",`color: rgb(255 255 255);
`,"Aa"],["text-slate-50",`color: rgb(248 250 252);
`,"Aa"],["text-slate-100",`color: rgb(241 245 249);
`,"Aa"],["text-slate-200",`color: rgb(226 232 240);
`,"Aa"],["text-slate-300",`color: rgb(203 213 225);
`,"Aa"],["text-slate-400",`color: rgb(148 163 184);
`,"Aa"],["text-slate-500",`color: rgb(100 116 139);
`,"Aa"],["text-slate-600",`color: rgb(71 85 105);
`,"Aa"],["text-slate-700",`color: rgb(51 65 85);
`,"Aa"],["text-slate-800",`color: rgb(30 41 59);
`,"Aa"],["text-slate-900",`color: rgb(15 23 42);
`,"Aa"],["text-slate-950",`color: rgb(2 6 23);
`,"Aa"],["text-gray-50",`color: rgb(249 250 251);
`,"Aa"],["text-gray-100",`color: rgb(243 244 246);
`,"Aa"],["text-gray-200",`color: rgb(229 231 235);
`,"Aa"],["text-gray-300",`color: rgb(209 213 219);
`,"Aa"],["text-gray-400",`color: rgb(156 163 175);
`,"Aa"],["text-gray-500",`color: rgb(107 114 128);
`,"Aa"],["text-gray-600",`color: rgb(75 85 99);
`,"Aa"],["text-gray-700",`color: rgb(55 65 81);
`,"Aa"],["text-gray-800",`color: rgb(31 41 55);
`,"Aa"],["text-gray-900",`color: rgb(17 24 39);
`,"Aa"],["text-gray-950",`color: rgb(3 7 18);
`,"Aa"],["text-zinc-50",`color: rgb(250 250 250);
`,"Aa"],["text-zinc-100",`color: rgb(244 244 245);
`,"Aa"],["text-zinc-200",`color: rgb(228 228 231);
`,"Aa"],["text-zinc-300",`color: rgb(212 212 216);
`,"Aa"],["text-zinc-400",`color: rgb(161 161 170);
`,"Aa"],["text-zinc-500",`color: rgb(113 113 122);
`,"Aa"],["text-zinc-600",`color: rgb(82 82 91);
`,"Aa"],["text-zinc-700",`color: rgb(63 63 70);
`,"Aa"],["text-zinc-800",`color: rgb(39 39 42);
`,"Aa"],["text-zinc-900",`color: rgb(24 24 27);
`,"Aa"],["text-zinc-950",`color: rgb(9 9 11);
`,"Aa"],["text-neutral-50",`color: rgb(250 250 250);
`,"Aa"],["text-neutral-100",`color: rgb(245 245 245);
`,"Aa"],["text-neutral-200",`color: rgb(229 229 229);
`,"Aa"],["text-neutral-300",`color: rgb(212 212 212);
`,"Aa"],["text-neutral-400",`color: rgb(163 163 163);
`,"Aa"],["text-neutral-500",`color: rgb(115 115 115);
`,"Aa"],["text-neutral-600",`color: rgb(82 82 82);
`,"Aa"],["text-neutral-700",`color: rgb(64 64 64);
`,"Aa"],["text-neutral-800",`color: rgb(38 38 38);
`,"Aa"],["text-neutral-900",`color: rgb(23 23 23);
`,"Aa"],["text-neutral-950",`color: rgb(10 10 10);
`,"Aa"],["text-stone-50",`color: rgb(250 250 249);
`,"Aa"],["text-stone-100",`color: rgb(245 245 244);
`,"Aa"],["text-stone-200",`color: rgb(231 229 228);
`,"Aa"],["text-stone-300",`color: rgb(214 211 209);
`,"Aa"],["text-stone-400",`color: rgb(168 162 158);
`,"Aa"],["text-stone-500",`color: rgb(120 113 108);
`,"Aa"],["text-stone-600",`color: rgb(87 83 78);
`,"Aa"],["text-stone-700",`color: rgb(68 64 60);
`,"Aa"],["text-stone-800",`color: rgb(41 37 36);
`,"Aa"],["text-stone-900",`color: rgb(28 25 23);
`,"Aa"],["text-stone-950",`color: rgb(12 10 9);
`,"Aa"],["text-red-50",`color: rgb(254 242 242);
`,"Aa"],["text-red-100",`color: rgb(254 226 226);
`,"Aa"],["text-red-200",`color: rgb(254 202 202);
`,"Aa"],["text-red-300",`color: rgb(252 165 165);
`,"Aa"],["text-red-400",`color: rgb(248 113 113);
`,"Aa"],["text-red-500",`color: rgb(239 68 68);
`,"Aa"],["text-red-600",`color: rgb(220 38 38);
`,"Aa"],["text-red-700",`color: rgb(185 28 28);
`,"Aa"],["text-red-800",`color: rgb(153 27 27);
`,"Aa"],["text-red-900",`color: rgb(127 29 29);
`,"Aa"],["text-red-950",`color: rgb(69 10 10);
`,"Aa"],["text-orange-50",`color: rgb(255 247 237);
`,"Aa"],["text-orange-100",`color: rgb(255 237 213);
`,"Aa"],["text-orange-200",`color: rgb(254 215 170);
`,"Aa"],["text-orange-300",`color: rgb(253 186 116);
`,"Aa"],["text-orange-400",`color: rgb(251 146 60);
`,"Aa"],["text-orange-500",`color: rgb(249 115 22);
`,"Aa"],["text-orange-600",`color: rgb(234 88 12);
`,"Aa"],["text-orange-700",`color: rgb(194 65 12);
`,"Aa"],["text-orange-800",`color: rgb(154 52 18);
`,"Aa"],["text-orange-900",`color: rgb(124 45 18);
`,"Aa"],["text-orange-950",`color: rgb(67 20 7);
`,"Aa"],["text-amber-50",`color: rgb(255 251 235);
`,"Aa"],["text-amber-100",`color: rgb(254 243 199);
`,"Aa"],["text-amber-200",`color: rgb(253 230 138);
`,"Aa"],["text-amber-300",`color: rgb(252 211 77);
`,"Aa"],["text-amber-400",`color: rgb(251 191 36);
`,"Aa"],["text-amber-500",`color: rgb(245 158 11);
`,"Aa"],["text-amber-600",`color: rgb(217 119 6);
`,"Aa"],["text-amber-700",`color: rgb(180 83 9);
`,"Aa"],["text-amber-800",`color: rgb(146 64 14);
`,"Aa"],["text-amber-900",`color: rgb(120 53 15);
`,"Aa"],["text-amber-950",`color: rgb(69 26 3);
`,"Aa"],["text-yellow-50",`color: rgb(254 252 232);
`,"Aa"],["text-yellow-100",`color: rgb(254 249 195);
`,"Aa"],["text-yellow-200",`color: rgb(254 240 138);
`,"Aa"],["text-yellow-300",`color: rgb(253 224 71);
`,"Aa"],["text-yellow-400",`color: rgb(250 204 21);
`,"Aa"],["text-yellow-500",`color: rgb(234 179 8);
`,"Aa"],["text-yellow-600",`color: rgb(202 138 4);
`,"Aa"],["text-yellow-700",`color: rgb(161 98 7);
`,"Aa"],["text-yellow-800",`color: rgb(133 77 14);
`,"Aa"],["text-yellow-900",`color: rgb(113 63 18);
`,"Aa"],["text-yellow-950",`color: rgb(66 32 6);
`,"Aa"],["text-lime-50",`color: rgb(247 254 231);
`,"Aa"],["text-lime-100",`color: rgb(236 252 203);
`,"Aa"],["text-lime-200",`color: rgb(217 249 157);
`,"Aa"],["text-lime-300",`color: rgb(190 242 100);
`,"Aa"],["text-lime-400",`color: rgb(163 230 53);
`,"Aa"],["text-lime-500",`color: rgb(132 204 22);
`,"Aa"],["text-lime-600",`color: rgb(101 163 13);
`,"Aa"],["text-lime-700",`color: rgb(77 124 15);
`,"Aa"],["text-lime-800",`color: rgb(63 98 18);
`,"Aa"],["text-lime-900",`color: rgb(54 83 20);
`,"Aa"],["text-lime-950",`color: rgb(26 46 5);
`,"Aa"],["text-green-50",`color: rgb(240 253 244);
`,"Aa"],["text-green-100",`color: rgb(220 252 231);
`,"Aa"],["text-green-200",`color: rgb(187 247 208);
`,"Aa"],["text-green-300",`color: rgb(134 239 172);
`,"Aa"],["text-green-400",`color: rgb(74 222 128);
`,"Aa"],["text-green-500",`color: rgb(34 197 94);
`,"Aa"],["text-green-600",`color: rgb(22 163 74);
`,"Aa"],["text-green-700",`color: rgb(21 128 61);
`,"Aa"],["text-green-800",`color: rgb(22 101 52);
`,"Aa"],["text-green-900",`color: rgb(20 83 45);
`,"Aa"],["text-green-950",`color: rgb(5 46 22);
`,"Aa"],["text-emerald-50",`color: rgb(236 253 245);
`,"Aa"],["text-emerald-100",`color: rgb(209 250 229);
`,"Aa"],["text-emerald-200",`color: rgb(167 243 208);
`,"Aa"],["text-emerald-300",`color: rgb(110 231 183);
`,"Aa"],["text-emerald-400",`color: rgb(52 211 153);
`,"Aa"],["text-emerald-500",`color: rgb(16 185 129);
`,"Aa"],["text-emerald-600",`color: rgb(5 150 105);
`,"Aa"],["text-emerald-700",`color: rgb(4 120 87);
`,"Aa"],["text-emerald-800",`color: rgb(6 95 70);
`,"Aa"],["text-emerald-900",`color: rgb(6 78 59);
`,"Aa"],["text-emerald-950",`color: rgb(2 44 34);
`,"Aa"],["text-teal-50",`color: rgb(240 253 250);
`,"Aa"],["text-teal-100",`color: rgb(204 251 241);
`,"Aa"],["text-teal-200",`color: rgb(153 246 228);
`,"Aa"],["text-teal-300",`color: rgb(94 234 212);
`,"Aa"],["text-teal-400",`color: rgb(45 212 191);
`,"Aa"],["text-teal-500",`color: rgb(20 184 166);
`,"Aa"],["text-teal-600",`color: rgb(13 148 136);
`,"Aa"],["text-teal-700",`color: rgb(15 118 110);
`,"Aa"],["text-teal-800",`color: rgb(17 94 89);
`,"Aa"],["text-teal-900",`color: rgb(19 78 74);
`,"Aa"],["text-teal-950",`color: rgb(4 47 46);
`,"Aa"],["text-cyan-50",`color: rgb(236 254 255);
`,"Aa"],["text-cyan-100",`color: rgb(207 250 254);
`,"Aa"],["text-cyan-200",`color: rgb(165 243 252);
`,"Aa"],["text-cyan-300",`color: rgb(103 232 249);
`,"Aa"],["text-cyan-400",`color: rgb(34 211 238);
`,"Aa"],["text-cyan-500",`color: rgb(6 182 212);
`,"Aa"],["text-cyan-600",`color: rgb(8 145 178);
`,"Aa"],["text-cyan-700",`color: rgb(14 116 144);
`,"Aa"],["text-cyan-800",`color: rgb(21 94 117);
`,"Aa"],["text-cyan-900",`color: rgb(22 78 99);
`,"Aa"],["text-cyan-950",`color: rgb(8 51 68);
`,"Aa"],["text-sky-50",`color: rgb(240 249 255);
`,"Aa"],["text-sky-100",`color: rgb(224 242 254);
`,"Aa"],["text-sky-200",`color: rgb(186 230 253);
`,"Aa"],["text-sky-300",`color: rgb(125 211 252);
`,"Aa"],["text-sky-400",`color: rgb(56 189 248);
`,"Aa"],["text-sky-500",`color: rgb(14 165 233);
`,"Aa"],["text-sky-600",`color: rgb(2 132 199);
`,"Aa"],["text-sky-700",`color: rgb(3 105 161);
`,"Aa"],["text-sky-800",`color: rgb(7 89 133);
`,"Aa"],["text-sky-900",`color: rgb(12 74 110);
`,"Aa"],["text-sky-950",`color: rgb(8 47 73);
`,"Aa"],["text-blue-50",`color: rgb(239 246 255);
`,"Aa"],["text-blue-100",`color: rgb(219 234 254);
`,"Aa"],["text-blue-200",`color: rgb(191 219 254);
`,"Aa"],["text-blue-300",`color: rgb(147 197 253);
`,"Aa"],["text-blue-400",`color: rgb(96 165 250);
`,"Aa"],["text-blue-500",`color: rgb(59 130 246);
`,"Aa"],["text-blue-600",`color: rgb(37 99 235);
`,"Aa"],["text-blue-700",`color: rgb(29 78 216);
`,"Aa"],["text-blue-800",`color: rgb(30 64 175);
`,"Aa"],["text-blue-900",`color: rgb(30 58 138);
`,"Aa"],["text-blue-950",`color: rgb(23 37 84);
`,"Aa"],["text-indigo-50",`color: rgb(238 242 255);
`,"Aa"],["text-indigo-100",`color: rgb(224 231 255);
`,"Aa"],["text-indigo-200",`color: rgb(199 210 254);
`,"Aa"],["text-indigo-300",`color: rgb(165 180 252);
`,"Aa"],["text-indigo-400",`color: rgb(129 140 248);
`,"Aa"],["text-indigo-500",`color: rgb(99 102 241);
`,"Aa"],["text-indigo-600",`color: rgb(79 70 229);
`,"Aa"],["text-indigo-700",`color: rgb(67 56 202);
`,"Aa"],["text-indigo-800",`color: rgb(55 48 163);
`,"Aa"],["text-indigo-900",`color: rgb(49 46 129);
`,"Aa"],["text-indigo-950",`color: rgb(30 27 75);
`,"Aa"],["text-violet-50",`color: rgb(245 243 255);
`,"Aa"],["text-violet-100",`color: rgb(237 233 254);
`,"Aa"],["text-violet-200",`color: rgb(221 214 254);
`,"Aa"],["text-violet-300",`color: rgb(196 181 253);
`,"Aa"],["text-violet-400",`color: rgb(167 139 250);
`,"Aa"],["text-violet-500",`color: rgb(139 92 246);
`,"Aa"],["text-violet-600",`color: rgb(124 58 237);
`,"Aa"],["text-violet-700",`color: rgb(109 40 217);
`,"Aa"],["text-violet-800",`color: rgb(91 33 182);
`,"Aa"],["text-violet-900",`color: rgb(76 29 149);
`,"Aa"],["text-violet-950",`color: rgb(46 16 101);
`,"Aa"],["text-purple-50",`color: rgb(250 245 255);
`,"Aa"],["text-purple-100",`color: rgb(243 232 255);
`,"Aa"],["text-purple-200",`color: rgb(233 213 255);
`,"Aa"],["text-purple-300",`color: rgb(216 180 254);
`,"Aa"],["text-purple-400",`color: rgb(192 132 252);
`,"Aa"],["text-purple-500",`color: rgb(168 85 247);
`,"Aa"],["text-purple-600",`color: rgb(147 51 234);
`,"Aa"],["text-purple-700",`color: rgb(126 34 206);
`,"Aa"],["text-purple-800",`color: rgb(107 33 168);
`,"Aa"],["text-purple-900",`color: rgb(88 28 135);
`,"Aa"],["text-purple-950",`color: rgb(59 7 100);
`,"Aa"],["text-fuchsia-50",`color: rgb(253 244 255);
`,"Aa"],["text-fuchsia-100",`color: rgb(250 232 255);
`,"Aa"],["text-fuchsia-200",`color: rgb(245 208 254);
`,"Aa"],["text-fuchsia-300",`color: rgb(240 171 252);
`,"Aa"],["text-fuchsia-400",`color: rgb(232 121 249);
`,"Aa"],["text-fuchsia-500",`color: rgb(217 70 239);
`,"Aa"],["text-fuchsia-600",`color: rgb(192 38 211);
`,"Aa"],["text-fuchsia-700",`color: rgb(162 28 175);
`,"Aa"],["text-fuchsia-800",`color: rgb(134 25 143);
`,"Aa"],["text-fuchsia-900",`color: rgb(112 26 117);
`,"Aa"],["text-fuchsia-950",`color: rgb(74 4 78);
`,"Aa"],["text-pink-50",`color: rgb(253 242 248);
`,"Aa"],["text-pink-100",`color: rgb(252 231 243);
`,"Aa"],["text-pink-200",`color: rgb(251 207 232);
`,"Aa"],["text-pink-300",`color: rgb(249 168 212);
`,"Aa"],["text-pink-400",`color: rgb(244 114 182);
`,"Aa"],["text-pink-500",`color: rgb(236 72 153);
`,"Aa"],["text-pink-600",`color: rgb(219 39 119);
`,"Aa"],["text-pink-700",`color: rgb(190 24 93);
`,"Aa"],["text-pink-800",`color: rgb(157 23 77);
`,"Aa"],["text-pink-900",`color: rgb(131 24 67);
`,"Aa"],["text-pink-950",`color: rgb(80 7 36);
`,"Aa"],["text-rose-50",`color: rgb(255 241 242);
`,"Aa"],["text-rose-100",`color: rgb(255 228 230);
`,"Aa"],["text-rose-200",`color: rgb(254 205 211);
`,"Aa"],["text-rose-300",`color: rgb(253 164 175);
`,"Aa"],["text-rose-400",`color: rgb(251 113 133);
`,"Aa"],["text-rose-500",`color: rgb(244 63 94);
`,"Aa"],["text-rose-600",`color: rgb(225 29 72);
`,"Aa"],["text-rose-700",`color: rgb(190 18 60);
`,"Aa"],["text-rose-800",`color: rgb(159 18 57);
`,"Aa"],["text-rose-900",`color: rgb(136 19 55);
`,"Aa"],["text-rose-950",`color: rgb(76 5 25);
`,"Aa"]]},{url:"https://tailwindcss.com/docs/text-decoration",entry:"Text Decoration",description:"Utilities for controlling the decoration of text.",parameters:[["underline",`text-decoration-line: underline;
`],["overline",`text-decoration-line: overline;
`],["line-through",`text-decoration-line: line-through;
`],["no-underline",`text-decoration-line: none;
`]]},{url:"https://tailwindcss.com/docs/text-decoration-color",entry:"Text Decoration Color",description:"Utilities for controlling the color of text decorations.",parameters:[["decoration-inherit",`text-decoration-color: inherit;
`],["decoration-current",`text-decoration-color: currentColor;
`],["decoration-transparent",`text-decoration-color: transparent;
`],["decoration-black",`text-decoration-color: #000;
`],["decoration-white",`text-decoration-color: #fff;
`],["decoration-slate-50",`text-decoration-color: #f8fafc;
`],["decoration-slate-100",`text-decoration-color: #f1f5f9;
`],["decoration-slate-200",`text-decoration-color: #e2e8f0;
`],["decoration-slate-300",`text-decoration-color: #cbd5e1;
`],["decoration-slate-400",`text-decoration-color: #94a3b8;
`],["decoration-slate-500",`text-decoration-color: #64748b;
`],["decoration-slate-600",`text-decoration-color: #475569;
`],["decoration-slate-700",`text-decoration-color: #334155;
`],["decoration-slate-800",`text-decoration-color: #1e293b;
`],["decoration-slate-900",`text-decoration-color: #0f172a;
`],["decoration-slate-950",`text-decoration-color: #020617;
`],["decoration-gray-50",`text-decoration-color: #f9fafb;
`],["decoration-gray-100",`text-decoration-color: #f3f4f6;
`],["decoration-gray-200",`text-decoration-color: #e5e7eb;
`],["decoration-gray-300",`text-decoration-color: #d1d5db;
`],["decoration-gray-400",`text-decoration-color: #9ca3af;
`],["decoration-gray-500",`text-decoration-color: #6b7280;
`],["decoration-gray-600",`text-decoration-color: #4b5563;
`],["decoration-gray-700",`text-decoration-color: #374151;
`],["decoration-gray-800",`text-decoration-color: #1f2937;
`],["decoration-gray-900",`text-decoration-color: #111827;
`],["decoration-gray-950",`text-decoration-color: #030712;
`],["decoration-zinc-50",`text-decoration-color: #fafafa;
`],["decoration-zinc-100",`text-decoration-color: #f4f4f5;
`],["decoration-zinc-200",`text-decoration-color: #e4e4e7;
`],["decoration-zinc-300",`text-decoration-color: #d4d4d8;
`],["decoration-zinc-400",`text-decoration-color: #a1a1aa;
`],["decoration-zinc-500",`text-decoration-color: #71717a;
`],["decoration-zinc-600",`text-decoration-color: #52525b;
`],["decoration-zinc-700",`text-decoration-color: #3f3f46;
`],["decoration-zinc-800",`text-decoration-color: #27272a;
`],["decoration-zinc-900",`text-decoration-color: #18181b;
`],["decoration-zinc-950",`text-decoration-color: #09090b;
`],["decoration-neutral-50",`text-decoration-color: #fafafa;
`],["decoration-neutral-100",`text-decoration-color: #f5f5f5;
`],["decoration-neutral-200",`text-decoration-color: #e5e5e5;
`],["decoration-neutral-300",`text-decoration-color: #d4d4d4;
`],["decoration-neutral-400",`text-decoration-color: #a3a3a3;
`],["decoration-neutral-500",`text-decoration-color: #737373;
`],["decoration-neutral-600",`text-decoration-color: #525252;
`],["decoration-neutral-700",`text-decoration-color: #404040;
`],["decoration-neutral-800",`text-decoration-color: #262626;
`],["decoration-neutral-900",`text-decoration-color: #171717;
`],["decoration-neutral-950",`text-decoration-color: #0a0a0a;
`],["decoration-stone-50",`text-decoration-color: #fafaf9;
`],["decoration-stone-100",`text-decoration-color: #f5f5f4;
`],["decoration-stone-200",`text-decoration-color: #e7e5e4;
`],["decoration-stone-300",`text-decoration-color: #d6d3d1;
`],["decoration-stone-400",`text-decoration-color: #a8a29e;
`],["decoration-stone-500",`text-decoration-color: #78716c;
`],["decoration-stone-600",`text-decoration-color: #57534e;
`],["decoration-stone-700",`text-decoration-color: #44403c;
`],["decoration-stone-800",`text-decoration-color: #292524;
`],["decoration-stone-900",`text-decoration-color: #1c1917;
`],["decoration-stone-950",`text-decoration-color: #0c0a09;
`],["decoration-red-50",`text-decoration-color: #fef2f2;
`],["decoration-red-100",`text-decoration-color: #fee2e2;
`],["decoration-red-200",`text-decoration-color: #fecaca;
`],["decoration-red-300",`text-decoration-color: #fca5a5;
`],["decoration-red-400",`text-decoration-color: #f87171;
`],["decoration-red-500",`text-decoration-color: #ef4444;
`],["decoration-red-600",`text-decoration-color: #dc2626;
`],["decoration-red-700",`text-decoration-color: #b91c1c;
`],["decoration-red-800",`text-decoration-color: #991b1b;
`],["decoration-red-900",`text-decoration-color: #7f1d1d;
`],["decoration-red-950",`text-decoration-color: #450a0a;
`],["decoration-orange-50",`text-decoration-color: #fff7ed;
`],["decoration-orange-100",`text-decoration-color: #ffedd5;
`],["decoration-orange-200",`text-decoration-color: #fed7aa;
`],["decoration-orange-300",`text-decoration-color: #fdba74;
`],["decoration-orange-400",`text-decoration-color: #fb923c;
`],["decoration-orange-500",`text-decoration-color: #f97316;
`],["decoration-orange-600",`text-decoration-color: #ea580c;
`],["decoration-orange-700",`text-decoration-color: #c2410c;
`],["decoration-orange-800",`text-decoration-color: #9a3412;
`],["decoration-orange-900",`text-decoration-color: #7c2d12;
`],["decoration-orange-950",`text-decoration-color: #431407;
`],["decoration-amber-50",`text-decoration-color: #fffbeb;
`],["decoration-amber-100",`text-decoration-color: #fef3c7;
`],["decoration-amber-200",`text-decoration-color: #fde68a;
`],["decoration-amber-300",`text-decoration-color: #fcd34d;
`],["decoration-amber-400",`text-decoration-color: #fbbf24;
`],["decoration-amber-500",`text-decoration-color: #f59e0b;
`],["decoration-amber-600",`text-decoration-color: #d97706;
`],["decoration-amber-700",`text-decoration-color: #b45309;
`],["decoration-amber-800",`text-decoration-color: #92400e;
`],["decoration-amber-900",`text-decoration-color: #78350f;
`],["decoration-amber-950",`text-decoration-color: #451a03;
`],["decoration-yellow-50",`text-decoration-color: #fefce8;
`],["decoration-yellow-100",`text-decoration-color: #fef9c3;
`],["decoration-yellow-200",`text-decoration-color: #fef08a;
`],["decoration-yellow-300",`text-decoration-color: #fde047;
`],["decoration-yellow-400",`text-decoration-color: #facc15;
`],["decoration-yellow-500",`text-decoration-color: #eab308;
`],["decoration-yellow-600",`text-decoration-color: #ca8a04;
`],["decoration-yellow-700",`text-decoration-color: #a16207;
`],["decoration-yellow-800",`text-decoration-color: #854d0e;
`],["decoration-yellow-900",`text-decoration-color: #713f12;
`],["decoration-yellow-950",`text-decoration-color: #422006;
`],["decoration-lime-50",`text-decoration-color: #f7fee7;
`],["decoration-lime-100",`text-decoration-color: #ecfccb;
`],["decoration-lime-200",`text-decoration-color: #d9f99d;
`],["decoration-lime-300",`text-decoration-color: #bef264;
`],["decoration-lime-400",`text-decoration-color: #a3e635;
`],["decoration-lime-500",`text-decoration-color: #84cc16;
`],["decoration-lime-600",`text-decoration-color: #65a30d;
`],["decoration-lime-700",`text-decoration-color: #4d7c0f;
`],["decoration-lime-800",`text-decoration-color: #3f6212;
`],["decoration-lime-900",`text-decoration-color: #365314;
`],["decoration-lime-950",`text-decoration-color: #1a2e05;
`],["decoration-green-50",`text-decoration-color: #f0fdf4;
`],["decoration-green-100",`text-decoration-color: #dcfce7;
`],["decoration-green-200",`text-decoration-color: #bbf7d0;
`],["decoration-green-300",`text-decoration-color: #86efac;
`],["decoration-green-400",`text-decoration-color: #4ade80;
`],["decoration-green-500",`text-decoration-color: #22c55e;
`],["decoration-green-600",`text-decoration-color: #16a34a;
`],["decoration-green-700",`text-decoration-color: #15803d;
`],["decoration-green-800",`text-decoration-color: #166534;
`],["decoration-green-900",`text-decoration-color: #14532d;
`],["decoration-green-950",`text-decoration-color: #052e16;
`],["decoration-emerald-50",`text-decoration-color: #ecfdf5;
`],["decoration-emerald-100",`text-decoration-color: #d1fae5;
`],["decoration-emerald-200",`text-decoration-color: #a7f3d0;
`],["decoration-emerald-300",`text-decoration-color: #6ee7b7;
`],["decoration-emerald-400",`text-decoration-color: #34d399;
`],["decoration-emerald-500",`text-decoration-color: #10b981;
`],["decoration-emerald-600",`text-decoration-color: #059669;
`],["decoration-emerald-700",`text-decoration-color: #047857;
`],["decoration-emerald-800",`text-decoration-color: #065f46;
`],["decoration-emerald-900",`text-decoration-color: #064e3b;
`],["decoration-emerald-950",`text-decoration-color: #022c22;
`],["decoration-teal-50",`text-decoration-color: #f0fdfa;
`],["decoration-teal-100",`text-decoration-color: #ccfbf1;
`],["decoration-teal-200",`text-decoration-color: #99f6e4;
`],["decoration-teal-300",`text-decoration-color: #5eead4;
`],["decoration-teal-400",`text-decoration-color: #2dd4bf;
`],["decoration-teal-500",`text-decoration-color: #14b8a6;
`],["decoration-teal-600",`text-decoration-color: #0d9488;
`],["decoration-teal-700",`text-decoration-color: #0f766e;
`],["decoration-teal-800",`text-decoration-color: #115e59;
`],["decoration-teal-900",`text-decoration-color: #134e4a;
`],["decoration-teal-950",`text-decoration-color: #042f2e;
`],["decoration-cyan-50",`text-decoration-color: #ecfeff;
`],["decoration-cyan-100",`text-decoration-color: #cffafe;
`],["decoration-cyan-200",`text-decoration-color: #a5f3fc;
`],["decoration-cyan-300",`text-decoration-color: #67e8f9;
`],["decoration-cyan-400",`text-decoration-color: #22d3ee;
`],["decoration-cyan-500",`text-decoration-color: #06b6d4;
`],["decoration-cyan-600",`text-decoration-color: #0891b2;
`],["decoration-cyan-700",`text-decoration-color: #0e7490;
`],["decoration-cyan-800",`text-decoration-color: #155e75;
`],["decoration-cyan-900",`text-decoration-color: #164e63;
`],["decoration-cyan-950",`text-decoration-color: #083344;
`],["decoration-sky-50",`text-decoration-color: #f0f9ff;
`],["decoration-sky-100",`text-decoration-color: #e0f2fe;
`],["decoration-sky-200",`text-decoration-color: #bae6fd;
`],["decoration-sky-300",`text-decoration-color: #7dd3fc;
`],["decoration-sky-400",`text-decoration-color: #38bdf8;
`],["decoration-sky-500",`text-decoration-color: #0ea5e9;
`],["decoration-sky-600",`text-decoration-color: #0284c7;
`],["decoration-sky-700",`text-decoration-color: #0369a1;
`],["decoration-sky-800",`text-decoration-color: #075985;
`],["decoration-sky-900",`text-decoration-color: #0c4a6e;
`],["decoration-sky-950",`text-decoration-color: #082f49;
`],["decoration-blue-50",`text-decoration-color: #eff6ff;
`],["decoration-blue-100",`text-decoration-color: #dbeafe;
`],["decoration-blue-200",`text-decoration-color: #bfdbfe;
`],["decoration-blue-300",`text-decoration-color: #93c5fd;
`],["decoration-blue-400",`text-decoration-color: #60a5fa;
`],["decoration-blue-500",`text-decoration-color: #3b82f6;
`],["decoration-blue-600",`text-decoration-color: #2563eb;
`],["decoration-blue-700",`text-decoration-color: #1d4ed8;
`],["decoration-blue-800",`text-decoration-color: #1e40af;
`],["decoration-blue-900",`text-decoration-color: #1e3a8a;
`],["decoration-blue-950",`text-decoration-color: #172554;
`],["decoration-indigo-50",`text-decoration-color: #eef2ff;
`],["decoration-indigo-100",`text-decoration-color: #e0e7ff;
`],["decoration-indigo-200",`text-decoration-color: #c7d2fe;
`],["decoration-indigo-300",`text-decoration-color: #a5b4fc;
`],["decoration-indigo-400",`text-decoration-color: #818cf8;
`],["decoration-indigo-500",`text-decoration-color: #6366f1;
`],["decoration-indigo-600",`text-decoration-color: #4f46e5;
`],["decoration-indigo-700",`text-decoration-color: #4338ca;
`],["decoration-indigo-800",`text-decoration-color: #3730a3;
`],["decoration-indigo-900",`text-decoration-color: #312e81;
`],["decoration-indigo-950",`text-decoration-color: #1e1b4b;
`],["decoration-violet-50",`text-decoration-color: #f5f3ff;
`],["decoration-violet-100",`text-decoration-color: #ede9fe;
`],["decoration-violet-200",`text-decoration-color: #ddd6fe;
`],["decoration-violet-300",`text-decoration-color: #c4b5fd;
`],["decoration-violet-400",`text-decoration-color: #a78bfa;
`],["decoration-violet-500",`text-decoration-color: #8b5cf6;
`],["decoration-violet-600",`text-decoration-color: #7c3aed;
`],["decoration-violet-700",`text-decoration-color: #6d28d9;
`],["decoration-violet-800",`text-decoration-color: #5b21b6;
`],["decoration-violet-900",`text-decoration-color: #4c1d95;
`],["decoration-violet-950",`text-decoration-color: #2e1065;
`],["decoration-purple-50",`text-decoration-color: #faf5ff;
`],["decoration-purple-100",`text-decoration-color: #f3e8ff;
`],["decoration-purple-200",`text-decoration-color: #e9d5ff;
`],["decoration-purple-300",`text-decoration-color: #d8b4fe;
`],["decoration-purple-400",`text-decoration-color: #c084fc;
`],["decoration-purple-500",`text-decoration-color: #a855f7;
`],["decoration-purple-600",`text-decoration-color: #9333ea;
`],["decoration-purple-700",`text-decoration-color: #7e22ce;
`],["decoration-purple-800",`text-decoration-color: #6b21a8;
`],["decoration-purple-900",`text-decoration-color: #581c87;
`],["decoration-purple-950",`text-decoration-color: #3b0764;
`],["decoration-fuchsia-50",`text-decoration-color: #fdf4ff;
`],["decoration-fuchsia-100",`text-decoration-color: #fae8ff;
`],["decoration-fuchsia-200",`text-decoration-color: #f5d0fe;
`],["decoration-fuchsia-300",`text-decoration-color: #f0abfc;
`],["decoration-fuchsia-400",`text-decoration-color: #e879f9;
`],["decoration-fuchsia-500",`text-decoration-color: #d946ef;
`],["decoration-fuchsia-600",`text-decoration-color: #c026d3;
`],["decoration-fuchsia-700",`text-decoration-color: #a21caf;
`],["decoration-fuchsia-800",`text-decoration-color: #86198f;
`],["decoration-fuchsia-900",`text-decoration-color: #701a75;
`],["decoration-fuchsia-950",`text-decoration-color: #4a044e;
`],["decoration-pink-50",`text-decoration-color: #fdf2f8;
`],["decoration-pink-100",`text-decoration-color: #fce7f3;
`],["decoration-pink-200",`text-decoration-color: #fbcfe8;
`],["decoration-pink-300",`text-decoration-color: #f9a8d4;
`],["decoration-pink-400",`text-decoration-color: #f472b6;
`],["decoration-pink-500",`text-decoration-color: #ec4899;
`],["decoration-pink-600",`text-decoration-color: #db2777;
`],["decoration-pink-700",`text-decoration-color: #be185d;
`],["decoration-pink-800",`text-decoration-color: #9d174d;
`],["decoration-pink-900",`text-decoration-color: #831843;
`],["decoration-pink-950",`text-decoration-color: #500724;
`],["decoration-rose-50",`text-decoration-color: #fff1f2;
`],["decoration-rose-100",`text-decoration-color: #ffe4e6;
`],["decoration-rose-200",`text-decoration-color: #fecdd3;
`],["decoration-rose-300",`text-decoration-color: #fda4af;
`],["decoration-rose-400",`text-decoration-color: #fb7185;
`],["decoration-rose-500",`text-decoration-color: #f43f5e;
`],["decoration-rose-600",`text-decoration-color: #e11d48;
`],["decoration-rose-700",`text-decoration-color: #be123c;
`],["decoration-rose-800",`text-decoration-color: #9f1239;
`],["decoration-rose-900",`text-decoration-color: #881337;
`],["decoration-rose-950",`text-decoration-color: #4c0519;
`]]},{url:"https://tailwindcss.com/docs/text-decoration-style",entry:"Text Decoration Style",description:"Utilities for controlling the style of text decorations.",parameters:[["decoration-solid",`text-decoration-style: solid;
`],["decoration-double",`text-decoration-style: double;
`],["decoration-dotted",`text-decoration-style: dotted;
`],["decoration-dashed",`text-decoration-style: dashed;
`],["decoration-wavy",`text-decoration-style: wavy;
`]]},{url:"https://tailwindcss.com/docs/text-decoration-thickness",entry:"Text Decoration Thickness",description:"Utilities for controlling the thickness of text decorations.",parameters:[["decoration-auto",`text-decoration-thickness: auto;
`],["decoration-from-font",`text-decoration-thickness: from-font;
`],["decoration-0",`text-decoration-thickness: 0px;
`],["decoration-1",`text-decoration-thickness: 1px;
`],["decoration-2",`text-decoration-thickness: 2px;
`],["decoration-4",`text-decoration-thickness: 4px;
`],["decoration-8",`text-decoration-thickness: 8px;
`]]},{url:"https://tailwindcss.com/docs/text-underline-offset",entry:"Text Underline Offset",description:"Utilities for controlling the offset of a text underline.",parameters:[["underline-offset-auto",`text-underline-offset: auto;
`],["underline-offset-0",`text-underline-offset: 0px;
`],["underline-offset-1",`text-underline-offset: 1px;
`],["underline-offset-2",`text-underline-offset: 2px;
`],["underline-offset-4",`text-underline-offset: 4px;
`],["underline-offset-8",`text-underline-offset: 8px;
`]]},{url:"https://tailwindcss.com/docs/text-transform",entry:"Text Transform",description:"Utilities for controlling the transformation of text.",parameters:[["uppercase",`text-transform: uppercase;
`],["lowercase",`text-transform: lowercase;
`],["capitalize",`text-transform: capitalize;
`],["normal-case",`text-transform: none;
`]]},{url:"https://tailwindcss.com/docs/text-overflow",entry:"Text Overflow",description:"Utilities for controlling text overflow in an element.",parameters:[["truncate",`overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`],["text-ellipsis",`text-overflow: ellipsis;
`],["text-clip",`text-overflow: clip;
`]]},{url:"https://tailwindcss.com/docs/text-wrap",entry:"Text Wrap",description:"Utilities for controlling how text wraps within an element.",parameters:[["text-wrap",`text-wrap: wrap;
`],["text-nowrap",`text-wrap: nowrap;
`],["text-balance",`text-wrap: balance;
`],["text-pretty",`text-wrap: pretty;
`]]},{url:"https://tailwindcss.com/docs/text-indent",entry:"Text Indent",description:"Utilities for controlling the amount of empty space shown before text in a block.",parameters:[["indent-0",`text-indent: 0px;
`],["indent-px",`text-indent: 1px;
`],["indent-0.5",`text-indent: 0.125rem; /* 2px */
`],["indent-1",`text-indent: 0.25rem; /* 4px */
`],["indent-1.5",`text-indent: 0.375rem; /* 6px */
`],["indent-2",`text-indent: 0.5rem; /* 8px */
`],["indent-2.5",`text-indent: 0.625rem; /* 10px */
`],["indent-3",`text-indent: 0.75rem; /* 12px */
`],["indent-3.5",`text-indent: 0.875rem; /* 14px */
`],["indent-4",`text-indent: 1rem; /* 16px */
`],["indent-5",`text-indent: 1.25rem; /* 20px */
`],["indent-6",`text-indent: 1.5rem; /* 24px */
`],["indent-7",`text-indent: 1.75rem; /* 28px */
`],["indent-8",`text-indent: 2rem; /* 32px */
`],["indent-9",`text-indent: 2.25rem; /* 36px */
`],["indent-10",`text-indent: 2.5rem; /* 40px */
`],["indent-11",`text-indent: 2.75rem; /* 44px */
`],["indent-12",`text-indent: 3rem; /* 48px */
`],["indent-14",`text-indent: 3.5rem; /* 56px */
`],["indent-16",`text-indent: 4rem; /* 64px */
`],["indent-20",`text-indent: 5rem; /* 80px */
`],["indent-24",`text-indent: 6rem; /* 96px */
`],["indent-28",`text-indent: 7rem; /* 112px */
`],["indent-32",`text-indent: 8rem; /* 128px */
`],["indent-36",`text-indent: 9rem; /* 144px */
`],["indent-40",`text-indent: 10rem; /* 160px */
`],["indent-44",`text-indent: 11rem; /* 176px */
`],["indent-48",`text-indent: 12rem; /* 192px */
`],["indent-52",`text-indent: 13rem; /* 208px */
`],["indent-56",`text-indent: 14rem; /* 224px */
`],["indent-60",`text-indent: 15rem; /* 240px */
`],["indent-64",`text-indent: 16rem; /* 256px */
`],["indent-72",`text-indent: 18rem; /* 288px */
`],["indent-80",`text-indent: 20rem; /* 320px */
`],["indent-96",`text-indent: 24rem; /* 384px */
`]]},{url:"https://tailwindcss.com/docs/vertical-align",entry:"Vertical Align",description:"Utilities for controlling the vertical alignment of an inline or table-cell box.",parameters:[["align-baseline",`vertical-align: baseline;
`],["align-top",`vertical-align: top;
`],["align-middle",`vertical-align: middle;
`],["align-bottom",`vertical-align: bottom;
`],["align-text-top",`vertical-align: text-top;
`],["align-text-bottom",`vertical-align: text-bottom;
`],["align-sub",`vertical-align: sub;
`],["align-super",`vertical-align: super;
`]]},{url:"https://tailwindcss.com/docs/whitespace",entry:"Whitespace",description:"Utilities for controlling an element's white-space property.",parameters:[["whitespace-normal",`white-space: normal;
`],["whitespace-nowrap",`white-space: nowrap;
`],["whitespace-pre",`white-space: pre;
`],["whitespace-pre-line",`white-space: pre-line;
`],["whitespace-pre-wrap",`white-space: pre-wrap;
`],["whitespace-break-spaces",`white-space: break-spaces;
`]]},{url:"https://tailwindcss.com/docs/word-break",entry:"Word Break",description:"Utilities for controlling word breaks in an element.",parameters:[["break-normal",`overflow-wrap: normal;
word-break: normal;
`],["break-words",`overflow-wrap: break-word;
`],["break-all",`word-break: break-all;
`],["break-keep",`word-break: keep-all;
`]]},{url:"https://tailwindcss.com/docs/hyphens",entry:"Hyphens",description:"Utilities for controlling how words should be hyphenated.",parameters:[["hyphens-none",`hyphens: none;
`],["hyphens-manual",`hyphens: manual;
`],["hyphens-auto",`hyphens: auto;
`]]},{url:"https://tailwindcss.com/docs/content",entry:"Content",description:"Utilities for controlling the content of the before and after pseudo-elements.",parameters:[["content-none",`content: none;
`]]}],ys=[{url:"https://tailwindcss.com/docs/background-attachment",entry:"Background Attachment",description:"Utilities for controlling how a background image behaves when scrolling.",parameters:[["bg-fixed",`background-attachment: fixed;
`],["bg-local",`background-attachment: local;
`],["bg-scroll",`background-attachment: scroll;
`]]},{url:"https://tailwindcss.com/docs/background-clip",entry:"Background Clip",description:"Utilities for controlling the bounding box of an element's background.",parameters:[["bg-clip-border",`background-clip: border-box;
`],["bg-clip-padding",`background-clip: padding-box;
`],["bg-clip-content",`background-clip: content-box;
`],["bg-clip-text",`background-clip: text;
`]]},{url:"https://tailwindcss.com/docs/background-color",entry:"Background Color",description:"Utilities for controlling an element's background color.",parameters:[["bg-inherit",`background-color: inherit;
`,""],["bg-current",`background-color: currentColor;
`,""],["bg-transparent",`background-color: transparent;
`,""],["bg-black",`background-color: rgb(0 0 0);
`,""],["bg-white",`background-color: rgb(255 255 255);
`,""],["bg-slate-50",`background-color: rgb(248 250 252);
`,""],["bg-slate-100",`background-color: rgb(241 245 249);
`,""],["bg-slate-200",`background-color: rgb(226 232 240);
`,""],["bg-slate-300",`background-color: rgb(203 213 225);
`,""],["bg-slate-400",`background-color: rgb(148 163 184);
`,""],["bg-slate-500",`background-color: rgb(100 116 139);
`,""],["bg-slate-600",`background-color: rgb(71 85 105);
`,""],["bg-slate-700",`background-color: rgb(51 65 85);
`,""],["bg-slate-800",`background-color: rgb(30 41 59);
`,""],["bg-slate-900",`background-color: rgb(15 23 42);
`,""],["bg-slate-950",`background-color: rgb(2 6 23);
`,""],["bg-gray-50",`background-color: rgb(249 250 251);
`,""],["bg-gray-100",`background-color: rgb(243 244 246);
`,""],["bg-gray-200",`background-color: rgb(229 231 235);
`,""],["bg-gray-300",`background-color: rgb(209 213 219);
`,""],["bg-gray-400",`background-color: rgb(156 163 175);
`,""],["bg-gray-500",`background-color: rgb(107 114 128);
`,""],["bg-gray-600",`background-color: rgb(75 85 99);
`,""],["bg-gray-700",`background-color: rgb(55 65 81);
`,""],["bg-gray-800",`background-color: rgb(31 41 55);
`,""],["bg-gray-900",`background-color: rgb(17 24 39);
`,""],["bg-gray-950",`background-color: rgb(3 7 18);
`,""],["bg-zinc-50",`background-color: rgb(250 250 250);
`,""],["bg-zinc-100",`background-color: rgb(244 244 245);
`,""],["bg-zinc-200",`background-color: rgb(228 228 231);
`,""],["bg-zinc-300",`background-color: rgb(212 212 216);
`,""],["bg-zinc-400",`background-color: rgb(161 161 170);
`,""],["bg-zinc-500",`background-color: rgb(113 113 122);
`,""],["bg-zinc-600",`background-color: rgb(82 82 91);
`,""],["bg-zinc-700",`background-color: rgb(63 63 70);
`,""],["bg-zinc-800",`background-color: rgb(39 39 42);
`,""],["bg-zinc-900",`background-color: rgb(24 24 27);
`,""],["bg-zinc-950",`background-color: rgb(9 9 11);
`,""],["bg-neutral-50",`background-color: rgb(250 250 250);
`,""],["bg-neutral-100",`background-color: rgb(245 245 245);
`,""],["bg-neutral-200",`background-color: rgb(229 229 229);
`,""],["bg-neutral-300",`background-color: rgb(212 212 212);
`,""],["bg-neutral-400",`background-color: rgb(163 163 163);
`,""],["bg-neutral-500",`background-color: rgb(115 115 115);
`,""],["bg-neutral-600",`background-color: rgb(82 82 82);
`,""],["bg-neutral-700",`background-color: rgb(64 64 64);
`,""],["bg-neutral-800",`background-color: rgb(38 38 38);
`,""],["bg-neutral-900",`background-color: rgb(23 23 23);
`,""],["bg-neutral-950",`background-color: rgb(10 10 10);
`,""],["bg-stone-50",`background-color: rgb(250 250 249);
`,""],["bg-stone-100",`background-color: rgb(245 245 244);
`,""],["bg-stone-200",`background-color: rgb(231 229 228);
`,""],["bg-stone-300",`background-color: rgb(214 211 209);
`,""],["bg-stone-400",`background-color: rgb(168 162 158);
`,""],["bg-stone-500",`background-color: rgb(120 113 108);
`,""],["bg-stone-600",`background-color: rgb(87 83 78);
`,""],["bg-stone-700",`background-color: rgb(68 64 60);
`,""],["bg-stone-800",`background-color: rgb(41 37 36);
`,""],["bg-stone-900",`background-color: rgb(28 25 23);
`,""],["bg-stone-950",`background-color: rgb(12 10 9);
`,""],["bg-red-50",`background-color: rgb(254 242 242);
`,""],["bg-red-100",`background-color: rgb(254 226 226);
`,""],["bg-red-200",`background-color: rgb(254 202 202);
`,""],["bg-red-300",`background-color: rgb(252 165 165);
`,""],["bg-red-400",`background-color: rgb(248 113 113);
`,""],["bg-red-500",`background-color: rgb(239 68 68);
`,""],["bg-red-600",`background-color: rgb(220 38 38);
`,""],["bg-red-700",`background-color: rgb(185 28 28);
`,""],["bg-red-800",`background-color: rgb(153 27 27);
`,""],["bg-red-900",`background-color: rgb(127 29 29);
`,""],["bg-red-950",`background-color: rgb(69 10 10);
`,""],["bg-orange-50",`background-color: rgb(255 247 237);
`,""],["bg-orange-100",`background-color: rgb(255 237 213);
`,""],["bg-orange-200",`background-color: rgb(254 215 170);
`,""],["bg-orange-300",`background-color: rgb(253 186 116);
`,""],["bg-orange-400",`background-color: rgb(251 146 60);
`,""],["bg-orange-500",`background-color: rgb(249 115 22);
`,""],["bg-orange-600",`background-color: rgb(234 88 12);
`,""],["bg-orange-700",`background-color: rgb(194 65 12);
`,""],["bg-orange-800",`background-color: rgb(154 52 18);
`,""],["bg-orange-900",`background-color: rgb(124 45 18);
`,""],["bg-orange-950",`background-color: rgb(67 20 7);
`,""],["bg-amber-50",`background-color: rgb(255 251 235);
`,""],["bg-amber-100",`background-color: rgb(254 243 199);
`,""],["bg-amber-200",`background-color: rgb(253 230 138);
`,""],["bg-amber-300",`background-color: rgb(252 211 77);
`,""],["bg-amber-400",`background-color: rgb(251 191 36);
`,""],["bg-amber-500",`background-color: rgb(245 158 11);
`,""],["bg-amber-600",`background-color: rgb(217 119 6);
`,""],["bg-amber-700",`background-color: rgb(180 83 9);
`,""],["bg-amber-800",`background-color: rgb(146 64 14);
`,""],["bg-amber-900",`background-color: rgb(120 53 15);
`,""],["bg-amber-950",`background-color: rgb(69 26 3);
`,""],["bg-yellow-50",`background-color: rgb(254 252 232);
`,""],["bg-yellow-100",`background-color: rgb(254 249 195);
`,""],["bg-yellow-200",`background-color: rgb(254 240 138);
`,""],["bg-yellow-300",`background-color: rgb(253 224 71);
`,""],["bg-yellow-400",`background-color: rgb(250 204 21);
`,""],["bg-yellow-500",`background-color: rgb(234 179 8);
`,""],["bg-yellow-600",`background-color: rgb(202 138 4);
`,""],["bg-yellow-700",`background-color: rgb(161 98 7);
`,""],["bg-yellow-800",`background-color: rgb(133 77 14);
`,""],["bg-yellow-900",`background-color: rgb(113 63 18);
`,""],["bg-yellow-950",`background-color: rgb(66 32 6);
`,""],["bg-lime-50",`background-color: rgb(247 254 231);
`,""],["bg-lime-100",`background-color: rgb(236 252 203);
`,""],["bg-lime-200",`background-color: rgb(217 249 157);
`,""],["bg-lime-300",`background-color: rgb(190 242 100);
`,""],["bg-lime-400",`background-color: rgb(163 230 53);
`,""],["bg-lime-500",`background-color: rgb(132 204 22);
`,""],["bg-lime-600",`background-color: rgb(101 163 13);
`,""],["bg-lime-700",`background-color: rgb(77 124 15);
`,""],["bg-lime-800",`background-color: rgb(63 98 18);
`,""],["bg-lime-900",`background-color: rgb(54 83 20);
`,""],["bg-lime-950",`background-color: rgb(26 46 5);
`,""],["bg-green-50",`background-color: rgb(240 253 244);
`,""],["bg-green-100",`background-color: rgb(220 252 231);
`,""],["bg-green-200",`background-color: rgb(187 247 208);
`,""],["bg-green-300",`background-color: rgb(134 239 172);
`,""],["bg-green-400",`background-color: rgb(74 222 128);
`,""],["bg-green-500",`background-color: rgb(34 197 94);
`,""],["bg-green-600",`background-color: rgb(22 163 74);
`,""],["bg-green-700",`background-color: rgb(21 128 61);
`,""],["bg-green-800",`background-color: rgb(22 101 52);
`,""],["bg-green-900",`background-color: rgb(20 83 45);
`,""],["bg-green-950",`background-color: rgb(5 46 22);
`,""],["bg-emerald-50",`background-color: rgb(236 253 245);
`,""],["bg-emerald-100",`background-color: rgb(209 250 229);
`,""],["bg-emerald-200",`background-color: rgb(167 243 208);
`,""],["bg-emerald-300",`background-color: rgb(110 231 183);
`,""],["bg-emerald-400",`background-color: rgb(52 211 153);
`,""],["bg-emerald-500",`background-color: rgb(16 185 129);
`,""],["bg-emerald-600",`background-color: rgb(5 150 105);
`,""],["bg-emerald-700",`background-color: rgb(4 120 87);
`,""],["bg-emerald-800",`background-color: rgb(6 95 70);
`,""],["bg-emerald-900",`background-color: rgb(6 78 59);
`,""],["bg-emerald-950",`background-color: rgb(2 44 34);
`,""],["bg-teal-50",`background-color: rgb(240 253 250);
`,""],["bg-teal-100",`background-color: rgb(204 251 241);
`,""],["bg-teal-200",`background-color: rgb(153 246 228);
`,""],["bg-teal-300",`background-color: rgb(94 234 212);
`,""],["bg-teal-400",`background-color: rgb(45 212 191);
`,""],["bg-teal-500",`background-color: rgb(20 184 166);
`,""],["bg-teal-600",`background-color: rgb(13 148 136);
`,""],["bg-teal-700",`background-color: rgb(15 118 110);
`,""],["bg-teal-800",`background-color: rgb(17 94 89);
`,""],["bg-teal-900",`background-color: rgb(19 78 74);
`,""],["bg-teal-950",`background-color: rgb(4 47 46);
`,""],["bg-cyan-50",`background-color: rgb(236 254 255);
`,""],["bg-cyan-100",`background-color: rgb(207 250 254);
`,""],["bg-cyan-200",`background-color: rgb(165 243 252);
`,""],["bg-cyan-300",`background-color: rgb(103 232 249);
`,""],["bg-cyan-400",`background-color: rgb(34 211 238);
`,""],["bg-cyan-500",`background-color: rgb(6 182 212);
`,""],["bg-cyan-600",`background-color: rgb(8 145 178);
`,""],["bg-cyan-700",`background-color: rgb(14 116 144);
`,""],["bg-cyan-800",`background-color: rgb(21 94 117);
`,""],["bg-cyan-900",`background-color: rgb(22 78 99);
`,""],["bg-cyan-950",`background-color: rgb(8 51 68);
`,""],["bg-sky-50",`background-color: rgb(240 249 255);
`,""],["bg-sky-100",`background-color: rgb(224 242 254);
`,""],["bg-sky-200",`background-color: rgb(186 230 253);
`,""],["bg-sky-300",`background-color: rgb(125 211 252);
`,""],["bg-sky-400",`background-color: rgb(56 189 248);
`,""],["bg-sky-500",`background-color: rgb(14 165 233);
`,""],["bg-sky-600",`background-color: rgb(2 132 199);
`,""],["bg-sky-700",`background-color: rgb(3 105 161);
`,""],["bg-sky-800",`background-color: rgb(7 89 133);
`,""],["bg-sky-900",`background-color: rgb(12 74 110);
`,""],["bg-sky-950",`background-color: rgb(8 47 73);
`,""],["bg-blue-50",`background-color: rgb(239 246 255);
`,""],["bg-blue-100",`background-color: rgb(219 234 254);
`,""],["bg-blue-200",`background-color: rgb(191 219 254);
`,""],["bg-blue-300",`background-color: rgb(147 197 253);
`,""],["bg-blue-400",`background-color: rgb(96 165 250);
`,""],["bg-blue-500",`background-color: rgb(59 130 246);
`,""],["bg-blue-600",`background-color: rgb(37 99 235);
`,""],["bg-blue-700",`background-color: rgb(29 78 216);
`,""],["bg-blue-800",`background-color: rgb(30 64 175);
`,""],["bg-blue-900",`background-color: rgb(30 58 138);
`,""],["bg-blue-950",`background-color: rgb(23 37 84);
`,""],["bg-indigo-50",`background-color: rgb(238 242 255);
`,""],["bg-indigo-100",`background-color: rgb(224 231 255);
`,""],["bg-indigo-200",`background-color: rgb(199 210 254);
`,""],["bg-indigo-300",`background-color: rgb(165 180 252);
`,""],["bg-indigo-400",`background-color: rgb(129 140 248);
`,""],["bg-indigo-500",`background-color: rgb(99 102 241);
`,""],["bg-indigo-600",`background-color: rgb(79 70 229);
`,""],["bg-indigo-700",`background-color: rgb(67 56 202);
`,""],["bg-indigo-800",`background-color: rgb(55 48 163);
`,""],["bg-indigo-900",`background-color: rgb(49 46 129);
`,""],["bg-indigo-950",`background-color: rgb(30 27 75);
`,""],["bg-violet-50",`background-color: rgb(245 243 255);
`,""],["bg-violet-100",`background-color: rgb(237 233 254);
`,""],["bg-violet-200",`background-color: rgb(221 214 254);
`,""],["bg-violet-300",`background-color: rgb(196 181 253);
`,""],["bg-violet-400",`background-color: rgb(167 139 250);
`,""],["bg-violet-500",`background-color: rgb(139 92 246);
`,""],["bg-violet-600",`background-color: rgb(124 58 237);
`,""],["bg-violet-700",`background-color: rgb(109 40 217);
`,""],["bg-violet-800",`background-color: rgb(91 33 182);
`,""],["bg-violet-900",`background-color: rgb(76 29 149);
`,""],["bg-violet-950",`background-color: rgb(46 16 101);
`,""],["bg-purple-50",`background-color: rgb(250 245 255);
`,""],["bg-purple-100",`background-color: rgb(243 232 255);
`,""],["bg-purple-200",`background-color: rgb(233 213 255);
`,""],["bg-purple-300",`background-color: rgb(216 180 254);
`,""],["bg-purple-400",`background-color: rgb(192 132 252);
`,""],["bg-purple-500",`background-color: rgb(168 85 247);
`,""],["bg-purple-600",`background-color: rgb(147 51 234);
`,""],["bg-purple-700",`background-color: rgb(126 34 206);
`,""],["bg-purple-800",`background-color: rgb(107 33 168);
`,""],["bg-purple-900",`background-color: rgb(88 28 135);
`,""],["bg-purple-950",`background-color: rgb(59 7 100);
`,""],["bg-fuchsia-50",`background-color: rgb(253 244 255);
`,""],["bg-fuchsia-100",`background-color: rgb(250 232 255);
`,""],["bg-fuchsia-200",`background-color: rgb(245 208 254);
`,""],["bg-fuchsia-300",`background-color: rgb(240 171 252);
`,""],["bg-fuchsia-400",`background-color: rgb(232 121 249);
`,""],["bg-fuchsia-500",`background-color: rgb(217 70 239);
`,""],["bg-fuchsia-600",`background-color: rgb(192 38 211);
`,""],["bg-fuchsia-700",`background-color: rgb(162 28 175);
`,""],["bg-fuchsia-800",`background-color: rgb(134 25 143);
`,""],["bg-fuchsia-900",`background-color: rgb(112 26 117);
`,""],["bg-fuchsia-950",`background-color: rgb(74 4 78);
`,""],["bg-pink-50",`background-color: rgb(253 242 248);
`,""],["bg-pink-100",`background-color: rgb(252 231 243);
`,""],["bg-pink-200",`background-color: rgb(251 207 232);
`,""],["bg-pink-300",`background-color: rgb(249 168 212);
`,""],["bg-pink-400",`background-color: rgb(244 114 182);
`,""],["bg-pink-500",`background-color: rgb(236 72 153);
`,""],["bg-pink-600",`background-color: rgb(219 39 119);
`,""],["bg-pink-700",`background-color: rgb(190 24 93);
`,""],["bg-pink-800",`background-color: rgb(157 23 77);
`,""],["bg-pink-900",`background-color: rgb(131 24 67);
`,""],["bg-pink-950",`background-color: rgb(80 7 36);
`,""],["bg-rose-50",`background-color: rgb(255 241 242);
`,""],["bg-rose-100",`background-color: rgb(255 228 230);
`,""],["bg-rose-200",`background-color: rgb(254 205 211);
`,""],["bg-rose-300",`background-color: rgb(253 164 175);
`,""],["bg-rose-400",`background-color: rgb(251 113 133);
`,""],["bg-rose-500",`background-color: rgb(244 63 94);
`,""],["bg-rose-600",`background-color: rgb(225 29 72);
`,""],["bg-rose-700",`background-color: rgb(190 18 60);
`,""],["bg-rose-800",`background-color: rgb(159 18 57);
`,""],["bg-rose-900",`background-color: rgb(136 19 55);
`,""],["bg-rose-950",`background-color: rgb(76 5 25);
`,""]]},{url:"https://tailwindcss.com/docs/background-origin",entry:"Background Origin",description:"Utilities for controlling how an element's background is positioned relative to borders, padding, and content.",parameters:[["bg-origin-border",`background-origin: border-box;
`],["bg-origin-padding",`background-origin: padding-box;
`],["bg-origin-content",`background-origin: content-box;
`]]},{url:"https://tailwindcss.com/docs/background-position",entry:"Background Position",description:"Utilities for controlling the position of an element's background image.",parameters:[["bg-bottom",`background-position: bottom;
`],["bg-center",`background-position: center;
`],["bg-left",`background-position: left;
`],["bg-left-bottom",`background-position: left bottom;
`],["bg-left-top",`background-position: left top;
`],["bg-right",`background-position: right;
`],["bg-right-bottom",`background-position: right bottom;
`],["bg-right-top",`background-position: right top;
`],["bg-top",`background-position: top;
`]]},{url:"https://tailwindcss.com/docs/background-repeat",entry:"Background Repeat",description:"Utilities for controlling the repetition of an element's background image.",parameters:[["bg-repeat",`background-repeat: repeat;
`],["bg-no-repeat",`background-repeat: no-repeat;
`],["bg-repeat-x",`background-repeat: repeat-x;
`],["bg-repeat-y",`background-repeat: repeat-y;
`],["bg-repeat-round",`background-repeat: round;
`],["bg-repeat-space",`background-repeat: space;
`]]},{url:"https://tailwindcss.com/docs/background-size",entry:"Background Size",description:"Utilities for controlling the background size of an element's background image.",parameters:[["bg-auto",`background-size: auto;
`],["bg-cover",`background-size: cover;
`],["bg-contain",`background-size: contain;
`]]},{url:"https://tailwindcss.com/docs/background-image",entry:"Background Image",description:"Utilities for controlling an element's background image.",parameters:[["bg-none",`background-image: none;
`],["bg-gradient-to-t",`background-image: linear-gradient(to top, var(--tw-gradient-stops));
`],["bg-gradient-to-tr",`background-image: linear-gradient(to top right, var(--tw-gradient-stops));
`],["bg-gradient-to-r",`background-image: linear-gradient(to right, var(--tw-gradient-stops));
`],["bg-gradient-to-br",`background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
`],["bg-gradient-to-b",`background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
`],["bg-gradient-to-bl",`background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
`],["bg-gradient-to-l",`background-image: linear-gradient(to left, var(--tw-gradient-stops));
`],["bg-gradient-to-tl",`background-image: linear-gradient(to top left, var(--tw-gradient-stops));
`]]},{url:"https://tailwindcss.com/docs/gradient-color-stops",entry:"Gradient Color Stops",description:"Utilities for controlling the color stops in background gradients.",parameters:[["from-inherit",`--tw-gradient-from: inherit var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-current",`--tw-gradient-from: currentColor var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-transparent",`--tw-gradient-from: transparent var(--tw-gradient-from-position);
--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-black",`--tw-gradient-from: #000 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-white",`--tw-gradient-from: #fff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-50",`--tw-gradient-from: #f8fafc var(--tw-gradient-from-position);
--tw-gradient-to: rgb(248 250 252 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-100",`--tw-gradient-from: #f1f5f9 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(241 245 249 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-200",`--tw-gradient-from: #e2e8f0 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(226 232 240 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-300",`--tw-gradient-from: #cbd5e1 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(203 213 225 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-400",`--tw-gradient-from: #94a3b8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(148 163 184 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-500",`--tw-gradient-from: #64748b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(100 116 139 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-600",`--tw-gradient-from: #475569 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(71 85 105 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-700",`--tw-gradient-from: #334155 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(51 65 85 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-800",`--tw-gradient-from: #1e293b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(30 41 59 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-900",`--tw-gradient-from: #0f172a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-slate-950",`--tw-gradient-from: #020617 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(2 6 23 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-50",`--tw-gradient-from: #f9fafb var(--tw-gradient-from-position);
--tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-100",`--tw-gradient-from: #f3f4f6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(243 244 246 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-200",`--tw-gradient-from: #e5e7eb var(--tw-gradient-from-position);
--tw-gradient-to: rgb(229 231 235 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-300",`--tw-gradient-from: #d1d5db var(--tw-gradient-from-position);
--tw-gradient-to: rgb(209 213 219 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-400",`--tw-gradient-from: #9ca3af var(--tw-gradient-from-position);
--tw-gradient-to: rgb(156 163 175 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-500",`--tw-gradient-from: #6b7280 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(107 114 128 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-600",`--tw-gradient-from: #4b5563 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(75 85 99 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-700",`--tw-gradient-from: #374151 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(55 65 81 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-800",`--tw-gradient-from: #1f2937 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(31 41 55 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-900",`--tw-gradient-from: #111827 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-gray-950",`--tw-gradient-from: #030712 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(3 7 18 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-50",`--tw-gradient-from: #fafafa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(250 250 250 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-100",`--tw-gradient-from: #f4f4f5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(244 244 245 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-200",`--tw-gradient-from: #e4e4e7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(228 228 231 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-300",`--tw-gradient-from: #d4d4d8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(212 212 216 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-400",`--tw-gradient-from: #a1a1aa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(161 161 170 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-500",`--tw-gradient-from: #71717a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(113 113 122 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-600",`--tw-gradient-from: #52525b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(82 82 91 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-700",`--tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-800",`--tw-gradient-from: #27272a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-900",`--tw-gradient-from: #18181b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(24 24 27 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-zinc-950",`--tw-gradient-from: #09090b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(9 9 11 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-50",`--tw-gradient-from: #fafafa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(250 250 250 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-100",`--tw-gradient-from: #f5f5f5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(245 245 245 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-200",`--tw-gradient-from: #e5e5e5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(229 229 229 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-300",`--tw-gradient-from: #d4d4d4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(212 212 212 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-400",`--tw-gradient-from: #a3a3a3 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(163 163 163 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-500",`--tw-gradient-from: #737373 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(115 115 115 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-600",`--tw-gradient-from: #525252 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(82 82 82 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-700",`--tw-gradient-from: #404040 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(64 64 64 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-800",`--tw-gradient-from: #262626 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(38 38 38 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-900",`--tw-gradient-from: #171717 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(23 23 23 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-neutral-950",`--tw-gradient-from: #0a0a0a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(10 10 10 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-50",`--tw-gradient-from: #fafaf9 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(250 250 249 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-100",`--tw-gradient-from: #f5f5f4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(245 245 244 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-200",`--tw-gradient-from: #e7e5e4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(231 229 228 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-300",`--tw-gradient-from: #d6d3d1 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(214 211 209 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-400",`--tw-gradient-from: #a8a29e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(168 162 158 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-500",`--tw-gradient-from: #78716c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(120 113 108 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-600",`--tw-gradient-from: #57534e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(87 83 78 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-700",`--tw-gradient-from: #44403c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(68 64 60 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-800",`--tw-gradient-from: #292524 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(41 37 36 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-900",`--tw-gradient-from: #1c1917 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(28 25 23 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-stone-950",`--tw-gradient-from: #0c0a09 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(12 10 9 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-50",`--tw-gradient-from: #fef2f2 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 242 242 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-100",`--tw-gradient-from: #fee2e2 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 226 226 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-200",`--tw-gradient-from: #fecaca var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 202 202 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-300",`--tw-gradient-from: #fca5a5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(252 165 165 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-400",`--tw-gradient-from: #f87171 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(248 113 113 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-500",`--tw-gradient-from: #ef4444 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-600",`--tw-gradient-from: #dc2626 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(220 38 38 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-700",`--tw-gradient-from: #b91c1c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(185 28 28 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-800",`--tw-gradient-from: #991b1b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(153 27 27 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-900",`--tw-gradient-from: #7f1d1d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(127 29 29 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-red-950",`--tw-gradient-from: #450a0a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(69 10 10 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-50",`--tw-gradient-from: #fff7ed var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 247 237 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-100",`--tw-gradient-from: #ffedd5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 237 213 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-200",`--tw-gradient-from: #fed7aa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 215 170 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-300",`--tw-gradient-from: #fdba74 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(253 186 116 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-400",`--tw-gradient-from: #fb923c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(251 146 60 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-500",`--tw-gradient-from: #f97316 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-600",`--tw-gradient-from: #ea580c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(234 88 12 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-700",`--tw-gradient-from: #c2410c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(194 65 12 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-800",`--tw-gradient-from: #9a3412 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(154 52 18 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-900",`--tw-gradient-from: #7c2d12 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(124 45 18 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-orange-950",`--tw-gradient-from: #431407 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(67 20 7 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-50",`--tw-gradient-from: #fffbeb var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 251 235 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-100",`--tw-gradient-from: #fef3c7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 243 199 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-200",`--tw-gradient-from: #fde68a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(253 230 138 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-300",`--tw-gradient-from: #fcd34d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(252 211 77 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-400",`--tw-gradient-from: #fbbf24 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(251 191 36 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-500",`--tw-gradient-from: #f59e0b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-600",`--tw-gradient-from: #d97706 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(217 119 6 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-700",`--tw-gradient-from: #b45309 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(180 83 9 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-800",`--tw-gradient-from: #92400e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(146 64 14 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-900",`--tw-gradient-from: #78350f var(--tw-gradient-from-position);
--tw-gradient-to: rgb(120 53 15 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-amber-950",`--tw-gradient-from: #451a03 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(69 26 3 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-50",`--tw-gradient-from: #fefce8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 252 232 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-100",`--tw-gradient-from: #fef9c3 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 249 195 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-200",`--tw-gradient-from: #fef08a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 240 138 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-300",`--tw-gradient-from: #fde047 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(253 224 71 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-400",`--tw-gradient-from: #facc15 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(250 204 21 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-500",`--tw-gradient-from: #eab308 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(234 179 8 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-600",`--tw-gradient-from: #ca8a04 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(202 138 4 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-700",`--tw-gradient-from: #a16207 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(161 98 7 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-800",`--tw-gradient-from: #854d0e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(133 77 14 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-900",`--tw-gradient-from: #713f12 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(113 63 18 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-yellow-950",`--tw-gradient-from: #422006 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(66 32 6 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-50",`--tw-gradient-from: #f7fee7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(247 254 231 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-100",`--tw-gradient-from: #ecfccb var(--tw-gradient-from-position);
--tw-gradient-to: rgb(236 252 203 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-200",`--tw-gradient-from: #d9f99d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(217 249 157 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-300",`--tw-gradient-from: #bef264 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(190 242 100 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-400",`--tw-gradient-from: #a3e635 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(163 230 53 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-500",`--tw-gradient-from: #84cc16 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(132 204 22 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-600",`--tw-gradient-from: #65a30d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(101 163 13 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-700",`--tw-gradient-from: #4d7c0f var(--tw-gradient-from-position);
--tw-gradient-to: rgb(77 124 15 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-800",`--tw-gradient-from: #3f6212 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(63 98 18 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-900",`--tw-gradient-from: #365314 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(54 83 20 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-lime-950",`--tw-gradient-from: #1a2e05 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(26 46 5 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-50",`--tw-gradient-from: #f0fdf4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(240 253 244 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-100",`--tw-gradient-from: #dcfce7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(220 252 231 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-200",`--tw-gradient-from: #bbf7d0 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(187 247 208 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-300",`--tw-gradient-from: #86efac var(--tw-gradient-from-position);
--tw-gradient-to: rgb(134 239 172 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-400",`--tw-gradient-from: #4ade80 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(74 222 128 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-500",`--tw-gradient-from: #22c55e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-600",`--tw-gradient-from: #16a34a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(22 163 74 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-700",`--tw-gradient-from: #15803d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(21 128 61 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-800",`--tw-gradient-from: #166534 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(22 101 52 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-900",`--tw-gradient-from: #14532d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(20 83 45 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-green-950",`--tw-gradient-from: #052e16 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(5 46 22 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-50",`--tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(236 253 245 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-100",`--tw-gradient-from: #d1fae5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(209 250 229 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-200",`--tw-gradient-from: #a7f3d0 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(167 243 208 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-300",`--tw-gradient-from: #6ee7b7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(110 231 183 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-400",`--tw-gradient-from: #34d399 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(52 211 153 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-500",`--tw-gradient-from: #10b981 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-600",`--tw-gradient-from: #059669 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(5 150 105 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-700",`--tw-gradient-from: #047857 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(4 120 87 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-800",`--tw-gradient-from: #065f46 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(6 95 70 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-900",`--tw-gradient-from: #064e3b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(6 78 59 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-emerald-950",`--tw-gradient-from: #022c22 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(2 44 34 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-50",`--tw-gradient-from: #f0fdfa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(240 253 250 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-100",`--tw-gradient-from: #ccfbf1 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(204 251 241 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-200",`--tw-gradient-from: #99f6e4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(153 246 228 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-300",`--tw-gradient-from: #5eead4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(94 234 212 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-400",`--tw-gradient-from: #2dd4bf var(--tw-gradient-from-position);
--tw-gradient-to: rgb(45 212 191 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-500",`--tw-gradient-from: #14b8a6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(20 184 166 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-600",`--tw-gradient-from: #0d9488 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(13 148 136 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-700",`--tw-gradient-from: #0f766e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(15 118 110 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-800",`--tw-gradient-from: #115e59 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(17 94 89 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-900",`--tw-gradient-from: #134e4a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(19 78 74 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-teal-950",`--tw-gradient-from: #042f2e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(4 47 46 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-50",`--tw-gradient-from: #ecfeff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(236 254 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-100",`--tw-gradient-from: #cffafe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(207 250 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-200",`--tw-gradient-from: #a5f3fc var(--tw-gradient-from-position);
--tw-gradient-to: rgb(165 243 252 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-300",`--tw-gradient-from: #67e8f9 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(103 232 249 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-400",`--tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
--tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-500",`--tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-600",`--tw-gradient-from: #0891b2 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(8 145 178 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-700",`--tw-gradient-from: #0e7490 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(14 116 144 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-800",`--tw-gradient-from: #155e75 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(21 94 117 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-900",`--tw-gradient-from: #164e63 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(22 78 99 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-cyan-950",`--tw-gradient-from: #083344 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(8 51 68 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-50",`--tw-gradient-from: #f0f9ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(240 249 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-100",`--tw-gradient-from: #e0f2fe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(224 242 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-200",`--tw-gradient-from: #bae6fd var(--tw-gradient-from-position);
--tw-gradient-to: rgb(186 230 253 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-300",`--tw-gradient-from: #7dd3fc var(--tw-gradient-from-position);
--tw-gradient-to: rgb(125 211 252 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-400",`--tw-gradient-from: #38bdf8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(56 189 248 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-500",`--tw-gradient-from: #0ea5e9 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(14 165 233 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-600",`--tw-gradient-from: #0284c7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(2 132 199 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-700",`--tw-gradient-from: #0369a1 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(3 105 161 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-800",`--tw-gradient-from: #075985 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(7 89 133 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-900",`--tw-gradient-from: #0c4a6e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(12 74 110 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-sky-950",`--tw-gradient-from: #082f49 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(8 47 73 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-50",`--tw-gradient-from: #eff6ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-100",`--tw-gradient-from: #dbeafe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(219 234 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-200",`--tw-gradient-from: #bfdbfe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(191 219 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-300",`--tw-gradient-from: #93c5fd var(--tw-gradient-from-position);
--tw-gradient-to: rgb(147 197 253 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-400",`--tw-gradient-from: #60a5fa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(96 165 250 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-500",`--tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-600",`--tw-gradient-from: #2563eb var(--tw-gradient-from-position);
--tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-700",`--tw-gradient-from: #1d4ed8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(29 78 216 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-800",`--tw-gradient-from: #1e40af var(--tw-gradient-from-position);
--tw-gradient-to: rgb(30 64 175 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-900",`--tw-gradient-from: #1e3a8a var(--tw-gradient-from-position);
--tw-gradient-to: rgb(30 58 138 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-blue-950",`--tw-gradient-from: #172554 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(23 37 84 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-50",`--tw-gradient-from: #eef2ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(238 242 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-100",`--tw-gradient-from: #e0e7ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(224 231 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-200",`--tw-gradient-from: #c7d2fe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(199 210 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-300",`--tw-gradient-from: #a5b4fc var(--tw-gradient-from-position);
--tw-gradient-to: rgb(165 180 252 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-400",`--tw-gradient-from: #818cf8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(129 140 248 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-500",`--tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-600",`--tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-700",`--tw-gradient-from: #4338ca var(--tw-gradient-from-position);
--tw-gradient-to: rgb(67 56 202 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-800",`--tw-gradient-from: #3730a3 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(55 48 163 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-900",`--tw-gradient-from: #312e81 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(49 46 129 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-indigo-950",`--tw-gradient-from: #1e1b4b var(--tw-gradient-from-position);
--tw-gradient-to: rgb(30 27 75 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-50",`--tw-gradient-from: #f5f3ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(245 243 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-100",`--tw-gradient-from: #ede9fe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(237 233 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-200",`--tw-gradient-from: #ddd6fe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(221 214 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-300",`--tw-gradient-from: #c4b5fd var(--tw-gradient-from-position);
--tw-gradient-to: rgb(196 181 253 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-400",`--tw-gradient-from: #a78bfa var(--tw-gradient-from-position);
--tw-gradient-to: rgb(167 139 250 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-500",`--tw-gradient-from: #8b5cf6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(139 92 246 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-600",`--tw-gradient-from: #7c3aed var(--tw-gradient-from-position);
--tw-gradient-to: rgb(124 58 237 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-700",`--tw-gradient-from: #6d28d9 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(109 40 217 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-800",`--tw-gradient-from: #5b21b6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(91 33 182 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-900",`--tw-gradient-from: #4c1d95 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(76 29 149 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-violet-950",`--tw-gradient-from: #2e1065 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(46 16 101 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-50",`--tw-gradient-from: #faf5ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(250 245 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-100",`--tw-gradient-from: #f3e8ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(243 232 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-200",`--tw-gradient-from: #e9d5ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(233 213 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-300",`--tw-gradient-from: #d8b4fe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(216 180 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-400",`--tw-gradient-from: #c084fc var(--tw-gradient-from-position);
--tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-500",`--tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-600",`--tw-gradient-from: #9333ea var(--tw-gradient-from-position);
--tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-700",`--tw-gradient-from: #7e22ce var(--tw-gradient-from-position);
--tw-gradient-to: rgb(126 34 206 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-800",`--tw-gradient-from: #6b21a8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(107 33 168 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-900",`--tw-gradient-from: #581c87 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(88 28 135 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-purple-950",`--tw-gradient-from: #3b0764 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(59 7 100 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-50",`--tw-gradient-from: #fdf4ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(253 244 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-100",`--tw-gradient-from: #fae8ff var(--tw-gradient-from-position);
--tw-gradient-to: rgb(250 232 255 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-200",`--tw-gradient-from: #f5d0fe var(--tw-gradient-from-position);
--tw-gradient-to: rgb(245 208 254 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-300",`--tw-gradient-from: #f0abfc var(--tw-gradient-from-position);
--tw-gradient-to: rgb(240 171 252 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-400",`--tw-gradient-from: #e879f9 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(232 121 249 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-500",`--tw-gradient-from: #d946ef var(--tw-gradient-from-position);
--tw-gradient-to: rgb(217 70 239 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-600",`--tw-gradient-from: #c026d3 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(192 38 211 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-700",`--tw-gradient-from: #a21caf var(--tw-gradient-from-position);
--tw-gradient-to: rgb(162 28 175 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-800",`--tw-gradient-from: #86198f var(--tw-gradient-from-position);
--tw-gradient-to: rgb(134 25 143 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-900",`--tw-gradient-from: #701a75 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(112 26 117 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-fuchsia-950",`--tw-gradient-from: #4a044e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(74 4 78 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-50",`--tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(253 242 248 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-100",`--tw-gradient-from: #fce7f3 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(252 231 243 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-200",`--tw-gradient-from: #fbcfe8 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(251 207 232 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-300",`--tw-gradient-from: #f9a8d4 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(249 168 212 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-400",`--tw-gradient-from: #f472b6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(244 114 182 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-500",`--tw-gradient-from: #ec4899 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-600",`--tw-gradient-from: #db2777 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(219 39 119 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-700",`--tw-gradient-from: #be185d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(190 24 93 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-800",`--tw-gradient-from: #9d174d var(--tw-gradient-from-position);
--tw-gradient-to: rgb(157 23 77 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-900",`--tw-gradient-from: #831843 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(131 24 67 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-pink-950",`--tw-gradient-from: #500724 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(80 7 36 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-50",`--tw-gradient-from: #fff1f2 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 241 242 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-100",`--tw-gradient-from: #ffe4e6 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(255 228 230 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-200",`--tw-gradient-from: #fecdd3 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(254 205 211 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-300",`--tw-gradient-from: #fda4af var(--tw-gradient-from-position);
--tw-gradient-to: rgb(253 164 175 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-400",`--tw-gradient-from: #fb7185 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(251 113 133 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-500",`--tw-gradient-from: #f43f5e var(--tw-gradient-from-position);
--tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-600",`--tw-gradient-from: #e11d48 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(225 29 72 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-700",`--tw-gradient-from: #be123c var(--tw-gradient-from-position);
--tw-gradient-to: rgb(190 18 60 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-800",`--tw-gradient-from: #9f1239 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(159 18 57 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-900",`--tw-gradient-from: #881337 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(136 19 55 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-rose-950",`--tw-gradient-from: #4c0519 var(--tw-gradient-from-position);
--tw-gradient-to: rgb(76 5 25 / 0) var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
`,""],["from-0%",`--tw-gradient-from-position: 0%;
`,""],["from-5%",`--tw-gradient-from-position: 5%;
`,""],["from-10%",`--tw-gradient-from-position: 10%;
`,""],["from-15%",`--tw-gradient-from-position: 15%;
`,""],["from-20%",`--tw-gradient-from-position: 20%;
`,""],["from-25%",`--tw-gradient-from-position: 25%;
`,""],["from-30%",`--tw-gradient-from-position: 30%;
`,""],["from-35%",`--tw-gradient-from-position: 35%;
`,""],["from-40%",`--tw-gradient-from-position: 40%;
`,""],["from-45%",`--tw-gradient-from-position: 45%;
`,""],["from-50%",`--tw-gradient-from-position: 50%;
`,""],["from-55%",`--tw-gradient-from-position: 55%;
`,""],["from-60%",`--tw-gradient-from-position: 60%;
`,""],["from-65%",`--tw-gradient-from-position: 65%;
`,""],["from-70%",`--tw-gradient-from-position: 70%;
`,""],["from-75%",`--tw-gradient-from-position: 75%;
`,""],["from-80%",`--tw-gradient-from-position: 80%;
`,""],["from-85%",`--tw-gradient-from-position: 85%;
`,""],["from-90%",`--tw-gradient-from-position: 90%;
`,""],["from-95%",`--tw-gradient-from-position: 95%;
`,""],["from-100%",`--tw-gradient-from-position: 100%;
`,""],["via-inherit",`--tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), inherit var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-current",`--tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), currentColor var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-transparent",`--tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-black",`--tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #000 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-white",`--tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-50",`--tw-gradient-to: rgb(248 250 252 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f8fafc var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-100",`--tw-gradient-to: rgb(241 245 249 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f1f5f9 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-200",`--tw-gradient-to: rgb(226 232 240 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e2e8f0 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-300",`--tw-gradient-to: rgb(203 213 225 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #cbd5e1 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-400",`--tw-gradient-to: rgb(148 163 184 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #94a3b8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-500",`--tw-gradient-to: rgb(100 116 139 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #64748b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-600",`--tw-gradient-to: rgb(71 85 105 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #475569 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-700",`--tw-gradient-to: rgb(51 65 85 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #334155 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-800",`--tw-gradient-to: rgb(30 41 59 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1e293b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-900",`--tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0f172a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-slate-950",`--tw-gradient-to: rgb(2 6 23 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #020617 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-50",`--tw-gradient-to: rgb(249 250 251 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f9fafb var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-100",`--tw-gradient-to: rgb(243 244 246 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f3f4f6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-200",`--tw-gradient-to: rgb(229 231 235 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e5e7eb var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-300",`--tw-gradient-to: rgb(209 213 219 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d1d5db var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-400",`--tw-gradient-to: rgb(156 163 175 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #9ca3af var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-500",`--tw-gradient-to: rgb(107 114 128 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #6b7280 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-600",`--tw-gradient-to: rgb(75 85 99 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4b5563 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-700",`--tw-gradient-to: rgb(55 65 81 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #374151 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-800",`--tw-gradient-to: rgb(31 41 55 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1f2937 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-900",`--tw-gradient-to: rgb(17 24 39 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #111827 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-gray-950",`--tw-gradient-to: rgb(3 7 18 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #030712 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-50",`--tw-gradient-to: rgb(250 250 250 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fafafa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-100",`--tw-gradient-to: rgb(244 244 245 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f4f4f5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-200",`--tw-gradient-to: rgb(228 228 231 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e4e4e7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-300",`--tw-gradient-to: rgb(212 212 216 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d4d4d8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-400",`--tw-gradient-to: rgb(161 161 170 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a1a1aa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-500",`--tw-gradient-to: rgb(113 113 122 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #71717a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-600",`--tw-gradient-to: rgb(82 82 91 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #52525b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-700",`--tw-gradient-to: rgb(63 63 70 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #3f3f46 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-800",`--tw-gradient-to: rgb(39 39 42 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #27272a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-900",`--tw-gradient-to: rgb(24 24 27 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #18181b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-zinc-950",`--tw-gradient-to: rgb(9 9 11 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #09090b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-50",`--tw-gradient-to: rgb(250 250 250 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fafafa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-100",`--tw-gradient-to: rgb(245 245 245 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f5f5f5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-200",`--tw-gradient-to: rgb(229 229 229 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e5e5e5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-300",`--tw-gradient-to: rgb(212 212 212 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d4d4d4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-400",`--tw-gradient-to: rgb(163 163 163 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a3a3a3 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-500",`--tw-gradient-to: rgb(115 115 115 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #737373 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-600",`--tw-gradient-to: rgb(82 82 82 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #525252 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-700",`--tw-gradient-to: rgb(64 64 64 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #404040 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-800",`--tw-gradient-to: rgb(38 38 38 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #262626 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-900",`--tw-gradient-to: rgb(23 23 23 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #171717 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-neutral-950",`--tw-gradient-to: rgb(10 10 10 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0a0a0a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-50",`--tw-gradient-to: rgb(250 250 249 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fafaf9 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-100",`--tw-gradient-to: rgb(245 245 244 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f5f5f4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-200",`--tw-gradient-to: rgb(231 229 228 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e7e5e4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-300",`--tw-gradient-to: rgb(214 211 209 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d6d3d1 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-400",`--tw-gradient-to: rgb(168 162 158 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a8a29e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-500",`--tw-gradient-to: rgb(120 113 108 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #78716c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-600",`--tw-gradient-to: rgb(87 83 78 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #57534e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-700",`--tw-gradient-to: rgb(68 64 60 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #44403c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-800",`--tw-gradient-to: rgb(41 37 36 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #292524 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-900",`--tw-gradient-to: rgb(28 25 23 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1c1917 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-stone-950",`--tw-gradient-to: rgb(12 10 9 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0c0a09 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-50",`--tw-gradient-to: rgb(254 242 242 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fef2f2 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-100",`--tw-gradient-to: rgb(254 226 226 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fee2e2 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-200",`--tw-gradient-to: rgb(254 202 202 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fecaca var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-300",`--tw-gradient-to: rgb(252 165 165 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fca5a5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-400",`--tw-gradient-to: rgb(248 113 113 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f87171 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-500",`--tw-gradient-to: rgb(239 68 68 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ef4444 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-600",`--tw-gradient-to: rgb(220 38 38 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #dc2626 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-700",`--tw-gradient-to: rgb(185 28 28 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #b91c1c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-800",`--tw-gradient-to: rgb(153 27 27 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #991b1b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-900",`--tw-gradient-to: rgb(127 29 29 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #7f1d1d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-red-950",`--tw-gradient-to: rgb(69 10 10 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #450a0a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-50",`--tw-gradient-to: rgb(255 247 237 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fff7ed var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-100",`--tw-gradient-to: rgb(255 237 213 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ffedd5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-200",`--tw-gradient-to: rgb(254 215 170 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fed7aa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-300",`--tw-gradient-to: rgb(253 186 116 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fdba74 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-400",`--tw-gradient-to: rgb(251 146 60 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fb923c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-500",`--tw-gradient-to: rgb(249 115 22 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f97316 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-600",`--tw-gradient-to: rgb(234 88 12 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ea580c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-700",`--tw-gradient-to: rgb(194 65 12 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #c2410c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-800",`--tw-gradient-to: rgb(154 52 18 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #9a3412 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-900",`--tw-gradient-to: rgb(124 45 18 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #7c2d12 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-orange-950",`--tw-gradient-to: rgb(67 20 7 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #431407 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-50",`--tw-gradient-to: rgb(255 251 235 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fffbeb var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-100",`--tw-gradient-to: rgb(254 243 199 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fef3c7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-200",`--tw-gradient-to: rgb(253 230 138 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fde68a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-300",`--tw-gradient-to: rgb(252 211 77 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fcd34d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-400",`--tw-gradient-to: rgb(251 191 36 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fbbf24 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-500",`--tw-gradient-to: rgb(245 158 11 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f59e0b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-600",`--tw-gradient-to: rgb(217 119 6 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d97706 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-700",`--tw-gradient-to: rgb(180 83 9 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #b45309 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-800",`--tw-gradient-to: rgb(146 64 14 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #92400e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-900",`--tw-gradient-to: rgb(120 53 15 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #78350f var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-amber-950",`--tw-gradient-to: rgb(69 26 3 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #451a03 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-50",`--tw-gradient-to: rgb(254 252 232 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fefce8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-100",`--tw-gradient-to: rgb(254 249 195 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fef9c3 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-200",`--tw-gradient-to: rgb(254 240 138 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fef08a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-300",`--tw-gradient-to: rgb(253 224 71 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fde047 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-400",`--tw-gradient-to: rgb(250 204 21 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #facc15 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-500",`--tw-gradient-to: rgb(234 179 8 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #eab308 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-600",`--tw-gradient-to: rgb(202 138 4 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ca8a04 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-700",`--tw-gradient-to: rgb(161 98 7 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a16207 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-800",`--tw-gradient-to: rgb(133 77 14 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #854d0e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-900",`--tw-gradient-to: rgb(113 63 18 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #713f12 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-yellow-950",`--tw-gradient-to: rgb(66 32 6 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #422006 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-50",`--tw-gradient-to: rgb(247 254 231 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f7fee7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-100",`--tw-gradient-to: rgb(236 252 203 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ecfccb var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-200",`--tw-gradient-to: rgb(217 249 157 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d9f99d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-300",`--tw-gradient-to: rgb(190 242 100 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #bef264 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-400",`--tw-gradient-to: rgb(163 230 53 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a3e635 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-500",`--tw-gradient-to: rgb(132 204 22 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #84cc16 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-600",`--tw-gradient-to: rgb(101 163 13 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #65a30d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-700",`--tw-gradient-to: rgb(77 124 15 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4d7c0f var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-800",`--tw-gradient-to: rgb(63 98 18 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #3f6212 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-900",`--tw-gradient-to: rgb(54 83 20 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #365314 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-lime-950",`--tw-gradient-to: rgb(26 46 5 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1a2e05 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-50",`--tw-gradient-to: rgb(240 253 244 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f0fdf4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-100",`--tw-gradient-to: rgb(220 252 231 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #dcfce7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-200",`--tw-gradient-to: rgb(187 247 208 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #bbf7d0 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-300",`--tw-gradient-to: rgb(134 239 172 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #86efac var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-400",`--tw-gradient-to: rgb(74 222 128 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4ade80 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-500",`--tw-gradient-to: rgb(34 197 94 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #22c55e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-600",`--tw-gradient-to: rgb(22 163 74 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #16a34a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-700",`--tw-gradient-to: rgb(21 128 61 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #15803d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-800",`--tw-gradient-to: rgb(22 101 52 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #166534 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-900",`--tw-gradient-to: rgb(20 83 45 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #14532d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-green-950",`--tw-gradient-to: rgb(5 46 22 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #052e16 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-50",`--tw-gradient-to: rgb(236 253 245 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ecfdf5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-100",`--tw-gradient-to: rgb(209 250 229 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d1fae5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-200",`--tw-gradient-to: rgb(167 243 208 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a7f3d0 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-300",`--tw-gradient-to: rgb(110 231 183 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #6ee7b7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-400",`--tw-gradient-to: rgb(52 211 153 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #34d399 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-500",`--tw-gradient-to: rgb(16 185 129 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #10b981 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-600",`--tw-gradient-to: rgb(5 150 105 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #059669 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-700",`--tw-gradient-to: rgb(4 120 87 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #047857 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-800",`--tw-gradient-to: rgb(6 95 70 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #065f46 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-900",`--tw-gradient-to: rgb(6 78 59 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #064e3b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-emerald-950",`--tw-gradient-to: rgb(2 44 34 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #022c22 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-50",`--tw-gradient-to: rgb(240 253 250 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f0fdfa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-100",`--tw-gradient-to: rgb(204 251 241 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ccfbf1 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-200",`--tw-gradient-to: rgb(153 246 228 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #99f6e4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-300",`--tw-gradient-to: rgb(94 234 212 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #5eead4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-400",`--tw-gradient-to: rgb(45 212 191 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #2dd4bf var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-500",`--tw-gradient-to: rgb(20 184 166 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #14b8a6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-600",`--tw-gradient-to: rgb(13 148 136 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0d9488 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-700",`--tw-gradient-to: rgb(15 118 110 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0f766e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-800",`--tw-gradient-to: rgb(17 94 89 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #115e59 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-900",`--tw-gradient-to: rgb(19 78 74 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #134e4a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-teal-950",`--tw-gradient-to: rgb(4 47 46 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #042f2e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-50",`--tw-gradient-to: rgb(236 254 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ecfeff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-100",`--tw-gradient-to: rgb(207 250 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #cffafe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-200",`--tw-gradient-to: rgb(165 243 252 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a5f3fc var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-300",`--tw-gradient-to: rgb(103 232 249 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #67e8f9 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-400",`--tw-gradient-to: rgb(34 211 238 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #22d3ee var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-500",`--tw-gradient-to: rgb(6 182 212 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #06b6d4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-600",`--tw-gradient-to: rgb(8 145 178 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0891b2 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-700",`--tw-gradient-to: rgb(14 116 144 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0e7490 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-800",`--tw-gradient-to: rgb(21 94 117 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #155e75 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-900",`--tw-gradient-to: rgb(22 78 99 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #164e63 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-cyan-950",`--tw-gradient-to: rgb(8 51 68 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #083344 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-50",`--tw-gradient-to: rgb(240 249 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f0f9ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-100",`--tw-gradient-to: rgb(224 242 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e0f2fe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-200",`--tw-gradient-to: rgb(186 230 253 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #bae6fd var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-300",`--tw-gradient-to: rgb(125 211 252 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #7dd3fc var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-400",`--tw-gradient-to: rgb(56 189 248 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #38bdf8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-500",`--tw-gradient-to: rgb(14 165 233 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0ea5e9 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-600",`--tw-gradient-to: rgb(2 132 199 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0284c7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-700",`--tw-gradient-to: rgb(3 105 161 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0369a1 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-800",`--tw-gradient-to: rgb(7 89 133 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #075985 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-900",`--tw-gradient-to: rgb(12 74 110 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #0c4a6e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-sky-950",`--tw-gradient-to: rgb(8 47 73 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #082f49 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-50",`--tw-gradient-to: rgb(239 246 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #eff6ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-100",`--tw-gradient-to: rgb(219 234 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #dbeafe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-200",`--tw-gradient-to: rgb(191 219 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #bfdbfe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-300",`--tw-gradient-to: rgb(147 197 253 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #93c5fd var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-400",`--tw-gradient-to: rgb(96 165 250 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #60a5fa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-500",`--tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #3b82f6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-600",`--tw-gradient-to: rgb(37 99 235 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #2563eb var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-700",`--tw-gradient-to: rgb(29 78 216 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1d4ed8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-800",`--tw-gradient-to: rgb(30 64 175 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1e40af var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-900",`--tw-gradient-to: rgb(30 58 138 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1e3a8a var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-blue-950",`--tw-gradient-to: rgb(23 37 84 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #172554 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-50",`--tw-gradient-to: rgb(238 242 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #eef2ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-100",`--tw-gradient-to: rgb(224 231 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e0e7ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-200",`--tw-gradient-to: rgb(199 210 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #c7d2fe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-300",`--tw-gradient-to: rgb(165 180 252 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a5b4fc var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-400",`--tw-gradient-to: rgb(129 140 248 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #818cf8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-500",`--tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-600",`--tw-gradient-to: rgb(79 70 229 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4f46e5 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-700",`--tw-gradient-to: rgb(67 56 202 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4338ca var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-800",`--tw-gradient-to: rgb(55 48 163 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #3730a3 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-900",`--tw-gradient-to: rgb(49 46 129 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #312e81 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-indigo-950",`--tw-gradient-to: rgb(30 27 75 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #1e1b4b var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-50",`--tw-gradient-to: rgb(245 243 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f5f3ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-100",`--tw-gradient-to: rgb(237 233 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ede9fe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-200",`--tw-gradient-to: rgb(221 214 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ddd6fe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-300",`--tw-gradient-to: rgb(196 181 253 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #c4b5fd var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-400",`--tw-gradient-to: rgb(167 139 250 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a78bfa var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-500",`--tw-gradient-to: rgb(139 92 246 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #8b5cf6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-600",`--tw-gradient-to: rgb(124 58 237 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #7c3aed var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-700",`--tw-gradient-to: rgb(109 40 217 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #6d28d9 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-800",`--tw-gradient-to: rgb(91 33 182 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #5b21b6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-900",`--tw-gradient-to: rgb(76 29 149 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4c1d95 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-violet-950",`--tw-gradient-to: rgb(46 16 101 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #2e1065 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-50",`--tw-gradient-to: rgb(250 245 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #faf5ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-100",`--tw-gradient-to: rgb(243 232 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f3e8ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-200",`--tw-gradient-to: rgb(233 213 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e9d5ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-300",`--tw-gradient-to: rgb(216 180 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d8b4fe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-400",`--tw-gradient-to: rgb(192 132 252 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #c084fc var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-500",`--tw-gradient-to: rgb(168 85 247 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a855f7 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-600",`--tw-gradient-to: rgb(147 51 234 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #9333ea var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-700",`--tw-gradient-to: rgb(126 34 206 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #7e22ce var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-800",`--tw-gradient-to: rgb(107 33 168 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #6b21a8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-900",`--tw-gradient-to: rgb(88 28 135 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #581c87 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-purple-950",`--tw-gradient-to: rgb(59 7 100 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #3b0764 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-50",`--tw-gradient-to: rgb(253 244 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fdf4ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-100",`--tw-gradient-to: rgb(250 232 255 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fae8ff var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-200",`--tw-gradient-to: rgb(245 208 254 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f5d0fe var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-300",`--tw-gradient-to: rgb(240 171 252 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f0abfc var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-400",`--tw-gradient-to: rgb(232 121 249 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e879f9 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-500",`--tw-gradient-to: rgb(217 70 239 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #d946ef var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-600",`--tw-gradient-to: rgb(192 38 211 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #c026d3 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-700",`--tw-gradient-to: rgb(162 28 175 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #a21caf var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-800",`--tw-gradient-to: rgb(134 25 143 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #86198f var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-900",`--tw-gradient-to: rgb(112 26 117 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #701a75 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-fuchsia-950",`--tw-gradient-to: rgb(74 4 78 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4a044e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-50",`--tw-gradient-to: rgb(253 242 248 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fdf2f8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-100",`--tw-gradient-to: rgb(252 231 243 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fce7f3 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-200",`--tw-gradient-to: rgb(251 207 232 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fbcfe8 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-300",`--tw-gradient-to: rgb(249 168 212 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f9a8d4 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-400",`--tw-gradient-to: rgb(244 114 182 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f472b6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-500",`--tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-600",`--tw-gradient-to: rgb(219 39 119 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #db2777 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-700",`--tw-gradient-to: rgb(190 24 93 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #be185d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-800",`--tw-gradient-to: rgb(157 23 77 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #9d174d var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-900",`--tw-gradient-to: rgb(131 24 67 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #831843 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-pink-950",`--tw-gradient-to: rgb(80 7 36 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #500724 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-50",`--tw-gradient-to: rgb(255 241 242 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fff1f2 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-100",`--tw-gradient-to: rgb(255 228 230 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #ffe4e6 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-200",`--tw-gradient-to: rgb(254 205 211 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fecdd3 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-300",`--tw-gradient-to: rgb(253 164 175 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fda4af var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-400",`--tw-gradient-to: rgb(251 113 133 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #fb7185 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-500",`--tw-gradient-to: rgb(244 63 94 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #f43f5e var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-600",`--tw-gradient-to: rgb(225 29 72 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #e11d48 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-700",`--tw-gradient-to: rgb(190 18 60 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #be123c var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-800",`--tw-gradient-to: rgb(159 18 57 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #9f1239 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-900",`--tw-gradient-to: rgb(136 19 55 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #881337 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-rose-950",`--tw-gradient-to: rgb(76 5 25 / 0)  var(--tw-gradient-to-position);
--tw-gradient-stops: var(--tw-gradient-from), #4c0519 var(--tw-gradient-via-position), var(--tw-gradient-to);
`,""],["via-0%",`--tw-gradient-via-position: 0%;
`,""],["via-5%",`--tw-gradient-via-position: 5%;
`,""],["via-10%",`--tw-gradient-via-position: 10%;
`,""],["via-15%",`--tw-gradient-via-position: 15%;
`,""],["via-20%",`--tw-gradient-via-position: 20%;
`,""],["via-25%",`--tw-gradient-via-position: 25%;
`,""],["via-30%",`--tw-gradient-via-position: 30%;
`,""],["via-35%",`--tw-gradient-via-position: 35%;
`,""],["via-40%",`--tw-gradient-via-position: 40%;
`,""],["via-45%",`--tw-gradient-via-position: 45%;
`,""],["via-50%",`--tw-gradient-via-position: 50%;
`,""],["via-55%",`--tw-gradient-via-position: 55%;
`,""],["via-60%",`--tw-gradient-via-position: 60%;
`,""],["via-65%",`--tw-gradient-via-position: 65%;
`,""],["via-70%",`--tw-gradient-via-position: 70%;
`,""],["via-75%",`--tw-gradient-via-position: 75%;
`,""],["via-80%",`--tw-gradient-via-position: 80%;
`,""],["via-85%",`--tw-gradient-via-position: 85%;
`,""],["via-90%",`--tw-gradient-via-position: 90%;
`,""],["via-95%",`--tw-gradient-via-position: 95%;
`,""],["via-100%",`--tw-gradient-via-position: 100%;
`,""],["to-inherit",`--tw-gradient-to: inherit var(--tw-gradient-to-position);
`,""],["to-current",`--tw-gradient-to: currentColor var(--tw-gradient-to-position);
`,""],["to-transparent",`--tw-gradient-to: transparent var(--tw-gradient-to-position);
`,""],["to-black",`--tw-gradient-to: #000 var(--tw-gradient-to-position);
`,""],["to-white",`--tw-gradient-to: #fff var(--tw-gradient-to-position);
`,""],["to-slate-50",`--tw-gradient-to: #f8fafc var(--tw-gradient-to-position);
`,""],["to-slate-100",`--tw-gradient-to: #f1f5f9 var(--tw-gradient-to-position);
`,""],["to-slate-200",`--tw-gradient-to: #e2e8f0 var(--tw-gradient-to-position);
`,""],["to-slate-300",`--tw-gradient-to: #cbd5e1 var(--tw-gradient-to-position);
`,""],["to-slate-400",`--tw-gradient-to: #94a3b8 var(--tw-gradient-to-position);
`,""],["to-slate-500",`--tw-gradient-to: #64748b var(--tw-gradient-to-position);
`,""],["to-slate-600",`--tw-gradient-to: #475569 var(--tw-gradient-to-position);
`,""],["to-slate-700",`--tw-gradient-to: #334155 var(--tw-gradient-to-position);
`,""],["to-slate-800",`--tw-gradient-to: #1e293b var(--tw-gradient-to-position);
`,""],["to-slate-900",`--tw-gradient-to: #0f172a var(--tw-gradient-to-position);
`,""],["to-slate-950",`--tw-gradient-to: #020617 var(--tw-gradient-to-position);
`,""],["to-gray-50",`--tw-gradient-to: #f9fafb var(--tw-gradient-to-position);
`,""],["to-gray-100",`--tw-gradient-to: #f3f4f6 var(--tw-gradient-to-position);
`,""],["to-gray-200",`--tw-gradient-to: #e5e7eb var(--tw-gradient-to-position);
`,""],["to-gray-300",`--tw-gradient-to: #d1d5db var(--tw-gradient-to-position);
`,""],["to-gray-400",`--tw-gradient-to: #9ca3af var(--tw-gradient-to-position);
`,""],["to-gray-500",`--tw-gradient-to: #6b7280 var(--tw-gradient-to-position);
`,""],["to-gray-600",`--tw-gradient-to: #4b5563 var(--tw-gradient-to-position);
`,""],["to-gray-700",`--tw-gradient-to: #374151 var(--tw-gradient-to-position);
`,""],["to-gray-800",`--tw-gradient-to: #1f2937 var(--tw-gradient-to-position);
`,""],["to-gray-900",`--tw-gradient-to: #111827 var(--tw-gradient-to-position);
`,""],["to-gray-950",`--tw-gradient-to: #030712 var(--tw-gradient-to-position);
`,""],["to-zinc-50",`--tw-gradient-to: #fafafa var(--tw-gradient-to-position);
`,""],["to-zinc-100",`--tw-gradient-to: #f4f4f5 var(--tw-gradient-to-position);
`,""],["to-zinc-200",`--tw-gradient-to: #e4e4e7 var(--tw-gradient-to-position);
`,""],["to-zinc-300",`--tw-gradient-to: #d4d4d8 var(--tw-gradient-to-position);
`,""],["to-zinc-400",`--tw-gradient-to: #a1a1aa var(--tw-gradient-to-position);
`,""],["to-zinc-500",`--tw-gradient-to: #71717a var(--tw-gradient-to-position);
`,""],["to-zinc-600",`--tw-gradient-to: #52525b var(--tw-gradient-to-position);
`,""],["to-zinc-700",`--tw-gradient-to: #3f3f46 var(--tw-gradient-to-position);
`,""],["to-zinc-800",`--tw-gradient-to: #27272a var(--tw-gradient-to-position);
`,""],["to-zinc-900",`--tw-gradient-to: #18181b var(--tw-gradient-to-position);
`,""],["to-zinc-950",`--tw-gradient-to: #09090b var(--tw-gradient-to-position);
`,""],["to-neutral-50",`--tw-gradient-to: #fafafa var(--tw-gradient-to-position);
`,""],["to-neutral-100",`--tw-gradient-to: #f5f5f5 var(--tw-gradient-to-position);
`,""],["to-neutral-200",`--tw-gradient-to: #e5e5e5 var(--tw-gradient-to-position);
`,""],["to-neutral-300",`--tw-gradient-to: #d4d4d4 var(--tw-gradient-to-position);
`,""],["to-neutral-400",`--tw-gradient-to: #a3a3a3 var(--tw-gradient-to-position);
`,""],["to-neutral-500",`--tw-gradient-to: #737373 var(--tw-gradient-to-position);
`,""],["to-neutral-600",`--tw-gradient-to: #525252 var(--tw-gradient-to-position);
`,""],["to-neutral-700",`--tw-gradient-to: #404040 var(--tw-gradient-to-position);
`,""],["to-neutral-800",`--tw-gradient-to: #262626 var(--tw-gradient-to-position);
`,""],["to-neutral-900",`--tw-gradient-to: #171717 var(--tw-gradient-to-position);
`,""],["to-neutral-950",`--tw-gradient-to: #0a0a0a var(--tw-gradient-to-position);
`,""],["to-stone-50",`--tw-gradient-to: #fafaf9 var(--tw-gradient-to-position);
`,""],["to-stone-100",`--tw-gradient-to: #f5f5f4 var(--tw-gradient-to-position);
`,""],["to-stone-200",`--tw-gradient-to: #e7e5e4 var(--tw-gradient-to-position);
`,""],["to-stone-300",`--tw-gradient-to: #d6d3d1 var(--tw-gradient-to-position);
`,""],["to-stone-400",`--tw-gradient-to: #a8a29e var(--tw-gradient-to-position);
`,""],["to-stone-500",`--tw-gradient-to: #78716c var(--tw-gradient-to-position);
`,""],["to-stone-600",`--tw-gradient-to: #57534e var(--tw-gradient-to-position);
`,""],["to-stone-700",`--tw-gradient-to: #44403c var(--tw-gradient-to-position);
`,""],["to-stone-800",`--tw-gradient-to: #292524 var(--tw-gradient-to-position);
`,""],["to-stone-900",`--tw-gradient-to: #1c1917 var(--tw-gradient-to-position);
`,""],["to-stone-950",`--tw-gradient-to: #0c0a09 var(--tw-gradient-to-position);
`,""],["to-red-50",`--tw-gradient-to: #fef2f2 var(--tw-gradient-to-position);
`,""],["to-red-100",`--tw-gradient-to: #fee2e2 var(--tw-gradient-to-position);
`,""],["to-red-200",`--tw-gradient-to: #fecaca var(--tw-gradient-to-position);
`,""],["to-red-300",`--tw-gradient-to: #fca5a5 var(--tw-gradient-to-position);
`,""],["to-red-400",`--tw-gradient-to: #f87171 var(--tw-gradient-to-position);
`,""],["to-red-500",`--tw-gradient-to: #ef4444 var(--tw-gradient-to-position);
`,""],["to-red-600",`--tw-gradient-to: #dc2626 var(--tw-gradient-to-position);
`,""],["to-red-700",`--tw-gradient-to: #b91c1c var(--tw-gradient-to-position);
`,""],["to-red-800",`--tw-gradient-to: #991b1b var(--tw-gradient-to-position);
`,""],["to-red-900",`--tw-gradient-to: #7f1d1d var(--tw-gradient-to-position);
`,""],["to-red-950",`--tw-gradient-to: #450a0a var(--tw-gradient-to-position);
`,""],["to-orange-50",`--tw-gradient-to: #fff7ed var(--tw-gradient-to-position);
`,""],["to-orange-100",`--tw-gradient-to: #ffedd5 var(--tw-gradient-to-position);
`,""],["to-orange-200",`--tw-gradient-to: #fed7aa var(--tw-gradient-to-position);
`,""],["to-orange-300",`--tw-gradient-to: #fdba74 var(--tw-gradient-to-position);
`,""],["to-orange-400",`--tw-gradient-to: #fb923c var(--tw-gradient-to-position);
`,""],["to-orange-500",`--tw-gradient-to: #f97316 var(--tw-gradient-to-position);
`,""],["to-orange-600",`--tw-gradient-to: #ea580c var(--tw-gradient-to-position);
`,""],["to-orange-700",`--tw-gradient-to: #c2410c var(--tw-gradient-to-position);
`,""],["to-orange-800",`--tw-gradient-to: #9a3412 var(--tw-gradient-to-position);
`,""],["to-orange-900",`--tw-gradient-to: #7c2d12 var(--tw-gradient-to-position);
`,""],["to-orange-950",`--tw-gradient-to: #431407 var(--tw-gradient-to-position);
`,""],["to-amber-50",`--tw-gradient-to: #fffbeb var(--tw-gradient-to-position);
`,""],["to-amber-100",`--tw-gradient-to: #fef3c7 var(--tw-gradient-to-position);
`,""],["to-amber-200",`--tw-gradient-to: #fde68a var(--tw-gradient-to-position);
`,""],["to-amber-300",`--tw-gradient-to: #fcd34d var(--tw-gradient-to-position);
`,""],["to-amber-400",`--tw-gradient-to: #fbbf24 var(--tw-gradient-to-position);
`,""],["to-amber-500",`--tw-gradient-to: #f59e0b var(--tw-gradient-to-position);
`,""],["to-amber-600",`--tw-gradient-to: #d97706 var(--tw-gradient-to-position);
`,""],["to-amber-700",`--tw-gradient-to: #b45309 var(--tw-gradient-to-position);
`,""],["to-amber-800",`--tw-gradient-to: #92400e var(--tw-gradient-to-position);
`,""],["to-amber-900",`--tw-gradient-to: #78350f var(--tw-gradient-to-position);
`,""],["to-amber-950",`--tw-gradient-to: #451a03 var(--tw-gradient-to-position);
`,""],["to-yellow-50",`--tw-gradient-to: #fefce8 var(--tw-gradient-to-position);
`,""],["to-yellow-100",`--tw-gradient-to: #fef9c3 var(--tw-gradient-to-position);
`,""],["to-yellow-200",`--tw-gradient-to: #fef08a var(--tw-gradient-to-position);
`,""],["to-yellow-300",`--tw-gradient-to: #fde047 var(--tw-gradient-to-position);
`,""],["to-yellow-400",`--tw-gradient-to: #facc15 var(--tw-gradient-to-position);
`,""],["to-yellow-500",`--tw-gradient-to: #eab308 var(--tw-gradient-to-position);
`,""],["to-yellow-600",`--tw-gradient-to: #ca8a04 var(--tw-gradient-to-position);
`,""],["to-yellow-700",`--tw-gradient-to: #a16207 var(--tw-gradient-to-position);
`,""],["to-yellow-800",`--tw-gradient-to: #854d0e var(--tw-gradient-to-position);
`,""],["to-yellow-900",`--tw-gradient-to: #713f12 var(--tw-gradient-to-position);
`,""],["to-yellow-950",`--tw-gradient-to: #422006 var(--tw-gradient-to-position);
`,""],["to-lime-50",`--tw-gradient-to: #f7fee7 var(--tw-gradient-to-position);
`,""],["to-lime-100",`--tw-gradient-to: #ecfccb var(--tw-gradient-to-position);
`,""],["to-lime-200",`--tw-gradient-to: #d9f99d var(--tw-gradient-to-position);
`,""],["to-lime-300",`--tw-gradient-to: #bef264 var(--tw-gradient-to-position);
`,""],["to-lime-400",`--tw-gradient-to: #a3e635 var(--tw-gradient-to-position);
`,""],["to-lime-500",`--tw-gradient-to: #84cc16 var(--tw-gradient-to-position);
`,""],["to-lime-600",`--tw-gradient-to: #65a30d var(--tw-gradient-to-position);
`,""],["to-lime-700",`--tw-gradient-to: #4d7c0f var(--tw-gradient-to-position);
`,""],["to-lime-800",`--tw-gradient-to: #3f6212 var(--tw-gradient-to-position);
`,""],["to-lime-900",`--tw-gradient-to: #365314 var(--tw-gradient-to-position);
`,""],["to-lime-950",`--tw-gradient-to: #1a2e05 var(--tw-gradient-to-position);
`,""],["to-green-50",`--tw-gradient-to: #f0fdf4 var(--tw-gradient-to-position);
`,""],["to-green-100",`--tw-gradient-to: #dcfce7 var(--tw-gradient-to-position);
`,""],["to-green-200",`--tw-gradient-to: #bbf7d0 var(--tw-gradient-to-position);
`,""],["to-green-300",`--tw-gradient-to: #86efac var(--tw-gradient-to-position);
`,""],["to-green-400",`--tw-gradient-to: #4ade80 var(--tw-gradient-to-position);
`,""],["to-green-500",`--tw-gradient-to: #22c55e var(--tw-gradient-to-position);
`,""],["to-green-600",`--tw-gradient-to: #16a34a var(--tw-gradient-to-position);
`,""],["to-green-700",`--tw-gradient-to: #15803d var(--tw-gradient-to-position);
`,""],["to-green-800",`--tw-gradient-to: #166534 var(--tw-gradient-to-position);
`,""],["to-green-900",`--tw-gradient-to: #14532d var(--tw-gradient-to-position);
`,""],["to-green-950",`--tw-gradient-to: #052e16 var(--tw-gradient-to-position);
`,""],["to-emerald-50",`--tw-gradient-to: #ecfdf5 var(--tw-gradient-to-position);
`,""],["to-emerald-100",`--tw-gradient-to: #d1fae5 var(--tw-gradient-to-position);
`,""],["to-emerald-200",`--tw-gradient-to: #a7f3d0 var(--tw-gradient-to-position);
`,""],["to-emerald-300",`--tw-gradient-to: #6ee7b7 var(--tw-gradient-to-position);
`,""],["to-emerald-400",`--tw-gradient-to: #34d399 var(--tw-gradient-to-position);
`,""],["to-emerald-500",`--tw-gradient-to: #10b981 var(--tw-gradient-to-position);
`,""],["to-emerald-600",`--tw-gradient-to: #059669 var(--tw-gradient-to-position);
`,""],["to-emerald-700",`--tw-gradient-to: #047857 var(--tw-gradient-to-position);
`,""],["to-emerald-800",`--tw-gradient-to: #065f46 var(--tw-gradient-to-position);
`,""],["to-emerald-900",`--tw-gradient-to: #064e3b var(--tw-gradient-to-position);
`,""],["to-emerald-950",`--tw-gradient-to: #022c22 var(--tw-gradient-to-position);
`,""],["to-teal-50",`--tw-gradient-to: #f0fdfa var(--tw-gradient-to-position);
`,""],["to-teal-100",`--tw-gradient-to: #ccfbf1 var(--tw-gradient-to-position);
`,""],["to-teal-200",`--tw-gradient-to: #99f6e4 var(--tw-gradient-to-position);
`,""],["to-teal-300",`--tw-gradient-to: #5eead4 var(--tw-gradient-to-position);
`,""],["to-teal-400",`--tw-gradient-to: #2dd4bf var(--tw-gradient-to-position);
`,""],["to-teal-500",`--tw-gradient-to: #14b8a6 var(--tw-gradient-to-position);
`,""],["to-teal-600",`--tw-gradient-to: #0d9488 var(--tw-gradient-to-position);
`,""],["to-teal-700",`--tw-gradient-to: #0f766e var(--tw-gradient-to-position);
`,""],["to-teal-800",`--tw-gradient-to: #115e59 var(--tw-gradient-to-position);
`,""],["to-teal-900",`--tw-gradient-to: #134e4a var(--tw-gradient-to-position);
`,""],["to-teal-950",`--tw-gradient-to: #042f2e var(--tw-gradient-to-position);
`,""],["to-cyan-50",`--tw-gradient-to: #ecfeff var(--tw-gradient-to-position);
`,""],["to-cyan-100",`--tw-gradient-to: #cffafe var(--tw-gradient-to-position);
`,""],["to-cyan-200",`--tw-gradient-to: #a5f3fc var(--tw-gradient-to-position);
`,""],["to-cyan-300",`--tw-gradient-to: #67e8f9 var(--tw-gradient-to-position);
`,""],["to-cyan-400",`--tw-gradient-to: #22d3ee var(--tw-gradient-to-position);
`,""],["to-cyan-500",`--tw-gradient-to: #06b6d4 var(--tw-gradient-to-position);
`,""],["to-cyan-600",`--tw-gradient-to: #0891b2 var(--tw-gradient-to-position);
`,""],["to-cyan-700",`--tw-gradient-to: #0e7490 var(--tw-gradient-to-position);
`,""],["to-cyan-800",`--tw-gradient-to: #155e75 var(--tw-gradient-to-position);
`,""],["to-cyan-900",`--tw-gradient-to: #164e63 var(--tw-gradient-to-position);
`,""],["to-cyan-950",`--tw-gradient-to: #083344 var(--tw-gradient-to-position);
`,""],["to-sky-50",`--tw-gradient-to: #f0f9ff var(--tw-gradient-to-position);
`,""],["to-sky-100",`--tw-gradient-to: #e0f2fe var(--tw-gradient-to-position);
`,""],["to-sky-200",`--tw-gradient-to: #bae6fd var(--tw-gradient-to-position);
`,""],["to-sky-300",`--tw-gradient-to: #7dd3fc var(--tw-gradient-to-position);
`,""],["to-sky-400",`--tw-gradient-to: #38bdf8 var(--tw-gradient-to-position);
`,""],["to-sky-500",`--tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position);
`,""],["to-sky-600",`--tw-gradient-to: #0284c7 var(--tw-gradient-to-position);
`,""],["to-sky-700",`--tw-gradient-to: #0369a1 var(--tw-gradient-to-position);
`,""],["to-sky-800",`--tw-gradient-to: #075985 var(--tw-gradient-to-position);
`,""],["to-sky-900",`--tw-gradient-to: #0c4a6e var(--tw-gradient-to-position);
`,""],["to-sky-950",`--tw-gradient-to: #082f49 var(--tw-gradient-to-position);
`,""],["to-blue-50",`--tw-gradient-to: #eff6ff var(--tw-gradient-to-position);
`,""],["to-blue-100",`--tw-gradient-to: #dbeafe var(--tw-gradient-to-position);
`,""],["to-blue-200",`--tw-gradient-to: #bfdbfe var(--tw-gradient-to-position);
`,""],["to-blue-300",`--tw-gradient-to: #93c5fd var(--tw-gradient-to-position);
`,""],["to-blue-400",`--tw-gradient-to: #60a5fa var(--tw-gradient-to-position);
`,""],["to-blue-500",`--tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
`,""],["to-blue-600",`--tw-gradient-to: #2563eb var(--tw-gradient-to-position);
`,""],["to-blue-700",`--tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position);
`,""],["to-blue-800",`--tw-gradient-to: #1e40af var(--tw-gradient-to-position);
`,""],["to-blue-900",`--tw-gradient-to: #1e3a8a var(--tw-gradient-to-position);
`,""],["to-blue-950",`--tw-gradient-to: #172554 var(--tw-gradient-to-position);
`,""],["to-indigo-50",`--tw-gradient-to: #eef2ff var(--tw-gradient-to-position);
`,""],["to-indigo-100",`--tw-gradient-to: #e0e7ff var(--tw-gradient-to-position);
`,""],["to-indigo-200",`--tw-gradient-to: #c7d2fe var(--tw-gradient-to-position);
`,""],["to-indigo-300",`--tw-gradient-to: #a5b4fc var(--tw-gradient-to-position);
`,""],["to-indigo-400",`--tw-gradient-to: #818cf8 var(--tw-gradient-to-position);
`,""],["to-indigo-500",`--tw-gradient-to: #6366f1 var(--tw-gradient-to-position);
`,""],["to-indigo-600",`--tw-gradient-to: #4f46e5 var(--tw-gradient-to-position);
`,""],["to-indigo-700",`--tw-gradient-to: #4338ca var(--tw-gradient-to-position);
`,""],["to-indigo-800",`--tw-gradient-to: #3730a3 var(--tw-gradient-to-position);
`,""],["to-indigo-900",`--tw-gradient-to: #312e81 var(--tw-gradient-to-position);
`,""],["to-indigo-950",`--tw-gradient-to: #1e1b4b var(--tw-gradient-to-position);
`,""],["to-violet-50",`--tw-gradient-to: #f5f3ff var(--tw-gradient-to-position);
`,""],["to-violet-100",`--tw-gradient-to: #ede9fe var(--tw-gradient-to-position);
`,""],["to-violet-200",`--tw-gradient-to: #ddd6fe var(--tw-gradient-to-position);
`,""],["to-violet-300",`--tw-gradient-to: #c4b5fd var(--tw-gradient-to-position);
`,""],["to-violet-400",`--tw-gradient-to: #a78bfa var(--tw-gradient-to-position);
`,""],["to-violet-500",`--tw-gradient-to: #8b5cf6 var(--tw-gradient-to-position);
`,""],["to-violet-600",`--tw-gradient-to: #7c3aed var(--tw-gradient-to-position);
`,""],["to-violet-700",`--tw-gradient-to: #6d28d9 var(--tw-gradient-to-position);
`,""],["to-violet-800",`--tw-gradient-to: #5b21b6 var(--tw-gradient-to-position);
`,""],["to-violet-900",`--tw-gradient-to: #4c1d95 var(--tw-gradient-to-position);
`,""],["to-violet-950",`--tw-gradient-to: #2e1065 var(--tw-gradient-to-position);
`,""],["to-purple-50",`--tw-gradient-to: #faf5ff var(--tw-gradient-to-position);
`,""],["to-purple-100",`--tw-gradient-to: #f3e8ff var(--tw-gradient-to-position);
`,""],["to-purple-200",`--tw-gradient-to: #e9d5ff var(--tw-gradient-to-position);
`,""],["to-purple-300",`--tw-gradient-to: #d8b4fe var(--tw-gradient-to-position);
`,""],["to-purple-400",`--tw-gradient-to: #c084fc var(--tw-gradient-to-position);
`,""],["to-purple-500",`--tw-gradient-to: #a855f7 var(--tw-gradient-to-position);
`,""],["to-purple-600",`--tw-gradient-to: #9333ea var(--tw-gradient-to-position);
`,""],["to-purple-700",`--tw-gradient-to: #7e22ce var(--tw-gradient-to-position);
`,""],["to-purple-800",`--tw-gradient-to: #6b21a8 var(--tw-gradient-to-position);
`,""],["to-purple-900",`--tw-gradient-to: #581c87 var(--tw-gradient-to-position);
`,""],["to-purple-950",`--tw-gradient-to: #3b0764 var(--tw-gradient-to-position);
`,""],["to-fuchsia-50",`--tw-gradient-to: #fdf4ff var(--tw-gradient-to-position);
`,""],["to-fuchsia-100",`--tw-gradient-to: #fae8ff var(--tw-gradient-to-position);
`,""],["to-fuchsia-200",`--tw-gradient-to: #f5d0fe var(--tw-gradient-to-position);
`,""],["to-fuchsia-300",`--tw-gradient-to: #f0abfc var(--tw-gradient-to-position);
`,""],["to-fuchsia-400",`--tw-gradient-to: #e879f9 var(--tw-gradient-to-position);
`,""],["to-fuchsia-500",`--tw-gradient-to: #d946ef var(--tw-gradient-to-position);
`,""],["to-fuchsia-600",`--tw-gradient-to: #c026d3 var(--tw-gradient-to-position);
`,""],["to-fuchsia-700",`--tw-gradient-to: #a21caf var(--tw-gradient-to-position);
`,""],["to-fuchsia-800",`--tw-gradient-to: #86198f var(--tw-gradient-to-position);
`,""],["to-fuchsia-900",`--tw-gradient-to: #701a75 var(--tw-gradient-to-position);
`,""],["to-fuchsia-950",`--tw-gradient-to: #4a044e var(--tw-gradient-to-position);
`,""],["to-pink-50",`--tw-gradient-to: #fdf2f8 var(--tw-gradient-to-position);
`,""],["to-pink-100",`--tw-gradient-to: #fce7f3 var(--tw-gradient-to-position);
`,""],["to-pink-200",`--tw-gradient-to: #fbcfe8 var(--tw-gradient-to-position);
`,""],["to-pink-300",`--tw-gradient-to: #f9a8d4 var(--tw-gradient-to-position);
`,""],["to-pink-400",`--tw-gradient-to: #f472b6 var(--tw-gradient-to-position);
`,""],["to-pink-500",`--tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
`,""],["to-pink-600",`--tw-gradient-to: #db2777 var(--tw-gradient-to-position);
`,""],["to-pink-700",`--tw-gradient-to: #be185d var(--tw-gradient-to-position);
`,""],["to-pink-800",`--tw-gradient-to: #9d174d var(--tw-gradient-to-position);
`,""],["to-pink-900",`--tw-gradient-to: #831843 var(--tw-gradient-to-position);
`,""],["to-pink-950",`--tw-gradient-to: #500724 var(--tw-gradient-to-position);
`,""],["to-rose-50",`--tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);
`,""],["to-rose-100",`--tw-gradient-to: #ffe4e6 var(--tw-gradient-to-position);
`,""],["to-rose-200",`--tw-gradient-to: #fecdd3 var(--tw-gradient-to-position);
`,""],["to-rose-300",`--tw-gradient-to: #fda4af var(--tw-gradient-to-position);
`,""],["to-rose-400",`--tw-gradient-to: #fb7185 var(--tw-gradient-to-position);
`,""],["to-rose-500",`--tw-gradient-to: #f43f5e var(--tw-gradient-to-position);
`,""],["to-rose-600",`--tw-gradient-to: #e11d48 var(--tw-gradient-to-position);
`,""],["to-rose-700",`--tw-gradient-to: #be123c var(--tw-gradient-to-position);
`,""],["to-rose-800",`--tw-gradient-to: #9f1239 var(--tw-gradient-to-position);
`,""],["to-rose-900",`--tw-gradient-to: #881337 var(--tw-gradient-to-position);
`,""],["to-rose-950",`--tw-gradient-to: #4c0519 var(--tw-gradient-to-position);
`,""],["to-0%",`--tw-gradient-to-position: 0%;
`,""],["to-5%",`--tw-gradient-to-position: 5%;
`,""],["to-10%",`--tw-gradient-to-position: 10%;
`,""],["to-15%",`--tw-gradient-to-position: 15%;
`,""],["to-20%",`--tw-gradient-to-position: 20%;
`,""],["to-25%",`--tw-gradient-to-position: 25%;
`,""],["to-30%",`--tw-gradient-to-position: 30%;
`,""],["to-35%",`--tw-gradient-to-position: 35%;
`,""],["to-40%",`--tw-gradient-to-position: 40%;
`,""],["to-45%",`--tw-gradient-to-position: 45%;
`,""],["to-50%",`--tw-gradient-to-position: 50%;
`,""],["to-55%",`--tw-gradient-to-position: 55%;
`,""],["to-60%",`--tw-gradient-to-position: 60%;
`,""],["to-65%",`--tw-gradient-to-position: 65%;
`,""],["to-70%",`--tw-gradient-to-position: 70%;
`,""],["to-75%",`--tw-gradient-to-position: 75%;
`,""],["to-80%",`--tw-gradient-to-position: 80%;
`,""],["to-85%",`--tw-gradient-to-position: 85%;
`,""],["to-90%",`--tw-gradient-to-position: 90%;
`,""],["to-95%",`--tw-gradient-to-position: 95%;
`,""],["to-100%",`--tw-gradient-to-position: 100%;
`,""]]}],ks=[{url:"https://tailwindcss.com/docs/border-radius",entry:"Border Radius",description:"Utilities for controlling the border radius of an element.",parameters:[["rounded-none",`border-radius: 0px;
`],["rounded-sm",`border-radius: 0.125rem; /* 2px */
`],["rounded",`border-radius: 0.25rem; /* 4px */
`],["rounded-md",`border-radius: 0.375rem; /* 6px */
`],["rounded-lg",`border-radius: 0.5rem; /* 8px */
`],["rounded-xl",`border-radius: 0.75rem; /* 12px */
`],["rounded-2xl",`border-radius: 1rem; /* 16px */
`],["rounded-3xl",`border-radius: 1.5rem; /* 24px */
`],["rounded-full",`border-radius: 9999px;
`],["rounded-s-none",`border-start-start-radius: 0px;
border-end-start-radius: 0px;
`],["rounded-s-sm",`border-start-start-radius: 0.125rem; /* 2px */
border-end-start-radius: 0.125rem; /* 2px */
`],["rounded-s",`border-start-start-radius: 0.25rem; /* 4px */
border-end-start-radius: 0.25rem; /* 4px */
`],["rounded-s-md",`border-start-start-radius: 0.375rem; /* 6px */
border-end-start-radius: 0.375rem; /* 6px */
`],["rounded-s-lg",`border-start-start-radius: 0.5rem; /* 8px */
border-end-start-radius: 0.5rem; /* 8px */
`],["rounded-s-xl",`border-start-start-radius: 0.75rem; /* 12px */
border-end-start-radius: 0.75rem; /* 12px */
`],["rounded-s-2xl",`border-start-start-radius: 1rem; /* 16px */
border-end-start-radius: 1rem; /* 16px */
`],["rounded-s-3xl",`border-start-start-radius: 1.5rem; /* 24px */
border-end-start-radius: 1.5rem; /* 24px */
`],["rounded-s-full",`border-start-start-radius: 9999px;
border-end-start-radius: 9999px;
`],["rounded-e-none",`border-start-end-radius: 0px;
border-end-end-radius: 0px;
`],["rounded-e-sm",`border-start-end-radius: 0.125rem; /* 2px */
border-end-end-radius: 0.125rem; /* 2px */
`],["rounded-e",`border-start-end-radius: 0.25rem; /* 4px */
border-end-end-radius: 0.25rem; /* 4px */
`],["rounded-e-md",`border-start-end-radius: 0.375rem; /* 6px */
border-end-end-radius: 0.375rem; /* 6px */
`],["rounded-e-lg",`border-start-end-radius: 0.5rem; /* 8px */
border-end-end-radius: 0.5rem; /* 8px */
`],["rounded-e-xl",`border-start-end-radius: 0.75rem; /* 12px */
border-end-end-radius: 0.75rem; /* 12px */
`],["rounded-e-2xl",`border-start-end-radius: 1rem; /* 16px */
border-end-end-radius: 1rem; /* 16px */
`],["rounded-e-3xl",`border-start-end-radius: 1.5rem; /* 24px */
border-end-end-radius: 1.5rem; /* 24px */
`],["rounded-e-full",`border-start-end-radius: 9999px;
border-end-end-radius: 9999px;
`],["rounded-t-none",`border-top-left-radius: 0px;
border-top-right-radius: 0px;
`],["rounded-t-sm",`border-top-left-radius: 0.125rem; /* 2px */
border-top-right-radius: 0.125rem; /* 2px */
`],["rounded-t",`border-top-left-radius: 0.25rem; /* 4px */
border-top-right-radius: 0.25rem; /* 4px */
`],["rounded-t-md",`border-top-left-radius: 0.375rem; /* 6px */
border-top-right-radius: 0.375rem; /* 6px */
`],["rounded-t-lg",`border-top-left-radius: 0.5rem; /* 8px */
border-top-right-radius: 0.5rem; /* 8px */
`],["rounded-t-xl",`border-top-left-radius: 0.75rem; /* 12px */
border-top-right-radius: 0.75rem; /* 12px */
`],["rounded-t-2xl",`border-top-left-radius: 1rem; /* 16px */
border-top-right-radius: 1rem; /* 16px */
`],["rounded-t-3xl",`border-top-left-radius: 1.5rem; /* 24px */
border-top-right-radius: 1.5rem; /* 24px */
`],["rounded-t-full",`border-top-left-radius: 9999px;
border-top-right-radius: 9999px;
`],["rounded-r-none",`border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
`],["rounded-r-sm",`border-top-right-radius: 0.125rem; /* 2px */
border-bottom-right-radius: 0.125rem; /* 2px */
`],["rounded-r",`border-top-right-radius: 0.25rem; /* 4px */
border-bottom-right-radius: 0.25rem; /* 4px */
`],["rounded-r-md",`border-top-right-radius: 0.375rem; /* 6px */
border-bottom-right-radius: 0.375rem; /* 6px */
`],["rounded-r-lg",`border-top-right-radius: 0.5rem; /* 8px */
border-bottom-right-radius: 0.5rem; /* 8px */
`],["rounded-r-xl",`border-top-right-radius: 0.75rem; /* 12px */
border-bottom-right-radius: 0.75rem; /* 12px */
`],["rounded-r-2xl",`border-top-right-radius: 1rem; /* 16px */
border-bottom-right-radius: 1rem; /* 16px */
`],["rounded-r-3xl",`border-top-right-radius: 1.5rem; /* 24px */
border-bottom-right-radius: 1.5rem; /* 24px */
`],["rounded-r-full",`border-top-right-radius: 9999px;
border-bottom-right-radius: 9999px;
`],["rounded-b-none",`border-bottom-right-radius: 0px;
border-bottom-left-radius: 0px;
`],["rounded-b-sm",`border-bottom-right-radius: 0.125rem; /* 2px */
border-bottom-left-radius: 0.125rem; /* 2px */
`],["rounded-b",`border-bottom-right-radius: 0.25rem; /* 4px */
border-bottom-left-radius: 0.25rem; /* 4px */
`],["rounded-b-md",`border-bottom-right-radius: 0.375rem; /* 6px */
border-bottom-left-radius: 0.375rem; /* 6px */
`],["rounded-b-lg",`border-bottom-right-radius: 0.5rem; /* 8px */
border-bottom-left-radius: 0.5rem; /* 8px */
`],["rounded-b-xl",`border-bottom-right-radius: 0.75rem; /* 12px */
border-bottom-left-radius: 0.75rem; /* 12px */
`],["rounded-b-2xl",`border-bottom-right-radius: 1rem; /* 16px */
border-bottom-left-radius: 1rem; /* 16px */
`],["rounded-b-3xl",`border-bottom-right-radius: 1.5rem; /* 24px */
border-bottom-left-radius: 1.5rem; /* 24px */
`],["rounded-b-full",`border-bottom-right-radius: 9999px;
border-bottom-left-radius: 9999px;
`],["rounded-l-none",`border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
`],["rounded-l-sm",`border-top-left-radius: 0.125rem; /* 2px */
border-bottom-left-radius: 0.125rem; /* 2px */
`],["rounded-l",`border-top-left-radius: 0.25rem; /* 4px */
border-bottom-left-radius: 0.25rem; /* 4px */
`],["rounded-l-md",`border-top-left-radius: 0.375rem; /* 6px */
border-bottom-left-radius: 0.375rem; /* 6px */
`],["rounded-l-lg",`border-top-left-radius: 0.5rem; /* 8px */
border-bottom-left-radius: 0.5rem; /* 8px */
`],["rounded-l-xl",`border-top-left-radius: 0.75rem; /* 12px */
border-bottom-left-radius: 0.75rem; /* 12px */
`],["rounded-l-2xl",`border-top-left-radius: 1rem; /* 16px */
border-bottom-left-radius: 1rem; /* 16px */
`],["rounded-l-3xl",`border-top-left-radius: 1.5rem; /* 24px */
border-bottom-left-radius: 1.5rem; /* 24px */
`],["rounded-l-full",`border-top-left-radius: 9999px;
border-bottom-left-radius: 9999px;
`],["rounded-ss-none",`border-start-start-radius: 0px;
`],["rounded-ss-sm",`border-start-start-radius: 0.125rem; /* 2px */
`],["rounded-ss",`border-start-start-radius: 0.25rem; /* 4px */
`],["rounded-ss-md",`border-start-start-radius: 0.375rem; /* 6px */
`],["rounded-ss-lg",`border-start-start-radius: 0.5rem; /* 8px */
`],["rounded-ss-xl",`border-start-start-radius: 0.75rem; /* 12px */
`],["rounded-ss-2xl",`border-start-start-radius: 1rem; /* 16px */
`],["rounded-ss-3xl",`border-start-start-radius: 1.5rem; /* 24px */
`],["rounded-ss-full",`border-start-start-radius: 9999px;
`],["rounded-se-none",`border-start-end-radius: 0px;
`],["rounded-se-sm",`border-start-end-radius: 0.125rem; /* 2px */
`],["rounded-se",`border-start-end-radius: 0.25rem; /* 4px */
`],["rounded-se-md",`border-start-end-radius: 0.375rem; /* 6px */
`],["rounded-se-lg",`border-start-end-radius: 0.5rem; /* 8px */
`],["rounded-se-xl",`border-start-end-radius: 0.75rem; /* 12px */
`],["rounded-se-2xl",`border-start-end-radius: 1rem; /* 16px */
`],["rounded-se-3xl",`border-start-end-radius: 1.5rem; /* 24px */
`],["rounded-se-full",`border-start-end-radius: 9999px;
`],["rounded-ee-none",`border-end-end-radius: 0px;
`],["rounded-ee-sm",`border-end-end-radius: 0.125rem; /* 2px */
`],["rounded-ee",`border-end-end-radius: 0.25rem; /* 4px */
`],["rounded-ee-md",`border-end-end-radius: 0.375rem; /* 6px */
`],["rounded-ee-lg",`border-end-end-radius: 0.5rem; /* 8px */
`],["rounded-ee-xl",`border-end-end-radius: 0.75rem; /* 12px */
`],["rounded-ee-2xl",`border-end-end-radius: 1rem; /* 16px */
`],["rounded-ee-3xl",`border-end-end-radius: 1.5rem; /* 24px */
`],["rounded-ee-full",`border-end-end-radius: 9999px;
`],["rounded-es-none",`border-end-start-radius: 0px;
`],["rounded-es-sm",`border-end-start-radius: 0.125rem; /* 2px */
`],["rounded-es",`border-end-start-radius: 0.25rem; /* 4px */
`],["rounded-es-md",`border-end-start-radius: 0.375rem; /* 6px */
`],["rounded-es-lg",`border-end-start-radius: 0.5rem; /* 8px */
`],["rounded-es-xl",`border-end-start-radius: 0.75rem; /* 12px */
`],["rounded-es-2xl",`border-end-start-radius: 1rem; /* 16px */
`],["rounded-es-3xl",`border-end-start-radius: 1.5rem; /* 24px */
`],["rounded-es-full",`border-end-start-radius: 9999px;
`],["rounded-tl-none",`border-top-left-radius: 0px;
`],["rounded-tl-sm",`border-top-left-radius: 0.125rem; /* 2px */
`],["rounded-tl",`border-top-left-radius: 0.25rem; /* 4px */
`],["rounded-tl-md",`border-top-left-radius: 0.375rem; /* 6px */
`],["rounded-tl-lg",`border-top-left-radius: 0.5rem; /* 8px */
`],["rounded-tl-xl",`border-top-left-radius: 0.75rem; /* 12px */
`],["rounded-tl-2xl",`border-top-left-radius: 1rem; /* 16px */
`],["rounded-tl-3xl",`border-top-left-radius: 1.5rem; /* 24px */
`],["rounded-tl-full",`border-top-left-radius: 9999px;
`],["rounded-tr-none",`border-top-right-radius: 0px;
`],["rounded-tr-sm",`border-top-right-radius: 0.125rem; /* 2px */
`],["rounded-tr",`border-top-right-radius: 0.25rem; /* 4px */
`],["rounded-tr-md",`border-top-right-radius: 0.375rem; /* 6px */
`],["rounded-tr-lg",`border-top-right-radius: 0.5rem; /* 8px */
`],["rounded-tr-xl",`border-top-right-radius: 0.75rem; /* 12px */
`],["rounded-tr-2xl",`border-top-right-radius: 1rem; /* 16px */
`],["rounded-tr-3xl",`border-top-right-radius: 1.5rem; /* 24px */
`],["rounded-tr-full",`border-top-right-radius: 9999px;
`],["rounded-br-none",`border-bottom-right-radius: 0px;
`],["rounded-br-sm",`border-bottom-right-radius: 0.125rem; /* 2px */
`],["rounded-br",`border-bottom-right-radius: 0.25rem; /* 4px */
`],["rounded-br-md",`border-bottom-right-radius: 0.375rem; /* 6px */
`],["rounded-br-lg",`border-bottom-right-radius: 0.5rem; /* 8px */
`],["rounded-br-xl",`border-bottom-right-radius: 0.75rem; /* 12px */
`],["rounded-br-2xl",`border-bottom-right-radius: 1rem; /* 16px */
`],["rounded-br-3xl",`border-bottom-right-radius: 1.5rem; /* 24px */
`],["rounded-br-full",`border-bottom-right-radius: 9999px;
`],["rounded-bl-none",`border-bottom-left-radius: 0px;
`],["rounded-bl-sm",`border-bottom-left-radius: 0.125rem; /* 2px */
`],["rounded-bl",`border-bottom-left-radius: 0.25rem; /* 4px */
`],["rounded-bl-md",`border-bottom-left-radius: 0.375rem; /* 6px */
`],["rounded-bl-lg",`border-bottom-left-radius: 0.5rem; /* 8px */
`],["rounded-bl-xl",`border-bottom-left-radius: 0.75rem; /* 12px */
`],["rounded-bl-2xl",`border-bottom-left-radius: 1rem; /* 16px */
`],["rounded-bl-3xl",`border-bottom-left-radius: 1.5rem; /* 24px */
`],["rounded-bl-full",`border-bottom-left-radius: 9999px;
`]]},{url:"https://tailwindcss.com/docs/border-width",entry:"Border Width",description:"Utilities for controlling the width of an element's borders.",parameters:[["border-0",`border-width: 0px;
`],["border-2",`border-width: 2px;
`],["border-4",`border-width: 4px;
`],["border-8",`border-width: 8px;
`],["border",`border-width: 1px;
`],["border-x-0",`border-left-width: 0px;
border-right-width: 0px;
`],["border-x-2",`border-left-width: 2px;
border-right-width: 2px;
`],["border-x-4",`border-left-width: 4px;
border-right-width: 4px;
`],["border-x-8",`border-left-width: 8px;
border-right-width: 8px;
`],["border-x",`border-left-width: 1px;
border-right-width: 1px;
`],["border-y-0",`border-top-width: 0px;
border-bottom-width: 0px;
`],["border-y-2",`border-top-width: 2px;
border-bottom-width: 2px;
`],["border-y-4",`border-top-width: 4px;
border-bottom-width: 4px;
`],["border-y-8",`border-top-width: 8px;
border-bottom-width: 8px;
`],["border-y",`border-top-width: 1px;
border-bottom-width: 1px;
`],["border-s-0",`border-inline-start-width: 0px;
`],["border-s-2",`border-inline-start-width: 2px;
`],["border-s-4",`border-inline-start-width: 4px;
`],["border-s-8",`border-inline-start-width: 8px;
`],["border-s",`border-inline-start-width: 1px;
`],["border-e-0",`border-inline-end-width: 0px;
`],["border-e-2",`border-inline-end-width: 2px;
`],["border-e-4",`border-inline-end-width: 4px;
`],["border-e-8",`border-inline-end-width: 8px;
`],["border-e",`border-inline-end-width: 1px;
`],["border-t-0",`border-top-width: 0px;
`],["border-t-2",`border-top-width: 2px;
`],["border-t-4",`border-top-width: 4px;
`],["border-t-8",`border-top-width: 8px;
`],["border-t",`border-top-width: 1px;
`],["border-r-0",`border-right-width: 0px;
`],["border-r-2",`border-right-width: 2px;
`],["border-r-4",`border-right-width: 4px;
`],["border-r-8",`border-right-width: 8px;
`],["border-r",`border-right-width: 1px;
`],["border-b-0",`border-bottom-width: 0px;
`],["border-b-2",`border-bottom-width: 2px;
`],["border-b-4",`border-bottom-width: 4px;
`],["border-b-8",`border-bottom-width: 8px;
`],["border-b",`border-bottom-width: 1px;
`],["border-l-0",`border-left-width: 0px;
`],["border-l-2",`border-left-width: 2px;
`],["border-l-4",`border-left-width: 4px;
`],["border-l-8",`border-left-width: 8px;
`],["border-l",`border-left-width: 1px;
`]]},{url:"https://tailwindcss.com/docs/border-color",entry:"Border Color",description:"Utilities for controlling the color of an element's borders.",parameters:[["border-inherit",`border-color: inherit;
`,""],["border-current",`border-color: currentColor;
`,""],["border-transparent",`border-color: transparent;
`,""],["border-black",`border-color: rgb(0 0 0);
`,""],["border-white",`border-color: rgb(255 255 255);
`,""],["border-slate-50",`border-color: rgb(248 250 252);
`,""],["border-slate-100",`border-color: rgb(241 245 249);
`,""],["border-slate-200",`border-color: rgb(226 232 240);
`,""],["border-slate-300",`border-color: rgb(203 213 225);
`,""],["border-slate-400",`border-color: rgb(148 163 184);
`,""],["border-slate-500",`border-color: rgb(100 116 139);
`,""],["border-slate-600",`border-color: rgb(71 85 105);
`,""],["border-slate-700",`border-color: rgb(51 65 85);
`,""],["border-slate-800",`border-color: rgb(30 41 59);
`,""],["border-slate-900",`border-color: rgb(15 23 42);
`,""],["border-slate-950",`border-color: rgb(2 6 23);
`,""],["border-gray-50",`border-color: rgb(249 250 251);
`,""],["border-gray-100",`border-color: rgb(243 244 246);
`,""],["border-gray-200",`border-color: rgb(229 231 235);
`,""],["border-gray-300",`border-color: rgb(209 213 219);
`,""],["border-gray-400",`border-color: rgb(156 163 175);
`,""],["border-gray-500",`border-color: rgb(107 114 128);
`,""],["border-gray-600",`border-color: rgb(75 85 99);
`,""],["border-gray-700",`border-color: rgb(55 65 81);
`,""],["border-gray-800",`border-color: rgb(31 41 55);
`,""],["border-gray-900",`border-color: rgb(17 24 39);
`,""],["border-gray-950",`border-color: rgb(3 7 18);
`,""],["border-zinc-50",`border-color: rgb(250 250 250);
`,""],["border-zinc-100",`border-color: rgb(244 244 245);
`,""],["border-zinc-200",`border-color: rgb(228 228 231);
`,""],["border-zinc-300",`border-color: rgb(212 212 216);
`,""],["border-zinc-400",`border-color: rgb(161 161 170);
`,""],["border-zinc-500",`border-color: rgb(113 113 122);
`,""],["border-zinc-600",`border-color: rgb(82 82 91);
`,""],["border-zinc-700",`border-color: rgb(63 63 70);
`,""],["border-zinc-800",`border-color: rgb(39 39 42);
`,""],["border-zinc-900",`border-color: rgb(24 24 27);
`,""],["border-zinc-950",`border-color: rgb(9 9 11);
`,""],["border-neutral-50",`border-color: rgb(250 250 250);
`,""],["border-neutral-100",`border-color: rgb(245 245 245);
`,""],["border-neutral-200",`border-color: rgb(229 229 229);
`,""],["border-neutral-300",`border-color: rgb(212 212 212);
`,""],["border-neutral-400",`border-color: rgb(163 163 163);
`,""],["border-neutral-500",`border-color: rgb(115 115 115);
`,""],["border-neutral-600",`border-color: rgb(82 82 82);
`,""],["border-neutral-700",`border-color: rgb(64 64 64);
`,""],["border-neutral-800",`border-color: rgb(38 38 38);
`,""],["border-neutral-900",`border-color: rgb(23 23 23);
`,""],["border-neutral-950",`border-color: rgb(10 10 10);
`,""],["border-stone-50",`border-color: rgb(250 250 249);
`,""],["border-stone-100",`border-color: rgb(245 245 244);
`,""],["border-stone-200",`border-color: rgb(231 229 228);
`,""],["border-stone-300",`border-color: rgb(214 211 209);
`,""],["border-stone-400",`border-color: rgb(168 162 158);
`,""],["border-stone-500",`border-color: rgb(120 113 108);
`,""],["border-stone-600",`border-color: rgb(87 83 78);
`,""],["border-stone-700",`border-color: rgb(68 64 60);
`,""],["border-stone-800",`border-color: rgb(41 37 36);
`,""],["border-stone-900",`border-color: rgb(28 25 23);
`,""],["border-stone-950",`border-color: rgb(12 10 9);
`,""],["border-red-50",`border-color: rgb(254 242 242);
`,""],["border-red-100",`border-color: rgb(254 226 226);
`,""],["border-red-200",`border-color: rgb(254 202 202);
`,""],["border-red-300",`border-color: rgb(252 165 165);
`,""],["border-red-400",`border-color: rgb(248 113 113);
`,""],["border-red-500",`border-color: rgb(239 68 68);
`,""],["border-red-600",`border-color: rgb(220 38 38);
`,""],["border-red-700",`border-color: rgb(185 28 28);
`,""],["border-red-800",`border-color: rgb(153 27 27);
`,""],["border-red-900",`border-color: rgb(127 29 29);
`,""],["border-red-950",`border-color: rgb(69 10 10);
`,""],["border-orange-50",`border-color: rgb(255 247 237);
`,""],["border-orange-100",`border-color: rgb(255 237 213);
`,""],["border-orange-200",`border-color: rgb(254 215 170);
`,""],["border-orange-300",`border-color: rgb(253 186 116);
`,""],["border-orange-400",`border-color: rgb(251 146 60);
`,""],["border-orange-500",`border-color: rgb(249 115 22);
`,""],["border-orange-600",`border-color: rgb(234 88 12);
`,""],["border-orange-700",`border-color: rgb(194 65 12);
`,""],["border-orange-800",`border-color: rgb(154 52 18);
`,""],["border-orange-900",`border-color: rgb(124 45 18);
`,""],["border-orange-950",`border-color: rgb(67 20 7);
`,""],["border-amber-50",`border-color: rgb(255 251 235);
`,""],["border-amber-100",`border-color: rgb(254 243 199);
`,""],["border-amber-200",`border-color: rgb(253 230 138);
`,""],["border-amber-300",`border-color: rgb(252 211 77);
`,""],["border-amber-400",`border-color: rgb(251 191 36);
`,""],["border-amber-500",`border-color: rgb(245 158 11);
`,""],["border-amber-600",`border-color: rgb(217 119 6);
`,""],["border-amber-700",`border-color: rgb(180 83 9);
`,""],["border-amber-800",`border-color: rgb(146 64 14);
`,""],["border-amber-900",`border-color: rgb(120 53 15);
`,""],["border-amber-950",`border-color: rgb(69 26 3);
`,""],["border-yellow-50",`border-color: rgb(254 252 232);
`,""],["border-yellow-100",`border-color: rgb(254 249 195);
`,""],["border-yellow-200",`border-color: rgb(254 240 138);
`,""],["border-yellow-300",`border-color: rgb(253 224 71);
`,""],["border-yellow-400",`border-color: rgb(250 204 21);
`,""],["border-yellow-500",`border-color: rgb(234 179 8);
`,""],["border-yellow-600",`border-color: rgb(202 138 4);
`,""],["border-yellow-700",`border-color: rgb(161 98 7);
`,""],["border-yellow-800",`border-color: rgb(133 77 14);
`,""],["border-yellow-900",`border-color: rgb(113 63 18);
`,""],["border-yellow-950",`border-color: rgb(66 32 6);
`,""],["border-lime-50",`border-color: rgb(247 254 231);
`,""],["border-lime-100",`border-color: rgb(236 252 203);
`,""],["border-lime-200",`border-color: rgb(217 249 157);
`,""],["border-lime-300",`border-color: rgb(190 242 100);
`,""],["border-lime-400",`border-color: rgb(163 230 53);
`,""],["border-lime-500",`border-color: rgb(132 204 22);
`,""],["border-lime-600",`border-color: rgb(101 163 13);
`,""],["border-lime-700",`border-color: rgb(77 124 15);
`,""],["border-lime-800",`border-color: rgb(63 98 18);
`,""],["border-lime-900",`border-color: rgb(54 83 20);
`,""],["border-lime-950",`border-color: rgb(26 46 5);
`,""],["border-green-50",`border-color: rgb(240 253 244);
`,""],["border-green-100",`border-color: rgb(220 252 231);
`,""],["border-green-200",`border-color: rgb(187 247 208);
`,""],["border-green-300",`border-color: rgb(134 239 172);
`,""],["border-green-400",`border-color: rgb(74 222 128);
`,""],["border-green-500",`border-color: rgb(34 197 94);
`,""],["border-green-600",`border-color: rgb(22 163 74);
`,""],["border-green-700",`border-color: rgb(21 128 61);
`,""],["border-green-800",`border-color: rgb(22 101 52);
`,""],["border-green-900",`border-color: rgb(20 83 45);
`,""],["border-green-950",`border-color: rgb(5 46 22);
`,""],["border-emerald-50",`border-color: rgb(236 253 245);
`,""],["border-emerald-100",`border-color: rgb(209 250 229);
`,""],["border-emerald-200",`border-color: rgb(167 243 208);
`,""],["border-emerald-300",`border-color: rgb(110 231 183);
`,""],["border-emerald-400",`border-color: rgb(52 211 153);
`,""],["border-emerald-500",`border-color: rgb(16 185 129);
`,""],["border-emerald-600",`border-color: rgb(5 150 105);
`,""],["border-emerald-700",`border-color: rgb(4 120 87);
`,""],["border-emerald-800",`border-color: rgb(6 95 70);
`,""],["border-emerald-900",`border-color: rgb(6 78 59);
`,""],["border-emerald-950",`border-color: rgb(2 44 34);
`,""],["border-teal-50",`border-color: rgb(240 253 250);
`,""],["border-teal-100",`border-color: rgb(204 251 241);
`,""],["border-teal-200",`border-color: rgb(153 246 228);
`,""],["border-teal-300",`border-color: rgb(94 234 212);
`,""],["border-teal-400",`border-color: rgb(45 212 191);
`,""],["border-teal-500",`border-color: rgb(20 184 166);
`,""],["border-teal-600",`border-color: rgb(13 148 136);
`,""],["border-teal-700",`border-color: rgb(15 118 110);
`,""],["border-teal-800",`border-color: rgb(17 94 89);
`,""],["border-teal-900",`border-color: rgb(19 78 74);
`,""],["border-teal-950",`border-color: rgb(4 47 46);
`,""],["border-cyan-50",`border-color: rgb(236 254 255);
`,""],["border-cyan-100",`border-color: rgb(207 250 254);
`,""],["border-cyan-200",`border-color: rgb(165 243 252);
`,""],["border-cyan-300",`border-color: rgb(103 232 249);
`,""],["border-cyan-400",`border-color: rgb(34 211 238);
`,""],["border-cyan-500",`border-color: rgb(6 182 212);
`,""],["border-cyan-600",`border-color: rgb(8 145 178);
`,""],["border-cyan-700",`border-color: rgb(14 116 144);
`,""],["border-cyan-800",`border-color: rgb(21 94 117);
`,""],["border-cyan-900",`border-color: rgb(22 78 99);
`,""],["border-cyan-950",`border-color: rgb(8 51 68);
`,""],["border-sky-50",`border-color: rgb(240 249 255);
`,""],["border-sky-100",`border-color: rgb(224 242 254);
`,""],["border-sky-200",`border-color: rgb(186 230 253);
`,""],["border-sky-300",`border-color: rgb(125 211 252);
`,""],["border-sky-400",`border-color: rgb(56 189 248);
`,""],["border-sky-500",`border-color: rgb(14 165 233);
`,""],["border-sky-600",`border-color: rgb(2 132 199);
`,""],["border-sky-700",`border-color: rgb(3 105 161);
`,""],["border-sky-800",`border-color: rgb(7 89 133);
`,""],["border-sky-900",`border-color: rgb(12 74 110);
`,""],["border-sky-950",`border-color: rgb(8 47 73);
`,""],["border-blue-50",`border-color: rgb(239 246 255);
`,""],["border-blue-100",`border-color: rgb(219 234 254);
`,""],["border-blue-200",`border-color: rgb(191 219 254);
`,""],["border-blue-300",`border-color: rgb(147 197 253);
`,""],["border-blue-400",`border-color: rgb(96 165 250);
`,""],["border-blue-500",`border-color: rgb(59 130 246);
`,""],["border-blue-600",`border-color: rgb(37 99 235);
`,""],["border-blue-700",`border-color: rgb(29 78 216);
`,""],["border-blue-800",`border-color: rgb(30 64 175);
`,""],["border-blue-900",`border-color: rgb(30 58 138);
`,""],["border-blue-950",`border-color: rgb(23 37 84);
`,""],["border-indigo-50",`border-color: rgb(238 242 255);
`,""],["border-indigo-100",`border-color: rgb(224 231 255);
`,""],["border-indigo-200",`border-color: rgb(199 210 254);
`,""],["border-indigo-300",`border-color: rgb(165 180 252);
`,""],["border-indigo-400",`border-color: rgb(129 140 248);
`,""],["border-indigo-500",`border-color: rgb(99 102 241);
`,""],["border-indigo-600",`border-color: rgb(79 70 229);
`,""],["border-indigo-700",`border-color: rgb(67 56 202);
`,""],["border-indigo-800",`border-color: rgb(55 48 163);
`,""],["border-indigo-900",`border-color: rgb(49 46 129);
`,""],["border-indigo-950",`border-color: rgb(30 27 75);
`,""],["border-violet-50",`border-color: rgb(245 243 255);
`,""],["border-violet-100",`border-color: rgb(237 233 254);
`,""],["border-violet-200",`border-color: rgb(221 214 254);
`,""],["border-violet-300",`border-color: rgb(196 181 253);
`,""],["border-violet-400",`border-color: rgb(167 139 250);
`,""],["border-violet-500",`border-color: rgb(139 92 246);
`,""],["border-violet-600",`border-color: rgb(124 58 237);
`,""],["border-violet-700",`border-color: rgb(109 40 217);
`,""],["border-violet-800",`border-color: rgb(91 33 182);
`,""],["border-violet-900",`border-color: rgb(76 29 149);
`,""],["border-violet-950",`border-color: rgb(46 16 101);
`,""],["border-purple-50",`border-color: rgb(250 245 255);
`,""],["border-purple-100",`border-color: rgb(243 232 255);
`,""],["border-purple-200",`border-color: rgb(233 213 255);
`,""],["border-purple-300",`border-color: rgb(216 180 254);
`,""],["border-purple-400",`border-color: rgb(192 132 252);
`,""],["border-purple-500",`border-color: rgb(168 85 247);
`,""],["border-purple-600",`border-color: rgb(147 51 234);
`,""],["border-purple-700",`border-color: rgb(126 34 206);
`,""],["border-purple-800",`border-color: rgb(107 33 168);
`,""],["border-purple-900",`border-color: rgb(88 28 135);
`,""],["border-purple-950",`border-color: rgb(59 7 100);
`,""],["border-fuchsia-50",`border-color: rgb(253 244 255);
`,""],["border-fuchsia-100",`border-color: rgb(250 232 255);
`,""],["border-fuchsia-200",`border-color: rgb(245 208 254);
`,""],["border-fuchsia-300",`border-color: rgb(240 171 252);
`,""],["border-fuchsia-400",`border-color: rgb(232 121 249);
`,""],["border-fuchsia-500",`border-color: rgb(217 70 239);
`,""],["border-fuchsia-600",`border-color: rgb(192 38 211);
`,""],["border-fuchsia-700",`border-color: rgb(162 28 175);
`,""],["border-fuchsia-800",`border-color: rgb(134 25 143);
`,""],["border-fuchsia-900",`border-color: rgb(112 26 117);
`,""],["border-fuchsia-950",`border-color: rgb(74 4 78);
`,""],["border-pink-50",`border-color: rgb(253 242 248);
`,""],["border-pink-100",`border-color: rgb(252 231 243);
`,""],["border-pink-200",`border-color: rgb(251 207 232);
`,""],["border-pink-300",`border-color: rgb(249 168 212);
`,""],["border-pink-400",`border-color: rgb(244 114 182);
`,""],["border-pink-500",`border-color: rgb(236 72 153);
`,""],["border-pink-600",`border-color: rgb(219 39 119);
`,""],["border-pink-700",`border-color: rgb(190 24 93);
`,""],["border-pink-800",`border-color: rgb(157 23 77);
`,""],["border-pink-900",`border-color: rgb(131 24 67);
`,""],["border-pink-950",`border-color: rgb(80 7 36);
`,""],["border-rose-50",`border-color: rgb(255 241 242);
`,""],["border-rose-100",`border-color: rgb(255 228 230);
`,""],["border-rose-200",`border-color: rgb(254 205 211);
`,""],["border-rose-300",`border-color: rgb(253 164 175);
`,""],["border-rose-400",`border-color: rgb(251 113 133);
`,""],["border-rose-500",`border-color: rgb(244 63 94);
`,""],["border-rose-600",`border-color: rgb(225 29 72);
`,""],["border-rose-700",`border-color: rgb(190 18 60);
`,""],["border-rose-800",`border-color: rgb(159 18 57);
`,""],["border-rose-900",`border-color: rgb(136 19 55);
`,""],["border-rose-950",`border-color: rgb(76 5 25);
`,""],["border-x-inherit",`border-left-color: inherit;
border-right-color: inherit;
`,""],["border-x-current",`border-left-color: currentColor;
border-right-color: currentColor;
`,""],["border-x-transparent",`border-left-color: transparent;
border-right-color: transparent;
`,""],["border-x-black",`border-left-color: rgb(0 0 0);
border-right-color: rgb(0 0 0);
`,""],["border-x-white",`border-left-color: rgb(255 255 255);
border-right-color: rgb(255 255 255);
`,""],["border-x-slate-50",`border-left-color: rgb(248 250 252);
border-right-color: rgb(248 250 252);
`,""],["border-x-slate-100",`border-left-color: rgb(241 245 249);
border-right-color: rgb(241 245 249);
`,""],["border-x-slate-200",`border-left-color: rgb(226 232 240);
border-right-color: rgb(226 232 240);
`,""],["border-x-slate-300",`border-left-color: rgb(203 213 225);
border-right-color: rgb(203 213 225);
`,""],["border-x-slate-400",`border-left-color: rgb(148 163 184);
border-right-color: rgb(148 163 184);
`,""],["border-x-slate-500",`border-left-color: rgb(100 116 139);
border-right-color: rgb(100 116 139);
`,""],["border-x-slate-600",`border-left-color: rgb(71 85 105);
border-right-color: rgb(71 85 105);
`,""],["border-x-slate-700",`border-left-color: rgb(51 65 85);
border-right-color: rgb(51 65 85);
`,""],["border-x-slate-800",`border-left-color: rgb(30 41 59);
border-right-color: rgb(30 41 59);
`,""],["border-x-slate-900",`border-left-color: rgb(15 23 42);
border-right-color: rgb(15 23 42);
`,""],["border-x-slate-950",`border-left-color: rgb(2 6 23);
border-right-color: rgb(2 6 23);
`,""],["border-x-gray-50",`border-left-color: rgb(249 250 251);
border-right-color: rgb(249 250 251);
`,""],["border-x-gray-100",`border-left-color: rgb(243 244 246);
border-right-color: rgb(243 244 246);
`,""],["border-x-gray-200",`border-left-color: rgb(229 231 235);
border-right-color: rgb(229 231 235);
`,""],["border-x-gray-300",`border-left-color: rgb(209 213 219);
border-right-color: rgb(209 213 219);
`,""],["border-x-gray-400",`border-left-color: rgb(156 163 175);
border-right-color: rgb(156 163 175);
`,""],["border-x-gray-500",`border-left-color: rgb(107 114 128);
border-right-color: rgb(107 114 128);
`,""],["border-x-gray-600",`border-left-color: rgb(75 85 99);
border-right-color: rgb(75 85 99);
`,""],["border-x-gray-700",`border-left-color: rgb(55 65 81);
border-right-color: rgb(55 65 81);
`,""],["border-x-gray-800",`border-left-color: rgb(31 41 55);
border-right-color: rgb(31 41 55);
`,""],["border-x-gray-900",`border-left-color: rgb(17 24 39);
border-right-color: rgb(17 24 39);
`,""],["border-x-gray-950",`border-left-color: rgb(3 7 18);
border-right-color: rgb(3 7 18);
`,""],["border-x-zinc-50",`border-left-color: rgb(250 250 250);
border-right-color: rgb(250 250 250);
`,""],["border-x-zinc-100",`border-left-color: rgb(244 244 245);
border-right-color: rgb(244 244 245);
`,""],["border-x-zinc-200",`border-left-color: rgb(228 228 231);
border-right-color: rgb(228 228 231);
`,""],["border-x-zinc-300",`border-left-color: rgb(212 212 216);
border-right-color: rgb(212 212 216);
`,""],["border-x-zinc-400",`border-left-color: rgb(161 161 170);
border-right-color: rgb(161 161 170);
`,""],["border-x-zinc-500",`border-left-color: rgb(113 113 122);
border-right-color: rgb(113 113 122);
`,""],["border-x-zinc-600",`border-left-color: rgb(82 82 91);
border-right-color: rgb(82 82 91);
`,""],["border-x-zinc-700",`border-left-color: rgb(63 63 70);
border-right-color: rgb(63 63 70);
`,""],["border-x-zinc-800",`border-left-color: rgb(39 39 42);
border-right-color: rgb(39 39 42);
`,""],["border-x-zinc-900",`border-left-color: rgb(24 24 27);
border-right-color: rgb(24 24 27);
`,""],["border-x-zinc-950",`border-left-color: rgb(9 9 11);
border-right-color: rgb(9 9 11);
`,""],["border-x-neutral-50",`border-left-color: rgb(250 250 250);
border-right-color: rgb(250 250 250);
`,""],["border-x-neutral-100",`border-left-color: rgb(245 245 245);
border-right-color: rgb(245 245 245);
`,""],["border-x-neutral-200",`border-left-color: rgb(229 229 229);
border-right-color: rgb(229 229 229);
`,""],["border-x-neutral-300",`border-left-color: rgb(212 212 212);
border-right-color: rgb(212 212 212);
`,""],["border-x-neutral-400",`border-left-color: rgb(163 163 163);
border-right-color: rgb(163 163 163);
`,""],["border-x-neutral-500",`border-left-color: rgb(115 115 115);
border-right-color: rgb(115 115 115);
`,""],["border-x-neutral-600",`border-left-color: rgb(82 82 82);
border-right-color: rgb(82 82 82);
`,""],["border-x-neutral-700",`border-left-color: rgb(64 64 64);
border-right-color: rgb(64 64 64);
`,""],["border-x-neutral-800",`border-left-color: rgb(38 38 38);
border-right-color: rgb(38 38 38);
`,""],["border-x-neutral-900",`border-left-color: rgb(23 23 23);
border-right-color: rgb(23 23 23);
`,""],["border-x-neutral-950",`border-left-color: rgb(10 10 10);
border-right-color: rgb(10 10 10);
`,""],["border-x-stone-50",`border-left-color: rgb(250 250 249);
border-right-color: rgb(250 250 249);
`,""],["border-x-stone-100",`border-left-color: rgb(245 245 244);
border-right-color: rgb(245 245 244);
`,""],["border-x-stone-200",`border-left-color: rgb(231 229 228);
border-right-color: rgb(231 229 228);
`,""],["border-x-stone-300",`border-left-color: rgb(214 211 209);
border-right-color: rgb(214 211 209);
`,""],["border-x-stone-400",`border-left-color: rgb(168 162 158);
border-right-color: rgb(168 162 158);
`,""],["border-x-stone-500",`border-left-color: rgb(120 113 108);
border-right-color: rgb(120 113 108);
`,""],["border-x-stone-600",`border-left-color: rgb(87 83 78);
border-right-color: rgb(87 83 78);
`,""],["border-x-stone-700",`border-left-color: rgb(68 64 60);
border-right-color: rgb(68 64 60);
`,""],["border-x-stone-800",`border-left-color: rgb(41 37 36);
border-right-color: rgb(41 37 36);
`,""],["border-x-stone-900",`border-left-color: rgb(28 25 23);
border-right-color: rgb(28 25 23);
`,""],["border-x-stone-950",`border-left-color: rgb(12 10 9);
border-right-color: rgb(12 10 9);
`,""],["border-x-red-50",`border-left-color: rgb(254 242 242);
border-right-color: rgb(254 242 242);
`,""],["border-x-red-100",`border-left-color: rgb(254 226 226);
border-right-color: rgb(254 226 226);
`,""],["border-x-red-200",`border-left-color: rgb(254 202 202);
border-right-color: rgb(254 202 202);
`,""],["border-x-red-300",`border-left-color: rgb(252 165 165);
border-right-color: rgb(252 165 165);
`,""],["border-x-red-400",`border-left-color: rgb(248 113 113);
border-right-color: rgb(248 113 113);
`,""],["border-x-red-500",`border-left-color: rgb(239 68 68);
border-right-color: rgb(239 68 68);
`,""],["border-x-red-600",`border-left-color: rgb(220 38 38);
border-right-color: rgb(220 38 38);
`,""],["border-x-red-700",`border-left-color: rgb(185 28 28);
border-right-color: rgb(185 28 28);
`,""],["border-x-red-800",`border-left-color: rgb(153 27 27);
border-right-color: rgb(153 27 27);
`,""],["border-x-red-900",`border-left-color: rgb(127 29 29);
border-right-color: rgb(127 29 29);
`,""],["border-x-red-950",`border-left-color: rgb(69 10 10);
border-right-color: rgb(69 10 10);
`,""],["border-x-orange-50",`border-left-color: rgb(255 247 237);
border-right-color: rgb(255 247 237);
`,""],["border-x-orange-100",`border-left-color: rgb(255 237 213);
border-right-color: rgb(255 237 213);
`,""],["border-x-orange-200",`border-left-color: rgb(254 215 170);
border-right-color: rgb(254 215 170);
`,""],["border-x-orange-300",`border-left-color: rgb(253 186 116);
border-right-color: rgb(253 186 116);
`,""],["border-x-orange-400",`border-left-color: rgb(251 146 60);
border-right-color: rgb(251 146 60);
`,""],["border-x-orange-500",`border-left-color: rgb(249 115 22);
border-right-color: rgb(249 115 22);
`,""],["border-x-orange-600",`border-left-color: rgb(234 88 12);
border-right-color: rgb(234 88 12);
`,""],["border-x-orange-700",`border-left-color: rgb(194 65 12);
border-right-color: rgb(194 65 12);
`,""],["border-x-orange-800",`border-left-color: rgb(154 52 18);
border-right-color: rgb(154 52 18);
`,""],["border-x-orange-900",`border-left-color: rgb(124 45 18);
border-right-color: rgb(124 45 18);
`,""],["border-x-orange-950",`border-left-color: rgb(67 20 7);
border-right-color: rgb(67 20 7);
`,""],["border-x-amber-50",`border-left-color: rgb(255 251 235);
border-right-color: rgb(255 251 235);
`,""],["border-x-amber-100",`border-left-color: rgb(254 243 199);
border-right-color: rgb(254 243 199);
`,""],["border-x-amber-200",`border-left-color: rgb(253 230 138);
border-right-color: rgb(253 230 138);
`,""],["border-x-amber-300",`border-left-color: rgb(252 211 77);
border-right-color: rgb(252 211 77);
`,""],["border-x-amber-400",`border-left-color: rgb(251 191 36);
border-right-color: rgb(251 191 36);
`,""],["border-x-amber-500",`border-left-color: rgb(245 158 11);
border-right-color: rgb(245 158 11);
`,""],["border-x-amber-600",`border-left-color: rgb(217 119 6);
border-right-color: rgb(217 119 6);
`,""],["border-x-amber-700",`border-left-color: rgb(180 83 9);
border-right-color: rgb(180 83 9);
`,""],["border-x-amber-800",`border-left-color: rgb(146 64 14);
border-right-color: rgb(146 64 14);
`,""],["border-x-amber-900",`border-left-color: rgb(120 53 15);
border-right-color: rgb(120 53 15);
`,""],["border-x-amber-950",`border-left-color: rgb(69 26 3);
border-right-color: rgb(69 26 3);
`,""],["border-x-yellow-50",`border-left-color: rgb(254 252 232);
border-right-color: rgb(254 252 232);
`,""],["border-x-yellow-100",`border-left-color: rgb(254 249 195);
border-right-color: rgb(254 249 195);
`,""],["border-x-yellow-200",`border-left-color: rgb(254 240 138);
border-right-color: rgb(254 240 138);
`,""],["border-x-yellow-300",`border-left-color: rgb(253 224 71);
border-right-color: rgb(253 224 71);
`,""],["border-x-yellow-400",`border-left-color: rgb(250 204 21);
border-right-color: rgb(250 204 21);
`,""],["border-x-yellow-500",`border-left-color: rgb(234 179 8);
border-right-color: rgb(234 179 8);
`,""],["border-x-yellow-600",`border-left-color: rgb(202 138 4);
border-right-color: rgb(202 138 4);
`,""],["border-x-yellow-700",`border-left-color: rgb(161 98 7);
border-right-color: rgb(161 98 7);
`,""],["border-x-yellow-800",`border-left-color: rgb(133 77 14);
border-right-color: rgb(133 77 14);
`,""],["border-x-yellow-900",`border-left-color: rgb(113 63 18);
border-right-color: rgb(113 63 18);
`,""],["border-x-yellow-950",`border-left-color: rgb(66 32 6);
border-right-color: rgb(66 32 6);
`,""],["border-x-lime-50",`border-left-color: rgb(247 254 231);
border-right-color: rgb(247 254 231);
`,""],["border-x-lime-100",`border-left-color: rgb(236 252 203);
border-right-color: rgb(236 252 203);
`,""],["border-x-lime-200",`border-left-color: rgb(217 249 157);
border-right-color: rgb(217 249 157);
`,""],["border-x-lime-300",`border-left-color: rgb(190 242 100);
border-right-color: rgb(190 242 100);
`,""],["border-x-lime-400",`border-left-color: rgb(163 230 53);
border-right-color: rgb(163 230 53);
`,""],["border-x-lime-500",`border-left-color: rgb(132 204 22);
border-right-color: rgb(132 204 22);
`,""],["border-x-lime-600",`border-left-color: rgb(101 163 13);
border-right-color: rgb(101 163 13);
`,""],["border-x-lime-700",`border-left-color: rgb(77 124 15);
border-right-color: rgb(77 124 15);
`,""],["border-x-lime-800",`border-left-color: rgb(63 98 18);
border-right-color: rgb(63 98 18);
`,""],["border-x-lime-900",`border-left-color: rgb(54 83 20);
border-right-color: rgb(54 83 20);
`,""],["border-x-lime-950",`border-left-color: rgb(26 46 5);
border-right-color: rgb(26 46 5);
`,""],["border-x-green-50",`border-left-color: rgb(240 253 244);
border-right-color: rgb(240 253 244);
`,""],["border-x-green-100",`border-left-color: rgb(220 252 231);
border-right-color: rgb(220 252 231);
`,""],["border-x-green-200",`border-left-color: rgb(187 247 208);
border-right-color: rgb(187 247 208);
`,""],["border-x-green-300",`border-left-color: rgb(134 239 172);
border-right-color: rgb(134 239 172);
`,""],["border-x-green-400",`border-left-color: rgb(74 222 128);
border-right-color: rgb(74 222 128);
`,""],["border-x-green-500",`border-left-color: rgb(34 197 94);
border-right-color: rgb(34 197 94);
`,""],["border-x-green-600",`border-left-color: rgb(22 163 74);
border-right-color: rgb(22 163 74);
`,""],["border-x-green-700",`border-left-color: rgb(21 128 61);
border-right-color: rgb(21 128 61);
`,""],["border-x-green-800",`border-left-color: rgb(22 101 52);
border-right-color: rgb(22 101 52);
`,""],["border-x-green-900",`border-left-color: rgb(20 83 45);
border-right-color: rgb(20 83 45);
`,""],["border-x-green-950",`border-left-color: rgb(5 46 22);
border-right-color: rgb(5 46 22);
`,""],["border-x-emerald-50",`border-left-color: rgb(236 253 245);
border-right-color: rgb(236 253 245);
`,""],["border-x-emerald-100",`border-left-color: rgb(209 250 229);
border-right-color: rgb(209 250 229);
`,""],["border-x-emerald-200",`border-left-color: rgb(167 243 208);
border-right-color: rgb(167 243 208);
`,""],["border-x-emerald-300",`border-left-color: rgb(110 231 183);
border-right-color: rgb(110 231 183);
`,""],["border-x-emerald-400",`border-left-color: rgb(52 211 153);
border-right-color: rgb(52 211 153);
`,""],["border-x-emerald-500",`border-left-color: rgb(16 185 129);
border-right-color: rgb(16 185 129);
`,""],["border-x-emerald-600",`border-left-color: rgb(5 150 105);
border-right-color: rgb(5 150 105);
`,""],["border-x-emerald-700",`border-left-color: rgb(4 120 87);
border-right-color: rgb(4 120 87);
`,""],["border-x-emerald-800",`border-left-color: rgb(6 95 70);
border-right-color: rgb(6 95 70);
`,""],["border-x-emerald-900",`border-left-color: rgb(6 78 59);
border-right-color: rgb(6 78 59);
`,""],["border-x-emerald-950",`border-left-color: rgb(2 44 34);
border-right-color: rgb(2 44 34);
`,""],["border-x-teal-50",`border-left-color: rgb(240 253 250);
border-right-color: rgb(240 253 250);
`,""],["border-x-teal-100",`border-left-color: rgb(204 251 241);
border-right-color: rgb(204 251 241);
`,""],["border-x-teal-200",`border-left-color: rgb(153 246 228);
border-right-color: rgb(153 246 228);
`,""],["border-x-teal-300",`border-left-color: rgb(94 234 212);
border-right-color: rgb(94 234 212);
`,""],["border-x-teal-400",`border-left-color: rgb(45 212 191);
border-right-color: rgb(45 212 191);
`,""],["border-x-teal-500",`border-left-color: rgb(20 184 166);
border-right-color: rgb(20 184 166);
`,""],["border-x-teal-600",`border-left-color: rgb(13 148 136);
border-right-color: rgb(13 148 136);
`,""],["border-x-teal-700",`border-left-color: rgb(15 118 110);
border-right-color: rgb(15 118 110);
`,""],["border-x-teal-800",`border-left-color: rgb(17 94 89);
border-right-color: rgb(17 94 89);
`,""],["border-x-teal-900",`border-left-color: rgb(19 78 74);
border-right-color: rgb(19 78 74);
`,""],["border-x-teal-950",`border-left-color: rgb(4 47 46);
border-right-color: rgb(4 47 46);
`,""],["border-x-cyan-50",`border-left-color: rgb(236 254 255);
border-right-color: rgb(236 254 255);
`,""],["border-x-cyan-100",`border-left-color: rgb(207 250 254);
border-right-color: rgb(207 250 254);
`,""],["border-x-cyan-200",`border-left-color: rgb(165 243 252);
border-right-color: rgb(165 243 252);
`,""],["border-x-cyan-300",`border-left-color: rgb(103 232 249);
border-right-color: rgb(103 232 249);
`,""],["border-x-cyan-400",`border-left-color: rgb(34 211 238);
border-right-color: rgb(34 211 238);
`,""],["border-x-cyan-500",`border-left-color: rgb(6 182 212);
border-right-color: rgb(6 182 212);
`,""],["border-x-cyan-600",`border-left-color: rgb(8 145 178);
border-right-color: rgb(8 145 178);
`,""],["border-x-cyan-700",`border-left-color: rgb(14 116 144);
border-right-color: rgb(14 116 144);
`,""],["border-x-cyan-800",`border-left-color: rgb(21 94 117);
border-right-color: rgb(21 94 117);
`,""],["border-x-cyan-900",`border-left-color: rgb(22 78 99);
border-right-color: rgb(22 78 99);
`,""],["border-x-cyan-950",`border-left-color: rgb(8 51 68);
border-right-color: rgb(8 51 68);
`,""],["border-x-sky-50",`border-left-color: rgb(240 249 255);
border-right-color: rgb(240 249 255);
`,""],["border-x-sky-100",`border-left-color: rgb(224 242 254);
border-right-color: rgb(224 242 254);
`,""],["border-x-sky-200",`border-left-color: rgb(186 230 253);
border-right-color: rgb(186 230 253);
`,""],["border-x-sky-300",`border-left-color: rgb(125 211 252);
border-right-color: rgb(125 211 252);
`,""],["border-x-sky-400",`border-left-color: rgb(56 189 248);
border-right-color: rgb(56 189 248);
`,""],["border-x-sky-500",`border-left-color: rgb(14 165 233);
border-right-color: rgb(14 165 233);
`,""],["border-x-sky-600",`border-left-color: rgb(2 132 199);
border-right-color: rgb(2 132 199);
`,""],["border-x-sky-700",`border-left-color: rgb(3 105 161);
border-right-color: rgb(3 105 161);
`,""],["border-x-sky-800",`border-left-color: rgb(7 89 133);
border-right-color: rgb(7 89 133);
`,""],["border-x-sky-900",`border-left-color: rgb(12 74 110);
border-right-color: rgb(12 74 110);
`,""],["border-x-sky-950",`border-left-color: rgb(8 47 73);
border-right-color: rgb(8 47 73);
`,""],["border-x-blue-50",`border-left-color: rgb(239 246 255);
border-right-color: rgb(239 246 255);
`,""],["border-x-blue-100",`border-left-color: rgb(219 234 254);
border-right-color: rgb(219 234 254);
`,""],["border-x-blue-200",`border-left-color: rgb(191 219 254);
border-right-color: rgb(191 219 254);
`,""],["border-x-blue-300",`border-left-color: rgb(147 197 253);
border-right-color: rgb(147 197 253);
`,""],["border-x-blue-400",`border-left-color: rgb(96 165 250);
border-right-color: rgb(96 165 250);
`,""],["border-x-blue-500",`border-left-color: rgb(59 130 246);
border-right-color: rgb(59 130 246);
`,""],["border-x-blue-600",`border-left-color: rgb(37 99 235);
border-right-color: rgb(37 99 235);
`,""],["border-x-blue-700",`border-left-color: rgb(29 78 216);
border-right-color: rgb(29 78 216);
`,""],["border-x-blue-800",`border-left-color: rgb(30 64 175);
border-right-color: rgb(30 64 175);
`,""],["border-x-blue-900",`border-left-color: rgb(30 58 138);
border-right-color: rgb(30 58 138);
`,""],["border-x-blue-950",`border-left-color: rgb(23 37 84);
border-right-color: rgb(23 37 84);
`,""],["border-x-indigo-50",`border-left-color: rgb(238 242 255);
border-right-color: rgb(238 242 255);
`,""],["border-x-indigo-100",`border-left-color: rgb(224 231 255);
border-right-color: rgb(224 231 255);
`,""],["border-x-indigo-200",`border-left-color: rgb(199 210 254);
border-right-color: rgb(199 210 254);
`,""],["border-x-indigo-300",`border-left-color: rgb(165 180 252);
border-right-color: rgb(165 180 252);
`,""],["border-x-indigo-400",`border-left-color: rgb(129 140 248);
border-right-color: rgb(129 140 248);
`,""],["border-x-indigo-500",`border-left-color: rgb(99 102 241);
border-right-color: rgb(99 102 241);
`,""],["border-x-indigo-600",`border-left-color: rgb(79 70 229);
border-right-color: rgb(79 70 229);
`,""],["border-x-indigo-700",`border-left-color: rgb(67 56 202);
border-right-color: rgb(67 56 202);
`,""],["border-x-indigo-800",`border-left-color: rgb(55 48 163);
border-right-color: rgb(55 48 163);
`,""],["border-x-indigo-900",`border-left-color: rgb(49 46 129);
border-right-color: rgb(49 46 129);
`,""],["border-x-indigo-950",`border-left-color: rgb(30 27 75);
border-right-color: rgb(30 27 75);
`,""],["border-x-violet-50",`border-left-color: rgb(245 243 255);
border-right-color: rgb(245 243 255);
`,""],["border-x-violet-100",`border-left-color: rgb(237 233 254);
border-right-color: rgb(237 233 254);
`,""],["border-x-violet-200",`border-left-color: rgb(221 214 254);
border-right-color: rgb(221 214 254);
`,""],["border-x-violet-300",`border-left-color: rgb(196 181 253);
border-right-color: rgb(196 181 253);
`,""],["border-x-violet-400",`border-left-color: rgb(167 139 250);
border-right-color: rgb(167 139 250);
`,""],["border-x-violet-500",`border-left-color: rgb(139 92 246);
border-right-color: rgb(139 92 246);
`,""],["border-x-violet-600",`border-left-color: rgb(124 58 237);
border-right-color: rgb(124 58 237);
`,""],["border-x-violet-700",`border-left-color: rgb(109 40 217);
border-right-color: rgb(109 40 217);
`,""],["border-x-violet-800",`border-left-color: rgb(91 33 182);
border-right-color: rgb(91 33 182);
`,""],["border-x-violet-900",`border-left-color: rgb(76 29 149);
border-right-color: rgb(76 29 149);
`,""],["border-x-violet-950",`border-left-color: rgb(46 16 101);
border-right-color: rgb(46 16 101);
`,""],["border-x-purple-50",`border-left-color: rgb(250 245 255);
border-right-color: rgb(250 245 255);
`,""],["border-x-purple-100",`border-left-color: rgb(243 232 255);
border-right-color: rgb(243 232 255);
`,""],["border-x-purple-200",`border-left-color: rgb(233 213 255);
border-right-color: rgb(233 213 255);
`,""],["border-x-purple-300",`border-left-color: rgb(216 180 254);
border-right-color: rgb(216 180 254);
`,""],["border-x-purple-400",`border-left-color: rgb(192 132 252);
border-right-color: rgb(192 132 252);
`,""],["border-x-purple-500",`border-left-color: rgb(168 85 247);
border-right-color: rgb(168 85 247);
`,""],["border-x-purple-600",`border-left-color: rgb(147 51 234);
border-right-color: rgb(147 51 234);
`,""],["border-x-purple-700",`border-left-color: rgb(126 34 206);
border-right-color: rgb(126 34 206);
`,""],["border-x-purple-800",`border-left-color: rgb(107 33 168);
border-right-color: rgb(107 33 168);
`,""],["border-x-purple-900",`border-left-color: rgb(88 28 135);
border-right-color: rgb(88 28 135);
`,""],["border-x-purple-950",`border-left-color: rgb(59 7 100);
border-right-color: rgb(59 7 100);
`,""],["border-x-fuchsia-50",`border-left-color: rgb(253 244 255);
border-right-color: rgb(253 244 255);
`,""],["border-x-fuchsia-100",`border-left-color: rgb(250 232 255);
border-right-color: rgb(250 232 255);
`,""],["border-x-fuchsia-200",`border-left-color: rgb(245 208 254);
border-right-color: rgb(245 208 254);
`,""],["border-x-fuchsia-300",`border-left-color: rgb(240 171 252);
border-right-color: rgb(240 171 252);
`,""],["border-x-fuchsia-400",`border-left-color: rgb(232 121 249);
border-right-color: rgb(232 121 249);
`,""],["border-x-fuchsia-500",`border-left-color: rgb(217 70 239);
border-right-color: rgb(217 70 239);
`,""],["border-x-fuchsia-600",`border-left-color: rgb(192 38 211);
border-right-color: rgb(192 38 211);
`,""],["border-x-fuchsia-700",`border-left-color: rgb(162 28 175);
border-right-color: rgb(162 28 175);
`,""],["border-x-fuchsia-800",`border-left-color: rgb(134 25 143);
border-right-color: rgb(134 25 143);
`,""],["border-x-fuchsia-900",`border-left-color: rgb(112 26 117);
border-right-color: rgb(112 26 117);
`,""],["border-x-fuchsia-950",`border-left-color: rgb(74 4 78);
border-right-color: rgb(74 4 78);
`,""],["border-x-pink-50",`border-left-color: rgb(253 242 248);
border-right-color: rgb(253 242 248);
`,""],["border-x-pink-100",`border-left-color: rgb(252 231 243);
border-right-color: rgb(252 231 243);
`,""],["border-x-pink-200",`border-left-color: rgb(251 207 232);
border-right-color: rgb(251 207 232);
`,""],["border-x-pink-300",`border-left-color: rgb(249 168 212);
border-right-color: rgb(249 168 212);
`,""],["border-x-pink-400",`border-left-color: rgb(244 114 182);
border-right-color: rgb(244 114 182);
`,""],["border-x-pink-500",`border-left-color: rgb(236 72 153);
border-right-color: rgb(236 72 153);
`,""],["border-x-pink-600",`border-left-color: rgb(219 39 119);
border-right-color: rgb(219 39 119);
`,""],["border-x-pink-700",`border-left-color: rgb(190 24 93);
border-right-color: rgb(190 24 93);
`,""],["border-x-pink-800",`border-left-color: rgb(157 23 77);
border-right-color: rgb(157 23 77);
`,""],["border-x-pink-900",`border-left-color: rgb(131 24 67);
border-right-color: rgb(131 24 67);
`,""],["border-x-pink-950",`border-left-color: rgb(80 7 36);
border-right-color: rgb(80 7 36);
`,""],["border-x-rose-50",`border-left-color: rgb(255 241 242);
border-right-color: rgb(255 241 242);
`,""],["border-x-rose-100",`border-left-color: rgb(255 228 230);
border-right-color: rgb(255 228 230);
`,""],["border-x-rose-200",`border-left-color: rgb(254 205 211);
border-right-color: rgb(254 205 211);
`,""],["border-x-rose-300",`border-left-color: rgb(253 164 175);
border-right-color: rgb(253 164 175);
`,""],["border-x-rose-400",`border-left-color: rgb(251 113 133);
border-right-color: rgb(251 113 133);
`,""],["border-x-rose-500",`border-left-color: rgb(244 63 94);
border-right-color: rgb(244 63 94);
`,""],["border-x-rose-600",`border-left-color: rgb(225 29 72);
border-right-color: rgb(225 29 72);
`,""],["border-x-rose-700",`border-left-color: rgb(190 18 60);
border-right-color: rgb(190 18 60);
`,""],["border-x-rose-800",`border-left-color: rgb(159 18 57);
border-right-color: rgb(159 18 57);
`,""],["border-x-rose-900",`border-left-color: rgb(136 19 55);
border-right-color: rgb(136 19 55);
`,""],["border-x-rose-950",`border-left-color: rgb(76 5 25);
border-right-color: rgb(76 5 25);
`,""],["border-y-inherit",`border-top-color: inherit;
border-bottom-color: inherit;
`,""],["border-y-current",`border-top-color: currentColor;
border-bottom-color: currentColor;
`,""],["border-y-transparent",`border-top-color: transparent;
border-bottom-color: transparent;
`,""],["border-y-black",`border-top-color: rgb(0 0 0);
border-bottom-color: rgb(0 0 0);
`,""],["border-y-white",`border-top-color: rgb(255 255 255);
border-bottom-color: rgb(255 255 255);
`,""],["border-y-slate-50",`border-top-color: rgb(248 250 252);
border-bottom-color: rgb(248 250 252);
`,""],["border-y-slate-100",`border-top-color: rgb(241 245 249);
border-bottom-color: rgb(241 245 249);
`,""],["border-y-slate-200",`border-top-color: rgb(226 232 240);
border-bottom-color: rgb(226 232 240);
`,""],["border-y-slate-300",`border-top-color: rgb(203 213 225);
border-bottom-color: rgb(203 213 225);
`,""],["border-y-slate-400",`border-top-color: rgb(148 163 184);
border-bottom-color: rgb(148 163 184);
`,""],["border-y-slate-500",`border-top-color: rgb(100 116 139);
border-bottom-color: rgb(100 116 139);
`,""],["border-y-slate-600",`border-top-color: rgb(71 85 105);
border-bottom-color: rgb(71 85 105);
`,""],["border-y-slate-700",`border-top-color: rgb(51 65 85);
border-bottom-color: rgb(51 65 85);
`,""],["border-y-slate-800",`border-top-color: rgb(30 41 59);
border-bottom-color: rgb(30 41 59);
`,""],["border-y-slate-900",`border-top-color: rgb(15 23 42);
border-bottom-color: rgb(15 23 42);
`,""],["border-y-slate-950",`border-top-color: rgb(2 6 23);
border-bottom-color: rgb(2 6 23);
`,""],["border-y-gray-50",`border-top-color: rgb(249 250 251);
border-bottom-color: rgb(249 250 251);
`,""],["border-y-gray-100",`border-top-color: rgb(243 244 246);
border-bottom-color: rgb(243 244 246);
`,""],["border-y-gray-200",`border-top-color: rgb(229 231 235);
border-bottom-color: rgb(229 231 235);
`,""],["border-y-gray-300",`border-top-color: rgb(209 213 219);
border-bottom-color: rgb(209 213 219);
`,""],["border-y-gray-400",`border-top-color: rgb(156 163 175);
border-bottom-color: rgb(156 163 175);
`,""],["border-y-gray-500",`border-top-color: rgb(107 114 128);
border-bottom-color: rgb(107 114 128);
`,""],["border-y-gray-600",`border-top-color: rgb(75 85 99);
border-bottom-color: rgb(75 85 99);
`,""],["border-y-gray-700",`border-top-color: rgb(55 65 81);
border-bottom-color: rgb(55 65 81);
`,""],["border-y-gray-800",`border-top-color: rgb(31 41 55);
border-bottom-color: rgb(31 41 55);
`,""],["border-y-gray-900",`border-top-color: rgb(17 24 39);
border-bottom-color: rgb(17 24 39);
`,""],["border-y-gray-950",`border-top-color: rgb(3 7 18);
border-bottom-color: rgb(3 7 18);
`,""],["border-y-zinc-50",`border-top-color: rgb(250 250 250);
border-bottom-color: rgb(250 250 250);
`,""],["border-y-zinc-100",`border-top-color: rgb(244 244 245);
border-bottom-color: rgb(244 244 245);
`,""],["border-y-zinc-200",`border-top-color: rgb(228 228 231);
border-bottom-color: rgb(228 228 231);
`,""],["border-y-zinc-300",`border-top-color: rgb(212 212 216);
border-bottom-color: rgb(212 212 216);
`,""],["border-y-zinc-400",`border-top-color: rgb(161 161 170);
border-bottom-color: rgb(161 161 170);
`,""],["border-y-zinc-500",`border-top-color: rgb(113 113 122);
border-bottom-color: rgb(113 113 122);
`,""],["border-y-zinc-600",`border-top-color: rgb(82 82 91);
border-bottom-color: rgb(82 82 91);
`,""],["border-y-zinc-700",`border-top-color: rgb(63 63 70);
border-bottom-color: rgb(63 63 70);
`,""],["border-y-zinc-800",`border-top-color: rgb(39 39 42);
border-bottom-color: rgb(39 39 42);
`,""],["border-y-zinc-900",`border-top-color: rgb(24 24 27);
border-bottom-color: rgb(24 24 27);
`,""],["border-y-zinc-950",`border-top-color: rgb(9 9 11);
border-bottom-color: rgb(9 9 11);
`,""],["border-y-neutral-50",`border-top-color: rgb(250 250 250);
border-bottom-color: rgb(250 250 250);
`,""],["border-y-neutral-100",`border-top-color: rgb(245 245 245);
border-bottom-color: rgb(245 245 245);
`,""],["border-y-neutral-200",`border-top-color: rgb(229 229 229);
border-bottom-color: rgb(229 229 229);
`,""],["border-y-neutral-300",`border-top-color: rgb(212 212 212);
border-bottom-color: rgb(212 212 212);
`,""],["border-y-neutral-400",`border-top-color: rgb(163 163 163);
border-bottom-color: rgb(163 163 163);
`,""],["border-y-neutral-500",`border-top-color: rgb(115 115 115);
border-bottom-color: rgb(115 115 115);
`,""],["border-y-neutral-600",`border-top-color: rgb(82 82 82);
border-bottom-color: rgb(82 82 82);
`,""],["border-y-neutral-700",`border-top-color: rgb(64 64 64);
border-bottom-color: rgb(64 64 64);
`,""],["border-y-neutral-800",`border-top-color: rgb(38 38 38);
border-bottom-color: rgb(38 38 38);
`,""],["border-y-neutral-900",`border-top-color: rgb(23 23 23);
border-bottom-color: rgb(23 23 23);
`,""],["border-y-neutral-950",`border-top-color: rgb(10 10 10);
border-bottom-color: rgb(10 10 10);
`,""],["border-y-stone-50",`border-top-color: rgb(250 250 249);
border-bottom-color: rgb(250 250 249);
`,""],["border-y-stone-100",`border-top-color: rgb(245 245 244);
border-bottom-color: rgb(245 245 244);
`,""],["border-y-stone-200",`border-top-color: rgb(231 229 228);
border-bottom-color: rgb(231 229 228);
`,""],["border-y-stone-300",`border-top-color: rgb(214 211 209);
border-bottom-color: rgb(214 211 209);
`,""],["border-y-stone-400",`border-top-color: rgb(168 162 158);
border-bottom-color: rgb(168 162 158);
`,""],["border-y-stone-500",`border-top-color: rgb(120 113 108);
border-bottom-color: rgb(120 113 108);
`,""],["border-y-stone-600",`border-top-color: rgb(87 83 78);
border-bottom-color: rgb(87 83 78);
`,""],["border-y-stone-700",`border-top-color: rgb(68 64 60);
border-bottom-color: rgb(68 64 60);
`,""],["border-y-stone-800",`border-top-color: rgb(41 37 36);
border-bottom-color: rgb(41 37 36);
`,""],["border-y-stone-900",`border-top-color: rgb(28 25 23);
border-bottom-color: rgb(28 25 23);
`,""],["border-y-stone-950",`border-top-color: rgb(12 10 9);
border-bottom-color: rgb(12 10 9);
`,""],["border-y-red-50",`border-top-color: rgb(254 242 242);
border-bottom-color: rgb(254 242 242);
`,""],["border-y-red-100",`border-top-color: rgb(254 226 226);
border-bottom-color: rgb(254 226 226);
`,""],["border-y-red-200",`border-top-color: rgb(254 202 202);
border-bottom-color: rgb(254 202 202);
`,""],["border-y-red-300",`border-top-color: rgb(252 165 165);
border-bottom-color: rgb(252 165 165);
`,""],["border-y-red-400",`border-top-color: rgb(248 113 113);
border-bottom-color: rgb(248 113 113);
`,""],["border-y-red-500",`border-top-color: rgb(239 68 68);
border-bottom-color: rgb(239 68 68);
`,""],["border-y-red-600",`border-top-color: rgb(220 38 38);
border-bottom-color: rgb(220 38 38);
`,""],["border-y-red-700",`border-top-color: rgb(185 28 28);
border-bottom-color: rgb(185 28 28);
`,""],["border-y-red-800",`border-top-color: rgb(153 27 27);
border-bottom-color: rgb(153 27 27);
`,""],["border-y-red-900",`border-top-color: rgb(127 29 29);
border-bottom-color: rgb(127 29 29);
`,""],["border-y-red-950",`border-top-color: rgb(69 10 10);
border-bottom-color: rgb(69 10 10);
`,""],["border-y-orange-50",`border-top-color: rgb(255 247 237);
border-bottom-color: rgb(255 247 237);
`,""],["border-y-orange-100",`border-top-color: rgb(255 237 213);
border-bottom-color: rgb(255 237 213);
`,""],["border-y-orange-200",`border-top-color: rgb(254 215 170);
border-bottom-color: rgb(254 215 170);
`,""],["border-y-orange-300",`border-top-color: rgb(253 186 116);
border-bottom-color: rgb(253 186 116);
`,""],["border-y-orange-400",`border-top-color: rgb(251 146 60);
border-bottom-color: rgb(251 146 60);
`,""],["border-y-orange-500",`border-top-color: rgb(249 115 22);
border-bottom-color: rgb(249 115 22);
`,""],["border-y-orange-600",`border-top-color: rgb(234 88 12);
border-bottom-color: rgb(234 88 12);
`,""],["border-y-orange-700",`border-top-color: rgb(194 65 12);
border-bottom-color: rgb(194 65 12);
`,""],["border-y-orange-800",`border-top-color: rgb(154 52 18);
border-bottom-color: rgb(154 52 18);
`,""],["border-y-orange-900",`border-top-color: rgb(124 45 18);
border-bottom-color: rgb(124 45 18);
`,""],["border-y-orange-950",`border-top-color: rgb(67 20 7);
border-bottom-color: rgb(67 20 7);
`,""],["border-y-amber-50",`border-top-color: rgb(255 251 235);
border-bottom-color: rgb(255 251 235);
`,""],["border-y-amber-100",`border-top-color: rgb(254 243 199);
border-bottom-color: rgb(254 243 199);
`,""],["border-y-amber-200",`border-top-color: rgb(253 230 138);
border-bottom-color: rgb(253 230 138);
`,""],["border-y-amber-300",`border-top-color: rgb(252 211 77);
border-bottom-color: rgb(252 211 77);
`,""],["border-y-amber-400",`border-top-color: rgb(251 191 36);
border-bottom-color: rgb(251 191 36);
`,""],["border-y-amber-500",`border-top-color: rgb(245 158 11);
border-bottom-color: rgb(245 158 11);
`,""],["border-y-amber-600",`border-top-color: rgb(217 119 6);
border-bottom-color: rgb(217 119 6);
`,""],["border-y-amber-700",`border-top-color: rgb(180 83 9);
border-bottom-color: rgb(180 83 9);
`,""],["border-y-amber-800",`border-top-color: rgb(146 64 14);
border-bottom-color: rgb(146 64 14);
`,""],["border-y-amber-900",`border-top-color: rgb(120 53 15);
border-bottom-color: rgb(120 53 15);
`,""],["border-y-amber-950",`border-top-color: rgb(69 26 3);
border-bottom-color: rgb(69 26 3);
`,""],["border-y-yellow-50",`border-top-color: rgb(254 252 232);
border-bottom-color: rgb(254 252 232);
`,""],["border-y-yellow-100",`border-top-color: rgb(254 249 195);
border-bottom-color: rgb(254 249 195);
`,""],["border-y-yellow-200",`border-top-color: rgb(254 240 138);
border-bottom-color: rgb(254 240 138);
`,""],["border-y-yellow-300",`border-top-color: rgb(253 224 71);
border-bottom-color: rgb(253 224 71);
`,""],["border-y-yellow-400",`border-top-color: rgb(250 204 21);
border-bottom-color: rgb(250 204 21);
`,""],["border-y-yellow-500",`border-top-color: rgb(234 179 8);
border-bottom-color: rgb(234 179 8);
`,""],["border-y-yellow-600",`border-top-color: rgb(202 138 4);
border-bottom-color: rgb(202 138 4);
`,""],["border-y-yellow-700",`border-top-color: rgb(161 98 7);
border-bottom-color: rgb(161 98 7);
`,""],["border-y-yellow-800",`border-top-color: rgb(133 77 14);
border-bottom-color: rgb(133 77 14);
`,""],["border-y-yellow-900",`border-top-color: rgb(113 63 18);
border-bottom-color: rgb(113 63 18);
`,""],["border-y-yellow-950",`border-top-color: rgb(66 32 6);
border-bottom-color: rgb(66 32 6);
`,""],["border-y-lime-50",`border-top-color: rgb(247 254 231);
border-bottom-color: rgb(247 254 231);
`,""],["border-y-lime-100",`border-top-color: rgb(236 252 203);
border-bottom-color: rgb(236 252 203);
`,""],["border-y-lime-200",`border-top-color: rgb(217 249 157);
border-bottom-color: rgb(217 249 157);
`,""],["border-y-lime-300",`border-top-color: rgb(190 242 100);
border-bottom-color: rgb(190 242 100);
`,""],["border-y-lime-400",`border-top-color: rgb(163 230 53);
border-bottom-color: rgb(163 230 53);
`,""],["border-y-lime-500",`border-top-color: rgb(132 204 22);
border-bottom-color: rgb(132 204 22);
`,""],["border-y-lime-600",`border-top-color: rgb(101 163 13);
border-bottom-color: rgb(101 163 13);
`,""],["border-y-lime-700",`border-top-color: rgb(77 124 15);
border-bottom-color: rgb(77 124 15);
`,""],["border-y-lime-800",`border-top-color: rgb(63 98 18);
border-bottom-color: rgb(63 98 18);
`,""],["border-y-lime-900",`border-top-color: rgb(54 83 20);
border-bottom-color: rgb(54 83 20);
`,""],["border-y-lime-950",`border-top-color: rgb(26 46 5);
border-bottom-color: rgb(26 46 5);
`,""],["border-y-green-50",`border-top-color: rgb(240 253 244);
border-bottom-color: rgb(240 253 244);
`,""],["border-y-green-100",`border-top-color: rgb(220 252 231);
border-bottom-color: rgb(220 252 231);
`,""],["border-y-green-200",`border-top-color: rgb(187 247 208);
border-bottom-color: rgb(187 247 208);
`,""],["border-y-green-300",`border-top-color: rgb(134 239 172);
border-bottom-color: rgb(134 239 172);
`,""],["border-y-green-400",`border-top-color: rgb(74 222 128);
border-bottom-color: rgb(74 222 128);
`,""],["border-y-green-500",`border-top-color: rgb(34 197 94);
border-bottom-color: rgb(34 197 94);
`,""],["border-y-green-600",`border-top-color: rgb(22 163 74);
border-bottom-color: rgb(22 163 74);
`,""],["border-y-green-700",`border-top-color: rgb(21 128 61);
border-bottom-color: rgb(21 128 61);
`,""],["border-y-green-800",`border-top-color: rgb(22 101 52);
border-bottom-color: rgb(22 101 52);
`,""],["border-y-green-900",`border-top-color: rgb(20 83 45);
border-bottom-color: rgb(20 83 45);
`,""],["border-y-green-950",`border-top-color: rgb(5 46 22);
border-bottom-color: rgb(5 46 22);
`,""],["border-y-emerald-50",`border-top-color: rgb(236 253 245);
border-bottom-color: rgb(236 253 245);
`,""],["border-y-emerald-100",`border-top-color: rgb(209 250 229);
border-bottom-color: rgb(209 250 229);
`,""],["border-y-emerald-200",`border-top-color: rgb(167 243 208);
border-bottom-color: rgb(167 243 208);
`,""],["border-y-emerald-300",`border-top-color: rgb(110 231 183);
border-bottom-color: rgb(110 231 183);
`,""],["border-y-emerald-400",`border-top-color: rgb(52 211 153);
border-bottom-color: rgb(52 211 153);
`,""],["border-y-emerald-500",`border-top-color: rgb(16 185 129);
border-bottom-color: rgb(16 185 129);
`,""],["border-y-emerald-600",`border-top-color: rgb(5 150 105);
border-bottom-color: rgb(5 150 105);
`,""],["border-y-emerald-700",`border-top-color: rgb(4 120 87);
border-bottom-color: rgb(4 120 87);
`,""],["border-y-emerald-800",`border-top-color: rgb(6 95 70);
border-bottom-color: rgb(6 95 70);
`,""],["border-y-emerald-900",`border-top-color: rgb(6 78 59);
border-bottom-color: rgb(6 78 59);
`,""],["border-y-emerald-950",`border-top-color: rgb(2 44 34);
border-bottom-color: rgb(2 44 34);
`,""],["border-y-teal-50",`border-top-color: rgb(240 253 250);
border-bottom-color: rgb(240 253 250);
`,""],["border-y-teal-100",`border-top-color: rgb(204 251 241);
border-bottom-color: rgb(204 251 241);
`,""],["border-y-teal-200",`border-top-color: rgb(153 246 228);
border-bottom-color: rgb(153 246 228);
`,""],["border-y-teal-300",`border-top-color: rgb(94 234 212);
border-bottom-color: rgb(94 234 212);
`,""],["border-y-teal-400",`border-top-color: rgb(45 212 191);
border-bottom-color: rgb(45 212 191);
`,""],["border-y-teal-500",`border-top-color: rgb(20 184 166);
border-bottom-color: rgb(20 184 166);
`,""],["border-y-teal-600",`border-top-color: rgb(13 148 136);
border-bottom-color: rgb(13 148 136);
`,""],["border-y-teal-700",`border-top-color: rgb(15 118 110);
border-bottom-color: rgb(15 118 110);
`,""],["border-y-teal-800",`border-top-color: rgb(17 94 89);
border-bottom-color: rgb(17 94 89);
`,""],["border-y-teal-900",`border-top-color: rgb(19 78 74);
border-bottom-color: rgb(19 78 74);
`,""],["border-y-teal-950",`border-top-color: rgb(4 47 46);
border-bottom-color: rgb(4 47 46);
`,""],["border-y-cyan-50",`border-top-color: rgb(236 254 255);
border-bottom-color: rgb(236 254 255);
`,""],["border-y-cyan-100",`border-top-color: rgb(207 250 254);
border-bottom-color: rgb(207 250 254);
`,""],["border-y-cyan-200",`border-top-color: rgb(165 243 252);
border-bottom-color: rgb(165 243 252);
`,""],["border-y-cyan-300",`border-top-color: rgb(103 232 249);
border-bottom-color: rgb(103 232 249);
`,""],["border-y-cyan-400",`border-top-color: rgb(34 211 238);
border-bottom-color: rgb(34 211 238);
`,""],["border-y-cyan-500",`border-top-color: rgb(6 182 212);
border-bottom-color: rgb(6 182 212);
`,""],["border-y-cyan-600",`border-top-color: rgb(8 145 178);
border-bottom-color: rgb(8 145 178);
`,""],["border-y-cyan-700",`border-top-color: rgb(14 116 144);
border-bottom-color: rgb(14 116 144);
`,""],["border-y-cyan-800",`border-top-color: rgb(21 94 117);
border-bottom-color: rgb(21 94 117);
`,""],["border-y-cyan-900",`border-top-color: rgb(22 78 99);
border-bottom-color: rgb(22 78 99);
`,""],["border-y-cyan-950",`border-top-color: rgb(8 51 68);
border-bottom-color: rgb(8 51 68);
`,""],["border-y-sky-50",`border-top-color: rgb(240 249 255);
border-bottom-color: rgb(240 249 255);
`,""],["border-y-sky-100",`border-top-color: rgb(224 242 254);
border-bottom-color: rgb(224 242 254);
`,""],["border-y-sky-200",`border-top-color: rgb(186 230 253);
border-bottom-color: rgb(186 230 253);
`,""],["border-y-sky-300",`border-top-color: rgb(125 211 252);
border-bottom-color: rgb(125 211 252);
`,""],["border-y-sky-400",`border-top-color: rgb(56 189 248);
border-bottom-color: rgb(56 189 248);
`,""],["border-y-sky-500",`border-top-color: rgb(14 165 233);
border-bottom-color: rgb(14 165 233);
`,""],["border-y-sky-600",`border-top-color: rgb(2 132 199);
border-bottom-color: rgb(2 132 199);
`,""],["border-y-sky-700",`border-top-color: rgb(3 105 161);
border-bottom-color: rgb(3 105 161);
`,""],["border-y-sky-800",`border-top-color: rgb(7 89 133);
border-bottom-color: rgb(7 89 133);
`,""],["border-y-sky-900",`border-top-color: rgb(12 74 110);
border-bottom-color: rgb(12 74 110);
`,""],["border-y-sky-950",`border-top-color: rgb(8 47 73);
border-bottom-color: rgb(8 47 73);
`,""],["border-y-blue-50",`border-top-color: rgb(239 246 255);
border-bottom-color: rgb(239 246 255);
`,""],["border-y-blue-100",`border-top-color: rgb(219 234 254);
border-bottom-color: rgb(219 234 254);
`,""],["border-y-blue-200",`border-top-color: rgb(191 219 254);
border-bottom-color: rgb(191 219 254);
`,""],["border-y-blue-300",`border-top-color: rgb(147 197 253);
border-bottom-color: rgb(147 197 253);
`,""],["border-y-blue-400",`border-top-color: rgb(96 165 250);
border-bottom-color: rgb(96 165 250);
`,""],["border-y-blue-500",`border-top-color: rgb(59 130 246);
border-bottom-color: rgb(59 130 246);
`,""],["border-y-blue-600",`border-top-color: rgb(37 99 235);
border-bottom-color: rgb(37 99 235);
`,""],["border-y-blue-700",`border-top-color: rgb(29 78 216);
border-bottom-color: rgb(29 78 216);
`,""],["border-y-blue-800",`border-top-color: rgb(30 64 175);
border-bottom-color: rgb(30 64 175);
`,""],["border-y-blue-900",`border-top-color: rgb(30 58 138);
border-bottom-color: rgb(30 58 138);
`,""],["border-y-blue-950",`border-top-color: rgb(23 37 84);
border-bottom-color: rgb(23 37 84);
`,""],["border-y-indigo-50",`border-top-color: rgb(238 242 255);
border-bottom-color: rgb(238 242 255);
`,""],["border-y-indigo-100",`border-top-color: rgb(224 231 255);
border-bottom-color: rgb(224 231 255);
`,""],["border-y-indigo-200",`border-top-color: rgb(199 210 254);
border-bottom-color: rgb(199 210 254);
`,""],["border-y-indigo-300",`border-top-color: rgb(165 180 252);
border-bottom-color: rgb(165 180 252);
`,""],["border-y-indigo-400",`border-top-color: rgb(129 140 248);
border-bottom-color: rgb(129 140 248);
`,""],["border-y-indigo-500",`border-top-color: rgb(99 102 241);
border-bottom-color: rgb(99 102 241);
`,""],["border-y-indigo-600",`border-top-color: rgb(79 70 229);
border-bottom-color: rgb(79 70 229);
`,""],["border-y-indigo-700",`border-top-color: rgb(67 56 202);
border-bottom-color: rgb(67 56 202);
`,""],["border-y-indigo-800",`border-top-color: rgb(55 48 163);
border-bottom-color: rgb(55 48 163);
`,""],["border-y-indigo-900",`border-top-color: rgb(49 46 129);
border-bottom-color: rgb(49 46 129);
`,""],["border-y-indigo-950",`border-top-color: rgb(30 27 75);
border-bottom-color: rgb(30 27 75);
`,""],["border-y-violet-50",`border-top-color: rgb(245 243 255);
border-bottom-color: rgb(245 243 255);
`,""],["border-y-violet-100",`border-top-color: rgb(237 233 254);
border-bottom-color: rgb(237 233 254);
`,""],["border-y-violet-200",`border-top-color: rgb(221 214 254);
border-bottom-color: rgb(221 214 254);
`,""],["border-y-violet-300",`border-top-color: rgb(196 181 253);
border-bottom-color: rgb(196 181 253);
`,""],["border-y-violet-400",`border-top-color: rgb(167 139 250);
border-bottom-color: rgb(167 139 250);
`,""],["border-y-violet-500",`border-top-color: rgb(139 92 246);
border-bottom-color: rgb(139 92 246);
`,""],["border-y-violet-600",`border-top-color: rgb(124 58 237);
border-bottom-color: rgb(124 58 237);
`,""],["border-y-violet-700",`border-top-color: rgb(109 40 217);
border-bottom-color: rgb(109 40 217);
`,""],["border-y-violet-800",`border-top-color: rgb(91 33 182);
border-bottom-color: rgb(91 33 182);
`,""],["border-y-violet-900",`border-top-color: rgb(76 29 149);
border-bottom-color: rgb(76 29 149);
`,""],["border-y-violet-950",`border-top-color: rgb(46 16 101);
border-bottom-color: rgb(46 16 101);
`,""],["border-y-purple-50",`border-top-color: rgb(250 245 255);
border-bottom-color: rgb(250 245 255);
`,""],["border-y-purple-100",`border-top-color: rgb(243 232 255);
border-bottom-color: rgb(243 232 255);
`,""],["border-y-purple-200",`border-top-color: rgb(233 213 255);
border-bottom-color: rgb(233 213 255);
`,""],["border-y-purple-300",`border-top-color: rgb(216 180 254);
border-bottom-color: rgb(216 180 254);
`,""],["border-y-purple-400",`border-top-color: rgb(192 132 252);
border-bottom-color: rgb(192 132 252);
`,""],["border-y-purple-500",`border-top-color: rgb(168 85 247);
border-bottom-color: rgb(168 85 247);
`,""],["border-y-purple-600",`border-top-color: rgb(147 51 234);
border-bottom-color: rgb(147 51 234);
`,""],["border-y-purple-700",`border-top-color: rgb(126 34 206);
border-bottom-color: rgb(126 34 206);
`,""],["border-y-purple-800",`border-top-color: rgb(107 33 168);
border-bottom-color: rgb(107 33 168);
`,""],["border-y-purple-900",`border-top-color: rgb(88 28 135);
border-bottom-color: rgb(88 28 135);
`,""],["border-y-purple-950",`border-top-color: rgb(59 7 100);
border-bottom-color: rgb(59 7 100);
`,""],["border-y-fuchsia-50",`border-top-color: rgb(253 244 255);
border-bottom-color: rgb(253 244 255);
`,""],["border-y-fuchsia-100",`border-top-color: rgb(250 232 255);
border-bottom-color: rgb(250 232 255);
`,""],["border-y-fuchsia-200",`border-top-color: rgb(245 208 254);
border-bottom-color: rgb(245 208 254);
`,""],["border-y-fuchsia-300",`border-top-color: rgb(240 171 252);
border-bottom-color: rgb(240 171 252);
`,""],["border-y-fuchsia-400",`border-top-color: rgb(232 121 249);
border-bottom-color: rgb(232 121 249);
`,""],["border-y-fuchsia-500",`border-top-color: rgb(217 70 239);
border-bottom-color: rgb(217 70 239);
`,""],["border-y-fuchsia-600",`border-top-color: rgb(192 38 211);
border-bottom-color: rgb(192 38 211);
`,""],["border-y-fuchsia-700",`border-top-color: rgb(162 28 175);
border-bottom-color: rgb(162 28 175);
`,""],["border-y-fuchsia-800",`border-top-color: rgb(134 25 143);
border-bottom-color: rgb(134 25 143);
`,""],["border-y-fuchsia-900",`border-top-color: rgb(112 26 117);
border-bottom-color: rgb(112 26 117);
`,""],["border-y-fuchsia-950",`border-top-color: rgb(74 4 78);
border-bottom-color: rgb(74 4 78);
`,""],["border-y-pink-50",`border-top-color: rgb(253 242 248);
border-bottom-color: rgb(253 242 248);
`,""],["border-y-pink-100",`border-top-color: rgb(252 231 243);
border-bottom-color: rgb(252 231 243);
`,""],["border-y-pink-200",`border-top-color: rgb(251 207 232);
border-bottom-color: rgb(251 207 232);
`,""],["border-y-pink-300",`border-top-color: rgb(249 168 212);
border-bottom-color: rgb(249 168 212);
`,""],["border-y-pink-400",`border-top-color: rgb(244 114 182);
border-bottom-color: rgb(244 114 182);
`,""],["border-y-pink-500",`border-top-color: rgb(236 72 153);
border-bottom-color: rgb(236 72 153);
`,""],["border-y-pink-600",`border-top-color: rgb(219 39 119);
border-bottom-color: rgb(219 39 119);
`,""],["border-y-pink-700",`border-top-color: rgb(190 24 93);
border-bottom-color: rgb(190 24 93);
`,""],["border-y-pink-800",`border-top-color: rgb(157 23 77);
border-bottom-color: rgb(157 23 77);
`,""],["border-y-pink-900",`border-top-color: rgb(131 24 67);
border-bottom-color: rgb(131 24 67);
`,""],["border-y-pink-950",`border-top-color: rgb(80 7 36);
border-bottom-color: rgb(80 7 36);
`,""],["border-y-rose-50",`border-top-color: rgb(255 241 242);
border-bottom-color: rgb(255 241 242);
`,""],["border-y-rose-100",`border-top-color: rgb(255 228 230);
border-bottom-color: rgb(255 228 230);
`,""],["border-y-rose-200",`border-top-color: rgb(254 205 211);
border-bottom-color: rgb(254 205 211);
`,""],["border-y-rose-300",`border-top-color: rgb(253 164 175);
border-bottom-color: rgb(253 164 175);
`,""],["border-y-rose-400",`border-top-color: rgb(251 113 133);
border-bottom-color: rgb(251 113 133);
`,""],["border-y-rose-500",`border-top-color: rgb(244 63 94);
border-bottom-color: rgb(244 63 94);
`,""],["border-y-rose-600",`border-top-color: rgb(225 29 72);
border-bottom-color: rgb(225 29 72);
`,""],["border-y-rose-700",`border-top-color: rgb(190 18 60);
border-bottom-color: rgb(190 18 60);
`,""],["border-y-rose-800",`border-top-color: rgb(159 18 57);
border-bottom-color: rgb(159 18 57);
`,""],["border-y-rose-900",`border-top-color: rgb(136 19 55);
border-bottom-color: rgb(136 19 55);
`,""],["border-y-rose-950",`border-top-color: rgb(76 5 25);
border-bottom-color: rgb(76 5 25);
`,""],["border-s-inherit",`border-inline-start-color: inherit;
`,""],["border-s-current",`border-inline-start-color: currentColor;
`,""],["border-s-transparent",`border-inline-start-color: transparent;
`,""],["border-s-black",`border-inline-start-color: rgb(0 0 0);
`,""],["border-s-white",`border-inline-start-color: rgb(255 255 255);
`,""],["border-s-slate-50",`border-inline-start-color: rgb(248 250 252);
`,""],["border-s-slate-100",`border-inline-start-color: rgb(241 245 249);
`,""],["border-s-slate-200",`border-inline-start-color: rgb(226 232 240);
`,""],["border-s-slate-300",`border-inline-start-color: rgb(203 213 225);
`,""],["border-s-slate-400",`border-inline-start-color: rgb(148 163 184);
`,""],["border-s-slate-500",`border-inline-start-color: rgb(100 116 139);
`,""],["border-s-slate-600",`border-inline-start-color: rgb(71 85 105);
`,""],["border-s-slate-700",`border-inline-start-color: rgb(51 65 85);
`,""],["border-s-slate-800",`border-inline-start-color: rgb(30 41 59);
`,""],["border-s-slate-900",`border-inline-start-color: rgb(15 23 42);
`,""],["border-s-slate-950",`border-inline-start-color: rgb(2 6 23);
`,""],["border-s-gray-50",`border-inline-start-color: rgb(249 250 251);
`,""],["border-s-gray-100",`border-inline-start-color: rgb(243 244 246);
`,""],["border-s-gray-200",`border-inline-start-color: rgb(229 231 235);
`,""],["border-s-gray-300",`border-inline-start-color: rgb(209 213 219);
`,""],["border-s-gray-400",`border-inline-start-color: rgb(156 163 175);
`,""],["border-s-gray-500",`border-inline-start-color: rgb(107 114 128);
`,""],["border-s-gray-600",`border-inline-start-color: rgb(75 85 99);
`,""],["border-s-gray-700",`border-inline-start-color: rgb(55 65 81);
`,""],["border-s-gray-800",`border-inline-start-color: rgb(31 41 55);
`,""],["border-s-gray-900",`border-inline-start-color: rgb(17 24 39);
`,""],["border-s-gray-950",`border-inline-start-color: rgb(3 7 18);
`,""],["border-s-zinc-50",`border-inline-start-color: rgb(250 250 250);
`,""],["border-s-zinc-100",`border-inline-start-color: rgb(244 244 245);
`,""],["border-s-zinc-200",`border-inline-start-color: rgb(228 228 231);
`,""],["border-s-zinc-300",`border-inline-start-color: rgb(212 212 216);
`,""],["border-s-zinc-400",`border-inline-start-color: rgb(161 161 170);
`,""],["border-s-zinc-500",`border-inline-start-color: rgb(113 113 122);
`,""],["border-s-zinc-600",`border-inline-start-color: rgb(82 82 91);
`,""],["border-s-zinc-700",`border-inline-start-color: rgb(63 63 70);
`,""],["border-s-zinc-800",`border-inline-start-color: rgb(39 39 42);
`,""],["border-s-zinc-900",`border-inline-start-color: rgb(24 24 27);
`,""],["border-s-zinc-950",`border-inline-start-color: rgb(9 9 11);
`,""],["border-s-neutral-50",`border-inline-start-color: rgb(250 250 250);
`,""],["border-s-neutral-100",`border-inline-start-color: rgb(245 245 245);
`,""],["border-s-neutral-200",`border-inline-start-color: rgb(229 229 229);
`,""],["border-s-neutral-300",`border-inline-start-color: rgb(212 212 212);
`,""],["border-s-neutral-400",`border-inline-start-color: rgb(163 163 163);
`,""],["border-s-neutral-500",`border-inline-start-color: rgb(115 115 115);
`,""],["border-s-neutral-600",`border-inline-start-color: rgb(82 82 82);
`,""],["border-s-neutral-700",`border-inline-start-color: rgb(64 64 64);
`,""],["border-s-neutral-800",`border-inline-start-color: rgb(38 38 38);
`,""],["border-s-neutral-900",`border-inline-start-color: rgb(23 23 23);
`,""],["border-s-neutral-950",`border-inline-start-color: rgb(10 10 10);
`,""],["border-s-stone-50",`border-inline-start-color: rgb(250 250 249);
`,""],["border-s-stone-100",`border-inline-start-color: rgb(245 245 244);
`,""],["border-s-stone-200",`border-inline-start-color: rgb(231 229 228);
`,""],["border-s-stone-300",`border-inline-start-color: rgb(214 211 209);
`,""],["border-s-stone-400",`border-inline-start-color: rgb(168 162 158);
`,""],["border-s-stone-500",`border-inline-start-color: rgb(120 113 108);
`,""],["border-s-stone-600",`border-inline-start-color: rgb(87 83 78);
`,""],["border-s-stone-700",`border-inline-start-color: rgb(68 64 60);
`,""],["border-s-stone-800",`border-inline-start-color: rgb(41 37 36);
`,""],["border-s-stone-900",`border-inline-start-color: rgb(28 25 23);
`,""],["border-s-stone-950",`border-inline-start-color: rgb(12 10 9);
`,""],["border-s-red-50",`border-inline-start-color: rgb(254 242 242);
`,""],["border-s-red-100",`border-inline-start-color: rgb(254 226 226);
`,""],["border-s-red-200",`border-inline-start-color: rgb(254 202 202);
`,""],["border-s-red-300",`border-inline-start-color: rgb(252 165 165);
`,""],["border-s-red-400",`border-inline-start-color: rgb(248 113 113);
`,""],["border-s-red-500",`border-inline-start-color: rgb(239 68 68);
`,""],["border-s-red-600",`border-inline-start-color: rgb(220 38 38);
`,""],["border-s-red-700",`border-inline-start-color: rgb(185 28 28);
`,""],["border-s-red-800",`border-inline-start-color: rgb(153 27 27);
`,""],["border-s-red-900",`border-inline-start-color: rgb(127 29 29);
`,""],["border-s-red-950",`border-inline-start-color: rgb(69 10 10);
`,""],["border-s-orange-50",`border-inline-start-color: rgb(255 247 237);
`,""],["border-s-orange-100",`border-inline-start-color: rgb(255 237 213);
`,""],["border-s-orange-200",`border-inline-start-color: rgb(254 215 170);
`,""],["border-s-orange-300",`border-inline-start-color: rgb(253 186 116);
`,""],["border-s-orange-400",`border-inline-start-color: rgb(251 146 60);
`,""],["border-s-orange-500",`border-inline-start-color: rgb(249 115 22);
`,""],["border-s-orange-600",`border-inline-start-color: rgb(234 88 12);
`,""],["border-s-orange-700",`border-inline-start-color: rgb(194 65 12);
`,""],["border-s-orange-800",`border-inline-start-color: rgb(154 52 18);
`,""],["border-s-orange-900",`border-inline-start-color: rgb(124 45 18);
`,""],["border-s-orange-950",`border-inline-start-color: rgb(67 20 7);
`,""],["border-s-amber-50",`border-inline-start-color: rgb(255 251 235);
`,""],["border-s-amber-100",`border-inline-start-color: rgb(254 243 199);
`,""],["border-s-amber-200",`border-inline-start-color: rgb(253 230 138);
`,""],["border-s-amber-300",`border-inline-start-color: rgb(252 211 77);
`,""],["border-s-amber-400",`border-inline-start-color: rgb(251 191 36);
`,""],["border-s-amber-500",`border-inline-start-color: rgb(245 158 11);
`,""],["border-s-amber-600",`border-inline-start-color: rgb(217 119 6);
`,""],["border-s-amber-700",`border-inline-start-color: rgb(180 83 9);
`,""],["border-s-amber-800",`border-inline-start-color: rgb(146 64 14);
`,""],["border-s-amber-900",`border-inline-start-color: rgb(120 53 15);
`,""],["border-s-amber-950",`border-inline-start-color: rgb(69 26 3);
`,""],["border-s-yellow-50",`border-inline-start-color: rgb(254 252 232);
`,""],["border-s-yellow-100",`border-inline-start-color: rgb(254 249 195);
`,""],["border-s-yellow-200",`border-inline-start-color: rgb(254 240 138);
`,""],["border-s-yellow-300",`border-inline-start-color: rgb(253 224 71);
`,""],["border-s-yellow-400",`border-inline-start-color: rgb(250 204 21);
`,""],["border-s-yellow-500",`border-inline-start-color: rgb(234 179 8);
`,""],["border-s-yellow-600",`border-inline-start-color: rgb(202 138 4);
`,""],["border-s-yellow-700",`border-inline-start-color: rgb(161 98 7);
`,""],["border-s-yellow-800",`border-inline-start-color: rgb(133 77 14);
`,""],["border-s-yellow-900",`border-inline-start-color: rgb(113 63 18);
`,""],["border-s-yellow-950",`border-inline-start-color: rgb(66 32 6);
`,""],["border-s-lime-50",`border-inline-start-color: rgb(247 254 231);
`,""],["border-s-lime-100",`border-inline-start-color: rgb(236 252 203);
`,""],["border-s-lime-200",`border-inline-start-color: rgb(217 249 157);
`,""],["border-s-lime-300",`border-inline-start-color: rgb(190 242 100);
`,""],["border-s-lime-400",`border-inline-start-color: rgb(163 230 53);
`,""],["border-s-lime-500",`border-inline-start-color: rgb(132 204 22);
`,""],["border-s-lime-600",`border-inline-start-color: rgb(101 163 13);
`,""],["border-s-lime-700",`border-inline-start-color: rgb(77 124 15);
`,""],["border-s-lime-800",`border-inline-start-color: rgb(63 98 18);
`,""],["border-s-lime-900",`border-inline-start-color: rgb(54 83 20);
`,""],["border-s-lime-950",`border-inline-start-color: rgb(26 46 5);
`,""],["border-s-green-50",`border-inline-start-color: rgb(240 253 244);
`,""],["border-s-green-100",`border-inline-start-color: rgb(220 252 231);
`,""],["border-s-green-200",`border-inline-start-color: rgb(187 247 208);
`,""],["border-s-green-300",`border-inline-start-color: rgb(134 239 172);
`,""],["border-s-green-400",`border-inline-start-color: rgb(74 222 128);
`,""],["border-s-green-500",`border-inline-start-color: rgb(34 197 94);
`,""],["border-s-green-600",`border-inline-start-color: rgb(22 163 74);
`,""],["border-s-green-700",`border-inline-start-color: rgb(21 128 61);
`,""],["border-s-green-800",`border-inline-start-color: rgb(22 101 52);
`,""],["border-s-green-900",`border-inline-start-color: rgb(20 83 45);
`,""],["border-s-green-950",`border-inline-start-color: rgb(5 46 22);
`,""],["border-s-emerald-50",`border-inline-start-color: rgb(236 253 245);
`,""],["border-s-emerald-100",`border-inline-start-color: rgb(209 250 229);
`,""],["border-s-emerald-200",`border-inline-start-color: rgb(167 243 208);
`,""],["border-s-emerald-300",`border-inline-start-color: rgb(110 231 183);
`,""],["border-s-emerald-400",`border-inline-start-color: rgb(52 211 153);
`,""],["border-s-emerald-500",`border-inline-start-color: rgb(16 185 129);
`,""],["border-s-emerald-600",`border-inline-start-color: rgb(5 150 105);
`,""],["border-s-emerald-700",`border-inline-start-color: rgb(4 120 87);
`,""],["border-s-emerald-800",`border-inline-start-color: rgb(6 95 70);
`,""],["border-s-emerald-900",`border-inline-start-color: rgb(6 78 59);
`,""],["border-s-emerald-950",`border-inline-start-color: rgb(2 44 34);
`,""],["border-s-teal-50",`border-inline-start-color: rgb(240 253 250);
`,""],["border-s-teal-100",`border-inline-start-color: rgb(204 251 241);
`,""],["border-s-teal-200",`border-inline-start-color: rgb(153 246 228);
`,""],["border-s-teal-300",`border-inline-start-color: rgb(94 234 212);
`,""],["border-s-teal-400",`border-inline-start-color: rgb(45 212 191);
`,""],["border-s-teal-500",`border-inline-start-color: rgb(20 184 166);
`,""],["border-s-teal-600",`border-inline-start-color: rgb(13 148 136);
`,""],["border-s-teal-700",`border-inline-start-color: rgb(15 118 110);
`,""],["border-s-teal-800",`border-inline-start-color: rgb(17 94 89);
`,""],["border-s-teal-900",`border-inline-start-color: rgb(19 78 74);
`,""],["border-s-teal-950",`border-inline-start-color: rgb(4 47 46);
`,""],["border-s-cyan-50",`border-inline-start-color: rgb(236 254 255);
`,""],["border-s-cyan-100",`border-inline-start-color: rgb(207 250 254);
`,""],["border-s-cyan-200",`border-inline-start-color: rgb(165 243 252);
`,""],["border-s-cyan-300",`border-inline-start-color: rgb(103 232 249);
`,""],["border-s-cyan-400",`border-inline-start-color: rgb(34 211 238);
`,""],["border-s-cyan-500",`border-inline-start-color: rgb(6 182 212);
`,""],["border-s-cyan-600",`border-inline-start-color: rgb(8 145 178);
`,""],["border-s-cyan-700",`border-inline-start-color: rgb(14 116 144);
`,""],["border-s-cyan-800",`border-inline-start-color: rgb(21 94 117);
`,""],["border-s-cyan-900",`border-inline-start-color: rgb(22 78 99);
`,""],["border-s-cyan-950",`border-inline-start-color: rgb(8 51 68);
`,""],["border-s-sky-50",`border-inline-start-color: rgb(240 249 255);
`,""],["border-s-sky-100",`border-inline-start-color: rgb(224 242 254);
`,""],["border-s-sky-200",`border-inline-start-color: rgb(186 230 253);
`,""],["border-s-sky-300",`border-inline-start-color: rgb(125 211 252);
`,""],["border-s-sky-400",`border-inline-start-color: rgb(56 189 248);
`,""],["border-s-sky-500",`border-inline-start-color: rgb(14 165 233);
`,""],["border-s-sky-600",`border-inline-start-color: rgb(2 132 199);
`,""],["border-s-sky-700",`border-inline-start-color: rgb(3 105 161);
`,""],["border-s-sky-800",`border-inline-start-color: rgb(7 89 133);
`,""],["border-s-sky-900",`border-inline-start-color: rgb(12 74 110);
`,""],["border-s-sky-950",`border-inline-start-color: rgb(8 47 73);
`,""],["border-s-blue-50",`border-inline-start-color: rgb(239 246 255);
`,""],["border-s-blue-100",`border-inline-start-color: rgb(219 234 254);
`,""],["border-s-blue-200",`border-inline-start-color: rgb(191 219 254);
`,""],["border-s-blue-300",`border-inline-start-color: rgb(147 197 253);
`,""],["border-s-blue-400",`border-inline-start-color: rgb(96 165 250);
`,""],["border-s-blue-500",`border-inline-start-color: rgb(59 130 246);
`,""],["border-s-blue-600",`border-inline-start-color: rgb(37 99 235);
`,""],["border-s-blue-700",`border-inline-start-color: rgb(29 78 216);
`,""],["border-s-blue-800",`border-inline-start-color: rgb(30 64 175);
`,""],["border-s-blue-900",`border-inline-start-color: rgb(30 58 138);
`,""],["border-s-blue-950",`border-inline-start-color: rgb(23 37 84);
`,""],["border-s-indigo-50",`border-inline-start-color: rgb(238 242 255);
`,""],["border-s-indigo-100",`border-inline-start-color: rgb(224 231 255);
`,""],["border-s-indigo-200",`border-inline-start-color: rgb(199 210 254);
`,""],["border-s-indigo-300",`border-inline-start-color: rgb(165 180 252);
`,""],["border-s-indigo-400",`border-inline-start-color: rgb(129 140 248);
`,""],["border-s-indigo-500",`border-inline-start-color: rgb(99 102 241);
`,""],["border-s-indigo-600",`border-inline-start-color: rgb(79 70 229);
`,""],["border-s-indigo-700",`border-inline-start-color: rgb(67 56 202);
`,""],["border-s-indigo-800",`border-inline-start-color: rgb(55 48 163);
`,""],["border-s-indigo-900",`border-inline-start-color: rgb(49 46 129);
`,""],["border-s-indigo-950",`border-inline-start-color: rgb(30 27 75);
`,""],["border-s-violet-50",`border-inline-start-color: rgb(245 243 255);
`,""],["border-s-violet-100",`border-inline-start-color: rgb(237 233 254);
`,""],["border-s-violet-200",`border-inline-start-color: rgb(221 214 254);
`,""],["border-s-violet-300",`border-inline-start-color: rgb(196 181 253);
`,""],["border-s-violet-400",`border-inline-start-color: rgb(167 139 250);
`,""],["border-s-violet-500",`border-inline-start-color: rgb(139 92 246);
`,""],["border-s-violet-600",`border-inline-start-color: rgb(124 58 237);
`,""],["border-s-violet-700",`border-inline-start-color: rgb(109 40 217);
`,""],["border-s-violet-800",`border-inline-start-color: rgb(91 33 182);
`,""],["border-s-violet-900",`border-inline-start-color: rgb(76 29 149);
`,""],["border-s-violet-950",`border-inline-start-color: rgb(46 16 101);
`,""],["border-s-purple-50",`border-inline-start-color: rgb(250 245 255);
`,""],["border-s-purple-100",`border-inline-start-color: rgb(243 232 255);
`,""],["border-s-purple-200",`border-inline-start-color: rgb(233 213 255);
`,""],["border-s-purple-300",`border-inline-start-color: rgb(216 180 254);
`,""],["border-s-purple-400",`border-inline-start-color: rgb(192 132 252);
`,""],["border-s-purple-500",`border-inline-start-color: rgb(168 85 247);
`,""],["border-s-purple-600",`border-inline-start-color: rgb(147 51 234);
`,""],["border-s-purple-700",`border-inline-start-color: rgb(126 34 206);
`,""],["border-s-purple-800",`border-inline-start-color: rgb(107 33 168);
`,""],["border-s-purple-900",`border-inline-start-color: rgb(88 28 135);
`,""],["border-s-purple-950",`border-inline-start-color: rgb(59 7 100);
`,""],["border-s-fuchsia-50",`border-inline-start-color: rgb(253 244 255);
`,""],["border-s-fuchsia-100",`border-inline-start-color: rgb(250 232 255);
`,""],["border-s-fuchsia-200",`border-inline-start-color: rgb(245 208 254);
`,""],["border-s-fuchsia-300",`border-inline-start-color: rgb(240 171 252);
`,""],["border-s-fuchsia-400",`border-inline-start-color: rgb(232 121 249);
`,""],["border-s-fuchsia-500",`border-inline-start-color: rgb(217 70 239);
`,""],["border-s-fuchsia-600",`border-inline-start-color: rgb(192 38 211);
`,""],["border-s-fuchsia-700",`border-inline-start-color: rgb(162 28 175);
`,""],["border-s-fuchsia-800",`border-inline-start-color: rgb(134 25 143);
`,""],["border-s-fuchsia-900",`border-inline-start-color: rgb(112 26 117);
`,""],["border-s-fuchsia-950",`border-inline-start-color: rgb(74 4 78);
`,""],["border-s-pink-50",`border-inline-start-color: rgb(253 242 248);
`,""],["border-s-pink-100",`border-inline-start-color: rgb(252 231 243);
`,""],["border-s-pink-200",`border-inline-start-color: rgb(251 207 232);
`,""],["border-s-pink-300",`border-inline-start-color: rgb(249 168 212);
`,""],["border-s-pink-400",`border-inline-start-color: rgb(244 114 182);
`,""],["border-s-pink-500",`border-inline-start-color: rgb(236 72 153);
`,""],["border-s-pink-600",`border-inline-start-color: rgb(219 39 119);
`,""],["border-s-pink-700",`border-inline-start-color: rgb(190 24 93);
`,""],["border-s-pink-800",`border-inline-start-color: rgb(157 23 77);
`,""],["border-s-pink-900",`border-inline-start-color: rgb(131 24 67);
`,""],["border-s-pink-950",`border-inline-start-color: rgb(80 7 36);
`,""],["border-s-rose-50",`border-inline-start-color: rgb(255 241 242);
`,""],["border-s-rose-100",`border-inline-start-color: rgb(255 228 230);
`,""],["border-s-rose-200",`border-inline-start-color: rgb(254 205 211);
`,""],["border-s-rose-300",`border-inline-start-color: rgb(253 164 175);
`,""],["border-s-rose-400",`border-inline-start-color: rgb(251 113 133);
`,""],["border-s-rose-500",`border-inline-start-color: rgb(244 63 94);
`,""],["border-s-rose-600",`border-inline-start-color: rgb(225 29 72);
`,""],["border-s-rose-700",`border-inline-start-color: rgb(190 18 60);
`,""],["border-s-rose-800",`border-inline-start-color: rgb(159 18 57);
`,""],["border-s-rose-900",`border-inline-start-color: rgb(136 19 55);
`,""],["border-s-rose-950",`border-inline-start-color: rgb(76 5 25);
`,""],["border-e-inherit",`border-inline-end-color: inherit;
`,""],["border-e-current",`border-inline-end-color: currentColor;
`,""],["border-e-transparent",`border-inline-end-color: transparent;
`,""],["border-e-black",`border-inline-end-color: rgb(0 0 0);
`,""],["border-e-white",`border-inline-end-color: rgb(255 255 255);
`,""],["border-e-slate-50",`border-inline-end-color: rgb(248 250 252);
`,""],["border-e-slate-100",`border-inline-end-color: rgb(241 245 249);
`,""],["border-e-slate-200",`border-inline-end-color: rgb(226 232 240);
`,""],["border-e-slate-300",`border-inline-end-color: rgb(203 213 225);
`,""],["border-e-slate-400",`border-inline-end-color: rgb(148 163 184);
`,""],["border-e-slate-500",`border-inline-end-color: rgb(100 116 139);
`,""],["border-e-slate-600",`border-inline-end-color: rgb(71 85 105);
`,""],["border-e-slate-700",`border-inline-end-color: rgb(51 65 85);
`,""],["border-e-slate-800",`border-inline-end-color: rgb(30 41 59);
`,""],["border-e-slate-900",`border-inline-end-color: rgb(15 23 42);
`,""],["border-e-slate-950",`border-inline-end-color: rgb(2 6 23);
`,""],["border-e-gray-50",`border-inline-end-color: rgb(249 250 251);
`,""],["border-e-gray-100",`border-inline-end-color: rgb(243 244 246);
`,""],["border-e-gray-200",`border-inline-end-color: rgb(229 231 235);
`,""],["border-e-gray-300",`border-inline-end-color: rgb(209 213 219);
`,""],["border-e-gray-400",`border-inline-end-color: rgb(156 163 175);
`,""],["border-e-gray-500",`border-inline-end-color: rgb(107 114 128);
`,""],["border-e-gray-600",`border-inline-end-color: rgb(75 85 99);
`,""],["border-e-gray-700",`border-inline-end-color: rgb(55 65 81);
`,""],["border-e-gray-800",`border-inline-end-color: rgb(31 41 55);
`,""],["border-e-gray-900",`border-inline-end-color: rgb(17 24 39);
`,""],["border-e-gray-950",`border-inline-end-color: rgb(3 7 18);
`,""],["border-e-zinc-50",`border-inline-end-color: rgb(250 250 250);
`,""],["border-e-zinc-100",`border-inline-end-color: rgb(244 244 245);
`,""],["border-e-zinc-200",`border-inline-end-color: rgb(228 228 231);
`,""],["border-e-zinc-300",`border-inline-end-color: rgb(212 212 216);
`,""],["border-e-zinc-400",`border-inline-end-color: rgb(161 161 170);
`,""],["border-e-zinc-500",`border-inline-end-color: rgb(113 113 122);
`,""],["border-e-zinc-600",`border-inline-end-color: rgb(82 82 91);
`,""],["border-e-zinc-700",`border-inline-end-color: rgb(63 63 70);
`,""],["border-e-zinc-800",`border-inline-end-color: rgb(39 39 42);
`,""],["border-e-zinc-900",`border-inline-end-color: rgb(24 24 27);
`,""],["border-e-zinc-950",`border-inline-end-color: rgb(9 9 11);
`,""],["border-e-neutral-50",`border-inline-end-color: rgb(250 250 250);
`,""],["border-e-neutral-100",`border-inline-end-color: rgb(245 245 245);
`,""],["border-e-neutral-200",`border-inline-end-color: rgb(229 229 229);
`,""],["border-e-neutral-300",`border-inline-end-color: rgb(212 212 212);
`,""],["border-e-neutral-400",`border-inline-end-color: rgb(163 163 163);
`,""],["border-e-neutral-500",`border-inline-end-color: rgb(115 115 115);
`,""],["border-e-neutral-600",`border-inline-end-color: rgb(82 82 82);
`,""],["border-e-neutral-700",`border-inline-end-color: rgb(64 64 64);
`,""],["border-e-neutral-800",`border-inline-end-color: rgb(38 38 38);
`,""],["border-e-neutral-900",`border-inline-end-color: rgb(23 23 23);
`,""],["border-e-neutral-950",`border-inline-end-color: rgb(10 10 10);
`,""],["border-e-stone-50",`border-inline-end-color: rgb(250 250 249);
`,""],["border-e-stone-100",`border-inline-end-color: rgb(245 245 244);
`,""],["border-e-stone-200",`border-inline-end-color: rgb(231 229 228);
`,""],["border-e-stone-300",`border-inline-end-color: rgb(214 211 209);
`,""],["border-e-stone-400",`border-inline-end-color: rgb(168 162 158);
`,""],["border-e-stone-500",`border-inline-end-color: rgb(120 113 108);
`,""],["border-e-stone-600",`border-inline-end-color: rgb(87 83 78);
`,""],["border-e-stone-700",`border-inline-end-color: rgb(68 64 60);
`,""],["border-e-stone-800",`border-inline-end-color: rgb(41 37 36);
`,""],["border-e-stone-900",`border-inline-end-color: rgb(28 25 23);
`,""],["border-e-stone-950",`border-inline-end-color: rgb(12 10 9);
`,""],["border-e-red-50",`border-inline-end-color: rgb(254 242 242);
`,""],["border-e-red-100",`border-inline-end-color: rgb(254 226 226);
`,""],["border-e-red-200",`border-inline-end-color: rgb(254 202 202);
`,""],["border-e-red-300",`border-inline-end-color: rgb(252 165 165);
`,""],["border-e-red-400",`border-inline-end-color: rgb(248 113 113);
`,""],["border-e-red-500",`border-inline-end-color: rgb(239 68 68);
`,""],["border-e-red-600",`border-inline-end-color: rgb(220 38 38);
`,""],["border-e-red-700",`border-inline-end-color: rgb(185 28 28);
`,""],["border-e-red-800",`border-inline-end-color: rgb(153 27 27);
`,""],["border-e-red-900",`border-inline-end-color: rgb(127 29 29);
`,""],["border-e-red-950",`border-inline-end-color: rgb(69 10 10);
`,""],["border-e-orange-50",`border-inline-end-color: rgb(255 247 237);
`,""],["border-e-orange-100",`border-inline-end-color: rgb(255 237 213);
`,""],["border-e-orange-200",`border-inline-end-color: rgb(254 215 170);
`,""],["border-e-orange-300",`border-inline-end-color: rgb(253 186 116);
`,""],["border-e-orange-400",`border-inline-end-color: rgb(251 146 60);
`,""],["border-e-orange-500",`border-inline-end-color: rgb(249 115 22);
`,""],["border-e-orange-600",`border-inline-end-color: rgb(234 88 12);
`,""],["border-e-orange-700",`border-inline-end-color: rgb(194 65 12);
`,""],["border-e-orange-800",`border-inline-end-color: rgb(154 52 18);
`,""],["border-e-orange-900",`border-inline-end-color: rgb(124 45 18);
`,""],["border-e-orange-950",`border-inline-end-color: rgb(67 20 7);
`,""],["border-e-amber-50",`border-inline-end-color: rgb(255 251 235);
`,""],["border-e-amber-100",`border-inline-end-color: rgb(254 243 199);
`,""],["border-e-amber-200",`border-inline-end-color: rgb(253 230 138);
`,""],["border-e-amber-300",`border-inline-end-color: rgb(252 211 77);
`,""],["border-e-amber-400",`border-inline-end-color: rgb(251 191 36);
`,""],["border-e-amber-500",`border-inline-end-color: rgb(245 158 11);
`,""],["border-e-amber-600",`border-inline-end-color: rgb(217 119 6);
`,""],["border-e-amber-700",`border-inline-end-color: rgb(180 83 9);
`,""],["border-e-amber-800",`border-inline-end-color: rgb(146 64 14);
`,""],["border-e-amber-900",`border-inline-end-color: rgb(120 53 15);
`,""],["border-e-amber-950",`border-inline-end-color: rgb(69 26 3);
`,""],["border-e-yellow-50",`border-inline-end-color: rgb(254 252 232);
`,""],["border-e-yellow-100",`border-inline-end-color: rgb(254 249 195);
`,""],["border-e-yellow-200",`border-inline-end-color: rgb(254 240 138);
`,""],["border-e-yellow-300",`border-inline-end-color: rgb(253 224 71);
`,""],["border-e-yellow-400",`border-inline-end-color: rgb(250 204 21);
`,""],["border-e-yellow-500",`border-inline-end-color: rgb(234 179 8);
`,""],["border-e-yellow-600",`border-inline-end-color: rgb(202 138 4);
`,""],["border-e-yellow-700",`border-inline-end-color: rgb(161 98 7);
`,""],["border-e-yellow-800",`border-inline-end-color: rgb(133 77 14);
`,""],["border-e-yellow-900",`border-inline-end-color: rgb(113 63 18);
`,""],["border-e-yellow-950",`border-inline-end-color: rgb(66 32 6);
`,""],["border-e-lime-50",`border-inline-end-color: rgb(247 254 231);
`,""],["border-e-lime-100",`border-inline-end-color: rgb(236 252 203);
`,""],["border-e-lime-200",`border-inline-end-color: rgb(217 249 157);
`,""],["border-e-lime-300",`border-inline-end-color: rgb(190 242 100);
`,""],["border-e-lime-400",`border-inline-end-color: rgb(163 230 53);
`,""],["border-e-lime-500",`border-inline-end-color: rgb(132 204 22);
`,""],["border-e-lime-600",`border-inline-end-color: rgb(101 163 13);
`,""],["border-e-lime-700",`border-inline-end-color: rgb(77 124 15);
`,""],["border-e-lime-800",`border-inline-end-color: rgb(63 98 18);
`,""],["border-e-lime-900",`border-inline-end-color: rgb(54 83 20);
`,""],["border-e-lime-950",`border-inline-end-color: rgb(26 46 5);
`,""],["border-e-green-50",`border-inline-end-color: rgb(240 253 244);
`,""],["border-e-green-100",`border-inline-end-color: rgb(220 252 231);
`,""],["border-e-green-200",`border-inline-end-color: rgb(187 247 208);
`,""],["border-e-green-300",`border-inline-end-color: rgb(134 239 172);
`,""],["border-e-green-400",`border-inline-end-color: rgb(74 222 128);
`,""],["border-e-green-500",`border-inline-end-color: rgb(34 197 94);
`,""],["border-e-green-600",`border-inline-end-color: rgb(22 163 74);
`,""],["border-e-green-700",`border-inline-end-color: rgb(21 128 61);
`,""],["border-e-green-800",`border-inline-end-color: rgb(22 101 52);
`,""],["border-e-green-900",`border-inline-end-color: rgb(20 83 45);
`,""],["border-e-green-950",`border-inline-end-color: rgb(5 46 22);
`,""],["border-e-emerald-50",`border-inline-end-color: rgb(236 253 245);
`,""],["border-e-emerald-100",`border-inline-end-color: rgb(209 250 229);
`,""],["border-e-emerald-200",`border-inline-end-color: rgb(167 243 208);
`,""],["border-e-emerald-300",`border-inline-end-color: rgb(110 231 183);
`,""],["border-e-emerald-400",`border-inline-end-color: rgb(52 211 153);
`,""],["border-e-emerald-500",`border-inline-end-color: rgb(16 185 129);
`,""],["border-e-emerald-600",`border-inline-end-color: rgb(5 150 105);
`,""],["border-e-emerald-700",`border-inline-end-color: rgb(4 120 87);
`,""],["border-e-emerald-800",`border-inline-end-color: rgb(6 95 70);
`,""],["border-e-emerald-900",`border-inline-end-color: rgb(6 78 59);
`,""],["border-e-emerald-950",`border-inline-end-color: rgb(2 44 34);
`,""],["border-e-teal-50",`border-inline-end-color: rgb(240 253 250);
`,""],["border-e-teal-100",`border-inline-end-color: rgb(204 251 241);
`,""],["border-e-teal-200",`border-inline-end-color: rgb(153 246 228);
`,""],["border-e-teal-300",`border-inline-end-color: rgb(94 234 212);
`,""],["border-e-teal-400",`border-inline-end-color: rgb(45 212 191);
`,""],["border-e-teal-500",`border-inline-end-color: rgb(20 184 166);
`,""],["border-e-teal-600",`border-inline-end-color: rgb(13 148 136);
`,""],["border-e-teal-700",`border-inline-end-color: rgb(15 118 110);
`,""],["border-e-teal-800",`border-inline-end-color: rgb(17 94 89);
`,""],["border-e-teal-900",`border-inline-end-color: rgb(19 78 74);
`,""],["border-e-teal-950",`border-inline-end-color: rgb(4 47 46);
`,""],["border-e-cyan-50",`border-inline-end-color: rgb(236 254 255);
`,""],["border-e-cyan-100",`border-inline-end-color: rgb(207 250 254);
`,""],["border-e-cyan-200",`border-inline-end-color: rgb(165 243 252);
`,""],["border-e-cyan-300",`border-inline-end-color: rgb(103 232 249);
`,""],["border-e-cyan-400",`border-inline-end-color: rgb(34 211 238);
`,""],["border-e-cyan-500",`border-inline-end-color: rgb(6 182 212);
`,""],["border-e-cyan-600",`border-inline-end-color: rgb(8 145 178);
`,""],["border-e-cyan-700",`border-inline-end-color: rgb(14 116 144);
`,""],["border-e-cyan-800",`border-inline-end-color: rgb(21 94 117);
`,""],["border-e-cyan-900",`border-inline-end-color: rgb(22 78 99);
`,""],["border-e-cyan-950",`border-inline-end-color: rgb(8 51 68);
`,""],["border-e-sky-50",`border-inline-end-color: rgb(240 249 255);
`,""],["border-e-sky-100",`border-inline-end-color: rgb(224 242 254);
`,""],["border-e-sky-200",`border-inline-end-color: rgb(186 230 253);
`,""],["border-e-sky-300",`border-inline-end-color: rgb(125 211 252);
`,""],["border-e-sky-400",`border-inline-end-color: rgb(56 189 248);
`,""],["border-e-sky-500",`border-inline-end-color: rgb(14 165 233);
`,""],["border-e-sky-600",`border-inline-end-color: rgb(2 132 199);
`,""],["border-e-sky-700",`border-inline-end-color: rgb(3 105 161);
`,""],["border-e-sky-800",`border-inline-end-color: rgb(7 89 133);
`,""],["border-e-sky-900",`border-inline-end-color: rgb(12 74 110);
`,""],["border-e-sky-950",`border-inline-end-color: rgb(8 47 73);
`,""],["border-e-blue-50",`border-inline-end-color: rgb(239 246 255);
`,""],["border-e-blue-100",`border-inline-end-color: rgb(219 234 254);
`,""],["border-e-blue-200",`border-inline-end-color: rgb(191 219 254);
`,""],["border-e-blue-300",`border-inline-end-color: rgb(147 197 253);
`,""],["border-e-blue-400",`border-inline-end-color: rgb(96 165 250);
`,""],["border-e-blue-500",`border-inline-end-color: rgb(59 130 246);
`,""],["border-e-blue-600",`border-inline-end-color: rgb(37 99 235);
`,""],["border-e-blue-700",`border-inline-end-color: rgb(29 78 216);
`,""],["border-e-blue-800",`border-inline-end-color: rgb(30 64 175);
`,""],["border-e-blue-900",`border-inline-end-color: rgb(30 58 138);
`,""],["border-e-blue-950",`border-inline-end-color: rgb(23 37 84);
`,""],["border-e-indigo-50",`border-inline-end-color: rgb(238 242 255);
`,""],["border-e-indigo-100",`border-inline-end-color: rgb(224 231 255);
`,""],["border-e-indigo-200",`border-inline-end-color: rgb(199 210 254);
`,""],["border-e-indigo-300",`border-inline-end-color: rgb(165 180 252);
`,""],["border-e-indigo-400",`border-inline-end-color: rgb(129 140 248);
`,""],["border-e-indigo-500",`border-inline-end-color: rgb(99 102 241);
`,""],["border-e-indigo-600",`border-inline-end-color: rgb(79 70 229);
`,""],["border-e-indigo-700",`border-inline-end-color: rgb(67 56 202);
`,""],["border-e-indigo-800",`border-inline-end-color: rgb(55 48 163);
`,""],["border-e-indigo-900",`border-inline-end-color: rgb(49 46 129);
`,""],["border-e-indigo-950",`border-inline-end-color: rgb(30 27 75);
`,""],["border-e-violet-50",`border-inline-end-color: rgb(245 243 255);
`,""],["border-e-violet-100",`border-inline-end-color: rgb(237 233 254);
`,""],["border-e-violet-200",`border-inline-end-color: rgb(221 214 254);
`,""],["border-e-violet-300",`border-inline-end-color: rgb(196 181 253);
`,""],["border-e-violet-400",`border-inline-end-color: rgb(167 139 250);
`,""],["border-e-violet-500",`border-inline-end-color: rgb(139 92 246);
`,""],["border-e-violet-600",`border-inline-end-color: rgb(124 58 237);
`,""],["border-e-violet-700",`border-inline-end-color: rgb(109 40 217);
`,""],["border-e-violet-800",`border-inline-end-color: rgb(91 33 182);
`,""],["border-e-violet-900",`border-inline-end-color: rgb(76 29 149);
`,""],["border-e-violet-950",`border-inline-end-color: rgb(46 16 101);
`,""],["border-e-purple-50",`border-inline-end-color: rgb(250 245 255);
`,""],["border-e-purple-100",`border-inline-end-color: rgb(243 232 255);
`,""],["border-e-purple-200",`border-inline-end-color: rgb(233 213 255);
`,""],["border-e-purple-300",`border-inline-end-color: rgb(216 180 254);
`,""],["border-e-purple-400",`border-inline-end-color: rgb(192 132 252);
`,""],["border-e-purple-500",`border-inline-end-color: rgb(168 85 247);
`,""],["border-e-purple-600",`border-inline-end-color: rgb(147 51 234);
`,""],["border-e-purple-700",`border-inline-end-color: rgb(126 34 206);
`,""],["border-e-purple-800",`border-inline-end-color: rgb(107 33 168);
`,""],["border-e-purple-900",`border-inline-end-color: rgb(88 28 135);
`,""],["border-e-purple-950",`border-inline-end-color: rgb(59 7 100);
`,""],["border-e-fuchsia-50",`border-inline-end-color: rgb(253 244 255);
`,""],["border-e-fuchsia-100",`border-inline-end-color: rgb(250 232 255);
`,""],["border-e-fuchsia-200",`border-inline-end-color: rgb(245 208 254);
`,""],["border-e-fuchsia-300",`border-inline-end-color: rgb(240 171 252);
`,""],["border-e-fuchsia-400",`border-inline-end-color: rgb(232 121 249);
`,""],["border-e-fuchsia-500",`border-inline-end-color: rgb(217 70 239);
`,""],["border-e-fuchsia-600",`border-inline-end-color: rgb(192 38 211);
`,""],["border-e-fuchsia-700",`border-inline-end-color: rgb(162 28 175);
`,""],["border-e-fuchsia-800",`border-inline-end-color: rgb(134 25 143);
`,""],["border-e-fuchsia-900",`border-inline-end-color: rgb(112 26 117);
`,""],["border-e-fuchsia-950",`border-inline-end-color: rgb(74 4 78);
`,""],["border-e-pink-50",`border-inline-end-color: rgb(253 242 248);
`,""],["border-e-pink-100",`border-inline-end-color: rgb(252 231 243);
`,""],["border-e-pink-200",`border-inline-end-color: rgb(251 207 232);
`,""],["border-e-pink-300",`border-inline-end-color: rgb(249 168 212);
`,""],["border-e-pink-400",`border-inline-end-color: rgb(244 114 182);
`,""],["border-e-pink-500",`border-inline-end-color: rgb(236 72 153);
`,""],["border-e-pink-600",`border-inline-end-color: rgb(219 39 119);
`,""],["border-e-pink-700",`border-inline-end-color: rgb(190 24 93);
`,""],["border-e-pink-800",`border-inline-end-color: rgb(157 23 77);
`,""],["border-e-pink-900",`border-inline-end-color: rgb(131 24 67);
`,""],["border-e-pink-950",`border-inline-end-color: rgb(80 7 36);
`,""],["border-e-rose-50",`border-inline-end-color: rgb(255 241 242);
`,""],["border-e-rose-100",`border-inline-end-color: rgb(255 228 230);
`,""],["border-e-rose-200",`border-inline-end-color: rgb(254 205 211);
`,""],["border-e-rose-300",`border-inline-end-color: rgb(253 164 175);
`,""],["border-e-rose-400",`border-inline-end-color: rgb(251 113 133);
`,""],["border-e-rose-500",`border-inline-end-color: rgb(244 63 94);
`,""],["border-e-rose-600",`border-inline-end-color: rgb(225 29 72);
`,""],["border-e-rose-700",`border-inline-end-color: rgb(190 18 60);
`,""],["border-e-rose-800",`border-inline-end-color: rgb(159 18 57);
`,""],["border-e-rose-900",`border-inline-end-color: rgb(136 19 55);
`,""],["border-e-rose-950",`border-inline-end-color: rgb(76 5 25);
`,""],["border-t-inherit",`border-top-color: inherit;
`,""],["border-t-current",`border-top-color: currentColor;
`,""],["border-t-transparent",`border-top-color: transparent;
`,""],["border-t-black",`border-top-color: rgb(0 0 0);
`,""],["border-t-white",`border-top-color: rgb(255 255 255);
`,""],["border-t-slate-50",`border-top-color: rgb(248 250 252);
`,""],["border-t-slate-100",`border-top-color: rgb(241 245 249);
`,""],["border-t-slate-200",`border-top-color: rgb(226 232 240);
`,""],["border-t-slate-300",`border-top-color: rgb(203 213 225);
`,""],["border-t-slate-400",`border-top-color: rgb(148 163 184);
`,""],["border-t-slate-500",`border-top-color: rgb(100 116 139);
`,""],["border-t-slate-600",`border-top-color: rgb(71 85 105);
`,""],["border-t-slate-700",`border-top-color: rgb(51 65 85);
`,""],["border-t-slate-800",`border-top-color: rgb(30 41 59);
`,""],["border-t-slate-900",`border-top-color: rgb(15 23 42);
`,""],["border-t-slate-950",`border-top-color: rgb(2 6 23);
`,""],["border-t-gray-50",`border-top-color: rgb(249 250 251);
`,""],["border-t-gray-100",`border-top-color: rgb(243 244 246);
`,""],["border-t-gray-200",`border-top-color: rgb(229 231 235);
`,""],["border-t-gray-300",`border-top-color: rgb(209 213 219);
`,""],["border-t-gray-400",`border-top-color: rgb(156 163 175);
`,""],["border-t-gray-500",`border-top-color: rgb(107 114 128);
`,""],["border-t-gray-600",`border-top-color: rgb(75 85 99);
`,""],["border-t-gray-700",`border-top-color: rgb(55 65 81);
`,""],["border-t-gray-800",`border-top-color: rgb(31 41 55);
`,""],["border-t-gray-900",`border-top-color: rgb(17 24 39);
`,""],["border-t-gray-950",`border-top-color: rgb(3 7 18);
`,""],["border-t-zinc-50",`border-top-color: rgb(250 250 250);
`,""],["border-t-zinc-100",`border-top-color: rgb(244 244 245);
`,""],["border-t-zinc-200",`border-top-color: rgb(228 228 231);
`,""],["border-t-zinc-300",`border-top-color: rgb(212 212 216);
`,""],["border-t-zinc-400",`border-top-color: rgb(161 161 170);
`,""],["border-t-zinc-500",`border-top-color: rgb(113 113 122);
`,""],["border-t-zinc-600",`border-top-color: rgb(82 82 91);
`,""],["border-t-zinc-700",`border-top-color: rgb(63 63 70);
`,""],["border-t-zinc-800",`border-top-color: rgb(39 39 42);
`,""],["border-t-zinc-900",`border-top-color: rgb(24 24 27);
`,""],["border-t-zinc-950",`border-top-color: rgb(9 9 11);
`,""],["border-t-neutral-50",`border-top-color: rgb(250 250 250);
`,""],["border-t-neutral-100",`border-top-color: rgb(245 245 245);
`,""],["border-t-neutral-200",`border-top-color: rgb(229 229 229);
`,""],["border-t-neutral-300",`border-top-color: rgb(212 212 212);
`,""],["border-t-neutral-400",`border-top-color: rgb(163 163 163);
`,""],["border-t-neutral-500",`border-top-color: rgb(115 115 115);
`,""],["border-t-neutral-600",`border-top-color: rgb(82 82 82);
`,""],["border-t-neutral-700",`border-top-color: rgb(64 64 64);
`,""],["border-t-neutral-800",`border-top-color: rgb(38 38 38);
`,""],["border-t-neutral-900",`border-top-color: rgb(23 23 23);
`,""],["border-t-neutral-950",`border-top-color: rgb(10 10 10);
`,""],["border-t-stone-50",`border-top-color: rgb(250 250 249);
`,""],["border-t-stone-100",`border-top-color: rgb(245 245 244);
`,""],["border-t-stone-200",`border-top-color: rgb(231 229 228);
`,""],["border-t-stone-300",`border-top-color: rgb(214 211 209);
`,""],["border-t-stone-400",`border-top-color: rgb(168 162 158);
`,""],["border-t-stone-500",`border-top-color: rgb(120 113 108);
`,""],["border-t-stone-600",`border-top-color: rgb(87 83 78);
`,""],["border-t-stone-700",`border-top-color: rgb(68 64 60);
`,""],["border-t-stone-800",`border-top-color: rgb(41 37 36);
`,""],["border-t-stone-900",`border-top-color: rgb(28 25 23);
`,""],["border-t-stone-950",`border-top-color: rgb(12 10 9);
`,""],["border-t-red-50",`border-top-color: rgb(254 242 242);
`,""],["border-t-red-100",`border-top-color: rgb(254 226 226);
`,""],["border-t-red-200",`border-top-color: rgb(254 202 202);
`,""],["border-t-red-300",`border-top-color: rgb(252 165 165);
`,""],["border-t-red-400",`border-top-color: rgb(248 113 113);
`,""],["border-t-red-500",`border-top-color: rgb(239 68 68);
`,""],["border-t-red-600",`border-top-color: rgb(220 38 38);
`,""],["border-t-red-700",`border-top-color: rgb(185 28 28);
`,""],["border-t-red-800",`border-top-color: rgb(153 27 27);
`,""],["border-t-red-900",`border-top-color: rgb(127 29 29);
`,""],["border-t-red-950",`border-top-color: rgb(69 10 10);
`,""],["border-t-orange-50",`border-top-color: rgb(255 247 237);
`,""],["border-t-orange-100",`border-top-color: rgb(255 237 213);
`,""],["border-t-orange-200",`border-top-color: rgb(254 215 170);
`,""],["border-t-orange-300",`border-top-color: rgb(253 186 116);
`,""],["border-t-orange-400",`border-top-color: rgb(251 146 60);
`,""],["border-t-orange-500",`border-top-color: rgb(249 115 22);
`,""],["border-t-orange-600",`border-top-color: rgb(234 88 12);
`,""],["border-t-orange-700",`border-top-color: rgb(194 65 12);
`,""],["border-t-orange-800",`border-top-color: rgb(154 52 18);
`,""],["border-t-orange-900",`border-top-color: rgb(124 45 18);
`,""],["border-t-orange-950",`border-top-color: rgb(67 20 7);
`,""],["border-t-amber-50",`border-top-color: rgb(255 251 235);
`,""],["border-t-amber-100",`border-top-color: rgb(254 243 199);
`,""],["border-t-amber-200",`border-top-color: rgb(253 230 138);
`,""],["border-t-amber-300",`border-top-color: rgb(252 211 77);
`,""],["border-t-amber-400",`border-top-color: rgb(251 191 36);
`,""],["border-t-amber-500",`border-top-color: rgb(245 158 11);
`,""],["border-t-amber-600",`border-top-color: rgb(217 119 6);
`,""],["border-t-amber-700",`border-top-color: rgb(180 83 9);
`,""],["border-t-amber-800",`border-top-color: rgb(146 64 14);
`,""],["border-t-amber-900",`border-top-color: rgb(120 53 15);
`,""],["border-t-amber-950",`border-top-color: rgb(69 26 3);
`,""],["border-t-yellow-50",`border-top-color: rgb(254 252 232);
`,""],["border-t-yellow-100",`border-top-color: rgb(254 249 195);
`,""],["border-t-yellow-200",`border-top-color: rgb(254 240 138);
`,""],["border-t-yellow-300",`border-top-color: rgb(253 224 71);
`,""],["border-t-yellow-400",`border-top-color: rgb(250 204 21);
`,""],["border-t-yellow-500",`border-top-color: rgb(234 179 8);
`,""],["border-t-yellow-600",`border-top-color: rgb(202 138 4);
`,""],["border-t-yellow-700",`border-top-color: rgb(161 98 7);
`,""],["border-t-yellow-800",`border-top-color: rgb(133 77 14);
`,""],["border-t-yellow-900",`border-top-color: rgb(113 63 18);
`,""],["border-t-yellow-950",`border-top-color: rgb(66 32 6);
`,""],["border-t-lime-50",`border-top-color: rgb(247 254 231);
`,""],["border-t-lime-100",`border-top-color: rgb(236 252 203);
`,""],["border-t-lime-200",`border-top-color: rgb(217 249 157);
`,""],["border-t-lime-300",`border-top-color: rgb(190 242 100);
`,""],["border-t-lime-400",`border-top-color: rgb(163 230 53);
`,""],["border-t-lime-500",`border-top-color: rgb(132 204 22);
`,""],["border-t-lime-600",`border-top-color: rgb(101 163 13);
`,""],["border-t-lime-700",`border-top-color: rgb(77 124 15);
`,""],["border-t-lime-800",`border-top-color: rgb(63 98 18);
`,""],["border-t-lime-900",`border-top-color: rgb(54 83 20);
`,""],["border-t-lime-950",`border-top-color: rgb(26 46 5);
`,""],["border-t-green-50",`border-top-color: rgb(240 253 244);
`,""],["border-t-green-100",`border-top-color: rgb(220 252 231);
`,""],["border-t-green-200",`border-top-color: rgb(187 247 208);
`,""],["border-t-green-300",`border-top-color: rgb(134 239 172);
`,""],["border-t-green-400",`border-top-color: rgb(74 222 128);
`,""],["border-t-green-500",`border-top-color: rgb(34 197 94);
`,""],["border-t-green-600",`border-top-color: rgb(22 163 74);
`,""],["border-t-green-700",`border-top-color: rgb(21 128 61);
`,""],["border-t-green-800",`border-top-color: rgb(22 101 52);
`,""],["border-t-green-900",`border-top-color: rgb(20 83 45);
`,""],["border-t-green-950",`border-top-color: rgb(5 46 22);
`,""],["border-t-emerald-50",`border-top-color: rgb(236 253 245);
`,""],["border-t-emerald-100",`border-top-color: rgb(209 250 229);
`,""],["border-t-emerald-200",`border-top-color: rgb(167 243 208);
`,""],["border-t-emerald-300",`border-top-color: rgb(110 231 183);
`,""],["border-t-emerald-400",`border-top-color: rgb(52 211 153);
`,""],["border-t-emerald-500",`border-top-color: rgb(16 185 129);
`,""],["border-t-emerald-600",`border-top-color: rgb(5 150 105);
`,""],["border-t-emerald-700",`border-top-color: rgb(4 120 87);
`,""],["border-t-emerald-800",`border-top-color: rgb(6 95 70);
`,""],["border-t-emerald-900",`border-top-color: rgb(6 78 59);
`,""],["border-t-emerald-950",`border-top-color: rgb(2 44 34);
`,""],["border-t-teal-50",`border-top-color: rgb(240 253 250);
`,""],["border-t-teal-100",`border-top-color: rgb(204 251 241);
`,""],["border-t-teal-200",`border-top-color: rgb(153 246 228);
`,""],["border-t-teal-300",`border-top-color: rgb(94 234 212);
`,""],["border-t-teal-400",`border-top-color: rgb(45 212 191);
`,""],["border-t-teal-500",`border-top-color: rgb(20 184 166);
`,""],["border-t-teal-600",`border-top-color: rgb(13 148 136);
`,""],["border-t-teal-700",`border-top-color: rgb(15 118 110);
`,""],["border-t-teal-800",`border-top-color: rgb(17 94 89);
`,""],["border-t-teal-900",`border-top-color: rgb(19 78 74);
`,""],["border-t-teal-950",`border-top-color: rgb(4 47 46);
`,""],["border-t-cyan-50",`border-top-color: rgb(236 254 255);
`,""],["border-t-cyan-100",`border-top-color: rgb(207 250 254);
`,""],["border-t-cyan-200",`border-top-color: rgb(165 243 252);
`,""],["border-t-cyan-300",`border-top-color: rgb(103 232 249);
`,""],["border-t-cyan-400",`border-top-color: rgb(34 211 238);
`,""],["border-t-cyan-500",`border-top-color: rgb(6 182 212);
`,""],["border-t-cyan-600",`border-top-color: rgb(8 145 178);
`,""],["border-t-cyan-700",`border-top-color: rgb(14 116 144);
`,""],["border-t-cyan-800",`border-top-color: rgb(21 94 117);
`,""],["border-t-cyan-900",`border-top-color: rgb(22 78 99);
`,""],["border-t-cyan-950",`border-top-color: rgb(8 51 68);
`,""],["border-t-sky-50",`border-top-color: rgb(240 249 255);
`,""],["border-t-sky-100",`border-top-color: rgb(224 242 254);
`,""],["border-t-sky-200",`border-top-color: rgb(186 230 253);
`,""],["border-t-sky-300",`border-top-color: rgb(125 211 252);
`,""],["border-t-sky-400",`border-top-color: rgb(56 189 248);
`,""],["border-t-sky-500",`border-top-color: rgb(14 165 233);
`,""],["border-t-sky-600",`border-top-color: rgb(2 132 199);
`,""],["border-t-sky-700",`border-top-color: rgb(3 105 161);
`,""],["border-t-sky-800",`border-top-color: rgb(7 89 133);
`,""],["border-t-sky-900",`border-top-color: rgb(12 74 110);
`,""],["border-t-sky-950",`border-top-color: rgb(8 47 73);
`,""],["border-t-blue-50",`border-top-color: rgb(239 246 255);
`,""],["border-t-blue-100",`border-top-color: rgb(219 234 254);
`,""],["border-t-blue-200",`border-top-color: rgb(191 219 254);
`,""],["border-t-blue-300",`border-top-color: rgb(147 197 253);
`,""],["border-t-blue-400",`border-top-color: rgb(96 165 250);
`,""],["border-t-blue-500",`border-top-color: rgb(59 130 246);
`,""],["border-t-blue-600",`border-top-color: rgb(37 99 235);
`,""],["border-t-blue-700",`border-top-color: rgb(29 78 216);
`,""],["border-t-blue-800",`border-top-color: rgb(30 64 175);
`,""],["border-t-blue-900",`border-top-color: rgb(30 58 138);
`,""],["border-t-blue-950",`border-top-color: rgb(23 37 84);
`,""],["border-t-indigo-50",`border-top-color: rgb(238 242 255);
`,""],["border-t-indigo-100",`border-top-color: rgb(224 231 255);
`,""],["border-t-indigo-200",`border-top-color: rgb(199 210 254);
`,""],["border-t-indigo-300",`border-top-color: rgb(165 180 252);
`,""],["border-t-indigo-400",`border-top-color: rgb(129 140 248);
`,""],["border-t-indigo-500",`border-top-color: rgb(99 102 241);
`,""],["border-t-indigo-600",`border-top-color: rgb(79 70 229);
`,""],["border-t-indigo-700",`border-top-color: rgb(67 56 202);
`,""],["border-t-indigo-800",`border-top-color: rgb(55 48 163);
`,""],["border-t-indigo-900",`border-top-color: rgb(49 46 129);
`,""],["border-t-indigo-950",`border-top-color: rgb(30 27 75);
`,""],["border-t-violet-50",`border-top-color: rgb(245 243 255);
`,""],["border-t-violet-100",`border-top-color: rgb(237 233 254);
`,""],["border-t-violet-200",`border-top-color: rgb(221 214 254);
`,""],["border-t-violet-300",`border-top-color: rgb(196 181 253);
`,""],["border-t-violet-400",`border-top-color: rgb(167 139 250);
`,""],["border-t-violet-500",`border-top-color: rgb(139 92 246);
`,""],["border-t-violet-600",`border-top-color: rgb(124 58 237);
`,""],["border-t-violet-700",`border-top-color: rgb(109 40 217);
`,""],["border-t-violet-800",`border-top-color: rgb(91 33 182);
`,""],["border-t-violet-900",`border-top-color: rgb(76 29 149);
`,""],["border-t-violet-950",`border-top-color: rgb(46 16 101);
`,""],["border-t-purple-50",`border-top-color: rgb(250 245 255);
`,""],["border-t-purple-100",`border-top-color: rgb(243 232 255);
`,""],["border-t-purple-200",`border-top-color: rgb(233 213 255);
`,""],["border-t-purple-300",`border-top-color: rgb(216 180 254);
`,""],["border-t-purple-400",`border-top-color: rgb(192 132 252);
`,""],["border-t-purple-500",`border-top-color: rgb(168 85 247);
`,""],["border-t-purple-600",`border-top-color: rgb(147 51 234);
`,""],["border-t-purple-700",`border-top-color: rgb(126 34 206);
`,""],["border-t-purple-800",`border-top-color: rgb(107 33 168);
`,""],["border-t-purple-900",`border-top-color: rgb(88 28 135);
`,""],["border-t-purple-950",`border-top-color: rgb(59 7 100);
`,""],["border-t-fuchsia-50",`border-top-color: rgb(253 244 255);
`,""],["border-t-fuchsia-100",`border-top-color: rgb(250 232 255);
`,""],["border-t-fuchsia-200",`border-top-color: rgb(245 208 254);
`,""],["border-t-fuchsia-300",`border-top-color: rgb(240 171 252);
`,""],["border-t-fuchsia-400",`border-top-color: rgb(232 121 249);
`,""],["border-t-fuchsia-500",`border-top-color: rgb(217 70 239);
`,""],["border-t-fuchsia-600",`border-top-color: rgb(192 38 211);
`,""],["border-t-fuchsia-700",`border-top-color: rgb(162 28 175);
`,""],["border-t-fuchsia-800",`border-top-color: rgb(134 25 143);
`,""],["border-t-fuchsia-900",`border-top-color: rgb(112 26 117);
`,""],["border-t-fuchsia-950",`border-top-color: rgb(74 4 78);
`,""],["border-t-pink-50",`border-top-color: rgb(253 242 248);
`,""],["border-t-pink-100",`border-top-color: rgb(252 231 243);
`,""],["border-t-pink-200",`border-top-color: rgb(251 207 232);
`,""],["border-t-pink-300",`border-top-color: rgb(249 168 212);
`,""],["border-t-pink-400",`border-top-color: rgb(244 114 182);
`,""],["border-t-pink-500",`border-top-color: rgb(236 72 153);
`,""],["border-t-pink-600",`border-top-color: rgb(219 39 119);
`,""],["border-t-pink-700",`border-top-color: rgb(190 24 93);
`,""],["border-t-pink-800",`border-top-color: rgb(157 23 77);
`,""],["border-t-pink-900",`border-top-color: rgb(131 24 67);
`,""],["border-t-pink-950",`border-top-color: rgb(80 7 36);
`,""],["border-t-rose-50",`border-top-color: rgb(255 241 242);
`,""],["border-t-rose-100",`border-top-color: rgb(255 228 230);
`,""],["border-t-rose-200",`border-top-color: rgb(254 205 211);
`,""],["border-t-rose-300",`border-top-color: rgb(253 164 175);
`,""],["border-t-rose-400",`border-top-color: rgb(251 113 133);
`,""],["border-t-rose-500",`border-top-color: rgb(244 63 94);
`,""],["border-t-rose-600",`border-top-color: rgb(225 29 72);
`,""],["border-t-rose-700",`border-top-color: rgb(190 18 60);
`,""],["border-t-rose-800",`border-top-color: rgb(159 18 57);
`,""],["border-t-rose-900",`border-top-color: rgb(136 19 55);
`,""],["border-t-rose-950",`border-top-color: rgb(76 5 25);
`,""],["border-r-inherit",`border-right-color: inherit;
`,""],["border-r-current",`border-right-color: currentColor;
`,""],["border-r-transparent",`border-right-color: transparent;
`,""],["border-r-black",`border-right-color: rgb(0 0 0);
`,""],["border-r-white",`border-right-color: rgb(255 255 255);
`,""],["border-r-slate-50",`border-right-color: rgb(248 250 252);
`,""],["border-r-slate-100",`border-right-color: rgb(241 245 249);
`,""],["border-r-slate-200",`border-right-color: rgb(226 232 240);
`,""],["border-r-slate-300",`border-right-color: rgb(203 213 225);
`,""],["border-r-slate-400",`border-right-color: rgb(148 163 184);
`,""],["border-r-slate-500",`border-right-color: rgb(100 116 139);
`,""],["border-r-slate-600",`border-right-color: rgb(71 85 105);
`,""],["border-r-slate-700",`border-right-color: rgb(51 65 85);
`,""],["border-r-slate-800",`border-right-color: rgb(30 41 59);
`,""],["border-r-slate-900",`border-right-color: rgb(15 23 42);
`,""],["border-r-slate-950",`border-right-color: rgb(2 6 23);
`,""],["border-r-gray-50",`border-right-color: rgb(249 250 251);
`,""],["border-r-gray-100",`border-right-color: rgb(243 244 246);
`,""],["border-r-gray-200",`border-right-color: rgb(229 231 235);
`,""],["border-r-gray-300",`border-right-color: rgb(209 213 219);
`,""],["border-r-gray-400",`border-right-color: rgb(156 163 175);
`,""],["border-r-gray-500",`border-right-color: rgb(107 114 128);
`,""],["border-r-gray-600",`border-right-color: rgb(75 85 99);
`,""],["border-r-gray-700",`border-right-color: rgb(55 65 81);
`,""],["border-r-gray-800",`border-right-color: rgb(31 41 55);
`,""],["border-r-gray-900",`border-right-color: rgb(17 24 39);
`,""],["border-r-gray-950",`border-right-color: rgb(3 7 18);
`,""],["border-r-zinc-50",`border-right-color: rgb(250 250 250);
`,""],["border-r-zinc-100",`border-right-color: rgb(244 244 245);
`,""],["border-r-zinc-200",`border-right-color: rgb(228 228 231);
`,""],["border-r-zinc-300",`border-right-color: rgb(212 212 216);
`,""],["border-r-zinc-400",`border-right-color: rgb(161 161 170);
`,""],["border-r-zinc-500",`border-right-color: rgb(113 113 122);
`,""],["border-r-zinc-600",`border-right-color: rgb(82 82 91);
`,""],["border-r-zinc-700",`border-right-color: rgb(63 63 70);
`,""],["border-r-zinc-800",`border-right-color: rgb(39 39 42);
`,""],["border-r-zinc-900",`border-right-color: rgb(24 24 27);
`,""],["border-r-zinc-950",`border-right-color: rgb(9 9 11);
`,""],["border-r-neutral-50",`border-right-color: rgb(250 250 250);
`,""],["border-r-neutral-100",`border-right-color: rgb(245 245 245);
`,""],["border-r-neutral-200",`border-right-color: rgb(229 229 229);
`,""],["border-r-neutral-300",`border-right-color: rgb(212 212 212);
`,""],["border-r-neutral-400",`border-right-color: rgb(163 163 163);
`,""],["border-r-neutral-500",`border-right-color: rgb(115 115 115);
`,""],["border-r-neutral-600",`border-right-color: rgb(82 82 82);
`,""],["border-r-neutral-700",`border-right-color: rgb(64 64 64);
`,""],["border-r-neutral-800",`border-right-color: rgb(38 38 38);
`,""],["border-r-neutral-900",`border-right-color: rgb(23 23 23);
`,""],["border-r-neutral-950",`border-right-color: rgb(10 10 10);
`,""],["border-r-stone-50",`border-right-color: rgb(250 250 249);
`,""],["border-r-stone-100",`border-right-color: rgb(245 245 244);
`,""],["border-r-stone-200",`border-right-color: rgb(231 229 228);
`,""],["border-r-stone-300",`border-right-color: rgb(214 211 209);
`,""],["border-r-stone-400",`border-right-color: rgb(168 162 158);
`,""],["border-r-stone-500",`border-right-color: rgb(120 113 108);
`,""],["border-r-stone-600",`border-right-color: rgb(87 83 78);
`,""],["border-r-stone-700",`border-right-color: rgb(68 64 60);
`,""],["border-r-stone-800",`border-right-color: rgb(41 37 36);
`,""],["border-r-stone-900",`border-right-color: rgb(28 25 23);
`,""],["border-r-stone-950",`border-right-color: rgb(12 10 9);
`,""],["border-r-red-50",`border-right-color: rgb(254 242 242);
`,""],["border-r-red-100",`border-right-color: rgb(254 226 226);
`,""],["border-r-red-200",`border-right-color: rgb(254 202 202);
`,""],["border-r-red-300",`border-right-color: rgb(252 165 165);
`,""],["border-r-red-400",`border-right-color: rgb(248 113 113);
`,""],["border-r-red-500",`border-right-color: rgb(239 68 68);
`,""],["border-r-red-600",`border-right-color: rgb(220 38 38);
`,""],["border-r-red-700",`border-right-color: rgb(185 28 28);
`,""],["border-r-red-800",`border-right-color: rgb(153 27 27);
`,""],["border-r-red-900",`border-right-color: rgb(127 29 29);
`,""],["border-r-red-950",`border-right-color: rgb(69 10 10);
`,""],["border-r-orange-50",`border-right-color: rgb(255 247 237);
`,""],["border-r-orange-100",`border-right-color: rgb(255 237 213);
`,""],["border-r-orange-200",`border-right-color: rgb(254 215 170);
`,""],["border-r-orange-300",`border-right-color: rgb(253 186 116);
`,""],["border-r-orange-400",`border-right-color: rgb(251 146 60);
`,""],["border-r-orange-500",`border-right-color: rgb(249 115 22);
`,""],["border-r-orange-600",`border-right-color: rgb(234 88 12);
`,""],["border-r-orange-700",`border-right-color: rgb(194 65 12);
`,""],["border-r-orange-800",`border-right-color: rgb(154 52 18);
`,""],["border-r-orange-900",`border-right-color: rgb(124 45 18);
`,""],["border-r-orange-950",`border-right-color: rgb(67 20 7);
`,""],["border-r-amber-50",`border-right-color: rgb(255 251 235);
`,""],["border-r-amber-100",`border-right-color: rgb(254 243 199);
`,""],["border-r-amber-200",`border-right-color: rgb(253 230 138);
`,""],["border-r-amber-300",`border-right-color: rgb(252 211 77);
`,""],["border-r-amber-400",`border-right-color: rgb(251 191 36);
`,""],["border-r-amber-500",`border-right-color: rgb(245 158 11);
`,""],["border-r-amber-600",`border-right-color: rgb(217 119 6);
`,""],["border-r-amber-700",`border-right-color: rgb(180 83 9);
`,""],["border-r-amber-800",`border-right-color: rgb(146 64 14);
`,""],["border-r-amber-900",`border-right-color: rgb(120 53 15);
`,""],["border-r-amber-950",`border-right-color: rgb(69 26 3);
`,""],["border-r-yellow-50",`border-right-color: rgb(254 252 232);
`,""],["border-r-yellow-100",`border-right-color: rgb(254 249 195);
`,""],["border-r-yellow-200",`border-right-color: rgb(254 240 138);
`,""],["border-r-yellow-300",`border-right-color: rgb(253 224 71);
`,""],["border-r-yellow-400",`border-right-color: rgb(250 204 21);
`,""],["border-r-yellow-500",`border-right-color: rgb(234 179 8);
`,""],["border-r-yellow-600",`border-right-color: rgb(202 138 4);
`,""],["border-r-yellow-700",`border-right-color: rgb(161 98 7);
`,""],["border-r-yellow-800",`border-right-color: rgb(133 77 14);
`,""],["border-r-yellow-900",`border-right-color: rgb(113 63 18);
`,""],["border-r-yellow-950",`border-right-color: rgb(66 32 6);
`,""],["border-r-lime-50",`border-right-color: rgb(247 254 231);
`,""],["border-r-lime-100",`border-right-color: rgb(236 252 203);
`,""],["border-r-lime-200",`border-right-color: rgb(217 249 157);
`,""],["border-r-lime-300",`border-right-color: rgb(190 242 100);
`,""],["border-r-lime-400",`border-right-color: rgb(163 230 53);
`,""],["border-r-lime-500",`border-right-color: rgb(132 204 22);
`,""],["border-r-lime-600",`border-right-color: rgb(101 163 13);
`,""],["border-r-lime-700",`border-right-color: rgb(77 124 15);
`,""],["border-r-lime-800",`border-right-color: rgb(63 98 18);
`,""],["border-r-lime-900",`border-right-color: rgb(54 83 20);
`,""],["border-r-lime-950",`border-right-color: rgb(26 46 5);
`,""],["border-r-green-50",`border-right-color: rgb(240 253 244);
`,""],["border-r-green-100",`border-right-color: rgb(220 252 231);
`,""],["border-r-green-200",`border-right-color: rgb(187 247 208);
`,""],["border-r-green-300",`border-right-color: rgb(134 239 172);
`,""],["border-r-green-400",`border-right-color: rgb(74 222 128);
`,""],["border-r-green-500",`border-right-color: rgb(34 197 94);
`,""],["border-r-green-600",`border-right-color: rgb(22 163 74);
`,""],["border-r-green-700",`border-right-color: rgb(21 128 61);
`,""],["border-r-green-800",`border-right-color: rgb(22 101 52);
`,""],["border-r-green-900",`border-right-color: rgb(20 83 45);
`,""],["border-r-green-950",`border-right-color: rgb(5 46 22);
`,""],["border-r-emerald-50",`border-right-color: rgb(236 253 245);
`,""],["border-r-emerald-100",`border-right-color: rgb(209 250 229);
`,""],["border-r-emerald-200",`border-right-color: rgb(167 243 208);
`,""],["border-r-emerald-300",`border-right-color: rgb(110 231 183);
`,""],["border-r-emerald-400",`border-right-color: rgb(52 211 153);
`,""],["border-r-emerald-500",`border-right-color: rgb(16 185 129);
`,""],["border-r-emerald-600",`border-right-color: rgb(5 150 105);
`,""],["border-r-emerald-700",`border-right-color: rgb(4 120 87);
`,""],["border-r-emerald-800",`border-right-color: rgb(6 95 70);
`,""],["border-r-emerald-900",`border-right-color: rgb(6 78 59);
`,""],["border-r-emerald-950",`border-right-color: rgb(2 44 34);
`,""],["border-r-teal-50",`border-right-color: rgb(240 253 250);
`,""],["border-r-teal-100",`border-right-color: rgb(204 251 241);
`,""],["border-r-teal-200",`border-right-color: rgb(153 246 228);
`,""],["border-r-teal-300",`border-right-color: rgb(94 234 212);
`,""],["border-r-teal-400",`border-right-color: rgb(45 212 191);
`,""],["border-r-teal-500",`border-right-color: rgb(20 184 166);
`,""],["border-r-teal-600",`border-right-color: rgb(13 148 136);
`,""],["border-r-teal-700",`border-right-color: rgb(15 118 110);
`,""],["border-r-teal-800",`border-right-color: rgb(17 94 89);
`,""],["border-r-teal-900",`border-right-color: rgb(19 78 74);
`,""],["border-r-teal-950",`border-right-color: rgb(4 47 46);
`,""],["border-r-cyan-50",`border-right-color: rgb(236 254 255);
`,""],["border-r-cyan-100",`border-right-color: rgb(207 250 254);
`,""],["border-r-cyan-200",`border-right-color: rgb(165 243 252);
`,""],["border-r-cyan-300",`border-right-color: rgb(103 232 249);
`,""],["border-r-cyan-400",`border-right-color: rgb(34 211 238);
`,""],["border-r-cyan-500",`border-right-color: rgb(6 182 212);
`,""],["border-r-cyan-600",`border-right-color: rgb(8 145 178);
`,""],["border-r-cyan-700",`border-right-color: rgb(14 116 144);
`,""],["border-r-cyan-800",`border-right-color: rgb(21 94 117);
`,""],["border-r-cyan-900",`border-right-color: rgb(22 78 99);
`,""],["border-r-cyan-950",`border-right-color: rgb(8 51 68);
`,""],["border-r-sky-50",`border-right-color: rgb(240 249 255);
`,""],["border-r-sky-100",`border-right-color: rgb(224 242 254);
`,""],["border-r-sky-200",`border-right-color: rgb(186 230 253);
`,""],["border-r-sky-300",`border-right-color: rgb(125 211 252);
`,""],["border-r-sky-400",`border-right-color: rgb(56 189 248);
`,""],["border-r-sky-500",`border-right-color: rgb(14 165 233);
`,""],["border-r-sky-600",`border-right-color: rgb(2 132 199);
`,""],["border-r-sky-700",`border-right-color: rgb(3 105 161);
`,""],["border-r-sky-800",`border-right-color: rgb(7 89 133);
`,""],["border-r-sky-900",`border-right-color: rgb(12 74 110);
`,""],["border-r-sky-950",`border-right-color: rgb(8 47 73);
`,""],["border-r-blue-50",`border-right-color: rgb(239 246 255);
`,""],["border-r-blue-100",`border-right-color: rgb(219 234 254);
`,""],["border-r-blue-200",`border-right-color: rgb(191 219 254);
`,""],["border-r-blue-300",`border-right-color: rgb(147 197 253);
`,""],["border-r-blue-400",`border-right-color: rgb(96 165 250);
`,""],["border-r-blue-500",`border-right-color: rgb(59 130 246);
`,""],["border-r-blue-600",`border-right-color: rgb(37 99 235);
`,""],["border-r-blue-700",`border-right-color: rgb(29 78 216);
`,""],["border-r-blue-800",`border-right-color: rgb(30 64 175);
`,""],["border-r-blue-900",`border-right-color: rgb(30 58 138);
`,""],["border-r-blue-950",`border-right-color: rgb(23 37 84);
`,""],["border-r-indigo-50",`border-right-color: rgb(238 242 255);
`,""],["border-r-indigo-100",`border-right-color: rgb(224 231 255);
`,""],["border-r-indigo-200",`border-right-color: rgb(199 210 254);
`,""],["border-r-indigo-300",`border-right-color: rgb(165 180 252);
`,""],["border-r-indigo-400",`border-right-color: rgb(129 140 248);
`,""],["border-r-indigo-500",`border-right-color: rgb(99 102 241);
`,""],["border-r-indigo-600",`border-right-color: rgb(79 70 229);
`,""],["border-r-indigo-700",`border-right-color: rgb(67 56 202);
`,""],["border-r-indigo-800",`border-right-color: rgb(55 48 163);
`,""],["border-r-indigo-900",`border-right-color: rgb(49 46 129);
`,""],["border-r-indigo-950",`border-right-color: rgb(30 27 75);
`,""],["border-r-violet-50",`border-right-color: rgb(245 243 255);
`,""],["border-r-violet-100",`border-right-color: rgb(237 233 254);
`,""],["border-r-violet-200",`border-right-color: rgb(221 214 254);
`,""],["border-r-violet-300",`border-right-color: rgb(196 181 253);
`,""],["border-r-violet-400",`border-right-color: rgb(167 139 250);
`,""],["border-r-violet-500",`border-right-color: rgb(139 92 246);
`,""],["border-r-violet-600",`border-right-color: rgb(124 58 237);
`,""],["border-r-violet-700",`border-right-color: rgb(109 40 217);
`,""],["border-r-violet-800",`border-right-color: rgb(91 33 182);
`,""],["border-r-violet-900",`border-right-color: rgb(76 29 149);
`,""],["border-r-violet-950",`border-right-color: rgb(46 16 101);
`,""],["border-r-purple-50",`border-right-color: rgb(250 245 255);
`,""],["border-r-purple-100",`border-right-color: rgb(243 232 255);
`,""],["border-r-purple-200",`border-right-color: rgb(233 213 255);
`,""],["border-r-purple-300",`border-right-color: rgb(216 180 254);
`,""],["border-r-purple-400",`border-right-color: rgb(192 132 252);
`,""],["border-r-purple-500",`border-right-color: rgb(168 85 247);
`,""],["border-r-purple-600",`border-right-color: rgb(147 51 234);
`,""],["border-r-purple-700",`border-right-color: rgb(126 34 206);
`,""],["border-r-purple-800",`border-right-color: rgb(107 33 168);
`,""],["border-r-purple-900",`border-right-color: rgb(88 28 135);
`,""],["border-r-purple-950",`border-right-color: rgb(59 7 100);
`,""],["border-r-fuchsia-50",`border-right-color: rgb(253 244 255);
`,""],["border-r-fuchsia-100",`border-right-color: rgb(250 232 255);
`,""],["border-r-fuchsia-200",`border-right-color: rgb(245 208 254);
`,""],["border-r-fuchsia-300",`border-right-color: rgb(240 171 252);
`,""],["border-r-fuchsia-400",`border-right-color: rgb(232 121 249);
`,""],["border-r-fuchsia-500",`border-right-color: rgb(217 70 239);
`,""],["border-r-fuchsia-600",`border-right-color: rgb(192 38 211);
`,""],["border-r-fuchsia-700",`border-right-color: rgb(162 28 175);
`,""],["border-r-fuchsia-800",`border-right-color: rgb(134 25 143);
`,""],["border-r-fuchsia-900",`border-right-color: rgb(112 26 117);
`,""],["border-r-fuchsia-950",`border-right-color: rgb(74 4 78);
`,""],["border-r-pink-50",`border-right-color: rgb(253 242 248);
`,""],["border-r-pink-100",`border-right-color: rgb(252 231 243);
`,""],["border-r-pink-200",`border-right-color: rgb(251 207 232);
`,""],["border-r-pink-300",`border-right-color: rgb(249 168 212);
`,""],["border-r-pink-400",`border-right-color: rgb(244 114 182);
`,""],["border-r-pink-500",`border-right-color: rgb(236 72 153);
`,""],["border-r-pink-600",`border-right-color: rgb(219 39 119);
`,""],["border-r-pink-700",`border-right-color: rgb(190 24 93);
`,""],["border-r-pink-800",`border-right-color: rgb(157 23 77);
`,""],["border-r-pink-900",`border-right-color: rgb(131 24 67);
`,""],["border-r-pink-950",`border-right-color: rgb(80 7 36);
`,""],["border-r-rose-50",`border-right-color: rgb(255 241 242);
`,""],["border-r-rose-100",`border-right-color: rgb(255 228 230);
`,""],["border-r-rose-200",`border-right-color: rgb(254 205 211);
`,""],["border-r-rose-300",`border-right-color: rgb(253 164 175);
`,""],["border-r-rose-400",`border-right-color: rgb(251 113 133);
`,""],["border-r-rose-500",`border-right-color: rgb(244 63 94);
`,""],["border-r-rose-600",`border-right-color: rgb(225 29 72);
`,""],["border-r-rose-700",`border-right-color: rgb(190 18 60);
`,""],["border-r-rose-800",`border-right-color: rgb(159 18 57);
`,""],["border-r-rose-900",`border-right-color: rgb(136 19 55);
`,""],["border-r-rose-950",`border-right-color: rgb(76 5 25);
`,""],["border-b-inherit",`border-bottom-color: inherit;
`,""],["border-b-current",`border-bottom-color: currentColor;
`,""],["border-b-transparent",`border-bottom-color: transparent;
`,""],["border-b-black",`border-bottom-color: rgb(0 0 0);
`,""],["border-b-white",`border-bottom-color: rgb(255 255 255);
`,""],["border-b-slate-50",`border-bottom-color: rgb(248 250 252);
`,""],["border-b-slate-100",`border-bottom-color: rgb(241 245 249);
`,""],["border-b-slate-200",`border-bottom-color: rgb(226 232 240);
`,""],["border-b-slate-300",`border-bottom-color: rgb(203 213 225);
`,""],["border-b-slate-400",`border-bottom-color: rgb(148 163 184);
`,""],["border-b-slate-500",`border-bottom-color: rgb(100 116 139);
`,""],["border-b-slate-600",`border-bottom-color: rgb(71 85 105);
`,""],["border-b-slate-700",`border-bottom-color: rgb(51 65 85);
`,""],["border-b-slate-800",`border-bottom-color: rgb(30 41 59);
`,""],["border-b-slate-900",`border-bottom-color: rgb(15 23 42);
`,""],["border-b-slate-950",`border-bottom-color: rgb(2 6 23);
`,""],["border-b-gray-50",`border-bottom-color: rgb(249 250 251);
`,""],["border-b-gray-100",`border-bottom-color: rgb(243 244 246);
`,""],["border-b-gray-200",`border-bottom-color: rgb(229 231 235);
`,""],["border-b-gray-300",`border-bottom-color: rgb(209 213 219);
`,""],["border-b-gray-400",`border-bottom-color: rgb(156 163 175);
`,""],["border-b-gray-500",`border-bottom-color: rgb(107 114 128);
`,""],["border-b-gray-600",`border-bottom-color: rgb(75 85 99);
`,""],["border-b-gray-700",`border-bottom-color: rgb(55 65 81);
`,""],["border-b-gray-800",`border-bottom-color: rgb(31 41 55);
`,""],["border-b-gray-900",`border-bottom-color: rgb(17 24 39);
`,""],["border-b-gray-950",`border-bottom-color: rgb(3 7 18);
`,""],["border-b-zinc-50",`border-bottom-color: rgb(250 250 250);
`,""],["border-b-zinc-100",`border-bottom-color: rgb(244 244 245);
`,""],["border-b-zinc-200",`border-bottom-color: rgb(228 228 231);
`,""],["border-b-zinc-300",`border-bottom-color: rgb(212 212 216);
`,""],["border-b-zinc-400",`border-bottom-color: rgb(161 161 170);
`,""],["border-b-zinc-500",`border-bottom-color: rgb(113 113 122);
`,""],["border-b-zinc-600",`border-bottom-color: rgb(82 82 91);
`,""],["border-b-zinc-700",`border-bottom-color: rgb(63 63 70);
`,""],["border-b-zinc-800",`border-bottom-color: rgb(39 39 42);
`,""],["border-b-zinc-900",`border-bottom-color: rgb(24 24 27);
`,""],["border-b-zinc-950",`border-bottom-color: rgb(9 9 11);
`,""],["border-b-neutral-50",`border-bottom-color: rgb(250 250 250);
`,""],["border-b-neutral-100",`border-bottom-color: rgb(245 245 245);
`,""],["border-b-neutral-200",`border-bottom-color: rgb(229 229 229);
`,""],["border-b-neutral-300",`border-bottom-color: rgb(212 212 212);
`,""],["border-b-neutral-400",`border-bottom-color: rgb(163 163 163);
`,""],["border-b-neutral-500",`border-bottom-color: rgb(115 115 115);
`,""],["border-b-neutral-600",`border-bottom-color: rgb(82 82 82);
`,""],["border-b-neutral-700",`border-bottom-color: rgb(64 64 64);
`,""],["border-b-neutral-800",`border-bottom-color: rgb(38 38 38);
`,""],["border-b-neutral-900",`border-bottom-color: rgb(23 23 23);
`,""],["border-b-neutral-950",`border-bottom-color: rgb(10 10 10);
`,""],["border-b-stone-50",`border-bottom-color: rgb(250 250 249);
`,""],["border-b-stone-100",`border-bottom-color: rgb(245 245 244);
`,""],["border-b-stone-200",`border-bottom-color: rgb(231 229 228);
`,""],["border-b-stone-300",`border-bottom-color: rgb(214 211 209);
`,""],["border-b-stone-400",`border-bottom-color: rgb(168 162 158);
`,""],["border-b-stone-500",`border-bottom-color: rgb(120 113 108);
`,""],["border-b-stone-600",`border-bottom-color: rgb(87 83 78);
`,""],["border-b-stone-700",`border-bottom-color: rgb(68 64 60);
`,""],["border-b-stone-800",`border-bottom-color: rgb(41 37 36);
`,""],["border-b-stone-900",`border-bottom-color: rgb(28 25 23);
`,""],["border-b-stone-950",`border-bottom-color: rgb(12 10 9);
`,""],["border-b-red-50",`border-bottom-color: rgb(254 242 242);
`,""],["border-b-red-100",`border-bottom-color: rgb(254 226 226);
`,""],["border-b-red-200",`border-bottom-color: rgb(254 202 202);
`,""],["border-b-red-300",`border-bottom-color: rgb(252 165 165);
`,""],["border-b-red-400",`border-bottom-color: rgb(248 113 113);
`,""],["border-b-red-500",`border-bottom-color: rgb(239 68 68);
`,""],["border-b-red-600",`border-bottom-color: rgb(220 38 38);
`,""],["border-b-red-700",`border-bottom-color: rgb(185 28 28);
`,""],["border-b-red-800",`border-bottom-color: rgb(153 27 27);
`,""],["border-b-red-900",`border-bottom-color: rgb(127 29 29);
`,""],["border-b-red-950",`border-bottom-color: rgb(69 10 10);
`,""],["border-b-orange-50",`border-bottom-color: rgb(255 247 237);
`,""],["border-b-orange-100",`border-bottom-color: rgb(255 237 213);
`,""],["border-b-orange-200",`border-bottom-color: rgb(254 215 170);
`,""],["border-b-orange-300",`border-bottom-color: rgb(253 186 116);
`,""],["border-b-orange-400",`border-bottom-color: rgb(251 146 60);
`,""],["border-b-orange-500",`border-bottom-color: rgb(249 115 22);
`,""],["border-b-orange-600",`border-bottom-color: rgb(234 88 12);
`,""],["border-b-orange-700",`border-bottom-color: rgb(194 65 12);
`,""],["border-b-orange-800",`border-bottom-color: rgb(154 52 18);
`,""],["border-b-orange-900",`border-bottom-color: rgb(124 45 18);
`,""],["border-b-orange-950",`border-bottom-color: rgb(67 20 7);
`,""],["border-b-amber-50",`border-bottom-color: rgb(255 251 235);
`,""],["border-b-amber-100",`border-bottom-color: rgb(254 243 199);
`,""],["border-b-amber-200",`border-bottom-color: rgb(253 230 138);
`,""],["border-b-amber-300",`border-bottom-color: rgb(252 211 77);
`,""],["border-b-amber-400",`border-bottom-color: rgb(251 191 36);
`,""],["border-b-amber-500",`border-bottom-color: rgb(245 158 11);
`,""],["border-b-amber-600",`border-bottom-color: rgb(217 119 6);
`,""],["border-b-amber-700",`border-bottom-color: rgb(180 83 9);
`,""],["border-b-amber-800",`border-bottom-color: rgb(146 64 14);
`,""],["border-b-amber-900",`border-bottom-color: rgb(120 53 15);
`,""],["border-b-amber-950",`border-bottom-color: rgb(69 26 3);
`,""],["border-b-yellow-50",`border-bottom-color: rgb(254 252 232);
`,""],["border-b-yellow-100",`border-bottom-color: rgb(254 249 195);
`,""],["border-b-yellow-200",`border-bottom-color: rgb(254 240 138);
`,""],["border-b-yellow-300",`border-bottom-color: rgb(253 224 71);
`,""],["border-b-yellow-400",`border-bottom-color: rgb(250 204 21);
`,""],["border-b-yellow-500",`border-bottom-color: rgb(234 179 8);
`,""],["border-b-yellow-600",`border-bottom-color: rgb(202 138 4);
`,""],["border-b-yellow-700",`border-bottom-color: rgb(161 98 7);
`,""],["border-b-yellow-800",`border-bottom-color: rgb(133 77 14);
`,""],["border-b-yellow-900",`border-bottom-color: rgb(113 63 18);
`,""],["border-b-yellow-950",`border-bottom-color: rgb(66 32 6);
`,""],["border-b-lime-50",`border-bottom-color: rgb(247 254 231);
`,""],["border-b-lime-100",`border-bottom-color: rgb(236 252 203);
`,""],["border-b-lime-200",`border-bottom-color: rgb(217 249 157);
`,""],["border-b-lime-300",`border-bottom-color: rgb(190 242 100);
`,""],["border-b-lime-400",`border-bottom-color: rgb(163 230 53);
`,""],["border-b-lime-500",`border-bottom-color: rgb(132 204 22);
`,""],["border-b-lime-600",`border-bottom-color: rgb(101 163 13);
`,""],["border-b-lime-700",`border-bottom-color: rgb(77 124 15);
`,""],["border-b-lime-800",`border-bottom-color: rgb(63 98 18);
`,""],["border-b-lime-900",`border-bottom-color: rgb(54 83 20);
`,""],["border-b-lime-950",`border-bottom-color: rgb(26 46 5);
`,""],["border-b-green-50",`border-bottom-color: rgb(240 253 244);
`,""],["border-b-green-100",`border-bottom-color: rgb(220 252 231);
`,""],["border-b-green-200",`border-bottom-color: rgb(187 247 208);
`,""],["border-b-green-300",`border-bottom-color: rgb(134 239 172);
`,""],["border-b-green-400",`border-bottom-color: rgb(74 222 128);
`,""],["border-b-green-500",`border-bottom-color: rgb(34 197 94);
`,""],["border-b-green-600",`border-bottom-color: rgb(22 163 74);
`,""],["border-b-green-700",`border-bottom-color: rgb(21 128 61);
`,""],["border-b-green-800",`border-bottom-color: rgb(22 101 52);
`,""],["border-b-green-900",`border-bottom-color: rgb(20 83 45);
`,""],["border-b-green-950",`border-bottom-color: rgb(5 46 22);
`,""],["border-b-emerald-50",`border-bottom-color: rgb(236 253 245);
`,""],["border-b-emerald-100",`border-bottom-color: rgb(209 250 229);
`,""],["border-b-emerald-200",`border-bottom-color: rgb(167 243 208);
`,""],["border-b-emerald-300",`border-bottom-color: rgb(110 231 183);
`,""],["border-b-emerald-400",`border-bottom-color: rgb(52 211 153);
`,""],["border-b-emerald-500",`border-bottom-color: rgb(16 185 129);
`,""],["border-b-emerald-600",`border-bottom-color: rgb(5 150 105);
`,""],["border-b-emerald-700",`border-bottom-color: rgb(4 120 87);
`,""],["border-b-emerald-800",`border-bottom-color: rgb(6 95 70);
`,""],["border-b-emerald-900",`border-bottom-color: rgb(6 78 59);
`,""],["border-b-emerald-950",`border-bottom-color: rgb(2 44 34);
`,""],["border-b-teal-50",`border-bottom-color: rgb(240 253 250);
`,""],["border-b-teal-100",`border-bottom-color: rgb(204 251 241);
`,""],["border-b-teal-200",`border-bottom-color: rgb(153 246 228);
`,""],["border-b-teal-300",`border-bottom-color: rgb(94 234 212);
`,""],["border-b-teal-400",`border-bottom-color: rgb(45 212 191);
`,""],["border-b-teal-500",`border-bottom-color: rgb(20 184 166);
`,""],["border-b-teal-600",`border-bottom-color: rgb(13 148 136);
`,""],["border-b-teal-700",`border-bottom-color: rgb(15 118 110);
`,""],["border-b-teal-800",`border-bottom-color: rgb(17 94 89);
`,""],["border-b-teal-900",`border-bottom-color: rgb(19 78 74);
`,""],["border-b-teal-950",`border-bottom-color: rgb(4 47 46);
`,""],["border-b-cyan-50",`border-bottom-color: rgb(236 254 255);
`,""],["border-b-cyan-100",`border-bottom-color: rgb(207 250 254);
`,""],["border-b-cyan-200",`border-bottom-color: rgb(165 243 252);
`,""],["border-b-cyan-300",`border-bottom-color: rgb(103 232 249);
`,""],["border-b-cyan-400",`border-bottom-color: rgb(34 211 238);
`,""],["border-b-cyan-500",`border-bottom-color: rgb(6 182 212);
`,""],["border-b-cyan-600",`border-bottom-color: rgb(8 145 178);
`,""],["border-b-cyan-700",`border-bottom-color: rgb(14 116 144);
`,""],["border-b-cyan-800",`border-bottom-color: rgb(21 94 117);
`,""],["border-b-cyan-900",`border-bottom-color: rgb(22 78 99);
`,""],["border-b-cyan-950",`border-bottom-color: rgb(8 51 68);
`,""],["border-b-sky-50",`border-bottom-color: rgb(240 249 255);
`,""],["border-b-sky-100",`border-bottom-color: rgb(224 242 254);
`,""],["border-b-sky-200",`border-bottom-color: rgb(186 230 253);
`,""],["border-b-sky-300",`border-bottom-color: rgb(125 211 252);
`,""],["border-b-sky-400",`border-bottom-color: rgb(56 189 248);
`,""],["border-b-sky-500",`border-bottom-color: rgb(14 165 233);
`,""],["border-b-sky-600",`border-bottom-color: rgb(2 132 199);
`,""],["border-b-sky-700",`border-bottom-color: rgb(3 105 161);
`,""],["border-b-sky-800",`border-bottom-color: rgb(7 89 133);
`,""],["border-b-sky-900",`border-bottom-color: rgb(12 74 110);
`,""],["border-b-sky-950",`border-bottom-color: rgb(8 47 73);
`,""],["border-b-blue-50",`border-bottom-color: rgb(239 246 255);
`,""],["border-b-blue-100",`border-bottom-color: rgb(219 234 254);
`,""],["border-b-blue-200",`border-bottom-color: rgb(191 219 254);
`,""],["border-b-blue-300",`border-bottom-color: rgb(147 197 253);
`,""],["border-b-blue-400",`border-bottom-color: rgb(96 165 250);
`,""],["border-b-blue-500",`border-bottom-color: rgb(59 130 246);
`,""],["border-b-blue-600",`border-bottom-color: rgb(37 99 235);
`,""],["border-b-blue-700",`border-bottom-color: rgb(29 78 216);
`,""],["border-b-blue-800",`border-bottom-color: rgb(30 64 175);
`,""],["border-b-blue-900",`border-bottom-color: rgb(30 58 138);
`,""],["border-b-blue-950",`border-bottom-color: rgb(23 37 84);
`,""],["border-b-indigo-50",`border-bottom-color: rgb(238 242 255);
`,""],["border-b-indigo-100",`border-bottom-color: rgb(224 231 255);
`,""],["border-b-indigo-200",`border-bottom-color: rgb(199 210 254);
`,""],["border-b-indigo-300",`border-bottom-color: rgb(165 180 252);
`,""],["border-b-indigo-400",`border-bottom-color: rgb(129 140 248);
`,""],["border-b-indigo-500",`border-bottom-color: rgb(99 102 241);
`,""],["border-b-indigo-600",`border-bottom-color: rgb(79 70 229);
`,""],["border-b-indigo-700",`border-bottom-color: rgb(67 56 202);
`,""],["border-b-indigo-800",`border-bottom-color: rgb(55 48 163);
`,""],["border-b-indigo-900",`border-bottom-color: rgb(49 46 129);
`,""],["border-b-indigo-950",`border-bottom-color: rgb(30 27 75);
`,""],["border-b-violet-50",`border-bottom-color: rgb(245 243 255);
`,""],["border-b-violet-100",`border-bottom-color: rgb(237 233 254);
`,""],["border-b-violet-200",`border-bottom-color: rgb(221 214 254);
`,""],["border-b-violet-300",`border-bottom-color: rgb(196 181 253);
`,""],["border-b-violet-400",`border-bottom-color: rgb(167 139 250);
`,""],["border-b-violet-500",`border-bottom-color: rgb(139 92 246);
`,""],["border-b-violet-600",`border-bottom-color: rgb(124 58 237);
`,""],["border-b-violet-700",`border-bottom-color: rgb(109 40 217);
`,""],["border-b-violet-800",`border-bottom-color: rgb(91 33 182);
`,""],["border-b-violet-900",`border-bottom-color: rgb(76 29 149);
`,""],["border-b-violet-950",`border-bottom-color: rgb(46 16 101);
`,""],["border-b-purple-50",`border-bottom-color: rgb(250 245 255);
`,""],["border-b-purple-100",`border-bottom-color: rgb(243 232 255);
`,""],["border-b-purple-200",`border-bottom-color: rgb(233 213 255);
`,""],["border-b-purple-300",`border-bottom-color: rgb(216 180 254);
`,""],["border-b-purple-400",`border-bottom-color: rgb(192 132 252);
`,""],["border-b-purple-500",`border-bottom-color: rgb(168 85 247);
`,""],["border-b-purple-600",`border-bottom-color: rgb(147 51 234);
`,""],["border-b-purple-700",`border-bottom-color: rgb(126 34 206);
`,""],["border-b-purple-800",`border-bottom-color: rgb(107 33 168);
`,""],["border-b-purple-900",`border-bottom-color: rgb(88 28 135);
`,""],["border-b-purple-950",`border-bottom-color: rgb(59 7 100);
`,""],["border-b-fuchsia-50",`border-bottom-color: rgb(253 244 255);
`,""],["border-b-fuchsia-100",`border-bottom-color: rgb(250 232 255);
`,""],["border-b-fuchsia-200",`border-bottom-color: rgb(245 208 254);
`,""],["border-b-fuchsia-300",`border-bottom-color: rgb(240 171 252);
`,""],["border-b-fuchsia-400",`border-bottom-color: rgb(232 121 249);
`,""],["border-b-fuchsia-500",`border-bottom-color: rgb(217 70 239);
`,""],["border-b-fuchsia-600",`border-bottom-color: rgb(192 38 211);
`,""],["border-b-fuchsia-700",`border-bottom-color: rgb(162 28 175);
`,""],["border-b-fuchsia-800",`border-bottom-color: rgb(134 25 143);
`,""],["border-b-fuchsia-900",`border-bottom-color: rgb(112 26 117);
`,""],["border-b-fuchsia-950",`border-bottom-color: rgb(74 4 78);
`,""],["border-b-pink-50",`border-bottom-color: rgb(253 242 248);
`,""],["border-b-pink-100",`border-bottom-color: rgb(252 231 243);
`,""],["border-b-pink-200",`border-bottom-color: rgb(251 207 232);
`,""],["border-b-pink-300",`border-bottom-color: rgb(249 168 212);
`,""],["border-b-pink-400",`border-bottom-color: rgb(244 114 182);
`,""],["border-b-pink-500",`border-bottom-color: rgb(236 72 153);
`,""],["border-b-pink-600",`border-bottom-color: rgb(219 39 119);
`,""],["border-b-pink-700",`border-bottom-color: rgb(190 24 93);
`,""],["border-b-pink-800",`border-bottom-color: rgb(157 23 77);
`,""],["border-b-pink-900",`border-bottom-color: rgb(131 24 67);
`,""],["border-b-pink-950",`border-bottom-color: rgb(80 7 36);
`,""],["border-b-rose-50",`border-bottom-color: rgb(255 241 242);
`,""],["border-b-rose-100",`border-bottom-color: rgb(255 228 230);
`,""],["border-b-rose-200",`border-bottom-color: rgb(254 205 211);
`,""],["border-b-rose-300",`border-bottom-color: rgb(253 164 175);
`,""],["border-b-rose-400",`border-bottom-color: rgb(251 113 133);
`,""],["border-b-rose-500",`border-bottom-color: rgb(244 63 94);
`,""],["border-b-rose-600",`border-bottom-color: rgb(225 29 72);
`,""],["border-b-rose-700",`border-bottom-color: rgb(190 18 60);
`,""],["border-b-rose-800",`border-bottom-color: rgb(159 18 57);
`,""],["border-b-rose-900",`border-bottom-color: rgb(136 19 55);
`,""],["border-b-rose-950",`border-bottom-color: rgb(76 5 25);
`,""],["border-l-inherit",`border-left-color: inherit;
`,""],["border-l-current",`border-left-color: currentColor;
`,""],["border-l-transparent",`border-left-color: transparent;
`,""],["border-l-black",`border-left-color: rgb(0 0 0);
`,""],["border-l-white",`border-left-color: rgb(255 255 255);
`,""],["border-l-slate-50",`border-left-color: rgb(248 250 252);
`,""],["border-l-slate-100",`border-left-color: rgb(241 245 249);
`,""],["border-l-slate-200",`border-left-color: rgb(226 232 240);
`,""],["border-l-slate-300",`border-left-color: rgb(203 213 225);
`,""],["border-l-slate-400",`border-left-color: rgb(148 163 184);
`,""],["border-l-slate-500",`border-left-color: rgb(100 116 139);
`,""],["border-l-slate-600",`border-left-color: rgb(71 85 105);
`,""],["border-l-slate-700",`border-left-color: rgb(51 65 85);
`,""],["border-l-slate-800",`border-left-color: rgb(30 41 59);
`,""],["border-l-slate-900",`border-left-color: rgb(15 23 42);
`,""],["border-l-slate-950",`border-left-color: rgb(2 6 23);
`,""],["border-l-gray-50",`border-left-color: rgb(249 250 251);
`,""],["border-l-gray-100",`border-left-color: rgb(243 244 246);
`,""],["border-l-gray-200",`border-left-color: rgb(229 231 235);
`,""],["border-l-gray-300",`border-left-color: rgb(209 213 219);
`,""],["border-l-gray-400",`border-left-color: rgb(156 163 175);
`,""],["border-l-gray-500",`border-left-color: rgb(107 114 128);
`,""],["border-l-gray-600",`border-left-color: rgb(75 85 99);
`,""],["border-l-gray-700",`border-left-color: rgb(55 65 81);
`,""],["border-l-gray-800",`border-left-color: rgb(31 41 55);
`,""],["border-l-gray-900",`border-left-color: rgb(17 24 39);
`,""],["border-l-gray-950",`border-left-color: rgb(3 7 18);
`,""],["border-l-zinc-50",`border-left-color: rgb(250 250 250);
`,""],["border-l-zinc-100",`border-left-color: rgb(244 244 245);
`,""],["border-l-zinc-200",`border-left-color: rgb(228 228 231);
`,""],["border-l-zinc-300",`border-left-color: rgb(212 212 216);
`,""],["border-l-zinc-400",`border-left-color: rgb(161 161 170);
`,""],["border-l-zinc-500",`border-left-color: rgb(113 113 122);
`,""],["border-l-zinc-600",`border-left-color: rgb(82 82 91);
`,""],["border-l-zinc-700",`border-left-color: rgb(63 63 70);
`,""],["border-l-zinc-800",`border-left-color: rgb(39 39 42);
`,""],["border-l-zinc-900",`border-left-color: rgb(24 24 27);
`,""],["border-l-zinc-950",`border-left-color: rgb(9 9 11);
`,""],["border-l-neutral-50",`border-left-color: rgb(250 250 250);
`,""],["border-l-neutral-100",`border-left-color: rgb(245 245 245);
`,""],["border-l-neutral-200",`border-left-color: rgb(229 229 229);
`,""],["border-l-neutral-300",`border-left-color: rgb(212 212 212);
`,""],["border-l-neutral-400",`border-left-color: rgb(163 163 163);
`,""],["border-l-neutral-500",`border-left-color: rgb(115 115 115);
`,""],["border-l-neutral-600",`border-left-color: rgb(82 82 82);
`,""],["border-l-neutral-700",`border-left-color: rgb(64 64 64);
`,""],["border-l-neutral-800",`border-left-color: rgb(38 38 38);
`,""],["border-l-neutral-900",`border-left-color: rgb(23 23 23);
`,""],["border-l-neutral-950",`border-left-color: rgb(10 10 10);
`,""],["border-l-stone-50",`border-left-color: rgb(250 250 249);
`,""],["border-l-stone-100",`border-left-color: rgb(245 245 244);
`,""],["border-l-stone-200",`border-left-color: rgb(231 229 228);
`,""],["border-l-stone-300",`border-left-color: rgb(214 211 209);
`,""],["border-l-stone-400",`border-left-color: rgb(168 162 158);
`,""],["border-l-stone-500",`border-left-color: rgb(120 113 108);
`,""],["border-l-stone-600",`border-left-color: rgb(87 83 78);
`,""],["border-l-stone-700",`border-left-color: rgb(68 64 60);
`,""],["border-l-stone-800",`border-left-color: rgb(41 37 36);
`,""],["border-l-stone-900",`border-left-color: rgb(28 25 23);
`,""],["border-l-stone-950",`border-left-color: rgb(12 10 9);
`,""],["border-l-red-50",`border-left-color: rgb(254 242 242);
`,""],["border-l-red-100",`border-left-color: rgb(254 226 226);
`,""],["border-l-red-200",`border-left-color: rgb(254 202 202);
`,""],["border-l-red-300",`border-left-color: rgb(252 165 165);
`,""],["border-l-red-400",`border-left-color: rgb(248 113 113);
`,""],["border-l-red-500",`border-left-color: rgb(239 68 68);
`,""],["border-l-red-600",`border-left-color: rgb(220 38 38);
`,""],["border-l-red-700",`border-left-color: rgb(185 28 28);
`,""],["border-l-red-800",`border-left-color: rgb(153 27 27);
`,""],["border-l-red-900",`border-left-color: rgb(127 29 29);
`,""],["border-l-red-950",`border-left-color: rgb(69 10 10);
`,""],["border-l-orange-50",`border-left-color: rgb(255 247 237);
`,""],["border-l-orange-100",`border-left-color: rgb(255 237 213);
`,""],["border-l-orange-200",`border-left-color: rgb(254 215 170);
`,""],["border-l-orange-300",`border-left-color: rgb(253 186 116);
`,""],["border-l-orange-400",`border-left-color: rgb(251 146 60);
`,""],["border-l-orange-500",`border-left-color: rgb(249 115 22);
`,""],["border-l-orange-600",`border-left-color: rgb(234 88 12);
`,""],["border-l-orange-700",`border-left-color: rgb(194 65 12);
`,""],["border-l-orange-800",`border-left-color: rgb(154 52 18);
`,""],["border-l-orange-900",`border-left-color: rgb(124 45 18);
`,""],["border-l-orange-950",`border-left-color: rgb(67 20 7);
`,""],["border-l-amber-50",`border-left-color: rgb(255 251 235);
`,""],["border-l-amber-100",`border-left-color: rgb(254 243 199);
`,""],["border-l-amber-200",`border-left-color: rgb(253 230 138);
`,""],["border-l-amber-300",`border-left-color: rgb(252 211 77);
`,""],["border-l-amber-400",`border-left-color: rgb(251 191 36);
`,""],["border-l-amber-500",`border-left-color: rgb(245 158 11);
`,""],["border-l-amber-600",`border-left-color: rgb(217 119 6);
`,""],["border-l-amber-700",`border-left-color: rgb(180 83 9);
`,""],["border-l-amber-800",`border-left-color: rgb(146 64 14);
`,""],["border-l-amber-900",`border-left-color: rgb(120 53 15);
`,""],["border-l-amber-950",`border-left-color: rgb(69 26 3);
`,""],["border-l-yellow-50",`border-left-color: rgb(254 252 232);
`,""],["border-l-yellow-100",`border-left-color: rgb(254 249 195);
`,""],["border-l-yellow-200",`border-left-color: rgb(254 240 138);
`,""],["border-l-yellow-300",`border-left-color: rgb(253 224 71);
`,""],["border-l-yellow-400",`border-left-color: rgb(250 204 21);
`,""],["border-l-yellow-500",`border-left-color: rgb(234 179 8);
`,""],["border-l-yellow-600",`border-left-color: rgb(202 138 4);
`,""],["border-l-yellow-700",`border-left-color: rgb(161 98 7);
`,""],["border-l-yellow-800",`border-left-color: rgb(133 77 14);
`,""],["border-l-yellow-900",`border-left-color: rgb(113 63 18);
`,""],["border-l-yellow-950",`border-left-color: rgb(66 32 6);
`,""],["border-l-lime-50",`border-left-color: rgb(247 254 231);
`,""],["border-l-lime-100",`border-left-color: rgb(236 252 203);
`,""],["border-l-lime-200",`border-left-color: rgb(217 249 157);
`,""],["border-l-lime-300",`border-left-color: rgb(190 242 100);
`,""],["border-l-lime-400",`border-left-color: rgb(163 230 53);
`,""],["border-l-lime-500",`border-left-color: rgb(132 204 22);
`,""],["border-l-lime-600",`border-left-color: rgb(101 163 13);
`,""],["border-l-lime-700",`border-left-color: rgb(77 124 15);
`,""],["border-l-lime-800",`border-left-color: rgb(63 98 18);
`,""],["border-l-lime-900",`border-left-color: rgb(54 83 20);
`,""],["border-l-lime-950",`border-left-color: rgb(26 46 5);
`,""],["border-l-green-50",`border-left-color: rgb(240 253 244);
`,""],["border-l-green-100",`border-left-color: rgb(220 252 231);
`,""],["border-l-green-200",`border-left-color: rgb(187 247 208);
`,""],["border-l-green-300",`border-left-color: rgb(134 239 172);
`,""],["border-l-green-400",`border-left-color: rgb(74 222 128);
`,""],["border-l-green-500",`border-left-color: rgb(34 197 94);
`,""],["border-l-green-600",`border-left-color: rgb(22 163 74);
`,""],["border-l-green-700",`border-left-color: rgb(21 128 61);
`,""],["border-l-green-800",`border-left-color: rgb(22 101 52);
`,""],["border-l-green-900",`border-left-color: rgb(20 83 45);
`,""],["border-l-green-950",`border-left-color: rgb(5 46 22);
`,""],["border-l-emerald-50",`border-left-color: rgb(236 253 245);
`,""],["border-l-emerald-100",`border-left-color: rgb(209 250 229);
`,""],["border-l-emerald-200",`border-left-color: rgb(167 243 208);
`,""],["border-l-emerald-300",`border-left-color: rgb(110 231 183);
`,""],["border-l-emerald-400",`border-left-color: rgb(52 211 153);
`,""],["border-l-emerald-500",`border-left-color: rgb(16 185 129);
`,""],["border-l-emerald-600",`border-left-color: rgb(5 150 105);
`,""],["border-l-emerald-700",`border-left-color: rgb(4 120 87);
`,""],["border-l-emerald-800",`border-left-color: rgb(6 95 70);
`,""],["border-l-emerald-900",`border-left-color: rgb(6 78 59);
`,""],["border-l-emerald-950",`border-left-color: rgb(2 44 34);
`,""],["border-l-teal-50",`border-left-color: rgb(240 253 250);
`,""],["border-l-teal-100",`border-left-color: rgb(204 251 241);
`,""],["border-l-teal-200",`border-left-color: rgb(153 246 228);
`,""],["border-l-teal-300",`border-left-color: rgb(94 234 212);
`,""],["border-l-teal-400",`border-left-color: rgb(45 212 191);
`,""],["border-l-teal-500",`border-left-color: rgb(20 184 166);
`,""],["border-l-teal-600",`border-left-color: rgb(13 148 136);
`,""],["border-l-teal-700",`border-left-color: rgb(15 118 110);
`,""],["border-l-teal-800",`border-left-color: rgb(17 94 89);
`,""],["border-l-teal-900",`border-left-color: rgb(19 78 74);
`,""],["border-l-teal-950",`border-left-color: rgb(4 47 46);
`,""],["border-l-cyan-50",`border-left-color: rgb(236 254 255);
`,""],["border-l-cyan-100",`border-left-color: rgb(207 250 254);
`,""],["border-l-cyan-200",`border-left-color: rgb(165 243 252);
`,""],["border-l-cyan-300",`border-left-color: rgb(103 232 249);
`,""],["border-l-cyan-400",`border-left-color: rgb(34 211 238);
`,""],["border-l-cyan-500",`border-left-color: rgb(6 182 212);
`,""],["border-l-cyan-600",`border-left-color: rgb(8 145 178);
`,""],["border-l-cyan-700",`border-left-color: rgb(14 116 144);
`,""],["border-l-cyan-800",`border-left-color: rgb(21 94 117);
`,""],["border-l-cyan-900",`border-left-color: rgb(22 78 99);
`,""],["border-l-cyan-950",`border-left-color: rgb(8 51 68);
`,""],["border-l-sky-50",`border-left-color: rgb(240 249 255);
`,""],["border-l-sky-100",`border-left-color: rgb(224 242 254);
`,""],["border-l-sky-200",`border-left-color: rgb(186 230 253);
`,""],["border-l-sky-300",`border-left-color: rgb(125 211 252);
`,""],["border-l-sky-400",`border-left-color: rgb(56 189 248);
`,""],["border-l-sky-500",`border-left-color: rgb(14 165 233);
`,""],["border-l-sky-600",`border-left-color: rgb(2 132 199);
`,""],["border-l-sky-700",`border-left-color: rgb(3 105 161);
`,""],["border-l-sky-800",`border-left-color: rgb(7 89 133);
`,""],["border-l-sky-900",`border-left-color: rgb(12 74 110);
`,""],["border-l-sky-950",`border-left-color: rgb(8 47 73);
`,""],["border-l-blue-50",`border-left-color: rgb(239 246 255);
`,""],["border-l-blue-100",`border-left-color: rgb(219 234 254);
`,""],["border-l-blue-200",`border-left-color: rgb(191 219 254);
`,""],["border-l-blue-300",`border-left-color: rgb(147 197 253);
`,""],["border-l-blue-400",`border-left-color: rgb(96 165 250);
`,""],["border-l-blue-500",`border-left-color: rgb(59 130 246);
`,""],["border-l-blue-600",`border-left-color: rgb(37 99 235);
`,""],["border-l-blue-700",`border-left-color: rgb(29 78 216);
`,""],["border-l-blue-800",`border-left-color: rgb(30 64 175);
`,""],["border-l-blue-900",`border-left-color: rgb(30 58 138);
`,""],["border-l-blue-950",`border-left-color: rgb(23 37 84);
`,""],["border-l-indigo-50",`border-left-color: rgb(238 242 255);
`,""],["border-l-indigo-100",`border-left-color: rgb(224 231 255);
`,""],["border-l-indigo-200",`border-left-color: rgb(199 210 254);
`,""],["border-l-indigo-300",`border-left-color: rgb(165 180 252);
`,""],["border-l-indigo-400",`border-left-color: rgb(129 140 248);
`,""],["border-l-indigo-500",`border-left-color: rgb(99 102 241);
`,""],["border-l-indigo-600",`border-left-color: rgb(79 70 229);
`,""],["border-l-indigo-700",`border-left-color: rgb(67 56 202);
`,""],["border-l-indigo-800",`border-left-color: rgb(55 48 163);
`,""],["border-l-indigo-900",`border-left-color: rgb(49 46 129);
`,""],["border-l-indigo-950",`border-left-color: rgb(30 27 75);
`,""],["border-l-violet-50",`border-left-color: rgb(245 243 255);
`,""],["border-l-violet-100",`border-left-color: rgb(237 233 254);
`,""],["border-l-violet-200",`border-left-color: rgb(221 214 254);
`,""],["border-l-violet-300",`border-left-color: rgb(196 181 253);
`,""],["border-l-violet-400",`border-left-color: rgb(167 139 250);
`,""],["border-l-violet-500",`border-left-color: rgb(139 92 246);
`,""],["border-l-violet-600",`border-left-color: rgb(124 58 237);
`,""],["border-l-violet-700",`border-left-color: rgb(109 40 217);
`,""],["border-l-violet-800",`border-left-color: rgb(91 33 182);
`,""],["border-l-violet-900",`border-left-color: rgb(76 29 149);
`,""],["border-l-violet-950",`border-left-color: rgb(46 16 101);
`,""],["border-l-purple-50",`border-left-color: rgb(250 245 255);
`,""],["border-l-purple-100",`border-left-color: rgb(243 232 255);
`,""],["border-l-purple-200",`border-left-color: rgb(233 213 255);
`,""],["border-l-purple-300",`border-left-color: rgb(216 180 254);
`,""],["border-l-purple-400",`border-left-color: rgb(192 132 252);
`,""],["border-l-purple-500",`border-left-color: rgb(168 85 247);
`,""],["border-l-purple-600",`border-left-color: rgb(147 51 234);
`,""],["border-l-purple-700",`border-left-color: rgb(126 34 206);
`,""],["border-l-purple-800",`border-left-color: rgb(107 33 168);
`,""],["border-l-purple-900",`border-left-color: rgb(88 28 135);
`,""],["border-l-purple-950",`border-left-color: rgb(59 7 100);
`,""],["border-l-fuchsia-50",`border-left-color: rgb(253 244 255);
`,""],["border-l-fuchsia-100",`border-left-color: rgb(250 232 255);
`,""],["border-l-fuchsia-200",`border-left-color: rgb(245 208 254);
`,""],["border-l-fuchsia-300",`border-left-color: rgb(240 171 252);
`,""],["border-l-fuchsia-400",`border-left-color: rgb(232 121 249);
`,""],["border-l-fuchsia-500",`border-left-color: rgb(217 70 239);
`,""],["border-l-fuchsia-600",`border-left-color: rgb(192 38 211);
`,""],["border-l-fuchsia-700",`border-left-color: rgb(162 28 175);
`,""],["border-l-fuchsia-800",`border-left-color: rgb(134 25 143);
`,""],["border-l-fuchsia-900",`border-left-color: rgb(112 26 117);
`,""],["border-l-fuchsia-950",`border-left-color: rgb(74 4 78);
`,""],["border-l-pink-50",`border-left-color: rgb(253 242 248);
`,""],["border-l-pink-100",`border-left-color: rgb(252 231 243);
`,""],["border-l-pink-200",`border-left-color: rgb(251 207 232);
`,""],["border-l-pink-300",`border-left-color: rgb(249 168 212);
`,""],["border-l-pink-400",`border-left-color: rgb(244 114 182);
`,""],["border-l-pink-500",`border-left-color: rgb(236 72 153);
`,""],["border-l-pink-600",`border-left-color: rgb(219 39 119);
`,""],["border-l-pink-700",`border-left-color: rgb(190 24 93);
`,""],["border-l-pink-800",`border-left-color: rgb(157 23 77);
`,""],["border-l-pink-900",`border-left-color: rgb(131 24 67);
`,""],["border-l-pink-950",`border-left-color: rgb(80 7 36);
`,""],["border-l-rose-50",`border-left-color: rgb(255 241 242);
`,""],["border-l-rose-100",`border-left-color: rgb(255 228 230);
`,""],["border-l-rose-200",`border-left-color: rgb(254 205 211);
`,""],["border-l-rose-300",`border-left-color: rgb(253 164 175);
`,""],["border-l-rose-400",`border-left-color: rgb(251 113 133);
`,""],["border-l-rose-500",`border-left-color: rgb(244 63 94);
`,""],["border-l-rose-600",`border-left-color: rgb(225 29 72);
`,""],["border-l-rose-700",`border-left-color: rgb(190 18 60);
`,""],["border-l-rose-800",`border-left-color: rgb(159 18 57);
`,""],["border-l-rose-900",`border-left-color: rgb(136 19 55);
`,""],["border-l-rose-950",`border-left-color: rgb(76 5 25);
`,""]]},{url:"https://tailwindcss.com/docs/border-style",entry:"Border Style",description:"Utilities for controlling the style of an element's borders.",parameters:[["border-solid",`border-style: solid;
`],["border-dashed",`border-style: dashed;
`],["border-dotted",`border-style: dotted;
`],["border-double",`border-style: double;
`],["border-hidden",`border-style: hidden;
`],["border-none",`border-style: none;
`]]},{url:"https://tailwindcss.com/docs/divide-width",entry:"Divide Width",description:"Utilities for controlling the border width between elements.",parameters:[["divide-x-0 > * + *",`border-right-width: 0px;
border-left-width: 0px;
`],["divide-x-2 > * + *",`border-right-width: 0px;
border-left-width: 2px;
`],["divide-x-4 > * + *",`border-right-width: 0px;
border-left-width: 4px;
`],["divide-x-8 > * + *",`border-right-width: 0px;
border-left-width: 8px;
`],["divide-x > * + *",`border-right-width: 0px;
border-left-width: 1px;
`],["divide-y-0 > * + *",`border-top-width: 0px;
border-bottom-width: 0px;
`],["divide-y-2 > * + *",`border-top-width: 2px;
border-bottom-width: 0px;
`],["divide-y-4 > * + *",`border-top-width: 4px;
border-bottom-width: 0px;
`],["divide-y-8 > * + *",`border-top-width: 8px;
border-bottom-width: 0px;
`],["divide-y > * + *",`border-top-width: 1px;
border-bottom-width: 0px;
`],["divide-y-reverse > * + *",`--tw-divide-y-reverse: 1;
`],["divide-x-reverse > * + *",`--tw-divide-x-reverse: 1;
`]]},{url:"https://tailwindcss.com/docs/divide-color",entry:"Divide Color",description:"Utilities for controlling the border color between elements.",parameters:[["divide-inherit > * + *",`border-color: inherit;
`,""],["divide-current > * + *",`border-color: currentColor;
`,""],["divide-transparent > * + *",`border-color: transparent;
`,""],["divide-black > * + *",`border-color: rgb(0 0 0);
`,""],["divide-white > * + *",`border-color: rgb(255 255 255);
`,""],["divide-slate-50 > * + *",`border-color: rgb(248 250 252);
`,""],["divide-slate-100 > * + *",`border-color: rgb(241 245 249);
`,""],["divide-slate-200 > * + *",`border-color: rgb(226 232 240);
`,""],["divide-slate-300 > * + *",`border-color: rgb(203 213 225);
`,""],["divide-slate-400 > * + *",`border-color: rgb(148 163 184);
`,""],["divide-slate-500 > * + *",`border-color: rgb(100 116 139);
`,""],["divide-slate-600 > * + *",`border-color: rgb(71 85 105);
`,""],["divide-slate-700 > * + *",`border-color: rgb(51 65 85);
`,""],["divide-slate-800 > * + *",`border-color: rgb(30 41 59);
`,""],["divide-slate-900 > * + *",`border-color: rgb(15 23 42);
`,""],["divide-slate-950 > * + *",`border-color: rgb(2 6 23);
`,""],["divide-gray-50 > * + *",`border-color: rgb(249 250 251);
`,""],["divide-gray-100 > * + *",`border-color: rgb(243 244 246);
`,""],["divide-gray-200 > * + *",`border-color: rgb(229 231 235);
`,""],["divide-gray-300 > * + *",`border-color: rgb(209 213 219);
`,""],["divide-gray-400 > * + *",`border-color: rgb(156 163 175);
`,""],["divide-gray-500 > * + *",`border-color: rgb(107 114 128);
`,""],["divide-gray-600 > * + *",`border-color: rgb(75 85 99);
`,""],["divide-gray-700 > * + *",`border-color: rgb(55 65 81);
`,""],["divide-gray-800 > * + *",`border-color: rgb(31 41 55);
`,""],["divide-gray-900 > * + *",`border-color: rgb(17 24 39);
`,""],["divide-gray-950 > * + *",`border-color: rgb(3 7 18);
`,""],["divide-zinc-50 > * + *",`border-color: rgb(250 250 250);
`,""],["divide-zinc-100 > * + *",`border-color: rgb(244 244 245);
`,""],["divide-zinc-200 > * + *",`border-color: rgb(228 228 231);
`,""],["divide-zinc-300 > * + *",`border-color: rgb(212 212 216);
`,""],["divide-zinc-400 > * + *",`border-color: rgb(161 161 170);
`,""],["divide-zinc-500 > * + *",`border-color: rgb(113 113 122);
`,""],["divide-zinc-600 > * + *",`border-color: rgb(82 82 91);
`,""],["divide-zinc-700 > * + *",`border-color: rgb(63 63 70);
`,""],["divide-zinc-800 > * + *",`border-color: rgb(39 39 42);
`,""],["divide-zinc-900 > * + *",`border-color: rgb(24 24 27);
`,""],["divide-zinc-950 > * + *",`border-color: rgb(9 9 11);
`,""],["divide-neutral-50 > * + *",`border-color: rgb(250 250 250);
`,""],["divide-neutral-100 > * + *",`border-color: rgb(245 245 245);
`,""],["divide-neutral-200 > * + *",`border-color: rgb(229 229 229);
`,""],["divide-neutral-300 > * + *",`border-color: rgb(212 212 212);
`,""],["divide-neutral-400 > * + *",`border-color: rgb(163 163 163);
`,""],["divide-neutral-500 > * + *",`border-color: rgb(115 115 115);
`,""],["divide-neutral-600 > * + *",`border-color: rgb(82 82 82);
`,""],["divide-neutral-700 > * + *",`border-color: rgb(64 64 64);
`,""],["divide-neutral-800 > * + *",`border-color: rgb(38 38 38);
`,""],["divide-neutral-900 > * + *",`border-color: rgb(23 23 23);
`,""],["divide-neutral-950 > * + *",`border-color: rgb(10 10 10);
`,""],["divide-stone-50 > * + *",`border-color: rgb(250 250 249);
`,""],["divide-stone-100 > * + *",`border-color: rgb(245 245 244);
`,""],["divide-stone-200 > * + *",`border-color: rgb(231 229 228);
`,""],["divide-stone-300 > * + *",`border-color: rgb(214 211 209);
`,""],["divide-stone-400 > * + *",`border-color: rgb(168 162 158);
`,""],["divide-stone-500 > * + *",`border-color: rgb(120 113 108);
`,""],["divide-stone-600 > * + *",`border-color: rgb(87 83 78);
`,""],["divide-stone-700 > * + *",`border-color: rgb(68 64 60);
`,""],["divide-stone-800 > * + *",`border-color: rgb(41 37 36);
`,""],["divide-stone-900 > * + *",`border-color: rgb(28 25 23);
`,""],["divide-stone-950 > * + *",`border-color: rgb(12 10 9);
`,""],["divide-red-50 > * + *",`border-color: rgb(254 242 242);
`,""],["divide-red-100 > * + *",`border-color: rgb(254 226 226);
`,""],["divide-red-200 > * + *",`border-color: rgb(254 202 202);
`,""],["divide-red-300 > * + *",`border-color: rgb(252 165 165);
`,""],["divide-red-400 > * + *",`border-color: rgb(248 113 113);
`,""],["divide-red-500 > * + *",`border-color: rgb(239 68 68);
`,""],["divide-red-600 > * + *",`border-color: rgb(220 38 38);
`,""],["divide-red-700 > * + *",`border-color: rgb(185 28 28);
`,""],["divide-red-800 > * + *",`border-color: rgb(153 27 27);
`,""],["divide-red-900 > * + *",`border-color: rgb(127 29 29);
`,""],["divide-red-950 > * + *",`border-color: rgb(69 10 10);
`,""],["divide-orange-50 > * + *",`border-color: rgb(255 247 237);
`,""],["divide-orange-100 > * + *",`border-color: rgb(255 237 213);
`,""],["divide-orange-200 > * + *",`border-color: rgb(254 215 170);
`,""],["divide-orange-300 > * + *",`border-color: rgb(253 186 116);
`,""],["divide-orange-400 > * + *",`border-color: rgb(251 146 60);
`,""],["divide-orange-500 > * + *",`border-color: rgb(249 115 22);
`,""],["divide-orange-600 > * + *",`border-color: rgb(234 88 12);
`,""],["divide-orange-700 > * + *",`border-color: rgb(194 65 12);
`,""],["divide-orange-800 > * + *",`border-color: rgb(154 52 18);
`,""],["divide-orange-900 > * + *",`border-color: rgb(124 45 18);
`,""],["divide-orange-950 > * + *",`border-color: rgb(67 20 7);
`,""],["divide-amber-50 > * + *",`border-color: rgb(255 251 235);
`,""],["divide-amber-100 > * + *",`border-color: rgb(254 243 199);
`,""],["divide-amber-200 > * + *",`border-color: rgb(253 230 138);
`,""],["divide-amber-300 > * + *",`border-color: rgb(252 211 77);
`,""],["divide-amber-400 > * + *",`border-color: rgb(251 191 36);
`,""],["divide-amber-500 > * + *",`border-color: rgb(245 158 11);
`,""],["divide-amber-600 > * + *",`border-color: rgb(217 119 6);
`,""],["divide-amber-700 > * + *",`border-color: rgb(180 83 9);
`,""],["divide-amber-800 > * + *",`border-color: rgb(146 64 14);
`,""],["divide-amber-900 > * + *",`border-color: rgb(120 53 15);
`,""],["divide-amber-950 > * + *",`border-color: rgb(69 26 3);
`,""],["divide-yellow-50 > * + *",`border-color: rgb(254 252 232);
`,""],["divide-yellow-100 > * + *",`border-color: rgb(254 249 195);
`,""],["divide-yellow-200 > * + *",`border-color: rgb(254 240 138);
`,""],["divide-yellow-300 > * + *",`border-color: rgb(253 224 71);
`,""],["divide-yellow-400 > * + *",`border-color: rgb(250 204 21);
`,""],["divide-yellow-500 > * + *",`border-color: rgb(234 179 8);
`,""],["divide-yellow-600 > * + *",`border-color: rgb(202 138 4);
`,""],["divide-yellow-700 > * + *",`border-color: rgb(161 98 7);
`,""],["divide-yellow-800 > * + *",`border-color: rgb(133 77 14);
`,""],["divide-yellow-900 > * + *",`border-color: rgb(113 63 18);
`,""],["divide-yellow-950 > * + *",`border-color: rgb(66 32 6);
`,""],["divide-lime-50 > * + *",`border-color: rgb(247 254 231);
`,""],["divide-lime-100 > * + *",`border-color: rgb(236 252 203);
`,""],["divide-lime-200 > * + *",`border-color: rgb(217 249 157);
`,""],["divide-lime-300 > * + *",`border-color: rgb(190 242 100);
`,""],["divide-lime-400 > * + *",`border-color: rgb(163 230 53);
`,""],["divide-lime-500 > * + *",`border-color: rgb(132 204 22);
`,""],["divide-lime-600 > * + *",`border-color: rgb(101 163 13);
`,""],["divide-lime-700 > * + *",`border-color: rgb(77 124 15);
`,""],["divide-lime-800 > * + *",`border-color: rgb(63 98 18);
`,""],["divide-lime-900 > * + *",`border-color: rgb(54 83 20);
`,""],["divide-lime-950 > * + *",`border-color: rgb(26 46 5);
`,""],["divide-green-50 > * + *",`border-color: rgb(240 253 244);
`,""],["divide-green-100 > * + *",`border-color: rgb(220 252 231);
`,""],["divide-green-200 > * + *",`border-color: rgb(187 247 208);
`,""],["divide-green-300 > * + *",`border-color: rgb(134 239 172);
`,""],["divide-green-400 > * + *",`border-color: rgb(74 222 128);
`,""],["divide-green-500 > * + *",`border-color: rgb(34 197 94);
`,""],["divide-green-600 > * + *",`border-color: rgb(22 163 74);
`,""],["divide-green-700 > * + *",`border-color: rgb(21 128 61);
`,""],["divide-green-800 > * + *",`border-color: rgb(22 101 52);
`,""],["divide-green-900 > * + *",`border-color: rgb(20 83 45);
`,""],["divide-green-950 > * + *",`border-color: rgb(5 46 22);
`,""],["divide-emerald-50 > * + *",`border-color: rgb(236 253 245);
`,""],["divide-emerald-100 > * + *",`border-color: rgb(209 250 229);
`,""],["divide-emerald-200 > * + *",`border-color: rgb(167 243 208);
`,""],["divide-emerald-300 > * + *",`border-color: rgb(110 231 183);
`,""],["divide-emerald-400 > * + *",`border-color: rgb(52 211 153);
`,""],["divide-emerald-500 > * + *",`border-color: rgb(16 185 129);
`,""],["divide-emerald-600 > * + *",`border-color: rgb(5 150 105);
`,""],["divide-emerald-700 > * + *",`border-color: rgb(4 120 87);
`,""],["divide-emerald-800 > * + *",`border-color: rgb(6 95 70);
`,""],["divide-emerald-900 > * + *",`border-color: rgb(6 78 59);
`,""],["divide-emerald-950 > * + *",`border-color: rgb(2 44 34);
`,""],["divide-teal-50 > * + *",`border-color: rgb(240 253 250);
`,""],["divide-teal-100 > * + *",`border-color: rgb(204 251 241);
`,""],["divide-teal-200 > * + *",`border-color: rgb(153 246 228);
`,""],["divide-teal-300 > * + *",`border-color: rgb(94 234 212);
`,""],["divide-teal-400 > * + *",`border-color: rgb(45 212 191);
`,""],["divide-teal-500 > * + *",`border-color: rgb(20 184 166);
`,""],["divide-teal-600 > * + *",`border-color: rgb(13 148 136);
`,""],["divide-teal-700 > * + *",`border-color: rgb(15 118 110);
`,""],["divide-teal-800 > * + *",`border-color: rgb(17 94 89);
`,""],["divide-teal-900 > * + *",`border-color: rgb(19 78 74);
`,""],["divide-teal-950 > * + *",`border-color: rgb(4 47 46);
`,""],["divide-cyan-50 > * + *",`border-color: rgb(236 254 255);
`,""],["divide-cyan-100 > * + *",`border-color: rgb(207 250 254);
`,""],["divide-cyan-200 > * + *",`border-color: rgb(165 243 252);
`,""],["divide-cyan-300 > * + *",`border-color: rgb(103 232 249);
`,""],["divide-cyan-400 > * + *",`border-color: rgb(34 211 238);
`,""],["divide-cyan-500 > * + *",`border-color: rgb(6 182 212);
`,""],["divide-cyan-600 > * + *",`border-color: rgb(8 145 178);
`,""],["divide-cyan-700 > * + *",`border-color: rgb(14 116 144);
`,""],["divide-cyan-800 > * + *",`border-color: rgb(21 94 117);
`,""],["divide-cyan-900 > * + *",`border-color: rgb(22 78 99);
`,""],["divide-cyan-950 > * + *",`border-color: rgb(8 51 68);
`,""],["divide-sky-50 > * + *",`border-color: rgb(240 249 255);
`,""],["divide-sky-100 > * + *",`border-color: rgb(224 242 254);
`,""],["divide-sky-200 > * + *",`border-color: rgb(186 230 253);
`,""],["divide-sky-300 > * + *",`border-color: rgb(125 211 252);
`,""],["divide-sky-400 > * + *",`border-color: rgb(56 189 248);
`,""],["divide-sky-500 > * + *",`border-color: rgb(14 165 233);
`,""],["divide-sky-600 > * + *",`border-color: rgb(2 132 199);
`,""],["divide-sky-700 > * + *",`border-color: rgb(3 105 161);
`,""],["divide-sky-800 > * + *",`border-color: rgb(7 89 133);
`,""],["divide-sky-900 > * + *",`border-color: rgb(12 74 110);
`,""],["divide-sky-950 > * + *",`border-color: rgb(8 47 73);
`,""],["divide-blue-50 > * + *",`border-color: rgb(239 246 255);
`,""],["divide-blue-100 > * + *",`border-color: rgb(219 234 254);
`,""],["divide-blue-200 > * + *",`border-color: rgb(191 219 254);
`,""],["divide-blue-300 > * + *",`border-color: rgb(147 197 253);
`,""],["divide-blue-400 > * + *",`border-color: rgb(96 165 250);
`,""],["divide-blue-500 > * + *",`border-color: rgb(59 130 246);
`,""],["divide-blue-600 > * + *",`border-color: rgb(37 99 235);
`,""],["divide-blue-700 > * + *",`border-color: rgb(29 78 216);
`,""],["divide-blue-800 > * + *",`border-color: rgb(30 64 175);
`,""],["divide-blue-900 > * + *",`border-color: rgb(30 58 138);
`,""],["divide-blue-950 > * + *",`border-color: rgb(23 37 84);
`,""],["divide-indigo-50 > * + *",`border-color: rgb(238 242 255);
`,""],["divide-indigo-100 > * + *",`border-color: rgb(224 231 255);
`,""],["divide-indigo-200 > * + *",`border-color: rgb(199 210 254);
`,""],["divide-indigo-300 > * + *",`border-color: rgb(165 180 252);
`,""],["divide-indigo-400 > * + *",`border-color: rgb(129 140 248);
`,""],["divide-indigo-500 > * + *",`border-color: rgb(99 102 241);
`,""],["divide-indigo-600 > * + *",`border-color: rgb(79 70 229);
`,""],["divide-indigo-700 > * + *",`border-color: rgb(67 56 202);
`,""],["divide-indigo-800 > * + *",`border-color: rgb(55 48 163);
`,""],["divide-indigo-900 > * + *",`border-color: rgb(49 46 129);
`,""],["divide-indigo-950 > * + *",`border-color: rgb(30 27 75);
`,""],["divide-violet-50 > * + *",`border-color: rgb(245 243 255);
`,""],["divide-violet-100 > * + *",`border-color: rgb(237 233 254);
`,""],["divide-violet-200 > * + *",`border-color: rgb(221 214 254);
`,""],["divide-violet-300 > * + *",`border-color: rgb(196 181 253);
`,""],["divide-violet-400 > * + *",`border-color: rgb(167 139 250);
`,""],["divide-violet-500 > * + *",`border-color: rgb(139 92 246);
`,""],["divide-violet-600 > * + *",`border-color: rgb(124 58 237);
`,""],["divide-violet-700 > * + *",`border-color: rgb(109 40 217);
`,""],["divide-violet-800 > * + *",`border-color: rgb(91 33 182);
`,""],["divide-violet-900 > * + *",`border-color: rgb(76 29 149);
`,""],["divide-violet-950 > * + *",`border-color: rgb(46 16 101);
`,""],["divide-purple-50 > * + *",`border-color: rgb(250 245 255);
`,""],["divide-purple-100 > * + *",`border-color: rgb(243 232 255);
`,""],["divide-purple-200 > * + *",`border-color: rgb(233 213 255);
`,""],["divide-purple-300 > * + *",`border-color: rgb(216 180 254);
`,""],["divide-purple-400 > * + *",`border-color: rgb(192 132 252);
`,""],["divide-purple-500 > * + *",`border-color: rgb(168 85 247);
`,""],["divide-purple-600 > * + *",`border-color: rgb(147 51 234);
`,""],["divide-purple-700 > * + *",`border-color: rgb(126 34 206);
`,""],["divide-purple-800 > * + *",`border-color: rgb(107 33 168);
`,""],["divide-purple-900 > * + *",`border-color: rgb(88 28 135);
`,""],["divide-purple-950 > * + *",`border-color: rgb(59 7 100);
`,""],["divide-fuchsia-50 > * + *",`border-color: rgb(253 244 255);
`,""],["divide-fuchsia-100 > * + *",`border-color: rgb(250 232 255);
`,""],["divide-fuchsia-200 > * + *",`border-color: rgb(245 208 254);
`,""],["divide-fuchsia-300 > * + *",`border-color: rgb(240 171 252);
`,""],["divide-fuchsia-400 > * + *",`border-color: rgb(232 121 249);
`,""],["divide-fuchsia-500 > * + *",`border-color: rgb(217 70 239);
`,""],["divide-fuchsia-600 > * + *",`border-color: rgb(192 38 211);
`,""],["divide-fuchsia-700 > * + *",`border-color: rgb(162 28 175);
`,""],["divide-fuchsia-800 > * + *",`border-color: rgb(134 25 143);
`,""],["divide-fuchsia-900 > * + *",`border-color: rgb(112 26 117);
`,""],["divide-fuchsia-950 > * + *",`border-color: rgb(74 4 78);
`,""],["divide-pink-50 > * + *",`border-color: rgb(253 242 248);
`,""],["divide-pink-100 > * + *",`border-color: rgb(252 231 243);
`,""],["divide-pink-200 > * + *",`border-color: rgb(251 207 232);
`,""],["divide-pink-300 > * + *",`border-color: rgb(249 168 212);
`,""],["divide-pink-400 > * + *",`border-color: rgb(244 114 182);
`,""],["divide-pink-500 > * + *",`border-color: rgb(236 72 153);
`,""],["divide-pink-600 > * + *",`border-color: rgb(219 39 119);
`,""],["divide-pink-700 > * + *",`border-color: rgb(190 24 93);
`,""],["divide-pink-800 > * + *",`border-color: rgb(157 23 77);
`,""],["divide-pink-900 > * + *",`border-color: rgb(131 24 67);
`,""],["divide-pink-950 > * + *",`border-color: rgb(80 7 36);
`,""],["divide-rose-50 > * + *",`border-color: rgb(255 241 242);
`,""],["divide-rose-100 > * + *",`border-color: rgb(255 228 230);
`,""],["divide-rose-200 > * + *",`border-color: rgb(254 205 211);
`,""],["divide-rose-300 > * + *",`border-color: rgb(253 164 175);
`,""],["divide-rose-400 > * + *",`border-color: rgb(251 113 133);
`,""],["divide-rose-500 > * + *",`border-color: rgb(244 63 94);
`,""],["divide-rose-600 > * + *",`border-color: rgb(225 29 72);
`,""],["divide-rose-700 > * + *",`border-color: rgb(190 18 60);
`,""],["divide-rose-800 > * + *",`border-color: rgb(159 18 57);
`,""],["divide-rose-900 > * + *",`border-color: rgb(136 19 55);
`,""],["divide-rose-950 > * + *",`border-color: rgb(76 5 25);
`,""]]},{url:"https://tailwindcss.com/docs/divide-style",entry:"Divide Style",description:"Utilities for controlling the border style between elements.",parameters:[["divide-solid > * + *",`border-style: solid;
`],["divide-dashed > * + *",`border-style: dashed;
`],["divide-dotted > * + *",`border-style: dotted;
`],["divide-double > * + *",`border-style: double;
`],["divide-none > * + *",`border-style: none;
`]]},{url:"https://tailwindcss.com/docs/outline-width",entry:"Outline Width",description:"Utilities for controlling the width of an element's outline.",parameters:[["outline-0",`outline-width: 0px;
`],["outline-1",`outline-width: 1px;
`],["outline-2",`outline-width: 2px;
`],["outline-4",`outline-width: 4px;
`],["outline-8",`outline-width: 8px;
`]]},{url:"https://tailwindcss.com/docs/outline-color",entry:"Outline Color",description:"Utilities for controlling the color of an element's outline.",parameters:[["outline-inherit",`outline-color: inherit;
`],["outline-current",`outline-color: currentColor;
`],["outline-transparent",`outline-color: transparent;
`],["outline-black",`outline-color: #000;
`],["outline-white",`outline-color: #fff;
`],["outline-slate-50",`outline-color: #f8fafc;
`],["outline-slate-100",`outline-color: #f1f5f9;
`],["outline-slate-200",`outline-color: #e2e8f0;
`],["outline-slate-300",`outline-color: #cbd5e1;
`],["outline-slate-400",`outline-color: #94a3b8;
`],["outline-slate-500",`outline-color: #64748b;
`],["outline-slate-600",`outline-color: #475569;
`],["outline-slate-700",`outline-color: #334155;
`],["outline-slate-800",`outline-color: #1e293b;
`],["outline-slate-900",`outline-color: #0f172a;
`],["outline-slate-950",`outline-color: #020617;
`],["outline-gray-50",`outline-color: #f9fafb;
`],["outline-gray-100",`outline-color: #f3f4f6;
`],["outline-gray-200",`outline-color: #e5e7eb;
`],["outline-gray-300",`outline-color: #d1d5db;
`],["outline-gray-400",`outline-color: #9ca3af;
`],["outline-gray-500",`outline-color: #6b7280;
`],["outline-gray-600",`outline-color: #4b5563;
`],["outline-gray-700",`outline-color: #374151;
`],["outline-gray-800",`outline-color: #1f2937;
`],["outline-gray-900",`outline-color: #111827;
`],["outline-gray-950",`outline-color: #030712;
`],["outline-zinc-50",`outline-color: #fafafa;
`],["outline-zinc-100",`outline-color: #f4f4f5;
`],["outline-zinc-200",`outline-color: #e4e4e7;
`],["outline-zinc-300",`outline-color: #d4d4d8;
`],["outline-zinc-400",`outline-color: #a1a1aa;
`],["outline-zinc-500",`outline-color: #71717a;
`],["outline-zinc-600",`outline-color: #52525b;
`],["outline-zinc-700",`outline-color: #3f3f46;
`],["outline-zinc-800",`outline-color: #27272a;
`],["outline-zinc-900",`outline-color: #18181b;
`],["outline-zinc-950",`outline-color: #09090b;
`],["outline-neutral-50",`outline-color: #fafafa;
`],["outline-neutral-100",`outline-color: #f5f5f5;
`],["outline-neutral-200",`outline-color: #e5e5e5;
`],["outline-neutral-300",`outline-color: #d4d4d4;
`],["outline-neutral-400",`outline-color: #a3a3a3;
`],["outline-neutral-500",`outline-color: #737373;
`],["outline-neutral-600",`outline-color: #525252;
`],["outline-neutral-700",`outline-color: #404040;
`],["outline-neutral-800",`outline-color: #262626;
`],["outline-neutral-900",`outline-color: #171717;
`],["outline-neutral-950",`outline-color: #0a0a0a;
`],["outline-stone-50",`outline-color: #fafaf9;
`],["outline-stone-100",`outline-color: #f5f5f4;
`],["outline-stone-200",`outline-color: #e7e5e4;
`],["outline-stone-300",`outline-color: #d6d3d1;
`],["outline-stone-400",`outline-color: #a8a29e;
`],["outline-stone-500",`outline-color: #78716c;
`],["outline-stone-600",`outline-color: #57534e;
`],["outline-stone-700",`outline-color: #44403c;
`],["outline-stone-800",`outline-color: #292524;
`],["outline-stone-900",`outline-color: #1c1917;
`],["outline-stone-950",`outline-color: #0c0a09;
`],["outline-red-50",`outline-color: #fef2f2;
`],["outline-red-100",`outline-color: #fee2e2;
`],["outline-red-200",`outline-color: #fecaca;
`],["outline-red-300",`outline-color: #fca5a5;
`],["outline-red-400",`outline-color: #f87171;
`],["outline-red-500",`outline-color: #ef4444;
`],["outline-red-600",`outline-color: #dc2626;
`],["outline-red-700",`outline-color: #b91c1c;
`],["outline-red-800",`outline-color: #991b1b;
`],["outline-red-900",`outline-color: #7f1d1d;
`],["outline-red-950",`outline-color: #450a0a;
`],["outline-orange-50",`outline-color: #fff7ed;
`],["outline-orange-100",`outline-color: #ffedd5;
`],["outline-orange-200",`outline-color: #fed7aa;
`],["outline-orange-300",`outline-color: #fdba74;
`],["outline-orange-400",`outline-color: #fb923c;
`],["outline-orange-500",`outline-color: #f97316;
`],["outline-orange-600",`outline-color: #ea580c;
`],["outline-orange-700",`outline-color: #c2410c;
`],["outline-orange-800",`outline-color: #9a3412;
`],["outline-orange-900",`outline-color: #7c2d12;
`],["outline-orange-950",`outline-color: #431407;
`],["outline-amber-50",`outline-color: #fffbeb;
`],["outline-amber-100",`outline-color: #fef3c7;
`],["outline-amber-200",`outline-color: #fde68a;
`],["outline-amber-300",`outline-color: #fcd34d;
`],["outline-amber-400",`outline-color: #fbbf24;
`],["outline-amber-500",`outline-color: #f59e0b;
`],["outline-amber-600",`outline-color: #d97706;
`],["outline-amber-700",`outline-color: #b45309;
`],["outline-amber-800",`outline-color: #92400e;
`],["outline-amber-900",`outline-color: #78350f;
`],["outline-amber-950",`outline-color: #451a03;
`],["outline-yellow-50",`outline-color: #fefce8;
`],["outline-yellow-100",`outline-color: #fef9c3;
`],["outline-yellow-200",`outline-color: #fef08a;
`],["outline-yellow-300",`outline-color: #fde047;
`],["outline-yellow-400",`outline-color: #facc15;
`],["outline-yellow-500",`outline-color: #eab308;
`],["outline-yellow-600",`outline-color: #ca8a04;
`],["outline-yellow-700",`outline-color: #a16207;
`],["outline-yellow-800",`outline-color: #854d0e;
`],["outline-yellow-900",`outline-color: #713f12;
`],["outline-yellow-950",`outline-color: #422006;
`],["outline-lime-50",`outline-color: #f7fee7;
`],["outline-lime-100",`outline-color: #ecfccb;
`],["outline-lime-200",`outline-color: #d9f99d;
`],["outline-lime-300",`outline-color: #bef264;
`],["outline-lime-400",`outline-color: #a3e635;
`],["outline-lime-500",`outline-color: #84cc16;
`],["outline-lime-600",`outline-color: #65a30d;
`],["outline-lime-700",`outline-color: #4d7c0f;
`],["outline-lime-800",`outline-color: #3f6212;
`],["outline-lime-900",`outline-color: #365314;
`],["outline-lime-950",`outline-color: #1a2e05;
`],["outline-green-50",`outline-color: #f0fdf4;
`],["outline-green-100",`outline-color: #dcfce7;
`],["outline-green-200",`outline-color: #bbf7d0;
`],["outline-green-300",`outline-color: #86efac;
`],["outline-green-400",`outline-color: #4ade80;
`],["outline-green-500",`outline-color: #22c55e;
`],["outline-green-600",`outline-color: #16a34a;
`],["outline-green-700",`outline-color: #15803d;
`],["outline-green-800",`outline-color: #166534;
`],["outline-green-900",`outline-color: #14532d;
`],["outline-green-950",`outline-color: #052e16;
`],["outline-emerald-50",`outline-color: #ecfdf5;
`],["outline-emerald-100",`outline-color: #d1fae5;
`],["outline-emerald-200",`outline-color: #a7f3d0;
`],["outline-emerald-300",`outline-color: #6ee7b7;
`],["outline-emerald-400",`outline-color: #34d399;
`],["outline-emerald-500",`outline-color: #10b981;
`],["outline-emerald-600",`outline-color: #059669;
`],["outline-emerald-700",`outline-color: #047857;
`],["outline-emerald-800",`outline-color: #065f46;
`],["outline-emerald-900",`outline-color: #064e3b;
`],["outline-emerald-950",`outline-color: #022c22;
`],["outline-teal-50",`outline-color: #f0fdfa;
`],["outline-teal-100",`outline-color: #ccfbf1;
`],["outline-teal-200",`outline-color: #99f6e4;
`],["outline-teal-300",`outline-color: #5eead4;
`],["outline-teal-400",`outline-color: #2dd4bf;
`],["outline-teal-500",`outline-color: #14b8a6;
`],["outline-teal-600",`outline-color: #0d9488;
`],["outline-teal-700",`outline-color: #0f766e;
`],["outline-teal-800",`outline-color: #115e59;
`],["outline-teal-900",`outline-color: #134e4a;
`],["outline-teal-950",`outline-color: #042f2e;
`],["outline-cyan-50",`outline-color: #ecfeff;
`],["outline-cyan-100",`outline-color: #cffafe;
`],["outline-cyan-200",`outline-color: #a5f3fc;
`],["outline-cyan-300",`outline-color: #67e8f9;
`],["outline-cyan-400",`outline-color: #22d3ee;
`],["outline-cyan-500",`outline-color: #06b6d4;
`],["outline-cyan-600",`outline-color: #0891b2;
`],["outline-cyan-700",`outline-color: #0e7490;
`],["outline-cyan-800",`outline-color: #155e75;
`],["outline-cyan-900",`outline-color: #164e63;
`],["outline-cyan-950",`outline-color: #083344;
`],["outline-sky-50",`outline-color: #f0f9ff;
`],["outline-sky-100",`outline-color: #e0f2fe;
`],["outline-sky-200",`outline-color: #bae6fd;
`],["outline-sky-300",`outline-color: #7dd3fc;
`],["outline-sky-400",`outline-color: #38bdf8;
`],["outline-sky-500",`outline-color: #0ea5e9;
`],["outline-sky-600",`outline-color: #0284c7;
`],["outline-sky-700",`outline-color: #0369a1;
`],["outline-sky-800",`outline-color: #075985;
`],["outline-sky-900",`outline-color: #0c4a6e;
`],["outline-sky-950",`outline-color: #082f49;
`],["outline-blue-50",`outline-color: #eff6ff;
`],["outline-blue-100",`outline-color: #dbeafe;
`],["outline-blue-200",`outline-color: #bfdbfe;
`],["outline-blue-300",`outline-color: #93c5fd;
`],["outline-blue-400",`outline-color: #60a5fa;
`],["outline-blue-500",`outline-color: #3b82f6;
`],["outline-blue-600",`outline-color: #2563eb;
`],["outline-blue-700",`outline-color: #1d4ed8;
`],["outline-blue-800",`outline-color: #1e40af;
`],["outline-blue-900",`outline-color: #1e3a8a;
`],["outline-blue-950",`outline-color: #172554;
`],["outline-indigo-50",`outline-color: #eef2ff;
`],["outline-indigo-100",`outline-color: #e0e7ff;
`],["outline-indigo-200",`outline-color: #c7d2fe;
`],["outline-indigo-300",`outline-color: #a5b4fc;
`],["outline-indigo-400",`outline-color: #818cf8;
`],["outline-indigo-500",`outline-color: #6366f1;
`],["outline-indigo-600",`outline-color: #4f46e5;
`],["outline-indigo-700",`outline-color: #4338ca;
`],["outline-indigo-800",`outline-color: #3730a3;
`],["outline-indigo-900",`outline-color: #312e81;
`],["outline-indigo-950",`outline-color: #1e1b4b;
`],["outline-violet-50",`outline-color: #f5f3ff;
`],["outline-violet-100",`outline-color: #ede9fe;
`],["outline-violet-200",`outline-color: #ddd6fe;
`],["outline-violet-300",`outline-color: #c4b5fd;
`],["outline-violet-400",`outline-color: #a78bfa;
`],["outline-violet-500",`outline-color: #8b5cf6;
`],["outline-violet-600",`outline-color: #7c3aed;
`],["outline-violet-700",`outline-color: #6d28d9;
`],["outline-violet-800",`outline-color: #5b21b6;
`],["outline-violet-900",`outline-color: #4c1d95;
`],["outline-violet-950",`outline-color: #2e1065;
`],["outline-purple-50",`outline-color: #faf5ff;
`],["outline-purple-100",`outline-color: #f3e8ff;
`],["outline-purple-200",`outline-color: #e9d5ff;
`],["outline-purple-300",`outline-color: #d8b4fe;
`],["outline-purple-400",`outline-color: #c084fc;
`],["outline-purple-500",`outline-color: #a855f7;
`],["outline-purple-600",`outline-color: #9333ea;
`],["outline-purple-700",`outline-color: #7e22ce;
`],["outline-purple-800",`outline-color: #6b21a8;
`],["outline-purple-900",`outline-color: #581c87;
`],["outline-purple-950",`outline-color: #3b0764;
`],["outline-fuchsia-50",`outline-color: #fdf4ff;
`],["outline-fuchsia-100",`outline-color: #fae8ff;
`],["outline-fuchsia-200",`outline-color: #f5d0fe;
`],["outline-fuchsia-300",`outline-color: #f0abfc;
`],["outline-fuchsia-400",`outline-color: #e879f9;
`],["outline-fuchsia-500",`outline-color: #d946ef;
`],["outline-fuchsia-600",`outline-color: #c026d3;
`],["outline-fuchsia-700",`outline-color: #a21caf;
`],["outline-fuchsia-800",`outline-color: #86198f;
`],["outline-fuchsia-900",`outline-color: #701a75;
`],["outline-fuchsia-950",`outline-color: #4a044e;
`],["outline-pink-50",`outline-color: #fdf2f8;
`],["outline-pink-100",`outline-color: #fce7f3;
`],["outline-pink-200",`outline-color: #fbcfe8;
`],["outline-pink-300",`outline-color: #f9a8d4;
`],["outline-pink-400",`outline-color: #f472b6;
`],["outline-pink-500",`outline-color: #ec4899;
`],["outline-pink-600",`outline-color: #db2777;
`],["outline-pink-700",`outline-color: #be185d;
`],["outline-pink-800",`outline-color: #9d174d;
`],["outline-pink-900",`outline-color: #831843;
`],["outline-pink-950",`outline-color: #500724;
`],["outline-rose-50",`outline-color: #fff1f2;
`],["outline-rose-100",`outline-color: #ffe4e6;
`],["outline-rose-200",`outline-color: #fecdd3;
`],["outline-rose-300",`outline-color: #fda4af;
`],["outline-rose-400",`outline-color: #fb7185;
`],["outline-rose-500",`outline-color: #f43f5e;
`],["outline-rose-600",`outline-color: #e11d48;
`],["outline-rose-700",`outline-color: #be123c;
`],["outline-rose-800",`outline-color: #9f1239;
`],["outline-rose-900",`outline-color: #881337;
`],["outline-rose-950",`outline-color: #4c0519;
`]]},{url:"https://tailwindcss.com/docs/outline-style",entry:"Outline Style",description:"Utilities for controlling the style of an element's outline.",parameters:[["outline-none",`outline: 2px solid transparent;
outline-offset: 2px;
`],["outline",`outline-style: solid;
`],["outline-dashed",`outline-style: dashed;
`],["outline-dotted",`outline-style: dotted;
`],["outline-double",`outline-style: double;
`]]},{url:"https://tailwindcss.com/docs/outline-offset",entry:"Outline Offset",description:"Utilities for controlling the offset of an element's outline.",parameters:[["outline-offset-0",`outline-offset: 0px;
`],["outline-offset-1",`outline-offset: 1px;
`],["outline-offset-2",`outline-offset: 2px;
`],["outline-offset-4",`outline-offset: 4px;
`],["outline-offset-8",`outline-offset: 8px;
`]]},{url:"https://tailwindcss.com/docs/ring-width",entry:"Ring Width",description:"Utilities for creating outline rings with box-shadows.",parameters:[["ring-0",`box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
`],["ring-1",`box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
`],["ring-2",`box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
`],["ring",`box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
`],["ring-4",`box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
`],["ring-8",`box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
`],["ring-inset",`--tw-ring-inset: inset;
`]]},{url:"https://tailwindcss.com/docs/ring-color",entry:"Ring Color",description:"Utilities for setting the color of outline rings.",parameters:[["ring-inherit",`--tw-ring-color: inherit;
`],["ring-current",`--tw-ring-color: currentColor;
`],["ring-transparent",`--tw-ring-color: transparent;
`],["ring-black",`--tw-ring-color: rgb(0 0 0);
`],["ring-white",`--tw-ring-color: rgb(255 255 255);
`],["ring-slate-50",`--tw-ring-color: rgb(248 250 252);
`],["ring-slate-100",`--tw-ring-color: rgb(241 245 249);
`],["ring-slate-200",`--tw-ring-color: rgb(226 232 240);
`],["ring-slate-300",`--tw-ring-color: rgb(203 213 225);
`],["ring-slate-400",`--tw-ring-color: rgb(148 163 184);
`],["ring-slate-500",`--tw-ring-color: rgb(100 116 139);
`],["ring-slate-600",`--tw-ring-color: rgb(71 85 105);
`],["ring-slate-700",`--tw-ring-color: rgb(51 65 85);
`],["ring-slate-800",`--tw-ring-color: rgb(30 41 59);
`],["ring-slate-900",`--tw-ring-color: rgb(15 23 42);
`],["ring-slate-950",`--tw-ring-color: rgb(2 6 23);
`],["ring-gray-50",`--tw-ring-color: rgb(249 250 251);
`],["ring-gray-100",`--tw-ring-color: rgb(243 244 246);
`],["ring-gray-200",`--tw-ring-color: rgb(229 231 235);
`],["ring-gray-300",`--tw-ring-color: rgb(209 213 219);
`],["ring-gray-400",`--tw-ring-color: rgb(156 163 175);
`],["ring-gray-500",`--tw-ring-color: rgb(107 114 128);
`],["ring-gray-600",`--tw-ring-color: rgb(75 85 99);
`],["ring-gray-700",`--tw-ring-color: rgb(55 65 81);
`],["ring-gray-800",`--tw-ring-color: rgb(31 41 55);
`],["ring-gray-900",`--tw-ring-color: rgb(17 24 39);
`],["ring-gray-950",`--tw-ring-color: rgb(3 7 18);
`],["ring-zinc-50",`--tw-ring-color: rgb(250 250 250);
`],["ring-zinc-100",`--tw-ring-color: rgb(244 244 245);
`],["ring-zinc-200",`--tw-ring-color: rgb(228 228 231);
`],["ring-zinc-300",`--tw-ring-color: rgb(212 212 216);
`],["ring-zinc-400",`--tw-ring-color: rgb(161 161 170);
`],["ring-zinc-500",`--tw-ring-color: rgb(113 113 122);
`],["ring-zinc-600",`--tw-ring-color: rgb(82 82 91);
`],["ring-zinc-700",`--tw-ring-color: rgb(63 63 70);
`],["ring-zinc-800",`--tw-ring-color: rgb(39 39 42);
`],["ring-zinc-900",`--tw-ring-color: rgb(24 24 27);
`],["ring-zinc-950",`--tw-ring-color: rgb(9 9 11);
`],["ring-neutral-50",`--tw-ring-color: rgb(250 250 250);
`],["ring-neutral-100",`--tw-ring-color: rgb(245 245 245);
`],["ring-neutral-200",`--tw-ring-color: rgb(229 229 229);
`],["ring-neutral-300",`--tw-ring-color: rgb(212 212 212);
`],["ring-neutral-400",`--tw-ring-color: rgb(163 163 163);
`],["ring-neutral-500",`--tw-ring-color: rgb(115 115 115);
`],["ring-neutral-600",`--tw-ring-color: rgb(82 82 82);
`],["ring-neutral-700",`--tw-ring-color: rgb(64 64 64);
`],["ring-neutral-800",`--tw-ring-color: rgb(38 38 38);
`],["ring-neutral-900",`--tw-ring-color: rgb(23 23 23);
`],["ring-neutral-950",`--tw-ring-color: rgb(10 10 10);
`],["ring-stone-50",`--tw-ring-color: rgb(250 250 249);
`],["ring-stone-100",`--tw-ring-color: rgb(245 245 244);
`],["ring-stone-200",`--tw-ring-color: rgb(231 229 228);
`],["ring-stone-300",`--tw-ring-color: rgb(214 211 209);
`],["ring-stone-400",`--tw-ring-color: rgb(168 162 158);
`],["ring-stone-500",`--tw-ring-color: rgb(120 113 108);
`],["ring-stone-600",`--tw-ring-color: rgb(87 83 78);
`],["ring-stone-700",`--tw-ring-color: rgb(68 64 60);
`],["ring-stone-800",`--tw-ring-color: rgb(41 37 36);
`],["ring-stone-900",`--tw-ring-color: rgb(28 25 23);
`],["ring-stone-950",`--tw-ring-color: rgb(12 10 9);
`],["ring-red-50",`--tw-ring-color: rgb(254 242 242);
`],["ring-red-100",`--tw-ring-color: rgb(254 226 226);
`],["ring-red-200",`--tw-ring-color: rgb(254 202 202);
`],["ring-red-300",`--tw-ring-color: rgb(252 165 165);
`],["ring-red-400",`--tw-ring-color: rgb(248 113 113);
`],["ring-red-500",`--tw-ring-color: rgb(239 68 68);
`],["ring-red-600",`--tw-ring-color: rgb(220 38 38);
`],["ring-red-700",`--tw-ring-color: rgb(185 28 28);
`],["ring-red-800",`--tw-ring-color: rgb(153 27 27);
`],["ring-red-900",`--tw-ring-color: rgb(127 29 29);
`],["ring-red-950",`--tw-ring-color: rgb(69 10 10);
`],["ring-orange-50",`--tw-ring-color: rgb(255 247 237);
`],["ring-orange-100",`--tw-ring-color: rgb(255 237 213);
`],["ring-orange-200",`--tw-ring-color: rgb(254 215 170);
`],["ring-orange-300",`--tw-ring-color: rgb(253 186 116);
`],["ring-orange-400",`--tw-ring-color: rgb(251 146 60);
`],["ring-orange-500",`--tw-ring-color: rgb(249 115 22);
`],["ring-orange-600",`--tw-ring-color: rgb(234 88 12);
`],["ring-orange-700",`--tw-ring-color: rgb(194 65 12);
`],["ring-orange-800",`--tw-ring-color: rgb(154 52 18);
`],["ring-orange-900",`--tw-ring-color: rgb(124 45 18);
`],["ring-orange-950",`--tw-ring-color: rgb(67 20 7);
`],["ring-amber-50",`--tw-ring-color: rgb(255 251 235);
`],["ring-amber-100",`--tw-ring-color: rgb(254 243 199);
`],["ring-amber-200",`--tw-ring-color: rgb(253 230 138);
`],["ring-amber-300",`--tw-ring-color: rgb(252 211 77);
`],["ring-amber-400",`--tw-ring-color: rgb(251 191 36);
`],["ring-amber-500",`--tw-ring-color: rgb(245 158 11);
`],["ring-amber-600",`--tw-ring-color: rgb(217 119 6);
`],["ring-amber-700",`--tw-ring-color: rgb(180 83 9);
`],["ring-amber-800",`--tw-ring-color: rgb(146 64 14);
`],["ring-amber-900",`--tw-ring-color: rgb(120 53 15);
`],["ring-amber-950",`--tw-ring-color: rgb(69 26 3);
`],["ring-yellow-50",`--tw-ring-color: rgb(254 252 232);
`],["ring-yellow-100",`--tw-ring-color: rgb(254 249 195);
`],["ring-yellow-200",`--tw-ring-color: rgb(254 240 138);
`],["ring-yellow-300",`--tw-ring-color: rgb(253 224 71);
`],["ring-yellow-400",`--tw-ring-color: rgb(250 204 21);
`],["ring-yellow-500",`--tw-ring-color: rgb(234 179 8);
`],["ring-yellow-600",`--tw-ring-color: rgb(202 138 4);
`],["ring-yellow-700",`--tw-ring-color: rgb(161 98 7);
`],["ring-yellow-800",`--tw-ring-color: rgb(133 77 14);
`],["ring-yellow-900",`--tw-ring-color: rgb(113 63 18);
`],["ring-yellow-950",`--tw-ring-color: rgb(66 32 6);
`],["ring-lime-50",`--tw-ring-color: rgb(247 254 231);
`],["ring-lime-100",`--tw-ring-color: rgb(236 252 203);
`],["ring-lime-200",`--tw-ring-color: rgb(217 249 157);
`],["ring-lime-300",`--tw-ring-color: rgb(190 242 100);
`],["ring-lime-400",`--tw-ring-color: rgb(163 230 53);
`],["ring-lime-500",`--tw-ring-color: rgb(132 204 22);
`],["ring-lime-600",`--tw-ring-color: rgb(101 163 13);
`],["ring-lime-700",`--tw-ring-color: rgb(77 124 15);
`],["ring-lime-800",`--tw-ring-color: rgb(63 98 18);
`],["ring-lime-900",`--tw-ring-color: rgb(54 83 20);
`],["ring-lime-950",`--tw-ring-color: rgb(26 46 5);
`],["ring-green-50",`--tw-ring-color: rgb(240 253 244);
`],["ring-green-100",`--tw-ring-color: rgb(220 252 231);
`],["ring-green-200",`--tw-ring-color: rgb(187 247 208);
`],["ring-green-300",`--tw-ring-color: rgb(134 239 172);
`],["ring-green-400",`--tw-ring-color: rgb(74 222 128);
`],["ring-green-500",`--tw-ring-color: rgb(34 197 94);
`],["ring-green-600",`--tw-ring-color: rgb(22 163 74);
`],["ring-green-700",`--tw-ring-color: rgb(21 128 61);
`],["ring-green-800",`--tw-ring-color: rgb(22 101 52);
`],["ring-green-900",`--tw-ring-color: rgb(20 83 45);
`],["ring-green-950",`--tw-ring-color: rgb(5 46 22);
`],["ring-emerald-50",`--tw-ring-color: rgb(236 253 245);
`],["ring-emerald-100",`--tw-ring-color: rgb(209 250 229);
`],["ring-emerald-200",`--tw-ring-color: rgb(167 243 208);
`],["ring-emerald-300",`--tw-ring-color: rgb(110 231 183);
`],["ring-emerald-400",`--tw-ring-color: rgb(52 211 153);
`],["ring-emerald-500",`--tw-ring-color: rgb(16 185 129);
`],["ring-emerald-600",`--tw-ring-color: rgb(5 150 105);
`],["ring-emerald-700",`--tw-ring-color: rgb(4 120 87);
`],["ring-emerald-800",`--tw-ring-color: rgb(6 95 70);
`],["ring-emerald-900",`--tw-ring-color: rgb(6 78 59);
`],["ring-emerald-950",`--tw-ring-color: rgb(2 44 34);
`],["ring-teal-50",`--tw-ring-color: rgb(240 253 250);
`],["ring-teal-100",`--tw-ring-color: rgb(204 251 241);
`],["ring-teal-200",`--tw-ring-color: rgb(153 246 228);
`],["ring-teal-300",`--tw-ring-color: rgb(94 234 212);
`],["ring-teal-400",`--tw-ring-color: rgb(45 212 191);
`],["ring-teal-500",`--tw-ring-color: rgb(20 184 166);
`],["ring-teal-600",`--tw-ring-color: rgb(13 148 136);
`],["ring-teal-700",`--tw-ring-color: rgb(15 118 110);
`],["ring-teal-800",`--tw-ring-color: rgb(17 94 89);
`],["ring-teal-900",`--tw-ring-color: rgb(19 78 74);
`],["ring-teal-950",`--tw-ring-color: rgb(4 47 46);
`],["ring-cyan-50",`--tw-ring-color: rgb(236 254 255);
`],["ring-cyan-100",`--tw-ring-color: rgb(207 250 254);
`],["ring-cyan-200",`--tw-ring-color: rgb(165 243 252);
`],["ring-cyan-300",`--tw-ring-color: rgb(103 232 249);
`],["ring-cyan-400",`--tw-ring-color: rgb(34 211 238);
`],["ring-cyan-500",`--tw-ring-color: rgb(6 182 212);
`],["ring-cyan-600",`--tw-ring-color: rgb(8 145 178);
`],["ring-cyan-700",`--tw-ring-color: rgb(14 116 144);
`],["ring-cyan-800",`--tw-ring-color: rgb(21 94 117);
`],["ring-cyan-900",`--tw-ring-color: rgb(22 78 99);
`],["ring-cyan-950",`--tw-ring-color: rgb(8 51 68);
`],["ring-sky-50",`--tw-ring-color: rgb(240 249 255);
`],["ring-sky-100",`--tw-ring-color: rgb(224 242 254);
`],["ring-sky-200",`--tw-ring-color: rgb(186 230 253);
`],["ring-sky-300",`--tw-ring-color: rgb(125 211 252);
`],["ring-sky-400",`--tw-ring-color: rgb(56 189 248);
`],["ring-sky-500",`--tw-ring-color: rgb(14 165 233);
`],["ring-sky-600",`--tw-ring-color: rgb(2 132 199);
`],["ring-sky-700",`--tw-ring-color: rgb(3 105 161);
`],["ring-sky-800",`--tw-ring-color: rgb(7 89 133);
`],["ring-sky-900",`--tw-ring-color: rgb(12 74 110);
`],["ring-sky-950",`--tw-ring-color: rgb(8 47 73);
`],["ring-blue-50",`--tw-ring-color: rgb(239 246 255);
`],["ring-blue-100",`--tw-ring-color: rgb(219 234 254);
`],["ring-blue-200",`--tw-ring-color: rgb(191 219 254);
`],["ring-blue-300",`--tw-ring-color: rgb(147 197 253);
`],["ring-blue-400",`--tw-ring-color: rgb(96 165 250);
`],["ring-blue-500",`--tw-ring-color: rgb(59 130 246);
`],["ring-blue-600",`--tw-ring-color: rgb(37 99 235);
`],["ring-blue-700",`--tw-ring-color: rgb(29 78 216);
`],["ring-blue-800",`--tw-ring-color: rgb(30 64 175);
`],["ring-blue-900",`--tw-ring-color: rgb(30 58 138);
`],["ring-blue-950",`--tw-ring-color: rgb(23 37 84);
`],["ring-indigo-50",`--tw-ring-color: rgb(238 242 255);
`],["ring-indigo-100",`--tw-ring-color: rgb(224 231 255);
`],["ring-indigo-200",`--tw-ring-color: rgb(199 210 254);
`],["ring-indigo-300",`--tw-ring-color: rgb(165 180 252);
`],["ring-indigo-400",`--tw-ring-color: rgb(129 140 248);
`],["ring-indigo-500",`--tw-ring-color: rgb(99 102 241);
`],["ring-indigo-600",`--tw-ring-color: rgb(79 70 229);
`],["ring-indigo-700",`--tw-ring-color: rgb(67 56 202);
`],["ring-indigo-800",`--tw-ring-color: rgb(55 48 163);
`],["ring-indigo-900",`--tw-ring-color: rgb(49 46 129);
`],["ring-indigo-950",`--tw-ring-color: rgb(30 27 75);
`],["ring-violet-50",`--tw-ring-color: rgb(245 243 255);
`],["ring-violet-100",`--tw-ring-color: rgb(237 233 254);
`],["ring-violet-200",`--tw-ring-color: rgb(221 214 254);
`],["ring-violet-300",`--tw-ring-color: rgb(196 181 253);
`],["ring-violet-400",`--tw-ring-color: rgb(167 139 250);
`],["ring-violet-500",`--tw-ring-color: rgb(139 92 246);
`],["ring-violet-600",`--tw-ring-color: rgb(124 58 237);
`],["ring-violet-700",`--tw-ring-color: rgb(109 40 217);
`],["ring-violet-800",`--tw-ring-color: rgb(91 33 182);
`],["ring-violet-900",`--tw-ring-color: rgb(76 29 149);
`],["ring-violet-950",`--tw-ring-color: rgb(46 16 101);
`],["ring-purple-50",`--tw-ring-color: rgb(250 245 255);
`],["ring-purple-100",`--tw-ring-color: rgb(243 232 255);
`],["ring-purple-200",`--tw-ring-color: rgb(233 213 255);
`],["ring-purple-300",`--tw-ring-color: rgb(216 180 254);
`],["ring-purple-400",`--tw-ring-color: rgb(192 132 252);
`],["ring-purple-500",`--tw-ring-color: rgb(168 85 247);
`],["ring-purple-600",`--tw-ring-color: rgb(147 51 234);
`],["ring-purple-700",`--tw-ring-color: rgb(126 34 206);
`],["ring-purple-800",`--tw-ring-color: rgb(107 33 168);
`],["ring-purple-900",`--tw-ring-color: rgb(88 28 135);
`],["ring-purple-950",`--tw-ring-color: rgb(59 7 100);
`],["ring-fuchsia-50",`--tw-ring-color: rgb(253 244 255);
`],["ring-fuchsia-100",`--tw-ring-color: rgb(250 232 255);
`],["ring-fuchsia-200",`--tw-ring-color: rgb(245 208 254);
`],["ring-fuchsia-300",`--tw-ring-color: rgb(240 171 252);
`],["ring-fuchsia-400",`--tw-ring-color: rgb(232 121 249);
`],["ring-fuchsia-500",`--tw-ring-color: rgb(217 70 239);
`],["ring-fuchsia-600",`--tw-ring-color: rgb(192 38 211);
`],["ring-fuchsia-700",`--tw-ring-color: rgb(162 28 175);
`],["ring-fuchsia-800",`--tw-ring-color: rgb(134 25 143);
`],["ring-fuchsia-900",`--tw-ring-color: rgb(112 26 117);
`],["ring-fuchsia-950",`--tw-ring-color: rgb(74 4 78);
`],["ring-pink-50",`--tw-ring-color: rgb(253 242 248);
`],["ring-pink-100",`--tw-ring-color: rgb(252 231 243);
`],["ring-pink-200",`--tw-ring-color: rgb(251 207 232);
`],["ring-pink-300",`--tw-ring-color: rgb(249 168 212);
`],["ring-pink-400",`--tw-ring-color: rgb(244 114 182);
`],["ring-pink-500",`--tw-ring-color: rgb(236 72 153);
`],["ring-pink-600",`--tw-ring-color: rgb(219 39 119);
`],["ring-pink-700",`--tw-ring-color: rgb(190 24 93);
`],["ring-pink-800",`--tw-ring-color: rgb(157 23 77);
`],["ring-pink-900",`--tw-ring-color: rgb(131 24 67);
`],["ring-pink-950",`--tw-ring-color: rgb(80 7 36);
`],["ring-rose-50",`--tw-ring-color: rgb(255 241 242);
`],["ring-rose-100",`--tw-ring-color: rgb(255 228 230);
`],["ring-rose-200",`--tw-ring-color: rgb(254 205 211);
`],["ring-rose-300",`--tw-ring-color: rgb(253 164 175);
`],["ring-rose-400",`--tw-ring-color: rgb(251 113 133);
`],["ring-rose-500",`--tw-ring-color: rgb(244 63 94);
`],["ring-rose-600",`--tw-ring-color: rgb(225 29 72);
`],["ring-rose-700",`--tw-ring-color: rgb(190 18 60);
`],["ring-rose-800",`--tw-ring-color: rgb(159 18 57);
`],["ring-rose-900",`--tw-ring-color: rgb(136 19 55);
`],["ring-rose-950",`--tw-ring-color: rgb(76 5 25);
`]]},{url:"https://tailwindcss.com/docs/ring-offset-width",entry:"Ring Offset Width",description:"Utilities for simulating an offset when adding outline rings.",parameters:[["ring-offset-0",`--tw-ring-offset-width: 0px;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-1",`--tw-ring-offset-width: 1px;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-2",`--tw-ring-offset-width: 2px;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-4",`--tw-ring-offset-width: 4px;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-8",`--tw-ring-offset-width: 8px;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`]]},{url:"https://tailwindcss.com/docs/ring-offset-color",entry:"Ring Offset Color",description:"Utilities for setting the color of outline ring offsets.",parameters:[["ring-offset-inherit",`--tw-ring-offset-color: inherit;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-current",`--tw-ring-offset-color: currentColor;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-transparent",`--tw-ring-offset-color: transparent;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-black",`--tw-ring-offset-color: #000;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-white",`--tw-ring-offset-color: #fff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-50",`--tw-ring-offset-color: #f8fafc;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-100",`--tw-ring-offset-color: #f1f5f9;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-200",`--tw-ring-offset-color: #e2e8f0;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-300",`--tw-ring-offset-color: #cbd5e1;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-400",`--tw-ring-offset-color: #94a3b8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-500",`--tw-ring-offset-color: #64748b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-600",`--tw-ring-offset-color: #475569;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-700",`--tw-ring-offset-color: #334155;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-800",`--tw-ring-offset-color: #1e293b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-900",`--tw-ring-offset-color: #0f172a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-slate-950",`--tw-ring-offset-color: #020617;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-50",`--tw-ring-offset-color: #f9fafb;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-100",`--tw-ring-offset-color: #f3f4f6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-200",`--tw-ring-offset-color: #e5e7eb;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-300",`--tw-ring-offset-color: #d1d5db;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-400",`--tw-ring-offset-color: #9ca3af;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-500",`--tw-ring-offset-color: #6b7280;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-600",`--tw-ring-offset-color: #4b5563;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-700",`--tw-ring-offset-color: #374151;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-800",`--tw-ring-offset-color: #1f2937;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-900",`--tw-ring-offset-color: #111827;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-gray-950",`--tw-ring-offset-color: #030712;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-50",`--tw-ring-offset-color: #fafafa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-100",`--tw-ring-offset-color: #f4f4f5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-200",`--tw-ring-offset-color: #e4e4e7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-300",`--tw-ring-offset-color: #d4d4d8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-400",`--tw-ring-offset-color: #a1a1aa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-500",`--tw-ring-offset-color: #71717a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-600",`--tw-ring-offset-color: #52525b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-700",`--tw-ring-offset-color: #3f3f46;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-800",`--tw-ring-offset-color: #27272a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-900",`--tw-ring-offset-color: #18181b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-zinc-950",`--tw-ring-offset-color: #09090b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-50",`--tw-ring-offset-color: #fafafa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-100",`--tw-ring-offset-color: #f5f5f5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-200",`--tw-ring-offset-color: #e5e5e5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-300",`--tw-ring-offset-color: #d4d4d4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-400",`--tw-ring-offset-color: #a3a3a3;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-500",`--tw-ring-offset-color: #737373;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-600",`--tw-ring-offset-color: #525252;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-700",`--tw-ring-offset-color: #404040;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-800",`--tw-ring-offset-color: #262626;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-900",`--tw-ring-offset-color: #171717;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-neutral-950",`--tw-ring-offset-color: #0a0a0a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-50",`--tw-ring-offset-color: #fafaf9;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-100",`--tw-ring-offset-color: #f5f5f4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-200",`--tw-ring-offset-color: #e7e5e4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-300",`--tw-ring-offset-color: #d6d3d1;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-400",`--tw-ring-offset-color: #a8a29e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-500",`--tw-ring-offset-color: #78716c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-600",`--tw-ring-offset-color: #57534e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-700",`--tw-ring-offset-color: #44403c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-800",`--tw-ring-offset-color: #292524;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-900",`--tw-ring-offset-color: #1c1917;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-stone-950",`--tw-ring-offset-color: #0c0a09;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-50",`--tw-ring-offset-color: #fef2f2;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-100",`--tw-ring-offset-color: #fee2e2;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-200",`--tw-ring-offset-color: #fecaca;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-300",`--tw-ring-offset-color: #fca5a5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-400",`--tw-ring-offset-color: #f87171;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-500",`--tw-ring-offset-color: #ef4444;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-600",`--tw-ring-offset-color: #dc2626;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-700",`--tw-ring-offset-color: #b91c1c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-800",`--tw-ring-offset-color: #991b1b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-900",`--tw-ring-offset-color: #7f1d1d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-red-950",`--tw-ring-offset-color: #450a0a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-50",`--tw-ring-offset-color: #fff7ed;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-100",`--tw-ring-offset-color: #ffedd5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-200",`--tw-ring-offset-color: #fed7aa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-300",`--tw-ring-offset-color: #fdba74;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-400",`--tw-ring-offset-color: #fb923c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-500",`--tw-ring-offset-color: #f97316;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-600",`--tw-ring-offset-color: #ea580c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-700",`--tw-ring-offset-color: #c2410c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-800",`--tw-ring-offset-color: #9a3412;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-900",`--tw-ring-offset-color: #7c2d12;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-orange-950",`--tw-ring-offset-color: #431407;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-50",`--tw-ring-offset-color: #fffbeb;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-100",`--tw-ring-offset-color: #fef3c7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-200",`--tw-ring-offset-color: #fde68a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-300",`--tw-ring-offset-color: #fcd34d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-400",`--tw-ring-offset-color: #fbbf24;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-500",`--tw-ring-offset-color: #f59e0b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-600",`--tw-ring-offset-color: #d97706;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-700",`--tw-ring-offset-color: #b45309;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-800",`--tw-ring-offset-color: #92400e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-900",`--tw-ring-offset-color: #78350f;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-amber-950",`--tw-ring-offset-color: #451a03;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-50",`--tw-ring-offset-color: #fefce8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-100",`--tw-ring-offset-color: #fef9c3;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-200",`--tw-ring-offset-color: #fef08a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-300",`--tw-ring-offset-color: #fde047;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-400",`--tw-ring-offset-color: #facc15;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-500",`--tw-ring-offset-color: #eab308;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-600",`--tw-ring-offset-color: #ca8a04;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-700",`--tw-ring-offset-color: #a16207;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-800",`--tw-ring-offset-color: #854d0e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-900",`--tw-ring-offset-color: #713f12;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-yellow-950",`--tw-ring-offset-color: #422006;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-50",`--tw-ring-offset-color: #f7fee7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-100",`--tw-ring-offset-color: #ecfccb;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-200",`--tw-ring-offset-color: #d9f99d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-300",`--tw-ring-offset-color: #bef264;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-400",`--tw-ring-offset-color: #a3e635;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-500",`--tw-ring-offset-color: #84cc16;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-600",`--tw-ring-offset-color: #65a30d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-700",`--tw-ring-offset-color: #4d7c0f;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-800",`--tw-ring-offset-color: #3f6212;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-900",`--tw-ring-offset-color: #365314;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-lime-950",`--tw-ring-offset-color: #1a2e05;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-50",`--tw-ring-offset-color: #f0fdf4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-100",`--tw-ring-offset-color: #dcfce7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-200",`--tw-ring-offset-color: #bbf7d0;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-300",`--tw-ring-offset-color: #86efac;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-400",`--tw-ring-offset-color: #4ade80;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-500",`--tw-ring-offset-color: #22c55e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-600",`--tw-ring-offset-color: #16a34a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-700",`--tw-ring-offset-color: #15803d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-800",`--tw-ring-offset-color: #166534;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-900",`--tw-ring-offset-color: #14532d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-green-950",`--tw-ring-offset-color: #052e16;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-50",`--tw-ring-offset-color: #ecfdf5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-100",`--tw-ring-offset-color: #d1fae5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-200",`--tw-ring-offset-color: #a7f3d0;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-300",`--tw-ring-offset-color: #6ee7b7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-400",`--tw-ring-offset-color: #34d399;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-500",`--tw-ring-offset-color: #10b981;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-600",`--tw-ring-offset-color: #059669;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-700",`--tw-ring-offset-color: #047857;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-800",`--tw-ring-offset-color: #065f46;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-900",`--tw-ring-offset-color: #064e3b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-emerald-950",`--tw-ring-offset-color: #022c22;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-50",`--tw-ring-offset-color: #f0fdfa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-100",`--tw-ring-offset-color: #ccfbf1;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-200",`--tw-ring-offset-color: #99f6e4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-300",`--tw-ring-offset-color: #5eead4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-400",`--tw-ring-offset-color: #2dd4bf;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-500",`--tw-ring-offset-color: #14b8a6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-600",`--tw-ring-offset-color: #0d9488;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-700",`--tw-ring-offset-color: #0f766e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-800",`--tw-ring-offset-color: #115e59;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-900",`--tw-ring-offset-color: #134e4a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-teal-950",`--tw-ring-offset-color: #042f2e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-50",`--tw-ring-offset-color: #ecfeff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-100",`--tw-ring-offset-color: #cffafe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-200",`--tw-ring-offset-color: #a5f3fc;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-300",`--tw-ring-offset-color: #67e8f9;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-400",`--tw-ring-offset-color: #22d3ee;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-500",`--tw-ring-offset-color: #06b6d4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-600",`--tw-ring-offset-color: #0891b2;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-700",`--tw-ring-offset-color: #0e7490;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-800",`--tw-ring-offset-color: #155e75;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-900",`--tw-ring-offset-color: #164e63;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-cyan-950",`--tw-ring-offset-color: #083344;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-50",`--tw-ring-offset-color: #f0f9ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-100",`--tw-ring-offset-color: #e0f2fe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-200",`--tw-ring-offset-color: #bae6fd;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-300",`--tw-ring-offset-color: #7dd3fc;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-400",`--tw-ring-offset-color: #38bdf8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-500",`--tw-ring-offset-color: #0ea5e9;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-600",`--tw-ring-offset-color: #0284c7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-700",`--tw-ring-offset-color: #0369a1;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-800",`--tw-ring-offset-color: #075985;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-900",`--tw-ring-offset-color: #0c4a6e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-sky-950",`--tw-ring-offset-color: #082f49;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-50",`--tw-ring-offset-color: #eff6ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-100",`--tw-ring-offset-color: #dbeafe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-200",`--tw-ring-offset-color: #bfdbfe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-300",`--tw-ring-offset-color: #93c5fd;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-400",`--tw-ring-offset-color: #60a5fa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-500",`--tw-ring-offset-color: #3b82f6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-600",`--tw-ring-offset-color: #2563eb;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-700",`--tw-ring-offset-color: #1d4ed8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-800",`--tw-ring-offset-color: #1e40af;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-900",`--tw-ring-offset-color: #1e3a8a;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-blue-950",`--tw-ring-offset-color: #172554;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-50",`--tw-ring-offset-color: #eef2ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-100",`--tw-ring-offset-color: #e0e7ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-200",`--tw-ring-offset-color: #c7d2fe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-300",`--tw-ring-offset-color: #a5b4fc;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-400",`--tw-ring-offset-color: #818cf8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-500",`--tw-ring-offset-color: #6366f1;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-600",`--tw-ring-offset-color: #4f46e5;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-700",`--tw-ring-offset-color: #4338ca;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-800",`--tw-ring-offset-color: #3730a3;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-900",`--tw-ring-offset-color: #312e81;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-indigo-950",`--tw-ring-offset-color: #1e1b4b;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-50",`--tw-ring-offset-color: #f5f3ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-100",`--tw-ring-offset-color: #ede9fe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-200",`--tw-ring-offset-color: #ddd6fe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-300",`--tw-ring-offset-color: #c4b5fd;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-400",`--tw-ring-offset-color: #a78bfa;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-500",`--tw-ring-offset-color: #8b5cf6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-600",`--tw-ring-offset-color: #7c3aed;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-700",`--tw-ring-offset-color: #6d28d9;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-800",`--tw-ring-offset-color: #5b21b6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-900",`--tw-ring-offset-color: #4c1d95;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-violet-950",`--tw-ring-offset-color: #2e1065;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-50",`--tw-ring-offset-color: #faf5ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-100",`--tw-ring-offset-color: #f3e8ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-200",`--tw-ring-offset-color: #e9d5ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-300",`--tw-ring-offset-color: #d8b4fe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-400",`--tw-ring-offset-color: #c084fc;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-500",`--tw-ring-offset-color: #a855f7;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-600",`--tw-ring-offset-color: #9333ea;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-700",`--tw-ring-offset-color: #7e22ce;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-800",`--tw-ring-offset-color: #6b21a8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-900",`--tw-ring-offset-color: #581c87;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-purple-950",`--tw-ring-offset-color: #3b0764;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-50",`--tw-ring-offset-color: #fdf4ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-100",`--tw-ring-offset-color: #fae8ff;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-200",`--tw-ring-offset-color: #f5d0fe;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-300",`--tw-ring-offset-color: #f0abfc;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-400",`--tw-ring-offset-color: #e879f9;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-500",`--tw-ring-offset-color: #d946ef;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-600",`--tw-ring-offset-color: #c026d3;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-700",`--tw-ring-offset-color: #a21caf;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-800",`--tw-ring-offset-color: #86198f;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-900",`--tw-ring-offset-color: #701a75;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-fuchsia-950",`--tw-ring-offset-color: #4a044e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-50",`--tw-ring-offset-color: #fdf2f8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-100",`--tw-ring-offset-color: #fce7f3;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-200",`--tw-ring-offset-color: #fbcfe8;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-300",`--tw-ring-offset-color: #f9a8d4;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-400",`--tw-ring-offset-color: #f472b6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-500",`--tw-ring-offset-color: #ec4899;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-600",`--tw-ring-offset-color: #db2777;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-700",`--tw-ring-offset-color: #be185d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-800",`--tw-ring-offset-color: #9d174d;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-900",`--tw-ring-offset-color: #831843;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-pink-950",`--tw-ring-offset-color: #500724;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-50",`--tw-ring-offset-color: #fff1f2;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-100",`--tw-ring-offset-color: #ffe4e6;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-200",`--tw-ring-offset-color: #fecdd3;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-300",`--tw-ring-offset-color: #fda4af;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-400",`--tw-ring-offset-color: #fb7185;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-500",`--tw-ring-offset-color: #f43f5e;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-600",`--tw-ring-offset-color: #e11d48;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-700",`--tw-ring-offset-color: #be123c;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-800",`--tw-ring-offset-color: #9f1239;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-900",`--tw-ring-offset-color: #881337;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`],["ring-offset-rose-950",`--tw-ring-offset-color: #4c0519;
box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
`]]}],js=[{url:"https://tailwindcss.com/docs/box-shadow",entry:"Box Shadow",description:"Utilities for controlling the box shadow of an element.",parameters:[["shadow-sm",`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`],["shadow",`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`],["shadow-md",`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`],["shadow-lg",`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`],["shadow-xl",`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`],["shadow-2xl",`box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`],["shadow-inner",`box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
`],["shadow-none",`box-shadow: 0 0 #0000;
`]]},{url:"https://tailwindcss.com/docs/box-shadow-color",entry:"Box Shadow Color",description:"Utilities for controlling the color of a box shadow.",parameters:[["shadow-inherit",`--tw-shadow-color: inherit;
`],["shadow-current",`--tw-shadow-color: currentColor;
`],["shadow-transparent",`--tw-shadow-color: transparent;
`],["shadow-black",`--tw-shadow-color: #000;
`],["shadow-white",`--tw-shadow-color: #fff;
`],["shadow-slate-50",`--tw-shadow-color: #f8fafc;
`],["shadow-slate-100",`--tw-shadow-color: #f1f5f9;
`],["shadow-slate-200",`--tw-shadow-color: #e2e8f0;
`],["shadow-slate-300",`--tw-shadow-color: #cbd5e1;
`],["shadow-slate-400",`--tw-shadow-color: #94a3b8;
`],["shadow-slate-500",`--tw-shadow-color: #64748b;
`],["shadow-slate-600",`--tw-shadow-color: #475569;
`],["shadow-slate-700",`--tw-shadow-color: #334155;
`],["shadow-slate-800",`--tw-shadow-color: #1e293b;
`],["shadow-slate-900",`--tw-shadow-color: #0f172a;
`],["shadow-slate-950",`--tw-shadow-color: #020617;
`],["shadow-gray-50",`--tw-shadow-color: #f9fafb;
`],["shadow-gray-100",`--tw-shadow-color: #f3f4f6;
`],["shadow-gray-200",`--tw-shadow-color: #e5e7eb;
`],["shadow-gray-300",`--tw-shadow-color: #d1d5db;
`],["shadow-gray-400",`--tw-shadow-color: #9ca3af;
`],["shadow-gray-500",`--tw-shadow-color: #6b7280;
`],["shadow-gray-600",`--tw-shadow-color: #4b5563;
`],["shadow-gray-700",`--tw-shadow-color: #374151;
`],["shadow-gray-800",`--tw-shadow-color: #1f2937;
`],["shadow-gray-900",`--tw-shadow-color: #111827;
`],["shadow-gray-950",`--tw-shadow-color: #030712;
`],["shadow-zinc-50",`--tw-shadow-color: #fafafa;
`],["shadow-zinc-100",`--tw-shadow-color: #f4f4f5;
`],["shadow-zinc-200",`--tw-shadow-color: #e4e4e7;
`],["shadow-zinc-300",`--tw-shadow-color: #d4d4d8;
`],["shadow-zinc-400",`--tw-shadow-color: #a1a1aa;
`],["shadow-zinc-500",`--tw-shadow-color: #71717a;
`],["shadow-zinc-600",`--tw-shadow-color: #52525b;
`],["shadow-zinc-700",`--tw-shadow-color: #3f3f46;
`],["shadow-zinc-800",`--tw-shadow-color: #27272a;
`],["shadow-zinc-900",`--tw-shadow-color: #18181b;
`],["shadow-zinc-950",`--tw-shadow-color: #09090b;
`],["shadow-neutral-50",`--tw-shadow-color: #fafafa;
`],["shadow-neutral-100",`--tw-shadow-color: #f5f5f5;
`],["shadow-neutral-200",`--tw-shadow-color: #e5e5e5;
`],["shadow-neutral-300",`--tw-shadow-color: #d4d4d4;
`],["shadow-neutral-400",`--tw-shadow-color: #a3a3a3;
`],["shadow-neutral-500",`--tw-shadow-color: #737373;
`],["shadow-neutral-600",`--tw-shadow-color: #525252;
`],["shadow-neutral-700",`--tw-shadow-color: #404040;
`],["shadow-neutral-800",`--tw-shadow-color: #262626;
`],["shadow-neutral-900",`--tw-shadow-color: #171717;
`],["shadow-neutral-950",`--tw-shadow-color: #0a0a0a;
`],["shadow-stone-50",`--tw-shadow-color: #fafaf9;
`],["shadow-stone-100",`--tw-shadow-color: #f5f5f4;
`],["shadow-stone-200",`--tw-shadow-color: #e7e5e4;
`],["shadow-stone-300",`--tw-shadow-color: #d6d3d1;
`],["shadow-stone-400",`--tw-shadow-color: #a8a29e;
`],["shadow-stone-500",`--tw-shadow-color: #78716c;
`],["shadow-stone-600",`--tw-shadow-color: #57534e;
`],["shadow-stone-700",`--tw-shadow-color: #44403c;
`],["shadow-stone-800",`--tw-shadow-color: #292524;
`],["shadow-stone-900",`--tw-shadow-color: #1c1917;
`],["shadow-stone-950",`--tw-shadow-color: #0c0a09;
`],["shadow-red-50",`--tw-shadow-color: #fef2f2;
`],["shadow-red-100",`--tw-shadow-color: #fee2e2;
`],["shadow-red-200",`--tw-shadow-color: #fecaca;
`],["shadow-red-300",`--tw-shadow-color: #fca5a5;
`],["shadow-red-400",`--tw-shadow-color: #f87171;
`],["shadow-red-500",`--tw-shadow-color: #ef4444;
`],["shadow-red-600",`--tw-shadow-color: #dc2626;
`],["shadow-red-700",`--tw-shadow-color: #b91c1c;
`],["shadow-red-800",`--tw-shadow-color: #991b1b;
`],["shadow-red-900",`--tw-shadow-color: #7f1d1d;
`],["shadow-red-950",`--tw-shadow-color: #450a0a;
`],["shadow-orange-50",`--tw-shadow-color: #fff7ed;
`],["shadow-orange-100",`--tw-shadow-color: #ffedd5;
`],["shadow-orange-200",`--tw-shadow-color: #fed7aa;
`],["shadow-orange-300",`--tw-shadow-color: #fdba74;
`],["shadow-orange-400",`--tw-shadow-color: #fb923c;
`],["shadow-orange-500",`--tw-shadow-color: #f97316;
`],["shadow-orange-600",`--tw-shadow-color: #ea580c;
`],["shadow-orange-700",`--tw-shadow-color: #c2410c;
`],["shadow-orange-800",`--tw-shadow-color: #9a3412;
`],["shadow-orange-900",`--tw-shadow-color: #7c2d12;
`],["shadow-orange-950",`--tw-shadow-color: #431407;
`],["shadow-amber-50",`--tw-shadow-color: #fffbeb;
`],["shadow-amber-100",`--tw-shadow-color: #fef3c7;
`],["shadow-amber-200",`--tw-shadow-color: #fde68a;
`],["shadow-amber-300",`--tw-shadow-color: #fcd34d;
`],["shadow-amber-400",`--tw-shadow-color: #fbbf24;
`],["shadow-amber-500",`--tw-shadow-color: #f59e0b;
`],["shadow-amber-600",`--tw-shadow-color: #d97706;
`],["shadow-amber-700",`--tw-shadow-color: #b45309;
`],["shadow-amber-800",`--tw-shadow-color: #92400e;
`],["shadow-amber-900",`--tw-shadow-color: #78350f;
`],["shadow-amber-950",`--tw-shadow-color: #451a03;
`],["shadow-yellow-50",`--tw-shadow-color: #fefce8;
`],["shadow-yellow-100",`--tw-shadow-color: #fef9c3;
`],["shadow-yellow-200",`--tw-shadow-color: #fef08a;
`],["shadow-yellow-300",`--tw-shadow-color: #fde047;
`],["shadow-yellow-400",`--tw-shadow-color: #facc15;
`],["shadow-yellow-500",`--tw-shadow-color: #eab308;
`],["shadow-yellow-600",`--tw-shadow-color: #ca8a04;
`],["shadow-yellow-700",`--tw-shadow-color: #a16207;
`],["shadow-yellow-800",`--tw-shadow-color: #854d0e;
`],["shadow-yellow-900",`--tw-shadow-color: #713f12;
`],["shadow-yellow-950",`--tw-shadow-color: #422006;
`],["shadow-lime-50",`--tw-shadow-color: #f7fee7;
`],["shadow-lime-100",`--tw-shadow-color: #ecfccb;
`],["shadow-lime-200",`--tw-shadow-color: #d9f99d;
`],["shadow-lime-300",`--tw-shadow-color: #bef264;
`],["shadow-lime-400",`--tw-shadow-color: #a3e635;
`],["shadow-lime-500",`--tw-shadow-color: #84cc16;
`],["shadow-lime-600",`--tw-shadow-color: #65a30d;
`],["shadow-lime-700",`--tw-shadow-color: #4d7c0f;
`],["shadow-lime-800",`--tw-shadow-color: #3f6212;
`],["shadow-lime-900",`--tw-shadow-color: #365314;
`],["shadow-lime-950",`--tw-shadow-color: #1a2e05;
`],["shadow-green-50",`--tw-shadow-color: #f0fdf4;
`],["shadow-green-100",`--tw-shadow-color: #dcfce7;
`],["shadow-green-200",`--tw-shadow-color: #bbf7d0;
`],["shadow-green-300",`--tw-shadow-color: #86efac;
`],["shadow-green-400",`--tw-shadow-color: #4ade80;
`],["shadow-green-500",`--tw-shadow-color: #22c55e;
`],["shadow-green-600",`--tw-shadow-color: #16a34a;
`],["shadow-green-700",`--tw-shadow-color: #15803d;
`],["shadow-green-800",`--tw-shadow-color: #166534;
`],["shadow-green-900",`--tw-shadow-color: #14532d;
`],["shadow-green-950",`--tw-shadow-color: #052e16;
`],["shadow-emerald-50",`--tw-shadow-color: #ecfdf5;
`],["shadow-emerald-100",`--tw-shadow-color: #d1fae5;
`],["shadow-emerald-200",`--tw-shadow-color: #a7f3d0;
`],["shadow-emerald-300",`--tw-shadow-color: #6ee7b7;
`],["shadow-emerald-400",`--tw-shadow-color: #34d399;
`],["shadow-emerald-500",`--tw-shadow-color: #10b981;
`],["shadow-emerald-600",`--tw-shadow-color: #059669;
`],["shadow-emerald-700",`--tw-shadow-color: #047857;
`],["shadow-emerald-800",`--tw-shadow-color: #065f46;
`],["shadow-emerald-900",`--tw-shadow-color: #064e3b;
`],["shadow-emerald-950",`--tw-shadow-color: #022c22;
`],["shadow-teal-50",`--tw-shadow-color: #f0fdfa;
`],["shadow-teal-100",`--tw-shadow-color: #ccfbf1;
`],["shadow-teal-200",`--tw-shadow-color: #99f6e4;
`],["shadow-teal-300",`--tw-shadow-color: #5eead4;
`],["shadow-teal-400",`--tw-shadow-color: #2dd4bf;
`],["shadow-teal-500",`--tw-shadow-color: #14b8a6;
`],["shadow-teal-600",`--tw-shadow-color: #0d9488;
`],["shadow-teal-700",`--tw-shadow-color: #0f766e;
`],["shadow-teal-800",`--tw-shadow-color: #115e59;
`],["shadow-teal-900",`--tw-shadow-color: #134e4a;
`],["shadow-teal-950",`--tw-shadow-color: #042f2e;
`],["shadow-cyan-50",`--tw-shadow-color: #ecfeff;
`],["shadow-cyan-100",`--tw-shadow-color: #cffafe;
`],["shadow-cyan-200",`--tw-shadow-color: #a5f3fc;
`],["shadow-cyan-300",`--tw-shadow-color: #67e8f9;
`],["shadow-cyan-400",`--tw-shadow-color: #22d3ee;
`],["shadow-cyan-500",`--tw-shadow-color: #06b6d4;
`],["shadow-cyan-600",`--tw-shadow-color: #0891b2;
`],["shadow-cyan-700",`--tw-shadow-color: #0e7490;
`],["shadow-cyan-800",`--tw-shadow-color: #155e75;
`],["shadow-cyan-900",`--tw-shadow-color: #164e63;
`],["shadow-cyan-950",`--tw-shadow-color: #083344;
`],["shadow-sky-50",`--tw-shadow-color: #f0f9ff;
`],["shadow-sky-100",`--tw-shadow-color: #e0f2fe;
`],["shadow-sky-200",`--tw-shadow-color: #bae6fd;
`],["shadow-sky-300",`--tw-shadow-color: #7dd3fc;
`],["shadow-sky-400",`--tw-shadow-color: #38bdf8;
`],["shadow-sky-500",`--tw-shadow-color: #0ea5e9;
`],["shadow-sky-600",`--tw-shadow-color: #0284c7;
`],["shadow-sky-700",`--tw-shadow-color: #0369a1;
`],["shadow-sky-800",`--tw-shadow-color: #075985;
`],["shadow-sky-900",`--tw-shadow-color: #0c4a6e;
`],["shadow-sky-950",`--tw-shadow-color: #082f49;
`],["shadow-blue-50",`--tw-shadow-color: #eff6ff;
`],["shadow-blue-100",`--tw-shadow-color: #dbeafe;
`],["shadow-blue-200",`--tw-shadow-color: #bfdbfe;
`],["shadow-blue-300",`--tw-shadow-color: #93c5fd;
`],["shadow-blue-400",`--tw-shadow-color: #60a5fa;
`],["shadow-blue-500",`--tw-shadow-color: #3b82f6;
`],["shadow-blue-600",`--tw-shadow-color: #2563eb;
`],["shadow-blue-700",`--tw-shadow-color: #1d4ed8;
`],["shadow-blue-800",`--tw-shadow-color: #1e40af;
`],["shadow-blue-900",`--tw-shadow-color: #1e3a8a;
`],["shadow-blue-950",`--tw-shadow-color: #172554;
`],["shadow-indigo-50",`--tw-shadow-color: #eef2ff;
`],["shadow-indigo-100",`--tw-shadow-color: #e0e7ff;
`],["shadow-indigo-200",`--tw-shadow-color: #c7d2fe;
`],["shadow-indigo-300",`--tw-shadow-color: #a5b4fc;
`],["shadow-indigo-400",`--tw-shadow-color: #818cf8;
`],["shadow-indigo-500",`--tw-shadow-color: #6366f1;
`],["shadow-indigo-600",`--tw-shadow-color: #4f46e5;
`],["shadow-indigo-700",`--tw-shadow-color: #4338ca;
`],["shadow-indigo-800",`--tw-shadow-color: #3730a3;
`],["shadow-indigo-900",`--tw-shadow-color: #312e81;
`],["shadow-indigo-950",`--tw-shadow-color: #1e1b4b;
`],["shadow-violet-50",`--tw-shadow-color: #f5f3ff;
`],["shadow-violet-100",`--tw-shadow-color: #ede9fe;
`],["shadow-violet-200",`--tw-shadow-color: #ddd6fe;
`],["shadow-violet-300",`--tw-shadow-color: #c4b5fd;
`],["shadow-violet-400",`--tw-shadow-color: #a78bfa;
`],["shadow-violet-500",`--tw-shadow-color: #8b5cf6;
`],["shadow-violet-600",`--tw-shadow-color: #7c3aed;
`],["shadow-violet-700",`--tw-shadow-color: #6d28d9;
`],["shadow-violet-800",`--tw-shadow-color: #5b21b6;
`],["shadow-violet-900",`--tw-shadow-color: #4c1d95;
`],["shadow-violet-950",`--tw-shadow-color: #2e1065;
`],["shadow-purple-50",`--tw-shadow-color: #faf5ff;
`],["shadow-purple-100",`--tw-shadow-color: #f3e8ff;
`],["shadow-purple-200",`--tw-shadow-color: #e9d5ff;
`],["shadow-purple-300",`--tw-shadow-color: #d8b4fe;
`],["shadow-purple-400",`--tw-shadow-color: #c084fc;
`],["shadow-purple-500",`--tw-shadow-color: #a855f7;
`],["shadow-purple-600",`--tw-shadow-color: #9333ea;
`],["shadow-purple-700",`--tw-shadow-color: #7e22ce;
`],["shadow-purple-800",`--tw-shadow-color: #6b21a8;
`],["shadow-purple-900",`--tw-shadow-color: #581c87;
`],["shadow-purple-950",`--tw-shadow-color: #3b0764;
`],["shadow-fuchsia-50",`--tw-shadow-color: #fdf4ff;
`],["shadow-fuchsia-100",`--tw-shadow-color: #fae8ff;
`],["shadow-fuchsia-200",`--tw-shadow-color: #f5d0fe;
`],["shadow-fuchsia-300",`--tw-shadow-color: #f0abfc;
`],["shadow-fuchsia-400",`--tw-shadow-color: #e879f9;
`],["shadow-fuchsia-500",`--tw-shadow-color: #d946ef;
`],["shadow-fuchsia-600",`--tw-shadow-color: #c026d3;
`],["shadow-fuchsia-700",`--tw-shadow-color: #a21caf;
`],["shadow-fuchsia-800",`--tw-shadow-color: #86198f;
`],["shadow-fuchsia-900",`--tw-shadow-color: #701a75;
`],["shadow-fuchsia-950",`--tw-shadow-color: #4a044e;
`],["shadow-pink-50",`--tw-shadow-color: #fdf2f8;
`],["shadow-pink-100",`--tw-shadow-color: #fce7f3;
`],["shadow-pink-200",`--tw-shadow-color: #fbcfe8;
`],["shadow-pink-300",`--tw-shadow-color: #f9a8d4;
`],["shadow-pink-400",`--tw-shadow-color: #f472b6;
`],["shadow-pink-500",`--tw-shadow-color: #ec4899;
`],["shadow-pink-600",`--tw-shadow-color: #db2777;
`],["shadow-pink-700",`--tw-shadow-color: #be185d;
`],["shadow-pink-800",`--tw-shadow-color: #9d174d;
`],["shadow-pink-900",`--tw-shadow-color: #831843;
`],["shadow-pink-950",`--tw-shadow-color: #500724;
`],["shadow-rose-50",`--tw-shadow-color: #fff1f2;
`],["shadow-rose-100",`--tw-shadow-color: #ffe4e6;
`],["shadow-rose-200",`--tw-shadow-color: #fecdd3;
`],["shadow-rose-300",`--tw-shadow-color: #fda4af;
`],["shadow-rose-400",`--tw-shadow-color: #fb7185;
`],["shadow-rose-500",`--tw-shadow-color: #f43f5e;
`],["shadow-rose-600",`--tw-shadow-color: #e11d48;
`],["shadow-rose-700",`--tw-shadow-color: #be123c;
`],["shadow-rose-800",`--tw-shadow-color: #9f1239;
`],["shadow-rose-900",`--tw-shadow-color: #881337;
`],["shadow-rose-950",`--tw-shadow-color: #4c0519;
`]]},{url:"https://tailwindcss.com/docs/opacity",entry:"Opacity",description:"Utilities for controlling the opacity of an element.",parameters:[["opacity-0",`opacity: 0;
`],["opacity-5",`opacity: 0.05;
`],["opacity-10",`opacity: 0.1;
`],["opacity-15",`opacity: 0.15;
`],["opacity-20",`opacity: 0.2;
`],["opacity-25",`opacity: 0.25;
`],["opacity-30",`opacity: 0.3;
`],["opacity-35",`opacity: 0.35;
`],["opacity-40",`opacity: 0.4;
`],["opacity-45",`opacity: 0.45;
`],["opacity-50",`opacity: 0.5;
`],["opacity-55",`opacity: 0.55;
`],["opacity-60",`opacity: 0.6;
`],["opacity-65",`opacity: 0.65;
`],["opacity-70",`opacity: 0.7;
`],["opacity-75",`opacity: 0.75;
`],["opacity-80",`opacity: 0.8;
`],["opacity-85",`opacity: 0.85;
`],["opacity-90",`opacity: 0.9;
`],["opacity-95",`opacity: 0.95;
`],["opacity-100",`opacity: 1;
`]]},{url:"https://tailwindcss.com/docs/mix-blend-mode",entry:"Mix Blend Mode",description:"Utilities for controlling how an element should blend with the background.",parameters:[["mix-blend-normal",`mix-blend-mode: normal;
`],["mix-blend-multiply",`mix-blend-mode: multiply;
`],["mix-blend-screen",`mix-blend-mode: screen;
`],["mix-blend-overlay",`mix-blend-mode: overlay;
`],["mix-blend-darken",`mix-blend-mode: darken;
`],["mix-blend-lighten",`mix-blend-mode: lighten;
`],["mix-blend-color-dodge",`mix-blend-mode: color-dodge;
`],["mix-blend-color-burn",`mix-blend-mode: color-burn;
`],["mix-blend-hard-light",`mix-blend-mode: hard-light;
`],["mix-blend-soft-light",`mix-blend-mode: soft-light;
`],["mix-blend-difference",`mix-blend-mode: difference;
`],["mix-blend-exclusion",`mix-blend-mode: exclusion;
`],["mix-blend-hue",`mix-blend-mode: hue;
`],["mix-blend-saturation",`mix-blend-mode: saturation;
`],["mix-blend-color",`mix-blend-mode: color;
`],["mix-blend-luminosity",`mix-blend-mode: luminosity;
`],["mix-blend-plus-darker",`mix-blend-mode: plus-darker;
`],["mix-blend-plus-lighter",`mix-blend-mode: plus-lighter;
`]]},{url:"https://tailwindcss.com/docs/background-blend-mode",entry:"Background Blend Mode",description:"Utilities for controlling how an element's background image should blend with its background color.",parameters:[["bg-blend-normal",`background-blend-mode: normal;
`],["bg-blend-multiply",`background-blend-mode: multiply;
`],["bg-blend-screen",`background-blend-mode: screen;
`],["bg-blend-overlay",`background-blend-mode: overlay;
`],["bg-blend-darken",`background-blend-mode: darken;
`],["bg-blend-lighten",`background-blend-mode: lighten;
`],["bg-blend-color-dodge",`background-blend-mode: color-dodge;
`],["bg-blend-color-burn",`background-blend-mode: color-burn;
`],["bg-blend-hard-light",`background-blend-mode: hard-light;
`],["bg-blend-soft-light",`background-blend-mode: soft-light;
`],["bg-blend-difference",`background-blend-mode: difference;
`],["bg-blend-exclusion",`background-blend-mode: exclusion;
`],["bg-blend-hue",`background-blend-mode: hue;
`],["bg-blend-saturation",`background-blend-mode: saturation;
`],["bg-blend-color",`background-blend-mode: color;
`],["bg-blend-luminosity",`background-blend-mode: luminosity;
`]]}],Ns=[{url:"https://tailwindcss.com/docs/blur",entry:"Blur",description:"Utilities for applying blur filters to an element.",parameters:[["blur-none",`filter:  ;
`],["blur-sm",`filter: blur(4px);
`],["blur",`filter: blur(8px);
`],["blur-md",`filter: blur(12px);
`],["blur-lg",`filter: blur(16px);
`],["blur-xl",`filter: blur(24px);
`],["blur-2xl",`filter: blur(40px);
`],["blur-3xl",`filter: blur(64px);
`]]},{url:"https://tailwindcss.com/docs/brightness",entry:"Brightness",description:"Utilities for applying brightness filters to an element.",parameters:[["brightness-0",`filter: brightness(0);
`],["brightness-50",`filter: brightness(.5);
`],["brightness-75",`filter: brightness(.75);
`],["brightness-90",`filter: brightness(.9);
`],["brightness-95",`filter: brightness(.95);
`],["brightness-100",`filter: brightness(1);
`],["brightness-105",`filter: brightness(1.05);
`],["brightness-110",`filter: brightness(1.1);
`],["brightness-125",`filter: brightness(1.25);
`],["brightness-150",`filter: brightness(1.5);
`],["brightness-200",`filter: brightness(2);
`]]},{url:"https://tailwindcss.com/docs/contrast",entry:"Contrast",description:"Utilities for applying contrast filters to an element.",parameters:[["contrast-0",`filter: contrast(0);
`],["contrast-50",`filter: contrast(.5);
`],["contrast-75",`filter: contrast(.75);
`],["contrast-100",`filter: contrast(1);
`],["contrast-125",`filter: contrast(1.25);
`],["contrast-150",`filter: contrast(1.5);
`],["contrast-200",`filter: contrast(2);
`]]},{url:"https://tailwindcss.com/docs/drop-shadow",entry:"Drop Shadow",description:"Utilities for applying drop-shadow filters to an element.",parameters:[["drop-shadow-sm",`filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
`],["drop-shadow",`filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
`],["drop-shadow-md",`filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`],["drop-shadow-lg",`filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`],["drop-shadow-xl",`filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`],["drop-shadow-2xl",`filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
`],["drop-shadow-none",`filter: drop-shadow(0 0 #0000);
`]]},{url:"https://tailwindcss.com/docs/grayscale",entry:"Grayscale",description:"Utilities for applying grayscale filters to an element.",parameters:[["grayscale-0",`filter: grayscale(0);
`],["grayscale",`filter: grayscale(100%);
`]]},{url:"https://tailwindcss.com/docs/hue-rotate",entry:"Hue Rotate",description:"Utilities for applying hue-rotate filters to an element.",parameters:[["hue-rotate-0",`filter: hue-rotate(0deg);
`],["hue-rotate-15",`filter: hue-rotate(15deg);
`],["hue-rotate-30",`filter: hue-rotate(30deg);
`],["hue-rotate-60",`filter: hue-rotate(60deg);
`],["hue-rotate-90",`filter: hue-rotate(90deg);
`],["hue-rotate-180",`filter: hue-rotate(180deg);
`]]},{url:"https://tailwindcss.com/docs/invert",entry:"Invert",description:"Utilities for applying invert filters to an element.",parameters:[["invert-0",`filter: invert(0);
`],["invert",`filter: invert(100%);
`]]},{url:"https://tailwindcss.com/docs/saturate",entry:"Saturate",description:"Utilities for applying saturation filters to an element.",parameters:[["saturate-0",`filter: saturate(0);
`],["saturate-50",`filter: saturate(.5);
`],["saturate-100",`filter: saturate(1);
`],["saturate-150",`filter: saturate(1.5);
`],["saturate-200",`filter: saturate(2);
`]]},{url:"https://tailwindcss.com/docs/sepia",entry:"Sepia",description:"Utilities for applying sepia filters to an element.",parameters:[["sepia-0",`filter: sepia(0);
`],["sepia",`filter: sepia(100%);
`]]},{url:"https://tailwindcss.com/docs/backdrop-blur",entry:"Backdrop Blur",description:"Utilities for applying backdrop blur filters to an element.",parameters:[["backdrop-blur-none",`backdrop-filter:  ;
`],["backdrop-blur-sm",`backdrop-filter: blur(4px);
`],["backdrop-blur",`backdrop-filter: blur(8px);
`],["backdrop-blur-md",`backdrop-filter: blur(12px);
`],["backdrop-blur-lg",`backdrop-filter: blur(16px);
`],["backdrop-blur-xl",`backdrop-filter: blur(24px);
`],["backdrop-blur-2xl",`backdrop-filter: blur(40px);
`],["backdrop-blur-3xl",`backdrop-filter: blur(64px);
`]]},{url:"https://tailwindcss.com/docs/backdrop-brightness",entry:"Backdrop Brightness",description:"Utilities for applying backdrop brightness filters to an element.",parameters:[["backdrop-brightness-0",`backdrop-filter: brightness(0);
`],["backdrop-brightness-50",`backdrop-filter: brightness(.5);
`],["backdrop-brightness-75",`backdrop-filter: brightness(.75);
`],["backdrop-brightness-90",`backdrop-filter: brightness(.9);
`],["backdrop-brightness-95",`backdrop-filter: brightness(.95);
`],["backdrop-brightness-100",`backdrop-filter: brightness(1);
`],["backdrop-brightness-105",`backdrop-filter: brightness(1.05);
`],["backdrop-brightness-110",`backdrop-filter: brightness(1.1);
`],["backdrop-brightness-125",`backdrop-filter: brightness(1.25);
`],["backdrop-brightness-150",`backdrop-filter: brightness(1.5);
`],["backdrop-brightness-200",`backdrop-filter: brightness(2);
`]]},{url:"https://tailwindcss.com/docs/backdrop-contrast",entry:"Backdrop Contrast",description:"Utilities for applying backdrop contrast filters to an element.",parameters:[["backdrop-contrast-0",`backdrop-filter: contrast(0);
`],["backdrop-contrast-50",`backdrop-filter: contrast(.5);
`],["backdrop-contrast-75",`backdrop-filter: contrast(.75);
`],["backdrop-contrast-100",`backdrop-filter: contrast(1);
`],["backdrop-contrast-125",`backdrop-filter: contrast(1.25);
`],["backdrop-contrast-150",`backdrop-filter: contrast(1.5);
`],["backdrop-contrast-200",`backdrop-filter: contrast(2);
`]]},{url:"https://tailwindcss.com/docs/backdrop-grayscale",entry:"Backdrop Grayscale",description:"Utilities for applying backdrop grayscale filters to an element.",parameters:[["backdrop-grayscale-0",`backdrop-filter: grayscale(0);
`],["backdrop-grayscale",`backdrop-filter: grayscale(100%);
`]]},{url:"https://tailwindcss.com/docs/backdrop-hue-rotate",entry:"Backdrop Hue Rotate",description:"Utilities for applying backdrop hue-rotate filters to an element.",parameters:[["backdrop-hue-rotate-0",`backdrop-filter: hue-rotate(0deg);
`],["backdrop-hue-rotate-15",`backdrop-filter: hue-rotate(15deg);
`],["backdrop-hue-rotate-30",`backdrop-filter: hue-rotate(30deg);
`],["backdrop-hue-rotate-60",`backdrop-filter: hue-rotate(60deg);
`],["backdrop-hue-rotate-90",`backdrop-filter: hue-rotate(90deg);
`],["backdrop-hue-rotate-180",`backdrop-filter: hue-rotate(180deg);
`]]},{url:"https://tailwindcss.com/docs/backdrop-invert",entry:"Backdrop Invert",description:"Utilities for applying backdrop invert filters to an element.",parameters:[["backdrop-invert-0",`backdrop-filter: invert(0);
`],["backdrop-invert",`backdrop-filter: invert(100%);
`]]},{url:"https://tailwindcss.com/docs/backdrop-opacity",entry:"Backdrop Opacity",description:"Utilities for applying backdrop opacity filters to an element.",parameters:[["backdrop-opacity-0",`backdrop-filter: opacity(0);
`],["backdrop-opacity-5",`backdrop-filter: opacity(0.05);
`],["backdrop-opacity-10",`backdrop-filter: opacity(0.1);
`],["backdrop-opacity-15",`backdrop-filter: opacity(0.15);
`],["backdrop-opacity-20",`backdrop-filter: opacity(0.2);
`],["backdrop-opacity-25",`backdrop-filter: opacity(0.25);
`],["backdrop-opacity-30",`backdrop-filter: opacity(0.3);
`],["backdrop-opacity-35",`backdrop-filter: opacity(0.35);
`],["backdrop-opacity-40",`backdrop-filter: opacity(0.4);
`],["backdrop-opacity-45",`backdrop-filter: opacity(0.45);
`],["backdrop-opacity-50",`backdrop-filter: opacity(0.5);
`],["backdrop-opacity-55",`backdrop-filter: opacity(0.55);
`],["backdrop-opacity-60",`backdrop-filter: opacity(0.6);
`],["backdrop-opacity-65",`backdrop-filter: opacity(0.65);
`],["backdrop-opacity-70",`backdrop-filter: opacity(0.7);
`],["backdrop-opacity-75",`backdrop-filter: opacity(0.75);
`],["backdrop-opacity-80",`backdrop-filter: opacity(0.8);
`],["backdrop-opacity-85",`backdrop-filter: opacity(0.85);
`],["backdrop-opacity-90",`backdrop-filter: opacity(0.9);
`],["backdrop-opacity-95",`backdrop-filter: opacity(0.95);
`],["backdrop-opacity-100",`backdrop-filter: opacity(1);
`]]},{url:"https://tailwindcss.com/docs/backdrop-saturate",entry:"Backdrop Saturate",description:"Utilities for applying backdrop saturation filters to an element.",parameters:[["backdrop-saturate-0",`backdrop-filter: saturate(0);
`],["backdrop-saturate-50",`backdrop-filter: saturate(.5);
`],["backdrop-saturate-100",`backdrop-filter: saturate(1);
`],["backdrop-saturate-150",`backdrop-filter: saturate(1.5);
`],["backdrop-saturate-200",`backdrop-filter: saturate(2);
`]]},{url:"https://tailwindcss.com/docs/backdrop-sepia",entry:"Backdrop Sepia",description:"Utilities for applying backdrop sepia filters to an element.",parameters:[["backdrop-sepia-0",`backdrop-filter: sepia(0);
`],["backdrop-sepia",`backdrop-filter: sepia(100%);
`]]}],zs=[{url:"https://tailwindcss.com/docs/border-collapse",entry:"Border Collapse",description:"Utilities for controlling whether table borders should collapse or be separated.",parameters:[["border-collapse",`border-collapse: collapse;
`],["border-separate",`border-collapse: separate;
`]]},{url:"https://tailwindcss.com/docs/border-spacing",entry:"Border Spacing",description:"Utilities for controlling the spacing between table borders.",parameters:[["border-spacing-0",`border-spacing: 0px 0px;
`],["border-spacing-x-0",`border-spacing: 0px var(--tw-border-spacing-y);
`],["border-spacing-y-0",`border-spacing: var(--tw-border-spacing-x) 0px;
`],["border-spacing-px",`border-spacing: 1px 1px;
`],["border-spacing-x-px",`border-spacing: 1px var(--tw-border-spacing-y);
`],["border-spacing-y-px",`border-spacing: var(--tw-border-spacing-x) 1px;
`],["border-spacing-0.5",`border-spacing: 0.125rem 0.125rem;
`],["border-spacing-x-0.5",`border-spacing: 0.125rem var(--tw-border-spacing-y);
`],["border-spacing-y-0.5",`border-spacing: var(--tw-border-spacing-x) 0.125rem;
`],["border-spacing-1",`border-spacing: 0.25rem 0.25rem;
`],["border-spacing-x-1",`border-spacing: 0.25rem var(--tw-border-spacing-y);
`],["border-spacing-y-1",`border-spacing: var(--tw-border-spacing-x) 0.25rem;
`],["border-spacing-1.5",`border-spacing: 0.375rem 0.375rem;
`],["border-spacing-x-1.5",`border-spacing: 0.375rem var(--tw-border-spacing-y);
`],["border-spacing-y-1.5",`border-spacing: var(--tw-border-spacing-x) 0.375rem;
`],["border-spacing-2",`border-spacing: 0.5rem 0.5rem;
`],["border-spacing-x-2",`border-spacing: 0.5rem var(--tw-border-spacing-y);
`],["border-spacing-y-2",`border-spacing: var(--tw-border-spacing-x) 0.5rem;
`],["border-spacing-2.5",`border-spacing: 0.625rem 0.625rem;
`],["border-spacing-x-2.5",`border-spacing: 0.625rem var(--tw-border-spacing-y);
`],["border-spacing-y-2.5",`border-spacing: var(--tw-border-spacing-x) 0.625rem;
`],["border-spacing-3",`border-spacing: 0.75rem 0.75rem;
`],["border-spacing-x-3",`border-spacing: 0.75rem var(--tw-border-spacing-y);
`],["border-spacing-y-3",`border-spacing: var(--tw-border-spacing-x) 0.75rem;
`],["border-spacing-3.5",`border-spacing: 0.875rem 0.875rem;
`],["border-spacing-x-3.5",`border-spacing: 0.875rem var(--tw-border-spacing-y);
`],["border-spacing-y-3.5",`border-spacing: var(--tw-border-spacing-x) 0.875rem;
`],["border-spacing-4",`border-spacing: 1rem 1rem;
`],["border-spacing-x-4",`border-spacing: 1rem var(--tw-border-spacing-y);
`],["border-spacing-y-4",`border-spacing: var(--tw-border-spacing-x) 1rem;
`],["border-spacing-5",`border-spacing: 1.25rem 1.25rem;
`],["border-spacing-x-5",`border-spacing: 1.25rem var(--tw-border-spacing-y);
`],["border-spacing-y-5",`border-spacing: var(--tw-border-spacing-x) 1.25rem;
`],["border-spacing-6",`border-spacing: 1.5rem 1.5rem;
`],["border-spacing-x-6",`border-spacing: 1.5rem var(--tw-border-spacing-y);
`],["border-spacing-y-6",`border-spacing: var(--tw-border-spacing-x) 1.5rem;
`],["border-spacing-7",`border-spacing: 1.75rem 1.75rem;
`],["border-spacing-x-7",`border-spacing: 1.75rem var(--tw-border-spacing-y);
`],["border-spacing-y-7",`border-spacing: var(--tw-border-spacing-x) 1.75rem;
`],["border-spacing-8",`border-spacing: 2rem 2rem;
`],["border-spacing-x-8",`border-spacing: 2rem var(--tw-border-spacing-y);
`],["border-spacing-y-8",`border-spacing: var(--tw-border-spacing-x) 2rem;
`],["border-spacing-9",`border-spacing: 2.25rem 2.25rem;
`],["border-spacing-x-9",`border-spacing: 2.25rem var(--tw-border-spacing-y);
`],["border-spacing-y-9",`border-spacing: var(--tw-border-spacing-x) 2.25rem;
`],["border-spacing-10",`border-spacing: 2.5rem 2.5rem;
`],["border-spacing-x-10",`border-spacing: 2.5rem var(--tw-border-spacing-y);
`],["border-spacing-y-10",`border-spacing: var(--tw-border-spacing-x) 2.5rem;
`],["border-spacing-11",`border-spacing: 2.75rem 2.75rem;
`],["border-spacing-x-11",`border-spacing: 2.75rem var(--tw-border-spacing-y);
`],["border-spacing-y-11",`border-spacing: var(--tw-border-spacing-x) 2.75rem;
`],["border-spacing-12",`border-spacing: 3rem 3rem;
`],["border-spacing-x-12",`border-spacing: 3rem var(--tw-border-spacing-y);
`],["border-spacing-y-12",`border-spacing: var(--tw-border-spacing-x) 3rem;
`],["border-spacing-14",`border-spacing: 3.5rem 3.5rem;
`],["border-spacing-x-14",`border-spacing: 3.5rem var(--tw-border-spacing-y);
`],["border-spacing-y-14",`border-spacing: var(--tw-border-spacing-x) 3.5rem;
`],["border-spacing-16",`border-spacing: 4rem 4rem;
`],["border-spacing-x-16",`border-spacing: 4rem var(--tw-border-spacing-y);
`],["border-spacing-y-16",`border-spacing: var(--tw-border-spacing-x) 4rem;
`],["border-spacing-20",`border-spacing: 5rem 5rem;
`],["border-spacing-x-20",`border-spacing: 5rem var(--tw-border-spacing-y);
`],["border-spacing-y-20",`border-spacing: var(--tw-border-spacing-x) 5rem;
`],["border-spacing-24",`border-spacing: 6rem 6rem;
`],["border-spacing-x-24",`border-spacing: 6rem var(--tw-border-spacing-y);
`],["border-spacing-y-24",`border-spacing: var(--tw-border-spacing-x) 6rem;
`],["border-spacing-28",`border-spacing: 7rem 7rem;
`],["border-spacing-x-28",`border-spacing: 7rem var(--tw-border-spacing-y);
`],["border-spacing-y-28",`border-spacing: var(--tw-border-spacing-x) 7rem;
`],["border-spacing-32",`border-spacing: 8rem 8rem;
`],["border-spacing-x-32",`border-spacing: 8rem var(--tw-border-spacing-y);
`],["border-spacing-y-32",`border-spacing: var(--tw-border-spacing-x) 8rem;
`],["border-spacing-36",`border-spacing: 9rem 9rem;
`],["border-spacing-x-36",`border-spacing: 9rem var(--tw-border-spacing-y);
`],["border-spacing-y-36",`border-spacing: var(--tw-border-spacing-x) 9rem;
`],["border-spacing-40",`border-spacing: 10rem 10rem;
`],["border-spacing-x-40",`border-spacing: 10rem var(--tw-border-spacing-y);
`],["border-spacing-y-40",`border-spacing: var(--tw-border-spacing-x) 10rem;
`],["border-spacing-44",`border-spacing: 11rem 11rem;
`],["border-spacing-x-44",`border-spacing: 11rem var(--tw-border-spacing-y);
`],["border-spacing-y-44",`border-spacing: var(--tw-border-spacing-x) 11rem;
`],["border-spacing-48",`border-spacing: 12rem 12rem;
`],["border-spacing-x-48",`border-spacing: 12rem var(--tw-border-spacing-y);
`],["border-spacing-y-48",`border-spacing: var(--tw-border-spacing-x) 12rem;
`],["border-spacing-52",`border-spacing: 13rem 13rem;
`],["border-spacing-x-52",`border-spacing: 13rem var(--tw-border-spacing-y);
`],["border-spacing-y-52",`border-spacing: var(--tw-border-spacing-x) 13rem;
`],["border-spacing-56",`border-spacing: 14rem 14rem;
`],["border-spacing-x-56",`border-spacing: 14rem var(--tw-border-spacing-y);
`],["border-spacing-y-56",`border-spacing: var(--tw-border-spacing-x) 14rem;
`],["border-spacing-60",`border-spacing: 15rem 15rem;
`],["border-spacing-x-60",`border-spacing: 15rem var(--tw-border-spacing-y);
`],["border-spacing-y-60",`border-spacing: var(--tw-border-spacing-x) 15rem;
`],["border-spacing-64",`border-spacing: 16rem 16rem;
`],["border-spacing-x-64",`border-spacing: 16rem var(--tw-border-spacing-y);
`],["border-spacing-y-64",`border-spacing: var(--tw-border-spacing-x) 16rem;
`],["border-spacing-72",`border-spacing: 18rem 18rem;
`],["border-spacing-x-72",`border-spacing: 18rem var(--tw-border-spacing-y);
`],["border-spacing-y-72",`border-spacing: var(--tw-border-spacing-x) 18rem;
`],["border-spacing-80",`border-spacing: 20rem 20rem;
`],["border-spacing-x-80",`border-spacing: 20rem var(--tw-border-spacing-y);
`],["border-spacing-y-80",`border-spacing: var(--tw-border-spacing-x) 20rem;
`],["border-spacing-96",`border-spacing: 24rem 24rem;
`],["border-spacing-x-96",`border-spacing: 24rem var(--tw-border-spacing-y);
`],["border-spacing-y-96",`border-spacing: var(--tw-border-spacing-x) 24rem;
`]]},{url:"https://tailwindcss.com/docs/table-layout",entry:"Table Layout",description:"Utilities for controlling the table layout algorithm.",parameters:[["table-auto",`table-layout: auto;
`],["table-fixed",`table-layout: fixed;
`]]},{url:"https://tailwindcss.com/docs/caption-side",entry:"Caption Side",description:"Utilities for controlling the alignment of a caption element inside of a table.",parameters:[["caption-top",`caption-side: top;
`],["caption-bottom",`caption-side: bottom;
`]]}],Ss=[{url:"https://tailwindcss.com/docs/transition-property",entry:"Transition Property",description:"Utilities for controlling which CSS properties transition.",parameters:[["transition-none",`transition-property: none;
`],["transition-all",`transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
`],["transition",`transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
`],["transition-colors",`transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
`],["transition-opacity",`transition-property: opacity;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
`],["transition-shadow",`transition-property: box-shadow;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
`],["transition-transform",`transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
`]]},{url:"https://tailwindcss.com/docs/transition-duration",entry:"Transition Duration",description:"Utilities for controlling the duration of CSS transitions.",parameters:[["duration-0",`transition-duration: 0s;
`],["duration-75",`transition-duration: 75ms;
`],["duration-100",`transition-duration: 100ms;
`],["duration-150",`transition-duration: 150ms;
`],["duration-200",`transition-duration: 200ms;
`],["duration-300",`transition-duration: 300ms;
`],["duration-500",`transition-duration: 500ms;
`],["duration-700",`transition-duration: 700ms;
`],["duration-1000",`transition-duration: 1000ms;
`]]},{url:"https://tailwindcss.com/docs/transition-timing-function",entry:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions.",parameters:[["ease-linear",`transition-timing-function: linear;
`],["ease-in",`transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
`],["ease-out",`transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
`],["ease-in-out",`transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`]]},{url:"https://tailwindcss.com/docs/transition-delay",entry:"Transition Delay",description:"Utilities for controlling the delay of CSS transitions.",parameters:[["delay-0",`transition-delay: 0s;
`],["delay-75",`transition-delay: 75ms;
`],["delay-100",`transition-delay: 100ms;
`],["delay-150",`transition-delay: 150ms;
`],["delay-200",`transition-delay: 200ms;
`],["delay-300",`transition-delay: 300ms;
`],["delay-500",`transition-delay: 500ms;
`],["delay-700",`transition-delay: 700ms;
`],["delay-1000",`transition-delay: 1000ms;
`]]},{url:"https://tailwindcss.com/docs/animation",entry:"Animation",description:"Utilities for animating elements with CSS animations.",parameters:[["animate-none","animation: none;"],["animate-spin",`animation: spin 1s linear infinite;

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`],["animate-ping",`animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`],["animate-pulse",`animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}`],["animate-bounce",`animation: bounce 1s infinite;

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`]]}],Cs=[{url:"https://tailwindcss.com/docs/scale",entry:"Scale",description:"Utilities for scaling elements with transform.",parameters:[["scale-0",`transform: scale(0);
`],["scale-x-0",`transform: scaleX(0);
`],["scale-y-0",`transform: scaleY(0);
`],["scale-50",`transform: scale(.5);
`],["scale-x-50",`transform: scaleX(.5);
`],["scale-y-50",`transform: scaleY(.5);
`],["scale-75",`transform: scale(.75);
`],["scale-x-75",`transform: scaleX(.75);
`],["scale-y-75",`transform: scaleY(.75);
`],["scale-90",`transform: scale(.9);
`],["scale-x-90",`transform: scaleX(.9);
`],["scale-y-90",`transform: scaleY(.9);
`],["scale-95",`transform: scale(.95);
`],["scale-x-95",`transform: scaleX(.95);
`],["scale-y-95",`transform: scaleY(.95);
`],["scale-100",`transform: scale(1);
`],["scale-x-100",`transform: scaleX(1);
`],["scale-y-100",`transform: scaleY(1);
`],["scale-105",`transform: scale(1.05);
`],["scale-x-105",`transform: scaleX(1.05);
`],["scale-y-105",`transform: scaleY(1.05);
`],["scale-110",`transform: scale(1.1);
`],["scale-x-110",`transform: scaleX(1.1);
`],["scale-y-110",`transform: scaleY(1.1);
`],["scale-125",`transform: scale(1.25);
`],["scale-x-125",`transform: scaleX(1.25);
`],["scale-y-125",`transform: scaleY(1.25);
`],["scale-150",`transform: scale(1.5);
`],["scale-x-150",`transform: scaleX(1.5);
`],["scale-y-150",`transform: scaleY(1.5);
`]]},{url:"https://tailwindcss.com/docs/rotate",entry:"Rotate",description:"Utilities for rotating elements with transform.",parameters:[["rotate-0",`transform: rotate(0deg);
`],["rotate-1",`transform: rotate(1deg);
`],["rotate-2",`transform: rotate(2deg);
`],["rotate-3",`transform: rotate(3deg);
`],["rotate-6",`transform: rotate(6deg);
`],["rotate-12",`transform: rotate(12deg);
`],["rotate-45",`transform: rotate(45deg);
`],["rotate-90",`transform: rotate(90deg);
`],["rotate-180",`transform: rotate(180deg);
`]]},{url:"https://tailwindcss.com/docs/translate",entry:"Translate",description:"Utilities for translating elements with transform.",parameters:[["translate-x-0",`transform: translateX(0px);
`],["translate-y-0",`transform: translateY(0px);
`],["translate-x-px",`transform: translateX(1px);
`],["translate-y-px",`transform: translateY(1px);
`],["translate-x-0.5",`transform: translateX(0.125rem);
`],["translate-y-0.5",`transform: translateY(0.125rem);
`],["translate-x-1",`transform: translateX(0.25rem);
`],["translate-y-1",`transform: translateY(0.25rem);
`],["translate-x-1.5",`transform: translateX(0.375rem);
`],["translate-y-1.5",`transform: translateY(0.375rem);
`],["translate-x-2",`transform: translateX(0.5rem);
`],["translate-y-2",`transform: translateY(0.5rem);
`],["translate-x-2.5",`transform: translateX(0.625rem);
`],["translate-y-2.5",`transform: translateY(0.625rem);
`],["translate-x-3",`transform: translateX(0.75rem);
`],["translate-y-3",`transform: translateY(0.75rem);
`],["translate-x-3.5",`transform: translateX(0.875rem);
`],["translate-y-3.5",`transform: translateY(0.875rem);
`],["translate-x-4",`transform: translateX(1rem);
`],["translate-y-4",`transform: translateY(1rem);
`],["translate-x-5",`transform: translateX(1.25rem);
`],["translate-y-5",`transform: translateY(1.25rem);
`],["translate-x-6",`transform: translateX(1.5rem);
`],["translate-y-6",`transform: translateY(1.5rem);
`],["translate-x-7",`transform: translateX(1.75rem);
`],["translate-y-7",`transform: translateY(1.75rem);
`],["translate-x-8",`transform: translateX(2rem);
`],["translate-y-8",`transform: translateY(2rem);
`],["translate-x-9",`transform: translateX(2.25rem);
`],["translate-y-9",`transform: translateY(2.25rem);
`],["translate-x-10",`transform: translateX(2.5rem);
`],["translate-y-10",`transform: translateY(2.5rem);
`],["translate-x-11",`transform: translateX(2.75rem);
`],["translate-y-11",`transform: translateY(2.75rem);
`],["translate-x-12",`transform: translateX(3rem);
`],["translate-y-12",`transform: translateY(3rem);
`],["translate-x-14",`transform: translateX(3.5rem);
`],["translate-y-14",`transform: translateY(3.5rem);
`],["translate-x-16",`transform: translateX(4rem);
`],["translate-y-16",`transform: translateY(4rem);
`],["translate-x-20",`transform: translateX(5rem);
`],["translate-y-20",`transform: translateY(5rem);
`],["translate-x-24",`transform: translateX(6rem);
`],["translate-y-24",`transform: translateY(6rem);
`],["translate-x-28",`transform: translateX(7rem);
`],["translate-y-28",`transform: translateY(7rem);
`],["translate-x-32",`transform: translateX(8rem);
`],["translate-y-32",`transform: translateY(8rem);
`],["translate-x-36",`transform: translateX(9rem);
`],["translate-y-36",`transform: translateY(9rem);
`],["translate-x-40",`transform: translateX(10rem);
`],["translate-y-40",`transform: translateY(10rem);
`],["translate-x-44",`transform: translateX(11rem);
`],["translate-y-44",`transform: translateY(11rem);
`],["translate-x-48",`transform: translateX(12rem);
`],["translate-y-48",`transform: translateY(12rem);
`],["translate-x-52",`transform: translateX(13rem);
`],["translate-y-52",`transform: translateY(13rem);
`],["translate-x-56",`transform: translateX(14rem);
`],["translate-y-56",`transform: translateY(14rem);
`],["translate-x-60",`transform: translateX(15rem);
`],["translate-y-60",`transform: translateY(15rem);
`],["translate-x-64",`transform: translateX(16rem);
`],["translate-y-64",`transform: translateY(16rem);
`],["translate-x-72",`transform: translateX(18rem);
`],["translate-y-72",`transform: translateY(18rem);
`],["translate-x-80",`transform: translateX(20rem);
`],["translate-y-80",`transform: translateY(20rem);
`],["translate-x-96",`transform: translateX(24rem);
`],["translate-y-96",`transform: translateY(24rem);
`],["translate-x-1/2",`transform: translateX(50%);
`],["translate-x-1/3",`transform: translateX(33.333333%);
`],["translate-x-2/3",`transform: translateX(66.666667%);
`],["translate-x-1/4",`transform: translateX(25%);
`],["translate-x-2/4",`transform: translateX(50%);
`],["translate-x-3/4",`transform: translateX(75%);
`],["translate-x-full",`transform: translateX(100%);
`],["translate-y-1/2",`transform: translateY(50%);
`],["translate-y-1/3",`transform: translateY(33.333333%);
`],["translate-y-2/3",`transform: translateY(66.666667%);
`],["translate-y-1/4",`transform: translateY(25%);
`],["translate-y-2/4",`transform: translateY(50%);
`],["translate-y-3/4",`transform: translateY(75%);
`],["translate-y-full",`transform: translateY(100%);
`]]},{url:"https://tailwindcss.com/docs/skew",entry:"Skew",description:"Utilities for skewing elements with transform.",parameters:[["skew-x-0",`transform: skewX(0deg);
`],["skew-y-0",`transform: skewY(0deg);
`],["skew-x-1",`transform: skewX(1deg);
`],["skew-y-1",`transform: skewY(1deg);
`],["skew-x-2",`transform: skewX(2deg);
`],["skew-y-2",`transform: skewY(2deg);
`],["skew-x-3",`transform: skewX(3deg);
`],["skew-y-3",`transform: skewY(3deg);
`],["skew-x-6",`transform: skewX(6deg);
`],["skew-y-6",`transform: skewY(6deg);
`],["skew-x-12",`transform: skewX(12deg);
`],["skew-y-12",`transform: skewY(12deg);
`]]},{url:"https://tailwindcss.com/docs/transform-origin",entry:"Transform Origin",description:"Utilities for specifying the origin for an element's transformations.",parameters:[["origin-center",`transform-origin: center;
`],["origin-top",`transform-origin: top;
`],["origin-top-right",`transform-origin: top right;
`],["origin-right",`transform-origin: right;
`],["origin-bottom-right",`transform-origin: bottom right;
`],["origin-bottom",`transform-origin: bottom;
`],["origin-bottom-left",`transform-origin: bottom left;
`],["origin-left",`transform-origin: left;
`],["origin-top-left",`transform-origin: top left;
`]]}],As=[{url:"https://tailwindcss.com/docs/accent-color",entry:"Accent Color",description:"Utilities for controlling the accented color of a form control.",parameters:[["accent-inherit",`accent-color: inherit;
`],["accent-current",`accent-color: currentColor;
`],["accent-transparent",`accent-color: transparent;
`],["accent-black",`accent-color: #000;
`],["accent-white",`accent-color: #fff;
`],["accent-slate-50",`accent-color: #f8fafc;
`],["accent-slate-100",`accent-color: #f1f5f9;
`],["accent-slate-200",`accent-color: #e2e8f0;
`],["accent-slate-300",`accent-color: #cbd5e1;
`],["accent-slate-400",`accent-color: #94a3b8;
`],["accent-slate-500",`accent-color: #64748b;
`],["accent-slate-600",`accent-color: #475569;
`],["accent-slate-700",`accent-color: #334155;
`],["accent-slate-800",`accent-color: #1e293b;
`],["accent-slate-900",`accent-color: #0f172a;
`],["accent-slate-950",`accent-color: #020617;
`],["accent-gray-50",`accent-color: #f9fafb;
`],["accent-gray-100",`accent-color: #f3f4f6;
`],["accent-gray-200",`accent-color: #e5e7eb;
`],["accent-gray-300",`accent-color: #d1d5db;
`],["accent-gray-400",`accent-color: #9ca3af;
`],["accent-gray-500",`accent-color: #6b7280;
`],["accent-gray-600",`accent-color: #4b5563;
`],["accent-gray-700",`accent-color: #374151;
`],["accent-gray-800",`accent-color: #1f2937;
`],["accent-gray-900",`accent-color: #111827;
`],["accent-gray-950",`accent-color: #030712;
`],["accent-zinc-50",`accent-color: #fafafa;
`],["accent-zinc-100",`accent-color: #f4f4f5;
`],["accent-zinc-200",`accent-color: #e4e4e7;
`],["accent-zinc-300",`accent-color: #d4d4d8;
`],["accent-zinc-400",`accent-color: #a1a1aa;
`],["accent-zinc-500",`accent-color: #71717a;
`],["accent-zinc-600",`accent-color: #52525b;
`],["accent-zinc-700",`accent-color: #3f3f46;
`],["accent-zinc-800",`accent-color: #27272a;
`],["accent-zinc-900",`accent-color: #18181b;
`],["accent-zinc-950",`accent-color: #09090b;
`],["accent-neutral-50",`accent-color: #fafafa;
`],["accent-neutral-100",`accent-color: #f5f5f5;
`],["accent-neutral-200",`accent-color: #e5e5e5;
`],["accent-neutral-300",`accent-color: #d4d4d4;
`],["accent-neutral-400",`accent-color: #a3a3a3;
`],["accent-neutral-500",`accent-color: #737373;
`],["accent-neutral-600",`accent-color: #525252;
`],["accent-neutral-700",`accent-color: #404040;
`],["accent-neutral-800",`accent-color: #262626;
`],["accent-neutral-900",`accent-color: #171717;
`],["accent-neutral-950",`accent-color: #0a0a0a;
`],["accent-stone-50",`accent-color: #fafaf9;
`],["accent-stone-100",`accent-color: #f5f5f4;
`],["accent-stone-200",`accent-color: #e7e5e4;
`],["accent-stone-300",`accent-color: #d6d3d1;
`],["accent-stone-400",`accent-color: #a8a29e;
`],["accent-stone-500",`accent-color: #78716c;
`],["accent-stone-600",`accent-color: #57534e;
`],["accent-stone-700",`accent-color: #44403c;
`],["accent-stone-800",`accent-color: #292524;
`],["accent-stone-900",`accent-color: #1c1917;
`],["accent-stone-950",`accent-color: #0c0a09;
`],["accent-red-50",`accent-color: #fef2f2;
`],["accent-red-100",`accent-color: #fee2e2;
`],["accent-red-200",`accent-color: #fecaca;
`],["accent-red-300",`accent-color: #fca5a5;
`],["accent-red-400",`accent-color: #f87171;
`],["accent-red-500",`accent-color: #ef4444;
`],["accent-red-600",`accent-color: #dc2626;
`],["accent-red-700",`accent-color: #b91c1c;
`],["accent-red-800",`accent-color: #991b1b;
`],["accent-red-900",`accent-color: #7f1d1d;
`],["accent-red-950",`accent-color: #450a0a;
`],["accent-orange-50",`accent-color: #fff7ed;
`],["accent-orange-100",`accent-color: #ffedd5;
`],["accent-orange-200",`accent-color: #fed7aa;
`],["accent-orange-300",`accent-color: #fdba74;
`],["accent-orange-400",`accent-color: #fb923c;
`],["accent-orange-500",`accent-color: #f97316;
`],["accent-orange-600",`accent-color: #ea580c;
`],["accent-orange-700",`accent-color: #c2410c;
`],["accent-orange-800",`accent-color: #9a3412;
`],["accent-orange-900",`accent-color: #7c2d12;
`],["accent-orange-950",`accent-color: #431407;
`],["accent-amber-50",`accent-color: #fffbeb;
`],["accent-amber-100",`accent-color: #fef3c7;
`],["accent-amber-200",`accent-color: #fde68a;
`],["accent-amber-300",`accent-color: #fcd34d;
`],["accent-amber-400",`accent-color: #fbbf24;
`],["accent-amber-500",`accent-color: #f59e0b;
`],["accent-amber-600",`accent-color: #d97706;
`],["accent-amber-700",`accent-color: #b45309;
`],["accent-amber-800",`accent-color: #92400e;
`],["accent-amber-900",`accent-color: #78350f;
`],["accent-amber-950",`accent-color: #451a03;
`],["accent-yellow-50",`accent-color: #fefce8;
`],["accent-yellow-100",`accent-color: #fef9c3;
`],["accent-yellow-200",`accent-color: #fef08a;
`],["accent-yellow-300",`accent-color: #fde047;
`],["accent-yellow-400",`accent-color: #facc15;
`],["accent-yellow-500",`accent-color: #eab308;
`],["accent-yellow-600",`accent-color: #ca8a04;
`],["accent-yellow-700",`accent-color: #a16207;
`],["accent-yellow-800",`accent-color: #854d0e;
`],["accent-yellow-900",`accent-color: #713f12;
`],["accent-yellow-950",`accent-color: #422006;
`],["accent-lime-50",`accent-color: #f7fee7;
`],["accent-lime-100",`accent-color: #ecfccb;
`],["accent-lime-200",`accent-color: #d9f99d;
`],["accent-lime-300",`accent-color: #bef264;
`],["accent-lime-400",`accent-color: #a3e635;
`],["accent-lime-500",`accent-color: #84cc16;
`],["accent-lime-600",`accent-color: #65a30d;
`],["accent-lime-700",`accent-color: #4d7c0f;
`],["accent-lime-800",`accent-color: #3f6212;
`],["accent-lime-900",`accent-color: #365314;
`],["accent-lime-950",`accent-color: #1a2e05;
`],["accent-green-50",`accent-color: #f0fdf4;
`],["accent-green-100",`accent-color: #dcfce7;
`],["accent-green-200",`accent-color: #bbf7d0;
`],["accent-green-300",`accent-color: #86efac;
`],["accent-green-400",`accent-color: #4ade80;
`],["accent-green-500",`accent-color: #22c55e;
`],["accent-green-600",`accent-color: #16a34a;
`],["accent-green-700",`accent-color: #15803d;
`],["accent-green-800",`accent-color: #166534;
`],["accent-green-900",`accent-color: #14532d;
`],["accent-green-950",`accent-color: #052e16;
`],["accent-emerald-50",`accent-color: #ecfdf5;
`],["accent-emerald-100",`accent-color: #d1fae5;
`],["accent-emerald-200",`accent-color: #a7f3d0;
`],["accent-emerald-300",`accent-color: #6ee7b7;
`],["accent-emerald-400",`accent-color: #34d399;
`],["accent-emerald-500",`accent-color: #10b981;
`],["accent-emerald-600",`accent-color: #059669;
`],["accent-emerald-700",`accent-color: #047857;
`],["accent-emerald-800",`accent-color: #065f46;
`],["accent-emerald-900",`accent-color: #064e3b;
`],["accent-emerald-950",`accent-color: #022c22;
`],["accent-teal-50",`accent-color: #f0fdfa;
`],["accent-teal-100",`accent-color: #ccfbf1;
`],["accent-teal-200",`accent-color: #99f6e4;
`],["accent-teal-300",`accent-color: #5eead4;
`],["accent-teal-400",`accent-color: #2dd4bf;
`],["accent-teal-500",`accent-color: #14b8a6;
`],["accent-teal-600",`accent-color: #0d9488;
`],["accent-teal-700",`accent-color: #0f766e;
`],["accent-teal-800",`accent-color: #115e59;
`],["accent-teal-900",`accent-color: #134e4a;
`],["accent-teal-950",`accent-color: #042f2e;
`],["accent-cyan-50",`accent-color: #ecfeff;
`],["accent-cyan-100",`accent-color: #cffafe;
`],["accent-cyan-200",`accent-color: #a5f3fc;
`],["accent-cyan-300",`accent-color: #67e8f9;
`],["accent-cyan-400",`accent-color: #22d3ee;
`],["accent-cyan-500",`accent-color: #06b6d4;
`],["accent-cyan-600",`accent-color: #0891b2;
`],["accent-cyan-700",`accent-color: #0e7490;
`],["accent-cyan-800",`accent-color: #155e75;
`],["accent-cyan-900",`accent-color: #164e63;
`],["accent-cyan-950",`accent-color: #083344;
`],["accent-sky-50",`accent-color: #f0f9ff;
`],["accent-sky-100",`accent-color: #e0f2fe;
`],["accent-sky-200",`accent-color: #bae6fd;
`],["accent-sky-300",`accent-color: #7dd3fc;
`],["accent-sky-400",`accent-color: #38bdf8;
`],["accent-sky-500",`accent-color: #0ea5e9;
`],["accent-sky-600",`accent-color: #0284c7;
`],["accent-sky-700",`accent-color: #0369a1;
`],["accent-sky-800",`accent-color: #075985;
`],["accent-sky-900",`accent-color: #0c4a6e;
`],["accent-sky-950",`accent-color: #082f49;
`],["accent-blue-50",`accent-color: #eff6ff;
`],["accent-blue-100",`accent-color: #dbeafe;
`],["accent-blue-200",`accent-color: #bfdbfe;
`],["accent-blue-300",`accent-color: #93c5fd;
`],["accent-blue-400",`accent-color: #60a5fa;
`],["accent-blue-500",`accent-color: #3b82f6;
`],["accent-blue-600",`accent-color: #2563eb;
`],["accent-blue-700",`accent-color: #1d4ed8;
`],["accent-blue-800",`accent-color: #1e40af;
`],["accent-blue-900",`accent-color: #1e3a8a;
`],["accent-blue-950",`accent-color: #172554;
`],["accent-indigo-50",`accent-color: #eef2ff;
`],["accent-indigo-100",`accent-color: #e0e7ff;
`],["accent-indigo-200",`accent-color: #c7d2fe;
`],["accent-indigo-300",`accent-color: #a5b4fc;
`],["accent-indigo-400",`accent-color: #818cf8;
`],["accent-indigo-500",`accent-color: #6366f1;
`],["accent-indigo-600",`accent-color: #4f46e5;
`],["accent-indigo-700",`accent-color: #4338ca;
`],["accent-indigo-800",`accent-color: #3730a3;
`],["accent-indigo-900",`accent-color: #312e81;
`],["accent-indigo-950",`accent-color: #1e1b4b;
`],["accent-violet-50",`accent-color: #f5f3ff;
`],["accent-violet-100",`accent-color: #ede9fe;
`],["accent-violet-200",`accent-color: #ddd6fe;
`],["accent-violet-300",`accent-color: #c4b5fd;
`],["accent-violet-400",`accent-color: #a78bfa;
`],["accent-violet-500",`accent-color: #8b5cf6;
`],["accent-violet-600",`accent-color: #7c3aed;
`],["accent-violet-700",`accent-color: #6d28d9;
`],["accent-violet-800",`accent-color: #5b21b6;
`],["accent-violet-900",`accent-color: #4c1d95;
`],["accent-violet-950",`accent-color: #2e1065;
`],["accent-purple-50",`accent-color: #faf5ff;
`],["accent-purple-100",`accent-color: #f3e8ff;
`],["accent-purple-200",`accent-color: #e9d5ff;
`],["accent-purple-300",`accent-color: #d8b4fe;
`],["accent-purple-400",`accent-color: #c084fc;
`],["accent-purple-500",`accent-color: #a855f7;
`],["accent-purple-600",`accent-color: #9333ea;
`],["accent-purple-700",`accent-color: #7e22ce;
`],["accent-purple-800",`accent-color: #6b21a8;
`],["accent-purple-900",`accent-color: #581c87;
`],["accent-purple-950",`accent-color: #3b0764;
`],["accent-fuchsia-50",`accent-color: #fdf4ff;
`],["accent-fuchsia-100",`accent-color: #fae8ff;
`],["accent-fuchsia-200",`accent-color: #f5d0fe;
`],["accent-fuchsia-300",`accent-color: #f0abfc;
`],["accent-fuchsia-400",`accent-color: #e879f9;
`],["accent-fuchsia-500",`accent-color: #d946ef;
`],["accent-fuchsia-600",`accent-color: #c026d3;
`],["accent-fuchsia-700",`accent-color: #a21caf;
`],["accent-fuchsia-800",`accent-color: #86198f;
`],["accent-fuchsia-900",`accent-color: #701a75;
`],["accent-fuchsia-950",`accent-color: #4a044e;
`],["accent-pink-50",`accent-color: #fdf2f8;
`],["accent-pink-100",`accent-color: #fce7f3;
`],["accent-pink-200",`accent-color: #fbcfe8;
`],["accent-pink-300",`accent-color: #f9a8d4;
`],["accent-pink-400",`accent-color: #f472b6;
`],["accent-pink-500",`accent-color: #ec4899;
`],["accent-pink-600",`accent-color: #db2777;
`],["accent-pink-700",`accent-color: #be185d;
`],["accent-pink-800",`accent-color: #9d174d;
`],["accent-pink-900",`accent-color: #831843;
`],["accent-pink-950",`accent-color: #500724;
`],["accent-rose-50",`accent-color: #fff1f2;
`],["accent-rose-100",`accent-color: #ffe4e6;
`],["accent-rose-200",`accent-color: #fecdd3;
`],["accent-rose-300",`accent-color: #fda4af;
`],["accent-rose-400",`accent-color: #fb7185;
`],["accent-rose-500",`accent-color: #f43f5e;
`],["accent-rose-600",`accent-color: #e11d48;
`],["accent-rose-700",`accent-color: #be123c;
`],["accent-rose-800",`accent-color: #9f1239;
`],["accent-rose-900",`accent-color: #881337;
`],["accent-rose-950",`accent-color: #4c0519;
`],["accent-auto",`accent-color: auto;
`]]},{url:"https://tailwindcss.com/docs/appearance",entry:"Appearance",description:"Utilities for suppressing native form control styling.",parameters:[["appearance-none",`appearance: none;
`],["appearance-auto",`appearance: auto;
`]]},{url:"https://tailwindcss.com/docs/cursor",entry:"Cursor",description:"Utilities for controlling the cursor style when hovering over an element.",parameters:[["cursor-auto",`cursor: auto;
`,""],["cursor-default",`cursor: default;
`,""],["cursor-pointer",`cursor: pointer;
`,""],["cursor-wait",`cursor: wait;
`,""],["cursor-text",`cursor: text;
`,""],["cursor-move",`cursor: move;
`,""],["cursor-help",`cursor: help;
`,""],["cursor-not-allowed",`cursor: not-allowed;
`,""],["cursor-none",`cursor: none;
`,""],["cursor-context-menu",`cursor: context-menu;
`,""],["cursor-progress",`cursor: progress;
`,""],["cursor-cell",`cursor: cell;
`,""],["cursor-crosshair",`cursor: crosshair;
`,""],["cursor-vertical-text",`cursor: vertical-text;
`,""],["cursor-alias",`cursor: alias;
`,""],["cursor-copy",`cursor: copy;
`,""],["cursor-no-drop",`cursor: no-drop;
`,""],["cursor-grab",`cursor: grab;
`,""],["cursor-grabbing",`cursor: grabbing;
`,""],["cursor-all-scroll",`cursor: all-scroll;
`,""],["cursor-col-resize",`cursor: col-resize;
`,""],["cursor-row-resize",`cursor: row-resize;
`,""],["cursor-n-resize",`cursor: n-resize;
`,""],["cursor-e-resize",`cursor: e-resize;
`,""],["cursor-s-resize",`cursor: s-resize;
`,""],["cursor-w-resize",`cursor: w-resize;
`,""],["cursor-ne-resize",`cursor: ne-resize;
`,""],["cursor-nw-resize",`cursor: nw-resize;
`,""],["cursor-se-resize",`cursor: se-resize;
`,""],["cursor-sw-resize",`cursor: sw-resize;
`,""],["cursor-ew-resize",`cursor: ew-resize;
`,""],["cursor-ns-resize",`cursor: ns-resize;
`,""],["cursor-nesw-resize",`cursor: nesw-resize;
`,""],["cursor-nwse-resize",`cursor: nwse-resize;
`,""],["cursor-zoom-in",`cursor: zoom-in;
`,""],["cursor-zoom-out",`cursor: zoom-out;
`,""]]},{url:"https://tailwindcss.com/docs/caret-color",entry:"Caret Color",description:"Utilities for controlling the color of the text input cursor.",parameters:[["caret-inherit",`caret-color: inherit;
`],["caret-current",`caret-color: currentColor;
`],["caret-transparent",`caret-color: transparent;
`],["caret-black",`caret-color: #000;
`],["caret-white",`caret-color: #fff;
`],["caret-slate-50",`caret-color: #f8fafc;
`],["caret-slate-100",`caret-color: #f1f5f9;
`],["caret-slate-200",`caret-color: #e2e8f0;
`],["caret-slate-300",`caret-color: #cbd5e1;
`],["caret-slate-400",`caret-color: #94a3b8;
`],["caret-slate-500",`caret-color: #64748b;
`],["caret-slate-600",`caret-color: #475569;
`],["caret-slate-700",`caret-color: #334155;
`],["caret-slate-800",`caret-color: #1e293b;
`],["caret-slate-900",`caret-color: #0f172a;
`],["caret-slate-950",`caret-color: #020617;
`],["caret-gray-50",`caret-color: #f9fafb;
`],["caret-gray-100",`caret-color: #f3f4f6;
`],["caret-gray-200",`caret-color: #e5e7eb;
`],["caret-gray-300",`caret-color: #d1d5db;
`],["caret-gray-400",`caret-color: #9ca3af;
`],["caret-gray-500",`caret-color: #6b7280;
`],["caret-gray-600",`caret-color: #4b5563;
`],["caret-gray-700",`caret-color: #374151;
`],["caret-gray-800",`caret-color: #1f2937;
`],["caret-gray-900",`caret-color: #111827;
`],["caret-gray-950",`caret-color: #030712;
`],["caret-zinc-50",`caret-color: #fafafa;
`],["caret-zinc-100",`caret-color: #f4f4f5;
`],["caret-zinc-200",`caret-color: #e4e4e7;
`],["caret-zinc-300",`caret-color: #d4d4d8;
`],["caret-zinc-400",`caret-color: #a1a1aa;
`],["caret-zinc-500",`caret-color: #71717a;
`],["caret-zinc-600",`caret-color: #52525b;
`],["caret-zinc-700",`caret-color: #3f3f46;
`],["caret-zinc-800",`caret-color: #27272a;
`],["caret-zinc-900",`caret-color: #18181b;
`],["caret-zinc-950",`caret-color: #09090b;
`],["caret-neutral-50",`caret-color: #fafafa;
`],["caret-neutral-100",`caret-color: #f5f5f5;
`],["caret-neutral-200",`caret-color: #e5e5e5;
`],["caret-neutral-300",`caret-color: #d4d4d4;
`],["caret-neutral-400",`caret-color: #a3a3a3;
`],["caret-neutral-500",`caret-color: #737373;
`],["caret-neutral-600",`caret-color: #525252;
`],["caret-neutral-700",`caret-color: #404040;
`],["caret-neutral-800",`caret-color: #262626;
`],["caret-neutral-900",`caret-color: #171717;
`],["caret-neutral-950",`caret-color: #0a0a0a;
`],["caret-stone-50",`caret-color: #fafaf9;
`],["caret-stone-100",`caret-color: #f5f5f4;
`],["caret-stone-200",`caret-color: #e7e5e4;
`],["caret-stone-300",`caret-color: #d6d3d1;
`],["caret-stone-400",`caret-color: #a8a29e;
`],["caret-stone-500",`caret-color: #78716c;
`],["caret-stone-600",`caret-color: #57534e;
`],["caret-stone-700",`caret-color: #44403c;
`],["caret-stone-800",`caret-color: #292524;
`],["caret-stone-900",`caret-color: #1c1917;
`],["caret-stone-950",`caret-color: #0c0a09;
`],["caret-red-50",`caret-color: #fef2f2;
`],["caret-red-100",`caret-color: #fee2e2;
`],["caret-red-200",`caret-color: #fecaca;
`],["caret-red-300",`caret-color: #fca5a5;
`],["caret-red-400",`caret-color: #f87171;
`],["caret-red-500",`caret-color: #ef4444;
`],["caret-red-600",`caret-color: #dc2626;
`],["caret-red-700",`caret-color: #b91c1c;
`],["caret-red-800",`caret-color: #991b1b;
`],["caret-red-900",`caret-color: #7f1d1d;
`],["caret-red-950",`caret-color: #450a0a;
`],["caret-orange-50",`caret-color: #fff7ed;
`],["caret-orange-100",`caret-color: #ffedd5;
`],["caret-orange-200",`caret-color: #fed7aa;
`],["caret-orange-300",`caret-color: #fdba74;
`],["caret-orange-400",`caret-color: #fb923c;
`],["caret-orange-500",`caret-color: #f97316;
`],["caret-orange-600",`caret-color: #ea580c;
`],["caret-orange-700",`caret-color: #c2410c;
`],["caret-orange-800",`caret-color: #9a3412;
`],["caret-orange-900",`caret-color: #7c2d12;
`],["caret-orange-950",`caret-color: #431407;
`],["caret-amber-50",`caret-color: #fffbeb;
`],["caret-amber-100",`caret-color: #fef3c7;
`],["caret-amber-200",`caret-color: #fde68a;
`],["caret-amber-300",`caret-color: #fcd34d;
`],["caret-amber-400",`caret-color: #fbbf24;
`],["caret-amber-500",`caret-color: #f59e0b;
`],["caret-amber-600",`caret-color: #d97706;
`],["caret-amber-700",`caret-color: #b45309;
`],["caret-amber-800",`caret-color: #92400e;
`],["caret-amber-900",`caret-color: #78350f;
`],["caret-amber-950",`caret-color: #451a03;
`],["caret-yellow-50",`caret-color: #fefce8;
`],["caret-yellow-100",`caret-color: #fef9c3;
`],["caret-yellow-200",`caret-color: #fef08a;
`],["caret-yellow-300",`caret-color: #fde047;
`],["caret-yellow-400",`caret-color: #facc15;
`],["caret-yellow-500",`caret-color: #eab308;
`],["caret-yellow-600",`caret-color: #ca8a04;
`],["caret-yellow-700",`caret-color: #a16207;
`],["caret-yellow-800",`caret-color: #854d0e;
`],["caret-yellow-900",`caret-color: #713f12;
`],["caret-yellow-950",`caret-color: #422006;
`],["caret-lime-50",`caret-color: #f7fee7;
`],["caret-lime-100",`caret-color: #ecfccb;
`],["caret-lime-200",`caret-color: #d9f99d;
`],["caret-lime-300",`caret-color: #bef264;
`],["caret-lime-400",`caret-color: #a3e635;
`],["caret-lime-500",`caret-color: #84cc16;
`],["caret-lime-600",`caret-color: #65a30d;
`],["caret-lime-700",`caret-color: #4d7c0f;
`],["caret-lime-800",`caret-color: #3f6212;
`],["caret-lime-900",`caret-color: #365314;
`],["caret-lime-950",`caret-color: #1a2e05;
`],["caret-green-50",`caret-color: #f0fdf4;
`],["caret-green-100",`caret-color: #dcfce7;
`],["caret-green-200",`caret-color: #bbf7d0;
`],["caret-green-300",`caret-color: #86efac;
`],["caret-green-400",`caret-color: #4ade80;
`],["caret-green-500",`caret-color: #22c55e;
`],["caret-green-600",`caret-color: #16a34a;
`],["caret-green-700",`caret-color: #15803d;
`],["caret-green-800",`caret-color: #166534;
`],["caret-green-900",`caret-color: #14532d;
`],["caret-green-950",`caret-color: #052e16;
`],["caret-emerald-50",`caret-color: #ecfdf5;
`],["caret-emerald-100",`caret-color: #d1fae5;
`],["caret-emerald-200",`caret-color: #a7f3d0;
`],["caret-emerald-300",`caret-color: #6ee7b7;
`],["caret-emerald-400",`caret-color: #34d399;
`],["caret-emerald-500",`caret-color: #10b981;
`],["caret-emerald-600",`caret-color: #059669;
`],["caret-emerald-700",`caret-color: #047857;
`],["caret-emerald-800",`caret-color: #065f46;
`],["caret-emerald-900",`caret-color: #064e3b;
`],["caret-emerald-950",`caret-color: #022c22;
`],["caret-teal-50",`caret-color: #f0fdfa;
`],["caret-teal-100",`caret-color: #ccfbf1;
`],["caret-teal-200",`caret-color: #99f6e4;
`],["caret-teal-300",`caret-color: #5eead4;
`],["caret-teal-400",`caret-color: #2dd4bf;
`],["caret-teal-500",`caret-color: #14b8a6;
`],["caret-teal-600",`caret-color: #0d9488;
`],["caret-teal-700",`caret-color: #0f766e;
`],["caret-teal-800",`caret-color: #115e59;
`],["caret-teal-900",`caret-color: #134e4a;
`],["caret-teal-950",`caret-color: #042f2e;
`],["caret-cyan-50",`caret-color: #ecfeff;
`],["caret-cyan-100",`caret-color: #cffafe;
`],["caret-cyan-200",`caret-color: #a5f3fc;
`],["caret-cyan-300",`caret-color: #67e8f9;
`],["caret-cyan-400",`caret-color: #22d3ee;
`],["caret-cyan-500",`caret-color: #06b6d4;
`],["caret-cyan-600",`caret-color: #0891b2;
`],["caret-cyan-700",`caret-color: #0e7490;
`],["caret-cyan-800",`caret-color: #155e75;
`],["caret-cyan-900",`caret-color: #164e63;
`],["caret-cyan-950",`caret-color: #083344;
`],["caret-sky-50",`caret-color: #f0f9ff;
`],["caret-sky-100",`caret-color: #e0f2fe;
`],["caret-sky-200",`caret-color: #bae6fd;
`],["caret-sky-300",`caret-color: #7dd3fc;
`],["caret-sky-400",`caret-color: #38bdf8;
`],["caret-sky-500",`caret-color: #0ea5e9;
`],["caret-sky-600",`caret-color: #0284c7;
`],["caret-sky-700",`caret-color: #0369a1;
`],["caret-sky-800",`caret-color: #075985;
`],["caret-sky-900",`caret-color: #0c4a6e;
`],["caret-sky-950",`caret-color: #082f49;
`],["caret-blue-50",`caret-color: #eff6ff;
`],["caret-blue-100",`caret-color: #dbeafe;
`],["caret-blue-200",`caret-color: #bfdbfe;
`],["caret-blue-300",`caret-color: #93c5fd;
`],["caret-blue-400",`caret-color: #60a5fa;
`],["caret-blue-500",`caret-color: #3b82f6;
`],["caret-blue-600",`caret-color: #2563eb;
`],["caret-blue-700",`caret-color: #1d4ed8;
`],["caret-blue-800",`caret-color: #1e40af;
`],["caret-blue-900",`caret-color: #1e3a8a;
`],["caret-blue-950",`caret-color: #172554;
`],["caret-indigo-50",`caret-color: #eef2ff;
`],["caret-indigo-100",`caret-color: #e0e7ff;
`],["caret-indigo-200",`caret-color: #c7d2fe;
`],["caret-indigo-300",`caret-color: #a5b4fc;
`],["caret-indigo-400",`caret-color: #818cf8;
`],["caret-indigo-500",`caret-color: #6366f1;
`],["caret-indigo-600",`caret-color: #4f46e5;
`],["caret-indigo-700",`caret-color: #4338ca;
`],["caret-indigo-800",`caret-color: #3730a3;
`],["caret-indigo-900",`caret-color: #312e81;
`],["caret-indigo-950",`caret-color: #1e1b4b;
`],["caret-violet-50",`caret-color: #f5f3ff;
`],["caret-violet-100",`caret-color: #ede9fe;
`],["caret-violet-200",`caret-color: #ddd6fe;
`],["caret-violet-300",`caret-color: #c4b5fd;
`],["caret-violet-400",`caret-color: #a78bfa;
`],["caret-violet-500",`caret-color: #8b5cf6;
`],["caret-violet-600",`caret-color: #7c3aed;
`],["caret-violet-700",`caret-color: #6d28d9;
`],["caret-violet-800",`caret-color: #5b21b6;
`],["caret-violet-900",`caret-color: #4c1d95;
`],["caret-violet-950",`caret-color: #2e1065;
`],["caret-purple-50",`caret-color: #faf5ff;
`],["caret-purple-100",`caret-color: #f3e8ff;
`],["caret-purple-200",`caret-color: #e9d5ff;
`],["caret-purple-300",`caret-color: #d8b4fe;
`],["caret-purple-400",`caret-color: #c084fc;
`],["caret-purple-500",`caret-color: #a855f7;
`],["caret-purple-600",`caret-color: #9333ea;
`],["caret-purple-700",`caret-color: #7e22ce;
`],["caret-purple-800",`caret-color: #6b21a8;
`],["caret-purple-900",`caret-color: #581c87;
`],["caret-purple-950",`caret-color: #3b0764;
`],["caret-fuchsia-50",`caret-color: #fdf4ff;
`],["caret-fuchsia-100",`caret-color: #fae8ff;
`],["caret-fuchsia-200",`caret-color: #f5d0fe;
`],["caret-fuchsia-300",`caret-color: #f0abfc;
`],["caret-fuchsia-400",`caret-color: #e879f9;
`],["caret-fuchsia-500",`caret-color: #d946ef;
`],["caret-fuchsia-600",`caret-color: #c026d3;
`],["caret-fuchsia-700",`caret-color: #a21caf;
`],["caret-fuchsia-800",`caret-color: #86198f;
`],["caret-fuchsia-900",`caret-color: #701a75;
`],["caret-fuchsia-950",`caret-color: #4a044e;
`],["caret-pink-50",`caret-color: #fdf2f8;
`],["caret-pink-100",`caret-color: #fce7f3;
`],["caret-pink-200",`caret-color: #fbcfe8;
`],["caret-pink-300",`caret-color: #f9a8d4;
`],["caret-pink-400",`caret-color: #f472b6;
`],["caret-pink-500",`caret-color: #ec4899;
`],["caret-pink-600",`caret-color: #db2777;
`],["caret-pink-700",`caret-color: #be185d;
`],["caret-pink-800",`caret-color: #9d174d;
`],["caret-pink-900",`caret-color: #831843;
`],["caret-pink-950",`caret-color: #500724;
`],["caret-rose-50",`caret-color: #fff1f2;
`],["caret-rose-100",`caret-color: #ffe4e6;
`],["caret-rose-200",`caret-color: #fecdd3;
`],["caret-rose-300",`caret-color: #fda4af;
`],["caret-rose-400",`caret-color: #fb7185;
`],["caret-rose-500",`caret-color: #f43f5e;
`],["caret-rose-600",`caret-color: #e11d48;
`],["caret-rose-700",`caret-color: #be123c;
`],["caret-rose-800",`caret-color: #9f1239;
`],["caret-rose-900",`caret-color: #881337;
`],["caret-rose-950",`caret-color: #4c0519;
`]]},{url:"https://tailwindcss.com/docs/pointer-events",entry:"Pointer Events",description:"Utilities for controlling whether an element responds to pointer events.",parameters:[["pointer-events-none",`pointer-events: none;
`],["pointer-events-auto",`pointer-events: auto;
`]]},{url:"https://tailwindcss.com/docs/resize",entry:"Resize",description:"Utilities for controlling how an element can be resized.",parameters:[["resize-none",`resize: none;
`],["resize-y",`resize: vertical;
`],["resize-x",`resize: horizontal;
`],["resize",`resize: both;
`]]},{url:"https://tailwindcss.com/docs/scroll-behavior",entry:"Scroll Behavior",description:"Utilities for controlling the scroll behavior of an element.",parameters:[["scroll-auto",`scroll-behavior: auto;
`],["scroll-smooth",`scroll-behavior: smooth;
`]]},{url:"https://tailwindcss.com/docs/scroll-margin",entry:"Scroll Margin",description:"Utilities for controlling the scroll offset around items in a snap container.",parameters:[["scroll-m-0",`scroll-margin: 0px;
`],["scroll-mx-0",`scroll-margin-left: 0px;
scroll-margin-right: 0px;
`],["scroll-my-0",`scroll-margin-top: 0px;
scroll-margin-bottom: 0px;
`],["scroll-ms-0",`scroll-margin-inline-start: 0px;
`],["scroll-me-0",`scroll-margin-inline-end: 0px;
`],["scroll-mt-0",`scroll-margin-top: 0px;
`],["scroll-mr-0",`scroll-margin-right: 0px;
`],["scroll-mb-0",`scroll-margin-bottom: 0px;
`],["scroll-ml-0",`scroll-margin-left: 0px;
`],["scroll-m-px",`scroll-margin: 1px;
`],["scroll-mx-px",`scroll-margin-left: 1px;
scroll-margin-right: 1px;
`],["scroll-my-px",`scroll-margin-top: 1px;
scroll-margin-bottom: 1px;
`],["scroll-ms-px",`scroll-margin-inline-start: 1px;
`],["scroll-me-px",`scroll-margin-inline-end: 1px;
`],["scroll-mt-px",`scroll-margin-top: 1px;
`],["scroll-mr-px",`scroll-margin-right: 1px;
`],["scroll-mb-px",`scroll-margin-bottom: 1px;
`],["scroll-ml-px",`scroll-margin-left: 1px;
`],["scroll-m-0.5",`scroll-margin: 0.125rem; /* 2px */
`],["scroll-mx-0.5",`scroll-margin-left: 0.125rem; /* 2px */
scroll-margin-right: 0.125rem; /* 2px */
`],["scroll-my-0.5",`scroll-margin-top: 0.125rem; /* 2px */
scroll-margin-bottom: 0.125rem; /* 2px */
`],["scroll-ms-0.5",`scroll-margin-inline-start: 0.125rem; /* 2px */
`],["scroll-me-0.5",`scroll-margin-inline-end: 0.125rem; /* 2px */
`],["scroll-mt-0.5",`scroll-margin-top: 0.125rem; /* 2px */
`],["scroll-mr-0.5",`scroll-margin-right: 0.125rem; /* 2px */
`],["scroll-mb-0.5",`scroll-margin-bottom: 0.125rem; /* 2px */
`],["scroll-ml-0.5",`scroll-margin-left: 0.125rem; /* 2px */
`],["scroll-m-1",`scroll-margin: 0.25rem; /* 4px */
`],["scroll-mx-1",`scroll-margin-left: 0.25rem; /* 4px */
scroll-margin-right: 0.25rem; /* 4px */
`],["scroll-my-1",`scroll-margin-top: 0.25rem; /* 4px */
scroll-margin-bottom: 0.25rem; /* 4px */
`],["scroll-ms-1",`scroll-margin-inline-start: 0.25rem; /* 4px */
`],["scroll-me-1",`scroll-margin-inline-end: 0.25rem; /* 4px */
`],["scroll-mt-1",`scroll-margin-top: 0.25rem; /* 4px */
`],["scroll-mr-1",`scroll-margin-right: 0.25rem; /* 4px */
`],["scroll-mb-1",`scroll-margin-bottom: 0.25rem; /* 4px */
`],["scroll-ml-1",`scroll-margin-left: 0.25rem; /* 4px */
`],["scroll-m-1.5",`scroll-margin: 0.375rem; /* 6px */
`],["scroll-mx-1.5",`scroll-margin-left: 0.375rem; /* 6px */
scroll-margin-right: 0.375rem; /* 6px */
`],["scroll-my-1.5",`scroll-margin-top: 0.375rem; /* 6px */
scroll-margin-bottom: 0.375rem; /* 6px */
`],["scroll-ms-1.5",`scroll-margin-inline-start: 0.375rem; /* 6px */
`],["scroll-me-1.5",`scroll-margin-inline-end: 0.375rem; /* 6px */
`],["scroll-mt-1.5",`scroll-margin-top: 0.375rem; /* 6px */
`],["scroll-mr-1.5",`scroll-margin-right: 0.375rem; /* 6px */
`],["scroll-mb-1.5",`scroll-margin-bottom: 0.375rem; /* 6px */
`],["scroll-ml-1.5",`scroll-margin-left: 0.375rem; /* 6px */
`],["scroll-m-2",`scroll-margin: 0.5rem; /* 8px */
`],["scroll-mx-2",`scroll-margin-left: 0.5rem; /* 8px */
scroll-margin-right: 0.5rem; /* 8px */
`],["scroll-my-2",`scroll-margin-top: 0.5rem; /* 8px */
scroll-margin-bottom: 0.5rem; /* 8px */
`],["scroll-ms-2",`scroll-margin-inline-start: 0.5rem; /* 8px */
`],["scroll-me-2",`scroll-margin-inline-end: 0.5rem; /* 8px */
`],["scroll-mt-2",`scroll-margin-top: 0.5rem; /* 8px */
`],["scroll-mr-2",`scroll-margin-right: 0.5rem; /* 8px */
`],["scroll-mb-2",`scroll-margin-bottom: 0.5rem; /* 8px */
`],["scroll-ml-2",`scroll-margin-left: 0.5rem; /* 8px */
`],["scroll-m-2.5",`scroll-margin: 0.625rem; /* 10px */
`],["scroll-mx-2.5",`scroll-margin-left: 0.625rem; /* 10px */
scroll-margin-right: 0.625rem; /* 10px */
`],["scroll-my-2.5",`scroll-margin-top: 0.625rem; /* 10px */
scroll-margin-bottom: 0.625rem; /* 10px */
`],["scroll-ms-2.5",`scroll-margin-inline-start: 0.625rem; /* 10px */
`],["scroll-me-2.5",`scroll-margin-inline-end: 0.625rem; /* 10px */
`],["scroll-mt-2.5",`scroll-margin-top: 0.625rem; /* 10px */
`],["scroll-mr-2.5",`scroll-margin-right: 0.625rem; /* 10px */
`],["scroll-mb-2.5",`scroll-margin-bottom: 0.625rem; /* 10px */
`],["scroll-ml-2.5",`scroll-margin-left: 0.625rem; /* 10px */
`],["scroll-m-3",`scroll-margin: 0.75rem; /* 12px */
`],["scroll-mx-3",`scroll-margin-left: 0.75rem; /* 12px */
scroll-margin-right: 0.75rem; /* 12px */
`],["scroll-my-3",`scroll-margin-top: 0.75rem; /* 12px */
scroll-margin-bottom: 0.75rem; /* 12px */
`],["scroll-ms-3",`scroll-margin-inline-start: 0.75rem; /* 12px */
`],["scroll-me-3",`scroll-margin-inline-end: 0.75rem; /* 12px */
`],["scroll-mt-3",`scroll-margin-top: 0.75rem; /* 12px */
`],["scroll-mr-3",`scroll-margin-right: 0.75rem; /* 12px */
`],["scroll-mb-3",`scroll-margin-bottom: 0.75rem; /* 12px */
`],["scroll-ml-3",`scroll-margin-left: 0.75rem; /* 12px */
`],["scroll-m-3.5",`scroll-margin: 0.875rem; /* 14px */
`],["scroll-mx-3.5",`scroll-margin-left: 0.875rem; /* 14px */
scroll-margin-right: 0.875rem; /* 14px */
`],["scroll-my-3.5",`scroll-margin-top: 0.875rem; /* 14px */
scroll-margin-bottom: 0.875rem; /* 14px */
`],["scroll-ms-3.5",`scroll-margin-inline-start: 0.875rem; /* 14px */
`],["scroll-me-3.5",`scroll-margin-inline-end: 0.875rem; /* 14px */
`],["scroll-mt-3.5",`scroll-margin-top: 0.875rem; /* 14px */
`],["scroll-mr-3.5",`scroll-margin-right: 0.875rem; /* 14px */
`],["scroll-mb-3.5",`scroll-margin-bottom: 0.875rem; /* 14px */
`],["scroll-ml-3.5",`scroll-margin-left: 0.875rem; /* 14px */
`],["scroll-m-4",`scroll-margin: 1rem; /* 16px */
`],["scroll-mx-4",`scroll-margin-left: 1rem; /* 16px */
scroll-margin-right: 1rem; /* 16px */
`],["scroll-my-4",`scroll-margin-top: 1rem; /* 16px */
scroll-margin-bottom: 1rem; /* 16px */
`],["scroll-ms-4",`scroll-margin-inline-start: 1rem; /* 16px */
`],["scroll-me-4",`scroll-margin-inline-end: 1rem; /* 16px */
`],["scroll-mt-4",`scroll-margin-top: 1rem; /* 16px */
`],["scroll-mr-4",`scroll-margin-right: 1rem; /* 16px */
`],["scroll-mb-4",`scroll-margin-bottom: 1rem; /* 16px */
`],["scroll-ml-4",`scroll-margin-left: 1rem; /* 16px */
`],["scroll-m-5",`scroll-margin: 1.25rem; /* 20px */
`],["scroll-mx-5",`scroll-margin-left: 1.25rem; /* 20px */
scroll-margin-right: 1.25rem; /* 20px */
`],["scroll-my-5",`scroll-margin-top: 1.25rem; /* 20px */
scroll-margin-bottom: 1.25rem; /* 20px */
`],["scroll-ms-5",`scroll-margin-inline-start: 1.25rem; /* 20px */
`],["scroll-me-5",`scroll-margin-inline-end: 1.25rem; /* 20px */
`],["scroll-mt-5",`scroll-margin-top: 1.25rem; /* 20px */
`],["scroll-mr-5",`scroll-margin-right: 1.25rem; /* 20px */
`],["scroll-mb-5",`scroll-margin-bottom: 1.25rem; /* 20px */
`],["scroll-ml-5",`scroll-margin-left: 1.25rem; /* 20px */
`],["scroll-m-6",`scroll-margin: 1.5rem; /* 24px */
`],["scroll-mx-6",`scroll-margin-left: 1.5rem; /* 24px */
scroll-margin-right: 1.5rem; /* 24px */
`],["scroll-my-6",`scroll-margin-top: 1.5rem; /* 24px */
scroll-margin-bottom: 1.5rem; /* 24px */
`],["scroll-ms-6",`scroll-margin-inline-start: 1.5rem; /* 24px */
`],["scroll-me-6",`scroll-margin-inline-end: 1.5rem; /* 24px */
`],["scroll-mt-6",`scroll-margin-top: 1.5rem; /* 24px */
`],["scroll-mr-6",`scroll-margin-right: 1.5rem; /* 24px */
`],["scroll-mb-6",`scroll-margin-bottom: 1.5rem; /* 24px */
`],["scroll-ml-6",`scroll-margin-left: 1.5rem; /* 24px */
`],["scroll-m-7",`scroll-margin: 1.75rem; /* 28px */
`],["scroll-mx-7",`scroll-margin-left: 1.75rem; /* 28px */
scroll-margin-right: 1.75rem; /* 28px */
`],["scroll-my-7",`scroll-margin-top: 1.75rem; /* 28px */
scroll-margin-bottom: 1.75rem; /* 28px */
`],["scroll-ms-7",`scroll-margin-inline-start: 1.75rem; /* 28px */
`],["scroll-me-7",`scroll-margin-inline-end: 1.75rem; /* 28px */
`],["scroll-mt-7",`scroll-margin-top: 1.75rem; /* 28px */
`],["scroll-mr-7",`scroll-margin-right: 1.75rem; /* 28px */
`],["scroll-mb-7",`scroll-margin-bottom: 1.75rem; /* 28px */
`],["scroll-ml-7",`scroll-margin-left: 1.75rem; /* 28px */
`],["scroll-m-8",`scroll-margin: 2rem; /* 32px */
`],["scroll-mx-8",`scroll-margin-left: 2rem; /* 32px */
scroll-margin-right: 2rem; /* 32px */
`],["scroll-my-8",`scroll-margin-top: 2rem; /* 32px */
scroll-margin-bottom: 2rem; /* 32px */
`],["scroll-ms-8",`scroll-margin-inline-start: 2rem; /* 32px */
`],["scroll-me-8",`scroll-margin-inline-end: 2rem; /* 32px */
`],["scroll-mt-8",`scroll-margin-top: 2rem; /* 32px */
`],["scroll-mr-8",`scroll-margin-right: 2rem; /* 32px */
`],["scroll-mb-8",`scroll-margin-bottom: 2rem; /* 32px */
`],["scroll-ml-8",`scroll-margin-left: 2rem; /* 32px */
`],["scroll-m-9",`scroll-margin: 2.25rem; /* 36px */
`],["scroll-mx-9",`scroll-margin-left: 2.25rem; /* 36px */
scroll-margin-right: 2.25rem; /* 36px */
`],["scroll-my-9",`scroll-margin-top: 2.25rem; /* 36px */
scroll-margin-bottom: 2.25rem; /* 36px */
`],["scroll-ms-9",`scroll-margin-inline-start: 2.25rem; /* 36px */
`],["scroll-me-9",`scroll-margin-inline-end: 2.25rem; /* 36px */
`],["scroll-mt-9",`scroll-margin-top: 2.25rem; /* 36px */
`],["scroll-mr-9",`scroll-margin-right: 2.25rem; /* 36px */
`],["scroll-mb-9",`scroll-margin-bottom: 2.25rem; /* 36px */
`],["scroll-ml-9",`scroll-margin-left: 2.25rem; /* 36px */
`],["scroll-m-10",`scroll-margin: 2.5rem; /* 40px */
`],["scroll-mx-10",`scroll-margin-left: 2.5rem; /* 40px */
scroll-margin-right: 2.5rem; /* 40px */
`],["scroll-my-10",`scroll-margin-top: 2.5rem; /* 40px */
scroll-margin-bottom: 2.5rem; /* 40px */
`],["scroll-ms-10",`scroll-margin-inline-start: 2.5rem; /* 40px */
`],["scroll-me-10",`scroll-margin-inline-end: 2.5rem; /* 40px */
`],["scroll-mt-10",`scroll-margin-top: 2.5rem; /* 40px */
`],["scroll-mr-10",`scroll-margin-right: 2.5rem; /* 40px */
`],["scroll-mb-10",`scroll-margin-bottom: 2.5rem; /* 40px */
`],["scroll-ml-10",`scroll-margin-left: 2.5rem; /* 40px */
`],["scroll-m-11",`scroll-margin: 2.75rem; /* 44px */
`],["scroll-mx-11",`scroll-margin-left: 2.75rem; /* 44px */
scroll-margin-right: 2.75rem; /* 44px */
`],["scroll-my-11",`scroll-margin-top: 2.75rem; /* 44px */
scroll-margin-bottom: 2.75rem; /* 44px */
`],["scroll-ms-11",`scroll-margin-inline-start: 2.75rem; /* 44px */
`],["scroll-me-11",`scroll-margin-inline-end: 2.75rem; /* 44px */
`],["scroll-mt-11",`scroll-margin-top: 2.75rem; /* 44px */
`],["scroll-mr-11",`scroll-margin-right: 2.75rem; /* 44px */
`],["scroll-mb-11",`scroll-margin-bottom: 2.75rem; /* 44px */
`],["scroll-ml-11",`scroll-margin-left: 2.75rem; /* 44px */
`],["scroll-m-12",`scroll-margin: 3rem; /* 48px */
`],["scroll-mx-12",`scroll-margin-left: 3rem; /* 48px */
scroll-margin-right: 3rem; /* 48px */
`],["scroll-my-12",`scroll-margin-top: 3rem; /* 48px */
scroll-margin-bottom: 3rem; /* 48px */
`],["scroll-ms-12",`scroll-margin-inline-start: 3rem; /* 48px */
`],["scroll-me-12",`scroll-margin-inline-end: 3rem; /* 48px */
`],["scroll-mt-12",`scroll-margin-top: 3rem; /* 48px */
`],["scroll-mr-12",`scroll-margin-right: 3rem; /* 48px */
`],["scroll-mb-12",`scroll-margin-bottom: 3rem; /* 48px */
`],["scroll-ml-12",`scroll-margin-left: 3rem; /* 48px */
`],["scroll-m-14",`scroll-margin: 3.5rem; /* 56px */
`],["scroll-mx-14",`scroll-margin-left: 3.5rem; /* 56px */
scroll-margin-right: 3.5rem; /* 56px */
`],["scroll-my-14",`scroll-margin-top: 3.5rem; /* 56px */
scroll-margin-bottom: 3.5rem; /* 56px */
`],["scroll-ms-14",`scroll-margin-inline-start: 3.5rem; /* 56px */
`],["scroll-me-14",`scroll-margin-inline-end: 3.5rem; /* 56px */
`],["scroll-mt-14",`scroll-margin-top: 3.5rem; /* 56px */
`],["scroll-mr-14",`scroll-margin-right: 3.5rem; /* 56px */
`],["scroll-mb-14",`scroll-margin-bottom: 3.5rem; /* 56px */
`],["scroll-ml-14",`scroll-margin-left: 3.5rem; /* 56px */
`],["scroll-m-16",`scroll-margin: 4rem; /* 64px */
`],["scroll-mx-16",`scroll-margin-left: 4rem; /* 64px */
scroll-margin-right: 4rem; /* 64px */
`],["scroll-my-16",`scroll-margin-top: 4rem; /* 64px */
scroll-margin-bottom: 4rem; /* 64px */
`],["scroll-ms-16",`scroll-margin-inline-start: 4rem; /* 64px */
`],["scroll-me-16",`scroll-margin-inline-end: 4rem; /* 64px */
`],["scroll-mt-16",`scroll-margin-top: 4rem; /* 64px */
`],["scroll-mr-16",`scroll-margin-right: 4rem; /* 64px */
`],["scroll-mb-16",`scroll-margin-bottom: 4rem; /* 64px */
`],["scroll-ml-16",`scroll-margin-left: 4rem; /* 64px */
`],["scroll-m-20",`scroll-margin: 5rem; /* 80px */
`],["scroll-mx-20",`scroll-margin-left: 5rem; /* 80px */
scroll-margin-right: 5rem; /* 80px */
`],["scroll-my-20",`scroll-margin-top: 5rem; /* 80px */
scroll-margin-bottom: 5rem; /* 80px */
`],["scroll-ms-20",`scroll-margin-inline-start: 5rem; /* 80px */
`],["scroll-me-20",`scroll-margin-inline-end: 5rem; /* 80px */
`],["scroll-mt-20",`scroll-margin-top: 5rem; /* 80px */
`],["scroll-mr-20",`scroll-margin-right: 5rem; /* 80px */
`],["scroll-mb-20",`scroll-margin-bottom: 5rem; /* 80px */
`],["scroll-ml-20",`scroll-margin-left: 5rem; /* 80px */
`],["scroll-m-24",`scroll-margin: 6rem; /* 96px */
`],["scroll-mx-24",`scroll-margin-left: 6rem; /* 96px */
scroll-margin-right: 6rem; /* 96px */
`],["scroll-my-24",`scroll-margin-top: 6rem; /* 96px */
scroll-margin-bottom: 6rem; /* 96px */
`],["scroll-ms-24",`scroll-margin-inline-start: 6rem; /* 96px */
`],["scroll-me-24",`scroll-margin-inline-end: 6rem; /* 96px */
`],["scroll-mt-24",`scroll-margin-top: 6rem; /* 96px */
`],["scroll-mr-24",`scroll-margin-right: 6rem; /* 96px */
`],["scroll-mb-24",`scroll-margin-bottom: 6rem; /* 96px */
`],["scroll-ml-24",`scroll-margin-left: 6rem; /* 96px */
`],["scroll-m-28",`scroll-margin: 7rem; /* 112px */
`],["scroll-mx-28",`scroll-margin-left: 7rem; /* 112px */
scroll-margin-right: 7rem; /* 112px */
`],["scroll-my-28",`scroll-margin-top: 7rem; /* 112px */
scroll-margin-bottom: 7rem; /* 112px */
`],["scroll-ms-28",`scroll-margin-inline-start: 7rem; /* 112px */
`],["scroll-me-28",`scroll-margin-inline-end: 7rem; /* 112px */
`],["scroll-mt-28",`scroll-margin-top: 7rem; /* 112px */
`],["scroll-mr-28",`scroll-margin-right: 7rem; /* 112px */
`],["scroll-mb-28",`scroll-margin-bottom: 7rem; /* 112px */
`],["scroll-ml-28",`scroll-margin-left: 7rem; /* 112px */
`],["scroll-m-32",`scroll-margin: 8rem; /* 128px */
`],["scroll-mx-32",`scroll-margin-left: 8rem; /* 128px */
scroll-margin-right: 8rem; /* 128px */
`],["scroll-my-32",`scroll-margin-top: 8rem; /* 128px */
scroll-margin-bottom: 8rem; /* 128px */
`],["scroll-ms-32",`scroll-margin-inline-start: 8rem; /* 128px */
`],["scroll-me-32",`scroll-margin-inline-end: 8rem; /* 128px */
`],["scroll-mt-32",`scroll-margin-top: 8rem; /* 128px */
`],["scroll-mr-32",`scroll-margin-right: 8rem; /* 128px */
`],["scroll-mb-32",`scroll-margin-bottom: 8rem; /* 128px */
`],["scroll-ml-32",`scroll-margin-left: 8rem; /* 128px */
`],["scroll-m-36",`scroll-margin: 9rem; /* 144px */
`],["scroll-mx-36",`scroll-margin-left: 9rem; /* 144px */
scroll-margin-right: 9rem; /* 144px */
`],["scroll-my-36",`scroll-margin-top: 9rem; /* 144px */
scroll-margin-bottom: 9rem; /* 144px */
`],["scroll-ms-36",`scroll-margin-inline-start: 9rem; /* 144px */
`],["scroll-me-36",`scroll-margin-inline-end: 9rem; /* 144px */
`],["scroll-mt-36",`scroll-margin-top: 9rem; /* 144px */
`],["scroll-mr-36",`scroll-margin-right: 9rem; /* 144px */
`],["scroll-mb-36",`scroll-margin-bottom: 9rem; /* 144px */
`],["scroll-ml-36",`scroll-margin-left: 9rem; /* 144px */
`],["scroll-m-40",`scroll-margin: 10rem; /* 160px */
`],["scroll-mx-40",`scroll-margin-left: 10rem; /* 160px */
scroll-margin-right: 10rem; /* 160px */
`],["scroll-my-40",`scroll-margin-top: 10rem; /* 160px */
scroll-margin-bottom: 10rem; /* 160px */
`],["scroll-ms-40",`scroll-margin-inline-start: 10rem; /* 160px */
`],["scroll-me-40",`scroll-margin-inline-end: 10rem; /* 160px */
`],["scroll-mt-40",`scroll-margin-top: 10rem; /* 160px */
`],["scroll-mr-40",`scroll-margin-right: 10rem; /* 160px */
`],["scroll-mb-40",`scroll-margin-bottom: 10rem; /* 160px */
`],["scroll-ml-40",`scroll-margin-left: 10rem; /* 160px */
`],["scroll-m-44",`scroll-margin: 11rem; /* 176px */
`],["scroll-mx-44",`scroll-margin-left: 11rem; /* 176px */
scroll-margin-right: 11rem; /* 176px */
`],["scroll-my-44",`scroll-margin-top: 11rem; /* 176px */
scroll-margin-bottom: 11rem; /* 176px */
`],["scroll-ms-44",`scroll-margin-inline-start: 11rem; /* 176px */
`],["scroll-me-44",`scroll-margin-inline-end: 11rem; /* 176px */
`],["scroll-mt-44",`scroll-margin-top: 11rem; /* 176px */
`],["scroll-mr-44",`scroll-margin-right: 11rem; /* 176px */
`],["scroll-mb-44",`scroll-margin-bottom: 11rem; /* 176px */
`],["scroll-ml-44",`scroll-margin-left: 11rem; /* 176px */
`],["scroll-m-48",`scroll-margin: 12rem; /* 192px */
`],["scroll-mx-48",`scroll-margin-left: 12rem; /* 192px */
scroll-margin-right: 12rem; /* 192px */
`],["scroll-my-48",`scroll-margin-top: 12rem; /* 192px */
scroll-margin-bottom: 12rem; /* 192px */
`],["scroll-ms-48",`scroll-margin-inline-start: 12rem; /* 192px */
`],["scroll-me-48",`scroll-margin-inline-end: 12rem; /* 192px */
`],["scroll-mt-48",`scroll-margin-top: 12rem; /* 192px */
`],["scroll-mr-48",`scroll-margin-right: 12rem; /* 192px */
`],["scroll-mb-48",`scroll-margin-bottom: 12rem; /* 192px */
`],["scroll-ml-48",`scroll-margin-left: 12rem; /* 192px */
`],["scroll-m-52",`scroll-margin: 13rem; /* 208px */
`],["scroll-mx-52",`scroll-margin-left: 13rem; /* 208px */
scroll-margin-right: 13rem; /* 208px */
`],["scroll-my-52",`scroll-margin-top: 13rem; /* 208px */
scroll-margin-bottom: 13rem; /* 208px */
`],["scroll-ms-52",`scroll-margin-inline-start: 13rem; /* 208px */
`],["scroll-me-52",`scroll-margin-inline-end: 13rem; /* 208px */
`],["scroll-mt-52",`scroll-margin-top: 13rem; /* 208px */
`],["scroll-mr-52",`scroll-margin-right: 13rem; /* 208px */
`],["scroll-mb-52",`scroll-margin-bottom: 13rem; /* 208px */
`],["scroll-ml-52",`scroll-margin-left: 13rem; /* 208px */
`],["scroll-m-56",`scroll-margin: 14rem; /* 224px */
`],["scroll-mx-56",`scroll-margin-left: 14rem; /* 224px */
scroll-margin-right: 14rem; /* 224px */
`],["scroll-my-56",`scroll-margin-top: 14rem; /* 224px */
scroll-margin-bottom: 14rem; /* 224px */
`],["scroll-ms-56",`scroll-margin-inline-start: 14rem; /* 224px */
`],["scroll-me-56",`scroll-margin-inline-end: 14rem; /* 224px */
`],["scroll-mt-56",`scroll-margin-top: 14rem; /* 224px */
`],["scroll-mr-56",`scroll-margin-right: 14rem; /* 224px */
`],["scroll-mb-56",`scroll-margin-bottom: 14rem; /* 224px */
`],["scroll-ml-56",`scroll-margin-left: 14rem; /* 224px */
`],["scroll-m-60",`scroll-margin: 15rem; /* 240px */
`],["scroll-mx-60",`scroll-margin-left: 15rem; /* 240px */
scroll-margin-right: 15rem; /* 240px */
`],["scroll-my-60",`scroll-margin-top: 15rem; /* 240px */
scroll-margin-bottom: 15rem; /* 240px */
`],["scroll-ms-60",`scroll-margin-inline-start: 15rem; /* 240px */
`],["scroll-me-60",`scroll-margin-inline-end: 15rem; /* 240px */
`],["scroll-mt-60",`scroll-margin-top: 15rem; /* 240px */
`],["scroll-mr-60",`scroll-margin-right: 15rem; /* 240px */
`],["scroll-mb-60",`scroll-margin-bottom: 15rem; /* 240px */
`],["scroll-ml-60",`scroll-margin-left: 15rem; /* 240px */
`],["scroll-m-64",`scroll-margin: 16rem; /* 256px */
`],["scroll-mx-64",`scroll-margin-left: 16rem; /* 256px */
scroll-margin-right: 16rem; /* 256px */
`],["scroll-my-64",`scroll-margin-top: 16rem; /* 256px */
scroll-margin-bottom: 16rem; /* 256px */
`],["scroll-ms-64",`scroll-margin-inline-start: 16rem; /* 256px */
`],["scroll-me-64",`scroll-margin-inline-end: 16rem; /* 256px */
`],["scroll-mt-64",`scroll-margin-top: 16rem; /* 256px */
`],["scroll-mr-64",`scroll-margin-right: 16rem; /* 256px */
`],["scroll-mb-64",`scroll-margin-bottom: 16rem; /* 256px */
`],["scroll-ml-64",`scroll-margin-left: 16rem; /* 256px */
`],["scroll-m-72",`scroll-margin: 18rem; /* 288px */
`],["scroll-mx-72",`scroll-margin-left: 18rem; /* 288px */
scroll-margin-right: 18rem; /* 288px */
`],["scroll-my-72",`scroll-margin-top: 18rem; /* 288px */
scroll-margin-bottom: 18rem; /* 288px */
`],["scroll-ms-72",`scroll-margin-inline-start: 18rem; /* 288px */
`],["scroll-me-72",`scroll-margin-inline-end: 18rem; /* 288px */
`],["scroll-mt-72",`scroll-margin-top: 18rem; /* 288px */
`],["scroll-mr-72",`scroll-margin-right: 18rem; /* 288px */
`],["scroll-mb-72",`scroll-margin-bottom: 18rem; /* 288px */
`],["scroll-ml-72",`scroll-margin-left: 18rem; /* 288px */
`],["scroll-m-80",`scroll-margin: 20rem; /* 320px */
`],["scroll-mx-80",`scroll-margin-left: 20rem; /* 320px */
scroll-margin-right: 20rem; /* 320px */
`],["scroll-my-80",`scroll-margin-top: 20rem; /* 320px */
scroll-margin-bottom: 20rem; /* 320px */
`],["scroll-ms-80",`scroll-margin-inline-start: 20rem; /* 320px */
`],["scroll-me-80",`scroll-margin-inline-end: 20rem; /* 320px */
`],["scroll-mt-80",`scroll-margin-top: 20rem; /* 320px */
`],["scroll-mr-80",`scroll-margin-right: 20rem; /* 320px */
`],["scroll-mb-80",`scroll-margin-bottom: 20rem; /* 320px */
`],["scroll-ml-80",`scroll-margin-left: 20rem; /* 320px */
`],["scroll-m-96",`scroll-margin: 24rem; /* 384px */
`],["scroll-mx-96",`scroll-margin-left: 24rem; /* 384px */
scroll-margin-right: 24rem; /* 384px */
`],["scroll-my-96",`scroll-margin-top: 24rem; /* 384px */
scroll-margin-bottom: 24rem; /* 384px */
`],["scroll-ms-96",`scroll-margin-inline-start: 24rem; /* 384px */
`],["scroll-me-96",`scroll-margin-inline-end: 24rem; /* 384px */
`],["scroll-mt-96",`scroll-margin-top: 24rem; /* 384px */
`],["scroll-mr-96",`scroll-margin-right: 24rem; /* 384px */
`],["scroll-mb-96",`scroll-margin-bottom: 24rem; /* 384px */
`],["scroll-ml-96",`scroll-margin-left: 24rem; /* 384px */
`]]},{url:"https://tailwindcss.com/docs/scroll-padding",entry:"Scroll Padding",description:"Utilities for controlling an element's scroll offset within a snap container.",parameters:[["scroll-p-0",`scroll-padding: 0px;
`],["scroll-px-0",`scroll-padding-left: 0px;
scroll-padding-right: 0px;
`],["scroll-py-0",`scroll-padding-top: 0px;
scroll-padding-bottom: 0px;
`],["scroll-ps-0",`scroll-padding-inline-start: 0px;
`],["scroll-pe-0",`scroll-padding-inline-end: 0px;
`],["scroll-pt-0",`scroll-padding-top: 0px;
`],["scroll-pr-0",`scroll-padding-right: 0px;
`],["scroll-pb-0",`scroll-padding-bottom: 0px;
`],["scroll-pl-0",`scroll-padding-left: 0px;
`],["scroll-p-px",`scroll-padding: 1px;
`],["scroll-px-px",`scroll-padding-left: 1px;
scroll-padding-right: 1px;
`],["scroll-py-px",`scroll-padding-top: 1px;
scroll-padding-bottom: 1px;
`],["scroll-ps-px",`scroll-padding-inline-start: 1px;
`],["scroll-pe-px",`scroll-padding-inline-end: 1px;
`],["scroll-pt-px",`scroll-padding-top: 1px;
`],["scroll-pr-px",`scroll-padding-right: 1px;
`],["scroll-pb-px",`scroll-padding-bottom: 1px;
`],["scroll-pl-px",`scroll-padding-left: 1px;
`],["scroll-p-0.5",`scroll-padding: 0.125rem; /* 2px */
`],["scroll-px-0.5",`scroll-padding-left: 0.125rem; /* 2px */
scroll-padding-right: 0.125rem; /* 2px */
`],["scroll-py-0.5",`scroll-padding-top: 0.125rem; /* 2px */
scroll-padding-bottom: 0.125rem; /* 2px */
`],["scroll-ps-0.5",`scroll-padding-inline-start: 0.125rem; /* 2px */
`],["scroll-pe-0.5",`scroll-padding-inline-end: 0.125rem; /* 2px */
`],["scroll-pt-0.5",`scroll-padding-top: 0.125rem; /* 2px */
`],["scroll-pr-0.5",`scroll-padding-right: 0.125rem; /* 2px */
`],["scroll-pb-0.5",`scroll-padding-bottom: 0.125rem; /* 2px */
`],["scroll-pl-0.5",`scroll-padding-left: 0.125rem; /* 2px */
`],["scroll-p-1",`scroll-padding: 0.25rem; /* 4px */
`],["scroll-px-1",`scroll-padding-left: 0.25rem; /* 4px */
scroll-padding-right: 0.25rem; /* 4px */
`],["scroll-py-1",`scroll-padding-top: 0.25rem; /* 4px */
scroll-padding-bottom: 0.25rem; /* 4px */
`],["scroll-ps-1",`scroll-padding-inline-start: 0.25rem; /* 4px */
`],["scroll-pe-1",`scroll-padding-inline-end: 0.25rem; /* 4px */
`],["scroll-pt-1",`scroll-padding-top: 0.25rem; /* 4px */
`],["scroll-pr-1",`scroll-padding-right: 0.25rem; /* 4px */
`],["scroll-pb-1",`scroll-padding-bottom: 0.25rem; /* 4px */
`],["scroll-pl-1",`scroll-padding-left: 0.25rem; /* 4px */
`],["scroll-p-1.5",`scroll-padding: 0.375rem; /* 6px */
`],["scroll-px-1.5",`scroll-padding-left: 0.375rem; /* 6px */
scroll-padding-right: 0.375rem; /* 6px */
`],["scroll-py-1.5",`scroll-padding-top: 0.375rem; /* 6px */
scroll-padding-bottom: 0.375rem; /* 6px */
`],["scroll-ps-1.5",`scroll-padding-inline-start: 0.375rem; /* 6px */
`],["scroll-pe-1.5",`scroll-padding-inline-end: 0.375rem; /* 6px */
`],["scroll-pt-1.5",`scroll-padding-top: 0.375rem; /* 6px */
`],["scroll-pr-1.5",`scroll-padding-right: 0.375rem; /* 6px */
`],["scroll-pb-1.5",`scroll-padding-bottom: 0.375rem; /* 6px */
`],["scroll-pl-1.5",`scroll-padding-left: 0.375rem; /* 6px */
`],["scroll-p-2",`scroll-padding: 0.5rem; /* 8px */
`],["scroll-px-2",`scroll-padding-left: 0.5rem; /* 8px */
scroll-padding-right: 0.5rem; /* 8px */
`],["scroll-py-2",`scroll-padding-top: 0.5rem; /* 8px */
scroll-padding-bottom: 0.5rem; /* 8px */
`],["scroll-ps-2",`scroll-padding-inline-start: 0.5rem; /* 8px */
`],["scroll-pe-2",`scroll-padding-inline-end: 0.5rem; /* 8px */
`],["scroll-pt-2",`scroll-padding-top: 0.5rem; /* 8px */
`],["scroll-pr-2",`scroll-padding-right: 0.5rem; /* 8px */
`],["scroll-pb-2",`scroll-padding-bottom: 0.5rem; /* 8px */
`],["scroll-pl-2",`scroll-padding-left: 0.5rem; /* 8px */
`],["scroll-p-2.5",`scroll-padding: 0.625rem; /* 10px */
`],["scroll-px-2.5",`scroll-padding-left: 0.625rem; /* 10px */
scroll-padding-right: 0.625rem; /* 10px */
`],["scroll-py-2.5",`scroll-padding-top: 0.625rem; /* 10px */
scroll-padding-bottom: 0.625rem; /* 10px */
`],["scroll-ps-2.5",`scroll-padding-inline-start: 0.625rem; /* 10px */
`],["scroll-pe-2.5",`scroll-padding-inline-end: 0.625rem; /* 10px */
`],["scroll-pt-2.5",`scroll-padding-top: 0.625rem; /* 10px */
`],["scroll-pr-2.5",`scroll-padding-right: 0.625rem; /* 10px */
`],["scroll-pb-2.5",`scroll-padding-bottom: 0.625rem; /* 10px */
`],["scroll-pl-2.5",`scroll-padding-left: 0.625rem; /* 10px */
`],["scroll-p-3",`scroll-padding: 0.75rem; /* 12px */
`],["scroll-px-3",`scroll-padding-left: 0.75rem; /* 12px */
scroll-padding-right: 0.75rem; /* 12px */
`],["scroll-py-3",`scroll-padding-top: 0.75rem; /* 12px */
scroll-padding-bottom: 0.75rem; /* 12px */
`],["scroll-ps-3",`scroll-padding-inline-start: 0.75rem; /* 12px */
`],["scroll-pe-3",`scroll-padding-inline-end: 0.75rem; /* 12px */
`],["scroll-pt-3",`scroll-padding-top: 0.75rem; /* 12px */
`],["scroll-pr-3",`scroll-padding-right: 0.75rem; /* 12px */
`],["scroll-pb-3",`scroll-padding-bottom: 0.75rem; /* 12px */
`],["scroll-pl-3",`scroll-padding-left: 0.75rem; /* 12px */
`],["scroll-p-3.5",`scroll-padding: 0.875rem; /* 14px */
`],["scroll-px-3.5",`scroll-padding-left: 0.875rem; /* 14px */
scroll-padding-right: 0.875rem; /* 14px */
`],["scroll-py-3.5",`scroll-padding-top: 0.875rem; /* 14px */
scroll-padding-bottom: 0.875rem; /* 14px */
`],["scroll-ps-3.5",`scroll-padding-inline-start: 0.875rem; /* 14px */
`],["scroll-pe-3.5",`scroll-padding-inline-end: 0.875rem; /* 14px */
`],["scroll-pt-3.5",`scroll-padding-top: 0.875rem; /* 14px */
`],["scroll-pr-3.5",`scroll-padding-right: 0.875rem; /* 14px */
`],["scroll-pb-3.5",`scroll-padding-bottom: 0.875rem; /* 14px */
`],["scroll-pl-3.5",`scroll-padding-left: 0.875rem; /* 14px */
`],["scroll-p-4",`scroll-padding: 1rem; /* 16px */
`],["scroll-px-4",`scroll-padding-left: 1rem; /* 16px */
scroll-padding-right: 1rem; /* 16px */
`],["scroll-py-4",`scroll-padding-top: 1rem; /* 16px */
scroll-padding-bottom: 1rem; /* 16px */
`],["scroll-ps-4",`scroll-padding-inline-start: 1rem; /* 16px */
`],["scroll-pe-4",`scroll-padding-inline-end: 1rem; /* 16px */
`],["scroll-pt-4",`scroll-padding-top: 1rem; /* 16px */
`],["scroll-pr-4",`scroll-padding-right: 1rem; /* 16px */
`],["scroll-pb-4",`scroll-padding-bottom: 1rem; /* 16px */
`],["scroll-pl-4",`scroll-padding-left: 1rem; /* 16px */
`],["scroll-p-5",`scroll-padding: 1.25rem; /* 20px */
`],["scroll-px-5",`scroll-padding-left: 1.25rem; /* 20px */
scroll-padding-right: 1.25rem; /* 20px */
`],["scroll-py-5",`scroll-padding-top: 1.25rem; /* 20px */
scroll-padding-bottom: 1.25rem; /* 20px */
`],["scroll-ps-5",`scroll-padding-inline-start: 1.25rem; /* 20px */
`],["scroll-pe-5",`scroll-padding-inline-end: 1.25rem; /* 20px */
`],["scroll-pt-5",`scroll-padding-top: 1.25rem; /* 20px */
`],["scroll-pr-5",`scroll-padding-right: 1.25rem; /* 20px */
`],["scroll-pb-5",`scroll-padding-bottom: 1.25rem; /* 20px */
`],["scroll-pl-5",`scroll-padding-left: 1.25rem; /* 20px */
`],["scroll-p-6",`scroll-padding: 1.5rem; /* 24px */
`],["scroll-px-6",`scroll-padding-left: 1.5rem; /* 24px */
scroll-padding-right: 1.5rem; /* 24px */
`],["scroll-py-6",`scroll-padding-top: 1.5rem; /* 24px */
scroll-padding-bottom: 1.5rem; /* 24px */
`],["scroll-ps-6",`scroll-padding-inline-start: 1.5rem; /* 24px */
`],["scroll-pe-6",`scroll-padding-inline-end: 1.5rem; /* 24px */
`],["scroll-pt-6",`scroll-padding-top: 1.5rem; /* 24px */
`],["scroll-pr-6",`scroll-padding-right: 1.5rem; /* 24px */
`],["scroll-pb-6",`scroll-padding-bottom: 1.5rem; /* 24px */
`],["scroll-pl-6",`scroll-padding-left: 1.5rem; /* 24px */
`],["scroll-p-7",`scroll-padding: 1.75rem; /* 28px */
`],["scroll-px-7",`scroll-padding-left: 1.75rem; /* 28px */
scroll-padding-right: 1.75rem; /* 28px */
`],["scroll-py-7",`scroll-padding-top: 1.75rem; /* 28px */
scroll-padding-bottom: 1.75rem; /* 28px */
`],["scroll-ps-7",`scroll-padding-inline-start: 1.75rem; /* 28px */
`],["scroll-pe-7",`scroll-padding-inline-end: 1.75rem; /* 28px */
`],["scroll-pt-7",`scroll-padding-top: 1.75rem; /* 28px */
`],["scroll-pr-7",`scroll-padding-right: 1.75rem; /* 28px */
`],["scroll-pb-7",`scroll-padding-bottom: 1.75rem; /* 28px */
`],["scroll-pl-7",`scroll-padding-left: 1.75rem; /* 28px */
`],["scroll-p-8",`scroll-padding: 2rem; /* 32px */
`],["scroll-px-8",`scroll-padding-left: 2rem; /* 32px */
scroll-padding-right: 2rem; /* 32px */
`],["scroll-py-8",`scroll-padding-top: 2rem; /* 32px */
scroll-padding-bottom: 2rem; /* 32px */
`],["scroll-ps-8",`scroll-padding-inline-start: 2rem; /* 32px */
`],["scroll-pe-8",`scroll-padding-inline-end: 2rem; /* 32px */
`],["scroll-pt-8",`scroll-padding-top: 2rem; /* 32px */
`],["scroll-pr-8",`scroll-padding-right: 2rem; /* 32px */
`],["scroll-pb-8",`scroll-padding-bottom: 2rem; /* 32px */
`],["scroll-pl-8",`scroll-padding-left: 2rem; /* 32px */
`],["scroll-p-9",`scroll-padding: 2.25rem; /* 36px */
`],["scroll-px-9",`scroll-padding-left: 2.25rem; /* 36px */
scroll-padding-right: 2.25rem; /* 36px */
`],["scroll-py-9",`scroll-padding-top: 2.25rem; /* 36px */
scroll-padding-bottom: 2.25rem; /* 36px */
`],["scroll-ps-9",`scroll-padding-inline-start: 2.25rem; /* 36px */
`],["scroll-pe-9",`scroll-padding-inline-end: 2.25rem; /* 36px */
`],["scroll-pt-9",`scroll-padding-top: 2.25rem; /* 36px */
`],["scroll-pr-9",`scroll-padding-right: 2.25rem; /* 36px */
`],["scroll-pb-9",`scroll-padding-bottom: 2.25rem; /* 36px */
`],["scroll-pl-9",`scroll-padding-left: 2.25rem; /* 36px */
`],["scroll-p-10",`scroll-padding: 2.5rem; /* 40px */
`],["scroll-px-10",`scroll-padding-left: 2.5rem; /* 40px */
scroll-padding-right: 2.5rem; /* 40px */
`],["scroll-py-10",`scroll-padding-top: 2.5rem; /* 40px */
scroll-padding-bottom: 2.5rem; /* 40px */
`],["scroll-ps-10",`scroll-padding-inline-start: 2.5rem; /* 40px */
`],["scroll-pe-10",`scroll-padding-inline-end: 2.5rem; /* 40px */
`],["scroll-pt-10",`scroll-padding-top: 2.5rem; /* 40px */
`],["scroll-pr-10",`scroll-padding-right: 2.5rem; /* 40px */
`],["scroll-pb-10",`scroll-padding-bottom: 2.5rem; /* 40px */
`],["scroll-pl-10",`scroll-padding-left: 2.5rem; /* 40px */
`],["scroll-p-11",`scroll-padding: 2.75rem; /* 44px */
`],["scroll-px-11",`scroll-padding-left: 2.75rem; /* 44px */
scroll-padding-right: 2.75rem; /* 44px */
`],["scroll-py-11",`scroll-padding-top: 2.75rem; /* 44px */
scroll-padding-bottom: 2.75rem; /* 44px */
`],["scroll-ps-11",`scroll-padding-inline-start: 2.75rem; /* 44px */
`],["scroll-pe-11",`scroll-padding-inline-end: 2.75rem; /* 44px */
`],["scroll-pt-11",`scroll-padding-top: 2.75rem; /* 44px */
`],["scroll-pr-11",`scroll-padding-right: 2.75rem; /* 44px */
`],["scroll-pb-11",`scroll-padding-bottom: 2.75rem; /* 44px */
`],["scroll-pl-11",`scroll-padding-left: 2.75rem; /* 44px */
`],["scroll-p-12",`scroll-padding: 3rem; /* 48px */
`],["scroll-px-12",`scroll-padding-left: 3rem; /* 48px */
scroll-padding-right: 3rem; /* 48px */
`],["scroll-py-12",`scroll-padding-top: 3rem; /* 48px */
scroll-padding-bottom: 3rem; /* 48px */
`],["scroll-ps-12",`scroll-padding-inline-start: 3rem; /* 48px */
`],["scroll-pe-12",`scroll-padding-inline-end: 3rem; /* 48px */
`],["scroll-pt-12",`scroll-padding-top: 3rem; /* 48px */
`],["scroll-pr-12",`scroll-padding-right: 3rem; /* 48px */
`],["scroll-pb-12",`scroll-padding-bottom: 3rem; /* 48px */
`],["scroll-pl-12",`scroll-padding-left: 3rem; /* 48px */
`],["scroll-p-14",`scroll-padding: 3.5rem; /* 56px */
`],["scroll-px-14",`scroll-padding-left: 3.5rem; /* 56px */
scroll-padding-right: 3.5rem; /* 56px */
`],["scroll-py-14",`scroll-padding-top: 3.5rem; /* 56px */
scroll-padding-bottom: 3.5rem; /* 56px */
`],["scroll-ps-14",`scroll-padding-inline-start: 3.5rem; /* 56px */
`],["scroll-pe-14",`scroll-padding-inline-end: 3.5rem; /* 56px */
`],["scroll-pt-14",`scroll-padding-top: 3.5rem; /* 56px */
`],["scroll-pr-14",`scroll-padding-right: 3.5rem; /* 56px */
`],["scroll-pb-14",`scroll-padding-bottom: 3.5rem; /* 56px */
`],["scroll-pl-14",`scroll-padding-left: 3.5rem; /* 56px */
`],["scroll-p-16",`scroll-padding: 4rem; /* 64px */
`],["scroll-px-16",`scroll-padding-left: 4rem; /* 64px */
scroll-padding-right: 4rem; /* 64px */
`],["scroll-py-16",`scroll-padding-top: 4rem; /* 64px */
scroll-padding-bottom: 4rem; /* 64px */
`],["scroll-ps-16",`scroll-padding-inline-start: 4rem; /* 64px */
`],["scroll-pe-16",`scroll-padding-inline-end: 4rem; /* 64px */
`],["scroll-pt-16",`scroll-padding-top: 4rem; /* 64px */
`],["scroll-pr-16",`scroll-padding-right: 4rem; /* 64px */
`],["scroll-pb-16",`scroll-padding-bottom: 4rem; /* 64px */
`],["scroll-pl-16",`scroll-padding-left: 4rem; /* 64px */
`],["scroll-p-20",`scroll-padding: 5rem; /* 80px */
`],["scroll-px-20",`scroll-padding-left: 5rem; /* 80px */
scroll-padding-right: 5rem; /* 80px */
`],["scroll-py-20",`scroll-padding-top: 5rem; /* 80px */
scroll-padding-bottom: 5rem; /* 80px */
`],["scroll-ps-20",`scroll-padding-inline-start: 5rem; /* 80px */
`],["scroll-pe-20",`scroll-padding-inline-end: 5rem; /* 80px */
`],["scroll-pt-20",`scroll-padding-top: 5rem; /* 80px */
`],["scroll-pr-20",`scroll-padding-right: 5rem; /* 80px */
`],["scroll-pb-20",`scroll-padding-bottom: 5rem; /* 80px */
`],["scroll-pl-20",`scroll-padding-left: 5rem; /* 80px */
`],["scroll-p-24",`scroll-padding: 6rem; /* 96px */
`],["scroll-px-24",`scroll-padding-left: 6rem; /* 96px */
scroll-padding-right: 6rem; /* 96px */
`],["scroll-py-24",`scroll-padding-top: 6rem; /* 96px */
scroll-padding-bottom: 6rem; /* 96px */
`],["scroll-ps-24",`scroll-padding-inline-start: 6rem; /* 96px */
`],["scroll-pe-24",`scroll-padding-inline-end: 6rem; /* 96px */
`],["scroll-pt-24",`scroll-padding-top: 6rem; /* 96px */
`],["scroll-pr-24",`scroll-padding-right: 6rem; /* 96px */
`],["scroll-pb-24",`scroll-padding-bottom: 6rem; /* 96px */
`],["scroll-pl-24",`scroll-padding-left: 6rem; /* 96px */
`],["scroll-p-28",`scroll-padding: 7rem; /* 112px */
`],["scroll-px-28",`scroll-padding-left: 7rem; /* 112px */
scroll-padding-right: 7rem; /* 112px */
`],["scroll-py-28",`scroll-padding-top: 7rem; /* 112px */
scroll-padding-bottom: 7rem; /* 112px */
`],["scroll-ps-28",`scroll-padding-inline-start: 7rem; /* 112px */
`],["scroll-pe-28",`scroll-padding-inline-end: 7rem; /* 112px */
`],["scroll-pt-28",`scroll-padding-top: 7rem; /* 112px */
`],["scroll-pr-28",`scroll-padding-right: 7rem; /* 112px */
`],["scroll-pb-28",`scroll-padding-bottom: 7rem; /* 112px */
`],["scroll-pl-28",`scroll-padding-left: 7rem; /* 112px */
`],["scroll-p-32",`scroll-padding: 8rem; /* 128px */
`],["scroll-px-32",`scroll-padding-left: 8rem; /* 128px */
scroll-padding-right: 8rem; /* 128px */
`],["scroll-py-32",`scroll-padding-top: 8rem; /* 128px */
scroll-padding-bottom: 8rem; /* 128px */
`],["scroll-ps-32",`scroll-padding-inline-start: 8rem; /* 128px */
`],["scroll-pe-32",`scroll-padding-inline-end: 8rem; /* 128px */
`],["scroll-pt-32",`scroll-padding-top: 8rem; /* 128px */
`],["scroll-pr-32",`scroll-padding-right: 8rem; /* 128px */
`],["scroll-pb-32",`scroll-padding-bottom: 8rem; /* 128px */
`],["scroll-pl-32",`scroll-padding-left: 8rem; /* 128px */
`],["scroll-p-36",`scroll-padding: 9rem; /* 144px */
`],["scroll-px-36",`scroll-padding-left: 9rem; /* 144px */
scroll-padding-right: 9rem; /* 144px */
`],["scroll-py-36",`scroll-padding-top: 9rem; /* 144px */
scroll-padding-bottom: 9rem; /* 144px */
`],["scroll-ps-36",`scroll-padding-inline-start: 9rem; /* 144px */
`],["scroll-pe-36",`scroll-padding-inline-end: 9rem; /* 144px */
`],["scroll-pt-36",`scroll-padding-top: 9rem; /* 144px */
`],["scroll-pr-36",`scroll-padding-right: 9rem; /* 144px */
`],["scroll-pb-36",`scroll-padding-bottom: 9rem; /* 144px */
`],["scroll-pl-36",`scroll-padding-left: 9rem; /* 144px */
`],["scroll-p-40",`scroll-padding: 10rem; /* 160px */
`],["scroll-px-40",`scroll-padding-left: 10rem; /* 160px */
scroll-padding-right: 10rem; /* 160px */
`],["scroll-py-40",`scroll-padding-top: 10rem; /* 160px */
scroll-padding-bottom: 10rem; /* 160px */
`],["scroll-ps-40",`scroll-padding-inline-start: 10rem; /* 160px */
`],["scroll-pe-40",`scroll-padding-inline-end: 10rem; /* 160px */
`],["scroll-pt-40",`scroll-padding-top: 10rem; /* 160px */
`],["scroll-pr-40",`scroll-padding-right: 10rem; /* 160px */
`],["scroll-pb-40",`scroll-padding-bottom: 10rem; /* 160px */
`],["scroll-pl-40",`scroll-padding-left: 10rem; /* 160px */
`],["scroll-p-44",`scroll-padding: 11rem; /* 176px */
`],["scroll-px-44",`scroll-padding-left: 11rem; /* 176px */
scroll-padding-right: 11rem; /* 176px */
`],["scroll-py-44",`scroll-padding-top: 11rem; /* 176px */
scroll-padding-bottom: 11rem; /* 176px */
`],["scroll-ps-44",`scroll-padding-inline-start: 11rem; /* 176px */
`],["scroll-pe-44",`scroll-padding-inline-end: 11rem; /* 176px */
`],["scroll-pt-44",`scroll-padding-top: 11rem; /* 176px */
`],["scroll-pr-44",`scroll-padding-right: 11rem; /* 176px */
`],["scroll-pb-44",`scroll-padding-bottom: 11rem; /* 176px */
`],["scroll-pl-44",`scroll-padding-left: 11rem; /* 176px */
`],["scroll-p-48",`scroll-padding: 12rem; /* 192px */
`],["scroll-px-48",`scroll-padding-left: 12rem; /* 192px */
scroll-padding-right: 12rem; /* 192px */
`],["scroll-py-48",`scroll-padding-top: 12rem; /* 192px */
scroll-padding-bottom: 12rem; /* 192px */
`],["scroll-ps-48",`scroll-padding-inline-start: 12rem; /* 192px */
`],["scroll-pe-48",`scroll-padding-inline-end: 12rem; /* 192px */
`],["scroll-pt-48",`scroll-padding-top: 12rem; /* 192px */
`],["scroll-pr-48",`scroll-padding-right: 12rem; /* 192px */
`],["scroll-pb-48",`scroll-padding-bottom: 12rem; /* 192px */
`],["scroll-pl-48",`scroll-padding-left: 12rem; /* 192px */
`],["scroll-p-52",`scroll-padding: 13rem; /* 208px */
`],["scroll-px-52",`scroll-padding-left: 13rem; /* 208px */
scroll-padding-right: 13rem; /* 208px */
`],["scroll-py-52",`scroll-padding-top: 13rem; /* 208px */
scroll-padding-bottom: 13rem; /* 208px */
`],["scroll-ps-52",`scroll-padding-inline-start: 13rem; /* 208px */
`],["scroll-pe-52",`scroll-padding-inline-end: 13rem; /* 208px */
`],["scroll-pt-52",`scroll-padding-top: 13rem; /* 208px */
`],["scroll-pr-52",`scroll-padding-right: 13rem; /* 208px */
`],["scroll-pb-52",`scroll-padding-bottom: 13rem; /* 208px */
`],["scroll-pl-52",`scroll-padding-left: 13rem; /* 208px */
`],["scroll-p-56",`scroll-padding: 14rem; /* 224px */
`],["scroll-px-56",`scroll-padding-left: 14rem; /* 224px */
scroll-padding-right: 14rem; /* 224px */
`],["scroll-py-56",`scroll-padding-top: 14rem; /* 224px */
scroll-padding-bottom: 14rem; /* 224px */
`],["scroll-ps-56",`scroll-padding-inline-start: 14rem; /* 224px */
`],["scroll-pe-56",`scroll-padding-inline-end: 14rem; /* 224px */
`],["scroll-pt-56",`scroll-padding-top: 14rem; /* 224px */
`],["scroll-pr-56",`scroll-padding-right: 14rem; /* 224px */
`],["scroll-pb-56",`scroll-padding-bottom: 14rem; /* 224px */
`],["scroll-pl-56",`scroll-padding-left: 14rem; /* 224px */
`],["scroll-p-60",`scroll-padding: 15rem; /* 240px */
`],["scroll-px-60",`scroll-padding-left: 15rem; /* 240px */
scroll-padding-right: 15rem; /* 240px */
`],["scroll-py-60",`scroll-padding-top: 15rem; /* 240px */
scroll-padding-bottom: 15rem; /* 240px */
`],["scroll-ps-60",`scroll-padding-inline-start: 15rem; /* 240px */
`],["scroll-pe-60",`scroll-padding-inline-end: 15rem; /* 240px */
`],["scroll-pt-60",`scroll-padding-top: 15rem; /* 240px */
`],["scroll-pr-60",`scroll-padding-right: 15rem; /* 240px */
`],["scroll-pb-60",`scroll-padding-bottom: 15rem; /* 240px */
`],["scroll-pl-60",`scroll-padding-left: 15rem; /* 240px */
`],["scroll-p-64",`scroll-padding: 16rem; /* 256px */
`],["scroll-px-64",`scroll-padding-left: 16rem; /* 256px */
scroll-padding-right: 16rem; /* 256px */
`],["scroll-py-64",`scroll-padding-top: 16rem; /* 256px */
scroll-padding-bottom: 16rem; /* 256px */
`],["scroll-ps-64",`scroll-padding-inline-start: 16rem; /* 256px */
`],["scroll-pe-64",`scroll-padding-inline-end: 16rem; /* 256px */
`],["scroll-pt-64",`scroll-padding-top: 16rem; /* 256px */
`],["scroll-pr-64",`scroll-padding-right: 16rem; /* 256px */
`],["scroll-pb-64",`scroll-padding-bottom: 16rem; /* 256px */
`],["scroll-pl-64",`scroll-padding-left: 16rem; /* 256px */
`],["scroll-p-72",`scroll-padding: 18rem; /* 288px */
`],["scroll-px-72",`scroll-padding-left: 18rem; /* 288px */
scroll-padding-right: 18rem; /* 288px */
`],["scroll-py-72",`scroll-padding-top: 18rem; /* 288px */
scroll-padding-bottom: 18rem; /* 288px */
`],["scroll-ps-72",`scroll-padding-inline-start: 18rem; /* 288px */
`],["scroll-pe-72",`scroll-padding-inline-end: 18rem; /* 288px */
`],["scroll-pt-72",`scroll-padding-top: 18rem; /* 288px */
`],["scroll-pr-72",`scroll-padding-right: 18rem; /* 288px */
`],["scroll-pb-72",`scroll-padding-bottom: 18rem; /* 288px */
`],["scroll-pl-72",`scroll-padding-left: 18rem; /* 288px */
`],["scroll-p-80",`scroll-padding: 20rem; /* 320px */
`],["scroll-px-80",`scroll-padding-left: 20rem; /* 320px */
scroll-padding-right: 20rem; /* 320px */
`],["scroll-py-80",`scroll-padding-top: 20rem; /* 320px */
scroll-padding-bottom: 20rem; /* 320px */
`],["scroll-ps-80",`scroll-padding-inline-start: 20rem; /* 320px */
`],["scroll-pe-80",`scroll-padding-inline-end: 20rem; /* 320px */
`],["scroll-pt-80",`scroll-padding-top: 20rem; /* 320px */
`],["scroll-pr-80",`scroll-padding-right: 20rem; /* 320px */
`],["scroll-pb-80",`scroll-padding-bottom: 20rem; /* 320px */
`],["scroll-pl-80",`scroll-padding-left: 20rem; /* 320px */
`],["scroll-p-96",`scroll-padding: 24rem; /* 384px */
`],["scroll-px-96",`scroll-padding-left: 24rem; /* 384px */
scroll-padding-right: 24rem; /* 384px */
`],["scroll-py-96",`scroll-padding-top: 24rem; /* 384px */
scroll-padding-bottom: 24rem; /* 384px */
`],["scroll-ps-96",`scroll-padding-inline-start: 24rem; /* 384px */
`],["scroll-pe-96",`scroll-padding-inline-end: 24rem; /* 384px */
`],["scroll-pt-96",`scroll-padding-top: 24rem; /* 384px */
`],["scroll-pr-96",`scroll-padding-right: 24rem; /* 384px */
`],["scroll-pb-96",`scroll-padding-bottom: 24rem; /* 384px */
`],["scroll-pl-96",`scroll-padding-left: 24rem; /* 384px */
`]]},{url:"https://tailwindcss.com/docs/scroll-snap-align",entry:"Scroll Snap Align",description:"Utilities for controlling the scroll snap alignment of an element.",parameters:[["snap-start",`scroll-snap-align: start;
`],["snap-end",`scroll-snap-align: end;
`],["snap-center",`scroll-snap-align: center;
`],["snap-align-none",`scroll-snap-align: none;
`]]},{url:"https://tailwindcss.com/docs/scroll-snap-stop",entry:"Scroll Snap Stop",description:"Utilities for controlling whether you can skip past possible snap positions.",parameters:[["snap-normal",`scroll-snap-stop: normal;
`],["snap-always",`scroll-snap-stop: always;
`]]},{url:"https://tailwindcss.com/docs/scroll-snap-type",entry:"Scroll Snap Type",description:"Utilities for controlling how strictly snap points are enforced in a snap container.",parameters:[["snap-none",`scroll-snap-type: none;
`],["snap-x",`scroll-snap-type: x var(--tw-scroll-snap-strictness);
`],["snap-y",`scroll-snap-type: y var(--tw-scroll-snap-strictness);
`],["snap-both",`scroll-snap-type: both var(--tw-scroll-snap-strictness);
`],["snap-mandatory",`--tw-scroll-snap-strictness: mandatory;
`],["snap-proximity",`--tw-scroll-snap-strictness: proximity;
`]]},{url:"https://tailwindcss.com/docs/touch-action",entry:"Touch Action",description:"Utilities for controlling how an element can be scrolled and zoomed on touchscreens.",parameters:[["touch-auto",`touch-action: auto;
`],["touch-none",`touch-action: none;
`],["touch-pan-x",`touch-action: pan-x;
`],["touch-pan-left",`touch-action: pan-left;
`],["touch-pan-right",`touch-action: pan-right;
`],["touch-pan-y",`touch-action: pan-y;
`],["touch-pan-up",`touch-action: pan-up;
`],["touch-pan-down",`touch-action: pan-down;
`],["touch-pinch-zoom",`touch-action: pinch-zoom;
`],["touch-manipulation",`touch-action: manipulation;
`]]},{url:"https://tailwindcss.com/docs/user-select",entry:"User Select",description:"Utilities for controlling whether the user can select text in an element.",parameters:[["select-none",`user-select: none;
`],["select-text",`user-select: text;
`],["select-all",`user-select: all;
`],["select-auto",`user-select: auto;
`]]},{url:"https://tailwindcss.com/docs/will-change",entry:"Will Change",description:"Utilities for optimizing upcoming animations of elements that are expected to change.",parameters:[["will-change-auto",`will-change: auto;
`],["will-change-scroll",`will-change: scroll-position;
`],["will-change-contents",`will-change: contents;
`],["will-change-transform",`will-change: transform;
`]]}],Es=[{url:"https://tailwindcss.com/docs/fill",entry:"Fill",description:"Utilities for styling the fill of SVG elements.",parameters:[["fill-none",`fill: none;
`],["fill-inherit",`fill: inherit;
`],["fill-current",`fill: currentColor;
`],["fill-transparent",`fill: transparent;
`],["fill-black",`fill: #000;
`],["fill-white",`fill: #fff;
`],["fill-slate-50",`fill: #f8fafc;
`],["fill-slate-100",`fill: #f1f5f9;
`],["fill-slate-200",`fill: #e2e8f0;
`],["fill-slate-300",`fill: #cbd5e1;
`],["fill-slate-400",`fill: #94a3b8;
`],["fill-slate-500",`fill: #64748b;
`],["fill-slate-600",`fill: #475569;
`],["fill-slate-700",`fill: #334155;
`],["fill-slate-800",`fill: #1e293b;
`],["fill-slate-900",`fill: #0f172a;
`],["fill-slate-950",`fill: #020617;
`],["fill-gray-50",`fill: #f9fafb;
`],["fill-gray-100",`fill: #f3f4f6;
`],["fill-gray-200",`fill: #e5e7eb;
`],["fill-gray-300",`fill: #d1d5db;
`],["fill-gray-400",`fill: #9ca3af;
`],["fill-gray-500",`fill: #6b7280;
`],["fill-gray-600",`fill: #4b5563;
`],["fill-gray-700",`fill: #374151;
`],["fill-gray-800",`fill: #1f2937;
`],["fill-gray-900",`fill: #111827;
`],["fill-gray-950",`fill: #030712;
`],["fill-zinc-50",`fill: #fafafa;
`],["fill-zinc-100",`fill: #f4f4f5;
`],["fill-zinc-200",`fill: #e4e4e7;
`],["fill-zinc-300",`fill: #d4d4d8;
`],["fill-zinc-400",`fill: #a1a1aa;
`],["fill-zinc-500",`fill: #71717a;
`],["fill-zinc-600",`fill: #52525b;
`],["fill-zinc-700",`fill: #3f3f46;
`],["fill-zinc-800",`fill: #27272a;
`],["fill-zinc-900",`fill: #18181b;
`],["fill-zinc-950",`fill: #09090b;
`],["fill-neutral-50",`fill: #fafafa;
`],["fill-neutral-100",`fill: #f5f5f5;
`],["fill-neutral-200",`fill: #e5e5e5;
`],["fill-neutral-300",`fill: #d4d4d4;
`],["fill-neutral-400",`fill: #a3a3a3;
`],["fill-neutral-500",`fill: #737373;
`],["fill-neutral-600",`fill: #525252;
`],["fill-neutral-700",`fill: #404040;
`],["fill-neutral-800",`fill: #262626;
`],["fill-neutral-900",`fill: #171717;
`],["fill-neutral-950",`fill: #0a0a0a;
`],["fill-stone-50",`fill: #fafaf9;
`],["fill-stone-100",`fill: #f5f5f4;
`],["fill-stone-200",`fill: #e7e5e4;
`],["fill-stone-300",`fill: #d6d3d1;
`],["fill-stone-400",`fill: #a8a29e;
`],["fill-stone-500",`fill: #78716c;
`],["fill-stone-600",`fill: #57534e;
`],["fill-stone-700",`fill: #44403c;
`],["fill-stone-800",`fill: #292524;
`],["fill-stone-900",`fill: #1c1917;
`],["fill-stone-950",`fill: #0c0a09;
`],["fill-red-50",`fill: #fef2f2;
`],["fill-red-100",`fill: #fee2e2;
`],["fill-red-200",`fill: #fecaca;
`],["fill-red-300",`fill: #fca5a5;
`],["fill-red-400",`fill: #f87171;
`],["fill-red-500",`fill: #ef4444;
`],["fill-red-600",`fill: #dc2626;
`],["fill-red-700",`fill: #b91c1c;
`],["fill-red-800",`fill: #991b1b;
`],["fill-red-900",`fill: #7f1d1d;
`],["fill-red-950",`fill: #450a0a;
`],["fill-orange-50",`fill: #fff7ed;
`],["fill-orange-100",`fill: #ffedd5;
`],["fill-orange-200",`fill: #fed7aa;
`],["fill-orange-300",`fill: #fdba74;
`],["fill-orange-400",`fill: #fb923c;
`],["fill-orange-500",`fill: #f97316;
`],["fill-orange-600",`fill: #ea580c;
`],["fill-orange-700",`fill: #c2410c;
`],["fill-orange-800",`fill: #9a3412;
`],["fill-orange-900",`fill: #7c2d12;
`],["fill-orange-950",`fill: #431407;
`],["fill-amber-50",`fill: #fffbeb;
`],["fill-amber-100",`fill: #fef3c7;
`],["fill-amber-200",`fill: #fde68a;
`],["fill-amber-300",`fill: #fcd34d;
`],["fill-amber-400",`fill: #fbbf24;
`],["fill-amber-500",`fill: #f59e0b;
`],["fill-amber-600",`fill: #d97706;
`],["fill-amber-700",`fill: #b45309;
`],["fill-amber-800",`fill: #92400e;
`],["fill-amber-900",`fill: #78350f;
`],["fill-amber-950",`fill: #451a03;
`],["fill-yellow-50",`fill: #fefce8;
`],["fill-yellow-100",`fill: #fef9c3;
`],["fill-yellow-200",`fill: #fef08a;
`],["fill-yellow-300",`fill: #fde047;
`],["fill-yellow-400",`fill: #facc15;
`],["fill-yellow-500",`fill: #eab308;
`],["fill-yellow-600",`fill: #ca8a04;
`],["fill-yellow-700",`fill: #a16207;
`],["fill-yellow-800",`fill: #854d0e;
`],["fill-yellow-900",`fill: #713f12;
`],["fill-yellow-950",`fill: #422006;
`],["fill-lime-50",`fill: #f7fee7;
`],["fill-lime-100",`fill: #ecfccb;
`],["fill-lime-200",`fill: #d9f99d;
`],["fill-lime-300",`fill: #bef264;
`],["fill-lime-400",`fill: #a3e635;
`],["fill-lime-500",`fill: #84cc16;
`],["fill-lime-600",`fill: #65a30d;
`],["fill-lime-700",`fill: #4d7c0f;
`],["fill-lime-800",`fill: #3f6212;
`],["fill-lime-900",`fill: #365314;
`],["fill-lime-950",`fill: #1a2e05;
`],["fill-green-50",`fill: #f0fdf4;
`],["fill-green-100",`fill: #dcfce7;
`],["fill-green-200",`fill: #bbf7d0;
`],["fill-green-300",`fill: #86efac;
`],["fill-green-400",`fill: #4ade80;
`],["fill-green-500",`fill: #22c55e;
`],["fill-green-600",`fill: #16a34a;
`],["fill-green-700",`fill: #15803d;
`],["fill-green-800",`fill: #166534;
`],["fill-green-900",`fill: #14532d;
`],["fill-green-950",`fill: #052e16;
`],["fill-emerald-50",`fill: #ecfdf5;
`],["fill-emerald-100",`fill: #d1fae5;
`],["fill-emerald-200",`fill: #a7f3d0;
`],["fill-emerald-300",`fill: #6ee7b7;
`],["fill-emerald-400",`fill: #34d399;
`],["fill-emerald-500",`fill: #10b981;
`],["fill-emerald-600",`fill: #059669;
`],["fill-emerald-700",`fill: #047857;
`],["fill-emerald-800",`fill: #065f46;
`],["fill-emerald-900",`fill: #064e3b;
`],["fill-emerald-950",`fill: #022c22;
`],["fill-teal-50",`fill: #f0fdfa;
`],["fill-teal-100",`fill: #ccfbf1;
`],["fill-teal-200",`fill: #99f6e4;
`],["fill-teal-300",`fill: #5eead4;
`],["fill-teal-400",`fill: #2dd4bf;
`],["fill-teal-500",`fill: #14b8a6;
`],["fill-teal-600",`fill: #0d9488;
`],["fill-teal-700",`fill: #0f766e;
`],["fill-teal-800",`fill: #115e59;
`],["fill-teal-900",`fill: #134e4a;
`],["fill-teal-950",`fill: #042f2e;
`],["fill-cyan-50",`fill: #ecfeff;
`],["fill-cyan-100",`fill: #cffafe;
`],["fill-cyan-200",`fill: #a5f3fc;
`],["fill-cyan-300",`fill: #67e8f9;
`],["fill-cyan-400",`fill: #22d3ee;
`],["fill-cyan-500",`fill: #06b6d4;
`],["fill-cyan-600",`fill: #0891b2;
`],["fill-cyan-700",`fill: #0e7490;
`],["fill-cyan-800",`fill: #155e75;
`],["fill-cyan-900",`fill: #164e63;
`],["fill-cyan-950",`fill: #083344;
`],["fill-sky-50",`fill: #f0f9ff;
`],["fill-sky-100",`fill: #e0f2fe;
`],["fill-sky-200",`fill: #bae6fd;
`],["fill-sky-300",`fill: #7dd3fc;
`],["fill-sky-400",`fill: #38bdf8;
`],["fill-sky-500",`fill: #0ea5e9;
`],["fill-sky-600",`fill: #0284c7;
`],["fill-sky-700",`fill: #0369a1;
`],["fill-sky-800",`fill: #075985;
`],["fill-sky-900",`fill: #0c4a6e;
`],["fill-sky-950",`fill: #082f49;
`],["fill-blue-50",`fill: #eff6ff;
`],["fill-blue-100",`fill: #dbeafe;
`],["fill-blue-200",`fill: #bfdbfe;
`],["fill-blue-300",`fill: #93c5fd;
`],["fill-blue-400",`fill: #60a5fa;
`],["fill-blue-500",`fill: #3b82f6;
`],["fill-blue-600",`fill: #2563eb;
`],["fill-blue-700",`fill: #1d4ed8;
`],["fill-blue-800",`fill: #1e40af;
`],["fill-blue-900",`fill: #1e3a8a;
`],["fill-blue-950",`fill: #172554;
`],["fill-indigo-50",`fill: #eef2ff;
`],["fill-indigo-100",`fill: #e0e7ff;
`],["fill-indigo-200",`fill: #c7d2fe;
`],["fill-indigo-300",`fill: #a5b4fc;
`],["fill-indigo-400",`fill: #818cf8;
`],["fill-indigo-500",`fill: #6366f1;
`],["fill-indigo-600",`fill: #4f46e5;
`],["fill-indigo-700",`fill: #4338ca;
`],["fill-indigo-800",`fill: #3730a3;
`],["fill-indigo-900",`fill: #312e81;
`],["fill-indigo-950",`fill: #1e1b4b;
`],["fill-violet-50",`fill: #f5f3ff;
`],["fill-violet-100",`fill: #ede9fe;
`],["fill-violet-200",`fill: #ddd6fe;
`],["fill-violet-300",`fill: #c4b5fd;
`],["fill-violet-400",`fill: #a78bfa;
`],["fill-violet-500",`fill: #8b5cf6;
`],["fill-violet-600",`fill: #7c3aed;
`],["fill-violet-700",`fill: #6d28d9;
`],["fill-violet-800",`fill: #5b21b6;
`],["fill-violet-900",`fill: #4c1d95;
`],["fill-violet-950",`fill: #2e1065;
`],["fill-purple-50",`fill: #faf5ff;
`],["fill-purple-100",`fill: #f3e8ff;
`],["fill-purple-200",`fill: #e9d5ff;
`],["fill-purple-300",`fill: #d8b4fe;
`],["fill-purple-400",`fill: #c084fc;
`],["fill-purple-500",`fill: #a855f7;
`],["fill-purple-600",`fill: #9333ea;
`],["fill-purple-700",`fill: #7e22ce;
`],["fill-purple-800",`fill: #6b21a8;
`],["fill-purple-900",`fill: #581c87;
`],["fill-purple-950",`fill: #3b0764;
`],["fill-fuchsia-50",`fill: #fdf4ff;
`],["fill-fuchsia-100",`fill: #fae8ff;
`],["fill-fuchsia-200",`fill: #f5d0fe;
`],["fill-fuchsia-300",`fill: #f0abfc;
`],["fill-fuchsia-400",`fill: #e879f9;
`],["fill-fuchsia-500",`fill: #d946ef;
`],["fill-fuchsia-600",`fill: #c026d3;
`],["fill-fuchsia-700",`fill: #a21caf;
`],["fill-fuchsia-800",`fill: #86198f;
`],["fill-fuchsia-900",`fill: #701a75;
`],["fill-fuchsia-950",`fill: #4a044e;
`],["fill-pink-50",`fill: #fdf2f8;
`],["fill-pink-100",`fill: #fce7f3;
`],["fill-pink-200",`fill: #fbcfe8;
`],["fill-pink-300",`fill: #f9a8d4;
`],["fill-pink-400",`fill: #f472b6;
`],["fill-pink-500",`fill: #ec4899;
`],["fill-pink-600",`fill: #db2777;
`],["fill-pink-700",`fill: #be185d;
`],["fill-pink-800",`fill: #9d174d;
`],["fill-pink-900",`fill: #831843;
`],["fill-pink-950",`fill: #500724;
`],["fill-rose-50",`fill: #fff1f2;
`],["fill-rose-100",`fill: #ffe4e6;
`],["fill-rose-200",`fill: #fecdd3;
`],["fill-rose-300",`fill: #fda4af;
`],["fill-rose-400",`fill: #fb7185;
`],["fill-rose-500",`fill: #f43f5e;
`],["fill-rose-600",`fill: #e11d48;
`],["fill-rose-700",`fill: #be123c;
`],["fill-rose-800",`fill: #9f1239;
`],["fill-rose-900",`fill: #881337;
`],["fill-rose-950",`fill: #4c0519;
`]]},{url:"https://tailwindcss.com/docs/stroke",entry:"Stroke",description:"Utilities for styling the stroke of SVG elements.",parameters:[["stroke-none",`stroke: none;
`],["stroke-inherit",`stroke: inherit;
`],["stroke-current",`stroke: currentColor;
`],["stroke-transparent",`stroke: transparent;
`],["stroke-black",`stroke: #000;
`],["stroke-white",`stroke: #fff;
`],["stroke-slate-50",`stroke: #f8fafc;
`],["stroke-slate-100",`stroke: #f1f5f9;
`],["stroke-slate-200",`stroke: #e2e8f0;
`],["stroke-slate-300",`stroke: #cbd5e1;
`],["stroke-slate-400",`stroke: #94a3b8;
`],["stroke-slate-500",`stroke: #64748b;
`],["stroke-slate-600",`stroke: #475569;
`],["stroke-slate-700",`stroke: #334155;
`],["stroke-slate-800",`stroke: #1e293b;
`],["stroke-slate-900",`stroke: #0f172a;
`],["stroke-slate-950",`stroke: #020617;
`],["stroke-gray-50",`stroke: #f9fafb;
`],["stroke-gray-100",`stroke: #f3f4f6;
`],["stroke-gray-200",`stroke: #e5e7eb;
`],["stroke-gray-300",`stroke: #d1d5db;
`],["stroke-gray-400",`stroke: #9ca3af;
`],["stroke-gray-500",`stroke: #6b7280;
`],["stroke-gray-600",`stroke: #4b5563;
`],["stroke-gray-700",`stroke: #374151;
`],["stroke-gray-800",`stroke: #1f2937;
`],["stroke-gray-900",`stroke: #111827;
`],["stroke-gray-950",`stroke: #030712;
`],["stroke-zinc-50",`stroke: #fafafa;
`],["stroke-zinc-100",`stroke: #f4f4f5;
`],["stroke-zinc-200",`stroke: #e4e4e7;
`],["stroke-zinc-300",`stroke: #d4d4d8;
`],["stroke-zinc-400",`stroke: #a1a1aa;
`],["stroke-zinc-500",`stroke: #71717a;
`],["stroke-zinc-600",`stroke: #52525b;
`],["stroke-zinc-700",`stroke: #3f3f46;
`],["stroke-zinc-800",`stroke: #27272a;
`],["stroke-zinc-900",`stroke: #18181b;
`],["stroke-zinc-950",`stroke: #09090b;
`],["stroke-neutral-50",`stroke: #fafafa;
`],["stroke-neutral-100",`stroke: #f5f5f5;
`],["stroke-neutral-200",`stroke: #e5e5e5;
`],["stroke-neutral-300",`stroke: #d4d4d4;
`],["stroke-neutral-400",`stroke: #a3a3a3;
`],["stroke-neutral-500",`stroke: #737373;
`],["stroke-neutral-600",`stroke: #525252;
`],["stroke-neutral-700",`stroke: #404040;
`],["stroke-neutral-800",`stroke: #262626;
`],["stroke-neutral-900",`stroke: #171717;
`],["stroke-neutral-950",`stroke: #0a0a0a;
`],["stroke-stone-50",`stroke: #fafaf9;
`],["stroke-stone-100",`stroke: #f5f5f4;
`],["stroke-stone-200",`stroke: #e7e5e4;
`],["stroke-stone-300",`stroke: #d6d3d1;
`],["stroke-stone-400",`stroke: #a8a29e;
`],["stroke-stone-500",`stroke: #78716c;
`],["stroke-stone-600",`stroke: #57534e;
`],["stroke-stone-700",`stroke: #44403c;
`],["stroke-stone-800",`stroke: #292524;
`],["stroke-stone-900",`stroke: #1c1917;
`],["stroke-stone-950",`stroke: #0c0a09;
`],["stroke-red-50",`stroke: #fef2f2;
`],["stroke-red-100",`stroke: #fee2e2;
`],["stroke-red-200",`stroke: #fecaca;
`],["stroke-red-300",`stroke: #fca5a5;
`],["stroke-red-400",`stroke: #f87171;
`],["stroke-red-500",`stroke: #ef4444;
`],["stroke-red-600",`stroke: #dc2626;
`],["stroke-red-700",`stroke: #b91c1c;
`],["stroke-red-800",`stroke: #991b1b;
`],["stroke-red-900",`stroke: #7f1d1d;
`],["stroke-red-950",`stroke: #450a0a;
`],["stroke-orange-50",`stroke: #fff7ed;
`],["stroke-orange-100",`stroke: #ffedd5;
`],["stroke-orange-200",`stroke: #fed7aa;
`],["stroke-orange-300",`stroke: #fdba74;
`],["stroke-orange-400",`stroke: #fb923c;
`],["stroke-orange-500",`stroke: #f97316;
`],["stroke-orange-600",`stroke: #ea580c;
`],["stroke-orange-700",`stroke: #c2410c;
`],["stroke-orange-800",`stroke: #9a3412;
`],["stroke-orange-900",`stroke: #7c2d12;
`],["stroke-orange-950",`stroke: #431407;
`],["stroke-amber-50",`stroke: #fffbeb;
`],["stroke-amber-100",`stroke: #fef3c7;
`],["stroke-amber-200",`stroke: #fde68a;
`],["stroke-amber-300",`stroke: #fcd34d;
`],["stroke-amber-400",`stroke: #fbbf24;
`],["stroke-amber-500",`stroke: #f59e0b;
`],["stroke-amber-600",`stroke: #d97706;
`],["stroke-amber-700",`stroke: #b45309;
`],["stroke-amber-800",`stroke: #92400e;
`],["stroke-amber-900",`stroke: #78350f;
`],["stroke-amber-950",`stroke: #451a03;
`],["stroke-yellow-50",`stroke: #fefce8;
`],["stroke-yellow-100",`stroke: #fef9c3;
`],["stroke-yellow-200",`stroke: #fef08a;
`],["stroke-yellow-300",`stroke: #fde047;
`],["stroke-yellow-400",`stroke: #facc15;
`],["stroke-yellow-500",`stroke: #eab308;
`],["stroke-yellow-600",`stroke: #ca8a04;
`],["stroke-yellow-700",`stroke: #a16207;
`],["stroke-yellow-800",`stroke: #854d0e;
`],["stroke-yellow-900",`stroke: #713f12;
`],["stroke-yellow-950",`stroke: #422006;
`],["stroke-lime-50",`stroke: #f7fee7;
`],["stroke-lime-100",`stroke: #ecfccb;
`],["stroke-lime-200",`stroke: #d9f99d;
`],["stroke-lime-300",`stroke: #bef264;
`],["stroke-lime-400",`stroke: #a3e635;
`],["stroke-lime-500",`stroke: #84cc16;
`],["stroke-lime-600",`stroke: #65a30d;
`],["stroke-lime-700",`stroke: #4d7c0f;
`],["stroke-lime-800",`stroke: #3f6212;
`],["stroke-lime-900",`stroke: #365314;
`],["stroke-lime-950",`stroke: #1a2e05;
`],["stroke-green-50",`stroke: #f0fdf4;
`],["stroke-green-100",`stroke: #dcfce7;
`],["stroke-green-200",`stroke: #bbf7d0;
`],["stroke-green-300",`stroke: #86efac;
`],["stroke-green-400",`stroke: #4ade80;
`],["stroke-green-500",`stroke: #22c55e;
`],["stroke-green-600",`stroke: #16a34a;
`],["stroke-green-700",`stroke: #15803d;
`],["stroke-green-800",`stroke: #166534;
`],["stroke-green-900",`stroke: #14532d;
`],["stroke-green-950",`stroke: #052e16;
`],["stroke-emerald-50",`stroke: #ecfdf5;
`],["stroke-emerald-100",`stroke: #d1fae5;
`],["stroke-emerald-200",`stroke: #a7f3d0;
`],["stroke-emerald-300",`stroke: #6ee7b7;
`],["stroke-emerald-400",`stroke: #34d399;
`],["stroke-emerald-500",`stroke: #10b981;
`],["stroke-emerald-600",`stroke: #059669;
`],["stroke-emerald-700",`stroke: #047857;
`],["stroke-emerald-800",`stroke: #065f46;
`],["stroke-emerald-900",`stroke: #064e3b;
`],["stroke-emerald-950",`stroke: #022c22;
`],["stroke-teal-50",`stroke: #f0fdfa;
`],["stroke-teal-100",`stroke: #ccfbf1;
`],["stroke-teal-200",`stroke: #99f6e4;
`],["stroke-teal-300",`stroke: #5eead4;
`],["stroke-teal-400",`stroke: #2dd4bf;
`],["stroke-teal-500",`stroke: #14b8a6;
`],["stroke-teal-600",`stroke: #0d9488;
`],["stroke-teal-700",`stroke: #0f766e;
`],["stroke-teal-800",`stroke: #115e59;
`],["stroke-teal-900",`stroke: #134e4a;
`],["stroke-teal-950",`stroke: #042f2e;
`],["stroke-cyan-50",`stroke: #ecfeff;
`],["stroke-cyan-100",`stroke: #cffafe;
`],["stroke-cyan-200",`stroke: #a5f3fc;
`],["stroke-cyan-300",`stroke: #67e8f9;
`],["stroke-cyan-400",`stroke: #22d3ee;
`],["stroke-cyan-500",`stroke: #06b6d4;
`],["stroke-cyan-600",`stroke: #0891b2;
`],["stroke-cyan-700",`stroke: #0e7490;
`],["stroke-cyan-800",`stroke: #155e75;
`],["stroke-cyan-900",`stroke: #164e63;
`],["stroke-cyan-950",`stroke: #083344;
`],["stroke-sky-50",`stroke: #f0f9ff;
`],["stroke-sky-100",`stroke: #e0f2fe;
`],["stroke-sky-200",`stroke: #bae6fd;
`],["stroke-sky-300",`stroke: #7dd3fc;
`],["stroke-sky-400",`stroke: #38bdf8;
`],["stroke-sky-500",`stroke: #0ea5e9;
`],["stroke-sky-600",`stroke: #0284c7;
`],["stroke-sky-700",`stroke: #0369a1;
`],["stroke-sky-800",`stroke: #075985;
`],["stroke-sky-900",`stroke: #0c4a6e;
`],["stroke-sky-950",`stroke: #082f49;
`],["stroke-blue-50",`stroke: #eff6ff;
`],["stroke-blue-100",`stroke: #dbeafe;
`],["stroke-blue-200",`stroke: #bfdbfe;
`],["stroke-blue-300",`stroke: #93c5fd;
`],["stroke-blue-400",`stroke: #60a5fa;
`],["stroke-blue-500",`stroke: #3b82f6;
`],["stroke-blue-600",`stroke: #2563eb;
`],["stroke-blue-700",`stroke: #1d4ed8;
`],["stroke-blue-800",`stroke: #1e40af;
`],["stroke-blue-900",`stroke: #1e3a8a;
`],["stroke-blue-950",`stroke: #172554;
`],["stroke-indigo-50",`stroke: #eef2ff;
`],["stroke-indigo-100",`stroke: #e0e7ff;
`],["stroke-indigo-200",`stroke: #c7d2fe;
`],["stroke-indigo-300",`stroke: #a5b4fc;
`],["stroke-indigo-400",`stroke: #818cf8;
`],["stroke-indigo-500",`stroke: #6366f1;
`],["stroke-indigo-600",`stroke: #4f46e5;
`],["stroke-indigo-700",`stroke: #4338ca;
`],["stroke-indigo-800",`stroke: #3730a3;
`],["stroke-indigo-900",`stroke: #312e81;
`],["stroke-indigo-950",`stroke: #1e1b4b;
`],["stroke-violet-50",`stroke: #f5f3ff;
`],["stroke-violet-100",`stroke: #ede9fe;
`],["stroke-violet-200",`stroke: #ddd6fe;
`],["stroke-violet-300",`stroke: #c4b5fd;
`],["stroke-violet-400",`stroke: #a78bfa;
`],["stroke-violet-500",`stroke: #8b5cf6;
`],["stroke-violet-600",`stroke: #7c3aed;
`],["stroke-violet-700",`stroke: #6d28d9;
`],["stroke-violet-800",`stroke: #5b21b6;
`],["stroke-violet-900",`stroke: #4c1d95;
`],["stroke-violet-950",`stroke: #2e1065;
`],["stroke-purple-50",`stroke: #faf5ff;
`],["stroke-purple-100",`stroke: #f3e8ff;
`],["stroke-purple-200",`stroke: #e9d5ff;
`],["stroke-purple-300",`stroke: #d8b4fe;
`],["stroke-purple-400",`stroke: #c084fc;
`],["stroke-purple-500",`stroke: #a855f7;
`],["stroke-purple-600",`stroke: #9333ea;
`],["stroke-purple-700",`stroke: #7e22ce;
`],["stroke-purple-800",`stroke: #6b21a8;
`],["stroke-purple-900",`stroke: #581c87;
`],["stroke-purple-950",`stroke: #3b0764;
`],["stroke-fuchsia-50",`stroke: #fdf4ff;
`],["stroke-fuchsia-100",`stroke: #fae8ff;
`],["stroke-fuchsia-200",`stroke: #f5d0fe;
`],["stroke-fuchsia-300",`stroke: #f0abfc;
`],["stroke-fuchsia-400",`stroke: #e879f9;
`],["stroke-fuchsia-500",`stroke: #d946ef;
`],["stroke-fuchsia-600",`stroke: #c026d3;
`],["stroke-fuchsia-700",`stroke: #a21caf;
`],["stroke-fuchsia-800",`stroke: #86198f;
`],["stroke-fuchsia-900",`stroke: #701a75;
`],["stroke-fuchsia-950",`stroke: #4a044e;
`],["stroke-pink-50",`stroke: #fdf2f8;
`],["stroke-pink-100",`stroke: #fce7f3;
`],["stroke-pink-200",`stroke: #fbcfe8;
`],["stroke-pink-300",`stroke: #f9a8d4;
`],["stroke-pink-400",`stroke: #f472b6;
`],["stroke-pink-500",`stroke: #ec4899;
`],["stroke-pink-600",`stroke: #db2777;
`],["stroke-pink-700",`stroke: #be185d;
`],["stroke-pink-800",`stroke: #9d174d;
`],["stroke-pink-900",`stroke: #831843;
`],["stroke-pink-950",`stroke: #500724;
`],["stroke-rose-50",`stroke: #fff1f2;
`],["stroke-rose-100",`stroke: #ffe4e6;
`],["stroke-rose-200",`stroke: #fecdd3;
`],["stroke-rose-300",`stroke: #fda4af;
`],["stroke-rose-400",`stroke: #fb7185;
`],["stroke-rose-500",`stroke: #f43f5e;
`],["stroke-rose-600",`stroke: #e11d48;
`],["stroke-rose-700",`stroke: #be123c;
`],["stroke-rose-800",`stroke: #9f1239;
`],["stroke-rose-900",`stroke: #881337;
`],["stroke-rose-950",`stroke: #4c0519;
`]]},{url:"https://tailwindcss.com/docs/stroke-width",entry:"Stroke Width",description:"Utilities for styling the stroke width of SVG elements.",parameters:[["stroke-0",`stroke-width: 0;
`],["stroke-1",`stroke-width: 1;
`],["stroke-2",`stroke-width: 2;
`]]}],Ts=[{url:"https://tailwindcss.com/docs/screen-readers",entry:"Screen Readers",description:"Utilities for improving accessibility with screen readers.",parameters:[["sr-only",`position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
`],["not-sr-only",`position: static;
width: auto;
height: auto;
padding: 0;
margin: 0;
overflow: visible;
clip: auto;
white-space: normal;
`]]},{url:"https://tailwindcss.com/docs/forced-color-adjust",entry:"Forced Color Adjust",description:"Utilities for opting in and out of forced colors.",parameters:[["forced-color-adjust-auto",`forced-color-adjust: auto;
`],["forced-color-adjust-none",`forced-color-adjust: none;
`]]}],f=({value:r})=>n.jsx("table",{className:"border-separate border-spacing-y-1 text-sm leading-4 text-gray-500 dark:text-gray-300",children:n.jsx("tbody",{children:r.map(([o,e,t])=>n.jsxs("tr",{children:[(t==null?void 0:t.type)==="td"?t:null,n.jsx("td",{className:"whitespace-pre bg-gray-200 px-1 dark:bg-neutral-600",children:o}),n.jsx("td",{className:"px-1",children:e})]},o))})}),zb=new Map([[E.Layout,{entry:"レイアウト",description:"",detail:null}],["Aspect Ratio",{entry:"アスペクト比",description:"要素のアスペクト比を指定する",detail:n.jsx(f,{value:[["auto","自動"],["square","1:1で固定"],["video","16:9で固定"]]})}],["Container",{entry:"コンテナー",description:"ビューポートの幅に応じて要素の最大幅を640px未満、640px、768px、1024px、1280px、1536pxと段階的に変化させる",detail:null}],["Columns",{entry:"列",description:`要素のコンテンツ領域を縦に分割する
分割する数、または幅を指定する`,detail:null}],["Break After",{entry:"後の区切り",description:"要素の後における、印刷時の改ページや段区切りの動作を指定する",detail:n.jsx(f,{value:[["auto","自動"],["avoid","改ページや段区切りを禁止する"],["all","強制的に改ページする"],["avoid-page","改ページを禁止する"],["page","改ページする"],["left","次のページが左側に来るよう改ページする"],["right","次のページが右側に来るよう改ページする"],["column","段区切りする"]]})}],["Break Before",{entry:"前の区切り",description:"要素の前における、印刷時の改ページや段区切りの動作を指定する",detail:n.jsx(f,{value:[["auto","自動"],["avoid","改ページや段区切りを禁止する"],["all","強制的に改ページする"],["avoid-page","改ページを禁止する"],["page","改ページする"],["left","次のページが左側に来るよう改ページする"],["right","次のページが右側に来るよう改ページする"],["column","段区切りする"]]})}],["Break Inside",{entry:"中の区切り",description:"要素の中における、印刷時の改ページや段区切りの動作を指定する",detail:n.jsx(f,{value:[["auto","自動"],["avoid","改ページや段区切りを禁止する"],["avoid-page","改ページを禁止する"],["avoid-column","段区切りを禁止する"]]})}],["Box Decoration Break",{entry:"区切られたボックスの装飾",description:"要素が複数の行、段、ページに区切られる場合の装飾方法を指定する",detail:n.jsx(f,{value:[["clone","それぞれの断片ごとに装飾する"],["slice","断片化していない状態で装飾。それから行、段、ページに区切られる"]]})}],["Box Sizing",{entry:"ボックス寸法",description:"要素の幅と高さを求めるための領域を指定する",detail:n.jsx(f,{value:[["border","境界や余白を含めて要素の寸法とする"],["content","コンテンツ領域を要素の寸法とする"]]})}],["Display",{entry:"ディスプレイ",description:"要素の表示方法を指定する",detail:n.jsx(f,{value:[["block","前後に改行を生成し、要素を縦に並べる"],["inline-block","前後に改行を生成しない"],["inline","前後に改行を生成しない。垂直方向の境界や余白を無視する"],["flex","Flexboxカテゴリーのクラス名と併用することで、複雑なレイアウトを実現する"],["inline-flex","inline + flexの効果"],["table","<table>要素と同じく動作する"],["inline-table","inline + tableの効果"],["table-caption","<caption>要素と同じく動作する"],["table-cell","<td>要素と同じく動作する"],["table-column","<col>要素と同じく動作する"],["table-column-group","<colgroup>要素と同じく動作する"],["table-footer-group","<tfoot>要素と同じく動作する"],["table-header-group","<thead>要素と同じく動作する"],["table-row-group","<tbody>要素と同じく動作する"],["table-row","<tr>要素と同じく動作する"],["flow-root","子要素がFloatsのクラス名を使用している場合に、その回り込みを解除する"],["grid","子要素をタイル状に配置する"],["inline-grid","inline + gridの効果"],["contents","ボックスを生成せずに、コンテンツ領域だけを表示する"],["list-item","<li>要素と同じく動作する"],["hidden","要素を非表示にする"]]})}],["Floats",{entry:"フロート",description:"要素を左右どちらかに配置し、その横に余白があれば続く要素を回り込ませる",detail:n.jsx(f,{value:[["start","テキストの開始側に配置"],["end","テキストの終端側に配置"],["right","右端に配置"],["left","左端に配置"],["none","フロートしない"]]})}],["Clear",{entry:"クリアー",description:"Floatsの効果を打ち消し、自身の要素が回り込もうとするのを防ぐ",detail:n.jsx(f,{value:[["start","テキストの開始側にある要素のFloatsの効果を打ち消す"],["end","テキストの終端側にある要素のFloatsの効果を打ち消す"],["left","左端にある要素のFloatsの効果を打ち消す"],["right","右端にある要素のFloatsの効果を打ち消す"],["both","左右どちらでもFloatsの効果を打ち消す"],["none","Floatsの効果を受け入れる"]]})}],["Isolation",{entry:"隔離",description:"子要素の存在を内に留め、外部の要素と相互に作用させない",detail:n.jsx(f,{value:[["isolate","子要素を隔離する"],["isolation-auto","自動"]]})}],["Object Fit",{entry:"オブジェクトフィット",description:"コンテンツの表示方法を指定する",detail:n.jsx(f,{value:[["contain","コンテンツ全体が要素に収まるように拡大縮小する"],["cover","要素全体を覆うように拡大縮小する"],["fill","元のアスペクト比を無視して、要素全体を覆うように拡大縮小する"],["none","等倍で表示する"],["scale-down","等倍で表示する。ただし、はみ出す場合は縮小する"]]})}],["Object Position",{entry:"オブジェクト位置",description:"コンテンツが要素からはみ出す場合に、メインで見せたい位置を指定する",detail:n.jsx(f,{value:[["bottom","下"],["center","中央"],["left","左"],["left-bottom","左下"],["left-top","左上"],["right","右"],["right-bottom","右下"],["right-top","右上"],["top","上"]]})}],["Overflow",{entry:"オーバーフロー",description:"コンテンツが要素からはみ出す場合の動作を指定する",detail:n.jsx(f,{value:[["auto","自動"],["hidden","切り取る。ユーザーからのスクロール操作は受け付けないが、プログラムからは許可する"],["clip","切り取る。全てのスクロール操作を禁止する"],["visible","切り取らない"],["scroll","スクロール可能にする"],["x-*","水平方向に対する動作"],["y-*","垂直方向に対する動作"]]})}],["Overscroll Behavior",{entry:"オーバースクロール動作",description:"スクロール領域の限界に達したときの動作を指定する",detail:n.jsx(f,{value:[["auto","バウンスする。限界に達した状態でさらにスクロールすると、親要素へ伝播する"],["contain","バウンスする。スクロールを親要素へ伝播させない"],["none","バウンスしない。スクロールを親要素へ伝播させない"],["y-*","垂直方向に対する動作"],["x-*","水平方向に対する動作"]]})}],["Position",{entry:"位置",description:"要素の配置方法を指定する",detail:n.jsx(f,{value:[["static","デフォルトの動作。オフセット操作（Top、Right、Bottom、Left、Z-Index）を受け付けない"],["fixed","ブラウザの表示領域を基準に、オフセット操作を受け付ける"],["absolute","relativeが指定された親要素を基準に、オフセット操作を受け付ける"],["relative","デフォルトの動作で配置しつつ、オフセット操作を受け付ける"],["sticky","fixedのように振る舞うが、親要素が画面外に押し出されると自身も押し出される"]]})}],["Top / Right / Bottom / Left",{entry:"トップ、ライト、ボトム、レフト",description:"指定した位置に要素を配置する",detail:n.jsx(f,{value:[["inset-*","top、right、bottom、leftに同じ値を指定する"],["inset-x-*","leftとrightに同じ値を指定する"],["inset-y-*","topとbottomに同じ値を指定する"],["start-*","テキストの開始側に値を指定する"],["end-*","テキストの終端側に値を指定する"],["top-*","上からの距離の位置に配置"],["right-*","右からの距離の位置に配置"],["bottom-*","下からの距離の位置に配置"],["left-*","左からの距離の位置に配置"]]})}],["Visibility",{entry:"可視性",description:"要素の可視状態を指定する",detail:n.jsx(f,{value:[["visible","表示"],["invisible","レイアウトは維持したまま非表示（完全に非表示にしたい場合はhiddenを指定）"],["collapse","テーブル列の幅を維持したまま、一部の行を非表示"]]})}],["Z-Index",{entry:"Zインデックス",description:"要素の重なり順を指定する",detail:null}]]),Sb=new Map([[E.FlexboxAndGrid,{entry:"フレックスボックス＆グリッド",description:"",detail:null}],["Flex Basis",{entry:"フレックスベーシス",description:`親要素にflexが指定されている場合の、自身の初期サイズを指定する
親要素にflex-rowが指定されている場合はwidth、flex-colが指定されている場合はheightとして動作する`,detail:null}],["Flex Direction",{entry:"フレックスの方向",description:"flexの子要素の並べ方を指定する",detail:n.jsx(f,{value:[["row","左から右へ並べる"],["row-reverse","右から左へ並べる"],["col","上から下へ並べる"],["col-reverse","下から上へ並べる"]]})}],["Flex Wrap",{entry:"フレックスラップ",description:"flexの子要素を配置する際に、はみ出す場合の折り返し動作を指定する",detail:n.jsx(f,{value:[["wrap","複数行に折り返す"],["wrap-reverse","複数行に折り返す。折り返した行は上に積み上がる"],["nowrap","折り返さない"]]})}],["Flex",{entry:"フレックス",description:"Flex Basis、Flex Grow、Flex Shrinkを一度に設定し、親要素のサイズに合わせた自身の伸び縮みを指定する",detail:n.jsx(f,{value:[["1","自身のwidth、またはheightのサイズを無視して伸び縮みする"],["auto","自身のwidth、またはheightのサイズを考慮して伸び縮みする"],["initial","縮みはするが、親要素の空きを埋めるために伸びはしない"],["none","初期サイズのまま固定する"]]})}],["Flex Grow",{entry:"フレックスの伸び",description:"flexが指定されている親要素に空間があれば、自身を伸ばすかどうかを指定する",detail:n.jsx(f,{value:[["grow","伸ばす"],["grow-0","伸ばさない"]]})}],["Flex Shrink",{entry:"フレックスの縮み",description:"flexが指定されている親要素からはみ出す場合に、自身を縮めるかどうかを指定する",detail:n.jsx(f,{value:[["shrink","縮める"],["shrink-0","縮めない"]]})}],["Order",{entry:"オーダー",description:"flexやgridの子要素の並びに対して、自身を何番目に差し込むかを指定する",detail:null}],["Grid Template Columns",{entry:"グリッドテンプレートの列",description:"gridの列を指定する",detail:n.jsx(f,{value:[["*","指定した数だけ等間隔の列を作成する"],["none","グリッドレイアウトを解除する"],["subgrid","グリッドの中にグリッドを配置する場合に、親グリッドのレイアウトを子グリッドに引き継がせる"]]})}],["Grid Column Start / End",{entry:"グリッド列スタート／エンド",description:"gridの複数のセルを水平方向に連結する",detail:n.jsx(f,{value:[["auto","自動"],["span-*","指定した数だけセルを連結する"],["start-*","連結の開始位置を指定する"],["end-*","連結の終端位置を指定する"]]})}],["Grid Template Rows",{entry:"グリッドテンプレートの行",description:"gridの行を指定する",detail:n.jsx(f,{value:[["*","指定した数だけ等間隔の行を作成する"],["none","グリッドレイアウトを解除する"],["subgrid","グリッドの中にグリッドを配置する場合に、親グリッドのレイアウトを子グリッドに引き継がせる"]]})}],["Grid Row Start / End",{entry:"グリッド行スタート／エンド",description:"gridの複数のセルを垂直方向に連結する",detail:n.jsx(f,{value:[["auto","自動"],["span-*","指定した数だけセルを連結する"],["start-*","連結の開始位置を指定する"],["end-*","連結の終端位置を指定する"]]})}],["Grid Auto Flow",{entry:"グリッドオートフロー",description:"gridの子要素の並べ方を指定する",detail:n.jsx(f,{value:[["row","右方向へ子要素を並べ、下に向かって折り返す"],["col","下方向へ子要素を並べ、右に向かって折り返す"],["dense","可能な限りセルを埋めるように子要素を並べる"],["row-dense","row + denseの効果"],["col-dense","col + denseの効果"]]})}],["Grid Auto Columns",{entry:"グリッドオート列",description:"セルの連結具合を元に、gridの列数を自動的に決定。その際の列の幅の計算方法を指定する",detail:n.jsx(f,{value:[["auto","自動"],["min","子要素のコンテンツの最小幅を元に、列の幅を決定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）"],["max","子要素のコンテンツの最大幅を元に、列の幅を決定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）"],["fr","等間隔の列を作る"]]})}],["Grid Auto Rows",{entry:"グリッドオート行",description:"セルの連結具合を元に、gridの行数を自動的に決定。その際の行の高さの計算方法を指定する",detail:n.jsx(f,{value:[["auto","自動"],["min","子要素のコンテンツの最小高さを元に、行の高さを決定する（縦書きで有効）"],["max","子要素のコンテンツの最大高さを元に、行の高さを決定する（縦書きで有効）"],["fr","等間隔の行を作る"]]})}],["Gap",{entry:"隙間",description:"flexやgridの子要素同士の隙間の長さを指定する",detail:n.jsx(f,{value:[["*","水平、垂直の両方向に指定した長さの隙間を挟む"],["x-*","水平方向に指定した幅の隙間を挟む"],["y-*","垂直方向に指定した高さの隙間を挟む"]]})}],["Justify Content",{entry:"コンテンツの行揃え",description:"flexやgridの行揃えを指定する",detail:n.jsx(f,{value:[["normal","flexではstart、gridではstretchの動作"],["start","水平方向の開始側に寄せる"],["end","水平方向の終端側に寄せる"],["center","中央揃え"],["between","行の最初と最後の子要素を両端に配置し、残りの子要素を均等に配置する"],["around","各子要素が持つ両脇の空間の幅が等しくなるように配置する"],["evenly","各空間の幅が等しくなるように配置する"],["stretch","隙間を埋めるように子要素を引き延ばして配置する（gridで有効）"]]})}],["Justify Items",{entry:"アイテムの行揃え",description:"gridのセル内での配置方法を指定する",detail:n.jsx(f,{value:[["start","水平方向の開始側に寄せる"],["end","水平方向の終端側に寄せる"],["center","中央揃え"],["stretch","隙間を埋めるように子要素を引き延ばす"]]})}],["Justify Self",{entry:"自身の行揃え",description:"Justify Itemsの効果を打ち消し、セル内での自身の配置方法を強制する",detail:n.jsx(f,{value:[["auto","Justify Itemsの効果を受け入れる"],["start","水平方向の開始側に寄せる"],["end","水平方向の終端側に寄せる"],["center","中央揃え"],["stretch","隙間を埋めるように子要素を引き延ばす"]]})}],["Align Content",{entry:"コンテンツの整列",description:"flexやgridの垂直方向の揃えを指定する",detail:n.jsx(f,{value:[["normal","flexではstart、gridではstretchの動作"],["start","垂直方向の開始側に寄せる"],["end","垂直方向の終端側に寄せる"],["center","中央揃え"],["between","列の最初と最後の子要素を両端に配置し、残りの子要素を均等に配置する"],["around","各子要素が持つ上下の空間の高さが等しくなるように配置する"],["evenly","各空間の高さが等しくなるように配置する"],["baseline","startと同じ動作"],["stretch","隙間を埋めるように子要素を引き延ばす（gridで有効）"]]})}],["Align Items",{entry:"アイテムの整列",description:"gridのセル内での配置方法を指定する",detail:n.jsx(f,{value:[["start","垂直方向の開始側に寄せる"],["end","垂直方向の終端側に寄せる"],["center","中央揃え"],["baseline","コンテンツのベースラインが横に揃うように配置する"],["stretch","隙間を埋めるように子要素を引き延ばす"]]})}],["Align Self",{entry:"自身の整列",description:"Align Itemsの効果を打ち消し、セル内での自身の配置方法を強制する",detail:n.jsx(f,{value:[["auto","Align Itemsの効果を受け入れる"],["start","垂直方向の開始側に寄せる"],["end","垂直方向の終端側に寄せる"],["center","中央揃え"],["baseline","startと同じ動作"],["stretch","隙間を埋めるように子要素を引き延ばす"]]})}],["Place Content",{entry:"コンテンツの場所",description:"Justify ContentとAlign Contentを一度に指定する",detail:n.jsx(f,{value:[["center","子要素を中央に引き寄せるように配置する"],["start","子要素を開始側の角に引き寄せるように配置する"],["end","子要素を終端側の角に引き寄せるように配置する"],["between","子要素を中心から離れるように配置する"],["around","子要素が持つ周囲の空間が同じ広さになるように配置する"],["evenly","子要素を縦に通るライン上の空間の高さと、横に通るライン上の空間の幅が、それぞれ同じ長さになるように配置する"],["baseline","startと同じ動作"],["stretch","セルの隙間を埋めるように子要素を引き延ばす（gridで有効）"]]})}],["Place Items",{entry:"アイテムの場所",description:"Justify ItemsとAlign Itemsを一度に指定する",detail:n.jsx(f,{value:[["start","セルの開始側の角に配置する"],["end","セルの終端側の角に配置する"],["center","セルの中央に配置する"],["baseline","セルの水平方向の開始側に寄せつつ、コンテンツのベースラインが横に揃うように配置する"],["stretch","セルの隙間を埋めるように子要素を引き延ばす"]]})}],["Place Self",{entry:"自身の場所",description:"Justify SelfとAlign Selfを一度に指定する",detail:n.jsx(f,{value:[["auto","Place Itemsの効果を受け入れる"],["start","セルの開始側の角に配置する"],["end","セルの終端側の角に配置する"],["center","セルの中央に配置する"],["stretch","セルの隙間を埋めるように子要素を引き延ばす"]]})}]]),Cb=new Map([[E.Spacing,{entry:"空間",description:"",detail:null}],["Padding",{entry:"パディング",description:"要素の内側に指定した長さの余白を与える",detail:n.jsx(f,{value:[["p-*","上下左右に余白を与える"],["px-*","水平方向に余白を与える"],["py-*","垂直方向に余白を与える"],["ps-*","テキストの開始側に余白を与える"],["pe-*","テキストの終端側に余白を与える"],["pt-*","上側に余白を与える"],["pr-*","右側に余白を与える"],["pb-*","下側に余白を与える"],["pl-*","左側に余白を与える"]]})}],["Margin",{entry:"マージン",description:"要素の外側に指定した長さの余白を与える",detail:n.jsx(f,{value:[["m-*","上下左右に余白を与える"],["mx-*","水平方向に余白を与える"],["my-*","垂直方向に余白を与える"],["ms-*","テキストの開始側に余白を与える"],["me-*","テキストの終端側に余白を与える"],["mt-*","上側に余白を与える"],["mr-*","右側に余白を与える"],["mb-*","下側に余白を与える"],["ml-*","左側に余白を与える"]]})}],["Space Between",{entry:"要素間の空間",description:"子要素が縦や横に並ぶ場合の、子要素同士の隙間の長さを指定する",detail:n.jsx(f,{value:[["x-*","水平方向に指定した長さの隙間を挟む"],["y-*","垂直方向に指定した長さの隙間を挟む"],["y-reverse","下から上へ要素が並ぶ場合に、隙間を正しい位置に挟む"],["x-reverse","右から左へ要素が並ぶ場合に、隙間を正しい位置に挟む"]]})}]]),Ab=new Map([[E.Sizing,{entry:"寸法",description:"",detail:null}],["Width",{entry:"幅",description:"要素の幅を指定する",detail:n.jsx(f,{value:[["*","指定した長さ、または親要素に対する割合で指定する"],["auto","自動"],["full","親要素の幅で指定する"],["screen","ビューポートの幅で指定する"],["svw","スモールビューポートの幅で指定する"],["lvw","ラージビューポートの幅で指定する"],["dvw","ダイナミックビューポートの幅で指定する"],["min","コンテンツの最小幅で指定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）"],["max","コンテンツの最大幅で指定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）"],["fit","親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す"]]})}],["Min-Width",{entry:"最小幅",description:"要素の最小幅を指定する",detail:n.jsx(f,{value:[["*","指定した長さで指定する"],["full","親要素の幅で指定する"],["min","コンテンツの最小幅で指定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）"],["max","コンテンツの最大幅で指定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）"],["fit","親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す"]]})}],["Max-Width",{entry:"最大幅",description:"要素の最大幅を指定する",detail:n.jsx(f,{value:[["*","指定した長さで指定する"],["none","最大幅を指定しない"],["full","親要素の幅で指定する"],["min","コンテンツの最小幅で指定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）"],["max","コンテンツの最大幅で指定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）"],["fit","はみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す"],["prose","半角数字0の幅を基準に、65文字分が収まる幅で指定する"],["screen-*","sm = 640px、md = 768px、lg = 1024px、lx = 1280px、2xl = 1536px"]]})}],["Height",{entry:"高さ",description:"要素の高さを指定する",detail:n.jsx(f,{value:[["*","指定した長さ、または親要素に対する割合で指定する"],["auto","自動"],["full","親要素の高さで指定する"],["screen","ビューポートの高さで指定する"],["svw","スモールビューポートの高さで指定する"],["lvw","ラージビューポートの高さで指定する"],["dvw","ダイナミックビューポートの高さで指定する"],["min","コンテンツの最小高さで指定する（縦書きで有効）"],["max","コンテンツの最大高さで指定する（縦書きで有効）"],["fit","親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す（縦書きで有効）"]]})}],["Min-Height",{entry:"最小高さ",description:"要素の最小高さを指定する",detail:n.jsx(f,{value:[["*","指定した長さで指定する"],["full","親要素の高さで指定する"],["screen","ビューポートの高さで指定する"],["svw","スモールビューポートの高さで指定する"],["lvw","ラージビューポートの高さで指定する"],["dvw","ダイナミックビューポートの高さで指定する"],["min","コンテンツの最小高さで指定する（縦書きで有効）"],["max","コンテンツの最大高さで指定する（縦書きで有効）"],["fit","親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す（縦書きで有効）"]]})}],["Max-Height",{entry:"最大高さ",description:"要素の最大高さを指定する",detail:n.jsx(f,{value:[["*","指定した長さで指定する"],["none","最大高さを指定しない"],["full","親要素の高さで指定する"],["screen","ビューポートの高さで指定する"],["svw","スモールビューポートの高さで指定する"],["lvw","ラージビューポートの高さで指定する"],["dvw","ダイナミックビューポートの高さで指定する"],["min","コンテンツの最小高さで指定する（縦書きで有効）"],["max","コンテンツの最大高さで指定する（縦書きで有効）"],["fit","親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す（縦書きで有効）"]]})}],["Size",{entry:"サイズ",description:"widthとheightを一度に指定する",detail:n.jsx(f,{value:[["*","指定した長さ、または親要素に対する割合で指定する"],["auto","自動"],["full","親要素の幅と高さで指定する"],["min","コンテンツの最小幅と最小高さで指定する"],["max","コンテンツの最大幅と最大高さで指定する"],["fit","親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す"]]})}]]),Eb=new Map([[E.Typography,{entry:"タイポグラフィー",description:"",detail:null}],["Font Family",{entry:"フォントファミリー",description:"フォントファミリーを指定する",detail:n.jsx(f,{value:[["sans","ゴシック体"],["serif","明朝体"],["mono","等幅フォント"]]})}],["Font Size",{entry:"フォントサイズ",description:"フォントサイズを指定する",detail:null}],["Font Smoothing",{entry:"フォントのなめらかさ",description:"アンチエイリアスの方式を指定する（macOSで有効）",detail:n.jsx(f,{value:[["antialiased","グレースケール方式（線がわずかに細く見える）"],["subpixel-antialiased","サブピクセル方式（線がわずかに太く見える）。デフォルト"]]})}],["Font Style",{entry:"フォントスタイル",description:"斜体で表示するかどうかを指定する",detail:null}],["Font Weight",{entry:"フォントウェイト",description:"フォントの太さを指定する",detail:null}],["Font Variant Numeric",{entry:"数字の異形",description:`数字の表記形式を指定する
正しく表示するには、フォント側がそれぞれの形式に対応している必要がある`,detail:n.jsx(f,{value:[["normal-nums","標準"],["ordinal","「1st」などの序数詞を数字の右肩に小さく表記する"],["slashed-zero","斜線付き「0」を使用する"],["lining-nums","高さが揃った数字"],["oldstyle-nums","高さが不揃いな数字"],["proportional-nums","プロポーショナルフォント（幅が不揃い）を使用する"],["tabular-nums","等幅フォントを使用する"],["diagonal-fractions","「1/2」などの分数をコンパクトに表記する"],["stacked-fractions","分数の分母と分子を積み上げる形で表記する"]]})}],["Letter Spacing",{entry:"文字間隔",description:"文字間隔を指定する",detail:null}],["Line Clamp",{entry:"行の固定",description:"固定する行数を指定する",detail:n.jsx(f,{value:[["*","固定する行数"],["none","固定しない"]]})}],["Line Height",{entry:"行の高さ",description:"行の高さを指定する",detail:null}],["List Style Image",{entry:"リストスタイルの画像",description:"リスト項目のマーカーとして使用する画像を指定する",detail:n.jsx(f,{value:[["list-image-none","マーカーを指定しない"],["list-image-[url(***.png)]","特定の画像をマーカーとして使用する例"]]})}],["List Style Position",{entry:"リストスタイルの位置",description:"リスト項目のマーカー位置を指定する",detail:n.jsx(f,{value:[["inside","マーカーを要素の内側に収める"],["outside","マーカーを要素の外側に置く"]]})}],["List Style Type",{entry:"リストスタイルの種類",description:"リスト項目のマーカー種類を指定する",detail:n.jsx(f,{value:[["none","マーカーなし"],["disc","箇条書き（「・」で表す）"],["decimal","数値リスト（「1.」「2.」のように表す）"]]})}],["Text Align",{entry:"テキストの整列",description:"テキストの行揃えを指定する",detail:n.jsx(f,{value:[["left","左揃え"],["center","中央揃え"],["right","右揃え"],["justify","両端揃え"],["start","テキストの開始側に揃える"],["end","テキストの終端側に揃える"]]})}],["Text Color",{entry:"テキストの色",description:"テキストの色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10 bg-transparent"})],["current","テキスト色",n.jsx("td",{className:"w-10 bg-transparent"})],["transparent","透明",n.jsx("td",{className:"w-10 bg-transparent"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}],["Text Decoration",{entry:"テキストの装飾",description:"テキストの装飾を指定する",detail:n.jsx(f,{value:[["underline","下線を引く",n.jsx("td",{children:n.jsx("p",{className:"pr-1 underline",children:"Aa"})})],["overline","上線を引く",n.jsx("td",{children:n.jsx("p",{className:"pr-1 overline",children:"Aa"})})],["line-through","取り消し線を引く",n.jsx("td",{children:n.jsx("p",{className:"pr-1 line-through",children:"Aa"})})],["no-underline","装飾しない",n.jsx("td",{children:n.jsx("p",{className:"pr-1 no-underline",children:"Aa"})})]]})}],["Text Decoration Color",{entry:"テキスト装飾の色",description:"テキスト装飾の色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10 bg-transparent"})],["current","テキスト色",n.jsx("td",{className:"w-10 bg-transparent"})],["transparent","透明",n.jsx("td",{className:"w-10 bg-transparent"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}],["Text Decoration Style",{entry:"テキスト装飾のスタイル",description:"テキスト装飾のスタイルを指定する",detail:n.jsx(f,{value:[["solid","一本のつながった線",n.jsx("td",{children:n.jsx("p",{className:"pr-1 text-center underline decoration-solid",children:"Aa"})})],["double","二重線",n.jsx("td",{children:n.jsx("p",{className:"pr-1 text-center underline decoration-double",children:"Aa"})})],["dotted","点線",n.jsx("td",{children:n.jsx("p",{className:"pr-1 text-center underline decoration-dotted",children:"Aa"})})],["dashed","破線",n.jsx("td",{children:n.jsx("p",{className:"pr-1 text-center underline decoration-dashed",children:"Aa"})})],["wavy","波線",n.jsx("td",{children:n.jsx("p",{className:"pr-1 text-center underline decoration-wavy",children:"Aa"})})]]})}],["Text Decoration Thickness",{entry:"テキスト装飾の太さ",description:"テキスト装飾の太さを指定する",detail:n.jsx(f,{value:[["auto","自動"],["from-font","推奨される太さがフォントに埋め込まれていれば、その値を使用する"],["*","ピクセル値で指定する"]]})}],["Text Underline Offset",{entry:"テキストアンダーラインのオフセット",description:"指定した距離だけアンダーラインを下にずらす",detail:n.jsx(f,{value:[["auto","自動"],["*","ピクセル値で指定する"]]})}],["Text Transform",{entry:"テキストの変換",description:"アルファベットを変換するルールを指定する",detail:n.jsx(f,{value:[["uppercase","大文字に変換"],["lowercase","小文字に変換"],["capitalize","小文字に変換するが、単語の先頭のみ大文字にする"],["normal-case","変換しない"]]})}],["Text Overflow",{entry:"テキストのオーバーフロー",description:"テキストが要素からはみ出す場合の動作を指定する",detail:n.jsx(f,{value:[["truncate","折り返さない。あふれた部分は「…」で省略される"],["text-ellipsis","折り返す。折り返してもあふれる部分は「…」で省略される（overflow-hiddenと組み合わせて使う）"],["text-clip","折り返す。折り返してもあふれる部分は切り取られる（overflow-hiddenと組み合わせて使う）"]]})}],["Text Wrap",{entry:"テキストの折り返し",description:"テキストを折り返す動作を指定する",detail:n.jsx(f,{value:[["wrap","バランス調整せずに折り返す"],["nowrap","折り返さない"],["balance","各行にテキストを均等に配分する"],["pretty","最終行に単語がひとつだけとならないように折り返す"]]})}],["Text Indent",{entry:"テキストのインデント",description:"テキストの先頭に挿入する空白の長さを指定する",detail:null}],["Vertical Align",{entry:"垂直方向の整列",description:"垂直方向にテキストを揃える際の基準を指定する",detail:n.jsx(f,{value:[["baseline","親要素のベースラインに揃える"],["top","行の上端に揃える"],["middle","親要素のベースラインに、小文字のxの高さを足した位置に揃える"],["bottom","行の下端に揃える"],["text-top","親要素のテキストの上端に揃える"],["text-bottom","親要素のテキストの下端に揃える"],["sub","親要素の下付き文字の位置に揃える"],["super","親要素の上付き文字の位置に揃える"]]})}],["Whitespace",{entry:"ホワイトスペース",description:"ホワイトスペース（タブ、改行、スペースなど）の扱い方を指定する",detail:n.jsx(f,{value:[["normal","連続するホワイトスペースをひとつのスペースにまとめる。折り返す"],["nowrap","連続するホワイトスペースをひとつのスペースにまとめる。折り返さない"],["pre","連続するホワイトスペースをそのまま残す。折り返さない"],["pre-line","改行以外のホワイトスペースをひとつのスペースにまとめる。折り返す"],["pre-wrap","連続するホワイトスペースをそのまま残す。折り返す"],["break-spaces","pre-wrapに近しいが、行末での動作が異なる"]]})}],["Word Break",{entry:"単語の区切り",description:"単語の折り返す動作を指定する",detail:n.jsx(f,{value:[["normal","単語の途中で折り返さない"],["words","必要に応じて単語の途中で折り返す"],["all","単語を考慮せずに折り返す"],["keep","CJK（中国語、日本語、韓国語）において、文章の中では折り返さずに記号などの箇所で折り返す"]]})}],["Hyphens",{entry:"ハイフン",description:"「&shy;」（ソフトハイフン）の扱い方を指定する",detail:n.jsx(f,{value:[["none","ハイフネーション（単語内にハイフンを挿入して改行すること）をしない"],["manual","「&shy;」を目印にハイフネーションする"],["auto","単語を判定して自動的にハイフネーションする"]]})}],["Content",{entry:"コンテンツ",description:"before、またはafter修飾子を用いた疑似要素を指定する",detail:n.jsx(f,{value:[["before:content-none","要素の前側に疑似要素を使用しない"],["after:content-none","要素の後ろ側に疑似要素を使用しない"],['before:content-["✅"]',"要素の前側に絵文字の疑似要素を挿入する例"],['after:content-["✅"]',"要素の後ろ側に絵文字の疑似要素を挿入する例"]]})}]]),Tb=new Map([[E.Backgrounds,{entry:"背景",description:"",detail:null}],["Background Attachment",{entry:"背景の取り付け",description:"スクロールした際の、Background Imageに指定した背景画像の動作を指定する",detail:n.jsx(f,{value:[["fixed","ディスプレイに貼り付けたように背景画像を固定する"],["local","ページのスクロールに背景画像を連動する。背景画像を指定した要素がスクロール可能な場合、その要素のスクロールにも連動する"],["scroll","ページのスクロールに背景画像を連動する"]]})}],["Background Clip",{entry:"背景の切り抜き",description:"Background Image、またはBackground Colorに指定した背景の切り取り方法を指定する",detail:n.jsx(f,{value:[["border","境界領域から外側を切り取る"],["padding","余白領域から外側を切り取る"],["content","コンテンツ領域から外側を切り取る"],["text","テキストの形に沿って背景を切り取る（text-transparentと組み合わせて使う）"]]})}],["Background Color",{entry:"背景色",description:"要素の背景色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}],["Background Origin",{entry:"背景の原点",description:"Background Imageに指定した背景画像を貼り付ける原点を指定する",detail:n.jsx(f,{value:[["border","境界領域の側面を原点に貼り付ける"],["padding","余白領域の側面を原点に貼り付ける"],["content","コンテンツ領域の側面を原点に貼り付ける"]]})}],["Background Position",{entry:"背景の位置",description:"Background Imageに指定した背景画像が要素からはみ出す場合に、メインに見せたい位置を指定する",detail:n.jsx(f,{value:[["bottom","下"],["center","中央"],["left","左"],["left-bottom","左下"],["left-top","左上"],["right","右"],["right-bottom","右下"],["right-top","右上"],["top","上"]]})}],["Background Repeat",{entry:"背景の繰り返し",description:"Background Imageに指定した背景画像の並べ方を指定する",detail:n.jsx(f,{value:[["repeat","全方向に繰り返す"],["no-repeat","繰り返さない"],["repeat-x","水平方向に繰り返す"],["repeat-y","垂直方向に繰り返す"],["repeat-round","要素からはみ出すことなく繰り返す。背景画像が歪みやすい"],["repeat-space","要素からはみ出すことなく繰り返す。隙間が生じやすい"]]})}],["Background Size",{entry:"背景サイズ",description:"Background Imageに指定した背景画像のサイズを指定する",detail:n.jsx(f,{value:[["auto","等倍で表示する"],["cover","要素全体を覆うように拡大縮小する"],["contain","背景画像全体が収まるように拡大縮小する"]]})}],["Background Image",{entry:"背景画像",description:"背景画像や線形グラデーションの方向を指定する",detail:n.jsx(f,{value:[["bg-none","背景画像なし"],["bg-gradient-to-t","上方向への線形グラデーション"],["bg-gradient-to-tr","右上方向への線形グラデーション"],["bg-gradient-to-r","右方向への線形グラデーション"],["bg-gradient-to-br","右下方向への線形グラデーション"],["bg-gradient-to-b","下方向への線形グラデーション"],["bg-gradient-to-bl","左下方向への線形グラデーション"],["bg-gradient-to-l","左方向への線形グラデーション"],["bg-gradient-to-tl","左上方向への線形グラデーション"],["bg-[url(***.jpg)]","特定の画像を背景画像に指定する例"]]})}],["Gradient Color Stops",{entry:"グラデーションの色経由点",description:"線形グラデーションで使用する色を指定する",detail:n.jsx(f,{value:[["from-（色）","開始色",n.jsx("td",{className:"w-10"})],["from-*%","開始位置",n.jsx("td",{className:"w-10"})],["via-（色）","中間色",n.jsx("td",{className:"w-10"})],["via-*%","中間位置",n.jsx("td",{className:"w-10"})],["to-（色）","終了色",n.jsx("td",{className:"w-10"})],["to-*%","終了位置",n.jsx("td",{className:"w-10"})],["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})],[`bg-gradient-to-r
from-cyan-500
to-purple-500`,"水色から紫のグラデーションの例",n.jsx("td",{className:"w-10 bg-gradient-to-r from-cyan-500 to-purple-500"})]]})}]]),_b=new Map([[E.Borders,{entry:"境界",description:"",detail:null}],["Border Radius",{entry:"境界の半径",description:"角の丸みを指定する",detail:n.jsx(f,{value:[["none","角丸なし"],["sm〜3xl","角丸"],["full","円、またはカプセル型"],["s-*","テキストの開始側を丸める"],["e-*","テキストの終端側を丸める"],["t-*","上側を丸める"],["r-*","右側を丸める"],["b-*","下側を丸める"],["l-*","左側を丸める"],["ss-*","左上を丸める（左横書きの場合）"],["se-*","右上を丸める（左横書きの場合）"],["ee-*","右下を丸める（左横書きの場合）"],["es-*","右下を丸める（左横書きの場合）"],["tl-*","左上を丸める"],["tr-*","右上を丸める"],["br-*","右下を丸める"],["bl-*","左下を丸める"]]})}],["Border Width",{entry:"境界の太さ",description:"境界線の太さを指定する",detail:n.jsx(f,{value:[["*","指定した太さの枠で囲む"],["x-*","左右の側面に線を引く"],["y-*","上下の側面に線を引く"],["s-*","テキストの開始側に線を引く"],["e-*","テキストの終端側に線を引く"],["t-*","上の側面に線を引く"],["r-*","右の側面に線を引く"],["b-*","下の側面に線を引く"],["l-*","左の側面に線を引く"]]})}],["Border Color",{entry:"境界の色",description:"境界線の色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 border border-black"})],["white","白",n.jsx("td",{className:"w-10 border border-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 border border-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 border border-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 border border-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 border border-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 border border-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 border border-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 border border-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 border border-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 border border-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 border border-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 border border-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 border border-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 border border-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 border border-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 border border-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 border border-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 border border-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 border border-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 border border-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 border border-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 border border-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 border border-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 border border-red-500/25"})],["x-（色）","左右の線の色",n.jsx("td",{className:"w-10 border border-transparent border-x-black dark:border-x-white"})],["y-（色）","上下の線の色",n.jsx("td",{className:"w-10 border border-transparent border-y-black dark:border-y-white"})],["s-（色）","テキストの開始側に引かれる色",n.jsx("td",{className:"w-10 border border-transparent border-s-black dark:border-s-white"})],["e-（色）","テキストの終端側に引かれる色",n.jsx("td",{className:"w-10 border border-transparent border-e-black dark:border-e-white"})],["t-（色）","上側面の線の色",n.jsx("td",{className:"w-10 border border-transparent border-t-black dark:border-t-white"})],["r-（色）","右側面の線の色",n.jsx("td",{className:"w-10 border border-transparent border-r-black dark:border-r-white"})],["b-（色）","下側面の線の色",n.jsx("td",{className:"w-10 border border-transparent border-b-black dark:border-b-white"})],["l-（色）","左側面の線の色",n.jsx("td",{className:"w-10 border border-transparent border-l-black dark:border-l-white"})]]})}],["Border Style",{entry:"境界のスタイル",description:"境界線のスタイルを指定する",detail:n.jsx(f,{value:[["solid","一本のつながった線"],["dashed","破線"],["dotted","点線"],["double","二重線"],["hidden","境界線を表示しない（優先度・高）"],["none","境界線を表示しない（優先度・低）"]]})}],["Divide Width",{entry:"分割線の太さ",description:"子要素が縦や横に並ぶ場合に、要素間に引かれる線の太さを指定する",detail:n.jsx(f,{value:[["x-*","子要素が水平方向に並ぶ場合に使用する"],["y-*","子要素が垂直方向に並ぶ場合に使用する"],["y-reverse","子要素が右から左へ並ぶ場合に、正しい位置に分割線を引く"],["x-reverse","子要素が下から上へ並ぶ場合に、正しい位置に分割線を引く"]]})}],["Divide Color",{entry:"分割線の色",description:"分割線の色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25%で指定する例",n.jsx("td",{className:"w-10 divide-y bg-red-500/25"})]]})}],["Divide Style",{entry:"分割線のスタイル",description:"分割線のスタイルを指定する",detail:n.jsx(f,{value:[["solid","一本のつながった線"],["dashed","破線"],["dotted","点線"],["double","二重線"],["none","分割線を表示しない"]]})}],["Outline Width",{entry:"輪郭線の太さ",description:`輪郭線の太さを指定する
輪郭線はBorderよりも外側に引かれる`,detail:null}],["Outline Color",{entry:"輪郭線の色",description:"輪郭線の色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-black"})})],["white","白",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-white"})})],["slate-500","粘板岩",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-slate-500"})})],["gray-500","グレー",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-gray-500"})})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-zinc-500"})})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-neutral-500"})})],["stone-500","石",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-stone-500"})})],["red-500","赤",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-red-500"})})],["orange-500","オレンジ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-orange-500"})})],["amber-500","琥珀",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-amber-500"})})],["yellow-500","黄色",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-yellow-500"})})],["lime-500","ライム",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-lime-500"})})],["green-500","緑",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-green-500"})})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-emerald-500"})})],["teal-500","コガモ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-teal-500"})})],["cyan-500","シアン",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-cyan-500"})})],["sky-500","スカイ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-sky-500"})})],["blue-500","青",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-blue-500"})})],["indigo-500","藍色",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-indigo-500"})})],["violet-500","スミレ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-violet-500"})})],["purple-500","紫",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-purple-500"})})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-fuchsia-500"})})],["pink-500","ピンク",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-pink-500"})})],["rose-500","バラ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-rose-500"})})],["red-500/25","不透明度25%で指定する例",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 outline outline-red-500/25"})})]]})}],["Outline Style",{entry:"輪郭線のスタイル",description:"輪郭線のスタイルを指定する",detail:n.jsx(f,{value:[["outline-none","輪郭線を表示しない"],["outline","一本のつながった線"],["outline-dashed","破線"],["outline-dotted","点線"],["outline-double","二重線"]]})}],["Outline Offset",{entry:"輪郭線のオフセット",description:"指定した距離だけ輪郭線を外側に広げる",detail:null}],["Ring Width",{entry:"輪の太さ",description:`box-shadowで描く輪郭線の太さを設定する
デフォルトでは半透明の青で描かれる`,detail:n.jsx(f,{value:[["ring-0","輪郭線なし",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring-0"})})],["ring-1","",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring-1"})})],["ring-2","",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring-2"})})],["ring","",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring"})})],["ring-4","",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring-4"})})],["ring-8","",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring-8"})})],["ring-inset","要素の内側に描く",n.jsx("td",{className:"h-6 w-10",children:n.jsx("div",{className:"h-2 w-8 bg-gray-200 ring ring-inset"})})]]})}],["Ring Color",{entry:"輪の色",description:"box-shadowで描く輪郭線の色を設定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-black"})})],["white","白",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-white"})})],["slate-500","粘板岩",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-slate-500"})})],["gray-500","グレー",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-gray-500"})})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-zinc-500"})})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-neutral-500"})})],["stone-500","石",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-stone-500"})})],["red-500","赤",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-red-500"})})],["orange-500","オレンジ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-orange-500"})})],["amber-500","琥珀",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-amber-500"})})],["yellow-500","黄色",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-yellow-500"})})],["lime-500","ライム",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-lime-500"})})],["green-500","緑",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-green-500"})})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-emerald-500"})})],["teal-500","コガモ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-teal-500"})})],["cyan-500","シアン",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-cyan-500"})})],["sky-500","スカイ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-sky-500"})})],["blue-500","青",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-blue-500"})})],["indigo-500","藍色",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-indigo-500"})})],["violet-500","スミレ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-violet-500"})})],["purple-500","紫",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-purple-500"})})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-fuchsia-500"})})],["pink-500","ピンク",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-pink-500"})})],["rose-500","バラ",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-rose-500"})})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10",children:n.jsx("div",{className:"h-4 w-9 ring-1 ring-red-500/25"})})]]})}],["Ring Offset Width",{entry:"輪のオフセット幅",description:"指定した距離だけ、box-shadowで描く輪郭線を外側に広げる",detail:null}],["Ring Offset Color",{entry:"輪のオフセット色",description:`輪郭線をRing Offset Widthで広げた、その隙間の色を指定する
デフォルトでは白で描かれるため、背景色と同じ色を指定する`,detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}]]),Ub=new Map([[E.Effects,{entry:"効果",description:"",detail:null}],["Box Shadow",{entry:"ボックスシャドー",description:"要素の影を描画する",detail:n.jsx(f,{value:[["shadow-sm","",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow-sm"})})],["shadow","",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow"})})],["shadow-md","",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow-md"})})],["shadow-lg","",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow-lg"})})],["shadow-xl","",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow-xl"})})],["shadow-2xl","",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow-2xl"})})],["shadow-inner","へこんだように見える影を描画する",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow-inner"})})],["none","影を描画しない",n.jsx("td",{className:"w-10"})]]})}],["Box Shadow Color",{entry:"ボックスシャドーの色",description:"影の色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-black"})})],["white","白",n.jsx("td",{className:"h-8 w-10 bg-black",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-white"})})],["slate-500","粘板岩",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-slate-500"})})],["gray-500","グレー",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-gray-500"})})],["zinc-500","亜鉛",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-zinc-500"})})],["neutral-500","ニュートラル",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-neutral-500"})})],["stone-500","石",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-stone-500"})})],["red-500","赤",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-red-500"})})],["orange-500","オレンジ",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-orange-500"})})],["amber-500","琥珀",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-amber-500"})})],["yellow-500","黄色",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-yellow-500"})})],["lime-500","ライム",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-lime-500"})})],["green-500","緑",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-green-500"})})],["emerald-500","エメラルド",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-emerald-500"})})],["teal-500","コガモ",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-teal-500"})})],["cyan-500","シアン",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-cyan-500"})})],["sky-500","スカイ",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-sky-500"})})],["blue-500","青",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-blue-500"})})],["indigo-500","藍色",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-indigo-500"})})],["violet-500","スミレ",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-violet-500"})})],["purple-500","紫",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-purple-500"})})],["fuchsia-500","フクシア",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-fuchsia-500"})})],["pink-500","ピンク",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-pink-500"})})],["rose-500","バラ",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-rose-500"})})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"h-8 w-10 bg-white",children:n.jsx("div",{className:"mx-auto h-4 w-6 shadow shadow-red-500/25"})})]]})}],["Opacity",{entry:"不透明度",description:"不透明度を指定する",detail:null}],["Mix Blend Mode",{entry:"合成モード",description:"自身の要素と背後にある要素との合成方法を指定する",detail:n.jsx(f,{value:[["normal","通常"],["multiply","乗算"],["screen","スクリーン"],["overlay","オーバーレイ"],["darken","比較（暗）"],["lighten","比較（明）"],["color-dodge","覆い焼きカラー"],["color-burn","焼き込みカラー"],["hard-light","ハードライト"],["soft-light","ソフトライト"],["difference","差の絶対値"],["exclusion","除外"],["hue","色相"],["saturation","彩度"],["color","カラー"],["luminosity","輝度"],["plus-darker","クロスフェード専用"],["plus-lighter","クロスフェード専用"]]})}],["Background Blend Mode",{entry:"背景合成モード",description:"Background ImageとBackground Colorとの合成方法を指定する",detail:n.jsx(f,{value:[["normal","通常"],["multiply","乗算"],["screen","スクリーン"],["overlay","オーバーレイ"],["darken","比較（暗）"],["lighten","比較（明）"],["color-dodge","覆い焼きカラー"],["color-burn","焼き込みカラー"],["hard-light","ハードライト"],["soft-light","ソフトライト"],["difference","差の絶対値"],["exclusion","除外"],["hue","色相"],["saturation","彩度"],["color","カラー"],["luminosity","輝度"]]})}]]),Pb=new Map([[E.Filters,{entry:"フィルター",description:"",detail:null}],["Blur",{entry:"ぼかし",description:"ぼかしの強度を指定する",detail:null}],["Brightness",{entry:"明るさ",description:"明るさの強度を指定する",detail:null}],["Contrast",{entry:"コントラスト",description:"明暗差の強度を指定する",detail:null}],["Drop Shadow",{entry:"ドロップシャドー",description:"コンテンツに対する影を描画する",detail:n.jsx(f,{value:[["drop-shadow-sm","",n.jsx("td",{className:"bg-white",children:n.jsx("p",{className:"text-2xl text-white drop-shadow-sm",children:"Aa"})})],["drop-shadow","",n.jsx("td",{className:"bg-white",children:n.jsx("p",{className:"text-2xl text-white drop-shadow",children:"Aa"})})],["drop-shadow-md","",n.jsx("td",{className:"bg-white",children:n.jsx("p",{className:"text-2xl text-white drop-shadow-md",children:"Aa"})})],["drop-shadow-lg","",n.jsx("td",{className:"bg-white",children:n.jsx("p",{className:"text-2xl text-white drop-shadow-lg",children:"Aa"})})],["drop-shadow-xl","",n.jsx("td",{className:"bg-white",children:n.jsx("p",{className:"text-2xl text-white drop-shadow-xl",children:"Aa"})})],["drop-shadow-2xl","",n.jsx("td",{className:"bg-white",children:n.jsx("p",{className:"text-2xl text-white drop-shadow-2xl",children:"Aa"})})],["drop-shadow-none","影を描画しない",n.jsx("td",{})]]})}],["Grayscale",{entry:"グレースケール",description:"グレーの濃淡で描画する",detail:null}],["Hue Rotate",{entry:"色相",description:"指定した角度で色相を回転し色味を変える",detail:n.jsx(f,{value:[["hue-rotate-*","時計回りで回転"],["-hue-rotate-*","反時計回りに回転"]]})}],["Invert",{entry:"反転",description:"色を反転する",detail:null}],["Saturate",{entry:"彩度",description:"鮮やかさの強度を指定する",detail:null}],["Sepia",{entry:"セピア",description:"黒茶色の濃淡で描画する",detail:null}],["Backdrop Blur",{entry:"背景ぼかし",description:"背後の要素に対する、ぼかしの強度を指定する",detail:null}],["Backdrop Brightness",{entry:"背景の明るさ",description:"背後の要素に対する、明るさの強度を指定する",detail:null}],["Backdrop Contrast",{entry:"背景コントラスト",description:"背後の要素に対する、明暗差の強度を指定する",detail:null}],["Backdrop Grayscale",{entry:"背景グレースケール",description:"背後の要素に対し、グレーの濃淡で描画する",detail:null}],["Backdrop Hue Rotate",{entry:"背景の色相",description:"背後の要素に対し、指定した角度で色相を回転し色味を変える",detail:n.jsx(f,{value:[["hue-rotate-*","時計回りで回転"],["-hue-rotate-*","反時計回りに回転"]]})}],["Backdrop Invert",{entry:"背景の反転",description:"背後の要素に対し、色を反転する",detail:null}],["Backdrop Opacity",{entry:"背景の不透明度",description:"Backdrop系フィルターの不透明度を指定する",detail:null}],["Backdrop Saturate",{entry:"背景の彩度",description:"背後の要素に対する、鮮やかさの強度を指定する",detail:null}],["Backdrop Sepia",{entry:"背景セピア",description:"背後の要素に対し、黒茶色の濃淡で描画する",detail:null}]]),Lb=new Map([[E.Tables,{entry:"テーブル",description:"",detail:null}],["Border Collapse",{entry:"境界の折りたたみ",description:"テーブルセルの境界線の種類を指定する",detail:n.jsx(f,{value:[["collapse","隣接するセルの境界線をひとつに結合する"],["separate","セルの境界線を独立する"]]})}],["Border Spacing",{entry:"境界の空間",description:"セルの周辺に設ける隙間の広さを指定する",detail:n.jsx(f,{value:[["*","上下左右の隙間の広さ"],["x-*","水平方向の隙間の広さ"],["y-*","垂直方向の隙間の広さ"]]})}],["Table Layout",{entry:"テーブルレイアウト",description:"テーブル列の割り当て方を指定する",detail:n.jsx(f,{value:[["auto","セルの内容に合わせて自動的に列の幅を調整する"],["fixed","均等に割り当てる"]]})}],["Caption Side",{entry:"キャプションサイド",description:"テーブルの<caption>要素を表示する位置を指定する",detail:n.jsx(f,{value:[["top","上側"],["bottom","下側"]]})}]]),Rb=new Map([[E.TransitionsAndAnimation,{entry:"遷移＆アニメーション",description:"",detail:null}],["Transition Property",{entry:"遷移プロパティー",description:"値が変化する際に、なめらかに遷移させたいプロパティーを指定する",detail:n.jsx(f,{value:[["transition-none","瞬時に遷移する"],["transition-all","すべてのプロパティーを対象にする"],["transition","いくつかのプロパティーを組み合わせた、おすすめの設定"],["transition-colors","色のみを対象にする"],["transition-opacity","不透明度のみを対象にする"],["transition-shadow","影のみを対象にする"],["transition-transform","変形のみを対象にする"]]})}],["Transition Duration",{entry:"遷移の期間",description:"遷移が完了するまでの時間を指定する",detail:null}],["Transition Timing Function",{entry:"遷移タイミング関数",description:"値が変化する速度を指定する",detail:n.jsx(f,{value:[["linear","一定の速度"],["in","徐々に加速する"],["out","徐々に減速する"],["in-out","前半は徐々に加速し、後半は徐々に減速する"]]})}],["Transition Delay",{entry:"遷移の遅延",description:"値が変化してから実際に遷移が開始されるまでの時間を指定する",detail:null}],["Animation",{entry:"アニメーション",description:"要素に動きを与える",detail:n.jsx(f,{value:[["none","アニメーションしない",n.jsx("td",{className:"w-10"})],["spin","時計回りに回転",n.jsx("td",{className:"w-10",children:n.jsx("p",{className:"animate-spin text-center",children:"Aa"})})],["ping","波紋のように広がるアニメーション",n.jsx("td",{className:"w-10",children:n.jsx("p",{className:"animate-ping text-center",children:"Aa"})})],["pulse","フェードイン／アウトを繰り返す",n.jsx("td",{className:"w-10",children:n.jsx("p",{className:"animate-pulse text-center",children:"Aa"})})],["bounce","上下に弾む",n.jsx("td",{className:"w-10",children:n.jsx("p",{className:"animate-bounce text-center",children:"Aa"})})]]})}]]),Fb=new Map([[E.Transforms,{entry:"変形",description:"",detail:null}],["Scale",{entry:"拡大縮小",description:"指定した大きさに拡大縮小する",detail:n.jsx(f,{value:[["*","拡大縮小"],["x-*","水平方向に拡大縮小"],["y-*","垂直方向に拡大縮小"]]})}],["Rotate",{entry:"回転",description:"指定した角度に回転する",detail:n.jsx(f,{value:[["rotate-*","時計回りで回転"],["-rotate-*","反時計回りで回転"]]})}],["Translate",{entry:"移動",description:"指定した距離だけ移動する",detail:n.jsx(f,{value:[["x-*","右方向に移動"],["y-*","下方向に移動"],["-x-*","左方向に移動"],["-y-*","上方向に移動"]]})}],["Skew",{entry:"歪める",description:"斜め方向に歪める",detail:n.jsx(f,{value:[["x-*","水平方向に引き延ばしたように傾斜する"],["y-*","垂直方向に引き延ばしたように傾斜する"]]})}],["Transform Origin",{entry:"変形の原点",description:"変形の基準となる原点を指定する",detail:n.jsx(f,{value:[["center","中央"],["top","上"],["top-right","右上"],["right","右"],["bottom-right","右下"],["bottom","下"],["bottom-left","左下"],["left","左"],["top-left","左上"]]})}]]),Bb=new Map([[E.Interactivity,{entry:"双方向性",description:"",detail:null}],["Accent Color",{entry:"アクセントカラー",description:"ブラウザーが用意するデフォルトカラーを変更する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10 bg-transparent"})],["current","テキスト色",n.jsx("td",{className:"w-10 bg-transparent"})],["transparent","透明",n.jsx("td",{className:"w-10 bg-transparent"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["auto","デフォルトカラーを使用する",n.jsx("td",{className:"w-10"})]]})}],["Appearance",{entry:"外観",description:"ブラウザーが用意するデフォルトスタイルの使用、不使用を指定する",detail:n.jsx(f,{value:[["none","使用しない"],["auto","使用する"]]})}],["Cursor",{entry:"カーソル",description:`要素の上にマウスカーソルを重ねたときの、カーソル形状を指定する
↓このエリアでプレビュー可能`,detail:n.jsx(f,{value:[["auto","自動",n.jsx("td",{className:"w-10 cursor-auto border border-black"})],["default","デフォルト",n.jsx("td",{className:"w-10 cursor-default border border-black"})],["pointer","ポインター",n.jsx("td",{className:"w-10 cursor-pointer border border-black"})],["wait","ビジー状態",n.jsx("td",{className:"w-10 cursor-wait border border-black"})],["text","テキスト選択",n.jsx("td",{className:"w-10 cursor-text border border-black"})],["move","移動",n.jsx("td",{className:"w-10 cursor-move border border-black"})],["help","ヘルプ",n.jsx("td",{className:"w-10 cursor-help border border-black"})],["not-allowed","禁止",n.jsx("td",{className:"w-10 cursor-not-allowed border border-black"})],["none","非表示",n.jsx("td",{className:"w-10 cursor-none border border-black"})],["context-menu","コンテキストメニュー",n.jsx("td",{className:"w-10 cursor-context-menu border border-black"})],["progress","バックグラウンドでビジー状態",n.jsx("td",{className:"w-10 cursor-progress border border-black"})],["cell","セルの選択",n.jsx("td",{className:"w-10 cursor-cell border border-black"})],["crosshair","十字カーソル",n.jsx("td",{className:"w-10 cursor-crosshair border border-black"})],["vertical-text","縦書きのテキスト選択",n.jsx("td",{className:"w-10 cursor-vertical-text border border-black"})],["alias","ショートカットの作成",n.jsx("td",{className:"w-10 cursor-alias border border-black"})],["copy","コピー",n.jsx("td",{className:"w-10 cursor-copy border border-black"})],["no-drop","ドロップ不可",n.jsx("td",{className:"w-10 cursor-no-drop border border-black"})],["grab","グラブ（ドラッグ）可能",n.jsx("td",{className:"w-10 cursor-grab border border-black"})],["grabbing","グラブ中",n.jsx("td",{className:"w-10 cursor-grabbing border border-black"})],["all-scroll","全方向にスクロール",n.jsx("td",{className:"w-10 cursor-all-scroll border border-black"})],["col-resize","列の幅をリサイズ",n.jsx("td",{className:"w-10 cursor-col-resize border border-black"})],["row-resize","行の高さをリサイズ",n.jsx("td",{className:"w-10 cursor-row-resize border border-black"})],["n-resize","上方向にリサイズ",n.jsx("td",{className:"w-10 cursor-n-resize border border-black"})],["e-resize","右方向にリサイズ",n.jsx("td",{className:"w-10 cursor-e-resize border border-black"})],["s-resize","下方向にリサイズ",n.jsx("td",{className:"w-10 cursor-s-resize border border-black"})],["w-resize","左方向にリサイズ",n.jsx("td",{className:"w-10 cursor-w-resize border border-black"})],["ne-resize","右上方向にリサイズ",n.jsx("td",{className:"w-10 cursor-ne-resize border border-black"})],["nw-resize","左上方向にリサイズ",n.jsx("td",{className:"w-10 cursor-nw-resize border border-black"})],["se-resize","右下方向にリサイズ",n.jsx("td",{className:"w-10 cursor-se-resize border border-black"})],["sw-resize","左下方向にリサイズ",n.jsx("td",{className:"w-10 cursor-sw-resize border border-black"})],["ew-resize","水平方向にリサイズ",n.jsx("td",{className:"w-10 cursor-ew-resize border border-black"})],["ns-resize","垂直方向にリサイズ",n.jsx("td",{className:"w-10 cursor-ns-resize border border-black"})],["nesw-resize","右上と左下方向にリサイズ",n.jsx("td",{className:"w-10 cursor-nesw-resize border border-black"})],["nwse-resize","左上と右下方向にリサイズ",n.jsx("td",{className:"w-10 cursor-nwse-resize border border-black"})],["zoom-in","拡大",n.jsx("td",{className:"w-10 cursor-zoom-in border border-black"})],["zoom-out","縮小",n.jsx("td",{className:"w-10 cursor-zoom-out border border-black"})]]})}],["Caret Color",{entry:"キャレットの色",description:"テキストボックス入力時のカーソルの色を指定する",detail:n.jsx(f,{value:[["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10 bg-transparent"})],["current","テキスト色",n.jsx("td",{className:"w-10 bg-transparent"})],["transparent","透明",n.jsx("td",{className:"w-10 bg-transparent"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}],["Pointer Events",{entry:"ポインターイベント",description:"クリックなどのマウスイベントをキャッチするかどうかを指定する",detail:n.jsx(f,{value:[["none","キャッチせずに、背後の要素へと渡す"],["auto","キャッチする"]]})}],["Resize",{entry:"リサイズ",description:"<textarea>要素や、overflow-scrollを付与した要素のサイズ変更を可能にするかどうかを指定する",detail:n.jsx(f,{value:[["resize-none","サイズ変更不可"],["resize-y","垂直方向に変更可能にする"],["resize-x","水平方向に変更可能にする"],["resize","全方向に変更可能にする"]]})}],["Scroll Behavior",{entry:"スクロール動作",description:"<a>要素を用いたページ内リンクの動作を指定する",detail:n.jsx(f,{value:[["auto","瞬時にスクロールする"],["smooth","なめらかにスクロールする"]]})}],["Scroll Margin",{entry:"スクロールマージン",description:`スクロールスナップで止まる位置を、余白を与えることで調整する
余白を子要素側に設定したい場合に使用する`,detail:n.jsx(f,{value:[["m-*","全方向に余白を与える"],["mx-*","水平方向に余白を与える"],["my-*","垂直方向に余白を与える"],["ms-*","テキストの開始側に余白を与える"],["me-*","テキストの終端側に余白を与える"],["mt-*","上側に余白を与える"],["mr-*","右側に余白を与える"],["mb-*","下側に余白を与える"],["ml-*","左側に余白を与える"]]})}],["Scroll Padding",{entry:"スクロールパディング",description:`スクロールスナップで止まる位置を、余白を与えることで調整する
余白を親要素側に設定したい場合に使用する`,detail:n.jsx(f,{value:[["p-*","全方向に余白を与える"],["px-*","水平方向に余白を与える"],["py-*","垂直方向に余白を与える"],["ps-*","テキストの開始側に余白を与える"],["pe-*","テキストの終端側に余白を与える"],["pt-*","上側に余白を与える"],["pr-*","右側に余白を与える"],["pb-*","下側に余白を与える"],["pl-*","左側に余白を与える"]]})}],["Scroll Snap Align",{entry:"スクロールスナップの整列",description:"親要素と自身との、どの位置を基準にスクロールの動きを止めるのかを指定する",detail:n.jsx(f,{value:[["start","上、または左側が互いに揃うように止める"],["end","下、または右側が互いに揃うように止める"],["center","中央が互いに揃うように止める"],["align-none","スクロールスナップしない"]]})}],["Scroll Snap Stop",{entry:"スクロールスナップの停止",description:"すばやくスクロールした際の、ブレーキのかけ方を指定する",detail:n.jsx(f,{value:[["normal","要素をスキップ可能にする"],["always","次の要素で強制的に止める（親要素にsnap-mandatoryの付与が必要）"]]})}],["Scroll Snap Type",{entry:"スクロールスナップタイプ",description:"スクロールスナップを有効にする方向や、スナップの強制度合いを指定する",detail:n.jsx(f,{value:[["none","スクロールスナップしない"],["x","水平方向にスクロールスナップ"],["y","垂直方向にスクロールスナップ"],["both","上下左右にスクロールスナップ"],["mandatory","強制的に位置を揃える"],["proximity","強制の度合いは緩く、中間位置ではスナップしない"]]})}],["Touch Action",{entry:"タッチアクション",description:"スクロールやズームに対する、タッチ操作でのジェスチャーを指定する",detail:n.jsx(f,{value:[["auto","ジェスチャーを有効にする"],["none","ジェスチャーを無効にする"],["pan-x","水平方向のスクロールを可能にする"],["pan-left","左方向へのスクロールを可能にする"],["pan-right","右方向へのスクロールを可能にする"],["pan-y","垂直方向のスクロールを可能にする"],["pan-up","上方向へのスクロールを可能にする"],["pan-down","下方向へのスクロールを可能にする"],["pinch-zoom","ピンチ操作でのズームを可能にする"],["manipulation","ダブルタップでのズームを可能にする"]]})}],["User Select",{entry:"ユーザー選択",description:"テキスト選択の動作を指定する",detail:n.jsx(f,{value:[["none","テキスト選択不可"],["text","テキスト選択を許可する"],["all","テキスト全体をワンクリックで選択状態にする"],["auto","自動"]]})}],["Will Change",{entry:"未来の変更",description:`ページに何かしらの変化が発生する可能性を事前にブラウザーへ伝えることで、アニメーションなどの最適化を図る
使用法を間違えると逆にパフォーマンス悪化につながるので、基本的にはブラウザーに任せたほうが良い`,detail:n.jsx(f,{value:[["auto","ブラウザーに最適化を任せる"],["scroll","スクロール位置が変化する可能性を伝える"],["contents","コンテンツが変化する可能性を伝える"],["transform","変形操作が行われる可能性を伝える"]]})}]]),Mb=new Map([[E.SVG,{entry:"ベクター画像",description:"",detail:null}],["Fill",{entry:"塗りつぶし",description:"<svg>要素の塗りつぶし色を指定する",detail:n.jsx(f,{value:[["none","塗りつぶししない",n.jsx("td",{className:"w-10"})],["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}],["Stroke",{entry:"線",description:"<svg>要素の線の色を指定する",detail:n.jsx(f,{value:[["none","塗りつぶししない",n.jsx("td",{className:"w-10"})],["inherit","親要素からスタイルを引き継ぐ",n.jsx("td",{className:"w-10"})],["current","テキスト色",n.jsx("td",{className:"w-10"})],["transparent","透明",n.jsx("td",{className:"w-10"})],["black","黒",n.jsx("td",{className:"w-10 bg-black"})],["white","白",n.jsx("td",{className:"w-10 bg-white"})],["slate-500","粘板岩",n.jsx("td",{className:"w-10 bg-slate-500"})],["gray-500","グレー",n.jsx("td",{className:"w-10 bg-gray-500"})],["zinc-500","亜鉛",n.jsx("td",{className:"w-10 bg-zinc-500"})],["neutral-500","ニュートラル",n.jsx("td",{className:"w-10 bg-neutral-500"})],["stone-500","石",n.jsx("td",{className:"w-10 bg-stone-500"})],["red-500","赤",n.jsx("td",{className:"w-10 bg-red-500"})],["orange-500","オレンジ",n.jsx("td",{className:"w-10 bg-orange-500"})],["amber-500","琥珀",n.jsx("td",{className:"w-10 bg-amber-500"})],["yellow-500","黄色",n.jsx("td",{className:"w-10 bg-yellow-500"})],["lime-500","ライム",n.jsx("td",{className:"w-10 bg-lime-500"})],["green-500","緑",n.jsx("td",{className:"w-10 bg-green-500"})],["emerald-500","エメラルド",n.jsx("td",{className:"w-10 bg-emerald-500"})],["teal-500","コガモ",n.jsx("td",{className:"w-10 bg-teal-500"})],["cyan-500","シアン",n.jsx("td",{className:"w-10 bg-cyan-500"})],["sky-500","スカイ",n.jsx("td",{className:"w-10 bg-sky-500"})],["blue-500","青",n.jsx("td",{className:"w-10 bg-blue-500"})],["indigo-500","藍色",n.jsx("td",{className:"w-10 bg-indigo-500"})],["violet-500","スミレ",n.jsx("td",{className:"w-10 bg-violet-500"})],["purple-500","紫",n.jsx("td",{className:"w-10 bg-purple-500"})],["fuchsia-500","フクシア",n.jsx("td",{className:"w-10 bg-fuchsia-500"})],["pink-500","ピンク",n.jsx("td",{className:"w-10 bg-pink-500"})],["rose-500","バラ",n.jsx("td",{className:"w-10 bg-rose-500"})],["red-500/25","不透明度25％で指定する例",n.jsx("td",{className:"w-10 bg-red-500/25"})]]})}],["Stroke Width",{entry:"線の太さ",description:"<svg>要素の線の太さを指定する",detail:null}]]),Ob=new Map([[E.Accessibility,{entry:"アクセシビリティー",description:"",detail:null}],["Screen Readers",{entry:"スクリーンリーダー",description:"画面読み上げ機能を使用時のアクセシビリティーを向上させる",detail:n.jsx(f,{value:[["sr-only","視覚的には非表示だが、画面読み上げ機能からは認識できる状態にする"],["not-sr-only","視覚的にも認識できる状態にする"]]})}],["Forced Color Adjust",{entry:"強制カラー調整",description:`ユーザーが設定している、視覚サポート系アクセシビリティー（ハイコントラストモードなど）の効果の受け方を指定する
ブラウザー任せでは問題がある箇所に限定して、適切に使用すること`,detail:n.jsx(f,{value:[["auto","効果を受け入れる"],["none","効果を受け入れない"]]})}]]);class _s{constructor(){br(this,"cache",null);br(this,"getTranslations",()=>(this.cache==null&&(this.cache=this.documentationsTriple.map(([o,e,t])=>{const i=this.translateCategory(o,t),a=this.translateDetailedDocumentations(e,t);return{category:i,detailedDocumentations:a}})),this.cache));br(this,"translateCategory",(o,e)=>{const t=e.get(o);return`${o}${t?` / ${t.entry}`:""}`});br(this,"translateDetailedDocumentations",(o,e)=>o.map(i=>{const a=this.removedUnwantedCells(i),l=e.get(a.entry);return{url:a.url,entry:`${a.entry}
${(l==null?void 0:l.entry)??""}`,description:l!=null&&l.description!==""?l.description:a.description,detail:l==null?void 0:l.detail,parameters:a.parameters}}));br(this,"removedUnwantedCells",o=>{const e=o.parameters.map(i=>i.filter(a=>!(a===""||a==="Aa")));return{url:o.url,entry:o.entry,description:o.description,parameters:this.removedSymbols(o.entry,e)}});br(this,"removedSymbols",(o,e)=>o==="Space Between"||o==="Divide Width"||o==="Divide Color"||o==="Divide Style"?e.map(t=>t.map(i=>i.replace(" > * + *",""))):e)}}class Db extends _s{constructor(){super(...arguments);br(this,"documentationsTriple",[[E.Layout,ws,zb],[E.FlexboxAndGrid,us,Sb],[E.Spacing,xs,Cb],[E.Sizing,hs,Ab],[E.Typography,vs,Eb],[E.Backgrounds,ys,Tb],[E.Borders,ks,_b],[E.Effects,js,Ub],[E.Filters,Ns,Pb],[E.Tables,zs,Lb],[E.TransitionsAndAnimation,Ss,Rb],[E.Transforms,Cs,Fb],[E.Interactivity,As,Bb],[E.SVG,Es,Mb],[E.Accessibility,Ts,Ob]])}}class Ib extends _s{constructor(){super(...arguments);br(this,"empty",new Map);br(this,"documentationsTriple",[[E.Layout,ws,this.empty],[E.FlexboxAndGrid,us,this.empty],[E.Spacing,xs,this.empty],[E.Sizing,hs,this.empty],[E.Typography,vs,this.empty],[E.Backgrounds,ys,this.empty],[E.Borders,ks,this.empty],[E.Effects,js,this.empty],[E.Filters,Ns,this.empty],[E.Tables,zs,this.empty],[E.TransitionsAndAnimation,Ss,this.empty],[E.Transforms,Cs,this.empty],[E.Interactivity,As,this.empty],[E.SVG,Es,this.empty],[E.Accessibility,Ts,this.empty]])}}const Ko=class Ko{};br(Ko,"id"),br(Ko,"run",(o,e)=>{clearInterval(Ko.id),Ko.id=window.setTimeout(()=>{o()},e)});let Qi=Ko;const $b="/tailwindcss-japanese-cheat-sheet/assets/github-mark-B3LxWxcL.png",Wb="/tailwindcss-japanese-cheat-sheet/assets/github-mark-white-BsLkggKK.png",ao={sm:"sm",md:"md",lg:"lg",xl:"xl"},rd=r=>r>=1280?ao.xl:r>=1024?ao.lg:r>=768?ao.md:ao.sm;class od{sliced(o){return{firstRow:[...o],secondRow:[],thirdRow:[],fourthRow:[]}}}class Hb{sliced(o){return{firstRow:o.slice(0,5),secondRow:o.slice(5),thirdRow:[],fourthRow:[]}}}class Vb{sliced(o){return{firstRow:o.slice(0,4),secondRow:o.slice(4,8),thirdRow:o.slice(8),fourthRow:[]}}}class Yb{sliced(o){return{firstRow:o.slice(0,2),secondRow:o.slice(2,6),thirdRow:o.slice(6,10),fourthRow:o.slice(10)}}}const Fe=class Fe{};br(Fe,"values",new Map([[ao.sm,new od],[ao.md,new Hb],[ao.lg,new Vb],[ao.xl,new Yb]])),br(Fe,"get",o=>{const e=Fe.values.get(o);return e??new od});let dn=Fe;const ri=new Db,ed=new Ib,Xb=()=>{const[r,o]=R.useState(ri.getTranslations()),[e,t]=R.useState(!0),[i,a]=R.useState([]),[l,d]=R.useState([]),[s,g]=R.useState([]),[u,w]=R.useState([]);return R.useEffect(()=>{let m=null;window.addEventListener("resize",()=>{const y=rd(window.innerWidth);if(m===y)return;m=y;const k=dn.get(y).sliced(r);a(k.firstRow),d(k.secondRow),g(k.thirdRow),w(k.fourthRow)})},[]),R.useEffect(()=>{const m=rd(window.innerWidth),v=dn.get(m).sliced(r);a(v.firstRow),d(v.secondRow),g(v.thirdRow),w(v.fourthRow)},[r]),n.jsxs(lb,{children:[n.jsxs("div",{className:"space-y-4 bg-gray-800 py-4 text-neutral-100",children:[n.jsx("h1",{className:"break-keep text-center text-2xl font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.75)]",children:"Tailwind CSS 日本語チートシート"}),n.jsxs("div",{className:"flex justify-between px-4",children:[n.jsx("p",{className:"my-auto -ml-4 bg-gradient-to-r from-purple-500 to-transparent px-4 text-sm",children:`Documentation ${Nb}`}),n.jsx(Qb,{isJapanese:e,setIsJapanese:t,translatorJA:ri,translatorEN:ed,setTranslations:o})]})]}),n.jsxs("div",{className:"space-y-4 p-4 text-neutral-950 dark:text-neutral-100",children:[n.jsx(Gb,{isJapanese:e}),n.jsx(Kb,{translations:e?ri.getTranslations():ed.getTranslations(),setTranslations:o}),n.jsxs("div",{className:"grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:[n.jsx("div",{className:"flex flex-col",children:i.map(m=>n.jsx(Nt,{category:m.category,detailedDocumentations:m.detailedDocumentations},m.category))}),n.jsx("div",{className:"flex flex-col",children:l.map(m=>n.jsx(Nt,{category:m.category,detailedDocumentations:m.detailedDocumentations},m.category))}),n.jsx("div",{className:"flex flex-col",children:s.map(m=>n.jsx(Nt,{category:m.category,detailedDocumentations:m.detailedDocumentations},m.category))}),n.jsx("div",{className:"flex flex-col",children:u.map(m=>n.jsx(Nt,{category:m.category,detailedDocumentations:m.detailedDocumentations},m.category))})]})]}),n.jsxs("div",{className:"flex justify-center gap-2 pb-4",children:[n.jsxs("a",{className:"relative h-6 w-6 opacity-70 transition hover:opacity-100",href:"https://github.com/Telehakke/tailwindcss-japanese-cheat-sheet",target:"_blank",children:[n.jsx("img",{className:"absolute inset-0 inline-block dark:hidden",src:$b,alt:"GitHub Mark"}),n.jsx("img",{className:"absolute inset-0 hidden dark:inline-block",src:Wb,alt:"GitHub Mark"})]}),n.jsx("small",{className:"my-auto text-neutral-950 dark:text-neutral-100",children:"© 2024 Telehakke"})]})]})},Qb=({isJapanese:r,setIsJapanese:o,translatorJA:e,translatorEN:t,setTranslations:i})=>n.jsxs("div",{children:[n.jsx("button",{className:`rounded-l-full border-y-2 border-l-2 border-purple-500 px-2 transition ${r?"bg-purple-500":"hover:bg-white/20"}`,onClick:()=>{o(!0),i(e.getTranslations())},children:"日本語"}),n.jsx("button",{className:`rounded-r-full border-y-2 border-r-2 border-purple-500 px-2 transition ${r?"hover:bg-white/20":"bg-purple-500"}`,onClick:()=>{o(!1),i(t.getTranslations())},children:"English"})]}),Gb=({isJapanese:r})=>{const{setShouldExpandAll:o}=R.useContext(Wa);return n.jsxs("div",{className:"flex justify-center gap-4",children:[n.jsx(Xi,{className:"px-2",Icon:n.jsx(cb,{className:"fill-neutral-500"}),text:r?"全て展開":"Expand All",onClick:()=>o(!0)}),n.jsx(Xi,{className:"px-2",Icon:n.jsx(gb,{className:"fill-neutral-500"}),text:r?"全て折りたたむ":"Collapse All",onClick:()=>o(!1)})]})},Kb=({translations:r,setTranslations:o})=>{const[e,t]=R.useState(!1),[i,a]=R.useState(""),l=R.useRef(null);R.useEffect(()=>{var g,u;(g=l.current)==null||g.addEventListener("focus",()=>{t(!0)}),(u=l.current)==null||u.addEventListener("focusout",()=>{t(!1)})},[]);const d=g=>{const u=g.target.value;a(u);const w=u.toLowerCase(),m=(y,v)=>y.filter(B=>{if(B.entry.toLowerCase().includes(v)||B.description.toLowerCase().includes(v))return!0;for(const b of B.parameters)for(const c of b)if(c.toLowerCase().includes(v))return!0;return!1});Qi.run(()=>{const y=r.map(v=>{const k=m(v.detailedDocumentations,w);return{category:v.category,detailedDocumentations:k}});o(y)},400)},s=()=>{a(""),o(r)};return n.jsxs("div",{className:"relative mx-auto max-w-80",children:[n.jsx("label",{className:"sr-only",htmlFor:"search",children:"クラス名の検索"}),n.jsx("input",{className:"h-8 w-full rounded-md bg-transparent px-2",id:"search",type:"text",onChange:d,value:i,ref:l}),n.jsx("div",{className:"absolute inset-0 -z-10 rounded-md bg-neutral-50 dark:bg-neutral-700",children:!e&&i.length===0?n.jsx(pb,{className:"absolute inset-y-0 left-2 my-auto fill-neutral-500"}):null}),i.length>0&&n.jsx("button",{onClick:s,children:n.jsx(mb,{className:"absolute inset-y-0 right-2 my-auto rounded-full fill-neutral-500 transition hover:bg-neutral-200 dark:hover:bg-neutral-600 dark:hover:fill-neutral-400"})})]})};fs(document.getElementById("root")).render(n.jsx(R.StrictMode,{children:n.jsx(Xb,{})}));
