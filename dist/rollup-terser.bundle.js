"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function n(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{l(r.next(t))}catch(t){i(t)}}function u(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,u)}l((r=r.apply(t,e||[])).next())}))}function r(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function s(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}function l(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||l(t,e)}))})}function l(t,e){try{(n=o[t](e)).value instanceof u?Promise.resolve(n.value.v).then(a,c):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){l("next",t)}function c(t){l("throw",t)}function f(t,e){t(e),i.shift(),i.length&&l(i[0][0],i[0][1])}}function a(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=o(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function c(t){return"function"==typeof t}function f(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var h=f((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function d(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var p=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,r,u;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var a=o(l),f=a.next();!f.done;f=a.next()){f.value.remove(this)}}catch(e){t={error:e}}finally{try{f&&!f.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else l.remove(this);var d=this.initialTeardown;if(c(d))try{d()}catch(t){u=t instanceof h?t.errors:[t]}var p=this._teardowns;if(p){this._teardowns=null;try{for(var y=o(p),g=y.next();!g.done;g=y.next()){var D=g.value;try{m(D)}catch(t){u=null!=u?u:[],t instanceof h?u=s(s([],i(u)),i(t.errors)):u.push(t)}}}catch(t){n={error:t}}finally{try{g&&!g.done&&(r=y.return)&&r.call(y)}finally{if(n)throw n.error}}}if(u)throw new h(u)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)m(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&d(e,t)},t.prototype.remove=function(e){var n=this._teardowns;n&&d(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}(),y=p.EMPTY;function g(t){return t instanceof p||t&&"closed"in t&&c(t.remove)&&c(t.add)&&c(t.unsubscribe)}function m(t){c(t)?t():t.unsubscribe()}var D={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},_={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=_.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,s([],i(t)))},clearTimeout:function(t){var e=_.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function v(t){_.setTimeout((function(){var e=D.onUnhandledError;if(!e)throw t;e(t)}))}function C(){}var w=b("C",void 0,void 0);function b(t,e,n){return{kind:t,value:e,error:n}}var E=null;function A(t){if(D.useDeprecatedSynchronousErrorHandling){var e=!E;if(e&&(E={errorThrown:!1,error:null}),t(),e){var n=E,r=n.errorThrown,o=n.error;if(E=null,r)throw o}}else t()}var F=function(t){function n(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,g(e)&&e.add(n)):n.destination=T,n}return e(n,t),n.create=function(t,e,n){return new x(t,e,n)},n.prototype.next=function(t){this.isStopped?I(function(t){return b("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?I(b("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?I(w,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(p),x=function(t){function n(e,n,r){var o,i=t.call(this)||this;if(c(e))o=e;else if(e){var s;o=e.next,n=e.error,r=e.complete,i&&D.useDeprecatedNextContext?(s=Object.create(e)).unsubscribe=function(){return i.unsubscribe()}:s=e,o=null==o?void 0:o.bind(s),n=null==n?void 0:n.bind(s),r=null==r?void 0:r.bind(s)}return i.destination={next:o?S(o):C,error:S(null!=n?n:k),complete:r?S(r):C},i}return e(n,t),n}(F);function S(t,e){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{t.apply(void 0,s([],i(e)))}catch(t){v(t)}}}function k(t){throw t}function I(t,e){var n=D.onStoppedNotification;n&&_.setTimeout((function(){return n(t,e)}))}var T={closed:!0,next:C,error:k,complete:C},O="function"==typeof Symbol&&Symbol.observable||"@@observable";function M(t){return t}function P(t){return 0===t.length?M:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var B=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof F||function(t){return t&&c(t.next)&&c(t.error)&&c(t.complete)}(r)&&g(r)?t:new x(t,e,n);return A((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=N(e))((function(e,r){var o=new x({next:function(e){try{t(e)}catch(t){r(t),o.unsubscribe()}},error:r,complete:e});n.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[O]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return P(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=N(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function N(t){var e;return null!==(e=null!=t?t:D.Promise)&&void 0!==e?e:Promise}function R(t){return function(e){if(function(t){return c(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}var L=function(t){function n(e,n,r,o,i){var s=t.call(this,e)||this;return s.onFinalize=i,s._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e(n,t),n.prototype.unsubscribe=function(){var e,n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},n}(F),j=f((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),V=function(t){function n(){var e=t.call(this)||this;return e.closed=!1,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(n,t),n.prototype.lift=function(t){var e=new H(this,this);return e.operator=t,e},n.prototype._throwIfClosed=function(){if(this.closed)throw new j},n.prototype.next=function(t){var e=this;A((function(){var n,r;if(e._throwIfClosed(),!e.isStopped){var i=e.observers.slice();try{for(var s=o(i),u=s.next();!u.done;u=s.next()){u.value.next(t)}}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}}))},n.prototype.error=function(t){var e=this;A((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var n=e.observers;n.length;)n.shift().error(t)}}))},n.prototype.complete=function(){var t=this;A((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var e=this,n=e.hasError,r=e.isStopped,o=e.observers;return n||r?y:(o.push(t),new p((function(){return d(o,t)})))},n.prototype._checkFinalizedStatuses=function(t){var e=this,n=e.hasError,r=e.thrownError,o=e.isStopped;n?t.error(r):o&&t.complete()},n.prototype.asObservable=function(){var t=new B;return t.source=this,t},n.create=function(t,e){return new H(t,e)},n}(B),H=function(t){function n(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return e(n,t),n.prototype.next=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===n||n.call(e,t)},n.prototype.error=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===n||n.call(e,t)},n.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},n.prototype._subscribe=function(t){var e,n;return null!==(n=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==n?n:y},n}(V),$=new B((function(t){return t.complete()}));function U(t){return t[t.length-1]}function z(t){return(e=U(t))&&c(e.schedule)?t.pop():void 0;var e}function Z(t,e){return"number"==typeof U(t)?t.pop():e}var G=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function W(t){return c(null==t?void 0:t.then)}function q(t){return c(t[O])}function Y(t){return Symbol.asyncIterator&&c(null==t?void 0:t[Symbol.asyncIterator])}function Q(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var K="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function J(t){return c(null==t?void 0:t[K])}function X(t){return l(this,arguments,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:e=t.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,u(e.read())];case 3:return n=r.sent(),o=n.value,n.done?[4,u(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,u(o)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function tt(t){return c(null==t?void 0:t.getReader)}function et(t){if(t instanceof B)return t;if(null!=t){if(q(t))return r=t,new B((function(t){var e=r[O]();if(c(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(G(t))return n=t,new B((function(t){for(var e=0;e<n.length&&!t.closed;e++)t.next(n[e]);t.complete()}));if(W(t))return function(t){return new B((function(e){t.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,v)}))}(t);if(Y(t))return nt(t);if(J(t))return e=t,new B((function(t){var n,r;try{for(var i=o(e),s=i.next();!s.done;s=i.next()){var u=s.value;if(t.next(u),t.closed)return}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()}));if(tt(t))return nt(X(t))}var e,n,r;throw Q(t)}function nt(t){return new B((function(e){(function(t,e){var o,i,s,u;return n(this,void 0,void 0,(function(){var n,l;return r(this,(function(r){switch(r.label){case 0:r.trys.push([0,5,6,11]),o=a(t),r.label=1;case 1:return[4,o.next()];case 2:if((i=r.sent()).done)return[3,4];if(n=i.value,e.next(n),e.closed)return[2];r.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=r.sent(),s={error:l},[3,11];case 6:return r.trys.push([6,,9,10]),i&&!i.done&&(u=o.return)?[4,u.call(o)]:[3,8];case 7:r.sent(),r.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(t,e).catch((function(t){return e.error(t)}))}))}function rt(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=e.schedule((function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);if(t.add(i),!o)return i}function ot(t,e){return void 0===e&&(e=0),R((function(n,r){n.subscribe(new L(r,(function(n){return rt(r,t,(function(){return r.next(n)}),e)}),(function(){return rt(r,t,(function(){return r.complete()}),e)}),(function(n){return rt(r,t,(function(){return r.error(n)}),e)})))}))}function it(t,e){return void 0===e&&(e=0),R((function(n,r){r.add(t.schedule((function(){return n.subscribe(r)}),e))}))}function st(t,e){if(!t)throw new Error("Iterable cannot be null");return new B((function(n){rt(n,e,(function(){var r=t[Symbol.asyncIterator]();rt(n,e,(function(){r.next().then((function(t){t.done?n.complete():n.next(t.value)}))}),0,!0)}))}))}function ut(t,e){if(null!=t){if(q(t))return function(t,e){return et(t).pipe(it(e),ot(e))}(t,e);if(G(t))return function(t,e){return new B((function(n){var r=0;return e.schedule((function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())}))}))}(t,e);if(W(t))return function(t,e){return et(t).pipe(it(e),ot(e))}(t,e);if(Y(t))return st(t,e);if(J(t))return function(t,e){return new B((function(n){var r;return rt(n,e,(function(){r=t[K](),rt(n,e,(function(){var t,e,o;try{e=(t=r.next()).value,o=t.done}catch(t){return void n.error(t)}o?n.complete():n.next(e)}),0,!0)})),function(){return c(null==r?void 0:r.return)&&r.return()}}))}(t,e);if(tt(t))return function(t,e){return st(X(t),e)}(t,e)}throw Q(t)}function lt(t,e){return e?ut(t,e):et(t)}function at(t,e,n){return void 0===n&&(n=1/0),c(e)?at((function(n,r){return function(t,e){return R((function(n,r){var o=0;n.subscribe(new L(r,(function(n){r.next(t.call(e,n,o++))})))}))}((function(t,o){return e(n,t,r,o)}))(et(t(n,r)))}),n):("number"==typeof e&&(n=e),R((function(e,r){return function(t,e,n,r,o,i,s,u){var l=[],a=0,c=0,f=!1,h=function(){!f||l.length||a||e.complete()},d=function(t){return a<r?p(t):l.push(t)},p=function(t){i&&e.next(t),a++;var u=!1;et(n(t,c++)).subscribe(new L(e,(function(t){null==o||o(t),i?d(t):e.next(t)}),(function(){u=!0}),void 0,(function(){if(u)try{a--;for(var t=function(){var t=l.shift();s?rt(e,s,(function(){return p(t)})):p(t)};l.length&&a<r;)t();h()}catch(t){e.error(t)}})))};return t.subscribe(new L(e,d,(function(){f=!0,h()}))),function(){null==u||u()}}(e,r,t,n)})))}function ct(t){return void 0===t&&(t=1/0),at(M,t)}function ft(t){return t<=0?function(){return $}:R((function(e,n){var r=0;e.subscribe(new L(n,(function(e){++r<=t&&(n.next(e),t<=r&&n.complete())})))}))}function ht(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return!0===e?(t(),null):!1===e?null:e.apply(void 0,s([],i(n))).pipe(ft(1)).subscribe((function(){return t()}))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function dt(t){for(let e in t)if(t[e]===dt)return e;throw Error("Could not find renamed property on target object.")}function pt(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yt(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(yt).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function gt(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const mt=dt({__forward_ref__:dt});function Dt(t){return t.__forward_ref__=Dt,t.toString=function(){return yt(this())},t}function _t(t){return vt(t)?t():t}function vt(t){return"function"==typeof t&&t.hasOwnProperty(mt)&&t.__forward_ref__===Dt}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ct extends Error{constructor(t,e){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e)),this.code=t}}function wt(t){return"string"==typeof t?t:null==t?"":String(t)}function bt(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():wt(t)}function Et(t,e){const n=e?` in ${e}`:"";throw new Ct("201",`No provider for ${bt(t)} found${n}`)}function At(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ft(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function xt(t){return{providers:t.providers||[],imports:t.imports||[]}}function St(t){return kt(t,Tt)||kt(t,Mt)}function kt(t,e){return t.hasOwnProperty(e)?t[e]:null}function It(t){return t&&(t.hasOwnProperty(Ot)||t.hasOwnProperty(Pt))?t[Ot]:null}const Tt=dt({"ɵprov":dt}),Ot=dt({"ɵinj":dt}),Mt=dt({ngInjectableDef:dt}),Pt=dt({ngInjectorDef:dt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Bt;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Nt;function Rt(t){const e=Nt;return Nt=t,e}function Lt(t,e,n){const r=St(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&Bt.Optional?null:void 0!==e?e:void Et(yt(t),"Injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jt(t){return{toString:t}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Vt,Ht,$t;!function(t){t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional"}(Bt||(Bt={})),function(t){t[t.OnPush=0]="OnPush",t[t.Default=1]="Default"}(Vt||(Vt={})),function(t){t[t.CheckOnce=0]="CheckOnce",t[t.Checked=1]="Checked",t[t.CheckAlways=2]="CheckAlways",t[t.Detached=3]="Detached",t[t.Errored=4]="Errored",t[t.Destroyed=5]="Destroyed"}(Ht||(Ht={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}($t||($t={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ut="undefined"!=typeof globalThis&&globalThis,zt="undefined"!=typeof window&&window,Zt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Gt="undefined"!=typeof global&&global,Wt=Ut||Gt||zt||Zt,qt={},Yt=[],Qt=dt({"ɵcmp":dt}),Kt=dt({"ɵdir":dt}),Jt=dt({"ɵpipe":dt}),Xt=dt({"ɵmod":dt}),te=dt({"ɵfac":dt}),ee=dt({__NG_ELEMENT_ID__:dt});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let ne=0;function re(t){return jt((()=>{const e={},n={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===Vt.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||Yt,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||$t.Emulated,id:"c",styles:t.styles||Yt,_:null,setInput:null,schemas:t.schemas||null,tView:null},r=t.directives,o=t.features,i=t.pipes;return n.id+=ne++,n.inputs=ce(t.inputs,e),n.outputs=ce(t.outputs),o&&o.forEach((t=>t(n))),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(ie):null,n.pipeDefs=i?()=>("function"==typeof i?i():i).map(se):null,n}))}function oe(t,e,n){const r=t.ɵcmp;r.directiveDefs=()=>e.map(ie),r.pipeDefs=()=>n.map(se)}function ie(t){return de(t)||pe(t)}function se(t){return ye(t)}const ue={};function le(t){return jt((()=>{const e={type:t.type,bootstrap:t.bootstrap||Yt,declarations:t.declarations||Yt,imports:t.imports||Yt,exports:t.exports||Yt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&(ue[t.id]=t.type),e}))}function ae(t,e){return jt((()=>{const n=ge(t,!0);n.declarations=e.declarations||Yt,n.imports=e.imports||Yt,n.exports=e.exports||Yt}))}function ce(t,e){if(null==t)return qt;const n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,e&&(e[o]=i)}return n}const fe=re;function he(t){return{type:t.type,name:t.name,factory:null,pure:!1!==t.pure,onDestroy:t.type.prototype.ngOnDestroy||null}}function de(t){return t[Qt]||null}function pe(t){return t[Kt]||null}function ye(t){return t[Jt]||null}function ge(t,e){const n=t[Xt]||null;if(!n&&!0===e)throw new Error(`Type ${yt(t)} does not have 'ɵmod' property.`);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function me(t){return Array.isArray(t)&&"object"==typeof t[1]}function De(t){return Array.isArray(t)&&!0===t[1]}function _e(t){return 0!=(8&t.flags)}function ve(t){return 2==(2&t.flags)}function Ce(t){return 1==(1&t.flags)}function we(t){return null!==t.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function be(t,e){const n=t.hasOwnProperty(te);return n?t[te]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ee{constructor(t,e,n){this.previousValue=t,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ae(){return Fe}function Fe(t){return t.type.prototype.ngOnChanges&&(t.setInput=Se),xe}function xe(){const t=ke(this),e=t?.current;if(e){const n=t.previous;if(n===qt)t.previous=e;else for(let t in e)n[t]=e[t];t.current=null,this.ngOnChanges(e)}}function Se(t,e,n,r){const o=ke(t)||function(t,e){return t.__ngSimpleChanges__=e}(t,{previous:qt,current:null}),i=o.current||(o.current={}),s=o.previous,u=this.declaredInputs[n],l=s[u];i[u]=new Ee(l&&l.currentValue,e,s===qt),t[r]=e}Ae.ngInherit=!0;function ke(t){return t.__ngSimpleChanges__||null}function Ie(){if("undefined"!=typeof document)return document}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Te;function Oe(t){return!!t.listen}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(Te||(Te={}));const Me={createRenderer:(t,e)=>Ie()};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Pe(t){for(;Array.isArray(t);)t=t[0];return t}function Be(t,e){return Pe(e[t])}function Ne(t,e){return Pe(e[t.index])}function Re(t,e){return t.data[e]}function Le(t,e){return t[e]}function je(t,e){const n=e[t];return me(n)?n:n[0]}function Ve(t){return 4==(4&t[2])}function He(t){return 128==(128&t[2])}function $e(t,e){return null==e?null:t[e]}function Ue(t){t[18]=0}function ze(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ze={lFrame:wn(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Ge(){return Ze.bindingsEnabled}function We(){Ze.bindingsEnabled=!0}function qe(){Ze.bindingsEnabled=!1}function Ye(){return Ze.lFrame.lView}function Qe(){return Ze.lFrame.tView}function Ke(t){return Ze.lFrame.contextLView=t,t[8]}function Je(){let t=Xe();for(;null!==t&&64===t.type;)t=t.parent;return t}function Xe(){return Ze.lFrame.currentTNode}function tn(){const t=Ze.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function en(t,e){const n=Ze.lFrame;n.currentTNode=t,n.isParent=e}function nn(){return Ze.lFrame.isParent}function rn(){Ze.lFrame.isParent=!1}function on(){return Ze.isInCheckNoChangesMode}function sn(t){Ze.isInCheckNoChangesMode=t}function un(){const t=Ze.lFrame;let e=t.bindingRootIndex;return-1===e&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function ln(){return Ze.lFrame.bindingIndex}function an(t){return Ze.lFrame.bindingIndex=t}function cn(){return Ze.lFrame.bindingIndex++}function fn(t){const e=Ze.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function hn(t){Ze.lFrame.inI18n=t}function dn(t,e){const n=Ze.lFrame;n.bindingIndex=n.bindingRootIndex=t,pn(e)}function pn(t){Ze.lFrame.currentDirectiveIndex=t}function yn(t){const e=Ze.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}function gn(){return Ze.lFrame.currentQueryIndex}function mn(t){Ze.lFrame.currentQueryIndex=t}function Dn(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function _n(t,e,n){if(n&Bt.SkipSelf){let r=e,o=t;for(;!(r=r.parent,null!==r||n&Bt.Host||(r=Dn(o),null===r)||(o=o[15],10&r.type)););if(null===r)return!1;e=r,t=o}const r=Ze.lFrame=Cn();return r.currentTNode=e,r.lView=t,!0}function vn(t){const e=Cn(),n=t[1];Ze.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function Cn(){const t=Ze.lFrame,e=null===t?null:t.child;return null===e?wn(t):e}function wn(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function bn(){const t=Ze.lFrame;return Ze.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const En=bn;function An(){const t=bn();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Fn(t){return(Ze.lFrame.contextLView=function(t,e){for(;t>0;)e=e[15],t--;return e}(t,Ze.lFrame.contextLView))[8]}function xn(){return Ze.lFrame.selectedIndex}function Sn(t){Ze.lFrame.selectedIndex=t}function kn(){const t=Ze.lFrame;return Re(t.tView,t.selectedIndex)}function In(){Ze.lFrame.currentNamespace="http://www.w3.org/2000/svg"}function Tn(){Ze.lFrame.currentNamespace="http://www.w3.org/1998/MathML/"}function On(){Ze.lFrame.currentNamespace=null}function Mn(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const e=t.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:o,ngAfterViewInit:i,ngAfterViewChecked:s,ngOnDestroy:u}=e;r&&(t.contentHooks||(t.contentHooks=[])).push(-n,r),o&&((t.contentHooks||(t.contentHooks=[])).push(n,o),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,o)),i&&(t.viewHooks||(t.viewHooks=[])).push(-n,i),s&&((t.viewHooks||(t.viewHooks=[])).push(n,s),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,s)),null!=u&&(t.destroyHooks||(t.destroyHooks=[])).push(n,u)}}function Pn(t,e,n){Rn(t,e,3,n)}function Bn(t,e,n,r){(3&t[2])===n&&Rn(t,e,n,r)}function Nn(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Rn(t,e,n,r){const o=void 0!==r?65535&t[18]:0,i=null!=r?r:-1,s=e.length-1;let u=0;for(let l=o;l<s;l++){if("number"==typeof e[l+1]){if(u=e[l],null!=r&&u>=r)break}else{e[l]<0&&(t[18]+=65536),(u<i||-1==i)&&(Ln(t,n,e,l),t[18]=(4294901760&t[18])+l+2),l++}}}function Ln(t,e,n,r){const o=n[r]<0,i=n[r+1],s=t[o?-n[r]:n[r]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048;try{i.call(s)}finally{}}}else try{i.call(s)}finally{}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class jn{constructor(t,e,n){this.factory=t,this.resolving=!1,this.canSeeViewProviders=e,this.injectImpl=n}}function Vn(t,e,n){const r=Oe(t);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],u=n[o++],l=n[o++];r?t.setAttribute(e,u,l,s):e.setAttributeNS(s,u,l)}else{const s=i,u=n[++o];$n(s)?r&&t.setProperty(e,s,u):r?t.setAttribute(e,s,u):e.setAttribute(s,u),o++}}return o}function Hn(t){return 3===t||4===t||6===t}function $n(t){return 64===t.charCodeAt(0)}function Un(t,e){if(null===e||0===e.length);else if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?n=o:0===n||zn(t,n,o,null,-1===n||2===n?e[++r]:null)}}return t}function zn(t,e,n,r,o){let i=0,s=t.length;if(-1===e)s=-1;else for(;i<t.length;){const n=t[i++];if("number"==typeof n){if(n===e){s=-1;break}if(n>e){s=i-1;break}}}for(;i<t.length;){const e=t[i];if("number"==typeof e)break;if(e===n){if(null===r)return void(null!==o&&(t[i+1]=o));if(r===t[i+1])return void(t[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(t.splice(s,0,e),i=s+1),t.splice(i++,0,n),null!==r&&t.splice(i++,0,r),null!==o&&t.splice(i++,0,o)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zn(t){return-1!==t}function Gn(t){return 32767&t}function Wn(t,e){let n=t>>16;let r=e;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let qn=!0;function Yn(t){const e=qn;return qn=t,e}let Qn=0;function Kn(t,e){const n=Xn(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,Jn(r.data,t),Jn(e,null),Jn(r.blueprint,null));const o=tr(t,e),i=t.injectorIndex;if(Zn(o)){const t=Gn(o),n=Wn(o,e),r=n[1].data;for(let o=0;o<8;o++)e[i+o]=n[t+o]|r[t+o]}return e[i+8]=o,i}function Jn(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Xn(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function tr(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;null!==o;){const t=o[1],e=t.type;if(r=2===e?t.declTNode:1===e?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function er(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(ee)&&(r=n[ee]),null==r&&(r=n[ee]=Qn++);const o=255&r,i=1<<o;e.data[t+(o>>5)]|=i}(t,e,n)}function nr(t,e,n){if(n&Bt.Optional)return t;Et(e,"NodeInjector")}function rr(t,e,n,r){if(n&Bt.Optional&&void 0===r&&(r=null),0==(n&(Bt.Self|Bt.Host))){const o=t[9],i=Rt(void 0);try{return o?o.get(e,r,n&Bt.Optional):Lt(e,r,n&Bt.Optional)}finally{Rt(i)}}return nr(r,e,n)}function or(t,e,n,r=Bt.Default,o){if(null!==t){const i=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(ee)?t[ee]:void 0;return"number"==typeof e?e>=0?255&e:sr:e}(n);if("function"==typeof i){if(!_n(e,t,r))return r&Bt.Host?nr(o,n,r):rr(e,n,r,o);try{const t=i(r);if(null!=t||r&Bt.Optional)return t;Et(n)}finally{En()}}else if("number"==typeof i){let o=null,s=Xn(t,e),u=-1,l=r&Bt.Host?e[16][6]:null;for((-1===s||r&Bt.SkipSelf)&&(u=-1===s?tr(t,e):e[s+8],-1!==u&&fr(r,!1)?(o=e[1],s=Gn(u),e=Wn(u,e)):s=-1);-1!==s;){const t=e[1];if(cr(i,s,t.data)){const t=ur(s,e,n,o,r,l);if(t!==ir)return t}u=e[s+8],-1!==u&&fr(r,e[1].data[s+8]===l)&&cr(i,s,e)?(o=t,s=Gn(u),e=Wn(u,e)):s=-1}}}return rr(e,n,r,o)}const ir={};function sr(){return new hr(Je(),Ye())}function ur(t,e,n,r,o,i){const s=e[1],u=s.data[t+8],l=lr(u,s,n,null==r?ve(u)&&qn:r!=s&&0!=(3&u.type),o&Bt.Host&&i===u);return null!==l?ar(e,s,l,u):ir}function lr(t,e,n,r,o){const i=t.providerIndexes,s=e.data,u=1048575&i,l=t.directiveStart,a=t.directiveEnd,c=i>>20,f=o?u+c:a;for(let t=r?u:u+c;t<f;t++){const e=s[t];if(t<l&&n===e||t>=l&&e.type===n)return t}if(o){const t=s[l];if(t&&we(t)&&t.type===n)return l}return null}function ar(t,e,n,r){let o=t[n];const i=e.data;if(o instanceof jn){const s=o;s.resolving&&function(t,e){const n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new Ct("200",`Circular dependency in DI detected for ${t}${n}`)}(bt(i[n]));const u=Yn(s.canSeeViewProviders);s.resolving=!0;const l=s.injectImpl?Rt(s.injectImpl):null;_n(t,r,Bt.Default);try{o=t[n]=s.factory(void 0,i,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(t,e,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=e.type.prototype;if(r){const r=Fe(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,r)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i))}(n,i[n],e)}finally{null!==l&&Rt(l),Yn(u),s.resolving=!1,En()}}return o}function cr(t,e,n){const r=1<<t;return!!(n[e+(t>>5)]&r)}function fr(t,e){return!(t&Bt.Self||t&Bt.Host&&e)}class hr{constructor(t,e){this._tNode=t,this._lView=e}get(t,e,n){return or(this._tNode,this._lView,t,n,e)}}function dr(t){return jt((()=>{const e=t.prototype.constructor,n=e[te]||pr(e),r=Object.prototype;let o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){const t=o[te]||pr(o);if(t&&t!==n)return t;o=Object.getPrototypeOf(o)}return t=>new t}))}function pr(t){return vt(t)?()=>{const e=pr(_t(t));return e&&e()}:be(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yr(t){return function(t,e){if("class"===e)return t.classes;if("style"===e)return t.styles;const n=t.attrs;if(n){const t=n.length;let r=0;for(;r<t;){const o=n[r];if(Hn(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<t&&"string"==typeof n[r];)r++;else{if(o===e)return n[r+1];r+=2}}}return null}(Je(),t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const gr="__annotations__",mr="__parameters__",Dr="__prop__metadata__";function _r(t,e,n,r,o){return jt((()=>{const i=vr(e);function s(...t){if(this instanceof s)return i.call(this,...t),this;const e=new s(...t);return function(n){o&&o(n,...t);return(n.hasOwnProperty(gr)?n[gr]:Object.defineProperty(n,gr,{value:[]})[gr]).push(e),r&&r(n),n}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s}))}function vr(t){return function(...e){if(t){const n=t(...e);for(const t in n)this[t]=n[t]}}}function Cr(t,e,n){return jt((()=>{const r=vr(e);function o(...t){if(this instanceof o)return r.apply(this,t),this;const e=new o(...t);return n.annotation=e,n;function n(t,n,r){const o=t.hasOwnProperty(mr)?t[mr]:Object.defineProperty(t,mr,{value:[]})[mr];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(e),t}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o}))}function wr(t,e,n,r){return jt((()=>{const o=vr(e);function i(...t){if(this instanceof i)return o.apply(this,t),this;const e=new i(...t);return function(n,o){const i=n.constructor,s=i.hasOwnProperty(Dr)?i[Dr]:Object.defineProperty(i,Dr,{value:{}})[Dr];s[o]=s.hasOwnProperty(o)&&s[o]||[],s[o].unshift(e),r&&r(n,o,...t)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=t,i.annotationCls=i,i}))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const br=Cr("Attribute",(t=>({attributeName:t,__NG_ELEMENT_ID__:()=>yr(t)})));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Er{constructor(t,e){this._desc=t,this.ngMetadataName="InjectionToken",this.ɵprov=void 0,"number"==typeof e?this.__NG_ELEMENT_ID__=e:void 0!==e&&(this.ɵprov=Ft({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new Er("AnalyzeForEntryComponents");class Ar{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Fr,xr;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Sr(t){const e=Wt.ng;if(e&&e.ɵcompilerFacade)return e.ɵcompilerFacade;throw new Error("JIT compiler unavailable")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */wr("ContentChildren",((t,e={})=>({selector:t,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:true,...e})),Ar),wr("ContentChild",((t,e={})=>({selector:t,first:!0,isViewQuery:!1,descendants:!0,...e})),Ar),wr("ViewChildren",((t,e={})=>({selector:t,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:true,...e})),Ar),wr("ViewChild",((t,e)=>({selector:t,first:!0,isViewQuery:!0,descendants:!0,...e})),Ar),function(t){t[t.Directive=0]="Directive",t[t.Component=1]="Component",t[t.Injectable=2]="Injectable",t[t.Pipe=3]="Pipe",t[t.NgModule=4]="NgModule"}(Fr||(Fr={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(xr||(xr={}));const kr=Function;function Ir(t){return"function"==typeof t}function Tr(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),Tr(r,e)):e!==t&&e.push(r)}return e}function Or(t,e){t.forEach((t=>Array.isArray(t)?Or(t,e):e(t)))}function Mr(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Pr(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function Br(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}function Nr(t,e,n){let r=Lr(t,e);return r>=0?t[1|r]=n:(r=~r,function(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(1===o)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;){const e=o-2;t[o]=t[e],o--}t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function Rr(t,e){const n=Lr(t,e);if(n>=0)return t[1|n]}function Lr(t,e){return function(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=t[i<<n];if(e===s)return i<<n;s>e?o=i:r=i+1}return~(o<<n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e,1)}const jr=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,Vr=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,Hr=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,$r=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;class Ur{constructor(t){this._reflect=t||Wt.Reflect}isReflectionEnabled(){return!0}factory(t){return(...e)=>new t(...e)}_zipTypesAndAnnotations(t,e){let n;n=Br(void 0===t?e.length:t.length);for(let r=0;r<n.length;r++)void 0===t?n[r]=[]:t[r]&&t[r]!=Object?n[r]=[t[r]]:n[r]=[],e&&null!=e[r]&&(n[r]=n[r].concat(e[r]));return n}_ownParameters(t,e){if(function(t){return jr.test(t)||$r.test(t)||Vr.test(t)&&!Hr.test(t)}(t.toString()))return null;if(t.parameters&&t.parameters!==e.parameters)return t.parameters;const n=t.ctorParameters;if(n&&n!==e.ctorParameters){const t="function"==typeof n?n():n,e=t.map((t=>t&&t.type)),r=t.map((t=>t&&zr(t.decorators)));return this._zipTypesAndAnnotations(e,r)}const r=t.hasOwnProperty(mr)&&t[mr],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",t);return o||r?this._zipTypesAndAnnotations(o,r):Br(t.length)}parameters(t){if(!Ir(t))return[];const e=Zr(t);let n=this._ownParameters(t,e);return n||e===Object||(n=this.parameters(e)),n||[]}_ownAnnotations(t,e){if(t.annotations&&t.annotations!==e.annotations){let e=t.annotations;return"function"==typeof e&&e.annotations&&(e=e.annotations),e}return t.decorators&&t.decorators!==e.decorators?zr(t.decorators):t.hasOwnProperty(gr)?t[gr]:null}annotations(t){if(!Ir(t))return[];const e=Zr(t),n=this._ownAnnotations(t,e)||[];return(e!==Object?this.annotations(e):[]).concat(n)}_ownPropMetadata(t,e){if(t.propMetadata&&t.propMetadata!==e.propMetadata){let e=t.propMetadata;return"function"==typeof e&&e.propMetadata&&(e=e.propMetadata),e}if(t.propDecorators&&t.propDecorators!==e.propDecorators){const e=t.propDecorators,n={};return Object.keys(e).forEach((t=>{n[t]=zr(e[t])})),n}return t.hasOwnProperty(Dr)?t[Dr]:null}propMetadata(t){if(!Ir(t))return{};const e=Zr(t),n={};if(e!==Object){const t=this.propMetadata(e);Object.keys(t).forEach((e=>{n[e]=t[e]}))}const r=this._ownPropMetadata(t,e);return r&&Object.keys(r).forEach((t=>{const e=[];n.hasOwnProperty(t)&&e.push(...n[t]),e.push(...r[t]),n[t]=e})),n}ownPropMetadata(t){return Ir(t)&&this._ownPropMetadata(t,Zr(t))||{}}hasLifecycleHook(t,e){return t instanceof kr&&e in t.prototype}guards(t){return{}}getter(t){return new Function("o","return o."+t+";")}setter(t){return new Function("o","v","return o."+t+" = v;")}method(t){return new Function("o","args",`if (!o.${t}) throw new Error('"${t}" is undefined');\n        return o.${t}.apply(o, args);`)}importUri(t){return"object"==typeof t&&t.filePath?t.filePath:`./${yt(t)}`}resourceUri(t){return`./${yt(t)}`}resolveIdentifier(t,e,n,r){return r}resolveEnum(t,e){return t[e]}}function zr(t){return t?t.map((t=>new(0,t.type.annotationCls)(...t.args?t.args:[]))):[]}function Zr(t){const e=t.prototype?Object.getPrototypeOf(t.prototype):null;return(e?e.constructor:null)||Object}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Gr={},Wr=/\n/gm,qr=dt({provide:String,useValue:dt});let Yr;function Qr(t){const e=Yr;return Yr=t,e}function Kr(t,e=Bt.Default){if(void 0===Yr)throw new Error("inject() must be called from an injection context");return null===Yr?Lt(t,void 0,e):Yr.get(t,e&Bt.Optional?null:void 0,e)}function Jr(t,e=Bt.Default){return(Nt||Kr)(_t(t),e)}function Xr(t){throw new Error("invalid")}function to(t){const e=[];for(let n=0;n<t.length;n++){const r=_t(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let t,n=Bt.Default;for(let e=0;e<r.length;e++){const o=r[e],i=o.__NG_DI_FLAG__;"number"==typeof i?-1===i?t=o.token:n|=i:t=o}e.push(Jr(t,n))}else e.push(Jr(r))}return e}function eo(t,e){return t.__NG_DI_FLAG__=e,t.prototype.__NG_DI_FLAG__=e,t}function no(t,e,n,r){const o=t.ngTempTokenPath;throw e.__source&&o.unshift(e.__source),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"ɵ"==t.charAt(1)?t.substr(2):t;let o=yt(e);if(Array.isArray(e))o=e.map(yt).join(" -> ");else if("object"==typeof e){let t=[];for(let n in e)if(e.hasOwnProperty(n)){let r=e[n];t.push(n+":"+("string"==typeof r?JSON.stringify(r):yt(r)))}o=`{${t.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${t.replace(Wr,"\n  ")}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */("\n"+t.message,o,n,r),t.ngTokenPath=o,t.ngTempTokenPath=null,t}const ro=eo(Cr("Inject",(t=>({token:t}))),-1),oo=eo(Cr("Optional"),8),io=eo(Cr("Self"),2),so=eo(Cr("SkipSelf"),4),uo=eo(Cr("Host"),1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let lo=null;function ao(){return lo=lo||new Ur}function co(t){return fo(ao().parameters(t))}function fo(t){return t.map((t=>function(t){const e={token:null,attribute:null,host:!1,optional:!1,self:!1,skipSelf:!1};if(Array.isArray(t)&&t.length>0)for(let n=0;n<t.length;n++){const r=t[n];if(void 0===r)continue;const o=Object.getPrototypeOf(r);if(r instanceof oo||"Optional"===o.ngMetadataName)e.optional=!0;else if(r instanceof so||"SkipSelf"===o.ngMetadataName)e.skipSelf=!0;else if(r instanceof io||"Self"===o.ngMetadataName)e.self=!0;else if(r instanceof uo||"Host"===o.ngMetadataName)e.host=!0;else if(r instanceof ro)e.token=r.token;else if(r instanceof br){if(void 0===r.attributeName)throw new Error("Attribute name must be defined.");e.attribute=r.attributeName}else e.token=r}else void 0===t||Array.isArray(t)&&0===t.length?e.token=null:e.token=t;return e}(t)))}let ho=new Map;const po=new Set;function yo(t){return!!(t.templateUrl&&!t.hasOwnProperty("template")||t.styleUrls&&t.styleUrls.length)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let go,mo;function Do(){if(void 0===go&&(go=null,Wt.trustedTypes))try{go=Wt.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return go}function _o(t){return Do()?.createHTML(t)||t}function vo(){if(void 0===mo&&(mo=null,Wt.trustedTypes))try{mo=Wt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return mo}function Co(t){return vo()?.createHTML(t)||t}function wo(t){return vo()?.createScript(t)||t}function bo(t){return vo()?.createScriptURL(t)||t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Eo{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}function Ao(t){return t instanceof Eo?t.changingThisBreaksApplicationSecurity:t}function Fo(t,e){const n=function(t){return t instanceof Eo&&t.getTypeName()||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}function xo(t){const e=new ko(t);return function(){try{return!!(new window.DOMParser).parseFromString(_o(""),"text/html")}catch{return!1}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */()?new So(e):e}class So{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const e=(new window.DOMParser).parseFromString(_o(t),"text/html").body;return null===e?this.inertDocumentHelper.getInertBodyElement(t):(e.removeChild(e.firstChild),e)}catch{return null}}}class ko{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const t=this.inertDocument.createElement("html");this.inertDocument.appendChild(t);const e=this.inertDocument.createElement("body");t.appendChild(e)}}getInertBodyElement(t){const e=this.inertDocument.createElement("template");if("content"in e)return e.innerHTML=_o(t),e;const n=this.inertDocument.createElement("body");return n.innerHTML=_o(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(n),n}stripCustomNsAttrs(t){const e=t.attributes;for(let n=e.length-1;0<n;n--){const r=e.item(n).name;"xmlns:ns1"!==r&&0!==r.indexOf("ns1:")||t.removeAttribute(r)}let n=t.firstChild;for(;n;)n.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(n),n=n.nextSibling}}const Io=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,To=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Oo(t){return(t=String(t)).match(Io)||t.match(To)?t:"unsafe:"+t}function Mo(t){return(t=String(t)).split(",").map((t=>Oo(t.trim()))).join(", ")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Po(t){const e={};for(const n of t.split(","))e[n]=!0;return e}function Bo(...t){const e={};for(const n of t)for(const t in n)n.hasOwnProperty(t)&&(e[t]=!0);return e}const No=Po("area,br,col,hr,img,wbr"),Ro=Po("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Lo=Po("rp,rt"),jo=Bo(Lo,Ro),Vo=Bo(Ro,Po("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Ho=Bo(Lo,Po("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),$o=Bo(No,Vo,Ho,jo),Uo=Po("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),zo=Po("srcset"),Zo=Po("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Go=Po("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),Wo=Bo(Uo,zo,Zo,Go),qo=Po("script,style,template");class Yo{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(t){let e=t.firstChild,n=!0;for(;e;)if(e.nodeType===Node.ELEMENT_NODE?n=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,n&&e.firstChild)e=e.firstChild;else for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let t=this.checkClobberedElement(e,e.nextSibling);if(t){e=t;break}e=this.checkClobberedElement(e,e.parentNode)}return this.buf.join("")}startElement(t){const e=t.nodeName.toLowerCase();if(!$o.hasOwnProperty(e))return this.sanitizedSomething=!0,!qo.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);const n=t.attributes;for(let t=0;t<n.length;t++){const e=n.item(t),r=e.name,o=r.toLowerCase();if(!Wo.hasOwnProperty(o)){this.sanitizedSomething=!0;continue}let i=e.value;Uo[o]&&(i=Oo(i)),zo[o]&&(i=Mo(i)),this.buf.push(" ",r,'="',Jo(i),'"')}return this.buf.push(">"),!0}endElement(t){const e=t.nodeName.toLowerCase();$o.hasOwnProperty(e)&&!No.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(t){this.buf.push(Jo(t))}checkClobberedElement(t,e){if(e&&(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);return e}}const Qo=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ko=/([^\#-~ |!])/g;function Jo(t){return t.replace(/&/g,"&amp;").replace(Qo,(function(t){return"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";"})).replace(Ko,(function(t){return"&#"+t.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Xo;function ti(t){return"content"in t&&function(t){return t.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===t.nodeName}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t)?t.content:null}var ei;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ni(t){const e=ci();return e?Co(e.sanitize(ei.HTML,t)||""):Fo(t,"HTML")?Co(Ao(t)):function(t,e){let n=null;try{Xo=Xo||xo(t);let r=e?String(e):"";n=Xo.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=Xo.getInertBodyElement(r)}while(r!==i);return _o((new Yo).sanitizeChildren(ti(n)||n))}finally{if(n){const t=ti(n)||n;for(;t.firstChild;)t.removeChild(t.firstChild)}}}(Ie(),wt(t))}function ri(t){const e=ci();return e?e.sanitize(ei.STYLE,t)||"":Fo(t,"Style")?Ao(t):wt(t)}function oi(t){const e=ci();return e?e.sanitize(ei.URL,t)||"":Fo(t,"URL")?Ao(t):Oo(wt(t))}function ii(t){const e=ci();if(e)return bo(e.sanitize(ei.RESOURCE_URL,t)||"");if(Fo(t,"ResourceURL"))return bo(Ao(t));throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)")}function si(t){const e=ci();if(e)return wo(e.sanitize(ei.SCRIPT,t)||"");if(Fo(t,"Script"))return wo(Ao(t));throw new Error("unsafe value used in a script context")}function ui(t){return _o(t[0])}function li(t){return function(t){return Do()?.createScriptURL(t)||t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t[0])}function ai(t,e,n){return function(t,e){return"src"===e&&("embed"===t||"frame"===t||"iframe"===t||"media"===t||"script"===t)||"href"===e&&("base"===t||"link"===t)?ii:oi}(e,n)(t)}function ci(){const t=Ye();return t&&t[12]}!function(t){t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL"}(ei||(ei={}));function fi(t,e){t.__ngContext__=e}function hi(t){const e=function(t){return t.__ngContext__||null}(t);return e?Array.isArray(e)?e:e.lView:null}function di(t){return t.ngOriginalError}function pi(t,...e){t.error(...e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class yi{constructor(){this._console=console}handleError(t){const e=this._findOriginalError(t),n=function(t){return t&&t.ngErrorLogger||pi}(t);n(this._console,"ERROR",t),e&&n(this._console,"ORIGINAL ERROR",e)}_findOriginalError(t){let e=t&&di(t);for(;e&&di(e);)e=di(e);return e||null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const gi=/^>|^->|<!--|-->|--!>|<!-$/g,mi=/(<|>)/;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Di=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Wt);function _i(t){return t.ownerDocument.defaultView}function vi(t){return t.ownerDocument}function Ci(t){return t.ownerDocument.body}function wi(t){return t instanceof Function?t():t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var bi;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Ei;function Ai(t,e){return Ei(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Fi(t){const e=t[3];return De(e)?e[3]:e}function xi(t){return ki(t[13])}function Si(t){return ki(t[4])}function ki(t){for(;null!==t&&!De(t);)t=t[4];return t}function Ii(t,e,n,r,o){if(null!=r){let i,s=!1;De(r)?i=r:me(r)&&(s=!0,r=r[0]);const u=Pe(r);0===t&&null!==n?null==o?Ui(e,n,u):$i(e,n,u,o||null,!0):1===t&&null!==n?$i(e,n,u,o||null,!0):2===t?es(e,u,s):3===t&&e.destroyNode(u),null!=i&&function(t,e,n,r,o){const i=n[7],s=Pe(n);i!==s&&Ii(e,t,r,i,o);for(let o=10;o<n.length;o++){const s=n[o];rs(s[1],s,t,e,r,i)}}(e,t,i,n,o)}}function Ti(t,e){return Oe(t)?t.createText(e):t.createTextNode(e)}function Oi(t,e,n){Oe(t)?t.setValue(e,n):e.textContent=n}function Mi(t,e){return t.createComment(function(t){return t.replace(gi,(t=>t.replace(mi,"​$1​")))}(e))}function Pi(t,e,n){return Oe(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Bi(t,e,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=e),r<i-10?(e[4]=n[o],Mr(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const s=e[17];null!==s&&n!==s&&function(t,e){const n=t[9],r=e[3][3][16];e[16]!==r&&(t[2]=!0);null===n?t[9]=[e]:n.push(e)}(s,e);const u=e[19];null!==u&&u.insertView(t),e[2]|=128}function Ni(t,e){const n=t[9],r=n.indexOf(e),o=e[3];1024&e[2]&&(e[2]&=-1025,ze(o,-1)),n.splice(r,1)}function Ri(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const i=r[17];null!==i&&i!==t&&Ni(i,r),e>0&&(t[n-1][4]=r[4]);const s=Pr(t,10+e);rs(r[1],o=r,o[11],2,null,null),o[0]=null,o[6]=null;const u=s[19];null!==u&&u.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-129}var o;return r}function Li(t,e){if(!(256&e[2])){const n=e[11];Oe(n)&&n.destroyNode&&rs(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return ji(t[1],t);for(;e;){let n=null;if(me(e))n=e[13];else{const t=e[10];t&&(n=t)}if(!n){for(;e&&!e[4]&&e!==t;)me(e)&&ji(e[1],e),e=e[3];null===e&&(e=t),me(e)&&ji(e[1],e),n=e&&e[4]}e=n}}(e)}}function ji(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let t=0;t<n.length;t+=2){const r=e[n[t]];if(!(r instanceof jn)){const e=n[t+1];if(Array.isArray(e))for(let t=0;t<e.length;t+=2){const n=r[e[t]],o=e[t+1];try{o.call(n)}finally{}}else try{e.call(r)}finally{}}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let o=-1;if(null!==n)for(let t=0;t<n.length-1;t+=2)if("string"==typeof n[t]){const i=n[t+1],s="function"==typeof i?i(e):Pe(e[i]),u=r[o=n[t+2]],l=n[t+3];"boolean"==typeof l?s.removeEventListener(n[t],u,l):l>=0?r[o=l]():r[o=-l].unsubscribe(),t+=2}else{const e=r[o=n[t+1]];n[t].call(e)}if(null!==r){for(let t=o+1;t<r.length;t++){(0,r[t])()}e[7]=null}}(t,e),1===e[1].type&&Oe(e[11])&&e[11].destroy();const n=e[17];if(null!==n&&De(e[3])){n!==e[3]&&Ni(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function Vi(t,e,n){return Hi(t,e.parent,n)}function Hi(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const e=t.data[r.directiveStart].encapsulation;if(e===$t.None||e===$t.Emulated)return null}return Ne(r,n)}function $i(t,e,n,r,o){Oe(t)?t.insertBefore(e,n,r,o):e.insertBefore(n,r,o)}function Ui(t,e,n){Oe(t)?t.appendChild(e,n):e.appendChild(n)}function zi(t,e,n,r,o){null!==r?$i(t,e,n,r,o):Ui(t,e,n)}function Zi(t,e){return Oe(t)?t.parentNode(e):e.parentNode}function Gi(t,e,n){return Yi(t,e,n)}function Wi(t,e,n){return 40&t.type?Ne(t,n):null}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(bi||(bi={}));let qi,Yi=Wi;function Qi(t,e){Yi=t,qi=e}function Ki(t,e,n,r){const o=Vi(t,r,e),i=e[11],s=Gi(r.parent||e[6],r,e);if(null!=o)if(Array.isArray(n))for(let t=0;t<n.length;t++)zi(i,o,n[t],s,!1);else zi(i,o,n,s,!1);void 0!==qi&&qi(i,r,e,n,o)}function Ji(t,e){if(null!==e){const n=e.type;if(3&n)return Ne(e,t);if(4&n)return ts(-1,t[e.index]);if(8&n){const n=e.child;if(null!==n)return Ji(t,n);{const n=t[e.index];return De(n)?ts(-1,n):Pe(n)}}if(32&n){return Ai(e,t)()||Pe(t[e.index])}{const n=Xi(t,e);if(null!==n){if(Array.isArray(n))return n[0];return Ji(Fi(t[16]),n)}return Ji(t,e.next)}}return null}function Xi(t,e){if(null!==e){const n=t[16][6],r=e.projection;return n.projection[r]}return null}function ts(t,e){const n=10+t+1;if(n<e.length){const t=e[n],r=t[1].firstChild;if(null!==r)return Ji(t,r)}return e[7]}function es(t,e,n){const r=Zi(t,e);r&&function(t,e,n,r){Oe(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}function ns(t,e,n,r,o,i,s){for(;null!=n;){const u=r[n.index],l=n.type;if(s&&0===e&&(u&&fi(Pe(u),r),n.flags|=4),64!=(64&n.flags))if(8&l)ns(t,e,n.child,r,o,i,!1),Ii(e,t,o,u,i);else if(32&l){const s=Ai(n,r);let l;for(;l=s();)Ii(e,t,o,l,i);Ii(e,t,o,u,i)}else 16&l?os(t,e,r,n,o,i):Ii(e,t,o,u,i);n=s?n.projectionNext:n.next}}function rs(t,e,n,r,o,i){ns(n,r,t.firstChild,e,o,i,!1)}function os(t,e,n,r,o,i){const s=n[16],u=s[6].projection[r.projection];if(Array.isArray(u))for(let n=0;n<u.length;n++){Ii(e,t,o,u[n],i)}else{ns(t,e,u,s[3],o,i,!0)}}function is(t,e,n){Oe(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function ss(t,e,n){Oe(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function us(t,e,n){let r=t.length;for(;;){const o=t.indexOf(e,n);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const n=e.length;if(o+n===r||t.charCodeAt(o+n)<=32)return o}n=o+1}}function ls(t,e,n){let r=0;for(;r<t.length;){let o=t[r++];if(n&&"class"===o){if(o=t[r],-1!==us(o.toLowerCase(),e,0))return!0}else if(1===o){for(;r<t.length&&"string"==typeof(o=t[r++]);)if(o.toLowerCase()===e)return!0;return!1}}return!1}function as(t){return 4===t.type&&"ng-template"!==t.value}function cs(t,e,n){return e===(4!==t.type||n?t.value:"ng-template")}function fs(t,e,n){let r=4;const o=t.attrs||[],i=function(t){for(let e=0;e<t.length;e++){if(Hn(t[e]))return e}return t.length}(o);let s=!1;for(let u=0;u<e.length;u++){const l=e[u];if("number"!=typeof l){if(!s)if(4&r){if(r=2|1&r,""!==l&&!cs(t,l,n)||""===l&&1===e.length){if(hs(r))return!1;s=!0}}else{const a=8&r?l:e[++u];if(8&r&&null!==t.attrs){if(!ls(t.attrs,a,n)){if(hs(r))return!1;s=!0}continue}const c=ds(8&r?"class":l,o,as(t),n);if(-1===c){if(hs(r))return!1;s=!0;continue}if(""!==a){let t;t=c>i?"":o[c+1].toLowerCase();const e=8&r?t:null;if(e&&-1!==us(e,a,0)||2&r&&a!==t){if(hs(r))return!1;s=!0}}}}else{if(!s&&!hs(r)&&!hs(l))return!1;if(s&&hs(l))continue;s=!1,r=l|1&r}}return hs(r)||s}function hs(t){return 0==(1&t)}function ds(t,e,n,r){if(null===e)return-1;let o=0;if(r||!n){let n=!1;for(;o<e.length;){const r=e[o];if(r===t)return o;if(3===r||6===r)n=!0;else{if(1===r||2===r){let t=e[++o];for(;"string"==typeof t;)t=e[++o];continue}if(4===r)break;if(0===r){o+=4;continue}}o+=n?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function ps(t,e,n=!1){for(let r=0;r<e.length;r++)if(fs(t,e[r],n))return!0;return!1}function ys(t,e){t:for(let n=0;n<e.length;n++){const r=e[n];if(t.length===r.length){for(let e=0;e<t.length;e++)if(t[e]!==r[e])continue t;return!0}}return!1}function gs(t,e){return t?":not("+e.trim()+")":e}function ms(t){let e=t[0],n=1,r=2,o="",i=!1;for(;n<t.length;){let s=t[n];if("string"==typeof s)if(2&r){const e=t[++n];o+="["+s+(e.length>0?'="'+e+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||hs(s)||(e+=gs(i,o),o=""),r=s,i=i||!hs(r);n++}return""!==o&&(e+=gs(i,o)),e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ds={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _s(t){vs(Qe(),Ye(),xn()+t,on())}function vs(t,e,n,r){if(!r){if(3==(3&e[2])){const r=t.preOrderCheckHooks;null!==r&&Pn(e,r,n)}else{const r=t.preOrderHooks;null!==r&&Bn(e,r,0,n)}}Sn(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Cs(t,e){return t<<17|e<<2}function ws(t){return t>>17&32767}function bs(t){return 2|t}function Es(t){return(131068&t)>>2}function As(t,e){return-131069&t|e<<2}function Fs(t){return 1|t}function xs(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=t.data[i];mn(o),n.contentQueries(2,e[i],i)}}}function Ss(t,e,n,r,o,i,s,u,l,a){const c=e.blueprint.slice();return c[0]=o,c[2]=140|r,Ue(c),c[3]=c[15]=t,c[8]=n,c[10]=s||t&&t[10],c[11]=u||t&&t[11],c[12]=l||t&&t[12]||null,c[9]=a||t&&t[9]||null,c[6]=i,c[16]=2==e.type?t[16]:c,c}function ks(t,e,n,r,o){let i=t.data[e];if(null===i)i=Is(t,e,n,r,o),Ze.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const t=tn();i.injectorIndex=null===t?-1:t.injectorIndex}return en(i,!0),i}function Is(t,e,n,r,o){const i=Xe(),s=nn(),u=s?i:i&&i.parent,l=t.data[e]=function(t,e,n,r,o,i){let s=e?e.injectorIndex:-1;return{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,u,n,e,r,o);return null===t.firstChild&&(t.firstChild=l),null!==i&&(s?null==i.child&&null!==l.parent&&(i.child=l):null===i.next&&(i.next=l)),l}function Ts(t,e,n,r){if(0===n)return-1;const o=e.length;for(let o=0;o<n;o++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Os(t,e,n){vn(e);try{const r=t.viewQuery;null!==r&&cu(1,r,n);const o=t.template;null!==o&&Bs(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&xs(t,e),t.staticViewQueries&&cu(2,t.viewQuery,n);const i=t.components;null!==i&&function(t,e){for(let n=0;n<e.length;n++)iu(t,e[n])}(e,i)}catch(e){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),e}finally{e[2]&=-5,An()}}function Ms(t,e,n,r){const o=e[2];if(256==(256&o))return;vn(e);const i=on();try{Ue(e),an(t.bindingStartIndex),null!==n&&Bs(t,e,n,2,r);const s=3==(3&o);if(!i)if(s){const n=t.preOrderCheckHooks;null!==n&&Pn(e,n,null)}else{const n=t.preOrderHooks;null!==n&&Bn(e,n,0,null),Nn(e,0)}if(function(t){for(let e=xi(t);null!==e;e=Si(e)){if(!e[2])continue;const t=e[9];for(let e=0;e<t.length;e++){const n=t[e],r=n[3];0==(1024&n[2])&&ze(r,1),n[2]|=1024}}}(e),function(t){for(let e=xi(t);null!==e;e=Si(e))for(let t=10;t<e.length;t++){const n=e[t],r=n[1];He(n)&&Ms(r,n,r.template,n[8])}}(e),null!==t.contentQueries&&xs(t,e),!i)if(s){const n=t.contentCheckHooks;null!==n&&Pn(e,n)}else{const n=t.contentHooks;null!==n&&Bn(e,n,1),Nn(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let t=0;t<n.length;t++){const r=n[t];if(r<0)Sn(~r);else{const o=r,i=n[++t],s=n[++t];dn(i,o),s(2,e[o])}}}finally{Sn(-1)}}(t,e);const u=t.components;null!==u&&function(t,e){for(let n=0;n<e.length;n++)ru(t,e[n])}(e,u);const l=t.viewQuery;if(null!==l&&cu(2,l,r),!i)if(s){const n=t.viewCheckHooks;null!==n&&Pn(e,n)}else{const n=t.viewHooks;null!==n&&Bn(e,n,2),Nn(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),i||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,ze(e[3],-1))}finally{An()}}function Ps(t,e,n,r){const o=e[10],i=!on(),s=Ve(e);try{i&&!s&&o.begin&&o.begin(),s&&Os(t,e,r),Ms(t,e,n,r)}finally{i&&!s&&o.end&&o.end()}}function Bs(t,e,n,r,o){const i=xn(),s=2&r;try{Sn(-1),s&&e.length>20&&vs(t,e,20,on());n(r,o)}finally{Sn(i)}}function Ns(t,e,n){if(_e(e)){const r=e.directiveStart,o=e.directiveEnd;for(let e=r;e<o;e++){const r=t.data[e];r.contentQueries&&r.contentQueries(1,n[e],e)}}}function Rs(t,e,n){Ge()&&(function(t,e,n,r){const o=n.directiveStart,i=n.directiveEnd;t.firstCreatePass||Kn(n,e);fi(r,e);const s=n.initialInputs;for(let r=o;r<i;r++){const i=t.data[r],u=we(i);u&&Ks(e,n,i);const l=ar(e,t,r,n);if(fi(l,e),null!==s&&tu(e,r-o,l,i,n,s),u){je(n.index,e)[8]=l}}}(t,e,n,Ne(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,o=n.directiveEnd;t.firstCreatePass;const i=n.index,s=Ze.lFrame.currentDirectiveIndex;try{Sn(i);for(let n=r;n<o;n++){const r=t.data[n],o=e[n];pn(n),null===r.hostBindings&&0===r.hostVars&&null===r.hostAttrs||Gs(r,o)}}finally{Sn(-1),pn(s)}}(t,e,n))}function Ls(t,e,n=Ne){const r=e.localNames;if(null!==r){let o=e.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],u=-1===s?n(e,t):t[s];t[o++]=u}}}function js(t){const e=t.tView;if(null===e||e.incompleteFirstPass){const e=null;return t.tView=Vs(1,e,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts)}return e}function Vs(t,e,n,r,o,i,s,u,l,a){const c=20+r,f=c+o,h=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:Ds);return n}(c,f),d="function"==typeof a?a():a;return h[1]={type:t,blueprint:h,template:n,queries:null,viewQuery:u,declTNode:e,data:h.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:l,consts:d,incompleteFirstPass:!1}}function Hs(t,e,n,r){const o=hu(e);null===n?o.push(r):(o.push(n),t.firstCreatePass&&du(t).push(r,o.length-1))}function $s(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){n=null===n?{}:n;const o=t[r];n.hasOwnProperty(r)?n[r].push(e,o):n[r]=[e,o]}return n}function Us(t,e,n,r,o,i,s,u){const l=Ne(e,n);let a,c=e.inputs;var f;!u&&null!=c&&(a=c[r])?(gu(t,n,a,r,o),ve(e)&&function(t,e){const n=je(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type?(r="class"===(f=r)?"className":"for"===f?"htmlFor":"formaction"===f?"formAction":"innerHtml"===f?"innerHTML":"readonly"===f?"readOnly":"tabindex"===f?"tabIndex":f,o=null!=s?s(o,e.value||"",r):o,Oe(i)?i.setProperty(l,r,o):$n(r)||(l.setProperty?l.setProperty(r,o):l[r]=o)):e.type}function zs(t,e,n,r){let o=!1;if(Ge()){const i=function(t,e,n){const r=t.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];ps(n,s.selectors,!1)&&(o||(o=[]),er(Kn(n,e),t,s.type),we(s)?(Ws(t,n),o.unshift(s)):o.push(s))}return o}(t,e,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Ys(n,t.data.length,i.length);for(let t=0;t<i.length;t++){const e=i[t];e.providersResolver&&e.providersResolver(e)}let r=!1,u=!1,l=Ts(t,e,i.length,null);for(let o=0;o<i.length;o++){const a=i[o];n.mergedAttrs=Un(n.mergedAttrs,a.hostAttrs),Qs(t,n,e,l,a),qs(l,a,s),null!==a.contentQueries&&(n.flags|=8),null===a.hostBindings&&null===a.hostAttrs&&0===a.hostVars||(n.flags|=128);const c=a.type.prototype;!r&&(c.ngOnChanges||c.ngOnInit||c.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),r=!0),u||!c.ngOnChanges&&!c.ngDoCheck||((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),u=!0),l++}!function(t,e){const n=e.directiveStart,r=e.directiveEnd,o=t.data,i=e.attrs,s=[];let u=null,l=null;for(let t=n;t<r;t++){const n=o[t],r=n.inputs,a=null===i||as(e)?null:eu(r,i);s.push(a),u=$s(r,t,u),l=$s(n.outputs,t,l)}null!==u&&(u.hasOwnProperty("class")&&(e.flags|=16),u.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=s,e.inputs=u,e.outputs=l}(t,n)}s&&function(t,e,n){if(e){const r=t.localNames=[];for(let t=0;t<e.length;t+=2){const o=n[e[t+1]];if(null==o)throw new Ct("301",`Export of name '${e[t+1]}' not found!`);r.push(e[t],o)}}}(n,r,s)}return n.mergedAttrs=Un(n.mergedAttrs,n.attrs),o}function Zs(t,e,n,r,o,i){const s=i.hostBindings;if(s){let n=t.hostBindingOpCodes;null===n&&(n=t.hostBindingOpCodes=[]);const i=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(n)!=i&&n.push(i),n.push(r,o,s)}}function Gs(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function Ws(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function qs(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;we(e)&&(n[""]=t)}}function Ys(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Qs(t,e,n,r,o){t.data[r]=o;const i=o.factory||(o.factory=be(o.type)),s=new jn(i,we(o),null);t.blueprint[r]=s,n[r]=s,Zs(t,e,0,r,Ts(t,n,o.hostVars,Ds),o)}function Ks(t,e,n){const r=Ne(e,t),o=js(n),i=t[10],s=su(t,Ss(t,o,null,n.onPush?64:16,r,e,i,i.createRenderer(r,n),null,null));t[e.index]=s}function Js(t,e,n,r,o,i){const s=Ne(t,e);Xs(e[11],s,i,t.value,n,r,o)}function Xs(t,e,n,r,o,i,s){if(null==i)Oe(t)?t.removeAttribute(e,o,n):e.removeAttribute(o);else{const u=null==s?wt(i):s(i,r||"",o);Oe(t)?t.setAttribute(e,o,u,n):n?e.setAttributeNS(n,o,u):e.setAttribute(o,u)}}function tu(t,e,n,r,o,i){const s=i[e];if(null!==s){const t=r.setInput;for(let e=0;e<s.length;){const o=s[e++],i=s[e++],u=s[e++];null!==t?r.setInput(n,u,o,i):n[i]=u}}}function eu(t,e){let n=null,r=0;for(;r<e.length;){const o=e[r];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,t[o],e[r+1])),r+=2}else r+=2;else r+=4}return n}function nu(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function ru(t,e){const n=je(e,t);if(He(n)){const t=n[1];80&n[2]?Ms(t,n,t.template,n[8]):n[5]>0&&ou(n)}}function ou(t){for(let e=xi(t);null!==e;e=Si(e))for(let t=10;t<e.length;t++){const n=e[t];if(1024&n[2]){const t=n[1];Ms(t,n,t.template,n[8])}else n[5]>0&&ou(n)}const e=t[1].components;if(null!==e)for(let n=0;n<e.length;n++){const r=je(e[n],t);He(r)&&r[5]>0&&ou(r)}}function iu(t,e){const n=je(e,t),r=n[1];!function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])}(r,n),Os(r,n,n[8])}function su(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function uu(t){for(;t;){t[2]|=64;const e=Fi(t);if(0!=(512&t[2])&&!e)return t;t=e}return null}function lu(t,e,n){const r=e[10];r.begin&&r.begin();try{Ms(t,e,t.template,n)}catch(t){throw yu(e,t),t}finally{r.end&&r.end()}}function au(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=hi(n),o=r[1];Ps(o,r,o.template,n)}}(t[8])}function cu(t,e,n){mn(0),e(t,n)}const fu=Promise.resolve(null);function hu(t){return t[7]||(t[7]=[])}function du(t){return t.cleanup||(t.cleanup=[])}function pu(t,e,n){return(null===t||we(t))&&(n=function(t){for(;Array.isArray(t);){if("object"==typeof t[1])return t;t=t[0]}return null}(n[e.index])),n[11]}function yu(t,e){const n=t[9],r=n?n.get(yi,null):null;r&&r.handleError(e)}function gu(t,e,n,r,o){for(let i=0;i<n.length;){const s=n[i++],u=n[i++],l=e[s],a=t.data[s];null!==a.setInput?a.setInput(l,o,r,u):l[u]=o}}function mu(t,e,n){const r=Be(e,t);Oi(t[11],r,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Du(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,i=0;if(null!==e)for(let t=0;t<e.length;t++){const n=e[t];if("number"==typeof n)i=n;else if(1==i)o=gt(o,n);else if(2==i){r=gt(r,n+": "+e[++t]+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _u=new Er("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class vu{get(t,e=Gr){if(e===Gr){const e=new Error(`NullInjectorError: No provider for ${yt(t)}!`);throw e.name="NullInjectorError",e}return e}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Cu=new Er("Set Injector scope."),wu={},bu={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Eu;function Au(){return void 0===Eu&&(Eu=new vu),Eu}function Fu(t,e=null,n=null,r){const o=xu(t,e,n,r);return o._resolveInjectorDefTypes(),o}function xu(t,e=null,n=null,r){return new Su(t,n,e||Au(),r)}class Su{constructor(t,e,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const o=[];e&&Or(e,(n=>this.processProvider(n,t,e))),Or([t],(t=>this.processInjectorType(t,[],o))),this.records.set(_u,Tu(void 0,this));const i=this.records.get(Cu);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof t?null:yt(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach((t=>t.ngOnDestroy()))}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,e=Gr,n=Bt.Default){this.assertNotDestroyed();const r=Qr(this),o=Rt(void 0);try{if(!(n&Bt.SkipSelf)){let e=this.records.get(t);if(void 0===e){const n=("function"==typeof(i=t)||"object"==typeof i&&i instanceof Er)&&St(t);e=n&&this.injectableDefInScope(n)?Tu(ku(t),wu):null,this.records.set(t,e)}if(null!=e)return this.hydrate(t,e)}const s=n&Bt.Self?Au():this.parent;return e=n&Bt.Optional&&e===Gr?null:e,s.get(t,e)}catch(e){if("NullInjectorError"===e.name){if((e.ngTempTokenPath=e.ngTempTokenPath||[]).unshift(yt(t)),r)throw e;return no(e,t,"R3InjectorError",this.source)}throw e}finally{Rt(o),Qr(r)}var i;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach((t=>this.get(t)))}toString(){const t=[];return this.records.forEach(((e,n)=>t.push(yt(n)))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,e,n){if(!(t=_t(t)))return!1;let r=It(t);const o=null==r&&t.ngModule||void 0,i=void 0===o?t:o,s=-1!==n.indexOf(i);if(void 0!==o&&(r=It(o)),null==r)return!1;if(null!=r.imports&&!s){let t;n.push(i);try{Or(r.imports,(r=>{this.processInjectorType(r,e,n)&&(void 0===t&&(t=[]),t.push(r))}))}finally{}if(void 0!==t)for(let e=0;e<t.length;e++){const{ngModule:n,providers:r}=t[e];Or(r,(t=>this.processProvider(t,n,r||Yt)))}}this.injectorDefTypes.add(i);const u=be(i)||(()=>new i);this.records.set(i,Tu(u,wu));const l=r.providers;if(null!=l&&!s){const e=t;Or(l,(t=>this.processProvider(t,e,l)))}return void 0!==o&&void 0!==t.providers}processProvider(t,e,n){let r=Mu(t=_t(t))?t:_t(t&&t.provide);const o=function(t,e,n){if(Ou(t))return Tu(void 0,t.useValue);return Tu(Iu(t),wu)}(t);if(Mu(t)||!0!==t.multi)this.records.get(r);else{let e=this.records.get(r);e||(e=Tu(void 0,wu,!0),e.factory=()=>to(e.multi),this.records.set(r,e)),r=t,e.multi.push(t)}this.records.set(r,o)}hydrate(t,e){var n;return e.value===wu&&(e.value=bu,e.value=e.factory()),"object"==typeof e.value&&e.value&&(null!==(n=e.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy)&&this.onDestroy.add(e.value),e.value}injectableDefInScope(t){if(!t.providedIn)return!1;const e=_t(t.providedIn);return"string"==typeof e?"any"===e||e===this.scope:this.injectorDefTypes.has(e)}}function ku(t){const e=St(t),n=null!==e?e.factory:be(t);if(null!==n)return n;if(t instanceof Er)throw new Error(`Token ${yt(t)} is missing a ɵprov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const n=Br(e,"?");throw new Error(`Can't resolve all parameters for ${yt(t)}: (${n.join(", ")}).`)}const n=function(t){const e=t&&(t[Tt]||t[Mt]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function Iu(t,e,n){let r;if(Mu(t)){const e=_t(t);return be(e)||ku(e)}if(Ou(t))r=()=>_t(t.useValue);else if((o=t)&&o.useFactory)r=()=>t.useFactory(...to(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>Jr(_t(t.useExisting));else{const e=_t(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return be(e)||ku(e);r=()=>new e(...to(t.deps))}var o;return r}function Tu(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Ou(t){return null!==t&&"object"==typeof t&&qr in t}function Mu(t){return"function"==typeof t}class Pu{static create(t,e){if(Array.isArray(t))return Fu({name:""},e,t,"");{const e=t.name??"";return Fu({name:e},t.parent,t.providers,e)}}}function Bu(t,e,n,r,o){const i=n[1],s=function(t,e,n){const r=Je();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Qs(t,r,e,Ts(t,e,1,null),n));const o=ar(e,t,r.directiveStart,r);fi(o,e);const i=Ne(r,e);return i&&fi(i,e),o}(i,n,e);if(r.components.push(s),t[8]=s,o&&o.forEach((t=>t(s,e))),e.contentQueries){const t=Je();e.contentQueries(1,s,t.directiveStart)}const u=Je();if(i.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){Sn(u.index);Zs(n[1],u,0,u.directiveStart,u.directiveEnd,e),Gs(e,s)}return s}function Nu(t,e){Mn(hi(t)[1],Je())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ru(t){return Object.getPrototypeOf(t.prototype).constructor}function Lu(t){let e=Ru(t.type),n=!0;const r=[t];for(;e;){let o;if(we(t))o=e.ɵcmp||e.ɵdir;else{if(e.ɵcmp)throw new Error("Directives cannot inherit Components");o=e.ɵdir}if(o){if(n){r.push(o);const e=t;e.inputs=ju(t.inputs),e.declaredInputs=ju(t.declaredInputs),e.outputs=ju(t.outputs);const n=o.hostBindings;n&&$u(t,n);const i=o.viewQuery,s=o.contentQueries;if(i&&Vu(t,i),s&&Hu(t,s),pt(t.inputs,o.inputs),pt(t.declaredInputs,o.declaredInputs),pt(t.outputs,o.outputs),we(o)&&o.data.animation){const e=t.data;e.animation=(e.animation||[]).concat(o.data.animation)}}const e=o.features;if(e)for(let r=0;r<e.length;r++){const o=e[r];o&&o.ngInherit&&o(t),o===Lu&&(n=!1)}}e=Object.getPrototypeOf(e)}!function(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const o=t[r];o.hostVars=e+=o.hostVars,o.hostAttrs=Un(o.hostAttrs,n=Un(n,o.hostAttrs))}}(r)}function ju(t){return t===qt?{}:t===Yt?[]:t}function Vu(t,e){const n=t.viewQuery;t.viewQuery=n?(t,r)=>{e(t,r),n(t,r)}:e}function Hu(t,e){const n=t.contentQueries;t.contentQueries=n?(t,r,o)=>{e(t,r,o),n(t,r,o)}:e}function $u(t,e){const n=t.hostBindings;t.hostBindings=n?(t,r)=>{e(t,r),n(t,r)}:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Pu.THROW_IF_NOT_FOUND=Gr,Pu.NULL=new vu,Pu.ɵprov=Ft({token:Pu,providedIn:"any",factory:()=>Jr(_u)}),Pu.__NG_ELEMENT_ID__=-1;const Uu=["providersResolver"],zu=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function Zu(t){let e,n=Ru(t.type);e=we(t)?n.ɵcmp:n.ɵdir;const r=t;for(const t of Uu)r[t]=e[t];if(we(e))for(const t of zu)r[t]=e[t]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Gu=null;function Wu(){if(!Gu){const t=Wt.Symbol;if(t&&t.iterator)Gu=t.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let e=0;e<t.length;++e){const n=t[e];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Gu=n)}}}return Gu}function qu(t){return!!Yu(t)&&(Array.isArray(t)||!(t instanceof Map)&&Wu()in t)}function Yu(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Qu(t,e,n){return t[e]=n}function Ku(t,e){return t[e]}function Ju(t,e,n){const r=t[e];return!Object.is(r,n)&&(t[e]=n,!0)}function Xu(t,e,n,r){const o=Ju(t,e,n);return Ju(t,e+1,r)||o}function tl(t,e,n,r,o){const i=Xu(t,e,n,r);return Ju(t,e+2,o)||i}function el(t,e,n,r,o,i){const s=Xu(t,e,n,r);return Xu(t,e+2,o,i)||s}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function nl(t,e,n,r){const o=Ye();if(Ju(o,cn(),e)){Qe();Js(kn(),o,t,e,n,r)}return nl}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function rl(t,e){let n=!1,r=ln();for(let o=1;o<e.length;o+=2)n=Ju(t,r++,e[o])||n;if(an(r),!n)return Ds;let o=e[0];for(let t=1;t<e.length;t+=2)o+=wt(e[t])+e[t+1];return o}function ol(t,e,n,r){return Ju(t,cn(),n)?e+wt(n)+r:Ds}function il(t,e,n,r,o,i){const s=Xu(t,ln(),n,o);return fn(2),s?e+wt(n)+r+wt(o)+i:Ds}function sl(t,e,n,r,o,i,s,u){const l=tl(t,ln(),n,o,s);return fn(3),l?e+wt(n)+r+wt(o)+i+wt(s)+u:Ds}function ul(t,e,n,r,o,i,s,u,l,a){const c=el(t,ln(),n,o,s,l);return fn(4),c?e+wt(n)+r+wt(o)+i+wt(s)+u+wt(l)+a:Ds}function ll(t,e,n,r,o,i,s,u,l,a,c,f){const h=ln();let d=el(t,h,n,o,s,l);return d=Ju(t,h+4,c)||d,fn(5),d?e+wt(n)+r+wt(o)+i+wt(s)+u+wt(l)+a+wt(c)+f:Ds}function al(t,e,n,r,o,i,s,u,l,a,c,f,h,d){const p=ln();let y=el(t,p,n,o,s,l);return y=Xu(t,p+4,c,h)||y,fn(6),y?e+wt(n)+r+wt(o)+i+wt(s)+u+wt(l)+a+wt(c)+f+wt(h)+d:Ds}function cl(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y){const g=ln();let m=el(t,g,n,o,s,l);return m=tl(t,g+4,c,h,p)||m,fn(7),m?e+wt(n)+r+wt(o)+i+wt(s)+u+wt(l)+a+wt(c)+f+wt(h)+d+wt(p)+y:Ds}function fl(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m){const D=ln();let _=el(t,D,n,o,s,l);return _=el(t,D+4,c,h,p,g)||_,fn(8),_?e+wt(n)+r+wt(o)+i+wt(s)+u+wt(l)+a+wt(c)+f+wt(h)+d+wt(p)+y+wt(g)+m:Ds}function hl(t,e,n,r,o,i){const s=Ye(),u=ol(s,e,n,r);if(u!==Ds){Js(kn(),s,t,u,o,i)}return hl}function dl(t,e,n,r,o,i,s,u){const l=Ye(),a=il(l,e,n,r,o,i);if(a!==Ds){Js(kn(),l,t,a,s,u)}return dl}function pl(t,e,n,r,o,i,s,u,l,a){const c=Ye(),f=sl(c,e,n,r,o,i,s,u);if(f!==Ds){Js(kn(),c,t,f,l,a)}return pl}function yl(t,e,n,r,o,i,s,u,l,a,c,f){const h=Ye(),d=ul(h,e,n,r,o,i,s,u,l,a);if(d!==Ds){Js(kn(),h,t,d,c,f)}return yl}function gl(t,e,n,r,o,i,s,u,l,a,c,f,h,d){const p=Ye(),y=ll(p,e,n,r,o,i,s,u,l,a,c,f);if(y!==Ds){Js(kn(),p,t,y,h,d)}return gl}function ml(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y){const g=Ye(),m=al(g,e,n,r,o,i,s,u,l,a,c,f,h,d);if(m!==Ds){Js(kn(),g,t,m,p,y)}return ml}function Dl(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m){const D=Ye(),_=cl(D,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y);if(_!==Ds){Js(kn(),D,t,_,g,m)}return Dl}function _l(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m,D,_){const v=Ye(),C=fl(v,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m);if(C!==Ds){Js(kn(),v,t,C,D,_)}return _l}function vl(t,e,n,r){const o=Ye(),i=rl(o,e);if(i!==Ds){Js(kn(),o,t,i,n,r)}return vl}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Cl(t,e,n,r,o,i,s,u){const l=Ye(),a=Qe(),c=t+20,f=a.firstCreatePass?function(t,e,n,r,o,i,s,u,l){const a=e.consts,c=ks(e,t,4,s||null,$e(a,u));zs(e,n,c,$e(a,l)),Mn(e,c);const f=c.tViews=Vs(2,c,r,o,i,e.directiveRegistry,e.pipeRegistry,null,e.schemas,a);return null!==e.queries&&(e.queries.template(e,c),f.queries=e.queries.embeddedTView(c)),c}(c,a,l,e,n,r,o,i,s):a.data[c];en(f,!1);const h=l[11].createComment("");Ki(a,l,h,f),fi(h,l),su(l,l[c]=nu(h,l,h,f)),Ce(f)&&Rs(a,l,f),null!=s&&Ls(l,f,u)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function wl(t){return Le(Ze.lFrame.contextLView,20+t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const bl={"ɵɵdefineInjectable":Ft,"ɵɵdefineInjector":xt,"ɵɵinject":Jr,"ɵɵinvalidFactoryDep":Xr,resolveForwardRef:_t};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function El(t,e){let n=null,r=null;t.hasOwnProperty(Tt)||Object.defineProperty(t,Tt,{get:()=>{if(null===n){const r=Sr();n=r.compileInjectable(bl,`ng:///${t.name}/ɵprov.js`,function(t,e){const n=e||{providedIn:null},r={name:t.name,type:t,typeArgumentCount:0,providedIn:n.providedIn};(Fl(n)||xl(n))&&void 0!==n.deps&&(r.deps=fo(n.deps));Fl(n)?r.useClass=n.useClass:!function(t){return Al in t}(n)?xl(n)?r.useFactory=n.useFactory:function(t){return void 0!==t.useExisting}(n)&&(r.useExisting=n.useExisting):r.useValue=n.useValue;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t,e))}return n}}),t.hasOwnProperty(te)||Object.defineProperty(t,te,{get:()=>{if(null===r){const e=Sr();r=e.compileFactory(bl,`ng:///${t.name}/ɵfac.js`,{name:t.name,type:t,typeArgumentCount:0,deps:co(t),target:e.FactoryTarget.Injectable})}return r},configurable:!0})}const Al=dt({provide:String,useValue:dt});function Fl(t){return void 0!==t.useClass}function xl(t){return void 0!==t.useFactory}_r("Injectable",void 0,void 0,void 0,((t,e)=>El(t,e)));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Sl(t,e=Bt.Default){const n=Ye();if(null===n)return Jr(t,e);return or(Je(),n,_t(t),e)}function kl(){throw new Error("invalid")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Il(t,e,n){const r=Ye();if(Ju(r,cn(),e)){Us(Qe(),kn(),r,t,e,r[11],n,!1)}return Il}function Tl(t,e,n,r,o){const i=o?"class":"style";gu(t,n,e.inputs[i],i,r)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ol(t,e,n,r){const o=Ye(),i=Qe(),s=20+t,u=o[11],l=o[s]=Pi(u,e,Ze.lFrame.currentNamespace),a=i.firstCreatePass?function(t,e,n,r,o,i,s){const u=e.consts,l=ks(e,t,2,o,$e(u,i));return zs(e,n,l,$e(u,s)),null!==l.attrs&&Du(l,l.attrs,!1),null!==l.mergedAttrs&&Du(l,l.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,l),l}(s,i,o,0,e,n,r):i.data[s];en(a,!0);const c=a.mergedAttrs;null!==c&&Vn(u,l,c);const f=a.classes;null!==f&&ss(u,l,f);const h=a.styles;null!==h&&is(u,l,h),64!=(64&a.flags)&&Ki(i,o,l,a),0===Ze.lFrame.elementDepthCount&&fi(l,o),Ze.lFrame.elementDepthCount++,Ce(a)&&(Rs(i,o,a),Ns(i,a,o)),null!==r&&Ls(o,a)}function Ml(){let t=Je();nn()?rn():(t=t.parent,en(t,!1));const e=t;Ze.lFrame.elementDepthCount--;const n=Qe();n.firstCreatePass&&(Mn(n,t),_e(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&Tl(n,e,Ye(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}(e)&&Tl(n,e,Ye(),e.stylesWithoutHost,!1)}function Pl(t,e,n,r){Ol(t,e,n,r),Ml()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bl(t,e,n){const r=Ye(),o=Qe(),i=t+20,s=o.firstCreatePass?function(t,e,n,r,o){const i=e.consts,s=$e(i,r),u=ks(e,t,8,"ng-container",s);return null!==s&&Du(u,s,!0),zs(e,n,u,$e(i,o)),null!==e.queries&&e.queries.elementStart(e,u),u}(i,o,r,e,n):o.data[i];en(s,!0);const u=r[i]=r[11].createComment("");Ki(o,r,u,s),fi(u,r),Ce(s)&&(Rs(o,r,s),Ns(o,s,r)),null!=n&&Ls(r,s)}function Nl(){let t=Je();const e=Qe();nn()?rn():(t=t.parent,en(t,!1)),e.firstCreatePass&&(Mn(e,t),_e(t)&&e.queries.elementEnd(t))}function Rl(t,e,n){Bl(t,e,n),Nl()}function Ll(){return Ye()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jl(t){return!!t&&"function"==typeof t.then}function Vl(t){return!!t&&"function"==typeof t.subscribe}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{constructor(t){this.reflectionCapabilities=t}updateCapabilities(t){this.reflectionCapabilities=t}factory(t){return this.reflectionCapabilities.factory(t)}parameters(t){return this.reflectionCapabilities.parameters(t)}annotations(t){return this.reflectionCapabilities.annotations(t)}propMetadata(t){return this.reflectionCapabilities.propMetadata(t)}hasLifecycleHook(t,e){return this.reflectionCapabilities.hasLifecycleHook(t,e)}getter(t){return this.reflectionCapabilities.getter(t)}setter(t){return this.reflectionCapabilities.setter(t)}method(t){return this.reflectionCapabilities.method(t)}importUri(t){return this.reflectionCapabilities.importUri(t)}resourceUri(t){return this.reflectionCapabilities.resourceUri(t)}resolveIdentifier(t,e,n,r){return this.reflectionCapabilities.resolveIdentifier(t,e,n,r)}resolveEnum(t,e){return this.reflectionCapabilities.resolveEnum(t,e)}}(new Ur);const Hl=Vl;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $l(t,e,n,r){const o=Ye(),i=Qe(),s=Je();return zl(i,o,o[11],s,t,e,!!n,r),$l}function Ul(t,e){const n=Je(),r=Ye(),o=Qe();return zl(o,r,pu(yn(o.data),n,r),n,t,e,!1),Ul}function zl(t,e,n,r,o,i,s,u){const l=Ce(r),a=t.firstCreatePass&&du(t),c=e[8],f=hu(e);let h=!0;if(3&r.type||u){const d=Ne(r,e),p=u?u(d):d,y=f.length,g=u?t=>u(Pe(t[r.index])):r.index;if(Oe(n)){let s=null;if(!u&&l&&(s=function(t,e,n,r){const o=t.cleanup;if(null!=o)for(let t=0;t<o.length-1;t+=2){const i=o[t];if(i===n&&o[t+1]===r){const n=e[7],r=o[t+2];return n.length>r?n[r]:null}"string"==typeof i&&(t+=2)}return null}(t,e,o,r.index)),null!==s){(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,h=!1}else{i=Gl(r,e,c,i,!1);const t=n.listen(p,o,i);f.push(i,t),a&&a.push(o,g,y,y+1)}}else i=Gl(r,e,c,i,!0),p.addEventListener(o,i,s),f.push(i),a&&a.push(o,g,y,s)}else i=Gl(r,e,c,i,!1);const d=r.outputs;let p;if(h&&null!==d&&(p=d[o])){const t=p.length;if(t)for(let n=0;n<t;n+=2){const t=p[n],s=p[n+1],u=e[t][s].subscribe(i),l=f.length;f.push(i,u),a&&a.push(o,r.index,l,-(l+1))}}}function Zl(t,e,n,r){try{return!1!==n(r)}catch(e){return yu(t,e),!1}}function Gl(t,e,n,r,o){return function n(i){if(i===Function)return r;const s=2&t.flags?je(t.index,e):e;0==(32&e[2])&&uu(s);let u=Zl(e,0,r,i),l=n.__ngNextListenerFn__;for(;l;)u=Zl(e,0,l,i)&&u,l=l.__ngNextListenerFn__;return o&&!1===u&&(i.preventDefault(),i.returnValue=!1),u}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wl(t=1){return Fn(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ql(t,e){let n=null;const r=function(t){const e=t.attrs;if(null!=e){const t=e.indexOf(5);if(0==(1&t))return e[t+1]}return null}(t);for(let o=0;o<e.length;o++){const i=e[o];if("*"!==i){if(null===r?ps(t,i,!0):ys(r,i))return o}else n=o}return n}function Yl(t){const e=Ye()[16][6];if(!e.projection){const n=t?t.length:1,r=e.projection=Br(n,null),o=r.slice();let i=e.child;for(;null!==i;){const e=t?ql(i,t):0;null!==e&&(o[e]?o[e].projectionNext=i:r[e]=i,o[e]=i),i=i.next}}}function Ql(t,e=0,n){const r=Ye(),o=Qe(),i=ks(o,20+t,16,null,n||null);null===i.projection&&(i.projection=e),rn(),64!=(64&i.flags)&&function(t,e,n){os(e[11],0,e,n,Vi(t,n,e),Gi(n.parent||e[6],n,e))}(o,r,i)}function Kl(t,e,n){return Jl(t,"",e,"",n),Kl}function Jl(t,e,n,r,o){const i=Ye(),s=ol(i,e,n,r);if(s!==Ds){Us(Qe(),kn(),i,t,s,i[11],o,!1)}return Jl}function Xl(t,e,n,r,o,i,s){const u=Ye(),l=il(u,e,n,r,o,i);if(l!==Ds){Us(Qe(),kn(),u,t,l,u[11],s,!1)}return Xl}function ta(t,e,n,r,o,i,s,u,l){const a=Ye(),c=sl(a,e,n,r,o,i,s,u);if(c!==Ds){Us(Qe(),kn(),a,t,c,a[11],l,!1)}return ta}function ea(t,e,n,r,o,i,s,u,l,a,c){const f=Ye(),h=ul(f,e,n,r,o,i,s,u,l,a);if(h!==Ds){Us(Qe(),kn(),f,t,h,f[11],c,!1)}return ea}function na(t,e,n,r,o,i,s,u,l,a,c,f,h){const d=Ye(),p=ll(d,e,n,r,o,i,s,u,l,a,c,f);if(p!==Ds){Us(Qe(),kn(),d,t,p,d[11],h,!1)}return na}function ra(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){const y=Ye(),g=al(y,e,n,r,o,i,s,u,l,a,c,f,h,d);if(g!==Ds){Us(Qe(),kn(),y,t,g,y[11],p,!1)}return ra}function oa(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){const m=Ye(),D=cl(m,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y);if(D!==Ds){Us(Qe(),kn(),m,t,D,m[11],g,!1)}return oa}function ia(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m,D){const _=Ye(),v=fl(_,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m);if(v!==Ds){Us(Qe(),kn(),_,t,v,_[11],D,!1)}return ia}function sa(t,e,n){const r=Ye(),o=rl(r,e);if(o!==Ds){Us(Qe(),kn(),r,t,o,r[11],n,!1)}return sa}function ua(t,e,n,r,o,i){let s=i?e.classBindings:e.styleBindings,u=ws(s),l=Es(s);t[r]=n;let a,c=!1;if(Array.isArray(n)){const t=n;a=t[1],(null===a||Lr(t,a)>0)&&(c=!0)}else a=n;if(o){if(0!==l){const e=ws(t[u+1]);t[r+1]=Cs(e,u),0!==e&&(t[e+1]=As(t[e+1],r)),t[u+1]=131071&t[u+1]|r<<17}else t[r+1]=Cs(u,0),0!==u&&(t[u+1]=As(t[u+1],r)),u=r}else t[r+1]=Cs(l,0),0===u?u=r:t[l+1]=As(t[l+1],r),l=r;c&&(t[r+1]=bs(t[r+1])),la(t,a,r,!0),la(t,a,r,!1),function(t,e,n,r,o){const i=o?t.residualClasses:t.residualStyles;null!=i&&"string"==typeof e&&Lr(i,e)>=0&&(n[r+1]=Fs(n[r+1]))}(e,a,t,r,i),s=Cs(u,l),i?e.classBindings=s:e.styleBindings=s}function la(t,e,n,r,o){const i=t[n+1],s=null===e;let u=r?ws(i):Es(i),l=!1;for(;0!==u&&(!1===l||s);){const n=t[u],o=t[u+1];aa(n,e)&&(l=!0,t[u+1]=r?Fs(o):bs(o)),u=r?ws(o):Es(o)}l&&(t[n+1]=r?bs(i):Fs(i))}function aa(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Lr(t,e)>=0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ca={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function fa(t){return t.substring(ca.key,ca.keyEnd)}function ha(t){return t.substring(ca.value,ca.valueEnd)}function da(t,e){const n=ca.textEnd;return n===e?-1:(e=ca.keyEnd=function(t,e,n){for(;e<n&&t.charCodeAt(e)>32;)e++;return e}(t,ca.key=e,n),ga(t,e,n))}function pa(t,e){const n=ca.textEnd;let r=ca.key=ga(t,e,n);return n===r?-1:(r=ca.keyEnd=function(t,e,n){let r;for(;e<n&&(45===(r=t.charCodeAt(e))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)e++;return e}(t,r,n),r=ma(t,r,n),r=ca.value=ga(t,r,n),r=ca.valueEnd=function(t,e,n){let r=-1,o=-1,i=-1,s=e,u=s;for(;s<n;){const l=t.charCodeAt(s++);if(59===l)return u;34===l||39===l?u=s=Da(t,l,s,n):e===s-4&&85===i&&82===o&&76===r&&40===l?u=s=Da(t,41,s,n):l>32&&(u=s),i=o,o=r,r=-33&l}return u}(t,r,n),ma(t,r,n))}function ya(t){ca.key=0,ca.keyEnd=0,ca.value=0,ca.valueEnd=0,ca.textEnd=t.length}function ga(t,e,n){for(;e<n&&t.charCodeAt(e)<=32;)e++;return e}function ma(t,e,n,r){return(e=ga(t,e,n))<n&&e++,e}function Da(t,e,n,r){let o=-1,i=n;for(;i<r;){const n=t.charCodeAt(i++);if(n==e&&92!==o)return i;o=92==n&&92===o?0:n}throw new Error}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _a(t,e,n){return Aa(t,e,n,!1),_a}function va(t,e){return Aa(t,e,null,!0),va}function Ca(t){Fa(Ta,wa,t,!1)}function wa(t,e){for(let n=function(t){return ya(t),pa(t,ga(t,0,ca.textEnd))}(e);n>=0;n=pa(e,n))Ta(t,fa(e),ha(e))}function ba(t){Fa(Nr,Ea,t,!0)}function Ea(t,e){for(let n=function(t){return ya(t),da(t,ga(t,0,ca.textEnd))}(e);n>=0;n=da(e,n))Nr(t,fa(e),!0)}function Aa(t,e,n,r){const o=Ye(),i=Qe(),s=fn(2);if(i.firstUpdatePass&&Sa(i,t,s,r),e!==Ds&&Ju(o,s,e)){Oa(i,i.data[xn()],o,o[11],t,o[s+1]=function(t,e){null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=yt(Ao(t))));return t}(e,n),r,s)}}function Fa(t,e,n,r){const o=Qe(),i=fn(2);o.firstUpdatePass&&Sa(o,null,i,r);const s=Ye();if(n!==Ds&&Ju(s,i,n)){const u=o.data[xn()];if(Ba(u,r)&&!xa(o,i)){let t=r?u.classesWithoutHost:u.stylesWithoutHost;null!==t&&(n=gt(t,n||"")),Tl(o,u,s,n,r)}else!function(t,e,n,r,o,i,s,u){o===Ds&&(o=Yt);let l=0,a=0,c=0<o.length?o[0]:null,f=0<i.length?i[0]:null;for(;null!==c||null!==f;){const h=l<o.length?o[l+1]:void 0,d=a<i.length?i[a+1]:void 0;let p,y=null;c===f?(l+=2,a+=2,h!==d&&(y=f,p=d)):null===f||null!==c&&c<f?(l+=2,y=c):(a+=2,y=f,p=d),null!==y&&Oa(t,e,n,r,y,p,s,u),c=l<o.length?o[l]:null,f=a<i.length?i[a]:null}}(o,u,s,s[11],s[i+1],s[i+1]=function(t,e,n){if(null==n||""===n)return Yt;const r=[],o=Ao(n);if(Array.isArray(o))for(let e=0;e<o.length;e++)t(r,o[e],!0);else if("object"==typeof o)for(const e in o)o.hasOwnProperty(e)&&t(r,e,o[e]);else"string"==typeof o&&e(r,o);return r}(t,e,n),r,i)}}function xa(t,e){return e>=t.expandoStartIndex}function Sa(t,e,n,r){const o=t.data;if(null===o[n+1]){const i=o[xn()],s=xa(t,n);Ba(i,r)&&null===e&&!s&&(e=!1),e=function(t,e,n,r){const o=yn(t);let i=r?e.residualClasses:e.residualStyles;if(null===o){0===(r?e.classBindings:e.styleBindings)&&(n=Ia(n=ka(null,t,e,n,r),e.attrs,r),i=null)}else{const s=e.directiveStylingLast;if(-1===s||t[s]!==o)if(n=ka(o,t,e,n,r),null===i){let n=function(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0===Es(r))return;return t[ws(r)]}(t,e,r);void 0!==n&&Array.isArray(n)&&(n=ka(null,t,e,n[1],r),n=Ia(n,e.attrs,r),function(t,e,n,r){const o=n?e.classBindings:e.styleBindings;t[ws(o)]=r}(t,e,r,n))}else i=function(t,e,n){let r;const o=e.directiveEnd;for(let i=1+e.directiveStylingLast;i<o;i++){r=Ia(r,t[i].hostAttrs,n)}return Ia(r,e.attrs,n)}(t,e,r)}void 0!==i&&(r?e.residualClasses=i:e.residualStyles=i);return n}(o,i,e,r),ua(o,i,e,n,s,r)}}function ka(t,e,n,r,o){let i=null;const s=n.directiveEnd;let u=n.directiveStylingLast;for(-1===u?u=n.directiveStart:u++;u<s&&(i=e[u],r=Ia(r,i.hostAttrs,o),i!==t);)u++;return null!==t&&(n.directiveStylingLast=u),r}function Ia(t,e,n){const r=n?1:2;let o=-1;if(null!==e)for(let i=0;i<e.length;i++){const s=e[i];"number"==typeof s?o=s:o===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),Nr(t,s,!!n||e[++i]))}return void 0===t?null:t}function Ta(t,e,n){Nr(t,e,Ao(n))}function Oa(t,e,n,r,o,i,s,u){if(!(3&e.type))return;const l=t.data,a=l[u+1];if(!Pa(1==(1&a)?Ma(l,e,n,o,Es(a),s):void 0)){Pa(i)||function(t){return 2==(2&t)}(a)&&(i=Ma(l,null,n,o,u,s));!function(t,e,n,r,o){const i=Oe(t);if(e)o?i?t.addClass(n,r):n.classList.add(r):i?t.removeClass(n,r):n.classList.remove(r);else{let e=-1===r.indexOf("-")?void 0:bi.DashCase;if(null==o)i?t.removeStyle(n,r,e):n.style.removeProperty(r);else{const s="string"==typeof o&&o.endsWith("!important");s&&(o=o.slice(0,-10),e|=bi.Important),i?t.setStyle(n,r,o,e):n.style.setProperty(r,o,s?"important":"")}}}(r,s,Be(xn(),n),o,i)}}function Ma(t,e,n,r,o,i){const s=null===e;let u;for(;o>0;){const e=t[o],i=Array.isArray(e),l=i?e[1]:e,a=null===l;let c=n[o+1];c===Ds&&(c=a?Yt:void 0);let f=a?Rr(c,r):l===r?c:void 0;if(i&&!Pa(f)&&(f=Rr(e,r)),Pa(f)&&(u=f,s))return u;const h=t[o+1];o=s?ws(h):Es(h)}if(null!==e){let t=i?e.residualClasses:e.residualStyles;null!=t&&(u=Rr(t,r))}return u}function Pa(t){return void 0!==t}function Ba(t,e){return 0!=(t.flags&(e?16:32))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Na(t,e=""){const n=Ye(),r=Qe(),o=t+20,i=r.firstCreatePass?ks(r,o,1,e,null):r.data[o],s=n[o]=Ti(n[11],e);Ki(r,n,s,i),en(i,!1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ra(t){return La("",t,""),Ra}function La(t,e,n){const r=Ye(),o=ol(r,t,e,n);return o!==Ds&&mu(r,xn(),o),La}function ja(t,e,n,r,o){const i=Ye(),s=il(i,t,e,n,r,o);return s!==Ds&&mu(i,xn(),s),ja}function Va(t,e,n,r,o,i,s){const u=Ye(),l=sl(u,t,e,n,r,o,i,s);return l!==Ds&&mu(u,xn(),l),Va}function Ha(t,e,n,r,o,i,s,u,l){const a=Ye(),c=ul(a,t,e,n,r,o,i,s,u,l);return c!==Ds&&mu(a,xn(),c),Ha}function $a(t,e,n,r,o,i,s,u,l,a,c){const f=Ye(),h=ll(f,t,e,n,r,o,i,s,u,l,a,c);return h!==Ds&&mu(f,xn(),h),$a}function Ua(t,e,n,r,o,i,s,u,l,a,c,f,h){const d=Ye(),p=al(d,t,e,n,r,o,i,s,u,l,a,c,f,h);return p!==Ds&&mu(d,xn(),p),Ua}function za(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){const y=Ye(),g=cl(y,t,e,n,r,o,i,s,u,l,a,c,f,h,d,p);return g!==Ds&&mu(y,xn(),g),za}function Za(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){const m=Ye(),D=fl(m,t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g);return D!==Ds&&mu(m,xn(),D),Za}function Ga(t){const e=Ye(),n=rl(e,t);return n!==Ds&&mu(e,xn(),n),Ga}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wa(t,e,n){Fa(Nr,Ea,ol(Ye(),t,e,n),!0)}function qa(t,e,n,r,o){Fa(Nr,Ea,il(Ye(),t,e,n,r,o),!0)}function Ya(t,e,n,r,o,i,s){Fa(Nr,Ea,sl(Ye(),t,e,n,r,o,i,s),!0)}function Qa(t,e,n,r,o,i,s,u,l){Fa(Nr,Ea,ul(Ye(),t,e,n,r,o,i,s,u,l),!0)}function Ka(t,e,n,r,o,i,s,u,l,a,c){Fa(Nr,Ea,ll(Ye(),t,e,n,r,o,i,s,u,l,a,c),!0)}function Ja(t,e,n,r,o,i,s,u,l,a,c,f,h){Fa(Nr,Ea,al(Ye(),t,e,n,r,o,i,s,u,l,a,c,f,h),!0)}function Xa(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){Fa(Nr,Ea,cl(Ye(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p),!0)}function tc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){Fa(Nr,Ea,fl(Ye(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g),!0)}function ec(t){Fa(Nr,Ea,rl(Ye(),t),!0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function nc(t,e,n){Ca(ol(Ye(),t,e,n))}function rc(t,e,n,r,o){Ca(il(Ye(),t,e,n,r,o))}function oc(t,e,n,r,o,i,s){Ca(sl(Ye(),t,e,n,r,o,i,s))}function ic(t,e,n,r,o,i,s,u,l){Ca(ul(Ye(),t,e,n,r,o,i,s,u,l))}function sc(t,e,n,r,o,i,s,u,l,a,c){Ca(ll(Ye(),t,e,n,r,o,i,s,u,l,a,c))}function uc(t,e,n,r,o,i,s,u,l,a,c,f,h){Ca(al(Ye(),t,e,n,r,o,i,s,u,l,a,c,f,h))}function lc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){Ca(cl(Ye(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p))}function ac(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){Ca(fl(Ye(),t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g))}function cc(t){Ca(rl(Ye(),t))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fc(t,e,n,r,o){return Aa(t,ol(Ye(),e,n,r),o,!1),fc}function hc(t,e,n,r,o,i,s){return Aa(t,il(Ye(),e,n,r,o,i),s,!1),hc}function dc(t,e,n,r,o,i,s,u,l){return Aa(t,sl(Ye(),e,n,r,o,i,s,u),l,!1),dc}function pc(t,e,n,r,o,i,s,u,l,a,c){return Aa(t,ul(Ye(),e,n,r,o,i,s,u,l,a),c,!1),pc}function yc(t,e,n,r,o,i,s,u,l,a,c,f,h){return Aa(t,ll(Ye(),e,n,r,o,i,s,u,l,a,c,f),h,!1),yc}function gc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p){return Aa(t,al(Ye(),e,n,r,o,i,s,u,l,a,c,f,h,d),p,!1),gc}function mc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g){return Aa(t,cl(Ye(),e,n,r,o,i,s,u,l,a,c,f,h,d,p,y),g,!1),mc}function Dc(t,e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m,D){return Aa(t,fl(Ye(),e,n,r,o,i,s,u,l,a,c,f,h,d,p,y,g,m),D,!1),Dc}function _c(t,e,n){return Aa(t,rl(Ye(),e),n,!1),_c}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function vc(t,e,n){const r=Ye();if(Ju(r,cn(),e)){Us(Qe(),kn(),r,t,e,r[11],n,!0)}return vc}function Cc(t,e,n){const r=Ye();if(Ju(r,cn(),e)){const o=Qe(),i=kn();Us(o,i,r,t,e,pu(yn(o.data),i,r),n,!0)}return Cc}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */"undefined"==typeof ngI18nClosureMode&&(Wt.ngI18nClosureMode="undefined"!=typeof goog&&"function"==typeof goog.getMsg);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const wc=void 0;var bc=["en",[["a","p"],["AM","PM"],wc],[["AM","PM"],wc,wc],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],wc,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],wc,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",wc,"{1} 'at' {0}",wc],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){const e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Ec={};function Ac(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(t);let n=xc(e);if(n)return n;const r=e.split("-")[0];if(n=xc(r),n)return n;if("en"===r)return bc;throw new Error(`Missing locale data for the locale "${t}".`)}function Fc(t){return Ac(t)[Sc.PluralCase]}function xc(t){return t in Ec||(Ec[t]=Wt.ng&&Wt.ng.common&&Wt.ng.common.locales&&Wt.ng.common.locales[t]),Ec[t]}var Sc;!function(t){t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData"}(Sc||(Sc={}));const kc=["zero","one","two","few","many"];const Ic={marker:"element"},Tc={marker:"ICU"};var Oc;!function(t){t[t.SHIFT=2]="SHIFT",t[t.APPEND_EAGERLY=1]="APPEND_EAGERLY",t[t.COMMENT=2]="COMMENT"}(Oc||(Oc={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Mc="en-US";function Pc(t){var e,n;n="Expected localeId to be defined",null==(e=t)&&At(n,e,null,"!="),"string"==typeof t&&(Mc=t.toLowerCase().replace(/_/g,"-"))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Bc(t,e,n){const r=e.insertBeforeIndex,o=Array.isArray(r)?r[0]:r;return null===o?Wi(t,0,n):Pe(n[o])}function Nc(t,e,n,r,o){const i=e.insertBeforeIndex;if(Array.isArray(i)){let s=r,u=null;if(3&e.type||(u=s,s=o),null!==s&&0==(2&e.flags))for(let e=1;e<i.length;e++){$i(t,s,n[i[e]],u,!1)}}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Rc(t,e){if(t.push(e),t.length>1)for(let n=t.length-2;n>=0;n--){const r=t[n];Lc(r)||jc(r,e)&&null===Vc(r)&&Hc(r,e.index)}}function Lc(t){return!(64&t.type)}function jc(t,e){return Lc(e)||t.index>e.index}function Vc(t){const e=t.insertBeforeIndex;return Array.isArray(e)?e[0]:e}function Hc(t,e){const n=t.insertBeforeIndex;Array.isArray(n)?n[0]=e:(Qi(Bc,Nc),t.insertBeforeIndex=e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $c(t,e){const n=t.data[e];if(null===n||"string"==typeof n)return null;return n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function Uc(t,e){let n=t.insertBeforeIndex;var r,o,i;null===n?(Qi(Bc,Nc),n=t.insertBeforeIndex=[null,e]):(r=Array.isArray(n),i="Expecting array here",r!=(o=!0)&&At(i,r,o,"=="),n.push(e))}function zc(t,e,n){const r=Is(t,n,64,null,null);return Rc(e,r),r}function Zc(t,e){const n=e[t.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function Gc(t){return(131070&t)>>>1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Wc=0,qc=0;function Yc(t,e,n,r){const o=n[11];let i,s=null;for(let u=0;u<e.length;u++){const l=e[u];if("string"==typeof l){const t=e[++u];null===n[t]&&(n[t]=Ti(o,l))}else if("number"==typeof l)switch(1&l){case 0:const a=l>>>17;let c,f;if(null===s&&(s=a,i=Zi(o,r)),a===s?(c=r,f=i):(c=null,f=Pe(n[a])),null!==f){const e=Gc(l);$i(o,f,n[e],c,!1);const r=$c(t,e);if(null!==r&&"object"==typeof r){const e=Zc(r,n);null!==e&&Yc(t,r.create[e],n,n[r.anchorIdx])}}break;case 1:const h=l>>>1,d=e[++u],p=e[++u];Xs(o,Be(h,n),null,null,d,p,null);break;default:throw new Error(`Unable to determine the type of mutate operation for "${l}"`)}else switch(l){case Tc:const t=e[++u],r=e[++u];if(null===n[r]){fi(n[r]=Mi(o,t),n)}break;case Ic:const i=e[++u],s=e[++u];if(null===n[s]){fi(n[s]=Pi(o,i,null),n)}}}}function Qc(t,e,n,r,o){for(let i=0;i<n.length;i++){const s=n[i],u=n[++i];if(s&o){let o="";for(let s=i+1;s<=i+u;s++){const i=n[s];if("string"==typeof i)o+=i;else if("number"==typeof i)if(i<0)o+=wt(e[r-i]);else{const u=i>>>2;switch(3&i){case 1:const i=n[++s],l=n[++s],a=t.data[u];"string"==typeof a?Xs(e[11],e[u],null,a,i,o,l):Us(t,a,e,i,o,e[11],l,!1);break;case 0:const c=e[u];null!==c&&Oi(e[11],c,o);break;case 2:Jc(t,$c(t,u),e,o);break;case 3:Kc(t,$c(t,u),r,e)}}}}else{const o=n[i+1];if(o>0&&3==(3&o)){const n=$c(t,o>>>2);e[n.currentCaseLViewIndex]<0&&Kc(t,n,r,e)}}i+=u}}function Kc(t,e,n,r){let o=r[e.currentCaseLViewIndex];if(null!==o){let i=Wc;o<0&&(o=r[e.currentCaseLViewIndex]=~o,i=-1),Qc(t,r,e.update[o],n,i)}}function Jc(t,e,n,r){const o=function(t,e){let n=t.cases.indexOf(e);if(-1===n)switch(t.type){case 1:{const r=function(t,e){const n=Fc(e)(parseInt(t,10)),r=kc[n];return void 0!==r?r:"other"}(e,Mc);n=t.cases.indexOf(r),-1===n&&"other"!==r&&(n=t.cases.indexOf("other"));break}case 0:n=t.cases.indexOf("other")}return-1===n?null:n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,r);if(Zc(e,n)!==o&&(Xc(t,e,n),n[e.currentCaseLViewIndex]=null===o?null:~o,null!==o)){const r=n[e.anchorIdx];r&&Yc(t,e.create[o],n,r)}}function Xc(t,e,n){let r=Zc(e,n);if(null!==r){const o=e.remove[r];for(let e=0;e<o.length;e++){const r=o[e];if(r>0){const t=Be(r,n);null!==t&&es(n[11],t)}else Xc(t,$c(t,~r),n)}}}function tf(){const t=[];let e,n,r=-1;function o(t,e){r=0;const o=Zc(t,e);n=null!==o?t.remove[o]:Yt}function i(){if(r<n.length){const s=n[r++];if(s>0){return e[s]}{t.push(r,n);const u=~s;return o(e[1].data[u],e),i()}}return 0===t.length?null:(n=t.pop(),r=t.pop(),i())}return function(n,r){for(e=r;t.length;)t.pop();return o(n.value,r),i}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ef=/�(\d+):?\d*�/gi,nf=/({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi,rf=/�(\d+)�/,of=/^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/,sf=/�\/?\*(\d+:\d+)�/gi,uf=/�(\/?[#*]\d+):?\d*�/gi,lf=/\uE500/g;function af(t,e,n,r,o,i){const s=tn(),u=[],l=[],a=[[]];o=function(t,e){if(function(t){return-1===t}(e))return yf(t);{const n=t.indexOf(`:${e}�`)+2+e.toString().length,r=t.search(new RegExp(`�\\/\\*\\d+:${e}�`));return yf(t.substring(n,r))}}(o,i);const c=(f=o,f.replace(lf," ")).split(uf);var f;for(let r=0;r<c.length;r++){let i=c[r];if(0==(1&r)){const r=Df(i);for(let i=0;i<r.length;i++){let c=r[i];if(0==(1&i)){const e=c;""!==e&&ff(t,s,a[0],u,l,n,e)}else{const r=c;if("object"!=typeof r)throw new Error(`Unable to parse ICU expression in "${o}" message.`);gf(t,n,l,e,r,cf(t,s,a[0],n,u,"",!0).index)}}}else{const e=47===i.charCodeAt(0);i.charCodeAt(e?1:0);const n=20+Number.parseInt(i.substring(e?2:1));if(e)a.shift(),en(tn(),!1);else{const e=zc(t,a[0],n);a.unshift([]),en(e,!0)}}}t.data[r]={create:u,update:l}}function cf(t,e,n,r,o,i,s){const u=Ts(t,r,1,null);let l=u<<Oc.SHIFT,a=tn();var c;e===a&&(a=null),null===a&&(l|=Oc.APPEND_EAGERLY),s&&(l|=Oc.COMMENT,c=tf,void 0===Ei&&(Ei=c())),o.push(l,null===i?"":i);const f=Is(t,u,s?32:1,null===i?"":i,null);Rc(n,f);const h=f.index;return en(f,!1),null!==a&&e!==a&&Uc(a,h),f}function ff(t,e,n,r,o,i,s){const u=s.match(ef),l=cf(t,e,n,i,r,u?null:s,!1);u&&hf(o,s,l.index,null,0,null)}function hf(t,e,n,r,o,i){const s=t.length,u=s+1;t.push(null,null);const l=s+2,a=e.split(ef);let c=0;for(let e=0;e<a.length;e++){const n=a[e];if(1&e){const e=o+parseInt(n,10);t.push(-1-e),c|=pf(e)}else""!==n&&t.push(n)}return t.push(n<<2|(r?1:0)),r&&t.push(r,i),t[s]=c,t[u]=t.length-l,c}function df(t){let e=0;for(let n=0;n<t.length;n++){const r=t[n];"number"==typeof r&&r<0&&e++}return e}function pf(t){return 1<<Math.min(t,31)}function yf(t){let e,n,r="",o=0,i=!1;for(;null!==(e=sf.exec(t));)i?e[0]===`�/*${n}�`&&(o=e.index,i=!1):(r+=t.substring(o,e.index+e[0].length),n=e[1],i=!0);return r+=t.substr(o),r}function gf(t,e,n,r,o,i){let s=0;const u={type:o.type,currentCaseLViewIndex:Ts(t,e,1,null),anchorIdx:i,cases:[],create:[],remove:[],update:[]};!function(t,e,n){t.push(pf(e.mainBinding),2,-1-e.mainBinding,n<<2|2)}(n,o,i),function(t,e,n){const r=t.data[e];null===r?t.data[e]=n:r.value=n}(t,i,u);const l=o.values;for(let i=0;i<l.length;i++){const a=l[i],c=[];for(let t=0;t<a.length;t++){const e=a[t];if("string"!=typeof e){const n=c.push(e)-1;a[t]=`\x3c!--�${n}�--\x3e`}}s=_f(t,u,e,n,r,o.cases[i],a.join(""),c)|s}s&&function(t,e,n){t.push(e,1,n<<2|3)}(n,s,i)}function mf(t){const e=[],n=[];let r=1,o=0;const i=Df(t=t.replace(of,(function(t,e,n){return r="select"===n?0:1,o=parseInt(e.substr(1),10),""})));for(let t=0;t<i.length;){let o=i[t++].trim();1===r&&(o=o.replace(/\s*(?:=)?(\w+)\s*/,"$1")),o.length&&e.push(o);const s=Df(i[t++]);e.length>n.length&&n.push(s)}return{type:r,mainBinding:o,cases:e,values:n}}function Df(t){if(!t)return[];let e=0;const n=[],r=[],o=/[{}]/g;let i;for(o.lastIndex=0;i=o.exec(t);){const o=i.index;if("}"==i[0]){if(n.pop(),0==n.length){const n=t.substring(e,o);of.test(n)?r.push(mf(n)):r.push(n),e=o+1}}else{if(0==n.length){const n=t.substring(e,o);r.push(n),e=o+1}n.push("{")}}const s=t.substring(e);return r.push(s),r}function _f(t,e,n,r,o,i,s,u){const l=[],a=[],c=[];e.cases.push(i),e.create.push(l),e.remove.push(a),e.update.push(c);const f=xo(Ie()).getInertBodyElement(s),h=ti(f)||f;return h?vf(t,e,n,r,l,a,c,h,o,u,0):0}function vf(t,e,n,r,o,i,s,u,l,a,c){let f=0,h=u.firstChild;for(;h;){const u=Ts(t,n,1,null);switch(h.nodeType){case Node.ELEMENT_NODE:const d=h,p=d.tagName.toLowerCase();if($o.hasOwnProperty(p)){bf(o,Ic,p,l,u),t.data[u]=p;const y=d.attributes;for(let t=0;t<y.length;t++){const e=y.item(t),n=e.name.toLowerCase();!!e.value.match(ef)?Wo.hasOwnProperty(n)&&(Uo[n]?hf(s,e.value,u,e.name,0,Oo):zo[n]?hf(s,e.value,u,e.name,0,Mo):hf(s,e.value,u,e.name,0,null)):Ef(o,u,e)}f=vf(t,e,n,r,o,i,s,h,u,a,c+1)|f,Cf(i,u,c)}break;case Node.TEXT_NODE:const y=h.textContent||"",g=y.match(ef);bf(o,null,g?"":y,l,u),Cf(i,u,c),g&&(f=hf(s,y,u,null,0,null)|f);break;case Node.COMMENT_NODE:const m=rf.exec(h.textContent||"");if(m){const e=a[parseInt(m[1],10)];bf(o,Tc,"",l,u),gf(t,n,r,l,e,u),wf(i,u,c)}}h=h.nextSibling}return f}function Cf(t,e,n){0===n&&t.push(e)}function wf(t,e,n){0===n&&(t.push(~e),t.push(e))}function bf(t,e,n,r,o){null!==e&&t.push(e),t.push(n,o,0|r<<17|o<<1)}function Ef(t,e,n){t.push(e<<1|1,n.name,n.value)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Af=/\[(�.+?�?)\]/,Ff=/\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g,xf=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,Sf=/{([A-Z0-9_]+)}/g,kf=/�I18N_EXP_(ICU(_\d+)?)�/g,If=/\/\*/,Tf=/\d+\:(\d+)/;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Of(t,e,n=-1){const r=Qe(),o=Ye(),i=20+t,s=$e(r.consts,e),u=tn();r.firstCreatePass&&af(r,null===u?0:u.index,o,i,s,n);const l=r.data[i],a=Hi(r,u===o[6]?null:u,o),c=u&&8&u.type?o[u.index]:null;!function(t,e,n,r){const o=t[11];for(let i=0;i<e.length;i++){const s=e[i++],u=e[i],l=(s&Oc.COMMENT)===Oc.COMMENT,a=(s&Oc.APPEND_EAGERLY)===Oc.APPEND_EAGERLY,c=s>>>Oc.SHIFT;let f=t[c];null===f&&(f=t[c]=l?o.createComment(u):Ti(o,u)),a&&null!==n&&$i(o,n,f,r,!1)}}(o,l.create,a,c),hn(!0)}function Mf(){hn(!1)}function Pf(t,e,n){Of(t,e,n),Mf()}function Bf(t,e){const n=Qe();!function(t,e,n){const r=Je().index,o=[];if(t.firstCreatePass&&null===t.data[e]){for(let t=0;t<n.length;t+=2){const e=n[t],i=n[t+1];if(""!==i){if(nf.test(i))throw new Error(`ICU expressions are not supported in attributes. Message: "${i}".`);hf(o,i,r,e,df(o),null)}}t.data[e]=o}}(n,t+20,$e(n.consts,e))}function Nf(t){const e=Ye();return Ju(e,cn(),t)&&(Wc|=1<<Math.min(qc,31)),qc++,Nf}function Rf(t){!function(t,e,n){if(qc>0){const r=t.data[n];Qc(t,e,Array.isArray(r)?r:r.update,ln()-qc-1,Wc)}Wc=0,qc=0}(Qe(),Ye(),t+20)}function Lf(t,e={}){return function(t,e={}){let n=t;if(Af.test(t)){const t={},e=[0];n=n.replace(Ff,((n,r,o)=>{const i=r||o,s=t[i]||[];if(s.length||(i.split("|").forEach((t=>{const e=t.match(Tf),n=e?parseInt(e[1],10):0,r=If.test(t);s.push([n,r,t])})),t[i]=s),!s.length)throw new Error(`i18n postprocess: unmatched placeholder - ${i}`);const u=e[e.length-1];let l=0;for(let t=0;t<s.length;t++)if(s[t][0]===u){l=t;break}const[a,c,f]=s[l];return c?e.pop():u!==a&&e.push(a),s.splice(l,1),f}))}return Object.keys(e).length?(n=n.replace(xf,((t,n,r,o,i,s)=>e.hasOwnProperty(r)?`${n}${e[r]}${s}`:t)),n=n.replace(Sf,((t,n)=>e.hasOwnProperty(n)?e[n]:t)),n=n.replace(kf,((t,n)=>{if(e.hasOwnProperty(n)){const r=e[n];if(!r.length)throw new Error(`i18n postprocess: unmatched ICU - ${t} with key: ${n}`);return r.shift()}return t})),n):n}(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function jf(t,e,n,r,o){if(t=_t(t),Array.isArray(t))for(let i=0;i<t.length;i++)jf(t[i],e,n,r,o);else{const i=Qe(),s=Ye();let u=Mu(t)?t:_t(t.provide),l=Iu(t);const a=Je(),c=1048575&a.providerIndexes,f=a.directiveStart,h=a.providerIndexes>>20;if(Mu(t)||!t.multi){const r=new jn(l,o,Sl),d=$f(u,e,o?c:c+h,f);-1===d?(er(Kn(a,s),i,u),Vf(i,t,e.length),e.push(u),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(r),s.push(r)):(n[d]=r,s[d]=r)}else{const d=$f(u,e,c+h,f),p=$f(u,e,c,c+h),y=d>=0&&n[d],g=p>=0&&n[p];if(o&&!g||!o&&!y){er(Kn(a,s),i,u);const c=function(t,e,n,r,o){const i=new jn(t,n,Sl);return i.multi=[],i.index=e,i.componentProviders=0,Hf(i,o,r&&!n),i}(o?zf:Uf,n.length,o,r,l);!o&&g&&(n[p].providerFactory=c),Vf(i,t,e.length,0),e.push(u),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),n.push(c),s.push(c)}else{Vf(i,t,d>-1?d:p,Hf(n[o?p:d],l,!o&&r))}!o&&r&&g&&n[p].componentProviders++}}}function Vf(t,e,n,r){const o=Mu(e),i=!!e.useClass;if(o||i){const s=(i?_t(e.useClass):e).prototype.ngOnDestroy;if(s){const i=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){const t=i.indexOf(n);-1===t?i.push(n,[r,s]):i[t+1].push(r,s)}else i.push(n,s)}}}function Hf(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function $f(t,e,n,r){for(let o=n;o<r;o++)if(e[o]===t)return o;return-1}function Uf(t,e,n,r){return Zf(this.multi,[])}function zf(t,e,n,r){const o=this.multi;let i;if(this.providerFactory){const t=this.providerFactory.componentProviders,e=ar(n,n[1],this.providerFactory.index,r);i=e.slice(0,t),Zf(o,i);for(let n=t;n<e.length;n++)i.push(e[n])}else i=[],Zf(o,i);return i}function Zf(t,e){for(let n=0;n<t.length;n++){const r=t[n];e.push(r())}return e}function Gf(t,e=[]){return n=>{n.providersResolver=(n,r)=>function(t,e,n){const r=Qe();if(r.firstCreatePass){const o=we(t);jf(n,r.data,r.blueprint,o,!0),jf(e,r.data,r.blueprint,o,!1)}}(n,r?r(t):t,e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Wf{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const qf="ngComponent";class Yf{resolveComponentFactory(t){throw function(t){const e=Error(`No component factory found for ${yt(t)}. Did you add it to @NgModule.entryComponents?`);return e[qf]=t,e}(t)}}class Qf{}function Kf(t,e){return new Jf(Ne(t,e))}Qf.NULL=new Yf;class Jf{constructor(t){this.nativeElement=t}}function Xf(t){return t instanceof Jf?t.nativeElement:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Jf.__NG_ELEMENT_ID__=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return Kf(Je(),Ye())},new Er("Renderer2Interceptor");class th{}class eh{}eh.__NG_ELEMENT_ID__=()=>function(){const t=Ye(),e=je(Je().index,t);return function(t){return t[11]}(me(e)?e:t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */();class nh{}nh.ɵprov=Ft({token:nh,providedIn:"root",factory:()=>null});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class rh{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const oh=new rh("13.1.1"),ih={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function sh(t,e,n,r,o=!1){for(;null!==n;){const i=e[n.index];if(null!==i&&r.push(Pe(i)),De(i))for(let t=10;t<i.length;t++){const e=i[t],n=e[1].firstChild;null!==n&&sh(e[1],e,n,r)}const s=n.type;if(8&s)sh(t,e,n.child,r);else if(32&s){const t=Ai(n,e);let o;for(;o=t();)r.push(o)}else if(16&s){const t=Xi(e,n);if(Array.isArray(t))r.push(...t);else{const n=Fi(e[16]);sh(n[1],n,t,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class uh{constructor(t,e){this._lView=t,this._cdRefInjectingView=e,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,e=t[1];return sh(e,t,e.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(De(t)){const e=t[8],n=e?e.indexOf(this):-1;n>-1&&(Ri(t,n),Pr(e,n))}this._attachedToViewContainer=!1}Li(this._lView[1],this._lView)}onDestroy(t){Hs(this._lView[1],this._lView,null,t)}markForCheck(){uu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){lu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){sn(!0);try{lu(t,e,n)}finally{sn(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t,e;this._appRef=null,t=this._lView[1],e=this._lView,rs(t,e,e[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class lh extends uh{constructor(t){super(t),this._view=t}detectChanges(){au(this._view)}checkNoChanges(){!function(t){sn(!0);try{au(t)}finally{sn(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ah extends Qf{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const e=de(t);return new hh(e,this.ngModule)}}function ch(t){const e=[];for(let n in t)if(t.hasOwnProperty(n)){const r=t[n];e.push({propName:r,templateName:n})}return e}const fh=new Er("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Di});class hh extends Wf{constructor(t,e){super(),this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=t.selectors.map(ms).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!e}get inputs(){return ch(this.componentDef.inputs)}get outputs(){return ch(this.componentDef.outputs)}create(t,e,n,r){const o=(r=r||this.ngModule)?function(t,e){return{get:(n,r,o)=>{const i=t.get(n,ih,o);return i!==ih||r===ih?i:e.get(n,r,o)}}}(t,r.injector):t,i=o.get(th,Me),s=o.get(nh,null),u=i.createRenderer(null,this.componentDef),l=this.componentDef.selectors[0][0]||"div",a=n?function(t,e,n){if(Oe(t)){const r=n===$t.ShadowDom;return t.selectRootElement(e,r)}let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(u,n,this.componentDef.encapsulation):Pi(i.createRenderer(null,this.componentDef),l,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(l)),c=this.componentDef.onPush?576:528,f={components:[],scheduler:h||Di,clean:fu,playerHandler:d||null,flags:0};var h,d;const p=Vs(0,null,null,1,0,null,null,null,null,null),y=Ss(null,p,f,c,null,null,i,u,s,o);let g,m;vn(y);try{const t=function(t,e,n,r,o,i){const s=n[1];n[20]=t;const u=ks(s,20,2,"#host",null),l=u.mergedAttrs=e.hostAttrs;null!==l&&(Du(u,l,!0),null!==t&&(Vn(o,t,l),null!==u.classes&&ss(o,t,u.classes),null!==u.styles&&is(o,t,u.styles)));const a=r.createRenderer(t,e),c=Ss(n,js(e),null,e.onPush?64:16,n[20],u,r,a,i||null,null);return s.firstCreatePass&&(er(Kn(u,n),s,e.type),Ws(s,u),Ys(u,n.length,1)),su(n,c),n[20]=c}(a,this.componentDef,y,i,u);if(a)if(n)Vn(u,a,["ng-version",oh.full]);else{const{attrs:t,classes:e}=function(t){const e=[],n=[];let r=1,o=2;for(;r<t.length;){let i=t[r];if("string"==typeof i)2===o?""!==i&&e.push(i,t[++r]):8===o&&n.push(i);else{if(!hs(o))break;o=i}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);t&&Vn(u,a,t),e&&e.length>0&&ss(u,a,e.join(" "))}if(m=Re(p,20),void 0!==e){const t=m.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=e[n];t.push(null!=r?Array.from(r):null)}}g=Bu(t,this.componentDef,y,f,[Nu]),Os(p,y,null)}finally{An()}return new dh(this.componentType,g,Kf(m,y),y,m)}}new ah;class dh extends class{}{constructor(t,e,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.instance=e,this.hostView=this.changeDetectorRef=new lh(r),this.componentType=t}get injector(){return new hr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ph{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const yh=new Map;function gh(t){const e=new Set;!function t(n){const r=ge(n,!0),o=r.id;if(null!==o){const t=yh.get(o);!function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${yt(e)} vs ${yt(e.name)}`)}(o,t,n),yh.set(o,n)}const i=wi(r.imports);for(const n of i)e.has(n)||(e.add(n),t(n))}(t)}class mh extends ph{constructor(t,e){super(),this._parent=e,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new ah(this);const n=ge(t);this._bootstrapComponents=wi(n.bootstrap),this._r3Injector=xu(t,e,[{provide:ph,useValue:this},{provide:Qf,useValue:this.componentFactoryResolver}],yt(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,e=Pu.THROW_IF_NOT_FOUND,n=Bt.Default){return t===Pu||t===ph||t===_u?this:this._r3Injector.get(t,e,n)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach((t=>t())),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Dh extends class{}{constructor(t){super(),this.moduleType=t;null!==ge(t)&&gh(t)}create(t){return new mh(this.moduleType,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function _h(t,e,n){const r=un()+t,o=Ye();return o[r]===Ds?Qu(o,r,n?e.call(n):e()):Ku(o,r)}function vh(t,e,n,r){return Ih(Ye(),un(),t,e,n,r)}function Ch(t,e,n,r,o){return Th(Ye(),un(),t,e,n,r,o)}function wh(t,e,n,r,o,i){return Oh(Ye(),un(),t,e,n,r,o,i)}function bh(t,e,n,r,o,i,s){return Mh(Ye(),un(),t,e,n,r,o,i,s)}function Eh(t,e,n,r,o,i,s,u){const l=un()+t,a=Ye(),c=el(a,l,n,r,o,i);return Ju(a,l+4,s)||c?Qu(a,l+5,u?e.call(u,n,r,o,i,s):e(n,r,o,i,s)):Ku(a,l+5)}function Ah(t,e,n,r,o,i,s,u,l){const a=un()+t,c=Ye(),f=el(c,a,n,r,o,i);return Xu(c,a+4,s,u)||f?Qu(c,a+6,l?e.call(l,n,r,o,i,s,u):e(n,r,o,i,s,u)):Ku(c,a+6)}function Fh(t,e,n,r,o,i,s,u,l,a){const c=un()+t,f=Ye();let h=el(f,c,n,r,o,i);return tl(f,c+4,s,u,l)||h?Qu(f,c+7,a?e.call(a,n,r,o,i,s,u,l):e(n,r,o,i,s,u,l)):Ku(f,c+7)}function xh(t,e,n,r,o,i,s,u,l,a,c){const f=un()+t,h=Ye(),d=el(h,f,n,r,o,i);return el(h,f+4,s,u,l,a)||d?Qu(h,f+8,c?e.call(c,n,r,o,i,s,u,l,a):e(n,r,o,i,s,u,l,a)):Ku(h,f+8)}function Sh(t,e,n,r){return Ph(Ye(),un(),t,e,n,r)}function kh(t,e){const n=t[e];return n===Ds?void 0:n}function Ih(t,e,n,r,o,i){const s=e+n;return Ju(t,s,o)?Qu(t,s+1,i?r.call(i,o):r(o)):kh(t,s+1)}function Th(t,e,n,r,o,i,s){const u=e+n;return Xu(t,u,o,i)?Qu(t,u+2,s?r.call(s,o,i):r(o,i)):kh(t,u+2)}function Oh(t,e,n,r,o,i,s,u){const l=e+n;return tl(t,l,o,i,s)?Qu(t,l+3,u?r.call(u,o,i,s):r(o,i,s)):kh(t,l+3)}function Mh(t,e,n,r,o,i,s,u,l){const a=e+n;return el(t,a,o,i,s,u)?Qu(t,a+4,l?r.call(l,o,i,s,u):r(o,i,s,u)):kh(t,a+4)}function Ph(t,e,n,r,o,i){let s=e+n,u=!1;for(let e=0;e<o.length;e++)Ju(t,s++,o[e])&&(u=!0);return u?Qu(t,s,r.apply(i,o)):kh(t,s)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bh(t,e){const n=Qe();let r;const o=t+20;n.firstCreatePass?(r=function(t,e){if(e)for(let n=e.length-1;n>=0;n--){const r=e[n];if(t===r.name)return r}}(e,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=be(r.type)),s=Rt(Sl);try{const t=Yn(!1),e=i();return Yn(t),function(t,e,n,r){n>=t.data.length&&(t.data[n]=null,t.blueprint[n]=null),e[n]=r}(n,Ye(),o,e),e}finally{Rt(s)}}function Nh(t,e,n){const r=t+20,o=Ye(),i=Le(o,r);return Hh(o,r)?Ih(o,un(),e,i.transform,n,i):i.transform(n)}function Rh(t,e,n,r){const o=t+20,i=Ye(),s=Le(i,o);return Hh(i,o)?Th(i,un(),e,s.transform,n,r,s):s.transform(n,r)}function Lh(t,e,n,r,o){const i=t+20,s=Ye(),u=Le(s,i);return Hh(s,i)?Oh(s,un(),e,u.transform,n,r,o,u):u.transform(n,r,o)}function jh(t,e,n,r,o,i){const s=t+20,u=Ye(),l=Le(u,s);return Hh(u,s)?Mh(u,un(),e,l.transform,n,r,o,i,l):l.transform(n,r,o,i)}function Vh(t,e,n){const r=t+20,o=Ye(),i=Le(o,r);return Hh(o,r)?Ph(o,un(),e,i.transform,n,i):i.transform.apply(i,n)}function Hh(t,e){return t[1].data[e].pure}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function $h(t){return e=>{setTimeout(t,void 0,e)}}const Uh=class extends V{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,e,n){let r=t,o=e||(()=>null),i=n;if(t&&"object"==typeof t){const e=t;r=e.next?.bind(e),o=e.error?.bind(e),i=e.complete?.bind(e)}this.__isAsync&&(o=$h(o),r&&(r=$h(r)),i&&(i=$h(i)));const s=super.subscribe({next:r,error:o,complete:i});return t instanceof p&&t.add(s),s}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zh(){return this._results[Wu()]()}class Zh{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const e=Wu(),n=Zh.prototype;n[e]||(n[e]=zh)}get changes(){return this._changes||(this._changes=new Uh)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,e){return this._results.reduce(t,e)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,e){const n=this;n.dirty=!1;const r=Tr(t);(this._changesDetected=!function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let o=t[r],i=e[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(n._results,r,e))&&(n._results=r,n.length=r.length,n.last=r[this.length-1],n.first=r[0])}notifyOnChanges(){!this._changes||!this._changesDetected&&this._emitDistinctChangesOnly||this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Gh{}Gh.__NG_ELEMENT_ID__=function(){return Yh(Je(),Ye())};const Wh=Gh,qh=class extends Wh{constructor(t,e,n){super(),this._declarationLView=t,this._declarationTContainer=e,this.elementRef=n}createEmbeddedView(t){const e=this._declarationTContainer.tViews,n=Ss(this._declarationLView,e,t,16,null,e.declTNode,null,null,null,null),r=this._declarationLView[this._declarationTContainer.index];n[17]=r;const o=this._declarationLView[19];return null!==o&&(n[19]=o.createEmbeddedView(e)),Os(e,n,t),new uh(n)}};function Yh(t,e){return 4&t.type?new qh(e,t,Kf(t,e)):null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Qh{}Qh.__NG_ELEMENT_ID__=function(){return ed(Je(),Ye())};const Kh=Qh,Jh=class extends Kh{constructor(t,e,n){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=n}get element(){return Kf(this._hostTNode,this._hostLView)}get injector(){return new hr(this._hostTNode,this._hostLView)}get parentInjector(){const t=tr(this._hostTNode,this._hostLView);if(Zn(t)){const e=Wn(t,this._hostLView),n=Gn(t),r=e[1].data[n+8];return new hr(r,e)}return new hr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const e=Xh(this._lContainer);return null!==e&&e[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,e,n){const r=t.createEmbeddedView(e||{});return this.insert(r,n),r}createComponent(t,e,n,r,o){const i=t&&!Ir(t);let s;if(i)s=e;else{const t=e||{};s=t.index,n=t.injector,r=t.projectableNodes,o=t.ngModuleRef}const u=i?t:new hh(de(t)),l=n||this.parentInjector;if(!o&&null==u.ngModule&&l){const t=l.get(ph,null);t&&(o=t)}const a=u.create(l,r,void 0,o);return this.insert(a.hostView,s),a}insert(t,e){const n=t._lView,r=n[1];if(De(n[3])){const e=this.indexOf(t);if(-1!==e)this.detach(e);else{const e=n[3],r=new Jh(e,e[6],e[3]);r.detach(r.indexOf(t))}}const o=this._adjustIndex(e),i=this._lContainer;Bi(r,n,i,o);const s=ts(o,i),u=n[11],l=Zi(u,i[7]);return null!==l&&function(t,e,n,r,o,i){r[0]=o,r[6]=e,rs(t,r,n,1,o,i)}(r,i[6],u,n,l,s),t.attachToViewContainerRef(),Mr(td(i),o,t),t}move(t,e){return this.insert(t,e)}indexOf(t){const e=Xh(this._lContainer);return null!==e?e.indexOf(t):-1}remove(t){const e=this._adjustIndex(t,-1),n=Ri(this._lContainer,e);n&&(Pr(td(this._lContainer),e),Li(n[1],n))}detach(t){const e=this._adjustIndex(t,-1),n=Ri(this._lContainer,e);return n&&null!=Pr(td(this._lContainer),e)?new uh(n):null}_adjustIndex(t,e=0){return null==t?this.length+e:t}};function Xh(t){return t[8]}function td(t){return t[8]||(t[8]=[])}function ed(t,e){let n;const r=e[t.index];if(De(r))n=r;else{let o;if(8&t.type)o=Pe(r);else{const n=e[11];o=n.createComment("");const r=Ne(t,e);$i(n,Zi(n,r),o,function(t,e){return Oe(t)?t.nextSibling(e):e.nextSibling}(n,r),!1)}e[t.index]=n=nu(r,e,o,t),su(e,n)}return new Jh(n,t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class nd{constructor(t){this.queryList=t,this.matches=null}clone(){return new nd(this.queryList)}setDirty(){this.queryList.setDirty()}}class rd{constructor(t=[]){this.queries=t}createEmbeddedView(t){const e=t.queries;if(null!==e){const n=null!==t.contentQueries?t.contentQueries[0]:e.length,r=[];for(let t=0;t<n;t++){const n=e.getByIndex(t),o=this.queries[n.indexInDeclarationView];r.push(o.clone())}return new rd(r)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let e=0;e<this.queries.length;e++)null!==md(t,e).matches&&this.queries[e].setDirty()}}class od{constructor(t,e,n=null){this.predicate=t,this.flags=e,this.read=n}}class id{constructor(t=[]){this.queries=t}elementStart(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(t,e)}elementEnd(t){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(t)}embeddedTView(t){let e=null;for(let n=0;n<this.length;n++){const r=null!==e?e.length:0,o=this.getByIndex(n).embeddedTView(t,r);o&&(o.indexInDeclarationView=n,null!==e?e.push(o):e=[o])}return null!==e?new id(e):null}template(t,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(t,e)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class sd{constructor(t,e=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=e}elementStart(t,e){this.isApplyingToNode(e)&&this.matchTNode(t,e)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,e){this.elementStart(t,e)}embeddedTView(t,e){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,e),new sd(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const e=this._declarationNodeIndex;let n=t.parent;for(;null!==n&&8&n.type&&n.index!==e;)n=n.parent;return e===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(t,e){const n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];this.matchTNodeWithReadOption(t,e,ud(e,o)),this.matchTNodeWithReadOption(t,e,lr(e,t,o,!1,!1))}else n===Gh?4&e.type&&this.matchTNodeWithReadOption(t,e,-1):this.matchTNodeWithReadOption(t,e,lr(e,t,n,!1,!1))}matchTNodeWithReadOption(t,e,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Jf||r===Qh||r===Gh&&4&e.type)this.addMatch(e.index,-2);else{const n=lr(e,t,r,!1,!1);null!==n&&this.addMatch(e.index,n)}else this.addMatch(e.index,n)}}addMatch(t,e){null===this.matches?this.matches=[t,e]:this.matches.push(t,e)}}function ud(t,e){const n=t.localNames;if(null!==n)for(let t=0;t<n.length;t+=2)if(n[t]===e)return n[t+1];return null}function ld(t,e,n,r){return-1===n?function(t,e){return 11&t.type?Kf(t,e):4&t.type?Yh(t,e):null}(e,t):-2===n?function(t,e,n){if(n===Jf)return Kf(e,t);if(n===Gh)return Yh(e,t);if(n===Qh)return ed(e,t)}(t,e,r):ar(t,t[1],n,e)}function ad(t,e,n,r){const o=e[19].queries[r];if(null===o.matches){const r=t.data,i=n.matches,s=[];for(let t=0;t<i.length;t+=2){const o=i[t];if(o<0)s.push(null);else{const u=r[o];s.push(ld(e,u,i[t+1],n.metadata.read))}}o.matches=s}return o.matches}function cd(t,e,n,r){const o=t.queries.getByIndex(n),i=o.matches;if(null!==i){const s=ad(t,e,o,n);for(let t=0;t<i.length;t+=2){const n=i[t];if(n>0)r.push(s[t/2]);else{const o=i[t+1],s=e[-n];for(let t=10;t<s.length;t++){const e=s[t];e[17]===e[3]&&cd(e[1],e,o,r)}if(null!==s[9]){const t=s[9];for(let e=0;e<t.length;e++){const n=t[e];cd(n[1],n,o,r)}}}}}return r}function fd(t){const e=Ye(),n=Qe(),r=gn();mn(r+1);const o=md(n,r);if(t.dirty&&Ve(e)===(2==(2&o.metadata.flags))){if(null===o.matches)t.reset([]);else{const i=o.crossesNgTemplate?cd(n,e,r,[]):ad(n,e,o,r);t.reset(i,Xf),t.notifyOnChanges()}return!0}return!1}function hd(t,e,n){const r=Qe();r.firstCreatePass&&(gd(r,new od(t,e,n),-1),2==(2&e)&&(r.staticViewQueries=!0)),yd(r,Ye(),e)}function dd(t,e,n,r){const o=Qe();if(o.firstCreatePass){const i=Je();gd(o,new od(e,n,r),i.index),function(t,e){const n=t.contentQueries||(t.contentQueries=[]),r=n.length?n[n.length-1]:-1;e!==r&&n.push(t.queries.length-1,e)}(o,t),2==(2&n)&&(o.staticContentQueries=!0)}yd(o,Ye(),n)}function pd(){return t=Ye(),e=gn(),t[19].queries[e].queryList;var t,e}function yd(t,e,n){const r=new Zh(4==(4&n));Hs(t,e,r,r.destroy),null===e[19]&&(e[19]=new rd),e[19].queries.push(new nd(r))}function gd(t,e,n){null===t.queries&&(t.queries=new id),t.queries.track(new sd(e,n))}function md(t,e){return t.queries.getByIndex(e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Dd(t,e){return Yh(t,e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const _d={"ɵɵattribute":nl,"ɵɵattributeInterpolate1":hl,"ɵɵattributeInterpolate2":dl,"ɵɵattributeInterpolate3":pl,"ɵɵattributeInterpolate4":yl,"ɵɵattributeInterpolate5":gl,"ɵɵattributeInterpolate6":ml,"ɵɵattributeInterpolate7":Dl,"ɵɵattributeInterpolate8":_l,"ɵɵattributeInterpolateV":vl,"ɵɵdefineComponent":re,"ɵɵdefineDirective":fe,"ɵɵdefineInjectable":Ft,"ɵɵdefineInjector":xt,"ɵɵdefineNgModule":le,"ɵɵdefinePipe":he,"ɵɵdirectiveInject":Sl,"ɵɵgetInheritedFactory":dr,"ɵɵinject":Jr,"ɵɵinjectAttribute":yr,"ɵɵinvalidFactory":kl,"ɵɵinvalidFactoryDep":Xr,"ɵɵtemplateRefExtractor":Dd,"ɵɵNgOnChangesFeature":Ae,"ɵɵProvidersFeature":Gf,"ɵɵCopyDefinitionFeature":Zu,"ɵɵInheritDefinitionFeature":Lu,"ɵɵnextContext":Wl,"ɵɵnamespaceHTML":On,"ɵɵnamespaceMathML":Tn,"ɵɵnamespaceSVG":In,"ɵɵenableBindings":We,"ɵɵdisableBindings":qe,"ɵɵelementStart":Ol,"ɵɵelementEnd":Ml,"ɵɵelement":Pl,"ɵɵelementContainerStart":Bl,"ɵɵelementContainerEnd":Nl,"ɵɵelementContainer":Rl,"ɵɵpureFunction0":_h,"ɵɵpureFunction1":vh,"ɵɵpureFunction2":Ch,"ɵɵpureFunction3":wh,"ɵɵpureFunction4":bh,"ɵɵpureFunction5":Eh,"ɵɵpureFunction6":Ah,"ɵɵpureFunction7":Fh,"ɵɵpureFunction8":xh,"ɵɵpureFunctionV":Sh,"ɵɵgetCurrentView":Ll,"ɵɵrestoreView":Ke,"ɵɵlistener":$l,"ɵɵprojection":Ql,"ɵɵsyntheticHostProperty":Cc,"ɵɵsyntheticHostListener":Ul,"ɵɵpipeBind1":Nh,"ɵɵpipeBind2":Rh,"ɵɵpipeBind3":Lh,"ɵɵpipeBind4":jh,"ɵɵpipeBindV":Vh,"ɵɵprojectionDef":Yl,"ɵɵhostProperty":vc,"ɵɵproperty":Il,"ɵɵpropertyInterpolate":Kl,"ɵɵpropertyInterpolate1":Jl,"ɵɵpropertyInterpolate2":Xl,"ɵɵpropertyInterpolate3":ta,"ɵɵpropertyInterpolate4":ea,"ɵɵpropertyInterpolate5":na,"ɵɵpropertyInterpolate6":ra,"ɵɵpropertyInterpolate7":oa,"ɵɵpropertyInterpolate8":ia,"ɵɵpropertyInterpolateV":sa,"ɵɵpipe":Bh,"ɵɵqueryRefresh":fd,"ɵɵviewQuery":hd,"ɵɵloadQuery":pd,"ɵɵcontentQuery":dd,"ɵɵreference":wl,"ɵɵclassMap":ba,"ɵɵclassMapInterpolate1":Wa,"ɵɵclassMapInterpolate2":qa,"ɵɵclassMapInterpolate3":Ya,"ɵɵclassMapInterpolate4":Qa,"ɵɵclassMapInterpolate5":Ka,"ɵɵclassMapInterpolate6":Ja,"ɵɵclassMapInterpolate7":Xa,"ɵɵclassMapInterpolate8":tc,"ɵɵclassMapInterpolateV":ec,"ɵɵstyleMap":Ca,"ɵɵstyleMapInterpolate1":nc,"ɵɵstyleMapInterpolate2":rc,"ɵɵstyleMapInterpolate3":oc,"ɵɵstyleMapInterpolate4":ic,"ɵɵstyleMapInterpolate5":sc,"ɵɵstyleMapInterpolate6":uc,"ɵɵstyleMapInterpolate7":lc,"ɵɵstyleMapInterpolate8":ac,"ɵɵstyleMapInterpolateV":cc,"ɵɵstyleProp":_a,"ɵɵstylePropInterpolate1":fc,"ɵɵstylePropInterpolate2":hc,"ɵɵstylePropInterpolate3":dc,"ɵɵstylePropInterpolate4":pc,"ɵɵstylePropInterpolate5":yc,"ɵɵstylePropInterpolate6":gc,"ɵɵstylePropInterpolate7":mc,"ɵɵstylePropInterpolate8":Dc,"ɵɵstylePropInterpolateV":_c,"ɵɵclassProp":va,"ɵɵadvance":_s,"ɵɵtemplate":Cl,"ɵɵtext":Na,"ɵɵtextInterpolate":Ra,"ɵɵtextInterpolate1":La,"ɵɵtextInterpolate2":ja,"ɵɵtextInterpolate3":Va,"ɵɵtextInterpolate4":Ha,"ɵɵtextInterpolate5":$a,"ɵɵtextInterpolate6":Ua,"ɵɵtextInterpolate7":za,"ɵɵtextInterpolate8":Za,"ɵɵtextInterpolateV":Ga,"ɵɵi18n":Pf,"ɵɵi18nAttributes":Bf,"ɵɵi18nExp":Nf,"ɵɵi18nStart":Of,"ɵɵi18nEnd":Mf,"ɵɵi18nApply":Rf,"ɵɵi18nPostprocess":Lf,"ɵɵresolveWindow":_i,"ɵɵresolveDocument":vi,"ɵɵresolveBody":Ci,"ɵɵsetComponentScope":oe,"ɵɵsetNgModuleScope":ae,"ɵɵsanitizeHtml":ni,"ɵɵsanitizeStyle":ri,"ɵɵsanitizeResourceUrl":ii,"ɵɵsanitizeScript":si,"ɵɵsanitizeUrl":oi,"ɵɵsanitizeUrlOrResourceUrl":ai,"ɵɵtrustConstantHtml":ui,"ɵɵtrustConstantResourceUrl":li,forwardRef:Dt,resolveForwardRef:_t},vd=[];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Cd=!1;function wd(t){return Array.isArray(t)?t.every(wd):!!_t(t)}function bd(t,e={}){!function(t,e,n=!1){const r=Tr(e.declarations||Yt);let o=null;Object.defineProperty(t,Xt,{configurable:!0,get:()=>{if(null===o){const n=Sr();o=n.compileNgModule(_d,`ng:///${t.name}/ɵmod.js`,{type:t,bootstrap:Tr(e.bootstrap||Yt).map(_t),declarations:r.map(_t),imports:Tr(e.imports||Yt).map(_t).map(xd),exports:Tr(e.exports||Yt).map(_t).map(xd),schemas:e.schemas?Tr(e.schemas):null,id:e.id||null}),o.schemas||(o.schemas=[])}return o}});let i=null;Object.defineProperty(t,te,{get:()=>{if(null===i){const e=Sr();i=e.compileFactory(_d,`ng:///${t.name}/ɵfac.js`,{name:t.name,type:t,deps:co(t),target:e.FactoryTarget.NgModule,typeArgumentCount:0})}return i},configurable:!1});let s=null;Object.defineProperty(t,Ot,{get:()=>{if(null===s){const n={name:t.name,type:t,providers:e.providers||Yt,imports:[(e.imports||Yt).map(_t),(e.exports||Yt).map(_t)]},r=Sr();s=r.compileInjector(_d,`ng:///${t.name}/ɵinj.js`,n)}return s},configurable:!1})}(t,e),function(t,e){vd.push({moduleType:t,ngModule:e})}(t,e)}function Ed(t,e){const n=Tr(e.declarations||Yt),r=Fd(t);n.forEach((e=>{if(e.hasOwnProperty(Qt)){Ad(de(e),r)}else e.hasOwnProperty(Kt)||e.hasOwnProperty(Jt)||(e.ngSelectorScope=t)}))}function Ad(t,e){t.directiveDefs=()=>Array.from(e.compilation.directives).map((t=>t.hasOwnProperty(Qt)?de(t):pe(t))).filter((t=>!!t)),t.pipeDefs=()=>Array.from(e.compilation.pipes).map((t=>ye(t))),t.schemas=e.schemas,t.tView=null}function Fd(t){if(!Sd(t))throw new Error(`${t.name} does not have a module def (ɵmod property)`);const e=ge(t);if(null!==e.transitiveCompileScopes)return e.transitiveCompileScopes;const n={schemas:e.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return wi(e.imports).forEach((t=>{const e=t;if(!Sd(e))throw new Error(`Importing ${e.name} which does not have a ɵmod property`);const r=Fd(e);r.exported.directives.forEach((t=>n.compilation.directives.add(t))),r.exported.pipes.forEach((t=>n.compilation.pipes.add(t)))})),wi(e.declarations).forEach((t=>{ye(t)?n.compilation.pipes.add(t):n.compilation.directives.add(t)})),wi(e.exports).forEach((t=>{const e=t;if(Sd(e)){const t=Fd(e);t.exported.directives.forEach((t=>{n.compilation.directives.add(t),n.exported.directives.add(t)})),t.exported.pipes.forEach((t=>{n.compilation.pipes.add(t),n.exported.pipes.add(t)}))}else ye(e)?n.exported.pipes.add(e):n.exported.directives.add(e)})),e.transitiveCompileScopes=n,n}function xd(t){return function(t){return void 0!==t.ngModule}(t)?t.ngModule:t}function Sd(t){return!!ge(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let kd=0;function Id(t,e){let n=null;!function(t,e){yo(e)&&(ho.set(t,e),po.add(t))}(t,e),Md(t,e),Object.defineProperty(t,Qt,{get:()=>{if(null===n){const r=Sr();if(yo(e)){const n=[`Component '${t.name}' is not resolved:`];throw e.templateUrl&&n.push(` - templateUrl: ${e.templateUrl}`),e.styleUrls&&e.styleUrls.length&&n.push(` - styleUrls: ${JSON.stringify(e.styleUrls)}`),n.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(n.join("\n"))}let o=e.preserveWhitespaces;void 0===o&&(o=!1);let i=e.encapsulation;void 0===i&&(i=$t.Emulated);const s=e.templateUrl||`ng:///${t.name}/template.html`,u={...Bd(t,e),typeSourceSpan:r.createParseSourceSpan("Component",t.name,s),template:e.template||"",preserveWhitespaces:o,styles:e.styles||Yt,animations:e.animations,directives:[],changeDetection:e.changeDetection,pipes:new Map,encapsulation:i,interpolation:e.interpolation,viewProviders:e.viewProviders||null};kd++;try{u.usesInheritance&&Nd(t),n=r.compileComponent(_d,s,u)}finally{kd--}if(0===kd&&function(){if(!Cd){Cd=!0;try{for(let t=vd.length-1;t>=0;t--){const{moduleType:e,ngModule:n}=vd[t];n.declarations&&n.declarations.every(wd)&&(vd.splice(t,1),Ed(e,n))}}finally{Cd=!1}}}(),void 0!==t.ngSelectorScope){const e=Fd(t.ngSelectorScope);Ad(n,e)}}return n},configurable:!1})}function Td(t,e){let n=null;Md(t,e||{}),Object.defineProperty(t,Kt,{get:()=>{if(null===n){const r=Od(t,e||{}),o=Sr();n=o.compileDirective(_d,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function Od(t,e){const n=t&&t.name,r=`ng:///${n}/ɵdir.js`,o=Sr(),i=Bd(t,e);return i.typeSourceSpan=o.createParseSourceSpan("Directive",n,r),i.usesInheritance&&Nd(t),{metadata:i,sourceMapUrl:r}}function Md(t,e){let n=null;Object.defineProperty(t,te,{get:()=>{if(null===n){const r=Od(t,e),o=Sr();n=o.compileFactory(_d,`ng:///${t.name}/ɵfac.js`,{name:r.metadata.name,type:r.metadata.type,typeArgumentCount:0,deps:co(t),target:o.FactoryTarget.Directive})}return n},configurable:!1})}function Pd(t){return Object.getPrototypeOf(t.prototype)===Object.prototype}function Bd(t,e){const n=ao(),r=n.ownPropMetadata(t);return{name:t.name,type:t,selector:void 0!==e.selector?e.selector:null,host:e.host||qt,propMetadata:r,inputs:e.inputs||Yt,outputs:e.outputs||Yt,queries:Ld(t,r,jd),lifecycle:{usesOnChanges:n.hasLifecycleHook(t,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!Pd(t),exportAs:(o=e.exportAs,void 0===o?null:$d(o)),providers:e.providers||null,viewQueries:Ld(t,r,Vd)};var o}function Nd(t){const e=Object.prototype;let n=Object.getPrototypeOf(t.prototype).constructor;for(;n&&n!==e;)pe(n)||de(n)||!zd(n)||Td(n,null),n=Object.getPrototypeOf(n)}function Rd(t,e){return{propertyName:t,predicate:(n=e.selector,"string"==typeof n?$d(n):_t(n)),descendants:e.descendants,first:e.first,read:e.read?e.read:null,static:!!e.static,emitDistinctChangesOnly:!!e.emitDistinctChangesOnly};var n}function Ld(t,e,n){const r=[];for(const o in e)if(e.hasOwnProperty(o)){const i=e[o];i.forEach((e=>{if(n(e)){if(!e.selector)throw new Error(`Can't construct a query for the property "${o}" of "${bt(t)}" since the query selector wasn't defined.`);if(i.some(Hd))throw new Error("Cannot combine @Input decorators with query decorators");r.push(Rd(o,e))}}))}return r}function jd(t){const e=t.ngMetadataName;return"ContentChild"===e||"ContentChildren"===e}function Vd(t){const e=t.ngMetadataName;return"ViewChild"===e||"ViewChildren"===e}function Hd(t){return"Input"===t.ngMetadataName}function $d(t){return t.split(",").map((t=>t.trim()))}const Ud=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function zd(t){const e=ao();if(Ud.some((n=>e.hasLifecycleHook(t,n))))return!0;const n=e.propMetadata(t);for(const t in n){const e=n[t];for(let t=0;t<e.length;t++){const n=e[t],r=n.ngMetadataName;if(Hd(n)||jd(n)||Vd(n)||"Output"===r||"HostBinding"===r||"HostListener"===r)return!0}}return!1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Zd(t,e){return{type:t,name:t.name,pipeName:e.name,pure:void 0===e.pure||e.pure}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Gd=_r("Directive",((t={})=>t),void 0,void 0,((t,e)=>Td(t,e)));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Wd(...t){}_r("Component",((t={})=>({changeDetection:Vt.Default,...t})),Gd,void 0,((t,e)=>Id(t,e))),_r("Pipe",(t=>({pure:!0,...t})),void 0,void 0,((t,e)=>function(t,e){let n=null,r=null;Object.defineProperty(t,te,{get:()=>{if(null===r){const n=Zd(t,e),o=Sr(n.type);r=o.compileFactory(_d,`ng:///${n.name}/ɵfac.js`,{name:n.name,type:n.type,typeArgumentCount:0,deps:co(t),target:o.FactoryTarget.Pipe})}return r},configurable:!1}),Object.defineProperty(t,Jt,{get:()=>{if(null===n){const r=Zd(t,e),o=Sr(r.type);n=o.compilePipe(_d,`ng:///${r.name}/ɵpipe.js`,r)}return n},configurable:!1})}(t,e))),wr("Input",(t=>({bindingPropertyName:t}))),wr("Output",(t=>({bindingPropertyName:t}))),wr("HostBinding",(t=>({hostPropertyName:t}))),wr("HostListener",((t,e)=>({eventName:t,args:e}))),
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
_r("NgModule",(t=>t),void 0,void 0,((t,e)=>bd(t,e)));const qd=new Er("Application Initializer");class Yd{constructor(t){this.appInits=t,this.resolve=Wd,this.reject=Wd,this.initialized=!1,this.done=!1,this.donePromise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}runInitializers(){if(this.initialized)return;const t=[],e=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let e=0;e<this.appInits.length;e++){const n=this.appInits[e]();if(jl(n))t.push(n);else if(Hl(n)){const e=new Promise(((t,e)=>{n.subscribe({complete:t,error:e})}));t.push(e)}}Promise.all(t).then((()=>{e()})).catch((t=>{this.reject(t)})),0===t.length&&e(),this.initialized=!0}}Yd.ɵfac=function(t){return new(t||Yd)(Jr(qd,8))},Yd.ɵprov=Ft({token:Yd,factory:Yd.ɵfac});const Qd={provide:new Er("AppId"),useFactory:function(){return`${Kd()}${Kd()}${Kd()}`},deps:[]};function Kd(){return String.fromCharCode(97+Math.floor(25*Math.random()))}new Er("Platform Initializer");const Jd=new Er("Platform ID"),Xd=new Er("appBootstrapListener");new Er("Application Packages Root URL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class tp{log(t){console.log(t)}warn(t){console.warn(t)}}tp.ɵfac=function(t){return new(t||tp)},tp.ɵprov=Ft({token:tp,factory:tp.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ep=new Er("LocaleId"),np=new Er("DefaultCurrencyCode");var rp;new Er("Translations"),new Er("TranslationsFormat"),function(t){t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore"}(rp||(rp={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class op{constructor(t,e){this.ngModuleFactory=t,this.componentFactories=e}}class ip{compileModuleSync(t){return new Dh(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){const e=this.compileModuleSync(t),n=wi(ge(t).declarations).reduce(((t,e)=>{const n=de(e);return n&&t.push(new hh(n)),t}),[]);return new op(e,n)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}}ip.ɵfac=function(t){return new(t||ip)},ip.ɵprov=Ft({token:ip,factory:ip.ɵfac}),new Er("compilerOptions");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const sp=Promise.resolve(0);function up(t){"undefined"==typeof Zone?sp.then((()=>{t&&t.apply(null,null)})):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class lp{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Uh(!1),this.onMicrotaskEmpty=new Uh(!1),this.onStable=new Uh(!1),this.onError=new Uh(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!n&&e,r.shouldCoalesceRunChangeDetection=n,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function(){let t=Wt.requestAnimationFrame,e=Wt.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){if(t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId)return;t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(Wt,(()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",(()=>{t.lastRequestAnimationFrameId=-1,fp(t),t.isCheckStableRunning=!0,cp(t),t.isCheckStableRunning=!1}),void 0,(()=>{}),(()=>{}))),t.fakeTopEventTask.invoke()})),fp(t)}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,u)=>{try{return hp(t),n.invokeTask(o,i,s,u)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||t.shouldCoalesceRunChangeDetection)&&e(),dp(t)}},onInvoke:(n,r,o,i,s,u,l)=>{try{return hp(t),n.invoke(o,i,s,u,l)}finally{t.shouldCoalesceRunChangeDetection&&e(),dp(t)}},onHasTask:(e,n,r,o)=>{e.hasTask(r,o),n===r&&("microTask"==o.change?(t._hasPendingMicrotasks=o.microTask,fp(t),cp(t)):"macroTask"==o.change&&(t.hasPendingMacrotasks=o.macroTask))},onHandleError:(e,n,r,o)=>(e.handleError(r,o),t.runOutsideAngular((()=>t.onError.emit(o))),!1)})}(r)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!lp.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(lp.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,e,n){return this._inner.run(t,e,n)}runTask(t,e,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,t,ap,Wd,Wd);try{return o.runTask(i,e,n)}finally{o.cancelTask(i)}}runGuarded(t,e,n){return this._inner.runGuarded(t,e,n)}runOutsideAngular(t){return this._outer.run(t)}}const ap={};function cp(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular((()=>t.onStable.emit(null)))}finally{t.isStable=!0}}}function fp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function hp(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function dp(t){t._nesting--,cp(t)}class pp{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Uh,this.onMicrotaskEmpty=new Uh,this.onStable=new Uh,this.onError=new Uh}run(t,e,n){return t.apply(e,n)}runGuarded(t,e,n){return t.apply(e,n)}runOutsideAngular(t){return t()}runTask(t,e,n,r){return t.apply(e,n)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class yp{constructor(t){this._ngZone=t,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),t.run((()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")}))}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular((()=>{this._ngZone.onStable.subscribe({next:()=>{lp.assertNotInAngularZone(),up((()=>{this._isZoneStable=!0,this._runCallbacksIfReady()}))}})}))}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())up((()=>{for(;0!==this._callbacks.length;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb(this._didWork)}this._didWork=!1}));else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter((e=>!e.updateCb||!e.updateCb(t)||(clearTimeout(e.timeoutId),!1))),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map((t=>({source:t.source,creationLocation:t.creationLocation,data:t.data}))):[]}addCallback(t,e,n){let r=-1;e&&e>0&&(r=setTimeout((()=>{this._callbacks=this._callbacks.filter((t=>t.timeoutId!==r)),t(this._didWork,this.getPendingTasks())}),e)),this._callbacks.push({doneCb:t,timeoutId:r,updateCb:n})}whenStable(t,e,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,e,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(t,e,n){return[]}}yp.ɵfac=function(t){return new(t||yp)(Jr(lp))},yp.ɵprov=Ft({token:yp,factory:yp.ɵfac});class gp{constructor(){this._applications=new Map,mp.addToWindow(this)}registerApplication(t,e){this._applications.set(t,e)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,e=!0){return mp.findTestabilityInTree(this,t,e)}}gp.ɵfac=function(t){return new(t||gp)},gp.ɵprov=Ft({token:gp,factory:gp.ɵfac});let mp=new class{addToWindow(t){}findTestabilityInTree(t,e,n){return null}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new Er("AllowMultipleToken");class Dp{constructor(t){this._injector=t,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(t,e){const n=function(t,e){let n;n="noop"===t?new pp:("zone.js"===t?void 0:t)||new lp({enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!!e?.ngZoneEventCoalescing,shouldCoalesceRunChangeDetection:!!e?.ngZoneRunCoalescing});return n}(e?e.ngZone:void 0,{ngZoneEventCoalescing:e&&e.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:e&&e.ngZoneRunCoalescing||!1}),r=[{provide:lp,useValue:n}];return n.run((()=>{const e=Pu.create({providers:r,parent:this.injector,name:t.moduleType.name}),o=t.create(e),i=o.injector.get(yi,null);if(!i){throw new Ct("402","")}return n.runOutsideAngular((()=>{const t=n.onError.subscribe({next:t=>{i.handleError(t)}});o.onDestroy((()=>{Cp(this._modules,o),t.unsubscribe()}))})),function(t,e,n){try{const r=n();return jl(r)?r.catch((n=>{throw e.runOutsideAngular((()=>t.handleError(n))),n})):r}catch(n){throw e.runOutsideAngular((()=>t.handleError(n))),n}}(i,n,(()=>{const t=o.injector.get(Yd);return t.runInitializers(),t.donePromise.then((()=>(Pc(o.injector.get(ep,"en-US")||"en-US"),this._moduleDoBootstrap(o),o)))}))}))}bootstrapModule(t,e=[]){const n=_p({},e);return function(t,e,n){const r=new Dh(n);return Promise.resolve(r)}(this.injector,0,t).then((t=>this.bootstrapModuleFactory(t,n)))}_moduleDoBootstrap(t){const e=t.injector.get(vp);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach((t=>e.bootstrap(t)));else{if(!t.instance.ngDoBootstrap){throw new Ct("403","")}t.instance.ngDoBootstrap(e)}this._modules.push(t)}onDestroy(t){this._destroyListeners.push(t)}get injector(){return this._injector}destroy(){if(this._destroyed){throw new Ct("404","")}this._modules.slice().forEach((t=>t.destroy())),this._destroyListeners.forEach((t=>t())),this._destroyed=!0}get destroyed(){return this._destroyed}}function _p(t,e){return t=Array.isArray(e)?e.reduce(_p,t):{...t,...e}}Dp.ɵfac=function(t){return new(t||Dp)(Jr(Pu))},Dp.ɵprov=Ft({token:Dp,factory:Dp.ɵfac});class vp{constructor(t,e,n,r,o){this._zone=t,this._injector=e,this._exceptionHandler=n,this._componentFactoryResolver=r,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run((()=>{this.tick()}))}});const i=new B((t=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular((()=>{t.next(this._stable),t.complete()}))})),s=new B((t=>{let e;this._zone.runOutsideAngular((()=>{e=this._zone.onStable.subscribe((()=>{lp.assertNotInAngularZone(),up((()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,t.next(!0))}))}))}));const n=this._zone.onUnstable.subscribe((()=>{lp.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular((()=>{t.next(!1)})))}));return()=>{e.unsubscribe(),n.unsubscribe()}}));this.isStable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=z(t),r=Z(t,1/0),o=t;return o.length?1===o.length?et(o[0]):ct(r)(lt(o,n)):$}(i,s.pipe(function(t){void 0===t&&(t={});var e=t.connector,n=void 0===e?function(){return new V}:e,r=t.resetOnError,o=void 0===r||r,i=t.resetOnComplete,s=void 0===i||i,u=t.resetOnRefCountZero,l=void 0===u||u;return function(t){var e=null,r=null,i=null,u=0,a=!1,c=!1,f=function(){null==r||r.unsubscribe(),r=null},h=function(){f(),e=i=null,a=c=!1},d=function(){var t=e;h(),null==t||t.unsubscribe()};return R((function(t,p){u++,c||a||f();var y=i=null!=i?i:n();p.add((function(){0!=--u||c||a||(r=ht(d,l))})),y.subscribe(p),e||(e=new x({next:function(t){return y.next(t)},error:function(t){c=!0,f(),r=ht(h,o,t),y.error(t)},complete:function(){a=!0,f(),r=ht(h,s),y.complete()}}),lt(t).subscribe(e))}))(t)}}()))}bootstrap(t,e){if(!this._initStatus.done){throw new Ct("405","")}let n;n=t instanceof Wf?t:this._componentFactoryResolver.resolveComponentFactory(t),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(ph);const o=e||n.selector,i=n.create(Pu.NULL,[],o,r),s=i.location.nativeElement,u=i.injector.get(yp,null),l=u&&i.injector.get(gp);return u&&l&&l.registerApplication(s,u),i.onDestroy((()=>{this.detachView(i.hostView),Cp(this.components,i),l&&l.unregisterApplication(s)})),this._loadComponent(i),i}tick(){if(this._runningTick){throw new Ct("101","")}try{this._runningTick=!0;for(let t of this._views)t.detectChanges();0}catch(t){this._zone.runOutsideAngular((()=>this._exceptionHandler.handleError(t)))}finally{this._runningTick=!1}}attachView(t){const e=t;this._views.push(e),e.attachToAppRef(this)}detachView(t){const e=t;Cp(this._views,e),e.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);this._injector.get(Xd,[]).concat(this._bootstrapListeners).forEach((e=>e(t)))}ngOnDestroy(){this._views.slice().forEach((t=>t.destroy())),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}function Cp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */vp.ɵfac=function(t){return new(t||vp)(Jr(lp),Jr(Pu),Jr(yi),Jr(Qf),Jr(Yd))},vp.ɵprov=Ft({token:vp,factory:vp.ɵfac});class wp{}wp.__NG_ELEMENT_ID__=function(t){return function(t,e,n){if(ve(t)&&!n){const n=je(t.index,e);return new uh(n,n)}if(47&t.type){const t=e[16];return new uh(t,e)}return null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(Je(),Ye(),16==(16&t))};class bp{constructor(){}supports(t){return qu(t)}create(t){return new Ap(t)}}const Ep=(t,e)=>e;class Ap{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Ep}forEachItem(t){let e;for(e=this._itHead;null!==e;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,n=this._removalsHead,r=0,o=null;for(;e||n;){const i=!n||e&&e.currentIndex<kp(n,r,o)?e:n,s=kp(i,r,o),u=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(e=e._next,null==i.previousIndex)r++;else{o||(o=[]);const t=s-r,e=u-r;if(t!=e){for(let n=0;n<t;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;e<=i&&i<t&&(o[n]=r+1)}o[i.previousIndex]=e-t}}s!==u&&t(i,s,u)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;null!==e;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;null!==e;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;null!==e;e=e._nextIdentityChange)t(e)}diff(t){if(null==t&&(t=[]),!qu(t))throw new Error(`Error trying to diff '${yt(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e,n,r,o=this._itHead,i=!1;if(Array.isArray(t)){this.length=t.length;for(let e=0;e<this.length;e++)n=t[e],r=this._trackByFn(e,n),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,e)),Object.is(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,e),i=!0),o=o._next}else e=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[Wu()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(t,(t=>{r=this._trackByFn(e,t),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,t,r,e)),Object.is(o.item,t)||this._addIdentityChange(o,t)):(o=this._mismatch(o,t,r,e),i=!0),o=o._next,e++})),this.length=e;return this._truncate(o),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,n,r){let o;return null===t?o=this._itTail:(o=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,o,r)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,o,r)):t=this._addAfter(new Fp(e,n),o,r),t}_verifyReinsertion(t,e,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?t=this._reinsertAfter(o,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;null!==t;){const e=t._next;this._addToRemovals(this._unlink(t)),t=e}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const r=t._prevRemoved,o=t._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(t,e,n),this._addToMoves(t,n),t}_moveAfter(t,e,n){return this._unlink(t),this._insertAfter(t,e,n),this._addToMoves(t,n),t}_addAfter(t,e,n){return this._insertAfter(t,e,n),null===this._additionsTail?this._additionsTail=this._additionsHead=t:this._additionsTail=this._additionsTail._nextAdded=t,t}_insertAfter(t,e,n){const r=null===e?this._itHead:e._next;return t._next=r,t._prev=e,null===r?this._itTail=t:r._prev=t,null===e?this._itHead=t:e._next=t,null===this._linkedRecords&&(this._linkedRecords=new Sp),this._linkedRecords.put(t),t.currentIndex=n,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const e=t._prev,n=t._next;return null===e?this._itHead=n:e._next=n,null===n?this._itTail=e:n._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(null===this._movesTail?this._movesTail=this._movesHead=t:this._movesTail=this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Sp),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=t:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=t,t}}class Fp{constructor(t,e){this.item=t,this.trackById=e,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class xp{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===e||e<=n.currentIndex)&&Object.is(n.trackById,t))return n;return null}remove(t){const e=t._prevDup,n=t._nextDup;return null===e?this._head=n:e._nextDup=n,null===n?this._tail=e:n._prevDup=e,null===this._head}}class Sp{constructor(){this.map=new Map}put(t){const e=t.trackById;let n=this.map.get(e);n||(n=new xp,this.map.set(e,n)),n.add(t)}get(t,e){const n=t,r=this.map.get(n);return r?r.get(t,e):null}remove(t){const e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function kp(t,e,n){const r=t.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+e+o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ip{constructor(){}supports(t){return t instanceof Map||Yu(t)}create(){return new Tp}}class Tp{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let e;for(e=this._mapHead;null!==e;e=e._next)t(e)}forEachPreviousItem(t){let e;for(e=this._previousMapHead;null!==e;e=e._nextPrevious)t(e)}forEachChangedItem(t){let e;for(e=this._changesHead;null!==e;e=e._nextChanged)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;null!==e;e=e._nextAdded)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;null!==e;e=e._nextRemoved)t(e)}diff(t){if(t){if(!(t instanceof Map||Yu(t)))throw new Error(`Error trying to diff '${yt(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(t,((t,n)=>{if(e&&e.key===n)this._maybeAddToChanges(e,t),this._appendAfter=e,e=e._next;else{const r=this._getOrCreateRecordForKey(n,t);e=this._insertBeforeOrAppend(e,r)}})),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let t=e;null!==t;t=t._nextRemoved)t===this._mapHead&&(this._mapHead=null),this._records.delete(t.key),t._nextRemoved=t._next,t.previousValue=t.currentValue,t.currentValue=null,t._prev=null,t._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,e){if(t){const n=t._prev;return e._next=t,e._prev=n,t._prev=e,n&&(n._next=e),t===this._mapHead&&(this._mapHead=e),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(t,e){if(this._records.has(t)){const n=this._records.get(t);this._maybeAddToChanges(n,e);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new Op(t);return this._records.set(t,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,e){Object.is(e,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=e,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,e){t instanceof Map?t.forEach(e):Object.keys(t).forEach((n=>e(t[n],n)))}}class Op{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Mp(){return new Pp([new bp])}class Pp{constructor(t){this.factories=t}static create(t,e){if(null!=e){const n=e.factories.slice();t=t.concat(n)}return new Pp(t)}static extend(t){return{provide:Pp,useFactory:e=>Pp.create(t,e||Mp()),deps:[[Pp,new so,new oo]]}}find(t){const e=this.factories.find((e=>e.supports(t)));if(null!=e)return e;throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function Bp(){return new Np([new Ip])}Pp.ɵprov=Ft({token:Pp,providedIn:"root",factory:Mp});class Np{constructor(t){this.factories=t}static create(t,e){if(e){const n=e.factories.slice();t=t.concat(n)}return new Np(t)}static extend(t){return{provide:Np,useFactory:e=>Np.create(t,e||Bp()),deps:[[Np,new so,new oo]]}}find(t){const e=this.factories.find((e=>e.supports(t)));if(e)return e;throw new Error(`Cannot find a differ supporting object '${t}'`)}}Np.ɵprov=Ft({token:Np,providedIn:"root",factory:Bp});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Rp=[new Ip],Lp=[new bp],jp=new Pp(Lp),Vp=new Np(Rp);!function(t,e,n=[]){const r=`Platform: ${e}`,o=new Er(r)}(null,"core",[{provide:Jd,useValue:"unknown"},{provide:Dp,deps:[Pu]},{provide:gp,deps:[]},{provide:tp,deps:[]}]);const Hp=[{provide:vp,useClass:vp,deps:[lp,Pu,yi,Qf,Yd]},{provide:fh,deps:[lp],useFactory:function(t){let e=[];return t.onStable.subscribe((()=>{for(;e.length;)e.pop()()})),function(t){e.push(t)}}},{provide:Yd,useClass:Yd,deps:[[new oo,qd]]},{provide:ip,useClass:ip,deps:[]},Qd,{provide:Pp,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return jp},deps:[]},{provide:Np,useFactory:function(){return Vp},deps:[]},{provide:ep,useFactory:function(t){return t||("undefined"!=typeof ngI18nClosureMode&&ngI18nClosureMode&&"undefined"!=typeof goog&&"en"!==goog.getLocale()?goog.getLocale():"undefined"!=typeof $localize&&$localize.locale||"en-US")},deps:[[new ro(ep),new oo,new so]]},{provide:np,useValue:"USD"}];class $p{constructor(t){}}$p.ɵfac=function(t){return new(t||$p)(Jr(vp))},$p.ɵmod=le({type:$p}),$p.ɵinj=xt({providers:Hp});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Up=new Er("DocumentToken");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class zp{historyGo(t){throw new Error("Not implemented")}}zp.ɵfac=function(t){return new(t||zp)},zp.ɵprov=Ft({token:zp,factory:function(){return Jr(Zp)},providedIn:"platform"}),new Er("Location Initialized");class Zp extends zp{constructor(t){super(),this._doc=t,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return null.getBaseHref(this._doc)}onPopState(t){const e=null.getGlobalEventTarget(this._doc,"window");return e.addEventListener("popstate",t,!1),()=>e.removeEventListener("popstate",t)}onHashChange(t){const e=null.getGlobalEventTarget(this._doc,"window");return e.addEventListener("hashchange",t,!1),()=>e.removeEventListener("hashchange",t)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(t){this.location.pathname=t}pushState(t,e,n){Gp()?this._history.pushState(t,e,n):this.location.hash=n}replaceState(t,e,n){Gp()?this._history.replaceState(t,e,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}}function Gp(){return!!window.history.pushState}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Wp(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function qp(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length,r=n-("/"===t[n-1]?1:0);return t.slice(0,r)+t.slice(n)}function Yp(t){return t&&"?"!==t[0]?"?"+t:t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Zp.ɵfac=function(t){return new(t||Zp)(Jr(Up))},Zp.ɵprov=Ft({token:Zp,factory:function(){return new Zp(Jr(Up))},providedIn:"platform"});class Qp{historyGo(t){throw new Error("Not implemented")}}Qp.ɵfac=function(t){return new(t||Qp)},Qp.ɵprov=Ft({token:Qp,factory:function(){return function(t){const e=Jr(Up).location;return new Jp(Jr(zp),e&&e.origin||"")}()},providedIn:"root"});const Kp=new Er("appBaseHref");class Jp extends Qp{constructor(t,e){if(super(),this._platformLocation=t,this._removeListenerFns=[],null==e&&(e=this._platformLocation.getBaseHrefFromDOM()),null==e)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=e}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Wp(this._baseHref,t)}path(t=!1){const e=this._platformLocation.pathname+Yp(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${e}${n}`:e}pushState(t,e,n,r){const o=this.prepareExternalUrl(n+Yp(r));this._platformLocation.pushState(t,e,o)}replaceState(t,e,n,r){const o=this.prepareExternalUrl(n+Yp(r));this._platformLocation.replaceState(t,e,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(t=0){this._platformLocation.historyGo?.(t)}}Jp.ɵfac=function(t){return new(t||Jp)(Jr(zp),Jr(Kp,8))},Jp.ɵprov=Ft({token:Jp,factory:Jp.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Xp extends Qp{constructor(t,e){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],null!=e&&(this._baseHref=e)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let e=this._platformLocation.hash;return null==e&&(e="#"),e.length>0?e.substring(1):e}prepareExternalUrl(t){const e=Wp(this._baseHref,t);return e.length>0?"#"+e:e}pushState(t,e,n,r){let o=this.prepareExternalUrl(n+Yp(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,e,o)}replaceState(t,e,n,r){let o=this.prepareExternalUrl(n+Yp(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,e,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(t=0){this._platformLocation.historyGo?.(t)}}Xp.ɵfac=function(t){return new(t||Xp)(Jr(zp),Jr(Kp,8))},Xp.ɵprov=Ft({token:Xp,factory:Xp.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ty{constructor(t,e){this._subject=new Uh,this._urlChangeListeners=[],this._platformStrategy=t;const n=this._platformStrategy.getBaseHref();this._platformLocation=e,this._baseHref=qp(ey(n)),this._platformStrategy.onPopState((t=>{this._subject.emit({url:this.path(!0),pop:!0,state:t.state,type:t.type})}))}path(t=!1){return this.normalize(this._platformStrategy.path(t))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(t,e=""){return this.path()==this.normalize(t+Yp(e))}normalize(t){return ty.stripTrailingSlash(function(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,ey(t)))}prepareExternalUrl(t){return t&&"/"!==t[0]&&(t="/"+t),this._platformStrategy.prepareExternalUrl(t)}go(t,e="",n=null){this._platformStrategy.pushState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Yp(e)),n)}replaceState(t,e="",n=null){this._platformStrategy.replaceState(n,"",t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Yp(e)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(t=0){this._platformStrategy.historyGo?.(t)}onUrlChange(t){this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe((t=>{this._notifyUrlChangeListeners(t.url,t.state)})))}_notifyUrlChangeListeners(t="",e){this._urlChangeListeners.forEach((n=>n(t,e)))}subscribe(t,e,n){return this._subject.subscribe({next:t,error:e,complete:n})}}function ey(t){return t.replace(/\/index.html$/,"")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ty.normalizeQueryParams=Yp,ty.joinWithSlash=Wp,ty.stripTrailingSlash=qp,ty.ɵfac=function(t){return new(t||ty)(Jr(Qp),Jr(zp))},ty.ɵprov=Ft({token:ty,factory:function(){return new ty(Jr(Qp),Jr(zp))},providedIn:"root"});const ny={ADP:[void 0,void 0,0],AFN:[void 0,"؋",0],ALL:[void 0,void 0,0],AMD:[void 0,"֏",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"₼"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"৳"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,"р.",2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN¥","¥"],COP:[void 0,"$",2],CRC:[void 0,"₡",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"Kč",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E£"],ESP:[void 0,"₧",0],EUR:["€"],FJD:[void 0,"$"],FKP:[void 0,"£"],GBP:["£"],GEL:[void 0,"₾"],GHS:[void 0,"GH₵"],GIP:[void 0,"£"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["₪"],INR:["₹"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["¥",void 0,0],KHR:[void 0,"៛"],KMF:[void 0,"CF",0],KPW:[void 0,"₩",0],KRW:["₩",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"₸"],LAK:[void 0,"₭",0],LBP:[void 0,"L£",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"₮",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"₦"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["₱"],PKR:[void 0,"Rs",2],PLN:[void 0,"zł"],PYG:[void 0,"₲",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"₽"],RUR:[void 0,"р."],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"£"],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"£"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"£",0],THB:[void 0,"฿"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"₺"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"₴"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["₫",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["¤"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var ry,oy,iy,sy,uy,ly,ay;function cy(t,e){return my(Ac(t)[Sc.DateFormat],e)}function fy(t,e){return my(Ac(t)[Sc.TimeFormat],e)}function hy(t,e){return my(Ac(t)[Sc.DateTimeFormat],e)}function dy(t,e){const n=Ac(t),r=n[Sc.NumberSymbols][e];if(void 0===r){if(e===ly.CurrencyDecimal)return n[Sc.NumberSymbols][ly.Decimal];if(e===ly.CurrencyGroup)return n[Sc.NumberSymbols][ly.Group]}return r}function py(t,e){return Ac(t)[Sc.NumberFormats][e]}!function(t){t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific"}(ry||(ry={})),function(t){t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other"}(oy||(oy={})),function(t){t[t.Format=0]="Format",t[t.Standalone=1]="Standalone"}(iy||(iy={})),function(t){t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short"}(sy||(sy={})),function(t){t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full"}(uy||(uy={})),function(t){t[t.Decimal=0]="Decimal",t[t.Group=1]="Group",t[t.List=2]="List",t[t.PercentSign=3]="PercentSign",t[t.PlusSign=4]="PlusSign",t[t.MinusSign=5]="MinusSign",t[t.Exponential=6]="Exponential",t[t.SuperscriptingExponent=7]="SuperscriptingExponent",t[t.PerMille=8]="PerMille",t[t[1/0]=9]="Infinity",t[t.NaN=10]="NaN",t[t.TimeSeparator=11]="TimeSeparator",t[t.CurrencyDecimal=12]="CurrencyDecimal",t[t.CurrencyGroup=13]="CurrencyGroup"}(ly||(ly={})),function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(ay||(ay={}));const yy=Fc;function gy(t){if(!t[Sc.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[Sc.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function my(t,e){for(let n=e;n>-1;n--)if(void 0!==t[n])return t[n];throw new Error("Locale data API: locale data undefined")}function Dy(t){const[e,n]=t.split(":");return{hours:+e,minutes:+n}}function _y(t,e,n="en"){const r=function(t){return Ac(t)[Sc.Currencies]}(n)[t]||ny[t]||[],o=r[1];return"narrow"===e&&"string"==typeof o?o:r[0]||t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const vy=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Cy={},wy=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var by,Ey,Ay;function Fy(t,e,n,r){let o=function(t){if(jy(t))return t;if("number"==typeof t&&!isNaN(t))return new Date(t);if("string"==typeof t){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){const[e,n=1,r=1]=t.split("-").map((t=>+t));return xy(e,n-1,r)}const e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(vy))return function(t){const e=new Date(0);let n=0,r=0;const o=t[8]?e.setUTCFullYear:e.setFullYear,i=t[8]?e.setUTCHours:e.setHours;t[9]&&(n=Number(t[9]+t[10]),r=Number(t[9]+t[11]));o.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));const s=Number(t[4]||0)-n,u=Number(t[5]||0)-r,l=Number(t[6]||0),a=Math.floor(1e3*parseFloat("0."+(t[7]||0)));return i.call(e,s,u,l,a),e}(n)}const e=new Date(t);if(!jy(e))throw new Error(`Unable to convert "${t}" into a date`);return e}(t);e=Sy(n,e)||e;let i,s=[];for(;e;){if(i=wy.exec(e),!i){s.push(e);break}{s=s.concat(i.slice(1));const t=s.pop();if(!t)break;e=t}}let u=o.getTimezoneOffset();r&&(u=Ly(r,u),o=function(t,e,n){const r=n?-1:1,o=t.getTimezoneOffset(),i=Ly(e,o);return function(t,e){return(t=new Date(t.getTime())).setMinutes(t.getMinutes()+e),t}(t,r*(i-o))}(o,r,!0));let l="";return s.forEach((t=>{const e=function(t){if(Ry[t])return Ry[t];let e;switch(t){case"G":case"GG":case"GGG":e=Oy(Ay.Eras,sy.Abbreviated);break;case"GGGG":e=Oy(Ay.Eras,sy.Wide);break;case"GGGGG":e=Oy(Ay.Eras,sy.Narrow);break;case"y":e=Ty(Ey.FullYear,1,0,!1,!0);break;case"yy":e=Ty(Ey.FullYear,2,0,!0,!0);break;case"yyy":e=Ty(Ey.FullYear,3,0,!1,!0);break;case"yyyy":e=Ty(Ey.FullYear,4,0,!1,!0);break;case"Y":e=Ny(1);break;case"YY":e=Ny(2,!0);break;case"YYY":e=Ny(3);break;case"YYYY":e=Ny(4);break;case"M":case"L":e=Ty(Ey.Month,1,1);break;case"MM":case"LL":e=Ty(Ey.Month,2,1);break;case"MMM":e=Oy(Ay.Months,sy.Abbreviated);break;case"MMMM":e=Oy(Ay.Months,sy.Wide);break;case"MMMMM":e=Oy(Ay.Months,sy.Narrow);break;case"LLL":e=Oy(Ay.Months,sy.Abbreviated,iy.Standalone);break;case"LLLL":e=Oy(Ay.Months,sy.Wide,iy.Standalone);break;case"LLLLL":e=Oy(Ay.Months,sy.Narrow,iy.Standalone);break;case"w":e=By(1);break;case"ww":e=By(2);break;case"W":e=By(1,!0);break;case"d":e=Ty(Ey.Date,1);break;case"dd":e=Ty(Ey.Date,2);break;case"c":case"cc":e=Ty(Ey.Day,1);break;case"ccc":e=Oy(Ay.Days,sy.Abbreviated,iy.Standalone);break;case"cccc":e=Oy(Ay.Days,sy.Wide,iy.Standalone);break;case"ccccc":e=Oy(Ay.Days,sy.Narrow,iy.Standalone);break;case"cccccc":e=Oy(Ay.Days,sy.Short,iy.Standalone);break;case"E":case"EE":case"EEE":e=Oy(Ay.Days,sy.Abbreviated);break;case"EEEE":e=Oy(Ay.Days,sy.Wide);break;case"EEEEE":e=Oy(Ay.Days,sy.Narrow);break;case"EEEEEE":e=Oy(Ay.Days,sy.Short);break;case"a":case"aa":case"aaa":e=Oy(Ay.DayPeriods,sy.Abbreviated);break;case"aaaa":e=Oy(Ay.DayPeriods,sy.Wide);break;case"aaaaa":e=Oy(Ay.DayPeriods,sy.Narrow);break;case"b":case"bb":case"bbb":e=Oy(Ay.DayPeriods,sy.Abbreviated,iy.Standalone,!0);break;case"bbbb":e=Oy(Ay.DayPeriods,sy.Wide,iy.Standalone,!0);break;case"bbbbb":e=Oy(Ay.DayPeriods,sy.Narrow,iy.Standalone,!0);break;case"B":case"BB":case"BBB":e=Oy(Ay.DayPeriods,sy.Abbreviated,iy.Format,!0);break;case"BBBB":e=Oy(Ay.DayPeriods,sy.Wide,iy.Format,!0);break;case"BBBBB":e=Oy(Ay.DayPeriods,sy.Narrow,iy.Format,!0);break;case"h":e=Ty(Ey.Hours,1,-12);break;case"hh":e=Ty(Ey.Hours,2,-12);break;case"H":e=Ty(Ey.Hours,1);break;case"HH":e=Ty(Ey.Hours,2);break;case"m":e=Ty(Ey.Minutes,1);break;case"mm":e=Ty(Ey.Minutes,2);break;case"s":e=Ty(Ey.Seconds,1);break;case"ss":e=Ty(Ey.Seconds,2);break;case"S":e=Ty(Ey.FractionalSeconds,1);break;case"SS":e=Ty(Ey.FractionalSeconds,2);break;case"SSS":e=Ty(Ey.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=My(by.Short);break;case"ZZZZZ":e=My(by.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=My(by.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=My(by.Long);break;default:return null}return Ry[t]=e,e}(t);l+=e?e(o,n,u):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'")})),l}function xy(t,e,n){const r=new Date(0);return r.setFullYear(t,e,n),r.setHours(0,0,0),r}function Sy(t,e){const n=function(t){return Ac(t)[Sc.LocaleId]}(t);if(Cy[n]=Cy[n]||{},Cy[n][e])return Cy[n][e];let r="";switch(e){case"shortDate":r=cy(t,uy.Short);break;case"mediumDate":r=cy(t,uy.Medium);break;case"longDate":r=cy(t,uy.Long);break;case"fullDate":r=cy(t,uy.Full);break;case"shortTime":r=fy(t,uy.Short);break;case"mediumTime":r=fy(t,uy.Medium);break;case"longTime":r=fy(t,uy.Long);break;case"fullTime":r=fy(t,uy.Full);break;case"short":const e=Sy(t,"shortTime"),n=Sy(t,"shortDate");r=ky(hy(t,uy.Short),[e,n]);break;case"medium":const o=Sy(t,"mediumTime"),i=Sy(t,"mediumDate");r=ky(hy(t,uy.Medium),[o,i]);break;case"long":const s=Sy(t,"longTime"),u=Sy(t,"longDate");r=ky(hy(t,uy.Long),[s,u]);break;case"full":const l=Sy(t,"fullTime"),a=Sy(t,"fullDate");r=ky(hy(t,uy.Full),[l,a])}return r&&(Cy[n][e]=r),r}function ky(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,(function(t,n){return null!=e&&n in e?e[n]:t}))),t}function Iy(t,e,n="-",r,o){let i="";(t<0||o&&t<=0)&&(o?t=1-t:(t=-t,i=n));let s=String(t);for(;s.length<e;)s="0"+s;return r&&(s=s.substr(s.length-e)),i+s}function Ty(t,e,n=0,r=!1,o=!1){return function(i,s){let u=function(t,e){switch(t){case Ey.FullYear:return e.getFullYear();case Ey.Month:return e.getMonth();case Ey.Date:return e.getDate();case Ey.Hours:return e.getHours();case Ey.Minutes:return e.getMinutes();case Ey.Seconds:return e.getSeconds();case Ey.FractionalSeconds:return e.getMilliseconds();case Ey.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}(t,i);if((n>0||u>-n)&&(u+=n),t===Ey.Hours)0===u&&-12===n&&(u=12);else if(t===Ey.FractionalSeconds)return l=e,Iy(u,3).substr(0,l);var l;const a=dy(s,ly.MinusSign);return Iy(u,e,a,r,o)}}function Oy(t,e,n=iy.Format,r=!1){return function(o,i){return function(t,e,n,r,o,i){switch(n){case Ay.Months:return function(t,e,n){const r=Ac(t),o=my([r[Sc.MonthsFormat],r[Sc.MonthsStandalone]],e);return my(o,n)}(e,o,r)[t.getMonth()];case Ay.Days:return function(t,e,n){const r=Ac(t),o=my([r[Sc.DaysFormat],r[Sc.DaysStandalone]],e);return my(o,n)}(e,o,r)[t.getDay()];case Ay.DayPeriods:const s=t.getHours(),u=t.getMinutes();if(i){const t=function(t){const e=Ac(t);return gy(e),(e[Sc.ExtraData][2]||[]).map((t=>"string"==typeof t?Dy(t):[Dy(t[0]),Dy(t[1])]))}(e),n=function(t,e,n){const r=Ac(t);gy(r);const o=my([r[Sc.ExtraData][0],r[Sc.ExtraData][1]],e)||[];return my(o,n)||[]}(e,o,r),i=t.findIndex((t=>{if(Array.isArray(t)){const[e,n]=t,r=s>=e.hours&&u>=e.minutes,o=s<n.hours||s===n.hours&&u<n.minutes;if(e.hours<n.hours){if(r&&o)return!0}else if(r||o)return!0}else if(t.hours===s&&t.minutes===u)return!0;return!1}));if(-1!==i)return n[i]}return function(t,e,n){const r=Ac(t),o=my([r[Sc.DayPeriodsFormat],r[Sc.DayPeriodsStandalone]],e);return my(o,n)}(e,o,r)[s<12?0:1];case Ay.Eras:return function(t,e){return my(Ac(t)[Sc.Eras],e)}(e,r)[t.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(o,i,t,e,n,r)}}function My(t){return function(e,n,r){const o=-1*r,i=dy(n,ly.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case by.Short:return(o>=0?"+":"")+Iy(s,2,i)+Iy(Math.abs(o%60),2,i);case by.ShortGMT:return"GMT"+(o>=0?"+":"")+Iy(s,1,i);case by.Long:return"GMT"+(o>=0?"+":"")+Iy(s,2,i)+":"+Iy(Math.abs(o%60),2,i);case by.Extended:return 0===r?"Z":(o>=0?"+":"")+Iy(s,2,i)+":"+Iy(Math.abs(o%60),2,i);default:throw new Error(`Unknown zone width "${t}"`)}}}!function(t){t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended"}(by||(by={})),function(t){t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day"}(Ey||(Ey={})),function(t){t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras"}(Ay||(Ay={}));function Py(t){return xy(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function By(t,e=!1){return function(n,r){let o;if(e){const t=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,e=n.getDate();o=1+Math.floor((e+t)/7)}else{const t=Py(n),e=function(t){const e=xy(t,0,1).getDay();return xy(t,0,1+(e<=4?4:11)-e)}(t.getFullYear()),r=t.getTime()-e.getTime();o=1+Math.round(r/6048e5)}return Iy(o,t,dy(r,ly.MinusSign))}}function Ny(t,e=!1){return function(n,r){return Iy(Py(n).getFullYear(),t,dy(r,ly.MinusSign),e)}}const Ry={};function Ly(t,e){t=t.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function jy(t){return t instanceof Date&&!isNaN(t.valueOf())}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Vy=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function Hy(t,e,n,r,o,i,s=!1){let u="",l=!1;if(isFinite(t)){let a=function(t){let e,n,r,o,i,s=Math.abs(t)+"",u=0;(n=s.indexOf("."))>-1&&(s=s.replace(".",""));(r=s.search(/e/i))>0?(n<0&&(n=r),n+=+s.slice(r+1),s=s.substring(0,r)):n<0&&(n=s.length);for(r=0;"0"===s.charAt(r);r++);if(r===(i=s.length))e=[0],n=1;else{for(i--;"0"===s.charAt(i);)i--;for(n-=r,e=[],o=0;r<=i;r++,o++)e[o]=Number(s.charAt(r))}n>22&&(e=e.splice(0,21),u=n-1,n=1);return{digits:e,exponent:u,integerLen:n}}(t);s&&(a=function(t){if(0===t.digits[0])return t;const e=t.digits.length-t.integerLen;t.exponent?t.exponent+=2:(0===e?t.digits.push(0,0):1===e&&t.digits.push(0),t.integerLen+=2);return t}(a));let c=e.minInt,f=e.minFrac,h=e.maxFrac;if(i){const t=i.match(Vy);if(null===t)throw new Error(`${i} is not a valid digit info`);const e=t[1],n=t[3],r=t[5];null!=e&&(c=zy(e)),null!=n&&(f=zy(n)),null!=r?h=zy(r):null!=n&&f>h&&(h=f)}!function(t,e,n){if(e>n)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);let r=t.digits,o=r.length-t.integerLen;const i=Math.min(Math.max(e,o),n);let s=i+t.integerLen,u=r[s];if(s>0){r.splice(Math.max(t.integerLen,s));for(let t=s;t<r.length;t++)r[t]=0}else{o=Math.max(0,o),t.integerLen=1,r.length=Math.max(1,s=i+1),r[0]=0;for(let t=1;t<s;t++)r[t]=0}if(u>=5)if(s-1<0){for(let e=0;e>s;e--)r.unshift(0),t.integerLen++;r.unshift(1),t.integerLen++}else r[s-1]++;for(;o<Math.max(0,i);o++)r.push(0);let l=0!==i;const a=e+t.integerLen,c=r.reduceRight((function(t,e,n,r){return e+=t,r[n]=e<10?e:e-10,l&&(0===r[n]&&n>=a?r.pop():l=!1),e>=10?1:0}),0);c&&(r.unshift(c),t.integerLen++)}(a,f,h);let d=a.digits,p=a.integerLen;const y=a.exponent;let g=[];for(l=d.every((t=>!t));p<c;p++)d.unshift(0);for(;p<0;p++)d.unshift(0);p>0?g=d.splice(p,d.length):(g=d,d=[0]);const m=[];for(d.length>=e.lgSize&&m.unshift(d.splice(-e.lgSize,d.length).join(""));d.length>e.gSize;)m.unshift(d.splice(-e.gSize,d.length).join(""));d.length&&m.unshift(d.join("")),u=m.join(dy(n,r)),g.length&&(u+=dy(n,o)+g.join("")),y&&(u+=dy(n,ly.Exponential)+"+"+y)}else u=dy(n,ly.Infinity);return u=t<0&&!l?e.negPre+u+e.negSuf:e.posPre+u+e.posSuf,u}function $y(t,e,n,r,o){const i=Uy(py(e,ry.Currency),dy(e,ly.MinusSign));i.minFrac=function(t){let e;const n=ny[t];return n&&(e=n[2]),"number"==typeof e?e:2}(r),i.maxFrac=i.minFrac;return Hy(t,i,e,ly.CurrencyGroup,ly.CurrencyDecimal,o).replace("¤",n).replace("¤","").trim()}function Uy(t,e="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=t.split(";"),o=r[0],i=r[1],s=-1!==o.indexOf(".")?o.split("."):[o.substring(0,o.lastIndexOf("0")+1),o.substring(o.lastIndexOf("0")+1)],u=s[0],l=s[1]||"";n.posPre=u.substr(0,u.indexOf("#"));for(let t=0;t<l.length;t++){const e=l.charAt(t);"0"===e?n.minFrac=n.maxFrac=t+1:"#"===e?n.maxFrac=t+1:n.posSuf+=e}const a=u.split(",");if(n.gSize=a[1]?a[1].length:0,n.lgSize=a[2]||a[1]?(a[2]||a[1]).length:0,i){const t=o.length-n.posPre.length-n.posSuf.length,e=i.indexOf("#");n.negPre=i.substr(0,e).replace(/'/g,""),n.negSuf=i.substr(e+t).replace(/'/g,"")}else n.negPre=e+n.posPre,n.negSuf=n.posSuf;return n}function zy(t){const e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Zy{}function Gy(t,e,n,r){let o=`=${t}`;if(e.indexOf(o)>-1)return o;if(o=n.getPluralCategory(t,r),e.indexOf(o)>-1)return o;if(e.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${t}"`)}class Wy extends Zy{constructor(t){super(),this.locale=t}getPluralCategory(t,e){switch(yy(e||this.locale)(t)){case oy.Zero:return"zero";case oy.One:return"one";case oy.Two:return"two";case oy.Few:return"few";case oy.Many:return"many";default:return"other"}}}Wy.ɵfac=function(t){return new(t||Wy)(Jr(ep))},Wy.ɵprov=Ft({token:Wy,factory:Wy.ɵfac});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class qy{constructor(t,e,n,r){this._iterableDiffers=t,this._keyValueDiffers=e,this._ngEl=n,this._renderer=r,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(t){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof t?t.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(t){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof t?t.split(/\s+/):t,this._rawClass&&(qu(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const t=this._iterableDiffer.diff(this._rawClass);t&&this._applyIterableChanges(t)}else if(this._keyValueDiffer){const t=this._keyValueDiffer.diff(this._rawClass);t&&this._applyKeyValueChanges(t)}}_applyKeyValueChanges(t){t.forEachAddedItem((t=>this._toggleClass(t.key,t.currentValue))),t.forEachChangedItem((t=>this._toggleClass(t.key,t.currentValue))),t.forEachRemovedItem((t=>{t.previousValue&&this._toggleClass(t.key,!1)}))}_applyIterableChanges(t){t.forEachAddedItem((t=>{if("string"!=typeof t.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${yt(t.item)}`);this._toggleClass(t.item,!0)})),t.forEachRemovedItem((t=>this._toggleClass(t.item,!1)))}_applyClasses(t){t&&(Array.isArray(t)||t instanceof Set?t.forEach((t=>this._toggleClass(t,!0))):Object.keys(t).forEach((e=>this._toggleClass(e,!!t[e]))))}_removeClasses(t){t&&(Array.isArray(t)||t instanceof Set?t.forEach((t=>this._toggleClass(t,!1))):Object.keys(t).forEach((t=>this._toggleClass(t,!1))))}_toggleClass(t,e){(t=t.trim())&&t.split(/\s+/g).forEach((t=>{e?this._renderer.addClass(this._ngEl.nativeElement,t):this._renderer.removeClass(this._ngEl.nativeElement,t)}))}}qy.ɵfac=function(t){return new(t||qy)(Sl(Pp),Sl(Np),Sl(Jf),Sl(eh))},qy.ɵdir=fe({type:qy,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Yy{constructor(t){this._viewContainerRef=t,this._componentRef=null,this._moduleRef=null}ngOnChanges(t){if(this._viewContainerRef.clear(),this._componentRef=null,this.ngComponentOutlet){const e=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;if(t.ngComponentOutletNgModuleFactory)if(this._moduleRef&&this._moduleRef.destroy(),this.ngComponentOutletNgModuleFactory){const t=e.get(ph);this._moduleRef=this.ngComponentOutletNgModuleFactory.create(t.injector)}else this._moduleRef=null;const n=(this._moduleRef?this._moduleRef.componentFactoryResolver:e.get(Qf)).resolveComponentFactory(this.ngComponentOutlet);this._componentRef=this._viewContainerRef.createComponent(n,this._viewContainerRef.length,e,this.ngComponentOutletContent)}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}Yy.ɵfac=function(t){return new(t||Yy)(Sl(Qh))},Yy.ɵdir=fe({type:Yy,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},features:[Ae]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Qy{constructor(t,e,n,r){this.$implicit=t,this.ngForOf=e,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class Ky{constructor(t,e,n){this._viewContainer=t,this._template=e,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){const t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){const e=this._viewContainer;t.forEachOperation(((t,n,r)=>{if(null==t.previousIndex)e.createEmbeddedView(this._template,new Qy(t.item,this._ngForOf,-1,-1),null===r?void 0:r);else if(null==r)e.remove(null===n?void 0:n);else if(null!==n){const o=e.get(n);e.move(o,r),Jy(o,t)}}));for(let t=0,n=e.length;t<n;t++){const r=e.get(t).context;r.index=t,r.count=n,r.ngForOf=this._ngForOf}t.forEachIdentityChange((t=>{Jy(e.get(t.currentIndex),t)}))}static ngTemplateContextGuard(t,e){return!0}}function Jy(t,e){t.context.$implicit=e.item}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Ky.ɵfac=function(t){return new(t||Ky)(Sl(Qh),Sl(Gh),Sl(Pp))},Ky.ɵdir=fe({type:Ky,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}});class Xy{constructor(t,e){this._viewContainer=t,this._context=new tg,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=e}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){eg("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){eg("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,e){return!0}}Xy.ɵfac=function(t){return new(t||Xy)(Sl(Qh),Sl(Gh))},Xy.ɵdir=fe({type:Xy,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}});class tg{constructor(){this.$implicit=null,this.ngIf=null}}function eg(t,e){if(!!(e&&!e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${yt(e)}'.`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ng{constructor(t,e){this._viewContainerRef=t,this._templateRef=e,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(t){t&&!this._created?this.create():!t&&this._created&&this.destroy()}}class rg{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(t){this._ngSwitch=t,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(t)}_matchCase(t){const e=t==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||e,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),e}_updateDefaultCases(t){if(this._defaultViews&&t!==this._defaultUsed){this._defaultUsed=t;for(let e=0;e<this._defaultViews.length;e++){this._defaultViews[e].enforceState(t)}}}}rg.ɵfac=function(t){return new(t||rg)},rg.ɵdir=fe({type:rg,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}});class og{constructor(t,e,n){this.ngSwitch=n,n._addCase(),this._view=new ng(t,e)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}og.ɵfac=function(t){return new(t||og)(Sl(Qh),Sl(Gh),Sl(rg,9))},og.ɵdir=fe({type:og,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}});class ig{constructor(t,e,n){n._addDefault(new ng(t,e))}}ig.ɵfac=function(t){return new(t||ig)(Sl(Qh),Sl(Gh),Sl(rg,9))},ig.ɵdir=fe({type:ig,selectors:[["","ngSwitchDefault",""]]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class sg{constructor(t){this._localization=t,this._caseViews={}}set ngPlural(t){this._switchValue=t,this._updateView()}addCase(t,e){this._caseViews[t]=e}_updateView(){this._clearViews();const t=Object.keys(this._caseViews),e=Gy(this._switchValue,t,this._localization);this._activateView(this._caseViews[e])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(t){t&&(this._activeView=t,this._activeView.create())}}sg.ɵfac=function(t){return new(t||sg)(Sl(Zy))},sg.ɵdir=fe({type:sg,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"}});class ug{constructor(t,e,n,r){this.value=t;const o=!isNaN(Number(t));r.addCase(o?`=${t}`:t,new ng(n,e))}}ug.ɵfac=function(t){return new(t||ug)(yr("ngPluralCase"),Sl(Gh),Sl(Qh),Sl(sg,1))},ug.ɵdir=fe({type:ug,selectors:[["","ngPluralCase",""]]});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class lg{constructor(t,e,n){this._ngEl=t,this._differs=e,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){const t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,e){const[n,r]=t.split(".");null!=(e=null!=e&&r?`${e}${r}`:e)?this._renderer.setStyle(this._ngEl.nativeElement,n,e):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(t){t.forEachRemovedItem((t=>this._setStyle(t.key,null))),t.forEachAddedItem((t=>this._setStyle(t.key,t.currentValue))),t.forEachChangedItem((t=>this._setStyle(t.key,t.currentValue)))}}lg.ɵfac=function(t){return new(t||lg)(Sl(Jf),Sl(Np),Sl(eh))},lg.ɵdir=fe({type:lg,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ag{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null}ngOnChanges(t){if(t.ngTemplateOutlet){const t=this._viewContainerRef;this._viewRef&&t.remove(t.indexOf(this._viewRef)),this._viewRef=this.ngTemplateOutlet?t.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext):null}else this._viewRef&&t.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function cg(t,e){return Error(`InvalidPipeArgument: '${e}' for pipe '${yt(t)}'`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ag.ɵfac=function(t){return new(t||ag)(Sl(Qh))},ag.ɵdir=fe({type:ag,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet"},features:[Ae]});const fg=new class{createSubscription(t,e){return t.then(e,(t=>{throw t}))}dispose(t){}onDestroy(t){}},hg=new class{createSubscription(t,e){return t.subscribe({next:e,error:t=>{throw t}})}dispose(t){t.unsubscribe()}onDestroy(t){t.unsubscribe()}};class dg{constructor(t){this._ref=t,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(t){return this._obj?t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue:(t&&this._subscribe(t),this._latestValue)}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,(e=>this._updateLatestValue(t,e)))}_selectStrategy(t){if(jl(t))return fg;if(Vl(t))return hg;throw cg(dg,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,e){t===this._obj&&(this._latestValue=e,this._ref.markForCheck())}}dg.ɵfac=function(t){return new(t||dg)(Sl(wp,16))},dg.ɵpipe=he({name:"async",type:dg,pure:!1});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class pg{transform(t){if(null==t)return null;if("string"!=typeof t)throw cg(pg,t);return t.toLowerCase()}}pg.ɵfac=function(t){return new(t||pg)},pg.ɵpipe=he({name:"lowercase",type:pg,pure:!0});const yg=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;class gg{transform(t){if(null==t)return null;if("string"!=typeof t)throw cg(gg,t);return t.replace(yg,(t=>t[0].toUpperCase()+t.substr(1).toLowerCase()))}}gg.ɵfac=function(t){return new(t||gg)},gg.ɵpipe=he({name:"titlecase",type:gg,pure:!0});class mg{transform(t){if(null==t)return null;if("string"!=typeof t)throw cg(mg,t);return t.toUpperCase()}}mg.ɵfac=function(t){return new(t||mg)},mg.ɵpipe=he({name:"uppercase",type:mg,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Dg=new Er("DATE_PIPE_DEFAULT_TIMEZONE");class _g{constructor(t,e){this.locale=t,this.defaultTimezone=e}transform(t,e="mediumDate",n,r){if(null==t||""===t||t!=t)return null;try{return Fy(t,e,r||this.locale,n??this.defaultTimezone??void 0)}catch(t){throw cg(_g,t.message)}}}_g.ɵfac=function(t){return new(t||_g)(Sl(ep,16),Sl(Dg,24))},_g.ɵpipe=he({name:"date",type:_g,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const vg=/#/g;class Cg{constructor(t){this._localization=t}transform(t,e,n){if(null==t)return"";if("object"!=typeof e||null===e)throw cg(Cg,e);return e[Gy(t,Object.keys(e),this._localization,n)].replace(vg,t.toString())}}Cg.ɵfac=function(t){return new(t||Cg)(Sl(Zy,16))},Cg.ɵpipe=he({name:"i18nPlural",type:Cg,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class wg{transform(t,e){if(null==t)return"";if("object"!=typeof e||"string"!=typeof t)throw cg(wg,e);return e.hasOwnProperty(t)?e[t]:e.hasOwnProperty("other")?e.other:""}}wg.ɵfac=function(t){return new(t||wg)},wg.ɵpipe=he({name:"i18nSelect",type:wg,pure:!0});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class bg{transform(t){return JSON.stringify(t,null,2)}}bg.ɵfac=function(t){return new(t||bg)},bg.ɵpipe=he({name:"json",type:bg,pure:!1});class Eg{constructor(t){this.differs=t,this.keyValues=[],this.compareFn=Ag}transform(t,e=Ag){if(!t||!(t instanceof Map)&&"object"!=typeof t)return null;this.differ||(this.differ=this.differs.find(t).create());const n=this.differ.diff(t),r=e!==this.compareFn;return n&&(this.keyValues=[],n.forEachItem((t=>{
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var e,n;this.keyValues.push((e=t.key,n=t.currentValue,{key:e,value:n}))}))),(n||r)&&(this.keyValues.sort(e),this.compareFn=e),this.keyValues}}function Ag(t,e){const n=t.key,r=e.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),i=String(r);return o==i?0:o<i?-1:1}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Eg.ɵfac=function(t){return new(t||Eg)(Sl(Np,16))},Eg.ɵpipe=he({name:"keyvalue",type:Eg,pure:!1});class Fg{constructor(t){this._locale=t}transform(t,e,n){if(!kg(t))return null;n=n||this._locale;try{return function(t,e,n){return Hy(t,Uy(py(e,ry.Decimal),dy(e,ly.MinusSign)),e,ly.Group,ly.Decimal,n)}(Ig(t),n,e)}catch(t){throw cg(Fg,t.message)}}}Fg.ɵfac=function(t){return new(t||Fg)(Sl(ep,16))},Fg.ɵpipe=he({name:"number",type:Fg,pure:!0});class xg{constructor(t){this._locale=t}transform(t,e,n){if(!kg(t))return null;n=n||this._locale;try{return function(t,e,n){return Hy(t,Uy(py(e,ry.Percent),dy(e,ly.MinusSign)),e,ly.Group,ly.Decimal,n,!0).replace(new RegExp("%","g"),dy(e,ly.PercentSign))}(Ig(t),n,e)}catch(t){throw cg(xg,t.message)}}}xg.ɵfac=function(t){return new(t||xg)(Sl(ep,16))},xg.ɵpipe=he({name:"percent",type:xg,pure:!0});class Sg{constructor(t,e="USD"){this._locale=t,this._defaultCurrencyCode=e}transform(t,e=this._defaultCurrencyCode,n="symbol",r,o){if(!kg(t))return null;o=o||this._locale,"boolean"==typeof n&&(n=n?"symbol":"code");let i=e||this._defaultCurrencyCode;"code"!==n&&(i="symbol"===n||"symbol-narrow"===n?_y(i,"symbol"===n?"wide":"narrow",o):n);try{return $y(Ig(t),o,i,e,r)}catch(t){throw cg(Sg,t.message)}}}function kg(t){return!(null==t||""===t||t!=t)}function Ig(t){if("string"==typeof t&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if("number"!=typeof t)throw new Error(`${t} is not a number`);return t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Sg.ɵfac=function(t){return new(t||Sg)(Sl(ep,16),Sl(np,16))},Sg.ɵpipe=he({name:"currency",type:Sg,pure:!0});class Tg{transform(t,e,n){if(null==t)return null;if(!this.supports(t))throw cg(Tg,t);return t.slice(e,n)}supports(t){return"string"==typeof t||Array.isArray(t)}}Tg.ɵfac=function(t){return new(t||Tg)},Tg.ɵpipe=he({name:"slice",type:Tg,pure:!1});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Og{}Og.ɵfac=function(t){return new(t||Og)},Og.ɵmod=le({type:Og}),Og.ɵinj=xt({providers:[{provide:Zy,useClass:Wy}]}),
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new rh("13.1.1");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Mg{}Mg.ɵprov=Ft({token:Mg,providedIn:"root",factory:()=>new Pg(Jr(Up),window)});class Pg{constructor(t,e){this.document=t,this.window=e,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(t){this.supportsScrolling()&&this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){if(!this.supportsScrolling())return;const e=function(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let r=n.currentNode;for(;r;){const t=r.shadowRoot;if(t){const n=t.getElementById(e)||t.querySelector(`[name="${e}"]`);if(n)return n}r=n.nextNode()}}return null}(this.document,t);e&&(this.scrollToElement(e),this.attemptFocus(e))}setHistoryScrollRestoration(t){if(this.supportScrollRestoration()){const e=this.window.history;e&&e.scrollRestoration&&(e.scrollRestoration=t)}}scrollToElement(t){const e=t.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}attemptFocus(t){return t.focus(),this.document.activeElement===t}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const t=Bg(this.window.history)||Bg(Object.getPrototypeOf(this.window.history));return!(!t||!t.writable&&!t.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Bg(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}console.log(pg);
