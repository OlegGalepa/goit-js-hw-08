!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,b=Math.min,m=function(){return s.Date.now()};function p(e,t,n){var r,o,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(w,t),d?p(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=m();if(O(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-l);return s?b(n,u-(e-c)):n}(e))}function S(e){return a=void 0,v&&r?p(e):(r=o=void 0,f)}function T(){var e=m(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return h(l);if(s)return a=setTimeout(w,t),p(l)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=o=a=void 0},T.flush=function(){return void 0===a?f:S(m())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var h="feedback-form-state",O=document.querySelector(".feedback-form"),w=localStorage.getItem(h),S={};if(O.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),e.currentTarget.reset(),S={},localStorage.removeItem(h)})),O.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(S))}),500)),w){S=JSON.parse(w);var T=!0,x=!1,N=void 0;try{for(var E,I=Object.keys(S)[Symbol.iterator]();!(T=(E=I.next()).done);T=!0){var M=E.value;O.elements[M].value=S[M]}}catch(e){x=!0,N=e}finally{try{T||null==I.return||I.return()}finally{if(x)throw N}}}}();
//# sourceMappingURL=03-feedback.89f5995a.js.map