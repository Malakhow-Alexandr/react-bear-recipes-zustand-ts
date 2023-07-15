/*! For license information please see 544.d6ed8380.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_beer_recipes_zustand_ts=self.webpackChunkreact_beer_recipes_zustand_ts||[]).push([[544],{1561:function(e,t,n){var r=n(2791);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,u=r.useLayoutEffect,c=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var f="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return u((function(){o.value=n,o.getSnapshot=t,s(o)&&f({inst:o})}),[e,n,t]),a((function(){return s(o)&&f({inst:o}),e((function(){s(o)&&f({inst:o})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},7595:function(e,t,n){var r=n(2791),o=n(7248);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=o.useSyncExternalStore,u=r.useRef,c=r.useEffect,s=r.useMemo,f=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var l=u(null);if(null===l.current){var d={hasValue:!1,value:null};l.current=d}else d=l.current;l=s((function(){function e(e){if(!c){if(c=!0,a=e,e=r(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return u=t}return u=e}if(t=u,i(a,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(a=e,u=n)}var a,u,c=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,n,r,o]);var p=a(e,l[0],l[1]);return c((function(){d.hasValue=!0,d.value=p}),[p]),f(p),p}},7248:function(e,t,n){e.exports=n(1561)},327:function(e,t,n){e.exports=n(7595)},4942:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5847:function(e,t,n){n.d(t,{Ue:function(){return c}});var r=function(e){var t,n=new Set,r=function(e,r){var o="function"===typeof e?e(t):e;if(!Object.is(o,t)){var i=t;t=(null!=r?r:"object"!==typeof o)?o:Object.assign({},t,o),n.forEach((function(e){return e(t,i)}))}},o=function(){return t},i={setState:r,getState:o,subscribe:function(e){return n.add(e),function(){return n.delete(e)}},destroy:function(){console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,i),i},o=function(e){return e?r(e):r},i=n(2791),a=n(327).useSyncExternalStoreWithSelector;var u=function(e){"function"!==typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");var t="function"===typeof e?o(e):e,n=function(e,n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getState,n=arguments.length>2?arguments[2]:void 0,r=a(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,i.useDebugValue)(r),r}(t,e,n)};return Object.assign(n,t),n},c=function(e){return e?u(e):u}},768:function(e,t,n){n.d(t,{mW:function(){return l}});var r=n(4942);function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=n(9439),a=n(1413),u=["enabled","anonymousActionType","store"],c=["connection"],s=new Map,f=function(e){var t=s.get(e);return t?Object.fromEntries(Object.entries(t.stores).map((function(e){var t=(0,i.Z)(e,2);return[t[0],t[1].getState()]}))):{}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n,l,p){var v,y=t.enabled,_=t.anonymousActionType,h=t.store,b=o(t,u);try{v=(null==y||y)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(z){}if(!v)return y&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(n,l,p);var S=function(e,t,n){if(void 0===e)return{type:"untracked",connection:t.connect(n)};var r=s.get(n.name);if(r)return(0,a.Z)({type:"tracked",store:e},r);var o={connection:t.connect(n),stores:{}};return s.set(n.name,o),(0,a.Z)({type:"tracked",store:e},o)}(h,v,b),g=S.connection,m=o(S,c),O=!0;p.setState=function(e,t,o){var i=n(e,t);if(!O)return i;var u=void 0===o?{type:_||"anonymous"}:"string"===typeof o?{type:o}:o;return void 0===h?(null==g||g.send(u,l()),i):(null==g||g.send((0,a.Z)((0,a.Z)({},u),{},{type:"".concat(h,"/").concat(u.type)}),(0,a.Z)((0,a.Z)({},f(b.name)),{},(0,r.Z)({},h,p.getState()))),i)};var w=function(){var e=O;O=!1,n.apply(void 0,arguments),O=e},P=e(p.setState,l,p);if("untracked"===m.type?null==g||g.init(P):(m.stores[m.store]=p,null==g||g.init(Object.fromEntries(Object.entries(m.stores).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return[n,n===m.store?P:r.getState()]}))))),p.dispatchFromDevtools&&"function"===typeof p.dispatch){var j=!1,E=p.dispatch;p.dispatch=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"__setState"!==t[0].type||j||(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),j=!0),E.apply(void 0,t)}}return g.subscribe((function(e){var t;switch(e.type){case"ACTION":return"string"!==typeof e.payload?void console.error("[zustand devtools middleware] Unsupported action format"):d(e.payload,(function(e){if("__setState"!==e.type)p.dispatchFromDevtools&&"function"===typeof p.dispatch&&p.dispatch(e);else{if(void 0===h)return void w(e.state);1!==Object.keys(e.state).length&&console.error('\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ');var t=e.state[h];if(void 0===t||null===t)return;JSON.stringify(p.getState())!==JSON.stringify(t)&&w(t)}}));case"DISPATCH":switch(e.payload.type){case"RESET":return w(P),void 0===h?null==g?void 0:g.init(p.getState()):null==g?void 0:g.init(f(b.name));case"COMMIT":return void 0===h?void(null==g||g.init(p.getState())):null==g?void 0:g.init(f(b.name));case"ROLLBACK":return d(e.state,(function(e){if(void 0===h)return w(e),void(null==g||g.init(p.getState()));w(e[h]),null==g||g.init(f(b.name))}));case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return d(e.state,(function(e){void 0!==h?JSON.stringify(p.getState())!==JSON.stringify(e[h])&&w(e[h]):w(e)}));case"IMPORT_STATE":var n=e.payload.nextLiftedState,r=null==(t=n.computedStates.slice(-1)[0])?void 0:t.state;if(!r)return;return w(void 0===h?r:r[h]),void(null==g||g.send(null,n));case"PAUSE_RECORDING":return O=!O}return}})),P}},d=function(e,t){var n;try{n=JSON.parse(e)}catch(r){console.error("[zustand devtools middleware] Could not parse the received json",r)}void 0!==n&&t(n)}},7416:function(e,t,n){n.d(t,{n:function(){return Q}});var r=n(5671),o=n(3144),i=n(1413),a=n(9439),u=Symbol.for("immer-nothing"),c=Symbol.for("immer-draftable"),s=Symbol.for("immer-state");function f(e){throw new Error("[Immer] minified error nr: ".concat(e,". Full error at: https://bit.ly/3cXEKWf"))}var l=Object.getPrototypeOf;function d(e){return!!e&&!!e[s]}function p(e){var t;return!!e&&(y(e)||Array.isArray(e)||!!e[c]||!(null===(t=e.constructor)||void 0===t||!t[c])||g(e)||m(e))}var v=Object.prototype.constructor.toString();function y(e){if(!e||"object"!==typeof e)return!1;var t=l(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===v}function _(e,t){0===h(e)?Object.entries(e).forEach((function(n){var r=(0,a.Z)(n,2),o=r[0],i=r[1];t(o,i,e)})):e.forEach((function(n,r){return t(r,n,e)}))}function h(e){var t=e[s];return t?t.type_:Array.isArray(e)?1:g(e)?2:m(e)?3:0}function b(e,t){return 2===h(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function S(e,t,n){var r=h(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function g(e){return e instanceof Map}function m(e){return e instanceof Set}function O(e){return e.copy_||e.base_}function w(e,t){if(g(e))return new Map(e);if(m(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&y(e)){if(!l(e)){var n=Object.create(null);return Object.assign(n,e)}return(0,i.Z)({},e)}var r=Object.getOwnPropertyDescriptors(e);delete r[s];for(var o=Reflect.ownKeys(r),a=0;a<o.length;a++){var u=o[a],c=r[u];!1===c.writable&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[u]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[u]})}return Object.create(l(e),r)}function P(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return E(e)||d(e)||!p(e)||(h(e)>1&&(e.set=e.add=e.clear=e.delete=j),Object.freeze(e),t&&_(e,(function(e,t){return P(t,!0)}))),e}function j(){f(2)}function E(e){return Object.isFrozen(e)}var z,A={};function D(e){var t=A[e];return t||f(0),t}function k(){return z}function C(e,t){t&&(D("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function T(e){x(e),e.drafts_.forEach(Z),e.drafts_=null}function x(e){e===z&&(z=e.parent_)}function F(e){return z={drafts_:[],parent_:z,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Z(e){var t=e[s];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function N(e,t){t.unfinalizedDrafts_=t.drafts_.length;var n=t.drafts_[0];return void 0!==e&&e!==n?(n[s].modified_&&(T(t),f(4)),p(e)&&(e=M(t,e),t.parent_||I(t,e)),t.patches_&&D("Patches").generateReplacementPatches_(n[s].base_,e,t.patches_,t.inversePatches_)):e=M(t,n,[]),T(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==u?e:void 0}function M(e,t,n){if(E(t))return t;var r=t[s];if(!r)return _(t,(function(o,i){return R(e,r,t,o,i,n)})),t;if(r.scope_!==e)return t;if(!r.modified_)return I(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;var o=r.copy_,i=o,a=!1;3===r.type_&&(i=new Set(o),o.clear(),a=!0),_(i,(function(t,i){return R(e,r,o,t,i,n,a)})),I(e,o,!1),n&&e.patches_&&D("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function R(e,t,n,r,o,i,a){if(d(o)){var u=M(e,o,i&&t&&3!==t.type_&&!b(t.assigned_,r)?i.concat(r):void 0);if(S(n,r,u),!d(u))return;e.canAutoFreeze_=!1}else a&&n.add(o);if(p(o)&&!E(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;M(e,o),t&&t.scope_.parent_||I(e,o)}}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&P(t,n)}var U={get:function(e,t){if(t===s)return e;var n=O(e);if(!b(n,t))return function(e,t,n){var r,o=L(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.draft_):void 0}(e,n,t);var r=n[t];return e.finalized_||!p(r)?r:r===J(e.base_,t)?(K(e),e.copy_[t]=B(r,e)):r},has:function(e,t){return t in O(e)},ownKeys:function(e){return Reflect.ownKeys(O(e))},set:function(e,t,n){var r,o,i=L(O(e),t);if(null!==i&&void 0!==i&&i.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){var a=J(O(e),t),u=null===a||void 0===a?void 0:a[s];if(u&&u.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((r=n)===(o=a)?0!==r||1/r===1/o:r!==r&&o!==o)&&(void 0!==n||b(e.base_,t)))return!0;K(e),V(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:function(e,t){return void 0!==J(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,K(e),V(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor:function(e,t){var n=O(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){f(11)},getPrototypeOf:function(e){return l(e.base_)},setPrototypeOf:function(){f(12)}},W={};function J(e,t){var n=e[s];return(n?O(n):e)[t]}function L(e,t){if(t in e)for(var n=l(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=l(n)}}function V(e){e.modified_||(e.modified_=!0,e.parent_&&V(e.parent_))}function K(e){e.copy_||(e.copy_=w(e.base_,e.scope_.immer_.useStrictShallowCopy_))}_(U,(function(e,t){W[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),W.deleteProperty=function(e,t){return W.set.call(this,e,t,void 0)},W.set=function(e,t,n){return U.set.call(this,e[0],t,n,e[0])};var X=function(){function e(t){var n=this;(0,r.Z)(this,e),this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=function(e,t,r){if("function"===typeof e&&"function"!==typeof t){var o=t;t=e;var i=n;return function(){for(var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,r=arguments.length,a=new Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];return i.produce(n,(function(n){var r;return(r=t).call.apply(r,[e,n].concat(a))}))}}var a;if("function"!==typeof t&&f(6),void 0!==r&&"function"!==typeof r&&f(7),p(e)){var c=F(n),s=B(e,void 0),l=!0;try{a=t(s),l=!1}finally{l?T(c):x(c)}return C(c,r),N(a,c)}if(!e||"object"!==typeof e){if(void 0===(a=t(e))&&(a=e),a===u&&(a=void 0),n.autoFreeze_&&P(a,!0),r){var d=[],v=[];D("Patches").generateReplacementPatches_(e,a,d,v),r(d,v)}return a}f(1)},this.produceWithPatches=function(e,t){return"function"===typeof e?function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return n.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(o))}))}:[n.produce(e,t,(function(e,t){r=e,o=t})),r,o];var r,o},"boolean"===typeof(null===t||void 0===t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),"boolean"===typeof(null===t||void 0===t?void 0:t.useStrictShallowCopy)&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}return(0,o.Z)(e,[{key:"createDraft",value:function(e){p(e)||f(8),d(e)&&(e=function(e){d(e)||f(10);return G(e)}(e));var t=F(this),n=B(e,void 0);return n[s].isManual_=!0,x(t),n}},{key:"finishDraft",value:function(e,t){var n=e&&e[s];n&&n.isManual_||f(9);var r=n.scope_;return C(r,t),N(void 0,r)}},{key:"setAutoFreeze",value:function(e){this.autoFreeze_=e}},{key:"setUseStrictShallowCopy",value:function(e){this.useStrictShallowCopy_=e}},{key:"applyPatches",value:function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var o=D("Patches").applyPatches_;return d(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))}}]),e}();function B(e,t){var n=g(e)?D("MapSet").proxyMap_(e,t):m(e)?D("MapSet").proxySet_(e,t):function(e,t){var n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:k(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=r,i=U;n&&(o=[r],i=W);var a=Proxy.revocable(o,i),u=a.revoke,c=a.proxy;return r.draft_=c,r.revoke_=u,c}(e,t);return(t?t.scope_:k()).drafts_.push(n),n}function G(e){if(!p(e)||E(e))return e;var t,n=e[s];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=w(e,n.scope_.immer_.useStrictShallowCopy_)}else t=w(e,!0);return _(t,(function(e,n){S(t,e,G(n))})),n&&(n.finalized_=!1),t}var H=new X,q=H.produce;H.produceWithPatches.bind(H),H.setAutoFreeze.bind(H),H.setUseStrictShallowCopy.bind(H),H.applyPatches.bind(H),H.createDraft.bind(H),H.finishDraft.bind(H);var Q=function(e){return function(t,n,r){return r.setState=function(e,n){for(var r="function"===typeof e?q(e):e,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];return t.apply(void 0,[r,n].concat(i))},e(r.setState,n,r)}}}}]);
//# sourceMappingURL=544.d6ed8380.chunk.js.map